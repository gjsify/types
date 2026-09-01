
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
        GL_DEVICE_LIST_ALL = 1,
    }


    /**
     * @gir-type Enum
     */
    enum address_mode {
        WRAP = 0,
        CLAMP = 1,
        MIRROR = 2,
        BORDER = 3,
    }


    /**
     * @gir-type Enum
     */
    enum array_format {
        INT8 = 1,
        INT16 = 2,
    }


    /**
     * @gir-type Enum
     */
    enum device_attribute {
        TEXTURE_ALIGNMENT = 14,
        UNIFIED_ADDRESSING = 41,
        COMPUTE_CAPABILITY_MAJOR = 75,
        COMPUTE_CAPABILITY_MINOR = 76,
        VIRTUAL_MEMORY_MANAGEMENT_SUPPORTED = 102,
        HANDLE_TYPE_POSIX_FILE_DESCRIPTOR_SUPPORTED = 103,
        HANDLE_TYPE_WIN32_HANDLE_SUPPORTED = 104,
        HANDLE_TYPE_WIN32_KMT_HANDLE_SUPPORTED = 105,
        MEMORY_POOLS_SUPPORTED = 115,
    }


    /**
     * @gir-type Enum
     */
    enum event_flags {
        DEFAULT = 0,
        BLOCKING_SYNC = 1,
        DISABLE_TIMING = 2,
        INTERPROCESS = 4,
    }


    /**
     * @gir-type Enum
     */
    enum externalMemoryHandleType {
        OPAQUE_FD = 1,
        OPAQUE_WIN32 = 2,
        OPAQUE_WIN32_KMT = 3,
        D3D12_HEAP = 4,
        D3D12_RESOURCE = 5,
        D3D11_RESOURCE = 6,
        D3D11_RESOURCE_KMT = 7,
        NVSCIBUF = 8,
    }


    /**
     * @gir-type Enum
     */
    enum externalSemaphoreHandleType {
        OPAQUE_FD = 1,
        OPAQUE_WIN32 = 2,
        OPAQUE_WIN32_KMT = 3,
        D3D12_FENCE = 4,
        D3D11_FENCE = 5,
        NVSCISYNC = 6,
        D3D11_KEYED_MUTEX = 7,
        D3D11_KEYED_MUTEX_KMT = 8,
        TIMELINE_SEMAPHORE_FD = 9,
        TIMELINE_SEMAPHORE_WIN32 = 10,
    }


    /**
     * @gir-type Enum
     */
    enum filter_mode {
        POINT = 0,
        LINEAR = 1,
    }


    /**
     * @gir-type Enum
     */
    enum graphicsMapResourceFlags {
        NONE = 0,
        READ_ONLY = 1,
        WRITE_DISCARD = 2,
    }


    /**
     * @gir-type Enum
     */
    enum graphicsRegisterFlags {
        NONE = 0,
        READ_ONLY = 1,
        WRITE_DISCARD = 2,
        SURFACE_LOAD_STORE = 4,
        TEXTURE_GATHER = 8,
    }


    /**
     * @gir-type Enum
     */
    enum ipcMem_flags {
        IPC_MEM_LAZY_ENABLE_PEER_ACCESS = 1,
    }


    /**
     * @gir-type Enum
     */
    enum limit {
        STACK_SIZE = 0,
        PRINTF_FIFO_SIZE = 1,
        MALLOC_HEAP_SIZE = 2,
        DEV_RUNTIME_SYNC_DEPTH = 3,
        DEV_RUNTIME_PENDING_LAUNCH_COUNT = 4,
        MAX_L2_FETCH_GRANULARITY = 5,
        PERSISTING_L2_CACHE_SIZE = 6,
        SHMEM_SIZE = 7,
        CIG_ENABLED = 8,
        CIG_SHMEM_FALLBACK_ENABLED = 9,
    }


    /**
     * @gir-type Enum
     */
    enum memAccess_flags {
        NONE = 0,
        READ = 1,
        READWRITE = 3,
        MAX = 2147483647,
    }


    /**
     * @gir-type Enum
     */
    enum memAllocationGranularity_flags {
        MINIMUM = 0,
        RECOMMENDED = 1,
    }


    /**
     * @gir-type Enum
     */
    enum memAllocationHandleType {
        NONE = 0,
        POSIX_FILE_DESCRIPTOR = 1,
        WIN32 = 2,
        WIN32_KMT = 4,
        MAX = 2147483647,
    }


    /**
     * @gir-type Enum
     */
    enum memAllocationType {
        INVALID = 0,
        PINNED = 1,
        MAX = 2147483647,
    }


    /**
     * @gir-type Enum
     */
    enum memLocationType {
        INVALID = 0,
        DEVICE = 1,
        MAX = 2147483647,
    }


    /**
     * @gir-type Enum
     */
    enum memPool_attribute {
        REUSE_FOLLOW_EVENT_DEPENDENCIES = 1,
        REUSE_ALLOW_OPPORTUNISTIC = 2,
        REUSE_ALLOW_INTERNAL_DEPENDENCIES = 3,
        RELEASE_THRESHOLD = 4,
        RESERVED_MEM_CURRENT = 5,
        RESERVED_MEM_HIGH = 6,
        USED_MEM_CURRENT = 7,
        USED_MEM_HIGH = 8,
    }


    /**
     * @gir-type Enum
     */
    enum memorytype {
        HOST = 1,
        DEVICE = 2,
        ARRAY = 3,
        UNIFIED = 4,
    }


    /**
     * @gir-type Enum
     */
    enum resourceViewFormat {
        RES_VIEW_FORMAT_NONE = 0,
    }


    /**
     * @gir-type Enum
     */
    enum resourcetype {
        ARRAY = 0,
        MIPMAPPED_ARRAY = 1,
        LINEAR = 2,
        PITCH2D = 3,
    }


    /**
     * @gir-type Enum
     */
    enum result {
        SUCCESS = 0,
        ERROR_NO_DEVICE = 100,
        ERROR_ALREADY_MAPPED = 208,
        ERROR_NOT_SUPPORTED = 801,
    }


    /**
     * @gir-type Enum
     */
    enum stream_flags {
        DEFAULT = 0,
        NON_BLOCKING = 1,
    }


    /**
     * @default 64
     */
    const IPC_HANDLE_SIZE: number;

    /**
     * @default 1
     */
    const TRSF_READ_AS_INTEGER: number;

    /**
     * @default 10000
     */
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

        constructor(properties?: Partial<{
            offset: number;
            size: number;
            flags: number;
            reserved: number[];
        }>);
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

        srcHost: null;

        srcDevice: deviceptr;

        srcArray: array;

        srcPitch: number;

        dstXInBytes: number;

        dstY: number;

        dstMemoryType: memorytype;

        dstHost: null;

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

        constructor(properties?: Partial<{
            reserved: number[];
        }>);
    }


    /**
     * @gir-type Struct
     */
    class ipcMemHandle {
        static $gtype: GObject.GType<ipcMemHandle>;

        // Fields
        reserved: number[];

        // Constructors

        constructor(properties?: Partial<{
            reserved: number[];
        }>);
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

        win32HandleMetaData: null;

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

        constructor(properties?: Partial<{
            compressionType: number;
            gpuDirectRDMACapable: number;
            usage: number;
            reserved: Uint8Array;
        }>);
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

        win32SecurityAttributes: null;

        maxSize: number;

        reserved: Uint8Array;
    }


    /**
     * @gir-type Struct
     */
    class uuid {
        static $gtype: GObject.GType<uuid>;

        // Fields
        bytes: number[];

        // Constructors

        constructor(properties?: Partial<{
            bytes: number[];
        }>);
    }


    /**
     * @gir-type Alias
     */
    type array = never;

    /**
     * @gir-type Alias
     */
    type context = never;

    /**
     * @gir-type Alias
     */
    type device = number;

    /**
     * @gir-type Alias
     */
    type deviceptr = bigint | number;

    /**
     * @gir-type Alias
     */
    type event = never;

    /**
     * @gir-type Alias
     */
    type externalMemory = never;

    /**
     * @gir-type Alias
     */
    type externalSemaphore = never;

    /**
     * @gir-type Alias
     */
    type __function = never;

    /**
     * @gir-type Alias
     */
    type graphicsResource = never;

    /**
     * @gir-type Alias
     */
    type memoryPool = never;

    /**
     * @gir-type Alias
     */
    type mipmappedArray = never;

    /**
     * @gir-type Alias
     */
    type module = never;

    /**
     * @gir-type Alias
     */
    type stream = never;

    /**
     * @gir-type Alias
     */
    type texObject = bigint | number;

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
