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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GVnc {
    /**
     * GVnc-1.0
     */

    export namespace AudioFormatType {
        export const $gtype: GObject.GType<AudioFormatType>;
    }

    enum AudioFormatType {
        U8,
        S8,
        U16,
        S16,
        U32,
        S32,
    }

    export namespace ConnectionAuth {
        export const $gtype: GObject.GType<ConnectionAuth>;
    }

    enum ConnectionAuth {
        INVALID,
        /**
         * No authentication is needed and protocol data is to be sent unencrypted.
         */
        NONE,
        /**
         * VNC authentication is to be used and protocol data is to be sent unencrypted.
         */
        VNC,
        /**
         * RealVNC authentication.
         */
        RA2,
        /**
         * RealVNC authentication.
         */
        RA2NE,
        /**
         * The Tight security type is a generic protocol extension.
         */
        TIGHT,
        /**
         * Ultra authentication.
         */
        ULTRA,
        /**
         * TLS authentication.
         */
        TLS,
        /**
         * The VeNCrypt security type is a generic authentication method which encapsulates multiple authentication subtypes.
         */
        VENCRYPT,
        /**
         * SASL authentication.
         */
        SASL,
        /**
         * Apple remote desktop (screen sharing) authentication.
         */
        ARD,
        /**
         * Authentication used by UltraVNC.
         */
        MSLOGONII,
        /**
         * Authentication used by UltraVNC.
         */
        MSLOGON,
    }

    export namespace ConnectionAuthVencrypt {
        export const $gtype: GObject.GType<ConnectionAuthVencrypt>;
    }

    enum ConnectionAuthVencrypt {
        PLAIN,
        TLSNONE,
        TLSVNC,
        TLSPLAIN,
        X509NONE,
        X509VNC,
        X509PLAIN,
        X509SASL,
        TLSSASL,
    }

    export namespace ConnectionCredential {
        export const $gtype: GObject.GType<ConnectionCredential>;
    }

    enum ConnectionCredential {
        PASSWORD,
        USERNAME,
        CLIENTNAME,
        CA_CERT_DATA,
    }

    export namespace ConnectionEncoding {
        export const $gtype: GObject.GType<ConnectionEncoding>;
    }

    enum ConnectionEncoding {
        RAW,
        COPY_RECT,
        RRE,
        CORRE,
        HEXTILE,
        TIGHT,
        ZRLE,
        TIGHT_JPEG0,
        TIGHT_JPEG1,
        TIGHT_JPEG2,
        TIGHT_JPEG3,
        TIGHT_JPEG4,
        TIGHT_JPEG5,
        TIGHT_JPEG6,
        TIGHT_JPEG7,
        TIGHT_JPEG8,
        TIGHT_JPEG9,
        DESKTOP_RESIZE,
        LAST_RECT,
        WMVI,
        CURSOR_POS,
        RICH_CURSOR,
        XCURSOR,
        POINTER_CHANGE,
        EXT_KEY_EVENT,
        AUDIO,
        LED_STATE,
        DESKTOP_NAME,
        EXTENDED_DESKTOP_RESIZE,
        XVP,
        ALPHA_CURSOR,
    }

    export namespace ConnectionPowerAction {
        export const $gtype: GObject.GType<ConnectionPowerAction>;
    }

    enum ConnectionPowerAction {
        SHUTDOWN,
        REBOOT,
        RESET,
    }

    export namespace ConnectionResizeStatus {
        export const $gtype: GObject.GType<ConnectionResizeStatus>;
    }

    enum ConnectionResizeStatus {
        UNSUPPORTED,
        OK,
        ADMIN_PROHIBITED,
        OUT_OF_RESOURCES,
        INVALID_LAOUT,
        FORWARDED,
    }
    const LEDSTATE_CAPS_LOCK: number;
    const LEDSTATE_NUM_LOCK: number;
    const LEDSTATE_SCROLL_LOCK: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PADDING: number;
    const PADDING_LARGE: number;
    /**
     * Check whether the library is at least as new as the
     * version (`major,` `minor,` `micro)`
     * @param major the desired major version
     * @param minor the desired minor version
     * @param micro the desired micro version
     * @returns TRUE if the library is at least as new as the requested version
     */
    function util_check_version(major: number, minor: number, micro: number): boolean;
    /**
     * Determine whether the VNC code will emit verbose
     * debug messages
     * @returns TRUE if debugging is enabled, FALSE otherwise
     */
    function util_get_debug(): boolean;
    /**
     * Get the encoded version number of the library release.
     * The major, minor and micro components are encoded in
     * 8-bits each.
     * @returns the library version number
     */
    function util_get_version(): number;
    /**
     * Get the library version number in a printable
     * string format
     * @returns the version string
     */
    function util_get_version_string(): string;
    /**
     * Control whether the VNC code emits verbose debug
     * messages on stderr
     * @param enabled TRUE to turn on verbose debugging
     */
    function util_set_debug(enabled: boolean): void;
    namespace BaseAudio {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'vnc-audio-playback-data': (arg0: AudioSample) => void;
            'vnc-audio-playback-start': (arg0: AudioFormat) => void;
            'vnc-audio-playback-stop': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Audio.ConstructorProps {}
    }

    class BaseAudio extends GObject.Object implements Audio {
        static $gtype: GObject.GType<BaseAudio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseAudio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BaseAudio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BaseAudio;

        // Signals

        connect<K extends keyof BaseAudio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseAudio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseAudio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseAudio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseAudio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseAudio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_playback_data(sample: AudioSample): boolean;
        vfunc_playback_start(format: AudioFormat): boolean;
        vfunc_playback_stop(): boolean;

        // Inherited methods
        /**
         * Request playback of a single audio sample in `sample`
         * @param sample the audio sample
         */
        playback_data(sample: AudioSample): void;
        /**
         * Indicate that the remote desktop is about to start
         * audio playback in format `format`.
         * @param format the new audio format
         */
        playback_start(format: AudioFormat): void;
        /**
         * Indicate that the remote desktop has completed
         * audio playback
         */
        playback_stop(): void;
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

    namespace BaseFramebuffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::color-map': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::local-format': (pspec: GObject.ParamSpec) => void;
            'notify::remote-format': (pspec: GObject.ParamSpec) => void;
            'notify::rowstride': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Framebuffer.ConstructorProps {
            buffer: any;
            color_map: ColorMap;
            colorMap: ColorMap;
            height: number;
            local_format: PixelFormat;
            localFormat: PixelFormat;
            remote_format: PixelFormat;
            remoteFormat: PixelFormat;
            rowstride: number;
            width: number;
        }
    }

    class BaseFramebuffer extends GObject.Object implements Framebuffer {
        static $gtype: GObject.GType<BaseFramebuffer>;

        // Properties

        get buffer(): any;
        get color_map(): ColorMap;
        set color_map(val: ColorMap);
        get colorMap(): ColorMap;
        set colorMap(val: ColorMap);
        get height(): number;
        get local_format(): PixelFormat;
        get localFormat(): PixelFormat;
        get remote_format(): PixelFormat;
        get remoteFormat(): PixelFormat;
        get rowstride(): number;
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseFramebuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BaseFramebuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            buffer: Uint8Array | string,
            width: number,
            height: number,
            rowstride: number,
            localFormat: PixelFormat,
            remoteFormat: PixelFormat,
        ): BaseFramebuffer;

        // Signals

        connect<K extends keyof BaseFramebuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseFramebuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseFramebuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseFramebuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseFramebuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseFramebuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Copies data from the range (`srcx,` `srcy)` to
         * (`srcx+``width,` `srcy+``height)` over to the
         * range starting at (`dstx,` `dsty)`.
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        /**
         * Get a pointer to the framebuffer contents
         * @returns the framebuffer data
         */
        get_buffer(): Uint8Array;
        /**
         * Query the height of the remote framebuffer
         * @returns the frambuffer height
         */
        get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         * @returns the local pixel format
         */
        get_local_format(): PixelFormat;
        get_remote_format(): PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         * @returns the framebuffer row stride
         */
        get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         * @returns the framebuffer width
         */
        get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         * @returns TRUE if the local and remote pixel formats match
         */
        perfect_format_match(): boolean;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        rgb24_blt(
            src: Uint8Array | string,
            rowstride: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        set_color_map(map: ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
        vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Copies data from the range (`srcx,` `srcy)` to
         * (`srcx+``width,` `srcy+``height)` over to the
         * range starting at (`dstx,` `dsty)`.
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        vfunc_fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        vfunc_get_buffer(): number;
        /**
         * Query the height of the remote framebuffer
         */
        vfunc_get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         */
        vfunc_get_local_format(): PixelFormat;
        vfunc_get_remote_format(): PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         */
        vfunc_get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         */
        vfunc_get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         */
        vfunc_perfect_format_match(): boolean;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        vfunc_rgb24_blt(
            src: Uint8Array | string,
            rowstride: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        vfunc_set_color_map(map: ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        vfunc_set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
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

    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'vnc-auth-choose-subtype': (arg0: number, arg1: GObject.ValueArray) => void;
            'vnc-auth-choose-type': (arg0: GObject.ValueArray) => void;
            'vnc-auth-credential': (arg0: GObject.ValueArray) => void;
            'vnc-auth-failure': (arg0: string) => void;
            'vnc-auth-unsupported': (arg0: number) => void;
            'vnc-bell': () => void;
            'vnc-connected': () => void;
            'vnc-cursor-changed': (arg0: Cursor | null) => void;
            'vnc-desktop-rename': (arg0: string) => void;
            'vnc-desktop-resize': (arg0: number, arg1: number) => void;
            'vnc-disconnected': () => void;
            'vnc-error': (arg0: string) => void;
            'vnc-framebuffer-update': (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            'vnc-initialized': () => void;
            'vnc-led-state': () => void;
            'vnc-pixel-format-changed': (arg0: PixelFormat) => void;
            'vnc-pointer-mode-changed': (arg0: boolean) => void;
            'vnc-power-control-failed': () => void;
            'vnc-power-control-initialized': () => void;
            'vnc-server-cut-text': (arg0: string) => void;
            'notify::framebuffer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            framebuffer: Framebuffer;
        }
    }

    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties

        get framebuffer(): Framebuffer;
        set framebuffer(val: Framebuffer);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Connection.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Connection;

        // Signals

        connect<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Connection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void;
        vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void;
        vfunc_vnc_auth_credential(creds: GObject.ValueArray): void;
        vfunc_vnc_auth_failure(reason: string): void;
        vfunc_vnc_auth_unsupported(authType: number): void;
        vfunc_vnc_bell(): void;
        vfunc_vnc_connected(): void;
        vfunc_vnc_cursor_changed(cursor: Cursor): void;
        vfunc_vnc_desktop_rename(name: string): void;
        vfunc_vnc_desktop_resize(width: number, height: number): void;
        vfunc_vnc_disconnected(): void;
        vfunc_vnc_error(message: string): void;
        vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void;
        vfunc_vnc_initialized(): void;
        vfunc_vnc_led_state(): void;
        vfunc_vnc_pixel_format_changed(format: PixelFormat): void;
        vfunc_vnc_pointer_mode_changed(absPointer: boolean): void;
        vfunc_vnc_power_control_failed(): void;
        vfunc_vnc_power_control_initialized(): void;
        vfunc_vnc_server_cut_text(text: GLib.String): void;

        // Methods

        /**
         * Tell the server that it is no longer permitted to send
         * audio. The client may continue to receive audio for a
         * time after this, since packets may already be in flight.
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        audio_disable(): boolean;
        /**
         * Tell the server that it is permitted to send audio
         * data.
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        audio_enable(): boolean;
        client_cut_text(data: any | null, length: number): boolean;
        /**
         * Request that the server send a framebuffer update when the
         * region positioned at (`x,` `y)` wth size (`width,` `height)`
         * sees damage. The update sent may be a subset of the region
         * requested, if `incremental` is FALSE.
         * @param incremental TRUE to only receive region with changes
         * @param x horizontal offset to region of update
         * @param y vertical offset to region of update
         * @param width horizontal size of region of update
         * @param height vertical size of region of update
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean;
        /**
         * Determine if the remote server supports absolute pointer
         * motion events. This will only be valid once the
         * "vnc-initialized" signal has been emitted.
         * @returns TRUE if the server supports absolute pointer mode
         */
        get_abs_pointer(): boolean;
        /**
         * Get the current audio format specification
         * @returns the current audio format
         */
        get_audio_format(): AudioFormat;
        /**
         * Get the cursor currently associated with the desktop,
         * if any.
         * @returns the cursor or NULL
         */
        get_cursor(): Cursor;
        /**
         * Determine if the remote server supports the extended
         * keyboard event which transmits raw XT scancodes.
         * This will only be valid once the "vnc-initialized"
         * signal has been emitted
         * @returns TRUE if supported, FALSE otherwise
         */
        get_ext_key_event(): boolean;
        /**
         * Get the height of the remote display. The height will
         * only be set once the "vnc-initialized" signal has
         * been emitted
         * @returns the desktop height
         */
        get_height(): number;
        /**
         * Get the current LED state bitmap. This is only
         * valid once the "vnc-initialized" signal has been
         * emitted.
         * @returns the LED state
         */
        get_ledstate(): number;
        /**
         * Get the name of the remote display. A name will only
         * be available once the "vnc-initialized" signal has
         * been emitted
         * @returns the remote display name
         */
        get_name(): string;
        /**
         * Get a specification of the current pixel format
         * @returns the current pixel format
         */
        get_pixel_format(): PixelFormat;
        /**
         * Determine if the remote server supports power control.
         * This will only be valid once the "vnc-initialized"
         * signal has been emitted.
         * @returns TRUE if the server supports power control
         */
        get_power_control(): boolean;
        /**
         * Get the sharing state for the connection
         * @returns TRUE if other clients are permitted, FALSE otherwise
         */
        get_shared(): boolean;
        /**
         * Get the width of the remote display. The width will
         * only be set once the "vnc-initialized" signal has
         * been emitted
         * @returns the desktop width
         */
        get_width(): number;
        /**
         * Determine if the current connection is in an error
         * state
         * @returns TRUE if an error has occurred, FALSE otherwise
         */
        has_error(): boolean;
        /**
         * Determine if the connection to the remote desktop is
         * fully initialized and thus receiving framebuffer
         * updates.
         * @returns TRUE if initialized, FALSE if closed or still negotiating
         */
        is_initialized(): boolean;
        /**
         * Check if the connection is currently open
         * @returns TRUE if open, FALSE if closing/closed
         */
        is_open(): boolean;
        /**
         * Send a key press/release event to the server. By default the
         * event will be sent with the X11 key code from `key`. If the
         * extended key event protocol extension is active, the `scancode`
         * will be sent instead.
         * @param down_flag TRUE if this is a key press, FALSE for a key release
         * @param key the X11 key code
         * @param scancode the XT scan code
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        key_event(down_flag: boolean, key: number, scancode: number): boolean;
        /**
         * Open a socket connection to server identified by `addr`.
         * `addr` may refer to either a TCP address (IPv4/6) or
         * a UNIX socket address. The `hostname` provided should
         * reflect the name of the host that the `addr` provides a
         * connection to, if it is not already available in `addr`.
         * For example, if `addr` points to a proxy server, then
         * `hostname` can be used to provide the name of the final
         * endpoint. This will be used by some authentication
         * schemes, for example x509 certificate validation
         * against `hostname`.
         * @param addr the socket address
         * @param hostname the hostname
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean;
        /**
         * Open a connection using `fd` as the transport. If `fd`
         * refers to a TCP connection, it is recommended to use
         * vnc_connection_open_fd_with_hostname instead, to
         * provide the remote hostname. This allows use of
         * x509 based authentication which requires a hostname
         * to be available.
         * @param fd file descriptor to use for the connection
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_fd(fd: number): boolean;
        /**
         * Open a connection using `fd` as the transport. The
         * `hostname` provided should reflect the name of the
         * host that the `fd` provides a connection to. This
         * will be used by some authentication schemes, for
         * example x509 certificate validation against `hostname`.
         * @param fd file descriptor to use for the connection
         * @param hostname the host associated with the connection
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_fd_with_hostname(fd: number, hostname?: string | null): boolean;
        /**
         * Open a TCP connection to the remote desktop at `host`
         * listening on `port`.
         * @param host the host name or IP address
         * @param port the service name or port number
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_host(host: string, port: string): boolean;
        /**
         * Send a pointer event to the server, reflecting either movement
         * of the pointer, or a change in state of its buttons, or both.
         * @param button_mask the new state of the buttons
         * @param x the new horizontal position of the pointer
         * @param y the new veritical position of the pointer
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        pointer_event(button_mask: number, x: number, y: number): boolean;
        /**
         * Perform a power control action on the remote server.
         *
         * This is only valid if the "vnc-power-control" signal
         * has been emitted with a VNC_CONNECTION_POWER_STATUS_INIT
         * code.
         *
         * The action should be assumed to be accepted unless
         * "vnc-power-control" signal is emitted with a
         * VNC_CONNECTION_POWER_STATUS_FAIL code.
         * @param action
         * @returns TRUE if the action was sent, FALSE if power control is not supported
         */
        power_control(action: ConnectionPowerAction | null): boolean;
        /**
         * Set the audio sink to use for playing back audio from
         * the remote session.
         * @param audio the audio sink
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_audio(audio: Audio): boolean;
        /**
         * Set the audio format specification to use for playback
         * from the remote session. The format should only be set
         * when the audio stream is not active, otherwise it will
         * be impossible to determine when the server has switched
         * to sending data in the new format
         * @param fmt the audio format
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_audio_format(fmt: AudioFormat): boolean;
        /**
         * If a multi-level authentication scheme was requested, this
         * identifies which auth type to use for the second phase.
         * @param type the auth sub-type
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_auth_subtype(type: number): boolean;
        /**
         * Set the authentication type to use to complete the
         * connection.
         * @param type the requested auth type
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_auth_type(type: number): boolean;
        /**
         * Sets the value of the authentication credential
         * `type` to the string `data`.
         *
         * `type` is one of the VncConnectionCredential enum values
         * @param type the authentication credential type
         * @param data the value associated with the credential
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_credential(type: number, data: string): boolean;
        /**
         * Inform the server of the list of encodings that it is
         * allowed to send. This should be done before requesting
         * any framebuffer updates
         * @param encoding the list of permitted encodings
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_encodings(encoding: number[]): boolean;
        /**
         * Set the framebuffer object to which frame buffer updates
         * will be written.
         * @param fb the framebuffer object
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_framebuffer(fb: Framebuffer): boolean;
        /**
         * Tell the server what pixel format  to use for
         * framebuffer updates. It is only safe to use this
         * when no framebuffer updates are pending, otherwise
         * it is impossible to determine when the server has
         * switched over to using the new format.
         * @param fmt the new pixel format
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_pixel_format(fmt: PixelFormat): boolean;
        /**
         * Set the shared state for the connection. A TRUE value
         * allow allow this client to co-exist with other existing
         * clients. A FALSE value will cause other clients to be
         * dropped
         * @param shared the new sharing state
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_shared(shared: boolean): boolean;
        set_size(width: number, height: number): ConnectionResizeStatus;
        /**
         * Initiate a shutdown of the current connection
         * by closing its socket
         */
        shutdown(): void;
    }

    namespace Cursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::hotx': (pspec: GObject.ParamSpec) => void;
            'notify::hoty': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: any;
            height: number;
            hotx: number;
            hoty: number;
            width: number;
        }
    }

    class Cursor extends GObject.Object {
        static $gtype: GObject.GType<Cursor>;

        // Properties

        get data(): any;
        set data(val: any);
        get height(): number;
        set height(val: number);
        get hotx(): number;
        set hotx(val: number);
        get hoty(): number;
        set hoty(val: number);
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cursor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: Uint8Array | string, hotx: number, hoty: number, width: number, height: number): Cursor;

        // Signals

        connect<K extends keyof Cursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the bitmap data representing the cursor
         * @returns the bitmap data
         */
        get_data(): Uint8Array;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get the height of the cursor bitmap
         * @returns the height of the bitmap
         */
        get_height(): number;
        /**
         * Get the horizontal position of the cursor hot point
         * @returns the horizontal position of the hot point
         */
        get_hotx(): number;
        /**
         * Get the vertical position of the cursor hot point
         * @returns the vertical position of the hot point
         */
        get_hoty(): number;
        /**
         * Get the width of the cursor bitmap
         * @returns the width of the bitmap
         */
        get_width(): number;
    }

    class AudioFormat {
        static $gtype: GObject.GType<AudioFormat>;

        // Fields

        format: number;
        nchannels: number;
        frequency: number;

        // Constructors

        constructor(
            properties?: Partial<{
                format: number;
                nchannels: number;
                frequency: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): AudioFormat;

        // Methods

        /**
         * Allocate a new VNC audio format struct whose
         * contents is initialized with the data found
         * in `format`. The struct must be released using
         * vnc_audio_format_free when no longer required.
         * @returns the new audio format struct
         */
        copy(): AudioFormat;
        /**
         * Release the memory associated with `format`
         */
        free(): void;
    }

    type AudioInterface = typeof Audio;
    class AudioSample {
        static $gtype: GObject.GType<AudioSample>;

        // Fields

        data: number;
        length: number;
        capacity: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: number;
                length: number;
                capacity: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](capacity: number): AudioSample;

        // Methods

        /**
         * Allocate a new audio sample, initializing it with a copy
         * of the data in `sample`.
         *
         * The returned sample must be freed with
         * vnc_audio_sample_free when no longer required.
         * @returns the new audio sample.
         */
        copy(): AudioSample;
        /**
         * Release memory associated with the audio sample
         * `sample`
         */
        free(): void;
    }

    type BaseAudioClass = typeof BaseAudio;
    abstract class BaseAudioPrivate {
        static $gtype: GObject.GType<BaseAudioPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BaseFramebufferClass = typeof BaseFramebuffer;
    abstract class BaseFramebufferPrivate {
        static $gtype: GObject.GType<BaseFramebufferPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ColorMap {
        static $gtype: GObject.GType<ColorMap>;

        // Fields

        offset: number;
        size: number;
        colors: ColorMapEntry;

        // Constructors

        constructor(
            properties?: Partial<{
                offset: number;
                size: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](offset: number, size: number): ColorMap;

        // Methods

        /**
         * Allocate a new color map initializing it with a
         * copy of the data stored in `map`.
         * @returns the new color map
         */
        copy(): ColorMap;
        /**
         * Release the memory associated with the
         * color map `map`
         */
        free(): void;
        /**
         * Lookup the RGB values associated with the
         * colour map entry at position `idx`
         * @param idx the index to set
         * @returns TRUE if @idx was in range, FALSE otherwise
         */
        lookup(idx: number): [boolean, number, number, number];
        /**
         * Update the RGB value associated with the
         * color map entry at position `idx`.
         * @param idx the index to set
         * @param red the new red value
         * @param green the new green value
         * @param blue the new blue value
         * @returns TRUE if @idx was in range, FALSE otherwise
         */
        set(idx: number, red: number, green: number, blue: number): boolean;
    }

    class ColorMapEntry {
        static $gtype: GObject.GType<ColorMapEntry>;

        // Fields

        red: number;
        green: number;
        blue: number;

        // Constructors

        constructor(
            properties?: Partial<{
                red: number;
                green: number;
                blue: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CursorClass = typeof Cursor;
    abstract class CursorPrivate {
        static $gtype: GObject.GType<CursorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FramebufferInterface = typeof Framebuffer;
    class PixelFormat {
        static $gtype: GObject.GType<PixelFormat>;

        // Fields

        bits_per_pixel: number;
        depth: number;
        byte_order: number;
        true_color_flag: number;
        red_max: number;
        green_max: number;
        blue_max: number;
        red_shift: number;
        green_shift: number;
        blue_shift: number;

        // Constructors

        constructor(
            properties?: Partial<{
                bits_per_pixel: number;
                depth: number;
                byte_order: number;
                true_color_flag: number;
                red_max: number;
                green_max: number;
                blue_max: number;
                red_shift: number;
                green_shift: number;
                blue_shift: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): PixelFormat;

        // Methods

        /**
         * Allocate a new VNC pixel format struct whose
         * contents is initialized with the data found
         * in `srcFormat`. The struct must be released using
         * vnc_pixel_format_free when no longer required.
         * @returns the new pixel format struct
         */
        copy(): PixelFormat;
        /**
         * Release the memory associated with `format`
         */
        free(): void;
        match(other: PixelFormat): boolean;
    }

    namespace Audio {
        /**
         * Interface for implementing Audio.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_playback_data(sample: AudioSample): boolean;
            vfunc_playback_start(format: AudioFormat): boolean;
            vfunc_playback_stop(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AudioNamespace {
        $gtype: GObject.GType<Audio>;
        prototype: Audio;
    }
    interface Audio extends GObject.Object, Audio.Interface {
        // Methods

        /**
         * Request playback of a single audio sample in `sample`
         * @param sample the audio sample
         */
        playback_data(sample: AudioSample): void;
        /**
         * Indicate that the remote desktop is about to start
         * audio playback in format `format`.
         * @param format the new audio format
         */
        playback_start(format: AudioFormat): void;
        /**
         * Indicate that the remote desktop has completed
         * audio playback
         */
        playback_stop(): void;
    }

    export const Audio: AudioNamespace & {
        new (): Audio; // This allows `obj instanceof Audio`
    };

    namespace Framebuffer {
        /**
         * Interface for implementing Framebuffer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
            /**
             * Copies data from the range (`srcx,` `srcy)` to
             * (`srcx+``width,` `srcy+``height)` over to the
             * range starting at (`dstx,` `dsty)`.
             * @param srcx the horizontal starting pixel
             * @param srcy the vertical starting pixel
             * @param dstx the horizontal target pixel
             * @param dsty the vertical target pixel
             * @param width the width of the region
             * @param height the height of the region
             */
            vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
            /**
             * Fill all the pixels in the range (`x,` `y)` to
             * (`x` + `width,` `y` + `height)` to the value in
             * `src`. The number of bytes in `src` is
             * determined by the remote pixel format
             * @param src the new pixel data
             * @param x the horizontal pixel to start filling
             * @param y the vertical pixel to start filling
             * @param width the number of pixels to fill horizontally
             * @param height the number of pixels to fill vertically
             */
            vfunc_fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
            vfunc_get_buffer(): number;
            /**
             * Query the height of the remote framebuffer
             */
            vfunc_get_height(): number;
            /**
             * Get the pixel format used to store the framebuffer locally
             */
            vfunc_get_local_format(): PixelFormat;
            vfunc_get_remote_format(): PixelFormat;
            /**
             * Get the number of bytes per line of the framebuffer
             */
            vfunc_get_rowstride(): number;
            /**
             * Query the width of the remote framebuffer
             */
            vfunc_get_width(): number;
            /**
             * Determine if the local and remote pixel formats match
             */
            vfunc_perfect_format_match(): boolean;
            /**
             * Fill all the pixels in the range (`x,` `y)` to
             * (`x` + `width,` `y` + `height)` to the value in
             * `src`. The number of bytes in `src` is always
             * 3 as it must be in plain RGB24 format.
             * @param src the new pixel data
             * @param rowstride the number of bytes per row
             * @param x the horizontal pixel to start filling
             * @param y the vertical pixel to start filling
             * @param width the number of pixels to fill horizontally
             * @param height the number of pixels to fill vertically
             */
            vfunc_rgb24_blt(
                src: Uint8Array | string,
                rowstride: number,
                x: number,
                y: number,
                width: number,
                height: number,
            ): void;
            /**
             * Set the color map to use for the framebuffer
             * @param map the new color map
             */
            vfunc_set_color_map(map: ColorMap): void;
            /**
             * Sets a pixel in the framebuffer at (`x,` `y)` to the
             * value in `src`. The number of bytes in `src` is
             * determined by the remote pixel format
             * @param src the new pixel data
             * @param x the horizontal pixel to set
             * @param y the vertical pixel to set
             */
            vfunc_set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FramebufferNamespace {
        $gtype: GObject.GType<Framebuffer>;
        prototype: Framebuffer;
    }
    interface Framebuffer extends GObject.Object, Framebuffer.Interface {
        // Methods

        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Copies data from the range (`srcx,` `srcy)` to
         * (`srcx+``width,` `srcy+``height)` over to the
         * range starting at (`dstx,` `dsty)`.
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        /**
         * Get a pointer to the framebuffer contents
         * @returns the framebuffer data
         */
        get_buffer(): Uint8Array;
        /**
         * Query the height of the remote framebuffer
         * @returns the frambuffer height
         */
        get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         * @returns the local pixel format
         */
        get_local_format(): PixelFormat;
        get_remote_format(): PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         * @returns the framebuffer row stride
         */
        get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         * @returns the framebuffer width
         */
        get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         * @returns TRUE if the local and remote pixel formats match
         */
        perfect_format_match(): boolean;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        rgb24_blt(
            src: Uint8Array | string,
            rowstride: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        set_color_map(map: ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
    }

    export const Framebuffer: FramebufferNamespace & {
        new (): Framebuffer; // This allows `obj instanceof Framebuffer`
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

export default GVnc;

// END
