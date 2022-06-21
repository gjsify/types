// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppStreamBuilder-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type AppStreamGlib from './AppStreamGlib-1.0';

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
interface App_ConstructProps extends AppStreamGlib.App_ConstructProps {
}

interface App {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.App

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.App

    /**
     * Gets the package that backs the application.
     */
    get_package(): Package
    /**
     * Saves to disk any resources set for the application.
     * @param save_flags #AsbAppSaveFlags, e.g. %ASB_APP_SAVE_FLAG_SCREENSHOTS
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

    constructor(config?: App_ConstructProps) 
    /**
     * Creates a new application object.
     * @constructor 
     * @param pkg A #AsbPackage, or %NULL
     * @param id The ID for the package, or %NULL
     */
    constructor(pkg: Package, id: string) 
    /**
     * Creates a new application object.
     * @constructor 
     * @param pkg A #AsbPackage, or %NULL
     * @param id The ID for the package, or %NULL
     */
    static new(pkg: Package, id: string): App

    // Overloads of new

    /**
     * Creates a new #AsApp.
     * @constructor 
     */
    static new(): AppStreamGlib.App
    _init(config?: App_ConstructProps): void
}

interface Context_ConstructProps extends GObject.Object_ConstructProps {
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
     */
    add_filename(filename: string): boolean
    /**
     * Adds a package to the list of packages to be processed
     * @param pkg A #AsbPackage
     */
    add_package(pkg: Package): void
    /**
     * Find a package from its name.
     * @param pkgname a package name
     */
    find_by_pkgname(pkgname: string): Package
    /**
     * This function used to find an application in the cache, and now does nothing.
     * @param filename cache-id
     */
    find_in_cache(filename: string): boolean
    /**
     * Gets the target metadata API version.
     */
    get_api_version(): number
    /**
     * Gets the screenshot directory to use
     */
    get_cache_dir(): string
    /**
     * Gets one specific build flag.
     * @param flag A #AsbContextFlags
     */
    get_flag(flag: ContextFlags): boolean
    /**
     * Gets the build flags.
     */
    get_flags(): ContextFlags
    /**
     * Gets the minimum icon size in pixels.
     */
    get_min_icon_size(): number
    /**
     * Returns the packages already added to the context.
     */
    get_packages(): Package[]
    /**
     * Gets the temporary directory to use
     */
    get_temp_dir(): string
    /**
     * Processes all the packages that have been added to the context.
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
    set_basename(basename: string): void
    /**
     * Sets the cache directory to use when building metadata.
     * @param cache_dir directory
     */
    set_cache_dir(cache_dir: string): void
    /**
     * Sets flags to be used when building the metadata.
     * @param flags #AsbContextFlags, e.g. %ASB_CONTEXT_FLAG_NO_NETWORK
     */
    set_flags(flags: ContextFlags): void
    /**
     * Sets the icons directory to use when building metadata.
     * @param icons_dir directory
     */
    set_icons_dir(icons_dir: string): void
    /**
     * Sets the log directory to use when building metadata.
     * @param log_dir directory
     */
    set_log_dir(log_dir: string): void
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
    set_old_metadata(old_metadata: string): void
    /**
     * Sets the origin for the two metadata files.
     * @param origin AppStream origin, e.g. "fedora-21"
     */
    set_origin(origin: string): void
    /**
     * Sets the output directory to use when building metadata.
     * @param output_dir directory
     */
    set_output_dir(output_dir: string): void
    set_screenshot_dir(screenshot_dir: string): void
    /**
     * Sets the temporary directory to use when building metadata.
     * @param temp_dir directory
     */
    set_temp_dir(temp_dir: string): void
    /**
     * Sets up the context ready for use.
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

    constructor(config?: Context_ConstructProps) 
    /**
     * Creates a new high-level instance.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new high-level instance.
     * @constructor 
     */
    static new(): Context
    _init(config?: Context_ConstructProps): void
}

interface Package_ConstructProps extends GObject.Object_ConstructProps {
}

interface Package {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Package

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Add a package dependancy.
     * @param dep package dep
     */
    add_dep(dep: string): void
    /**
     * Adds a (downstream) release to a package.
     * @param version a package version
     * @param release a package release
     */
    add_release(version: string, release: AppStreamGlib.Release): void
    /**
     * Deallocates previously ensured data.
     * @param flags #AsbPackageEnsureFlags
     */
    clear(flags: PackageEnsureFlags): void
    /**
     * Closes a package, which can be re-opened if required.
     */
    close(): boolean
    /**
     * Compares one package with another.
     * @param pkg2 A #AsbPackage
     */
    compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @param flags #AsbPackageEnsureFlags
     */
    ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     */
    explode(dir: string, glob: string[]): boolean
    /**
     * Gets the package architecture
     */
    get_arch(): string
    /**
     * Gets the package basename.
     */
    get_basename(): string
    /**
     * Gets a config attribute from a package.
     * @param key utf8 string
     */
    get_config(key: string): string
    /**
     * Get the package dependancy list.
     */
    get_deps(): string[]
    /**
     * Gets if the package is enabled.
     */
    get_enabled(): boolean
    /**
     * Gets the epoch of the package.
     */
    get_epoch(): number
    /**
     * Gets the package EVR.
     */
    get_evr(): string
    /**
     * Gets the package filelist.
     */
    get_filelist(): string[]
    /**
     * Gets the filename of the package.
     */
    get_filename(): string
    /**
     * Gets the kind of the package.
     */
    get_kind(): PackageKind
    /**
     * Gets the package license.
     */
    get_license(): string
    /**
     * Gets the package name
     */
    get_name(): string
    /**
     * Gets the package NEVR.
     */
    get_nevr(): string
    /**
     * Gets the package NEVRA.
     */
    get_nevra(): string
    /**
     * Gets the release for a specific version.
     * @param version package version
     */
    get_release(version: string): AppStreamGlib.Release
    /**
     * Gets the package release string
     */
    get_release_str(): string
    /**
     * Gets the releases of the package.
     */
    get_releases(): AppStreamGlib.Release[]
    /**
     * Gets the package source nevra.
     */
    get_source(): string
    /**
     * Gets the package source name.
     */
    get_source_pkgname(): string
    /**
     * Gets the package homepage URL
     */
    get_url(): string
    /**
     * Gets the package version control system.
     */
    get_vcs(): string
    /**
     * Gets the package version
     */
    get_version(): string
    /**
     * Flushes the log queue.
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
     */
    open(filename: string): boolean
    /**
     * Sets the package architecture.
     * @param arch package architecture
     */
    set_arch(arch: string): void
    /**
     * Sets a config attribute on a package.
     * @param key utf8 string
     * @param value utf8 string
     */
    set_config(key: string, value: string): void
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
    set_filelist(filelist: string): void
    /**
     * Sets the package filename.
     * @param filename package filename
     */
    set_filename(filename: string): void
    /**
     * Sets the package kind.
     * @param kind A #AsbPackageKind
     */
    set_kind(kind: PackageKind): void
    /**
     * Sets the package license.
     * @param license license string
     */
    set_license(license: string): void
    /**
     * Sets the package name.
     * @param name package name
     */
    set_name(name: string): void
    /**
     * Sets the package release.
     * @param release package release
     */
    set_release(release: string): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source source string, e.g. the srpm nevra
     */
    set_source(source: string): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source_pkgname source string, e.g. the srpm name
     */
    set_source_pkgname(source_pkgname: string): void
    /**
     * Sets the package URL.
     * @param url homepage URL
     */
    set_url(url: string): void
    /**
     * Sets the package version control system.
     * @param vcs vcs string
     */
    set_vcs(vcs: string): void
    /**
     * Sets the package version.
     * @param version package version
     */
    set_version(version: string): void

    // Own virtual methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Closes a package, which can be re-opened if required.
     * @virtual 
     */
    vfunc_close(): boolean
    /**
     * Compares one package with another.
     * @virtual 
     * @param pkg2 A #AsbPackage
     */
    vfunc_compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @virtual 
     * @param flags #AsbPackageEnsureFlags
     */
    vfunc_ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @virtual 
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     */
    vfunc_explode(dir: string, glob: string[]): boolean
    /**
     * Opens a package and parses the contents.
     * As little i/o should be done at this point, and implementations
     * should rely on asb_package_ensure() to set data.
     * @virtual 
     * @param filename package filename
     */
    vfunc_open(filename: string): boolean

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

    constructor(config?: Package_ConstructProps) 
    /**
     * Creates a new %AsbPackage.
     * 
     * You don't need to use this function unless you want a memory-backed package
     * for testing purposes.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new %AsbPackage.
     * 
     * You don't need to use this function unless you want a memory-backed package
     * for testing purposes.
     * @constructor 
     */
    static new(): Package
    _init(config?: Package_ConstructProps): void
}

interface Task_ConstructProps extends GObject.Object_ConstructProps {
}

interface Task {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Task

    parent_instance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Task

    /**
     * Processes the task.
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

    constructor(config?: Task_ConstructProps) 
    /**
     * Creates a new task.
     * @constructor 
     * @param ctx A #AsbContext
     */
    constructor(ctx: Context) 
    /**
     * Creates a new task.
     * @constructor 
     * @param ctx A #AsbContext
     */
    static new(ctx: Context): Task
    _init(config?: Task_ConstructProps): void
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
    open: (pkg: Package, filename: string) => boolean
    ensure: (pkg: Package, flags: PackageEnsureFlags) => boolean
    explode: (pkg: Package, dir: string, glob: string[]) => boolean
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
}
export default AppStreamBuilder;