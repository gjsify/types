/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cally-1.0
 */

import type * as Gjs from './Gjs';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace Cally {

function accessibility_init(): boolean
function get_cally_initialized(): boolean
/**
 * Action function, to be used on #AtkAction implementations as
 * an individual action. Unlike #CallyActionFunc, this function
 * uses the `user_data` argument passed to cally_actor_add_action_full().
 */
interface ActionCallback {
    (cally_actor: Actor): void
}
/**
 * Action function, to be used on #AtkAction implementations as a individual
 * action
 */
interface ActionFunc {
    (cally_actor: Actor): void
}
interface Actor_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}
class Actor {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Actor, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Actor, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Actor, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Actor, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Actor, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Actor, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Actor, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Actor, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Actor, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Actor, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Actor) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Actor, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Actor, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Actor_ConstructProps)
    _init (config?: Actor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Actor
    static $gtype: GObject.Type
}
interface Clone_ConstructProps extends Actor_ConstructProps {
}
class Clone {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Clone */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Clone, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Clone, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Clone, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Clone, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Clone, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Clone, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Clone, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Clone, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Clone, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Clone, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Clone) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Clone, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Clone, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clone_ConstructProps)
    _init (config?: Clone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Clone
    /* Function overloads */
    static new(actor: Clutter.Actor): Clone
    static $gtype: GObject.Type
}
interface Group_ConstructProps extends Actor_ConstructProps {
}
class Group {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Group */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Group, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Group, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Group, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Group, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Group, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Group, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Group, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Group, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Group, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Group, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Group) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Group) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Group, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Group, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Group_ConstructProps)
    _init (config?: Group_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Group
    /* Function overloads */
    static new(actor: Clutter.Actor): Group
    static $gtype: GObject.Type
}
interface Rectangle_ConstructProps extends Actor_ConstructProps {
}
class Rectangle {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Rectangle */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Rectangle, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Rectangle, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Rectangle, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Rectangle, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Rectangle, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Rectangle, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Rectangle, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Rectangle, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Rectangle, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Rectangle, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Rectangle) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Rectangle) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Rectangle, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Rectangle, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Rectangle_ConstructProps)
    _init (config?: Rectangle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Rectangle
    /* Function overloads */
    static new(actor: Clutter.Actor): Rectangle
    static $gtype: GObject.Type
}
interface Root_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}
class Root {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Root, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Root, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Root, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Root, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Root, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Root, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Root, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Root, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Root, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Root, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Root) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Root) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Root_ConstructProps)
    _init (config?: Root_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Root
    static $gtype: GObject.Type
}
interface Stage_ConstructProps extends Group_ConstructProps {
}
class Stage {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Stage */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Group */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Stage, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Stage, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Stage, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Stage, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Stage, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Stage, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Stage, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Stage, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Stage, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Stage, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Stage, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Stage, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk-1.0.Atk.Window */
    /**
     * The signal #AtkWindow::activate is emitted when a window
     * becomes the active window of the application or session.
     */
    connect(sigName: "activate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Stage) => void)): number
    emit(sigName: "activate"): void
    /**
     * The signal #AtkWindow::create is emitted when a new window
     * is created.
     */
    connect(sigName: "create", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "create", callback: (($obj: Stage) => void)): number
    emit(sigName: "create"): void
    /**
     * The signal #AtkWindow::deactivate is emitted when a window is
     * no longer the active window of the application or session.
     */
    connect(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    emit(sigName: "deactivate"): void
    /**
     * The signal #AtkWindow::destroy is emitted when a window is
     * destroyed.
     */
    connect(sigName: "destroy", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Stage) => void)): number
    emit(sigName: "destroy"): void
    /**
     * The signal #AtkWindow::maximize is emitted when a window
     * is maximized.
     */
    connect(sigName: "maximize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: Stage) => void)): number
    emit(sigName: "maximize"): void
    /**
     * The signal #AtkWindow::minimize is emitted when a window
     * is minimized.
     */
    connect(sigName: "minimize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: Stage) => void)): number
    emit(sigName: "minimize"): void
    /**
     * The signal #AtkWindow::move is emitted when a window
     * is moved.
     */
    connect(sigName: "move", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "move", callback: (($obj: Stage) => void)): number
    emit(sigName: "move"): void
    /**
     * The signal #AtkWindow::resize is emitted when a window
     * is resized.
     */
    connect(sigName: "resize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Stage) => void)): number
    emit(sigName: "resize"): void
    /**
     * The signal #AtkWindow::restore is emitted when a window
     * is restored.
     */
    connect(sigName: "restore", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "restore", callback: (($obj: Stage) => void)): number
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stage_ConstructProps)
    _init (config?: Stage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Stage
    /* Function overloads */
    static new(actor: Clutter.Actor): Stage
    static new(actor: Clutter.Actor): Stage
    static $gtype: GObject.Type
}
interface Text_ConstructProps extends Actor_ConstructProps {
}
class Text {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Methods of Atk-1.0.Atk.EditableText */
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard.
     * @param start_pos start position
     * @param end_pos end position
     */
    copy_text(start_pos: number, end_pos: number): void
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard and then delete from the widget.
     * @param start_pos start position
     * @param end_pos end position
     */
    cut_text(start_pos: number, end_pos: number): void
    /**
     * Delete text `start_pos` up to, but not including `end_pos`.
     * @param start_pos start position
     * @param end_pos end position
     */
    delete_text(start_pos: number, end_pos: number): void
    /**
     * Insert text at a given position.
     * @param string the text to insert
     * @param length the length of text to insert, in bytes
     * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
     */
    insert_text(string: string, length: number, position: number): void
    /**
     * Paste text from clipboard to specified `position`.
     * @param position position to paste
     */
    paste_text(position: number): void
    /**
     * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
     * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
     * that can be set. Note that other attributes that do not have corresponding
     * ATK_ATTRIBUTE macros may also be set for certain text widgets.
     * @param attrib_set an #AtkAttributeSet
     * @param start_offset start of range in which to set attributes
     * @param end_offset end of range in which to set attributes
     */
    set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean
    /**
     * Set text contents of `text`.
     * @param string string to set for text contents of `text`
     */
    set_text_contents(string: string): void
    /* Methods of Atk-1.0.Atk.Text */
    /**
     * Adds a selection bounded by the specified offsets.
     * @param start_offset the starting character offset of the selected region
     * @param end_offset the offset of the first character after the selected region.
     */
    add_selection(start_offset: number, end_offset: number): boolean
    /**
     * Get the ranges of text in the specified bounding box.
     * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
     * @param coord_type Specify whether coordinates are relative to the screen or widget window.
     * @param x_clip_type Specify the horizontal clip type.
     * @param y_clip_type Specify the vertical clip type.
     */
    get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[]
    /**
     * Gets the offset of the position of the caret (cursor).
     */
    get_caret_offset(): number
    /**
     * Gets the specified text.
     * @param offset a character offset within `text`
     */
    get_character_at_offset(offset: number): number
    /**
     * Gets the character count.
     */
    get_character_count(): number
    /**
     * If the extent can not be obtained (e.g. missing support), all of x, y, width,
     * height are set to -1.
     * 
     * Get the bounding box containing the glyph representing the character at
     *     a particular text offset.
     * @param offset The offset of the text character for which bounding information is required.
     * @param coords specify whether coordinates are relative to the screen or widget window
     */
    get_character_extents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Creates an #AtkAttributeSet which consists of the default values of
     * attributes for the text. See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     */
    get_default_attributes(): Atk.AttributeSet
    /**
     * Gets the number of selected regions.
     */
    get_n_selections(): number
    /**
     * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
     * are interpreted as being relative to the screen or this widget's window
     * depending on `coords`.
     * @param x screen x-position of character
     * @param y screen y-position of character
     * @param coords specify whether coordinates are relative to the screen or widget window
     */
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number
    /**
     * Get the bounding box for text within the specified range.
     * 
     * If the extents can not be obtained (e.g. or missing support), the rectangle
     * fields are set to -1.
     * @param start_offset The offset of the first text character for which boundary        information is required.
     * @param end_offset The offset of the text character after the last character        for which boundary information is required.
     * @param coord_type Specify whether coordinates are relative to the screen or widget window.
     */
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): /* rect */ Atk.TextRectangle
    /**
     * Creates an #AtkAttributeSet which consists of the attributes explicitly
     * set at the position `offset` in the text. `start_offset` and `end_offset` are
     * set to the start and end of the range around `offset` where the attributes are
     * invariant. Note that `end_offset` is the offset of the first character
     * after the range.  See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
     */
    get_run_attributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the text from the specified selection.
     * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     */
    get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets a portion of the text exposed through an #AtkText according to a given `offset`
     * and a specific `granularity,` along with the start and end offsets defining the
     * boundaries of such a portion of text.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
     * offset is returned.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
     * is from the word start at or before the offset to the word start after
     * the offset.
     * 
     * The returned string will contain the word at the offset if the offset
     * is inside a word and will contain the word before the offset if the
     * offset is not inside a word.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
     * is from the sentence start at or before the offset to the sentence
     * start after the offset.
     * 
     * The returned string will contain the sentence at the offset if the offset
     * is inside a sentence and will contain the sentence before the offset
     * if the offset is not inside a sentence.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
     * is from the line start at or before the offset to the line
     * start after the offset.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
     * is from the start of the paragraph at or before the offset to the start
     * of the following paragraph after the offset.
     * @param offset position
     * @param granularity An #AtkTextGranularity
     */
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the specified text.
     * @param start_offset a starting character offset within `text`
     * @param end_offset an ending character offset within `text,` or -1 for the end of the string.
     */
    get_text(start_offset: number, end_offset: number): string
    /**
     * Gets the specified text.
     * @param offset position
     * @param boundary_type An #AtkTextBoundary
     */
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the specified text.
     * 
     * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
     * offset is returned.
     * 
     * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
     * is from the word start at or before the offset to the word start after
     * the offset.
     * 
     * The returned string will contain the word at the offset if the offset
     * is inside a word and will contain the word before the offset if the
     * offset is not inside a word.
     * 
     * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
     * string is from the sentence start at or before the offset to the sentence
     * start after the offset.
     * 
     * The returned string will contain the sentence at the offset if the offset
     * is inside a sentence and will contain the sentence before the offset
     * if the offset is not inside a sentence.
     * 
     * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
     * string is from the line start at or before the offset to the line
     * start after the offset.
     * @param offset position
     * @param boundary_type An #AtkTextBoundary
     */
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the specified text.
     * @param offset position
     * @param boundary_type An #AtkTextBoundary
     */
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Removes the specified selection.
     * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     */
    remove_selection(selection_num: number): boolean
    /**
     * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
     * @param start_offset start offset in the `text`
     * @param end_offset end offset in the `text,` or -1 for the end of the text.
     * @param type specify where the object should be made visible.
     */
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean
    /**
     * Move the top-left of a substring of `text` to a given position of the screen
     * by scrolling all necessary parents.
     * @param start_offset start offset in the `text`
     * @param end_offset end offset in the `text,` or -1 for the end of the text.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the caret (cursor) position to the specified `offset`.
     * 
     * In the case of rich-text content, this method should either grab focus
     * or move the sequential focus navigation starting point (if the application
     * supports this concept) as if the user had clicked on the new caret position.
     * Typically, this means that the target of this operation is the node containing
     * the new caret position or one of its ancestors. In other words, after this
     * method is called, if the user advances focus, it should move to the first
     * focusable node following the new caret position.
     * 
     * Calling this method should also scroll the application viewport in a way
     * that matches the behavior of the application's typical caret motion or tab
     * navigation as closely as possible. This also means that if the application's
     * caret motion or focus navigation does not trigger a scroll operation, this
     * method should not trigger one either. If the application does not have a caret
     * motion or focus navigation operation, this method should try to scroll the new
     * caret position into view while minimizing unnecessary scroll motion.
     * @param offset the character offset of the new caret position
     */
    set_caret_offset(offset: number): boolean
    /**
     * Changes the start and end offset of the specified selection.
     * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     * @param start_offset the new starting character offset of the selection
     * @param end_offset the new end position of (e.g. offset immediately past) the selection
     */
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Text */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard.
     * @param start_pos start position
     * @param end_pos end position
     */
    vfunc_copy_text(start_pos: number, end_pos: number): void
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard and then delete from the widget.
     * @param start_pos start position
     * @param end_pos end position
     */
    vfunc_cut_text(start_pos: number, end_pos: number): void
    /**
     * Delete text `start_pos` up to, but not including `end_pos`.
     * @param start_pos start position
     * @param end_pos end position
     */
    vfunc_delete_text(start_pos: number, end_pos: number): void
    /**
     * Insert text at a given position.
     * @param string the text to insert
     * @param length the length of text to insert, in bytes
     * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
     */
    vfunc_insert_text(string: string, length: number, position: number): void
    /**
     * Paste text from clipboard to specified `position`.
     * @param position position to paste
     */
    vfunc_paste_text(position: number): void
    /**
     * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
     * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
     * that can be set. Note that other attributes that do not have corresponding
     * ATK_ATTRIBUTE macros may also be set for certain text widgets.
     * @param attrib_set an #AtkAttributeSet
     * @param start_offset start of range in which to set attributes
     * @param end_offset end of range in which to set attributes
     */
    vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean
    /**
     * Set text contents of `text`.
     * @param string string to set for text contents of `text`
     */
    vfunc_set_text_contents(string: string): void
    /**
     * Adds a selection bounded by the specified offsets.
     * @param start_offset the starting character offset of the selected region
     * @param end_offset the offset of the first character after the selected region.
     */
    vfunc_add_selection(start_offset: number, end_offset: number): boolean
    /**
     * Get the ranges of text in the specified bounding box.
     * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
     * @param coord_type Specify whether coordinates are relative to the screen or widget window.
     * @param x_clip_type Specify the horizontal clip type.
     * @param y_clip_type Specify the vertical clip type.
     */
    vfunc_get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[]
    /**
     * Gets the offset of the position of the caret (cursor).
     */
    vfunc_get_caret_offset(): number
    /**
     * Gets the specified text.
     * @param offset a character offset within `text`
     */
    vfunc_get_character_at_offset(offset: number): number
    /**
     * Gets the character count.
     */
    vfunc_get_character_count(): number
    /**
     * If the extent can not be obtained (e.g. missing support), all of x, y, width,
     * height are set to -1.
     * 
     * Get the bounding box containing the glyph representing the character at
     *     a particular text offset.
     * @param offset The offset of the text character for which bounding information is required.
     * @param coords specify whether coordinates are relative to the screen or widget window
     */
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Creates an #AtkAttributeSet which consists of the default values of
     * attributes for the text. See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     */
    vfunc_get_default_attributes(): Atk.AttributeSet
    /**
     * Gets the number of selected regions.
     */
    vfunc_get_n_selections(): number
    /**
     * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
     * are interpreted as being relative to the screen or this widget's window
     * depending on `coords`.
     * @param x screen x-position of character
     * @param y screen y-position of character
     * @param coords specify whether coordinates are relative to the screen or widget window
     */
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number
    /**
     * Get the bounding box for text within the specified range.
     * 
     * If the extents can not be obtained (e.g. or missing support), the rectangle
     * fields are set to -1.
     * @param start_offset The offset of the first text character for which boundary        information is required.
     * @param end_offset The offset of the text character after the last character        for which boundary information is required.
     * @param coord_type Specify whether coordinates are relative to the screen or widget window.
     */
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): /* rect */ Atk.TextRectangle
    /**
     * Creates an #AtkAttributeSet which consists of the attributes explicitly
     * set at the position `offset` in the text. `start_offset` and `end_offset` are
     * set to the start and end of the range around `offset` where the attributes are
     * invariant. Note that `end_offset` is the offset of the first character
     * after the range.  See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
     */
    vfunc_get_run_attributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the text from the specified selection.
     * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     */
    vfunc_get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets a portion of the text exposed through an #AtkText according to a given `offset`
     * and a specific `granularity,` along with the start and end offsets defining the
     * boundaries of such a portion of text.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
     * offset is returned.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
     * is from the word start at or before the offset to the word start after
     * the offset.
     * 
     * The returned string will contain the word at the offset if the offset
     * is inside a word and will contain the word before the offset if the
     * offset is not inside a word.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
     * is from the sentence start at or before the offset to the sentence
     * start after the offset.
     * 
     * The returned string will contain the sentence at the offset if the offset
     * is inside a sentence and will contain the sentence before the offset
     * if the offset is not inside a sentence.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
     * is from the line start at or before the offset to the line
     * start after the offset.
     * 
     * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
     * is from the start of the paragraph at or before the offset to the start
     * of the following paragraph after the offset.
     * @param offset position
     * @param granularity An #AtkTextGranularity
     */
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the specified text.
     * @param start_offset a starting character offset within `text`
     * @param end_offset an ending character offset within `text,` or -1 for the end of the string.
     */
    vfunc_get_text(start_offset: number, end_offset: number): string
    /**
     * Gets the specified text.
     * @param offset position
     * @param boundary_type An #AtkTextBoundary
     */
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the specified text.
     * 
     * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
     * offset is returned.
     * 
     * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
     * is from the word start at or before the offset to the word start after
     * the offset.
     * 
     * The returned string will contain the word at the offset if the offset
     * is inside a word and will contain the word before the offset if the
     * offset is not inside a word.
     * 
     * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
     * string is from the sentence start at or before the offset to the sentence
     * start after the offset.
     * 
     * The returned string will contain the sentence at the offset if the offset
     * is inside a sentence and will contain the sentence before the offset
     * if the offset is not inside a sentence.
     * 
     * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
     * string is from the line start at or before the offset to the line
     * start after the offset.
     * @param offset position
     * @param boundary_type An #AtkTextBoundary
     */
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the specified text.
     * @param offset position
     * @param boundary_type An #AtkTextBoundary
     */
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Removes the specified selection.
     * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     */
    vfunc_remove_selection(selection_num: number): boolean
    /**
     * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
     * @param start_offset start offset in the `text`
     * @param end_offset end offset in the `text,` or -1 for the end of the text.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean
    /**
     * Move the top-left of a substring of `text` to a given position of the screen
     * by scrolling all necessary parents.
     * @param start_offset start offset in the `text`
     * @param end_offset end offset in the `text,` or -1 for the end of the text.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the caret (cursor) position to the specified `offset`.
     * 
     * In the case of rich-text content, this method should either grab focus
     * or move the sequential focus navigation starting point (if the application
     * supports this concept) as if the user had clicked on the new caret position.
     * Typically, this means that the target of this operation is the node containing
     * the new caret position or one of its ancestors. In other words, after this
     * method is called, if the user advances focus, it should move to the first
     * focusable node following the new caret position.
     * 
     * Calling this method should also scroll the application viewport in a way
     * that matches the behavior of the application's typical caret motion or tab
     * navigation as closely as possible. This also means that if the application's
     * caret motion or focus navigation does not trigger a scroll operation, this
     * method should not trigger one either. If the application does not have a caret
     * motion or focus navigation operation, this method should try to scroll the new
     * caret position into view while minimizing unnecessary scroll motion.
     * @param offset the character offset of the new caret position
     */
    vfunc_set_caret_offset(offset: number): boolean
    /**
     * Changes the start and end offset of the specified selection.
     * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     * @param start_offset the new starting character offset of the selection
     * @param end_offset the new end position of (e.g. offset immediately past) the selection
     */
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    vfunc_text_attributes_changed(): void
    vfunc_text_caret_moved(location: number): void
    vfunc_text_changed(position: number, length: number): void
    vfunc_text_selection_changed(): void
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Text, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Text, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Text, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Text, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Text, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Text, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Text, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Text, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Text, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Text, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Text, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Text, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk-1.0.Atk.Text */
    /**
     * The "text-attributes-changed" signal is emitted when the text
     * attributes of the text of an object which implements AtkText
     * changes.
     */
    connect(sigName: "text-attributes-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-attributes-changed"): void
    /**
     * The "text-caret-moved" signal is emitted when the caret
     * position of the text of an object which implements AtkText
     * changes.
     * @param arg1 The new position of the text caret.
     */
    connect(sigName: "text-caret-moved", callback: (($obj: Text, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: (($obj: Text, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    /**
     * The "text-changed" signal is emitted when the text of the
     * object which implements the AtkText interface changes, This
     * signal will have a detail which is either "insert" or
     * "delete" which identifies whether the text change was an
     * insertion or a deletion.
     * @param arg1 The position (character offset) of the insertion or deletion.
     * @param arg2 The length (in characters) of text inserted or deleted.
     */
    connect(sigName: "text-changed", callback: (($obj: Text, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: Text, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    /**
     * The "text-insert" signal is emitted when a new text is
     * inserted. If the signal was not triggered by the user
     * (e.g. typing or pasting text), the "system" detail should be
     * included.
     * @param arg1 The position (character offset) of the insertion.
     * @param arg2 The length (in characters) of text inserted.
     * @param arg3 The new text inserted
     */
    connect(sigName: "text-insert", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    /**
     * The "text-remove" signal is emitted when a new text is
     * removed. If the signal was not triggered by the user
     * (e.g. typing or pasting text), the "system" detail should be
     * included.
     * @param arg1 The position (character offset) of the removal.
     * @param arg2 The length (in characters) of text removed.
     * @param arg3 The old text removed
     */
    connect(sigName: "text-remove", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    /**
     * The "text-selection-changed" signal is emitted when the
     * selected text of an object which implements AtkText changes.
     */
    connect(sigName: "text-selection-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-selection-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-selection-changed"): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Text
    /* Function overloads */
    static new(actor: Clutter.Actor): Text
    /**
     * Frees the memory associated with an array of AtkTextRange. It is assumed
     * that the array was returned by the function atk_text_get_bounded_ranges
     * and is NULL terminated.
     * @param ranges A pointer to an array of #AtkTextRange which is   to be freed.
     */
    static free_ranges(ranges: Atk.TextRange[]): void
    static $gtype: GObject.Type
}
interface Texture_ConstructProps extends Actor_ConstructProps {
}
class Texture {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Atk.Role
    /**
     * Table caption.
     */
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    /**
     * Accessible table column description.
     */
    accessible_table_column_description: string
    /**
     * Accessible table column header.
     */
    accessible_table_column_header: Atk.Object
    /**
     * Accessible table row description.
     */
    accessible_table_row_description: string
    /**
     * Accessible table row header.
     */
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessible_value: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    accessible_parent: Atk.Object
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
     */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    get_accessible_id(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    get_mdi_zorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    get_n_accessible_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
     */
    notify_state_change(state: Atk.State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peek_parent(): Atk.Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     * @param i a gint representing the position of the child, starting from 0
     */
    ref_accessible_child(i: number): Atk.Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    remove_property_change_handler(handler_id: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    set_accessible_id(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    set_role(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_description(i: number): string | null
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    get_name(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Texture */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Cally-1.0.Cally.Actor */
    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_do_action(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the keybinding which can be used to activate this action, if one
     * exists. The string returned should contain localized, human-readable,
     * key sequences as they would appear when displayed on screen. It must
     * be in the format "mnemonic;sequence;shortcut".
     * 
     * - The mnemonic key activates the object if it is presently enabled onscreen.
     *   This typically corresponds to the underlined letter within the widget.
     *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
     *   a button.
     * - The sequence is the full list of keys which invoke the action even if the
     *   relevant element is not currently shown on screen. For instance, for a menu
     *   item the sequence is the keybindings used to open the parent menus before
     *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
     *   traditional "New..." menu item.
     * - The shortcut, if it exists, will invoke the same action without showing
     *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
     *   traditional "New..." menu item.
     * 
     * Example: For a traditional "New..." menu item, the expected return value
     * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
     * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
     * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_keybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_localized_name(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    vfunc_get_n_actions(): number
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     */
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    vfunc_get_alpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    vfunc_get_mdi_zorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    vfunc_grab_focus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handler_id the handler id of the focus handler to be removed from `component`
     */
    vfunc_remove_focus_handler(handler_id: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    vfunc_get_attributes(): Atk.AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    vfunc_get_description(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    vfunc_get_index_in_parent(): number
    /**
     * Gets the layer of the accessible.
     */
    vfunc_get_layer(): Atk.Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    /**
     * Gets the accessible name of the accessible.
     */
    vfunc_get_name(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    vfunc_get_object_locale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    vfunc_get_parent(): Atk.Object
    /**
     * Gets the role of the accessible.
     */
    vfunc_get_role(): Atk.Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    vfunc_ref_relation_set(): Atk.RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    vfunc_ref_state_set(): Atk.StateSet
    /**
     * Removes a property change handler.
     * @param handler_id a guint which identifies the handler to be removed.
     */
    vfunc_remove_property_change_handler(handler_id: number): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    vfunc_set_name(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    vfunc_set_parent(parent: Atk.Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
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
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     * @param arg1 the newly focused object.
     */
    connect(sigName: "active-descendant-changed", callback: (($obj: Texture, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Texture, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     * @param arg1 The index of the added or removed child. The value can be -1. This is used if the value is not known by the implementor when the child is added/removed or irrelevant.
     * @param arg2 A gpointer to the child AtkObject which was added or removed. If the child was removed, it is possible that it is not available for the implementor. In that case this pointer can be NULL.
     */
    connect(sigName: "children-changed", callback: (($obj: Texture, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Texture, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     * @param arg1 a boolean value which indicates whether the object gained or lost focus.
     */
    connect(sigName: "focus-event", callback: (($obj: Texture, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Texture, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     * @param arg1 an #AtkPropertyValues containing the new value of the property which changed.
     */
    connect(sigName: "property-change", callback: (($obj: Texture, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Texture, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     * @param arg1 The name of the state which has changed
     * @param arg2 A boolean which indicates whether the state has been set or unset.
     */
    connect(sigName: "state-change", callback: (($obj: Texture, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Texture, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Texture) => void)): number
    emit(sigName: "visible-data-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     * @param arg1 The AtkRectangle giving the new position and size.
     */
    connect(sigName: "bounds-changed", callback: (($obj: Texture, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Texture, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Texture_ConstructProps)
    _init (config?: Texture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Texture
    /* Function overloads */
    static new(actor: Clutter.Actor): Texture
    static $gtype: GObject.Type
}
interface Util_ConstructProps extends Atk.Util_ConstructProps {
}
class Util {
    /* Fields of Atk-1.0.Atk.Util */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Util, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Util, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActorClass {
    /* Fields of Cally-1.0.Cally.ActorClass */
    notify_clutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    focus_clutter: (actor: Clutter.Actor, data: object) => boolean
    add_actor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    remove_actor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    static name: string
}
class ActorPrivate {
    static name: string
}
abstract class CloneClass {
    static name: string
}
class ClonePrivate {
    static name: string
}
abstract class GroupClass {
    static name: string
}
class GroupPrivate {
    static name: string
}
abstract class RectangleClass {
    static name: string
}
class RectanglePrivate {
    static name: string
}
abstract class RootClass {
    static name: string
}
class RootPrivate {
    static name: string
}
abstract class StageClass {
    static name: string
}
class StagePrivate {
    static name: string
}
abstract class TextClass {
    static name: string
}
class TextPrivate {
    static name: string
}
abstract class TextureClass {
    static name: string
}
class TexturePrivate {
    static name: string
}
abstract class UtilClass {
    static name: string
}
class UtilPrivate {
    static name: string
}
}
export default Cally;