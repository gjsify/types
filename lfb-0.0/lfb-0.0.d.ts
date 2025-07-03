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

export namespace Lfb {
    /**
     * Lfb-0.0
     */

    /**
     * Enum values used to indicate why the feedbacks for an event ended.
     */

    /**
     * Enum values used to indicate why the feedbacks for an event ended.
     */
    export namespace EventEndReason {
        export const $gtype: GObject.GType<EventEndReason>;
    }

    enum EventEndReason {
        /**
         * There was no feedback in the current theme for this event
         *                                  so no feedback was provided to the user.
         */
        NOT_FOUND,
        /**
         * All feedbacks finished playing their natural length
         */
        NATURAL,
        /**
         * Feedbacks ran until the set timeout expired
         */
        EXPIRED,
        /**
         * The feedbacks were ended explicitly
         */
        EXPLICIT,
    }
    /**
     * Enum values to indicate the current state of the feedbacks
     * triggered by an event.
     */

    /**
     * Enum values to indicate the current state of the feedbacks
     * triggered by an event.
     */
    export namespace EventState {
        export const $gtype: GObject.GType<EventState>;
    }

    enum EventState {
        /**
         * An error occurred triggering feedbacks
         */
        ERRORED,
        /**
         * No state information yet
         */
        NONE,
        /**
         * The feedbacks for this event are currently running
         */
        RUNNING,
        /**
         * All feedbacks for this event ended
         */
        ENDED,
    }
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-sigxcpu-Feedback.top_of_page">org.sigxcpu.Feedback</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function gdbus_feedback_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #LfbGdbusFeedback interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function gdbus_feedback_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Get the application id set via [func`Lfb`.set_app_id].
     * @returns the application id.
     */
    function get_app_id(): string;
    /**
     * Gets the currently set feedback profile.
     * @returns The current profile or %NULL on error.
     */
    function get_feedback_profile(): string;
    /**
     * This can be used to access the lower level API e.g. to listen to
     * property changes. The object is not owned by the caller. Don't
     * unref it after use.
     * @returns The DBus proxy.
     */
    function get_proxy(): GdbusFeedback;
    /**
     * Initialize libfeedback. This must be called before any other of libfeedback's functions.
     * @param app_id The application id
     * @returns %TRUE if successful, or %FALSE on error.
     */
    function init(app_id: string): boolean;
    /**
     * Gets whether or not libfeedback is initialized.
     * @returns %TRUE if libfeedback is initialized, or %FALSE otherwise.
     */
    function is_initted(): boolean;
    /**
     * Sets the application id.
     * @param app_id The application id
     */
    function set_app_id(app_id: string): void;
    /**
     * Sets the active feedback profile to #profile. It is up to the feedback
     * daemon to ignore this request. The new profile might not become active
     * immediately. You can listen to changes #LfbGdbusFeedback's ::profile
     * property to get notified when it takes effect.
     * @param profile The profile to set
     */
    function set_feedback_profile(profile: string): void;
    /**
     * Uninitialize the library when no longer used. Usually called
     * on program shutdown.
     */
    function uninit(): void;
    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'feedback-ended': () => void;
            'notify::app-id': (pspec: GObject.ParamSpec) => void;
            'notify::end-reason': (pspec: GObject.ParamSpec) => void;
            'notify::event': (pspec: GObject.ParamSpec) => void;
            'notify::feedback-profile': (pspec: GObject.ParamSpec) => void;
            'notify::important': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_id: string;
            appId: string;
            end_reason: EventEndReason;
            endReason: EventEndReason;
            event: string;
            feedback_profile: string;
            feedbackProfile: string;
            important: boolean;
            state: EventState;
            timeout: number;
        }
    }

    /**
     * An event triggering feedback to the user
     *
     * #LfbEvent represents an event that should trigger
     * audio, haptic and/or visual feedback to the user by triggering
     * feedback on a feedback daemon. Valid event names are specified
     * in the
     * [Event naming specification](Event-naming-spec-0.0.0.html).
     *
     * One event can trigger multiple feedbacks at once (e.g. audio and
     * haptic feedback). This is determined by the feedback theme in
     * use (which is not under the appliction's control) and the active
     * feedback profile (see [func`Lfb`.set_feedback_profile].
     *
     * After initializing the library via [func`Lfb`.init] feedback can be
     * triggered like:
     *
     * ```c
     *   g_autoptr (GError) err = NULL;
     *   LfbEvent *event = lfb_event_new ("message-new-instant");
     *   lfb_event_set_timeout (event, 0);
     *   if (!lfb_event_trigger_feedback (event, &err))
     *     g_warning ("Failed to trigger feedback: %s", err->message);
     * ```
     *
     * When all feedback for this event has ended the [signal`LfbEvent:`:feedback-ended]
     * signal is emitted. If you want to end the feedback ahead of time use
     * [method`LfbEvent`.end_feedback]:
     *
     * ```c
     *   if (!lfb_event_end_feedback (event, &err))
     *     g_warning ("Failed to end feedback: %s", err->message);
     * ```
     *
     * Since these methods involve DBus calls there are asynchronous variants
     * available, e.g. [method`LfbEvent`.trigger_feedback_async]:
     *
     * ```c
     *   static void
     *   on_feedback_triggered (LfbEvent      *event,
     *                          GAsyncResult  *res,
     *                          gpointer      unused)
     *   {
     *      g_autoptr (GError) err = NULL;
     *      if (!lfb_event_trigger_feedback_finish (event, res, &err)) {
     *         g_warning ("Failed to trigger feedback for %s: %s",
     *                    lfb_event_get_event (event), err->message);
     *      }
     *   }
     *
     *   static void
     *   my_function ()
     *   {
     *     LfbEvent *event = lfb_event_new ("message-new-instant");
     *     lfb_event_trigger_feedback_async (event, NULL,
     *                                      (GAsyncReadyCallback)on_feedback_triggered,
     *                                      NULL);
     *   }
     * ```
     */
    class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Properties

        /**
         * The application id to use for the event.
         * [method`LfbEvent`.set_feedback_profile] for details.
         */
        get app_id(): string;
        set app_id(val: string);
        /**
         * The application id to use for the event.
         * [method`LfbEvent`.set_feedback_profile] for details.
         */
        get appId(): string;
        set appId(val: string);
        get end_reason(): EventEndReason;
        get endReason(): EventEndReason;
        /**
         * The type of event from the Event naming spec, e.g. 'message-new-instant'.
         */
        get event(): string;
        /**
         * The name of the feedback profile to use for this event. See
         * [method`LfbEvent`.set_feedback_profile] for details.
         */
        get feedback_profile(): string;
        set feedback_profile(val: string);
        /**
         * The name of the feedback profile to use for this event. See
         * [method`LfbEvent`.set_feedback_profile] for details.
         */
        get feedbackProfile(): string;
        set feedbackProfile(val: string);
        /**
         * Whether to flag this event as important.
         * [method`LfbEvent`.set_important] for details.
         */
        get important(): boolean;
        set important(val: boolean);
        get state(): EventState;
        /**
         * How long feedback should be provided in seconds. The special value
         * %-1 uses the natural length of each feedback while %0 plays each feedback
         * in a loop until ended explicitly via e.g. [method`LfbEvent`.end_feedback].
         */
        get timeout(): number;
        set timeout(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Event.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Event.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](event: string): Event;

        // Signals

        connect<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Event.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Tells the feedback server to end all feedback for the given event as
         * soon as possible.
         * @returns %TRUE if successful. On error, this will return %FALSE and set          @error.
         */
        end_feedback(): boolean;
        /**
         * Tells the feedback server to end all feedback for the given event as
         * soon as possible.
         * @param cancellable A #GCancellable to cancel the operation or %NULL.
         */
        end_feedback_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Tells the feedback server to end all feedback for the given event as
         * soon as possible.
         * @param cancellable A #GCancellable to cancel the operation or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        end_feedback_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Tells the feedback server to end all feedback for the given event as
         * soon as possible.
         * @param cancellable A #GCancellable to cancel the operation or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        end_feedback_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an async operation started by lfb_event_end_feedback_async. You
         * must call this function in the callback to free memory and receive any
         * errors which occurred.
         *
         * This does not mean that the feedbacks finished right away. Connect to the
         * [`signal@`LfbEvent::feedback-ended] signal for this.
         * @param res Result object passed to the callback of [method@LfbEvent.end_feedback_async]
         * @returns %TRUE if ending the feedbacks was successful
         */
        end_feedback_finish(res: Gio.AsyncResult): boolean;
        /**
         * Returns the app-id for this event. If no app-id has been explicitly
         * set, %NULL is returned. The event uses the app-id returned by
         * [func`Lfb`.get_app_id] in this case.
         * @returns The set app-id for this event or %NULL.
         */
        get_app_id(): string;
        /**
         * Get the reason why the feadback ended.
         * @returns The reason why feedback ended.
         */
        get_end_reason(): EventEndReason;
        /**
         * Get the event's name according to the event naming spec.
         * @returns The event name
         */
        get_event(): string;
        /**
         * Gets the set feedback profile. If no profile was set it returns
         * %NULL. The event uses the system wide profile in this case.
         * @returns The set feedback profile to use for this event or %NULL.
         */
        get_feedback_profile(): string;
        /**
         * Gets the set feedback profile. If no profile was set it returns
         * %NULL. The event uses the system wide profile in this case.
         * @returns The set feedback profile to use for this event or %NULL.
         */
        get_important(): boolean;
        /**
         * Get the current event state (e.g. if triggered feeedback is
         * currently running.
         * @returns The state of the feedback triggered by event.
         */
        get_state(): EventState;
        /**
         * Get the currently set timeout.
         * @returns The event timeout in milliseconds
         */
        get_timeout(): number;
        /**
         * Tells the feedback server to use the given application id for
         * this event when it is submitted. The server might ignore this
         * request. This can be used by notification daemons to honor per
         * application settings automatically.
         *
         * The functions is usually not used by applications.
         *
         * A value of %NULL (the default) lets the server pick the profile.
         * @param app_id The application id to use
         */
        set_app_id(app_id: string): void;
        /**
         * Tells the feedback server to use the given feedback profile for
         * this event when it is submitted. The server might ignore this
         * request.  Valid profile names and their 'noisiness' are specified
         * in the [Feedback theme specification](Feedback-theme-spec-0.0.0.html).
         *
         * A value of %NULL (the default) lets the server pick the profile.
         * @param profile The feedback profile to use
         */
        set_feedback_profile(profile: string): void;
        /**
         * Tells the feedback server that the sender deems this to be an
         * important event. A feedback server might allow the sender to
         * override the current feedback level when this is set.
         * @param important Whether to flag this event as important
         */
        set_important(important: boolean): void;
        /**
         * Tells the feedback server to end feedack after #timeout seconds.
         * The value -1 indicates to not set a timeout and let feedbacks stop
         * on their own while 0 indicates to loop all feedbacks endlessly.
         * They must be stopped via [method`LfbEvent`.end_feedback] in this case.
         *
         * It is an error to change the timeout after the feedback has been triggered
         * via [method`LfbEvent`.trigger_feedback].
         * @param timeout The timeout
         */
        set_timeout(timeout: number): void;
        /**
         * Tells the feedback server to provide proper feedback for the give
         * event to the user.
         * @returns %TRUE if successful. On error, this will return %FALSE and set          @error.
         */
        trigger_feedback(): boolean;
        /**
         * Tells the feedback server to provide proper feedback for the give
         * event to the user. This is the sync version of
         * [method`LfbEvent`.trigger_feedback].
         * @param cancellable A #GCancellable to cancel the operation or %NULL.
         */
        trigger_feedback_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Tells the feedback server to provide proper feedback for the give
         * event to the user. This is the sync version of
         * [method`LfbEvent`.trigger_feedback].
         * @param cancellable A #GCancellable to cancel the operation or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        trigger_feedback_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Tells the feedback server to provide proper feedback for the give
         * event to the user. This is the sync version of
         * [method`LfbEvent`.trigger_feedback].
         * @param cancellable A #GCancellable to cancel the operation or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        trigger_feedback_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an async operation started by [method`LfbEvent`.trigger_feedback_async]. You
         * must call this function in the callback to free memory and receive any
         * errors which occurred.
         * @param res Result object passed to the callback of [method@LfbEvent.trigger_feedback_async]
         * @returns %TRUE if triggering the feedbacks was successful
         */
        trigger_feedback_finish(res: Gio.AsyncResult): boolean;
    }

    namespace GdbusFeedbackProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            'notify::g-bus-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-connection': (pspec: GObject.ParamSpec) => void;
            'notify::g-default-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-info': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name-owner': (pspec: GObject.ParamSpec) => void;
            'notify::g-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::profile': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                GdbusFeedback.ConstructorProps {}
    }

    /**
     * The #LfbGdbusFeedbackProxy structure contains only private data and should only be accessed using the provided API.
     */
    class GdbusFeedbackProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<GdbusFeedbackProxy>, Gio.DBusInterface, Gio.Initable, GdbusFeedback
    {
        static $gtype: GObject.GType<GdbusFeedbackProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GdbusFeedbackProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GdbusFeedbackProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): GdbusFeedbackProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): GdbusFeedbackProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): GdbusFeedbackProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): GdbusFeedbackProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        connect<K extends keyof GdbusFeedbackProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdbusFeedbackProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusFeedbackProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdbusFeedbackProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusFeedbackProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdbusFeedbackProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-sigxcpu-Feedback.top_of_page">org.sigxcpu.Feedback</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_proxy_new_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GdbusFeedbackProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like lfb_gdbus_feedback_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GdbusFeedbackProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-sigxcpu-Feedback.Profile">"Profile"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get profile(): string;
        set profile(val: string);

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): GdbusFeedbackProxy;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_end_feedback(arg_id: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_end_feedback(
            arg_id: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_end_feedback(
            arg_id: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with lfb_gdbus_feedback_call_end_feedback().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to lfb_gdbus_feedback_call_end_feedback().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_end_feedback_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See lfb_gdbus_feedback_call_end_feedback() for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_end_feedback_sync(arg_id: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number> | void;
        /**
         * Finishes an operation started with lfb_gdbus_feedback_call_trigger_feedback().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to lfb_gdbus_feedback_call_trigger_feedback().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_trigger_feedback_finish(res: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback() for the asynchronous version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_trigger_feedback_sync(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_end_feedback(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param id Parameter to return.
         */
        complete_trigger_feedback(invocation: Gio.DBusMethodInvocation, id: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-sigxcpu-Feedback.FeedbackEnded">"FeedbackEnded"</link> D-Bus signal.
         * @param arg_id Argument to pass with the signal.
         * @param arg_reason Argument to pass with the signal.
         */
        emit_feedback_ended(arg_id: number, arg_reason: number): void;
        /**
         * Handler for the #LfbGdbusFeedback::feedback-ended signal.
         * @param arg_id
         * @param arg_reason
         */
        vfunc_feedback_ended(arg_id: number, arg_reason: number): void;
        /**
         * Handler for the #LfbGdbusFeedback::handle-end-feedback signal.
         * @param invocation
         * @param arg_id
         */
        vfunc_handle_end_feedback(invocation: Gio.DBusMethodInvocation, arg_id: number): boolean;
        /**
         * Handler for the #LfbGdbusFeedback::handle-trigger-feedback signal.
         * @param invocation
         * @param arg_app_id
         * @param arg_event
         * @param arg_hints
         * @param arg_timeout
         */
        vfunc_handle_trigger_feedback(
            invocation: Gio.DBusMethodInvocation,
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
        ): boolean;
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

    namespace GdbusFeedbackSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::profile': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                GdbusFeedback.ConstructorProps {}
    }

    /**
     * The #LfbGdbusFeedbackSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class GdbusFeedbackSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusFeedback {
        static $gtype: GObject.GType<GdbusFeedbackSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GdbusFeedbackSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GdbusFeedbackSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GdbusFeedbackSkeleton;

        // Signals

        connect<K extends keyof GdbusFeedbackSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdbusFeedbackSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusFeedbackSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdbusFeedbackSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusFeedbackSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdbusFeedbackSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-sigxcpu-Feedback.Profile">"Profile"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get profile(): string;
        set profile(val: string);

        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_end_feedback(arg_id: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_end_feedback(
            arg_id: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_end_feedback(
            arg_id: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with lfb_gdbus_feedback_call_end_feedback().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to lfb_gdbus_feedback_call_end_feedback().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_end_feedback_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See lfb_gdbus_feedback_call_end_feedback() for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_end_feedback_sync(arg_id: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number> | void;
        /**
         * Finishes an operation started with lfb_gdbus_feedback_call_trigger_feedback().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to lfb_gdbus_feedback_call_trigger_feedback().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_trigger_feedback_finish(res: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback() for the asynchronous version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_trigger_feedback_sync(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_end_feedback(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param id Parameter to return.
         */
        complete_trigger_feedback(invocation: Gio.DBusMethodInvocation, id: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-sigxcpu-Feedback.FeedbackEnded">"FeedbackEnded"</link> D-Bus signal.
         * @param arg_id Argument to pass with the signal.
         * @param arg_reason Argument to pass with the signal.
         */
        emit_feedback_ended(arg_id: number, arg_reason: number): void;
        /**
         * Handler for the #LfbGdbusFeedback::feedback-ended signal.
         * @param arg_id
         * @param arg_reason
         */
        vfunc_feedback_ended(arg_id: number, arg_reason: number): void;
        /**
         * Handler for the #LfbGdbusFeedback::handle-end-feedback signal.
         * @param invocation
         * @param arg_id
         */
        vfunc_handle_end_feedback(invocation: Gio.DBusMethodInvocation, arg_id: number): boolean;
        /**
         * Handler for the #LfbGdbusFeedback::handle-trigger-feedback signal.
         * @param invocation
         * @param arg_app_id
         * @param arg_event
         * @param arg_hints
         * @param arg_timeout
         */
        vfunc_handle_trigger_feedback(
            invocation: Gio.DBusMethodInvocation,
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
        ): boolean;
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

    type EventClass = typeof Event;
    type GdbusFeedbackIface = typeof GdbusFeedback;
    type GdbusFeedbackProxyClass = typeof GdbusFeedbackProxy;
    abstract class GdbusFeedbackProxyPrivate {
        static $gtype: GObject.GType<GdbusFeedbackProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GdbusFeedbackSkeletonClass = typeof GdbusFeedbackSkeleton;
    abstract class GdbusFeedbackSkeletonPrivate {
        static $gtype: GObject.GType<GdbusFeedbackSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace GdbusFeedback {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            profile: string;
        }
    }

    export interface GdbusFeedbackNamespace {
        $gtype: GObject.GType<GdbusFeedback>;
        prototype: GdbusFeedback;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-sigxcpu-Feedback.top_of_page">org.sigxcpu.Feedback</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #LfbGdbusFeedback interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusFeedback extends GObject.Object {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-sigxcpu-Feedback.Profile">"Profile"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get profile(): string;
        set profile(val: string);

        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_end_feedback(arg_id: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_end_feedback(
            arg_id: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_end_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_end_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_end_feedback(
            arg_id: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with lfb_gdbus_feedback_call_end_feedback().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to lfb_gdbus_feedback_call_end_feedback().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_end_feedback_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See lfb_gdbus_feedback_call_end_feedback() for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_end_feedback_sync(arg_id: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call lfb_gdbus_feedback_call_trigger_feedback_finish() to get the result of the operation.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback_sync() for the synchronous, blocking version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_trigger_feedback(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number> | void;
        /**
         * Finishes an operation started with lfb_gdbus_feedback_call_trigger_feedback().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to lfb_gdbus_feedback_call_trigger_feedback().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_trigger_feedback_finish(res: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See lfb_gdbus_feedback_call_trigger_feedback() for the asynchronous version of this method.
         * @param arg_app_id Argument to pass with the method invocation.
         * @param arg_event Argument to pass with the method invocation.
         * @param arg_hints Argument to pass with the method invocation.
         * @param arg_timeout Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_trigger_feedback_sync(
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-sigxcpu-Feedback.EndFeedback">EndFeedback()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_end_feedback(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-sigxcpu-Feedback.TriggerFeedback">TriggerFeedback()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param id Parameter to return.
         */
        complete_trigger_feedback(invocation: Gio.DBusMethodInvocation, id: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-sigxcpu-Feedback.FeedbackEnded">"FeedbackEnded"</link> D-Bus signal.
         * @param arg_id Argument to pass with the signal.
         * @param arg_reason Argument to pass with the signal.
         */
        emit_feedback_ended(arg_id: number, arg_reason: number): void;

        // Virtual methods

        /**
         * Handler for the #LfbGdbusFeedback::feedback-ended signal.
         * @param arg_id
         * @param arg_reason
         */
        vfunc_feedback_ended(arg_id: number, arg_reason: number): void;
        /**
         * Handler for the #LfbGdbusFeedback::handle-end-feedback signal.
         * @param invocation
         * @param arg_id
         */
        vfunc_handle_end_feedback(invocation: Gio.DBusMethodInvocation, arg_id: number): boolean;
        /**
         * Handler for the #LfbGdbusFeedback::handle-trigger-feedback signal.
         * @param invocation
         * @param arg_app_id
         * @param arg_event
         * @param arg_hints
         * @param arg_timeout
         */
        vfunc_handle_trigger_feedback(
            invocation: Gio.DBusMethodInvocation,
            arg_app_id: string,
            arg_event: string,
            arg_hints: GLib.Variant,
            arg_timeout: number,
        ): boolean;
    }

    export const GdbusFeedback: GdbusFeedbackNamespace & {
        new (): GdbusFeedback; // This allows `obj instanceof GdbusFeedback`
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

export default Lfb;

// END
