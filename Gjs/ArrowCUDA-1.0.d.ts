// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ArrowCUDA-1.0
 */

import type * as Gjs from './Gjs';
import type Arrow from './Arrow-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace ArrowCUDA {

interface Buffer_ConstructProps extends Arrow.Buffer_ConstructProps {
}

interface Buffer {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.Buffer

    parent_instance: Arrow.Buffer

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.Buffer

    copy_from_host(data: Uint8Array): boolean
    copy_to_host(position: number, size: number): GLib.Bytes
    export(): IPCMemoryHandle
    get_context(): Context
    read_record_batch(schema: Arrow.Schema, options: Arrow.ReadOptions | null): Arrow.RecordBatch

    // Conflicting methods

    get_data(...args: any[]): any

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.Buffer

    connect(sigName: "notify::buffer", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Buffer extends Arrow.Buffer {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.Buffer

    constructor(config?: Buffer_ConstructProps) 
    constructor(context: Context, size: number) 
    static new(context: Context, size: number): Buffer

    // Overloads of new

    static new(data: Uint8Array): Arrow.Buffer
    static new_ipc(context: Context, handle: IPCMemoryHandle): Buffer
    static new_record_batch(context: Context, record_batch: Arrow.RecordBatch): Buffer
    _init(config?: Buffer_ConstructProps): void
}

interface BufferInputStream_ConstructProps extends Arrow.File_ConstructProps, Arrow.Readable_ConstructProps, Arrow.BufferInputStream_ConstructProps {
}

interface BufferInputStream extends Arrow.File, Arrow.Readable {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    parent_instance: Arrow.BufferInputStream

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    read_bytes(...args: any[]): any

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    connect(sigName: "notify::buffer", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BufferInputStream extends Arrow.BufferInputStream {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    static name: string
    static $gtype: GObject.GType<BufferInputStream>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.BufferInputStream

    constructor(config?: BufferInputStream_ConstructProps) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferInputStream

    // Overloads of new

    static new(buffer: Arrow.Buffer): Arrow.BufferInputStream
    _init(config?: BufferInputStream_ConstructProps): void
}

interface BufferOutputStream_ConstructProps extends Arrow.File_ConstructProps, Arrow.Writable_ConstructProps, Arrow.OutputStream_ConstructProps {
}

interface BufferOutputStream extends Arrow.File, Arrow.Writable {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    parent_instance: Arrow.OutputStream

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    get_buffer_size(): number
    get_buffered_size(): number
    set_buffer_size(size: number): boolean

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    connect(sigName: "notify::output-stream", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BufferOutputStream extends Arrow.OutputStream {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    static name: string
    static $gtype: GObject.GType<BufferOutputStream>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStream

    constructor(config?: BufferOutputStream_ConstructProps) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferOutputStream
    _init(config?: BufferOutputStream_ConstructProps): void
}

interface Context_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowCUDA-1.0.ArrowCUDA.Context

    context?: object | null
}

interface Context {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Context

    readonly context: object

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.Context

    parent_instance: GObject.Object

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.Context

    get_allocated_size(): number

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.Context

    connect(sigName: "notify::context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Context extends GObject.Object {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.Context

    constructor(config?: Context_ConstructProps) 
    _init(config?: Context_ConstructProps): void
}

interface DeviceManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface DeviceManager {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    parent_instance: GObject.Object

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    get_context(gpu_number: number): Context
    get_n_devices(): number

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceManager extends GObject.Object {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    static name: string
    static $gtype: GObject.GType<DeviceManager>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.DeviceManager

    constructor(config?: DeviceManager_ConstructProps) 
    constructor() 
    static new(): DeviceManager
    _init(config?: DeviceManager_ConstructProps): void
}

interface HostBuffer_ConstructProps extends Arrow.MutableBuffer_ConstructProps {
}

interface HostBuffer {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    parent_instance: Arrow.MutableBuffer

    // Conflicting methods

    set_data(...args: any[]): any
    slice(...args: any[]): any
    get_data(...args: any[]): any

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    connect(sigName: "notify::buffer", callback: (($obj: HostBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: HostBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: HostBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: HostBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HostBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HostBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HostBuffer extends Arrow.MutableBuffer {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    static name: string
    static $gtype: GObject.GType<HostBuffer>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.HostBuffer

    constructor(config?: HostBuffer_ConstructProps) 
    constructor(gpu_number: number, size: number) 
    static new(gpu_number: number, size: number): HostBuffer

    // Overloads of new

    static new(data: Uint8Array): Arrow.MutableBuffer
    static new(data: Uint8Array): Arrow.Buffer
    _init(config?: HostBuffer_ConstructProps): void

    // Conflicting static methods

    static new_bytes(...args: any[]): any
}

interface IPCMemoryHandle_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    ipc_memory_handle?: object | null
}

interface IPCMemoryHandle {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    readonly ipc_memory_handle: object

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    parent_instance: GObject.Object

    // Owm methods of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    serialize(): Arrow.Buffer

    // Class property signals of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    connect(sigName: "notify::ipc-memory-handle", callback: (($obj: IPCMemoryHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ipc-memory-handle", callback: (($obj: IPCMemoryHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ipc-memory-handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IPCMemoryHandle extends GObject.Object {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    static name: string
    static $gtype: GObject.GType<IPCMemoryHandle>

    // Constructors of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandle

    constructor(config?: IPCMemoryHandle_ConstructProps) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): IPCMemoryHandle
    _init(config?: IPCMemoryHandle_ConstructProps): void
}

interface BufferClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferClass

    parent_class: Arrow.BufferClass
}

abstract class BufferClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferClass

    static name: string
}

interface BufferInputStreamClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferInputStreamClass

    parent_class: Arrow.BufferInputStreamClass
}

abstract class BufferInputStreamClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferInputStreamClass

    static name: string
}

interface BufferOutputStreamClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStreamClass

    parent_class: Arrow.OutputStreamClass
}

abstract class BufferOutputStreamClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.BufferOutputStreamClass

    static name: string
}

interface ContextClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.ContextClass

    parent_class: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.ContextClass

    static name: string
}

interface DeviceManagerClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.DeviceManagerClass

    parent_class: GObject.ObjectClass
}

abstract class DeviceManagerClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.DeviceManagerClass

    static name: string
}

interface HostBufferClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.HostBufferClass

    parent_class: Arrow.MutableBufferClass
}

abstract class HostBufferClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.HostBufferClass

    static name: string
}

interface IPCMemoryHandleClass {

    // Own fields of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandleClass

    parent_class: GObject.ObjectClass
}

abstract class IPCMemoryHandleClass {

    // Own properties of ArrowCUDA-1.0.ArrowCUDA.IPCMemoryHandleClass

    static name: string
}

}
export default ArrowCUDA;