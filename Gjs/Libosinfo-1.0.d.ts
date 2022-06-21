// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Libosinfo-1.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Libosinfo {

enum DeviceDriverSigningReq {
    /**
     * Script do not require device drivers
     * to be signed.
     */
    NONE,
    /**
     * Script must only be given signed
     * device drivers. Some scripts will allow overriding this requirement through
     * #osinfo_install_config_set_driver_signing function. You can query if a
     * script supports this by checking if
     * #OSINFO_INSTALL_CONFIG_PROP_DRIVER_SIGNING configuration parameter is used
     * by the script in question (or other scripts in the same profile).
     */
    STRICT,
    /**
     * A warning will be issued by OS
     * installer if device drivers are not signed and most probably require user
     * input (and thus breaking unattended installation). See
     * #OSINFO_DEVICE_DRIVER_SIGNING_REQ_STRICT on how this warning can be disabled
     * for some scripts.
     */
    WARN,
}
/**
 * #GError codes used for errors in #OSINFO_ERROR domain.
 */
enum Error {
    /**
     * Generic Osinfo error;
     */
    GENERIC,
}
/**
 * Policy for configuration parameter presence
 */
enum InstallConfigParamPolicy {
    /**
     * no policy defined
     */
    NONE,
    /**
     * config parameter is required
     */
    REQUIRED,
    /**
     * config parameter may be omitted
     */
    OPTIONAL,
}
enum InstallScriptInstallationSource {
    /**
     * A media will be used as
     * the installation source.
     */
    MEDIA,
    /**
     * A network method will
     * be used as installation source.
     */
    NETWORK,
}
/**
 * #GError codes used for errors in the #OSINFO_MEDIA_ERROR domain, during
 * reading of data from install media location.
 */
enum MediaError {
    /**
     * No descriptors.
     */
    NO_DESCRIPTORS,
    /**
     * No Primary volume descriptor.
     */
    NO_PVD,
    /**
     * No supplementary volume descriptor.
     */
    NO_SVD,
    /**
     * Not enough metadata.
     */
    INSUFFICIENT_METADATA,
    /**
     * Install media not bootable.
     */
    NOT_BOOTABLE,
    /**
     * No directory record extent
     * found.
     */
    NO_DIRECTORY_RECORD_EXTENT,
}
enum PathFormat {
    /**
     * Unix/Linux path format, e.g /home/foo/bar.txt
     */
    UNIX,
    /**
     * DOS/Windows path format, e.g \My Documents\bar.txt
     */
    DOS,
}
/**
 * Enum values used to form relationships between products
 */
enum ProductRelationship {
    /**
     * a descendent (RHEL-5 derives from Fedora-6)
     */
    DERIVES_FROM,
    /**
     * a new version release (RHEL-6 upgrades RHEL-4)
     */
    UPGRADES,
    /**
     * a perfect clone (CentOS-5 clones RHEL-5)
     */
    CLONES,
}
enum ReleaseStatus {
    /**
     * A released OS. (Since: 0.2.9)
     */
    RELEASED,
    /**
     * A continuous integration snapshot and not
     * an actual released product yet. For example, gnome-continuous images for
     * development snapshots of GNOME and nightly build ISOs of Fedora etc.
     * (Since: 0.2.9)
     */
    SNAPSHOT,
    /**
     * A pre-release. For example, alpha and
     * beta pre-releases of Fedora etc. (Since: 0.2.9)
     */
    PRERELEASE,
    /**
     * A rolling version of an OS and thus with no
     * actual releases. For example, Gentoo, Arch Linux, etc. (Since: 1.4.0)
     */
    ROLLING,
}
/**
 * #GError codes used for errors in the #OSINFO_TREE_ERROR domain, during
 * reading the treeinfo from a URI.
 */
enum TreeError {
    /**
     * No treeinfo found;
     */
    NO_TREEINFO,
    /**
     * The URL protocol is not supported.
     */
    NOT_SUPPORTED_PROTOCOL,
}
enum InstallScriptInjectionMethod {
    /**
     * Support injection of the
     * installation script trough a CD-ROM.
     */
    CDROM,
    /**
     * Support injection of the
     * installation script trough a disk.
     */
    DISK,
    /**
     * Support injection of the
     * installation script trough a floppy disk.
     */
    FLOPPY,
    /**
     * Support injection of the
     * installation script trough the initrd.
     */
    INITRD,
    /**
     * Support injection of the
     * installation script from the web.
     */
    WEB,
}
/**
 * OSINFO_MEDIA_DETECT_REQUIRE_BOOTABLE: Requires a media to be bootable.
 * Flags used for detecting a media.
 * @bitfield 
 */
enum MediaDetectFlags {
    BOOTABLE,
}
const ARCHITECTURE_ALL: string
const AVATAR_FORMAT_PROP_ALPHA: string
const AVATAR_FORMAT_PROP_HEIGHT: string
const AVATAR_FORMAT_PROP_MIME_TYPE: string
const AVATAR_FORMAT_PROP_WIDTH: string
const DEVICELINK_PROP_DRIVER: string
const DEVICELINK_PROP_SUPPORTED: string
const DEVICE_DRIVER_DEFAULT_PRIORITY: number
const DEVICE_DRIVER_PROP_ARCHITECTURE: string
const DEVICE_DRIVER_PROP_DEVICE: string
const DEVICE_DRIVER_PROP_FILE: string
const DEVICE_DRIVER_PROP_LOCATION: string
const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string
const DEVICE_DRIVER_PROP_PRIORITY: string
const DEVICE_DRIVER_PROP_SIGNED: string
const DEVICE_PROP_BUS_TYPE: string
const DEVICE_PROP_CLASS: string
const DEVICE_PROP_NAME: string
const DEVICE_PROP_PRODUCT: string
const DEVICE_PROP_PRODUCT_ID: string
const DEVICE_PROP_SUBSYSTEM: string
const DEVICE_PROP_VENDOR: string
const DEVICE_PROP_VENDOR_ID: string
const ENTITY_PROP_ID: string
const FIRMWARE_PROP_ARCHITECTURE: string
const FIRMWARE_PROP_SUPPORTED: string
const FIRMWARE_PROP_TYPE: string
const GIBIBYTES: number
const IMAGE_PROP_ARCHITECTURE: string
const IMAGE_PROP_CLOUD_INIT: string
const IMAGE_PROP_FORMAT: string
const IMAGE_PROP_URL: string
const IMAGE_PROP_VARIANT: string
const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string
const INSTALL_CONFIG_PARAM_PROP_NAME: string
const INSTALL_CONFIG_PARAM_PROP_POLICY: string
const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string
const INSTALL_CONFIG_PROP_AVATAR_DISK: string
const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string
const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string
const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string
const INSTALL_CONFIG_PROP_HOSTNAME: string
const INSTALL_CONFIG_PROP_INSTALLATION_URL: string
const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string
const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string
const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string
const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string
const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string
const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string
const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string
const INSTALL_CONFIG_PROP_REG_LOGIN: string
const INSTALL_CONFIG_PROP_REG_PASSWORD: string
const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string
const INSTALL_CONFIG_PROP_SCRIPT_DISK: string
const INSTALL_CONFIG_PROP_TARGET_DISK: string
const INSTALL_CONFIG_PROP_USER_ADMIN: string
const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string
const INSTALL_CONFIG_PROP_USER_LOGIN: string
const INSTALL_CONFIG_PROP_USER_PASSWORD: string
const INSTALL_CONFIG_PROP_USER_REALNAME: string
const INSTALL_SCRIPT_PROFILE_DESKTOP: string
const INSTALL_SCRIPT_PROFILE_JEOS: string
const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string
const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string
const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string
const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string
const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string
const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string
const INSTALL_SCRIPT_PROP_PATH_FORMAT: string
const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string
const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string
const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string
const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string
const INSTALL_SCRIPT_PROP_PROFILE: string
const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string
const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string
const KIBIBYTES: number
/**
 * libosinfo major version number.
 */
const MAJOR_VERSION: number
const MEBIBYTES: number
const MEDIA_PROP_APPLICATION_ID: string
const MEDIA_PROP_ARCHITECTURE: string
const MEDIA_PROP_BOOTABLE: string
const MEDIA_PROP_EJECT_AFTER_INSTALL: string
const MEDIA_PROP_INITRD: string
const MEDIA_PROP_INSTALLER: string
const MEDIA_PROP_INSTALLER_REBOOTS: string
const MEDIA_PROP_INSTALLER_SCRIPT: string
const MEDIA_PROP_KERNEL: string
const MEDIA_PROP_LANG: string
const MEDIA_PROP_LANG_MAP: string
const MEDIA_PROP_LANG_REGEX: string
const MEDIA_PROP_LIVE: string
const MEDIA_PROP_PUBLISHER_ID: string
const MEDIA_PROP_SYSTEM_ID: string
const MEDIA_PROP_URL: string
const MEDIA_PROP_VARIANT: string
const MEDIA_PROP_VOLUME_ID: string
const MEDIA_PROP_VOLUME_SIZE: string
const MEGAHERTZ: number
/**
 * libosinfo micro version number.
 */
const MICRO_VERSION: number
/**
 * libosinfo minor version number.
 */
const MINOR_VERSION: number
const OS_PROP_CLOUD_IMAGE_USERNAME: string
const OS_PROP_DISTRO: string
const OS_PROP_FAMILY: string
const OS_PROP_KERNEL_URL_ARGUMENT: string
const OS_PROP_RELEASE_STATUS: string
const OS_VARIANT_PROP_NAME: string
const PRODUCT_PROP_CODENAME: string
const PRODUCT_PROP_EOL_DATE: string
const PRODUCT_PROP_LOGO: string
const PRODUCT_PROP_NAME: string
const PRODUCT_PROP_RELEASE_DATE: string
const PRODUCT_PROP_SHORT_ID: string
const PRODUCT_PROP_VENDOR: string
const PRODUCT_PROP_VERSION: string
const RESOURCES_PROP_ARCHITECTURE: string
const RESOURCES_PROP_CPU: string
const RESOURCES_PROP_N_CPUS: string
const RESOURCES_PROP_RAM: string
const RESOURCES_PROP_STORAGE: string
const TREE_PROP_ARCHITECTURE: string
const TREE_PROP_BOOT_ISO: string
const TREE_PROP_HAS_TREEINFO: string
const TREE_PROP_INITRD: string
const TREE_PROP_KERNEL: string
const TREE_PROP_TREEINFO_ARCH: string
const TREE_PROP_TREEINFO_FAMILY: string
const TREE_PROP_TREEINFO_VARIANT: string
const TREE_PROP_TREEINFO_VERSION: string
const TREE_PROP_URL: string
const TREE_PROP_VARIANT: string
/**
 * Gets a #GQuark representing the string "libosinfo"
 */
function error_quark(): GLib.Quark
function media_error_quark(): GLib.Quark
/**
 * Gets a #GQuark representing the string "osinfo-tree-error"
 */
function tree_error_quark(): GLib.Quark
interface AvatarFormat_ConstructProps extends Entity_ConstructProps {
}

interface AvatarFormat {

    // Own properties of Libosinfo-1.0.Libosinfo.AvatarFormat

    /**
     * Whether alpha channel is supported in the avatar.
     */
    readonly alpha: boolean
    /**
     * The required height (in pixels) of the avatar.
     */
    readonly height: number
    /**
     * The allowed mime-types for the avatar.
     */
    readonly mime_types: string[]
    /**
     * The required width (in pixels) of the avatar.
     */
    readonly width: number

    // Own fields of Libosinfo-1.0.Libosinfo.AvatarFormat

    parent_instance: Entity
    priv: AvatarFormatPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.AvatarFormat

    get_alpha(): boolean
    get_height(): number
    get_mime_types(): string[]
    get_width(): number

    // Class property signals of Libosinfo-1.0.Libosinfo.AvatarFormat

    connect(sigName: "notify::alpha", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alpha", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mime-types", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-types", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AvatarFormat extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.AvatarFormat

    static name: string
    static $gtype: GObject.GType<AvatarFormat>

    // Constructors of Libosinfo-1.0.Libosinfo.AvatarFormat

    constructor(config?: AvatarFormat_ConstructProps) 
    /**
     * Construct a new user avatar file for an #OsinfoInstallScript.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new user avatar file for an #OsinfoInstallScript.
     * @constructor 
     */
    static new(): AvatarFormat
    _init(config?: AvatarFormat_ConstructProps): void
}

interface Datamap_ConstructProps extends Entity_ConstructProps {
}

interface Datamap {

    // Own fields of Libosinfo-1.0.Libosinfo.Datamap

    parent_instance: Entity
    priv: DatamapPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Datamap

    /**
     * Adds the input value and the output value associated to it to
     * the `map`.
     * @param inval the input value
     * @param outval the output value
     */
    insert(inval: string, outval: string): void
    /**
     * Returns the output value with which `inval` is associated to.
     * @param inval the input value
     */
    lookup(inval: string): string
    /**
     * Returns the input value with which `outval` is associated to.
     * @param outval the output value
     */
    reverse_lookup(outval: string): string

    // Class property signals of Libosinfo-1.0.Libosinfo.Datamap

    connect(sigName: "notify::id", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Datamap extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Datamap

    static name: string
    static $gtype: GObject.GType<Datamap>

    // Constructors of Libosinfo-1.0.Libosinfo.Datamap

    constructor(config?: Datamap_ConstructProps) 
    /**
     * Construct a new datamapa that is initially empty.
     * @constructor 
     * @param id the unique identifier
     */
    constructor(id: string) 
    /**
     * Construct a new datamapa that is initially empty.
     * @constructor 
     * @param id the unique identifier
     */
    static new(id: string): Datamap
    _init(config?: Datamap_ConstructProps): void
}

interface DatamapList_ConstructProps extends List_ConstructProps {
}

interface DatamapList {

    // Own fields of Libosinfo-1.0.Libosinfo.DatamapList

    parent_instance: List
    priv: DatamapListPrivate

    // Class property signals of Libosinfo-1.0.Libosinfo.DatamapList

    connect(sigName: "notify::element-type", callback: (($obj: DatamapList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: DatamapList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DatamapList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.DatamapList

    static name: string
    static $gtype: GObject.GType<DatamapList>

    // Constructors of Libosinfo-1.0.Libosinfo.DatamapList

    constructor(config?: DatamapList_ConstructProps) 
    /**
     * Construct a new install_datamap list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new install_datamap list that is initially empty.
     * @constructor 
     */
    static new(): DatamapList
    _init(config?: DatamapList_ConstructProps): void
}

interface Db_ConstructProps extends GObject.Object_ConstructProps {
}

interface Db {

    // Own fields of Libosinfo-1.0.Libosinfo.Db

    parent_instance: GObject.Object
    priv: DbPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Db

    add_datamap(datamap: Datamap): void
    add_deployment(deployment: Deployment): void
    add_device(device: Device): void
    add_install_script(script: InstallScript): void
    add_os(os: Os): void
    add_platform(platform: Platform): void
    /**
     * Find the deployment for `os` on `platform,` if any.
     * @param os the operating system to find
     * @param platform the virtualization platform
     */
    find_deployment(os: Os, platform: Platform): Deployment
    get_datamap(id: string): Datamap
    get_datamap_list(): DatamapList
    get_deployment(id: string): Deployment
    get_deployment_list(): DeploymentList
    get_device(id: string): Device
    get_device_list(): DeviceList
    get_install_script(id: string): InstallScript
    get_install_script_list(): InstallScriptList
    get_os(id: string): Os
    get_os_list(): OsList
    get_platform(id: string): Platform
    get_platform_list(): PlatformList
    /**
     * Guess operating system given an #OsinfoMedia object.
     * @param media the installation media
     */
    guess_os_from_media(media: Media): [ /* returnType */ Os, /* matched_media */ Media ]
    /**
     * Guess operating system given an #OsinfoTree object.
     * @param tree the installation tree
     */
    guess_os_from_tree(tree: Tree): [ /* returnType */ Os, /* matched_tree */ Tree ]
    /**
     * Try to match a newly created `media` with a media description from `db`.
     * If found, `media` will be filled with the corresponding information
     * stored in `db`. In particular, after a call to osinfo_db_identify_media(), if
     * the media could be identified, its OsinfoEntify::id and OsinfoMedia::os
     * properties will be set.
     * @param media the installation media data
     */
    identify_media(media: Media): boolean
    /**
     * Try to match a newly created `tree` with a tree description from `db`.
     * If found, `tree` will be filled with the corresponding information
     * stored in `db`. In particular, after a call to osinfo_db_identify_tree(), if
     * the tree could be identified, its OsinfoEntify::id and OsinfoMedia::os
     * properties will be set.
     * @param tree the installation tree data
     */
    identify_tree(tree: Tree): boolean
    /**
     * Get all operating systems that are the referee
     * in an operating system relationship.
     * @param relshp the product relationship
     */
    unique_values_for_os_relationship(relshp: ProductRelationship): OsList
    /**
     * Get all platforms that are the referee
     * in an platform relationship.
     * @param relshp the product relationship
     */
    unique_values_for_platform_relationship(relshp: ProductRelationship): PlatformList
    /**
     * Get all unique values for a named property amongst all
     * deployments in the database
     * @param propName a property name
     */
    unique_values_for_property_in_deployment(propName: string): string[]
    /**
     * Get all unique values for a named property amongst all
     * devices in the database
     * @param propName a property name
     */
    unique_values_for_property_in_device(propName: string): string[]
    /**
     * Get all unique values for a named property amongst all
     * operating systems in the database
     * @param propName a property name
     */
    unique_values_for_property_in_os(propName: string): string[]
    /**
     * Get all unique values for a named property amongst all
     * platforms in the database
     * @param propName a property name
     */
    unique_values_for_property_in_platform(propName: string): string[]

    // Class property signals of Libosinfo-1.0.Libosinfo.Db

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Db extends GObject.Object {

    // Own properties of Libosinfo-1.0.Libosinfo.Db

    static name: string
    static $gtype: GObject.GType<Db>

    // Constructors of Libosinfo-1.0.Libosinfo.Db

    constructor(config?: Db_ConstructProps) 
    constructor() 
    static new(): Db
    _init(config?: Db_ConstructProps): void
}

interface Deployment_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Deployment

    /**
     * The operating system to be deployed
     */
    os?: Os | null
    /**
     * The platform to deploy on
     */
    platform?: Platform | null
}

interface Deployment {

    // Own properties of Libosinfo-1.0.Libosinfo.Deployment

    /**
     * The operating system to be deployed
     */
    readonly os: Os
    /**
     * The platform to deploy on
     */
    readonly platform: Platform

    // Own fields of Libosinfo-1.0.Libosinfo.Deployment

    parent_instance: Entity
    priv: DeploymentPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Deployment

    /**
     * Associate a device with a deployment. The returned #OsinfoDeviceLink
     * can be used to record extra metadata against the link
     * @param dev the device to associate
     */
    add_device(dev: Device): DeviceLink
    /**
     * Retrieve all the associated devices matching the filter.
     * The filter matches against the link, not the device.
     * @param filter an optional filter
     */
    get_device_links(filter: Filter | null): DeviceLinkList
    /**
     * Retrieve all the associated devices matching the filter.
     * The filter matches against the device, not the link.
     * @param filter an optional filter
     */
    get_devices(filter: Filter | null): DeviceList
    /**
     * Get the operating system for the deployment
     */
    get_os(): Os
    /**
     * Get the platform for the deployment
     */
    get_platform(): Platform
    /**
     * Get the preferred device matching a given filter
     * @param filter a device metadata filter
     */
    get_preferred_device(filter: Filter | null): Device
    /**
     * Get the preferred device link matching a given filter and platform.
     * The filter matches against attributes on the link, not the device.
     * @param filter a device metadata filter
     */
    get_preferred_device_link(filter: Filter | null): DeviceLink

    // Class property signals of Libosinfo-1.0.Libosinfo.Deployment

    connect(sigName: "notify::os", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::os", ...args: any[]): void
    connect(sigName: "notify::platform", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::platform", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::platform", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Deployment extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Deployment

    static name: string
    static $gtype: GObject.GType<Deployment>

    // Constructors of Libosinfo-1.0.Libosinfo.Deployment

    constructor(config?: Deployment_ConstructProps) 
    /**
     * Create a new deployment entity
     * @constructor 
     * @param id the unique identifier
     * @param os the operating system to deploy
     * @param platform the platform to deploy on
     */
    constructor(id: string, os: Os, platform: Platform) 
    /**
     * Create a new deployment entity
     * @constructor 
     * @param id the unique identifier
     * @param os the operating system to deploy
     * @param platform the platform to deploy on
     */
    static new(id: string, os: Os, platform: Platform): Deployment
    _init(config?: Deployment_ConstructProps): void
}

interface DeploymentList_ConstructProps extends List_ConstructProps {
}

interface DeploymentList {

    // Own fields of Libosinfo-1.0.Libosinfo.DeploymentList

    parent_instance: List
    priv: DeploymentListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.DeploymentList

    /**
     * Construct a new deployment list that is filled with deployments
     * from `source`
     */
    new_copy(): DeploymentList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): DeploymentList | List | any
    /**
     * Construct a new deployment list that is filled with deployments
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): DeploymentList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): DeploymentList | List | any
    /**
     * Construct a new deployment list that is filled with only the
     * deployments that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second deployment list to copy
     */
    new_intersection(sourceTwo: DeploymentList): DeploymentList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): DeploymentList | List | any
    /**
     * Construct a new deployment list that is filled with all the
     * deployments that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second deployment list to copy
     */
    new_union(sourceTwo: DeploymentList): DeploymentList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): DeploymentList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.DeploymentList

    connect(sigName: "notify::element-type", callback: (($obj: DeploymentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: DeploymentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeploymentList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.DeploymentList

    static name: string
    static $gtype: GObject.GType<DeploymentList>

    // Constructors of Libosinfo-1.0.Libosinfo.DeploymentList

    constructor(config?: DeploymentList_ConstructProps) 
    /**
     * Construct a new deployment list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new deployment list that is initially empty.
     * @constructor 
     */
    static new(): DeploymentList
    _init(config?: DeploymentList_ConstructProps): void
}

interface Device_ConstructProps extends Entity_ConstructProps {
}

interface Device {

    // Own fields of Libosinfo-1.0.Libosinfo.Device

    parent_instance: Entity
    priv: DevicePrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Device

    get_bus_type(): string
    get_class(): string
    get_name(): string
    get_product(): string
    get_product_id(): string
    get_subsystem(): string
    get_vendor(): string
    get_vendor_id(): string

    // Class property signals of Libosinfo-1.0.Libosinfo.Device

    connect(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Device extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Libosinfo-1.0.Libosinfo.Device

    constructor(config?: Device_ConstructProps) 
    constructor(id: string) 
    static new(id: string): Device
    _init(config?: Device_ConstructProps): void
}

interface DeviceDriver_ConstructProps extends Entity_ConstructProps {
}

interface DeviceDriver {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceDriver

    parent_instance: Entity
    priv: DeviceDriverPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.DeviceDriver

    /**
     * Retrieves the target hardware architecture of `driver`.
     */
    get_architecture(): string
    get_devices(): DeviceList
    /**
     * Retrieves the names of driver files under the location returned by
     * #osinfo_device_driver_get_location.
     */
    get_files(): string[]
    /**
     * Retrieves the location of the `driver` as a URL.
     */
    get_location(): string
    get_pre_installable(): boolean
    /**
     * Returns the priority of the device driver. The higher the value, the more
     * important it is.
     */
    get_priority(): number
    /**
     * Some OS vendors recommend or require device drivers to be signed by them
     * before these device drivers could be installed on their OS.
     */
    get_signed(): boolean

    // Class property signals of Libosinfo-1.0.Libosinfo.DeviceDriver

    connect(sigName: "notify::id", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceDriver extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceDriver

    static name: string
    static $gtype: GObject.GType<DeviceDriver>

    // Constructors of Libosinfo-1.0.Libosinfo.DeviceDriver

    constructor(config?: DeviceDriver_ConstructProps) 
    _init(config?: DeviceDriver_ConstructProps): void
}

interface DeviceDriverList_ConstructProps extends List_ConstructProps {
}

interface DeviceDriverList {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceDriverList

    parent_instance: List
    priv: DeviceDriverListPrivate

    // Class property signals of Libosinfo-1.0.Libosinfo.DeviceDriverList

    connect(sigName: "notify::element-type", callback: (($obj: DeviceDriverList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: DeviceDriverList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceDriverList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceDriverList

    static name: string
    static $gtype: GObject.GType<DeviceDriverList>

    // Constructors of Libosinfo-1.0.Libosinfo.DeviceDriverList

    constructor(config?: DeviceDriverList_ConstructProps) 
    /**
     * Construct a new device driver list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new device driver list that is initially empty.
     * @constructor 
     */
    static new(): DeviceDriverList
    _init(config?: DeviceDriverList_ConstructProps): void
}

interface DeviceLink_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.DeviceLink

    /**
     * The target of the device link.
     */
    target?: Device | null
}

interface DeviceLink {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLink

    /**
     * The target of the device link.
     */
    readonly target: Device

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceLink

    parent_instance: Entity
    priv: DeviceLinkPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.DeviceLink

    get_driver(): string
    /**
     * Retrieve the #OsinfoDevice that the link points to.
     */
    get_target(): Device

    // Class property signals of Libosinfo-1.0.Libosinfo.DeviceLink

    connect(sigName: "notify::target", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceLink extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLink

    static name: string
    static $gtype: GObject.GType<DeviceLink>

    // Constructors of Libosinfo-1.0.Libosinfo.DeviceLink

    constructor(config?: DeviceLink_ConstructProps) 
    /**
     * Construct a new link for an #OsinfoDevice. The unique ID
     * of the link is set to match the ID of the target device.
     * @constructor 
     * @param target the target device
     */
    constructor(target: Device) 
    /**
     * Construct a new link for an #OsinfoDevice. The unique ID
     * of the link is set to match the ID of the target device.
     * @constructor 
     * @param target the target device
     */
    static new(target: Device): DeviceLink
    _init(config?: DeviceLink_ConstructProps): void
}

interface DeviceLinkFilter_ConstructProps extends Filter_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    /**
     * The operating system to be deployed
     */
    target_filter?: Filter | null
}

interface DeviceLinkFilter {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    /**
     * The operating system to be deployed
     */
    readonly target_filter: Filter

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    parent_instance: Filter
    priv: DeviceLinkFilterPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    /**
     * Retrieve the filter used to match against the target of
     * the device link
     */
    get_target_filter(): Filter

    // Class property signals of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    connect(sigName: "notify::target-filter", callback: (($obj: DeviceLinkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-filter", callback: (($obj: DeviceLinkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target-filter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceLinkFilter extends Filter {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    static name: string
    static $gtype: GObject.GType<DeviceLinkFilter>

    // Constructors of Libosinfo-1.0.Libosinfo.DeviceLinkFilter

    constructor(config?: DeviceLinkFilter_ConstructProps) 
    /**
     * Construct a new filter that matches all operating
     * systems
     * @constructor 
     * @param filter the target device filter
     */
    constructor(filter: Filter) 
    /**
     * Construct a new filter that matches all operating
     * systems
     * @constructor 
     * @param filter the target device filter
     */
    static new(filter: Filter): DeviceLinkFilter

    // Overloads of new

    /**
     * Construct a new filter that matches all entities
     * @constructor 
     */
    static new(): Filter
    _init(config?: DeviceLinkFilter_ConstructProps): void
}

interface DeviceLinkList_ConstructProps extends List_ConstructProps {
}

interface DeviceLinkList {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceLinkList

    parent_instance: List
    priv: DeviceLinkListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.DeviceLinkList

    /**
     * Get all devices matching a given filter
     * @param filter an optional device property filter
     */
    get_devices(filter: Filter | null): DeviceList
    /**
     * Construct a new devicelink list that is filled with devicelinks
     * from `source`
     */
    new_copy(): DeviceLinkList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): DeviceLinkList | List | any
    /**
     * Construct a new devicelink list that is filled with devicelinks
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): DeviceLinkList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): DeviceLinkList | List | any
    /**
     * Construct a new devicelink list that is filled with only the
     * devicelinks that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second devicelink list to copy
     */
    new_intersection(sourceTwo: DeviceLinkList): DeviceLinkList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): DeviceLinkList | List | any
    /**
     * Construct a new devicelink list that is filled with all the
     * devicelinks that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second devicelink list to copy
     */
    new_union(sourceTwo: DeviceLinkList): DeviceLinkList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): DeviceLinkList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.DeviceLinkList

    connect(sigName: "notify::element-type", callback: (($obj: DeviceLinkList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: DeviceLinkList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceLinkList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkList

    static name: string
    static $gtype: GObject.GType<DeviceLinkList>

    // Constructors of Libosinfo-1.0.Libosinfo.DeviceLinkList

    constructor(config?: DeviceLinkList_ConstructProps) 
    /**
     * Construct a new devicelink list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new devicelink list that is initially empty.
     * @constructor 
     */
    static new(): DeviceLinkList
    _init(config?: DeviceLinkList_ConstructProps): void
}

interface DeviceList_ConstructProps extends List_ConstructProps {
}

interface DeviceList {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceList

    parent_instance: List
    priv: DeviceListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.DeviceList

    /**
     * Construct a new device list that is filled with devices
     * from `source`
     */
    new_copy(): DeviceList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): DeviceList | List | any
    /**
     * Construct a new device list that is filled with devices
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): DeviceList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): DeviceList | List | any
    /**
     * Construct a new device list that is filled with only the
     * devices that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second device list to copy
     */
    new_intersection(sourceTwo: DeviceList): DeviceList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): DeviceList | List | any
    /**
     * Construct a new device list that is filled with all the
     * devices that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second device list to copy
     */
    new_union(sourceTwo: DeviceList): DeviceList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): DeviceList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.DeviceList

    connect(sigName: "notify::element-type", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeviceList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceList

    static name: string
    static $gtype: GObject.GType<DeviceList>

    // Constructors of Libosinfo-1.0.Libosinfo.DeviceList

    constructor(config?: DeviceList_ConstructProps) 
    /**
     * Construct a new device list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new device list that is initially empty.
     * @constructor 
     */
    static new(): DeviceList
    _init(config?: DeviceList_ConstructProps): void
}

interface Entity_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Entity

    /**
     * The unique identifier for the entity The format of identifiers
     * is undefined, but the recommended practice is to use a URI.
     * This parameter must be set at time of construction as no
     * default value is provided.
     */
    id?: string | null
}

interface Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Entity

    /**
     * The unique identifier for the entity The format of identifiers
     * is undefined, but the recommended practice is to use a URI.
     * This parameter must be set at time of construction as no
     * default value is provided.
     */
    id: string

    // Own fields of Libosinfo-1.0.Libosinfo.Entity

    parent_instance: GObject.Object
    priv: EntityPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Entity

    /**
     * Adds a new parameter against the entity. A key can have multiple
     * values associated. Thus repeated calls with the same key will
     * build up a list of possible values.
     * @param key the name of the key
     * @param value the data to associated with that key
     */
    add_param(key: string, value: string): void
    /**
     * Remove all values associated with a key
     * @param key the name of the key
     */
    clear_param(key: string): void
    /**
     * Retrieves the unique key for the entity. The format of identifiers
     * is undefined, but the recommended practice is to use a URI.
     */
    get_id(): string
    /**
     * Retrieve all the known parameter keys associated with
     * the entity
     */
    get_param_keys(): string[]
    /**
     * Retrieve the parameter value associated with a named key. If
     * multiple values are stored against the key, only the first
     * value is returned. If no value is associated, NULL is returned
     * @param key the name of the key
     */
    get_param_value(key: string): string
    /**
     * Retrieve the parameter value associated with a named key as a
     * boolean. If multiple values are stored against the key, only the
     * first value is returned. If no value is associated, FALSE is returned
     * @param key the name of the key
     */
    get_param_value_boolean(key: string): boolean
    /**
     * Retrieve the parameter value associated with a named key as a
     * boolean. If multiple values are stored against the key, only the
     * first value is returned. If no value is associated, `default_value`
     * is returned.
     * @param key the name of the key
     * @param default_value the value to be returned in case there's no value                 associated with the `key`
     */
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    /**
     * Retrieve the parameter value associated with a named key as an
     * enum value. If multiple values are stored against the key, only
     * the first value is returned. If no value is associated, the
     * `default_value` is returned.
     * @param key the name of the key
     * @param enum_type the enum type
     * @param default_value the default value to be used, in case there's                 no value associated with the key
     */
    get_param_value_enum(key: string, enum_type: GObject.GType, default_value: number): number
    /**
     * Retrieve the parameter value associated with a named key as an
     * int64. If multiple values are stored against the key, only the
     * first value is returned. If no value is associated, -1 is returned.
     * @param key the name of the key
     */
    get_param_value_int64(key: string): number
    /**
     * Retrieve the parameter value associated with a named key as an
     * int64. If multiple values are stored against the key, only the
     * first value is returned. If no value is associated, `default_value`
     * is returned.
     * @param key the name of the key
     * @param default_value the value to be returned in case there's no value                 associated with the `key`
     */
    get_param_value_int64_with_default(key: string, default_value: number): number
    /**
     * Retrieve all the parameter values associated with a named
     * key. If no values are associated, NULL is returned
     * @param key the name of the key
     */
    get_param_value_list(key: string): string[]
    /**
     * Sets a new parameter against the entity. If the key already
     * has a value associated with it, the existing value will be
     * cleared.
     * @param key the name of the key
     * @param value the data to associated with that key
     */
    set_param(key: string, value: string): void
    /**
     * Sets a new parameter against the entity. If the key already
     * has a value associated with it, the existing value will be
     * cleared.
     * @param key the name of the key
     * @param value the boolean value to be associated with that key
     */
    set_param_boolean(key: string, value: boolean): void
    /**
     * Sets a new parameter against the entity. If the key already
     * has a value associated with it, the existing value will be
     * cleared.
     * @param key the name of the key
     * @param value the enum value to be associated with that key
     * @param enum_type the enum type
     */
    set_param_enum(key: string, value: number, enum_type: GObject.GType): void
    /**
     * Sets a new parameter against the entity. If the key already
     * has a value associated with it, the existing value will be
     * cleared.
     * @param key the name of the key
     * @param value the int64 value to be associated with that key
     */
    set_param_int64(key: string, value: number): void

    // Class property signals of Libosinfo-1.0.Libosinfo.Entity

    connect(sigName: "notify::id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Entity extends GObject.Object {

    // Own properties of Libosinfo-1.0.Libosinfo.Entity

    static name: string
    static $gtype: GObject.GType<Entity>

    // Constructors of Libosinfo-1.0.Libosinfo.Entity

    constructor(config?: Entity_ConstructProps) 
    _init(config?: Entity_ConstructProps): void
}

interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}

interface Filter {

    // Own fields of Libosinfo-1.0.Libosinfo.Filter

    parent_instance: GObject.Object
    priv: FilterPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Filter

    /**
     * Adds a constraint that requires the entity to have
     * a property key `propName` with a value of `propVal`.
     * If multiple constraints are added for the same
     * `propName,` with different values, the entity have
     * all property values.
     * @param propName the name of the parameter key
     * @param propVal the required property value
     */
    add_constraint(propName: string, propVal: string): void
    /**
     * Remove all filter constraints for the matching property
     * name.
     * @param propName name of the key to remove constraints for
     */
    clear_constraint(propName: string): void
    /**
     * Remove all filter property constraints
     */
    clear_constraints(): void
    /**
     * Get a list of all constraint property keys
     */
    get_constraint_keys(): string[]
    /**
     * Get a list values for filter constraints with the named key
     * @param propName the name of the key
     */
    get_constraint_values(propName: string): string[]
    /**
     * Determine of an entity matches a filter
     * @param entity an entity to query
     */
    matches(entity: Entity): boolean

    // Own virtual methods of Libosinfo-1.0.Libosinfo.Filter

    /**
     * Determine of an entity matches a filter
     * @virtual 
     * @param entity an entity to query
     */
    vfunc_matches(entity: Entity): boolean

    // Class property signals of Libosinfo-1.0.Libosinfo.Filter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Filter extends GObject.Object {

    // Own properties of Libosinfo-1.0.Libosinfo.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of Libosinfo-1.0.Libosinfo.Filter

    constructor(config?: Filter_ConstructProps) 
    /**
     * Construct a new filter that matches all entities
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new filter that matches all entities
     * @constructor 
     */
    static new(): Filter
    _init(config?: Filter_ConstructProps): void
}

interface Firmware_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Firmware

    /**
     * The target hardware architecture of this firmware.
     */
    architecture?: string | null
    type?: string | null
}

interface Firmware {

    // Own properties of Libosinfo-1.0.Libosinfo.Firmware

    /**
     * The target hardware architecture of this firmware.
     */
    architecture: string
    type: string

    // Own fields of Libosinfo-1.0.Libosinfo.Firmware

    parent_instance: Entity
    priv: FirmwarePrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Firmware

    /**
     * Retrieves the target hardware architecture of the OS `firmware` provides.
     */
    get_architecture(): string
    /**
     * The type of the `firmware`
     */
    get_firmware_type(): string
    /**
     * Whether the `firmware` is supported or not
     */
    is_supported(): boolean

    // Class property signals of Libosinfo-1.0.Libosinfo.Firmware

    connect(sigName: "notify::architecture", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::architecture", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Firmware extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Firmware

    static name: string
    static $gtype: GObject.GType<Firmware>

    // Constructors of Libosinfo-1.0.Libosinfo.Firmware

    constructor(config?: Firmware_ConstructProps) 
    constructor(id: string, architecture: string, type: string) 
    static new(id: string, architecture: string, type: string): Firmware
    _init(config?: Firmware_ConstructProps): void
}

interface FirmwareList_ConstructProps extends List_ConstructProps {
}

interface FirmwareList {

    // Own fields of Libosinfo-1.0.Libosinfo.FirmwareList

    parent_instance: List
    priv: FirmwareListPrivate

    // Class property signals of Libosinfo-1.0.Libosinfo.FirmwareList

    connect(sigName: "notify::element-type", callback: (($obj: FirmwareList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: FirmwareList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FirmwareList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.FirmwareList

    static name: string
    static $gtype: GObject.GType<FirmwareList>

    // Constructors of Libosinfo-1.0.Libosinfo.FirmwareList

    constructor(config?: FirmwareList_ConstructProps) 
    /**
     * Construct a new firmware list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new firmware list that is initially empty.
     * @constructor 
     */
    static new(): FirmwareList
    _init(config?: FirmwareList_ConstructProps): void
}

interface Image_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Image

    /**
     * The target hardware architecture of this image.
     */
    architecture?: string | null
    /**
     * Whether the image supports cloud-init customizations or not.
     */
    cloud_init?: string | null
    /**
     * The image format.
     */
    format?: string | null
    /**
     * The URL to this image.
     */
    url?: string | null
}

interface Image {

    // Own properties of Libosinfo-1.0.Libosinfo.Image

    /**
     * The target hardware architecture of this image.
     */
    architecture: string
    /**
     * Whether the image supports cloud-init customizations or not.
     */
    cloud_init: string
    /**
     * The image format.
     */
    format: string
    /**
     * The URL to this image.
     */
    url: string

    // Own fields of Libosinfo-1.0.Libosinfo.Image

    parent_instance: Entity
    priv: ImagePrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Image

    /**
     * Retrieves the target hardware architecture of the OS `image` provides.
     */
    get_architecture(): string
    /**
     * Whether `image` supports cloud init customizations
     */
    get_cloud_init(): boolean
    /**
     * The format of the `image`
     */
    get_format(): string
    get_os(): Os
    /**
     * Gets the varriants of the associated operating system
     */
    get_os_variants(): OsVariantList
    /**
     * The URL to the `image`
     */
    get_url(): string
    /**
     * Sets the #OsinfoOs associated to the #OsinfoImage instance.
     * @param os an #OsinfoOs instance
     */
    set_os(os: Os): void

    // Class property signals of Libosinfo-1.0.Libosinfo.Image

    connect(sigName: "notify::architecture", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::architecture", ...args: any[]): void
    connect(sigName: "notify::cloud-init", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-init", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cloud-init", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Image extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of Libosinfo-1.0.Libosinfo.Image

    constructor(config?: Image_ConstructProps) 
    constructor(id: string, architecture: string, format: string) 
    static new(id: string, architecture: string, format: string): Image
    _init(config?: Image_ConstructProps): void
}

interface ImageList_ConstructProps extends List_ConstructProps {
}

interface ImageList {

    // Own fields of Libosinfo-1.0.Libosinfo.ImageList

    parent_instance: List
    priv: ImageListPrivate

    // Class property signals of Libosinfo-1.0.Libosinfo.ImageList

    connect(sigName: "notify::element-type", callback: (($obj: ImageList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: ImageList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImageList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.ImageList

    static name: string
    static $gtype: GObject.GType<ImageList>

    // Constructors of Libosinfo-1.0.Libosinfo.ImageList

    constructor(config?: ImageList_ConstructProps) 
    /**
     * Construct a new image list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new image list that is initially empty.
     * @constructor 
     */
    static new(): ImageList
    _init(config?: ImageList_ConstructProps): void
}

interface InstallConfig_ConstructProps extends Entity_ConstructProps {
}

interface InstallConfig {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallConfig

    parent_instance: Entity
    priv: InstallConfigPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.InstallConfig

    get_admin_password(): string
    get_avatar_disk(): string
    get_avatar_location(): string
    get_driver_signing(): boolean
    get_hardware_arch(): string
    get_hostname(): string
    /**
     * Returns the URL the script will use to perform the installation.
     */
    get_installation_url(): string
    get_l10n_keyboard(): string
    get_l10n_language(): string
    get_l10n_timezone(): string
    get_post_install_drivers_disk(): string
    get_post_install_drivers_location(): string
    get_pre_install_drivers_disk(): string
    get_pre_install_drivers_location(): string
    get_reg_login(): string
    get_reg_password(): string
    get_reg_product_key(): string
    get_script_disk(): string
    get_target_disk(): string
    get_user_administrator(): boolean
    get_user_autologin(): boolean
    get_user_login(): string
    get_user_password(): string
    get_user_realname(): string
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_ADMIN_PASSWORD parameter
     * @param password the administrator password to be set
     */
    set_admin_password(password: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_AVATAR_DISK parameter.
     * 
     * Please read documentation on #osinfo_install_config_set_target_disk() for
     * explanation on the format of `disk` string.
     * @param disk the avatar disk
     */
    set_avatar_disk(disk: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_AVATAR_LOCATION parameter.
     * 
     * Note that the format of this string is dependent on the installer script
     * `config` is going to be used with. You can use
     * #osinfo_install_script_get_path_format() to find out which format
     * does the script expects this string to be in.
     * 
     * Also note that in case of #OSINFO_PATH_FORMAT_DOS, the drive/disk letter
     * and the leading ':' must not be included in the path.
     * @param location new location
     */
    set_avatar_location(location: string): void
    /**
     * If a script requires drivers to be signed, this function can be used to
     * disable that security feature. WARNING: Disabling driver signing may very
     * well mean disabling it permanently.
     * @param signing boolean value
     */
    set_driver_signing(signing: boolean): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_HARDWARE_ARCH parameter.
     * 
     * The list of valid architectures are part of osinfo.rng schema
     * @param arch the hardware architecture
     */
    set_hardware_arch(arch: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_HOSTNAME parameter.
     * 
     * Note that some operating systems have restrictions on maximum number of, and
     * allowed characters in hostname (or its equivalent) so it is highly
     * recommended that you keep the actual hostname less than or equal to 15
     * characters long and make sure that it does not contain any characters other
     * than ASCII alphanumeric and '-'. Otherwise unattended installation might
     * fail.
     * @param hostname the desired hostname
     */
    set_hostname(hostname: string): void
    /**
     * When performing a tree based installation the script will need the installation
     * URL to be set, whenever the installation is performed from a non canonical place.
     * @param url the URL used to perform the installation
     */
    set_installation_url(url: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_L10N_KEYBOARD parameter.
     * 
     * The expected format of this string is the same as
     * #osinfo_install_config_set_l10n_language function's 'language' parameter.
     * @param keyboard the keyboard
     */
    set_l10n_keyboard(keyboard: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_L10N_LANGUAGE parameter.
     * 
     * The expected format of this string is the gettext locale names standard:
     * 
     * https://www.gnu.org/savannah-checkouts/gnu/gettext/manual/html_node/Locale-Names.html
     * 
     * Encoding and variant are (at least for now) not supported. For example,
     * 'pt_BR' is accepted is accepted as the language codes for Brazilian Portuguese
     * but 'pt_BR.utf8' is not.
     * @param language the language
     */
    set_l10n_language(language: string): void
    /**
     * Set the #OSINFO_INSTALL_CONFIG_PROP_L10N_TIMEZONE parameter.
     * 
     * The expected format of this string is the tzdata names standard.
     * @param tz the timezone
     */
    set_l10n_timezone(tz: string): void
    /**
     * Specify the disk on which drivers to be installed at the end of installation,
     * are available.
     * 
     * Please read documentation on #osinfo_install_config_set_target_disk() for
     * explanation on the format of `disk` string.
     * 
     * NOTE: Not every install script supports post-installation of drivers. Use
     * #osinfo_install_script_get_can_post_install_drivers() to find out if an
     * install script supports it.
     * @param disk the target disk
     */
    set_post_install_drivers_disk(disk: string): void
    /**
     * Specify the disk on which drivers to be installed at the end of installation,
     * are available.
     * 
     * Please read documentation on #osinfo_install_config_set_avatar_location() for
     * explanation on the format of `location` string.
     * 
     * NOTE: Not every install script supports post-installation of drivers. Use
     * #osinfo_install_script_get_can_post_install_drivers() to find out if an
     * install script supports it.
     * @param location the location of avatar
     */
    set_post_install_drivers_location(location: string): void
    /**
     * Specify the disk on which drivers to be installed at the very beginning of
     * installation, are available. This is usually needed for devices for which the
     * OS in question does not have out of the box support for and devices are
     * required/preferred to be available during actual installation.
     * 
     * Please read documentation on #osinfo_install_config_set_target_disk() for
     * explanation on the format of `disk` string.
     * 
     * NOTE: Not every install script supports pre-installation of drivers. Use
     * #osinfo_install_script_get_can_pre_install_drivers() to find out if an
     * installer script supports it.
     * 
     * NOTE: Microsoft Windows XP requires pre-installation driver files to be
     * present in the script disk under the toplevel directory.
     * @param disk the disk
     */
    set_pre_install_drivers_disk(disk: string): void
    /**
     * Specify the location on which drivers to be installed at the very beginning of
     * installation, are available. Please read documentation on
     * #osinfo_install_config_set_pre_install_drivers_disk() for more information
     * about pre-installation of drivers.
     * 
     * Please read documentation on #osinfo_install_config_set_avatar_location() for
     * explanation on the format of `location` string.
     * @param location the location
     */
    set_pre_install_drivers_location(location: string): void
    /**
     * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_REG_LOGIN parameter.
     * @param name the registration login
     */
    set_reg_login(name: string): void
    /**
     * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_REG_PASSWORD parameter.
     * @param password the registration password
     */
    set_reg_password(password: string): void
    set_reg_product_key(key: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_SCRIPT_DISK parameter.
     * 
     * Please read documentation on #osinfo_install_config_set_target_disk() for
     * explanation on the format of `disk` string.
     * @param disk the disk
     */
    set_script_disk(disk: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_TARGET_DISK parameter.
     * 
     * Note that the format of this string is dependent on the installer script
     * `config` is going to be used with. You can use
     * #osinfo_install_script_get_path_format() to find out which format
     * does the script expects this string to be in. In case of
     * #OSINFO_PATH_FORMAT_UNIX unix device node names are expected, e.g "/dev/fd0".
     * In case of #OSINFO_PATH_FORMAT_DOS drive letters are expected, e.g "A".
     * @param disk the target disk
     */
    set_target_disk(disk: string): void
    /**
     * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_ADMIN parameter.
     * @param admin whether the user should be set as administrator or not
     */
    set_user_administrator(admin: boolean): void
    /**
     * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_AUTOLOGIN parameter.
     * @param autologin whether autologin should be set for the user or not
     */
    set_user_autologin(autologin: boolean): void
    /**
     * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_LOGIN parameter.
     * @param username the chosen username for the user log into the system
     */
    set_user_login(username: string): void
    /**
     * Sets the #OSINFO_INSTALL_CONFIG_PROP_USER_PASSWORD parameter
     * @param password the user password to be set
     */
    set_user_password(password: string): void
    /**
     * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_REALNAME parameter.
     * @param name the user real name to be displayed
     */
    set_user_realname(name: string): void

    // Class property signals of Libosinfo-1.0.Libosinfo.InstallConfig

    connect(sigName: "notify::id", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InstallConfig extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfig

    static name: string
    static $gtype: GObject.GType<InstallConfig>

    // Constructors of Libosinfo-1.0.Libosinfo.InstallConfig

    constructor(config?: InstallConfig_ConstructProps) 
    /**
     * Construct a new install configuration with default values for
     * language, keyboard, timezone and admin password. The default values
     * are to use an 'en_US' language and keyboard, and an 'America/New_York'
     * timezone. The admin password is set to a random 8 character password.
     * @constructor 
     * @param id the unique identifier
     */
    constructor(id: string) 
    /**
     * Construct a new install configuration with default values for
     * language, keyboard, timezone and admin password. The default values
     * are to use an 'en_US' language and keyboard, and an 'America/New_York'
     * timezone. The admin password is set to a random 8 character password.
     * @constructor 
     * @param id the unique identifier
     */
    static new(id: string): InstallConfig
    _init(config?: InstallConfig_ConstructProps): void
}

interface InstallConfigParam_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.InstallConfigParam

    /**
     * The name of the configuration parameter.
     */
    name?: string | null
    /**
     * The mapping between generic values and OS-specific values for this
     * configuration parameter
     */
    value_map?: Datamap | null
}

interface InstallConfigParam {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParam

    /**
     * The name of the configuration parameter.
     */
    readonly name: string
    /**
     * The policy of the configuration parameter.
     */
    readonly policy: InstallConfigParamPolicy
    /**
     * The mapping between generic values and OS-specific values for this
     * configuration parameter
     */
    value_map: Datamap

    // Own fields of Libosinfo-1.0.Libosinfo.InstallConfigParam

    parent_instance: Entity
    priv: InstallConfigParamPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.InstallConfigParam

    get_name(): string
    get_policy(): InstallConfigParamPolicy
    get_value_map(): Datamap
    is_optional(): boolean
    is_required(): boolean
    /**
     * After a call to osinfo_install_config_param_set_value_map(), `datamap` will
     * be used to transform values set for this parameter to OS-specific
     * values. A NULL `datamap` will disable transformations.
     * @param datamap a #OsinfoDatamap to transform values this parameter is set to, or NULL to disable transformations for this parameter
     */
    set_value_map(datamap: Datamap): void

    // Class property signals of Libosinfo-1.0.Libosinfo.InstallConfigParam

    connect(sigName: "notify::name", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::policy", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::policy", ...args: any[]): void
    connect(sigName: "notify::value-map", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-map", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-map", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InstallConfigParam extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParam

    static name: string
    static $gtype: GObject.GType<InstallConfigParam>

    // Constructors of Libosinfo-1.0.Libosinfo.InstallConfigParam

    constructor(config?: InstallConfigParam_ConstructProps) 
    /**
     * Construct a new configuration parameter for an #OsinfoInstallScript.
     * @constructor 
     * @param name the configuration parameter name
     */
    constructor(name: string) 
    /**
     * Construct a new configuration parameter for an #OsinfoInstallScript.
     * @constructor 
     * @param name the configuration parameter name
     */
    static new(name: string): InstallConfigParam
    _init(config?: InstallConfigParam_ConstructProps): void
}

interface InstallConfigParamList_ConstructProps extends List_ConstructProps {
}

interface InstallConfigParamList {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallConfigParamList

    parent_instance: List
    priv: InstallConfigParamListPrivate

    // Class property signals of Libosinfo-1.0.Libosinfo.InstallConfigParamList

    connect(sigName: "notify::element-type", callback: (($obj: InstallConfigParamList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: InstallConfigParamList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InstallConfigParamList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParamList

    static name: string
    static $gtype: GObject.GType<InstallConfigParamList>

    // Constructors of Libosinfo-1.0.Libosinfo.InstallConfigParamList

    constructor(config?: InstallConfigParamList_ConstructProps) 
    /**
     * Construct a new install_config_param list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new install_config_param list that is initially empty.
     * @constructor 
     */
    static new(): InstallConfigParamList
    _init(config?: InstallConfigParamList_ConstructProps): void
}

interface InstallScript_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.InstallScript

    preferred_injection_method?: InstallScriptInjectionMethod | null
    profile?: string | null
    template_data?: string | null
    template_uri?: string | null
}

interface InstallScript {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScript

    readonly avatar_format: AvatarFormat
    readonly installation_source: InstallScriptInstallationSource
    readonly path_format: PathFormat
    preferred_injection_method: InstallScriptInjectionMethod
    readonly product_key_format: string
    readonly profile: string
    readonly template_data: string
    readonly template_uri: string

    // Own fields of Libosinfo-1.0.Libosinfo.InstallScript

    parent_instance: Entity
    priv: InstallScriptPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.InstallScript

    /**
     * Creates an install script.
     * @param os the os
     * @param config the install script config
     * @param cancellable a #GCancellable, or %NULL
     */
    generate(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null): string
    /**
     * Asynchronous variant of #osinfo_install_script_generate(). From the callback,
     * call #osinfo_install_script_generate_finish() to conclude this call and get
     * the generated script.
     * 
     * If you are generating the script for a specific media, it is recommended that
     * you use #osinfo_install_script_generate_for_media_async() instead.
     * @param os the os
     * @param config the install script config
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    generate_async(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Some install scripts need to pass a command line to the kernel, Such install
     * scripts belong to OSs that provide paths to the kernel and initrd files that
     * can be used to directly boot
     * (http://wiki.qemu.org/download/qemu-doc.html#direct_005flinux_005fboot)
     * the OS in order to pass the needed commandline to it.
     * 
     * If you are generating the command line for a specific media, it is
     * recommended that you use
     * #osinfo_install_script_generate_command_line_for_media() instead.
     * 
     * If you are generating the command line for a specific tree, it is
     * recommended that you use
     * #osinfo_install_script_generate_command_line_for_tree() instead.
     * @param os the os entity
     * @param config the install script config
     */
    generate_command_line(os: Os, config: InstallConfig): string
    /**
     * Some install scripts need to pass a command line to the kernel, Such install
     * scripts belong to OSs that provide paths to the kernel and initrd files that
     * can be used to directly boot
     * (http://wiki.qemu.org/download/qemu-doc.html#direct_005flinux_005fboot)
     * the OS in order to pass the needed commandline to it.
     * 
     * The media `media` must have been identified successfully using
     * #osinfo_db_identify_media() before calling this function.
     * @param media the media
     * @param config the install script config
     */
    generate_command_line_for_media(media: Media, config: InstallConfig): string
    /**
     * Some install scripts need to pass a command line to the kernel, Such install
     * scripts belong to OSs that provide paths to the kernel and initrd files that
     * can be used to directly boot
     * (http://wiki.qemu.org/download/qemu-doc.html#direct_005flinux_005fboot)
     * the OS in order to pass the needed commandline to it.
     * 
     * The tree `tree` must have been identified successfully using
     * #osinfo_db_identify_tree() before calling this function.
     * @param tree the tree
     * @param config the install script config
     */
    generate_command_line_for_tree(tree: Tree, config: InstallConfig): string
    generate_finish(res: Gio.AsyncResult): string
    /**
     * Creates an install script. The media `media` must have been identified
     * successfully using #osinfo_db_identify_media() before calling this function.
     * @param media the media
     * @param config the install script config
     * @param cancellable a #GCancellable, or %NULL
     */
    generate_for_media(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null): string
    /**
     * Asynchronous variant of #osinfo_install_script_generate_for_media(). From the
     * callback, call #osinfo_install_script_generate_for_media_finish() to
     * conclude this call and get the generated script.
     * @param media the media
     * @param config the install script config
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    generate_for_media_async(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generate_for_media_finish(res: Gio.AsyncResult): string
    /**
     * Creates an install script. The tree `tree` must have been identified
     * successfully using #osinfo_db_identify_tree() before calling this function.
     * @param tree the tree
     * @param config the install script config
     * @param cancellable a #GCancellable, or %NULL
     */
    generate_for_tree(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null): string
    /**
     * Asynchronous variant of #osinfo_install_script_generate_for_tree(). From the
     * callback, call #osinfo_install_script_generate_for_tree_finish() to
     * conclude this call and get the generated script.
     * @param tree the tree
     * @param config the install script config
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    generate_for_tree_async(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generate_for_tree_finish(res: Gio.AsyncResult): string
    /**
     * Creates an install script that is written to the returned file.
     * @param os the os entity
     * @param config the install script config
     * @param output_dir the directory where the file containing the output script              will be written
     * @param cancellable a #GCancellable, or %NULL
     */
    generate_output(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File
    /**
     * Asynchronous variant of #osinfo_install_script_generate_output(). From the
     * callback, call #osinfo_install_script_generate_output_finish() to conclude
     * this call and get the generated script.
     * 
     * If you are generating the script for a specific media, it is recommended that
     * you use #osinfo_install_script_generate_output_for_media_async() instead.
     * @param os the os
     * @param config the install script config
     * @param output_dir the directory where the file containing the output script              will be written
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    generate_output_async(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generate_output_finish(res: Gio.AsyncResult): Gio.File
    /**
     * Creates an install script that is written to the returned file.
     * @param media the media
     * @param config the install script config
     * @param output_dir the directory where the file containing the output script              will be written
     * @param cancellable a #GCancellable, or %NULL
     */
    generate_output_for_media(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File
    /**
     * Asynchronous variant of #osinfo_install_script_generate_output_for_media().
     * From the callback, call
     * #osinfo_install_script_generate_output_for_media_finish() to conclude this
     * call and get the generated file.
     * @param media the media
     * @param config the install script config
     * @param output_dir the directory where the file containing the output script              will be written
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    generate_output_for_media_async(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generate_output_for_media_finish(res: Gio.AsyncResult): Gio.File
    /**
     * Creates an install script that is written to the returned file.
     * @param tree the tree
     * @param config the install script config
     * @param output_dir the directory where the file containing the output script              will be written
     * @param cancellable a #GCancellable, or %NULL
     */
    generate_output_for_tree(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File
    /**
     * Asynchronous variant of #osinfo_install_script_generate_output_for_tree().
     * From the callback, call
     * #osinfo_install_script_generate_output_for_tree_finish() to conclude this
     * call and get the generated file.
     * @param tree the tree
     * @param config the install script config
     * @param output_dir the directory where the file containing the output script              will be written
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    generate_output_for_tree_async(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generate_output_for_tree_finish(res: Gio.AsyncResult): Gio.File
    /**
     * Some install scripts have restrictions on the format of the user avatar. Use
     * this method to retrieve those restrictions in the form of an
     * #OsinfoAvatarFormat instance.
     */
    get_avatar_format(): AvatarFormat
    /**
     * Whether install script can install drivers at the very end of installation
     * This can be used for installing devices which the OS in question does not
     * have out of the box support.
     */
    get_can_post_install_drivers(): boolean
    /**
     * Whether install script can install drivers at the very beginning of
     * installation. This is needed for devices for which the OS in question does
     * not have out of the box support for and devices are required/preferred to be
     * available during actual installation.
     */
    get_can_pre_install_drivers(): boolean
    /**
     * Get a config param from the config param's list
     * @param name name of the parameter
     */
    get_config_param(name: string): InstallConfigParam
    /**
     * Get the list of valid config parameters for `script`.
     */
    get_config_param_list(): InstallScript[]
    /**
     * Get the list of valid config parameters for `script`.
     */
    get_config_params(): InstallConfigParamList
    /**
     * Some operating systems (as Windows) expect that script filename has
     * particular name to work.
     */
    get_expected_filename(): string
    /**
     * Retrieve the supported method to inject the script in to the installation process.
     */
    get_injection_methods(): InstallScriptInjectionMethod
    get_installation_source(): InstallScriptInstallationSource
    /**
     * Some install scripts cannot ensure that they work without an internet connection.
     */
    get_needs_internet(): boolean
    /**
     * Some operating systems are able to use any script filename, allowing the
     * application to set the filename as desired. libosinfo provides this
     * functionality by set the expected filename's prefix using
     * osinfo_install_script_set_output_prefix() function.
     */
    get_output_filename(): string
    get_output_prefix(): string
    /**
     * Returns the path format to be used for the files and disks which will
     * be used during the installation.
     */
    get_path_format(): PathFormat
    /**
     * If install script can install drivers at the end of installation, this
     * function retrieves the requirement about signed status of drivers.
     */
    get_post_install_drivers_signing_req(): DeviceDriverSigningReq
    /**
     * If install script can install drivers at the very beginning of installation,
     * this function retrieves the requirement about signed status of drivers.
     */
    get_pre_install_drivers_signing_req(): DeviceDriverSigningReq
    get_preferred_injection_method(): InstallScriptInjectionMethod
    /**
     * If this function returns a non-NULL string, it means that the `script`
     * requires you to specify product registration key through #OsinfoInstallConfig
     * instance passed to script generation methods.
     * 
     * The returned string specifies the expected format of the product key like this:
     * 
     * @ - any character
     * % - alphabet
     * # - numeric character
     * $ - alphanumeric character
     * 
     * All other characters represent themselves.
     * 
     * For example in case of installer for Microsoft Windows XP, you'll get
     * "$$$$$-$$$$$-$$$$$-$$$$$-$$$$$". That means a product key consists of 24
     * alphanumeric characters and 4 '-' characters at (0-based) indices 5, 11, 17
     * and 23.
     */
    get_product_key_format(): string
    /**
     * Returns a string representing the install script profile that's going to be
     * used.
     * 
     * The values supported are "jeos" for minimal installations and "desktop" for
     * workstation/desktop installations.
     */
    get_profile(): string
    /**
     * Returns the stylesheet data used to construct the install script.
     */
    get_template_data(): string
    /**
     * Returns the stylesheet URI used to construct the install script.
     */
    get_template_uri(): string
    /**
     * Returns whether the `script` has the `config_param` searched or not.
     * 
     * This code assumes that the 'id' and 'name' entity properties are the same.
     * @param config_param an #OsinfoInstallConfigParam
     */
    has_config_param(config_param: InstallConfigParam): boolean
    /**
     * Returns whether the `script` has a configuration parameter matching `name` or not.
     * @param name the configuration parameter name
     */
    has_config_param_name(name: string): boolean
    /**
     * Set the installation source to be used with the `script`.
     * @param source one of the installation sources: OSINFO_INSTALL_SCRIPT_INSTALLATION_SOURCE_MEDIA, OSINFO_INSTALL_SCRIPT_INSTALLATION_SOURCE_NETWORK
     */
    set_installation_source(source: InstallScriptInstallationSource): void
    /**
     * Mind that not all installers support any name for the installer scripts.
     * @param prefix a prefix to be added to the file generated
     */
    set_output_prefix(prefix: string): void
    /**
     * Set the preferred injection method to be used with the `script`
     * @param method one of the injection methods: OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_CDROM, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_DISK, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_FLOPPY, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_INITRD, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_WEB
     */
    set_preferred_injection_method(method: InstallScriptInjectionMethod): void

    // Class property signals of Libosinfo-1.0.Libosinfo.InstallScript

    connect(sigName: "notify::avatar-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar-format", ...args: any[]): void
    connect(sigName: "notify::installation-source", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installation-source", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::installation-source", ...args: any[]): void
    connect(sigName: "notify::path-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path-format", ...args: any[]): void
    connect(sigName: "notify::preferred-injection-method", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-injection-method", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-injection-method", ...args: any[]): void
    connect(sigName: "notify::product-key-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-key-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::product-key-format", ...args: any[]): void
    connect(sigName: "notify::profile", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::template-data", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template-data", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template-data", ...args: any[]): void
    connect(sigName: "notify::template-uri", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template-uri", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template-uri", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InstallScript extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScript

    static name: string
    static $gtype: GObject.GType<InstallScript>

    // Constructors of Libosinfo-1.0.Libosinfo.InstallScript

    constructor(config?: InstallScript_ConstructProps) 
    constructor(id: string) 
    static new(id: string): InstallScript
    /**
     * Construct a new install script from stylesheet data
     * @constructor 
     * @param id a unique identifier
     * @param profile the profile of script
     * @param templateData style sheet data
     */
    static new_data(id: string, profile: string, templateData: string): InstallScript
    /**
     * Construct a new install script from a stylesheet URI
     * @constructor 
     * @param id a unique identifier
     * @param profile the profile of script
     * @param templateUri style sheet URI
     */
    static new_uri(id: string, profile: string, templateUri: string): InstallScript
    _init(config?: InstallScript_ConstructProps): void
}

interface InstallScriptList_ConstructProps extends List_ConstructProps {
}

interface InstallScriptList {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallScriptList

    parent_instance: List
    priv: InstallScriptListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.InstallScriptList

    /**
     * Construct a new install_script list that is filled with install_scripts
     * from `source`
     */
    new_copy(): InstallScriptList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): InstallScriptList | List | any
    /**
     * Construct a new install_script list that is filled with install_scripts
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): InstallScriptList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): InstallScriptList | List | any
    /**
     * Construct a new install_script list that is filled with only the
     * install_scripts that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second install_script list to copy
     */
    new_intersection(sourceTwo: InstallScriptList): InstallScriptList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): InstallScriptList | List | any
    /**
     * Construct a new install_script list that is filled with all the
     * install_scripts that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second install_script list to copy
     */
    new_union(sourceTwo: InstallScriptList): InstallScriptList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): InstallScriptList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.InstallScriptList

    connect(sigName: "notify::element-type", callback: (($obj: InstallScriptList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: InstallScriptList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InstallScriptList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScriptList

    static name: string
    static $gtype: GObject.GType<InstallScriptList>

    // Constructors of Libosinfo-1.0.Libosinfo.InstallScriptList

    constructor(config?: InstallScriptList_ConstructProps) 
    /**
     * Construct a new install_script list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new install_script list that is initially empty.
     * @constructor 
     */
    static new(): InstallScriptList
    _init(config?: InstallScriptList_ConstructProps): void
}

interface List_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.List

    /**
     * The specialization of the list. The list will be
     * restricted to storing #OsinfoEntity objects of
     * the specified type.
     */
    element_type?: GObject.GType | null
}

interface List {

    // Own properties of Libosinfo-1.0.Libosinfo.List

    /**
     * The specialization of the list. The list will be
     * restricted to storing #OsinfoEntity objects of
     * the specified type.
     */
    readonly element_type: GObject.GType

    // Own fields of Libosinfo-1.0.Libosinfo.List

    parent_instance: GObject.Object
    priv: ListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.List

    /**
     * Adds a new entity to the list.
     * @param entity the entity to add to the list
     */
    add(entity: Entity): void
    /**
     * Adds all entities from `source` to `list`. Using one
     * of the constructors in a subclass is preferable
     * to this method.
     * @param source the list to add
     */
    add_all(source: List): void
    /**
     * Adds all entities from `source` which are matched by `filter`. Using one
     * of the constructors in a subclass is preferable
     * to this method.
     * @param source the source for elements
     * @param filter filter to process the source with
     */
    add_filtered(source: List, filter: Filter): void
    /**
     * Computes the intersection between `sourceOne` and `sourceTwo` and
     * adds the resulting list of entities to the `list`. Using one
     * of the constructors in a subclass is preferable
     * to this method.
     * @param sourceOne the first list to add
     * @param sourceTwo the second list to add
     */
    add_intersection(sourceOne: List, sourceTwo: List): void
    /**
     * Computes the union between `sourceOne` and `sourceTwo` and
     * adds the resulting list of entities to the `list`. Using one
     * of the constructors in a subclass is preferable
     * to this method.
     * @param sourceOne the first list to add
     * @param sourceTwo the second list to add
     */
    add_union(sourceOne: List, sourceTwo: List): void
    /**
     * Search the list looking for the entity with a matching
     * unique identifier.
     * @param id the unique identifier
     */
    find_by_id(id: string): Entity
    /**
     * Retrieves the type of the subclass of #OsinfoEntity
     * that may be stored in the list
     */
    get_element_type(): GObject.GType
    /**
     * Retrieve a linked list of all elements in the list.
     */
    get_elements(): Entity[]
    /**
     * Retrieves the number of elements currently stored
     * in the list
     */
    get_length(): number
    /**
     * Retrieves the element in the list at position `idx`. If
     * `idx` is less than zero, or greater than the number of
     * elements in the list, the results are undefined.
     * @param idx the list position to fetch
     */
    get_nth(idx: number): Entity
    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List

    // Class property signals of Libosinfo-1.0.Libosinfo.List

    connect(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class List extends GObject.Object {

    // Own properties of Libosinfo-1.0.Libosinfo.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of Libosinfo-1.0.Libosinfo.List

    constructor(config?: List_ConstructProps) 
    _init(config?: List_ConstructProps): void
}

interface Loader_ConstructProps extends GObject.Object_ConstructProps {
}

interface Loader {

    // Own fields of Libosinfo-1.0.Libosinfo.Loader

    parent_instance: GObject.Object
    priv: LoaderPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Loader

    /**
     * Retrieves the database being populated
     */
    get_db(): Db
    process_default_path(): void
    /**
     * Loads data from the local path.
     */
    process_local_path(): void
    /**
     * Loads data from the specified path. If the path
     * points to a file, that will be loaded as XML
     * Otherwise it can point to a directory which will
     * be recursively traversed, loading all files as XML.
     * @param path the fully qualified path
     */
    process_path(path: string): void
    /**
     * Loads data from the system path.
     */
    process_system_path(): void
    /**
     * Loads data from the specified URI. If the URI
     * points to a file, that will be loaded as XML
     * Otherwise it can point to a directory which will
     * be recursively traversed, loading all files as XML.
     * @param uri the data source URI
     */
    process_uri(uri: string): void
    /**
     * Loads data from user path.
     */
    process_user_path(): void

    // Class property signals of Libosinfo-1.0.Libosinfo.Loader

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Loader extends GObject.Object {

    // Own properties of Libosinfo-1.0.Libosinfo.Loader

    static name: string
    static $gtype: GObject.GType<Loader>

    // Constructors of Libosinfo-1.0.Libosinfo.Loader

    constructor(config?: Loader_ConstructProps) 
    /**
     * Create a new database loader
     * @constructor 
     */
    constructor() 
    /**
     * Create a new database loader
     * @constructor 
     */
    static new(): Loader
    _init(config?: Loader_ConstructProps): void
}

interface Media_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Media

    /**
     * Expected application ID (regular expression) for ISO9660 image/device.
     */
    application_id?: string | null
    /**
     * The target hardware architecture of this media.
     */
    architecture?: string | null
    /**
     * Whether the media should be ejected after the installation process.
     * 
     * Some distros need their media to not be ejected after the final reboot
     * during its installation process as some packages are installed after the
     * reboot (which may cause the media to be ejected, depending on the
     * application).
     */
    eject_after_install?: boolean | null
    /**
     * The path to the initrd image in the install tree.
     */
    initrd_path?: string | null
    /**
     * Whether media provides an installer for an OS.
     */
    installer?: boolean | null
    /**
     * If media is an installer, this property indicates the number of reboots
     * the installer takes before installation is complete.
     * 
     * This property is not applicable to media that has no installer. You can
     * use #osinfo_media_get_installer(or OsinfoMedia::installer) to check
     * that.
     * 
     * Warning: Some media allow you to install from live sessions, in which
     * case number of reboots *alone* is not a reliable method for tracking
     * installation.
     */
    installer_reboots?: number | null
    /**
     * Whether the media supports installation via an install-script.
     * 
     * Some distros provide a few different medias and not all the medias support
     * installation via an install script.
     */
    installer_script?: boolean | null
    /**
     * The path to the kernel image in the install tree.
     */
    kernel_path?: string | null
    /**
     * Whether media can boot directly an OS without any installations.
     */
    live?: boolean | null
    /**
     * Os information for the current media. For media stored in an
     * #OsinfoDb, it will be filled when the database is loaded, otherwise
     * the property will be filled after a successful call to
     * osinfo_db_identify_media().
     */
    os?: Os | null
    /**
     * Expected publisher ID (regular expression) for ISO9660 image/device.
     */
    publisher_id?: string | null
    /**
     * Expected system ID (regular expression) for ISO9660 image/device.
     */
    system_id?: string | null
    /**
     * The URL to this media.
     */
    url?: string | null
    /**
     * Expected volume ID (regular expression) for ISO9660 image/device.
     */
    volume_id?: string | null
    /**
     * Expected volume size, in bytes for ISO9660 image/device.
     */
    volume_size?: number | null
}

interface Media {

    // Own properties of Libosinfo-1.0.Libosinfo.Media

    /**
     * Expected application ID (regular expression) for ISO9660 image/device.
     */
    application_id: string
    /**
     * The target hardware architecture of this media.
     */
    architecture: string
    /**
     * Whether the media should be ejected after the installation process.
     * 
     * Some distros need their media to not be ejected after the final reboot
     * during its installation process as some packages are installed after the
     * reboot (which may cause the media to be ejected, depending on the
     * application).
     */
    eject_after_install: boolean
    /**
     * The path to the initrd image in the install tree.
     */
    initrd_path: string
    /**
     * Whether media provides an installer for an OS.
     */
    installer: boolean
    /**
     * If media is an installer, this property indicates the number of reboots
     * the installer takes before installation is complete.
     * 
     * This property is not applicable to media that has no installer. You can
     * use #osinfo_media_get_installer(or OsinfoMedia::installer) to check
     * that.
     * 
     * Warning: Some media allow you to install from live sessions, in which
     * case number of reboots *alone* is not a reliable method for tracking
     * installation.
     */
    installer_reboots: number
    /**
     * Whether the media supports installation via an install-script.
     * 
     * Some distros provide a few different medias and not all the medias support
     * installation via an install script.
     */
    installer_script: boolean
    /**
     * The path to the kernel image in the install tree.
     */
    kernel_path: string
    /**
     * If media is an installer, this property indicates the languages that
     * can be used during automatic installations.
     * 
     * On media that are not installers, this property will indicate the
     * languages that the user interface can be displayed in.
     * Use #osinfo_media_get_installer(or OsinfoMedia::installer) to know
     * if the media is an installer or not.
     */
    readonly languages: string[]
    /**
     * Whether media can boot directly an OS without any installations.
     */
    live: boolean
    /**
     * Os information for the current media. For media stored in an
     * #OsinfoDb, it will be filled when the database is loaded, otherwise
     * the property will be filled after a successful call to
     * osinfo_db_identify_media().
     */
    os: Os
    /**
     * Expected publisher ID (regular expression) for ISO9660 image/device.
     */
    publisher_id: string
    /**
     * Expected system ID (regular expression) for ISO9660 image/device.
     */
    system_id: string
    /**
     * The URL to this media.
     */
    url: string
    /**
     * Expected volume ID (regular expression) for ISO9660 image/device.
     */
    volume_id: string
    /**
     * Expected volume size, in bytes for ISO9660 image/device.
     */
    volume_size: number

    // Own fields of Libosinfo-1.0.Libosinfo.Media

    parent_instance: Entity
    priv: MediaPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Media

    /**
     * Adds an `script` to the specified `media`
     * @param script an #OsinfoInstallScript instance
     */
    add_install_script(script: InstallScript): void
    /**
     * If `media` is an ISO9660 image/device, this function retrieves the expected
     * application ID.
     * 
     * Note: In practice, this will usually not be the exact copy of the application
     * ID string on the ISO image/device but rather a regular expression that
     * matches it.
     */
    get_application_id(): string
    /**
     * Retrieves the target hardware architecture of the OS `media` provides.
     */
    get_architecture(): string
    /**
     * Whether `media` should ejected after the installation procces.
     */
    get_eject_after_install(): boolean
    /**
     * Retrieves the path to the initrd image in the install tree.
     * 
     * Note: This only applies to installer medias of 'linux' OS family.
     */
    get_initrd_path(): string
    get_install_script_list(): InstallScriptList
    /**
     * Whether `media` provides an installer for an OS.
     */
    get_installer(): boolean
    /**
     * If media is an installer, this method retrieves the number of reboots the
     * installer takes before installation is complete.
     * 
     * This function is not supposed to be called on media that has no installer.
     * You can use #osinfo_media_get_installer(or OsinfoMedia::installer) to check
     * that.
     * 
     * Warning: Some media allow you to install from live sessions, in which case
     * number of reboots *alone* is not a reliable method for tracking installation.
     */
    get_installer_reboots(): number
    /**
     * Retrieves the path to the kernel image in the install tree.
     * 
     * Note: This only applies to installer medias of 'linux' OS family.
     */
    get_kernel_path(): string
    /**
     * If media is an installer, this property indicates the languages that
     * can be used during automatic installations.
     * 
     * On media that are not installers, this property will indicate the
     * languages that the user interface can be displayed in.
     * Use #osinfo_media_get_installer(or OsinfoMedia::installer) to know
     * if the media is an installer or not.
     */
    get_languages(): string[]
    /**
     * Whether `media` can boot directly an OS without any installations.
     */
    get_live(): boolean
    get_os(): Os
    /**
     * Gets the variants of the associated operating system.
     */
    get_os_variants(): OsVariantList
    /**
     * If `media` is an ISO9660 image/device, this function retrieves the expected
     * publisher ID.
     * 
     * Note: In practice, this will usually not be the exact copy of the publisher
     * ID string on the ISO image/device but rather a regular expression that
     * matches it.
     */
    get_publisher_id(): string
    /**
     * If `media` is an ISO9660 image/device, this function retrieves the expected
     * system ID.
     * 
     * Note: In practice, this will usually not be the exact copy of the system ID
     * string on the ISO image/device but rather a regular expression that matches
     * it.
     */
    get_system_id(): string
    /**
     * The URL to the `media`
     */
    get_url(): string
    /**
     * If `media` is an ISO9660 image/device, this function retrieves the expected
     * volume ID.
     * 
     * Note: In practice, this will usually not be the exact copy of the volume ID
     * string on the ISO image/device but rather a regular expression that matches
     * it.
     */
    get_volume_id(): string
    get_volume_size(): number
    is_bootable(): boolean
    /**
     * Whether `media` supports installation using install scripts.
     */
    supports_installer_script(): boolean

    // Class property signals of Libosinfo-1.0.Libosinfo.Media

    connect(sigName: "notify::application-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::architecture", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::architecture", ...args: any[]): void
    connect(sigName: "notify::eject-after-install", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eject-after-install", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eject-after-install", ...args: any[]): void
    connect(sigName: "notify::initrd-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::initrd-path", ...args: any[]): void
    connect(sigName: "notify::installer", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::installer", ...args: any[]): void
    connect(sigName: "notify::installer-reboots", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-reboots", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::installer-reboots", ...args: any[]): void
    connect(sigName: "notify::installer-script", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-script", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::installer-script", ...args: any[]): void
    connect(sigName: "notify::kernel-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kernel-path", ...args: any[]): void
    connect(sigName: "notify::languages", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::languages", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::languages", ...args: any[]): void
    connect(sigName: "notify::live", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::live", ...args: any[]): void
    connect(sigName: "notify::os", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::os", ...args: any[]): void
    connect(sigName: "notify::publisher-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::publisher-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::volume-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume-id", ...args: any[]): void
    connect(sigName: "notify::volume-size", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-size", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume-size", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Media extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Media

    static name: string
    static $gtype: GObject.GType<Media>

    // Constructors of Libosinfo-1.0.Libosinfo.Media

    constructor(config?: Media_ConstructProps) 
    constructor(id: string, architecture: string) 
    static new(id: string, architecture: string): Media
    _init(config?: Media_ConstructProps): void
    /**
     * Creates a new #OsinfoMedia for installation media at `location`. The `location`
     * could be a http:// or a https:// URI or a local path.
     * 
     * NOTE: Currently this only works for ISO images/devices.
     * @param location the location of an installation media
     * @param cancellable a #GCancellable, or %NULL
     */
    static create_from_location(location: string, cancellable: Gio.Cancellable | null): Media
    /**
     * Asynchronous variant of #osinfo_media_create_from_location.
     * @param location the location of an installation media
     * @param priority the I/O priority of the request
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    static create_from_location_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous media object creation process started with
     * #osinfo_media_create_from_location_async.
     * @param res a #GAsyncResult
     */
    static create_from_location_finish(res: Gio.AsyncResult): Media
    /**
     * Creates a new #OsinfoMedia for installation media at `location`. The `location`
     * could be a http:// or a https:// URI or a local path.
     * 
     * NOTE: Currently this only works for ISO images/devices.
     * @param location the location of an installation media
     * @param cancellable a #GCancellable, or %NULL
     * @param flags An #OsinfoMediaDetectFlag, or 0.
     */
    static create_from_location_with_flags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media
    /**
     * Asynchronous variant of #osinfo_media_create_from_location_with_flags.
     * @param location the location of an installation media
     * @param priority the I/O priority of the request
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     * @param flags An #OsinfoMediaDetectFlag, or 0.
     */
    static create_from_location_with_flags_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, flags: number): void
    /**
     * Finishes an asynchronous media object creation process started with
     * #osinfo_media_create_from_location_async.
     * @param res a #GAsyncResult
     */
    static create_from_location_with_flags_finish(res: Gio.AsyncResult): Media
}

interface MediaList_ConstructProps extends List_ConstructProps {
}

interface MediaList {

    // Own fields of Libosinfo-1.0.Libosinfo.MediaList

    parent_instance: List
    priv: MediaListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.MediaList

    /**
     * Construct a new media list that is filled with medias
     * from `source`
     */
    new_copy(): MediaList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): MediaList | List | any
    /**
     * Construct a new media list that is filled with medias
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): MediaList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): MediaList | List | any
    /**
     * Construct a new media list that is filled with only the
     * medias that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second media list to copy
     */
    new_intersection(sourceTwo: MediaList): MediaList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): MediaList | List | any
    /**
     * Construct a new media list that is filled with all the
     * medias that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second media list to copy
     */
    new_union(sourceTwo: MediaList): MediaList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): MediaList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.MediaList

    connect(sigName: "notify::element-type", callback: (($obj: MediaList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: MediaList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.MediaList

    static name: string
    static $gtype: GObject.GType<MediaList>

    // Constructors of Libosinfo-1.0.Libosinfo.MediaList

    constructor(config?: MediaList_ConstructProps) 
    /**
     * Construct a new media list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new media list that is initially empty.
     * @constructor 
     */
    static new(): MediaList
    _init(config?: MediaList_ConstructProps): void
}

interface Os_ConstructProps extends Product_ConstructProps {
}

interface Os {

    // Own properties of Libosinfo-1.0.Libosinfo.Os

    /**
     * The username to be passed to the cloud-init program.
     */
    readonly cloud_image_username: string
    /**
     * The generic distro this OS belongs to, for example fedora, windows,
     * solaris, freebsd etc.
     */
    readonly distro: string
    /**
     * The generic family this OS belongs to, based upon its kernel,
     * for example linux, winnt, solaris, freebsd etc.
     */
    readonly family: string
    /**
     * The argument to be passed to kernel command line when performing a
     * tree based installation of this OS.
     */
    readonly kernel_url_argument: string

    // Own fields of Libosinfo-1.0.Libosinfo.Os

    parent_instance: Product
    priv: OsPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Os

    /**
     * Associated a device with an operating system.  The
     * returned #OsinfoDeviceLink can be used to record
     * extra metadata against the link
     * @param dev the device to associate with
     */
    add_device(dev: Device): DeviceLink
    /**
     * Adds `driver` to the list of device drivers of operating system `os`.
     * @param driver the device driver to add
     */
    add_device_driver(driver: DeviceDriver): void
    /**
     * Adds `firmware` to the list of firmwares of operating system `os`.
     * @param firmware the firmware to add
     */
    add_firmware(firmware: Firmware): void
    /**
     * Adds an installed image `image` to operating system `os`.
     * @param image the image to add
     */
    add_image(image: Image): void
    /**
     * Adds `script` to the list of scripts of operating system `os`.
     * @param script the install script to add
     */
    add_install_script(script: InstallScript): void
    /**
     * Adds `resources` to list of maximum resources of operating system `os`.
     * @param resources the resources to add
     */
    add_maximum_resources(resources: Resources): void
    /**
     * Adds installation media `media` to operating system `os`.
     * @param media the media to add
     */
    add_media(media: Media): void
    /**
     * Adds `resources` to list of minimum resources of operating system `os`.
     * @param resources the resources to add
     */
    add_minimum_resources(resources: Resources): void
    /**
     * Adds `resources` to list of resources needed for network installing an
     * operating system `os`.
     * @param resources the resources to add
     */
    add_network_install_resources(resources: Resources): void
    /**
     * Adds `resources` to list of recommended resources of operating system `os`.
     * @param resources the resources to add
     */
    add_recommended_resources(resources: Resources): void
    /**
     * Adds installation tree `tree` to operating system `os`.
     * @param tree the tree to add
     */
    add_tree(tree: Tree): void
    /**
     * Adds a variant `variant` to operating system `os`.
     * @param variant the variant to add
     */
    add_variant(variant: OsVariant): void
    find_install_script(profile: string): InstallScript
    /**
     * Get all devicelinks matching a given filter but unlike
     * osinfo_os_get_device_links this function also retrieves devices from all
     * derived and cloned operating systems.
     * @param filter an optional device property filter
     */
    get_all_device_links(filter: Filter | null): DeviceLinkList
    /**
     * Get all devices matching a given filter but unlike osinfo_os_get_devices
     * this function also retrieves devices from all derived and cloned operating
     * systems.
     * @param filter an optional device property filter
     */
    get_all_devices(filter: Filter | null): DeviceList
    /**
     * Gets the username expected to be passed to the cloud image when performing
     * installation.
     */
    get_cloud_image_username(): string
    /**
     * Get the complete firmwares matching a given filter, including the non-supported ones.
     * @param filter an optional firmware property filter
     */
    get_complete_firmware_list(filter: Filter | null): FirmwareList
    /**
     * Gets list of all available device drivers for OS `os`.
     */
    get_device_drivers(): DeviceDriverList
    /**
     * Gets list of the highest priority device drivers for OS `os`.
     */
    get_device_drivers_prioritized(): DeviceDriverList
    /**
     * Get all devices matching a given filter. The filter
     * matches against the links, not the devices.
     * @param filter an optional device property filter
     */
    get_device_links(filter: Filter | null): DeviceLinkList
    /**
     * Get all devices matching a given filter
     * @param filter an optional device property filter
     */
    get_devices(filter: Filter | null): DeviceList
    /**
     * A utility function that gets devices found from the list of devices
     * `os` supports, for which the value of `property` is `value`.
     * @param property the property of interest
     * @param value the required value of property `property`
     * @param inherited Should devices from inherited and cloned OSs be included in the search.
     */
    get_devices_by_property(property: string, value: string, inherited: boolean): DeviceList
    /**
     * Retrieves the generic family the OS `os` belongs to, for example fedora,
     * ubuntu, windows, solaris, freebsd etc.
     */
    get_distro(): string
    /**
     * Retrieves the generic family the OS `os` belongs to, based upon its kernel,
     * for example linux, winnt, solaris, freebsd etc.
     */
    get_family(): string
    /**
     * Get all the supported firmwares matching a given filter
     * @param filter an optional firmware property filter
     */
    get_firmware_list(filter: Filter | null): FirmwareList
    /**
     * Get all installed images associated with operating system `os`.
     */
    get_image_list(): ImageList
    get_install_script_list(): InstallScriptList
    /**
     * Gets the argument expected to be passed to the kernel command line when
     * performing a tree based installation.
     */
    get_kernel_url_argument(): string
    /**
     * Get the list of maximum resources for the operating system `os`.
     */
    get_maximum_resources(): ResourcesList
    /**
     * Get all installation medias associated with operating system `os`.
     */
    get_media_list(): MediaList
    /**
     * Get the list of minimum required resources for the operating system `os`.
     */
    get_minimum_resources(): ResourcesList
    /**
     * Get the list of resources needed for network installing an operating system
     * `os`.
     */
    get_network_install_resources(): ResourcesList
    /**
     * Get the list of recommended resources for the operating system `os`.
     */
    get_recommended_resources(): ResourcesList
    /**
     * Use this to determine the release status of the `os`.
     */
    get_release_status(): ReleaseStatus
    /**
     * Get all installation trees associated with operating system `os`.
     */
    get_tree_list(): TreeList
    /**
     * Gets all known variants of operating system `os`.
     */
    get_variant_list(): OsVariantList

    // Class property signals of Libosinfo-1.0.Libosinfo.Os

    connect(sigName: "notify::cloud-image-username", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-image-username", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cloud-image-username", ...args: any[]): void
    connect(sigName: "notify::distro", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distro", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::kernel-url-argument", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-url-argument", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kernel-url-argument", ...args: any[]): void
    connect(sigName: "notify::codename", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codename", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::short-id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::short-id", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Os extends Product {

    // Own properties of Libosinfo-1.0.Libosinfo.Os

    static name: string
    static $gtype: GObject.GType<Os>

    // Constructors of Libosinfo-1.0.Libosinfo.Os

    constructor(config?: Os_ConstructProps) 
    /**
     * Create a new operating system entity
     * @constructor 
     * @param id a unique identifier
     */
    constructor(id: string) 
    /**
     * Create a new operating system entity
     * @constructor 
     * @param id a unique identifier
     */
    static new(id: string): Os
    _init(config?: Os_ConstructProps): void
}

interface OsList_ConstructProps extends ProductList_ConstructProps {
}

interface OsList {

    // Own fields of Libosinfo-1.0.Libosinfo.OsList

    parent_instance: ProductList
    priv: OsListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.OsList

    /**
     * Construct a new os list that is filled with oss
     * from `source`
     */
    new_copy(): OsList

    // Overloads of new_copy

    /**
     * Construct a new os list that is filled with oss
     * from `source`
     */
    new_copy(): ProductList
    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): OsList | ProductList | List | any
    /**
     * Construct a new os list that is filled with oss
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): OsList

    // Overloads of new_filtered

    /**
     * Construct a new os list that is filled with oss
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): ProductList
    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): OsList | ProductList | List | any
    /**
     * Construct a new os list that is filled with only the
     * oss that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_intersection(sourceTwo: OsList): OsList

    // Overloads of new_intersection

    /**
     * Construct a new os list that is filled with only the
     * oss that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_intersection(sourceTwo: ProductList): ProductList
    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): OsList | ProductList | List | any
    /**
     * Construct a new os list that is filled with all the
     * oss that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_union(sourceTwo: OsList): OsList

    // Overloads of new_union

    /**
     * Construct a new os list that is filled with all the
     * oss that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_union(sourceTwo: ProductList): ProductList
    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): OsList | ProductList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.OsList

    connect(sigName: "notify::element-type", callback: (($obj: OsList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: OsList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OsList extends ProductList {

    // Own properties of Libosinfo-1.0.Libosinfo.OsList

    static name: string
    static $gtype: GObject.GType<OsList>

    // Constructors of Libosinfo-1.0.Libosinfo.OsList

    constructor(config?: OsList_ConstructProps) 
    /**
     * Construct a new os list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new os list that is initially empty.
     * @constructor 
     */
    static new(): OsList

    // Overloads of new

    /**
     * Construct a new os list that is initially empty.
     * @constructor 
     */
    static new(): ProductList
    _init(config?: OsList_ConstructProps): void
}

interface OsVariant_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.OsVariant

    /**
     * The name to this variant.
     */
    name?: string | null
}

interface OsVariant {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariant

    /**
     * The name to this variant.
     */
    name: string

    // Own fields of Libosinfo-1.0.Libosinfo.OsVariant

    parent_instance: Entity
    priv: OsVariantPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.OsVariant

    /**
     * The name of the `variant`
     */
    get_name(): string

    // Class property signals of Libosinfo-1.0.Libosinfo.OsVariant

    connect(sigName: "notify::name", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OsVariant extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariant

    static name: string
    static $gtype: GObject.GType<OsVariant>

    // Constructors of Libosinfo-1.0.Libosinfo.OsVariant

    constructor(config?: OsVariant_ConstructProps) 
    /**
     * Creates a new os variant
     * @constructor 
     * @param id the id of the os variant to be created
     */
    constructor(id: string) 
    /**
     * Creates a new os variant
     * @constructor 
     * @param id the id of the os variant to be created
     */
    static new(id: string): OsVariant
    _init(config?: OsVariant_ConstructProps): void
}

interface OsVariantList_ConstructProps extends List_ConstructProps {
}

interface OsVariantList {

    // Own fields of Libosinfo-1.0.Libosinfo.OsVariantList

    parent_instance: List
    priv: OsVariantListPrivate

    // Class property signals of Libosinfo-1.0.Libosinfo.OsVariantList

    connect(sigName: "notify::element-type", callback: (($obj: OsVariantList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: OsVariantList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OsVariantList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariantList

    static name: string
    static $gtype: GObject.GType<OsVariantList>

    // Constructors of Libosinfo-1.0.Libosinfo.OsVariantList

    constructor(config?: OsVariantList_ConstructProps) 
    /**
     * Construct a new install_variant list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new install_variant list that is initially empty.
     * @constructor 
     */
    static new(): OsVariantList
    _init(config?: OsVariantList_ConstructProps): void
}

interface Platform_ConstructProps extends Product_ConstructProps {
}

interface Platform {

    // Own fields of Libosinfo-1.0.Libosinfo.Platform

    parent_instance: Product
    priv: PlatformPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Platform

    /**
     * Associate a device with a platform. The returned #OsinfoDeviceLink
     * can be used to record extra metadata against the link
     * @param dev the device to associate
     */
    add_device(dev: Device): DeviceLink
    /**
     * Get all platforms matching a given filter but unlike
     * osinfo_platform_get_devices this function also retrieves devices from
     * all derived and upgraded platforms.
     * @param filter an optional device property filter
     */
    get_all_devices(filter: Filter | null): DeviceList
    /**
     * Retrieve all the associated devices matching the filter.
     * The filter matches against the link, not the device.
     * @param filter an optional filter
     */
    get_device_links(filter: Filter | null): DeviceLinkList
    /**
     * Retrieve all the associated devices matching the filter.
     * The filter matches against the device, not the link.
     * @param filter an optional filter
     */
    get_devices(filter: Filter | null): DeviceList

    // Class property signals of Libosinfo-1.0.Libosinfo.Platform

    connect(sigName: "notify::codename", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codename", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::short-id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::short-id", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Platform extends Product {

    // Own properties of Libosinfo-1.0.Libosinfo.Platform

    static name: string
    static $gtype: GObject.GType<Platform>

    // Constructors of Libosinfo-1.0.Libosinfo.Platform

    constructor(config?: Platform_ConstructProps) 
    /**
     * Create a new platform entity
     * @constructor 
     * @param id a unique identifier
     */
    constructor(id: string) 
    /**
     * Create a new platform entity
     * @constructor 
     * @param id a unique identifier
     */
    static new(id: string): Platform
    _init(config?: Platform_ConstructProps): void
}

interface PlatformList_ConstructProps extends ProductList_ConstructProps {
}

interface PlatformList {

    // Own fields of Libosinfo-1.0.Libosinfo.PlatformList

    parent_instance: ProductList
    priv: PlatformListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.PlatformList

    /**
     * Construct a new platform list that is filled with platforms
     * from `source`
     */
    new_copy(): PlatformList

    // Overloads of new_copy

    /**
     * Construct a new os list that is filled with oss
     * from `source`
     */
    new_copy(): ProductList
    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): PlatformList | ProductList | List | any
    /**
     * Construct a new platform list that is filled with platforms
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): PlatformList

    // Overloads of new_filtered

    /**
     * Construct a new os list that is filled with oss
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): ProductList
    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): PlatformList | ProductList | List | any
    /**
     * Construct a new platform list that is filled with only the
     * platforms that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second platform list to copy
     */
    new_intersection(sourceTwo: PlatformList): PlatformList

    // Overloads of new_intersection

    /**
     * Construct a new os list that is filled with only the
     * oss that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_intersection(sourceTwo: ProductList): ProductList
    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): PlatformList | ProductList | List | any
    /**
     * Construct a new platform list that is filled with all the
     * platforms that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second platform list to copy
     */
    new_union(sourceTwo: PlatformList): PlatformList

    // Overloads of new_union

    /**
     * Construct a new os list that is filled with all the
     * oss that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_union(sourceTwo: ProductList): ProductList
    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): PlatformList | ProductList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.PlatformList

    connect(sigName: "notify::element-type", callback: (($obj: PlatformList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: PlatformList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlatformList extends ProductList {

    // Own properties of Libosinfo-1.0.Libosinfo.PlatformList

    static name: string
    static $gtype: GObject.GType<PlatformList>

    // Constructors of Libosinfo-1.0.Libosinfo.PlatformList

    constructor(config?: PlatformList_ConstructProps) 
    /**
     * Construct a new platform list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new platform list that is initially empty.
     * @constructor 
     */
    static new(): PlatformList

    // Overloads of new

    /**
     * Construct a new os list that is initially empty.
     * @constructor 
     */
    static new(): ProductList
    _init(config?: PlatformList_ConstructProps): void
}

interface Product_ConstructProps extends Entity_ConstructProps {
}

interface Product {

    // Own properties of Libosinfo-1.0.Libosinfo.Product

    /**
     * The codename of this product.
     */
    readonly codename: string
    /**
     * The URI of the logo of the product.
     */
    readonly logo: string
    /**
     * The name of this product.
     */
    readonly name: string
    /**
     * The short ID of this product.
     */
    readonly short_id: string
    /**
     * The Vendor of this product.
     */
    readonly vendor: string
    /**
     * The version of the product.
     */
    readonly version: string

    // Own fields of Libosinfo-1.0.Libosinfo.Product

    parent_instance: Entity
    priv: ProductPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Product

    /**
     * Add an association between two products
     * @param relshp the relationship
     * @param otherproduct the product to relate to
     */
    add_related(relshp: ProductRelationship, otherproduct: Product): void
    get_codename(): string
    get_eol_date(): GLib.Date
    get_eol_date_string(): string
    get_logo(): string
    get_name(): string
    /**
     * Get a list of products satisfying the requested
     * relationship
     * @param relshp the relationship to query
     */
    get_related(relshp: ProductRelationship): ProductList
    get_release_date(): GLib.Date
    get_release_date_string(): string
    get_short_id(): string
    /**
     * Retrieve all the short-ids associated with the product.
     */
    get_short_id_list(): string[]
    get_vendor(): string
    get_version(): string

    // Class property signals of Libosinfo-1.0.Libosinfo.Product

    connect(sigName: "notify::codename", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codename", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::short-id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::short-id", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Product extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Product

    static name: string
    static $gtype: GObject.GType<Product>

    // Constructors of Libosinfo-1.0.Libosinfo.Product

    constructor(config?: Product_ConstructProps) 
    _init(config?: Product_ConstructProps): void
}

interface ProductFilter_ConstructProps extends Filter_ConstructProps {
}

interface ProductFilter {

    // Own fields of Libosinfo-1.0.Libosinfo.ProductFilter

    parent_instance: Filter
    priv: ProductFilterPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.ProductFilter

    /**
     * Adds a constraint that matches products which
     * have a relationship `relshp` with `product`. Multiple constraints
     * can be set for the same `relshp` or `product,` in which case
     * all must match
     * @param relshp the relationship to filter on
     * @param product the target product to filter on
     */
    add_product_constraint(relshp: ProductRelationship, product: Product): number
    add_support_date_constraint(when: GLib.Date): void
    /**
     * Remove all constraints for the relationship `relshp`
     * @param relshp the relationship to clear
     */
    clear_product_constraint(relshp: ProductRelationship): void
    /**
     * Remove all relationship constraints
     */
    clear_product_constraints(): void
    /**
     * Retrieve a list of all operating systems that are
     * the target of constraint for the  relationship
     * `relshp`.
     * @param relshp a relationship to query
     */
    get_product_constraint_values(relshp: ProductRelationship): Product[]

    // Class property signals of Libosinfo-1.0.Libosinfo.ProductFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProductFilter extends Filter {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductFilter

    static name: string
    static $gtype: GObject.GType<ProductFilter>

    // Constructors of Libosinfo-1.0.Libosinfo.ProductFilter

    constructor(config?: ProductFilter_ConstructProps) 
    /**
     * Construct a new filter that matches all operating
     * systems
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new filter that matches all operating
     * systems
     * @constructor 
     */
    static new(): ProductFilter

    // Overloads of new

    /**
     * Construct a new filter that matches all entities
     * @constructor 
     */
    static new(): Filter
    _init(config?: ProductFilter_ConstructProps): void
}

interface ProductList_ConstructProps extends List_ConstructProps {
}

interface ProductList {

    // Own fields of Libosinfo-1.0.Libosinfo.ProductList

    parent_instance: List
    priv: ProductListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.ProductList

    /**
     * Construct a new os list that is filled with oss
     * from `source`
     */
    new_copy(): ProductList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): ProductList | List | any
    /**
     * Construct a new os list that is filled with oss
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): ProductList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): ProductList | List | any
    /**
     * Construct a new os list that is filled with only the
     * oss that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_intersection(sourceTwo: ProductList): ProductList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): ProductList | List | any
    /**
     * Construct a new os list that is filled with all the
     * oss that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second os list to copy
     */
    new_union(sourceTwo: ProductList): ProductList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): ProductList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.ProductList

    connect(sigName: "notify::element-type", callback: (($obj: ProductList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: ProductList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProductList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductList

    static name: string
    static $gtype: GObject.GType<ProductList>

    // Constructors of Libosinfo-1.0.Libosinfo.ProductList

    constructor(config?: ProductList_ConstructProps) 
    /**
     * Construct a new os list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new os list that is initially empty.
     * @constructor 
     */
    static new(): ProductList
    _init(config?: ProductList_ConstructProps): void
}

interface Resources_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Resources

    /**
     * The target hardware architecture to which these resources applies.
     */
    architecture?: string | null
    /**
     * The CPU frequency in hertz (Hz).
     */
    cpu?: number | null
    /**
     * The number of CPUs.
     */
    n_cpus?: number | null
    /**
     * The amount of Random Access Memory (RAM) in bytes.
     */
    ram?: number | null
    /**
     * The amount of storage space in bytes.
     */
    storage?: number | null
}

interface Resources {

    // Own properties of Libosinfo-1.0.Libosinfo.Resources

    /**
     * The target hardware architecture to which these resources applies.
     */
    readonly architecture: string
    /**
     * The CPU frequency in hertz (Hz).
     */
    cpu: number
    /**
     * The number of CPUs.
     */
    n_cpus: number
    /**
     * The amount of Random Access Memory (RAM) in bytes.
     */
    ram: number
    /**
     * The amount of storage space in bytes.
     */
    storage: number

    // Own fields of Libosinfo-1.0.Libosinfo.Resources

    parent_instance: Entity
    priv: ResourcesPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Resources

    /**
     * Retrieves the target hardware architecture to which `resources` applies. Some
     * operating systems specify the same requirements and recommendations for all
     * architectures. In such cases, the string returned by this call will be
     * #OSINFO_ARCHITECTURE_ALL.
     */
    get_architecture(): string
    /**
     * Retrieves the CPU frequency in hertz (Hz). Divide the value by #OSINFO_MEGAHERTZ if
     * you need this value in megahertz (MHz).
     */
    get_cpu(): number
    /**
     * Retrieves the number of CPUs.
     */
    get_n_cpus(): number
    /**
     * Retrieves the amount of Random Access Memory (RAM) in bytes. Divide the value
     * by #OSINFO_MEBIBYTES if you need this value in mebibytes.
     */
    get_ram(): number
    /**
     * Retrieves the amount of storage space in bytes. Divide the value by
     * #OSINFO_GIBIBYTES if you need this value in gibibytes.
     */
    get_storage(): number
    /**
     * Sets the CPU frequency.
     * @param cpu the CPU frequency in hertz (Hz)
     */
    set_cpu(cpu: number): void
    /**
     * Sets the number of CPUs.
     * @param n_cpus the number of CPUs
     */
    set_n_cpus(n_cpus: number): void
    /**
     * Sets the amount of RAM in bytes.
     * @param ram the amount of ram in bytes
     */
    set_ram(ram: number): void
    /**
     * Sets the amount of storage space.
     * @param storage the amount of storage in bytes
     */
    set_storage(storage: number): void

    // Class property signals of Libosinfo-1.0.Libosinfo.Resources

    connect(sigName: "notify::architecture", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::architecture", ...args: any[]): void
    connect(sigName: "notify::cpu", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cpu", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cpu", ...args: any[]): void
    connect(sigName: "notify::n-cpus", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-cpus", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-cpus", ...args: any[]): void
    connect(sigName: "notify::ram", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ram", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ram", ...args: any[]): void
    connect(sigName: "notify::storage", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Resources extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Resources

    static name: string
    static $gtype: GObject.GType<Resources>

    // Constructors of Libosinfo-1.0.Libosinfo.Resources

    constructor(config?: Resources_ConstructProps) 
    constructor(id: string, architecture: string) 
    static new(id: string, architecture: string): Resources
    _init(config?: Resources_ConstructProps): void
}

interface ResourcesList_ConstructProps extends List_ConstructProps {
}

interface ResourcesList {

    // Own fields of Libosinfo-1.0.Libosinfo.ResourcesList

    parent_instance: List
    priv: ResourcesListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.ResourcesList

    /**
     * Construct a new resources list that is filled with resources instances
     * from `source`
     */
    new_copy(): ResourcesList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): ResourcesList | List | any
    /**
     * Construct a new resources list that is filled with resources instances
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): ResourcesList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): ResourcesList | List | any
    /**
     * Construct a new resources list that is filled with only the
     * resources instances that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second resources list to copy
     */
    new_intersection(sourceTwo: ResourcesList): ResourcesList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): ResourcesList | List | any
    /**
     * Construct a new resources list that is filled with all the
     * resources instances that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second resources list to copy
     */
    new_union(sourceTwo: ResourcesList): ResourcesList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): ResourcesList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.ResourcesList

    connect(sigName: "notify::element-type", callback: (($obj: ResourcesList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: ResourcesList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResourcesList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.ResourcesList

    static name: string
    static $gtype: GObject.GType<ResourcesList>

    // Constructors of Libosinfo-1.0.Libosinfo.ResourcesList

    constructor(config?: ResourcesList_ConstructProps) 
    /**
     * Construct a new resources list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new resources list that is initially empty.
     * @constructor 
     */
    static new(): ResourcesList
    _init(config?: ResourcesList_ConstructProps): void
}

interface Tree_ConstructProps extends Entity_ConstructProps {

    // Own constructor properties of Libosinfo-1.0.Libosinfo.Tree

    /**
     * The target hardware architecture of this tree.
     */
    architecture?: string | null
    /**
     * The path to the boot ISO in the install tree
     */
    boot_iso_path?: string | null
    /**
     * Whether the tree has treeinfo or not
     */
    has_treeinfo?: boolean | null
    /**
     * The path to the initrd image in the install tree.
     */
    initrd_path?: string | null
    /**
     * The path to the kernel image in the install tree.
     */
    kernel_path?: string | null
    /**
     * Os information for the current tree. For tree stored in an
     * #OsinfoDb, it will be filled when the database is loaded, otherwise
     * the property will be filled after a successful call to
     * osinfo_db_identify_tree().
     */
    os?: Os | null
    /**
     * The treeinfo arch
     */
    treeinfo_arch?: string | null
    /**
     * The treeinfo family
     */
    treeinfo_family?: string | null
    /**
     * The treeinfo variant
     */
    treeinfo_variant?: string | null
    /**
     * The treeinfo version
     */
    treeinfo_version?: string | null
    /**
     * The URL to this tree.
     */
    url?: string | null
}

interface Tree {

    // Own properties of Libosinfo-1.0.Libosinfo.Tree

    /**
     * The target hardware architecture of this tree.
     */
    architecture: string
    /**
     * The path to the boot ISO in the install tree
     */
    boot_iso_path: string
    /**
     * Whether the tree has treeinfo or not
     */
    has_treeinfo: boolean
    /**
     * The path to the initrd image in the install tree.
     */
    initrd_path: string
    /**
     * The path to the kernel image in the install tree.
     */
    kernel_path: string
    /**
     * Os information for the current tree. For tree stored in an
     * #OsinfoDb, it will be filled when the database is loaded, otherwise
     * the property will be filled after a successful call to
     * osinfo_db_identify_tree().
     */
    os: Os
    /**
     * The treeinfo arch
     */
    treeinfo_arch: string
    /**
     * The treeinfo family
     */
    treeinfo_family: string
    /**
     * The treeinfo variant
     */
    treeinfo_variant: string
    /**
     * The treeinfo version
     */
    treeinfo_version: string
    /**
     * The URL to this tree.
     */
    url: string

    // Own fields of Libosinfo-1.0.Libosinfo.Tree

    parent_instance: Entity
    priv: TreePrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.Tree

    /**
     * Retrieves the target hardware architecture of the OS `tree` provides.
     */
    get_architecture(): string
    /**
     * Retrieves the path to the boot_iso image in the install tree.
     */
    get_boot_iso_path(): string
    /**
     * Retrieves the path to the initrd image in the install tree.
     * 
     * Note: This only applies to installer trees of 'linux' OS family.
     */
    get_initrd_path(): string
    /**
     * Retrieves the path to the kernel image in the install tree.
     * 
     * Note: This only applies to installer trees of 'linux' OS family.
     */
    get_kernel_path(): string
    get_os(): Os
    /**
     * Gets the variants of the associated operating system.
     */
    get_os_variants(): OsVariantList
    /**
     * If `tree` has treeinfo, this function retrieves the expected architecture.
     * 
     * Note: In practice, this will usually not be the exact copy of the
     * architecture but rather a regular expression that matches it.
     */
    get_treeinfo_arch(): string
    /**
     * If `tree` has treeinfo, this function retrieves the expected family.
     * 
     * Note: In practice, this will usually not be the exact copy of the family
     * but rather a regular expression that matches it.
     */
    get_treeinfo_family(): string
    /**
     * If `tree` has treeinfo, this function retrieves the expected variant.
     * 
     * Note: In practice, this will usually not be the exact copy of the variant
     * but rather a regular expression that matches it.
     */
    get_treeinfo_variant(): string
    /**
     * If `tree` has treeinfo, this function retrieves the expected version.
     * 
     * Note: In practice, this will usually not be the exact copy of version but
     * rather a regular expression that matches it.
     */
    get_treeinfo_version(): string
    /**
     * The URL to the `tree`
     */
    get_url(): string
    /**
     * Sets the #OsinfoOs associated to the #OsinfoTree instance.
     * @param os an #OsinfoOs instance
     */
    set_os(os: Os): void

    // Class property signals of Libosinfo-1.0.Libosinfo.Tree

    connect(sigName: "notify::architecture", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::architecture", ...args: any[]): void
    connect(sigName: "notify::boot-iso-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-iso-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boot-iso-path", ...args: any[]): void
    connect(sigName: "notify::has-treeinfo", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-treeinfo", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-treeinfo", ...args: any[]): void
    connect(sigName: "notify::initrd-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::initrd-path", ...args: any[]): void
    connect(sigName: "notify::kernel-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kernel-path", ...args: any[]): void
    connect(sigName: "notify::os", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::os", ...args: any[]): void
    connect(sigName: "notify::treeinfo-arch", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-arch", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::treeinfo-arch", ...args: any[]): void
    connect(sigName: "notify::treeinfo-family", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-family", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::treeinfo-family", ...args: any[]): void
    connect(sigName: "notify::treeinfo-variant", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-variant", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::treeinfo-variant", ...args: any[]): void
    connect(sigName: "notify::treeinfo-version", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-version", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::treeinfo-version", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tree extends Entity {

    // Own properties of Libosinfo-1.0.Libosinfo.Tree

    static name: string
    static $gtype: GObject.GType<Tree>

    // Constructors of Libosinfo-1.0.Libosinfo.Tree

    constructor(config?: Tree_ConstructProps) 
    /**
     * Create a new tree entity
     * @constructor 
     * @param id the id of the tree to be created
     * @param architecture the architecture of the tree to be created
     */
    constructor(id: string, architecture: string) 
    /**
     * Create a new tree entity
     * @constructor 
     * @param id the id of the tree to be created
     * @param architecture the architecture of the tree to be created
     */
    static new(id: string, architecture: string): Tree
    _init(config?: Tree_ConstructProps): void
    /**
     * Creates a new #OsinfoTree for installation tree at `location`. The `location`
     * could be a http:// or a https:// URI, or a local file.
     * 
     * NOTE: Currently this only works for trees with a .treeinfo file
     * @param location the location of an installation tree
     * @param cancellable a #GCancellable, or %NULL
     */
    static create_from_location(location: string, cancellable: Gio.Cancellable | null): Tree
    /**
     * Asynchronous variant of #osinfo_tree_create_from_location.
     * @param location the location of an installation tree
     * @param priority the I/O priority of the request
     * @param cancellable a #GCancellable, or %NULL
     * @param callback Function to call when result of this call is ready
     */
    static create_from_location_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous tree object creation process started with
     * #osinfo_tree_create_from_location_async.
     * @param res a #GAsyncResult
     */
    static create_from_location_finish(res: Gio.AsyncResult): Tree
    /**
     * Creates a new #OsinfoTree for installation tree represented by `treeinfo`.
     * @param treeinfo a string representing the .treeinfo content
     * @param location the location of the original `treeinfo`
     */
    static create_from_treeinfo(treeinfo: string, location: string): Tree
}

interface TreeList_ConstructProps extends List_ConstructProps {
}

interface TreeList {

    // Own fields of Libosinfo-1.0.Libosinfo.TreeList

    parent_instance: List
    priv: TreeListPrivate

    // Owm methods of Libosinfo-1.0.Libosinfo.TreeList

    /**
     * Construct a new tree list that is filled with trees
     * from `source`
     */
    new_copy(): TreeList

    // Overloads of new_copy

    /**
     * Construct a new list that is filled with elements from `source`
     */
    new_copy(): List
    new_copy(...args: any[]): any
    new_copy(...args: any[]): TreeList | List | any
    /**
     * Construct a new tree list that is filled with trees
     * from `source` that match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): TreeList

    // Overloads of new_filtered

    /**
     * Construct a new list that is filled with elements from `source` that
     * match `filter`
     * @param filter the filter to apply
     */
    new_filtered(filter: Filter): List
    new_filtered(...args: any[]): any
    new_filtered(args_or_filter: any[] | Filter): TreeList | List | any
    /**
     * Construct a new tree list that is filled with only the
     * trees that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second tree list to copy
     */
    new_intersection(sourceTwo: TreeList): TreeList

    // Overloads of new_intersection

    /**
     * Construct a new list that is filled with only the elements
     * that are present in both `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second list to copy
     */
    new_intersection(sourceTwo: List): List
    new_intersection(...args: any[]): any
    new_intersection(args_or_sourceTwo: any[] | List): TreeList | List | any
    /**
     * Construct a new tree list that is filled with all the
     * trees that are present in either `sourceOne` and `sourceTwo`.
     * @param sourceTwo the second tree list to copy
     */
    new_union(sourceTwo: TreeList): TreeList

    // Overloads of new_union

    /**
     * Construct a new list that is filled with all the that are present in
     * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
     * the same type.
     * @param sourceTwo the second list to copy
     */
    new_union(sourceTwo: List): List
    new_union(...args: any[]): any
    new_union(args_or_sourceTwo: any[] | List): TreeList | List | any

    // Class property signals of Libosinfo-1.0.Libosinfo.TreeList

    connect(sigName: "notify::element-type", callback: (($obj: TreeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: TreeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeList extends List {

    // Own properties of Libosinfo-1.0.Libosinfo.TreeList

    static name: string
    static $gtype: GObject.GType<TreeList>

    // Constructors of Libosinfo-1.0.Libosinfo.TreeList

    constructor(config?: TreeList_ConstructProps) 
    /**
     * Construct a new tree list that is initially empty.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new tree list that is initially empty.
     * @constructor 
     */
    static new(): TreeList
    _init(config?: TreeList_ConstructProps): void
}

interface AvatarFormatClass {

    // Own fields of Libosinfo-1.0.Libosinfo.AvatarFormatClass

    parent_class: EntityClass
}

abstract class AvatarFormatClass {

    // Own properties of Libosinfo-1.0.Libosinfo.AvatarFormatClass

    static name: string
}

interface AvatarFormatPrivate {
}

class AvatarFormatPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.AvatarFormatPrivate

    static name: string
}

interface DatamapClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DatamapClass

    parent_class: EntityClass
}

abstract class DatamapClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DatamapClass

    static name: string
}

interface DatamapListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DatamapListClass

    parent_class: ListClass
}

abstract class DatamapListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DatamapListClass

    static name: string
}

interface DatamapListPrivate {
}

class DatamapListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DatamapListPrivate

    static name: string
}

interface DatamapPrivate {
}

class DatamapPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DatamapPrivate

    static name: string
}

interface DbClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DbClass

    parent_class: GObject.ObjectClass
}

abstract class DbClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DbClass

    static name: string
}

interface DbPrivate {
}

class DbPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DbPrivate

    static name: string
}

interface DeploymentClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeploymentClass

    parent_class: EntityClass
}

abstract class DeploymentClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeploymentClass

    static name: string
}

interface DeploymentListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeploymentListClass

    parent_class: ListClass
}

abstract class DeploymentListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeploymentListClass

    static name: string
}

interface DeploymentListPrivate {
}

class DeploymentListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeploymentListPrivate

    static name: string
}

interface DeploymentPrivate {
}

class DeploymentPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeploymentPrivate

    static name: string
}

interface DeviceClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceClass

    parent_class: EntityClass
}

abstract class DeviceClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceClass

    static name: string
}

interface DeviceDriverClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceDriverClass

    parent_class: EntityClass
}

abstract class DeviceDriverClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceDriverClass

    static name: string
}

interface DeviceDriverListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceDriverListClass

    parent_class: ListClass
}

abstract class DeviceDriverListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceDriverListClass

    static name: string
}

interface DeviceDriverListPrivate {
}

class DeviceDriverListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceDriverListPrivate

    static name: string
}

interface DeviceDriverPrivate {
}

class DeviceDriverPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceDriverPrivate

    static name: string
}

interface DeviceLinkClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceLinkClass

    parent_class: EntityClass
}

abstract class DeviceLinkClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkClass

    static name: string
}

interface DeviceLinkFilterClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceLinkFilterClass

    parent_class: FilterClass
}

abstract class DeviceLinkFilterClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkFilterClass

    static name: string
}

interface DeviceLinkFilterPrivate {
}

class DeviceLinkFilterPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkFilterPrivate

    static name: string
}

interface DeviceLinkListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceLinkListClass

    parent_class: ListClass
}

abstract class DeviceLinkListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkListClass

    static name: string
}

interface DeviceLinkListPrivate {
}

class DeviceLinkListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkListPrivate

    static name: string
}

interface DeviceLinkPrivate {
}

class DeviceLinkPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceLinkPrivate

    static name: string
}

interface DeviceListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.DeviceListClass

    parent_class: ListClass
}

abstract class DeviceListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceListClass

    static name: string
}

interface DeviceListPrivate {
}

class DeviceListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DeviceListPrivate

    static name: string
}

interface DevicePrivate {
}

class DevicePrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.DevicePrivate

    static name: string
}

interface EntityClass {

    // Own fields of Libosinfo-1.0.Libosinfo.EntityClass

    parent_class: GObject.ObjectClass
}

abstract class EntityClass {

    // Own properties of Libosinfo-1.0.Libosinfo.EntityClass

    static name: string
}

interface EntityPrivate {
}

class EntityPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.EntityPrivate

    static name: string
}

interface FilterClass {

    // Own fields of Libosinfo-1.0.Libosinfo.FilterClass

    parent_class: GObject.ObjectClass
    matches: (filter: Filter, entity: Entity) => boolean
}

abstract class FilterClass {

    // Own properties of Libosinfo-1.0.Libosinfo.FilterClass

    static name: string
}

interface FilterPrivate {
}

class FilterPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.FilterPrivate

    static name: string
}

interface FirmwareClass {

    // Own fields of Libosinfo-1.0.Libosinfo.FirmwareClass

    parent_class: EntityClass
}

abstract class FirmwareClass {

    // Own properties of Libosinfo-1.0.Libosinfo.FirmwareClass

    static name: string
}

interface FirmwareListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.FirmwareListClass

    parent_class: ListClass
}

abstract class FirmwareListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.FirmwareListClass

    static name: string
}

interface FirmwareListPrivate {
}

class FirmwareListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.FirmwareListPrivate

    static name: string
}

interface FirmwarePrivate {
}

class FirmwarePrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.FirmwarePrivate

    static name: string
}

interface ImageClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ImageClass

    parent_class: EntityClass
}

abstract class ImageClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ImageClass

    static name: string
}

interface ImageListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ImageListClass

    parent_class: ListClass
}

abstract class ImageListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ImageListClass

    static name: string
}

interface ImageListPrivate {
}

class ImageListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ImageListPrivate

    static name: string
}

interface ImagePrivate {
}

class ImagePrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ImagePrivate

    static name: string
}

interface InstallConfigClass {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallConfigClass

    parent_class: EntityClass
}

abstract class InstallConfigClass {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigClass

    static name: string
}

interface InstallConfigParamClass {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallConfigParamClass

    parent_class: EntityClass
}

abstract class InstallConfigParamClass {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParamClass

    static name: string
}

interface InstallConfigParamListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallConfigParamListClass

    parent_class: ListClass
}

abstract class InstallConfigParamListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParamListClass

    static name: string
}

interface InstallConfigParamListPrivate {
}

class InstallConfigParamListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParamListPrivate

    static name: string
}

interface InstallConfigParamPrivate {
}

class InstallConfigParamPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigParamPrivate

    static name: string
}

interface InstallConfigPrivate {
}

class InstallConfigPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallConfigPrivate

    static name: string
}

interface InstallScriptClass {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallScriptClass

    parent_class: EntityClass
}

abstract class InstallScriptClass {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScriptClass

    static name: string
}

interface InstallScriptListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.InstallScriptListClass

    parent_class: ListClass
}

abstract class InstallScriptListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScriptListClass

    static name: string
}

interface InstallScriptListPrivate {
}

class InstallScriptListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScriptListPrivate

    static name: string
}

interface InstallScriptPrivate {
}

class InstallScriptPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.InstallScriptPrivate

    static name: string
}

interface ListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ListClass

    parent_class: GObject.ObjectClass
}

abstract class ListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ListClass

    static name: string
}

interface ListPrivate {
}

class ListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ListPrivate

    static name: string
}

interface LoaderClass {

    // Own fields of Libosinfo-1.0.Libosinfo.LoaderClass

    parent_class: GObject.ObjectClass
}

abstract class LoaderClass {

    // Own properties of Libosinfo-1.0.Libosinfo.LoaderClass

    static name: string
}

interface LoaderPrivate {
}

class LoaderPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.LoaderPrivate

    static name: string
}

interface MediaClass {

    // Own fields of Libosinfo-1.0.Libosinfo.MediaClass

    parent_class: EntityClass
}

abstract class MediaClass {

    // Own properties of Libosinfo-1.0.Libosinfo.MediaClass

    static name: string
}

interface MediaListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.MediaListClass

    parent_class: ListClass
}

abstract class MediaListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.MediaListClass

    static name: string
}

interface MediaListPrivate {
}

class MediaListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.MediaListPrivate

    static name: string
}

interface MediaPrivate {
}

class MediaPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.MediaPrivate

    static name: string
}

interface OsClass {

    // Own fields of Libosinfo-1.0.Libosinfo.OsClass

    parent_class: ProductClass
}

abstract class OsClass {

    // Own properties of Libosinfo-1.0.Libosinfo.OsClass

    static name: string
}

interface OsListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.OsListClass

    parent_class: ProductListClass
}

abstract class OsListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.OsListClass

    static name: string
}

interface OsListPrivate {
}

class OsListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.OsListPrivate

    static name: string
}

interface OsPrivate {
}

class OsPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.OsPrivate

    static name: string
}

interface OsVariantClass {

    // Own fields of Libosinfo-1.0.Libosinfo.OsVariantClass

    parent_class: EntityClass
}

abstract class OsVariantClass {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariantClass

    static name: string
}

interface OsVariantListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.OsVariantListClass

    parent_class: ListClass
}

abstract class OsVariantListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariantListClass

    static name: string
}

interface OsVariantListPrivate {
}

class OsVariantListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariantListPrivate

    static name: string
}

interface OsVariantPrivate {
}

class OsVariantPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.OsVariantPrivate

    static name: string
}

interface PlatformClass {

    // Own fields of Libosinfo-1.0.Libosinfo.PlatformClass

    parent_class: ProductClass
}

abstract class PlatformClass {

    // Own properties of Libosinfo-1.0.Libosinfo.PlatformClass

    static name: string
}

interface PlatformListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.PlatformListClass

    parent_class: ProductListClass
}

abstract class PlatformListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.PlatformListClass

    static name: string
}

interface PlatformListPrivate {
}

class PlatformListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.PlatformListPrivate

    static name: string
}

interface PlatformPrivate {
}

class PlatformPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.PlatformPrivate

    static name: string
}

interface ProductClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ProductClass

    parent_class: EntityClass
}

abstract class ProductClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductClass

    static name: string
}

interface ProductFilterClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ProductFilterClass

    parent_class: FilterClass
}

abstract class ProductFilterClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductFilterClass

    static name: string
}

interface ProductFilterPrivate {
}

class ProductFilterPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductFilterPrivate

    static name: string
}

interface ProductListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ProductListClass

    parent_class: ListClass
}

abstract class ProductListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductListClass

    static name: string
}

interface ProductListPrivate {
}

class ProductListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductListPrivate

    static name: string
}

interface ProductPrivate {
}

class ProductPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ProductPrivate

    static name: string
}

interface ResourcesClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ResourcesClass

    parent_class: EntityClass
}

abstract class ResourcesClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ResourcesClass

    static name: string
}

interface ResourcesListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.ResourcesListClass

    parent_class: ListClass
}

abstract class ResourcesListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.ResourcesListClass

    static name: string
}

interface ResourcesListPrivate {
}

class ResourcesListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ResourcesListPrivate

    static name: string
}

interface ResourcesPrivate {
}

class ResourcesPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.ResourcesPrivate

    static name: string
}

interface TreeClass {

    // Own fields of Libosinfo-1.0.Libosinfo.TreeClass

    parent_class: EntityClass
}

abstract class TreeClass {

    // Own properties of Libosinfo-1.0.Libosinfo.TreeClass

    static name: string
}

interface TreeListClass {

    // Own fields of Libosinfo-1.0.Libosinfo.TreeListClass

    parent_class: ListClass
}

abstract class TreeListClass {

    // Own properties of Libosinfo-1.0.Libosinfo.TreeListClass

    static name: string
}

interface TreeListPrivate {
}

class TreeListPrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.TreeListPrivate

    static name: string
}

interface TreePrivate {
}

class TreePrivate {

    // Own properties of Libosinfo-1.0.Libosinfo.TreePrivate

    static name: string
}

}
export default Libosinfo;