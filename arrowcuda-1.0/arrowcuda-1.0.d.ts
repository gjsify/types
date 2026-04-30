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
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace ArrowCUDA {
    /**
     * ArrowCUDA-1.0
     */

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends Arrow.Buffer.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Arrow.Buffer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Buffer extends Arrow.Buffer {
        static $gtype: GObject.GType<Buffer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, size: bigint | number): Buffer;
        // Conflicted with Arrow.Buffer.new

        static ['new'](...args: never[]): any;

        static new_ipc(context: Context, handle: IPCMemoryHandle): Buffer;

        static new_record_batch(context: Context, record_batch: Arrow.RecordBatch): Buffer;

        // Signals

        /** @signal */
        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param data Data on CPU host to be copied.
         * @returns `true` on success, `false` if there was an error.
         */
        copy_from_host(data: Uint8Array | string): boolean;
        /**
         * @param position The offset of memory on GPU device to be copied.
         * @param size The size of memory on GPU device to be copied in bytes.
         * @returns A {@link GLib.Bytes} that have copied memory on CPU   host on success, `null` on error.
         */
        copy_to_host(position: bigint | number, size: bigint | number): GLib.Bytes;
        /**
         * @returns A newly created   {@link ArrowCUDA.IPCMemoryHandle} to handle the exported buffer on   success, `null` on error
         */
        ['export'](): IPCMemoryHandle;
        /**
         * @returns A newly created {@link ArrowCUDA.Context} for the   buffer. Contexts for the same buffer share the same data internally.
         */
        get_context(): Context;
        /**
         * @param schema A {@link Arrow.Schema} for record batch.
         * @param options A {@link Arrow.ReadOptions}.
         * @returns A newly created {@link Arrow.RecordBatch} on   success, `null` on error. The record batch data is located on GPU.
         */
        read_record_batch(schema: Arrow.Schema, options: Arrow.ReadOptions | null): Arrow.RecordBatch;
    }

    namespace BufferInputStream {
        // Signal signatures
        interface SignalSignatures extends Arrow.BufferInputStream.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::input-stream': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Arrow.BufferInputStream.ConstructorProps,
                Arrow.File.ConstructorProps,
                Arrow.Readable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BufferInputStream extends Arrow.BufferInputStream implements Arrow.File, Arrow.Readable {
        static $gtype: GObject.GType<BufferInputStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BufferInputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BufferInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer): BufferInputStream;

        // Signals

        /** @signal */
        connect<K extends keyof BufferInputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BufferInputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BufferInputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BufferInputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BufferInputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BufferInputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace BufferOutputStream {
        // Signal signatures
        interface SignalSignatures extends Arrow.OutputStream.SignalSignatures {
            'notify::output-stream': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Arrow.OutputStream.ConstructorProps, Arrow.File.ConstructorProps, Arrow.Writable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BufferOutputStream extends Arrow.OutputStream implements Arrow.File, Arrow.Writable {
        static $gtype: GObject.GType<BufferOutputStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BufferOutputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BufferOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer): BufferOutputStream;

        // Signals

        /** @signal */
        connect<K extends keyof BufferOutputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BufferOutputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BufferOutputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BufferOutputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BufferOutputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BufferOutputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The CPU buffer size in bytes. See `garrow_cuda_buffer_output_stream_set_buffer_size()` for CPU buffer size details.
         */
        get_buffer_size(): number;
        /**
         * @returns The size of buffered data in bytes.
         */
        get_buffered_size(): number;
        /**
         * @param size A size of CPU buffer in bytes.
         * @returns `true` on success, `false` if there was an error. Sets CPU buffer size. to limit `cudaMemcpy()` calls. If CPU buffer size is `0`, buffering is disabled. The default is `0`.
         */
        set_buffer_size(size: bigint | number): boolean;
        /**
         * @returns `true` on success, `false` if there was an error.
         */
        close(): boolean;
        /**
         * @returns The mode of the file.
         */
        get_mode(): Arrow.FileMode;
        /**
         * @returns `true` if the `file` is already closed, `false` otherwise.
         */
        is_closed(): boolean;
        /**
         * @returns The current offset on success, -1 if there was an error.
         */
        tell(): number;
        /**
         * It ensures writing all data on memory to storage.
         * @returns `true` on success, `false` if there was an error.
         */
        flush(): boolean;
        /**
         * @param data The data to be written.
         * @returns `true` on success, `false` if there was an error.
         */
        write(data: Uint8Array | string): boolean;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Properties

        /**
         * @since 0.8.0
         * @construct-only
         */
        set context(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The allocated memory by this context in bytes.
         */
        get_allocated_size(): number;
    }

    namespace DeviceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DeviceManager extends GObject.Object {
        static $gtype: GObject.GType<DeviceManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DeviceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DeviceManager;

        // Signals

        /** @signal */
        connect<K extends keyof DeviceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DeviceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DeviceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeviceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param gpu_number A GPU device number for the target context.
         * @returns A newly created {@link ArrowCUDA.Context} on   success, `null` on error. Contexts for the same GPU device number   share the same data internally.
         */
        get_context(gpu_number: number): Context;
        /**
         * @returns The number of GPU devices.
         */
        get_n_devices(): number;
    }

    namespace HostBuffer {
        // Signal signatures
        interface SignalSignatures extends Arrow.MutableBuffer.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Arrow.MutableBuffer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HostBuffer extends Arrow.MutableBuffer {
        static $gtype: GObject.GType<HostBuffer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HostBuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HostBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](gpu_number: number, size: bigint | number): HostBuffer;
        // Conflicted with Arrow.MutableBuffer.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof HostBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HostBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HostBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HostBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HostBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HostBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace IPCMemoryHandle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::ipc-memory-handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ipc_memory_handle: any;
            ipcMemoryHandle: any;
        }
    }

    /**
     * @gir-type Class
     */
    class IPCMemoryHandle extends GObject.Object {
        static $gtype: GObject.GType<IPCMemoryHandle>;

        // Properties

        /**
         * @since 0.8.0
         * @construct-only
         */
        set ipc_memory_handle(val: any);
        /**
         * @since 0.8.0
         * @construct-only
         */
        set ipcMemoryHandle(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IPCMemoryHandle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IPCMemoryHandle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: Uint8Array | string): IPCMemoryHandle;

        // Signals

        /** @signal */
        connect<K extends keyof IPCMemoryHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IPCMemoryHandle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IPCMemoryHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IPCMemoryHandle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IPCMemoryHandle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IPCMemoryHandle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A newly created {@link Arrow.Buffer} on success,   `null` on error. The buffer has serialized `handle`. The serialized   `handle` can be deserialized by `garrow_cuda_ipc_memory_handle_new()`   in other process.
         */
        serialize(): Arrow.Buffer;
    }

    /**
     * @gir-type Alias
     */
    type BufferClass = typeof Buffer;
    /**
     * @gir-type Alias
     */
    type BufferInputStreamClass = typeof BufferInputStream;
    /**
     * @gir-type Alias
     */
    type BufferOutputStreamClass = typeof BufferOutputStream;
    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;
    /**
     * @gir-type Alias
     */
    type DeviceManagerClass = typeof DeviceManager;
    /**
     * @gir-type Alias
     */
    type HostBufferClass = typeof HostBuffer;
    /**
     * @gir-type Alias
     */
    type IPCMemoryHandleClass = typeof IPCMemoryHandle;
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

export default ArrowCUDA;

// END
