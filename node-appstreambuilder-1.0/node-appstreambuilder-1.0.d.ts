
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
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

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.App

    __gtype__: number

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.App

    parentInstance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.App

    /**
     * Gets the package that backs the application.
     * @returns package
     */
    getPackage(): Package
    /**
     * Saves to disk any resources set for the application.
     * @param saveFlags #AsbAppSaveFlags, e.g. %ASB_APP_SAVE_FLAG_SCREENSHOTS
     * @returns %TRUE for success, %FALSE otherwise
     */
    saveResources(saveFlags: AppSaveFlags): boolean
    /**
     * Sets the HiDPI mode for the application.
     * @param hidpiEnabled if HiDPI mode should be enabled
     */
    setHidpiEnabled(hidpiEnabled: boolean): void
    /**
     * Sets the package that backs the application.
     * @param pkg A #AsbPackage
     */
    setPackage(pkg: Package): void

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.App

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

class App extends AppStreamGlib.App {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.App

    static name: string

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

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Context

    __gtype__: number

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Context

    parentInstance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Context

    /**
     * Adds an application to the context.
     * @param app A #AsbApp
     */
    addApp(app: App): void
    addAppIgnore(pkg: Package): void
    /**
     * Adds a filename to the list of packages to be processed
     * @param filename package filename
     * @returns %TRUE for success, %FALSE otherwise
     */
    addFilename(filename: string | null): boolean
    /**
     * Adds a package to the list of packages to be processed
     * @param pkg A #AsbPackage
     */
    addPackage(pkg: Package): void
    /**
     * Find a package from its name.
     * @param pkgname a package name
     * @returns a #AsbPackage, or %NULL for not found.
     */
    findByPkgname(pkgname: string | null): Package
    /**
     * This function used to find an application in the cache, and now does nothing.
     * @param filename cache-id
     * @returns always %FALSE
     */
    findInCache(filename: string | null): boolean
    /**
     * Gets the target metadata API version.
     * @returns floating point
     */
    getApiVersion(): number
    /**
     * Gets the screenshot directory to use
     * @returns directory
     */
    getCacheDir(): string | null
    /**
     * Gets one specific build flag.
     * @param flag A #AsbContextFlags
     * @returns %TRUE if the flag was set
     */
    getFlag(flag: ContextFlags): boolean
    /**
     * Gets the build flags.
     * @returns #AsbContextFlags
     */
    getFlags(): ContextFlags
    /**
     * Gets the minimum icon size in pixels.
     * @returns size
     */
    getMinIconSize(): number
    /**
     * Returns the packages already added to the context.
     * @returns array of packages
     */
    getPackages(): Package[]
    /**
     * Gets the temporary directory to use
     * @returns directory
     */
    getTempDir(): string | null
    /**
     * Processes all the packages that have been added to the context.
     * @returns %TRUE for success, %FALSE otherwise
     */
    process(): boolean
    /**
     * Sets the version of the metadata to write.
     * @param apiVersion the AppStream API version
     */
    setApiVersion(apiVersion: number): void
    /**
     * Sets the basename for the two metadata files.
     * @param basename AppStream file basename, e.g. "appstream"
     */
    setBasename(basename: string | null): void
    /**
     * Sets the cache directory to use when building metadata.
     * @param cacheDir directory
     */
    setCacheDir(cacheDir: string | null): void
    /**
     * Sets flags to be used when building the metadata.
     * @param flags #AsbContextFlags, e.g. %ASB_CONTEXT_FLAG_NO_NETWORK
     */
    setFlags(flags: ContextFlags): void
    /**
     * Sets the icons directory to use when building metadata.
     * @param iconsDir directory
     */
    setIconsDir(iconsDir: string | null): void
    /**
     * Sets the log directory to use when building metadata.
     * @param logDir directory
     */
    setLogDir(logDir: string | null): void
    /**
     * Sets the maximum number of threads to use when processing packages.
     * This function now has no affect as only one thread is ever used.
     * @param maxThreads integer
     */
    setMaxThreads(maxThreads: number): void
    /**
     * Sets the smallest icon size in pixels supported.
     * @param minIconSize integer
     */
    setMinIconSize(minIconSize: number): void
    /**
     * Sets the filename location of the old metadata file.
     * This function now has no affect as no cache ID is available.
     * @param oldMetadata filename, or %NULL
     */
    setOldMetadata(oldMetadata: string | null): void
    /**
     * Sets the origin for the two metadata files.
     * @param origin AppStream origin, e.g. "fedora-21"
     */
    setOrigin(origin: string | null): void
    /**
     * Sets the output directory to use when building metadata.
     * @param outputDir directory
     */
    setOutputDir(outputDir: string | null): void
    setScreenshotDir(screenshotDir: string | null): void
    /**
     * Sets the temporary directory to use when building metadata.
     * @param tempDir directory
     */
    setTempDir(tempDir: string | null): void
    /**
     * Sets up the context ready for use.
     * @returns %TRUE for success, %FALSE otherwise
     */
    setup(): boolean

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Context

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

class Context extends GObject.Object {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Context

    static name: string

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

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Package

    __gtype__: number

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Package

    parentInstance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Add a package dependancy.
     * @param dep package dep
     */
    addDep(dep: string | null): void
    /**
     * Adds a (downstream) release to a package.
     * @param version a package version
     * @param release a package release
     */
    addRelease(version: string | null, release: AppStreamGlib.Release): void
    /**
     * Deallocates previously ensured data.
     * @param flags #AsbPackageEnsureFlags
     */
    clear(flags: PackageEnsureFlags): void
    // Has conflict: close(): boolean
    // Has conflict: compare(pkg2: Package): number
    // Has conflict: ensure(flags: PackageEnsureFlags): boolean
    // Has conflict: explode(dir: string | null, glob: string[]): boolean
    /**
     * Gets the package architecture
     * @returns utf8 string
     */
    getArch(): string | null
    /**
     * Gets the package basename.
     * @returns utf8 string
     */
    getBasename(): string | null
    /**
     * Gets a config attribute from a package.
     * @param key utf8 string
     * @returns utf8 string
     */
    getConfig(key: string | null): string | null
    /**
     * Get the package dependancy list.
     * @returns deplist
     */
    getDeps(): string[]
    /**
     * Gets if the package is enabled.
     * @returns enabled status
     */
    getEnabled(): boolean
    /**
     * Gets the epoch of the package.
     * @returns a #AsbPackageKind
     */
    getEpoch(): number
    /**
     * Gets the package EVR.
     * @returns utf8 string
     */
    getEvr(): string | null
    /**
     * Gets the package filelist.
     * @returns filelist
     */
    getFilelist(): string[]
    /**
     * Gets the filename of the package.
     * @returns utf8 filename
     */
    getFilename(): string | null
    /**
     * Gets the kind of the package.
     * @returns a #AsbPackageKind
     */
    getKind(): PackageKind
    /**
     * Gets the package license.
     * @returns utf8 string
     */
    getLicense(): string | null
    /**
     * Gets the package name
     * @returns utf8 string
     */
    getName(): string | null
    /**
     * Gets the package NEVR.
     * @returns utf8 string
     */
    getNevr(): string | null
    /**
     * Gets the package NEVRA.
     * @returns utf8 string
     */
    getNevra(): string | null
    /**
     * Gets the release for a specific version.
     * @param version package version
     * @returns an #AsRelease, or %NULL for not found
     */
    getRelease(version: string | null): AppStreamGlib.Release
    /**
     * Gets the package release string
     * @returns utf8 string
     */
    getReleaseStr(): string | null
    /**
     * Gets the releases of the package.
     * @returns the release data
     */
    getReleases(): AppStreamGlib.Release[]
    /**
     * Gets the package source nevra.
     * @returns utf8 string
     */
    getSource(): string | null
    /**
     * Gets the package source name.
     * @returns utf8 string
     */
    getSourcePkgname(): string | null
    /**
     * Gets the package homepage URL
     * @returns utf8 string
     */
    getUrl(): string | null
    /**
     * Gets the package version control system.
     * @returns utf8 string
     */
    getVcs(): string | null
    /**
     * Gets the package version
     * @returns utf8 string
     */
    getVersion(): string | null
    /**
     * Flushes the log queue.
     * @returns %TRUE for success, %FALSE otherwise
     */
    logFlush(): boolean
    /**
     * Starts the log timer.
     */
    logStart(): void
    // Has conflict: open(filename: string | null): boolean
    /**
     * Sets the package architecture.
     * @param arch package architecture
     */
    setArch(arch: string | null): void
    /**
     * Sets a config attribute on a package.
     * @param key utf8 string
     * @param value utf8 string
     */
    setConfig(key: string | null, value: string | null): void
    /**
     * Enables or disables the package.
     * @param enabled boolean
     */
    setEnabled(enabled: boolean): void
    /**
     * Sets the package epoch
     * @param epoch epoch, or 0 for unset
     */
    setEpoch(epoch: number): void
    /**
     * Sets the package filelist.
     * @param filelist package filelist
     */
    setFilelist(filelist: string | null): void
    /**
     * Sets the package filename.
     * @param filename package filename
     */
    setFilename(filename: string | null): void
    /**
     * Sets the package kind.
     * @param kind A #AsbPackageKind
     */
    setKind(kind: PackageKind): void
    /**
     * Sets the package license.
     * @param license license string
     */
    setLicense(license: string | null): void
    /**
     * Sets the package name.
     * @param name package name
     */
    setName(name: string | null): void
    /**
     * Sets the package release.
     * @param release package release
     */
    setRelease(release: string | null): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source source string, e.g. the srpm nevra
     */
    setSource(source: string | null): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param sourcePkgname source string, e.g. the srpm name
     */
    setSourcePkgname(sourcePkgname: string | null): void
    /**
     * Sets the package URL.
     * @param url homepage URL
     */
    setUrl(url: string | null): void
    /**
     * Sets the package version control system.
     * @param vcs vcs string
     */
    setVcs(vcs: string | null): void
    /**
     * Sets the package version.
     * @param version package version
     */
    setVersion(version: string | null): void

    // Own virtual methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Closes a package, which can be re-opened if required.
     * @virtual 
     * @returns %TRUE for success, %FALSE otherwise
     */
    close(): boolean
    /**
     * Compares one package with another.
     * @virtual 
     * @param pkg2 A #AsbPackage
     * @returns +1 for @pkg1 newer, 0 for the same and -1 if @pkg2 is newer
     */
    compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @virtual 
     * @param flags #AsbPackageEnsureFlags
     * @returns %TRUE for success, %FALSE otherwise
     */
    ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @virtual 
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     * @returns %TRUE for success, %FALSE otherwise
     */
    explode(dir: string | null, glob: string[]): boolean
    /**
     * Opens a package and parses the contents.
     * As little i/o should be done at this point, and implementations
     * should rely on asb_package_ensure() to set data.
     * @virtual 
     * @param filename package filename
     * @returns %TRUE for success, %FALSE otherwise
     */
    open(filename: string | null): boolean

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Package

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

class Package extends GObject.Object {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Package

    static name: string

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

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Task

    __gtype__: number

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.Task

    parentInstance: GObject.Object

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
    setPackage(pkg: Package): void

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Task

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

class Task extends GObject.Object {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.Task

    static name: string

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

    parentClass: AppStreamGlib.AppClass
}

abstract class AppClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.AppClass

    static name: string
}

interface ContextClass {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.ContextClass

    parentClass: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.ContextClass

    static name: string
}

interface PackageClass {

    // Own fields of AppStreamBuilder-1.0.AppStreamBuilder.PackageClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
}

abstract class TaskClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.TaskClass

    static name: string
}

    type PackageEnsureFlags = number
}

export default AppStreamBuilder;