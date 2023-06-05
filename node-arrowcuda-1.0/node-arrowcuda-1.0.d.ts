
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-arrowcuda-1.0-import.d.ts';
    
/**
 * ArrowCUDA-1.0
 */

import type Arrow from '@girs/node-arrow-1.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace ArrowCUDA {

module Buffer {

    // Constructor properties interface

    interface ConstructorProperties extends Arrow.Buffer.ConstructorProperties {
    }

}

interface Buffer {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Buffer

    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.Buffer

    parentInstance: any

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.Buffer

    copyFromHost(data: Uint8Array): boolean
    copyToHost(position: number, size: number): any
    export(): IPCMemoryHandle
    getContext(): Context
    readRecordBatch(schema: Arrow.Schema, options: Arrow.ReadOptions | null): Arrow.RecordBatch

    // Conflicting methods

    getData(): any

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.Buffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Buffer extends Arrow.Buffer {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Buffer

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    constructor(context: Context, size: number) 
    static new(context: Context, size: number): Buffer

    // Overloads of new

    static new(data: Uint8Array): Arrow.Buffer
    static newIpc(context: Context, handle: IPCMemoryHandle): Buffer
    static newRecordBatch(context: Context, recordBatch: Arrow.RecordBatch): Buffer
    _init(config?: Buffer.ConstructorProperties): void
}

module BufferInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends Arrow.File.ConstructorProperties, Arrow.Readable.ConstructorProperties, Arrow.BufferInputStream.ConstructorProperties {
    }

}

interface BufferInputStream extends Arrow.File, Arrow.Readable {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    parentInstance: any

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(nBytes: number): Arrow.Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readBytes(nBytes: number): any | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BufferInputStream extends Arrow.BufferInputStream {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    constructor(config?: BufferInputStream.ConstructorProperties) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferInputStream

    // Overloads of new

    static new(buffer: Arrow.Buffer): Arrow.BufferInputStream
    _init(config?: BufferInputStream.ConstructorProperties): void
}

module BufferOutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends Arrow.File.ConstructorProperties, Arrow.Writable.ConstructorProperties, Arrow.OutputStream.ConstructorProperties {
    }

}

interface BufferOutputStream extends Arrow.File, Arrow.Writable {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    parentInstance: any

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    getBufferSize(): number
    getBufferedSize(): number
    setBufferSize(size: number): boolean

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BufferOutputStream extends Arrow.OutputStream {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    constructor(config?: BufferOutputStream.ConstructorProperties) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferOutputStream
    _init(config?: BufferOutputStream.ConstructorProperties): void
}

module Context {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowCUDA-1.0.ArrowCUDA.Context

        context?: any | null
    }

}

interface Context {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Context

    readonly context: any
    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.Context

    parentInstance: GObject.Object

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.Context

    getAllocatedSize(): number

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.Context

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
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
    disconnect(id: number): void
}

class Context extends GObject.Object {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Context

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.Context

    constructor(config?: Context.ConstructorProperties) 
    _init(config?: Context.ConstructorProperties): void
}

module DeviceManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DeviceManager {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    parentInstance: GObject.Object

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    getContext(gpuNumber: number): Context
    getNDevices(): number

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

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
    disconnect(id: number): void
}

class DeviceManager extends GObject.Object {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    constructor(config?: DeviceManager.ConstructorProperties) 
    constructor() 
    static new(): DeviceManager
    _init(config?: DeviceManager.ConstructorProperties): void
}

module HostBuffer {

    // Constructor properties interface

    interface ConstructorProperties extends Arrow.MutableBuffer.ConstructorProperties {
    }

}

interface HostBuffer {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    parentInstance: any

    // Conflicting methods

    setData(offset: number, data: Uint8Array): boolean

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string | null, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string | null, data: any | null): void
    slice(offset: number, size: number): Arrow.MutableBuffer

    // Overloads of slice

    slice(offset: number, size: number): Arrow.Buffer
    slice(offset: number, size: number): Arrow.Buffer
    getData(): any

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HostBuffer extends Arrow.MutableBuffer {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    constructor(config?: HostBuffer.ConstructorProperties) 
    constructor(gpuNumber: number, size: number) 
    static new(gpuNumber: number, size: number): HostBuffer

    // Overloads of new

    static new(data: Uint8Array): Arrow.MutableBuffer
    static new(data: Uint8Array): Arrow.Buffer
    _init(config?: HostBuffer.ConstructorProperties): void

    // Conflicting static methods

    static newBytes(...args: any[]): any
}

module IPCMemoryHandle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

        ipcMemoryHandle?: any | null
    }

}

interface IPCMemoryHandle {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    readonly ipcMemoryHandle: any
    __gtype__: number

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    parentInstance: GObject.Object

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    serialize(): Arrow.Buffer

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    connect(sigName: "notify::ipc-memory-handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::ipc-memory-handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ipc-memory-handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ipc-memory-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ipc-memory-handle", ...args: any[]): void
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
    disconnect(id: number): void
}

class IPCMemoryHandle extends GObject.Object {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    static name: string

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    constructor(config?: IPCMemoryHandle.ConstructorProperties) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): IPCMemoryHandle
    _init(config?: IPCMemoryHandle.ConstructorProperties): void
}

interface BufferClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferClass

    parentClass: Arrow.BufferClass
}

abstract class BufferClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferClass

    static name: string
}

interface BufferInputStreamClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferInputStreamClass

    parentClass: Arrow.BufferInputStreamClass
}

abstract class BufferInputStreamClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferInputStreamClass

    static name: string
}

interface BufferOutputStreamClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStreamClass

    parentClass: Arrow.OutputStreamClass
}

abstract class BufferOutputStreamClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStreamClass

    static name: string
}

interface ContextClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.ContextClass

    parentClass: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.ContextClass

    static name: string
}

interface DeviceManagerClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.DeviceManagerClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceManagerClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.DeviceManagerClass

    static name: string
}

interface HostBufferClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.HostBufferClass

    parentClass: Arrow.MutableBufferClass
}

abstract class HostBufferClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.HostBufferClass

    static name: string
}

interface IPCMemoryHandleClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandleClass

    parentClass: GObject.ObjectClass
}

abstract class IPCMemoryHandleClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandleClass

    static name: string
}

}

export default ArrowCUDA;
// END