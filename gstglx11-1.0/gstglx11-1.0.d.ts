
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstglx11-1.0-ambient.d.ts';
import './gstglx11-1.0-import.d.ts';
/**
 * GstGLX11-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstGL from '@girs/gstgl-1.0';

export namespace GstGLX11 {

module GLDisplayX11 {

    // Constructor properties interface

    interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {

    }

}

/**
 * the contents of a #GstGLDisplayX11 are private and should only be accessed
 * through the provided API
 */
class GLDisplayX11 extends GstGL.GLDisplay {

    // Constructors of GstGLX11.GLDisplayX11


constructor(properties?: Partial<GLDisplayX11.ConstructorProps>, ...args: any[]);

_init(...args: any[]): void;


static ["new"](name?: (string | null)): GLDisplayX11;
// Conflicted with GstGL.GLDisplay.new

static ["new"](...args: never[]): any;
}

type GLDisplayX11Class = typeof GLDisplayX11
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

export default GstGLX11;
// END