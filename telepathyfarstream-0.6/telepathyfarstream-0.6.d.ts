
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
import type TelepathyGLib from '@girs/telepathyglib-0.12';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gst from '@girs/gst-1.0';
import type Farstream from '@girs/farstream-0.2';

export namespace TelepathyFarstream {

    /**
     * TelepathyFarstream-0.6
     */


    namespace Channel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This function is called after a channel is closed, either because
             * it has been closed by the connection manager or because we had a locally
             * generated error.
             * @signal
             * @run-last
             */
            closed: () => void;
            /**
             * Tells the application that a content has been added. In the callback for
             * this signal, the application should set its preferred codecs, and hook
             * up to any signal from {@link TelepathyFarstream.Content} it cares about. Special care should be
             * made to connect {@link TelepathyFarstream.Content.SignalSignatures.src_pad_added | TelepathyFarstream.Content::src-pad-added} as well
             * as the {@link TelepathyFarstream.Content.SignalSignatures.start_sending | TelepathyFarstream.Content::start-sending} and {@link TelepathyFarstream.Content.SignalSignatures.stop_sending | TelepathyFarstream.Content::stop-sending} signals.
             * @signal
             * @run-last
             */
            "content-added": (arg0: Content) => void;
            /**
             * Tells the application that a content is being removed.
             * @signal
             * @run-last
             */
            "content-removed": (arg0: Content) => void;
            /**
             * When this signal is emitted, the conference should be added to the
             * application's pipeline.
             * @signal
             * @run-last
             */
            "fs-conference-added": (arg0: Farstream.Conference) => void;
            /**
             * When this signal is emitted, the conference should be remove from the
             * application's pipeline.
             * @signal
             * @run-last
             */
            "fs-conference-removed": (arg0: Farstream.Conference) => void;
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::fs-conferences": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            channel: TelepathyGLib.Channel;
            fs_conferences: never[];
            fsConferences: never[];
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * All members of the object are private
     * @gir-type Class
     */
    class Channel extends GObject.Object implements Gio.AsyncInitable<Channel> {
        static $gtype: GObject.GType<Channel>;

        // Properties
        /**
         * @construct-only
         */
        get channel(): TelepathyGLib.Channel;

        /**
         * @read-only
         */
        get fs_conferences(): null[];

        /**
         * @read-only
         */
        get fsConferences(): null[];

        /**
         * @read-only
         */
        get object_path(): string;

        /**
         * @read-only
         */
        get objectPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Channel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Channel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(object: GObject.Object, result: Gio.AsyncResult): Channel;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Channel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link TelepathyFarstream.Channel} from an existing channel proxy, the new
         * TfChannel object will be return in the async callback.
         * 
         * The user must call `tf_channel_new_finish()` in the callback
         * to get the finished object.
         * @param channel_proxy a {@link TelepathyGLib.Channel} proxy
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the channel is ready
         */
        static new_async(channel_proxy: TelepathyGLib.Channel, callback: (Gio.AsyncReadyCallback<Channel> | null)): void;

        // Methods
        /**
         * You must call this function on call messages received on the async bus.
         * `GstMessages` are not modified.
         * @param message A {@link Gst.Message} received from the bus
         * @returns `true` if the message has been handled, `false` otherwise
         */
        bus_message(message: Gst.Message): boolean;

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
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

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
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

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
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Channel;

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
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }


    namespace Content {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal requests that the source be restarted so that the caps can
             * be renegotiated with a new resolutions and framerate.
             * @signal
             * @run-last
             */
            "restart-source": () => void;
            /**
             * This signal is emitted when a data is coming on a new pad. This signal
             * is not emitted on the main thread, so special care must be made to lock
             * the relevant data. When the callback returns from this signal, data will
             * start flowing through the pad, so the application MUST connect a sink.
             * @signal
             * @run-last
             */
            "src-pad-added": (arg0: number, arg1: Farstream.Stream, arg2: Gst.Pad, arg3: Farstream.Codec) => void;
            /**
             * This signal is emitted when the connection managers requests that the
             * application prepares itself to start receiving data again from certain
             * handles.
             * 
             * This signal will only be emitted after the {@link TelepathyFarstream.Content.SignalSignatures.stop_receiving | TelepathyFarstream.Content::stop-receiving}
             * signal has succeeded. It will not be emitted right after
             *  {@link TelepathyFarstream.Content.SignalSignatures.src_pad_added | TelepathyFarstream.Content::src-pad-added}.
             * @signal
             * @run-last
             */
            "start-receiving": (arg0: null, arg1: number) => (boolean | void);
            /**
             * This signal is emitted when the connection manager ask to send media.
             * For example, this can be used to open a camera, start recording from a
             * microphone or play back a file. The application should start
             * sending data on the {@link TelepathyFarstream.Content.sink_pad}
             * @signal
             * @run-last
             */
            "start-sending": () => (boolean | void);
            /**
             * This signal is emitted when the connection manager wants to tell the
             * application that it is now allowed to stop receiving.
             * @signal
             * @run-last
             */
            "stop-receiving": (arg0: null, arg1: number) => void;
            /**
             * This signal is emitted when the connection manager ask to stop
             * sending media
             * @signal
             * @run-last
             */
            "stop-sending": () => void;
            "notify::fs-conference": (pspec: GObject.ParamSpec) => void;
            "notify::fs-session": (pspec: GObject.ParamSpec) => void;
            "notify::media-type": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
            "notify::sink-pad": (pspec: GObject.ParamSpec) => void;
            "notify::tf-channel": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fs_conference: Farstream.Conference;
            fsConference: Farstream.Conference;
            fs_session: Farstream.Session;
            fsSession: Farstream.Session;
            media_type: Farstream.MediaType;
            mediaType: Farstream.MediaType;
            object_path: string;
            objectPath: string;
            sink_pad: Gst.Pad;
            sinkPad: Gst.Pad;
            tf_channel: Channel;
            tfChannel: Channel;
        }
    }

    /**
     * This structure is private, this class is not subclassable.
     * @gir-type Class
     */
    abstract class Content extends GObject.Object {
        static $gtype: GObject.GType<Content>;

        // Properties
        /**
         * @read-only
         */
        get fs_conference(): Farstream.Conference;

        /**
         * @read-only
         */
        get fsConference(): Farstream.Conference;

        /**
         * @read-only
         */
        get fs_session(): Farstream.Session;

        /**
         * @read-only
         */
        get fsSession(): Farstream.Session;

        /**
         * @read-only
         */
        get media_type(): Farstream.MediaType;

        /**
         * @read-only
         */
        get mediaType(): Farstream.MediaType;

        /**
         * @read-only
         */
        get object_path(): string;

        /**
         * @read-only
         */
        get objectPath(): string;

        /**
         * @read-only
         */
        get sink_pad(): Gst.Pad;

        /**
         * @read-only
         */
        get sinkPad(): Gst.Pad;

        /**
         * @read-only
         */
        get tf_channel(): Channel;

        /**
         * @read-only
         */
        get tfChannel(): Channel;

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
        /** @signal */
        connect<K extends keyof Content.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Content.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Content.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Content.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Content.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Content.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Send a fatal streaming error to the Content to the CM, the effect is most
         * likely that the content will be removed.
         * @param message error Message
         */
        error(message: string): void;

        /**
         * Provides a iterator that can be used to iterate through all of the src
         * pads that are are used to receive from a group of Telepathy handles.
         * @param handles a 0 terminated array of `guint` representing Telepathy handles
         * @param handle_count the numner of handles in `handles`
         * @returns a {@link Gst.Iterator}
         */
        iterate_src_pads(handles: number, handle_count: number): Gst.Iterator;

        /**
         * Informs the Connection Manager that receiving has failed for this
         * content. This is a transient error and it may or not not end the Content
         * and the call.
         * 
         * If handles are not specific, it assumes that it is valid for all handles.
         * @param handles an array of `guint` representing Telepathy handles, may be `null`
         * @param handle_count the numner of handles in `handles`
         * @param message The error message
         */
        receiving_failed(handles: number, handle_count: number, message: string): void;

        /**
         * Informs the Connection Manager that sending has failed for this
         * content. This is a transient error and it may or not not end the Content
         * and the call.
         * @param message The error message
         */
        sending_failed(message: string): void;
    }


    /**
     * @gir-type Alias
     */
    type ChannelClass = typeof Channel;

    /**
     * @gir-type Struct
     */
    abstract class ChannelPrivate {
        static $gtype: GObject.GType<ChannelPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ContentClass = typeof Content;

    /**
     * @gir-type Struct
     */
    abstract class ContentPrivate {
        static $gtype: GObject.GType<ContentPrivate>;
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

export default TelepathyFarstream;

// END
