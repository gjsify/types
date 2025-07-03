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
import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Budgie {
    /**
     * Budgie-1.0
     */

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
    export namespace PopoverPositionPolicy {
        export const $gtype: GObject.GType<PopoverPositionPolicy>;
    }

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

    /**
     * BudgiePanelAction's are bitwise OR'd so that a #BudgieApplet may expose
     * the actions that it supports, when the panel is interacted with in
     * a global fashion (such as via the D-BUS API)
     */
    export namespace PanelAction {
        export const $gtype: GObject.GType<PanelAction>;
    }

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

    /**
     * Each applet lives on a unique panel which can live on any one of
     * the 4 screen edges. Internally this is represented with a bitmask
     * to enable efficient screen management.
     */
    export namespace PanelPosition {
        export const $gtype: GObject.GType<PanelPosition>;
    }

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
    namespace Applet {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'panel-position-changed': (arg0: PanelPosition) => void;
            'panel-size-changed': (arg0: number, arg1: number, arg2: number) => void;
            'notify::settings-prefix': (pspec: GObject.ParamSpec) => void;
            'notify::settings-schema': (pspec: GObject.ParamSpec) => void;
            'notify::supported-actions': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Applet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Applet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Applet;

        // Signals

        connect<K extends keyof Applet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Applet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Applet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Applet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Applet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Applet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

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
        /**
         * Virtual panel_size_changed function
         * @param panel_size
         * @param icon_size
         * @param small_icon_size
         */
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

        // Methods

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
        invoke_action(action: PanelAction | null): void;
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

    namespace AppletInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::alignment': (pspec: GObject.ParamSpec) => void;
            'notify::applet': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::settings': (pspec: GObject.ParamSpec) => void;
            'notify::uuid': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppletInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AppletInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](plugin_info: Peas.PluginInfo, uuid: string, applet: Applet, settings: Gio.Settings): AppletInfo;

        static new_from_uuid(uuid: string): AppletInfo;

        // Signals

        connect<K extends keyof AppletInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppletInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AppletInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppletInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AppletInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppletInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Popover {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            closed: () => void;
            'notify::position-policy': (pspec: GObject.ParamSpec) => void;
            'notify::relative-to': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Popover.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Popover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](relative_to: Gtk.Widget): Popover;
        // Conflicted with Gtk.Window.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Popover.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Popover.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Popover.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Popover.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Popover.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Popover.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Virtual closed signal
         */
        vfunc_closed(): void;

        // Methods

        /**
         * Retrieve the currently active positioning policy for this popover
         * @returns The #BudgiePopoverPositionPolicy currently in use
         */
        get_position_policy(): PopoverPositionPolicy;
        /**
         * Set the positioning policy employed by the popover
         * @param policy New policy to set
         */
        set_position_policy(policy: PopoverPositionPolicy | null): void;

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

    namespace PopoverManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PopoverManager extends GObject.Object {
        static $gtype: GObject.GType<PopoverManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PopoverManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PopoverManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PopoverManager;

        // Signals

        connect<K extends keyof PopoverManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PopoverManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PopoverManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PopoverManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PopoverManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PopoverManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class AppletPrivate {
        static $gtype: GObject.GType<AppletPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PluginIface = typeof Plugin;
    type PopoverClass = typeof Popover;
    type PopoverManagerClass = typeof PopoverManager;
    abstract class PopoverManagerPrivate {
        static $gtype: GObject.GType<PopoverManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class PopoverPrivate {
        static $gtype: GObject.GType<PopoverPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Plugin {
        /**
         * Interface for implementing Plugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_panel_widget(uuid: string): Applet;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PluginNamespace {
        $gtype: GObject.GType<Plugin>;
        prototype: Plugin;
    }
    interface Plugin extends GObject.Object, Plugin.Interface {
        // Methods

        get_panel_widget(uuid: string): Applet;
    }

    export const Plugin: PluginNamespace & {
        new (): Plugin; // This allows `obj instanceof Plugin`
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

export default Budgie;

// END
