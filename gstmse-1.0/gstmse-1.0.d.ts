
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


    /**
     * @gir-type Enum
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
        constructor(options: { message: string, code: number });

        // Static methods
        /**
         * Any error type that can be reported by the Media Source API.
         */
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
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
             * @run-last
             */
            "on-source-close": () => void;
            /**
             * Emitted when `self` has ended, normally through
             * `gst_media_source_end_of_stream()`.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-onsourceended)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-source-ended": () => void;
            /**
             * Emitted when `self` has been opened.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-onsourceopen)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-source-open": () => void;
            "notify::active-source-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
            "notify::source-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            active_source_buffers: SourceBufferList;
            activeSourceBuffers: SourceBufferList;
            duration: (bigint | number);
            position: (bigint | number);
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
         * @read-only
         */
        get active_source_buffers(): SourceBufferList;

        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source that
         * is considered active
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
         * @since 1.24
         * @read-only
         */
        get activeSourceBuffers(): SourceBufferList;

        /**
         * The Duration of the Media Source as a {@link Gst.ClockTime}
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
         * @since 1.24
         * @default 18446744073709551615
         */
        get duration(): number;
        set duration(val: (bigint | number));

        /**
         * The position of the player consuming from the Media Source
         * @since 1.24
         * @default 18446744073709551615
         */
        get position(): number;
        set position(val: (bigint | number));

        /**
         * The Ready State of the Media Source
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
         * @since 1.24
         * @read-only
         * @default GstMse.MediaSourceReadyState.CLOSED
         */
        get ready_state(): MediaSourceReadyState;

        /**
         * The Ready State of the Media Source
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
         * @since 1.24
         * @read-only
         * @default GstMse.MediaSourceReadyState.CLOSED
         */
        get readyState(): MediaSourceReadyState;

        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
         * @since 1.24
         * @read-only
         */
        get source_buffers(): SourceBufferList;

        /**
         * A {@link GstMse.SourceBufferList} of every {@link GstMse.SourceBuffer} in this Media Source
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
         * @since 1.24
         * @read-only
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

        static ["new"](): MediaSource;

        // Signals
        /** @signal */
        connect<K extends keyof MediaSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediaSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediaSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        end_of_stream(eos_error: MediaSourceEOSError): boolean;

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
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::n-audio": (pspec: GObject.ParamSpec) => void;
            "notify::n-text": (pspec: GObject.ParamSpec) => void;
            "notify::n-video": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.URIHandler.ConstructorProps {
            duration: (bigint | number);
            n_audio: number;
            nAudio: number;
            n_text: number;
            nText: number;
            n_video: number;
            nVideo: number;
            position: (bigint | number);
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
         * @default 18446744073709551615
         */
        get duration(): number;
        set duration(val: (bigint | number));

        /**
         * The number of audio tracks in the Media Source
         * @since 1.24
         * @read-only
         * @default 0
         */
        get n_audio(): number;

        /**
         * The number of audio tracks in the Media Source
         * @since 1.24
         * @read-only
         * @default 0
         */
        get nAudio(): number;

        /**
         * The number of text tracks in the Media Source
         * @since 1.24
         * @read-only
         * @default 0
         */
        get n_text(): number;

        /**
         * The number of text tracks in the Media Source
         * @since 1.24
         * @read-only
         * @default 0
         */
        get nText(): number;

        /**
         * The number of video tracks in the Media Source
         * @since 1.24
         * @read-only
         * @default 0
         */
        get n_video(): number;

        /**
         * The number of video tracks in the Media Source
         * @since 1.24
         * @read-only
         * @default 0
         */
        get nVideo(): number;

        /**
         * The playback position as a {@link Gst.ClockTime}
         * 
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#current-playback-position)
         * @since 1.24
         * @read-only
         * @default 0
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
         * @read-only
         * @default GstMse.MseSrcReadyState.NOTHING
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
         * @read-only
         * @default GstMse.MseSrcReadyState.NOTHING
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
        connect<K extends keyof MseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MseSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        get_protocols(): (string[] | null);

        /**
         * Gets the currently handled URI.
         * @returns the URI currently handled by   the `handler`.  Returns `null` if there are no URI currently   handled. The returned string must be freed with `g_free()` when no   longer needed.
         */
        get_uri(): (string | null);

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
        vfunc_get_uri(): (string | null);

        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @virtual
         */
        vfunc_set_uri(uri: string): boolean;

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
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace MseSrcPad {
        // Signal signatures
        interface SignalSignatures extends Gst.Pad.SignalSignatures {
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Pad.ConstructorProps {

        }
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
        connect<K extends keyof MseSrcPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrcPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MseSrcPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrcPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MseSrcPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MseSrcPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
             * @run-last
             */
            "on-abort": () => void;
            /**
             * Emitted when `self` has encountered an error after a call to
             * `gst_source_buffer_append_buffer()`.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onerror)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-error": () => void;
            /**
             * Emitted when `self` has successfully processed data after a call to
             * `gst_source_buffer_append_buffer()`.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onupdate)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-update": () => void;
            /**
             * Emitted when `self` is no longer in the updating state after a call to
             * `gst_source_buffer_append_buffer()`. This can happen after a successful or
             * unsuccessful append.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onupdateend)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-update-end": () => void;
            /**
             * Emitted when `self` has begun to process data after a call to
             * `gst_source_buffer_append_buffer()`.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-onupdatestart)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-update-start": () => void;
            "notify::append-mode": (pspec: GObject.ParamSpec) => void;
            "notify::append-window-end": (pspec: GObject.ParamSpec) => void;
            "notify::append-window-start": (pspec: GObject.ParamSpec) => void;
            "notify::buffered": (pspec: GObject.ParamSpec) => void;
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp-offset": (pspec: GObject.ParamSpec) => void;
            "notify::updating": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            append_mode: SourceBufferAppendMode;
            appendMode: SourceBufferAppendMode;
            append_window_end: (bigint | number);
            appendWindowEnd: (bigint | number);
            append_window_start: (bigint | number);
            appendWindowStart: (bigint | number);
            buffered: any[];
            content_type: string;
            contentType: string;
            timestamp_offset: (bigint | number);
            timestampOffset: (bigint | number);
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
         * @default GstMse.SourceBufferAppendMode.SEGMENTS
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
         * @default GstMse.SourceBufferAppendMode.SEGMENTS
         */
        get appendMode(): SourceBufferAppendMode;
        set appendMode(val: SourceBufferAppendMode);

        /**
         * Any segments processed which have a start time greater than this value will
         * be ignored by this Source Buffer.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
         * @since 1.24
         * @read-only
         * @default 18446744073709551615
         */
        get append_window_end(): number;

        /**
         * Any segments processed which have a start time greater than this value will
         * be ignored by this Source Buffer.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
         * @since 1.24
         * @read-only
         * @default 18446744073709551615
         */
        get appendWindowEnd(): number;

        /**
         * Any segments processed which end before this value will be ignored by this
         * Source Buffer.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
         * @since 1.24
         * @read-only
         * @default 0
         */
        get append_window_start(): number;

        /**
         * Any segments processed which end before this value will be ignored by this
         * Source Buffer.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
         * @since 1.24
         * @read-only
         * @default 0
         */
        get appendWindowStart(): number;

        /**
         * The set of Time Intervals that have been loaded into the current Source
         * Buffer
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-buffered)
         * @since 1.24
         * @read-only
         */
        get buffered(): any[];

        /**
         * The MIME content-type of the data stream
         * @since 1.24
         * @default null
         */
        get content_type(): string;
        set content_type(val: string);

        /**
         * The MIME content-type of the data stream
         * @since 1.24
         * @default null
         */
        get contentType(): string;
        set contentType(val: string);

        /**
         * The next media segment appended to the current Source Buffer will have its
         * start timestamp increased by this amount.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
         * @since 1.24
         * @default 0
         */
        get timestamp_offset(): number;
        set timestamp_offset(val: (bigint | number));

        /**
         * The next media segment appended to the current Source Buffer will have its
         * start timestamp increased by this amount.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
         * @since 1.24
         * @default 0
         */
        get timestampOffset(): number;
        set timestampOffset(val: (bigint | number));

        /**
         * Whether the current source buffer is still asynchronously processing
         * previously issued commands.
         * 
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-updating)
         * @since 1.24
         * @read-only
         * @default false
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
        connect<K extends keyof SourceBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SourceBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SourceBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SourceBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        set_append_mode(mode: SourceBufferAppendMode): boolean;

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
             * @run-last
             */
            "on-sourcebuffer-added": () => void;
            /**
             * Emitted when a {@link GstMse.SourceBuffer} has been removed from this list.
             * 
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-onremovesourcebuffer)
             * @signal
             * @since 1.24
             * @run-last
             */
            "on-sourcebuffer-removed": () => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            length: (bigint | number);
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
         * @read-only
         * @default 0
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
        connect<K extends keyof SourceBufferList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBufferList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SourceBufferList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBufferList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SourceBufferList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SourceBufferList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        index(index: number): (SourceBuffer | null);
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
