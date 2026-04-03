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
        equal(icon2?: Gio.Icon | null): boolean;
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
        vfunc_equal(icon2?: Gio.Icon | null): boolean;
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
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
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
            cancellable?: Gio.Cancellable | null,
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
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
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
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
            color_state: Gdk.ColorState;
            colorState: Gdk.ColorState;
            fence: any;
            fence_wait: number;
            fenceWait: number;
            premultiplied: boolean;
            resource: any;
            update_region: cairo.Region;
            updateRegion: cairo.Region;
            update_texture: Gdk.Texture;
            updateTexture: Gdk.Texture;
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
        get color_state(): Gdk.ColorState;
        set color_state(val: Gdk.ColorState);
        /**
         * The color state of the texture.
         * @since 4.20
         */
        get colorState(): Gdk.ColorState;
        set colorState(val: Gdk.ColorState);
        /**
         * The optional `ID3D12Fence` to wait on before using the resource.
         * @since 4.20
         */
        get fence(): any;
        set fence(val: any);
        /**
         * The value the fence should wait on
         * @since 4.20
         */
        get fence_wait(): number;
        set fence_wait(val: number);
        /**
         * The value the fence should wait on
         * @since 4.20
         */
        get fenceWait(): number;
        set fenceWait(val: number);
        /**
         * Whether the alpha channel is premultiplied into the others.
         *
         * Only relevant if the format has alpha.
         * @since 4.20
         */
        get premultiplied(): boolean;
        set premultiplied(val: boolean);
        /**
         * The `ID3D12Resource`
         * @since 4.20
         */
        get resource(): any;
        set resource(val: any);
        /**
         * The update region for {@link Gdk.D3d12TextureBuilder.update_texture}.
         * @since 4.20
         */
        get update_region(): cairo.Region;
        set update_region(val: cairo.Region);
        /**
         * The update region for {@link Gdk.D3d12TextureBuilder.update_texture}.
         * @since 4.20
         */
        get updateRegion(): cairo.Region;
        set updateRegion(val: cairo.Region);
        /**
         * The texture {@link Gdk.D3d12TextureBuilder.update_region} is an update for.
         * @since 4.20
         */
        get update_texture(): Gdk.Texture;
        set update_texture(val: Gdk.Texture);
        /**
         * The texture {@link Gdk.D3d12TextureBuilder.update_region} is an update for.
         * @since 4.20
         */
        get updateTexture(): Gdk.Texture;
        set updateTexture(val: Gdk.Texture);

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
        build(destroy?: GLib.DestroyNotify | null, data?: any | null): Gdk.Texture | null;
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
        set_color_state(color_state?: Gdk.ColorState | null): void;
        /**
         * Sets the value that GTK should wait on on the given fence before using the
         * resource.
         *
         * When no fence is set, this value has no effect.
         * @param fence_wait the value to wait on
         */
        set_fence_wait(fence_wait: number): void;
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
        set_update_region(region?: cairo.Region | null): void;
        /**
         * Sets the texture to be updated by this texture. See
         * {@link Gdk.D3d12TextureBuilder.set_update_region} for an explanation.
         * @param texture the texture to update
         */
        set_update_texture(texture?: Gdk.Texture | null): void;
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
