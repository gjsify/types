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
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-2.0';
import type Gdk from '@girs/gdk-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Vte {
    /**
     * Vte-0.0
     */

    class PtyError extends GLib.Error {
        static $gtype: GObject.GType<PtyError>;

        // Static fields

        /**
         * failure when using the GNOME PTY helper to
         *   allocate the PTY
         */
        static PTY_HELPER_FAILED: number;
        /**
         * failure when using PTY98 to allocate the PTY
         */
        static PTY98_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Error domain for VTE PTY errors. Errors in this domain will be from the #VtePtyError
         * enumeration. See #GError for more information on error domains.
         */
        static quark(): GLib.Quark;
    }

    export namespace TerminalAntiAlias {
        export const $gtype: GObject.GType<TerminalAntiAlias>;
    }

    enum TerminalAntiAlias {
        USE_DEFAULT,
        FORCE_ENABLE,
        FORCE_DISABLE,
    }
    /**
     * An enumerated type which can be used to indicate the cursor blink mode
     * for the terminal.
     */

    /**
     * An enumerated type which can be used to indicate the cursor blink mode
     * for the terminal.
     */
    export namespace TerminalCursorBlinkMode {
        export const $gtype: GObject.GType<TerminalCursorBlinkMode>;
    }

    enum TerminalCursorBlinkMode {
        /**
         * Follow GTK+ settings for cursor blinking.
         */
        SYSTEM,
        /**
         * Cursor blinks.
         */
        ON,
        /**
         * Cursor does not blink.
         */
        OFF,
    }
    /**
     * An enumerated type which can be used to indicate what should the terminal
     * draw at the cursor position.
     */

    /**
     * An enumerated type which can be used to indicate what should the terminal
     * draw at the cursor position.
     */
    export namespace TerminalCursorShape {
        export const $gtype: GObject.GType<TerminalCursorShape>;
    }

    enum TerminalCursorShape {
        /**
         * Draw a block cursor.  This is the default.
         */
        BLOCK,
        /**
         * Draw a vertical bar on the left side of character.
         * This is similar to the default cursor for other GTK+ widgets.
         */
        IBEAM,
        /**
         * Draw a horizontal bar below the character.
         */
        UNDERLINE,
    }
    /**
     * An enumerated type which can be used to indicate which string the terminal
     * should send to an application when the user presses the Delete or Backspace
     * keys.
     */

    /**
     * An enumerated type which can be used to indicate which string the terminal
     * should send to an application when the user presses the Delete or Backspace
     * keys.
     */
    export namespace TerminalEraseBinding {
        export const $gtype: GObject.GType<TerminalEraseBinding>;
    }

    enum TerminalEraseBinding {
        /**
         * For backspace, attempt to determine the right value from the terminal's IO settings.  For delete, use the control sequence.
         */
        AUTO,
        /**
         * Send an ASCII backspace character (0x08).
         */
        ASCII_BACKSPACE,
        /**
         * Send an ASCII delete character (0x7F).
         */
        ASCII_DELETE,
        /**
         * Send the "`@`7" control sequence.
         */
        DELETE_SEQUENCE,
        /**
         * Send terminal's "erase" setting.
         */
        TTY,
    }
    /**
     * A flag type to determine how terminal contents should be written
     * to an output stream.
     */

    /**
     * A flag type to determine how terminal contents should be written
     * to an output stream.
     */
    export namespace TerminalWriteFlags {
        export const $gtype: GObject.GType<TerminalWriteFlags>;
    }

    enum TerminalWriteFlags {
        /**
         * Write contents as UTF-8 text.  This is the default.
         */
        DEFAULT,
    }
    /**
     * Gets the user's shell, or %NULL. In the latter case, the
     * system default (usually "/bin/sh") should be used.
     * @returns a newly allocated string with the   user's shell, or %NULL
     */
    function get_user_shell(): string;
    /**
     * Error domain for VTE PTY errors. Errors in this domain will be from the #VtePtyError
     * enumeration. See #GError for more information on error domains.
     * @returns the error domain for VTE PTY errors
     */
    function pty_error_quark(): GLib.Quark;
    interface SelectionFunc {
        (terminal: Terminal, column: number, row: number, data?: any | null): boolean;
    }

    export namespace PtyFlags {
        export const $gtype: GObject.GType<PtyFlags>;
    }

    enum PtyFlags {
        /**
         * don't record the session in lastlog
         */
        NO_LASTLOG,
        /**
         * don't record the session in utmp
         */
        NO_UTMP,
        /**
         * don't record the session in wtmp
         */
        NO_WTMP,
        /**
         * don't use the GNOME PTY helper to allocate the PTY
         */
        NO_HELPER,
        /**
         * when allocating the PTY with the PTY helper fails,
         *   don't fall back to try using PTY98
         */
        NO_FALLBACK,
        /**
         * the default flags
         */
        DEFAULT,
    }
    namespace Pty {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            fd: number;
            flags: PtyFlags;
            term: string;
        }
    }

    class Pty extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Pty>;

        // Properties

        /**
         * The file descriptor of the PTY master.
         */
        get fd(): number;
        /**
         * Controls how the session is recorded in lastlog, utmp, and wtmp,
         * and whether to use the GNOME PTY helper.
         */
        get flags(): PtyFlags;
        /**
         * The value to set for the TERM environment variable just after
         * forking.
         */
        get term(): string;
        set term(val: string);

        // Constructors

        constructor(properties?: Partial<Pty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: PtyFlags): Pty;

        static new_foreign(fd: number): Pty;

        // Signals

        connect<K extends keyof Pty.SignalSignatures>(signal: K, callback: Pty.SignalSignatures[K]): number;
        connect_after<K extends keyof Pty.SignalSignatures>(signal: K, callback: Pty.SignalSignatures[K]): number;
        emit<K extends keyof Pty.SignalSignatures>(signal: K, ...args: Parameters<Pty.SignalSignatures[K]>): void;

        // Methods

        /**
         * FIXMEchpe
         */
        child_setup(): void;
        /**
         * Cleans up the PTY, specifically any logging performed for the session.
         * The file descriptor to the PTY master remains open.
         */
        close(): void;
        get_fd(): number;
        /**
         * Reads the pseudo terminal's window size.
         *
         * If getting the window size failed, `error` will be set to a #GIOError.
         * @returns %TRUE on success, %FALSE on failure with @error filled in
         */
        get_size(): [boolean, number, number];
        /**
         * Attempts to resize the pseudo terminal's window size.  If successful, the
         * OS kernel will send #SIGWINCH to the child process group.
         *
         * If setting the window size failed, `error` will be set to a #GIOError.
         * @param rows the desired number of rows
         * @param columns the desired number of columns
         * @returns %TRUE on success, %FALSE on failure with @error filled in
         */
        set_size(rows: number, columns: number): boolean;
        /**
         * Sets what value of the TERM environment variable to set just after forking.
         * @param emulation the name of a terminal description, or %NULL
         */
        set_term(emulation?: string | null): void;
        /**
         * Tells the kernel whether the terminal is UTF-8 or not, in case it can make
         * use of the info.  Linux 2.6.5 or so defines IUTF8 to make the line
         * discipline do multibyte backspace correctly.
         * @param utf8 whether or not the pty is in UTF-8 mode
         * @returns %TRUE on success, %FALSE on failure with @error filled in
         */
        set_utf8(utf8: boolean): boolean;

        // Inherited methods
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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

    namespace Terminal {
        // Signal callback interfaces

        interface Beep {
            (_source: Terminal): void;
        }

        interface CharSizeChanged {
            (_source: Terminal, width: number, height: number): void;
        }

        interface ChildExited {
            (_source: Terminal): void;
        }

        interface Commit {
            (_source: Terminal, text: string, size: number): void;
        }

        interface ContentsChanged {
            (_source: Terminal): void;
        }

        interface CopyClipboard {
            (_source: Terminal): void;
        }

        interface CursorMoved {
            (_source: Terminal): void;
        }

        interface DecreaseFontSize {
            (_source: Terminal): void;
        }

        interface DeiconifyWindow {
            (_source: Terminal): void;
        }

        interface EmulationChanged {
            (_source: Terminal): void;
        }

        interface EncodingChanged {
            (_source: Terminal): void;
        }

        interface Eof {
            (_source: Terminal): void;
        }

        interface IconTitleChanged {
            (_source: Terminal): void;
        }

        interface IconifyWindow {
            (_source: Terminal): void;
        }

        interface IncreaseFontSize {
            (_source: Terminal): void;
        }

        interface LowerWindow {
            (_source: Terminal): void;
        }

        interface MaximizeWindow {
            (_source: Terminal): void;
        }

        interface MoveWindow {
            (_source: Terminal, x: number, y: number): void;
        }

        interface PasteClipboard {
            (_source: Terminal): void;
        }

        interface RaiseWindow {
            (_source: Terminal): void;
        }

        interface RefreshWindow {
            (_source: Terminal): void;
        }

        interface ResizeWindow {
            (_source: Terminal, width: number, height: number): void;
        }

        interface RestoreWindow {
            (_source: Terminal): void;
        }

        interface SelectionChanged {
            (_source: Terminal): void;
        }

        interface SetScrollAdjustments {
            (_source: Terminal, horizontal?: Gtk.Adjustment | null, vertical?: Gtk.Adjustment | null): void;
        }

        interface StatusLineChanged {
            (_source: Terminal): void;
        }

        interface TextDeleted {
            (_source: Terminal): void;
        }

        interface TextInserted {
            (_source: Terminal): void;
        }

        interface TextModified {
            (_source: Terminal): void;
        }

        interface TextScrolled {
            (_source: Terminal, delta: number): void;
        }

        interface WindowTitleChanged {
            (_source: Terminal): void;
        }

        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            beep: Beep;
            'char-size-changed': CharSizeChanged;
            'child-exited': ChildExited;
            commit: Commit;
            'contents-changed': ContentsChanged;
            'copy-clipboard': CopyClipboard;
            'cursor-moved': CursorMoved;
            'decrease-font-size': DecreaseFontSize;
            'deiconify-window': DeiconifyWindow;
            'emulation-changed': EmulationChanged;
            'encoding-changed': EncodingChanged;
            eof: Eof;
            'icon-title-changed': IconTitleChanged;
            'iconify-window': IconifyWindow;
            'increase-font-size': IncreaseFontSize;
            'lower-window': LowerWindow;
            'maximize-window': MaximizeWindow;
            'move-window': MoveWindow;
            'paste-clipboard': PasteClipboard;
            'raise-window': RaiseWindow;
            'refresh-window': RefreshWindow;
            'resize-window': ResizeWindow;
            'restore-window': RestoreWindow;
            'selection-changed': SelectionChanged;
            'set-scroll-adjustments': SetScrollAdjustments;
            'status-line-changed': StatusLineChanged;
            'text-deleted': TextDeleted;
            'text-inserted': TextInserted;
            'text-modified': TextModified;
            'text-scrolled': TextScrolled;
            'window-title-changed': WindowTitleChanged;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            allow_bold: boolean;
            allowBold: boolean;
            audible_bell: boolean;
            audibleBell: boolean;
            background_image_file: string;
            backgroundImageFile: string;
            background_image_pixbuf: GdkPixbuf.Pixbuf;
            backgroundImagePixbuf: GdkPixbuf.Pixbuf;
            background_opacity: number;
            backgroundOpacity: number;
            background_saturation: number;
            backgroundSaturation: number;
            background_tint_color: Gdk.Color;
            backgroundTintColor: Gdk.Color;
            background_transparent: boolean;
            backgroundTransparent: boolean;
            backspace_binding: TerminalEraseBinding;
            backspaceBinding: TerminalEraseBinding;
            cursor_blink_mode: TerminalCursorBlinkMode;
            cursorBlinkMode: TerminalCursorBlinkMode;
            cursor_shape: TerminalCursorShape;
            cursorShape: TerminalCursorShape;
            delete_binding: TerminalEraseBinding;
            deleteBinding: TerminalEraseBinding;
            emulation: string;
            encoding: string;
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            icon_title: string;
            iconTitle: string;
            pointer_autohide: boolean;
            pointerAutohide: boolean;
            pty: number;
            pty_object: Pty;
            ptyObject: Pty;
            scroll_background: boolean;
            scrollBackground: boolean;
            scroll_on_keystroke: boolean;
            scrollOnKeystroke: boolean;
            scroll_on_output: boolean;
            scrollOnOutput: boolean;
            scrollback_lines: number;
            scrollbackLines: number;
            visible_bell: boolean;
            visibleBell: boolean;
            window_title: string;
            windowTitle: string;
            word_chars: string;
            wordChars: string;
        }
    }

    /**
     * All of these fields should be considered read-only and deprecated.
     */
    class Terminal extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Terminal>;

        // Properties

        /**
         * Controls whether or not the terminal will attempt to draw bold text.
         * This may happen either by using a bold font variant, or by
         * repainting text with a different offset.
         */
        get allow_bold(): boolean;
        set allow_bold(val: boolean);
        /**
         * Controls whether or not the terminal will attempt to draw bold text.
         * This may happen either by using a bold font variant, or by
         * repainting text with a different offset.
         */
        get allowBold(): boolean;
        set allowBold(val: boolean);
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        get audible_bell(): boolean;
        set audible_bell(val: boolean);
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        get audibleBell(): boolean;
        set audibleBell(val: boolean);
        /**
         * Sets a background image file for the widget.  If specified by
         * #VteTerminal:background-saturation:, the terminal will tint its
         * in-memory copy of the image before applying it to the terminal.
         */
        get background_image_file(): string;
        set background_image_file(val: string);
        /**
         * Sets a background image file for the widget.  If specified by
         * #VteTerminal:background-saturation:, the terminal will tint its
         * in-memory copy of the image before applying it to the terminal.
         */
        get backgroundImageFile(): string;
        set backgroundImageFile(val: string);
        /**
         * Sets a background image for the widget.  Text which would otherwise be
         * drawn using the default background color will instead be drawn over the
         * specified image.  If necessary, the image will be tiled to cover the
         * widget's entire visible area. If specified by
         * #VteTerminal:background-saturation:, the terminal will tint its
         * in-memory copy of the image before applying it to the terminal.
         */
        get background_image_pixbuf(): GdkPixbuf.Pixbuf;
        set background_image_pixbuf(val: GdkPixbuf.Pixbuf);
        /**
         * Sets a background image for the widget.  Text which would otherwise be
         * drawn using the default background color will instead be drawn over the
         * specified image.  If necessary, the image will be tiled to cover the
         * widget's entire visible area. If specified by
         * #VteTerminal:background-saturation:, the terminal will tint its
         * in-memory copy of the image before applying it to the terminal.
         */
        get backgroundImagePixbuf(): GdkPixbuf.Pixbuf;
        set backgroundImagePixbuf(val: GdkPixbuf.Pixbuf);
        /**
         * Sets the opacity of the terminal background, were 0.0 means completely
         * transparent and 1.0 means completely opaque.
         */
        get background_opacity(): number;
        set background_opacity(val: number);
        /**
         * Sets the opacity of the terminal background, were 0.0 means completely
         * transparent and 1.0 means completely opaque.
         */
        get backgroundOpacity(): number;
        set backgroundOpacity(val: number);
        /**
         * If a background image has been set using #VteTerminal:background-image-file: or
         * #VteTerminal:background-image-pixbuf:, or #VteTerminal:background-transparent:,
         * and the saturation value is less
         * than 1.0, the terminal will adjust the colors of the image before drawing
         * the image.  To do so, the terminal will create a copy of the background
         * image (or snapshot of the root window) and modify its pixel values.
         */
        get background_saturation(): number;
        set background_saturation(val: number);
        /**
         * If a background image has been set using #VteTerminal:background-image-file: or
         * #VteTerminal:background-image-pixbuf:, or #VteTerminal:background-transparent:,
         * and the saturation value is less
         * than 1.0, the terminal will adjust the colors of the image before drawing
         * the image.  To do so, the terminal will create a copy of the background
         * image (or snapshot of the root window) and modify its pixel values.
         */
        get backgroundSaturation(): number;
        set backgroundSaturation(val: number);
        /**
         * If a background image has been set using #VteTerminal:background-image-file: or
         * #VteTerminal:background-image-pixbuf:, or #VteTerminal:background-transparent:, and
         * and the value set by VteTerminal:background-saturation: is less than 1.0,
         * the terminal
         * will adjust the color of the image before drawing the image.  To do so,
         * the terminal will create a copy of the background image (or snapshot of
         * the root window) and modify its pixel values.  The initial tint color
         * is black.
         */
        get background_tint_color(): Gdk.Color;
        set background_tint_color(val: Gdk.Color);
        /**
         * If a background image has been set using #VteTerminal:background-image-file: or
         * #VteTerminal:background-image-pixbuf:, or #VteTerminal:background-transparent:, and
         * and the value set by VteTerminal:background-saturation: is less than 1.0,
         * the terminal
         * will adjust the color of the image before drawing the image.  To do so,
         * the terminal will create a copy of the background image (or snapshot of
         * the root window) and modify its pixel values.  The initial tint color
         * is black.
         */
        get backgroundTintColor(): Gdk.Color;
        set backgroundTintColor(val: Gdk.Color);
        /**
         * Sets whther the terminal uses the pixmap stored in the root
         * window as the background, adjusted so that if there are no windows
         * below your application, the widget will appear to be transparent.
         *
         * Note: When using a compositing window manager, you should instead
         * set a RGBA colourmap on the toplevel window, so you get real transparency.
         */
        get background_transparent(): boolean;
        set background_transparent(val: boolean);
        /**
         * Sets whther the terminal uses the pixmap stored in the root
         * window as the background, adjusted so that if there are no windows
         * below your application, the widget will appear to be transparent.
         *
         * Note: When using a compositing window manager, you should instead
         * set a RGBA colourmap on the toplevel window, so you get real transparency.
         */
        get backgroundTransparent(): boolean;
        set backgroundTransparent(val: boolean);
        /**
         * *Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        get backspace_binding(): TerminalEraseBinding;
        set backspace_binding(val: TerminalEraseBinding);
        /**
         * *Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        get backspaceBinding(): TerminalEraseBinding;
        set backspaceBinding(val: TerminalEraseBinding);
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings::gtk-cursor-blink setting.
         */
        get cursor_blink_mode(): TerminalCursorBlinkMode;
        set cursor_blink_mode(val: TerminalCursorBlinkMode);
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings::gtk-cursor-blink setting.
         */
        get cursorBlinkMode(): TerminalCursorBlinkMode;
        set cursorBlinkMode(val: TerminalCursorBlinkMode);
        /**
         * Controls the shape of the cursor.
         */
        get cursor_shape(): TerminalCursorShape;
        set cursor_shape(val: TerminalCursorShape);
        /**
         * Controls the shape of the cursor.
         */
        get cursorShape(): TerminalCursorShape;
        set cursorShape(val: TerminalCursorShape);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        get delete_binding(): TerminalEraseBinding;
        set delete_binding(val: TerminalEraseBinding);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        get deleteBinding(): TerminalEraseBinding;
        set deleteBinding(val: TerminalEraseBinding);
        /**
         * Sets what type of terminal the widget attempts to emulate by scanning for
         * control sequences defined in the system's termcap file.  Unless you
         * are interested in this feature, always use the default which is "xterm".
         */
        get emulation(): string;
        set emulation(val: string);
        /**
         * Controls the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding.  The default is defined by the
         * application's locale settings.
         */
        get encoding(): string;
        set encoding(val: string);
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        /**
         * The terminal's so-called icon title, or %NULL if no icon title has been set.
         */
        get icon_title(): string;
        /**
         * The terminal's so-called icon title, or %NULL if no icon title has been set.
         */
        get iconTitle(): string;
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        get pointer_autohide(): boolean;
        set pointer_autohide(val: boolean);
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        get pointerAutohide(): boolean;
        set pointerAutohide(val: boolean);
        /**
         * The file descriptor of the master end of the terminal's PTY.
         */
        get pty(): number;
        set pty(val: number);
        /**
         * The PTY object for the terminal.
         */
        get pty_object(): Pty;
        set pty_object(val: Pty);
        /**
         * The PTY object for the terminal.
         */
        get ptyObject(): Pty;
        set ptyObject(val: Pty);
        /**
         * Controls whether or not the terminal will scroll the background image (if
         * one is set) when the text in the window must be scrolled.
         */
        get scroll_background(): boolean;
        set scroll_background(val: boolean);
        /**
         * Controls whether or not the terminal will scroll the background image (if
         * one is set) when the text in the window must be scrolled.
         */
        get scrollBackground(): boolean;
        set scrollBackground(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        get scroll_on_keystroke(): boolean;
        set scroll_on_keystroke(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        get scrollOnKeystroke(): boolean;
        set scrollOnKeystroke(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        get scroll_on_output(): boolean;
        set scroll_on_output(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        get scrollOnOutput(): boolean;
        set scrollOnOutput(val: boolean);
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         */
        get scrollback_lines(): number;
        set scrollback_lines(val: number);
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         */
        get scrollbackLines(): number;
        set scrollbackLines(val: number);
        /**
         * Controls whether the terminal will present a visible bell to the
         * user when the child outputs the "bl" sequence.  The terminal
         * will clear itself to the default foreground color and then repaint itself.
         */
        get visible_bell(): boolean;
        set visible_bell(val: boolean);
        /**
         * Controls whether the terminal will present a visible bell to the
         * user when the child outputs the "bl" sequence.  The terminal
         * will clear itself to the default foreground color and then repaint itself.
         */
        get visibleBell(): boolean;
        set visibleBell(val: boolean);
        /**
         * The terminal's title.
         */
        get window_title(): string;
        /**
         * The terminal's title.
         */
        get windowTitle(): string;
        /**
         * When the user double-clicks to start selection, the terminal will extend
         * the selection on word boundaries.  It will treat characters the word-chars
         * characters as parts of words, and all other characters as word separators.
         * Ranges of characters can be specified by separating them with a hyphen.
         *
         * As a special case, when setting this to %NULL or the empty string, the terminal will
         * treat all graphic non-punctuation non-space characters as word characters.
         */
        get word_chars(): string;
        set word_chars(val: string);
        /**
         * When the user double-clicks to start selection, the terminal will extend
         * the selection on word boundaries.  It will treat characters the word-chars
         * characters as parts of words, and all other characters as word separators.
         * Ranges of characters can be specified by separating them with a hyphen.
         *
         * As a special case, when setting this to %NULL or the empty string, the terminal will
         * treat all graphic non-punctuation non-space characters as word characters.
         */
        get wordChars(): string;
        set wordChars(val: string);

        // Fields

        widget: Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<Terminal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Terminal;

        // Signals

        connect<K extends keyof Terminal.SignalSignatures>(signal: K, callback: Terminal.SignalSignatures[K]): number;
        connect_after<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: Terminal.SignalSignatures[K],
        ): number;
        emit<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            ...args: Parameters<Terminal.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_beep(): void;
        vfunc_char_size_changed(char_width: number, char_height: number): void;
        vfunc_child_exited(): void;
        vfunc_commit(text: string, size: number): void;
        vfunc_contents_changed(): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection.
         */
        vfunc_copy_clipboard(): void;
        vfunc_cursor_moved(): void;
        vfunc_decrease_font_size(): void;
        vfunc_deiconify_window(): void;
        vfunc_emulation_changed(): void;
        vfunc_encoding_changed(): void;
        vfunc_eof(): void;
        vfunc_icon_title_changed(): void;
        vfunc_iconify_window(): void;
        vfunc_increase_font_size(): void;
        vfunc_lower_window(): void;
        vfunc_maximize_window(): void;
        vfunc_move_window(x: number, y: number): void;
        /**
         * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
         * terminal's child.  If necessary, the data is converted from UTF-8 to the
         * terminal's current encoding. It's called on paste menu item, or when
         * user presses Shift+Insert.
         */
        vfunc_paste_clipboard(): void;
        vfunc_raise_window(): void;
        vfunc_refresh_window(): void;
        vfunc_resize_window(width: number, height: number): void;
        vfunc_restore_window(): void;
        vfunc_selection_changed(): void;
        vfunc_status_line_changed(): void;
        vfunc_text_deleted(): void;
        vfunc_text_inserted(): void;
        vfunc_text_modified(): void;
        vfunc_text_scrolled(delta: number): void;
        vfunc_window_title_changed(): void;

        // Methods

        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection.
         */
        copy_clipboard(): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_PRIMARY
         * selection.
         */
        copy_primary(): void;
        /**
         * Interprets `data` as if it were data received from a child process.  This
         * can either be used to drive the terminal without a child process, or just
         * to mess with your users.
         * @param data a string in the terminal's current encoding @length the length of the string
         */
        feed(data: Uint8Array | string): void;
        /**
         * Sends a block of UTF-8 text to the child as if it were entered by the user
         * at the keyboard.
         * @param text data to send to the child
         * @param length length of @text in bytes, or -1 if @text is NUL-terminated
         */
        feed_child(text: string, length: number): void;
        /**
         * Sends a block of binary data to the child.
         * @param data data to send to the child
         * @param length length of @data
         */
        feed_child_binary(data: string, length: number): void;
        /**
         * Starts the specified command under a newly-allocated controlling
         * pseudo-terminal.  The `argv` and `envv` lists should be %NULL-terminated.
         * The "TERM" environment variable is automatically set to reflect the
         * terminal widget's emulation setting.
         * `pty_flags` controls logging the session to the specified system log files.
         *
         * Note that %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
         *
         * Note that unless `spawn_flags` contains %G_SPAWN_LEAVE_DESCRIPTORS_OPEN, all file
         * descriptors except stdin/stdout/stderr will be closed before calling exec()
         * in the child.
         *
         * See vte_pty_new(), g_spawn_async() and vte_terminal_watch_child() for more information.
         * @param pty_flags flags from #VtePtyFlags
         * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
         * @param spawn_flags flags from #GSpawnFlags
         * @param child_setup function to run in the child just before exec(), or %NULL
         * @returns %TRUE on success, or %FALSE on error with @error filled in
         */
        fork_command_full(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup?: GLib.SpawnChildSetupFunc | null,
        ): [boolean, GLib.Pid | null];
        /**
         * An accessor function provided for the benefit of language bindings.
         * @returns the contents of @terminal's adjustment field
         */
        get_adjustment(): Gtk.Adjustment;
        /**
         * Checks whether or not the terminal will attempt to draw bold text by
         * repainting text with a one-pixel offset.
         * @returns %TRUE if bolding is enabled, %FALSE if not
         */
        get_allow_bold(): boolean;
        /**
         * Checks whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         * @returns %TRUE if audible bell is enabled, %FALSE if not
         */
        get_audible_bell(): boolean;
        get_char_height(): number;
        get_char_width(): number;
        /**
         * Gets the exit status of the command started by vte_terminal_fork_command().
         * See your C library's documentation for more details on how to interpret the
         * exit status.
         *
         * Note that this function may only be called from the signal handler of
         * the #VteTerminal::child-exited signal.
         * @returns the child's exit status
         */
        get_child_exit_status(): number;
        get_column_count(): number;
        /**
         * Returns the currently set cursor blink mode.
         * @returns cursor blink mode.
         */
        get_cursor_blink_mode(): TerminalCursorBlinkMode;
        /**
         * Reads the location of the insertion cursor and returns it.  The row
         * coordinate is absolute.
         */
        get_cursor_position(): [number, number];
        /**
         * Returns the currently set cursor shape.
         * @returns cursor shape.
         */
        get_cursor_shape(): TerminalCursorShape;
        /**
         * Queries the terminal for its default emulation, which is attempted if the
         * terminal type passed to vte_terminal_set_emulation() is %NULL.
         * @returns an interned string containing the name of the default terminal   type the widget attempts to emulate
         */
        get_default_emulation(): string;
        /**
         * Queries the terminal for its current emulation, as last set by a call to
         * vte_terminal_set_emulation().
         * @returns an interned string containing the name of the terminal type the   widget is attempting to emulate
         */
        get_emulation(): string;
        /**
         * Determines the name of the encoding in which the terminal expects data to be
         * encoded.
         * @returns the current encoding for the terminal
         */
        get_encoding(): string;
        /**
         * Queries the terminal for information about the fonts which will be
         * used to draw text in the terminal.
         * @returns a #PangoFontDescription describing the font the terminal is   currently using to render text
         */
        get_font(): Pango.FontDescription;
        /**
         * Checks if the terminal currently contains selected text.  Note that this
         * is different from determining if the terminal is the owner of any
         * #GtkClipboard items.
         * @returns %TRUE if part of the text in the terminal is selected.
         */
        get_has_selection(): boolean;
        get_icon_title(): string;
        /**
         * Determines the value of the terminal's mouse autohide setting.  When
         * autohiding is enabled, the mouse cursor will be hidden when the user presses
         * a key and shown when the user moves the mouse.  This setting can be changed
         * using vte_terminal_set_mouse_autohide().
         * @returns %TRUE if autohiding is enabled, %FALSE if not
         */
        get_mouse_autohide(): boolean;
        /**
         * Returns the #VtePty of `terminal`.
         * @returns a #VtePty, or %NULL
         */
        get_pty_object(): Pty;
        get_row_count(): number;
        /**
         * Some terminal emulations specify a status line which is separate from the
         * main display area, and define a means for applications to move the cursor
         * to the status line and back.
         * @returns the current contents of the terminal's status line.   For terminals like "xterm", this will usually be the empty string.  The string   must not be modified or freed by the caller.
         */
        get_status_line(): string;
        /**
         * Extracts a view of the visible part of the terminal.  If `is_selected` is not
         * %NULL, characters will only be read if `is_selected` returns %TRUE after being
         * passed the column and row, respectively.  A #VteCharAttributes structure
         * is added to `attributes` for each byte added to the returned string detailing
         * the character's position, colors, and other characteristics.
         * @param is_selected a #VteSelectionFunc callback
         * @returns a newly allocated text string, or %NULL.
         */
        get_text(is_selected: SelectionFunc): [string, CharAttributes[]];
        /**
         * Extracts a view of the visible part of the terminal.  If `is_selected` is not
         * %NULL, characters will only be read if `is_selected` returns %TRUE after being
         * passed the column and row, respectively.  A #VteCharAttributes structure
         * is added to `attributes` for each byte added to the returned string detailing
         * the character's position, colors, and other characteristics. This function
         * differs from vte_terminal_get_text() in that trailing spaces at the end of
         * lines are included.
         * @param is_selected a #VteSelectionFunc callback
         * @returns a newly allocated text string, or %NULL.
         */
        get_text_include_trailing_spaces(is_selected: SelectionFunc): [string, CharAttributes[]];
        /**
         * Extracts a view of the visible part of the terminal.  If `is_selected` is not
         * %NULL, characters will only be read if `is_selected` returns %TRUE after being
         * passed the column and row, respectively.  A #VteCharAttributes structure
         * is added to `attributes` for each byte added to the returned string detailing
         * the character's position, colors, and other characteristics.  The
         * entire scrollback buffer is scanned, so it is possible to read the entire
         * contents of the buffer using this function.
         * @param start_row first row to search for data
         * @param start_col first column to search for data
         * @param end_row last row to search for data
         * @param end_col last column to search for data
         * @param is_selected a #VteSelectionFunc callback
         * @returns a newly allocated text string, or %NULL.
         */
        get_text_range(
            start_row: number,
            start_col: number,
            end_row: number,
            end_col: number,
            is_selected: SelectionFunc,
        ): [string, CharAttributes[]];
        /**
         * Checks whether or not the terminal will present a visible bell to the
         * user when the child outputs the "bl" sequence.  The terminal
         * will clear itself to the default foreground color and then repaint itself.
         * @returns %TRUE if visible bell is enabled, %FALSE if not
         */
        get_visible_bell(): boolean;
        get_window_title(): string;
        /**
         * Appends menu items for various input methods to the given menu.  The
         * user can select one of these items to modify the input method used by
         * the terminal.
         * @param menushell a GtkMenuShell
         */
        im_append_menuitems(menushell: Gtk.MenuShell): void;
        /**
         * Checks if a particular character is considered to be part of a word or not,
         * based on the values last passed to vte_terminal_set_word_chars().
         * @param c a candidate Unicode code point
         * @returns %TRUE if the character is considered to be part of a word
         */
        is_word_char(c: number): boolean;
        /**
         * Adds the regular expression `regex` to the list of matching expressions.  When the
         * user moves the mouse cursor over a section of displayed text which matches
         * this expression, the text will be highlighted.
         * @param regex a #GRegex
         * @param flags the #GRegexMatchFlags to use when matching the regex
         * @returns an integer associated with this expression
         */
        match_add_gregex(regex: GLib.Regex, flags: GLib.RegexMatchFlags | null): number;
        /**
         * Checks if the text in and around the specified position matches any of the
         * regular expressions previously set using vte_terminal_match_add().  If a
         * match exists, the text string is returned and if `tag` is not %NULL, the number
         * associated with the matched regular expression will be stored in `tag`.
         *
         * If more than one regular expression has been set with
         * vte_terminal_match_add(), then expressions are checked in the order in
         * which they were added.
         * @param column the text column
         * @param row the text row
         * @returns a newly allocated string which matches one of the previously   set regular expressions
         */
        match_check(column: number, row: number): [string, number];
        /**
         * Clears the list of regular expressions the terminal uses to highlight text
         * when the user moves the mouse cursor.
         */
        match_clear_all(): void;
        /**
         * Removes the regular expression which is associated with the given `tag` from
         * the list of expressions which the terminal will highlight when the user
         * moves the mouse cursor over matching text.
         * @param tag the tag of the regex to remove
         */
        match_remove(tag: number): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.  The terminal keeps a reference to `cursor`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor the #GdkCursor which the terminal should use when the pattern is   highlighted, or %NULL to use the standard cursor
         */
        match_set_cursor(tag: number, cursor?: Gdk.Cursor | null): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor_name the name of the cursor
         */
        match_set_cursor_name(tag: number, cursor_name: string): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor_type a #GdkCursorType
         */
        match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType | null): void;
        /**
         * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
         * terminal's child.  If necessary, the data is converted from UTF-8 to the
         * terminal's current encoding. It's called on paste menu item, or when
         * user presses Shift+Insert.
         */
        paste_clipboard(): void;
        /**
         * Sends the contents of the #GDK_SELECTION_PRIMARY selection to the terminal's
         * child.  If necessary, the data is converted from UTF-8 to the terminal's
         * current encoding.  The terminal will call also paste the
         * #GDK_SELECTION_PRIMARY selection when the user clicks with the the second
         * mouse button.
         */
        paste_primary(): void;
        /**
         * Creates a new #VtePty, and sets the emulation property
         * from #VteTerminal:emulation.
         *
         * See vte_pty_new() for more information.
         * @param flags flags from #VtePtyFlags
         * @returns a new #VtePty
         */
        pty_new(flags: PtyFlags | null): Pty;
        /**
         * Resets as much of the terminal's internal state as possible, discarding any
         * unprocessed input data, resetting character attributes, cursor state,
         * national character set state, status line, terminal modes (insert/delete),
         * selection state, and encoding.
         * @param clear_tabstops whether to reset tabstops
         * @param clear_history whether to empty the terminal's scrollback buffer
         */
        reset(clear_tabstops: boolean, clear_history: boolean): void;
        /**
         * Searches the next string matching the search regex set with
         * vte_terminal_search_set_gregex().
         * @returns %TRUE if a match was found
         */
        search_find_next(): boolean;
        /**
         * Searches the previous string matching the search regex set with
         * vte_terminal_search_set_gregex().
         * @returns %TRUE if a match was found
         */
        search_find_previous(): boolean;
        search_get_gregex(): GLib.Regex;
        search_get_wrap_around(): boolean;
        /**
         * Sets the #GRegex regex to search for. Unsets the search regex when passed %NULL.
         * @param regex a #GRegex, or %NULL
         */
        search_set_gregex(regex?: GLib.Regex | null): void;
        /**
         * Sets whether search should wrap around to the beginning of the
         * terminal content when reaching its end.
         * @param wrap_around whether search should wrap
         */
        search_set_wrap_around(wrap_around: boolean): void;
        /**
         * Selects all text within the terminal (including the scrollback buffer).
         */
        select_all(): void;
        /**
         * Clears the current selection.
         */
        select_none(): void;
        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * either by using a bold font variant or by repainting text with a different
         * offset.
         * @param allow_bold %TRUE if the terminal should attempt to draw bold text
         */
        set_allow_bold(allow_bold: boolean): void;
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         * @param is_audible %TRUE if the terminal should beep
         */
        set_audible_bell(is_audible: boolean): void;
        /**
         * Sets a background image for the widget.  Text which would otherwise be
         * drawn using the default background color will instead be drawn over the
         * specified image.  If necessary, the image will be tiled to cover the
         * widget's entire visible area. If specified by
         * vte_terminal_set_background_saturation(), the terminal will tint its
         * in-memory copy of the image before applying it to the terminal.
         * @param image a #GdkPixbuf to use, or %NULL to unset the background
         */
        set_background_image(image?: GdkPixbuf.Pixbuf | null): void;
        /**
         * Sets a background image for the widget.  If specified by
         * vte_terminal_set_background_saturation(), the terminal will tint its
         * in-memory copy of the image before applying it to the terminal.
         * @param path path to an image file
         */
        set_background_image_file(path: string): void;
        /**
         * If a background image has been set using
         * vte_terminal_set_background_image(),
         * vte_terminal_set_background_image_file(), or
         * vte_terminal_set_background_transparent(), and the saturation value is less
         * than 1.0, the terminal will adjust the colors of the image before drawing
         * the image.  To do so, the terminal will create a copy of the background
         * image (or snapshot of the root window) and modify its pixel values.
         * @param saturation a floating point value between 0.0 and 1.0.
         */
        set_background_saturation(saturation: number): void;
        /**
         * If a background image has been set using
         * vte_terminal_set_background_image(),
         * vte_terminal_set_background_image_file(), or
         * vte_terminal_set_background_transparent(), and the value set by
         * vte_terminal_set_background_saturation() is less than one, the terminal
         * will adjust the color of the image before drawing the image.  To do so,
         * the terminal will create a copy of the background image (or snapshot of
         * the root window) and modify its pixel values.  The initial tint color
         * is black.
         * @param color a color which the terminal background should be tinted to if its   saturation is not 1.0.
         */
        set_background_tint_color(color: Gdk.Color): void;
        /**
         * Sets the terminal's background image to the pixmap stored in the root
         * window, adjusted so that if there are no windows below your application,
         * the widget will appear to be transparent.
         * @param transparent whether the terminal should fake transparency
         */
        set_background_transparent(transparent: boolean): void;
        /**
         * Modifies the terminal's backspace key binding, which controls what
         * string or control sequence the terminal sends to its child when the user
         * presses the backspace key.
         * @param binding a #VteTerminalEraseBinding for the backspace key
         */
        set_backspace_binding(binding: TerminalEraseBinding | null): void;
        /**
         * Sets the background color for text which does not have a specific background
         * color assigned.  Only has effect when no background image is set and when
         * the terminal is not transparent.
         * @param background the new background color
         */
        set_color_background(background: Gdk.Color): void;
        /**
         * Sets the color used to draw bold text in the default foreground color.
         * @param bold the new bold color
         */
        set_color_bold(bold: Gdk.Color): void;
        /**
         * Sets the background color for text which is under the cursor.  If %NULL, text
         * under the cursor will be drawn with foreground and background colors
         * reversed.
         * @param cursor_background the new color to use for the text cursor, or %NULL
         */
        set_color_cursor(cursor_background?: Gdk.Color | null): void;
        /**
         * Sets the color used to draw dim text in the default foreground color.
         * @param dim the new dim color
         */
        set_color_dim(dim: Gdk.Color): void;
        /**
         * Sets the foreground color used to draw normal text
         * @param foreground the new foreground color
         */
        set_color_foreground(foreground: Gdk.Color): void;
        /**
         * Sets the background color for text which is highlighted.  If %NULL,
         * highlighted text (which is usually highlighted because it is selected) will
         * be drawn with foreground and background colors reversed.
         * @param highlight_background the new color to use for highlighted text, or %NULL
         */
        set_color_highlight(highlight_background?: Gdk.Color | null): void;
        /**
         * The terminal widget uses a 28-color model comprised of the default foreground
         * and background colors, the bold foreground color, the dim foreground
         * color, an eight color palette, bold versions of the eight color palette,
         * and a dim version of the the eight color palette.
         *
         * `palette_size` must be either 0, 8, 16, or 24, or between 25 and 255 inclusive.
         * If `foreground` is %NULL and
         * `palette_size` is greater than 0, the new foreground color is taken from
         * `palette[`7].  If `background` is %NULL and `palette_size` is greater than 0,
         * the new background color is taken from `palette[`0].  If
         * `palette_size` is 8 or 16, the third (dim) and possibly the second (bold)
         * 8-color palettes are extrapolated from the new background color and the items
         * in `palette`.
         * @param foreground the new foreground color, or %NULL
         * @param background the new background color, or %NULL
         * @param palette the color palette
         */
        set_colors(foreground: Gdk.Color | null, background: Gdk.Color | null, palette: Gdk.Color[]): void;
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings::gtk-cursor-blink setting.
         * @param mode the #VteTerminalCursorBlinkMode to use
         */
        set_cursor_blink_mode(mode: TerminalCursorBlinkMode | null): void;
        /**
         * Sets the shape of the cursor drawn.
         * @param shape the #VteTerminalCursorShape to use
         */
        set_cursor_shape(shape: TerminalCursorShape | null): void;
        /**
         * Reset the terminal palette to reasonable compiled-in default color.
         */
        set_default_colors(): void;
        /**
         * Modifies the terminal's delete key binding, which controls what
         * string or control sequence the terminal sends to its child when the user
         * presses the delete key.
         * @param binding a #VteTerminalEraseBinding for the delete key
         */
        set_delete_binding(binding: TerminalEraseBinding | null): void;
        /**
         * Sets what type of terminal the widget attempts to emulate by scanning for
         * control sequences defined in the system's termcap file.  Unless you
         * are interested in this feature, always use "xterm".
         * @param emulation the name of a terminal description, or %NULL to use the default
         */
        set_emulation(emulation?: string | null): void;
        /**
         * Changes the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding.  The default encoding is defined by the
         * application's locale settings.
         * @param codeset a valid #GIConv target, or %NULL to use the default encoding
         */
        set_encoding(codeset?: string | null): void;
        /**
         * Sets the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         * @param font_desc a #PangoFontDescription for the desired font, or %NULL
         */
        set_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * A convenience function which converts `name` into a #PangoFontDescription and
         * passes it to vte_terminal_set_font().
         * @param name a pango font description in string form
         */
        set_font_from_string(name: string): void;
        /**
         * Changes the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.  This setting can be read using
         * vte_terminal_get_mouse_autohide().
         * @param setting whether the mouse pointer should autohide
         */
        set_mouse_autohide(setting: boolean): void;
        /**
         * Sets the opacity of the terminal background, were 0 means completely
         * transparent and 65535 means completely opaque.
         * @param opacity the new opacity
         */
        set_opacity(opacity: number): void;
        /**
         * Sets `pty` as the PTY to use in `terminal`.
         * Use %NULL to unset the PTY.
         * @param pty a #VtePty, or %NULL
         */
        set_pty_object(pty?: Pty | null): void;
        /**
         * Controls whether or not the terminal will scroll the background image (if
         * one is set) when the text in the window must be scrolled.
         * @param scroll whether the terminal should scroll the background image along with   the text
         */
        set_scroll_background(scroll: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         * @param scroll whether the terminal should scroll on keystrokes
         */
        set_scroll_on_keystroke(scroll: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         * @param scroll whether the terminal should scroll on output
         */
        set_scroll_on_output(scroll: boolean): void;
        /**
         * Sets the length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.
         *
         * A negative value means "infinite scrollback".
         *
         * Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         * @param lines the length of the history buffer
         */
        set_scrollback_lines(lines: number): void;
        /**
         * Attempts to change the terminal's size in terms of rows and columns.  If
         * the attempt succeeds, the widget will resize itself to the proper size.
         * @param columns the desired number of columns
         * @param rows the desired number of rows
         */
        set_size(columns: number, rows: number): void;
        /**
         * Controls whether or not the terminal will present a visible bell to the
         * user when the child outputs the "bl" sequence.  The terminal
         * will clear itself to the default foreground color and then repaint itself.
         * @param is_visible whether the terminal should flash on bell
         */
        set_visible_bell(is_visible: boolean): void;
        /**
         * When the user double-clicks to start selection, the terminal will extend
         * the selection on word boundaries.  It will treat characters included in `spec`
         * as parts of words, and all other characters as word separators.  Ranges of
         * characters can be specified by separating them with a hyphen.
         *
         * As a special case, if `spec` is %NULL or the empty string, the terminal will
         * treat all graphic non-punctuation non-space characters as word characters.
         * @param spec a specification
         */
        set_word_chars(spec: string): void;
        /**
         * Watches `child_pid`. When the process exists, the #VteReaper::child-exited
         * signal will be called. Use vte_terminal_get_child_exit_status() to
         * retrieve the child's exit status.
         *
         * Prior to calling this function, a #VtePty must have been set in `terminal`
         * using vte_terminal_set_pty_object().
         * When the child exits, the terminal's #VtePty will be set to %NULL.
         *
         * Note: g_child_watch_add() or g_child_watch_add_full() must not have
         * been called for `child_pid,` nor a #GSource for it been created with
         * g_child_watch_source_new().
         *
         * Note: when using the g_spawn_async() family of functions,
         * the %G_SPAWN_DO_NOT_REAP_CHILD flag MUST have been passed.
         * @param child_pid a #GPid
         */
        watch_child(child_pid: GLib.Pid): void;
        /**
         * Write contents of the current contents of `terminal` (including any
         * scrollback history) to `stream` according to `flags`.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering
         * the cancellable object from another thread. If the operation was cancelled,
         * the error %G_IO_ERROR_CANCELLED will be returned in `error`.
         *
         * This is a synchronous operation and will make the widget (and input
         * processing) during the write operation, which may take a long time
         * depending on scrollback history and `stream` availability for writing.
         * @param stream a #GOutputStream to write to
         * @param flags a set of #VteTerminalWriteFlags
         * @param cancellable a #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE if there was an error
         */
        write_contents(
            stream: Gio.OutputStream,
            flags: TerminalWriteFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;

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

    class CharAttributes {
        static $gtype: GObject.GType<CharAttributes>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
    }

    type PtyClass = typeof Pty;
    type TerminalClass = typeof Terminal;
    abstract class TerminalClassPrivate {
        static $gtype: GObject.GType<TerminalClassPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class TerminalPrivate {
        static $gtype: GObject.GType<TerminalPrivate>;

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

export default Vte;

// END
