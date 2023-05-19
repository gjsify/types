
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './telepathyfarstream-0.6-ambient.d.ts';
import './telepathyfarstream-0.6-import.d.ts';
/**
 * TelepathyFarstream-0.6
 */

import type TelepathyGLib from '@girs/telepathyglib-0.12';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gst from '@girs/gst-1.0';
import type GModule from '@girs/gmodule-2.0';
import type Farstream from '@girs/farstream-0.2';

export namespace TelepathyFarstream {

module Channel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        ($obj: Channel): void
    }

    /**
     * Signal callback interface for `content-added`
     */
    interface ContentAddedSignalCallback {
        ($obj: Channel, content: Content): void
    }

    /**
     * Signal callback interface for `content-removed`
     */
    interface ContentRemovedSignalCallback {
        ($obj: Channel, content: Content): void
    }

    /**
     * Signal callback interface for `fs-conference-added`
     */
    interface FsConferenceAddedSignalCallback {
        ($obj: Channel, conf: Farstream.Conference): void
    }

    /**
     * Signal callback interface for `fs-conference-removed`
     */
    interface FsConferenceRemovedSignalCallback {
        ($obj: Channel, conf: Farstream.Conference): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

        channel?: TelepathyGLib.Channel | null
    }

}

interface Channel extends Gio.AsyncInitable {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    readonly channel: TelepathyGLib.Channel
    readonly fs_conferences: any[]
    readonly object_path: string | null

    // Owm methods of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    /**
     * You must call this function on call messages received on the async bus.
     * #GstMessages are not modified.
     * @param message A #GstMessage received from the bus
     * @returns %TRUE if the message has been handled, %FALSE otherwise
     */
    bus_message(message: Gst.Message): boolean

    // Own signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    connect(sigName: "closed", callback: Channel.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Channel.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): number
    connect_after(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): number
    emit(sigName: "content-added", content: Content, ...args: any[]): void
    connect(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): number
    connect_after(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): number
    emit(sigName: "content-removed", content: Content, ...args: any[]): void
    connect(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): number
    connect_after(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): number
    emit(sigName: "fs-conference-added", conf: Farstream.Conference, ...args: any[]): void
    connect(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): number
    connect_after(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): number
    emit(sigName: "fs-conference-removed", conf: Farstream.Conference, ...args: any[]): void

    // Class property signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    connect(sigName: "notify::channel", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::fs-conferences", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-conferences", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fs-conferences", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members of the object are private
 * @class 
 */
class Channel extends GObject.Object {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    static name: string
    static $gtype: GObject.GType<Channel>

    // Constructors of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    constructor(config?: Channel.ConstructorProperties) 
    /**
     * Completes the construction of a TfChannel.
     * @constructor 
     * @param object The #GObject
     * @param result a #GAsyncResult
     * @returns a #TfChannel or %NULL if there was an error
     */
    static new_finish(object: GObject.Object, result: Gio.AsyncResult): Channel
    _init(config?: Channel.ConstructorProperties): void
    /**
     * Creates a new #TfChannel from an existing channel proxy, the new
     * TfChannel object will be return in the async callback.
     * 
     * The user must call tf_channel_new_finish() in the callback
     * to get the finished object.
     * @param channel_proxy a #TpChannel proxy
     * @param callback a #GAsyncReadyCallback to call when the channel is ready
     */
    static new_async(channel_proxy: TelepathyGLib.Channel, callback: Gio.AsyncReadyCallback<Channel> | null): void
}

module Content {

    // Signal callback interfaces

    /**
     * Signal callback interface for `restart-source`
     */
    interface RestartSourceSignalCallback {
        ($obj: Content): void
    }

    /**
     * Signal callback interface for `src-pad-added`
     */
    interface SrcPadAddedSignalCallback {
        ($obj: Content, handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void
    }

    /**
     * Signal callback interface for `start-receiving`
     */
    interface StartReceivingSignalCallback {
        ($obj: Content, handles: any, handle_count: number): boolean
    }

    /**
     * Signal callback interface for `start-sending`
     */
    interface StartSendingSignalCallback {
        ($obj: Content): boolean
    }

    /**
     * Signal callback interface for `stop-receiving`
     */
    interface StopReceivingSignalCallback {
        ($obj: Content, handles: any, handle_count: number): void
    }

    /**
     * Signal callback interface for `stop-sending`
     */
    interface StopSendingSignalCallback {
        ($obj: Content): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Content {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Content

    readonly fs_conference: Farstream.Conference
    readonly fs_session: Farstream.Session
    readonly media_type: Farstream.MediaType
    readonly object_path: string | null
    readonly sink_pad: Gst.Pad
    readonly tf_channel: Channel

    // Owm methods of TelepathyFarstream-0.6.TelepathyFarstream.Content

    /**
     * Send a fatal streaming error to the Content to the CM, the effect is most
     * likely that the content will be removed.
     * @param message error Message
     */
    error(message: string | null): void
    /**
     * Provides a iterator that can be used to iterate through all of the src
     * pads that are are used to receive from a group of Telepathy handles.
     * @param handles a 0 terminated array of #guint representing Telepathy handles
     * @param handle_count the numner of handles in `handles`
     * @returns a #GstIterator
     */
    iterate_src_pads(handles: number, handle_count: number): Gst.Iterator
    /**
     * Informs the Connection Manager that receiving has failed for this
     * content. This is a transient error and it may or not not end the Content
     * and the call.
     * 
     * If handles are not specific, it assumes that it is valid for all handles.
     * @param handles an array of #guint representing Telepathy handles, may be %NULL
     * @param handle_count the numner of handles in `handles`
     * @param message The error message
     */
    receiving_failed(handles: number, handle_count: number, message: string | null): void
    /**
     * Informs the Connection Manager that sending has failed for this
     * content. This is a transient error and it may or not not end the Content
     * and the call.
     * @param message The error message
     */
    sending_failed(message: string | null): void

    // Own signals of TelepathyFarstream-0.6.TelepathyFarstream.Content

    connect(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): number
    connect_after(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): number
    emit(sigName: "restart-source", ...args: any[]): void
    connect(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): number
    connect_after(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): number
    emit(sigName: "src-pad-added", handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec, ...args: any[]): void
    connect(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): number
    connect_after(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): number
    emit(sigName: "start-receiving", handles: any, handle_count: number, ...args: any[]): void
    connect(sigName: "start-sending", callback: Content.StartSendingSignalCallback): number
    connect_after(sigName: "start-sending", callback: Content.StartSendingSignalCallback): number
    emit(sigName: "start-sending", ...args: any[]): void
    connect(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): number
    connect_after(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): number
    emit(sigName: "stop-receiving", handles: any, handle_count: number, ...args: any[]): void
    connect(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): number
    connect_after(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): number
    emit(sigName: "stop-sending", ...args: any[]): void

    // Class property signals of TelepathyFarstream-0.6.TelepathyFarstream.Content

    connect(sigName: "notify::fs-conference", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-conference", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fs-conference", ...args: any[]): void
    connect(sigName: "notify::fs-session", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-session", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fs-session", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sink-pad", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink-pad", ...args: any[]): void
    connect(sigName: "notify::tf-channel", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tf-channel", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tf-channel", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This structure is private, this class is not subclassable.
 * @class 
 */
class Content extends GObject.Object {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Content

    static name: string
    static $gtype: GObject.GType<Content>

    // Constructors of TelepathyFarstream-0.6.TelepathyFarstream.Content

    constructor(config?: Content.ConstructorProperties) 
    _init(config?: Content.ConstructorProperties): void
}

interface ChannelClass {
}

/**
 * There are no overridable functions
 * @record 
 */
abstract class ChannelClass {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ChannelClass

    static name: string
}

interface ChannelPrivate {
}

class ChannelPrivate {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ChannelPrivate

    static name: string
}

interface ContentClass {
}

/**
 * This structure is private, this class is not subclassable.
 * @record 
 */
abstract class ContentClass {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ContentClass

    static name: string
}

interface ContentPrivate {
}

class ContentPrivate {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ContentPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default TelepathyFarstream;
// END