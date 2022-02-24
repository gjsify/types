/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeAutoar-0.1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GnomeAutoar {

enum ConflictAction {
    UNHANDLED,
    SKIP,
    OVERWRITE,
    CHANGE_DESTINATION,
}
/**
 * This is a non-negative number which represents filters supported by
 * libarchive. A libarchive filter is a filter which can convert a
 * regular file into a compressed file.
 */
enum Filter {
    /**
     * %ARCHIVE_FILTER_NONE: No filter
     */
    NONE,
    /**
     * %ARCHIVE_FILTER_COMPRESS: UNIX-compressed
     */
    COMPRESS,
    /**
     * %ARCHIVE_FILTER_GZIP: Gzip
     */
    GZIP,
    /**
     * %ARCHIVE_FILTER_BZIP2: Bzip2
     */
    BZIP2,
    /**
     * %ARCHIVE_FILTER_XZ: XZ
     */
    XZ,
    /**
     * %ARCHIVE_FILTER_LZMA: LZMA
     */
    LZMA,
    /**
     * %ARCHIVE_FILTER_LZIP: Lzip
     */
    LZIP,
    /**
     * %ARCHIVE_FILTER_LZOP: LZO
     */
    LZOP,
    /**
     * %ARCHIVE_FILTER_GRZIP: GRZip
     */
    GRZIP,
    /**
     * %ARCHIVE_FILTER_LRZIP: Long Range ZIP (lrzip)
     */
    LRZIP,
}
/**
 * This is a non-negative number which represents formats supported by
 * libarchive. A libarchive format is a file format which can store many
 * files as a archive file.
 */
enum Format {
    /**
     * %ARCHIVE_FORMAT_ZIP: Zip archive
     */
    ZIP,
    /**
     * %ARCHIVE_FORMAT_TAR_PAX_RESTRICTED: Tar archive, use
     *   ustar format is possible. If there are extended headers which cannot be
     *   represented in the ustar format, libarchive will use pax interchage format
     *   instead.
     */
    TAR,
    /**
     * %ARCHIVE_FORMAT_CPIO_POSIX: CPIO archive, POSIX
     *   standard cpio interchage format.
     */
    CPIO,
    /**
     * %ARCHIVE_FORMAT_7ZIP: 7-zip archive
     */
    TODO_7ZIP,
    /**
     * %ARCHIVE_FORMAT_AR_BSD: BSD variant of Unix archive
     *   format. This format does not support storing directories.
     */
    AR_BSD,
    /**
     * %ARCHIVE_FORMAT_AR_GNU: GNU/SVR4 variant of Unix
     *   archive format. This format does not support storing directories.
     */
    AR_SVR4,
    /**
     * %ARCHIVE_FORMAT_CPIO_SVR4_NOCRC: CPIO archive,
     *   SVR4 non-CRC variant
     */
    CPIO_NEWC,
    /**
     * %ARCHIVE_FORMAT_TAR_GNUTAR: Tar archive, support
     *   most popular GNU extensions.
     */
    GNUTAR,
    /**
     * %ARCHIVE_FORMAT_ISO9660: Raw CD image
     */
    ISO9660,
    /**
     * %ARCHIVE_FORMAT_TAR_PAX_INTERCHANGE: Tar archive, use
     *   pax interchage format
     */
    PAX,
    /**
     * %ARCHIVE_FORMAT_TAR_USTAR: Tar archive, use old
     *   ustar format
     */
    USTAR,
    /**
     * %ARCHIVE_FORMAT_XAR: Xar archive
     */
    XAR,
}
function checkMimeTypeSupported(mimeType: string): boolean
function filterGetDescription(filter: Filter): string
function filterGetDescriptionLibarchive(filter: Filter): string
function filterGetExtension(filter: Filter): string
function filterGetFilterLibarchive(filter: Filter): number
function filterGetMimeType(filter: Filter): string
function filterIsValid(filter: Filter): boolean
function filterLast(): number
function formatFilterGetDescription(format: Format, filter: Filter): string
function formatFilterGetExtension(format: Format, filter: Filter): string
function formatFilterGetMimeType(format: Format, filter: Filter): string
function formatGetDescription(format: Format): string
function formatGetDescriptionLibarchive(format: Format): string
function formatGetExtension(format: Format): string
function formatGetFormatLibarchive(format: Format): number
function formatGetMimeType(format: Format): string
function formatIsValid(format: Format): boolean
function formatLast(): number
function libarchiveQuark(): GLib.Quark
function queryMimeTypeSupported(file: Gio.File): boolean
interface FilterFunc {
    (a?: object | null): number
}
interface FormatFunc {
    (a?: object | null): number
}
interface Compressor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    createTopLevelDirectory?: boolean
    notifyInterval?: number
    outputFile?: Gio.File
    outputIsDest?: boolean
    sourceFiles?: object
}
class Compressor {
    /* Properties of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    readonly completedFiles: number
    readonly completedSize: number
    createTopLevelDirectory: boolean
    readonly files: number
    notifyInterval: number
    outputIsDest: boolean
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    /**
     * Gets the number of files has been read
     */
    getCompletedFiles(): number
    /**
     * Gets the size in bytes has been read from the source files and directories.
     */
    getCompletedSize(): number
    /**
     * Gets whether a top level directory will be created in the new archive.
     */
    getCreateTopLevelDirectory(): boolean
    /**
     * Gets the number of files will be read when the operation is completed. This
     * value is currently unset, so calling this function is useless.
     */
    getFiles(): number
    /**
     * Gets the compression filter
     */
    getFilter(): Filter
    /**
     * Gets the compression format
     */
    getFormat(): Format
    /**
     * See autoar_compressor_set_notify_interval().
     */
    getNotifyInterval(): number
    /**
     * If #AutoarCompressor:output_is_dest is %FALSE, gets the directory which
     * contains the new archive. Otherwise, gets the the new archive. See
     * autoar_compressor_set_output_is_dest().
     */
    getOutputFile(): Gio.File
    /**
     * See autoar_compressor_set_output_is_dest().
     */
    getOutputIsDest(): boolean
    /**
     * Gets the size in bytes will be read when the operation is completed. This
     * value is currently unset, so calling this function is useless.
     */
    getSize(): number
    /**
     * Gets the list of source files.
     */
    getSourceFiles(): Gio.File[]
    /**
     * Sets the minimal interval between emission of #AutoarCompressor::progress
     * signal. This prevent too frequent signal emission, which may cause
     * performance impact. If you do not want this feature, you can set the
     * interval to 0, so you will receive every progress update.
     */
    setNotifyInterval(notifyInterval: number): void
    /**
     * By default #AutoarCompressor:output-is-dest is set to %FALSE, which means
     * the new archive will be created as a regular file under
     * #AutoarCompressor:output directory. The name of the new archive will be
     * automatically generated and you will be notified via
     * #AutoarCompressor::decide-dest when the name is decided. If you have already
     * decided the location of the new archive, and you do not want
     * #AutoarCompressor to decide it for you, you can set
     * #AutoarCompressor:output-is-dest to %TRUE. #AutoarCompressor will use
     * #AutoarCompressor:output as the location of the new archive, and it will
     * neither check whether the file exists nor create the necessary
     * directories for you. This function should only be called before calling
     * autoar_compressor_start() or autoar_compressor_start_async().
     */
    setOutputIsDest(outputIsDest: boolean): void
    /**
     * Sets the archive passphrase. It works only with %ARCHIVE_FORMAT_ZIP.
     */
    setPassphrase(passphrase: string): void
    /**
     * Runs the archive creating work. All callbacks will be called in the same
     * thread as the caller of this functions.
     */
    start(cancellable?: Gio.Cancellable | null): void
    /**
     * Asynchronously runs the archive creating work. You should connect to
     * #AutoarCompressor::cancelled, #AutoarCompressor::error, and
     * #AutoarCompressor::completed signal to get notification when the work is
     * terminated. All callbacks will be called in the main thread, so you can
     * safely manipulate GTK+ widgets in the callbacks.
     */
    startAsync(cancellable?: Gio.Cancellable | null): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of GnomeAutoar-0.1.GnomeAutoar.Compressor */
    /**
     * This signal is emitted after archive creating job is cancelled by the
     * #GCancellable.
     */
    connect(sigName: "cancelled", callback: (() => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    /**
     * This signal is emitted after the archive creating job is successfully
     * completed.
     */
    connect(sigName: "completed", callback: (() => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    /**
     * This signal is emitted when the location of the new archive is determined.
     */
    connect(sigName: "decide-dest", callback: ((destination: Gio.File) => void)): number
    on(sigName: "decide-dest", callback: (destination: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-dest", callback: (destination: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-dest", callback: (destination: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "decide-dest", destination: Gio.File): void
    /**
     * This signal is emitted when error occurs and all jobs should be terminated.
     * Possible error domains are %AUTOAR_COMPRESSOR_ERROR, %G_IO_ERROR, and
     * %AUTOAR_LIBARCHIVE_ERROR, which represent error occurs in #AutoarCompressor,
     * GIO, and libarchive, respectively. The #GError is owned by #AutoarCompressor
     * and should not be freed.
     */
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    /**
     * This signal is used to report progress of creating archives. The value of
     * `completed_size` and `completed_files` are the same as the
     * #AutoarCompressor:completed_size and #AutoarCompressor:completed_files properties,
     * respectively.
     */
    connect(sigName: "progress", callback: ((completedSize: number, completedFiles: number) => void)): number
    on(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", completedSize: number, completedFiles: number): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-top-level-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-top-level-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notify-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-is-dest", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Compressor_ConstructProps)
    _init (config?: Compressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceFiles: Gio.File[], outputFile: Gio.File, format: Format, filter: Filter, createTopLevelDirectory: boolean): Compressor
    /**
     * Gets the #AutoarCompressor Error Quark.
     */
    static quark(): GLib.Quark
    static $gtype: GObject.Type
}
interface Extractor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    deleteAfterExtraction?: boolean
    notifyInterval?: number
    outputFile?: Gio.File
    outputIsDest?: boolean
    sourceFile?: Gio.File
}
class Extractor {
    /* Properties of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    readonly completedFiles: number
    readonly completedSize: number
    deleteAfterExtraction: boolean
    notifyInterval: number
    outputIsDest: boolean
    readonly totalFiles: number
    readonly totalSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    /**
     * Gets the number of files has been written to disk.
     */
    getCompletedFiles(): number
    /**
     * Gets the size in bytes has been written to disk.
     */
    getCompletedSize(): number
    /**
     * Whether the source archive will be deleted after a successful extraction.
     */
    getDeleteAfterExtraction(): boolean
    /**
     * See autoar_extractor_set_notify_interval().
     */
    getNotifyInterval(): number
    /**
     * Gets the #GFile object which represents the output directory of extracted
     * file or directory, or the extracted file or directory itself if you set
     * #AutoarExtractor:output-is-dest on the returned object.
     */
    getOutputFile(): Gio.File
    /**
     * See autoar_extractor_set_output_is_dest().
     */
    getOutputIsDest(): boolean
    /**
     * Gets the #GFile object which represents the source archive that will be
     * extracted for this object.
     */
    getSourceFile(): Gio.File
    /**
     * Gets the total number of files will be written when the operation is
     * completed.
     */
    getTotalFiles(): number
    /**
     * Gets the size in bytes will be written when the operation is completed.
     */
    getTotalSize(): number
    /**
     * By default #AutoarExtractor:delete-after-extraction is set to %FALSE so the
     * source archive will not be automatically deleted if extraction succeeds.
     */
    setDeleteAfterExtraction(deleteAfterExtraction: boolean): void
    /**
     * Sets the minimal interval between emission of #AutoarExtractor::progress
     * signal. This prevent too frequent signal emission, which may cause
     * performance impact. If you do not want this feature, you can set the interval
     * to 0, so you will receive every progress update.
     */
    setNotifyInterval(notifyInterval: number): void
    /**
     * By default #AutoarExtractor:output-is-dest is set to %FALSE, which means
     * only one file or directory will be created in #AutoarExtractor:output-file.
     * The destination is internally determined by analyzing the contents of the
     * archive. If this is not wanted, #AutoarExtractor:output-is-dest can be set to
     * %TRUE, which will make #AutoarExtractor:output-file the destination for
     * extracted files. In any case, the destination will be notified via
     * #AutoarExtractor::decide-destination, when it is possible to set a new
     * destination.
     * 
     * #AutoarExtractor will attempt to create the destination regardless to whether
     * its path was internally decided or not.
     * 
     * This function should only be called before calling autoar_extractor_start() or
     * autoar_extractor_start_async().
     */
    setOutputIsDest(outputIsDest: boolean): void
    /**
     * Runs the archive extracting work. All callbacks will be called in the same
     * thread as the caller of this functions.
     */
    start(cancellable?: Gio.Cancellable | null): void
    /**
     * Asynchronously runs the archive extracting work. You should connect to
     * #AutoarExtractor::cancelled, #AutoarExtractor::error, and
     * #AutoarExtractor::completed signal to get notification when the work is
     * terminated. All callbacks will be called in the main thread, so you can
     * safely manipulate GTK+ widgets in the callbacks.
     */
    startAsync(cancellable?: Gio.Cancellable | null): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of GnomeAutoar-0.1.GnomeAutoar.Extractor */
    /**
     * This signal is emitted after archive extracting job is cancelled by the
     * #GCancellable.
     */
    connect(sigName: "cancelled", callback: (() => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    /**
     * This signal is emitted after the archive extracting job is successfully
     * completed.
     */
    connect(sigName: "completed", callback: (() => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    connect(sigName: "conflict", callback: ((file: Gio.File, newFile?: object | null) => number)): number
    on(sigName: "conflict", callback: (file: Gio.File, newFile?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conflict", callback: (file: Gio.File, newFile?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conflict", callback: (file: Gio.File, newFile?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "conflict", file: Gio.File, newFile?: object | null): void
    connect(sigName: "decide-destination", callback: ((destination: Gio.File, files?: object | null) => GObject.Object)): number
    on(sigName: "decide-destination", callback: (destination: Gio.File, files?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: (destination: Gio.File, files?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: (destination: Gio.File, files?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "decide-destination", destination: Gio.File, files?: object | null): void
    /**
     * This signal is emitted when error occurs and all jobs should be terminated.
     * Possible error domains are %AUTOAR_EXTRACTOR_ERROR, %G_IO_ERROR, and
     * %AUTOAR_LIBARCHIVE_ERROR, which represent error occurs in #AutoarExtractor,
     * GIO, and libarchive, respectively. The #GError is owned by #AutoarExtractor
     * and should not be freed.
     */
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    /**
     * This signal is used to report progress of extraction.
     */
    connect(sigName: "progress", callback: ((completedSize: number, completedFiles: number) => void)): number
    on(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (completedSize: number, completedFiles: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", completedSize: number, completedFiles: number): void
    /**
     * This signal is emitted when the archive extracting job needs a
     * passphrase.
     */
    connect(sigName: "request-passphrase", callback: (() => string)): number
    on(sigName: "request-passphrase", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-passphrase", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-passphrase", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-passphrase"): void
    /**
     * This signal is emitted when #AutoarExtractor finish scanning filename entries
     * in the source archive.
     */
    connect(sigName: "scanned", callback: ((files: number) => void)): number
    on(sigName: "scanned", callback: (files: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scanned", callback: (files: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scanned", callback: (files: number) => void): NodeJS.EventEmitter
    emit(sigName: "scanned", files: number): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delete-after-extraction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-after-extraction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notify-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-is-dest", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Extractor_ConstructProps)
    _init (config?: Extractor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceFile: Gio.File, outputFile: Gio.File): Extractor
    /**
     * Gets the #AutoarExtractor Error Quark.
     */
    static quark(): GLib.Quark
    static $gtype: GObject.Type
}
abstract class CompressorClass {
    /* Fields of GnomeAutoar-0.1.GnomeAutoar.CompressorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ExtractorClass {
    /* Fields of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
}
export default GnomeAutoar;