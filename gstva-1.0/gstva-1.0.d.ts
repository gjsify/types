/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstva-1.0-ambient.d.ts';
import './gstva-1.0-import.d.ts';
/**
 * GstVa-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVa {
    enum VaFeature {
        /**
         * The feature is disabled.
         */
        DISABLED,
        /**
         * The feature is enabled.
         */
        ENABLED,
        /**
         * The feature is enabled automatically.
         */
        AUTO,
    }
    /**
     * Types of different VA API implemented drivers. These are the typical and
     * the most widely used VA drivers.
     */
    enum VaImplementation {
        /**
         * The mesa gallium implementation.
         */
        MESA_GALLIUM,
        /**
         * The legacy i965 intel implementation.
         */
        INTEL_I965,
        /**
         * The iHD intel implementation.
         */
        INTEL_IHD,
        /**
         * Other implementation.
         */
        OTHER,
        /**
         * Invalid implementation.
         */
        INVALID,
    }
    const ALLOCATOR_VASURFACE: string;
    const CAPS_FEATURE_MEMORY_VA: string;
    /**
     * Flag indicating that we should map the VASurfaceID instead of to
     * system memory, so users can use libva primitives to operate with
     * that surface.
     */
    const MAP_VA: number;
    const VA_DISPLAY_HANDLE_CONTEXT_TYPE_STR: string;
    /**
     * Video alignment is not handled as expected by VA since it uses
     * opaque surfaces, not directly mappable memory. Still, decoders
     * might need to request bigger surfaces for coded size rather than
     * display sizes. This method will set the coded size to bufferpool's
     * configuration, out of the typical video aligment.
     * @param config the #GstStructure with the pool's configuration.
     * @param align a #GstVideoAlignment
     */
    function buffer_pool_config_set_va_alignment(config: Gst.Structure, align: GstVideo.VideoAlignment): void;
    /**
     * Sets the usage hint for the buffers handled by the buffer pool.
     * @param config the #GstStructure with the pool's configuration.
     * @param usage_hint the VA usage hint for new VASurfaceID.
     * @param use_derived a #GstVaFeature for derived mapping (only used when     VA allocator).
     */
    function buffer_pool_config_set_va_allocation_params(
        config: Gst.Structure,
        usage_hint: number,
        use_derived: VaFeature,
    ): void;
    function context_get_va_display(context: Gst.Context, type_name: string, render_device_path: string): boolean;
    /**
     * Set the `display` in the `context`
     * @param context a #GstContext
     * @param display the #GstVaDisplay we want to set
     */
    function context_set_va_display(context: Gst.Context, display: VaDisplay): void;
    /**
     * Creates a new VASurfaceID with `buffer'`s allocator and attached it
     * to it.
     *
     * *This method is used only by plugin's internal VA decoder.*
     * @param buffer a #GstBuffer
     * @returns %TRUE if the new VASurfaceID is attached to @buffer     correctly; %FALSE, otherwise.
     */
    function va_buffer_create_aux_surface(buffer: Gst.Buffer): boolean;
    function va_buffer_peek_display(buffer: Gst.Buffer): VaDisplay;
    /**
     * Query the specified context type name.
     * @param element a #GstElement
     * @param context_type the #gchar string specify the context type name
     */
    function va_context_query(element: Gst.Element, context_type: string): void;
    /**
     * It imports the array of `mem,` representing a single frame, into a
     * VASurfaceID and it's attached into every `mem`.
     * @param display a #GstVaDisplay
     * @param info a #GstVideoInfo
     * @param mem Memories. One     per plane.
     * @param fds array of     DMABuf file descriptors.
     * @param offset array of memory     offsets.
     * @param usage_hint VA usage hint.
     * @returns %TRUE if frame is imported correctly into a VASurfaceID; %FALSE otherwise.
     */
    function va_dmabuf_memories_setup(
        display: VaDisplay,
        info: GstVideo.VideoInfo,
        mem: Gst.Memory[],
        fds: never[],
        offset: number[],
        usage_hint: number,
    ): boolean;
    /**
     * Propagate `display` by posting it as #GstContext in the pipeline's bus.
     * @param element a #GstElement
     * @param display the #GstVaDisplay to propagate
     */
    function va_element_propagate_display_context(element: Gst.Element, display: VaDisplay): void;
    /**
     * Called by the va element to ensure a valid #GstVaDisplay.
     * @param element a #GstElement
     * @param render_device_path the #gchar string of render device path
     * @returns whether a #GstVaDisplay exists in @display_ptr
     */
    function va_ensure_element_data(element: any | null, render_device_path: string): boolean;
    /**
     * Used by elements when processing their pad's queries, propagating
     * element's #GstVaDisplay if the processed query requests it.
     * @param element a #GstElement
     * @param query a #GstQuery to query the context
     * @param display a #GstVaDisplay to answer the query
     * @returns whether we can handle the context query successfully
     */
    function va_handle_context_query(element: Gst.Element, query: Gst.Query, display: VaDisplay): boolean;
    /**
     * Called by elements in their #GstElementClass::set_context vmethod.
     * It gets a valid #GstVaDisplay if `context` has it.
     * @param element a #GstElement
     * @param context a #GstContext may contain the display
     * @param render_device_path the #gchar string of render device path
     * @returns whether the @display_ptr could be successfully set to a valid #GstVaDisplay in the @context
     */
    function va_handle_set_context(element: Gst.Element, context: Gst.Context, render_device_path: string): boolean;
    function va_memory_peek_display(mem: Gst.Memory): VaDisplay;
    module VaAllocator {
        // Constructor properties interface
    }

    /**
     * There are two types of VA allocators:
     *
     * * #GstVaAllocator
     * * #GstVaDmabufAllocator
     */
    class VaAllocator extends Gst.Allocator {
        // Constructors of GstVa-1.0.VaAllocator

        static ['new'](display: VaDisplay, surface_formats: number[]): VaAllocator;

        // Owm methods of GstVa-1.0.VaAllocator

        /**
         * Allocate a new VASurfaceID backed #GstMemory.
         * @param allocator a #GstAllocator
         */
        static alloc(allocator: Gst.Allocator): Gst.Memory;
        /**
         * Removes all the memories in `allocator'`s pool.
         * @param allocator a #GstAllocator
         */
        static flush(allocator: Gst.Allocator): void;
        /**
         * Gets current internal configuration of `allocator`.
         * @param allocator a #GstAllocator
         */
        static get_format(allocator: Gst.Allocator): boolean;
        static peek_display(allocator: Gst.Allocator): VaDisplay;
        /**
         * This method will populate `buffer` with pooled VASurfaceID
         * memories. It doesn't allocate new VASurfacesID.
         * @param allocator a #GstAllocator
         * @param buffer an empty #GstBuffer
         */
        static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        /**
         * Sets the configuration defined by `info,` `usage_hint` and
         * `use_derived` for `allocator,` and it tries the configuration, if
         * `allocator` has not allocated memories yet.
         *
         * If `allocator` has memory allocated already, and frame size and
         * format in `info` are the same as currently configured in `allocator,`
         * the rest of `info` parameters are updated internally.
         * @param allocator a #GstAllocator
         * @param info a #GstVideoInfo
         * @param usage_hint VA usage hint
         * @param use_derived a #GstVaFeature
         */
        static set_format(
            allocator: Gst.Allocator,
            info: GstVideo.VideoInfo,
            usage_hint: number,
            use_derived: VaFeature,
        ): boolean;
        /**
         * Populates an empty `buffer` with a VASuface backed #GstMemory.
         * @param allocator a #GstAllocator
         * @param buffer a #GstBuffer
         */
        static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    }

    module VaDisplay {
        // Constructor properties interface
    }

    /**
     * It is a generic wrapper for VADisplay. To create new instances
     * subclasses are required, depending on the display type to use
     * (v.gr. DRM, X11, Wayland, etc.).
     *
     * The purpose of this class is to be shared among pipelines via
     * #GstContext so all the VA processing elements will use the same
     * display entry. Application developers can create their own
     * subclass, based on their display, and shared it via the synced bus
     * message for the application.
     */
    class VaDisplay extends Gst.Object {
        // Own properties of GstVa-1.0.VaDisplay

        readonly description: string;
        va_display: any;
        vaDisplay: any;

        // Owm methods of GstVa-1.0.VaDisplay

        /**
         * Get the the #GstVaImplementation type of `self`.
         * @returns #GstVaImplementation.
         */
        get_implementation(): VaImplementation;
        /**
         * Get the VA display handle of the `self`.
         * @returns the VA display handle.
         */
        get_va_dpy(): any | null;
        /**
         * If the display is set by the user (foreign) it is assumed that the
         * driver is already initialized, thus this function is noop.
         *
         * If the display is opened internally, this function will initialize
         * the driver and it will set driver's message callbacks.
         *
         * NOTE: this function is supposed to be private, only used by
         * GstVaDisplay descendants.
         * @returns %TRUE if the VA driver can be initialized; %FALSE     otherwise
         */
        initialize(): boolean;
    }

    module VaDisplayDrm {
        // Constructor properties interface
    }

    /**
     * This is a #GstVaDisplay subclass to instantiate with DRM devices.
     */
    class VaDisplayDrm extends VaDisplay {
        // Own properties of GstVa-1.0.VaDisplayDrm

        path: string;

        // Constructors of GstVa-1.0.VaDisplayDrm

        static new_from_path(path: string): VaDisplayDrm;
    }

    module VaDisplayWrapped {
        // Constructor properties interface
    }

    /**
     * This is a #GstVaDisplay instantiaton subclass for custom created
     * VADisplay, such as X11 or Wayland, wrapping it.
     */
    class VaDisplayWrapped extends VaDisplay {
        // Constructors of GstVa-1.0.VaDisplayWrapped

        static ['new'](handle?: any | null): VaDisplayWrapped;
    }

    module VaDmabufAllocator {
        // Constructor properties interface
    }

    /**
     * A pooled memory allocator backed by the DMABufs exported from a
     * VASurfaceID. Also it is possible to import DMAbufs into a
     * VASurfaceID.
     */
    class VaDmabufAllocator extends Gst.Allocator {
        // Constructors of GstVa-1.0.VaDmabufAllocator

        static ['new'](display: VaDisplay): VaDmabufAllocator;

        // Owm methods of GstVa-1.0.VaDmabufAllocator

        /**
         * Removes all the memories in `allocator'`s pool.
         * @param allocator a #GstAllocator
         */
        static flush(allocator: Gst.Allocator): void;
        /**
         * Gets current internal configuration of `allocator`.
         * @param allocator a #GstAllocator
         */
        static get_format(allocator: Gst.Allocator): boolean;
        /**
         * This method will populate `buffer` with pooled VASurfaceID/DMABuf
         * memories. It doesn't allocate new VASurfacesID.
         * @param allocator a #GstAllocator
         * @param buffer an empty #GstBuffer
         */
        static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        /**
         * Sets the configuration defined by `info` and `usage_hint` for
         * `allocator,` and it tries the configuration, if `allocator` has not
         * allocated memories yet.
         *
         * If `allocator` has memory allocated already, and frame size and
         * format in `info` are the same as currently configured in `allocator,`
         * the rest of `info` parameters are updated internally.
         * @param allocator a #GstAllocator
         * @param info a #GstVideoInfo
         * @param usage_hint VA usage hint
         */
        static set_format(allocator: Gst.Allocator, info: GstVideo.VideoInfo, usage_hint: number): boolean;
        /**
         * This funciton creates a new VASurfaceID and exposes its DMABufs,
         * later it populates the `buffer` with those DMABufs.
         * @param allocator a #GstAllocator
         * @param buffer an empty #GstBuffer
         */
        static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    }

    module VaPool {
        // Constructor properties interface
    }

    /**
     * `GstVaPool` is a buffer pool for VA allocators.
     */
    class VaPool extends Gst.BufferPool {
        // Constructors of GstVa-1.0.VaPool

        static ['new'](): VaPool;

        static new_with_config(
            caps: Gst.Caps,
            size: number,
            min_buffers: number,
            max_buffers: number,
            usage_hint: number,
            use_derived: VaFeature,
            allocator: Gst.Allocator,
            alloc_params: Gst.AllocationParams,
        ): VaPool;

        // Owm methods of GstVa-1.0.VaPool

        /**
         * Retuns: %TRUE if `pool` always add #GstVideoMeta to its
         *     buffers. Otherwise, %FALSE.
         * @param pool the #GstBufferPool
         */
        static requires_video_meta(pool: Gst.BufferPool): boolean;
    }

    /**
     * The common VA display object class structure.
     */
    class VaDisplayClass {}

    class VaDisplayDrmClass {}

    class VaDisplayWrappedClass {}

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

export default GstVa;
// END
