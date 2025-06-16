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
import type xlib from '@girs/xlib-2.0';
import type libxml2 from '@girs/libxml2-2.0';
import type freetype2 from '@girs/freetype2-2.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoFT2 from '@girs/pangoft2-1.0';
import type PangoFc from '@girs/pangofc-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Json from '@girs/json-1.0';
import type GtkSource from '@girs/gtksource-3.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GstTag from '@girs/gsttag-0.10';
import type Gst from '@girs/gst-0.10';
import type GstPbutils from '@girs/gstpbutils-0.10';
import type GstBase from '@girs/gstbase-0.10';
import type GL from '@girs/gl-1.0';
import type EvinceDocument from '@girs/evincedocument-3.0';
import type CoglPango from '@girs/coglpango-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Clutter from '@girs/clutter-1.0';

export namespace Sushi {
    /**
     * Sushi-1.0
     */

    export namespace SoundPlayerState {
        export const $gtype: GObject.GType<SoundPlayerState>;
    }

    enum SoundPlayerState {
        UNKNOWN,
        IDLE,
        PLAYING,
        DONE,
        ERROR,
    }
    function create_foreign_window(xid: number): Gdk.Window;
    function create_rounded_background(): Clutter.Actor;
    function query_supported_document_types(): string[];
    namespace CoverArtFetcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::cover': (pspec: GObject.ParamSpec) => void;
            'notify::taglist': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cover: GdkPixbuf.Pixbuf;
            taglist: Gst.TagList;
        }
    }

    class CoverArtFetcher extends GObject.Object {
        static $gtype: GObject.GType<CoverArtFetcher>;

        // Properties

        get cover(): GdkPixbuf.Pixbuf;
        get taglist(): Gst.TagList;
        set taglist(val: Gst.TagList);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CoverArtFetcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CoverArtFetcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](taglist: Gst.TagList): CoverArtFetcher;

        // Signals

        connect<K extends keyof CoverArtFetcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoverArtFetcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CoverArtFetcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoverArtFetcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CoverArtFetcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CoverArtFetcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_type: string;
            contentType: string;
            file: Gio.File;
            icon: GdkPixbuf.Pixbuf;
            name: string;
            size: string;
            time: string;
        }
    }

    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        get content_type(): string;
        get contentType(): string;
        get file(): Gio.File;
        set file(val: Gio.File);
        get icon(): GdkPixbuf.Pixbuf;
        get name(): string;
        get size(): string;
        get time(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): FileLoader;

        // Signals

        connect<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_content_type_string(): string;
        get_date_string(): string;
        get_display_name(): string;
        get_icon(): GdkPixbuf.Pixbuf;
        get_loading(): boolean;
        get_size_string(): string;
        stop(): void;
    }

    namespace FontWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            loaded: () => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            uri: string;
        }
    }

    class FontWidget extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<FontWidget>;

        // Properties

        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FontWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FontWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): FontWidget;
        // Conflicted with Gtk.DrawingArea.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof FontWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FontWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FontWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FontWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
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

    namespace PdfLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document: EvinceDocument.Document;
            uri: string;
        }
    }

    class PdfLoader extends GObject.Object {
        static $gtype: GObject.GType<PdfLoader>;

        // Properties

        get document(): EvinceDocument.Document;
        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PdfLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PdfLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): PdfLoader;

        // Signals

        connect<K extends keyof PdfLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PdfLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PdfLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PdfLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PdfLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PdfLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        cleanup_document(): void;
        get_max_page_size(): [number, number];
    }

    namespace SoundPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::taglist': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            duration: number;
            playing: boolean;
            progress: number;
            state: SoundPlayerState;
            taglist: Gst.TagList;
            uri: string;
        }
    }

    class SoundPlayer extends GObject.Object {
        static $gtype: GObject.GType<SoundPlayer>;

        // Properties

        get duration(): number;
        get playing(): boolean;
        set playing(val: boolean);
        get progress(): number;
        set progress(val: number);
        get state(): SoundPlayerState;
        get taglist(): Gst.TagList;
        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SoundPlayer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SoundPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SoundPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace TextLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            loaded: (arg0: GtkSource.Buffer) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }

    class TextLoader extends GObject.Object {
        static $gtype: GObject.GType<TextLoader>;

        // Properties

        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): TextLoader;

        // Signals

        connect<K extends keyof TextLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type CoverArtFetcherClass = typeof CoverArtFetcher;
    abstract class CoverArtFetcherPrivate {
        static $gtype: GObject.GType<CoverArtFetcherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileLoaderClass = typeof FileLoader;
    abstract class FileLoaderPrivate {
        static $gtype: GObject.GType<FileLoaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FontWidgetClass = typeof FontWidget;
    abstract class FontWidgetPrivate {
        static $gtype: GObject.GType<FontWidgetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PdfLoaderClass = typeof PdfLoader;
    abstract class PdfLoaderPrivate {
        static $gtype: GObject.GType<PdfLoaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SoundPlayerClass = typeof SoundPlayer;
    abstract class SoundPlayerPrivate {
        static $gtype: GObject.GType<SoundPlayerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TextLoaderClass = typeof TextLoader;
    abstract class TextLoaderPrivate {
        static $gtype: GObject.GType<TextLoaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default Sushi;

// END
