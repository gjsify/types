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
import type win32 from '@girs/win32-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace GdkWin32 {
    /**
     * GdkWin32-4.0
     */

    /**
     * Error enumeration for GTK's Direct3D 12 integration.
     * @gir-type Enum
     * @since 4.20
     */
    enum D3D12Error {
        /**
         * D3D12 support is not available, because the OS
         *   is not Windows, the Windows version is not recent enough, or it was explicitly
         *   disabled at compile- or runtime
         */
        NOT_AVAILABLE,
        /**
         * The requested format is not supported
         */
        UNSUPPORTED_FORMAT,
        /**
         * GTK failed to create the resource for other
         *   reasons
         */
        CREATION_FAILED,
    }

    /**
     * Specifies the result of applying a {@link GdkWin32.Win32MessageFilterFunc} to a Windows message.
     * @gir-type Enum
     */
    enum Win32MessageFilterReturn {
        /**
         * event not handled, continue processing.
         */
        CONTINUE,
        /**
         * event handled, terminate processing.
         */
        REMOVE,
    }

    /**
     * Registers an error quark for {@link Gdk.Win32.D3d12Texture} errors.
     * @returns the error quark
     */
    function d3d12_error_quark(): GLib.Quark;
    /**
     * @param handle
     */
    function win32_handle_table_lookup(handle: win32.HWND): any | null;
    /**
     * @gir-type Callback
     */
    interface Win32MessageFilterFunc {
        (display: Win32Display, message: win32.MSG, return_value: number): Win32MessageFilterReturn;
    }
    namespace D3D12Texture {
        // Signal signatures
        interface SignalSignatures extends Gdk.Texture.SignalSignatures {
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gdk.Texture.ConstructorProps,
                Gdk.Paintable.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {}
    }

    /**
     * A {@link Gdk.Texture} representing a [ID3D12Resource](https://learn.microsoft.com/en-us/windows/win32/api/d3d12/nn-d3d12-id3d12resource).
     *
     * To create a {@link GdkWin32.D3D12Texture}, use the auxiliary
     * {@link Gdk.Win32.D3d12TextureBuilder} object.
     *
     * D3D12 textures can only be created on Windows.
     * @gir-type Class
     * @since 4.20
     */
    class D3D12Texture extends Gdk.Texture implements Gdk.Paintable, Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<D3D12Texture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: D3D12Texture.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<D3D12Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof D3D12Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, D3D12Texture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof D3D12Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, D3D12Texture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof D3D12Texture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<D3D12Texture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         *
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         *
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         *
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         * @virtual
         */
        vfunc_get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @virtual
         */
        vfunc_get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_width(): number;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @virtual
         */
        vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         *
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;
        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         */
        load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
    }

    namespace D3D12TextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::fence': (pspec: GObject.ParamSpec) => void;
            'notify::fence-wait': (pspec: GObject.ParamSpec) => void;
            'notify::premultiplied': (pspec: GObject.ParamSpec) => void;
            'notify::resource': (pspec: GObject.ParamSpec) => void;
            'notify::update-region': (pspec: GObject.ParamSpec) => void;
            'notify::update-texture': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_state: Gdk.ColorState | null;
            colorState: Gdk.ColorState | null;
            fence: any | null;
            fence_wait: bigint | number;
            fenceWait: bigint | number;
            premultiplied: boolean;
            resource: any | null;
            update_region: cairo.Region | null;
            updateRegion: cairo.Region | null;
            update_texture: Gdk.Texture | null;
            updateTexture: Gdk.Texture | null;
        }
    }

    /**
     * {@link GdkWin32.D3D12TextureBuilder} is a builder used to construct {@link Gdk.Texture}
     * objects from [ID3D12Resources](https://learn.microsoft.com/en-us/windows/win32/api/d3d12/nn-d3d12-id3d12resource).
     *
     * The operation of {@link GdkWin32.D3D12TextureBuilder} is quite simple: Create a texture builder,
     * set all the necessary properties, and then call {@link Gdk.D3d12TextureBuilder.build}
     * to create the new texture.
     *
     * Not all `D3D12Resources` can be used. You have to use a texture resource for a {@link Gdk.Texture}.
     * GDK will attempt to detect invalid resources and fail to create the texture in that case.
     *
     * {@link GdkWin32.D3D12TextureBuilder} can be used for quick one-shot construction of
     * textures as well as kept around and reused to construct multiple textures.
     * @gir-type Class
     * @since 4.20
     */
    class D3D12TextureBuilder extends GObject.Object {
        static $gtype: GObject.GType<D3D12TextureBuilder>;

        // Properties

        /**
         * The color state of the texture.
         * @since 4.20
         */
        get color_state(): Gdk.ColorState | null;
        set color_state(val: Gdk.ColorState | null);
        /**
         * The color state of the texture.
         * @since 4.20
         */
        get colorState(): Gdk.ColorState | null;
        set colorState(val: Gdk.ColorState | null);
        /**
         * The optional `ID3D12Fence` to wait on before using the resource.
         * @since 4.20
         */
        get fence(): any | null;
        set fence(val: any | null);
        /**
         * The value the fence should wait on
         * @since 4.20
         * @default 0
         */
        get fence_wait(): number;
        set fence_wait(val: bigint | number);
        /**
         * The value the fence should wait on
         * @since 4.20
         * @default 0
         */
        get fenceWait(): number;
        set fenceWait(val: bigint | number);
        /**
         * Whether the alpha channel is premultiplied into the others.
         *
         * Only relevant if the format has alpha.
         * @since 4.20
         * @default true
         */
        get premultiplied(): boolean;
        set premultiplied(val: boolean);
        /**
         * The `ID3D12Resource`
         * @since 4.20
         */
        get resource(): any | null;
        set resource(val: any | null);
        /**
         * The update region for {@link Gdk.D3d12TextureBuilder.update_texture}.
         * @since 4.20
         */
        get update_region(): cairo.Region | null;
        set update_region(val: cairo.Region | null);
        /**
         * The update region for {@link Gdk.D3d12TextureBuilder.update_texture}.
         * @since 4.20
         */
        get updateRegion(): cairo.Region | null;
        set updateRegion(val: cairo.Region | null);
        /**
         * The texture {@link Gdk.D3d12TextureBuilder.update_region} is an update for.
         * @since 4.20
         */
        get update_texture(): Gdk.Texture | null;
        set update_texture(val: Gdk.Texture | null);
        /**
         * The texture {@link Gdk.D3d12TextureBuilder.update_region} is an update for.
         * @since 4.20
         */
        get updateTexture(): Gdk.Texture | null;
        set updateTexture(val: Gdk.Texture | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: D3D12TextureBuilder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<D3D12TextureBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): D3D12TextureBuilder;

        // Signals

        /** @signal */
        connect<K extends keyof D3D12TextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, D3D12TextureBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof D3D12TextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, D3D12TextureBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof D3D12TextureBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<D3D12TextureBuilder.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Builds a new {@link Gdk.Texture} with the values set up in the builder.
         *
         * It is a programming error to call this function if any mandatory property has not been set.
         *
         * Not all formats defined in the `drm_fourcc.h` header are supported. You can use
         * {@link Gdk.Display.get_d3d12_formats} to get a list of supported formats. If the
         * format is not supported by GTK, `null` will be returned and `error` will be set.
         *
         * The `destroy` function gets called when the returned texture gets released.
         *
         * It is the responsibility of the caller to keep the file descriptors for the planes
         * open until the created texture is no longer used, and close them afterwards (possibly
         * using the `destroy` notify).
         *
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         * @param destroy destroy function to be called when the texture is   released
         * @param data user data to pass to the destroy function
         * @returns a newly built {@link Gdk.Texture} or `NULL`   if the format is not supported
         */
        build(destroy: GLib.DestroyNotify | null, data: any | null): Gdk.Texture | null;
        /**
         * Gets the color state previously set via `gdk_d3d12_texture_builder_set_color_state()`.
         * @returns the color state
         */
        get_color_state(): Gdk.ColorState | null;
        /**
         * Returns the value that GTK should wait for on the fence
         * before using the resource.
         * @returns the fence wait value
         */
        get_fence_wait(): number;
        /**
         * Whether the data is premultiplied.
         * @returns whether the data is premultiplied
         */
        get_premultiplied(): boolean;
        /**
         * Gets the region previously set via `gdk_d3d12_texture_builder_set_update_region()` or
         * `null` if none was set.
         * @returns The region
         */
        get_update_region(): cairo.Region | null;
        /**
         * Gets the texture previously set via `gdk_d3d12_texture_builder_set_update_texture()` or
         * `null` if none was set.
         * @returns The texture
         */
        get_update_texture(): Gdk.Texture | null;
        /**
         * Sets the color state for the texture.
         *
         * By default, the colorstate is `NULL`. In that case, GTK will choose the
         * correct colorstate based on the format.
         * If you don't know what colorstates are, this is probably the right thing.
         * @param color_state a {@link Gdk.ColorState} or `NULL` to unset the colorstate.
         */
        set_color_state(color_state: Gdk.ColorState | null): void;
        /**
         * Sets the value that GTK should wait on on the given fence before using the
         * resource.
         *
         * When no fence is set, this value has no effect.
         * @param fence_wait the value to wait on
         */
        set_fence_wait(fence_wait: bigint | number): void;
        /**
         * Sets whether the data is premultiplied.
         *
         * Unless otherwise specified, all formats including alpha channels are assumed
         * to be premultiplied.
         * @param premultiplied whether the data is premultiplied
         */
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the region to be updated by this texture. Together with
         * {@link Gdk.D3d12TextureBuilder.update_texture} this describes an
         * update of a previous texture.
         *
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         *
         * An example would be a screen recording where only the mouse pointer moves.
         * @param region the region to update
         */
        set_update_region(region: cairo.Region | null): void;
        /**
         * Sets the texture to be updated by this texture. See
         * {@link Gdk.D3d12TextureBuilder.set_update_region} for an explanation.
         * @param texture the texture to update
         */
        set_update_texture(texture: Gdk.Texture | null): void;
    }

    namespace Win32Display {
        // Signal signatures
        interface SignalSignatures extends Gdk.Display.SignalSignatures {
            'notify::composited': (pspec: GObject.ParamSpec) => void;
            'notify::dmabuf-formats': (pspec: GObject.ParamSpec) => void;
            'notify::input-shapes': (pspec: GObject.ParamSpec) => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Display.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Win32Display extends Gdk.Display {
        static $gtype: GObject.GType<Win32Display>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32Display.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Win32Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieves the version of the WGL implementation.
         * @param display a {@link Gdk.Display}
         */
        static get_wgl_version(display: Gdk.Display): [boolean, number, number];

        // Methods

        /**
         * Adds an event filter to `window`, allowing you to intercept messages
         * before they reach GDK. This is a low-level operation and makes it
         * easy to break GDK and/or GTK, so you have to know what you're
         * doing.
         * @param _function filter callback
         */
        add_filter(_function: Win32MessageFilterFunc): void;
        /**
         * Retrieves the EGL display connection object for the given GDK display.
         * @returns the EGL display
         */
        get_egl_display(): any | null;
        /**
         * Remove a filter previously added with `gdk_win32_display_add_filter()`.
         * @param _function previously-added filter function
         */
        remove_filter(_function: Win32MessageFilterFunc): void;
        /**
         * Sets the cursor theme from which the images for cursor
         * should be taken.
         *
         * If the windowing system supports it, existing cursors created
         * with {@link Gdk.Cursor.new_from_name} are updated to reflect the theme
         * change. Custom cursors constructed with {@link Gdk.Cursor.new_from_texture}
         * will have to be handled by the application (GTK applications can
         * learn about cursor theme changes by listening for change notification
         * for the corresponding `GtkSetting`).
         * @param name the name of the cursor theme to use, or `null`   to unset a previously set value
         * @param size the cursor size to use, or 0 to keep the previous size
         */
        set_cursor_theme(name: string | null, size: number): void;
    }

    namespace Win32DisplayManager {
        // Signal signatures
        interface SignalSignatures extends Gdk.DisplayManager.SignalSignatures {
            'notify::default-display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.DisplayManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Win32DisplayManager extends Gdk.DisplayManager {
        static $gtype: GObject.GType<Win32DisplayManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32DisplayManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32DisplayManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Win32DisplayManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32DisplayManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32DisplayManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32DisplayManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32DisplayManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32DisplayManager.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Win32Drag {
        // Signal signatures
        interface SignalSignatures extends Gdk.Drag.SignalSignatures {
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::device': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::formats': (pspec: GObject.ParamSpec) => void;
            'notify::selected-action': (pspec: GObject.ParamSpec) => void;
            'notify::surface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Drag.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Win32Drag extends Gdk.Drag {
        static $gtype: GObject.GType<Win32Drag>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32Drag.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32Drag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Win32Drag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Drag.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32Drag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Drag.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32Drag.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32Drag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Win32GLContext {
        // Signal signatures
        interface SignalSignatures extends Gdk.GLContext.SignalSignatures {
            'notify::allowed-apis': (pspec: GObject.ParamSpec) => void;
            'notify::api': (pspec: GObject.ParamSpec) => void;
            'notify::shared-context': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::surface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class Win32GLContext extends Gdk.GLContext {
        static $gtype: GObject.GType<Win32GLContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32GLContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32GLContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Win32GLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32GLContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32GLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32GLContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32GLContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32GLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Win32HCursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::destroyable': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            destroyable: boolean;
            display: Gdk.Display;
            handle: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Win32HCursor extends GObject.Object {
        static $gtype: GObject.GType<Win32HCursor>;

        // Properties

        /**
         * @construct-only
         * @default true
         */
        get destroyable(): boolean;
        /**
         * @construct-only
         */
        get display(): Gdk.Display;
        /**
         * @construct-only
         */
        get handle(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32HCursor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32HCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: Win32Display, handle: win32.HCURSOR, destroyable: boolean): Win32HCursor;

        // Signals

        /** @signal */
        connect<K extends keyof Win32HCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32HCursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32HCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32HCursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32HCursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32HCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Win32Monitor {
        // Signal signatures
        interface SignalSignatures extends Gdk.Monitor.SignalSignatures {
            'notify::connector': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::height-mm': (pspec: GObject.ParamSpec) => void;
            'notify::manufacturer': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-rate': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::subpixel-layout': (pspec: GObject.ParamSpec) => void;
            'notify::valid': (pspec: GObject.ParamSpec) => void;
            'notify::width-mm': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Monitor.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Win32Monitor extends Gdk.Monitor {
        static $gtype: GObject.GType<Win32Monitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32Monitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Win32Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Monitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Monitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32Monitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieves the size and position of the &#x201C;work area&#x201D; on a monitor
         * within the display coordinate space.
         *
         * The returned geometry is in &#x201D;application pixels&#x201D;, not in &#x201D;device pixels&#x201D;
         * (see {@link Gdk.Monitor.get_scale_factor}).
         * @param monitor a {@link Gdk.Monitor}
         */
        static get_workarea(monitor: Gdk.Monitor): Gdk.Rectangle;
    }

    namespace Win32Surface {
        // Signal signatures
        interface SignalSignatures extends Gdk.Surface.SignalSignatures {
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::frame-clock': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Surface.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Win32Surface extends Gdk.Surface {
        static $gtype: GObject.GType<Win32Surface>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Win32Surface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Win32Surface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Win32Surface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Surface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Win32Surface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Win32Surface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Win32Surface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Win32Surface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param surface a {@link Gdk.Surface}
         */
        static get_impl_hwnd(surface: Gdk.Surface): win32.HWND;
        /**
         * @param surface a {@link Gdk.Surface}
         */
        static is_win32(surface: Gdk.Surface): boolean;

        // Methods

        /**
         * Returns the HWND handle belonging to `surface`.
         * @returns the associated HWND handle.
         */
        get_handle(): win32.HWND;
        /**
         * Flashes the specified `surface`.
         * @param urgent if `true`, flashes both the window and the taskbar button          continuously.
         */
        set_urgency_hint(urgent: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type D3D12TextureBuilderClass = typeof D3D12TextureBuilder;
    /**
     * @gir-type Alias
     */
    type D3D12TextureClass = typeof D3D12Texture;
    /**
     * @gir-type Alias
     */
    type Win32DisplayClass = typeof Win32Display;
    /**
     * @gir-type Alias
     */
    type Win32DisplayManagerClass = typeof Win32DisplayManager;
    /**
     * @gir-type Alias
     */
    type Win32DragClass = typeof Win32Drag;
    /**
     * @gir-type Alias
     */
    type Win32GLContextClass = typeof Win32GLContext;
    /**
     * @gir-type Alias
     */
    type Win32HCursorClass = typeof Win32HCursor;
    /**
     * @gir-type Alias
     */
    type Win32MonitorClass = typeof Win32Monitor;
    /**
     * @gir-type Alias
     */
    type Win32SurfaceClass = typeof Win32Surface;
    /**
     * @gir-type Struct
     */
    abstract class _Win32HCursorFake {
        static $gtype: GObject.GType<_Win32HCursorFake>;

        // Fields

        readonly_handle: win32.HCURSOR;
    }

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

export default GdkWin32;

// END
