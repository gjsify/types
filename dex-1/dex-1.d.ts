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

export namespace Dex {
    /**
     * Dex-1
     */

    export namespace BlockKind {
        export const $gtype: GObject.GType<BlockKind>;
    }

    enum BlockKind {
        THEN,
        CATCH,
        FINALLY,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        static UNKNOWN: number;
        static CHANNEL_CLOSED: number;
        static DEPENDENCY_FAILED: number;
        static FIBER_EXITED: number;
        static NO_FIBER: number;
        static PENDING: number;
        static SEMAPHORE_CLOSED: number;
        static TIMED_OUT: number;
        static TYPE_MISMATCH: number;
        static TYPE_NOT_SUPPORTED: number;
        static FIBER_CANCELLED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace FutureStatus {
        export const $gtype: GObject.GType<FutureStatus>;
    }

    enum FutureStatus {
        PENDING,
        RESOLVED,
        REJECTED,
    }
    /**
     * An asynchronous `pread()` wrapper.
     * @param aio_context
     * @param fd
     * @param buffer
     * @param count
     * @param offset
     * @returns a future that will resolve when the   read completes or rejects with error.
     */
    function aio_read(aio_context: AioContext, fd: number, buffer: any | null, count: number, offset: number): Future;
    /**
     * An asynchronous `pwrite()` wrapper.
     * @param aio_context
     * @param fd
     * @param buffer
     * @param count
     * @param offset
     * @returns a future that will resolve when the   write completes or rejects with error.
     */
    function aio_write(aio_context: AioContext, fd: number, buffer: any | null, count: number, offset: number): Future;
    /**
     * Wrapper for g_bus_get().
     * @param bus_type
     * @returns a #DexFuture that resolves to a #GDBusConnection   or rejects with error.
     */
    function bus_get(bus_type: Gio.BusType | null): Future;
    /**
     * Wrapper for g_dbus_connection_call().
     * @param connection
     * @param bus_name
     * @param object_path
     * @param interface_name
     * @param method_name
     * @param parameters
     * @param reply_type
     * @param flags
     * @param timeout_msec
     * @returns a #DexFuture that resolves to a #GVariant   or rejects with error.
     */
    function dbus_connection_call(
        connection: Gio.DBusConnection,
        bus_name: string,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant,
        reply_type: GLib.VariantType,
        flags: Gio.DBusCallFlags | null,
        timeout_msec: number,
    ): Future;
    /**
     * Wrapper for g_dbus_connection_call_with_unix_fd_list().
     * @param connection
     * @param bus_name
     * @param object_path
     * @param interface_name
     * @param method_name
     * @param parameters
     * @param reply_type
     * @param flags
     * @param timeout_msec
     * @param fd_list a #GUnixFDList
     * @returns a #DexFutureSet that resolves to a #GVariant.   The #DexFuture containing the resulting #GUnixFDList can be retrieved   with dex_future_set_get_future_at() with an index of 1.
     */
    function dbus_connection_call_with_unix_fd_list(
        connection: Gio.DBusConnection,
        bus_name: string,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant,
        reply_type: GLib.VariantType,
        flags: Gio.DBusCallFlags | null,
        timeout_msec: number,
        fd_list?: Gio.UnixFDList | null,
    ): Future;
    /**
     * Wrapper for g_dbus_connection_send_message_with_reply().
     * @param connection a #GDBusConnection
     * @param message a #GDBusMessage
     * @param flags flags for @message
     * @param timeout_msec timeout in milliseconds, or -1 for default, or %G_MAXINT   for no timeout.
     * @returns a #DexFuture that will resolve to a #GDBusMessage   or reject with failure.
     */
    function dbus_connection_send_message_with_reply(
        connection: Gio.DBusConnection,
        message: Gio.DBusMessage,
        flags: Gio.DBusSendMessageFlags | null,
        timeout_msec: number,
    ): [Future, number];
    function error_quark(): GLib.Quark;
    /**
     * Asynchronously copies a file and returns a #DexFuture which
     * can be observed for the result.
     * @param source a #GFile
     * @param destination a #GFile
     * @param flags the #GFileCopyFlags
     * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
     * @returns a #DexFuture
     */
    function file_copy(
        source: Gio.File,
        destination: Gio.File,
        flags: Gio.FileCopyFlags | null,
        io_priority: number,
    ): Future;
    function file_enumerate_children(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags | null,
        io_priority: number,
    ): Future;
    function file_enumerator_next_files(
        file_enumerator: Gio.FileEnumerator,
        num_files: number,
        io_priority: number,
    ): Future;
    function file_load_contents_bytes(file: Gio.File): Future;
    /**
     * Asynchronously creates a directory and returns #DexFuture which
     * can be observed for the result.
     * @param file a #GFile
     * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
     * @returns a #DexFuture
     */
    function file_make_directory(file: Gio.File, io_priority: number): Future;
    function file_query_info(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags | null,
        io_priority: number,
    ): Future;
    /**
     * Asynchronously opens a file for reading.
     * @param file a #GFile
     * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
     * @returns a #DexFuture
     */
    function file_read(file: Gio.File, io_priority: number): Future;
    function file_replace(
        file: Gio.File,
        etag: string,
        make_backup: boolean,
        flags: Gio.FileCreateFlags | null,
        io_priority: number,
    ): Future;
    function get_min_stack_size(): number;
    function get_page_size(): number;
    function init(): void;
    function input_stream_close(self: Gio.InputStream, io_priority: number): Future;
    function input_stream_read(self: Gio.InputStream, buffer: any | null, count: number, io_priority: number): Future;
    function input_stream_read_bytes(self: Gio.InputStream, count: number, io_priority: number): Future;
    function input_stream_skip(self: Gio.InputStream, count: number, io_priority: number): Future;
    function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;
    function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;
    function output_stream_splice(
        output: Gio.OutputStream,
        input: Gio.InputStream,
        flags: Gio.OutputStreamSpliceFlags | null,
        io_priority: number,
    ): Future;
    function output_stream_write(
        self: Gio.OutputStream,
        buffer: any | null,
        count: number,
        io_priority: number,
    ): Future;
    function output_stream_write_bytes(
        self: Gio.OutputStream,
        bytes: GLib.Bytes | Uint8Array,
        io_priority: number,
    ): Future;
    function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;
    function socket_client_connect(socket_client: Gio.SocketClient, socket_connectable: Gio.SocketConnectable): Future;
    function socket_listener_accept(listener: Gio.SocketListener): Future;
    /**
     * Creates a future that awaits for `subprocess` to complete using
     * g_subprocess_wait_check_async().
     * @param subprocess a #GSubprocess
     * @returns a #DexFuture that will resolve when @subprocess   exits cleanly or reject upon signal or non-successful exit.
     */
    function subprocess_wait_check(subprocess: Gio.Subprocess): Future;
    /**
     * Retrieves the `DexObject` stored inside the given `value`.
     * @param value a `GValue` initialized with type `DEX_TYPE_OBJECT`
     * @returns a `DexObject`
     */
    function value_get_object(value: GObject.Value | any): Object | null;
    /**
     * Stores the given `DexObject` inside `value`.
     *
     * The [struct`GObject`.Value] will acquire a reference to the `object`.
     * @param value a [struct@GObject.Value] initialized with type `DEX_TYPE_OBJECT`
     * @param object a `DexObject` or %NULL
     */
    function value_set_object(value: GObject.Value | any, object?: Object | null): void;
    /**
     * Stores the given `DexObject` inside `value`.
     *
     * This function transfers the ownership of the `object` to the `GValue`.
     * @param value a [struct@GObject.Value] initialized with type `DEX_TYPE_OBJECT`
     * @param object a `DexObject`
     */
    function value_take_object(value: GObject.Value | any, object?: Object | null): void;
    interface FiberFunc {
        (): Future | null;
    }
    interface FutureCallback {
        (future: Future): Future | null;
    }
    interface SchedulerFunc {
        (): void;
    }
    type FileInfoList = object | null;
    type InetAddressList = object | null;
    namespace AsyncPair {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class AsyncPair extends Future {
        static $gtype: GObject.GType<AsyncPair>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](instance: any | null, info: AsyncPairInfo): AsyncPair;

        // Signals

        connect<K extends keyof AsyncPair.SignalSignatures>(signal: K, callback: AsyncPair.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AsyncPair.SignalSignatures>(
            signal: K,
            callback: AsyncPair.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AsyncPair.SignalSignatures>(
            signal: K,
            ...args: AsyncPair.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the cancellable for the async pair.
         *
         * If the DexAsyncPair is discarded by it's callers, then it will automatically
         * be cancelled using g_cancellable_cancel().
         * @returns a #GCancellable
         */
        get_cancellable(): Gio.Cancellable;
        return_boolean(value: boolean): void;
        /**
         * Rejects `async_pair` with `error`.
         *
         * This function is meant to be used when manually wrapping
         * various #GAsyncReadyCallback based API.
         *
         * The ownership of `error` is taken when calling this function.
         * @param error a #GError
         */
        return_error(error: GLib.Error): void;
        return_int64(value: number): void;
        /**
         * Resolves `async_pair` with a value of `instance`.
         *
         * This function is meant to be used when manually wrapping
         * various #GAsyncReadyCallback based API.
         *
         * The ownership of `instance` is taken when calling this function.
         * @param instance a #GObject
         */
        return_object(instance: GObject.Object): void;
        /**
         * Resolves `async_pair` with `value`.
         * @param value a string or %NULL
         */
        return_string(value?: string | null): void;
        return_uint64(value: number): void;
        /**
         * Resolves `async_pair` with `variant`.
         * @param variant the variant to resolve with
         */
        return_variant(variant: GLib.Variant): void;
        /**
         * Sets whether or not the future should cancel the async operation when
         * the future is discarded. This happens when no more futures are awaiting
         * the completion of this future.
         * @param cancel_on_discard if the operation should cancel when the future is discarded
         */
        set_cancel_on_discard(cancel_on_discard: boolean): void;
    }

    namespace AsyncResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }

    class AsyncResult extends GObject.Object implements Gio.AsyncResult {
        static $gtype: GObject.GType<AsyncResult>;

        // Constructors

        constructor(properties?: Partial<AsyncResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            source_object?: any | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback | null,
        ): AsyncResult;

        // Signals

        connect<K extends keyof AsyncResult.SignalSignatures>(
            signal: K,
            callback: AsyncResult.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AsyncResult.SignalSignatures>(
            signal: K,
            callback: AsyncResult.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AsyncResult.SignalSignatures>(
            signal: K,
            ...args: AsyncResult.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Tracks the result of `future` and uses the value to complete `async_result,`
         * eventually calling the registered #GAsyncReadyCallback.
         * @param future a #DexFuture
         */
        ['await'](future: Future): void;
        /**
         * Gets the future for the #DexAsyncResult, or %NULL if a future
         * is not available.
         * @returns a #DexFuture or %NULL
         */
        dup_future(): Future | null;
        get_name(): string;
        propagate_boolean(): boolean;
        propagate_double(): number;
        propagate_int(): number;
        propagate_pointer(): any | null;
        set_name(name: string): void;
        set_priority(priority: number): void;
        set_static_name(name: string): void;

        // Inherited methods
        /**
         * Gets the source object from a [iface`Gio`.AsyncResult].
         * @returns a new reference to the source    object for the @res, or `NULL` if there is none.
         */
        get_source_object<T = GObject.Object>(): T;
        /**
         * Gets the user data from a [iface`Gio`.AsyncResult].
         * @returns the user data for @res.
         */
        get_user_data(): any | null;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @returns `TRUE` if @res has the indicated @source_tag, `FALSE` if   not.
         */
        is_tagged(source_tag?: any | null): boolean;
        /**
         * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
         * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
         * `FALSE`.
         *
         * This can be used for legacy error handling in async `*_finish()`
         * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
         * error returns themselves rather than calling into the virtual method.
         * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
         * set by virtual methods should also be extracted by virtual methods,
         * to enable subclasses to chain up correctly.
         * @returns `TRUE` if @error is has been filled in with an error from   @res, `FALSE` if not.
         */
        legacy_propagate_error(): boolean;
        /**
         * Gets the source object from a [iface`Gio`.AsyncResult].
         */
        vfunc_get_source_object<T = GObject.Object>(): T;
        /**
         * Gets the user data from a [iface`Gio`.AsyncResult].
         */
        vfunc_get_user_data(): any | null;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         */
        vfunc_is_tagged(source_tag?: any | null): boolean;
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

    namespace Block {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class Block extends Future {
        static $gtype: GObject.GType<Block>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Block.SignalSignatures>(signal: K, callback: Block.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Block.SignalSignatures>(signal: K, callback: Block.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Block.SignalSignatures>(
            signal: K,
            ...args: Block.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the kind of block.
         *
         * The kind of block relates to what situations the block would be
         * executed such as for handling a future resolution, rejection, or
         * both.
         * @returns a #DexBlockKind
         */
        get_kind(): BlockKind;
        /**
         * Gets the scheduler to use when executing a block.
         * @returns a #DexScheduler
         */
        get_scheduler(): Scheduler;
    }

    namespace Cancellable {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class Cancellable extends Future {
        static $gtype: GObject.GType<Cancellable>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Cancellable;

        static new_from_cancellable(cancellable?: Gio.Cancellable | null): Cancellable;

        // Signals

        connect<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            callback: Cancellable.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            callback: Cancellable.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            ...args: Cancellable.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        cancel(): void;
    }

    namespace Channel {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Channel extends Object {
        static $gtype: GObject.GType<Channel>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](capacity: number): Channel;

        // Signals

        connect<K extends keyof Channel.SignalSignatures>(signal: K, callback: Channel.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: Channel.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Channel.SignalSignatures>(
            signal: K,
            ...args: Channel.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        can_receive(): boolean;
        can_send(): boolean;
        close_receive(): void;
        close_send(): void;
        /**
         * Receives the next item from the channel.
         *
         * The resulting future will resolve or reject when an item is available
         * to the channel or when send side has closed (in that order).
         * @returns a #DexFuture
         */
        receive(): Future;
        /**
         * Will attempt to receive all items in the channel as a #DexResultSet.
         *
         * If the receive side of the channel is closed, then the future will
         * reject with an error.
         *
         * If there are items in the queue, then they will be returned as part
         * of a #DexResultSet containing each of the futures.
         *
         * Otherwise, a #DexFutureSet will be returned which will resolve or
         * reject when the next item is available in the channel (or the send
         * or receive sides are closed).
         * @returns a #DexFuture
         */
        receive_all(): Future;
        /**
         * Queues `future` into the channel.
         *
         * The other end of the channel can receive the future (or a future that will
         * eventually resolve to `future)` using dex_channel_receive().
         *
         * This function returns a #DexFuture that will resolve when the channels
         * capacity is low enough to queue more items.
         *
         * If the send side of the channel is closed, the returned #DexFuture will be
         * rejected with %DEX_ERROR_CHANNEL_CLOSED.
         * @param future a #DexFuture
         * @returns a #DexFuture
         */
        send(future: Future): Future;
    }

    namespace Delayed {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class Delayed extends Future {
        static $gtype: GObject.GType<Delayed>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](future: Future): Delayed;

        // Signals

        connect<K extends keyof Delayed.SignalSignatures>(signal: K, callback: Delayed.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Delayed.SignalSignatures>(
            signal: K,
            callback: Delayed.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Delayed.SignalSignatures>(
            signal: K,
            ...args: Delayed.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the delayed future provided to dex_delayed_new().
         *
         * This function can only return a #DexFuture before dex_delayed_release()
         * is called. After that, the delayed future is released and this function
         * will return %NULL.
         * @returns a #DexFuture or %NULL
         */
        dup_future(): Future | null;
        release(): void;
    }

    namespace Fiber {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class Fiber extends Future {
        static $gtype: GObject.GType<Fiber>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Fiber.SignalSignatures>(signal: K, callback: Fiber.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fiber.SignalSignatures>(signal: K, callback: Fiber.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fiber.SignalSignatures>(
            signal: K,
            ...args: Fiber.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Future {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Future extends Object {
        static $gtype: GObject.GType<Future>;

        // Constructors

        _init(...args: any[]): void;

        static all_race(futures: Future[]): Future;

        static all(futures: Future[]): Future;

        static any(futures: Future[]): Future;

        static ['catch'](future: Future, callback: FutureCallback): Future;

        static catch_loop(future: Future, callback: FutureCallback): Future;

        static ['finally'](future: Future, callback: FutureCallback): Future;

        static finally_loop(future: Future, callback: FutureCallback): Future;

        static first(futures: Future[]): Future;

        static new_for_boolean(v_bool: boolean): Future;

        static new_for_double(v_double: number): Future;

        static new_for_errno(errno_: number): Future;

        static new_for_error(error: GLib.Error): Future;

        static new_for_float(v_float: number): Future;

        static new_for_int(v_int: number): Future;

        static new_for_int64(v_int64: number): Future;

        static new_for_object(value: GObject.Object): Future;

        static new_for_pointer(pointer?: any | null): Future;

        static new_for_string(string: string): Future;

        static new_for_uint(v_uint: number): Future;

        static new_for_uint64(v_uint64: number): Future;

        static new_for_value(value: GObject.Value | any): Future;

        static new_infinite(): Future;

        static new_take_object(value: GObject.Object): Future;

        static new_take_string(string: string): Future;

        static then(future: Future, callback: FutureCallback): Future;

        static then_loop(future: Future, callback: FutureCallback): Future;

        // Signals

        connect<K extends keyof Future.SignalSignatures>(signal: K, callback: Future.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Future.SignalSignatures>(signal: K, callback: Future.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Future.SignalSignatures>(
            signal: K,
            ...args: Future.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Suspends the current #DexFiber and resumes when `future` has completed.
         *
         * If `future` is completed when this function is called, the fiber will handle
         * the result immediately.
         *
         * This function may only be called within a #DexFiber. To do otherwise will
         * return %FALSE and `error` set to %DEX_ERROR_NO_FIBER.
         *
         * It is an error to call this function in a way that would cause
         * intermediate code to become invalid when resuming the stack. For example,
         * if a foreach-style function taking a callback was to suspend from the
         * callback, undefined behavior may occur such as thread-local-storage
         * having changed.
         * @returns %TRUE if the future resolved, otherwise %FALSE   and @error is set.
         */
        ['await'](): boolean;
        /**
         * Awaits on `future` and returns the gboolean result.
         *
         * If the result is not a #gboolean, `error` is set.
         * @returns the #gboolean, or %FALSE and @error is set
         */
        await_boolean(): boolean;
        /**
         * Awaits on `future` and returns the %G_TYPE_BOXED based result.
         * @returns the boxed result, or %NULL and @error is set.
         */
        await_boxed(): any | null;
        /**
         * Awaits on `future` and returns the result as an double.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an double, or 0 in case of failure and @error is set.
         */
        await_double(): number;
        /**
         * Awaits on `future` and returns the enum result.
         *
         * If the result is not a %G_TYPE_ENUM, `error` is set.
         * @returns the enum or 0 and @error is set.
         */
        await_enum(): number;
        /**
         * Awaits on `future` and returns the flags result.
         *
         * If the result is not a %G_TYPE_FLAGS, `error` is set.
         * @returns the flags or 0 and @error is set.
         */
        await_flags(): number;
        /**
         * Awaits on `future` and returns the result as an float.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an float, or 0 in case of failure and @error is set.
         */
        await_float(): number;
        /**
         * Awaits on `future` and returns the result as an int.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an int, or 0 in case of failure and @error is set.
         */
        await_int(): number;
        /**
         * Awaits on `future` and returns the result as an int64.
         *
         * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
         * @returns an int64, or 0 in case of failure and @error is set.
         */
        await_int64(): number;
        /**
         * Awaits on `future` and returns the #GObject-based result.
         * @returns the object, or %NULL and @error is set.
         */
        await_object<T = GObject.Object>(): T;
        /**
         * Calls dex_await() and returns the value of g_value_get_pointer(),
         * otherwise `error` is set if the future rejected.
         * @returns a pointer or %NULL
         */
        await_pointer(): any | null;
        /**
         * Awaits on `future` and returns the string result.
         *
         * If the result is not a %G_TYPE_STRING, `error` is set.
         * @returns the string  or %NULL and @error is set
         */
        await_string(): string | null;
        /**
         * Awaits on `future` and returns the result as an uint.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an uint, or 0 in case of failure and @error is set.
         */
        await_uint(): number;
        /**
         * Awaits on `future` and returns the result as an uint64.
         *
         * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
         * @returns an uint64, or 0 in case of failure and @error is set.
         */
        await_uint64(): number;
        /**
         * Awaits on `future` and returns the %G_TYPE_VARIANT based result.
         * @returns the variant result, or %NULL and @error is set.
         */
        await_variant(): GLib.Variant;
        /**
         * Disowns a future, allowing it to run to completion even though there may
         * be no observer interested in the futures completion or rejection.
         */
        disown(): void;
        get_name(): string;
        get_status(): FutureStatus;
        get_value(): unknown;
    }

    namespace FutureSet {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class FutureSet extends Future {
        static $gtype: GObject.GType<FutureSet>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FutureSet.SignalSignatures>(signal: K, callback: FutureSet.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FutureSet.SignalSignatures>(
            signal: K,
            callback: FutureSet.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FutureSet.SignalSignatures>(
            signal: K,
            ...args: FutureSet.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets a #DexFuture that was used to produce the result of `future_set`.
         *
         * Use dex_future_set_get_size() to determine the number of #DexFuture that
         * are contained within the #DexFutureSet.
         * @param position
         * @returns a #DexFuture
         */
        get_future_at(position: number): Future;
        /**
         * Gets the number of futures associated with the #DexFutureSet. You may
         * use dex_future_set_get_future_at() to obtain the individual #DexFuture.
         * @returns the number of #DexFuture in @future_set.
         */
        get_size(): number;
        /**
         * Gets the result from a #DexFuture that is part of the
         * #DexFutureSet.
         * @param position the #DexFuture position within the set
         * @returns a #GValue if successful; otherwise %NULL   and @error is set.
         */
        get_value_at(position: number): unknown;
    }

    namespace MainScheduler {
        // Signal signatures
        interface SignalSignatures extends Scheduler.SignalSignatures {}
    }

    class MainScheduler extends Scheduler {
        static $gtype: GObject.GType<MainScheduler>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MainScheduler.SignalSignatures>(
            signal: K,
            callback: MainScheduler.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MainScheduler.SignalSignatures>(
            signal: K,
            callback: MainScheduler.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MainScheduler.SignalSignatures>(
            signal: K,
            ...args: MainScheduler.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * `DexObject` is the basic building block of types defined within
     * libdex. Futures, Schedulers, and Channels all inherit from DexObject
     * which provides features like thread-safe weak pointers and memory
     * management operations.
     *
     * Objects that are integrating with GIO instead inherit from their
     * natural type in GIO.
     */
    abstract class Object {
        static $gtype: GObject.GType<Object>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: Object.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: Object.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: Object.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Acquires a reference on the given object, and increases its reference count by one.
         * @returns the object with its reference count increased
         */
        ref(): Object;
        /**
         * Releases a reference on the given object, and decreases its reference count by one.
         *
         * If it was the last reference, the resources associated to the instance are freed.
         */
        unref(): void;
    }

    namespace Promise {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class Promise extends Future {
        static $gtype: GObject.GType<Promise>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Promise;

        static new_cancellable(): Promise;

        // Signals

        connect<K extends keyof Promise.SignalSignatures>(signal: K, callback: Promise.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: Promise.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Promise.SignalSignatures>(
            signal: K,
            ...args: Promise.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets a #GCancellable that will cancel when the promise has
         * been discarded (and therefore result no longer necessary).
         *
         * This is useful when manually implementing wrappers around various
         * #GAsyncReadyCallback based API.
         *
         * If `promise` was created with dex_promise_new(), then %NULL is returned.
         * @returns a #GCancellable or %NULL
         */
        get_cancellable(): Gio.Cancellable | null;
        /**
         * Marks the promise as rejected, indicating a failure.
         * @param error a #GError
         */
        reject(error: GLib.Error): void;
        /**
         * Sets the result for a #DexPromise.
         * @param value a #GValue containing the resolved value
         */
        resolve(value: GObject.Value | any): void;
        resolve_boolean(value: boolean): void;
        resolve_double(value: number): void;
        resolve_float(value: number): void;
        resolve_int(value: number): void;
        resolve_int64(value: number): void;
        resolve_long(value: number): void;
        resolve_object(object?: any | null): void;
        resolve_string(value: string): void;
        resolve_uint(value: number): void;
        resolve_uint64(value: number): void;
        resolve_ulong(value: number): void;
    }

    namespace Scheduler {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    abstract class Scheduler extends Object {
        static $gtype: GObject.GType<Scheduler>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Scheduler.SignalSignatures>(signal: K, callback: Scheduler.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Scheduler.SignalSignatures>(
            signal: K,
            callback: Scheduler.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Scheduler.SignalSignatures>(
            signal: K,
            ...args: Scheduler.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default scheduler for the process.
         *
         * The default scheduler executes tasks within the default #GMainContext.
         * Typically that is the main thread of the application.
         */
        static get_default(): Scheduler;
        /**
         * Gets the default scheduler for the thread.
         */
        static get_thread_default(): Scheduler | null;
        /**
         * Gets the thread default scheduler with the reference count incremented.
         */
        static ref_thread_default(): Scheduler | null;

        // Methods

        /**
         * Gets the default main context for a scheduler.
         *
         * This may be a different value depending on the calling thread.
         *
         * For example, calling this on the #DexThreadPoolScheduer from outside
         * a worker thread may result in getting a shared #GMainContext for the
         * process.
         *
         * However, calling from a worker thread may give you a #GMainContext
         * specifically for that thread.
         * @returns a #GMainContext
         */
        get_main_context(): GLib.MainContext;
        /**
         * Queues `func` to run on `scheduler`.
         * @param func the function callback
         */
        push(func: SchedulerFunc): void;
        /**
         * Request `scheduler` to spawn a #DexFiber.
         *
         * The fiber will have it's own stack and cooperatively schedules among other
         * fibers sharing the schaeduler.
         *
         * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
         * rounded up to the nearest page size.
         * @param stack_size stack size in bytes or 0
         * @returns a #DexFuture that will resolve or reject when   @func completes (or it's resulting #DexFuture completes).
         */
        spawn(stack_size: number): Future;
    }

    namespace StaticFuture {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class StaticFuture extends Future {
        static $gtype: GObject.GType<StaticFuture>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StaticFuture.SignalSignatures>(
            signal: K,
            callback: StaticFuture.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StaticFuture.SignalSignatures>(
            signal: K,
            callback: StaticFuture.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StaticFuture.SignalSignatures>(
            signal: K,
            ...args: StaticFuture.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ThreadPoolScheduler {
        // Signal signatures
        interface SignalSignatures extends Scheduler.SignalSignatures {}
    }

    class ThreadPoolScheduler extends Scheduler {
        static $gtype: GObject.GType<ThreadPoolScheduler>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): ThreadPoolScheduler;

        // Signals

        connect<K extends keyof ThreadPoolScheduler.SignalSignatures>(
            signal: K,
            callback: ThreadPoolScheduler.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ThreadPoolScheduler.SignalSignatures>(
            signal: K,
            callback: ThreadPoolScheduler.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ThreadPoolScheduler.SignalSignatures>(
            signal: K,
            ...args: ThreadPoolScheduler.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default thread pool scheduler for the instance.
         *
         * This function is useful to allow programs and libraries to share
         * an off-main-thread scheduler without having to coordinate on where
         * the scheduler instance is created or owned.
         */
        static get_default(): Scheduler;
    }

    namespace Timeout {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class Timeout extends Future {
        static $gtype: GObject.GType<Timeout>;

        // Constructors

        _init(...args: any[]): void;

        static new_deadline(deadline: number): Timeout;

        static new_msec(msec: number): Timeout;

        static new_seconds(seconds: number): Timeout;

        static new_usec(usec: number): Timeout;

        // Signals

        connect<K extends keyof Timeout.SignalSignatures>(signal: K, callback: Timeout.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Timeout.SignalSignatures>(
            signal: K,
            callback: Timeout.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Timeout.SignalSignatures>(
            signal: K,
            ...args: Timeout.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        postpone_until(deadline: number): void;
    }

    namespace UnixSignal {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    class UnixSignal extends Future {
        static $gtype: GObject.GType<UnixSignal>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](signum: number): UnixSignal;

        // Signals

        connect<K extends keyof UnixSignal.SignalSignatures>(
            signal: K,
            callback: UnixSignal.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UnixSignal.SignalSignatures>(
            signal: K,
            callback: UnixSignal.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UnixSignal.SignalSignatures>(
            signal: K,
            ...args: UnixSignal.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_signum(): number;
    }

    abstract class AioContext {
        static $gtype: GObject.GType<AioContext>;

        // Constructors

        _init(...args: any[]): void;
    }

    class AsyncPairInfo {
        static $gtype: GObject.GType<AsyncPairInfo>;

        // Fields

        async: any;
        finish: any;
        return_type: GObject.GType;

        // Constructors

        _init(...args: any[]): void;
    }

    type AsyncResultClass = typeof AsyncResult;
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

export default Dex;

// END
