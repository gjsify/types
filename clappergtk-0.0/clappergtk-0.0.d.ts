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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gst from '@girs/gst-1.0';
import type Clapper from '@girs/clapper-0.0';
import type GstTag from '@girs/gsttag-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace ClapperGtk {
    /**
     * ClapperGtk-0.0
     */

    /**
     * ClapperGtk major version component
     */
    const MAJOR_VERSION: number;
    /**
     * ClapperGtk micro version component
     */
    const MICRO_VERSION: number;
    /**
     * ClapperGtk minor version component
     */
    const MINOR_VERSION: number;
    /**
     * ClapperGtk version, encoded as a string
     */
    const VERSION_S: string;
    /**
     * Get [class`Clapper`.Player] used by [class`ClapperGtk`.Video] ancestor of `widget`.
     *
     * This utility is a convenience wrapper for calling [method`Gtk`.Widget.get_ancestor]
     * of type `CLAPPER_GTK_TYPE_VIDEO` and [method`ClapperGtk`.Video.get_player] with
     * additional %NULL checking and type casting.
     *
     * This is meant to be used mainly for custom widget development as an easy access to the
     * underlying parent [class`Clapper`.Player] object. If you want to get the player from
     * [class`ClapperGtk`.Video] widget itself, use [method`ClapperGtk`.Video.get_player] instead.
     *
     * Rememeber that this function will return %NULL when widget does not have
     * a [class`ClapperGtk`.Video] ancestor in widget hierarchy (widget is not yet placed).
     * @param widget a #GtkWidget
     * @returns a #ClapperPlayer from ancestor of a @widget.
     */
    function get_player_from_ancestor(widget: Gtk.Widget): Clapper.Player | null;
    function get_resource(): Gio.Resource;

    export namespace VideoActionMask {
        export const $gtype: GObject.GType<VideoActionMask>;
    }

    enum VideoActionMask {
        /**
         * No action
         */
        NONE,
        /**
         * Reveal fading overlays
         */
        REVEAL_OVERLAYS,
        /**
         * Toggle playback (triggered by single click/tap)
         */
        TOGGLE_PLAY,
        /**
         * Toggle fullscreen (triggered by double click/tap)
         */
        TOGGLE_FULLSCREEN,
        /**
         * Seek request (triggered by double tap on screen side)
         */
        SEEK_REQUEST,
        /**
         * All of the above
         */
        ANY,
    }
    namespace Billboard {
        // Signal signatures
        interface SignalSignatures extends Container.SignalSignatures {
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Container.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A layer where various messages can be displayed.
     *
     * #ClapperGtkBillboard widget is meant to be overlaid on top of
     * [class`ClapperGtk`.Video] as a normal (non-fading) overlay.
     *
     * It is used to display various messages/announcements and later
     * takes care of fading them on its own.
     *
     * If automatic volume/speed change notifications when their values do
     * change are desired, functions for announcing them can be run in callbacks
     * to corresponding property notify signals on the [class`Clapper`.Player].
     */
    class Billboard extends Container implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Billboard>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Billboard.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Billboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Billboard;

        // Signals

        connect<K extends keyof Billboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Billboard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Billboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Billboard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Billboard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Billboard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Temporarily displays current speed value on the
         * side of `billboard`.
         *
         * Use this if you want to present current speed value to the user.
         */
        announce_speed(): void;
        /**
         * Temporarily displays current volume level on the
         * side of `billboard`.
         *
         * Use this if you want to present current volume level to the user.
         */
        announce_volume(): void;
        /**
         * Pins a permanent message on the `billboard`.
         *
         * The message will stay on the `billboard` until a
         * [method`ClapperGtk`.Billboard.unpin_pinned_message] is called.
         * @param icon_name an icon name
         * @param message a message text
         */
        pin_message(icon_name: string, message: string): void;
        /**
         * Posts a temporary message on the `billboard`.
         *
         * Duration how long a message will stay is automatically
         * calculated based on amount of text.
         * @param icon_name an icon name
         * @param message a message text
         */
        post_message(icon_name: string, message: string): void;
        /**
         * Unpins previously pinned message on the `billboard`.
         *
         * If no message was pinned this function will do nothing,
         * so it is safe to call when unsure.
         */
        unpin_pinned_message(): void;

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

    namespace Container {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            adapt: (arg0: boolean) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            adaptive_height: number;
            adaptiveHeight: number;
            adaptive_width: number;
            adaptiveWidth: number;
            height_target: number;
            heightTarget: number;
            width_target: number;
            widthTarget: number;
        }
    }

    /**
     * A simple container widget that holds just one child.
     *
     * It is designed to work well with OSD overlay, adding some useful functionalities
     * to it, such as width and height that widget should target. This helps with
     * implementing simple adaptive widgets by observing its own width and signalling
     * when adaptive threshold is reached.
     *
     * You can use this when you need to create a widget that is adaptive or should have
     * a limited maximal width/height.
     *
     * If you need to have more then single widget as child, place a widget that
     * can hold multiple children such as [class`Gtk`.Box] as a single conatiner child
     * and then your widgets into that child.
     */
    class Container extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Container>;

        // Properties

        /**
         * Adaptive height threshold that triggers [signal`ClapperGtk`.Container::adapt] signal.
         */
        get adaptive_height(): number;
        set adaptive_height(val: number);
        /**
         * Adaptive height threshold that triggers [signal`ClapperGtk`.Container::adapt] signal.
         */
        get adaptiveHeight(): number;
        set adaptiveHeight(val: number);
        /**
         * Adaptive width threshold that triggers [signal`ClapperGtk`.Container::adapt] signal.
         */
        get adaptive_width(): number;
        set adaptive_width(val: number);
        /**
         * Adaptive width threshold that triggers [signal`ClapperGtk`.Container::adapt] signal.
         */
        get adaptiveWidth(): number;
        set adaptiveWidth(val: number);
        /**
         * Height that container should target.
         */
        get height_target(): number;
        set height_target(val: number);
        /**
         * Height that container should target.
         */
        get heightTarget(): number;
        set heightTarget(val: number);
        /**
         * Width that container should target.
         */
        get width_target(): number;
        set width_target(val: number);
        /**
         * Width that container should target.
         */
        get widthTarget(): number;
        set widthTarget(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Container.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Container.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Container;

        // Signals

        connect<K extends keyof Container.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Container.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Container.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Container.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Container.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Container.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get a `container` adaptive height threshold.
         * @returns adaptive height set by user or -1 when none.
         */
        get_adaptive_height(): number;
        /**
         * Get a `container` adaptive width threshold.
         * @returns adaptive width set by user or -1 when none.
         */
        get_adaptive_width(): number;
        /**
         * Get a child #GtkWidget of `container`.
         * @returns #GtkWidget set as child.
         */
        get_child(): Gtk.Widget | null;
        /**
         * Get a `container` height target.
         * @returns height target set by user or -1 when none.
         */
        get_height_target(): number;
        /**
         * Get a `container` width target.
         * @returns width target set by user or -1 when none.
         */
        get_width_target(): number;
        /**
         * Set an adaptive height threshold. When widget is resized to value or lower,
         * an [signal`ClapperGtk`.Container::adapt] signal will be emitted with %TRUE to
         * notify implementation about mobile adaptation request, otherwise %FALSE when
         * both threshold values are exceeded.
         * @param height a threshold on which adapt signal should be triggered or -1 to disable.
         */
        set_adaptive_height(height: number): void;
        /**
         * Set an adaptive width threshold. When widget is resized to value or lower,
         * an [signal`ClapperGtk`.Container::adapt] signal will be emitted with %TRUE to
         * notify implementation about mobile adaptation request, otherwise %FALSE when
         * both threshold values are exceeded.
         * @param width a threshold on which adapt signal should be triggered or -1 to disable.
         */
        set_adaptive_width(width: number): void;
        /**
         * Set a child #GtkWidget of `container`.
         * @param child a #GtkWidget
         */
        set_child(child: Gtk.Widget): void;
        /**
         * Same as clapper_gtk_container_set_width_target() but for widget height.
         * @param height height to target or -1 to restore default behavior
         */
        set_height_target(height: number): void;
        /**
         * Set a width that `container` should target. When set container
         * will not stretch beyond set `width` while still expanding into
         * possible boundaries trying to reach its target.
         * @param width width to target -1 to restore default behavior
         */
        set_width_target(width: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
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

    namespace ExtraMenuButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'open-subtitles': (arg0: Clapper.MediaItem) => void;
            'notify::can-open-subtitles': (pspec: GObject.ParamSpec) => void;
            'notify::speed-visible': (pspec: GObject.ParamSpec) => void;
            'notify::volume-visible': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            can_open_subtitles: boolean;
            canOpenSubtitles: boolean;
            speed_visible: boolean;
            speedVisible: boolean;
            volume_visible: boolean;
            volumeVisible: boolean;
        }
    }

    /**
     * A menu button with extra options.
     */
    class ExtraMenuButton extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<ExtraMenuButton>;

        // Properties

        /**
         * Visibility of open subtitles option inside popover.
         */
        get can_open_subtitles(): boolean;
        set can_open_subtitles(val: boolean);
        /**
         * Visibility of open subtitles option inside popover.
         */
        get canOpenSubtitles(): boolean;
        set canOpenSubtitles(val: boolean);
        /**
         * Visibility of speed control inside popover.
         */
        get speed_visible(): boolean;
        set speed_visible(val: boolean);
        /**
         * Visibility of speed control inside popover.
         */
        get speedVisible(): boolean;
        set speedVisible(val: boolean);
        /**
         * Visibility of volume control inside popover.
         */
        get volume_visible(): boolean;
        set volume_visible(val: boolean);
        /**
         * Visibility of volume control inside popover.
         */
        get volumeVisible(): boolean;
        set volumeVisible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExtraMenuButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ExtraMenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExtraMenuButton;

        // Signals

        connect<K extends keyof ExtraMenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtraMenuButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ExtraMenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtraMenuButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ExtraMenuButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ExtraMenuButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether an option to open external subtitle stream inside popover is visible.
         * @returns %TRUE if open subtitles is visible, %FALSE otherwise.
         */
        get_can_open_subtitles(): boolean;
        /**
         * Get whether speed control inside popover is visible.
         * @returns %TRUE if speed control is visible, %FALSE otherwise.
         */
        get_speed_visible(): boolean;
        /**
         * Get whether volume control inside popover is visible.
         * @returns TRUE if volume control is visible, %FALSE otherwise.
         */
        get_volume_visible(): boolean;
        /**
         * Set whether an option to open external subtitle stream should be allowed.
         *
         * Note that this [class`Gtk`.Widget] can only add subtitles to currently playing
         * [class`Clapper`.MediaItem]. When no media is selected, option to open subtitles
         * will not be shown regardless how this option is set.
         * @param allowed whether opening subtitles should be allowed
         */
        set_can_open_subtitles(allowed: boolean): void;
        /**
         * Set whether speed control inside popover should be visible.
         * @param visible whether visible
         */
        set_speed_visible(visible: boolean): void;
        /**
         * Set whether volume control inside popover should be visible.
         * @param visible whether visible
         */
        set_volume_visible(visible: boolean): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
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

    namespace LeadContainer {
        // Signal signatures
        interface SignalSignatures extends Container.SignalSignatures {
            'notify::blocked-actions': (pspec: GObject.ParamSpec) => void;
            'notify::leading': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Container.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            blocked_actions: VideoActionMask;
            blockedActions: VideoActionMask;
            leading: boolean;
        }
    }

    /**
     * A #ClapperGtkContainer that can take priority in user interactions with the #ClapperGtkVideo.
     *
     * #ClapperGtkLeadContainer is a special type of [class`ClapperGtk`.Container] that can
     * lead in interaction events. When "leading", it is assumed that user interactions
     * over it which would normally trigger actions can be blocked/ignored when set in mask
     * of actions that this widget should block.
     *
     * This kind of container is useful when creating some statically visible overlays
     * covering top of [class`ClapperGtk`.Video] that you want to take priority instead of
     * triggering default actions such as toggle play on click or revealing fading overlays.
     *
     * For more info how container widget works see [class`ClapperGtk`.Container] documentation.
     */
    class LeadContainer extends Container implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<LeadContainer>;

        // Properties

        /**
         * Mask of actions that container blocks from being triggered on video.
         */
        get blocked_actions(): VideoActionMask;
        set blocked_actions(val: VideoActionMask);
        /**
         * Mask of actions that container blocks from being triggered on video.
         */
        get blockedActions(): VideoActionMask;
        set blockedActions(val: VideoActionMask);
        /**
         * Width that container should target.
         */
        get leading(): boolean;
        set leading(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LeadContainer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LeadContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LeadContainer;

        // Signals

        connect<K extends keyof LeadContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LeadContainer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LeadContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LeadContainer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LeadContainer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LeadContainer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get `actions` that were set for this `lead_container` to block.
         * @returns a mask of actions that container blocks from being triggered on video.
         */
        get_blocked_actions(): VideoActionMask;
        /**
         * Get a whenever `lead_container` has leadership set.
         * @returns %TRUE if container is leading, %FALSE otherwise.
         */
        get_leading(): boolean;
        /**
         * Set `actions` that #ClapperGtkVideo should skip when #GdkEvent which
         * would normally trigger them happens inside `lead_container`.
         * @param actions a #ClapperGtkVideoActionMask of actions to block
         */
        set_blocked_actions(actions: VideoActionMask | null): void;
        /**
         * Set if `lead_container` leadership should be enabled.
         *
         * When enabled, interactions with `lead_container` will not trigger
         * their default behavior, instead container and its contents will take priority.
         * @param leading enable leadership
         */
        set_leading(leading: boolean): void;

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

    namespace NextItemButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A #GtkButton for selecting next queue item.
     */
    class NextItemButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<NextItemButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NextItemButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NextItemButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NextItemButton;

        // Signals

        connect<K extends keyof NextItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NextItemButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NextItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NextItemButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NextItemButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NextItemButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The name of the action with which this widget should be associated.
         */
        get action_name(): string;
        set action_name(val: string);
        /**
         * The name of the action with which this widget should be associated.
         */
        get actionName(): string;
        set actionName(val: string);
        /**
         * The target value of the actionable widget's action.
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The `GtkRoot` widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get widthRequest(): number;
        set widthRequest(val: number);

        // Inherited methods
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        set_action_target_value(target_value?: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * [func`Gio`.Action.parse_detailed_name].
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        vfunc_set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
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
        /**
         * Enables or disables an action installed with
         * [method`Gtk`.WidgetClass.install_action].
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * [method`Gtk`.WidgetClass.set_activate_signal]
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use [method`Gtk`.WidgetClass.add_shortcut]
         * with an action created with [ctor`Gtk`.SignalAction.new].
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates an action for the widget.
         *
         * The action is looked up in the action groups associated with
         * `widget` and its ancestors.
         *
         * If the action is in an action group added with
         * [method`Gtk`.Widget.insert_action_group], the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by [method`Gio`.Action.get_parameter_type].
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns true if the action was activated
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * [method`Gtk`.Widget.activate_action].
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of [class`Gtk`.EventController].
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class,` according to CSS matching rules.
         *
         * Use [method`Gtk`.Widget.remove_css_class] to remove the
         * style again.
         * @param css_class style class to add to @widget, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call [method`Gtk`.Widget.queue_resize] or
         * [method`Gtk`.Widget.queue_draw] yourself.
         *
         * [method`Gdk`.FrameClock.get_frame_time] should generally be used
         * for timing continuous animations and
         * [method`Gdk`.FrameTimings.get_predicted_presentation_time] should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * [signal`Gdk`.FrameClock::update] signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to [method`Gtk`.Widget.remove_tick_callback].
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * [method`Gtk`.Widget.size_allocate].
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the [vfunc`Gtk`.Widget.focus] virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * [method`Gtk`.Widget.grab_focus] to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target'`s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget'`s coordinates to coordinates
         * in `target’`s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in @widget's coordinate system
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget'`s coordinate system into `target'`s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @returns true if @widget contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also [method`Gtk`.Widget.get_pango_context].
         * @returns the new `PangoContext`
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new `PangoLayout` that is configured for the widget.
         *
         * The `PangoLayout` will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a `PangoLayout` created in this way around,
         * you need to re-create it when the widgets `PangoContext`
         * is replaced. This can be tracked by listening to changes
         * of the [property`Gtk`.Widget:root] property on the widget.
         * @param text text to set on the layout
         * @returns the new `PangoLayout`
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of [method`Gtk`.Widget.init_template],
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the `GObjectClass.dispose()`
         * implementation of any widget that called [method`Gtk`.Widget.init_template].
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the [property`Gtk`.Settings:gtk-error-bell] setting is true,
         * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
         *
         * Note that the effect of [method`Gdk`.Surface.beep] can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * [method`Gtk`.Widget.size_allocate] allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first `GtkBox` that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidgetClass.snapshot()` function, and when allocating
         * child widgets in `GtkWidgetClass.size_allocate()`.
         * @returns the baseline of the @widget, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See [method`Gtk`.Widget.set_can_focus].
         * @returns true if the input focus can enter @widget
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if @widget can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with [method`Gtk`.Widget.set_child_visible].
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to @widget
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See [method`Gtk`.Widget.set_cursor] for details.
         * @returns the cursor   that is set on @widget
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See [method`Gtk`.Widget.set_direction].
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a `GtkRoot` at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of @widget
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See [method`Gtk`.Widget.set_focus_on_click].
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns true if @widget can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See [method`Gtk`.Widget.set_font_map].
         * @returns the font map of @widget
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee [method`Gtk`.Widget.set_font_options].
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
         * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
         *
         * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use [method`Gtk`.Widget.queue_draw] which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * [method`Gtk`.Widget.queue_draw] will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * [enum`Gtk`.Align.fill] or [enum`Gtk`.Align.center].
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on @widget
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of @widget
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use [method`Gtk`.Widget.compute_expand]
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If [property`Gtk`.Widget:hexpand] property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See [method`Gtk`.Widget.set_layout_manager].
         * @returns the layout manager of @widget
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the [property`Gtk`.Widget:limit-events] property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See [method`Gtk`.Widget.set_name] for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest `GtkNative` ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * `GtkNative` widgets will return themselves here.
         * @returns the `GtkNative` ancestor of @widget
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See [method`Gtk`.Widget.set_opacity].
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * [property`Gtk`.Widget:root] property on the widget.
         * @returns the `PangoContext` for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of @widget
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as `GtkFixed`.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if @widget is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See [method`Gtk`.Widget.set_receives_default].
         * @returns true if @widget acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The `GtkSizeRequestMode` preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the `GtkRoot` widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * `GtkRoot` widgets will return themselves here.
         * @returns the root widget of @widget
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See [method`Gdk`.Surface.get_scale_factor].
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use [method`Gdk`.Surface.get_scale]
         * to get the fractional scale value.
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * [method`Gtk`.Widget.set_sensitive]).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See [method`Gtk`.Widget.is_sensitive].
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the `GtkWidget`
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling [method`Gtk`.Widget.get_width]
         * for [enum`Gtk`.Orientation.horizontal] or [method`Gtk`.Widget.get_height]
         * for [enum`Gtk`.Orientation.vertical], but can be used when
         * writing orientation-independent code, such as when
         * implementing [iface`Gtk`.Orientable] widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of @widget in @orientation
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See [method`Gtk`.Widget.set_size_request].
         *
         * To get the size a widget will actually request, call
         * [method`Gtk`.Widget.measure] instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective [flags`Gtk`.StateFlags.insensitive]
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
         * method, you should look at [method`Gtk`.StyleContext.get_state].
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The `GType` to get a template child for
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * [method`Gtk`.Widget.set_tooltip_markup], this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget'`s tooltip was set using
         * [method`Gtk`.Widget.set_tooltip_markup],
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of @widget
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.get_hexpand] for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * [method`Gtk`.Widget.is_visible] instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See [method`Gtk`.Widget.set_visible].
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of @widget
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside @widget
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if @css_class is currently applied to @widget
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * [method`Gtk`.Widget.has_focus].
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * [method`Gtk`.WidgetClass.set_template].
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement [iface`Gtk`.Actionable] can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix,` actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in @group
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling,` or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param previous_sibling the new previous sibling of @widget
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling,` or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param next_sibling the new next sibling of @widget
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another `GtkWidget`
         * @returns true if @ancestor contains @widget as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if @widget is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the [property`Gtk`.Widget:has-focus]
         * property is necessarily set; [property`Gtk`.Widget:has-focus]
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also [method`Gtk`.Widget.get_visible] and
         * [method`Gtk`.Widget.set_visible].
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * [method`Gtk`.Label.set_mnemonic_widget].
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget'`s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via [method`Gtk`.Widget.contains].
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to @widget's origin
         * @param y y coordinate to test, relative to @widget's origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
         * function.
         *
         * Use this function instead of [method`Gtk`.Widget.queue_resize]
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is [method`Gtk`.Widget.set_halign].
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * [class`Gtk`.Label], the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        realize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from @widget, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * The widget must have previously been added to the list with
         * [method`Gtk`.Widget.add_mnemonic_label].
         * @param label a widget that is a mnemonic label for @widget
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * [method`Gtk`.Widget.add_tick_callback].
         * @param id an ID returned by [method@Gtk.Widget.add_tick_callback]
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with [method`Gtk`.Widget.set_parent], to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether @widget should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
         * with [method`Gtk`.Widget.set_cursor]. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling [method`Gtk`.Widget.set_cursor]
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to [enum`Gtk`.TextDirection.none], then
         * the value set by [func`Gtk`.Widget.set_default_direction] will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their init() function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param focusable whether or not @widget can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a `PangoFontMap`
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the `GdkDisplay`
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not @widget has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call [method`Gtk`.Widget.compute_expand].
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * `GtkWidget`.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
         * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The [property`Gtk`.Widget:hexpand-set] property will be set
         * automatically when you call [method`Gtk`.Widget.set_hexpand]
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for [class`Gtk`.StyleContext].
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * [method`Gdk`.Display.is_composited]. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, [class`Gtk`.Popover]
         * instances and other [iface`Gtk`.Native] widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of [enum`Gtk`.Overflow] for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is [enum`Gtk`.Overflow.visible].
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is [method`Gtk`.Widget.unparent].
         *
         * This function is useful only when implementing subclasses of
         * `GtkWidget`.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not @widget can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, [method`Gtk`.Window.set_default_size] is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * [property`Gtk`.Widget:margin-start],
         * [property`Gtk`.Widget:margin-end],
         * [property`Gtk`.Widget:margin-top], and
         * [property`Gtk`.Widget:margin-bottom], but it does include pretty
         * much all other padding or border properties set by any subclass
         * of `GtkWidget`.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values [flags`Gtk`.StateFlags.dir-ltr] and
         * [flags`Gtk`.StateFlags.dir-rtl] but ignores them. If you want to set
         * the widget's direction, use [method`Gtk`.Widget.set_direction].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
         * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_markup].
         * @param markup the contents of the tooltip for @widget
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * [property`Gtk`.Widget:has-tooltip] as a side effect,
         * and of the default handler for the
         * [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_text].
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.set_hexpand] for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see [method`Gtk`.Widget.get_visible].
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as [class`Gtk`.Popover] instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of [method`Gtk`.Widget.allocate].
         * @param allocation position and size to be allocated to @widget
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * [vfunc`Gtk`.Widget.snapshot] function, calls
         * gtk_widget_snapshot_child() once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot,`
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement `GtkNative`.
         * @param child a child of @widget
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to [method@Gtk.Snapshot.translate] or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget’`s allocation
         * to coordinates relative to `dest_widget’`s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of @src_widget
         * @param src_y Y position in widget coordinates of @src_widget
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        unrealize(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See [method`Gtk`.Widget.set_state_flags].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for gtk_widget_child_focus()
         * @param direction
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a `GtkRoot` widget. Must
         *   chain up
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   `GtkRoot` widget. Must chain up
         */
        vfunc_unroot(): void;
    }

    namespace PreviousItemButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A #GtkButton for selecting previous queue item.
     */
    class PreviousItemButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<PreviousItemButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviousItemButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreviousItemButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreviousItemButton;

        // Signals

        connect<K extends keyof PreviousItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviousItemButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PreviousItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviousItemButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PreviousItemButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreviousItemButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The name of the action with which this widget should be associated.
         */
        get action_name(): string;
        set action_name(val: string);
        /**
         * The name of the action with which this widget should be associated.
         */
        get actionName(): string;
        set actionName(val: string);
        /**
         * The target value of the actionable widget's action.
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The `GtkRoot` widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get widthRequest(): number;
        set widthRequest(val: number);

        // Inherited methods
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        set_action_target_value(target_value?: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * [func`Gio`.Action.parse_detailed_name].
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        vfunc_set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
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
        /**
         * Enables or disables an action installed with
         * [method`Gtk`.WidgetClass.install_action].
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * [method`Gtk`.WidgetClass.set_activate_signal]
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use [method`Gtk`.WidgetClass.add_shortcut]
         * with an action created with [ctor`Gtk`.SignalAction.new].
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates an action for the widget.
         *
         * The action is looked up in the action groups associated with
         * `widget` and its ancestors.
         *
         * If the action is in an action group added with
         * [method`Gtk`.Widget.insert_action_group], the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by [method`Gio`.Action.get_parameter_type].
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns true if the action was activated
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * [method`Gtk`.Widget.activate_action].
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of [class`Gtk`.EventController].
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class,` according to CSS matching rules.
         *
         * Use [method`Gtk`.Widget.remove_css_class] to remove the
         * style again.
         * @param css_class style class to add to @widget, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call [method`Gtk`.Widget.queue_resize] or
         * [method`Gtk`.Widget.queue_draw] yourself.
         *
         * [method`Gdk`.FrameClock.get_frame_time] should generally be used
         * for timing continuous animations and
         * [method`Gdk`.FrameTimings.get_predicted_presentation_time] should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * [signal`Gdk`.FrameClock::update] signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to [method`Gtk`.Widget.remove_tick_callback].
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * [method`Gtk`.Widget.size_allocate].
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the [vfunc`Gtk`.Widget.focus] virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * [method`Gtk`.Widget.grab_focus] to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target'`s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget'`s coordinates to coordinates
         * in `target’`s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in @widget's coordinate system
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget'`s coordinate system into `target'`s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @returns true if @widget contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also [method`Gtk`.Widget.get_pango_context].
         * @returns the new `PangoContext`
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new `PangoLayout` that is configured for the widget.
         *
         * The `PangoLayout` will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a `PangoLayout` created in this way around,
         * you need to re-create it when the widgets `PangoContext`
         * is replaced. This can be tracked by listening to changes
         * of the [property`Gtk`.Widget:root] property on the widget.
         * @param text text to set on the layout
         * @returns the new `PangoLayout`
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of [method`Gtk`.Widget.init_template],
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the `GObjectClass.dispose()`
         * implementation of any widget that called [method`Gtk`.Widget.init_template].
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the [property`Gtk`.Settings:gtk-error-bell] setting is true,
         * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
         *
         * Note that the effect of [method`Gdk`.Surface.beep] can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * [method`Gtk`.Widget.size_allocate] allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first `GtkBox` that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidgetClass.snapshot()` function, and when allocating
         * child widgets in `GtkWidgetClass.size_allocate()`.
         * @returns the baseline of the @widget, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See [method`Gtk`.Widget.set_can_focus].
         * @returns true if the input focus can enter @widget
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if @widget can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with [method`Gtk`.Widget.set_child_visible].
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to @widget
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See [method`Gtk`.Widget.set_cursor] for details.
         * @returns the cursor   that is set on @widget
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See [method`Gtk`.Widget.set_direction].
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a `GtkRoot` at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of @widget
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See [method`Gtk`.Widget.set_focus_on_click].
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns true if @widget can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See [method`Gtk`.Widget.set_font_map].
         * @returns the font map of @widget
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee [method`Gtk`.Widget.set_font_options].
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
         * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
         *
         * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use [method`Gtk`.Widget.queue_draw] which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * [method`Gtk`.Widget.queue_draw] will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * [enum`Gtk`.Align.fill] or [enum`Gtk`.Align.center].
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on @widget
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of @widget
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use [method`Gtk`.Widget.compute_expand]
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If [property`Gtk`.Widget:hexpand] property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See [method`Gtk`.Widget.set_layout_manager].
         * @returns the layout manager of @widget
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the [property`Gtk`.Widget:limit-events] property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See [method`Gtk`.Widget.set_name] for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest `GtkNative` ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * `GtkNative` widgets will return themselves here.
         * @returns the `GtkNative` ancestor of @widget
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See [method`Gtk`.Widget.set_opacity].
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * [property`Gtk`.Widget:root] property on the widget.
         * @returns the `PangoContext` for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of @widget
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as `GtkFixed`.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if @widget is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See [method`Gtk`.Widget.set_receives_default].
         * @returns true if @widget acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The `GtkSizeRequestMode` preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the `GtkRoot` widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * `GtkRoot` widgets will return themselves here.
         * @returns the root widget of @widget
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See [method`Gdk`.Surface.get_scale_factor].
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use [method`Gdk`.Surface.get_scale]
         * to get the fractional scale value.
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * [method`Gtk`.Widget.set_sensitive]).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See [method`Gtk`.Widget.is_sensitive].
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the `GtkWidget`
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling [method`Gtk`.Widget.get_width]
         * for [enum`Gtk`.Orientation.horizontal] or [method`Gtk`.Widget.get_height]
         * for [enum`Gtk`.Orientation.vertical], but can be used when
         * writing orientation-independent code, such as when
         * implementing [iface`Gtk`.Orientable] widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of @widget in @orientation
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See [method`Gtk`.Widget.set_size_request].
         *
         * To get the size a widget will actually request, call
         * [method`Gtk`.Widget.measure] instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective [flags`Gtk`.StateFlags.insensitive]
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
         * method, you should look at [method`Gtk`.StyleContext.get_state].
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The `GType` to get a template child for
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * [method`Gtk`.Widget.set_tooltip_markup], this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget'`s tooltip was set using
         * [method`Gtk`.Widget.set_tooltip_markup],
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of @widget
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.get_hexpand] for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * [method`Gtk`.Widget.is_visible] instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See [method`Gtk`.Widget.set_visible].
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of @widget
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside @widget
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if @css_class is currently applied to @widget
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * [method`Gtk`.Widget.has_focus].
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * [method`Gtk`.WidgetClass.set_template].
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement [iface`Gtk`.Actionable] can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix,` actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in @group
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling,` or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param previous_sibling the new previous sibling of @widget
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling,` or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param next_sibling the new next sibling of @widget
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another `GtkWidget`
         * @returns true if @ancestor contains @widget as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if @widget is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the [property`Gtk`.Widget:has-focus]
         * property is necessarily set; [property`Gtk`.Widget:has-focus]
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also [method`Gtk`.Widget.get_visible] and
         * [method`Gtk`.Widget.set_visible].
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * [method`Gtk`.Label.set_mnemonic_widget].
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget'`s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via [method`Gtk`.Widget.contains].
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to @widget's origin
         * @param y y coordinate to test, relative to @widget's origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
         * function.
         *
         * Use this function instead of [method`Gtk`.Widget.queue_resize]
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is [method`Gtk`.Widget.set_halign].
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * [class`Gtk`.Label], the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        realize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from @widget, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * The widget must have previously been added to the list with
         * [method`Gtk`.Widget.add_mnemonic_label].
         * @param label a widget that is a mnemonic label for @widget
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * [method`Gtk`.Widget.add_tick_callback].
         * @param id an ID returned by [method@Gtk.Widget.add_tick_callback]
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with [method`Gtk`.Widget.set_parent], to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether @widget should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
         * with [method`Gtk`.Widget.set_cursor]. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling [method`Gtk`.Widget.set_cursor]
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to [enum`Gtk`.TextDirection.none], then
         * the value set by [func`Gtk`.Widget.set_default_direction] will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their init() function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param focusable whether or not @widget can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a `PangoFontMap`
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the `GdkDisplay`
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not @widget has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call [method`Gtk`.Widget.compute_expand].
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * `GtkWidget`.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
         * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The [property`Gtk`.Widget:hexpand-set] property will be set
         * automatically when you call [method`Gtk`.Widget.set_hexpand]
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for [class`Gtk`.StyleContext].
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * [method`Gdk`.Display.is_composited]. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, [class`Gtk`.Popover]
         * instances and other [iface`Gtk`.Native] widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of [enum`Gtk`.Overflow] for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is [enum`Gtk`.Overflow.visible].
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is [method`Gtk`.Widget.unparent].
         *
         * This function is useful only when implementing subclasses of
         * `GtkWidget`.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not @widget can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, [method`Gtk`.Window.set_default_size] is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * [property`Gtk`.Widget:margin-start],
         * [property`Gtk`.Widget:margin-end],
         * [property`Gtk`.Widget:margin-top], and
         * [property`Gtk`.Widget:margin-bottom], but it does include pretty
         * much all other padding or border properties set by any subclass
         * of `GtkWidget`.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values [flags`Gtk`.StateFlags.dir-ltr] and
         * [flags`Gtk`.StateFlags.dir-rtl] but ignores them. If you want to set
         * the widget's direction, use [method`Gtk`.Widget.set_direction].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
         * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_markup].
         * @param markup the contents of the tooltip for @widget
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * [property`Gtk`.Widget:has-tooltip] as a side effect,
         * and of the default handler for the
         * [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_text].
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.set_hexpand] for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see [method`Gtk`.Widget.get_visible].
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as [class`Gtk`.Popover] instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of [method`Gtk`.Widget.allocate].
         * @param allocation position and size to be allocated to @widget
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * [vfunc`Gtk`.Widget.snapshot] function, calls
         * gtk_widget_snapshot_child() once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot,`
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement `GtkNative`.
         * @param child a child of @widget
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to [method@Gtk.Snapshot.translate] or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget’`s allocation
         * to coordinates relative to `dest_widget’`s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of @src_widget
         * @param src_y Y position in widget coordinates of @src_widget
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        unrealize(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See [method`Gtk`.Widget.set_state_flags].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for gtk_widget_child_focus()
         * @param direction
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a `GtkRoot` widget. Must
         *   chain up
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   `GtkRoot` widget. Must chain up
         */
        vfunc_unroot(): void;
    }

    namespace SeekBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::reveal-labels': (pspec: GObject.ParamSpec) => void;
            'notify::seek-method': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            reveal_labels: boolean;
            revealLabels: boolean;
            seek_method: Clapper.PlayerSeekMethod;
            seekMethod: Clapper.PlayerSeekMethod;
        }
    }

    /**
     * A bar for seeking and displaying playback position.
     */
    class SeekBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<SeekBar>;

        // Properties

        /**
         * Reveal state of the position and duration labels.
         */
        get reveal_labels(): boolean;
        set reveal_labels(val: boolean);
        /**
         * Reveal state of the position and duration labels.
         */
        get revealLabels(): boolean;
        set revealLabels(val: boolean);
        /**
         * Method used for seeking.
         */
        get seek_method(): Clapper.PlayerSeekMethod;
        set seek_method(val: Clapper.PlayerSeekMethod);
        /**
         * Method used for seeking.
         */
        get seekMethod(): Clapper.PlayerSeekMethod;
        set seekMethod(val: Clapper.PlayerSeekMethod);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SeekBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SeekBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SeekBar;

        // Signals

        connect<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SeekBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SeekBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SeekBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether the position and duration labels are going to be revealed.
         * @returns TRUE if the labels are going to be revealed, %FALSE otherwise.
         */
        get_reveal_labels(): boolean;
        /**
         * Get [enum`Clapper`.PlayerSeekMethod] used when seeking with seek bar.
         * @returns #ClapperPlayerSeekMethod used for seeking.
         */
        get_seek_method(): Clapper.PlayerSeekMethod;
        /**
         * Set whether the position and duration labels should be revealed.
         * @param reveal whether to reveal labels
         */
        set_reveal_labels(reveal: boolean): void;
        /**
         * Set [enum`Clapper`.PlayerSeekMethod] to use when seeking with seek bar.
         * @param method a #ClapperPlayerSeekMethod
         */
        set_seek_method(method: Clapper.PlayerSeekMethod | null): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
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

    namespace SimpleControls {
        // Signal signatures
        interface SignalSignatures extends Container.SignalSignatures {
            'notify::extra-menu-button': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreenable': (pspec: GObject.ParamSpec) => void;
            'notify::seek-method': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Container.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            extra_menu_button: ExtraMenuButton;
            extraMenuButton: ExtraMenuButton;
            fullscreenable: boolean;
            seek_method: Clapper.PlayerSeekMethod;
            seekMethod: Clapper.PlayerSeekMethod;
        }
    }

    /**
     * A minimalistic playback controls panel widget.
     *
     * #ClapperGtkSimpleControls is a simple, ready to be used playback controls widget.
     * It is meant to be placed as an overlay (either fading or not) of [class`ClapperGtk`.Video]
     * as-is, providing minimal yet universal playback controls for your app.
     *
     * If you need a further customized controls, please use individual widgets this
     * widget consists of to build your own controls implementation instead.
     */
    class SimpleControls extends Container implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<SimpleControls>;

        // Properties

        /**
         * Access to extra menu button within controls.
         */
        get extra_menu_button(): ExtraMenuButton;
        /**
         * Access to extra menu button within controls.
         */
        get extraMenuButton(): ExtraMenuButton;
        /**
         * Whether toggle fullscreen button should be visible.
         */
        get fullscreenable(): boolean;
        set fullscreenable(val: boolean);
        /**
         * Method used for seeking.
         */
        get seek_method(): Clapper.PlayerSeekMethod;
        set seek_method(val: Clapper.PlayerSeekMethod);
        /**
         * Method used for seeking.
         */
        get seekMethod(): Clapper.PlayerSeekMethod;
        set seekMethod(val: Clapper.PlayerSeekMethod);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleControls.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleControls.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SimpleControls;

        // Signals

        connect<K extends keyof SimpleControls.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleControls.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleControls.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleControls.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleControls.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleControls.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get [class`ClapperGtk`.ExtraMenuButton] that resides within `controls`.
         * @returns #ClapperGtkExtraMenuButton within simple controls panel.
         */
        get_extra_menu_button(): ExtraMenuButton;
        /**
         * Get whether [class`ClapperGtk`.ToggleFullscreenButton] button in the `controls`
         * is set to be visible.
         * @returns %TRUE when fullscreenable, %FALSE otherwise.
         */
        get_fullscreenable(): boolean;
        /**
         * Get [enum`Clapper`.PlayerSeekMethod] used when seeking with progress bar.
         * @returns #ClapperPlayerSeekMethod used for seeking.
         */
        get_seek_method(): Clapper.PlayerSeekMethod;
        /**
         * Set whether [class`ClapperGtk`.ToggleFullscreenButton] button in the `controls`
         * should be visible.
         *
         * You might want to consider setting this to %FALSE, if your application
         * does not implement [signal`ClapperGtk`.Video::toggle-fullscreen] signal.
         * @param fullscreenable whether show button for toggling fullscreen state
         */
        set_fullscreenable(fullscreenable: boolean): void;
        /**
         * Set [enum`Clapper`.PlayerSeekMethod] to use when seeking with progress bar.
         * @param method a #ClapperPlayerSeekMethod
         */
        set_seek_method(method: Clapper.PlayerSeekMethod | null): void;

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

    namespace TitleHeader {
        // Signal signatures
        interface SignalSignatures extends LeadContainer.SignalSignatures {
            'notify::current-title': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-to-uri': (pspec: GObject.ParamSpec) => void;
            'notify::blocked-actions': (pspec: GObject.ParamSpec) => void;
            'notify::leading': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends LeadContainer.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            current_title: string;
            currentTitle: string;
            fallback_to_uri: boolean;
            fallbackToUri: boolean;
        }
    }

    /**
     * A header panel widget that displays current media title.
     *
     * #ClapperGtkTitleHeader is a simple, ready to be used header widget that
     * displays current media title. It can be placed as-is as a [class`ClapperGtk`.Video]
     * overlay (either fading or not).
     *
     * If you need a further customized header, you can use [class`ClapperGtk`.TitleLabel]
     * which is used by this widget to build your own implementation instead.
     */
    class TitleHeader extends LeadContainer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<TitleHeader>;

        // Properties

        /**
         * Currently displayed title.
         */
        get current_title(): string;
        /**
         * Currently displayed title.
         */
        get currentTitle(): string;
        /**
         * When title cannot be determined, show URI instead.
         */
        get fallback_to_uri(): boolean;
        set fallback_to_uri(val: boolean);
        /**
         * When title cannot be determined, show URI instead.
         */
        get fallbackToUri(): boolean;
        set fallbackToUri(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TitleHeader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TitleHeader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TitleHeader;

        // Signals

        connect<K extends keyof TitleHeader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleHeader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TitleHeader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleHeader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TitleHeader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TitleHeader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get currently displayed title by `header`.
         * @returns text of title label.
         */
        get_current_title(): string;
        /**
         * Get whether a [property`Clapper`.MediaItem:uri] property is going
         * be displayed as a header text when no other title could be determined.
         * @returns %TRUE when item URI will be used as fallback, %FALSE otherwise.
         */
        get_fallback_to_uri(): boolean;
        /**
         * Set whether a [property`Clapper`.MediaItem:uri] property should
         * be displayed as a header text when no other title could be determined.
         * @param enabled whether enabled
         */
        set_fallback_to_uri(enabled: boolean): void;

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

    namespace TitleLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::current-title': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-to-uri': (pspec: GObject.ParamSpec) => void;
            'notify::media-item': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            current_title: string;
            currentTitle: string;
            fallback_to_uri: boolean;
            fallbackToUri: boolean;
            media_item: Clapper.MediaItem;
            mediaItem: Clapper.MediaItem;
        }
    }

    /**
     * A label showing an up to date title of media item.
     *
     * By default #ClapperGtkTitleLabel will automatically show title
     * of [property`Clapper`.Queue:current-item] when placed within
     * [class`ClapperGtk`.Video] widget hierarchy.
     *
     * Setting [property`ClapperGtk`.TitleLabel:media-item] property will
     * make it show title of that particular [class`Clapper`.MediaItem]
     * instead. Providing an item to read title from also allows using
     * this [class`Gtk`.Widget] outside of [class`ClapperGtk`.Video].
     */
    class TitleLabel extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<TitleLabel>;

        // Properties

        /**
         * Currently displayed title.
         */
        get current_title(): string;
        /**
         * Currently displayed title.
         */
        get currentTitle(): string;
        /**
         * When title cannot be determined, show URI instead.
         */
        get fallback_to_uri(): boolean;
        set fallback_to_uri(val: boolean);
        /**
         * When title cannot be determined, show URI instead.
         */
        get fallbackToUri(): boolean;
        set fallbackToUri(val: boolean);
        /**
         * Currently set media item to display title of.
         */
        get media_item(): Clapper.MediaItem;
        set media_item(val: Clapper.MediaItem);
        /**
         * Currently set media item to display title of.
         */
        get mediaItem(): Clapper.MediaItem;
        set mediaItem(val: Clapper.MediaItem);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TitleLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TitleLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TitleLabel;

        // Signals

        connect<K extends keyof TitleLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TitleLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TitleLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TitleLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get currently displayed title by `label`.
         * @returns text of title label.
         */
        get_current_title(): string;
        /**
         * Get whether a [property`Clapper`.MediaItem:uri] property is going
         * be displayed as a label text when no other title could be determined.
         * @returns %TRUE when item URI will be used as fallback, %FALSE otherwise.
         */
        get_fallback_to_uri(): boolean;
        /**
         * Get currently set media item to display title of.
         * @returns currently set media item.
         */
        get_media_item(): Clapper.MediaItem | null;
        /**
         * Set whether a [property`Clapper`.MediaItem:uri] property should
         * be displayed as a label text when no other title could be determined.
         * @param enabled whether enabled
         */
        set_fallback_to_uri(enabled: boolean): void;
        /**
         * Set a media item to display title of as label. When set to %NULL,
         * `label` will use default behavior (showing title of current queue item).
         * @param item a #ClapperMediaItem
         */
        set_media_item(item?: Clapper.MediaItem | null): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
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

    namespace ToggleFullscreenButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A #GtkButton for toggling fullscreen state.
     */
    class ToggleFullscreenButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<ToggleFullscreenButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ToggleFullscreenButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ToggleFullscreenButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ToggleFullscreenButton;

        // Signals

        connect<K extends keyof ToggleFullscreenButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToggleFullscreenButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ToggleFullscreenButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToggleFullscreenButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ToggleFullscreenButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ToggleFullscreenButton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The name of the action with which this widget should be associated.
         */
        get action_name(): string;
        set action_name(val: string);
        /**
         * The name of the action with which this widget should be associated.
         */
        get actionName(): string;
        set actionName(val: string);
        /**
         * The target value of the actionable widget's action.
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The `GtkRoot` widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get widthRequest(): number;
        set widthRequest(val: number);

        // Inherited methods
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        set_action_target_value(target_value?: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * [func`Gio`.Action.parse_detailed_name].
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        vfunc_set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
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
        /**
         * Enables or disables an action installed with
         * [method`Gtk`.WidgetClass.install_action].
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * [method`Gtk`.WidgetClass.set_activate_signal]
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use [method`Gtk`.WidgetClass.add_shortcut]
         * with an action created with [ctor`Gtk`.SignalAction.new].
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates an action for the widget.
         *
         * The action is looked up in the action groups associated with
         * `widget` and its ancestors.
         *
         * If the action is in an action group added with
         * [method`Gtk`.Widget.insert_action_group], the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by [method`Gio`.Action.get_parameter_type].
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns true if the action was activated
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * [method`Gtk`.Widget.activate_action].
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of [class`Gtk`.EventController].
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class,` according to CSS matching rules.
         *
         * Use [method`Gtk`.Widget.remove_css_class] to remove the
         * style again.
         * @param css_class style class to add to @widget, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call [method`Gtk`.Widget.queue_resize] or
         * [method`Gtk`.Widget.queue_draw] yourself.
         *
         * [method`Gdk`.FrameClock.get_frame_time] should generally be used
         * for timing continuous animations and
         * [method`Gdk`.FrameTimings.get_predicted_presentation_time] should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * [signal`Gdk`.FrameClock::update] signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to [method`Gtk`.Widget.remove_tick_callback].
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * [method`Gtk`.Widget.size_allocate].
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the [vfunc`Gtk`.Widget.focus] virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * [method`Gtk`.Widget.grab_focus] to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target'`s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget'`s coordinates to coordinates
         * in `target’`s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in @widget's coordinate system
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget'`s coordinate system into `target'`s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @returns true if @widget contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also [method`Gtk`.Widget.get_pango_context].
         * @returns the new `PangoContext`
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new `PangoLayout` that is configured for the widget.
         *
         * The `PangoLayout` will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a `PangoLayout` created in this way around,
         * you need to re-create it when the widgets `PangoContext`
         * is replaced. This can be tracked by listening to changes
         * of the [property`Gtk`.Widget:root] property on the widget.
         * @param text text to set on the layout
         * @returns the new `PangoLayout`
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of [method`Gtk`.Widget.init_template],
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the `GObjectClass.dispose()`
         * implementation of any widget that called [method`Gtk`.Widget.init_template].
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the [property`Gtk`.Settings:gtk-error-bell] setting is true,
         * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
         *
         * Note that the effect of [method`Gdk`.Surface.beep] can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * [method`Gtk`.Widget.size_allocate] allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first `GtkBox` that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidgetClass.snapshot()` function, and when allocating
         * child widgets in `GtkWidgetClass.size_allocate()`.
         * @returns the baseline of the @widget, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See [method`Gtk`.Widget.set_can_focus].
         * @returns true if the input focus can enter @widget
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if @widget can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with [method`Gtk`.Widget.set_child_visible].
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to @widget
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See [method`Gtk`.Widget.set_cursor] for details.
         * @returns the cursor   that is set on @widget
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See [method`Gtk`.Widget.set_direction].
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a `GtkRoot` at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of @widget
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See [method`Gtk`.Widget.set_focus_on_click].
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns true if @widget can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See [method`Gtk`.Widget.set_font_map].
         * @returns the font map of @widget
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee [method`Gtk`.Widget.set_font_options].
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
         * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
         *
         * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use [method`Gtk`.Widget.queue_draw] which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * [method`Gtk`.Widget.queue_draw] will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * [enum`Gtk`.Align.fill] or [enum`Gtk`.Align.center].
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on @widget
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of @widget
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use [method`Gtk`.Widget.compute_expand]
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If [property`Gtk`.Widget:hexpand] property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See [method`Gtk`.Widget.set_layout_manager].
         * @returns the layout manager of @widget
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the [property`Gtk`.Widget:limit-events] property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See [method`Gtk`.Widget.set_name] for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest `GtkNative` ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * `GtkNative` widgets will return themselves here.
         * @returns the `GtkNative` ancestor of @widget
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See [method`Gtk`.Widget.set_opacity].
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * [property`Gtk`.Widget:root] property on the widget.
         * @returns the `PangoContext` for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of @widget
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as `GtkFixed`.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if @widget is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See [method`Gtk`.Widget.set_receives_default].
         * @returns true if @widget acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The `GtkSizeRequestMode` preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the `GtkRoot` widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * `GtkRoot` widgets will return themselves here.
         * @returns the root widget of @widget
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See [method`Gdk`.Surface.get_scale_factor].
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use [method`Gdk`.Surface.get_scale]
         * to get the fractional scale value.
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * [method`Gtk`.Widget.set_sensitive]).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See [method`Gtk`.Widget.is_sensitive].
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the `GtkWidget`
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling [method`Gtk`.Widget.get_width]
         * for [enum`Gtk`.Orientation.horizontal] or [method`Gtk`.Widget.get_height]
         * for [enum`Gtk`.Orientation.vertical], but can be used when
         * writing orientation-independent code, such as when
         * implementing [iface`Gtk`.Orientable] widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of @widget in @orientation
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See [method`Gtk`.Widget.set_size_request].
         *
         * To get the size a widget will actually request, call
         * [method`Gtk`.Widget.measure] instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective [flags`Gtk`.StateFlags.insensitive]
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
         * method, you should look at [method`Gtk`.StyleContext.get_state].
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The `GType` to get a template child for
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * [method`Gtk`.Widget.set_tooltip_markup], this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget'`s tooltip was set using
         * [method`Gtk`.Widget.set_tooltip_markup],
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of @widget
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.get_hexpand] for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * [method`Gtk`.Widget.is_visible] instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See [method`Gtk`.Widget.set_visible].
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of @widget
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside @widget
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if @css_class is currently applied to @widget
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * [method`Gtk`.Widget.has_focus].
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * [method`Gtk`.WidgetClass.set_template].
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement [iface`Gtk`.Actionable] can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix,` actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in @group
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling,` or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param previous_sibling the new previous sibling of @widget
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling,` or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param next_sibling the new next sibling of @widget
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another `GtkWidget`
         * @returns true if @ancestor contains @widget as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if @widget is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the [property`Gtk`.Widget:has-focus]
         * property is necessarily set; [property`Gtk`.Widget:has-focus]
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also [method`Gtk`.Widget.get_visible] and
         * [method`Gtk`.Widget.set_visible].
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * [method`Gtk`.Label.set_mnemonic_widget].
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget'`s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via [method`Gtk`.Widget.contains].
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to @widget's origin
         * @param y y coordinate to test, relative to @widget's origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
         * function.
         *
         * Use this function instead of [method`Gtk`.Widget.queue_resize]
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is [method`Gtk`.Widget.set_halign].
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * [class`Gtk`.Label], the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        realize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from @widget, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * The widget must have previously been added to the list with
         * [method`Gtk`.Widget.add_mnemonic_label].
         * @param label a widget that is a mnemonic label for @widget
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * [method`Gtk`.Widget.add_tick_callback].
         * @param id an ID returned by [method@Gtk.Widget.add_tick_callback]
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with [method`Gtk`.Widget.set_parent], to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether @widget should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
         * with [method`Gtk`.Widget.set_cursor]. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling [method`Gtk`.Widget.set_cursor]
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to [enum`Gtk`.TextDirection.none], then
         * the value set by [func`Gtk`.Widget.set_default_direction] will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their init() function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param focusable whether or not @widget can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a `PangoFontMap`
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the `GdkDisplay`
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not @widget has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call [method`Gtk`.Widget.compute_expand].
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * `GtkWidget`.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
         * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The [property`Gtk`.Widget:hexpand-set] property will be set
         * automatically when you call [method`Gtk`.Widget.set_hexpand]
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for [class`Gtk`.StyleContext].
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * [method`Gdk`.Display.is_composited]. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, [class`Gtk`.Popover]
         * instances and other [iface`Gtk`.Native] widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of [enum`Gtk`.Overflow] for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is [enum`Gtk`.Overflow.visible].
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is [method`Gtk`.Widget.unparent].
         *
         * This function is useful only when implementing subclasses of
         * `GtkWidget`.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not @widget can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, [method`Gtk`.Window.set_default_size] is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * [property`Gtk`.Widget:margin-start],
         * [property`Gtk`.Widget:margin-end],
         * [property`Gtk`.Widget:margin-top], and
         * [property`Gtk`.Widget:margin-bottom], but it does include pretty
         * much all other padding or border properties set by any subclass
         * of `GtkWidget`.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values [flags`Gtk`.StateFlags.dir-ltr] and
         * [flags`Gtk`.StateFlags.dir-rtl] but ignores them. If you want to set
         * the widget's direction, use [method`Gtk`.Widget.set_direction].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
         * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_markup].
         * @param markup the contents of the tooltip for @widget
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * [property`Gtk`.Widget:has-tooltip] as a side effect,
         * and of the default handler for the
         * [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_text].
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.set_hexpand] for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see [method`Gtk`.Widget.get_visible].
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as [class`Gtk`.Popover] instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of [method`Gtk`.Widget.allocate].
         * @param allocation position and size to be allocated to @widget
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * [vfunc`Gtk`.Widget.snapshot] function, calls
         * gtk_widget_snapshot_child() once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot,`
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement `GtkNative`.
         * @param child a child of @widget
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to [method@Gtk.Snapshot.translate] or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget’`s allocation
         * to coordinates relative to `dest_widget’`s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of @src_widget
         * @param src_y Y position in widget coordinates of @src_widget
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        unrealize(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See [method`Gtk`.Widget.set_state_flags].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for gtk_widget_child_focus()
         * @param direction
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a `GtkRoot` widget. Must
         *   chain up
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   `GtkRoot` widget. Must chain up
         */
        vfunc_unroot(): void;
    }

    namespace TogglePlayButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A #GtkButton for toggling play/pause of playback.
     */
    class TogglePlayButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<TogglePlayButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TogglePlayButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TogglePlayButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TogglePlayButton;

        // Signals

        connect<K extends keyof TogglePlayButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TogglePlayButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TogglePlayButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TogglePlayButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TogglePlayButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TogglePlayButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The name of the action with which this widget should be associated.
         */
        get action_name(): string;
        set action_name(val: string);
        /**
         * The name of the action with which this widget should be associated.
         */
        get actionName(): string;
        set actionName(val: string);
        /**
         * The target value of the actionable widget's action.
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the [signal`Gtk`.Widget::query-tooltip]
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The [class`Gtk`.LayoutManager] instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See [method`Gtk`.EventController.set_propagation_limit].
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The `GtkRoot` widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to true
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get widthRequest(): number;
        set widthRequest(val: number);

        // Inherited methods
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        set_action_target_value(target_value?: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * [func`Gio`.Action.parse_detailed_name].
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is %NULL then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a `GtkApplicationWindow`.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing [class`ApplicationWindow]` or its associated [class`Application]`,
         * respectively. This is the same form used for actions in the [class`Gio`.Menu]
         * associated with the window.
         * @param action_name an action name
         */
        vfunc_set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the `GtkActionable` widget.
         * Second, it is used to determine if the widget should be rendered as
         * “active” — the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
         * with string state in a typical “radio button” situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value. Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a [struct@GLib.Variant] to set as the target value
         */
        vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
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
        /**
         * Enables or disables an action installed with
         * [method`Gtk`.WidgetClass.install_action].
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * [method`Gtk`.WidgetClass.set_activate_signal]
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use [method`Gtk`.WidgetClass.add_shortcut]
         * with an action created with [ctor`Gtk`.SignalAction.new].
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates an action for the widget.
         *
         * The action is looked up in the action groups associated with
         * `widget` and its ancestors.
         *
         * If the action is in an action group added with
         * [method`Gtk`.Widget.insert_action_group], the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by [method`Gio`.Action.get_parameter_type].
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns true if the action was activated
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * [method`Gtk`.Widget.activate_action].
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of [class`Gtk`.EventController].
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class,` according to CSS matching rules.
         *
         * Use [method`Gtk`.Widget.remove_css_class] to remove the
         * style again.
         * @param css_class style class to add to @widget, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call [method`Gtk`.Widget.queue_resize] or
         * [method`Gtk`.Widget.queue_draw] yourself.
         *
         * [method`Gdk`.FrameClock.get_frame_time] should generally be used
         * for timing continuous animations and
         * [method`Gdk`.FrameTimings.get_predicted_presentation_time] should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * [signal`Gdk`.FrameClock::update] signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to [method`Gtk`.Widget.remove_tick_callback].
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * [method`Gtk`.Widget.size_allocate].
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the [vfunc`Gtk`.Widget.focus] virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * [method`Gtk`.Widget.grab_focus] to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target'`s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget'`s coordinates to coordinates
         * in `target’`s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in @widget's coordinate system
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget'`s coordinate system into `target'`s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @returns true if @widget contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also [method`Gtk`.Widget.get_pango_context].
         * @returns the new `PangoContext`
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new `PangoLayout` that is configured for the widget.
         *
         * The `PangoLayout` will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a `PangoLayout` created in this way around,
         * you need to re-create it when the widgets `PangoContext`
         * is replaced. This can be tracked by listening to changes
         * of the [property`Gtk`.Widget:root] property on the widget.
         * @param text text to set on the layout
         * @returns the new `PangoLayout`
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of [method`Gtk`.Widget.init_template],
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the `GObjectClass.dispose()`
         * implementation of any widget that called [method`Gtk`.Widget.init_template].
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the [property`Gtk`.Settings:gtk-error-bell] setting is true,
         * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
         *
         * Note that the effect of [method`Gdk`.Surface.beep] can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * [method`Gtk`.Widget.size_allocate] allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first `GtkBox` that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidgetClass.snapshot()` function, and when allocating
         * child widgets in `GtkWidgetClass.size_allocate()`.
         * @returns the baseline of the @widget, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See [method`Gtk`.Widget.set_can_focus].
         * @returns true if the input focus can enter @widget
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if @widget can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with [method`Gtk`.Widget.set_child_visible].
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to @widget
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See [method`Gtk`.Widget.set_cursor] for details.
         * @returns the cursor   that is set on @widget
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See [method`Gtk`.Widget.set_direction].
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a `GtkRoot` at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of @widget
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See [method`Gtk`.Widget.set_focus_on_click].
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns true if @widget can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See [method`Gtk`.Widget.set_font_map].
         * @returns the font map of @widget
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee [method`Gtk`.Widget.set_font_options].
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
         * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
         *
         * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use [method`Gtk`.Widget.queue_draw] which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * [method`Gtk`.Widget.queue_draw] will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * [enum`Gtk`.Align.fill] or [enum`Gtk`.Align.center].
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on @widget
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of @widget
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use [method`Gtk`.Widget.compute_expand]
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If [property`Gtk`.Widget:hexpand] property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See [method`Gtk`.Widget.set_layout_manager].
         * @returns the layout manager of @widget
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the [property`Gtk`.Widget:limit-events] property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See [method`Gtk`.Widget.set_name] for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest `GtkNative` ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * `GtkNative` widgets will return themselves here.
         * @returns the `GtkNative` ancestor of @widget
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See [method`Gtk`.Widget.set_opacity].
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a `PangoContext` that is configured for the widget.
         *
         * The `PangoContext` will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * [property`Gtk`.Widget:root] property on the widget.
         * @returns the `PangoContext` for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of @widget
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as `GtkFixed`.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if @widget is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See [method`Gtk`.Widget.set_receives_default].
         * @returns true if @widget acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The `GtkSizeRequestMode` preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the `GtkRoot` widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * `GtkRoot` widgets will return themselves here.
         * @returns the root widget of @widget
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See [method`Gdk`.Surface.get_scale_factor].
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use [method`Gdk`.Surface.get_scale]
         * to get the fractional scale value.
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * [method`Gtk`.Widget.set_sensitive]).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See [method`Gtk`.Widget.is_sensitive].
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the `GtkWidget`
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling [method`Gtk`.Widget.get_width]
         * for [enum`Gtk`.Orientation.horizontal] or [method`Gtk`.Widget.get_height]
         * for [enum`Gtk`.Orientation.vertical], but can be used when
         * writing orientation-independent code, such as when
         * implementing [iface`Gtk`.Orientable] widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of @widget in @orientation
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See [method`Gtk`.Widget.set_size_request].
         *
         * To get the size a widget will actually request, call
         * [method`Gtk`.Widget.measure] instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective [flags`Gtk`.StateFlags.insensitive]
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
         * method, you should look at [method`Gtk`.StyleContext.get_state].
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The `GType` to get a template child for
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * [method`Gtk`.Widget.set_tooltip_markup], this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget'`s tooltip was set using
         * [method`Gtk`.Widget.set_tooltip_markup],
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of @widget
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.get_hexpand] for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * [method`Gtk`.Widget.is_visible] instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See [method`Gtk`.Widget.set_visible].
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of @widget
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside @widget
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if @css_class is currently applied to @widget
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * [method`Gtk`.Widget.has_focus].
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * [method`Gtk`.WidgetClass.set_template].
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement [iface`Gtk`.Actionable] can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix,` actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in @group
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling,` or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param previous_sibling the new previous sibling of @widget
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to [method`Gtk`.Widget.set_parent], this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling,` or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert @widget into
         * @param next_sibling the new next sibling of @widget
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another `GtkWidget`
         * @returns true if @ancestor contains @widget as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if @widget is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the [property`Gtk`.Widget:has-focus]
         * property is necessarily set; [property`Gtk`.Widget:has-focus]
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also [method`Gtk`.Widget.get_visible] and
         * [method`Gtk`.Widget.set_visible].
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * [method`Gtk`.Label.set_mnemonic_widget].
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking @widget's controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget'`s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via [method`Gtk`.Widget.contains].
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to @widget's origin
         * @param y y coordinate to test, relative to @widget's origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
         * function.
         *
         * Use this function instead of [method`Gtk`.Widget.queue_resize]
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is [method`Gtk`.Widget.set_halign].
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * [class`Gtk`.Label], the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        realize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from @widget, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels].
         *
         * The widget must have previously been added to the list with
         * [method`Gtk`.Widget.add_mnemonic_label].
         * @param label a widget that is a mnemonic label for @widget
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * [method`Gtk`.Widget.add_tick_callback].
         * @param id an ID returned by [method@Gtk.Widget.add_tick_callback]
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with [method`Gtk`.Widget.set_parent], to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether @widget should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
         * with [method`Gtk`.Widget.set_cursor]. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling [method`Gtk`.Widget.set_cursor]
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to [enum`Gtk`.TextDirection.none], then
         * the value set by [func`Gtk`.Widget.set_default_direction] will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their init() function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param focusable whether or not @widget can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a `PangoFontMap`
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the `GdkDisplay`
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not @widget has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call [method`Gtk`.Widget.compute_expand].
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * `GtkWidget`.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
         * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The [property`Gtk`.Widget:hexpand-set] property will be set
         * automatically when you call [method`Gtk`.Widget.set_hexpand]
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for [class`Gtk`.StyleContext].
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * [method`Gdk`.Display.is_composited]. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, [class`Gtk`.Popover]
         * instances and other [iface`Gtk`.Native] widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of [enum`Gtk`.Overflow] for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is [enum`Gtk`.Overflow.visible].
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is [method`Gtk`.Widget.unparent].
         *
         * This function is useful only when implementing subclasses of
         * `GtkWidget`.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not @widget can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, [method`Gtk`.Window.set_default_size] is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * [property`Gtk`.Widget:margin-start],
         * [property`Gtk`.Widget:margin-end],
         * [property`Gtk`.Widget:margin-top], and
         * [property`Gtk`.Widget:margin-bottom], but it does include pretty
         * much all other padding or border properties set by any subclass
         * of `GtkWidget`.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values [flags`Gtk`.StateFlags.dir-ltr] and
         * [flags`Gtk`.StateFlags.dir-rtl] but ignores them. If you want to set
         * the widget's direction, use [method`Gtk`.Widget.set_direction].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
         * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_markup].
         * @param markup the contents of the tooltip for @widget
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * [property`Gtk`.Widget:has-tooltip] as a side effect,
         * and of the default handler for the
         * [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_text].
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.set_hexpand] for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see [method`Gtk`.Widget.get_visible].
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as [class`Gtk`.Popover] instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of [method`Gtk`.Widget.allocate].
         * @param allocation position and size to be allocated to @widget
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * [vfunc`Gtk`.Widget.snapshot] function, calls
         * gtk_widget_snapshot_child() once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot,`
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement `GtkNative`.
         * @param child a child of @widget
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to [method@Gtk.Snapshot.translate] or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget’`s allocation
         * to coordinates relative to `dest_widget’`s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of @src_widget
         * @param src_y Y position in widget coordinates of @src_widget
         * @returns true if @src_widget and @dest_widget have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        unrealize(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See [method`Gtk`.Widget.set_state_flags].
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for gtk_widget_child_focus()
         * @param direction
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return true.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Emits the [signal`Gtk`.Widget::keynav-failed] signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * false for [enum`Gtk`.DirectionType.tab-forward] and
         * [enum`Gtk`.DirectionType.tab-backward]. For the other values
         * of [enum`Gtk`.DirectionType] it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the [signal`Gtk`.Widget::mnemonic-activate] signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a `GtkRoot` widget. Must
         *   chain up
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget   or `NULL` to unset the focus child
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   `GtkRoot` widget. Must chain up
         */
        vfunc_unroot(): void;
    }

    namespace Video {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'seek-request': (arg0: boolean) => void;
            'toggle-fullscreen': () => void;
            'notify::auto-inhibit': (pspec: GObject.ParamSpec) => void;
            'notify::fade-delay': (pspec: GObject.ParamSpec) => void;
            'notify::inhibited': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::touch-fade-delay': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            auto_inhibit: boolean;
            autoInhibit: boolean;
            fade_delay: number;
            fadeDelay: number;
            inhibited: boolean;
            player: Clapper.Player;
            touch_fade_delay: number;
            touchFadeDelay: number;
        }
    }

    /**
     * A ready to be used GTK video widget implementing Clapper API.
     *
     * #ClapperGtkVideo is the main widget exposed by `ClapperGtk` API. It both displays
     * videos played by [class`Clapper`.Player] (exposed as its property) and manages
     * revealing and fading of any additional widgets overlaid on top of it.
     *
     * Other widgets provided by `ClapperGtk` library, once placed anywhere on video
     * (including nesting within another widget like [class`Gtk`.Box]) will automatically
     * control #ClapperGtkVideo they were overlaid on top of. This allows to freely create
     * custom playback control panels best suited for specific application. Additionally,
     * pre-made widgets such as [class`ClapperGtk`.SimpleControls] are also available.
     *
     * # Basic usage
     *
     * A typical use case is to embed video widget as part of your app where video playback
     * is needed. Get the [class`Clapper`.Player] belonging to the video widget and start adding
     * new [class`Clapper`.MediaItem] items to the [class`Clapper`.Queue] for playback.
     * For more information please refer to the Clapper playback library documentation.
     *
     * #ClapperGtkVideo can automatically take care of revealing and later fading overlaid
     * content when interacting with the video. To do this, simply add your widgets with
     * [method`ClapperGtk`.Video.add_fading_overlay]. If you want to display some static content
     * on top of video (or take care of visibility within overlaid widget itself) you can add
     * it to the video as a normal overlay with [method`ClapperGtk`.Video.add_overlay].
     *
     * # Actions
     *
     * #ClapperGtkVideo defines a set of built-in actions:
     *
     * ```yaml
     * - "video.toggle-play": toggle play/pause
     * - "video.play": start/resume playback
     * - "video.pause": pause playback
     * - "video.stop": stop playback
     * - "video.seek": seek to position (variant "d")
     * - "video.seek-custom": seek to position using seek method (variant "(di)")
     * - "video.toggle-mute": toggle mute state
     * - "video.set-mute": set mute state (variant "b")
     * - "video.volume-up": increase volume by 2%
     * - "video.volume-down": decrease volume by 2%
     * - "video.set-volume": set volume to specified value (variant "d")
     * - "video.speed-up": increase speed (from 0.05x - 2x range to nearest quarter)
     * - "video.speed-down": decrease speed (from 0.05x - 2x range to nearest quarter)
     * - "video.set-speed": set speed to specified value (variant "d")
     * - "video.previous-item": select previous item in queue
     * - "video.next-item": select next item in queue
     * - "video.select-item": select item at specified index in queue (variant "u")
     * ```
     *
     * # ClapperGtkVideo as GtkBuildable
     *
     * #ClapperGtkVideo implementation of the [iface`Gtk`.Buildable] interface supports
     * placing children as either normal overlay by specifying `overlay` or a fading
     * one by specifying `fading-overlay` as the `type` attribute of a `<child>` element.
     * Position of overlaid content is determined by `valign/halign` properties.
     *
     * ```xml
     * <object class="ClapperGtkVideo" id="video">
     *   <child type="fading-overlay">
     *     <object class="ClapperGtkTitleHeader">
     *       <property name="valign">start</property>
     *     </object>
     *   </child>
     *   <child type="fading-overlay">
     *     <object class="ClapperGtkSimpleControls">
     *       <property name="valign">end</property>
     *     </object>
     *   </child>
     * </object>
     * ```
     */
    class Video extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Video>;

        // Properties

        /**
         * Try to automatically inhibit session when video is playing.
         */
        get auto_inhibit(): boolean;
        set auto_inhibit(val: boolean);
        /**
         * Try to automatically inhibit session when video is playing.
         */
        get autoInhibit(): boolean;
        set autoInhibit(val: boolean);
        /**
         * A delay in milliseconds before trying to fade all fading overlays.
         */
        get fade_delay(): number;
        set fade_delay(val: number);
        /**
         * A delay in milliseconds before trying to fade all fading overlays.
         */
        get fadeDelay(): number;
        set fadeDelay(val: number);
        /**
         * Get whether session is currently inhibited by the video.
         */
        get inhibited(): boolean;
        /**
         * A #ClapperPlayer used by video.
         */
        get player(): Clapper.Player;
        /**
         * A delay in milliseconds before trying to fade all fading overlays
         * after revealed using touchscreen.
         */
        get touch_fade_delay(): number;
        set touch_fade_delay(val: number);
        /**
         * A delay in milliseconds before trying to fade all fading overlays
         * after revealed using touchscreen.
         */
        get touchFadeDelay(): number;
        set touchFadeDelay(val: number);

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

        static ['new'](): Video;

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
         * Similiar as clapper_gtk_video_add_overlay() but will also automatically
         * add fading functionality to overlaid #GtkWidget for convenience. This will
         * make widget reveal itself when interacting with `video` and fade otherwise.
         * Useful when placing widgets such as playback controls panels.
         * @param widget a #GtkWidget
         */
        add_fading_overlay(widget: Gtk.Widget): void;
        /**
         * Add another #GtkWidget to be overlaid on top of video.
         *
         * The position at which `widget` is placed is determined from
         * [property`Gtk`.Widget:halign] and [property`Gtk`.Widget:valign] properties.
         *
         * This function will overlay `widget` as-is meaning that widget is responsible
         * for managing its own visablity if needed. If you want to add a #GtkWidget
         * that will reveal and fade itself automatically when interacting with `video`
         * (e.g. controls panel) you can use clapper_gtk_video_add_fading_overlay()
         * function for convenience.
         * @param widget a #GtkWidget
         */
        add_overlay(widget: Gtk.Widget): void;
        /**
         * Get whether automatic session inhibit is enabled.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_auto_inhibit(): boolean;
        /**
         * Get time in milliseconds after which fading overlays should fade.
         * @returns currently set fade delay.
         */
        get_fade_delay(): number;
        /**
         * Get whether session is currently inhibited by
         * [property`ClapperGtk`.Video:auto-inhibit].
         * @returns %TRUE if inhibited, %FALSE otherwise.
         */
        get_inhibited(): boolean;
        /**
         * Get #ClapperPlayer used by this #ClapperGtkVideo instance.
         * @returns a #ClapperPlayer used by video.
         */
        get_player(): Clapper.Player;
        /**
         * Get time in milliseconds after which fading overlays should fade
         * when revealed using touch device.
         * @returns currently set touch fade delay.
         */
        get_touch_fade_delay(): number;
        /**
         * Set whether video should try to automatically inhibit session
         * from idling (and possibly screen going black) when video is playing.
         * @param inhibit whether to enable automatic session inhibit
         */
        set_auto_inhibit(inhibit: boolean): void;
        /**
         * Set time in milliseconds after which fading overlays should fade.
         * @param delay a fade delay
         */
        set_fade_delay(delay: number): void;
        /**
         * Set time in milliseconds after which fading overlays should fade
         * when using touchscreen.
         *
         * It is often useful to set this higher then normal fade delay property,
         * as in case of touch events user do not have a moving pointer that would
         * extend fade timeout, so he can have more time to decide what to press next.
         * @param delay a touch fade delay
         */
        set_touch_fade_delay(delay: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
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

    type BillboardClass = typeof Billboard;
    type ContainerClass = typeof Container;
    type ExtraMenuButtonClass = typeof ExtraMenuButton;
    type LeadContainerClass = typeof LeadContainer;
    type NextItemButtonClass = typeof NextItemButton;
    type PreviousItemButtonClass = typeof PreviousItemButton;
    type SeekBarClass = typeof SeekBar;
    type SimpleControlsClass = typeof SimpleControls;
    type TitleHeaderClass = typeof TitleHeader;
    type TitleLabelClass = typeof TitleLabel;
    type ToggleFullscreenButtonClass = typeof ToggleFullscreenButton;
    type TogglePlayButtonClass = typeof TogglePlayButton;
    type VideoClass = typeof Video;
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

export default ClapperGtk;

// END
