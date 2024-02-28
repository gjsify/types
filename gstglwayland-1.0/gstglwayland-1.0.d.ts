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

export namespace GstGLWayland {
    module GLDisplayWayland {
        // Constructor properties interface
    }

    /**
     * the contents of a #GstGLDisplayWayland are private and should only be accessed
     * through the provided API
     */
    class GLDisplayWayland extends GstGL.GLDisplay {
        // Own fields of GstGLWayland-1.0.GLDisplayWayland

        display: any;
        registry: any;
        compositor: any;
        subcompositor: any;
        shell: any;

        // Constructors of GstGLWayland-1.0.GLDisplayWayland

        static ['new'](name?: string | null): GLDisplayWayland;

        static new_with_display(display?: any | null): GLDisplayWayland;
    }

    class GLDisplayWaylandClass {}

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GstGLWayland;
// END
