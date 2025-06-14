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

export namespace PackageKitGlib {
    /**
     * PackageKitGlib-1.0
     */

    /**
     * The authorization result
     */

    /**
     * The authorization result
     */
    export namespace AuthorizeEnum {
        export const $gtype: GObject.GType<AuthorizeEnum>;
    }

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
    class ClientError extends GLib.Error {
        static $gtype: GObject.GType<ClientError>;

        // Static fields

        /**
         * the transaction failed for an unknown reason
         */
        static FAILED: number;
        /**
         * the transaction failed authentication/authorization
         */
        static FAILED_AUTH: number;
        /**
         * the transaction id was not pre-allocated (internal error)
         */
        static NO_TID: number;
        /**
         * the transaction id has already been used (internal error)
         */
        static ALREADY_TID: number;
        /**
         * the role was not set (internal error)
         */
        static ROLE_UNKNOWN: number;
        /**
         * the PackageKit daemon failed to start
         */
        static CANNOT_START_DAEMON: number;
        /**
         * the package_id is invalid
         */
        static INVALID_INPUT: number;
        /**
         * the file is invalid
         */
        static INVALID_FILE: number;
        /**
         * the action is not supported
         */
        static NOT_SUPPORTED: number;
        /**
         * the simulation was declined by the user
         */
        static DECLINED_SIMULATION: number;
        /**
         * the user declined interaction on the task
         */
        static DECLINED_INTERACTION: number;
        static LAST: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * An error quark for #PkClientError.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Errors that can be thrown
     */
    class ControlError extends GLib.Error {
        static $gtype: GObject.GType<ControlError>;

        // Static fields

        /**
         * the transaction failed for an unknown reason
         */
        static FAILED: number;
        /**
         * the PackageKit daemon failed to start
         */
        static CANNOT_START_DAEMON: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * We are a GObject that sets errors
         */
        static quark(): GLib.Quark;
    }

    /**
     * The distro upgrade status
     */

    /**
     * The distro upgrade status
     */
    export namespace DistroUpgradeEnum {
        export const $gtype: GObject.GType<DistroUpgradeEnum>;
    }

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

    /**
     * The error type
     */
    export namespace ErrorEnum {
        export const $gtype: GObject.GType<ErrorEnum>;
    }

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

    /**
     * How the backend exited
     */
    export namespace ExitEnum {
        export const $gtype: GObject.GType<ExitEnum>;
    }

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

    /**
     * The filter types
     */
    export namespace FilterEnum {
        export const $gtype: GObject.GType<FilterEnum>;
    }

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

    /**
     * The group type
     */
    export namespace GroupEnum {
        export const $gtype: GObject.GType<GroupEnum>;
    }

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

    /**
     * The enumerated types used in Package() - these have to refer to a specific
     * package action, rather than a general state
     */
    export namespace InfoEnum {
        export const $gtype: GObject.GType<InfoEnum>;
    }

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

    /**
     * The media type
     */
    export namespace MediaTypeEnum {
        export const $gtype: GObject.GType<MediaTypeEnum>;
    }

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

    /**
     * Network type
     */
    export namespace NetworkEnum {
        export const $gtype: GObject.GType<NetworkEnum>;
    }

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

    /**
     * Actions that can be taken after an offline operation.
     */
    export namespace OfflineAction {
        export const $gtype: GObject.GType<OfflineAction>;
    }

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
    class OfflineError extends GLib.Error {
        static $gtype: GObject.GType<OfflineError>;

        // Static fields

        /**
         * No specific reason
         */
        static FAILED: number;
        /**
         * An invalid value was specified
         */
        static INVALID_VALUE: number;
        /**
         * No data was available
         */
        static NO_DATA: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * An error quark for #PkOfflineError.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Type of sort to perform.
     */

    /**
     * Type of sort to perform.
     */
    export namespace PackageSackSortType {
        export const $gtype: GObject.GType<PackageSackSortType>;
    }

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

    /**
     * Flag to show which progress field has been updated.
     */
    export namespace ProgressType {
        export const $gtype: GObject.GType<ProgressType>;
    }

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

    /**
     * What restart we need to after a transaction, ordered by severity
     */
    export namespace RestartEnum {
        export const $gtype: GObject.GType<RestartEnum>;
    }

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

    /**
     * What we were asked to do, this never changes for the lifetime of the
     * transaction.
     * Icons that have to represent the whole "aim" of the transaction will use
     * these constants
     */
    export namespace RoleEnum {
        export const $gtype: GObject.GType<RoleEnum>;
    }

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

    /**
     * The signature type type
     */
    export namespace SigTypeEnum {
        export const $gtype: GObject.GType<SigTypeEnum>;
    }

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
    export namespace StatusEnum {
        export const $gtype: GObject.GType<StatusEnum>;
    }

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

    /**
     * The transaction flags that alter how the transaction is handled
     */
    export namespace TransactionFlagEnum {
        export const $gtype: GObject.GType<TransactionFlagEnum>;
    }

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

    /**
     * What state the update is in
     */
    export namespace UpdateStateEnum {
        export const $gtype: GObject.GType<UpdateStateEnum>;
    }

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

    /**
     * The type of distribution upgrade to perform
     */
    export namespace UpgradeKindEnum {
        export const $gtype: GObject.GType<UpgradeKindEnum>;
    }

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
     * The DBUS interface used by the PackageKit service.
     */
    const DBUS_INTERFACE: string;
    /**
     * The DBUS interface for PackageKit offline update functionality
     */
    const DBUS_INTERFACE_OFFLINE: string;
    /**
     * The DBUS interface for PackageKit transactions.
     */
    const DBUS_INTERFACE_TRANSACTION: string;
    /**
     * The DBUS path to the PackageKit service.
     */
    const DBUS_PATH: string;
    /**
     * The DBUS name for the PackageKit system service.
     */
    const DBUS_SERVICE: string;
    /**
     * The default location for the desktop files
     */
    const DESKTOP_DEFAULT_APPLICATION_DIR: string;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const OFFLINE_DESTDIR: string;
    const OFFLINE_RESULTS_GROUP: string;
    const PACKAGE_IDS_DELIM: string;
    /**
     * Alias to get an arch field from the result of pk_package_id_split
     */
    const PACKAGE_ID_ARCH: number;
    /**
     * Alias to get a data field from the result of pk_package_id_split
     */
    const PACKAGE_ID_DATA: number;
    /**
     * Alias to get a name field from the result of pk_package_id_split
     */
    const PACKAGE_ID_NAME: number;
    /**
     * Alias to get a version field from the result of pk_package_id_split
     */
    const PACKAGE_ID_VERSION: number;
    const SYSTEM_PACKAGE_CACHE_FILENAME: string;
    const SYSTEM_PACKAGE_LIST_FILENAME: string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param authorize_type Text describing the enumerated type
     * @returns the enumerated constant value, e.g. %PK_AUTHORIZE_ENUM_YES
     */
    function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param authorize_type The enumerated type value
     * @returns the enumerated constant value, e.g. "yes"
     */
    function authorize_type_enum_to_string(authorize_type: AuthorizeEnum | null): string;
    /**
     * An error quark for #PkClientError.
     * @returns an error quark.
     */
    function client_error_quark(): GLib.Quark;
    /**
     * We are a GObject that sets errors
     * @returns Our personal error quark.
     */
    function control_error_quark(): GLib.Quark;
    /**
     * Add a log domain to the debug output.
     * @param log_domain a log domain
     */
    function debug_add_log_domain(log_domain: string): void;
    /**
     * Check if verbose debugging is enabled.
     * @returns %TRUE if we have debugging enabled
     */
    function debug_is_verbose(): boolean;
    /**
     * Set if verbose debugging is enabled.
     * @param verbose %TRUE if verbose debugging should be enabled.
     */
    function debug_set_verbose(verbose: boolean): void;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param upgrade Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_DISTRO_UPGRADE_ENUM_STABLE
     */
    function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param upgrade The enumerated type value
     * @returns the enumerated constant value, e.g. "stable"
     */
    function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum | null): string;
    /**
     * Search for a enum value in a table of constants.
     * @param table A #PkEnumMatch enum table of values
     * @param value the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @returns the string constant, e.g. "desktop-gnome"
     */
    function enum_find_string(table: EnumMatch, value: number): string;
    /**
     * Search for a string value in a table of constants.
     * @param table A #PkEnumMatch enum table of values
     * @param string the string constant to search for, e.g. "desktop-gnome"
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function enum_find_value(table: EnumMatch, string: string): number;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param code Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function error_enum_from_string(code: string): ErrorEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param code The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function error_enum_to_string(code: ErrorEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param exit Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function exit_enum_from_string(exit: string): ExitEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param exit The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function exit_enum_to_string(exit: ExitEnum | null): string;
    /**
     * Converts text representation to its enumerated type bitfield, or 0 for invalid
     * @param filters the enumerated constant value, e.g. "available;~gui"
     * @returns The enumerated type values
     */
    function filter_bitfield_from_string(filters: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param filters The enumerated type values
     * @returns the enumerated constant value, e.g. "available;~gui"
     */
    function filter_bitfield_to_string(filters: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param filter Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function filter_enum_from_string(filter: string): FilterEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param filter The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function filter_enum_to_string(filter: FilterEnum | null): string;
    /**
     * Get the distribution ID for the current host, typically "distro;version;arch"
     * @returns a distribution ID
     */
    function get_distro_id(): string;
    /**
     * Converts text representation to its enumerated type bitfield
     * @param groups the enumerated constant value, e.g. "available;~gui"
     * @returns The enumerated type values, or 0 for invalid
     */
    function group_bitfield_from_string(groups: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param groups The enumerated type values
     * @returns the enumerated constant value, e.g. "gnome;kde"
     */
    function group_bitfield_to_string(groups: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param group Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function group_enum_from_string(group: string): GroupEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param group The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function group_enum_to_string(group: GroupEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param info Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function info_enum_from_string(info: string): InfoEnum;
    /**
     * Converts a enumerated type to its localized description
     * @param info The enumerated type value
     * @returns the translated text
     */
    function info_enum_to_localised_past(info: InfoEnum | null): string;
    /**
     * Converts a enumerated type to its localized description
     * @param info The enumerated type value
     * @returns the translated text
     */
    function info_enum_to_localised_present(info: InfoEnum | null): string;
    /**
     * Converts a enumerated type to its text representation
     * @param info The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function info_enum_to_string(info: InfoEnum | null): string;
    /**
     * Convert a date into an ISO8601 data string.
     * @param date a #GDate to convert
     * @returns If valid then a new ISO8601 date, else %NULL
     */
    function iso8601_from_date(date: GLib.Date): string;
    /**
     * Get the current date / time as an ISO8601 string.
     * @returns The current iso8601 date and time
     */
    function iso8601_present(): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param media_type Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_MEDIA_TYPE_ENUM_CD
     */
    function media_type_enum_from_string(media_type: string): MediaTypeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param media_type The enumerated type value
     * @returns the enumerated constant value, e.g. "dvd"
     */
    function media_type_enum_to_string(media_type: MediaTypeEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param network Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function network_enum_from_string(network: string): NetworkEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param network The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function network_enum_to_string(network: NetworkEnum | null): string;
    /**
     * Converts the string to the enumerated value.
     * @param action a string representation of a #PkOfflineAction, e.g. "reboot"
     * @returns A #PkOfflineAction, or %PK_OFFLINE_ACTION_UNKNOWN for invalid
     */
    function offline_action_from_string(action: string): OfflineAction;
    /**
     * Converts the enumerated value to a string.
     * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
     * @returns string value, or %NULL for invalid
     */
    function offline_action_to_string(action: OfflineAction | null): string;
    function offline_auth_cancel(): boolean;
    function offline_auth_clear_results(): boolean;
    function offline_auth_invalidate(): boolean;
    function offline_auth_set_action(action: OfflineAction | null): boolean;
    function offline_auth_set_prepared_ids(package_ids: string): boolean;
    function offline_auth_set_prepared_upgrade(name: string, release_ver: string): boolean;
    function offline_auth_set_results(results: Results): boolean;
    function offline_auth_trigger(action: OfflineAction | null): boolean;
    function offline_auth_trigger_upgrade(action: OfflineAction | null): boolean;
    /**
     * Cancels the offline operation that has been scheduled. If there is no
     * scheduled offline operation then this method returns with success.
     * The function always allows user interaction. To change the behavior,
     * use pk_offline_cancel_with_flags().
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_cancel(cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Cancels the offline operation that has been scheduled. If there is no
     * scheduled offline operation then this method returns with success.
     * @param flags bit-or of #PkOfflineFlags
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_cancel_with_flags(flags: OfflineFlags | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Clears the last offline operation report, which may be success or failure.
     * If the report does not exist then this method returns success.
     * The function always allows user interaction. To change the behavior,
     * use pk_offline_clear_results_with_flags().
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_clear_results(cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Clears the last offline operation report, which may be success or failure.
     * If the report does not exist then this method returns success.
     * @param flags bit-or of #PkOfflineFlags
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_clear_results_with_flags(
        flags: OfflineFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    /**
     * An error quark for #PkOfflineError.
     * @returns an error quark.
     */
    function offline_error_quark(): GLib.Quark;
    /**
     * Gets the action that will be taken after the offline action has completed.
     *
     * An error is set if the the value %PK_OFFLINE_ACTION_UNKNOWN is returned.
     * @returns a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
     */
    function offline_get_action(): OfflineAction;
    /**
     * Gets a file monitor for the trigger.
     * @param cancellable A #GCancellable or %NULL
     * @returns A #GFileMonitor, or %NULL
     */
    function offline_get_action_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
    /**
     * Gets the package-ids in the prepared transaction.
     * @returns array of package-ids, or %NULL
     */
    function offline_get_prepared_ids(): string[];
    /**
     * Gets a file monitor for the prepared transaction.
     * @param cancellable A #GCancellable or %NULL
     * @returns A #GFileMonitor, or %NULL
     */
    function offline_get_prepared_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
    /**
     * Gets a package sack of the packages in the prepared transaction.
     * @returns A new #PkPackageSack, or %NULL
     */
    function offline_get_prepared_sack(): PackageSack;
    function offline_get_prepared_upgrade(name: string, release_ver: string): boolean;
    /**
     * Gets a file monitor for the prepared system upgrade transaction.
     * @param cancellable A #GCancellable or %NULL
     * @returns A #GFileMonitor, or %NULL
     */
    function offline_get_prepared_upgrade_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
    /**
     * Gets the name of the prepared system upgrade in the prepared transaction.
     * @returns the name, or %NULL if unset, free with g_free()
     */
    function offline_get_prepared_upgrade_name(): string;
    /**
     * Gets the version of the prepared system upgrade in the prepared transaction.
     * @returns the version, or %NULL if unset, free with g_free()
     */
    function offline_get_prepared_upgrade_version(): string;
    /**
     * Gets the last result of the offline transaction.
     * @returns A #PkResults, or %NULL
     */
    function offline_get_results(): Results;
    /**
     * Gets the modification time of the prepared transaction.
     * @returns a unix time, or 0 for error.
     */
    function offline_get_results_mtime(): number;
    /**
     * Triggers the offline update so that the next reboot will perform the
     * pending transaction.
     * The function always allows user interaction. To change the behavior,
     * use pk_offline_trigger_with_flags().
     * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_trigger(action: OfflineAction | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Triggers the offline system upgrade so that the next reboot will perform the
     * pending transaction.
     * The function always allows user interaction. To change the behavior,
     * use pk_offline_trigger_upgrade_with_flags().
     * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_trigger_upgrade(action: OfflineAction | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Triggers the offline system upgrade so that the next reboot will perform the
     * pending transaction.
     * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
     * @param flags bit-or of #PkOfflineFlags
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_trigger_upgrade_with_flags(
        action: OfflineAction | null,
        flags: OfflineFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    /**
     * Triggers the offline update so that the next reboot will perform the
     * pending transaction.
     * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
     * @param flags bit-or of #PkOfflineFlags
     * @param cancellable A #GCancellable or %NULL
     * @returns %TRUE for success, else %FALSE and @error set
     */
    function offline_trigger_with_flags(
        action: OfflineAction | null,
        flags: OfflineFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    function polkit_agent_close(): void;
    function polkit_agent_open(): number;
    /**
     * Form a composite string array of strings.
     * The data in the GPtrArray is copied.
     * @param array the GPtrArray of strings
     * @returns the string array, or %NULL if invalid
     */
    function ptr_array_to_strv(array: string[]): string[];
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param restart Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function restart_enum_from_string(restart: string): RestartEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param restart The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function restart_enum_to_string(restart: RestartEnum | null): string;
    /**
     * Converts text representation to its enumerated type bitfield
     * @param roles the enumerated constant value, e.g. "search-file;update-system"
     * @returns The enumerated type values, or 0 for invalid
     */
    function role_bitfield_from_string(roles: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param roles The enumerated type values
     * @returns the enumerated constant value, e.g. "install-file;update-system"
     */
    function role_bitfield_to_string(roles: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param role Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function role_enum_from_string(role: string): RoleEnum;
    /**
     * Converts a enumerated type to its localized description
     * @param role The enumerated type value
     * @returns the translated text
     */
    function role_enum_to_localised_present(role: RoleEnum | null): string;
    /**
     * Converts a enumerated type to its text representation
     * @param role The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function role_enum_to_string(role: RoleEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param sig_type Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function sig_type_enum_from_string(sig_type: string): SigTypeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param sig_type The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function sig_type_enum_to_string(sig_type: SigTypeEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param status Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function status_enum_from_string(status: string): StatusEnum;
    function status_enum_to_localised_text(status: StatusEnum | null): string;
    /**
     * Converts a enumerated type to its text representation
     * @param status The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     */
    function status_enum_to_string(status: StatusEnum | null): string;
    /**
     * Converts text representation to its enumerated type bitfield, or 0 for invalid
     * @param transaction_flags the enumerated constant value, e.g. "only-trusted;simulate"
     * @returns The enumerated type values
     */
    function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param transaction_flags The enumerated type values
     * @returns the enumerated constant value, e.g. "only-trusted;simulate"
     */
    function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param transaction_flag Text describing the enumerated type
     * @returns the enumerated constant value, e.g. %PK_TRANSACTION_FLAG_ENUM_SIMULATE
     */
    function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param transaction_flag The enumerated type value
     * @returns the enumerated constant value, e.g. "simulate"
     */
    function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param update_state Text describing the enumerated type
     * @returns the enumerated constant value, e.g. %PK_UPDATE_STATE_ENUM_STABLE
     */
    function update_state_enum_from_string(update_state: string): UpdateStateEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param update_state The enumerated type value
     * @returns the enumerated constant value, e.g. "testing"
     */
    function update_state_enum_to_string(update_state: UpdateStateEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param upgrade_kind Text describing the enumerated type
     * @returns the enumerated constant value, e.g. %PK_UPGRADE_KIND_ENUM_MINIMAL
     */
    function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param upgrade_kind The enumerated type value
     * @returns the enumerated constant value, e.g. "minimal"
     */
    function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum | null): string;
    interface PackageSackFilterFunc {
        (_package: Package): boolean;
    }
    interface ProgressCallback {
        (progress: Progress, type: ProgressType): void;
    }
    /**
     * Flags to be used for the method invocations.
     */

    /**
     * Flags to be used for the method invocations.
     */
    export namespace OfflineFlags {
        export const $gtype: GObject.GType<OfflineFlags>;
    }

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
    namespace Category {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            cat_id: string;
            catId: string;
            icon: string;
            name: string;
            parent_id: string;
            parentId: string;
            summary: string;
        }
    }

    class Category extends Source {
        static $gtype: GObject.GType<Category>;

        // Properties

        get cat_id(): string;
        set cat_id(val: string);
        get catId(): string;
        set catId(val: string);
        get icon(): string;
        set icon(val: string);
        get name(): string;
        set name(val: string);
        get parent_id(): string;
        set parent_id(val: string);
        get parentId(): string;
        set parentId(val: string);
        get summary(): string;
        set summary(val: string);

        // Constructors

        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Category;

        // Signals

        connect<K extends keyof Category.SignalSignatures>(signal: K, callback: Category.SignalSignatures[K]): number;
        connect_after<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: Category.SignalSignatures[K],
        ): number;
        emit<K extends keyof Category.SignalSignatures>(
            signal: K,
            ...args: Parameters<Category.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Gets the icon filename.
         * @returns the string value, or %NULL for unset.
         */
        get_icon(): string;
        /**
         * Gets the id specific to this category.
         * @returns the string value, or %NULL for unset.
         */
        get_id(): string;
        /**
         * Gets the name.
         * @returns the string value, or %NULL for unset.
         */
        get_name(): string;
        /**
         * Gets the parent category id.
         * @returns the string value, or %NULL for unset.
         */
        get_parent_id(): string;
        /**
         * Gets the summary.
         * @returns the string value, or %NULL for unset.
         */
        get_summary(): string;
        /**
         * Sets the icon filename.
         * @param icon the new value
         */
        set_icon(icon: string): void;
        /**
         * Sets the id specific to this category.
         * @param cat_id the new value
         */
        set_id(cat_id: string): void;
        /**
         * Sets the name.
         * @param name the new value
         */
        set_name(name: string): void;
        /**
         * Sets the parent category id.
         * @param parent_id the new value
         */
        set_parent_id(parent_id: string): void;
        /**
         * Sets the summary.
         * @param summary the new value
         */
        set_summary(summary: string): void;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: boolean;
            cache_age: number;
            cacheAge: number;
            details_with_deps_size: boolean;
            detailsWithDepsSize: boolean;
            idle: boolean;
            interactive: boolean;
            locale: string;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        get background(): boolean;
        set background(val: boolean);
        /**
         * The cache age in seconds, where %G_MAXUINT means cache
         * "never expires"
         */
        get cache_age(): number;
        set cache_age(val: number);
        /**
         * The cache age in seconds, where %G_MAXUINT means cache
         * "never expires"
         */
        get cacheAge(): number;
        set cacheAge(val: number);
        get details_with_deps_size(): boolean;
        set details_with_deps_size(val: boolean);
        get detailsWithDepsSize(): boolean;
        set detailsWithDepsSize(val: boolean);
        get idle(): boolean;
        get interactive(): boolean;
        set interactive(val: boolean);
        get locale(): string;
        set locale(val: string);

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: Client.SignalSignatures[K]): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: Client.SignalSignatures[K]): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: Parameters<Client.SignalSignatures[K]>): void;

        // Static methods

        static create_helper_argv_envp(argv: string, envp_out: string): boolean;

        // Virtual methods

        vfunc_changed(): void;

        // Methods

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
        accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * We may want to agree to a EULA dialog if one is presented.
         * @param eula_id the <literal>eula_id</literal> we are agreeing to
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        accept_eula_async(
            eula_id: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        adopt(
            transaction_id: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Adopt a transaction which allows the caller to monitor the state or cancel it.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        adopt_async(
            transaction_id: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        depends_on(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the packages that depend this one, i.e. child->parent.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive If we should search recursively for depends
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        depends_on_async(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        download_packages(
            package_ids: string[],
            directory: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Downloads package files to a specified location.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param directory the location where packages are to be downloaded
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        download_packages_async(
            package_ids: string[],
            directory: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns the #PkResults, or %NULL. Free with g_object_unref()
         */
        generic_finish(res: Gio.AsyncResult): Results;
        /**
         * Gets the background value.
         * @returns The background status.
         */
        get_background(): boolean;
        /**
         * Gets the maximum cache age value.
         * @returns The cache age in seconds
         */
        get_cache_age(): number;
        /**
         * Get a list of all categories supported.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * Get a list of all categories supported.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_categories_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_details(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get details of a package, so more information can be obtained for GUI
         * or command line tools.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_details_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_details_local(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get details of a package, so more information can be obtained for GUI
         * or command line tools.
         * @param files a null terminated array of filenames
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_details_local_async(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the client details-with-deps-size value.
         * @returns whether the pk_client_get_details_async() should include dependencies    download sizes for packages, which are not installed.
         */
        get_details_with_deps_size(): boolean;
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
        get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * This method should return a list of distribution upgrades that are available.
         * It should not return updates, only major upgrades.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_distro_upgrades_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_files(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the file list (i.e. a list of files installed) for the specified package.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_files_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_files_local(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get file list of a package, so more information can be obtained for GUI
         * or command line tools.
         * @param files a null terminated array of filenames
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_files_local_async(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets if the transaction client idle value.
         * @returns if this client is idle.
         */
        get_idle(): boolean;
        /**
         * Gets the client interactive value.
         * @returns if the transaction is due to run interactivly.
         */
        get_interactive(): boolean;
        /**
         * Gets the locale used for this transaction.
         * @returns The locale.
         */
        get_locale(): string;
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
        get_old_transactions(
            number: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the old transaction list, mainly used for the transaction viewer.
         * @param number the number of past transactions to return, or 0 for all
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_old_transactions_async(
            number: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_packages(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the list of packages from the backend
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_packages_async(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the progress of a transaction.
         *
         * Warning: this function is synchronous, and will block. Do not use it in GUI
         * applications.
         * @param transaction_id The transaction id
         * @param cancellable a #GCancellable or %NULL
         * @returns a #PkResults object, or %NULL for error
         */
        get_progress(transaction_id: string, cancellable?: Gio.Cancellable | null): Progress;
        /**
         * Find the current state of a transaction.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a #GCancellable or %NULL
         */
        get_progress_async(transaction_id: string, cancellable?: Gio.Cancellable | null): Promise<Progress>;
        /**
         * Find the current state of a transaction.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a #GCancellable or %NULL
         * @param callback_ready the function to run on completion
         */
        get_progress_async(
            transaction_id: string,
            cancellable: Gio.Cancellable | null,
            callback_ready: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Find the current state of a transaction.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a #GCancellable or %NULL
         * @param callback_ready the function to run on completion
         */
        get_progress_async(
            transaction_id: string,
            cancellable?: Gio.Cancellable | null,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Progress> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns the #PkProgress, or %NULL. Free with g_object_unref()
         */
        get_progress_finish(res: Gio.AsyncResult): Progress;
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
        get_repo_list(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the list of repositories installed on the system.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_repo_list_async(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_update_detail(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get details about the specific update, for instance any CVE urls and
         * severity information.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_update_detail_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_updates(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get a list of all the packages that can be updated for all repositories.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_updates_async(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        install_files(
            transaction_flags: Bitfield,
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Install a file locally, and get the deps from the repositories.
         * This is useful for double clicking on a .rpm or .deb file.
         * @param transaction_flags a transaction type bitfield
         * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_files_async(
            transaction_flags: Bitfield,
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        install_packages(
            transaction_flags: Bitfield,
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Install a package of the newest and most correct version.
         * @param transaction_flags a transaction type bitfield
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_packages_async(
            transaction_flags: Bitfield,
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        install_signature(
            type: SigTypeEnum | null,
            key_id: string,
            package_id: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Install a software repository signature of the newest and most correct version.
         * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
         * @param key_id a key ID such as "0df23df"
         * @param package_id a signature_id structure such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_signature_async(
            type: SigTypeEnum | null,
            key_id: string,
            package_id: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        refresh_cache(
            force: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        refresh_cache_async(
            force: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        remove_packages(
            transaction_flags: Bitfield,
            package_ids: string[],
            allow_deps: boolean,
            autoremove: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        remove_packages_async(
            transaction_flags: Bitfield,
            package_ids: string[],
            allow_deps: boolean,
            autoremove: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        repair_system(
            transaction_flags: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        repair_system_async(
            transaction_flags: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        repo_enable(
            repo_id: string,
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Enable or disable the repository.
         * @param repo_id a repo_id structure such as "livna-devel"
         * @param enabled if we should enable the repository
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        repo_enable_async(
            repo_id: string,
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        repo_remove(
            transaction_flags: Bitfield,
            repo_id: string,
            autoremove: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Removes a repo and optionally the packages installed from it.
         * @param transaction_flags transaction flags
         * @param repo_id a repo_id structure such as "livna-devel"
         * @param autoremove If packages should be auto-removed
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        repo_remove_async(
            transaction_flags: Bitfield,
            repo_id: string,
            autoremove: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        repo_set_data(
            repo_id: string,
            parameter: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        repo_set_data_async(
            repo_id: string,
            parameter: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        required_by(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the packages that require this one, i.e. parent->child.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive If we should search recursively for requires
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        required_by_async(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        resolve(
            filters: Bitfield,
            packages: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        resolve_async(
            filters: Bitfield,
            packages: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        search_details(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        search_details_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        search_files(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Search for packages that provide a specific file.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
         * @param values file to search for, for instance, "/sbin/service"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_files_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        search_groups(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Return all packages in a specific group.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
         * @param values a group enum to search for, for instance, "system-tools"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_groups_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        search_names(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Search all the locally installed files and remote repositories for a package
         * that matches a specific name.
         * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
         * @param values free text to search for, for instance, "power"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_names_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets the background value for the client. A background transaction
         * is usually scheduled at a lower priority and is usually given less
         * network and disk performance.
         * @param background if the transaction is a background transaction
         */
        set_background(background: boolean): void;
        /**
         * Sets the maximum cache age value for the client.
         * @param cache_age the cache age to set in seconds, where %G_MAXUINT means cache "never expires"
         */
        set_cache_age(cache_age: number): void;
        /**
         * Sets whether the pk_client_get_details_async() should include dependencies
         * download sizes for packages, which are not installed.
         * @param details_with_deps_size the value to set
         */
        set_details_with_deps_size(details_with_deps_size: boolean): void;
        /**
         * Sets the interactive value for the client. Interactive transactions
         * are usually allowed to ask the user questions.
         * @param interactive the value to set
         */
        set_interactive(interactive: boolean): void;
        /**
         * Sets the locale to be used for the client. This may affect returned
         * results.
         * @param locale the locale to set, e.g. "en_GB.UTF-8"
         */
        set_locale(locale: string): void;
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
        update_packages(
            transaction_flags: Bitfield,
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Update specific packages to the newest available versions.
         * @param transaction_flags a transaction type bitfield
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        update_packages_async(
            transaction_flags: Bitfield,
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        upgrade_system(
            transaction_flags: Bitfield,
            distro_id: string,
            upgrade_kind: UpgradeKindEnum | null,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        upgrade_system_async(
            transaction_flags: Bitfield,
            distro_id: string,
            upgrade_kind: UpgradeKindEnum | null,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        what_provides(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        what_provides_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    namespace ClientHelper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClientHelper extends GObject.Object {
        static $gtype: GObject.GType<ClientHelper>;

        // Constructors

        constructor(properties?: Partial<ClientHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientHelper;

        // Signals

        connect<K extends keyof ClientHelper.SignalSignatures>(
            signal: K,
            callback: ClientHelper.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ClientHelper.SignalSignatures>(
            signal: K,
            callback: ClientHelper.SignalSignatures[K],
        ): number;
        emit<K extends keyof ClientHelper.SignalSignatures>(
            signal: K,
            ...args: Parameters<ClientHelper.SignalSignatures[K]>
        ): void;

        // Methods

        is_active(): boolean;
        /**
         * Starts the helper process, by running the helper process and setting
         * up the socket for use.
         * @param socket_filename a socket filename that does not already exist
         * @param argv the executable, along with any arguments
         * @param envp the environment
         * @returns %TRUE for success
         */
        start(socket_filename: string, argv: string, envp: string): boolean;
        /**
         * Starts the helper process, by running the helper process and setting
         * up the socket for use.
         * @param socket the (bound and listening) #GSocket instance to use
         * @param argv the executable, along with any arguments
         * @param envp the environment
         * @returns %TRUE for success
         */
        start_with_socket(socket: Gio.Socket, argv: string, envp: string): boolean;
        /**
         * Stops the helper process, by killing the helper process and deleting
         * the socket.
         * @returns %TRUE for success
         */
        stop(): boolean;
    }

    namespace Control {
        // Signal callback interfaces

        interface RepoListChanged {
            (_source: Control): void;
        }

        interface RestartSchedule {
            (_source: Control): void;
        }

        interface TransactionListChanged {
            (_source: Control, transaction_ids: string[]): void;
        }

        interface UpdatesChanged {
            (_source: Control): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'repo-list-changed': RepoListChanged;
            'restart-schedule': RestartSchedule;
            'transaction-list-changed': TransactionListChanged;
            'updates-changed': UpdatesChanged;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend_author: string;
            backendAuthor: string;
            backend_description: string;
            backendDescription: string;
            backend_name: string;
            backendName: string;
            connected: boolean;
            distro_id: string;
            distroId: string;
            filters: number;
            groups: number;
            locked: boolean;
            mime_types: string[];
            mimeTypes: string[];
            network_state: NetworkEnum;
            networkState: NetworkEnum;
            provides: number;
            roles: number;
            version_major: number;
            versionMajor: number;
            version_micro: number;
            versionMicro: number;
            version_minor: number;
            versionMinor: number;
        }
    }

    class Control extends GObject.Object {
        static $gtype: GObject.GType<Control>;

        // Properties

        get backend_author(): string;
        set backend_author(val: string);
        get backendAuthor(): string;
        set backendAuthor(val: string);
        get backend_description(): string;
        set backend_description(val: string);
        get backendDescription(): string;
        set backendDescription(val: string);
        get backend_name(): string;
        set backend_name(val: string);
        get backendName(): string;
        set backendName(val: string);
        get connected(): boolean;
        set connected(val: boolean);
        get distro_id(): string;
        set distro_id(val: string);
        get distroId(): string;
        set distroId(val: string);
        get filters(): number;
        set filters(val: number);
        get groups(): number;
        set groups(val: number);
        get locked(): boolean;
        set locked(val: boolean);
        get mime_types(): string[];
        set mime_types(val: string[]);
        get mimeTypes(): string[];
        set mimeTypes(val: string[]);
        get network_state(): NetworkEnum;
        set network_state(val: NetworkEnum);
        get networkState(): NetworkEnum;
        set networkState(val: NetworkEnum);
        get provides(): number;
        set provides(val: number);
        get roles(): number;
        set roles(val: number);
        get version_major(): number;
        get versionMajor(): number;
        get version_micro(): number;
        get versionMicro(): number;
        get version_minor(): number;
        get versionMinor(): number;

        // Constructors

        constructor(properties?: Partial<Control.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Control;

        // Signals

        connect<K extends keyof Control.SignalSignatures>(signal: K, callback: Control.SignalSignatures[K]): number;
        connect_after<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: Control.SignalSignatures[K],
        ): number;
        emit<K extends keyof Control.SignalSignatures>(
            signal: K,
            ...args: Parameters<Control.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_connection_changed(connected: boolean): void;
        vfunc_locked(is_locked: boolean): void;
        vfunc_network_state_changed(): void;
        vfunc_repo_list_changed(): void;
        vfunc_restart_schedule(): void;
        vfunc_transaction_list_changed(transaction_ids: string): void;
        vfunc_updates_changed(): void;

        // Methods

        /**
         * We may want to know before we run a method if we are going to be denied,
         * accepted or challenged for authentication.
         * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
         * @param cancellable a #GCancellable or %NULL
         */
        can_authorize_async(action_id: string, cancellable?: Gio.Cancellable | null): Promise<AuthorizeEnum>;
        /**
         * We may want to know before we run a method if we are going to be denied,
         * accepted or challenged for authentication.
         * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        can_authorize_async(
            action_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * We may want to know before we run a method if we are going to be denied,
         * accepted or challenged for authentication.
         * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        can_authorize_async(
            action_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<AuthorizeEnum> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns the #PkAuthorizeEnum or %PK_AUTHORIZE_ENUM_UNKNOWN if the method failed
         */
        can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum;
        /**
         * Gets the debugging state from the daemon.
         * @param cancellable a #GCancellable or %NULL
         */
        get_daemon_state_async(cancellable?: Gio.Cancellable | null): Promise<string>;
        /**
         * Gets the debugging state from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_daemon_state_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the debugging state from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_daemon_state_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns the ID, or %NULL if unset, free with g_free()
         */
        get_daemon_state_finish(res: Gio.AsyncResult): string;
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if the properties were set correctly
         */
        get_properties(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets global properties from the daemon.
         * @param cancellable a #GCancellable or %NULL
         */
        get_properties_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Gets global properties from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_properties_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets global properties from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_properties_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns %TRUE if we set the proxy successfully
         */
        get_properties_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets a transacton ID from the daemon.
         * @param cancellable a #GCancellable or %NULL
         */
        get_tid_async(cancellable?: Gio.Cancellable | null): Promise<string>;
        /**
         * Gets a transacton ID from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_tid_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets a transacton ID from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_tid_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns the ID, or %NULL if unset, free with g_free()
         */
        get_tid_finish(res: Gio.AsyncResult): string;
        /**
         * We may want to know how long it has been since we refreshed the cache or
         * retrieved the update list.
         * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
         * @param cancellable a #GCancellable or %NULL
         */
        get_time_since_action_async(role: RoleEnum | null, cancellable?: Gio.Cancellable | null): Promise<number>;
        /**
         * We may want to know how long it has been since we refreshed the cache or
         * retrieved the update list.
         * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_time_since_action_async(
            role: RoleEnum | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * We may want to know how long it has been since we refreshed the cache or
         * retrieved the update list.
         * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_time_since_action_async(
            role: RoleEnum | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<number> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns %TRUE if the daemon serviced the request
         */
        get_time_since_action_finish(res: Gio.AsyncResult): number;
        /**
         * Gets the transaction list in progress.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @returns The list of transaction id's, or %NULL, free with g_strfreev()
         */
        get_transaction_list(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Gets the transactions currently running in the daemon.
         * @param cancellable a #GCancellable or %NULL
         */
        get_transaction_list_async(cancellable?: Gio.Cancellable | null): Promise<string[]>;
        /**
         * Gets the transactions currently running in the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_transaction_list_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the transactions currently running in the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_transaction_list_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string[]> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns A GStrv list of transaction ID's, free with g_strfreev()
         */
        get_transaction_list_finish(res: Gio.AsyncResult): string[];
        /**
         * Sets the network proxy to use in the daemon.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param proxy_http the HTTP proxy server
         * @param proxy_ftp the FTP proxy server
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if the proxy was set correctly NOTE: This is just provided for backwards compatibility. Clients should really be using pk_control_set_proxy2().
         */
        set_proxy(proxy_http: string, proxy_ftp: string, cancellable?: Gio.Cancellable | null): boolean;
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
        set_proxy2(
            proxy_http: string,
            proxy_https: string,
            proxy_ftp: string,
            proxy_socks: string,
            no_proxy: string,
            pac: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Set a proxy on the PK daemon
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080", or %NULL
         * @param proxy_https a HTTPS proxy string such as "username:password@server.lan:8080", or %NULL
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080", or %NULL
         * @param proxy_socks a SOCKS proxy string such as "server.lan:8080", or %NULL
         * @param no_proxy a list of download IPs that shouldn't go through the proxy, or %NULL
         * @param pac a PAC string, or %NULL
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        set_proxy2_async(
            proxy_http: string,
            proxy_https: string,
            proxy_ftp: string,
            proxy_socks: string,
            no_proxy: string,
            pac: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Set a proxy on the PK daemon
         *
         * NOTE: This is just provided for backwards compatibility.
         * Clients should really be using pk_control_set_proxy2_async().
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080"
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
         * @param cancellable a #GCancellable or %NULL
         */
        set_proxy_async(proxy_http: string, proxy_ftp: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Set a proxy on the PK daemon
         *
         * NOTE: This is just provided for backwards compatibility.
         * Clients should really be using pk_control_set_proxy2_async().
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080"
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        set_proxy_async(
            proxy_http: string,
            proxy_ftp: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Set a proxy on the PK daemon
         *
         * NOTE: This is just provided for backwards compatibility.
         * Clients should really be using pk_control_set_proxy2_async().
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080"
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        set_proxy_async(
            proxy_http: string,
            proxy_ftp: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns %TRUE if we set the proxy successfully
         */
        set_proxy_finish(res: Gio.AsyncResult): boolean;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if the suggestion was sent
         */
        suggest_daemon_quit(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * @param cancellable a #GCancellable or %NULL
         */
        suggest_daemon_quit_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        suggest_daemon_quit_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        suggest_daemon_quit_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns %TRUE if the suggestion was sent
         */
        suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean;
    }

    namespace Desktop {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Desktop extends GObject.Object {
        static $gtype: GObject.GType<Desktop>;

        // Constructors

        constructor(properties?: Partial<Desktop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Desktop;

        // Signals

        connect<K extends keyof Desktop.SignalSignatures>(signal: K, callback: Desktop.SignalSignatures[K]): number;
        connect_after<K extends keyof Desktop.SignalSignatures>(
            signal: K,
            callback: Desktop.SignalSignatures[K],
        ): number;
        emit<K extends keyof Desktop.SignalSignatures>(
            signal: K,
            ...args: Parameters<Desktop.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Return all desktop files owned by a package, regardless if they are shown
         * in the main menu or not.
         * @param _package the package name, e.g. "gnome-power-manager"
         * @returns string array of results, free with g_ptr_array_unref() NOTE: This method is unused and will be removed next time the library soname changes!
         */
        get_files_for_package(_package: string): string[];
        /**
         * Returns the package name that owns the desktop file. Fast.
         * @param filename a fully qualified filename
         * @returns package name, or %NULL NOTE: This method is unused and will be removed next time the library soname changes!
         */
        get_package_for_file(filename: string): string;
        /**
         * Return all desktop files owned by a package that would be shown in a menu,
         * i.e are an application
         * @param _package the package name, e.g. "gnome-power-manager"
         * @returns string array of results, free with g_ptr_array_unref() NOTE: This method is unused and will be removed next time the library soname changes!
         */
        get_shown_for_package(_package: string): string[];
        /**
         * This method is unused and will be removed next time the library
         * soname changes!
         * @returns %TRUE if opened correctly
         */
        open_database(): boolean;
    }

    namespace Details {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            description: string;
            download_size: number;
            downloadSize: number;
            group: GroupEnum;
            license: string;
            package_id: string;
            packageId: string;
            size: number;
            summary: string;
            url: string;
        }
    }

    class Details extends Source {
        static $gtype: GObject.GType<Details>;

        // Properties

        get description(): string;
        set description(val: string);
        get download_size(): number;
        set download_size(val: number);
        get downloadSize(): number;
        set downloadSize(val: number);
        get group(): GroupEnum;
        set group(val: GroupEnum);
        get license(): string;
        set license(val: string);
        get package_id(): string;
        set package_id(val: string);
        get packageId(): string;
        set packageId(val: string);
        get size(): number;
        set size(val: number);
        get summary(): string;
        set summary(val: string);
        get url(): string;
        set url(val: string);

        // Constructors

        constructor(properties?: Partial<Details.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Details;

        // Signals

        connect<K extends keyof Details.SignalSignatures>(signal: K, callback: Details.SignalSignatures[K]): number;
        connect_after<K extends keyof Details.SignalSignatures>(
            signal: K,
            callback: Details.SignalSignatures[K],
        ): number;
        emit<K extends keyof Details.SignalSignatures>(
            signal: K,
            ...args: Parameters<Details.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Gets the description for the details object.
         * @returns string value
         */
        get_description(): string;
        /**
         * Gets the package download size.
         * @returns the package download size, 0 if already downloaded and G_MAXUINT64 when unknown
         */
        get_download_size(): number;
        /**
         * Gets the group for the details object.
         * @returns string value
         */
        get_group(): GroupEnum;
        /**
         * Gets the license for the details object.
         * @returns string value
         */
        get_license(): string;
        /**
         * Gets the PackageId for the details object.
         * @returns string value
         */
        get_package_id(): string;
        /**
         * Gets the size for the details object: for installed packages it will return
         * the installed size, for the rest the package size.
         * @returns string value
         */
        get_size(): number;
        /**
         * Gets the summary for the details object.
         * @returns string value
         */
        get_summary(): string;
        /**
         * Gets the url for the details object.
         * @returns string value
         */
        get_url(): string;
    }

    namespace DistroUpgrade {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            name: string;
            state: DistroUpgradeEnum;
            summary: string;
        }
    }

    class DistroUpgrade extends Source {
        static $gtype: GObject.GType<DistroUpgrade>;

        // Properties

        get name(): string;
        set name(val: string);
        get state(): DistroUpgradeEnum;
        set state(val: DistroUpgradeEnum);
        get summary(): string;
        set summary(val: string);

        // Constructors

        constructor(properties?: Partial<DistroUpgrade.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DistroUpgrade;

        // Signals

        connect<K extends keyof DistroUpgrade.SignalSignatures>(
            signal: K,
            callback: DistroUpgrade.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DistroUpgrade.SignalSignatures>(
            signal: K,
            callback: DistroUpgrade.SignalSignatures[K],
        ): number;
        emit<K extends keyof DistroUpgrade.SignalSignatures>(
            signal: K,
            ...args: Parameters<DistroUpgrade.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Gets the distribution identifier.
         * You use this value to call UpgradeSystem.
         * @returns the distro-id, e.g. "fedora-14"
         */
        get_id(): string;
        /**
         * Gets the status of the distribution upgrade.
         * @returns the printable name, e.g. %PK_DISTRO_UPGRADE_ENUM_UNSTABLE
         */
        get_state(): DistroUpgradeEnum;
        /**
         * Gets the description of the distribution upgrade.
         * @returns the printable name, e.g. "Fedora 14"
         */
        get_summary(): string;
    }

    namespace Error {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            code: ErrorEnum;
            details: string;
        }
    }

    class Error extends Source {
        static $gtype: GObject.GType<Error>;

        // Properties

        get code(): ErrorEnum;
        set code(val: ErrorEnum);
        get details(): string;
        set details(val: string);

        // Constructors

        constructor(properties?: Partial<Error.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Error;

        // Signals

        connect<K extends keyof Error.SignalSignatures>(signal: K, callback: Error.SignalSignatures[K]): number;
        connect_after<K extends keyof Error.SignalSignatures>(signal: K, callback: Error.SignalSignatures[K]): number;
        emit<K extends keyof Error.SignalSignatures>(signal: K, ...args: Parameters<Error.SignalSignatures[K]>): void;

        // Methods

        /**
         * Get the error code for this error.
         * @returns a #PkErrorEnum
         */
        get_code(): ErrorEnum;
        /**
         * Get details for this error.
         * @returns an string description
         */
        get_details(): string;
    }

    namespace EulaRequired {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            eula_id: string;
            eulaId: string;
            license_agreement: string;
            licenseAgreement: string;
            package_id: string;
            packageId: string;
            vendor_name: string;
            vendorName: string;
        }
    }

    class EulaRequired extends Source {
        static $gtype: GObject.GType<EulaRequired>;

        // Properties

        /**
         * ID for this EULA.
         */
        get eula_id(): string;
        set eula_id(val: string);
        /**
         * ID for this EULA.
         */
        get eulaId(): string;
        set eulaId(val: string);
        /**
         * The text of the license agreement.
         */
        get license_agreement(): string;
        set license_agreement(val: string);
        /**
         * The text of the license agreement.
         */
        get licenseAgreement(): string;
        set licenseAgreement(val: string);
        /**
         * PackageID this EULA is for.
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * PackageID this EULA is for.
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * Vendor this EULA is from.
         */
        get vendor_name(): string;
        set vendor_name(val: string);
        /**
         * Vendor this EULA is from.
         */
        get vendorName(): string;
        set vendorName(val: string);

        // Constructors

        constructor(properties?: Partial<EulaRequired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EulaRequired;

        // Signals

        connect<K extends keyof EulaRequired.SignalSignatures>(
            signal: K,
            callback: EulaRequired.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof EulaRequired.SignalSignatures>(
            signal: K,
            callback: EulaRequired.SignalSignatures[K],
        ): number;
        emit<K extends keyof EulaRequired.SignalSignatures>(
            signal: K,
            ...args: Parameters<EulaRequired.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Get the ID for this EULA
         * @returns an ID
         */
        get_eula_id(): string;
        /**
         * Get the text of the license agreement.
         * @returns license agreement text
         */
        get_license_agreement(): string;
        /**
         * Get the PackageID this EULA is for
         * @returns a PackageID
         */
        get_package_id(): string;
        /**
         * Get the vendor this EULA is from.
         * @returns license vendor name
         */
        get_vendor_name(): string;
    }

    namespace Files {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            files: string[];
            package_id: string;
            packageId: string;
        }
    }

    class Files extends Source {
        static $gtype: GObject.GType<Files>;

        // Properties

        get files(): string[];
        set files(val: string[]);
        get package_id(): string;
        set package_id(val: string);
        get packageId(): string;
        set packageId(val: string);

        // Constructors

        constructor(properties?: Partial<Files.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Files;

        // Signals

        connect<K extends keyof Files.SignalSignatures>(signal: K, callback: Files.SignalSignatures[K]): number;
        connect_after<K extends keyof Files.SignalSignatures>(signal: K, callback: Files.SignalSignatures[K]): number;
        emit<K extends keyof Files.SignalSignatures>(signal: K, ...args: Parameters<Files.SignalSignatures[K]>): void;

        // Methods

        /**
         * Gets the file list
         * @returns Gets the file list for the files object
         */
        get_files(): string[];
        /**
         * Gets the package-id
         * @returns Gets the package_id for the files object
         */
        get_package_id(): string;
    }

    namespace ItemProgress {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            package_id: string;
            packageId: string;
            percentage: number;
            status: number;
        }
    }

    class ItemProgress extends Source {
        static $gtype: GObject.GType<ItemProgress>;

        // Properties

        get package_id(): string;
        set package_id(val: string);
        get packageId(): string;
        set packageId(val: string);
        get percentage(): number;
        set percentage(val: number);
        get status(): number;
        set status(val: number);

        // Constructors

        constructor(properties?: Partial<ItemProgress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ItemProgress;

        // Signals

        connect<K extends keyof ItemProgress.SignalSignatures>(
            signal: K,
            callback: ItemProgress.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ItemProgress.SignalSignatures>(
            signal: K,
            callback: ItemProgress.SignalSignatures[K],
        ): number;
        emit<K extends keyof ItemProgress.SignalSignatures>(
            signal: K,
            ...args: Parameters<ItemProgress.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Get the package ID this item is working on.
         * @returns a package ID
         */
        get_package_id(): string;
        /**
         * Get the percentage complete of this item.
         * @returns a progress percentage (0-100)
         */
        get_percentage(): number;
        /**
         * Get the status of this item.
         * @returns a #PkStatusEnum
         */
        get_status(): StatusEnum;
    }

    namespace MediaChangeRequired {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            media_id: string;
            mediaId: string;
            media_text: string;
            mediaText: string;
            media_type: MediaTypeEnum;
            mediaType: MediaTypeEnum;
        }
    }

    class MediaChangeRequired extends Source {
        static $gtype: GObject.GType<MediaChangeRequired>;

        // Properties

        get media_id(): string;
        set media_id(val: string);
        get mediaId(): string;
        set mediaId(val: string);
        get media_text(): string;
        set media_text(val: string);
        get mediaText(): string;
        set mediaText(val: string);
        get media_type(): MediaTypeEnum;
        set media_type(val: MediaTypeEnum);
        get mediaType(): MediaTypeEnum;
        set mediaType(val: MediaTypeEnum);

        // Constructors

        constructor(properties?: Partial<MediaChangeRequired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaChangeRequired;

        // Signals

        connect<K extends keyof MediaChangeRequired.SignalSignatures>(
            signal: K,
            callback: MediaChangeRequired.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MediaChangeRequired.SignalSignatures>(
            signal: K,
            callback: MediaChangeRequired.SignalSignatures[K],
        ): number;
        emit<K extends keyof MediaChangeRequired.SignalSignatures>(
            signal: K,
            ...args: Parameters<MediaChangeRequired.SignalSignatures[K]>
        ): void;
    }

    namespace Package {
        // Signal callback interfaces

        interface Changed {
            (_source: Package): void;
        }

        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            changed: Changed;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            description: string;
            group: GroupEnum;
            info: InfoEnum;
            license: string;
            package_id: string;
            packageId: string;
            size: number;
            summary: string;
            update_bugzilla_urls: string[];
            updateBugzillaUrls: string[];
            update_changelog: string;
            updateChangelog: string;
            update_cve_urls: string[];
            updateCveUrls: string[];
            update_issued: string;
            updateIssued: string;
            update_obsoletes: string;
            updateObsoletes: string;
            update_restart: RestartEnum;
            updateRestart: RestartEnum;
            update_severity: InfoEnum;
            updateSeverity: InfoEnum;
            update_state: UpdateStateEnum;
            updateState: UpdateStateEnum;
            update_text: string;
            updateText: string;
            update_updated: string;
            updateUpdated: string;
            update_updates: string;
            updateUpdates: string;
            update_vendor_urls: string[];
            updateVendorUrls: string[];
            url: string;
        }
    }

    class Package extends Source {
        static $gtype: GObject.GType<Package>;

        // Properties

        get description(): string;
        set description(val: string);
        get group(): GroupEnum;
        set group(val: GroupEnum);
        get info(): InfoEnum;
        set info(val: InfoEnum);
        get license(): string;
        set license(val: string);
        get package_id(): string;
        get packageId(): string;
        get size(): number;
        set size(val: number);
        get summary(): string;
        set summary(val: string);
        get update_bugzilla_urls(): string[];
        set update_bugzilla_urls(val: string[]);
        get updateBugzillaUrls(): string[];
        set updateBugzillaUrls(val: string[]);
        get update_changelog(): string;
        set update_changelog(val: string);
        get updateChangelog(): string;
        set updateChangelog(val: string);
        get update_cve_urls(): string[];
        set update_cve_urls(val: string[]);
        get updateCveUrls(): string[];
        set updateCveUrls(val: string[]);
        get update_issued(): string;
        set update_issued(val: string);
        get updateIssued(): string;
        set updateIssued(val: string);
        get update_obsoletes(): string;
        set update_obsoletes(val: string);
        get updateObsoletes(): string;
        set updateObsoletes(val: string);
        get update_restart(): RestartEnum;
        set update_restart(val: RestartEnum);
        get updateRestart(): RestartEnum;
        set updateRestart(val: RestartEnum);
        /**
         * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
         * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
         */
        get update_severity(): InfoEnum;
        set update_severity(val: InfoEnum);
        /**
         * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
         * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
         */
        get updateSeverity(): InfoEnum;
        set updateSeverity(val: InfoEnum);
        get update_state(): UpdateStateEnum;
        set update_state(val: UpdateStateEnum);
        get updateState(): UpdateStateEnum;
        set updateState(val: UpdateStateEnum);
        get update_text(): string;
        set update_text(val: string);
        get updateText(): string;
        set updateText(val: string);
        get update_updated(): string;
        set update_updated(val: string);
        get updateUpdated(): string;
        set updateUpdated(val: string);
        get update_updates(): string;
        set update_updates(val: string);
        get updateUpdates(): string;
        set updateUpdates(val: string);
        get update_vendor_urls(): string[];
        set update_vendor_urls(val: string[]);
        get updateVendorUrls(): string[];
        set updateVendorUrls(val: string[]);
        get url(): string;
        set url(val: string);

        // Constructors

        constructor(properties?: Partial<Package.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Package;

        // Signals

        connect<K extends keyof Package.SignalSignatures>(signal: K, callback: Package.SignalSignatures[K]): number;
        connect_after<K extends keyof Package.SignalSignatures>(
            signal: K,
            callback: Package.SignalSignatures[K],
        ): number;
        emit<K extends keyof Package.SignalSignatures>(
            signal: K,
            ...args: Parameters<Package.SignalSignatures[K]>
        ): void;

        // Static methods

        /**
         * Generate a PackageID.
         * @param name the package name
         * @param version the package version
         * @param arch the package architecture
         * @param data the package extra data
         */
        static id_build(name: string, version: string, arch: string, data: string): string;
        /**
         * Check if a Packageid is well formed.
         * @param package_id the PackageID to check
         */
        static id_check(package_id: string): boolean;
        /**
         * Only compare the name, version, and arch, where the architecture will fuzzy
         * match with i*86.
         * @param package_id1 the first PackageID
         * @param package_id2 the second PackageID
         */
        static id_equal_fuzzy_arch(package_id1: string, package_id2: string): boolean;
        /**
         * Splits a PackageID into the correct number of parts, checking the correct
         * number of delimiters are present.
         * @param package_id the ; delimited PackageID to split
         */
        static id_split(package_id: string): string[];
        /**
         * Formats the PackageID to be printable to the user.
         * @param package_id the PackageID
         */
        static id_to_printable(package_id: string): string;
        /**
         * Adds a package_id to an existing list.
         * @param package_ids a string array of package_id's
         * @param package_id a single package_id
         */
        static ids_add_id(package_ids: string, package_id: string): string[];
        /**
         * Adds a package_id to an existing list.
         * @param package_ids a string array of package_id's
         * @param package_ids_new a string array of package_id's
         */
        static ids_add_ids(package_ids: string, package_ids_new: string): string[];
        /**
         * Check the string array of package_id's for validity
         * @param package_ids a string array of package_id's
         */
        static ids_check(package_ids: string): boolean;
        /**
         * Form a composite string array of package_id's from
         * a single package_id
         * @param package_id A single package_id
         */
        static ids_from_id(package_id: string): string[];
        /**
         * Form a composite string array of package_id's from
         * a delimited string
         * @param package_id A single package_id
         */
        static ids_from_string(package_id: string): string[];
        /**
         * Finds out if a package ID is present in the list.
         * @param package_ids a string array of package_id's
         * @param package_id a single package_id
         */
        static ids_present_id(package_ids: string, package_id: string): boolean;
        /**
         * Removes a package ID from the the list.
         * @param package_ids a string array of package_id's
         * @param package_id a single package_id
         */
        static ids_remove_id(package_ids: string, package_id: string): string[];
        /**
         * Cats the string array of package_id's into one delimited string
         * @param package_ids a string array of package_id's
         */
        static ids_to_string(package_ids: string): string;

        // Virtual methods

        vfunc_changed(): void;

        // Methods

        /**
         * Do the #PkPackage's have the same ID.
         * @param package2 a valid #PkPackage instance
         * @returns %TRUE if the packages have the same package_id, info and summary.
         */
        equal(package2: Package): boolean;
        /**
         * Do the #PkPackage's have the same ID.
         * @param package2 a valid #PkPackage instance
         * @returns %TRUE if the packages have the same package_id.
         */
        equal_id(package2: Package): boolean;
        /**
         * Gets the package arch.
         * @returns the arch, or %NULL if unset
         */
        get_arch(): string;
        /**
         * Gets the package data, which is usually the repository ID that contains the
         * package. Special ID's include "installed" for installed packages, and "local"
         * for local packages that exist on disk but not in a repository.
         * @returns the data, or %NULL if unset
         */
        get_data(): string;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Gets the package object ID
         * @returns the ID, or %NULL if unset
         */
        get_id(): string;
        /**
         * Gets the package object ID
         * @returns the #PkInfoEnum
         */
        get_info(): InfoEnum;
        /**
         * Gets the package name.
         * @returns the name, or %NULL if unset
         */
        get_name(): string;
        /**
         * Gets the package object ID
         * @returns the summary, or %NULL if unset
         */
        get_summary(): string;
        /**
         * Returns the `package` update severity. Can be one of %PK_INFO_ENUM_UNKNOWN,
         * %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL, %PK_INFO_ENUM_IMPORTANT or
         * %PK_INFO_ENUM_CRITICAL.
         * @returns the @package update severity, if known.
         */
        get_update_severity(): InfoEnum;
        /**
         * Gets the package version.
         * @returns the version, or %NULL if unset
         */
        get_version(): string;
        /**
         * Parses the data to populate the #PkPackage.
         * @param data the data describing the package
         * @returns %TRUE if the data was parsed correcty
         */
        parse(data: string): boolean;
        /**
         * Prints details about the package to standard out.
         */
        print(): void;
        /**
         * Sets the package object to have the given ID
         * @param package_id the valid package_id
         * @returns %TRUE if the package_id was set
         */
        set_id(package_id: string): boolean;
        /**
         * Sets the package info enum.
         * @param info the #PkInfoEnum
         */
        set_info(info: InfoEnum | null): void;
        /**
         * Sets the package summary.
         * @param summary the package summary
         */
        set_summary(summary: string): void;
        /**
         * Set an update severity for the `package`. The `update_severity` can be
         * one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
         * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
         * @param update_severity a #PkInfoEnum
         */
        set_update_severity(update_severity: InfoEnum | null): void;
    }

    namespace PackageSack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PackageSack extends GObject.Object {
        static $gtype: GObject.GType<PackageSack>;

        // Constructors

        constructor(properties?: Partial<PackageSack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PackageSack;

        // Signals

        connect<K extends keyof PackageSack.SignalSignatures>(
            signal: K,
            callback: PackageSack.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof PackageSack.SignalSignatures>(
            signal: K,
            callback: PackageSack.SignalSignatures[K],
        ): number;
        emit<K extends keyof PackageSack.SignalSignatures>(
            signal: K,
            ...args: Parameters<PackageSack.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_changed(): void;

        // Methods

        /**
         * Adds a package to the sack.
         * @param _package a valid #PkPackage instance
         * @returns %TRUE if the package was added to the sack
         */
        add_package(_package: Package): boolean;
        /**
         * Adds a package reference to the sack.
         * @param package_id a package_id descriptor
         * @returns %TRUE if the package was added to the sack
         */
        add_package_by_id(package_id: string): boolean;
        /**
         * Adds packages from package-list file to a #PkPackageSack.
         * @param file a valid package-list file
         * @returns %TRUE if there were no errors.
         */
        add_packages_from_file(file: Gio.File): boolean;
        /**
         * Empty all the packages from the sack
         */
        clear(): void;
        /**
         * Returns a new package sack which only matches packages that return %TRUE
         * from the filter function.
         * @param filter_cb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to add
         * @returns a new #PkPackageSack, free with g_object_unref()
         */
        filter(filter_cb: PackageSackFilterFunc): PackageSack;
        /**
         * Returns a new package sack which only matches packages that match the
         * specified info enum value.
         * @param info a #PkInfoEnum value to match
         * @returns a new #PkPackageSack, free with g_object_unref()
         */
        filter_by_info(info: InfoEnum | null): PackageSack;
        /**
         * Finds a package in a sack from reference. As soon as one package is found
         * the search is stopped.
         * @param package_id a package_id descriptor
         * @returns the #PkPackage object, or %NULL if unfound. Free with g_object_unref()
         */
        find_by_id(package_id: string): Package;
        /**
         * Finds a package in a sack by package name and architecture. As soon as one
         * package is found the search is stopped.
         * @param package_id a package_id descriptor
         * @returns the #PkPackage object, or %NULL if not found.
         */
        find_by_id_name_arch(package_id: string): Package;
        /**
         * Gets the package array from the sack
         * @returns A #GPtrArray, free with g_ptr_array_unref().
         */
        get_array(): Package[];
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if the properties were set correctly
         */
        get_details(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Merges in details about packages.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback the function to run on completion
         */
        get_details_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Returns all the Package IDs in the sack
         * @returns the number of packages in the sack, free with g_strfreev()
         */
        get_ids(): string[];
        /**
         * Gets the number of packages in the sack
         * @returns the number of packages in the sack
         */
        get_size(): number;
        /**
         * Gets the total size of the package sack in bytes.
         * @returns the size in bytes
         */
        get_total_bytes(): number;
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if the properties were set correctly
         */
        get_update_detail(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Merges in update details about packages.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback the function to run on completion
         */
        get_update_detail_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns %TRUE for success
         */
        merge_generic_finish(res: Gio.AsyncResult): boolean;
        /**
         * Removes from the package sack any packages that return %FALSE from the filter
         * function.
         * @param filter_cb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to retain
         * @returns %TRUE if a package was removed from the sack
         */
        remove_by_filter(filter_cb: PackageSackFilterFunc): boolean;
        /**
         * Removes a package reference from the sack. The pointers have to match exactly.
         * @param _package a valid #PkPackage instance
         * @returns %TRUE if the package was removed from the sack
         */
        remove_package(_package: Package): boolean;
        /**
         * Removes a package reference from the sack. As soon as one package is removed
         * the search is stopped.
         * @param package_id a package_id descriptor
         * @returns %TRUE if the package was removed from the sack
         */
        remove_package_by_id(package_id: string): boolean;
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if the properties were set correctly
         */
        resolve(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Merges in details about packages using resolve.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback the function to run on completion
         */
        resolve_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sorts the package sack
         * @param type the type of sorting, e.g. #PK_PACKAGE_SACK_SORT_TYPE_NAME
         */
        sort(type: PackageSackSortType | null): void;
        /**
         * Write the contents of a #PkPackageSack to a package-list file.
         * @param file a valid package-list file
         * @returns %TRUE if there were no errors.
         */
        to_file(file: Gio.File): boolean;
    }

    namespace Progress {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_cancel: boolean;
            allowCancel: boolean;
            caller_active: boolean;
            callerActive: boolean;
            download_size_remaining: number;
            downloadSizeRemaining: number;
            elapsed_time: number;
            elapsedTime: number;
            item_progress: ItemProgress;
            itemProgress: ItemProgress;
            package: Package;
            package_id: string;
            packageId: string;
            percentage: number;
            remaining_time: number;
            remainingTime: number;
            role: number;
            sender: string;
            speed: number;
            status: number;
            transaction_flags: number;
            transactionFlags: number;
            transaction_id: string;
            transactionId: string;
            uid: number;
        }
    }

    class Progress extends GObject.Object {
        static $gtype: GObject.GType<Progress>;

        // Properties

        /**
         * %TRUE if this transaction can be cancelled.
         */
        get allow_cancel(): boolean;
        set allow_cancel(val: boolean);
        /**
         * %TRUE if this transaction can be cancelled.
         */
        get allowCancel(): boolean;
        set allowCancel(val: boolean);
        /**
         * %TRUE if the transaction caller is still connected.
         */
        get caller_active(): boolean;
        set caller_active(val: boolean);
        /**
         * %TRUE if the transaction caller is still connected.
         */
        get callerActive(): boolean;
        set callerActive(val: boolean);
        /**
         * Number of bytes remaining to download.
         */
        get download_size_remaining(): number;
        set download_size_remaining(val: number);
        /**
         * Number of bytes remaining to download.
         */
        get downloadSizeRemaining(): number;
        set downloadSizeRemaining(val: number);
        /**
         * Amount of time the transaction has taken in seconds.
         */
        get elapsed_time(): number;
        set elapsed_time(val: number);
        /**
         * Amount of time the transaction has taken in seconds.
         */
        get elapsedTime(): number;
        set elapsedTime(val: number);
        /**
         * Item progress associated with this transaction.
         */
        get item_progress(): ItemProgress;
        set item_progress(val: ItemProgress);
        /**
         * Item progress associated with this transaction.
         */
        get itemProgress(): ItemProgress;
        set itemProgress(val: ItemProgress);
        /**
         * The package this transaction is acting on.
         */
        get package(): Package;
        set package(val: Package);
        /**
         * Package ID this transaction is acting on.
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * Package ID this transaction is acting on.
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * Percentage complete of this transaction.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         */
        get remaining_time(): number;
        set remaining_time(val: number);
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         */
        get remainingTime(): number;
        set remainingTime(val: number);
        /**
         * Role of this transaction.
         */
        get role(): number;
        set role(val: number);
        /**
         * The D-Bus name of the client that started this transaction.
         */
        get sender(): string;
        set sender(val: string);
        /**
         * Transaction speed in bits per second or 0 if unknown.
         */
        get speed(): number;
        set speed(val: number);
        /**
         * Status of this transaction.
         */
        get status(): number;
        set status(val: number);
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
         */
        get transaction_flags(): number;
        set transaction_flags(val: number);
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
         */
        get transactionFlags(): number;
        set transactionFlags(val: number);
        /**
         * ID used by this transaction.
         */
        get transaction_id(): string;
        set transaction_id(val: string);
        /**
         * ID used by this transaction.
         */
        get transactionId(): string;
        set transactionId(val: string);
        /**
         * The UID that started this transaction.
         */
        get uid(): number;
        set uid(val: number);

        // Constructors

        constructor(properties?: Partial<Progress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Progress;

        // Signals

        connect<K extends keyof Progress.SignalSignatures>(signal: K, callback: Progress.SignalSignatures[K]): number;
        connect_after<K extends keyof Progress.SignalSignatures>(
            signal: K,
            callback: Progress.SignalSignatures[K],
        ): number;
        emit<K extends keyof Progress.SignalSignatures>(
            signal: K,
            ...args: Parameters<Progress.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Get if this transaction can be cancelled.
         * @returns %TRUE if progress can be cancelled.
         */
        get_allow_cancel(): boolean;
        /**
         * Get if the transaction caller is connected.
         * @returns %TRUE if the transaction caller is still connected.
         */
        get_caller_active(): boolean;
        /**
         * Get the number of bytes remaining to download.
         * @returns number of bytes remaining to download.
         */
        get_download_size_remaining(): number;
        /**
         * Get the amount of time the transaction has taken.
         * @returns time in seconds
         */
        get_elapsed_time(): number;
        /**
         * Get the item progress associated with this transaction.
         * @returns a #PkItemProgress
         */
        get_item_progress(): ItemProgress;
        /**
         * Get the package this transaction is acting on.
         * @returns a #PkPackage
         */
        get_package(): Package;
        /**
         * Get the package ID this transaction is acting on.
         * @returns a PackageID
         */
        get_package_id(): string;
        /**
         * Get the percentage complete.
         * @returns a percentage (0-100)
         */
        get_percentage(): number;
        /**
         * Get the amount of time the transaction will take to complete.
         * @returns time in seconds or 0 if unknown.
         */
        get_remaining_time(): number;
        /**
         * Get the role of this transaction.
         * @returns a #PkRoleEnum
         */
        get_role(): RoleEnum;
        /**
         * Get the D-Bus name of the client that started this transaction.
         * @returns a D-Bus name
         */
        get_sender(): string;
        /**
         * Get the speed of this transaction.
         * @returns speed in bits per scond or 0 if unknown
         */
        get_speed(): number;
        /**
         * Get the status of this transaction.
         * @returns a status string
         */
        get_status(): StatusEnum;
        /**
         * Get the flags associated with this transaction.
         * @returns a #PkBitfield containing #PkTransactionFlagEnum values.
         */
        get_transaction_flags(): number;
        /**
         * Get the ID used by this transaction.
         * @returns a transaction ID.
         */
        get_transaction_id(): string;
        /**
         * Get the UID that started this transaction.
         * @returns an UID
         */
        get_uid(): number;
        /**
         * Set if this transaction can be cancelled.
         * @param allow_cancel %TRUE if this transaction can be cancelled.
         * @returns %TRUE if value changed.
         */
        set_allow_cancel(allow_cancel: boolean): boolean;
        /**
         * Set if the transaction caller is connected.
         * @param caller_active %TRUE if the transaction caller is still connected.
         * @returns %TRUE if value changed.
         */
        set_caller_active(caller_active: boolean): boolean;
        /**
         * Set the number of bytes remaining to download.
         * @param download_size_remaining number of bytes remaining to download.
         * @returns %TRUE if value changed.
         */
        set_download_size_remaining(download_size_remaining: number): boolean;
        /**
         * Set the amount of time the transaction has taken.
         * @param elapsed_time time in seconds
         * @returns %TRUE if value changed.
         */
        set_elapsed_time(elapsed_time: number): boolean;
        /**
         * Set the item progress associated with this transaction.
         * @param item_progress a #PkItemProgress
         * @returns %TRUE if value changed.
         */
        set_item_progress(item_progress: ItemProgress): boolean;
        /**
         * Set the package this transaction is acting on.
         * @param _package a #PkPackage
         * @returns %TRUE if value changed.
         */
        set_package(_package: Package): boolean;
        /**
         * Set the package ID this transaction is acting on.
         * @param package_id a PackageID
         * @returns %TRUE if value changed.
         */
        set_package_id(package_id: string): boolean;
        /**
         * Set the percentage complete of this transaction.
         * @param percentage a percentage value (0-100)
         * @returns %TRUE if value changed.
         */
        set_percentage(percentage: number): boolean;
        /**
         * Set the amount of time the transaction will take to complete.
         * @param remaining_time time in seconds or 0 if unknown.
         * @returns %TRUE if value changed.
         */
        set_remaining_time(remaining_time: number): boolean;
        /**
         * Set the role of this transaction.
         * @param role a #PkRoleEnum
         * @returns %TRUE if value changed.
         */
        set_role(role: RoleEnum | null): boolean;
        /**
         * Set the D-Bus name of the client that started this transaction.
         * @param bus_name a D-Bus name
         * @returns %TRUE if value changed.
         */
        set_sender(bus_name: string): boolean;
        /**
         * Set the speed of this transaction.
         * @param speed speed in bits per second or 0 if unknown
         * @returns %TRUE if value changed.
         */
        set_speed(speed: number): boolean;
        /**
         * Set the status of this transaction.
         * @param status a #PkStatusEnum
         * @returns %TRUE if value changed.
         */
        set_status(status: StatusEnum | null): boolean;
        /**
         * Set the flags associated with this transaction.
         * @param transaction_flags a #PkBitfield containing #PkTransactionFlagEnum values.
         * @returns %TRUE if value changed.
         */
        set_transaction_flags(transaction_flags: number): boolean;
        /**
         * Set the ID used by this transaction.
         * @param transaction_id a transaction ID.
         * @returns %TRUE if value changed.
         */
        set_transaction_id(transaction_id: string): boolean;
        /**
         * Set the UID that started this transaction.
         * @param uid a UID
         * @returns %TRUE if value changed.
         */
        set_uid(uid: number): boolean;
    }

    namespace RepoDetail {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            description: string;
            enabled: boolean;
            repo_id: string;
            repoId: string;
        }
    }

    class RepoDetail extends Source {
        static $gtype: GObject.GType<RepoDetail>;

        // Properties

        get description(): string;
        set description(val: string);
        get enabled(): boolean;
        set enabled(val: boolean);
        get repo_id(): string;
        set repo_id(val: string);
        get repoId(): string;
        set repoId(val: string);

        // Constructors

        constructor(properties?: Partial<RepoDetail.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RepoDetail;

        // Signals

        connect<K extends keyof RepoDetail.SignalSignatures>(
            signal: K,
            callback: RepoDetail.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RepoDetail.SignalSignatures>(
            signal: K,
            callback: RepoDetail.SignalSignatures[K],
        ): number;
        emit<K extends keyof RepoDetail.SignalSignatures>(
            signal: K,
            ...args: Parameters<RepoDetail.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Gets the repository description.
         * @returns string ID, e.g. "Fedora 20 - i386"
         */
        get_description(): string;
        /**
         * Gets the repository enabled status.
         * @returns %TRUE for enabled
         */
        get_enabled(): boolean;
        /**
         * Gets the repository ID.
         * @returns string ID, e.g. "fedora"
         */
        get_id(): string;
    }

    namespace RepoSignatureRequired {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            key_fingerprint: string;
            keyFingerprint: string;
            key_id: string;
            keyId: string;
            key_timestamp: string;
            keyTimestamp: string;
            key_url: string;
            keyUrl: string;
            key_userid: string;
            keyUserid: string;
            package_id: string;
            packageId: string;
            repository_name: string;
            repositoryName: string;
            type: SigTypeEnum;
        }
    }

    class RepoSignatureRequired extends Source {
        static $gtype: GObject.GType<RepoSignatureRequired>;

        // Properties

        get key_fingerprint(): string;
        set key_fingerprint(val: string);
        get keyFingerprint(): string;
        set keyFingerprint(val: string);
        get key_id(): string;
        set key_id(val: string);
        get keyId(): string;
        set keyId(val: string);
        get key_timestamp(): string;
        set key_timestamp(val: string);
        get keyTimestamp(): string;
        set keyTimestamp(val: string);
        get key_url(): string;
        set key_url(val: string);
        get keyUrl(): string;
        set keyUrl(val: string);
        get key_userid(): string;
        set key_userid(val: string);
        get keyUserid(): string;
        set keyUserid(val: string);
        get package_id(): string;
        set package_id(val: string);
        get packageId(): string;
        set packageId(val: string);
        get repository_name(): string;
        set repository_name(val: string);
        get repositoryName(): string;
        set repositoryName(val: string);
        get type(): SigTypeEnum;
        set type(val: SigTypeEnum);

        // Constructors

        constructor(properties?: Partial<RepoSignatureRequired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RepoSignatureRequired;

        // Signals

        connect<K extends keyof RepoSignatureRequired.SignalSignatures>(
            signal: K,
            callback: RepoSignatureRequired.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RepoSignatureRequired.SignalSignatures>(
            signal: K,
            callback: RepoSignatureRequired.SignalSignatures[K],
        ): number;
        emit<K extends keyof RepoSignatureRequired.SignalSignatures>(
            signal: K,
            ...args: Parameters<RepoSignatureRequired.SignalSignatures[K]>
        ): void;
    }

    namespace RequireRestart {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            package_id: string;
            packageId: string;
            restart: RestartEnum;
        }
    }

    class RequireRestart extends Source {
        static $gtype: GObject.GType<RequireRestart>;

        // Properties

        get package_id(): string;
        set package_id(val: string);
        get packageId(): string;
        set packageId(val: string);
        get restart(): RestartEnum;
        set restart(val: RestartEnum);

        // Constructors

        constructor(properties?: Partial<RequireRestart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RequireRestart;

        // Signals

        connect<K extends keyof RequireRestart.SignalSignatures>(
            signal: K,
            callback: RequireRestart.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RequireRestart.SignalSignatures>(
            signal: K,
            callback: RequireRestart.SignalSignatures[K],
        ): number;
        emit<K extends keyof RequireRestart.SignalSignatures>(
            signal: K,
            ...args: Parameters<RequireRestart.SignalSignatures[K]>
        ): void;
    }

    namespace Results {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            inputs: number;
            progress: Progress;
            role: RoleEnum;
            transaction_flags: number;
            transactionFlags: number;
        }
    }

    class Results extends GObject.Object {
        static $gtype: GObject.GType<Results>;

        // Properties

        get inputs(): number;
        set inputs(val: number);
        get progress(): Progress;
        set progress(val: Progress);
        /**
         * The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
         */
        get role(): RoleEnum;
        set role(val: RoleEnum);
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum for this result.
         */
        get transaction_flags(): number;
        set transaction_flags(val: number);
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum for this result.
         */
        get transactionFlags(): number;
        set transactionFlags(val: number);

        // Constructors

        constructor(properties?: Partial<Results.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Results;

        // Signals

        connect<K extends keyof Results.SignalSignatures>(signal: K, callback: Results.SignalSignatures[K]): number;
        connect_after<K extends keyof Results.SignalSignatures>(
            signal: K,
            callback: Results.SignalSignatures[K],
        ): number;
        emit<K extends keyof Results.SignalSignatures>(
            signal: K,
            ...args: Parameters<Results.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Adds a category item to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_category(item: Category): boolean;
        /**
         * Adds some package details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_details(item: Details): boolean;
        /**
         * Adds a distribution upgrade item to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_distro_upgrade(item: DistroUpgrade): boolean;
        /**
         * Adds some EULA details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_eula_required(item: EulaRequired): boolean;
        /**
         * Adds some files details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_files(item: Files): boolean;
        /**
         * Adds some media change details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_media_change_required(item: MediaChangeRequired): boolean;
        /**
         * Adds a package to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_package(item: Package): boolean;
        /**
         * Adds some repository details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_repo_detail(item: RepoDetail): boolean;
        /**
         * Adds some repository signature details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_repo_signature_required(item: RepoSignatureRequired): boolean;
        /**
         * Adds a require restart item to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_require_restart(item: RequireRestart): boolean;
        /**
         * Adds a transaction item to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_transaction(item: TransactionPast): boolean;
        /**
         * Adds some update details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        add_update_detail(item: UpdateDetail): boolean;
        /**
         * Gets the categories from the transaction.
         * @returns A #GPtrArray array of #PkCategory's, free with g_ptr_array_unref().
         */
        get_category_array(): Category[];
        /**
         * Gets the package details from the transaction.
         * @returns A #GPtrArray array of #PkDetails's, free with g_ptr_array_unref().
         */
        get_details_array(): Details[];
        /**
         * Gets the distribution upgrades from the transaction.
         * @returns A #GPtrArray array of #PkDistroUpgrade's, free with g_ptr_array_unref().
         */
        get_distro_upgrade_array(): DistroUpgrade[];
        /**
         * Gets the last error code from the transaction.
         * @returns A #PkError, or %NULL, free with g_object_unref()
         */
        get_error_code(): Error;
        /**
         * Gets the eulas required from the transaction.
         * @returns A #GPtrArray array of #PkEulaRequired's, free with g_ptr_array_unref().
         */
        get_eula_required_array(): EulaRequired[];
        /**
         * Gets the exit enum. You probably don't want to be using this function, and
         * instead using the much more useful pk_results_get_error_code() function.
         * @returns The #PkExitEnum or %PK_EXIT_ENUM_UNKNOWN for error or if it was not set
         */
        get_exit_code(): ExitEnum;
        /**
         * Gets the files from the transaction.
         * @returns A #GPtrArray array of #PkFiles's, free with g_ptr_array_unref().
         */
        get_files_array(): Files[];
        /**
         * Gets the media changes required from the transaction.
         * @returns A #GPtrArray array of #PkMediaChangeRequired's, free with g_ptr_array_unref().
         */
        get_media_change_required_array(): MediaChangeRequired[];
        /**
         * Gets the packages from the transaction.
         * @returns A #GPtrArray array of #PkPackage's, free with g_ptr_array_unref().
         */
        get_package_array(): Package[];
        /**
         * Gets a package sack from the transaction.
         * @returns A #PkPackageSack of data, g_object_unref() to free.
         */
        get_package_sack(): PackageSack;
        /**
         * Gets the repository details from the transaction.
         * @returns A #GPtrArray array of #PkRepoDetail's, free with g_ptr_array_unref().
         */
        get_repo_detail_array(): RepoDetail[];
        /**
         * Gets the repository signatures required from the transaction.
         * @returns A #GPtrArray array of #PkRepoSignatureRequired's, free with g_ptr_array_unref().
         */
        get_repo_signature_required_array(): RepoSignatureRequired[];
        /**
         * Gets the require restarts from the transaction.
         * @returns A #GPtrArray array of #PkRequireRestart's, free with g_ptr_array_unref().
         */
        get_require_restart_array(): RequireRestart[];
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
        get_require_restart_worst(): RestartEnum;
        /**
         * Gets the role that produced these results.
         * @returns The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
         */
        get_role(): RoleEnum;
        /**
         * Gets the transactions from the transaction.
         * @returns A #GPtrArray array of #PkTransactionPast's, free with g_ptr_array_unref().
         */
        get_transaction_array(): TransactionPast[];
        /**
         * Gets the transaction flag for these results.
         * @returns a #PkBitfield containing #PkTransactionFlagEnum 0 if not set
         */
        get_transaction_flags(): Bitfield;
        /**
         * Gets the update details from the transaction.
         * @returns A #GPtrArray array of #PkUpdateDetail's, free with g_ptr_array_unref().
         */
        get_update_detail_array(): UpdateDetail[];
        /**
         * Adds some error details to the results set.
         * @param item the object to add to the array
         * @returns %TRUE if the value was set
         */
        set_error_code(item: Error): boolean;
        /**
         * Sets the results object to have the given exit code.
         * @param exit_enum the exit code
         * @returns %TRUE if the value was set
         */
        set_exit_code(exit_enum: ExitEnum | null): boolean;
        /**
         * Sets the results object to have the given role enum.
         * @param role the role enum
         * @returns %TRUE if the value was set
         */
        set_role(role: RoleEnum | null): boolean;
    }

    namespace Source {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            role: RoleEnum;
            transaction_id: string;
            transactionId: string;
        }
    }

    class Source extends GObject.Object {
        static $gtype: GObject.GType<Source>;

        // Properties

        get role(): RoleEnum;
        set role(val: RoleEnum);
        get transaction_id(): string;
        set transaction_id(val: string);
        get transactionId(): string;
        set transactionId(val: string);

        // Constructors

        constructor(properties?: Partial<Source.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Source;

        // Signals

        connect<K extends keyof Source.SignalSignatures>(signal: K, callback: Source.SignalSignatures[K]): number;
        connect_after<K extends keyof Source.SignalSignatures>(signal: K, callback: Source.SignalSignatures[K]): number;
        emit<K extends keyof Source.SignalSignatures>(signal: K, ...args: Parameters<Source.SignalSignatures[K]>): void;
    }

    namespace Task {
        // Signal signatures
        interface SignalSignatures extends Client.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Client.ConstructorProps {
            allow_downgrade: boolean;
            allowDowngrade: boolean;
            allow_reinstall: boolean;
            allowReinstall: boolean;
            only_download: boolean;
            onlyDownload: boolean;
            only_trusted: boolean;
            onlyTrusted: boolean;
            simulate: boolean;
        }
    }

    class Task extends Client {
        static $gtype: GObject.GType<Task>;

        // Properties

        /**
         * %TRUE if package downgrades are allowed.
         */
        get allow_downgrade(): boolean;
        set allow_downgrade(val: boolean);
        /**
         * %TRUE if package downgrades are allowed.
         */
        get allowDowngrade(): boolean;
        set allowDowngrade(val: boolean);
        /**
         * %TRUE if package reinstallation shall be allowed during transaction.
         */
        get allow_reinstall(): boolean;
        set allow_reinstall(val: boolean);
        /**
         * %TRUE if package reinstallation shall be allowed during transaction.
         */
        get allowReinstall(): boolean;
        set allowReinstall(val: boolean);
        /**
         * %TRUE if we are just preparing the transaction for later.
         */
        get only_download(): boolean;
        set only_download(val: boolean);
        /**
         * %TRUE if we are just preparing the transaction for later.
         */
        get onlyDownload(): boolean;
        set onlyDownload(val: boolean);
        /**
         * %TRUE if only authenticated packages should be allowed in the transaction.
         */
        get only_trusted(): boolean;
        set only_trusted(val: boolean);
        /**
         * %TRUE if only authenticated packages should be allowed in the transaction.
         */
        get onlyTrusted(): boolean;
        set onlyTrusted(val: boolean);
        /**
         * %TRUE if we are simulating.
         */
        get simulate(): boolean;
        set simulate(val: boolean);

        // Constructors

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Task;

        // Signals

        connect<K extends keyof Task.SignalSignatures>(signal: K, callback: Task.SignalSignatures[K]): number;
        connect_after<K extends keyof Task.SignalSignatures>(signal: K, callback: Task.SignalSignatures[K]): number;
        emit<K extends keyof Task.SignalSignatures>(signal: K, ...args: Parameters<Task.SignalSignatures[K]>): void;

        // Virtual methods

        vfunc_eula_question(request: number, results: Results): void;
        vfunc_key_question(request: number, results: Results): void;
        vfunc_media_change_question(request: number, results: Results): void;
        vfunc_repair_question(request: number, results: Results): void;
        vfunc_simulate_question(request: number, results: Results): void;
        vfunc_untrusted_question(request: number, results: Results): void;

        // Methods

        /**
         * Get the list of dependant packages.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive if we should recurse to packages that depend on other packages
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        depends_on_async(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the list of dependent packages.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive if we should recurse to packages that depend on other packages
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        depends_on_sync(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Downloads packages
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param directory the destination directory
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        download_packages_async(
            package_ids: string[],
            directory: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Downloads packages
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param directory the destination directory
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        download_packages_sync(
            package_ids: string[],
            directory: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns The #PkResults of the transaction.
         */
        generic_finish(res: Gio.AsyncResult): Results;
        /**
         * Gets if we are allow packages to be downgraded.
         * @returns %TRUE if package downgrades are allowed
         */
        get_allow_downgrade(): boolean;
        /**
         * Gets if we allow packages to be reinstalled.
         * @returns %TRUE if package reinstallation is allowed
         */
        get_allow_reinstall(): boolean;
        /**
         * Get the categories available.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_categories_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the categories available.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * Gets details about packages.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_details_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets details about packages.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_details_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the files in a package.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_files_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the files in a package.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_files_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets if we are just preparing the transaction for later.
         * @returns %TRUE if only downloading
         */
        get_only_download(): boolean;
        /**
         * Gets if we allow only authenticated packages in the transactoin.
         * @returns %TRUE if we allow only authenticated packages
         */
        get_only_trusted(): boolean;
        /**
         * Gets the list of packages.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_packages_async(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the list of packages.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_packages_sync(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the list of available repositories.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_repo_list_async(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the list of available repositories.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_repo_list_sync(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets if we are simulating.
         * @returns %TRUE if we are simulating
         */
        get_simulate(): boolean;
        /**
         * Gets details about updates.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_update_detail_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets details about updates.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_update_detail_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets the update lists.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        get_updates_async(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the update lists.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        get_updates_sync(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Install a file locally, and get the deps from the repositories.
         * This is useful for double clicking on a .rpm or .deb file.
         * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_files_async(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with PackageKitGlib.Client.install_files_async
        install_files_async(...args: never[]): any;
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
        install_files_sync(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Merges in details about packages using resolve.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_packages_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with PackageKitGlib.Client.install_packages_async
        install_packages_async(...args: never[]): any;
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
        install_packages_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Refresh the package cache.
         * @param force if the metadata should be deleted and re-downloaded even if it is correct
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        refresh_cache_async(
            force: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Refresh the package cache.
         * @param force if the metadata should be deleted and re-downloaded even if it is correct
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        refresh_cache_sync(
            force: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        remove_packages_async(
            package_ids: string[],
            allow_deps: boolean,
            autoremove: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with PackageKitGlib.Client.remove_packages_async
        remove_packages_async(...args: never[]): any;
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
        remove_packages_sync(
            package_ids: string[],
            allow_deps: boolean,
            autoremove: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Recover the system from broken dependencies and aborted installations.
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        repair_system_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with PackageKitGlib.Client.repair_system_async
        repair_system_async(...args: never[]): any;
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
        repair_system_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * Enable or disable a specific repo.
         * @param repo_id The software repository ID
         * @param enabled %TRUE or %FALSE
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        repo_enable_async(
            repo_id: string,
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Enable or disable a specific repo.
         * @param repo_id The software repository ID
         * @param enabled %TRUE or %FALSE
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        repo_enable_sync(
            repo_id: string,
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the packages this package requires.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive if we should return packages that depend on the ones we do
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        required_by_async(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the packages this package requires.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive if we should return packages that depend on the ones we do
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        required_by_sync(
            filters: Bitfield,
            package_ids: string[],
            recursive: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Resolves a package name to a package-id.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param packages package names to find
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        resolve_async(
            filters: Bitfield,
            packages: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Resolves a package name to a package-id.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param packages package names to find
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        resolve_sync(
            filters: Bitfield,
            packages: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Searches for some package details.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_details_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Searches for some package details.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        search_details_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Searches for specific files.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_files_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Searches for specific files.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        search_files_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Searches the group lists.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_groups_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Searches the group lists.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        search_groups_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Searches for a package name.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        search_names_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Searches for a package name.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values search values
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        search_names_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * If package downgrades shall be allowed during transaction.
         * @param allow_downgrade %TRUE to allow packages to be downgraded.
         */
        set_allow_downgrade(allow_downgrade: boolean): void;
        /**
         * If package reinstallation shall be allowed during transaction.
         * @param allow_reinstall %TRUE to allow packages to be reinstalled.
         */
        set_allow_reinstall(allow_reinstall: boolean): void;
        /**
         * If the transaction should be prepared (depsolved, packages
         * downloaded, etc) but not committed.
         * @param only_download %FALSE to actually commit the transaction
         */
        set_only_download(only_download: boolean): void;
        /**
         * If only authenticated packages should be allowed in the
         * transaction.
         * @param only_trusted %TRUE to allow only authenticated packages
         */
        set_only_trusted(only_trusted: boolean): void;
        /**
         * If the simulate step should be run without the actual transaction.
         * @param simulate the simulate mode
         */
        set_simulate(simulate: boolean): void;
        /**
         * Update specific packages to the newest available versions.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        update_packages_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with PackageKitGlib.Client.update_packages_async
        update_packages_async(...args: never[]): any;
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
        update_packages_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
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
        upgrade_system_async(
            distro_id: string,
            upgrade_kind: UpgradeKindEnum | null,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with PackageKitGlib.Client.upgrade_system_async
        upgrade_system_async(...args: never[]): any;
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
        upgrade_system_sync(
            distro_id: string,
            upgrade_kind: UpgradeKindEnum | null,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Mark a EULA as accepted by the user.
         * @param request request ID for EULA.
         * @returns %TRUE if @request is valid.
         */
        user_accepted(request: number): boolean;
        /**
         * Mark a EULA as declined by the user.
         * @param request request ID for EULA.
         * @returns %TRUE if @request is valid.
         */
        user_declined(request: number): boolean;
        /**
         * Find the package that provides some resource.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values values to search for
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        what_provides_async(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Find the package that provides some resource.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values values to search for
         * @param cancellable a #GCancellable or %NULL
         * @param progress_callback the function to run when the progress changes
         * @returns a #PkResults object, or %NULL for error
         */
        what_provides_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
    }

    namespace TransactionList {
        // Signal callback interfaces

        interface Added {
            (_source: TransactionList, tid: string): void;
        }

        interface Removed {
            (_source: TransactionList, tid: string): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            added: Added;
            removed: Removed;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class TransactionList extends GObject.Object {
        static $gtype: GObject.GType<TransactionList>;

        // Constructors

        constructor(properties?: Partial<TransactionList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TransactionList;

        // Signals

        connect<K extends keyof TransactionList.SignalSignatures>(
            signal: K,
            callback: TransactionList.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TransactionList.SignalSignatures>(
            signal: K,
            callback: TransactionList.SignalSignatures[K],
        ): number;
        emit<K extends keyof TransactionList.SignalSignatures>(
            signal: K,
            ...args: Parameters<TransactionList.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_added(tid: string): void;
        vfunc_removed(tid: string): void;

        // Methods

        /**
         * Gets the string lists of transaction IDs recognised as pending, running or finished by the daemon.
         * @returns the array of strings, free with g_strfreev()
         */
        get_ids(): string[];
    }

    namespace TransactionPast {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            cmdline: string;
            data: string;
            duration: number;
            role: RoleEnum;
            succeeded: boolean;
            tid: string;
            timespec: string;
            uid: number;
        }
    }

    class TransactionPast extends Source {
        static $gtype: GObject.GType<TransactionPast>;

        // Properties

        get cmdline(): string;
        set cmdline(val: string);
        get data(): string;
        set data(val: string);
        get duration(): number;
        set duration(val: number);
        get role(): RoleEnum;
        set role(val: RoleEnum);
        get succeeded(): boolean;
        set succeeded(val: boolean);
        get tid(): string;
        set tid(val: string);
        get timespec(): string;
        set timespec(val: string);
        get uid(): number;
        set uid(val: number);

        // Constructors

        constructor(properties?: Partial<TransactionPast.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TransactionPast;

        // Signals

        connect<K extends keyof TransactionPast.SignalSignatures>(
            signal: K,
            callback: TransactionPast.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TransactionPast.SignalSignatures>(
            signal: K,
            callback: TransactionPast.SignalSignatures[K],
        ): number;
        emit<K extends keyof TransactionPast.SignalSignatures>(
            signal: K,
            ...args: Parameters<TransactionPast.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Gets the past transaction cmdline value;
         * @returns The transaction data
         */
        get_cmdline(): string;
        /**
         * Gets the past transaction data;
         * @returns The transaction data
         */
        get_data(): string;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Gets the past transaction date & time value;
         * @returns The transaction data, or %NULL if it's not available
         */
        get_datetime(): GLib.DateTime;
        /**
         * Gets the past transaction duration;
         * @returns The transaction duration in ms
         */
        get_duration(): number;
        /**
         * Gets the past transaction ID value;
         * @returns The transaction data
         */
        get_id(): string;
        /**
         * Gets the past transaction role;
         * @returns The transaction data
         */
        get_role(): RoleEnum;
        /**
         * Gets the past transaction succeeded value;
         * @returns The transaction data
         */
        get_succeeded(): boolean;
        /**
         * Gets the past transaction timespec value;
         * @returns The transaction data
         */
        get_timespec(): string;
        /**
         * Gets the past transaction timestamp
         * @returns The transaction data, or 0 if it's not available
         */
        get_timestamp(): number;
        /**
         * Gets the past transaction uid;
         * @returns The transaction data
         */
        get_uid(): number;
    }

    namespace UpdateDetail {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            bugzilla_urls: string[];
            bugzillaUrls: string[];
            changelog: string;
            cve_urls: string[];
            cveUrls: string[];
            issued: string;
            obsoletes: string[];
            package_id: string;
            packageId: string;
            restart: RestartEnum;
            state: UpdateStateEnum;
            update_text: string;
            updateText: string;
            updated: string;
            updates: string[];
            vendor_urls: string[];
            vendorUrls: string[];
        }
    }

    class UpdateDetail extends Source {
        static $gtype: GObject.GType<UpdateDetail>;

        // Properties

        get bugzilla_urls(): string[];
        set bugzilla_urls(val: string[]);
        get bugzillaUrls(): string[];
        set bugzillaUrls(val: string[]);
        get changelog(): string;
        set changelog(val: string);
        get cve_urls(): string[];
        set cve_urls(val: string[]);
        get cveUrls(): string[];
        set cveUrls(val: string[]);
        get issued(): string;
        set issued(val: string);
        get obsoletes(): string[];
        set obsoletes(val: string[]);
        get package_id(): string;
        set package_id(val: string);
        get packageId(): string;
        set packageId(val: string);
        get restart(): RestartEnum;
        set restart(val: RestartEnum);
        get state(): UpdateStateEnum;
        set state(val: UpdateStateEnum);
        get update_text(): string;
        set update_text(val: string);
        get updateText(): string;
        set updateText(val: string);
        get updated(): string;
        set updated(val: string);
        get updates(): string[];
        set updates(val: string[]);
        get vendor_urls(): string[];
        set vendor_urls(val: string[]);
        get vendorUrls(): string[];
        set vendorUrls(val: string[]);

        // Constructors

        constructor(properties?: Partial<UpdateDetail.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UpdateDetail;

        // Signals

        connect<K extends keyof UpdateDetail.SignalSignatures>(
            signal: K,
            callback: UpdateDetail.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UpdateDetail.SignalSignatures>(
            signal: K,
            callback: UpdateDetail.SignalSignatures[K],
        ): number;
        emit<K extends keyof UpdateDetail.SignalSignatures>(
            signal: K,
            ...args: Parameters<UpdateDetail.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Gets the update detail bugzilla URLs.
         * @returns string values
         */
        get_bugzilla_urls(): string[];
        /**
         * Gets the update detail changelog.
         * @returns string values
         */
        get_changelog(): string;
        /**
         * Gets the update detail CVE URLs.
         * @returns string values
         */
        get_cve_urls(): string[];
        /**
         * Gets the update detail issued string.
         * @returns string values
         */
        get_issued(): string;
        /**
         * Gets the update detail obsoletes IDs.
         * @returns string values
         */
        get_obsoletes(): string[];
        /**
         * Gets the update detail package ID.
         * @returns string values
         */
        get_package_id(): string;
        /**
         * Gets the update detail restart kind.
         * @returns enum values
         */
        get_restart(): RestartEnum;
        /**
         * Gets the update detail state.
         * @returns enum value
         */
        get_state(): UpdateStateEnum;
        /**
         * Gets the update detail update text.
         * @returns string values
         */
        get_update_text(): string;
        /**
         * Gets the update detail updated string.
         * @returns string values
         */
        get_updated(): string;
        /**
         * Gets the update detail updates IDs.
         * @returns string values
         */
        get_updates(): string[];
        /**
         * Gets the update detail vendor URLs.
         * @returns string values
         */
        get_vendor_urls(): string[];
    }

    type CategoryClass = typeof Category;
    /**
     * Private #PkCategory data
     */
    abstract class CategoryPrivate {
        static $gtype: GObject.GType<CategoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClientClass = typeof Client;
    type ClientHelperClass = typeof ClientHelper;
    /**
     * Private #PkClientHelper data
     */
    abstract class ClientHelperPrivate {
        static $gtype: GObject.GType<ClientHelperPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Private #PkClient data
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ControlClass = typeof Control;
    /**
     * Private #PkControl data
     */
    abstract class ControlPrivate {
        static $gtype: GObject.GType<ControlPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DesktopClass = typeof Desktop;
    /**
     * Private #PkDesktop data
     */
    abstract class DesktopPrivate {
        static $gtype: GObject.GType<DesktopPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DetailsClass = typeof Details;
    /**
     * Private #PkDetails data
     */
    abstract class DetailsPrivate {
        static $gtype: GObject.GType<DetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DistroUpgradeClass = typeof DistroUpgrade;
    /**
     * Private #PkDistroUpgrade data
     */
    abstract class DistroUpgradePrivate {
        static $gtype: GObject.GType<DistroUpgradePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Matching an enumerated type to a string
     */
    class EnumMatch {
        static $gtype: GObject.GType<EnumMatch>;

        // Fields

        value: number;
        string: string;

        // Constructors

        constructor(
            properties?: Partial<{
                value: number;
                string: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ErrorClass = typeof Error;
    /**
     * Private #PkError data
     */
    abstract class ErrorPrivate {
        static $gtype: GObject.GType<ErrorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EulaRequiredClass = typeof EulaRequired;
    /**
     * Private #PkEulaRequired data
     */
    abstract class EulaRequiredPrivate {
        static $gtype: GObject.GType<EulaRequiredPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FilesClass = typeof Files;
    /**
     * Private #PkFiles data
     */
    abstract class FilesPrivate {
        static $gtype: GObject.GType<FilesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ItemProgressClass = typeof ItemProgress;
    /**
     * Private #PkItemProgress data
     */
    abstract class ItemProgressPrivate {
        static $gtype: GObject.GType<ItemProgressPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MediaChangeRequiredClass = typeof MediaChangeRequired;
    /**
     * Private #PkMediaChangeRequired data
     */
    abstract class MediaChangeRequiredPrivate {
        static $gtype: GObject.GType<MediaChangeRequiredPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PackageClass = typeof Package;
    /**
     * Private #PkPackage data
     */
    abstract class PackagePrivate {
        static $gtype: GObject.GType<PackagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PackageSackClass = typeof PackageSack;
    /**
     * Private #PkPackageSack data
     */
    abstract class PackageSackPrivate {
        static $gtype: GObject.GType<PackageSackPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class PackageSackResults {
        static $gtype: GObject.GType<PackageSackResults>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ProgressClass = typeof Progress;
    /**
     * Private #PkProgress data
     */
    abstract class ProgressPrivate {
        static $gtype: GObject.GType<ProgressPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RepoDetailClass = typeof RepoDetail;
    /**
     * Private #PkRepoDetail data
     */
    abstract class RepoDetailPrivate {
        static $gtype: GObject.GType<RepoDetailPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RepoSignatureRequiredClass = typeof RepoSignatureRequired;
    /**
     * Private #PkRepoSignatureRequired data
     */
    abstract class RepoSignatureRequiredPrivate {
        static $gtype: GObject.GType<RepoSignatureRequiredPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RequireRestartClass = typeof RequireRestart;
    /**
     * Private #PkRequireRestart data
     */
    abstract class RequireRestartPrivate {
        static $gtype: GObject.GType<RequireRestartPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ResultsClass = typeof Results;
    /**
     * Private #PkResults data
     */
    abstract class ResultsPrivate {
        static $gtype: GObject.GType<ResultsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SourceClass = typeof Source;
    /**
     * Private #PkSource data
     */
    abstract class SourcePrivate {
        static $gtype: GObject.GType<SourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TaskClass = typeof Task;
    /**
     * Private #PkTask data
     */
    abstract class TaskPrivate {
        static $gtype: GObject.GType<TaskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TransactionListClass = typeof TransactionList;
    /**
     * Private #PkTransactionList data
     */
    abstract class TransactionListPrivate {
        static $gtype: GObject.GType<TransactionListPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TransactionPastClass = typeof TransactionPast;
    /**
     * Private #PkTransactionPast data
     */
    abstract class TransactionPastPrivate {
        static $gtype: GObject.GType<TransactionPastPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UpdateDetailClass = typeof UpdateDetail;
    /**
     * Private #PkUpdateDetail data
     */
    abstract class UpdateDetailPrivate {
        static $gtype: GObject.GType<UpdateDetailPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type Bitfield = number;
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

export default PackageKitGlib;

// END
