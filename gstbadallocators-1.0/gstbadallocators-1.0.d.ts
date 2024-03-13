
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstbadallocators-1.0-ambient.d.ts';
import './gstbadallocators-1.0-import.d.ts';
/**
 * GstBadAllocators-1.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstBadAllocators {

function is_phys_memory(mem: Gst.Memory): boolean
function phys_memory_get_phys_addr(mem: Gst.Memory): never
type PhysMemoryAllocatorInterface = typeof PhysMemoryAllocator
module PhysMemoryAllocator {

    // Constructor properties interface

    interface ConstructorProps extends Gst.Allocator.ConstructorProps {

    }

}

export interface PhysMemoryAllocatorNamespace {
      $gtype: GObject.GType<PhysMemoryAllocator>;
      prototype: PhysMemoryAllocator;
      
          
      }
interface PhysMemoryAllocator extends Gst.Allocator {

    // Own virtual methods of GstBadAllocators.PhysMemoryAllocator

    vfunc_get_phys_addr(mem: Gst.Memory): never
}



export const PhysMemoryAllocator: PhysMemoryAllocatorNamespace;

/**
 * Name of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GstBadAllocators;
// END