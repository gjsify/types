
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstglwayland-1.0-ambient.d.ts';
import './gstglwayland-1.0-import.d.ts';
/**
 * GstGLWayland-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstGL from '@girs/gstgl-1.0';

export module GLDisplayWayland {

    // Constructor properties interface

    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
    }

}

export interface GLDisplayWayland {

    // Own fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    parent: GstGL.GLDisplay & Gst.Object
    display: any
    registry: any
    compositor: any
    subcompositor: any
    shell: any

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

    // Class property signals of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayWayland are private and should only be accessed
 * through the provided API
 * @class 
 */
export class GLDisplayWayland extends GstGL.GLDisplay {

    // Own properties of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    static name: string
    static $gtype: GObject.GType<GLDisplayWayland>

    // Constructors of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    constructor(config?: GLDisplayWayland.ConstructorProperties) 
    /**
     * Create a new #GstGLDisplayWayland from the wayland display name.  See `wl_display_connect`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstGLDisplayWayland or %NULL
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstGLDisplayWayland from the wayland display name.  See `wl_display_connect`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstGLDisplayWayland or %NULL
     */
    static new(name: string | null): GLDisplayWayland

    // Overloads of new

    static new(): GstGL.GLDisplay
    /**
     * Creates a new display connection from a wl_display Display.
     * @constructor 
     * @param display an existing, wayland display
     * @returns a new #GstGLDisplayWayland
     */
    static new_with_display(display: any | null): GLDisplayWayland
    _init(config?: GLDisplayWayland.ConstructorProperties): void
}

export interface GLDisplayWaylandClass {

    // Own fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass

    object_class: GstGL.GLDisplayClass
    _padding: any[]
}

export abstract class GLDisplayWaylandClass {

    // Own properties of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END