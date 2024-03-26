
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './giounix-2.0-ambient.d.ts';
import './giounix-2.0-import.d.ts';
/**
 * GioUnix-2.0
 */

import type GObject from '@girs/gobject-2.0';

/**
 * Extension point for default handler to URI association. See
 * [Extending GIO][extending-gio].
 */
export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
/**
 * Gets the default application for launching applications
 * using this URI scheme for a particular #GDesktopAppInfoLookup
 * implementation.
 * 
 * The #GDesktopAppInfoLookup interface and this function is used
 * to implement g_app_info_get_default_for_uri_scheme() backends
 * in a GIO module. There is no reason for applications to use it
 * directly. Applications should use g_app_info_get_default_for_uri_scheme().
 * @param lookup a #GDesktopAppInfoLookup
 * @param uri_scheme a string containing a URI scheme.
 * @returns #GAppInfo for given @uri_scheme or    %NULL on error.
 */
export function desktop_app_info_lookup_get_default_for_uri_scheme(lookup: any, uri_scheme: string): any | null
/**
 * Gets the underlying file descriptor.
 * @param fd_based a #GFileDescriptorBased.
 * @returns The file descriptor
 */
export function file_descriptor_based_get_fd(fd_based: any): number
/**
 * Determines if `mount_path` is considered an implementation of the
 * OS. This is primarily used for hiding mountable and mounted volumes
 * that only are used in the OS and has little to no relevance to the
 * casual user.
 * @param mount_path a mount path, e.g. `/media/disk` or `/usr`
 * @returns %TRUE if @mount_path is considered an implementation detail     of the OS.
 */
export function is_mount_path_system_internal(mount_path: string): boolean
/**
 * Determines if `device_path` is considered a block device path which is only
 * used in implementation of the OS. This is primarily used for hiding
 * mounted volumes that are intended as APIs for programs to read, and system
 * administrators at a shell; rather than something that should, for example,
 * appear in a GUI. For example, the Linux `/proc` filesystem.
 * 
 * The list of device paths considered ‘system’ ones may change over time.
 * @param device_path a device path, e.g. `/dev/loop0` or `nfsd`
 * @returns %TRUE if @device_path is considered an implementation detail of    the OS.
 */
export function is_system_device_path(device_path: string): boolean
/**
 * Determines if `fs_type` is considered a type of file system which is only
 * used in implementation of the OS. This is primarily used for hiding
 * mounted volumes that are intended as APIs for programs to read, and system
 * administrators at a shell; rather than something that should, for example,
 * appear in a GUI. For example, the Linux `/proc` filesystem.
 * 
 * The list of file system types considered ‘system’ ones may change over time.
 * @param fs_type a file system type, e.g. `procfs` or `tmpfs`
 * @returns %TRUE if @fs_type is considered an implementation detail of the OS.
 */
export function is_system_fs_type(fs_type: string): boolean
/**
 * Gets a #GUnixMountEntry for a given mount path. If `time_read`
 * is set, it will be filled with a unix timestamp for checking
 * if the mounts have changed since with g_unix_mounts_changed_since().
 * 
 * If more mounts have the same mount path, the last matching mount
 * is returned.
 * 
 * This will return %NULL if there is no mount point at `mount_path`.
 * @param mount_path path for a possible unix mount.
 * @returns a #GUnixMountEntry.
 */
export function mount_at(mount_path: string): [ /* returnType */ any | null, /* time_read */ number ]
/**
 * Compares two unix mounts.
 * @param mount1 first #GUnixMountEntry to compare.
 * @param mount2 second #GUnixMountEntry to compare.
 * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
 */
export function mount_compare(mount1: any, mount2: any): number
/**
 * Makes a copy of `mount_entry`.
 * @param mount_entry a #GUnixMountEntry.
 * @returns a new #GUnixMountEntry
 */
export function mount_copy(mount_entry: any): any
/**
 * Gets a #GUnixMountEntry for a given file path. If `time_read`
 * is set, it will be filled with a unix timestamp for checking
 * if the mounts have changed since with g_unix_mounts_changed_since().
 * 
 * If more mounts have the same mount path, the last matching mount
 * is returned.
 * 
 * This will return %NULL if looking up the mount entry fails, if
 * `file_path` doesn’t exist or there is an I/O error.
 * @param file_path file path on some unix mount.
 * @returns a #GUnixMountEntry.
 */
export function mount_for(file_path: string): [ /* returnType */ any | null, /* time_read */ number ]
/**
 * Frees a unix mount.
 * @param mount_entry a #GUnixMountEntry.
 */
export function mount_free(mount_entry: any): void
/**
 * Gets the device path for a unix mount.
 * @param mount_entry a #GUnixMount.
 * @returns a string containing the device path.
 */
export function mount_get_device_path(mount_entry: any): string
/**
 * Gets the filesystem type for the unix mount.
 * @param mount_entry a #GUnixMount.
 * @returns a string containing the file system type.
 */
export function mount_get_fs_type(mount_entry: any): string
/**
 * Gets the mount path for a unix mount.
 * @param mount_entry input #GUnixMountEntry to get the mount path for.
 * @returns the mount path for @mount_entry.
 */
export function mount_get_mount_path(mount_entry: any): string
/**
 * Gets a comma-separated list of mount options for the unix mount. For example,
 * `rw,relatime,seclabel,data=ordered`.
 * 
 * This is similar to g_unix_mount_point_get_options(), but it takes
 * a #GUnixMountEntry as an argument.
 * @param mount_entry a #GUnixMountEntry.
 * @returns a string containing the options, or %NULL if not available.
 */
export function mount_get_options(mount_entry: any): string | null
/**
 * Gets the root of the mount within the filesystem. This is useful e.g. for
 * mounts created by bind operation, or btrfs subvolumes.
 * 
 * For example, the root path is equal to "/" for mount created by
 * "mount /dev/sda1 /mnt/foo" and "/bar" for
 * "mount --bind /mnt/foo/bar /mnt/bar".
 * @param mount_entry a #GUnixMountEntry.
 * @returns a string containing the root, or %NULL if not supported.
 */
export function mount_get_root_path(mount_entry: any): string | null
/**
 * Guesses whether a Unix mount can be ejected.
 * @param mount_entry a #GUnixMountEntry
 * @returns %TRUE if @mount_entry is deemed to be ejectable.
 */
export function mount_guess_can_eject(mount_entry: any): boolean
/**
 * Guesses the icon of a Unix mount.
 * @param mount_entry a #GUnixMountEntry
 * @returns a #GIcon
 */
export function mount_guess_icon(mount_entry: any): any
/**
 * Guesses the name of a Unix mount.
 * The result is a translated string.
 * @param mount_entry a #GUnixMountEntry
 * @returns A newly allocated string that must     be freed with g_free()
 */
export function mount_guess_name(mount_entry: any): string | null
/**
 * Guesses whether a Unix mount should be displayed in the UI.
 * @param mount_entry a #GUnixMountEntry
 * @returns %TRUE if @mount_entry is deemed to be displayable.
 */
export function mount_guess_should_display(mount_entry: any): boolean
/**
 * Guesses the symbolic icon of a Unix mount.
 * @param mount_entry a #GUnixMountEntry
 * @returns a #GIcon
 */
export function mount_guess_symbolic_icon(mount_entry: any): any
/**
 * Checks if a unix mount is mounted read only.
 * @param mount_entry a #GUnixMount.
 * @returns %TRUE if @mount_entry is read only.
 */
export function mount_is_readonly(mount_entry: any): boolean
/**
 * Checks if a Unix mount is a system mount. This is the Boolean OR of
 * g_unix_is_system_fs_type(), g_unix_is_system_device_path() and
 * g_unix_is_mount_path_system_internal() on `mount_entry’`s properties.
 * 
 * The definition of what a ‘system’ mount entry is may change over time as new
 * file system types and device paths are ignored.
 * @param mount_entry a #GUnixMount.
 * @returns %TRUE if the unix mount is for a system path.
 */
export function mount_is_system_internal(mount_entry: any): boolean
/**
 * Gets a #GUnixMountPoint for a given mount path. If `time_read` is set, it
 * will be filled with a unix timestamp for checking if the mount points have
 * changed since with g_unix_mount_points_changed_since().
 * 
 * If more mount points have the same mount path, the last matching mount point
 * is returned.
 * @param mount_path path for a possible unix mount point.
 * @returns a #GUnixMountPoint, or %NULL if no match is found.
 */
export function mount_point_at(mount_path: string): [ /* returnType */ any | null, /* time_read */ number ]
/**
 * Compares two unix mount points.
 * @param mount1 a #GUnixMount.
 * @param mount2 a #GUnixMount.
 * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
 */
export function mount_point_compare(mount1: any, mount2: any): number
/**
 * Makes a copy of `mount_point`.
 * @param mount_point a #GUnixMountPoint.
 * @returns a new #GUnixMountPoint
 */
export function mount_point_copy(mount_point: any): any
/**
 * Frees a unix mount point.
 * @param mount_point unix mount point to free.
 */
export function mount_point_free(mount_point: any): void
/**
 * Gets the device path for a unix mount point.
 * @param mount_point a #GUnixMountPoint.
 * @returns a string containing the device path.
 */
export function mount_point_get_device_path(mount_point: any): string
/**
 * Gets the file system type for the mount point.
 * @param mount_point a #GUnixMountPoint.
 * @returns a string containing the file system type.
 */
export function mount_point_get_fs_type(mount_point: any): string
/**
 * Gets the mount path for a unix mount point.
 * @param mount_point a #GUnixMountPoint.
 * @returns a string containing the mount path.
 */
export function mount_point_get_mount_path(mount_point: any): string
/**
 * Gets the options for the mount point.
 * @param mount_point a #GUnixMountPoint.
 * @returns a string containing the options.
 */
export function mount_point_get_options(mount_point: any): string | null
/**
 * Guesses whether a Unix mount point can be ejected.
 * @param mount_point a #GUnixMountPoint
 * @returns %TRUE if @mount_point is deemed to be ejectable.
 */
export function mount_point_guess_can_eject(mount_point: any): boolean
/**
 * Guesses the icon of a Unix mount point.
 * @param mount_point a #GUnixMountPoint
 * @returns a #GIcon
 */
export function mount_point_guess_icon(mount_point: any): any
/**
 * Guesses the name of a Unix mount point.
 * The result is a translated string.
 * @param mount_point a #GUnixMountPoint
 * @returns A newly allocated string that must     be freed with g_free()
 */
export function mount_point_guess_name(mount_point: any): string | null
/**
 * Guesses the symbolic icon of a Unix mount point.
 * @param mount_point a #GUnixMountPoint
 * @returns a #GIcon
 */
export function mount_point_guess_symbolic_icon(mount_point: any): any
/**
 * Checks if a unix mount point is a loopback device.
 * @param mount_point a #GUnixMountPoint.
 * @returns %TRUE if the mount point is a loopback. %FALSE otherwise.
 */
export function mount_point_is_loopback(mount_point: any): boolean
/**
 * Checks if a unix mount point is read only.
 * @param mount_point a #GUnixMountPoint.
 * @returns %TRUE if a mount point is read only.
 */
export function mount_point_is_readonly(mount_point: any): boolean
/**
 * Checks if a unix mount point is mountable by the user.
 * @param mount_point a #GUnixMountPoint.
 * @returns %TRUE if the mount point is user mountable.
 */
export function mount_point_is_user_mountable(mount_point: any): boolean
/**
 * Checks if the unix mount points have changed since a given unix time.
 * @param time guint64 to contain a timestamp.
 * @returns %TRUE if the mount points have changed since @time.
 */
export function mount_points_changed_since(time: number): boolean
/**
 * Gets a #GList of #GUnixMountPoint containing the unix mount points.
 * If `time_read` is set, it will be filled with the mount timestamp,
 * allowing for checking if the mounts have changed with
 * g_unix_mount_points_changed_since().
 * @returns a #GList of the UNIX mountpoints.
 */
export function mount_points_get(): [ /* returnType */ any[], /* time_read */ number ]
/**
 * Checks if the unix mounts have changed since a given unix time.
 * @param time guint64 to contain a timestamp.
 * @returns %TRUE if the mounts have changed since @time.
 */
export function mounts_changed_since(time: number): boolean
/**
 * Gets a #GList of #GUnixMountEntry containing the unix mounts.
 * If `time_read` is set, it will be filled with the mount
 * timestamp, allowing for checking if the mounts have changed
 * with g_unix_mounts_changed_since().
 * @returns a #GList of the UNIX mounts.
 */
export function mounts_get(): [ /* returnType */ any[], /* time_read */ number ]
/**
 * During invocation, g_desktop_app_info_launch_uris_as_manager() may
 * create one or more child processes.  This callback is invoked once
 * for each, providing the process ID.
 * @callback 
 * @param appinfo a #GDesktopAppInfo
 * @param pid Process identifier
 */
export interface DesktopAppLaunchCallback {
    (appinfo: any, pid: any): void
}
export module DesktopAppInfoLookup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DesktopAppInfoLookup {

    // Class property signals of GioUnix-2.0.GioUnix.DesktopAppInfoLookup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GDesktopAppInfoLookup is an opaque data structure and can only be accessed
 * using the following functions.
 * @interface 
 */
export class DesktopAppInfoLookup extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoLookup

    static name: string
    static $gtype: GObject.GType<DesktopAppInfoLookup>

    // Constructors of GioUnix-2.0.GioUnix.DesktopAppInfoLookup

    constructor(config?: DesktopAppInfoLookup.ConstructorProperties) 
    _init(config?: DesktopAppInfoLookup.ConstructorProperties): void
    /**
     * Gets the default application for launching applications
     * using this URI scheme for a particular #GDesktopAppInfoLookup
     * implementation.
     * 
     * The #GDesktopAppInfoLookup interface and this function is used
     * to implement g_app_info_get_default_for_uri_scheme() backends
     * in a GIO module. There is no reason for applications to use it
     * directly. Applications should use g_app_info_get_default_for_uri_scheme().
     * @param lookup a #GDesktopAppInfoLookup
     * @param uri_scheme a string containing a URI scheme.
     * @returns #GAppInfo for given @uri_scheme or    %NULL on error.
     */
    static get_default_for_uri_scheme(lookup: any, uri_scheme: string): any | null
}

export module FileDescriptorBased {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileDescriptorBased {

    // Class property signals of GioUnix-2.0.GioUnix.FileDescriptorBased

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `GFileDescriptorBased` is an interface for file descriptor based IO.
 * 
 * It is implemented by streams (implementations of [class`Gio`.InputStream] or
 * [class`Gio`.OutputStream]) that are based on file descriptors.
 * 
 * Note that `<gio/gfiledescriptorbased.h>` belongs to the UNIX-specific
 * GIO interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
 * file or the `GioUnix-2.0` GIR namespace when using it.
 * @interface 
 */
export class FileDescriptorBased extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.FileDescriptorBased

    static name: string
    static $gtype: GObject.GType<FileDescriptorBased>

    // Constructors of GioUnix-2.0.GioUnix.FileDescriptorBased

    constructor(config?: FileDescriptorBased.ConstructorProperties) 
    _init(config?: FileDescriptorBased.ConstructorProperties): void
    /**
     * Gets the underlying file descriptor.
     * @param fd_based a #GFileDescriptorBased.
     * @returns The file descriptor
     */
    static get_fd(fd_based: any): number
}

export module DesktopAppInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GioUnix-2.0.GioUnix.DesktopAppInfo

        /**
         * The origin filename of this #GDesktopAppInfo
         */
        filename?: string | null
    }

}

export interface DesktopAppInfo {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfo

    /**
     * The origin filename of this #GDesktopAppInfo
     */
    readonly filename: string | null

    // Class property signals of GioUnix-2.0.GioUnix.DesktopAppInfo

    connect(sigName: "notify::filename", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `GDesktopAppInfo` is an implementation of [iface`Gio`.AppInfo] based on
 * desktop files.
 * 
 * Note that `<gio/gdesktopappinfo.h>` belongs to the UNIX-specific
 * GIO interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
 * file or the `GioUnix-2.0` GIR namespace when using it.
 * @class 
 */
export class DesktopAppInfo extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfo

    static name: string
    static $gtype: GObject.GType<DesktopAppInfo>

    // Constructors of GioUnix-2.0.GioUnix.DesktopAppInfo

    constructor(config?: DesktopAppInfo.ConstructorProperties) 
    /**
     * Creates a new #GDesktopAppInfo based on a desktop file id.
     * 
     * A desktop file id is the basename of the desktop file, including the
     * .desktop extension. GIO is looking for a desktop file with this name
     * in the `applications` subdirectories of the XDG
     * data directories (i.e. the directories specified in the `XDG_DATA_HOME`
     * and `XDG_DATA_DIRS` environment variables). GIO also supports the
     * prefix-to-subdirectory mapping that is described in the
     * [Menu Spec](http://standards.freedesktop.org/menu-spec/latest/)
     * (i.e. a desktop id of kde-foo.desktop will match
     * `/usr/share/applications/kde/foo.desktop`).
     * @constructor 
     * @param desktop_id the desktop file id
     * @returns a new #GDesktopAppInfo, or %NULL if no desktop     file with that id exists.
     */
    constructor(desktop_id: string) 
    /**
     * Creates a new #GDesktopAppInfo based on a desktop file id.
     * 
     * A desktop file id is the basename of the desktop file, including the
     * .desktop extension. GIO is looking for a desktop file with this name
     * in the `applications` subdirectories of the XDG
     * data directories (i.e. the directories specified in the `XDG_DATA_HOME`
     * and `XDG_DATA_DIRS` environment variables). GIO also supports the
     * prefix-to-subdirectory mapping that is described in the
     * [Menu Spec](http://standards.freedesktop.org/menu-spec/latest/)
     * (i.e. a desktop id of kde-foo.desktop will match
     * `/usr/share/applications/kde/foo.desktop`).
     * @constructor 
     * @param desktop_id the desktop file id
     * @returns a new #GDesktopAppInfo, or %NULL if no desktop     file with that id exists.
     */
    static new(desktop_id: string): DesktopAppInfo
    /**
     * Creates a new #GDesktopAppInfo.
     * @constructor 
     * @param filename the path of a desktop file, in the GLib      filename encoding
     * @returns a new #GDesktopAppInfo or %NULL on error.
     */
    static new_from_filename(filename: string): DesktopAppInfo
    /**
     * Creates a new #GDesktopAppInfo.
     * @constructor 
     * @param key_file an opened #GKeyFile
     * @returns a new #GDesktopAppInfo or %NULL on error.
     */
    static new_from_keyfile(key_file: any): DesktopAppInfo
    _init(config?: DesktopAppInfo.ConstructorProperties): void
    /**
     * Gets the user-visible display name of the "additional application
     * action" specified by `action_name`.
     * 
     * This corresponds to the "Name" key within the keyfile group for the
     * action.
     * @param info a #GDesktopAppInfo
     * @param action_name the name of the action as from   g_desktop_app_info_list_actions()
     * @returns the locale-specific action name
     */
    static get_action_name(info: any, action_name: string): string | null
    /**
     * Looks up a boolean value in the keyfile backing `info`.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns the boolean value, or %FALSE if the key     is not found
     */
    static get_boolean(info: any, key: string): boolean
    /**
     * Gets the categories from the desktop file.
     * @param info a #GDesktopAppInfo
     * @returns The unparsed Categories key from the desktop file;     i.e. no attempt is made to split it by ';' or validate it.
     */
    static get_categories(info: any): string | null
    /**
     * When `info` was created from a known filename, return it.  In some
     * situations such as the #GDesktopAppInfo returned from
     * g_desktop_app_info_new_from_keyfile(), this function will return %NULL.
     * @param info a #GDesktopAppInfo
     * @returns The full path to the file for @info,     or %NULL if not known.
     */
    static get_filename(info: any): string | null
    /**
     * Gets the generic name from the desktop file.
     * @param info a #GDesktopAppInfo
     * @returns The value of the GenericName key
     */
    static get_generic_name(info: any): string | null
    /**
     * Gets all applications that implement `interface`.
     * 
     * An application implements an interface if that interface is listed in
     * the Implements= line of the desktop file of the application.
     * @param interface the name of the interface
     * @returns a list of #GDesktopAppInfo objects.
     */
    static get_implementations(interface: string): any[]
    /**
     * A desktop file is hidden if the Hidden key in it is
     * set to True.
     * @param info a #GDesktopAppInfo.
     * @returns %TRUE if hidden, %FALSE otherwise.
     */
    static get_is_hidden(info: any): boolean
    /**
     * Gets the keywords from the desktop file.
     * @param info a #GDesktopAppInfo
     * @returns The value of the Keywords key
     */
    static get_keywords(info: any): string[]
    /**
     * Looks up a localized string value in the keyfile backing `info`
     * translated to the current locale.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns a newly allocated string, or %NULL if the key     is not found
     */
    static get_locale_string(info: any, key: string): string | null
    /**
     * Gets the value of the NoDisplay key, which helps determine if the
     * application info should be shown in menus. See
     * %G_KEY_FILE_DESKTOP_KEY_NO_DISPLAY and g_app_info_should_show().
     * @param info a #GDesktopAppInfo
     * @returns The value of the NoDisplay key
     */
    static get_nodisplay(info: any): boolean
    /**
     * Checks if the application info should be shown in menus that list available
     * applications for a specific name of the desktop, based on the
     * `OnlyShowIn` and `NotShowIn` keys.
     * 
     * `desktop_env` should typically be given as %NULL, in which case the
     * `XDG_CURRENT_DESKTOP` environment variable is consulted.  If you want
     * to override the default mechanism then you may specify `desktop_env,`
     * but this is not recommended.
     * 
     * Note that g_app_info_should_show() for `info` will include this check (with
     * %NULL for `desktop_env)` as well as additional checks.
     * @param info a #GDesktopAppInfo
     * @param desktop_env a string specifying a desktop name
     * @returns %TRUE if the @info should be shown in @desktop_env according to the `OnlyShowIn` and `NotShowIn` keys, %FALSE otherwise.
     */
    static get_show_in(info: any, desktop_env: string | null): boolean
    /**
     * Retrieves the StartupWMClass field from `info`. This represents the
     * WM_CLASS property of the main window of the application, if launched
     * through `info`.
     * @param info a #GDesktopAppInfo that supports startup notify
     * @returns the startup WM class, or %NULL if none is set in the desktop file.
     */
    static get_startup_wm_class(info: any): string | null
    /**
     * Looks up a string value in the keyfile backing `info`.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns a newly allocated string, or %NULL if the key     is not found
     */
    static get_string(info: any, key: string): string | null
    /**
     * Looks up a string list value in the keyfile backing `info`.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns a %NULL-terminated string array or %NULL if the specified  key cannot be found. The array should be freed with g_strfreev().
     */
    static get_string_list(info: any, key: string): string[]
    /**
     * Returns whether `key` exists in the "Desktop Entry" group
     * of the keyfile backing `info`.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns %TRUE if the @key exists
     */
    static has_key(info: any, key: string): boolean
    /**
     * Activates the named application action.
     * 
     * You may only call this function on action names that were
     * returned from g_desktop_app_info_list_actions().
     * 
     * Note that if the main entry of the desktop file indicates that the
     * application supports startup notification, and `launch_context` is
     * non-%NULL, then startup notification will be used when activating the
     * action (and as such, invocation of the action on the receiving side
     * must signal the end of startup notification when it is completed).
     * This is the expected behaviour of applications declaring additional
     * actions, as per the desktop file specification.
     * 
     * As with g_app_info_launch() there is no way to detect failures that
     * occur while using this function.
     * @param info a #GDesktopAppInfo
     * @param action_name the name of the action as from   g_desktop_app_info_list_actions()
     * @param launch_context a #GAppLaunchContext
     */
    static launch_action(info: any, action_name: string, launch_context: any | null): void
    /**
     * This function performs the equivalent of g_app_info_launch_uris(),
     * but is intended primarily for operating system components that
     * launch applications.  Ordinary applications should use
     * g_app_info_launch_uris().
     * 
     * If the application is launched via GSpawn, then `spawn_flags,` `user_setup`
     * and `user_setup_data` are used for the call to g_spawn_async().
     * Additionally, `pid_callback` (with `pid_callback_data)` will be called to
     * inform about the PID of the created process. See g_spawn_async_with_pipes()
     * for information on certain parameter conditions that can enable an
     * optimized posix_spawn() codepath to be used.
     * 
     * If application launching occurs via some other mechanism (eg: D-Bus
     * activation) then `spawn_flags,` `user_setup,` `user_setup_data,`
     * `pid_callback` and `pid_callback_data` are ignored.
     * @param appinfo a #GDesktopAppInfo
     * @param uris List of URIs
     * @param launch_context a #GAppLaunchContext
     * @param spawn_flags #GSpawnFlags, used for each process
     * @returns %TRUE on successful launch, %FALSE otherwise.
     */
    static launch_uris_as_manager(appinfo: any, uris: string[], launch_context: any | null, spawn_flags: any): boolean
    /**
     * Equivalent to g_desktop_app_info_launch_uris_as_manager() but allows
     * you to pass in file descriptors for the stdin, stdout and stderr streams
     * of the launched process.
     * 
     * If application launching occurs via some non-spawn mechanism (e.g. D-Bus
     * activation) then `stdin_fd,` `stdout_fd` and `stderr_fd` are ignored.
     * @param appinfo a #GDesktopAppInfo
     * @param uris List of URIs
     * @param launch_context a #GAppLaunchContext
     * @param spawn_flags #GSpawnFlags, used for each process
     * @param user_setup a #GSpawnChildSetupFunc, used once     for each process.
     * @param pid_callback Callback for child processes
     * @param stdin_fd file descriptor to use for child's stdin, or -1
     * @param stdout_fd file descriptor to use for child's stdout, or -1
     * @param stderr_fd file descriptor to use for child's stderr, or -1
     * @returns %TRUE on successful launch, %FALSE otherwise.
     */
    static launch_uris_as_manager_with_fds(appinfo: any, uris: string[], launch_context: any | null, spawn_flags: any, user_setup: any | null, pid_callback: any | null, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean
    /**
     * Returns the list of "additional application actions" supported on the
     * desktop file, as per the desktop file specification.
     * 
     * As per the specification, this is the list of actions that are
     * explicitly listed in the "Actions" key of the [Desktop Entry] group.
     * @param info a #GDesktopAppInfo
     * @returns a list of strings, always non-%NULL
     */
    static list_actions(info: any): string[]
    /**
     * Searches desktop files for ones that match `search_string`.
     * 
     * The return value is an array of strvs.  Each strv contains a list of
     * applications that matched `search_string` with an equal score.  The
     * outer list is sorted by score so that the first strv contains the
     * best-matching applications, and so on.
     * The algorithm for determining matches is undefined and may change at
     * any time.
     * 
     * None of the search results are subjected to the normal validation
     * checks performed by g_desktop_app_info_new() (for example, checking that
     * the executable referenced by a result exists), and so it is possible for
     * g_desktop_app_info_new() to return %NULL when passed an app ID returned by
     * this function. It is expected that calling code will do this when
     * subsequently creating a #GDesktopAppInfo for each result.
     * @param search_string the search string to use
     * @returns a   list of strvs.  Free each item with g_strfreev() and free the outer   list with g_free().
     */
    static search(search_string: string): string[]
    /**
     * Sets the name of the desktop that the application is running in.
     * This is used by g_app_info_should_show() and
     * g_desktop_app_info_get_show_in() to evaluate the
     * `OnlyShowIn` and `NotShowIn`
     * desktop entry fields.
     * 
     * Should be called only once; subsequent calls are ignored.
     * @param desktop_env a string specifying what desktop this is
     */
    static set_desktop_env(desktop_env: string): void
}

export interface FDMessage {

    // Own properties of GioUnix-2.0.GioUnix.FDMessage

    /**
     * The [class`Gio`.UnixFDList] object to send with the message.
     */
    readonly fdList: any

    // Own fields of GioUnix-2.0.GioUnix.FDMessage

    parent_instance: any
    priv: any
}

/**
 * This [class`Gio`.SocketControlMessage] contains a [class`Gio`.UnixFDList].
 * It may be sent using [method`Gio`.Socket.send_message] and received using
 * [method`Gio`.Socket.receive_message] over UNIX sockets (ie: sockets in the
 * `G_SOCKET_FAMILY_UNIX` family). The file descriptors are copied
 * between processes by the kernel.
 * 
 * For an easier way to send and receive file descriptors over
 * stream-oriented UNIX sockets, see [method`Gio`.UnixConnection.send_fd] and
 * [method`Gio`.UnixConnection.receive_fd].
 * 
 * Note that `<gio/gunixfdmessage.h>` belongs to the UNIX-specific GIO
 * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
 * file or the `GioUnix-2.0` GIR namespace when using it.
 * @class 
 */
export class FDMessage {

    // Own properties of GioUnix-2.0.GioUnix.FDMessage

    static name: string

    // Constructors of GioUnix-2.0.GioUnix.FDMessage

    /**
     * Creates a new #GUnixFDMessage containing an empty file descriptor
     * list.
     * @constructor 
     * @returns a new #GUnixFDMessage
     */
    constructor() 
    /**
     * Creates a new #GUnixFDMessage containing an empty file descriptor
     * list.
     * @constructor 
     * @returns a new #GUnixFDMessage
     */
    static new(): FDMessage
    /**
     * Creates a new #GUnixFDMessage containing `list`.
     * @constructor 
     * @param fd_list a #GUnixFDList
     * @returns a new #GUnixFDMessage
     */
    static new_with_fd_list(fd_list: any): FDMessage
    /**
     * Adds a file descriptor to `message`.
     * 
     * The file descriptor is duplicated using dup(). You keep your copy
     * of the descriptor and the copy contained in `message` will be closed
     * when `message` is finalized.
     * 
     * A possible cause of failure is exceeding the per-process or
     * system-wide file descriptor limit.
     * @param message a #GUnixFDMessage
     * @param fd a valid open file descriptor
     * @returns %TRUE in case of success, else %FALSE (and @error is set)
     */
    static append_fd(message: any, fd: number): boolean
    /**
     * Gets the #GUnixFDList contained in `message`.  This function does not
     * return a reference to the caller, but the returned list is valid for
     * the lifetime of `message`.
     * @param message a #GUnixFDMessage
     * @returns the #GUnixFDList from @message
     */
    static get_fd_list(message: any): any
    /**
     * Returns the array of file descriptors that is contained in this
     * object.
     * 
     * After this call, the descriptors are no longer contained in
     * `message`. Further calls will return an empty list (unless more
     * descriptors have been added).
     * 
     * The return result of this function must be freed with g_free().
     * The caller is also responsible for closing all of the file
     * descriptors.
     * 
     * If `length` is non-%NULL then it is set to the number of file
     * descriptors in the returned array. The returned array is also
     * terminated with -1.
     * 
     * This function never returns %NULL. In case there are no file
     * descriptors contained in `message,` an empty array is returned.
     * @param message a #GUnixFDMessage
     * @returns an array of file     descriptors
     */
    static steal_fds(message: any): number[]
}

export module InputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends FileDescriptorBased.ConstructorProperties {

        // Own constructor properties of GioUnix-2.0.GioUnix.InputStream

        /**
         * Whether to close the file descriptor when the stream is closed.
         */
        closeFd?: boolean | null
        /**
         * The file descriptor that the stream reads from.
         */
        fd?: number | null
    }

}

export interface InputStream extends FileDescriptorBased {

    // Own properties of GioUnix-2.0.GioUnix.InputStream

    /**
     * Whether to close the file descriptor when the stream is closed.
     */
    closeFd: boolean
    /**
     * The file descriptor that the stream reads from.
     */
    readonly fd: number

    // Own fields of GioUnix-2.0.GioUnix.InputStream

    parent_instance: any

    // Class property signals of GioUnix-2.0.GioUnix.InputStream

    connect(sigName: "notify::close-fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-fd", ...args: any[]): void
    connect(sigName: "notify::fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `GUnixInputStream` implements [class`Gio`.InputStream] for reading from a UNIX
 * file descriptor, including asynchronous operations. (If the file
 * descriptor refers to a socket or pipe, this will use `poll()` to do
 * asynchronous I/O. If it refers to a regular file, it will fall back
 * to doing asynchronous I/O in another thread.)
 * 
 * Note that `<gio/gunixinputstream.h>` belongs to the UNIX-specific GIO
 * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
 * file or the `GioUnix-2.0` GIR namespace when using it.
 * @class 
 */
export class InputStream {

    // Own properties of GioUnix-2.0.GioUnix.InputStream

    static name: string
    static $gtype: GObject.GType<InputStream>

    // Constructors of GioUnix-2.0.GioUnix.InputStream

    constructor(config?: InputStream.ConstructorProperties) 
    /**
     * Creates a new #GUnixInputStream for the given `fd`.
     * 
     * If `close_fd` is %TRUE, the file descriptor will be closed
     * when the stream is closed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param close_fd %TRUE to close the file descriptor when done
     * @returns a new #GUnixInputStream
     */
    constructor(fd: number, close_fd: boolean) 
    /**
     * Creates a new #GUnixInputStream for the given `fd`.
     * 
     * If `close_fd` is %TRUE, the file descriptor will be closed
     * when the stream is closed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param close_fd %TRUE to close the file descriptor when done
     * @returns a new #GUnixInputStream
     */
    static new(fd: number, close_fd: boolean): InputStream
    _init(config?: InputStream.ConstructorProperties): void
    /**
     * Returns whether the file descriptor of `stream` will be
     * closed when the stream is closed.
     * @param stream a #GUnixInputStream
     * @returns %TRUE if the file descriptor is closed when done
     */
    static get_close_fd(stream: any): boolean
    /**
     * Return the UNIX file descriptor that the stream reads from.
     * @param stream a #GUnixInputStream
     * @returns The file descriptor of @stream
     */
    static get_fd(stream: any): number
    /**
     * Sets whether the file descriptor of `stream` shall be closed
     * when the stream is closed.
     * @param stream a #GUnixInputStream
     * @param close_fd %TRUE to close the file descriptor when done
     */
    static set_close_fd(stream: any, close_fd: boolean): void
}

export module MountMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `mountpoints-changed`
     */
    export interface MountpointsChangedSignalCallback {
        ($obj: MountMonitor): void
    }

    /**
     * Signal callback interface for `mounts-changed`
     */
    export interface MountsChangedSignalCallback {
        ($obj: MountMonitor): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MountMonitor {

    // Own signals of GioUnix-2.0.GioUnix.MountMonitor

    connect(sigName: "mountpoints-changed", callback: MountMonitor.MountpointsChangedSignalCallback): number
    connect_after(sigName: "mountpoints-changed", callback: MountMonitor.MountpointsChangedSignalCallback): number
    emit(sigName: "mountpoints-changed", ...args: any[]): void
    connect(sigName: "mounts-changed", callback: MountMonitor.MountsChangedSignalCallback): number
    connect_after(sigName: "mounts-changed", callback: MountMonitor.MountsChangedSignalCallback): number
    emit(sigName: "mounts-changed", ...args: any[]): void

    // Class property signals of GioUnix-2.0.GioUnix.MountMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Watches #GUnixMounts for changes.
 * @class 
 */
export class MountMonitor extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.MountMonitor

    static name: string
    static $gtype: GObject.GType<MountMonitor>

    // Constructors of GioUnix-2.0.GioUnix.MountMonitor

    constructor(config?: MountMonitor.ConstructorProperties) 
    /**
     * Deprecated alias for g_unix_mount_monitor_get().
     * 
     * This function was never a true constructor, which is why it was
     * renamed.
     * @constructor 
     * @returns a #GUnixMountMonitor.
     */
    constructor() 
    /**
     * Deprecated alias for g_unix_mount_monitor_get().
     * 
     * This function was never a true constructor, which is why it was
     * renamed.
     * @constructor 
     * @returns a #GUnixMountMonitor.
     */
    static new(): MountMonitor
    _init(config?: MountMonitor.ConstructorProperties): void
    /**
     * Gets the #GUnixMountMonitor for the current thread-default main
     * context.
     * 
     * The mount monitor can be used to monitor for changes to the list of
     * mounted filesystems as well as the list of mount points (ie: fstab
     * entries).
     * 
     * You must only call g_object_unref() on the return value from under
     * the same main context as you called this function.
     * @returns the #GUnixMountMonitor.
     */
    static get(): any
    /**
     * This function does nothing.
     * 
     * Before 2.44, this was a partially-effective way of controlling the
     * rate at which events would be reported under some uncommon
     * circumstances.  Since `mount_monitor` is a singleton, it also meant
     * that calling this function would have side effects for other users of
     * the monitor.
     * @param mount_monitor a #GUnixMountMonitor
     * @param limit_msec a integer with the limit in milliseconds to     poll for changes.
     */
    static set_rate_limit(mount_monitor: any, limit_msec: number): void
}

export module OutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends FileDescriptorBased.ConstructorProperties {

        // Own constructor properties of GioUnix-2.0.GioUnix.OutputStream

        /**
         * Whether to close the file descriptor when the stream is closed.
         */
        closeFd?: boolean | null
        /**
         * The file descriptor that the stream writes to.
         */
        fd?: number | null
    }

}

export interface OutputStream extends FileDescriptorBased {

    // Own properties of GioUnix-2.0.GioUnix.OutputStream

    /**
     * Whether to close the file descriptor when the stream is closed.
     */
    closeFd: boolean
    /**
     * The file descriptor that the stream writes to.
     */
    readonly fd: number

    // Own fields of GioUnix-2.0.GioUnix.OutputStream

    parent_instance: any

    // Class property signals of GioUnix-2.0.GioUnix.OutputStream

    connect(sigName: "notify::close-fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-fd", ...args: any[]): void
    connect(sigName: "notify::fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `GUnixOutputStream` implements [class`Gio`.OutputStream] for writing to a UNIX
 * file descriptor, including asynchronous operations. (If the file
 * descriptor refers to a socket or pipe, this will use `poll()` to do
 * asynchronous I/O. If it refers to a regular file, it will fall back
 * to doing asynchronous I/O in another thread.)
 * 
 * Note that `<gio/gunixoutputstream.h>` belongs to the UNIX-specific GIO
 * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config file
 * file or the `GioUnix-2.0` GIR namespace when using it.
 * @class 
 */
export class OutputStream {

    // Own properties of GioUnix-2.0.GioUnix.OutputStream

    static name: string
    static $gtype: GObject.GType<OutputStream>

    // Constructors of GioUnix-2.0.GioUnix.OutputStream

    constructor(config?: OutputStream.ConstructorProperties) 
    /**
     * Creates a new #GUnixOutputStream for the given `fd`.
     * 
     * If `close_fd,` is %TRUE, the file descriptor will be closed when
     * the output stream is destroyed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param close_fd %TRUE to close the file descriptor when done
     * @returns a new #GOutputStream
     */
    constructor(fd: number, close_fd: boolean) 
    /**
     * Creates a new #GUnixOutputStream for the given `fd`.
     * 
     * If `close_fd,` is %TRUE, the file descriptor will be closed when
     * the output stream is destroyed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param close_fd %TRUE to close the file descriptor when done
     * @returns a new #GOutputStream
     */
    static new(fd: number, close_fd: boolean): OutputStream
    _init(config?: OutputStream.ConstructorProperties): void
    /**
     * Returns whether the file descriptor of `stream` will be
     * closed when the stream is closed.
     * @param stream a #GUnixOutputStream
     * @returns %TRUE if the file descriptor is closed when done
     */
    static get_close_fd(stream: any): boolean
    /**
     * Return the UNIX file descriptor that the stream writes to.
     * @param stream a #GUnixOutputStream
     * @returns The file descriptor of @stream
     */
    static get_fd(stream: any): number
    /**
     * Sets whether the file descriptor of `stream` shall be closed
     * when the stream is closed.
     * @param stream a #GUnixOutputStream
     * @param close_fd %TRUE to close the file descriptor when done
     */
    static set_close_fd(stream: any, close_fd: boolean): void
}

export interface DesktopAppInfoClass {

    // Own fields of GioUnix-2.0.GioUnix.DesktopAppInfoClass

    parent_class: GObject.ObjectClass
}

export abstract class DesktopAppInfoClass {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoClass

    static name: string
}

export interface DesktopAppInfoLookupIface {

    // Own fields of GioUnix-2.0.GioUnix.DesktopAppInfoLookupIface

    g_iface: GObject.TypeInterface
}

/**
 * Interface that is used by backends to associate default
 * handlers with URI schemes.
 * @record 
 */
export abstract class DesktopAppInfoLookupIface {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoLookupIface

    static name: string
}

export interface FDMessageClass {

    // Own fields of GioUnix-2.0.GioUnix.FDMessageClass

    parent_class: any
}

export abstract class FDMessageClass {

    // Own properties of GioUnix-2.0.GioUnix.FDMessageClass

    static name: string
}

export interface FDMessagePrivate {
}

export class FDMessagePrivate {

    // Own properties of GioUnix-2.0.GioUnix.FDMessagePrivate

    static name: string
}

export interface FileDescriptorBasedIface {

    // Own fields of GioUnix-2.0.GioUnix.FileDescriptorBasedIface

    /**
     * The parent interface.
     * @field 
     */
    g_iface: GObject.TypeInterface
    /**
     * Gets the underlying file descriptor.
     * @field 
     */
    get_fd: (fd_based: any) => number
}

/**
 * An interface for file descriptor based io objects.
 * @record 
 */
export abstract class FileDescriptorBasedIface {

    // Own properties of GioUnix-2.0.GioUnix.FileDescriptorBasedIface

    static name: string
}

export interface InputStreamClass {

    // Own fields of GioUnix-2.0.GioUnix.InputStreamClass

    parent_class: any
}

export abstract class InputStreamClass {

    // Own properties of GioUnix-2.0.GioUnix.InputStreamClass

    static name: string
}

export interface InputStreamPrivate {
}

export class InputStreamPrivate {

    // Own properties of GioUnix-2.0.GioUnix.InputStreamPrivate

    static name: string
}

export interface MountEntry {
}

/**
 * Defines a Unix mount entry (e.g. <filename>/media/cdrom</filename>).
 * This corresponds roughly to a mtab entry.
 * @record 
 */
export class MountEntry {

    // Own properties of GioUnix-2.0.GioUnix.MountEntry

    static name: string
}

export interface MountMonitorClass {
}

export abstract class MountMonitorClass {

    // Own properties of GioUnix-2.0.GioUnix.MountMonitorClass

    static name: string
}

export interface MountPoint {
}

/**
 * Defines a Unix mount point (e.g. <filename>/dev</filename>).
 * This corresponds roughly to a fstab entry.
 * @record 
 */
export class MountPoint {

    // Own properties of GioUnix-2.0.GioUnix.MountPoint

    static name: string

    // Constructors of GioUnix-2.0.GioUnix.MountPoint

    /**
     * Gets a #GUnixMountPoint for a given mount path. If `time_read` is set, it
     * will be filled with a unix timestamp for checking if the mount points have
     * changed since with g_unix_mount_points_changed_since().
     * 
     * If more mount points have the same mount path, the last matching mount point
     * is returned.
     * @param mount_path path for a possible unix mount point.
     * @returns a #GUnixMountPoint, or %NULL if no match is found.
     */
    static at(mount_path: string): [ /* returnType */ any | null, /* time_read */ number ]
    /**
     * Compares two unix mount points.
     * @param mount1 a #GUnixMount.
     * @param mount2 a #GUnixMount.
     * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
     */
    static compare(mount1: any, mount2: any): number
    /**
     * Makes a copy of `mount_point`.
     * @param mount_point a #GUnixMountPoint.
     * @returns a new #GUnixMountPoint
     */
    static copy(mount_point: any): any
    /**
     * Frees a unix mount point.
     * @param mount_point unix mount point to free.
     */
    static free(mount_point: any): void
    /**
     * Gets the device path for a unix mount point.
     * @param mount_point a #GUnixMountPoint.
     * @returns a string containing the device path.
     */
    static get_device_path(mount_point: any): string
    /**
     * Gets the file system type for the mount point.
     * @param mount_point a #GUnixMountPoint.
     * @returns a string containing the file system type.
     */
    static get_fs_type(mount_point: any): string
    /**
     * Gets the mount path for a unix mount point.
     * @param mount_point a #GUnixMountPoint.
     * @returns a string containing the mount path.
     */
    static get_mount_path(mount_point: any): string
    /**
     * Gets the options for the mount point.
     * @param mount_point a #GUnixMountPoint.
     * @returns a string containing the options.
     */
    static get_options(mount_point: any): string | null
    /**
     * Guesses whether a Unix mount point can be ejected.
     * @param mount_point a #GUnixMountPoint
     * @returns %TRUE if @mount_point is deemed to be ejectable.
     */
    static guess_can_eject(mount_point: any): boolean
    /**
     * Guesses the icon of a Unix mount point.
     * @param mount_point a #GUnixMountPoint
     * @returns a #GIcon
     */
    static guess_icon(mount_point: any): any
    /**
     * Guesses the name of a Unix mount point.
     * The result is a translated string.
     * @param mount_point a #GUnixMountPoint
     * @returns A newly allocated string that must     be freed with g_free()
     */
    static guess_name(mount_point: any): string | null
    /**
     * Guesses the symbolic icon of a Unix mount point.
     * @param mount_point a #GUnixMountPoint
     * @returns a #GIcon
     */
    static guess_symbolic_icon(mount_point: any): any
    /**
     * Checks if a unix mount point is a loopback device.
     * @param mount_point a #GUnixMountPoint.
     * @returns %TRUE if the mount point is a loopback. %FALSE otherwise.
     */
    static is_loopback(mount_point: any): boolean
    /**
     * Checks if a unix mount point is read only.
     * @param mount_point a #GUnixMountPoint.
     * @returns %TRUE if a mount point is read only.
     */
    static is_readonly(mount_point: any): boolean
    /**
     * Checks if a unix mount point is mountable by the user.
     * @param mount_point a #GUnixMountPoint.
     * @returns %TRUE if the mount point is user mountable.
     */
    static is_user_mountable(mount_point: any): boolean
}

export interface OutputStreamClass {

    // Own fields of GioUnix-2.0.GioUnix.OutputStreamClass

    parent_class: any
}

export abstract class OutputStreamClass {

    // Own properties of GioUnix-2.0.GioUnix.OutputStreamClass

    static name: string
}

export interface OutputStreamPrivate {
}

export class OutputStreamPrivate {

    // Own properties of GioUnix-2.0.GioUnix.OutputStreamPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END