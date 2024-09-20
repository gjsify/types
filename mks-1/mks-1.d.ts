/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Mks {
    /**
     * Mks-1
     */

    /**
     * A mouse button.
     */

    /**
     * A mouse button.
     */
    export namespace MouseButton {
        export const $gtype: GObject.GType<MouseButton>;
    }

    enum MouseButton {
        /**
         * Left button.
         */
        LEFT,
        /**
         * Middle button.
         */
        MIDDLE,
        /**
         * Right button.
         */
        RIGHT,
        /**
         * Wheel-up button.
         */
        WHEEL_UP,
        /**
         * Wheel-down button.
         */
        WHEEL_DOWN,
        /**
         * Side button.
         */
        SIDE,
        /**
         * Extra button.
         */
        EXTRA,
    }
    /**
     * A screen kind.
     */

    /**
     * A screen kind.
     */
    export namespace ScreenKind {
        export const $gtype: GObject.GType<ScreenKind>;
    }

    enum ScreenKind {
        /**
         * A text only screen.
         */
        TEXT,
        /**
         * A graphical screen.
         */
        GRAPHIC,
    }
    /**
     * The type of a touch event.
     */

    /**
     * The type of a touch event.
     */
    export namespace TouchEventKind {
        export const $gtype: GObject.GType<TouchEventKind>;
    }

    enum TouchEventKind {
        /**
         * The touch event has just started.
         */
        BEGIN,
        /**
         * The touch event has been updated.
         */
        UPDATE,
        /**
         * The touch event has finished.
         */
        END,
        /**
         * The touch event has been canceled.
         */
        CANCEL,
    }
    /**
     * mks major version component (e.g. 1 if %MKS_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * mks micro version component (e.g. 3 if %MKS_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * mks minor version component (e.g. 2 if %MKS_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * mks version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    /**
     * The major version the library.
     */
    function get_major_version(): number;
    /**
     * The micro version the library.
     */
    function get_micro_version(): number;
    /**
     * The minor version the library.
     */
    function get_minor_version(): number;
    /**
     * Initializes the library.
     *
     * The function must be called before using any of the library functions.
     */
    function init(): void;
    /**
     * The active keyboard modifiers.
     */

    /**
     * The active keyboard modifiers.
     */
    export namespace KeyboardModifier {
        export const $gtype: GObject.GType<KeyboardModifier>;
    }

    enum KeyboardModifier {
        /**
         * No modifier.
         */
        NONE,
        /**
         * Scroll lock.
         */
        SCROLL_LOCK,
        /**
         * Numeric lock.
         */
        NUM_LOCK,
        /**
         * Caps lock.
         */
        CAPS_LOCK,
    }
    module Device {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * An abstraction of a virtualized QEMU device.
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        /**
         * The device name.
         */
        get name(): string;

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the device name.
         */
        get_name(): string;
    }

    module Display {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            auto_resize: boolean;
            autoResize: boolean;
            screen: Screen;
            ungrab_trigger: Gtk.ShortcutTrigger;
            ungrabTrigger: Gtk.ShortcutTrigger;
        }
    }

    class Display extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Display>;

        // Properties

        get auto_resize(): boolean;
        set auto_resize(val: boolean);
        get autoResize(): boolean;
        set autoResize(val: boolean);
        get screen(): Screen;
        set screen(val: Screen);
        get ungrab_trigger(): Gtk.ShortcutTrigger;
        set ungrab_trigger(val: Gtk.ShortcutTrigger);
        get ungrabTrigger(): Gtk.ShortcutTrigger;
        set ungrabTrigger(val: Gtk.ShortcutTrigger);

        // Constructors

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Display;

        // Methods

        /**
         * Get whether the widget will reconfigure the VM whenever
         * it gets a new size allocation.
         */
        get_auto_resize(): boolean;
        /**
         * Retrieve the (`guest_x`, `guest_y`) position
         * where the `event` happened.
         *
         * Could be useful for implementing touch support emulation.
         * @param event A #GdkEvent
         * @returns Whether the event has an associated position
         */
        get_event_position_in_guest(event: Gdk.Event): [boolean, number, number];
        /**
         * Gets the screen connected to the display.
         * @returns a #MksScreen
         */
        get_screen(): Screen;
        /**
         * Gets the #GtkShortcutTrigger that will ungrab the display.
         * @returns a #GtkShortcutTrigger
         */
        get_ungrab_trigger(): Gtk.ShortcutTrigger;
        /**
         * Sets whether the widget should reconfigure the VM
         * with the allocated size of the widget.
         * @param auto_resize Whether to auto resize or not
         */
        set_auto_resize(auto_resize: boolean): void;
        set_screen(screen: Screen): void;
        set_ungrab_trigger(trigger: Gtk.ShortcutTrigger): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Keyboard {
        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            modifiers: KeyboardModifier;
        }
    }

    /**
     * A virtualized QEMU keyboard.
     */
    class Keyboard extends Device {
        static $gtype: GObject.GType<Keyboard>;

        // Properties

        /**
         * Active keyboard modifiers.
         */
        get modifiers(): KeyboardModifier;

        // Constructors

        constructor(properties?: Partial<Keyboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Translate a keycode to a QEMU compatible one.
         * @param keyval the keyval
         * @param keycode the hardware keycode
         */
        static translate(keyval: number, keycode: number): number;

        // Methods

        /**
         * Get the active keyboard modifiers.
         */
        get_modifiers(): KeyboardModifier;
        /**
         * Presses `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        press(
            keycode: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Keyboard.press].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        press_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously press the `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        press_sync(keycode: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Releases `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        release(
            keycode: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Keyboard.release].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        release_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously release the `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        release_sync(keycode: number, cancellable?: Gio.Cancellable | null): boolean;
    }

    module Mouse {
        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            is_absolute: boolean;
            isAbsolute: boolean;
        }
    }

    /**
     * A virtualized QEMU mouse.
     */
    class Mouse extends Device {
        static $gtype: GObject.GType<Mouse>;

        // Properties

        /**
         * Whether the mouse is using absolute movements.
         */
        get is_absolute(): boolean;
        /**
         * Whether the mouse is using absolute movements.
         */
        get isAbsolute(): boolean;

        // Constructors

        constructor(properties?: Partial<Mouse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Whether the mouse is using absolute movements.
         */
        get_is_absolute(): boolean;
        /**
         * Moves the mouse by delta_x and delta_y.
         * @param delta_x the x coordinate delta
         * @param delta_y the y coordinate delta
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        move_by(
            delta_x: number,
            delta_y: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Mouse.move_by].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        move_by_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously moves the mouse by delta_x and delta_y.
         * @param delta_x the x coordinate delta
         * @param delta_y the y coordinate delta
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        move_by_sync(delta_x: number, delta_y: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Moves to the absolute position at coordinates (x,y).
         * @param x the x coordinate
         * @param y the y coordinate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        move_to(
            x: number,
            y: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Mouse.move_to].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        move_to_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously moves to the absolute position at coordinates (x,y).
         * @param x the x coordinate
         * @param y the y coordinate
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        move_to_sync(x: number, y: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Presses a mouse button.
         * @param button the #MksMouseButton that was pressed
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        press(
            button: MouseButton,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Mouse.press].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        press_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously press a mouse button.
         * @param button the #MksMouseButton that was released
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        press_sync(button: MouseButton, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Releases a mouse button.
         * @param button the #MksMouseButton that was released
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        release(
            button: MouseButton,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Mouse.release].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        release_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously releases a mouse button.
         * @param button the #MksMouseButton that was released
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        release_sync(button: MouseButton, cancellable?: Gio.Cancellable | null): boolean;
    }

    module Screen {
        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            device_address: string;
            deviceAddress: string;
            height: number;
            keyboard: Keyboard;
            kind: ScreenKind;
            mouse: Mouse;
            number: number;
            width: number;
        }
    }

    class Screen extends Device {
        static $gtype: GObject.GType<Screen>;

        // Properties

        get device_address(): string;
        get deviceAddress(): string;
        get height(): number;
        get keyboard(): Keyboard;
        get kind(): ScreenKind;
        get mouse(): Mouse;
        get number(): number;
        get width(): number;

        // Constructors

        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Asynchronously creates a #GdkPaintable that is updated with the
         * contents of the screen.
         *
         * This function registers a new `socketpair()` which is shared with
         * the QEMU instance to receive rendering updates. Those updates are
         * propagated to the resulting #GdkPainable which can be retrieved
         * using mks_screen_attach_finish() from `callback`.
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        attach(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes an asynchronous request to create a [iface`Gdk`.Paintable] containing
         * the contents of #MksScreen in the QEMU instance.
         *
         * The resulting [iface`Gdk`.Paintable] will be updated as changes are delivered
         * from QEMU over a private `socketpair()`. In the typical case, those
         * changes are propagated using a DMA-BUF and damage notifications.
         * @param result a #GAsyncResult provided to callback
         * @returns a #GdkPainable if successful; otherwise %NULL   and @error is set.
         */
        attach_finish(result: Gio.AsyncResult): Gdk.Paintable;
        /**
         * Synchronous request to attach to screen, creating a paintable that can
         * be used to update display as the QEMU instance updates.
         * @param cancellable a #GCancellable or %NULL
         * @returns a #GdkPaintable if successful; otherwise %NULL   and @error is set.
         */
        attach_sync(cancellable?: Gio.Cancellable | null): Gdk.Paintable;
        configure(
            attributes: ScreenAttributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to mks_screen_configure().
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        configure_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests the QEMU instance reconfigure the screen using `attributes`.
         *
         * This function takes ownership of `attributes`.
         * @param attributes a #MksScreenAttributes
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        configure_sync(attributes: ScreenAttributes, cancellable?: Gio.Cancellable | null): boolean;
        get_device_address(): string;
        /**
         * Gets the "height" property.
         * @returns The height of the screen in pixels.
         */
        get_height(): number;
        /**
         * Gets the #MksScreen:keyboard property.
         * @returns a #MksKeyboard
         */
        get_keyboard(): Keyboard;
        /**
         * Gets the "kind" property.
         * @returns a #MksScreenKind
         */
        get_kind(): ScreenKind;
        /**
         * Gets the #MksScreen:mouse property.
         * @returns a #MksMouse
         */
        get_mouse(): Mouse;
        /**
         * Gets the "number" property.
         * @returns the screen number
         */
        get_number(): number;
        /**
         * Gets the #MksScreen:touchable property.
         * @returns a #MksTouchable
         */
        get_touchable(): Touchable;
        /**
         * Gets the "width" property.
         * @returns The width of the screen in pixels.
         */
        get_width(): number;
    }

    module Session {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            connection: Gio.DBusConnection;
            devices: Gio.ListModel;
            name: string;
            uuid: string;
        }
    }

    /**
     * Session connected to a QEMU VM
     *
     * The `MksSession` represents a connection to a QEMU VM instance. It contains
     * devices such as the mouse, keyboard, and screen which can be used with GTK.
     *
     * You may monitor [property`Mks`.Session:devices] using [signal`Gio`.ListModel::items-changed] to be
     * notified of changes to available devices in the session.
     *
     * # Connecting To QEMU
     *
     * To use `MksSession`, you should create your QEMU instance using `dbus` for
     * the various devices that support it. You'll need to provide your P2P D-Bus
     * address when connecting to QEMU.
     *
     * Using the same [class`Gio`.DBusConnection], create a `MksSession` with
     * [func`Mks`.Session.new_for_connection]. The `MksSession` instance will negotiate
     * with the peer to determine what devices are available and expose them
     * via the [property`Mks`.Session:devices] [iface`Gio`.ListModel].
     *
     * # Creating Widgets
     *
     * You can create a new widget to embed in your application by calling
     * [method`Mks`.Session.ref_screen] and set the screen for the [class`Mks`.Display]
     * with [method`Mks`.Display.set_screen].
     */
    class Session extends GObject.Object implements Gio.AsyncInitable<Session>, Gio.Initable {
        static $gtype: GObject.GType<Session>;

        // Properties

        /**
         * The [class`Gio`.DBusConnection] that is used to communicate with QEMU.
         */
        get connection(): Gio.DBusConnection;
        /**
         * A [iface`Gio`.ListModel] of devices that have been
         * discovered on the [class`Gio`.DBusConnection] to QEMU.
         */
        get devices(): Gio.ListModel;
        /**
         * The VM name as specified by the QEMU instance.
         */
        get name(): string;
        /**
         * The VM unique identifier specified by the QEMU instance.
         */
        get uuid(): string;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_connection_finish(result: Gio.AsyncResult): Session;

        static new_for_connection_sync(connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): Session;

        // Static methods

        /**
         * Creates a #MksSession which communicates using `connection`.
         *
         * The [class`Gio`.DBusConnection] should be a private D-Bus connection to a QEMU
         * instance which has devices created using the "dbus" backend.
         *
         * `callback` will be executed when the session has been created or
         * failed to create.
         *
         * This function will not block the calling thread.
         *
         * use [ctor`Mks`.Session.new_for_connection_finish] to get the result of
         * this operation.
         * @param connection a #GDBusConnection
         * @param io_priority priority for IO operations
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion of the operation
         */
        static new_for_connection(
            connection: Gio.DBusConnection,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Session> | null,
        ): void;

        // Methods

        /**
         * Gets the DBus connection used for this session.
         * @returns a #GDBusConnection or %NULL if   the connection has not been set, or was disposed.
         */
        get_connection(): Gio.DBusConnection | null;
        /**
         * Gets a #GListModel of devices connected to the session.
         * @returns a #GListModel of #MksDevice
         */
        get_devices(): Gio.ListModel;
        /**
         * Gets the name of the VM.
         */
        get_name(): string;
        /**
         * Gets the unique identifier of the VM.
         */
        get_uuid(): string;
        /**
         * Gets the main screen for the session.
         * @returns a #MksScreen or %NULL
         */
        ref_screen(): Screen | null;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Session;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
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
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Touchable {
        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            max_slots: number;
            maxSlots: number;
        }
    }

    /**
     * A virtualized QEMU touch device.
     */
    class Touchable extends Device {
        static $gtype: GObject.GType<Touchable>;

        // Properties

        /**
         * The maximum number of slots.
         */
        get max_slots(): number;
        /**
         * The maximum number of slots.
         */
        get maxSlots(): number;

        // Constructors

        constructor(properties?: Partial<Touchable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Returns the maximum number of slots.
         */
        get_max_slots(): number;
        /**
         * Send a touch event.
         * @param kind
         * @param num_slot the slot number
         * @param x the x absolute coordinate
         * @param y the y absolute coordinate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        send_event(
            kind: TouchEventKind,
            num_slot: number,
            x: number,
            y: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to [method`Mks`.Touchable.send_event].
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation completed successfully; otherwise %FALSE   and @error is set.
         */
        send_event_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously send a touch event.
         * @param kind the event kind
         * @param num_slot the slot number
         * @param x the x absolute coordinate
         * @param y the y absolute coordinate
         * @param cancellable a #GCancellable
         * @returns %TRUE if the operation was acknowledged by the QEMU instance;   otherwise %FALSE and @error is set.
         */
        send_event_sync(
            kind: TouchEventKind,
            num_slot: number,
            x: number,
            y: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
    }

    type DeviceClass = typeof Device;
    type DisplayClass = typeof Display;
    type KeyboardClass = typeof Keyboard;
    type MouseClass = typeof Mouse;
    /**
     * Screen attributes.
     *
     * The attributes are used to reconfigure the QEMU instance with
     * [method`Mks`.Screen.configure] or [method`Mks`.Screen.configure_sync].
     */
    class ScreenAttributes {
        static $gtype: GObject.GType<ScreenAttributes>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ScreenAttributes;

        // Methods

        /**
         * Makes a deep copy of a #MksScreenAttributes.
         * @returns A newly created #MksScreenAttributes with the same   contents as @self. If @self is %NULL, %NULL is returned.
         */
        copy(): ScreenAttributes;
        /**
         * Returns `true` if the two attributes are equal, `false` otherwise.
         * @param other a #MksScreenAttributes
         */
        equal(other: ScreenAttributes): boolean;
        /**
         * Frees a #MksScreenAttributes.
         *
         * Allocated using [ctor`Mks`.ScreenAttributes.new]
         * or [method`Mks`.ScreenAttributes.copy].
         */
        free(): void;
        /**
         * Set the screen height in pixels.
         * @param height The screen height.
         */
        set_height(height: number): void;
        /**
         * Set the screen height in millimeters.
         * @param height_mm The screen height.
         */
        set_height_mm(height_mm: number): void;
        /**
         * Set the screen width in pixels.
         * @param width The screen width.
         */
        set_width(width: number): void;
        /**
         * Set the screen width in millimeters.
         * @param width_mm The screen width.
         */
        set_width_mm(width_mm: number): void;
        /**
         * Set the screen's horizontal offset in pixels.
         * @param x_offset The screen's horizontal offset.
         */
        set_x_offset(x_offset: number): void;
        /**
         * Set the screen's vertical offset in pixels.
         * @param y_offset The screen's vertical offset.
         */
        set_y_offset(y_offset: number): void;
    }

    type ScreenClass = typeof Screen;
    type SessionClass = typeof Session;
    type TouchableClass = typeof Touchable;
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

export default Mks;

// END
