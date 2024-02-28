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

        interface Closed {
            (): void;
        }

        interface ContentAdded {
            (content: Content): void;
        }

        interface ContentRemoved {
            (content: Content): void;
        }

        interface FsConferenceAdded {
            (conf: Farstream.Conference): void;
        }

        interface FsConferenceRemoved {
            (conf: Farstream.Conference): void;
        }

        // Constructor properties interface
    }

    /**
     * All members of the object are private
     */
    class Channel extends GObject.Object {
        // Own properties of TelepathyFarstream-0.6.Channel

        channel: TelepathyGLib.Channel;
        readonly fs_conferences: any[];
        readonly fsConferences: any[];
        readonly object_path: string;
        readonly objectPath: string;

        // Constructors of TelepathyFarstream-0.6.Channel

        static new_finish(object: GObject.Object, result: Gio.AsyncResult): Channel;

        // Owm methods of TelepathyFarstream-0.6.Channel

        /**
         * Creates a new #TfChannel from an existing channel proxy, the new
         * TfChannel object will be return in the async callback.
         *
         * The user must call tf_channel_new_finish() in the callback
         * to get the finished object.
         * @param channel_proxy a #TpChannel proxy
         * @param callback a #GAsyncReadyCallback to call when the channel is ready
         */
        static new_async(channel_proxy: TelepathyGLib.Channel, callback?: Gio.AsyncReadyCallback<Channel> | null): void;

        // Owm methods of TelepathyFarstream-0.6.Channel

        /**
         * You must call this function on call messages received on the async bus.
         * #GstMessages are not modified.
         * @param message A #GstMessage received from the bus
         * @returns %TRUE if the message has been handled, %FALSE otherwise
         */
        bus_message(message: Gst.Message): boolean;
    }

    module Content {
        // Signal callback interfaces

        interface RestartSource {
            (): void;
        }

        interface SrcPadAdded {
            (handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void;
        }

        interface StartReceiving {
            (handles: any, handle_count: number): boolean;
        }

        interface StartSending {
            (): boolean;
        }

        interface StopReceiving {
            (handles: any, handle_count: number): void;
        }

        interface StopSending {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * This structure is private, this class is not subclassable.
     */
    abstract class Content extends GObject.Object {
        // Own properties of TelepathyFarstream-0.6.Content

        readonly fs_conference: Farstream.Conference;
        readonly fsConference: Farstream.Conference;
        readonly fs_session: Farstream.Session;
        readonly fsSession: Farstream.Session;
        readonly media_type: Farstream.MediaType;
        readonly mediaType: Farstream.MediaType;
        readonly object_path: string;
        readonly objectPath: string;
        readonly sink_pad: Gst.Pad;
        readonly sinkPad: Gst.Pad;
        readonly tf_channel: Channel;
        readonly tfChannel: Channel;

        // Owm methods of TelepathyFarstream-0.6.Content

        /**
         * Send a fatal streaming error to the Content to the CM, the effect is most
         * likely that the content will be removed.
         * @param message error Message
         */
        error(message: string): void;
        /**
         * Provides a iterator that can be used to iterate through all of the src
         * pads that are are used to receive from a group of Telepathy handles.
         * @param handles a 0 terminated array of #guint representing Telepathy handles
         * @param handle_count the numner of handles in @handles
         * @returns a #GstIterator
         */
        iterate_src_pads(handles: number, handle_count: number): Gst.Iterator;
        /**
         * Informs the Connection Manager that receiving has failed for this
         * content. This is a transient error and it may or not not end the Content
         * and the call.
         *
         * If handles are not specific, it assumes that it is valid for all handles.
         * @param handles an array of #guint representing Telepathy handles, may be %NULL
         * @param handle_count the numner of handles in @handles
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
     * There are no overridable functions
     */
    class ChannelClass {}

    class ChannelPrivate {}

    /**
     * This structure is private, this class is not subclassable.
     */
    class ContentClass {}

    class ContentPrivate {}

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
