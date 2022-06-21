// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGLWayland-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstGL from './GstGL-1.0';

export namespace GstGLWayland {

interface GLDisplayWayland_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}

interface GLDisplayWayland {

    // Own fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    parent: GstGL.GLDisplay
    display: object
    registry: object
    compositor: object
    subcompositor: object
    shell: object

    // Conflicting methods

    ref(...args: any[]): any

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
class GLDisplayWayland extends GstGL.GLDisplay {

    // Own properties of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    static name: string
    static $gtype: GObject.GType<GLDisplayWayland>

    // Constructors of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    constructor(config?: GLDisplayWayland_ConstructProps) 
    /**
     * Create a new #GstGLDisplayWayland from the wayland display name.  See `wl_display_connect`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstGLDisplayWayland from the wayland display name.  See `wl_display_connect`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    static new(name: string | null): GLDisplayWayland

    // Overloads of new

    static new(): GstGL.GLDisplay
    /**
     * Creates a new display connection from a wl_display Display.
     * @constructor 
     * @param display an existing, wayland display
     */
    static new_with_display(display: object | null): GLDisplayWayland
    _init(config?: GLDisplayWayland_ConstructProps): void
}

interface GLDisplayWaylandClass {

    // Own fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass

    object_class: GstGL.GLDisplayClass
    _padding: object[]
}

abstract class GLDisplayWaylandClass {

    // Own properties of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass

    static name: string
}

}
export default GstGLWayland;