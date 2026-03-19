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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstMse {
    /**
     * GstMse-1.0
     */

    export namespace MediaSourceEOSError {
        export const $gtype: GObject.GType<MediaSourceEOSError>;
    }

    /**
     * Reasons for ending a {@link GstMse.MediaSource} using `gst_media_source_end_of_stream()`.
     *
     * [Specification](https://www.w3.org/TR/media-source-2/#dom-endofstreamerror)
     * @gir-type Enum
     * @since 1.24
     */
    enum MediaSourceEOSError {
        /**
         * End the stream successfully
         */
        NONE,
        /**
         * End the stream due to a networking error
         */
        NETWORK,
        /**
         * End the stream due to a decoding error
         */
        DECODE,
    }

    /**
     * Any error that can occur within {@link GstMse.MediaSource} or {@link GstMse.SourceBuffer} APIs.
     * These values correspond directly to those in the Web IDL specification.
     *
     * [Specification](https://webidl.spec.whatwg.org/#idl-DOMException-error-names)
     * @gir-type Struct
     */
    class MediaSourceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static INVALID_STATE: number;
        static TYPE: number;
        static NOT_SUPPORTED: number;
        static NOT_FOUND: number;
        static QUOTA_EXCEEDED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Any error type that can be reported by the Media Source API.
         */
        static quark(): GLib.Quark;
    }

    export namespace MediaSourceReadyState {
        export const $gtype: GObject.GType<MediaSourceReadyState>;
    }

    /**
     * Describes the possible states of the Media Source.
     *
     * [Specification](https://www.w3.org/TR/media-source-2/#dom-readystate)
     * @gir-type Enum
     * @since 1.24
     */
    enum MediaSourceReadyState {
        /**
         * The {@link GstMse.MediaSource} is not connected to
         * any playback element.
         */
        CLOSED,
        /**
         * The {@link GstMse.MediaSource} is connected to a
         * playback element and ready to append data to its {@link GstMse.SourceBuffer} (s).
         */
        OPEN,
        /**
         * `gst_media_source_end_of_stream()` has
         * been called on the current {@link GstMse.MediaSource}
         */
        ENDED,
    }

    export namespace MseSrcReadyState {
        export const $gtype: GObject.GType<MseSrcReadyState>;
    }

    /**
     * Describes how much information a {@link GstMse.MseSrc} has about the media it is playing
     * back at the current playback {@link GstMse.MseSrc.position}. This type corresponds
     * directly to the ready state of a HTML Media Element and is a separate concept
     * from {@link GstMse.MediaSourceReadyState}.
     *
     * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
     * @gir-type Enum
     * @since 1.24
     */
    enum MseSrcReadyState {
        /**
         * No information is available about the
         * stream
         */
        NOTHING,
        /**
         * The duration is available and video
         * dimensions are available if the stream contains video
         */
        METADATA,
        /**
         * The current playback position can
         * be presented but future information is not available
         */
        CURRENT_DATA,
        /**
         * There is data for the current
         * position and some amount in the future and any text tracks are ready.
         */
        FUTURE_DATA,
        /**
         * Either there is enough data to
         * play the stream through at the current playback and input rate or the input
         * buffer is full.
         */
        ENOUGH_DATA,
    }

    export namespace SourceBufferAppendMode {
        export const $gtype: GObject.GType<SourceBufferAppendMode>;
    }

    /**
     * [Specification](https://www.w3.org/TR/media-source-2/#dom-appendmode)
     * @gir-type Enum
     * @since 1.24
     */
    enum SourceBufferAppendMode {
        SEGMENTS,
        SEQUENCE,
    }

    /**
     * Any error type that can be reported by the Media Source API.
     * @since 1.24
     */
    function media_source_error_quark(): GLib.Quark;
    namespace MediaSource {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * @signal
             */
            'on-source-close': () => void;
            /**
             * Emitted when `self` has ended, normally through
             * `gst_media_source_end_of_stream()`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-onsourceended)
             * @signal
             * @since 1.24
             */
            'on-source-ended': () => void;
            /**
             * Emitted when `self` has been opened.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-onsourceopen)
             * @signal
             * @since 1.24
             */
            'on-source-open': () => void;
            'notify::active-source-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::ready-state': (pspec: GObject.ParamSpec) => void;
            'notify::source-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            active_source_buffers: SourceBufferList;
            activeSourceBuffers: SourceBufferList;
            duration: number;
            position: number;
            ready_state: MediaSourceReadyState;
            readyState: MediaSourceReadyState;
            source_buffers: SourceBufferList;
            sourceBuffers: SourceBufferList;
        }
    }

    /**
     * {@link GstMse.MediaSource} is the entry point into the W3C Media Source API. It offers
     * functionality similar to `GstAppSrc` for client-side web or JavaScript
     * applications decoupling the source of media from its processing and playback.
     *
     * To interact with a Media Source, connect it to a {@link GstMse.MseSrc} that is in some
     * {@link Gst.Pipeline} using `gst_media_source_attach()`. Then create at least one
     * {@link GstMse.SourceBuffer} using `gst_media_source_add_source_buffer()`. Finally, feed
     * some media data to the Source Buffer(s) using
     * `gst_source_buffer_append_buffer()` and play the pipeline.
     * @gir-type Class
     * @since 1.24
     */
    class MediaSource extends Gst.Object {
        static $gtype: GObject.GType<MediaSource>;

        // Properties

        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source that
         * is considered active
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
         * @since 1.24
         */
        get active_source_buffers(): SourceBufferList;
        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source that
         * is considered active
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
         * @since 1.24
         */
        get activeSourceBuffers(): SourceBufferList;
        /**
         * The Duration of the Media Source as a {@link Gst.ClockTime}
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
         * @since 1.24
         */
        get duration(): number;
        set duration(val: number);
        /**
         * The position of the player consuming from the Media Source
         * @since 1.24
         */
        get position(): number;
        set position(val: number);
        /**
         * The Ready State of the Media Source
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
         * @since 1.24
         */
        get ready_state(): MediaSourceReadyState;
        /**
         * The Ready State of the Media Source
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
         * @since 1.24
         */
        get readyState(): MediaSourceReadyState;
        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
         * @since 1.24
         */
        get source_buffers(): SourceBufferList;
        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
         * @since 1.24
         */
        get sourceBuffers(): SourceBufferList;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaSource;

        // Signals

        /** @signal */
        connect<K extends keyof MediaSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Determines whether the current Media Source configuration can process media
         * of the supplied `type`.
         * @param type A MIME type value
         */
        static is_type_supported(type: string): boolean;

        // Methods

        /**
         * Add a {@link GstMse.SourceBuffer} to this {@link GstMse.MediaSource} of the specified media type.
         * The Media Source must be in the {@link GstMse.MediaSourceReadyState} {@link GstMse.MediaSourceReadyState.OPEN}.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-addsourcebuffer)
         * @param type A MIME type describing the format of the incoming media
         * @returns a new {@link GstMse.SourceBuffer} instance on success, otherwise `NULL`
         */
        add_source_buffer(type: string): SourceBuffer;
        /**
         * Associates `self` with `element`.
         * Normally, the Element will be part of a {@link Gst.Pipeline} that plays back the data
         * submitted to the Media Source's Source Buffers.
         *
         * {@link GstMse.MseSrc} is a special source element that is designed to consume media from
         * a {@link GstMse.MediaSource}.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dfn-attaching-to-a-media-element)
         * @param element {@link GstMse.MseSrc} source Element
         */
        attach(element: MseSrc): void;
        /**
         * Clear the live seekable range for `self`. This will inform the component
         * playing this Media Source that there is no seekable time range.
         *
         * If the ready state is not {@link GstMse.MediaSourceReadyState.OPEN}, it will fail
         * and set an error.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-clearliveseekablerange)
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        clear_live_seekable_range(): boolean;
        /**
         * Detaches `self` from any {@link GstMse.MseSrc} element that it may be associated with.
         */
        detach(): void;
        /**
         * Mark `self` as reaching the end of stream, disallowing new data inputs.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-endofstream)
         * @param eos_error The error type, if any
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        end_of_stream(eos_error: MediaSourceEOSError | null): boolean;
        /**
         * Gets a {@link GstMse.SourceBufferList} containing all the Source Buffers currently
         * associated with this Media Source that are considered "active."
         * For a Source Buffer to be considered active, either its video track is
         * selected, its audio track is enabled, or its text track is visible or hidden.
         * This object will reflect any future changes to the parent Media Source as
         * well.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
         * @returns a new {@link GstMse.SourceBufferList} instance
         */
        get_active_source_buffers(): SourceBufferList;
        /**
         * Gets the current duration of `self`.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
         * @returns the current duration as a {@link Gst.ClockTime}
         */
        get_duration(): Gst.ClockTime;
        /**
         * Get the live seekable range of `self`. Will fill in the supplied `range` with
         * the current live seekable range.
         */
        get_live_seekable_range(): MediaSourceRange;
        /**
         * Gets the current playback position of the Media Source.
         * @returns the current playback position as a {@link Gst.ClockTime}
         */
        get_position(): Gst.ClockTime;
        /**
         * Gets the current Ready State of the Media Source.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
         * @returns the current {@link GstMse.MediaSourceReadyState} value
         */
        get_ready_state(): MediaSourceReadyState;
        /**
         * Gets a {@link GstMse.SourceBufferList} containing all the Source Buffers currently
         * associated with this Media Source. This object will reflect any future
         * changes to the parent Media Source as well.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
         * @returns a {@link GstMse.SourceBufferList} instance
         */
        get_source_buffers(): SourceBufferList;
        /**
         * Remove `buffer` from `self`.
         *
         * `buffer` must have been created as a child of `self` and `self` must be in the
         * {@link GstMse.MediaSourceReadyState} {@link GstMse.MediaSourceReadyState.OPEN}.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-removesourcebuffer)
         * @param buffer {@link GstMse.SourceBuffer} instance
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        remove_source_buffer(buffer: SourceBuffer): boolean;
        /**
         * Sets the duration of `self`.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
         * @param duration The new duration to apply to `self`.
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        set_duration(duration: Gst.ClockTime): boolean;
        /**
         * Set the live seekable range for `self`. This range informs the component
         * playing this Media Source what it can allow the user to seek through.
         *
         * If the ready state is not {@link GstMse.MediaSourceReadyState.OPEN}, or the supplied
         * `start` time is later than `end` it will fail and set an error.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-setliveseekablerange)
         * @param start The earliest point in the stream considered seekable
         * @param end The latest point in the stream considered seekable
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        set_live_seekable_range(start: Gst.ClockTime, end: Gst.ClockTime): boolean;
    }

    namespace MseSrc {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::n-audio': (pspec: GObject.ParamSpec) => void;
            'notify::n-text': (pspec: GObject.ParamSpec) => void;
            'notify::n-video': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::ready-state': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.URIHandler.ConstructorProps {
            duration: number;
            n_audio: number;
            nAudio: number;
            n_text: number;
            nText: number;
            n_video: number;
            nVideo: number;
            position: number;
            ready_state: MseSrcReadyState;
            readyState: MseSrcReadyState;
        }
    }

    /**
     * {@link GstMse.MseSrc} is a source Element that interacts with a {@link GstMse.MediaSource} to
     * consume {@link Gst.Sample}<!-- -->s processed by the Media Source and supplies them
     * to the containing {@link Gst.Pipeline}. In the perspective of the Media Source API,
     * this element fulfills the basis of the Media Element's role relating to
     * working with a Media Source. The remaining responsibilities are meant to be
     * fulfilled by the application and `GstPlay` can be used to satisfy many of
     * them.
     *
     * Once added to a Pipeline, this element should be attached to a Media Source
     * using `gst_media_source_attach()`.
     * @gir-type Class
     * @since 1.24
     */
    class MseSrc extends Gst.Element implements Gst.URIHandler {
        static $gtype: GObject.GType<MseSrc>;

        // Properties

        /**
         * The duration of the stream as a {@link Gst.ClockTime}
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#dom-media-duration)
         * @since 1.24
         */
        get duration(): number;
        set duration(val: number);
        /**
         * The number of audio tracks in the Media Source
         * @since 1.24
         */
        get n_audio(): number;
        /**
         * The number of audio tracks in the Media Source
         * @since 1.24
         */
        get nAudio(): number;
        /**
         * The number of text tracks in the Media Source
         * @since 1.24
         */
        get n_text(): number;
        /**
         * The number of text tracks in the Media Source
         * @since 1.24
         */
        get nText(): number;
        /**
         * The number of video tracks in the Media Source
         * @since 1.24
         */
        get n_video(): number;
        /**
         * The number of video tracks in the Media Source
         * @since 1.24
         */
        get nVideo(): number;
        /**
         * The playback position as a {@link Gst.ClockTime}
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#current-playback-position)
         * @since 1.24
         */
        get position(): number;
        /**
         * The Ready State of this element, describing to what level it can supply
         * content for the current {@link GstMse.MseSrc.position}. This is a separate concept
         * from {@link GstMse.MediaSource.ready_state}: and corresponds to the HTML Media
         * Element's Ready State.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
         * @since 1.24
         */
        get ready_state(): MseSrcReadyState;
        /**
         * The Ready State of this element, describing to what level it can supply
         * content for the current {@link GstMse.MseSrc.position}. This is a separate concept
         * from {@link GstMse.MediaSource.ready_state}: and corresponds to the HTML Media
         * Element's Ready State.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
         * @since 1.24
         */
        get readyState(): MseSrcReadyState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MseSrc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MseSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MseSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MseSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MseSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the duration of `self`.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#dom-media-duration)
         * @returns The duration of this stream as a {@link Gst.ClockTime}
         */
        get_duration(): Gst.ClockTime;
        /**
         * @returns the number of audio tracks available from this source
         */
        get_n_audio(): number;
        /**
         * @returns the number of text tracks available from this source
         */
        get_n_text(): number;
        /**
         * @returns the number of video tracks available from this source
         */
        get_n_video(): number;
        /**
         * Gets the current playback position of `self`.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#current-playback-position)
         * @returns The playback position of this Element as a {@link Gst.ClockTime}
         */
        get_position(): Gst.ClockTime;
        /**
         * The Ready State of `self`, describing to what level it can supply content for
         * the current {@link GstMse.MseSrc.position}. This is a separate concept from
         * {@link GstMse.MediaSource.ready_state}: and corresponds to the HTML Media Element's
         * Ready State.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
         * @returns the current {@link GstMse.MseSrcReadyState}
         */
        get_ready_state(): MseSrcReadyState;
        /**
         * Gets the list of protocols supported by `handler`. This list may not be
         * modified.
         * @returns the     supported protocols.  Returns `null` if the `handler` isn't     implemented properly, or the `handler` doesn't support any     protocols.
         */
        get_protocols(): string[] | null;
        /**
         * Gets the currently handled URI.
         * @returns the URI currently handled by   the `handler`.  Returns `null` if there are no URI currently   handled. The returned string must be freed with `g_free()` when no   longer needed.
         */
        get_uri(): string | null;
        /**
         * Gets the type of the given URI handler
         * @returns the {@link Gst.URIType} of the URI handler. Returns #GST_URI_UNKNOWN if the `handler` isn't implemented correctly.
         */
        get_uri_type(): Gst.URIType;
        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @returns `true` if the URI was set successfully, else `false`.
         */
        set_uri(uri: string): boolean;
        /**
         * Gets the currently handled URI.
         * @virtual
         */
        vfunc_get_uri(): string | null;
        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @virtual
         */
        vfunc_set_uri(uri: string): boolean;
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
         * a [floating][floating-ref] object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating][floating-ref] reference.
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
         * @param args
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
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

    namespace MseSrcPad {
        // Signal signatures
        interface SignalSignatures extends Gst.Pad.SignalSignatures {
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Pad.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.24
     */
    class MseSrcPad extends Gst.Pad {
        static $gtype: GObject.GType<MseSrcPad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MseSrcPad.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MseSrcPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MseSrcPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MseSrcPad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MseSrcPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MseSrcPad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MseSrcPad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MseSrcPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SourceBuffer {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Emitted when `self` was aborted after a call to `gst_source_buffer_abort()`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onabort)
             * @signal
             * @since 1.24
             */
            'on-abort': () => void;
            /**
             * Emitted when `self` has encountered an error after a call to
             * `gst_source_buffer_append_buffer()`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onerror)
             * @signal
             * @since 1.24
             */
            'on-error': () => void;
            /**
             * Emitted when `self` has successfully processed data after a call to
             * `gst_source_buffer_append_buffer()`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onupdate)
             * @signal
             * @since 1.24
             */
            'on-update': () => void;
            /**
             * Emitted when `self` is no longer in the updating state after a call to
             * `gst_source_buffer_append_buffer()`. This can happen after a successful or
             * unsuccessful append.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onupdateend)
             * @signal
             * @since 1.24
             */
            'on-update-end': () => void;
            /**
             * Emitted when `self` has begun to process data after a call to
             * `gst_source_buffer_append_buffer()`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onupdatestart)
             * @signal
             * @since 1.24
             */
            'on-update-start': () => void;
            'notify::append-mode': (pspec: GObject.ParamSpec) => void;
            'notify::append-window-end': (pspec: GObject.ParamSpec) => void;
            'notify::append-window-start': (pspec: GObject.ParamSpec) => void;
            'notify::buffered': (pspec: GObject.ParamSpec) => void;
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp-offset': (pspec: GObject.ParamSpec) => void;
            'notify::updating': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            append_mode: SourceBufferAppendMode;
            appendMode: SourceBufferAppendMode;
            append_window_end: number;
            appendWindowEnd: number;
            append_window_start: number;
            appendWindowStart: number;
            buffered: any[];
            content_type: string;
            contentType: string;
            timestamp_offset: number;
            timestampOffset: number;
            updating: boolean;
        }
    }

    /**
     * The Source Buffer is the primary means of data flow between an application
     * and the Media Source API. It represents a single timeline of media,
     * containing some combination of audio, video, and text tracks.
     * An application is responsible for feeding raw data into the Source Buffer
     * using `gst_source_buffer_append_buffer()` and the Source Buffer will
     * asynchronously process the data into tracks of time-coded multimedia samples.
     *
     * The application as well as the associated playback component can then select
     * to play media from any subset of tracks across all Source Buffers of a Media
     * Source.
     *
     * A few control points are also provided to customize the behavior.
     *
     *  - {@link GstMse.SourceBuffer.append_mode} controls how timestamps of processed samples are
     *  interpreted. They are either inserted in the timeline directly where the
     *  decoded media states they should, or inserted directly after the previously
     *  encountered sample.
     *
     *  - {@link GstMse.SourceBuffer.append_window_start} / {@link GstMse.SourceBuffer.append_window_end}
     *  control the planned time window where media from appended data can be added
     *  to the current timeline. Any samples outside that range may be ignored.
     *
     *  - {@link GstMse.SourceBuffer.timestamp_offset} is added to the start time of any sample
     *  processed.
     * @gir-type Class
     * @since 1.24
     */
    class SourceBuffer extends Gst.Object {
        static $gtype: GObject.GType<SourceBuffer>;

        // Properties

        /**
         * Affects how timestamps of processed media segments are interpreted.
         * In {@link GstMse.SourceBufferAppendMode.SEGMENTS}, the start timestamp of a
         * processed media segment is used directly along with
         * {@link GstMse.SourceBuffer.timestamp_offset} .
         * In {@link GstMse.SourceBufferAppendMode.SEQUENCE}, the timestamp of a
         * processed media segment is ignored and replaced with the end time of the
         * most recently appended segment.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
         * @since 1.24
         */
        get append_mode(): SourceBufferAppendMode;
        set append_mode(val: SourceBufferAppendMode);
        /**
         * Affects how timestamps of processed media segments are interpreted.
         * In {@link GstMse.SourceBufferAppendMode.SEGMENTS}, the start timestamp of a
         * processed media segment is used directly along with
         * {@link GstMse.SourceBuffer.timestamp_offset} .
         * In {@link GstMse.SourceBufferAppendMode.SEQUENCE}, the timestamp of a
         * processed media segment is ignored and replaced with the end time of the
         * most recently appended segment.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
         * @since 1.24
         */
        get appendMode(): SourceBufferAppendMode;
        set appendMode(val: SourceBufferAppendMode);
        /**
         * Any segments processed which have a start time greater than this value will
         * be ignored by this Source Buffer.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
         * @since 1.24
         */
        get append_window_end(): number;
        /**
         * Any segments processed which have a start time greater than this value will
         * be ignored by this Source Buffer.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
         * @since 1.24
         */
        get appendWindowEnd(): number;
        /**
         * Any segments processed which end before this value will be ignored by this
         * Source Buffer.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
         * @since 1.24
         */
        get append_window_start(): number;
        /**
         * Any segments processed which end before this value will be ignored by this
         * Source Buffer.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
         * @since 1.24
         */
        get appendWindowStart(): number;
        /**
         * The set of Time Intervals that have been loaded into the current Source
         * Buffer
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-buffered)
         * @since 1.24
         */
        get buffered(): any[];
        /**
         * The MIME content-type of the data stream
         * @since 1.24
         */
        get content_type(): string;
        set content_type(val: string);
        /**
         * The MIME content-type of the data stream
         * @since 1.24
         */
        get contentType(): string;
        set contentType(val: string);
        /**
         * The next media segment appended to the current Source Buffer will have its
         * start timestamp increased by this amount.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
         * @since 1.24
         */
        get timestamp_offset(): number;
        set timestamp_offset(val: number);
        /**
         * The next media segment appended to the current Source Buffer will have its
         * start timestamp increased by this amount.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
         * @since 1.24
         */
        get timestampOffset(): number;
        set timestampOffset(val: number);
        /**
         * Whether the current source buffer is still asynchronously processing
         * previously issued commands.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-updating)
         * @since 1.24
         */
        get updating(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceBuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SourceBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attempts to end any processing of the currently pending data and reset the
         * media parser.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-abort)
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        abort(): boolean;
        /**
         * Schedules the bytes inside `buf` to be processed by `self`. When it is possible
         * to accept the supplied data, it will be processed asynchronously and fill in
         * the track buffers for playback purposes.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendbuffer)
         * @param buf The media data to append
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        append_buffer(buf: Gst.Buffer): boolean;
        /**
         * Attempts to change the content type of `self` to `type`. Any new data appended
         * to the Source Buffer must be of the supplied `type` afterward.
         * @param type the desired content type
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        change_content_type(type: string): boolean;
        /**
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
         * @returns The current {@link GstMse.SourceBufferAppendMode}
         */
        get_append_mode(): SourceBufferAppendMode;
        /**
         * Returns the current append window end time. Any segment processed that starts
         * after this value will be ignored.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
         * @returns The current Append Window end time as a {@link Gst.ClockTime}
         */
        get_append_window_end(): Gst.ClockTime;
        /**
         * Returns the current append window start time. Any segment processed that ends
         * earlier than this value will be ignored.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
         * @returns The current Append Window start time as a {@link Gst.ClockTime}
         */
        get_append_window_start(): Gst.ClockTime;
        /**
         * Returns a sequence of {@link GstMse.MediaSourceRange} values representing which segments
         * of `self` are buffered in memory.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-buffered)
         * @returns a {@link GLib.Array} of {@link GstMse.MediaSourceRange} values.
         */
        get_buffered(): MediaSourceRange[];
        /**
         * Returns the current content type of `self`.
         * @returns a string representing the content type
         */
        get_content_type(): string;
        /**
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
         * @returns The current timestamp offset as a {@link Gst.ClockTime}
         */
        get_timestamp_offset(): Gst.ClockTime;
        /**
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-updating)
         * @returns Whether `self` is currently adding or removing media content.
         */
        get_updating(): boolean;
        /**
         * Attempts to remove any parsed data between `start` and `end` from `self`.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-remove)
         * @param start The beginning timestamp of data to remove
         * @param end The end timestamp of data to remove
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        remove(start: Gst.ClockTime, end: Gst.ClockTime): boolean;
        /**
         * Changes the Append Mode of `self`. This influences what timestamps will be
         * assigned to media processed by this Source Buffer. In Segment mode, the
         * timestamps in each segment determine the position of each sample after it
         * is processed. In Sequence mode, the timestamp of each processed sample is
         * generated based on the end of the most recently processed segment.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
         * @param mode {@link GstMse.SourceBufferAppendMode} the desired Append Mode
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        set_append_mode(mode: SourceBufferAppendMode | null): boolean;
        /**
         * Modifies the current append window end of `self`. If successful, samples
         * processed after setting this value that start after this point will be
         * ignored.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
         * @param end the append window end
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        set_append_window_end(end: Gst.ClockTime): boolean;
        /**
         * Modifies the current append window start of `self`. If successful, samples
         * processed after setting this value that end before this point will be
         * ignored.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
         * @param start the append window start
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        set_append_window_start(start: Gst.ClockTime): boolean;
        /**
         * Attempt to set the timestamp offset of `self`. Any media processed after this
         * value is set will have this value added to its start time.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
         * @param offset The new timestamp offset
         * @returns `TRUE` on success, `FALSE` otherwise
         */
        set_timestamp_offset(offset: Gst.ClockTime): boolean;
    }

    namespace SourceBufferList {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Emitted when a {@link GstMse.SourceBuffer} has been added to this list.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-onaddsourcebuffer)
             * @signal
             * @since 1.24
             */
            'on-sourcebuffer-added': () => void;
            /**
             * Emitted when a {@link GstMse.SourceBuffer} has been removed from this list.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-onremovesourcebuffer)
             * @signal
             * @since 1.24
             */
            'on-sourcebuffer-removed': () => void;
            'notify::length': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            length: number;
        }
    }

    /**
     * The Source Buffer List is a list of {@link GstMse.SourceBuffer}<!-- -->s that can be
     * indexed numerically and monitored for changes. The list itself cannot be
     * modified through this interface, though the Source Buffers it holds can be
     * modified after retrieval.
     *
     * It is used by {@link GstMse.MediaSource} to provide direct access to its child
     * {@link GstMse.SourceBuffer}<!-- -->s through {@link GstMse.MediaSource.source_buffers} as well as
     * informing clients which of the Source Buffers are active through
     * {@link GstMse.MediaSource.active_source_buffers}.
     * @gir-type Class
     * @since 1.24
     */
    class SourceBufferList extends Gst.Object {
        static $gtype: GObject.GType<SourceBufferList>;

        // Properties

        /**
         * The number of {@link GstMse.SourceBuffer}<!-- -->s contained by this structure
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-length)
         * @since 1.24
         */
        get length(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceBufferList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceBufferList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SourceBufferList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceBufferList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceBufferList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceBufferList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceBufferList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceBufferList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-length)
         * @returns The number of {@link GstMse.SourceBuffer} objects in the list
         */
        get_length(): number;
        /**
         * Retrieves the {@link GstMse.SourceBuffer} at `index` from `self`. If `index` is greater than
         * the highest index in the list, it will return `NULL`.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dfn-sourcebufferlist-getter)
         * @param index index of requested Source Buffer
         * @returns The requested {@link GstMse.SourceBuffer} or `NULL`
         */
        index(index: number): SourceBuffer | null;
    }

    /**
     * @gir-type Alias
     */
    type MediaSourceClass = typeof MediaSource;
    /**
     * A structure describing a simplified version of the TimeRanges concept in the
     * HTML specification, only representing a single `start` and `end` time.
     *
     * [Specification](https://html.spec.whatwg.org/multipage/media.html#timeranges)
     * @gir-type Struct
     * @since 1.24
     */
    class MediaSourceRange {
        static $gtype: GObject.GType<MediaSourceRange>;

        // Fields

        start: Gst.ClockTime;
        end: Gst.ClockTime;

        // Constructors

        constructor(
            properties?: Partial<{
                start: Gst.ClockTime;
                end: Gst.ClockTime;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type MseSrcClass = typeof MseSrc;
    /**
     * @gir-type Alias
     */
    type MseSrcPadClass = typeof MseSrcPad;
    /**
     * @gir-type Alias
     */
    type SourceBufferClass = typeof SourceBuffer;
    /**
     * @gir-type Struct
     * @since 1.24
     */
    class SourceBufferInterval {
        static $gtype: GObject.GType<SourceBufferInterval>;

        // Fields

        start: Gst.ClockTime;
        end: Gst.ClockTime;

        // Constructors

        constructor(
            properties?: Partial<{
                start: Gst.ClockTime;
                end: Gst.ClockTime;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type SourceBufferListClass = typeof SourceBufferList;
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

export default GstMse;

// END
