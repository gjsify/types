/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';

export namespace CudaGst {
    /**
     * CudaGst-1.0
     */

    export namespace GLDeviceList {
        export const $gtype: GObject.GType<GLDeviceList>;
    }

    enum GLDeviceList {
        GL_DEVICE_LIST_ALL,
    }

    export namespace address_mode {
        export const $gtype: GObject.GType<address_mode>;
    }

    enum address_mode {
        WRAP,
        CLAMP,
        MIRROR,
        BORDER,
    }

    export namespace array_format {
        export const $gtype: GObject.GType<array_format>;
    }

    enum array_format {
        INT8,
        INT16,
    }

    export namespace device_attribute {
        export const $gtype: GObject.GType<device_attribute>;
    }

    enum device_attribute {
        TEXTURE_ALIGNMENT,
        COMPUTE_CAPABILITY_MAJOR,
        COMPUTE_CAPABILITY_MINOR,
    }

    export namespace filter_mode {
        export const $gtype: GObject.GType<filter_mode>;
    }

    enum filter_mode {
        POINT,
        LINEAR,
    }

    export namespace graphicsMapResourceFlags {
        export const $gtype: GObject.GType<graphicsMapResourceFlags>;
    }

    enum graphicsMapResourceFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
    }

    export namespace graphicsRegisterFlags {
        export const $gtype: GObject.GType<graphicsRegisterFlags>;
    }

    enum graphicsRegisterFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
        SURFACE_LOAD_STORE,
        TEXTURE_GATHER,
    }

    export namespace memorytype {
        export const $gtype: GObject.GType<memorytype>;
    }

    enum memorytype {
        HOST,
        DEVICE,
        ARRAY,
        UNIFIED,
    }

    export namespace resourceViewFormat {
        export const $gtype: GObject.GType<resourceViewFormat>;
    }

    enum resourceViewFormat {
        RES_VIEW_FORMAT_NONE,
    }

    export namespace resourcetype {
        export const $gtype: GObject.GType<resourcetype>;
    }

    enum resourcetype {
        ARRAY,
        MIPMAPPED_ARRAY,
        LINEAR,
        PITCH2D,
    }

    export namespace result {
        export const $gtype: GObject.GType<result>;
    }

    enum result {
        SUCCESS,
    }

    export namespace stream_flags {
        export const $gtype: GObject.GType<stream_flags>;
    }

    enum stream_flags {
        DEFAULT,
        NON_BLOCKING,
    }
    const TRSF_READ_AS_INTEGER: number;
    const VERSION: number;
    class DA_MEMCPY2D {
        static $gtype: GObject.GType<DA_MEMCPY2D>;

        // Own fields of CudaGst.DA_MEMCPY2D

        srcXInBytes: number;
        srcY: number;
        srcMemoryType: memorytype;
        srcHost: any;
        srcDevice: deviceptr;
        srcArray: array;
        srcPitch: number;
        dstXInBytes: number;
        dstY: number;
        dstMemoryType: memorytype;
        dstHost: any;
        dstDevice: deviceptr;
        dstArray: array;
        dstPitch: number;
        WidthInBytes: number;
        Height: number;

        // Constructors of CudaGst.DA_MEMCPY2D

        _init(...args: any[]): void;
    }

    class DA_RESOURCE_DESC {
        static $gtype: GObject.GType<DA_RESOURCE_DESC>;

        // Own fields of CudaGst.DA_RESOURCE_DESC

        resType: resourcetype;
        flags: number;

        // Constructors of CudaGst.DA_RESOURCE_DESC

        _init(...args: any[]): void;
    }

    class DA_RESOURCE_VIEW_DESC {
        static $gtype: GObject.GType<DA_RESOURCE_VIEW_DESC>;

        // Own fields of CudaGst.DA_RESOURCE_VIEW_DESC

        format: resourceViewFormat;
        width: number;
        height: number;
        depth: number;
        firstMipmapLevel: number;
        lastMipmapLevel: number;
        firstLayer: number;
        lastLayer: number;
        reserved: number[];

        // Constructors of CudaGst.DA_RESOURCE_VIEW_DESC

        _init(...args: any[]): void;
    }

    class DA_TEXTURE_DESC {
        static $gtype: GObject.GType<DA_TEXTURE_DESC>;

        // Own fields of CudaGst.DA_TEXTURE_DESC

        addressMode: address_mode[];
        filterMode: filter_mode;
        flags: number;
        maxAnisotropy: number;
        mipmapFilterMode: filter_mode;
        mipmapLevelBias: number;
        minMipmapLevelClamp: number;
        maxMipmapLevelClamp: number;
        borderColor: number[];
        reserved: number[];

        // Constructors of CudaGst.DA_TEXTURE_DESC

        _init(...args: any[]): void;
    }

    type array = any;
    type context = any;
    type device = number;
    type deviceptr = never;
    type __function = any;
    type graphicsResource = any;
    type mipmappedArray = any;
    type module = any;
    type stream = any;
    type texObject = number;
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

export default CudaGst;

// END
