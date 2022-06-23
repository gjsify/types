// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBadAllocators-1.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstBadAllocators {

function isPhysMemory(mem: Gst.Memory): boolean
function physMemoryGetPhysAddr(mem: Gst.Memory): number
interface PhysMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps, GObject.Object_ConstructProps {
}

interface PhysMemoryAllocator extends Gst.Allocator {

    // Conflicting properties

    object: any

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentIface: GObject.TypeInterface
    getPhysAddr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => number
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