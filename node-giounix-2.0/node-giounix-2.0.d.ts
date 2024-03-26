
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-giounix-2.0-import.d.ts';
    
/**
 * GioUnix-2.0
 */

import type GObject from '@girs/node-gobject-2.0';

export namespace GioUnix {

/**
 * Extension point for default handler to URI association. See
 * [Extending GIO][extending-gio].
 */
const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
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
 * @param uriScheme a string containing a URI scheme.
 * @returns #GAppInfo for given @uri_scheme or    %NULL on error.
 */
function desktopAppInfoLookupGetDefaultForUriScheme(lookup: any, uriScheme: string): any | null
/**
 * Gets the underlying file descriptor.
 * @param fdBased a #GFileDescriptorBased.
 * @returns The file descriptor
 */
function fileDescriptorBasedGetFd(fdBased: any): number
/**
 * Determines if `mount_path` is considered an implementation of the
 * OS. This is primarily used for hiding mountable and mounted volumes
 * that only are used in the OS and has little to no relevance to the
 * casual user.
 * @param mountPath a mount path, e.g. `/media/disk` or `/usr`
 * @returns %TRUE if @mount_path is considered an implementation detail     of the OS.
 */
function isMountPathSystemInternal(mountPath: string): boolean
/**
 * Determines if `device_path` is considered a block device path which is only
 * used in implementation of the OS. This is primarily used for hiding
 * mounted volumes that are intended as APIs for programs to read, and system
 * administrators at a shell; rather than something that should, for example,
 * appear in a GUI. For example, the Linux `/proc` filesystem.
 * 
 * The list of device paths considered ‘system’ ones may change over time.
 * @param devicePath a device path, e.g. `/dev/loop0` or `nfsd`
 * @returns %TRUE if @device_path is considered an implementation detail of    the OS.
 */
function isSystemDevicePath(devicePath: string): boolean
/**
 * Determines if `fs_type` is considered a type of file system which is only
 * used in implementation of the OS. This is primarily used for hiding
 * mounted volumes that are intended as APIs for programs to read, and system
 * administrators at a shell; rather than something that should, for example,
 * appear in a GUI. For example, the Linux `/proc` filesystem.
 * 
 * The list of file system types considered ‘system’ ones may change over time.
 * @param fsType a file system type, e.g. `procfs` or `tmpfs`
 * @returns %TRUE if @fs_type is considered an implementation detail of the OS.
 */
function isSystemFsType(fsType: string): boolean
/**
 * Gets a #GUnixMountEntry for a given mount path. If `time_read`
 * is set, it will be filled with a unix timestamp for checking
 * if the mounts have changed since with g_unix_mounts_changed_since().
 * 
 * If more mounts have the same mount path, the last matching mount
 * is returned.
 * 
 * This will return %NULL if there is no mount point at `mount_path`.
 * @param mountPath path for a possible unix mount.
 * @returns a #GUnixMountEntry.
 */
function mountAt(mountPath: string): [ /* returnType */ any | null, /* timeRead */ number ]
/**
 * Compares two unix mounts.
 * @param mount1 first #GUnixMountEntry to compare.
 * @param mount2 second #GUnixMountEntry to compare.
 * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
 */
function mountCompare(mount1: any, mount2: any): number
/**
 * Makes a copy of `mount_entry`.
 * @param mountEntry a #GUnixMountEntry.
 * @returns a new #GUnixMountEntry
 */
function mountCopy(mountEntry: any): any
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
 * @param filePath file path on some unix mount.
 * @returns a #GUnixMountEntry.
 */
function mountFor(filePath: string): [ /* returnType */ any | null, /* timeRead */ number ]
/**
 * Frees a unix mount.
 * @param mountEntry a #GUnixMountEntry.
 */
function mountFree(mountEntry: any): void
/**
 * Gets the device path for a unix mount.
 * @param mountEntry a #GUnixMount.
 * @returns a string containing the device path.
 */
function mountGetDevicePath(mountEntry: any): string
/**
 * Gets the filesystem type for the unix mount.
 * @param mountEntry a #GUnixMount.
 * @returns a string containing the file system type.
 */
function mountGetFsType(mountEntry: any): string
/**
 * Gets the mount path for a unix mount.
 * @param mountEntry input #GUnixMountEntry to get the mount path for.
 * @returns the mount path for @mount_entry.
 */
function mountGetMountPath(mountEntry: any): string
/**
 * Gets a comma-separated list of mount options for the unix mount. For example,
 * `rw,relatime,seclabel,data=ordered`.
 * 
 * This is similar to g_unix_mount_point_get_options(), but it takes
 * a #GUnixMountEntry as an argument.
 * @param mountEntry a #GUnixMountEntry.
 * @returns a string containing the options, or %NULL if not available.
 */
function mountGetOptions(mountEntry: any): string | null
/**
 * Gets the root of the mount within the filesystem. This is useful e.g. for
 * mounts created by bind operation, or btrfs subvolumes.
 * 
 * For example, the root path is equal to "/" for mount created by
 * "mount /dev/sda1 /mnt/foo" and "/bar" for
 * "mount --bind /mnt/foo/bar /mnt/bar".
 * @param mountEntry a #GUnixMountEntry.
 * @returns a string containing the root, or %NULL if not supported.
 */
function mountGetRootPath(mountEntry: any): string | null
/**
 * Guesses whether a Unix mount can be ejected.
 * @param mountEntry a #GUnixMountEntry
 * @returns %TRUE if @mount_entry is deemed to be ejectable.
 */
function mountGuessCanEject(mountEntry: any): boolean
/**
 * Guesses the icon of a Unix mount.
 * @param mountEntry a #GUnixMountEntry
 * @returns a #GIcon
 */
function mountGuessIcon(mountEntry: any): any
/**
 * Guesses the name of a Unix mount.
 * The result is a translated string.
 * @param mountEntry a #GUnixMountEntry
 * @returns A newly allocated string that must     be freed with g_free()
 */
function mountGuessName(mountEntry: any): string | null
/**
 * Guesses whether a Unix mount should be displayed in the UI.
 * @param mountEntry a #GUnixMountEntry
 * @returns %TRUE if @mount_entry is deemed to be displayable.
 */
function mountGuessShouldDisplay(mountEntry: any): boolean
/**
 * Guesses the symbolic icon of a Unix mount.
 * @param mountEntry a #GUnixMountEntry
 * @returns a #GIcon
 */
function mountGuessSymbolicIcon(mountEntry: any): any
/**
 * Checks if a unix mount is mounted read only.
 * @param mountEntry a #GUnixMount.
 * @returns %TRUE if @mount_entry is read only.
 */
function mountIsReadonly(mountEntry: any): boolean
/**
 * Checks if a Unix mount is a system mount. This is the Boolean OR of
 * g_unix_is_system_fs_type(), g_unix_is_system_device_path() and
 * g_unix_is_mount_path_system_internal() on `mount_entry’`s properties.
 * 
 * The definition of what a ‘system’ mount entry is may change over time as new
 * file system types and device paths are ignored.
 * @param mountEntry a #GUnixMount.
 * @returns %TRUE if the unix mount is for a system path.
 */
function mountIsSystemInternal(mountEntry: any): boolean
/**
 * Gets a #GUnixMountPoint for a given mount path. If `time_read` is set, it
 * will be filled with a unix timestamp for checking if the mount points have
 * changed since with g_unix_mount_points_changed_since().
 * 
 * If more mount points have the same mount path, the last matching mount point
 * is returned.
 * @param mountPath path for a possible unix mount point.
 * @returns a #GUnixMountPoint, or %NULL if no match is found.
 */
function mountPointAt(mountPath: string): [ /* returnType */ any | null, /* timeRead */ number ]
/**
 * Compares two unix mount points.
 * @param mount1 a #GUnixMount.
 * @param mount2 a #GUnixMount.
 * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
 */
function mountPointCompare(mount1: any, mount2: any): number
/**
 * Makes a copy of `mount_point`.
 * @param mountPoint a #GUnixMountPoint.
 * @returns a new #GUnixMountPoint
 */
function mountPointCopy(mountPoint: any): any
/**
 * Frees a unix mount point.
 * @param mountPoint unix mount point to free.
 */
function mountPointFree(mountPoint: any): void
/**
 * Gets the device path for a unix mount point.
 * @param mountPoint a #GUnixMountPoint.
 * @returns a string containing the device path.
 */
function mountPointGetDevicePath(mountPoint: any): string
/**
 * Gets the file system type for the mount point.
 * @param mountPoint a #GUnixMountPoint.
 * @returns a string containing the file system type.
 */
function mountPointGetFsType(mountPoint: any): string
/**
 * Gets the mount path for a unix mount point.
 * @param mountPoint a #GUnixMountPoint.
 * @returns a string containing the mount path.
 */
function mountPointGetMountPath(mountPoint: any): string
/**
 * Gets the options for the mount point.
 * @param mountPoint a #GUnixMountPoint.
 * @returns a string containing the options.
 */
function mountPointGetOptions(mountPoint: any): string | null
/**
 * Guesses whether a Unix mount point can be ejected.
 * @param mountPoint a #GUnixMountPoint
 * @returns %TRUE if @mount_point is deemed to be ejectable.
 */
function mountPointGuessCanEject(mountPoint: any): boolean
/**
 * Guesses the icon of a Unix mount point.
 * @param mountPoint a #GUnixMountPoint
 * @returns a #GIcon
 */
function mountPointGuessIcon(mountPoint: any): any
/**
 * Guesses the name of a Unix mount point.
 * The result is a translated string.
 * @param mountPoint a #GUnixMountPoint
 * @returns A newly allocated string that must     be freed with g_free()
 */
function mountPointGuessName(mountPoint: any): string | null
/**
 * Guesses the symbolic icon of a Unix mount point.
 * @param mountPoint a #GUnixMountPoint
 * @returns a #GIcon
 */
function mountPointGuessSymbolicIcon(mountPoint: any): any
/**
 * Checks if a unix mount point is a loopback device.
 * @param mountPoint a #GUnixMountPoint.
 * @returns %TRUE if the mount point is a loopback. %FALSE otherwise.
 */
function mountPointIsLoopback(mountPoint: any): boolean
/**
 * Checks if a unix mount point is read only.
 * @param mountPoint a #GUnixMountPoint.
 * @returns %TRUE if a mount point is read only.
 */
function mountPointIsReadonly(mountPoint: any): boolean
/**
 * Checks if a unix mount point is mountable by the user.
 * @param mountPoint a #GUnixMountPoint.
 * @returns %TRUE if the mount point is user mountable.
 */
function mountPointIsUserMountable(mountPoint: any): boolean
/**
 * Checks if the unix mount points have changed since a given unix time.
 * @param time guint64 to contain a timestamp.
 * @returns %TRUE if the mount points have changed since @time.
 */
function mountPointsChangedSince(time: number): boolean
/**
 * Gets a #GList of #GUnixMountPoint containing the unix mount points.
 * If `time_read` is set, it will be filled with the mount timestamp,
 * allowing for checking if the mounts have changed with
 * g_unix_mount_points_changed_since().
 * @returns a #GList of the UNIX mountpoints.
 */
function mountPointsGet(): [ /* returnType */ any[], /* timeRead */ number ]
/**
 * Checks if the unix mounts have changed since a given unix time.
 * @param time guint64 to contain a timestamp.
 * @returns %TRUE if the mounts have changed since @time.
 */
function mountsChangedSince(time: number): boolean
/**
 * Gets a #GList of #GUnixMountEntry containing the unix mounts.
 * If `time_read` is set, it will be filled with the mount
 * timestamp, allowing for checking if the mounts have changed
 * with g_unix_mounts_changed_since().
 * @returns a #GList of the UNIX mounts.
 */
function mountsGet(): [ /* returnType */ any[], /* timeRead */ number ]
/**
 * During invocation, g_desktop_app_info_launch_uris_as_manager() may
 * create one or more child processes.  This callback is invoked once
 * for each, providing the process ID.
 * @callback 
 * @param appinfo a #GDesktopAppInfo
 * @param pid Process identifier
 */
interface DesktopAppLaunchCallback {
    (appinfo: any, pid: any): void
}
module DesktopAppInfoLookup {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DesktopAppInfoLookup {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoLookup

    __gtype__: number

    // Class property signals of GioUnix-2.0.GioUnix.DesktopAppInfoLookup

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
    disconnect(id: number): void
}

/**
 * #GDesktopAppInfoLookup is an opaque data structure and can only be accessed
 * using the following functions.
 * @interface 
 */
class DesktopAppInfoLookup extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoLookup

    static name: string

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
     * @param uriScheme a string containing a URI scheme.
     * @returns #GAppInfo for given @uri_scheme or    %NULL on error.
     */
    static getDefaultForUriScheme(lookup: any, uriScheme: string): any | null
}

module FileDescriptorBased {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FileDescriptorBased {

    // Own properties of GioUnix-2.0.GioUnix.FileDescriptorBased

    __gtype__: number

    // Class property signals of GioUnix-2.0.GioUnix.FileDescriptorBased

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
class FileDescriptorBased extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.FileDescriptorBased

    static name: string

    // Constructors of GioUnix-2.0.GioUnix.FileDescriptorBased

    constructor(config?: FileDescriptorBased.ConstructorProperties) 
    _init(config?: FileDescriptorBased.ConstructorProperties): void
    /**
     * Gets the underlying file descriptor.
     * @param fdBased a #GFileDescriptorBased.
     * @returns The file descriptor
     */
    static getFd(fdBased: any): number
}

module DesktopAppInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GioUnix-2.0.GioUnix.DesktopAppInfo

        /**
         * The origin filename of this #GDesktopAppInfo
         */
        filename?: string | null
    }

}

interface DesktopAppInfo {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfo

    /**
     * The origin filename of this #GDesktopAppInfo
     */
    readonly filename: string | null
    __gtype__: number

    // Class property signals of GioUnix-2.0.GioUnix.DesktopAppInfo

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
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
class DesktopAppInfo extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfo

    static name: string

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
     * @param desktopId the desktop file id
     * @returns a new #GDesktopAppInfo, or %NULL if no desktop     file with that id exists.
     */
    constructor(desktopId: string) 
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
     * @param desktopId the desktop file id
     * @returns a new #GDesktopAppInfo, or %NULL if no desktop     file with that id exists.
     */
    static new(desktopId: string): DesktopAppInfo
    /**
     * Creates a new #GDesktopAppInfo.
     * @constructor 
     * @param filename the path of a desktop file, in the GLib      filename encoding
     * @returns a new #GDesktopAppInfo or %NULL on error.
     */
    static newFromFilename(filename: string): DesktopAppInfo
    /**
     * Creates a new #GDesktopAppInfo.
     * @constructor 
     * @param keyFile an opened #GKeyFile
     * @returns a new #GDesktopAppInfo or %NULL on error.
     */
    static newFromKeyfile(keyFile: any): DesktopAppInfo
    _init(config?: DesktopAppInfo.ConstructorProperties): void
    /**
     * Gets the user-visible display name of the "additional application
     * action" specified by `action_name`.
     * 
     * This corresponds to the "Name" key within the keyfile group for the
     * action.
     * @param info a #GDesktopAppInfo
     * @param actionName the name of the action as from   g_desktop_app_info_list_actions()
     * @returns the locale-specific action name
     */
    static getActionName(info: any, actionName: string): string | null
    /**
     * Looks up a boolean value in the keyfile backing `info`.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns the boolean value, or %FALSE if the key     is not found
     */
    static getBoolean(info: any, key: string): boolean
    /**
     * Gets the categories from the desktop file.
     * @param info a #GDesktopAppInfo
     * @returns The unparsed Categories key from the desktop file;     i.e. no attempt is made to split it by ';' or validate it.
     */
    static getCategories(info: any): string | null
    /**
     * When `info` was created from a known filename, return it.  In some
     * situations such as the #GDesktopAppInfo returned from
     * g_desktop_app_info_new_from_keyfile(), this function will return %NULL.
     * @param info a #GDesktopAppInfo
     * @returns The full path to the file for @info,     or %NULL if not known.
     */
    static getFilename(info: any): string | null
    /**
     * Gets the generic name from the desktop file.
     * @param info a #GDesktopAppInfo
     * @returns The value of the GenericName key
     */
    static getGenericName(info: any): string | null
    /**
     * Gets all applications that implement `interface`.
     * 
     * An application implements an interface if that interface is listed in
     * the Implements= line of the desktop file of the application.
     * @param interface the name of the interface
     * @returns a list of #GDesktopAppInfo objects.
     */
    static getImplementations(interface: string): any[]
    /**
     * A desktop file is hidden if the Hidden key in it is
     * set to True.
     * @param info a #GDesktopAppInfo.
     * @returns %TRUE if hidden, %FALSE otherwise.
     */
    static getIsHidden(info: any): boolean
    /**
     * Gets the keywords from the desktop file.
     * @param info a #GDesktopAppInfo
     * @returns The value of the Keywords key
     */
    static getKeywords(info: any): string[]
    /**
     * Looks up a localized string value in the keyfile backing `info`
     * translated to the current locale.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns a newly allocated string, or %NULL if the key     is not found
     */
    static getLocaleString(info: any, key: string): string | null
    /**
     * Gets the value of the NoDisplay key, which helps determine if the
     * application info should be shown in menus. See
     * %G_KEY_FILE_DESKTOP_KEY_NO_DISPLAY and g_app_info_should_show().
     * @param info a #GDesktopAppInfo
     * @returns The value of the NoDisplay key
     */
    static getNodisplay(info: any): boolean
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
     * @param desktopEnv a string specifying a desktop name
     * @returns %TRUE if the @info should be shown in @desktop_env according to the `OnlyShowIn` and `NotShowIn` keys, %FALSE otherwise.
     */
    static getShowIn(info: any, desktopEnv: string | null): boolean
    /**
     * Retrieves the StartupWMClass field from `info`. This represents the
     * WM_CLASS property of the main window of the application, if launched
     * through `info`.
     * @param info a #GDesktopAppInfo that supports startup notify
     * @returns the startup WM class, or %NULL if none is set in the desktop file.
     */
    static getStartupWmClass(info: any): string | null
    /**
     * Looks up a string value in the keyfile backing `info`.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns a newly allocated string, or %NULL if the key     is not found
     */
    static getString(info: any, key: string): string | null
    /**
     * Looks up a string list value in the keyfile backing `info`.
     * 
     * The `key` is looked up in the "Desktop Entry" group.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns a %NULL-terminated string array or %NULL if the specified  key cannot be found. The array should be freed with g_strfreev().
     */
    static getStringList(info: any, key: string): string[]
    /**
     * Returns whether `key` exists in the "Desktop Entry" group
     * of the keyfile backing `info`.
     * @param info a #GDesktopAppInfo
     * @param key the key to look up
     * @returns %TRUE if the @key exists
     */
    static hasKey(info: any, key: string): boolean
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
     * @param actionName the name of the action as from   g_desktop_app_info_list_actions()
     * @param launchContext a #GAppLaunchContext
     */
    static launchAction(info: any, actionName: string, launchContext: any | null): void
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
     * @param launchContext a #GAppLaunchContext
     * @param spawnFlags #GSpawnFlags, used for each process
     * @returns %TRUE on successful launch, %FALSE otherwise.
     */
    static launchUrisAsManager(appinfo: any, uris: string[], launchContext: any | null, spawnFlags: any): boolean
    /**
     * Equivalent to g_desktop_app_info_launch_uris_as_manager() but allows
     * you to pass in file descriptors for the stdin, stdout and stderr streams
     * of the launched process.
     * 
     * If application launching occurs via some non-spawn mechanism (e.g. D-Bus
     * activation) then `stdin_fd,` `stdout_fd` and `stderr_fd` are ignored.
     * @param appinfo a #GDesktopAppInfo
     * @param uris List of URIs
     * @param launchContext a #GAppLaunchContext
     * @param spawnFlags #GSpawnFlags, used for each process
     * @param userSetup a #GSpawnChildSetupFunc, used once     for each process.
     * @param pidCallback Callback for child processes
     * @param stdinFd file descriptor to use for child's stdin, or -1
     * @param stdoutFd file descriptor to use for child's stdout, or -1
     * @param stderrFd file descriptor to use for child's stderr, or -1
     * @returns %TRUE on successful launch, %FALSE otherwise.
     */
    static launchUrisAsManagerWithFds(appinfo: any, uris: string[], launchContext: any | null, spawnFlags: any, userSetup: any | null, pidCallback: any | null, stdinFd: number, stdoutFd: number, stderrFd: number): boolean
    /**
     * Returns the list of "additional application actions" supported on the
     * desktop file, as per the desktop file specification.
     * 
     * As per the specification, this is the list of actions that are
     * explicitly listed in the "Actions" key of the [Desktop Entry] group.
     * @param info a #GDesktopAppInfo
     * @returns a list of strings, always non-%NULL
     */
    static listActions(info: any): string[]
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
     * @param searchString the search string to use
     * @returns a   list of strvs.  Free each item with g_strfreev() and free the outer   list with g_free().
     */
    static search(searchString: string): string[]
    /**
     * Sets the name of the desktop that the application is running in.
     * This is used by g_app_info_should_show() and
     * g_desktop_app_info_get_show_in() to evaluate the
     * `OnlyShowIn` and `NotShowIn`
     * desktop entry fields.
     * 
     * Should be called only once; subsequent calls are ignored.
     * @param desktopEnv a string specifying what desktop this is
     */
    static setDesktopEnv(desktopEnv: string): void
}

interface FDMessage {

    // Own properties of GioUnix-2.0.GioUnix.FDMessage

    /**
     * The [class`Gio`.UnixFDList] object to send with the message.
     */
    readonly fdList: any

    // Own fields of GioUnix-2.0.GioUnix.FDMessage

    parentInstance: any
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
class FDMessage {

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
     * @param fdList a #GUnixFDList
     * @returns a new #GUnixFDMessage
     */
    static newWithFdList(fdList: any): FDMessage
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
    static appendFd(message: any, fd: number): boolean
    /**
     * Gets the #GUnixFDList contained in `message`.  This function does not
     * return a reference to the caller, but the returned list is valid for
     * the lifetime of `message`.
     * @param message a #GUnixFDMessage
     * @returns the #GUnixFDList from @message
     */
    static getFdList(message: any): any
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
    static stealFds(message: any): number[]
}

module InputStream {

    // Constructor properties interface

    interface ConstructorProperties extends FileDescriptorBased.ConstructorProperties {

        // Own constructor properties of GioUnix-2.0.GioUnix.InputStream

        /**
         * Whether to close the file descriptor when the stream is closed.
         */
        close_fd?: boolean | null
        /**
         * The file descriptor that the stream reads from.
         */
        fd?: number | null
    }

}

interface InputStream extends FileDescriptorBased {

    // Own properties of GioUnix-2.0.GioUnix.InputStream

    /**
     * Whether to close the file descriptor when the stream is closed.
     */
    closeFd: boolean
    /**
     * The file descriptor that the stream reads from.
     */
    readonly fd: number
    __gtype__: number

    // Own fields of GioUnix-2.0.GioUnix.InputStream

    parentInstance: any

    // Class property signals of GioUnix-2.0.GioUnix.InputStream

    connect(sigName: "notify::close-fd", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-fd", ...args: any[]): void
    connect(sigName: "notify::fd", callback: (...args: any[]) => void): number
    on(sigName: "notify::fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fd", ...args: any[]): void
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
class InputStream {

    // Own properties of GioUnix-2.0.GioUnix.InputStream

    static name: string

    // Constructors of GioUnix-2.0.GioUnix.InputStream

    constructor(config?: InputStream.ConstructorProperties) 
    /**
     * Creates a new #GUnixInputStream for the given `fd`.
     * 
     * If `close_fd` is %TRUE, the file descriptor will be closed
     * when the stream is closed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param closeFd %TRUE to close the file descriptor when done
     * @returns a new #GUnixInputStream
     */
    constructor(fd: number, closeFd: boolean) 
    /**
     * Creates a new #GUnixInputStream for the given `fd`.
     * 
     * If `close_fd` is %TRUE, the file descriptor will be closed
     * when the stream is closed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param closeFd %TRUE to close the file descriptor when done
     * @returns a new #GUnixInputStream
     */
    static new(fd: number, closeFd: boolean): InputStream
    _init(config?: InputStream.ConstructorProperties): void
    /**
     * Returns whether the file descriptor of `stream` will be
     * closed when the stream is closed.
     * @param stream a #GUnixInputStream
     * @returns %TRUE if the file descriptor is closed when done
     */
    static getCloseFd(stream: any): boolean
    /**
     * Return the UNIX file descriptor that the stream reads from.
     * @param stream a #GUnixInputStream
     * @returns The file descriptor of @stream
     */
    static getFd(stream: any): number
    /**
     * Sets whether the file descriptor of `stream` shall be closed
     * when the stream is closed.
     * @param stream a #GUnixInputStream
     * @param closeFd %TRUE to close the file descriptor when done
     */
    static setCloseFd(stream: any, closeFd: boolean): void
}

module MountMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `mountpoints-changed`
     */
    interface MountpointsChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `mounts-changed`
     */
    interface MountsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MountMonitor {

    // Own properties of GioUnix-2.0.GioUnix.MountMonitor

    __gtype__: number

    // Own signals of GioUnix-2.0.GioUnix.MountMonitor

    connect(sigName: "mountpoints-changed", callback: MountMonitor.MountpointsChangedSignalCallback): number
    on(sigName: "mountpoints-changed", callback: MountMonitor.MountpointsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mountpoints-changed", callback: MountMonitor.MountpointsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mountpoints-changed", callback: MountMonitor.MountpointsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mountpoints-changed", ...args: any[]): void
    connect(sigName: "mounts-changed", callback: MountMonitor.MountsChangedSignalCallback): number
    on(sigName: "mounts-changed", callback: MountMonitor.MountsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mounts-changed", callback: MountMonitor.MountsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mounts-changed", callback: MountMonitor.MountsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mounts-changed", ...args: any[]): void

    // Class property signals of GioUnix-2.0.GioUnix.MountMonitor

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
    disconnect(id: number): void
}

/**
 * Watches #GUnixMounts for changes.
 * @class 
 */
class MountMonitor extends GObject.Object {

    // Own properties of GioUnix-2.0.GioUnix.MountMonitor

    static name: string

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
     * @param mountMonitor a #GUnixMountMonitor
     * @param limitMsec a integer with the limit in milliseconds to     poll for changes.
     */
    static setRateLimit(mountMonitor: any, limitMsec: number): void
}

module OutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends FileDescriptorBased.ConstructorProperties {

        // Own constructor properties of GioUnix-2.0.GioUnix.OutputStream

        /**
         * Whether to close the file descriptor when the stream is closed.
         */
        close_fd?: boolean | null
        /**
         * The file descriptor that the stream writes to.
         */
        fd?: number | null
    }

}

interface OutputStream extends FileDescriptorBased {

    // Own properties of GioUnix-2.0.GioUnix.OutputStream

    /**
     * Whether to close the file descriptor when the stream is closed.
     */
    closeFd: boolean
    /**
     * The file descriptor that the stream writes to.
     */
    readonly fd: number
    __gtype__: number

    // Own fields of GioUnix-2.0.GioUnix.OutputStream

    parentInstance: any

    // Class property signals of GioUnix-2.0.GioUnix.OutputStream

    connect(sigName: "notify::close-fd", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-fd", ...args: any[]): void
    connect(sigName: "notify::fd", callback: (...args: any[]) => void): number
    on(sigName: "notify::fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fd", ...args: any[]): void
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
class OutputStream {

    // Own properties of GioUnix-2.0.GioUnix.OutputStream

    static name: string

    // Constructors of GioUnix-2.0.GioUnix.OutputStream

    constructor(config?: OutputStream.ConstructorProperties) 
    /**
     * Creates a new #GUnixOutputStream for the given `fd`.
     * 
     * If `close_fd,` is %TRUE, the file descriptor will be closed when
     * the output stream is destroyed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param closeFd %TRUE to close the file descriptor when done
     * @returns a new #GOutputStream
     */
    constructor(fd: number, closeFd: boolean) 
    /**
     * Creates a new #GUnixOutputStream for the given `fd`.
     * 
     * If `close_fd,` is %TRUE, the file descriptor will be closed when
     * the output stream is destroyed.
     * @constructor 
     * @param fd a UNIX file descriptor
     * @param closeFd %TRUE to close the file descriptor when done
     * @returns a new #GOutputStream
     */
    static new(fd: number, closeFd: boolean): OutputStream
    _init(config?: OutputStream.ConstructorProperties): void
    /**
     * Returns whether the file descriptor of `stream` will be
     * closed when the stream is closed.
     * @param stream a #GUnixOutputStream
     * @returns %TRUE if the file descriptor is closed when done
     */
    static getCloseFd(stream: any): boolean
    /**
     * Return the UNIX file descriptor that the stream writes to.
     * @param stream a #GUnixOutputStream
     * @returns The file descriptor of @stream
     */
    static getFd(stream: any): number
    /**
     * Sets whether the file descriptor of `stream` shall be closed
     * when the stream is closed.
     * @param stream a #GUnixOutputStream
     * @param closeFd %TRUE to close the file descriptor when done
     */
    static setCloseFd(stream: any, closeFd: boolean): void
}

interface DesktopAppInfoClass {

    // Own fields of GioUnix-2.0.GioUnix.DesktopAppInfoClass

    parentClass: GObject.ObjectClass
}

abstract class DesktopAppInfoClass {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoClass

    static name: string
}

interface DesktopAppInfoLookupIface {

    // Own fields of GioUnix-2.0.GioUnix.DesktopAppInfoLookupIface

    gIface: GObject.TypeInterface
}

/**
 * Interface that is used by backends to associate default
 * handlers with URI schemes.
 * @record 
 */
abstract class DesktopAppInfoLookupIface {

    // Own properties of GioUnix-2.0.GioUnix.DesktopAppInfoLookupIface

    static name: string
}

interface FDMessageClass {

    // Own fields of GioUnix-2.0.GioUnix.FDMessageClass

    parentClass: any
}

abstract class FDMessageClass {

    // Own properties of GioUnix-2.0.GioUnix.FDMessageClass

    static name: string
}

interface FDMessagePrivate {
}

class FDMessagePrivate {

    // Own properties of GioUnix-2.0.GioUnix.FDMessagePrivate

    static name: string
}

interface FileDescriptorBasedIface {

    // Own fields of GioUnix-2.0.GioUnix.FileDescriptorBasedIface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    /**
     * Gets the underlying file descriptor.
     * @field 
     */
    getFd: (fdBased: any) => number
}

/**
 * An interface for file descriptor based io objects.
 * @record 
 */
abstract class FileDescriptorBasedIface {

    // Own properties of GioUnix-2.0.GioUnix.FileDescriptorBasedIface

    static name: string
}

interface InputStreamClass {

    // Own fields of GioUnix-2.0.GioUnix.InputStreamClass

    parentClass: any
}

abstract class InputStreamClass {

    // Own properties of GioUnix-2.0.GioUnix.InputStreamClass

    static name: string
}

interface InputStreamPrivate {
}

class InputStreamPrivate {

    // Own properties of GioUnix-2.0.GioUnix.InputStreamPrivate

    static name: string
}

interface MountEntry {
}

/**
 * Defines a Unix mount entry (e.g. <filename>/media/cdrom</filename>).
 * This corresponds roughly to a mtab entry.
 * @record 
 */
class MountEntry {

    // Own properties of GioUnix-2.0.GioUnix.MountEntry

    static name: string
}

interface MountMonitorClass {
}

abstract class MountMonitorClass {

    // Own properties of GioUnix-2.0.GioUnix.MountMonitorClass

    static name: string
}

interface MountPoint {
}

/**
 * Defines a Unix mount point (e.g. <filename>/dev</filename>).
 * This corresponds roughly to a fstab entry.
 * @record 
 */
class MountPoint {

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
     * @param mountPath path for a possible unix mount point.
     * @returns a #GUnixMountPoint, or %NULL if no match is found.
     */
    static at(mountPath: string): [ /* returnType */ any | null, /* timeRead */ number ]
    /**
     * Compares two unix mount points.
     * @param mount1 a #GUnixMount.
     * @param mount2 a #GUnixMount.
     * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
     */
    static compare(mount1: any, mount2: any): number
    /**
     * Makes a copy of `mount_point`.
     * @param mountPoint a #GUnixMountPoint.
     * @returns a new #GUnixMountPoint
     */
    static copy(mountPoint: any): any
    /**
     * Frees a unix mount point.
     * @param mountPoint unix mount point to free.
     */
    static free(mountPoint: any): void
    /**
     * Gets the device path for a unix mount point.
     * @param mountPoint a #GUnixMountPoint.
     * @returns a string containing the device path.
     */
    static getDevicePath(mountPoint: any): string
    /**
     * Gets the file system type for the mount point.
     * @param mountPoint a #GUnixMountPoint.
     * @returns a string containing the file system type.
     */
    static getFsType(mountPoint: any): string
    /**
     * Gets the mount path for a unix mount point.
     * @param mountPoint a #GUnixMountPoint.
     * @returns a string containing the mount path.
     */
    static getMountPath(mountPoint: any): string
    /**
     * Gets the options for the mount point.
     * @param mountPoint a #GUnixMountPoint.
     * @returns a string containing the options.
     */
    static getOptions(mountPoint: any): string | null
    /**
     * Guesses whether a Unix mount point can be ejected.
     * @param mountPoint a #GUnixMountPoint
     * @returns %TRUE if @mount_point is deemed to be ejectable.
     */
    static guessCanEject(mountPoint: any): boolean
    /**
     * Guesses the icon of a Unix mount point.
     * @param mountPoint a #GUnixMountPoint
     * @returns a #GIcon
     */
    static guessIcon(mountPoint: any): any
    /**
     * Guesses the name of a Unix mount point.
     * The result is a translated string.
     * @param mountPoint a #GUnixMountPoint
     * @returns A newly allocated string that must     be freed with g_free()
     */
    static guessName(mountPoint: any): string | null
    /**
     * Guesses the symbolic icon of a Unix mount point.
     * @param mountPoint a #GUnixMountPoint
     * @returns a #GIcon
     */
    static guessSymbolicIcon(mountPoint: any): any
    /**
     * Checks if a unix mount point is a loopback device.
     * @param mountPoint a #GUnixMountPoint.
     * @returns %TRUE if the mount point is a loopback. %FALSE otherwise.
     */
    static isLoopback(mountPoint: any): boolean
    /**
     * Checks if a unix mount point is read only.
     * @param mountPoint a #GUnixMountPoint.
     * @returns %TRUE if a mount point is read only.
     */
    static isReadonly(mountPoint: any): boolean
    /**
     * Checks if a unix mount point is mountable by the user.
     * @param mountPoint a #GUnixMountPoint.
     * @returns %TRUE if the mount point is user mountable.
     */
    static isUserMountable(mountPoint: any): boolean
}

interface OutputStreamClass {

    // Own fields of GioUnix-2.0.GioUnix.OutputStreamClass

    parentClass: any
}

abstract class OutputStreamClass {

    // Own properties of GioUnix-2.0.GioUnix.OutputStreamClass

    static name: string
}

interface OutputStreamPrivate {
}

class OutputStreamPrivate {

    // Own properties of GioUnix-2.0.GioUnix.OutputStreamPrivate

    static name: string
}

}

export default GioUnix;
// END