/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

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
        UNIFIED_ADDRESSING,
        COMPUTE_CAPABILITY_MAJOR,
        COMPUTE_CAPABILITY_MINOR,
        VIRTUAL_MEMORY_MANAGEMENT_SUPPORTED,
        HANDLE_TYPE_POSIX_FILE_DESCRIPTOR_SUPPORTED,
        HANDLE_TYPE_WIN32_HANDLE_SUPPORTED,
        HANDLE_TYPE_WIN32_KMT_HANDLE_SUPPORTED,
    }
    enum event_flags {
        DEFAULT,
        BLOCKING_SYNC,
        DISABLE_TIMING,
        INTERPROCESS,
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
    enum ipcMem_flags {
        IPC_MEM_LAZY_ENABLE_PEER_ACCESS,
    }
    enum memAccess_flags {
        NONE,
        READ,
        READWRITE,
        MAX,
    }
    enum memAllocationGranularity_flags {
        MINIMUM,
        RECOMMENDED,
    }
    enum memAllocationHandleType {
        NONE,
        POSIX_FILE_DESCRIPTOR,
        WIN32,
        WIN32_KMT,
        MAX,
    }
    enum memAllocationType {
        INVALID,
        PINNED,
        MAX,
    }
    enum memLocationType {
        INVALID,
        DEVICE,
        MAX,
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
        ERROR_NO_DEVICE,
        ERROR_ALREADY_MAPPED,
        ERROR_NOT_SUPPORTED,
    }
    enum stream_flags {
        DEFAULT,
        NON_BLOCKING,
    }
    const IPC_HANDLE_SIZE: number;
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

    class ipcEventHandle {
        static $gtype: GObject.GType<ipcEventHandle>;

        // Own fields of CudaGst.ipcEventHandle

        reserved: number[];

        // Constructors of CudaGst.ipcEventHandle

        constructor(
            properties?: Partial<{
                reserved: number[];
            }>,
        );
        _init(...args: any[]): void;
    }

    class ipcMemHandle {
        static $gtype: GObject.GType<ipcMemHandle>;

        // Own fields of CudaGst.ipcMemHandle

        reserved: number[];

        // Constructors of CudaGst.ipcMemHandle

        constructor(
            properties?: Partial<{
                reserved: number[];
            }>,
        );
        _init(...args: any[]): void;
    }

    class memAccessDesc {
        static $gtype: GObject.GType<memAccessDesc>;

        // Own fields of CudaGst.memAccessDesc

        flags: memAccess_flags;

        // Constructors of CudaGst.memAccessDesc

        _init(...args: any[]): void;
    }

    class memAllocationProp {
        static $gtype: GObject.GType<memAllocationProp>;

        // Own fields of CudaGst.memAllocationProp

        type: memAllocationType;
        requestedHandleTypes: memAllocationHandleType;
        win32HandleMetaData: any;
        allocFlags: memAllocationPropAllocFlags;

        // Constructors of CudaGst.memAllocationProp

        _init(...args: any[]): void;
    }

    class memAllocationPropAllocFlags {
        static $gtype: GObject.GType<memAllocationPropAllocFlags>;

        // Own fields of CudaGst.memAllocationPropAllocFlags

        compressionType: number;
        gpuDirectRDMACapable: number;
        usage: number;
        reserved: Uint8Array;

        // Constructors of CudaGst.memAllocationPropAllocFlags

        constructor(
            properties?: Partial<{
                compressionType: number;
                gpuDirectRDMACapable: number;
                usage: number;
                reserved: Uint8Array;
            }>,
        );
        _init(...args: any[]): void;
    }

    class memLocation {
        static $gtype: GObject.GType<memLocation>;

        // Own fields of CudaGst.memLocation

        type: memLocationType;
        id: number;

        // Constructors of CudaGst.memLocation

        _init(...args: any[]): void;
    }

    type array = any;
    type context = any;
    type device = number;
    type deviceptr = never;
    type event = any;
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
