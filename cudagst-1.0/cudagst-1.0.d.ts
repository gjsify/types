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
import type GObject from '@girs/gobject-2.0';

export namespace CudaGst {
    /**
     * CudaGst-1.0
     */

    /**
     * @gir-type Enum
     */
    enum GLDeviceList {
        GL_DEVICE_LIST_ALL,
    }

    /**
     * @gir-type Enum
     */
    enum address_mode {
        WRAP,
        CLAMP,
        MIRROR,
        BORDER,
    }

    /**
     * @gir-type Enum
     */
    enum array_format {
        INT8,
        INT16,
    }

    /**
     * @gir-type Enum
     */
    enum device_attribute {
        TEXTURE_ALIGNMENT,
        UNIFIED_ADDRESSING,
        COMPUTE_CAPABILITY_MAJOR,
        COMPUTE_CAPABILITY_MINOR,
        VIRTUAL_MEMORY_MANAGEMENT_SUPPORTED,
        HANDLE_TYPE_POSIX_FILE_DESCRIPTOR_SUPPORTED,
        HANDLE_TYPE_WIN32_HANDLE_SUPPORTED,
        HANDLE_TYPE_WIN32_KMT_HANDLE_SUPPORTED,
        MEMORY_POOLS_SUPPORTED,
    }

    /**
     * @gir-type Enum
     */
    enum event_flags {
        DEFAULT,
        BLOCKING_SYNC,
        DISABLE_TIMING,
        INTERPROCESS,
    }

    /**
     * @gir-type Enum
     */
    enum externalMemoryHandleType {
        OPAQUE_FD,
        OPAQUE_WIN32,
        OPAQUE_WIN32_KMT,
        D3D12_HEAP,
        D3D12_RESOURCE,
        D3D11_RESOURCE,
        D3D11_RESOURCE_KMT,
        NVSCIBUF,
    }

    /**
     * @gir-type Enum
     */
    enum externalSemaphoreHandleType {
        OPAQUE_FD,
        OPAQUE_WIN32,
        OPAQUE_WIN32_KMT,
        D3D12_FENCE,
        D3D11_FENCE,
        NVSCISYNC,
        D3D11_KEYED_MUTEX,
        D3D11_KEYED_MUTEX_KMT,
        TIMELINE_SEMAPHORE_FD,
        TIMELINE_SEMAPHORE_WIN32,
    }

    /**
     * @gir-type Enum
     */
    enum filter_mode {
        POINT,
        LINEAR,
    }

    /**
     * @gir-type Enum
     */
    enum graphicsMapResourceFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
    }

    /**
     * @gir-type Enum
     */
    enum graphicsRegisterFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
        SURFACE_LOAD_STORE,
        TEXTURE_GATHER,
    }

    /**
     * @gir-type Enum
     */
    enum ipcMem_flags {
        IPC_MEM_LAZY_ENABLE_PEER_ACCESS,
    }

    /**
     * @gir-type Enum
     */
    enum limit {
        STACK_SIZE,
        PRINTF_FIFO_SIZE,
        MALLOC_HEAP_SIZE,
        DEV_RUNTIME_SYNC_DEPTH,
        DEV_RUNTIME_PENDING_LAUNCH_COUNT,
        MAX_L2_FETCH_GRANULARITY,
        PERSISTING_L2_CACHE_SIZE,
        SHMEM_SIZE,
        CIG_ENABLED,
        CIG_SHMEM_FALLBACK_ENABLED,
    }

    /**
     * @gir-type Enum
     */
    enum memAccess_flags {
        NONE,
        READ,
        READWRITE,
        MAX,
    }

    /**
     * @gir-type Enum
     */
    enum memAllocationGranularity_flags {
        MINIMUM,
        RECOMMENDED,
    }

    /**
     * @gir-type Enum
     */
    enum memAllocationHandleType {
        NONE,
        POSIX_FILE_DESCRIPTOR,
        WIN32,
        WIN32_KMT,
        MAX,
    }

    /**
     * @gir-type Enum
     */
    enum memAllocationType {
        INVALID,
        PINNED,
        MAX,
    }

    /**
     * @gir-type Enum
     */
    enum memLocationType {
        INVALID,
        DEVICE,
        MAX,
    }

    /**
     * @gir-type Enum
     */
    enum memPool_attribute {
        REUSE_FOLLOW_EVENT_DEPENDENCIES,
        REUSE_ALLOW_OPPORTUNISTIC,
        REUSE_ALLOW_INTERNAL_DEPENDENCIES,
        RELEASE_THRESHOLD,
        RESERVED_MEM_CURRENT,
        RESERVED_MEM_HIGH,
        USED_MEM_CURRENT,
        USED_MEM_HIGH,
    }

    /**
     * @gir-type Enum
     */
    enum memorytype {
        HOST,
        DEVICE,
        ARRAY,
        UNIFIED,
    }

    /**
     * @gir-type Enum
     */
    enum resourceViewFormat {
        RES_VIEW_FORMAT_NONE,
    }

    /**
     * @gir-type Enum
     */
    enum resourcetype {
        ARRAY,
        MIPMAPPED_ARRAY,
        LINEAR,
        PITCH2D,
    }

    /**
     * @gir-type Enum
     */
    enum result {
        SUCCESS,
        ERROR_NO_DEVICE,
        ERROR_ALREADY_MAPPED,
        ERROR_NOT_SUPPORTED,
    }

    /**
     * @gir-type Enum
     */
    enum stream_flags {
        DEFAULT,
        NON_BLOCKING,
    }

    const IPC_HANDLE_SIZE: number;
    const TRSF_READ_AS_INTEGER: number;
    const VERSION: number;
    /**
     * @gir-type Struct
     */
    class DA_ARRAY3D_DESCRIPTOR {
        static $gtype: GObject.GType<DA_ARRAY3D_DESCRIPTOR>;

        // Fields

        Width: number;
        Height: number;
        Depth: number;
        Format: array_format;
        NumChannels: number;
        Flags: number;
    }

    /**
     * @gir-type Struct
     */
    class DA_EXTERNAL_MEMORY_BUFFER_DESC {
        static $gtype: GObject.GType<DA_EXTERNAL_MEMORY_BUFFER_DESC>;

        // Fields

        flags: number;
        reserved: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                offset: number;
                size: number;
                flags: number;
                reserved: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class DA_EXTERNAL_MEMORY_MIPMAPPED_ARRAY_DESC {
        static $gtype: GObject.GType<DA_EXTERNAL_MEMORY_MIPMAPPED_ARRAY_DESC>;

        // Fields

        numLevels: number;
        reserved: number[];
    }

    /**
     * @gir-type Struct
     */
    class DA_MEMCPY2D {
        static $gtype: GObject.GType<DA_MEMCPY2D>;

        // Fields

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

    /**
     * @gir-type Struct
     */
    class DA_RESOURCE_DESC {
        static $gtype: GObject.GType<DA_RESOURCE_DESC>;

        // Fields

        resType: resourcetype;
        flags: number;
    }

    /**
     * @gir-type Struct
     */
    class DA_RESOURCE_VIEW_DESC {
        static $gtype: GObject.GType<DA_RESOURCE_VIEW_DESC>;

        // Fields

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

    /**
     * @gir-type Struct
     */
    class DA_TEXTURE_DESC {
        static $gtype: GObject.GType<DA_TEXTURE_DESC>;

        // Fields

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

    /**
     * @gir-type Struct
     */
    class ipcEventHandle {
        static $gtype: GObject.GType<ipcEventHandle>;

        // Fields

        reserved: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                reserved: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class ipcMemHandle {
        static $gtype: GObject.GType<ipcMemHandle>;

        // Fields

        reserved: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                reserved: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class memAccessDesc {
        static $gtype: GObject.GType<memAccessDesc>;

        // Fields

        flags: memAccess_flags;
    }

    /**
     * @gir-type Struct
     */
    class memAllocationProp {
        static $gtype: GObject.GType<memAllocationProp>;

        // Fields

        type: memAllocationType;
        requestedHandleTypes: memAllocationHandleType;
        win32HandleMetaData: any;
        allocFlags: memAllocationPropAllocFlags;
    }

    /**
     * @gir-type Struct
     */
    class memAllocationPropAllocFlags {
        static $gtype: GObject.GType<memAllocationPropAllocFlags>;

        // Fields

        compressionType: number;
        gpuDirectRDMACapable: number;
        usage: number;
        reserved: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                compressionType: number;
                gpuDirectRDMACapable: number;
                usage: number;
                reserved: Uint8Array;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class memLocation {
        static $gtype: GObject.GType<memLocation>;

        // Fields

        type: memLocationType;
        id: number;
    }

    /**
     * @gir-type Struct
     */
    class memPoolProps {
        static $gtype: GObject.GType<memPoolProps>;

        // Fields

        allocType: memAllocationType;
        handleTypes: memAllocationHandleType;
        win32SecurityAttributes: any;
        maxSize: number;
        reserved: Uint8Array;
    }

    /**
     * @gir-type Alias
     */
    type array = any;
    /**
     * @gir-type Alias
     */
    type context = any;
    /**
     * @gir-type Alias
     */
    type device = number;
    /**
     * @gir-type Alias
     */
    type deviceptr = never;
    /**
     * @gir-type Alias
     */
    type event = any;
    /**
     * @gir-type Alias
     */
    type externalMemory = any;
    /**
     * @gir-type Alias
     */
    type externalSemaphore = any;
    /**
     * @gir-type Alias
     */
    type __function = any;
    /**
     * @gir-type Alias
     */
    type graphicsResource = any;
    /**
     * @gir-type Alias
     */
    type memoryPool = any;
    /**
     * @gir-type Alias
     */
    type mipmappedArray = any;
    /**
     * @gir-type Alias
     */
    type module = any;
    /**
     * @gir-type Alias
     */
    type stream = any;
    /**
     * @gir-type Alias
     */
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
