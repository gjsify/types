/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtkvnc-2.0-ambient.d.ts';

/**
 * GtkVnc-2.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type GVnc from '@girs/gvnc-1.0';

export namespace GtkVnc {
    enum DisplayCredential {
        PASSWORD,
        USERNAME,
        CLIENTNAME,
    }
    enum DisplayDepthColor {
        DEFAULT,
        FULL,
        MEDIUM,
        LOW,
        ULTRA_LOW,
    }
    enum DisplayKeyEvent {
        PRESS,
        RELEASE,
        CLICK,
    }
    module CairoFramebuffer {
        // Constructor properties interface

        interface ConstructorProps extends GVnc.BaseFramebuffer.ConstructorProps, GVnc.Framebuffer.ConstructorProps {
            surface: any;
        }
    }

    class CairoFramebuffer extends GVnc.BaseFramebuffer implements GVnc.Framebuffer {
        static $gtype: GObject.GType<CairoFramebuffer>;

        // Own properties of GtkVnc.CairoFramebuffer

        get surface(): any;

        // Constructors of GtkVnc.CairoFramebuffer

        constructor(properties?: Partial<CairoFramebuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer;
        // Conflicted with GVnc.BaseFramebuffer.new

        static ['new'](...args: never[]): any;

        // Own methods of GtkVnc.CairoFramebuffer

        /**
         * Get the cairo surface in which the remote desktop is
         * being rendered.
         * @returns the cairo surface
         */
        get_surface(): cairo.Surface;

        // Inherited methods
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Copies data from the range (`srcx,` `srcy)` to
         * (`srcx+``width,` `srcy+``height)` over to the
         * range starting at (`dstx,` `dsty)`.
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        /**
         * Get a pointer to the framebuffer contents
         * @returns the framebuffer data
         */
        get_buffer(): Uint8Array;
        /**
         * Query the height of the remote framebuffer
         * @returns the frambuffer height
         */
        get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         * @returns the local pixel format
         */
        get_local_format(): GVnc.PixelFormat;
        get_remote_format(): GVnc.PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         * @returns the framebuffer row stride
         */
        get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         * @returns the framebuffer width
         */
        get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         * @returns TRUE if the local and remote pixel formats match
         */
        perfect_format_match(): boolean;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        rgb24_blt(
            src: Uint8Array | string,
            rowstride: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        set_color_map(map: GVnc.ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
        vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Copies data from the range (`srcx,` `srcy)` to
         * (`srcx+``width,` `srcy+``height)` over to the
         * range starting at (`dstx,` `dsty)`.
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        vfunc_fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        vfunc_get_buffer(): number;
        /**
         * Query the height of the remote framebuffer
         */
        vfunc_get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         */
        vfunc_get_local_format(): GVnc.PixelFormat;
        vfunc_get_remote_format(): GVnc.PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         */
        vfunc_get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         */
        vfunc_get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         */
        vfunc_perfect_format_match(): boolean;
        /**
         * Fill all the pixels in the range (`x,` `y)` to
         * (`x` + `width,` `y` + `height)` to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        vfunc_rgb24_blt(
            src: Uint8Array | string,
            rowstride: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        vfunc_set_color_map(map: GVnc.ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        vfunc_set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Display {
        // Signal callback interfaces

        interface VncAuthCredential {
            (object: GObject.ValueArray): void;
        }

        interface VncAuthFailure {
            (object: string): void;
        }

        interface VncAuthUnsupported {
            (object: number): void;
        }

        interface VncBell {
            (): void;
        }

        interface VncConnected {
            (): void;
        }

        interface VncDesktopRename {
            (object: string): void;
        }

        interface VncDesktopResize {
            (object: number, p0: number): void;
        }

        interface VncDisconnected {
            (): void;
        }

        interface VncError {
            (object: string): void;
        }

        interface VncInitialized {
            (): void;
        }

        interface VncKeyboardGrab {
            (): void;
        }

        interface VncKeyboardUngrab {
            (): void;
        }

        interface VncPointerGrab {
            (): void;
        }

        interface VncPointerUngrab {
            (): void;
        }

        interface VncPowerControlFailed {
            (): void;
        }

        interface VncPowerControlInitialized {
            (): void;
        }

        interface VncServerCutText {
            (object: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            allow_resize: boolean;
            allowResize: boolean;
            connection: GVnc.Connection;
            depth: DisplayDepthColor;
            force_size: boolean;
            forceSize: boolean;
            grab_keyboard: boolean;
            grabKeyboard: boolean;
            grab_keys: GrabSequence;
            grabKeys: GrabSequence;
            grab_pointer: boolean;
            grabPointer: boolean;
            height: number;
            keep_aspect_ratio: boolean;
            keepAspectRatio: boolean;
            local_pointer: boolean;
            localPointer: boolean;
            lossy_encoding: boolean;
            lossyEncoding: boolean;
            name: string;
            read_only: boolean;
            readOnly: boolean;
            rotation: number;
            scaling: boolean;
            shared_flag: boolean;
            sharedFlag: boolean;
            smoothing: boolean;
            width: number;
            zoom_level: number;
            zoomLevel: number;
        }
    }

    class Display extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Display>;

        // Own properties of GtkVnc.Display

        get allow_resize(): boolean;
        set allow_resize(val: boolean);
        get allowResize(): boolean;
        set allowResize(val: boolean);
        get connection(): GVnc.Connection;
        get depth(): DisplayDepthColor;
        set depth(val: DisplayDepthColor);
        get force_size(): boolean;
        set force_size(val: boolean);
        get forceSize(): boolean;
        set forceSize(val: boolean);
        get grab_keyboard(): boolean;
        set grab_keyboard(val: boolean);
        get grabKeyboard(): boolean;
        set grabKeyboard(val: boolean);
        get grab_keys(): GrabSequence;
        set grab_keys(val: GrabSequence);
        get grabKeys(): GrabSequence;
        set grabKeys(val: GrabSequence);
        get grab_pointer(): boolean;
        set grab_pointer(val: boolean);
        get grabPointer(): boolean;
        set grabPointer(val: boolean);
        get height(): number;
        get keep_aspect_ratio(): boolean;
        set keep_aspect_ratio(val: boolean);
        get keepAspectRatio(): boolean;
        set keepAspectRatio(val: boolean);
        get local_pointer(): boolean;
        set local_pointer(val: boolean);
        get localPointer(): boolean;
        set localPointer(val: boolean);
        get lossy_encoding(): boolean;
        set lossy_encoding(val: boolean);
        get lossyEncoding(): boolean;
        set lossyEncoding(val: boolean);
        get name(): string;
        get read_only(): boolean;
        set read_only(val: boolean);
        get readOnly(): boolean;
        set readOnly(val: boolean);
        get rotation(): number;
        set rotation(val: number);
        get scaling(): boolean;
        set scaling(val: boolean);
        get shared_flag(): boolean;
        set shared_flag(val: boolean);
        get sharedFlag(): boolean;
        set sharedFlag(val: boolean);
        get smoothing(): boolean;
        set smoothing(val: boolean);
        get width(): number;
        get zoom_level(): number;
        set zoom_level(val: number);
        get zoomLevel(): number;
        set zoomLevel(val: number);

        // Constructors of GtkVnc.Display

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Display;

        // Own signals of GtkVnc.Display

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'vnc-auth-credential', callback: (_source: this, object: GObject.ValueArray) => void): number;
        connect_after(
            signal: 'vnc-auth-credential',
            callback: (_source: this, object: GObject.ValueArray) => void,
        ): number;
        emit(signal: 'vnc-auth-credential', object: GObject.ValueArray): void;
        connect(signal: 'vnc-auth-failure', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'vnc-auth-failure', callback: (_source: this, object: string) => void): number;
        emit(signal: 'vnc-auth-failure', object: string): void;
        connect(signal: 'vnc-auth-unsupported', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'vnc-auth-unsupported', callback: (_source: this, object: number) => void): number;
        emit(signal: 'vnc-auth-unsupported', object: number): void;
        connect(signal: 'vnc-bell', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-bell', callback: (_source: this) => void): number;
        emit(signal: 'vnc-bell'): void;
        connect(signal: 'vnc-connected', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-connected', callback: (_source: this) => void): number;
        emit(signal: 'vnc-connected'): void;
        connect(signal: 'vnc-desktop-rename', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'vnc-desktop-rename', callback: (_source: this, object: string) => void): number;
        emit(signal: 'vnc-desktop-rename', object: string): void;
        connect(signal: 'vnc-desktop-resize', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(
            signal: 'vnc-desktop-resize',
            callback: (_source: this, object: number, p0: number) => void,
        ): number;
        emit(signal: 'vnc-desktop-resize', object: number, p0: number): void;
        connect(signal: 'vnc-disconnected', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-disconnected', callback: (_source: this) => void): number;
        emit(signal: 'vnc-disconnected'): void;
        connect(signal: 'vnc-error', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'vnc-error', callback: (_source: this, object: string) => void): number;
        emit(signal: 'vnc-error', object: string): void;
        connect(signal: 'vnc-initialized', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-initialized', callback: (_source: this) => void): number;
        emit(signal: 'vnc-initialized'): void;
        connect(signal: 'vnc-keyboard-grab', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-keyboard-grab', callback: (_source: this) => void): number;
        emit(signal: 'vnc-keyboard-grab'): void;
        connect(signal: 'vnc-keyboard-ungrab', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-keyboard-ungrab', callback: (_source: this) => void): number;
        emit(signal: 'vnc-keyboard-ungrab'): void;
        connect(signal: 'vnc-pointer-grab', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-pointer-grab', callback: (_source: this) => void): number;
        emit(signal: 'vnc-pointer-grab'): void;
        connect(signal: 'vnc-pointer-ungrab', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-pointer-ungrab', callback: (_source: this) => void): number;
        emit(signal: 'vnc-pointer-ungrab'): void;
        connect(signal: 'vnc-power-control-failed', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-power-control-failed', callback: (_source: this) => void): number;
        emit(signal: 'vnc-power-control-failed'): void;
        connect(signal: 'vnc-power-control-initialized', callback: (_source: this) => void): number;
        connect_after(signal: 'vnc-power-control-initialized', callback: (_source: this) => void): number;
        emit(signal: 'vnc-power-control-initialized'): void;
        connect(signal: 'vnc-server-cut-text', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'vnc-server-cut-text', callback: (_source: this, object: string) => void): number;
        emit(signal: 'vnc-server-cut-text', object: string): void;

        // Own static methods of GtkVnc.Display

        /**
         * Get the array of command line option entries containing
         * VNC specific otions
         */
        static get_option_entries(): GLib.OptionEntry[];
        /**
         * Get a command line option group containing VNC specific
         * options.
         */
        static get_option_group(): GLib.OptionGroup;

        // Own virtual methods of GtkVnc.Display

        vfunc_vnc_auth_credential(credList: GObject.ValueArray): void;
        vfunc_vnc_connected(): void;
        vfunc_vnc_disconnected(): void;
        vfunc_vnc_initialized(): void;

        // Own methods of GtkVnc.Display

        client_cut_text(text: string): void;
        /**
         * Request that the connection to the remote display
         * is closed. The actual close will complete asynchronously
         * and the "vnc-disconnected" signal will be emitted once
         * complete.
         */
        close(): void;
        /**
         * If `enable` is TRUE, immediately grab the pointer.
         * If `enable` is FALSE, immediately ungrab the pointer.
         * This overrides any automatic grabs that may have
         * been done.
         * @param enable TRUE to force pointer grabbing, FALSE otherwise
         */
        force_grab(enable: boolean): void;
        /**
         * Determine whether widget size is used to request
         * rsize of the remote desktop
         * @returns TRUE if allow resize is enabled, FALSE otherwise
         */
        get_allow_resize(): boolean;
        /**
         * Get the VNC connection object associated with the
         * display
         * @returns the connection object
         */
        get_connection(): GVnc.Connection;
        /**
         * Get the desired colour depth
         * @returns the color depth
         */
        get_depth(): DisplayDepthColor;
        /**
         * Determine whether the widget size is being forced
         * to match the desktop size
         * @returns TRUE if force size is enabled, FALSE otherwise
         */
        get_force_size(): boolean;
        /**
         * Get the current grab key sequence
         * @returns the current grab keys
         */
        get_grab_keys(): GrabSequence;
        /**
         * Get the height of the remote desktop. This is only
         * valid after the "vnc-initialized" signal has been
         * emitted
         * @returns the remote desktop height
         */
        get_height(): number;
        /**
         * Determine whether the framebuffer aspect ratio is preserved
         * when scaling.
         * @returns TRUE if aspect ratio is preserved, FALSE otherwise
         */
        get_keep_aspect_ratio(): boolean;
        /**
         * Determine if the keyboard will be grabbed when the
         * widget has input focus.
         * @returns TRUE if the keyboard will be grabbed, FALSE otherwise
         */
        get_keyboard_grab(): boolean;
        /**
         * Determine whether lossy framebuffer update encodings
         * are permitted
         * @returns TRUE if lossy encodings are permitted, FALSE otherwie
         */
        get_lossy_encoding(): boolean;
        /**
         * Get the name of the remote desktop. This is only
         * valid after the "vnc-initialized" signal has been
         * emitted
         * @returns the remote desktop name
         */
        get_name(): string;
        /**
         * Take a screenshot of the display.
         * @returns a #GdkPixbuf with the screenshot image buffer
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Determine if the mouse pointer will be grabbed
         * on first click
         * @returns TRUE if the pointer will be grabbed, FALSE otherwise
         */
        get_pointer_grab(): boolean;
        /**
         * Determine if a local pointer will be shown
         * @returns TRUE if a local pointer is shown, FALSE otherwise
         */
        get_pointer_local(): boolean;
        /**
         * Determine if the widget will operate in read-only
         * mode, denying keyboard/mouse inputs
         * @returns TRUE if in read-only mode, FALSE otherwise
         */
        get_read_only(): boolean;
        /**
         * Determine the current rotation angle of the remote desktop.
         * @returns the rotation angle in clockwise direction
         */
        get_rotation(): number;
        /**
         * Determine whether the widget is permitted to
         * scale the remote desktop to fit the current
         * widget size.
         * @returns TRUE if scaling is permitted, FALSE otherwise
         */
        get_scaling(): boolean;
        /**
         * Determine if other clients are permitted to
         * share the VNC connection
         * @returns TRUE if sharing is permittted, FALSE otherwise
         */
        get_shared_flag(): boolean;
        /**
         * Determine whether pixels are smoothly interpolated when
         * scaling.
         * @returns TRUE if smoothing is enabled, FALSE otherwise
         */
        get_smoothing(): boolean;
        /**
         * Get the width of the remote desktop. This is only
         * valid after the "vnc-initialized" signal has been
         * emitted
         * @returns the remote desktop width
         */
        get_width(): number;
        /**
         * Determine the current constant scaling factor.
         * @returns the zoom percentage level between 10-400
         */
        get_zoom_level(): number;
        /**
         * Check if the connection for the display is currently open
         * @returns TRUE if open, FALSE if closing/closed
         */
        is_open(): boolean;
        /**
         * Determine if the pointer is operating in absolute
         * mode. This is only valid after the "vnc-initialized"
         * signal has been emitted
         * @returns TRUE if in absolute mode, FALSE for relative mode
         */
        is_pointer_absolute(): boolean;
        /**
         * Open a socket connection to server identified by `addr`.
         * `addr` may refer to either a TCP address (IPv4/6) or
         * a UNIX socket address. The `hostname` provided should
         * reflect the name of the host that the `addr` provides a
         * connection to, if it is not already available in `addr`.
         * For example, if `addr` points to a proxy server, then
         * `hostname` can be used to provide the name of the final
         * endpoint. This will be used by some authentication
         * schemes, for example x509 certificate validation
         * against `hostname`.
         * @param addr the socket address
         * @param hostname the hostname
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean;
        /**
         * Open a connection using `fd` as the transport. If `fd`
         * refers to a TCP connection, it is recommended to use
         * vnc_display_open_fd_with_hostname instead, to
         * provide the remote hostname. This allows use of
         * x509 based authentication which requires a hostname
         * to be available.
         * @param fd file descriptor to use for the connection
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_fd(fd: number): boolean;
        /**
         * Open a connection using `fd` as the transport. The
         * `hostname` provided should reflect the name of the
         * host that the `fd` provides a connection to. This
         * will be used by some authentication schemes, for
         * example x509 certificate validation against `hostname`.
         * @param fd file descriptor to use for the connection
         * @param hostname the host associated with the connection
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_fd_with_hostname(fd: number, hostname?: string | null): boolean;
        /**
         * Open a TCP connection to the remote desktop at `host`
         * listening on `port`.
         * @param host the host name or IP address
         * @param port the service name or port number
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_host(host: string, port: string): boolean;
        request_update(): boolean;
        /**
         * Send keyval click events to the display. Al the
         * key press events will be sent first and then all
         * the key release events.
         *
         * `keyvals` should contain the X11 key value constants
         * @param keyvals Keyval array
         */
        send_keys(keyvals: number[]): void;
        /**
         * Sends key events to the remote server. `keyvals`
         * should contain X11 key code values. These will
         * be automatically converted to XT scancodes if
         * needed
         *
         * If `kind` is VNC_DISPLAY_KEY_EVENT_CLICK then all
         * the key press events will be sent first, followed
         * by all the key release events.
         * @param keyvals Keyval array
         * @param kind the type of event to send
         */
        send_keys_ex(keyvals: number[], kind: DisplayKeyEvent): void;
        /**
         * Move the remote pointer to position (`x,` `y)` and set the
         * button state to `button_mask`.  This method will only
         * work if the desktop is using absolute pointer mode. It
         * will be a no-op if in relative pointer mode.
         * @param x the desired horizontal position
         * @param y the desired vertical position
         * @param button_mask the state of the buttons
         */
        send_pointer(x: number, y: number, button_mask: number): void;
        /**
         * Set whether changes in the widget size will be translated
         * into requests to resize the remote desktop. Resizing of
         * the remote desktop is not guaranteed to be honoured by
         * servers, but when it is, it will avoid the need to do
         * scaling.
         * @param enable TRUE to allow the desktop resize, FALSE otherwise
         */
        set_allow_resize(enable: boolean): void;
        /**
         * Sets the value of the authentication credential
         * `type` to the string `data`.
         *
         * `type` is one of the VncConnectionCredential enum vlaues
         * @param type the authentication credential type
         * @param data the value associated with the credential
         * @returns TRUE if an error occurs, FALSE otherwise
         */
        set_credential(type: number, data: string): boolean;
        /**
         * Set the desired colour depth. Higher quality colour
         * depths will require greater network bandwidth. The
         * colour depth must be set prior to connecting to the
         * remote server
         * @param depth the desired colour depth
         */
        set_depth(depth: DisplayDepthColor): void;
        /**
         * Set whether the widget size will be forced to match the
         * remote desktop size. If the widget size does not match
         * the remote desktop size, and scaling is disabled, some
         * of the remote desktop may be hidden, or black borders
         * may be drawn.
         * @param enable TRUE to force the widget size, FALSE otherwise
         */
        set_force_size(enable: boolean): void;
        /**
         * Set the sequence of keys that must be pressed to
         * activate keyborad and pointer grab
         * @param seq the new grab sequence
         */
        set_grab_keys(seq: GrabSequence): void;
        /**
         * Set whether the aspect ratio of the framebuffer is preserved
         * when scaling.
         * @param enable TRUE to keep aspect ratio, FALSE otherwise
         */
        set_keep_aspect_ratio(enable: boolean): void;
        /**
         * Set whether the widget will grab the keyboard when it
         * has focus. Grabbing the keyboard allows it to intercept
         * special key sequences, ensuring they get sent to the
         * remote desktop, rather than intepreted locally.
         * @param enable TRUE to enable keyboard grab, FALSE otherwise
         */
        set_keyboard_grab(enable: boolean): void;
        /**
         * Set whether the client is willing to accept lossy
         * framebuffer update encodings. Lossy encodings can
         * improve performance by lowering network bandwidth
         * requirements, with a cost that the display received
         * by the client will not be pixel perfect
         * @param enable TRUE to permit lossy encodings, FALSE otherwise
         */
        set_lossy_encoding(enable: boolean): void;
        /**
         * Set whether the widget will automatically grab the mouse
         * pointer upon a button click
         * @param enable TRUE to enable automatic pointer grab, FALSE otherwise
         */
        set_pointer_grab(enable: boolean): void;
        /**
         * If `enable` is TRUE, then a local mouse cursor will be
         * made visible. If `enable` is FALSE, the local mouse
         * cursor will be hidden.
         * @param enable TRUE to show a local cursor, FALSE otherwise
         */
        set_pointer_local(enable: boolean): void;
        /**
         * Set whether the widget is running in read-only mode. In
         * read-only mode, keyboard and mouse events will not be
         * sent to the remote desktop server. The widget will merely
         * display activity from the server.
         * @param enable TRUE to enable read-only mode, FALSE otherwise
         */
        set_read_only(enable: boolean): void;
        /**
         * Set the rotation angle to view the display of the remote desktop, in
         * clockwise direction.
         * @param rotation The angle of rotation, degrees clockwise.
         */
        set_rotation(rotation: number): void;
        /**
         * Set whether the remote desktop contents is automatically
         * scaled to fit the available widget size, or whether it
         * will be rendered at 1:1 size
         * @param enable TRUE to allow scaling the desktop to fit, FALSE otherwise
         * @returns TRUE always
         */
        set_scaling(enable: boolean): boolean;
        /**
         * Set the shared state for the connection. A TRUE value
         * allow allow this client to co-exist with other existing
         * clients. A FALSE value will cause other clients to be
         * dropped
         * @param shared the new sharing state
         */
        set_shared_flag(shared: boolean): void;
        /**
         * Set whether pixels are smoothly interpolated when scaling,
         * to avoid aliasing.
         * @param enable TRUE to enable smooth scaling, FALSE otherwise
         */
        set_smoothing(enable: boolean): void;
        /**
         * Requests a constant scaling factor to be applied to the remote
         * desktop. The `zoom` value is a percentage in the range 10-400.
         *
         * If scaling mode is not active, then this results in the remote
         * desktop always being rendered at the requested zoom level.
         *
         * If scaling mode is active, then the remote desktop will be
         * scaled to fit the widget regardless of the zoom level.
         *
         * In both cases, when the remote desktop size changes, the
         * widget preferred size will reflect the zoom level.
         * @param zoom the zoom percentage level
         */
        set_zoom_level(zoom: number): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type CairoFramebufferClass = typeof CairoFramebuffer;
    abstract class CairoFramebufferPrivate {
        static $gtype: GObject.GType<CairoFramebufferPrivate>;

        // Constructors of GtkVnc.CairoFramebufferPrivate

        _init(...args: any[]): void;
    }

    type DisplayClass = typeof Display;
    abstract class DisplayPrivate {
        static $gtype: GObject.GType<DisplayPrivate>;

        // Constructors of GtkVnc.DisplayPrivate

        _init(...args: any[]): void;
    }

    class GrabSequence {
        static $gtype: GObject.GType<GrabSequence>;

        // Own fields of GtkVnc.GrabSequence

        nkeysyms: number;
        keysyms: number;

        // Constructors of GtkVnc.GrabSequence

        constructor(
            properties?: Partial<{
                nkeysyms: number;
                keysyms: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](keysyms: number[]): GrabSequence;

        static new_from_string(str: string): GrabSequence;

        // Own methods of GtkVnc.GrabSequence

        /**
         * Convert the grab sequence to a string of keysym names
         * @returns the grab sequence as a string
         */
        as_string(): string;
        /**
         * Allocate a new grab sequence struct, initalizing it
         * with a copy of data  from `sequence`
         *
         * The returned struct must be freed by calling
         * vnc_grab_sequence_free when no longer required
         * @returns the grab sequence
         */
        copy(): GrabSequence;
        /**
         * Release memory associated with the grab sequence
         * `sequence`.
         */
        free(): void;
        /**
         * Obtain the nth key symbol in the sequence
         * @param n the index of the key symbol to obtain
         * @returns the nth key symbol
         */
        get_nth(n: number): number;
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

export default GtkVnc;
// END
