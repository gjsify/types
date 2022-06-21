// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGLX11-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstGL from './GstGL-1.0';

export namespace GstGLX11 {

interface GLDisplayX11_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}

interface GLDisplayX11 {

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGLX11-1.0.GstGLX11.GLDisplayX11

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayX11 are private and should only be accessed
 * through the provided API
 * @class 
 */
class GLDisplayX11 extends GstGL.GLDisplay {

    // Own properties of GstGLX11-1.0.GstGLX11.GLDisplayX11

    static name: string
    static $gtype: GObject.GType<GLDisplayX11>

    // Constructors of GstGLX11-1.0.GstGLX11.GLDisplayX11

    constructor(config?: GLDisplayX11_ConstructProps) 
    /**
     * Create a new #GstGLDisplayX11 from the x11 display name.  See `XOpenDisplay`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstGLDisplayX11 from the x11 display name.  See `XOpenDisplay`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    static new(name: string | null): GLDisplayX11

    // Overloads of new

    static new(): GstGL.GLDisplay
    _init(config?: GLDisplayX11_ConstructProps): void
}

interface GLDisplayX11Class {

    // Own fields of GstGLX11-1.0.GstGLX11.GLDisplayX11Class

    object_class: GstGL.GLDisplayClass
    _padding: object[]
}

abstract class GLDisplayX11Class {

    // Own properties of GstGLX11-1.0.GstGLX11.GLDisplayX11Class

    static name: string
}

}
export default GstGLX11;