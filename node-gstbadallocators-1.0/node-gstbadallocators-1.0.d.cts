
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstbadallocators-1.0-import.d.ts';
    
/**
 * GstBadAllocators-1.0
 */

import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

export function isPhysMemory(mem: Gst.Memory): boolean
export function physMemoryGetPhysAddr(mem: Gst.Memory): never
export module PhysMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface PhysMemoryAllocator extends Gst.Allocator {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    getPhysAddr(mem: Gst.Memory): never

    // Class property signals of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

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

export class PhysMemoryAllocator extends GObject.Object {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    static name: string

    // Constructors of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    constructor(config?: PhysMemoryAllocator.ConstructorProperties) 
    _init(config?: PhysMemoryAllocator.ConstructorProperties): void
}

export interface PhysMemoryAllocatorInterface {

    // Own fields of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocatorInterface

    parentIface: GObject.TypeInterface
    getPhysAddr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => never
}

/**
 * Marker interface for allocators with physical address backed memory
 * @record 
 */
export abstract class PhysMemoryAllocatorInterface {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocatorInterface

    static name: string
}

// END