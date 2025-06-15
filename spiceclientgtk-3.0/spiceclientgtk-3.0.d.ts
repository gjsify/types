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
import type SpiceClientGLib from '@girs/spiceclientglib-2.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace SpiceClientGtk {
    /**
     * SpiceClientGtk-3.0
     */

    /**
     * Constants for key events.
     */

    /**
     * Constants for key events.
     */
    export namespace DisplayKeyEvent {
        export const $gtype: GObject.GType<DisplayKeyEvent>;
    }

    enum DisplayKeyEvent {
        /**
         * key press
         */
        PRESS,
        /**
         * key release
         */
        RELEASE,
        /**
         * key click (press and release)
         */
        CLICK,
    }
    namespace Display {
        // Signal callback interfaces

        interface GrabKeysPressed {
            (_source: Display): void;
        }

        interface KeyboardGrab {
            (_source: Display, status: number): void;
        }

        interface MouseGrab {
            (_source: Display, status: number): void;
        }

        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'grab-keys-pressed': GrabKeysPressed;
            'keyboard-grab': KeyboardGrab;
            'mouse-grab': MouseGrab;
            'notify::channel-id': GObject.Object.Notify;
            'notify::channel-id': GObject.Object.Notify;
            'notify::disable-inputs': GObject.Object.Notify;
            'notify::disable-inputs': GObject.Object.Notify;
            'notify::grab-keyboard': GObject.Object.Notify;
            'notify::grab-keyboard': GObject.Object.Notify;
            'notify::grab-mouse': GObject.Object.Notify;
            'notify::grab-mouse': GObject.Object.Notify;
            'notify::keypress-delay': GObject.Object.Notify;
            'notify::keypress-delay': GObject.Object.Notify;
            'notify::monitor-id': GObject.Object.Notify;
            'notify::monitor-id': GObject.Object.Notify;
            'notify::only-downscale': GObject.Object.Notify;
            'notify::only-downscale': GObject.Object.Notify;
            'notify::ready': GObject.Object.Notify;
            'notify::resize-guest': GObject.Object.Notify;
            'notify::resize-guest': GObject.Object.Notify;
            'notify::scaling': GObject.Object.Notify;
            'notify::session': GObject.Object.Notify;
            'notify::zoom-level': GObject.Object.Notify;
            'notify::zoom-level': GObject.Object.Notify;
            'notify::above-child': GObject.Object.Notify;
            'notify::above-child': GObject.Object.Notify;
            'notify::visible-window': GObject.Object.Notify;
            'notify::visible-window': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.EventBox.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            channel_id: number;
            channelId: number;
            disable_inputs: boolean;
            disableInputs: boolean;
            grab_keyboard: boolean;
            grabKeyboard: boolean;
            grab_mouse: boolean;
            grabMouse: boolean;
            keypress_delay: number;
            keypressDelay: number;
            monitor_id: number;
            monitorId: number;
            only_downscale: boolean;
            onlyDownscale: boolean;
            ready: boolean;
            resize_guest: boolean;
            resizeGuest: boolean;
            scaling: boolean;
            session: SpiceClientGLib.Session;
            zoom_level: number;
            zoomLevel: number;
        }
    }

    /**
     * The #SpiceDisplay struct is opaque and should not be accessed directly.
     */
    class Display extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Display>;

        // Properties

        /**
         * channel-id for this #SpiceDisplay
         */
        get channel_id(): number;
        /**
         * channel-id for this #SpiceDisplay
         */
        get channelId(): number;
        /**
         * Disable all keyboard & mouse inputs.
         */
        get disable_inputs(): boolean;
        set disable_inputs(val: boolean);
        /**
         * Disable all keyboard & mouse inputs.
         */
        get disableInputs(): boolean;
        set disableInputs(val: boolean);
        get grab_keyboard(): boolean;
        set grab_keyboard(val: boolean);
        get grabKeyboard(): boolean;
        set grabKeyboard(val: boolean);
        get grab_mouse(): boolean;
        set grab_mouse(val: boolean);
        get grabMouse(): boolean;
        set grabMouse(val: boolean);
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press & release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         */
        get keypress_delay(): number;
        set keypress_delay(val: number);
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press & release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         */
        get keypressDelay(): number;
        set keypressDelay(val: number);
        /**
         * Select monitor from #SpiceDisplay to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         */
        get monitor_id(): number;
        set monitor_id(val: number);
        /**
         * Select monitor from #SpiceDisplay to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         */
        get monitorId(): number;
        set monitorId(val: number);
        /**
         * If scaling, only scale down, never up.
         */
        get only_downscale(): boolean;
        set only_downscale(val: boolean);
        /**
         * If scaling, only scale down, never up.
         */
        get onlyDownscale(): boolean;
        set onlyDownscale(val: boolean);
        /**
         * Indicate whether the display is ready to be shown. It takes
         * into account several conditions, such as the channel display
         * "mark" state, whether the monitor area is visible..
         */
        get ready(): boolean;
        get resize_guest(): boolean;
        set resize_guest(val: boolean);
        get resizeGuest(): boolean;
        set resizeGuest(val: boolean);
        get scaling(): boolean;
        set scaling(val: boolean);
        /**
         * #SpiceSession for this #SpiceDisplay
         */
        get session(): SpiceClientGLib.Session;
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         */
        get zoom_level(): number;
        set zoom_level(val: number);
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         */
        get zoomLevel(): number;
        set zoomLevel(val: number);

        // Constructors

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: SpiceClientGLib.Session, channel_id: number): Display;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display;

        // Signals

        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: Display.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: Display.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Display.SignalSignatures>(
            signal: K,
            ...args: Display.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Finds the current grab key combination for the `display`.
         * @returns the current grab key combination.
         */
        get_grab_keys(): GrabSequence;
        /**
         * Take a screenshot of the display.
         * @returns a #GdkPixbuf with the screenshot image buffer
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Ungrab the mouse.
         */
        mouse_ungrab(): void;
        /**
         * Send keyval press/release events to the display.
         * @param keyvals Keyval array
         * @param kind #SpiceDisplayKeyEvent action
         */
        send_keys(keyvals: number[], kind: DisplayKeyEvent | null): void;
        /**
         * Set the key combination to grab/ungrab the keyboard. The default is
         * "Control L + Alt L".
         * @param seq key sequence
         */
        set_grab_keys(seq: GrabSequence): void;

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

    namespace GtkSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::auto-clipboard': GObject.Object.Notify;
            'notify::auto-clipboard': GObject.Object.Notify;
            'notify::auto-usbredir': GObject.Object.Notify;
            'notify::auto-usbredir': GObject.Object.Notify;
            'notify::pointer-grabbed': GObject.Object.Notify;
            'notify::pointer-grabbed': GObject.Object.Notify;
            'notify::session': GObject.Object.Notify;
            'notify::sync-modifiers': GObject.Object.Notify;
            'notify::sync-modifiers': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auto_clipboard: boolean;
            autoClipboard: boolean;
            auto_usbredir: boolean;
            autoUsbredir: boolean;
            pointer_grabbed: boolean;
            pointerGrabbed: boolean;
            session: SpiceClientGLib.Session;
            sync_modifiers: boolean;
            syncModifiers: boolean;
        }
    }

    /**
     * The #SpiceGtkSession struct is opaque and should not be accessed directly.
     */
    class GtkSession extends GObject.Object {
        static $gtype: GObject.GType<GtkSession>;

        // Properties

        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         */
        get auto_clipboard(): boolean;
        set auto_clipboard(val: boolean);
        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         */
        get autoClipboard(): boolean;
        set autoClipboard(val: boolean);
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a #SpiceDisplay associated with the
         * session had keyboard focus.
         */
        get auto_usbredir(): boolean;
        set auto_usbredir(val: boolean);
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a #SpiceDisplay associated with the
         * session had keyboard focus.
         */
        get autoUsbredir(): boolean;
        set autoUsbredir(val: boolean);
        /**
         * Returns %TRUE if the pointer is currently grabbed by this session.
         */
        get pointer_grabbed(): boolean;
        /**
         * Returns %TRUE if the pointer is currently grabbed by this session.
         */
        get pointerGrabbed(): boolean;
        /**
         * #SpiceSession this #SpiceGtkSession is associated with
         */
        get session(): SpiceClientGLib.Session;
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        get sync_modifiers(): boolean;
        set sync_modifiers(val: boolean);
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        get syncModifiers(): boolean;
        set syncModifiers(val: boolean);

        // Constructors

        constructor(properties?: Partial<GtkSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GtkSession.SignalSignatures>(
            signal: K,
            callback: GtkSession.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GtkSession.SignalSignatures>(
            signal: K,
            callback: GtkSession.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GtkSession.SignalSignatures>(
            signal: K,
            ...args: GtkSession.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the #SpiceGtkSession associated with the passed in #SpiceSession.
         * A new #SpiceGtkSession instance will be created the first time this
         * function is called for a certain #SpiceSession.
         *
         * Note that this function returns a weak reference, which should not be used
         * after the #SpiceSession itself has been unref-ed by the caller.
         * @param session #SpiceSession for which to get the #SpiceGtkSession
         */
        static get(session: SpiceClientGLib.Session): GtkSession;

        // Methods

        /**
         * Copy client-side clipboard to guest clipboard.
         *
         * Since 0.8
         */
        copy_to_guest(): void;
        /**
         * Copy guest clipboard to client-side clipboard.
         *
         * Since 0.8
         */
        paste_from_guest(): void;
    }

    namespace UsbDeviceWidget {
        // Signal callback interfaces

        interface ConnectFailed {
            (_source: UsbDeviceWidget, device: SpiceClientGLib.UsbDevice, error: GLib.Error): void;
        }

        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'connect-failed': ConnectFailed;
            'notify::device-format-string': GObject.Object.Notify;
            'notify::device-format-string': GObject.Object.Notify;
            'notify::session': GObject.Object.Notify;
            'notify::baseline-position': GObject.Object.Notify;
            'notify::baseline-position': GObject.Object.Notify;
            'notify::homogeneous': GObject.Object.Notify;
            'notify::spacing': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
            'notify::orientation': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            device_format_string: string;
            deviceFormatString: string;
            session: SpiceClientGLib.Session;
        }
    }

    /**
     * The #SpiceUsbDeviceWidget struct is opaque and should not be accessed directly.
     */
    class UsbDeviceWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<UsbDeviceWidget>;

        // Properties

        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        get device_format_string(): string;
        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        get deviceFormatString(): string;
        /**
         * #SpiceSession this #SpiceUsbDeviceWidget is associated with
         */
        get session(): SpiceClientGLib.Session;

        // Constructors

        constructor(properties?: Partial<UsbDeviceWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: SpiceClientGLib.Session, device_format_string?: string | null): UsbDeviceWidget;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof UsbDeviceWidget.SignalSignatures>(
            signal: K,
            callback: UsbDeviceWidget.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UsbDeviceWidget.SignalSignatures>(
            signal: K,
            callback: UsbDeviceWidget.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UsbDeviceWidget.SignalSignatures>(
            signal: K,
            ...args: UsbDeviceWidget.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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

    type DisplayClass = typeof Display;
    /**
     * An opaque type that represents a grab sequence.
     */
    class GrabSequence {
        static $gtype: GObject.GType<GrabSequence>;

        // Constructors

        constructor(keysyms: number[]);
        _init(...args: any[]): void;

        static ['new'](keysyms: number[]): GrabSequence;

        static new_from_string(str: string): GrabSequence;

        // Methods

        /**
         * Creates a string representing the `sequence`.
         * @returns a newly allocated string representing the key sequence
         */
        as_string(): string;
        /**
         * Creates a copy of the `sequence`.
         * @returns a copy of @sequence
         */
        copy(): GrabSequence;
        /**
         * Free `sequence`.
         */
        free(): void;
    }

    type GtkSessionClass = typeof GtkSession;
    type UsbDeviceWidgetClass = typeof UsbDeviceWidget;
    abstract class UsbDeviceWidgetPrivate {
        static $gtype: GObject.GType<UsbDeviceWidgetPrivate>;

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

export default SpiceClientGtk;

// END
