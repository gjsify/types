/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gepub-0.5
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type WebKit2 from './WebKit2-4.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type JavaScriptCore from './JavaScriptCore-4.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Gepub {

/**
 * The book author.
 */
const META_AUTHOR: string
/**
 * The book description.
 */
const META_DESC: string
/**
 * The book id.
 */
const META_ID: string
/**
 * The book lang.
 */
const META_LANG: string
/**
 * The book title.
 */
const META_TITLE: string
interface Doc_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gepub-0.5.Gepub.Doc */
    file?: Gio.File
    page?: number
    path?: string
}
class Doc {
    /* Properties of Gepub-0.5.Gepub.Doc */
    readonly file: Gio.File
    page: number
    readonly path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gepub-0.5.Gepub.Doc */
    get_cover(): string
    get_current(): GLib.Bytes
    get_current_id(): string
    get_current_mime(): string
    get_current_path(): string
    get_current_with_epub_uris(): GLib.Bytes
    get_metadata(mdata: string): string
    get_n_pages(): number
    get_page(): number
    get_resource(path: string): GLib.Bytes
    get_resource_by_id(id: string): GLib.Bytes
    get_resource_mime(path: string): string
    get_resource_mime_by_id(id: string): string
    get_resource_path(id: string): string
    go_next(): boolean
    go_prev(): boolean
    /**
     * Sets the document current page to `index`.
     * @param index the index of the new page
     */
    set_page(index: number): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gepub-0.5.Gepub.Doc */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Doc_ConstructProps)
    _init (config?: Doc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): Doc
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Widget_ConstructProps extends WebKit2.WebView_ConstructProps {
    /* Constructor properties of Gepub-0.5.Gepub.Widget */
    doc?: Doc
}
class Widget {
    /* Properties of Gepub-0.5.Gepub.Widget */
    doc: Doc
    /* Properties of WebKit2-4.0.WebKit2.WebView */
    /**
     * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request. If the new WebView was added to a new tab of current browsing context window
     * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
     */
    readonly automation_presentation_type: WebKit2.AutomationBrowsingContextPresentation
    /**
     * Capture state of the camera device. Whenever the user grants a media-request sent by the web
     * page, requesting video capture capabilities (`navigator.mediaDevices.getUserMedia({video:
     * true})`) this property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
     * 
     * The application can monitor this property and provide a visual indicator allowing to optionally
     * deactivate or mute the capture device by setting this property respectively to
     * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
     * 
     * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
     * can still re-request the permission to the user. Permission desision caching is left to the
     * application.
     */
    camera_capture_state: WebKit2.MediaCaptureState
    /**
     * Capture state of the display device. Whenever the user grants a media-request sent by the web
     * page, requesting screencasting capabilities (`navigator.mediaDevices.getDisplayMedia() this
     * property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
     * 
     * The application can monitor this property and provide a visual indicator allowing to
     * optionally deactivate or mute the capture device by setting this property respectively to
     * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
     * 
     * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
     * can still re-request the permission to the user. Permission desision caching is left to the
     * application.
     */
    display_capture_state: WebKit2.MediaCaptureState
    /**
     * Whether the pages loaded inside #WebKitWebView are editable. For more
     * information see webkit_web_view_set_editable().
     */
    editable: boolean
    /**
     * An estimate of the percent completion for the current loading operation.
     * This value will range from 0.0 to 1.0 and, once a load completes,
     * will remain at 1.0 until a new load starts, at which point it
     * will be reset to 0.0.
     * The value is an estimate based on the total number of bytes expected
     * to be received for a document, including all its possible subresources
     * and child documents.
     */
    readonly estimated_load_progress: number
    /**
     * The favicon currently associated to the #WebKitWebView.
     * See webkit_web_view_get_favicon() for more details.
     */
    readonly favicon: object
    /**
     * Whether the #WebKitWebView is controlled by automation. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request.
     */
    readonly is_controlled_by_automation: boolean
    /**
     * Whether the #WebKitWebView is ephemeral. An ephemeral web view never writes
     * website data to the client storage, no matter what #WebKitWebsiteDataManager
     * its context is using. This is normally used to implement private browsing mode.
     * This is a %G_PARAM_CONSTRUCT_ONLY property, so you have to create an ephemeral
     * #WebKitWebView and it can't be changed. The ephemeral #WebKitWebsiteDataManager
     * created for the #WebKitWebView will inherit the network settings from the
     * #WebKitWebContext<!-- -->'s #WebKitWebsiteDataManager. To use different settings
     * you can get the #WebKitWebsiteDataManager with webkit_web_view_get_website_data_manager()
     * and set the new ones.
     * Note that all #WebKitWebView<!-- -->s created with an ephemeral #WebKitWebContext
     * will be ephemeral automatically.
     * See also webkit_web_context_new_ephemeral().
     */
    readonly is_ephemeral: boolean
    /**
     * Whether the #WebKitWebView is currently loading a page. This property becomes
     * %TRUE as soon as a new load operation is requested and before the
     * #WebKitWebView::load-changed signal is emitted with %WEBKIT_LOAD_STARTED and
     * at that point the active URI is the requested one.
     * When the load operation finishes the property is set to %FALSE before
     * #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_FINISHED.
     */
    readonly is_loading: boolean
    /**
     * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
     * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
     */
    is_muted: boolean
    /**
     * Whether the #WebKitWebView is currently playing audio from a page.
     * This property becomes %TRUE as soon as web content starts playing any
     * kind of audio. When a page is no longer playing any kind of sound,
     * the property is set back to %FALSE.
     */
    readonly is_playing_audio: boolean
    /**
     * Whether the web process currently associated to the #WebKitWebView is responsive.
     */
    readonly is_web_process_responsive: boolean
    /**
     * Capture state of the microphone device. Whenever the user grants a media-request sent by the web
     * page, requesting audio capture capabilities (`navigator.mediaDevices.getUserMedia({audio:
     * true})`) this property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
     * 
     * The application can monitor this property and provide a visual indicator allowing to
     * optionally deactivate or mute the capture device by setting this property respectively to
     * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
     * 
     * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
     * can still re-request the permission to the user. Permission desision caching is left to the
     * application.
     */
    microphone_capture_state: WebKit2.MediaCaptureState
    /**
     * The identifier of the #WebKitWebPage corresponding to the #WebKitWebView.
     */
    readonly page_id: number
    /**
     * The related #WebKitWebView used when creating the view to share the
     * same web process. This property is not readable because the related
     * web view is only valid during the object construction.
     */
    readonly related_view: WebKit2.WebView
    /**
     * The #WebKitSettings of the view.
     */
    settings: WebKit2.Settings
    /**
     * The main frame document title of this #WebKitWebView. If
     * the title has not been received yet, it will be %NULL.
     */
    readonly title: string
    /**
     * The current active URI of the #WebKitWebView.
     * See webkit_web_view_get_uri() for more details.
     */
    readonly uri: string
    /**
     * The #WebKitUserContentManager of the view.
     */
    readonly user_content_manager: WebKit2.UserContentManager
    /**
     * The #WebKitWebContext of the view.
     */
    readonly web_context: WebKit2.WebContext
    /**
     * The #WebKitWebsitePolicies for the view.
     */
    readonly website_policies: WebKit2.WebsitePolicies
    /**
     * The zoom level of the #WebKitWebView content.
     * See webkit_web_view_set_zoom_level() for more details.
     */
    zoom_level: number
    /* Properties of Gtk-3.0.Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    /**
     * Whether the widget is double buffered.
     */
    double_buffered: boolean
    events: Gdk.EventMask
    /**
     * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
     */
    expand: boolean
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * 
     * This property is only relevant for widgets that can take focus.
     * 
     * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
     * GtkComboBox) implemented this property individually.
     */
    focus_on_click: boolean
    /**
     * How to distribute horizontal space if widget gets extra space, see #GtkAlign
     */
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using #GtkWidget::query-tooltip to determine
     * whether it will provide a tooltip or not.
     * 
     * Note that setting this property to %TRUE for the first time will change
     * the event masks of the GdkWindows of this widget to include leave-notify
     * and motion-notify events.  This cannot and will not be undone when the
     * property is set to %FALSE again.
     */
    has_tooltip: boolean
    height_request: number
    /**
     * Whether to expand horizontally. See gtk_widget_set_hexpand().
     */
    hexpand: boolean
    /**
     * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
     */
    hexpand_set: boolean
    is_focus: boolean
    /**
     * Sets all four sides' margin at once. If read, returns max
     * margin on any side.
     */
    margin: number
    /**
     * Margin on bottom side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_bottom: number
    /**
     * Margin on end of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_end: number
    /**
     * Margin on left side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_left: number
    /**
     * Margin on right side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_right: number
    /**
     * Margin on start of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_start: number
    /**
     * Margin on top side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_top: number
    name: string
    no_show_all: boolean
    /**
     * The requested opacity of the widget. See gtk_widget_set_opacity() for
     * more details about window opacity.
     * 
     * Before 3.8 this was only available in GtkWindow
     */
    opacity: number
    receives_default: boolean
    /**
     * The scale factor of the widget. See gtk_widget_get_scale_factor() for
     * more details about widget scaling.
     */
    readonly scale_factor: number
    sensitive: boolean
    /**
     * The style of the widget, which contains information about how it will look (colors, etc).
     */
    style: Gtk.Style
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with the [Pango text markup language][PangoMarkupFormat].
     * Also see gtk_tooltip_set_markup().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltip_markup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see gtk_tooltip_set_text().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltip_text: string
    /**
     * How to distribute vertical space if widget gets extra space, see #GtkAlign
     */
    valign: Gtk.Align
    /**
     * Whether to expand vertically. See gtk_widget_set_vexpand().
     */
    vexpand: boolean
    /**
     * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
     */
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /**
     * The widget's window if it is realized, %NULL otherwise.
     */
    readonly window: Gdk.Window
    /* Fields of WebKit2-4.0.WebKit2.WebView */
    parent: WebKit2.WebViewBase
    /* Fields of WebKit2-4.0.WebKit2.WebViewBase */
    parentInstance: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gepub-0.5.Gepub.Widget */
    get_doc(): Doc
    /**
     * Sets `doc` as the document displayed by the widget.
     * @param doc a #GepubDoc
     */
    set_doc(doc?: Doc | null): void
    /* Methods of WebKit2-4.0.WebKit2.WebView */
    /**
     * Asynchronously check if it is possible to execute the given editing command.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
     * @param command the command to check
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    can_execute_editing_command(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_can_execute_editing_command().
     * @param result a #GAsyncResult
     */
    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean
    /**
     * Determines whether `web_view` has a previous history item.
     */
    can_go_back(): boolean
    /**
     * Determines whether `web_view` has a next history item.
     */
    can_go_forward(): boolean
    /**
     * Whether or not a MIME type can be displayed in `web_view`.
     * @param mime_type a MIME type
     */
    can_show_mime_type(mime_type: string): boolean
    /**
     * Requests downloading of the specified URI string for `web_view`.
     * @param uri the URI to download
     */
    download_uri(uri: string): WebKit2.Download
    /**
     * Request to execute the given `command` for `web_view`. You can use
     * webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     */
    execute_editing_command(command: string): void
    /**
     * Request to execute the given `command` with `argument` for `web_view`. You can use
     * webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     * @param argument the command argument
     */
    execute_editing_command_with_argument(command: string, argument: string): void
    /**
     * Get the presentation type of #WebKitWebView when created for automation.
     */
    get_automation_presentation_type(): WebKit2.AutomationBrowsingContextPresentation
    /**
     * Obtains the #WebKitBackForwardList associated with the given #WebKitWebView. The
     * #WebKitBackForwardList is owned by the #WebKitWebView.
     */
    get_back_forward_list(): WebKit2.BackForwardList
    /**
     * Gets the color that is used to draw the `web_view` background before
     * the actual contents are rendered.
     * For more information see also webkit_web_view_set_background_color()
     */
    get_background_color(): /* rgba */ Gdk.RGBA
    /**
     * Get the camera capture state of a #WebKitWebView.
     */
    get_camera_capture_state(): WebKit2.MediaCaptureState
    /**
     * Gets the web context of `web_view`.
     */
    get_context(): WebKit2.WebContext
    /**
     * Returns the current custom character encoding name of `web_view`.
     */
    get_custom_charset(): string
    /**
     * Get the display capture state of a #WebKitWebView.
     */
    get_display_capture_state(): WebKit2.MediaCaptureState
    /**
     * Gets the web editor state of `web_view`.
     */
    get_editor_state(): WebKit2.EditorState
    /**
     * Gets the value of the #WebKitWebView:estimated-load-progress property.
     * You can monitor the estimated progress of a load operation by
     * connecting to the notify::estimated-load-progress signal of `web_view`.
     */
    get_estimated_load_progress(): number
    /**
     * Returns favicon currently associated to `web_view,` if any. You can
     * connect to notify::favicon signal of `web_view` to be notified when
     * the favicon is available.
     */
    get_favicon(): cairo.Surface
    /**
     * Gets the #WebKitFindController that will allow the caller to query
     * the #WebKitWebView for the text to look for.
     */
    get_find_controller(): WebKit2.FindController
    /**
     * Get the #WebKitInputMethodContext currently in use by `web_view,` or %NULL if no input method is being used.
     */
    get_input_method_context(): WebKit2.InputMethodContext | null
    /**
     * Get the #WebKitWebInspector associated to `web_view`
     */
    get_inspector(): WebKit2.WebInspector
    /**
     * Gets the mute state of `web_view`.
     */
    get_is_muted(): boolean
    get_is_web_process_responsive(): boolean
    /**
     * Return the main resource of `web_view`.
     */
    get_main_resource(): WebKit2.WebResource
    /**
     * Get the microphone capture state of a #WebKitWebView.
     */
    get_microphone_capture_state(): WebKit2.MediaCaptureState
    /**
     * Get the identifier of the #WebKitWebPage corresponding to
     * the #WebKitWebView
     */
    get_page_id(): number
    /**
     * Gets the current session state of `web_view`
     */
    get_session_state(): WebKit2.WebViewSessionState
    /**
     * Gets the #WebKitSettings currently applied to `web_view`.
     * If no other #WebKitSettings have been explicitly applied to
     * `web_view` with webkit_web_view_set_settings(), the default
     * #WebKitSettings will be returned. This method always returns
     * a valid #WebKitSettings object.
     * To modify any of the `web_view` settings, you can either create
     * a new #WebKitSettings object with webkit_settings_new(), setting
     * the desired preferences, and then replace the existing `web_view`
     * settings with webkit_web_view_set_settings() or get the existing
     * `web_view` settings and update it directly. #WebKitSettings objects
     * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
     * the settings of a #WebKitWebView would affect other
     * #WebKitWebView<!-- -->s using the same #WebKitSettings.
     */
    get_settings(): WebKit2.Settings
    /**
     * Asynchronously retrieves a snapshot of `web_view` for `region`.
     * `options` specifies how the snapshot should be rendered.
     * 
     * When the operation is finished, `callback` will be called. You must
     * call webkit_web_view_get_snapshot_finish() to get the result of the
     * operation.
     * @param region the #WebKitSnapshotRegion for this snapshot
     * @param options #WebKitSnapshotOptions for the snapshot
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback
     */
    get_snapshot(region: WebKit2.SnapshotRegion, options: WebKit2.SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with webkit_web_view_get_snapshot().
     * @param result a #GAsyncResult
     */
    get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface
    /**
     * Gets the value of the #WebKitWebView:title property.
     * You can connect to notify::title signal of `web_view` to
     * be notified when the title has been received.
     */
    get_title(): string
    /**
     * Retrieves the #GTlsCertificate associated with the main resource of `web_view,`
     * and the #GTlsCertificateFlags showing what problems, if any, have been found
     * with that certificate.
     * If the connection is not HTTPS, this function returns %FALSE.
     * This function should be called after a response has been received from the
     * server, so you can connect to #WebKitWebView::load-changed and call this function
     * when it's emitted with %WEBKIT_LOAD_COMMITTED event.
     * 
     * Note that this function provides no information about the security of the web
     * page if the current #WebKitTLSErrorsPolicy is %WEBKIT_TLS_ERRORS_POLICY_IGNORE,
     * as subresources of the page may be controlled by an attacker. This function
     * may safely be used to determine the security status of the current page only
     * if the current #WebKitTLSErrorsPolicy is %WEBKIT_TLS_ERRORS_POLICY_FAIL, in
     * which case subresources that fail certificate verification will be blocked.
     */
    get_tls_info(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    /**
     * Returns the current active URI of `web_view`. The active URI might change during
     * a load operation:
     * 
     * <orderedlist>
     * <listitem><para>
     *   When nothing has been loaded yet on `web_view` the active URI is %NULL.
     * </para></listitem>
     * <listitem><para>
     *   When a new load operation starts the active URI is the requested URI:
     *   <itemizedlist>
     *   <listitem><para>
     *     If the load operation was started by webkit_web_view_load_uri(),
     *     the requested URI is the given one.
     *   </para></listitem>
     *   <listitem><para>
     *     If the load operation was started by webkit_web_view_load_html(),
     *     the requested URI is "about:blank".
     *   </para></listitem>
     *   <listitem><para>
     *     If the load operation was started by webkit_web_view_load_alternate_html(),
     *     the requested URI is content URI provided.
     *   </para></listitem>
     *   <listitem><para>
     *     If the load operation was started by webkit_web_view_go_back() or
     *     webkit_web_view_go_forward(), the requested URI is the original URI
     *     of the previous/next item in the #WebKitBackForwardList of `web_view`.
     *   </para></listitem>
     *   <listitem><para>
     *     If the load operation was started by
     *     webkit_web_view_go_to_back_forward_list_item(), the requested URI
     *     is the opriginal URI of the given #WebKitBackForwardListItem.
     *   </para></listitem>
     *   </itemizedlist>
     * </para></listitem>
     * <listitem><para>
     *   If there is a server redirection during the load operation,
     *   the active URI is the redirected URI. When the signal
     *   #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_REDIRECTED
     *   event, the active URI is already updated to the redirected URI.
     * </para></listitem>
     * <listitem><para>
     *   When the signal #WebKitWebView::load-changed is emitted
     *   with %WEBKIT_LOAD_COMMITTED event, the active URI is the final
     *   one and it will not change unless a new load operation is started
     *   or a navigation action within the same page is performed.
     * </para></listitem>
     * </orderedlist>
     * 
     * You can monitor the active URI by connecting to the notify::uri
     * signal of `web_view`.
     */
    get_uri(): string
    /**
     * Gets the user content manager associated to `web_view`.
     */
    get_user_content_manager(): WebKit2.UserContentManager
    /**
     * Get the #WebKitWebsiteDataManager associated to `web_view`. If `web_view` is not ephemeral,
     * the returned #WebKitWebsiteDataManager will be the same as the #WebKitWebsiteDataManager
     * of `web_view'`s #WebKitWebContext.
     */
    get_website_data_manager(): WebKit2.WebsiteDataManager
    /**
     * Gets the default website policies set on construction in the
     * `web_view`. These can be overridden on a per-origin basis via the
     * #WebKitWebView::decide-policy signal handler.
     * 
     * See also webkit_policy_decision_use_with_policies().
     */
    get_website_policies(): WebKit2.WebsitePolicies
    /**
     * Get the #WebKitWindowProperties object containing the properties
     * that the window containing `web_view` should have.
     */
    get_window_properties(): WebKit2.WindowProperties
    /**
     * Get the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     */
    get_zoom_level(): number
    /**
     * Loads the previous history item.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    go_back(): void
    /**
     * Loads the next history item.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    go_forward(): void
    /**
     * Loads the specific history item `list_item`.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param list_item a #WebKitBackForwardListItem
     */
    go_to_back_forward_list_item(list_item: WebKit2.BackForwardListItem): void
    is_editable(): boolean
    /**
     * Load the given `content` string for the URI `content_uri`.
     * This allows clients to display page-loading errors in the #WebKitWebView itself.
     * When this method is called from #WebKitWebView::load-failed signal to show an
     * error page, then the back-forward list is maintained appropriately.
     * For everything else this method works the same way as webkit_web_view_load_html().
     * @param content the new content to display as the main page of the `web_view`
     * @param content_uri the URI for the alternate page content
     * @param base_uri the base URI for relative locations or %NULL
     */
    load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void
    /**
     * Load the specified `bytes` into `web_view` using the given `mime_type` and `encoding`.
     * When `mime_type` is %NULL, it defaults to "text/html".
     * When `encoding` is %NULL, it defaults to "UTF-8".
     * When `base_uri` is %NULL, it defaults to "about:blank".
     * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
     * @param bytes input data to load
     * @param mime_type the MIME type of `bytes,` or %NULL
     * @param encoding the character encoding of `bytes,` or %NULL
     * @param base_uri the base URI for relative locations or %NULL
     */
    load_bytes(bytes: GLib.Bytes, mime_type?: string | null, encoding?: string | null, base_uri?: string | null): void
    /**
     * Load the given `content` string with the specified `base_uri`.
     * If `base_uri` is not %NULL, relative URLs in the `content` will be
     * resolved against `base_uri` and absolute local paths must be children of the `base_uri`.
     * For security reasons absolute local paths that are not children of `base_uri`
     * will cause the web process to terminate.
     * If you need to include URLs in `content` that are local paths in a different
     * directory than `base_uri` you can build a data URI for them. When `base_uri` is %NULL,
     * it defaults to "about:blank". The mime type of the document will be "text/html".
     * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
     * @param content The HTML string to load
     * @param base_uri The base URI for relative locations or %NULL
     */
    load_html(content: string, base_uri?: string | null): void
    /**
     * Load the specified `plain_text` string into `web_view`. The mime type of
     * document will be "text/plain". You can monitor the load
     * operation by connecting to #WebKitWebView::load-changed signal.
     * @param plain_text The plain text to load
     */
    load_plain_text(plain_text: string): void
    /**
     * Requests loading of the specified #WebKitURIRequest.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param request a #WebKitURIRequest to load
     */
    load_request(request: WebKit2.URIRequest): void
    /**
     * Requests loading of the specified URI string.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param uri an URI string
     */
    load_uri(uri: string): void
    /**
     * Reloads the current contents of `web_view`.
     * See also webkit_web_view_reload_bypass_cache().
     */
    reload(): void
    /**
     * Reloads the current contents of `web_view` without
     * using any cached data.
     */
    reload_bypass_cache(): void
    /**
     * Restore the `web_view` session state from `state`
     * @param state a #WebKitWebViewSessionState
     */
    restore_session_state(state: WebKit2.WebViewSessionState): void
    /**
     * Asynchronously run `script` in the context of the current page in `web_view`. If
     * WebKitSettings:enable-javascript is FALSE, this method will do nothing.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_run_javascript_finish() to get the result of the operation.
     * @param script the script to run
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    run_javascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_run_javascript().
     * 
     * This is an example of using webkit_web_view_run_javascript() with a script returning
     * a string:
     * 
     * <informalexample><programlisting>
     * static void
     * web_view_javascript_finished (GObject      *object,
     *                               GAsyncResult *result,
     *                               gpointer      user_data)
     * {
     *     WebKitJavascriptResult *js_result;
     *     JSCValue               *value;
     *     GError                 *error = NULL;
     * 
     *     js_result = webkit_web_view_run_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
     *     if (!js_result) {
     *         g_warning ("Error running javascript: %s", error->message);
     *         g_error_free (error);
     *         return;
     *     }
     * 
     *     value = webkit_javascript_result_get_js_value (js_result);
     *     if (jsc_value_is_string (value)) {
     *         JSCException *exception;
     *         gchar        *str_value;
     * 
     *         str_value = jsc_value_to_string (value);
     *         exception = jsc_context_get_exception (jsc_value_get_context (value));
     *         if (exception)
     *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
     *         else
     *             g_print ("Script result: %s\n", str_value);
     *         g_free (str_value);
     *     } else {
     *         g_warning ("Error running javascript: unexpected return value");
     *     }
     *     webkit_javascript_result_unref (js_result);
     * }
     * 
     * static void
     * web_view_get_link_url (WebKitWebView *web_view,
     *                        const gchar   *link_id)
     * {
     *     gchar *script;
     * 
     *     script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
     *     webkit_web_view_run_javascript (web_view, script, NULL, web_view_javascript_finished, NULL);
     *     g_free (script);
     * }
     * </programlisting></informalexample>
     * @param result a #GAsyncResult
     */
    run_javascript_finish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    /**
     * Asynchronously run the script from `resource` in the context of the
     * current page in `web_view`.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call webkit_web_view_run_javascript_from_gresource_finish() to get the result
     * of the operation.
     * @param resource the location of the resource to load
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    run_javascript_from_gresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_run_javascript_from_gresource().
     * 
     * Check webkit_web_view_run_javascript_finish() for a usage example.
     * @param result a #GAsyncResult
     */
    run_javascript_from_gresource_finish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    /**
     * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
     * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
     * @param script the script to run
     * @param world_name the name of a #WebKitScriptWorld
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    run_javascript_in_world(script: string, world_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_run_javascript_in_world().
     * @param result a #GAsyncResult
     */
    run_javascript_in_world_finish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    /**
     * Asynchronously save the current web page associated to the
     * #WebKitWebView into a self-contained format using the mode
     * specified in `save_mode`.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call webkit_web_view_save_finish() to get the result of the
     * operation.
     * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    save(save_mode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_save().
     * @param result a #GAsyncResult
     */
    save_finish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Asynchronously save the current web page associated to the
     * #WebKitWebView into a self-contained format using the mode
     * specified in `save_mode` and writing it to `file`.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call webkit_web_view_save_to_file_finish() to get the result of the
     * operation.
     * @param file the #GFile where the current web page should be saved to.
     * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    save_to_file(file: Gio.File, save_mode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_save_to_file().
     * @param result a #GAsyncResult
     */
    save_to_file_finish(result: Gio.AsyncResult): boolean
    /**
     * Send `message` to the #WebKitWebPage corresponding to `web_view`. If `message` is floating, it's consumed.
     * 
     * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_send_message_to_page_finish() to get the message reply.
     * @param message a #WebKitUserMessage
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback (nullable): A #GAsyncReadyCallback to call when the request is satisfied or %NULL
     */
    send_message_to_page(message: WebKit2.UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_send_message_to_page().
     * @param result a #GAsyncResult
     */
    send_message_to_page_finish(result: Gio.AsyncResult): WebKit2.UserMessage
    /**
     * Sets the color that will be used to draw the `web_view` background before
     * the actual contents are rendered. Note that if the web page loaded in `web_view`
     * specifies a background color, it will take precedence over the `rgba` color.
     * By default the `web_view` background color is opaque white.
     * Note that the parent window must have a RGBA visual and
     * #GtkWidget:app-paintable property set to %TRUE for backgrounds colors to work.
     * 
     * <informalexample><programlisting>
     * static void browser_window_set_background_color (BrowserWindow *window,
     *                                                  const GdkRGBA *rgba)
     * {
     *     WebKitWebView *web_view;
     *     GdkScreen *screen = gtk_window_get_screen (GTK_WINDOW (window));
     *     GdkVisual *rgba_visual = gdk_screen_get_rgba_visual (screen);
     * 
     *     if (!rgba_visual)
     *          return;
     * 
     *     gtk_widget_set_visual (GTK_WIDGET (window), rgba_visual);
     *     gtk_widget_set_app_paintable (GTK_WIDGET (window), TRUE);
     * 
     *     web_view = browser_window_get_web_view (window);
     *     webkit_web_view_set_background_color (web_view, rgba);
     * }
     * </programlisting></informalexample>
     * @param rgba a #GdkRGBA
     */
    set_background_color(rgba: Gdk.RGBA): void
    /**
     * Set the camera capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    set_camera_capture_state(state: WebKit2.MediaCaptureState): void
    /**
     * Sets the `allowlist` for which
     * [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
     * checks are disabled in `web_view`. URI patterns must be of the form
     * `[protocol]://[host]/[path]`, each component may contain the wildcard
     * character (`*`) to represent zero or more other characters. All three
     * components are required and must not be omitted from the URI
     * patterns.
     * 
     * Disabling CORS checks permits resources from other origins to load
     * allowlisted resources. It does not permit the allowlisted resources
     * to load resources from other origins.
     * 
     * If this function is called multiple times, only the allowlist set by
     * the most recent call will be effective.
     * @param allowlist an allowlist of URI patterns, or %NULL
     */
    set_cors_allowlist(allowlist?: string[] | null): void
    /**
     * Sets the current custom character encoding override of `web_view`. The custom
     * character encoding will override any text encoding detected via HTTP headers or
     * META tags. Calling this method will stop any current load operation and reload the
     * current page. Setting the custom character encoding to %NULL removes the character
     * encoding override.
     * @param charset a character encoding name or %NULL
     */
    set_custom_charset(charset?: string | null): void
    /**
     * Set the display capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    set_display_capture_state(state: WebKit2.MediaCaptureState): void
    /**
     * Sets whether the user is allowed to edit the HTML document.
     * 
     * If `editable` is %TRUE, `web_view` allows the user to edit the HTML document. If
     * `editable` is %FALSE, an element in `web_view'`s document can only be edited if the
     * CONTENTEDITABLE attribute has been set on the element or one of its parent
     * elements. By default a #WebKitWebView is not editable.
     * 
     * Normally, a HTML document is not editable unless the elements within the
     * document are editable. This function provides a way to make the contents
     * of a #WebKitWebView editable without altering the document or DOM structure.
     * @param editable a #gboolean indicating the editable state
     */
    set_editable(editable: boolean): void
    /**
     * Set the #WebKitInputMethodContext to be used by `web_view,` or %NULL to not use any input method.
     * Note that the same #WebKitInputMethodContext can't be set on more than one #WebKitWebView at the same time.
     * @param context the #WebKitInputMethodContext to set, or %NULL
     */
    set_input_method_context(context?: WebKit2.InputMethodContext | null): void
    /**
     * Sets the mute state of `web_view`.
     * @param muted mute flag
     */
    set_is_muted(muted: boolean): void
    /**
     * Set the microphone capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    set_microphone_capture_state(state: WebKit2.MediaCaptureState): void
    /**
     * Sets the #WebKitSettings to be applied to `web_view`. The
     * existing #WebKitSettings of `web_view` will be replaced by
     * `settings`. New settings are applied immediately on `web_view`.
     * The same #WebKitSettings object can be shared
     * by multiple #WebKitWebView<!-- -->s.
     * @param settings a #WebKitSettings
     */
    set_settings(settings: WebKit2.Settings): void
    /**
     * Set the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     * @param zoom_level the zoom level
     */
    set_zoom_level(zoom_level: number): void
    /**
     * Stops any ongoing loading operation in `web_view`.
     * This method does nothing if no content is being loaded.
     * If there is a loading operation in progress, it will be cancelled and
     * #WebKitWebView::load-failed signal will be emitted with
     * %WEBKIT_NETWORK_ERROR_CANCELLED error.
     */
    stop_loading(): void
    /**
     * Terminates the web process associated to `web_view`. When the web process gets terminated
     * using this method, the #WebKitWebView::web-process-terminated signal is emitted with
     * %WEBKIT_WEB_PROCESS_TERMINATED_BY_API as the reason for termination.
     */
    terminate_web_process(): void
    /**
     * Tries to close the `web_view`. This will fire the onbeforeunload event
     * to ask the user for confirmation to close the page. If there isn't an
     * onbeforeunload event handler or the user confirms to close the page,
     * the #WebKitWebView::close signal is emitted, otherwise nothing happens.
     */
    try_close(): void
    /* Methods of Gtk-3.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    check_resize(): void
    /**
     * Gets the value of a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to get
     * @param value a location to return the value
     */
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] specified by
     * `pspec` on the child.
     * 
     * This is an analogue of g_object_notify_by_pspec() for child properties.
     * @param child the child widget
     * @param pspec the #GParamSpec of a child property instealled on     the class of `container`
     */
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    /**
     * Sets a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to set
     * @param value the value to set the property to
     */
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    child_type(): GObject.Type
    /**
     * Invokes `callback` on each direct child of `container,` including
     * children that are considered “internal” (implementation details
     * of the container). “Internal” children generally weren’t added
     * by the user of the container, but were added by the container
     * implementation itself.
     * 
     * Most applications should use gtk_container_foreach(), rather
     * than gtk_container_forall().
     * @param callback a callback
     */
    forall(callback: Gtk.Callback): void
    /**
     * Invokes `callback` on each non-internal child of `container`.
     * See gtk_container_forall() for details on what constitutes
     * an “internal” child. For all practical purposes, this function
     * should iterate over precisely those child widgets that were
     * added to the container by the application with explicit add()
     * calls.
     * 
     * It is permissible to remove the child from the `callback` handler.
     * 
     * Most applications should use gtk_container_foreach(),
     * rather than gtk_container_forall().
     * @param callback a callback
     */
    foreach(callback: Gtk.Callback): void
    /**
     * Retrieves the border width of the container. See
     * gtk_container_set_border_width().
     */
    get_border_width(): number
    /**
     * Returns the container’s non-internal children. See
     * gtk_container_forall() for details on what constitutes an "internal" child.
     */
    get_children(): Gtk.Widget[]
    /**
     * Retrieves the focus chain of the container, if one has been
     * set explicitly. If no focus chain has been explicitly
     * set, GTK+ computes the focus chain based on the positions
     * of the children. In that case, GTK+ stores %NULL in
     * `focusable_widgets` and returns %FALSE.
     */
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    /**
     * Returns the current focus child widget inside `container`. This is not the
     * currently focused widget. That can be obtained by calling
     * gtk_window_get_focus().
     */
    get_focus_child(): Gtk.Widget | null
    /**
     * Retrieves the horizontal focus adjustment for the container. See
     * gtk_container_set_focus_hadjustment ().
     */
    get_focus_hadjustment(): Gtk.Adjustment | null
    /**
     * Retrieves the vertical focus adjustment for the container. See
     * gtk_container_set_focus_vadjustment().
     */
    get_focus_vadjustment(): Gtk.Adjustment | null
    /**
     * Returns a newly created widget path representing all the widget hierarchy
     * from the toplevel down to and including `child`.
     * @param child a child of `container`
     */
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    /**
     * Returns the resize mode for the container. See
     * gtk_container_set_resize_mode ().
     */
    get_resize_mode(): Gtk.ResizeMode
    /**
     * When a container receives a call to the draw function, it must send
     * synthetic #GtkWidget::draw calls to all children that don’t have their
     * own #GdkWindows. This function provides a convenient way of doing this.
     * A container, when it receives a call to its #GtkWidget::draw function,
     * calls gtk_container_propagate_draw() once for each child, passing in
     * the `cr` the container received.
     * 
     * gtk_container_propagate_draw() takes care of translating the origin of `cr,`
     * and deciding whether the draw needs to be sent to the child. It is a
     * convenient and optimized way of getting the same effect as calling
     * gtk_widget_draw() on the child directly.
     * 
     * In most cases, a container can simply either inherit the
     * #GtkWidget::draw implementation from #GtkContainer, or do some drawing
     * and then chain to the ::draw implementation from #GtkContainer.
     * @param child a child of `container`
     * @param cr Cairo context as passed to the container. If you want to use `cr`   in container’s draw function, consider using cairo_save() and   cairo_restore() before calling this function.
     */
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    resize_children(): void
    /**
     * Sets the border width of the container.
     * 
     * The border width of a container is the amount of space to leave
     * around the outside of the container. The only exception to this is
     * #GtkWindow; because toplevel windows can’t leave space outside,
     * they leave the space inside. The border is added on all sides of
     * the container. To add space to only one side, use a specific
     * #GtkWidget:margin property on the child widget, for example
     * #GtkWidget:margin-top.
     * @param border_width amount of blank space to leave outside   the container. Valid values are in the range 0-65535 pixels.
     */
    set_border_width(border_width: number): void
    /**
     * Sets a focus chain, overriding the one computed automatically by GTK+.
     * 
     * In principle each widget in the chain should be a descendant of the
     * container, but this is not enforced by this method, since it’s allowed
     * to set the focus chain before you pack the widgets, or have a widget
     * in the chain that isn’t always packed. The necessary checks are done
     * when the focus chain is actually traversed.
     * @param focusable_widgets      the new focus chain
     */
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manually set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    set_focus_child(child?: Gtk.Widget | null): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a child
     * of the container is focused, the adjustment is scrolled to show that
     * widget. This function sets the horizontal alignment.
     * See gtk_scrolled_window_get_hadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_vadjustment() for setting
     * the vertical adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus is   moved among the descendents of `container`
     */
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a
     * child of the container is focused, the adjustment is scrolled to
     * show that widget. This function sets the vertical alignment. See
     * gtk_scrolled_window_get_vadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_hadjustment() for setting
     * the horizontal adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus   is moved among the descendents of `container`
     */
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Sets the `reallocate_redraws` flag of the container to the given value.
     * 
     * Containers requesting reallocation redraws get automatically
     * redrawn if any of their children changed allocation.
     * @param needs_redraws the new value for the container’s `reallocate_redraws` flag
     */
    set_reallocate_redraws(needs_redraws: boolean): void
    /**
     * Sets the resize mode for the container.
     * 
     * The resize mode of a container determines whether a resize request
     * will be passed to the container’s parent, queued for later execution
     * or executed immediately.
     * @param resize_mode the new resize mode
     */
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    /**
     * Removes a focus chain explicitly set with gtk_container_set_focus_chain().
     */
    unset_focus_chain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Installs an accelerator for this `widget` in `accel_group` that causes
     * `accel_signal` to be emitted if the accelerator is activated.
     * The `accel_group` needs to be added to the widget’s toplevel via
     * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
     * Accelerators added through this function are not user changeable during
     * runtime. If you want to support accelerators that can be changed by the
     * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
     * gtk_menu_item_set_accel_path() instead.
     * @param accel_signal widget signal to emit on accelerator activation
     * @param accel_group accel group for this widget, added to its toplevel
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
     */
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    /**
     * Adds the device events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_device_events() for details.
     * @param device a #GdkDevice
     * @param events an event mask, see #GdkEventMask
     */
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Adds the events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_events() and the
     * [input handling overview][event-masks] for details.
     * @param events an event mask, see #GdkEventMask
     */
    add_events(events: number): void
    /**
     * Adds a widget to the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well, by using a connection
     * to the #GtkWidget::destroy signal or a weak notifier.
     * @param label a #GtkWidget that acts as a mnemonic label for `widget`
     */
    add_mnemonic_label(label: Gtk.Widget): void
    /**
     * Queues an animation frame update and adds a callback to be called
     * before each frame. Until the tick callback is removed, it will be
     * called frequently (usually at the frame rate of the output device
     * or as quickly as the application can be repainted, whichever is
     * slower). For this reason, is most suitable for handling graphics
     * that change every frame or every few frames. The tick callback does
     * not automatically imply a relayout or repaint. If you want a
     * repaint or relayout, and aren’t changing widget properties that
     * would trigger that (for example, changing the text of a #GtkLabel),
     * then you will have to call gtk_widget_queue_resize() or
     * gtk_widget_queue_draw_area() yourself.
     * 
     * gdk_frame_clock_get_frame_time() should generally be used for timing
     * continuous animations and
     * gdk_frame_timings_get_predicted_presentation_time() if you are
     * trying to display isolated frames at particular times.
     * 
     * This is a more convenient alternative to connecting directly to the
     * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
     * have to worry about when a #GdkFrameClock is assigned to a widget.
     * @param callback function to call for updating animations
     */
    add_tick_callback(callback: Gtk.TickCallback): number
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    can_activate_accel(signal_id: number): boolean
    /**
     * This function is used by custom widget implementations; if you're
     * writing an app, you’d use gtk_widget_grab_focus() to move the focus
     * to a particular widget, and gtk_container_set_focus_chain() to
     * change the focus tab order. So you may want to investigate those
     * functions instead.
     * 
     * gtk_widget_child_focus() is called by containers as the user moves
     * around the window using keyboard shortcuts. `direction` indicates
     * what kind of motion is taking place (up, down, left, right, tab
     * forward, tab backward). gtk_widget_child_focus() emits the
     * #GtkWidget::focus signal; widgets override the default handler
     * for this signal in order to implement appropriate focus behavior.
     * 
     * The default ::focus handler for a widget should return %TRUE if
     * moving in `direction` left the focus on a focusable location inside
     * that widget, and %FALSE if moving in `direction` moved the focus
     * outside the widget. If returning %TRUE, widgets normally
     * call gtk_widget_grab_focus() to place the focus accordingly;
     * if returning %FALSE, they don’t modify the current focus location.
     * @param direction direction of focus movement
     */
    child_focus(direction: Gtk.DirectionType): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Same as gtk_widget_path(), but always uses the name of a widget’s type,
     * never uses a custom name set with gtk_widget_set_name().
     */
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * Computes whether a container should give this widget extra space
     * when possible. Containers should check this, rather than
     * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
     * 
     * This function already checks whether the widget is visible, so
     * visibility does not need to be checked separately. Non-visible
     * widgets are not expanded.
     * 
     * The computed expand value uses either the expand setting explicitly
     * set on the widget itself, or, if none has been explicitly set,
     * the widget may expand if some of its children do.
     * @param orientation expand direction
     */
    compute_expand(orientation: Gtk.Orientation): boolean
    /**
     * Creates a new #PangoContext with the appropriate font map,
     * font options, font description, and base direction for drawing
     * text for this widget. See also gtk_widget_get_pango_context().
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a #PangoLayout created in this way around, you need
     * to re-create it when the widget #PangoContext is replaced.
     * This can be tracked by using the #GtkWidget::screen-changed signal
     * on the widget.
     * @param text text to set on the layout (can be %NULL)
     */
    create_pango_layout(text?: string | null): Pango.Layout
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    destroy(): void
    /**
     * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
     * %NULL.  It’s intended to be used as a callback connected to the
     * “destroy” signal of a widget. You connect gtk_widget_destroyed()
     * as a signal handler, and pass the address of your widget variable
     * as user data. Then when the widget is destroyed, the variable will
     * be set to %NULL. Useful for example to avoid multiple copies
     * of the same dialog.
     * @param widget_pointer address of a variable that contains `widget`
     */
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    /**
     * Returns %TRUE if `device` has been shadowed by a GTK+
     * device grab on another widget, so it would stop sending
     * events to `widget`. This may be used in the
     * #GtkWidget::grab-notify signal to check for specific
     * devices. See gtk_device_grab_add().
     * @param device a #GdkDevice
     */
    device_is_shadowed(device: Gdk.Device): boolean
    /**
     * This function is equivalent to gtk_drag_begin_with_coordinates(),
     * passing -1, -1 as coordinates.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     */
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    /**
     * Initiates a drag on the source side. The function only needs to be used
     * when the application is starting drags itself, and is not needed when
     * gtk_drag_source_set() is used.
     * 
     * The `event` is used to retrieve the timestamp that will be used internally to
     * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
     * However, you should try to pass a real event in all cases, since that can be
     * used to get information about the drag.
     * 
     * Generally there are three cases when you want to start a drag by hand by
     * calling this function:
     * 
     * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
     * immediately when the user presses the mouse button.  Pass the `event`
     * that you have in your #GtkWidget::button-press-event handler.
     * 
     * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
     * when the mouse moves past a certain threshold distance after a button-press.
     * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
     * 
     * 3. During a timeout handler, if you want to start a drag after the mouse
     * button is held down for some time.  Try to save the last event that you got
     * from the mouse, using gdk_event_copy(), and pass it to this function
     * (remember to free the event with gdk_event_free() when you are done).
     * If you really cannot pass a real event, pass %NULL instead.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     * @param x The initial x coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     * @param y The initial y coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     */
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    /**
     * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
     * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
     * should trigger the beginning of a drag-and-drop operation.
     * @param start_x X coordinate of start of drag
     * @param start_y Y coordinate of start of drag
     * @param current_x current X coordinate
     * @param current_y current Y coordinate
     */
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    /**
     * Add the image targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_image_targets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_text_targets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_uri_targets(): void
    /**
     * Looks for a match between the supported targets of `context` and the
     * `dest_target_list,` returning the first matching target, otherwise
     * returning %GDK_NONE. `dest_target_list` should usually be the return
     * value from gtk_drag_dest_get_target_list(), but some widgets may
     * have different valid targets for different parts of the widget; in
     * that case, they will have to implement a drag_motion handler that
     * passes the correct target list to this function.
     * @param context drag context
     * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (`widget)`.
     */
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    /**
     * Returns the list of targets this widget can accept from
     * drag-and-drop.
     */
    drag_dest_get_target_list(): Gtk.TargetList | null
    /**
     * Returns whether the widget has been configured to always
     * emit #GtkWidget::drag-motion signals.
     */
    drag_dest_get_track_motion(): boolean
    /**
     * Sets a widget as a potential drop destination, and adds default behaviors.
     * 
     * The default behaviors listed in `flags` have an effect similar
     * to installing default handlers for the widget’s drag-and-drop signals
     * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
     * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
     * sufficient to connect to the widget’s #GtkWidget::drag-data-received
     * signal to get primitive, but consistent drag-and-drop support.
     * 
     * Things become more complicated when you try to preview the dragged data,
     * as described in the documentation for #GtkWidget::drag-motion. The default
     * behaviors described by `flags` make some assumptions, that can conflict
     * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
     * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
     * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
     * Especially the later is dramatic, when your own #GtkWidget::drag-motion
     * handler calls gtk_drag_get_data() to inspect the dragged data.
     * 
     * There’s no way to set a default action here, you can use the
     * #GtkWidget::drag-motion callback for that. Here’s an example which selects
     * the action to use depending on whether the control key is pressed or not:
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget *widget,
     *              GdkDragContext *context,
     *              gint x,
     *              gint y,
     *              guint time)
     * {
     *   GdkModifierType mask;
     * 
     *   gdk_window_get_pointer (gtk_widget_get_window (widget),
     *                           NULL, NULL, &mask);
     *   if (mask & GDK_CONTROL_MASK)
     *     gdk_drag_status (context, GDK_ACTION_COPY, time);
     *   else
     *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
     * }
     * ```
     * 
     * @param flags which types of default drag behavior to use
     * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this `widget` will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
     * @param actions a bitmask of possible actions for a drop onto this `widget`.
     */
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets this widget as a proxy for drops to another window.
     * @param proxy_window the window to which to forward drag events
     * @param protocol the drag protocol which the `proxy_window` accepts   (You can use gdk_drag_get_protocol() to determine this)
     * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
     */
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    /**
     * Sets the target types that this widget can accept from drag-and-drop.
     * The widget must first be made into a drag destination with
     * gtk_drag_dest_set().
     * @param target_list list of droppable targets, or %NULL for none
     */
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    /**
     * Tells the widget to emit #GtkWidget::drag-motion and
     * #GtkWidget::drag-leave events regardless of the targets and the
     * %GTK_DEST_DEFAULT_MOTION flag.
     * 
     * This may be used when a widget wants to do generic
     * actions regardless of the targets that the source offers.
     * @param track_motion whether to accept all targets
     */
    drag_dest_set_track_motion(track_motion: boolean): void
    /**
     * Clears information about a drop destination set with
     * gtk_drag_dest_set(). The widget will no longer receive
     * notification of drags.
     */
    drag_dest_unset(): void
    /**
     * Gets the data associated with a drag. When the data
     * is received or the retrieval fails, GTK+ will emit a
     * #GtkWidget::drag-data-received signal. Failure of the retrieval
     * is indicated by the length field of the `selection_data`
     * signal parameter being negative. However, when gtk_drag_get_data()
     * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
     * then the widget will not receive notification of failed
     * drops.
     * @param context the drag context
     * @param target the target (form of the data) to retrieve
     * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
     */
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    /**
     * Highlights a widget as a currently hovered drop target.
     * To end the highlight, call gtk_drag_unhighlight().
     * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
     */
    drag_highlight(): void
    /**
     * Add the writable image targets supported by #GtkSelectionData to
     * the target list of the drag source. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_image_targets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_text_targets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_uri_targets(): void
    /**
     * Gets the list of targets this widget can provide for
     * drag-and-drop.
     */
    drag_source_get_target_list(): Gtk.TargetList | null
    /**
     * Sets up a widget so that GTK+ will start a drag operation when the user
     * clicks and drags on the widget. The widget must have a window.
     * @param start_button_mask the bitmask of buttons that can start the drag
     * @param targets the table of targets     that the drag will support, may be %NULL
     * @param actions the bitmask of possible actions for a drag from this widget
     */
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to `icon`. See the docs for #GtkIconTheme for more details.
     * @param icon A #GIcon
     */
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a themed icon. See the docs for #GtkIconTheme for more details.
     * @param icon_name name of icon to use
     */
    drag_source_set_icon_name(icon_name: string): void
    /**
     * Sets the icon that will be used for drags from a particular widget
     * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
     * release it when it is no longer needed.
     * @param pixbuf the #GdkPixbuf for the drag icon
     */
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a stock icon.
     * @param stock_id the ID of the stock icon to use
     */
    drag_source_set_icon_stock(stock_id: string): void
    /**
     * Changes the target types that this widget offers for drag-and-drop.
     * The widget must first be made into a drag source with
     * gtk_drag_source_set().
     * @param target_list list of draggable targets, or %NULL for none
     */
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    /**
     * Undoes the effects of gtk_drag_source_set().
     */
    drag_source_unset(): void
    /**
     * Removes a highlight set by gtk_drag_highlight() from
     * a widget.
     */
    drag_unhighlight(): void
    /**
     * Draws `widget` to `cr`. The top left corner of the widget will be
     * drawn to the currently set origin point of `cr`.
     * 
     * You should pass a cairo context as `cr` argument that is in an
     * original state. Otherwise the resulting drawing is undefined. For
     * example changing the operator using cairo_set_operator() or the
     * line width using cairo_set_line_width() might have unwanted side
     * effects.
     * You may however change the context’s transform matrix - like with
     * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
     * region with cairo_clip() prior to calling this function. Also, it
     * is fine to modify the context with cairo_save() and
     * cairo_push_group() prior to calling this function.
     * 
     * Note that special-purpose widgets may contain special code for
     * rendering to the screen and might appear differently on screen
     * and when rendered using gtk_widget_draw().
     * @param cr a cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Ensures that `widget` has a style (`widget->`style).
     * 
     * Not a very useful function; most of the time, if you
     * want the style, the widget is realized, and realized
     * widgets are guaranteed to have a style already.
     */
    ensure_style(): void
    /**
     * Notifies the user about an input-related error on this widget.
     * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
     * gdk_window_beep(), otherwise it does nothing.
     * 
     * Note that the effect of gdk_window_beep() can be configured in many
     * ways, depending on the windowing backend and the desktop environment
     * or window manager that is used.
     */
    error_bell(): void
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    event(event: Gdk.Event): boolean
    /**
     * Stops emission of #GtkWidget::child-notify signals on `widget`. The
     * signals are queued until gtk_widget_thaw_child_notify() is called
     * on `widget`.
     * 
     * This is the analogue of g_object_freeze_notify() for child properties.
     */
    freeze_child_notify(): void
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
     * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
     * ancestry.
     * 
     * If no action group was found matching `prefix,` then %NULL is returned.
     * @param prefix The “prefix” of the action group.
     */
    get_action_group(prefix: string): Gio.ActionGroup | null
    /**
     * Returns the baseline that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function, and when allocating child
     * widgets in #GtkWidget::size_allocate.
     */
    get_allocated_baseline(): number
    /**
     * Returns the height that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    get_allocated_height(): number
    /**
     * Retrieves the widget’s allocated size.
     * 
     * This function returns the last values passed to
     * gtk_widget_size_allocate_with_baseline(). The value differs from
     * the size returned in gtk_widget_get_allocation() in that functions
     * like gtk_widget_set_halign() can adjust the allocation, but not
     * the value returned by this function.
     * 
     * If a widget is not visible, its allocated size is 0.
     */
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    /**
     * Returns the width that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    get_allocated_width(): number
    /**
     * Retrieves the widget’s allocation.
     * 
     * Note, when implementing a #GtkContainer: a widget’s allocation will
     * be its “adjusted” allocation, that is, the widget’s parent
     * container typically calls gtk_widget_size_allocate() with an
     * allocation, and that allocation is then adjusted (to handle margin
     * and alignment for example) before assignment to the widget.
     * gtk_widget_get_allocation() returns the adjusted allocation that
     * was actually assigned to the widget. The adjusted allocation is
     * guaranteed to be completely contained within the
     * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
     * is guaranteed that its children stay inside the assigned bounds,
     * but not that they have exactly the bounds the container assigned.
     * There is no way to get the original allocation assigned by
     * gtk_widget_size_allocate(), since it isn’t stored; if a container
     * implementation needs that information it will have to track it itself.
     */
    get_allocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`. For example,
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
     * the first #GtkBox that’s an ancestor of `widget`. No reference will be
     * added to the returned widget; it should not be unreferenced. See note
     * about checking for a toplevel #GtkWindow in the docs for
     * gtk_widget_get_toplevel().
     * 
     * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
     * considers `widget` to be an ancestor of itself.
     * @param widget_type ancestor type
     */
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    /**
     * Determines whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * See gtk_widget_set_app_paintable()
     */
    get_app_paintable(): boolean
    /**
     * Determines whether `widget` can be a default widget. See
     * gtk_widget_set_can_default().
     */
    get_can_default(): boolean
    /**
     * Determines whether `widget` can own the input focus. See
     * gtk_widget_set_can_focus().
     */
    get_can_focus(): boolean
    /**
     * This function is only for use in widget implementations. Obtains
     * `widget->`requisition, unless someone has forced a particular
     * geometry on the widget (e.g. with gtk_widget_set_size_request()),
     * in which case it returns that geometry instead of the widget's
     * requisition.
     * 
     * This function differs from gtk_widget_size_request() in that
     * it retrieves the last size request value from `widget->`requisition,
     * while gtk_widget_size_request() actually calls the "size_request" method
     * on `widget` to compute the size request and fill in `widget->`requisition,
     * and only then returns `widget->`requisition.
     * 
     * Because this function does not call the “size_request” method, it
     * can only be used when you know that `widget->`requisition is
     * up-to-date, that is, gtk_widget_size_request() has been called
     * since the last time a resize was queued. In general, only container
     * implementations have this information; applications should use
     * gtk_widget_size_request().
     */
    get_child_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     */
    get_child_visible(): boolean
    /**
     * Retrieves the widget’s clip area.
     * 
     * The clip area is the area in which all of `widget'`s drawing will
     * happen. Other toolkits call it the bounding box.
     * 
     * Historically, in GTK+ the clip area has been equal to the allocation
     * retrieved via gtk_widget_get_allocation().
     */
    get_clip(): /* clip */ Gtk.Allocation
    /**
     * Returns the clipboard object for the given selection to
     * be used with `widget`. `widget` must have a #GdkDisplay
     * associated with it, so must be attached to a toplevel
     * window.
     * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
     */
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    /**
     * Obtains the composite name of a widget.
     */
    get_composite_name(): string
    /**
     * Returns whether `device` can interact with `widget` and its
     * children. See gtk_widget_set_device_enabled().
     * @param device a #GdkDevice
     */
    get_device_enabled(device: Gdk.Device): boolean
    /**
     * Returns the events mask for the widget corresponding to an specific device. These
     * are the events that the widget will receive when `device` operates on it.
     * @param device a #GdkDevice
     */
    get_device_events(device: Gdk.Device): Gdk.EventMask
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     */
    get_direction(): Gtk.TextDirection
    /**
     * Get the #GdkDisplay for the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the widget is double buffered.
     * 
     * See gtk_widget_set_double_buffered()
     */
    get_double_buffered(): boolean
    /**
     * Returns the event mask (see #GdkEventMask) for the widget. These are the
     * events that the widget will receive.
     * 
     * Note: Internally, the widget event mask will be the logical OR of the event
     * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
     * event mask necessary to cater for every #GtkEventController created for the
     * widget.
     */
    get_events(): number
    /**
     * Returns whether the widget should grab focus when it is clicked with the mouse.
     * See gtk_widget_set_focus_on_click().
     */
    get_focus_on_click(): boolean
    /**
     * Gets the font map that has been set with gtk_widget_set_font_map().
     */
    get_font_map(): Pango.FontMap | null
    /**
     * Returns the #cairo_font_options_t used for Pango rendering. When not set,
     * the defaults font options for the #GdkScreen will be used.
     */
    get_font_options(): cairo.FontOptions | null
    /**
     * Obtains the frame clock for a widget. The frame clock is a global
     * “ticker” that can be used to drive animations and repaints.  The
     * most common reason to get the frame clock is to call
     * gdk_frame_clock_get_frame_time(), in order to get a time to use for
     * animating. For example you might record the start of the animation
     * with an initial value from gdk_frame_clock_get_frame_time(), and
     * then update the animation by calling
     * gdk_frame_clock_get_frame_time() again during each repaint.
     * 
     * gdk_frame_clock_request_phase() will result in a new frame on the
     * clock, but won’t necessarily repaint any widgets. To repaint a
     * widget, you have to use gtk_widget_queue_draw() which invalidates
     * the widget (thus scheduling it to receive a draw on the next
     * frame). gtk_widget_queue_draw() will also end up requesting a frame
     * on the appropriate frame clock.
     * 
     * A widget’s frame clock will not change while the widget is
     * mapped. Reparenting a widget (which implies a temporary unmap) can
     * change the widget’s frame clock.
     * 
     * Unrealized widgets do not have a frame clock.
     */
    get_frame_clock(): Gdk.FrameClock | null
    /**
     * Gets the value of the #GtkWidget:halign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
     * alignment.
     */
    get_halign(): Gtk.Align
    /**
     * Returns the current value of the has-tooltip property.  See
     * #GtkWidget:has-tooltip for more information.
     */
    get_has_tooltip(): boolean
    /**
     * Determines whether `widget` has a #GdkWindow of its own. See
     * gtk_widget_set_has_window().
     */
    get_has_window(): boolean
    /**
     * Gets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Containers should use gtk_widget_compute_expand() rather than
     * this function, to see whether a widget, or any of its children,
     * has the expand flag set. If any child of a widget wants to
     * expand, the parent may ask to expand also.
     * 
     * This function only looks at the widget’s own hexpand flag, rather
     * than computing whether the entire widget tree rooted at this widget
     * wants to expand.
     */
    get_hexpand(): boolean
    /**
     * Gets whether gtk_widget_set_hexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     */
    get_hexpand_set(): boolean
    /**
     * Whether the widget is mapped.
     */
    get_mapped(): boolean
    /**
     * Gets the value of the #GtkWidget:margin-bottom property.
     */
    get_margin_bottom(): number
    /**
     * Gets the value of the #GtkWidget:margin-end property.
     */
    get_margin_end(): number
    /**
     * Gets the value of the #GtkWidget:margin-left property.
     */
    get_margin_left(): number
    /**
     * Gets the value of the #GtkWidget:margin-right property.
     */
    get_margin_right(): number
    /**
     * Gets the value of the #GtkWidget:margin-start property.
     */
    get_margin_start(): number
    /**
     * Gets the value of the #GtkWidget:margin-top property.
     */
    get_margin_top(): number
    /**
     * Returns the modifier mask the `widget’`s windowing system backend
     * uses for a particular purpose.
     * 
     * See gdk_keymap_get_modifier_mask().
     * @param intent the use case for the modifier mask
     */
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    /**
     * Returns the current modifier style for the widget. (As set by
     * gtk_widget_modify_style().) If no style has previously set, a new
     * #GtkRcStyle will be created with all values unset, and set as the
     * modifier style for the widget. If you make changes to this rc
     * style, you must call gtk_widget_modify_style(), passing in the
     * returned rc style, to make sure that your changes take effect.
     * 
     * Caution: passing the style back to gtk_widget_modify_style() will
     * normally end up destroying it, because gtk_widget_modify_style() copies
     * the passed-in style and sets the copy as the new modifier style,
     * thus dropping any reference to the old modifier style. Add a reference
     * to the modifier style if you want to keep it alive.
     */
    get_modifier_style(): Gtk.RcStyle
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    get_name(): string
    /**
     * Returns the current value of the #GtkWidget:no-show-all property,
     * which determines whether calls to gtk_widget_show_all()
     * will affect this widget.
     */
    get_no_show_all(): boolean
    /**
     * Fetches the requested opacity for this widget.
     * See gtk_widget_set_opacity().
     */
    get_opacity(): number
    /**
     * Gets a #PangoContext with the appropriate font map, font description,
     * and base direction for this widget. Unlike the context returned
     * by gtk_widget_create_pango_context(), this context is owned by
     * the widget (it can be used until the screen for the widget changes
     * or the widget is removed from its toplevel), and will be updated to
     * match any changes to the widget’s attributes. This can be tracked
     * by using the #GtkWidget::screen-changed signal on the widget.
     */
    get_pango_context(): Pango.Context
    /**
     * Returns the parent container of `widget`.
     */
    get_parent(): Gtk.Widget | null
    /**
     * Gets `widget’`s parent window, or %NULL if it does not have one.
     */
    get_parent_window(): Gdk.Window | null
    /**
     * Returns the #GtkWidgetPath representing `widget,` if the widget
     * is not connected to a toplevel widget, a partial path will be
     * created.
     */
    get_path(): Gtk.WidgetPath
    /**
     * Obtains the location of the mouse pointer in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     */
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves the minimum and natural size of a widget, taking
     * into account the widget’s preference for height-for-width management.
     * 
     * This is used to retrieve a suitable size by container widgets which do
     * not impose any restrictions on the child placement. It can be used
     * to deduce toplevel window and menu sizes as well as child widgets in
     * free-form containers such as GtkLayout.
     * 
     * Handle with care. Note that the natural height of a height-for-width
     * widget will generally be a smaller size than the minimum height, since the required
     * height for the natural width is generally smaller than the required height for
     * the minimum width.
     * 
     * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
     * baseline alignment.
     */
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Determines whether `widget` is realized.
     */
    get_realized(): boolean
    /**
     * Determines whether `widget` is always treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_set_receives_default().
     */
    get_receives_default(): boolean
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    get_request_mode(): Gtk.SizeRequestMode
    /**
     * Retrieves the widget’s requisition.
     * 
     * This function should only be used by widget implementations in
     * order to figure whether the widget’s requisition has actually
     * changed after some internal state change (so that they can call
     * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
     * 
     * Normally, gtk_widget_size_request() should be used.
     */
    get_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Get the root window where this widget is located. This function can
     * only be called after the widget has been added to a widget
     * hierarchy with #GtkWindow at the top.
     * 
     * The root window is useful for such purposes as creating a popup
     * #GdkWindow associated with the window. In general, you should only
     * create display specific resources when a widget has been realized,
     * and you should free those resources when the widget is unrealized.
     */
    get_root_window(): Gdk.Window
    /**
     * Retrieves the internal scale factor that maps from window coordinates
     * to the actual device pixels. On traditional systems this is 1, on
     * high density outputs, it can be a higher value (typically 2).
     * 
     * See gdk_window_get_scale_factor().
     */
    get_scale_factor(): number
    /**
     * Get the #GdkScreen from the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow
     * at the top.
     * 
     * In general, you should only create screen specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_screen(): Gdk.Screen
    /**
     * Returns the widget’s sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
     */
    get_sensitive(): boolean
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request(). A value of -1 stored in `width` or
     * `height` indicates that that dimension has not been set explicitly
     * and the natural requisition of the widget will be used instead. See
     * gtk_widget_set_size_request(). To get the size a widget will
     * actually request, call gtk_widget_get_preferred_size() instead of
     * this function.
     */
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    /**
     * Returns the widget state as a flag set. It is worth mentioning
     * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
     * returned, that is, also based on parent insensitivity, even if
     * `widget` itself is sensitive.
     * 
     * Also note that if you are looking for a way to obtain the
     * #GtkStateFlags to pass to a #GtkStyleContext method, you
     * should look at gtk_style_context_get_state().
     */
    get_state_flags(): Gtk.StateFlags
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    get_style(): Gtk.Style
    /**
     * Returns the style context associated to `widget`. The returned object is
     * guaranteed to be the same for the lifetime of `widget`.
     */
    get_style_context(): Gtk.StyleContext
    /**
     * Returns %TRUE if `widget` is multiple pointer aware. See
     * gtk_widget_set_support_multidevice() for more information.
     */
    get_support_multidevice(): boolean
    /**
     * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
     * 
     * This will only report children which were previously declared with
     * gtk_widget_class_bind_template_child_full() or one of its
     * variants.
     * 
     * This function is only meant to be called for code which is private to the `widget_type` which
     * declared the child and is meant for language bindings which cannot easily make use
     * of the GObject structure offsets.
     * @param widget_type The #GType to get a template child for
     * @param name The “id” of the child defined in the template XML
     */
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_markup(): string | null
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_text(): string | null
    /**
     * Returns the #GtkWindow of the current tooltip. This can be the
     * GtkWindow created by default, or the custom tooltip window set
     * using gtk_widget_set_tooltip_window().
     */
    get_tooltip_window(): Gtk.Window
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    get_toplevel(): Gtk.Widget
    /**
     * Gets the value of the #GtkWidget:valign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
     * children it must use gtk_widget_get_valign_with_baseline(), or
     * `g_object_get (widget, "valign", &value, NULL)`, which will
     * also report the true value.
     */
    get_valign(): Gtk.Align
    /**
     * Gets the value of the #GtkWidget:valign property, including
     * %GTK_ALIGN_BASELINE.
     */
    get_valign_with_baseline(): Gtk.Align
    /**
     * Gets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_get_hexpand() for more detail.
     */
    get_vexpand(): boolean
    /**
     * Gets whether gtk_widget_set_vexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * See gtk_widget_get_hexpand_set() for more detail.
     */
    get_vexpand_set(): boolean
    /**
     * Determines whether the widget is visible. If you want to
     * take into account whether the widget’s parent is also marked as
     * visible, use gtk_widget_is_visible() instead.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See gtk_widget_set_visible().
     */
    get_visible(): boolean
    /**
     * Gets the visual that will be used to render `widget`.
     */
    get_visual(): Gdk.Visual
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    get_window(): Gdk.Window | null
    /**
     * Makes `widget` the current grabbed widget.
     * 
     * This means that interaction with other widgets in the same
     * application is blocked and mouse as well as keyboard events
     * are delivered to this widget.
     * 
     * If `widget` is not sensitive, it is not set as the current
     * grabbed widget and this function does nothing.
     */
    grab_add(): void
    /**
     * Causes `widget` to become the default widget. `widget` must be able to be
     * a default widget; typically you would ensure this yourself
     * by calling gtk_widget_set_can_default() with a %TRUE value.
     * The default widget is activated when
     * the user presses Enter in a window. Default widgets must be
     * activatable, that is, gtk_widget_activate() should affect them. Note
     * that #GtkEntry widgets require the “activates-default” property
     * set to %TRUE before they activate the default widget when Enter
     * is pressed and the #GtkEntry is focused.
     */
    grab_default(): void
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    grab_focus(): void
    /**
     * Removes the grab from the given widget.
     * 
     * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
     * 
     * If `widget` does not have the grab, this function does nothing.
     */
    grab_remove(): void
    /**
     * Determines whether the widget is currently grabbing events, so it
     * is the only widget receiving input events (keyboard and mouse).
     * 
     * See also gtk_grab_add().
     */
    has_grab(): boolean
    /**
     * Determines if the widget style has been looked up through the rc mechanism.
     */
    has_rc_style(): boolean
    /**
     * Checks whether there is a #GdkScreen is associated with
     * this widget. All toplevel widgets have an associated
     * screen, and all widgets added into a hierarchy with a toplevel
     * window at the top.
     */
    has_screen(): boolean
    /**
     * Determines if the widget should show a visible indication that
     * it has the global input focus. This is a convenience function for
     * use in ::draw handlers that takes into account whether focus
     * indication should currently be shown in the toplevel window of
     * `widget`. See gtk_window_get_focus_visible() for more information
     * about focus indication.
     * 
     * To find out if the widget has the global input focus, use
     * gtk_widget_has_focus().
     */
    has_visible_focus(): boolean
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    hide(): void
    /**
     * Utility function; intended to be connected to the #GtkWidget::delete-event
     * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
     * argument, then returns %TRUE. If connected to ::delete-event, the
     * result is that clicking the close button for a window (on the
     * window frame, top right corner usually) will hide but not destroy
     * the window. By default, GTK+ destroys windows when ::delete-event
     * is received.
     */
    hide_on_delete(): boolean
    /**
     * Returns whether the widget is currently being destroyed.
     * This information can sometimes be used to avoid doing
     * unnecessary work.
     */
    in_destruction(): boolean
    /**
     * Creates and initializes child widgets defined in templates. This
     * function must be called in the instance initializer for any
     * class which assigned itself a template using gtk_widget_class_set_template()
     * 
     * It is important to call this function in the instance initializer
     * of a #GtkWidget subclass and not in #GObject.constructed() or
     * #GObject.constructor() for two reasons.
     * 
     * One reason is that generally derived widgets will assume that parent
     * class composite widgets have been created in their instance
     * initializers.
     * 
     * Another reason is that when calling g_object_new() on a widget with
     * composite templates, it’s important to build the composite widgets
     * before the construct properties are set. Properties passed to g_object_new()
     * should take precedence over properties set in the private template XML.
     */
    init_template(): void
    /**
     * Sets an input shape for this widget’s GDK window. This allows for
     * windows which react to mouse click in a nonrectangular region, see
     * gdk_window_input_shape_combine_region() for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    input_shape_combine_region(region?: cairo.Region | null): void
    /**
     * Inserts `group` into `widget`. Children of `widget` that implement
     * #GtkActionable can then be associated with actions in `group` by
     * setting their “action-name” to
     * `prefix`.`action-name`.
     * 
     * If `group` is %NULL, a previously inserted group for `name` is removed
     * from `widget`.
     * @param name the prefix for actions in `group`
     * @param group a #GActionGroup, or %NULL
     */
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    /**
     * Computes the intersection of a `widget’`s area and `area,` storing
     * the intersection in `intersection,` and returns %TRUE if there was
     * an intersection.  `intersection` may be %NULL if you’re only
     * interested in whether there was an intersection.
     * @param area a rectangle
     */
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GtkWidget
     */
    is_ancestor(ancestor: Gtk.Widget): boolean
    /**
     * Whether `widget` can rely on having its alpha channel
     * drawn correctly. On X11 this function returns whether a
     * compositing manager is running for `widget’`s screen.
     * 
     * Please note that the semantics of this call will change
     * in the future if used on a widget that has a composited
     * window in its hierarchy (as set by gdk_window_set_composited()).
     */
    is_composited(): boolean
    /**
     * Determines whether `widget` can be drawn to. A widget can be drawn
     * to if it is mapped and visible.
     */
    is_drawable(): boolean
    /**
     * Returns the widget’s effective sensitivity, which means
     * it is sensitive itself and also its parent widget is sensitive
     */
    is_sensitive(): boolean
    /**
     * Determines whether `widget` is a toplevel widget.
     * 
     * Currently only #GtkWindow and #GtkInvisible (and out-of-process
     * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
     * widget.
     */
    is_toplevel(): boolean
    /**
     * Determines whether the widget and all its parents are marked as
     * visible.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See also gtk_widget_get_visible() and gtk_widget_set_visible()
     */
    is_visible(): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Lists the closures used by `widget` for accelerator group connections
     * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
     * The closures can be used to monitor accelerator changes on `widget,`
     * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
     * #GtkAccelGroup of a closure which can be found out with
     * gtk_accel_group_from_accel_closure().
     */
    list_accel_closures(): Function[]
    /**
     * Retrieves a %NULL-terminated array of strings containing the prefixes of
     * #GActionGroup's available to `widget`.
     */
    list_action_prefixes(): string[]
    /**
     * Returns a newly allocated list of the widgets, normally labels, for
     * which this widget is the target of a mnemonic (see for example,
     * gtk_label_set_mnemonic_widget()).
     * 
     * The widgets in the list are not individually referenced. If you
     * want to iterate through the list and perform actions involving
     * callbacks that might destroy the widgets, you
     * must call `g_list_foreach (result,
     * (GFunc)g_object_ref, NULL)` first, and then unref all the
     * widgets afterwards.
     */
    list_mnemonic_labels(): Gtk.Widget[]
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    map(): void
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Sets the base color for a widget in a particular state.
     * All other style values are left untouched. The base color
     * is the background color used along with the text color
     * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
     * and #GtkTextView. See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > base color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the base color on that.
     * @param state the state for which to set the base color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
     */
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > background color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the background color on that.
     * @param state the state for which to set the background color
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
     */
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the #GtkWidget
     * cursor-color and secondary-cursor-color
     * style properties.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
     * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
     */
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    /**
     * Sets the foreground color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the foreground color
     * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
     */
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the font to use for a widget.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
     */
    modify_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Modifies style values on the widget.
     * 
     * Modifications made using this technique take precedence over
     * style values set via an RC file, however, they will be overridden
     * if a style is explicitly set on the widget using gtk_widget_set_style().
     * The #GtkRcStyle-struct is designed so each field can either be
     * set or unset, so it is possible, using this function, to modify some
     * style values and leave the others unchanged.
     * 
     * Note that modifications made with this function are not cumulative
     * with previous calls to gtk_widget_modify_style() or with such
     * functions as gtk_widget_modify_fg(). If you wish to retain
     * previous values, you must first call gtk_widget_get_modifier_style(),
     * make your modifications to the returned style, then call
     * gtk_widget_modify_style() with that style. On the other hand,
     * if you first call gtk_widget_modify_style(), subsequent calls
     * to such functions gtk_widget_modify_fg() will have a cumulative
     * effect with the initial modifications.
     * @param style the #GtkRcStyle-struct holding the style modifications
     */
    modify_style(style: Gtk.RcStyle): void
    /**
     * Sets the text color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * The text color is the foreground color used along with the
     * base color (see gtk_widget_modify_base()) for widgets such
     * as #GtkEntry and #GtkTextView.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the text color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
     */
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color to use for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color().
     * @param state the state for which to set the background color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
     */
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the color to use for a widget.
     * 
     * All other style values are left untouched.
     * 
     * This function does not act recursively. Setting the color of a
     * container does not affect its children. Note that some widgets that
     * you may not think of as containers, for instance #GtkButtons,
     * are actually containers.
     * 
     * This API is mostly meant as a quick way for applications to
     * change a widget appearance. If you are developing a widgets
     * library and intend this change to be themeable, it is better
     * done by setting meaningful CSS classes in your
     * widget/container implementation through gtk_style_context_add_class().
     * 
     * This way, your widget library can install a #GtkCssProvider
     * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
     * to provide a default styling for those widgets that need so, and
     * this theming may fully overridden by the user’s theme.
     * 
     * Note that for complex widgets this may bring in undesired
     * results (such as uniform background color everywhere), in
     * these cases it is better to fully style such widgets through a
     * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
     * priority.
     * @param state the state for which to set the color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
     */
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the
     * cursor-color and secondary-cursor-color
     * style properties. All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * Note that the underlying properties have the #GdkColor type,
     * so the alpha value in `primary` and `secondary` will be ignored.
     * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
     * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
     */
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    /**
     * Sets the font to use for a widget. All other style values are
     * left untouched. See gtk_widget_override_color().
     * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
     */
    override_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Sets a symbolic color for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color() for overriding the foreground
     * or background color.
     * @param name the name of the symbolic color to modify
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
     */
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    /**
     * Obtains the full path to `widget`. The path is simply the name of a
     * widget and all its parents in the container hierarchy, separated by
     * periods. The name of a widget comes from
     * gtk_widget_get_name(). Paths are used to apply styles to a widget
     * in gtkrc configuration files. Widget names are the type of the
     * widget by default (e.g. “GtkButton”) or can be set to an
     * application-specific value with gtk_widget_set_name(). By setting
     * the name of a widget, you allow users or theme authors to apply
     * styles to that specific widget in their gtkrc
     * file. `path_reversed_p` fills in the path in reverse order,
     * i.e. starting with `widget’`s name instead of starting with the name
     * of `widget’`s outermost ancestor.
     */
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * This function is only for use in widget implementations.
     * 
     * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
     * function. Use this function instead of gtk_widget_queue_resize()
     * when the `widget'`s size request didn't change but it wants to
     * reposition its contents.
     * 
     * An example user of this function is gtk_widget_set_halign().
     */
    queue_allocate(): void
    /**
     * Mark `widget` as needing to recompute its expand flags. Call
     * this function when setting legacy expand child properties
     * on the child of a container.
     * 
     * See gtk_widget_compute_expand().
     */
    queue_compute_expand(): void
    /**
     * Equivalent to calling gtk_widget_queue_draw_area() for the
     * entire area of a widget.
     */
    queue_draw(): void
    /**
     * Convenience function that calls gtk_widget_queue_draw_region() on
     * the region created from the given coordinates.
     * 
     * The region here is specified in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     * 
     * `width` or `height` may be 0, in this case this function does
     * nothing. Negative values for `width` and `height` are not allowed.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_draw_area(x: number, y: number, width: number, height: number): void
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    queue_draw_region(region: cairo.Region): void
    /**
     * This function is only for use in widget implementations.
     * Flags a widget to have its size renegotiated; should
     * be called when a widget for some reason has a new size request.
     * For example, when you change the text in a #GtkLabel, #GtkLabel
     * queues a resize to ensure there’s enough space for the new text.
     * 
     * Note that you cannot call gtk_widget_queue_resize() on a widget
     * from inside its implementation of the GtkWidgetClass::size_allocate
     * virtual method. Calls to gtk_widget_queue_resize() from inside
     * GtkWidgetClass::size_allocate will be silently ignored.
     */
    queue_resize(): void
    /**
     * This function works like gtk_widget_queue_resize(),
     * except that the widget is not invalidated.
     */
    queue_resize_no_redraw(): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    realize(): void
    /**
     * Computes the intersection of a `widget’`s area and `region,` returning
     * the intersection. The result may be empty, use cairo_region_is_empty() to
     * check.
     * @param region a #cairo_region_t, in the same coordinate system as          `widget->`allocation. That is, relative to `widget->`window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of `widget->`window otherwise.
     */
    region_intersect(region: cairo.Region): cairo.Region
    /**
     * Registers a #GdkWindow with the widget and sets it up so that
     * the widget receives events for it. Call gtk_widget_unregister_window()
     * when destroying the window.
     * 
     * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
     * this up. This is now deprecated and you should use gtk_widget_register_window()
     * instead. Old code will keep working as is, although some new features like
     * transparency might not work perfectly.
     * @param window a #GdkWindow
     */
    register_window(window: Gdk.Window): void
    /**
     * Removes an accelerator from `widget,` previously installed with
     * gtk_widget_add_accelerator().
     * @param accel_group accel group for this widget
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     */
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    /**
     * Removes a widget from the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
     * must have previously been added to the list with
     * gtk_widget_add_mnemonic_label().
     * @param label a #GtkWidget that was previously set as a mnemonic label for         `widget` with gtk_widget_add_mnemonic_label().
     */
    remove_mnemonic_label(label: Gtk.Widget): void
    /**
     * Removes a tick callback previously registered with
     * gtk_widget_add_tick_callback().
     * @param id an id returned by gtk_widget_add_tick_callback()
     */
    remove_tick_callback(id: number): void
    /**
     * A convenience function that uses the theme settings for `widget`
     * to look up `stock_id` and render it to a pixbuf. `stock_id` should
     * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
     * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
     * string that identifies the widget or code doing the rendering, so
     * that theme engines can special-case rendering for that widget or
     * code.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be
     * freed after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     * @param detail render detail to pass to theme engine
     */
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    /**
     * A convenience function that uses the theme engine and style
     * settings for `widget` to look up `stock_id` and render it to
     * a pixbuf. `stock_id` should be a stock icon ID such as
     * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
     * such as #GTK_ICON_SIZE_MENU.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be freed
     * after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     */
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    /**
     * Moves a widget from one #GtkContainer to another, handling reference
     * count issues to avoid destroying the widget.
     * @param new_parent a #GtkContainer to move the widget into
     */
    reparent(new_parent: Gtk.Widget): void
    /**
     * Reset the styles of `widget` and all descendents, so when
     * they are looked up again, they get the correct values
     * for the currently loaded RC file settings.
     * 
     * This function is not useful for applications.
     */
    reset_rc_styles(): void
    /**
     * Updates the style context of `widget` and all descendants
     * by updating its widget path. #GtkContainers may want
     * to use this on a child when reordering it in a way that a different
     * style might apply to it. See also gtk_container_get_path_for_child().
     */
    reset_style(): void
    /**
     * Very rarely-used function. This function is used to emit
     * an expose event on a widget. This function is not normally used
     * directly. The only time it is used is when propagating an expose
     * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
     * and that is normally done using gtk_container_propagate_draw().
     * 
     * If you want to force an area of a window to be redrawn,
     * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
     * To cause the redraw to be done immediately, follow that call
     * with a call to gdk_window_process_updates().
     * @param event a expose #GdkEvent
     */
    send_expose(event: Gdk.Event): number
    /**
     * Sends the focus change `event` to `widget`
     * 
     * This function is not meant to be used by applications. The only time it
     * should be used is when it is necessary for a #GtkWidget to assign focus
     * to a widget that is semantically owned by the first widget even though
     * it’s not a direct child - for instance, a search entry in a floating
     * window similar to the quick search in #GtkTreeView.
     * 
     * An example of its usage is:
     * 
     * 
     * ```c
     *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
     * 
     *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
     *   fevent->focus_change.in = TRUE;
     *   fevent->focus_change.window = _gtk_widget_get_window (widget);
     *   if (fevent->focus_change.window != NULL)
     *     g_object_ref (fevent->focus_change.window);
     * 
     *   gtk_widget_send_focus_change (widget, fevent);
     * 
     *   gdk_event_free (event);
     * ```
     * 
     * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
     */
    send_focus_change(event: Gdk.Event): boolean
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accel_path path used to look up the accelerator
     * @param accel_group a #GtkAccelGroup.
     */
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    /**
     * Sets the widget’s allocation.  This should not be used
     * directly, but from within a widget’s size_allocate method.
     * 
     * The allocation set should be the “adjusted” or actual
     * allocation. If you’re implementing a #GtkContainer, you want to use
     * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
     * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
     * allocation inside gtk_widget_size_allocate() to create an adjusted
     * allocation.
     * @param allocation a pointer to a #GtkAllocation to copy from
     */
    set_allocation(allocation: Gtk.Allocation): void
    /**
     * Sets whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * This is a hint to the widget and does not affect the behavior of
     * the GTK+ core; many widgets ignore this flag entirely. For widgets
     * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
     * the effect is to suppress default themed drawing of the widget's
     * background. (Children of the widget will still be drawn.) The application
     * is then entirely responsible for drawing the widget background.
     * 
     * Note that the background is still drawn when the widget is mapped.
     * @param app_paintable %TRUE if the application will paint on the widget
     */
    set_app_paintable(app_paintable: boolean): void
    /**
     * Specifies whether `widget` can be a default widget. See
     * gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param can_default whether or not `widget` can be a default widget.
     */
    set_can_default(can_default: boolean): void
    /**
     * Specifies whether `widget` can own the input focus. See
     * gtk_widget_grab_focus() for actually setting the input focus on a
     * widget.
     * @param can_focus whether or not `widget` can own the input focus.
     */
    set_can_focus(can_focus: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its when its parent
     * is mapped and `widget` has been shown with gtk_widget_show().
     * 
     * The child visibility can be set for widget before it is added to
     * a container with gtk_widget_set_parent(), to avoid mapping
     * children unnecessary before immediately unmapping them. However
     * it will be reset to its default state of %TRUE when the widget
     * is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     * @param is_visible if %TRUE, `widget` should be mapped along with its parent.
     */
    set_child_visible(is_visible: boolean): void
    /**
     * Sets the widget’s clip.  This must not be used directly,
     * but from within a widget’s size_allocate method.
     * It must be called after gtk_widget_set_allocation() (or after chaining up
     * to the parent class), because that function resets the clip.
     * 
     * The clip set should be the area that `widget` draws on. If `widget` is a
     * #GtkContainer, the area must contain all children's clips.
     * 
     * If this function is not called by `widget` during a ::size-allocate handler,
     * the clip will be set to `widget'`s allocation.
     * @param clip a pointer to a #GtkAllocation to copy from
     */
    set_clip(clip: Gtk.Allocation): void
    /**
     * Sets a widgets composite name. The widget must be
     * a composite child of its parent; see gtk_widget_push_composite_child().
     * @param name the name to set
     */
    set_composite_name(name: string): void
    /**
     * Enables or disables a #GdkDevice to interact with `widget`
     * and all its children.
     * 
     * It does so by descending through the #GdkWindow hierarchy
     * and enabling the same mask that is has for core events
     * (i.e. the one that gdk_window_get_events() returns).
     * @param device a #GdkDevice
     * @param enabled whether to enable the device
     */
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    /**
     * Sets the device event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive from `device`. Keep
     * in mind that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_device_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with windowless widgets (which return
     * %FALSE from gtk_widget_get_has_window());
     * to get events on those widgets, place them inside a #GtkEventBox
     * and receive events on the event box.
     * @param device a #GdkDevice
     * @param events event mask
     */
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Widgets are double buffered by default; you can use this function
     * to turn off the buffering. “Double buffered” simply means that
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
     * automatically around expose events sent to the
     * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
     * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
     * buffer to the screen. The result is that users see the window
     * update in one smooth step, and don’t see individual graphics
     * primitives being rendered.
     * 
     * In very simple terms, double buffered widgets don’t flicker,
     * so you would only use this function to turn off double buffering
     * if you had special needs and really knew what you were doing.
     * 
     * Note: if you turn off double-buffering, you have to handle
     * expose events, since even the clearing to the background color or
     * pixmap will not happen automatically (as it is done in
     * gdk_window_begin_draw_frame()).
     * 
     * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
     * then expose events for double-buffered widgets are culled into a single
     * event to the toplevel GDK window. If you now unset double buffering, you
     * will cause a separate rendering pass for every widget. This will likely
     * cause rendering problems - in particular related to stacking - and usually
     * increases rendering times significantly.
     * @param double_buffered %TRUE to double-buffer a widget
     */
    set_double_buffered(double_buffered: boolean): void
    /**
     * Sets the event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive. Keep in mind
     * that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with widgets that have no window.
     * (See gtk_widget_get_has_window()).  To get events on those widgets,
     * place them inside a #GtkEventBox and receive events on the event
     * box.
     * @param events event mask
     */
    set_events(events: number): void
    /**
     * Sets whether the widget should grab focus when it is clicked with the mouse.
     * Making mouse clicks not grab focus is useful in places like toolbars where
     * you don’t want the keyboard focus removed from the main area of the
     * application.
     * @param focus_on_click whether the widget should grab focus when clicked with the mouse
     */
    set_focus_on_click(focus_on_click: boolean): void
    /**
     * Sets the font map to use for Pango rendering. When not set, the widget
     * will inherit the font map from its parent.
     * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
     */
    set_font_map(font_map?: Pango.FontMap | null): void
    /**
     * Sets the #cairo_font_options_t used for Pango rendering in this widget.
     * When not set, the default font options for the #GdkScreen will be used.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    set_font_options(options?: cairo.FontOptions | null): void
    /**
     * Sets the horizontal alignment of `widget`.
     * See the #GtkWidget:halign property.
     * @param align the horizontal alignment
     */
    set_halign(align: Gtk.Align): void
    /**
     * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
     * #GtkWidget:has-tooltip for more information.
     * @param has_tooltip whether or not `widget` has a tooltip.
     */
    set_has_tooltip(has_tooltip: boolean): void
    /**
     * Specifies whether `widget` has a #GdkWindow of its own. Note that
     * all realized widgets have a non-%NULL “window” pointer
     * (gtk_widget_get_window() never returns a %NULL window when a widget
     * is realized), but for many of them it’s actually the #GdkWindow of
     * one of its parent widgets. Widgets that do not create a %window for
     * themselves in #GtkWidget::realize must announce this by
     * calling this function with `has_window` = %FALSE.
     * 
     * This function should only be called by widget implementations,
     * and they should call it in their init() function.
     * @param has_window whether or not `widget` has a window.
     */
    set_has_window(has_window: boolean): void
    /**
     * Sets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Call this function to set the expand flag if you would like your
     * widget to become larger horizontally when the window has extra
     * room.
     * 
     * By default, widgets automatically expand if any of their children
     * want to expand. (To see if a widget will automatically expand given
     * its current children and state, call gtk_widget_compute_expand(). A
     * container can decide how the expandability of children affects the
     * expansion of the container by overriding the compute_expand virtual
     * method on #GtkWidget.).
     * 
     * Setting hexpand explicitly with this function will override the
     * automatic expand behavior.
     * 
     * This function forces the widget to expand or not to expand,
     * regardless of children.  The override occurs because
     * gtk_widget_set_hexpand() sets the hexpand-set property (see
     * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
     * value to be used, rather than looking at children and widget state.
     * @param expand whether to expand
     */
    set_hexpand(expand: boolean): void
    /**
     * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
     * be used.
     * 
     * The hexpand-set property will be set automatically when you call
     * gtk_widget_set_hexpand() to set hexpand, so the most likely
     * reason to use this function would be to unset an explicit expand
     * flag.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     * @param set value for hexpand-set property
     */
    set_hexpand_set(set: boolean): void
    /**
     * Marks the widget as being mapped.
     * 
     * This function should only ever be called in a derived widget's
     * “map” or “unmap” implementation.
     * @param mapped %TRUE to mark the widget as mapped
     */
    set_mapped(mapped: boolean): void
    /**
     * Sets the bottom margin of `widget`.
     * See the #GtkWidget:margin-bottom property.
     * @param margin the bottom margin
     */
    set_margin_bottom(margin: number): void
    /**
     * Sets the end margin of `widget`.
     * See the #GtkWidget:margin-end property.
     * @param margin the end margin
     */
    set_margin_end(margin: number): void
    /**
     * Sets the left margin of `widget`.
     * See the #GtkWidget:margin-left property.
     * @param margin the left margin
     */
    set_margin_left(margin: number): void
    /**
     * Sets the right margin of `widget`.
     * See the #GtkWidget:margin-right property.
     * @param margin the right margin
     */
    set_margin_right(margin: number): void
    /**
     * Sets the start margin of `widget`.
     * See the #GtkWidget:margin-start property.
     * @param margin the start margin
     */
    set_margin_start(margin: number): void
    /**
     * Sets the top margin of `widget`.
     * See the #GtkWidget:margin-top property.
     * @param margin the top margin
     */
    set_margin_top(margin: number): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Sets the #GtkWidget:no-show-all property, which determines whether
     * calls to gtk_widget_show_all() will affect this widget.
     * 
     * This is mostly for use in constructing widget hierarchies with externally
     * controlled visibility, see #GtkUIManager.
     * @param no_show_all the new value for the “no-show-all” property
     */
    set_no_show_all(no_show_all: boolean): void
    /**
     * Request the `widget` to be rendered partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
     * are clamped to the [0,1] range.).
     * This works on both toplevel widget, and child widgets, although there
     * are some limitations:
     * 
     * For toplevel widgets this depends on the capabilities of the windowing
     * system. On X11 this has any effect only on X screens with a compositing manager
     * running. See gtk_widget_is_composited(). On Windows it should work
     * always, although setting a window’s opacity after the window has been
     * shown causes it to flicker once on Windows.
     * 
     * For child widgets it doesn’t work if any affected widget has a native window, or
     * disables double buffering.
     * @param opacity desired opacity, between 0 and 1
     */
    set_opacity(opacity: number): void
    /**
     * This function is useful only when implementing subclasses of
     * #GtkContainer.
     * Sets the container as the parent of `widget,` and takes care of
     * some details such as updating the state and style of the child
     * to reflect its new location. The opposite function is
     * gtk_widget_unparent().
     * @param parent parent container
     */
    set_parent(parent: Gtk.Widget): void
    /**
     * Sets a non default parent window for `widget`.
     * 
     * For #GtkWindow classes, setting a `parent_window` effects whether
     * the window is a toplevel window or can be embedded into other
     * widgets.
     * 
     * For #GtkWindow classes, this needs to be called before the
     * window is realized.
     * @param parent_window the new parent window.
     */
    set_parent_window(parent_window: Gdk.Window): void
    /**
     * Marks the widget as being realized. This function must only be
     * called after all #GdkWindows for the `widget` have been created
     * and registered.
     * 
     * This function should only ever be called in a derived widget's
     * “realize” or “unrealize” implementation.
     * @param realized %TRUE to mark the widget as realized
     */
    set_realized(realized: boolean): void
    /**
     * Specifies whether `widget` will be treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param receives_default whether or not `widget` can be a default widget.
     */
    set_receives_default(receives_default: boolean): void
    /**
     * Sets whether the entire widget is queued for drawing when its size
     * allocation changes. By default, this setting is %TRUE and
     * the entire widget is redrawn on every size change. If your widget
     * leaves the upper left unchanged when made bigger, turning this
     * setting off will improve performance.
     * 
     * Note that for widgets where gtk_widget_get_has_window() is %FALSE
     * setting this flag to %FALSE turns off all allocation on resizing:
     * the widget will not even redraw if its position changes; this is to
     * allow containers that don’t draw anything to avoid excess
     * invalidations. If you set this flag on a widget with no window that
     * does draw on `widget->`window, you are
     * responsible for invalidating both the old and new allocation of the
     * widget when the widget is moved and responsible for invalidating
     * regions newly when the widget increases size.
     * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
     */
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are “grayed out” and the
     * user can’t interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget; that is, the widget’s size
     * request will be at least `width` by `height`. You can use this
     * function to force a widget to be larger than it normally would be.
     * 
     * In most cases, gtk_window_set_default_size() is a better choice for
     * toplevel windows than this function; setting the default size will
     * still allow users to shrink the window. Setting the size request
     * will force them to leave the window at least as large as the size
     * request. When dealing with window sizes,
     * gtk_window_set_geometry_hints() can be a useful function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * 
     * The size request of a widget is the smallest size a widget can
     * accept while still functioning well and drawing itself correctly.
     * However in some strange cases a widget may be allocated less than
     * its requested size, and in many cases a widget may be allocated more
     * space than it requested.
     * 
     * If the size request in a given direction is -1 (unset), then
     * the “natural” size request of the widget will be used instead.
     * 
     * The size request set here does not include any margin from the
     * #GtkWidget properties margin-left, margin-right, margin-top, and
     * margin-bottom, but it does include pretty much all other padding
     * or border properties set by any subclass of #GtkWidget.
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    set_size_request(width: number, height: number): void
    /**
     * This function is for use in widget implementations. Sets the state
     * of a widget (insensitive, prelighted, etc.) Usually you should set
     * the state using wrapper functions such as gtk_widget_set_sensitive().
     * @param state new state for `widget`
     */
    set_state(state: Gtk.StateType): void
    /**
     * This function is for use in widget implementations. Turns on flag
     * values in the current widget state (insensitive, prelighted, etc.).
     * 
     * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
     * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
     * direction, use gtk_widget_set_direction().
     * 
     * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
     * will be propagated down to all non-internal children if `widget` is a
     * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
     * down to all #GtkContainer children by different means than turning on the
     * state flag down the hierarchy, both gtk_widget_get_state_flags() and
     * gtk_widget_is_sensitive() will make use of these.
     * @param flags State flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    set_style(style?: Gtk.Style | null): void
    /**
     * Enables or disables multiple pointer awareness. If this setting is %TRUE,
     * `widget` will start receiving multiple, per device enter/leave events. Note
     * that if custom #GdkWindows are created in #GtkWidget::realize,
     * gdk_window_set_support_multidevice() will have to be called manually on them.
     * @param support_multidevice %TRUE to support input from multiple devices.
     */
    set_support_multidevice(support_multidevice: boolean): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked up with
     *  the [Pango text markup language][PangoMarkupFormat].
     * 
     * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
     * and of the default handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-markup property and
     * gtk_tooltip_set_markup().
     * @param markup the contents of the tooltip for `widget,` or %NULL
     */
    set_tooltip_markup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip. This function will take
     * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
     * handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
     * @param text the contents of the tooltip for `widget`
     */
    set_tooltip_text(text?: string | null): void
    /**
     * Replaces the default window used for displaying
     * tooltips with `custom_window`. GTK+ will take care of showing and
     * hiding `custom_window` at the right moment, to behave likewise as
     * the default tooltip window. If `custom_window` is %NULL, the default
     * tooltip window will be used.
     * @param custom_window a #GtkWindow, or %NULL
     */
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    /**
     * Sets the vertical alignment of `widget`.
     * See the #GtkWidget:valign property.
     * @param align the vertical alignment
     */
    set_valign(align: Gtk.Align): void
    /**
     * Sets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_set_hexpand() for more detail.
     * @param expand whether to expand
     */
    set_vexpand(expand: boolean): void
    /**
     * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
     * be used.
     * 
     * See gtk_widget_set_hexpand_set() for more detail.
     * @param set value for vexpand-set property
     */
    set_vexpand_set(set: boolean): void
    /**
     * Sets the visibility state of `widget`. Note that setting this to
     * %TRUE doesn’t mean the widget is actually viewable, see
     * gtk_widget_get_visible().
     * 
     * This function simply calls gtk_widget_show() or gtk_widget_hide()
     * but is nicer to use when the visibility of the widget depends on
     * some condition.
     * @param visible whether the widget should be shown or not
     */
    set_visible(visible: boolean): void
    /**
     * Sets the visual that should be used for by widget and its children for
     * creating #GdkWindows. The visual must be on the same #GdkScreen as
     * returned by gtk_widget_get_screen(), so handling the
     * #GtkWidget::screen-changed signal is necessary.
     * 
     * Setting a new `visual` will not cause `widget` to recreate its windows,
     * so you should call this function before `widget` is realized.
     * @param visual visual to be used or %NULL to unset a previous one
     */
    set_visual(visual?: Gdk.Visual | null): void
    /**
     * Sets a widget’s window. This function should only be used in a
     * widget’s #GtkWidget::realize implementation. The %window passed is
     * usually either new window created with gdk_window_new(), or the
     * window of its parent widget as returned by
     * gtk_widget_get_parent_window().
     * 
     * Widgets must indicate whether they will create their own #GdkWindow
     * by calling gtk_widget_set_has_window(). This is usually done in the
     * widget’s init() function.
     * 
     * Note that this function does not add any reference to `window`.
     * @param window a #GdkWindow
     */
    set_window(window: Gdk.Window): void
    /**
     * Sets a shape for this widget’s GDK window. This allows for
     * transparent windows etc., see gdk_window_shape_combine_region()
     * for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    shape_combine_region(region?: cairo.Region | null): void
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    show_all(): void
    /**
     * Shows a widget. If the widget is an unmapped toplevel widget
     * (i.e. a #GtkWindow that has not yet been shown), enter the main
     * loop and wait for the window to actually be mapped. Be careful;
     * because the main loop is running, anything can happen during
     * this function.
     */
    show_now(): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size,
     * position and (optionally) baseline to their child widgets.
     * 
     * In this function, the allocation and baseline may be adjusted. It
     * will be forced to a 1x1 minimum size, and the
     * adjust_size_allocation virtual and adjust_baseline_allocation
     * methods on the child will be used to adjust the allocation and
     * baseline. Standard adjustments include removing the widget's
     * margins, and applying the widget’s #GtkWidget:halign and
     * #GtkWidget:valign properties.
     * 
     * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
     * baseline argument is ignored and -1 is used instead.
     * @param allocation position and size to be allocated to `widget`
     * @param baseline The baseline of the child, or -1
     */
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     */
    size_request(): /* requisition */ Gtk.Requisition
    /**
     * This function attaches the widget’s #GtkStyle to the widget's
     * #GdkWindow. It is a replacement for
     * 
     * |[
     * widget->style = gtk_style_attach (widget->style, widget->window);
     * ```
     * 
     * 
     * and should only ever be called in a derived widget’s “realize”
     * implementation which does not chain up to its parent class'
     * “realize” implementation, because one of the parent classes
     * (finally #GtkWidget) would attach the style itself.
     */
    style_attach(): void
    /**
     * Gets the value of a style property of `widget`.
     * @param property_name the name of a style property
     * @param value location to return the property value
     */
    style_get_property(property_name: string, value: any): void
    /**
     * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
     * This causes all queued #GtkWidget::child-notify signals on `widget` to be
     * emitted.
     */
    thaw_child_notify(): void
    /**
     * Translate coordinates relative to `src_widget’`s allocation to coordinates
     * relative to `dest_widget’`s allocations. In order to perform this
     * operation, both widgets must be realized, and must share a common
     * toplevel.
     * @param dest_widget a #GtkWidget
     * @param src_x X position relative to `src_widget`
     * @param src_y Y position relative to `src_widget`
     */
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    /**
     * Triggers a tooltip query on the display where the toplevel of `widget`
     * is located. See gtk_tooltip_trigger_tooltip_query() for more
     * information.
     */
    trigger_tooltip_query(): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    unmap(): void
    /**
     * This function is only for use in widget implementations.
     * Should be called by implementations of the remove method
     * on #GtkContainer, to dissociate a child from the container.
     */
    unparent(): void
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    unrealize(): void
    /**
     * Unregisters a #GdkWindow from the widget that was previously set up with
     * gtk_widget_register_window(). You need to call this when the window is
     * no longer used by the widget, such as when you destroy it.
     * @param window a #GdkWindow
     */
    unregister_window(window: Gdk.Window): void
    /**
     * This function is for use in widget implementations. Turns off flag
     * values for the current widget state (insensitive, prelighted, etc.).
     * See gtk_widget_set_state_flags().
     * @param flags State flags to turn off
     */
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    set_name(name: string): void
    /* Virtual methods of Gepub-0.5.Gepub.Widget */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of WebKit2-4.0.WebKit2.WebView */
    vfunc_authenticate(request: WebKit2.AuthenticationRequest): boolean
    vfunc_close(): void
    vfunc_context_menu(context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult): boolean
    vfunc_context_menu_dismissed(): void
    vfunc_decide_policy(decision: WebKit2.PolicyDecision, type: WebKit2.PolicyDecisionType): boolean
    vfunc_enter_fullscreen(): boolean
    vfunc_insecure_content_detected(event: WebKit2.InsecureContentEvent): void
    vfunc_leave_fullscreen(): boolean
    vfunc_load_changed(load_event: WebKit2.LoadEvent): void
    vfunc_load_failed(load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error): boolean
    vfunc_load_failed_with_tls_errors(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_mouse_target_changed(hit_test_result: WebKit2.HitTestResult, modifiers: number): void
    vfunc_permission_request(permission_request: WebKit2.PermissionRequest): boolean
    vfunc_print(print_operation: WebKit2.PrintOperation): boolean
    vfunc_ready_to_show(): void
    vfunc_resource_load_started(resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    vfunc_run_as_modal(): void
    vfunc_run_color_chooser(request: WebKit2.ColorChooserRequest): boolean
    vfunc_run_file_chooser(request: WebKit2.FileChooserRequest): boolean
    vfunc_script_dialog(dialog: WebKit2.ScriptDialog): boolean
    vfunc_show_notification(notification: WebKit2.Notification): boolean
    vfunc_show_option_menu(rectangle: Gdk.Rectangle, menu: WebKit2.OptionMenu): boolean
    vfunc_submit_form(request: WebKit2.FormSubmissionRequest): void
    vfunc_user_message_received(message: WebKit2.UserMessage): boolean
    vfunc_web_process_crashed(): boolean
    vfunc_web_process_terminated(reason: WebKit2.WebProcessTerminationReason): void
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of WebKit2-4.0.WebKit2.WebViewBase */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    /**
     * Invokes `callback` on each direct child of `container,` including
     * children that are considered “internal” (implementation details
     * of the container). “Internal” children generally weren’t added
     * by the user of the container, but were added by the container
     * implementation itself.
     * 
     * Most applications should use gtk_container_foreach(), rather
     * than gtk_container_forall().
     * @param include_internals 
     * @param callback a callback
     */
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Returns a newly created widget path representing all the widget hierarchy
     * from the toplevel down to and including `child`.
     * @param child a child of `container`
     */
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manually set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    vfunc_can_activate_accel(signal_id: number): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    vfunc_get_accessible(): Atk.Object
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    vfunc_queue_draw_region(region: cairo.Region): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    vfunc_show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-4.0.WebKit2.WebView */
    /**
     * This signal is emitted when the user is challenged with HTTP
     * authentication. To let the  application access or supply
     * the credentials as well as to allow the client application
     * to either cancel the request or perform the authentication,
     * the signal will pass an instance of the
     * #WebKitAuthenticationRequest in the `request` argument.
     * To handle this signal asynchronously you should keep a ref
     * of the request and return %TRUE. To disable HTTP authentication
     * entirely, connect to this signal and simply return %TRUE.
     * 
     * The default signal handler will run a default authentication
     * dialog asynchronously for the user to interact with.
     * @param request a #WebKitAuthenticationRequest
     */
    connect(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    emit(sigName: "authenticate", request: WebKit2.AuthenticationRequest): void
    /**
     * Emitted when closing a #WebKitWebView is requested. This occurs when a
     * call is made from JavaScript's <function>window.close</function> function or
     * after trying to close the `web_view` with webkit_web_view_try_close().
     * It is the owner's responsibility to handle this signal to hide or
     * destroy the #WebKitWebView, if necessary.
     */
    connect(sigName: "close", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "close", callback: (($obj: Widget) => void)): number
    emit(sigName: "close"): void
    /**
     * Emitted when a context menu is about to be displayed to give the application
     * a chance to customize the proposed menu, prevent the menu from being displayed,
     * or build its own context menu.
     * <itemizedlist>
     * <listitem><para>
     *  To customize the proposed menu you can use webkit_context_menu_prepend(),
     *  webkit_context_menu_append() or webkit_context_menu_insert() to add new
     *  #WebKitContextMenuItem<!-- -->s to `context_menu,` webkit_context_menu_move_item()
     *  to reorder existing items, or webkit_context_menu_remove() to remove an
     *  existing item. The signal handler should return %FALSE, and the menu represented
     *  by `context_menu` will be shown.
     * </para></listitem>
     * <listitem><para>
     *  To prevent the menu from being displayed you can just connect to this signal
     *  and return %TRUE so that the proposed menu will not be shown.
     * </para></listitem>
     * <listitem><para>
     *  To build your own menu, you can remove all items from the proposed menu with
     *  webkit_context_menu_remove_all(), add your own items and return %FALSE so
     *  that the menu will be shown. You can also ignore the proposed #WebKitContextMenu,
     *  build your own #GtkMenu and return %TRUE to prevent the proposed menu from being shown.
     * </para></listitem>
     * <listitem><para>
     *  If you just want the default menu to be shown always, simply don't connect to this
     *  signal because showing the proposed context menu is the default behaviour.
     * </para></listitem>
     * </itemizedlist>
     * 
     * The `event` is expected to be one of the following types:
     * <itemizedlist>
     * <listitem><para>
     * a #GdkEventButton of type %GDK_BUTTON_PRESS when the context menu
     * was triggered with mouse.
     * </para></listitem>
     * <listitem><para>
     * a #GdkEventKey of type %GDK_KEY_PRESS if the keyboard was used to show
     * the menu.
     * </para></listitem>
     * <listitem><para>
     * a generic #GdkEvent of type %GDK_NOTHING when the #GtkWidget::popup-menu
     * signal was used to show the context menu.
     * </para></listitem>
     * </itemizedlist>
     * 
     * If the signal handler returns %FALSE the context menu represented by `context_menu`
     * will be shown, if it return %TRUE the context menu will not be shown.
     * 
     * The proposed #WebKitContextMenu passed in `context_menu` argument is only valid
     * during the signal emission.
     * @param context_menu the proposed #WebKitContextMenu
     * @param event the #GdkEvent that triggered the context menu
     * @param hit_test_result a #WebKitHitTestResult
     */
    connect(sigName: "context-menu", callback: (($obj: Widget, context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult) => boolean)): number
    connect_after(sigName: "context-menu", callback: (($obj: Widget, context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult) => boolean)): number
    emit(sigName: "context-menu", context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult): void
    /**
     * Emitted after #WebKitWebView::context-menu signal, if the context menu is shown,
     * to notify that the context menu is dismissed.
     */
    connect(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    emit(sigName: "context-menu-dismissed"): void
    /**
     * Emitted when the creation of a new #WebKitWebView is requested.
     * If this signal is handled the signal handler should return the
     * newly created #WebKitWebView.
     * 
     * The #WebKitNavigationAction parameter contains information about the
     * navigation action that triggered this signal.
     * 
     * The new #WebKitWebView must be related to `web_view,` see
     * webkit_web_view_new_with_related_view() for more details.
     * 
     * The new #WebKitWebView should not be displayed to the user
     * until the #WebKitWebView::ready-to-show signal is emitted.
     * @param navigation_action a #WebKitNavigationAction
     */
    connect(sigName: "create", callback: (($obj: Widget, navigation_action: WebKit2.NavigationAction) => Gtk.Widget)): number
    connect_after(sigName: "create", callback: (($obj: Widget, navigation_action: WebKit2.NavigationAction) => Gtk.Widget)): number
    emit(sigName: "create", navigation_action: WebKit2.NavigationAction): void
    /**
     * This signal is emitted when WebKit is requesting the client to decide a policy
     * decision, such as whether to navigate to a page, open a new window or whether or
     * not to download a resource. The #WebKitNavigationPolicyDecision passed in the
     * `decision` argument is a generic type, but should be casted to a more
     * specific type when making the decision. For example:
     * 
     * <informalexample><programlisting>
     * static gboolean
     * decide_policy_cb (WebKitWebView *web_view,
     *                   WebKitPolicyDecision *decision,
     *                   WebKitPolicyDecisionType type)
     * {
     *     switch (type) {
     *     case WEBKIT_POLICY_DECISION_TYPE_NAVIGATION_ACTION: {
     *         WebKitNavigationPolicyDecision *navigation_decision = WEBKIT_NAVIGATION_POLICY_DECISION (decision);
     *         /<!-- -->* Make a policy decision here. *<!-- -->/
     *         break;
     *     }
     *     case WEBKIT_POLICY_DECISION_TYPE_NEW_WINDOW_ACTION: {
     *         WebKitNavigationPolicyDecision *navigation_decision = WEBKIT_NAVIGATION_POLICY_DECISION (decision);
     *         /<!-- -->* Make a policy decision here. *<!-- -->/
     *         break;
     *     }
     *     case WEBKIT_POLICY_DECISION_TYPE_RESPONSE:
     *         WebKitResponsePolicyDecision *response = WEBKIT_RESPONSE_POLICY_DECISION (decision);
     *         /<!-- -->* Make a policy decision here. *<!-- -->/
     *         break;
     *     default:
     *         /<!-- -->* Making no decision results in webkit_policy_decision_use(). *<!-- -->/
     *         return FALSE;
     *     }
     *     return TRUE;
     * }
     * </programlisting></informalexample>
     * 
     * It is possible to make policy decision asynchronously, by simply calling g_object_ref()
     * on the `decision` argument and returning %TRUE to block the default signal handler.
     * If the last reference is removed on a #WebKitPolicyDecision and no decision has been
     * made explicitly, webkit_policy_decision_use() will be the default policy decision. The
     * default signal handler will simply call webkit_policy_decision_use(). Only the first
     * policy decision chosen for a given #WebKitPolicyDecision will have any affect.
     * @param decision the #WebKitPolicyDecision
     * @param decision_type a #WebKitPolicyDecisionType denoting the type of `decision`
     */
    connect(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decision_type: WebKit2.PolicyDecisionType) => boolean)): number
    connect_after(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decision_type: WebKit2.PolicyDecisionType) => boolean)): number
    emit(sigName: "decide-policy", decision: WebKit2.PolicyDecision, decision_type: WebKit2.PolicyDecisionType): void
    /**
     * Emitted when JavaScript code calls
     * <function>element.webkitRequestFullScreen</function>. If the
     * signal is not handled the #WebKitWebView will proceed to full screen
     * its top level window. This signal can be used by client code to
     * request permission to the user prior doing the full screen
     * transition and eventually prepare the top-level window
     * (e.g. hide some widgets that would otherwise be part of the
     * full screen window).
     */
    connect(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "enter-fullscreen"): void
    /**
     * This signal is emitted when insecure content has been detected
     * in a page loaded through a secure connection. This typically
     * means that a external resource from an unstrusted source has
     * been run or displayed, resulting in a mix of HTTPS and
     * non-HTTPS content.
     * 
     * You can check the `event` parameter to know exactly which kind
     * of event has been detected (see #WebKitInsecureContentEvent).
     * @param event the #WebKitInsecureContentEvent
     */
    connect(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    connect_after(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    emit(sigName: "insecure-content-detected", event: WebKit2.InsecureContentEvent): void
    /**
     * Emitted when the #WebKitWebView is about to restore its top level
     * window out of its full screen state. This signal can be used by
     * client code to restore widgets hidden during the
     * #WebKitWebView::enter-fullscreen stage for instance.
     */
    connect(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "leave-fullscreen"): void
    /**
     * Emitted when a load operation in `web_view` changes.
     * The signal is always emitted with %WEBKIT_LOAD_STARTED when a
     * new load request is made and %WEBKIT_LOAD_FINISHED when the load
     * finishes successfully or due to an error. When the ongoing load
     * operation fails #WebKitWebView::load-failed signal is emitted
     * before #WebKitWebView::load-changed is emitted with
     * %WEBKIT_LOAD_FINISHED.
     * If a redirection is received from the server, this signal is emitted
     * with %WEBKIT_LOAD_REDIRECTED after the initial emission with
     * %WEBKIT_LOAD_STARTED and before %WEBKIT_LOAD_COMMITTED.
     * When the page content starts arriving the signal is emitted with
     * %WEBKIT_LOAD_COMMITTED event.
     * 
     * You can handle this signal and use a switch to track any ongoing
     * load operation.
     * 
     * <informalexample><programlisting>
     * static void web_view_load_changed (WebKitWebView  *web_view,
     *                                    WebKitLoadEvent load_event,
     *                                    gpointer        user_data)
     * {
     *     switch (load_event) {
     *     case WEBKIT_LOAD_STARTED:
     *         /<!-- -->* New load, we have now a provisional URI *<!-- -->/
     *         provisional_uri = webkit_web_view_get_uri (web_view);
     *         /<!-- -->* Here we could start a spinner or update the
     *          <!-- -->* location bar with the provisional URI *<!-- -->/
     *         break;
     *     case WEBKIT_LOAD_REDIRECTED:
     *         redirected_uri = webkit_web_view_get_uri (web_view);
     *         break;
     *     case WEBKIT_LOAD_COMMITTED:
     *         /<!-- -->* The load is being performed. Current URI is
     *          <!-- -->* the final one and it won't change unless a new
     *          <!-- -->* load is requested or a navigation within the
     *          <!-- -->* same page is performed *<!-- -->/
     *         uri = webkit_web_view_get_uri (web_view);
     *         break;
     *     case WEBKIT_LOAD_FINISHED:
     *         /<!-- -->* Load finished, we can now stop the spinner *<!-- -->/
     *         break;
     *     }
     * }
     * </programlisting></informalexample>
     * @param load_event the #WebKitLoadEvent
     */
    connect(sigName: "load-changed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent) => void)): number
    connect_after(sigName: "load-changed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent) => void)): number
    emit(sigName: "load-changed", load_event: WebKit2.LoadEvent): void
    /**
     * Emitted when an error occurs during a load operation.
     * If the error happened when starting to load data for a page
     * `load_event` will be %WEBKIT_LOAD_STARTED. If it happened while
     * loading a committed data source `load_event` will be %WEBKIT_LOAD_COMMITTED.
     * Since a load error causes the load operation to finish, the signal
     * WebKitWebView::load-changed will always be emitted with
     * %WEBKIT_LOAD_FINISHED event right after this one.
     * 
     * By default, if the signal is not handled, a stock error page will be displayed.
     * You need to handle the signal if you want to provide your own error page.
     * @param load_event the #WebKitLoadEvent of the load operation
     * @param failing_uri the URI that failed to load
     * @param error the #GError that was triggered
     */
    connect(sigName: "load-failed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    connect_after(sigName: "load-failed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    emit(sigName: "load-failed", load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error): void
    /**
     * Emitted when a TLS error occurs during a load operation.
     * To allow an exception for this `certificate`
     * and the host of `failing_uri` use webkit_web_context_allow_tls_certificate_for_host().
     * 
     * To handle this signal asynchronously you should call g_object_ref() on `certificate`
     * and return %TRUE.
     * 
     * If %FALSE is returned, #WebKitWebView::load-failed will be emitted. The load
     * will finish regardless of the returned value.
     * @param failing_uri the URI that failed to load
     * @param certificate a #GTlsCertificate
     * @param errors a #GTlsCertificateFlags with the verification status of `certificate`
     */
    connect(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "load-failed-with-tls-errors", failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    /**
     * This signal is emitted when the mouse cursor moves over an
     * element such as a link, image or a media element. To determine
     * what type of element the mouse cursor is over, a Hit Test is performed
     * on the current mouse coordinates and the result is passed in the
     * `hit_test_result` argument. The `modifiers` argument is a bitmask of
     * #GdkModifierType flags indicating the state of modifier keys.
     * The signal is emitted again when the mouse is moved out of the
     * current element with a new `hit_test_result`.
     * @param hit_test_result a #WebKitHitTestResult
     * @param modifiers a bitmask of #GdkModifierType
     */
    connect(sigName: "mouse-target-changed", callback: (($obj: Widget, hit_test_result: WebKit2.HitTestResult, modifiers: number) => void)): number
    connect_after(sigName: "mouse-target-changed", callback: (($obj: Widget, hit_test_result: WebKit2.HitTestResult, modifiers: number) => void)): number
    emit(sigName: "mouse-target-changed", hit_test_result: WebKit2.HitTestResult, modifiers: number): void
    /**
     * This signal is emitted when WebKit is requesting the client to
     * decide about a permission request, such as allowing the browser
     * to switch to fullscreen mode, sharing its location or similar
     * operations.
     * 
     * A possible way to use this signal could be through a dialog
     * allowing the user decide what to do with the request:
     * 
     * <informalexample><programlisting>
     * static gboolean permission_request_cb (WebKitWebView *web_view,
     *                                        WebKitPermissionRequest *request,
     *                                        GtkWindow *parent_window)
     * {
     *     GtkWidget *dialog = gtk_message_dialog_new (parent_window,
     *                                                 GTK_DIALOG_MODAL,
     *                                                 GTK_MESSAGE_QUESTION,
     *                                                 GTK_BUTTONS_YES_NO,
     *                                                 "Allow Permission Request?");
     *     gtk_widget_show (dialog);
     *     gint result = gtk_dialog_run (GTK_DIALOG (dialog));
     * 
     *     switch (result) {
     *     case GTK_RESPONSE_YES:
     *         webkit_permission_request_allow (request);
     *         break;
     *     default:
     *         webkit_permission_request_deny (request);
     *         break;
     *     }
     *     gtk_widget_destroy (dialog);
     * 
     *     return TRUE;
     * }
     * </programlisting></informalexample>
     * 
     * It is possible to handle permission requests asynchronously, by
     * simply calling g_object_ref() on the `request` argument and
     * returning %TRUE to block the default signal handler.  If the
     * last reference is removed on a #WebKitPermissionRequest and the
     * request has not been handled, webkit_permission_request_deny()
     * will be the default action.
     * 
     * If the signal is not handled, the `request` will be completed automatically
     * by the specific #WebKitPermissionRequest that could allow or deny it. Check the
     * documentation of classes implementing #WebKitPermissionRequest interface to know
     * their default action.
     * @param request the #WebKitPermissionRequest
     */
    connect(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    connect_after(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    emit(sigName: "permission-request", request: WebKit2.PermissionRequest): void
    /**
     * Emitted when printing is requested on `web_view,` usually by a JavaScript call,
     * before the print dialog is shown. This signal can be used to set the initial
     * print settings and page setup of `print_operation` to be used as default values in
     * the print dialog. You can call webkit_print_operation_set_print_settings() and
     * webkit_print_operation_set_page_setup() and then return %FALSE to propagate the
     * event so that the print dialog is shown.
     * 
     * You can connect to this signal and return %TRUE to cancel the print operation
     * or implement your own print dialog.
     * @param print_operation the #WebKitPrintOperation that will handle the print request
     */
    connect(sigName: "print", callback: (($obj: Widget, print_operation: WebKit2.PrintOperation) => boolean)): number
    connect_after(sigName: "print", callback: (($obj: Widget, print_operation: WebKit2.PrintOperation) => boolean)): number
    emit(sigName: "print", print_operation: WebKit2.PrintOperation): void
    /**
     * Emitted after #WebKitWebView::create on the newly created #WebKitWebView
     * when it should be displayed to the user. When this signal is emitted
     * all the information about how the window should look, including
     * size, position, whether the location, status and scrollbars
     * should be displayed, is already set on the #WebKitWindowProperties
     * of `web_view`. See also webkit_web_view_get_window_properties().
     */
    connect(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    emit(sigName: "ready-to-show"): void
    /**
     * Emitted when a new resource is going to be loaded. The `request` parameter
     * contains the #WebKitURIRequest that will be sent to the server.
     * You can monitor the load operation by connecting to the different signals
     * of `resource`.
     * @param resource a #WebKitWebResource
     * @param request a #WebKitURIRequest
     */
    connect(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    connect_after(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    emit(sigName: "resource-load-started", resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    /**
     * Emitted after #WebKitWebView::ready-to-show on the newly
     * created #WebKitWebView when JavaScript code calls
     * <function>window.showModalDialog</function>. The purpose of
     * this signal is to allow the client application to prepare the
     * new view to behave as modal. Once the signal is emitted a new
     * main loop will be run to block user interaction in the parent
     * #WebKitWebView until the new dialog is closed.
     */
    connect(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    emit(sigName: "run-as-modal"): void
    /**
     * This signal is emitted when the user interacts with a &lt;input
     * type='color' /&gt; HTML element, requesting from WebKit to show
     * a dialog to select a color. To let the application know the details of
     * the color chooser, as well as to allow the client application to either
     * cancel the request or perform an actual color selection, the signal will
     * pass an instance of the #WebKitColorChooserRequest in the `request`
     * argument.
     * 
     * It is possible to handle this request asynchronously by increasing the
     * reference count of the request.
     * 
     * The default signal handler will asynchronously run a regular
     * #GtkColorChooser for the user to interact with.
     * @param request a #WebKitColorChooserRequest
     */
    connect(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    connect_after(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    emit(sigName: "run-color-chooser", request: WebKit2.ColorChooserRequest): void
    /**
     * This signal is emitted when the user interacts with a &lt;input
     * type='file' /&gt; HTML element, requesting from WebKit to show
     * a dialog to select one or more files to be uploaded. To let the
     * application know the details of the file chooser, as well as to
     * allow the client application to either cancel the request or
     * perform an actual selection of files, the signal will pass an
     * instance of the #WebKitFileChooserRequest in the `request`
     * argument.
     * 
     * The default signal handler will asynchronously run a regular
     * #GtkFileChooserDialog for the user to interact with.
     * @param request a #WebKitFileChooserRequest
     */
    connect(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    connect_after(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    emit(sigName: "run-file-chooser", request: WebKit2.FileChooserRequest): void
    /**
     * Emitted when JavaScript code calls <function>window.alert</function>,
     * <function>window.confirm</function> or <function>window.prompt</function>,
     * or when <function>onbeforeunload</function> event is fired.
     * The `dialog` parameter should be used to build the dialog.
     * If the signal is not handled a different dialog will be built and shown depending
     * on the dialog type:
     * <itemizedlist>
     * <listitem><para>
     *  %WEBKIT_SCRIPT_DIALOG_ALERT: message dialog with a single Close button.
     * </para></listitem>
     * <listitem><para>
     *  %WEBKIT_SCRIPT_DIALOG_CONFIRM: message dialog with OK and Cancel buttons.
     * </para></listitem>
     * <listitem><para>
     *  %WEBKIT_SCRIPT_DIALOG_PROMPT: message dialog with OK and Cancel buttons and
     *  a text entry with the default text.
     * </para></listitem>
     * <listitem><para>
     *  %WEBKIT_SCRIPT_DIALOG_BEFORE_UNLOAD_CONFIRM: message dialog with Stay and Leave buttons.
     * </para></listitem>
     * </itemizedlist>
     * 
     * It is possible to handle the script dialog request asynchronously, by simply
     * caling webkit_script_dialog_ref() on the `dialog` argument and calling
     * webkit_script_dialog_close() when done.
     * If the last reference is removed on a #WebKitScriptDialog and the dialog has not been
     * closed, webkit_script_dialog_close() will be called.
     * @param dialog the #WebKitScriptDialog to show
     */
    connect(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    connect_after(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    emit(sigName: "script-dialog", dialog: WebKit2.ScriptDialog): void
    /**
     * This signal is emitted when a notification should be presented to the
     * user. The `notification` is kept alive until either: 1) the web page cancels it
     * or 2) a navigation happens.
     * 
     * The default handler will emit a notification using libnotify, if built with
     * support for it.
     * @param notification a #WebKitNotification
     */
    connect(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    connect_after(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    emit(sigName: "show-notification", notification: WebKit2.Notification): void
    /**
     * This signal is emitted when a select element in `web_view` needs to display a
     * dropdown menu. This signal can be used to show a custom menu, using `menu` to get
     * the details of all items that should be displayed. The area of the element in the
     * #WebKitWebView is given as `rectangle` parameter, it can be used to position the
     * menu. If this was triggered by a user interaction, like a mouse click,
     * `event` parameter provides the #GdkEvent.
     * To handle this signal asynchronously you should keep a ref of the `menu`.
     * 
     * The default signal handler will pop up a #GtkMenu.
     * @param menu the #WebKitOptionMenu
     * @param event the #GdkEvent that triggered the menu, or %NULL
     * @param rectangle the option element area
     */
    connect(sigName: "show-option-menu", callback: (($obj: Widget, menu: WebKit2.OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "show-option-menu", callback: (($obj: Widget, menu: WebKit2.OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    emit(sigName: "show-option-menu", menu: WebKit2.OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): void
    /**
     * This signal is emitted when a form is about to be submitted. The `request`
     * argument passed contains information about the text fields of the form. This
     * is typically used to store login information that can be used later to
     * pre-fill the form.
     * The form will not be submitted until webkit_form_submission_request_submit() is called.
     * 
     * It is possible to handle the form submission request asynchronously, by
     * simply calling g_object_ref() on the `request` argument and calling
     * webkit_form_submission_request_submit() when done to continue with the form submission.
     * If the last reference is removed on a #WebKitFormSubmissionRequest and the
     * form has not been submitted, webkit_form_submission_request_submit() will be called.
     * @param request a #WebKitFormSubmissionRequest
     */
    connect(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    connect_after(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    emit(sigName: "submit-form", request: WebKit2.FormSubmissionRequest): void
    /**
     * This signal is emitted when a #WebKitUserMessage is received from the
     * #WebKitWebPage corresponding to `web_view`. You can reply to the message
     * using webkit_user_message_send_reply().
     * 
     * You can handle the user message asynchronously by calling g_object_ref() on
     * `message` and returning %TRUE. If the last reference of `message` is removed
     * and the message has not been replied to, the operation in the #WebKitWebPage will
     * finish with error %WEBKIT_USER_MESSAGE_UNHANDLED_MESSAGE.
     * @param message the #WebKitUserMessage received
     */
    connect(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    connect_after(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    emit(sigName: "user-message-received", message: WebKit2.UserMessage): void
    /**
     * This signal is emitted when the web process crashes.
     */
    connect(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "web-process-crashed"): void
    /**
     * This signal is emitted when the web process terminates abnormally due
     * to `reason`.
     * @param reason the a #WebKitWebProcessTerminationReason
     */
    connect(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    connect_after(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    emit(sigName: "web-process-terminated", reason: WebKit2.WebProcessTerminationReason): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Widget) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Widget) => void)): number
    emit(sigName: "accel-closures-changed"): void
    /**
     * The ::button-press-event signal will be emitted when a button
     * (typically from a mouse) is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-press-event", callback: (($obj: Widget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Widget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    /**
     * The ::button-release-event signal will be emitted when a button
     * (typically from a mouse) is released.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-release-event", callback: (($obj: Widget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Widget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This signal is present to allow applications and derived
     * widgets to override the default #GtkWidget handling
     * for determining whether an accelerator can be activated.
     * @param signal_id the ID of a signal installed on `widget`
     */
    connect(sigName: "can-activate-accel", callback: (($obj: Widget, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Widget, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    /**
     * The ::child-notify signal is emitted for each
     * [child property][child-properties]  that has
     * changed on an object. The signal's detail holds the property name.
     * @param child_property the #GParamSpec of the changed child property
     */
    connect(sigName: "child-notify", callback: (($obj: Widget, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Widget, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of `widgets` screen changes.
     * See gdk_screen_is_composited().
     */
    connect(sigName: "composited-changed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Widget) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::configure-event signal will be emitted when the size, position or
     * stacking of the `widget'`s window has changed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventConfigure which triggered   this signal.
     */
    connect(sigName: "configure-event", callback: (($obj: Widget, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Widget, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    /**
     * Emitted when a redirected window belonging to `widget` gets drawn into.
     * The region/area members of the event shows what area of the redirected
     * drawable was drawn into.
     * @param event the #GdkEventExpose event
     */
    connect(sigName: "damage-event", callback: (($obj: Widget, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Widget, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    /**
     * The ::delete-event signal is emitted if a user requests that
     * a toplevel window is closed. The default handler for this signal
     * destroys the window. Connecting gtk_widget_hide_on_delete() to
     * this signal will cause the window to be hidden instead, so that
     * it can later be shown again without reconstructing it.
     * @param event the event which triggered this signal
     */
    connect(sigName: "delete-event", callback: (($obj: Widget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Widget, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    /**
     * Signals that all holders of a reference to the widget should release
     * the reference that they hold. May result in finalization of the widget
     * if all references are released.
     * 
     * This signal is not suitable for saving widget state.
     */
    connect(sigName: "destroy", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Widget) => void)): number
    emit(sigName: "destroy"): void
    /**
     * The ::destroy-event signal is emitted when a #GdkWindow is destroyed.
     * You rarely get this signal, because most widgets disconnect themselves
     * from their window before they destroy it, so no widget owns the
     * window at destroy time.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the event which triggered this signal
     */
    connect(sigName: "destroy-event", callback: (($obj: Widget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Widget, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    /**
     * The ::direction-changed signal is emitted when the text direction
     * of a widget changes.
     * @param previous_direction the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: (($obj: Widget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Widget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    /**
     * The ::drag-begin signal is emitted on the drag source when a drag is
     * started. A typical reason to connect to this signal is to set up a
     * custom drag icon with e.g. gtk_drag_source_set_icon_pixbuf().
     * 
     * Note that some widgets set up a drag icon in the default handler of
     * this signal, so you may have to use g_signal_connect_after() to
     * override what the default handler did.
     * @param context the drag context
     */
    connect(sigName: "drag-begin", callback: (($obj: Widget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Widget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    /**
     * The ::drag-data-delete signal is emitted on the drag source when a drag
     * with the action %GDK_ACTION_MOVE is successfully completed. The signal
     * handler is responsible for deleting the data that has been dropped. What
     * "delete" means depends on the context of the drag operation.
     * @param context the drag context
     */
    connect(sigName: "drag-data-delete", callback: (($obj: Widget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Widget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    /**
     * The ::drag-data-get signal is emitted on the drag source when the drop
     * site requests the data which is dragged. It is the responsibility of
     * the signal handler to fill `data` with the data in the format which
     * is indicated by `info`. See gtk_selection_data_set() and
     * gtk_selection_data_set_text().
     * @param context the drag context
     * @param data the #GtkSelectionData to be filled with the dragged data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was requested
     */
    connect(sigName: "drag-data-get", callback: (($obj: Widget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Widget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-data-received signal is emitted on the drop site when the
     * dragged data has been received. If the data was received in order to
     * determine whether the drop will be accepted, the handler is expected
     * to call gdk_drag_status() and not finish the drag.
     * If the data was received in response to a #GtkWidget::drag-drop signal
     * (and this is the last target to be received), the handler for this
     * signal is expected to process the received data and then call
     * gtk_drag_finish(), setting the `success` parameter depending on
     * whether the data was processed successfully.
     * 
     * Applications must create some means to determine why the signal was emitted
     * and therefore whether to call gdk_drag_status() or gtk_drag_finish().
     * 
     * The handler may inspect the selected action with
     * gdk_drag_context_get_selected_action() before calling
     * gtk_drag_finish(), e.g. to implement %GDK_ACTION_ASK as
     * shown in the following example:
     * 
     * ```c
     * void
     * drag_data_received (GtkWidget          *widget,
     *                     GdkDragContext     *context,
     *                     gint                x,
     *                     gint                y,
     *                     GtkSelectionData   *data,
     *                     guint               info,
     *                     guint               time)
     * {
     *   if ((data->length >= 0) && (data->format == 8))
     *     {
     *       GdkDragAction action;
     * 
     *       // handle data here
     * 
     *       action = gdk_drag_context_get_selected_action (context);
     *       if (action == GDK_ACTION_ASK)
     *         {
     *           GtkWidget *dialog;
     *           gint response;
     * 
     *           dialog = gtk_message_dialog_new (NULL,
     *                                            GTK_DIALOG_MODAL |
     *                                            GTK_DIALOG_DESTROY_WITH_PARENT,
     *                                            GTK_MESSAGE_INFO,
     *                                            GTK_BUTTONS_YES_NO,
     *                                            "Move the data ?\n");
     *           response = gtk_dialog_run (GTK_DIALOG (dialog));
     *           gtk_widget_destroy (dialog);
     * 
     *           if (response == GTK_RESPONSE_YES)
     *             action = GDK_ACTION_MOVE;
     *           else
     *             action = GDK_ACTION_COPY;
     *          }
     * 
     *       gtk_drag_finish (context, TRUE, action == GDK_ACTION_MOVE, time);
     *     }
     *   else
     *     gtk_drag_finish (context, FALSE, FALSE, time);
     *  }
     * ```
     * 
     * @param context the drag context
     * @param x where the drop happened
     * @param y where the drop happened
     * @param data the received data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was received
     */
    connect(sigName: "drag-data-received", callback: (($obj: Widget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Widget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-drop signal is emitted on the drop site when the user drops
     * the data onto the widget. The signal handler must determine whether
     * the cursor position is in a drop zone or not. If it is not in a drop
     * zone, it returns %FALSE and no further processing is necessary.
     * Otherwise, the handler returns %TRUE. In this case, the handler must
     * ensure that gtk_drag_finish() is called to let the source know that
     * the drop is done. The call to gtk_drag_finish() can be done either
     * directly or in a #GtkWidget::drag-data-received handler which gets
     * triggered by calling gtk_drag_get_data() to receive the data for one
     * or more of the supported targets.
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-drop", callback: (($obj: Widget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Widget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::drag-end signal is emitted on the drag source when a drag is
     * finished.  A typical reason to connect to this signal is to undo
     * things done in #GtkWidget::drag-begin.
     * @param context the drag context
     */
    connect(sigName: "drag-end", callback: (($obj: Widget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Widget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    /**
     * The ::drag-failed signal is emitted on the drag source when a drag has
     * failed. The signal handler may hook custom code to handle a failed DnD
     * operation based on the type of error, it returns %TRUE is the failure has
     * been already handled (not showing the default "drag operation failed"
     * animation), otherwise it returns %FALSE.
     * @param context the drag context
     * @param result the result of the drag operation
     */
    connect(sigName: "drag-failed", callback: (($obj: Widget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Widget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    /**
     * The ::drag-leave signal is emitted on the drop site when the cursor
     * leaves the widget. A typical reason to connect to this signal is to
     * undo things done in #GtkWidget::drag-motion, e.g. undo highlighting
     * with gtk_drag_unhighlight().
     * 
     * 
     * Likewise, the #GtkWidget::drag-leave signal is also emitted before the
     * ::drag-drop signal, for instance to allow cleaning up of a preview item
     * created in the #GtkWidget::drag-motion signal handler.
     * @param context the drag context
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-leave", callback: (($obj: Widget, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Widget, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    /**
     * The ::drag-motion signal is emitted on the drop site when the user
     * moves the cursor over the widget during a drag. The signal handler
     * must determine whether the cursor position is in a drop zone or not.
     * If it is not in a drop zone, it returns %FALSE and no further processing
     * is necessary. Otherwise, the handler returns %TRUE. In this case, the
     * handler is responsible for providing the necessary information for
     * displaying feedback to the user, by calling gdk_drag_status().
     * 
     * If the decision whether the drop will be accepted or rejected can't be
     * made based solely on the cursor position and the type of the data, the
     * handler may inspect the dragged data by calling gtk_drag_get_data() and
     * defer the gdk_drag_status() call to the #GtkWidget::drag-data-received
     * handler. Note that you must pass #GTK_DEST_DEFAULT_DROP,
     * #GTK_DEST_DEFAULT_MOTION or #GTK_DEST_DEFAULT_ALL to gtk_drag_dest_set()
     * when using the drag-motion signal that way.
     * 
     * Also note that there is no drag-enter signal. The drag receiver has to
     * keep track of whether he has received any drag-motion signals since the
     * last #GtkWidget::drag-leave and if not, treat the drag-motion signal as
     * an "enter" signal. Upon an "enter", the handler will typically highlight
     * the drop site with gtk_drag_highlight().
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget      *widget,
     *              GdkDragContext *context,
     *              gint            x,
     *              gint            y,
     *              guint           time)
     * {
     *   GdkAtom target;
     * 
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (!private_data->drag_highlight)
     *    {
     *      private_data->drag_highlight = 1;
     *      gtk_drag_highlight (widget);
     *    }
     * 
     *   target = gtk_drag_dest_find_target (widget, context, NULL);
     *   if (target == GDK_NONE)
     *     gdk_drag_status (context, 0, time);
     *   else
     *    {
     *      private_data->pending_status
     *         = gdk_drag_context_get_suggested_action (context);
     *      gtk_drag_get_data (widget, context, target, time);
     *    }
     * 
     *   return TRUE;
     * }
     * 
     * static void
     * drag_data_received (GtkWidget        *widget,
     *                     GdkDragContext   *context,
     *                     gint              x,
     *                     gint              y,
     *                     GtkSelectionData *selection_data,
     *                     guint             info,
     *                     guint             time)
     * {
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (private_data->suggested_action)
     *    {
     *      private_data->suggested_action = 0;
     * 
     *      // We are getting this data due to a request in drag_motion,
     *      // rather than due to a request in drag_drop, so we are just
     *      // supposed to call gdk_drag_status(), not actually paste in
     *      // the data.
     * 
     *      str = gtk_selection_data_get_text (selection_data);
     *      if (!data_is_acceptable (str))
     *        gdk_drag_status (context, 0, time);
     *      else
     *        gdk_drag_status (context,
     *                         private_data->suggested_action,
     *                         time);
     *    }
     *   else
     *    {
     *      // accept the drop
     *    }
     * }
     * ```
     * 
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-motion", callback: (($obj: Widget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Widget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * This signal is emitted when a widget is supposed to render itself.
     * The `widget'`s top left corner must be painted at the origin of
     * the passed in context and be sized to the values returned by
     * gtk_widget_get_allocated_width() and
     * gtk_widget_get_allocated_height().
     * 
     * Signal handlers connected to this signal can modify the cairo
     * context passed as `cr` in any way they like and don't need to
     * restore it. The signal emission takes care of calling cairo_save()
     * before and cairo_restore() after invoking the handler.
     * 
     * The signal handler will get a `cr` with a clip region already set to the
     * widget's dirty region, i.e. to the area that needs repainting.  Complicated
     * widgets that want to avoid redrawing themselves completely can get the full
     * extents of the clip region with gdk_cairo_get_clip_rectangle(), or they can
     * get a finer-grained representation of the dirty region with
     * cairo_copy_clip_rectangle_list().
     * @param cr the cairo context to draw to
     */
    connect(sigName: "draw", callback: (($obj: Widget, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Widget, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    /**
     * The ::enter-notify-event will be emitted when the pointer enters
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_ENTER_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "enter-notify-event", callback: (($obj: Widget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Widget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    /**
     * The GTK+ main loop will emit three signals for each GDK event delivered
     * to a widget: one generic ::event signal, another, more specific,
     * signal that matches the type of event delivered (e.g.
     * #GtkWidget::key-press-event) and finally a generic
     * #GtkWidget::event-after signal.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event", callback: (($obj: Widget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Widget, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * After the emission of the #GtkWidget::event signal and (optionally)
     * the second more specific signal, ::event-after will be emitted
     * regardless of the previous two signals handlers return values.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event-after", callback: (($obj: Widget, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Widget, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    /**
     * The ::focus-in-event signal will be emitted when the keyboard focus
     * enters the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered   this signal.
     */
    connect(sigName: "focus-in-event", callback: (($obj: Widget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Widget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    /**
     * The ::focus-out-event signal will be emitted when the keyboard focus
     * leaves the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered this   signal.
     */
    connect(sigName: "focus-out-event", callback: (($obj: Widget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Widget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    /**
     * Emitted when a pointer or keyboard grab on a window belonging
     * to `widget` gets broken.
     * 
     * On X11, this happens when the grab window becomes unviewable
     * (i.e. it or one of its ancestors is unmapped), or if the same
     * application grabs the pointer or keyboard again.
     * @param event the #GdkEventGrabBroken event
     */
    connect(sigName: "grab-broken-event", callback: (($obj: Widget, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Widget, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Widget) => void)): number
    emit(sigName: "grab-focus"): void
    /**
     * The ::grab-notify signal is emitted when a widget becomes
     * shadowed by a GTK+ grab (not a pointer or keyboard grab) on
     * another widget, or when it becomes unshadowed due to a grab
     * being removed.
     * 
     * A widget is shadowed by a gtk_grab_add() when the topmost
     * grab widget in the grab stack of its window group is not
     * its ancestor.
     * @param was_grabbed %FALSE if the widget becomes shadowed, %TRUE               if it becomes unshadowed
     */
    connect(sigName: "grab-notify", callback: (($obj: Widget, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Widget, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    /**
     * The ::hide signal is emitted when `widget` is hidden, for example with
     * gtk_widget_hide().
     */
    connect(sigName: "hide", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Widget) => void)): number
    emit(sigName: "hide"): void
    /**
     * The ::hierarchy-changed signal is emitted when the
     * anchored state of a widget changes. A widget is
     * “anchored” when its toplevel
     * ancestor is a #GtkWindow. This signal is emitted when
     * a widget changes from un-anchored to anchored or vice-versa.
     * @param previous_toplevel the previous toplevel ancestor, or %NULL   if the widget was previously unanchored
     */
    connect(sigName: "hierarchy-changed", callback: (($obj: Widget, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Widget, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    /**
     * The ::key-press-event signal is emitted when a key is pressed. The signal
     * emission will reoccur at the key-repeat rate when the key is kept pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-press-event", callback: (($obj: Widget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Widget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    /**
     * The ::key-release-event signal is emitted when a key is released.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-release-event", callback: (($obj: Widget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Widget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    /**
     * Gets emitted if keyboard navigation fails.
     * See gtk_widget_keynav_failed() for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * The ::leave-notify-event will be emitted when the pointer leaves
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_LEAVE_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "leave-notify-event", callback: (($obj: Widget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Widget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    /**
     * The ::map signal is emitted when `widget` is going to be mapped, that is
     * when the widget is visible (which is controlled with
     * gtk_widget_set_visible()) and all its parents up to the toplevel widget
     * are also visible. Once the map has occurred, #GtkWidget::map-event will
     * be emitted.
     * 
     * The ::map signal can be used to determine whether a widget will be drawn,
     * for instance it can resume an animation that was stopped during the
     * emission of #GtkWidget::unmap.
     */
    connect(sigName: "map", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "map", callback: (($obj: Widget) => void)): number
    emit(sigName: "map"): void
    /**
     * The ::map-event signal will be emitted when the `widget'`s window is
     * mapped. A window is mapped when it becomes visible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal.
     */
    connect(sigName: "map-event", callback: (($obj: Widget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Widget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    /**
     * The default handler for this signal activates `widget` if `group_cycling`
     * is %FALSE, or just makes `widget` grab focus if `group_cycling` is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    connect(sigName: "mnemonic-activate", callback: (($obj: Widget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Widget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    /**
     * The ::motion-notify-event signal is emitted when the pointer moves
     * over the widget's #GdkWindow.
     * 
     * To receive this signal, the #GdkWindow associated to the widget
     * needs to enable the #GDK_POINTER_MOTION_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventMotion which triggered   this signal.
     */
    connect(sigName: "motion-notify-event", callback: (($obj: Widget, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Widget, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * The ::parent-set signal is emitted when a new parent
     * has been set on a widget.
     * @param old_parent the previous parent, or %NULL if the widget   just got its initial parent.
     */
    connect(sigName: "parent-set", callback: (($obj: Widget, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Widget, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    /**
     * This signal gets emitted whenever a widget should pop up a context
     * menu. This usually happens through the standard key binding mechanism;
     * by pressing a certain key while a widget is focused, the user can cause
     * the widget to pop up a menu.  For example, the #GtkEntry widget creates
     * a menu with clipboard commands. See the
     * [Popup Menu Migration Checklist][checklist-popup-menu]
     * for an example of how to use this signal.
     */
    connect(sigName: "popup-menu", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "popup-menu"): void
    /**
     * The ::property-notify-event signal will be emitted when a property on
     * the `widget'`s window has been changed or deleted.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROPERTY_CHANGE_MASK mask.
     * @param event the #GdkEventProperty which triggered   this signal.
     */
    connect(sigName: "property-notify-event", callback: (($obj: Widget, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Widget, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_IN_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-in-event", callback: (($obj: Widget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Widget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_OUT_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-out-event", callback: (($obj: Widget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Widget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    /**
     * Emitted when #GtkWidget:has-tooltip is %TRUE and the hover timeout
     * has expired with the cursor hovering "above" `widget;` or emitted when `widget` got
     * focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has     been emitted, relative to `widget'`s left side
     * @param y the y coordinate of the cursor position where the request has     been emitted, relative to `widget'`s top
     * @param keyboard_mode %TRUE if the tooltip was triggered using the keyboard
     * @param tooltip a #GtkTooltip
     */
    connect(sigName: "query-tooltip", callback: (($obj: Widget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Widget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    /**
     * The ::realize signal is emitted when `widget` is associated with a
     * #GdkWindow, which means that gtk_widget_realize() has been called or the
     * widget has been mapped (that is, it is going to be drawn).
     */
    connect(sigName: "realize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Widget) => void)): number
    emit(sigName: "realize"): void
    /**
     * The ::screen-changed signal gets emitted when the
     * screen of a widget has changed.
     * @param previous_screen the previous screen, or %NULL if the   widget was not associated with a screen before
     */
    connect(sigName: "screen-changed", callback: (($obj: Widget, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Widget, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    /**
     * The ::scroll-event signal is emitted when a button in the 4 to 7
     * range is pressed. Wheel mice are usually configured to generate
     * button press events for buttons 4 and 5 when the wheel is turned.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_SCROLL_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventScroll which triggered   this signal.
     */
    connect(sigName: "scroll-event", callback: (($obj: Widget, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Widget, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    /**
     * The ::selection-clear-event signal will be emitted when the
     * the `widget'`s window has lost ownership of a selection.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-clear-event", callback: (($obj: Widget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Widget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Widget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Widget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Widget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Widget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Widget, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Widget, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    /**
     * The ::selection-request-event signal will be emitted when
     * another client requests ownership of the selection owned by
     * the `widget'`s window.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-request-event", callback: (($obj: Widget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Widget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    /**
     * The ::show signal is emitted when `widget` is shown, for example with
     * gtk_widget_show().
     */
    connect(sigName: "show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "show", callback: (($obj: Widget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Widget, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Widget, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Widget, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Widget, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    /**
     * The ::state-changed signal is emitted when the widget state changes.
     * See gtk_widget_get_state().
     * @param state the previous state
     */
    connect(sigName: "state-changed", callback: (($obj: Widget, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Widget, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    /**
     * The ::state-flags-changed signal is emitted when the widget state
     * changes, see gtk_widget_get_state_flags().
     * @param flags The previous state flags.
     */
    connect(sigName: "state-flags-changed", callback: (($obj: Widget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Widget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    /**
     * The ::style-set signal is emitted when a new style has been set
     * on a widget. Note that style-modifying functions like
     * gtk_widget_modify_base() also cause this signal to be emitted.
     * 
     * Note that this signal is emitted for changes to the deprecated
     * #GtkStyle. To track changes to the #GtkStyleContext associated
     * with a widget, use the #GtkWidget::style-updated signal.
     * @param previous_style the previous style, or %NULL if the widget   just got its initial style
     */
    connect(sigName: "style-set", callback: (($obj: Widget, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Widget, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    /**
     * The ::style-updated signal is a convenience signal that is emitted when the
     * #GtkStyleContext::changed signal is emitted on the `widget'`s associated
     * #GtkStyleContext as returned by gtk_widget_get_style_context().
     * 
     * Note that style-modifying functions like gtk_widget_override_color() also
     * cause this signal to be emitted.
     */
    connect(sigName: "style-updated", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: Widget) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Widget, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Widget, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    /**
     * The ::unmap signal is emitted when `widget` is going to be unmapped, which
     * means that either it or any of its parents up to the toplevel widget have
     * been set as hidden.
     * 
     * As ::unmap indicates that a widget will not be shown any longer, it can be
     * used to, for example, stop an animation on the widget.
     */
    connect(sigName: "unmap", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Widget) => void)): number
    emit(sigName: "unmap"): void
    /**
     * The ::unmap-event signal will be emitted when the `widget'`s window is
     * unmapped. A window is unmapped when it becomes invisible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal
     */
    connect(sigName: "unmap-event", callback: (($obj: Widget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Widget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    /**
     * The ::unrealize signal is emitted when the #GdkWindow associated with
     * `widget` is destroyed, which means that gtk_widget_unrealize() has been
     * called or the widget has been unmapped (that is, it is going to be
     * hidden).
     */
    connect(sigName: "unrealize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Widget) => void)): number
    emit(sigName: "unrealize"): void
    /**
     * The ::visibility-notify-event will be emitted when the `widget'`s
     * window is obscured or unobscured.
     * 
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_VISIBILITY_NOTIFY_MASK mask.
     * @param event the #GdkEventVisibility which   triggered this signal.
     */
    connect(sigName: "visibility-notify-event", callback: (($obj: Widget, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Widget, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    /**
     * The ::window-state-event will be emitted when the state of the
     * toplevel window associated to the `widget` changes.
     * 
     * To receive this signal the #GdkWindow associated to the widget
     * needs to enable the #GDK_STRUCTURE_MASK mask. GDK will enable
     * this mask automatically for all new windows.
     * @param event the #GdkEventWindowState which   triggered this signal.
     */
    connect(sigName: "window-state-event", callback: (($obj: Widget, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Widget, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::doc", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automation-presentation-type", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automation-presentation-type", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::camera-capture-state", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camera-capture-state", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-capture-state", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-capture-state", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::favicon", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-controlled-by-automation", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-controlled-by-automation", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-ephemeral", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-ephemeral", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loading", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-playing-audio", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-web-process-responsive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-web-process-responsive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::microphone-capture-state", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::microphone-capture-state", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-id", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::related-view", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-view", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-content-manager", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-content-manager", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::web-context", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-context", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::website-policies", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::website-policies", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-level", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Widget_ConstructProps)
    _init (config?: Widget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Widget
    static $gtype: GObject.Type
}
abstract class DocClass {
    static name: string
}
abstract class WidgetClass {
    static name: string
}
}
export default Gepub;