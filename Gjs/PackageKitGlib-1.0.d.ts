// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PackageKitGlib-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PackageKitGlib {

/**
 * The authorization result
 */
enum AuthorizeEnum {
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
enum ClientError {
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
enum ControlError {
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
enum DistroUpgradeEnum {
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
enum ErrorEnum {
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
enum ExitEnum {
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
enum FilterEnum {
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
enum GroupEnum {
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
    LAST,
}
/**
 * The enumerated types used in Package() - these have to refer to a specific
 * package action, rather than a general state
 */
enum InfoEnum {
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
enum MediaTypeEnum {
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
enum NetworkEnum {
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
enum OfflineAction {
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
enum OfflineError {
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
enum PackageSackSortType {
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
enum ProgressType {
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
}
/**
 * What restart we need to after a transaction, ordered by severity
 */
enum RestartEnum {
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
enum RoleEnum {
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
enum SigTypeEnum {
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
enum StatusEnum {
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
enum TransactionFlagEnum {
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
enum UpdateStateEnum {
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
enum UpgradeKindEnum {
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
enum OfflineFlags {
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
const DBUS_INTERFACE: string
/**
 * The DBUS interface for PackageKit offline update functionality
 */
const DBUS_INTERFACE_OFFLINE: string
/**
 * The DBUS interface for PackageKit transactions.
 */
const DBUS_INTERFACE_TRANSACTION: string
/**
 * The DBUS path to the PackageKit service.
 */
const DBUS_PATH: string
/**
 * The DBUS name for the PackageKit system service.
 */
const DBUS_SERVICE: string
/**
 * The default location for the desktop files
 */
const DESKTOP_DEFAULT_APPLICATION_DIR: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const OFFLINE_DESTDIR: string
const OFFLINE_RESULTS_GROUP: string
const PACKAGE_IDS_DELIM: string
/**
 * Alias to get an arch field from the result of pk_package_id_split
 */
const PACKAGE_ID_ARCH: number
/**
 * Alias to get a data field from the result of pk_package_id_split
 */
const PACKAGE_ID_DATA: number
/**
 * Alias to get a name field from the result of pk_package_id_split
 */
const PACKAGE_ID_NAME: number
/**
 * Alias to get a version field from the result of pk_package_id_split
 */
const PACKAGE_ID_VERSION: number
const SYSTEM_PACKAGE_CACHE_FILENAME: string
const SYSTEM_PACKAGE_LIST_FILENAME: string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param authorize_type Text describing the enumerated type
 */
function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum
/**
 * Converts a enumerated type to its text representation
 * @param authorize_type The enumerated type value
 */
function authorize_type_enum_to_string(authorize_type: AuthorizeEnum): string
/**
 * An error quark for #PkClientError.
 */
function client_error_quark(): GLib.Quark
/**
 * We are a GObject that sets errors
 */
function control_error_quark(): GLib.Quark
/**
 * Add a log domain to the debug output.
 * @param log_domain a log domain
 */
function debug_add_log_domain(log_domain: string): void
/**
 * Check if verbose debugging is enabled.
 */
function debug_is_verbose(): boolean
/**
 * Set if verbose debugging is enabled.
 * @param verbose %TRUE if verbose debugging should be enabled.
 */
function debug_set_verbose(verbose: boolean): void
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgrade Text describing the enumerated type
 */
function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgrade The enumerated type value
 */
function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum): string
/**
 * Search for a enum value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param value the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function enum_find_string(table: EnumMatch, value: number): string
/**
 * Search for a string value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param string the string constant to search for, e.g. "desktop-gnome"
 */
function enum_find_value(table: EnumMatch, string: string): number
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param code Text describing the enumerated type
 */
function error_enum_from_string(code: string): ErrorEnum
/**
 * Converts a enumerated type to its text representation
 * @param code The enumerated type value
 */
function error_enum_to_string(code: ErrorEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param exit Text describing the enumerated type
 */
function exit_enum_from_string(exit: string): ExitEnum
/**
 * Converts a enumerated type to its text representation
 * @param exit The enumerated type value
 */
function exit_enum_to_string(exit: ExitEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param filters the enumerated constant value, e.g. "available;~gui"
 */
function filter_bitfield_from_string(filters: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param filters The enumerated type values
 */
function filter_bitfield_to_string(filters: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param filter Text describing the enumerated type
 */
function filter_enum_from_string(filter: string): FilterEnum
/**
 * Converts a enumerated type to its text representation
 * @param filter The enumerated type value
 */
function filter_enum_to_string(filter: FilterEnum): string
/**
 * Get the distribution ID for the current host, typically "distro;version;arch"
 */
function get_distro_id(): string
/**
 * Converts text representation to its enumerated type bitfield
 * @param groups the enumerated constant value, e.g. "available;~gui"
 */
function group_bitfield_from_string(groups: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param groups The enumerated type values
 */
function group_bitfield_to_string(groups: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param group Text describing the enumerated type
 */
function group_enum_from_string(group: string): GroupEnum
/**
 * Converts a enumerated type to its text representation
 * @param group The enumerated type value
 */
function group_enum_to_string(group: GroupEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param info Text describing the enumerated type
 */
function info_enum_from_string(info: string): InfoEnum
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 */
function info_enum_to_localised_past(info: InfoEnum): string
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 */
function info_enum_to_localised_present(info: InfoEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param info The enumerated type value
 */
function info_enum_to_string(info: InfoEnum): string
/**
 * Convert a date into an ISO8601 data string.
 * @param date a #GDate to convert
 */
function iso8601_from_date(date: GLib.Date): string
/**
 * Get the current date / time as an ISO8601 string.
 */
function iso8601_present(): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param media_type Text describing the enumerated type
 */
function media_type_enum_from_string(media_type: string): MediaTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param media_type The enumerated type value
 */
function media_type_enum_to_string(media_type: MediaTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param network Text describing the enumerated type
 */
function network_enum_from_string(network: string): NetworkEnum
/**
 * Converts a enumerated type to its text representation
 * @param network The enumerated type value
 */
function network_enum_to_string(network: NetworkEnum): string
/**
 * Converts the string to the enumerated value.
 * @param action a string representation of a #PkOfflineAction, e.g. "reboot"
 */
function offline_action_from_string(action: string): OfflineAction
/**
 * Converts the enumerated value to a string.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 */
function offline_action_to_string(action: OfflineAction): string
function offline_auth_cancel(): boolean
function offline_auth_clear_results(): boolean
function offline_auth_invalidate(): boolean
function offline_auth_set_action(action: OfflineAction): boolean
function offline_auth_set_prepared_ids(package_ids: string): boolean
function offline_auth_set_prepared_upgrade(name: string, release_ver: string): boolean
function offline_auth_set_results(results: Results): boolean
function offline_auth_trigger(action: OfflineAction): boolean
function offline_auth_trigger_upgrade(action: OfflineAction): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_cancel_with_flags().
 * @param cancellable A #GCancellable or %NULL
 */
function offline_cancel(cancellable: Gio.Cancellable | null): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
function offline_cancel_with_flags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_clear_results_with_flags().
 * @param cancellable A #GCancellable or %NULL
 */
function offline_clear_results(cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
function offline_clear_results_with_flags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * An error quark for #PkOfflineError.
 */
function offline_error_quark(): GLib.Quark
/**
 * Gets the action that will be taken after the offline action has completed.
 * 
 * An error is set if the the value %PK_OFFLINE_ACTION_UNKNOWN is returned.
 */
function offline_get_action(): OfflineAction
/**
 * Gets a file monitor for the trigger.
 * @param cancellable A #GCancellable or %NULL
 */
function offline_get_action_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the package-ids in the prepared transaction.
 */
function offline_get_prepared_ids(): string[]
/**
 * Gets a file monitor for the prepared transaction.
 * @param cancellable A #GCancellable or %NULL
 */
function offline_get_prepared_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets a package sack of the packages in the prepared transaction.
 */
function offline_get_prepared_sack(): PackageSack
function offline_get_prepared_upgrade(name: string, release_ver: string): boolean
/**
 * Gets a file monitor for the prepared system upgrade transaction.
 * @param cancellable A #GCancellable or %NULL
 */
function offline_get_prepared_upgrade_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the name of the prepared system upgrade in the prepared transaction.
 */
function offline_get_prepared_upgrade_name(): string
/**
 * Gets the version of the prepared system upgrade in the prepared transaction.
 */
function offline_get_prepared_upgrade_version(): string
/**
 * Gets the last result of the offline transaction.
 */
function offline_get_results(): Results
/**
 * Gets the modification time of the prepared transaction.
 */
function offline_get_results_mtime(): number
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 */
function offline_trigger(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_upgrade_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 */
function offline_trigger_upgrade(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
function offline_trigger_upgrade_with_flags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
function offline_trigger_with_flags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
function polkit_agent_close(): void
function polkit_agent_open(): number
/**
 * Form a composite string array of strings.
 * The data in the GPtrArray is copied.
 * @param array the GPtrArray of strings
 */
function ptr_array_to_strv(array: string[]): string[]
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param restart Text describing the enumerated type
 */
function restart_enum_from_string(restart: string): RestartEnum
/**
 * Converts a enumerated type to its text representation
 * @param restart The enumerated type value
 */
function restart_enum_to_string(restart: RestartEnum): string
/**
 * Converts text representation to its enumerated type bitfield
 * @param roles the enumerated constant value, e.g. "search-file;update-system"
 */
function role_bitfield_from_string(roles: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param roles The enumerated type values
 */
function role_bitfield_to_string(roles: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param role Text describing the enumerated type
 */
function role_enum_from_string(role: string): RoleEnum
/**
 * Converts a enumerated type to its localized description
 * @param role The enumerated type value
 */
function role_enum_to_localised_present(role: RoleEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param role The enumerated type value
 */
function role_enum_to_string(role: RoleEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param sig_type Text describing the enumerated type
 */
function sig_type_enum_from_string(sig_type: string): SigTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param sig_type The enumerated type value
 */
function sig_type_enum_to_string(sig_type: SigTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param status Text describing the enumerated type
 */
function status_enum_from_string(status: string): StatusEnum
function status_enum_to_localised_text(status: StatusEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param status The enumerated type value
 */
function status_enum_to_string(status: StatusEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param transaction_flags the enumerated constant value, e.g. "only-trusted;simulate"
 */
function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param transaction_flags The enumerated type values
 */
function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param transaction_flag Text describing the enumerated type
 */
function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum
/**
 * Converts a enumerated type to its text representation
 * @param transaction_flag The enumerated type value
 */
function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param update_state Text describing the enumerated type
 */
function update_state_enum_from_string(update_state: string): UpdateStateEnum
/**
 * Converts a enumerated type to its text representation
 * @param update_state The enumerated type value
 */
function update_state_enum_to_string(update_state: UpdateStateEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgrade_kind Text describing the enumerated type
 */
function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgrade_kind The enumerated type value
 */
function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum): string
/**
 * Function to filter packages in #PkPackageSack.
 * @callback 
 * @param package the package being considered
 */
interface PackageSackFilterFunc {
    (package: Package): boolean
}
/**
 * Function that is called when progress updates are given.
 * @callback 
 * @param progress a #PkProgress
 * @param type the type of progress update this is
 */
interface ProgressCallback {
    (progress: Progress, type: ProgressType): void
}
interface Category_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Category

    cat_id?: string | null
    icon?: string | null
    name?: string | null
    parent_id?: string | null
    summary?: string | null
}

interface Category {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    cat_id: string
    icon: string
    name: string
    parent_id: string
    summary: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Category

    parent: Source
    priv: CategoryPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Category

    /**
     * Gets the icon filename.
     */
    get_icon(): string
    /**
     * Gets the id specific to this category.
     */
    get_id(): string
    /**
     * Gets the name.
     */
    get_name(): string
    /**
     * Gets the parent category id.
     */
    get_parent_id(): string
    /**
     * Gets the summary.
     */
    get_summary(): string
    /**
     * Sets the icon filename.
     * @param icon the new value
     */
    set_icon(icon: string): void
    /**
     * Sets the id specific to this category.
     * @param cat_id the new value
     */
    set_id(cat_id: string): void
    /**
     * Sets the name.
     * @param name the new value
     */
    set_name(name: string): void
    /**
     * Sets the parent category id.
     * @param parent_id the new value
     */
    set_parent_id(parent_id: string): void
    /**
     * Sets the summary.
     * @param summary the new value
     */
    set_summary(summary: string): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Category

    connect(sigName: "notify::cat-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cat-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cat-id", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Category extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Category

    constructor(config?: Category_ConstructProps) 
    constructor() 
    static new(): Category

    // Overloads of new

    static new(): Source
    _init(config?: Category_ConstructProps): void
}

interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Client

    background?: boolean | null
    cache_age?: number | null
    interactive?: boolean | null
    locale?: string | null
}

interface Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    background: boolean
    cache_age: number
    readonly idle: boolean
    interactive: boolean
    locale: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Client

    /**
     * We may want to agree to a EULA dialog if one is presented.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param eula_id the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * We may want to agree to a EULA dialog if one is presented.
     * @param eula_id the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    accept_eula_async(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Adopt a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    adopt(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Adopt a transaction which allows the caller to monitor the state or cancel it.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    adopt_async(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages that depend this one, i.e. child.parent.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for depends
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    depends_on(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the packages that depend this one, i.e. child->parent.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for depends
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Downloads package files to a specified location.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    download_packages(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Downloads package files to a specified location.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    generic_finish(res: Gio.AsyncResult): Results
    /**
     * Gets the background value.
     */
    get_background(): boolean
    /**
     * Gets the maximum cache age value.
     */
    get_cache_age(): number
    /**
     * Get a list of all categories supported.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get a list of all categories supported.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_details(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get details of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_details_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_details_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_distro_upgrades_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_files(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get file list of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_files_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get file list of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_files_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets if the transaction client idle value.
     */
    get_idle(): boolean
    /**
     * Gets the client interactive value.
     */
    get_interactive(): boolean
    /**
     * Gets the locale used for this transaction.
     */
    get_locale(): string
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_old_transactions(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_old_transactions_async(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of packages from the backend
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_packages(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the list of packages from the backend
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the progress of a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transaction_id The transaction id
     * @param cancellable a #GCancellable or %NULL
     */
    get_progress(transaction_id: string, cancellable: Gio.Cancellable | null): Progress
    /**
     * Find the current state of a transaction.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param callback_ready the function to run on completion
     */
    get_progress_async(transaction_id: string, cancellable: Gio.Cancellable | null, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_progress_finish(res: Gio.AsyncResult): Progress
    /**
     * Get the list of repositories installed on the system.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_repo_list(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the list of repositories installed on the system.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_update_detail(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_updates(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    install_files(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param transaction_flags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_files_async(transaction_flags: Bitfield, files?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    install_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Install a package of the newest and most correct version.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_packages_async(transaction_flags: Bitfield, package_ids?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    /**
     * Install a software repository signature of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
     * @param key_id a key ID such as "0df23df"
     * @param package_id a signature_id structure such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    install_signature(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Install a software repository signature of the newest and most correct version.
     * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
     * @param key_id a key ID such as "0df23df"
     * @param package_id a signature_id structure such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_signature_async(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
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
     * @param progress_callback the function to run when the progress changes
     */
    refresh_cache(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Refresh the cache, i.e. download new metadata from a remote URL so that
     * package lists are up to date.
     * This action may take a few minutes and should be done when the session and
     * system are idle.
     * @param force if we should aggressively drop caches
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allow_deps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    remove_packages(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allow_deps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    remove_packages_async(transaction_flags: Bitfield, package_ids?: string[], allow_deps?: boolean, autoremove?: boolean, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
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
     * @param transaction_flags if only trusted packages should be installed
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    repair_system(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by the user using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * @param transaction_flags a transaction type bitfield
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repair_system_async(transaction_flags: Bitfield, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    /**
     * Enable or disable the repository.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    repo_enable(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Enable or disable the repository.
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Removes a repo and optionally the packages installed from it.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags transaction flags
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param autoremove If packages should be auto-removed
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    repo_remove(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Removes a repo and optionally the packages installed from it.
     * @param transaction_flags transaction flags
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param autoremove If packages should be auto-removed
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repo_remove_async(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * We may want to set a repository parameter.
     * NOTE: this is free text, and is left to the backend to define a format.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param parameter the parameter to change
     * @param value what we should change it to
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    repo_set_data(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * We may want to set a repository parameter.
     * NOTE: this is free text, and is left to the backend to define a format.
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param parameter the parameter to change
     * @param value what we should change it to
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repo_set_data_async(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages that require this one, i.e. parent.child.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for requires
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    required_by(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the packages that require this one, i.e. parent->child.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for requires
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
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
     * @param progress_callback the function to run when the progress changes
     */
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Resolve a package name into a `package_id`. This can return installed and
     * available packages and allows you find out if a package is installed locally
     * or is available in a repository.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
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
     * @param progress_callback the function to run when the progress changes
     */
    search_details(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Search all detailed summary information to try and find a keyword.
     * Think of this as pk_client_search_names(), but trying much harder and
     * taking longer.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Search for packages that provide a specific file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_files(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Search for packages that provide a specific file.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Return all packages in a specific group.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_groups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Return all packages in a specific group.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Search all the locally installed files and remote repositories for a package
     * that matches a specific name.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_names(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Search all the locally installed files and remote repositories for a package
     * that matches a specific name.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Sets the background value for the client. A background transaction
     * is usually scheduled at a lower priority and is usually given less
     * network and disk performance.
     * @param background if the transaction is a background transaction
     */
    set_background(background: boolean): void
    /**
     * Sets the maximum cache age value for the client.
     * @param cache_age the cache age to set, where %G_MAXUINT means "never"
     */
    set_cache_age(cache_age: number): void
    /**
     * Sets the interactive value for the client. Interactive transactions
     * are usually allowed to ask the user questions.
     * @param interactive the value to set
     */
    set_interactive(interactive: boolean): void
    /**
     * Sets the locale to be used for the client. This may affect returned
     * results.
     * @param locale the locale to set, e.g. "en_GB.UTF-8"
     */
    set_locale(locale: string): void
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    update_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Update specific packages to the newest available versions.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    update_packages_async(transaction_flags: Bitfield, package_ids?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will upgrade the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags transaction flags
     * @param distro_id a distro ID such as "fedora-14"
     * @param upgrade_kind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    upgrade_system(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param transaction_flags a transaction type bitfield
     * @param distro_id a distro ID such as "fedora-14"
     * @param upgrade_kind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    upgrade_system_async(transaction_flags: Bitfield, distro_id?: string, upgrade_kind?: UpgradeKindEnum, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
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
     * @param progress_callback the function to run when the progress changes
     */
    what_provides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * This should return packages that provide the supplied attributes.
     * This method is useful for finding out what package(s) provide a modalias
     * or GStreamer codec string.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a search term such as "sound/mp3"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Client

    vfunc_changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Client

    connect(sigName: "notify::background", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    constructor() 
    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    static new(): Client
    _init(config?: Client_ConstructProps): void
    static create_helper_argv_envp(argv: string, envp_out: string): boolean
}

interface ClientHelper_ConstructProps extends GObject.Object_ConstructProps {
}

interface ClientHelper {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    parent: GObject.Object
    priv: ClientHelperPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    is_active(): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socket_filename a socket filename that does not already exist
     * @param argv the executable, along with any arguments
     * @param envp the environment
     */
    start(socket_filename: string, argv: string, envp: string): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socket the (bound and listening) #GSocket instance to use
     * @param argv the executable, along with any arguments
     * @param envp the environment
     */
    start_with_socket(socket: Gio.Socket, argv: string, envp: string): boolean
    /**
     * Stops the helper process, by killing the helper process and deleting
     * the socket.
     */
    stop(): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClientHelper extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    static name: string
    static $gtype: GObject.GType<ClientHelper>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    constructor(config?: ClientHelper_ConstructProps) 
    constructor() 
    static new(): ClientHelper
    _init(config?: ClientHelper_ConstructProps): void
}

interface Control_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `repo-list-changed`
 */
interface Control_RepoListChangedSignalCallback {
    ($obj: Control): void
}

/**
 * Signal callback interface for `restart-schedule`
 */
interface Control_RestartScheduleSignalCallback {
    ($obj: Control): void
}

/**
 * Signal callback interface for `transaction-list-changed`
 */
interface Control_TransactionListChangedSignalCallback {
    ($obj: Control, transaction_ids: string[]): void
}

/**
 * Signal callback interface for `updates-changed`
 */
interface Control_UpdatesChangedSignalCallback {
    ($obj: Control): void
}

interface Control {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    backend_author: string
    backend_description: string
    backend_name: string
    connected: boolean
    distro_id: string
    filters: number
    groups: number
    locked: boolean
    mime_types: string[]
    network_state: NetworkEnum
    provides: number
    roles: number
    readonly version_major: number
    readonly version_micro: number
    readonly version_minor: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Control

    parent: GObject.Object
    priv: ControlPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Control

    /**
     * We may want to know before we run a method if we are going to be denied,
     * accepted or challenged for authentication.
     * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    can_authorize_async(action_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum
    /**
     * Gets the debugging state from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_daemon_state_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_daemon_state_finish(res: Gio.AsyncResult): string
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    get_properties(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets global properties from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_properties_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_properties_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets a transacton ID from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_tid_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_tid_finish(res: Gio.AsyncResult): string
    /**
     * We may want to know how long it has been since we refreshed the cache or
     * retrieved the update list.
     * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_time_since_action_async(role: RoleEnum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_time_since_action_finish(res: Gio.AsyncResult): number
    /**
     * Gets the transaction list in progress.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    get_transaction_list(cancellable: Gio.Cancellable | null): string[]
    /**
     * Gets the transactions currently running in the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_transaction_list_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_transaction_list_finish(res: Gio.AsyncResult): string[]
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxy_http the HTTP proxy server
     * @param proxy_ftp the FTP proxy server
     * @param cancellable a #GCancellable or %NULL
     */
    set_proxy(proxy_http: string, proxy_ftp: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxy_http the HTTP proxy server
     * @param proxy_https the HTTPS proxy server
     * @param proxy_ftp the FTP proxy server
     * @param proxy_socks the SOCKS proxy server
     * @param no_proxy the list of download IPs that shouldn't go through the proxy
     * @param pac the PAC string
     * @param cancellable a #GCancellable or %NULL
     */
    set_proxy2(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set a proxy on the PK daemon
     * @param proxy_http a HTTP proxy string such as "username:password`server`.lan:8080", or %NULL
     * @param proxy_https a HTTPS proxy string such as "username:password`server`.lan:8080", or %NULL
     * @param proxy_ftp a FTP proxy string such as "server.lan:8080", or %NULL
     * @param proxy_socks a SOCKS proxy string such as "server.lan:8080", or %NULL
     * @param no_proxy a list of download IPs that shouldn't go through the proxy, or %NULL
     * @param pac a PAC string, or %NULL
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    set_proxy2_async(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Set a proxy on the PK daemon
     * 
     * NOTE: This is just provided for backwards compatibility.
     * Clients should really be using pk_control_set_proxy2_async().
     * @param proxy_http a HTTP proxy string such as "username:password`server`.lan:8080"
     * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    set_proxy_async(proxy_http: string, proxy_ftp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    set_proxy_finish(res: Gio.AsyncResult): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    suggest_daemon_quit(cancellable: Gio.Cancellable | null): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    suggest_daemon_quit_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Control

    vfunc_connection_changed(connected: boolean): void
    vfunc_locked(is_locked: boolean): void
    vfunc_network_state_changed(): void
    vfunc_repo_list_changed(): void
    vfunc_restart_schedule(): void
    vfunc_transaction_list_changed(transaction_ids: string): void
    vfunc_updates_changed(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "repo-list-changed", callback: Control_RepoListChangedSignalCallback): number
    connect_after(sigName: "repo-list-changed", callback: Control_RepoListChangedSignalCallback): number
    emit(sigName: "repo-list-changed", ...args: any[]): void
    connect(sigName: "restart-schedule", callback: Control_RestartScheduleSignalCallback): number
    connect_after(sigName: "restart-schedule", callback: Control_RestartScheduleSignalCallback): number
    emit(sigName: "restart-schedule", ...args: any[]): void
    connect(sigName: "transaction-list-changed", callback: Control_TransactionListChangedSignalCallback): number
    connect_after(sigName: "transaction-list-changed", callback: Control_TransactionListChangedSignalCallback): number
    emit(sigName: "transaction-list-changed", transaction_ids: string[], ...args: any[]): void
    connect(sigName: "updates-changed", callback: Control_UpdatesChangedSignalCallback): number
    connect_after(sigName: "updates-changed", callback: Control_UpdatesChangedSignalCallback): number
    emit(sigName: "updates-changed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "notify::backend-author", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-author", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend-author", ...args: any[]): void
    connect(sigName: "notify::backend-description", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-description", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend-description", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend-name", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::distro-id", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro-id", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distro-id", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::mime-types", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-types", ...args: any[]): void
    connect(sigName: "notify::network-state", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-state", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network-state", ...args: any[]): void
    connect(sigName: "notify::provides", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provides", ...args: any[]): void
    connect(sigName: "notify::roles", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::version-major", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-major", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version-major", ...args: any[]): void
    connect(sigName: "notify::version-micro", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-micro", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version-micro", ...args: any[]): void
    connect(sigName: "notify::version-minor", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-minor", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version-minor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Control extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    static name: string
    static $gtype: GObject.GType<Control>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Control

    constructor(config?: Control_ConstructProps) 
    constructor() 
    static new(): Control
    _init(config?: Control_ConstructProps): void
}

interface Desktop_ConstructProps extends GObject.Object_ConstructProps {
}

interface Desktop {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Desktop

    parent: GObject.Object
    priv: DesktopPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Desktop

    /**
     * Return all desktop files owned by a package, regardless if they are shown
     * in the main menu or not.
     * @param package the package name, e.g. "gnome-power-manager"
     */
    get_files_for_package(package: string): string[]
    /**
     * Returns the package name that owns the desktop file. Fast.
     * @param filename a fully qualified filename
     */
    get_package_for_file(filename: string): string
    /**
     * Return all desktop files owned by a package that would be shown in a menu,
     * i.e are an application
     * @param package the package name, e.g. "gnome-power-manager"
     */
    get_shown_for_package(package: string): string[]
    /**
     * This method is unused and will be removed next time the library
     * soname changes!
     */
    open_database(): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Desktop

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Desktop extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Desktop

    static name: string
    static $gtype: GObject.GType<Desktop>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Desktop

    constructor(config?: Desktop_ConstructProps) 
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
    _init(config?: Desktop_ConstructProps): void
}

interface Details_ConstructProps extends Source_ConstructProps {

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

interface Details {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    description: string
    download_size: number
    group: GroupEnum
    license: string
    package_id: string
    size: number
    summary: string
    url: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Details

    parent: Source
    priv: DetailsPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Details

    /**
     * Gets the description for the details object.
     */
    get_description(): string
    /**
     * Gets the package download size.
     */
    get_download_size(): number
    /**
     * Gets the group for the details object.
     */
    get_group(): GroupEnum
    /**
     * Gets the license for the details object.
     */
    get_license(): string
    /**
     * Gets the PackageId for the details object.
     */
    get_package_id(): string
    /**
     * Gets the size for the details object: for installed packages it will return
     * the installed size, for the rest the package size.
     */
    get_size(): number
    /**
     * Gets the summary for the details object.
     */
    get_summary(): string
    /**
     * Gets the url for the details object.
     */
    get_url(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Details

    connect(sigName: "notify::description", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::download-size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::download-size", ...args: any[]): void
    connect(sigName: "notify::group", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Details extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    static name: string
    static $gtype: GObject.GType<Details>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Details

    constructor(config?: Details_ConstructProps) 
    constructor() 
    static new(): Details

    // Overloads of new

    static new(): Source
    _init(config?: Details_ConstructProps): void
}

interface DistroUpgrade_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    name?: string | null
    state?: DistroUpgradeEnum | null
    summary?: string | null
}

interface DistroUpgrade {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    name: string
    state: DistroUpgradeEnum
    summary: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    parent: Source
    priv: DistroUpgradePrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    /**
     * Gets the distribution identifier.
     * You use this value to call UpgradeSystem.
     */
    get_id(): string
    /**
     * Gets the status of the distribution upgrade.
     */
    get_state(): DistroUpgradeEnum
    /**
     * Gets the description of the distribution upgrade.
     */
    get_summary(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    connect(sigName: "notify::name", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DistroUpgrade extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    static name: string
    static $gtype: GObject.GType<DistroUpgrade>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    constructor(config?: DistroUpgrade_ConstructProps) 
    constructor() 
    static new(): DistroUpgrade

    // Overloads of new

    static new(): Source
    _init(config?: DistroUpgrade_ConstructProps): void
}

interface Error_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Error

    code?: ErrorEnum | null
    details?: string | null
}

interface Error {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    code: ErrorEnum
    details: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Error

    parent: Source
    priv: ErrorPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Error

    /**
     * Get the error code for this error.
     */
    get_code(): ErrorEnum
    /**
     * Get details for this error.
     */
    get_details(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Error

    connect(sigName: "notify::code", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::code", ...args: any[]): void
    connect(sigName: "notify::details", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Error extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    static name: string
    static $gtype: GObject.GType<Error>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Error

    constructor(config?: Error_ConstructProps) 
    constructor() 
    static new(): Error

    // Overloads of new

    static new(): Source
    _init(config?: Error_ConstructProps): void
}

interface EulaRequired_ConstructProps extends Source_ConstructProps {

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

interface EulaRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * ID for this EULA.
     */
    eula_id: string
    /**
     * The text of the license agreement.
     */
    license_agreement: string
    /**
     * PackageID this EULA is for.
     */
    package_id: string
    /**
     * Vendor this EULA is from.
     */
    vendor_name: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    parent: Source
    priv: EulaRequiredPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * Get the ID for this EULA
     */
    get_eula_id(): string
    /**
     * Get the text of the license agreement.
     */
    get_license_agreement(): string
    /**
     * Get the PackageID this EULA is for
     */
    get_package_id(): string
    /**
     * Get the vendor this EULA is from.
     */
    get_vendor_name(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    connect(sigName: "notify::eula-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eula-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eula-id", ...args: any[]): void
    connect(sigName: "notify::license-agreement", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-agreement", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-agreement", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::vendor-name", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-name", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor-name", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EulaRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    static name: string
    static $gtype: GObject.GType<EulaRequired>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    constructor(config?: EulaRequired_ConstructProps) 
    constructor() 
    static new(): EulaRequired

    // Overloads of new

    static new(): Source
    _init(config?: EulaRequired_ConstructProps): void
}

interface Files_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Files

    files?: string[] | null
    package_id?: string | null
}

interface Files {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    files: string[]
    package_id: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Files

    parent: Source
    priv: FilesPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Files

    /**
     * Gets the file list
     */
    get_files(): string[]
    /**
     * Gets the package-id
     */
    get_package_id(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Files

    connect(sigName: "notify::files", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Files extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    static name: string
    static $gtype: GObject.GType<Files>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Files

    constructor(config?: Files_ConstructProps) 
    constructor() 
    static new(): Files

    // Overloads of new

    static new(): Source
    _init(config?: Files_ConstructProps): void
}

interface ItemProgress_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    package_id?: string | null
    percentage?: number | null
    status?: number | null
}

interface ItemProgress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    package_id: string
    percentage: number
    status: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    parent: Source
    priv: ItemProgressPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    /**
     * Get the package ID this item is working on.
     */
    get_package_id(): string
    /**
     * Get the percentage complete of this item.
     */
    get_percentage(): number
    /**
     * Get the status of this item.
     */
    get_status(): StatusEnum

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    connect(sigName: "notify::package-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ItemProgress extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    static name: string
    static $gtype: GObject.GType<ItemProgress>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    constructor(config?: ItemProgress_ConstructProps) 
    /**
     * An object containing item inside a #PkProgress.
     * @constructor 
     */
    constructor() 
    /**
     * An object containing item inside a #PkProgress.
     * @constructor 
     */
    static new(): ItemProgress

    // Overloads of new

    static new(): Source
    _init(config?: ItemProgress_ConstructProps): void
}

interface MediaChangeRequired_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    media_id?: string | null
    media_text?: string | null
    media_type?: MediaTypeEnum | null
}

interface MediaChangeRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    media_id: string
    media_text: string
    media_type: MediaTypeEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    parent: Source
    priv: MediaChangeRequiredPrivate

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    connect(sigName: "notify::media-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-id", ...args: any[]): void
    connect(sigName: "notify::media-text", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-text", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-text", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaChangeRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    static name: string
    static $gtype: GObject.GType<MediaChangeRequired>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    constructor(config?: MediaChangeRequired_ConstructProps) 
    constructor() 
    static new(): MediaChangeRequired

    // Overloads of new

    static new(): Source
    _init(config?: MediaChangeRequired_ConstructProps): void
}

interface Package_ConstructProps extends Source_ConstructProps {

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

/**
 * Signal callback interface for `changed`
 */
interface Package_ChangedSignalCallback {
    ($obj: Package): void
}

interface Package {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Package

    description: string
    group: GroupEnum
    info: InfoEnum
    license: string
    readonly package_id: string
    size: number
    summary: string
    update_bugzilla_urls: string[]
    update_changelog: string
    update_cve_urls: string[]
    update_issued: string
    update_obsoletes: string
    update_restart: RestartEnum
    /**
     * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
     * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
     */
    update_severity: InfoEnum
    update_state: UpdateStateEnum
    update_text: string
    update_updated: string
    update_updates: string
    update_vendor_urls: string[]
    url: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Package

    parent: Source
    priv: PackagePrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Package

    /**
     * Do the #PkPackage's have the same ID.
     * @param package2 a valid #PkPackage instance
     */
    equal(package2: Package): boolean
    /**
     * Do the #PkPackage's have the same ID.
     * @param package2 a valid #PkPackage instance
     */
    equal_id(package2: Package): boolean
    /**
     * Gets the package arch.
     */
    get_arch(): string
    /**
     * Gets the package data, which is usually the repository ID that contains the
     * package. Special ID's include "installed" for installed packages, and "local"
     * for local packages that exist on disk but not in a repository.
     */
    get_data(): string

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): string | object | null | any
    /**
     * Gets the package object ID
     */
    get_id(): string
    /**
     * Gets the package object ID
     */
    get_info(): InfoEnum
    /**
     * Gets the package name.
     */
    get_name(): string
    /**
     * Gets the package object ID
     */
    get_summary(): string
    /**
     * Returns the `package` update severity. Can be one of %PK_INFO_ENUM_UNKNOWN,
     * %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL, %PK_INFO_ENUM_IMPORTANT or
     * %PK_INFO_ENUM_CRITICAL.
     */
    get_update_severity(): InfoEnum
    /**
     * Gets the package version.
     */
    get_version(): string
    /**
     * Parses the data to populate the #PkPackage.
     * @param data the data describing the package
     */
    parse(data: string): boolean
    /**
     * Prints details about the package to standard out.
     */
    print(): void
    /**
     * Sets the package object to have the given ID
     * @param package_id the valid package_id
     */
    set_id(package_id: string): boolean
    /**
     * Sets the package info enum.
     * @param info the #PkInfoEnum
     */
    set_info(info: InfoEnum): void
    /**
     * Sets the package summary.
     * @param summary the package summary
     */
    set_summary(summary: string): void
    /**
     * Set an update severity for the `package`. The `update_severity` can be
     * one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
     * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
     * @param update_severity a #PkInfoEnum
     */
    set_update_severity(update_severity: InfoEnum): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Package

    vfunc_changed(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Package

    connect(sigName: "changed", callback: Package_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Package_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Package

    connect(sigName: "notify::description", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::group", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::info", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::update-bugzilla-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-bugzilla-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-bugzilla-urls", ...args: any[]): void
    connect(sigName: "notify::update-changelog", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-changelog", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-changelog", ...args: any[]): void
    connect(sigName: "notify::update-cve-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-cve-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-cve-urls", ...args: any[]): void
    connect(sigName: "notify::update-issued", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-issued", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-issued", ...args: any[]): void
    connect(sigName: "notify::update-obsoletes", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-obsoletes", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-obsoletes", ...args: any[]): void
    connect(sigName: "notify::update-restart", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-restart", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-restart", ...args: any[]): void
    connect(sigName: "notify::update-severity", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-severity", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-severity", ...args: any[]): void
    connect(sigName: "notify::update-state", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-state", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-state", ...args: any[]): void
    connect(sigName: "notify::update-text", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-text", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-text", ...args: any[]): void
    connect(sigName: "notify::update-updated", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-updated", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-updated", ...args: any[]): void
    connect(sigName: "notify::update-updates", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-updates", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-updates", ...args: any[]): void
    connect(sigName: "notify::update-vendor-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-vendor-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-vendor-urls", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Package extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Package

    static name: string
    static $gtype: GObject.GType<Package>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Package

    constructor(config?: Package_ConstructProps) 
    constructor() 
    static new(): Package

    // Overloads of new

    static new(): Source
    _init(config?: Package_ConstructProps): void
    /**
     * Generate a PackageID.
     * @param name the package name
     * @param version the package version
     * @param arch the package architecture
     * @param data the package extra data
     */
    static id_build(name: string, version: string, arch: string, data: string): string
    /**
     * Check if a Packageid is well formed.
     * @param package_id the PackageID to check
     */
    static id_check(package_id: string): boolean
    /**
     * Only compare the name, version, and arch, where the architecture will fuzzy
     * match with i*86.
     * @param package_id1 the first PackageID
     * @param package_id2 the second PackageID
     */
    static id_equal_fuzzy_arch(package_id1: string, package_id2: string): boolean
    /**
     * Splits a PackageID into the correct number of parts, checking the correct
     * number of delimiters are present.
     * @param package_id the ; delimited PackageID to split
     */
    static id_split(package_id: string): string[]
    /**
     * Formats the PackageID to be printable to the user.
     * @param package_id the PackageID
     */
    static id_to_printable(package_id: string): string
    /**
     * Adds a package_id to an existing list.
     * @param package_ids a string array of package_id's
     * @param package_id a single package_id
     */
    static ids_add_id(package_ids: string, package_id: string): string[]
    /**
     * Adds a package_id to an existing list.
     * @param package_ids a string array of package_id's
     * @param package_ids_new a string array of package_id's
     */
    static ids_add_ids(package_ids: string, package_ids_new: string): string[]
    /**
     * Check the string array of package_id's for validity
     * @param package_ids a string array of package_id's
     */
    static ids_check(package_ids: string): boolean
    /**
     * Form a composite string array of package_id's from
     * a single package_id
     * @param package_id A single package_id
     */
    static ids_from_id(package_id: string): string[]
    /**
     * Form a composite string array of package_id's from
     * a delimited string
     * @param package_id A single package_id
     */
    static ids_from_string(package_id: string): string[]
    /**
     * Finds out if a package ID is present in the list.
     * @param package_ids a string array of package_id's
     * @param package_id a single package_id
     */
    static ids_present_id(package_ids: string, package_id: string): boolean
    /**
     * Removes a package ID from the the list.
     * @param package_ids a string array of package_id's
     * @param package_id a single package_id
     */
    static ids_remove_id(package_ids: string, package_id: string): string[]
    /**
     * Cats the string array of package_id's into one delimited string
     * @param package_ids a string array of package_id's
     */
    static ids_to_string(package_ids: string): string
}

interface PackageSack_ConstructProps extends GObject.Object_ConstructProps {
}

interface PackageSack {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    parent: GObject.Object
    priv: PackageSackPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    /**
     * Adds a package to the sack.
     * @param package a valid #PkPackage instance
     */
    add_package(package: Package): boolean
    /**
     * Adds a package reference to the sack.
     * @param package_id a package_id descriptor
     */
    add_package_by_id(package_id: string): boolean
    /**
     * Adds packages from package-list file to a #PkPackageSack.
     * @param file a valid package-list file
     */
    add_packages_from_file(file: Gio.File): boolean
    /**
     * Empty all the packages from the sack
     */
    clear(): void
    /**
     * Returns a new package sack which only matches packages that return %TRUE
     * from the filter function.
     * @param filter_cb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to add
     */
    filter(filter_cb: PackageSackFilterFunc): PackageSack
    /**
     * Returns a new package sack which only matches packages that match the
     * specified info enum value.
     * @param info a #PkInfoEnum value to match
     */
    filter_by_info(info: InfoEnum): PackageSack
    /**
     * Finds a package in a sack from reference. As soon as one package is found
     * the search is stopped.
     * @param package_id a package_id descriptor
     */
    find_by_id(package_id: string): Package
    /**
     * Finds a package in a sack by package name and architecture. As soon as one
     * package is found the search is stopped.
     * @param package_id a package_id descriptor
     */
    find_by_id_name_arch(package_id: string): Package
    /**
     * Gets the package array from the sack
     */
    get_array(): Package[]
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    get_details(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    get_details_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Returns all the Package IDs in the sack
     */
    get_ids(): string[]
    /**
     * Gets the number of packages in the sack
     */
    get_size(): number
    /**
     * Gets the total size of the package sack in bytes.
     */
    get_total_bytes(): number
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    get_update_detail(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in update details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    get_update_detail_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    merge_generic_finish(res: Gio.AsyncResult): boolean
    /**
     * Removes from the package sack any packages that return %FALSE from the filter
     * function.
     * @param filter_cb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to retain
     */
    remove_by_filter(filter_cb: PackageSackFilterFunc): boolean
    /**
     * Removes a package reference from the sack. The pointers have to match exactly.
     * @param package a valid #PkPackage instance
     */
    remove_package(package: Package): boolean
    /**
     * Removes a package reference from the sack. As soon as one package is removed
     * the search is stopped.
     * @param package_id a package_id descriptor
     */
    remove_package_by_id(package_id: string): boolean
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    resolve(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages using resolve.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    resolve_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Sorts the package sack
     * @param type the type of sorting, e.g. #PK_PACKAGE_SACK_SORT_TYPE_NAME
     */
    sort(type: PackageSackSortType): void
    /**
     * Write the contents of a #PkPackageSack to a package-list file.
     * @param file a valid package-list file
     */
    to_file(file: Gio.File): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    vfunc_changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PackageSack extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    static name: string
    static $gtype: GObject.GType<PackageSack>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    constructor(config?: PackageSack_ConstructProps) 
    constructor() 
    static new(): PackageSack
    _init(config?: PackageSack_ConstructProps): void
}

interface Progress_ConstructProps extends GObject.Object_ConstructProps {

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

interface Progress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * %TRUE if this transaction can be cancelled.
     */
    allow_cancel: boolean
    /**
     * %TRUE if the transaction caller is still connected.
     */
    caller_active: boolean
    /**
     * Number of bytes remaining to download.
     */
    download_size_remaining: number
    /**
     * Amount of time the transaction has taken in seconds.
     */
    elapsed_time: number
    /**
     * Item progress associated with this transaction.
     */
    item_progress: ItemProgress
    /**
     * The package this transaction is acting on.
     */
    package: Package
    /**
     * Package ID this transaction is acting on.
     */
    package_id: string
    /**
     * Percentage complete of this transaction.
     */
    percentage: number
    /**
     * Amount of time the transaction will take to complete in seconds or 0 if unknown.
     */
    remaining_time: number
    /**
     * Role of this transaction.
     */
    role: number
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
    transaction_flags: number
    /**
     * ID used by this transaction.
     */
    transaction_id: string
    /**
     * The UID that started this transaction.
     */
    uid: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Progress

    parent: GObject.Object
    priv: ProgressPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * Get if this transaction can be cancelled.
     */
    get_allow_cancel(): boolean
    /**
     * Get if the transaction caller is connected.
     */
    get_caller_active(): boolean
    /**
     * Get the number of bytes remaining to download.
     */
    get_download_size_remaining(): number
    /**
     * Get the amount of time the transaction has taken.
     */
    get_elapsed_time(): number
    /**
     * Get the item progress associated with this transaction.
     */
    get_item_progress(): ItemProgress
    /**
     * Get the package this transaction is acting on.
     */
    get_package(): Package
    /**
     * Get the package ID this transaction is acting on.
     */
    get_package_id(): string
    /**
     * Get the percentage complete.
     */
    get_percentage(): number
    /**
     * Get the amount of time the transaction will take to complete.
     */
    get_remaining_time(): number
    /**
     * Get the role of this transaction.
     */
    get_role(): RoleEnum
    /**
     * Get the speed of this transaction.
     */
    get_speed(): number
    /**
     * Get the status of this transaction.
     */
    get_status(): StatusEnum
    /**
     * Get the flags associated with this transaction.
     */
    get_transaction_flags(): number
    /**
     * Get the ID used by this transaction.
     */
    get_transaction_id(): string
    /**
     * Get the UID that started this transaction.
     */
    get_uid(): number
    /**
     * Set if this transaction can be cancelled.
     * @param allow_cancel %TRUE if this transaction can be cancelled.
     */
    set_allow_cancel(allow_cancel: boolean): boolean
    /**
     * Set if the transaction caller is connected.
     * @param caller_active %TRUE if the transaction caller is still connected.
     */
    set_caller_active(caller_active: boolean): boolean
    /**
     * Set the number of bytes remaining to download.
     * @param download_size_remaining number of bytes remaining to download.
     */
    set_download_size_remaining(download_size_remaining: number): boolean
    /**
     * Set the amount of time the transaction has taken.
     * @param elapsed_time time in seconds
     */
    set_elapsed_time(elapsed_time: number): boolean
    /**
     * Set the item progress associated with this transaction.
     * @param item_progress a #PkItemProgress
     */
    set_item_progress(item_progress: ItemProgress): boolean
    /**
     * Set the package this transaction is acting on.
     * @param package a #PkPackage
     */
    set_package(package: Package): boolean
    /**
     * Set the package ID this transaction is acting on.
     * @param package_id a PackageID
     */
    set_package_id(package_id: string): boolean
    /**
     * Set the percentage complete of this transaction.
     * @param percentage a percentage value (0-100)
     */
    set_percentage(percentage: number): boolean
    /**
     * Set the amount of time the transaction will take to complete.
     * @param remaining_time time in seconds or 0 if unknown.
     */
    set_remaining_time(remaining_time: number): boolean
    /**
     * Set the role of this transaction.
     * @param role a #PkRoleEnum
     */
    set_role(role: RoleEnum): boolean
    /**
     * Set the speed of this transaction.
     * @param speed speed in bits per second or 0 if unknown
     */
    set_speed(speed: number): boolean
    /**
     * Set the status of this transaction.
     * @param status a #PkStatusEnum
     */
    set_status(status: StatusEnum): boolean
    /**
     * Set the flags associated with this transaction.
     * @param transaction_flags a #PkBitfield containing #PkTransactionFlagEnum values.
     */
    set_transaction_flags(transaction_flags: number): boolean
    /**
     * Set the ID used by this transaction.
     * @param transaction_id a transaction ID.
     */
    set_transaction_id(transaction_id: string): boolean
    /**
     * Set the UID that started this transaction.
     * @param uid a UID
     */
    set_uid(uid: number): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Progress

    connect(sigName: "notify::allow-cancel", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-cancel", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-cancel", ...args: any[]): void
    connect(sigName: "notify::caller-active", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-active", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caller-active", ...args: any[]): void
    connect(sigName: "notify::download-size-remaining", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size-remaining", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::download-size-remaining", ...args: any[]): void
    connect(sigName: "notify::elapsed-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::elapsed-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::elapsed-time", ...args: any[]): void
    connect(sigName: "notify::item-progress", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-progress", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-progress", ...args: any[]): void
    connect(sigName: "notify::package", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::speed", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::transaction-flags", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-flags", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-flags", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Progress extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Progress

    static name: string
    static $gtype: GObject.GType<Progress>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Progress

    constructor(config?: Progress_ConstructProps) 
    /**
     * #PkProgress is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    constructor() 
    /**
     * #PkProgress is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    static new(): Progress
    _init(config?: Progress_ConstructProps): void
}

interface RepoDetail_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    description?: string | null
    enabled?: boolean | null
    repo_id?: string | null
}

interface RepoDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    description: string
    enabled: boolean
    repo_id: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    parent: Source
    priv: RepoDetailPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    /**
     * Gets the repository description.
     */
    get_description(): string
    /**
     * Gets the repository enabled status.
     */
    get_enabled(): boolean
    /**
     * Gets the repository ID.
     */
    get_id(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    connect(sigName: "notify::description", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::repo-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repo-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repo-id", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RepoDetail extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    static name: string
    static $gtype: GObject.GType<RepoDetail>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    constructor(config?: RepoDetail_ConstructProps) 
    constructor() 
    static new(): RepoDetail

    // Overloads of new

    static new(): Source
    _init(config?: RepoDetail_ConstructProps): void
}

interface RepoSignatureRequired_ConstructProps extends Source_ConstructProps {

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

interface RepoSignatureRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    key_fingerprint: string
    key_id: string
    key_timestamp: string
    key_url: string
    key_userid: string
    package_id: string
    repository_name: string
    type: SigTypeEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    parent: Source
    priv: RepoSignatureRequiredPrivate

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    connect(sigName: "notify::key-fingerprint", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-fingerprint", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-fingerprint", ...args: any[]): void
    connect(sigName: "notify::key-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-id", ...args: any[]): void
    connect(sigName: "notify::key-timestamp", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-timestamp", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-timestamp", ...args: any[]): void
    connect(sigName: "notify::key-url", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-url", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-url", ...args: any[]): void
    connect(sigName: "notify::key-userid", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-userid", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-userid", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::repository-name", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository-name", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository-name", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RepoSignatureRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    static name: string
    static $gtype: GObject.GType<RepoSignatureRequired>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    constructor(config?: RepoSignatureRequired_ConstructProps) 
    constructor() 
    static new(): RepoSignatureRequired

    // Overloads of new

    static new(): Source
    _init(config?: RepoSignatureRequired_ConstructProps): void
}

interface RequireRestart_ConstructProps extends Source_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    package_id?: string | null
    restart?: RestartEnum | null
}

interface RequireRestart {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    package_id: string
    restart: RestartEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    parent: Source
    priv: RequireRestartPrivate

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    connect(sigName: "notify::package-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::restart", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restart", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restart", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RequireRestart extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    static name: string
    static $gtype: GObject.GType<RequireRestart>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    constructor(config?: RequireRestart_ConstructProps) 
    constructor() 
    static new(): RequireRestart

    // Overloads of new

    static new(): Source
    _init(config?: RequireRestart_ConstructProps): void
}

interface Results_ConstructProps extends GObject.Object_ConstructProps {

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

interface Results {

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
    transaction_flags: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Results

    parent: GObject.Object
    priv: ResultsPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Results

    /**
     * Adds a category item to the results set.
     * @param item the object to add to the array
     */
    add_category(item: Category): boolean
    /**
     * Adds some package details to the results set.
     * @param item the object to add to the array
     */
    add_details(item: Details): boolean
    /**
     * Adds a distribution upgrade item to the results set.
     * @param item the object to add to the array
     */
    add_distro_upgrade(item: DistroUpgrade): boolean
    /**
     * Adds some EULA details to the results set.
     * @param item the object to add to the array
     */
    add_eula_required(item: EulaRequired): boolean
    /**
     * Adds some files details to the results set.
     * @param item the object to add to the array
     */
    add_files(item: Files): boolean
    /**
     * Adds some media change details to the results set.
     * @param item the object to add to the array
     */
    add_media_change_required(item: MediaChangeRequired): boolean
    /**
     * Adds a package to the results set.
     * @param item the object to add to the array
     */
    add_package(item: Package): boolean
    /**
     * Adds some repository details to the results set.
     * @param item the object to add to the array
     */
    add_repo_detail(item: RepoDetail): boolean
    /**
     * Adds some repository signature details to the results set.
     * @param item the object to add to the array
     */
    add_repo_signature_required(item: RepoSignatureRequired): boolean
    /**
     * Adds a require restart item to the results set.
     * @param item the object to add to the array
     */
    add_require_restart(item: RequireRestart): boolean
    /**
     * Adds a transaction item to the results set.
     * @param item the object to add to the array
     */
    add_transaction(item: TransactionPast): boolean
    /**
     * Adds some update details to the results set.
     * @param item the object to add to the array
     */
    add_update_detail(item: UpdateDetail): boolean
    /**
     * Gets the categories from the transaction.
     */
    get_category_array(): Category[]
    /**
     * Gets the package details from the transaction.
     */
    get_details_array(): Details[]
    /**
     * Gets the distribution upgrades from the transaction.
     */
    get_distro_upgrade_array(): DistroUpgrade[]
    /**
     * Gets the last error code from the transaction.
     */
    get_error_code(): Error
    /**
     * Gets the eulas required from the transaction.
     */
    get_eula_required_array(): EulaRequired[]
    /**
     * Gets the exit enum. You probably don't want to be using this function, and
     * instead using the much more useful pk_results_get_error_code() function.
     */
    get_exit_code(): ExitEnum
    /**
     * Gets the files from the transaction.
     */
    get_files_array(): Files[]
    /**
     * Gets the media changes required from the transaction.
     */
    get_media_change_required_array(): MediaChangeRequired[]
    /**
     * Gets the packages from the transaction.
     */
    get_package_array(): Package[]
    /**
     * Gets a package sack from the transaction.
     */
    get_package_sack(): PackageSack
    /**
     * Gets the repository details from the transaction.
     */
    get_repo_detail_array(): RepoDetail[]
    /**
     * Gets the repository signatures required from the transaction.
     */
    get_repo_signature_required_array(): RepoSignatureRequired[]
    /**
     * Gets the require restarts from the transaction.
     */
    get_require_restart_array(): RequireRestart[]
    /**
     * This method returns the 'worst' restart of all the transactions.
     * It is needed as multiple sub-transactions may emit require-restart with
     * different values, and we always want to get the most invasive of all.
     * 
     * For instance, if a transaction emits RequireRestart(system) and then
     * RequireRestart(session) then pk_client_get_require_restart will return
     * system as a session restart is implied with a system restart.
     */
    get_require_restart_worst(): RestartEnum
    /**
     * Gets the role that produced these results.
     */
    get_role(): RoleEnum
    /**
     * Gets the transactions from the transaction.
     */
    get_transaction_array(): TransactionPast[]
    /**
     * Gets the transaction flag for these results.
     */
    get_transaction_flags(): Bitfield
    /**
     * Gets the update details from the transaction.
     */
    get_update_detail_array(): UpdateDetail[]
    /**
     * Adds some error details to the results set.
     * @param item the object to add to the array
     */
    set_error_code(item: Error): boolean
    /**
     * Sets the results object to have the given exit code.
     * @param exit_enum the exit code
     */
    set_exit_code(exit_enum: ExitEnum): boolean
    /**
     * Sets the results object to have the given role enum.
     * @param role the role enum
     */
    set_role(role: RoleEnum): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Results

    connect(sigName: "notify::inputs", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inputs", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inputs", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-flags", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-flags", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Results extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Results

    static name: string
    static $gtype: GObject.GType<Results>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Results

    constructor(config?: Results_ConstructProps) 
    constructor() 
    static new(): Results
    _init(config?: Results_ConstructProps): void
}

interface Source_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Source

    role?: RoleEnum | null
    transaction_id?: string | null
}

interface Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    role: RoleEnum
    transaction_id: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Source

    parent: GObject.Object
    priv: SourcePrivate

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Source

    connect(sigName: "notify::role", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Source extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    static name: string
    static $gtype: GObject.GType<Source>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Source

    constructor(config?: Source_ConstructProps) 
    constructor() 
    static new(): Source
    _init(config?: Source_ConstructProps): void
}

interface Task_ConstructProps extends Client_ConstructProps {

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

interface Task {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Task

    /**
     * %TRUE if package downgrades are allowed.
     */
    allow_downgrade: boolean
    /**
     * %TRUE if package reinstallation shall be allowed during transaction.
     */
    allow_reinstall: boolean
    /**
     * %TRUE if we are just preparing the transaction for later.
     */
    only_download: boolean
    /**
     * %TRUE if only authenticated packages should be allowed in the transaction.
     */
    only_trusted: boolean
    /**
     * %TRUE if we are simulating.
     */
    simulate: boolean

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Task

    parent: Client
    priv: TaskPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Task

    /**
     * Get the list of dependant packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of dependent packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    depends_on_sync(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Downloads packages
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Downloads packages
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    download_packages_sync(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    generic_finish(res: Gio.AsyncResult): Results
    /**
     * Gets if we are allow packages to be downgraded.
     */
    get_allow_downgrade(): boolean
    /**
     * Gets if we allow packages to be reinstalled.
     */
    get_allow_reinstall(): boolean
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets details about packages.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets details about packages.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_details_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the files in a package.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the files in a package.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_files_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets if we are just preparing the transaction for later.
     */
    get_only_download(): boolean
    /**
     * Gets if we allow only authenticated packages in the transactoin.
     */
    get_only_trusted(): boolean
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_packages_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_repo_list_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets if we are simulating.
     */
    get_simulate(): boolean
    /**
     * Gets details about updates.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets details about updates.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_update_detail_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    get_updates_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_files_async(files: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void

    // Overloads of install_files_async

    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param transaction_flags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_files_async(transaction_flags: Bitfield, files?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_files_async(...args: any[]): any
    install_files_async(args_or_transaction_flags: any[] | Bitfield, files?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    install_files_sync(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Merges in details about packages using resolve.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_packages_async(package_ids: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void

    // Overloads of install_packages_async

    /**
     * Install a package of the newest and most correct version.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_packages_async(transaction_flags: Bitfield, package_ids?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_packages_async(...args: any[]): any
    install_packages_async(args_or_transaction_flags: any[] | Bitfield, package_ids?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    install_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    refresh_cache_sync(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allow_deps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    remove_packages_async(package_ids: string[], allow_deps?: boolean, autoremove?: boolean, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void

    // Overloads of remove_packages_async

    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allow_deps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    remove_packages_async(transaction_flags: Bitfield, package_ids?: string[], allow_deps?: boolean, autoremove?: boolean, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    remove_packages_async(...args: any[]): any
    remove_packages_async(args_or_transaction_flags: any[] | Bitfield, package_ids?: string[], allow_deps?: boolean, autoremove?: boolean, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allow_deps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    remove_packages_sync(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Recover the system from broken dependencies and aborted installations.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repair_system_async(cancellable: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void

    // Overloads of repair_system_async

    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by the user using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * @param transaction_flags a transaction type bitfield
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repair_system_async(transaction_flags: Bitfield, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repair_system_async(...args: any[]): any
    repair_system_async(args_or_transaction_flags: any[] | Bitfield, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Recover from broken dependencies of installed packages or incomplete
     * installations.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    repair_system_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Enable or disable a specific repo.
     * @param repo_id The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Enable or disable a specific repo.
     * @param repo_id The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    repo_enable_sync(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    required_by_sync(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    resolve_sync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_details_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_files_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_groups_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    search_names_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * If package downgrades shall be allowed during transaction.
     * @param allow_downgrade %TRUE to allow packages to be downgraded.
     */
    set_allow_downgrade(allow_downgrade: boolean): void
    /**
     * If package reinstallation shall be allowed during transaction.
     * @param allow_reinstall %TRUE to allow packages to be reinstalled.
     */
    set_allow_reinstall(allow_reinstall: boolean): void
    /**
     * If the transaction should be prepared (depsolved, packages
     * downloaded, etc) but not committed.
     * @param only_download %FALSE to actually commit the transaction
     */
    set_only_download(only_download: boolean): void
    /**
     * If only authenticated packages should be allowed in the
     * transaction.
     * @param only_trusted %TRUE to allow only authenticated packages
     */
    set_only_trusted(only_trusted: boolean): void
    /**
     * If the simulate step should be run without the actual transaction.
     * @param simulate the simulate mode
     */
    set_simulate(simulate: boolean): void
    /**
     * Update specific packages to the newest available versions.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    update_packages_async(package_ids: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void

    // Overloads of update_packages_async

    /**
     * Update specific packages to the newest available versions.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    update_packages_async(transaction_flags: Bitfield, package_ids?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    update_packages_async(...args: any[]): any
    update_packages_async(args_or_transaction_flags: any[] | Bitfield, package_ids?: string[], cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    update_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param distro_id a distro ID such as "fedora-14"
     * @param upgrade_kind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    upgrade_system_async(distro_id: string, upgrade_kind?: UpgradeKindEnum, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void

    // Overloads of upgrade_system_async

    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param transaction_flags a transaction type bitfield
     * @param distro_id a distro ID such as "fedora-14"
     * @param upgrade_kind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    upgrade_system_async(transaction_flags: Bitfield, distro_id?: string, upgrade_kind?: UpgradeKindEnum, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    upgrade_system_async(...args: any[]): any
    upgrade_system_async(args_or_transaction_flags: any[] | Bitfield, distro_id?: string, upgrade_kind?: UpgradeKindEnum, cancellable?: Gio.Cancellable | null, progress_callback?: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void | any
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param distro_id a distro ID such as "fedora-14"
     * @param upgrade_kind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    upgrade_system_sync(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Mark a EULA as accepted by the user.
     * @param request request ID for EULA.
     */
    user_accepted(request: number): boolean
    /**
     * Mark a EULA as declined by the user.
     * @param request request ID for EULA.
     */
    user_declined(request: number): boolean
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback | null): void
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     */
    what_provides_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Task

    vfunc_eula_question(request: number, results: Results): void
    vfunc_key_question(request: number, results: Results): void
    vfunc_media_change_question(request: number, results: Results): void
    vfunc_repair_question(request: number, results: Results): void
    vfunc_simulate_question(request: number, results: Results): void
    vfunc_untrusted_question(request: number, results: Results): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Task

    connect(sigName: "notify::allow-downgrade", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-downgrade", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-downgrade", ...args: any[]): void
    connect(sigName: "notify::allow-reinstall", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-reinstall", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-reinstall", ...args: any[]): void
    connect(sigName: "notify::only-download", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-download", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::only-download", ...args: any[]): void
    connect(sigName: "notify::only-trusted", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-trusted", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::only-trusted", ...args: any[]): void
    connect(sigName: "notify::simulate", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simulate", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simulate", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Task extends Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Task

    static name: string
    static $gtype: GObject.GType<Task>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Task

    constructor(config?: Task_ConstructProps) 
    constructor() 
    static new(): Task

    // Overloads of new

    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    static new(): Client
    _init(config?: Task_ConstructProps): void
}

interface TransactionList_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `added`
 */
interface TransactionList_AddedSignalCallback {
    ($obj: TransactionList, tid: string): void
}

/**
 * Signal callback interface for `removed`
 */
interface TransactionList_RemovedSignalCallback {
    ($obj: TransactionList, tid: string): void
}

interface TransactionList {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    parent: GObject.Object
    priv: TransactionListPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    /**
     * Gets the string lists of transaction IDs recognised as pending, running or finished by the daemon.
     */
    get_ids(): string[]

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    vfunc_added(tid: string): void
    vfunc_removed(tid: string): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    connect(sigName: "added", callback: TransactionList_AddedSignalCallback): number
    connect_after(sigName: "added", callback: TransactionList_AddedSignalCallback): number
    emit(sigName: "added", tid: string, ...args: any[]): void
    connect(sigName: "removed", callback: TransactionList_RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: TransactionList_RemovedSignalCallback): number
    emit(sigName: "removed", tid: string, ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TransactionList extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    static name: string
    static $gtype: GObject.GType<TransactionList>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    constructor(config?: TransactionList_ConstructProps) 
    constructor() 
    static new(): TransactionList
    _init(config?: TransactionList_ConstructProps): void
}

interface TransactionPast_ConstructProps extends Source_ConstructProps {

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

interface TransactionPast {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    cmdline: string
    data: string
    duration: number
    role: RoleEnum
    succeeded: boolean
    tid: string
    timespec: string
    uid: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    parent: Source
    priv: TransactionPastPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    /**
     * Gets the past transaction cmdline value;
     */
    get_cmdline(): string
    /**
     * Gets the past transaction data;
     */
    get_data(): string

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): string | object | null | any
    /**
     * Gets the past transaction date & time value;
     */
    get_datetime(): GLib.DateTime
    /**
     * Gets the past transaction duration;
     */
    get_duration(): number
    /**
     * Gets the past transaction ID value;
     */
    get_id(): string
    /**
     * Gets the past transaction role;
     */
    get_role(): RoleEnum
    /**
     * Gets the past transaction succeeded value;
     */
    get_succeeded(): boolean
    /**
     * Gets the past transaction timespec value;
     */
    get_timespec(): string
    /**
     * Gets the past transaction timestamp
     */
    get_timestamp(): number
    /**
     * Gets the past transaction uid;
     */
    get_uid(): number

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    connect(sigName: "notify::cmdline", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cmdline", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::succeeded", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::succeeded", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::succeeded", ...args: any[]): void
    connect(sigName: "notify::tid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tid", ...args: any[]): void
    connect(sigName: "notify::timespec", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timespec", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timespec", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TransactionPast extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    static name: string
    static $gtype: GObject.GType<TransactionPast>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    constructor(config?: TransactionPast_ConstructProps) 
    constructor() 
    static new(): TransactionPast

    // Overloads of new

    static new(): Source
    _init(config?: TransactionPast_ConstructProps): void
}

interface UpdateDetail_ConstructProps extends Source_ConstructProps {

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

interface UpdateDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    bugzilla_urls: string[]
    changelog: string
    cve_urls: string[]
    issued: string
    obsoletes: string[]
    package_id: string
    restart: RestartEnum
    state: UpdateStateEnum
    update_text: string
    updated: string
    updates: string[]
    vendor_urls: string[]

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    parent: Source
    priv: UpdateDetailPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    /**
     * Gets the update detail bugzilla URLs.
     */
    get_bugzilla_urls(): string[]
    /**
     * Gets the update detail changelog.
     */
    get_changelog(): string
    /**
     * Gets the update detail CVE URLs.
     */
    get_cve_urls(): string[]
    /**
     * Gets the update detail issued string.
     */
    get_issued(): string
    /**
     * Gets the update detail obsoletes IDs.
     */
    get_obsoletes(): string[]
    /**
     * Gets the update detail package ID.
     */
    get_package_id(): string
    /**
     * Gets the update detail restart kind.
     */
    get_restart(): RestartEnum
    /**
     * Gets the update detail state.
     */
    get_state(): UpdateStateEnum
    /**
     * Gets the update detail update text.
     */
    get_update_text(): string
    /**
     * Gets the update detail updated string.
     */
    get_updated(): string
    /**
     * Gets the update detail updates IDs.
     */
    get_updates(): string[]
    /**
     * Gets the update detail vendor URLs.
     */
    get_vendor_urls(): string[]

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    connect(sigName: "notify::bugzilla-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bugzilla-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bugzilla-urls", ...args: any[]): void
    connect(sigName: "notify::changelog", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changelog", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::changelog", ...args: any[]): void
    connect(sigName: "notify::cve-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cve-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cve-urls", ...args: any[]): void
    connect(sigName: "notify::issued", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issued", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::issued", ...args: any[]): void
    connect(sigName: "notify::obsoletes", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obsoletes", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::obsoletes", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::restart", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restart", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restart", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::update-text", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-text", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-text", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::updates", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updates", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updates", ...args: any[]): void
    connect(sigName: "notify::vendor-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor-urls", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UpdateDetail extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    static name: string
    static $gtype: GObject.GType<UpdateDetail>

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    constructor(config?: UpdateDetail_ConstructProps) 
    constructor() 
    static new(): UpdateDetail

    // Overloads of new

    static new(): Source
    _init(config?: UpdateDetail_ConstructProps): void
}

interface CategoryClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.CategoryClass

    parent_class: SourceClass
}

abstract class CategoryClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.CategoryClass

    static name: string
}

interface CategoryPrivate {
}

/**
 * Private #PkCategory data
 * @record 
 */
class CategoryPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.CategoryPrivate

    static name: string
}

interface ClientClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientClass

    parent_class: GObject.ObjectClass
    changed: (client: Client) => void
}

abstract class ClientClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientClass

    static name: string
}

interface ClientHelperClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass

    parent_class: GObject.ObjectClass
}

abstract class ClientHelperClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass

    static name: string
}

interface ClientHelperPrivate {
}

/**
 * Private #PkClientHelper data
 * @record 
 */
class ClientHelperPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelperPrivate

    static name: string
}

interface ClientPrivate {
}

/**
 * Private #PkClient data
 * @record 
 */
class ClientPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientPrivate

    static name: string
}

interface ControlClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ControlClass

    parent_class: GObject.ObjectClass
    transaction_list_changed: (control: Control, transaction_ids: string) => void
    updates_changed: (control: Control) => void
    repo_list_changed: (control: Control) => void
    network_state_changed: (control: Control) => void
    restart_schedule: (control: Control) => void
    locked: (control: Control, is_locked: boolean) => void
    connection_changed: (control: Control, connected: boolean) => void
}

abstract class ControlClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ControlClass

    static name: string
}

interface ControlPrivate {
}

/**
 * Private #PkControl data
 * @record 
 */
class ControlPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ControlPrivate

    static name: string
}

interface DesktopClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DesktopClass

    parent_class: GObject.ObjectClass
}

abstract class DesktopClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DesktopClass

    static name: string
}

interface DesktopPrivate {
}

/**
 * Private #PkDesktop data
 * @record 
 */
class DesktopPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DesktopPrivate

    static name: string
}

interface DetailsClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DetailsClass

    parent_class: SourceClass
}

abstract class DetailsClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DetailsClass

    static name: string
}

interface DetailsPrivate {
}

/**
 * Private #PkDetails data
 * @record 
 */
class DetailsPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DetailsPrivate

    static name: string
}

interface DistroUpgradeClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass

    parent_class: SourceClass
}

abstract class DistroUpgradeClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass

    static name: string
}

interface DistroUpgradePrivate {
}

/**
 * Private #PkDistroUpgrade data
 * @record 
 */
class DistroUpgradePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradePrivate

    static name: string
}

interface EnumMatch {

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
class EnumMatch {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EnumMatch

    static name: string
}

interface ErrorClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ErrorClass

    parent_class: SourceClass
}

abstract class ErrorClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ErrorClass

    static name: string
}

interface ErrorPrivate {
}

/**
 * Private #PkError data
 * @record 
 */
class ErrorPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ErrorPrivate

    static name: string
}

interface EulaRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass

    parent_class: SourceClass
}

abstract class EulaRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass

    static name: string
}

interface EulaRequiredPrivate {
}

/**
 * Private #PkEulaRequired data
 * @record 
 */
class EulaRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredPrivate

    static name: string
}

interface FilesClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.FilesClass

    parent_class: SourceClass
}

abstract class FilesClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.FilesClass

    static name: string
}

interface FilesPrivate {
}

/**
 * Private #PkFiles data
 * @record 
 */
class FilesPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.FilesPrivate

    static name: string
}

interface ItemProgressClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass

    parent_class: SourceClass
}

abstract class ItemProgressClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass

    static name: string
}

interface ItemProgressPrivate {
}

/**
 * Private #PkItemProgress data
 * @record 
 */
class ItemProgressPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgressPrivate

    static name: string
}

interface MediaChangeRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass

    parent_class: SourceClass
}

abstract class MediaChangeRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass

    static name: string
}

interface MediaChangeRequiredPrivate {
}

/**
 * Private #PkMediaChangeRequired data
 * @record 
 */
class MediaChangeRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredPrivate

    static name: string
}

interface PackageClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageClass

    parent_class: SourceClass
    changed: (package: Package) => void
}

abstract class PackageClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageClass

    static name: string
}

interface PackagePrivate {
}

/**
 * Private #PkPackage data
 * @record 
 */
class PackagePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackagePrivate

    static name: string
}

interface PackageSackClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass

    parent_class: GObject.ObjectClass
    changed: (sack: PackageSack) => void
}

abstract class PackageSackClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass

    static name: string
}

interface PackageSackPrivate {
}

/**
 * Private #PkPackageSack data
 * @record 
 */
class PackageSackPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackPrivate

    static name: string
}

interface PackageSackResults {
}

class PackageSackResults {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackResults

    static name: string
}

interface ProgressClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ProgressClass

    parent_class: GObject.ObjectClass
}

abstract class ProgressClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ProgressClass

    static name: string
}

interface ProgressPrivate {
}

/**
 * Private #PkProgress data
 * @record 
 */
class ProgressPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ProgressPrivate

    static name: string
}

interface RepoDetailClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass

    parent_class: SourceClass
}

abstract class RepoDetailClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass

    static name: string
}

interface RepoDetailPrivate {
}

/**
 * Private #PkRepoDetail data
 * @record 
 */
class RepoDetailPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetailPrivate

    static name: string
}

interface RepoSignatureRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass

    parent_class: SourceClass
}

abstract class RepoSignatureRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass

    static name: string
}

interface RepoSignatureRequiredPrivate {
}

/**
 * Private #PkRepoSignatureRequired data
 * @record 
 */
class RepoSignatureRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredPrivate

    static name: string
}

interface RequireRestartClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass

    parent_class: SourceClass
}

abstract class RequireRestartClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass

    static name: string
}

interface RequireRestartPrivate {
}

/**
 * Private #PkRequireRestart data
 * @record 
 */
class RequireRestartPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestartPrivate

    static name: string
}

interface ResultsClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ResultsClass

    parent_class: GObject.ObjectClass
}

abstract class ResultsClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ResultsClass

    static name: string
}

interface ResultsPrivate {
}

/**
 * Private #PkResults data
 * @record 
 */
class ResultsPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ResultsPrivate

    static name: string
}

interface SourceClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.SourceClass

    parent_class: GObject.ObjectClass
}

abstract class SourceClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.SourceClass

    static name: string
}

interface SourcePrivate {
}

/**
 * Private #PkSource data
 * @record 
 */
class SourcePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.SourcePrivate

    static name: string
}

interface TaskClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TaskClass

    parent_class: ClientClass
    untrusted_question: (task: Task, request: number, results: Results) => void
    key_question: (task: Task, request: number, results: Results) => void
    eula_question: (task: Task, request: number, results: Results) => void
    media_change_question: (task: Task, request: number, results: Results) => void
    simulate_question: (task: Task, request: number, results: Results) => void
    repair_question: (task: Task, request: number, results: Results) => void
}

abstract class TaskClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TaskClass

    static name: string
}

interface TaskPrivate {
}

/**
 * Private #PkTask data
 * @record 
 */
class TaskPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TaskPrivate

    static name: string
}

interface TransactionListClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass

    parent_class: GObject.ObjectClass
    added: (tlist: TransactionList, tid: string) => void
    removed: (tlist: TransactionList, tid: string) => void
}

abstract class TransactionListClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass

    static name: string
}

interface TransactionListPrivate {
}

/**
 * Private #PkTransactionList data
 * @record 
 */
class TransactionListPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionListPrivate

    static name: string
}

interface TransactionPastClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass

    parent_class: SourceClass
}

abstract class TransactionPastClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass

    static name: string
}

interface TransactionPastPrivate {
}

/**
 * Private #PkTransactionPast data
 * @record 
 */
class TransactionPastPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPastPrivate

    static name: string
}

interface UpdateDetailClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass

    parent_class: SourceClass
}

abstract class UpdateDetailClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass

    static name: string
}

interface UpdateDetailPrivate {
}

/**
 * Private #PkUpdateDetail data
 * @record 
 */
class UpdateDetailPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailPrivate

    static name: string
}

    type Bitfield = number
}
export default PackageKitGlib;