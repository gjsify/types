// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppStreamBuilder-1.0
 */

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

    parentInstance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.App

    /**
     * Gets the package that backs the application.
     */
    getPackage(): Package
    /**
     * Saves to disk any resources set for the application.
     * @param saveFlags #AsbAppSaveFlags, e.g. %ASB_APP_SAVE_FLAG_SCREENSHOTS
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     */
    addFilename(filename: string): boolean
    /**
     * Adds a package to the list of packages to be processed
     * @param pkg A #AsbPackage
     */
    addPackage(pkg: Package): void
    /**
     * Find a package from its name.
     * @param pkgname a package name
     */
    findByPkgname(pkgname: string): Package
    /**
     * This function used to find an application in the cache, and now does nothing.
     * @param filename cache-id
     */
    findInCache(filename: string): boolean
    /**
     * Gets the target metadata API version.
     */
    getApiVersion(): number
    /**
     * Gets the screenshot directory to use
     */
    getCacheDir(): string
    /**
     * Gets one specific build flag.
     * @param flag A #AsbContextFlags
     */
    getFlag(flag: ContextFlags): boolean
    /**
     * Gets the build flags.
     */
    getFlags(): ContextFlags
    /**
     * Gets the minimum icon size in pixels.
     */
    getMinIconSize(): number
    /**
     * Returns the packages already added to the context.
     */
    getPackages(): Package[]
    /**
     * Gets the temporary directory to use
     */
    getTempDir(): string
    /**
     * Processes all the packages that have been added to the context.
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
    setBasename(basename: string): void
    /**
     * Sets the cache directory to use when building metadata.
     * @param cacheDir directory
     */
    setCacheDir(cacheDir: string): void
    /**
     * Sets flags to be used when building the metadata.
     * @param flags #AsbContextFlags, e.g. %ASB_CONTEXT_FLAG_NO_NETWORK
     */
    setFlags(flags: ContextFlags): void
    /**
     * Sets the icons directory to use when building metadata.
     * @param iconsDir directory
     */
    setIconsDir(iconsDir: string): void
    /**
     * Sets the log directory to use when building metadata.
     * @param logDir directory
     */
    setLogDir(logDir: string): void
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
    setOldMetadata(oldMetadata: string): void
    /**
     * Sets the origin for the two metadata files.
     * @param origin AppStream origin, e.g. "fedora-21"
     */
    setOrigin(origin: string): void
    /**
     * Sets the output directory to use when building metadata.
     * @param outputDir directory
     */
    setOutputDir(outputDir: string): void
    setScreenshotDir(screenshotDir: string): void
    /**
     * Sets the temporary directory to use when building metadata.
     * @param tempDir directory
     */
    setTempDir(tempDir: string): void
    /**
     * Sets up the context ready for use.
     */
    setup(): boolean

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Context

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentInstance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Package

    /**
     * Add a package dependancy.
     * @param dep package dep
     */
    addDep(dep: string): void
    /**
     * Adds a (downstream) release to a package.
     * @param version a package version
     * @param release a package release
     */
    addRelease(version: string, release: AppStreamGlib.Release): void
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
    getArch(): string
    /**
     * Gets the package basename.
     */
    getBasename(): string
    /**
     * Gets a config attribute from a package.
     * @param key utf8 string
     */
    getConfig(key: string): string
    /**
     * Get the package dependancy list.
     */
    getDeps(): string[]
    /**
     * Gets if the package is enabled.
     */
    getEnabled(): boolean
    /**
     * Gets the epoch of the package.
     */
    getEpoch(): number
    /**
     * Gets the package EVR.
     */
    getEvr(): string
    /**
     * Gets the package filelist.
     */
    getFilelist(): string[]
    /**
     * Gets the filename of the package.
     */
    getFilename(): string
    /**
     * Gets the kind of the package.
     */
    getKind(): PackageKind
    /**
     * Gets the package license.
     */
    getLicense(): string
    /**
     * Gets the package name
     */
    getName(): string
    /**
     * Gets the package NEVR.
     */
    getNevr(): string
    /**
     * Gets the package NEVRA.
     */
    getNevra(): string
    /**
     * Gets the release for a specific version.
     * @param version package version
     */
    getRelease(version: string): AppStreamGlib.Release
    /**
     * Gets the package release string
     */
    getReleaseStr(): string
    /**
     * Gets the releases of the package.
     */
    getReleases(): AppStreamGlib.Release[]
    /**
     * Gets the package source nevra.
     */
    getSource(): string
    /**
     * Gets the package source name.
     */
    getSourcePkgname(): string
    /**
     * Gets the package homepage URL
     */
    getUrl(): string
    /**
     * Gets the package version control system.
     */
    getVcs(): string
    /**
     * Gets the package version
     */
    getVersion(): string
    /**
     * Flushes the log queue.
     */
    logFlush(): boolean
    /**
     * Starts the log timer.
     */
    logStart(): void
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
    setArch(arch: string): void
    /**
     * Sets a config attribute on a package.
     * @param key utf8 string
     * @param value utf8 string
     */
    setConfig(key: string, value: string): void
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
    setFilelist(filelist: string): void
    /**
     * Sets the package filename.
     * @param filename package filename
     */
    setFilename(filename: string): void
    /**
     * Sets the package kind.
     * @param kind A #AsbPackageKind
     */
    setKind(kind: PackageKind): void
    /**
     * Sets the package license.
     * @param license license string
     */
    setLicense(license: string): void
    /**
     * Sets the package name.
     * @param name package name
     */
    setName(name: string): void
    /**
     * Sets the package release.
     * @param release package release
     */
    setRelease(release: string): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source source string, e.g. the srpm nevra
     */
    setSource(source: string): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param sourcePkgname source string, e.g. the srpm name
     */
    setSourcePkgname(sourcePkgname: string): void
    /**
     * Sets the package URL.
     * @param url homepage URL
     */
    setUrl(url: string): void
    /**
     * Sets the package version control system.
     * @param vcs vcs string
     */
    setVcs(vcs: string): void
    /**
     * Sets the package version.
     * @param version package version
     */
    setVersion(version: string): void

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Package

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentInstance: GObject.Object

    // Owm methods of AppStreamBuilder-1.0.AppStreamBuilder.Task

    /**
     * Processes the task.
     */
    process(): boolean
    /**
     * Sets the package used for the task.
     * @param pkg A #AsbPackage
     */
    setPackage(pkg: Package): void

    // Class property signals of AppStreamBuilder-1.0.AppStreamBuilder.Task

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentClass: GObject.ObjectClass
}

abstract class TaskClass {

    // Own properties of AppStreamBuilder-1.0.AppStreamBuilder.TaskClass

    static name: string
}

    type PackageEnsureFlags = number
}
export default AppStreamBuilder;