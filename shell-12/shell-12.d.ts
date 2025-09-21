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
import type St from '@girs/st-12';
import type Meta from '@girs/meta-12';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-12';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-12';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-12';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Cally from '@girs/cally-12';
import type PolkitAgent from '@girs/polkitagent-1.0';
import type Polkit from '@girs/polkit-1.0';
import type NM from '@girs/nm-1.0';
import type Gvc from '@girs/gvc-1.0';
import type Gcr from '@girs/gcr-4';
import type Gck from '@girs/gck-2';

export namespace Shell {
    /**
     * Shell-12
     */

    export namespace AppLaunchGpu {
        export const $gtype: GObject.GType<AppLaunchGpu>;
    }

    enum AppLaunchGpu {
        APP_PREF,
        DISCRETE,
        DEFAULT,
    }

    export namespace AppState {
        export const $gtype: GObject.GType<AppState>;
    }

    enum AppState {
        STOPPED,
        STARTING,
        RUNNING,
    }
    /**
     * The mode of blurring of the effect.
     */

    /**
     * The mode of blurring of the effect.
     */
    export namespace BlurMode {
        export const $gtype: GObject.GType<BlurMode>;
    }

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

    export namespace NetworkAgentResponse {
        export const $gtype: GObject.GType<NetworkAgentResponse>;
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

    /**
     * Temporary hack to work around Cogl not exporting CoglSnippetHook in
     * the 1.0 API. Don't use.
     */
    export namespace SnippetHook {
        export const $gtype: GObject.GType<SnippetHook>;
    }

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
        data: Uint8Array | string,
        colorspace: GdkPixbuf.Colorspace | null,
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
    ): globalThis.Promise<boolean>;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_systemd_unit_exists(unit: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function util_systemd_unit_exists(
        unit: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_systemd_unit_exists(
        unit: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    function util_systemd_unit_exists_finish(res: Gio.AsyncResult): boolean;
    function util_touch_file_async(file: Gio.File): globalThis.Promise<boolean>;
    function util_touch_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback<Gio.File> | null): void;
    function util_touch_file_async(
        file: Gio.File,
        callback?: Gio.AsyncReadyCallback<Gio.File> | null,
    ): globalThis.Promise<boolean> | void;
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
    function util_wifexited(status: number): [boolean, number];
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
        (time: number, name: string, signature: string, arg: GObject.Value | any): void;
    }
    interface PerfStatisticsCallback {
        (perf_log: PerfLog, data?: any | null): void;
    }
    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     */

    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     */
    export namespace ActionMode {
        export const $gtype: GObject.GType<ActionMode>;
    }

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
    namespace App {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'windows-changed': () => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::app-info': (pspec: GObject.ParamSpec) => void;
            'notify::busy': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action_group: Gio.ActionGroup;
            actionGroup: Gio.ActionGroup;
            app_info: Gio.DesktopAppInfo;
            appInfo: Gio.DesktopAppInfo;
            busy: boolean;
            icon: Gio.Icon;
            id: string;
            state: AppState;
        }
    }

    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        // Properties

        /**
         * The #GDBusActionGroup associated with this ShellApp, if any. See the
         * documentation of #GApplication and #GActionGroup for details.
         */
        get action_group(): Gio.ActionGroup;
        /**
         * The #GDBusActionGroup associated with this ShellApp, if any. See the
         * documentation of #GApplication and #GActionGroup for details.
         */
        get actionGroup(): Gio.ActionGroup;
        /**
         * The #GDesktopAppInfo associated with this ShellApp, if any.
         */
        get app_info(): Gio.DesktopAppInfo;
        /**
         * The #GDesktopAppInfo associated with this ShellApp, if any.
         */
        get appInfo(): Gio.DesktopAppInfo;
        /**
         * Whether the application has marked itself as busy.
         */
        get busy(): boolean;
        /**
         * The #GIcon representing this ShellApp
         */
        get icon(): Gio.Icon;
        /**
         * The id of this application (a desktop filename, or a special string
         * like window:0xabcd1234)
         */
        get id(): string;
        /**
         * The high-level state of the application, effectively whether it's
         * running or not, or transitioning between those states.
         */
        get state(): AppState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof App.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        launch(timestamp: number, workspace: number, gpu_pref: AppLaunchGpu | null): boolean;
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

    namespace AppSystem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'app-state-changed': (arg0: App) => void;
            'installed-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AppSystem extends GObject.Object {
        static $gtype: GObject.GType<AppSystem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppSystem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AppSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AppSystem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppSystem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AppSystem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppSystem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AppSystem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppSystem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): AppSystem;
        /**
         * Wrapper around g_desktop_app_info_search() that replaces results that
         * don't validate as UTF-8 with the empty string.
         * @param search_string the search string to use
         */
        static search(search_string: string): string[][];

        // Methods

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

    namespace AppUsage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AppUsage extends GObject.Object {
        static $gtype: GObject.GType<AppUsage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppUsage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AppUsage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AppUsage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppUsage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AppUsage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppUsage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AppUsage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppUsage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): AppUsage;

        // Methods

        /**
         * Compare `id_a` and `id_b` based on frequency of use.
         * @param id_a ID of first app
         * @param id_b ID of second app
         * @returns -1 if @id_a ranks higher than @id_b, 1 if @id_b ranks higher          than @id_a, and 0 if both rank equally.
         */
        compare(id_a: string, id_b: string): number;
        get_most_used(): App[];
    }

    namespace BlurEffect {
        // Signal signatures
        interface SignalSignatures extends Clutter.Effect.SignalSignatures {
            'notify::brightness': (pspec: GObject.ParamSpec) => void;
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::sigma': (pspec: GObject.ParamSpec) => void;
            'notify::actor': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.Effect.ConstructorProps {
            brightness: number;
            mode: BlurMode;
            sigma: number;
        }
    }

    class BlurEffect extends Clutter.Effect {
        static $gtype: GObject.GType<BlurEffect>;

        // Properties

        get brightness(): number;
        set brightness(val: number);
        get mode(): BlurMode;
        set mode(val: BlurMode);
        get sigma(): number;
        set sigma(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BlurEffect.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BlurEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BlurEffect;

        // Signals

        connect<K extends keyof BlurEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BlurEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BlurEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BlurEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BlurEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BlurEffect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_brightness(): number;
        get_mode(): BlurMode;
        get_sigma(): number;
        set_brightness(brightness: number): void;
        set_mode(mode: BlurMode | null): void;
        set_sigma(sigma: number): void;
    }

    namespace GLSLEffect {
        // Signal signatures
        interface SignalSignatures extends Clutter.OffscreenEffect.SignalSignatures {
            'notify::actor': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.OffscreenEffect.ConstructorProps {}
    }

    class GLSLEffect extends Clutter.OffscreenEffect {
        static $gtype: GObject.GType<GLSLEffect>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLSLEffect.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLSLEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GLSLEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLSLEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLSLEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLSLEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLSLEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLSLEffect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_build_pipeline(): void;

        // Methods

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
        add_glsl_snippet(hook: SnippetHook | null, declarations: string, code: string, is_replace: boolean): void;
        get_uniform_location(name: string): number;
        set_uniform_float(uniform: number, n_components: number, value: number[]): void;
        set_uniform_matrix(uniform: number, transpose: boolean, dimensions: number, value: number[]): void;
    }

    namespace Global {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'locate-pointer': () => void;
            'notify-error': (arg0: string, arg1: string) => void;
            shutdown: () => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::compositor': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::datadir': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::focus-manager': (pspec: GObject.ParamSpec) => void;
            'notify::force-animations': (pspec: GObject.ParamSpec) => void;
            'notify::frame-finish-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::frame-timestamps': (pspec: GObject.ParamSpec) => void;
            'notify::imagedir': (pspec: GObject.ParamSpec) => void;
            'notify::screen-height': (pspec: GObject.ParamSpec) => void;
            'notify::screen-width': (pspec: GObject.ParamSpec) => void;
            'notify::session-mode': (pspec: GObject.ParamSpec) => void;
            'notify::settings': (pspec: GObject.ParamSpec) => void;
            'notify::stage': (pspec: GObject.ParamSpec) => void;
            'notify::switcheroo-control': (pspec: GObject.ParamSpec) => void;
            'notify::top-window-group': (pspec: GObject.ParamSpec) => void;
            'notify::userdatadir': (pspec: GObject.ParamSpec) => void;
            'notify::window-group': (pspec: GObject.ParamSpec) => void;
            'notify::window-manager': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Meta.Backend;
            compositor: Meta.Compositor;
            context: Meta.Context;
            datadir: string;
            display: Meta.Display;
            focus_manager: St.FocusManager;
            focusManager: St.FocusManager;
            force_animations: boolean;
            forceAnimations: boolean;
            frame_finish_timestamp: boolean;
            frameFinishTimestamp: boolean;
            frame_timestamps: boolean;
            frameTimestamps: boolean;
            imagedir: string;
            screen_height: number;
            screenHeight: number;
            screen_width: number;
            screenWidth: number;
            session_mode: string;
            sessionMode: string;
            settings: Gio.Settings;
            stage: Clutter.Actor;
            switcheroo_control: Gio.DBusProxy;
            switcherooControl: Gio.DBusProxy;
            top_window_group: Clutter.Actor;
            topWindowGroup: Clutter.Actor;
            userdatadir: string;
            window_group: Clutter.Actor;
            windowGroup: Clutter.Actor;
            window_manager: WM;
            windowManager: WM;
            workspace_manager: Meta.WorkspaceManager;
            workspaceManager: Meta.WorkspaceManager;
        }
    }

    class Global extends GObject.Object {
        static $gtype: GObject.GType<Global>;

        // Properties

        get backend(): Meta.Backend;
        get compositor(): Meta.Compositor;
        get context(): Meta.Context;
        get datadir(): string;
        get display(): Meta.Display;
        get focus_manager(): St.FocusManager;
        get focusManager(): St.FocusManager;
        get force_animations(): boolean;
        set force_animations(val: boolean);
        get forceAnimations(): boolean;
        set forceAnimations(val: boolean);
        get frame_finish_timestamp(): boolean;
        set frame_finish_timestamp(val: boolean);
        get frameFinishTimestamp(): boolean;
        set frameFinishTimestamp(val: boolean);
        get frame_timestamps(): boolean;
        set frame_timestamps(val: boolean);
        get frameTimestamps(): boolean;
        set frameTimestamps(val: boolean);
        get imagedir(): string;
        get screen_height(): number;
        get screenHeight(): number;
        get screen_width(): number;
        get screenWidth(): number;
        get session_mode(): string;
        get sessionMode(): string;
        get settings(): Gio.Settings;
        get stage(): Clutter.Actor;
        get switcheroo_control(): Gio.DBusProxy;
        get switcherooControl(): Gio.DBusProxy;
        get top_window_group(): Clutter.Actor;
        get topWindowGroup(): Clutter.Actor;
        get userdatadir(): string;
        get window_group(): Clutter.Actor;
        get windowGroup(): Clutter.Actor;
        get window_manager(): WM;
        get windowManager(): WM;
        get workspace_manager(): Meta.WorkspaceManager;
        get workspaceManager(): Meta.WorkspaceManager;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Global.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Global.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Global.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Global.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Global.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Global.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Global.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Global.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the singleton global object that represents the desktop.
         */
        static get(): Global;

        // Methods

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
        get_pointer(): [number, number, Clutter.ModifierType];
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

    namespace InvertLightnessEffect {
        // Signal signatures
        interface SignalSignatures extends Clutter.OffscreenEffect.SignalSignatures {
            'notify::actor': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.OffscreenEffect.ConstructorProps {}
    }

    class InvertLightnessEffect extends Clutter.OffscreenEffect {
        static $gtype: GObject.GType<InvertLightnessEffect>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InvertLightnessEffect.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InvertLightnessEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InvertLightnessEffect;

        // Signals

        connect<K extends keyof InvertLightnessEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InvertLightnessEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InvertLightnessEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InvertLightnessEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InvertLightnessEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InvertLightnessEffect.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace KeyringPrompt {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'show-confirm': () => void;
            'show-password': () => void;
            'notify::choice-visible': (pspec: GObject.ParamSpec) => void;
            'notify::confirm-actor': (pspec: GObject.ParamSpec) => void;
            'notify::confirm-visible': (pspec: GObject.ParamSpec) => void;
            'notify::password-actor': (pspec: GObject.ParamSpec) => void;
            'notify::password-visible': (pspec: GObject.ParamSpec) => void;
            'notify::warning-visible': (pspec: GObject.ParamSpec) => void;
            'notify::caller-window': (pspec: GObject.ParamSpec) => void;
            'notify::cancel-label': (pspec: GObject.ParamSpec) => void;
            'notify::choice-chosen': (pspec: GObject.ParamSpec) => void;
            'notify::choice-label': (pspec: GObject.ParamSpec) => void;
            'notify::continue-label': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::message': (pspec: GObject.ParamSpec) => void;
            'notify::password-new': (pspec: GObject.ParamSpec) => void;
            'notify::password-strength': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::warning': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gcr.Prompt.ConstructorProps {
            choice_visible: boolean;
            choiceVisible: boolean;
            confirm_actor: Clutter.Text;
            confirmActor: Clutter.Text;
            confirm_visible: boolean;
            confirmVisible: boolean;
            password_actor: Clutter.Text;
            passwordActor: Clutter.Text;
            password_visible: boolean;
            passwordVisible: boolean;
            warning_visible: boolean;
            warningVisible: boolean;
        }
    }

    class KeyringPrompt extends GObject.Object implements Gcr.Prompt {
        static $gtype: GObject.GType<KeyringPrompt>;

        // Properties

        /**
         * Whether the choice check box is visible or not.
         */
        get choice_visible(): boolean;
        /**
         * Whether the choice check box is visible or not.
         */
        get choiceVisible(): boolean;
        /**
         * Text field for confirmation password
         */
        get confirm_actor(): Clutter.Text;
        set confirm_actor(val: Clutter.Text);
        /**
         * Text field for confirmation password
         */
        get confirmActor(): Clutter.Text;
        set confirmActor(val: Clutter.Text);
        /**
         * Whether the password confirm entry is visible or not.
         */
        get confirm_visible(): boolean;
        /**
         * Whether the password confirm entry is visible or not.
         */
        get confirmVisible(): boolean;
        /**
         * Text field for password
         */
        get password_actor(): Clutter.Text;
        set password_actor(val: Clutter.Text);
        /**
         * Text field for password
         */
        get passwordActor(): Clutter.Text;
        set passwordActor(val: Clutter.Text);
        /**
         * Whether the password entry is visible or not.
         */
        get password_visible(): boolean;
        /**
         * Whether the password entry is visible or not.
         */
        get passwordVisible(): boolean;
        /**
         * Whether the warning label is visible or not.
         */
        get warning_visible(): boolean;
        /**
         * Whether the warning label is visible or not.
         */
        get warningVisible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyringPrompt.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<KeyringPrompt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): KeyringPrompt;

        // Signals

        connect<K extends keyof KeyringPrompt.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyringPrompt.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KeyringPrompt.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyringPrompt.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KeyringPrompt.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyringPrompt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

        // Inherited properties
        /**
         * The string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         *
         * In X11, this will be a stringified version of the XWindow handle; in
         * Wayland this is the result of an export using the XDG foreign
         * protocol.
         */
        get caller_window(): string;
        set caller_window(val: string);
        /**
         * The string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         *
         * In X11, this will be a stringified version of the XWindow handle; in
         * Wayland this is the result of an export using the XDG foreign
         * protocol.
         */
        get callerWindow(): string;
        set callerWindow(val: string);
        /**
         * The label for the cancel button in the prompt.
         */
        get cancel_label(): string;
        set cancel_label(val: string);
        /**
         * The label for the cancel button in the prompt.
         */
        get cancelLabel(): string;
        set cancelLabel(val: string);
        /**
         * Whether the additional choice is chosen or not.
         *
         * The additional choice would have been setup using #GcrPrompt:choice-label.
         */
        get choice_chosen(): boolean;
        set choice_chosen(val: boolean);
        /**
         * Whether the additional choice is chosen or not.
         *
         * The additional choice would have been setup using #GcrPrompt:choice-label.
         */
        get choiceChosen(): boolean;
        set choiceChosen(val: boolean);
        /**
         * The label for the additional choice.
         *
         * If this is a non-%NULL value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         *
         * If %NULL, then no additional choice is displayed.
         *
         * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
         */
        get choice_label(): string;
        set choice_label(val: string);
        /**
         * The label for the additional choice.
         *
         * If this is a non-%NULL value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         *
         * If %NULL, then no additional choice is displayed.
         *
         * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
         */
        get choiceLabel(): string;
        set choiceLabel(val: string);
        /**
         * The label for the continue button in the prompt.
         */
        get continue_label(): string;
        set continue_label(val: string);
        /**
         * The label for the continue button in the prompt.
         */
        get continueLabel(): string;
        set continueLabel(val: string);
        /**
         * The detailed description of the prompt.
         *
         * A prompt implementation may choose not to display this detailed description.
         * The prompt message should contain relevant information.
         */
        get description(): string;
        set description(val: string);
        /**
         * The prompt message for the user.
         *
         * A prompt implementation should always display this message.
         */
        get message(): string;
        set message(val: string);
        /**
         * Whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         */
        get password_new(): boolean;
        set password_new(val: boolean);
        /**
         * Whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         */
        get passwordNew(): boolean;
        set passwordNew(val: boolean);
        /**
         * Indication of the password strength.
         *
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         *
         * This is only valid after a successful prompt for a password.
         */
        get password_strength(): number;
        /**
         * Indication of the password strength.
         *
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         *
         * This is only valid after a successful prompt for a password.
         */
        get passwordStrength(): number;
        /**
         * The title of the prompt.
         *
         * A prompt implementation may choose not to display the prompt title. The
         * #GcrPrompt:message should contain relevant information.
         */
        get title(): string;
        set title(val: string);
        /**
         * A prompt warning displayed on the prompt, or %NULL for no warning.
         *
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         */
        get warning(): string;
        set warning(val: string);

        // Inherited methods
        /**
         * Closes the prompt so that in can no longer be used to prompt. The various
         * prompt methods will return results as if the user dismissed the prompt.
         *
         * The prompt may also be closed by the implementor of the prompt object.
         *
         * This emits the [signal`Prompt:`:prompt-close] signal on the prompt object.
         */
        close(): void;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this function to
         * represent the question correctly.
         *
         * This method will block until the a response is returned from the prompter.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the reply from the prompt
         */
        confirm(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         */
        confirm_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Gcr.PromptReply>;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        confirm_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gcr.PromptReply> | void;
        /**
         * Complete an operation to prompt for confirmation.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         * @returns the reply from the prompt
         */
        confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this function to
         * represent the question correctly.
         *
         * This method will block until the a response is returned from the prompter
         * and will run a main loop similar to a `gtk_dialog_run()`. The application
         * will remain responsive but care must be taken to handle reentrancy issues.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the reply from the prompt
         */
        confirm_run(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
        /**
         * Get the string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         * @returns a newly allocated string containing the string          handle of the window.
         */
        get_caller_window(): string;
        /**
         * Get the label for the cancel button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
         * from the prompt.
         * @returns a newly allocated string containing the label
         */
        get_cancel_label(): string;
        /**
         * Get whether the additional choice was chosen or not.
         *
         * The additional choice would have been setup using
         * gcr_prompt_set_choice_label().
         * @returns whether chosen
         */
        get_choice_chosen(): boolean;
        /**
         * Get the label for the additional choice.
         *
         * This will be %NULL if no additional choice is being displayed.
         * @returns a newly allocated string containing the additional          choice or %NULL
         */
        get_choice_label(): string;
        /**
         * Get the label for the continue button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
         * from the prompt.
         * @returns a newly allocated string containing the label
         */
        get_continue_label(): string;
        /**
         * Get the detailed description of the prompt.
         *
         * A prompt implementation may choose not to display this detailed description.
         * The prompt message should contain relevant information.
         * @returns a newly allocated string containing the detailed          description of the prompt
         */
        get_description(): string;
        /**
         * Gets the prompt message for the user.
         *
         * A prompt implementation should always display this message.
         * @returns a newly allocated string containing the detailed          description of the prompt
         */
        get_message(): string;
        /**
         * Get whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         * @returns whether in new password mode or not
         */
        get_password_new(): boolean;
        /**
         * Get indication of the password strength.
         *
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         *
         * This is only valid after a successful prompt for a password.
         * @returns zero if the password is empty, greater than zero if not
         */
        get_password_strength(): number;
        /**
         * Gets the title of the prompt.
         *
         * A prompt implementation may choose not to display the prompt title. The
         * prompt message should contain relevant information.
         * @returns a newly allocated string containing the prompt          title.
         */
        get_title(): string;
        /**
         * Get a prompt warning displayed on the prompt.
         *
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         *
         * If this string is %NULL then no warning is displayed.
         * @returns a newly allocated string containing the prompt          warning, or %NULL if no warning
         */
        get_warning(): string;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will block until the a response is returned from the prompter.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the password owned by the prompt, or %NULL
         */
        password(cancellable?: Gio.Cancellable | null): string;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         */
        password_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        password_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Complete an operation to prompt for a password.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         * @returns the password owned by the prompt, or %NULL
         */
        password_finish(result: Gio.AsyncResult): string;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will block until the a response is returned from the prompter
         * and will run a main loop similar to a gtk_dialog_run(). The application
         * will remain responsive but care must be taken to handle reentrancy issues.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the password owned by the prompt, or %NULL
         */
        password_run(cancellable?: Gio.Cancellable | null): string;
        /**
         * Reset the contents and properties of the prompt.
         */
        reset(): void;
        /**
         * Set the string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         * @param window_id the window id
         */
        set_caller_window(window_id: string): void;
        /**
         * Set the label for the continue button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
         * from the prompt.
         * @param cancel_label the label
         */
        set_cancel_label(cancel_label: string): void;
        /**
         * Set whether the additional choice is chosen or not.
         *
         * The additional choice should be set up using gcr_prompt_set_choice_label().
         * @param chosen whether chosen
         */
        set_choice_chosen(chosen: boolean): void;
        /**
         * Set the label for the additional choice.
         *
         * If this is a non-%NULL value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         *
         * The initial value of the choice can be set with the
         * gcr_prompt_set_choice_label() method.
         *
         * If this is %NULL, then no additional choice is being displayed.
         * @param choice_label the additional choice or %NULL
         */
        set_choice_label(choice_label?: string | null): void;
        /**
         * Set the label for the continue button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
         * from the prompt.
         * @param continue_label the label
         */
        set_continue_label(continue_label: string): void;
        /**
         * Set the detailed description of the prompt.
         *
         * A prompt implementation may choose not to display this detailed description.
         * Use gcr_prompt_set_message() to set a general message containing relevant
         * information.
         * @param description the detailed description
         */
        set_description(description: string): void;
        /**
         * Sets the prompt message for the user.
         *
         * A prompt implementation should always display this message.
         * @param message the prompt message
         */
        set_message(message: string): void;
        /**
         * Set whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         * @param new_password whether in new password mode or not
         */
        set_password_new(new_password: boolean): void;
        /**
         * Sets the title of the prompt.
         *
         * A prompt implementation may choose not to display the prompt title. The
         * prompt message should contain relevant information.
         * @param title the prompt title
         */
        set_title(title: string): void;
        /**
         * Set a prompt warning displayed on the prompt.
         *
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         *
         * If this string is %NULL then no warning is displayed.
         * @param warning the warning or %NULL
         */
        set_warning(warning?: string | null): void;
        /**
         * close a prompt
         */
        vfunc_prompt_close(): void;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        vfunc_prompt_confirm_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Complete an operation to prompt for confirmation.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         */
        vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        vfunc_prompt_password_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Complete an operation to prompt for a password.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         */
        vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
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

    namespace MountOperation {
        // Signal signatures
        interface SignalSignatures extends Gio.MountOperation.SignalSignatures {
            'show-processes-2': () => void;
            'notify::anonymous': (pspec: GObject.ParamSpec) => void;
            'notify::choice': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::is-tcrypt-hidden-volume': (pspec: GObject.ParamSpec) => void;
            'notify::is-tcrypt-system-volume': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::password-save': (pspec: GObject.ParamSpec) => void;
            'notify::pim': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.MountOperation.ConstructorProps {}
    }

    class MountOperation extends Gio.MountOperation {
        static $gtype: GObject.GType<MountOperation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MountOperation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MountOperation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MountOperation;

        // Signals

        connect<K extends keyof MountOperation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MountOperation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MountOperation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MountOperation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MountOperation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MountOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_show_processes_choices(): string[];
        get_show_processes_message(): string;
        get_show_processes_pids(): GLib.Pid[];
    }

    namespace NetworkAgent {
        // Signal signatures
        interface SignalSignatures extends NM.SecretAgentOld.SignalSignatures {
            'cancel-request': (arg0: string) => void;
            'new-request': (arg0: string, arg1: NM.Connection, arg2: string, arg3: string[], arg4: number) => void;
            'notify::auto-register': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-connection': (pspec: GObject.ParamSpec) => void;
            'notify::identifier': (pspec: GObject.ParamSpec) => void;
            'notify::registered': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends NM.SecretAgentOld.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    class NetworkAgent extends NM.SecretAgentOld implements Gio.AsyncInitable<NetworkAgent>, Gio.Initable {
        static $gtype: GObject.GType<NetworkAgent>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkAgent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkAgent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NetworkAgent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkAgent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkAgent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkAgent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkAgent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkAgent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_vpn_secret(request_id: string, setting_key: string, setting_value: string): void;
        respond(request_id: string, response: NetworkAgentResponse | null): void;
        search_vpn_plugin(service: string): globalThis.Promise<NM.VpnPluginInfo | null>;
        search_vpn_plugin(service: string, callback: Gio.AsyncReadyCallback<this> | null): void;
        search_vpn_plugin(
            service: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<NM.VpnPluginInfo | null> | void;
        search_vpn_plugin_finish(result: Gio.AsyncResult): NM.VpnPluginInfo | null;
        set_password(request_id: string, setting_key: string, setting_value: string): void;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): NetworkAgent;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

    namespace PerfLog {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PerfLog extends GObject.Object {
        static $gtype: GObject.GType<PerfLog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PerfLog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PerfLog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PerfLog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PerfLog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PerfLog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PerfLog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PerfLog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PerfLog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the global singleton performance log. This is initially disabled
         * and must be explicitly enabled with shell_perf_log_set_enabled().
         */
        static get_default(): PerfLog;

        // Methods

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

    namespace PolkitAuthenticationAgent {
        // Signal signatures
        interface SignalSignatures extends PolkitAgent.Listener.SignalSignatures {
            cancel: () => void;
            initiate: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: string[]) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PolkitAgent.Listener.ConstructorProps {}
    }

    class PolkitAuthenticationAgent extends PolkitAgent.Listener {
        static $gtype: GObject.GType<PolkitAuthenticationAgent>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PolkitAuthenticationAgent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PolkitAuthenticationAgent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PolkitAuthenticationAgent;

        // Signals

        connect<K extends keyof PolkitAuthenticationAgent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PolkitAuthenticationAgent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PolkitAuthenticationAgent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PolkitAuthenticationAgent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PolkitAuthenticationAgent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PolkitAuthenticationAgent.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        complete(dismissed: boolean): void;
        register(): void;
        // Conflicted with PolkitAgent.Listener.register
        register(...args: never[]): any;
        unregister(): void;
    }

    namespace Screenshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'screenshot-taken': (arg0: Meta.Rectangle) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Screenshot extends GObject.Object {
        static $gtype: GObject.GType<Screenshot>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screenshot.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Screenshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Screenshot;

        // Signals

        connect<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Screenshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

        // Methods

        /**
         * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
         * @param x The X coordinate to pick
         * @param y The Y coordinate to pick
         */
        pick_color(x: number, y: number): globalThis.Promise<Clutter.Color>;
        /**
         * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
         * @param x The X coordinate to pick
         * @param y The Y coordinate to pick
         * @param callback function to call returning success or failure of the async grabbing
         */
        pick_color(x: number, y: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
         * @param x The X coordinate to pick
         * @param y The Y coordinate to pick
         * @param callback function to call returning success or failure of the async grabbing
         */
        pick_color(
            x: number,
            y: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Clutter.Color> | void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_pick_color()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        pick_color_finish(result: Gio.AsyncResult): [boolean, Clutter.Color];
        /**
         * Takes a screenshot of the whole screen
         * in `stream` as png image.
         * @param include_cursor Whether to include the cursor or not
         * @param stream The stream for the screenshot
         */
        screenshot(include_cursor: boolean, stream: Gio.OutputStream): globalThis.Promise<cairo.RectangleInt>;
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
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<cairo.RectangleInt> | void;
        /**
         * Takes a screenshot of the passed in area and saves it
         * in `stream` as png image.
         * @param x The X coordinate of the area
         * @param y The Y coordinate of the area
         * @param width The width of the area
         * @param height The height of the area
         * @param stream The stream for the screenshot
         */
        screenshot_area(
            x: number,
            y: number,
            width: number,
            height: number,
            stream: Gio.OutputStream,
        ): globalThis.Promise<cairo.RectangleInt>;
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
            callback: Gio.AsyncReadyCallback<this> | null,
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
        ): globalThis.Promise<cairo.RectangleInt> | void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot_area()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_area_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
        /**
         * Takes a screenshot of the whole screen as #ClutterContent.
         */
        screenshot_stage_to_content(): globalThis.Promise<
            [Clutter.Content, number, Clutter.Content | null, Graphene.Point | null, number]
        >;
        /**
         * Takes a screenshot of the whole screen as #ClutterContent.
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_stage_to_content(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Takes a screenshot of the whole screen as #ClutterContent.
         * @param callback function to call returning success or failure of the async grabbing
         */
        screenshot_stage_to_content(
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Clutter.Content, number, Clutter.Content | null, Graphene.Point | null, number]> | void;
        /**
         * Finish the asynchronous operation started by
         * shell_screenshot_screenshot_stage_to_content() and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns the #ClutterContent, or NULL
         */
        screenshot_stage_to_content_finish(
            result: Gio.AsyncResult,
        ): [Clutter.Content, number, Clutter.Content | null, Graphene.Point | null, number];
        /**
         * Takes a screenshot of the focused window (optionally omitting the frame)
         * in `stream` as png image.
         * @param include_frame Whether to include the frame or not
         * @param include_cursor Whether to include the cursor or not
         * @param stream The stream for the screenshot
         */
        screenshot_window(
            include_frame: boolean,
            include_cursor: boolean,
            stream: Gio.OutputStream,
        ): globalThis.Promise<cairo.RectangleInt>;
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
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<cairo.RectangleInt> | void;
        /**
         * Finish the asynchronous operation started by shell_screenshot_screenshot_window()
         * and obtain its result.
         * @param result the #GAsyncResult that was provided to the callback
         * @returns whether the operation was successful
         */
        screenshot_window_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
    }

    namespace SecureTextBuffer {
        // Signal signatures
        interface SignalSignatures extends Clutter.TextBuffer.SignalSignatures {
            'notify::length': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.TextBuffer.ConstructorProps {}
    }

    class SecureTextBuffer extends Clutter.TextBuffer {
        static $gtype: GObject.GType<SecureTextBuffer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SecureTextBuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SecureTextBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SecureTextBuffer;

        // Signals

        connect<K extends keyof SecureTextBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecureTextBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SecureTextBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecureTextBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SecureTextBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SecureTextBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SquareBin {
        // Signal signatures
        interface SignalSignatures extends St.Bin.SignalSignatures {
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends St.Bin.ConstructorProps<A>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    class SquareBin<A extends Clutter.Actor = Clutter.Actor>
        extends St.Bin<A>
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
    {
        static $gtype: GObject.GType<SquareBin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SquareBin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SquareBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SquareBin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SquareBin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SquareBin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SquareBin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SquareBin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SquareBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: A): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: A): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): A;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
         */
        get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: A): void;
        vfunc_actor_added(actor: A): void;
        vfunc_actor_removed(actor: A): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: A): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: A): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: A): void;
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

    namespace Stack {
        // Signal signatures
        interface SignalSignatures extends St.Widget.SignalSignatures {
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends St.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    class Stack<A extends Clutter.Actor = Clutter.Actor>
        extends St.Widget
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
    {
        static $gtype: GObject.GType<Stack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Stack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: A): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: A): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): A;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
         */
        get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: A): void;
        vfunc_actor_added(actor: A): void;
        vfunc_actor_removed(actor: A): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: A): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: A): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: A): void;
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

    namespace TrayIcon {
        // Signal signatures
        interface SignalSignatures extends Clutter.Clone.SignalSignatures {
            'notify::pid': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::wm-class': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends Clutter.Clone.ConstructorProps<A>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            pid: number;
            title: string;
            wm_class: string;
            wmClass: string;
        }
    }

    class TrayIcon<A extends Clutter.Actor = Clutter.Actor>
        extends Clutter.Clone<A>
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
    {
        static $gtype: GObject.GType<TrayIcon>;

        // Properties

        get pid(): number;
        get title(): string;
        get wm_class(): string;
        get wmClass(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrayIcon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrayIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TrayIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrayIcon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TrayIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrayIcon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TrayIcon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrayIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fakes a press and release on `icon`. `event` must be a
         * %CLUTTER_BUTTON_RELEASE, %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE event.
         * Its relevant details will be passed on to the icon, but its
         * coordinates will be ignored; the click is
         * always made on the center of `icon`.
         * @param event the #ClutterEvent triggering the fake click
         */
        click(event: Clutter.Event): void;

        // Inherited methods
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: A): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: A): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): A;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
         */
        get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: A): void;
        vfunc_actor_added(actor: A): void;
        vfunc_actor_removed(actor: A): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: A): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: A): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: A): void;
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

    namespace TrayManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'tray-icon-added': (arg0: Clutter.Actor) => void;
            'tray-icon-removed': (arg0: Clutter.Actor) => void;
            'notify::bg-color': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bg_color: Clutter.Color;
            bgColor: Clutter.Color;
        }
    }

    class TrayManager extends GObject.Object {
        static $gtype: GObject.GType<TrayManager>;

        // Properties

        get bg_color(): Clutter.Color;
        get bgColor(): Clutter.Color;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrayManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TrayManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TrayManager;

        // Signals

        connect<K extends keyof TrayManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrayManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TrayManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrayManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TrayManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrayManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        manage_screen(theme_widget: St.Widget): void;
        unmanage_screen(): void;
    }

    namespace WM {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'confirm-display-change': () => void;
            'create-close-dialog': (arg0: Meta.Window) => Meta.CloseDialog;
            'create-inhibit-shortcuts-dialog': (arg0: Meta.Window) => Meta.InhibitShortcutsDialog;
            destroy: (arg0: Meta.WindowActor) => void;
            'filter-keybinding': (arg0: Meta.KeyBinding) => boolean | void;
            'hide-tile-preview': () => void;
            'kill-switch-workspace': () => void;
            'kill-window-effects': (arg0: Meta.WindowActor) => void;
            map: (arg0: Meta.WindowActor) => void;
            minimize: (arg0: Meta.WindowActor) => void;
            'show-tile-preview': (arg0: Meta.Window, arg1: Meta.Rectangle, arg2: number) => void;
            'show-window-menu': (arg0: Meta.Window, arg1: number, arg2: Meta.Rectangle) => void;
            'size-change': (
                arg0: Meta.WindowActor,
                arg1: Meta.SizeChange,
                arg2: Meta.Rectangle,
                arg3: Meta.Rectangle,
            ) => void;
            'size-changed': (arg0: Meta.WindowActor) => void;
            'switch-workspace': (arg0: number, arg1: number, arg2: number) => void;
            unminimize: (arg0: Meta.WindowActor) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class WM extends GObject.Object {
        static $gtype: GObject.GType<WM>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WM.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WM.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](plugin: Meta.Plugin): WM;

        // Signals

        connect<K extends keyof WM.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WM.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WM.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WM.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WM.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WM.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace WindowPreview {
        // Signal signatures
        interface SignalSignatures extends St.Widget.SignalSignatures {
            'notify::window-container': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends St.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            window_container: Clutter.Actor;
            windowContainer: Clutter.Actor;
        }
    }

    class WindowPreview<A extends Clutter.Actor = Clutter.Actor>
        extends St.Widget
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
    {
        static $gtype: GObject.GType<WindowPreview>;

        // Properties

        get window_container(): Clutter.Actor;
        set window_container(val: Clutter.Actor);
        get windowContainer(): Clutter.Actor;
        set windowContainer(val: Clutter.Actor);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowPreview.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WindowPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: A): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: A): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): A;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
         */
        get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: A): void;
        vfunc_actor_added(actor: A): void;
        vfunc_actor_removed(actor: A): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: A): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: A): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: A): void;
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

    namespace WindowPreviewLayout {
        // Signal signatures
        interface SignalSignatures extends Clutter.LayoutManager.SignalSignatures {
            'notify::bounding-box': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.LayoutManager.ConstructorProps {
            bounding_box: Clutter.ActorBox;
            boundingBox: Clutter.ActorBox;
        }
    }

    class WindowPreviewLayout extends Clutter.LayoutManager {
        static $gtype: GObject.GType<WindowPreviewLayout>;

        // Properties

        get bounding_box(): Clutter.ActorBox;
        get boundingBox(): Clutter.ActorBox;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowPreviewLayout.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowPreviewLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WindowPreviewLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowPreviewLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowPreviewLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowPreviewLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowPreviewLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowPreviewLayout.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace WindowTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'startup-sequence-changed': (arg0: Meta.StartupSequence) => void;
            'tracked-windows-changed': () => void;
            'notify::focus-app': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            focus_app: App;
            focusApp: App;
        }
    }

    class WindowTracker extends GObject.Object {
        static $gtype: GObject.GType<WindowTracker>;

        // Properties

        get focus_app(): App;
        get focusApp(): App;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowTracker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowTracker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WindowTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowTracker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowTracker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowTracker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowTracker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): WindowTracker;

        // Methods

        /**
         * Look up the application corresponding to a process.
         * @param pid A Unix process identifier
         * @returns A #ShellApp, or %NULL if none
         */
        get_app_from_pid(pid: number): App;
        get_startup_sequences(): Meta.StartupSequence[];
        get_window_app(metawin: Meta.Window): App;
    }

    namespace WorkspaceBackground {
        // Signal signatures
        interface SignalSignatures extends St.Widget.SignalSignatures {
            'notify::monitor-index': (pspec: GObject.ParamSpec) => void;
            'notify::state-adjustment-value': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends St.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            monitor_index: number;
            monitorIndex: number;
            state_adjustment_value: number;
            stateAdjustmentValue: number;
        }
    }

    class WorkspaceBackground<A extends Clutter.Actor = Clutter.Actor>
        extends St.Widget
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
    {
        static $gtype: GObject.GType<WorkspaceBackground>;

        // Properties

        get monitor_index(): number;
        get monitorIndex(): number;
        get state_adjustment_value(): number;
        set state_adjustment_value(val: number);
        get stateAdjustmentValue(): number;
        set stateAdjustmentValue(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceBackground.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceBackground.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WorkspaceBackground.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceBackground.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WorkspaceBackground.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceBackground.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WorkspaceBackground.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceBackground.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: A): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: A, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: A): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): A;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
         */
        get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: A): void;
        vfunc_actor_added(actor: A): void;
        vfunc_actor_removed(actor: A): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: A): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: A): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: A): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: A): void;
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

    type AppClass = typeof App;
    type AppSystemClass = typeof AppSystem;
    type AppUsageClass = typeof AppUsage;
    type BlurEffectClass = typeof BlurEffect;
    type GLSLEffectClass = typeof GLSLEffect;
    type GlobalClass = typeof Global;
    type InvertLightnessEffectClass = typeof InvertLightnessEffect;
    type KeyringPromptClass = typeof KeyringPrompt;
    class MemoryInfo {
        static $gtype: GObject.GType<MemoryInfo>;

        // Fields

        glibc_uordblks: number;
        js_bytes: number;
        gjs_boxed: number;
        gjs_gobject: number;
        gjs_function: number;
        gjs_closure: number;
        last_gc_seconds_ago: number;

        // Constructors

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
        _init(...args: any[]): void;
    }

    type MountOperationClass = typeof MountOperation;
    type NetworkAgentClass = typeof NetworkAgent;
    abstract class NetworkAgentPrivate {
        static $gtype: GObject.GType<NetworkAgentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PerfLogClass = typeof PerfLog;
    type PolkitAuthenticationAgentClass = typeof PolkitAuthenticationAgent;
    type ScreenshotClass = typeof Screenshot;
    type SecureTextBufferClass = typeof SecureTextBuffer;
    type SquareBinClass = typeof SquareBin;
    type StackClass = typeof Stack;
    type TrayIconClass = typeof TrayIcon;
    type TrayManagerClass = typeof TrayManager;
    type WMClass = typeof WM;
    type WindowPreviewClass = typeof WindowPreview;
    type WindowPreviewLayoutClass = typeof WindowPreviewLayout;
    abstract class WindowPreviewLayoutPrivate {
        static $gtype: GObject.GType<WindowPreviewLayoutPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WindowTrackerClass = typeof WindowTracker;
    type WorkspaceBackgroundClass = typeof WorkspaceBackground;
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
