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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gly {
    /**
     * Gly-2
     */

    /**
     * Errors that can appear while loading images.
     * @gir-type Struct
     */
    class LoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic type for all other errors.
         * @since 2.0
         */
        static FAILED: number;
        /**
         * Unknown image format.
         * @since 2.0
         */
        static UNKNOWN_IMAGE_FORMAT: number;
        /**
         * Reached last frame in an animation with {@link FrameRequest.set_loop_animation} to `FALSE`.
         * @since 2.0.1
         */
        static NO_MORE_FRAMES: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Error quark for {@link GlyLoaderError}
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace MemoryFormat {
        export const $gtype: GObject.GType<MemoryFormat>;
    }

    /**
     * Memory format
     * @gir-type Enum
     * @since 2.0
     */
    enum MemoryFormat {
        /**
         * 8-bit RGRA premultiplied
         */
        B8G8R8A8_PREMULTIPLIED,
        /**
         * 8-bit ARGB premultiplied
         */
        A8R8G8B8_PREMULTIPLIED,
        /**
         * 8-bit RGBA premultiplied
         */
        R8G8B8A8_PREMULTIPLIED,
        /**
         * 8-bit RGBA
         */
        B8G8R8A8,
        /**
         * 8-bit AGBR
         */
        A8R8G8B8,
        /**
         * 8-bit RGBA
         */
        R8G8B8A8,
        /**
         * 8-bit ABGR
         */
        A8B8G8R8,
        /**
         * 8-bit RGB
         */
        R8G8B8,
        /**
         * 8-bit BGR
         */
        B8G8R8,
        /**
         * 16-bit RGB
         */
        R16G16B16,
        /**
         * 16-bit RGBA premultiplied
         */
        R16G16B16A16_PREMULTIPLIED,
        /**
         * 16-bit RGBA
         */
        R16G16B16A16,
        /**
         * 16-bit float RGB
         */
        R16G16B16_FLOAT,
        /**
         * 16-bit float RGBA
         */
        R16G16B16A16_FLOAT,
        /**
         * 32-bit float RGB
         */
        R32G32B32_FLOAT,
        /**
         * 32-bit float RGBA premultiplied
         */
        R32G32B32A32_FLOAT_PREMULTIPLIED,
        /**
         * 16-bit float RGBA
         */
        R32G32B32A32_FLOAT,
        /**
         * 8-bit gray with alpha premultiplied
         */
        G8A8_PREMULTIPLIED,
        /**
         * 8-bit gray with alpha
         */
        G8A8,
        /**
         * 8-bit gray
         */
        G8,
        /**
         * 16-bit gray with alpha premultiplied
         */
        G16A16_PREMULTIPLIED,
        /**
         * 16-bit gray with alpha
         */
        G16A16,
        /**
         * 16-bit gray
         */
        G16,
    }

    /**
     * @gir-type Enum
     */
    export namespace SandboxSelector {
        export const $gtype: GObject.GType<SandboxSelector>;
    }

    /**
     * Sandbox mechanisms
     *
     * ::: warning
     *     Using `GLY_SANDBOX_SELECTOR_NOT_SANDBOXED` will disable an important security layer that sandboxes loaders. It is only intended for testing and development purposes.
     * @gir-type Enum
     * @since 2.0
     */
    enum SandboxSelector {
        /**
         * This mode selects `bwrap` outside of Flatpaks and usually
         *  `flatpak-spawn` inside of Flatpaks. The sandbox is disabled
         *  automatically inside of Flatpak development environments.
         *  Inside of Flatpaks, `flatpak-spawn` is used to create the sandbox. This
         *  mechanism starts an installed Flatpak with the same app id. For
         *  development, Flatpak are usually not installed and the sandbox can
         *  therefore not be used. If the sandbox has been started via
         *  `flatpak-builder --run` (i.e. without installed Flatpak) and the app id
         *  ends with `Devel`, the sandbox is disabled.
         */
        AUTO,
        /**
         * bwrap
         */
        BWRAP,
        /**
         * flatpak-spawn
         */
        FLATPAK_SPAWN,
        /**
         * Disable sandbox. Unsafe, only use for testing and development.
         */
        NOT_SANDBOXED,
    }

    /**
     * Error quark for {@link GlyLoaderError}
     * @returns The error domain
     */
    function loader_error_quark(): GLib.Quark;
    /**
     * Whether a memory format has an alpha channel
     * @param memory_format
     * @returns Returns `TRUE` if the memory format has an alpha channel
     * @since 2.0
     */
    function memory_format_has_alpha(memory_format: MemoryFormat | null): boolean;
    /**
     * Whether a memory format has an alpha channel and the color values are
     * premultiplied with the alpha value
     * @param memory_format
     * @returns Returns `TRUE` if color channels are premultiplied
     * @since 2.0
     */
    function memory_format_is_premultiplied(memory_format: MemoryFormat | null): boolean;
    /**
     * @gir-type Callback
     */
    interface LoaderGetMimeTypesDoneFunc {
        (mime_types: string[], data?: any | null): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace MemoryFormatSelection {
        export const $gtype: GObject.GType<MemoryFormatSelection>;
    }

    /**
     * Memory format selection
     * @gir-type Flags
     * @since 2.0
     */
    enum MemoryFormatSelection {
        /**
         * 8-bit BGRA premultiplied
         */
        B8G8R8A8_PREMULTIPLIED,
        /**
         * 8-bit ARGB premultiplied
         */
        A8R8G8B8_PREMULTIPLIED,
        /**
         * 8-bit RGBA premultiplied
         */
        R8G8B8A8_PREMULTIPLIED,
        /**
         * 8-bit BGRA
         */
        B8G8R8A8,
        /**
         * 8-bit ARGB
         */
        A8R8G8B8,
        /**
         * 8-bit RGBA
         */
        R8G8B8A8,
        /**
         * 8-bit ABGR
         */
        A8B8G8R8,
        /**
         * 8-bit RGB
         */
        R8G8B8,
        /**
         * 8-bit BGR
         */
        B8G8R8,
        /**
         * 16-bit RGB
         */
        R16G16B16,
        /**
         * 16-bit RGBA premultiplied
         */
        R16G16B16A16_PREMULTIPLIED,
        /**
         * 16-bit RGBA
         */
        R16G16B16A16,
        /**
         * 16-bit float RGB
         */
        R16G16B16_FLOAT,
        /**
         * 16-bit float RGBA
         */
        R16G16B16A16_FLOAT,
        /**
         * 32-bit float RGB
         */
        R32G32B32_FLOAT,
        /**
         * 32-bit float RGBA premultiplied
         */
        R32G32B32A32_FLOAT_PREMULTIPLIED,
        /**
         * 16-bit float RGBA
         */
        R32G32B32A32_FLOAT,
        /**
         * 8-bit gray with alpha premultiplied
         */
        G8A8_PREMULTIPLIED,
        /**
         * 8-bit gray with alpha
         */
        G8A8,
        /**
         * 8-bit gray
         */
        G8,
        /**
         * 16-bit gray with alpha premultiplied
         */
        G16A16_PREMULTIPLIED,
        /**
         * 16-bit gray with alpha
         */
        G16A16,
        /**
         * 16-bit gray
         */
        G16,
    }

    namespace Creator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::sandbox-selector': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mime_type: string;
            mimeType: string;
            sandbox_selector: SandboxSelector;
            sandboxSelector: SandboxSelector;
        }
    }

    /**
     * Image creator
     *
     * ```c
     * #include <glycin.h>
     *
     * GlyCreator *creator = gly_creator_new("image/jpeg", NULL);
     *
     * if (!creator)
     *   return;
     *
     * // Create frame with a single red pixel
     * guint8 data[] = {255, 0, 0};
     * gsize length = sizeof(data);
     * GBytes *texture = g_bytes_new(data, length);
     * GlyNewFrame *new_frame = gly_creator_add_frame(creator, 1, 1, GLY_MEMORY_R8G8B8, texture, NULL);
     *
     * // Create JPEG
     * GlyEncodedImage *encoded_image = gly_creator_create(creator, NULL);
     *
     * if (encoded_image)
     * {
     *   GBytes *binary_data = gly_encoded_image_get_data(encoded_image);
     *   if (binary_data)
     *   {
     *     // Write image to file
     *     GFile *file = g_file_new_for_path("test.jpg");
     *     g_file_replace_contents(
     *         file,
     *         g_bytes_get_data(binary_data, NULL),
     *         g_bytes_get_size(binary_data),
     *         NULL,
     *         FALSE,
     *         G_FILE_CREATE_NONE,
     *         NULL,
     *         NULL,
     *         NULL);
     *   }
     * }
     * ```
     * @gir-type Class
     * @since 2.0
     */
    class Creator extends GObject.Object {
        static $gtype: GObject.GType<Creator>;

        // Properties

        /**
         * @construct-only
         */
        get mime_type(): string;
        /**
         * @construct-only
         */
        get mimeType(): string;
        get sandbox_selector(): SandboxSelector;
        set sandbox_selector(val: SandboxSelector);
        get sandboxSelector(): SandboxSelector;
        set sandboxSelector(val: SandboxSelector);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Creator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Creator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mime_type: string): Creator;

        // Signals

        /** @signal */
        connect<K extends keyof Creator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Creator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Creator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Creator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Creator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Creator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param width
         * @param height
         * @param memory_format
         * @param texture Texture data
         * @returns a new {@link NewFrame}
         */
        add_frame(
            width: number,
            height: number,
            memory_format: MemoryFormat | null,
            texture: GLib.Bytes | Uint8Array,
        ): NewFrame;
        /**
         * @param width
         * @param height `stride`
         * @param stride
         * @param memory_format
         * @param texture Texture data
         * @returns a new {@link NewFrame}
         */
        add_frame_with_stride(
            width: number,
            height: number,
            stride: number,
            memory_format: MemoryFormat | null,
            texture: GLib.Bytes | Uint8Array,
        ): NewFrame;
        /**
         * Add metadata that are stored as key-value pairs.
         * A prominent example are PNG's `tEXt` chunks.
         *
         * If an entry with `key` already exists, it will be replaced.
         * @param key A null-terminated string.
         * @param value A null-terminated string.
         * @returns `TRUE` if format supports key-value storage.
         */
        add_metadata_key_value(key: string, value: string): boolean;
        /**
         * @returns The encoded image.
         */
        create(): EncodedImage | null;
        /**
         * Asynchronous version of {@link Creator.create}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         */
        create_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<EncodedImage>;
        /**
         * Asynchronous version of {@link Creator.create}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        create_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronous version of {@link Creator.create}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        create_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<EncodedImage> | void;
        /**
         * Finishes the {@link Creator.create_async} call.
         * @param result A {@link Gio.AsyncResult}
         * @returns Encoded image.
         */
        create_finish(result: Gio.AsyncResult): EncodedImage;
        /**
         * @param compression Value between 0 and 100
         * @returns `TRUE` if the format supports compression setting.
         */
        set_encoding_compression(compression: number): boolean;
        /**
         * @param quality Value between 0 and 100
         * @returns `TRUE` if format supports a quality setting.
         */
        set_encoding_quality(quality: number): boolean;
        /**
         * Selects which sandbox mechanism should be used. The default without calling this function is {@link SandboxSelector}`.AUTO`.
         * @param sandbox_selector Method by which the sandbox mechanism is selected
         */
        set_sandbox_selector(sandbox_selector: SandboxSelector | null): boolean;
    }

    namespace EncodedImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes;
        }
    }

    /**
     * Encoded image
     * @gir-type Class
     * @since 2.0
     */
    class EncodedImage extends GObject.Object {
        static $gtype: GObject.GType<EncodedImage>;

        // Properties

        /**
         * @read-only
         */
        get data(): GLib.Bytes;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodedImage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodedImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EncodedImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodedImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodedImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodedImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodedImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodedImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The encoded image data
         */
        get_data(): GLib.Bytes;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
    }

    namespace Frame {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A frame of an image often being the complete image.
     * @gir-type Class
     * @since 2.0
     */
    class Frame extends GObject.Object {
        static $gtype: GObject.GType<Frame>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Frame.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Frame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Frame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Frame.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Frame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Image data arranged according to {@link Frame.get_memory_format}
         * @returns Image data
         */
        get_buf_bytes(): GLib.Bytes;
        /**
         * Returns the CICP (coding-independent code point) for the frames texture.
         * This value is `NULL` if no CICP is used.
         * @returns CICP
         */
        get_color_cicp(): Cicp | null;
        /**
         * Duration to show frame for animations.
         *
         * If the value is zero, the image is not animated.
         * @returns Duration in microseconds.
         */
        get_delay(): number;
        /**
         * Height for image data in pixels
         * @returns Height in pixels
         */
        get_height(): number;
        /**
         * Format of the image data in {@link Gly.Frame.get_buf_bytes}
         * @returns Format of image data
         */
        get_memory_format(): MemoryFormat;
        /**
         * Width of a row for image data in bytes
         * @returns Row stride in bytes
         */
        get_stride(): number;
        /**
         * Width for image data in pixels
         * @returns Width in pixels
         */
        get_width(): number;
    }

    namespace FrameRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::loop-animation': (pspec: GObject.ParamSpec) => void;
            'notify::scale-height': (pspec: GObject.ParamSpec) => void;
            'notify::scale-width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            loop_animation: boolean;
            loopAnimation: boolean;
            scale_height: number;
            scaleHeight: number;
            scale_width: number;
            scaleWidth: number;
        }
    }

    /**
     * Defines which parts of an image to load.
     *
     * ::: warning
     *     Loaders can and frequently will ignore instructions set in
     *     {@link Gly.FrameRequest}. The reason is that for most loaders
     *     many instructions don't have a meaningful interpretation.
     * @gir-type Class
     * @since 2.0
     */
    class FrameRequest extends GObject.Object {
        static $gtype: GObject.GType<FrameRequest>;

        // Properties

        get loop_animation(): boolean;
        set loop_animation(val: boolean);
        get loopAnimation(): boolean;
        set loopAnimation(val: boolean);
        /**
         * @read-only
         */
        get scale_height(): number;
        /**
         * @read-only
         */
        get scaleHeight(): number;
        /**
         * @read-only
         */
        get scale_width(): number;
        /**
         * @read-only
         */
        get scaleWidth(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FrameRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FrameRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FrameRequest;

        // Signals

        /** @signal */
        connect<K extends keyof FrameRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FrameRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FrameRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FrameRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FrameRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FrameRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Controls if first frame is returned after last frame
         *
         * By default, this option is set to `TRUE`, returning the first frame, if
         * the previously requested frame was the last frame.
         * @param loop_animation
         */
        set_loop_animation(loop_animation: boolean): void;
        /**
         * Set maximum dimensions for the frame. The texture will be scaled
         * to be within the maximum dimensions while keeping its aspect ratio.
         * This option is especially useful to SVGs which will be rendered at
         * the respective size.
         *
         * ::: warning
         *     Most loaders will ignore this option. Currently, only the SVG
         *     loader is known to obey it.
         * @param width Maximum width
         * @param height Maximum height
         */
        set_scale(width: number, height: number): void;
    }

    namespace Image {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Image handle containing metadata and allowing frame requests.
     * @gir-type Class
     * @since 2.0
     */
    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * See {@link Image.get_width}
         * @returns height
         */
        get_height(): number;
        /**
         * Get metadata that are stored as key-value pairs.
         * A prominent example are PNG's `tEXt` and `zTXt` chunks.
         *
         * ::: note
         *     In contrast to gdk-pixbuf's *option* feature, the
         *     keys do not carry prefixes like `tEXt::` or `zTXt::`.
         * @param key A null-terminated string.
         * @returns The UTF-8 encoded value associated with `key`.
         */
        get_metadata_key_value(key: string): string | null;
        /**
         * Get the list of available keys for {@link Image.get_metadata_key_value}.
         * @returns List of existing keys.
         */
        get_metadata_keys(): string[];
        /**
         * Returns detected MIME type of the file
         * @returns MIME type
         */
        get_mime_type(): string;
        /**
         * @param frame_request
         * @returns Loaded frame.
         */
        get_specific_frame(frame_request: FrameRequest): Frame;
        /**
         * Asynchronous version of {@link Image.get_specific_frame}.
         * @param frame_request
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         */
        get_specific_frame_async(
            frame_request: FrameRequest,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Frame>;
        /**
         * Asynchronous version of {@link Image.get_specific_frame}.
         * @param frame_request
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        get_specific_frame_async(
            frame_request: FrameRequest,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous version of {@link Image.get_specific_frame}.
         * @param frame_request
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        get_specific_frame_async(
            frame_request: FrameRequest,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Frame> | void;
        /**
         * Finishes the {@link Image.get_specific_frame_async} call.
         * @param result a {@link Gio.AsyncResult}
         * @returns Loaded frame.
         */
        get_specific_frame_finish(result: Gio.AsyncResult): Frame;
        /**
         * Get the image orientation
         *
         * The image orientation is given in Exif format. The function is
         * guaranteed to only return values from 1 to 8.
         *
         * If {@link Loader.set_apply_transformations} is set to `FALSE`,
         * the orientation has to be corrected manually to display the image
         * correctly.
         */
        get_transformation_orientation(): number;
        /**
         * Early width information.
         *
         * This information is often correct. However, it should only be used for
         * an early rendering estimates. For everything else, the specific frame
         * information should be used. See {@link Frame.get_width}.
         * @returns Width
         */
        get_width(): number;
        /**
         * Synchronously loads texture and information of the next frame.
         *
         * For single still images, this can only be called once.
         * For animated images, this function will loop to the first frame, when the last frame is reached.
         * @returns a new {@link Frame} on success, or `NULL` with `error` filled in
         */
        next_frame(): Frame;
        /**
         * Asynchronous version of {@link Image.next_frame}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         */
        next_frame_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Frame>;
        /**
         * Asynchronous version of {@link Image.next_frame}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        next_frame_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronous version of {@link Image.next_frame}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        next_frame_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Frame> | void;
        /**
         * Finishes the {@link Image.next_frame_async} call.
         * @param result a {@link Gio.AsyncResult}
         * @returns Loaded frame.
         */
        next_frame_finish(result: Gio.AsyncResult): Frame;
    }

    namespace Loader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::apply-transformation': (pspec: GObject.ParamSpec) => void;
            'notify::bytes': (pspec: GObject.ParamSpec) => void;
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::memory-format-selection': (pspec: GObject.ParamSpec) => void;
            'notify::sandbox-selector': (pspec: GObject.ParamSpec) => void;
            'notify::stream': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            apply_transformation: boolean;
            applyTransformation: boolean;
            bytes: GLib.Bytes;
            cancellable: Gio.Cancellable;
            file: Gio.File;
            memory_format_selection: MemoryFormatSelection;
            memoryFormatSelection: MemoryFormatSelection;
            sandbox_selector: SandboxSelector;
            sandboxSelector: SandboxSelector;
            stream: Gio.InputStream;
        }
    }

    /**
     * {@link Loader} prepares loading an image.
     *
     * The following example shows how to obtain a `Gdk.Texture`. It uses
     * [GlyGtk4](https://gnome.pages.gitlab.gnome.org/glycin/libglycin-gtk4)
     * for this.
     *
     * ```c
     * #include <glycin-gtk4.h>
     *
     * file = g_file_new_for_path ("test.png");
     * loader = gly_loader_new (file);
     * image = gly_loader_load (loader, NULL);
     * if (image)
     *   {
     *     frame = gly_image_next_frame (image, NULL);
     *     if (frame)
     *       {
     *         texture = gly_gtk_frame_get_texture (frame);
     *         g_print ("Image height: %d\n", gdk_texture_get_height (texture));
     *         image_widget = gtk_image_new_from_paintable (GDK_PAINTABLE (texture));
     *       }
     *   }
     * ```
     * @gir-type Class
     * @since 2.0
     */
    class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;

        // Properties

        get apply_transformation(): boolean;
        set apply_transformation(val: boolean);
        get applyTransformation(): boolean;
        set applyTransformation(val: boolean);
        /**
         * @construct-only
         */
        get bytes(): GLib.Bytes;
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);
        /**
         * @construct-only
         */
        get file(): Gio.File;
        get memory_format_selection(): MemoryFormatSelection;
        set memory_format_selection(val: MemoryFormatSelection);
        get memoryFormatSelection(): MemoryFormatSelection;
        set memoryFormatSelection(val: MemoryFormatSelection);
        get sandbox_selector(): SandboxSelector;
        set sandbox_selector(val: SandboxSelector);
        get sandboxSelector(): SandboxSelector;
        set sandboxSelector(val: SandboxSelector);
        /**
         * @construct-only
         */
        get stream(): Gio.InputStream;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Loader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): Loader;

        static new_for_bytes(bytes: GLib.Bytes | Uint8Array): Loader;

        static new_for_stream(stream: Gio.InputStream): Loader;

        // Signals

        /** @signal */
        connect<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Loader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Loader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns a list of MIME types currently supported for loading images.
         *
         * This list is generated from the config on first use of a loader or
         * call of this function and cached afterwards. Hence, the first call
         * can be blocking.
         */
        static get_mime_types(): string[];
        /**
         * Async variant of {@link Loader.get_mime_types}
         * @param cancellable
         * @param callback
         */
        static get_mime_types_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Loader> | null,
        ): void;
        /**
         * Finishes the {@link Loader.get_mime_types_async} call.
         * @param result A {@link Gio.AsyncResult}
         */
        static get_mime_types_finish(result: Gio.AsyncResult): string[];

        // Methods

        /**
         * Synchronously loads an image and returns an {@link Image} when successful.
         * @returns a new {@link Image} on success, or `NULL` with `error` filled in
         */
        load(): Image;
        /**
         * Asynchronous version of {@link Loader.load}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         */
        load_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Image>;
        /**
         * Asynchronous version of {@link Loader.load}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronous version of {@link Loader.load}.
         * @param cancellable A {@link Gio.Cancellable} to cancel the operation
         * @param callback A callback to call when the operation is complete
         */
        load_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Image> | void;
        /**
         * Finishes the {@link Loader.load_async} call.
         * @param result A {@link Gio.AsyncResult}
         * @returns Loaded image.
         */
        load_finish(result: Gio.AsyncResult): Image;
        /**
         * Sets which memory formats can be returned by the loader
         *
         * If the memory format doesn't match one of the selected formats, the
         * format will be transformed into the best suitable format selected.
         * @param memory_format_selection Accepted memory formats
         */
        set_accepted_memory_formats(memory_format_selection: MemoryFormatSelection | null): void;
        /**
         * Set whether to apply transformations to texture
         *
         * When enabled, transformations like image orientation are applied to the
         * texture data.
         *
         * This option is enabled by default.
         * @param apply_transformations
         */
        set_apply_transformations(apply_transformations: boolean): void;
        /**
         * Selects which sandbox mechanism should be used. The default without calling this function is {@link SandboxSelector}`.AUTO`.
         * @param sandbox_selector Method by which the sandbox mechanism is selected
         */
        set_sandbox_selector(sandbox_selector: SandboxSelector | null): void;
    }

    namespace NewFrame {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * New frame
     * @gir-type Class
     * @since 2.0
     */
    class NewFrame extends GObject.Object {
        static $gtype: GObject.GType<NewFrame>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NewFrame.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NewFrame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NewFrame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NewFrame.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NewFrame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NewFrame.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NewFrame.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NewFrame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param icc_profile ICC profile
         * @returns `TRUE` if format supports ICC color profiles.
         */
        set_color_icc_profile(icc_profile: GLib.Bytes | Uint8Array): boolean;
    }

    /**
     * See ITU-T H.273
     * @gir-type Struct
     * @since 2.0
     */
    class Cicp {
        static $gtype: GObject.GType<Cicp>;

        // Fields

        color_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        video_full_range_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                color_primaries: number;
                transfer_characteristics: number;
                matrix_coefficients: number;
                video_full_range_flag: number;
            }>,
        );

        // Methods

        copy(): Cicp;
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type CreatorClass = typeof Creator;
    /**
     * @gir-type Alias
     */
    type EncodedImageClass = typeof EncodedImage;
    /**
     * @gir-type Alias
     */
    type FrameClass = typeof Frame;
    /**
     * @gir-type Alias
     */
    type FrameRequestClass = typeof FrameRequest;
    /**
     * @gir-type Alias
     */
    type ImageClass = typeof Image;
    /**
     * @gir-type Alias
     */
    type LoaderClass = typeof Loader;
    /**
     * @gir-type Alias
     */
    type NewFrameClass = typeof NewFrame;
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

export default Gly;

// END
