/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vte-2.91
 */

import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Vte {

/**
 * An enumeration type that can be used to specify how the terminal
 * uses extra allocated space.
 */
enum Align {
    /**
     * align to left/top
     */
    START,
    /**
     * align to centre
     */
    CENTER,
    /**
     * align to right/bottom
     */
    END,
}
/**
 * An enumerated type which can be used to indicate the cursor blink mode
 * for the terminal.
 */
enum CursorBlinkMode {
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
enum CursorShape {
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
enum EraseBinding {
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
 * An enumeration type that can be used to specify the format the selection
 * should be copied to the clipboard in.
 */
enum Format {
    /**
     * Export as plain text
     */
    TEXT,
    /**
     * Export as HTML formatted text
     */
    HTML,
}
enum PtyError {
    /**
     * Obsolete. Deprecated: 0.42
     */
    PTY_HELPER_FAILED,
    /**
     * failure when using PTY98 to allocate the PTY
     */
    PTY98_FAILED,
}
/**
 * An enum type for regex errors. In addition to the values listed above,
 * any PCRE2 error values may occur.
 */
enum RegexError {
    /**
     * The PCRE2 library was built without
     *   Unicode support which is required for VTE
     */
    INCOMPATIBLE,
    /**
     * Regexes are not supported because VTE was
     *   built without PCRE2 support
     */
    NOT_SUPPORTED,
}
/**
 * An enumerated type which can be used to indicate whether the terminal allows
 * the text contents to be blinked.
 */
enum TextBlinkMode {
    /**
     * Do not blink the text.
     */
    NEVER,
    /**
     * Allow blinking text only if the terminal is focused.
     */
    FOCUSED,
    /**
     * Allow blinking text only if the terminal is unfocused.
     */
    UNFOCUSED,
    /**
     * Allow blinking text. This is the default.
     */
    ALWAYS,
}
/**
 * A flag type to determine how terminal contents should be written
 * to an output stream.
 */
enum WriteFlags {
    /**
     * Write contents as UTF-8 text.  This is the default.
     */
    DEFAULT,
}
/**
 * An enumeration type for features.
 */
enum FeatureFlags {
    /**
     * whether VTE was built with bidirectional text support
     */
    FLAG_BIDI,
    /**
     * whether VTE was built with ICU support
     */
    FLAG_ICU,
    /**
     * whether VTE was built with systemd support
     */
    FLAG_SYSTEMD,
    /**
     * whether VTE was built with SIXEL support
     */
    FLAG_SIXEL,
    /**
     * mask of all feature flags
     */
    FLAGS_MASK,
}
enum PtyFlags {
    /**
     * Unused. Deprecated: 0.38
     */
    NO_LASTLOG,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_UTMP,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_WTMP,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_HELPER,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_FALLBACK,
    /**
     * Do not start a new session for the child in
     *   vte_pty_child_setup(). See man:setsid(2) for more information. Since: 0.58
     */
    NO_SESSION,
    /**
     * Do not set the PTY as the controlling TTY for the child
     *   in vte_pty_child_setup(). See man:tty_ioctl(4) for more information. Since: 0.58
     */
    NO_CTTY,
    /**
     * the default flags
     */
    DEFAULT,
}
/**
 * The major version number of the VTE library
 * (e.g. in version 3.1.4 this is 3).
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the VTE library
 * (e.g. in version 3.1.4 this is 4).
 */
const MICRO_VERSION: number
/**
 * The minor version number of the VTE library
 * (e.g. in version 3.1.4 this is 1).
 */
const MINOR_VERSION: number
const REGEX_FLAGS_DEFAULT: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Normally, the spawned process inherits the environment from the parent
 * process; when this flag is used, only the environment variables passed
 * to vte_pty_spawn_async() etc. are passed to the child process.
 */
const SPAWN_NO_PARENT_ENVV: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Prevents vte_pty_spawn_async() etc. from moving the newly created child
 * process to a systemd user scope.
 */
const SPAWN_NO_SYSTEMD_SCOPE: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Requires vte_pty_spawn_async() etc. to move the newly created child
 * process to a systemd user scope; if that fails, the whole spawn fails.
 * 
 * This is supported on Linux only.
 */
const SPAWN_REQUIRE_SYSTEMD_SCOPE: number
const TEST_FLAGS_ALL: number
const TEST_FLAGS_NONE: number
function getEncodingSupported(encoding: string): boolean
function getEncodings(includeAliases: boolean): string[]
function getFeatureFlags(): FeatureFlags
function getFeatures(): string
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function getUserShell(): string
function ptyErrorQuark(): GLib.Quark
function regexErrorQuark(): GLib.Quark
/**
 * Specifies the type of a selection function used to check whether
 * a cell has to be selected or not.
 */
interface SelectionFunc {
    (terminal: Terminal, column: number, row: number): boolean
}
/**
 * Callback for vte_terminal_spawn_async().
 * 
 * On success, `pid` contains the PID of the spawned process, and `error`
 * is %NULL.
 * On failure, `pid` is -1 and `error` contains the error information.
 */
interface TerminalSpawnAsyncCallback {
    (terminal: Terminal, pid: GLib.Pid, error: GLib.Error): void
}
interface Pty_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Vte-2.91.Vte.Pty */
    /**
     * The file descriptor of the PTY master.
     */
    fd?: number
    /**
     * Flags.
     */
    flags?: PtyFlags
}
class Pty {
    /* Properties of Vte-2.91.Vte.Pty */
    /**
     * The file descriptor of the PTY master.
     */
    readonly fd: number
    /**
     * Flags.
     */
    readonly flags: PtyFlags
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Vte-2.91.Vte.Pty */
    childSetup(): void
    /**
     * Since 0.42 this is a no-op.
     */
    close(): void
    getFd(): number
    /**
     * Reads the pseudo terminal's window size.
     * 
     * If getting the window size failed, `error` will be set to a #GIOError.
     */
    getSize(): [ /* returnType */ boolean, /* rows */ number | null, /* columns */ number | null ]
    /**
     * Attempts to resize the pseudo terminal's window size.  If successful, the
     * OS kernel will send <literal>SIGWINCH</literal> to the child process group.
     * 
     * If setting the window size failed, `error` will be set to a #GIOError.
     * @param rows the desired number of rows
     * @param columns the desired number of columns
     */
    setSize(rows: number, columns: number): boolean
    /**
     * Tells the kernel whether the terminal is UTF-8 or not, in case it can make
     * use of the info.  Linux 2.6.5 or so defines IUTF8 to make the line
     * discipline do multibyte backspace correctly.
     * @param utf8 whether or not the pty is in UTF-8 mode
     */
    setUtf8(utf8: boolean): boolean
    /**
     * Like vte_pty_spawn_with_fds_async(), except that this function does not
     * allow passing file descriptors to the child process. See vte_pty_spawn_with_fds_async()
     * for more information.
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnAsync(workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    spawnFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* childPid */ GLib.Pid | null ]
    /**
     * Starts the specified command under the pseudo-terminal `pty`.
     * The `argv` and `envv` lists should be %NULL-terminated.
     * The "TERM" environment variable is automatically set to a default value,
     * but can be overridden from `envv`.
     * `pty_flags` controls logging the session to the specified system log files.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY. Also %G_SPAWN_LEAVE_DESCRIPTORS_OPEN is not supported; and
     * %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
     * 
     * If `fds` is not %NULL, the child process will map the file descriptors from
     * `fds` according to `map_fds;` `n_map_fds` must be less or equal to `n_fds`.
     * This function will take ownership of the file descriptors in `fds;`
     * you must not use or close them after this call. All file descriptors in `fds`
     * must have the FD_CLOEXEC flag set on them; it will be unset in the child process
     * before calling man:execve(2). Note also that no file descriptor may be mapped
     * to stdin, stdout, or stderr (file descriptors 0, 1, or 2), since these will be
     * assigned to the PTY. All open file descriptors apart from those mapped as above
     * will be closed when execve() is called.
     * 
     * Beginning with 0.60, and on linux only, and unless %VTE_SPAWN_NO_SYSTEMD_SCOPE is
     * passed in `spawn_flags,` the newly created child process will be moved to its own
     * systemd user scope; and if %VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE is passed, and creation
     * of the systemd user scope fails, the whole spawn will fail.
     * You can override the options used for the systemd user scope by
     * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
     * for further information.
     * 
     * See vte_pty_new(), and vte_terminal_watch_child() for more information.
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param fds an array of file descriptors, or %NULL
     * @param mapFds an array of integers, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnWithFdsAsync(workingDirectory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, mapFds: number[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fd", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fd", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pty_ConstructProps)
    _init (config?: Pty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForeignSync(fd: number, cancellable?: Gio.Cancellable | null): Pty
    static newSync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Terminal_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Vte-2.91.Vte.Terminal */
    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    allowBold?: boolean
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
     */
    allowHyperlink?: boolean
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    audibleBell?: boolean
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the backspace key.
     */
    backspaceBinding?: EraseBinding
    /**
     * Whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    boldIsBright?: boolean
    /**
     * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
     */
    cellHeightScale?: number
    /**
     * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
     */
    cellWidthScale?: number
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * 
     * This setting only takes effect the next time the terminal is reset, either
     * via escape sequence or with vte_terminal_reset().
     */
    cjkAmbiguousWidth?: number
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings:gtk-cursor-blink setting.
     */
    cursorBlinkMode?: CursorBlinkMode
    /**
     * Controls the shape of the cursor.
     */
    cursorShape?: CursorShape
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the delete key.
     */
    deleteBinding?: EraseBinding
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     */
    enableBidi?: boolean
    enableFallbackScrolling?: boolean
    /**
     * Controls whether or not the terminal will shape Arabic text.
     */
    enableShaping?: boolean
    /**
     * Controls whether SIXEL image support is enabled.
     */
    enableSixel?: boolean
    /**
     * Controls the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding.  The default is defined by the
     * application's locale settings.
     */
    encoding?: string
    /**
     * Specifies the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.
     */
    fontDesc?: Pango.FontDescription
    /**
     * The terminal's font scale.
     */
    fontScale?: number
    /**
     * Controls whether the terminal allows user input. When user input is disabled,
     * key press and mouse button press and motion events are not sent to the
     * terminal's child.
     */
    inputEnabled?: boolean
    /**
     * Controls the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.
     */
    pointerAutohide?: boolean
    /**
     * The PTY object for the terminal.
     */
    pty?: Pty
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback buffer, whenever the terminal's width changes.
     */
    rewrapOnResize?: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     */
    scrollOnKeystroke?: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     */
    scrollOnOutput?: boolean
    /**
     * Controls whether the terminal's GtkAdjustment values unit is lines
     * or pixels. This can be enabled when the terminal is the child of a
     * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
     */
    scrollUnitIsPixels?: boolean
    /**
     * The length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.  Note that this setting only affects the normal screen buffer.
     * For terminal types which have an alternate screen buffer, no scrollback is
     * allowed on the alternate screen buffer.
     */
    scrollbackLines?: number
    /**
     * Controls whether or not the terminal will allow blinking text.
     */
    textBlinkMode?: TextBlinkMode
    /**
     * The horizontal alignment of `terminal` within its allocation.
     */
    xalign?: Align
    /**
     * The horizontal fillment of `terminal` within its allocation.
     */
    xfill?: boolean
    /**
     * The vertical alignment of `terminal` within its allocation
     */
    yalign?: Align
    /**
     * The vertical fillment of `terminal` within its allocation
     */
    yfill?: boolean
    /* Constructor properties of Gtk-3.0.Gtk.Scrollable */
    /**
     * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
     * shared between the scrollable widget and its parent.
     */
    hadjustment?: Gtk.Adjustment
    /**
     * Determines whether horizontal scrolling should start once the scrollable
     * widget is allocated less than its minimum width or less than its natural width.
     */
    hscrollPolicy?: Gtk.ScrollablePolicy
    /**
     * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
     * between the scrollable widget and its parent.
     */
    vadjustment?: Gtk.Adjustment
    /**
     * Determines whether vertical scrolling should start once the scrollable
     * widget is allocated less than its minimum height or less than its natural height.
     */
    vscrollPolicy?: Gtk.ScrollablePolicy
}
class Terminal {
    /* Properties of Vte-2.91.Vte.Terminal */
    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    allowBold: boolean
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
     */
    allowHyperlink: boolean
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    audibleBell: boolean
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the backspace key.
     */
    backspaceBinding: EraseBinding
    /**
     * Whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    boldIsBright: boolean
    /**
     * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
     */
    cellHeightScale: number
    /**
     * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
     */
    cellWidthScale: number
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * 
     * This setting only takes effect the next time the terminal is reset, either
     * via escape sequence or with vte_terminal_reset().
     */
    cjkAmbiguousWidth: number
    /**
     * The current directory URI, or %NULL if unset.
     */
    readonly currentDirectoryUri: string
    /**
     * The current file URI, or %NULL if unset.
     */
    readonly currentFileUri: string
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings:gtk-cursor-blink setting.
     */
    cursorBlinkMode: CursorBlinkMode
    /**
     * Controls the shape of the cursor.
     */
    cursorShape: CursorShape
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the delete key.
     */
    deleteBinding: EraseBinding
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     */
    enableBidi: boolean
    enableFallbackScrolling: boolean
    /**
     * Controls whether or not the terminal will shape Arabic text.
     */
    enableShaping: boolean
    /**
     * Controls whether SIXEL image support is enabled.
     */
    enableSixel: boolean
    /**
     * Controls the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding.  The default is defined by the
     * application's locale settings.
     */
    encoding: string
    /**
     * Specifies the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.
     */
    fontDesc: Pango.FontDescription
    /**
     * The terminal's font scale.
     */
    fontScale: number
    /**
     * The currently hovered hyperlink URI, or %NULL if unset.
     */
    readonly hyperlinkHoverUri: string
    readonly iconTitle: string
    /**
     * Controls whether the terminal allows user input. When user input is disabled,
     * key press and mouse button press and motion events are not sent to the
     * terminal's child.
     */
    inputEnabled: boolean
    /**
     * Controls the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.
     */
    pointerAutohide: boolean
    /**
     * The PTY object for the terminal.
     */
    pty: Pty
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback buffer, whenever the terminal's width changes.
     */
    rewrapOnResize: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     */
    scrollOnKeystroke: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     */
    scrollOnOutput: boolean
    /**
     * Controls whether the terminal's GtkAdjustment values unit is lines
     * or pixels. This can be enabled when the terminal is the child of a
     * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
     */
    scrollUnitIsPixels: boolean
    /**
     * The length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.  Note that this setting only affects the normal screen buffer.
     * For terminal types which have an alternate screen buffer, no scrollback is
     * allowed on the alternate screen buffer.
     */
    scrollbackLines: number
    /**
     * Controls whether or not the terminal will allow blinking text.
     */
    textBlinkMode: TextBlinkMode
    /**
     * The terminal's title.
     */
    readonly windowTitle: string
    /**
     * The set of characters which will be considered parts of a word
     * when doing word-wise selection, in addition to the default which only
     * considers alphanumeric characters part of a word.
     * 
     * If %NULL, a built-in set is used.
     */
    readonly wordCharExceptions: string
    /**
     * The horizontal alignment of `terminal` within its allocation.
     */
    xalign: Align
    /**
     * The horizontal fillment of `terminal` within its allocation.
     */
    xfill: boolean
    /**
     * The vertical alignment of `terminal` within its allocation
     */
    yalign: Align
    /**
     * The vertical fillment of `terminal` within its allocation
     */
    yfill: boolean
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    /**
     * Whether the widget is double buffered.
     */
    doubleBuffered: boolean
    events: Gdk.EventMask
    /**
     * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
     */
    expand: boolean
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * 
     * This property is only relevant for widgets that can take focus.
     * 
     * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
     * GtkComboBox) implemented this property individually.
     */
    focusOnClick: boolean
    /**
     * How to distribute horizontal space if widget gets extra space, see #GtkAlign
     */
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using #GtkWidget::query-tooltip to determine
     * whether it will provide a tooltip or not.
     * 
     * Note that setting this property to %TRUE for the first time will change
     * the event masks of the GdkWindows of this widget to include leave-notify
     * and motion-notify events.  This cannot and will not be undone when the
     * property is set to %FALSE again.
     */
    hasTooltip: boolean
    heightRequest: number
    /**
     * Whether to expand horizontally. See gtk_widget_set_hexpand().
     */
    hexpand: boolean
    /**
     * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
     */
    hexpandSet: boolean
    isFocus: boolean
    /**
     * Sets all four sides' margin at once. If read, returns max
     * margin on any side.
     */
    margin: number
    /**
     * Margin on bottom side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    marginBottom: number
    /**
     * Margin on end of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    marginEnd: number
    /**
     * Margin on left side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    marginLeft: number
    /**
     * Margin on right side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    marginRight: number
    /**
     * Margin on start of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    marginStart: number
    /**
     * Margin on top side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    marginTop: number
    name: string
    noShowAll: boolean
    /**
     * The requested opacity of the widget. See gtk_widget_set_opacity() for
     * more details about window opacity.
     * 
     * Before 3.8 this was only available in GtkWindow
     */
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    /**
     * The scale factor of the widget. See gtk_widget_get_scale_factor() for
     * more details about widget scaling.
     */
    readonly scaleFactor: number
    sensitive: boolean
    /**
     * The style of the widget, which contains information about how it will look (colors, etc).
     */
    style: Gtk.Style
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with the [Pango text markup language][PangoMarkupFormat].
     * Also see gtk_tooltip_set_markup().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltipMarkup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see gtk_tooltip_set_text().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltipText: string
    /**
     * How to distribute vertical space if widget gets extra space, see #GtkAlign
     */
    valign: Gtk.Align
    /**
     * Whether to expand vertically. See gtk_widget_set_vexpand().
     */
    vexpand: boolean
    /**
     * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
     */
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /**
     * The widget's window if it is realized, %NULL otherwise.
     */
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    /**
     * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
     * shared between the scrollable widget and its parent.
     */
    hadjustment: Gtk.Adjustment
    /**
     * Determines whether horizontal scrolling should start once the scrollable
     * widget is allocated less than its minimum width or less than its natural width.
     */
    hscrollPolicy: Gtk.ScrollablePolicy
    /**
     * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
     * between the scrollable widget and its parent.
     */
    vadjustment: Gtk.Adjustment
    /**
     * Determines whether vertical scrolling should start once the scrollable
     * widget is allocated less than its minimum height or less than its natural height.
     */
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Gtk-3.0.Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Vte-2.91.Vte.Terminal */
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection.
     */
    copyClipboard(): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection in the form specified by `format`.
     * 
     * For all formats, the selection data (see #GtkSelectionData) will include the
     * text targets (see gtk_target_list_add_text_targets() and
     * gtk_selection_data_targets_includes_text()). For %VTE_FORMAT_HTML,
     * the selection will also include the "text/html" target, which when requested,
     * returns the HTML data in UTF-16 with a U+FEFF BYTE ORDER MARK character at
     * the start.
     * @param format a #VteFormat
     */
    copyClipboardFormat(format: Format): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_PRIMARY
     * selection.
     */
    copyPrimary(): void
    /**
     * This function does nothing.
     * @param event a #GdkEvent
     * @param regexes an array of #GRegex
     * @param matchFlags the #GRegexMatchFlags to use when matching the regexes
     */
    eventCheckGregexSimple(event: Gdk.Event, regexes: GLib.Regex[], matchFlags: GLib.RegexMatchFlags): [ /* returnType */ boolean, /* matches */ string[] ]
    /**
     * Like vte_terminal_event_check_regex_simple(), but returns an array of strings,
     * containing the matching text (or %NULL if no match) corresponding to each of the
     * regexes in `regexes`.
     * 
     * You must free each string and the array; but note that this is *not* a %NULL-terminated
     * string array, and so you must *not* use g_strfreev() on it.
     * @param event a #GdkEvent
     * @param regexes an array of #VteRegex
     * @param matchFlags PCRE2 match flags, or 0
     */
    eventCheckRegexSimple(event: Gdk.Event, regexes: Regex[], matchFlags: number): string[] | null
    /**
     * Interprets `data` as if it were data received from a child process.
     * @param data a string in the terminal's current encoding
     */
    feed(data: Uint8Array | null): void
    /**
     * Sends a block of UTF-8 text to the child as if it were entered by the user
     * at the keyboard.
     * @param text data to send to the child
     */
    feedChild(text: Uint8Array | null): void
    /**
     * Sends a block of binary data to the child.
     * @param data data to send to the child
     */
    feedChildBinary(data: Uint8Array | null): void
    /**
     * Checks whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    getAllowBold(): boolean
    /**
     * Checks whether or not hyperlinks (OSC 8 escape sequence) are allowed.
     */
    getAllowHyperlink(): boolean
    /**
     * Checks whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    getAudibleBell(): boolean
    /**
     * Checks whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    getBoldIsBright(): boolean
    getCellHeightScale(): number
    getCellWidthScale(): number
    getCharHeight(): number
    getCharWidth(): number
    /**
     * Returns whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     */
    getCjkAmbiguousWidth(): number
    /**
     * Returns the background colour, as used by `terminal` when
     * drawing the background, which may be different from
     * the color set by vte_terminal_set_color_background().
     * 
     * Note: you must only call this function while handling the
     * GtkWidget::draw signal.
     * 
     * This function is rarely useful. One use for it is if you disable
     * drawing the background (see vte_terminal_set_clear_background())
     * and then need to draw the background yourself.
     */
    getColorBackgroundForDraw(): /* color */ Gdk.RGBA
    getColumnCount(): number
    getCurrentDirectoryUri(): string | null
    getCurrentFileUri(): string | null
    /**
     * Returns the currently set cursor blink mode.
     */
    getCursorBlinkMode(): CursorBlinkMode
    /**
     * Reads the location of the insertion cursor and returns it.  The row
     * coordinate is absolute.
     * 
     * This method is unaware of BiDi. The returned column is logical column.
     */
    getCursorPosition(): [ /* column */ number | null, /* row */ number | null ]
    /**
     * Returns the currently set cursor shape.
     */
    getCursorShape(): CursorShape
    /**
     * Checks whether the terminal performs bidirectional text rendering.
     */
    getEnableBidi(): boolean
    getEnableFallbackScrolling(): boolean
    /**
     * Checks whether the terminal shapes Arabic text.
     */
    getEnableShaping(): boolean
    getEnableSixel(): boolean
    /**
     * Determines the name of the encoding in which the terminal expects data to be
     * encoded, or %NULL if UTF-8 is in use.
     */
    getEncoding(): string | null
    /**
     * Queries the terminal for information about the fonts which will be
     * used to draw text in the terminal.  The actual font takes the font scale
     * into account, this is not reflected in the return value, the unscaled
     * font is returned.
     */
    getFont(): Pango.FontDescription
    getFontScale(): number
    /**
     * Fills in some `hints` from `terminal'`s geometry. The hints
     * filled are those covered by the %GDK_HINT_RESIZE_INC,
     * %GDK_HINT_MIN_SIZE and %GDK_HINT_BASE_SIZE flags.
     * 
     * See gtk_window_set_geometry_hints() for more information.
     * 
     * `terminal` must be realized (see gtk_widget_get_realized()).
     * @param minRows the minimum number of rows to request
     * @param minColumns the minimum number of columns to request
     */
    getGeometryHints(minRows: number, minColumns: number): /* hints */ Gdk.Geometry
    /**
     * Checks if the terminal currently contains selected text.  Note that this
     * is different from determining if the terminal is the owner of any
     * #GtkClipboard items.
     */
    getHasSelection(): boolean
    getIconTitle(): string | null
    /**
     * Returns whether the terminal allow user input.
     */
    getInputEnabled(): boolean
    /**
     * Determines the value of the terminal's mouse autohide setting.  When
     * autohiding is enabled, the mouse cursor will be hidden when the user presses
     * a key and shown when the user moves the mouse.  This setting can be changed
     * using vte_terminal_set_mouse_autohide().
     */
    getMouseAutohide(): boolean
    /**
     * Returns the #VtePty of `terminal`.
     */
    getPty(): Pty
    /**
     * Checks whether or not the terminal will rewrap its contents upon resize.
     */
    getRewrapOnResize(): boolean
    getRowCount(): number
    getScrollOnKeystroke(): boolean
    getScrollOnOutput(): boolean
    getScrollUnitIsPixels(): boolean
    getScrollbackLines(): number
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.
     * 
     * This method is unaware of BiDi. The columns returned in `attributes` are
     * logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param isSelected a #VteSelectionFunc callback
     */
    getText(isSelected?: SelectionFunc | null): [ /* returnType */ string | null, /* attributes */ CharAttributes[] | null ]
    /**
     * Checks whether or not the terminal will allow blinking text.
     */
    getTextBlinkMode(): TextBlinkMode
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.
     * 
     * This method is unaware of BiDi. The columns returned in `attributes` are
     * logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param isSelected a #VteSelectionFunc callback
     */
    getTextIncludeTrailingSpaces(isSelected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.  The
     * entire scrollback buffer is scanned, so it is possible to read the entire
     * contents of the buffer using this function.
     * 
     * This method is unaware of BiDi. The columns passed in `start_col` and `end_row,`
     * and returned in `attributes` are logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param startRow first row to search for data
     * @param startCol first column to search for data
     * @param endRow last row to search for data
     * @param endCol last column to search for data
     * @param isSelected a #VteSelectionFunc callback
     */
    getTextRange(startRow: number, startCol: number, endRow: number, endCol: number, isSelected?: SelectionFunc | null): [ /* returnType */ string | null, /* attributes */ CharAttributes[] | null ]
    getWindowTitle(): string | null
    /**
     * Returns the set of characters which will be considered parts of a word
     * when doing word-wise selection, in addition to the default which only
     * considers alphanumeric characters part of a word.
     * 
     * If %NULL, a built-in set is used.
     */
    getWordCharExceptions(): string | null
    getXalign(): Align
    getXfill(): boolean
    getYalign(): Align
    getYfill(): boolean
    /**
     * Returns a nonempty string: the target of the explicit hyperlink (printed using the OSC 8
     * escape sequence) at the position of the event, or %NULL.
     * 
     * Proper use of the escape sequence should result in URI-encoded URIs with a proper scheme
     * like "http://", "https://", "file://", "mailto:" etc. This is, however, not enforced by VTE.
     * The caller must tolerate the returned string potentially not being a valid URI.
     * @param event a #GdkEvent
     */
    hyperlinkCheckEvent(event: Gdk.Event): string | null
    /**
     * This function does nothing since version 0.60.
     * @param gregex a #GRegex
     * @param gflags the #GRegexMatchFlags to use when matching the regex
     */
    matchAddGregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number
    /**
     * Adds the regular expression `regex` to the list of matching expressions.  When the
     * user moves the mouse cursor over a section of displayed text which matches
     * this expression, the text will be highlighted.
     * 
     * Note that `regex` should have been created using the <literal>PCRE2_MULTILINE</literal>
     * flag.
     * @param regex a #VteRegex
     * @param flags PCRE2 match flags, or 0
     */
    matchAddRegex(regex: Regex, flags: number): number
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
     */
    matchCheck(column: number, row: number): [ /* returnType */ string | null, /* tag */ number | null ]
    /**
     * Checks if the text in and around the position of the event matches any of the
     * regular expressions previously set using vte_terminal_match_add().  If a
     * match exists, the text string is returned and if `tag` is not %NULL, the number
     * associated with the matched regular expression will be stored in `tag`.
     * 
     * If more than one regular expression has been set with
     * vte_terminal_match_add(), then expressions are checked in the order in
     * which they were added.
     * @param event a #GdkEvent
     */
    matchCheckEvent(event: Gdk.Event): [ /* returnType */ string | null, /* tag */ number | null ]
    /**
     * Removes the regular expression which is associated with the given `tag` from
     * the list of expressions which the terminal will highlight when the user
     * moves the mouse cursor over matching text.
     * @param tag the tag of the regex to remove
     */
    matchRemove(tag: number): void
    /**
     * Clears the list of regular expressions the terminal uses to highlight text
     * when the user moves the mouse cursor.
     */
    matchRemoveAll(): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.  The terminal keeps a reference to `cursor`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursor the #GdkCursor which the terminal should use when the pattern is   highlighted, or %NULL to use the standard cursor
     */
    matchSetCursor(tag: number, cursor?: Gdk.Cursor | null): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursorName the name of the cursor
     */
    matchSetCursorName(tag: number, cursorName: string): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursorType a #GdkCursorType
     */
    matchSetCursorType(tag: number, cursorType: Gdk.CursorType): void
    /**
     * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
     * terminal's child. It's called on paste menu item, or when
     * user presses Shift+Insert.
     */
    pasteClipboard(): void
    /**
     * Sends the contents of the #GDK_SELECTION_PRIMARY selection to the terminal's
     * child. The terminal will call also paste the
     * #GDK_SELECTION_PRIMARY selection when the user clicks with the the second
     * mouse button.
     */
    pastePrimary(): void
    /**
     * Sends `text` to the terminal's child as if retrived from the clipboard,
     * this differs from vte_terminal_feed_child() in that it may process
     * `text` before passing it to the child (e.g. apply bracketed mode)
     * @param text a string to paste
     */
    pasteText(text: string): void
    /**
     * Creates a new #VtePty, sets the emulation property
     * from #VteTerminal:emulation, and sets the size using
     * `terminal'`s size.
     * 
     * See vte_pty_new() for more information.
     * @param flags flags from #VtePtyFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    ptyNewSync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty
    /**
     * Resets as much of the terminal's internal state as possible, discarding any
     * unprocessed input data, resetting character attributes, cursor state,
     * national character set state, status line, terminal modes (insert/delete),
     * selection state, and encoding.
     * @param clearTabstops whether to reset tabstops
     * @param clearHistory whether to empty the terminal's scrollback buffer
     */
    reset(clearTabstops: boolean, clearHistory: boolean): void
    /**
     * Searches the next string matching the search regex set with
     * vte_terminal_search_set_regex().
     */
    searchFindNext(): boolean
    /**
     * Searches the previous string matching the search regex set with
     * vte_terminal_search_set_regex().
     */
    searchFindPrevious(): boolean
    searchGetGregex(): GLib.Regex
    searchGetRegex(): Regex
    searchGetWrapAround(): boolean
    /**
     * This function does nothing since version 0.60.
     * @param gregex a #GRegex, or %NULL
     * @param gflags flags from #GRegexMatchFlags
     */
    searchSetGregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void
    /**
     * Sets the regex to search for. Unsets the search regex when passed %NULL.
     * 
     * Note that `regex` should have been created using the
     * <literal>PCRE2_MULTILINE</literal> flag.
     * @param regex a #VteRegex, or %NULL
     * @param flags PCRE2 match flags, or 0
     */
    searchSetRegex(regex: Regex | null, flags: number): void
    /**
     * Sets whether search should wrap around to the beginning of the
     * terminal content when reaching its end.
     * @param wrapAround whether search should wrap
     */
    searchSetWrapAround(wrapAround: boolean): void
    /**
     * Selects all text within the terminal (not including the scrollback buffer).
     */
    selectAll(): void
    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     * @param allowBold %TRUE if the terminal should attempt to draw bold text
     */
    setAllowBold(allowBold: boolean): void
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are allowed.
     * @param allowHyperlink %TRUE if the terminal should allow hyperlinks
     */
    setAllowHyperlink(allowHyperlink: boolean): void
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     * @param isAudible %TRUE if the terminal should beep
     */
    setAudibleBell(isAudible: boolean): void
    /**
     * Modifies the terminal's backspace key binding, which controls what
     * string or control sequence the terminal sends to its child when the user
     * presses the backspace key.
     * @param binding a #VteEraseBinding for the backspace key
     */
    setBackspaceBinding(binding: EraseBinding): void
    /**
     * Sets whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     * @param boldIsBright %TRUE if bold should also enable bright
     */
    setBoldIsBright(boldIsBright: boolean): void
    /**
     * Sets the terminal's cell height scale to `scale`.
     * 
     * This can be used to increase the line spacing. (The font's height is not affected.)
     * Valid values go from 1.0 (default) to 2.0 ("double spacing").
     * @param scale the cell height scale
     */
    setCellHeightScale(scale: number): void
    /**
     * Sets the terminal's cell width scale to `scale`.
     * 
     * This can be used to increase the letter spacing. (The font's width is not affected.)
     * Valid values go from 1.0 (default) to 2.0.
     * @param scale the cell width scale
     */
    setCellWidthScale(scale: number): void
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * @param width either 1 (narrow) or 2 (wide)
     */
    setCjkAmbiguousWidth(width: number): void
    /**
     * Sets whether to paint the background with the background colour.
     * The default is %TRUE.
     * 
     * This function is rarely useful. One use for it is to add a background
     * image to the terminal.
     * @param setting whether to clear the background
     */
    setClearBackground(setting: boolean): void
    /**
     * Sets the background color for text which does not have a specific background
     * color assigned.  Only has effect when no background image is set and when
     * the terminal is not transparent.
     * @param background the new background color
     */
    setColorBackground(background: Gdk.RGBA): void
    /**
     * Sets the color used to draw bold text in the default foreground color.
     * If `bold` is %NULL then the default color is used.
     * @param bold the new bold color or %NULL
     */
    setColorBold(bold?: Gdk.RGBA | null): void
    /**
     * Sets the background color for text which is under the cursor.  If %NULL, text
     * under the cursor will be drawn with foreground and background colors
     * reversed.
     * @param cursorBackground the new color to use for the text cursor, or %NULL
     */
    setColorCursor(cursorBackground?: Gdk.RGBA | null): void
    /**
     * Sets the foreground color for text which is under the cursor.  If %NULL, text
     * under the cursor will be drawn with foreground and background colors
     * reversed.
     * @param cursorForeground the new color to use for the text cursor, or %NULL
     */
    setColorCursorForeground(cursorForeground?: Gdk.RGBA | null): void
    /**
     * Sets the foreground color used to draw normal text.
     * @param foreground the new foreground color
     */
    setColorForeground(foreground: Gdk.RGBA): void
    /**
     * Sets the background color for text which is highlighted.  If %NULL,
     * it is unset.  If neither highlight background nor highlight foreground are set,
     * highlighted text (which is usually highlighted because it is selected) will
     * be drawn with foreground and background colors reversed.
     * @param highlightBackground the new color to use for highlighted text, or %NULL
     */
    setColorHighlight(highlightBackground?: Gdk.RGBA | null): void
    /**
     * Sets the foreground color for text which is highlighted.  If %NULL,
     * it is unset.  If neither highlight background nor highlight foreground are set,
     * highlighted text (which is usually highlighted because it is selected) will
     * be drawn with foreground and background colors reversed.
     * @param highlightForeground the new color to use for highlighted text, or %NULL
     */
    setColorHighlightForeground(highlightForeground?: Gdk.RGBA | null): void
    /**
     * `palette` specifies the new values for the 256 palette colors: 8 standard colors,
     * their 8 bright counterparts, 6x6x6 color cube, and 24 grayscale colors.
     * Omitted entries will default to a hardcoded value.
     * 
     * `palette_size` must be 0, 8, 16, 232 or 256.
     * 
     * If `foreground` is %NULL and `palette_size` is greater than 0, the new foreground
     * color is taken from `palette[`7].  If `background` is %NULL and `palette_size` is
     * greater than 0, the new background color is taken from `palette[`0].
     * @param foreground the new foreground color, or %NULL
     * @param background the new background color, or %NULL
     * @param palette the color palette
     */
    setColors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null): void
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings::gtk-cursor-blink setting.
     * @param mode the #VteCursorBlinkMode to use
     */
    setCursorBlinkMode(mode: CursorBlinkMode): void
    /**
     * Sets the shape of the cursor drawn.
     * @param shape the #VteCursorShape to use
     */
    setCursorShape(shape: CursorShape): void
    /**
     * Reset the terminal palette to reasonable compiled-in default color.
     */
    setDefaultColors(): void
    /**
     * Modifies the terminal's delete key binding, which controls what
     * string or control sequence the terminal sends to its child when the user
     * presses the delete key.
     * @param binding a #VteEraseBinding for the delete key
     */
    setDeleteBinding(binding: EraseBinding): void
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     * @param enableBidi %TRUE to enable BiDi support
     */
    setEnableBidi(enableBidi: boolean): void
    /**
     * Controls whether the terminal uses scroll events to scroll the history
     * if the event was not otherwise consumed by it.
     * 
     * This function is rarely useful, except when the terminal is added to a
     * #GtkScrolledWindow, to perform kinetic scrolling (while vte itself does
     * not, yet, implement kinetic scrolling by itself).
     * @param enable whether to enable fallback scrolling
     */
    setEnableFallbackScrolling(enable: boolean): void
    /**
     * Controls whether or not the terminal will shape Arabic text.
     * @param enableShaping %TRUE to enable Arabic shaping
     */
    setEnableShaping(enableShaping: boolean): void
    /**
     * Set whether to enable SIXEL images.
     * @param enabled whether to enable SIXEL images
     */
    setEnableSixel(enabled: boolean): void
    /**
     * Changes the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding. If `codeset` is %NULL, it uses "UTF-8".
     * 
     * Note: Support for non-UTF-8 is deprecated and may get removed altogether.
     * Instead of this function, you should use a wrapper like luit(1) when
     * spawning the child process.
     * @param codeset target charset, or %NULL to use UTF-8
     */
    setEncoding(codeset?: string | null): boolean
    /**
     * Sets the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.  The font scale is applied to the specified font.
     * @param fontDesc a #PangoFontDescription for the desired font, or %NULL
     */
    setFont(fontDesc?: Pango.FontDescription | null): void
    /**
     * Sets the terminal's font scale to `scale`.
     * @param scale the font scale
     */
    setFontScale(scale: number): void
    /**
     * Sets `terminal` as `window'`s geometry widget. See
     * gtk_window_set_geometry_hints() for more information.
     * 
     * `terminal` must be realized (see gtk_widget_get_realized()).
     * @param window a #GtkWindow
     */
    setGeometryHintsForWindow(window: Gtk.Window): void
    /**
     * Enables or disables user input. When user input is disabled,
     * the terminal's child will not receive any key press, or mouse button
     * press or motion events sent to it.
     * @param enabled whether to enable user input
     */
    setInputEnabled(enabled: boolean): void
    /**
     * Changes the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.  This setting can be read using
     * vte_terminal_get_mouse_autohide().
     * @param setting whether the mouse pointer should autohide
     */
    setMouseAutohide(setting: boolean): void
    /**
     * Sets `pty` as the PTY to use in `terminal`.
     * Use %NULL to unset the PTY.
     * @param pty a #VtePty, or %NULL
     */
    setPty(pty?: Pty | null): void
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback history, whenever the terminal's width changes.
     * @param rewrap %TRUE if the terminal should rewrap on resize
     */
    setRewrapOnResize(rewrap: boolean): void
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     * @param scroll whether the terminal should scroll on keystrokes
     */
    setScrollOnKeystroke(scroll: boolean): void
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     * @param scroll whether the terminal should scroll on output
     */
    setScrollOnOutput(scroll: boolean): void
    /**
     * Controls whether the terminal's scroll unit is lines or pixels.
     * 
     * This function is rarely useful, except when the terminal is added to a
     * #GtkScrolledWindow.
     * @param enable whether to use pixels as scroll unit
     */
    setScrollUnitIsPixels(enable: boolean): void
    /**
     * Sets the length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.
     * 
     * A negative value means "infinite scrollback".
     * 
     * Note that this setting only affects the normal screen buffer.
     * No scrollback is allowed on the alternate screen buffer.
     * @param lines the length of the history buffer
     */
    setScrollbackLines(lines: number): void
    /**
     * Attempts to change the terminal's size in terms of rows and columns.  If
     * the attempt succeeds, the widget will resize itself to the proper size.
     * @param columns the desired number of columns
     * @param rows the desired number of rows
     */
    setSize(columns: number, rows: number): void
    /**
     * Controls whether or not the terminal will allow blinking text.
     * @param textBlinkMode the #VteTextBlinkMode to use
     */
    setTextBlinkMode(textBlinkMode: TextBlinkMode): void
    /**
     * With this function you can provide a set of characters which will
     * be considered parts of a word when doing word-wise selection, in
     * addition to the default which only considers alphanumeric characters
     * part of a word.
     * 
     * The characters in `exceptions` must be non-alphanumeric, each character
     * must occur only once, and if `exceptions` contains the character
     * U+002D HYPHEN-MINUS, it must be at the start of the string.
     * 
     * Use %NULL to reset the set of exception characters to the default.
     * @param exceptions a string of ASCII punctuation characters, or %NULL
     */
    setWordCharExceptions(exceptions: string): void
    /**
     * Sets the horizontal alignment of `terminal` within its allocation.
     * 
     * Note: %VTE_ALIGN_START_FILL is not supported, and will be treated
     *   like %VTE_ALIGN_START.
     * @param align alignment value from #VteAlign
     */
    setXalign(align: Align): void
    /**
     * Sets the horizontal fillment of `terminal` within its allocation.
     * 
     * Note: %VTE_FILL_START_FILL is not supported, and will be treated
     *   like %VTE_FILL_START.
     * @param fill fillment value from #VteFill
     */
    setXfill(fill: boolean): void
    /**
     * Sets the vertical alignment of `terminal` within its allocation.
     * @param align alignment value from #VteAlign
     */
    setYalign(align: Align): void
    /**
     * Sets the vertical fillment of `terminal` within its allocation.
     * @param fill fillment value from #VteFill
     */
    setYfill(fill: boolean): void
    /**
     * A convenience function that wraps creating the #VtePty and spawning
     * the child process on it. Like vte_terminal_spawn_with_fds_async(),
     * except that this function does not allow passing file descriptors to
     * the child process. See vte_terminal_spawn_with_fds_async() for more
     * information.
     * @param ptyFlags flags from #VtePtyFlags
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnAsync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    /**
     * Starts the specified command under a newly-allocated controlling
     * pseudo-terminal.  The `argv` and `envv` lists should be %NULL-terminated.
     * The "TERM" environment variable is automatically set to a default value,
     * but can be overridden from `envv`.
     * `pty_flags` controls logging the session to the specified system log files.
     * 
     * Note that %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY.
     * 
     * Note that all open file descriptors will be closed in the child. If you want
     * to keep some file descriptor open for use in the child process, you need to
     * use a child setup function that unsets the FD_CLOEXEC flag on that file
     * descriptor.
     * 
     * See vte_pty_new(), g_spawn_async() and vte_terminal_watch_child() for more information.
     * 
     * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
     * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory,`
     * e.g. by using vte_terminal_get_current_directory_uri(), g_get_current_dir() or get_current_dir_name().
     * @param ptyFlags flags from #VtePtyFlags
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param childSetup an extra child setup function to run in the child just before exec(), or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnSync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, childSetup?: GLib.SpawnChildSetupFunc | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* childPid */ GLib.Pid | null ]
    /**
     * A convenience function that wraps creating the #VtePty and spawning
     * the child process on it. See vte_pty_new_sync(), vte_pty_spawn_with_fds_async(),
     * and vte_pty_spawn_finish() for more information.
     * 
     * When the operation is finished successfully, `callback` will be called
     * with the child #GPid, and a %NULL #GError. The child PID will already be
     * watched via vte_terminal_watch_child().
     * 
     * When the operation fails, `callback` will be called with a -1 #GPid,
     * and a non-%NULL #GError containing the error information.
     * 
     * Note that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY.
     * 
     * If `fds` is not %NULL, the child process will map the file descriptors from
     * `fds` according to `map_fds;` `n_map_fds` must be less or equal to `n_fds`.
     * This function will take ownership of the file descriptors in `fds;`
     * you must not use or close them after this call.
     * 
     * Note that all  open file descriptors apart from those mapped as above
     * will be closed in the child. (If you want to keep some other file descriptor
     * open for use in the child process, you need to use a child setup function
     * that unsets the FD_CLOEXEC flag on that file descriptor manually.)
     * 
     * Beginning with 0.60, and on linux only, and unless %VTE_SPAWN_NO_SYSTEMD_SCOPE is
     * passed in `spawn_flags,` the newly created child process will be moved to its own
     * systemd user scope; and if %VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE is passed, and creation
     * of the systemd user scope fails, the whole spawn will fail.
     * You can override the options used for the systemd user scope by
     * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
     * for further information.
     * 
     * Note that if `terminal` has been destroyed before the operation is called,
     * `callback` will be called with a %NULL `terminal;` you must not do anything
     * in the callback besides freeing any resources associated with `user_data,`
     * but taking care not to access the now-destroyed #VteTerminal. Note that
     * in this case, if spawning was successful, the child process will be aborted
     * automatically.
     * 
     * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
     * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory,`
     * e.g. by using vte_terminal_get_current_directory_uri(), g_get_current_dir() or get_current_dir_name().
     * @param ptyFlags flags from #VtePtyFlags
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param fds an array of file descriptors, or %NULL
     * @param mapFds an array of integers, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnWithFdsAsync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, mapFds: number[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    /**
     * Clears the current selection.
     */
    unselectAll(): void
    /**
     * Watches `child_pid`. When the process exists, the #VteTerminal::child-exited
     * signal will be called with the child's exit status.
     * 
     * Prior to calling this function, a #VtePty must have been set in `terminal`
     * using vte_terminal_set_pty().
     * When the child exits, the terminal's #VtePty will be set to %NULL.
     * 
     * Note: g_child_watch_add() or g_child_watch_add_full() must not have
     * been called for `child_pid,` nor a #GSource for it been created with
     * g_child_watch_source_new().
     * 
     * Note: when using the g_spawn_async() family of functions,
     * the %G_SPAWN_DO_NOT_REAP_CHILD flag MUST have been passed.
     * @param childPid a #GPid
     */
    watchChild(childPid: GLib.Pid): void
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
     * @param flags a set of #VteWriteFlags
     * @param cancellable a #GCancellable object, or %NULL
     */
    writeContentsSync(stream: Gio.OutputStream, flags: WriteFlags, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gtk-3.0.Gtk.Widget */
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Installs an accelerator for this `widget` in `accel_group` that causes
     * `accel_signal` to be emitted if the accelerator is activated.
     * The `accel_group` needs to be added to the widget’s toplevel via
     * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
     * Accelerators added through this function are not user changeable during
     * runtime. If you want to support accelerators that can be changed by the
     * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
     * gtk_menu_item_set_accel_path() instead.
     * @param accelSignal widget signal to emit on accelerator activation
     * @param accelGroup accel group for this widget, added to its toplevel
     * @param accelKey GDK keyval of the accelerator
     * @param accelMods modifier key combination of the accelerator
     * @param accelFlags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
     */
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    /**
     * Adds the device events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_device_events() for details.
     * @param device a #GdkDevice
     * @param events an event mask, see #GdkEventMask
     */
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Adds the events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_events() and the
     * [input handling overview][event-masks] for details.
     * @param events an event mask, see #GdkEventMask
     */
    addEvents(events: number): void
    /**
     * Adds a widget to the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well, by using a connection
     * to the #GtkWidget::destroy signal or a weak notifier.
     * @param label a #GtkWidget that acts as a mnemonic label for `widget`
     */
    addMnemonicLabel(label: Gtk.Widget): void
    /**
     * Queues an animation frame update and adds a callback to be called
     * before each frame. Until the tick callback is removed, it will be
     * called frequently (usually at the frame rate of the output device
     * or as quickly as the application can be repainted, whichever is
     * slower). For this reason, is most suitable for handling graphics
     * that change every frame or every few frames. The tick callback does
     * not automatically imply a relayout or repaint. If you want a
     * repaint or relayout, and aren’t changing widget properties that
     * would trigger that (for example, changing the text of a #GtkLabel),
     * then you will have to call gtk_widget_queue_resize() or
     * gtk_widget_queue_draw_area() yourself.
     * 
     * gdk_frame_clock_get_frame_time() should generally be used for timing
     * continuous animations and
     * gdk_frame_timings_get_predicted_presentation_time() if you are
     * trying to display isolated frames at particular times.
     * 
     * This is a more convenient alternative to connecting directly to the
     * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
     * have to worry about when a #GdkFrameClock is assigned to a widget.
     * @param callback function to call for updating animations
     */
    addTickCallback(callback: Gtk.TickCallback): number
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signalId the ID of a signal installed on `widget`
     */
    canActivateAccel(signalId: number): boolean
    /**
     * This function is used by custom widget implementations; if you're
     * writing an app, you’d use gtk_widget_grab_focus() to move the focus
     * to a particular widget, and gtk_container_set_focus_chain() to
     * change the focus tab order. So you may want to investigate those
     * functions instead.
     * 
     * gtk_widget_child_focus() is called by containers as the user moves
     * around the window using keyboard shortcuts. `direction` indicates
     * what kind of motion is taking place (up, down, left, right, tab
     * forward, tab backward). gtk_widget_child_focus() emits the
     * #GtkWidget::focus signal; widgets override the default handler
     * for this signal in order to implement appropriate focus behavior.
     * 
     * The default ::focus handler for a widget should return %TRUE if
     * moving in `direction` left the focus on a focusable location inside
     * that widget, and %FALSE if moving in `direction` moved the focus
     * outside the widget. If returning %TRUE, widgets normally
     * call gtk_widget_grab_focus() to place the focus accordingly;
     * if returning %FALSE, they don’t modify the current focus location.
     * @param direction direction of focus movement
     */
    childFocus(direction: Gtk.DirectionType): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: string): void
    /**
     * Same as gtk_widget_path(), but always uses the name of a widget’s type,
     * never uses a custom name set with gtk_widget_set_name().
     */
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    /**
     * Computes whether a container should give this widget extra space
     * when possible. Containers should check this, rather than
     * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
     * 
     * This function already checks whether the widget is visible, so
     * visibility does not need to be checked separately. Non-visible
     * widgets are not expanded.
     * 
     * The computed expand value uses either the expand setting explicitly
     * set on the widget itself, or, if none has been explicitly set,
     * the widget may expand if some of its children do.
     * @param orientation expand direction
     */
    computeExpand(orientation: Gtk.Orientation): boolean
    /**
     * Creates a new #PangoContext with the appropriate font map,
     * font options, font description, and base direction for drawing
     * text for this widget. See also gtk_widget_get_pango_context().
     */
    createPangoContext(): Pango.Context
    /**
     * Creates a new #PangoLayout with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a #PangoLayout created in this way around, you need
     * to re-create it when the widget #PangoContext is replaced.
     * This can be tracked by using the #GtkWidget::screen-changed signal
     * on the widget.
     * @param text text to set on the layout (can be %NULL)
     */
    createPangoLayout(text?: string | null): Pango.Layout
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    destroy(): void
    /**
     * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
     * %NULL.  It’s intended to be used as a callback connected to the
     * “destroy” signal of a widget. You connect gtk_widget_destroyed()
     * as a signal handler, and pass the address of your widget variable
     * as user data. Then when the widget is destroyed, the variable will
     * be set to %NULL. Useful for example to avoid multiple copies
     * of the same dialog.
     * @param widgetPointer address of a variable that contains `widget`
     */
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    /**
     * Returns %TRUE if `device` has been shadowed by a GTK+
     * device grab on another widget, so it would stop sending
     * events to `widget`. This may be used in the
     * #GtkWidget::grab-notify signal to check for specific
     * devices. See gtk_device_grab_add().
     * @param device a #GdkDevice
     */
    deviceIsShadowed(device: Gdk.Device): boolean
    /**
     * This function is equivalent to gtk_drag_begin_with_coordinates(),
     * passing -1, -1 as coordinates.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     */
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    /**
     * Initiates a drag on the source side. The function only needs to be used
     * when the application is starting drags itself, and is not needed when
     * gtk_drag_source_set() is used.
     * 
     * The `event` is used to retrieve the timestamp that will be used internally to
     * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
     * However, you should try to pass a real event in all cases, since that can be
     * used to get information about the drag.
     * 
     * Generally there are three cases when you want to start a drag by hand by
     * calling this function:
     * 
     * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
     * immediately when the user presses the mouse button.  Pass the `event`
     * that you have in your #GtkWidget::button-press-event handler.
     * 
     * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
     * when the mouse moves past a certain threshold distance after a button-press.
     * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
     * 
     * 3. During a timeout handler, if you want to start a drag after the mouse
     * button is held down for some time.  Try to save the last event that you got
     * from the mouse, using gdk_event_copy(), and pass it to this function
     * (remember to free the event with gdk_event_free() when you are done).
     * If you really cannot pass a real event, pass %NULL instead.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     * @param x The initial x coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     * @param y The initial y coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     */
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    /**
     * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
     * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
     * should trigger the beginning of a drag-and-drop operation.
     * @param startX X coordinate of start of drag
     * @param startY Y coordinate of start of drag
     * @param currentX current X coordinate
     * @param currentY current Y coordinate
     */
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    /**
     * Add the image targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_dest_set_target_list().
     */
    dragDestAddImageTargets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_dest_set_target_list().
     */
    dragDestAddTextTargets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_dest_set_target_list().
     */
    dragDestAddUriTargets(): void
    /**
     * Looks for a match between the supported targets of `context` and the
     * `dest_target_list,` returning the first matching target, otherwise
     * returning %GDK_NONE. `dest_target_list` should usually be the return
     * value from gtk_drag_dest_get_target_list(), but some widgets may
     * have different valid targets for different parts of the widget; in
     * that case, they will have to implement a drag_motion handler that
     * passes the correct target list to this function.
     * @param context drag context
     * @param targetList list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (`widget)`.
     */
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    /**
     * Returns the list of targets this widget can accept from
     * drag-and-drop.
     */
    dragDestGetTargetList(): Gtk.TargetList | null
    /**
     * Returns whether the widget has been configured to always
     * emit #GtkWidget::drag-motion signals.
     */
    dragDestGetTrackMotion(): boolean
    /**
     * Sets a widget as a potential drop destination, and adds default behaviors.
     * 
     * The default behaviors listed in `flags` have an effect similar
     * to installing default handlers for the widget’s drag-and-drop signals
     * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
     * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
     * sufficient to connect to the widget’s #GtkWidget::drag-data-received
     * signal to get primitive, but consistent drag-and-drop support.
     * 
     * Things become more complicated when you try to preview the dragged data,
     * as described in the documentation for #GtkWidget::drag-motion. The default
     * behaviors described by `flags` make some assumptions, that can conflict
     * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
     * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
     * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
     * Especially the later is dramatic, when your own #GtkWidget::drag-motion
     * handler calls gtk_drag_get_data() to inspect the dragged data.
     * 
     * There’s no way to set a default action here, you can use the
     * #GtkWidget::drag-motion callback for that. Here’s an example which selects
     * the action to use depending on whether the control key is pressed or not:
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget *widget,
     *              GdkDragContext *context,
     *              gint x,
     *              gint y,
     *              guint time)
     * {
     *   GdkModifierType mask;
     * 
     *   gdk_window_get_pointer (gtk_widget_get_window (widget),
     *                           NULL, NULL, &mask);
     *   if (mask & GDK_CONTROL_MASK)
     *     gdk_drag_status (context, GDK_ACTION_COPY, time);
     *   else
     *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
     * }
     * ```
     * 
     * @param flags which types of default drag behavior to use
     * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this `widget` will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
     * @param actions a bitmask of possible actions for a drop onto this `widget`.
     */
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets this widget as a proxy for drops to another window.
     * @param proxyWindow the window to which to forward drag events
     * @param protocol the drag protocol which the `proxy_window` accepts   (You can use gdk_drag_get_protocol() to determine this)
     * @param useCoordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
     */
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    /**
     * Sets the target types that this widget can accept from drag-and-drop.
     * The widget must first be made into a drag destination with
     * gtk_drag_dest_set().
     * @param targetList list of droppable targets, or %NULL for none
     */
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    /**
     * Tells the widget to emit #GtkWidget::drag-motion and
     * #GtkWidget::drag-leave events regardless of the targets and the
     * %GTK_DEST_DEFAULT_MOTION flag.
     * 
     * This may be used when a widget wants to do generic
     * actions regardless of the targets that the source offers.
     * @param trackMotion whether to accept all targets
     */
    dragDestSetTrackMotion(trackMotion: boolean): void
    /**
     * Clears information about a drop destination set with
     * gtk_drag_dest_set(). The widget will no longer receive
     * notification of drags.
     */
    dragDestUnset(): void
    /**
     * Gets the data associated with a drag. When the data
     * is received or the retrieval fails, GTK+ will emit a
     * #GtkWidget::drag-data-received signal. Failure of the retrieval
     * is indicated by the length field of the `selection_data`
     * signal parameter being negative. However, when gtk_drag_get_data()
     * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
     * then the widget will not receive notification of failed
     * drops.
     * @param context the drag context
     * @param target the target (form of the data) to retrieve
     * @param time a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
     */
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    /**
     * Highlights a widget as a currently hovered drop target.
     * To end the highlight, call gtk_drag_unhighlight().
     * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
     */
    dragHighlight(): void
    /**
     * Add the writable image targets supported by #GtkSelectionData to
     * the target list of the drag source. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_source_set_target_list().
     */
    dragSourceAddImageTargets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_source_set_target_list().
     */
    dragSourceAddTextTargets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_source_set_target_list().
     */
    dragSourceAddUriTargets(): void
    /**
     * Gets the list of targets this widget can provide for
     * drag-and-drop.
     */
    dragSourceGetTargetList(): Gtk.TargetList | null
    /**
     * Sets up a widget so that GTK+ will start a drag operation when the user
     * clicks and drags on the widget. The widget must have a window.
     * @param startButtonMask the bitmask of buttons that can start the drag
     * @param targets the table of targets     that the drag will support, may be %NULL
     * @param actions the bitmask of possible actions for a drag from this widget
     */
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to `icon`. See the docs for #GtkIconTheme for more details.
     * @param icon A #GIcon
     */
    dragSourceSetIconGicon(icon: Gio.Icon): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a themed icon. See the docs for #GtkIconTheme for more details.
     * @param iconName name of icon to use
     */
    dragSourceSetIconName(iconName: string): void
    /**
     * Sets the icon that will be used for drags from a particular widget
     * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
     * release it when it is no longer needed.
     * @param pixbuf the #GdkPixbuf for the drag icon
     */
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a stock icon.
     * @param stockId the ID of the stock icon to use
     */
    dragSourceSetIconStock(stockId: string): void
    /**
     * Changes the target types that this widget offers for drag-and-drop.
     * The widget must first be made into a drag source with
     * gtk_drag_source_set().
     * @param targetList list of draggable targets, or %NULL for none
     */
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    /**
     * Undoes the effects of gtk_drag_source_set().
     */
    dragSourceUnset(): void
    /**
     * Removes a highlight set by gtk_drag_highlight() from
     * a widget.
     */
    dragUnhighlight(): void
    /**
     * Draws `widget` to `cr`. The top left corner of the widget will be
     * drawn to the currently set origin point of `cr`.
     * 
     * You should pass a cairo context as `cr` argument that is in an
     * original state. Otherwise the resulting drawing is undefined. For
     * example changing the operator using cairo_set_operator() or the
     * line width using cairo_set_line_width() might have unwanted side
     * effects.
     * You may however change the context’s transform matrix - like with
     * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
     * region with cairo_clip() prior to calling this function. Also, it
     * is fine to modify the context with cairo_save() and
     * cairo_push_group() prior to calling this function.
     * 
     * Note that special-purpose widgets may contain special code for
     * rendering to the screen and might appear differently on screen
     * and when rendered using gtk_widget_draw().
     * @param cr a cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Ensures that `widget` has a style (`widget->`style).
     * 
     * Not a very useful function; most of the time, if you
     * want the style, the widget is realized, and realized
     * widgets are guaranteed to have a style already.
     */
    ensureStyle(): void
    /**
     * Notifies the user about an input-related error on this widget.
     * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
     * gdk_window_beep(), otherwise it does nothing.
     * 
     * Note that the effect of gdk_window_beep() can be configured in many
     * ways, depending on the windowing backend and the desktop environment
     * or window manager that is used.
     */
    errorBell(): void
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    event(event: Gdk.Event): boolean
    /**
     * Stops emission of #GtkWidget::child-notify signals on `widget`. The
     * signals are queued until gtk_widget_thaw_child_notify() is called
     * on `widget`.
     * 
     * This is the analogue of g_object_freeze_notify() for child properties.
     */
    freezeChildNotify(): void
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    getAccessible(): Atk.Object
    /**
     * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
     * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
     * ancestry.
     * 
     * If no action group was found matching `prefix,` then %NULL is returned.
     * @param prefix The “prefix” of the action group.
     */
    getActionGroup(prefix: string): Gio.ActionGroup | null
    /**
     * Returns the baseline that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function, and when allocating child
     * widgets in #GtkWidget::size_allocate.
     */
    getAllocatedBaseline(): number
    /**
     * Returns the height that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    getAllocatedHeight(): number
    /**
     * Retrieves the widget’s allocated size.
     * 
     * This function returns the last values passed to
     * gtk_widget_size_allocate_with_baseline(). The value differs from
     * the size returned in gtk_widget_get_allocation() in that functions
     * like gtk_widget_set_halign() can adjust the allocation, but not
     * the value returned by this function.
     * 
     * If a widget is not visible, its allocated size is 0.
     */
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    /**
     * Returns the width that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    getAllocatedWidth(): number
    /**
     * Retrieves the widget’s allocation.
     * 
     * Note, when implementing a #GtkContainer: a widget’s allocation will
     * be its “adjusted” allocation, that is, the widget’s parent
     * container typically calls gtk_widget_size_allocate() with an
     * allocation, and that allocation is then adjusted (to handle margin
     * and alignment for example) before assignment to the widget.
     * gtk_widget_get_allocation() returns the adjusted allocation that
     * was actually assigned to the widget. The adjusted allocation is
     * guaranteed to be completely contained within the
     * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
     * is guaranteed that its children stay inside the assigned bounds,
     * but not that they have exactly the bounds the container assigned.
     * There is no way to get the original allocation assigned by
     * gtk_widget_size_allocate(), since it isn’t stored; if a container
     * implementation needs that information it will have to track it itself.
     */
    getAllocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`. For example,
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
     * the first #GtkBox that’s an ancestor of `widget`. No reference will be
     * added to the returned widget; it should not be unreferenced. See note
     * about checking for a toplevel #GtkWindow in the docs for
     * gtk_widget_get_toplevel().
     * 
     * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
     * considers `widget` to be an ancestor of itself.
     * @param widgetType ancestor type
     */
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    /**
     * Determines whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * See gtk_widget_set_app_paintable()
     */
    getAppPaintable(): boolean
    /**
     * Determines whether `widget` can be a default widget. See
     * gtk_widget_set_can_default().
     */
    getCanDefault(): boolean
    /**
     * Determines whether `widget` can own the input focus. See
     * gtk_widget_set_can_focus().
     */
    getCanFocus(): boolean
    /**
     * This function is only for use in widget implementations. Obtains
     * `widget->`requisition, unless someone has forced a particular
     * geometry on the widget (e.g. with gtk_widget_set_size_request()),
     * in which case it returns that geometry instead of the widget's
     * requisition.
     * 
     * This function differs from gtk_widget_size_request() in that
     * it retrieves the last size request value from `widget->`requisition,
     * while gtk_widget_size_request() actually calls the "size_request" method
     * on `widget` to compute the size request and fill in `widget->`requisition,
     * and only then returns `widget->`requisition.
     * 
     * Because this function does not call the “size_request” method, it
     * can only be used when you know that `widget->`requisition is
     * up-to-date, that is, gtk_widget_size_request() has been called
     * since the last time a resize was queued. In general, only container
     * implementations have this information; applications should use
     * gtk_widget_size_request().
     */
    getChildRequisition(): /* requisition */ Gtk.Requisition
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     */
    getChildVisible(): boolean
    /**
     * Retrieves the widget’s clip area.
     * 
     * The clip area is the area in which all of `widget'`s drawing will
     * happen. Other toolkits call it the bounding box.
     * 
     * Historically, in GTK+ the clip area has been equal to the allocation
     * retrieved via gtk_widget_get_allocation().
     */
    getClip(): /* clip */ Gtk.Allocation
    /**
     * Returns the clipboard object for the given selection to
     * be used with `widget`. `widget` must have a #GdkDisplay
     * associated with it, so must be attached to a toplevel
     * window.
     * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
     */
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    /**
     * Obtains the composite name of a widget.
     */
    getCompositeName(): string
    /**
     * Returns whether `device` can interact with `widget` and its
     * children. See gtk_widget_set_device_enabled().
     * @param device a #GdkDevice
     */
    getDeviceEnabled(device: Gdk.Device): boolean
    /**
     * Returns the events mask for the widget corresponding to an specific device. These
     * are the events that the widget will receive when `device` operates on it.
     * @param device a #GdkDevice
     */
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     */
    getDirection(): Gtk.TextDirection
    /**
     * Get the #GdkDisplay for the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    getDisplay(): Gdk.Display
    /**
     * Determines whether the widget is double buffered.
     * 
     * See gtk_widget_set_double_buffered()
     */
    getDoubleBuffered(): boolean
    /**
     * Returns the event mask (see #GdkEventMask) for the widget. These are the
     * events that the widget will receive.
     * 
     * Note: Internally, the widget event mask will be the logical OR of the event
     * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
     * event mask necessary to cater for every #GtkEventController created for the
     * widget.
     */
    getEvents(): number
    /**
     * Returns whether the widget should grab focus when it is clicked with the mouse.
     * See gtk_widget_set_focus_on_click().
     */
    getFocusOnClick(): boolean
    /**
     * Gets the font map that has been set with gtk_widget_set_font_map().
     */
    getFontMap(): Pango.FontMap | null
    /**
     * Returns the #cairo_font_options_t used for Pango rendering. When not set,
     * the defaults font options for the #GdkScreen will be used.
     */
    getFontOptions(): cairo.FontOptions | null
    /**
     * Obtains the frame clock for a widget. The frame clock is a global
     * “ticker” that can be used to drive animations and repaints.  The
     * most common reason to get the frame clock is to call
     * gdk_frame_clock_get_frame_time(), in order to get a time to use for
     * animating. For example you might record the start of the animation
     * with an initial value from gdk_frame_clock_get_frame_time(), and
     * then update the animation by calling
     * gdk_frame_clock_get_frame_time() again during each repaint.
     * 
     * gdk_frame_clock_request_phase() will result in a new frame on the
     * clock, but won’t necessarily repaint any widgets. To repaint a
     * widget, you have to use gtk_widget_queue_draw() which invalidates
     * the widget (thus scheduling it to receive a draw on the next
     * frame). gtk_widget_queue_draw() will also end up requesting a frame
     * on the appropriate frame clock.
     * 
     * A widget’s frame clock will not change while the widget is
     * mapped. Reparenting a widget (which implies a temporary unmap) can
     * change the widget’s frame clock.
     * 
     * Unrealized widgets do not have a frame clock.
     */
    getFrameClock(): Gdk.FrameClock | null
    /**
     * Gets the value of the #GtkWidget:halign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
     * alignment.
     */
    getHalign(): Gtk.Align
    /**
     * Returns the current value of the has-tooltip property.  See
     * #GtkWidget:has-tooltip for more information.
     */
    getHasTooltip(): boolean
    /**
     * Determines whether `widget` has a #GdkWindow of its own. See
     * gtk_widget_set_has_window().
     */
    getHasWindow(): boolean
    /**
     * Gets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Containers should use gtk_widget_compute_expand() rather than
     * this function, to see whether a widget, or any of its children,
     * has the expand flag set. If any child of a widget wants to
     * expand, the parent may ask to expand also.
     * 
     * This function only looks at the widget’s own hexpand flag, rather
     * than computing whether the entire widget tree rooted at this widget
     * wants to expand.
     */
    getHexpand(): boolean
    /**
     * Gets whether gtk_widget_set_hexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     */
    getHexpandSet(): boolean
    /**
     * Whether the widget is mapped.
     */
    getMapped(): boolean
    /**
     * Gets the value of the #GtkWidget:margin-bottom property.
     */
    getMarginBottom(): number
    /**
     * Gets the value of the #GtkWidget:margin-end property.
     */
    getMarginEnd(): number
    /**
     * Gets the value of the #GtkWidget:margin-left property.
     */
    getMarginLeft(): number
    /**
     * Gets the value of the #GtkWidget:margin-right property.
     */
    getMarginRight(): number
    /**
     * Gets the value of the #GtkWidget:margin-start property.
     */
    getMarginStart(): number
    /**
     * Gets the value of the #GtkWidget:margin-top property.
     */
    getMarginTop(): number
    /**
     * Returns the modifier mask the `widget’`s windowing system backend
     * uses for a particular purpose.
     * 
     * See gdk_keymap_get_modifier_mask().
     * @param intent the use case for the modifier mask
     */
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    /**
     * Returns the current modifier style for the widget. (As set by
     * gtk_widget_modify_style().) If no style has previously set, a new
     * #GtkRcStyle will be created with all values unset, and set as the
     * modifier style for the widget. If you make changes to this rc
     * style, you must call gtk_widget_modify_style(), passing in the
     * returned rc style, to make sure that your changes take effect.
     * 
     * Caution: passing the style back to gtk_widget_modify_style() will
     * normally end up destroying it, because gtk_widget_modify_style() copies
     * the passed-in style and sets the copy as the new modifier style,
     * thus dropping any reference to the old modifier style. Add a reference
     * to the modifier style if you want to keep it alive.
     */
    getModifierStyle(): Gtk.RcStyle
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string
    /**
     * Returns the current value of the #GtkWidget:no-show-all property,
     * which determines whether calls to gtk_widget_show_all()
     * will affect this widget.
     */
    getNoShowAll(): boolean
    /**
     * Fetches the requested opacity for this widget.
     * See gtk_widget_set_opacity().
     */
    getOpacity(): number
    /**
     * Gets a #PangoContext with the appropriate font map, font description,
     * and base direction for this widget. Unlike the context returned
     * by gtk_widget_create_pango_context(), this context is owned by
     * the widget (it can be used until the screen for the widget changes
     * or the widget is removed from its toplevel), and will be updated to
     * match any changes to the widget’s attributes. This can be tracked
     * by using the #GtkWidget::screen-changed signal on the widget.
     */
    getPangoContext(): Pango.Context
    /**
     * Returns the parent container of `widget`.
     */
    getParent(): Gtk.Widget | null
    /**
     * Gets `widget’`s parent window, or %NULL if it does not have one.
     */
    getParentWindow(): Gdk.Window | null
    /**
     * Returns the #GtkWidgetPath representing `widget,` if the widget
     * is not connected to a toplevel widget, a partial path will be
     * created.
     */
    getPath(): Gtk.WidgetPath
    /**
     * Obtains the location of the mouse pointer in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     */
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    /**
     * Retrieves the minimum and natural size of a widget, taking
     * into account the widget’s preference for height-for-width management.
     * 
     * This is used to retrieve a suitable size by container widgets which do
     * not impose any restrictions on the child placement. It can be used
     * to deduce toplevel window and menu sizes as well as child widgets in
     * free-form containers such as GtkLayout.
     * 
     * Handle with care. Note that the natural height of a height-for-width
     * widget will generally be a smaller size than the minimum height, since the required
     * height for the natural width is generally smaller than the required height for
     * the minimum width.
     * 
     * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
     * baseline alignment.
     */
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    /**
     * Determines whether `widget` is realized.
     */
    getRealized(): boolean
    /**
     * Determines whether `widget` is always treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_set_receives_default().
     */
    getReceivesDefault(): boolean
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    getRequestMode(): Gtk.SizeRequestMode
    /**
     * Retrieves the widget’s requisition.
     * 
     * This function should only be used by widget implementations in
     * order to figure whether the widget’s requisition has actually
     * changed after some internal state change (so that they can call
     * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
     * 
     * Normally, gtk_widget_size_request() should be used.
     */
    getRequisition(): /* requisition */ Gtk.Requisition
    /**
     * Get the root window where this widget is located. This function can
     * only be called after the widget has been added to a widget
     * hierarchy with #GtkWindow at the top.
     * 
     * The root window is useful for such purposes as creating a popup
     * #GdkWindow associated with the window. In general, you should only
     * create display specific resources when a widget has been realized,
     * and you should free those resources when the widget is unrealized.
     */
    getRootWindow(): Gdk.Window
    /**
     * Retrieves the internal scale factor that maps from window coordinates
     * to the actual device pixels. On traditional systems this is 1, on
     * high density outputs, it can be a higher value (typically 2).
     * 
     * See gdk_window_get_scale_factor().
     */
    getScaleFactor(): number
    /**
     * Get the #GdkScreen from the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow
     * at the top.
     * 
     * In general, you should only create screen specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    getScreen(): Gdk.Screen
    /**
     * Returns the widget’s sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
     */
    getSensitive(): boolean
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    getSettings(): Gtk.Settings
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request(). A value of -1 stored in `width` or
     * `height` indicates that that dimension has not been set explicitly
     * and the natural requisition of the widget will be used instead. See
     * gtk_widget_set_size_request(). To get the size a widget will
     * actually request, call gtk_widget_get_preferred_size() instead of
     * this function.
     */
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    getState(): Gtk.StateType
    /**
     * Returns the widget state as a flag set. It is worth mentioning
     * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
     * returned, that is, also based on parent insensitivity, even if
     * `widget` itself is sensitive.
     * 
     * Also note that if you are looking for a way to obtain the
     * #GtkStateFlags to pass to a #GtkStyleContext method, you
     * should look at gtk_style_context_get_state().
     */
    getStateFlags(): Gtk.StateFlags
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    getStyle(): Gtk.Style
    /**
     * Returns the style context associated to `widget`. The returned object is
     * guaranteed to be the same for the lifetime of `widget`.
     */
    getStyleContext(): Gtk.StyleContext
    /**
     * Returns %TRUE if `widget` is multiple pointer aware. See
     * gtk_widget_set_support_multidevice() for more information.
     */
    getSupportMultidevice(): boolean
    /**
     * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
     * 
     * This will only report children which were previously declared with
     * gtk_widget_class_bind_template_child_full() or one of its
     * variants.
     * 
     * This function is only meant to be called for code which is private to the `widget_type` which
     * declared the child and is meant for language bindings which cannot easily make use
     * of the GObject structure offsets.
     * @param widgetType The #GType to get a template child for
     * @param name The “id” of the child defined in the template XML
     */
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    getTooltipMarkup(): string | null
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    getTooltipText(): string | null
    /**
     * Returns the #GtkWindow of the current tooltip. This can be the
     * GtkWindow created by default, or the custom tooltip window set
     * using gtk_widget_set_tooltip_window().
     */
    getTooltipWindow(): Gtk.Window
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * Gets the value of the #GtkWidget:valign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
     * children it must use gtk_widget_get_valign_with_baseline(), or
     * `g_object_get (widget, "valign", &value, NULL)`, which will
     * also report the true value.
     */
    getValign(): Gtk.Align
    /**
     * Gets the value of the #GtkWidget:valign property, including
     * %GTK_ALIGN_BASELINE.
     */
    getValignWithBaseline(): Gtk.Align
    /**
     * Gets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_get_hexpand() for more detail.
     */
    getVexpand(): boolean
    /**
     * Gets whether gtk_widget_set_vexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * See gtk_widget_get_hexpand_set() for more detail.
     */
    getVexpandSet(): boolean
    /**
     * Determines whether the widget is visible. If you want to
     * take into account whether the widget’s parent is also marked as
     * visible, use gtk_widget_is_visible() instead.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See gtk_widget_set_visible().
     */
    getVisible(): boolean
    /**
     * Gets the visual that will be used to render `widget`.
     */
    getVisual(): Gdk.Visual
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    getWindow(): Gdk.Window | null
    /**
     * Makes `widget` the current grabbed widget.
     * 
     * This means that interaction with other widgets in the same
     * application is blocked and mouse as well as keyboard events
     * are delivered to this widget.
     * 
     * If `widget` is not sensitive, it is not set as the current
     * grabbed widget and this function does nothing.
     */
    grabAdd(): void
    /**
     * Causes `widget` to become the default widget. `widget` must be able to be
     * a default widget; typically you would ensure this yourself
     * by calling gtk_widget_set_can_default() with a %TRUE value.
     * The default widget is activated when
     * the user presses Enter in a window. Default widgets must be
     * activatable, that is, gtk_widget_activate() should affect them. Note
     * that #GtkEntry widgets require the “activates-default” property
     * set to %TRUE before they activate the default widget when Enter
     * is pressed and the #GtkEntry is focused.
     */
    grabDefault(): void
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    grabFocus(): void
    /**
     * Removes the grab from the given widget.
     * 
     * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
     * 
     * If `widget` does not have the grab, this function does nothing.
     */
    grabRemove(): void
    /**
     * Determines whether the widget is currently grabbing events, so it
     * is the only widget receiving input events (keyboard and mouse).
     * 
     * See also gtk_grab_add().
     */
    hasGrab(): boolean
    /**
     * Determines if the widget style has been looked up through the rc mechanism.
     */
    hasRcStyle(): boolean
    /**
     * Checks whether there is a #GdkScreen is associated with
     * this widget. All toplevel widgets have an associated
     * screen, and all widgets added into a hierarchy with a toplevel
     * window at the top.
     */
    hasScreen(): boolean
    /**
     * Determines if the widget should show a visible indication that
     * it has the global input focus. This is a convenience function for
     * use in ::draw handlers that takes into account whether focus
     * indication should currently be shown in the toplevel window of
     * `widget`. See gtk_window_get_focus_visible() for more information
     * about focus indication.
     * 
     * To find out if the widget has the global input focus, use
     * gtk_widget_has_focus().
     */
    hasVisibleFocus(): boolean
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    hide(): void
    /**
     * Utility function; intended to be connected to the #GtkWidget::delete-event
     * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
     * argument, then returns %TRUE. If connected to ::delete-event, the
     * result is that clicking the close button for a window (on the
     * window frame, top right corner usually) will hide but not destroy
     * the window. By default, GTK+ destroys windows when ::delete-event
     * is received.
     */
    hideOnDelete(): boolean
    /**
     * Returns whether the widget is currently being destroyed.
     * This information can sometimes be used to avoid doing
     * unnecessary work.
     */
    inDestruction(): boolean
    /**
     * Creates and initializes child widgets defined in templates. This
     * function must be called in the instance initializer for any
     * class which assigned itself a template using gtk_widget_class_set_template()
     * 
     * It is important to call this function in the instance initializer
     * of a #GtkWidget subclass and not in #GObject.constructed() or
     * #GObject.constructor() for two reasons.
     * 
     * One reason is that generally derived widgets will assume that parent
     * class composite widgets have been created in their instance
     * initializers.
     * 
     * Another reason is that when calling g_object_new() on a widget with
     * composite templates, it’s important to build the composite widgets
     * before the construct properties are set. Properties passed to g_object_new()
     * should take precedence over properties set in the private template XML.
     */
    initTemplate(): void
    /**
     * Sets an input shape for this widget’s GDK window. This allows for
     * windows which react to mouse click in a nonrectangular region, see
     * gdk_window_input_shape_combine_region() for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    inputShapeCombineRegion(region?: cairo.Region | null): void
    /**
     * Inserts `group` into `widget`. Children of `widget` that implement
     * #GtkActionable can then be associated with actions in `group` by
     * setting their “action-name” to
     * `prefix`.`action-name`.
     * 
     * If `group` is %NULL, a previously inserted group for `name` is removed
     * from `widget`.
     * @param name the prefix for actions in `group`
     * @param group a #GActionGroup, or %NULL
     */
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    /**
     * Computes the intersection of a `widget’`s area and `area,` storing
     * the intersection in `intersection,` and returns %TRUE if there was
     * an intersection.  `intersection` may be %NULL if you’re only
     * interested in whether there was an intersection.
     * @param area a rectangle
     */
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GtkWidget
     */
    isAncestor(ancestor: Gtk.Widget): boolean
    /**
     * Whether `widget` can rely on having its alpha channel
     * drawn correctly. On X11 this function returns whether a
     * compositing manager is running for `widget’`s screen.
     * 
     * Please note that the semantics of this call will change
     * in the future if used on a widget that has a composited
     * window in its hierarchy (as set by gdk_window_set_composited()).
     */
    isComposited(): boolean
    /**
     * Determines whether `widget` can be drawn to. A widget can be drawn
     * to if it is mapped and visible.
     */
    isDrawable(): boolean
    /**
     * Returns the widget’s effective sensitivity, which means
     * it is sensitive itself and also its parent widget is sensitive
     */
    isSensitive(): boolean
    /**
     * Determines whether `widget` is a toplevel widget.
     * 
     * Currently only #GtkWindow and #GtkInvisible (and out-of-process
     * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
     * widget.
     */
    isToplevel(): boolean
    /**
     * Determines whether the widget and all its parents are marked as
     * visible.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See also gtk_widget_get_visible() and gtk_widget_set_visible()
     */
    isVisible(): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    keynavFailed(direction: Gtk.DirectionType): boolean
    /**
     * Lists the closures used by `widget` for accelerator group connections
     * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
     * The closures can be used to monitor accelerator changes on `widget,`
     * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
     * #GtkAccelGroup of a closure which can be found out with
     * gtk_accel_group_from_accel_closure().
     */
    listAccelClosures(): Function[]
    /**
     * Retrieves a %NULL-terminated array of strings containing the prefixes of
     * #GActionGroup's available to `widget`.
     */
    listActionPrefixes(): string[]
    /**
     * Returns a newly allocated list of the widgets, normally labels, for
     * which this widget is the target of a mnemonic (see for example,
     * gtk_label_set_mnemonic_widget()).
     * 
     * The widgets in the list are not individually referenced. If you
     * want to iterate through the list and perform actions involving
     * callbacks that might destroy the widgets, you
     * must call `g_list_foreach (result,
     * (GFunc)g_object_ref, NULL)` first, and then unref all the
     * widgets afterwards.
     */
    listMnemonicLabels(): Gtk.Widget[]
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    map(): void
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Sets the base color for a widget in a particular state.
     * All other style values are left untouched. The base color
     * is the background color used along with the text color
     * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
     * and #GtkTextView. See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > base color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the base color on that.
     * @param state the state for which to set the base color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
     */
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > background color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the background color on that.
     * @param state the state for which to set the background color
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
     */
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the #GtkWidget
     * cursor-color and secondary-cursor-color
     * style properties.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
     * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
     */
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    /**
     * Sets the foreground color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the foreground color
     * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
     */
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the font to use for a widget.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param fontDesc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
     */
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    /**
     * Modifies style values on the widget.
     * 
     * Modifications made using this technique take precedence over
     * style values set via an RC file, however, they will be overridden
     * if a style is explicitly set on the widget using gtk_widget_set_style().
     * The #GtkRcStyle-struct is designed so each field can either be
     * set or unset, so it is possible, using this function, to modify some
     * style values and leave the others unchanged.
     * 
     * Note that modifications made with this function are not cumulative
     * with previous calls to gtk_widget_modify_style() or with such
     * functions as gtk_widget_modify_fg(). If you wish to retain
     * previous values, you must first call gtk_widget_get_modifier_style(),
     * make your modifications to the returned style, then call
     * gtk_widget_modify_style() with that style. On the other hand,
     * if you first call gtk_widget_modify_style(), subsequent calls
     * to such functions gtk_widget_modify_fg() will have a cumulative
     * effect with the initial modifications.
     * @param style the #GtkRcStyle-struct holding the style modifications
     */
    modifyStyle(style: Gtk.RcStyle): void
    /**
     * Sets the text color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * The text color is the foreground color used along with the
     * base color (see gtk_widget_modify_base()) for widgets such
     * as #GtkEntry and #GtkTextView.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the text color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
     */
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color to use for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color().
     * @param state the state for which to set the background color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
     */
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the color to use for a widget.
     * 
     * All other style values are left untouched.
     * 
     * This function does not act recursively. Setting the color of a
     * container does not affect its children. Note that some widgets that
     * you may not think of as containers, for instance #GtkButtons,
     * are actually containers.
     * 
     * This API is mostly meant as a quick way for applications to
     * change a widget appearance. If you are developing a widgets
     * library and intend this change to be themeable, it is better
     * done by setting meaningful CSS classes in your
     * widget/container implementation through gtk_style_context_add_class().
     * 
     * This way, your widget library can install a #GtkCssProvider
     * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
     * to provide a default styling for those widgets that need so, and
     * this theming may fully overridden by the user’s theme.
     * 
     * Note that for complex widgets this may bring in undesired
     * results (such as uniform background color everywhere), in
     * these cases it is better to fully style such widgets through a
     * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
     * priority.
     * @param state the state for which to set the color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
     */
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the
     * cursor-color and secondary-cursor-color
     * style properties. All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * Note that the underlying properties have the #GdkColor type,
     * so the alpha value in `primary` and `secondary` will be ignored.
     * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
     * @param secondaryCursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
     */
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    /**
     * Sets the font to use for a widget. All other style values are
     * left untouched. See gtk_widget_override_color().
     * @param fontDesc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
     */
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    /**
     * Sets a symbolic color for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color() for overriding the foreground
     * or background color.
     * @param name the name of the symbolic color to modify
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
     */
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    /**
     * Obtains the full path to `widget`. The path is simply the name of a
     * widget and all its parents in the container hierarchy, separated by
     * periods. The name of a widget comes from
     * gtk_widget_get_name(). Paths are used to apply styles to a widget
     * in gtkrc configuration files. Widget names are the type of the
     * widget by default (e.g. “GtkButton”) or can be set to an
     * application-specific value with gtk_widget_set_name(). By setting
     * the name of a widget, you allow users or theme authors to apply
     * styles to that specific widget in their gtkrc
     * file. `path_reversed_p` fills in the path in reverse order,
     * i.e. starting with `widget’`s name instead of starting with the name
     * of `widget’`s outermost ancestor.
     */
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    /**
     * This function is only for use in widget implementations.
     * 
     * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
     * function. Use this function instead of gtk_widget_queue_resize()
     * when the `widget'`s size request didn't change but it wants to
     * reposition its contents.
     * 
     * An example user of this function is gtk_widget_set_halign().
     */
    queueAllocate(): void
    /**
     * Mark `widget` as needing to recompute its expand flags. Call
     * this function when setting legacy expand child properties
     * on the child of a container.
     * 
     * See gtk_widget_compute_expand().
     */
    queueComputeExpand(): void
    /**
     * Equivalent to calling gtk_widget_queue_draw_area() for the
     * entire area of a widget.
     */
    queueDraw(): void
    /**
     * Convenience function that calls gtk_widget_queue_draw_region() on
     * the region created from the given coordinates.
     * 
     * The region here is specified in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     * 
     * `width` or `height` may be 0, in this case this function does
     * nothing. Negative values for `width` and `height` are not allowed.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queueDrawArea(x: number, y: number, width: number, height: number): void
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    queueDrawRegion(region: cairo.Region): void
    /**
     * This function is only for use in widget implementations.
     * Flags a widget to have its size renegotiated; should
     * be called when a widget for some reason has a new size request.
     * For example, when you change the text in a #GtkLabel, #GtkLabel
     * queues a resize to ensure there’s enough space for the new text.
     * 
     * Note that you cannot call gtk_widget_queue_resize() on a widget
     * from inside its implementation of the GtkWidgetClass::size_allocate
     * virtual method. Calls to gtk_widget_queue_resize() from inside
     * GtkWidgetClass::size_allocate will be silently ignored.
     */
    queueResize(): void
    /**
     * This function works like gtk_widget_queue_resize(),
     * except that the widget is not invalidated.
     */
    queueResizeNoRedraw(): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    realize(): void
    /**
     * Computes the intersection of a `widget’`s area and `region,` returning
     * the intersection. The result may be empty, use cairo_region_is_empty() to
     * check.
     * @param region a #cairo_region_t, in the same coordinate system as          `widget->`allocation. That is, relative to `widget->`window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of `widget->`window otherwise.
     */
    regionIntersect(region: cairo.Region): cairo.Region
    /**
     * Registers a #GdkWindow with the widget and sets it up so that
     * the widget receives events for it. Call gtk_widget_unregister_window()
     * when destroying the window.
     * 
     * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
     * this up. This is now deprecated and you should use gtk_widget_register_window()
     * instead. Old code will keep working as is, although some new features like
     * transparency might not work perfectly.
     * @param window a #GdkWindow
     */
    registerWindow(window: Gdk.Window): void
    /**
     * Removes an accelerator from `widget,` previously installed with
     * gtk_widget_add_accelerator().
     * @param accelGroup accel group for this widget
     * @param accelKey GDK keyval of the accelerator
     * @param accelMods modifier key combination of the accelerator
     */
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    /**
     * Removes a widget from the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
     * must have previously been added to the list with
     * gtk_widget_add_mnemonic_label().
     * @param label a #GtkWidget that was previously set as a mnemonic label for         `widget` with gtk_widget_add_mnemonic_label().
     */
    removeMnemonicLabel(label: Gtk.Widget): void
    /**
     * Removes a tick callback previously registered with
     * gtk_widget_add_tick_callback().
     * @param id an id returned by gtk_widget_add_tick_callback()
     */
    removeTickCallback(id: number): void
    /**
     * A convenience function that uses the theme settings for `widget`
     * to look up `stock_id` and render it to a pixbuf. `stock_id` should
     * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
     * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
     * string that identifies the widget or code doing the rendering, so
     * that theme engines can special-case rendering for that widget or
     * code.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be
     * freed after use with g_object_unref().
     * @param stockId a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     * @param detail render detail to pass to theme engine
     */
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    /**
     * A convenience function that uses the theme engine and style
     * settings for `widget` to look up `stock_id` and render it to
     * a pixbuf. `stock_id` should be a stock icon ID such as
     * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
     * such as #GTK_ICON_SIZE_MENU.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be freed
     * after use with g_object_unref().
     * @param stockId a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     */
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    /**
     * Moves a widget from one #GtkContainer to another, handling reference
     * count issues to avoid destroying the widget.
     * @param newParent a #GtkContainer to move the widget into
     */
    reparent(newParent: Gtk.Widget): void
    /**
     * Reset the styles of `widget` and all descendents, so when
     * they are looked up again, they get the correct values
     * for the currently loaded RC file settings.
     * 
     * This function is not useful for applications.
     */
    resetRcStyles(): void
    /**
     * Updates the style context of `widget` and all descendants
     * by updating its widget path. #GtkContainers may want
     * to use this on a child when reordering it in a way that a different
     * style might apply to it. See also gtk_container_get_path_for_child().
     */
    resetStyle(): void
    /**
     * Very rarely-used function. This function is used to emit
     * an expose event on a widget. This function is not normally used
     * directly. The only time it is used is when propagating an expose
     * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
     * and that is normally done using gtk_container_propagate_draw().
     * 
     * If you want to force an area of a window to be redrawn,
     * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
     * To cause the redraw to be done immediately, follow that call
     * with a call to gdk_window_process_updates().
     * @param event a expose #GdkEvent
     */
    sendExpose(event: Gdk.Event): number
    /**
     * Sends the focus change `event` to `widget`
     * 
     * This function is not meant to be used by applications. The only time it
     * should be used is when it is necessary for a #GtkWidget to assign focus
     * to a widget that is semantically owned by the first widget even though
     * it’s not a direct child - for instance, a search entry in a floating
     * window similar to the quick search in #GtkTreeView.
     * 
     * An example of its usage is:
     * 
     * 
     * ```c
     *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
     * 
     *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
     *   fevent->focus_change.in = TRUE;
     *   fevent->focus_change.window = _gtk_widget_get_window (widget);
     *   if (fevent->focus_change.window != NULL)
     *     g_object_ref (fevent->focus_change.window);
     * 
     *   gtk_widget_send_focus_change (widget, fevent);
     * 
     *   gdk_event_free (event);
     * ```
     * 
     * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
     */
    sendFocusChange(event: Gdk.Event): boolean
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accelPath path used to look up the accelerator
     * @param accelGroup a #GtkAccelGroup.
     */
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    /**
     * Sets the widget’s allocation.  This should not be used
     * directly, but from within a widget’s size_allocate method.
     * 
     * The allocation set should be the “adjusted” or actual
     * allocation. If you’re implementing a #GtkContainer, you want to use
     * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
     * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
     * allocation inside gtk_widget_size_allocate() to create an adjusted
     * allocation.
     * @param allocation a pointer to a #GtkAllocation to copy from
     */
    setAllocation(allocation: Gtk.Allocation): void
    /**
     * Sets whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * This is a hint to the widget and does not affect the behavior of
     * the GTK+ core; many widgets ignore this flag entirely. For widgets
     * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
     * the effect is to suppress default themed drawing of the widget's
     * background. (Children of the widget will still be drawn.) The application
     * is then entirely responsible for drawing the widget background.
     * 
     * Note that the background is still drawn when the widget is mapped.
     * @param appPaintable %TRUE if the application will paint on the widget
     */
    setAppPaintable(appPaintable: boolean): void
    /**
     * Specifies whether `widget` can be a default widget. See
     * gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param canDefault whether or not `widget` can be a default widget.
     */
    setCanDefault(canDefault: boolean): void
    /**
     * Specifies whether `widget` can own the input focus. See
     * gtk_widget_grab_focus() for actually setting the input focus on a
     * widget.
     * @param canFocus whether or not `widget` can own the input focus.
     */
    setCanFocus(canFocus: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its when its parent
     * is mapped and `widget` has been shown with gtk_widget_show().
     * 
     * The child visibility can be set for widget before it is added to
     * a container with gtk_widget_set_parent(), to avoid mapping
     * children unnecessary before immediately unmapping them. However
     * it will be reset to its default state of %TRUE when the widget
     * is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     * @param isVisible if %TRUE, `widget` should be mapped along with its parent.
     */
    setChildVisible(isVisible: boolean): void
    /**
     * Sets the widget’s clip.  This must not be used directly,
     * but from within a widget’s size_allocate method.
     * It must be called after gtk_widget_set_allocation() (or after chaining up
     * to the parent class), because that function resets the clip.
     * 
     * The clip set should be the area that `widget` draws on. If `widget` is a
     * #GtkContainer, the area must contain all children's clips.
     * 
     * If this function is not called by `widget` during a ::size-allocate handler,
     * the clip will be set to `widget'`s allocation.
     * @param clip a pointer to a #GtkAllocation to copy from
     */
    setClip(clip: Gtk.Allocation): void
    /**
     * Sets a widgets composite name. The widget must be
     * a composite child of its parent; see gtk_widget_push_composite_child().
     * @param name the name to set
     */
    setCompositeName(name: string): void
    /**
     * Enables or disables a #GdkDevice to interact with `widget`
     * and all its children.
     * 
     * It does so by descending through the #GdkWindow hierarchy
     * and enabling the same mask that is has for core events
     * (i.e. the one that gdk_window_get_events() returns).
     * @param device a #GdkDevice
     * @param enabled whether to enable the device
     */
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    /**
     * Sets the device event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive from `device`. Keep
     * in mind that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_device_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with windowless widgets (which return
     * %FALSE from gtk_widget_get_has_window());
     * to get events on those widgets, place them inside a #GtkEventBox
     * and receive events on the event box.
     * @param device a #GdkDevice
     * @param events event mask
     */
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    setDirection(dir: Gtk.TextDirection): void
    /**
     * Widgets are double buffered by default; you can use this function
     * to turn off the buffering. “Double buffered” simply means that
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
     * automatically around expose events sent to the
     * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
     * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
     * buffer to the screen. The result is that users see the window
     * update in one smooth step, and don’t see individual graphics
     * primitives being rendered.
     * 
     * In very simple terms, double buffered widgets don’t flicker,
     * so you would only use this function to turn off double buffering
     * if you had special needs and really knew what you were doing.
     * 
     * Note: if you turn off double-buffering, you have to handle
     * expose events, since even the clearing to the background color or
     * pixmap will not happen automatically (as it is done in
     * gdk_window_begin_draw_frame()).
     * 
     * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
     * then expose events for double-buffered widgets are culled into a single
     * event to the toplevel GDK window. If you now unset double buffering, you
     * will cause a separate rendering pass for every widget. This will likely
     * cause rendering problems - in particular related to stacking - and usually
     * increases rendering times significantly.
     * @param doubleBuffered %TRUE to double-buffer a widget
     */
    setDoubleBuffered(doubleBuffered: boolean): void
    /**
     * Sets the event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive. Keep in mind
     * that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with widgets that have no window.
     * (See gtk_widget_get_has_window()).  To get events on those widgets,
     * place them inside a #GtkEventBox and receive events on the event
     * box.
     * @param events event mask
     */
    setEvents(events: number): void
    /**
     * Sets whether the widget should grab focus when it is clicked with the mouse.
     * Making mouse clicks not grab focus is useful in places like toolbars where
     * you don’t want the keyboard focus removed from the main area of the
     * application.
     * @param focusOnClick whether the widget should grab focus when clicked with the mouse
     */
    setFocusOnClick(focusOnClick: boolean): void
    /**
     * Sets the font map to use for Pango rendering. When not set, the widget
     * will inherit the font map from its parent.
     * @param fontMap a #PangoFontMap, or %NULL to unset any previously     set font map
     */
    setFontMap(fontMap?: Pango.FontMap | null): void
    /**
     * Sets the #cairo_font_options_t used for Pango rendering in this widget.
     * When not set, the default font options for the #GdkScreen will be used.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    setFontOptions(options?: cairo.FontOptions | null): void
    /**
     * Sets the horizontal alignment of `widget`.
     * See the #GtkWidget:halign property.
     * @param align the horizontal alignment
     */
    setHalign(align: Gtk.Align): void
    /**
     * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
     * #GtkWidget:has-tooltip for more information.
     * @param hasTooltip whether or not `widget` has a tooltip.
     */
    setHasTooltip(hasTooltip: boolean): void
    /**
     * Specifies whether `widget` has a #GdkWindow of its own. Note that
     * all realized widgets have a non-%NULL “window” pointer
     * (gtk_widget_get_window() never returns a %NULL window when a widget
     * is realized), but for many of them it’s actually the #GdkWindow of
     * one of its parent widgets. Widgets that do not create a %window for
     * themselves in #GtkWidget::realize must announce this by
     * calling this function with `has_window` = %FALSE.
     * 
     * This function should only be called by widget implementations,
     * and they should call it in their init() function.
     * @param hasWindow whether or not `widget` has a window.
     */
    setHasWindow(hasWindow: boolean): void
    /**
     * Sets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Call this function to set the expand flag if you would like your
     * widget to become larger horizontally when the window has extra
     * room.
     * 
     * By default, widgets automatically expand if any of their children
     * want to expand. (To see if a widget will automatically expand given
     * its current children and state, call gtk_widget_compute_expand(). A
     * container can decide how the expandability of children affects the
     * expansion of the container by overriding the compute_expand virtual
     * method on #GtkWidget.).
     * 
     * Setting hexpand explicitly with this function will override the
     * automatic expand behavior.
     * 
     * This function forces the widget to expand or not to expand,
     * regardless of children.  The override occurs because
     * gtk_widget_set_hexpand() sets the hexpand-set property (see
     * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
     * value to be used, rather than looking at children and widget state.
     * @param expand whether to expand
     */
    setHexpand(expand: boolean): void
    /**
     * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
     * be used.
     * 
     * The hexpand-set property will be set automatically when you call
     * gtk_widget_set_hexpand() to set hexpand, so the most likely
     * reason to use this function would be to unset an explicit expand
     * flag.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     * @param set value for hexpand-set property
     */
    setHexpandSet(set: boolean): void
    /**
     * Marks the widget as being mapped.
     * 
     * This function should only ever be called in a derived widget's
     * “map” or “unmap” implementation.
     * @param mapped %TRUE to mark the widget as mapped
     */
    setMapped(mapped: boolean): void
    /**
     * Sets the bottom margin of `widget`.
     * See the #GtkWidget:margin-bottom property.
     * @param margin the bottom margin
     */
    setMarginBottom(margin: number): void
    /**
     * Sets the end margin of `widget`.
     * See the #GtkWidget:margin-end property.
     * @param margin the end margin
     */
    setMarginEnd(margin: number): void
    /**
     * Sets the left margin of `widget`.
     * See the #GtkWidget:margin-left property.
     * @param margin the left margin
     */
    setMarginLeft(margin: number): void
    /**
     * Sets the right margin of `widget`.
     * See the #GtkWidget:margin-right property.
     * @param margin the right margin
     */
    setMarginRight(margin: number): void
    /**
     * Sets the start margin of `widget`.
     * See the #GtkWidget:margin-start property.
     * @param margin the start margin
     */
    setMarginStart(margin: number): void
    /**
     * Sets the top margin of `widget`.
     * See the #GtkWidget:margin-top property.
     * @param margin the top margin
     */
    setMarginTop(margin: number): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void
    /**
     * Sets the #GtkWidget:no-show-all property, which determines whether
     * calls to gtk_widget_show_all() will affect this widget.
     * 
     * This is mostly for use in constructing widget hierarchies with externally
     * controlled visibility, see #GtkUIManager.
     * @param noShowAll the new value for the “no-show-all” property
     */
    setNoShowAll(noShowAll: boolean): void
    /**
     * Request the `widget` to be rendered partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
     * are clamped to the [0,1] range.).
     * This works on both toplevel widget, and child widgets, although there
     * are some limitations:
     * 
     * For toplevel widgets this depends on the capabilities of the windowing
     * system. On X11 this has any effect only on X screens with a compositing manager
     * running. See gtk_widget_is_composited(). On Windows it should work
     * always, although setting a window’s opacity after the window has been
     * shown causes it to flicker once on Windows.
     * 
     * For child widgets it doesn’t work if any affected widget has a native window, or
     * disables double buffering.
     * @param opacity desired opacity, between 0 and 1
     */
    setOpacity(opacity: number): void
    /**
     * This function is useful only when implementing subclasses of
     * #GtkContainer.
     * Sets the container as the parent of `widget,` and takes care of
     * some details such as updating the state and style of the child
     * to reflect its new location. The opposite function is
     * gtk_widget_unparent().
     * @param parent parent container
     */
    setParent(parent: Gtk.Widget): void
    /**
     * Sets a non default parent window for `widget`.
     * 
     * For #GtkWindow classes, setting a `parent_window` effects whether
     * the window is a toplevel window or can be embedded into other
     * widgets.
     * 
     * For #GtkWindow classes, this needs to be called before the
     * window is realized.
     * @param parentWindow the new parent window.
     */
    setParentWindow(parentWindow: Gdk.Window): void
    /**
     * Marks the widget as being realized. This function must only be
     * called after all #GdkWindows for the `widget` have been created
     * and registered.
     * 
     * This function should only ever be called in a derived widget's
     * “realize” or “unrealize” implementation.
     * @param realized %TRUE to mark the widget as realized
     */
    setRealized(realized: boolean): void
    /**
     * Specifies whether `widget` will be treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param receivesDefault whether or not `widget` can be a default widget.
     */
    setReceivesDefault(receivesDefault: boolean): void
    /**
     * Sets whether the entire widget is queued for drawing when its size
     * allocation changes. By default, this setting is %TRUE and
     * the entire widget is redrawn on every size change. If your widget
     * leaves the upper left unchanged when made bigger, turning this
     * setting off will improve performance.
     * 
     * Note that for widgets where gtk_widget_get_has_window() is %FALSE
     * setting this flag to %FALSE turns off all allocation on resizing:
     * the widget will not even redraw if its position changes; this is to
     * allow containers that don’t draw anything to avoid excess
     * invalidations. If you set this flag on a widget with no window that
     * does draw on `widget->`window, you are
     * responsible for invalidating both the old and new allocation of the
     * widget when the widget is moved and responsible for invalidating
     * regions newly when the widget increases size.
     * @param redrawOnAllocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
     */
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are “grayed out” and the
     * user can’t interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    setSensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget; that is, the widget’s size
     * request will be at least `width` by `height`. You can use this
     * function to force a widget to be larger than it normally would be.
     * 
     * In most cases, gtk_window_set_default_size() is a better choice for
     * toplevel windows than this function; setting the default size will
     * still allow users to shrink the window. Setting the size request
     * will force them to leave the window at least as large as the size
     * request. When dealing with window sizes,
     * gtk_window_set_geometry_hints() can be a useful function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * 
     * The size request of a widget is the smallest size a widget can
     * accept while still functioning well and drawing itself correctly.
     * However in some strange cases a widget may be allocated less than
     * its requested size, and in many cases a widget may be allocated more
     * space than it requested.
     * 
     * If the size request in a given direction is -1 (unset), then
     * the “natural” size request of the widget will be used instead.
     * 
     * The size request set here does not include any margin from the
     * #GtkWidget properties margin-left, margin-right, margin-top, and
     * margin-bottom, but it does include pretty much all other padding
     * or border properties set by any subclass of #GtkWidget.
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    setSizeRequest(width: number, height: number): void
    /**
     * This function is for use in widget implementations. Sets the state
     * of a widget (insensitive, prelighted, etc.) Usually you should set
     * the state using wrapper functions such as gtk_widget_set_sensitive().
     * @param state new state for `widget`
     */
    setState(state: Gtk.StateType): void
    /**
     * This function is for use in widget implementations. Turns on flag
     * values in the current widget state (insensitive, prelighted, etc.).
     * 
     * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
     * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
     * direction, use gtk_widget_set_direction().
     * 
     * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
     * will be propagated down to all non-internal children if `widget` is a
     * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
     * down to all #GtkContainer children by different means than turning on the
     * state flag down the hierarchy, both gtk_widget_get_state_flags() and
     * gtk_widget_is_sensitive() will make use of these.
     * @param flags State flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    setStyle(style?: Gtk.Style | null): void
    /**
     * Enables or disables multiple pointer awareness. If this setting is %TRUE,
     * `widget` will start receiving multiple, per device enter/leave events. Note
     * that if custom #GdkWindows are created in #GtkWidget::realize,
     * gdk_window_set_support_multidevice() will have to be called manually on them.
     * @param supportMultidevice %TRUE to support input from multiple devices.
     */
    setSupportMultidevice(supportMultidevice: boolean): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked up with
     *  the [Pango text markup language][PangoMarkupFormat].
     * 
     * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
     * and of the default handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-markup property and
     * gtk_tooltip_set_markup().
     * @param markup the contents of the tooltip for `widget,` or %NULL
     */
    setTooltipMarkup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip. This function will take
     * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
     * handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
     * @param text the contents of the tooltip for `widget`
     */
    setTooltipText(text?: string | null): void
    /**
     * Replaces the default window used for displaying
     * tooltips with `custom_window`. GTK+ will take care of showing and
     * hiding `custom_window` at the right moment, to behave likewise as
     * the default tooltip window. If `custom_window` is %NULL, the default
     * tooltip window will be used.
     * @param customWindow a #GtkWindow, or %NULL
     */
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    /**
     * Sets the vertical alignment of `widget`.
     * See the #GtkWidget:valign property.
     * @param align the vertical alignment
     */
    setValign(align: Gtk.Align): void
    /**
     * Sets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_set_hexpand() for more detail.
     * @param expand whether to expand
     */
    setVexpand(expand: boolean): void
    /**
     * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
     * be used.
     * 
     * See gtk_widget_set_hexpand_set() for more detail.
     * @param set value for vexpand-set property
     */
    setVexpandSet(set: boolean): void
    /**
     * Sets the visibility state of `widget`. Note that setting this to
     * %TRUE doesn’t mean the widget is actually viewable, see
     * gtk_widget_get_visible().
     * 
     * This function simply calls gtk_widget_show() or gtk_widget_hide()
     * but is nicer to use when the visibility of the widget depends on
     * some condition.
     * @param visible whether the widget should be shown or not
     */
    setVisible(visible: boolean): void
    /**
     * Sets the visual that should be used for by widget and its children for
     * creating #GdkWindows. The visual must be on the same #GdkScreen as
     * returned by gtk_widget_get_screen(), so handling the
     * #GtkWidget::screen-changed signal is necessary.
     * 
     * Setting a new `visual` will not cause `widget` to recreate its windows,
     * so you should call this function before `widget` is realized.
     * @param visual visual to be used or %NULL to unset a previous one
     */
    setVisual(visual?: Gdk.Visual | null): void
    /**
     * Sets a widget’s window. This function should only be used in a
     * widget’s #GtkWidget::realize implementation. The %window passed is
     * usually either new window created with gdk_window_new(), or the
     * window of its parent widget as returned by
     * gtk_widget_get_parent_window().
     * 
     * Widgets must indicate whether they will create their own #GdkWindow
     * by calling gtk_widget_set_has_window(). This is usually done in the
     * widget’s init() function.
     * 
     * Note that this function does not add any reference to `window`.
     * @param window a #GdkWindow
     */
    setWindow(window: Gdk.Window): void
    /**
     * Sets a shape for this widget’s GDK window. This allows for
     * transparent windows etc., see gdk_window_shape_combine_region()
     * for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    shapeCombineRegion(region?: cairo.Region | null): void
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    showAll(): void
    /**
     * Shows a widget. If the widget is an unmapped toplevel widget
     * (i.e. a #GtkWindow that has not yet been shown), enter the main
     * loop and wait for the window to actually be mapped. Be careful;
     * because the main loop is running, anything can happen during
     * this function.
     */
    showNow(): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    sizeAllocate(allocation: Gtk.Allocation): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size,
     * position and (optionally) baseline to their child widgets.
     * 
     * In this function, the allocation and baseline may be adjusted. It
     * will be forced to a 1x1 minimum size, and the
     * adjust_size_allocation virtual and adjust_baseline_allocation
     * methods on the child will be used to adjust the allocation and
     * baseline. Standard adjustments include removing the widget's
     * margins, and applying the widget’s #GtkWidget:halign and
     * #GtkWidget:valign properties.
     * 
     * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
     * baseline argument is ignored and -1 is used instead.
     * @param allocation position and size to be allocated to `widget`
     * @param baseline The baseline of the child, or -1
     */
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     */
    sizeRequest(): /* requisition */ Gtk.Requisition
    /**
     * This function attaches the widget’s #GtkStyle to the widget's
     * #GdkWindow. It is a replacement for
     * 
     * |[
     * widget->style = gtk_style_attach (widget->style, widget->window);
     * ```
     * 
     * 
     * and should only ever be called in a derived widget’s “realize”
     * implementation which does not chain up to its parent class'
     * “realize” implementation, because one of the parent classes
     * (finally #GtkWidget) would attach the style itself.
     */
    styleAttach(): void
    /**
     * Gets the value of a style property of `widget`.
     * @param propertyName the name of a style property
     * @param value location to return the property value
     */
    styleGetProperty(propertyName: string, value: any): void
    /**
     * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
     * This causes all queued #GtkWidget::child-notify signals on `widget` to be
     * emitted.
     */
    thawChildNotify(): void
    /**
     * Translate coordinates relative to `src_widget’`s allocation to coordinates
     * relative to `dest_widget’`s allocations. In order to perform this
     * operation, both widgets must be realized, and must share a common
     * toplevel.
     * @param destWidget a #GtkWidget
     * @param srcX X position relative to `src_widget`
     * @param srcY Y position relative to `src_widget`
     */
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    /**
     * Triggers a tooltip query on the display where the toplevel of `widget`
     * is located. See gtk_tooltip_trigger_tooltip_query() for more
     * information.
     */
    triggerTooltipQuery(): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    unmap(): void
    /**
     * This function is only for use in widget implementations.
     * Should be called by implementations of the remove method
     * on #GtkContainer, to dissociate a child from the container.
     */
    unparent(): void
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    unrealize(): void
    /**
     * Unregisters a #GdkWindow from the widget that was previously set up with
     * gtk_widget_register_window(). You need to call this when the window is
     * no longer used by the widget, such as when you destroy it.
     * @param window a #GdkWindow
     */
    unregisterWindow(window: Gdk.Window): void
    /**
     * This function is for use in widget implementations. Turns off flag
     * values for the current widget state (insensitive, prelighted, etc.).
     * See gtk_widget_set_state_flags().
     * @param flags State flags to turn off
     */
    unsetStateFlags(flags: Gtk.StateFlags): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    parserFinished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    /**
     * Returns the size of a non-scrolling border around the
     * outside of the scrollable. An example for this would
     * be treeview headers. GTK+ can use this information to
     * display overlayed graphics, like the overshoot indication,
     * at the right position.
     */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /**
     * Retrieves the #GtkAdjustment used for horizontal scrolling.
     */
    getHadjustment(): Gtk.Adjustment
    /**
     * Gets the horizontal #GtkScrollablePolicy.
     */
    getHscrollPolicy(): Gtk.ScrollablePolicy
    /**
     * Retrieves the #GtkAdjustment used for vertical scrolling.
     */
    getVadjustment(): Gtk.Adjustment
    /**
     * Gets the vertical #GtkScrollablePolicy.
     */
    getVscrollPolicy(): Gtk.ScrollablePolicy
    /**
     * Sets the horizontal adjustment of the #GtkScrollable.
     * @param hadjustment a #GtkAdjustment
     */
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    /**
     * Sets the #GtkScrollablePolicy to determine whether
     * horizontal scrolling should start below the minimum width or
     * below the natural width.
     * @param policy the horizontal #GtkScrollablePolicy
     */
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /**
     * Sets the vertical adjustment of the #GtkScrollable.
     * @param vadjustment a #GtkAdjustment
     */
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    /**
     * Sets the #GtkScrollablePolicy to determine whether
     * vertical scrolling should start below the minimum height or
     * below the natural height.
     * @param policy the vertical #GtkScrollablePolicy
     */
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of Vte-2.91.Vte.Terminal */
    /**
     * This signal is emitted when the a child sends a bell request to the
     * terminal.
     */
    connect(sigName: "bell", callback: (() => void)): number
    on(sigName: "bell", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bell", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bell", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "bell"): void
    /**
     * Emitted whenever the cell size changes, e.g. due to a change in
     * font, font-scale or cell-width/height-scale.
     * 
     * Note that this signal should rather be called "cell-size-changed".
     * @param width the new character cell width
     * @param height the new character cell height
     */
    connect(sigName: "char-size-changed", callback: ((width: number, height: number) => void)): number
    on(sigName: "char-size-changed", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-size-changed", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-size-changed", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-size-changed", width: number, height: number): void
    /**
     * This signal is emitted when the terminal detects that a child
     * watched using vte_terminal_watch_child() has exited.
     * @param status the child's exit status
     */
    connect(sigName: "child-exited", callback: ((status: number) => void)): number
    on(sigName: "child-exited", callback: (status: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-exited", callback: (status: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-exited", callback: (status: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-exited", status: number): void
    /**
     * Emitted whenever the terminal receives input from the user and
     * prepares to send it to the child process.
     * @param text a string of text
     * @param size the length of that string of text
     */
    connect(sigName: "commit", callback: ((text: string, size: number) => void)): number
    on(sigName: "commit", callback: (text: string, size: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commit", callback: (text: string, size: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commit", callback: (text: string, size: number) => void): NodeJS.EventEmitter
    emit(sigName: "commit", text: string, size: number): void
    /**
     * Emitted whenever the visible appearance of the terminal has changed.
     * Used primarily by #VteTerminalAccessible.
     */
    connect(sigName: "contents-changed", callback: (() => void)): number
    on(sigName: "contents-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contents-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contents-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "contents-changed"): void
    /**
     * Emitted whenever vte_terminal_copy_clipboard() is called.
     */
    connect(sigName: "copy-clipboard", callback: (() => void)): number
    on(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "copy-clipboard"): void
    /**
     * Emitted when the current directory URI is modified.
     */
    connect(sigName: "current-directory-uri-changed", callback: (() => void)): number
    on(sigName: "current-directory-uri-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "current-directory-uri-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "current-directory-uri-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "current-directory-uri-changed"): void
    /**
     * Emitted when the current file URI is modified.
     */
    connect(sigName: "current-file-uri-changed", callback: (() => void)): number
    on(sigName: "current-file-uri-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "current-file-uri-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "current-file-uri-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "current-file-uri-changed"): void
    /**
     * Emitted whenever the cursor moves to a new character cell.  Used
     * primarily by #VteTerminalAccessible.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * Emitted when the user hits the '-' key while holding the Control key.
     */
    connect(sigName: "decrease-font-size", callback: (() => void)): number
    on(sigName: "decrease-font-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decrease-font-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decrease-font-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "decrease-font-size"): void
    /**
     * Never emitted.
     */
    connect(sigName: "deiconify-window", callback: (() => void)): number
    on(sigName: "deiconify-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deiconify-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deiconify-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deiconify-window"): void
    /**
     * Emitted whenever the terminal's current encoding has changed.
     * 
     * Note: support for non-UTF-8 is deprecated.
     */
    connect(sigName: "encoding-changed", callback: (() => void)): number
    on(sigName: "encoding-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "encoding-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "encoding-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "encoding-changed"): void
    /**
     * Emitted when the terminal receives an end-of-file from a child which
     * is running in the terminal.  This signal is frequently (but not
     * always) emitted with a #VteTerminal::child-exited signal.
     */
    connect(sigName: "eof", callback: (() => void)): number
    on(sigName: "eof", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eof", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eof", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eof"): void
    /**
     * Emitted when the hovered hyperlink changes.
     * 
     * `uri` and `bbox` are owned by VTE, must not be modified, and might
     * change after the signal handlers returns.
     * 
     * The signal is not re-emitted when the bounding box changes for the
     * same hyperlink. This might change in a future VTE version without notice.
     * @param uri the nonempty target URI under the mouse, or NULL
     * @param bbox the bounding box of the hyperlink anchor text, or NULL
     */
    connect(sigName: "hyperlink-hover-uri-changed", callback: ((uri: string, bbox: Gdk.Rectangle) => void)): number
    on(sigName: "hyperlink-hover-uri-changed", callback: (uri: string, bbox: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hyperlink-hover-uri-changed", callback: (uri: string, bbox: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hyperlink-hover-uri-changed", callback: (uri: string, bbox: Gdk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "hyperlink-hover-uri-changed", uri: string, bbox: Gdk.Rectangle): void
    connect(sigName: "icon-title-changed", callback: (() => void)): number
    on(sigName: "icon-title-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-title-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-title-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "icon-title-changed"): void
    /**
     * Never emitted.
     */
    connect(sigName: "iconify-window", callback: (() => void)): number
    on(sigName: "iconify-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "iconify-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "iconify-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "iconify-window"): void
    /**
     * Emitted when the user hits the '+' key while holding the Control key.
     */
    connect(sigName: "increase-font-size", callback: (() => void)): number
    on(sigName: "increase-font-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "increase-font-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "increase-font-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "increase-font-size"): void
    /**
     * Never emitted.
     */
    connect(sigName: "lower-window", callback: (() => void)): number
    on(sigName: "lower-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "lower-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "lower-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "lower-window"): void
    /**
     * Never emitted.
     */
    connect(sigName: "maximize-window", callback: (() => void)): number
    on(sigName: "maximize-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize-window"): void
    /**
     * Never emitted.
     * @param x the terminal's desired location, X coordinate
     * @param y the terminal's desired location, Y coordinate
     */
    connect(sigName: "move-window", callback: ((x: number, y: number) => void)): number
    on(sigName: "move-window", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-window", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-window", callback: (x: number, y: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-window", x: number, y: number): void
    /**
     * Emitted whenever vte_terminal_paste_clipboard() is called.
     */
    connect(sigName: "paste-clipboard", callback: (() => void)): number
    on(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paste-clipboard"): void
    /**
     * Never emitted.
     */
    connect(sigName: "raise-window", callback: (() => void)): number
    on(sigName: "raise-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raise-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raise-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "raise-window"): void
    /**
     * Never emitted.
     */
    connect(sigName: "refresh-window", callback: (() => void)): number
    on(sigName: "refresh-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "refresh-window"): void
    /**
     * Emitted at the child application's request.
     * @param width the desired number of columns
     * @param height the desired number of rows
     */
    connect(sigName: "resize-window", callback: ((width: number, height: number) => void)): number
    on(sigName: "resize-window", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize-window", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize-window", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "resize-window", width: number, height: number): void
    /**
     * Never emitted.
     */
    connect(sigName: "restore-window", callback: (() => void)): number
    on(sigName: "restore-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore-window"): void
    /**
     * Emitted whenever the contents of terminal's selection changes.
     */
    connect(sigName: "selection-changed", callback: (() => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    connect(sigName: "text-deleted", callback: (() => void)): number
    on(sigName: "text-deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-deleted"): void
    connect(sigName: "text-inserted", callback: (() => void)): number
    on(sigName: "text-inserted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-inserted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-inserted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-inserted"): void
    connect(sigName: "text-modified", callback: (() => void)): number
    on(sigName: "text-modified", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-modified", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-modified", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-modified"): void
    connect(sigName: "text-scrolled", callback: ((delta: number) => void)): number
    on(sigName: "text-scrolled", callback: (delta: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-scrolled", callback: (delta: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-scrolled", callback: (delta: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-scrolled", delta: number): void
    /**
     * Emitted when the #VteTerminal:window-title property is modified.
     */
    connect(sigName: "window-title-changed", callback: (() => void)): number
    on(sigName: "window-title-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-title-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-title-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "window-title-changed"): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    /**
     * The ::button-press-event signal will be emitted when a button
     * (typically from a mouse) is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    /**
     * The ::button-release-event signal will be emitted when a button
     * (typically from a mouse) is released.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This signal is present to allow applications and derived
     * widgets to override the default #GtkWidget handling
     * for determining whether an accelerator can be activated.
     * @param signalId the ID of a signal installed on `widget`
     */
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    /**
     * The ::child-notify signal is emitted for each
     * [child property][child-properties]  that has
     * changed on an object. The signal's detail holds the property name.
     * @param childProperty the #GParamSpec of the changed child property
     */
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of `widgets` screen changes.
     * See gdk_screen_is_composited().
     */
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    /**
     * The ::configure-event signal will be emitted when the size, position or
     * stacking of the `widget'`s window has changed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventConfigure which triggered   this signal.
     */
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    /**
     * Emitted when a redirected window belonging to `widget` gets drawn into.
     * The region/area members of the event shows what area of the redirected
     * drawable was drawn into.
     * @param event the #GdkEventExpose event
     */
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    /**
     * The ::delete-event signal is emitted if a user requests that
     * a toplevel window is closed. The default handler for this signal
     * destroys the window. Connecting gtk_widget_hide_on_delete() to
     * this signal will cause the window to be hidden instead, so that
     * it can later be shown again without reconstructing it.
     * @param event the event which triggered this signal
     */
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    /**
     * Signals that all holders of a reference to the widget should release
     * the reference that they hold. May result in finalization of the widget
     * if all references are released.
     * 
     * This signal is not suitable for saving widget state.
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /**
     * The ::destroy-event signal is emitted when a #GdkWindow is destroyed.
     * You rarely get this signal, because most widgets disconnect themselves
     * from their window before they destroy it, so no widget owns the
     * window at destroy time.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the event which triggered this signal
     */
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    /**
     * The ::direction-changed signal is emitted when the text direction
     * of a widget changes.
     * @param previousDirection the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    /**
     * The ::drag-begin signal is emitted on the drag source when a drag is
     * started. A typical reason to connect to this signal is to set up a
     * custom drag icon with e.g. gtk_drag_source_set_icon_pixbuf().
     * 
     * Note that some widgets set up a drag icon in the default handler of
     * this signal, so you may have to use g_signal_connect_after() to
     * override what the default handler did.
     * @param context the drag context
     */
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    /**
     * The ::drag-data-delete signal is emitted on the drag source when a drag
     * with the action %GDK_ACTION_MOVE is successfully completed. The signal
     * handler is responsible for deleting the data that has been dropped. What
     * "delete" means depends on the context of the drag operation.
     * @param context the drag context
     */
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    /**
     * The ::drag-data-get signal is emitted on the drag source when the drop
     * site requests the data which is dragged. It is the responsibility of
     * the signal handler to fill `data` with the data in the format which
     * is indicated by `info`. See gtk_selection_data_set() and
     * gtk_selection_data_set_text().
     * @param context the drag context
     * @param data the #GtkSelectionData to be filled with the dragged data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was requested
     */
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-data-received signal is emitted on the drop site when the
     * dragged data has been received. If the data was received in order to
     * determine whether the drop will be accepted, the handler is expected
     * to call gdk_drag_status() and not finish the drag.
     * If the data was received in response to a #GtkWidget::drag-drop signal
     * (and this is the last target to be received), the handler for this
     * signal is expected to process the received data and then call
     * gtk_drag_finish(), setting the `success` parameter depending on
     * whether the data was processed successfully.
     * 
     * Applications must create some means to determine why the signal was emitted
     * and therefore whether to call gdk_drag_status() or gtk_drag_finish().
     * 
     * The handler may inspect the selected action with
     * gdk_drag_context_get_selected_action() before calling
     * gtk_drag_finish(), e.g. to implement %GDK_ACTION_ASK as
     * shown in the following example:
     * 
     * ```c
     * void
     * drag_data_received (GtkWidget          *widget,
     *                     GdkDragContext     *context,
     *                     gint                x,
     *                     gint                y,
     *                     GtkSelectionData   *data,
     *                     guint               info,
     *                     guint               time)
     * {
     *   if ((data->length >= 0) && (data->format == 8))
     *     {
     *       GdkDragAction action;
     * 
     *       // handle data here
     * 
     *       action = gdk_drag_context_get_selected_action (context);
     *       if (action == GDK_ACTION_ASK)
     *         {
     *           GtkWidget *dialog;
     *           gint response;
     * 
     *           dialog = gtk_message_dialog_new (NULL,
     *                                            GTK_DIALOG_MODAL |
     *                                            GTK_DIALOG_DESTROY_WITH_PARENT,
     *                                            GTK_MESSAGE_INFO,
     *                                            GTK_BUTTONS_YES_NO,
     *                                            "Move the data ?\n");
     *           response = gtk_dialog_run (GTK_DIALOG (dialog));
     *           gtk_widget_destroy (dialog);
     * 
     *           if (response == GTK_RESPONSE_YES)
     *             action = GDK_ACTION_MOVE;
     *           else
     *             action = GDK_ACTION_COPY;
     *          }
     * 
     *       gtk_drag_finish (context, TRUE, action == GDK_ACTION_MOVE, time);
     *     }
     *   else
     *     gtk_drag_finish (context, FALSE, FALSE, time);
     *  }
     * ```
     * 
     * @param context the drag context
     * @param x where the drop happened
     * @param y where the drop happened
     * @param data the received data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was received
     */
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-drop signal is emitted on the drop site when the user drops
     * the data onto the widget. The signal handler must determine whether
     * the cursor position is in a drop zone or not. If it is not in a drop
     * zone, it returns %FALSE and no further processing is necessary.
     * Otherwise, the handler returns %TRUE. In this case, the handler must
     * ensure that gtk_drag_finish() is called to let the source know that
     * the drop is done. The call to gtk_drag_finish() can be done either
     * directly or in a #GtkWidget::drag-data-received handler which gets
     * triggered by calling gtk_drag_get_data() to receive the data for one
     * or more of the supported targets.
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::drag-end signal is emitted on the drag source when a drag is
     * finished.  A typical reason to connect to this signal is to undo
     * things done in #GtkWidget::drag-begin.
     * @param context the drag context
     */
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    /**
     * The ::drag-failed signal is emitted on the drag source when a drag has
     * failed. The signal handler may hook custom code to handle a failed DnD
     * operation based on the type of error, it returns %TRUE is the failure has
     * been already handled (not showing the default "drag operation failed"
     * animation), otherwise it returns %FALSE.
     * @param context the drag context
     * @param result the result of the drag operation
     */
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    /**
     * The ::drag-leave signal is emitted on the drop site when the cursor
     * leaves the widget. A typical reason to connect to this signal is to
     * undo things done in #GtkWidget::drag-motion, e.g. undo highlighting
     * with gtk_drag_unhighlight().
     * 
     * 
     * Likewise, the #GtkWidget::drag-leave signal is also emitted before the
     * ::drag-drop signal, for instance to allow cleaning up of a preview item
     * created in the #GtkWidget::drag-motion signal handler.
     * @param context the drag context
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    /**
     * The ::drag-motion signal is emitted on the drop site when the user
     * moves the cursor over the widget during a drag. The signal handler
     * must determine whether the cursor position is in a drop zone or not.
     * If it is not in a drop zone, it returns %FALSE and no further processing
     * is necessary. Otherwise, the handler returns %TRUE. In this case, the
     * handler is responsible for providing the necessary information for
     * displaying feedback to the user, by calling gdk_drag_status().
     * 
     * If the decision whether the drop will be accepted or rejected can't be
     * made based solely on the cursor position and the type of the data, the
     * handler may inspect the dragged data by calling gtk_drag_get_data() and
     * defer the gdk_drag_status() call to the #GtkWidget::drag-data-received
     * handler. Note that you must pass #GTK_DEST_DEFAULT_DROP,
     * #GTK_DEST_DEFAULT_MOTION or #GTK_DEST_DEFAULT_ALL to gtk_drag_dest_set()
     * when using the drag-motion signal that way.
     * 
     * Also note that there is no drag-enter signal. The drag receiver has to
     * keep track of whether he has received any drag-motion signals since the
     * last #GtkWidget::drag-leave and if not, treat the drag-motion signal as
     * an "enter" signal. Upon an "enter", the handler will typically highlight
     * the drop site with gtk_drag_highlight().
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget      *widget,
     *              GdkDragContext *context,
     *              gint            x,
     *              gint            y,
     *              guint           time)
     * {
     *   GdkAtom target;
     * 
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (!private_data->drag_highlight)
     *    {
     *      private_data->drag_highlight = 1;
     *      gtk_drag_highlight (widget);
     *    }
     * 
     *   target = gtk_drag_dest_find_target (widget, context, NULL);
     *   if (target == GDK_NONE)
     *     gdk_drag_status (context, 0, time);
     *   else
     *    {
     *      private_data->pending_status
     *         = gdk_drag_context_get_suggested_action (context);
     *      gtk_drag_get_data (widget, context, target, time);
     *    }
     * 
     *   return TRUE;
     * }
     * 
     * static void
     * drag_data_received (GtkWidget        *widget,
     *                     GdkDragContext   *context,
     *                     gint              x,
     *                     gint              y,
     *                     GtkSelectionData *selection_data,
     *                     guint             info,
     *                     guint             time)
     * {
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (private_data->suggested_action)
     *    {
     *      private_data->suggested_action = 0;
     * 
     *      // We are getting this data due to a request in drag_motion,
     *      // rather than due to a request in drag_drop, so we are just
     *      // supposed to call gdk_drag_status(), not actually paste in
     *      // the data.
     * 
     *      str = gtk_selection_data_get_text (selection_data);
     *      if (!data_is_acceptable (str))
     *        gdk_drag_status (context, 0, time);
     *      else
     *        gdk_drag_status (context,
     *                         private_data->suggested_action,
     *                         time);
     *    }
     *   else
     *    {
     *      // accept the drop
     *    }
     * }
     * ```
     * 
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * This signal is emitted when a widget is supposed to render itself.
     * The `widget'`s top left corner must be painted at the origin of
     * the passed in context and be sized to the values returned by
     * gtk_widget_get_allocated_width() and
     * gtk_widget_get_allocated_height().
     * 
     * Signal handlers connected to this signal can modify the cairo
     * context passed as `cr` in any way they like and don't need to
     * restore it. The signal emission takes care of calling cairo_save()
     * before and cairo_restore() after invoking the handler.
     * 
     * The signal handler will get a `cr` with a clip region already set to the
     * widget's dirty region, i.e. to the area that needs repainting.  Complicated
     * widgets that want to avoid redrawing themselves completely can get the full
     * extents of the clip region with gdk_cairo_get_clip_rectangle(), or they can
     * get a finer-grained representation of the dirty region with
     * cairo_copy_clip_rectangle_list().
     * @param cr the cairo context to draw to
     */
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    /**
     * The ::enter-notify-event will be emitted when the pointer enters
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_ENTER_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    /**
     * The GTK+ main loop will emit three signals for each GDK event delivered
     * to a widget: one generic ::event signal, another, more specific,
     * signal that matches the type of event delivered (e.g.
     * #GtkWidget::key-press-event) and finally a generic
     * #GtkWidget::event-after signal.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * After the emission of the #GtkWidget::event signal and (optionally)
     * the second more specific signal, ::event-after will be emitted
     * regardless of the previous two signals handlers return values.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    /**
     * The ::focus-in-event signal will be emitted when the keyboard focus
     * enters the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered   this signal.
     */
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    /**
     * The ::focus-out-event signal will be emitted when the keyboard focus
     * leaves the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered this   signal.
     */
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    /**
     * Emitted when a pointer or keyboard grab on a window belonging
     * to `widget` gets broken.
     * 
     * On X11, this happens when the grab window becomes unviewable
     * (i.e. it or one of its ancestors is unmapped), or if the same
     * application grabs the pointer or keyboard again.
     * @param event the #GdkEventGrabBroken event
     */
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    /**
     * The ::grab-notify signal is emitted when a widget becomes
     * shadowed by a GTK+ grab (not a pointer or keyboard grab) on
     * another widget, or when it becomes unshadowed due to a grab
     * being removed.
     * 
     * A widget is shadowed by a gtk_grab_add() when the topmost
     * grab widget in the grab stack of its window group is not
     * its ancestor.
     * @param wasGrabbed %FALSE if the widget becomes shadowed, %TRUE               if it becomes unshadowed
     */
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    /**
     * The ::hide signal is emitted when `widget` is hidden, for example with
     * gtk_widget_hide().
     */
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    /**
     * The ::hierarchy-changed signal is emitted when the
     * anchored state of a widget changes. A widget is
     * “anchored” when its toplevel
     * ancestor is a #GtkWindow. This signal is emitted when
     * a widget changes from un-anchored to anchored or vice-versa.
     * @param previousToplevel the previous toplevel ancestor, or %NULL   if the widget was previously unanchored
     */
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    /**
     * The ::key-press-event signal is emitted when a key is pressed. The signal
     * emission will reoccur at the key-repeat rate when the key is kept pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    /**
     * The ::key-release-event signal is emitted when a key is released.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    /**
     * Gets emitted if keyboard navigation fails.
     * See gtk_widget_keynav_failed() for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * The ::leave-notify-event will be emitted when the pointer leaves
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_LEAVE_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    /**
     * The ::map signal is emitted when `widget` is going to be mapped, that is
     * when the widget is visible (which is controlled with
     * gtk_widget_set_visible()) and all its parents up to the toplevel widget
     * are also visible. Once the map has occurred, #GtkWidget::map-event will
     * be emitted.
     * 
     * The ::map signal can be used to determine whether a widget will be drawn,
     * for instance it can resume an animation that was stopped during the
     * emission of #GtkWidget::unmap.
     */
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    /**
     * The ::map-event signal will be emitted when the `widget'`s window is
     * mapped. A window is mapped when it becomes visible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal.
     */
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    /**
     * The default handler for this signal activates `widget` if `group_cycling`
     * is %FALSE, or just makes `widget` grab focus if `group_cycling` is %TRUE.
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    /**
     * The ::motion-notify-event signal is emitted when the pointer moves
     * over the widget's #GdkWindow.
     * 
     * To receive this signal, the #GdkWindow associated to the widget
     * needs to enable the #GDK_POINTER_MOTION_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventMotion which triggered   this signal.
     */
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * The ::parent-set signal is emitted when a new parent
     * has been set on a widget.
     * @param oldParent the previous parent, or %NULL if the widget   just got its initial parent.
     */
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    /**
     * This signal gets emitted whenever a widget should pop up a context
     * menu. This usually happens through the standard key binding mechanism;
     * by pressing a certain key while a widget is focused, the user can cause
     * the widget to pop up a menu.  For example, the #GtkEntry widget creates
     * a menu with clipboard commands. See the
     * [Popup Menu Migration Checklist][checklist-popup-menu]
     * for an example of how to use this signal.
     */
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    /**
     * The ::property-notify-event signal will be emitted when a property on
     * the `widget'`s window has been changed or deleted.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROPERTY_CHANGE_MASK mask.
     * @param event the #GdkEventProperty which triggered   this signal.
     */
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_IN_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_OUT_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    /**
     * Emitted when #GtkWidget:has-tooltip is %TRUE and the hover timeout
     * has expired with the cursor hovering "above" `widget;` or emitted when `widget` got
     * focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has     been emitted, relative to `widget'`s left side
     * @param y the y coordinate of the cursor position where the request has     been emitted, relative to `widget'`s top
     * @param keyboardMode %TRUE if the tooltip was triggered using the keyboard
     * @param tooltip a #GtkTooltip
     */
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    /**
     * The ::realize signal is emitted when `widget` is associated with a
     * #GdkWindow, which means that gtk_widget_realize() has been called or the
     * widget has been mapped (that is, it is going to be drawn).
     */
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    /**
     * The ::screen-changed signal gets emitted when the
     * screen of a widget has changed.
     * @param previousScreen the previous screen, or %NULL if the   widget was not associated with a screen before
     */
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    /**
     * The ::scroll-event signal is emitted when a button in the 4 to 7
     * range is pressed. Wheel mice are usually configured to generate
     * button press events for buttons 4 and 5 when the wheel is turned.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_SCROLL_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventScroll which triggered   this signal.
     */
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    /**
     * The ::selection-clear-event signal will be emitted when the
     * the `widget'`s window has lost ownership of a selection.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    /**
     * The ::selection-request-event signal will be emitted when
     * another client requests ownership of the selection owned by
     * the `widget'`s window.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    /**
     * The ::show signal is emitted when `widget` is shown, for example with
     * gtk_widget_show().
     */
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    /**
     * The ::state-changed signal is emitted when the widget state changes.
     * See gtk_widget_get_state().
     * @param state the previous state
     */
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    /**
     * The ::state-flags-changed signal is emitted when the widget state
     * changes, see gtk_widget_get_state_flags().
     * @param flags The previous state flags.
     */
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    /**
     * The ::style-set signal is emitted when a new style has been set
     * on a widget. Note that style-modifying functions like
     * gtk_widget_modify_base() also cause this signal to be emitted.
     * 
     * Note that this signal is emitted for changes to the deprecated
     * #GtkStyle. To track changes to the #GtkStyleContext associated
     * with a widget, use the #GtkWidget::style-updated signal.
     * @param previousStyle the previous style, or %NULL if the widget   just got its initial style
     */
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    /**
     * The ::style-updated signal is a convenience signal that is emitted when the
     * #GtkStyleContext::changed signal is emitted on the `widget'`s associated
     * #GtkStyleContext as returned by gtk_widget_get_style_context().
     * 
     * Note that style-modifying functions like gtk_widget_override_color() also
     * cause this signal to be emitted.
     */
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    /**
     * The ::unmap signal is emitted when `widget` is going to be unmapped, which
     * means that either it or any of its parents up to the toplevel widget have
     * been set as hidden.
     * 
     * As ::unmap indicates that a widget will not be shown any longer, it can be
     * used to, for example, stop an animation on the widget.
     */
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    /**
     * The ::unmap-event signal will be emitted when the `widget'`s window is
     * unmapped. A window is unmapped when it becomes invisible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal
     */
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    /**
     * The ::unrealize signal is emitted when the #GdkWindow associated with
     * `widget` is destroyed, which means that gtk_widget_unrealize() has been
     * called or the widget has been unmapped (that is, it is going to be
     * hidden).
     */
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /**
     * The ::visibility-notify-event will be emitted when the `widget'`s
     * window is obscured or unobscured.
     * 
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_VISIBILITY_NOTIFY_MASK mask.
     * @param event the #GdkEventVisibility which   triggered this signal.
     */
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    /**
     * The ::window-state-event will be emitted when the state of the
     * toplevel window associated to the `widget` changes.
     * 
     * To receive this signal the #GdkWindow associated to the widget
     * needs to enable the #GDK_STRUCTURE_MASK mask. GDK will enable
     * this mask automatically for all new windows.
     * @param event the #GdkEventWindowState which   triggered this signal.
     */
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-bold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-bold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-bold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-bold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-bold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-hyperlink", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-hyperlink", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-hyperlink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-hyperlink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-hyperlink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audible-bell", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audible-bell", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audible-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audible-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audible-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backspace-binding", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backspace-binding", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backspace-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backspace-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backspace-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bold-is-bright", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bold-is-bright", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bold-is-bright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bold-is-bright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bold-is-bright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-height-scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-height-scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-height-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-height-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-height-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-width-scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-width-scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-width-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-width-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-width-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cjk-ambiguous-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cjk-ambiguous-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cjk-ambiguous-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cjk-ambiguous-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cjk-ambiguous-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-directory-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-directory-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-directory-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-directory-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-directory-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-file-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-file-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-blink-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-blink-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-shape", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-shape", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-shape", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-shape", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-shape", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delete-binding", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-binding", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delete-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delete-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delete-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-bidi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-bidi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-bidi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-bidi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-bidi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-fallback-scrolling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fallback-scrolling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-fallback-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-fallback-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-fallback-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-shaping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-shaping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-shaping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-shaping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-shaping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-sixel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-sixel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-sixel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-sixel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-sixel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hyperlink-hover-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hyperlink-hover-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hyperlink-hover-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hyperlink-hover-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hyperlink-hover-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-autohide", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-autohide", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-autohide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-autohide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-autohide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rewrap-on-resize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rewrap-on-resize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rewrap-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rewrap-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rewrap-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-on-keystroke", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-keystroke", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-on-keystroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-on-keystroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-on-keystroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-on-output", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-output", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-on-output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-on-output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-on-output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-unit-is-pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-unit-is-pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-unit-is-pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-unit-is-pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-unit-is-pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scrollback-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollback-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scrollback-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scrollback-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scrollback-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-blink-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-blink-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::word-char-exceptions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::word-char-exceptions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::word-char-exceptions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::word-char-exceptions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::word-char-exceptions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xfill", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xfill", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xfill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xfill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xfill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yfill", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yfill", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yfill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yfill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yfill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Terminal_ConstructProps)
    _init (config?: Terminal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Terminal
    static $gtype: GObject.Type
}
class CharAttributes {
    static name: string
}
abstract class PtyClass {
    static name: string
}
class Regex {
    /* Methods of Vte-2.91.Vte.Regex */
    /**
     * If the platform supports JITing, JIT compiles `regex`.
     * @param flags PCRE2 JIT flags, or 0
     */
    jit(flags: number): boolean
    /**
     * Increases the reference count of `regex` by one.
     */
    ref(): Regex
    /**
     * See man:pcre2api(3) and man:pcre2_substitute(3) for more information.
     * @param subject the subject string
     * @param replacement the replacement string
     * @param flags PCRE2 match flags
     */
    substitute(subject: string, replacement: string, flags: number): string
    /**
     * Decreases the reference count of `regex` by one, and frees `regex`
     * if the refcount reaches zero.
     */
    unref(): Regex
    static name: string
    /* Static methods and pseudo-constructors */
    static newForMatch(pattern: string, patternLength: number, flags: number): Regex
    static newForSearch(pattern: string, patternLength: number, flags: number): Regex
}
abstract class TerminalClass {
    /* Fields of Vte-2.91.Vte.TerminalClass */
    parentClass: Gtk.WidgetClass
    eof: (terminal: Terminal) => void
    childExited: (terminal: Terminal, status: number) => void
    encodingChanged: (terminal: Terminal) => void
    charSizeChanged: (terminal: Terminal, charWidth: number, charHeight: number) => void
    windowTitleChanged: (terminal: Terminal) => void
    iconTitleChanged: (terminal: Terminal) => void
    selectionChanged: (terminal: Terminal) => void
    contentsChanged: (terminal: Terminal) => void
    cursorMoved: (terminal: Terminal) => void
    commit: (terminal: Terminal, text: string, size: number) => void
    deiconifyWindow: (terminal: Terminal) => void
    iconifyWindow: (terminal: Terminal) => void
    raiseWindow: (terminal: Terminal) => void
    lowerWindow: (terminal: Terminal) => void
    refreshWindow: (terminal: Terminal) => void
    restoreWindow: (terminal: Terminal) => void
    maximizeWindow: (terminal: Terminal) => void
    resizeWindow: (terminal: Terminal, width: number, height: number) => void
    moveWindow: (terminal: Terminal, x: number, y: number) => void
    increaseFontSize: (terminal: Terminal) => void
    decreaseFontSize: (terminal: Terminal) => void
    textModified: (terminal: Terminal) => void
    textInserted: (terminal: Terminal) => void
    textDeleted: (terminal: Terminal) => void
    textScrolled: (terminal: Terminal, delta: number) => void
    copyClipboard: (terminal: Terminal) => void
    pasteClipboard: (terminal: Terminal) => void
    bell: (terminal: Terminal) => void
    static name: string
}
class TerminalClassPrivate {
    static name: string
}
}
export default Vte;