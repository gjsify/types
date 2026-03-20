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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstHip {
    /**
     * GstHip-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace HipVendor {
        export const $gtype: GObject.GType<HipVendor>;
    }

    /**
     * @gir-type Enum
     * @since 1.28
     */
    enum HipVendor {
        UNKNOWN,
        AMD,
        NVIDIA,
    }

    const CAPS_FEATURE_MEMORY_HIP_MEMORY: string;
    const HIP_DEVICE_CONTEXT_TYPE: string;
    const HIP_MEMORY_NAME: string;
    const MAP_HIP: Gst.MapFlags;
    const MAP_READ_HIP: Gst.MapFlags;
    const MAP_WRITE_HIP: Gst.MapFlags;
    /**
     * @param device a {@link GstHip.HipDevice}
     * @returns a new {@link Gst.Context} embedding the `device`
     * @since 1.28
     */
    function context_new_hip_device(device: HipDevice): Gst.Context;
    /**
     * Perform the steps necessary for retrieving a {@link GstHip.HipDevice} from the
     * surrounding elements or from the application using the {@link Gst.Context} mechanism.
     *
     * If the content of `device` is not `null`, then no {@link Gst.Context} query is
     * necessary for {@link GstHip.HipDevice}.
     * @param element the {@link Gst.Element} running the query
     * @param vendor a {@link GstHip.HipVendor}
     * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
     * @param device the resulting {@link GstHip.HipDevice}
     * @returns whether a {@link GstHip.HipDevice} exists in `device`
     * @since 1.28
     */
    function hip_ensure_element_data(
        element: Gst.Element,
        vendor: HipVendor | null,
        device_id: number,
        device: HipDevice,
    ): [boolean, HipDevice];
    /**
     * @param element a {@link Gst.Element}
     * @param query a {@link Gst.Query} of type {@link Gst.QueryType.CONTEXT}
     * @param device a {@link GstHip.HipDevice}
     * @returns Whether the `query` was successfully responded to from the passed          `context`.
     * @since 1.28
     */
    function hip_handle_context_query(element: Gst.Element, query: Gst.Query, device?: HipDevice | null): boolean;
    /**
     * Helper function for implementing {@link Gst.ElementClass}.set_context() in
     * HIP capable elements.
     *
     * Retrieves the {@link GstHip.HipDevice} in `context` and places the result in `device`.
     * @param element a {@link Gst.Element}
     * @param context a {@link Gst.Context}
     * @param vendor a {@link GstHip.HipVendor}
     * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
     * @param device location of a {@link GstHip.HipDevice}
     * @returns whether the `device` could be set successfully
     * @since 1.28
     */
    function hip_handle_set_context(
        element: Gst.Element,
        context: Gst.Context,
        vendor: HipVendor | null,
        device_id: number,
        device: HipDevice,
    ): [boolean, HipDevice];
    /**
     * Opens `vendor` specific runtime libraries
     * @param vendor a {@link GstHip.HipVendor}
     * @returns `true` if succeeded
     * @since 1.28
     */
    function hip_load_library(vendor: HipVendor | null): boolean;
    /**
     * Compiles `source` with given compile options
     * @param device a {@link GstHip.HipDevice}
     * @param source HIP kernel source
     * @param options array of compile option string
     * @param num_options option array size
     * @returns Compiled kernel blob or `null` if failed.  *
     * @since 1.28
     */
    function hip_rtc_compile(device: HipDevice, source: string, options: string, num_options: number): string | null;
    /**
     * Opens `vendor` specific runtime compiler libraries
     * @param vendor a {@link GstHip.HipVendor}
     * @returns `true` if succeeded
     * @since 1.28
     */
    function hip_rtc_load_library(vendor: HipVendor | null): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns `true` if `mem` is a {@link GstHip.HipMemory}
     * @since 1.28
     */
    function is_hip_memory(mem: Gst.Memory): boolean;
    /**
     * @gir-type Flags
     */
    enum HipMemoryTransfer {
        DOWNLOAD,
        UPLOAD,
    }

    namespace HipAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque GstHipAllocator struct
     * @gir-type Class
     * @since 1.28
     */
    class HipAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<HipAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HipAllocator.SignalSignatures;

        // Fields

        allocator: Gst.Allocator;

        // Constructors

        constructor(properties?: Partial<HipAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HipAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HipAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HipAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HipAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Controls the active state of `allocator`.
         * @param active the new active state
         * @virtual
         */
        vfunc_set_active(active: boolean): boolean;

        // Methods

        /**
         * Allocates a new GstHipMemory
         * @param device a {@link GstHip.HipDevice}
         * @param info a {@link GstVideo.VideoInfo}
         * @returns a newly allocated {@link GstHip.HipMemory} or `null` if allocation failed
         */
        alloc(device: HipDevice, info: GstVideo.VideoInfo): Gst.Memory | null;
        /**
         * @param args
         */
        // Conflicted with Gst.Allocator.alloc
        alloc(...args: never[]): any;
        /**
         * Controls the active state of `allocator`.
         * @param active the new active state
         * @returns `true` if active state of `allocator` was successfully updated.
         */
        set_active(active: boolean): boolean;
    }

    namespace HipBufferPool {
        // Signal signatures
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * Opaque GstHipBufferPool struct
     * @gir-type Class
     * @since 1.28
     */
    class HipBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<HipBufferPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HipBufferPool.SignalSignatures;

        // Fields

        device: HipDevice;

        // Constructors

        constructor(properties?: Partial<HipBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: HipDevice): HipBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof HipBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HipBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HipBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HipBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HipDevice {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::device-id': (pspec: GObject.ParamSpec) => void;
            'notify::texture2d-support': (pspec: GObject.ParamSpec) => void;
            'notify::vendor': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            device_id: number;
            deviceId: number;
            texture2d_support: boolean;
            texture2dSupport: boolean;
            vendor: HipVendor;
        }
    }

    /**
     * Opaque GstHipDevice struct
     * @gir-type Class
     * @since 1.28
     */
    class HipDevice extends Gst.Object {
        static $gtype: GObject.GType<HipDevice>;

        // Properties

        /**
         * @read-only
         */
        get device_id(): number;
        /**
         * @read-only
         */
        get deviceId(): number;
        /**
         * @read-only
         */
        get texture2d_support(): boolean;
        /**
         * @read-only
         */
        get texture2dSupport(): boolean;
        /**
         * @read-only
         */
        get vendor(): HipVendor;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HipDevice.SignalSignatures;

        // Fields

        object: Gst.Object;

        // Constructors

        constructor(properties?: Partial<HipDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](vendor: HipVendor, device_id: number): HipDevice;

        // Signals

        /** @signal */
        connect<K extends keyof HipDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HipDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HipDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HipDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets numeric device identifier of `device`
         * @returns the device identifier
         */
        get_device_id(): number;
        /**
         * Gets per {@link GstHip.HipDevice} default {@link GstHip.HipStream} owned by `device`
         * @returns a {@link GstHip.HipStream}
         */
        get_stream(): HipStream;
        /**
         * Gets vendor of `device`
         * @returns {@link GstHip.HipVendor}
         */
        get_vendor(): HipVendor;
        /**
         * Checks equality of `device1` and `device2`
         * @param device2 a {@link GstHip.HipDevice}
         * @returns `true` if both devices are associated with the same hardware device
         */
        is_equal(device2: HipDevice): boolean;
        /**
         * Sets `device` to current stack via hipSetDevice
         * @returns `true` if hipSetDevice call succeeded
         */
        set_current(): boolean;
    }

    namespace HipEventPool {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * Opaque GstHipEventPool struct
     * @gir-type Class
     * @since 1.28
     */
    class HipEventPool extends Gst.Object {
        static $gtype: GObject.GType<HipEventPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HipEventPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HipEventPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](vendor: HipVendor, device_id: number): HipEventPool;

        // Signals

        /** @signal */
        connect<K extends keyof HipEventPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipEventPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HipEventPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipEventPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HipEventPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HipEventPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Acquires {@link GstHip.HipEvent} from `pool`
         * @returns `true` if succeeded
         */
        acquire(): [boolean, HipEvent | null];
    }

    namespace HipPoolAllocator {
        // Signal signatures
        interface SignalSignatures extends HipAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HipAllocator.ConstructorProps {}
    }

    /**
     * Opaque GstHipPoolAllocator struct
     * @gir-type Class
     * @since 1.28
     */
    class HipPoolAllocator extends HipAllocator {
        static $gtype: GObject.GType<HipPoolAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HipPoolAllocator.SignalSignatures;

        // Fields

        device: HipDevice;

        // Constructors

        constructor(properties?: Partial<HipPoolAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: HipDevice, info: GstVideo.VideoInfo): HipPoolAllocator;

        // Signals

        /** @signal */
        connect<K extends keyof HipPoolAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipPoolAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HipPoolAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HipPoolAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HipPoolAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HipPoolAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Acquires a {@link Gst.Memory} from `allocator`. `memory` should point to a memory
         * location that can hold a pointer to the new {@link Gst.Memory}.
         * @returns a {@link Gst.FlowReturn} such as {@link Gst.FlowReturn.FLUSHING} when the allocator is inactive.
         */
        acquire_memory(): [Gst.FlowReturn, Gst.Memory | null];
    }

    /**
     * @gir-type Alias
     */
    type HipAllocatorClass = typeof HipAllocator;
    /**
     * @gir-type Struct
     */
    abstract class HipAllocatorPrivate {
        static $gtype: GObject.GType<HipAllocatorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HipBufferPoolClass = typeof HipBufferPool;
    /**
     * @gir-type Struct
     */
    abstract class HipBufferPoolPrivate {
        static $gtype: GObject.GType<HipBufferPoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HipDeviceClass = typeof HipDevice;
    /**
     * @gir-type Struct
     */
    abstract class HipDevicePrivate {
        static $gtype: GObject.GType<HipDevicePrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class HipEvent {
        static $gtype: GObject.GType<HipEvent>;

        // Methods

        /**
         * Gets numeric device identifier of `event` object
         * @returns device identifier
         */
        get_device_id(): number;
        /**
         * Gets device vendor of `event` object
         * @returns {@link GstHip.HipVendor}
         */
        get_vendor(): HipVendor;
        /**
         * Increments the reference count on `event`
         * @returns a pointer to `event`
         */
        ref(): HipEvent;
        /**
         * Decrements the reference count on `event`
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type HipEventPoolClass = typeof HipEventPool;
    /**
     * @gir-type Struct
     */
    abstract class HipEventPoolPrivate {
        static $gtype: GObject.GType<HipEventPoolPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class HipGraphicsResource {
        static $gtype: GObject.GType<HipGraphicsResource>;

        // Methods

        /**
         * Increments the reference count on `resource`
         * @returns a pointer to `resource`
         */
        ref(): HipGraphicsResource;
        /**
         * Decrements the reference count on `resource`
         */
        unref(): void;
    }

    /**
     * Opaque GstHipMemory struct
     * @gir-type Struct
     * @since 1.28
     */
    class HipMemory {
        static $gtype: GObject.GType<HipMemory>;

        // Fields

        device: HipDevice;

        // Methods

        /**
         * Gets HIP stream object associated with `mem`
         * @returns a {@link GstHip.HipStream} or `null` if default HIP stream is in use
         */
        get_stream(): HipStream | null;
        /**
         * Creates hipTextureObject_t with given parameters
         * @param plane the plane index
         * @param filter_mode filter mode
         * @param address_mode address mode
         * @returns `true` if succeeded
         */
        get_texture(plane: number, filter_mode: number, address_mode: number): [boolean, any];
        /**
         * Sets `event` to `mem` for later synchronization operation
         * @param event a {@link GstHip.HipEvent}
         */
        set_event(event?: HipEvent | null): void;
        /**
         * Waits for device synchronization by using previously configured {@link GstHip.HipEvent}
         * via `gst_hip_memory_set_event()`
         */
        sync(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class HipMemoryPrivate {
        static $gtype: GObject.GType<HipMemoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HipPoolAllocatorClass = typeof HipPoolAllocator;
    /**
     * @gir-type Struct
     */
    abstract class HipPoolAllocatorPrivate {
        static $gtype: GObject.GType<HipPoolAllocatorPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class HipStream {
        static $gtype: GObject.GType<HipStream>;

        // Constructors

        constructor(vendor: HipVendor, device_id: number);

        static ['new'](vendor: HipVendor, device_id: number): HipStream;

        // Methods

        /**
         * Gets numeric device identifier of `stream` object
         * @returns device identifier
         */
        get_device_id(): number;
        /**
         * Gets hipStream_t handle owned by `stream`
         * @returns hipStream_t handle
         */
        get_handle(): any | null;
        /**
         * Gets device vendor of `stream` object
         * @returns {@link GstHip.HipVendor}
         */
        get_vendor(): HipVendor;
        /**
         * Records currently scheduled operations in `stream` to {@link GstHip.HipEvent}
         * @returns `true` if succeeded
         */
        record_event(): [boolean, HipEvent | null];
        /**
         * Increments the reference count on `stream`
         * @returns a pointer to `stream`
         */
        ref(): HipStream;
        /**
         * Decrements the reference count on `stream`
         */
        unref(): void;
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

export default GstHip;

// END
