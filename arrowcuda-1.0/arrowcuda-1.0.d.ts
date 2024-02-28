/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './arrowcuda-1.0-ambient.d.ts';
import './arrowcuda-1.0-import.d.ts';
/**
 * ArrowCUDA-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace ArrowCUDA {
    module Buffer {
        // Constructor properties interface
    }

    class Buffer extends Arrow.Buffer {
        // Constructors of ArrowCUDA-1.0.Buffer

        static ['new'](context: Context, size: number): Buffer;

        static new_ipc(context: Context, handle: IPCMemoryHandle): Buffer;

        static new_record_batch(context: Context, record_batch: Arrow.RecordBatch): Buffer;

        // Owm methods of ArrowCUDA-1.0.Buffer

        copy_from_host(data: Uint8Array): boolean;
        copy_to_host(position: number, size: number): GLib.Bytes;
        ['export'](): IPCMemoryHandle;
        get_context(): Context;
        read_record_batch(schema: Arrow.Schema, options?: Arrow.ReadOptions | null): Arrow.RecordBatch;
    }

    module BufferInputStream {
        // Constructor properties interface
    }

    class BufferInputStream extends Arrow.BufferInputStream {
        // Constructors of ArrowCUDA-1.0.BufferInputStream

        static ['new'](buffer: Buffer): BufferInputStream;
    }

    module BufferOutputStream {
        // Constructor properties interface
    }

    class BufferOutputStream extends Arrow.OutputStream {
        // Constructors of ArrowCUDA-1.0.BufferOutputStream

        static ['new'](buffer: Buffer): BufferOutputStream;

        // Owm methods of ArrowCUDA-1.0.BufferOutputStream

        get_buffer_size(): number;
        get_buffered_size(): number;
        set_buffer_size(size: number): boolean;
    }

    module Context {
        // Constructor properties interface
    }

    class Context extends GObject.Object {
        // Own properties of ArrowCUDA-1.0.Context

        context: any;

        // Owm methods of ArrowCUDA-1.0.Context

        get_allocated_size(): number;
    }

    module DeviceManager {
        // Constructor properties interface
    }

    class DeviceManager extends GObject.Object {
        // Constructors of ArrowCUDA-1.0.DeviceManager

        static ['new'](): DeviceManager;

        // Owm methods of ArrowCUDA-1.0.DeviceManager

        get_context(gpu_number: number): Context;
        get_n_devices(): number;
    }

    module HostBuffer {
        // Constructor properties interface
    }

    class HostBuffer extends Arrow.MutableBuffer {
        // Constructors of ArrowCUDA-1.0.HostBuffer

        static ['new'](gpu_number: number, size: number): HostBuffer;
    }

    module IPCMemoryHandle {
        // Constructor properties interface
    }

    class IPCMemoryHandle extends GObject.Object {
        // Own properties of ArrowCUDA-1.0.IPCMemoryHandle

        ipc_memory_handle: any;
        ipcMemoryHandle: any;

        // Constructors of ArrowCUDA-1.0.IPCMemoryHandle

        static ['new'](data: Uint8Array): IPCMemoryHandle;

        // Owm methods of ArrowCUDA-1.0.IPCMemoryHandle

        serialize(): Arrow.Buffer;
    }

    class BufferClass {}

    class BufferInputStreamClass {}

    class BufferOutputStreamClass {}

    class ContextClass {}

    class DeviceManagerClass {}

    class HostBufferClass {}

    class IPCMemoryHandleClass {}

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
