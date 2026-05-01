
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GioUnix {

    /**
     * GioUnix-2.0
     */


    /**
     * Extension point for default handler to URI association. See
     * [Extending GIO](overview.html#extending-gio).
     * @deprecated since 2.28: The {@link GioUnix.DesktopAppInfoLookup} interface is deprecated and    unused by GIO.
     */
    const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;

    /**
     * Determines if `mount_path` is considered an implementation of the
     * OS.
     * 
     * This is primarily used for hiding mountable and mounted volumes
     * that only are used in the OS and has little to no relevance to the
     * casual user.
     * @param mount_path a mount path, e.g. `/media/disk` or `/usr`
     * @returns true if `mount_path` is considered an implementation detail    of the OS; false otherwise
     */
    function is_mount_path_system_internal(mount_path: string): boolean;

    /**
     * Determines if `device_path` is considered a block device path which is only
     * used in implementation of the OS.
     * 
     * This is primarily used for hiding mounted volumes that are intended as APIs
     * for programs to read, and system administrators at a shell; rather than
     * something that should, for example, appear in a GUI. For example, the Linux
     * `/proc` filesystem.
     * 
     * The list of device paths considered ‘system’ ones may change over time.
     * @param device_path a device path, e.g. `/dev/loop0` or `nfsd`
     * @returns true if `device_path` is considered an implementation detail of    the OS; false otherwise
     * @since 2.56
     */
    function is_system_device_path(device_path: string): boolean;

    /**
     * Determines if `fs_type` is considered a type of file system which is only
     * used in implementation of the OS.
     * 
     * This is primarily used for hiding mounted volumes that are intended as APIs
     * for programs to read, and system administrators at a shell; rather than
     * something that should, for example, appear in a GUI. For example, the Linux
     * `/proc` filesystem.
     * 
     * The list of file system types considered ‘system’ ones may change over time.
     * @param fs_type a file system type, e.g. `procfs` or `tmpfs`
     * @returns true if `fs_type` is considered an implementation detail of the OS;    false otherwise
     * @since 2.56
     */
    function is_system_fs_type(fs_type: string): boolean;

    /**
     * Gets a {@link GioUnix.MountEntry} for a given mount path.
     * 
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * {@link GioUnix.mount_entries_changed_since}.
     * 
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     * 
     * This will return `NULL` if there is no mount point at `mount_path`.
     * @param mount_path path for a possible Unix mount
     * @returns a {@link GioUnix.MountEntry}
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.at} instead.
     */
    function mount_at(mount_path: string): [(MountEntry | null), number];

    /**
     * Compares two Unix mounts.
     * @param mount1 first {@link GioUnix.MountEntry} to compare
     * @param mount2 second {@link GioUnix.MountEntry} to compare
     * @returns `1`, `0` or `-1` if `mount1` is greater than, equal to,    or less than `mount2`, respectively
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.compare} instead.
     */
    function mount_compare(mount1: MountEntry, mount2: MountEntry): number;

    /**
     * Makes a copy of `mount_entry`.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a new {@link GioUnix.MountEntry}
     * @since 2.54
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.copy} instead.
     */
    function mount_copy(mount_entry: MountEntry): MountEntry;

    /**
     * Checks if the Unix mounts have changed since a given Unix time.
     * 
     * This can only work reliably if a {@link GioUnix.MountMonitor} is running in
     * the process, otherwise changes in the mount entries file (such as
     * `/proc/self/mountinfo` on Linux) cannot be detected and, as a result, this
     * function has to conservatively always return `TRUE`.
     * 
     * It is more efficient to use `GioUnix.MountMonitor::mounts-changed` to
     * be signalled of changes to the mount entries, rather than polling using this
     * function. This function is more appropriate for infrequently determining
     * cache validity.
     * @param time a timestamp
     * @returns true if the mounts have changed since `time`; false otherwise Since 2.84
     */
    function mount_entries_changed_since(time: (bigint | number)): boolean;

    /**
     * Gets a list of {@link GioUnix.MountEntry} instances representing the Unix
     * mounts.
     * 
     * If `time_read` is set, it will be filled with the mount timestamp, allowing
     * for checking if the mounts have changed with
     * {@link GioUnix.mount_entries_changed_since}.
     * @returns a list of the    Unix mounts
     * @since 2.84
     */
    function mount_entries_get(): [MountEntry[], number];

    /**
     * Gets an array of {@link GioUnix.MountEntry}s containing the Unix mounts
     * listed in `table_path`.
     * 
     * This is a generalized version of {@link GioUnix.mount_entries_get}, mainly
     * intended for internal testing use. Note that {@link GioUnix.mount_entries_get}
     * may parse multiple hierarchical table files, so this function is not a direct
     * superset of its functionality.
     * 
     * If there is an error reading or parsing the file, `NULL` will be returned
     * and both out parameters will be set to `0`.
     * @param table_path path to the mounts table file (for example `/proc/self/mountinfo`)
     * @returns mount   entries, or `NULL` if there was an error loading them
     * @since 2.84
     */
    function mount_entries_get_from_file(table_path: string): [(MountEntry[] | null), number];

    /**
     * Gets a {@link GioUnix.MountEntry} for a given mount path.
     * 
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * {@link GioUnix.mount_entries_changed_since}.
     * 
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     * 
     * This will return `NULL` if there is no mount point at `mount_path`.
     * @param mount_path path for a possible Unix mount
     * @returns a {@link GioUnix.MountEntry}
     * @since 2.84
     */
    function mount_entry_at(mount_path: string): [(MountEntry | null), number];

    /**
     * Gets a {@link GioUnix.MountEntry} for a given file path.
     * 
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * {@link GioUnix.mount_entries_changed_since}.
     * 
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     * 
     * This will return `NULL` if looking up the mount entry fails, if
     * `file_path` doesn’t exist or there is an I/O error.
     * @param file_path file path on some Unix mount
     * @returns a {@link GioUnix.MountEntry}
     * @since 2.84
     */
    function mount_entry_for(file_path: string): [(MountEntry | null), number];

    /**
     * Gets a {@link GioUnix.MountEntry} for a given file path.
     * 
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * {@link GioUnix.mount_entries_changed_since}.
     * 
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     * 
     * This will return `NULL` if looking up the mount entry fails, if
     * `file_path` doesn’t exist or there is an I/O error.
     * @param file_path file path on some Unix mount
     * @returns a {@link GioUnix.MountEntry}
     * @since 2.52
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.for} instead.
     */
    function mount_for(file_path: string): [(MountEntry | null), number];

    /**
     * Frees a Unix mount.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.free} instead.
     */
    function mount_free(mount_entry: MountEntry): void;

    /**
     * Gets the device path for a Unix mount.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a string containing the device path
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.get_device_path} instead.
     */
    function mount_get_device_path(mount_entry: MountEntry): string;

    /**
     * Gets the filesystem type for the Unix mount.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a string containing the file system type
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.get_fs_type} instead.
     */
    function mount_get_fs_type(mount_entry: MountEntry): string;

    /**
     * Gets the mount path for a Unix mount.
     * @param mount_entry a {@link GioUnix.MountEntry} to get the mount path for
     * @returns the mount path for `mount_entry`
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.get_mount_path} instead.
     */
    function mount_get_mount_path(mount_entry: MountEntry): string;

    /**
     * Gets a comma separated list of mount options for the Unix mount.
     * 
     * For example: `rw,relatime,seclabel,data=ordered`.
     * 
     * This is similar to {@link GioUnix.MountPoint.get_options}, but it takes
     * a {@link GioUnix.MountEntry} as an argument.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a string containing the options, or `NULL` if not    available.
     * @since 2.58
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.get_options} instead.
     */
    function mount_get_options(mount_entry: MountEntry): (string | null);

    /**
     * Gets the root of the mount within the filesystem.
     * 
     * This is useful e.g. for mounts created by bind operation, or btrfs subvolumes.
     * 
     * For example, the root path is equal to `/` for a mount created by
     * `mount /dev/sda1 /mnt/foo` and `/bar` for
     * `mount --bind /mnt/foo/bar /mnt/bar`.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a string containing the root, or `NULL` if not supported
     * @since 2.60
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.get_root_path} instead.
     */
    function mount_get_root_path(mount_entry: MountEntry): (string | null);

    /**
     * Guesses whether a Unix mount entry can be ejected.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns true if `mount_entry` is deemed to be ejectable; false otherwise
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.guess_can_eject} instead.
     */
    function mount_guess_can_eject(mount_entry: MountEntry): boolean;

    /**
     * Guesses the icon of a Unix mount entry.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a {@link Gio.Icon}
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.guess_icon} instead.
     */
    function mount_guess_icon(mount_entry: MountEntry): Gio.Icon;

    /**
     * Guesses the name of a Unix mount entry.
     * 
     * The result is a translated string.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a newly allocated translated string
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.guess_name} instead.
     */
    function mount_guess_name(mount_entry: MountEntry): string;

    /**
     * Guesses whether a Unix mount entry should be displayed in the UI.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns true if `mount_entry` is deemed to be displayable; false otherwise
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.guess_should_display} instead.
     */
    function mount_guess_should_display(mount_entry: MountEntry): boolean;

    /**
     * Guesses the symbolic icon of a Unix mount entry.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns a {@link Gio.Icon}
     * @since 2.34
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.guess_symbolic_icon} instead.
     */
    function mount_guess_symbolic_icon(mount_entry: MountEntry): Gio.Icon;

    /**
     * Checks if a Unix mount is mounted read only.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns true if `mount_entry` is read only; false otherwise
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.is_readonly} instead.
     */
    function mount_is_readonly(mount_entry: MountEntry): boolean;

    /**
     * Checks if a Unix mount is a system mount.
     * 
     * This is the Boolean OR of
     * {@link GioUnix.is_system_fs_type}, {@link GioUnix.is_system_device_path} and
     * {@link GioUnix.is_mount_path_system_internal} on `mount_entry`’s properties.
     * 
     * The definition of what a ‘system’ mount entry is may change over time as new
     * file system types and device paths are ignored.
     * @param mount_entry a {@link GioUnix.MountEntry}
     * @returns true if the Unix mount is for a system path; false otherwise
     * @deprecated since 2.84: Use {@link GioUnix.MountEntry.is_system_internal} instead.
     */
    function mount_is_system_internal(mount_entry: MountEntry): boolean;

    /**
     * Gets a {@link GioUnix.MountPoint} for a given mount path.
     * 
     * If `time_read` is set, it will be filled with a Unix timestamp for checking if
     * the mount points have changed since with
     * {@link GioUnix.mount_points_changed_since}.
     * 
     * If more mount points have the same mount path, the last matching mount point
     * is returned.
     * @param mount_path path for a possible Unix mount point
     * @returns a {@link GioUnix.MountPoint}, or `NULL`    if no match is found
     * @since 2.66
     */
    function mount_point_at(mount_path: string): [(MountPoint | null), number];

    /**
     * Checks if the Unix mount points have changed since a given Unix time.
     * 
     * Unlike {@link GioUnix.mount_entries_changed_since}, this function can work
     * reliably without a {@link GioUnix.MountMonitor} running, as it accesses the
     * static mount point information (such as `/etc/fstab` on Linux), which has a
     * valid modification time.
     * 
     * It is more efficient to use `GioUnix.MountMonitor::mountpoints-changed`
     * to be signalled of changes to the mount points, rather than polling using
     * this function. This function is more appropriate for infrequently determining
     * cache validity.
     * @param time a timestamp
     * @returns true if the mount points have changed since `time`; false otherwise
     */
    function mount_points_changed_since(time: (bigint | number)): boolean;

    /**
     * Gets a list of {@link GioUnix.MountPoint} instances representing the Unix
     * mount points.
     * 
     * If `time_read` is set, it will be filled with the mount timestamp, allowing
     * for checking if the mounts have changed with
     * {@link GioUnix.mount_points_changed_since}.
     * @returns a list of the Unix    mount points
     */
    function mount_points_get(): [MountPoint[], number];

    /**
     * Gets an array of {@link GioUnix.MountPoint}s containing the Unix mount
     * points listed in `table_path`.
     * 
     * This is a generalized version of {@link GioUnix.mount_points_get}, mainly
     * intended for internal testing use. Note that {@link GioUnix.mount_points_get}
     * may parse multiple hierarchical table files, so this function is not a direct
     * superset of its functionality.
     * 
     * If there is an error reading or parsing the file, `NULL` will be returned
     * and both out parameters will be set to `0`.
     * @param table_path path to the mount points table file (for example `/etc/fstab`)
     * @returns mount   points, or `NULL` if there was an error loading them
     * @since 2.82
     */
    function mount_points_get_from_file(table_path: string): [(MountPoint[] | null), number];

    /**
     * Checks if the Unix mounts have changed since a given Unix time.
     * @param time a timestamp
     * @returns true if the mounts have changed since `time`; false otherwise
     * @deprecated since 2.84: Use {@link GioUnix.mount_entries_changed_since} instead.
     */
    function mounts_changed_since(time: (bigint | number)): boolean;

    /**
     * Gets a list of {@link GioUnix.MountEntry} instances representing the Unix
     * mounts.
     * 
     * If `time_read` is set, it will be filled with the mount timestamp, allowing
     * for checking if the mounts have changed with
     * {@link GioUnix.mount_entries_changed_since}.
     * @returns a list of the    Unix mounts
     * @deprecated since 2.84: Use {@link GioUnix.mount_entries_get} instead.
     */
    function mounts_get(): [MountEntry[], number];

    /**
     * Gets an array of {@link GioUnix.MountEntry}s containing the Unix mounts
     * listed in `table_path`.
     * 
     * This is a generalized version of {@link GioUnix.mount_entries_get}, mainly
     * intended for internal testing use. Note that {@link GioUnix.mount_entries_get}
     * may parse multiple hierarchical table files, so this function is not a direct
     * superset of its functionality.
     * 
     * If there is an error reading or parsing the file, `NULL` will be returned
     * and both out parameters will be set to `0`.
     * @param table_path path to the mounts table file (for example `/proc/self/mountinfo`)
     * @returns mount   entries, or `NULL` if there was an error loading them
     * @since 2.82
     * @deprecated since 2.84: Use {@link GioUnix.mount_entries_get_from_file} instead.
     */
    function mounts_get_from_file(table_path: string): [(MountEntry[] | null), number];

    /**
     * @gir-type Callback
     */
    interface DesktopAppLaunchCallback {
        (appinfo: DesktopAppInfo, pid: GLib.Pid): void;
    }

    namespace DesktopAppInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::filename": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AppInfo.ConstructorProps {
            filename: (string | null);
        }
    }

    /**
     * {@link GioUnix.DesktopAppInfo} is an implementation of {@link Gio.AppInfo} based on
     * desktop files.
     * 
     * Note that `<gio/gdesktopappinfo.h>` belongs to the UNIX-specific
     * GIO interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
     * file or the `GioUnix-2.0` GIR namespace when using it.
     * @gir-type Class
     */
    class DesktopAppInfo extends GObject.Object implements Gio.AppInfo {
        static $gtype: GObject.GType<DesktopAppInfo>;

        // Properties
        /**
         * The origin filename of this {@link GioUnix.DesktopAppInfo}
         * @construct-only
         * @default null
         */
        get filename(): (string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DesktopAppInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DesktopAppInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](desktop_id: string): DesktopAppInfo;

        static new_from_filename(filename: string): DesktopAppInfo;

        static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo;

        // Signals
        /** @signal */
        connect<K extends keyof DesktopAppInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesktopAppInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DesktopAppInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesktopAppInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DesktopAppInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DesktopAppInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets all applications that implement `interface`.
         * 
         * An application implements an interface if that interface is listed in
         * the `Implements` line of the desktop file of the application.
         * @param _interface the name of the interface
         */
        static get_implementations(_interface: string): DesktopAppInfo[];

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
         * checks performed by {@link GioUnix.DesktopAppInfo.new} (for example,
         * checking that the executable referenced by a result exists), and so it is
         * possible for {@link GioUnix.DesktopAppInfo.new} to return `NULL` when passed
         * an app ID returned by this function. It is expected that calling code will
         * do this when subsequently creating a {@link GioUnix.DesktopAppInfo} for
         * each result.
         * @param search_string the search string to use
         */
        static search(search_string: string): string[][];

        /**
         * Sets the name of the desktop that the application is running in.
         * 
         * This is used by {@link Gio.AppInfo.should_show} and
         * {@link GioUnix.DesktopAppInfo.get_show_in} to evaluate the
         * [`OnlyShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-onlyshowin)
         * and [`NotShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-notshowin)
         * keys.
         * 
         * Should be called only once; subsequent calls are ignored.
         * @param desktop_env a string specifying what desktop this is
         */
        static set_desktop_env(desktop_env: string): void;

        // Methods
        /**
         * Gets the user-visible display name of the
         * [‘additional application actions’](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html)
         * specified by `action_name`.
         * 
         * This corresponds to the `Name` key within the keyfile group for the
         * action.
         * @param action_name the name of the action as from   {@link GioUnix.DesktopAppInfo.list_actions}
         * @returns the locale-specific action name
         */
        get_action_name(action_name: string): string;

        /**
         * Looks up a boolean value in the keyfile backing `info`.
         * 
         * The `key` is looked up in the `Desktop Entry` group.
         * @param key the key to look up
         * @returns the boolean value, or `FALSE` if the key is not found
         */
        get_boolean(key: string): boolean;

        /**
         * Gets the categories from the desktop file.
         * @returns The unparsed   [`Categories` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-categories)   from the desktop file;   i.e. no attempt is made to split it by `;` or validate it.
         */
        get_categories(): (string | null);

        /**
         * When `info` was created from a known filename, return it.
         * 
         * In some situations such as a {@link GioUnix.DesktopAppInfo} returned
         * from {@link GioUnix.DesktopAppInfo.new_from_keyfile}, this function
         * will return `NULL`.
         * @returns The full path to the file for `info`,   or `NULL` if not known.
         */
        get_filename(): (string | null);

        /**
         * Gets the generic name from the desktop file.
         * @returns The value of the   [`GenericName` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-genericname)
         */
        get_generic_name(): (string | null);

        /**
         * A desktop file is hidden if the
         * [`Hidden` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-hidden)
         * in it is set to `True`.
         * @returns `TRUE` if hidden, `FALSE` otherwise.
         */
        get_is_hidden(): boolean;

        /**
         * Gets the keywords from the desktop file.
         * @returns The value of the   [`Keywords` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-keywords)
         */
        get_keywords(): string[];

        /**
         * Looks up a localized string value in the keyfile backing `info`
         * translated to the current locale.
         * 
         * The `key` is looked up in the `Desktop Entry` group.
         * @param key the key to look up
         * @returns a newly allocated string, or `NULL` if the key is not   found
         */
        get_locale_string(key: string): (string | null);

        /**
         * Gets the value of the
         * [`NoDisplay` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-nodisplay)
         *  which helps determine if the application info should be shown in menus. See
         * `G_KEY_FILE_DESKTOP_KEY_NO_DISPLAY` and {@link Gio.AppInfo.should_show}.
         * @returns The value of the `NoDisplay` key
         */
        get_nodisplay(): boolean;

        /**
         * Checks if the application info should be shown in menus that list available
         * applications for a specific name of the desktop, based on the
         * [`OnlyShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-onlyshowin)
         * and [`NotShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-notshowin)
         * keys.
         * 
         * `desktop_env` should typically be given as `NULL`, in which case the
         * `XDG_CURRENT_DESKTOP` environment variable is consulted.  If you want
         * to override the default mechanism then you may specify `desktop_env`,
         * but this is not recommended.
         * 
         * Note that {@link Gio.AppInfo.should_show} for `info` will include this check
         * (with `NULL` for `desktop_env`) as well as additional checks.
         * @param desktop_env a string specifying a desktop name
         * @returns `TRUE` if the `info` should be shown in `desktop_env` according to the `OnlyShowIn` and `NotShowIn` keys, `FALSE` otherwise.
         */
        get_show_in(desktop_env: (string | null)): boolean;

        /**
         * Retrieves the `StartupWMClass` field from `info`. This represents the
         * `WM_CLASS` property of the main window of the application, if launched
         * through `info`.
         * @returns the startup WM class, or `NULL` if none   is set in the desktop file.
         */
        get_startup_wm_class(): (string | null);

        /**
         * Looks up a string value in the keyfile backing `info`.
         * 
         * The `key` is looked up in the `Desktop Entry` group.
         * @param key the key to look up
         * @returns a newly allocated string, or `NULL` if the key is not   found
         */
        get_string(key: string): (string | null);

        /**
         * Looks up a string list value in the keyfile backing `info`.
         * 
         * The `key` is looked up in the `Desktop Entry` group.
         * @param key the key to look up
         * @returns a `NULL`-terminated string array or `NULL` if the specified   key cannot be found. The array should be freed with {@link GLib.strfreev}.
         */
        get_string_list(key: string): string[];

        /**
         * Returns whether `key` exists in the `Desktop Entry` group
         * of the keyfile backing `info`.
         * @param key the key to look up
         * @returns `TRUE` if the `key` exists
         */
        has_key(key: string): boolean;

        /**
         * Activates the named application action.
         * 
         * You may only call this function on action names that were
         * returned from {@link GioUnix.DesktopAppInfo.list_actions}.
         * 
         * Note that if the main entry of the desktop file indicates that the
         * application supports startup notification, and `launch_context` is
         * non-`NULL`, then startup notification will be used when activating the
         * action (and as such, invocation of the action on the receiving side
         * must signal the end of startup notification when it is completed).
         * This is the expected behaviour of applications declaring additional
         * actions, as per the
         * [desktop file specification](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html).
         * 
         * As with {@link Gio.AppInfo.launch} there is no way to detect failures that
         * occur while using this function.
         * @param action_name the name of the action as from   {@link GioUnix.DesktopAppInfo.list_actions}
         * @param launch_context a {@link Gio.AppLaunchContext}
         */
        launch_action(action_name: string, launch_context: (Gio.AppLaunchContext | null)): void;

        /**
         * This function performs the equivalent of {@link Gio.AppInfo.launch_uris},
         * but is intended primarily for operating system components that
         * launch applications.  Ordinary applications should use
         * {@link Gio.AppInfo.launch_uris}.
         * 
         * If the application is launched via GSpawn, then `spawn_flags`, `user_setup`
         * and `user_setup_data` are used for the call to {@link GLib.spawn_async}.
         * Additionally, `pid_callback` (with `pid_callback_data`) will be called to
         * inform about the PID of the created process. See
         * {@link GLib.spawn_async_with_pipes} for information on certain parameter
         * conditions that can enable an optimized [`posix_spawn()`](man:posix_spawn(3))
         * code path to be used.
         * 
         * If application launching occurs via some other mechanism (for example, D-Bus
         * activation) then `spawn_flags`, `user_setup`, `user_setup_data`,
         * `pid_callback` and `pid_callback_data` are ignored.
         * @param uris List of URIs
         * @param launch_context a {@link Gio.AppLaunchContext}
         * @param spawn_flags {@link GLib.SpawnFlags}, used for each process
         * @param user_setup a {@link GLib.SpawnChildSetupFunc},   used once  for each process.
         * @param pid_callback Callback for child processes
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch_uris_as_manager(uris: string[], launch_context: (Gio.AppLaunchContext | null), spawn_flags: GLib.SpawnFlags, user_setup: (GLib.SpawnChildSetupFunc | null), pid_callback: (DesktopAppLaunchCallback | null)): boolean;

        /**
         * Equivalent to {@link GioUnix.DesktopAppInfo.launch_uris_as_manager} but
         * allows you to pass in file descriptors for the stdin, stdout and stderr
         * streams of the launched process.
         * 
         * If application launching occurs via some non-spawn mechanism (e.g. D-Bus
         * activation) then `stdin_fd`, `stdout_fd` and `stderr_fd` are ignored.
         * @param uris List of URIs
         * @param launch_context a {@link Gio.AppLaunchContext}
         * @param spawn_flags {@link GLib.SpawnFlags}, used for each process
         * @param user_setup a   {@link GLib.SpawnChildSetupFunc}, used once for each process.
         * @param pid_callback Callback for child processes
         * @param stdin_fd file descriptor to use for child’s stdin, or `-1`
         * @param stdout_fd file descriptor to use for child’s stdout, or `-1`
         * @param stderr_fd file descriptor to use for child’s stderr, or `-1`
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch_uris_as_manager_with_fds(uris: string[], launch_context: (Gio.AppLaunchContext | null), spawn_flags: GLib.SpawnFlags, user_setup: (GLib.SpawnChildSetupFunc | null), pid_callback: (DesktopAppLaunchCallback | null), stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean;

        /**
         * Returns the list of
         * [‘additional application actions’](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html)
         * supported on the desktop file, as per the desktop file specification.
         * 
         * As per the specification, this is the list of actions that are
         * explicitly listed in the `Actions` key of the `Desktop Entry` group.
         * @returns a   list of strings, always non-`NULL`
         */
        list_actions(): string[];

        /**
         * Adds a content type to the application information to indicate the
         * application is capable of opening files with the given content type.
         * @param content_type a string.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        add_supports_type(content_type: string): boolean;

        /**
         * Obtains the information whether the {@link Gio.AppInfo} can be deleted.
         * See {@link Gio.AppInfo.delete}.
         * @returns `TRUE` if `appinfo` can be deleted
         */
        can_delete(): boolean;

        /**
         * Checks if a supported content type can be removed from an application.
         * @returns `TRUE` if it is possible to remove supported content types from a   given `appinfo`, `FALSE` if not.
         */
        can_remove_supports_type(): boolean;

        /**
         * Tries to delete a {@link Gio.AppInfo}.
         * 
         * On some platforms, there may be a difference between user-defined
         * {@link Gio.AppInfo}s which can be deleted, and system-wide ones which cannot.
         * See {@link Gio.AppInfo.can_delete}.
         * @returns `TRUE` if `appinfo` has been deleted
         */
        ["delete"](): boolean;

        /**
         * Creates a duplicate of a {@link Gio.AppInfo}.
         * @returns a duplicate of `appinfo`.
         */
        dup(): Gio.AppInfo;

        /**
         * Checks if two {@link Gio.AppInfo}s are equal.
         * 
         * Note that the check *may not* compare each individual field, and only does
         * an identity check. In case detecting changes in the contents is needed,
         * program code must additionally compare relevant fields.
         * @param appinfo2 the second {@link Gio.AppInfo}.
         * @returns `TRUE` if `appinfo1` is equal to `appinfo2`. `FALSE` otherwise.
         */
        equal(appinfo2: Gio.AppInfo): boolean;

        /**
         * Gets the commandline with which the application will be
         * started.
         * @returns a string containing the `appinfo`’s   commandline, or `NULL` if this information is not available
         */
        get_commandline(): (string | null);

        /**
         * Gets a human-readable description of an installed application.
         * @returns a string containing a description of the application `appinfo`, or `NULL` if none.
         */
        get_description(): (string | null);

        /**
         * Gets the display name of the application. The display name is often more
         * descriptive to the user than the name itself.
         * @returns the display name of the application for `appinfo`, or the name if no display name is available.
         */
        get_display_name(): string;

        /**
         * Gets the executable’s name for the installed application.
         * 
         * This is intended to be used for debugging or labelling what program is going
         * to be run. To launch the executable, use {@link Gio.AppInfo.launch} and related
         * functions, rather than spawning the return value from this function.
         * @returns a string containing the `appinfo`’s application binaries name
         */
        get_executable(): string;

        /**
         * Gets the icon for the application.
         * @returns the default {@link Gio.Icon} for   `appinfo` or `NULL` if there is no default icon.
         */
        get_icon(): (Gio.Icon | null);

        /**
         * Gets the ID of an application. An id is a string that identifies the
         * application. The exact format of the id is platform dependent. For instance,
         * on Unix this is the desktop file id from the xdg menu specification.
         * 
         * Note that the returned ID may be `NULL`, depending on how the `appinfo` has
         * been constructed.
         * @returns a string containing the application’s ID.
         */
        get_id(): (string | null);

        /**
         * Gets the installed name of the application.
         * @returns the name of the application for `appinfo`.
         */
        get_name(): string;

        /**
         * Retrieves the list of content types that `app_info` claims to support.
         * If this information is not provided by the environment, this function
         * will return `NULL`.
         * 
         * This function does not take in consideration associations added with
         * {@link Gio.AppInfo.add_supports_type}, but only those exported directly by
         * the application.
         * @returns a list of content types.
         */
        get_supported_types(): string[];

        /**
         * Launches the application. Passes `files` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly.
         * 
         * To launch the application without arguments pass a `NULL` `files` list.
         * 
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         * 
         * Some URIs can be changed when passed through a GFile (for instance
         * unsupported URIs with strange formats like mailto:), so if you have
         * a textual URI you want to pass in as argument, consider using
         * {@link Gio.AppInfo.launch_uris} instead.
         * 
         * The launched application inherits the environment of the launching
         * process, but it can be modified with {@link Gio.AppLaunchContext.setenv}
         * and {@link Gio.AppLaunchContext.unsetenv}.
         * 
         * On UNIX, this function sets the `GIO_LAUNCHED_DESKTOP_FILE`
         * environment variable with the path of the launched desktop file and
         * `GIO_LAUNCHED_DESKTOP_FILE_PID` to the process id of the launched
         * process. This can be used to ignore `GIO_LAUNCHED_DESKTOP_FILE`,
         * should it be inherited by further processes. The `DISPLAY`,
         * `XDG_ACTIVATION_TOKEN` and `DESKTOP_STARTUP_ID` environment
         * variables are also set, based on information provided in `context`.
         * @param files a list of {@link Gio.File} objects
         * @param context the launch context
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch(files: (Gio.File[] | null), context: (Gio.AppLaunchContext | null)): boolean;

        /**
         * Launches the application. This passes the `uris` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly. If the application only supports
         * one URI per invocation as part of their command-line, multiple instances
         * of the application will be spawned.
         * 
         * To launch the application without arguments pass a `NULL` `uris` list.
         * 
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch_uris(uris: (string[] | null), context: (Gio.AppLaunchContext | null)): boolean;

        /**
         * Async version of {@link Gio.AppInfo.launch_uris}.
         * 
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * {@link Gio.AppInfo.launch_default_for_uri_async}.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a {@link Gio.Cancellable}
         */
        launch_uris_async(uris: (string[] | null), context: (Gio.AppLaunchContext | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Async version of {@link Gio.AppInfo.launch_uris}.
         * 
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * {@link Gio.AppInfo.launch_default_for_uri_async}.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call   when the request is done
         */
        launch_uris_async(uris: (string[] | null), context: (Gio.AppLaunchContext | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Async version of {@link Gio.AppInfo.launch_uris}.
         * 
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * {@link Gio.AppInfo.launch_default_for_uri_async}.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call   when the request is done
         */
        launch_uris_async(uris: (string[] | null), context: (Gio.AppLaunchContext | null), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes a {@link Gio.AppInfo.launch_uris_async} operation.
         * @param result the async result
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch_uris_finish(result: Gio.AsyncResult): boolean;

        /**
         * Removes a supported type from an application, if possible.
         * @param content_type a string.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        remove_supports_type(content_type: string): boolean;

        /**
         * Sets the application as the default handler for the given file extension.
         * @param extension a string containing the file extension (without   the dot).
         * @returns `TRUE` on success, `FALSE` on error.
         */
        set_as_default_for_extension(extension: string): boolean;

        /**
         * Sets the application as the default handler for a given type.
         * @param content_type the content type.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        set_as_default_for_type(content_type: string): boolean;

        /**
         * Sets the application as the last used application for a given type. This
         * will make the application appear as first in the list returned by
         * {@link Gio.AppInfo.get_recommended_for_type}, regardless of the default
         * application for that content type.
         * @param content_type the content type.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        set_as_last_used_for_type(content_type: string): boolean;

        /**
         * Checks if the application info should be shown in menus that
         * list available applications.
         * @returns `TRUE` if the `appinfo` should be shown, `FALSE` otherwise.
         */
        should_show(): boolean;

        /**
         * Checks if the application accepts files as arguments.
         * @returns `TRUE` if the `appinfo` supports files.
         */
        supports_files(): boolean;

        /**
         * Checks if the application supports reading files and directories from URIs.
         * @returns `TRUE` if the `appinfo` supports URIs.
         */
        supports_uris(): boolean;

        /**
         * Adds a content type to the application information to indicate the
         * application is capable of opening files with the given content type.
         * @param content_type a string.
         * @virtual
         */
        vfunc_add_supports_type(content_type: string): boolean;

        /**
         * Obtains the information whether the {@link Gio.AppInfo} can be deleted.
         * See {@link Gio.AppInfo.delete}.
         * @virtual
         */
        vfunc_can_delete(): boolean;

        /**
         * Checks if a supported content type can be removed from an application.
         * @virtual
         */
        vfunc_can_remove_supports_type(): boolean;

        /**
         * Tries to delete a {@link Gio.AppInfo}.
         * 
         * On some platforms, there may be a difference between user-defined
         * {@link Gio.AppInfo}s which can be deleted, and system-wide ones which cannot.
         * See {@link Gio.AppInfo.can_delete}.
         * @virtual
         */
        vfunc_do_delete(): boolean;

        /**
         * Creates a duplicate of a {@link Gio.AppInfo}.
         * @virtual
         */
        vfunc_dup(): Gio.AppInfo;

        /**
         * Checks if two {@link Gio.AppInfo}s are equal.
         * 
         * Note that the check *may not* compare each individual field, and only does
         * an identity check. In case detecting changes in the contents is needed,
         * program code must additionally compare relevant fields.
         * @param appinfo2 the second {@link Gio.AppInfo}.
         * @virtual
         */
        vfunc_equal(appinfo2: Gio.AppInfo): boolean;

        /**
         * Gets the commandline with which the application will be
         * started.
         * @virtual
         */
        vfunc_get_commandline(): (string | null);

        /**
         * Gets a human-readable description of an installed application.
         * @virtual
         */
        vfunc_get_description(): (string | null);

        /**
         * Gets the display name of the application. The display name is often more
         * descriptive to the user than the name itself.
         * @virtual
         */
        vfunc_get_display_name(): string;

        /**
         * Gets the executable’s name for the installed application.
         * 
         * This is intended to be used for debugging or labelling what program is going
         * to be run. To launch the executable, use {@link Gio.AppInfo.launch} and related
         * functions, rather than spawning the return value from this function.
         * @virtual
         */
        vfunc_get_executable(): string;

        /**
         * Gets the icon for the application.
         * @virtual
         */
        vfunc_get_icon(): (Gio.Icon | null);

        /**
         * Gets the ID of an application. An id is a string that identifies the
         * application. The exact format of the id is platform dependent. For instance,
         * on Unix this is the desktop file id from the xdg menu specification.
         * 
         * Note that the returned ID may be `NULL`, depending on how the `appinfo` has
         * been constructed.
         * @virtual
         */
        vfunc_get_id(): (string | null);

        /**
         * Gets the installed name of the application.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Retrieves the list of content types that `app_info` claims to support.
         * If this information is not provided by the environment, this function
         * will return `NULL`.
         * 
         * This function does not take in consideration associations added with
         * {@link Gio.AppInfo.add_supports_type}, but only those exported directly by
         * the application.
         * @virtual
         */
        vfunc_get_supported_types(): string[];

        /**
         * Launches the application. Passes `files` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly.
         * 
         * To launch the application without arguments pass a `NULL` `files` list.
         * 
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         * 
         * Some URIs can be changed when passed through a GFile (for instance
         * unsupported URIs with strange formats like mailto:), so if you have
         * a textual URI you want to pass in as argument, consider using
         * {@link Gio.AppInfo.launch_uris} instead.
         * 
         * The launched application inherits the environment of the launching
         * process, but it can be modified with {@link Gio.AppLaunchContext.setenv}
         * and {@link Gio.AppLaunchContext.unsetenv}.
         * 
         * On UNIX, this function sets the `GIO_LAUNCHED_DESKTOP_FILE`
         * environment variable with the path of the launched desktop file and
         * `GIO_LAUNCHED_DESKTOP_FILE_PID` to the process id of the launched
         * process. This can be used to ignore `GIO_LAUNCHED_DESKTOP_FILE`,
         * should it be inherited by further processes. The `DISPLAY`,
         * `XDG_ACTIVATION_TOKEN` and `DESKTOP_STARTUP_ID` environment
         * variables are also set, based on information provided in `context`.
         * @param files a list of {@link Gio.File} objects
         * @param context the launch context
         * @virtual
         */
        vfunc_launch(files: (Gio.File[] | null), context: (Gio.AppLaunchContext | null)): boolean;

        /**
         * Launches the application. This passes the `uris` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly. If the application only supports
         * one URI per invocation as part of their command-line, multiple instances
         * of the application will be spawned.
         * 
         * To launch the application without arguments pass a `NULL` `uris` list.
         * 
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @virtual
         */
        vfunc_launch_uris(uris: (string[] | null), context: (Gio.AppLaunchContext | null)): boolean;

        /**
         * Async version of {@link Gio.AppInfo.launch_uris}.
         * 
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * {@link Gio.AppInfo.launch_default_for_uri_async}.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call   when the request is done
         * @virtual
         */
        vfunc_launch_uris_async(uris: (string[] | null), context: (Gio.AppLaunchContext | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes a {@link Gio.AppInfo.launch_uris_async} operation.
         * @param result the async result
         * @virtual
         */
        vfunc_launch_uris_finish(result: Gio.AsyncResult): boolean;

        /**
         * Removes a supported type from an application, if possible.
         * @param content_type a string.
         * @virtual
         */
        vfunc_remove_supports_type(content_type: string): boolean;

        /**
         * Sets the application as the default handler for the given file extension.
         * @param extension a string containing the file extension (without   the dot).
         * @virtual
         */
        vfunc_set_as_default_for_extension(extension: string): boolean;

        /**
         * Sets the application as the default handler for a given type.
         * @param content_type the content type.
         * @virtual
         */
        vfunc_set_as_default_for_type(content_type: string): boolean;

        /**
         * Sets the application as the last used application for a given type. This
         * will make the application appear as first in the list returned by
         * {@link Gio.AppInfo.get_recommended_for_type}, regardless of the default
         * application for that content type.
         * @param content_type the content type.
         * @virtual
         */
        vfunc_set_as_last_used_for_type(content_type: string): boolean;

        /**
         * Checks if the application info should be shown in menus that
         * list available applications.
         * @virtual
         */
        vfunc_should_show(): boolean;

        /**
         * Checks if the application accepts files as arguments.
         * @virtual
         */
        vfunc_supports_files(): boolean;

        /**
         * Checks if the application supports reading files and directories from URIs.
         * @virtual
         */
        vfunc_supports_uris(): boolean;
    }


    namespace FDMessage {
        // Signal signatures
        interface SignalSignatures extends Gio.SocketControlMessage.SignalSignatures {
            "notify::fd-list": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.SocketControlMessage.ConstructorProps {
            fd_list: Gio.UnixFDList;
            fdList: Gio.UnixFDList;
        }
    }

    /**
     * This {@link Gio.SocketControlMessage} contains a {@link Gio.UnixFDList}.
     * It may be sent using {@link Gio.Socket.send_message} and received using
     * {@link Gio.Socket.receive_message} over UNIX sockets (ie: sockets in the
     * `G_SOCKET_FAMILY_UNIX` family). The file descriptors are copied
     * between processes by the kernel.
     * 
     * For an easier way to send and receive file descriptors over
     * stream-oriented UNIX sockets, see {@link Gio.UnixConnection.send_fd} and
     * {@link Gio.UnixConnection.receive_fd}.
     * 
     * Note that `<gio/gunixfdmessage.h>` belongs to the UNIX-specific GIO
     * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
     * file or the `GioUnix-2.0` GIR namespace when using it.
     * @gir-type Class
     */
    class FDMessage extends Gio.SocketControlMessage {
        static $gtype: GObject.GType<FDMessage>;

        // Properties
        /**
         * The {@link Gio.UnixFDList} object to send with the message.
         * @since 2.22
         * @construct-only
         */
        get fd_list(): Gio.UnixFDList;

        /**
         * The {@link Gio.UnixFDList} object to send with the message.
         * @since 2.22
         * @construct-only
         */
        get fdList(): Gio.UnixFDList;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FDMessage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FDMessage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FDMessage;

        static new_with_fd_list(fd_list: Gio.UnixFDList): FDMessage;

        // Signals
        /** @signal */
        connect<K extends keyof FDMessage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FDMessage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FDMessage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FDMessage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FDMessage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FDMessage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a file descriptor to `message`.
         * 
         * The file descriptor is duplicated using `dup()`. You keep your copy
         * of the descriptor and the copy contained in `message` will be closed
         * when `message` is finalized.
         * 
         * A possible cause of failure is exceeding the per-process or
         * system-wide file descriptor limit.
         * @param fd a valid open file descriptor
         * @returns `true` in case of success, else `false` (and `error` is set)
         */
        append_fd(fd: number): boolean;

        /**
         * Gets the {@link Gio.UnixFDList} contained in `message`.  This function does not
         * return a reference to the caller, but the returned list is valid for
         * the lifetime of `message`.
         * @returns the {@link Gio.UnixFDList} from `message`
         */
        get_fd_list(): Gio.UnixFDList;

        /**
         * Returns the array of file descriptors that is contained in this
         * object.
         * 
         * After this call, the descriptors are no longer contained in
         * `message`. Further calls will return an empty list (unless more
         * descriptors have been added).
         * 
         * The return result of this function must be freed with `g_free()`.
         * The caller is also responsible for closing all of the file
         * descriptors.
         * 
         * If `length` is non-`null` then it is set to the number of file
         * descriptors in the returned array. The returned array is also
         * terminated with -1.
         * 
         * This function never returns `null`. In case there are no file
         * descriptors contained in `message`, an empty array is returned.
         * @returns an array of file     descriptors
         */
        steal_fds(): number[];
    }


    namespace InputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {
            "notify::close-fd": (pspec: GObject.ParamSpec) => void;
            "notify::fd": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.PollableInputStream.ConstructorProps, FileDescriptorBased.ConstructorProps {
            close_fd: boolean;
            closeFd: boolean;
            fd: number;
        }
    }

    /**
     * {@link GioUnix.InputStream} implements {@link Gio.InputStream} for reading from a UNIX
     * file descriptor, including asynchronous operations. (If the file
     * descriptor refers to a socket or pipe, this will use `poll()` to do
     * asynchronous I/O. If it refers to a regular file, it will fall back
     * to doing asynchronous I/O in another thread.)
     * 
     * Note that `<gio/gunixinputstream.h>` belongs to the UNIX-specific GIO
     * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
     * file or the `GioUnix-2.0` GIR namespace when using it.
     * @gir-type Class
     */
    class InputStream extends Gio.InputStream implements Gio.PollableInputStream, FileDescriptorBased {
        static $gtype: GObject.GType<InputStream>;

        // Properties
        /**
         * Whether to close the file descriptor when the stream is closed.
         * @since 2.20
         * @default true
         */
        get close_fd(): boolean;
        set close_fd(val: boolean);

        /**
         * Whether to close the file descriptor when the stream is closed.
         * @since 2.20
         * @default true
         */
        get closeFd(): boolean;
        set closeFd(val: boolean);

        /**
         * The file descriptor that the stream reads from.
         * @since 2.20
         * @construct-only
         * @default -1
         */
        get fd(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputStream.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](fd: number, close_fd: boolean): InputStream;

        // Signals
        /** @signal */
        connect<K extends keyof InputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof InputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof InputStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns whether the file descriptor of `stream` will be
         * closed when the stream is closed.
         * @returns `true` if the file descriptor is closed when done
         */
        get_close_fd(): boolean;

        /**
         * Return the UNIX file descriptor that the stream reads from.
         * @returns The file descriptor of `stream`
         */
        get_fd(): number;

        /**
         * Sets whether the file descriptor of `stream` shall be closed
         * when the stream is closed.
         * @param close_fd `true` to close the file descriptor when done
         */
        set_close_fd(close_fd: boolean): void;

        /**
         * Checks if `stream` is actually pollable. Some classes may implement
         * {@link Gio.PollableInputStream} but have only certain instances of that class
         * be pollable. If this method returns `false`, then the behavior of
         * other {@link Gio.PollableInputStream} methods is undefined.
         * 
         * For any given stream, the value returned by this method is constant;
         * a stream cannot switch from pollable to non-pollable or vice versa.
         * @returns `true` if `stream` is pollable, `false` if not.
         */
        can_poll(): boolean;

        /**
         * Creates a {@link GLib.Source} that triggers when `stream` can be read, or
         * `cancellable` is triggered or an error occurs. The callback on the
         * source is of the {@link Gio.PollableSourceFunc} type.
         * 
         * As with `g_pollable_input_stream_is_readable()`, it is possible that
         * the stream may not actually be readable even after the source
         * triggers, so you should use `g_pollable_input_stream_read_nonblocking()`
         * rather than `g_input_stream_read()` from the callback.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_input_stream_can_poll()` returns `false` for `stream`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns a new {@link GLib.Source}
         */
        create_source(cancellable: (Gio.Cancellable | null)): GLib.Source;

        /**
         * Checks if `stream` can be read.
         * 
         * Note that some stream types may not be able to implement this 100%
         * reliably, and it is possible that a call to `g_input_stream_read()`
         * after this returns `true` would still block. To guarantee
         * non-blocking behavior, you should always use
         * `g_pollable_input_stream_read_nonblocking()`, which will return a
         * {@link Gio.IOErrorEnum.WOULD_BLOCK} error rather than blocking.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_input_stream_can_poll()` returns `false` for `stream`.
         * @returns `true` if `stream` is readable, `false` if not. If an error   has occurred on `stream`, this will result in   `g_pollable_input_stream_is_readable()` returning `true`, and the   next attempt to read will return the error.
         */
        is_readable(): boolean;

        /**
         * Attempts to read up to `count` bytes from `stream` into `buffer`, as
         * with `g_input_stream_read()`. If `stream` is not currently readable,
         * this will immediately return {@link Gio.IOErrorEnum.WOULD_BLOCK}, and you can
         * use `g_pollable_input_stream_create_source()` to create a {@link GLib.Source}
         * that will be triggered when `stream` is readable.
         * 
         * Note that since this method never blocks, you cannot actually
         * use `cancellable` to cancel it. However, it will return an error
         * if `cancellable` has already been cancelled when you call, which
         * may happen if you call this method after a source triggers due
         * to having been cancelled.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_input_stream_can_poll()` returns `false` for `stream`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns the number of bytes read, or -1 on error (including   {@link Gio.IOErrorEnum.WOULD_BLOCK}).
         */
        read_nonblocking(cancellable: (Gio.Cancellable | null)): [number, Uint8Array];

        /**
         * Checks if `stream` is actually pollable. Some classes may implement
         * {@link Gio.PollableInputStream} but have only certain instances of that class
         * be pollable. If this method returns `false`, then the behavior of
         * other {@link Gio.PollableInputStream} methods is undefined.
         * 
         * For any given stream, the value returned by this method is constant;
         * a stream cannot switch from pollable to non-pollable or vice versa.
         * @virtual
         */
        vfunc_can_poll(): boolean;

        /**
         * Creates a {@link GLib.Source} that triggers when `stream` can be read, or
         * `cancellable` is triggered or an error occurs. The callback on the
         * source is of the {@link Gio.PollableSourceFunc} type.
         * 
         * As with `g_pollable_input_stream_is_readable()`, it is possible that
         * the stream may not actually be readable even after the source
         * triggers, so you should use `g_pollable_input_stream_read_nonblocking()`
         * rather than `g_input_stream_read()` from the callback.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_input_stream_can_poll()` returns `false` for `stream`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_create_source(cancellable: (Gio.Cancellable | null)): GLib.Source;

        /**
         * Checks if `stream` can be read.
         * 
         * Note that some stream types may not be able to implement this 100%
         * reliably, and it is possible that a call to `g_input_stream_read()`
         * after this returns `true` would still block. To guarantee
         * non-blocking behavior, you should always use
         * `g_pollable_input_stream_read_nonblocking()`, which will return a
         * {@link Gio.IOErrorEnum.WOULD_BLOCK} error rather than blocking.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_input_stream_can_poll()` returns `false` for `stream`.
         * @virtual
         */
        vfunc_is_readable(): boolean;

        /**
         * Attempts to read up to `count` bytes from `stream` into `buffer`, as
         * with `g_input_stream_read()`. If `stream` is not currently readable,
         * this will immediately return {@link Gio.IOErrorEnum.WOULD_BLOCK}, and you can
         * use `g_pollable_input_stream_create_source()` to create a {@link GLib.Source}
         * that will be triggered when `stream` is readable.
         * 
         * Note that since this method never blocks, you cannot actually
         * use `cancellable` to cancel it. However, it will return an error
         * if `cancellable` has already been cancelled when you call, which
         * may happen if you call this method after a source triggers due
         * to having been cancelled.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_input_stream_can_poll()` returns `false` for `stream`.
         * @virtual
         */
        vfunc_read_nonblocking(): [(bigint | number), Uint8Array | null];

        /**
         * Gets the underlying file descriptor.
         * @virtual
         */
        vfunc_get_fd(): number;
    }


    namespace MountMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the Unix mount points have changed.
             * @signal
             * @run-last
             */
            "mountpoints-changed": () => void;
            /**
             * Emitted when the Unix mount entries have changed.
             * @signal
             * @run-last
             */
            "mounts-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Watches for changes to the set of mount entries and mount points in the
     * system.
     * 
     * Connect to the `GioUnix.MountMonitor::mounts-changed` signal to be
     * notified of changes to the {@link GioUnix.MountEntry} list.
     * 
     * Connect to the `GioUnix.MountMonitor::mountpoints-changed` signal to
     * be notified of changes to the {@link GioUnix.MountPoint} list.
     * @gir-type Class
     */
    class MountMonitor extends GObject.Object {
        static $gtype: GObject.GType<MountMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MountMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MountMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MountMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof MountMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MountMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MountMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MountMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MountMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MountMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the {@link GioUnix.MountMonitor} for the current thread-default main
         * context.
         * 
         * The mount monitor can be used to monitor for changes to the list of
         * mounted filesystems as well as the list of mount points (ie: fstab
         * entries).
         * 
         * You must only call {@link GObject.Object.unref} on the return value from
         * under the same main context as you called this function.
         */
        static get(): MountMonitor;

        // Methods
        /**
         * This function does nothing.
         * 
         * Before 2.44, this was a partially-effective way of controlling the
         * rate at which events would be reported under some uncommon
         * circumstances.  Since `mount_monitor` is a singleton, it also meant
         * that calling this function would have side effects for other users of
         * the monitor.
         * @param limit_msec a integer with the limit (in milliseconds) to poll for changes
         */
        set_rate_limit(limit_msec: number): void;
    }


    namespace OutputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.OutputStream.SignalSignatures {
            "notify::close-fd": (pspec: GObject.ParamSpec) => void;
            "notify::fd": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.OutputStream.ConstructorProps, Gio.PollableOutputStream.ConstructorProps, FileDescriptorBased.ConstructorProps {
            close_fd: boolean;
            closeFd: boolean;
            fd: number;
        }
    }

    /**
     * {@link GioUnix.OutputStream} implements {@link Gio.OutputStream} for writing to a UNIX
     * file descriptor, including asynchronous operations. (If the file
     * descriptor refers to a socket or pipe, this will use `poll()` to do
     * asynchronous I/O. If it refers to a regular file, it will fall back
     * to doing asynchronous I/O in another thread.)
     * 
     * Note that `<gio/gunixoutputstream.h>` belongs to the UNIX-specific GIO
     * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config file
     * file or the `GioUnix-2.0` GIR namespace when using it.
     * @gir-type Class
     */
    class OutputStream extends Gio.OutputStream implements Gio.PollableOutputStream, FileDescriptorBased {
        static $gtype: GObject.GType<OutputStream>;

        // Properties
        /**
         * Whether to close the file descriptor when the stream is closed.
         * @since 2.20
         * @default true
         */
        get close_fd(): boolean;
        set close_fd(val: boolean);

        /**
         * Whether to close the file descriptor when the stream is closed.
         * @since 2.20
         * @default true
         */
        get closeFd(): boolean;
        set closeFd(val: boolean);

        /**
         * The file descriptor that the stream writes to.
         * @since 2.20
         * @construct-only
         * @default -1
         */
        get fd(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputStream.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](fd: number, close_fd: boolean): OutputStream;

        // Signals
        /** @signal */
        connect<K extends keyof OutputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OutputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OutputStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns whether the file descriptor of `stream` will be
         * closed when the stream is closed.
         * @returns `true` if the file descriptor is closed when done
         */
        get_close_fd(): boolean;

        /**
         * Return the UNIX file descriptor that the stream writes to.
         * @returns The file descriptor of `stream`
         */
        get_fd(): number;

        /**
         * Sets whether the file descriptor of `stream` shall be closed
         * when the stream is closed.
         * @param close_fd `true` to close the file descriptor when done
         */
        set_close_fd(close_fd: boolean): void;

        /**
         * Checks if `stream` is actually pollable. Some classes may implement
         * {@link Gio.PollableOutputStream} but have only certain instances of that
         * class be pollable. If this method returns `false`, then the behavior
         * of other {@link Gio.PollableOutputStream} methods is undefined.
         * 
         * For any given stream, the value returned by this method is constant;
         * a stream cannot switch from pollable to non-pollable or vice versa.
         * @returns `true` if `stream` is pollable, `false` if not.
         */
        can_poll(): boolean;

        /**
         * Creates a {@link GLib.Source} that triggers when `stream` can be written, or
         * `cancellable` is triggered or an error occurs. The callback on the
         * source is of the {@link Gio.PollableSourceFunc} type.
         * 
         * As with `g_pollable_output_stream_is_writable()`, it is possible that
         * the stream may not actually be writable even after the source
         * triggers, so you should use `g_pollable_output_stream_write_nonblocking()`
         * rather than `g_output_stream_write()` from the callback.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns a new {@link GLib.Source}
         */
        create_source(cancellable: (Gio.Cancellable | null)): GLib.Source;

        /**
         * Checks if `stream` can be written.
         * 
         * Note that some stream types may not be able to implement this 100%
         * reliably, and it is possible that a call to `g_output_stream_write()`
         * after this returns `true` would still block. To guarantee
         * non-blocking behavior, you should always use
         * `g_pollable_output_stream_write_nonblocking()`, which will return a
         * {@link Gio.IOErrorEnum.WOULD_BLOCK} error rather than blocking.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @returns `true` if `stream` is writable, `false` if not. If an error   has occurred on `stream`, this will result in   `g_pollable_output_stream_is_writable()` returning `true`, and the   next attempt to write will return the error.
         */
        is_writable(): boolean;

        /**
         * Attempts to write up to `count` bytes from `buffer` to `stream`, as
         * with `g_output_stream_write()`. If `stream` is not currently writable,
         * this will immediately return {@link Gio.IOErrorEnum.WOULD_BLOCK}, and you can
         * use `g_pollable_output_stream_create_source()` to create a {@link GLib.Source}
         * that will be triggered when `stream` is writable.
         * 
         * Note that since this method never blocks, you cannot actually
         * use `cancellable` to cancel it. However, it will return an error
         * if `cancellable` has already been cancelled when you call, which
         * may happen if you call this method after a source triggers due
         * to having been cancelled.
         * 
         * Also note that if {@link Gio.IOErrorEnum.WOULD_BLOCK} is returned some underlying
         * transports like D/TLS require that you re-send the same `buffer` and
         * `count` in the next write call.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @param buffer a buffer to write     data from
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns the number of bytes written, or -1 on error (including   {@link Gio.IOErrorEnum.WOULD_BLOCK}).
         */
        write_nonblocking(buffer: (Uint8Array | string), cancellable: (Gio.Cancellable | null)): number;

        /**
         * Attempts to write the bytes contained in the `n_vectors` `vectors` to `stream`,
         * as with `g_output_stream_writev()`. If `stream` is not currently writable,
         * this will immediately return %`G_POLLABLE_RETURN_WOULD_BLOCK`, and you can
         * use `g_pollable_output_stream_create_source()` to create a {@link GLib.Source}
         * that will be triggered when `stream` is writable. `error` will *not* be
         * set in that case.
         * 
         * Note that since this method never blocks, you cannot actually
         * use `cancellable` to cancel it. However, it will return an error
         * if `cancellable` has already been cancelled when you call, which
         * may happen if you call this method after a source triggers due
         * to having been cancelled.
         * 
         * Also note that if {@link Gio.PollableReturn.WOULD_BLOCK} is returned some underlying
         * transports like D/TLS require that you re-send the same `vectors` and
         * `n_vectors` in the next write call.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @param vectors the buffer containing the `GOutputVectors` to write.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns %`G_POLLABLE_RETURN_OK` on success, {@link Gio.PollableReturn.WOULD_BLOCK} if the stream is not currently writable (and `error` is *not* set), or {@link Gio.PollableReturn.FAILED} if there was an error in which case `error` will be set.
         */
        writev_nonblocking(vectors: Gio.OutputVector[], cancellable: (Gio.Cancellable | null)): [Gio.PollableReturn, number];

        /**
         * Checks if `stream` is actually pollable. Some classes may implement
         * {@link Gio.PollableOutputStream} but have only certain instances of that
         * class be pollable. If this method returns `false`, then the behavior
         * of other {@link Gio.PollableOutputStream} methods is undefined.
         * 
         * For any given stream, the value returned by this method is constant;
         * a stream cannot switch from pollable to non-pollable or vice versa.
         * @virtual
         */
        vfunc_can_poll(): boolean;

        /**
         * Creates a {@link GLib.Source} that triggers when `stream` can be written, or
         * `cancellable` is triggered or an error occurs. The callback on the
         * source is of the {@link Gio.PollableSourceFunc} type.
         * 
         * As with `g_pollable_output_stream_is_writable()`, it is possible that
         * the stream may not actually be writable even after the source
         * triggers, so you should use `g_pollable_output_stream_write_nonblocking()`
         * rather than `g_output_stream_write()` from the callback.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_create_source(cancellable: (Gio.Cancellable | null)): GLib.Source;

        /**
         * Checks if `stream` can be written.
         * 
         * Note that some stream types may not be able to implement this 100%
         * reliably, and it is possible that a call to `g_output_stream_write()`
         * after this returns `true` would still block. To guarantee
         * non-blocking behavior, you should always use
         * `g_pollable_output_stream_write_nonblocking()`, which will return a
         * {@link Gio.IOErrorEnum.WOULD_BLOCK} error rather than blocking.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @virtual
         */
        vfunc_is_writable(): boolean;

        /**
         * Attempts to write up to `count` bytes from `buffer` to `stream`, as
         * with `g_output_stream_write()`. If `stream` is not currently writable,
         * this will immediately return {@link Gio.IOErrorEnum.WOULD_BLOCK}, and you can
         * use `g_pollable_output_stream_create_source()` to create a {@link GLib.Source}
         * that will be triggered when `stream` is writable.
         * 
         * Note that since this method never blocks, you cannot actually
         * use `cancellable` to cancel it. However, it will return an error
         * if `cancellable` has already been cancelled when you call, which
         * may happen if you call this method after a source triggers due
         * to having been cancelled.
         * 
         * Also note that if {@link Gio.IOErrorEnum.WOULD_BLOCK} is returned some underlying
         * transports like D/TLS require that you re-send the same `buffer` and
         * `count` in the next write call.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @param buffer a buffer to write     data from
         * @virtual
         */
        vfunc_write_nonblocking(buffer: (Uint8Array | null)): (bigint | number);

        /**
         * Attempts to write the bytes contained in the `n_vectors` `vectors` to `stream`,
         * as with `g_output_stream_writev()`. If `stream` is not currently writable,
         * this will immediately return %`G_POLLABLE_RETURN_WOULD_BLOCK`, and you can
         * use `g_pollable_output_stream_create_source()` to create a {@link GLib.Source}
         * that will be triggered when `stream` is writable. `error` will *not* be
         * set in that case.
         * 
         * Note that since this method never blocks, you cannot actually
         * use `cancellable` to cancel it. However, it will return an error
         * if `cancellable` has already been cancelled when you call, which
         * may happen if you call this method after a source triggers due
         * to having been cancelled.
         * 
         * Also note that if {@link Gio.PollableReturn.WOULD_BLOCK} is returned some underlying
         * transports like D/TLS require that you re-send the same `vectors` and
         * `n_vectors` in the next write call.
         * 
         * The behaviour of this method is undefined if
         * `g_pollable_output_stream_can_poll()` returns `false` for `stream`.
         * @param vectors the buffer containing the `GOutputVectors` to write.
         * @virtual
         */
        vfunc_writev_nonblocking(vectors: Gio.OutputVector[]): [Gio.PollableReturn, bigint | number];

        /**
         * Gets the underlying file descriptor.
         * @virtual
         */
        vfunc_get_fd(): number;
    }


    /**
     * @gir-type Alias
     */
    type DesktopAppInfoClass = typeof DesktopAppInfo;

    /**
     * @gir-type Alias
     */
    type DesktopAppInfoLookupIface = typeof DesktopAppInfoLookup;

    /**
     * @gir-type Alias
     */
    type FDMessageClass = typeof FDMessage;

    /**
     * @gir-type Struct
     */
    abstract class FDMessagePrivate {
        static $gtype: GObject.GType<FDMessagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FileDescriptorBasedIface = typeof FileDescriptorBased;

    /**
     * @gir-type Alias
     */
    type InputStreamClass = typeof InputStream;

    /**
     * @gir-type Struct
     */
    abstract class InputStreamPrivate {
        static $gtype: GObject.GType<InputStreamPrivate>;
    }


    /**
     * Defines a Unix mount entry (e.g. `/media/cdrom`).
     * This corresponds roughly to a mtab entry.
     * @gir-type Struct
     */
    abstract class MountEntry {
        static $gtype: GObject.GType<MountEntry>;

        // Static methods
        /**
         * Gets a {@link GioUnix.MountEntry} for a given mount path.
         * 
         * If `time_read` is set, it will be filled with a Unix timestamp for checking
         * if the mounts have changed since with
         * {@link GioUnix.mount_entries_changed_since}.
         * 
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         * 
         * This will return `NULL` if there is no mount point at `mount_path`.
         * @param mount_path path for a possible Unix mount
         */
        static at(mount_path: string): [(MountEntry | null), number];

        /**
         * Gets a {@link GioUnix.MountEntry} for a given file path.
         * 
         * If `time_read` is set, it will be filled with a Unix timestamp for checking
         * if the mounts have changed since with
         * {@link GioUnix.mount_entries_changed_since}.
         * 
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         * 
         * This will return `NULL` if looking up the mount entry fails, if
         * `file_path` doesn’t exist or there is an I/O error.
         * @param file_path file path on some Unix mount
         */
        static ["for"](file_path: string): [(MountEntry | null), number];

        // Methods
        /**
         * Compares two Unix mounts.
         * @param mount2 second {@link GioUnix.MountEntry} to compare
         * @returns `1`, `0` or `-1` if `mount1` is greater than, equal to,    or less than `mount2`, respectively
         */
        compare(mount2: MountEntry): number;

        /**
         * Makes a copy of `mount_entry`.
         * @returns a new {@link GioUnix.MountEntry}
         */
        copy(): MountEntry;

        /**
         * Frees a Unix mount.
         */
        free(): void;

        /**
         * Gets the device path for a Unix mount.
         * @returns a string containing the device path
         */
        get_device_path(): string;

        /**
         * Gets the filesystem type for the Unix mount.
         * @returns a string containing the file system type
         */
        get_fs_type(): string;

        /**
         * Gets the mount path for a Unix mount.
         * @returns the mount path for `mount_entry`
         */
        get_mount_path(): string;

        /**
         * Gets a comma separated list of mount options for the Unix mount.
         * 
         * For example: `rw,relatime,seclabel,data=ordered`.
         * 
         * This is similar to {@link GioUnix.MountPoint.get_options}, but it takes
         * a {@link GioUnix.MountEntry} as an argument.
         * @returns a string containing the options, or `NULL` if not    available.
         */
        get_options(): (string | null);

        /**
         * Gets the root of the mount within the filesystem. This is useful e.g. for
         * mounts created by bind operation, or btrfs subvolumes.
         * 
         * For example, the root path is equal to `/` for a mount created by
         * `mount /dev/sda1 /mnt/foo` and `/bar` for
         * `mount --bind /mnt/foo/bar /mnt/bar`.
         * @returns a string containing the root, or `NULL` if not supported
         */
        get_root_path(): (string | null);

        /**
         * Guesses whether a Unix mount entry can be ejected.
         * @returns true if `mount_entry` is deemed to be ejectable; false otherwise
         */
        guess_can_eject(): boolean;

        /**
         * Guesses the icon of a Unix mount entry.
         * @returns a {@link Gio.Icon}
         */
        guess_icon(): Gio.Icon;

        /**
         * Guesses the name of a Unix mount entry.
         * 
         * The result is a translated string.
         * @returns a newly allocated translated string
         */
        guess_name(): string;

        /**
         * Guesses whether a Unix mount entry should be displayed in the UI.
         * @returns true if `mount_entry` is deemed to be displayable; false otherwise
         */
        guess_should_display(): boolean;

        /**
         * Guesses the symbolic icon of a Unix mount entry.
         * @returns a {@link Gio.Icon}
         */
        guess_symbolic_icon(): Gio.Icon;

        /**
         * Checks if a Unix mount is mounted read only.
         * @returns true if `mount_entry` is read only; false otherwise
         */
        is_readonly(): boolean;

        /**
         * Checks if a Unix mount is a system mount.
         * 
         * This is the Boolean OR of
         * {@link GioUnix.is_system_fs_type}, {@link GioUnix.is_system_device_path} and
         * {@link GioUnix.is_mount_path_system_internal} on `mount_entry`’s properties.
         * 
         * The definition of what a ‘system’ mount entry is may change over time as new
         * file system types and device paths are ignored.
         * @returns true if the Unix mount is for a system path; false otherwise
         */
        is_system_internal(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type MountMonitorClass = typeof MountMonitor;

    /**
     * Defines a Unix mount point (e.g. `/dev`).
     * This corresponds roughly to a fstab entry.
     * @gir-type Struct
     */
    abstract class MountPoint {
        static $gtype: GObject.GType<MountPoint>;

        // Static methods
        /**
         * Gets a {@link GioUnix.MountPoint} for a given mount path.
         * 
         * If `time_read` is set, it will be filled with a Unix timestamp for checking if
         * the mount points have changed since with
         * {@link GioUnix.mount_points_changed_since}.
         * 
         * If more mount points have the same mount path, the last matching mount point
         * is returned.
         * @param mount_path path for a possible Unix mount point
         */
        static at(mount_path: string): [(MountPoint | null), number];

        // Methods
        /**
         * Compares two Unix mount points.
         * @param mount2 a {@link GioUnix.MountPoint}
         * @returns `1`, `0` or `-1` if `mount1` is greater than, equal to,    or less than `mount2`, respectively
         */
        compare(mount2: MountPoint): number;

        /**
         * Makes a copy of `mount_point`.
         * @returns a new {@link GioUnix.MountPoint}
         */
        copy(): MountPoint;

        /**
         * Frees a Unix mount point.
         */
        free(): void;

        /**
         * Gets the device path for a Unix mount point.
         * @returns a string containing the device path
         */
        get_device_path(): string;

        /**
         * Gets the file system type for the mount point.
         * @returns a string containing the file system type
         */
        get_fs_type(): string;

        /**
         * Gets the mount path for a Unix mount point.
         * @returns a string containing the mount path
         */
        get_mount_path(): string;

        /**
         * Gets the options for the mount point.
         * @returns a string containing the options
         */
        get_options(): (string | null);

        /**
         * Guesses whether a Unix mount point can be ejected.
         * @returns true if `mount_point` is deemed to be ejectable; false otherwise
         */
        guess_can_eject(): boolean;

        /**
         * Guesses the icon of a Unix mount point.
         * @returns a {@link Gio.Icon}
         */
        guess_icon(): Gio.Icon;

        /**
         * Guesses the name of a Unix mount point.
         * 
         * The result is a translated string.
         * @returns a newly allocated translated string
         */
        guess_name(): string;

        /**
         * Guesses the symbolic icon of a Unix mount point.
         * @returns a {@link Gio.Icon}
         */
        guess_symbolic_icon(): Gio.Icon;

        /**
         * Checks if a Unix mount point is a loopback device.
         * @returns true if the mount point is a loopback device; false otherwise
         */
        is_loopback(): boolean;

        /**
         * Checks if a Unix mount point is read only.
         * @returns true if a mount point is read only; false otherwise
         */
        is_readonly(): boolean;

        /**
         * Checks if a Unix mount point is mountable by the user.
         * @returns true if the mount point is user mountable; false otherwise
         */
        is_user_mountable(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type OutputStreamClass = typeof OutputStream;

    /**
     * @gir-type Struct
     */
    abstract class OutputStreamPrivate {
        static $gtype: GObject.GType<OutputStreamPrivate>;
    }


    namespace DesktopAppInfoLookup {
        /**
         * Interface for implementing DesktopAppInfoLookup.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets the default application for launching applications
             * using this URI scheme for a particular {@link GioUnix.DesktopAppInfoLookup}
             * implementation.
             * 
             * The {@link GioUnix.DesktopAppInfoLookup} interface and this function is used
             * to implement {@link Gio.AppInfo.get_default_for_uri_scheme} backends
             * in a GIO module. There is no reason for applications to use it
             * directly. Applications should use
             * {@link Gio.AppInfo.get_default_for_uri_scheme}.
             * @param uri_scheme a string containing a URI scheme.
             * @virtual
             */
            vfunc_get_default_for_uri_scheme(uri_scheme: string): (Gio.AppInfo | null);
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface DesktopAppInfoLookupNamespace {
        $gtype: GObject.GType<DesktopAppInfoLookup>;
        prototype: DesktopAppInfoLookup;
    }
    /**
     * {@link GioUnix.DesktopAppInfoLookup} is an opaque data structure and can only be accessed
     * using the following functions.
     * @gir-type Interface
     * @deprecated since 2.28: The {@link GioUnix.DesktopAppInfoLookup} interface is   deprecated and unused by GIO.
     */
    interface DesktopAppInfoLookup extends GObject.Object, DesktopAppInfoLookup.Interface {

        // Methods
        /**
         * Gets the default application for launching applications
         * using this URI scheme for a particular {@link GioUnix.DesktopAppInfoLookup}
         * implementation.
         * 
         * The {@link GioUnix.DesktopAppInfoLookup} interface and this function is used
         * to implement {@link Gio.AppInfo.get_default_for_uri_scheme} backends
         * in a GIO module. There is no reason for applications to use it
         * directly. Applications should use
         * {@link Gio.AppInfo.get_default_for_uri_scheme}.
         * @param uri_scheme a string containing a URI scheme.
         * @returns {@link Gio.AppInfo} for given   `uri_scheme` or `NULL` on error.
         */
        get_default_for_uri_scheme(uri_scheme: string): (Gio.AppInfo | null);
    }


    export const DesktopAppInfoLookup: DesktopAppInfoLookupNamespace & {
        new (): DesktopAppInfoLookup; // This allows `obj instanceof DesktopAppInfoLookup`
    };

    namespace FileDescriptorBased {
        /**
         * Interface for implementing FileDescriptorBased.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets the underlying file descriptor.
             * @virtual
             */
            vfunc_get_fd(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface FileDescriptorBasedNamespace {
        $gtype: GObject.GType<FileDescriptorBased>;
        prototype: FileDescriptorBased;
    }
    /**
     * {@link GioUnix.FileDescriptorBased} is an interface for file descriptor based IO.
     * 
     * It is implemented by streams (implementations of {@link Gio.InputStream} or
     * {@link Gio.OutputStream}) that are based on file descriptors.
     * 
     * Note that `<gio/gfiledescriptorbased.h>` belongs to the UNIX-specific
     * GIO interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
     * file or the `GioUnix-2.0` GIR namespace when using it.
     * @gir-type Interface
     * @since 2.24
     */
    interface FileDescriptorBased extends GObject.Object, FileDescriptorBased.Interface {

        // Methods
        /**
         * Gets the underlying file descriptor.
         * @returns The file descriptor
         */
        get_fd(): number;
    }


    export const FileDescriptorBased: FileDescriptorBasedNamespace & {
        new (): FileDescriptorBased; // This allows `obj instanceof FileDescriptorBased`
    };

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

export default GioUnix;

// END
