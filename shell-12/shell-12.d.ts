/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shell-12-ambient.d.ts';
import './shell-12-import.d.ts';
/**
 * Shell-12
 */

import type St from '@girs/st-12';
import type Meta from '@girs/meta-12';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-12';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-12';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-12';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cally from '@girs/cally-12';
import type PolkitAgent from '@girs/polkitagent-1.0';
import type Polkit from '@girs/polkit-1.0';
import type NM from '@girs/nm-1.0';
import type Gvc from '@girs/gvc-1.0';
import type Gcr from '@girs/gcr-4';
import type Gck from '@girs/gck-2';

export namespace Shell {
    enum AppLaunchGpu {
        APP_PREF,
        DISCRETE,
        DEFAULT,
    }
    enum AppState {
        STOPPED,
        STARTING,
        RUNNING,
    }
    /**
     * The mode of blurring of the effect.
     */
    enum BlurMode {
        /**
         * blur the actor contents, and its children
         */
        ACTOR,
        /**
         * blur what's beneath the actor
         */
        BACKGROUND,
    }
    enum NetworkAgentResponse {
        CONFIRMED,
        USER_CANCELED,
        INTERNAL_ERROR,
    }
    /**
     * Temporary hack to work around Cogl not exporting CoglSnippetHook in
     * the 1.0 API. Don't use.
     */
    enum SnippetHook {
        VERTEX,
        VERTEX_TRANSFORM,
        FRAGMENT,
        TEXTURE_COORD_TRANSFORM,
        LAYER_FRAGMENT,
        TEXTURE_LOOKUP,
    }
    const KEYRING_SK_TAG: string;
    const KEYRING_SN_TAG: string;
    const KEYRING_UUID_TAG: string;
    /**
     * Synchronously load the contents of a file as a NUL terminated
     * string, validating it as UTF-8.  Embedded NUL characters count as
     * invalid content.
     * @param path UTF-8 encoded filename path
     * @returns File contents
     */
    function get_file_contents_utf8_sync(path: string): string;
    /**
     * Walk over all open file descriptors. Check them for the FD_CLOEXEC flag.
     * If this flag is not set, log the offending file descriptor number.
     *
     * It is important that gnome-shell's file descriptors are all marked CLOEXEC,
     * so that the shell's open file descriptors are not passed to child processes
     * that we launch.
     */
    function util_check_cloexec_fds(): void;
    function util_composite_capture_images(
        captures: Clutter.Capture,
        n_captures: number,
        x: number,
        y: number,
        target_width: number,
        target_height: number,
        target_scale: number,
    ): cairo.Surface;
    /**
     * Workaround for non-introspectability of gdk_pixbuf_from_data().
     * @param data
     * @param colorspace
     * @param has_alpha
     * @param bits_per_sample
     * @param width
     * @param height
     * @param rowstride
     */
    function util_create_pixbuf_from_data(
        data: Uint8Array,
        colorspace: GdkPixbuf.Colorspace,
        has_alpha: boolean,
        bits_per_sample: number,
        width: number,
        height: number,
        rowstride: number,
    ): GdkPixbuf.Pixbuf;
    /**
     * Attempts to translate the folder `name` using translations provided
     * by .directory files.
     * @param name the untranslated folder name
     * @returns a translated string or %NULL
     */
    function util_get_translated_folder_name(name: string): string | null;
    /**
     * A wrapper around getuid() so that it can be used from JavaScript. This
     * function will always succeed.
     * @returns the real user ID of the calling process
     */
    function util_get_uid(): number;
    /**
     * Gets the first week day for the current locale, expressed as a
     * number in the range 0..6, representing week days from Sunday to
     * Saturday.
     * @returns A number representing the first week day for the current          locale
     */
    function util_get_week_start(): number;
    /**
     * If the corresponding X11 display provides the passed extension, return %TRUE,
     * otherwise %FALSE. If there is no X11 display, %FALSE is passed.
     * @param display A #MetaDisplay
     * @param extension An X11 extension
     */
    function util_has_x11_display_extension(display: Meta.Display, extension: string): boolean;
    /**
     * A wrapper around g_regex_escape_string() that takes its argument as
     * \0-terminated string rather than a byte-array that confuses gjs.
     * @param str a UTF-8 string to escape
     * @returns @str with all regex-special characters escaped
     */
    function util_regex_escape(str: string): string;
    function util_sd_notify(): void;
    /**
     * If `hidden` is %TRUE, hide `actor` from pick even with a mode of
     * %CLUTTER_PICK_ALL; if `hidden` is %FALSE, unhide `actor`.
     * @param actor A #ClutterActor
     * @param hidden Whether @actor should be hidden from pick
     */
    function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_systemd_unit_exists(
        unit: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_systemd_unit_exists_finish(res: Gio.AsyncResult): boolean;
    function util_touch_file_async(file: Gio.File, callback?: Gio.AsyncReadyCallback<Gio.File> | null): void;
    function util_touch_file_finish(file: Gio.File, res: Gio.AsyncResult): boolean;
    /**
     * Translate `str` according to the locale defined by LC_TIME; unlike
     * dcgettext(), the translations is still taken from the LC_MESSAGES
     * catalogue and not the LC_TIME one.
     * @param str String to translate
     * @returns the translated string
     */
    function util_translate_time_string(str: string): string;
    /**
     * Implements libc standard WIFEXITED, that cannot be used JS
     * code.
     * @param status the status returned by wait() or waitpid()
     * @returns TRUE if the process exited normally, FALSE otherwise
     */
    function util_wifexited(status: number): boolean;
    /**
     * Write a string to a GOutputStream as UTF-8. This is a workaround
     * for not having binary buffers in GJS.
     * @param stream a #GOutputStream
     * @param str a UTF-8 string to write to @stream
     * @returns %TRUE if write succeeded
     */
    function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean;
    interface LeisureFunction {
        (data?: any | null): void;
    }
    interface PerfReplayFunction {
        (time: number, name: string, signature: string, arg: GObject.Value): void;
    }
    interface PerfStatisticsCallback {
        (perf_log: PerfLog, data?: any | null): void;
    }
    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     */
    enum ActionMode {
        /**
         * block action
         */
        NONE,
        /**
         * allow action when in window mode,
         *     e.g. when the focus is in an application window
         */
        NORMAL,
        /**
         * allow action while the overview
         *     is active
         */
        OVERVIEW,
        /**
         * allow action when the screen
         *     is locked, e.g. when the screen shield is shown
         */
        LOCK_SCREEN,
        /**
         * allow action in the unlock
         *     dialog
         */
        UNLOCK_SCREEN,
        /**
         * allow action in the login screen
         */
        LOGIN_SCREEN,
        /**
         * allow action when a system modal
         *     dialog (e.g. authentication or session dialogs) is open
         */
        SYSTEM_MODAL,
        /**
         * allow action in looking glass
         */
        LOOKING_GLASS,
        /**
         * allow action while a shell menu is open
         */
        POPUP,
        /**
         * always allow action
         */
        ALL,
    }
    module App {
        // Signal callback interfaces

        interface WindowsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class App extends GObject.Object {
        // Own properties of Shell-12.App

        /**
         * The #GDBusActionGroup associated with this ShellApp, if any. See the
         * documentation of #GApplication and #GActionGroup for details.
         */
        readonly action_group: Gio.ActionGroup;
        /**
         * The #GDBusActionGroup associated with this ShellApp, if any. See the
         * documentation of #GApplication and #GActionGroup for details.
         */
        readonly actionGroup: Gio.ActionGroup;
        /**
         * The #GDesktopAppInfo associated with this ShellApp, if any.
         */
        app_info: Gio.DesktopAppInfo;
        /**
         * The #GDesktopAppInfo associated with this ShellApp, if any.
         */
        appInfo: Gio.DesktopAppInfo;
        /**
         * Whether the application has marked itself as busy.
         */
        readonly busy: boolean;
        /**
         * The #GIcon representing this ShellApp
         */
        readonly icon: Gio.Icon;
        /**
         * The id of this application (a desktop filename, or a special string
         * like window:0xabcd1234)
         */
        readonly id: string;
        /**
         * The high-level state of the application, effectively whether it's
         * running or not, or transitioning between those states.
         */
        readonly state: AppState;

        // Owm methods of Shell-12.App

        /**
         * Like shell_app_activate_full(), but using the default workspace and
         * event timestamp.
         */
        activate(): void;
        /**
         * Perform an appropriate default action for operating on this application,
         * dependent on its current state.  For example, if the application is not
         * currently running, launch it.  If it is running, activate the most
         * recently used NORMAL window (or if that window has a transient, the most
         * recently used transient for that window).
         * @param workspace launch on this workspace, or -1 for default. Ignored if   activating an existing window
         * @param timestamp Event timestamp
         */
        activate_full(workspace: number, timestamp: number): void;
        /**
         * Bring all windows for the given app to the foreground,
         * but ensure that `window` is on top.  If `window` is %NULL,
         * the window with the most recent user time for the app
         * will be used.
         *
         * This function has no effect if `app` is not currently running.
         * @param window Window to be focused
         * @param timestamp Event timestamp
         */
        activate_window(window: Meta.Window | null, timestamp: number): void;
        /**
         * Returns %TRUE if the app supports opening a new window through
         * shell_app_open_new_window() (ie, if calling that function will
         * result in actually opening a new window and not something else,
         * like presenting the most recently active one)
         */
        can_open_new_window(): boolean;
        /**
         * Compare one #ShellApp instance to another, in the following way:
         *   - Running applications sort before not-running applications.
         *   - If one of them has non-minimized windows and the other does not,
         *     the one with visible windows is first.
         *   - Finally, the application which the user interacted with most recently
         *     compares earlier.
         * @param other A #ShellApp
         */
        compare(other: App): number;
        /**
         * Order two applications by name.
         * @param other The other app
         * @returns -1, 0, or 1; suitable for use as a comparison function for e.g. g_slist_sort()
         */
        compare_by_name(other: App): number;
        /**
         * Look up the icon for this application, and create a #ClutterActor
         * for it at the given size.
         * @param size
         * @returns A floating #ClutterActor
         */
        create_icon_texture(size: number): Clutter.Actor;
        get_app_info(): Gio.DesktopAppInfo;
        get_busy(): boolean;
        get_description(): string;
        /**
         * Look up the icon for this application
         * @returns A #GIcon
         */
        get_icon(): Gio.Icon;
        get_id(): string;
        get_n_windows(): number;
        get_name(): string;
        get_pids(): number[];
        get_state(): AppState;
        /**
         * Get the windows which are associated with this application. The
         * returned list will be sorted first by whether they're on the
         * active workspace, then by whether they're visible, and finally
         * by the time the user last interacted with them.
         * @returns List of windows
         */
        get_windows(): Meta.Window[];
        is_on_workspace(workspace: Meta.Workspace): boolean;
        /**
         * A window backed application is one which represents just an open
         * window, i.e. there's no .desktop file association, so we don't know
         * how to launch it again.
         */
        is_window_backed(): boolean;
        launch(timestamp: number, workspace: number, gpu_pref: AppLaunchGpu): boolean;
        launch_action(action_name: string, timestamp: number, workspace: number): void;
        /**
         * Request that the application create a new window.
         * @param workspace open on this workspace, or -1 for default
         */
        open_new_window(workspace: number): void;
        /**
         * Initiate an asynchronous request to quit this application.
         * The application may interact with the user, and the user
         * might cancel the quit request from the application UI.
         *
         * This operation may not be supported for all applications.
         * @returns %TRUE if a quit request is supported for this application
         */
        request_quit(): boolean;
        update_app_actions(window: Meta.Window): void;
        update_window_actions(window: Meta.Window): void;
    }

    module AppSystem {
        // Signal callback interfaces

        interface AppStateChanged {
            (object: App): void;
        }

        interface InstalledChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class AppSystem extends GObject.Object {
        // Owm methods of Shell-12.AppSystem

        static get_default(): AppSystem;
        /**
         * Wrapper around g_desktop_app_info_search() that replaces results that
         * don't validate as UTF-8 with the empty string.
         * @param search_string the search string to use
         */
        static search(search_string: string): string[][];

        // Owm methods of Shell-12.AppSystem

        /**
         * Returns all installed apps, as a list of #GAppInfo
         * @returns a list of #GAppInfo   describing all known applications. This memory is owned by the   #ShellAppSystem and should not be freed.
         */
        get_installed(): Gio.AppInfo[];
        /**
         * Returns the set of applications which currently have at least one
         * open window.  The returned list will be sorted by shell_app_compare().
         * @returns Active applications
         */
        get_running(): App[];
        /**
         * Find a #ShellApp corresponding to an id.
         * @param id
         * @returns The #ShellApp for id, or %NULL if none
         */
        lookup_app(id: string): App;
        /**
         * Find a valid application whose .desktop file, without the extension
         * and properly canonicalized, matches `wmclass`.
         * @param wmclass A WM_CLASS value
         * @returns A #ShellApp for @wmclass
         */
        lookup_desktop_wmclass(wmclass?: string | null): App;
        /**
         * Find a valid application corresponding to a given
         * heuristically determined application identifier
         * string, or %NULL if none.
         * @param id Probable application identifier
         * @returns A #ShellApp for @name
         */
        lookup_heuristic_basename(id: string): App;
        /**
         * Find a valid application whose .desktop file contains a
         * StartupWMClass entry matching `wmclass`.
         * @param wmclass A WM_CLASS value
         * @returns A #ShellApp for @wmclass
         */
        lookup_startup_wmclass(wmclass?: string | null): App;
    }

    module AppUsage {
        // Constructor properties interface
    }

    class AppUsage extends GObject.Object {
        // Owm methods of Shell-12.AppUsage

        static get_default(): AppUsage;

        // Owm methods of Shell-12.AppUsage

        /**
         * Compare `id_a` and `id_b` based on frequency of use.
         * @param id_a ID of first app
         * @param id_b ID of second app
         * @returns -1 if @id_a ranks higher than @id_b, 1 if @id_b ranks higher          than @id_a, and 0 if both rank equally.
         */
        compare(id_a: string, id_b: string): number;
        get_most_used(): App[];
    }

    module BlurEffect {
        // Constructor properties interface
    }

    class BlurEffect extends Clutter.Effect {
        // Own properties of Shell-12.BlurEffect

        brightness: number;
        mode: BlurMode;
        sigma: number;

        // Constructors of Shell-12.BlurEffect

        static ['new'](): BlurEffect;

        // Owm methods of Shell-12.BlurEffect

        get_brightness(): number;
        get_mode(): BlurMode;
        get_sigma(): number;
        set_brightness(brightness: number): void;
        set_mode(mode: BlurMode): void;
        set_sigma(sigma: number): void;
    }

    module GLSLEffect {
        // Constructor properties interface
    }

    class GLSLEffect extends Clutter.OffscreenEffect {
        // Owm methods of Shell-12.GLSLEffect

        /**
         * Adds a GLSL snippet to the pipeline used for drawing the effect texture.
         * See #CoglSnippet for details.
         *
         * This is only valid inside the a call to the build_pipeline() virtual
         * function.
         * @param hook where to insert the code
         * @param declarations GLSL declarations
         * @param code GLSL code
         * @param is_replace whether Cogl code should be replaced by the custom shader
         */
        add_glsl_snippet(hook: SnippetHook, declarations: string, code: string, is_replace: boolean): void;
        get_uniform_location(name: string): number;
        set_uniform_float(uniform: number, n_components: number, value: number[]): void;
        set_uniform_matrix(uniform: number, transpose: boolean, dimensions: number, value: number[]): void;
    }

    module Global {
        // Signal callback interfaces

        interface LocatePointer {
            (): void;
        }

        interface NotifyError {
            (object: string, p0: string): void;
        }

        interface Shutdown {
            (): void;
        }

        // Constructor properties interface
    }

    class Global extends GObject.Object {
        // Own properties of Shell-12.Global

        readonly backend: Meta.Backend;
        readonly compositor: Meta.Compositor;
        readonly context: Meta.Context;
        readonly datadir: string;
        readonly display: Meta.Display;
        readonly focus_manager: St.FocusManager;
        readonly focusManager: St.FocusManager;
        force_animations: boolean;
        forceAnimations: boolean;
        frame_finish_timestamp: boolean;
        frameFinishTimestamp: boolean;
        frame_timestamps: boolean;
        frameTimestamps: boolean;
        readonly imagedir: string;
        readonly screen_height: number;
        readonly screenHeight: number;
        readonly screen_width: number;
        readonly screenWidth: number;
        session_mode: string;
        sessionMode: string;
        readonly settings: Gio.Settings;
        readonly stage: Clutter.Actor;
        readonly switcheroo_control: Gio.DBusProxy;
        readonly switcherooControl: Gio.DBusProxy;
        readonly top_window_group: Clutter.Actor;
        readonly topWindowGroup: Clutter.Actor;
        readonly userdatadir: string;
        readonly window_group: Clutter.Actor;
        readonly windowGroup: Clutter.Actor;
        readonly window_manager: WM;
        readonly windowManager: WM;
        readonly workspace_manager: Meta.WorkspaceManager;
        readonly workspaceManager: Meta.WorkspaceManager;

        // Owm methods of Shell-12.Global

        /**
         * Gets the singleton global object that represents the desktop.
         */
        static get(): Global;

        // Owm methods of Shell-12.Global

        /**
         * Marks that we are currently doing work. This is used to to track
         * whether we are busy for the purposes of shell_global_run_at_leisure().
         * A count is kept and shell_global_end_work() must be called exactly
         * as many times as shell_global_begin_work().
         */
        begin_work(): void;
        /**
         * Create a #GAppLaunchContext set up with the correct timestamp, and
         * targeted to activate on the current workspace.
         * @param timestamp the timestamp for the launch (or 0 for current time)
         * @param workspace a workspace index, or -1 to indicate the current one
         * @returns A new #GAppLaunchContext
         */
        create_app_launch_context(timestamp: number, workspace: number): Gio.AppLaunchContext;
        /**
         * Marks the end of work that we started with shell_global_begin_work().
         * If no other work is ongoing and functions have been added with
         * shell_global_run_at_leisure(), they will be run at the next
         * opportunity.
         */
        end_work(): void;
        /**
         * Gets app system.
         * @returns the app system
         */
        get_app_system(): AppSystem;
        /**
         * Gets app usage.
         * @returns the app usage
         */
        get_app_usage(): AppUsage;
        get_context(): Meta.Context;
        get_current_time(): number;
        get_display(): Meta.Display;
        /**
         * The shell maintains "persistent" state which will persist after
         * logout or reboot.
         * @param property_type Expected data type
         * @param property_name Name of the property
         * @returns The value of a serialized property, or %NULL if none stored
         */
        get_persistent_state(property_type: string, property_name: string): GLib.Variant;
        /**
         * Gets the pointer coordinates and current modifier key state.
         */
        get_pointer(): void;
        /**
         * The shell maintains "runtime" state which does not persist across
         * logout or reboot.
         * @param property_type Expected data type
         * @param property_name Name of the property
         * @returns The value of a serialized property, or %NULL if none stored
         */
        get_runtime_state(property_type: string, property_name: string): GLib.Variant;
        get_session_mode(): string;
        /**
         * Get the global GSettings instance.
         * @returns The GSettings object
         */
        get_settings(): Gio.Settings;
        get_stage(): Clutter.Stage;
        /**
         * Get the global #GDBusProxy instance for the switcheroo-control
         * daemon.
         * @returns the #GDBusProxy for the daemon,   or %NULL on error.
         */
        get_switcheroo_control(): Gio.DBusProxy;
        /**
         * Gets the list of #MetaWindowActor for the plugin's screen
         * @returns the list of windows
         */
        get_window_actors(): Meta.WindowActor[];
        /**
         * Gets window tracker.
         * @returns the window tracker
         */
        get_window_tracker(): WindowTracker;
        get_workspace_manager(): Meta.WorkspaceManager;
        /**
         * Show a system error notification.  Use this function
         * when a user-initiated action results in a non-fatal problem
         * from causes that may not be under system control.  For
         * example, an application crash.
         * @param msg Error message
         * @param details Error details
         */
        notify_error(msg: string, details: string): void;
        /**
         * Restart the current process.  Only intended for development purposes.
         */
        reexec_self(): void;
        /**
         * Schedules a function to be called the next time the shell is idle.
         * Idle means here no animations, no redrawing, and no ongoing background
         * work. Since there is currently no way to hook into the Clutter master
         * clock and know when is running, the implementation here is somewhat
         * approximation. Animations may be detected as terminating early if they
         * can be drawn fast enough so that the event loop goes idle between frames.
         *
         * The intent of this function is for performance measurement runs
         * where a number of actions should be run serially and each action is
         * timed individually. Using this function for other purposes will
         * interfere with the ability to use it for performance measurement so
         * should be avoided.
         * @param func function to call at leisure
         */
        run_at_leisure(func: LeisureFunction): void;
        /**
         * Change the value of serialized persistent state.
         * @param property_name Name of the property
         * @param variant A #GVariant, or %NULL to unset
         */
        set_persistent_state(property_name: string, variant?: GLib.Variant | null): void;
        /**
         * Change the value of serialized runtime state.
         * @param property_name Name of the property
         * @param variant A #GVariant, or %NULL to unset
         */
        set_runtime_state(property_name: string, variant?: GLib.Variant | null): void;
        /**
         * Sets the area of the stage that is responsive to mouse clicks when
         * we don't have a modal or grab.
         * @param rectangles a list of #MetaRectangle describing the input region.
         */
        set_stage_input_region(rectangles: Meta.Rectangle[]): void;
    }

    module InvertLightnessEffect {
        // Constructor properties interface
    }

    class InvertLightnessEffect extends Clutter.OffscreenEffect {
        // Constructors of Shell-12.InvertLightnessEffect

        static ['new'](): InvertLightnessEffect;
    }

    module KeyringPrompt {
        // Signal callback interfaces

        interface ShowConfirm {
            (): void;
        }

        interface ShowPassword {
            (): void;
        }

        // Constructor properties interface
    }

    class KeyringPrompt extends GObject.Object {
        // Own properties of Shell-12.KeyringPrompt

        /**
         * Whether the choice check box is visible or not.
         */
        readonly choice_visible: boolean;
        /**
         * Whether the choice check box is visible or not.
         */
        readonly choiceVisible: boolean;
        /**
         * Text field for confirmation password
         */
        confirm_actor: Clutter.Text;
        /**
         * Text field for confirmation password
         */
        confirmActor: Clutter.Text;
        /**
         * Whether the password confirm entry is visible or not.
         */
        readonly confirm_visible: boolean;
        /**
         * Whether the password confirm entry is visible or not.
         */
        readonly confirmVisible: boolean;
        /**
         * Text field for password
         */
        password_actor: Clutter.Text;
        /**
         * Text field for password
         */
        passwordActor: Clutter.Text;
        /**
         * Whether the password entry is visible or not.
         */
        readonly password_visible: boolean;
        /**
         * Whether the password entry is visible or not.
         */
        readonly passwordVisible: boolean;
        /**
         * Whether the warning label is visible or not.
         */
        readonly warning_visible: boolean;
        /**
         * Whether the warning label is visible or not.
         */
        readonly warningVisible: boolean;

        // Constructors of Shell-12.KeyringPrompt

        static ['new'](): KeyringPrompt;

        // Owm methods of Shell-12.KeyringPrompt

        /**
         * Called by implementation when the prompt is cancelled.
         */
        cancel(): void;
        /**
         * Called by the implementation when the prompt completes. There are various
         * checks done. %TRUE is returned if the prompt actually should complete.
         * @returns whether the prompt completed
         */
        complete(): boolean;
        /**
         * Get the prompt password text actor
         * @returns the password actor
         */
        get_confirm_actor(): Clutter.Text | null;
        /**
         * Get the prompt password text actor
         * @returns the password actor
         */
        get_password_actor(): Clutter.Text | null;
        /**
         * Set the prompt password confirmation text actor
         * @param confirm_actor the confirm password actor
         */
        set_confirm_actor(confirm_actor?: Clutter.Text | null): void;
        /**
         * Set the prompt password text actor
         * @param password_actor the password actor
         */
        set_password_actor(password_actor?: Clutter.Text | null): void;
    }

    module MountOperation {
        // Signal callback interfaces

        interface ShowProcesses2 {
            (): void;
        }

        // Constructor properties interface
    }

    class MountOperation extends Gio.MountOperation {
        // Constructors of Shell-12.MountOperation

        static ['new'](): MountOperation;

        // Owm methods of Shell-12.MountOperation

        get_show_processes_choices(): string[];
        get_show_processes_message(): string;
        get_show_processes_pids(): GLib.Pid[];
    }

    module NetworkAgent {
        // Signal callback interfaces

        interface CancelRequest {
            (object: string): void;
        }

        interface NewRequest {
            (object: string, p0: NM.Connection, p1: string, p2: string[], p3: number): void;
        }

        // Constructor properties interface
    }

    class NetworkAgent extends NM.SecretAgentOld {
        // Owm methods of Shell-12.NetworkAgent

        add_vpn_secret(request_id: string, setting_key: string, setting_value: string): void;
        respond(request_id: string, response: NetworkAgentResponse): void;
        search_vpn_plugin(service: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        search_vpn_plugin_finish(result: Gio.AsyncResult): NM.VpnPluginInfo | null;
        set_password(request_id: string, setting_key: string, setting_value: string): void;
    }

    module PerfLog {
        // Constructor properties interface
    }

    class PerfLog extends GObject.Object {
        // Owm methods of Shell-12.PerfLog

        /**
         * Gets the global singleton performance log. This is initially disabled
         * and must be explicitly enabled with shell_perf_log_set_enabled().
         */
        static get_default(): PerfLog;

        // Owm methods of Shell-12.PerfLog

        /**
         * Adds a function that will be called before statistics are recorded.
         * The function would typically compute one or more statistics values
         * and call a function such as shell_perf_log_update_statistic_i()
         * to update the value that will be recorded.
         * @param callback function to call before recording statistics
         */
        add_statistics_callback(callback: PerfStatisticsCallback): void;
        /**
         * Calls all the update functions added with
         * shell_perf_log_add_statistics_callback() and then records events
         * for all statistics, followed by a perf.statisticsCollected event.
         */
        collect_statistics(): void;
        /**
         * Defines a performance event for later recording.
         * @param name name of the event. This should of the form   '<namespace>.<specific eventf'>, for example   'clutter.stagePaintDone'.
         * @param description human readable description of the event.
         * @param signature signature defining the arguments that event takes.   This is a string of type characters, using the same characters   as D-Bus or GVariant. Only a very limited number of signatures   are supported: , '', 's', 'i', and 'x'. This mean respectively:   no arguments, one string, one 32-bit integer, and one 64-bit   integer.
         */
        define_event(name: string, description: string, signature: string): void;
        /**
         * Defines a statistic. A statistic is a numeric value that is stored
         * by the performance log and recorded periodically or when
         * shell_perf_log_collect_statistics() is called explicitly.
         *
         * Code that defines a statistic should update it by calling
         * the update function for the particular data type of the statistic,
         * such as shell_perf_log_update_statistic_i(). This can be done
         * at any time, but would normally done inside a function registered
         * with shell_perf_log_add_statistics_callback(). These functions
         * are called immediately before statistics are recorded.
         * @param name name of the statistic and of the corresponding event.  This should follow the same guidelines as for shell_perf_log_define_event()
         * @param description human readable description of the statistic.
         * @param signature The type of the data stored for statistic. Must  currently be 'i' or 'x'.
         */
        define_statistic(name: string, description: string, signature: string): void;
        /**
         * Dump the definition of currently defined events and statistics, formatted
         * as JSON, to the specified output stream. The JSON output is an array,
         * with each element being a dictionary of the form:
         *
         * { name: <name of event>,
         *   description: <description of string,
         *   statistic: true } (only for statistics)
         * @param out output stream into which to write the event definitions
         * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
         */
        dump_events(out: Gio.OutputStream): boolean;
        /**
         * Writes the performance event log, formatted as JSON, to the specified
         * output stream. For performance reasons, the output stream passed
         * in should generally be a buffered (or memory) output stream, since
         * it will be written to in small pieces. The JSON output is an array
         * with the elements of the array also being arrays, of the form
         * '[' <time>, <event name> [, <event_arg>... ] ']'.
         * @param out output stream into which to write the event log
         * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
         */
        dump_log(out: Gio.OutputStream): boolean;
        /**
         * Records a performance event with no arguments.
         * @param name name of the event
         */
        event(name: string): void;
        /**
         * Records a performance event with one 32-bit integer argument.
         * @param name name of the event
         * @param arg the argument
         */
        event_i(name: string, arg: number): void;
        /**
         * Records a performance event with one string argument.
         * @param name name of the event
         * @param arg the argument
         */
        event_s(name: string, arg: string): void;
        /**
         * Records a performance event with one 64-bit integer argument.
         * @param name name of the event
         * @param arg the argument
         */
        event_x(name: string, arg: number): void;
        /**
         * Replays the log by calling the given function for each event
         * in the log.
         * @param replay_function function to call for each event in the log
         */
        replay(replay_function: PerfReplayFunction): void;
        /**
         * Sets whether events are currently being recorded.
         * @param enabled whether to record events
         */
        set_enabled(enabled: boolean): void;
        /**
         * Updates the current value of an 32-bit integer statistic.
         * @param name name of the statistic
         * @param value new value for the statistic
         */
        update_statistic_i(name: string, value: number): void;
        /**
         * Updates the current value of an 64-bit integer statistic.
         * @param name name of the statistic
         * @param value new value for the statistic
         */
        update_statistic_x(name: string, value: number): void;
    }

    module PolkitAuthenticationAgent {
        // Signal callback interfaces

        interface Cancel {
            (): void;
        }

        interface Initiate {
            (object: string, p0: string, p1: string, p2: string, p3: string[]): void;
        }

        // Constructor properties interface
    }

    class PolkitAuthenticationAgent extends PolkitAgent.Listener {
        // Constructors of Shell-12.PolkitAuthenticationAgent

        static ['new'](): PolkitAuthenticationAgent;

        // Owm methods of Shell-12.PolkitAuthenticationAgent

        complete(dismissed: boolean): void;
        register(): void;
        unregister(): void;
    }

    module Screenshot {
        // Signal callback interfaces

        interface ScreenshotTaken {
            (object: Meta.Rectangle): void;
        }

        // Constructor properties interface
    }

    class Screenshot extends GObject.Object {
        // Constructors of Shell-12.Screenshot

        static ['new'](): Screenshot;

        // Owm methods of Shell-12.Screenshot

        /**
         * Composite a rectangle defined by x, y, width, height from the texture to a
         * pixbuf and write it as a PNG image into the stream.
         * @param texture the source texture
         * @param x x coordinate of the rectangle
         * @param y y coordinate of the rectangle
         * @param width width of the rectangle, or -1 to use the full texture
         * @param height height of the rectangle, or -1 to use the full texture
         * @param scale scale of the source texture
         * @param cursor the cursor texture
         * @param cursor_x x coordinate to put the cursor texture at, relative to the full source texture
         * @param cursor_y y coordinate to put the cursor texture at, relative to the full source texture
         * @param cursor_scale scale of the cursor texture
         * @param stream the stream to write the PNG image into
         * @param callback function to call returning success or failure
         */
        static composite_to_stream(
            texture: Cogl.Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            scale: number,
            cursor: Cogl.Texture | null,
            cursor_x: number,
            cursor_y: number,
            cursor_scale: number,
            stream: Gio.OutputStream,
            callback?: Gio.AsyncReadyCallback<Screenshot> | null,
        ): void;
        /**
         * Finish the asynchronous operation started by
         * shell_screenshot_composite_to_stream () and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         */
        static composite_to_stream_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf | null;

        // Owm methods of Shell-12.Screenshot

        /**
         * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
         * @param x The X coordinate to pick
         * @param y The Y coordinate to pick
         * @param callback function to call returning success or failure of the async grabbing
         */
        pick_color(x: number, y: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_pick_color()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        pick_color_finish(result: Gio.AsyncResult): boolean;
        /**
         * Takes a screenshot of the whole screen
         * in `stream` as png image.
         * @param include_cursor Whether to include the cursor or not
         * @param stream The stream for the screenshot
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot(
            include_cursor: boolean,
            stream: Gio.OutputStream,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Takes a screenshot of the passed in area and saves it
         * in `stream` as png image.
         * @param x The X coordinate of the area
         * @param y The Y coordinate of the area
         * @param width The width of the area
         * @param height The height of the area
         * @param stream The stream for the screenshot
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_area(
            x: number,
            y: number,
            width: number,
            height: number,
            stream: Gio.OutputStream,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot_area()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_area_finish(result: Gio.AsyncResult): boolean;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_finish(result: Gio.AsyncResult): boolean;
        /**
         * Takes a screenshot of the whole screen as #ClutterContent.
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_stage_to_content(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish the asynchronous operation started by
         * shell_screenshot_screenshot_stage_to_content() and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns the #ClutterContent, or NULL
         */
        screenshot_stage_to_content_finish(result: Gio.AsyncResult): Clutter.Content;
        /**
         * Takes a screenshot of the focused window (optionally omitting the frame)
         * in `stream` as png image.
         * @param include_frame Whether to include the frame or not
         * @param include_cursor Whether to include the cursor or not
         * @param stream The stream for the screenshot
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_window(
            include_frame: boolean,
            include_cursor: boolean,
            stream: Gio.OutputStream,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot_window()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_window_finish(result: Gio.AsyncResult): boolean;
    }

    module SecureTextBuffer {
        // Constructor properties interface
    }

    class SecureTextBuffer extends Clutter.TextBuffer {
        // Constructors of Shell-12.SecureTextBuffer

        static ['new'](): SecureTextBuffer;
    }

    module SquareBin {
        // Constructor properties interface
    }

    class SquareBin extends St.Bin {}

    module Stack {
        // Constructor properties interface
    }

    class Stack extends St.Widget {}

    module TrayIcon {
        // Constructor properties interface
    }

    class TrayIcon extends Clutter.Clone {
        // Own properties of Shell-12.TrayIcon

        readonly pid: number;
        readonly title: string;
        readonly wm_class: string;
        readonly wmClass: string;

        // Owm methods of Shell-12.TrayIcon

        /**
         * Fakes a press and release on `icon`. `event` must be a
         * %CLUTTER_BUTTON_RELEASE, %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE event.
         * Its relevant details will be passed on to the icon, but its
         * coordinates will be ignored; the click is
         * always made on the center of `icon`.
         * @param event the #ClutterEvent triggering the fake click
         */
        click(event: Clutter.Event): void;
    }

    module TrayManager {
        // Signal callback interfaces

        interface TrayIconAdded {
            (object: Clutter.Actor): void;
        }

        interface TrayIconRemoved {
            (object: Clutter.Actor): void;
        }

        // Constructor properties interface
    }

    class TrayManager extends GObject.Object {
        // Own properties of Shell-12.TrayManager

        bg_color: Clutter.Color;
        bgColor: Clutter.Color;

        // Constructors of Shell-12.TrayManager

        static ['new'](): TrayManager;

        // Owm methods of Shell-12.TrayManager

        manage_screen(theme_widget: St.Widget): void;
        unmanage_screen(): void;
    }

    module WM {
        // Signal callback interfaces

        interface ConfirmDisplayChange {
            (): void;
        }

        interface CreateCloseDialog {
            (window: Meta.Window): Meta.CloseDialog;
        }

        interface CreateInhibitShortcutsDialog {
            (window: Meta.Window): Meta.InhibitShortcutsDialog;
        }

        interface Destroy {
            (object: Meta.WindowActor): void;
        }

        interface FilterKeybinding {
            (object: Meta.KeyBinding): boolean;
        }

        interface HideTilePreview {
            (): void;
        }

        interface KillSwitchWorkspace {
            (): void;
        }

        interface KillWindowEffects {
            (object: Meta.WindowActor): void;
        }

        interface Map {
            (object: Meta.WindowActor): void;
        }

        interface Minimize {
            (object: Meta.WindowActor): void;
        }

        interface ShowTilePreview {
            (object: Meta.Window, p0: Meta.Rectangle, p1: number): void;
        }

        interface ShowWindowMenu {
            (object: Meta.Window, p0: number, p1: Meta.Rectangle): void;
        }

        interface SizeChange {
            (object: Meta.WindowActor, p0: Meta.SizeChange, p1: Meta.Rectangle, p2: Meta.Rectangle): void;
        }

        interface SizeChanged {
            (object: Meta.WindowActor): void;
        }

        interface SwitchWorkspace {
            (object: number, p0: number, p1: number): void;
        }

        interface Unminimize {
            (object: Meta.WindowActor): void;
        }

        // Constructor properties interface
    }

    class WM extends GObject.Object {
        // Constructors of Shell-12.WM

        static ['new'](plugin: Meta.Plugin): WM;

        // Owm methods of Shell-12.WM

        /**
         * The plugin must call this after the user responded to the confirmation dialog.
         * @param ok if the new configuration was OK
         */
        complete_display_change(ok: boolean): void;
        /**
         * The plugin must call this when it has completed a window destroy effect.
         * @param actor the MetaWindowActor actor
         */
        completed_destroy(actor: Meta.WindowActor): void;
        /**
         * The plugin must call this when it has completed a window map effect.
         * @param actor the MetaWindowActor actor
         */
        completed_map(actor: Meta.WindowActor): void;
        /**
         * The plugin must call this when it has completed a window minimize effect.
         * @param actor the MetaWindowActor actor
         */
        completed_minimize(actor: Meta.WindowActor): void;
        completed_size_change(actor: Meta.WindowActor): void;
        /**
         * The plugin must call this when it has finished switching the
         * workspace.
         */
        completed_switch_workspace(): void;
        /**
         * The plugin must call this when it has completed a window unminimize effect.
         * @param actor the MetaWindowActor actor
         */
        completed_unminimize(actor: Meta.WindowActor): void;
    }

    module WindowPreview {
        // Constructor properties interface
    }

    class WindowPreview extends St.Widget {
        // Own properties of Shell-12.WindowPreview

        window_container: Clutter.Actor;
        windowContainer: Clutter.Actor;
    }

    module WindowPreviewLayout {
        // Constructor properties interface
    }

    class WindowPreviewLayout extends Clutter.LayoutManager {
        // Own properties of Shell-12.WindowPreviewLayout

        readonly bounding_box: Clutter.ActorBox;
        readonly boundingBox: Clutter.ActorBox;

        // Owm methods of Shell-12.WindowPreviewLayout

        /**
         * Creates a ClutterActor drawing the texture of `window` and adds it
         * to the container. If `window` is already part of the preview, this
         * function will do nothing.
         * @param window the #MetaWindow
         * @returns The newly created actor drawing @window
         */
        add_window(window: Meta.Window): Clutter.Actor | null;
        /**
         * Gets an array of all MetaWindows that were added to the layout
         * using shell_window_preview_layout_add_window(), ordered by the
         * insertion order.
         * @returns The list of windows
         */
        get_windows(): Meta.Window[];
        /**
         * Removes a MetaWindow `window` from the preview which has been added
         * previously using shell_window_preview_layout_add_window().
         * If `window` is not part of preview, this function will do nothing.
         * @param window the #MetaWindow
         */
        remove_window(window: Meta.Window): void;
    }

    module WindowTracker {
        // Signal callback interfaces

        interface StartupSequenceChanged {
            (object: Meta.StartupSequence): void;
        }

        interface TrackedWindowsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class WindowTracker extends GObject.Object {
        // Own properties of Shell-12.WindowTracker

        readonly focus_app: App;
        readonly focusApp: App;

        // Owm methods of Shell-12.WindowTracker

        static get_default(): WindowTracker;

        // Owm methods of Shell-12.WindowTracker

        /**
         * Look up the application corresponding to a process.
         * @param pid A Unix process identifier
         * @returns A #ShellApp, or %NULL if none
         */
        get_app_from_pid(pid: number): App;
        get_startup_sequences(): Meta.StartupSequence[];
        get_window_app(metawin: Meta.Window): App;
    }

    module WorkspaceBackground {
        // Constructor properties interface
    }

    class WorkspaceBackground extends St.Widget {
        // Own properties of Shell-12.WorkspaceBackground

        monitor_index: number;
        monitorIndex: number;
        state_adjustment_value: number;
        stateAdjustmentValue: number;
    }

    class AppClass {}

    class AppSystemClass {}

    class AppUsageClass {}

    class BlurEffectClass {}

    class GLSLEffectClass {
        // Own fields of Shell-12.GLSLEffectClass

        base_pipeline: Cogl.Pipeline;
    }

    class GlobalClass {}

    class InvertLightnessEffectClass {}

    class KeyringPromptClass {}

    class MemoryInfo {
        // Own fields of Shell-12.MemoryInfo

        glibc_uordblks: number;
        js_bytes: number;
        gjs_boxed: number;
        gjs_gobject: number;
        gjs_function: number;
        gjs_closure: number;
        last_gc_seconds_ago: number;

        // Constructors of Shell-12.MemoryInfo

        constructor(
            properties?: Partial<{
                glibc_uordblks: number;
                js_bytes: number;
                gjs_boxed: number;
                gjs_gobject: number;
                gjs_function: number;
                gjs_closure: number;
                last_gc_seconds_ago: number;
            }>,
        );
    }

    class MountOperationClass {}

    class NetworkAgentClass {}

    class NetworkAgentPrivate {}

    class PerfLogClass {}

    class PolkitAuthenticationAgentClass {}

    class ScreenshotClass {}

    class SecureTextBufferClass {}

    class SquareBinClass {}

    class StackClass {}

    class TrayIconClass {}

    class TrayManagerClass {}

    class WMClass {}

    class WindowPreviewClass {}

    class WindowPreviewLayoutClass {}

    class WindowPreviewLayoutPrivate {}

    class WindowTrackerClass {}

    class WorkspaceBackgroundClass {}

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

export default Shell;
// END
