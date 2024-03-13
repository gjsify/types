/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gucharmap-2.90-ambient.d.ts';

/**
 * Gucharmap-2.90
 */

import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gucharmap {
    enum CharmapPageType {
        CHARTABLE,
        DETAILS,
    }
    enum UnicodeVersion {
        UNASSIGNED,
        '1_1',
        '2_0',
        '2_1',
        '3_0',
        '3_1',
        '3_2',
        '4_0',
        '4_1',
        '5_0',
        '5_1',
        '5_2',
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '7_0',
        '8_0',
        LATEST,
    }
    function get_nameslist_colons(uc: number): string[];
    function get_nameslist_equals(uc: number): string[];
    function get_nameslist_exes(uc: number): number;
    function get_nameslist_pounds(uc: number): string[];
    function get_nameslist_stars(uc: number): string[];
    function get_unicode_category_name(uc: number): string;
    function get_unicode_data_name(uc: number): string;
    function get_unicode_data_name_count(): number;
    function get_unicode_kCantonese(uc: number): string;
    function get_unicode_kDefinition(uc: number): string;
    function get_unicode_kJapaneseKun(uc: number): string;
    function get_unicode_kJapaneseOn(uc: number): string;
    function get_unicode_kKorean(uc: number): string;
    function get_unicode_kMandarin(uc: number): string;
    function get_unicode_kTang(uc: number): string;
    function get_unicode_name(uc: number): string;
    function get_unicode_version(uc: number): UnicodeVersion;
    function get_unihan_count(): number;
    /**
     * Determines if a given character is assigned in the Unicode
     * standard.
     * @param uc a Unicode character
     * @returns %TRUE if the character has an assigned value
     */
    function unichar_isdefined(uc: number): boolean;
    /**
     * Determines whether a character is printable and not a space
     * (returns %FALSE for control characters, format characters, and
     * spaces). g_unichar_isprint() is similar, but returns %TRUE for
     * spaces. Given some UTF-8 text, obtain a character value with
     * g_utf8_get_char().
     * @param uc a Unicode character
     * @returns %TRUE if @c is printable unless it's a space
     */
    function unichar_isgraph(uc: number): boolean;
    /**
     * Converts a single character to UTF-8 suitable for rendering. Check the
     * source to see what this means. ;-)
     * @param uc a unicode character
     * @param outbuf output buffer, must have at least 10 bytes of space.          If %NULL, the length will be computed and returned          and nothing will be written to @outbuf.
     * @returns number of bytes written
     */
    function unichar_to_printable_utf8(uc: number, outbuf: string): number;
    /**
     * Classifies a Unicode character by type.
     * @param uc a Unicode character
     * @returns the type of the character.
     */
    function unichar_type(uc: number): GLib.UnicodeType;
    function unichar_validate(uc: number): boolean;
    /**
     * Determines a character that's commonly used in the current
     * locale's script.
     * @returns a unicode character
     */
    function unicode_get_locale_character(): number;
    function unicode_get_script_for_char(wc: number): string;
    /**
     * Returns an array of untranslated script names.
     *
     * The strings in the array are owned by gucharmap and should not be
     * modified or free; the array itself however is allocated and should
     * be freed with g_free().
     * @returns a newly allocated %NULL-terminated array of strings
     */
    function unicode_list_scripts(): string[];
    function unicode_version_to_string(version: UnicodeVersion): string;
    module BlockChaptersModel {
        // Constructor properties interface

        interface ConstructorProps
            extends ChaptersModel.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.TreeDragDest.ConstructorProps,
                Gtk.TreeDragSource.ConstructorProps,
                Gtk.TreeModel.ConstructorProps,
                Gtk.TreeSortable.ConstructorProps {}
    }

    class BlockChaptersModel
        extends ChaptersModel
        implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable
    {
        // Constructors of Gucharmap.BlockChaptersModel

        constructor(properties?: Partial<BlockChaptersModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BlockChaptersModel;

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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        set(...args: never[]): any;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module BlockCodepointList {
        // Constructor properties interface

        interface ConstructorProps extends CodepointList.ConstructorProps {
            first_codepoint: number;
            firstCodepoint: number;
            last_codepoint: number;
            lastCodepoint: number;
        }
    }

    class BlockCodepointList extends CodepointList {
        // Own properties of Gucharmap.BlockCodepointList

        get first_codepoint(): number;
        get firstCodepoint(): number;
        get last_codepoint(): number;
        get lastCodepoint(): number;

        // Constructors of Gucharmap.BlockCodepointList

        constructor(properties?: Partial<BlockCodepointList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](start: number, end: number): BlockCodepointList;
    }

    module ChaptersModel {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.ListStore.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.TreeDragDest.ConstructorProps,
                Gtk.TreeDragSource.ConstructorProps,
                Gtk.TreeModel.ConstructorProps,
                Gtk.TreeSortable.ConstructorProps {}
    }

    class ChaptersModel
        extends Gtk.ListStore
        implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable
    {
        // Constructors of Gucharmap.ChaptersModel

        constructor(properties?: Partial<ChaptersModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gucharmap.ChaptersModel

        vfunc_character_to_iter(wc: number): [boolean, Gtk.TreeIter];
        vfunc_get_book_codepoint_list(): CodepointList;
        /**
         * Creates a new #GucharmapCodepointList representing the characters in the
         * current chapter.
         * @param iter a #GtkTreeIter
         */
        vfunc_get_codepoint_list(iter: Gtk.TreeIter): CodepointList;

        // Own methods of Gucharmap.ChaptersModel

        character_to_iter(wc: number): [boolean, Gtk.TreeIter];
        get_book_codepoint_list(): CodepointList;
        /**
         * Creates a new #GucharmapCodepointList representing the characters in the
         * current chapter.
         * @param iter a #GtkTreeIter
         * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
         */
        get_codepoint_list(iter: Gtk.TreeIter): CodepointList;
        get_title(): string;
        id_to_iter(id: string): [boolean, Gtk.TreeIter];

        // Inherited methods
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a #GtkBuilder
         * @param child child to add
         * @param type kind of child or %NULL
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * #GtkBuilder calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder #GtkBuilder used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a #GtkBuilder
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @returns %TRUE if a object has a custom implementation, %FALSE          if it doesn't.
         */
        custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a #GtkBuilder
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * #GtkBuilder sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with gtk_buildable_set_name()
         */
        get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * gtk_builder_add_from_file() or gtk_builder_add_from_string()
         * is called on a builder.
         * @param builder a #GtkBuilder
         */
        parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a #GtkBuilder
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a #GtkBuilder
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * #GtkBuilder calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder #GtkBuilder used to construct this object
         * @param name name of child to construct
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a #GtkBuilder
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
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder #GtkBuilder used to construct this object
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
         * This is called for each unknown element under `<child>`.
         * @param builder a #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a #GtkBuilder
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * #GtkBuilder sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         */
        vfunc_get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * gtk_builder_add_from_file() or gtk_builder_add_from_string()
         * is called on a builder.
         * @param builder a #GtkBuilder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a #GtkBuilder
         * @param name name of property
         * @param value value of property
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        vfunc_set_name(name: string): void;
        /**
         * Asks the #GtkTreeDragDest to insert a row before the path `dest,`
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, %FALSE
         * will be returned. Also, %FALSE may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @returns whether a new row was created before position @dest
         */
        drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Determines whether a drop is possible before the given `dest_path,`
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be %FALSE if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @returns %TRUE if a drop is possible before @dest_path
         */
        row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the #GtkTreeDragDest to insert a row before the path `dest,`
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, %FALSE
         * will be returned. Also, %FALSE may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         */
        vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Determines whether a drop is possible before the given `dest_path,`
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be %FALSE if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         */
        vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the #GtkTreeDragSource to delete the row at `path,` because
         * it was moved somewhere else via drag-and-drop. Returns %FALSE
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @returns %TRUE if the row was successfully deleted
         */
        drag_data_delete(path: Gtk.TreePath): boolean;
        /**
         * Asks the #GtkTreeDragSource to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data->`target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a #GtkSelectionData to fill with data                  from the dragged row
         * @returns %TRUE if data of the required type was provided
         */
        drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the #GtkTreeDragSource whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @returns %TRUE if the row can be dragged
         */
        row_draggable(path: Gtk.TreePath): boolean;
        /**
         * Asks the #GtkTreeDragSource to delete the row at `path,` because
         * it was moved somewhere else via drag-and-drop. Returns %FALSE
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         */
        vfunc_drag_data_delete(path: Gtk.TreePath): boolean;
        /**
         * Asks the #GtkTreeDragSource to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data->`target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a #GtkSelectionData to fill with data                  from the dragged row
         */
        vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the #GtkTreeDragSource whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         */
        vfunc_row_draggable(path: Gtk.TreePath): boolean;
        /**
         * Creates a new #GtkTreeModel, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A #GtkTreePath or %NULL.
         * @returns A new #GtkTreeModel.
         */
        filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;
        /**
         * Calls func on each node in model in a depth-first fashion.
         *
         * If `func` returns %TRUE, then the tree ceases to be walked,
         * and gtk_tree_model_foreach() returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;
        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;
        /**
         * Returns a set of flags supported by this interface.
         *
         * The flags are a bitwise combination of #GtkTreeModelFlags.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;
        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
         * @param path the #GtkTreePath-struct
         * @returns %TRUE, if @iter was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns %TRUE. Returns
         * %FALSE if the tree is empty.
         * @returns %TRUE, if @iter was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to a valid iterator pointing to `path_string,` if it
         * exists. Otherwise, `iter` is left invalid and %FALSE is returned.
         * @param path_string a string representation of a #GtkTreePath-struct
         * @returns %TRUE, if @iter was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];
        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;
        /**
         * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
         *
         * This path should be freed with gtk_tree_path_free().
         * @param iter the #GtkTreeIter-struct
         * @returns a newly-created #GtkTreePath-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;
        /**
         * Generates a string representation of the iter.
         *
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a #GtkTreeIter-struct
         * @returns a newly-allocated string.     Must be freed with g_free().
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;
        /**
         * Initializes and sets `value` to that at `column`.
         *
         * When done with `value,` g_value_unset() needs to be called
         * to free any allocated memory.
         * @param iter the #GtkTreeIter-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;
        /**
         * Sets `iter` to point to the first child of `parent`.
         *
         * If `parent` has no children, %FALSE is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         *
         * If `parent` is %NULL returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the #GtkTreeIter-struct, or %NULL
         * @returns %TRUE, if @iter has been set to the first child
         */
        iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
        /**
         * Returns %TRUE if `iter` has children, %FALSE otherwise.
         * @param iter the #GtkTreeIter-struct to test for children
         * @returns %TRUE if @iter has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;
        /**
         * Returns the number of children that `iter` has.
         *
         * As a special case, if `iter` is %NULL, then the number
         * of toplevel nodes is returned.
         * @param iter the #GtkTreeIter-struct, or %NULL
         * @returns the number of children of @iter
         */
        iter_n_children(iter?: Gtk.TreeIter | null): number;
        /**
         * Sets `iter` to point to the node following it at the current level.
         *
         * If there is no next `iter,` %FALSE is returned and `iter` is set
         * to be invalid.
         * @param iter the #GtkTreeIter-struct
         * @returns %TRUE if @iter has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;
        /**
         * Sets `iter` to be the child of `parent,` using the given index.
         *
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is %NULL, then the `n-th` root node
         * is set.
         * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
         * @param n the index of the desired child
         * @returns %TRUE, if @parent has an @n-th child
         */
        iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to be the parent of `child`.
         *
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and %FALSE is returned.
         * `child` will remain a valid node after this function has been
         * called.
         *
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the #GtkTreeIter-struct
         * @returns %TRUE, if @iter is set to the parent of @child
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to point to the previous node at the current level.
         *
         * If there is no previous `iter,` %FALSE is returned and `iter` is
         * set to be invalid.
         * @param iter the #GtkTreeIter-struct
         * @returns %TRUE if @iter has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;
        /**
         * Lets the tree ref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         *
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         *
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the #GtkTreeIter-struct
         */
        ref_node(iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
         *
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         *
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;
        /**
         * Emits the #GtkTreeModel::row-has-child-toggled signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the inserted row
         * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::rows-reordered signal on `tree_model`.
         *
         * This should be called by models when their rows have been
         * reordered.
         * @param path a #GtkTreePath-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid #GtkTreeIter-struct pointing to the node     whose children have been reordered, or %NULL if the depth     of @path is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. @new_order`[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;
        /**
         * Lets the tree unref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see gtk_tree_model_ref_node().
         *
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the #GtkTreeIter-struct
         */
        unref_node(iter: Gtk.TreeIter): void;
        /**
         * Returns the type of the column.
         * @param index_ the column index
         */
        vfunc_get_column_type(index_: number): GObject.GType;
        /**
         * Returns a set of flags supported by this interface.
         *
         * The flags are a bitwise combination of #GtkTreeModelFlags.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;
        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
         * @param path the #GtkTreePath-struct
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
        /**
         * Returns the number of columns supported by `tree_model`.
         */
        vfunc_get_n_columns(): number;
        /**
         * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
         *
         * This path should be freed with gtk_tree_path_free().
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;
        /**
         * Initializes and sets `value` to that at `column`.
         *
         * When done with `value,` g_value_unset() needs to be called
         * to free any allocated memory.
         * @param iter the #GtkTreeIter-struct
         * @param column the column to lookup the value at
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;
        /**
         * Sets `iter` to point to the first child of `parent`.
         *
         * If `parent` has no children, %FALSE is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         *
         * If `parent` is %NULL returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the #GtkTreeIter-struct, or %NULL
         */
        vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
        /**
         * Returns %TRUE if `iter` has children, %FALSE otherwise.
         * @param iter the #GtkTreeIter-struct to test for children
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;
        /**
         * Returns the number of children that `iter` has.
         *
         * As a special case, if `iter` is %NULL, then the number
         * of toplevel nodes is returned.
         * @param iter the #GtkTreeIter-struct, or %NULL
         */
        vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;
        /**
         * Sets `iter` to point to the node following it at the current level.
         *
         * If there is no next `iter,` %FALSE is returned and `iter` is set
         * to be invalid.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;
        /**
         * Sets `iter` to be the child of `parent,` using the given index.
         *
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is %NULL, then the `n-th` root node
         * is set.
         * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
         * @param n the index of the desired child
         */
        vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to be the parent of `child`.
         *
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and %FALSE is returned.
         * `child` will remain a valid node after this function has been
         * called.
         *
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the #GtkTreeIter-struct
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to point to the previous node at the current level.
         *
         * If there is no previous `iter,` %FALSE is returned and `iter` is
         * set to be invalid.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;
        /**
         * Lets the tree ref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         *
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         *
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
         *
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         *
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;
        /**
         * Emits the #GtkTreeModel::row-has-child-toggled signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the inserted row
         * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Lets the tree unref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see gtk_tree_model_ref_node().
         *
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;
        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns %TRUE unless the `sort_column_id` is
         * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or
         * %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
         * @returns %TRUE if the sort column is not one of the special sort   column ids.
         */
        get_sort_column_id(): [boolean, number, Gtk.SortType];
        /**
         * Returns %TRUE if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @returns %TRUE, if the model has a default sort function
         */
        has_default_sort_func(): boolean;
        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using
         * this function.
         *
         * If `sort_func` is %NULL, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, the model will be unsorted.
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of @user_data, or %NULL
         */
        set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * #GtkTreeSortable::sort-column-changed signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         *
         * - %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: the default sort function
         *   will be used, if it is set
         *
         * - %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         */
        set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;
        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id,` then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of @user_data, or %NULL
         */
        set_sort_func(
            sort_column_id: number,
            sort_func: Gtk.TreeIterCompareFunc,
            destroy?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Emits a #GtkTreeSortable::sort-column-changed signal on `sortable`.
         */
        sort_column_changed(): void;
        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns %TRUE unless the `sort_column_id` is
         * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or
         * %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
         */
        vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];
        /**
         * Returns %TRUE if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         */
        vfunc_has_default_sort_func(): boolean;
        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using
         * this function.
         *
         * If `sort_func` is %NULL, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, the model will be unsorted.
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of @user_data, or %NULL
         */
        vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * #GtkTreeSortable::sort-column-changed signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         *
         * - %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: the default sort function
         *   will be used, if it is set
         *
         * - %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         */
        vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;
        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id,` then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of @user_data, or %NULL
         */
        vfunc_set_sort_func(
            sort_column_id: number,
            sort_func: Gtk.TreeIterCompareFunc,
            destroy?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Emits a #GtkTreeSortable::sort-column-changed signal on `sortable`.
         */
        vfunc_sort_column_changed(): void;
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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        set(...args: never[]): any;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ChaptersView {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.TreeView.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    class ChaptersView extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        // Constructors of Gucharmap.ChaptersView

        constructor(properties?: Partial<ChaptersView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ChaptersView;

        // Own methods of Gucharmap.ChaptersView

        get_book_codepoint_list(): CodepointList;
        /**
         * Creates a new #GucharmapCodepointList representing the characters in the
         * current chapter.
         * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
         */
        get_codepoint_list(): CodepointList;
        /**
         * Gets the #GucharmapChaptersModel of #view.
         * @returns the #GucharmapChaptersModel
         */
        get_model(): ChaptersModel;
        get_model(...args: never[]): any;
        get_selected(): string;
        next(): void;
        /**
         * Moves to the previous chapter if applicable.
         */
        previous(): void;
        select_character(wc: number): boolean;
        select_locale(): boolean;
        set_model(model: ChaptersModel): void;
        set_model(...args: never[]): any;
        set_selected(name: string): boolean;

        // Inherited properties
        /**
         * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        // Inherited methods
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns %TRUE if @border has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the #GtkAdjustment used for horizontal scrolling.
         * @returns horizontal #GtkAdjustment.
         */
        get_hadjustment(): Gtk.Adjustment;
        /**
         * Gets the horizontal #GtkScrollablePolicy.
         * @returns The horizontal #GtkScrollablePolicy.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the #GtkAdjustment used for vertical scrolling.
         * @returns vertical #GtkAdjustment.
         */
        get_vadjustment(): Gtk.Adjustment;
        /**
         * Gets the vertical #GtkScrollablePolicy.
         * @returns The vertical #GtkScrollablePolicy.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the #GtkScrollable.
         * @param hadjustment a #GtkAdjustment
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal #GtkScrollablePolicy
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
        /**
         * Sets the vertical adjustment of the #GtkScrollable.
         * @param vadjustment a #GtkAdjustment
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical #GtkScrollablePolicy
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         */
        vfunc_get_border(): [boolean, Gtk.Border];
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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Charmap {
        // Signal callback interfaces

        interface LinkClicked {
            (object: number, p0: number): void;
        }

        interface StatusMessage {
            (object: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Paned.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            active_chapter: string;
            activeChapter: string;
            active_character: number;
            activeCharacter: number;
            active_codepoint_list: CodepointList;
            activeCodepointList: CodepointList;
            active_page: number;
            activePage: number;
            chapters_model: ChaptersModel;
            chaptersModel: ChaptersModel;
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            font_fallback: boolean;
            fontFallback: boolean;
            snap_power_2: boolean;
            snapPower2: boolean;
        }
    }

    class Charmap extends Gtk.Paned implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        // Own properties of Gucharmap.Charmap

        get active_chapter(): string;
        set active_chapter(val: string);
        get activeChapter(): string;
        set activeChapter(val: string);
        get active_character(): number;
        set active_character(val: number);
        get activeCharacter(): number;
        set activeCharacter(val: number);
        get active_codepoint_list(): CodepointList;
        get activeCodepointList(): CodepointList;
        get active_page(): number;
        set active_page(val: number);
        get activePage(): number;
        set activePage(val: number);
        set chapters_model(val: ChaptersModel);
        set chaptersModel(val: ChaptersModel);
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        /**
         * Whether font fallback is enabled.
         */
        get font_fallback(): boolean;
        set font_fallback(val: boolean);
        /**
         * Whether font fallback is enabled.
         */
        get fontFallback(): boolean;
        set fontFallback(val: boolean);
        get snap_power_2(): boolean;
        set snap_power_2(val: boolean);
        get snapPower2(): boolean;
        set snapPower2(val: boolean);

        // Constructors of Gucharmap.Charmap

        constructor(properties?: Partial<Charmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Charmap;

        // Own signals of Gucharmap.Charmap

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'link-clicked', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(signal: 'link-clicked', callback: (_source: this, object: number, p0: number) => void): number;
        emit(signal: 'link-clicked', object: number, p0: number): void;
        connect(signal: 'status-message', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'status-message', callback: (_source: this, object: string) => void): number;
        emit(signal: 'status-message', object: string): void;

        // Own virtual methods of Gucharmap.Charmap

        vfunc_link_clicked(old_character: number, new_character: number): void;
        vfunc_status_message(message: string): void;

        // Own methods of Gucharmap.Charmap

        get_active_chapter(): string;
        get_active_character(): number;
        /**
         * Gets the `GucharmapCodepointList` associated with the #GucharmapChartable of
         * `charmap`.
         * @returns the #GucharmapCodepointList
         */
        get_active_codepoint_list(): CodepointList;
        get_active_page(): number;
        get_book_codepoint_list(): CodepointList;
        /**
         * Gets the #GucharmapChaptersModel associated with the #GucharmapChaptersView
         * of `charmap`.
         * @returns a #GucharmapChaptersModel
         */
        get_chapters_model(): ChaptersModel;
        /**
         * Gets the #GucharmapChaptersView of `charmap`
         * @returns the #GucharmapChaptersView
         */
        get_chapters_view(): ChaptersView;
        get_chapters_visible(): boolean;
        get_chartable(): Chartable;
        get_font_desc(): Pango.FontDescription;
        get_font_fallback(): boolean;
        get_page_visible(page: number): boolean;
        /**
         * Returns whether the number of columns the character table shows is
         * always a power of 2.
         */
        get_snap_pow2(): boolean;
        next_chapter(): void;
        previous_chapter(): void;
        set_active_chapter(chapter: string): void;
        set_active_character(uc: number): void;
        set_active_page(page: number): void;
        set_chapters_model(model: ChaptersModel): void;
        set_chapters_visible(visible: boolean): void;
        /**
         * Sets `font_desc` as the font to use to display the character table.
         * @param font_desc a #PangoFontDescription
         */
        set_font_desc(font_desc: Pango.FontDescription): void;
        set_font_fallback(enable_font_fallback: boolean): void;
        set_page_visible(page: number, visible: boolean): void;
        /**
         * Sets whether the number columns the character table shows should
         * always be a power of 2.
         * @param snap whether to enable or disable snapping
         */
        set_snap_pow2(snap: boolean): void;

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
        set_orientation(orientation: Gtk.Orientation): void;
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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Chartable {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface CopyClipboard {
            (): void;
        }

        interface MoveCursor {
            (object: Gtk.MovementStep, p0: number): boolean;
        }

        interface PasteClipboard {
            (): void;
        }

        interface StatusMessage {
            (object: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            active_character: number;
            activeCharacter: number;
            codepoint_list: CodepointList;
            codepointList: CodepointList;
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            font_fallback: boolean;
            fontFallback: boolean;
            snap_power_2: boolean;
            snapPower2: boolean;
            zoom_enabled: boolean;
            zoomEnabled: boolean;
            zoom_showing: boolean;
            zoomShowing: boolean;
        }
    }

    class Chartable extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        // Own properties of Gucharmap.Chartable

        get active_character(): number;
        set active_character(val: number);
        get activeCharacter(): number;
        set activeCharacter(val: number);
        get codepoint_list(): CodepointList;
        set codepoint_list(val: CodepointList);
        get codepointList(): CodepointList;
        set codepointList(val: CodepointList);
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        /**
         * Whether font fallback is enabled.
         */
        get font_fallback(): boolean;
        set font_fallback(val: boolean);
        /**
         * Whether font fallback is enabled.
         */
        get fontFallback(): boolean;
        set fontFallback(val: boolean);
        get snap_power_2(): boolean;
        set snap_power_2(val: boolean);
        get snapPower2(): boolean;
        set snapPower2(val: boolean);
        get zoom_enabled(): boolean;
        set zoom_enabled(val: boolean);
        get zoomEnabled(): boolean;
        set zoomEnabled(val: boolean);
        get zoom_showing(): boolean;
        get zoomShowing(): boolean;

        // Constructors of Gucharmap.Chartable

        constructor(properties?: Partial<Chartable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Chartable;

        // Own signals of Gucharmap.Chartable

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'activate', callback: (_source: this) => void): number;
        connect_after(signal: 'activate', callback: (_source: this) => void): number;
        emit(signal: 'activate'): void;
        connect(signal: 'copy-clipboard', callback: (_source: this) => void): number;
        connect_after(signal: 'copy-clipboard', callback: (_source: this) => void): number;
        emit(signal: 'copy-clipboard'): void;
        connect(
            signal: 'move-cursor',
            callback: (_source: this, object: Gtk.MovementStep, p0: number) => boolean,
        ): number;
        connect_after(
            signal: 'move-cursor',
            callback: (_source: this, object: Gtk.MovementStep, p0: number) => boolean,
        ): number;
        emit(signal: 'move-cursor', object: Gtk.MovementStep, p0: number): void;
        connect(signal: 'paste-clipboard', callback: (_source: this) => void): number;
        connect_after(signal: 'paste-clipboard', callback: (_source: this) => void): number;
        emit(signal: 'paste-clipboard'): void;
        connect(signal: 'status-message', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'status-message', callback: (_source: this, object: string) => void): number;
        emit(signal: 'status-message', object: string): void;

        // Own virtual methods of Gucharmap.Chartable

        vfunc_activate(): void;
        vfunc_copy_clipboard(): void;
        vfunc_move_cursor(step: Gtk.MovementStep, count: number): boolean;
        vfunc_paste_clipboard(): void;
        vfunc_set_active_char(ch: number): void;
        vfunc_set_scroll_adjustments(hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment): void;
        vfunc_status_message(message: string): void;

        // Own methods of Gucharmap.Chartable

        get_active_character(): number;
        get_codepoint_list(): CodepointList;
        get_font_desc(): Pango.FontDescription;
        get_font_fallback(): boolean;
        /**
         * Returns whether the number of columns the character table shows is
         * always a power of 2.
         */
        get_snap_pow2(): boolean;
        get_zoom_enabled(): boolean;
        /**
         * Sets `wc` as the selected character.
         * @param wc a unicode character (UTF-32)
         */
        set_active_character(wc: number): void;
        /**
         * Sets the codepoint list to show in the character table.
         * @param codepoint_list a #GucharmapCodepointList
         */
        set_codepoint_list(codepoint_list: CodepointList): void;
        /**
         * Sets `font_desc` as the font to use to display the character table.
         * @param font_desc a #PangoFontDescription
         */
        set_font_desc(font_desc: Pango.FontDescription): void;
        set_font_fallback(enable_font_fallback: boolean): void;
        /**
         * Sets whether the number columns the character table shows should
         * always be a power of 2.
         * @param snap whether to enable or disable snapping
         */
        set_snap_pow2(snap: boolean): void;
        /**
         * Enables or disables the zoom popup.
         * @param enabled whether to enable zoom mode
         */
        set_zoom_enabled(enabled: boolean): void;

        // Inherited properties
        /**
         * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        // Inherited methods
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns %TRUE if @border has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the #GtkAdjustment used for horizontal scrolling.
         * @returns horizontal #GtkAdjustment.
         */
        get_hadjustment(): Gtk.Adjustment;
        /**
         * Gets the horizontal #GtkScrollablePolicy.
         * @returns The horizontal #GtkScrollablePolicy.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the #GtkAdjustment used for vertical scrolling.
         * @returns vertical #GtkAdjustment.
         */
        get_vadjustment(): Gtk.Adjustment;
        /**
         * Gets the vertical #GtkScrollablePolicy.
         * @returns The vertical #GtkScrollablePolicy.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the #GtkScrollable.
         * @param hadjustment a #GtkAdjustment
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal #GtkScrollablePolicy
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
        /**
         * Sets the vertical adjustment of the #GtkScrollable.
         * @param vadjustment a #GtkAdjustment
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical #GtkScrollablePolicy
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         */
        vfunc_get_border(): [boolean, Gtk.Border];
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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ChartableAccessible {
        // Constructor properties interface

        interface ConstructorProps
            extends Atk.NoOpObject.ConstructorProps,
                Atk.Action.ConstructorProps,
                Atk.Component.ConstructorProps,
                Atk.Document.ConstructorProps,
                Atk.EditableText.ConstructorProps,
                Atk.Hypertext.ConstructorProps,
                Atk.Image.ConstructorProps,
                Atk.Selection.ConstructorProps,
                Atk.Table.ConstructorProps,
                Atk.TableCell.ConstructorProps,
                Atk.Text.ConstructorProps,
                Atk.Value.ConstructorProps,
                Atk.Window.ConstructorProps {}
    }

    class ChartableAccessible
        extends Atk.NoOpObject
        implements
            Atk.Action,
            Atk.Component,
            Atk.Document,
            Atk.EditableText,
            Atk.Hypertext,
            Atk.Image,
            Atk.Selection,
            Atk.Table,
            Atk.TableCell,
            Atk.Text,
            Atk.Value,
            Atk.Window
    {
        // Constructors of Gucharmap.ChartableAccessible

        constructor(properties?: Partial<ChartableAccessible.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](chartable: Chartable): ChartableAccessible;

        // Inherited properties
        get accessible_component_layer(): number;
        get accessibleComponentLayer(): number;
        get accessible_component_mdi_zorder(): number;
        get accessibleComponentMdiZorder(): number;
        get accessible_description(): string;
        set accessible_description(val: string);
        get accessibleDescription(): string;
        set accessibleDescription(val: string);
        get accessible_hypertext_nlinks(): number;
        get accessibleHypertextNlinks(): number;
        get accessible_name(): string;
        set accessible_name(val: string);
        get accessibleName(): string;
        set accessibleName(val: string);
        get accessible_parent(): Atk.Object;
        set accessible_parent(val: Atk.Object);
        get accessibleParent(): Atk.Object;
        set accessibleParent(val: Atk.Object);
        get accessible_role(): Atk.Role;
        set accessible_role(val: Atk.Role);
        get accessibleRole(): Atk.Role;
        set accessibleRole(val: Atk.Role);
        /**
         * Table caption.
         */
        get accessible_table_caption(): string;
        set accessible_table_caption(val: string);
        /**
         * Table caption.
         */
        get accessibleTableCaption(): string;
        set accessibleTableCaption(val: string);
        get accessible_table_caption_object(): Atk.Object;
        set accessible_table_caption_object(val: Atk.Object);
        get accessibleTableCaptionObject(): Atk.Object;
        set accessibleTableCaptionObject(val: Atk.Object);
        /**
         * Accessible table column description.
         */
        get accessible_table_column_description(): string;
        set accessible_table_column_description(val: string);
        /**
         * Accessible table column description.
         */
        get accessibleTableColumnDescription(): string;
        set accessibleTableColumnDescription(val: string);
        /**
         * Accessible table column header.
         */
        get accessible_table_column_header(): Atk.Object;
        set accessible_table_column_header(val: Atk.Object);
        /**
         * Accessible table column header.
         */
        get accessibleTableColumnHeader(): Atk.Object;
        set accessibleTableColumnHeader(val: Atk.Object);
        /**
         * Accessible table row description.
         */
        get accessible_table_row_description(): string;
        set accessible_table_row_description(val: string);
        /**
         * Accessible table row description.
         */
        get accessibleTableRowDescription(): string;
        set accessibleTableRowDescription(val: string);
        /**
         * Accessible table row header.
         */
        get accessible_table_row_header(): Atk.Object;
        set accessible_table_row_header(val: Atk.Object);
        /**
         * Accessible table row header.
         */
        get accessibleTableRowHeader(): Atk.Object;
        set accessibleTableRowHeader(val: Atk.Object);
        get accessible_table_summary(): Atk.Object;
        set accessible_table_summary(val: Atk.Object);
        get accessibleTableSummary(): Atk.Object;
        set accessibleTableSummary(val: Atk.Object);
        /**
         * Numeric value of this object, in case being and AtkValue.
         */
        get accessible_value(): number;
        set accessible_value(val: number);
        /**
         * Numeric value of this object, in case being and AtkValue.
         */
        get accessibleValue(): number;
        set accessibleValue(val: number);

        // Inherited methods
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns %TRUE if success, %FALSE otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or %NULL if @action does not implement this interface.
         */
        get_description(i: number): string | null;
        get_description(...args: never[]): any;
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
         * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if @action does not implement this interface.
         */
        get_n_actions(): number;
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
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        get_name(i: number): string | null;
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         */
        vfunc_get_description(i: number): string | null;
        vfunc_get_description(...args: never[]): any;
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
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         */
        vfunc_get_n_actions(): number;
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
        vfunc_get_name(i: number): string | null;
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         */
        vfunc_set_description(i: number, desc: string): boolean;
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an #AtkLayer which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType): [number, number];
        get_position(...args: never[]): any;
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from @component
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for @component
         * @param height height to set for @component
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns %TRUE or %FALSE whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns %TRUE or %FALSE whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for @component
         * @param height height to set for @component
         * @returns %TRUE or %FALSE whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
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
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        vfunc_get_position(...args: never[]): any;
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from @component
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for @component
         * @param height height to set for @component
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for @component
         * @param height height to set for @component
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Retrieves the value of the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being queried.
         * @returns a string value associated with the named    attribute for this document, or %NULL if a value for    @attribute_name has not been specified for this document.
         */
        get_attribute_value(attribute_name: string): string | null;
        /**
         * Gets an AtkAttributeSet which describes document-wide
         *          attributes as name-value pairs.
         * @returns An AtkAttributeSet containing the explicitly          set name-value-pair attributes associated with this document          as a whole.
         */
        get_attributes(): Atk.AttributeSet;
        /**
         * Retrieves the current page number inside `document`.
         * @returns the current page number inside @document, or -1 if   not implemented, not know by the implementor, or irrelevant.
         */
        get_current_page_number(): number;
        /**
         * Gets a %gpointer that points to an instance of the DOM.  It is
         * up to the caller to check atk_document_get_type to determine
         * how to cast this pointer.
         * @returns a %gpointer that points to an instance of the DOM.
         */
        get_document(): any | null;
        /**
         * Gets a string indicating the document type.
         * @returns a string indicating the document type
         */
        get_document_type(): string;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         *          of the content of this document instance.  Individual
         *          text substrings or images within this document may have
         *          a different locale, see atk_text_get_attributes and
         *          atk_image_get_image_locale.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of the document content as a whole, or NULL if          the document content does not specify a locale.
         */
        get_locale(): string;
        /**
         * Retrieves the total number of pages inside `document`.
         * @returns total page count of @document, or -1 if not implemented,   not know by the implementor or irrelevant.
         */
        get_page_count(): number;
        /**
         * Sets the value for the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being set.
         * @param attribute_value a string value to be associated with @attribute_name.
         * @returns %TRUE if @attribute_value is successfully associated   with @attribute_name for this @document, and %FALSE if if the   document does not allow the attribute to be modified
         */
        set_attribute_value(attribute_name: string, attribute_value: string): boolean;
        /**
         * Retrieves the current page number inside `document`.
         */
        vfunc_get_current_page_number(): number;
        /**
         * Gets a %gpointer that points to an instance of the DOM.  It is
         * up to the caller to check atk_document_get_type to determine
         * how to cast this pointer.
         */
        vfunc_get_document(): any | null;
        /**
         * Retrieves the value of the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being queried.
         */
        vfunc_get_document_attribute_value(attribute_name: string): string | null;
        /**
         * Gets an AtkAttributeSet which describes document-wide
         *          attributes as name-value pairs.
         */
        vfunc_get_document_attributes(): Atk.AttributeSet;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         *          of the content of this document instance.  Individual
         *          text substrings or images within this document may have
         *          a different locale, see atk_text_get_attributes and
         *          atk_image_get_image_locale.
         */
        vfunc_get_document_locale(): string;
        /**
         * Gets a string indicating the document type.
         */
        vfunc_get_document_type(): string;
        /**
         * Retrieves the total number of pages inside `document`.
         */
        vfunc_get_page_count(): number;
        /**
         * Sets the value for the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being set.
         * @param attribute_value a string value to be associated with @attribute_name.
         */
        vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         */
        copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         */
        cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         */
        insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         */
        paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an #AtkAttributeSet
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         * @returns %TRUE if attributes successfully set for the specified range, otherwise %FALSE
         */
        set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of @text
         */
        set_text_contents(string: string): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         */
        vfunc_copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         */
        vfunc_cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         */
        vfunc_insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         */
        vfunc_paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an #AtkAttributeSet
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         */
        vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of @text
         */
        vfunc_set_text_contents(string: string): void;
        /**
         * Gets the link in this hypertext document at index
         * `link_index`
         * @param link_index an integer specifying the desired link
         * @returns the link in this hypertext document at index @link_index
         */
        get_link(link_index: number): Atk.Hyperlink;
        /**
         * Gets the index into the array of hyperlinks that is associated with
         * the character specified by `char_index`.
         * @param char_index a character index
         * @returns an index into the array of hyperlinks in @hypertext, or -1 if there is no hyperlink associated with this character.
         */
        get_link_index(char_index: number): number;
        /**
         * Gets the number of links within this hypertext document.
         * @returns the number of links within this hypertext document
         */
        get_n_links(): number;
        /**
         * Gets the link in this hypertext document at index
         * `link_index`
         * @param link_index an integer specifying the desired link
         */
        vfunc_get_link(link_index: number): Atk.Hyperlink;
        /**
         * Gets the index into the array of hyperlinks that is associated with
         * the character specified by `char_index`.
         * @param char_index a character index
         */
        vfunc_get_link_index(char_index: number): number;
        /**
         * Gets the number of links within this hypertext document.
         */
        vfunc_get_n_links(): number;
        vfunc_link_selected(link_index: number): void;
        /**
         * Get a textual description of this image.
         * @returns a string representing the image description
         */
        get_image_description(): string;
        /**
         * Retrieves the locale identifier associated to the #AtkImage.
         * @returns a string corresponding to the POSIX   `LC_MESSAGES` locale used by the image description, or   %NULL if the image does not specify a locale.
         */
        get_image_locale(): string | null;
        /**
         * Gets the position of the image in the form of a point specifying the
         * images top-left corner.
         *
         * If the position can not be obtained (e.g. missing support), x and y are set
         * to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_image_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Get the width and height in pixels for the specified image.
         * The values of `width` and `height` are returned as -1 if the
         * values cannot be obtained (for instance, if the object is not onscreen).
         *
         * If the size can not be obtained (e.g. missing support), x and y are set
         * to -1.
         */
        get_image_size(): [number, number];
        /**
         * Sets the textual description for this image.
         * @param description a string description to set for @image
         * @returns boolean TRUE, or FALSE if operation could not be completed.
         */
        set_image_description(description: string): boolean;
        /**
         * Get a textual description of this image.
         */
        vfunc_get_image_description(): string;
        /**
         * Retrieves the locale identifier associated to the #AtkImage.
         */
        vfunc_get_image_locale(): string | null;
        /**
         * Gets the position of the image in the form of a point specifying the
         * images top-left corner.
         *
         * If the position can not be obtained (e.g. missing support), x and y are set
         * to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Get the width and height in pixels for the specified image.
         * The values of `width` and `height` are returned as -1 if the
         * values cannot be obtained (for instance, if the object is not onscreen).
         *
         * If the size can not be obtained (e.g. missing support), x and y are set
         * to -1.
         */
        vfunc_get_image_size(): [number, number];
        /**
         * Sets the textual description for this image.
         * @param description a string description to set for @image
         */
        vfunc_set_image_description(description: string): boolean;
        /**
         * Adds the specified accessible child of the object to the
         * object's selection.
         * @param i a #gint specifying the child index.
         * @returns TRUE if success, FALSE otherwise.
         */
        add_selection(i: number): boolean;
        /**
         * Clears the selection in the object so that no children in the object
         * are selected.
         * @returns TRUE if success, FALSE otherwise.
         */
        clear_selection(): boolean;
        /**
         * Gets the number of accessible children currently selected.
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         * @returns a gint representing the number of items selected, or 0 if @selection does not implement this interface.
         */
        get_selection_count(): number;
        /**
         * Determines if the current child of this object is selected
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         * @param i a #gint specifying the child index.
         * @returns a gboolean representing the specified child is selected, or 0 if @selection does not implement this interface.
         */
        is_child_selected(i: number): boolean;
        /**
         * Gets a reference to the accessible object representing the specified
         * selected child of the object.
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @returns an #AtkObject representing the selected accessible, or %NULL if @selection does not implement this interface.
         */
        ref_selection(i: number): Atk.Object | null;
        /**
         * Removes the specified child of the object from the object's selection.
         * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @returns TRUE if success, FALSE otherwise.
         */
        remove_selection(i: number): boolean;
        /**
         * Causes every child of the object to be selected if the object
         * supports multiple selections.
         * @returns TRUE if success, FALSE otherwise.
         */
        select_all_selection(): boolean;
        /**
         * Adds the specified accessible child of the object to the
         * object's selection.
         * @param i a #gint specifying the child index.
         */
        vfunc_add_selection(i: number): boolean;
        /**
         * Clears the selection in the object so that no children in the object
         * are selected.
         */
        vfunc_clear_selection(): boolean;
        /**
         * Gets the number of accessible children currently selected.
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         */
        vfunc_get_selection_count(): number;
        /**
         * Determines if the current child of this object is selected
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         * @param i a #gint specifying the child index.
         */
        vfunc_is_child_selected(i: number): boolean;
        /**
         * Gets a reference to the accessible object representing the specified
         * selected child of the object.
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         */
        vfunc_ref_selection(i: number): Atk.Object | null;
        /**
         * Removes the specified child of the object from the object's selection.
         * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         */
        vfunc_remove_selection(i: number): boolean;
        /**
         * Causes every child of the object to be selected if the object
         * supports multiple selections.
         */
        vfunc_select_all_selection(): boolean;
        vfunc_selection_changed(): void;
        /**
         * Adds the specified `column` to the selection.
         * @param column a #gint representing a column in @table
         * @returns a gboolean representing if the column was successfully added to the selection, or 0 if value does not implement this interface.
         */
        add_column_selection(column: number): boolean;
        /**
         * Adds the specified `row` to the selection.
         * @param row a #gint representing a row in @table
         * @returns a gboolean representing if row was successfully added to selection, or 0 if value does not implement this interface.
         */
        add_row_selection(row: number): boolean;
        /**
         * Gets the caption for the `table`.
         * @returns a AtkObject* representing the table caption, or %NULL if value does not implement this interface.
         */
        get_caption(): Atk.Object | null;
        /**
         * Gets a #gint representing the column at the specified `index_`.
         * @param index_ a #gint representing an index in @table
         * @returns a gint representing the column at the specified index, or -1 if the table does not implement this method.
         */
        get_column_at_index(index_: number): number;
        /**
         * Gets the description text of the specified `column` in the table
         * @param column a #gint representing a column in @table
         * @returns a gchar* representing the column description, or %NULL if value does not implement this interface.
         */
        get_column_description(column: number): string;
        /**
         * Gets the number of columns occupied by the accessible object
         * at the specified `row` and `column` in the `table`.
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         * @returns a gint representing the column extent at specified position, or 0 if value does not implement this interface.
         */
        get_column_extent_at(row: number, column: number): number;
        /**
         * Gets the column header of a specified column in an accessible table.
         * @param column a #gint representing a column in the table
         * @returns a AtkObject* representing the specified column header, or %NULL if value does not implement this interface.
         */
        get_column_header(column: number): Atk.Object | null;
        /**
         * Gets a #gint representing the index at the specified `row` and
         * `column`.
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         * @returns a #gint representing the index at specified position. The value -1 is returned if the object at row,column is not a child of table or table does not implement this interface.
         */
        get_index_at(row: number, column: number): number;
        /**
         * Gets the number of columns in the table.
         * @returns a gint representing the number of columns, or 0 if value does not implement this interface.
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in the table.
         * @returns a gint representing the number of rows, or 0 if value does not implement this interface.
         */
        get_n_rows(): number;
        /**
         * Gets a #gint representing the row at the specified `index_`.
         * @param index_ a #gint representing an index in @table
         * @returns a gint representing the row at the specified index, or -1 if the table does not implement this method.
         */
        get_row_at_index(index_: number): number;
        /**
         * Gets the description text of the specified row in the table
         * @param row a #gint representing a row in @table
         * @returns a gchar* representing the row description, or %NULL if value does not implement this interface.
         */
        get_row_description(row: number): string | null;
        /**
         * Gets the number of rows occupied by the accessible object
         * at a specified `row` and `column` in the `table`.
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         * @returns a gint representing the row extent at specified position, or 0 if value does not implement this interface.
         */
        get_row_extent_at(row: number, column: number): number;
        /**
         * Gets the row header of a specified row in an accessible table.
         * @param row a #gint representing a row in the table
         * @returns a AtkObject* representing the specified row header, or %NULL if value does not implement this interface.
         */
        get_row_header(row: number): Atk.Object | null;
        /**
         * Gets the selected columns of the table by initializing **selected with
         * the selected column numbers. This array should be freed by the caller.
         * @param selected a #gint** that is to contain the selected columns numbers
         * @returns a gint representing the number of selected columns, or %0 if value does not implement this interface.
         */
        get_selected_columns(selected: number): number;
        /**
         * Gets the selected rows of the table by initializing **selected with
         * the selected row numbers. This array should be freed by the caller.
         * @param selected a #gint** that is to contain the selected row numbers
         * @returns a gint representing the number of selected rows, or zero if value does not implement this interface.
         */
        get_selected_rows(selected: number): number;
        /**
         * Gets the summary description of the table.
         * @returns a AtkObject* representing a summary description of the table, or zero if value does not implement this interface.
         */
        get_summary(): Atk.Object;
        /**
         * Gets a boolean value indicating whether the specified `column`
         * is selected
         * @param column a #gint representing a column in @table
         * @returns a gboolean representing if the column is selected, or 0 if value does not implement this interface.
         */
        is_column_selected(column: number): boolean;
        /**
         * Gets a boolean value indicating whether the specified `row`
         * is selected
         * @param row a #gint representing a row in @table
         * @returns a gboolean representing if the row is selected, or 0 if value does not implement this interface.
         */
        is_row_selected(row: number): boolean;
        /**
         * Gets a boolean value indicating whether the accessible object
         * at the specified `row` and `column` is selected
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         * @returns a gboolean representing if the cell is selected, or 0 if value does not implement this interface.
         */
        is_selected(row: number, column: number): boolean;
        /**
         * Get a reference to the table cell at `row,` `column`. This cell
         * should implement the interface #AtkTableCell
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         * @returns an #AtkObject representing the referred to accessible
         */
        ref_at(row: number, column: number): Atk.Object;
        /**
         * Adds the specified `column` to the selection.
         * @param column a #gint representing a column in @table
         * @returns a gboolean representing if the column was successfully removed from the selection, or 0 if value does not implement this interface.
         */
        remove_column_selection(column: number): boolean;
        /**
         * Removes the specified `row` from the selection.
         * @param row a #gint representing a row in @table
         * @returns a gboolean representing if the row was successfully removed from the selection, or 0 if value does not implement this interface.
         */
        remove_row_selection(row: number): boolean;
        /**
         * Sets the caption for the table.
         * @param caption a #AtkObject representing the caption to set for @table
         */
        set_caption(caption: Atk.Object): void;
        /**
         * Sets the description text for the specified `column` of the `table`.
         * @param column a #gint representing a column in @table
         * @param description a #gchar representing the description text to set for the specified @column of the @table
         */
        set_column_description(column: number, description: string): void;
        /**
         * Sets the specified column header to `header`.
         * @param column a #gint representing a column in @table
         * @param header an #AtkTable
         */
        set_column_header(column: number, header: Atk.Object): void;
        /**
         * Sets the description text for the specified `row` of `table`.
         * @param row a #gint representing a row in @table
         * @param description a #gchar representing the description text to set for the specified @row of @table
         */
        set_row_description(row: number, description: string): void;
        /**
         * Sets the specified row header to `header`.
         * @param row a #gint representing a row in @table
         * @param header an #AtkTable
         */
        set_row_header(row: number, header: Atk.Object): void;
        /**
         * Sets the summary description of the table.
         * @param accessible an #AtkObject representing the summary description to set for @table
         */
        set_summary(accessible: Atk.Object): void;
        /**
         * Adds the specified `column` to the selection.
         * @param column a #gint representing a column in @table
         */
        vfunc_add_column_selection(column: number): boolean;
        /**
         * Adds the specified `row` to the selection.
         * @param row a #gint representing a row in @table
         */
        vfunc_add_row_selection(row: number): boolean;
        vfunc_column_deleted(column: number, num_deleted: number): void;
        vfunc_column_inserted(column: number, num_inserted: number): void;
        vfunc_column_reordered(): void;
        /**
         * Gets the caption for the `table`.
         */
        vfunc_get_caption(): Atk.Object | null;
        /**
         * Gets a #gint representing the column at the specified `index_`.
         * @param index_ a #gint representing an index in @table
         */
        vfunc_get_column_at_index(index_: number): number;
        /**
         * Gets the description text of the specified `column` in the table
         * @param column a #gint representing a column in @table
         */
        vfunc_get_column_description(column: number): string;
        /**
         * Gets the number of columns occupied by the accessible object
         * at the specified `row` and `column` in the `table`.
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         */
        vfunc_get_column_extent_at(row: number, column: number): number;
        /**
         * Gets the column header of a specified column in an accessible table.
         * @param column a #gint representing a column in the table
         */
        vfunc_get_column_header(column: number): Atk.Object | null;
        /**
         * Gets a #gint representing the index at the specified `row` and
         * `column`.
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         */
        vfunc_get_index_at(row: number, column: number): number;
        /**
         * Gets the number of columns in the table.
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in the table.
         */
        vfunc_get_n_rows(): number;
        /**
         * Gets a #gint representing the row at the specified `index_`.
         * @param index_ a #gint representing an index in @table
         */
        vfunc_get_row_at_index(index_: number): number;
        /**
         * Gets the description text of the specified row in the table
         * @param row a #gint representing a row in @table
         */
        vfunc_get_row_description(row: number): string | null;
        /**
         * Gets the number of rows occupied by the accessible object
         * at a specified `row` and `column` in the `table`.
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         */
        vfunc_get_row_extent_at(row: number, column: number): number;
        /**
         * Gets the row header of a specified row in an accessible table.
         * @param row a #gint representing a row in the table
         */
        vfunc_get_row_header(row: number): Atk.Object | null;
        /**
         * Gets the selected columns of the table by initializing **selected with
         * the selected column numbers. This array should be freed by the caller.
         * @param selected a #gint** that is to contain the selected columns numbers
         */
        vfunc_get_selected_columns(selected: number): number;
        /**
         * Gets the selected rows of the table by initializing **selected with
         * the selected row numbers. This array should be freed by the caller.
         * @param selected a #gint** that is to contain the selected row numbers
         */
        vfunc_get_selected_rows(selected: number): number;
        /**
         * Gets the summary description of the table.
         */
        vfunc_get_summary(): Atk.Object;
        /**
         * Gets a boolean value indicating whether the specified `column`
         * is selected
         * @param column a #gint representing a column in @table
         */
        vfunc_is_column_selected(column: number): boolean;
        /**
         * Gets a boolean value indicating whether the specified `row`
         * is selected
         * @param row a #gint representing a row in @table
         */
        vfunc_is_row_selected(row: number): boolean;
        /**
         * Gets a boolean value indicating whether the accessible object
         * at the specified `row` and `column` is selected
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         */
        vfunc_is_selected(row: number, column: number): boolean;
        vfunc_model_changed(): void;
        /**
         * Get a reference to the table cell at `row,` `column`. This cell
         * should implement the interface #AtkTableCell
         * @param row a #gint representing a row in @table
         * @param column a #gint representing a column in @table
         */
        vfunc_ref_at(row: number, column: number): Atk.Object;
        /**
         * Adds the specified `column` to the selection.
         * @param column a #gint representing a column in @table
         */
        vfunc_remove_column_selection(column: number): boolean;
        /**
         * Removes the specified `row` from the selection.
         * @param row a #gint representing a row in @table
         */
        vfunc_remove_row_selection(row: number): boolean;
        vfunc_row_deleted(row: number, num_deleted: number): void;
        vfunc_row_inserted(row: number, num_inserted: number): void;
        vfunc_row_reordered(): void;
        /**
         * Sets the caption for the table.
         * @param caption a #AtkObject representing the caption to set for @table
         */
        vfunc_set_caption(caption: Atk.Object): void;
        /**
         * Sets the description text for the specified `column` of the `table`.
         * @param column a #gint representing a column in @table
         * @param description a #gchar representing the description text to set for the specified @column of the @table
         */
        vfunc_set_column_description(column: number, description: string): void;
        /**
         * Sets the specified column header to `header`.
         * @param column a #gint representing a column in @table
         * @param header an #AtkTable
         */
        vfunc_set_column_header(column: number, header: Atk.Object): void;
        /**
         * Sets the description text for the specified `row` of `table`.
         * @param row a #gint representing a row in @table
         * @param description a #gchar representing the description text to set for the specified @row of @table
         */
        vfunc_set_row_description(row: number, description: string): void;
        /**
         * Sets the specified row header to `header`.
         * @param row a #gint representing a row in @table
         * @param header an #AtkTable
         */
        vfunc_set_row_header(row: number, header: Atk.Object): void;
        /**
         * Sets the summary description of the table.
         * @param accessible an #AtkObject representing the summary description to set for @table
         */
        vfunc_set_summary(accessible: Atk.Object): void;
        /**
         * Returns the column headers as an array of cell accessibles.
         * @returns a GPtrArray of AtkObjects representing the column header cells.
         */
        get_column_header_cells(): Atk.Object[];
        /**
         * Returns the number of columns occupied by this cell accessible.
         * @returns a gint representing the number of columns occupied by this cell, or 0 if the cell does not implement this method.
         */
        get_column_span(): number;
        /**
         * Gets the row and column indexes and span of this cell accessible.
         *
         * Note: If the object does not implement this function, then, by default, atk
         * will implement this function by calling get_row_span and get_column_span
         * on the object.
         * @returns TRUE if successful; FALSE otherwise.
         */
        get_row_column_span(): [boolean, number, number, number, number];
        /**
         * Returns the row headers as an array of cell accessibles.
         * @returns a GPtrArray of AtkObjects representing the row header cells.
         */
        get_row_header_cells(): Atk.Object[];
        /**
         * Returns the number of rows occupied by this cell accessible.
         * @returns a gint representing the number of rows occupied by this cell, or 0 if the cell does not implement this method.
         */
        get_row_span(): number;
        /**
         * Returns a reference to the accessible of the containing table.
         * @returns the atk object for the containing table.
         */
        get_table(): Atk.Object;
        /**
         * Returns the column headers as an array of cell accessibles.
         */
        vfunc_get_column_header_cells(): Atk.Object[];
        /**
         * Returns the number of columns occupied by this cell accessible.
         */
        vfunc_get_column_span(): number;
        /**
         * Gets the row and column indexes and span of this cell accessible.
         *
         * Note: If the object does not implement this function, then, by default, atk
         * will implement this function by calling get_row_span and get_column_span
         * on the object.
         */
        vfunc_get_row_column_span(): [boolean, number, number, number, number];
        /**
         * Returns the row headers as an array of cell accessibles.
         */
        vfunc_get_row_header_cells(): Atk.Object[];
        /**
         * Returns the number of rows occupied by this cell accessible.
         */
        vfunc_get_row_span(): number;
        /**
         * Returns a reference to the accessible of the containing table.
         */
        vfunc_get_table(): Atk.Object;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         * @returns Array of AtkTextRange. The last          element of the array returned by this function will be NULL.
         */
        get_bounded_ranges(
            rect: Atk.TextRectangle,
            coord_type: Atk.CoordType,
            x_clip_type: Atk.TextClipType,
            y_clip_type: Atk.TextClipType,
        ): Atk.TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         * @returns the character offset of the position of the caret or -1 if          the caret is not located inside the element or in the case of          any other failure.
         */
        get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within @text
         * @returns the character at @offset or 0 in the case of failure.
         */
        get_character_at_offset(offset: number): number;
        /**
         * Gets the character count.
         * @returns the number of characters or -1 in case of failure.
         */
        get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
        /**
         * Creates an #AtkAttributeSet which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @returns an #AtkAttributeSet which contains the default text          attributes for this #AtkText. This #AtkAttributeSet should be freed by          a call to atk_attribute_set_free().
         */
        get_default_attributes(): Atk.AttributeSet;
        /**
         * Gets the number of selected regions.
         * @returns The number of selected regions, or -1 in the case of failure.
         */
        get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @returns the offset to the character which is located at  the specified          @x and @y coordinates of -1 in case of failure.
         */
        get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
        /**
         * Creates an #AtkAttributeSet which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
         * @returns an #AtkAttributeSet which contains the attributes         explicitly set at @offset. This #AtkAttributeSet should be freed by         a call to atk_attribute_set_free().
         */
        get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @returns a newly allocated string containing the selected text. Use g_free()          to free the returned string.
         */
        get_selection(selection_num: number): [string, number, number];
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
         * @returns a newly allocated string containing the text at          the @offset bounded by the specified @granularity. Use g_free()          to free the returned string.  Returns %NULL if the offset is invalid          or no implementation is available.
         */
        get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within @text
         * @param end_offset an ending character offset within @text, or -1 for the end of the string.
         * @returns a newly allocated string containing the text from @start_offset up          to, but not including @end_offset. Use g_free() to free the returned          string.
         */
        get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         * @returns a newly allocated string containing the text after @offset bounded          by the specified @boundary_type. Use g_free() to free the returned          string.
         */
        get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
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
         * @returns a newly allocated string containing the text at @offset bounded          by the specified @boundary_type. Use g_free() to free the returned          string.
         */
        get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         * @returns a newly allocated string containing the text before @offset bounded          by the specified @boundary_type. Use g_free() to free the returned          string.
         */
        get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the @text
         * @param end_offset end offset in the @text, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the @text
         * @param end_offset end offset in the @text, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: Atk.CoordType,
            x: number,
            y: number,
        ): boolean;
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
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         * @returns %TRUE if successful, %FALSE otherwise
         */
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         */
        vfunc_get_bounded_ranges(
            rect: Atk.TextRectangle,
            coord_type: Atk.CoordType,
            x_clip_type: Atk.TextClipType,
            y_clip_type: Atk.TextClipType,
        ): Atk.TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         */
        vfunc_get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within @text
         */
        vfunc_get_character_at_offset(offset: number): number;
        /**
         * Gets the character count.
         */
        vfunc_get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
        /**
         * Creates an #AtkAttributeSet which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         */
        vfunc_get_default_attributes(): Atk.AttributeSet;
        /**
         * Gets the number of selected regions.
         */
        vfunc_get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
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
        vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         */
        vfunc_get_selection(selection_num: number): [string, number, number];
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
        vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within @text
         * @param end_offset an ending character offset within @text, or -1 for the end of the string.
         */
        vfunc_get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         */
        vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
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
        vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         */
        vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the @text
         * @param end_offset end offset in the @text, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         */
        vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the @text
         * @param end_offset end offset in the @text, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        vfunc_scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: Atk.CoordType,
            x: number,
            y: number,
        ): boolean;
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
        vfunc_set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         */
        vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        vfunc_text_attributes_changed(): void;
        vfunc_text_caret_moved(location: number): void;
        vfunc_text_changed(position: number, length: number): void;
        vfunc_text_selection_changed(): void;
        /**
         * Gets the value of this object.
         */
        get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         * @returns the minimum increment by which the value of this object may be changed. zero if undefined.
         */
        get_increment(): number;
        /**
         * Gets the maximum value of this object.
         */
        get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         */
        get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         */
        get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         * @returns a newly allocated #AtkRange that represents the minimum, maximum and descriptor (if available) of @obj. NULL if that range is not defined.
         */
        get_range(): Atk.Range | null;
        /**
         * Gets the list of subranges defined for this object. See #AtkValue
         * introduction for examples of subranges and when to expose them.
         * @returns an #GSList of #AtkRange which each of the subranges defined for this object. Free the returns list with g_slist_free().
         */
        get_sub_ranges(): Atk.Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         */
        get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a #GValue which is the desired new accessible value.
         * @returns %TRUE if new value is successfully set, %FALSE otherwise.
         */
        set_current_value(value: GObject.Value): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an #AtkValue::value-changed signal emission.
         *
         * Note for implementors: the deprecated atk_value_set_current_value()
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         */
        set_value(new_value: number): void;
        /**
         * Gets the value of this object.
         */
        vfunc_get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         */
        vfunc_get_increment(): number;
        /**
         * Gets the maximum value of this object.
         */
        vfunc_get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         */
        vfunc_get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         */
        vfunc_get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         */
        vfunc_get_range(): Atk.Range | null;
        /**
         * Gets the list of subranges defined for this object. See #AtkValue
         * introduction for examples of subranges and when to expose them.
         */
        vfunc_get_sub_ranges(): Atk.Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         */
        vfunc_get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a #GValue which is the desired new accessible value.
         */
        vfunc_set_current_value(value: GObject.Value): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an #AtkValue::value-changed signal emission.
         *
         * Note for implementors: the deprecated atk_value_set_current_value()
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         */
        vfunc_set_value(new_value: number): void;
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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
        /**
         * Adds a relationship of the specified type with the specified target.
         * @param relationship The #AtkRelationType of the relation
         * @param target The #AtkObject which is to be the target of the relation.
         * @returns TRUE if the relationship is added.
         */
        add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean;
        /**
         * Gets the accessible id of the accessible.
         * @returns a character string representing the accessible id of the object, or NULL if no such string was set.
         */
        get_accessible_id(): string;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @returns an integer which is the index of the accessible in its parent
         */
        get_index_in_parent(): number;
        /**
         * Gets the number of accessible children of the accessible.
         * @returns an integer representing the number of accessible children of the accessible.
         */
        get_n_accessible_children(): number;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of @accessible.
         */
        get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with atk_object_set_parent(), but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * atk_object_set_parent(), and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * atk_object_set_parent(), use atk_object_peek_parent().
         * @returns an #AtkObject representing the accessible parent of the accessible
         */
        get_parent(): Atk.Object;
        /**
         * Gets the role of the accessible.
         * @returns an #AtkRole which is the role of the accessible
         */
        get_role(): Atk.Role;
        /**
         * This function is called when implementing subclasses of #AtkObject.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of #AtkObject
         * @param data a #gpointer which identifies the object for which the AtkObject was created.
         */
        initialize(data?: any | null): void;
        /**
         * Emits a state-change signal for the specified state.
         *
         * Note that as a general rule when the state of an existing object changes,
         * emitting a notification is expected.
         * @param state an #AtkState whose state is changed
         * @param value a gboolean which indicates whether the state is being set on or off
         */
        notify_state_change(state: Atk.State, value: boolean): void;
        /**
         * Gets the accessible parent of the accessible, if it has been
         * manually assigned with atk_object_set_parent. Otherwise, this
         * function returns %NULL.
         *
         * This method is intended as an utility for ATK implementors, and not
         * to be exposed to accessible tools. See atk_object_get_parent() for
         * further reference.
         * @returns an #AtkObject representing the accessible parent of the accessible if assigned
         */
        peek_parent(): Atk.Object;
        /**
         * Gets a reference to the specified accessible child of the object.
         * The accessible children are 0-based so the first accessible child is
         * at index 0, the second at index 1 and so on.
         * @param i a gint representing the position of the child, starting from 0
         * @returns an #AtkObject representing the specified accessible child of the accessible.
         */
        ref_accessible_child(i: number): Atk.Object;
        /**
         * Gets the #AtkRelationSet associated with the object.
         * @returns an #AtkRelationSet representing the relation set of the object.
         */
        ref_relation_set(): Atk.RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @returns a reference to an #AtkStateSet which is the state set of the accessible
         */
        ref_state_set(): Atk.StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         */
        remove_property_change_handler(handler_id: number): void;
        /**
         * Removes a relationship of the specified type with the specified target.
         * @param relationship The #AtkRelationType of the relation
         * @param target The #AtkObject which is the target of the relation to be removed.
         * @returns TRUE if the relationship is removed.
         */
        remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean;
        /**
         * Sets the accessible ID of the accessible.  This is not meant to be presented
         * to the user, but to be an ID which is stable over application development.
         * Typically, this is the gtkbuilder ID. Such an ID will be available for
         * instance to identify a given well-known accessible object for tailored screen
         * reading, or for automatic regression testing.
         * @param name a character string to be set as the accessible id
         */
        set_accessible_id(name: string): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         */
        set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an #AtkObject to be set as the accessible parent
         */
        set_parent(parent: Atk.Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an #AtkRole to be set as the role
         */
        set_role(role: Atk.Role): void;
        vfunc_active_descendant_changed(child?: any | null): void;
        vfunc_children_changed(change_index: number, changed_child?: any | null): void;
        vfunc_focus_event(focus_in: boolean): void;
        /**
         * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
         * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
         * as distinct from strongly-typed object data available via other get/set methods.
         * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
         */
        vfunc_get_attributes(): Atk.AttributeSet;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         */
        vfunc_get_index_in_parent(): number;
        vfunc_get_n_children(): number;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         */
        vfunc_get_object_locale(): string;
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
        vfunc_get_parent(): Atk.Object;
        /**
         * Gets the role of the accessible.
         */
        vfunc_get_role(): Atk.Role;
        /**
         * This function is called when implementing subclasses of #AtkObject.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of #AtkObject
         * @param data a #gpointer which identifies the object for which the AtkObject was created.
         */
        vfunc_initialize(data?: any | null): void;
        vfunc_property_change(values: Atk.PropertyValues): void;
        /**
         * Gets the #AtkRelationSet associated with the object.
         */
        vfunc_ref_relation_set(): Atk.RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         */
        vfunc_ref_state_set(): Atk.StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         */
        vfunc_remove_property_change_handler(handler_id: number): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         */
        vfunc_set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an #AtkObject to be set as the accessible parent
         */
        vfunc_set_parent(parent: Atk.Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an #AtkRole to be set as the role
         */
        vfunc_set_role(role: Atk.Role): void;
        vfunc_state_change(name: string, state_set: boolean): void;
        vfunc_visible_data_changed(): void;
    }

    module ChartableCellAccessible {
        // Constructor properties interface

        interface ConstructorProps
            extends Atk.Object.ConstructorProps,
                Atk.Action.ConstructorProps,
                Atk.Component.ConstructorProps {}
    }

    class ChartableCellAccessible extends Atk.Object implements Atk.Action, Atk.Component {
        // Own fields of Gucharmap.ChartableCellAccessible

        widget: Gtk.Widget;
        index: number;
        state_set: Atk.StateSet;
        activate_description: string;
        action_idle_handler: number;

        // Constructors of Gucharmap.ChartableCellAccessible

        constructor(properties?: Partial<ChartableCellAccessible.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ChartableCellAccessible;

        // Own methods of Gucharmap.ChartableCellAccessible

        add_state(state_type: Atk.StateType, emit_signal: boolean): boolean;
        initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void;
        remove_state(state_type: Atk.StateType, emit_signal: boolean): boolean;

        // Inherited methods
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns %TRUE if success, %FALSE otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or %NULL if @action does not implement this interface.
         */
        get_description(i: number): string | null;
        get_description(...args: never[]): any;
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
         * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if @action does not implement this interface.
         */
        get_n_actions(): number;
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
         * @returns a name string, or %NULL if @action does not implement this interface.
         */
        get_name(i: number): string | null;
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         */
        vfunc_get_description(i: number): string | null;
        vfunc_get_description(...args: never[]): any;
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
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         */
        vfunc_get_n_actions(): number;
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
        vfunc_get_name(i: number): string | null;
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         */
        vfunc_set_description(i: number, desc: string): boolean;
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an #AtkLayer which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from @component
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for @component
         * @param height height to set for @component
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns %TRUE or %FALSE whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns %TRUE or %FALSE whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for @component
         * @param height height to set for @component
         * @returns %TRUE or %FALSE whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
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
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from @component
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for @component
         * @param height height to set for @component
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for @component
         * @param height height to set for @component
         */
        vfunc_set_size(width: number, height: number): boolean;
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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module CodepointList {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class CodepointList extends GObject.Object {
        // Constructors of Gucharmap.CodepointList

        constructor(properties?: Partial<CodepointList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gucharmap.CodepointList

        vfunc_get_char(index: number): number;
        vfunc_get_index(wc: number): number;
        vfunc_get_last_index(): number;

        // Own methods of Gucharmap.CodepointList

        get_char(index: number): number;
        get_index(wc: number): number;
        get_last_index(): number;
    }

    module ScriptChaptersModel {
        // Constructor properties interface

        interface ConstructorProps
            extends ChaptersModel.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.TreeDragDest.ConstructorProps,
                Gtk.TreeDragSource.ConstructorProps,
                Gtk.TreeModel.ConstructorProps,
                Gtk.TreeSortable.ConstructorProps {}
    }

    class ScriptChaptersModel
        extends ChaptersModel
        implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable
    {
        // Constructors of Gucharmap.ScriptChaptersModel

        constructor(properties?: Partial<ScriptChaptersModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScriptChaptersModel;

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
        getv(names: string[], values: GObject.Value[]): void;
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
        vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        set(...args: never[]): any;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScriptCodepointList {
        // Constructor properties interface

        interface ConstructorProps extends CodepointList.ConstructorProps {}
    }

    class ScriptCodepointList extends CodepointList {
        // Constructors of Gucharmap.ScriptCodepointList

        constructor(properties?: Partial<ScriptCodepointList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScriptCodepointList;

        // Own methods of Gucharmap.ScriptCodepointList

        /**
         * Appends the characters in `script` to the codepoint list.
         * @param script the script name
         * @returns %TRUE on success, %FALSE if there is no such script, in which case the codepoint list is not changed.
         */
        append_script(script: string): boolean;
        /**
         * Sets the script for the codepoint list.
         * @param script the script name
         * @returns %TRUE on success, %FALSE if there is no such script, in which case the script is not changed.
         */
        set_script(script: string): boolean;
        /**
         * Sets multiple scripts for the codepoint list. Codepoints are sorted
         * according to their order in `scripts`.
         * @param scripts NULL-terminated array of script names
         * @returns %TRUE on success, %FALSE if any of the scripts don’t exist, in which case the script is not changed.
         */
        set_scripts(scripts: string): boolean;
    }

    type BlockChaptersModelClass = typeof BlockChaptersModel;
    abstract class BlockChaptersModelPrivate {
        // Constructors of Gucharmap.BlockChaptersModelPrivate

        _init(...args: any[]): void;
    }

    type BlockCodepointListClass = typeof BlockCodepointList;
    abstract class BlockCodepointListPrivate {
        // Constructors of Gucharmap.BlockCodepointListPrivate

        _init(...args: any[]): void;
    }

    type ChaptersModelClass = typeof ChaptersModel;
    class ChaptersModelPrivate {
        // Own fields of Gucharmap.ChaptersModelPrivate

        book_list: CodepointList;

        // Constructors of Gucharmap.ChaptersModelPrivate

        _init(...args: any[]): void;
    }

    type ChaptersViewClass = typeof ChaptersView;
    abstract class ChaptersViewPrivate {
        // Constructors of Gucharmap.ChaptersViewPrivate

        _init(...args: any[]): void;
    }

    type CharmapClass = typeof Charmap;
    abstract class CharmapPrivate {
        // Constructors of Gucharmap.CharmapPrivate

        _init(...args: any[]): void;
    }

    type ChartableAccessibleClass = typeof ChartableAccessible;
    type ChartableCellAccessibleClass = typeof ChartableCellAccessible;
    type ChartableClass = typeof Chartable;
    class ChartablePrivate {
        // Own fields of Gucharmap.ChartablePrivate

        vadjustment: Gtk.Adjustment;
        vadjustment_changed_handler_id: number;
        hadjustment: Gtk.Adjustment;
        hscroll_policy: number;
        vscroll_policy: number;
        minimal_column_width: number;
        minimal_row_height: number;
        n_padded_columns: number;
        n_padded_rows: number;
        rows: number;
        cols: number;
        page_size: number;
        page_first_cell: number;
        active_cell: number;
        pango_layout: Pango.Layout;
        zoom_window: Gtk.Widget;
        zoom_image_width: number;
        zoom_image_height: number;
        click_x: number;
        click_y: number;
        codepoint_list: CodepointList;
        last_cell: number;
        codepoint_list_changed: boolean;
        snap_pow2_enabled: number;
        zoom_mode_enabled: number;
        font_fallback: number;

        // Constructors of Gucharmap.ChartablePrivate

        _init(...args: any[]): void;
    }

    type CodepointListClass = typeof CodepointList;
    abstract class CodepointListPrivate {
        // Constructors of Gucharmap.CodepointListPrivate

        _init(...args: any[]): void;
    }

    type ScriptChaptersModelClass = typeof ScriptChaptersModel;
    abstract class ScriptChaptersModelPrivate {
        // Constructors of Gucharmap.ScriptChaptersModelPrivate

        _init(...args: any[]): void;
    }

    type ScriptCodepointListClass = typeof ScriptCodepointList;
    abstract class ScriptCodepointListPrivate {
        // Constructors of Gucharmap.ScriptCodepointListPrivate

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

export default Gucharmap;
// END
