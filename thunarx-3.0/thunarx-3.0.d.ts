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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Thunarx {
    /**
     * Thunarx-3.0
     */

    const FILESYSTEM_INFO_NAMESPACE: string;
    const FILE_INFO_NAMESPACE: string;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    /**
     * Checks that the <systemitem class="library">thunarx</systemitem> library
     * in use is compatible with the given version. Generally you would pass in
     * the constants #THUNARX_MAJOR_VERSION, #THUNARX_MINOR_VERSION and
     * #THUNARX_VERSION_MICRO as the three arguments to this function; that produces
     * a check that the library in use is compatible with the version of
     * <systemitem class="library">thunarx</systemitem> the extension was
     * compiled against.
     *
     * This function should be called by extensions in the
     * thunar_extension_initialize() method to verify that the <systemitem
     * class="library">thunarx</systemitem> library used by file manager is
     * compatible with the version the extension was compiled with.
     *
     * <example>
     * <title>Checking the runtime version of the Thunar Extension library</title>
     * <programlisting>
     * const gchar *mismatch;
     * mismatch = thunarx_check_version (THUNARX_VERSION_MAJOR,
     *                                   THUNARX_VERSION_MINOR,
     *                                   THUNARX_VERSION_MICRO);
     * if (G_UNLIKELY (mismatch != NULL))
     *   g_error ("Version mismatch: %<!---->s", mismatch);
     * </programlisting>
     * </example>
     * @param required_major the required major version.
     * @param required_minor the required minor version.
     * @param required_micro the required micro version.
     * @returns %NULL if the library is compatible with the given version,               or a string describing the version mismatch. The returned               string is owned by the library and must not be freed or               modified by the caller.
     */
    function check_version(required_major: number, required_minor: number, required_micro: number): string;
    /**
     * Does a deep copy of `file_infos` and returns the
     * new list.
     * @param file_infos a #GList of #ThunarxFileInfo<!---->s.
     * @returns a copy of @file_infos.
     */
    function file_info_list_copy(file_infos: FileInfo[]): FileInfo[];
    /**
     * Frees the resources allocated for the `file_infos`
     * list and decreases the reference count on the
     * #ThunarxFileInfo<!---->s contained within.
     * @param file_infos a #GList of #ThunarxFileInfo<!---->s.
     */
    function file_info_list_free(file_infos: FileInfo[]): void;
    type FileInfoList = object | null;
    namespace Menu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Menu extends GObject.Object {
        static $gtype: GObject.GType<Menu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Menu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Menu;

        // Signals

        connect<K extends keyof Menu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Menu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Menu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        append_item(item: MenuItem): void;
        get_items(): MenuItem[];
        prepend_item(item: MenuItem): void;
    }

    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            activate: () => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::menu': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: string;
            label: string;
            menu: Menu;
            name: string;
            priority: boolean;
            sensitive: boolean;
            tooltip: string;
        }
    }

    class MenuItem extends GObject.Object {
        static $gtype: GObject.GType<MenuItem>;

        // Properties

        get icon(): string;
        set icon(val: string);
        get label(): string;
        set label(val: string);
        get menu(): Menu;
        set menu(val: Menu);
        get name(): string;
        get priority(): boolean;
        set priority(val: boolean);
        get sensitive(): boolean;
        set sensitive(val: boolean);
        get tooltip(): string;
        set tooltip(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, label: string, tooltip: string, icon: string): MenuItem;

        // Signals

        connect<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static list_free(items: MenuItem[]): void;

        // Virtual methods

        vfunc_activate(): void;

        // Methods

        /**
         * Emits the activate signal.
         */
        activate(): boolean;
        /**
         * Returns whether the menu item is sensitive.
         */
        get_sensitive(): boolean;
        /**
         * Attaches `menu` to menu item.
         * @param menu pointer to a #ThunarxMenu instance
         */
        set_menu(menu: Menu): void;
        /**
         * Sets the ::sensitive property of the menu item to `sensitive`.
         * @param sensitive %TRUE to make the menu item sensitive
         */
        set_sensitive(sensitive: boolean): void;
    }

    namespace PropertyPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::label-widget': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            label: string;
            label_widget: Gtk.Widget;
            labelWidget: Gtk.Widget;
        }
    }

    class PropertyPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PropertyPage>;

        // Properties

        get label(): string;
        set label(val: string);
        get label_widget(): Gtk.Widget;
        set label_widget(val: Gtk.Widget);
        get labelWidget(): Gtk.Widget;
        set labelWidget(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertyPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PropertyPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string): PropertyPage;

        static new_with_label_widget(label_widget: Gtk.Widget): PropertyPage;

        // Signals

        connect<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PropertyPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * If the `property_page'`s label widget is a #GtkLabel, returns the text
         * in the label widget (the `property_page` will have a #GtkLabel for the
         * label widget if a non-%NULL argument was passed to thunarx_property_page_new()).
         * @returns the text in the label or %NULL if there was no label widget or               the label widget was not a #GtkLabel. The returned string is               owned by the @property_page and must not be modified or freed.
         */
        get_label(): string;
        /**
         * Returns the label widget for the `property_page`. See
         * thunarx_property_page_set_label_widget().
         * @returns the label widget or %NULL if there is none.
         */
        get_label_widget(): Gtk.Widget;
        /**
         * Sets the text of the label. If `label` is %NULL, the current label is
         * removed.
         * @param label the text to use as the label of the page.
         */
        set_label(label: string): void;
        /**
         * Sets the label widget for the `property_page`. This is the widget
         * that will appear in the notebook header for the `property_page`.
         * @param label_widget the new label widget.
         */
        set_label_widget(label_widget: Gtk.Widget): void;

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

    namespace ProviderFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ProviderFactory extends GObject.Object {
        static $gtype: GObject.GType<ProviderFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProviderFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProviderFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ProviderFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProviderFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProviderFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProviderFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProviderFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProviderFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns a reference to the default #ThunarxProviderFactory
         * instance.
         *
         * The caller is responsible to free the returned object
         * using g_object_unref() when no longer needed.
         */
        static get_default(): ProviderFactory;

        // Methods

        /**
         * Returns all providers of the given `type`.
         *
         * The caller is responsible to release the returned
         * list of providers using code like this:
         * <informalexample><programlisting>
         * g_list_free_full (list, g_object_unref);
         * </programlisting></informalexample>
         * @param type the provider #GType.
         * @returns the of providers for @type.
         */
        list_providers(type: GObject.GType): GObject.Object[];
    }

    namespace ProviderModule {
        // Signal signatures
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {
            'notify::resident': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.TypeModule.ConstructorProps,
                GObject.TypePlugin.ConstructorProps,
                ProviderPlugin.ConstructorProps {}
    }

    class ProviderModule extends GObject.TypeModule implements GObject.TypePlugin, ProviderPlugin {
        static $gtype: GObject.GType<ProviderModule>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProviderModule.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProviderModule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): ProviderModule;

        // Signals

        connect<K extends keyof ProviderModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProviderModule.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProviderModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProviderModule.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProviderModule.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProviderModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Determines the #GType<!---->s provided by `module` and returns
         * them in `types` and `n_types`.
         * @param types return location for the #GType array pointer.
         * @param n_types return location for the number of types.
         */
        list_types(types: GObject.GType, n_types: number): void;

        // Inherited properties
        /**
         * Tells whether a plugin must reside in memory once loaded for
         * the first time. See thunarx_provider_plugin_get_resident() and
         * thunarx_provider_plugin_set_resident() for more details.
         */
        get resident(): boolean;
        set resident(val: boolean);

        // Inherited methods
        /**
         * Calls the `complete_interface_info` function from the
         * #GTypePluginClass of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the #GType of an instantiatable type to which the interface  is added
         * @param interface_type the #GType of the interface whose info is completed
         * @param info the #GInterfaceInfo to fill in
         */
        complete_interface_info(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            info: GObject.InterfaceInfo,
        ): void;
        /**
         * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the #GType whose info is completed
         * @param info the #GTypeInfo struct to fill in
         * @param value_table the #GTypeValueTable to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
        /**
         * Calls the `unuse_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;
        // Conflicted with GObject.TypeModule.use
        use(...args: never[]): any;
        /**
         * Registers an additional interface for a type, whose interface lives in the given type `plugin`.
         * If the interface was already registered for the type in this `plugin,` nothing will be done.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param instance_type type to which to add the interface.
         * @param interface_type interface type to add.
         * @param interface_info type information structure.
         */
        add_interface(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            interface_info: GObject.InterfaceInfo,
        ): void;
        /**
         * Determines whether the application is allowed to unload `plugin`
         * from memory when no longer needed and reload it on demand. If
         * %FALSE is returned, then the application may unload `plugin,` else
         * if %TRUE is returned the application will take care that `plugin`
         * is never unloaded from memory during the lifetime of the application.
         * @returns %TRUE if @plugin will be kept in memory once loaded               for the first time.
         */
        get_resident(): boolean;
        /**
         * Looks up or registers an enumeration that is implemented with a particular type `plugin`. If a type
         * with name `name` was previously registered, the #GType identifier for the type is returned,
         * otherwise the type is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param name the name for the type.
         * @param const_static_values an array of #GEnumValue structs for the possible enumeration values.                        The array is terminated by a struct with all members being %0.
         * @returns the new or existing type id.
         */
        register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        /**
         * Looks up or registers a flags type that is implemented with a particular type `plugin`. If a type with name
         * qname was previously registered, the #GType identifier for the type is returned, otherwise the type is newly
         * registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param name name for the type.
         * @param const_static_values an array of #GFlagsValue structs for the possible flags values.                        The array is terminated by a struct with all members being %0.
         * @returns the new or existing type id.
         */
        register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        /**
         * Looks up or registers a type that is implemented with a particular type `plugin`. If a type with name `type_name`
         * was previously registered, the #GType identifier for the type is returned, otherwise the type is newly registered,
         * and the resulting #GType identifier returned.
         *
         * When reregistering a type (typically because a module is unloaded then reloaded, and reinitialized), module and
         * `type_parent` must be the same as they were previously.
         * @param type_parent the type for the parent class.
         * @param type_name name for the type.
         * @param type_info type information structure.
         * @param type_flags flags field providing details about the type.
         * @returns the new or existing type id.
         */
        register_type(
            type_parent: GObject.GType,
            type_name: string,
            type_info: GObject.TypeInfo,
            type_flags: GObject.TypeFlags | null,
        ): GObject.GType;
        /**
         * This method is used to instruct the application that `plugin` must be
         * kept in memory during the lifetime of the application. The default
         * is to allow the application to unload `plugin` from the memory when
         * no longer needed. If this method is invoked with a `resident` value
         * of %TRUE then the application will never try to unload `plugin`.
         *
         * This method has no effect unless called from the
         * %thunar_extension_initialize method of the `plugin`.
         * @param resident %TRUE to make @plugin resident in memory.
         */
        set_resident(resident: boolean): void;
        /**
         * Registers an additional interface for a type, whose interface lives in the given type `plugin`.
         * If the interface was already registered for the type in this `plugin,` nothing will be done.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param instance_type type to which to add the interface.
         * @param interface_type interface type to add.
         * @param interface_info type information structure.
         */
        vfunc_add_interface(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            interface_info: GObject.InterfaceInfo,
        ): void;
        /**
         * Determines whether the application is allowed to unload `plugin`
         * from memory when no longer needed and reload it on demand. If
         * %FALSE is returned, then the application may unload `plugin,` else
         * if %TRUE is returned the application will take care that `plugin`
         * is never unloaded from memory during the lifetime of the application.
         */
        vfunc_get_resident(): boolean;
        /**
         * Looks up or registers an enumeration that is implemented with a particular type `plugin`. If a type
         * with name `name` was previously registered, the #GType identifier for the type is returned,
         * otherwise the type is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param name the name for the type.
         * @param const_static_values an array of #GEnumValue structs for the possible enumeration values.                        The array is terminated by a struct with all members being %0.
         */
        vfunc_register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        /**
         * Looks up or registers a flags type that is implemented with a particular type `plugin`. If a type with name
         * qname was previously registered, the #GType identifier for the type is returned, otherwise the type is newly
         * registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param name name for the type.
         * @param const_static_values an array of #GFlagsValue structs for the possible flags values.                        The array is terminated by a struct with all members being %0.
         */
        vfunc_register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        /**
         * Looks up or registers a type that is implemented with a particular type `plugin`. If a type with name `type_name`
         * was previously registered, the #GType identifier for the type is returned, otherwise the type is newly registered,
         * and the resulting #GType identifier returned.
         *
         * When reregistering a type (typically because a module is unloaded then reloaded, and reinitialized), module and
         * `type_parent` must be the same as they were previously.
         * @param type_parent the type for the parent class.
         * @param type_name name for the type.
         * @param type_info type information structure.
         * @param type_flags flags field providing details about the type.
         */
        vfunc_register_type(
            type_parent: GObject.GType,
            type_name: string,
            type_info: GObject.TypeInfo,
            type_flags: GObject.TypeFlags,
        ): GObject.GType;
        /**
         * This method is used to instruct the application that `plugin` must be
         * kept in memory during the lifetime of the application. The default
         * is to allow the application to unload `plugin` from the memory when
         * no longer needed. If this method is invoked with a `resident` value
         * of %TRUE then the application will never try to unload `plugin`.
         *
         * This method has no effect unless called from the
         * %thunar_extension_initialize method of the `plugin`.
         * @param resident %TRUE to make @plugin resident in memory.
         */
        vfunc_set_resident(resident: boolean): void;
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

    namespace Renamer {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            changed: () => void;
            'notify::help-url': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            help_url: string;
            helpUrl: string;
            name: string;
        }
    }

    abstract class Renamer extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Renamer>;

        // Properties

        /**
         * The URL to the documentation of this #ThunarxRenamer.
         * Derived classes can set this property to point to the
         * documentation for the specific renamer. The documentation
         * of the specific renamer in turn should contain a link to
         * the general Thunar renamer documentation.
         *
         * May also be unset, in which case the general Thunar renamer
         * documentation will be shown when the user clicks the "Help"
         * button.
         */
        get help_url(): string;
        set help_url(val: string);
        /**
         * The URL to the documentation of this #ThunarxRenamer.
         * Derived classes can set this property to point to the
         * documentation for the specific renamer. The documentation
         * of the specific renamer in turn should contain a link to
         * the general Thunar renamer documentation.
         *
         * May also be unset, in which case the general Thunar renamer
         * documentation will be shown when the user clicks the "Help"
         * button.
         */
        get helpUrl(): string;
        set helpUrl(val: string);
        /**
         * The user visible name of the renamer, that is displayed
         * in the bulk rename dialog of the file manager. Derived
         * classes should set a useful name.
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Renamer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Renamer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Renamer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Renamer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renamer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Renamer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renamer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Renamer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This method should be used by derived classes
         * to emit the "changed" signal for `renamer`. See
         * the documentation of the "changed" signal for
         * details.
         */
        vfunc_changed(): void;
        /**
         * Returns the list of #ThunarxMenuItem<!---->s provided by `renamer` for
         * the given list of `files`. By default, this method returns %NULL
         * (the empty list), but derived classes may override this method
         * to provide additional items for files in the bulk renamer
         * dialog list.
         *
         * The returned #ThunarxMenuItem<!---->s will be displayed in the file's
         * context menu of the bulk renamer dialog, when this `renamer` is
         * active. For example, an ID3-Tag based renamer may add an menu item
         * "Edit Tags" to the context menus of supported media files and,
         * when activated, display a dialog (which should be transient and
         * modal for `window,` if not %NULL), which allows the users to edit
         * media file tags on-the-fly.
         *
         * Derived classes that override this method should always check
         * first if all the #ThunarxFileInfo<!---->s in the list of `files`
         * are supported, and only return menu items that can be performed on
         * this specific list of `files`. For example, the ID3-Tag renamer
         * mentioned above, should first check whether all items in `files`
         * are actually audio files. The thunarx_file_info_has_mime_type()
         * of the #ThunarxFileInfo interface can be used to easily test
         * whether a file in the `files` list is of a certain MIME type.
         *
         * Some menu items may only work properly if only a single file is
         * selected (for example, the ID3-Tag renamer will probably only
         * supporting editing one file at a time). In this case you have
         * basicly two options: Either you can return %NULL here if `files`
         * does not contain exactly one item, or you can return the menu items
         * as usual, but make them insensitive, using:
         * <informalexample><programlisting>
         * thunarx_menu_item_set_sensitive (item, FALSE);
         * </programlisting></informalexample>
         * The latter has the advantage that the user will still notice the
         * existance of the menu item and probably realize that it can only be
         * applied to a single item at once.
         *
         * The caller is responsible to free the returned list using something
         * like the following:
         * <informalexample><programlisting>
         * g_list_free_full (list, g_object_unref);
         * </programlisting></informalexample>
         *
         * As a special note, this method automatically takes a reference on the
         * `renamer` for every #ThunarxMenuItem object returned from the real implementation
         * of this method in `renamer`. This is to make sure that the extension stays
         * in memory for at least the time that the menu items are used.
         *
         * The name of #ThunarxMenuItem<!---->s returned from this method must be namespaced with
         * the module to avoid collision with internal file manager menu items and
         * menu items provided by other extensions. For example, the menu item
         * provided by the ID3-Tag renamer mentioned above, should be named
         * <literal>TagRenamer::edit-tags</literal> (if <literal>TagRenamer</literal>
         * is the class name). For additional information about the way #ThunarxMenuItem<!---->s
         * should be returned from extensions and the way they are used, read the
         * description of the #ThunarxMenuProvider interface or read the introduction
         * provided with this reference manual.
         *
         * A note of warning concerning the `window` parameter. Plugins should
         * avoid taking a reference on `window,` as that might introduce a
         * circular reference and can thereby cause a quite large memory leak.
         * Instead, if `window` is not %NULL, add a weak reference using the
         * g_object_weak_ref() or g_object_add_weak_pointer() method. But don't
         * forget to release the weak reference if `window` survived the lifetime
         * of your menu item (which is likely to be the case in most situations).
         * @param window a #GtkWindow or %NULL.
         * @param files a #GList of #ThunarxFileInfo<!---->s.
         */
        vfunc_get_menu_items(window: Gtk.Window, files: FileInfo[]): MenuItem[];
        /**
         * Tells `renamer` to load its internal settings from the specified
         * `settings`. The `settings` hash table contains previously saved
         * settings, see thunarx_renamer_save(), as key/value pairs of
         * strings. That is, both the keys and the values are strings.
         *
         * Implementations of #ThunarxRenamer may decide to override this
         * method to perform custom loading of settings. If you do not
         * override this method, the default method of #ThunarxRenamer
         * will be used, which simply loads all #GObject properties
         * provided by `renamer<`!---->s class (excluding the ones
         * provided by the parent classes) from the `settings`. The
         * #GObject properties must be transformable to strings and
         * from strings.
         *
         * If you decide to override this method for your #ThunarxRenamer
         * implementation, you should also override thunarx_renamer_save().
         * @param settings a #GHashTable which contains the previously saved             settings for @renamer as key/value pairs of strings.
         */
        vfunc_load(settings: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Determines the replacement for `text` (which is the relevant
         * part of the full `file` name, i.e. either the suffix, the name
         * or the name and the suffix).
         *
         * The caller is responsible to free the returned string using
         * g_free() when no longer needed.
         * @param file the #ThunarxFileInfo for the file whose new            name - according to @renamer - should be            determined.
         * @param text the part of the filename to which the            @renamer should be applied.
         * @param index the index of the file in the list, used            for renamers that work on numbering.
         */
        vfunc_process(file: FileInfo, text: string, index: number): string;
        /**
         * Tells `renamer` to save its internal settings to the specified
         * `settings,` which can afterwards be loaded by thunarx_renamer_load().
         *
         * The strings saved to `settings` must be allocated by g_strdup(),
         * both the keys and the values. For example to store the string
         * <literal>Bar</literal> for the setting <literal>Foo</literal>,
         * you'd use:
         * <informalexample><programlisting>
         * g_hash_table_replace (settings, g_strdup ("Foo"), g_strdup ("Bar"));
         * </programlisting></informalexample>
         *
         * Implementations of #ThunarxRenamer may decide to override this
         * method to perform custom saving of settings. If you do not overrride
         * this method, the default method of #ThunarxRenamer will be used,
         * which simply stores all #GObject properties provided by the
         * `renamer<`!---->s class (excluding the ones provided by the parent
         * classes) to the `settings`. The #GObject properties must be transformable
         * to strings.
         *
         * If you decide to override this method for your #ThunarxRenamer
         * implementation, you should also override thunarx_renamer_load().
         * @param settings a #GHashTable to which the current settings of @renamer             should be stored as key/value pairs of strings.
         */
        vfunc_save(settings: { [key: string]: any } | GLib.HashTable<any, any>): void;

        // Methods

        /**
         * This method should be used by derived classes
         * to emit the "changed" signal for `renamer`. See
         * the documentation of the "changed" signal for
         * details.
         */
        changed(): void;
        /**
         * Returns the URL of the documentation for `renamer`
         * or %NULL if no specific documentation is available
         * for `renamer` and the general documentation of the
         * Thunar renamers should be displayed instead.
         * @returns the URL of the documentation for @renamer.
         */
        get_help_url(): string;
        /**
         * Returns the list of #ThunarxMenuItem<!---->s provided by `renamer` for
         * the given list of `files`. By default, this method returns %NULL
         * (the empty list), but derived classes may override this method
         * to provide additional items for files in the bulk renamer
         * dialog list.
         *
         * The returned #ThunarxMenuItem<!---->s will be displayed in the file's
         * context menu of the bulk renamer dialog, when this `renamer` is
         * active. For example, an ID3-Tag based renamer may add an menu item
         * "Edit Tags" to the context menus of supported media files and,
         * when activated, display a dialog (which should be transient and
         * modal for `window,` if not %NULL), which allows the users to edit
         * media file tags on-the-fly.
         *
         * Derived classes that override this method should always check
         * first if all the #ThunarxFileInfo<!---->s in the list of `files`
         * are supported, and only return menu items that can be performed on
         * this specific list of `files`. For example, the ID3-Tag renamer
         * mentioned above, should first check whether all items in `files`
         * are actually audio files. The thunarx_file_info_has_mime_type()
         * of the #ThunarxFileInfo interface can be used to easily test
         * whether a file in the `files` list is of a certain MIME type.
         *
         * Some menu items may only work properly if only a single file is
         * selected (for example, the ID3-Tag renamer will probably only
         * supporting editing one file at a time). In this case you have
         * basicly two options: Either you can return %NULL here if `files`
         * does not contain exactly one item, or you can return the menu items
         * as usual, but make them insensitive, using:
         * <informalexample><programlisting>
         * thunarx_menu_item_set_sensitive (item, FALSE);
         * </programlisting></informalexample>
         * The latter has the advantage that the user will still notice the
         * existance of the menu item and probably realize that it can only be
         * applied to a single item at once.
         *
         * The caller is responsible to free the returned list using something
         * like the following:
         * <informalexample><programlisting>
         * g_list_free_full (list, g_object_unref);
         * </programlisting></informalexample>
         *
         * As a special note, this method automatically takes a reference on the
         * `renamer` for every #ThunarxMenuItem object returned from the real implementation
         * of this method in `renamer`. This is to make sure that the extension stays
         * in memory for at least the time that the menu items are used.
         *
         * The name of #ThunarxMenuItem<!---->s returned from this method must be namespaced with
         * the module to avoid collision with internal file manager menu items and
         * menu items provided by other extensions. For example, the menu item
         * provided by the ID3-Tag renamer mentioned above, should be named
         * <literal>TagRenamer::edit-tags</literal> (if <literal>TagRenamer</literal>
         * is the class name). For additional information about the way #ThunarxMenuItem<!---->s
         * should be returned from extensions and the way they are used, read the
         * description of the #ThunarxMenuProvider interface or read the introduction
         * provided with this reference manual.
         *
         * A note of warning concerning the `window` parameter. Plugins should
         * avoid taking a reference on `window,` as that might introduce a
         * circular reference and can thereby cause a quite large memory leak.
         * Instead, if `window` is not %NULL, add a weak reference using the
         * g_object_weak_ref() or g_object_add_weak_pointer() method. But don't
         * forget to release the weak reference if `window` survived the lifetime
         * of your menu item (which is likely to be the case in most situations).
         * @param window a #GtkWindow or %NULL.
         * @param files a #GList of #ThunarxFileInfo<!---->s.
         * @returns the list of          #ThunarxMenuItem<!---->s provided by @renamer for the given list of          @files.
         */
        get_menu_items(window: Gtk.Window, files: FileInfo[]): MenuItem[];
        /**
         * Returns the user visible name for `renamer,` previously
         * set with thunarx_renamer_set_name().
         * @returns the user visible name for @renamer.
         */
        get_name(): string;
        /**
         * Tells `renamer` to load its internal settings from the specified
         * `settings`. The `settings` hash table contains previously saved
         * settings, see thunarx_renamer_save(), as key/value pairs of
         * strings. That is, both the keys and the values are strings.
         *
         * Implementations of #ThunarxRenamer may decide to override this
         * method to perform custom loading of settings. If you do not
         * override this method, the default method of #ThunarxRenamer
         * will be used, which simply loads all #GObject properties
         * provided by `renamer<`!---->s class (excluding the ones
         * provided by the parent classes) from the `settings`. The
         * #GObject properties must be transformable to strings and
         * from strings.
         *
         * If you decide to override this method for your #ThunarxRenamer
         * implementation, you should also override thunarx_renamer_save().
         * @param settings a #GHashTable which contains the previously saved             settings for @renamer as key/value pairs of strings.
         */
        load(settings: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Determines the replacement for `text` (which is the relevant
         * part of the full `file` name, i.e. either the suffix, the name
         * or the name and the suffix).
         *
         * The caller is responsible to free the returned string using
         * g_free() when no longer needed.
         * @param file the #ThunarxFileInfo for the file whose new            name - according to @renamer - should be            determined.
         * @param text the part of the filename to which the            @renamer should be applied.
         * @param index the index of the file in the list, used            for renamers that work on numbering.
         * @returns the string with which to replace @text.
         */
        process(file: FileInfo, text: string, index: number): string;
        /**
         * Tells `renamer` to save its internal settings to the specified
         * `settings,` which can afterwards be loaded by thunarx_renamer_load().
         *
         * The strings saved to `settings` must be allocated by g_strdup(),
         * both the keys and the values. For example to store the string
         * <literal>Bar</literal> for the setting <literal>Foo</literal>,
         * you'd use:
         * <informalexample><programlisting>
         * g_hash_table_replace (settings, g_strdup ("Foo"), g_strdup ("Bar"));
         * </programlisting></informalexample>
         *
         * Implementations of #ThunarxRenamer may decide to override this
         * method to perform custom saving of settings. If you do not overrride
         * this method, the default method of #ThunarxRenamer will be used,
         * which simply stores all #GObject properties provided by the
         * `renamer<`!---->s class (excluding the ones provided by the parent
         * classes) to the `settings`. The #GObject properties must be transformable
         * to strings.
         *
         * If you decide to override this method for your #ThunarxRenamer
         * implementation, you should also override thunarx_renamer_load().
         * @param settings a #GHashTable to which the current settings of @renamer             should be stored as key/value pairs of strings.
         */
        save(settings: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * The URL to the documentation of this #ThunarxRenamer.
         * Derived classes can set this property to point to the
         * documentation for the specific renamer. The documentation
         * of the specific renamer in turn should contain a link to
         * the general Thunar renamer documentation.
         *
         * May also be unset, in which case the general Thunar renamer
         * documentation will be shown when the user clicks the "Help"
         * button.
         * @param help_url the new URL to the documentation of @renamer.
         */
        set_help_url(help_url: string): void;
        /**
         * Sets the user visible name for `renamer` to `name`. This method should
         * only be called by derived classes and prior to returning the `renamer`
         * is returned from thunarx_renamer_provider_get_renamers().
         * @param name the new user visible name for @renamer.
         */
        set_name(name: string): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
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

    type FileInfoIface = typeof FileInfo;
    type MenuClass = typeof Menu;
    type MenuItemClass = typeof MenuItem;
    abstract class MenuItemPrivate {
        static $gtype: GObject.GType<MenuItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MenuProviderIface = typeof MenuProvider;
    type PreferencesProviderIface = typeof PreferencesProvider;
    type PropertyPageClass = typeof PropertyPage;
    abstract class PropertyPagePrivate {
        static $gtype: GObject.GType<PropertyPagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PropertyPageProviderIface = typeof PropertyPageProvider;
    type ProviderFactoryClass = typeof ProviderFactory;
    type ProviderModuleClass = typeof ProviderModule;
    type ProviderPluginIface = typeof ProviderPlugin;
    type RenamerClass = typeof Renamer;
    abstract class RenamerPrivate {
        static $gtype: GObject.GType<RenamerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RenamerProviderIface = typeof RenamerProvider;
    namespace FileInfo {
        /**
         * Interface for implementing FileInfo.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Emits the ::changed signal on `file_info`. This method should not
             * be invoked by Thunar plugins, instead the file manager itself
             * will use this method to emit ::changed whenever it notices a
             * change on `file_info`.
             */
            vfunc_changed(): void;
            /**
             * Returns the #GFileInfo associated with `file_info,`
             * which includes additional information about the `file_info`
             * as queried from GIO earlier. The caller is responsible to free the
             * returned #GFileInfo object using g_object_unref() when
             * no longer needed.
             */
            vfunc_get_file_info(): Gio.FileInfo;
            /**
             * Returns the #GFileInfo which includes additional information about
             * the filesystem `file_info` resides on. The caller is responsible to
             * free the returned #GFileInfo object using g_object_unref() when
             * no longer needed.
             */
            vfunc_get_filesystem_info(): Gio.FileInfo;
            /**
             * Returns the #GFile `file_info` points to. The #GFile is a more
             * powerful tool than just the URI or the path. The caller
             * is responsible to release the returned #GFile using g_object_unref()
             * when no longer needed.
             */
            vfunc_get_location(): Gio.File;
            /**
             * Returns the MIME-type of the file represented by
             * `file_info` or %NULL if no MIME-type is known for
             * `file_info`.
             *
             * The caller is responsible to free the returned
             * string using g_free() when no longer needed.
             */
            vfunc_get_mime_type(): string;
            /**
             * Returns the real name of the file represented
             * by `file_info` in the local file system encoding.
             * You can use g_filename_display_name() or similar
             * functions to generate an UTF-8 version of the
             * name, which is suitable for use in the user
             * interface.
             *
             * The caller is responsible to free the returned
             * string using g_free() when no longer needed.
             */
            vfunc_get_name(): string;
            /**
             * Returns the URI to the parent file of
             * `file_info` or %NULL if `file_info` has
             * no parent. Note that the parent URI
             * may be of a different type than the
             * URI of `file_info`. For example, the
             * parent of "file:///" is "computer:///".
             *
             * The caller is responsible to free the
             * returned string using g_free() when no
             * longer needed.
             */
            vfunc_get_parent_uri(): string;
            /**
             * Returns the escaped, fully qualified URI
             * of the file object represented by `file_info`.
             * You may use g_filename_from_uri() and similar
             * functions to work with the returned URI.
             *
             * The caller is responsible to free the returned
             * string using g_free() when no longer needed.
             */
            vfunc_get_uri(): string;
            /**
             * Returns the URI scheme of the file represented
             * by `file_info`. E.g. if `file_info` refers to the
             * file "file:///usr/home", the return value will
             * be "file".
             *
             * The caller is responsible to free the returned
             * string using g_free() when no longer needed.
             */
            vfunc_get_uri_scheme(): string;
            /**
             * Checks whether `file_info` is of the given `mime_type`
             * or whether the MIME-type of `file_info` is a subclass
             * of `mime_type`.
             *
             * This is the preferred way for most extensions to check
             * whether they support a given file or not, and you should
             * consider using this method rather than
             * thunarx_file_info_get_mime_type(). A simple example would
             * be a menu extension that performs a certain action on
             * text files. In this case you want to check whether a given
             * #ThunarxFileInfo refers to any kind of text file, not only
             * to "text/plain" (e.g. this also includes "text/xml" and
             * "application/x-desktop").
             *
             * But you should be aware that this method may take some
             * time to test whether `mime_type` is valid for `file_info,`
             * so don't call it too often.
             * @param mime_type a MIME-type (e.g. "text/plain").
             */
            vfunc_has_mime_type(mime_type: string): boolean;
            /**
             * Checks whether `file_info` refers to a directory.
             */
            vfunc_is_directory(): boolean;
            /**
             * Emits the ::renamed signal on `file_info`. This method should
             * not be invoked by Thunar plugins, instead the file manager
             * will emit this signal whenever the user renamed the `file_info`.
             *
             * The plugins should instead connect to the ::renamed signal
             * and update it's internal state and it's user interface
             * after the file manager renamed a file.
             */
            vfunc_renamed(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileInfoNamespace {
        $gtype: GObject.GType<FileInfo>;
        prototype: FileInfo;
    }
    interface FileInfo extends GObject.Object, FileInfo.Interface {
        // Methods

        /**
         * Emits the ::changed signal on `file_info`. This method should not
         * be invoked by Thunar plugins, instead the file manager itself
         * will use this method to emit ::changed whenever it notices a
         * change on `file_info`.
         */
        changed(): void;
        /**
         * Returns the #GFileInfo associated with `file_info,`
         * which includes additional information about the `file_info`
         * as queried from GIO earlier. The caller is responsible to free the
         * returned #GFileInfo object using g_object_unref() when
         * no longer needed.
         * @returns the #GFileInfo object associated with @file_info,          which MUST be freed using g_object_unref().
         */
        get_file_info(): Gio.FileInfo;
        /**
         * Returns the #GFileInfo which includes additional information about
         * the filesystem `file_info` resides on. The caller is responsible to
         * free the returned #GFileInfo object using g_object_unref() when
         * no longer needed.
         * @returns the #GFileInfo containing information about the          filesystem of @file_info or %NULL if no filesystem information is          available. It MUST be released using g_object_unref().
         */
        get_filesystem_info(): Gio.FileInfo;
        /**
         * Returns the #GFile `file_info` points to. The #GFile is a more
         * powerful tool than just the URI or the path. The caller
         * is responsible to release the returned #GFile using g_object_unref()
         * when no longer needed.
         * @returns the #GFile to which @file_info points. It MUST be          released using g_object_unref().
         */
        get_location(): Gio.File;
        /**
         * Returns the MIME-type of the file represented by
         * `file_info` or %NULL if no MIME-type is known for
         * `file_info`.
         *
         * The caller is responsible to free the returned
         * string using g_free() when no longer needed.
         * @returns the MIME-type for @file_info or               %NULL.
         */
        get_mime_type(): string;
        /**
         * Returns the real name of the file represented
         * by `file_info` in the local file system encoding.
         * You can use g_filename_display_name() or similar
         * functions to generate an UTF-8 version of the
         * name, which is suitable for use in the user
         * interface.
         *
         * The caller is responsible to free the returned
         * string using g_free() when no longer needed.
         * @returns the real name of the file represented               by @file_info.
         */
        get_name(): string;
        /**
         * Returns the URI to the parent file of
         * `file_info` or %NULL if `file_info` has
         * no parent. Note that the parent URI
         * may be of a different type than the
         * URI of `file_info`. For example, the
         * parent of "file:///" is "computer:///".
         *
         * The caller is responsible to free the
         * returned string using g_free() when no
         * longer needed.
         * @returns the parent URI for @file_info               or %NULL.
         */
        get_parent_uri(): string;
        /**
         * Returns the escaped, fully qualified URI
         * of the file object represented by `file_info`.
         * You may use g_filename_from_uri() and similar
         * functions to work with the returned URI.
         *
         * The caller is responsible to free the returned
         * string using g_free() when no longer needed.
         * @returns the fully qualified URI of @file_info.
         */
        get_uri(): string;
        /**
         * Returns the URI scheme of the file represented
         * by `file_info`. E.g. if `file_info` refers to the
         * file "file:///usr/home", the return value will
         * be "file".
         *
         * The caller is responsible to free the returned
         * string using g_free() when no longer needed.
         * @returns the URI scheme for @file_info.
         */
        get_uri_scheme(): string;
        /**
         * Checks whether `file_info` is of the given `mime_type`
         * or whether the MIME-type of `file_info` is a subclass
         * of `mime_type`.
         *
         * This is the preferred way for most extensions to check
         * whether they support a given file or not, and you should
         * consider using this method rather than
         * thunarx_file_info_get_mime_type(). A simple example would
         * be a menu extension that performs a certain action on
         * text files. In this case you want to check whether a given
         * #ThunarxFileInfo refers to any kind of text file, not only
         * to "text/plain" (e.g. this also includes "text/xml" and
         * "application/x-desktop").
         *
         * But you should be aware that this method may take some
         * time to test whether `mime_type` is valid for `file_info,`
         * so don't call it too often.
         * @param mime_type a MIME-type (e.g. "text/plain").
         * @returns %TRUE if @mime_type is valid for @file_info,               else %FALSE.
         */
        has_mime_type(mime_type: string): boolean;
        /**
         * Checks whether `file_info` refers to a directory.
         * @returns %TRUE if @file_info is a directory.
         */
        is_directory(): boolean;
        /**
         * Emits the ::renamed signal on `file_info`. This method should
         * not be invoked by Thunar plugins, instead the file manager
         * will emit this signal whenever the user renamed the `file_info`.
         *
         * The plugins should instead connect to the ::renamed signal
         * and update it's internal state and it's user interface
         * after the file manager renamed a file.
         */
        renamed(): void;
    }

    export const FileInfo: FileInfoNamespace & {
        new (): FileInfo; // This allows `obj instanceof FileInfo`
    };

    namespace MenuProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MenuProviderNamespace {
        $gtype: GObject.GType<MenuProvider>;
        prototype: MenuProvider;
    }
    interface MenuProvider extends GObject.Object {}

    export const MenuProvider: MenuProviderNamespace & {
        new (): MenuProvider; // This allows `obj instanceof MenuProvider`
    };

    namespace PreferencesProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PreferencesProviderNamespace {
        $gtype: GObject.GType<PreferencesProvider>;
        prototype: PreferencesProvider;
    }
    interface PreferencesProvider extends GObject.Object {}

    export const PreferencesProvider: PreferencesProviderNamespace & {
        new (): PreferencesProvider; // This allows `obj instanceof PreferencesProvider`
    };

    namespace PropertyPageProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PropertyPageProviderNamespace {
        $gtype: GObject.GType<PropertyPageProvider>;
        prototype: PropertyPageProvider;
    }
    interface PropertyPageProvider extends GObject.Object {}

    export const PropertyPageProvider: PropertyPageProviderNamespace & {
        new (): PropertyPageProvider; // This allows `obj instanceof PropertyPageProvider`
    };

    namespace ProviderPlugin {
        /**
         * Interface for implementing ProviderPlugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Registers an additional interface for a type, whose interface lives in the given type `plugin`.
             * If the interface was already registered for the type in this `plugin,` nothing will be done.
             *
             * As long as any instances of the type exist, the type `plugin` will not be unloaded.
             * @param instance_type type to which to add the interface.
             * @param interface_type interface type to add.
             * @param interface_info type information structure.
             */
            vfunc_add_interface(
                instance_type: GObject.GType,
                interface_type: GObject.GType,
                interface_info: GObject.InterfaceInfo,
            ): void;
            /**
             * Determines whether the application is allowed to unload `plugin`
             * from memory when no longer needed and reload it on demand. If
             * %FALSE is returned, then the application may unload `plugin,` else
             * if %TRUE is returned the application will take care that `plugin`
             * is never unloaded from memory during the lifetime of the application.
             */
            vfunc_get_resident(): boolean;
            /**
             * Looks up or registers an enumeration that is implemented with a particular type `plugin`. If a type
             * with name `name` was previously registered, the #GType identifier for the type is returned,
             * otherwise the type is newly registered, and the resulting #GType identifier returned.
             *
             * As long as any instances of the type exist, the type `plugin` will not be unloaded.
             * @param name the name for the type.
             * @param const_static_values an array of #GEnumValue structs for the possible enumeration values.                        The array is terminated by a struct with all members being %0.
             */
            vfunc_register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
            /**
             * Looks up or registers a flags type that is implemented with a particular type `plugin`. If a type with name
             * qname was previously registered, the #GType identifier for the type is returned, otherwise the type is newly
             * registered, and the resulting #GType identifier returned.
             *
             * As long as any instances of the type exist, the type `plugin` will not be unloaded.
             * @param name name for the type.
             * @param const_static_values an array of #GFlagsValue structs for the possible flags values.                        The array is terminated by a struct with all members being %0.
             */
            vfunc_register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
            /**
             * Looks up or registers a type that is implemented with a particular type `plugin`. If a type with name `type_name`
             * was previously registered, the #GType identifier for the type is returned, otherwise the type is newly registered,
             * and the resulting #GType identifier returned.
             *
             * When reregistering a type (typically because a module is unloaded then reloaded, and reinitialized), module and
             * `type_parent` must be the same as they were previously.
             * @param type_parent the type for the parent class.
             * @param type_name name for the type.
             * @param type_info type information structure.
             * @param type_flags flags field providing details about the type.
             */
            vfunc_register_type(
                type_parent: GObject.GType,
                type_name: string,
                type_info: GObject.TypeInfo,
                type_flags: GObject.TypeFlags,
            ): GObject.GType;
            /**
             * This method is used to instruct the application that `plugin` must be
             * kept in memory during the lifetime of the application. The default
             * is to allow the application to unload `plugin` from the memory when
             * no longer needed. If this method is invoked with a `resident` value
             * of %TRUE then the application will never try to unload `plugin`.
             *
             * This method has no effect unless called from the
             * %thunar_extension_initialize method of the `plugin`.
             * @param resident %TRUE to make @plugin resident in memory.
             */
            vfunc_set_resident(resident: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            resident: boolean;
        }
    }

    export interface ProviderPluginNamespace {
        $gtype: GObject.GType<ProviderPlugin>;
        prototype: ProviderPlugin;
    }
    interface ProviderPlugin extends GObject.Object, ProviderPlugin.Interface {
        // Properties

        /**
         * Tells whether a plugin must reside in memory once loaded for
         * the first time. See thunarx_provider_plugin_get_resident() and
         * thunarx_provider_plugin_set_resident() for more details.
         */
        get resident(): boolean;
        set resident(val: boolean);

        // Methods

        /**
         * Registers an additional interface for a type, whose interface lives in the given type `plugin`.
         * If the interface was already registered for the type in this `plugin,` nothing will be done.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param instance_type type to which to add the interface.
         * @param interface_type interface type to add.
         * @param interface_info type information structure.
         */
        add_interface(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            interface_info: GObject.InterfaceInfo,
        ): void;
        /**
         * Determines whether the application is allowed to unload `plugin`
         * from memory when no longer needed and reload it on demand. If
         * %FALSE is returned, then the application may unload `plugin,` else
         * if %TRUE is returned the application will take care that `plugin`
         * is never unloaded from memory during the lifetime of the application.
         * @returns %TRUE if @plugin will be kept in memory once loaded               for the first time.
         */
        get_resident(): boolean;
        /**
         * Looks up or registers an enumeration that is implemented with a particular type `plugin`. If a type
         * with name `name` was previously registered, the #GType identifier for the type is returned,
         * otherwise the type is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param name the name for the type.
         * @param const_static_values an array of #GEnumValue structs for the possible enumeration values.                        The array is terminated by a struct with all members being %0.
         * @returns the new or existing type id.
         */
        register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        /**
         * Looks up or registers a flags type that is implemented with a particular type `plugin`. If a type with name
         * qname was previously registered, the #GType identifier for the type is returned, otherwise the type is newly
         * registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type `plugin` will not be unloaded.
         * @param name name for the type.
         * @param const_static_values an array of #GFlagsValue structs for the possible flags values.                        The array is terminated by a struct with all members being %0.
         * @returns the new or existing type id.
         */
        register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        /**
         * Looks up or registers a type that is implemented with a particular type `plugin`. If a type with name `type_name`
         * was previously registered, the #GType identifier for the type is returned, otherwise the type is newly registered,
         * and the resulting #GType identifier returned.
         *
         * When reregistering a type (typically because a module is unloaded then reloaded, and reinitialized), module and
         * `type_parent` must be the same as they were previously.
         * @param type_parent the type for the parent class.
         * @param type_name name for the type.
         * @param type_info type information structure.
         * @param type_flags flags field providing details about the type.
         * @returns the new or existing type id.
         */
        register_type(
            type_parent: GObject.GType,
            type_name: string,
            type_info: GObject.TypeInfo,
            type_flags: GObject.TypeFlags | null,
        ): GObject.GType;
        /**
         * This method is used to instruct the application that `plugin` must be
         * kept in memory during the lifetime of the application. The default
         * is to allow the application to unload `plugin` from the memory when
         * no longer needed. If this method is invoked with a `resident` value
         * of %TRUE then the application will never try to unload `plugin`.
         *
         * This method has no effect unless called from the
         * %thunar_extension_initialize method of the `plugin`.
         * @param resident %TRUE to make @plugin resident in memory.
         */
        set_resident(resident: boolean): void;
    }

    export const ProviderPlugin: ProviderPluginNamespace & {
        new (): ProviderPlugin; // This allows `obj instanceof ProviderPlugin`
    };

    namespace RenamerProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RenamerProviderNamespace {
        $gtype: GObject.GType<RenamerProvider>;
        prototype: RenamerProvider;
    }
    interface RenamerProvider extends GObject.Object {}

    export const RenamerProvider: RenamerProviderNamespace & {
        new (): RenamerProvider; // This allows `obj instanceof RenamerProvider`
    };

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

export default Thunarx;

// END
