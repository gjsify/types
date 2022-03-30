/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoOT-1.0
 */

import type * as Gjs from './Gjs';
import type freetype2 from './freetype2-2.0';
import type PangoFc from './PangoFc-1.0';
import type fontconfig from './fontconfig-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PangoOT {

/**
 * The PangoOTTableType enumeration values are used to
 * identify the various OpenType tables in the
 * pango_ot_info_… functions.
 */
enum TableType {
    /**
     * The GSUB table.
     */
    GSUB,
    /**
     * The GPOS table.
     */
    GPOS,
}
/**
 * This is used as the property bit in pango_ot_ruleset_add_feature() when a
 * feature should be applied to all glyphs.
 */
const ALL_GLYPHS: number
/**
 * This is used as the language index in pango_ot_info_find_feature() when
 * the default language system of the script is desired.
 * 
 * It is also returned by pango_ot_info_find_language() if the requested language
 * is not found, or the requested language tag was PANGO_OT_TAG_DEFAULT_LANGUAGE.
 * The end result is that one can always call pango_ot_tag_from_language()
 * followed by pango_ot_info_find_language() and pass the result to
 * pango_ot_info_find_feature() without having to worry about falling back to
 * default language system explicitly.
 */
const DEFAULT_LANGUAGE: number
/**
 * This is used as a feature index that represent no feature, that is, should be
 * skipped.  It may be returned as feature index by pango_ot_info_find_feature()
 * if the feature is not found, and pango_ot_ruleset_add_feature() function
 * automatically skips this value, so no special handling is required by the user.
 */
const NO_FEATURE: number
/**
 * This is used as a script index that represent no script, that is, when the
 * requested script was not found, and a default ('DFLT') script was not found
 * either.  It may be returned as script index by pango_ot_info_find_script()
 * if the script or a default script are not found, all other functions
 * taking a script index essentially return if the input script index is
 * this value, so no special handling is required by the user.
 */
const NO_SCRIPT: number
function tag_from_language(language?: Pango.Language | null): Tag
function tag_from_script(script: Pango.Script): Tag
function tag_to_language(language_tag: Tag): Pango.Language
function tag_to_script(script_tag: Tag): Pango.Script
interface Info_ConstructProps extends GObject.Object_ConstructProps {
}
class Info {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoOT-1.0.PangoOT.Info */
    /**
     * Finds the index of a feature.
     * 
     * If the feature is not found, sets `feature_index` to PANGO_OT_NO_FEATURE,
     * which is safe to pass to [method`PangoOT`.Ruleset.add_feature] and similar
     * functions.
     * 
     * In the future, this may set `feature_index` to an special value that if
     * used in [method`PangoOT`.Ruleset.add_feature] will ask Pango to synthesize
     * the requested feature based on Unicode properties and data. However, this
     * function will still return %FALSE in those cases. So, users may want to
     * ignore the return value of this function in certain cases.
     * @param table_type the table type to obtain information about
     * @param feature_tag the tag of the feature to find
     * @param script_index the index of the script
     * @param language_index the index of the language whose features are searched,   or %PANGO_OT_DEFAULT_LANGUAGE to use the default language of the script
     */
    find_feature(table_type: TableType, feature_tag: Tag, script_index: number, language_index: number): [ /* returnType */ boolean, /* feature_index */ number | null ]
    /**
     * Finds the index of a language and its required feature index.
     * 
     * If the language is not found, sets `language_index` to %PANGO_OT_DEFAULT_LANGUAGE
     * and the required feature of the default language system is returned in
     * required_feature_index. For best compatibility with some fonts, also
     * searches the language system tag 'dflt' before falling back to the default
     * language system, but that is transparent to the user. The user can simply
     * ignore the return value of this function to automatically fall back to the
     * default language system.
     * @param table_type the table type to obtain information about
     * @param script_index the index of the script whose languages are searched
     * @param language_tag the tag of the language to find
     */
    find_language(table_type: TableType, script_index: number, language_tag: Tag): [ /* returnType */ boolean, /* language_index */ number | null, /* required_feature_index */ number | null ]
    /**
     * Finds the index of a script.
     * 
     * If not found, tries to find the 'DFLT' and then 'dflt' scripts and
     * return the index of that in `script_index`. If none of those is found
     * either, %PANGO_OT_NO_SCRIPT is placed in `script_index`.
     * 
     * All other functions taking an input script_index parameter know
     * how to handle %PANGO_OT_NO_SCRIPT, so one can ignore the return
     * value of this function completely and proceed, to enjoy the automatic
     * fallback to the 'DFLT'/'dflt' script.
     * @param table_type the table type to obtain information about
     * @param script_tag the tag of the script to find
     */
    find_script(table_type: TableType, script_tag: Tag): [ /* returnType */ boolean, /* script_index */ number | null ]
    /**
     * Obtains the list of features for the given language of the given script.
     * @param table_type the table type to obtain information about
     * @param tag unused parameter
     * @param script_index the index of the script to obtain information about
     * @param language_index the index of the language to list features for, or   %PANGO_OT_DEFAULT_LANGUAGE, to list features for the default   language of the script
     */
    list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag
    /**
     * Obtains the list of available languages for a given script.
     * @param table_type the table type to obtain information about
     * @param script_index the index of the script to list languages for
     * @param language_tag unused parameter
     */
    list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag
    /**
     * Obtains the list of available scripts.
     * @param table_type the table type to obtain information about
     */
    list_scripts(table_type: TableType): Tag
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
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Info_ConstructProps)
    _init (config?: Info_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Returns the `PangoOTInfo` structure for the given FreeType font face.
     * @param face a `FT_Face`
     */
    static get(face: freetype2.Face): Info
    static $gtype: GObject.Type
}
interface Ruleset_ConstructProps extends GObject.Object_ConstructProps {
}
class Ruleset {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoOT-1.0.PangoOT.Ruleset */
    /**
     * Adds a feature to the ruleset.
     * @param table_type the table type to add a feature to
     * @param feature_index the index of the feature to add
     * @param property_bit the property bit to use for this feature. Used to   identify the glyphs that this feature should be applied to, or   %PANGO_OT_ALL_GLYPHS if it should be applied to all glyphs.
     */
    add_feature(table_type: TableType, feature_index: number, property_bit: number): void
    /**
     * Gets the number of GSUB and GPOS features in the ruleset.
     */
    get_feature_count(): [ /* returnType */ number, /* n_gsub_features */ number | null, /* n_gpos_features */ number | null ]
    /**
     * This is a convenience function that first tries to find the feature
     * using [method`PangoOT`.Info.find_feature] and the ruleset script and
     * language passed to [ctor`PangoOT`.Ruleset.new_for] and if the feature
     * is found, adds it to the ruleset.
     * 
     * If `ruleset` was not created using [ctor`PangoOT`.Ruleset.new_for],
     * this function does nothing.
     * @param table_type the table type to add a feature to
     * @param feature_tag the tag of the feature to add
     * @param property_bit the property bit to use for this feature. Used to   identify the glyphs that this feature should be applied to, or   %PANGO_OT_ALL_GLYPHS if it should be applied to all glyphs.
     */
    maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean
    /**
     * This is a convenience function that for each feature in the feature map
     * array `features` converts the feature name to a `PangoOTTag` feature tag
     * using PANGO_OT_TAG_MAKE() and calls [method`PangoOT`.Ruleset.maybe_add_feature]
     * on it.
     * @param table_type the table type to add features to
     * @param features array of feature name and property bits to add
     * @param n_features number of feature records in `features` array
     */
    maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number
    /**
     * Performs the OpenType GPOS positioning on `buffer` using
     * the features in `ruleset`.
     * @param buffer a `PangoOTBuffer`
     */
    position(buffer: Buffer): void
    /**
     * Performs the OpenType GSUB substitution on `buffer` using
     * the features in `ruleset`.
     * @param buffer a `PangoOTBuffer`
     */
    substitute(buffer: Buffer): void
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
    connect(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ruleset_ConstructProps)
    _init (config?: Ruleset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(info: Info): Ruleset
    static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset
    static new_from_description(info: Info, desc: RulesetDescription): Ruleset
    /**
     * Returns a ruleset for the given OpenType info and ruleset
     * description.
     * 
     * Rulesets are created on demand using
     * [ctor`PangoOT`.Ruleset.new_from_description].
     * The returned ruleset should not be modified or destroyed.
     * 
     * The static feature map members of `desc` should be alive as
     * long as `info` is.
     * @param info a `PangoOTInfo`
     * @param desc a `PangoOTRulesetDescription`
     */
    static get_for_description(info: Info, desc: RulesetDescription): Ruleset
    static $gtype: GObject.Type
}
class Buffer {
    /* Methods of PangoOT-1.0.PangoOT.Buffer */
    /**
     * Appends a glyph to a `PangoOTBuffer`, with `properties` identifying which
     * features should be applied on this glyph.
     * 
     * See [method`PangoOT`.Ruleset.add_feature].
     * @param glyph the glyph index to add, like a `PangoGlyph`
     * @param properties the glyph properties
     * @param cluster the cluster that this glyph belongs to
     */
    add_glyph(glyph: number, properties: number, cluster: number): void
    /**
     * Empties a `PangoOTBuffer`, make it ready to add glyphs to.
     */
    clear(): void
    /**
     * Destroys a `PangoOTBuffer` and free all associated memory.
     */
    destroy(): void
    /**
     * Gets the glyph array contained in a `PangoOTBuffer`.
     * 
     * The glyphs are owned by the buffer and should not be freed,
     * and are only valid as long as buffer is not modified.
     */
    get_glyphs(): /* glyphs */ Glyph[] | null
    /**
     * Exports the glyphs in a `PangoOTBuffer` into a `PangoGlyphString`.
     * 
     * This is typically used after the OpenType layout processing
     * is over, to convert the resulting glyphs into a generic Pango
     * glyph string.
     * @param glyphs a `PangoGlyphString`
     */
    output(glyphs: Pango.GlyphString): void
    /**
     * Sets whether glyphs will be rendered right-to-left.
     * 
     * This setting is needed for proper horizontal positioning
     * of right-to-left scripts.
     * @param rtl %TRUE for right-to-left text
     */
    set_rtl(rtl: boolean): void
    /**
     * Sets whether characters with a mark class should be forced to zero width.
     * 
     * This setting is needed for proper positioning of Arabic accents,
     * but will produce incorrect results with standard OpenType Indic
     * fonts.
     * @param zero_width_marks %TRUE if characters with a mark class should   be forced to zero width
     */
    set_zero_width_marks(zero_width_marks: boolean): void
    static name: string
    static new(font: PangoFc.Font): Buffer
    constructor(font: PangoFc.Font)
    /* Static methods and pseudo-constructors */
    static new(font: PangoFc.Font): Buffer
}
class FeatureMap {
    /* Fields of PangoOT-1.0.PangoOT.FeatureMap */
    /**
     * feature tag in represented as four-letter ASCII string.
     */
    feature_name: number[]
    /**
     * the property bit to use for this feature.  See
     * pango_ot_ruleset_add_feature() for details.
     */
    property_bit: number
    static name: string
}
class Glyph {
    /* Fields of PangoOT-1.0.PangoOT.Glyph */
    /**
     * the glyph itself.
     */
    glyph: number
    /**
     * the properties value, identifying which features should be
     * applied on this glyph.  See pango_ot_ruleset_add_feature().
     */
    properties: number
    /**
     * the cluster that this glyph belongs to.
     */
    cluster: number
    /**
     * a component value, set by the OpenType layout engine.
     */
    component: number
    /**
     * a ligature index value, set by the OpenType layout engine.
     */
    ligID: number
    /**
     * for Pango internal use
     */
    internal: number
    static name: string
}
class RulesetDescription {
    /* Fields of PangoOT-1.0.PangoOT.RulesetDescription */
    /**
     * a `PangoScript`
     */
    script: Pango.Script
    /**
     * a `PangoLanguage`
     */
    language: Pango.Language
    /**
     * static map of GSUB features
     */
    static_gsub_features: FeatureMap
    /**
     * length of `static_gsub_features,` or 0.
     */
    n_static_gsub_features: number
    /**
     * static map of GPOS features
     */
    static_gpos_features: FeatureMap
    /**
     * length of `static_gpos_features,` or 0.
     */
    n_static_gpos_features: number
    /**
     * map of extra features to add to both
     *   GSUB and GPOS. Unlike the static maps, this pointer need not
     *   live beyond the life of function calls taking this struct.
     */
    other_features: FeatureMap
    /**
     * length of `other_features,` or 0.
     */
    n_other_features: number
    /* Methods of PangoOT-1.0.PangoOT.RulesetDescription */
    /**
     * Creates a copy of `desc,` which should be freed with
     * [method`PangoOT`.RulesetDescription.free].
     * 
     * Primarily used internally by [func`PangoOT`.Ruleset.get_for_description]
     * to cache rulesets for ruleset descriptions.
     */
    copy(): RulesetDescription
    /**
     * Compares two ruleset descriptions for equality.
     * 
     * Two ruleset descriptions are considered equal if the rulesets
     * they describe are provably identical. This means that their
     * script, language, and all feature sets should be equal.
     * 
     * For static feature sets, the array addresses are compared directly,
     * while for other features, the list of features is compared one by
     * one.(Two ruleset descriptions may result in identical rulesets
     * being created, but still compare %FALSE.)
     * @param desc2 a ruleset description
     */
    equal(desc2: RulesetDescription): boolean
    /**
     * Frees a ruleset description allocated by
     * pango_ot_ruleset_description_copy().
     */
    free(): void
    /**
     * Computes a hash of a `PangoOTRulesetDescription` structure suitable
     * to be used, for example, as an argument to g_hash_table_new().
     */
    hash(): number
    static name: string
}
    type Tag = number
}
export default PangoOT;