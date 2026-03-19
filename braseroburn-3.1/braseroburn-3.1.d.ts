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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace BraseroBurn {
    /**
     * BraseroBurn-3.1
     */

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum StatusType {
        OK,
        ERROR,
        QUESTION,
        INFORMATION,
    }

    /**
     * @gir-type Enum
     */
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
     * @param graft a {@link BraseroBurn.GraftPt}
     */
    function graft_point_free(graft: GraftPt): void;
    /**
     * @gir-type Callback
     */
    interface ForeachPluginErrorCb {
        (type: PluginErrorType, detail: string): BurnResult;
    }
    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
    enum ImageFormat {
        NONE,
        BIN,
        CUE,
        CLONE,
        CDRDAO,
        ANY,
    }

    /**
     * @gir-type Flags
     */
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

    namespace Burn {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'action-changed': (arg0: number) => void;
            /**
             * @signal
             */
            'blank-failure': () => number;
            /**
             * @signal
             */
            'disable-joliet': () => number;
            /**
             * @signal
             */
            'dummy-success': () => number;
            /**
             * @signal
             */
            'eject-failure': (arg0: unknown) => number;
            /**
             * @signal
             */
            'insert-media': (arg0: unknown, arg1: number, arg2: number) => number;
            /**
             * @signal
             */
            'install-missing': (arg0: number, arg1: string) => number;
            /**
             * @signal
             */
            'location-request': (arg0: any | null, arg1: number) => number;
            /**
             * @signal
             */
            'progress-changed': (arg0: number, arg1: number, arg2: number) => void;
            /**
             * @signal
             */
            'warn-audio-to-appendable': () => number;
            /**
             * @signal
             */
            'warn-data-loss': () => number;
            /**
             * @signal
             */
            'warn-previous-session-loss': () => number;
            /**
             * @signal
             */
            'warn-rewritable': () => number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Burn extends GObject.Object {
        static $gtype: GObject.GType<Burn>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Burn.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Burn.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Burn;

        // Signals

        /** @signal */
        connect<K extends keyof Burn.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Burn.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Burn.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Burn.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Burn.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Burn.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static library_can_checksum(): boolean;
        static library_get_option_group(): GLib.OptionGroup;
        /**
         * @param type
         */
        static library_input_supported(type: TrackType): BurnResult;
        /**
         * @param argc
         * @param argv
         */
        static library_start(argc: number, argv: string): boolean;
        static library_stop(): void;
        static quark(): GLib.Quark;

        // Virtual methods

        /**
         * @param action
         * @virtual
         */
        vfunc_action_changed(action: BurnAction): void;
        /**
         * @virtual
         */
        vfunc_ask_disable_joliet(): BurnResult;
        /**
         * @virtual
         */
        vfunc_blank_failure(): BurnResult;
        /**
         * @virtual
         */
        vfunc_dummy_success(): BurnResult;
        /**
         * @param error
         * @param detail
         * @virtual
         */
        vfunc_install_missing(error: PluginErrorType, detail: string): BurnResult;
        /**
         * @param error
         * @param is_temporary
         * @virtual
         */
        vfunc_location_request(error: GLib.Error, is_temporary: boolean): BurnResult;
        /**
         * @param overall_progress
         * @param action_progress
         * @param time_remaining
         * @virtual
         */
        vfunc_progress_changed(overall_progress: number, action_progress: number, time_remaining: number): void;
        /**
         * @virtual
         */
        vfunc_warn_audio_to_appendable(): BurnResult;
        /**
         * @virtual
         */
        vfunc_warn_data_loss(): BurnResult;
        /**
         * @virtual
         */
        vfunc_warn_previous_session_loss(): BurnResult;
        /**
         * @virtual
         */
        vfunc_warn_rewritable(): BurnResult;

        // Methods

        /**
         * Blanks a medium according to the parameters
         * set in `session`. The medium must be inserted in the `BraseroDrive`
         * set with brasero_burn_session_set_burner ().
         * @param session a {@link BraseroBurn.BurnSession}
         * @returns a {@link BraseroBurn.BurnResult}. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        blank(session: BurnSession): BurnResult;
        /**
         * Cancels any ongoing operation. If `protect` is TRUE then
         * cancellation will not take place for a "critical" task, a task whose interruption
         * could damage the medium or the drive.
         * @param protect a `gboolean`
         * @returns a {@link BraseroBurn.BurnResult}. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        cancel(protect: boolean): BurnResult;
        /**
         * Checks the integrity of a medium according to the parameters
         * set in `session`. The medium must be inserted in the `BraseroDrive`
         * set as the source of a {@link BraseroBurn.TrackDisc} track inserted in `session`.
         * @param session a {@link BraseroBurn.BurnSession}
         * @returns a {@link BraseroBurn.BurnResult}. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        check(session: BurnSession): BurnResult;
        /**
         * This function returns the current action (in `string`)  of
         * an ongoing operation performed by `burn`.
         * `action` is used to set a default string in case there was
         * no string set by the backend to describe the current
         * operation.
         * @param action a {@link BraseroBurn.BurnAction}
         * @param string a `gchar` **
         */
        get_action_string(action: BurnAction | null, string: string): void;
        /**
         * Burns or creates a disc image according to the parameters
         * set in `session`.
         * @param session a {@link BraseroBurn.BurnSession}
         * @returns a {@link BraseroBurn.BurnResult}. The result of the operation. BRASERO_BURN_OK if it was successful.
         */
        record(session: BurnSession): BurnResult;
    }

    namespace BurnDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BurnDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<BurnDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BurnDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BurnDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BurnDialog;

        // Signals

        /** @signal */
        connect<K extends keyof BurnDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BurnDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BurnDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BurnDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BurnDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BurnDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Cancel the ongoing operation run by `dialog`; if `force_cancellation` is FALSE then it can
         * happen that the operation won't be cancelled if there is a risk to make a disc unusable.
         * @param force_cancellation a `gboolean`
         * @returns a `gboolean`. TRUE if it was sucessfully cancelled, FALSE otherwise.
         */
        cancel(force_cancellation: boolean): boolean;
        /**
         * Start burning the contents of `session`.
         * @param session a {@link BraseroBurn.BurnSession}
         * @returns a `gboolean`. TRUE if the operation was successfully carried out, FALSE otherwise.
         */
        run(session: BurnSession): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.Dialog.run
        run(...args: never[]): any;
        /**
         * Start burning the contents of `session`. Once a disc is burnt, a dialog
         * will be shown to the user and wait for a new insertion before starting to burn
         * again.
         * @param session a {@link BraseroBurn.BurnSession}
         * @returns a `gboolean`. TRUE if the operation was successfully carried out, FALSE otherwise.
         */
        run_multi(session: BurnSession): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace BurnOptions {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::session': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            session: BurnSession;
        }
    }

    /**
     * @gir-type Class
     */
    class BurnOptions extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<BurnOptions>;

        // Properties

        get session(): BurnSession;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BurnOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BurnOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: SessionCfg): BurnOptions;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof BurnOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BurnOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BurnOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BurnOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BurnOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BurnOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds some new options to be displayed in the dialog.
         * @param options a {@link Gtk.Widget}
         */
        add_options(options: Gtk.Widget): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace BurnSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal gets emitted when the medium to burn to changed.
             * @signal
             */
            'output-changed': (arg0: unknown) => void;
            /**
             * This signal gets emitted when a tag changed for `session` (whether it
             * was removed, added, or it changed).
             * @signal
             */
            'tag-changed': (arg0: string) => void;
            /**
             * This signal gets emitted when a track is added to `session`.
             * @signal
             */
            'track-added': (arg0: Track) => void;
            /**
             * This signal gets emitted when the contents of a track changed.
             * @signal
             */
            'track-changed': (arg0: Track) => void;
            /**
             * This signal gets emitted when a track is removed from `session`.
             * @signal
             */
            'track-removed': (arg0: Track, arg1: number) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::speed': (pspec: GObject.ParamSpec) => void;
            'notify::tmpdir': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
            speed: number;
            tmpdir: string;
        }
    }

    /**
     * @gir-type Class
     */
    class BurnSession extends GObject.Object {
        static $gtype: GObject.GType<BurnSession>;

        // Properties

        get flags(): number;
        set flags(val: number);
        get speed(): number;
        set speed(val: number);
        get tmpdir(): string;
        set tmpdir(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BurnSession.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BurnSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BurnSession;

        // Signals

        /** @signal */
        connect<K extends keyof BurnSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BurnSession.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BurnSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BurnSession.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BurnSession.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BurnSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * When the contents of `session` should be written to a
         * file then this function returns the format of the image to write.
         *
         * NOTE: before using this function a `BraseroDrive` should have been
         * set with brasero_burn_session_set_burner () and it should be the
         * fake drive (see brasero_drive_is_fake ()).
         * @virtual
         */
        vfunc_get_output_format(): ImageFormat;
        /**
         * @param image
         * @param toc
         * @virtual
         */
        vfunc_get_output_path(image: string, toc: string): BurnResult;
        /**
         * @param format
         * @param image
         * @param toc
         * @virtual
         */
        vfunc_set_output_image(format: ImageFormat, image: string, toc: string): BurnResult;
        /**
         * @param tag
         * @virtual
         */
        vfunc_tag_changed(tag: string): void;
        /**
         * @param track
         * @virtual
         */
        vfunc_track_added(track: Track): void;
        /**
         * @param track
         * @virtual
         */
        vfunc_track_changed(track: Track): void;
        /**
         * @param track
         * @param former_position
         * @virtual
         */
        vfunc_track_removed(track: Track, former_position: number): void;

        // Methods

        /**
         * Merges the current flags set in `session` with `flags`.
         * @param flags a {@link BraseroBurn.BurnFlag}
         */
        add_flag(flags: BurnFlag | null): void;
        /**
         * Inserts a new track after `sibling` or appended if `sibling` is NULL. If `track` is NULL then all tracks
         * already in `session` will be removed.
         * NOTE: if there are already {@link BraseroBurn.Track} objects inserted in the session and if they are not
         * of the same type as `new_track` then they will be removed before the insertion of `new_track`.
         * @param new_track a {@link BraseroBurn.Track} or NULL.
         * @param sibling a {@link BraseroBurn.Track} or NULL.
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the track was successfully inserted or BRASERO_BURN_ERR otherwise.
         */
        add_track(new_track?: Track | null, sibling?: Track | null): BurnResult;
        can_blank(): BurnResult;
        /**
         * @param check_flags
         */
        can_burn(check_flags: boolean): BurnResult;
        /**
         * @param supported
         * @param compulsory
         */
        get_blank_flags(supported: BurnFlag | null, compulsory: BurnFlag | null): BurnResult;
        /**
         * @param supported
         * @param compulsory
         */
        get_burn_flags(supported: BurnFlag | null, compulsory: BurnFlag | null): BurnResult;
        get_default_output_format(): ImageFormat;
        /**
         * Returns the current flags set for `session`.
         * @returns a {@link BraseroBurn.BurnFlag}.
         */
        get_flags(): BurnFlag;
        /**
         * Sets `type` to reflect the type of data contained in `session`
         * @param type a {@link BraseroBurn.TrackType} or NULL
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful
         */
        get_input_type(type: TrackType): BurnResult;
        /**
         * Returns the label (a string) set for `session`.
         * @returns a `gchar` or NULL. Do not free after use.
         */
        get_label(): string;
        /**
         * When the contents of `session` should be written to a
         * file then this function returns the image path (and if
         * necessary a toc path).
         * `image` and `toc` should be freed if not used anymore.
         *
         * NOTE: before using this function a `BraseroDrive` should have been
         * set with brasero_burn_session_set_burner () and it should be the
         * fake drive (see brasero_drive_is_fake ()).
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful; BRASERO_BURN_ERR otherwise.
         */
        get_output(): [BurnResult, string, string];
        /**
         * When the contents of `session` should be written to a
         * file then this function returns the format of the image to write.
         *
         * NOTE: before using this function a `BraseroDrive` should have been
         * set with brasero_burn_session_set_burner () and it should be the
         * fake drive (see brasero_drive_is_fake ()).
         * @returns a {@link BraseroBurn.ImageFormat}. The format of the image to be written.
         */
        get_output_format(): ImageFormat;
        /**
         * This function returns the type of output set for the session.
         * @param output a {@link BraseroBurn.TrackType} or NULL
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful; BRASERO_BURN_NOT_READY if no setting has been set; BRASERO_BURN_ERR otherwise.
         */
        get_output_type(output: TrackType): BurnResult;
        /**
         * @param formats
         */
        get_possible_output_formats(formats: ImageFormat | null): number;
        /**
         * Returns the speed at which the medium should be burnt.
         * NOTE: before using this function a `BraseroDrive` should have been
         * set with brasero_burn_session_set_burner ().
         * @returns a `guint64` or 0.
         */
        get_rate(): number;
        /**
         * Returns the size of the data contained by `session` in bytes or in sectors
         * @param blocks a `goffset` or NULL
         * @param bytes a `goffset` or NULL
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if `track` needs more time for processing the size BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_size(blocks: number, bytes: number): BurnResult;
        /**
         * Sets `status` to reflect whether `session` is ready to be used.
         * @param status a `BraseroTrackStatus`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if `track` needs more time for processing BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_status(status: Status): BurnResult;
        /**
         * For the following functions:
         * brasero_burn_session_can_burn ()
         * brasero_burn_session_input_supported ()
         * brasero_burn_session_output_supported ()
         * brasero_burn_session_can_blank ()
         * this function gets whether the checks will
         * ignore the plugins with errors (return `true`).
         * @returns `gboolean`
         */
        get_strict_support(): boolean;
        /**
         * Returns the path of the directory in which to write temporary directories and files.
         * @returns a `gchar`. The path to the temporary directory.
         */
        get_tmpdir(): string;
        /**
         * Returns the list of {@link BraseroBurn.Track} added to `session`.
         * @returns a {@link GLib.SList} or {@link BraseroBurn.Track} object. Do not unref the objects in the list nor destroy the list.
         */
        get_tracks(): Track[];
        /**
         * @param input
         * @param check_flags
         */
        input_supported(input: TrackType, check_flags: boolean): BurnResult;
        /**
         * Moves `track` after `sibling`; if `sibling` is NULL then it is appended.
         * @param track a {@link BraseroBurn.Track}.
         * @param sibling a {@link BraseroBurn.Track} or NULL.
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the track was successfully moved or BRASERO_BURN_ERR otherwise.
         */
        move_track(track: Track, sibling?: Track | null): BurnResult;
        /**
         * @param output
         */
        output_supported(output: TrackType): BurnResult;
        /**
         * Removes `flags` from the current flags set for `session`.
         * @param flags a {@link BraseroBurn.BurnFlag}
         */
        remove_flag(flags: BurnFlag | null): void;
        /**
         * Removes `track` from `session`.
         * @param track a {@link BraseroBurn.Track}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the track was successfully removed or BRASERO_BURN_ERR otherwise.
         */
        remove_track(track: Track): BurnResult;
        /**
         * Replaces the current flags set in `session` with `flags`.
         * @param flags a {@link BraseroBurn.BurnFlag}
         */
        set_flags(flags: BurnFlag | null): void;
        /**
         * When the contents of `session` should be written to a
         * file, this function sets format of the image that will be
         * created.
         *
         * NOTE: after a call to this function the `BraseroDrive` for
         * `session` will be the fake `BraseroDrive`.
         *
         * Since 2.29.0
         * @param format a {@link BraseroBurn.ImageFormat}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successfully set; BRASERO_BURN_ERR otherwise.
         */
        set_image_output_format(format: ImageFormat | null): BurnResult;
        /**
         * When the contents of `session` should be written to a
         * file, this function sets the different parameters of this
         * image like its path (and the one of the associated toc if
         * necessary) and its format.
         *
         * NOTE: after a call to this function the `BraseroDrive` for
         * `session` will be the fake `BraseroDrive`.
         * @param format a {@link BraseroBurn.ImageFormat}.
         * @param image a `gchar` or NULL.
         * @param toc a `gchar` or NULL.
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successfully set; BRASERO_BURN_ERR otherwise.
         */
        set_image_output_full(format: ImageFormat | null, image?: string | null, toc?: string | null): BurnResult;
        /**
         * Sets the label for `session`.
         * @param label a `gchar` or `null`
         */
        set_label(label?: string | null): void;
        /**
         * Sets the speed at which the medium should be burnt.
         * NOTE: before using this function a `BraseroDrive` should have been
         * set with brasero_burn_session_set_burner ().
         * @param rate a `guint64`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful; BRASERO_BURN_ERR otherwise.
         */
        set_rate(rate: number): BurnResult;
        /**
         * For the following functions:
         * brasero_burn_session_supported ()
         * brasero_burn_session_input_supported ()
         * brasero_burn_session_output_supported ()
         * brasero_burn_session_can_blank ()
         * this function sets whether these functions will
         * ignore the plugins with errors (`true`).
         * @param strict_check
         */
        set_strict_support(strict_check: boolean): void;
        /**
         * Sets the path of the directory in which to write temporary directories and files.
         * If set to NULL then the result of g_get_tmp_dir () will be used.
         * @param path a `gchar` or NULL
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successfully set; BRASERO_BURN_ERR otherwise.
         */
        set_tmpdir(path: string): BurnResult;
        /**
         * Associates a new `tag` with `session`. This can be used
         * to pass arbitrary information for plugins, like parameters
         * for video discs, ...
         * NOTE: the {@link BraseroBurn.BurnSession} object takes ownership of `value`.
         * See brasero-tags.h for a list of knowns tags.
         * @param tag a `gchar` *
         * @param value a {@link GObject.Value} *
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * Associates a new `tag` with `session`. This can be used
         * to pass arbitrary information for plugins, like parameters
         * for video discs, ...
         * See brasero-tags.h for a list of knowns tags.
         *
         * Since 2.29.0
         * @param tag a `gchar` *
         * @param value a `gint`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add_int(tag: string, value: number): BurnResult;
        /**
         * Retrieves a value associated with `session` through
         * brasero_session_tag_add () and stores it in `value`. Do
         * not destroy `value` afterwards as it is not a copy.
         * @param tag a `gchar` *
         * @param value a {@link GObject.Value}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the retrieval was successful BRASERO_BURN_ERR otherwise
         */
        tag_lookup(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * Retrieves an int value associated with `session` through
         * brasero_session_tag_add () and returns it.
         *
         * Since 2.29.0
         * @param tag a `gchar`
         * @returns a `gint`.
         */
        tag_lookup_int(tag: string): number;
        /**
         * Removes a value associated with `session` through
         * brasero_session_tag_add ().
         * @param tag a `gchar` *
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the retrieval was successful BRASERO_BURN_ERR otherwise
         */
        tag_remove(tag: string): BurnResult;
    }

    namespace SessionCfg {
        // Signal signatures
        interface SignalSignatures extends SessionSpan.SignalSignatures {
            /**
             * @signal
             */
            'is-valid': () => void;
            /**
             * @signal
             */
            'wrong-extension': () => boolean | void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::speed': (pspec: GObject.ParamSpec) => void;
            'notify::tmpdir': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SessionSpan.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SessionCfg extends SessionSpan {
        static $gtype: GObject.GType<SessionCfg>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SessionCfg.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SessionCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SessionCfg;

        // Signals

        /** @signal */
        connect<K extends keyof SessionCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionCfg.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SessionCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionCfg.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SessionCfg.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SessionCfg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds all flags from `flags` that are supported.
         * @param flags a {@link BraseroBurn.BurnFlag}
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
         * @returns a {@link BraseroBurn.SessionError}.
         */
        get_error(): SessionError;
        /**
         * This function returns whether the path returned
         * by brasero_burn_session_get_output () is an
         * automatically created one.
         * @returns a `gboolean`. TRUE if the path(s) creation is handled by `session`, FALSE if it was set.
         */
        has_default_output_path(): boolean;
        /**
         * Checks whether a particular flag is compulsory.
         * @param flag a {@link BraseroBurn.BurnFlag}
         * @returns a `gboolean`. TRUE if it is compulsory; FALSE otherwise.
         */
        is_compulsory(flag: BurnFlag | null): boolean;
        /**
         * Checks whether a particular flag is supported.
         * @param flag a {@link BraseroBurn.BurnFlag}
         * @returns a `gboolean`. TRUE if it is supported; FALSE otherwise.
         */
        is_supported(flag: BurnFlag | null): boolean;
        /**
         * Removes all flags that are not compulsory.
         * @param flags a {@link BraseroBurn.BurnFlag}
         */
        remove_flags(flags: BurnFlag | null): void;
    }

    namespace SessionSpan {
        // Signal signatures
        interface SignalSignatures extends BurnSession.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::speed': (pspec: GObject.ParamSpec) => void;
            'notify::tmpdir': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BurnSession.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SessionSpan extends BurnSession {
        static $gtype: GObject.GType<SessionSpan>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SessionSpan.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SessionSpan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SessionSpan;

        // Signals

        /** @signal */
        connect<K extends keyof SessionSpan.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionSpan.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SessionSpan.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionSpan.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SessionSpan.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SessionSpan.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks whether some data were not included during calls to brasero_session_span_next ().
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new {@link BraseroBurn.TrackDataCfg} was created. BRASERO_BURN_ERR otherwise.
         */
        again(): BurnResult;
        /**
         * Returns the maximum required space (in sectors)
         * among all the possible spanned batches.
         * This means that when burningto a media
         * it will also be the minimum required
         * space to burn all the contents in several
         * batches.
         * @returns a `goffset`.
         */
        get_max_space(): number;
        /**
         * Sets the next batch of data to be burnt onto the medium inserted in the `BraseroDrive`
         * set for `session` (see brasero_burn_session_set_burner ()). Its free space or it capacity
         * will be used as the maximum amount of data to be burnt.
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if successful.
         */
        next(): BurnResult;
        /**
         * Checks if a new {@link BraseroBurn.TrackData} can be created from the files remaining in the tree
         * after calls to brasero_session_span_next (). The maximum size of the data will be the one
         * of the medium inserted in the `BraseroDrive` set for `session` (see brasero_burn_session_set_burner ()).
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new {@link BraseroBurn.TrackDataCfg} was created. BRASERO_BURN_ERR otherwise.
         */
        possible(): BurnResult;
        /**
         * Get the object ready for spanning a {@link BraseroBurn.BurnSession} object. This function
         * must be called before brasero_session_span_next ().
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if successful.
         */
        start(): BurnResult;
        /**
         * Ends and cleans a spanning operation started with brasero_session_span_start ().
         */
        stop(): void;
    }

    namespace Status {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Status extends GObject.Object {
        static $gtype: GObject.GType<Status>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Status.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Status.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Status;

        // Signals

        /** @signal */
        connect<K extends keyof Status.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Status.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Status.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Status.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Status.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Status.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * If brasero_status_get_result () returned BRASERO_BURN_NOT_READY,
         * this function returns a string describing the operation currently performed.
         * Free the string when it is not needed anymore.
         * @returns a `gchar`.
         */
        get_current_action(): string;
        /**
         * If brasero_status_get_result () returned BRASERO_BURN_ERR,
         * this function returns the error.
         * @returns a {@link GLib.Error}
         */
        get_error(): GLib.Error;
        /**
         * If brasero_status_get_result () returned BRASERO_BURN_NOT_READY,
         * this function returns the progress regarding the operation completion.
         * @returns a `gdouble`
         */
        get_progress(): number;
        /**
         * After an object (see brasero_burn_track_get_status ()) has
         * been requested its status, this function returns that status.
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the object is ready. BRASERO_BURN_NOT_READY if some time should be given to the object before it is ready. BRASERO_BURN_ERR if there is an error.
         */
        get_result(): BurnResult;
        /**
         * Sets the status for a request to BRASERO_BURN_OK.
         */
        set_completed(): void;
        /**
         * Sets the status for a request to BRASERO_BURN_ERR.
         * @param error a {@link GLib.Error} or NULL.
         */
        set_error(error: GLib.Error): void;
        /**
         * Sets the status for a request to BRASERO_BURN_NOT_READY.
         * Allows to set a string describing the operation currently performed
         * as well as the progress regarding the operation completion.
         * @param progress a `gdouble` or -1.0.
         * @param current_action a `gchar` or NULL.
         */
        set_not_ready(progress: number, current_action: string): void;
        /**
         * Sets the status for a request to BRASERO_BURN_RUNNING.
         * Allows to set a string describing the operation currently performed
         * as well as the progress regarding the operation completion.
         * @param progress a `gdouble` or -1.0.
         * @param current_action a `gchar` or NULL.
         */
        set_running(progress: number, current_action: string): void;
    }

    namespace SumDialog {
        // Signal signatures
        interface SignalSignatures extends ToolDialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                ToolDialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SumDialog extends ToolDialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SumDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SumDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SumDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SumDialog;

        // Signals

        /** @signal */
        connect<K extends keyof SumDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SumDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SumDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SumDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SumDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SumDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace ToolDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ToolDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ToolDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ToolDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ToolDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ToolDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToolDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ToolDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToolDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ToolDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ToolDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Cancels any ongoing operation.
         * @virtual
         */
        vfunc_cancel(): boolean;

        // Methods

        /**
         * Cancels any ongoing operation.
         * @returns a `gboolean`. TRUE when cancellation was successful. FALSE otherwise.
         */
        cancel(): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Track {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Track extends GObject.Object {
        static $gtype: GObject.GType<Track>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Track.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Track.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Track.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Track.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Track.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Track.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Track.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Track.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Used internally in {@link BraseroBurn.Track} implementations to
         * signal a {@link BraseroBurn.Track} object has changed.
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * Returns the size of the data contained by `track` in bytes or in sectors
         * @param blocks a `goffset` or NULL
         * @param block_size
         * @virtual
         */
        vfunc_get_size(blocks: number, block_size: number): BurnResult;
        /**
         * Sets `status` to reflect whether `track` is ready to be used
         * @param status a `BraseroTrackStatus`
         * @virtual
         */
        vfunc_get_status(status: Status): BurnResult;
        /**
         * @param type
         * @virtual
         */
        vfunc_get_type(type: TrackType): BurnResult;

        // Methods

        /**
         * Used internally in {@link BraseroBurn.Track} implementations to
         * signal a {@link BraseroBurn.Track} object has changed.
         */
        changed(): void;
        /**
         * Get the current checksum (as a string) for the track
         * @returns a `gchar` * (not to be freed) or NULL
         */
        get_checksum(): string;
        /**
         * Get the current checksum type for the track if any.
         * @returns a {@link BraseroBurn.ChecksumType}
         */
        get_checksum_type(): ChecksumType;
        /**
         * Returns the size of the data contained by `track` in bytes or in sectors
         * @param blocks a `goffset` or NULL
         * @param bytes a `goffset` or NULL
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if `track` needs more time for processing the size BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_size(blocks: number, bytes: number): BurnResult;
        /**
         * Sets `status` to reflect whether `track` is ready to be used
         * @param status a `BraseroTrackStatus`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful BRASERO_BURN_NOT_READY if `track` needs more time for processing BRASERO_BURN_ERR if something is wrong or if it is empty
         */
        get_status(status: Status): BurnResult;
        /**
         * Sets `type` to reflect the type of data contained in `track`
         * @param type a {@link BraseroBurn.TrackType} or NULL
         * @returns the {@link BraseroBurn.BurnResult} of the track
         */
        get_track_type(type: TrackType): BurnResult;
        /**
         * Sets a checksum for the track
         * @param type a {@link BraseroBurn.ChecksumType}
         * @param checksum a `gchar` * holding the checksum
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the checksum was previously empty or matches the new one BRASERO_BURN_ERR otherwise
         */
        set_checksum(type: ChecksumType | null, checksum: string): BurnResult;
        /**
         * Associates a new `tag` with a track. This can be used
         * to pass arbitrary information for plugins, like parameters
         * for video discs, ...
         * See brasero-tags.h for a list of knowns tags.
         * @param tag a `gchar` *
         * @param value a {@link GObject.Value}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * A wrapper around brasero_track_tag_add () to associate
         * a int value with `track`
         * See also brasero_track_tag_add ()
         * @param tag a `gchar` *
         * @param value a #int
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add_int(tag: string, value: number): BurnResult;
        /**
         * A wrapper around brasero_track_tag_add () to associate
         * a string with `track`
         * See also brasero_track_tag_add ()
         * @param tag a `gchar` *
         * @param string a `gchar` *
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        tag_add_string(tag: string, string: string): BurnResult;
        /**
         * Adds all tags of `dest` to `src` provided they do not
         * already exists.
         * @param src a {@link BraseroBurn.Track}
         */
        tag_copy_missing(src: Track): void;
        /**
         * Retrieves a value associated with `track` through
         * brasero_track_tag_add () and stores it in `value`. Do
         * not destroy `value` afterwards as it is not a copy
         * @param tag a `gchar` *
         * @param value a {@link GObject.Value} **
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if the retrieval was successful BRASERO_BURN_ERR otherwise
         */
        tag_lookup(tag: string, value: GObject.Value | any): BurnResult;
        /**
         * Retrieves a int value associated with `track`. This
         * is a wrapper around brasero_track_tag_lookup ().
         * @param tag a `gchar` *
         * @returns a #int; the value or 0 otherwise
         */
        tag_lookup_int(tag: string): number;
        /**
         * Retrieves a string value associated with `track`. This
         * is a wrapper around brasero_track_tag_lookup ().
         * @param tag a `gchar` *
         * @returns a `gchar` *. The value or NULL otherwise. Do not free the string as it is not a copy.
         */
        tag_lookup_string(tag: string): string;
    }

    namespace TrackData {
        // Signal signatures
        interface SignalSignatures extends Track.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackData extends Track {
        static $gtype: GObject.GType<TrackData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackData.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackData;

        // Signals

        /** @signal */
        connect<K extends keyof TrackData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Adds one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a {@link BraseroBurn.ImageFS}
         * @virtual
         */
        vfunc_add_fs(fstype: ImageFS): BurnResult;
        /**
         * @virtual
         */
        vfunc_get_file_num(): number;
        /**
         * Returns the parameters determining the file system type
         * and various other options to create an image.
         * @virtual
         */
        vfunc_get_fs(): ImageFS;
        /**
         * Returns a list of {@link BraseroBurn.GraftPt}.
         *
         * Do not free after usage as `track` retains ownership.
         * @virtual
         */
        vfunc_get_grafts(): GraftPt[] | null;
        /**
         * Removes one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a {@link BraseroBurn.ImageFS}
         * @virtual
         */
        vfunc_rm_fs(fstype: ImageFS): BurnResult;
        /**
         * Sets the lists of grafts points (`grafts`) and excluded
         * URIs (`unreadable`) to be used to create an image.
         *
         * Be careful `track` takes ownership of `grafts` and
         * `unreadable` which must not be freed afterwards.
         * @param grafts a {@link GLib.SList} of {@link BraseroBurn.GraftPt}.
         * @param unreadable a {@link GLib.SList} of URIS as strings or `null`.
         * @virtual
         */
        vfunc_set_source(grafts: GraftPt[], unreadable?: string[] | null): BurnResult;

        // Methods

        /**
         * Adds one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a {@link BraseroBurn.ImageFS}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        add_fs(fstype: ImageFS | null): BurnResult;
        /**
         * Returns a list of URIs which must not be included in
         * the image to be created.
         * Do not free the list or any of the URIs after
         * usage as `track` retains ownership.
         * @returns a {@link GLib.SList} of `gchar` * or `null` if no URI should be excluded.
         */
        get_excluded_list(): string[] | null;
        /**
         * Sets the number of files (not directories) in `file_num`.
         * @returns a {@link BraseroBurn.BurnResult}. `true` if `file_num` was set, `false` otherwise.
         */
        get_file_num(): [BurnResult, number];
        /**
         * Returns the parameters determining the file system type
         * and various other options to create an image.
         * @returns a {@link BraseroBurn.ImageFS}.
         */
        get_fs(): ImageFS;
        /**
         * Returns a list of {@link BraseroBurn.GraftPt}.
         *
         * Do not free after usage as `track` retains ownership.
         * @returns a {@link GLib.SList} of {@link BraseroBurn.GraftPt} or `null` if empty.
         */
        get_grafts(): GraftPt[] | null;
        /**
         * Removes one or more parameters determining the file system type
         * and various other options to create an image.
         * @param fstype a {@link BraseroBurn.ImageFS}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        rm_fs(fstype: ImageFS | null): BurnResult;
        /**
         * Sets the size of the image to be created (in sectors of 2048 bytes).
         * @param blocks a `goffset`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_data_blocks(blocks: number): BurnResult;
        /**
         * Sets the number of files (not directories) in `track`.
         * @param number a `guint64`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_file_num(number: number): BurnResult;
        /**
         * Sets the lists of grafts points (`grafts`) and excluded
         * URIs (`unreadable`) to be used to create an image.
         *
         * Be careful `track` takes ownership of `grafts` and
         * `unreadable` which must not be freed afterwards.
         * @param grafts a {@link GLib.SList} of {@link BraseroBurn.GraftPt}.
         * @param unreadable a {@link GLib.SList} of URIS as strings or `null`.
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
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
         * @param grafts_path a `gchar`.
         * @param excluded_path a `gchar`.
         * @param emptydir a `gchar`.
         * @param videodir a `gchar` or `null`.
         * @returns a {@link BraseroBurn.BurnResult}.
         */
        write_to_paths(
            grafts_path: string,
            excluded_path: string,
            emptydir: string,
            videodir?: string | null,
        ): BurnResult;
    }

    namespace TrackDataCfg {
        // Signal signatures
        interface SignalSignatures extends TrackData.SignalSignatures {
            /**
             * @signal
             */
            'deep-directory': (arg0: string) => boolean | void;
            /**
             * @signal
             */
            'icon-changed': () => void;
            /**
             * @signal
             */
            'image-uri': (arg0: string) => number;
            /**
             * @signal
             */
            'joliet-rename': () => void;
            /**
             * @signal
             */
            'name-collision': (arg0: string) => boolean | void;
            /**
             * @signal
             */
            'recursive-sym': (arg0: string) => void;
            /**
             * @signal
             */
            'session-available': (arg0: GObject.Object, arg1: boolean) => void;
            /**
             * @signal
             */
            'session-loaded': (arg0: GObject.Object, arg1: boolean) => void;
            /**
             * @signal
             */
            'source-loaded': (arg0: any | null) => void;
            /**
             * @signal
             */
            'source-loading': (arg0: number) => void;
            /**
             * @signal
             */
            'unknown-uri': (arg0: string) => void;
            /**
             * @signal
             */
            'unreadable-uri': (arg0: any | null, arg1: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                TrackData.ConstructorProps,
                Gtk.TreeDragDest.ConstructorProps,
                Gtk.TreeDragSource.ConstructorProps,
                Gtk.TreeModel.ConstructorProps,
                Gtk.TreeSortable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackDataCfg
        extends TrackData
        implements Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable
    {
        static $gtype: GObject.GType<TrackDataCfg>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackDataCfg.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackDataCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackDataCfg;

        // Signals

        /** @signal */
        connect<K extends keyof TrackDataCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackDataCfg.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackDataCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackDataCfg.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackDataCfg.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackDataCfg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new file (with `uri` as URI) under a directory (`parent`).
         * If `parent` is NULL, the file is added to the root.
         * Also if `uri` is the path of a directory, this directory will be explored
         * and all its children added to the tree.
         * @param uri a `gchar`
         * @param parent a {@link Gtk.TreePath} or NULL
         * @returns a `gboolean`. TRUE if the operation was successful, FALSE otherwise
         */
        add(uri: string, parent: Gtk.TreePath): boolean;
        /**
         * Add a new empty directory (with `name` as name) under another directory (`parent`).
         * If `parent` is NULL, the file is added to the root.
         * @param name a `gchar`
         * @param parent a {@link Gtk.TreePath} or NULL
         * @returns a {@link Gtk.TreePath} which should be destroyed when not needed; NULL if the operation was not successful.
         */
        add_empty_directory(name: string, parent: Gtk.TreePath): Gtk.TreePath;
        /**
         * Prevents `uri` to be filtered while automatic exploration
         * of added directories is performed.
         * @param uri a `gchar`
         */
        dont_filter_uri(uri: string): void;
        /**
         * Returns a path pointing to the currently selected icon file.
         * @returns a `gchar` or NULL.
         */
        get_icon_path(): string;
        /**
         * Removes a file or a directory (as well as its children) from the tree.
         * NOTE: some files cannot be removed like files from an imported session.
         * @param treepath a {@link Gtk.TreePath}
         * @returns a `gboolean`. TRUE if the operation was successful, FALSE otherwise
         */
        remove(treepath: Gtk.TreePath): boolean;
        /**
         * Renames the file in the tree pointed by `treepath`.
         * @param newname a `gchar`
         * @param treepath a {@link Gtk.TreePath}
         * @returns a `gboolean`. TRUE if the operation was successful, FALSE otherwise
         */
        rename(newname: string, treepath: Gtk.TreePath): boolean;
        /**
         * Completely empties `track` and unloads any currently loaded session
         * @returns a `gboolean`. TRUE if the operation was successful, FALSE otherwise
         */
        reset(): boolean;
        /**
         * Removes a file from the filtered file list (see brasero_track_data_cfg_get_filtered_model ())
         * and re-adds it wherever it should be in the tree.
         * `treepath` is a {@link Gtk.TreePath} associated with the {@link Gtk.TreeModel} which holds the
         * filtered files not the main tree.
         * @param treepath a {@link Gtk.TreePath}
         */
        restore(treepath: Gtk.TreePath): void;
        /**
         * Sets the current icon.
         * @param icon_path a `gchar`
         * @returns a `gboolean`. TRUE if the operation was successful, FALSE otherwise
         */
        set_icon(icon_path: string): boolean;
        /**
         * Creates a new {@link BraseroBurn.TrackData} (stored in `new_track`) from the files contained in `track`. The sum of their sizes
         * does not exceed `sectors`. This allows to burn a tree on multiple discs. This function can be
         * called repeatedly; in this case if some files were left out after the previous calls, the newly created BraseroTrackData
         * is created with all or part of the remaining files.
         * @param sectors a `goffset`
         * @param new_track a {@link BraseroBurn.TrackData}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new {@link BraseroBurn.TrackDataCfg} was created. BRASERO_BURN_ERR otherwise.
         */
        span(sectors: number, new_track: TrackData): BurnResult;
        /**
         * Checks whether some files were not included during calls to brasero_track_data_cfg_span ().
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new {@link BraseroBurn.TrackDataCfg} was created. BRASERO_BURN_ERR otherwise.
         */
        span_again(): BurnResult;
        /**
         * Returns the maximum required space (in sectors)
         * among all the possible spanned batches.
         * This means that when burningto a media
         * it will also be the minimum required
         * space to burn all the contents in several
         * batches.
         * @returns a `goffset`.
         */
        span_max_space(): number;
        /**
         * Checks if a new {@link BraseroBurn.TrackData} can be created from the files remaining in the tree
         * after calls to brasero_track_data_cfg_span ().
         * @param sectors a `goffset`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if there is not anymore data. BRASERO_BURN_RETRY if the operation was successful and a new {@link BraseroBurn.TrackDataCfg} was created. BRASERO_BURN_ERR otherwise.
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
        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @returns whether a new row was created before position `dest`
         */
        drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @returns `true` if a drop is possible before `dest_path`
         */
        row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @virtual
         */
        vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @virtual
         */
        vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @returns `true` if the row was successfully deleted
         */
        drag_data_delete(path: Gtk.TreePath): boolean;
        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @returns `true` if data of the required type was provided
         */
        drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @returns `true` if the row can be dragged
         */
        row_draggable(path: Gtk.TreePath): boolean;
        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @virtual
         */
        vfunc_drag_data_delete(path: Gtk.TreePath): boolean;
        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @virtual
         */
        vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @virtual
         */
        vfunc_row_draggable(path: Gtk.TreePath): boolean;
        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;
        /**
         * Calls func on each node in model in a depth-first fashion.
         *
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
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
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;
        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];
        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;
        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         *
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns a newly-created {@link Gtk.TreePath}-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;
        /**
         * Generates a string representation of the iter.
         *
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;
        /**
         * Initializes and sets `value` to that at `column`.
         *
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;
        /**
         * Sets `iter` to point to the first child of `parent`.
         *
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         *
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;
        /**
         * Returns the number of children that `iter` has.
         *
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter?: Gtk.TreeIter | null): number;
        /**
         * Sets `iter` to point to the node following it at the current level.
         *
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;
        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         *
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to be the parent of `child`.
         *
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         *
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to point to the previous node at the current level.
         *
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
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
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         *
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         *
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         *
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;
        /**
         * Lets the tree unref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         *
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;
        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;
        /**
         * Returns a set of flags supported by this interface.
         *
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;
        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;
        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         *
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;
        /**
         * Initializes and sets `value` to that at `column`.
         *
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;
        /**
         * Sets `iter` to point to the first child of `parent`.
         *
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         *
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;
        /**
         * Returns the number of children that `iter` has.
         *
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;
        /**
         * Sets `iter` to point to the node following it at the current level.
         *
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;
        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         *
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to be the parent of `child`.
         *
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         *
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to point to the previous node at the current level.
         *
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
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
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         *
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         *
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Lets the tree unref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         *
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;
        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @returns `true` if the sort column is not one of the special sort   column ids.
         */
        get_sort_column_id(): [boolean, number, Gtk.SortType];
        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @returns `true`, if the model has a default sort function
         */
        has_default_sort_func(): boolean;
        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         *
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of `user_data`, or `null`
         */
        set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         *
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         *
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         */
        set_sort_column_id(sort_column_id: number, order: Gtk.SortType | null): void;
        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of `user_data`, or `null`
         */
        set_sort_func(
            sort_column_id: number,
            sort_func: Gtk.TreeIterCompareFunc,
            destroy?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         */
        sort_column_changed(): void;
        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @virtual
         */
        vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];
        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @virtual
         */
        vfunc_has_default_sort_func(): boolean;
        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         *
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of `user_data`, or `null`
         * @virtual
         */
        vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         *
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         *
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         * @virtual
         */
        vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;
        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @param destroy Destroy notifier of `user_data`, or `null`
         * @virtual
         */
        vfunc_set_sort_func(
            sort_column_id: number,
            sort_func: Gtk.TreeIterCompareFunc,
            destroy?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         * @virtual
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace TrackDisc {
        // Signal signatures
        interface SignalSignatures extends Track.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackDisc extends Track {
        static $gtype: GObject.GType<TrackDisc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackDisc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackDisc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackDisc;

        // Signals

        /** @signal */
        connect<K extends keyof TrackDisc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackDisc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackDisc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackDisc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackDisc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackDisc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the track number which will be used
         * to copy only one specific session on a multisession disc
         * @returns a `guint`. 0 if none is set, any other number otherwise.
         */
        get_track_num(): number;
        /**
         * Sets a track number which can be used
         * to copy only one specific session on a multisession disc
         * @param num a `guint`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it was successful, BRASERO_BURN_ERR otherwise.
         */
        set_track_num(num: number): BurnResult;
    }

    namespace TrackImage {
        // Signal signatures
        interface SignalSignatures extends Track.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackImage extends Track {
        static $gtype: GObject.GType<TrackImage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackImage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackImage;

        // Signals

        /** @signal */
        connect<K extends keyof TrackImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Sets the image size (in sectors).
         * @param blocks a `goffset`
         * @virtual
         */
        vfunc_set_block_num(blocks: number): BurnResult;
        /**
         * Sets the image source path (and its toc if need be)
         * as well as its format.
         * @param image a `gchar` or NULL
         * @param toc a `gchar` or NULL
         * @param format a {@link BraseroBurn.ImageFormat}
         * @virtual
         */
        vfunc_set_source(image: string, toc: string, format: ImageFormat): BurnResult;

        // Methods

        /**
         * This function returns the format of the
         * source image.
         * @returns a {@link BraseroBurn.ImageFormat}
         */
        get_format(): ImageFormat;
        /**
         * This function returns the path or the URI (if `uri` is TRUE) of the
         * source image file.
         * @param uri a `gboolean`
         * @returns a `gchar`
         */
        get_source(uri: boolean): string;
        /**
         * This function returns the path or the URI (if `uri` is TRUE) of the
         * source toc file.
         * @param uri a `gboolean`
         * @returns a `gchar`
         */
        get_toc_source(uri: boolean): string;
        /**
         * This function returns whether the data bytes need swapping. Some .bin files
         * associated with .cue files are little endian for audio whereas they should
         * be big endian.
         * @returns a `gboolean`
         */
        need_byte_swap(): boolean;
        /**
         * Sets the image size (in sectors).
         * @param blocks a `goffset`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        set_block_num(blocks: number): BurnResult;
        /**
         * Sets the image source path (and its toc if need be)
         * as well as its format.
         * @param image a `gchar` or NULL
         * @param toc a `gchar` or NULL
         * @param format a {@link BraseroBurn.ImageFormat}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        set_source(image: string, toc: string, format: ImageFormat | null): BurnResult;
    }

    namespace TrackImageCfg {
        // Signal signatures
        interface SignalSignatures extends TrackImage.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TrackImage.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackImageCfg extends TrackImage {
        static $gtype: GObject.GType<TrackImageCfg>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackImageCfg.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackImageCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackImageCfg;

        // Signals

        /** @signal */
        connect<K extends keyof TrackImageCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackImageCfg.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackImageCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackImageCfg.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackImageCfg.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackImageCfg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function allows to prevents the identification of the format of the image.
         * It does not cancel size retrieval.
         * If `format` is BRASERO_IMAGE_FORMAT_NONE then the format of the image
         * will be retrieved.
         * @param format a {@link BraseroBurn.ImageFormat}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        force_format(format: ImageFormat | null): BurnResult;
        /**
         * This function returns the {@link BraseroBurn.ImageFormat} that was set for the image.
         * See brasero_track_image_cfg_force_format ().
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        get_forced_format(): ImageFormat;
        /**
         * Sets the image uri or path (absolute or relative). `track` will then identify its format and retrieve its size.
         * @param uri a `gchar`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        set_source(uri: string): BurnResult;
    }

    namespace TrackStream {
        // Signal signatures
        interface SignalSignatures extends Track.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Track.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackStream extends Track {
        static $gtype: GObject.GType<TrackStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackStream;

        // Signals

        /** @signal */
        connect<K extends keyof TrackStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Sets the boundaries of the stream (where it starts, ends in the file;
         * how long is the gap with the next track) in nano seconds.
         * @param start a `gint64` or -1 to ignore
         * @param end a `gint64` or -1 to ignore
         * @param gap a `gint64` or -1 to ignore
         * @virtual
         */
        vfunc_set_boundaries(start: number, end: number, gap: number): BurnResult;
        /**
         * Sets the format of the stream.
         * @param format a {@link BraseroBurn.StreamFormat}
         * @virtual
         */
        vfunc_set_format(format: StreamFormat): BurnResult;
        /**
         * Sets the stream (song or video) uri.
         *
         * Note: it resets the end point of the track to 0 but keeps start point and gap
         * unchanged.
         * @param uri a `gchar`
         * @virtual
         */
        vfunc_set_source(uri: string): BurnResult;

        // Methods

        /**
         * This function returns end time in the stream (in nano seconds).
         * @returns a `guint64`.
         */
        get_end(): number;
        /**
         * This function returns the format of the stream.
         * @returns a {@link BraseroBurn.StreamFormat}.
         */
        get_format(): StreamFormat;
        /**
         * This function returns length of the gap (in nano seconds).
         * @returns a `guint64`.
         */
        get_gap(): number;
        /**
         * This function returns the length of the stream (in nano seconds)
         * taking into account the start and end time as well as the length
         * of the gap. It stores it in `length`.
         * @param length a `guint64`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if `length` was set.
         */
        get_length(length: number): BurnResult;
        /**
         * This function returns the path or the URI (if `uri` is TRUE)
         * of the stream (song or video file).
         *
         * Note: this function resets any length previously set to 0.
         * @param uri a `gboolean`
         * @returns a `gchar`.
         */
        get_source(uri: boolean): string;
        /**
         * This function returns start time in the stream (in nano seconds).
         * @returns a `guint64`.
         */
        get_start(): number;
        /**
         * Sets the boundaries of the stream (where it starts, ends in the file;
         * how long is the gap with the next track) in nano seconds.
         * @param start a `gint64` or -1 to ignore
         * @param end a `gint64` or -1 to ignore
         * @param gap a `gint64` or -1 to ignore
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        set_boundaries(start: number, end: number, gap: number): BurnResult;
        /**
         * Sets the format of the stream.
         * @param format a {@link BraseroBurn.StreamFormat}
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        set_format(format: StreamFormat | null): BurnResult;
        /**
         * Sets the stream (song or video) uri.
         *
         * Note: it resets the end point of the track to 0 but keeps start point and gap
         * unchanged.
         * @param uri a `gchar`
         * @returns a {@link BraseroBurn.BurnResult}. BRASERO_BURN_OK if it is successful.
         */
        set_source(uri: string): BurnResult;
    }

    namespace TrackStreamCfg {
        // Signal signatures
        interface SignalSignatures extends TrackStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TrackStream.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TrackStreamCfg extends TrackStream {
        static $gtype: GObject.GType<TrackStreamCfg>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackStreamCfg.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrackStreamCfg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrackStreamCfg;

        // Signals

        /** @signal */
        connect<K extends keyof TrackStreamCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackStreamCfg.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TrackStreamCfg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackStreamCfg.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TrackStreamCfg.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackStreamCfg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type BurnClass = typeof Burn;
    /**
     * @gir-type Alias
     */
    type BurnDialogClass = typeof BurnDialog;
    /**
     * @gir-type Alias
     */
    type BurnOptionsClass = typeof BurnOptions;
    /**
     * @gir-type Alias
     */
    type BurnSessionClass = typeof BurnSession;
    /**
     * A pair of strings describing:
     * `uri` the actual current location of the file
     * `path` the path of the file on the future ISO9660/UDF/... filesystem
     * @gir-type Struct
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
    }

    /**
     * @gir-type Alias
     */
    type SessionCfgClass = typeof SessionCfg;
    /**
     * @gir-type Alias
     */
    type SessionSpanClass = typeof SessionSpan;
    /**
     * @gir-type Alias
     */
    type StatusClass = typeof Status;
    /**
     * @gir-type Alias
     */
    type SumDialogClass = typeof SumDialog;
    /**
     * @gir-type Alias
     */
    type ToolDialogClass = typeof ToolDialog;
    /**
     * @gir-type Alias
     */
    type TrackClass = typeof Track;
    /**
     * @gir-type Alias
     */
    type TrackDataCfgClass = typeof TrackDataCfg;
    /**
     * @gir-type Alias
     */
    type TrackDataClass = typeof TrackData;
    /**
     * @gir-type Alias
     */
    type TrackDiscClass = typeof TrackDisc;
    /**
     * @gir-type Alias
     */
    type TrackImageCfgClass = typeof TrackImageCfg;
    /**
     * @gir-type Alias
     */
    type TrackImageClass = typeof TrackImage;
    /**
     * @gir-type Alias
     */
    type TrackStreamCfgClass = typeof TrackStreamCfg;
    /**
     * @gir-type Alias
     */
    type TrackStreamClass = typeof TrackStream;
    /**
     * @gir-type Struct
     */
    abstract class TrackType {
        static $gtype: GObject.GType<TrackType>;

        // Methods

        /**
         * Returns TRUE if `type_A` and `type_B` represents
         * the same type and subtype.
         * @param type_B a {@link BraseroBurn.TrackType}.
         * @returns a `gboolean`
         */
        equal(type_B: TrackType): boolean;
        /**
         * Frees {@link BraseroBurn.TrackType} structure.
         */
        free(): void;
        /**
         * Returns the parameters for the image generation
         * when brasero_track_type_get_has_data () returned
         * TRUE.
         * @returns a {@link BraseroBurn.ImageFS}
         */
        get_data_fs(): ImageFS;
        /**
         * Returns TRUE if DATA type (see brasero_track_data_new ()) was set.
         * @returns a `gboolean`
         */
        get_has_data(): boolean;
        /**
         * Returns TRUE if IMAGE type (see brasero_track_image_new ()) was set.
         * @returns a `gboolean`
         */
        get_has_image(): boolean;
        /**
         * Returns TRUE if MEDIUM type (see brasero_track_disc_new ()) was set.
         * @returns a `gboolean`
         */
        get_has_medium(): boolean;
        /**
         * This function returns `true` if IMAGE type (see brasero_track_stream_new ()) was set.
         * @returns a `gboolean`
         */
        get_has_stream(): boolean;
        /**
         * Returns the format of an image when
         * brasero_track_type_get_has_image () returned
         * TRUE.
         * @returns a {@link BraseroBurn.ImageFormat}
         */
        get_image_format(): ImageFormat;
        /**
         * Returns the format for a stream (song or video)
         * when brasero_track_type_get_has_stream () returned
         * TRUE.
         * @returns a {@link BraseroBurn.StreamFormat}
         */
        get_stream_format(): StreamFormat;
        /**
         * Returns TRUE if no type was set.
         * @returns a `gboolean`
         */
        is_empty(): boolean;
        /**
         * Sets the {@link BraseroBurn.ImageFS}. Must be called
         * after brasero_track_type_set_has_data ().
         * @param fs_type a {@link BraseroBurn.ImageFS}
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
         * Sets the {@link BraseroBurn.ImageFormat}. Must be called
         * after brasero_track_type_set_has_image ().
         * @param format a {@link BraseroBurn.ImageFormat}
         */
        set_image_format(format: ImageFormat | null): void;
        /**
         * Sets the {@link BraseroBurn.StreamFormat}. Must be called
         * after brasero_track_type_set_has_stream ().
         * @param format a {@link BraseroBurn.ImageFormat}
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
