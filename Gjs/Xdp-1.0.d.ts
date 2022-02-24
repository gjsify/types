/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Xdp-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Xdp {

/**
 * The XdpButtonState enumeration is used to describe
 * the state of buttons.
 */
enum ButtonState {
    /**
     * the button is down
     */
    RELEASED,
    /**
     * the button is up
     */
    PRESSED,
}
enum CameraFlags {
    NONE,
}
/**
 * The XdpDiscreteAxis enumeration is used to describe
 * the discrete scroll axes.
 */
enum DiscreteAxis {
    /**
     * the horizontal scroll axis
     */
    HORIZONTAL_SCROLL,
    /**
     * the horizontal scroll axis
     */
    VERTICAL_SCROLL,
}
enum EmailFlags {
    NONE,
}
/**
 * The XdpKeyState enumeration is used to describe
 * the state of keys.
 */
enum KeyState {
    /**
     * the key is down
     */
    RELEASED,
    /**
     * the key is up
     */
    PRESSED,
}
/**
 * The values of this enum indicate the desired level
 * of accuracy for location information.
 */
enum LocationAccuracy {
    /**
     * No particular accuracy
     */
    NONE,
    /**
     * Country-level accuracy
     */
    COUNTRY,
    /**
     * City-level accuracy
     */
    CITY,
    /**
     * Neighborhood-level accuracy
     */
    NEIGHBORHOOD,
    /**
     * Street-level accuracy
     */
    STREET,
    /**
     * Maximum accuracy
     */
    EXACT,
}
enum LocationMonitorFlags {
    NONE,
}
/**
 * The values of this enum are returned in the [signal`Portal:`:session-state-changed] signal
 * to indicate the current state of the user session.
 */
enum LoginSessionState {
    /**
     * the session is running
     */
    RUNNING,
    /**
     * the session is in the query end phase,
     *     during which applications can save their state or inhibit the
     *     session from ending
     */
    QUERY_END,
    /**
     * the session is about to end
     */
    ENDING,
}
enum NotificationFlags {
    NONE,
}
/**
 * Options for how the screencast session should persist.
 */
enum PersistMode {
    /**
     * do not persist
     */
    NONE,
    /**
     * persist as long as the application is alive
     */
    TRANSIENT,
    /**
     * persist until the user revokes this permission
     */
    PERSISTENT,
}
enum PrintFlags {
    NONE,
}
enum SaveFileFlags {
    NONE,
}
enum SessionMonitorFlags {
    NONE,
}
/**
 * The state of a session.
 */
enum SessionState {
    /**
     * the session has not been started.
     */
    INITIAL,
    /**
     * the session is active.
     */
    ACTIVE,
    /**
     * the session is no longer active.
     */
    CLOSED,
}
/**
 * The type of a session.
 */
enum SessionType {
    /**
     * a screencast session.
     */
    SCREENCAST,
    /**
     * a remote desktop session.
     */
    REMOTE_DESKTOP,
}
enum UpdateInstallFlags {
    NONE,
}
enum UpdateMonitorFlags {
    NONE,
}
/**
 * The values of this enum are returned in the
 * [signal`Portal:`:update-progress] signal to indicate
 * the current progress of an installation.
 */
enum UpdateStatus {
    /**
     * Installation in progress
     */
    RUNNING,
    /**
     * Nothing to install
     */
    EMPTY,
    /**
     * Installation finished successfully
     */
    DONE,
    /**
     * Installation failed
     */
    FAILED,
}
enum UserInformationFlags {
    NONE,
}
/**
 * Options to use when requesting background.
 */
enum BackgroundFlags {
    /**
     * No options
     */
    NONE,
    /**
     * Request autostart as well
     */
    AUTOSTART,
    /**
     * Whether the application is D-Bus-activatable
     */
    ACTIVATABLE,
}
/**
 * Options for how the cursor is handled.
 */
enum CursorMode {
    /**
     * no cursor
     */
    HIDDEN,
    /**
     * cursor is embedded on the stream
     */
    EMBEDDED,
    /**
     * cursor is sent as metadata of the stream
     */
    METADATA,
}
/**
 * Flags to specify what input devices to control for a remote desktop session.
 */
enum DeviceType {
    /**
     * no device
     */
    NONE,
    /**
     * control the keyboard.
     */
    KEYBOARD,
    /**
     * control the pointer.
     */
    POINTER,
    /**
     * control the touchscreen.
     */
    TOUCHSCREEN,
}
/**
 * Flags that determine what session status changes are inhibited.
 */
enum InhibitFlags {
    /**
     * Inhibit logout
     */
    LOGOUT,
    /**
     * Inhibit user switching
     */
    USER_SWITCH,
    /**
     * Inhibit suspend
     */
    SUSPEND,
    /**
     * Inhibit the session going idle
     */
    IDLE,
}
/**
 * Options for opening files.
 */
enum OpenFileFlags {
    /**
     * No options
     */
    NONE,
    /**
     * Allow selecting multiple files
     */
    MULTIPLE,
}
enum OpenUriFlags {
    NONE,
    ASK,
    WRITABLE,
}
/**
 * Flags to specify what kind of sources to offer for a screencast session.
 */
enum OutputType {
    /**
     * allow selecting monitors
     */
    MONITOR,
    /**
     * allow selecting individual application windows
     */
    WINDOW,
    /**
     * allow creating new virtual displays
     */
    VIRTUAL,
}
/**
 * Options for starting remote desktop sessions.
 */
enum RemoteDesktopFlags {
    /**
     * No options
     */
    NONE,
    /**
     * allow opening multiple streams
     */
    MULTIPLE,
}
/**
 * Options for starting screen casts.
 */
enum ScreencastFlags {
    /**
     * No options
     */
    NONE,
    /**
     * allow opening multiple streams
     */
    MULTIPLE,
}
enum ScreenshotFlags {
    NONE,
    INTERACTIVE,
}
/**
 * Flags influencing the spawn operation and how the
 * new sandbox is created.
 */
enum SpawnFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Clear the environment
     */
    CLEARENV,
    /**
     * Spawn the latest version of the app
     */
    LATEST,
    /**
     * Spawn in a sandbox (equivalent to the --sandbox option of flatpak run)
     */
    SANDBOX,
    /**
     * Spawn without network (equivalent to the --unshare=network option of flatpak run)
     */
    NO_NETWORK,
    /**
     * Kill the sandbox when the caller disappears from the session bus
     */
    WATCH,
}
/**
 * The values of this enumeration determine where the wallpaper is being set.
 */
enum WallpaperFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Set wallpaper on the desktop background
     */
    BACKGROUND,
    /**
     * Set wallpaper on the lockscreen
     */
    LOCKSCREEN,
    /**
     * Request the preview to be shown
     */
    PREVIEW,
}
const WALLPAPER_TARGET_BOTH: number
interface Portal_ConstructProps extends GObject.Object_ConstructProps {
}
class Portal {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Xdp-1.0.Xdp.Portal */
    /**
     * Request access to a camera.
     * 
     * When the request is done, `callback` will be called.
     * You can then call [method`Portal`.access_camera_finish]
     * to get the results.
     */
    access_camera(parent: Parent | null, flags: CameraFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a camera acess request, and returns
     * the result as a boolean.
     * 
     * If the access was granted, you can then call
     * [method`Portal`.open_pipewire_remote_for_camera]
     * to obtain a pipewire remote.
     */
    access_camera_finish(result: Gio.AsyncResult): boolean
    /**
     * Sends a desktop notification.
     * 
     * The following keys may be present in `notification:`
     * 
     * - title `s`: a user-visible string to display as title
     * - body `s`: a user-visible string to display as body
     * - icon `v`: a serialized icon (in the format produced by [method`Gio`.Icon.serialize])
     * - priority `s`: "low", "normal", "high" or "urgent"
     * - default-action `s`: name of an action that
     *     will be activated when the user clicks on the notification
     * - default-action-target `v`: target parameter to send along when
     *     activating the default action.
     * - buttons `aa{sv}`: array of serialized buttons
     * 
     * Each serialized button is a dictionary with the following supported keys:
     * 
     * - label `s`: user-visible lable for the button. Mandatory
     * - action `s`: name of an action that will be activated when
     *     the user clicks on the button. Mandatory
     * - target `v`: target parameter to send along when activating
     *     the button
     * 
     * Actions with a prefix of "app." are assumed to be exported by the
     * application and will be activated via the org.freedesktop.Application
     * interface, others are activated by emitting the
     * [signal`Portal:`:notification-action-invoked] signal.
     * 
     * It is the callers responsibility to ensure that the ID is unique
     * among all notifications.
     * 
     * To withdraw a notification, use [method`Portal`.remove_notification].
     */
    add_notification(id: string, notification: GLib.Variant, flags: NotificationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the notification request, and returns the result
     * as a boolean.
     */
    add_notification_finish(result: Gio.AsyncResult): boolean
    /**
     * Presents a window that lets the user compose an email,
     * with some pre-filled information.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.compose_email_finish] to get the results.
     */
    compose_email(parent: Parent | null, addresses: string[] | null, cc: string[] | null, bcc: string[] | null, subject: string | null, body: string | null, attachments: string[] | null, flags: EmailFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the compose-email request.
     */
    compose_email_finish(result: Gio.AsyncResult): boolean
    /**
     * Creates a session for remote desktop.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.create_remote_desktop_session_finish] to get the results.
     */
    create_remote_desktop_session(devices: DeviceType, outputs: OutputType, flags: RemoteDesktopFlags, cursor_mode: CursorMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the create-remote-desktop request, and returns an [class`Session]`.
     */
    create_remote_desktop_session_finish(result: Gio.AsyncResult): Session
    /**
     * Creates a session for a screencast.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.create_screencast_session_finish] to get the results.
     */
    create_screencast_session(outputs: OutputType, flags: ScreencastFlags, cursor_mode: CursorMode, persist_mode: PersistMode, restore_token?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the create-screencast request, and returns an [class`Session]`.
     */
    create_screencast_session_finish(result: Gio.AsyncResult): Session
    /**
     * Gets information about the user.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.get_user_information_finish] to get the results.
     */
    get_user_information(parent: Parent | null, reason: string | null, flags: UserInformationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the get-user-information request, and returns
     * the result in the form of a [struct`GLib`.Variant] dictionary containing
     * the following fields:
     * 
     * - id `s`: the user ID
     * - name `s`: the users real name
     * - image `s`: the uri of an image file for the users avatar picture
     */
    get_user_information_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Returns whether any camera are present.
     */
    is_camera_present(): boolean
    /**
     * Makes XdpPortal start monitoring location changes.
     * 
     * When the location changes, the [signal`Portal:`:location-updated].
     * signal is emitted.
     * 
     * Use [method`Portal`.location_monitor_stop] to stop monitoring.
     * 
     * Note that [class`Portal]` only maintains a single location monitor
     * at a time. If you want to change the `distance_threshold,`
     * `time_threshold` or `accuracy` of the current monitor, you
     * first have to call [method`Portal`.location_monitor_stop] to
     * stop monitoring.
     */
    location_monitor_start(parent: Parent | null, distance_threshold: number, time_threshold: number, accuracy: LocationAccuracy, flags: LocationMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a location-monitor request, and returns
     * the result in the form of boolean.
     */
    location_monitor_start_finish(result: Gio.AsyncResult): boolean
    /**
     * Stops location monitoring that was started with
     * [method`Portal`.location_monitor_start].
     */
    location_monitor_stop(): void
    /**
     * Opens the directory containing the file specified by the `uri`. which
     * must be a file: uri pointing to a file that the application has access
     * to.
     */
    open_directory(parent: Parent, uri: string, flags: OpenUriFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-directory request, and returns
     * the result in the form of a boolean.
     */
    open_directory_finish(result: Gio.AsyncResult): boolean
    /**
     * Asks the user to open one or more files.
     * 
     * The format for the `filters` argument is `a(sa(us))`.
     * Each item in the array specifies a single filter to offer to the user.
     * The first string is a user-visible name for the filter. The `a(us)`
     * specifies a list of filter strings, which can be either a glob pattern
     * (indicated by 0) or a mimetype (indicated by 1).
     * 
     * Example: `[('Images', [(0, '*.ico'), (1, 'image/png')]), ('Text', [(0, '*.txt')])]`
     * 
     * The format for the `choices` argument is `a(ssa(ss)s)`.
     * For each element, the first string is an ID that will be returned
     * with the response, te second string is a user-visible label. The
     * `a(ss)` is the list of choices, each being a is an ID and a
     * user-visible label. The final string is the initial selection,
     * or `""`, to let the portal decide which choice will be initially selected.
     * None of the strings, except for the initial selection, should be empty.
     * 
     * As a special case, passing an empty array for the list of choices
     * indicates a boolean choice that is typically displayed as a check
     * button, using `"true"` and `"false"` as the choices.
     * 
     * Example: `[('encoding', 'Encoding', [('utf8', 'Unicode (UTF-8)'), ('latin15', 'Western')], 'latin15'), ('reencode', 'Reencode', [], 'false')]`
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.open_file_finish] to get the results.
     */
    open_file(parent: Parent | null, title: string, filters: GLib.Variant | null, current_filter: GLib.Variant | null, choices: GLib.Variant | null, flags: OpenFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-file request, and returns
     * the result in the form of a [struct`GLib`.Variant] dictionary containing
     * the following fields:
     * 
     * - uris `as`: an array of strings containing the uris of selected files
     * - choices `a(ss)`: an array of pairs of strings, the first string being the
     *     ID of a combobox that was passed into this call, the second string
     *     being the selected option.
     */
    open_file_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Opens a file descriptor to the pipewire remote where the camera
     * nodes are available. The file descriptor should be used to create
     * a pw_remote object, by using pw_remote_connect_fd(). Only the
     * camera nodes will be available from this pipewire node.
     */
    open_pipewire_remote_for_camera(): number
    /**
     * Opens `uri` with an external hamdler.
     */
    open_uri(parent: Parent, uri: string, flags: OpenUriFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-uri request, and returns
     * the result in the form of a boolean.
     */
    open_uri_finish(result: Gio.AsyncResult): boolean
    /**
     * Lets the user pick a color from the screen.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.pick_color_finish] to get the results.
     */
    pick_color(parent?: Parent | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a pick-color request, and returns
     * the result in the form of a GVariant of the form (ddd), containing
     * red, green and blue components in the range [0,1].
     */
    pick_color_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Presents a print dialog to the user and returns print settings and page setup.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.prepare_print_finish] to get the results.
     */
    prepare_print(parent: Parent | null, title: string, settings: GLib.Variant | null, page_setup: GLib.Variant | null, flags: PrintFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the prepare-print request, and returns [struct`GLib`.Variant] dictionary
     * with the following information:
     * 
     * - settings `a{sv}`: print settings as set up by the user in the print dialog
     * - page-setup `a{sv}: page setup as set up by the user in the print dialog
     * - token u: a token that can by used in a [method`Portal`.print_file] call to
     *     avoid the print dialog
     */
    prepare_print_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Prints a file.
     * 
     * If a valid token is present in the `options,` then this call will print
     * with the settings from the Print call that the token refers to. If
     * no token is present, then a print dialog will be presented to the user.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.print_file_finish] to get the results.
     */
    print_file(parent: Parent | null, title: string, token: number, file: string, flags: PrintFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the print request.
     */
    print_file_finish(result: Gio.AsyncResult): boolean
    /**
     * Withdraws a desktop notification.
     */
    remove_notification(id: string): void
    /**
     * Requests background permissions.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.request_background_finish] to get the results.
     */
    request_background(parent: Parent | null, reason: string | null, commandline: string[], flags: BackgroundFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the request, and returns `TRUE` if successful.
     */
    request_background_finish(result: Gio.AsyncResult): boolean
    /**
     * Asks the user for a location to save a file.
     * 
     * The format for the `filters` argument is the same as for [method`Portal`.open_file].
     * 
     * The format for the `choices` argument is the same as for [method`Portal`.open_file].
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.save_file_finish] to get the results.
     */
    save_file(parent: Parent | null, title: string, current_name: string | null, current_folder: string | null, current_file: string | null, filters: GLib.Variant | null, current_filter: GLib.Variant | null, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the save-file request, and returns
     * the result in the form of a [struct`GLib`.Variant] dictionary containing
     * the following fields:
     * 
     * - uris `(as)`: an array of strings containing the uri of the selected file
     * - choices `a(ss)`: an array of pairs of strings, the first string being the
     *   ID of a combobox that was passed into this call, the second string
     *   being the selected option.
     */
    save_file_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Asks for a folder as a location to save one or more files. The
     * names of the files will be used as-is and appended to the selected
     * folder's path in the list of returned files. If the selected folder
     * already contains a file with one of the given names, the portal may
     * prompt or take some other action to construct a unique file name and
     * return that instead.
     * 
     * The format for the `choices` argument is the same as for [method`Portal`.open_file].
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.save_file_finish] to get the results.
     */
    save_files(parent: Parent | null, title: string, current_name: string | null, current_folder: string | null, files: GLib.Variant, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the save-files request, and returns
     * the result in the form of a [struct`GLib`.Variant] dictionary containing
     * the following fields:
     * 
     * - uris `(as)`: an array of strings containing the uri corresponding to each
     *   file passed to the save-files request, in the same order. Note that the
     *   file names may have changed, for example if a file with the same name in
     *   the selected folder already exists.
     * - choices `a(ss)`: an array of pairs of strings, the first string being the
     *   ID of a combobox that was passed into this call, the second string
     *   being the selected option.
     */
    save_files_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Inhibits various session status changes.
     * 
     * To obtain an ID that can be used to undo the inhibition, use
     * [method`Portal`.session_inhibit_finish] in the callback.
     * 
     * To remove an active inhibitor, call [method`Portal`.session_uninhibit]
     * with the same ID.
     */
    session_inhibit(parent: Parent | null, reason: string | null, flags: InhibitFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the inhbit request, and returns the ID of the
     * inhibition as a positive integer. The ID can be passed to
     * [method`Portal`.session_uninhibit] to undo the inhibition.
     */
    session_inhibit_finish(result: Gio.AsyncResult): number
    /**
     * This method should be called within one second of
     * receiving a [signal`Portal:`:session-state-changed] signal
     * with the 'Query End' state, to acknowledge that they
     * have handled the state change.
     * 
     * Possible ways to handle the state change are either
     * to call [method`Portal`.session_inhibit] to prevent the
     * session from ending, or to save your state and get
     * ready for the session to end.
     */
    session_monitor_query_end_response(): void
    /**
     * Makes [class`Portal]` start monitoring the login session state.
     * 
     * When the state changes, the [signal`Portal:`:session-state-changed]
     * signal is emitted.
     * 
     * Use [method`Portal`.session_monitor_stop] to stop monitoring.
     */
    session_monitor_start(parent: Parent | null, flags: SessionMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a session-monitor request, and returns
     * the result in the form of boolean.
     */
    session_monitor_start_finish(result: Gio.AsyncResult): boolean
    /**
     * Stops session state monitoring that was started with
     * [method`Portal`.session_monitor_start].
     */
    session_monitor_stop(): void
    /**
     * Removes an inhibitor that was created by a call
     * to [method`Portal`.session_inhibit].
     */
    session_uninhibit(id: number): void
    /**
     * Sets a desktop background image, given by a uri.
     */
    set_wallpaper(parent: Parent, uri: string, flags: WallpaperFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-uri request, and returns
     * the result in the form of a boolean.
     */
    set_wallpaper_finish(result: Gio.AsyncResult): boolean
    /**
     * Creates a new copy of the applications sandbox, and runs
     * a process in, with the given arguments.
     * 
     * The learn when the spawned process exits, connect to the
     * [signal`Portal:`:spawn-exited] signal.
     */
    spawn(cwd: string, argv: string[], fds: number[] | null, map_to: number[] | null, env: string[] | null, flags: SpawnFlags, sandbox_expose?: string[] | null, sandbox_expose_ro?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the spawn request, and returns
     * the pid of the newly spawned process.
     */
    spawn_finish(result: Gio.AsyncResult): number
    /**
     * Sends a Unix signal to a process that has been spawned
     * by [method`Portal`.spawn].
     */
    spawn_signal(pid: number, signal: number, to_process_group: boolean): void
    /**
     * Takes a screenshot.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.take_screenshot_finish] to get the results.
     */
    take_screenshot(parent: Parent | null, flags: ScreenshotFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a screenshot request, and returns
     * the result in the form of a URI pointing to an image file.
     */
    take_screenshot_finish(result: Gio.AsyncResult): string | null
    /**
     * Sends the file at `path` to the trash can.
     */
    trash_file(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the trash-file request, and returns
     * the result in the form of a boolean.
     */
    trash_file_finish(result: Gio.AsyncResult): boolean
    /**
     * Installs an available software update. This should be
     * called in response to a [signal`Portal:`:update-available] signal.
     * 
     * During the update installation, the [signal`Portal:`:update-progress]
     * signal will be emitted to provide progress information.
     */
    update_install(parent: Parent, flags: UpdateInstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an update-installation request, and returns
     * the result in the form of boolean.
     * 
     * Note that the update may not be completely installed
     * by the time this function is called. You need to
     * listen to the [signal`Portal:`:update-progress] signal
     * to learn when the installation is complete.
     */
    update_install_finish(result: Gio.AsyncResult): boolean
    /**
     * Makes XdpPortal start monitoring for available software updates.
     * 
     * When a new update is available, the [signal`Portal:`:update-available].
     * signal is emitted.
     * 
     * Use [method`Portal`.update_monitor_stop] to stop monitoring.
     */
    update_monitor_start(flags: UpdateMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an update-monitor request, and returns
     * the result in the form of boolean.
     */
    update_monitor_start_finish(result: Gio.AsyncResult): boolean
    /**
     * Stops update monitoring that was started with
     * [method`Portal`.update_monitor_start].
     */
    update_monitor_stop(): void
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Xdp-1.0.Xdp.Portal */
    /**
     * The ::location-updated signal is emitted when location
     * monitoring is enabled and the location changes.
     */
    connect(sigName: "location-updated", callback: (($obj: Portal, latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestamp_s: number, timestamp_ms: number) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: Portal, latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestamp_s: number, timestamp_ms: number) => void)): number
    emit(sigName: "location-updated", latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestamp_s: number, timestamp_ms: number): void
    /**
     * The ::notification-action-invoked signal is emitted when
     * a non-exported action is activated on a notification.
     */
    connect(sigName: "notification-action-invoked", callback: (($obj: Portal, id: string, action: string, parameter?: GLib.Variant | null) => void)): number
    connect_after(sigName: "notification-action-invoked", callback: (($obj: Portal, id: string, action: string, parameter?: GLib.Variant | null) => void)): number
    emit(sigName: "notification-action-invoked", id: string, action: string, parameter?: GLib.Variant | null): void
    /**
     * This signal is emitted when session state monitoring is
     * enabled and the state of the login session changes or
     * the screensaver is activated or deactivated.
     */
    connect(sigName: "session-state-changed", callback: (($obj: Portal, screensaver_active: boolean, session_state: LoginSessionState) => void)): number
    connect_after(sigName: "session-state-changed", callback: (($obj: Portal, screensaver_active: boolean, session_state: LoginSessionState) => void)): number
    emit(sigName: "session-state-changed", screensaver_active: boolean, session_state: LoginSessionState): void
    /**
     * This signal is emitted when a process that was spawned
     * with [method`Portal`.spawn] exits.
     */
    connect(sigName: "spawn-exited", callback: (($obj: Portal, pid: number, exit_status: number) => void)): number
    connect_after(sigName: "spawn-exited", callback: (($obj: Portal, pid: number, exit_status: number) => void)): number
    emit(sigName: "spawn-exited", pid: number, exit_status: number): void
    /**
     * This signal is emitted when updates monitoring is enabled
     * and a new update is available. It is only sent once with
     * the same information, but it can be sent many times if
     * new updates appear.
     */
    connect(sigName: "update-available", callback: (($obj: Portal, running_commit: string, local_commit: string, remote_commit: string) => void)): number
    connect_after(sigName: "update-available", callback: (($obj: Portal, running_commit: string, local_commit: string, remote_commit: string) => void)): number
    emit(sigName: "update-available", running_commit: string, local_commit: string, remote_commit: string): void
    /**
     * This signal gets emitted to indicate progress of an
     * update installation. It is undefined exactly how often it
     * is sent, but it will be emitted at least once at the end with
     * a non-zero `status`. For each successful operation in the
     * update, we're also guaranteed to send exactly one signal
     * with `progress` 100.
     */
    connect(sigName: "update-progress", callback: (($obj: Portal, n_ops: number, op: number, progress: number, status: UpdateStatus, error: string, error_message: string) => void)): number
    connect_after(sigName: "update-progress", callback: (($obj: Portal, n_ops: number, op: number, progress: number, status: UpdateStatus, error: string, error_message: string) => void)): number
    emit(sigName: "update-progress", n_ops: number, op: number, progress: number, status: UpdateStatus, error: string, error_message: string): void
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
    connect(sigName: "notify", callback: (($obj: Portal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Portal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Portal_ConstructProps)
    _init (config?: Portal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Portal
    /**
     * Detects if running inside of a Flatpak or WebKit sandbox.
     * 
     * See also: xdp_portal_running_under_sandbox()
     */
    static running_under_flatpak(): boolean
    /**
     * This function tries to determine if the current process is running under a
     * sandbox that requires the use of portals.
     * 
     * If you need to check error conditions see xdp_portal_running_under_snap().
     * 
     * Note that these functions are all cached and will always return the same result.
     */
    static running_under_sandbox(): boolean
    /**
     * Detects if you are running inside of a Snap sandbox.
     * 
     * See also: xdp_portal_running_under_sandbox()
     */
    static running_under_snap(): boolean
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
}
class Session {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Xdp-1.0.Xdp.Session */
    /**
     * Closes the session.
     */
    close(): void
    /**
     * Obtains the devices that the user selected.
     * 
     * Unless the session is active, this function returns `XDP_DEVICE_NONE`.
     */
    get_devices(): DeviceType
    /**
     * Retrieves the effective persist mode of `session`.
     * 
     * May only be called after `session` is successfully started, i.e. after
     * [method`Session`.start_finish].
     */
    get_persist_mode(): PersistMode
    /**
     * Retrieves the restore token of `session`.
     * 
     * A restore token will only be available if `XDP_PERSIST_MODE_TRANSIENT`
     * or `XDP_PERSIST_MODE_PERSISTENT` was passed when creating the screencast
     * session.
     * 
     * Remote desktop sessions cannot be restored.
     * 
     * May only be called after `session` is successfully started, i.e. after
     * [method`Session`.start_finish].
     */
    get_restore_token(): string | null
    /**
     * Obtains information about the state of the session that is represented
     * by `session`.
     */
    get_session_state(): SessionState
    /**
     * Obtains information about the type of session that is represented
     * by `session`.
     */
    get_session_type(): SessionType
    /**
     * Obtains the streams that the user selected. The information in the
     * returned [struct`GLib`.Variant] has the format `a(ua{sv})`. Each item in the array
     * is describing a stream. The first member is the pipewire node ID, the
     * second is a dictionary of stream properties, including:
     * 
     * - position, `(ii)`: a tuple consisting of the position `(x, y)` in the compositor
     *     coordinate space. Note that the position may not be equivalent to a
     *     position in a pixel coordinate space. Only available for monitor streams.
     * - size, `(ii)`: a tuple consisting of (width, height). The size represents the size
     *     of the stream as it is displayed in the compositor coordinate space.
     *     Note that this size may not be equivalent to a size in a pixel coordinate
     *     space. The size may differ from the size of the stream.
     * 
     * Unless the session is active, this function returns `NULL`.
     */
    get_streams(): GLib.Variant
    /**
     * Changes the state of the key to `state`.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_KEYBOARD` access.
     */
    keyboard_key(keysym: boolean, key: number, state: KeyState): void
    /**
     * Opens a file descriptor to the pipewire remote where the screencast
     * streams are available. The file descriptor should be used to create
     * a pw_remote object, by using pw_remote_connect_fd(). Only the
     * screencast stream nodes will be available from this pipewire node.
     */
    open_pipewire_remote(): number
    /**
     * The axis movement from a smooth scroll device, such as a touchpad.
     * When applicable, the size of the motion delta should be equivalent to
     * the motion vector of a pointer motion done using the same advice.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     */
    pointer_axis(finish: boolean, dx: number, dy: number): void
    /**
     * The axis movement from a discrete scroll device.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     */
    pointer_axis_discrete(axis: DiscreteAxis, steps: number): void
    /**
     * Changes the state of the button to `state`.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     */
    pointer_button(button: number, state: ButtonState): void
    /**
     * Moves the pointer from its current position.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     */
    pointer_motion(dx: number, dy: number): void
    /**
     * Moves the pointer to a new position in the given streams logical
     * coordinate space.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     */
    pointer_position(stream: number, x: number, y: number): void
    /**
     * Starts the session.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Session`.start_finish] to get the results.
     */
    start(parent?: Parent | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the session-start request.
     */
    start_finish(result: Gio.AsyncResult): boolean
    /**
     * Notify about a new touch down event. The `(x, y)` position
     * represents the new touch point position in the streams logical
     * coordinate space.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_TOUCHSCREEN` access.
     */
    touch_down(stream: number, slot: number, x: number, y: number): void
    /**
     * Notify about a new touch motion event. The `(x, y)` position
     * represents where the touch point position in the streams logical
     * coordinate space moved.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_TOUCHSCREEN` access.
     */
    touch_position(stream: number, slot: number, x: number, y: number): void
    /**
     * Notify about a new touch up event.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_TOUCHSCREEN` access.
     */
    touch_up(slot: number): void
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Xdp-1.0.Xdp.Session */
    /**
     * The ::closed signal is emitted when a session is closed externally.
     */
    connect(sigName: "closed", callback: (($obj: Session) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Session) => void)): number
    emit(sigName: "closed"): void
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
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
class Parent {
    /* Methods of Xdp-1.0.Xdp.Parent */
    /**
     * Copies `source` into a new [struct`Parent]`.
     */
    copy(): Parent
    /**
     * Frees `parent`.
     */
    free(): void
    static name: string
}
abstract class PortalClass {
    /* Fields of Xdp-1.0.Xdp.PortalClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class SessionClass {
    /* Fields of Xdp-1.0.Xdp.SessionClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
}
export default Xdp;