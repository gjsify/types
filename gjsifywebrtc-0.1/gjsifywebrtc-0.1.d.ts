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
import type GLib from '@girs/glib-2.0';
import type GstWebRTC from '@girs/gstwebrtc-1.0';
import type GstSdp from '@girs/gstsdp-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GjsifyWebrtc {
    /**
     * GjsifyWebrtc-0.1
     */

    namespace PromiseBridge {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            replied: (arg0: Gst.Structure | null) => void;
            /**
             * @signal
             */
            rejected: (arg0: string) => void;
            'notify::promise': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            promise: Gst.Promise;
        }
    }

    /**
     * @gir-type Class
     */
    class PromiseBridge extends GObject.Object {
        static $gtype: GObject.GType<PromiseBridge>;

        // Properties

        /**
         * @read-only
         */
        get promise(): Gst.Promise;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PromiseBridge.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PromiseBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PromiseBridge;

        // Signals

        /** @signal */
        connect<K extends keyof PromiseBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PromiseBridge.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PromiseBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PromiseBridge.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PromiseBridge.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PromiseBridge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_promise(): Gst.Promise;
    }

    namespace WebrtcbinBridge {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'negotiation-needed': () => void;
            /**
             * @signal
             */
            icecandidate: (arg0: number, arg1: string) => void;
            /**
             * @signal
             */
            datachannel: (arg0: DataChannelBridge) => void;
            /**
             * @signal
             */
            'new-transceiver': (arg0: GstWebRTC.WebRTCRTPTransceiver) => void;
            /**
             * @signal
             */
            'pad-added': (arg0: Gst.Pad) => void;
            /**
             * @signal
             */
            'connection-state-changed': () => void;
            /**
             * @signal
             */
            'signaling-state-changed': () => void;
            /**
             * @signal
             */
            'ice-connection-state-changed': () => void;
            /**
             * @signal
             */
            'ice-gathering-state-changed': () => void;
            'notify::bin': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bin: Gst.Element;
        }
    }

    /**
     * @gir-type Class
     */
    class WebrtcbinBridge extends GObject.Object {
        static $gtype: GObject.GType<WebrtcbinBridge>;

        // Properties

        /**
         * @construct-only
         */
        get bin(): Gst.Element;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebrtcbinBridge.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebrtcbinBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](bin: Gst.Element): WebrtcbinBridge;

        // Signals

        /** @signal */
        connect<K extends keyof WebrtcbinBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebrtcbinBridge.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebrtcbinBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebrtcbinBridge.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebrtcbinBridge.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebrtcbinBridge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dispose_bridge(): void;
        get_bin(): Gst.Element;
    }

    namespace DataChannelBridge {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            opened: () => void;
            /**
             * @signal
             */
            closed: () => void;
            /**
             * @signal
             */
            'error-occurred': (arg0: string) => void;
            /**
             * @signal
             */
            'message-string': (arg0: string) => void;
            /**
             * @signal
             */
            'message-data': (arg0: GLib.Bytes) => void;
            /**
             * @signal
             */
            'buffered-amount-low': () => void;
            /**
             * @signal
             */
            'ready-state-changed': () => void;
            'notify::channel': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel: GstWebRTC.WebRTCDataChannel;
        }
    }

    /**
     * @gir-type Class
     */
    class DataChannelBridge extends GObject.Object {
        static $gtype: GObject.GType<DataChannelBridge>;

        // Properties

        /**
         * @construct-only
         */
        get channel(): GstWebRTC.WebRTCDataChannel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataChannelBridge.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataChannelBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](channel: GstWebRTC.WebRTCDataChannel): DataChannelBridge;

        // Signals

        /** @signal */
        connect<K extends keyof DataChannelBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataChannelBridge.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataChannelBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataChannelBridge.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataChannelBridge.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataChannelBridge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dispose_bridge(): void;
        get_channel(): GstWebRTC.WebRTCDataChannel;
    }

    namespace ReceiverBridge {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'media-flowing': () => void;
            'notify::pipeline': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            pipeline: Gst.Pipeline;
            kind: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ReceiverBridge extends GObject.Object {
        static $gtype: GObject.GType<ReceiverBridge>;

        // Properties

        /**
         * @construct-only
         */
        get pipeline(): Gst.Pipeline;
        /**
         * @construct-only
         */
        get kind(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ReceiverBridge.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ReceiverBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pipeline: Gst.Pipeline, kind: string): ReceiverBridge;

        // Signals

        /** @signal */
        connect<K extends keyof ReceiverBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReceiverBridge.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ReceiverBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReceiverBridge.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ReceiverBridge.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ReceiverBridge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param src_pad
         */
        connect_to_pad(src_pad: Gst.Pad): void;
        request_src_pad(): Gst.Pad;
        /**
         * @param pad
         */
        release_src_pad(pad: Gst.Pad): void;
        dispose_bridge(): void;
        get_pipeline(): Gst.Pipeline;
        get_kind(): string;
    }

    /**
     * @gir-type Alias
     */
    type PromiseBridgeClass = typeof PromiseBridge;
    /**
     * @gir-type Struct
     */
    abstract class PromiseBridgePrivate {
        static $gtype: GObject.GType<PromiseBridgePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebrtcbinBridgeClass = typeof WebrtcbinBridge;
    /**
     * @gir-type Struct
     */
    abstract class WebrtcbinBridgePrivate {
        static $gtype: GObject.GType<WebrtcbinBridgePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DataChannelBridgeClass = typeof DataChannelBridge;
    /**
     * @gir-type Struct
     */
    abstract class DataChannelBridgePrivate {
        static $gtype: GObject.GType<DataChannelBridgePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ReceiverBridgeClass = typeof ReceiverBridge;
    /**
     * @gir-type Struct
     */
    abstract class ReceiverBridgePrivate {
        static $gtype: GObject.GType<ReceiverBridgePrivate>;
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

export default GjsifyWebrtc;

// END
