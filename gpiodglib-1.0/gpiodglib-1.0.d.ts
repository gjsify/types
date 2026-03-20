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

export namespace Gpiodglib {
    /**
     * Gpiodglib-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace EdgeEventType {
        export const $gtype: GObject.GType<EdgeEventType>;
    }

    /**
     * Edge event types.
     * @gir-type Enum
     */
    enum EdgeEventType {
        /**
         * Rising edge event.
         */
        RISING_EDGE,
        /**
         * Falling edge event.
         */
        FALLING_EDGE,
    }

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static FAILED: number;
        static CHIP_CLOSED: number;
        static REQUEST_RELEASED: number;
        static PERM: number;
        static NOENT: number;
        static INTR: number;
        static IO: number;
        static NXIO: number;
        static E2BIG: number;
        static BADFD: number;
        static CHILD: number;
        static AGAIN: number;
        static NOMEM: number;
        static ACCES: number;
        static FAULT: number;
        static BUSY: number;
        static EXIST: number;
        static NODEV: number;
        static INVAL: number;
        static NOTTY: number;
        static PIPE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    export namespace InfoEventType {
        export const $gtype: GObject.GType<InfoEventType>;
    }

    /**
     * Line status change event types.
     * @gir-type Enum
     */
    enum InfoEventType {
        /**
         * Line has been requested.
         */
        REQUESTED,
        /**
         * Previously requested line has been
         * released.
         */
        RELEASED,
        /**
         * Line configuration has changed.
         */
        CONFIG_CHANGED,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineBias {
        export const $gtype: GObject.GType<LineBias>;
    }

    /**
     * Internal bias settings.
     * @gir-type Enum
     */
    enum LineBias {
        /**
         * Don't change the bias setting when applying line
         * config.
         */
        AS_IS,
        /**
         * The internal bias state is unknown.
         */
        UNKNOWN,
        /**
         * The internal bias is disabled.
         */
        DISABLED,
        /**
         * The internal pull-up bias is enabled.
         */
        PULL_UP,
        /**
         * The internal pull-down bias is enabled.
         */
        PULL_DOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineClock {
        export const $gtype: GObject.GType<LineClock>;
    }

    /**
     * Clock settings.
     * @gir-type Enum
     */
    enum LineClock {
        /**
         * Line uses the monotonic clock for edge
         * event timestamps.
         */
        MONOTONIC,
        /**
         * Line uses the realtime clock for edge event
         * timestamps.
         */
        REALTIME,
        /**
         * Line uses the hardware timestamp engine for event
         * timestamps.
         */
        HTE,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineDirection {
        export const $gtype: GObject.GType<LineDirection>;
    }

    /**
     * Direction settings.
     * @gir-type Enum
     */
    enum LineDirection {
        /**
         * Request the line(s), but don't change
         * direction.
         */
        AS_IS,
        /**
         * Direction is input - for reading the value
         * of an externally driven GPIO line.
         */
        INPUT,
        /**
         * Direction is output - for driving the GPIO
         * line.
         */
        OUTPUT,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineDrive {
        export const $gtype: GObject.GType<LineDrive>;
    }

    /**
     * Drive settings.
     * @gir-type Enum
     */
    enum LineDrive {
        /**
         * Drive setting is push-pull.
         */
        PUSH_PULL,
        /**
         * Line output is open-drain.
         */
        OPEN_DRAIN,
        /**
         * Line output is open-source.
         */
        OPEN_SOURCE,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineEdge {
        export const $gtype: GObject.GType<LineEdge>;
    }

    /**
     * Edge detection settings.
     * @gir-type Enum
     */
    enum LineEdge {
        /**
         * Line edge detection is disabled.
         */
        NONE,
        /**
         * Line detects rising edge events.
         */
        RISING,
        /**
         * Line detects falling edge events.
         */
        FALLING,
        /**
         * Line detects both rising and falling edge events.
         */
        BOTH,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineValue {
        export const $gtype: GObject.GType<LineValue>;
    }

    /**
     * Logical line state.
     * @gir-type Enum
     */
    enum LineValue {
        /**
         * Line is logically inactive.
         */
        INACTIVE,
        /**
         * Line is logically active.
         */
        ACTIVE,
    }

    /**
     * Get the API version of the library as a human-readable string.
     * @returns A valid pointer to a human-readable string containing the library version. The pointer is valid for the lifetime of the program and must not be freed by the caller.
     */
    function api_version(): string;
    function error_quark(): GLib.Quark;
    /**
     * Check if the file pointed to by path is a GPIO chip character device.
     * @param path Path to check.
     * @returns TRUE if the file exists and is either a GPIO chip character device or a symbolic link to one, FALSE otherwise.
     */
    function is_gpiochip_device(path: string): boolean;
    namespace Chip {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the state of a watched GPIO line changes.
             * @signal
             * @run-last
             */
            'info-event': (arg0: InfoEvent) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            path: string;
        }
    }

    /**
     * Represents a single GPIO chip.
     * @gir-type Class
     */
    class Chip extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Chip>;

        // Properties

        /**
         * Path that was used to open this GPIO chip.
         * @construct-only
         */
        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Chip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Chip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): Chip;

        // Signals

        /** @signal */
        connect<K extends keyof Chip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Chip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Chip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Chip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Chip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Chip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Close the GPIO chip device file and free associated resources.
         *
         * The chip object can live after calling this method but any of the chip's
         * methods will result in an error being set.
         */
        close(): void;
        /**
         * Get the filesystem path that was used to open this GPIO chip.
         * @returns Path to the underlying character device file. The string is a copy and must be freed by the caller with `g_free()`.
         */
        dup_path(): string;
        /**
         * Get information about the chip.
         * @returns New {@link Gpiodglib.ChipInfo}.
         */
        get_info(): ChipInfo;
        /**
         * Retrieve the current snapshot of line information for a single line.
         * @param offset Offset of the line to get the info for.
         * @returns New {@link Gpiodglib.LineInfo}.
         */
        get_line_info(offset: number): LineInfo;
        /**
         * Map a GPIO line's name to its offset within the chip.
         * @param name Name of the GPIO line to map.
         * @param offset Return location for the mapped offset.
         * @returns TRUE on success, FALSE on failure.
         */
        get_line_offset_from_name(name: string, offset: number): boolean;
        /**
         * `brief` Check if this object is valid.
         * @returns TRUE if this object's methods can be used, FALSE otherwise.
         */
        is_closed(): boolean;
        /**
         * Request a set of lines for exclusive usage.
         * @param req_cfg Request config object. Can be NULL for default settings.
         * @param line_cfg Line config object.
         * @returns New {@link Gpiodglib.LineRequest}.
         */
        request_lines(req_cfg: RequestConfig, line_cfg: LineConfig): LineRequest;
        /**
         * Stop watching the line at given offset for info events.
         * @param offset Offset of the line to get the info for.
         * @returns TRUE on success, FALSE on failure.
         */
        unwatch_line_info(offset: number): boolean;
        /**
         * Retrieve the current snapshot of line information for a single line and
         * start watching this line for future changes.
         * @param offset Offset of the line to get the info for and to watch.
         * @returns New {@link Gpiodglib.LineInfo}.
         */
        watch_line_info(offset: number): LineInfo;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

    namespace ChipInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::num-lines': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: string;
            name: string;
            num_lines: number;
            numLines: number;
        }
    }

    /**
     * Represents an immutable snapshot of GPIO chip information.
     * @gir-type Class
     */
    class ChipInfo extends GObject.Object {
        static $gtype: GObject.GType<ChipInfo>;

        // Properties

        /**
         * Label of this GPIO chip device.
         * @read-only
         */
        get label(): string;
        /**
         * Name of this GPIO chip device.
         * @read-only
         */
        get name(): string;
        /**
         * Number of GPIO lines exposed by this chip.
         * @read-only
         */
        get num_lines(): number;
        /**
         * Number of GPIO lines exposed by this chip.
         * @read-only
         */
        get numLines(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChipInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ChipInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ChipInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChipInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ChipInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChipInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ChipInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ChipInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the label of the chip as represented in the kernel.
         * @returns Valid pointer to a human-readable string containing the chip label. The returned string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_label(): string;
        /**
         * Get the name of the chip as represented in the kernel.
         * @returns Valid pointer to a human-readable string containing the chip name. The returned string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_name(): string;
        /**
         * Get the number of lines exposed by the chip.
         * @returns Number of GPIO lines.
         */
        get_num_lines(): number;
    }

    namespace EdgeEvent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::event-type': (pspec: GObject.ParamSpec) => void;
            'notify::global-seqno': (pspec: GObject.ParamSpec) => void;
            'notify::line-offset': (pspec: GObject.ParamSpec) => void;
            'notify::line-seqno': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp-ns': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            event_type: EdgeEventType;
            eventType: EdgeEventType;
            global_seqno: number;
            globalSeqno: number;
            line_offset: number;
            lineOffset: number;
            line_seqno: number;
            lineSeqno: number;
            timestamp_ns: number;
            timestampNs: number;
        }
    }

    /**
     * {@link Gpiodglib.EdgeEvent} stores information about a single line edge event.
     * It contains the event type, timestamp and the offset of the line on which
     * the event occurred as well as two sequence numbers (global for all lines
     * in the associated request and local for this line only).
     * @gir-type Class
     */
    class EdgeEvent extends GObject.Object {
        static $gtype: GObject.GType<EdgeEvent>;

        // Properties

        /**
         * Type of the edge event.
         * @read-only
         */
        get event_type(): EdgeEventType;
        /**
         * Type of the edge event.
         * @read-only
         */
        get eventType(): EdgeEventType;
        /**
         * Global sequence number of this event.
         * @read-only
         */
        get global_seqno(): number;
        /**
         * Global sequence number of this event.
         * @read-only
         */
        get globalSeqno(): number;
        /**
         * Offset of the line on which this event was registered.
         * @read-only
         */
        get line_offset(): number;
        /**
         * Offset of the line on which this event was registered.
         * @read-only
         */
        get lineOffset(): number;
        /**
         * Event sequence number specific to the line.
         * @read-only
         */
        get line_seqno(): number;
        /**
         * Event sequence number specific to the line.
         * @read-only
         */
        get lineSeqno(): number;
        /**
         * Timestamp of the edge event expressed in nanoseconds.
         * @read-only
         */
        get timestamp_ns(): number;
        /**
         * Timestamp of the edge event expressed in nanoseconds.
         * @read-only
         */
        get timestampNs(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EdgeEvent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EdgeEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EdgeEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EdgeEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EdgeEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EdgeEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EdgeEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EdgeEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the event type.
         * @returns The event type (`GPIODGLIB_EDGE_EVENT_RISING_EDGE` or `GPIODGLIB_EDGE_EVENT_FALLING_EDGE`).
         */
        get_event_type(): EdgeEventType;
        /**
         * Get the global sequence number of the event.
         * @returns Sequence number of the event in the series of events for all lines in the associated line request.
         */
        get_global_seqno(): number;
        /**
         * Get the offset of the line which triggered the event.
         * @returns Line offset.
         */
        get_line_offset(): number;
        /**
         * Get the event sequence number specific to the line.
         * @returns Sequence number of the event in the series of events only for this line within the lifetime of the associated line request.
         */
        get_line_seqno(): number;
        /**
         * Get the timestamp of the event.
         *
         * The source clock for the timestamp depends on the event_clock setting for
         * the line.
         * @returns Timestamp in nanoseconds.
         */
        get_timestamp_ns(): number;
    }

    namespace InfoEvent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::event-type': (pspec: GObject.ParamSpec) => void;
            'notify::line-info': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp-ns': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            event_type: InfoEventType;
            eventType: InfoEventType;
            line_info: LineInfo;
            lineInfo: LineInfo;
            timestamp_ns: number;
            timestampNs: number;
        }
    }

    /**
     * {@link Gpiodglib.InfoEvent} contains information about the event itself (timestamp,
     * type) as well as a snapshot of line's status in the form of a line-info
     * object.
     * @gir-type Class
     */
    class InfoEvent extends GObject.Object {
        static $gtype: GObject.GType<InfoEvent>;

        // Properties

        /**
         * Type of the info event. One of `GPIODGLIB_INFO_EVENT_LINE_REQUESTED`,
         * `GPIODGLIB_INFO_EVENT_LINE_RELEASED` or
         * `GPIODGLIB_INFO_EVENT_LINE_CONFIG_CHANGED`.
         * @read-only
         */
        get event_type(): InfoEventType;
        /**
         * Type of the info event. One of `GPIODGLIB_INFO_EVENT_LINE_REQUESTED`,
         * `GPIODGLIB_INFO_EVENT_LINE_RELEASED` or
         * `GPIODGLIB_INFO_EVENT_LINE_CONFIG_CHANGED`.
         * @read-only
         */
        get eventType(): InfoEventType;
        /**
         * New line-info snapshot associated with this info event.
         * @read-only
         */
        get line_info(): LineInfo;
        /**
         * New line-info snapshot associated with this info event.
         * @read-only
         */
        get lineInfo(): LineInfo;
        /**
         * Timestamp (in nanoseconds).
         * @read-only
         */
        get timestamp_ns(): number;
        /**
         * Timestamp (in nanoseconds).
         * @read-only
         */
        get timestampNs(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfoEvent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfoEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof InfoEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InfoEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InfoEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfoEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the event type of the status change event.
         * @returns One of `GPIODGLIB_INFO_EVENT_LINE_REQUESTED`, `GPIODGLIB_INFO_EVENT_LINE_RELEASED` or `GPIODGLIB_INFO_EVENT_LINE_CONFIG_CHANGED`.
         */
        get_event_type(): InfoEventType;
        /**
         * `self` {@link Gpiodglib.InfoEvent} to manipulate.
         * Get the snapshot of line-info associated with the event.
         * @returns New reference to the associated line-info object.
         */
        get_line_info(): LineInfo;
        /**
         * Get the timestamp of the event.
         * @returns Timestamp in nanoseconds, read from the monotonic clock.
         */
        get_timestamp_ns(): number;
    }

    namespace LineConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::configured-offsets': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            configured_offsets: any[];
            configuredOffsets: any[];
        }
    }

    /**
     * The line-config object contains the configuration for lines that can be
     * used in two cases:
     *  - when making a line request
     *  - when reconfiguring a set of already requested lines.
     * @gir-type Class
     */
    class LineConfig extends GObject.Object {
        static $gtype: GObject.GType<LineConfig>;

        // Properties

        /**
         * Array of offsets for which line settings have been set.
         * @read-only
         */
        get configured_offsets(): any[];
        /**
         * Array of offsets for which line settings have been set.
         * @read-only
         */
        get configuredOffsets(): any[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LineConfig;

        // Signals

        /** @signal */
        connect<K extends keyof LineConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add line settings for a set of offsets.
         * @param offsets GArray of offsets for which to apply the settings.
         * @param settings {@link Gpiodglib.LineSettings} to apply.
         * @returns TRUE on success, FALSE on failure.
         */
        add_line_settings(offsets: any[][], settings: LineSettings): boolean;
        /**
         * Get configured offsets.
         * @returns GArray containing the offsets for which configuration has been set.
         */
        get_configured_offsets(): any[][];
        /**
         * Get line settings for offset.
         * @param offset Offset for which to get line settings.
         * @returns New reference to a {@link Gpiodglib.LineSettings}.
         */
        get_line_settings(offset: number): LineSettings;
        /**
         * Reset the line config object.
         */
        reset(): void;
        /**
         * `brief` Set output values for a number of lines.
         * @param values GArray containing the output values.
         * @returns TRUE on success, FALSE on error.
         */
        set_output_values(values: any[][]): boolean;
    }

    namespace LineInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active-low': (pspec: GObject.ParamSpec) => void;
            'notify::bias': (pspec: GObject.ParamSpec) => void;
            'notify::consumer': (pspec: GObject.ParamSpec) => void;
            'notify::debounce-period-us': (pspec: GObject.ParamSpec) => void;
            'notify::debounced': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::drive': (pspec: GObject.ParamSpec) => void;
            'notify::edge-detection': (pspec: GObject.ParamSpec) => void;
            'notify::event-clock': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::used': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_low: boolean;
            activeLow: boolean;
            bias: LineBias;
            consumer: string;
            debounce_period_us: number;
            debouncePeriodUs: number;
            debounced: boolean;
            direction: LineDirection;
            drive: LineDrive;
            edge_detection: LineEdge;
            edgeDetection: LineEdge;
            event_clock: LineClock;
            eventClock: LineClock;
            name: string;
            offset: number;
            used: boolean;
        }
    }

    /**
     * Line info object contains an immutable snapshot of a line's status.
     *
     * The line info contains all the publicly available information about a
     * line, which does not include the line value. The line must be requested
     * to access the line value.
     * @gir-type Class
     */
    class LineInfo extends GObject.Object {
        static $gtype: GObject.GType<LineInfo>;

        // Properties

        /**
         * Indicates whether the signal of the line is inverted.
         * @read-only
         */
        get active_low(): boolean;
        /**
         * Indicates whether the signal of the line is inverted.
         * @read-only
         */
        get activeLow(): boolean;
        /**
         * Bias setting of the GPIO line.
         * @read-only
         */
        get bias(): LineBias;
        /**
         * Name of the consumer of the GPIO line, if requested.
         * @read-only
         */
        get consumer(): string;
        /**
         * Debounce period of the line (expressed in microseconds).
         * @read-only
         */
        get debounce_period_us(): number;
        /**
         * Debounce period of the line (expressed in microseconds).
         * @read-only
         */
        get debouncePeriodUs(): number;
        /**
         * Indicates whether the line is debounced (by hardware or by the
         * kernel software debouncer).
         * @read-only
         */
        get debounced(): boolean;
        /**
         * Direction of the GPIO line.
         * @read-only
         */
        get direction(): LineDirection;
        /**
         * Drive setting of the GPIO line.
         * @read-only
         */
        get drive(): LineDrive;
        /**
         * Edge detection setting of the GPIO line.
         * @read-only
         */
        get edge_detection(): LineEdge;
        /**
         * Edge detection setting of the GPIO line.
         * @read-only
         */
        get edgeDetection(): LineEdge;
        /**
         * Event clock used to timestamp the edge events of the line.
         * @read-only
         */
        get event_clock(): LineClock;
        /**
         * Event clock used to timestamp the edge events of the line.
         * @read-only
         */
        get eventClock(): LineClock;
        /**
         * Name of the GPIO line, if named.
         * @read-only
         */
        get name(): string;
        /**
         * Offset of the GPIO line.
         * @read-only
         */
        get offset(): number;
        /**
         * Indicates whether the GPIO line is requested for exclusive usage.
         * @read-only
         */
        get used(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LineInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of the consumer of the line.
         * @returns Name of the GPIO consumer as it is represented in the kernel. This function returns a valid pointer to a null-terminated string or NULL if the consumer name is not set. The string is a copy of the consumer label and must be freed by the caller with `g_free()`.
         */
        dup_consumer(): string;
        /**
         * Get the name of the line.
         * @returns Name of the GPIO line as it is represented in the kernel. This function returns a valid pointer to a null-terminated string or NULL if the line is unnamed. The string is a copy of the line name and must be freed by the caller with `g_free()`.
         */
        dup_name(): string;
        /**
         * Get the bias setting of the line.
         * @returns `GPIODGLIB_LINE_BIAS_PULL_UP`, `GPIODGLIB_LINE_BIAS_PULL_DOWN`, `GPIODGLIB_LINE_BIAS_DISABLED` or `GPIODGLIB_LINE_BIAS_UNKNOWN`.
         */
        get_bias(): LineBias;
        /**
         * Get the debounce period of the line, in microseconds.
         * @returns Debounce period in microseconds. 0 if the line is not debounced.
         */
        get_debounce_period_us(): GLib.TimeSpan;
        /**
         * Get the direction setting of the line.
         * @returns `GPIODGLIB_LINE_DIRECTION_INPUT` or `GPIODGLIB_LINE_DIRECTION_OUTPUT`.
         */
        get_direction(): LineDirection;
        /**
         * Get the drive setting of the line.
         * @returns `GPIODGLIB_LINE_DRIVE_PUSH_PULL`, `GPIODGLIB_LINE_DRIVE_OPEN_DRAIN` or `GPIODGLIB_LINE_DRIVE_OPEN_SOURCE`.
         */
        get_drive(): LineDrive;
        /**
         * Get the edge detection setting of the line.
         * @returns `GPIODGLIB_LINE_EDGE_NONE`, `GPIODGLIB_LINE_EDGE_RISING`, `GPIODGLIB_LINE_EDGE_FALLING` or `GPIODGLIB_LINE_EDGE_BOTH`.
         */
        get_edge_detection(): LineEdge;
        /**
         * Get the event clock setting used for edge event timestamps for the line.
         * @returns `GPIODGLIB_LINE_CLOCK_MONOTONIC`, `GPIODGLIB_LINE_CLOCK_HTE` or `GPIODGLIB_LINE_CLOCK_REALTIME`.
         */
        get_event_clock(): LineClock;
        /**
         * Get the offset of the line.
         *
         * The offset uniquely identifies the line on the chip. The combination of the
         * chip and offset uniquely identifies the line within the system.
         * @returns Offset of the line within the parent chip.
         */
        get_offset(): number;
        /**
         * Check if the logical value of the line is inverted compared to the physical.
         * @returns TRUE if the line is "active-low", FALSE otherwise.
         */
        is_active_low(): boolean;
        /**
         * Check if the line is debounced (either by hardware or by the kernel
         * software debouncer).
         * @returns TRUE if the line is debounced, FALSE otherwise.
         */
        is_debounced(): boolean;
        /**
         * Check if the line is in use.
         *
         * The exact reason a line is busy cannot be determined from user space.
         * It may have been requested by another process or hogged by the kernel.
         * It only matters that the line is used and can't be requested until
         * released by the existing consumer.
         * @returns TRUE if the line is in use, FALSE otherwise.
         */
        is_used(): boolean;
    }

    namespace LineRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when an edge event is detected on one of the requested GPIO
             * line.
             * @signal
             * @run-last
             */
            'edge-event': (arg0: EdgeEvent) => void;
            'notify::chip-name': (pspec: GObject.ParamSpec) => void;
            'notify::requested-offsets': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chip_name: string;
            chipName: string;
            requested_offsets: any[];
            requestedOffsets: any[];
        }
    }

    /**
     * Line request object allows interacting with a set of requested GPIO lines.
     * @gir-type Class
     */
    class LineRequest extends GObject.Object {
        static $gtype: GObject.GType<LineRequest>;

        // Properties

        /**
         * Name of the GPIO chip this request was made on.
         * @read-only
         */
        get chip_name(): string;
        /**
         * Name of the GPIO chip this request was made on.
         * @read-only
         */
        get chipName(): string;
        /**
         * Array of requested offsets.
         * @read-only
         */
        get requested_offsets(): any[];
        /**
         * Array of requested offsets.
         * @read-only
         */
        get requestedOffsets(): any[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LineRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of the chip this request was made on.
         * @returns Name the GPIO chip device. The string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_chip_name(): string;
        /**
         * Get the offsets of the lines in the request.
         * @returns Array containing the requested offsets.
         */
        get_requested_offsets(): any[][];
        /**
         * Get the value of a single requested line.
         * @param offset The offset of the line of which the value should be read.
         * @param value Return location for the value.
         * @returns TRUE on success, FALSE on failure.
         */
        get_value(offset: number, value: LineValue | null): boolean;
        /**
         * Get the values of all requested lines.
         * @param values Array in which the values will be stored. Can be NULL in which case a new array will be created and its location stored here.
         * @returns TRUE on success, FALSE on failure.
         */
        get_values(values: any[][]): boolean;
        /**
         * Get the values of a subset of requested lines.
         * @param offsets Array of offsets identifying the subset of requested lines from which to read values.
         * @param values Array in which the values will be stored. Can be NULL in which case a new array will be created and its location stored here.
         * @returns TRUE on success, FALSE on failure.
         */
        get_values_subset(offsets: any[][], values: any[][]): boolean;
        /**
         * Check if this request was released.
         * @returns TRUE if this request was released and is no longer valid, FALSE otherwise.
         */
        is_released(): boolean;
        /**
         * Update the configuration of lines associated with a line request.
         *
         * The new line configuration completely replaces the old. Any requested lines
         * without overrides are configured to the requested defaults. Any configured
         * overrides for lines that have not been requested are silently ignored.
         * @param config New line config to apply.
         * @returns TRUE on success, FALSE on failure.
         */
        reconfigure_lines(config: LineConfig): boolean;
        /**
         * Release the requested lines and free all associated resources.
         */
        release(): void;
        /**
         * Set the value of a single requested line.
         * @param offset The offset of the line for which the value should be set.
         * @param value Value to set.
         * @returns TRUE on success, FALSE on failure.
         */
        set_value(offset: number, value: LineValue | null): boolean;
        /**
         * Set the values of all lines associated with a request.
         * @param values Array containing the values to set. Must be sized to contain the number of values equal to the number of requested lines. Each value is associated with the line identified by the corresponding entry in the offset array filled by `gpiodglib_line_request_get_requested_offsets`.
         * @returns TRUE on success, FALSE on failure.
         */
        set_values(values: any[][]): boolean;
        /**
         * Set the values of a subset of requested lines.
         * @param offsets Array of offsets identifying the requested lines for which to set values.
         * @param values Array in which the values will be stored. Can be NULL in which case a new array will be created and its location stored here.
         * @returns TRUE on success, FALSE on failure.
         */
        set_values_subset(offsets: any[][], values: any[][]): boolean;
    }

    namespace LineSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active-low': (pspec: GObject.ParamSpec) => void;
            'notify::bias': (pspec: GObject.ParamSpec) => void;
            'notify::debounce-period-us': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::drive': (pspec: GObject.ParamSpec) => void;
            'notify::edge-detection': (pspec: GObject.ParamSpec) => void;
            'notify::event-clock': (pspec: GObject.ParamSpec) => void;
            'notify::output-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_low: boolean;
            activeLow: boolean;
            bias: LineBias;
            debounce_period_us: number;
            debouncePeriodUs: number;
            direction: LineDirection;
            drive: LineDrive;
            edge_detection: LineEdge;
            edgeDetection: LineEdge;
            event_clock: LineClock;
            eventClock: LineClock;
            output_value: LineValue;
            outputValue: LineValue;
        }
    }

    /**
     * Line settings object contains a set of line properties that can be used
     * when requesting lines or reconfiguring an existing request.
     * @gir-type Class
     */
    class LineSettings extends GObject.Object {
        static $gtype: GObject.GType<LineSettings>;

        // Properties

        /**
         * Line active-low settings.
         */
        get active_low(): boolean;
        set active_low(val: boolean);
        /**
         * Line active-low settings.
         */
        get activeLow(): boolean;
        set activeLow(val: boolean);
        /**
         * Line bias setting.
         */
        get bias(): LineBias;
        set bias(val: LineBias);
        /**
         * Line debounce period (expressed in microseconds).
         */
        get debounce_period_us(): number;
        set debounce_period_us(val: number);
        /**
         * Line debounce period (expressed in microseconds).
         */
        get debouncePeriodUs(): number;
        set debouncePeriodUs(val: number);
        /**
         * Line direction setting.
         */
        get direction(): LineDirection;
        set direction(val: LineDirection);
        /**
         * Line drive setting.
         */
        get drive(): LineDrive;
        set drive(val: LineDrive);
        /**
         * Line edge detection setting.
         */
        get edge_detection(): LineEdge;
        set edge_detection(val: LineEdge);
        /**
         * Line edge detection setting.
         */
        get edgeDetection(): LineEdge;
        set edgeDetection(val: LineEdge);
        /**
         * Clock used to timestamp edge events.
         */
        get event_clock(): LineClock;
        set event_clock(val: LineClock);
        /**
         * Clock used to timestamp edge events.
         */
        get eventClock(): LineClock;
        set eventClock(val: LineClock);
        /**
         * Line output value.
         */
        get output_value(): LineValue;
        set output_value(val: LineValue);
        /**
         * Line output value.
         */
        get outputValue(): LineValue;
        set outputValue(val: LineValue);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineSettings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LineSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get active-low setting.
         * @returns TRUE if active-low is enabled, FALSE otherwise.
         */
        get_active_low(): boolean;
        /**
         * Get bias.
         * @returns Current bias setting.
         */
        get_bias(): LineBias;
        /**
         * Get debounce period.
         * @returns Current debounce period in microseconds.
         */
        get_debounce_period_us(): GLib.TimeSpan;
        /**
         * Get direction.
         * @returns Current direction.
         */
        get_direction(): LineDirection;
        /**
         * Get drive.
         * @returns Current drive setting.
         */
        get_drive(): LineDrive;
        /**
         * Get edge detection.
         * @returns Current edge detection setting.
         */
        get_edge_detection(): LineEdge;
        /**
         * Get event clock setting.
         * @returns Current event clock setting.
         */
        get_event_clock(): LineClock;
        /**
         * Get the output value.
         * @returns Current output value.
         */
        get_output_value(): LineValue;
        /**
         * Reset the line settings object to its default values.
         */
        reset(): void;
        /**
         * Set active-low setting.
         * @param active_low New active-low setting.
         */
        set_active_low(active_low: boolean): void;
        /**
         * Set bias.
         * @param bias New bias.
         */
        set_bias(bias: LineBias | null): void;
        /**
         * Set debounce period.
         * @param period New debounce period in microseconds.
         */
        set_debounce_period_us(period: GLib.TimeSpan): void;
        /**
         * Set direction.
         * @param direction New direction.
         */
        set_direction(direction: LineDirection | null): void;
        /**
         * Set drive.
         * @param drive New drive setting.
         */
        set_drive(drive: LineDrive | null): void;
        /**
         * Set edge detection.
         * @param edge New edge detection setting.
         */
        set_edge_detection(edge: LineEdge | null): void;
        /**
         * Set event clock.
         * @param event_clock New event clock.
         */
        set_event_clock(event_clock: LineClock | null): void;
        /**
         * Set the output value.
         * @param value New output value.
         */
        set_output_value(value: LineValue | null): void;
    }

    namespace RequestConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::consumer': (pspec: GObject.ParamSpec) => void;
            'notify::event-buffer-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            consumer: string;
            event_buffer_size: number;
            eventBufferSize: number;
        }
    }

    /**
     * Request config objects are used to pass a set of options to the kernel at
     * the time of the line request.
     * @gir-type Class
     */
    class RequestConfig extends GObject.Object {
        static $gtype: GObject.GType<RequestConfig>;

        // Properties

        /**
         * Name of the request consumer.
         */
        get consumer(): string;
        set consumer(val: string);
        /**
         * Size of the kernel event buffer size of the request.
         */
        get event_buffer_size(): number;
        set event_buffer_size(val: number);
        /**
         * Size of the kernel event buffer size of the request.
         */
        get eventBufferSize(): number;
        set eventBufferSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RequestConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RequestConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RequestConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RequestConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RequestConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RequestConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RequestConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RequestConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the consumer name configured in the request config.
         * @returns Consumer name stored in the request config. The returned string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_consumer(): string;
        /**
         * Get the edge event buffer size for the request config.
         * @returns Edge event buffer size setting from the request config.
         */
        get_event_buffer_size(): number;
        /**
         * Set the consumer name for the request.
         *
         * If the consumer string is too long, it will be truncated to the max
         * accepted length.
         * @param consumer Consumer name.
         */
        set_consumer(consumer: string): void;
        /**
         * Set the size of the kernel event buffer for the request.
         *
         * The kernel may adjust the value if it's too high. If set to 0, the default
         * value will be used.
         * @param event_buffer_size New event buffer size.
         */
        set_event_buffer_size(event_buffer_size: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ChipClass = typeof Chip;
    /**
     * @gir-type Alias
     */
    type ChipInfoClass = typeof ChipInfo;
    /**
     * @gir-type Alias
     */
    type EdgeEventClass = typeof EdgeEvent;
    /**
     * @gir-type Alias
     */
    type InfoEventClass = typeof InfoEvent;
    /**
     * @gir-type Alias
     */
    type LineConfigClass = typeof LineConfig;
    /**
     * @gir-type Alias
     */
    type LineInfoClass = typeof LineInfo;
    /**
     * @gir-type Alias
     */
    type LineRequestClass = typeof LineRequest;
    /**
     * @gir-type Alias
     */
    type LineSettingsClass = typeof LineSettings;
    /**
     * @gir-type Alias
     */
    type RequestConfigClass = typeof RequestConfig;
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

export default Gpiodglib;

// END
