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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVa {
    /**
     * GstVa-1.0
     */

    export namespace VaFeature {
        export const $gtype: GObject.GType<VaFeature>;
    }

    /**
     * @gir-type Enum
     * @since 1.22
     */
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
     * @gir-type Enum
     * @since 1.20
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

    /**
     * @since 1.22
     */
    const ALLOCATOR_VASURFACE: string;
    /**
     * @since 1.20
     */
    const CAPS_FEATURE_MEMORY_VA: string;
    /**
     * Flag indicating that we should map the VASurfaceID instead of to
     * system memory, so users can use libva primitives to operate with
     * that surface.
     * @since 1.22
     */
    const MAP_VA: number;
    /**
     * @since 1.20
     */
    const VA_DISPLAY_HANDLE_CONTEXT_TYPE_STR: string;
    /**
     * Video alignment is not handled as expected by VA since it uses
     * opaque surfaces, not directly mappable memory. Still, decoders
     * might need to request bigger surfaces for coded size rather than
     * display sizes. This method will set the coded size to bufferpool's
     * configuration, out of the typical video aligment.
     * @param config the {@link Gst.Structure} with the pool's configuration.
     * @param align a {@link GstVideo.VideoAlignment}
     * @since 1.20.2
     */
    function buffer_pool_config_set_va_alignment(config: Gst.Structure, align: GstVideo.VideoAlignment): void;
    /**
     * Sets the usage hint for the buffers handled by the buffer pool.
     * @param config the {@link Gst.Structure} with the pool's configuration.
     * @param usage_hint the VA usage hint for new VASurfaceID.
     * @param use_derived a {@link GstVa.VaFeature} for derived mapping (only used when     VA allocator).
     * @since 1.22
     */
    function buffer_pool_config_set_va_allocation_params(
        config: Gst.Structure,
        usage_hint: number,
        use_derived: VaFeature | null,
    ): void;
    /**
     * @param context a {@link Gst.Context} may contain the display
     * @param type_name a `gchar` string of the element type
     * @param render_device_path the `gchar` string of render device path
     * @returns whether we find a valid `display` in the `context`
     * @since 1.22
     */
    function context_get_va_display(
        context: Gst.Context,
        type_name: string,
        render_device_path: string,
    ): [boolean, VaDisplay];
    /**
     * Set the `display` in the `context`
     * @param context a {@link Gst.Context}
     * @param display the {@link GstVa.VaDisplay} we want to set
     * @since 1.22
     */
    function context_set_va_display(context: Gst.Context, display: VaDisplay): void;
    /**
     * Creates a new VASurfaceID with `buffer`'s allocator and attached it
     * to it.
     *
     * *This method is used only by plugin's internal VA decoder.*
     * @param buffer a {@link Gst.Buffer}
     * @returns `true` if the new VASurfaceID is attached to `buffer`     correctly; `false`, otherwise.
     * @since 1.22
     */
    function va_buffer_create_aux_surface(buffer: Gst.Buffer): boolean;
    /**
     * @param buffer a {@link Gst.Buffer}
     * @returns the display which this     `buffer` belongs to. The reference of the display is unchanged.
     * @since 1.22
     */
    function va_buffer_peek_display(buffer: Gst.Buffer): VaDisplay;
    /**
     * Query the specified context type name.
     * @param element a {@link Gst.Element}
     * @param context_type the `gchar` string specify the context type name
     * @since 1.22
     */
    function va_context_query(element: Gst.Element, context_type: string): void;
    /**
     * Get the underlying modifier for specified `format` and `usage_hint`.
     * @param display a {@link GstVa.VaDisplay}
     * @param format a {@link GstVideo.VideoFormat}
     * @param usage_hint VA usage hint
     * @returns the underlying modifier.
     * @since 1.24
     */
    function va_dmabuf_get_modifier_for_format(
        display: VaDisplay,
        format: GstVideo.VideoFormat | null,
        usage_hint: number,
    ): number;
    /**
     * It imports the array of `mem`, representing a single frame, into a
     * VASurfaceID and it's attached into every `mem`.
     * @param display a {@link GstVa.VaDisplay}
     * @param drm_info a {@link GstVideo.VideoInfoDmaDrm}
     * @param mem Memories. One     per plane.
     * @param fds array of     DMABuf file descriptors.
     * @param offset array of memory     offsets.
     * @param usage_hint VA usage hint.
     * @returns `true` if frame is imported correctly into a VASurfaceID; `false` otherwise.
     * @since 1.22
     */
    function va_dmabuf_memories_setup(
        display: VaDisplay,
        drm_info: GstVideo.VideoInfoDmaDrm,
        mem: Gst.Memory[],
        fds: never[],
        offset: number[],
        usage_hint: number,
    ): boolean;
    /**
     * Propagate `display` by posting it as {@link Gst.Context} in the pipeline's bus.
     * @param element a {@link Gst.Element}
     * @param display the {@link GstVa.VaDisplay} to propagate
     * @since 1.22
     */
    function va_element_propagate_display_context(element: Gst.Element, display: VaDisplay): void;
    /**
     * Called by the va element to ensure a valid {@link GstVa.VaDisplay}.
     * @param element a {@link Gst.Element}
     * @param render_device_path the `gchar` string of render device path
     * @returns whether a {@link GstVa.VaDisplay} exists in `display_ptr`
     * @since 1.22
     */
    function va_ensure_element_data(element: any | null, render_device_path: string): [boolean, VaDisplay];
    /**
     * Used by elements when processing their pad's queries, propagating
     * element's {@link GstVa.VaDisplay} if the processed query requests it.
     * @param element a {@link Gst.Element}
     * @param query a {@link Gst.Query} to query the context
     * @param display a {@link GstVa.VaDisplay} to answer the query
     * @returns whether we can handle the context query successfully
     * @since 1.22
     */
    function va_handle_context_query(element: Gst.Element, query: Gst.Query, display: VaDisplay): boolean;
    /**
     * Called by elements in their {@link Gst.ElementClass.SignalSignatures.set_context | Gst.ElementClass::set_context} vmethod.
     * It gets a valid {@link GstVa.VaDisplay} if `context` has it.
     * @param element a {@link Gst.Element}
     * @param context a {@link Gst.Context} may contain the display
     * @param render_device_path the `gchar` string of render device path
     * @returns whether the `display_ptr` could be successfully set to a valid {@link GstVa.VaDisplay} in the `context`
     * @since 1.22
     */
    function va_handle_set_context(
        element: Gst.Element,
        context: Gst.Context,
        render_device_path: string,
    ): [boolean, VaDisplay];
    /**
     * @param mem a {@link Gst.Memory}
     * @returns the display which     this `mem` belongs to. The reference of the display is unchanged.
     * @since 1.22
     */
    function va_memory_peek_display(mem: Gst.Memory): VaDisplay;
    namespace VaAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * There are two types of VA allocators:
     *
     * * {@link GstVa.VaAllocator}
     * * {@link GstVa.VaDmabufAllocator}
     * @gir-type Class
     * @since 1.22
     */
    class VaAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VaAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VaAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VaAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: VaDisplay, surface_formats: number[]): VaAllocator;

        // Signals

        /** @signal */
        connect<K extends keyof VaAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VaAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VaAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VaAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Allocate a new VASurfaceID backed {@link Gst.Memory}.
         * @param allocator a {@link Gst.Allocator}
         */
        static alloc(allocator: Gst.Allocator): Gst.Memory;
        /**
         * Removes all the memories in `allocator`'s pool.
         * @param allocator a {@link Gst.Allocator}
         */
        static flush(allocator: Gst.Allocator): void;
        /**
         * Gets current internal configuration of `allocator`.
         * @param allocator a {@link Gst.Allocator}
         */
        static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfo | null, number, boolean];
        /**
         * @param allocator a {@link Gst.Allocator}
         */
        static peek_display(allocator: Gst.Allocator): VaDisplay;
        /**
         * This method will populate `buffer` with pooled VASurfaceID
         * memories. It doesn't allocate new VASurfacesID.
         * @param allocator a {@link Gst.Allocator}
         * @param buffer an empty {@link Gst.Buffer}
         */
        static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        /**
         * Sets the configuration defined by `info`, `usage_hint` and
         * `use_derived` for `allocator`, and it tries the configuration, if
         * `allocator` has not allocated memories yet.
         *
         * If `allocator` has memory allocated already, and frame size and
         * format in `info` are the same as currently configured in `allocator`,
         * the rest of `info` parameters are updated internally.
         * @param allocator a {@link Gst.Allocator}
         * @param info a {@link GstVideo.VideoInfo}
         * @param usage_hint VA usage hint
         * @param feat_use_derived a {@link GstVa.VaFeature}
         */
        static set_format(
            allocator: Gst.Allocator,
            info: GstVideo.VideoInfo,
            usage_hint: number,
            feat_use_derived: VaFeature,
        ): [boolean, GstVideo.VideoInfo];
        /**
         * Populates an empty `buffer` with a VASuface backed {@link Gst.Memory}.
         * @param allocator a {@link Gst.Allocator}
         * @param buffer a {@link Gst.Buffer}
         */
        static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    }

    namespace VaDisplay {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::va-display': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            description: string;
            va_display: any;
            vaDisplay: any;
        }
    }

    /**
     * It is a generic wrapper for VADisplay. To create new instances
     * subclasses are required, depending on the display type to use
     * (v.gr. DRM, X11, Wayland, etc.).
     *
     * The purpose of this class is to be shared among pipelines via
     * {@link Gst.Context} so all the VA processing elements will use the same
     * display entry. Application developers can create their own
     * subclass, based on their display, and shared it via the synced bus
     * message for the application.
     * @gir-type Class
     * @since 1.20
     */
    class VaDisplay extends Gst.Object {
        static $gtype: GObject.GType<VaDisplay>;

        // Properties

        get description(): string;
        get va_display(): any;
        get vaDisplay(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VaDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VaDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof VaDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VaDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VaDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VaDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This is called when the subclass has to create the internal
         * VADisplay.
         * @virtual
         */
        vfunc_create_va_display(): any | null;

        // Methods

        /**
         * @param major major version to check
         * @param minor minor version to check
         * @returns whether driver version is equal or greater than `major`.`minor`
         */
        check_version(major: number, minor: number): boolean;
        /**
         * Get the the {@link GstVa.VaImplementation} type of `self`.
         * @returns {@link GstVa.VaImplementation}.
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
         * @returns `true` if the VA driver can be initialized; `false`     otherwise
         */
        initialize(): boolean;
    }

    namespace VaDisplayDrm {
        // Signal signatures
        interface SignalSignatures extends VaDisplay.SignalSignatures {
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::va-display': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends VaDisplay.ConstructorProps {
            path: string;
        }
    }

    /**
     * This is a {@link GstVa.VaDisplay} subclass to instantiate with DRM devices.
     * @gir-type Class
     * @since 1.20
     */
    class VaDisplayDrm extends VaDisplay {
        static $gtype: GObject.GType<VaDisplayDrm>;

        // Properties

        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VaDisplayDrm.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VaDisplayDrm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_path(path: string): VaDisplayDrm;

        // Signals

        /** @signal */
        connect<K extends keyof VaDisplayDrm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDisplayDrm.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VaDisplayDrm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDisplayDrm.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VaDisplayDrm.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VaDisplayDrm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VaDisplayWrapped {
        // Signal signatures
        interface SignalSignatures extends VaDisplay.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::va-display': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends VaDisplay.ConstructorProps {}
    }

    /**
     * This is a {@link GstVa.VaDisplay} instantiaton subclass for custom created
     * VADisplay, such as X11 or Wayland, wrapping it.
     * @gir-type Class
     * @since 1.20
     */
    class VaDisplayWrapped extends VaDisplay {
        static $gtype: GObject.GType<VaDisplayWrapped>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VaDisplayWrapped.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VaDisplayWrapped.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](handle?: any | null): VaDisplayWrapped;

        // Signals

        /** @signal */
        connect<K extends keyof VaDisplayWrapped.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDisplayWrapped.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VaDisplayWrapped.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDisplayWrapped.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VaDisplayWrapped.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VaDisplayWrapped.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VaDmabufAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * A pooled memory allocator backed by the DMABufs exported from a
     * VASurfaceID. Also it is possible to import DMAbufs into a
     * VASurfaceID.
     * @gir-type Class
     * @since 1.22
     */
    class VaDmabufAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VaDmabufAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VaDmabufAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VaDmabufAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: VaDisplay): VaDmabufAllocator;

        // Signals

        /** @signal */
        connect<K extends keyof VaDmabufAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDmabufAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VaDmabufAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaDmabufAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VaDmabufAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VaDmabufAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Removes all the memories in `allocator`'s pool.
         * @param allocator a {@link Gst.Allocator}
         */
        static flush(allocator: Gst.Allocator): void;
        /**
         * Gets current internal configuration of `allocator`.
         * @param allocator a {@link Gst.Allocator}
         */
        static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfoDmaDrm | null, number];
        /**
         * This method will populate `buffer` with pooled VASurfaceID/DMABuf
         * memories. It doesn't allocate new VASurfacesID.
         * @param allocator a {@link Gst.Allocator}
         * @param buffer an empty {@link Gst.Buffer}
         */
        static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        /**
         * Sets the configuration defined by `info` and `usage_hint` for
         * `allocator`, and it tries the configuration, if `allocator` has not
         * allocated memories yet.
         *
         * If `allocator` has memory allocated already, and frame size, format
         * and modifier in `info` are the same as currently configured in
         * `allocator`, the rest of `info` parameters are updated internally.
         * @param allocator a {@link Gst.Allocator}
         * @param usage_hint VA usage hint
         */
        static set_format(allocator: Gst.Allocator, usage_hint: number): [boolean, GstVideo.VideoInfoDmaDrm];
        /**
         * This function creates a new VASurfaceID and exposes its DMABufs,
         * later it populates the `buffer` with those DMABufs.
         * @param allocator a {@link Gst.Allocator}
         * @param buffer an empty {@link Gst.Buffer}
         */
        static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    }

    namespace VaPool {
        // Signal signatures
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * `GstVaPool` is a buffer pool for VA allocators.
     * @gir-type Class
     * @since 1.22
     */
    class VaPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VaPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VaPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VaPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VaPool;

        static new_with_config(
            caps: Gst.Caps,
            min_buffers: number,
            max_buffers: number,
            usage_hint: number,
            use_derived: VaFeature,
            allocator: Gst.Allocator,
            alloc_params: Gst.AllocationParams,
        ): VaPool;

        // Signals

        /** @signal */
        connect<K extends keyof VaPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VaPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VaPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VaPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VaPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Helper function to retrieve the VA surface size provided by `pool`.
         * @param pool a {@link Gst.BufferPool}
         */
        static get_buffer_size(pool: Gst.BufferPool): [boolean, number];
        /**
         * Retuns: `true` if `pool` always add {@link GstVideo.VideoMeta} to its
         *     buffers. Otherwise, `false`.
         * @param pool the {@link Gst.BufferPool}
         */
        static requires_video_meta(pool: Gst.BufferPool): boolean;
    }

    /**
     * @gir-type Alias
     */
    type VaDisplayClass = typeof VaDisplay;
    /**
     * @gir-type Alias
     */
    type VaDisplayDrmClass = typeof VaDisplayDrm;
    /**
     * @gir-type Alias
     */
    type VaDisplayWrappedClass = typeof VaDisplayWrapped;
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
