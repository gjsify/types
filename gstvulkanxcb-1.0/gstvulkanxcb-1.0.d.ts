/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Vulkan from '@girs/vulkan-1.0';
import type GstVulkan from '@girs/gstvulkan-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVulkanXCB {
    /**
     * GstVulkanXCB-1.0
     */

    namespace VulkanDisplayXCB {
        // Signal signatures
        interface SignalSignatures extends GstVulkan.VulkanDisplay.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVulkan.VulkanDisplay.ConstructorProps {}
    }

    /**
     * the contents of a #GstVulkanDisplayXCB are private and should only be accessed
     * through the provided API
     */
    class VulkanDisplayXCB extends GstVulkan.VulkanDisplay {
        static $gtype: GObject.GType<VulkanDisplayXCB>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: VulkanDisplayXCB.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanDisplayXCB.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name?: string | null): VulkanDisplayXCB;
        // Conflicted with GstVulkan.VulkanDisplay.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof VulkanDisplayXCB.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDisplayXCB.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDisplayXCB.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDisplayXCB.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDisplayXCB.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDisplayXCB.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type VulkanDisplayXCBClass = typeof VulkanDisplayXCB;
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

export default GstVulkanXCB;

// END
