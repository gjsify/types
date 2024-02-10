/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cudagst-1.0-ambient.d.ts';
import './cudagst-1.0-import.d.ts';
/**
 * CudaGst-1.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace CudaGst {
    enum GLDeviceList {
        GL_DEVICE_LIST_ALL,
    }
    enum address_mode {
        WRAP,
        CLAMP,
        MIRROR,
        BORDER,
    }
    enum array_format {
        INT8,
        INT16,
    }
    enum device_attribute {
        TEXTURE_ALIGNMENT,
        COMPUTE_CAPABILITY_MAJOR,
        COMPUTE_CAPABILITY_MINOR,
    }
    enum filter_mode {
        POINT,
        LINEAR,
    }
    enum graphicsMapResourceFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
    }
    enum graphicsRegisterFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
        SURFACE_LOAD_STORE,
        TEXTURE_GATHER,
    }
    enum memorytype {
        HOST,
        DEVICE,
        ARRAY,
        UNIFIED,
    }
    enum resourceViewFormat {
        RES_VIEW_FORMAT_NONE,
    }
    enum resourcetype {
        ARRAY,
        MIPMAPPED_ARRAY,
        LINEAR,
        PITCH2D,
    }
    enum result {
        SUCCESS,
    }
    enum stream_flags {
        DEFAULT,
        NON_BLOCKING,
    }
    const TRSF_READ_AS_INTEGER: number;
    const VERSION: number;
    class DA_MEMCPY2D {
        // Own fields of CudaGst-1.0.DA_MEMCPY2D

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
    }

    class DA_RESOURCE_DESC {
        // Own fields of CudaGst-1.0.DA_RESOURCE_DESC

        resType: resourcetype;
        flags: number;
    }

    class DA_RESOURCE_VIEW_DESC {
        // Own fields of CudaGst-1.0.DA_RESOURCE_VIEW_DESC

        format: resourceViewFormat;
        width: number;
        height: number;
        depth: number;
        firstMipmapLevel: number;
        lastMipmapLevel: number;
        firstLayer: number;
        lastLayer: number;
        reserved: number[];
    }

    class DA_TEXTURE_DESC {
        // Own fields of CudaGst-1.0.DA_TEXTURE_DESC

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
