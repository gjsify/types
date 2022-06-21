// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBadAllocators-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstBadAllocators {

function is_phys_memory(mem: Gst.Memory): boolean
function phys_memory_get_phys_addr(mem: Gst.Memory): number
interface PhysMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps, GObject.Object_ConstructProps {
}

interface PhysMemoryAllocator extends Gst.Allocator {

    // Conflicting properties

    object: any

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    vfunc_get_phys_addr(mem: Gst.Memory): number

    // Class property signals of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PhysMemoryAllocator extends GObject.Object {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    static name: string
    static $gtype: GObject.GType<PhysMemoryAllocator>

    // Constructors of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    constructor(config?: PhysMemoryAllocator_ConstructProps) 
    _init(config?: PhysMemoryAllocator_ConstructProps): void
}

interface PhysMemoryAllocatorInterface {

    // Own fields of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocatorInterface

    parent_iface: GObject.TypeInterface
    get_phys_addr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => number
}

/**
 * Marker interface for allocators with physical address backed memory
 * @record 
 */
abstract class PhysMemoryAllocatorInterface {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocatorInterface

    static name: string
}

}
export default GstBadAllocators;