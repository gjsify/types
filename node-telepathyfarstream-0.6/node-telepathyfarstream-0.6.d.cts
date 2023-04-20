
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
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

export module Channel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `content-added`
     */
    export interface ContentAddedSignalCallback {
        (content: Content): void
    }

    /**
     * Signal callback interface for `content-removed`
     */
    export interface ContentRemovedSignalCallback {
        (content: Content): void
    }

    /**
     * Signal callback interface for `fs-conference-added`
     */
    export interface FsConferenceAddedSignalCallback {
        (conf: Farstream.Conference): void
    }

    /**
     * Signal callback interface for `fs-conference-removed`
     */
    export interface FsConferenceRemovedSignalCallback {
        (conf: Farstream.Conference): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

        channel?: TelepathyGLib.Channel | null
    }

}

export interface Channel extends Gio.AsyncInitable {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    readonly channel: TelepathyGLib.Channel
    readonly fsConferences: any[]
    readonly objectPath: string | null
    __gtype__: number

    // Owm methods of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    /**
     * You must call this function on call messages received on the async bus.
     * #GstMessages are not modified.
     * @param message A #GstMessage received from the bus
     * @returns %TRUE if the message has been handled, %FALSE otherwise
     */
    busMessage(message: Gst.Message): boolean

    // Own signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    connect(sigName: "closed", callback: Channel.ClosedSignalCallback): number
    on(sigName: "closed", callback: Channel.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Channel.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Channel.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): number
    on(sigName: "content-added", callback: Channel.ContentAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-added", callback: Channel.ContentAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "content-added", ...args: any[]): void
    connect(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): number
    on(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "content-removed", ...args: any[]): void
    connect(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): number
    on(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "fs-conference-added", ...args: any[]): void
    connect(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): number
    on(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "fs-conference-removed", ...args: any[]): void

    // Class property signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    connect(sigName: "notify::channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::fs-conferences", callback: (...args: any[]) => void): number
    on(sigName: "notify::fs-conferences", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fs-conferences", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fs-conferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fs-conferences", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members of the object are private
 * @class 
 */
export class Channel extends GObject.Object {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    static name: string

    // Constructors of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    constructor(config?: Channel.ConstructorProperties) 
    /**
     * Completes the construction of a TfChannel.
     * @constructor 
     * @param object The #GObject
     * @param result a #GAsyncResult
     * @returns a #TfChannel or %NULL if there was an error
     */
    static newFinish(object: GObject.Object, result: Gio.AsyncResult): Channel
    _init(config?: Channel.ConstructorProperties): void
    /**
     * Creates a new #TfChannel from an existing channel proxy, the new
     * TfChannel object will be return in the async callback.
     * 
     * The user must call tf_channel_new_finish() in the callback
     * to get the finished object.
     * @param channelProxy a #TpChannel proxy
     * @param callback a #GAsyncReadyCallback to call when the channel is ready
     */
    static newAsync(channelProxy: TelepathyGLib.Channel, callback: Gio.AsyncReadyCallback | null): void
}

export module Content {

    // Signal callback interfaces

    /**
     * Signal callback interface for `restart-source`
     */
    export interface RestartSourceSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `src-pad-added`
     */
    export interface SrcPadAddedSignalCallback {
        (handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void
    }

    /**
     * Signal callback interface for `start-receiving`
     */
    export interface StartReceivingSignalCallback {
        (handles: any, handleCount: number): boolean
    }

    /**
     * Signal callback interface for `start-sending`
     */
    export interface StartSendingSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `stop-receiving`
     */
    export interface StopReceivingSignalCallback {
        (handles: any, handleCount: number): void
    }

    /**
     * Signal callback interface for `stop-sending`
     */
    export interface StopSendingSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Content {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Content

    readonly fsConference: Farstream.Conference
    readonly fsSession: Farstream.Session
    readonly mediaType: Farstream.MediaType
    readonly objectPath: string | null
    readonly sinkPad: Gst.Pad
    readonly tfChannel: Channel
    __gtype__: number

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
     * @param handleCount the numner of handles in `handles`
     * @returns a #GstIterator
     */
    iterateSrcPads(handles: number, handleCount: number): Gst.Iterator
    /**
     * Informs the Connection Manager that receiving has failed for this
     * content. This is a transient error and it may or not not end the Content
     * and the call.
     * 
     * If handles are not specific, it assumes that it is valid for all handles.
     * @param handles an array of #guint representing Telepathy handles, may be %NULL
     * @param handleCount the numner of handles in `handles`
     * @param message The error message
     */
    receivingFailed(handles: number, handleCount: number, message: string | null): void
    /**
     * Informs the Connection Manager that sending has failed for this
     * content. This is a transient error and it may or not not end the Content
     * and the call.
     * @param message The error message
     */
    sendingFailed(message: string | null): void

    // Own signals of TelepathyFarstream-0.6.TelepathyFarstream.Content

    connect(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): number
    on(sigName: "restart-source", callback: Content.RestartSourceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restart-source", callback: Content.RestartSourceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "restart-source", ...args: any[]): void
    connect(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): number
    on(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "src-pad-added", stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec, ...args: any[]): void
    connect(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): number
    on(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "start-receiving", handleCount: number, ...args: any[]): void
    connect(sigName: "start-sending", callback: Content.StartSendingSignalCallback): number
    on(sigName: "start-sending", callback: Content.StartSendingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-sending", callback: Content.StartSendingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-sending", callback: Content.StartSendingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "start-sending", ...args: any[]): void
    connect(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): number
    on(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stop-receiving", handleCount: number, ...args: any[]): void
    connect(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): number
    on(sigName: "stop-sending", callback: Content.StopSendingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop-sending", callback: Content.StopSendingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stop-sending", ...args: any[]): void

    // Class property signals of TelepathyFarstream-0.6.TelepathyFarstream.Content

    connect(sigName: "notify::fs-conference", callback: (...args: any[]) => void): number
    on(sigName: "notify::fs-conference", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fs-conference", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fs-conference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fs-conference", ...args: any[]): void
    connect(sigName: "notify::fs-session", callback: (...args: any[]) => void): number
    on(sigName: "notify::fs-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fs-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fs-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fs-session", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sink-pad", callback: (...args: any[]) => void): number
    on(sigName: "notify::sink-pad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sink-pad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sink-pad", ...args: any[]): void
    connect(sigName: "notify::tf-channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::tf-channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tf-channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tf-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tf-channel", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This structure is private, this class is not subclassable.
 * @class 
 */
export class Content extends GObject.Object {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Content

    static name: string

    // Constructors of TelepathyFarstream-0.6.TelepathyFarstream.Content

    constructor(config?: Content.ConstructorProperties) 
    _init(config?: Content.ConstructorProperties): void
}

export interface ChannelClass {
}

/**
 * There are no overridable functions
 * @record 
 */
export abstract class ChannelClass {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ChannelClass

    static name: string
}

export interface ChannelPrivate {
}

export class ChannelPrivate {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ChannelPrivate

    static name: string
}

export interface ContentClass {
}

/**
 * This structure is private, this class is not subclassable.
 * @record 
 */
export abstract class ContentClass {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ContentClass

    static name: string
}

export interface ContentPrivate {
}

export class ContentPrivate {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ContentPrivate

    static name: string
}
