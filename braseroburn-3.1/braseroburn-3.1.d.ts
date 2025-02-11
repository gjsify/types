/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace BraseroBurn {
    /**
     * BraseroBurn-3.1
     */

    export namespace BurnAction {
        export const $gtype: GObject.GType<BurnAction>;
    }

    enum BurnAction {
        NONE,
        GETTING_SIZE,
        CREATING_IMAGE,
        RECORDING,
        BLANKING,
        CHECKSUM,
        DRIVE_COPY,
        FILE_COPY,
        ANALYSING,
        TRANSCODING,
        PREPARING,
        LEADIN,
        RECORDING_CD_TEXT,
        FIXATING,
        LEADOUT,
        START_RECORDING,
        FINISHED,
        EJECTING,
        LAST,
    }

    export namespace BurnError {
        export const $gtype: GObject.GType<BurnError>;
    }

    enum BurnError {
        ERROR_NONE,
        ERROR_GENERAL,
        ERROR_PLUGIN_MISBEHAVIOR,
        ERROR_SLOW_DMA,
        ERROR_PERMISSION,
        ERROR_DRIVE_BUSY,
        ERROR_DISK_SPACE,
        ERROR_EMPTY,
        ERROR_INPUT_INVALID,
        ERROR_OUTPUT_NONE,
        ERROR_FILE_INVALID,
        ERROR_FILE_FOLDER,
        ERROR_FILE_PLAYLIST,
        ERROR_FILE_NOT_FOUND,
        ERROR_FILE_NOT_LOCAL,
        ERROR_WRITE_MEDIUM,
        ERROR_WRITE_IMAGE,
        ERROR_IMAGE_INVALID,
        ERROR_IMAGE_JOLIET,
        ERROR_IMAGE_LAST_SESSION,
        ERROR_MEDIUM_NONE,
        ERROR_MEDIUM_INVALID,
        ERROR_MEDIUM_SPACE,
        ERROR_MEDIUM_NO_DATA,
        ERROR_MEDIUM_NOT_WRITABLE,
        ERROR_MEDIUM_NOT_REWRITABLE,
        ERROR_MEDIUM_NEED_RELOADING,
        ERROR_BAD_CHECKSUM,
        ERROR_MISSING_APP_AND_PLUGIN,
        WARNING_CHECKSUM,
        WARNING_INSERT_AFTER_COPY,
        ERROR_TMP_DIRECTORY,
        ERROR_ENCRYPTION_KEY,
    }

    export namespace BurnResult {
        export const $gtype: GObject.GType<BurnResult>;
    }

    enum BurnResult {
        OK,
        ERR,
        RETRY,
        CANCEL,
        RUNNING,
        DANGEROUS,
        NOT_READY,
        NOT_RUNNING,
        NEED_RELOAD,
        NOT_SUPPORTED,
    }

    export namespace PluginErrorType {
        export const $gtype: GObject.GType<PluginErrorType>;
    }

    enum PluginErrorType {
        NONE,
        MODULE,
        MISSING_APP,
        WRONG_APP_VERSION,
        SYMBOLIC_LINK_APP,
        MISSING_LIBRARY,
        LIBRARY_VERSION,
        MISSING_GSTREAMER_PLUGIN,
    }

    export namespace SessionError {
        export const $gtype: GObject.GType<SessionError>;
    }

    enum SessionError {
        VALID,
        NO_CD_TEXT,
        NOT_READY,
        EMPTY,
        NO_INPUT_IMAGE,
        UNKNOWN_IMAGE,
        NO_INPUT_MEDIUM,
        NO_OUTPUT,
        INSUFFICIENT_SPACE,
        OVERBURN_NECESSARY,
        NOT_SUPPORTED,
        DISC_PROTECTED,
    }

    export namespace StatusType {
        export const $gtype: GObject.GType<StatusType>;
    }

    enum StatusType {
        OK,
        ERROR,
        QUESTION,
        INFORMATION,
    }

    export namespace TrackDataCfgColumn {
        export const $gtype: GObject.GType<TrackDataCfgColumn>;
    }

    enum TrackDataCfgColumn {
        NAME,
        URI,
        MIME_DESC,
        MIME_ICON,
        SIZE,
        SHOW_PERCENT,
        PERCENT,
        STYLE,
        COLOR,
        EDITABLE,
        IS_FILE,
        IS_LOADING,
        IS_IMPORTED,
        COL_NUM,
    }
    const COVER_URI: string;
    const DATA_TRACK_SIZE_TAG: string;
    const DND_TARGET_DATA_TRACK_REFERENCE_LIST: string;
    const DVD_STREAM_FORMAT: string;
    const MIN_STREAM_LENGTH: number;
    const SESSION_STREAM_AUDIO_FORMAT: string;
    const STREAM_TRACK_SIZE_TAG: string;
    const TRACK_MEDIUM_ADDRESS_END_TAG: string;
    const TRACK_MEDIUM_ADDRESS_START_TAG: string;
    const TRACK_MEDIUM_WRONG_CHECKSUM_TAG: string;
    const TRACK_STREAM_ALBUM_TAG: string;
    const TRACK_STREAM_ARTIST_TAG: string;
    const TRACK_STREAM_COMPOSER_TAG: string;
    const TRACK_STREAM_ISRC_TAG: string;
    const TRACK_STREAM_MIME_TAG: string;
    const TRACK_STREAM_THUMBNAIL_TAG: string;
    const TRACK_STREAM_TITLE_TAG: string;
    const VCD_TYPE: string;
    const VIDEO_OUTPUT_ASPECT: string;
    const VIDEO_OUTPUT_FRAMERATE: string;
    /**
     * Frees `graft`. Do not use `grafts` afterwards.
     * @param graft a #BraseroGraftPt
     */
    function graft_point_free(graft: GraftPt): void;
    interface ForeachPluginErrorCb {
        (type: PluginErrorType, detail: string): BurnResult;
    }

    export namespace BurnFlag {
        export const $gtype: GObject.GType<BurnFlag>;
    }

    enum BurnFlag {
        NONE,
        CHECK_SIZE,
        NOGRACE,
        EJECT,
        MERGE,
        MULTI,
        APPEND,
        BURNPROOF,
        NO_TMP_FILES,
        DUMMY,
        OVERBURN,
        BLANK_BEFORE_WRITE,
        FAST_BLANK,
        DAO,
        RAW,
        LAST,
    }

    export namespace ChecksumType {
        export const $gtype: GObject.GType<ChecksumType>;
    }

    enum ChecksumType {
        NONE,
        DETECT,
        MD5,
        MD5_FILE,
        SHA1,
        SHA1_FILE,
        SHA256,
        SHA256_FILE,
    }

    export namespace ImageFS {
        export const $gtype: GObject.GType<ImageFS>;
    }

    enum ImageFS {
        FS_NONE,
        FS_ISO,
        FS_UDF,
        FS_JOLIET,
        FS_VIDEO,
        FS_SYMLINK,
        ISO_FS_LEVEL_3,
        ISO_FS_DEEP_DIRECTORY,
        FS_ANY,
    }

    export namespace ImageFormat {
        export const $gtype: GObject.GType<ImageFormat>;
    }

    enum ImageFormat {
        NONE,
        BIN,
        CUE,
        CLONE,
        CDRDAO,
        ANY,
    }

    export namespace StreamFormat {
        export const $gtype: GObject.GType<StreamFormat>;
    }

    enum StreamFormat {
        AUDIO_FORMAT_NONE,
        AUDIO_FORMAT_UNDEFINED,
        AUDIO_FORMAT_DTS,
        AUDIO_FORMAT_RAW,
        AUDIO_FORMAT_AC3,
        AUDIO_FORMAT_MP2,
        AUDIO_FORMAT_44100,
        AUDIO_FORMAT_48000,
        VIDEO_FORMAT_UNDEFINED,
        VIDEO_FORMAT_VCD,
        VIDEO_FORMAT_VIDEO_DVD,
        METADATA_INFO,
        AUDIO_FORMAT_RAW_LITTLE_ENDIAN,
    }
    module Burn {
        // Signal callback interfaces

        interface ActionChanged {
            (object: number): void;
        }

        interface BlankFailure {
            (): number;
        }

        interface DisableJoliet {
            (): number;
        }

        interface DummySuccess {
            (): number;
        }

        interface EjectFailure {
            (object: unknown): number;
        }

        interface InsertMedia {
            (object: unknown, p0: number, p1: number): number;
        }

        interface InstallMissing {
            (object: number, p0: string): number;
        }

        interface LocationRequest {
            (object: any | null, p0: number): number;
        }

        interface ProgressChanged {
            (object: number, p0: number, p1: number): void;
        }

        interface WarnAudioToAppendable {
            (): number;
        }

        interface WarnDataLoss {
            (): number;
        }

        interface WarnPreviousSessionLoss {
            (): number;
        }

        interface WarnRewritable {
            (): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Burn extends GObject.Object {
        static $gtype: GObject.GType<Burn>;

        // Constructors

        constructor(properties?: Partial<Burn.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Burn;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'action-changed', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'action-changed', callback: (_source: this, object: number) => void): number;
        emit(signal: 'action-changed', object: number): void;
        connect(signal: 'blank-failure', callback: (_source: this) => number): number;
        connect_after(signal: 'blank-failure', callback: (_source: this) => number): number;
        emit(signal: 'blank-failure'): void;
        connect(signal: 'disable-joliet', callback: (_source: this) => number): number;
        connect_after(signal: 'disable-joliet', callback: (_source: this) => number): number;
        emit(signal: 'disable-joliet'): void;
        connect(signal: 'dummy-success', callback: (_source: this) => number): number;
        connect_after(signal: 'dummy-success', callback: (_source: this) => number): number;
        emit(signal: 'dummy-success'): void;
        connect(signal: 'eject-failure', callback: (_source: this, object: unknown) => number): number;
        connect_after(signal: 'eject-failure', callback: (_source: this, object: unknown) => number): number;
        emit(signal: 'eject-failure', object: unknown): void;
        connect(
            signal: 'insert-media',
            callback: (_source: this, object: unknown, p0: number, p1: number) => number,
        ): number;
        connect_after(
            signal: 'insert-media',
            callback: (_source: this, object: unknown, p0: number, p1: number) => number,
        ): number;
        emit(signal: 'insert-media', object: unknown, p0: number, p1: number): void;
        connect(signal: 'install-missing', callback: (_source: this, object: number, p0: string) => number): number;
        connect_after(
            signal: 'install-missing',
            callback: (_source: this, object: number, p0: string) => number,
        ): number;
        emit(signal: 'install-missing', object: number, p0: string): void;
        connect(
            signal: 'location-request',
            callback: (_source: this, object: any | null, p0: number) => number,
        ): number;
        connect_after(
            signal: 'location-request',
            callback: (_source: this, object: any | null, p0: number) => number,
        ): number;
        emit(signal: 'location-request', object: any | null, p0: number): void;
        connect(
            signal: 'progress-changed',
            callback: (_source: this, object: number, p0: number, p1: number) => void,
        ): number;
        connect_after(
            signal: 'progress-changed',
            callback: (_source: this, object: number, p0: number, p1: number) => void,
        ): number;
        emit(signal: 'progress-changed', object: number, p0: number, p1: number): void;
        connect(signal: 'warn-audio-to-appendable', callback: (_source: this) => number): number;
        connect_after(signal: 'warn-audio-to-appendable', callback: (_source: this) => number): number;
        emit(signal: 'warn-audio-to-appendable'): void;
        connect(signal: 'warn-data-loss', callback: (_source: this) => number): number;
        connect_after(signal: 'warn-data-loss', callback: (_source: this) => number): number;
        emit(signal: 'warn-data-loss'): void;
        connect(signal: 'warn-previous-session-loss', callback: (_source: this) => number): number;
        connect_after(signal: 'warn-previous-session-loss', callback: (_source: this) => number): number;
        emit(signal: 'warn-previous-session-loss'): void;
        connect(signal: 'warn-rewritable', callback: (_source: this) => number): number;
        connect_after(signal: 'warn-rewritable', callback: (_source: this) => number): number;
        emit(signal: 'warn-rewritable'): void;

        // Static methods

        static library_can_checksum(): boolean;
        static library_get_option_group(): GLib.OptionGroup;
        static library_input_supported(type: TrackType): BurnResult;
        static library_start(argc: number, argv: string): boolean;
        static library_stop(): void;
        static quark(): GLib.Quark;

        // Virtual methods

        vfunc_action_changed(action: BurnAction): void;
        vfunc_ask_disable_joliet(): BurnResult;
        vfunc_blank_failure(): BurnResult;
        vfunc_dummy_success(): BurnResult;
        vfunc_install_missing(error: PluginErrorType, detail: string): BurnResult;
        vfunc_location_request(error: GLib.Error, is_temporary: boolean): BurnResult;
        vfunc_progress_changed(overall_progress: number, action_progress: number, time_remaining: number): void;
        vfunc_warn_audio_to_appendable(): BurnResult;
        vfunc_warn_data_loss(): BurnResult;
        vfunc_warn_previous_session_loss(): BurnResult;
        vfunc_warn_rewritable(): BurnResult;

        // Methods

        /**
         * Blanks a medium according to the parameters
         * set in `session`. The medium must be inserted in the #BraseroDrive
         * set with brasero_burn_session_set_burner ().
         * @param session a #BraseroBurnSession
         * @returns a #BraseroBurnResult. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        blank(session: BurnSession): BurnResult;
        /**
         * Cancels any ongoing operation. If `protect` is TRUE then
         * cancellation will not take place for a "critical" task, a task whose interruption
         * could damage the medium or the drive.
         * @param protect a #gboolean
         * @returns a #BraseroBurnResult. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        cancel(protect: boolean): BurnResult;
        /**
         * Checks the integrity of a medium according to the parameters
         * set in `session`. The medium must be inserted in the #BraseroDrive
         * set as the source of a #BraseroTrackDisc track inserted in `session`.
         * @param session a #BraseroBurnSession
         * @returns a #BraseroBurnResult. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        check(session: BurnSession): BurnResult;
        /**
         * This function returns the current action (in `string)`  of
         * an ongoing operation performed by `burn`.
         * `action` is used to set a default string in case there was
         * no string set by the backend to describe the current
         * operation.
         * @param action a #BraseroBurnAction
         * @param string a #gchar **
         */
        get_action_string(action: BurnAction | null, string: string): void;
        /**
         * Burns or creates a disc image according to the parameters
         * set in `session`.
         * @param session a #BraseroBurnSession
         * @returns a #BraseroBurnResult. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        record(session: BurnSession): BurnResult;
    }

    module BurnDialog {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class BurnDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<BurnDialog>;

        // Constructors

        constructor(properties?: Partial<BurnDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BurnDialog;

        // Methods

        /**
         * Cancel the ongoing operation run by `dialog;` if `force_cancellation` is FALSE then it can
         * happen that the operation won't be cancelled if there is a risk to make a disc unusable.
         * @param force_cancellation a #gboolean
         * @returns a #gboolean. TRUE if it was sucessfully cancelled, FALSE otherwise.
         */
        cancel(force_cancellation: boolean): boolean;
        /**
         * Start burning the contents of `session`.
         * @param session a #BraseroBurnSession
         * @returns a #gboolean. TRUE if the operation was successfully carried out, FALSE otherwise.
         */
        run(session: BurnSession): boolean;
        // Conflicted with Gtk.Dialog.run
        run(...args: never[]): any;
        /**
         * Start burning the contents of `session`. Once a disc is burnt, a dialog
         * will be shown to the user and wait for a new insertion before starting to burn
         * again.
         * @param session a #BraseroBurnSession
         * @returns a #gboolean. TRUE if the operation was successfully carried out, FALSE otherwise.
         */
        run_multi(session: BurnSession): boolean;

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

    module BurnOptions {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            session: BurnSession;
        }
    }

    class BurnOptions extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<BurnOptions>;

        // Properties

        get session(): BurnSession;

        // Constructors

        constructor(properties?: Partial<BurnOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: SessionCfg): BurnOptions;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Methods

        /**
         * Adds some new options to be displayed in the dialog.
         * @param options a #GtkWidget
         */
        add_options(options: Gtk.Widget): void;

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

    module BurnSession {
        // Signal callback interfaces

        interface OutputChanged {
            (former_medium: unknown): void;
        }

        interface TagChanged {
            (object: string): void;
        }

        interface TrackAdded {
            (track: Track): void;
        }

        interface TrackChanged {
            (track: Track): void;
        }

        interface TrackRemoved {
            (track: Track, former_position: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
            speed: number;
            tmpdir: string;
        }
    }

    class BurnSession extends GObject.Object {
        static $gtype: GObject.GType<BurnSession>;

        // Properties

        get flags(): number;
        set flags(val: number);
        get speed(): number;
        set speed(val: number);
        get tmpdir(): string;
        set tmpdir(val: string);

        // Constructors

        constructor(properties?: Partial<BurnSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BurnSession;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'output-changed', callback: (_source: this, former_medium: unknown) => void): number;
        connect_after(signal: 'output-changed', callback: (_source: this, former_medium: unknown) => void): number;
        emit(signal: 'output-changed', former_medium: unknown): void;
        connect(signal: 'tag-changed', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'tag-changed', callback: (_source: this, object: string) => void): number;
        emit(signal: 'tag-changed', object: string): void;
        connect(signal: 'track-added', callback: (_source: this, track: Track) => void): number;
        connect_after(signal: 'track-added', callback: (_source: this, track: Track) => void): number;
        emit(signal: 'track-added', track: Track): void;
        connect(signal: 'track-changed', callback: (_source: this, track: Track) => void): number;
        connect_after(signal: 'track-changed', callback: (_source: this, track: Track) => void): number;
        emit(signal: 'track-changed', track: Track): void;
        connect(
            signal: 'track-removed',
            callback: (_source: this, track: Track, former_position: number) => void,
        ): number;
        connect_after(
            signal: 'track-removed',
            callback: (_source: this, track: Track, former_position: number) => void,
        ): number;
        emit(signal: 'track-removed', track: Track, former_position: number): void;

        // Virtual methods

        /**
         * When the contents of `session` should be written to a
         * file then this function returns the format of the image to write.
         *
         * NOTE: before using this function a #BraseroDrive should have been
         * set with brasero_burn_session_set_burner () and it should be the
         * fake drive (see brasero_drive_is_fake ()).
         */
        vfunc_get_output_format(): ImageFormat;
        vfunc_get_output_path(image: string, toc: string): BurnResult;
        vfunc_set_output_image(format: ImageFormat, image: string, toc: string): BurnResult;
        vfunc_tag_changed(tag: string): void;
        vfunc_track_added(track: Track): void;
        vfunc_track_changed(track: Track): void;
        vfunc_track_removed(track: Track, former_position: number): void;

        // Methods

        /**
         * Merges the current flags set in `session` with `flags`.
         * @param flags a #BraseroBurnFlag
         */
        add_flag(flags: BurnFlag | null): void;
        /**
         * Inserts a new track after `sibling` or appended if `sibling` is NULL. If `track` is NULL then all tracks
         * already in `session` will be removed.
         * NOTE: if there are already #BraseroTrack objects inserted in the session and if they are not
         * of the same type as `new_track` then they will be removed before the insertion of `new_track`.
         * @param new_track a #BraseroTrack or NULL.
         * @param sibling a #BraseroTrack or NULL.
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the track was successfully inserted or BRASERO_BURN_ERR otherwise.
         */
        add_track(new_track?: Track | null, sibling?: Track | null): BurnResult;
        can_blank(): BurnResult;
        can_burn(check_flags: boolean): BurnResult;
        get_blank_flags(supported: BurnFlag | null, compulsory: BurnFlag | null): BurnResult;
        get_burn_flags(supported: BurnFlag | null, compulsory: BurnFlag | null): BurnResult;
        get_default_output_format(): ImageFormat;
        /**
         * Returns the current flags set for `session`.
         * @returns a #BraseroBurnFlag.
         */
        get_flags(): BurnFlag;
        /**
         * Sets `type` to reflect the type of data contained in `session`
         * @param type a #BraseroTrackType or NULL
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful
         */
        get_input_type(type: TrackType): BurnResult;
        /**
         * Returns the label (a string) set for `session`.
         * @returns a #gchar or NULL. Do not free after use.
         */
        get_label(): string;
        /**
         * When the contents of `session` should be written to a
         * file then this function returns the image path (and if
         * necessary a toc path).
         * `image` and `toc` should be freed if not used anymore.
         *
         * NOTE: before using this function a #BraseroDrive should have been
         * set with brasero_burn_session_set_burner () and it should be the
         * fake drive (see brasero_drive_is_fake ()).
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful; BRASERO_BURN_ERR otherwise.
         */
        get_output(): [BurnResult, string, string];
        /**
         * When the contents of `session` should be written to a
         * file then this function returns the format of the image to write.
         *
         * NOTE: before using this function a #BraseroDrive should have been
         * set with brasero_burn_session_set_burner () and it should be the
         * fake drive (see brasero_drive_is_fake ()).
         * @returns a #BraseroImageFormat. The format of the image to be written.
         */
        get_output_format(): ImageFormat;
        /**
         * This function returns the type of output set for the session.
         * @param output a #BraseroTrackType or NULL
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful; BRASERO_BURN_NOT_READY if no setting has been set; BRASERO_BURN_ERR otherwise.
         */
        get_output_type(output: TrackType): BurnResult;
        get_possible_output_formats(formats: ImageFormat | null): number;
        /**
         * Returns the speed at which the medium should be burnt.
         * NOTE: before using this function a #BraseroDrive should have been
         * set with brasero_burn_session_set_burner ().
         * @returns a #guint64 or 0.
         */
        get_rate(): number;
        /**
         * Returns the size of the data contained by `session` in bytes or in sectors
         * @param blocks a #goffset or NULL
         * @param bytes a #goffset or NULL
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if @track needs more time for processing the size BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_size(blocks: number, bytes: number): BurnResult;
        /**
         * Sets `status` to reflect whether `session` is ready to be used.
         * @param status a #BraseroTrackStatus
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if @track needs more time for processing BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_status(status: Status): BurnResult;
        /**
         * For the following functions:
         * brasero_burn_session_can_burn ()
         * brasero_burn_session_input_supported ()
         * brasero_burn_session_output_supported ()
         * brasero_burn_session_can_blank ()
         * this function gets whether the checks will
         * ignore the plugins with errors (return %TRUE).
         * @returns #gboolean
         */
        get_strict_support(): boolean;
        /**
         * Returns the path of the directory in which to write temporary directories and files.
         * @returns a #gchar. The path to the temporary directory.
         */
        get_tmpdir(): string;
        /**
         * Returns the list of #BraseroTrack added to `session`.
         * @returns a #GSList or #BraseroTrack object. Do not unref the objects in the list nor destroy the list.
         */
        get_tracks(): Track[];
        input_supported(input: TrackType, check_flags: boolean): BurnResult;
        /**
         * Moves `track` after `sibling;` if `sibling` is NULL then it is appended.
         * @param track a #BraseroTrack.
         * @param sibling a #BraseroTrack or NULL.
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the track was successfully moved or BRASERO_BURN_ERR otherwise.
         */
        move_track(track: Track, sibling?: Track | null): BurnResult;
        output_supported(output: TrackType): BurnResult;
        /**
         * Removes `flags` from the current flags set for `session`.
         * @param flags a #BraseroBurnFlag
         */
        remove_flag(flags: BurnFlag | null): void;
        /**
         * Removes `track` from `session`.
         * @param track a #BraseroTrack
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the track was successfully removed or BRASERO_BURN_ERR otherwise.
         */
        remove_track(track: Track): BurnResult;
        /**
         * Replaces the current flags set in `session` with `flags`.
         * @param flags a #BraseroBurnFlag
         */
        set_flags(flags: BurnFlag | null): void;
        /**
         * When the contents of `session` should be written to a
         * file, this function sets format of the image that will be
         * created.
         *
         * NOTE: after a call to this function the #BraseroDrive for
         * `session` will be the fake #BraseroDrive.
         *
         * Since 2.29.0
         * @param format a #BraseroImageFormat
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successfully set; BRASERO_BURN_ERR otherwise.
         */
        set_image_output_format(format: ImageFormat | null): BurnResult;
        /**
         * When the contents of `session` should be written to a
         * file, this function sets the different parameters of this
         * image like its path (and the one of the associated toc if
         * necessary) and its format.
         *
         * NOTE: after a call to this function the #BraseroDrive for
         * `session` will be the fake #BraseroDrive.
         * @param format a #BraseroImageFormat.
         * @param image a #gchar or NULL.
         * @param toc a #gchar or NULL.
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successfully set; BRASERO_BURN_ERR otherwise.
         */
        set_image_output_full(format: ImageFormat | null, image?: string | null, toc?: string | null): BurnResult;
        /**
         * Sets the label for `session`.
         * @param label a #gchar or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the speed at which the medium should be burnt.
         * NOTE: before using this function a #BraseroDrive should have been
         * set with brasero_burn_session_set_burner ().
         * @param rate a #guint64
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful; BRASERO_BURN_ERR otherwise.
         */
        set_rate(rate: number): BurnResult;
        /**
         * For the following functions:
         * brasero_burn_session_supported ()
         * brasero_burn_session_input_supported ()
         * brasero_burn_session_output_supported ()
         * brasero_burn_session_can_blank ()
         * this function sets whether these functions will
         * ignore the plugins with errors (%TRUE).
         * @param strict_check
         */
        set_strict_support(strict_check: boolean): void;
        /**
         * Sets the path of the directory in which to write temporary directories and files.
         * If set to NULL then the result of g_get_tmp_dir () will be used.
         * @param path a #gchar or NULL
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successfully set; BRASERO_BURN_ERR otherwise.
         */
        set_tmpdir(path: string): BurnResult;
        /**
         * Associates a new `tag` with `session`. This can be used
         * to pass arbitrary information for plugins, like parameters
         * for video discs, ...
         * NOTE: the #BraseroBurnSession object takes ownership of `value`.
         * See brasero-tags.h for a list of knowns tags.
         * @param tag a #gchar *
         * @param value a #GValue *
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * Associates a new `tag` with `session`. This can be used
         * to pass arbitrary information for plugins, like parameters
         * for video discs, ...
         * See brasero-tags.h for a list of knowns tags.
         *
         * Since 2.29.0
         * @param tag a #gchar *
         * @param value a #gint
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add_int(tag: string, value: number): BurnResult;
        /**
         * Retrieves a value associated with `session` through
         * brasero_session_tag_add () and stores it in `value`. Do
         * not destroy `value` afterwards as it is not a copy.
         * @param tag a #gchar *
         * @param value a #GValue
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the retrieval was successful BRASERO_BURN_ERR otherwise
         */
        tag_lookup(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * Retrieves an int value associated with `session` through
         * brasero_session_tag_add () and returns it.
         *
         * Since 2.29.0
         * @param tag a #gchar
         * @returns a #gint.
         */
        tag_lookup_int(tag: string): number;
        /**
         * Removes a value associated with `session` through
         * brasero_session_tag_add ().
         * @param tag a #gchar *
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the retrieval was successful BRASERO_BURN_ERR otherwise
         */
        tag_remove(tag: string): BurnResult;
    }

    module SessionCfg {
        // Signal callback interfaces

        interface IsValid {
            (): void;
        }

        interface WrongExtension {
            (): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends SessionSpan.ConstructorProps {}
    }

    class SessionCfg extends SessionSpan {
        static $gtype: GObject.GType<SessionCfg>;

        // Constructors

        constructor(properties?: Partial<SessionCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SessionCfg;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'is-valid', callback: (_source: this) => void): number;
        connect_after(signal: 'is-valid', callback: (_source: this) => void): number;
        emit(signal: 'is-valid'): void;
        connect(signal: 'wrong-extension', callback: (_source: this) => boolean): number;
        connect_after(signal: 'wrong-extension', callback: (_source: this) => boolean): number;
        emit(signal: 'wrong-extension'): void;

        // Methods

        /**
         * Adds all flags from `flags` that are supported.
         * @param flags a #BraseroBurnFlag
         */
        add_flags(flags: BurnFlag | null): void;
        /**
         * This function disables autoconfiguration
         */
        disable(): void;
        /**
         * This function (re)-enables autoconfiguration
         */
        enable(): void;
        /**
         * This function returns the current status and if
         * autoconfiguration is/was successful.
         * @returns a #BraseroSessionError.
         */
        get_error(): SessionError;
        /**
         * This function returns whether the path returned
         * by brasero_burn_session_get_output () is an
         * automatically created one.
         * @returns a #gboolean. TRUE if the path(s) creation is handled by @session, FALSE if it was set.
         */
        has_default_output_path(): boolean;
        /**
         * Checks whether a particular flag is compulsory.
         * @param flag a #BraseroBurnFlag
         * @returns a #gboolean. TRUE if it is compulsory; FALSE otherwise.
         */
        is_compulsory(flag: BurnFlag | null): boolean;
        /**
         * Checks whether a particular flag is supported.
         * @param flag a #BraseroBurnFlag
         * @returns a #gboolean. TRUE if it is supported; FALSE otherwise.
         */
        is_supported(flag: BurnFlag | null): boolean;
        /**
         * Removes all flags that are not compulsory.
         * @param flags a #BraseroBurnFlag
         */
        remove_flags(flags: BurnFlag | null): void;
    }

    module SessionSpan {
        // Constructor properties interface

        interface ConstructorProps extends BurnSession.ConstructorProps {}
    }

    class SessionSpan extends BurnSession {
        static $gtype: GObject.GType<SessionSpan>;

        // Constructors

        constructor(properties?: Partial<SessionSpan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SessionSpan;

        // Methods

        /**
         * Checks whether some data were not included during calls to brasero_session_span_next ().
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new #BraseroTrackDataCfg was created. BRASERO_BURN_ERR otherwise.
         */
        again(): BurnResult;
        /**
         * Returns the maximum required space (in sectors)
         * among all the possible spanned batches.
         * This means that when burningto a media
         * it will also be the minimum required
         * space to burn all the contents in several
         * batches.
         * @returns a #goffset.
         */
        get_max_space(): number;
        /**
         * Sets the next batch of data to be burnt onto the medium inserted in the #BraseroDrive
         * set for `session` (see brasero_burn_session_set_burner ()). Its free space or it capacity
         * will be used as the maximum amount of data to be burnt.
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if successful.
         */
        next(): BurnResult;
        /**
         * Checks if a new #BraseroTrackData can be created from the files remaining in the tree
         * after calls to brasero_session_span_next (). The maximum size of the data will be the one
         * of the medium inserted in the #BraseroDrive set for `session` (see brasero_burn_session_set_burner ()).
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new #BraseroTrackDataCfg was created. BRASERO_BURN_ERR otherwise.
         */
        possible(): BurnResult;
        /**
         * Get the object ready for spanning a #BraseroBurnSession object. This function
         * must be called before brasero_session_span_next ().
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if successful.
         */
        start(): BurnResult;
        /**
         * Ends and cleans a spanning operation started with brasero_session_span_start ().
         */
        stop(): void;
    }

    module Status {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Status extends GObject.Object {
        static $gtype: GObject.GType<Status>;

        // Constructors

        constructor(properties?: Partial<Status.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Status;

        // Methods

        /**
         * If brasero_status_get_result () returned BRASERO_BURN_NOT_READY,
         * this function returns a string describing the operation currently performed.
         * Free the string when it is not needed anymore.
         * @returns a #gchar.
         */
        get_current_action(): string;
        /**
         * If brasero_status_get_result () returned BRASERO_BURN_ERR,
         * this function returns the error.
         * @returns a #GError
         */
        get_error(): GLib.Error;
        /**
         * If brasero_status_get_result () returned BRASERO_BURN_NOT_READY,
         * this function returns the progress regarding the operation completion.
         * @returns a #gdouble
         */
        get_progress(): number;
        /**
         * After an object (see brasero_burn_track_get_status ()) has
         * been requested its status, this function returns that status.
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the object is ready. BRASERO_BURN_NOT_READY if some time should be given to the object before it is ready. BRASERO_BURN_ERR if there is an error.
         */
        get_result(): BurnResult;
        /**
         * Sets the status for a request to BRASERO_BURN_OK.
         */
        set_completed(): void;
        /**
         * Sets the status for a request to BRASERO_BURN_ERR.
         * @param error a #GError or NULL.
         */
        set_error(error: GLib.Error): void;
        /**
         * Sets the status for a request to BRASERO_BURN_NOT_READY.
         * Allows to set a string describing the operation currently performed
         * as well as the progress regarding the operation completion.
         * @param progress a #gdouble or -1.0.
         * @param current_action a #gchar or NULL.
         */
        set_not_ready(progress: number, current_action: string): void;
        /**
         * Sets the status for a request to BRASERO_BURN_RUNNING.
         * Allows to set a string describing the operation currently performed
         * as well as the progress regarding the operation completion.
         * @param progress a #gdouble or -1.0.
         * @param current_action a #gchar or NULL.
         */
        set_running(progress: number, current_action: string): void;
    }

    module SumDialog {
        // Constructor properties interface

        interface ConstructorProps
            extends ToolDialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class SumDialog extends ToolDialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SumDialog>;

        // Constructors

        constructor(properties?: Partial<SumDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SumDialog;

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

    module ToolDialog {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class ToolDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ToolDialog>;

        // Constructors

        constructor(properties?: Partial<ToolDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Cancels any ongoing operation.
         */
        vfunc_cancel(): boolean;

        // Methods

        /**
         * Cancels any ongoing operation.
         * @returns a #gboolean. TRUE when cancellation was successful. FALSE otherwise.
         */
        cancel(): boolean;

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

    module Track {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Track extends GObject.Object {
        static $gtype: GObject.GType<Track>;

        // Constructors

        constructor(properties?: Partial<Track.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Virtual methods

        /**
         * Used internally in #BraseroTrack implementations to
         * signal a #BraseroTrack object has changed.
         */
        vfunc_changed(): void;
        /**
         * Returns the size of the data contained by `track` in bytes or in sectors
         * @param blocks a #goffset or NULL
         * @param block_size
         */
        vfunc_get_size(blocks: number, block_size: number): BurnResult;
        /**
         * Sets `status` to reflect whether `track` is ready to be used
         * @param status a #BraseroTrackStatus
         */
        vfunc_get_status(status: Status): BurnResult;
        vfunc_get_type(type: TrackType): BurnResult;

        // Methods

        /**
         * Used internally in #BraseroTrack implementations to
         * signal a #BraseroTrack object has changed.
         */
        changed(): void;
        /**
         * Get the current checksum (as a string) for the track
         * @returns a #gchar * (not to be freed) or NULL
         */
        get_checksum(): string;
        /**
         * Get the current checksum type for the track if any.
         * @returns a #BraseroChecksumType
         */
        get_checksum_type(): ChecksumType;
        /**
         * Returns the size of the data contained by `track` in bytes or in sectors
         * @param blocks a #goffset or NULL
         * @param bytes a #goffset or NULL
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if @track needs more time for processing the size BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_size(blocks: number, bytes: number): BurnResult;
        /**
         * Sets `status` to reflect whether `track` is ready to be used
         * @param status a #BraseroTrackStatus
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if @track needs more time for processing BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_status(status: Status): BurnResult;
        /**
         * Sets `type` to reflect the type of data contained in `track`
         * @param type a #BraseroTrackType or NULL
         * @returns the #BraseroBurnResult of the track
         */
        get_track_type(type: TrackType): BurnResult;
        /**
         * Sets a checksum for the track
         * @param type a #BraseroChecksumType
         * @param checksum a #gchar * holding the checksum
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the checksum was previously empty or matches the new one BRASERO_BURN_ERR otherwise
         */
        set_checksum(type: ChecksumType | null, checksum: string): BurnResult;
        /**
         * Associates a new `tag` with a track. This can be used
         * to pass arbitrary information for plugins, like parameters
         * for video discs, ...
         * See brasero-tags.h for a list of knowns tags.
         * @param tag a #gchar *
         * @param value a #GValue
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * A wrapper around brasero_track_tag_add () to associate
         * a int value with `track`
         * See also brasero_track_tag_add ()
         * @param tag a #gchar *
         * @param value a #int
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add_int(tag: string, value: number): BurnResult;
        /**
         * A wrapper around brasero_track_tag_add () to associate
         * a string with `track`
         * See also brasero_track_tag_add ()
         * @param tag a #gchar *
         * @param string a #gchar *
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add_string(tag: string, string: string): BurnResult;
        /**
         * Adds all tags of `dest` to `src` provided they do not
         * already exists.
         * @param src a #BraseroTrack
         */
        tag_copy_missing(src: Track): void;
        /**
         * Retrieves a value associated with `track` through
         * brasero_track_tag_add () and stores it in `value`. Do
         * not destroy `value` afterwards as it is not a copy
         * @param tag a #gchar *
         * @param value a #GValue **
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if the retrieval was successful BRASERO_BURN_ERR otherwise
         */
        tag_lookup(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * Retrieves a int value associated with `track`. This
         * is a wrapper around brasero_track_tag_lookup ().
         * @param tag a #gchar *
         * @returns a #int; the value or 0 otherwise
         */
        tag_lookup_int(tag: string): number;
        /**
         * Retrieves a string value associated with `track`. This
         * is a wrapper around brasero_track_tag_lookup ().
         * @param tag a #gchar *
         * @returns a #gchar *. The value or NULL otherwise. Do not free the string as it is not a copy.
         */
        tag_lookup_string(tag: string): string;
    }

    module TrackData {
        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    class TrackData extends Track {
        static $gtype: GObject.GType<TrackData>;

        // Constructors

        constructor(properties?: Partial<TrackData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackData;

        // Virtual methods

        /**
         * Adds one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a #BraseroImageFS
         */
        vfunc_add_fs(fstype: ImageFS): BurnResult;
        vfunc_get_file_num(): number;
        /**
         * Returns the parameters determining the file system type
         * and various other options to create an image.
         */
        vfunc_get_fs(): ImageFS;
        /**
         * Returns a list of #BraseroGraftPt.
         *
         * Do not free after usage as `track` retains ownership.
         */
        vfunc_get_grafts(): GraftPt[] | null;
        /**
         * Removes one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a #BraseroImageFS
         */
        vfunc_rm_fs(fstype: ImageFS): BurnResult;
        /**
         * Sets the lists of grafts points (`grafts)` and excluded
         * URIs (`unreadable)` to be used to create an image.
         *
         * Be careful `track` takes ownership of `grafts` and
         * `unreadable` which must not be freed afterwards.
         * @param grafts a #GSList of #BraseroGraftPt.
         * @param unreadable a #GSList of URIS as strings or %NULL.
         */
        vfunc_set_source(grafts: GraftPt[], unreadable?: string[] | null): BurnResult;

        // Methods

        /**
         * Adds one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a #BraseroImageFS
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        add_fs(fstype: ImageFS | null): BurnResult;
        /**
         * Returns a list of URIs which must not be included in
         * the image to be created.
         * Do not free the list or any of the URIs after
         * usage as `track` retains ownership.
         * @returns a #GSList of #gchar * or %NULL if no URI should be excluded.
         */
        get_excluded_list(): string[] | null;
        /**
         * Sets the number of files (not directories) in `file_num`.
         * @returns a #BraseroBurnResult. %TRUE if @file_num was set, %FALSE otherwise.
         */
        get_file_num(): [BurnResult, number];
        /**
         * Returns the parameters determining the file system type
         * and various other options to create an image.
         * @returns a #BraseroImageFS.
         */
        get_fs(): ImageFS;
        /**
         * Returns a list of #BraseroGraftPt.
         *
         * Do not free after usage as `track` retains ownership.
         * @returns a #GSList of #BraseroGraftPt or %NULL if empty.
         */
        get_grafts(): GraftPt[] | null;
        /**
         * Removes one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a #BraseroImageFS
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        rm_fs(fstype: ImageFS | null): BurnResult;
        /**
         * Sets the size of the image to be created (in sectors of 2048 bytes).
         * @param blocks a #goffset
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_data_blocks(blocks: number): BurnResult;
        /**
         * Sets the number of files (not directories) in `track`.
         * @param number a #guint64
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_file_num(number: number): BurnResult;
        /**
         * Sets the lists of grafts points (`grafts)` and excluded
         * URIs (`unreadable)` to be used to create an image.
         *
         * Be careful `track` takes ownership of `grafts` and
         * `unreadable` which must not be freed afterwards.
         * @param grafts a #GSList of #BraseroGraftPt.
         * @param unreadable a #GSList of URIS as strings or %NULL.
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_source(grafts: GraftPt[], unreadable?: string[] | null): BurnResult;
        /**
         * Write to `grafts_path` (a path to a file) the graft points,
         * and to `excluded_path` (a path to a file) the list of paths to
         * be excluded; `emptydir` is (path) is an empty
         * directory to be used for created directories;
         * `videodir` (a path) is a directory to be used to build the
         * the video image.
         *
         * This is mostly for internal use by mkisofs and similar.
         *
         * This function takes care of file name mangling.
         * @param grafts_path a #gchar.
         * @param excluded_path a #gchar.
         * @param emptydir a #gchar.
         * @param videodir a #gchar or %NULL.
         * @returns a #BraseroBurnResult.
         */
        write_to_paths(
            grafts_path: string,
            excluded_path: string,
            emptydir: string,
            videodir?: string | null,
        ): BurnResult;
    }

    module TrackDataCfg {
        // Signal callback interfaces

        interface DeepDirectory {
            (object: string): boolean;
        }

        interface IconChanged {
            (): void;
        }

        interface ImageUri {
            (object: string): number;
        }

        interface JolietRename {
            (): void;
        }

        interface NameCollision {
            (object: string): boolean;
        }

        interface RecursiveSym {
            (object: string): void;
        }

        interface SessionAvailable {
            (object: GObject.Object, p0: boolean): void;
        }

        interface SessionLoaded {
            (object: GObject.Object, p0: boolean): void;
        }

        interface SourceLoaded {
            (object?: any | null): void;
        }

        interface SourceLoading {
            (object: number): void;
        }

        interface UnknownUri {
            (object: string): void;
        }

        interface UnreadableUri {
            (object: any | null, p0: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends TrackData.ConstructorProps,
                Gtk.TreeDragDest.ConstructorProps,
                Gtk.TreeDragSource.ConstructorProps,
                Gtk.TreeModel.ConstructorProps,
                Gtk.TreeSortable.ConstructorProps {}
    }

    class TrackDataCfg
        extends TrackData
        implements Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable
    {
        static $gtype: GObject.GType<TrackDataCfg>;

        // Constructors

        constructor(properties?: Partial<TrackDataCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackDataCfg;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'deep-directory', callback: (_source: this, object: string) => boolean): number;
        connect_after(signal: 'deep-directory', callback: (_source: this, object: string) => boolean): number;
        emit(signal: 'deep-directory', object: string): void;
        connect(signal: 'icon-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'icon-changed', callback: (_source: this) => void): number;
        emit(signal: 'icon-changed'): void;
        connect(signal: 'image-uri', callback: (_source: this, object: string) => number): number;
        connect_after(signal: 'image-uri', callback: (_source: this, object: string) => number): number;
        emit(signal: 'image-uri', object: string): void;
        connect(signal: 'joliet-rename', callback: (_source: this) => void): number;
        connect_after(signal: 'joliet-rename', callback: (_source: this) => void): number;
        emit(signal: 'joliet-rename'): void;
        connect(signal: 'name-collision', callback: (_source: this, object: string) => boolean): number;
        connect_after(signal: 'name-collision', callback: (_source: this, object: string) => boolean): number;
        emit(signal: 'name-collision', object: string): void;
        connect(signal: 'recursive-sym', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'recursive-sym', callback: (_source: this, object: string) => void): number;
        emit(signal: 'recursive-sym', object: string): void;
        connect(
            signal: 'session-available',
            callback: (_source: this, object: GObject.Object, p0: boolean) => void,
        ): number;
        connect_after(
            signal: 'session-available',
            callback: (_source: this, object: GObject.Object, p0: boolean) => void,
        ): number;
        emit(signal: 'session-available', object: GObject.Object, p0: boolean): void;
        connect(
            signal: 'session-loaded',
            callback: (_source: this, object: GObject.Object, p0: boolean) => void,
        ): number;
        connect_after(
            signal: 'session-loaded',
            callback: (_source: this, object: GObject.Object, p0: boolean) => void,
        ): number;
        emit(signal: 'session-loaded', object: GObject.Object, p0: boolean): void;
        connect(signal: 'source-loaded', callback: (_source: this, object: any | null) => void): number;
        connect_after(signal: 'source-loaded', callback: (_source: this, object: any | null) => void): number;
        emit(signal: 'source-loaded', object?: any | null): void;
        connect(signal: 'source-loading', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'source-loading', callback: (_source: this, object: number) => void): number;
        emit(signal: 'source-loading', object: number): void;
        connect(signal: 'unknown-uri', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'unknown-uri', callback: (_source: this, object: string) => void): number;
        emit(signal: 'unknown-uri', object: string): void;
        connect(signal: 'unreadable-uri', callback: (_source: this, object: any | null, p0: string) => void): number;
        connect_after(
            signal: 'unreadable-uri',
            callback: (_source: this, object: any | null, p0: string) => void,
        ): number;
        emit(signal: 'unreadable-uri', object: any | null, p0: string): void;

        // Methods

        /**
         * Add a new file (with `uri` as URI) under a directory (`parent)`.
         * If `parent` is NULL, the file is added to the root.
         * Also if `uri` is the path of a directory, this directory will be explored
         * and all its children added to the tree.
         * @param uri a #gchar
         * @param parent a #GtkTreePath or NULL
         * @returns a #gboolean. TRUE if the operation was successful, FALSE otherwise
         */
        add(uri: string, parent: Gtk.TreePath): boolean;
        /**
         * Add a new empty directory (with `name` as name) under another directory (`parent)`.
         * If `parent` is NULL, the file is added to the root.
         * @param name a #gchar
         * @param parent a #GtkTreePath or NULL
         * @returns a #GtkTreePath which should be destroyed when not needed; NULL if the operation was not successful.
         */
        add_empty_directory(name: string, parent: Gtk.TreePath): Gtk.TreePath;
        /**
         * Prevents `uri` to be filtered while automatic exploration
         * of added directories is performed.
         * @param uri a #gchar
         */
        dont_filter_uri(uri: string): void;
        /**
         * Returns a path pointing to the currently selected icon file.
         * @returns a #gchar or NULL.
         */
        get_icon_path(): string;
        /**
         * Removes a file or a directory (as well as its children) from the tree.
         * NOTE: some files cannot be removed like files from an imported session.
         * @param treepath a #GtkTreePath
         * @returns a #gboolean. TRUE if the operation was successful, FALSE otherwise
         */
        remove(treepath: Gtk.TreePath): boolean;
        /**
         * Renames the file in the tree pointed by `treepath`.
         * @param newname a #gchar
         * @param treepath a #GtkTreePath
         * @returns a #gboolean. TRUE if the operation was successful, FALSE otherwise
         */
        rename(newname: string, treepath: Gtk.TreePath): boolean;
        /**
         * Completely empties `track` and unloads any currently loaded session
         * @returns a #gboolean. TRUE if the operation was successful, FALSE otherwise
         */
        reset(): boolean;
        /**
         * Removes a file from the filtered file list (see brasero_track_data_cfg_get_filtered_model ())
         * and re-adds it wherever it should be in the tree.
         * `treepath` is a #GtkTreePath associated with the #GtkTreeModel which holds the
         * filtered files not the main tree.
         * @param treepath a #GtkTreePath
         */
        restore(treepath: Gtk.TreePath): void;
        /**
         * Sets the current icon.
         * @param icon_path a #gchar
         * @returns a #gboolean. TRUE if the operation was successful, FALSE otherwise
         */
        set_icon(icon_path: string): boolean;
        /**
         * Creates a new #BraseroTrackData (stored in `new_track)` from the files contained in `track`. The sum of their sizes
         * does not exceed `sectors`. This allows to burn a tree on multiple discs. This function can be
         * called repeatedly; in this case if some files were left out after the previous calls, the newly created BraseroTrackData
         * is created with all or part of the remaining files.
         * @param sectors a #goffset
         * @param new_track a #BraseroTrackData
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new #BraseroTrackDataCfg was created. BRASERO_BURN_ERR otherwise.
         */
        span(sectors: number, new_track: TrackData): BurnResult;
        /**
         * Checks whether some files were not included during calls to brasero_track_data_cfg_span ().
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new #BraseroTrackDataCfg was created. BRASERO_BURN_ERR otherwise.
         */
        span_again(): BurnResult;
        /**
         * Returns the maximum required space (in sectors)
         * among all the possible spanned batches.
         * This means that when burningto a media
         * it will also be the minimum required
         * space to burn all the contents in several
         * batches.
         * @returns a #goffset.
         */
        span_max_space(): number;
        /**
         * Checks if a new #BraseroTrackData can be created from the files remaining in the tree
         * after calls to brasero_track_data_cfg_span ().
         * @param sectors a #goffset
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new #BraseroTrackDataCfg was created. BRASERO_BURN_ERR otherwise.
         */
        span_possible(sectors: number): BurnResult;
        /**
         * Resets the list of files that were included after calls to brasero_track_data_cfg_span ().
         */
        span_stop(): void;
        /**
         * Unload the contents of the last session of the currently loaded medium.
         * See brasero_track_data_cfg_load_medium ().
         */
        unload_current_medium(): void;

        // Inherited methods
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
        set_sort_column_id(sort_column_id: number, order: Gtk.SortType | null): void;
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

    module TrackDisc {
        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    class TrackDisc extends Track {
        static $gtype: GObject.GType<TrackDisc>;

        // Constructors

        constructor(properties?: Partial<TrackDisc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackDisc;

        // Methods

        /**
         * Gets the track number which will be used
         * to copy only one specific session on a multisession disc
         * @returns a #guint. 0 if none is set, any other number otherwise.
         */
        get_track_num(): number;
        /**
         * Sets a track number which can be used
         * to copy only one specific session on a multisession disc
         * @param num a #guint
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_track_num(num: number): BurnResult;
    }

    module TrackImage {
        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    class TrackImage extends Track {
        static $gtype: GObject.GType<TrackImage>;

        // Constructors

        constructor(properties?: Partial<TrackImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackImage;

        // Virtual methods

        /**
         * Sets the image size (in sectors).
         * @param blocks a #goffset
         */
        vfunc_set_block_num(blocks: number): BurnResult;
        /**
         * Sets the image source path (and its toc if need be)
         * as well as its format.
         * @param image a #gchar or NULL
         * @param toc a #gchar or NULL
         * @param format a #BraseroImageFormat
         */
        vfunc_set_source(image: string, toc: string, format: ImageFormat): BurnResult;

        // Methods

        /**
         * This function returns the format of the
         * source image.
         * @returns a #BraseroImageFormat
         */
        get_format(): ImageFormat;
        /**
         * This function returns the path or the URI (if `uri` is TRUE) of the
         * source image file.
         * @param uri a #gboolean
         * @returns a #gchar
         */
        get_source(uri: boolean): string;
        /**
         * This function returns the path or the URI (if `uri` is TRUE) of the
         * source toc file.
         * @param uri a #gboolean
         * @returns a #gchar
         */
        get_toc_source(uri: boolean): string;
        /**
         * This function returns whether the data bytes need swapping. Some .bin files
         * associated with .cue files are little endian for audio whereas they should
         * be big endian.
         * @returns a #gboolean
         */
        need_byte_swap(): boolean;
        /**
         * Sets the image size (in sectors).
         * @param blocks a #goffset
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        set_block_num(blocks: number): BurnResult;
        /**
         * Sets the image source path (and its toc if need be)
         * as well as its format.
         * @param image a #gchar or NULL
         * @param toc a #gchar or NULL
         * @param format a #BraseroImageFormat
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        set_source(image: string, toc: string, format: ImageFormat | null): BurnResult;
    }

    module TrackImageCfg {
        // Constructor properties interface

        interface ConstructorProps extends TrackImage.ConstructorProps {}
    }

    class TrackImageCfg extends TrackImage {
        static $gtype: GObject.GType<TrackImageCfg>;

        // Constructors

        constructor(properties?: Partial<TrackImageCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackImageCfg;

        // Methods

        /**
         * This function allows to prevents the identification of the format of the image.
         * It does not cancel size retrieval.
         * If `format` is BRASERO_IMAGE_FORMAT_NONE then the format of the image
         * will be retrieved.
         * @param format a #BraseroImageFormat
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        force_format(format: ImageFormat | null): BurnResult;
        /**
         * This function returns the #BraseroImageFormat that was set for the image.
         * See brasero_track_image_cfg_force_format ().
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        get_forced_format(): ImageFormat;
        /**
         * Sets the image uri or path (absolute or relative). `track` will then identify its format and retrieve its size.
         * @param uri a #gchar
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        set_source(uri: string): BurnResult;
    }

    module TrackStream {
        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    class TrackStream extends Track {
        static $gtype: GObject.GType<TrackStream>;

        // Constructors

        constructor(properties?: Partial<TrackStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackStream;

        // Virtual methods

        /**
         * Sets the boundaries of the stream (where it starts, ends in the file;
         * how long is the gap with the next track) in nano seconds.
         * @param start a #gint64 or -1 to ignore
         * @param end a #gint64 or -1 to ignore
         * @param gap a #gint64 or -1 to ignore
         */
        vfunc_set_boundaries(start: number, end: number, gap: number): BurnResult;
        /**
         * Sets the format of the stream.
         * @param format a #BraseroStreamFormat
         */
        vfunc_set_format(format: StreamFormat): BurnResult;
        /**
         * Sets the stream (song or video) uri.
         *
         * Note: it resets the end point of the track to 0 but keeps start point and gap
         * unchanged.
         * @param uri a #gchar
         */
        vfunc_set_source(uri: string): BurnResult;

        // Methods

        /**
         * This function returns end time in the stream (in nano seconds).
         * @returns a #guint64.
         */
        get_end(): number;
        /**
         * This function returns the format of the stream.
         * @returns a #BraseroStreamFormat.
         */
        get_format(): StreamFormat;
        /**
         * This function returns length of the gap (in nano seconds).
         * @returns a #guint64.
         */
        get_gap(): number;
        /**
         * This function returns the length of the stream (in nano seconds)
         * taking into account the start and end time as well as the length
         * of the gap. It stores it in `length`.
         * @param length a #guint64
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if @length was set.
         */
        get_length(length: number): BurnResult;
        /**
         * This function returns the path or the URI (if `uri` is TRUE)
         * of the stream (song or video file).
         *
         * Note: this function resets any length previously set to 0.
         * @param uri a #gboolean
         * @returns a #gchar.
         */
        get_source(uri: boolean): string;
        /**
         * This function returns start time in the stream (in nano seconds).
         * @returns a #guint64.
         */
        get_start(): number;
        /**
         * Sets the boundaries of the stream (where it starts, ends in the file;
         * how long is the gap with the next track) in nano seconds.
         * @param start a #gint64 or -1 to ignore
         * @param end a #gint64 or -1 to ignore
         * @param gap a #gint64 or -1 to ignore
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        set_boundaries(start: number, end: number, gap: number): BurnResult;
        /**
         * Sets the format of the stream.
         * @param format a #BraseroStreamFormat
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        set_format(format: StreamFormat | null): BurnResult;
        /**
         * Sets the stream (song or video) uri.
         *
         * Note: it resets the end point of the track to 0 but keeps start point and gap
         * unchanged.
         * @param uri a #gchar
         * @returns a #BraseroBurnResult. BRASERO_BURN_OK if it is successful.
         */
        set_source(uri: string): BurnResult;
    }

    module TrackStreamCfg {
        // Constructor properties interface

        interface ConstructorProps extends TrackStream.ConstructorProps {}
    }

    class TrackStreamCfg extends TrackStream {
        static $gtype: GObject.GType<TrackStreamCfg>;

        // Constructors

        constructor(properties?: Partial<TrackStreamCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackStreamCfg;
    }

    type BurnClass = typeof Burn;
    type BurnDialogClass = typeof BurnDialog;
    type BurnOptionsClass = typeof BurnOptions;
    type BurnSessionClass = typeof BurnSession;
    /**
     * A pair of strings describing:
     * `uri` the actual current location of the file
     * `path` the path of the file on the future ISO9660/UDF/... filesystem
     */
    class GraftPt {
        static $gtype: GObject.GType<GraftPt>;

        // Fields

        uri: string;
        path: string;

        // Constructors

        constructor(
            properties?: Partial<{
                uri: string;
                path: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type SessionCfgClass = typeof SessionCfg;
    type SessionSpanClass = typeof SessionSpan;
    type StatusClass = typeof Status;
    type SumDialogClass = typeof SumDialog;
    type ToolDialogClass = typeof ToolDialog;
    type TrackClass = typeof Track;
    type TrackDataCfgClass = typeof TrackDataCfg;
    type TrackDataClass = typeof TrackData;
    type TrackDiscClass = typeof TrackDisc;
    type TrackImageCfgClass = typeof TrackImageCfg;
    type TrackImageClass = typeof TrackImage;
    type TrackStreamCfgClass = typeof TrackStreamCfg;
    type TrackStreamClass = typeof TrackStream;
    abstract class TrackType {
        static $gtype: GObject.GType<TrackType>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Returns TRUE if `type_A` and `type_B` represents
         * the same type and subtype.
         * @param type_B a #BraseroTrackType.
         * @returns a #gboolean
         */
        equal(type_B: TrackType): boolean;
        /**
         * Frees #BraseroTrackType structure.
         */
        free(): void;
        /**
         * Returns the parameters for the image generation
         * when brasero_track_type_get_has_data () returned
         * TRUE.
         * @returns a #BraseroImageFS
         */
        get_data_fs(): ImageFS;
        /**
         * Returns TRUE if DATA type (see brasero_track_data_new ()) was set.
         * @returns a #gboolean
         */
        get_has_data(): boolean;
        /**
         * Returns TRUE if IMAGE type (see brasero_track_image_new ()) was set.
         * @returns a #gboolean
         */
        get_has_image(): boolean;
        /**
         * Returns TRUE if MEDIUM type (see brasero_track_disc_new ()) was set.
         * @returns a #gboolean
         */
        get_has_medium(): boolean;
        /**
         * This function returns %TRUE if IMAGE type (see brasero_track_stream_new ()) was set.
         * @returns a #gboolean
         */
        get_has_stream(): boolean;
        /**
         * Returns the format of an image when
         * brasero_track_type_get_has_image () returned
         * TRUE.
         * @returns a #BraseroImageFormat
         */
        get_image_format(): ImageFormat;
        /**
         * Returns the format for a stream (song or video)
         * when brasero_track_type_get_has_stream () returned
         * TRUE.
         * @returns a #BraseroStreamFormat
         */
        get_stream_format(): StreamFormat;
        /**
         * Returns TRUE if no type was set.
         * @returns a #gboolean
         */
        is_empty(): boolean;
        /**
         * Sets the #BraseroImageFS. Must be called
         * after brasero_track_type_set_has_data ().
         * @param fs_type a #BraseroImageFS
         */
        set_data_fs(fs_type: ImageFS | null): void;
        /**
         * Set DATA type for `type`.
         */
        set_has_data(): void;
        /**
         * Set IMAGE type for `type`.
         */
        set_has_image(): void;
        /**
         * Set MEDIUM type for `type`.
         */
        set_has_medium(): void;
        /**
         * Set STREAM type for `type`
         */
        set_has_stream(): void;
        /**
         * Sets the #BraseroImageFormat. Must be called
         * after brasero_track_type_set_has_image ().
         * @param format a #BraseroImageFormat
         */
        set_image_format(format: ImageFormat | null): void;
        /**
         * Sets the #BraseroStreamFormat. Must be called
         * after brasero_track_type_set_has_stream ().
         * @param format a #BraseroImageFormat
         */
        set_stream_format(format: StreamFormat | null): void;
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

export default BraseroBurn;

// END
