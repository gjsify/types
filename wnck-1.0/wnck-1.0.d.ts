/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gtk from '@girs/gtk-2.0';
import type Gdk from '@girs/gdk-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Wnck {
    /**
     * Wnck-1.0
     */

    export namespace ClientType {
        export const $gtype: GObject.GType<ClientType>;
    }

    /**
     * Type describing the role of the libwnck user.
     */
    enum ClientType {
        /**
         * the libwnck user is a normal application.
         */
        APPLICATION,
        /**
         * the libwnck user is an utility application dealing
         * with window management, like pagers and taskbars.
         */
        PAGER,
    }
    export namespace MotionDirection {
        export const $gtype: GObject.GType<MotionDirection>;
    }

    /**
     * Type defining a direction in which to search a neighbor #WnckWorkspace.
     */
    enum MotionDirection {
        /**
         * search a neighbor #WnckWorkspace above another
         * #WnckWorkspace.
         */
        UP,
        /**
         * search a neighbor #WnckWorkspace below another
         * #WnckWorkspace.
         */
        DOWN,
        /**
         * search a neighbor #WnckWorkspace at the left of another
         * #WnckWorkspace.
         */
        LEFT,
        /**
         * search a neighbor #WnckWorkspace at the right of another
         * #WnckWorkspace.
         */
        RIGHT,
    }
    export namespace PagerDisplayMode {
        export const $gtype: GObject.GType<PagerDisplayMode>;
    }

    /**
     * Mode defining what a #WnckPager will display.
     */
    enum PagerDisplayMode {
        /**
         * the #WnckPager will only display the names of the
         * workspaces.
         */
        NAME,
        /**
         * the #WnckPager will display a representation
         * for each window in the workspaces.
         */
        CONTENT,
    }
    export namespace PagerLayoutPolicy {
        export const $gtype: GObject.GType<PagerLayoutPolicy>;
    }

    /**
     * Policy defining the geometry management used by a #WnckPager.
     */
    enum PagerLayoutPolicy {
        /**
         * the #WnckPager geometry management is
         * "height for width" when in vertical orientation, or "width for height" when
         * in horizontal orientation. This is the default behavior.
         */
        AUTOMATIC,
        /**
         * the #WnckPager calculates its
         * width in proportion to a preset height. This can be used for a vertical
         * #WnckPager inside a horizontal panel.
         */
        WIDTH_FOR_HEIGHT,
        /**
         * the #WnckPager calculates its
         * height in proportion to a preset width. This can be used for a horizontal
         * #WnckPager inside a vertical panel.
         */
        HEIGHT_FOR_WIDTH,
    }
    export namespace TasklistGroupingType {
        export const $gtype: GObject.GType<TasklistGroupingType>;
    }

    /**
     * Type defining the policy of the #WnckTasklist for grouping multiple
     * #WnckWindow of the same #WnckApplication.
     */
    enum TasklistGroupingType {
        /**
         * never group multiple #WnckWindow of the same
         * #WnckApplication.
         */
        NEVER_GROUP,
        /**
         * group multiple #WnckWindow of the same
         * #WnckApplication for some #WnckApplication, when there is not enough place
         * to have a good-looking list of all #WnckWindow.
         */
        AUTO_GROUP,
        /**
         * always group multiple #WnckWindow of the same
         * #WnckApplication, for all #WnckApplication.
         */
        ALWAYS_GROUP,
    }
    export namespace WindowGravity {
        export const $gtype: GObject.GType<WindowGravity>;
    }

    /**
     * Flag used when changing the geometry of a #WnckWindow. This is the gravity
     * point to use as a reference for the new position.
     */
    enum WindowGravity {
        /**
         * keep the current gravity point.
         */
        CURRENT,
        /**
         * use the left top corner of the frame window
         * as gravity point.
         */
        NORTHWEST,
        /**
         * use the center of the frame window's top side as
         * gravity point.
         */
        NORTH,
        /**
         * use the right top corner of the frame window
         * as gravity point.
         */
        NORTHEAST,
        /**
         * use the center of the frame window's left side as
         * gravity point.
         */
        WEST,
        /**
         * use the center of the frame window as gravity
         * point.
         */
        CENTER,
        /**
         * use the center of the frame window's right side
         * as gravity point.
         */
        EAST,
        /**
         * use the left bottom corner of the frame
         * window as gravity point.
         */
        SOUTHWEST,
        /**
         * use the center of the frame window's bottom side
         * as gravity point.
         */
        SOUTH,
        /**
         * use the right bottom corner of the frame
         * window as gravity point.
         */
        SOUTHEAST,
        /**
         * use the left top corner of the client window as
         * gravity point.
         */
        STATIC,
    }
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

    /**
     * Type describing the semantic type of a #WnckWindow.
     */
    enum WindowType {
        /**
         * the window is a normal window.
         */
        NORMAL,
        /**
         * the window is a desktop.
         */
        DESKTOP,
        /**
         * the window is a dock or a panel.
         */
        DOCK,
        /**
         * the window is a dialog window.
         */
        DIALOG,
        /**
         * the window is a tearoff toolbar.
         */
        TOOLBAR,
        /**
         * the window is a tearoff menu.
         */
        MENU,
        /**
         * the window is a small persistent utility window, such
         * as a palette or toolbox.
         */
        UTILITY,
        /**
         * the window is a splash screen displayed as an
         * application is starting up.
         */
        SPLASHSCREEN,
    }
    export namespace _LayoutCorner {
        export const $gtype: GObject.GType<_LayoutCorner>;
    }

    enum _LayoutCorner {
        TOPLEFT,
        TOPRIGHT,
        BOTTOMRIGHT,
        BOTTOMLEFT,
    }
    export namespace _LayoutOrientation {
        export const $gtype: GObject.GType<_LayoutOrientation>;
    }

    enum _LayoutOrientation {
        HORIZONTAL,
        VERTICAL,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    /**
     * Sets the semantic type of `window` to %WNCK_WINDOW_DOCK.
     * @param window a <classname>GtkWindow</classname>.
     */
    function gtk_window_set_dock_type(window: Gtk.Window): void;
    /**
     * Looks for the X resource usage of the application with process ID `pid` on
     * display `gdisplay`. If no resource usage can be found, then all fields of
     * `usage` are set to 0.
     *
     * In order to find the resource usage of an application that does not have an
     * X window visible to libwnck (panel applets do not have any toplevel windows,
     * for example), wnck_pid_read_resource_usage() walks through the whole tree of
     * X windows. Since this walk is expensive in CPU, a cache is created. This
     * cache is updated in the background. This means there is a non-null
     * probability that no resource usage will be found for an application, even if
     * it is an X client. If this happens, calling wnck_pid_read_resource_usage()
     * again after a few seconds should work.
     *
     * To properly work, this function requires the XRes extension on the X server.
     * @param gdk_display a <classname>GdkDisplay</classname>.
     * @param pid a process ID.
     * @param usage return location for the X resource usage of the application with process ID @pid.
     */
    function pid_read_resource_usage(gdk_display: Gdk.Display, pid: number, usage: ResourceUsage): void;
    /**
     * Sets the role of the libwnck user.
     *
     * The default role is %WNCK_CLIENT_TYPE_APPLICATION. Therefore, for
     * applications providing some window management features, like pagers or
     * tasklists, it is important to set the role to %WNCK_CLIENT_TYPE_PAGER for
     * libwnck to properly work.
     * @param ewmh_sourceindication_client_type a role for the client.
     */
    function set_client_type(ewmh_sourceindication_client_type: ClientType): void;
    /**
     * Looks for the X resource usage of the application owning the X window ID
     * `xid` on display `gdisplay`. If no resource usage can be found, then all
     * fields of `usage` are set to 0.
     *
     * To properly work, this function requires the XRes extension on the X server.
     * @param gdk_display a <classname>GdkDisplay</classname>.
     * @param xid an X window ID.
     * @param usage return location for the X resource usage of the application owning the X window ID @xid.
     */
    function xid_read_resource_usage(gdk_display: Gdk.Display, xid: number, usage: ResourceUsage): void;
    export namespace WindowActions {
        export const $gtype: GObject.GType<WindowActions>;
    }

    /**
     * Type used as a bitmask to describe the actions that can be done for a
     * #WnckWindow.
     */
    enum WindowActions {
        /**
         * the window may be moved around the screen.
         */
        MOVE,
        /**
         * the window may be resized.
         */
        RESIZE,
        /**
         * the window may be shaded.
         */
        SHADE,
        /**
         * the window may be sticked.
         */
        STICK,
        /**
         * the window may be maximized
         * horizontally.
         */
        MAXIMIZE_HORIZONTALLY,
        /**
         * the window may be maximized
         * vertically.
         */
        MAXIMIZE_VERTICALLY,
        /**
         * the window may be moved between
         * workspaces, or (un)pinned.
         */
        CHANGE_WORKSPACE,
        /**
         * the window may be closed.
         */
        CLOSE,
        /**
         * the window may be unmaximized
         * horizontally.
         */
        UNMAXIMIZE_HORIZONTALLY,
        /**
         * the window may be maximized
         * vertically.
         */
        UNMAXIMIZE_VERTICALLY,
        /**
         * the window may be unshaded.
         */
        UNSHADE,
        /**
         * the window may be unsticked.
         */
        UNSTICK,
        /**
         * the window may be minimized.
         */
        MINIMIZE,
        /**
         * the window may be unminimized.
         */
        UNMINIMIZE,
        /**
         * the window may be maximized.
         */
        MAXIMIZE,
        /**
         * the window may be unmaximized.
         */
        UNMAXIMIZE,
        /**
         * the window may be brought to fullscreen.
         */
        FULLSCREEN,
        /**
         * the window may be made above other windows.
         */
        ABOVE,
        /**
         * the window may be made below other windows.
         */
        BELOW,
    }
    export namespace WindowMoveResizeMask {
        export const $gtype: GObject.GType<WindowMoveResizeMask>;
    }

    /**
     * Flag used as a bitmask when changing the geometry of a #WnckWindow. This
     * indicates which part of the geometry should be changed.
     */
    enum WindowMoveResizeMask {
        /**
         * X coordinate of the window should be changed.
         */
        X,
        /**
         * Y coordinate of the window should be changed.
         */
        Y,
        /**
         * width of the window should be changed.
         */
        WIDTH,
        /**
         * height of the window should be changed.
         */
        HEIGHT,
    }
    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

    /**
     * Type used as a bitmask to describe the state of a #WnckWindow.
     */
    enum WindowState {
        /**
         * the window is minimized.
         */
        MINIMIZED,
        /**
         * the window is horizontically
         * maximized.
         */
        MAXIMIZED_HORIZONTALLY,
        /**
         * the window is vertically maximized.
         */
        MAXIMIZED_VERTICALLY,
        /**
         * the window is shaded.
         */
        SHADED,
        /**
         * the window should not be included on pagers.
         */
        SKIP_PAGER,
        /**
         * the window should not be included on
         * tasklists.
         */
        SKIP_TASKLIST,
        /**
         * the window is sticky (see
         * wnck_window_is_sticky()).
         */
        STICKY,
        /**
         * the window is not visible on its #WnckWorkspace
         * and viewport (when minimized, for example).
         */
        HIDDEN,
        /**
         * the window is fullscreen.
         */
        FULLSCREEN,
        /**
         * the window needs attention (because
         * the window requested activation but the window manager refused it, for
         * example).
         */
        DEMANDS_ATTENTION,
        /**
         * the window requires a response from the user.
         */
        URGENT,
        /**
         * the window is above other windows (see
         * wnck_window_make_above()).
         */
        ABOVE,
        /**
         * the window is below other windows (see
         * wnck_window_make_below()).
         */
        BELOW,
    }
    module ActionMenu {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Menu.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            window: any | any;
        }
    }

    /**
     * The #WnckActionMenu struct contains only private fields and should not be
     * directly accessed.
     */
    class ActionMenu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ActionMenu>;

        // Own properties of Wnck.ActionMenu

        // This accessor conflicts with another accessor's type in a parent class or interface.
        get window(): any | any;

        // Constructors of Wnck.ActionMenu

        constructor(properties?: Partial<ActionMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](window: Window): ActionMenu;
        // Conflicted with Gtk.Menu.new

        static ['new'](...args: never[]): any;

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

    module Application {
        // Signal callback interfaces

        interface IconChanged {
            (): void;
        }

        interface NameChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #WnckApplication struct contains only private fields and should not be
     * directly accessed.
     */
    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Constructors of Wnck.Application

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Wnck.Application

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'icon-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'icon-changed', callback: (_source: this) => void): number;
        emit(signal: 'icon-changed'): void;
        connect(signal: 'name-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'name-changed', callback: (_source: this) => void): number;
        emit(signal: 'name-changed'): void;

        // Own static methods of Wnck.Application

        /**
         * Gets the #WnckApplication corresponding to the group leader with `xwindow`
         * as X window ID.
         * @param xwindow the X window ID of a group leader.
         */
        static get(xwindow: number): Application;

        // Own virtual methods of Wnck.Application

        vfunc_icon_changed(): void;
        vfunc_name_changed(): void;

        // Own methods of Wnck.Application

        /**
         * Gets whether a default fallback icon is used for `app` (because none
         * was set on `app)`.
         * @returns %TRUE if the icon for @app is a fallback, %FALSE otherwise.
         */
        get_icon_is_fallback(): boolean;
        /**
         * Gets the icon name of `app` (to be used when `app` is minimized). Since
         * there is no way to properly find this name, various suboptimal heuristics
         * are used to find it.
         * @returns the icon name of @app, or a fallback icon name if no icon name is available.
         */
        get_icon_name(): string;
        /**
         * Gets the number of #WnckWindow belonging to `app`.
         * @returns the number of #WnckWindow belonging to @app.
         */
        get_n_windows(): number;
        /**
         * Gets the name of `app`. Since there is no way to properly find this name,
         * various suboptimal heuristics are used to find it. GTK+ should probably have
         * a function to allow applications to set the _NET_WM_NAME property on the
         * group leader as the application name, and the <ulink
         * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink>
         * should say that this is where the application name goes.
         * @returns the name of @app, or a fallback name if no name is available.
         */
        get_name(): string;
        /**
         * Gets the process ID of `app`.
         * @returns the process ID of @app, or 0 if none is available.
         */
        get_pid(): number;
        /**
         * Gets the startup sequence ID used for startup notification of `app`.
         * @returns the startup sequence ID used for startup notification of @app, or %NULL if none is available.
         */
        get_startup_id(): string;
        /**
         * Gets the list of #WnckWindow belonging to `app`.
         * @returns the list of #WnckWindow belonging to @app, or %NULL if the application contains no window. The list should not be modified nor freed, as it is owned by @app.
         */
        get_windows(): Window[];
        /**
         * Gets the X window ID of the group leader window for `app`.
         * @returns the X window ID of the group leader window for @app.
         */
        get_xid(): number;
    }

    module ClassGroup {
        // Signal callback interfaces

        interface IconChanged {
            (): void;
        }

        interface NameChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #WnckClassGroup struct contains only private fields and should not be
     * directly accessed.
     */
    class ClassGroup extends GObject.Object {
        static $gtype: GObject.GType<ClassGroup>;

        // Constructors of Wnck.ClassGroup

        constructor(properties?: Partial<ClassGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Wnck.ClassGroup

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'icon-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'icon-changed', callback: (_source: this) => void): number;
        emit(signal: 'icon-changed'): void;
        connect(signal: 'name-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'name-changed', callback: (_source: this) => void): number;
        emit(signal: 'name-changed'): void;

        // Own static methods of Wnck.ClassGroup

        /**
         * Gets the #WnckClassGroup corresponding to `res_class`.
         * @param res_class name of the sought resource class.
         */
        static get(res_class: string): ClassGroup;

        // Own methods of Wnck.ClassGroup

        /**
         * Gets an human-readable name for `class_group`. Since there is no way to
         * properly find this name, a suboptimal heuristic is used to find it. The name
         * is the name of all #WnckApplication for each #WnckWindow in `class_group` if
         * they all have the same name. If all #WnckApplication don't have the same
         * name, the name is the name of all #WnckWindow in `class_group` if they all
         * have the same name. If all #WnckWindow don't have the same name, the
         * resource class name is used.
         * @returns an human-readable name for @class_group.
         */
        get_name(): string;
        /**
         * Gets the resource class name for `class_group`.
         * @returns the resource class name of @class_group, or an empty string if the group has no resource class name.
         */
        get_res_class(): string;
        /**
         * Gets the list of #WnckWindow that are grouped in `class_group`.
         * @returns the list of #WnckWindow grouped in @class_group, or %NULL if the group contains no window. The list should not be modified nor freed, as it is owned by @class_group.
         */
        get_windows(): Window[];
    }

    module Pager {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * The #WnckPager struct contains only private fields and should not be
     * directly accessed.
     */
    class Pager extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Pager>;

        // Constructors of Wnck.Pager

        constructor(properties?: Partial<Pager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](screen: Screen): Pager;

        // Own methods of Wnck.Pager

        /**
         * Sets the display mode for `pager` to `mode`.
         * @param mode a display mode.
         */
        set_display_mode(mode: PagerDisplayMode): void;
        /**
         * Sets the layout policy for `pager` to `policy`.
         * @param policy a layout policy.
         */
        set_layout_policy(policy: PagerLayoutPolicy): void;
        /**
         * Tries to change the number of rows in the layout of #WnckWorkspace on the
         * #WnckScreen `pager` is watching. Since no more than one application should
         * set this property of a #WnckScreen at a time, setting the layout is not
         * guaranteed to work.
         *
         * If `pager` has not been added to a widget hierarchy, the call will fail
         * because `pager` can't know the screen on which to modify the layout.
         * @param n_rows the number of rows to use for the layout of #WnckWorkspace on the #WnckScreen @pager is watching.
         * @returns %TRUE if the layout of #WnckWorkspace has been successfully changed or did not need to be changed, %FALSE otherwise.
         */
        set_n_rows(n_rows: number): boolean;
        /**
         * Tries to change the orientation of the layout of #WnckWorkspace on the
         * #WnckScreen `pager` is watching. Since no more than one application should
         * set this property of a #WnckScreen at a time, setting the layout is not
         * guaranteed to work.
         *
         * If `orientation` is %GTK_ORIENTATION_HORIZONTAL, the #WnckWorkspace will be
         * laid out in rows, with the first #WnckWorkspace in the top left corner.
         *
         * If `orientation` is %GTK_ORIENTATION_VERTICAL, the #WnckWorkspace will be
         * laid out in columns, with the first #WnckWorkspace in the top left corner.
         *
         * For example, if the layout contains one row, but the orientation of the
         * layout is vertical, the #WnckPager will display a column of #WnckWorkspace.
         *
         * If `pager` has not been added to a widget hierarchy, the call will fail
         * because `pager` can't know the screen on which to modify the orientation.
         * @param orientation orientation to use for the layout of #WnckWorkspace on the #WnckScreen @pager is watching.
         * @returns %TRUE if the layout of #WnckWorkspace has been successfully changed or did not need to be changed, %FALSE otherwise.
         */
        set_orientation(orientation: Gtk.Orientation): boolean;
        /**
         * Does nothing.
         * @param screen a #WnckScreen.
         */
        set_screen(screen: Screen): void;
        /**
         * Sets the shadow type for `pager` to `shadow_type`. The main use of this
         * function is proper integration of #WnckPager in panels with non-system
         * backgrounds.
         * @param shadow_type a shadow type.
         */
        set_shadow_type(shadow_type: Gtk.ShadowType): void;
        /**
         * Sets `pager` to display all #WnckWorkspace or not, according to
         * `show_all_workspaces`.
         * @param show_all_workspaces whether to display all #WnckWorkspace in @pager.
         */
        set_show_all(show_all_workspaces: boolean): void;

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
         * #GtkBuilder calls this function if a "constructor" has been
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
         * This is called for each unknown element under &lt;child&gt;.
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
         * #GtkBuilder sets the name based on the the
         * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
         * used to construct the `buildable`.
         * @returns the name set with gtk_buildable_set_name()
         */
        get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>.
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
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
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
         * #GtkBuilder calls this function if a "constructor" has been
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
         * This is called for each unknown element under &lt;child&gt;.
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
         * #GtkBuilder sets the name based on the the
         * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
         * used to construct the `buildable`.
         */
        vfunc_get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>.
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        vfunc_set_name(name: string): void;
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

    module Screen {
        // Signal callback interfaces

        interface ActiveWindowChanged {
            (previously_active_window: Window): void;
        }

        interface ActiveWorkspaceChanged {
            (previously_active_space: Workspace): void;
        }

        interface ApplicationClosed {
            (app: Application): void;
        }

        interface ApplicationOpened {
            (app: Application): void;
        }

        interface BackgroundChanged {
            (): void;
        }

        interface ClassGroupClosed {
            (class_group: ClassGroup): void;
        }

        interface ClassGroupOpened {
            (class_group: ClassGroup): void;
        }

        interface ShowingDesktopChanged {
            (): void;
        }

        interface ViewportsChanged {
            (): void;
        }

        interface WindowClosed {
            (window: Window): void;
        }

        interface WindowManagerChanged {
            (): void;
        }

        interface WindowOpened {
            (window: Window): void;
        }

        interface WindowStackingChanged {
            (): void;
        }

        interface WorkspaceCreated {
            (space: Workspace): void;
        }

        interface WorkspaceDestroyed {
            (space: Workspace): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #WnckScreen struct contains only private fields and should not be
     * directly accessed.
     */
    class Screen extends GObject.Object {
        static $gtype: GObject.GType<Screen>;

        // Constructors of Wnck.Screen

        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Wnck.Screen

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'active-window-changed',
            callback: (_source: this, previously_active_window: Window) => void,
        ): number;
        connect_after(
            signal: 'active-window-changed',
            callback: (_source: this, previously_active_window: Window) => void,
        ): number;
        emit(signal: 'active-window-changed', previously_active_window: Window): void;
        connect(
            signal: 'active-workspace-changed',
            callback: (_source: this, previously_active_space: Workspace) => void,
        ): number;
        connect_after(
            signal: 'active-workspace-changed',
            callback: (_source: this, previously_active_space: Workspace) => void,
        ): number;
        emit(signal: 'active-workspace-changed', previously_active_space: Workspace): void;
        connect(signal: 'application-closed', callback: (_source: this, app: Application) => void): number;
        connect_after(signal: 'application-closed', callback: (_source: this, app: Application) => void): number;
        emit(signal: 'application-closed', app: Application): void;
        connect(signal: 'application-opened', callback: (_source: this, app: Application) => void): number;
        connect_after(signal: 'application-opened', callback: (_source: this, app: Application) => void): number;
        emit(signal: 'application-opened', app: Application): void;
        connect(signal: 'background-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'background-changed', callback: (_source: this) => void): number;
        emit(signal: 'background-changed'): void;
        connect(signal: 'class-group-closed', callback: (_source: this, class_group: ClassGroup) => void): number;
        connect_after(signal: 'class-group-closed', callback: (_source: this, class_group: ClassGroup) => void): number;
        emit(signal: 'class-group-closed', class_group: ClassGroup): void;
        connect(signal: 'class-group-opened', callback: (_source: this, class_group: ClassGroup) => void): number;
        connect_after(signal: 'class-group-opened', callback: (_source: this, class_group: ClassGroup) => void): number;
        emit(signal: 'class-group-opened', class_group: ClassGroup): void;
        connect(signal: 'showing-desktop-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'showing-desktop-changed', callback: (_source: this) => void): number;
        emit(signal: 'showing-desktop-changed'): void;
        connect(signal: 'viewports-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'viewports-changed', callback: (_source: this) => void): number;
        emit(signal: 'viewports-changed'): void;
        connect(signal: 'window-closed', callback: (_source: this, window: Window) => void): number;
        connect_after(signal: 'window-closed', callback: (_source: this, window: Window) => void): number;
        emit(signal: 'window-closed', window: Window): void;
        connect(signal: 'window-manager-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'window-manager-changed', callback: (_source: this) => void): number;
        emit(signal: 'window-manager-changed'): void;
        connect(signal: 'window-opened', callback: (_source: this, window: Window) => void): number;
        connect_after(signal: 'window-opened', callback: (_source: this, window: Window) => void): number;
        emit(signal: 'window-opened', window: Window): void;
        connect(signal: 'window-stacking-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'window-stacking-changed', callback: (_source: this) => void): number;
        emit(signal: 'window-stacking-changed'): void;
        connect(signal: 'workspace-created', callback: (_source: this, space: Workspace) => void): number;
        connect_after(signal: 'workspace-created', callback: (_source: this, space: Workspace) => void): number;
        emit(signal: 'workspace-created', space: Workspace): void;
        connect(signal: 'workspace-destroyed', callback: (_source: this, space: Workspace) => void): number;
        connect_after(signal: 'workspace-destroyed', callback: (_source: this, space: Workspace) => void): number;
        emit(signal: 'workspace-destroyed', space: Workspace): void;

        // Own static methods of Wnck.Screen

        /**
         * Frees the content of `layout`. This does not free `layout` itself, so you
         * might want to free `layout` yourself after calling this.
         * @param layout a #WnckWorkspaceLayout.
         */
        static free_workspace_layout(layout: WorkspaceLayout): void;
        /**
         * Gets the #WnckScreen for a given screen on the default display.
         * @param index screen number, starting from 0.
         */
        static get(index: number): Screen;
        /**
         * Gets the default #WnckScreen on the default display.
         */
        static get_default(): Screen;
        /**
         * Gets the #WnckScreen for the root window at `root_window_id,` or
         * %NULL if no #WnckScreen exists for this root window.
         *
         * This function does not work if wnck_screen_get() was not called for the
         * sought #WnckScreen before, and returns %NULL.
         * @param root_window_id an X window ID.
         */
        static get_for_root(root_window_id: number): Screen;

        // Own virtual methods of Wnck.Screen

        vfunc_active_window_changed(previous_window: Window): void;
        vfunc_active_workspace_changed(previous_workspace: Workspace): void;
        vfunc_application_closed(app: Application): void;
        vfunc_application_opened(app: Application): void;
        vfunc_background_changed(): void;
        vfunc_class_group_closed(class_group: ClassGroup): void;
        vfunc_class_group_opened(class_group: ClassGroup): void;
        vfunc_showing_desktop_changed(): void;
        vfunc_viewports_changed(): void;
        vfunc_window_closed(window: Window): void;
        vfunc_window_manager_changed(): void;
        vfunc_window_opened(window: Window): void;
        vfunc_window_stacking_changed(): void;
        vfunc_workspace_created(space: Workspace): void;
        vfunc_workspace_destroyed(space: Workspace): void;

        // Own methods of Wnck.Screen

        /**
         * Calculates the layout of #WnckWorkspace, with additional information like
         * the row and column of the #WnckWorkspace with index `space_index`.
         * @param num_workspaces the number of #WnckWorkspace on @screen, or -1 to let wnck_screen_calc_workspace_layout() find this number.
         * @param space_index the index of a #Workspace.
         * @param layout return location for the layout of #WnckWorkspace with additional information.
         */
        calc_workspace_layout(num_workspaces: number, space_index: number, layout: WorkspaceLayout): void;
        /**
         * Asks the window manager to change the number of #WnckWorkspace on `screen`.
         * @param count the number of #WnckWorkspace to request.
         */
        change_workspace_count(count: number): void;
        /**
         * Synchronously and immediately updates the list of #WnckWindow on `screen`.
         * This bypasses the standard update mechanism, where the list of #WnckWindow
         * is updated in the idle loop.
         *
         * This is usually a bad idea for both performance and correctness reasons (to
         * get things right, you need to write model-view code that tracks changes, not
         * get a static list of open windows). However, this function can be useful for
         * small applications that just do something and then exit.
         */
        force_update(): void;
        /**
         * Gets the active #WnckWindow on `screen`. May return %NULL sometimes, since
         * not all window managers guarantee that a window is always active.
         * @returns the active #WnckWindow on @screen, or %NULL. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
         */
        get_active_window(): Window;
        /**
         * Gets the active #WnckWorkspace on `screen`. May return %NULL sometimes,
         * if libwnck is in a weird state due to the asynchronous nature of the
         * interaction with the window manager.
         * @returns the active #WnckWorkspace on @screen, or %NULL. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_active_workspace(): Workspace;
        /**
         * Gets the X window ID of the background pixmap of `screen`.
         * @returns the X window ID of the background pixmap of @screen.
         */
        get_background_pixmap(): number;
        /**
         * Gets the height of `screen`.
         * @returns the height of @screen.
         */
        get_height(): number;
        /**
         * Gets the index of `screen` on the display to which it belongs. The first
         * #WnckScreen has an index of 0.
         * @returns the index of @space on @screen, or -1 on errors.
         */
        get_number(): number;
        /**
         * Gets the previously active #WnckWindow on `screen`. May return %NULL
         * sometimes, since not all window managers guarantee that a window is always
         * active.
         * @returns the previously active #WnckWindow on @screen, or %NULL. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
         */
        get_previously_active_window(): Window;
        /**
         * Gets whether `screen` is in the "showing the desktop" mode. This mode is
         * changed when a #WnckScreen::showing-desktop-changed signal gets emitted.
         * @returns %TRUE if @window is fullscreen, %FALSE otherwise.
         */
        get_showing_desktop(): boolean;
        /**
         * Gets the width of `screen`.
         * @returns the width of @screen.
         */
        get_width(): number;
        /**
         * Gets the name of the window manager.
         * @returns the name of the window manager, or %NULL if the window manager does not comply with the <ulink url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink> specification.
         */
        get_window_manager_name(): string;
        /**
         * Gets the list of #WnckWindow on `screen`. The list is not in a defined
         * order, but should be "stable" (windows should not be reordered in it).
         * However, the stability of the list is established by the window manager, so
         * don't blame libwnck if it breaks down.
         * @returns the list of #WnckWindow on @screen, or %NULL if there is no window on @screen. The list should not be modified nor freed, as it is owned by @screen.
         */
        get_windows(): Window[];
        /**
         * Gets the list of #WnckWindow on `screen` in bottom-to-top order.
         * @returns the list of #WnckWindow in stacking order on @screen, or %NULL if there is no window on @screen. The list should not be modified nor freed, as it is owned by @screen.
         */
        get_windows_stacked(): Window[];
        /**
         * Gets the #WnckWorkspace numbered `workspace` on `screen`.
         * @param workspace a workspace index, starting from 0.
         * @returns the #WnckWorkspace numbered @workspace on @screen, or %NULL if no such workspace exists. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace(workspace: number): Workspace;
        /**
         * Gets the number of #WnckWorkspace on `screen`.
         * @returns the number of #WnckWorkspace on @screen.
         */
        get_workspace_count(): number;
        /**
         * Gets the index of `space` on `screen`. The first #WnckWorkspace has an
         * index of 0. See also wnck_workspace_get_number().
         * @param space a #WnckWorkspace.
         * @returns the index of @space on @screen, or -1 on errors.
         */
        get_workspace_index(space: Workspace): number;
        /**
         * Gets the neighbor #WnckWorkspace of `space` in the `direction` direction on
         * `screen`.
         * @param space a #WnckWorkspace.
         * @param direction direction in which to search the neighbor.
         * @returns the neighbor #WnckWorkspace of @space in the @direction direction on @screen, or %NULL if no such neighbor #WnckWorkspace exists. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace_neighbor(space: Workspace, direction: MotionDirection): Workspace;
        /**
         * Gets the list of #WnckWorkspace on `screen`. The list is ordered: the
         * first element in the list is the first #WnckWorkspace, etc..
         * @returns the list of #WnckWorkspace on @screen. The list should not be modified nor freed, as it is owned by @screen.
         */
        get_workspaces(): Workspace[];
        /**
         * Asks the window manager to move the viewport of the current #WnckWorkspace
         * on `screen`.
         * @param x X offset in pixels of viewport.
         * @param y Y offset in pixels of viewport.
         */
        move_viewport(x: number, y: number): void;
        /**
         * Gets whether the window manager for `screen` supports a certain hint from
         * the <ulink
         * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">Extended
         * Window Manager Hints specification</ulink> (EWMH).
         *
         * When using this function, keep in mind that the window manager can change
         * over time; so you should not use this function in a way that impacts
         * persistent application state. A common bug is that your application can
         * start up before the window manager does when the user logs in, and before
         * the window manager starts wnck_screen_net_wm_supports() will return %FALSE
         * for every property.
         *
         * See also gdk_x11_screen_supports_net_wm_hint() in GDK.
         * @param atom a property atom.
         * @returns %TRUE if the window manager for @screen supports the @atom hint, %FALSE otherwise.
         */
        net_wm_supports(atom: string): boolean;
        /**
         * Releases the ownership of the layout of #WnckWorkspace on `screen`.
         * `current_token` is used to verify that the caller is the owner of the layout.
         * If the verification fails, nothing happens.
         * @param current_token the token obtained through wnck_screen_try_set_workspace_layout().
         */
        release_workspace_layout(current_token: number): void;
        /**
         * Asks the window manager to set the "showing the desktop" mode on `screen`
         * according to `show`.
         * @param show whether to activate the "showing the desktop" mode on @screen.
         */
        toggle_showing_desktop(show: boolean): void;
        /**
         * Tries to modify the layout of #WnckWorkspace on `screen`. To do this, tries
         * to acquire ownership of the layout. If the current process is the owner of
         * the layout, `current_token` is used to determine if the caller is the owner
         * (there might be more than one part of the same process trying to set the
         * layout). Since no more than one application should set this property of
         * `screen` at a time, setting the layout is not guaranteed to work.
         *
         * If `rows` is 0, the actual number of rows will be determined based on
         * `columns` and the number of #WnckWorkspace. If `columns` is 0, the actual
         * number of columns will be determined based on `rows` and the number of
         * #WnckWorkspace. `rows` and `columns` must not be 0 at the same time.
         *
         * You have to release the ownership of the layout with
         * wnck_screen_release_workspace_layout() when you do not need it anymore.
         * @param current_token a token. Use 0 if you do not called wnck_screen_try_set_workspace_layout() before, or if you did not keep the old token.
         * @param rows the number of rows to use for the #WnckWorkspace layout.
         * @param columns the number of columns to use for the #WnckWorkspace layout.
         * @returns a token to use for future calls to wnck_screen_try_set_workspace_layout() and to wnck_screen_release_workspace_layout(), or 0 if the layout could not be set.
         */
        try_set_workspace_layout(current_token: number, rows: number, columns: number): number;
    }

    module Selector {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.MenuBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * The #WnckSelector struct contains only private fields and should not be
     * directly accessed.
     */
    class Selector extends Gtk.MenuBar implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Selector>;

        // Constructors of Wnck.Selector

        constructor(properties?: Partial<Selector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Selector;

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

    module Tasklist {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Container.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * The #WnckTasklist struct contains only private fields and should not be
     * directly accessed.
     */
    class Tasklist extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Tasklist>;

        // Constructors of Wnck.Tasklist

        constructor(properties?: Partial<Tasklist.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](screen: Screen): Tasklist;

        // Own methods of Wnck.Tasklist

        /**
         * Returns -1.
         * @returns -1.
         */
        get_minimum_height(): number;
        /**
         * Returns -1.
         * @returns -1.
         */
        get_minimum_width(): number;
        /**
         * Since a #WnckTasklist does not have a fixed size (#WnckWindow can be grouped
         * when needed, for example), the standard size request mechanism in GTK+ is
         * not enough to announce what sizes can be used by `tasklist`. The size hints
         * mechanism is a solution for this. See panel_applet_set_size_hints() for more
         * information.
         * @param n_elements return location for the number of elements in the array returned by this function. This number should always be pair.
         * @returns a list of size hints that can be used to allocate an appropriate size for @tasklist.
         */
        get_size_hint_list(n_elements: number): number;
        /**
         * Sets the relief type of the buttons in `tasklist` to `relief`. The main use of
         * this function is proper integration of #WnckTasklist in panels with
         * non-system backgrounds.
         * @param relief a relief type.
         */
        set_button_relief(relief: Gtk.ReliefStyle): void;
        /**
         * Sets the grouping policy for `tasklist` to `grouping`.
         * @param grouping a grouping policy.
         */
        set_grouping(grouping: TasklistGroupingType): void;
        /**
         * Sets the maximum size of buttons in `tasklist` before `tasklist` tries to
         * group #WnckWindow in the same #WnckApplication in only one button. This
         * limit is valid only when the grouping policy of `tasklist` is
         * %WNCK_TASKLIST_AUTO_GROUP.
         * @param limit a size in pixels.
         */
        set_grouping_limit(limit: number): void;
        /**
         * Sets `tasklist` to display #WnckWindow from all #WnckWorkspace or not,
         * according to `include_all_workspaces`.
         *
         * Note that if the active #WnckWorkspace has a viewport and if
         * `include_all_workspaces` is %FALSE, then only the #WnckWindow visible in the
         * viewport are displayed in `tasklist`. The rationale for this is that the
         * viewport is generally used to implement workspace-like behavior. A
         * side-effect of this is that, when using multiple #WnckWorkspace with
         * viewport, it is not possible to show all #WnckWindow from a #WnckWorkspace
         * (even those that are not visible in the viewport) in `tasklist` without
         * showing all #WnckWindow from all #WnckWorkspace.
         * @param include_all_workspaces whether to display #WnckWindow from all #WnckWorkspace in @tasklist.
         */
        set_include_all_workspaces(include_all_workspaces: boolean): void;
        /**
         * Does nothing.
         * @param size a minimum height in pixels.
         */
        set_minimum_height(size: number): void;
        /**
         * Does nothing.
         * @param size a minimum width in pixels.
         */
        set_minimum_width(size: number): void;
        /**
         * Does nothing.
         * @param screen a #WnckScreen.
         */
        set_screen(screen: Screen): void;
        /**
         * Sets `tasklist` to activate or not the #WnckWorkspace a #WnckWindow is on
         * when unminimizing it, according to `switch_workspace_on_unminimize`.
         *
         * FIXME: does it still work?
         * @param switch_workspace_on_unminimize whether to activate the #WnckWorkspace a #WnckWindow is on when unminimizing it.
         */
        set_switch_workspace_on_unminimize(switch_workspace_on_unminimize: boolean): void;

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

    module Window {
        // Signal callback interfaces

        interface ActionsChanged {
            (changed_mask: WindowActions, new_state: WindowActions): void;
        }

        interface GeometryChanged {
            (): void;
        }

        interface IconChanged {
            (): void;
        }

        interface NameChanged {
            (): void;
        }

        interface StateChanged {
            (changed_mask: WindowState, new_state: WindowState): void;
        }

        interface WorkspaceChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #WnckWindow struct contains only private fields and should not be
     * directly accessed.
     */
    class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        // Constructors of Wnck.Window

        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Wnck.Window

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'actions-changed',
            callback: (_source: this, changed_mask: WindowActions, new_state: WindowActions) => void,
        ): number;
        connect_after(
            signal: 'actions-changed',
            callback: (_source: this, changed_mask: WindowActions, new_state: WindowActions) => void,
        ): number;
        emit(signal: 'actions-changed', changed_mask: WindowActions, new_state: WindowActions): void;
        connect(signal: 'geometry-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'geometry-changed', callback: (_source: this) => void): number;
        emit(signal: 'geometry-changed'): void;
        connect(signal: 'icon-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'icon-changed', callback: (_source: this) => void): number;
        emit(signal: 'icon-changed'): void;
        connect(signal: 'name-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'name-changed', callback: (_source: this) => void): number;
        emit(signal: 'name-changed'): void;
        connect(
            signal: 'state-changed',
            callback: (_source: this, changed_mask: WindowState, new_state: WindowState) => void,
        ): number;
        connect_after(
            signal: 'state-changed',
            callback: (_source: this, changed_mask: WindowState, new_state: WindowState) => void,
        ): number;
        emit(signal: 'state-changed', changed_mask: WindowState, new_state: WindowState): void;
        connect(signal: 'workspace-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'workspace-changed', callback: (_source: this) => void): number;
        emit(signal: 'workspace-changed'): void;

        // Own static methods of Wnck.Window

        /**
         * Gets a preexisting #WnckWindow for the X window `xwindow`. This will not
         * create a #WnckWindow if none exists. The function is robust against bogus
         * window IDs.
         * @param xwindow an X window ID.
         */
        static get(xwindow: number): Window;

        // Own virtual methods of Wnck.Window

        vfunc_actions_changed(changed_mask: WindowActions, new_actions: WindowActions): void;
        vfunc_geometry_changed(): void;
        vfunc_icon_changed(): void;
        vfunc_name_changed(): void;
        vfunc_state_changed(changed_mask: WindowState, new_state: WindowState): void;
        vfunc_workspace_changed(): void;

        // Own methods of Wnck.Window

        /**
         * Asks the window manager to make `window` the active window. The
         * window manager may choose to raise `window` along with focusing it, and may
         * decide to refuse the request (to not steal the focus if there is a more
         * recent user activity, for example).
         *
         * This function existed before 2.10, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        activate(timestamp: number): void;
        /**
         * If `window` has transients, activates the most likely transient
         * instead of the window itself. Otherwise activates `window`.
         *
         * FIXME the ideal behavior of this function is probably to activate
         * the most recently active window among `window` and its transients.
         * This is probably best implemented on the window manager side.
         *
         * This function existed before 2.10, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        activate_transient(timestamp: number): void;
        /**
         * Closes `window`.
         *
         * This function existed before 2.6, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        close(timestamp: number): void;
        /**
         * Gets the actions that can be done for `window`.
         * @returns bitmask of actions that can be done for @window.
         */
        get_actions(): WindowActions;
        /**
         * Gets the #WnckApplication to which `window` belongs.
         * @returns the #WnckApplication to which @window belongs. The returned #WnckApplication is owned by libwnck and must not be referenced or unreferenced.
         */
        get_application(): Application;
        /**
         * Gets the #WnckClassGroup to which `window` belongs.
         * @returns the #WnckClassGroup to which @window belongs. The returned #WnckClassGroup is owned by libwnck and must not be referenced or unreferenced.
         */
        get_class_group(): ClassGroup;
        /**
         * Gets the size and position of `window,` as last received
         * in a ConfigureNotify event (i.e. this call does not round-trip
         * to the server, just gets the last size we were notified of).
         * The X and Y coordinates are relative to the root window.
         *
         * The window manager usually adds a frame around windows. If
         * you need to know the size of `window` with the frame, use
         * wnck_window_get_geometry().
         * @param xp return location for X coordinate in pixels of @window.
         * @param yp return location for Y coordinate in pixels of @window.
         * @param widthp return location for width in pixels of @window.
         * @param heightp return location for height in pixels of @window.
         */
        get_client_window_geometry(xp: number, yp: number, widthp: number, heightp: number): void;
        /**
         * Gets the size and position of `window,` including decorations. This
         * function uses the information last received in a ConfigureNotify
         * event and adjusts it according to the size of the frame that is
         * added by the window manager (this call does not round-trip to the
         * server, it just gets the last sizes that were notified). The
         * X and Y coordinates are relative to the root window.
         *
         * If you need to know the actual size of `window` ignoring the frame
         * added by the window manager, use wnck_window_get_client_window_geometry().
         * @param xp return location for X coordinate in pixels of @window.
         * @param yp return location for Y coordinate in pixels of @window.
         * @param widthp return location for width in pixels of @window.
         * @param heightp return location for height in pixels of @window.
         */
        get_geometry(xp: number, yp: number, widthp: number, heightp: number): void;
        /**
         * Gets the group leader of the group of windows to which `window` belongs.
         * @returns the group leader of the group of windows to which @window belongs, or the X window ID of @window if @window does not belong to any group.
         */
        get_group_leader(): number;
        /**
         * Gets whether a default fallback icon is used for `window` (because none
         * was set on `window)`.
         * @returns %TRUE if the icon for @window is a fallback, %FALSE otherwise.
         */
        get_icon_is_fallback(): boolean;
        /**
         * Gets the icon name of `window,` as it should be displayed for an icon
         * (minimized state). Always returns some value, even if `window` has no icon
         * name set; use wnck_window_has_icon_name() if you need to know whether the
         * returned icon name is "real" or not.
         *
         * Contrast with wnck_window_get_name(), which returns `window<`!-- -->'s
         * title, not its icon title.
         * @returns the icon name of @window, or a fallback icon name if no icon name is available.
         */
        get_icon_name(): string;
        /**
         * Gets the name of `window,` as it should be displayed in a pager
         * or tasklist. Always returns some value, even if `window` has no name
         * set; use wnck_window_has_name() if you need to know whether the returned
         * name is "real" or not.
         *
         * For icons titles, use wnck_window_get_icon_name() instead.
         * @returns the name of @window, or a fallback name if no name is available.
         */
        get_name(): string;
        /**
         * Gets the process ID of `window`.
         * @returns the process ID of @window, or 0 if none is available.
         */
        get_pid(): number;
        /**
         * Gets the #WnckScreen `window` is on.
         * @returns the #WnckScreen @window is on. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
         */
        get_screen(): Screen;
        /**
         * Gets the session ID for `window` in Latin-1 encoding.
         * NOTE: this is invalid UTF-8. You can't display this
         * string in a GTK+ widget without converting to UTF-8.
         * See wnck_window_get_session_id_utf8().
         * @returns the session ID for @window in Latin-1, or %NULL if @window has no session ID.
         */
        get_session_id(): string;
        /**
         * Gets the session ID for `window` in UTF-8 encoding.
         * The session ID should be in Latin-1 encoding, so the conversion should work,
         * but a broken client could set a session ID that might not be convertable to
         * UTF-8.
         * @returns the session ID for @window in UTF-8, or %NULL if @window has no session ID.
         */
        get_session_id_utf8(): string;
        /**
         * Gets the sort order of `window,` used for ordering of `window` in
         * #WnckSelector and #WnckTasklist. The sort order is an internal state in
         * libwnck. The initial value is defined when the window is created.
         * @returns the sort order of @window, or G_MAXINT if none is available.
         */
        get_sort_order(): number;
        /**
         * Gets the state of `window`.
         * @returns bitmask of active states for @window.
         */
        get_state(): WindowState;
        /**
         * Gets the semantic type of `window`.
         * @returns the semantic type of @window.
         */
        get_window_type(): WindowType;
        /**
         * Gets the current workspace `window` is on. If the window is pinned (on all
         * workspaces), or not on any workspaces, %NULL may be returned.
         * @returns the single current workspace @window is on, or %NULL. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace(): Workspace;
        /**
         * Gets the X window ID of `window`.
         * @returns the X window ID of @window.
         */
        get_xid(): number;
        /**
         * Checks whether or not `window` has an icon name.
         * wnck_window_get_icon_name() will always return some value, even if
         * `window` has no icon name set; wnck_window_has_icon_name() can
         * be used to tell if that icon name is real or not.
         *
         * (Note that if wnck_window_has_icon_name() returns %FALSE, but
         * wnck_window_has_name() returns %TRUE, then the name returned by
         * wnck_window_get_icon_name() is `window<`!-- -->'s name. Only when both
         * methods return %FALSE does wnck_window_get_icon_name() return a
         * generic fallback name.)
         * @returns %TRUE if wnck_window_get_icon_name() returns @window<!-- -->'s icon name, %FALSE if it returns a fallback name.
         */
        has_icon_name(): boolean;
        /**
         * Checks whether or not `window` has a name. wnck_window_get_name()
         * will always return some value, even if `window` has no name set;
         * wnck_window_has_name() can be used to tell if that name is
         * real or not.
         *
         * For icons titles, use wnck_window_has_icon_name() instead.
         * @returns %TRUE if wnck_window_get_name() returns @window<!-- -->'s name, %FALSE if it returns a fallback name.
         */
        has_name(): boolean;
        /**
         * Gets whether `window` is above other windows. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * See wnck_window_make_above() for more details on this state.
         * @returns %TRUE if @window is above other windows, %FALSE otherwise.
         */
        is_above(): boolean;
        /**
         * Gets whether `window` is the active window on its #WnckScreen.
         * @returns %TRUE if @window is the active window on its #WnckScreen, %FALSE otherwise.
         */
        is_active(): boolean;
        /**
         * Gets whether `window` is below other windows. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * See wnck_window_make_below() for more details on this state.
         * @returns %TRUE if @window is below other windows, %FALSE otherwise.
         */
        is_below(): boolean;
        /**
         * Gets whether `window` is fullscreen. Fullscreen state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is fullscreen, %FALSE otherwise.
         */
        is_fullscreen(): boolean;
        /**
         * Gets %TRUE if `window` appears in the current viewport of `workspace`.
         * @param workspace a #WnckWorkspace.
         * @returns %TRUE if @window appears in current viewport of @workspace, %FALSE otherwise.
         */
        is_in_viewport(workspace: Workspace): boolean;
        /**
         * Gets whether `window` is maximized. Maximization state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * As for GDK, "maximized" means both vertically and horizontally. If `window`
         * is maximized in only one direction, then `window` is not considered
         * maximized.
         * @returns %TRUE if @window is maximized in both directions, %FALSE otherwise.
         */
        is_maximized(): boolean;
        /**
         * Gets whether `window` is maximized horizontally. Horizontal maximization
         * state may change anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is maximized horizontally, %FALSE otherwise.
         */
        is_maximized_horizontally(): boolean;
        /**
         * Gets whether `window` is maximized vertically. vertiVal maximization
         * state may change anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is maximized vertically, %FALSE otherwise.
         */
        is_maximized_vertically(): boolean;
        /**
         * Gets whether `window` is minimized. Minimization state may change anytime
         * a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is minimized, %FALSE otherwise.
         */
        is_minimized(): boolean;
        /**
         * Gets whether `window` is the most recently activated window on its
         * #WnckScreen.
         *
         * The most recently activated window is identical to the active
         * window for click and sloppy focus methods (since a window is always
         * active in those cases) but differs slightly for mouse focus since
         * there often is no active window.
         * @returns %TRUE if @window was the most recently activated window on its #WnckScreen, %FALSE otherwise.
         */
        is_most_recently_activated(): boolean;
        /**
         * Gets whether `window` appears on `workspace`.
         * @param workspace a #WnckWorkspace.
         * @returns %TRUE if @window appears on @workspace, %FALSE otherwise.
         */
        is_on_workspace(workspace: Workspace): boolean;
        /**
         * Gets whether `window` is on all workspace. Pinned state may change
         * anytime a #WnckWindow::workspace-changed signal gets emitted, but not when
         * a #WnckWindow::state-changed gets emitted.
         * @returns %TRUE if @window is on all workspaces, %FALSE otherwise.
         */
        is_pinned(): boolean;
        /**
         * Gets whether `window` is shaded. Shade state may change anytime
         * a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is shaded, %FALSE otherwise.
         */
        is_shaded(): boolean;
        /**
         * Gets whether `window` is included on pagers. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is included on pagers, %FALSE otherwise.
         */
        is_skip_pager(): boolean;
        /**
         * Gets whether `window` is included on tasklists. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is included on tasklists, %FALSE otherwise.
         */
        is_skip_tasklist(): boolean;
        /**
         * Gets whether `window` is sticky. Sticky state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * Sticky here means "stuck to the glass", i.e. does not scroll with the
         * viewport. In GDK/GTK+ (e.g. gdk_window_stick()/gtk_window_stick()), sticky
         * means "stuck to the glass" and <emphasis>also</emphasis> that the window is
         * on all workspaces. But here it only means the viewport aspect of it.
         * @returns %TRUE if @window is "stuck to the glass", %FALSE otherwise.
         */
        is_sticky(): boolean;
        /**
         * Like wnck_window_is_on_workspace(), but also checks that
         * the window is in a visible state (i.e. not minimized or shaded).
         * @param workspace a #WnckWorkspace.
         * @returns %TRUE if @window appears on @workspace in normal state, %FALSE otherwise.
         */
        is_visible_on_workspace(workspace: Workspace): boolean;
        /**
         * Asks the window manager to start moving `window` via the keyboard.
         */
        keyboard_move(): void;
        /**
         * Asks the window manager to start resizing `window` via the keyboard.
         */
        keyboard_size(): void;
        /**
         * Asks the window manager to put `window` on top of most windows (`window` will
         * not be on top of focused fullscreen windows, of other windows with this
         * setting and of dock windows).
         */
        make_above(): void;
        /**
         * Asks the window manager to put `window` below most windows.
         */
        make_below(): void;
        /**
         * Asks the window manager to maximize `window`.
         */
        maximize(): void;
        /**
         * Asks the window manager to maximize horizontally `window`.
         */
        maximize_horizontally(): void;
        /**
         * Asks the window manager to maximize vertically `window`.
         */
        maximize_vertically(): void;
        /**
         * Minimizes `window`.
         */
        minimize(): void;
        /**
         * Asks the window manager to move `window` to `space`. If `window` was pinned, it
         * will also result in `window` being visible only on `space`.
         * @param space a #WnckWorkspace.
         */
        move_to_workspace(space: Workspace): void;
        /**
         * Gets whether `window` needs attention. This state may change anytime
         * a #WnckWindow::state-changed signal gets emitted.
         *
         * This state depends on flags such as the demands_attention and is_urgent
         * hints.
         * @returns %TRUE if @window needs attention, %FALSE otherwise.
         */
        needs_attention(): boolean;
        /**
         * Gets whether `window` or one of its transients needs attention. This state
         * may change anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window or one of its transients needs attention, %FALSE otherwise.
         */
        or_transient_needs_attention(): boolean;
        /**
         * Asks the window manager to put `window` on all workspaces.
         */
        pin(): void;
        /**
         * Asks the window manager to set the fullscreen state of `window` according to
         * `fullscreen`.
         * @param fullscreen whether to make @window fullscreen.
         */
        set_fullscreen(fullscreen: boolean): void;
        /**
         * Sets the size and position of `window`. The X and Y coordinates should be
         * relative to the root window.
         *
         * Note that the new size and position apply to `window` with its frame added
         * by the window manager. Therefore, using wnck_window_set_geometry() with
         * the values returned by wnck_window_get_geometry() should be a no-op, while
         * using wnck_window_set_geometry() with the values returned by
         * wnck_window_get_client_window_geometry() should reduce the size of `window`
         * and move it.
         * @param gravity the gravity point to use as a reference for the new position.
         * @param geometry_mask a bitmask containing flags for what should be set.
         * @param x new X coordinate in pixels of @window.
         * @param y new Y coordinate in pixels of @window.
         * @param width new width in pixels of @window.
         * @param height new height in pixels of @window.
         */
        set_geometry(
            gravity: WindowGravity,
            geometry_mask: WindowMoveResizeMask,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Sets the icon geometry for `window`. A typical use case for this is the
         * destination of the minimization animation of `window`.
         * @param x X coordinate in pixels.
         * @param y Y coordinate in pixels.
         * @param width width in pixels.
         * @param height height in pixels.
         */
        set_icon_geometry(x: number, y: number, width: number, height: number): void;
        /**
         * Asks the window manager to make `window` included or not included on pagers.
         * @param skip whether @window should be included on pagers.
         */
        set_skip_pager(skip: boolean): void;
        /**
         * Asks the window manager to make `window` included or not included on
         * tasklists.
         * @param skip whether @window should be included on tasklists.
         */
        set_skip_tasklist(skip: boolean): void;
        /**
         * Sets the sort order of `window`. The sort order is used for ordering of
         * `window` in #WnckSelector and #WnckTasklist.
         * @param order new sort order for @window.
         */
        set_sort_order(order: number): void;
        /**
         * Sets the semantic type of `window` to `wintype`.
         * @param wintype a semantic type.
         */
        set_window_type(wintype: WindowType): void;
        /**
         * Asks the window manager to shade `window`.
         */
        shade(): void;
        /**
         * Asks the window manager to keep the `window<`!-- -->'s position fixed on the
         * screen, even when the workspace or viewport scrolls.
         */
        stick(): void;
        /**
         * Gets whether one of the transients of `window` is the most
         * recently activated window. See
         * wnck_window_is_most_recently_activated() for a more complete
         * description of what is meant by most recently activated.  This
         * function is needed because clicking on a #WnckTasklist once will
         * activate a transient instead of `window` itself
         * (wnck_window_activate_transient), and clicking again should
         * minimize `window` and its transients.  (Not doing this can be
         * especially annoying in the case of modal dialogs that don't appear
         * in the #WnckTaslist).
         * @returns %TRUE if one of the transients of @window is the most recently activated window, %FALSE otherwise.
         */
        transient_is_most_recently_activated(): boolean;
        /**
         * Asks the window manager to not put `window` on top of most windows, and to
         * put it again in the stack with other windows.
         */
        unmake_above(): void;
        /**
         * Asks the window manager to not put `window` below most windows, and to
         * put it again in the stack with other windows.
         */
        unmake_below(): void;
        /**
         * Asks the window manager to unmaximize `window`.
         */
        unmaximize(): void;
        /**
         * Asks the window manager to unmaximize horizontally `window`.
         */
        unmaximize_horizontally(): void;
        /**
         * Asks the window manager to unmaximize vertically `window`.
         */
        unmaximize_vertically(): void;
        /**
         * Unminimizes `window` by activating it or one of its transients. See
         * wnck_window_activate_transient() for details on how the activation is done.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        unminimize(timestamp: number): void;
        /**
         * Asks the window manager to put `window` only in the currently active
         * workspace, if `window` was previously pinned. If `window` was not pinned,
         * does not change `window<`!-- -->'s workspace. If the active workspace
         * is not known for some reason (it should not happen much), sets
         * `window<`!-- -->'s workspace to the first workspace.
         */
        unpin(): void;
        /**
         * Asks the window manager to unshade `window`.
         */
        unshade(): void;
        /**
         * Asks the window manager to not have `window<`!-- -->'s position fixed on the
         * screen when the workspace or viewport scrolls.
         */
        unstick(): void;
    }

    module Workspace {
        // Signal callback interfaces

        interface NameChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #WnckWorkspace struct contains only private fields and should not be
     * directly accessed.
     */
    class Workspace extends GObject.Object {
        static $gtype: GObject.GType<Workspace>;

        // Constructors of Wnck.Workspace

        constructor(properties?: Partial<Workspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Wnck.Workspace

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'name-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'name-changed', callback: (_source: this) => void): number;
        emit(signal: 'name-changed'): void;

        // Own virtual methods of Wnck.Workspace

        vfunc_name_changed(): void;

        // Own methods of Wnck.Workspace

        /**
         * Asks the window manager to make `space` the active workspace. The window
         * manager may decide to refuse the request (to not steal the focus if there is
         * a more recent user activity, for example).
         *
         * This function existed before 2.10, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        activate(timestamp: number): void;
        /**
         * Changes the name of `space`.
         * @param name new name for @space.
         */
        change_name(name: string): void;
        /**
         * Gets the height of `space`.
         * @returns the height of @space.
         */
        get_height(): number;
        /**
         * Gets the column of `space` in the #WnckWorkspace layout. The first column
         * has an index of 0 and is always the left column, regardless of the starting
         * corner set for the layout and regardless of the default direction of the
         * environment (i.e., in both Left-To-Right and Right-To-Left environments).
         * @returns the column of @space in the #WnckWorkspace layout, or -1 on errors.
         */
        get_layout_column(): number;
        /**
         * Gets the row of `space` in the #WnckWorkspace layout. The first row has an
         * index of 0 and is always the top row, regardless of the starting corner set
         * for the layout.
         * @returns the row of @space in the #WnckWorkspace layout, or -1 on errors.
         */
        get_layout_row(): number;
        /**
         * Gets the human-readable name that should be used to refer to `space`. If
         * the user has not set a special name, a fallback like "Workspace 3" will be
         * used.
         * @returns the name of @space.
         */
        get_name(): string;
        /**
         * Gets the index of `space` on the #WnckScreen to which it belongs. The
         * first workspace has an index of 0.
         * @returns the index of @space on its #WnckScreen, or -1 on errors.
         */
        get_number(): number;
        /**
         * Gets the X coordinate of the viewport in `space`.
         * @returns the X coordinate of the viewport in @space, or 0 if @space does not contain a viewport.
         */
        get_viewport_x(): number;
        /**
         * Gets the Y coordinate of the viewport in `space`.
         * @returns the Y coordinate of the viewport in @space, or 0 if @space does not contain a viewport.
         */
        get_viewport_y(): number;
        /**
         * Gets the width of `space`.
         * @returns the width of @space.
         */
        get_width(): number;
        /**
         * Gets whether `space` contains a viewport.
         * @returns %TRUE if @space contains a viewport, %FALSE otherwise.
         */
        is_virtual(): boolean;
    }

    type ActionMenuClass = typeof ActionMenu;
    abstract class ActionMenuPrivate {
        static $gtype: GObject.GType<ActionMenuPrivate>;

        // Constructors of Wnck.ActionMenuPrivate

        _init(...args: any[]): void;
    }

    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;

        // Constructors of Wnck.ApplicationPrivate

        _init(...args: any[]): void;
    }

    type ClassGroupClass = typeof ClassGroup;
    abstract class ClassGroupPrivate {
        static $gtype: GObject.GType<ClassGroupPrivate>;

        // Constructors of Wnck.ClassGroupPrivate

        _init(...args: any[]): void;
    }

    type PagerClass = typeof Pager;
    abstract class PagerPrivate {
        static $gtype: GObject.GType<PagerPrivate>;

        // Constructors of Wnck.PagerPrivate

        _init(...args: any[]): void;
    }

    /**
     * The #WnckResourceUsage struct contains information about the total resource
     * usage of an X client, and the number of resources allocated for each
     * resource type.
     */
    class ResourceUsage {
        static $gtype: GObject.GType<ResourceUsage>;

        // Own fields of Wnck.ResourceUsage

        total_bytes_estimate: number;
        pixmap_bytes: number;
        n_pixmaps: number;
        n_windows: number;
        n_gcs: number;
        n_pictures: number;
        n_glyphsets: number;
        n_fonts: number;
        n_colormap_entries: number;
        n_passive_grabs: number;
        n_cursors: number;
        n_other: number;

        // Constructors of Wnck.ResourceUsage

        constructor(
            properties?: Partial<{
                total_bytes_estimate: number;
                pixmap_bytes: number;
                n_pixmaps: number;
                n_windows: number;
                n_gcs: number;
                n_pictures: number;
                n_glyphsets: number;
                n_fonts: number;
                n_colormap_entries: number;
                n_passive_grabs: number;
                n_cursors: number;
                n_other: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ScreenClass = typeof Screen;
    abstract class ScreenPrivate {
        static $gtype: GObject.GType<ScreenPrivate>;

        // Constructors of Wnck.ScreenPrivate

        _init(...args: any[]): void;
    }

    type SelectorClass = typeof Selector;
    abstract class SelectorPrivate {
        static $gtype: GObject.GType<SelectorPrivate>;

        // Constructors of Wnck.SelectorPrivate

        _init(...args: any[]): void;
    }

    type TasklistClass = typeof Tasklist;
    abstract class TasklistPrivate {
        static $gtype: GObject.GType<TasklistPrivate>;

        // Constructors of Wnck.TasklistPrivate

        _init(...args: any[]): void;
    }

    type WindowClass = typeof Window;
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;

        // Constructors of Wnck.WindowPrivate

        _init(...args: any[]): void;
    }

    type WorkspaceClass = typeof Workspace;
    /**
     * The #WnckWorkspaceLayout struct contains information about the layout of
     * #WnckWorkspace on a #WnckScreen, and the exact position of a specific
     * #WnckWorkspace.
     */
    class WorkspaceLayout {
        static $gtype: GObject.GType<WorkspaceLayout>;

        // Own fields of Wnck.WorkspaceLayout

        rows: number;
        cols: number;
        grid: number;
        grid_area: number;
        current_row: number;
        current_col: number;

        // Constructors of Wnck.WorkspaceLayout

        constructor(
            properties?: Partial<{
                rows: number;
                cols: number;
                grid: number;
                grid_area: number;
                current_row: number;
                current_col: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class WorkspacePrivate {
        static $gtype: GObject.GType<WorkspacePrivate>;

        // Constructors of Wnck.WorkspacePrivate

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

export default Wnck;

// END
