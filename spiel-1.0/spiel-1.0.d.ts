
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

export namespace Spiel {

    /**
     * Spiel-1.0
     */


    /**
     * Error codes in the `SPIEL_ERROR` domain that can be emitted in the
     * `utterance-error` signal.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * No speech providers are available
         */
        static NO_PROVIDERS: number;

        /**
         * Voice is not configured correctly
         */
        static MISCONFIGURED_VOICE: number;

        /**
         * Speech provider unexpectedly
         * died
         */
        static PROVIDER_UNEXPECTEDLY_DIED: number;

        /**
         * Internal error in speech
         * provider
         */
        static INTERNAL_PROVIDER_FAILURE: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    function error_quark(): GLib.Quark;

    /**
     * @gir-type Flags
     */
    export namespace VoiceFeature {
        export const $gtype: GObject.GType<VoiceFeature>;
    }

    /**
     * A bitfield of potential voice features that can be advertised to consumers.
     * @gir-type Flags
     */
    enum VoiceFeature {
        /**
         * No features
         */
        NONE = 0,
        /**
         * Provider dispatches event when about to speak word.
         */
        EVENTS_WORD = 1,
        /**
         * Provider dispatches event when about to speak sentence.
         */
        EVENTS_SENTENCE = 2,
        /**
         * Provider dispatches event when about to speak unspecified range.
         */
        EVENTS_RANGE = 4,
        /**
         * Provider dispatches event when SSML mark is reached.
         */
        EVENTS_SSML_MARK = 8,
        SSML_SAY_AS_DATE = 16,
        SSML_SAY_AS_TIME = 32,
        SSML_SAY_AS_TELEPHONE = 64,
        SSML_SAY_AS_CHARACTERS = 128,
        SSML_SAY_AS_CHARACTERS_GLYPHS = 256,
        SSML_SAY_AS_CARDINAL = 512,
        SSML_SAY_AS_ORDINAL = 1024,
        SSML_SAY_AS_CURRENCY = 2048,
        SSML_BREAK = 4096,
        SSML_SUB = 8192,
        SSML_PHONEME = 16384,
        SSML_EMPHASIS = 32768,
        SSML_PROSODY = 65536,
        SSML_SENTENCE_PARAGRAPH = 131072,
        SSML_TOKEN = 262144,
    }


    namespace Provider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::identifier": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::voices": (pspec: GObject.ParamSpec) => void;
            "notify::well-known-name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            identifier: string;
            name: string;
            voices: Gio.ListModel;
            well_known_name: string;
            wellKnownName: string;
        }
    }

    /**
     * Represents a provider speech backend.
     * @gir-type Class
     * @since 1.0
     */
    class Provider extends GObject.Object {
        static $gtype: GObject.GType<Provider>;

        // Properties
        /**
         * The provider's unique identifer.
         * @since 1.0.4
         * @read-only
         * @default null
         */
        get identifier(): string;

        /**
         * The provider's human readable name
         * @since 1.0
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * The list of available {@link Spiel.Voice}s that are provided.
         * @since 1.0
         * @read-only
         */
        get voices(): Gio.ListModel;

        /**
         * The provider's D-Bus well known name.
         * @deprecated since 1.0.4: Use {@link Spiel.Provider.identifier} instead.
         * @read-only
         * @default null
         */
        get well_known_name(): string;

        /**
         * The provider's D-Bus well known name.
         * @deprecated since 1.0.4: Use {@link Spiel.Provider.identifier} instead.
         * @read-only
         * @default null
         */
        get wellKnownName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Provider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Provider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Provider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof Provider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof Provider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Provider.SignalSignatures[K]>): void;

        // Methods
        /**
         * Gets the provider's unique identifier.
         * @returns the identifier.
         * @since 1.0.4
         */
        get_identifier(): string;

        /**
         * Gets a human readable name of this provider
         * @returns the human readable name.
         * @since 1.0
         */
        get_name(): string;

        /**
         * Gets the provider's voices.
         * @returns A list of available voices
         * @since 1.0
         */
        get_voices(): Gio.ListModel;

        /**
         * Gets the provider's D-Bus well known name.
         * @returns the well known name.
         * @deprecated since 1.0.4: Use `spiel_provider_get_identifier()` instead
         */
        get_well_known_name(): string;
    }


    namespace Speaker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when an SSML mark element is reached
             * @signal
             * @since 1.0
             * @run-first
             */
            "mark-reached": (utterance: Utterance, name: string) => void;
            /**
             * Emitted when a range will be spoken in a given utterance. Not all
             * voices are capable of notifying when a range will be spoken.
             * @signal
             * @since 1.0
             * @run-first
             */
            "range-started": (utterance: Utterance, start: number, end: number) => void;
            /**
             * Emitted when a sentence will be spoken in a given utterance. Not all
             * voices are capable of notifying when a sentence will be spoken.
             * @signal
             * @since 1.0
             * @run-first
             */
            "sentence-started": (utterance: Utterance, start: number, end: number) => void;
            /**
             * Emitted when a given utterance has been canceled after it has started
             * speaking
             * @signal
             * @since 1.0
             * @run-first
             */
            "utterance-canceled": (utterance: Utterance) => void;
            /**
             * Emitted when a given utterance has failed to start or complete.
             * @signal
             * @since 1.0
             * @run-first
             */
            "utterance-error": (utterance: Utterance, error: GLib.Error) => void;
            /**
             * Emitted when a given utterance has completed speaking
             * @signal
             * @since 1.0
             * @run-first
             */
            "utterance-finished": (utterance: Utterance) => void;
            /**
             * Emitted when the given utterance is actively being spoken.
             * @signal
             * @since 1.0
             * @run-first
             */
            "utterance-started": (utterance: Utterance) => void;
            /**
             * Emitted when a word will be spoken in a given utterance. Not all
             * voices are capable of notifying when a word will be spoken.
             * @signal
             * @since 1.0
             * @run-first
             */
            "word-started": (utterance: Utterance, start: number, end: number) => void;
            "notify::paused": (pspec: GObject.ParamSpec) => void;
            "notify::providers": (pspec: GObject.ParamSpec) => void;
            "notify::speaking": (pspec: GObject.ParamSpec) => void;
            "notify::voices": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            paused: boolean;
            providers: Gio.ListModel;
            speaking: boolean;
            voices: Gio.ListModel;
        }
    }

    /**
     * A virtual speaker for speech synthesis
     * 
     * The {@link Spiel.Speaker} class represents a single "individual" speaker. Its
     * primary method is {@link Spiel.Speaker.speak} which queues utterances to be
     * spoken.
     * 
     * This class also provides a list of available voices provided by DBus speech
     * providers that are activatable on the session bus.
     * 
     * {@link Spiel.Speaker}'s initialization may perform blocking IO if it the first
     * instance in the process. The default constructor is asynchronous
     * ({@link Spiel.Speaker.new}), although there is a synchronous blocking
     * alternative ({@link Spiel.Speaker.new_sync}).
     * @gir-type Class
     * @since 1.0
     */
    class Speaker extends GObject.Object implements Gio.AsyncInitable<Speaker>, Gio.Initable {
        static $gtype: GObject.GType<Speaker>;

        // Properties
        /**
         * The speaker is in a paused state.
         * 
         * See {@link Spiel.Speaker.pause} and {@link Spiel.Speaker.resume}.
         * @since 1.0
         * @read-only
         * @default false
         */
        get paused(): boolean;

        /**
         * The list of available {@link Provider}s that offer voices.
         * @since 1.0
         * @read-only
         */
        get providers(): Gio.ListModel;

        /**
         * The speaker has an utterance queued or speaking.
         * @since 1.0
         * @read-only
         * @default false
         */
        get speaking(): boolean;

        /**
         * The list of available {@link Voice}s that can be used in an utterance.
         * @since 1.0
         * @read-only
         */
        get voices(): Gio.ListModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Speaker.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Speaker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): Speaker;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(cancellable: Gio.Cancellable | null): Speaker;

        // Signals
        /** @signal */
        connect<K extends keyof Speaker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Speaker.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof Speaker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Speaker.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof Speaker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Speaker.SignalSignatures[K]>): void;

        // Static methods
        /**
         * Asynchronously creates a {@link Spiel.Speaker}.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * thread-default main loop of the thread you are calling this method from (see
         * {@link GLib.MainContext.push_thread_default}). You can then call
         * {@link Spiel.Speaker.new_finish} to get the result of the operation.
         * 
         * See {@link Spiel.Speaker.new_sync} for the synchronous, blocking version of
         * this constructor.
         * @param cancellable optional {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         * @since 1.0
         */
        static ["new"](cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Speaker> | null): void;

        // Methods
        /**
         * Stops the current utterance from being spoken and dumps the utterance queue.
         * @since 1.0
         */
        cancel(): void;

        /**
         * Gets the speech providers that offer voices to this speaker.
         * @returns A {@link Gio.ListModel} of {@link Spiel.Provider}
         * @since 1.0
         */
        get_providers(): Gio.ListModel;

        /**
         * Gets the voices available to this speaker.
         * @returns A {@link Gio.ListModel} of {@link Spiel.Voice}
         * @since 1.0
         */
        get_voices(): Gio.ListModel;

        /**
         * Pause the given speaker. If an utterance is being spoken, it will pause
         * until {@link Speaker.resume} is called.
         * 
         * If the speaker isn't speaking, calling {@link Speaker.speak} will store
         * new utterances in a queue until {@link Speaker.resume} is called.
         * @since 1.0
         */
        pause(): void;

        /**
         * Resumes the given paused speaker.
         * 
         * If the speaker isn't paused this will do nothing.
         * @since 1.0
         */
        resume(): void;

        /**
         * Speak the given utterance. If an utterance is already being spoken
         * the provided utterances will be added to a queue and will be spoken
         * in the order received.
         * @param utterance an {@link Spiel.Utterance} to speak
         * @since 1.0
         */
        speak(utterance: Utterance): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         * @since 2.22
         * @throws GLib.Error
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         * @since 2.22
         * @throws GLib.Error
         */
        new_finish(res: Gio.AsyncResult): Speaker;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @since 2.22
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

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
         * @since 2.22
         * @throws GLib.Error
         */
        init(cancellable: Gio.Cancellable | null): boolean;

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
         * @since 2.22
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace Utterance {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::is-ssml": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::pitch": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::voice": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_ssml: boolean;
            isSsml: boolean;
            language: string;
            pitch: number;
            rate: number;
            text: string;
            voice: Voice | null;
            volume: number;
        }
    }

    /**
     * Represents an utterance to be spoken by a {@link Spiel.Speaker}.
     * 
     * An utterance consists of the text to be spoken and other properties that
     * affect the speech, like rate, pitch or voice used.
     * @gir-type Class
     * @since 1.0
     */
    class Utterance extends GObject.Object {
        static $gtype: GObject.GType<Utterance>;

        // Properties
        /**
         * Whether the utterance's text should be interpreted as an SSML snippet.
         * @since 1.0
         * @default false
         */
        get is_ssml(): boolean;
        set is_ssml(val: boolean);

        /**
         * Whether the utterance's text should be interpreted as an SSML snippet.
         * @since 1.0
         * @default false
         */
        get isSsml(): boolean;
        set isSsml(val: boolean);

        /**
         * The utterance language. If no voice is set this language will be used to
         * select the best matching voice.
         * @since 1.0
         * @default null
         */
        get language(): string;
        set language(val: string);

        /**
         * The pitch at which the utterance will be spoken.
         * @since 1.0
         * @default 1
         */
        get pitch(): number;
        set pitch(val: number);

        /**
         * The speed at which the utterance will be spoken.
         * @since 1.0
         * @default 1
         */
        get rate(): number;
        set rate(val: number);

        /**
         * The utterance text that will be spoken.
         * @since 1.0
         * @default null
         */
        get text(): string;
        set text(val: string);

        /**
         * The voice with which the utterance will be spoken.
         * @since 1.0
         */
        get voice(): Voice | null;
        set voice(val: Voice | null);

        /**
         * The volume at which the utterance will be spoken.
         * @since 1.0
         * @default 1
         */
        get volume(): number;
        set volume(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Utterance.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Utterance.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string | null): Utterance;

        // Signals
        /** @signal */
        connect<K extends keyof Utterance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Utterance.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof Utterance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Utterance.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof Utterance.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Utterance.SignalSignatures[K]>): void;

        // Methods
        /**
         * Gets whether the current utterance an SSML snippet.
         * @returns `true` if the utterance text is SSML
         * @since 1.0
         */
        get_is_ssml(): boolean;

        /**
         * Gets the language used in this utterance.
         * @returns the language
         * @since 1.0
         */
        get_language(): string;

        /**
         * Gets the pitch used in this utterance.
         * @returns the pitch value
         * @since 1.0
         */
        get_pitch(): number;

        /**
         * Gets the rate used in this utterance.
         * @returns the rate value
         * @since 1.0
         */
        get_rate(): number;

        /**
         * Gets the text spoken in this utterance.
         * @returns the text
         * @since 1.0
         */
        get_text(): string;

        /**
         * Gets the voice used in this utterance
         * @returns a {@link Spiel.Voice}
         * @since 1.0
         */
        get_voice(): Voice | null;

        /**
         * Gets the volume used in this utterance.
         * @returns the volume value
         * @since 1.0
         */
        get_volume(): number;

        /**
         * Indicates whether this utterance should be interpreted as SSML.
         * @param is_ssml whether the utterance text is an SSML snippet
         * @since 1.0
         */
        set_is_ssml(is_ssml: boolean): void;

        /**
         * Sets the language of this utterance
         * @param language the language to assign to this utterance
         * @since 1.0
         */
        set_language(language: string): void;

        /**
         * Sets a pitch on this utterance.
         * @param pitch a pitch to assign to this utterance
         * @since 1.0
         */
        set_pitch(pitch: number): void;

        /**
         * Sets a rate on this utterance.
         * @param rate a rate to assign to this utterance
         * @since 1.0
         */
        set_rate(rate: number): void;

        /**
         * Sets the text to be spoken by this utterance.
         * @param text the text to assign to this utterance
         * @since 1.0
         */
        set_text(text: string): void;

        /**
         * Sets a voice on this utterance.
         * @param voice a {@link Spiel.Voice} to assign to this utterance
         * @since 1.0
         */
        set_voice(voice: Voice): void;

        /**
         * Sets a volume on this utterance.
         * @param volume a volume to assign to this utterance
         * @since 1.0
         */
        set_volume(volume: number): void;
    }


    namespace Voice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::features": (pspec: GObject.ParamSpec) => void;
            "notify::identifier": (pspec: GObject.ParamSpec) => void;
            "notify::languages": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            features: VoiceFeature;
            identifier: string;
            languages: string[];
            name: string;
            provider: Provider | null;
        }
    }

    /**
     * Represents a voice implemented by a speech provider.
     * 
     * A DBus speech provider advertises a list of voices that it implements.
     * Each voice will have human-readable name, a unique identifier, and a list
     * of languages supported by the voice.
     * @gir-type Class
     */
    class Voice extends GObject.Object {
        static $gtype: GObject.GType<Voice>;

        // Properties
        /**
         * A bitfield of supported features.
         * @since 1.0
         * @construct-only
         * @default Spiel.VoiceFeature.NONE
         */
        get features(): VoiceFeature;

        /**
         * A unique identifier of the voice. The uniqueness should be considered
         * in the scope of the provider (ie. two providers can use the same
         * identifier).
         * @since 1.0
         * @construct-only
         * @default null
         */
        get identifier(): string;

        /**
         * A list of supported languages encoded as BCP 47 tags.
         * @since 1.0
         * @construct-only
         */
        get languages(): string[];

        /**
         * A human readable name for the voice. Not guaranteed to be unique.
         * May, or may not, be localized by the speech provider.
         * @since 1.0
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * The speech provider that implements this voice.
         * @since 1.0
         * @construct-only
         */
        get provider(): Provider | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Voice.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Voice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Voice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Voice.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof Voice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Voice.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof Voice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Voice.SignalSignatures[K]>): void;

        // Methods
        /**
         * Compares the two {@link Spiel.Voice} values and returns a negative integer
         * if the first value comes before the second, 0 if they are equal, or a
         * positive integer if the first value comes after the second.
         * @param other a {@link Spiel.Voice} to compare with `self`
         * @param user_data user-defined callback data
         * @returns an integer indicating order
         * @since 1.0
         */
        compare(other: Voice, user_data: null): number;

        /**
         * Compares the two {@link Spiel.Voice} values and returns `true` if equal.
         * @param other a {@link Spiel.Voice} to compare with `self`
         * @returns `true` if the two voices match.
         * @since 1.0
         */
        equal(other: Voice): boolean;

        /**
         * Gets the list of supported features.
         * @returns a bit-field of {@link Spiel.VoiceFeature}
         * @since 1.0
         */
        get_features(): VoiceFeature;

        /**
         * Gets the identifier, unique to {@link Spiel.Voice.provider}.
         * @returns the identifier
         * @since 1.0
         */
        get_identifier(): string;

        /**
         * Gets the list of supported languages.
         * @returns a list of BCP 47 tags
         * @since 1.0
         */
        get_languages(): string[];

        /**
         * Gets the name.
         * @returns the name
         * @since 1.0
         */
        get_name(): string;

        /**
         * Gets the output format.
         * @since 1.0
         */
        get_output_format(): string;

        /**
         * Gets the provider associated with this voice
         * @returns a {@link Spiel.Provider}
         * @since 1.0
         */
        get_provider(): Provider | null;

        /**
         * Converts a {@link Spiel.Voice} to a hash value.
         * @returns a hash value corresponding to `self`
         * @since 1.0
         */
        hash(): number;

        /**
         * Sets the audio output format.
         * @param output_format an output format string.
         * @since 1.0
         */
        set_output_format(output_format: string): void;
    }


    namespace VoicesListModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures, Gio.ListModel.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }

    /**
     * Represents an aggregate of all the voices available to Spiel.
     * @gir-type Class
     */
    class VoicesListModel<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<VoicesListModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VoicesListModel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VoicesListModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](providers: Gio.ListModel): VoicesListModel;

        // Signals
        /** @signal */
        connect<K extends keyof VoicesListModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VoicesListModel.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof VoicesListModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VoicesListModel.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof VoicesListModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VoicesListModel.SignalSignatures[K]>): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         * @since 2.44
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         * @since 2.44
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         * @since 2.44
         */
        get_item(position: number): A | null;

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         * @since 2.44
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @since 2.44
         * @virtual
         */
        vfunc_get_item(position: number): A | null;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @since 2.44
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @since 2.44
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    /**
     * @gir-type Alias
     */
    type ProviderClass = typeof Provider;

    /**
     * @gir-type Alias
     */
    type SpeakerClass = typeof Speaker;

    /**
     * @gir-type Alias
     */
    type UtteranceClass = typeof Utterance;

    /**
     * @gir-type Alias
     */
    type VoiceClass = typeof Voice;

    /**
     * @gir-type Alias
     */
    type VoicesListModelClass = typeof VoicesListModel;

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

export default Spiel;

// END
