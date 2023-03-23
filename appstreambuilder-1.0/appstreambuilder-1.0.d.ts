
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * AppStreamBuilder-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type AppStreamGlib from '@girs/appstreamglib-1.0';

export namespace AppStreamBuilder {

/**
 * The flags to use when saving resources.
 */
enum AppSaveFlags {
    /**
     * Nothing to do
     */
    NONE,
    /**
     * Save icons to disk
     */
    ICONS,
    /**
     * Save screenshots to disk
     */
    SCREENSHOTS,
}
enum PackageKind {
    DEFAULT,
    BUNDLE,
    FIRMWARE,
    LAST,
}
enum PackageLogLevel {
    NONE,
    DEBUG,
    INFO,
    WARNING,
    LAST,
}
/**
 * The flags to use when processing the context.
 * @bitfield 
 */
enum ContextFlags {
    /**
     * No special actions to use
     */
    NONE,
    /**
     * Ignore missing information
     */
    IGNORE_MISSING_INFO,
    /**
     * Ignore missing parents
     */
    IGNORE_MISSING_PARENTS,
    /**
     * Unused
     */
    ADD_CACHE_ID,
    /**
     * Include HiDPI icons
     */
    HIDPI_ICONS,
    /**
     * Embed the icons in the XML
     */
    EMBEDDED_ICONS,
    /**
     * Do not download files
     */
    NO_NETWORK,
    /**
     * Write the origin-ignore.xml file
     */
    INCLUDE_FAILED,
    /**
     * Do not pack icons into a tarball
     */
    UNCOMPRESSED_ICONS,
    /**
     * Include apps that are dead upstream
     */
    IGNORE_DEAD_UPSTREAM,
    /**
     * Include apps that use obsolete toolkits
     */
    IGNORE_OBSOLETE_DEPS,
    /**
     * Include apps that use legacy icon formats
     */
    IGNORE_LEGACY_ICONS,
    /**
     * Include apps that are marked as settings
     */
    IGNORE_SETTINGS,
    /**
     * Fall back to suboptimal data where required
     */
    USE_FALLBACKS,
    /**
     * Add artificial icons and categories where required
     */
    ADD_DEFAULT_ICONS,
}
const PACKAGE_ENSURE_DEPS: number
const PACKAGE_ENSURE_FILES: number
const PACKAGE_ENSURE_LICENSE: number
const PACKAGE_ENSURE_NEVRA: number
const PACKAGE_ENSURE_NONE: number
const PACKAGE_ENSURE_RELEASES: number
const PACKAGE_ENSURE_SOURCE: number
const PACKAGE_ENSURE_URL: number
const PACKAGE_ENSURE_VCS: number
module App {

    // Constructor properties interface

    interface ConstructorProperties extends AppStreamGlib.App.ConstructorProperties {
    }

}

interface App {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.App

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.App

    /**
     * Gets the package that backs the application.
     * @returns package
     */
    get_package(): Package
    /**
     * Saves to disk any resources set for the application.
     * @param save_flags #AsbAppSaveFlags, e.g. %ASB_APP_SAVE_FLAG_SCREENSHOTS
     * @returns %TRUE for success, %FALSE otherwise
     */
    save_resources(save_flags: AppSaveFlags): boolean
    /**
     * Sets the HiDPI mode for the application.
     * @param hidpi_enabled if HiDPI mode should be enabled
     */
    set_hidpi_enabled(hidpi_enabled: boolean): void
    /**
     * Sets the package that backs the application.
     * @param pkg A #AsbPackage
     */
    set_package(pkg: Package): void

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.App

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class App extends AppStreamGlib.App {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of AppStreamBuilder-1.0.AppStreamBuilder.App

    constructor(config?: App.ConstructorProperties) 
    /**
     * Creates a new application object.
     * @constructor 
     * @param pkg A #AsbPackage, or %NULL
     * @param id The ID for the package, or %NULL
     * @returns a #AsbApp
     */
    constructor(pkg: Package, id: string | null) 
    /**
     * Creates a new application object.
     * @constructor 
     * @param pkg A #AsbPackage, or %NULL
     * @param id The ID for the package, or %NULL
     * @returns a #AsbApp
     */
    static new(pkg: Package, id: string | null): App

    // Overloads of new

    /**
     * Creates a new #AsApp.
     * @constructor 
     * @returns a #AsApp
     */
    static new(): AppStreamGlib.App
    _init(config?: App.ConstructorProperties): void
}

module Context {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Context {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Context

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Context

    /**
     * Adds an application to the context.
     * @param app A #AsbApp
     */
    add_app(app: App): void
    add_app_ignore(pkg: Package): void
    /**
     * Adds a filename to the list of packages to be processed
     * @param filename package filename
     * @returns %TRUE for success, %FALSE otherwise
     */
    add_filename(filename: string | null): boolean
    /**
     * Adds a package to the list of packages to be processed
     * @param pkg A #AsbPackage
     */
    add_package(pkg: Package): void
    /**
     * Find a package from its name.
     * @param pkgname a package name
     * @returns a #AsbPackage, or %NULL for not found.
     */
    find_by_pkgname(pkgname: string | null): Package
    /**
     * This function used to find an application in the cache, and now does nothing.
     * @param filename cache-id
     * @returns always %FALSE
     */
    find_in_cache(filename: string | null): boolean
    /**
     * Gets the target metadata API version.
     * @returns floating point
     */
    get_api_version(): number
    /**
     * Gets the screenshot directory to use
     * @returns directory
     */
    get_cache_dir(): string | null
    /**
     * Gets one specific build flag.
     * @param flag A #AsbContextFlags
     * @returns %TRUE if the flag was set
     */
    get_flag(flag: ContextFlags): boolean
    /**
     * Gets the build flags.
     * @returns #AsbContextFlags
     */
    get_flags(): ContextFlags
    /**
     * Gets the minimum icon size in pixels.
     * @returns size
     */
    get_min_icon_size(): number
    /**
     * Returns the packages already added to the context.
     * @returns array of packages
     */
    get_packages(): Package[]
    /**
     * Gets the temporary directory to use
     * @returns directory
     */
    get_temp_dir(): string | null
    /**
     * Processes all the packages that have been added to the context.
     * @returns %TRUE for success, %FALSE otherwise
     */
    process(): boolean
    /**
     * Sets the version of the metadata to write.
     * @param api_version the AppStream API version
     */
    set_api_version(api_version: number): void
    /**
     * Sets the basename for the two metadata files.
     * @param basename AppStream file basename, e.g. "appstream"
     */
    set_basename(basename: string | null): void
    /**
     * Sets the cache directory to use when building metadata.
     * @param cache_dir directory
     */
    set_cache_dir(cache_dir: string | null): void
    /**
     * Sets flags to be used when building the metadata.
     * @param flags #AsbContextFlags, e.g. %ASB_CONTEXT_FLAG_NO_NETWORK
     */
    set_flags(flags: ContextFlags): void
    /**
     * Sets the icons directory to use when building metadata.
     * @param icons_dir directory
     */
    set_icons_dir(icons_dir: string | null): void
    /**
     * Sets the log directory to use when building metadata.
     * @param log_dir directory
     */
    set_log_dir(log_dir: string | null): void
    /**
     * Sets the maximum number of threads to use when processing packages.
     * This function now has no affect as only one thread is ever used.
     * @param max_threads integer
     */
    set_max_threads(max_threads: number): void
    /**
     * Sets the smallest icon size in pixels supported.
     * @param min_icon_size integer
     */
    set_min_icon_size(min_icon_size: number): void
    /**
     * Sets the filename location of the old metadata file.
     * This function now has no affect as no cache ID is available.
     * @param old_metadata filename, or %NULL
     */
    set_old_metadata(old_metadata: string | null): void
    /**
     * Sets the origin for the two metadata files.
     * @param origin AppStream origin, e.g. "fedora-21"
     */
    set_origin(origin: string | null): void
    /**
     * Sets the output directory to use when building metadata.
     * @param output_dir directory
     */
    set_output_dir(output_dir: string | null): void
    set_screenshot_dir(screenshot_dir: string | null): void
    /**
     * Sets the temporary directory to use when building metadata.
     * @param temp_dir directory
     */
    set_temp_dir(temp_dir: string | null): void
    /**
     * Sets up the context ready for use.
     * @returns %TRUE for success, %FALSE otherwise
     */
    setup(): boolean

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Context

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Context extends GObject.Object {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of AppStreamBuilder-1.0.AppStreamBuilder.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Creates a new high-level instance.
     * @constructor 
     * @returns a #AsbContext
     */
    constructor() 
    /**
     * Creates a new high-level instance.
     * @constructor 
     * @returns a #AsbContext
     */
    static new(): Context
    _init(config?: Context.ConstructorProperties): void
}

module Package {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Package {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Package

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Add a package dependancy.
     * @param dep package dep
     */
    add_dep(dep: string | null): void
    /**
     * Adds a (downstream) release to a package.
     * @param version a package version
     * @param release a package release
     */
    add_release(version: string | null, release: AppStreamGlib.Release): void
    /**
     * Deallocates previously ensured data.
     * @param flags #AsbPackageEnsureFlags
     */
    clear(flags: PackageEnsureFlags): void
    /**
     * Closes a package, which can be re-opened if required.
     * @returns %TRUE for success, %FALSE otherwise
     */
    close(): boolean
    /**
     * Compares one package with another.
     * @param pkg2 A #AsbPackage
     * @returns +1 for @pkg1 newer, 0 for the same and -1 if @pkg2 is newer
     */
    compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @param flags #AsbPackageEnsureFlags
     * @returns %TRUE for success, %FALSE otherwise
     */
    ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     * @returns %TRUE for success, %FALSE otherwise
     */
    explode(dir: string | null, glob: string[]): boolean
    /**
     * Gets the package architecture
     * @returns utf8 string
     */
    get_arch(): string | null
    /**
     * Gets the package basename.
     * @returns utf8 string
     */
    get_basename(): string | null
    /**
     * Gets a config attribute from a package.
     * @param key utf8 string
     * @returns utf8 string
     */
    get_config(key: string | null): string | null
    /**
     * Get the package dependancy list.
     * @returns deplist
     */
    get_deps(): string[]
    /**
     * Gets if the package is enabled.
     * @returns enabled status
     */
    get_enabled(): boolean
    /**
     * Gets the epoch of the package.
     * @returns a #AsbPackageKind
     */
    get_epoch(): number
    /**
     * Gets the package EVR.
     * @returns utf8 string
     */
    get_evr(): string | null
    /**
     * Gets the package filelist.
     * @returns filelist
     */
    get_filelist(): string[]
    /**
     * Gets the filename of the package.
     * @returns utf8 filename
     */
    get_filename(): string | null
    /**
     * Gets the kind of the package.
     * @returns a #AsbPackageKind
     */
    get_kind(): PackageKind
    /**
     * Gets the package license.
     * @returns utf8 string
     */
    get_license(): string | null
    /**
     * Gets the package name
     * @returns utf8 string
     */
    get_name(): string | null
    /**
     * Gets the package NEVR.
     * @returns utf8 string
     */
    get_nevr(): string | null
    /**
     * Gets the package NEVRA.
     * @returns utf8 string
     */
    get_nevra(): string | null
    /**
     * Gets the release for a specific version.
     * @param version package version
     * @returns an #AsRelease, or %NULL for not found
     */
    get_release(version: string | null): AppStreamGlib.Release
    /**
     * Gets the package release string
     * @returns utf8 string
     */
    get_release_str(): string | null
    /**
     * Gets the releases of the package.
     * @returns the release data
     */
    get_releases(): AppStreamGlib.Release[]
    /**
     * Gets the package source nevra.
     * @returns utf8 string
     */
    get_source(): string | null
    /**
     * Gets the package source name.
     * @returns utf8 string
     */
    get_source_pkgname(): string | null
    /**
     * Gets the package homepage URL
     * @returns utf8 string
     */
    get_url(): string | null
    /**
     * Gets the package version control system.
     * @returns utf8 string
     */
    get_vcs(): string | null
    /**
     * Gets the package version
     * @returns utf8 string
     */
    get_version(): string | null
    /**
     * Flushes the log queue.
     * @returns %TRUE for success, %FALSE otherwise
     */
    log_flush(): boolean
    /**
     * Starts the log timer.
     */
    log_start(): void
    /**
     * Opens a package and parses the contents.
     * As little i/o should be done at this point, and implementations
     * should rely on asb_package_ensure() to set data.
     * @param filename package filename
     * @returns %TRUE for success, %FALSE otherwise
     */
    open(filename: string | null): boolean
    /**
     * Sets the package architecture.
     * @param arch package architecture
     */
    set_arch(arch: string | null): void
    /**
     * Sets a config attribute on a package.
     * @param key utf8 string
     * @param value utf8 string
     */
    set_config(key: string | null, value: string | null): void
    /**
     * Enables or disables the package.
     * @param enabled boolean
     */
    set_enabled(enabled: boolean): void
    /**
     * Sets the package epoch
     * @param epoch epoch, or 0 for unset
     */
    set_epoch(epoch: number): void
    /**
     * Sets the package filelist.
     * @param filelist package filelist
     */
    set_filelist(filelist: string | null): void
    /**
     * Sets the package filename.
     * @param filename package filename
     */
    set_filename(filename: string | null): void
    /**
     * Sets the package kind.
     * @param kind A #AsbPackageKind
     */
    set_kind(kind: PackageKind): void
    /**
     * Sets the package license.
     * @param license license string
     */
    set_license(license: string | null): void
    /**
     * Sets the package name.
     * @param name package name
     */
    set_name(name: string | null): void
    /**
     * Sets the package release.
     * @param release package release
     */
    set_release(release: string | null): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source source string, e.g. the srpm nevra
     */
    set_source(source: string | null): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source_pkgname source string, e.g. the srpm name
     */
    set_source_pkgname(source_pkgname: string | null): void
    /**
     * Sets the package URL.
     * @param url homepage URL
     */
    set_url(url: string | null): void
    /**
     * Sets the package version control system.
     * @param vcs vcs string
     */
    set_vcs(vcs: string | null): void
    /**
     * Sets the package version.
     * @param version package version
     */
    set_version(version: string | null): void

    // Own virtual methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Closes a package, which can be re-opened if required.
     * @virtual 
     * @returns %TRUE for success, %FALSE otherwise
     */
    vfunc_close(): boolean
    /**
     * Compares one package with another.
     * @virtual 
     * @param pkg2 A #AsbPackage
     * @returns +1 for @pkg1 newer, 0 for the same and -1 if @pkg2 is newer
     */
    vfunc_compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @virtual 
     * @param flags #AsbPackageEnsureFlags
     * @returns %TRUE for success, %FALSE otherwise
     */
    vfunc_ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @virtual 
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     * @returns %TRUE for success, %FALSE otherwise
     */
    vfunc_explode(dir: string | null, glob: string[]): boolean
    /**
     * Opens a package and parses the contents.
     * As little i/o should be done at this point, and implementations
     * should rely on asb_package_ensure() to set data.
     * @virtual 
     * @param filename package filename
     * @returns %TRUE for success, %FALSE otherwise
     */
    vfunc_open(filename: string | null): boolean

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Package

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Package extends GObject.Object {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Package

    static name: string
    static $gtype: GObject.GType<Package>

    // Constructors of AppStreamBuilder-1.0.AppStreamBuilder.Package

    constructor(config?: Package.ConstructorProperties) 
    /**
     * Creates a new %AsbPackage.
     * 
     * You don't need to use this function unless you want a memory-backed package
     * for testing purposes.
     * @constructor 
     * @returns a package
     */
    constructor() 
    /**
     * Creates a new %AsbPackage.
     * 
     * You don't need to use this function unless you want a memory-backed package
     * for testing purposes.
     * @constructor 
     * @returns a package
     */
    static new(): Package
    _init(config?: Package.ConstructorProperties): void
}

module Task {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Task {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Task

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Task

    /**
     * Processes the task.
     * @returns %TRUE for success, %FALSE otherwise
     */
    process(): boolean
    /**
     * Sets the package used for the task.
     * @param pkg A #AsbPackage
     */
    set_package(pkg: Package): void

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Task

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Task extends GObject.Object {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Task

    static name: string
    static $gtype: GObject.GType<Task>

    // Constructors of AppStreamBuilder-1.0.AppStreamBuilder.Task

    constructor(config?: Task.ConstructorProperties) 
    /**
     * Creates a new task.
     * @constructor 
     * @param ctx A #AsbContext
     * @returns A #AsbTask
     */
    constructor(ctx: Context) 
    /**
     * Creates a new task.
     * @constructor 
     * @param ctx A #AsbContext
     * @returns A #AsbTask
     */
    static new(ctx: Context): Task
    _init(config?: Task.ConstructorProperties): void
}

interface AppClass {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.AppClass

    parent_class: AppStreamGlib.AppClass
}

abstract class AppClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.AppClass

    static name: string
}

interface ContextClass {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.ContextClass

    parent_class: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.ContextClass

    static name: string
}

interface PackageClass {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.PackageClass

    parent_class: GObject.ObjectClass
    open: (pkg: Package, filename: string | null) => boolean
    ensure: (pkg: Package, flags: PackageEnsureFlags) => boolean
    explode: (pkg: Package, dir: string | null, glob: string[]) => boolean
    compare: (pkg1: Package, pkg2: Package) => number
    close: (pkg: Package) => boolean
}

abstract class PackageClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.PackageClass

    static name: string
}

interface TaskClass {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.TaskClass

    parent_class: GObject.ObjectClass
}

abstract class TaskClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.TaskClass

    static name: string
}

    type PackageEnsureFlags = number
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default AppStreamBuilder;
// END