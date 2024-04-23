/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './budgie-1.0-ambient.d.ts';

/**
 * Budgie-1.0
 */

import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Budgie {
    /**
     * The BudgiePopoverPositionPolicy determines how the #BudgiePopover will be
     * placed on screen. The default policy (AUTOMATIC) will try to place the
     * popover at a sensible location relative to the parent widget, and point
     * the tail accordingly.
     *
     * The TOPLEVEL_HINT policy is designed for use with panels + docks, where the
     * top level window owning the relative-to widget sets a CSS class on itself
     * in accordance with the screen edge, i.e. top, left, bottom, right.
     */
    enum PopoverPositionPolicy {
        /**
         * Determine location based on the screen estate
         */
        AUTOMATIC,
        /**
         * Use hints on widgets parent window
         */
        TOPLEVEL_HINT,
    }
    const APPLET_KEY_ALIGN: string;
    const APPLET_KEY_NAME: string;
    const APPLET_KEY_POS: string;
    /**
     * BudgiePanelAction's are bitwise OR'd so that a #BudgieApplet may expose
     * the actions that it supports, when the panel is interacted with in
     * a global fashion (such as via the D-BUS API)
     */
    enum PanelAction {
        NONE,
        /**
         * Invoke the menu action
         */
        MENU,
        MAX,
    }
    /**
     * Each applet lives on a unique panel which can live on any one of
     * the 4 screen edges. Internally this is represented with a bitmask
     * to enable efficient screen management.
     */
    enum PanelPosition {
        /**
         * No position is yet assigned
         */
        NONE,
        /**
         * The bottom edge has been assigned
         */
        BOTTOM,
        /**
         * The top edge has been assigned
         */
        TOP,
        /**
         * The left edge has been assigned
         */
        LEFT,
        /**
         * The right edge has been assigned
         */
        RIGHT,
    }
    module Applet {
        // Signal callback interfaces

        interface PanelPositionChanged {
            (position: PanelPosition): void;
        }

        interface PanelSizeChanged {
            (panel_size: number, icon_size: number, small_icon_size: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.EventBox.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            settings_prefix: string;
            settingsPrefix: string;
            settings_schema: string;
            settingsSchema: string;
            supported_actions: PanelAction;
            supportedActions: PanelAction;
        }
    }

    class Applet extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Applet>;

        // Own properties of Budgie.Applet

        /**
         * The GSettings schema path prefix for this applet
         *
         * For applets that require unique instance configuration, the
         * panel management must know where to initialise the settings
         * within the tree. The path takes the form:
         *
         * `$SETTINGS_PREFIX/{$UUID}`
         *
         * As an example, the Budgie Menu Applet set's the `settings-prefix`
         * to:
         * `/com/solus-project/budgie-panel/instance/budgie-menu`.
         *
         * This results in relocatable schemas being created at:
         *
         * `/com/solus-project/budgie-panel/instance/budgie-menu/{$UUID}`
         */
        get settings_prefix(): string;
        set settings_prefix(val: string);
        /**
         * The GSettings schema path prefix for this applet
         *
         * For applets that require unique instance configuration, the
         * panel management must know where to initialise the settings
         * within the tree. The path takes the form:
         *
         * `$SETTINGS_PREFIX/{$UUID}`
         *
         * As an example, the Budgie Menu Applet set's the `settings-prefix`
         * to:
         * `/com/solus-project/budgie-panel/instance/budgie-menu`.
         *
         * This results in relocatable schemas being created at:
         *
         * `/com/solus-project/budgie-panel/instance/budgie-menu/{$UUID}`
         */
        get settingsPrefix(): string;
        set settingsPrefix(val: string);
        /**
         * The ID of the GSettings schema used by this applet
         *
         * This only takes effect when you've also set #BudgieApplet:settings-prefix,
         * and is used by the panel managemen to both initialise and delete your per-instance
         * settings, respectively.
         *
         * As an example, the Budgie Menu Applet uses the schema:
         *
         * `com.solus-project.budgie-menu`
         *
         * as defined by the accompanying gschema XML file. Providing an incorrect
         * schema ID is considered programmer error.
         */
        get settings_schema(): string;
        set settings_schema(val: string);
        /**
         * The ID of the GSettings schema used by this applet
         *
         * This only takes effect when you've also set #BudgieApplet:settings-prefix,
         * and is used by the panel managemen to both initialise and delete your per-instance
         * settings, respectively.
         *
         * As an example, the Budgie Menu Applet uses the schema:
         *
         * `com.solus-project.budgie-menu`
         *
         * as defined by the accompanying gschema XML file. Providing an incorrect
         * schema ID is considered programmer error.
         */
        get settingsSchema(): string;
        set settingsSchema(val: string);
        /**
         * The actions supported by this applet instance
         */
        get supported_actions(): PanelAction;
        set supported_actions(val: PanelAction);
        /**
         * The actions supported by this applet instance
         */
        get supportedActions(): PanelAction;
        set supportedActions(val: PanelAction);

        // Constructors of Budgie.Applet

        constructor(properties?: Partial<Applet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Applet;

        // Own signals of Budgie.Applet

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'panel-position-changed', callback: (_source: this, position: PanelPosition) => void): number;
        connect_after(
            signal: 'panel-position-changed',
            callback: (_source: this, position: PanelPosition) => void,
        ): number;
        emit(signal: 'panel-position-changed', position: PanelPosition): void;
        connect(
            signal: 'panel-size-changed',
            callback: (_source: this, panel_size: number, icon_size: number, small_icon_size: number) => void,
        ): number;
        connect_after(
            signal: 'panel-size-changed',
            callback: (_source: this, panel_size: number, icon_size: number, small_icon_size: number) => void,
        ): number;
        emit(signal: 'panel-size-changed', panel_size: number, icon_size: number, small_icon_size: number): void;

        // Own virtual methods of Budgie.Applet

        /**
         * For applets that need to expose settings, they should both override the
         * #BudgieApplet::supports_settings method and return a new widget instance
         * whenever this function is invoked.
         *
         * This UI will live in the Raven sidebar within the Budgie Desktop, and
         * will be destroyed as soon as it's not being used. It's advisable to keep
         * this widget implementation light, and to prefer vertical space.
         */
        vfunc_get_settings_ui(): Gtk.Widget | null;
        /**
         * Invoke the given action on this applet. This action will only be one
         * that has been declared in supported actions bitmask.
         *
         * To allow better integration between the Budgie Desktop, and the applets
         * that live within it, the panel will relay actions to applets that have
         * set their #BudgieApplet:supported-actions to a matching bitmask.
         *
         * For example, if we wish to listen for Menu Key events, we can simply do
         * the following in C:
         *
         *
         * ```c
         *
         *      static void my_applet_invoke_action(BudgieApplet *applet, BudgiePanelAction action)
         *      {
         *              if (action == BUDGIE_PANEL_ACTION_MENU) {
         *                      my_applet_do_predict_the_lottery(MY_APPLET(applet));
         *              }
         *      }
         *
         *      static void my_class_init(GObjectClass *class)
         *      {
         *              MyClass *mc = MY_CLASS(klass);
         *              ..
         *              mc->invoke_action = my_applet_invoke_action;
         *      }
         * ```
         *
         *
         * Likewise, a Vala implementation might look like the following:
         *
         * ```<!-- language="Vala" -->
         *
         *      public override void invoke_action(Budgie.PanelAction action)
         *      {
         *          if (action == Budgie.PanelAction.MENU) {
         *              this.predict_the_lottery();
         *          }
         *      }
         * ```
         *
         * @param action Action to invoke
         */
        vfunc_invoke_action(action: PanelAction): void;
        vfunc_panel_position_changed(position: PanelPosition): void;
        vfunc_panel_size_changed(panel_size: number, icon_size: number, small_icon_size: number): void;
        /**
         * Implementations should override this to return TRUE if they support
         * a settings UI
         */
        vfunc_supports_settings(): boolean;
        /**
         * This virtual method should be implemented by panel applets that wish
         * to support #GtkPopover's natively. As each Budgie Panel may house multiple
         * GtkPopover widgets, each one must be registered with the `manager`.
         *
         * During this call, it is safe to store a reference to the `manager`. In
         * this call you should invoke #BudgiePopoverManager::register_popover to
         * register your popover with the panel manager.
         *
         * Each registered popover joins the global menu system of popovers in the
         * panel. It is a requirement to register, otherwise the panel will not
         * know when to expand and collapse the main panel harness to accommodate
         * the GtkPopover.
         * @param manager
         */
        vfunc_update_popovers(manager?: PopoverManager | null): void;

        // Own methods of Budgie.Applet

        /**
         * If your #BudgiePlugin implementation passes the UUID to your BudgieApplet
         * implementation on construction, you can take advantage of per-instance
         * settings.
         *
         * For most applets, global GSettings keys are more than suffice. However,
         * in some situations, it may be beneficial to enable multiple unique instances
         * of your applet, each with their own configuration.
         *
         * To facilitate this, use this function to create a new relocatable settings
         * instance using your UUID. Make sure you set the #BudgieApplet:settings-schema
         * and #BudgieApplet:settings-prefix properties first.
         * @param uuid UUID for this instance
         * @returns A newly created #GSettings for this applet instance
         */
        get_applet_settings(uuid: string): Gio.Settings;
        /**
         * Utility function for Python usage. See: #BudgieApplet:settings-prefix
         */
        get_settings_prefix(): string;
        /**
         * Utility function for Python usage. See #BudgieApplet:settings-schema
         */
        get_settings_schema(): string;
        /**
         * For applets that need to expose settings, they should both override the
         * #BudgieApplet::supports_settings method and return a new widget instance
         * whenever this function is invoked.
         *
         * This UI will live in the Raven sidebar within the Budgie Desktop, and
         * will be destroyed as soon as it's not being used. It's advisable to keep
         * this widget implementation light, and to prefer vertical space.
         * @returns A GTK Settings UI
         */
        get_settings_ui(): Gtk.Widget | null;
        /**
         * Utility function for Python bindings. See #BudgieApplet:supported-actions
         */
        get_supported_actions(): PanelAction;
        /**
         * Invoke the given action on this applet. This action will only be one
         * that has been declared in supported actions bitmask.
         *
         * To allow better integration between the Budgie Desktop, and the applets
         * that live within it, the panel will relay actions to applets that have
         * set their #BudgieApplet:supported-actions to a matching bitmask.
         *
         * For example, if we wish to listen for Menu Key events, we can simply do
         * the following in C:
         *
         *
         * ```c
         *
         *      static void my_applet_invoke_action(BudgieApplet *applet, BudgiePanelAction action)
         *      {
         *              if (action == BUDGIE_PANEL_ACTION_MENU) {
         *                      my_applet_do_predict_the_lottery(MY_APPLET(applet));
         *              }
         *      }
         *
         *      static void my_class_init(GObjectClass *class)
         *      {
         *              MyClass *mc = MY_CLASS(klass);
         *              ..
         *              mc->invoke_action = my_applet_invoke_action;
         *      }
         * ```
         *
         *
         * Likewise, a Vala implementation might look like the following:
         *
         * ```<!-- language="Vala" -->
         *
         *      public override void invoke_action(Budgie.PanelAction action)
         *      {
         *          if (action == Budgie.PanelAction.MENU) {
         *              this.predict_the_lottery();
         *          }
         *      }
         * ```
         *
         * @param action Action to invoke
         */
        invoke_action(action: PanelAction): void;
        /**
         * Utility function for Python usage. See: #BudgieApplet:settings-prefix
         * @param prefix
         */
        set_settings_prefix(prefix: string): void;
        /**
         * Utility function for Python usage. See #BudgieApplet:settings-schema
         * @param schema
         */
        set_settings_schema(schema: string): void;
        /**
         * Implementations should override this to return TRUE if they support
         * a settings UI
         * @returns true if this implementation supports a Settings UI
         */
        supports_settings(): boolean;
        /**
         * This virtual method should be implemented by panel applets that wish
         * to support #GtkPopover's natively. As each Budgie Panel may house multiple
         * GtkPopover widgets, each one must be registered with the `manager`.
         *
         * During this call, it is safe to store a reference to the `manager`. In
         * this call you should invoke #BudgiePopoverManager::register_popover to
         * register your popover with the panel manager.
         *
         * Each registered popover joins the global menu system of popovers in the
         * panel. It is a requirement to register, otherwise the panel will not
         * know when to expand and collapse the main panel harness to accommodate
         * the GtkPopover.
         * @param manager
         */
        update_popovers(manager?: PopoverManager | null): void;

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

    module AppletInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alignment: string;
            applet: Applet;
            description: string;
            icon: string;
            name: string;
            position: number;
            settings: Gio.Settings;
            uuid: string;
        }
    }

    /**
     * This type is private to the panel implementation, and is used to monitor, track,
     * and control each applet instance.
     */
    class AppletInfo extends GObject.Object {
        static $gtype: GObject.GType<AppletInfo>;

        // Own properties of Budgie.AppletInfo

        get alignment(): string;
        set alignment(val: string);
        get applet(): Applet;
        set applet(val: Applet);
        get description(): string;
        set description(val: string);
        get icon(): string;
        set icon(val: string);
        get name(): string;
        set name(val: string);
        get position(): number;
        set position(val: number);
        get settings(): Gio.Settings;
        set settings(val: Gio.Settings);
        get uuid(): string;
        set uuid(val: string);

        // Constructors of Budgie.AppletInfo

        constructor(properties?: Partial<AppletInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](plugin_info: Peas.PluginInfo, uuid: string, applet: Applet, settings: Gio.Settings): AppletInfo;

        static new_from_uuid(uuid: string): AppletInfo;
    }

    module Popover {
        // Signal callback interfaces

        interface Closed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            position_policy: PopoverPositionPolicy;
            positionPolicy: PopoverPositionPolicy;
            relative_to: Gtk.Widget;
            relativeTo: Gtk.Widget;
        }
    }

    class Popover extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Popover>;

        // Own properties of Budgie.Popover

        /**
         * Control the behavior used to place the popover on screen.
         */
        get position_policy(): PopoverPositionPolicy;
        set position_policy(val: PopoverPositionPolicy);
        /**
         * Control the behavior used to place the popover on screen.
         */
        get positionPolicy(): PopoverPositionPolicy;
        set positionPolicy(val: PopoverPositionPolicy);
        get relative_to(): Gtk.Widget;
        set relative_to(val: Gtk.Widget);
        get relativeTo(): Gtk.Widget;
        set relativeTo(val: Gtk.Widget);

        // Constructors of Budgie.Popover

        constructor(properties?: Partial<Popover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](relative_to: Gtk.Widget): Popover;
        // Conflicted with Gtk.Window.new

        static ['new'](...args: never[]): any;

        // Own signals of Budgie.Popover

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'closed', callback: (_source: this) => void): number;
        connect_after(signal: 'closed', callback: (_source: this) => void): number;
        emit(signal: 'closed'): void;

        // Own virtual methods of Budgie.Popover

        vfunc_closed(): void;

        // Own methods of Budgie.Popover

        /**
         * Retrieve the currently active positioning policy for this popover
         * @returns The #BudgiePopoverPositionPolicy currently in use
         */
        get_position_policy(): PopoverPositionPolicy;
        /**
         * Set the positioning policy employed by the popover
         * @param policy New policy to set
         */
        set_position_policy(policy: PopoverPositionPolicy): void;

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

    module PopoverManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PopoverManager extends GObject.Object {
        static $gtype: GObject.GType<PopoverManager>;

        // Constructors of Budgie.PopoverManager

        constructor(properties?: Partial<PopoverManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PopoverManager;

        // Own methods of Budgie.PopoverManager

        /**
         * Register a new popover with it's relative-to widget within the popover management
         * system. This will allow the popover to be activated when it's parent widget has
         * been activated by a mouse roll over, when another widget is visible.
         *
         * This allows the panel to provide a "menubar" like functionality for interaction
         * with multiple popovers in a natural fashion.
         * @param parent_widget The widget that "owns" the popover (relative-to)
         * @param popover The popover that will be shown when the @parent_widget is activated
         */
        register_popover(parent_widget: Gtk.Widget, popover: Popover): void;
        /**
         * Show a #BudgiePopover on screen belonging to the specified `parent_widget`
         * @param parent_widget The widget owning the popover to be shown
         */
        show_popover(parent_widget: Gtk.Widget): void;
        /**
         * Unregister a popover so that it is no longer managed by this implementation,
         * and is free to manage itself.
         * @param parent_widget The associated widget (key) for the registered popover
         */
        unregister_popover(parent_widget: Gtk.Widget): void;
    }

    type AppletClass = typeof Applet;
    type AppletInfoClass = typeof AppletInfo;
    abstract class AppletInfoPrivate {
        static $gtype: GObject.GType<AppletInfoPrivate>;

        // Constructors of Budgie.AppletInfoPrivate

        _init(...args: any[]): void;
    }

    abstract class AppletPrivate {
        static $gtype: GObject.GType<AppletPrivate>;

        // Constructors of Budgie.AppletPrivate

        _init(...args: any[]): void;
    }

    type PluginIface = typeof Plugin;
    type PopoverClass = typeof Popover;
    type PopoverManagerClass = typeof PopoverManager;
    abstract class PopoverManagerPrivate {
        static $gtype: GObject.GType<PopoverManagerPrivate>;

        // Constructors of Budgie.PopoverManagerPrivate

        _init(...args: any[]): void;
    }

    abstract class PopoverPrivate {
        static $gtype: GObject.GType<PopoverPrivate>;

        // Constructors of Budgie.PopoverPrivate

        _init(...args: any[]): void;
    }

    module Plugin {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PluginNamespace {
        $gtype: GObject.GType<Plugin>;
        prototype: Plugin;
    }
    interface Plugin extends GObject.Object {
        // Own methods of Budgie.Plugin

        get_panel_widget(uuid: string): Applet;

        // Own virtual methods of Budgie.Plugin

        vfunc_get_panel_widget(uuid: string): Applet;
    }

    export const Plugin: PluginNamespace;

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

export default Budgie;
// END
