
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-packagekitglib-1.0-import.d.ts';
    
/**
 * PackageKitGlib-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * The authorization result
 */
export enum AuthorizeEnum {
    /**
     * Unknown authorization status
     */
    UNKNOWN,
    /**
     * Authorized
     */
    YES,
    /**
     * Not authorized
     */
    NO,
    /**
     * Interaction required for authorization
     */
    INTERACTIVE,
    LAST,
}
/**
 * Errors that can be thrown
 */
export enum ClientError {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    /**
     * the transaction failed authentication/authorization
     */
    FAILED_AUTH,
    /**
     * the transaction id was not pre-allocated (internal error)
     */
    NO_TID,
    /**
     * the transaction id has already been used (internal error)
     */
    ALREADY_TID,
    /**
     * the role was not set (internal error)
     */
    ROLE_UNKNOWN,
    /**
     * the PackageKit daemon failed to start
     */
    CANNOT_START_DAEMON,
    /**
     * the package_id is invalid
     */
    INVALID_INPUT,
    /**
     * the file is invalid
     */
    INVALID_FILE,
    /**
     * the action is not supported
     */
    NOT_SUPPORTED,
    /**
     * the simulation was declined by the user
     */
    DECLINED_SIMULATION,
    /**
     * the user declined interaction on the task
     */
    DECLINED_INTERACTION,
    LAST,
}
/**
 * Errors that can be thrown
 */
export enum ControlError {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    /**
     * the PackageKit daemon failed to start
     */
    CANNOT_START_DAEMON,
}
/**
 * The distro upgrade status
 */
export enum DistroUpgradeEnum {
    /**
     * Unknown disto upgrade state
     */
    UNKNOWN,
    /**
     * Upgraded to stable release
     */
    STABLE,
    /**
     * Upgraded to unstable release
     */
    UNSTABLE,
    LAST,
}
/**
 * The error type
 */
export enum ErrorEnum {
    UNKNOWN,
    /**
     * Out of memory
     */
    OOM,
    /**
     * No network access available
     */
    NO_NETWORK,
    /**
     * Request not supported
     */
    NOT_SUPPORTED,
    /**
     * Undefined internal error
     */
    INTERNAL_ERROR,
    /**
     * GPG encryption failure
     */
    GPG_FAILURE,
    /**
     * Invalid package ID provided
     */
    PACKAGE_ID_INVALID,
    /**
     * Requested package not installed
     */
    PACKAGE_NOT_INSTALLED,
    /**
     * Requested package not found
     */
    PACKAGE_NOT_FOUND,
    /**
     * Requested package already installed
     */
    PACKAGE_ALREADY_INSTALLED,
    /**
     * Failed to download package
     */
    PACKAGE_DOWNLOAD_FAILED,
    /**
     * Requested group not gound
     */
    GROUP_NOT_FOUND,
    /**
     * Invalid group list provided
     */
    GROUP_LIST_INVALID,
    /**
     * Failed to resolve dependencies
     */
    DEP_RESOLUTION_FAILED,
    /**
     * Invalid filter provides
     */
    FILTER_INVALID,
    /**
     * Failed to create thread
     */
    CREATE_THREAD_FAILED,
    /**
     * Error occurred during transaction
     */
    TRANSACTION_ERROR,
    /**
     * Transaction was cancelled
     */
    TRANSACTION_CANCELLED,
    /**
     * No cache available
     */
    NO_CACHE,
    /**
     * Requested repository not found
     */
    REPO_NOT_FOUND,
    /**
     * Not allowed to remove system package
     */
    CANNOT_REMOVE_SYSTEM_PACKAGE,
    /**
     * Process killed
     */
    PROCESS_KILL,
    FAILED_INITIALIZATION,
    FAILED_FINALISE,
    /**
     * Configuration is not valid
     */
    FAILED_CONFIG_PARSING,
    CANNOT_CANCEL,
    /**
     * Cannot get lock
     */
    CANNOT_GET_LOCK,
    /**
     * No packages to update
     */
    NO_PACKAGES_TO_UPDATE,
    /**
     * Cannot write repository configuration
     */
    CANNOT_WRITE_REPO_CONFIG,
    LOCAL_INSTALL_FAILED,
    /**
     * Bad GPG signature found
     */
    BAD_GPG_SIGNATURE,
    /**
     * Required GPG signature not found
     */
    MISSING_GPG_SIGNATURE,
    /**
     * Cannot install source package
     */
    CANNOT_INSTALL_SOURCE_PACKAGE,
    REPO_CONFIGURATION_ERROR,
    NO_LICENSE_AGREEMENT,
    /**
     * File conflicts detected
     */
    FILE_CONFLICTS,
    /**
     * Package conflict
     */
    PACKAGE_CONFLICTS,
    /**
     * Repository not available
     */
    REPO_NOT_AVAILABLE,
    INVALID_PACKAGE_FILE,
    /**
     * Package installation blocked
     */
    PACKAGE_INSTALL_BLOCKED,
    /**
     * Package corruption occurred
     */
    PACKAGE_CORRUPT,
    /**
     * All packages already installed
     */
    ALL_PACKAGES_ALREADY_INSTALLED,
    /**
     * Required file not found
     */
    FILE_NOT_FOUND,
    /**
     * Out of repository mirrors to try
     */
    NO_MORE_MIRRORS_TO_TRY,
    /**
     * No distribution upgrade path found
     */
    NO_DISTRO_UPGRADE_DATA,
    /**
     * Incompatible architecture found
     */
    INCOMPATIBLE_ARCHITECTURE,
    /**
     * Out of required disk space
     */
    NO_SPACE_ON_DEVICE,
    /**
     * Need to change media
     */
    MEDIA_CHANGE_REQUIRED,
    /**
     * Authorization failed
     */
    NOT_AUTHORIZED,
    /**
     * Update not found
     */
    UPDATE_NOT_FOUND,
    /**
     * Installation repository missing signature
     */
    CANNOT_INSTALL_REPO_UNSIGNED,
    /**
     * Update repository missing signature
     */
    CANNOT_UPDATE_REPO_UNSIGNED,
    /**
     * Cannot get file list
     */
    CANNOT_GET_FILELIST,
    /**
     * Cannot get package requirements
     */
    CANNOT_GET_REQUIRES,
    /**
     * Cannot disable reposoitory
     */
    CANNOT_DISABLE_REPOSITORY,
    RESTRICTED_DOWNLOAD,
    /**
     * Package failed to configure
     */
    PACKAGE_FAILED_TO_CONFIGURE,
    /**
     * Package failed to build
     */
    PACKAGE_FAILED_TO_BUILD,
    /**
     * Package failed to install
     */
    PACKAGE_FAILED_TO_INSTALL,
    /**
     * Package failed to remove
     */
    PACKAGE_FAILED_TO_REMOVE,
    UPDATE_FAILED_DUE_TO_RUNNING_PROCESS,
    PACKAGE_DATABASE_CHANGED,
    PROVIDE_TYPE_NOT_SUPPORTED,
    /**
     * Installtion root not suitable
     */
    INSTALL_ROOT_INVALID,
    /**
     * Cannot fetch sources
     */
    CANNOT_FETCH_SOURCES,
    /**
     * Cancelled due to higher priority task
     */
    CANCELLED_PRIORITY,
    /**
     * Transaction unfinished
     */
    UNFINISHED_TRANSACTION,
    /**
     * Required lock not available
     */
    LOCK_REQUIRED,
    REPO_ALREADY_SET,
    LAST,
}
/**
 * How the backend exited
 */
export enum ExitEnum {
    /**
     * Unknown exit status
     */
    UNKNOWN,
    /**
     * Backend exited successfully
     */
    SUCCESS,
    /**
     * Backend failed
     */
    FAILED,
    /**
     * Backend was cancelled
     */
    CANCELLED,
    /**
     * A repository encryption key needs installing
     */
    KEY_REQUIRED,
    /**
     * A EULA is required to be accepted
     */
    EULA_REQUIRED,
    /**
     * Backend was killed
     */
    KILLED,
    /**
     * Media change required
     */
    MEDIA_CHANGE_REQUIRED,
    NEED_UNTRUSTED,
    /**
     * Cancelled due to higher priority task
     */
    CANCELLED_PRIORITY,
    SKIP_TRANSACTION,
    /**
     * Package database requires repairing
     */
    REPAIR_REQUIRED,
    LAST,
}
/**
 * The filter types
 */
export enum FilterEnum {
    /**
     * Unknown filter
     */
    UNKNOWN,
    /**
     * No filter
     */
    NONE,
    /**
     * Filter for installed packages
     */
    INSTALLED,
    /**
     * Filter for not installed packages
     */
    NOT_INSTALLED,
    /**
     * Filter for development packages
     */
    DEVELOPMENT,
    /**
     * Filter for non-development packages
     */
    NOT_DEVELOPMENT,
    /**
     * Filter for GUI packages
     */
    GUI,
    /**
     * Filter for non-GUI packages
     */
    NOT_GUI,
    /**
     * Filter for free packages
     */
    FREE,
    /**
     * Filter for non-free packages
     */
    NOT_FREE,
    /**
     * Filter for visible packages
     */
    VISIBLE,
    /**
     * Filter for invisible packages
     */
    NOT_VISIBLE,
    /**
     * Filter for supported packages
     */
    SUPPORTED,
    /**
     * Filter for not supported packages
     */
    NOT_SUPPORTED,
    /**
     * Filter for packages that match basename
     */
    BASENAME,
    /**
     * Filter for packages that don't match basename
     */
    NOT_BASENAME,
    /**
     * Filter for newest packages
     */
    NEWEST,
    /**
     * Filter for not newest packages
     */
    NOT_NEWEST,
    /**
     * Filter for packages that match architecture
     */
    ARCH,
    /**
     * Filter for packages that don't match architecture
     */
    NOT_ARCH,
    /**
     * Filter for source packages
     */
    SOURCE,
    /**
     * Filter for non-source packages
     */
    NOT_SOURCE,
    /**
     * Filter for collections
     */
    COLLECTIONS,
    /**
     * Filter for not collections
     */
    NOT_COLLECTIONS,
    /**
     * Filter for application packages
     */
    APPLICATION,
    /**
     * Filter for non-application packages
     */
    NOT_APPLICATION,
    /**
     * Filter for downloaded packages
     */
    DOWNLOADED,
    /**
     * Filter for not downloaded packages
     */
    NOT_DOWNLOADED,
    LAST,
}
/**
 * The group type
 */
export enum GroupEnum {
    /**
     * Unknown group
     */
    UNKNOWN,
    /**
     * Accessibility related packages
     */
    ACCESSIBILITY,
    /**
     * Accessory packages
     */
    ACCESSORIES,
    /**
     * Administration tools packages
     */
    ADMIN_TOOLS,
    /**
     * Communication packages
     */
    COMMUNICATION,
    /**
     * GNOME packages
     */
    DESKTOP_GNOME,
    /**
     * KDE packages
     */
    DESKTOP_KDE,
    /**
     * Other desktop packages
     */
    DESKTOP_OTHER,
    /**
     * XFCE packages
     */
    DESKTOP_XFCE,
    /**
     * Education packages
     */
    EDUCATION,
    /**
     * Fonts
     */
    FONTS,
    /**
     * Games
     */
    GAMES,
    /**
     * Graphics related packages
     */
    GRAPHICS,
    /**
     * Internet related packages
     */
    INTERNET,
    /**
     * Legacy packages
     */
    LEGACY,
    /**
     * Localization related packages
     */
    LOCALIZATION,
    /**
     * Map related packages
     */
    MAPS,
    /**
     * Multimedia packages
     */
    MULTIMEDIA,
    /**
     * Network related packages
     */
    NETWORK,
    /**
     * Office packages
     */
    OFFICE,
    OTHER,
    /**
     * Power-management related packages
     */
    POWER_MANAGEMENT,
    /**
     * Programming packages
     */
    PROGRAMMING,
    /**
     * Publishing related packages
     */
    PUBLISHING,
    REPOS,
    /**
     * Security packages
     */
    SECURITY,
    /**
     * Server related packages
     */
    SERVERS,
    /**
     * System packages
     */
    SYSTEM,
    /**
     * Virtualization packages
     */
    VIRTUALIZATION,
    /**
     * Science related packages
     */
    SCIENCE,
    /**
     * Documentation
     */
    DOCUMENTATION,
    /**
     * Electronics package
     */
    ELECTRONICS,
    COLLECTIONS,
    /**
     * Vendor defined group
     */
    VENDOR,
    /**
     * Special group for recently updated packages
     */
    NEWEST,
    /**
     * DDE packages
     */
    DESKTOP_DDE,
    LAST,
}
/**
 * The enumerated types used in Package() - these have to refer to a specific
 * package action, rather than a general state
 */
export enum InfoEnum {
    /**
     * Package status is unknown
     */
    UNKNOWN,
    /**
     * Package is installed
     */
    INSTALLED,
    /**
     * Package is available to be installed
     */
    AVAILABLE,
    LOW,
    ENHANCEMENT,
    NORMAL,
    BUGFIX,
    IMPORTANT,
    SECURITY,
    /**
     * Package is blocked
     */
    BLOCKED,
    /**
     * Package is downloading
     */
    DOWNLOADING,
    /**
     * Package is updating
     */
    UPDATING,
    /**
     * Package is being installed
     */
    INSTALLING,
    /**
     * Package is being removed
     */
    REMOVING,
    /**
     * Package is running cleanup
     */
    CLEANUP,
    OBSOLETING,
    COLLECTION_INSTALLED,
    COLLECTION_AVAILABLE,
    FINISHED,
    /**
     * Package is being reinstalled
     */
    REINSTALLING,
    /**
     * Package is being downgraded
     */
    DOWNGRADING,
    /**
     * Package is preparing for installation/removal
     */
    PREPARING,
    /**
     * Package is decompressing
     */
    DECOMPRESSING,
    UNTRUSTED,
    TRUSTED,
    /**
     * Package is unavailable
     */
    UNAVAILABLE,
    /**
     * Update severity is critical; Since: 1.2.4
     */
    CRITICAL,
    LAST,
}
/**
 * The media type
 */
export enum MediaTypeEnum {
    /**
     * Unknown media type
     */
    UNKNOWN,
    /**
     * Media is a CD
     */
    CD,
    /**
     * Media is a DVD
     */
    DVD,
    /**
     * Media is a disc (not CD or DVD)
     */
    DISC,
    LAST,
}
/**
 * Network type
 */
export enum NetworkEnum {
    /**
     * Unknown network
     */
    UNKNOWN,
    /**
     * Offline (no network)
     */
    OFFLINE,
    /**
     * Online (network type unknown)
     */
    ONLINE,
    /**
     * Wired network
     */
    WIRED,
    /**
     * WiFi network
     */
    WIFI,
    /**
     * Mobile network
     */
    MOBILE,
    LAST,
}
/**
 * Actions that can be taken after an offline operation.
 */
export enum OfflineAction {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * Reboot
     */
    REBOOT,
    /**
     * Power-off
     */
    POWER_OFF,
    /**
     * No action set
     */
    UNSET,
}
/**
 * Errors that can be thrown
 */
export enum OfflineError {
    /**
     * No specific reason
     */
    FAILED,
    /**
     * An invalid value was specified
     */
    INVALID_VALUE,
    /**
     * No data was available
     */
    NO_DATA,
}
/**
 * Type of sort to perform.
 */
export enum PackageSackSortType {
    /**
     * Sort by name
     */
    NAME,
    /**
     * Sort by package info
     */
    INFO,
    /**
     * Sort by package ID
     */
    PACKAGE_ID,
    /**
     * Sort by summary
     */
    SUMMARY,
    LAST,
}
/**
 * Flag to show which progress field has been updated.
 */
export enum ProgressType {
    /**
     * package id updated
     */
    PACKAGE_ID,
    /**
     * transaction ID updated
     */
    TRANSACTION_ID,
    /**
     * percentage updated
     */
    PERCENTAGE,
    /**
     * allow cancel updated
     */
    ALLOW_CANCEL,
    /**
     * status updated
     */
    STATUS,
    /**
     * role updated
     */
    ROLE,
    /**
     * called active updated
     */
    CALLER_ACTIVE,
    /**
     * elapsed time updated
     */
    ELAPSED_TIME,
    /**
     * remaining time updated
     */
    REMAINING_TIME,
    /**
     * speed updated
     */
    SPEED,
    /**
     * download size remaining updated
     */
    DOWNLOAD_SIZE_REMAINING,
    /**
     * uid updated
     */
    UID,
    /**
     * package updated
     */
    PACKAGE,
    /**
     * item progress updated
     */
    ITEM_PROGRESS,
    /**
     * transaction flags updated
     */
    TRANSACTION_FLAGS,
    INVALID,
    /**
     * D-Bus name of sender updated (Since: 1.2.6)
     */
    SENDER,
}
/**
 * What restart we need to after a transaction, ordered by severity
 */
export enum RestartEnum {
    /**
     * Unknown restart state
     */
    UNKNOWN,
    /**
     * No restart required
     */
    NONE,
    /**
     * Need to restart the application
     */
    APPLICATION,
    /**
     * Need to restart the session
     */
    SESSION,
    /**
     * Need to restart the system
     */
    SYSTEM,
    SECURITY_SESSION,
    SECURITY_SYSTEM,
    LAST,
}
/**
 * What we were asked to do, this never changes for the lifetime of the
 * transaction.
 * Icons that have to represent the whole "aim" of the transaction will use
 * these constants
 */
export enum RoleEnum {
    /**
     * Unknow request
     */
    UNKNOWN,
    /**
     * Cancel transaction
     */
    CANCEL,
    /**
     * Get package dependencies
     */
    DEPENDS_ON,
    /**
     * Get package details
     */
    GET_DETAILS,
    GET_FILES,
    /**
     * Get available packages
     */
    GET_PACKAGES,
    /**
     * Get repository list
     */
    GET_REPO_LIST,
    /**
     * Get packages required by given package
     */
    REQUIRED_BY,
    /**
     * Get update details
     */
    GET_UPDATE_DETAIL,
    /**
     * Get available updates
     */
    GET_UPDATES,
    /**
     * Install package files
     */
    INSTALL_FILES,
    /**
     * Install packages
     */
    INSTALL_PACKAGES,
    /**
     * Install signature
     */
    INSTALL_SIGNATURE,
    /**
     * Refresh cache
     */
    REFRESH_CACHE,
    /**
     * Remove packages
     */
    REMOVE_PACKAGES,
    /**
     * Enable repository
     */
    REPO_ENABLE,
    REPO_SET_DATA,
    /**
     * Resolve depdencies
     */
    RESOLVE,
    /**
     * Search for details
     */
    SEARCH_DETAILS,
    /**
     * Search for file
     */
    SEARCH_FILE,
    /**
     * Search for group
     */
    SEARCH_GROUP,
    /**
     * Search for package name
     */
    SEARCH_NAME,
    /**
     * Update packages
     */
    UPDATE_PACKAGES,
    /**
     * Get what a package provides
     */
    WHAT_PROVIDES,
    /**
     * Accept an EULA
     */
    ACCEPT_EULA,
    /**
     * Download packages
     */
    DOWNLOAD_PACKAGES,
    /**
     * Get available distribution upgrades
     */
    GET_DISTRO_UPGRADES,
    /**
     * Get available categories
     */
    GET_CATEGORIES,
    /**
     * Get old transation information
     */
    GET_OLD_TRANSACTIONS,
    /**
     * Repair system
     */
    REPAIR_SYSTEM,
    /**
     * Get details on local package
     */
    GET_DETAILS_LOCAL,
    /**
     * Get files provided by local package
     */
    GET_FILES_LOCAL,
    /**
     * Remove repository
     */
    REPO_REMOVE,
    /**
     * Upgrade system
     */
    UPGRADE_SYSTEM,
    LAST,
}
/**
 * The signature type type
 */
export enum SigTypeEnum {
    /**
     * Unkwown signature type
     */
    UNKNOWN,
    /**
     * GPG signature
     */
    GPG,
    LAST,
}
/**
 * What status we are now; this can change for each transaction giving a
 * status of what sort of thing is happening
 * Icons that change to represent the current status of the transaction will
 * use these constants
 * If you add to these, make sure you add filenames in gpk-watch.c also
 * 
 * A typical transaction will do:
 * - schedule task
 * WAIT
 * - run task
 * SETUP
 * - wait for lock
 * RUNNING
 * 
 * This means that backends should run pk_backend_set_status (backend, PK_STATUS_ENUM_RUNNING)
 * when they are ready to start running the transaction and after a lock has been got.
 */
export enum StatusEnum {
    /**
     * Unknown status
     */
    UNKNOWN,
    /**
     * Waiting
     */
    WAIT,
    /**
     * Setting up
     */
    SETUP,
    /**
     * Running
     */
    RUNNING,
    QUERY,
    INFO,
    /**
     * Removing
     */
    REMOVE,
    /**
     * Refreshing cache
     */
    REFRESH_CACHE,
    /**
     * Downloading
     */
    DOWNLOAD,
    /**
     * Installing
     */
    INSTALL,
    /**
     * Updating
     */
    UPDATE,
    /**
     * Cleaning up
     */
    CLEANUP,
    OBSOLETE,
    /**
     * Resolving dependencies
     */
    DEP_RESOLVE,
    /**
     * Checking signatures
     */
    SIG_CHECK,
    /**
     * Testing commit
     */
    TEST_COMMIT,
    /**
     * Committing
     */
    COMMIT,
    REQUEST,
    /**
     * Finished
     */
    FINISHED,
    /**
     * Cancelling
     */
    CANCEL,
    /**
     * Downloading respository
     */
    DOWNLOAD_REPOSITORY,
    /**
     * Donwloading package list
     */
    DOWNLOAD_PACKAGELIST,
    /**
     * Downloading file list
     */
    DOWNLOAD_FILELIST,
    /**
     * Downloading changelog information
     */
    DOWNLOAD_CHANGELOG,
    /**
     * Downloading group information
     */
    DOWNLOAD_GROUP,
    /**
     * Downloading update information
     */
    DOWNLOAD_UPDATEINFO,
    /**
     * Repackaging
     */
    REPACKAGING,
    /**
     * Loading cache
     */
    LOADING_CACHE,
    /**
     * Scanning for applications
     */
    SCAN_APPLICATIONS,
    /**
     * Generating package list
     */
    GENERATE_PACKAGE_LIST,
    /**
     * Waiting for lock
     */
    WAITING_FOR_LOCK,
    /**
     * Waiting for authentication/authorization
     */
    WAITING_FOR_AUTH,
    /**
     * Scanning running processes
     */
    SCAN_PROCESS_LIST,
    /**
     * Checking executable files
     */
    CHECK_EXECUTABLE_FILES,
    /**
     * Checking libraries
     */
    CHECK_LIBRARIES,
    /**
     * Copying files
     */
    COPY_FILES,
    /**
     * Running package hook
     */
    RUN_HOOK,
    LAST,
}
/**
 * The transaction flags that alter how the transaction is handled
 */
export enum TransactionFlagEnum {
    /**
     * No transaction flag
     */
    NONE,
    /**
     * Only allow trusted packages
     */
    ONLY_TRUSTED,
    /**
     * Simulate transaction
     */
    SIMULATE,
    /**
     * Only download packages
     */
    ONLY_DOWNLOAD,
    /**
     * Allow package reinstallation
     */
    ALLOW_REINSTALL,
    /**
     * Only allow package reinstallation
     */
    JUST_REINSTALL,
    /**
     * Allow packages to be downgraded
     */
    ALLOW_DOWNGRADE,
    LAST,
}
/**
 * What state the update is in
 */
export enum UpdateStateEnum {
    /**
     * Update stability unknown
     */
    UNKNOWN,
    /**
     * Update is a stable release
     */
    STABLE,
    /**
     * Update is an unstable release
     */
    UNSTABLE,
    /**
     * Update is a testing release
     */
    TESTING,
    LAST,
}
/**
 * The type of distribution upgrade to perform
 */
export enum UpgradeKindEnum {
    UNKNOWN,
    /**
     * Perform minimal upgrade
     */
    MINIMAL,
    /**
     * Perform default upgrade
     */
    DEFAULT,
    /**
     * Perform complete upgrade
     */
    COMPLETE,
    LAST,
}
/**
 * Flags to be used for the method invocations.
 * @bitfield 
 */
export enum OfflineFlags {
    /**
     * No specific flag
     */
    NONE,
    /**
     * Run the action in an interactive mode, allowing polkit authentication dialogs
     */
    INTERACTIVE,
}
/**
 * The DBUS interface used by the PackageKit service.
 */
export const DBUS_INTERFACE: string
/**
 * The DBUS interface for PackageKit offline update functionality
 */
export const DBUS_INTERFACE_OFFLINE: string
/**
 * The DBUS interface for PackageKit transactions.
 */
export const DBUS_INTERFACE_TRANSACTION: string
/**
 * The DBUS path to the PackageKit service.
 */
export const DBUS_PATH: string
/**
 * The DBUS name for the PackageKit system service.
 */
export const DBUS_SERVICE: string
/**
 * The default location for the desktop files
 */
export const DESKTOP_DEFAULT_APPLICATION_DIR: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const OFFLINE_DESTDIR: string
export const OFFLINE_RESULTS_GROUP: string
export const PACKAGE_IDS_DELIM: string
/**
 * Alias to get an arch field from the result of pk_package_id_split
 */
export const PACKAGE_ID_ARCH: number
/**
 * Alias to get a data field from the result of pk_package_id_split
 */
export const PACKAGE_ID_DATA: number
/**
 * Alias to get a name field from the result of pk_package_id_split
 */
export const PACKAGE_ID_NAME: number
/**
 * Alias to get a version field from the result of pk_package_id_split
 */
export const PACKAGE_ID_VERSION: number
export const SYSTEM_PACKAGE_CACHE_FILENAME: string
export const SYSTEM_PACKAGE_LIST_FILENAME: string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param authorizeType Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_AUTHORIZE_ENUM_YES
 */
export function authorizeTypeEnumFromString(authorizeType: string): AuthorizeEnum
/**
 * Converts a enumerated type to its text representation
 * @param authorizeType The enumerated type value
 * @returns the enumerated constant value, e.g. "yes"
 */
export function authorizeTypeEnumToString(authorizeType: AuthorizeEnum): string
/**
 * An error quark for #PkClientError.
 * @returns an error quark.
 */
export function clientErrorQuark(): GLib.Quark
/**
 * We are a GObject that sets errors
 * @returns Our personal error quark.
 */
export function controlErrorQuark(): GLib.Quark
/**
 * Add a log domain to the debug output.
 * @param logDomain a log domain
 */
export function debugAddLogDomain(logDomain: string): void
/**
 * Check if verbose debugging is enabled.
 * @returns %TRUE if we have debugging enabled
 */
export function debugIsVerbose(): boolean
/**
 * Set if verbose debugging is enabled.
 * @param verbose %TRUE if verbose debugging should be enabled.
 */
export function debugSetVerbose(verbose: boolean): void
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgrade Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_DISTRO_UPGRADE_ENUM_STABLE
 */
export function distroUpgradeEnumFromString(upgrade: string): DistroUpgradeEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgrade The enumerated type value
 * @returns the enumerated constant value, e.g. "stable"
 */
export function distroUpgradeEnumToString(upgrade: DistroUpgradeEnum): string
/**
 * Search for a enum value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param value the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 * @returns the string constant, e.g. "desktop-gnome"
 */
export function enumFindString(table: EnumMatch, value: number): string
/**
 * Search for a string value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param string the string constant to search for, e.g. "desktop-gnome"
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function enumFindValue(table: EnumMatch, string: string): number
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param code Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function errorEnumFromString(code: string): ErrorEnum
/**
 * Converts a enumerated type to its text representation
 * @param code The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function errorEnumToString(code: ErrorEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param exit Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function exitEnumFromString(exit: string): ExitEnum
/**
 * Converts a enumerated type to its text representation
 * @param exit The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function exitEnumToString(exit: ExitEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param filters the enumerated constant value, e.g. "available;~gui"
 * @returns The enumerated type values
 */
export function filterBitfieldFromString(filters: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param filters The enumerated type values
 * @returns the enumerated constant value, e.g. "available;~gui"
 */
export function filterBitfieldToString(filters: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param filter Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function filterEnumFromString(filter: string): FilterEnum
/**
 * Converts a enumerated type to its text representation
 * @param filter The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function filterEnumToString(filter: FilterEnum): string
/**
 * Get the distribution ID for the current host, typically "distro;version;arch"
 * @returns a distribution ID
 */
export function getDistroId(): string | null
/**
 * Converts text representation to its enumerated type bitfield
 * @param groups the enumerated constant value, e.g. "available;~gui"
 * @returns The enumerated type values, or 0 for invalid
 */
export function groupBitfieldFromString(groups: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param groups The enumerated type values
 * @returns the enumerated constant value, e.g. "gnome;kde"
 */
export function groupBitfieldToString(groups: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param group Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function groupEnumFromString(group: string): GroupEnum
/**
 * Converts a enumerated type to its text representation
 * @param group The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function groupEnumToString(group: GroupEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param info Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function infoEnumFromString(info: string): InfoEnum
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 * @returns the translated text
 */
export function infoEnumToLocalisedPast(info: InfoEnum): string
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 * @returns the translated text
 */
export function infoEnumToLocalisedPresent(info: InfoEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param info The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function infoEnumToString(info: InfoEnum): string
/**
 * Convert a date into an ISO8601 data string.
 * @param date a #GDate to convert
 * @returns If valid then a new ISO8601 date, else %NULL
 */
export function iso8601FromDate(date: GLib.Date): string | null
/**
 * Get the current date / time as an ISO8601 string.
 * @returns The current iso8601 date and time
 */
export function iso8601Present(): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param mediaType Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_MEDIA_TYPE_ENUM_CD
 */
export function mediaTypeEnumFromString(mediaType: string): MediaTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param mediaType The enumerated type value
 * @returns the enumerated constant value, e.g. "dvd"
 */
export function mediaTypeEnumToString(mediaType: MediaTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param network Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function networkEnumFromString(network: string): NetworkEnum
/**
 * Converts a enumerated type to its text representation
 * @param network The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function networkEnumToString(network: NetworkEnum): string
/**
 * Converts the string to the enumerated value.
 * @param action a string representation of a #PkOfflineAction, e.g. "reboot"
 * @returns A #PkOfflineAction, or %PK_OFFLINE_ACTION_UNKNOWN for invalid
 */
export function offlineActionFromString(action: string): OfflineAction
/**
 * Converts the enumerated value to a string.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @returns string value, or %NULL for invalid
 */
export function offlineActionToString(action: OfflineAction): string
export function offlineAuthCancel(): boolean
export function offlineAuthClearResults(): boolean
export function offlineAuthInvalidate(): boolean
export function offlineAuthSetAction(action: OfflineAction): boolean
export function offlineAuthSetPreparedIds(packageIds: string | null): boolean
export function offlineAuthSetPreparedUpgrade(name: string, releaseVer: string): boolean
export function offlineAuthSetResults(results: Results): boolean
export function offlineAuthTrigger(action: OfflineAction): boolean
export function offlineAuthTriggerUpgrade(action: OfflineAction): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_cancel_with_flags().
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineCancel(cancellable: Gio.Cancellable | null): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineCancelWithFlags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_clear_results_with_flags().
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineClearResults(cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineClearResultsWithFlags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * An error quark for #PkOfflineError.
 * @returns an error quark.
 */
export function offlineErrorQuark(): GLib.Quark
/**
 * Gets the action that will be taken after the offline action has completed.
 * 
 * An error is set if the the value %PK_OFFLINE_ACTION_UNKNOWN is returned.
 * @returns a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 */
export function offlineGetAction(): OfflineAction
/**
 * Gets a file monitor for the trigger.
 * @param cancellable A #GCancellable or %NULL
 * @returns A #GFileMonitor, or %NULL
 */
export function offlineGetActionMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the package-ids in the prepared transaction.
 * @returns array of package-ids, or %NULL
 */
export function offlineGetPreparedIds(): string[]
/**
 * Gets a file monitor for the prepared transaction.
 * @param cancellable A #GCancellable or %NULL
 * @returns A #GFileMonitor, or %NULL
 */
export function offlineGetPreparedMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets a package sack of the packages in the prepared transaction.
 * @returns A new #PkPackageSack, or %NULL
 */
export function offlineGetPreparedSack(): PackageSack
export function offlineGetPreparedUpgrade(name: string | null, releaseVer: string | null): boolean
/**
 * Gets a file monitor for the prepared system upgrade transaction.
 * @param cancellable A #GCancellable or %NULL
 * @returns A #GFileMonitor, or %NULL
 */
export function offlineGetPreparedUpgradeMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the name of the prepared system upgrade in the prepared transaction.
 * @returns the name, or %NULL if unset, free with g_free()
 */
export function offlineGetPreparedUpgradeName(): string | null
/**
 * Gets the version of the prepared system upgrade in the prepared transaction.
 * @returns the version, or %NULL if unset, free with g_free()
 */
export function offlineGetPreparedUpgradeVersion(): string | null
/**
 * Gets the last result of the offline transaction.
 * @returns A #PkResults, or %NULL
 */
export function offlineGetResults(): Results
/**
 * Gets the modification time of the prepared transaction.
 * @returns a unix time, or 0 for error.
 */
export function offlineGetResultsMtime(): number
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineTrigger(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_upgrade_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineTriggerUpgrade(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineTriggerUpgradeWithFlags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
export function offlineTriggerWithFlags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
export function polkitAgentClose(): void
export function polkitAgentOpen(): number
/**
 * Form a composite string array of strings.
 * The data in the GPtrArray is copied.
 * @param array the GPtrArray of strings
 * @returns the string array, or %NULL if invalid
 */
export function ptrArrayToStrv(array: string[]): string[]
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param restart Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function restartEnumFromString(restart: string): RestartEnum
/**
 * Converts a enumerated type to its text representation
 * @param restart The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function restartEnumToString(restart: RestartEnum): string
/**
 * Converts text representation to its enumerated type bitfield
 * @param roles the enumerated constant value, e.g. "search-file;update-system"
 * @returns The enumerated type values, or 0 for invalid
 */
export function roleBitfieldFromString(roles: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param roles The enumerated type values
 * @returns the enumerated constant value, e.g. "install-file;update-system"
 */
export function roleBitfieldToString(roles: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param role Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function roleEnumFromString(role: string): RoleEnum
/**
 * Converts a enumerated type to its localized description
 * @param role The enumerated type value
 * @returns the translated text
 */
export function roleEnumToLocalisedPresent(role: RoleEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param role The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function roleEnumToString(role: RoleEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param sigType Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function sigTypeEnumFromString(sigType: string): SigTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param sigType The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function sigTypeEnumToString(sigType: SigTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param status Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function statusEnumFromString(status: string): StatusEnum
export function statusEnumToLocalisedText(status: StatusEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param status The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
export function statusEnumToString(status: StatusEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param transactionFlags the enumerated constant value, e.g. "only-trusted;simulate"
 * @returns The enumerated type values
 */
export function transactionFlagBitfieldFromString(transactionFlags: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param transactionFlags The enumerated type values
 * @returns the enumerated constant value, e.g. "only-trusted;simulate"
 */
export function transactionFlagBitfieldToString(transactionFlags: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param transactionFlag Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_TRANSACTION_FLAG_ENUM_SIMULATE
 */
export function transactionFlagEnumFromString(transactionFlag: string): TransactionFlagEnum
/**
 * Converts a enumerated type to its text representation
 * @param transactionFlag The enumerated type value
 * @returns the enumerated constant value, e.g. "simulate"
 */
export function transactionFlagEnumToString(transactionFlag: TransactionFlagEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param updateState Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_UPDATE_STATE_ENUM_STABLE
 */
export function updateStateEnumFromString(updateState: string): UpdateStateEnum
/**
 * Converts a enumerated type to its text representation
 * @param updateState The enumerated type value
 * @returns the enumerated constant value, e.g. "testing"
 */
export function updateStateEnumToString(updateState: UpdateStateEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgradeKind Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_UPGRADE_KIND_ENUM_MINIMAL
 */
export function upgradeKindEnumFromString(upgradeKind: string): UpgradeKindEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgradeKind The enumerated type value
 * @returns the enumerated constant value, e.g. "minimal"
 */
export function upgradeKindEnumToString(upgradeKind: UpgradeKindEnum): string
/**
 * Function to filter packages in #PkPackageSack.
 * @callback 
 * @param package the package being considered
 * @returns %TRUE if @package should remain in the sack.
 */
export interface PackageSackFilterFunc {
    (package: Package): boolean
}
/**
 * Function that is called when progress updates are given.
 * @callback 
 * @param progress a #PkProgress
 * @param type the type of progress update this is
 */
export interface ProgressCallback {
    (progress: Progress, type: ProgressType): void
}
export module Category {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Category

        cat_id?: string | null
        icon?: string | null
        name?: string | null
        parent_id?: string | null
        summary?: string | null
    }

}

export interface Category {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    catId: string | null
    icon: string | null
    name: string | null
    parentId: string | null
    summary: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Category

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Category

    /**
     * Gets the icon filename.
     * @returns the string value, or %NULL for unset.
     */
    getIcon(): string
    /**
     * Gets the id specific to this category.
     * @returns the string value, or %NULL for unset.
     */
    getId(): string
    /**
     * Gets the name.
     * @returns the string value, or %NULL for unset.
     */
    getName(): string
    /**
     * Gets the parent category id.
     * @returns the string value, or %NULL for unset.
     */
    getParentId(): string
    /**
     * Gets the summary.
     * @returns the string value, or %NULL for unset.
     */
    getSummary(): string
    /**
     * Sets the icon filename.
     * @param icon the new value
     */
    setIcon(icon: string): void
    /**
     * Sets the id specific to this category.
     * @param catId the new value
     */
    setId(catId: string): void
    /**
     * Sets the name.
     * @param name the new value
     */
    setName(name: string): void
    /**
     * Sets the parent category id.
     * @param parentId the new value
     */
    setParentId(parentId: string): void
    /**
     * Sets the summary.
     * @param summary the new value
     */
    setSummary(summary: string): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Category

    connect(sigName: "notify::cat-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::cat-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cat-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cat-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cat-id", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Category extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Category

    constructor(config?: Category.ConstructorProperties) 
    constructor() 
    static new(): Category

    // Overloads of new

    static new(): Source
    _init(config?: Category.ConstructorProperties): void
}

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Client

        background?: boolean | null
        cache_age?: number | null
        details_with_deps_size?: boolean | null
        interactive?: boolean | null
        locale?: string | null
    }

}

export interface Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    background: boolean
    cacheAge: number
    detailsWithDepsSize: boolean
    readonly idle: boolean
    interactive: boolean
    locale: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Client

    /**
     * We may want to agree to a EULA dialog if one is presented.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param eulaId the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    acceptEula(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * We may want to agree to a EULA dialog if one is presented.
     * @param eulaId the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    acceptEulaAsync(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Adopt a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transactionId a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    adopt(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Adopt a transaction which allows the caller to monitor the state or cancel it.
     * @param transactionId a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    adoptAsync(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages that depend this one, i.e. child.parent.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for depends
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    dependsOn(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the packages that depend this one, i.e. child->parent.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for depends
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Downloads package files to a specified location.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    downloadPackages(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Downloads package files to a specified location.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the #PkResults, or %NULL. Free with g_object_unref()
     */
    genericFinish(res: Gio.AsyncResult): Results
    /**
     * Gets the background value.
     * @returns The background status.
     */
    getBackground(): boolean
    /**
     * Gets the maximum cache age value.
     * @returns The cache age in seconds
     */
    getCacheAge(): number
    /**
     * Get a list of all categories supported.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getCategories(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get a list of all categories supported.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getDetails(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get details of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getDetailsLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDetailsLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the client details-with-deps-size value.
     * @returns whether the pk_client_get_details_async() should include dependencies    download sizes for packages, which are not installed.
     */
    getDetailsWithDepsSize(): boolean
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getDistroUpgrades(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDistroUpgradesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getFiles(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get file list of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getFilesLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get file list of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getFilesLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets if the transaction client idle value.
     * @returns if this client is idle.
     */
    getIdle(): boolean
    /**
     * Gets the client interactive value.
     * @returns if the transaction is due to run interactivly.
     */
    getInteractive(): boolean
    /**
     * Gets the locale used for this transaction.
     * @returns The locale.
     */
    getLocale(): string
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getOldTransactions(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getOldTransactionsAsync(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of packages from the backend
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getPackages(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the list of packages from the backend
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the progress of a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transactionId The transaction id
     * @param cancellable a #GCancellable or %NULL
     * @returns a #PkResults object, or %NULL for error
     */
    getProgress(transactionId: string, cancellable: Gio.Cancellable | null): Progress
    /**
     * Find the current state of a transaction.
     * @param transactionId a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param callbackReady the function to run on completion
     */
    getProgressAsync(transactionId: string, cancellable: Gio.Cancellable | null, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the #PkProgress, or %NULL. Free with g_object_unref()
     */
    getProgressFinish(res: Gio.AsyncResult): Progress
    /**
     * Get the list of repositories installed on the system.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getRepoList(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the list of repositories installed on the system.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getUpdateDetail(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getUpdates(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    installFiles(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param transactionFlags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installFilesAsync(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    installPackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a package of the newest and most correct version.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installPackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a software repository signature of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
     * @param keyId a key ID such as "0df23df"
     * @param packageId a signature_id structure such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    installSignature(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a software repository signature of the newest and most correct version.
     * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
     * @param keyId a key ID such as "0df23df"
     * @param packageId a signature_id structure such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installSignatureAsync(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Refresh the cache, i.e. download new metadata from a remote URL so that
     * package lists are up to date.
     * This action may take a few minutes and should be done when the session and
     * system are idle.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param force if we should aggressively drop caches
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    refreshCache(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Refresh the cache, i.e. download new metadata from a remote URL so that
     * package lists are up to date.
     * This action may take a few minutes and should be done when the session and
     * system are idle.
     * @param force if we should aggressively drop caches
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    removePackages(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    removePackagesAsync(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags if only trusted packages should be installed
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    repairSystem(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by the user using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repairSystemAsync(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Enable or disable the repository.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    repoEnable(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Enable or disable the repository.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Removes a repo and optionally the packages installed from it.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags transaction flags
     * @param repoId a repo_id structure such as "livna-devel"
     * @param autoremove If packages should be auto-removed
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    repoRemove(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Removes a repo and optionally the packages installed from it.
     * @param transactionFlags transaction flags
     * @param repoId a repo_id structure such as "livna-devel"
     * @param autoremove If packages should be auto-removed
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoRemoveAsync(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * We may want to set a repository parameter.
     * NOTE: this is free text, and is left to the backend to define a format.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param parameter the parameter to change
     * @param value what we should change it to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    repoSetData(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * We may want to set a repository parameter.
     * NOTE: this is free text, and is left to the backend to define a format.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param parameter the parameter to change
     * @param value what we should change it to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoSetDataAsync(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages that require this one, i.e. parent.child.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for requires
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    requiredBy(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the packages that require this one, i.e. parent->child.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for requires
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Resolve a package name into a `package_id`. This can return installed and
     * available packages and allows you find out if a package is installed locally
     * or is available in a repository.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Resolve a package name into a `package_id`. This can return installed and
     * available packages and allows you find out if a package is installed locally
     * or is available in a repository.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Search all detailed summary information to try and find a keyword.
     * Think of this as pk_client_search_names(), but trying much harder and
     * taking longer.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchDetails(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Search all detailed summary information to try and find a keyword.
     * Think of this as pk_client_search_names(), but trying much harder and
     * taking longer.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Search for packages that provide a specific file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchFiles(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Search for packages that provide a specific file.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Return all packages in a specific group.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchGroups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Return all packages in a specific group.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Search all the locally installed files and remote repositories for a package
     * that matches a specific name.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchNames(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Search all the locally installed files and remote repositories for a package
     * that matches a specific name.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Sets the background value for the client. A background transaction
     * is usually scheduled at a lower priority and is usually given less
     * network and disk performance.
     * @param background if the transaction is a background transaction
     */
    setBackground(background: boolean): void
    /**
     * Sets the maximum cache age value for the client.
     * @param cacheAge the cache age to set, where %G_MAXUINT means "never"
     */
    setCacheAge(cacheAge: number): void
    /**
     * Sets whether the pk_client_get_details_async() should include dependencies
     * download sizes for packages, which are not installed.
     * @param detailsWithDepsSize the value to set
     */
    setDetailsWithDepsSize(detailsWithDepsSize: boolean): void
    /**
     * Sets the interactive value for the client. Interactive transactions
     * are usually allowed to ask the user questions.
     * @param interactive the value to set
     */
    setInteractive(interactive: boolean): void
    /**
     * Sets the locale to be used for the client. This may affect returned
     * results.
     * @param locale the locale to set, e.g. "en_GB.UTF-8"
     */
    setLocale(locale: string): void
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    updatePackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Update specific packages to the newest available versions.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    updatePackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will upgrade the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags transaction flags
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    upgradeSystem(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    upgradeSystemAsync(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This should return packages that provide the supplied attributes.
     * This method is useful for finding out what package(s) provide a modalias
     * or GStreamer codec string.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a search term such as "sound/mp3"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    whatProvides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This should return packages that provide the supplied attributes.
     * This method is useful for finding out what package(s) provide a modalias
     * or GStreamer codec string.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a search term such as "sound/mp3"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Client

    changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Client

    connect(sigName: "notify::background", callback: (...args: any[]) => void): number
    on(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details-with-deps-size", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::interactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
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

export class Client extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     * @returns A new #PkClient instance
     */
    constructor() 
    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     * @returns A new #PkClient instance
     */
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
    static createHelperArgvEnvp(argv: string | null, envpOut: string | null): boolean
}

export module ClientHelper {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientHelper {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    parent: GObject.Object
    priv: ClientHelperPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    isActive(): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socketFilename a socket filename that does not already exist
     * @param argv the executable, along with any arguments
     * @param envp the environment
     * @returns %TRUE for success
     */
    start(socketFilename: string, argv: string | null, envp: string | null): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socket the (bound and listening) #GSocket instance to use
     * @param argv the executable, along with any arguments
     * @param envp the environment
     * @returns %TRUE for success
     */
    startWithSocket(socket: Gio.Socket, argv: string | null, envp: string | null): boolean
    /**
     * Stops the helper process, by killing the helper process and deleting
     * the socket.
     * @returns %TRUE for success
     */
    stop(): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

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

export class ClientHelper extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    constructor(config?: ClientHelper.ConstructorProperties) 
    constructor() 
    static new(): ClientHelper
    _init(config?: ClientHelper.ConstructorProperties): void
}

export module Control {

    // Signal callback interfaces

    /**
     * Signal callback interface for `repo-list-changed`
     */
    export interface RepoListChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `restart-schedule`
     */
    export interface RestartScheduleSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `transaction-list-changed`
     */
    export interface TransactionListChangedSignalCallback {
        (transactionIds: string[]): void
    }

    /**
     * Signal callback interface for `updates-changed`
     */
    export interface UpdatesChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Control

        backend_author?: string | null
        backend_description?: string | null
        backend_name?: string | null
        connected?: boolean | null
        distro_id?: string | null
        filters?: number | null
        groups?: number | null
        locked?: boolean | null
        mime_types?: string[] | null
        network_state?: NetworkEnum | null
        provides?: number | null
        roles?: number | null
    }

}

export interface Control {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    backendAuthor: string | null
    backendDescription: string | null
    backendName: string | null
    connected: boolean
    distroId: string | null
    filters: number
    groups: number
    // Has conflict: locked: boolean
    mimeTypes: string[]
    networkState: NetworkEnum
    provides: number
    roles: number
    readonly versionMajor: number
    readonly versionMicro: number
    readonly versionMinor: number
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Control

    parent: GObject.Object
    priv: ControlPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Control

    /**
     * We may want to know before we run a method if we are going to be denied,
     * accepted or challenged for authentication.
     * @param actionId The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    canAuthorizeAsync(actionId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the #PkAuthorizeEnum or %PK_AUTHORIZE_ENUM_UNKNOWN if the method failed
     */
    canAuthorizeFinish(res: Gio.AsyncResult): AuthorizeEnum
    /**
     * Gets the debugging state from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getDaemonStateAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the ID, or %NULL if unset, free with g_free()
     */
    getDaemonStateFinish(res: Gio.AsyncResult): string | null
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    getProperties(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets global properties from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getPropertiesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if we set the proxy successfully
     */
    getPropertiesFinish(res: Gio.AsyncResult): boolean
    /**
     * Gets a transacton ID from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getTidAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the ID, or %NULL if unset, free with g_free()
     */
    getTidFinish(res: Gio.AsyncResult): string | null
    /**
     * We may want to know how long it has been since we refreshed the cache or
     * retrieved the update list.
     * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getTimeSinceActionAsync(role: RoleEnum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if the daemon serviced the request
     */
    getTimeSinceActionFinish(res: Gio.AsyncResult): number
    /**
     * Gets the transaction list in progress.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns The list of transaction id's, or %NULL, free with g_strfreev()
     */
    getTransactionList(cancellable: Gio.Cancellable | null): string[]
    /**
     * Gets the transactions currently running in the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getTransactionListAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns A GStrv list of transaction ID's, free with g_strfreev()
     */
    getTransactionListFinish(res: Gio.AsyncResult): string[]
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxyHttp the HTTP proxy server
     * @param proxyFtp the FTP proxy server
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the proxy was set correctly NOTE: This is just provided for backwards compatibility. Clients should really be using pk_control_set_proxy2().
     */
    setProxy(proxyHttp: string, proxyFtp: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxyHttp the HTTP proxy server
     * @param proxyHttps the HTTPS proxy server
     * @param proxyFtp the FTP proxy server
     * @param proxySocks the SOCKS proxy server
     * @param noProxy the list of download IPs that shouldn't go through the proxy
     * @param pac the PAC string
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the proxy was set correctly
     */
    setProxy2(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set a proxy on the PK daemon
     * @param proxyHttp a HTTP proxy string such as "username:password`server`.lan:8080", or %NULL
     * @param proxyHttps a HTTPS proxy string such as "username:password`server`.lan:8080", or %NULL
     * @param proxyFtp a FTP proxy string such as "server.lan:8080", or %NULL
     * @param proxySocks a SOCKS proxy string such as "server.lan:8080", or %NULL
     * @param noProxy a list of download IPs that shouldn't go through the proxy, or %NULL
     * @param pac a PAC string, or %NULL
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    setProxy2Async(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Set a proxy on the PK daemon
     * 
     * NOTE: This is just provided for backwards compatibility.
     * Clients should really be using pk_control_set_proxy2_async().
     * @param proxyHttp a HTTP proxy string such as "username:password`server`.lan:8080"
     * @param proxyFtp a FTP proxy string such as "server.lan:8080"
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    setProxyAsync(proxyHttp: string, proxyFtp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if we set the proxy successfully
     */
    setProxyFinish(res: Gio.AsyncResult): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the suggestion was sent
     */
    suggestDaemonQuit(cancellable: Gio.Cancellable | null): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    suggestDaemonQuitAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if the suggestion was sent
     */
    suggestDaemonQuitFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Control

    connectionChanged(connected: boolean): void
    locked(isLocked: boolean): void
    networkStateChanged(): void
    repoListChanged(): void
    restartSchedule(): void
    transactionListChanged(transactionIds: string | null): void
    updatesChanged(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): number
    on(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "repo-list-changed", ...args: any[]): void
    connect(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): number
    on(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "restart-schedule", ...args: any[]): void
    connect(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): number
    on(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transaction-list-changed", ...args: any[]): void
    connect(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): number
    on(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updates-changed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "notify::backend-author", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-author", ...args: any[]): void
    connect(sigName: "notify::backend-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-description", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::distro-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::distro-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::distro-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::distro-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::distro-id", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (...args: any[]) => void): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::mime-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-types", ...args: any[]): void
    connect(sigName: "notify::network-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-state", ...args: any[]): void
    connect(sigName: "notify::provides", callback: (...args: any[]) => void): number
    on(sigName: "notify::provides", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provides", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provides", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provides", ...args: any[]): void
    connect(sigName: "notify::roles", callback: (...args: any[]) => void): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::version-major", callback: (...args: any[]) => void): number
    on(sigName: "notify::version-major", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version-major", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version-major", ...args: any[]): void
    connect(sigName: "notify::version-micro", callback: (...args: any[]) => void): number
    on(sigName: "notify::version-micro", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version-micro", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version-micro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version-micro", ...args: any[]): void
    connect(sigName: "notify::version-minor", callback: (...args: any[]) => void): number
    on(sigName: "notify::version-minor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version-minor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version-minor", ...args: any[]): void
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

export class Control extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Control

    constructor(config?: Control.ConstructorProperties) 
    constructor() 
    static new(): Control
    _init(config?: Control.ConstructorProperties): void
}

export module Desktop {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Desktop {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Desktop

    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Desktop

    parent: GObject.Object
    priv: DesktopPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Desktop

    /**
     * Return all desktop files owned by a package, regardless if they are shown
     * in the main menu or not.
     * @param package the package name, e.g. "gnome-power-manager"
     * @returns string array of results, free with g_ptr_array_unref() NOTE: This method is unused and will be removed next time the library soname changes!
     */
    getFilesForPackage(package: string): string[]
    /**
     * Returns the package name that owns the desktop file. Fast.
     * @param filename a fully qualified filename
     * @returns package name, or %NULL NOTE: This method is unused and will be removed next time the library soname changes!
     */
    getPackageForFile(filename: string): string | null
    /**
     * Return all desktop files owned by a package that would be shown in a menu,
     * i.e are an application
     * @param package the package name, e.g. "gnome-power-manager"
     * @returns string array of results, free with g_ptr_array_unref() NOTE: This method is unused and will be removed next time the library soname changes!
     */
    getShownForPackage(package: string): string[]
    /**
     * This method is unused and will be removed next time the library
     * soname changes!
     * @returns %TRUE if opened correctly
     */
    openDatabase(): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Desktop

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

export class Desktop extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Desktop

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Desktop

    constructor(config?: Desktop.ConstructorProperties) 
    /**
     * NOTE: This method is unused and will be removed next time the library
     * soname changes!
     * @constructor 
     */
    constructor() 
    /**
     * NOTE: This method is unused and will be removed next time the library
     * soname changes!
     * @constructor 
     */
    static new(): Desktop
    _init(config?: Desktop.ConstructorProperties): void
}

export module Details {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Details

        description?: string | null
        download_size?: number | null
        group?: GroupEnum | null
        license?: string | null
        package_id?: string | null
        size?: number | null
        summary?: string | null
        url?: string | null
    }

}

export interface Details {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    description: string | null
    downloadSize: number
    group: GroupEnum
    license: string | null
    packageId: string | null
    size: number
    summary: string | null
    url: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Details

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Details

    /**
     * Gets the description for the details object.
     * @returns string value
     */
    getDescription(): string
    /**
     * Gets the package download size.
     * @returns the package download size, 0 if already downloaded and G_MAXUINT64 when unknown
     */
    getDownloadSize(): number
    /**
     * Gets the group for the details object.
     * @returns string value
     */
    getGroup(): GroupEnum
    /**
     * Gets the license for the details object.
     * @returns string value
     */
    getLicense(): string
    /**
     * Gets the PackageId for the details object.
     * @returns string value
     */
    getPackageId(): string
    /**
     * Gets the size for the details object: for installed packages it will return
     * the installed size, for the rest the package size.
     * @returns string value
     */
    getSize(): number
    /**
     * Gets the summary for the details object.
     * @returns string value
     */
    getSummary(): string
    /**
     * Gets the url for the details object.
     * @returns string value
     */
    getUrl(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Details

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::download-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::download-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::download-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::download-size", ...args: any[]): void
    connect(sigName: "notify::group", callback: (...args: any[]) => void): number
    on(sigName: "notify::group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::url", callback: (...args: any[]) => void): number
    on(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Details extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Details

    constructor(config?: Details.ConstructorProperties) 
    constructor() 
    static new(): Details

    // Overloads of new

    static new(): Source
    _init(config?: Details.ConstructorProperties): void
}

export module DistroUpgrade {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

        name?: string | null
        state?: DistroUpgradeEnum | null
        summary?: string | null
    }

}

export interface DistroUpgrade {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    name: string | null
    state: DistroUpgradeEnum
    summary: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    /**
     * Gets the distribution identifier.
     * You use this value to call UpgradeSystem.
     * @returns the distro-id, e.g. "fedora-14"
     */
    getId(): string
    /**
     * Gets the status of the distribution upgrade.
     * @returns the printable name, e.g. %PK_DISTRO_UPGRADE_ENUM_UNSTABLE
     */
    getState(): DistroUpgradeEnum
    /**
     * Gets the description of the distribution upgrade.
     * @returns the printable name, e.g. "Fedora 14"
     */
    getSummary(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DistroUpgrade extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    constructor(config?: DistroUpgrade.ConstructorProperties) 
    constructor() 
    static new(): DistroUpgrade

    // Overloads of new

    static new(): Source
    _init(config?: DistroUpgrade.ConstructorProperties): void
}

export module Error {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Error

        code?: ErrorEnum | null
        details?: string | null
    }

}

export interface Error {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    code: ErrorEnum
    details: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Error

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Error

    /**
     * Get the error code for this error.
     * @returns a #PkErrorEnum
     */
    getCode(): ErrorEnum
    /**
     * Get details for this error.
     * @returns an string description
     */
    getDetails(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Error

    connect(sigName: "notify::code", callback: (...args: any[]) => void): number
    on(sigName: "notify::code", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::code", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::code", ...args: any[]): void
    connect(sigName: "notify::details", callback: (...args: any[]) => void): number
    on(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Error extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Error

    constructor(config?: Error.ConstructorProperties) 
    constructor() 
    static new(): Error

    // Overloads of new

    static new(): Source
    _init(config?: Error.ConstructorProperties): void
}

export module EulaRequired {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

        /**
         * ID for this EULA.
         */
        eula_id?: string | null
        /**
         * The text of the license agreement.
         */
        license_agreement?: string | null
        /**
         * PackageID this EULA is for.
         */
        package_id?: string | null
        /**
         * Vendor this EULA is from.
         */
        vendor_name?: string | null
    }

}

export interface EulaRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * ID for this EULA.
     */
    eulaId: string | null
    /**
     * The text of the license agreement.
     */
    licenseAgreement: string | null
    /**
     * PackageID this EULA is for.
     */
    packageId: string | null
    /**
     * Vendor this EULA is from.
     */
    vendorName: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * Get the ID for this EULA
     * @returns an ID
     */
    getEulaId(): string
    /**
     * Get the text of the license agreement.
     * @returns license agreement text
     */
    getLicenseAgreement(): string
    /**
     * Get the PackageID this EULA is for
     * @returns a PackageID
     */
    getPackageId(): string
    /**
     * Get the vendor this EULA is from.
     * @returns license vendor name
     */
    getVendorName(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    connect(sigName: "notify::eula-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::eula-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eula-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eula-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eula-id", ...args: any[]): void
    connect(sigName: "notify::license-agreement", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-agreement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-agreement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-agreement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-agreement", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::vendor-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EulaRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    constructor(config?: EulaRequired.ConstructorProperties) 
    constructor() 
    static new(): EulaRequired

    // Overloads of new

    static new(): Source
    _init(config?: EulaRequired.ConstructorProperties): void
}

export module Files {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Files

        files?: string[] | null
        package_id?: string | null
    }

}

export interface Files {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    files: string[]
    packageId: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Files

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Files

    /**
     * Gets the file list
     * @returns Gets the file list for the files object
     */
    getFiles(): string[]
    /**
     * Gets the package-id
     * @returns Gets the package_id for the files object
     */
    getPackageId(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Files

    connect(sigName: "notify::files", callback: (...args: any[]) => void): number
    on(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Files extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Files

    constructor(config?: Files.ConstructorProperties) 
    constructor() 
    static new(): Files

    // Overloads of new

    static new(): Source
    _init(config?: Files.ConstructorProperties): void
}

export module ItemProgress {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

        package_id?: string | null
        percentage?: number | null
        status?: number | null
    }

}

export interface ItemProgress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    packageId: string | null
    percentage: number
    status: number
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    /**
     * Get the package ID this item is working on.
     * @returns a package ID
     */
    getPackageId(): string
    /**
     * Get the percentage complete of this item.
     * @returns a progress percentage (0-100)
     */
    getPercentage(): number
    /**
     * Get the status of this item.
     * @returns a #PkStatusEnum
     */
    getStatus(): StatusEnum

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ItemProgress extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    constructor(config?: ItemProgress.ConstructorProperties) 
    /**
     * An object containing item inside a #PkProgress.
     * @constructor 
     * @returns a new #PkItemProgress object.
     */
    constructor() 
    /**
     * An object containing item inside a #PkProgress.
     * @constructor 
     * @returns a new #PkItemProgress object.
     */
    static new(): ItemProgress

    // Overloads of new

    static new(): Source
    _init(config?: ItemProgress.ConstructorProperties): void
}

export module MediaChangeRequired {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

        media_id?: string | null
        media_text?: string | null
        media_type?: MediaTypeEnum | null
    }

}

export interface MediaChangeRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    mediaId: string | null
    mediaText: string | null
    mediaType: MediaTypeEnum
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    parent: Source & GObject.Object
    priv: any

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    connect(sigName: "notify::media-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-id", ...args: any[]): void
    connect(sigName: "notify::media-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-text", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MediaChangeRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    constructor(config?: MediaChangeRequired.ConstructorProperties) 
    constructor() 
    static new(): MediaChangeRequired

    // Overloads of new

    static new(): Source
    _init(config?: MediaChangeRequired.ConstructorProperties): void
}

export module Package {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Package

        description?: string | null
        group?: GroupEnum | null
        info?: InfoEnum | null
        license?: string | null
        size?: number | null
        summary?: string | null
        update_bugzilla_urls?: string[] | null
        update_changelog?: string | null
        update_cve_urls?: string[] | null
        update_issued?: string | null
        update_obsoletes?: string | null
        update_restart?: RestartEnum | null
        /**
         * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
         * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
         */
        update_severity?: InfoEnum | null
        update_state?: UpdateStateEnum | null
        update_text?: string | null
        update_updated?: string | null
        update_updates?: string | null
        update_vendor_urls?: string[] | null
        url?: string | null
    }

}

export interface Package {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Package

    description: string | null
    group: GroupEnum
    info: InfoEnum
    license: string | null
    readonly packageId: string | null
    size: number
    summary: string | null
    updateBugzillaUrls: string[]
    updateChangelog: string | null
    updateCveUrls: string[]
    updateIssued: string | null
    updateObsoletes: string | null
    updateRestart: RestartEnum
    /**
     * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
     * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
     */
    updateSeverity: InfoEnum
    updateState: UpdateStateEnum
    updateText: string | null
    updateUpdated: string | null
    updateUpdates: string | null
    updateVendorUrls: string[]
    url: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Package

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Package

    /**
     * Do the #PkPackage's have the same ID.
     * @param package2 a valid #PkPackage instance
     * @returns %TRUE if the packages have the same package_id, info and summary.
     */
    equal(package2: Package): boolean
    /**
     * Do the #PkPackage's have the same ID.
     * @param package2 a valid #PkPackage instance
     * @returns %TRUE if the packages have the same package_id.
     */
    equalId(package2: Package): boolean
    /**
     * Gets the package arch.
     * @returns the arch, or %NULL if unset
     */
    getArch(): string
    /**
     * Gets the package data, which is usually the repository ID that contains the
     * package. Special ID's include "installed" for installed packages, and "local"
     * for local packages that exist on disk but not in a repository.
     * @returns the data, or %NULL if unset
     */
    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string): any | null
    /**
     * Gets the package object ID
     * @returns the ID, or %NULL if unset
     */
    getId(): string
    /**
     * Gets the package object ID
     * @returns the #PkInfoEnum
     */
    getInfo(): InfoEnum
    /**
     * Gets the package name.
     * @returns the name, or %NULL if unset
     */
    getName(): string
    /**
     * Gets the package object ID
     * @returns the summary, or %NULL if unset
     */
    getSummary(): string
    /**
     * Returns the `package` update severity. Can be one of %PK_INFO_ENUM_UNKNOWN,
     * %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL, %PK_INFO_ENUM_IMPORTANT or
     * %PK_INFO_ENUM_CRITICAL.
     * @returns the @package update severity, if known.
     */
    getUpdateSeverity(): InfoEnum
    /**
     * Gets the package version.
     * @returns the version, or %NULL if unset
     */
    getVersion(): string
    /**
     * Parses the data to populate the #PkPackage.
     * @param data the data describing the package
     * @returns %TRUE if the data was parsed correcty
     */
    parse(data: string): boolean
    /**
     * Prints details about the package to standard out.
     */
    print(): void
    /**
     * Sets the package object to have the given ID
     * @param packageId the valid package_id
     * @returns %TRUE if the package_id was set
     */
    setId(packageId: string): boolean
    /**
     * Sets the package info enum.
     * @param info the #PkInfoEnum
     */
    setInfo(info: InfoEnum): void
    /**
     * Sets the package summary.
     * @param summary the package summary
     */
    setSummary(summary: string): void
    /**
     * Set an update severity for the `package`. The `update_severity` can be
     * one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
     * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
     * @param updateSeverity a #PkInfoEnum
     */
    setUpdateSeverity(updateSeverity: InfoEnum): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Package

    changed(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Package

    connect(sigName: "changed", callback: Package.ChangedSignalCallback): number
    on(sigName: "changed", callback: Package.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Package.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Package.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Package

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::group", callback: (...args: any[]) => void): number
    on(sigName: "notify::group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::info", callback: (...args: any[]) => void): number
    on(sigName: "notify::info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-bugzilla-urls", ...args: any[]): void
    connect(sigName: "notify::update-changelog", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-changelog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-changelog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-changelog", ...args: any[]): void
    connect(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-cve-urls", ...args: any[]): void
    connect(sigName: "notify::update-issued", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-issued", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-issued", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-issued", ...args: any[]): void
    connect(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-obsoletes", ...args: any[]): void
    connect(sigName: "notify::update-restart", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-restart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-restart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-restart", ...args: any[]): void
    connect(sigName: "notify::update-severity", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-severity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-severity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-severity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-severity", ...args: any[]): void
    connect(sigName: "notify::update-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-state", ...args: any[]): void
    connect(sigName: "notify::update-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-text", ...args: any[]): void
    connect(sigName: "notify::update-updated", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-updated", ...args: any[]): void
    connect(sigName: "notify::update-updates", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-updates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-updates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-updates", ...args: any[]): void
    connect(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-vendor-urls", ...args: any[]): void
    connect(sigName: "notify::url", callback: (...args: any[]) => void): number
    on(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Package extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Package

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Package

    constructor(config?: Package.ConstructorProperties) 
    constructor() 
    static new(): Package

    // Overloads of new

    static new(): Source
    _init(config?: Package.ConstructorProperties): void
    /**
     * Generate a PackageID.
     * @param name the package name
     * @param version the package version
     * @param arch the package architecture
     * @param data the package extra data
     * @returns returns a string to form the PackageID.
     */
    static idBuild(name: string, version: string, arch: string, data: string): string | null
    /**
     * Check if a Packageid is well formed.
     * @param packageId the PackageID to check
     * @returns %TRUE if the PackageID was well formed.
     */
    static idCheck(packageId: string): boolean
    /**
     * Only compare the name, version, and arch, where the architecture will fuzzy
     * match with i*86.
     * @param packageId1 the first PackageID
     * @param packageId2 the second PackageID
     * @returns %TRUE if the PackageIDs can be considered equal.
     */
    static idEqualFuzzyArch(packageId1: string, packageId2: string): boolean
    /**
     * Splits a PackageID into the correct number of parts, checking the correct
     * number of delimiters are present.
     * @param packageId the ; delimited PackageID to split
     * @returns a GStrv or %NULL if invalid, use g_strfreev() to free
     */
    static idSplit(packageId: string): string[]
    /**
     * Formats the PackageID to be printable to the user.
     * @param packageId the PackageID
     * @returns the name-version.arch formatted string, use g_free() to free.
     */
    static idToPrintable(packageId: string): string | null
    /**
     * Adds a package_id to an existing list.
     * @param packageIds a string array of package_id's
     * @param packageId a single package_id
     * @returns the new list, free g_strfreev()
     */
    static idsAddId(packageIds: string | null, packageId: string): string[]
    /**
     * Adds a package_id to an existing list.
     * @param packageIds a string array of package_id's
     * @param packageIdsNew a string array of package_id's
     * @returns the new list, free g_strfreev()
     */
    static idsAddIds(packageIds: string | null, packageIdsNew: string | null): string[]
    /**
     * Check the string array of package_id's for validity
     * @param packageIds a string array of package_id's
     * @returns %TRUE if the package_ids are all valid.
     */
    static idsCheck(packageIds: string | null): boolean
    /**
     * Form a composite string array of package_id's from
     * a single package_id
     * @param packageId A single package_id
     * @returns the string array, or %NULL if invalid, free with g_strfreev()
     */
    static idsFromId(packageId: string): string[]
    /**
     * Form a composite string array of package_id's from
     * a delimited string
     * @param packageId A single package_id
     * @returns the string array, or %NULL if invalid, free with g_strfreev()
     */
    static idsFromString(packageId: string): string[]
    /**
     * Finds out if a package ID is present in the list.
     * @param packageIds a string array of package_id's
     * @param packageId a single package_id
     * @returns %TRUE if the package ID is present
     */
    static idsPresentId(packageIds: string | null, packageId: string): boolean
    /**
     * Removes a package ID from the the list.
     * @param packageIds a string array of package_id's
     * @param packageId a single package_id
     * @returns the new list, free g_strfreev()
     */
    static idsRemoveId(packageIds: string | null, packageId: string): string[]
    /**
     * Cats the string array of package_id's into one delimited string
     * @param packageIds a string array of package_id's
     * @returns a string representation of all the package_id's.
     */
    static idsToString(packageIds: string | null): string | null
}

export module PackageSack {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PackageSack {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    parent: GObject.Object
    priv: PackageSackPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    /**
     * Adds a package to the sack.
     * @param package a valid #PkPackage instance
     * @returns %TRUE if the package was added to the sack
     */
    addPackage(package: Package): boolean
    /**
     * Adds a package reference to the sack.
     * @param packageId a package_id descriptor
     * @returns %TRUE if the package was added to the sack
     */
    addPackageById(packageId: string): boolean
    /**
     * Adds packages from package-list file to a #PkPackageSack.
     * @param file a valid package-list file
     * @returns %TRUE if there were no errors.
     */
    addPackagesFromFile(file: Gio.File): boolean
    /**
     * Empty all the packages from the sack
     */
    clear(): void
    /**
     * Returns a new package sack which only matches packages that return %TRUE
     * from the filter function.
     * @param filterCb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to add
     * @returns a new #PkPackageSack, free with g_object_unref()
     */
    filter(filterCb: PackageSackFilterFunc): PackageSack
    /**
     * Returns a new package sack which only matches packages that match the
     * specified info enum value.
     * @param info a #PkInfoEnum value to match
     * @returns a new #PkPackageSack, free with g_object_unref()
     */
    filterByInfo(info: InfoEnum): PackageSack
    /**
     * Finds a package in a sack from reference. As soon as one package is found
     * the search is stopped.
     * @param packageId a package_id descriptor
     * @returns the #PkPackage object, or %NULL if unfound. Free with g_object_unref()
     */
    findById(packageId: string): Package
    /**
     * Finds a package in a sack by package name and architecture. As soon as one
     * package is found the search is stopped.
     * @param packageId a package_id descriptor
     * @returns the #PkPackage object, or %NULL if not found.
     */
    findByIdNameArch(packageId: string): Package
    /**
     * Gets the package array from the sack
     * @returns A #GPtrArray, free with g_ptr_array_unref().
     */
    getArray(): Package[]
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    getDetails(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    getDetailsAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Returns all the Package IDs in the sack
     * @returns the number of packages in the sack, free with g_strfreev()
     */
    getIds(): string[]
    /**
     * Gets the number of packages in the sack
     * @returns the number of packages in the sack
     */
    getSize(): number
    /**
     * Gets the total size of the package sack in bytes.
     * @returns the size in bytes
     */
    getTotalBytes(): number
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    getUpdateDetail(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in update details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    getUpdateDetailAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    mergeGenericFinish(res: Gio.AsyncResult): boolean
    /**
     * Removes from the package sack any packages that return %FALSE from the filter
     * function.
     * @param filterCb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to retain
     * @returns %TRUE if a package was removed from the sack
     */
    removeByFilter(filterCb: PackageSackFilterFunc): boolean
    /**
     * Removes a package reference from the sack. The pointers have to match exactly.
     * @param package a valid #PkPackage instance
     * @returns %TRUE if the package was removed from the sack
     */
    removePackage(package: Package): boolean
    /**
     * Removes a package reference from the sack. As soon as one package is removed
     * the search is stopped.
     * @param packageId a package_id descriptor
     * @returns %TRUE if the package was removed from the sack
     */
    removePackageById(packageId: string): boolean
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    resolve(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages using resolve.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    resolveAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Sorts the package sack
     * @param type the type of sorting, e.g. #PK_PACKAGE_SACK_SORT_TYPE_NAME
     */
    sort(type: PackageSackSortType): void
    /**
     * Write the contents of a #PkPackageSack to a package-list file.
     * @param file a valid package-list file
     * @returns %TRUE if there were no errors.
     */
    toFile(file: Gio.File): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.PackageSack

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

export class PackageSack extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    constructor(config?: PackageSack.ConstructorProperties) 
    constructor() 
    static new(): PackageSack
    _init(config?: PackageSack.ConstructorProperties): void
}

export module Progress {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Progress

        /**
         * %TRUE if this transaction can be cancelled.
         */
        allow_cancel?: boolean | null
        /**
         * %TRUE if the transaction caller is still connected.
         */
        caller_active?: boolean | null
        /**
         * Number of bytes remaining to download.
         */
        download_size_remaining?: number | null
        /**
         * Amount of time the transaction has taken in seconds.
         */
        elapsed_time?: number | null
        /**
         * Item progress associated with this transaction.
         */
        item_progress?: ItemProgress | null
        /**
         * The package this transaction is acting on.
         */
        package?: Package | null
        /**
         * Package ID this transaction is acting on.
         */
        package_id?: string | null
        /**
         * Percentage complete of this transaction.
         */
        percentage?: number | null
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         */
        remaining_time?: number | null
        /**
         * Role of this transaction.
         */
        role?: number | null
        /**
         * The D-Bus name of the client that started this transaction.
         */
        sender?: string | null
        /**
         * Transaction speed in bits per second or 0 if unknown.
         */
        speed?: number | null
        /**
         * Status of this transaction.
         */
        status?: number | null
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
         */
        transaction_flags?: number | null
        /**
         * ID used by this transaction.
         */
        transaction_id?: string | null
        /**
         * The UID that started this transaction.
         */
        uid?: number | null
    }

}

export interface Progress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * %TRUE if this transaction can be cancelled.
     */
    allowCancel: boolean
    /**
     * %TRUE if the transaction caller is still connected.
     */
    callerActive: boolean
    /**
     * Number of bytes remaining to download.
     */
    downloadSizeRemaining: number
    /**
     * Amount of time the transaction has taken in seconds.
     */
    elapsedTime: number
    /**
     * Item progress associated with this transaction.
     */
    itemProgress: ItemProgress
    /**
     * The package this transaction is acting on.
     */
    package: Package
    /**
     * Package ID this transaction is acting on.
     */
    packageId: string | null
    /**
     * Percentage complete of this transaction.
     */
    percentage: number
    /**
     * Amount of time the transaction will take to complete in seconds or 0 if unknown.
     */
    remainingTime: number
    /**
     * Role of this transaction.
     */
    role: number
    /**
     * The D-Bus name of the client that started this transaction.
     */
    sender: string | null
    /**
     * Transaction speed in bits per second or 0 if unknown.
     */
    speed: number
    /**
     * Status of this transaction.
     */
    status: number
    /**
     * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
     */
    transactionFlags: number
    /**
     * ID used by this transaction.
     */
    transactionId: string | null
    /**
     * The UID that started this transaction.
     */
    uid: number
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Progress

    parent: GObject.Object
    priv: ProgressPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * Get if this transaction can be cancelled.
     * @returns %TRUE if progress can be cancelled.
     */
    getAllowCancel(): boolean
    /**
     * Get if the transaction caller is connected.
     * @returns %TRUE if the transaction caller is still connected.
     */
    getCallerActive(): boolean
    /**
     * Get the number of bytes remaining to download.
     * @returns number of bytes remaining to download.
     */
    getDownloadSizeRemaining(): number
    /**
     * Get the amount of time the transaction has taken.
     * @returns time in seconds
     */
    getElapsedTime(): number
    /**
     * Get the item progress associated with this transaction.
     * @returns a #PkItemProgress
     */
    getItemProgress(): ItemProgress
    /**
     * Get the package this transaction is acting on.
     * @returns a #PkPackage
     */
    getPackage(): Package
    /**
     * Get the package ID this transaction is acting on.
     * @returns a PackageID
     */
    getPackageId(): string
    /**
     * Get the percentage complete.
     * @returns a percentage (0-100)
     */
    getPercentage(): number
    /**
     * Get the amount of time the transaction will take to complete.
     * @returns time in seconds or 0 if unknown.
     */
    getRemainingTime(): number
    /**
     * Get the role of this transaction.
     * @returns a #PkRoleEnum
     */
    getRole(): RoleEnum
    /**
     * Get the D-Bus name of the client that started this transaction.
     * @returns a D-Bus name
     */
    getSender(): string | null
    /**
     * Get the speed of this transaction.
     * @returns speed in bits per scond or 0 if unknown
     */
    getSpeed(): number
    /**
     * Get the status of this transaction.
     * @returns a status string
     */
    getStatus(): StatusEnum
    /**
     * Get the flags associated with this transaction.
     * @returns a #PkBitfield containing #PkTransactionFlagEnum values.
     */
    getTransactionFlags(): number
    /**
     * Get the ID used by this transaction.
     * @returns a transaction ID.
     */
    getTransactionId(): string
    /**
     * Get the UID that started this transaction.
     * @returns an UID
     */
    getUid(): number
    /**
     * Set if this transaction can be cancelled.
     * @param allowCancel %TRUE if this transaction can be cancelled.
     * @returns %TRUE if value changed.
     */
    setAllowCancel(allowCancel: boolean): boolean
    /**
     * Set if the transaction caller is connected.
     * @param callerActive %TRUE if the transaction caller is still connected.
     * @returns %TRUE if value changed.
     */
    setCallerActive(callerActive: boolean): boolean
    /**
     * Set the number of bytes remaining to download.
     * @param downloadSizeRemaining number of bytes remaining to download.
     * @returns %TRUE if value changed.
     */
    setDownloadSizeRemaining(downloadSizeRemaining: number): boolean
    /**
     * Set the amount of time the transaction has taken.
     * @param elapsedTime time in seconds
     * @returns %TRUE if value changed.
     */
    setElapsedTime(elapsedTime: number): boolean
    /**
     * Set the item progress associated with this transaction.
     * @param itemProgress a #PkItemProgress
     * @returns %TRUE if value changed.
     */
    setItemProgress(itemProgress: ItemProgress): boolean
    /**
     * Set the package this transaction is acting on.
     * @param package a #PkPackage
     * @returns %TRUE if value changed.
     */
    setPackage(package: Package): boolean
    /**
     * Set the package ID this transaction is acting on.
     * @param packageId a PackageID
     * @returns %TRUE if value changed.
     */
    setPackageId(packageId: string): boolean
    /**
     * Set the percentage complete of this transaction.
     * @param percentage a percentage value (0-100)
     * @returns %TRUE if value changed.
     */
    setPercentage(percentage: number): boolean
    /**
     * Set the amount of time the transaction will take to complete.
     * @param remainingTime time in seconds or 0 if unknown.
     * @returns %TRUE if value changed.
     */
    setRemainingTime(remainingTime: number): boolean
    /**
     * Set the role of this transaction.
     * @param role a #PkRoleEnum
     * @returns %TRUE if value changed.
     */
    setRole(role: RoleEnum): boolean
    /**
     * Set the D-Bus name of the client that started this transaction.
     * @param busName a D-Bus name
     * @returns %TRUE if value changed.
     */
    setSender(busName: string): boolean
    /**
     * Set the speed of this transaction.
     * @param speed speed in bits per second or 0 if unknown
     * @returns %TRUE if value changed.
     */
    setSpeed(speed: number): boolean
    /**
     * Set the status of this transaction.
     * @param status a #PkStatusEnum
     * @returns %TRUE if value changed.
     */
    setStatus(status: StatusEnum): boolean
    /**
     * Set the flags associated with this transaction.
     * @param transactionFlags a #PkBitfield containing #PkTransactionFlagEnum values.
     * @returns %TRUE if value changed.
     */
    setTransactionFlags(transactionFlags: number): boolean
    /**
     * Set the ID used by this transaction.
     * @param transactionId a transaction ID.
     * @returns %TRUE if value changed.
     */
    setTransactionId(transactionId: string): boolean
    /**
     * Set the UID that started this transaction.
     * @param uid a UID
     * @returns %TRUE if value changed.
     */
    setUid(uid: number): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Progress

    connect(sigName: "notify::allow-cancel", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-cancel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-cancel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-cancel", ...args: any[]): void
    connect(sigName: "notify::caller-active", callback: (...args: any[]) => void): number
    on(sigName: "notify::caller-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caller-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caller-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caller-active", ...args: any[]): void
    connect(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void): number
    on(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::download-size-remaining", ...args: any[]): void
    connect(sigName: "notify::elapsed-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::elapsed-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::elapsed-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::elapsed-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::elapsed-time", ...args: any[]): void
    connect(sigName: "notify::item-progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::item-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::item-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::item-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::item-progress", ...args: any[]): void
    connect(sigName: "notify::package", callback: (...args: any[]) => void): number
    on(sigName: "notify::package", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (...args: any[]) => void): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::speed", callback: (...args: any[]) => void): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-flags", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
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

export class Progress extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Progress

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Progress

    constructor(config?: Progress.ConstructorProperties) 
    /**
     * #PkProgress is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     * @returns A new #PkProgress instance
     */
    constructor() 
    /**
     * #PkProgress is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     * @returns A new #PkProgress instance
     */
    static new(): Progress
    _init(config?: Progress.ConstructorProperties): void
}

export module RepoDetail {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

        description?: string | null
        enabled?: boolean | null
        repo_id?: string | null
    }

}

export interface RepoDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    description: string | null
    enabled: boolean
    repoId: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    /**
     * Gets the repository description.
     * @returns string ID, e.g. "Fedora 20 - i386"
     */
    getDescription(): string
    /**
     * Gets the repository enabled status.
     * @returns %TRUE for enabled
     */
    getEnabled(): boolean
    /**
     * Gets the repository ID.
     * @returns string ID, e.g. "fedora"
     */
    getId(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::repo-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::repo-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repo-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repo-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repo-id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RepoDetail extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    constructor(config?: RepoDetail.ConstructorProperties) 
    constructor() 
    static new(): RepoDetail

    // Overloads of new

    static new(): Source
    _init(config?: RepoDetail.ConstructorProperties): void
}

export module RepoSignatureRequired {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

        key_fingerprint?: string | null
        key_id?: string | null
        key_timestamp?: string | null
        key_url?: string | null
        key_userid?: string | null
        package_id?: string | null
        repository_name?: string | null
        type?: SigTypeEnum | null
    }

}

export interface RepoSignatureRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    keyFingerprint: string | null
    keyId: string | null
    keyTimestamp: string | null
    keyUrl: string | null
    keyUserid: string | null
    packageId: string | null
    repositoryName: string | null
    type: SigTypeEnum
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    parent: Source & GObject.Object
    priv: any

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    connect(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-fingerprint", ...args: any[]): void
    connect(sigName: "notify::key-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-id", ...args: any[]): void
    connect(sigName: "notify::key-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-timestamp", ...args: any[]): void
    connect(sigName: "notify::key-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-url", ...args: any[]): void
    connect(sigName: "notify::key-userid", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-userid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-userid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-userid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-userid", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::repository-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::repository-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repository-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repository-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repository-name", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RepoSignatureRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    constructor(config?: RepoSignatureRequired.ConstructorProperties) 
    constructor() 
    static new(): RepoSignatureRequired

    // Overloads of new

    static new(): Source
    _init(config?: RepoSignatureRequired.ConstructorProperties): void
}

export module RequireRestart {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

        package_id?: string | null
        restart?: RestartEnum | null
    }

}

export interface RequireRestart {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    packageId: string | null
    restart: RestartEnum
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    parent: Source & GObject.Object
    priv: any

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::restart", callback: (...args: any[]) => void): number
    on(sigName: "notify::restart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restart", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RequireRestart extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    constructor(config?: RequireRestart.ConstructorProperties) 
    constructor() 
    static new(): RequireRestart

    // Overloads of new

    static new(): Source
    _init(config?: RequireRestart.ConstructorProperties): void
}

export module Results {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Results

        inputs?: number | null
        progress?: Progress | null
        /**
         * The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
         */
        role?: RoleEnum | null
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum for this result.
         */
        transaction_flags?: number | null
    }

}

export interface Results {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Results

    inputs: number
    progress: Progress
    /**
     * The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
     */
    role: RoleEnum
    /**
     * A #PkBitfield containing #PkTransactionFlagEnum for this result.
     */
    transactionFlags: number
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Results

    parent: GObject.Object
    priv: ResultsPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Results

    /**
     * Adds a category item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addCategory(item: Category): boolean
    /**
     * Adds some package details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addDetails(item: Details): boolean
    /**
     * Adds a distribution upgrade item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addDistroUpgrade(item: DistroUpgrade): boolean
    /**
     * Adds some EULA details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addEulaRequired(item: EulaRequired): boolean
    /**
     * Adds some files details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addFiles(item: Files): boolean
    /**
     * Adds some media change details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addMediaChangeRequired(item: MediaChangeRequired): boolean
    /**
     * Adds a package to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addPackage(item: Package): boolean
    /**
     * Adds some repository details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addRepoDetail(item: RepoDetail): boolean
    /**
     * Adds some repository signature details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addRepoSignatureRequired(item: RepoSignatureRequired): boolean
    /**
     * Adds a require restart item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addRequireRestart(item: RequireRestart): boolean
    /**
     * Adds a transaction item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addTransaction(item: TransactionPast): boolean
    /**
     * Adds some update details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    addUpdateDetail(item: UpdateDetail): boolean
    /**
     * Gets the categories from the transaction.
     * @returns A #GPtrArray array of #PkCategory's, free with g_ptr_array_unref().
     */
    getCategoryArray(): Category[]
    /**
     * Gets the package details from the transaction.
     * @returns A #GPtrArray array of #PkDetails's, free with g_ptr_array_unref().
     */
    getDetailsArray(): Details[]
    /**
     * Gets the distribution upgrades from the transaction.
     * @returns A #GPtrArray array of #PkDistroUpgrade's, free with g_ptr_array_unref().
     */
    getDistroUpgradeArray(): DistroUpgrade[]
    /**
     * Gets the last error code from the transaction.
     * @returns A #PkError, or %NULL, free with g_object_unref()
     */
    getErrorCode(): Error
    /**
     * Gets the eulas required from the transaction.
     * @returns A #GPtrArray array of #PkEulaRequired's, free with g_ptr_array_unref().
     */
    getEulaRequiredArray(): EulaRequired[]
    /**
     * Gets the exit enum. You probably don't want to be using this function, and
     * instead using the much more useful pk_results_get_error_code() function.
     * @returns The #PkExitEnum or %PK_EXIT_ENUM_UNKNOWN for error or if it was not set
     */
    getExitCode(): ExitEnum
    /**
     * Gets the files from the transaction.
     * @returns A #GPtrArray array of #PkFiles's, free with g_ptr_array_unref().
     */
    getFilesArray(): Files[]
    /**
     * Gets the media changes required from the transaction.
     * @returns A #GPtrArray array of #PkMediaChangeRequired's, free with g_ptr_array_unref().
     */
    getMediaChangeRequiredArray(): MediaChangeRequired[]
    /**
     * Gets the packages from the transaction.
     * @returns A #GPtrArray array of #PkPackage's, free with g_ptr_array_unref().
     */
    getPackageArray(): Package[]
    /**
     * Gets a package sack from the transaction.
     * @returns A #PkPackageSack of data, g_object_unref() to free.
     */
    getPackageSack(): PackageSack
    /**
     * Gets the repository details from the transaction.
     * @returns A #GPtrArray array of #PkRepoDetail's, free with g_ptr_array_unref().
     */
    getRepoDetailArray(): RepoDetail[]
    /**
     * Gets the repository signatures required from the transaction.
     * @returns A #GPtrArray array of #PkRepoSignatureRequired's, free with g_ptr_array_unref().
     */
    getRepoSignatureRequiredArray(): RepoSignatureRequired[]
    /**
     * Gets the require restarts from the transaction.
     * @returns A #GPtrArray array of #PkRequireRestart's, free with g_ptr_array_unref().
     */
    getRequireRestartArray(): RequireRestart[]
    /**
     * This method returns the 'worst' restart of all the transactions.
     * It is needed as multiple sub-transactions may emit require-restart with
     * different values, and we always want to get the most invasive of all.
     * 
     * For instance, if a transaction emits RequireRestart(system) and then
     * RequireRestart(session) then pk_client_get_require_restart will return
     * system as a session restart is implied with a system restart.
     * @returns a #PkRestartEnum value, e.g. PK_RESTART_ENUM_SYSTEM
     */
    getRequireRestartWorst(): RestartEnum
    /**
     * Gets the role that produced these results.
     * @returns The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
     */
    getRole(): RoleEnum
    /**
     * Gets the transactions from the transaction.
     * @returns A #GPtrArray array of #PkTransactionPast's, free with g_ptr_array_unref().
     */
    getTransactionArray(): TransactionPast[]
    /**
     * Gets the transaction flag for these results.
     * @returns a #PkBitfield containing #PkTransactionFlagEnum 0 if not set
     */
    getTransactionFlags(): Bitfield
    /**
     * Gets the update details from the transaction.
     * @returns A #GPtrArray array of #PkUpdateDetail's, free with g_ptr_array_unref().
     */
    getUpdateDetailArray(): UpdateDetail[]
    /**
     * Adds some error details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    setErrorCode(item: Error): boolean
    /**
     * Sets the results object to have the given exit code.
     * @param exitEnum the exit code
     * @returns %TRUE if the value was set
     */
    setExitCode(exitEnum: ExitEnum): boolean
    /**
     * Sets the results object to have the given role enum.
     * @param role the role enum
     * @returns %TRUE if the value was set
     */
    setRole(role: RoleEnum): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Results

    connect(sigName: "notify::inputs", callback: (...args: any[]) => void): number
    on(sigName: "notify::inputs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inputs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inputs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inputs", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-flags", ...args: any[]): void
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

export class Results extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Results

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Results

    constructor(config?: Results.ConstructorProperties) 
    constructor() 
    static new(): Results
    _init(config?: Results.ConstructorProperties): void
}

export module Source {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Source

        role?: RoleEnum | null
        transaction_id?: string | null
    }

}

export interface Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    role: RoleEnum
    transactionId: string | null
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Source

    parent: GObject.Object
    priv: SourcePrivate

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Source

    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
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

export class Source extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Source

    constructor(config?: Source.ConstructorProperties) 
    constructor() 
    static new(): Source
    _init(config?: Source.ConstructorProperties): void
}

export module Task {

    // Constructor properties interface

    export interface ConstructorProperties extends Client.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Task

        /**
         * %TRUE if package downgrades are allowed.
         */
        allow_downgrade?: boolean | null
        /**
         * %TRUE if package reinstallation shall be allowed during transaction.
         */
        allow_reinstall?: boolean | null
        /**
         * %TRUE if we are just preparing the transaction for later.
         */
        only_download?: boolean | null
        /**
         * %TRUE if only authenticated packages should be allowed in the transaction.
         */
        only_trusted?: boolean | null
        /**
         * %TRUE if we are simulating.
         */
        simulate?: boolean | null
    }

}

export interface Task {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Task

    /**
     * %TRUE if package downgrades are allowed.
     */
    allowDowngrade: boolean
    /**
     * %TRUE if package reinstallation shall be allowed during transaction.
     */
    allowReinstall: boolean
    /**
     * %TRUE if we are just preparing the transaction for later.
     */
    onlyDownload: boolean
    /**
     * %TRUE if only authenticated packages should be allowed in the transaction.
     */
    onlyTrusted: boolean
    /**
     * %TRUE if we are simulating.
     */
    simulate: boolean
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Task

    parent: Client & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Task

    /**
     * Get the list of dependant packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of dependent packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    dependsOnSync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Downloads packages
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Downloads packages
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    downloadPackagesSync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns The #PkResults of the transaction.
     */
    genericFinish(res: Gio.AsyncResult): Results
    /**
     * Gets if we are allow packages to be downgraded.
     * @returns %TRUE if package downgrades are allowed
     */
    getAllowDowngrade(): boolean
    /**
     * Gets if we allow packages to be reinstalled.
     * @returns %TRUE if package reinstallation is allowed
     */
    getAllowReinstall(): boolean
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getCategoriesSync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets details about packages.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets details about packages.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getDetailsSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the files in a package.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the files in a package.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getFilesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets if we are just preparing the transaction for later.
     * @returns %TRUE if only downloading
     */
    getOnlyDownload(): boolean
    /**
     * Gets if we allow only authenticated packages in the transactoin.
     * @returns %TRUE if we allow only authenticated packages
     */
    getOnlyTrusted(): boolean
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getPackagesSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getRepoListSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets if we are simulating.
     * @returns %TRUE if we are simulating
     */
    getSimulate(): boolean
    /**
     * Gets details about updates.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets details about updates.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getUpdateDetailSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    getUpdatesSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installFilesAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of installFilesAsync

    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param transactionFlags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installFilesAsync(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    installFilesSync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Merges in details about packages using resolve.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installPackagesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of installPackagesAsync

    /**
     * Install a package of the newest and most correct version.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installPackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    installPackagesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    refreshCacheSync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    removePackagesAsync(packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of removePackagesAsync

    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    removePackagesAsync(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    removePackagesSync(packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Recover the system from broken dependencies and aborted installations.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repairSystemAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of repairSystemAsync

    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by the user using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repairSystemAsync(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Recover from broken dependencies of installed packages or incomplete
     * installations.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    repairSystemSync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Enable or disable a specific repo.
     * @param repoId The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Enable or disable a specific repo.
     * @param repoId The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    repoEnableSync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    requiredBySync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    resolveSync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchDetailsSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchFilesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchGroupsSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    searchNamesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * If package downgrades shall be allowed during transaction.
     * @param allowDowngrade %TRUE to allow packages to be downgraded.
     */
    setAllowDowngrade(allowDowngrade: boolean): void
    /**
     * If package reinstallation shall be allowed during transaction.
     * @param allowReinstall %TRUE to allow packages to be reinstalled.
     */
    setAllowReinstall(allowReinstall: boolean): void
    /**
     * If the transaction should be prepared (depsolved, packages
     * downloaded, etc) but not committed.
     * @param onlyDownload %FALSE to actually commit the transaction
     */
    setOnlyDownload(onlyDownload: boolean): void
    /**
     * If only authenticated packages should be allowed in the
     * transaction.
     * @param onlyTrusted %TRUE to allow only authenticated packages
     */
    setOnlyTrusted(onlyTrusted: boolean): void
    /**
     * If the simulate step should be run without the actual transaction.
     * @param simulate the simulate mode
     */
    setSimulate(simulate: boolean): void
    /**
     * Update specific packages to the newest available versions.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    updatePackagesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of updatePackagesAsync

    /**
     * Update specific packages to the newest available versions.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    updatePackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    updatePackagesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    upgradeSystemAsync(distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of upgradeSystemAsync

    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    upgradeSystemAsync(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    upgradeSystemSync(distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Mark a EULA as accepted by the user.
     * @param request request ID for EULA.
     * @returns %TRUE if @request is valid.
     */
    userAccepted(request: number): boolean
    /**
     * Mark a EULA as declined by the user.
     * @param request request ID for EULA.
     * @returns %TRUE if @request is valid.
     */
    userDeclined(request: number): boolean
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    whatProvidesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Task

    eulaQuestion(request: number, results: Results): void
    keyQuestion(request: number, results: Results): void
    mediaChangeQuestion(request: number, results: Results): void
    repairQuestion(request: number, results: Results): void
    simulateQuestion(request: number, results: Results): void
    untrustedQuestion(request: number, results: Results): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Task

    connect(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-downgrade", ...args: any[]): void
    connect(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-reinstall", ...args: any[]): void
    connect(sigName: "notify::only-download", callback: (...args: any[]) => void): number
    on(sigName: "notify::only-download", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::only-download", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::only-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::only-download", ...args: any[]): void
    connect(sigName: "notify::only-trusted", callback: (...args: any[]) => void): number
    on(sigName: "notify::only-trusted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::only-trusted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::only-trusted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::only-trusted", ...args: any[]): void
    connect(sigName: "notify::simulate", callback: (...args: any[]) => void): number
    on(sigName: "notify::simulate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::simulate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::simulate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::simulate", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::background", callback: (...args: any[]) => void): number
    on(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details-with-deps-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details-with-deps-size", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::interactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Task extends Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Task

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Task

    constructor(config?: Task.ConstructorProperties) 
    constructor() 
    static new(): Task

    // Overloads of new

    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     * @returns A new #PkClient instance
     */
    static new(): Client
    _init(config?: Task.ConstructorProperties): void
}

export module TransactionList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    export interface AddedSignalCallback {
        (tid: string | null): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (tid: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TransactionList {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    parent: GObject.Object
    priv: TransactionListPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    /**
     * Gets the string lists of transaction IDs recognised as pending, running or finished by the daemon.
     * @returns the array of strings, free with g_strfreev()
     */
    getIds(): string[]

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    added(tid: string): void
    removed(tid: string): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    connect(sigName: "added", callback: TransactionList.AddedSignalCallback): number
    on(sigName: "added", callback: TransactionList.AddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: TransactionList.AddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: TransactionList.AddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "added", ...args: any[]): void
    connect(sigName: "removed", callback: TransactionList.RemovedSignalCallback): number
    on(sigName: "removed", callback: TransactionList.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: TransactionList.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: TransactionList.RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

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

export class TransactionList extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    constructor(config?: TransactionList.ConstructorProperties) 
    constructor() 
    static new(): TransactionList
    _init(config?: TransactionList.ConstructorProperties): void
}

export module TransactionPast {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

        cmdline?: string | null
        data?: string | null
        duration?: number | null
        role?: RoleEnum | null
        succeeded?: boolean | null
        tid?: string | null
        timespec?: string | null
        uid?: number | null
    }

}

export interface TransactionPast {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    cmdline: string | null
    data: string | null
    duration: number
    role: RoleEnum
    succeeded: boolean
    tid: string | null
    timespec: string | null
    uid: number
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    /**
     * Gets the past transaction cmdline value;
     * @returns The transaction data
     */
    getCmdline(): string
    /**
     * Gets the past transaction data;
     * @returns The transaction data
     */
    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string): any | null
    /**
     * Gets the past transaction date & time value;
     * @returns The transaction data, or %NULL if it's not available
     */
    getDatetime(): GLib.DateTime
    /**
     * Gets the past transaction duration;
     * @returns The transaction duration in ms
     */
    getDuration(): number
    /**
     * Gets the past transaction ID value;
     * @returns The transaction data
     */
    getId(): string
    /**
     * Gets the past transaction role;
     * @returns The transaction data
     */
    getRole(): RoleEnum
    /**
     * Gets the past transaction succeeded value;
     * @returns The transaction data
     */
    getSucceeded(): boolean
    /**
     * Gets the past transaction timespec value;
     * @returns The transaction data
     */
    getTimespec(): string
    /**
     * Gets the past transaction timestamp
     * @returns The transaction data, or 0 if it's not available
     */
    getTimestamp(): number
    /**
     * Gets the past transaction uid;
     * @returns The transaction data
     */
    getUid(): number

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    connect(sigName: "notify::cmdline", callback: (...args: any[]) => void): number
    on(sigName: "notify::cmdline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cmdline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cmdline", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::succeeded", callback: (...args: any[]) => void): number
    on(sigName: "notify::succeeded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::succeeded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::succeeded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::succeeded", ...args: any[]): void
    connect(sigName: "notify::tid", callback: (...args: any[]) => void): number
    on(sigName: "notify::tid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tid", ...args: any[]): void
    connect(sigName: "notify::timespec", callback: (...args: any[]) => void): number
    on(sigName: "notify::timespec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timespec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timespec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timespec", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TransactionPast extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    constructor(config?: TransactionPast.ConstructorProperties) 
    constructor() 
    static new(): TransactionPast

    // Overloads of new

    static new(): Source
    _init(config?: TransactionPast.ConstructorProperties): void
}

export module UpdateDetail {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

        bugzilla_urls?: string[] | null
        changelog?: string | null
        cve_urls?: string[] | null
        issued?: string | null
        obsoletes?: string[] | null
        package_id?: string | null
        restart?: RestartEnum | null
        state?: UpdateStateEnum | null
        update_text?: string | null
        updated?: string | null
        updates?: string[] | null
        vendor_urls?: string[] | null
    }

}

export interface UpdateDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    bugzillaUrls: string[]
    changelog: string | null
    cveUrls: string[]
    issued: string | null
    obsoletes: string[]
    packageId: string | null
    restart: RestartEnum
    state: UpdateStateEnum
    updateText: string | null
    updated: string | null
    updates: string[]
    vendorUrls: string[]
    __gtype__: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    /**
     * Gets the update detail bugzilla URLs.
     * @returns string values
     */
    getBugzillaUrls(): string[]
    /**
     * Gets the update detail changelog.
     * @returns string values
     */
    getChangelog(): string
    /**
     * Gets the update detail CVE URLs.
     * @returns string values
     */
    getCveUrls(): string[]
    /**
     * Gets the update detail issued string.
     * @returns string values
     */
    getIssued(): string
    /**
     * Gets the update detail obsoletes IDs.
     * @returns string values
     */
    getObsoletes(): string[]
    /**
     * Gets the update detail package ID.
     * @returns string values
     */
    getPackageId(): string
    /**
     * Gets the update detail restart kind.
     * @returns enum values
     */
    getRestart(): RestartEnum
    /**
     * Gets the update detail state.
     * @returns enum value
     */
    getState(): UpdateStateEnum
    /**
     * Gets the update detail update text.
     * @returns string values
     */
    getUpdateText(): string
    /**
     * Gets the update detail updated string.
     * @returns string values
     */
    getUpdated(): string
    /**
     * Gets the update detail updates IDs.
     * @returns string values
     */
    getUpdates(): string[]
    /**
     * Gets the update detail vendor URLs.
     * @returns string values
     */
    getVendorUrls(): string[]

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    connect(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bugzilla-urls", ...args: any[]): void
    connect(sigName: "notify::changelog", callback: (...args: any[]) => void): number
    on(sigName: "notify::changelog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::changelog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::changelog", ...args: any[]): void
    connect(sigName: "notify::cve-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::cve-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cve-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cve-urls", ...args: any[]): void
    connect(sigName: "notify::issued", callback: (...args: any[]) => void): number
    on(sigName: "notify::issued", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::issued", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::issued", ...args: any[]): void
    connect(sigName: "notify::obsoletes", callback: (...args: any[]) => void): number
    on(sigName: "notify::obsoletes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::obsoletes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::obsoletes", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::restart", callback: (...args: any[]) => void): number
    on(sigName: "notify::restart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restart", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::update-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-text", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (...args: any[]) => void): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::updates", callback: (...args: any[]) => void): number
    on(sigName: "notify::updates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updates", ...args: any[]): void
    connect(sigName: "notify::vendor-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor-urls", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UpdateDetail extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    constructor(config?: UpdateDetail.ConstructorProperties) 
    constructor() 
    static new(): UpdateDetail

    // Overloads of new

    static new(): Source
    _init(config?: UpdateDetail.ConstructorProperties): void
}

export interface CategoryClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.CategoryClass

    parentClass: SourceClass
}

export abstract class CategoryClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.CategoryClass

    static name: string
}

export interface CategoryPrivate {
}

/**
 * Private #PkCategory data
 * @record 
 */
export class CategoryPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.CategoryPrivate

    static name: string
}

export interface ClientClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientClass

    parentClass: GObject.ObjectClass
    changed: (client: Client) => void
}

export abstract class ClientClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientClass

    static name: string
}

export interface ClientHelperClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientHelperClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass

    static name: string
}

export interface ClientHelperPrivate {
}

/**
 * Private #PkClientHelper data
 * @record 
 */
export class ClientHelperPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelperPrivate

    static name: string
}

export interface ClientPrivate {
}

/**
 * Private #PkClient data
 * @record 
 */
export class ClientPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientPrivate

    static name: string
}

export interface ControlClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ControlClass

    parentClass: GObject.ObjectClass
    transactionListChanged: (control: Control, transactionIds: string | null) => void
    updatesChanged: (control: Control) => void
    repoListChanged: (control: Control) => void
    networkStateChanged: (control: Control) => void
    restartSchedule: (control: Control) => void
    locked: (control: Control, isLocked: boolean) => void
    connectionChanged: (control: Control, connected: boolean) => void
}

export abstract class ControlClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ControlClass

    static name: string
}

export interface ControlPrivate {
}

/**
 * Private #PkControl data
 * @record 
 */
export class ControlPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ControlPrivate

    static name: string
}

export interface DesktopClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DesktopClass

    parentClass: GObject.ObjectClass
}

export abstract class DesktopClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DesktopClass

    static name: string
}

export interface DesktopPrivate {
}

/**
 * Private #PkDesktop data
 * @record 
 */
export class DesktopPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DesktopPrivate

    static name: string
}

export interface DetailsClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DetailsClass

    parentClass: SourceClass
}

export abstract class DetailsClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DetailsClass

    static name: string
}

export interface DetailsPrivate {
}

/**
 * Private #PkDetails data
 * @record 
 */
export class DetailsPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DetailsPrivate

    static name: string
}

export interface DistroUpgradeClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass

    parentClass: SourceClass
}

export abstract class DistroUpgradeClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass

    static name: string
}

export interface DistroUpgradePrivate {
}

/**
 * Private #PkDistroUpgrade data
 * @record 
 */
export class DistroUpgradePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradePrivate

    static name: string
}

export interface EnumMatch {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EnumMatch

    /**
     * enumerated value
     * @field 
     */
    value: number
    /**
     * string for given value
     * @field 
     */
    string: string
}

/**
 * Matching an enumerated type to a string
 * @record 
 */
export class EnumMatch {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EnumMatch

    static name: string
}

export interface ErrorClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ErrorClass

    parentClass: SourceClass
}

export abstract class ErrorClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ErrorClass

    static name: string
}

export interface ErrorPrivate {
}

/**
 * Private #PkError data
 * @record 
 */
export class ErrorPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ErrorPrivate

    static name: string
}

export interface EulaRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass

    parentClass: SourceClass
}

export abstract class EulaRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass

    static name: string
}

export interface EulaRequiredPrivate {
}

/**
 * Private #PkEulaRequired data
 * @record 
 */
export class EulaRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredPrivate

    static name: string
}

export interface FilesClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.FilesClass

    parentClass: SourceClass
}

export abstract class FilesClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.FilesClass

    static name: string
}

export interface FilesPrivate {
}

/**
 * Private #PkFiles data
 * @record 
 */
export class FilesPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.FilesPrivate

    static name: string
}

export interface ItemProgressClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass

    parentClass: SourceClass
}

export abstract class ItemProgressClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass

    static name: string
}

export interface ItemProgressPrivate {
}

/**
 * Private #PkItemProgress data
 * @record 
 */
export class ItemProgressPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgressPrivate

    static name: string
}

export interface MediaChangeRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass

    parentClass: SourceClass
}

export abstract class MediaChangeRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass

    static name: string
}

export interface MediaChangeRequiredPrivate {
}

/**
 * Private #PkMediaChangeRequired data
 * @record 
 */
export class MediaChangeRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredPrivate

    static name: string
}

export interface PackageClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageClass

    parentClass: SourceClass
    changed: (package: Package) => void
}

export abstract class PackageClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageClass

    static name: string
}

export interface PackagePrivate {
}

/**
 * Private #PkPackage data
 * @record 
 */
export class PackagePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackagePrivate

    static name: string
}

export interface PackageSackClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass

    parentClass: GObject.ObjectClass
    changed: (sack: PackageSack) => void
}

export abstract class PackageSackClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass

    static name: string
}

export interface PackageSackPrivate {
}

/**
 * Private #PkPackageSack data
 * @record 
 */
export class PackageSackPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackPrivate

    static name: string
}

export interface PackageSackResults {
}

export class PackageSackResults {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackResults

    static name: string
}

export interface ProgressClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ProgressClass

    parentClass: GObject.ObjectClass
}

export abstract class ProgressClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ProgressClass

    static name: string
}

export interface ProgressPrivate {
}

/**
 * Private #PkProgress data
 * @record 
 */
export class ProgressPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ProgressPrivate

    static name: string
}

export interface RepoDetailClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass

    parentClass: SourceClass
}

export abstract class RepoDetailClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass

    static name: string
}

export interface RepoDetailPrivate {
}

/**
 * Private #PkRepoDetail data
 * @record 
 */
export class RepoDetailPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetailPrivate

    static name: string
}

export interface RepoSignatureRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass

    parentClass: SourceClass
}

export abstract class RepoSignatureRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass

    static name: string
}

export interface RepoSignatureRequiredPrivate {
}

/**
 * Private #PkRepoSignatureRequired data
 * @record 
 */
export class RepoSignatureRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredPrivate

    static name: string
}

export interface RequireRestartClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass

    parentClass: SourceClass
}

export abstract class RequireRestartClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass

    static name: string
}

export interface RequireRestartPrivate {
}

/**
 * Private #PkRequireRestart data
 * @record 
 */
export class RequireRestartPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestartPrivate

    static name: string
}

export interface ResultsClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ResultsClass

    parentClass: GObject.ObjectClass
}

export abstract class ResultsClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ResultsClass

    static name: string
}

export interface ResultsPrivate {
}

/**
 * Private #PkResults data
 * @record 
 */
export class ResultsPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ResultsPrivate

    static name: string
}

export interface SourceClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.SourceClass

    parentClass: GObject.ObjectClass
}

export abstract class SourceClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.SourceClass

    static name: string
}

export interface SourcePrivate {
}

/**
 * Private #PkSource data
 * @record 
 */
export class SourcePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.SourcePrivate

    static name: string
}

export interface TaskClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TaskClass

    parentClass: ClientClass
    untrustedQuestion: (task: Task, request: number, results: Results) => void
    keyQuestion: (task: Task, request: number, results: Results) => void
    eulaQuestion: (task: Task, request: number, results: Results) => void
    mediaChangeQuestion: (task: Task, request: number, results: Results) => void
    simulateQuestion: (task: Task, request: number, results: Results) => void
    repairQuestion: (task: Task, request: number, results: Results) => void
}

export abstract class TaskClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TaskClass

    static name: string
}

export interface TaskPrivate {
}

/**
 * Private #PkTask data
 * @record 
 */
export class TaskPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TaskPrivate

    static name: string
}

export interface TransactionListClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass

    parentClass: GObject.ObjectClass
    added: (tlist: TransactionList, tid: string) => void
    removed: (tlist: TransactionList, tid: string) => void
}

export abstract class TransactionListClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass

    static name: string
}

export interface TransactionListPrivate {
}

/**
 * Private #PkTransactionList data
 * @record 
 */
export class TransactionListPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionListPrivate

    static name: string
}

export interface TransactionPastClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass

    parentClass: SourceClass
}

export abstract class TransactionPastClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass

    static name: string
}

export interface TransactionPastPrivate {
}

/**
 * Private #PkTransactionPast data
 * @record 
 */
export class TransactionPastPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPastPrivate

    static name: string
}

export interface UpdateDetailClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass

    parentClass: SourceClass
}

export abstract class UpdateDetailClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass

    static name: string
}

export interface UpdateDetailPrivate {
}

/**
 * Private #PkUpdateDetail data
 * @record 
 */
export class UpdateDetailPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailPrivate

    static name: string
}

    export type Bitfield = number
// END