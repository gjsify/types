
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Xdp-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * The XdpButtonState enumeration is used to describe
 * the state of buttons.
 */
export enum ButtonState {
    /**
     * the button is down
     */
    RELEASED,
    /**
     * the button is up
     */
    PRESSED,
}
export enum CameraFlags {
    NONE,
}
/**
 * The `XdpDiscreteAxis` enumeration is used to describe
 * the discrete scroll axes.
 */
export enum DiscreteAxis {
    /**
     * the horizontal scroll axis
     */
    HORIZONTAL_SCROLL,
    /**
     * the horizontal scroll axis
     */
    VERTICAL_SCROLL,
}
export enum EmailFlags {
    NONE,
}
/**
 * The `XdpKeyState` enumeration is used to describe
 * the state of keys.
 */
export enum KeyState {
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
export enum LocationAccuracy {
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
export enum LocationMonitorFlags {
    NONE,
}
/**
 * The values of this enum are returned in the [signal`Portal:`:session-state-changed] signal
 * to indicate the current state of the user session.
 */
export enum LoginSessionState {
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
export enum NotificationFlags {
    NONE,
}
/**
 * Options for how the screencast session should persist.
 */
export enum PersistMode {
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
export enum PrintFlags {
    NONE,
}
export enum SaveFileFlags {
    NONE,
}
export enum SessionMonitorFlags {
    NONE,
}
/**
 * The state of a session.
 */
export enum SessionState {
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
export enum SessionType {
    /**
     * a screencast session.
     */
    SCREENCAST,
    /**
     * a remote desktop session.
     */
    REMOTE_DESKTOP,
}
export enum UpdateInstallFlags {
    NONE,
}
export enum UpdateMonitorFlags {
    NONE,
}
/**
 * The values of this enum are returned in the
 * [signal`Portal:`:update-progress] signal to indicate
 * the current progress of an installation.
 */
export enum UpdateStatus {
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
export enum UserInformationFlags {
    NONE,
}
/**
 * Options to use when requesting background.
 * @bitfield 
 */
export enum BackgroundFlags {
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
 * @bitfield 
 */
export enum CursorMode {
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
 * @bitfield 
 */
export enum DeviceType {
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
 * @bitfield 
 */
export enum InhibitFlags {
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
 * The type of a launcher.
 * @bitfield 
 */
export enum LauncherType {
    /**
     * a launcher for a regular application
     */
    APPLICATION,
    /**
     * a launcher for a web app
     */
    WEBAPP,
}
/**
 * Options for opening files.
 * @bitfield 
 */
export enum OpenFileFlags {
    /**
     * No options
     */
    NONE,
    /**
     * Allow selecting multiple files
     */
    MULTIPLE,
}
/**
 * Options for opening uris.
 * @bitfield 
 */
export enum OpenUriFlags {
    /**
     * No options
     */
    NONE,
    /**
     * Use an application chooser for the given uri
     */
    ASK,
    /**
     * Allow writing to file (if uri points to a local file that is exported in the document portal and app is sandboxed itself)
     */
    WRITABLE,
}
/**
 * Flags to specify what kind of sources to offer for a screencast session.
 * @bitfield 
 */
export enum OutputType {
    /**
     * do not select any output
     */
    NONE,
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
 * @bitfield 
 */
export enum RemoteDesktopFlags {
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
 * @bitfield 
 */
export enum ScreencastFlags {
    /**
     * No options
     */
    NONE,
    /**
     * allow opening multiple streams
     */
    MULTIPLE,
}
export enum ScreenshotFlags {
    NONE,
    INTERACTIVE,
}
/**
 * Flags influencing the spawn operation and how the
 * new sandbox is created.
 * @bitfield 
 */
export enum SpawnFlags {
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
 * @bitfield 
 */
export enum WallpaperFlags {
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
export const WALLPAPER_TARGET_BOTH: number
export module Portal {

    // Signal callback interfaces

    /**
     * Signal callback interface for `location-updated`
     */
    export interface LocationUpdatedSignalCallback {
        (latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string | null, timestampS: number, timestampMs: number): void
    }

    /**
     * Signal callback interface for `notification-action-invoked`
     */
    export interface NotificationActionInvokedSignalCallback {
        (id: string | null, action: string | null, parameter: GLib.Variant | null): void
    }

    /**
     * Signal callback interface for `session-state-changed`
     */
    export interface SessionStateChangedSignalCallback {
        (screensaverActive: boolean, sessionState: LoginSessionState): void
    }

    /**
     * Signal callback interface for `spawn-exited`
     */
    export interface SpawnExitedSignalCallback {
        (pid: number, exitStatus: number): void
    }

    /**
     * Signal callback interface for `update-available`
     */
    export interface UpdateAvailableSignalCallback {
        (runningCommit: string | null, localCommit: string | null, remoteCommit: string | null): void
    }

    /**
     * Signal callback interface for `update-progress`
     */
    export interface UpdateProgressSignalCallback {
        (nOps: number, op: number, progress: number, status: UpdateStatus, error: string | null, errorMessage: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Portal {

    // Own properties of Xdp-1.0.Xdp.Portal

    __gtype__: number

    // Owm methods of Xdp-1.0.Xdp.Portal

    /**
     * Request access to a camera.
     * 
     * When the request is done, `callback` will be called.
     * You can then call [method`Portal`.access_camera_finish]
     * to get the results.
     * @param parent parent window information
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    accessCamera(parent: Parent | null, flags: CameraFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a camera acess request.
     * 
     * Returns the result as a boolean.
     * 
     * If the access was granted, you can then call
     * [method`Portal`.open_pipewire_remote_for_camera]
     * to obtain a pipewire remote.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if access to a camera was granted
     */
    accessCameraFinish(result: Gio.AsyncResult): boolean
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
     * @param id unique ID for the notification
     * @param notification a [struct`GLib`.Variant] dictionary with the content of the notification
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    addNotification(id: string | null, notification: GLib.Variant, flags: NotificationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the notification request.
     * 
     * Returns the result as a boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the notification was added
     */
    addNotificationFinish(result: Gio.AsyncResult): boolean
    /**
     * Presents a window that lets the user compose an email,
     * with some pre-filled information.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.compose_email_finish] to get the results.
     * @param parent parent window information
     * @param addresses the email addresses to send to
     * @param cc the email addresses to cc
     * @param bcc the email addresses to bcc
     * @param subject the subject for the email
     * @param body the body for the email
     * @param attachments an array of paths for files to attach
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    composeEmail(parent: Parent | null, addresses: string[] | null, cc: string[] | null, bcc: string[] | null, subject: string | null, body: string | null, attachments: string[] | null, flags: EmailFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the compose-email request.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the request was handled successfully
     */
    composeEmailFinish(result: Gio.AsyncResult): boolean
    /**
     * Creates a session for remote desktop.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.create_remote_desktop_session_finish] to get the results.
     * @param devices which kinds of input devices to ofer in the new dialog
     * @param outputs which kinds of source to offer in the dialog
     * @param flags options for this call
     * @param cursorMode the cursor mode of the session
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    createRemoteDesktopSession(devices: DeviceType, outputs: OutputType, flags: RemoteDesktopFlags, cursorMode: CursorMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the create-remote-desktop request, and returns a [class`Session]`.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [class@Session]
     */
    createRemoteDesktopSessionFinish(result: Gio.AsyncResult): Session
    /**
     * Creates a session for a screencast.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.create_screencast_session_finish] to get the results.
     * @param outputs which kinds of source to offer in the dialog
     * @param flags options for this call
     * @param cursorMode the cursor mode of the session
     * @param persistMode the persist mode of the session
     * @param restoreToken the token of a previous screencast session to restore
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    createScreencastSession(outputs: OutputType, flags: ScreencastFlags, cursorMode: CursorMode, persistMode: PersistMode, restoreToken: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the create-screencast request, and returns a [class`Session]`.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [class@Session]
     */
    createScreencastSessionFinish(result: Gio.AsyncResult): Session
    /**
     * This function gets the contents of a .desktop file that was previously
     * installed by the dynamic launcher portal.
     * 
     * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
     * "." and suffixed with ".desktop".
     * @param desktopFileId the .desktop file name
     * @returns the contents of the desktop file, or %NULL with   @error set
     */
    dynamicLauncherGetDesktopEntry(desktopFileId: string | null): string | null
    /**
     * This function gets the icon associated with a .desktop file that was previously
     * installed by the dynamic launcher portal.
     * 
     * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
     * "." and suffixed with ".desktop".
     * @param desktopFileId the .desktop file name
     * @param outIconFormat return location for icon format string, one of "png", "jpeg", "svg"
     * @param outIconSize return location for icon size
     * @returns the icon in a format recognized by g_icon_deserialize(),   or %NULL with @error set
     */
    dynamicLauncherGetIcon(desktopFileId: string | null, outIconFormat: string | null, outIconSize: number | null): GLib.Variant
    /**
     * This function completes installation of a launcher so that the icon and name
     * given in previous method calls will show up in the desktop environment's menu.
     * 
     * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
     * "." and suffixed with ".desktop".
     * 
     * The `desktop_entry` data need not include Icon= or Name= entries since these
     * will be added by the portal, and the Exec= entry will be rewritten to call
     * the application with e.g. "flatpak run" depending on the sandbox status of
     * the app.
     * @param token a token acquired via a [method`Portal`.dynamic_launcher_request_install_token] or [method`Portal`.dynamic_launcher_prepare_install] call
     * @param desktopFileId the .desktop file name to be used
     * @param desktopEntry the key-file to be used for the contents of the .desktop file
     * @returns %TRUE if the installation was successful, %FALSE with @error set   otherwise
     */
    dynamicLauncherInstall(token: string | null, desktopFileId: string | null, desktopEntry: string | null): boolean
    dynamicLauncherLaunch(desktopFileId: string | null, activationToken: string | null): boolean
    /**
     * Presents a dialog to the user so they can confirm they want to install a
     * launcher to their desktop.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.dynamic_launcher_prepare_install_finish] to get the results.
     * @param parent parent window information
     * @param name the name for the launcher
     * @param iconV a #GBytesIcon as returned by g_icon_serialize(). Must be a png or jpeg no larger than 512x512, or an svg
     * @param launcherType the type of the launcher
     * @param target the URL if the launcher is for a web app, or %NULL
     * @param editableName if %TRUE, the user will be able to edit the name of the launcher
     * @param editableIcon if %TRUE, the user will be able to edit the icon of the launcher, if the implementation supports this
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    dynamicLauncherPrepareInstall(parent: Parent | null, name: string | null, iconV: GLib.Variant, launcherType: LauncherType, target: string | null, editableName: boolean, editableIcon: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the prepare-install-launcher request, and returns
     * [struct`GLib`.Variant] dictionary with the following information:
     * 
     * - name s: the name chosen by the user (or the provided name if the
     *     editable_name option was not set)
     * - token s: a token that can by used in a [method`Portal`.dynamic_launcher_install]
     *     call to complete the installation
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [struct@GLib.Variant] dictionary with launcher   information
     */
    dynamicLauncherPrepareInstallFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Requests a token which can be passed to [method`Portal`.dynamic_launcher_install]
     * to complete installation of the launcher without user interaction.
     * 
     * This function only works when the caller's app ID is in the allowlist for
     * the portal backend being used. It's intended for software centers such as
     * GNOME Software or KDE Discover.
     * @param name the name for the launcher
     * @param iconV a #GBytesIcon as returned by g_icon_serialize(). Must be a png or jpeg no larger than 512x512, or an svg
     * @returns a token that can be passed to   [method@Portal.dynamic_launcher_install], or %NULL with @error set
     */
    dynamicLauncherRequestInstallToken(name: string | null, iconV: GLib.Variant): string | null
    /**
     * This function uninstalls a launcher that was previously installed using the
     * dynamic launcher portal, resulting in the .desktop file and icon being deleted.
     * 
     * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
     * "." and suffixed with ".desktop".
     * @param desktopFileId the .desktop file name
     * @returns %TRUE if the uninstallation was successful, %FALSE with @error set   otherwise
     */
    dynamicLauncherUninstall(desktopFileId: string | null): boolean
    /**
     * Gets information about the user.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.get_user_information_finish] to get the results.
     * @param parent parent window information
     * @param reason a string that can be shown in the dialog to explain    why the information is needed
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    getUserInformation(parent: Parent | null, reason: string | null, flags: UserInformationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the get-user-information request.
     * 
     * Returns the result in the form of a [struct`GLib`.Variant] dictionary
     * containing the following fields:
     * 
     * - id `s`: the user ID
     * - name `s`: the users real name
     * - image `s`: the uri of an image file for the users avatar picture
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [struct@GLib.Variant] dictionary with user information
     */
    getUserInformationFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Returns whether any camera are present.
     * @returns `TRUE` if the system has cameras
     */
    isCameraPresent(): boolean
    /**
     * Makes `XdpPortal` start monitoring location changes.
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
     * @param parent a [struct`Parent]`, or `NULL`
     * @param distanceThreshold distance threshold, in meters
     * @param timeThreshold time threshold, in seconds
     * @param accuracy desired accuracy
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    locationMonitorStart(parent: Parent | null, distanceThreshold: number, timeThreshold: number, accuracy: LocationAccuracy, flags: LocationMonitorFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a location-monitor request.
     * 
     * Returns result in the form of boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the request succeeded
     */
    locationMonitorStartFinish(result: Gio.AsyncResult): boolean
    /**
     * Stops location monitoring that was started with
     * [method`Portal`.location_monitor_start].
     */
    locationMonitorStop(): void
    /**
     * Opens the directory containing the file specified by the `uri`.
     * 
     * which must be a file: uri pointing to a file that the application has access
     * to.
     * @param parent parent window information
     * @param uri the URI to open
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    openDirectory(parent: Parent, uri: string | null, flags: OpenUriFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-directory request.
     * 
     * Returns the result in the form of a boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the call succeeded
     */
    openDirectoryFinish(result: Gio.AsyncResult): boolean
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
     * @param parent parent window information
     * @param title title for the file chooser dialog
     * @param filters a [struct`GLib`.Variant] describing file filters
     * @param currentFilter a [struct`GLib`.Variant] describing the current file filter
     * @param choices a [struct`GLib`.Variant] describing extra widgets
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    openFile(parent: Parent | null, title: string | null, filters: GLib.Variant | null, currentFilter: GLib.Variant | null, choices: GLib.Variant | null, flags: OpenFileFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-file request
     * 
     * Returns the result in the form of a [struct`GLib`.Variant] dictionary
     * containing the following fields:
     * 
     * - uris `as`: an array of strings containing the uris of selected files
     * - choices `a(ss)`: an array of pairs of strings, the first string being the
     *     ID of a combobox that was passed into this call, the second string
     *     being the selected option.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [struct@GLib.Variant] dictionary with the results
     */
    openFileFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Opens a file descriptor to the pipewire remote where the camera
     * nodes are available.
     * 
     * The file descriptor should be used to create a pw_core object, by using
     * pw_context_connect_fd(). Only the camera nodes will be available from this
     * pipewire node.
     * @returns the file descriptor
     */
    openPipewireRemoteForCamera(): number
    /**
     * Opens `uri` with an external handler.
     * @param parent parent window information
     * @param uri the URI to open
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    openUri(parent: Parent, uri: string | null, flags: OpenUriFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-uri request.
     * 
     * Returns the result in the form of a boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the call succeeded
     */
    openUriFinish(result: Gio.AsyncResult): boolean
    /**
     * Lets the user pick a color from the screen.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.pick_color_finish] to get the results.
     * @param parent parent window information
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    pickColor(parent: Parent | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a pick-color request.
     * 
     * Returns the result in the form of a GVariant of the form (ddd), containing
     * red, green and blue components in the range [0,1].
     * @param result a [iface`Gio`.AsyncResult]
     * @returns GVariant containing the color
     */
    pickColorFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Presents a print dialog to the user and returns print settings and page setup.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.prepare_print_finish] to get the results.
     * @param parent parent window information
     * @param title tile for the print dialog
     * @param settings Serialized print settings
     * @param pageSetup Serialized page setup
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    preparePrint(parent: Parent | null, title: string | null, settings: GLib.Variant | null, pageSetup: GLib.Variant | null, flags: PrintFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the prepare-print request.
     * 
     * Returns a [struct`GLib`.Variant] dictionary with the following information:
     * 
     * - settings `a{sv}`: print settings as set up by the user in the print dialog
     * - page-setup `a{sv}: page setup as set up by the user in the print dialog
     * - token u: a token that can by used in a [method`Portal`.print_file] call to
     *     avoid the print dialog
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [struct@GLib.Variant] dictionary with print information
     */
    preparePrintFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Prints a file.
     * 
     * If a valid token is present in the `options,` then this call will print
     * with the settings from the Print call that the token refers to. If
     * no token is present, then a print dialog will be presented to the user.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.print_file_finish] to get the results.
     * @param parent parent window information
     * @param title tile for the print dialog
     * @param token token that was returned by a previous [method`Portal`.prepare_print] call, or 0
     * @param file path of the document to print
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    printFile(parent: Parent | null, title: string | null, token: number, file: string | null, flags: PrintFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the print request.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the request was successful
     */
    printFileFinish(result: Gio.AsyncResult): boolean
    /**
     * Withdraws a desktop notification.
     * @param id the ID of an notification
     */
    removeNotification(id: string | null): void
    /**
     * Requests background permissions.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.request_background_finish] to get the results.
     * @param parent parent window information
     * @param reason reason to present to user for request
     * @param commandline command line to autostart
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    requestBackground(parent: Parent | null, reason: string | null, commandline: string[], flags: BackgroundFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the request.
     * 
     * Returns `TRUE` if successful.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if successful.
     */
    requestBackgroundFinish(result: Gio.AsyncResult): boolean
    /**
     * Asks the user for a location to save a file.
     * 
     * The format for the `filters` argument is the same as for [method`Portal`.open_file].
     * 
     * The format for the `choices` argument is the same as for [method`Portal`.open_file].
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.save_file_finish] to get the results.
     * @param parent parent window information
     * @param title title for the file chooser dialog
     * @param currentName suggested filename
     * @param currentFolder suggested folder to save the file in
     * @param currentFile the current file (when saving an existing file)
     * @param filters a [struct`GLib`.Variant] describing file filters
     * @param currentFilter a [struct`GLib`.Variant] describing the current file filter
     * @param choices a [struct`GLib`.Variant] describing extra widgets
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    saveFile(parent: Parent | null, title: string | null, currentName: string | null, currentFolder: string | null, currentFile: string | null, filters: GLib.Variant | null, currentFilter: GLib.Variant | null, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the save-file request.
     * 
     * Returns the result in the form of a [struct`GLib`.Variant] dictionary
     * containing the following fields:
     * 
     * - uris `(as)`: an array of strings containing the uri of the selected file
     * - choices `a(ss)`: an array of pairs of strings, the first string being the
     *   ID of a combobox that was passed into this call, the second string
     *   being the selected option.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [struct@GLib.Variant] dictionary with the results
     */
    saveFileFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Asks for a folder as a location to save one or more files.
     * 
     * The names of the files will be used as-is and appended to the selected
     * folder's path in the list of returned files. If the selected folder already
     * contains a file with one of the given names, the portal may prompt or take
     * some other action to construct a unique file name and return that instead.
     * 
     * The format for the `choices` argument is the same as for [method`Portal`.open_file].
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.save_file_finish] to get the results.
     * @param parent parent window information
     * @param title title for the file chooser dialog
     * @param currentName suggested filename
     * @param currentFolder suggested folder to save the file in
     * @param files An array of file names to be saved
     * @param choices a [struct`GLib`.Variant] describing extra widgets
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    saveFiles(parent: Parent | null, title: string | null, currentName: string | null, currentFolder: string | null, files: GLib.Variant, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the save-files request.
     * 
     * Returns the result in the form of a [struct`GLib`.Variant] dictionary
     * containing the following fields:
     * 
     * - uris `(as)`: an array of strings containing the uri corresponding to each
     *   file passed to the save-files request, in the same order. Note that the
     *   file names may have changed, for example if a file with the same name in
     *   the selected folder already exists.
     * - choices `a(ss)`: an array of pairs of strings, the first string being the
     *   ID of a combobox that was passed into this call, the second string
     *   being the selected option.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns a [struct@GLib.Variant] dictionary with the results
     */
    saveFilesFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Inhibits various session status changes.
     * 
     * To obtain an ID that can be used to undo the inhibition, use
     * [method`Portal`.session_inhibit_finish] in the callback.
     * 
     * To remove an active inhibitor, call [method`Portal`.session_uninhibit]
     * with the same ID.
     * @param parent parent window information
     * @param reason user-visible reason for the inhibition
     * @param flags information about what to inhibit
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    sessionInhibit(parent: Parent | null, reason: string | null, flags: InhibitFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the inhbit request.
     * 
     * Returns the ID of the inhibition as a positive integer. The ID can be passed
     * to [method`Portal`.session_uninhibit] to undo the inhibition.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns the ID of the inhibition, or -1 if there was an error
     */
    sessionInhibitFinish(result: Gio.AsyncResult): number
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
    sessionMonitorQueryEndResponse(): void
    /**
     * Makes [class`Portal]` start monitoring the login session state.
     * 
     * When the state changes, the [signal`Portal:`:session-state-changed]
     * signal is emitted.
     * 
     * Use [method`Portal`.session_monitor_stop] to stop monitoring.
     * @param parent a XdpParent, or `NULL`
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    sessionMonitorStart(parent: Parent | null, flags: SessionMonitorFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a session-monitor request.
     * 
     * Returns the result in the form of boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the request succeeded
     */
    sessionMonitorStartFinish(result: Gio.AsyncResult): boolean
    /**
     * Stops session state monitoring that was started with
     * [method`Portal`.session_monitor_start].
     */
    sessionMonitorStop(): void
    /**
     * Removes an inhibitor that was created by a call
     * to [method`Portal`.session_inhibit].
     * @param id unique ID for an active inhibition
     */
    sessionUninhibit(id: number): void
    /**
     * Sets the status information of the application, for when it's running
     * in background.
     * @param statusMessage status message when running in background
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    setBackgroundStatus(statusMessage: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting the background status of the application.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns %TRUE if successfully set status, %FALSE otherwise
     */
    setBackgroundStatusFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets a desktop background image, given by a uri.
     * @param parent parent window information
     * @param uri the URI to use
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    setWallpaper(parent: Parent | null, uri: string | null, flags: WallpaperFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the open-uri request.
     * 
     * Returns the result in the form of a boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the call succeeded
     */
    setWallpaperFinish(result: Gio.AsyncResult): boolean
    /**
     * Creates a new copy of the applications sandbox, and runs
     * a process in, with the given arguments.
     * 
     * The learn when the spawned process exits, connect to the
     * [signal`Portal:`:spawn-exited] signal.
     * @param cwd the cwd for the new process
     * @param argv the argv for the new process
     * @param fds an array of open fds to pass to the new process, or `NULL`
     * @param mapTo an array of integers to map the `fds` to, or `NULL`. Must be the same     length as `fds`
     * @param env an array of KEY=VALUE environment settings, or `NULL`
     * @param flags flags influencing the spawn operation
     * @param sandboxExpose paths to expose rw in the new sandbox, or `NULL`
     * @param sandboxExposeRo paths to expose ro in the new sandbox, or `NULL`
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    spawn(cwd: string | null, argv: string[], fds: number[] | null, mapTo: number[] | null, env: string[] | null, flags: SpawnFlags, sandboxExpose: string[] | null, sandboxExposeRo: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the spawn request.
     * 
     * Returns the pid of the newly spawned process.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns the pid of the spawned process.
     */
    spawnFinish(result: Gio.AsyncResult): number
    /**
     * Sends a Unix signal to a process that has been spawned
     * by [method`Portal`.spawn].
     * @param pid the pid of the process to send a signal to
     * @param signal the Unix signal to send (see signal(7))
     * @param toProcessGroup whether to send the signal to the process     group of the process
     */
    spawnSignal(pid: number, signal: number, toProcessGroup: boolean): void
    /**
     * Takes a screenshot.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Portal`.take_screenshot_finish] to get the results.
     * @param parent parent window information
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    takeScreenshot(parent: Parent | null, flags: ScreenshotFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a screenshot request.
     * 
     * Returns the result in the form of a URI pointing to an image file.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns URI pointing to an image file
     */
    takeScreenshotFinish(result: Gio.AsyncResult): string | null
    /**
     * Sends the file at `path` to the trash can.
     * @param path the path for a local file
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    trashFile(path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the trash-file request.
     * 
     * Returns the result in the form of a boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the call succeeded
     */
    trashFileFinish(result: Gio.AsyncResult): boolean
    /**
     * Installs an available software update.
     * 
     * This should be called in response to a [signal`Portal:`:update-available]
     * signal.
     * 
     * During the update installation, the [signal`Portal:`:update-progress]
     * signal will be emitted to provide progress information.
     * @param parent a [struct`Parent]`
     * @param flags options for this call
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    updateInstall(parent: Parent, flags: UpdateInstallFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an update-installation request.
     * 
     * Returns the result in the form of boolean.
     * 
     * Note that the update may not be completely installed
     * by the time this function is called. You need to
     * listen to the [signal`Portal:`:update-progress] signal
     * to learn when the installation is complete.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the update is being installed
     */
    updateInstallFinish(result: Gio.AsyncResult): boolean
    /**
     * Makes `XdpPortal` start monitoring for available software updates.
     * 
     * When a new update is available, the [signal`Portal:`:update-available].
     * signal is emitted.
     * 
     * Use [method`Portal`.update_monitor_stop] to stop monitoring.
     * @param flags options for this cal..
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    updateMonitorStart(flags: UpdateMonitorFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an update-monitor request.
     * 
     * Returns the result in the form of boolean.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the request succeeded
     */
    updateMonitorStartFinish(result: Gio.AsyncResult): boolean
    /**
     * Stops update monitoring that was started with
     * [method`Portal`.update_monitor_start].
     */
    updateMonitorStop(): void

    // Own signals of Xdp-1.0.Xdp.Portal

    connect(sigName: "location-updated", callback: Portal.LocationUpdatedSignalCallback): number
    on(sigName: "location-updated", callback: Portal.LocationUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: Portal.LocationUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: Portal.LocationUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "location-updated", longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string | null, timestampS: number, timestampMs: number, ...args: any[]): void
    connect(sigName: "notification-action-invoked", callback: Portal.NotificationActionInvokedSignalCallback): number
    on(sigName: "notification-action-invoked", callback: Portal.NotificationActionInvokedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification-action-invoked", callback: Portal.NotificationActionInvokedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification-action-invoked", callback: Portal.NotificationActionInvokedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "notification-action-invoked", action: string | null, parameter: GLib.Variant | null, ...args: any[]): void
    connect(sigName: "session-state-changed", callback: Portal.SessionStateChangedSignalCallback): number
    on(sigName: "session-state-changed", callback: Portal.SessionStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-state-changed", callback: Portal.SessionStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-state-changed", callback: Portal.SessionStateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "session-state-changed", sessionState: LoginSessionState, ...args: any[]): void
    connect(sigName: "spawn-exited", callback: Portal.SpawnExitedSignalCallback): number
    on(sigName: "spawn-exited", callback: Portal.SpawnExitedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "spawn-exited", callback: Portal.SpawnExitedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "spawn-exited", callback: Portal.SpawnExitedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "spawn-exited", exitStatus: number, ...args: any[]): void
    connect(sigName: "update-available", callback: Portal.UpdateAvailableSignalCallback): number
    on(sigName: "update-available", callback: Portal.UpdateAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-available", callback: Portal.UpdateAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-available", callback: Portal.UpdateAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-available", localCommit: string | null, remoteCommit: string | null, ...args: any[]): void
    connect(sigName: "update-progress", callback: Portal.UpdateProgressSignalCallback): number
    on(sigName: "update-progress", callback: Portal.UpdateProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-progress", callback: Portal.UpdateProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-progress", callback: Portal.UpdateProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-progress", op: number, progress: number, status: UpdateStatus, error: string | null, errorMessage: string | null, ...args: any[]): void

    // Class property signals of Xdp-1.0.Xdp.Portal

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Context for portal calls.
 * 
 * The XdpPortal object provides the main context object
 * for the portal operations of libportal.
 * 
 * Typically, an application will create a single XdpPortal
 * object with [ctor`Portal`.new] and use it throughout its lifetime.
 * @class 
 */
export class Portal extends GObject.Object {

    // Own properties of Xdp-1.0.Xdp.Portal

    static name: string

    // Constructors of Xdp-1.0.Xdp.Portal

    constructor(config?: Portal.ConstructorProperties) 
    /**
     * Creates a new [class`Portal]` object.
     * @constructor 
     * @returns a newly created [class@Portal] object
     */
    constructor() 
    /**
     * Creates a new [class`Portal]` object.
     * @constructor 
     * @returns a newly created [class@Portal] object
     */
    static new(): Portal
    _init(config?: Portal.ConstructorProperties): void
    /**
     * Detects if running inside of a Flatpak or WebKit sandbox.
     * 
     * See also: [func`Portal`.running_under_sandbox].
     * @returns %TRUE if the current process is running under a Flatpak sandbox
     */
    static runningUnderFlatpak(): boolean
    /**
     * This function tries to determine if the current process is running under a
     * sandbox that requires the use of portals.
     * 
     * If you need to check error conditions see [func`Portal`.running_under_snap].
     * 
     * Note that these functions are all cached and will always return the same result.
     * @returns %TRUE if the current process should use portals to access resources   on the host system, or %FALSE if either an error was encountered or the   process is running unsandboxed
     */
    static runningUnderSandbox(): boolean
    /**
     * Detects if you are running inside of a Snap sandbox.
     * 
     * See also: [func`Portal`.running_under_sandbox].
     * @returns %TRUE if the current process is running under a Snap sandbox, or   %FALSE if either unsandboxed or an error was encountered in which case   @error will be set
     */
    static runningUnderSnap(): boolean
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Session {

    // Own properties of Xdp-1.0.Xdp.Session

    __gtype__: number

    // Owm methods of Xdp-1.0.Xdp.Session

    /**
     * Closes the session.
     */
    close(): void
    /**
     * Obtains the devices that the user selected.
     * 
     * Unless the session is active, this function returns `XDP_DEVICE_NONE`.
     * @returns the selected devices
     */
    getDevices(): DeviceType
    /**
     * Retrieves the effective persist mode of `session`.
     * 
     * May only be called after `session` is successfully started, i.e. after
     * [method`Session`.start_finish].
     * @returns the effective persist mode of @session
     */
    getPersistMode(): PersistMode
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
     * @returns the restore token of @session
     */
    getRestoreToken(): string | null
    /**
     * Obtains information about the state of the session that is represented
     * by `session`.
     * @returns the state of @session
     */
    getSessionState(): SessionState
    /**
     * Obtains information about the type of session that is represented
     * by `session`.
     * @returns the type of @session
     */
    getSessionType(): SessionType
    /**
     * Obtains the streams that the user selected.
     * 
     * The information in the returned [struct`GLib`.Variant] has the format
     * `a(ua{sv})`. Each item in the array is describing a stream. The first member
     * is the pipewire node ID, the second is a dictionary of stream properties,
     * including:
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
     * @returns the selected streams
     */
    getStreams(): GLib.Variant
    /**
     * Changes the state of the key to `state`.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_KEYBOARD` access.
     * @param keysym whether to interpret `key` as a keysym instead of a keycode
     * @param key the keysym or keycode to change
     * @param state the new state
     */
    keyboardKey(keysym: boolean, key: number, state: KeyState): void
    /**
     * Opens a file descriptor to the pipewire remote where the screencast
     * streams are available.
     * 
     * The file descriptor should be used to create a pw_remote object, by using
     * pw_remote_connect_fd(). Only the screencast stream nodes will be available
     * from this pipewire node.
     * @returns the file descriptor
     */
    openPipewireRemote(): number
    /**
     * The axis movement from a smooth scroll device, such as a touchpad.
     * When applicable, the size of the motion delta should be equivalent to
     * the motion vector of a pointer motion done using the same advice.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     * @param finish whether this is the last in a series of related events
     * @param dx relative axis movement on the X axis
     * @param dy relative axis movement on the Y axis
     */
    pointerAxis(finish: boolean, dx: number, dy: number): void
    /**
     * The axis movement from a discrete scroll device.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     * @param axis the axis to change
     * @param steps number of steps scrolled
     */
    pointerAxisDiscrete(axis: DiscreteAxis, steps: number): void
    /**
     * Changes the state of the button to `state`.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     * @param button the button
     * @param state the new state
     */
    pointerButton(button: number, state: ButtonState): void
    /**
     * Moves the pointer from its current position.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     * @param dx relative horizontal movement
     * @param dy relative vertical movement
     */
    pointerMotion(dx: number, dy: number): void
    /**
     * Moves the pointer to a new position in the given streams logical
     * coordinate space.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_POINTER` access.
     * @param stream the node ID of the pipewire stream the position is relative to
     * @param x new X position
     * @param y new Y position
     */
    pointerPosition(stream: number, x: number, y: number): void
    /**
     * Starts the session.
     * 
     * When the request is done, `callback` will be called. You can then
     * call [method`Session`.start_finish] to get the results.
     * @param parent parent window information
     * @param cancellable optional [class`Gio`.Cancellable]
     * @param callback a callback to call when the request is done
     */
    start(parent: Parent | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the session-start request.
     * @param result a [iface`Gio`.AsyncResult]
     * @returns `TRUE` if the session was started successfully.
     */
    startFinish(result: Gio.AsyncResult): boolean
    /**
     * Notify about a new touch down event.
     * 
     * The `(x, y)` position represents the new touch point position in the streams
     * logical coordinate space.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_TOUCHSCREEN` access.
     * @param stream the node ID of the pipewire stream the position is relative to
     * @param slot touch slot where the touch point appeared
     * @param x new X position
     * @param y new Y position
     */
    touchDown(stream: number, slot: number, x: number, y: number): void
    /**
     * Notify about a new touch motion event.
     * 
     * The `(x, y)` position represents where the touch point position in the
     * streams logical coordinate space moved.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_TOUCHSCREEN` access.
     * @param stream the node ID of the pipewire stream the position is relative to
     * @param slot touch slot that is changing position
     * @param x new X position
     * @param y new Y position
     */
    touchPosition(stream: number, slot: number, x: number, y: number): void
    /**
     * Notify about a new touch up event.
     * 
     * May only be called on a remote desktop session
     * with `XDP_DEVICE_TOUCHSCREEN` access.
     * @param slot touch slot that changed
     */
    touchUp(slot: number): void

    // Own signals of Xdp-1.0.Xdp.Session

    connect(sigName: "closed", callback: Session.ClosedSignalCallback): number
    on(sigName: "closed", callback: Session.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Session.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Session.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of Xdp-1.0.Xdp.Session

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A representation of long-lived screencast portal interactions.
 * 
 * The XdpSession object is used to represent portal interactions with the
 * screencast or remote desktop portals that extend over multiple portal calls.
 * 
 * To find out what kind of session an XdpSession object represents and whether
 * it is still active, you can use [method`Session`.get_session_type] and
 * [method`Session`.get_session_state].
 * 
 * All sessions start in an initial state. They can be made active by calling
 * [method`Session`.start], and ended by calling [method`Session`.close].
 * @class 
 */
export class Session extends GObject.Object {

    // Own properties of Xdp-1.0.Xdp.Session

    static name: string

    // Constructors of Xdp-1.0.Xdp.Session

    constructor(config?: Session.ConstructorProperties) 
    _init(config?: Session.ConstructorProperties): void
}

export interface Parent {

    // Owm methods of Xdp-1.0.Xdp.Parent

    /**
     * Copies `source` into a new [struct`Parent]`.
     * @returns an [struct@Parent] that is a copy of @source
     */
    copy(): Parent
    /**
     * Frees `parent`.
     */
    free(): void
}

/**
 * Parent window abstraction.
 * 
 * The [struct`Parent]` struct provides an abstract way to represent
 * a window, without introducing a dependency on a toolkit
 * library.
 * 
 * An XdpParent implementation for GTK is included in the
 * `portal-gtk3.h` and `portal-gtk4.h` header files, in the form of inline functions.
 * To create a XdpParent for a GTK window, use
 * `xdp_parent_new_gtk()`.
 * @record 
 */
export class Parent {

    // Own properties of Xdp-1.0.Xdp.Parent

    static name: string
}

export interface PortalClass {

    // Own fields of Xdp-1.0.Xdp.PortalClass

    parentClass: GObject.ObjectClass
}

export abstract class PortalClass {

    // Own properties of Xdp-1.0.Xdp.PortalClass

    static name: string
}

export interface SessionClass {

    // Own fields of Xdp-1.0.Xdp.SessionClass

    parentClass: GObject.ObjectClass
}

export abstract class SessionClass {

    // Own properties of Xdp-1.0.Xdp.SessionClass

    static name: string
}
