/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstvulkanwayland-1.0-ambient.d.ts';
import './gstvulkanwayland-1.0-import.d.ts';
/**
 * GstVulkanWayland-1.0
 */

import type Vulkan from '@girs/vulkan-1.0';
import type GstVulkan from '@girs/gstvulkan-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVulkanWayland {
    module VulkanDisplayWayland {
        // Constructor properties interface
    }

    /**
     * the contents of a #GstVulkanDisplayWayland are private and should only be accessed
     * through the provided API
     */
    class VulkanDisplayWayland extends GstVulkan.VulkanDisplay {
        // Own fields of GstVulkanWayland-1.0.VulkanDisplayWayland

        display: any;
        registry: any;
        compositor: any;
        subcompositor: any;
        shell: any;

        // Constructors of GstVulkanWayland-1.0.VulkanDisplayWayland

        static ['new'](name?: string | null): VulkanDisplayWayland;

        static new_with_display(display?: any | null): VulkanDisplayWayland;
    }

    class VulkanDisplayWaylandClass {}

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

export default GstVulkanWayland;
// END
