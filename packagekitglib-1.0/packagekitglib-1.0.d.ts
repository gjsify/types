
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './packagekitglib-1.0-ambient.d.ts';
import './packagekitglib-1.0-import.d.ts';
/**
 * PackageKitGlib-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
    /**
     * D-Bus name of sender updated (Since: 1.2.6)
     */
    SENDER,
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
 * @returns the enumerated constant value, e.g. %PK_AUTHORIZE_ENUM_YES
 */
function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum
/**
 * Converts a enumerated type to its text representation
 * @param authorize_type The enumerated type value
 * @returns the enumerated constant value, e.g. "yes"
 */
function authorize_type_enum_to_string(authorize_type: AuthorizeEnum): string
/**
 * An error quark for #PkClientError.
 * @returns an error quark.
 */
function client_error_quark(): GLib.Quark
/**
 * We are a GObject that sets errors
 * @returns Our personal error quark.
 */
function control_error_quark(): GLib.Quark
/**
 * Add a log domain to the debug output.
 * @param log_domain a log domain
 */
function debug_add_log_domain(log_domain: string): void
/**
 * Check if verbose debugging is enabled.
 * @returns %TRUE if we have debugging enabled
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
 * @returns the enumerated constant value, e.g. PK_DISTRO_UPGRADE_ENUM_STABLE
 */
function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgrade The enumerated type value
 * @returns the enumerated constant value, e.g. "stable"
 */
function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum): string
/**
 * Search for a enum value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param value the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 * @returns the string constant, e.g. "desktop-gnome"
 */
function enum_find_string(table: EnumMatch, value: number): string
/**
 * Search for a string value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param string the string constant to search for, e.g. "desktop-gnome"
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function enum_find_value(table: EnumMatch, string: string): number
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param code Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function error_enum_from_string(code: string): ErrorEnum
/**
 * Converts a enumerated type to its text representation
 * @param code The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function error_enum_to_string(code: ErrorEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param exit Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function exit_enum_from_string(exit: string): ExitEnum
/**
 * Converts a enumerated type to its text representation
 * @param exit The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function exit_enum_to_string(exit: ExitEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param filters the enumerated constant value, e.g. "available;~gui"
 * @returns The enumerated type values
 */
function filter_bitfield_from_string(filters: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param filters The enumerated type values
 * @returns the enumerated constant value, e.g. "available;~gui"
 */
function filter_bitfield_to_string(filters: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param filter Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function filter_enum_from_string(filter: string): FilterEnum
/**
 * Converts a enumerated type to its text representation
 * @param filter The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function filter_enum_to_string(filter: FilterEnum): string
/**
 * Get the distribution ID for the current host, typically "distro;version;arch"
 * @returns a distribution ID
 */
function get_distro_id(): string | null
/**
 * Converts text representation to its enumerated type bitfield
 * @param groups the enumerated constant value, e.g. "available;~gui"
 * @returns The enumerated type values, or 0 for invalid
 */
function group_bitfield_from_string(groups: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param groups The enumerated type values
 * @returns the enumerated constant value, e.g. "gnome;kde"
 */
function group_bitfield_to_string(groups: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param group Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function group_enum_from_string(group: string): GroupEnum
/**
 * Converts a enumerated type to its text representation
 * @param group The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function group_enum_to_string(group: GroupEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param info Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function info_enum_from_string(info: string): InfoEnum
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 * @returns the translated text
 */
function info_enum_to_localised_past(info: InfoEnum): string
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 * @returns the translated text
 */
function info_enum_to_localised_present(info: InfoEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param info The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function info_enum_to_string(info: InfoEnum): string
/**
 * Convert a date into an ISO8601 data string.
 * @param date a #GDate to convert
 * @returns If valid then a new ISO8601 date, else %NULL
 */
function iso8601_from_date(date: GLib.Date): string | null
/**
 * Get the current date / time as an ISO8601 string.
 * @returns The current iso8601 date and time
 */
function iso8601_present(): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param media_type Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_MEDIA_TYPE_ENUM_CD
 */
function media_type_enum_from_string(media_type: string): MediaTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param media_type The enumerated type value
 * @returns the enumerated constant value, e.g. "dvd"
 */
function media_type_enum_to_string(media_type: MediaTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param network Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function network_enum_from_string(network: string): NetworkEnum
/**
 * Converts a enumerated type to its text representation
 * @param network The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function network_enum_to_string(network: NetworkEnum): string
/**
 * Converts the string to the enumerated value.
 * @param action a string representation of a #PkOfflineAction, e.g. "reboot"
 * @returns A #PkOfflineAction, or %PK_OFFLINE_ACTION_UNKNOWN for invalid
 */
function offline_action_from_string(action: string): OfflineAction
/**
 * Converts the enumerated value to a string.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @returns string value, or %NULL for invalid
 */
function offline_action_to_string(action: OfflineAction): string
function offline_auth_cancel(): boolean
function offline_auth_clear_results(): boolean
function offline_auth_invalidate(): boolean
function offline_auth_set_action(action: OfflineAction): boolean
function offline_auth_set_prepared_ids(package_ids: string | null): boolean
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
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_cancel(cancellable: Gio.Cancellable | null): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_cancel_with_flags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_clear_results_with_flags().
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_clear_results(cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_clear_results_with_flags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * An error quark for #PkOfflineError.
 * @returns an error quark.
 */
function offline_error_quark(): GLib.Quark
/**
 * Gets the action that will be taken after the offline action has completed.
 * 
 * An error is set if the the value %PK_OFFLINE_ACTION_UNKNOWN is returned.
 * @returns a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 */
function offline_get_action(): OfflineAction
/**
 * Gets a file monitor for the trigger.
 * @param cancellable A #GCancellable or %NULL
 * @returns A #GFileMonitor, or %NULL
 */
function offline_get_action_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the package-ids in the prepared transaction.
 * @returns array of package-ids, or %NULL
 */
function offline_get_prepared_ids(): string[]
/**
 * Gets a file monitor for the prepared transaction.
 * @param cancellable A #GCancellable or %NULL
 * @returns A #GFileMonitor, or %NULL
 */
function offline_get_prepared_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets a package sack of the packages in the prepared transaction.
 * @returns A new #PkPackageSack, or %NULL
 */
function offline_get_prepared_sack(): PackageSack
function offline_get_prepared_upgrade(name: string | null, release_ver: string | null): boolean
/**
 * Gets a file monitor for the prepared system upgrade transaction.
 * @param cancellable A #GCancellable or %NULL
 * @returns A #GFileMonitor, or %NULL
 */
function offline_get_prepared_upgrade_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the name of the prepared system upgrade in the prepared transaction.
 * @returns the name, or %NULL if unset, free with g_free()
 */
function offline_get_prepared_upgrade_name(): string | null
/**
 * Gets the version of the prepared system upgrade in the prepared transaction.
 * @returns the version, or %NULL if unset, free with g_free()
 */
function offline_get_prepared_upgrade_version(): string | null
/**
 * Gets the last result of the offline transaction.
 * @returns A #PkResults, or %NULL
 */
function offline_get_results(): Results
/**
 * Gets the modification time of the prepared transaction.
 * @returns a unix time, or 0 for error.
 */
function offline_get_results_mtime(): number
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_trigger(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_upgrade_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_trigger_upgrade(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_trigger_upgrade_with_flags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE for success, else %FALSE and @error set
 */
function offline_trigger_with_flags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
function polkit_agent_close(): void
function polkit_agent_open(): number
/**
 * Form a composite string array of strings.
 * The data in the GPtrArray is copied.
 * @param array the GPtrArray of strings
 * @returns the string array, or %NULL if invalid
 */
function ptr_array_to_strv(array: string[]): string[]
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param restart Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function restart_enum_from_string(restart: string): RestartEnum
/**
 * Converts a enumerated type to its text representation
 * @param restart The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function restart_enum_to_string(restart: RestartEnum): string
/**
 * Converts text representation to its enumerated type bitfield
 * @param roles the enumerated constant value, e.g. "search-file;update-system"
 * @returns The enumerated type values, or 0 for invalid
 */
function role_bitfield_from_string(roles: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param roles The enumerated type values
 * @returns the enumerated constant value, e.g. "install-file;update-system"
 */
function role_bitfield_to_string(roles: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param role Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function role_enum_from_string(role: string): RoleEnum
/**
 * Converts a enumerated type to its localized description
 * @param role The enumerated type value
 * @returns the translated text
 */
function role_enum_to_localised_present(role: RoleEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param role The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function role_enum_to_string(role: RoleEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param sig_type Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function sig_type_enum_from_string(sig_type: string): SigTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param sig_type The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function sig_type_enum_to_string(sig_type: SigTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param status Text describing the enumerated type
 * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
function status_enum_from_string(status: string): StatusEnum
function status_enum_to_localised_text(status: StatusEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param status The enumerated type value
 * @returns the enumerated constant value, e.g. "available"
 */
function status_enum_to_string(status: StatusEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param transaction_flags the enumerated constant value, e.g. "only-trusted;simulate"
 * @returns The enumerated type values
 */
function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param transaction_flags The enumerated type values
 * @returns the enumerated constant value, e.g. "only-trusted;simulate"
 */
function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string | null
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param transaction_flag Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_TRANSACTION_FLAG_ENUM_SIMULATE
 */
function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum
/**
 * Converts a enumerated type to its text representation
 * @param transaction_flag The enumerated type value
 * @returns the enumerated constant value, e.g. "simulate"
 */
function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param update_state Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_UPDATE_STATE_ENUM_STABLE
 */
function update_state_enum_from_string(update_state: string): UpdateStateEnum
/**
 * Converts a enumerated type to its text representation
 * @param update_state The enumerated type value
 * @returns the enumerated constant value, e.g. "testing"
 */
function update_state_enum_to_string(update_state: UpdateStateEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgrade_kind Text describing the enumerated type
 * @returns the enumerated constant value, e.g. %PK_UPGRADE_KIND_ENUM_MINIMAL
 */
function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgrade_kind The enumerated type value
 * @returns the enumerated constant value, e.g. "minimal"
 */
function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum): string
/**
 * Function to filter packages in #PkPackageSack.
 * @callback 
 * @param package the package being considered
 * @returns %TRUE if @package should remain in the sack.
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
module Category {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Category

        catId?: string | null
        icon?: string | null
        name?: string | null
        parentId?: string | null
        summary?: string | null
    }

}

interface Category {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    catId: string | null
    icon: string | null
    name: string | null
    parentId: string | null
    summary: string | null

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Category

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Category

    /**
     * Gets the icon filename.
     * @returns the string value, or %NULL for unset.
     */
    get_icon(): string
    /**
     * Gets the id specific to this category.
     * @returns the string value, or %NULL for unset.
     */
    get_id(): string
    /**
     * Gets the name.
     * @returns the string value, or %NULL for unset.
     */
    get_name(): string
    /**
     * Gets the parent category id.
     * @returns the string value, or %NULL for unset.
     */
    get_parent_id(): string
    /**
     * Gets the summary.
     * @returns the string value, or %NULL for unset.
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

    constructor(config?: Category.ConstructorProperties) 
    constructor() 
    static new(): Category

    // Overloads of new

    static new(): Source
    _init(config?: Category.ConstructorProperties): void
}

module Client {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Client

        background?: boolean | null
        cacheAge?: number | null
        detailsWithDepsSize?: boolean | null
        interactive?: boolean | null
        locale?: string | null
    }

}

interface Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    background: boolean
    cacheAge: number
    detailsWithDepsSize: boolean
    readonly idle: boolean
    interactive: boolean
    locale: string | null

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
     * @returns a #PkResults object, or %NULL for error
     */
    accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * We may want to agree to a EULA dialog if one is presented.
     * @param eula_id the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    accept_eula_async(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Adopt a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    adopt(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Adopt a transaction which allows the caller to monitor the state or cancel it.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    adopt_async(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Downloads package files to a specified location.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the #PkResults, or %NULL. Free with g_object_unref()
     */
    generic_finish(res: Gio.AsyncResult): Results
    /**
     * Gets the background value.
     * @returns The background status.
     */
    get_background(): boolean
    /**
     * Gets the maximum cache age value.
     * @returns The cache age in seconds
     */
    get_cache_age(): number
    /**
     * Get a list of all categories supported.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get a list of all categories supported.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get details of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    get_details_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the client details-with-deps-size value.
     * @returns whether the pk_client_get_details_async() should include dependencies    download sizes for packages, which are not installed.
     */
    get_details_with_deps_size(): boolean
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_distro_upgrades_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_files(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get file list of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    get_files_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets if the transaction client idle value.
     * @returns if this client is idle.
     */
    get_idle(): boolean
    /**
     * Gets the client interactive value.
     * @returns if the transaction is due to run interactivly.
     */
    get_interactive(): boolean
    /**
     * Gets the locale used for this transaction.
     * @returns The locale.
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
     * @returns a #PkResults object, or %NULL for error
     */
    get_old_transactions(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_old_transactions_async(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the list of packages from the backend
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_packages(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the list of packages from the backend
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the progress of a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transaction_id The transaction id
     * @param cancellable a #GCancellable or %NULL
     * @returns a #PkResults object, or %NULL for error
     */
    get_progress(transaction_id: string, cancellable: Gio.Cancellable | null): Progress
    /**
     * Find the current state of a transaction.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param callback_ready the function to run on completion
     */
    get_progress_async(transaction_id: string, cancellable: Gio.Cancellable | null, callback_ready: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_progress_async

    /**
     * Promisified version of {@link get_progress_async}
     * 
     * Find the current state of a transaction.
     * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param callback_ready the function to run on completion
     * @returns A Promise of: the #PkProgress, or %NULL. Free with g_object_unref()
     */
    get_progress_async(transaction_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Progress>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the #PkProgress, or %NULL. Free with g_object_unref()
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
     * @returns a #PkResults object, or %NULL for error
     */
    get_repo_list(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the list of repositories installed on the system.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_updates(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    install_files_async(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    install_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    install_signature_async(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    remove_packages_async(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    repair_system_async(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Enable or disable the repository.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repo_id a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    repo_remove_async(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    repo_set_data_async(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Search for packages that provide a specific file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Return all packages in a specific group.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * Sets whether the pk_client_get_details_async() should include dependencies
     * download sizes for packages, which are not installed.
     * @param details_with_deps_size the value to set
     */
    set_details_with_deps_size(details_with_deps_size: boolean): void
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
     * @returns a #PkResults object, or %NULL for error
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
    update_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    upgrade_system_async(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
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
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Client

    vfunc_changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Client

    connect(sigName: "notify::background", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::details-with-deps-size", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details-with-deps-size", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details-with-deps-size", ...args: any[]): void
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
    static create_helper_argv_envp(argv: string | null, envp_out: string | null): boolean
}

module ClientHelper {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

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
     * @returns %TRUE for success
     */
    start(socket_filename: string, argv: string | null, envp: string | null): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socket the (bound and listening) #GSocket instance to use
     * @param argv the executable, along with any arguments
     * @param envp the environment
     * @returns %TRUE for success
     */
    start_with_socket(socket: Gio.Socket, argv: string | null, envp: string | null): boolean
    /**
     * Stops the helper process, by killing the helper process and deleting
     * the socket.
     * @returns %TRUE for success
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

    constructor(config?: ClientHelper.ConstructorProperties) 
    constructor() 
    static new(): ClientHelper
    _init(config?: ClientHelper.ConstructorProperties): void
}

module Control {

    // Signal callback interfaces

    /**
     * Signal callback interface for `repo-list-changed`
     */
    interface RepoListChangedSignalCallback {
        ($obj: Control): void
    }

    /**
     * Signal callback interface for `restart-schedule`
     */
    interface RestartScheduleSignalCallback {
        ($obj: Control): void
    }

    /**
     * Signal callback interface for `transaction-list-changed`
     */
    interface TransactionListChangedSignalCallback {
        ($obj: Control, transaction_ids: string[]): void
    }

    /**
     * Signal callback interface for `updates-changed`
     */
    interface UpdatesChangedSignalCallback {
        ($obj: Control): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Control

        backendAuthor?: string | null
        backendDescription?: string | null
        backendName?: string | null
        connected?: boolean | null
        distroId?: string | null
        filters?: number | null
        groups?: number | null
        locked?: boolean | null
        mimeTypes?: string[] | null
        networkState?: NetworkEnum | null
        provides?: number | null
        roles?: number | null
    }

}

interface Control {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    backendAuthor: string | null
    backendDescription: string | null
    backendName: string | null
    connected: boolean
    distroId: string | null
    filters: number
    groups: number
    locked: boolean
    mimeTypes: string[]
    networkState: NetworkEnum
    provides: number
    roles: number
    readonly versionMajor: number
    readonly versionMicro: number
    readonly versionMinor: number

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
    can_authorize_async(action_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of can_authorize_async

    /**
     * Promisified version of {@link can_authorize_async}
     * 
     * We may want to know before we run a method if we are going to be denied,
     * accepted or challenged for authentication.
     * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: the #PkAuthorizeEnum or %PK_AUTHORIZE_ENUM_UNKNOWN if the method failed
     */
    can_authorize_async(action_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<AuthorizeEnum>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the #PkAuthorizeEnum or %PK_AUTHORIZE_ENUM_UNKNOWN if the method failed
     */
    can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum
    /**
     * Gets the debugging state from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_daemon_state_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_daemon_state_async

    /**
     * Promisified version of {@link get_daemon_state_async}
     * 
     * Gets the debugging state from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: the ID, or %NULL if unset, free with g_free()
     */
    get_daemon_state_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string | null>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the ID, or %NULL if unset, free with g_free()
     */
    get_daemon_state_finish(res: Gio.AsyncResult): string | null
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    get_properties(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets global properties from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_properties_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_properties_async

    /**
     * Promisified version of {@link get_properties_async}
     * 
     * Gets global properties from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: %TRUE if we set the proxy successfully
     */
    get_properties_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if we set the proxy successfully
     */
    get_properties_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets a transacton ID from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_tid_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_tid_async

    /**
     * Promisified version of {@link get_tid_async}
     * 
     * Gets a transacton ID from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: the ID, or %NULL if unset, free with g_free()
     */
    get_tid_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string | null>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the ID, or %NULL if unset, free with g_free()
     */
    get_tid_finish(res: Gio.AsyncResult): string | null
    /**
     * We may want to know how long it has been since we refreshed the cache or
     * retrieved the update list.
     * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_time_since_action_async(role: RoleEnum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_time_since_action_async

    /**
     * Promisified version of {@link get_time_since_action_async}
     * 
     * We may want to know how long it has been since we refreshed the cache or
     * retrieved the update list.
     * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: %TRUE if the daemon serviced the request
     */
    get_time_since_action_async(role: RoleEnum, cancellable: Gio.Cancellable | null): globalThis.Promise<number>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if the daemon serviced the request
     */
    get_time_since_action_finish(res: Gio.AsyncResult): number
    /**
     * Gets the transaction list in progress.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns The list of transaction id's, or %NULL, free with g_strfreev()
     */
    get_transaction_list(cancellable: Gio.Cancellable | null): string[]
    /**
     * Gets the transactions currently running in the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_transaction_list_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_transaction_list_async

    /**
     * Promisified version of {@link get_transaction_list_async}
     * 
     * Gets the transactions currently running in the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: A GStrv list of transaction ID's, free with g_strfreev()
     */
    get_transaction_list_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns A GStrv list of transaction ID's, free with g_strfreev()
     */
    get_transaction_list_finish(res: Gio.AsyncResult): string[]
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxy_http the HTTP proxy server
     * @param proxy_ftp the FTP proxy server
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the proxy was set correctly NOTE: This is just provided for backwards compatibility. Clients should really be using pk_control_set_proxy2().
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
     * @returns %TRUE if the proxy was set correctly
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
    set_proxy2_async(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
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
    set_proxy_async(proxy_http: string, proxy_ftp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of set_proxy_async

    /**
     * Promisified version of {@link set_proxy_async}
     * 
     * Set a proxy on the PK daemon
     * 
     * NOTE: This is just provided for backwards compatibility.
     * Clients should really be using pk_control_set_proxy2_async().
     * @param proxy_http a HTTP proxy string such as "username:password`server`.lan:8080"
     * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: %TRUE if we set the proxy successfully
     */
    set_proxy_async(proxy_http: string, proxy_ftp: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if we set the proxy successfully
     */
    set_proxy_finish(res: Gio.AsyncResult): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the suggestion was sent
     */
    suggest_daemon_quit(cancellable: Gio.Cancellable | null): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    suggest_daemon_quit_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of suggest_daemon_quit_async

    /**
     * Promisified version of {@link suggest_daemon_quit_async}
     * 
     * Suggests to the daemon that it should quit as soon as possible.
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: %TRUE if the suggestion was sent
     */
    suggest_daemon_quit_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if the suggestion was sent
     */
    suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Control

    vfunc_connection_changed(connected: boolean): void
    vfunc_locked(is_locked: boolean): void
    vfunc_network_state_changed(): void
    vfunc_repo_list_changed(): void
    vfunc_restart_schedule(): void
    vfunc_transaction_list_changed(transaction_ids: string | null): void
    vfunc_updates_changed(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): number
    connect_after(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): number
    emit(sigName: "repo-list-changed", ...args: any[]): void
    connect(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): number
    connect_after(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): number
    emit(sigName: "restart-schedule", ...args: any[]): void
    connect(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): number
    connect_after(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): number
    emit(sigName: "transaction-list-changed", transaction_ids: string[], ...args: any[]): void
    connect(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): number
    connect_after(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): number
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

    constructor(config?: Control.ConstructorProperties) 
    constructor() 
    static new(): Control
    _init(config?: Control.ConstructorProperties): void
}

module Desktop {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

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
     * @returns string array of results, free with g_ptr_array_unref() NOTE: This method is unused and will be removed next time the library soname changes!
     */
    get_files_for_package(package: string): string[]
    /**
     * Returns the package name that owns the desktop file. Fast.
     * @param filename a fully qualified filename
     * @returns package name, or %NULL NOTE: This method is unused and will be removed next time the library soname changes!
     */
    get_package_for_file(filename: string): string | null
    /**
     * Return all desktop files owned by a package that would be shown in a menu,
     * i.e are an application
     * @param package the package name, e.g. "gnome-power-manager"
     * @returns string array of results, free with g_ptr_array_unref() NOTE: This method is unused and will be removed next time the library soname changes!
     */
    get_shown_for_package(package: string): string[]
    /**
     * This method is unused and will be removed next time the library
     * soname changes!
     * @returns %TRUE if opened correctly
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

module Details {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Details

        description?: string | null
        downloadSize?: number | null
        group?: GroupEnum | null
        license?: string | null
        packageId?: string | null
        size?: number | null
        summary?: string | null
        url?: string | null
    }

}

interface Details {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    description: string | null
    downloadSize: number
    group: GroupEnum
    license: string | null
    packageId: string | null
    size: number
    summary: string | null
    url: string | null

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Details

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Details

    /**
     * Gets the description for the details object.
     * @returns string value
     */
    get_description(): string
    /**
     * Gets the package download size.
     * @returns the package download size, 0 if already downloaded and G_MAXUINT64 when unknown
     */
    get_download_size(): number
    /**
     * Gets the group for the details object.
     * @returns string value
     */
    get_group(): GroupEnum
    /**
     * Gets the license for the details object.
     * @returns string value
     */
    get_license(): string
    /**
     * Gets the PackageId for the details object.
     * @returns string value
     */
    get_package_id(): string
    /**
     * Gets the size for the details object: for installed packages it will return
     * the installed size, for the rest the package size.
     * @returns string value
     */
    get_size(): number
    /**
     * Gets the summary for the details object.
     * @returns string value
     */
    get_summary(): string
    /**
     * Gets the url for the details object.
     * @returns string value
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

    constructor(config?: Details.ConstructorProperties) 
    constructor() 
    static new(): Details

    // Overloads of new

    static new(): Source
    _init(config?: Details.ConstructorProperties): void
}

module DistroUpgrade {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

        name?: string | null
        state?: DistroUpgradeEnum | null
        summary?: string | null
    }

}

interface DistroUpgrade {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    name: string | null
    state: DistroUpgradeEnum
    summary: string | null

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    /**
     * Gets the distribution identifier.
     * You use this value to call UpgradeSystem.
     * @returns the distro-id, e.g. "fedora-14"
     */
    get_id(): string
    /**
     * Gets the status of the distribution upgrade.
     * @returns the printable name, e.g. %PK_DISTRO_UPGRADE_ENUM_UNSTABLE
     */
    get_state(): DistroUpgradeEnum
    /**
     * Gets the description of the distribution upgrade.
     * @returns the printable name, e.g. "Fedora 14"
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

    constructor(config?: DistroUpgrade.ConstructorProperties) 
    constructor() 
    static new(): DistroUpgrade

    // Overloads of new

    static new(): Source
    _init(config?: DistroUpgrade.ConstructorProperties): void
}

module Error {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Error

        code?: ErrorEnum | null
        details?: string | null
    }

}

interface Error {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    code: ErrorEnum
    details: string | null

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Error

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Error

    /**
     * Get the error code for this error.
     * @returns a #PkErrorEnum
     */
    get_code(): ErrorEnum
    /**
     * Get details for this error.
     * @returns an string description
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

    constructor(config?: Error.ConstructorProperties) 
    constructor() 
    static new(): Error

    // Overloads of new

    static new(): Source
    _init(config?: Error.ConstructorProperties): void
}

module EulaRequired {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

        /**
         * ID for this EULA.
         */
        eulaId?: string | null
        /**
         * The text of the license agreement.
         */
        licenseAgreement?: string | null
        /**
         * PackageID this EULA is for.
         */
        packageId?: string | null
        /**
         * Vendor this EULA is from.
         */
        vendorName?: string | null
    }

}

interface EulaRequired {

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

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * Get the ID for this EULA
     * @returns an ID
     */
    get_eula_id(): string
    /**
     * Get the text of the license agreement.
     * @returns license agreement text
     */
    get_license_agreement(): string
    /**
     * Get the PackageID this EULA is for
     * @returns a PackageID
     */
    get_package_id(): string
    /**
     * Get the vendor this EULA is from.
     * @returns license vendor name
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

    constructor(config?: EulaRequired.ConstructorProperties) 
    constructor() 
    static new(): EulaRequired

    // Overloads of new

    static new(): Source
    _init(config?: EulaRequired.ConstructorProperties): void
}

module Files {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Files

        files?: string[] | null
        packageId?: string | null
    }

}

interface Files {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    files: string[]
    packageId: string | null

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Files

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Files

    /**
     * Gets the file list
     * @returns Gets the file list for the files object
     */
    get_files(): string[]
    /**
     * Gets the package-id
     * @returns Gets the package_id for the files object
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

    constructor(config?: Files.ConstructorProperties) 
    constructor() 
    static new(): Files

    // Overloads of new

    static new(): Source
    _init(config?: Files.ConstructorProperties): void
}

module ItemProgress {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

        packageId?: string | null
        percentage?: number | null
        status?: number | null
    }

}

interface ItemProgress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    packageId: string | null
    percentage: number
    status: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    /**
     * Get the package ID this item is working on.
     * @returns a package ID
     */
    get_package_id(): string
    /**
     * Get the percentage complete of this item.
     * @returns a progress percentage (0-100)
     */
    get_percentage(): number
    /**
     * Get the status of this item.
     * @returns a #PkStatusEnum
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

module MediaChangeRequired {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

        mediaId?: string | null
        mediaText?: string | null
        mediaType?: MediaTypeEnum | null
    }

}

interface MediaChangeRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    mediaId: string | null
    mediaText: string | null
    mediaType: MediaTypeEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    parent: Source & GObject.Object
    priv: any

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

    constructor(config?: MediaChangeRequired.ConstructorProperties) 
    constructor() 
    static new(): MediaChangeRequired

    // Overloads of new

    static new(): Source
    _init(config?: MediaChangeRequired.ConstructorProperties): void
}

module Package {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: Package): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Package

        description?: string | null
        group?: GroupEnum | null
        info?: InfoEnum | null
        license?: string | null
        size?: number | null
        summary?: string | null
        updateBugzillaUrls?: string[] | null
        updateChangelog?: string | null
        updateCveUrls?: string[] | null
        updateIssued?: string | null
        updateObsoletes?: string | null
        updateRestart?: RestartEnum | null
        /**
         * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
         * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
         */
        updateSeverity?: InfoEnum | null
        updateState?: UpdateStateEnum | null
        updateText?: string | null
        updateUpdated?: string | null
        updateUpdates?: string | null
        updateVendorUrls?: string[] | null
        url?: string | null
    }

}

interface Package {

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
    equal_id(package2: Package): boolean
    /**
     * Gets the package arch.
     * @returns the arch, or %NULL if unset
     */
    get_arch(): string
    /**
     * Gets the package data, which is usually the repository ID that contains the
     * package. Special ID's include "installed" for installed packages, and "local"
     * for local packages that exist on disk but not in a repository.
     * @returns the data, or %NULL if unset
     */
    get_data(): string

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets the package object ID
     * @returns the ID, or %NULL if unset
     */
    get_id(): string
    /**
     * Gets the package object ID
     * @returns the #PkInfoEnum
     */
    get_info(): InfoEnum
    /**
     * Gets the package name.
     * @returns the name, or %NULL if unset
     */
    get_name(): string
    /**
     * Gets the package object ID
     * @returns the summary, or %NULL if unset
     */
    get_summary(): string
    /**
     * Returns the `package` update severity. Can be one of %PK_INFO_ENUM_UNKNOWN,
     * %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL, %PK_INFO_ENUM_IMPORTANT or
     * %PK_INFO_ENUM_CRITICAL.
     * @returns the @package update severity, if known.
     */
    get_update_severity(): InfoEnum
    /**
     * Gets the package version.
     * @returns the version, or %NULL if unset
     */
    get_version(): string
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
     * @param package_id the valid package_id
     * @returns %TRUE if the package_id was set
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

    connect(sigName: "changed", callback: Package.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Package.ChangedSignalCallback): number
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
    static id_build(name: string, version: string, arch: string, data: string): string | null
    /**
     * Check if a Packageid is well formed.
     * @param package_id the PackageID to check
     * @returns %TRUE if the PackageID was well formed.
     */
    static id_check(package_id: string): boolean
    /**
     * Only compare the name, version, and arch, where the architecture will fuzzy
     * match with i*86.
     * @param package_id1 the first PackageID
     * @param package_id2 the second PackageID
     * @returns %TRUE if the PackageIDs can be considered equal.
     */
    static id_equal_fuzzy_arch(package_id1: string, package_id2: string): boolean
    /**
     * Splits a PackageID into the correct number of parts, checking the correct
     * number of delimiters are present.
     * @param package_id the ; delimited PackageID to split
     * @returns a GStrv or %NULL if invalid, use g_strfreev() to free
     */
    static id_split(package_id: string): string[]
    /**
     * Formats the PackageID to be printable to the user.
     * @param package_id the PackageID
     * @returns the name-version.arch formatted string, use g_free() to free.
     */
    static id_to_printable(package_id: string): string | null
    /**
     * Adds a package_id to an existing list.
     * @param package_ids a string array of package_id's
     * @param package_id a single package_id
     * @returns the new list, free g_strfreev()
     */
    static ids_add_id(package_ids: string | null, package_id: string): string[]
    /**
     * Adds a package_id to an existing list.
     * @param package_ids a string array of package_id's
     * @param package_ids_new a string array of package_id's
     * @returns the new list, free g_strfreev()
     */
    static ids_add_ids(package_ids: string | null, package_ids_new: string | null): string[]
    /**
     * Check the string array of package_id's for validity
     * @param package_ids a string array of package_id's
     * @returns %TRUE if the package_ids are all valid.
     */
    static ids_check(package_ids: string | null): boolean
    /**
     * Form a composite string array of package_id's from
     * a single package_id
     * @param package_id A single package_id
     * @returns the string array, or %NULL if invalid, free with g_strfreev()
     */
    static ids_from_id(package_id: string): string[]
    /**
     * Form a composite string array of package_id's from
     * a delimited string
     * @param package_id A single package_id
     * @returns the string array, or %NULL if invalid, free with g_strfreev()
     */
    static ids_from_string(package_id: string): string[]
    /**
     * Finds out if a package ID is present in the list.
     * @param package_ids a string array of package_id's
     * @param package_id a single package_id
     * @returns %TRUE if the package ID is present
     */
    static ids_present_id(package_ids: string | null, package_id: string): boolean
    /**
     * Removes a package ID from the the list.
     * @param package_ids a string array of package_id's
     * @param package_id a single package_id
     * @returns the new list, free g_strfreev()
     */
    static ids_remove_id(package_ids: string | null, package_id: string): string[]
    /**
     * Cats the string array of package_id's into one delimited string
     * @param package_ids a string array of package_id's
     * @returns a string representation of all the package_id's.
     */
    static ids_to_string(package_ids: string | null): string | null
}

module PackageSack {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PackageSack {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    parent: GObject.Object
    priv: PackageSackPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    /**
     * Adds a package to the sack.
     * @param package a valid #PkPackage instance
     * @returns %TRUE if the package was added to the sack
     */
    add_package(package: Package): boolean
    /**
     * Adds a package reference to the sack.
     * @param package_id a package_id descriptor
     * @returns %TRUE if the package was added to the sack
     */
    add_package_by_id(package_id: string): boolean
    /**
     * Adds packages from package-list file to a #PkPackageSack.
     * @param file a valid package-list file
     * @returns %TRUE if there were no errors.
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
     * @returns a new #PkPackageSack, free with g_object_unref()
     */
    filter(filter_cb: PackageSackFilterFunc): PackageSack
    /**
     * Returns a new package sack which only matches packages that match the
     * specified info enum value.
     * @param info a #PkInfoEnum value to match
     * @returns a new #PkPackageSack, free with g_object_unref()
     */
    filter_by_info(info: InfoEnum): PackageSack
    /**
     * Finds a package in a sack from reference. As soon as one package is found
     * the search is stopped.
     * @param package_id a package_id descriptor
     * @returns the #PkPackage object, or %NULL if unfound. Free with g_object_unref()
     */
    find_by_id(package_id: string): Package
    /**
     * Finds a package in a sack by package name and architecture. As soon as one
     * package is found the search is stopped.
     * @param package_id a package_id descriptor
     * @returns the #PkPackage object, or %NULL if not found.
     */
    find_by_id_name_arch(package_id: string): Package
    /**
     * Gets the package array from the sack
     * @returns A #GPtrArray, free with g_ptr_array_unref().
     */
    get_array(): Package[]
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    get_details(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    get_details_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Returns all the Package IDs in the sack
     * @returns the number of packages in the sack, free with g_strfreev()
     */
    get_ids(): string[]
    /**
     * Gets the number of packages in the sack
     * @returns the number of packages in the sack
     */
    get_size(): number
    /**
     * Gets the total size of the package sack in bytes.
     * @returns the size in bytes
     */
    get_total_bytes(): number
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if the properties were set correctly
     */
    get_update_detail(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in update details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    get_update_detail_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    merge_generic_finish(res: Gio.AsyncResult): boolean
    /**
     * Removes from the package sack any packages that return %FALSE from the filter
     * function.
     * @param filter_cb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to retain
     * @returns %TRUE if a package was removed from the sack
     */
    remove_by_filter(filter_cb: PackageSackFilterFunc): boolean
    /**
     * Removes a package reference from the sack. The pointers have to match exactly.
     * @param package a valid #PkPackage instance
     * @returns %TRUE if the package was removed from the sack
     */
    remove_package(package: Package): boolean
    /**
     * Removes a package reference from the sack. As soon as one package is removed
     * the search is stopped.
     * @param package_id a package_id descriptor
     * @returns %TRUE if the package was removed from the sack
     */
    remove_package_by_id(package_id: string): boolean
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
     * @param progress_callback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    resolve_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback: Gio.AsyncReadyCallback<this> | null): void
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

    constructor(config?: PackageSack.ConstructorProperties) 
    constructor() 
    static new(): PackageSack
    _init(config?: PackageSack.ConstructorProperties): void
}

module Progress {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Progress

        /**
         * %TRUE if this transaction can be cancelled.
         */
        allowCancel?: boolean | null
        /**
         * %TRUE if the transaction caller is still connected.
         */
        callerActive?: boolean | null
        /**
         * Number of bytes remaining to download.
         */
        downloadSizeRemaining?: number | null
        /**
         * Amount of time the transaction has taken in seconds.
         */
        elapsedTime?: number | null
        /**
         * Item progress associated with this transaction.
         */
        itemProgress?: ItemProgress | null
        /**
         * The package this transaction is acting on.
         */
        package?: Package | null
        /**
         * Package ID this transaction is acting on.
         */
        packageId?: string | null
        /**
         * Percentage complete of this transaction.
         */
        percentage?: number | null
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         */
        remainingTime?: number | null
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
        transactionFlags?: number | null
        /**
         * ID used by this transaction.
         */
        transactionId?: string | null
        /**
         * The UID that started this transaction.
         */
        uid?: number | null
    }

}

interface Progress {

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

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Progress

    parent: GObject.Object
    priv: ProgressPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * Get if this transaction can be cancelled.
     * @returns %TRUE if progress can be cancelled.
     */
    get_allow_cancel(): boolean
    /**
     * Get if the transaction caller is connected.
     * @returns %TRUE if the transaction caller is still connected.
     */
    get_caller_active(): boolean
    /**
     * Get the number of bytes remaining to download.
     * @returns number of bytes remaining to download.
     */
    get_download_size_remaining(): number
    /**
     * Get the amount of time the transaction has taken.
     * @returns time in seconds
     */
    get_elapsed_time(): number
    /**
     * Get the item progress associated with this transaction.
     * @returns a #PkItemProgress
     */
    get_item_progress(): ItemProgress
    /**
     * Get the package this transaction is acting on.
     * @returns a #PkPackage
     */
    get_package(): Package
    /**
     * Get the package ID this transaction is acting on.
     * @returns a PackageID
     */
    get_package_id(): string
    /**
     * Get the percentage complete.
     * @returns a percentage (0-100)
     */
    get_percentage(): number
    /**
     * Get the amount of time the transaction will take to complete.
     * @returns time in seconds or 0 if unknown.
     */
    get_remaining_time(): number
    /**
     * Get the role of this transaction.
     * @returns a #PkRoleEnum
     */
    get_role(): RoleEnum
    /**
     * Get the D-Bus name of the client that started this transaction.
     * @returns a D-Bus name
     */
    get_sender(): string | null
    /**
     * Get the speed of this transaction.
     * @returns speed in bits per scond or 0 if unknown
     */
    get_speed(): number
    /**
     * Get the status of this transaction.
     * @returns a status string
     */
    get_status(): StatusEnum
    /**
     * Get the flags associated with this transaction.
     * @returns a #PkBitfield containing #PkTransactionFlagEnum values.
     */
    get_transaction_flags(): number
    /**
     * Get the ID used by this transaction.
     * @returns a transaction ID.
     */
    get_transaction_id(): string
    /**
     * Get the UID that started this transaction.
     * @returns an UID
     */
    get_uid(): number
    /**
     * Set if this transaction can be cancelled.
     * @param allow_cancel %TRUE if this transaction can be cancelled.
     * @returns %TRUE if value changed.
     */
    set_allow_cancel(allow_cancel: boolean): boolean
    /**
     * Set if the transaction caller is connected.
     * @param caller_active %TRUE if the transaction caller is still connected.
     * @returns %TRUE if value changed.
     */
    set_caller_active(caller_active: boolean): boolean
    /**
     * Set the number of bytes remaining to download.
     * @param download_size_remaining number of bytes remaining to download.
     * @returns %TRUE if value changed.
     */
    set_download_size_remaining(download_size_remaining: number): boolean
    /**
     * Set the amount of time the transaction has taken.
     * @param elapsed_time time in seconds
     * @returns %TRUE if value changed.
     */
    set_elapsed_time(elapsed_time: number): boolean
    /**
     * Set the item progress associated with this transaction.
     * @param item_progress a #PkItemProgress
     * @returns %TRUE if value changed.
     */
    set_item_progress(item_progress: ItemProgress): boolean
    /**
     * Set the package this transaction is acting on.
     * @param package a #PkPackage
     * @returns %TRUE if value changed.
     */
    set_package(package: Package): boolean
    /**
     * Set the package ID this transaction is acting on.
     * @param package_id a PackageID
     * @returns %TRUE if value changed.
     */
    set_package_id(package_id: string): boolean
    /**
     * Set the percentage complete of this transaction.
     * @param percentage a percentage value (0-100)
     * @returns %TRUE if value changed.
     */
    set_percentage(percentage: number): boolean
    /**
     * Set the amount of time the transaction will take to complete.
     * @param remaining_time time in seconds or 0 if unknown.
     * @returns %TRUE if value changed.
     */
    set_remaining_time(remaining_time: number): boolean
    /**
     * Set the role of this transaction.
     * @param role a #PkRoleEnum
     * @returns %TRUE if value changed.
     */
    set_role(role: RoleEnum): boolean
    /**
     * Set the D-Bus name of the client that started this transaction.
     * @param bus_name a D-Bus name
     * @returns %TRUE if value changed.
     */
    set_sender(bus_name: string): boolean
    /**
     * Set the speed of this transaction.
     * @param speed speed in bits per second or 0 if unknown
     * @returns %TRUE if value changed.
     */
    set_speed(speed: number): boolean
    /**
     * Set the status of this transaction.
     * @param status a #PkStatusEnum
     * @returns %TRUE if value changed.
     */
    set_status(status: StatusEnum): boolean
    /**
     * Set the flags associated with this transaction.
     * @param transaction_flags a #PkBitfield containing #PkTransactionFlagEnum values.
     * @returns %TRUE if value changed.
     */
    set_transaction_flags(transaction_flags: number): boolean
    /**
     * Set the ID used by this transaction.
     * @param transaction_id a transaction ID.
     * @returns %TRUE if value changed.
     */
    set_transaction_id(transaction_id: string): boolean
    /**
     * Set the UID that started this transaction.
     * @param uid a UID
     * @returns %TRUE if value changed.
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
    connect(sigName: "notify::sender", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sender", ...args: any[]): void
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

module RepoDetail {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

        description?: string | null
        enabled?: boolean | null
        repoId?: string | null
    }

}

interface RepoDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    description: string | null
    enabled: boolean
    repoId: string | null

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    /**
     * Gets the repository description.
     * @returns string ID, e.g. "Fedora 20 - i386"
     */
    get_description(): string
    /**
     * Gets the repository enabled status.
     * @returns %TRUE for enabled
     */
    get_enabled(): boolean
    /**
     * Gets the repository ID.
     * @returns string ID, e.g. "fedora"
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

    constructor(config?: RepoDetail.ConstructorProperties) 
    constructor() 
    static new(): RepoDetail

    // Overloads of new

    static new(): Source
    _init(config?: RepoDetail.ConstructorProperties): void
}

module RepoSignatureRequired {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

        keyFingerprint?: string | null
        keyId?: string | null
        keyTimestamp?: string | null
        keyUrl?: string | null
        keyUserid?: string | null
        packageId?: string | null
        repositoryName?: string | null
        type?: SigTypeEnum | null
    }

}

interface RepoSignatureRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    keyFingerprint: string | null
    keyId: string | null
    keyTimestamp: string | null
    keyUrl: string | null
    keyUserid: string | null
    packageId: string | null
    repositoryName: string | null
    type: SigTypeEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    parent: Source & GObject.Object
    priv: any

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

    constructor(config?: RepoSignatureRequired.ConstructorProperties) 
    constructor() 
    static new(): RepoSignatureRequired

    // Overloads of new

    static new(): Source
    _init(config?: RepoSignatureRequired.ConstructorProperties): void
}

module RequireRestart {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

        packageId?: string | null
        restart?: RestartEnum | null
    }

}

interface RequireRestart {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    packageId: string | null
    restart: RestartEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    parent: Source & GObject.Object
    priv: any

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

    constructor(config?: RequireRestart.ConstructorProperties) 
    constructor() 
    static new(): RequireRestart

    // Overloads of new

    static new(): Source
    _init(config?: RequireRestart.ConstructorProperties): void
}

module Results {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        transactionFlags?: number | null
    }

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
    transactionFlags: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Results

    parent: GObject.Object
    priv: ResultsPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Results

    /**
     * Adds a category item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_category(item: Category): boolean
    /**
     * Adds some package details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_details(item: Details): boolean
    /**
     * Adds a distribution upgrade item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_distro_upgrade(item: DistroUpgrade): boolean
    /**
     * Adds some EULA details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_eula_required(item: EulaRequired): boolean
    /**
     * Adds some files details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_files(item: Files): boolean
    /**
     * Adds some media change details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_media_change_required(item: MediaChangeRequired): boolean
    /**
     * Adds a package to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_package(item: Package): boolean
    /**
     * Adds some repository details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_repo_detail(item: RepoDetail): boolean
    /**
     * Adds some repository signature details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_repo_signature_required(item: RepoSignatureRequired): boolean
    /**
     * Adds a require restart item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_require_restart(item: RequireRestart): boolean
    /**
     * Adds a transaction item to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_transaction(item: TransactionPast): boolean
    /**
     * Adds some update details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    add_update_detail(item: UpdateDetail): boolean
    /**
     * Gets the categories from the transaction.
     * @returns A #GPtrArray array of #PkCategory's, free with g_ptr_array_unref().
     */
    get_category_array(): Category[]
    /**
     * Gets the package details from the transaction.
     * @returns A #GPtrArray array of #PkDetails's, free with g_ptr_array_unref().
     */
    get_details_array(): Details[]
    /**
     * Gets the distribution upgrades from the transaction.
     * @returns A #GPtrArray array of #PkDistroUpgrade's, free with g_ptr_array_unref().
     */
    get_distro_upgrade_array(): DistroUpgrade[]
    /**
     * Gets the last error code from the transaction.
     * @returns A #PkError, or %NULL, free with g_object_unref()
     */
    get_error_code(): Error
    /**
     * Gets the eulas required from the transaction.
     * @returns A #GPtrArray array of #PkEulaRequired's, free with g_ptr_array_unref().
     */
    get_eula_required_array(): EulaRequired[]
    /**
     * Gets the exit enum. You probably don't want to be using this function, and
     * instead using the much more useful pk_results_get_error_code() function.
     * @returns The #PkExitEnum or %PK_EXIT_ENUM_UNKNOWN for error or if it was not set
     */
    get_exit_code(): ExitEnum
    /**
     * Gets the files from the transaction.
     * @returns A #GPtrArray array of #PkFiles's, free with g_ptr_array_unref().
     */
    get_files_array(): Files[]
    /**
     * Gets the media changes required from the transaction.
     * @returns A #GPtrArray array of #PkMediaChangeRequired's, free with g_ptr_array_unref().
     */
    get_media_change_required_array(): MediaChangeRequired[]
    /**
     * Gets the packages from the transaction.
     * @returns A #GPtrArray array of #PkPackage's, free with g_ptr_array_unref().
     */
    get_package_array(): Package[]
    /**
     * Gets a package sack from the transaction.
     * @returns A #PkPackageSack of data, g_object_unref() to free.
     */
    get_package_sack(): PackageSack
    /**
     * Gets the repository details from the transaction.
     * @returns A #GPtrArray array of #PkRepoDetail's, free with g_ptr_array_unref().
     */
    get_repo_detail_array(): RepoDetail[]
    /**
     * Gets the repository signatures required from the transaction.
     * @returns A #GPtrArray array of #PkRepoSignatureRequired's, free with g_ptr_array_unref().
     */
    get_repo_signature_required_array(): RepoSignatureRequired[]
    /**
     * Gets the require restarts from the transaction.
     * @returns A #GPtrArray array of #PkRequireRestart's, free with g_ptr_array_unref().
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
     * @returns a #PkRestartEnum value, e.g. PK_RESTART_ENUM_SYSTEM
     */
    get_require_restart_worst(): RestartEnum
    /**
     * Gets the role that produced these results.
     * @returns The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
     */
    get_role(): RoleEnum
    /**
     * Gets the transactions from the transaction.
     * @returns A #GPtrArray array of #PkTransactionPast's, free with g_ptr_array_unref().
     */
    get_transaction_array(): TransactionPast[]
    /**
     * Gets the transaction flag for these results.
     * @returns a #PkBitfield containing #PkTransactionFlagEnum 0 if not set
     */
    get_transaction_flags(): Bitfield
    /**
     * Gets the update details from the transaction.
     * @returns A #GPtrArray array of #PkUpdateDetail's, free with g_ptr_array_unref().
     */
    get_update_detail_array(): UpdateDetail[]
    /**
     * Adds some error details to the results set.
     * @param item the object to add to the array
     * @returns %TRUE if the value was set
     */
    set_error_code(item: Error): boolean
    /**
     * Sets the results object to have the given exit code.
     * @param exit_enum the exit code
     * @returns %TRUE if the value was set
     */
    set_exit_code(exit_enum: ExitEnum): boolean
    /**
     * Sets the results object to have the given role enum.
     * @param role the role enum
     * @returns %TRUE if the value was set
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

    constructor(config?: Results.ConstructorProperties) 
    constructor() 
    static new(): Results
    _init(config?: Results.ConstructorProperties): void
}

module Source {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Source

        role?: RoleEnum | null
        transactionId?: string | null
    }

}

interface Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    role: RoleEnum
    transactionId: string | null

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

    constructor(config?: Source.ConstructorProperties) 
    constructor() 
    static new(): Source
    _init(config?: Source.ConstructorProperties): void
}

module Task {

    // Constructor properties interface

    interface ConstructorProperties extends Client.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Task

        /**
         * %TRUE if package downgrades are allowed.
         */
        allowDowngrade?: boolean | null
        /**
         * %TRUE if package reinstallation shall be allowed during transaction.
         */
        allowReinstall?: boolean | null
        /**
         * %TRUE if we are just preparing the transaction for later.
         */
        onlyDownload?: boolean | null
        /**
         * %TRUE if only authenticated packages should be allowed in the transaction.
         */
        onlyTrusted?: boolean | null
        /**
         * %TRUE if we are simulating.
         */
        simulate?: boolean | null
    }

}

interface Task {

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

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Task

    parent: Client & GObject.Object
    priv: any

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
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the list of dependent packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Downloads packages
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    download_packages_sync(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns The #PkResults of the transaction.
     */
    generic_finish(res: Gio.AsyncResult): Results
    /**
     * Gets if we are allow packages to be downgraded.
     * @returns %TRUE if package downgrades are allowed
     */
    get_allow_downgrade(): boolean
    /**
     * Gets if we allow packages to be reinstalled.
     * @returns %TRUE if package reinstallation is allowed
     */
    get_allow_reinstall(): boolean
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets details about packages.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets details about packages.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_details_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the files in a package.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the files in a package.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_files_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets if we are just preparing the transaction for later.
     * @returns %TRUE if only downloading
     */
    get_only_download(): boolean
    /**
     * Gets if we allow only authenticated packages in the transactoin.
     * @returns %TRUE if we allow only authenticated packages
     */
    get_only_trusted(): boolean
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_packages_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_repo_list_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets if we are simulating.
     * @returns %TRUE if we are simulating
     */
    get_simulate(): boolean
    /**
     * Gets details about updates.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets details about updates.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    get_update_detail_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    install_files_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

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
    install_files_async(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    install_files_sync(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Merges in details about packages using resolve.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_packages_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of install_packages_async

    /**
     * Install a package of the newest and most correct version.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    install_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
     */
    install_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    remove_packages_async(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

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
    remove_packages_async(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
     */
    remove_packages_sync(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Recover the system from broken dependencies and aborted installations.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    repair_system_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

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
    repair_system_async(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Recover from broken dependencies of installed packages or incomplete
     * installations.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Enable or disable a specific repo.
     * @param repo_id The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    update_packages_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_packages_async

    /**
     * Update specific packages to the newest available versions.
     * @param transaction_flags a transaction type bitfield
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @param callback_ready the function to run on completion
     */
    update_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    upgrade_system_async(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void

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
    upgrade_system_async(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
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
     * @returns a #PkResults object, or %NULL for error
     */
    upgrade_system_sync(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /**
     * Mark a EULA as accepted by the user.
     * @param request request ID for EULA.
     * @returns %TRUE if @request is valid.
     */
    user_accepted(request: number): boolean
    /**
     * Mark a EULA as declined by the user.
     * @param request request ID for EULA.
     * @returns %TRUE if @request is valid.
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
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progress_callback the function to run when the progress changes
     * @returns a #PkResults object, or %NULL for error
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
    connect(sigName: "notify::details-with-deps-size", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details-with-deps-size", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details-with-deps-size", ...args: any[]): void
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

module TransactionList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    interface AddedSignalCallback {
        ($obj: TransactionList, tid: string | null): void
    }

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        ($obj: TransactionList, tid: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface TransactionList {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    parent: GObject.Object
    priv: TransactionListPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    /**
     * Gets the string lists of transaction IDs recognised as pending, running or finished by the daemon.
     * @returns the array of strings, free with g_strfreev()
     */
    get_ids(): string[]

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    vfunc_added(tid: string): void
    vfunc_removed(tid: string): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    connect(sigName: "added", callback: TransactionList.AddedSignalCallback): number
    connect_after(sigName: "added", callback: TransactionList.AddedSignalCallback): number
    emit(sigName: "added", tid: string | null, ...args: any[]): void
    connect(sigName: "removed", callback: TransactionList.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: TransactionList.RemovedSignalCallback): number
    emit(sigName: "removed", tid: string | null, ...args: any[]): void

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

    constructor(config?: TransactionList.ConstructorProperties) 
    constructor() 
    static new(): TransactionList
    _init(config?: TransactionList.ConstructorProperties): void
}

module TransactionPast {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

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

interface TransactionPast {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    cmdline: string | null
    data: string | null
    duration: number
    role: RoleEnum
    succeeded: boolean
    tid: string | null
    timespec: string | null
    uid: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    /**
     * Gets the past transaction cmdline value;
     * @returns The transaction data
     */
    get_cmdline(): string
    /**
     * Gets the past transaction data;
     * @returns The transaction data
     */
    get_data(): string

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets the past transaction date & time value;
     * @returns The transaction data, or %NULL if it's not available
     */
    get_datetime(): GLib.DateTime
    /**
     * Gets the past transaction duration;
     * @returns The transaction duration in ms
     */
    get_duration(): number
    /**
     * Gets the past transaction ID value;
     * @returns The transaction data
     */
    get_id(): string
    /**
     * Gets the past transaction role;
     * @returns The transaction data
     */
    get_role(): RoleEnum
    /**
     * Gets the past transaction succeeded value;
     * @returns The transaction data
     */
    get_succeeded(): boolean
    /**
     * Gets the past transaction timespec value;
     * @returns The transaction data
     */
    get_timespec(): string
    /**
     * Gets the past transaction timestamp
     * @returns The transaction data, or 0 if it's not available
     */
    get_timestamp(): number
    /**
     * Gets the past transaction uid;
     * @returns The transaction data
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

    constructor(config?: TransactionPast.ConstructorProperties) 
    constructor() 
    static new(): TransactionPast

    // Overloads of new

    static new(): Source
    _init(config?: TransactionPast.ConstructorProperties): void
}

module UpdateDetail {

    // Constructor properties interface

    interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

        bugzillaUrls?: string[] | null
        changelog?: string | null
        cveUrls?: string[] | null
        issued?: string | null
        obsoletes?: string[] | null
        packageId?: string | null
        restart?: RestartEnum | null
        state?: UpdateStateEnum | null
        updateText?: string | null
        updated?: string | null
        updates?: string[] | null
        vendorUrls?: string[] | null
    }

}

interface UpdateDetail {

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

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    /**
     * Gets the update detail bugzilla URLs.
     * @returns string values
     */
    get_bugzilla_urls(): string[]
    /**
     * Gets the update detail changelog.
     * @returns string values
     */
    get_changelog(): string
    /**
     * Gets the update detail CVE URLs.
     * @returns string values
     */
    get_cve_urls(): string[]
    /**
     * Gets the update detail issued string.
     * @returns string values
     */
    get_issued(): string
    /**
     * Gets the update detail obsoletes IDs.
     * @returns string values
     */
    get_obsoletes(): string[]
    /**
     * Gets the update detail package ID.
     * @returns string values
     */
    get_package_id(): string
    /**
     * Gets the update detail restart kind.
     * @returns enum values
     */
    get_restart(): RestartEnum
    /**
     * Gets the update detail state.
     * @returns enum value
     */
    get_state(): UpdateStateEnum
    /**
     * Gets the update detail update text.
     * @returns string values
     */
    get_update_text(): string
    /**
     * Gets the update detail updated string.
     * @returns string values
     */
    get_updated(): string
    /**
     * Gets the update detail updates IDs.
     * @returns string values
     */
    get_updates(): string[]
    /**
     * Gets the update detail vendor URLs.
     * @returns string values
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

    constructor(config?: UpdateDetail.ConstructorProperties) 
    constructor() 
    static new(): UpdateDetail

    // Overloads of new

    static new(): Source
    _init(config?: UpdateDetail.ConstructorProperties): void
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
    transaction_list_changed: (control: Control, transaction_ids: string | null) => void
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

export default PackageKitGlib;
// END