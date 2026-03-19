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

    export namespace AuthorizeEnum {
        export const $gtype: GObject.GType<AuthorizeEnum>;
    }

    /**
     * The authorization result
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class ClientError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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

        // Static methods

        /**
         * An error quark for {@link PackageKitGlib.ClientError}.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Errors that can be thrown
     * @gir-type Struct
     */
    class ControlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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

        // Static methods

        /**
         * We are a GObject that sets errors
         */
        static quark(): GLib.Quark;
    }

    export namespace DistroUpgradeEnum {
        export const $gtype: GObject.GType<DistroUpgradeEnum>;
    }

    /**
     * The distro upgrade status
     * @gir-type Enum
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

    export namespace ErrorEnum {
        export const $gtype: GObject.GType<ErrorEnum>;
    }

    /**
     * The error type
     * @gir-type Enum
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

    export namespace ExitEnum {
        export const $gtype: GObject.GType<ExitEnum>;
    }

    /**
     * How the backend exited
     * @gir-type Enum
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

    export namespace FilterEnum {
        export const $gtype: GObject.GType<FilterEnum>;
    }

    /**
     * The filter types
     * @gir-type Enum
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

    export namespace GroupEnum {
        export const $gtype: GObject.GType<GroupEnum>;
    }

    /**
     * The group type
     * @gir-type Enum
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

    export namespace InfoEnum {
        export const $gtype: GObject.GType<InfoEnum>;
    }

    /**
     * The enumerated types used in Package() - these have to refer to a specific
     * package action, rather than a general state
     * @gir-type Enum
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

    export namespace MediaTypeEnum {
        export const $gtype: GObject.GType<MediaTypeEnum>;
    }

    /**
     * The media type
     * @gir-type Enum
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

    export namespace NetworkEnum {
        export const $gtype: GObject.GType<NetworkEnum>;
    }

    /**
     * Network type
     * @gir-type Enum
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

    export namespace OfflineAction {
        export const $gtype: GObject.GType<OfflineAction>;
    }

    /**
     * Actions that can be taken after an offline operation.
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class OfflineError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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

        // Static methods

        /**
         * An error quark for {@link PackageKitGlib.OfflineError}.
         */
        static quark(): GLib.Quark;
    }

    export namespace PackageSackSortType {
        export const $gtype: GObject.GType<PackageSackSortType>;
    }

    /**
     * Type of sort to perform.
     * @gir-type Enum
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

    export namespace ProgressType {
        export const $gtype: GObject.GType<ProgressType>;
    }

    /**
     * Flag to show which progress field has been updated.
     * @gir-type Enum
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

    export namespace RestartEnum {
        export const $gtype: GObject.GType<RestartEnum>;
    }

    /**
     * What restart we need to after a transaction, ordered by severity
     * @gir-type Enum
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

    export namespace RoleEnum {
        export const $gtype: GObject.GType<RoleEnum>;
    }

    /**
     * What we were asked to do, this never changes for the lifetime of the
     * transaction.
     * Icons that have to represent the whole "aim" of the transaction will use
     * these constants
     * @gir-type Enum
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

    export namespace SigTypeEnum {
        export const $gtype: GObject.GType<SigTypeEnum>;
    }

    /**
     * The signature type type
     * @gir-type Enum
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

    export namespace StatusEnum {
        export const $gtype: GObject.GType<StatusEnum>;
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
     * @gir-type Enum
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

    export namespace TransactionFlagEnum {
        export const $gtype: GObject.GType<TransactionFlagEnum>;
    }

    /**
     * The transaction flags that alter how the transaction is handled
     * @gir-type Enum
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

    export namespace UpdateStateEnum {
        export const $gtype: GObject.GType<UpdateStateEnum>;
    }

    /**
     * What state the update is in
     * @gir-type Enum
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

    export namespace UpgradeKindEnum {
        export const $gtype: GObject.GType<UpgradeKindEnum>;
    }

    /**
     * The type of distribution upgrade to perform
     * @gir-type Enum
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
     * @returns the enumerated constant value, e.g. {@link PackageKitGlib.AuthorizeEnum.YES}
     * @since 0.5.0
     */
    function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param authorize_type The enumerated type value
     * @returns the enumerated constant value, e.g. "yes"
     * @since 0.5.0
     */
    function authorize_type_enum_to_string(authorize_type: AuthorizeEnum | null): string;
    /**
     * An error quark for {@link PackageKitGlib.ClientError}.
     * @returns an error quark.
     * @since 0.5.2
     */
    function client_error_quark(): GLib.Quark;
    /**
     * We are a GObject that sets errors
     * @returns Our personal error quark.
     * @since 0.5.2
     */
    function control_error_quark(): GLib.Quark;
    /**
     * Add a log domain to the debug output.
     * @param log_domain a log domain
     */
    function debug_add_log_domain(log_domain: string): void;
    /**
     * Check if verbose debugging is enabled.
     * @returns `true` if we have debugging enabled
     */
    function debug_is_verbose(): boolean;
    /**
     * Set if verbose debugging is enabled.
     * @param verbose `true` if verbose debugging should be enabled.
     */
    function debug_set_verbose(verbose: boolean): void;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param upgrade Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_DISTRO_UPGRADE_ENUM_STABLE
     * @since 0.5.0
     */
    function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param upgrade The enumerated type value
     * @returns the enumerated constant value, e.g. "stable"
     * @since 0.5.0
     */
    function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum | null): string;
    /**
     * Search for a enum value in a table of constants.
     * @param table A {@link PackageKitGlib.EnumMatch} enum table of values
     * @param value the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @returns the string constant, e.g. "desktop-gnome"
     */
    function enum_find_string(table: EnumMatch, value: number): string;
    /**
     * Search for a string value in a table of constants.
     * @param table A {@link PackageKitGlib.EnumMatch} enum table of values
     * @param string the string constant to search for, e.g. "desktop-gnome"
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     */
    function enum_find_value(table: EnumMatch, string: string): number;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param code Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function error_enum_from_string(code: string): ErrorEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param code The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function error_enum_to_string(code: ErrorEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param exit Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function exit_enum_from_string(exit: string): ExitEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param exit The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function exit_enum_to_string(exit: ExitEnum | null): string;
    /**
     * Converts text representation to its enumerated type bitfield, or 0 for invalid
     * @param filters the enumerated constant value, e.g. "available;~gui"
     * @returns The enumerated type values
     * @since 0.5.2
     */
    function filter_bitfield_from_string(filters: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param filters The enumerated type values
     * @returns the enumerated constant value, e.g. "available;~gui"
     * @since 0.5.2
     */
    function filter_bitfield_to_string(filters: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param filter Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function filter_enum_from_string(filter: string): FilterEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param filter The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
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
     * @since 0.5.2
     */
    function group_bitfield_from_string(groups: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param groups The enumerated type values
     * @returns the enumerated constant value, e.g. "gnome;kde"
     * @since 0.5.2
     */
    function group_bitfield_to_string(groups: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param group Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function group_enum_from_string(group: string): GroupEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param group The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function group_enum_to_string(group: GroupEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param info Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function info_enum_from_string(info: string): InfoEnum;
    /**
     * Converts a enumerated type to its localized description
     * @param info The enumerated type value
     * @returns the translated text
     * @since 0.7.2
     */
    function info_enum_to_localised_past(info: InfoEnum | null): string;
    /**
     * Converts a enumerated type to its localized description
     * @param info The enumerated type value
     * @returns the translated text
     * @since 0.7.2
     */
    function info_enum_to_localised_present(info: InfoEnum | null): string;
    /**
     * Converts a enumerated type to its text representation
     * @param info The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function info_enum_to_string(info: InfoEnum | null): string;
    /**
     * Convert a date into an ISO8601 data string.
     * @param date a {@link GLib.Date} to convert
     * @returns If valid then a new ISO8601 date, else `null`
     * @since 0.5.2
     */
    function iso8601_from_date(date: GLib.Date): string;
    /**
     * Get the current date / time as an ISO8601 string.
     * @returns The current iso8601 date and time
     * @since 0.5.2
     */
    function iso8601_present(): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param media_type Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_MEDIA_TYPE_ENUM_CD
     * @since 0.5.0
     */
    function media_type_enum_from_string(media_type: string): MediaTypeEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param media_type The enumerated type value
     * @returns the enumerated constant value, e.g. "dvd"
     * @since 0.5.0
     */
    function media_type_enum_to_string(media_type: MediaTypeEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param network Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function network_enum_from_string(network: string): NetworkEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param network The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function network_enum_to_string(network: NetworkEnum | null): string;
    /**
     * Converts the string to the enumerated value.
     * @param action a string representation of a {@link PackageKitGlib.OfflineAction}, e.g. "reboot"
     * @returns A {@link PackageKitGlib.OfflineAction}, or {@link PackageKitGlib.OfflineAction.UNKNOWN} for invalid
     * @since 0.9.6
     */
    function offline_action_from_string(action: string): OfflineAction;
    /**
     * Converts the enumerated value to a string.
     * @param action a {@link PackageKitGlib.OfflineAction}, e.g. {@link PackageKitGlib.OfflineAction.REBOOT}
     * @returns string value, or `null` for invalid
     * @since 0.9.6
     */
    function offline_action_to_string(action: OfflineAction | null): string;
    function offline_auth_cancel(): boolean;
    function offline_auth_clear_results(): boolean;
    function offline_auth_invalidate(): boolean;
    /**
     * @param action
     */
    function offline_auth_set_action(action: OfflineAction | null): boolean;
    /**
     * @param package_ids
     */
    function offline_auth_set_prepared_ids(package_ids: string): boolean;
    /**
     * @param name
     * @param release_ver
     */
    function offline_auth_set_prepared_upgrade(name: string, release_ver: string): boolean;
    /**
     * @param results
     */
    function offline_auth_set_results(results: Results): boolean;
    /**
     * @param action
     */
    function offline_auth_trigger(action: OfflineAction | null): boolean;
    /**
     * @param action
     */
    function offline_auth_trigger_upgrade(action: OfflineAction | null): boolean;
    /**
     * Cancels the offline operation that has been scheduled. If there is no
     * scheduled offline operation then this method returns with success.
     * The function always allows user interaction. To change the behavior,
     * use `pk_offline_cancel_with_flags()`.
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 0.9.6
     */
    function offline_cancel(cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Cancels the offline operation that has been scheduled. If there is no
     * scheduled offline operation then this method returns with success.
     * @param flags bit-or of {@link PackageKitGlib.OfflineFlags}
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 1.2.5
     */
    function offline_cancel_with_flags(flags: OfflineFlags | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Clears the last offline operation report, which may be success or failure.
     * If the report does not exist then this method returns success.
     * The function always allows user interaction. To change the behavior,
     * use `pk_offline_clear_results_with_flags()`.
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 0.9.6
     */
    function offline_clear_results(cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Clears the last offline operation report, which may be success or failure.
     * If the report does not exist then this method returns success.
     * @param flags bit-or of {@link PackageKitGlib.OfflineFlags}
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 1.2.5
     */
    function offline_clear_results_with_flags(
        flags: OfflineFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    /**
     * An error quark for {@link PackageKitGlib.OfflineError}.
     * @returns an error quark.
     * @since 0.9.6
     */
    function offline_error_quark(): GLib.Quark;
    /**
     * Gets the action that will be taken after the offline action has completed.
     *
     * An error is set if the the value {@link PackageKitGlib.OfflineAction.UNKNOWN} is returned.
     * @returns a {@link PackageKitGlib.OfflineAction}, e.g. {@link PackageKitGlib.OfflineAction.REBOOT}
     * @since 0.9.6
     */
    function offline_get_action(): OfflineAction;
    /**
     * Gets a file monitor for the trigger.
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns A {@link Gio.FileMonitor}, or `null`
     * @since 0.9.6
     */
    function offline_get_action_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
    /**
     * Gets the package-ids in the prepared transaction.
     * @returns array of package-ids, or `null`
     * @since 0.9.6
     */
    function offline_get_prepared_ids(): string[];
    /**
     * Gets a file monitor for the prepared transaction.
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns A {@link Gio.FileMonitor}, or `null`
     * @since 0.9.6
     */
    function offline_get_prepared_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
    /**
     * Gets a package sack of the packages in the prepared transaction.
     * @returns A new {@link PackageKitGlib.PackageSack}, or `null`
     * @since 0.9.6
     */
    function offline_get_prepared_sack(): PackageSack;
    /**
     * @param name
     * @param release_ver
     */
    function offline_get_prepared_upgrade(name: string, release_ver: string): boolean;
    /**
     * Gets a file monitor for the prepared system upgrade transaction.
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns A {@link Gio.FileMonitor}, or `null`
     * @since 1.0.12
     */
    function offline_get_prepared_upgrade_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
    /**
     * Gets the name of the prepared system upgrade in the prepared transaction.
     * @returns the name, or `null` if unset, free with `g_free()`
     * @since 1.1.2
     */
    function offline_get_prepared_upgrade_name(): string;
    /**
     * Gets the version of the prepared system upgrade in the prepared transaction.
     * @returns the version, or `null` if unset, free with `g_free()`
     * @since 1.0.12
     */
    function offline_get_prepared_upgrade_version(): string;
    /**
     * Gets the last result of the offline transaction.
     * @returns A {@link PackageKitGlib.Results}, or `null`
     * @since 0.9.6
     */
    function offline_get_results(): Results;
    /**
     * Gets the modification time of the prepared transaction.
     * @returns a unix time, or 0 for error.
     * @since 0.9.6
     */
    function offline_get_results_mtime(): number;
    /**
     * Triggers the offline update so that the next reboot will perform the
     * pending transaction.
     * The function always allows user interaction. To change the behavior,
     * use `pk_offline_trigger_with_flags()`.
     * @param action a {@link PackageKitGlib.OfflineAction}, e.g. {@link PackageKitGlib.OfflineAction.REBOOT}
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 0.9.6
     */
    function offline_trigger(action: OfflineAction | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Triggers the offline system upgrade so that the next reboot will perform the
     * pending transaction.
     * The function always allows user interaction. To change the behavior,
     * use `pk_offline_trigger_upgrade_with_flags()`.
     * @param action a {@link PackageKitGlib.OfflineAction}, e.g. {@link PackageKitGlib.OfflineAction.REBOOT}
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 1.0.12
     */
    function offline_trigger_upgrade(action: OfflineAction | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Triggers the offline system upgrade so that the next reboot will perform the
     * pending transaction.
     * @param action a {@link PackageKitGlib.OfflineAction}, e.g. {@link PackageKitGlib.OfflineAction.REBOOT}
     * @param flags bit-or of {@link PackageKitGlib.OfflineFlags}
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 1.2.5
     */
    function offline_trigger_upgrade_with_flags(
        action: OfflineAction | null,
        flags: OfflineFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    /**
     * Triggers the offline update so that the next reboot will perform the
     * pending transaction.
     * @param action a {@link PackageKitGlib.OfflineAction}, e.g. {@link PackageKitGlib.OfflineAction.REBOOT}
     * @param flags bit-or of {@link PackageKitGlib.OfflineFlags}
     * @param cancellable A {@link Gio.Cancellable} or `null`
     * @returns `true` for success, else `false` and `error` set
     * @since 1.2.5
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
     * @returns the string array, or `null` if invalid
     * @since 0.5.2
     */
    function ptr_array_to_strv(array: string[]): string[];
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param restart Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function restart_enum_from_string(restart: string): RestartEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param restart The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function restart_enum_to_string(restart: RestartEnum | null): string;
    /**
     * Converts text representation to its enumerated type bitfield
     * @param roles the enumerated constant value, e.g. "search-file;update-system"
     * @returns The enumerated type values, or 0 for invalid
     * @since 0.5.2
     */
    function role_bitfield_from_string(roles: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param roles The enumerated type values
     * @returns the enumerated constant value, e.g. "install-file;update-system"
     * @since 0.5.2
     */
    function role_bitfield_to_string(roles: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param role Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function role_enum_from_string(role: string): RoleEnum;
    /**
     * Converts a enumerated type to its localized description
     * @param role The enumerated type value
     * @returns the translated text
     * @since 0.7.2
     */
    function role_enum_to_localised_present(role: RoleEnum | null): string;
    /**
     * Converts a enumerated type to its text representation
     * @param role The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
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
     * @since 0.5.0
     */
    function sig_type_enum_to_string(sig_type: SigTypeEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param status Text describing the enumerated type
     * @returns the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
     * @since 0.5.0
     */
    function status_enum_from_string(status: string): StatusEnum;
    /**
     * @param status
     */
    function status_enum_to_localised_text(status: StatusEnum | null): string;
    /**
     * Converts a enumerated type to its text representation
     * @param status The enumerated type value
     * @returns the enumerated constant value, e.g. "available"
     * @since 0.5.0
     */
    function status_enum_to_string(status: StatusEnum | null): string;
    /**
     * Converts text representation to its enumerated type bitfield, or 0 for invalid
     * @param transaction_flags the enumerated constant value, e.g. "only-trusted;simulate"
     * @returns The enumerated type values
     * @since 0.8.1
     */
    function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield;
    /**
     * Converts a enumerated type bitfield to its text representation
     * @param transaction_flags The enumerated type values
     * @returns the enumerated constant value, e.g. "only-trusted;simulate"
     * @since 0.8.1
     */
    function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param transaction_flag Text describing the enumerated type
     * @returns the enumerated constant value, e.g. {@link PackageKitGlib.TransactionFlagEnum.SIMULATE}
     * @since 0.8.1
     */
    function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param transaction_flag The enumerated type value
     * @returns the enumerated constant value, e.g. "simulate"
     * @since 0.8.1
     */
    function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param update_state Text describing the enumerated type
     * @returns the enumerated constant value, e.g. {@link PackageKitGlib.UpdateStateEnum.STABLE}
     * @since 0.5.0
     */
    function update_state_enum_from_string(update_state: string): UpdateStateEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param update_state The enumerated type value
     * @returns the enumerated constant value, e.g. "testing"
     * @since 0.5.0
     */
    function update_state_enum_to_string(update_state: UpdateStateEnum | null): string;
    /**
     * Converts a text enumerated type to its unsigned integer representation
     * @param upgrade_kind Text describing the enumerated type
     * @returns the enumerated constant value, e.g. {@link PackageKitGlib.UpgradeKindEnum.MINIMAL}
     * @since 0.6.11
     */
    function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum;
    /**
     * Converts a enumerated type to its text representation
     * @param upgrade_kind The enumerated type value
     * @returns the enumerated constant value, e.g. "minimal"
     * @since 0.6.11
     */
    function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum | null): string;
    /**
     * @gir-type Callback
     */
    interface PackageSackFilterFunc {
        (_package: Package): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ProgressCallback {
        (progress: Progress, type: ProgressType): void;
    }
    export namespace OfflineFlags {
        export const $gtype: GObject.GType<OfflineFlags>;
    }

    /**
     * Flags to be used for the method invocations.
     * @gir-type Flags
     * @since 1.2.5
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

    namespace Category {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::cat-id': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent-id': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Category extends Source {
        static $gtype: GObject.GType<Category>;

        // Properties

        /**
         * @since 0.5.4
         */
        get cat_id(): string;
        set cat_id(val: string);
        /**
         * @since 0.5.4
         */
        get catId(): string;
        set catId(val: string);
        /**
         * @since 0.5.4
         */
        get icon(): string;
        set icon(val: string);
        /**
         * @since 0.5.4
         */
        get name(): string;
        set name(val: string);
        /**
         * @since 0.5.4
         */
        get parent_id(): string;
        set parent_id(val: string);
        /**
         * @since 0.5.4
         */
        get parentId(): string;
        set parentId(val: string);
        /**
         * @since 0.5.4
         */
        get summary(): string;
        set summary(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Category.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Category;

        // Signals

        /** @signal */
        connect<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Category.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Category.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the icon filename.
         * @returns the string value, or `null` for unset.
         */
        get_icon(): string;
        /**
         * Gets the id specific to this category.
         * @returns the string value, or `null` for unset.
         */
        get_id(): string;
        /**
         * Gets the name.
         * @returns the string value, or `null` for unset.
         */
        get_name(): string;
        /**
         * Gets the parent category id.
         * @returns the string value, or `null` for unset.
         */
        get_parent_id(): string;
        /**
         * Gets the summary.
         * @returns the string value, or `null` for unset.
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
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::background': (pspec: GObject.ParamSpec) => void;
            'notify::cache-age': (pspec: GObject.ParamSpec) => void;
            'notify::details-with-deps-size': (pspec: GObject.ParamSpec) => void;
            'notify::idle': (pspec: GObject.ParamSpec) => void;
            'notify::interactive': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * @since 0.5.3
         */
        get background(): boolean;
        set background(val: boolean);
        /**
         * The cache age in seconds, where `G_MAXUINT` means cache
         * "never expires"
         * @since 0.6.10
         */
        get cache_age(): number;
        set cache_age(val: number);
        /**
         * The cache age in seconds, where `G_MAXUINT` means cache
         * "never expires"
         * @since 0.6.10
         */
        get cacheAge(): number;
        set cacheAge(val: number);
        /**
         * @since 1.2.7
         */
        get details_with_deps_size(): boolean;
        set details_with_deps_size(val: boolean);
        /**
         * @since 1.2.7
         */
        get detailsWithDepsSize(): boolean;
        set detailsWithDepsSize(val: boolean);
        /**
         * @since 0.5.4
         */
        get idle(): boolean;
        /**
         * @since 0.5.4
         */
        get interactive(): boolean;
        set interactive(val: boolean);
        /**
         * @since 0.5.3
         */
        get locale(): string;
        set locale(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param argv
         * @param envp_out
         */
        static create_helper_argv_envp(argv: string, envp_out: string): boolean;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * We may want to agree to a EULA dialog if one is presented.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param eula_id the <literal>eula_id</literal> we are agreeing to
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * We may want to agree to a EULA dialog if one is presented.
         * @param eula_id the <literal>eula_id</literal> we are agreeing to
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        adopt(
            transaction_id: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Adopt a transaction which allows the caller to monitor the state or cancel it.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive If we should search recursively for depends
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive If we should search recursively for depends
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param res the {@link Gio.AsyncResult}
         * @returns the {@link PackageKitGlib.Results}, or `null`. Free with `g_object_unref()`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * Get a list of all categories supported.
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @returns whether the `pk_client_get_details_async()` should include dependencies    download sizes for packages, which are not installed.
         */
        get_details_with_deps_size(): boolean;
        /**
         * This method should return a list of distribution upgrades that are available.
         * It should not return updates, only major upgrades.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * This method should return a list of distribution upgrades that are available.
         * It should not return updates, only major upgrades.
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_files(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the file list (i.e. a list of files installed) for the specified package.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_old_transactions(
            number: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the old transaction list, mainly used for the transaction viewer.
         * @param number the number of past transactions to return, or 0 for all
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_packages(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the list of packages from the backend
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_progress(transaction_id: string, cancellable?: Gio.Cancellable | null): Progress;
        /**
         * Find the current state of a transaction.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_progress_async(transaction_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Progress>;
        /**
         * Find the current state of a transaction.
         * @param transaction_id a transaction ID such as "/21_ebcbdaae_data"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback_ready the function to run on completion
         */
        get_progress_async(
            transaction_id: string,
            cancellable?: Gio.Cancellable | null,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Progress> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the {@link PackageKitGlib.Progress}, or `null`. Free with `g_object_unref()`
         */
        get_progress_finish(res: Gio.AsyncResult): Progress;
        /**
         * Get the list of repositories installed on the system.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.DEVELOPMENT} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_repo_list(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the list of repositories installed on the system.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.DEVELOPMENT} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.DEVELOPMENT} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_updates(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get a list of all the packages that can be updated for all repositories.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.DEVELOPMENT} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param type the signature type, e.g. {@link PackageKitGlib.SigTypeEnum.GPG}
         * @param key_id a key ID such as "0df23df"
         * @param package_id a signature_id structure such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param type the signature type, e.g. {@link PackageKitGlib.SigTypeEnum.GPG}
         * @param key_id a key ID such as "0df23df"
         * @param package_id a signature_id structure such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * If `allow_deps` is set to `false`, and other packages would have to be removed,
         * then the transaction would fail.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param transaction_flags a transaction type bitfield
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param allow_deps if other dependent packages are allowed to be removed from the computer
         * @param autoremove if other packages installed at the same time should be tried to remove
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * If `allow_deps` is set to `false`, and other packages would have to be removed,
         * then the transaction would fail.
         * @param transaction_flags a transaction type bitfield
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param allow_deps if other dependent packages are allowed to be removed from the computer
         * @param autoremove if other packages installed at the same time should be tried to remove
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive If we should search recursively for requires
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive If we should search recursively for requires
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * Think of this as `pk_client_search_names()`, but trying much harder and
         * taking longer.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values free text to search for, for instance, "power"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        search_details(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Search all detailed summary information to try and find a keyword.
         * Think of this as `pk_client_search_names()`, but trying much harder and
         * taking longer.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values free text to search for, for instance, "power"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values file to search for, for instance, "/sbin/service"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        search_files(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Search for packages that provide a specific file.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values file to search for, for instance, "/sbin/service"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values a group enum to search for, for instance, "system-tools"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        search_groups(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Return all packages in a specific group.
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values a group enum to search for, for instance, "system-tools"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values free text to search for, for instance, "power"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values free text to search for, for instance, "power"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cache_age the cache age to set in seconds, where `G_MAXUINT` means cache "never expires"
         */
        set_cache_age(cache_age: number): void;
        /**
         * Sets whether the `pk_client_get_details_async()` should include dependencies
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param upgrade_kind a {@link PackageKitGlib.UpgradeKindEnum} such as {@link PackageKitGlib.UpgradeKindEnum.COMPLETE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param upgrade_kind a {@link PackageKitGlib.UpgradeKindEnum} such as {@link PackageKitGlib.UpgradeKindEnum.COMPLETE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values a search term such as "sound/mp3"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param filters a {@link PackageKitGlib.Bitfield} such as {@link PackageKitGlib.FilterEnum.GUI} | {@link PackageKitGlib.FilterEnum.FREE} or {@link PackageKitGlib.FilterEnum.NONE}
         * @param values a search term such as "sound/mp3"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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

    /**
     * @gir-type Class
     */
    class ClientHelper extends GObject.Object {
        static $gtype: GObject.GType<ClientHelper>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientHelper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientHelper;

        // Signals

        /** @signal */
        connect<K extends keyof ClientHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientHelper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ClientHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientHelper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ClientHelper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientHelper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns TRUE if there is an accepted connection, FALSE               otherwise.
         */
        is_active(): boolean;
        /**
         * Starts the helper process, by running the helper process and setting
         * up the socket for use.
         * @param socket_filename a socket filename that does not already exist
         * @param argv the executable, along with any arguments
         * @param envp the environment
         * @returns `true` for success
         */
        start(socket_filename: string, argv: string, envp: string): boolean;
        /**
         * Starts the helper process, by running the helper process and setting
         * up the socket for use.
         * @param socket the (bound and listening) {@link Gio.Socket} instance to use
         * @param argv the executable, along with any arguments
         * @param envp the environment
         * @returns `true` for success
         */
        start_with_socket(socket: Gio.Socket, argv: string, envp: string): boolean;
        /**
         * Stops the helper process, by killing the helper process and deleting
         * the socket.
         * @returns `true` for success
         */
        stop(): boolean;
    }

    namespace Control {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::repo-list-changed signal is emitted when the repo list may have
             * changed and the control program may have to update some UI.
             * @signal
             */
            'repo-list-changed': () => void;
            /**
             * The ::restart_schedule signal is emitted when the packagekitd service
             * has been restarted because it has been upgraded.
             * Client programs should reload themselves when it is convenient to
             * do so, as old client tools may not be compatable with the new daemon.
             * @signal
             */
            'restart-schedule': () => void;
            /**
             * The ::transaction-list-changed signal is emitted when the list
             * of transactions handled by the daemon is changed.
             * @signal
             */
            'transaction-list-changed': (arg0: string[]) => void;
            /**
             * The ::updates-changed signal is emitted when the update list may have
             * changed and the control program may have to update some UI.
             * @signal
             */
            'updates-changed': () => void;
            'notify::backend-author': (pspec: GObject.ParamSpec) => void;
            'notify::backend-description': (pspec: GObject.ParamSpec) => void;
            'notify::backend-name': (pspec: GObject.ParamSpec) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::distro-id': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::groups': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::mime-types': (pspec: GObject.ParamSpec) => void;
            'notify::network-state': (pspec: GObject.ParamSpec) => void;
            'notify::provides': (pspec: GObject.ParamSpec) => void;
            'notify::roles': (pspec: GObject.ParamSpec) => void;
            'notify::version-major': (pspec: GObject.ParamSpec) => void;
            'notify::version-micro': (pspec: GObject.ParamSpec) => void;
            'notify::version-minor': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Control extends GObject.Object {
        static $gtype: GObject.GType<Control>;

        // Properties

        /**
         * @since 0.5.2
         */
        get backend_author(): string;
        set backend_author(val: string);
        /**
         * @since 0.5.2
         */
        get backendAuthor(): string;
        set backendAuthor(val: string);
        /**
         * @since 0.5.2
         */
        get backend_description(): string;
        set backend_description(val: string);
        /**
         * @since 0.5.2
         */
        get backendDescription(): string;
        set backendDescription(val: string);
        /**
         * @since 0.5.2
         */
        get backend_name(): string;
        set backend_name(val: string);
        /**
         * @since 0.5.2
         */
        get backendName(): string;
        set backendName(val: string);
        /**
         * @since 0.5.3
         */
        get connected(): boolean;
        set connected(val: boolean);
        /**
         * @since 0.5.5
         */
        get distro_id(): string;
        set distro_id(val: string);
        /**
         * @since 0.5.5
         */
        get distroId(): string;
        set distroId(val: string);
        /**
         * @since 0.5.2
         */
        get filters(): number;
        set filters(val: number);
        /**
         * @since 0.5.2
         */
        get groups(): number;
        set groups(val: number);
        /**
         * @since 0.5.3
         */
        get locked(): boolean;
        set locked(val: boolean);
        /**
         * @since 0.8.1
         */
        get mime_types(): string[];
        set mime_types(val: string[]);
        /**
         * @since 0.8.1
         */
        get mimeTypes(): string[];
        set mimeTypes(val: string[]);
        /**
         * @since 0.5.3
         */
        get network_state(): NetworkEnum;
        set network_state(val: NetworkEnum);
        /**
         * @since 0.5.3
         */
        get networkState(): NetworkEnum;
        set networkState(val: NetworkEnum);
        /**
         * @since 0.8.8
         */
        get provides(): number;
        set provides(val: number);
        /**
         * @since 0.5.2
         */
        get roles(): number;
        set roles(val: number);
        /**
         * @since 0.5.2
         */
        get version_major(): number;
        /**
         * @since 0.5.2
         */
        get versionMajor(): number;
        /**
         * @since 0.5.2
         */
        get version_micro(): number;
        /**
         * @since 0.5.2
         */
        get versionMicro(): number;
        /**
         * @since 0.5.2
         */
        get version_minor(): number;
        /**
         * @since 0.5.2
         */
        get versionMinor(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Control.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Control.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Control;

        // Signals

        /** @signal */
        connect<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Control.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Control.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Control.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Control.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param connected
         * @virtual
         */
        vfunc_connection_changed(connected: boolean): void;
        /**
         * @param is_locked
         * @virtual
         */
        vfunc_locked(is_locked: boolean): void;
        /**
         * @virtual
         */
        vfunc_network_state_changed(): void;
        /**
         * @virtual
         */
        vfunc_repo_list_changed(): void;
        /**
         * @virtual
         */
        vfunc_restart_schedule(): void;
        /**
         * @param transaction_ids
         * @virtual
         */
        vfunc_transaction_list_changed(transaction_ids: string): void;
        /**
         * @virtual
         */
        vfunc_updates_changed(): void;

        // Methods

        /**
         * We may want to know before we run a method if we are going to be denied,
         * accepted or challenged for authentication.
         * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        can_authorize_async(action_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<AuthorizeEnum>;
        /**
         * We may want to know before we run a method if we are going to be denied,
         * accepted or challenged for authentication.
         * @param action_id The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        can_authorize_async(
            action_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<AuthorizeEnum> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the {@link PackageKitGlib.AuthorizeEnum} or {@link PackageKitGlib.AuthorizeEnum.UNKNOWN} if the method failed
         */
        can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum;
        /**
         * Gets the debugging state from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_daemon_state_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Gets the debugging state from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_daemon_state_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the debugging state from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_daemon_state_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the ID, or `null` if unset, free with `g_free()`
         */
        get_daemon_state_finish(res: Gio.AsyncResult): string;
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the properties were set correctly
         */
        get_properties(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets global properties from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_properties_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Gets global properties from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_properties_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets global properties from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_properties_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` if we set the proxy successfully
         */
        get_properties_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets a transacton ID from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_tid_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Gets a transacton ID from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_tid_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets a transacton ID from the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_tid_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the ID, or `null` if unset, free with `g_free()`
         */
        get_tid_finish(res: Gio.AsyncResult): string;
        /**
         * We may want to know how long it has been since we refreshed the cache or
         * retrieved the update list.
         * @param role the role enum, e.g. {@link PackageKitGlib.RoleEnum.GET_UPDATES}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_time_since_action_async(
            role: RoleEnum | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number>;
        /**
         * We may want to know how long it has been since we refreshed the cache or
         * retrieved the update list.
         * @param role the role enum, e.g. {@link PackageKitGlib.RoleEnum.GET_UPDATES}
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param role the role enum, e.g. {@link PackageKitGlib.RoleEnum.GET_UPDATES}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_time_since_action_async(
            role: RoleEnum | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` if the daemon serviced the request
         */
        get_time_since_action_finish(res: Gio.AsyncResult): number;
        /**
         * Gets the transaction list in progress.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns The list of transaction id's, or `null`, free with `g_strfreev()`
         */
        get_transaction_list(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Gets the transactions currently running in the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_transaction_list_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Gets the transactions currently running in the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_transaction_list_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the transactions currently running in the daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        get_transaction_list_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns A GStrv list of transaction ID's, free with `g_strfreev()`
         */
        get_transaction_list_finish(res: Gio.AsyncResult): string[];
        /**
         * Sets the network proxy to use in the daemon.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param proxy_http the HTTP proxy server
         * @param proxy_ftp the FTP proxy server
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the proxy was set correctly NOTE: This is just provided for backwards compatibility. Clients should really be using `pk_control_set_proxy2()`.
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the proxy was set correctly
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
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080", or `null`
         * @param proxy_https a HTTPS proxy string such as "username:password@server.lan:8080", or `null`
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080", or `null`
         * @param proxy_socks a SOCKS proxy string such as "server.lan:8080", or `null`
         * @param no_proxy a list of download IPs that shouldn't go through the proxy, or `null`
         * @param pac a PAC string, or `null`
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * Clients should really be using `pk_control_set_proxy2_async()`.
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080"
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        set_proxy_async(
            proxy_http: string,
            proxy_ftp: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Set a proxy on the PK daemon
         *
         * NOTE: This is just provided for backwards compatibility.
         * Clients should really be using `pk_control_set_proxy2_async()`.
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080"
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * Clients should really be using `pk_control_set_proxy2_async()`.
         * @param proxy_http a HTTP proxy string such as "username:password@server.lan:8080"
         * @param proxy_ftp a FTP proxy string such as "server.lan:8080"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        set_proxy_async(
            proxy_http: string,
            proxy_ftp: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` if we set the proxy successfully
         */
        set_proxy_finish(res: Gio.AsyncResult): boolean;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the suggestion was sent
         */
        suggest_daemon_quit(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        suggest_daemon_quit_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        suggest_daemon_quit_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Suggests to the daemon that it should quit as soon as possible.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        suggest_daemon_quit_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` if the suggestion was sent
         */
        suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean;
    }

    namespace Desktop {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Desktop extends GObject.Object {
        static $gtype: GObject.GType<Desktop>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Desktop.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Desktop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Desktop;

        // Signals

        /** @signal */
        connect<K extends keyof Desktop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Desktop.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Desktop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Desktop.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Desktop.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Desktop.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return all desktop files owned by a package, regardless if they are shown
         * in the main menu or not.
         * @param _package the package name, e.g. "gnome-power-manager"
         * @returns string array of results, free with `g_ptr_array_unref()` NOTE: This method is unused and will be removed next time the library soname changes!
         */
        get_files_for_package(_package: string): string[];
        /**
         * Returns the package name that owns the desktop file. Fast.
         * @param filename a fully qualified filename
         * @returns package name, or `null` NOTE: This method is unused and will be removed next time the library soname changes!
         */
        get_package_for_file(filename: string): string;
        /**
         * Return all desktop files owned by a package that would be shown in a menu,
         * i.e are an application
         * @param _package the package name, e.g. "gnome-power-manager"
         * @returns string array of results, free with `g_ptr_array_unref()` NOTE: This method is unused and will be removed next time the library soname changes!
         */
        get_shown_for_package(_package: string): string[];
        /**
         * This method is unused and will be removed next time the library
         * soname changes!
         * @returns `true` if opened correctly
         */
        open_database(): boolean;
    }

    namespace Details {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::download-size': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Details extends Source {
        static $gtype: GObject.GType<Details>;

        // Properties

        /**
         * @since 0.5.4
         */
        get description(): string;
        set description(val: string);
        /**
         * @since 1.2.4
         */
        get download_size(): number;
        set download_size(val: number);
        /**
         * @since 1.2.4
         */
        get downloadSize(): number;
        set downloadSize(val: number);
        /**
         * @since 0.5.4
         */
        get group(): GroupEnum;
        set group(val: GroupEnum);
        /**
         * @since 0.5.4
         */
        get license(): string;
        set license(val: string);
        /**
         * @since 0.5.4
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * @since 0.5.4
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * @since 0.5.4
         */
        get size(): number;
        set size(val: number);
        /**
         * @since 0.9.1
         */
        get summary(): string;
        set summary(val: string);
        /**
         * @since 0.5.4
         */
        get url(): string;
        set url(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Details.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Details.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Details;

        // Signals

        /** @signal */
        connect<K extends keyof Details.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Details.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Details.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Details.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Details.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Details.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            name: string;
            state: DistroUpgradeEnum;
            summary: string;
        }
    }

    /**
     * @gir-type Class
     */
    class DistroUpgrade extends Source {
        static $gtype: GObject.GType<DistroUpgrade>;

        // Properties

        /**
         * @since 0.5.4
         */
        get name(): string;
        set name(val: string);
        /**
         * @since 0.5.4
         */
        get state(): DistroUpgradeEnum;
        set state(val: DistroUpgradeEnum);
        /**
         * @since 0.5.4
         */
        get summary(): string;
        set summary(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DistroUpgrade.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DistroUpgrade.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DistroUpgrade;

        // Signals

        /** @signal */
        connect<K extends keyof DistroUpgrade.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DistroUpgrade.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DistroUpgrade.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DistroUpgrade.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DistroUpgrade.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DistroUpgrade.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the distribution identifier.
         * You use this value to call UpgradeSystem.
         * @returns the distro-id, e.g. "fedora-14"
         */
        get_id(): string;
        /**
         * Gets the status of the distribution upgrade.
         * @returns the printable name, e.g. {@link PackageKitGlib.DistroUpgradeEnum.UNSTABLE}
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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::code': (pspec: GObject.ParamSpec) => void;
            'notify::details': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            code: ErrorEnum;
            details: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Error extends Source {
        static $gtype: GObject.GType<Error>;

        // Properties

        /**
         * @since 0.5.5
         */
        get code(): ErrorEnum;
        set code(val: ErrorEnum);
        /**
         * @since 0.5.5
         */
        get details(): string;
        set details(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Error.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Error.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Error;

        // Signals

        /** @signal */
        connect<K extends keyof Error.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Error.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Error.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Error.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Error.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Error.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the error code for this error.
         * @returns a {@link PackageKitGlib.ErrorEnum}
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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::eula-id': (pspec: GObject.ParamSpec) => void;
            'notify::license-agreement': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::vendor-name': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class EulaRequired extends Source {
        static $gtype: GObject.GType<EulaRequired>;

        // Properties

        /**
         * ID for this EULA.
         * @since 0.5.4
         */
        get eula_id(): string;
        set eula_id(val: string);
        /**
         * ID for this EULA.
         * @since 0.5.4
         */
        get eulaId(): string;
        set eulaId(val: string);
        /**
         * The text of the license agreement.
         * @since 0.5.4
         */
        get license_agreement(): string;
        set license_agreement(val: string);
        /**
         * The text of the license agreement.
         * @since 0.5.4
         */
        get licenseAgreement(): string;
        set licenseAgreement(val: string);
        /**
         * PackageID this EULA is for.
         * @since 0.5.4
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * PackageID this EULA is for.
         * @since 0.5.4
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * Vendor this EULA is from.
         * @since 0.5.4
         */
        get vendor_name(): string;
        set vendor_name(val: string);
        /**
         * Vendor this EULA is from.
         * @since 0.5.4
         */
        get vendorName(): string;
        set vendorName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EulaRequired.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EulaRequired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EulaRequired;

        // Signals

        /** @signal */
        connect<K extends keyof EulaRequired.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EulaRequired.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EulaRequired.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EulaRequired.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EulaRequired.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EulaRequired.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::files': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            files: string[];
            package_id: string;
            packageId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Files extends Source {
        static $gtype: GObject.GType<Files>;

        // Properties

        /**
         * @since 0.5.4
         */
        get files(): string[];
        set files(val: string[]);
        /**
         * @since 0.5.4
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * @since 0.5.4
         */
        get packageId(): string;
        set packageId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Files.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Files.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Files;

        // Signals

        /** @signal */
        connect<K extends keyof Files.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Files.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Files.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Files.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Files.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Files.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::percentage': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            package_id: string;
            packageId: string;
            percentage: number;
            status: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ItemProgress extends Source {
        static $gtype: GObject.GType<ItemProgress>;

        // Properties

        /**
         * @since 0.8.1
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * @since 0.8.1
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * @since 0.8.1
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * @since 0.8.2
         */
        get status(): number;
        set status(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemProgress.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ItemProgress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ItemProgress;

        // Signals

        /** @signal */
        connect<K extends keyof ItemProgress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemProgress.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ItemProgress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemProgress.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ItemProgress.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ItemProgress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
         * @returns a {@link PackageKitGlib.StatusEnum}
         */
        get_status(): StatusEnum;
    }

    namespace MediaChangeRequired {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::media-id': (pspec: GObject.ParamSpec) => void;
            'notify::media-text': (pspec: GObject.ParamSpec) => void;
            'notify::media-type': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class MediaChangeRequired extends Source {
        static $gtype: GObject.GType<MediaChangeRequired>;

        // Properties

        /**
         * @since 0.5.4
         */
        get media_id(): string;
        set media_id(val: string);
        /**
         * @since 0.5.4
         */
        get mediaId(): string;
        set mediaId(val: string);
        /**
         * @since 0.5.4
         */
        get media_text(): string;
        set media_text(val: string);
        /**
         * @since 0.5.4
         */
        get mediaText(): string;
        set mediaText(val: string);
        /**
         * @since 0.5.4
         */
        get media_type(): MediaTypeEnum;
        set media_type(val: MediaTypeEnum);
        /**
         * @since 0.5.4
         */
        get mediaType(): MediaTypeEnum;
        set mediaType(val: MediaTypeEnum);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaChangeRequired.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaChangeRequired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaChangeRequired;

        // Signals

        /** @signal */
        connect<K extends keyof MediaChangeRequired.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaChangeRequired.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaChangeRequired.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaChangeRequired.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaChangeRequired.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaChangeRequired.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Package {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            /**
             * The ::changed signal is emitted when the package data may have changed.
             * @signal
             */
            changed: () => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::update-bugzilla-urls': (pspec: GObject.ParamSpec) => void;
            'notify::update-changelog': (pspec: GObject.ParamSpec) => void;
            'notify::update-cve-urls': (pspec: GObject.ParamSpec) => void;
            'notify::update-issued': (pspec: GObject.ParamSpec) => void;
            'notify::update-obsoletes': (pspec: GObject.ParamSpec) => void;
            'notify::update-restart': (pspec: GObject.ParamSpec) => void;
            'notify::update-severity': (pspec: GObject.ParamSpec) => void;
            'notify::update-state': (pspec: GObject.ParamSpec) => void;
            'notify::update-text': (pspec: GObject.ParamSpec) => void;
            'notify::update-updated': (pspec: GObject.ParamSpec) => void;
            'notify::update-updates': (pspec: GObject.ParamSpec) => void;
            'notify::update-vendor-urls': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Package extends Source {
        static $gtype: GObject.GType<Package>;

        // Properties

        /**
         * @since 0.5.4
         */
        get description(): string;
        set description(val: string);
        /**
         * @since 0.5.4
         */
        get group(): GroupEnum;
        set group(val: GroupEnum);
        /**
         * @since 0.5.4
         */
        get info(): InfoEnum;
        set info(val: InfoEnum);
        /**
         * @since 0.5.4
         */
        get license(): string;
        set license(val: string);
        /**
         * @since 0.5.4
         */
        get package_id(): string;
        /**
         * @since 0.5.4
         */
        get packageId(): string;
        /**
         * @since 0.5.4
         */
        get size(): number;
        set size(val: number);
        /**
         * @since 0.5.4
         */
        get summary(): string;
        set summary(val: string);
        /**
         * @since 0.8.1
         */
        get update_bugzilla_urls(): string[];
        set update_bugzilla_urls(val: string[]);
        /**
         * @since 0.8.1
         */
        get updateBugzillaUrls(): string[];
        set updateBugzillaUrls(val: string[]);
        /**
         * @since 0.5.4
         */
        get update_changelog(): string;
        set update_changelog(val: string);
        /**
         * @since 0.5.4
         */
        get updateChangelog(): string;
        set updateChangelog(val: string);
        /**
         * @since 0.8.1
         */
        get update_cve_urls(): string[];
        set update_cve_urls(val: string[]);
        /**
         * @since 0.8.1
         */
        get updateCveUrls(): string[];
        set updateCveUrls(val: string[]);
        /**
         * @since 0.5.4
         */
        get update_issued(): string;
        set update_issued(val: string);
        /**
         * @since 0.5.4
         */
        get updateIssued(): string;
        set updateIssued(val: string);
        /**
         * @since 0.5.4
         */
        get update_obsoletes(): string;
        set update_obsoletes(val: string);
        /**
         * @since 0.5.4
         */
        get updateObsoletes(): string;
        set updateObsoletes(val: string);
        /**
         * @since 0.5.4
         */
        get update_restart(): RestartEnum;
        set update_restart(val: RestartEnum);
        /**
         * @since 0.5.4
         */
        get updateRestart(): RestartEnum;
        set updateRestart(val: RestartEnum);
        /**
         * Can be one of {@link PackageKitGlib.InfoEnum.UNKNOWN}, {@link PackageKitGlib.InfoEnum.LOW}, {@link PackageKitGlib.InfoEnum.NORMAL},
         * {@link PackageKitGlib.InfoEnum.IMPORTANT} or {@link PackageKitGlib.InfoEnum.CRITICAL}.
         * @since 1.2.4
         */
        get update_severity(): InfoEnum;
        set update_severity(val: InfoEnum);
        /**
         * Can be one of {@link PackageKitGlib.InfoEnum.UNKNOWN}, {@link PackageKitGlib.InfoEnum.LOW}, {@link PackageKitGlib.InfoEnum.NORMAL},
         * {@link PackageKitGlib.InfoEnum.IMPORTANT} or {@link PackageKitGlib.InfoEnum.CRITICAL}.
         * @since 1.2.4
         */
        get updateSeverity(): InfoEnum;
        set updateSeverity(val: InfoEnum);
        /**
         * @since 0.5.4
         */
        get update_state(): UpdateStateEnum;
        set update_state(val: UpdateStateEnum);
        /**
         * @since 0.5.4
         */
        get updateState(): UpdateStateEnum;
        set updateState(val: UpdateStateEnum);
        /**
         * @since 0.5.4
         */
        get update_text(): string;
        set update_text(val: string);
        /**
         * @since 0.5.4
         */
        get updateText(): string;
        set updateText(val: string);
        /**
         * @since 0.5.4
         */
        get update_updated(): string;
        set update_updated(val: string);
        /**
         * @since 0.5.4
         */
        get updateUpdated(): string;
        set updateUpdated(val: string);
        /**
         * @since 0.5.4
         */
        get update_updates(): string;
        set update_updates(val: string);
        /**
         * @since 0.5.4
         */
        get updateUpdates(): string;
        set updateUpdates(val: string);
        /**
         * @since 0.8.1
         */
        get update_vendor_urls(): string[];
        set update_vendor_urls(val: string[]);
        /**
         * @since 0.8.1
         */
        get updateVendorUrls(): string[];
        set updateVendorUrls(val: string[]);
        /**
         * @since 0.5.4
         */
        get url(): string;
        set url(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Package.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Package.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Package;

        // Signals

        /** @signal */
        connect<K extends keyof Package.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Package.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Package.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Package.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Package.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Package.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Do the {@link PackageKitGlib.Package}'s have the same ID.
         * @param package2 a valid {@link PackageKitGlib.Package} instance
         * @returns `true` if the packages have the same package_id, info and summary.
         */
        equal(package2: Package): boolean;
        /**
         * Do the {@link PackageKitGlib.Package}'s have the same ID.
         * @param package2 a valid {@link PackageKitGlib.Package} instance
         * @returns `true` if the packages have the same package_id.
         */
        equal_id(package2: Package): boolean;
        /**
         * Gets the package arch.
         * @returns the arch, or `null` if unset
         */
        get_arch(): string;
        /**
         * Gets the package data, which is usually the repository ID that contains the
         * package. Special ID's include "installed" for installed packages, and "local"
         * for local packages that exist on disk but not in a repository.
         * @returns the data, or `null` if unset
         */
        get_data(): string;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Gets the package object ID
         * @returns the ID, or `null` if unset
         */
        get_id(): string;
        /**
         * Gets the package object ID
         * @returns the {@link PackageKitGlib.InfoEnum}
         */
        get_info(): InfoEnum;
        /**
         * Gets the package name.
         * @returns the name, or `null` if unset
         */
        get_name(): string;
        /**
         * Gets the package object ID
         * @returns the summary, or `null` if unset
         */
        get_summary(): string;
        /**
         * Returns the `package` update severity. Can be one of {@link PackageKitGlib.InfoEnum.UNKNOWN},
         * {@link PackageKitGlib.InfoEnum.LOW}, {@link PackageKitGlib.InfoEnum.NORMAL}, {@link PackageKitGlib.InfoEnum.IMPORTANT} or
         * {@link PackageKitGlib.InfoEnum.CRITICAL}.
         * @returns the `package` update severity, if known.
         */
        get_update_severity(): InfoEnum;
        /**
         * Gets the package version.
         * @returns the version, or `null` if unset
         */
        get_version(): string;
        /**
         * Parses the data to populate the {@link PackageKitGlib.Package}.
         * @param data the data describing the package
         * @returns `true` if the data was parsed correcty
         */
        parse(data: string): boolean;
        /**
         * Prints details about the package to standard out.
         */
        print(): void;
        /**
         * Sets the package object to have the given ID
         * @param package_id the valid package_id
         * @returns `true` if the package_id was set
         */
        set_id(package_id: string): boolean;
        /**
         * Sets the package info enum.
         * @param info the {@link PackageKitGlib.InfoEnum}
         */
        set_info(info: InfoEnum | null): void;
        /**
         * Sets the package summary.
         * @param summary the package summary
         */
        set_summary(summary: string): void;
        /**
         * Set an update severity for the `package`. The `update_severity` can be
         * one of {@link PackageKitGlib.InfoEnum.UNKNOWN}, {@link PackageKitGlib.InfoEnum.LOW}, {@link PackageKitGlib.InfoEnum.NORMAL},
         * {@link PackageKitGlib.InfoEnum.IMPORTANT} or {@link PackageKitGlib.InfoEnum.CRITICAL}.
         * @param update_severity a {@link PackageKitGlib.InfoEnum}
         */
        set_update_severity(update_severity: InfoEnum | null): void;
    }

    namespace PackageSack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PackageSack extends GObject.Object {
        static $gtype: GObject.GType<PackageSack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PackageSack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PackageSack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PackageSack;

        // Signals

        /** @signal */
        connect<K extends keyof PackageSack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PackageSack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PackageSack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PackageSack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PackageSack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PackageSack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Adds a package to the sack.
         * @param _package a valid {@link PackageKitGlib.Package} instance
         * @returns `true` if the package was added to the sack
         */
        add_package(_package: Package): boolean;
        /**
         * Adds a package reference to the sack.
         * @param package_id a package_id descriptor
         * @returns `true` if the package was added to the sack
         */
        add_package_by_id(package_id: string): boolean;
        /**
         * Adds packages from package-list file to a {@link PackageKitGlib.PackageSack}.
         * @param file a valid package-list file
         * @returns `true` if there were no errors.
         */
        add_packages_from_file(file: Gio.File): boolean;
        /**
         * Empty all the packages from the sack
         */
        clear(): void;
        /**
         * Returns a new package sack which only matches packages that return `true`
         * from the filter function.
         * @param filter_cb a {@link PackageKitGlib.PackageSackFilterFunc}, which returns `true` for the {@link PackageKitGlib.Package}'s to add
         * @returns a new {@link PackageKitGlib.PackageSack}, free with `g_object_unref()`
         */
        filter(filter_cb: PackageSackFilterFunc): PackageSack;
        /**
         * Returns a new package sack which only matches packages that match the
         * specified info enum value.
         * @param info a {@link PackageKitGlib.InfoEnum} value to match
         * @returns a new {@link PackageKitGlib.PackageSack}, free with `g_object_unref()`
         */
        filter_by_info(info: InfoEnum | null): PackageSack;
        /**
         * Finds a package in a sack from reference. As soon as one package is found
         * the search is stopped.
         * @param package_id a package_id descriptor
         * @returns the {@link PackageKitGlib.Package} object, or `null` if unfound. Free with `g_object_unref()`
         */
        find_by_id(package_id: string): Package;
        /**
         * Finds a package in a sack by package name and architecture. As soon as one
         * package is found the search is stopped.
         * @param package_id a package_id descriptor
         * @returns the {@link PackageKitGlib.Package} object, or `null` if not found.
         */
        find_by_id_name_arch(package_id: string): Package;
        /**
         * Gets the package array from the sack
         * @returns A {@link GLib.PtrArray}, free with `g_ptr_array_unref()`.
         */
        get_array(): Package[];
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the properties were set correctly
         */
        get_details(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Merges in details about packages.
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @returns the number of packages in the sack, free with `g_strfreev()`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the properties were set correctly
         */
        get_update_detail(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Merges in update details about packages.
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        merge_generic_finish(res: Gio.AsyncResult): boolean;
        /**
         * Removes from the package sack any packages that return `false` from the filter
         * function.
         * @param filter_cb a {@link PackageKitGlib.PackageSackFilterFunc}, which returns `true` for the {@link PackageKitGlib.Package}'s to retain
         * @returns `true` if a package was removed from the sack
         */
        remove_by_filter(filter_cb: PackageSackFilterFunc): boolean;
        /**
         * Removes a package reference from the sack. The pointers have to match exactly.
         * @param _package a valid {@link PackageKitGlib.Package} instance
         * @returns `true` if the package was removed from the sack
         */
        remove_package(_package: Package): boolean;
        /**
         * Removes a package reference from the sack. As soon as one package is removed
         * the search is stopped.
         * @param package_id a package_id descriptor
         * @returns `true` if the package was removed from the sack
         */
        remove_package_by_id(package_id: string): boolean;
        /**
         * Gets the properties the daemon supports.
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` if the properties were set correctly
         */
        resolve(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Merges in details about packages using resolve.
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * Write the contents of a {@link PackageKitGlib.PackageSack} to a package-list file.
         * @param file a valid package-list file
         * @returns `true` if there were no errors.
         */
        to_file(file: Gio.File): boolean;
    }

    namespace Progress {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::allow-cancel': (pspec: GObject.ParamSpec) => void;
            'notify::caller-active': (pspec: GObject.ParamSpec) => void;
            'notify::download-size-remaining': (pspec: GObject.ParamSpec) => void;
            'notify::elapsed-time': (pspec: GObject.ParamSpec) => void;
            'notify::item-progress': (pspec: GObject.ParamSpec) => void;
            'notify::package': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::percentage': (pspec: GObject.ParamSpec) => void;
            'notify::remaining-time': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::speed': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-flags': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Progress extends GObject.Object {
        static $gtype: GObject.GType<Progress>;

        // Properties

        /**
         * `true` if this transaction can be cancelled.
         * @since 0.5.2
         */
        get allow_cancel(): boolean;
        set allow_cancel(val: boolean);
        /**
         * `true` if this transaction can be cancelled.
         * @since 0.5.2
         */
        get allowCancel(): boolean;
        set allowCancel(val: boolean);
        /**
         * `true` if the transaction caller is still connected.
         * @since 0.5.2
         */
        get caller_active(): boolean;
        set caller_active(val: boolean);
        /**
         * `true` if the transaction caller is still connected.
         * @since 0.5.2
         */
        get callerActive(): boolean;
        set callerActive(val: boolean);
        /**
         * Number of bytes remaining to download.
         * @since 0.8.0
         */
        get download_size_remaining(): number;
        set download_size_remaining(val: number);
        /**
         * Number of bytes remaining to download.
         * @since 0.8.0
         */
        get downloadSizeRemaining(): number;
        set downloadSizeRemaining(val: number);
        /**
         * Amount of time the transaction has taken in seconds.
         * @since 0.5.2
         */
        get elapsed_time(): number;
        set elapsed_time(val: number);
        /**
         * Amount of time the transaction has taken in seconds.
         * @since 0.5.2
         */
        get elapsedTime(): number;
        set elapsedTime(val: number);
        /**
         * Item progress associated with this transaction.
         * @since 0.8.1
         */
        get item_progress(): ItemProgress;
        set item_progress(val: ItemProgress);
        /**
         * Item progress associated with this transaction.
         * @since 0.8.1
         */
        get itemProgress(): ItemProgress;
        set itemProgress(val: ItemProgress);
        /**
         * The package this transaction is acting on.
         * @since 0.5.3
         */
        get package(): Package;
        set package(val: Package);
        /**
         * Package ID this transaction is acting on.
         * @since 0.5.2
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * Package ID this transaction is acting on.
         * @since 0.5.2
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * Percentage complete of this transaction.
         * @since 0.5.2
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         * @since 0.5.2
         */
        get remaining_time(): number;
        set remaining_time(val: number);
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         * @since 0.5.2
         */
        get remainingTime(): number;
        set remainingTime(val: number);
        /**
         * Role of this transaction.
         * @since 0.5.2
         */
        get role(): number;
        set role(val: number);
        /**
         * The D-Bus name of the client that started this transaction.
         * @since 1.2.6
         */
        get sender(): string;
        set sender(val: string);
        /**
         * Transaction speed in bits per second or 0 if unknown.
         * @since 0.5.2
         */
        get speed(): number;
        set speed(val: number);
        /**
         * Status of this transaction.
         * @since 0.5.2
         */
        get status(): number;
        set status(val: number);
        /**
         * A {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} associated with this transaction.
         * @since 0.8.8
         */
        get transaction_flags(): number;
        set transaction_flags(val: number);
        /**
         * A {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} associated with this transaction.
         * @since 0.8.8
         */
        get transactionFlags(): number;
        set transactionFlags(val: number);
        /**
         * ID used by this transaction.
         * @since 0.5.2
         */
        get transaction_id(): string;
        set transaction_id(val: string);
        /**
         * ID used by this transaction.
         * @since 0.5.2
         */
        get transactionId(): string;
        set transactionId(val: string);
        /**
         * The UID that started this transaction.
         * @since 0.5.2
         */
        get uid(): number;
        set uid(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Progress.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Progress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Progress;

        // Signals

        /** @signal */
        connect<K extends keyof Progress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Progress.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Progress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Progress.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Progress.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Progress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get if this transaction can be cancelled.
         * @returns `true` if progress can be cancelled.
         */
        get_allow_cancel(): boolean;
        /**
         * Get if the transaction caller is connected.
         * @returns `true` if the transaction caller is still connected.
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
         * @returns a {@link PackageKitGlib.ItemProgress}
         */
        get_item_progress(): ItemProgress;
        /**
         * Get the package this transaction is acting on.
         * @returns a {@link PackageKitGlib.Package}
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
         * @returns a {@link PackageKitGlib.RoleEnum}
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
         * @returns a {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} values.
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
         * @param allow_cancel `true` if this transaction can be cancelled.
         * @returns `true` if value changed.
         */
        set_allow_cancel(allow_cancel: boolean): boolean;
        /**
         * Set if the transaction caller is connected.
         * @param caller_active `true` if the transaction caller is still connected.
         * @returns `true` if value changed.
         */
        set_caller_active(caller_active: boolean): boolean;
        /**
         * Set the number of bytes remaining to download.
         * @param download_size_remaining number of bytes remaining to download.
         * @returns `true` if value changed.
         */
        set_download_size_remaining(download_size_remaining: number): boolean;
        /**
         * Set the amount of time the transaction has taken.
         * @param elapsed_time time in seconds
         * @returns `true` if value changed.
         */
        set_elapsed_time(elapsed_time: number): boolean;
        /**
         * Set the item progress associated with this transaction.
         * @param item_progress a {@link PackageKitGlib.ItemProgress}
         * @returns `true` if value changed.
         */
        set_item_progress(item_progress: ItemProgress): boolean;
        /**
         * Set the package this transaction is acting on.
         * @param _package a {@link PackageKitGlib.Package}
         * @returns `true` if value changed.
         */
        set_package(_package: Package): boolean;
        /**
         * Set the package ID this transaction is acting on.
         * @param package_id a PackageID
         * @returns `true` if value changed.
         */
        set_package_id(package_id: string): boolean;
        /**
         * Set the percentage complete of this transaction.
         * @param percentage a percentage value (0-100)
         * @returns `true` if value changed.
         */
        set_percentage(percentage: number): boolean;
        /**
         * Set the amount of time the transaction will take to complete.
         * @param remaining_time time in seconds or 0 if unknown.
         * @returns `true` if value changed.
         */
        set_remaining_time(remaining_time: number): boolean;
        /**
         * Set the role of this transaction.
         * @param role a {@link PackageKitGlib.RoleEnum}
         * @returns `true` if value changed.
         */
        set_role(role: RoleEnum | null): boolean;
        /**
         * Set the D-Bus name of the client that started this transaction.
         * @param bus_name a D-Bus name
         * @returns `true` if value changed.
         */
        set_sender(bus_name: string): boolean;
        /**
         * Set the speed of this transaction.
         * @param speed speed in bits per second or 0 if unknown
         * @returns `true` if value changed.
         */
        set_speed(speed: number): boolean;
        /**
         * Set the status of this transaction.
         * @param status a {@link PackageKitGlib.StatusEnum}
         * @returns `true` if value changed.
         */
        set_status(status: StatusEnum | null): boolean;
        /**
         * Set the flags associated with this transaction.
         * @param transaction_flags a {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} values.
         * @returns `true` if value changed.
         */
        set_transaction_flags(transaction_flags: number): boolean;
        /**
         * Set the ID used by this transaction.
         * @param transaction_id a transaction ID.
         * @returns `true` if value changed.
         */
        set_transaction_id(transaction_id: string): boolean;
        /**
         * Set the UID that started this transaction.
         * @param uid a UID
         * @returns `true` if value changed.
         */
        set_uid(uid: number): boolean;
    }

    namespace RepoDetail {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::repo-id': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            description: string;
            enabled: boolean;
            repo_id: string;
            repoId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class RepoDetail extends Source {
        static $gtype: GObject.GType<RepoDetail>;

        // Properties

        /**
         * @since 0.5.4
         */
        get description(): string;
        set description(val: string);
        /**
         * @since 0.5.4
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * @since 0.5.4
         */
        get repo_id(): string;
        set repo_id(val: string);
        /**
         * @since 0.5.4
         */
        get repoId(): string;
        set repoId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RepoDetail.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RepoDetail.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RepoDetail;

        // Signals

        /** @signal */
        connect<K extends keyof RepoDetail.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RepoDetail.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RepoDetail.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RepoDetail.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RepoDetail.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RepoDetail.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the repository description.
         * @returns string ID, e.g. "Fedora 20 - i386"
         */
        get_description(): string;
        /**
         * Gets the repository enabled status.
         * @returns `true` for enabled
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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::key-fingerprint': (pspec: GObject.ParamSpec) => void;
            'notify::key-id': (pspec: GObject.ParamSpec) => void;
            'notify::key-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::key-url': (pspec: GObject.ParamSpec) => void;
            'notify::key-userid': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::repository-name': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class RepoSignatureRequired extends Source {
        static $gtype: GObject.GType<RepoSignatureRequired>;

        // Properties

        /**
         * @since 0.5.4
         */
        get key_fingerprint(): string;
        set key_fingerprint(val: string);
        /**
         * @since 0.5.4
         */
        get keyFingerprint(): string;
        set keyFingerprint(val: string);
        /**
         * @since 0.5.4
         */
        get key_id(): string;
        set key_id(val: string);
        /**
         * @since 0.5.4
         */
        get keyId(): string;
        set keyId(val: string);
        /**
         * @since 0.5.4
         */
        get key_timestamp(): string;
        set key_timestamp(val: string);
        /**
         * @since 0.5.4
         */
        get keyTimestamp(): string;
        set keyTimestamp(val: string);
        /**
         * @since 0.5.4
         */
        get key_url(): string;
        set key_url(val: string);
        /**
         * @since 0.5.4
         */
        get keyUrl(): string;
        set keyUrl(val: string);
        /**
         * @since 0.5.4
         */
        get key_userid(): string;
        set key_userid(val: string);
        /**
         * @since 0.5.4
         */
        get keyUserid(): string;
        set keyUserid(val: string);
        /**
         * @since 0.5.4
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * @since 0.5.4
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * @since 0.5.4
         */
        get repository_name(): string;
        set repository_name(val: string);
        /**
         * @since 0.5.4
         */
        get repositoryName(): string;
        set repositoryName(val: string);
        /**
         * @since 0.5.4
         */
        get type(): SigTypeEnum;
        set type(val: SigTypeEnum);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RepoSignatureRequired.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RepoSignatureRequired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RepoSignatureRequired;

        // Signals

        /** @signal */
        connect<K extends keyof RepoSignatureRequired.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RepoSignatureRequired.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RepoSignatureRequired.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RepoSignatureRequired.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RepoSignatureRequired.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RepoSignatureRequired.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RequireRestart {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::restart': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            package_id: string;
            packageId: string;
            restart: RestartEnum;
        }
    }

    /**
     * @gir-type Class
     */
    class RequireRestart extends Source {
        static $gtype: GObject.GType<RequireRestart>;

        // Properties

        /**
         * @since 0.5.4
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * @since 0.5.4
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * @since 0.5.4
         */
        get restart(): RestartEnum;
        set restart(val: RestartEnum);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RequireRestart.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RequireRestart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RequireRestart;

        // Signals

        /** @signal */
        connect<K extends keyof RequireRestart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RequireRestart.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RequireRestart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RequireRestart.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RequireRestart.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RequireRestart.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Results {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::inputs': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            inputs: number;
            progress: Progress;
            role: RoleEnum;
            transaction_flags: number;
            transactionFlags: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Results extends GObject.Object {
        static $gtype: GObject.GType<Results>;

        // Properties

        /**
         * @since 0.5.3
         */
        get inputs(): number;
        set inputs(val: number);
        /**
         * @since 0.5.3
         */
        get progress(): Progress;
        set progress(val: Progress);
        /**
         * The {@link PackageKitGlib.RoleEnum} or {@link PackageKitGlib.RoleEnum.UNKNOWN} if not set
         * @since 0.5.2
         */
        get role(): RoleEnum;
        set role(val: RoleEnum);
        /**
         * A {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} for this result.
         * @since 0.8.1
         */
        get transaction_flags(): number;
        set transaction_flags(val: number);
        /**
         * A {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} for this result.
         * @since 0.8.1
         */
        get transactionFlags(): number;
        set transactionFlags(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Results.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Results.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Results;

        // Signals

        /** @signal */
        connect<K extends keyof Results.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Results.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Results.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Results.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Results.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Results.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a category item to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_category(item: Category): boolean;
        /**
         * Adds some package details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_details(item: Details): boolean;
        /**
         * Adds a distribution upgrade item to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_distro_upgrade(item: DistroUpgrade): boolean;
        /**
         * Adds some EULA details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_eula_required(item: EulaRequired): boolean;
        /**
         * Adds some files details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_files(item: Files): boolean;
        /**
         * Adds some media change details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_media_change_required(item: MediaChangeRequired): boolean;
        /**
         * Adds a package to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_package(item: Package): boolean;
        /**
         * Adds some repository details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_repo_detail(item: RepoDetail): boolean;
        /**
         * Adds some repository signature details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_repo_signature_required(item: RepoSignatureRequired): boolean;
        /**
         * Adds a require restart item to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_require_restart(item: RequireRestart): boolean;
        /**
         * Adds a transaction item to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_transaction(item: TransactionPast): boolean;
        /**
         * Adds some update details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        add_update_detail(item: UpdateDetail): boolean;
        /**
         * Gets the categories from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.Category}'s, free with `g_ptr_array_unref()`.
         */
        get_category_array(): Category[];
        /**
         * Gets the package details from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.Details}'s, free with `g_ptr_array_unref()`.
         */
        get_details_array(): Details[];
        /**
         * Gets the distribution upgrades from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.DistroUpgrade}'s, free with `g_ptr_array_unref()`.
         */
        get_distro_upgrade_array(): DistroUpgrade[];
        /**
         * Gets the last error code from the transaction.
         * @returns A {@link PackageKitGlib.Error}, or `null`, free with `g_object_unref()`
         */
        get_error_code(): Error;
        /**
         * Gets the eulas required from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.EulaRequired}'s, free with `g_ptr_array_unref()`.
         */
        get_eula_required_array(): EulaRequired[];
        /**
         * Gets the exit enum. You probably don't want to be using this function, and
         * instead using the much more useful `pk_results_get_error_code()` function.
         * @returns The {@link PackageKitGlib.ExitEnum} or {@link PackageKitGlib.ExitEnum.UNKNOWN} for error or if it was not set
         */
        get_exit_code(): ExitEnum;
        /**
         * Gets the files from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.Files}'s, free with `g_ptr_array_unref()`.
         */
        get_files_array(): Files[];
        /**
         * Gets the media changes required from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.MediaChangeRequired}'s, free with `g_ptr_array_unref()`.
         */
        get_media_change_required_array(): MediaChangeRequired[];
        /**
         * Gets the packages from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.Package}'s, free with `g_ptr_array_unref()`.
         */
        get_package_array(): Package[];
        /**
         * Gets a package sack from the transaction.
         * @returns A {@link PackageKitGlib.PackageSack} of data, `g_object_unref()` to free.
         */
        get_package_sack(): PackageSack;
        /**
         * Gets the repository details from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.RepoDetail}'s, free with `g_ptr_array_unref()`.
         */
        get_repo_detail_array(): RepoDetail[];
        /**
         * Gets the repository signatures required from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.RepoSignatureRequired}'s, free with `g_ptr_array_unref()`.
         */
        get_repo_signature_required_array(): RepoSignatureRequired[];
        /**
         * Gets the require restarts from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.RequireRestart}'s, free with `g_ptr_array_unref()`.
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
         * @returns a {@link PackageKitGlib.RestartEnum} value, e.g. PK_RESTART_ENUM_SYSTEM
         */
        get_require_restart_worst(): RestartEnum;
        /**
         * Gets the role that produced these results.
         * @returns The {@link PackageKitGlib.RoleEnum} or {@link PackageKitGlib.RoleEnum.UNKNOWN} if not set
         */
        get_role(): RoleEnum;
        /**
         * Gets the transactions from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.TransactionPast}'s, free with `g_ptr_array_unref()`.
         */
        get_transaction_array(): TransactionPast[];
        /**
         * Gets the transaction flag for these results.
         * @returns a {@link PackageKitGlib.Bitfield} containing {@link PackageKitGlib.TransactionFlagEnum} 0 if not set
         */
        get_transaction_flags(): Bitfield;
        /**
         * Gets the update details from the transaction.
         * @returns A {@link GLib.PtrArray} array of {@link PackageKitGlib.UpdateDetail}'s, free with `g_ptr_array_unref()`.
         */
        get_update_detail_array(): UpdateDetail[];
        /**
         * Adds some error details to the results set.
         * @param item the object to add to the array
         * @returns `true` if the value was set
         */
        set_error_code(item: Error): boolean;
        /**
         * Sets the results object to have the given exit code.
         * @param exit_enum the exit code
         * @returns `true` if the value was set
         */
        set_exit_code(exit_enum: ExitEnum | null): boolean;
        /**
         * Sets the results object to have the given role enum.
         * @param role the role enum
         * @returns `true` if the value was set
         */
        set_role(role: RoleEnum | null): boolean;
    }

    namespace Source {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            role: RoleEnum;
            transaction_id: string;
            transactionId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Source extends GObject.Object {
        static $gtype: GObject.GType<Source>;

        // Properties

        /**
         * @since 0.6.0
         */
        get role(): RoleEnum;
        set role(val: RoleEnum);
        /**
         * @since 0.6.0
         */
        get transaction_id(): string;
        set transaction_id(val: string);
        /**
         * @since 0.6.0
         */
        get transactionId(): string;
        set transactionId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Source.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Source.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Source;

        // Signals

        /** @signal */
        connect<K extends keyof Source.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Source.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Source.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Source.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Source.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Source.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Task {
        // Signal signatures
        interface SignalSignatures extends Client.SignalSignatures {
            'notify::allow-downgrade': (pspec: GObject.ParamSpec) => void;
            'notify::allow-reinstall': (pspec: GObject.ParamSpec) => void;
            'notify::only-download': (pspec: GObject.ParamSpec) => void;
            'notify::only-trusted': (pspec: GObject.ParamSpec) => void;
            'notify::simulate': (pspec: GObject.ParamSpec) => void;
            'notify::background': (pspec: GObject.ParamSpec) => void;
            'notify::cache-age': (pspec: GObject.ParamSpec) => void;
            'notify::details-with-deps-size': (pspec: GObject.ParamSpec) => void;
            'notify::idle': (pspec: GObject.ParamSpec) => void;
            'notify::interactive': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Task extends Client {
        static $gtype: GObject.GType<Task>;

        // Properties

        /**
         * `true` if package downgrades are allowed.
         * @since 1.0.2
         */
        get allow_downgrade(): boolean;
        set allow_downgrade(val: boolean);
        /**
         * `true` if package downgrades are allowed.
         * @since 1.0.2
         */
        get allowDowngrade(): boolean;
        set allowDowngrade(val: boolean);
        /**
         * `true` if package reinstallation shall be allowed during transaction.
         * @since 1.0.2
         */
        get allow_reinstall(): boolean;
        set allow_reinstall(val: boolean);
        /**
         * `true` if package reinstallation shall be allowed during transaction.
         * @since 1.0.2
         */
        get allowReinstall(): boolean;
        set allowReinstall(val: boolean);
        /**
         * `true` if we are just preparing the transaction for later.
         * @since 0.8.1
         */
        get only_download(): boolean;
        set only_download(val: boolean);
        /**
         * `true` if we are just preparing the transaction for later.
         * @since 0.8.1
         */
        get onlyDownload(): boolean;
        set onlyDownload(val: boolean);
        /**
         * `true` if only authenticated packages should be allowed in the transaction.
         * @since 0.9.5
         */
        get only_trusted(): boolean;
        set only_trusted(val: boolean);
        /**
         * `true` if only authenticated packages should be allowed in the transaction.
         * @since 0.9.5
         */
        get onlyTrusted(): boolean;
        set onlyTrusted(val: boolean);
        /**
         * `true` if we are simulating.
         * @since 0.5.2
         */
        get simulate(): boolean;
        set simulate(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Task.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Task;

        // Signals

        /** @signal */
        connect<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Task.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param request
         * @param results
         * @virtual
         */
        vfunc_eula_question(request: number, results: Results): void;
        /**
         * @param request
         * @param results
         * @virtual
         */
        vfunc_key_question(request: number, results: Results): void;
        /**
         * @param request
         * @param results
         * @virtual
         */
        vfunc_media_change_question(request: number, results: Results): void;
        /**
         * @param request
         * @param results
         * @virtual
         */
        vfunc_repair_question(request: number, results: Results): void;
        /**
         * @param request
         * @param results
         * @virtual
         */
        vfunc_simulate_question(request: number, results: Results): void;
        /**
         * @param request
         * @param results
         * @virtual
         */
        vfunc_untrusted_question(request: number, results: Results): void;

        // Methods

        /**
         * Get the list of dependant packages.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param recursive if we should recurse to packages that depend on other packages
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        download_packages_sync(
            package_ids: string[],
            directory: string,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns The {@link PackageKitGlib.Results} of the transaction.
         */
        generic_finish(res: Gio.AsyncResult): Results;
        /**
         * Gets if we are allow packages to be downgraded.
         * @returns `true` if package downgrades are allowed
         */
        get_allow_downgrade(): boolean;
        /**
         * Gets if we allow packages to be reinstalled.
         * @returns `true` if package reinstallation is allowed
         */
        get_allow_reinstall(): boolean;
        /**
         * Get the categories available.
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * Gets details about packages.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_details_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the files in a package.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_files_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets if we are just preparing the transaction for later.
         * @returns `true` if only downloading
         */
        get_only_download(): boolean;
        /**
         * Gets if we allow only authenticated packages in the transactoin.
         * @returns `true` if we allow only authenticated packages
         */
        get_only_trusted(): boolean;
        /**
         * Gets the list of packages.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_packages_sync(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Get the list of available repositories.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_repo_list_sync(
            filters: Bitfield,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets if we are simulating.
         * @returns `true` if we are simulating
         */
        get_simulate(): boolean;
        /**
         * Gets details about updates.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        get_update_detail_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Gets the update lists.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_files_async(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with PackageKitGlib.Client.install_files_async
        install_files_async(...args: never[]): any;
        /**
         * Install a file locally, and get the deps from the repositories.
         * This is useful for double clicking on a .rpm or .deb file.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        install_files_sync(
            files: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Merges in details about packages using resolve.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        install_packages_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with PackageKitGlib.Client.install_packages_async
        install_packages_async(...args: never[]): any;
        /**
         * Install a package of the newest and most correct version.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        install_packages_sync(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Refresh the package cache.
         * @param force if the metadata should be deleted and re-downloaded even if it is correct
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        refresh_cache_sync(
            force: boolean,
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * Remove a package (optionally with dependancies) from the system.
         * If `allow_deps` is set to `false`, and other packages would have to be removed,
         * then the transaction would fail.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param allow_deps if other dependent packages are allowed to be removed from the computer
         * @param autoremove if other packages installed at the same time should be tried to remove
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
        /**
         * @param args
         */
        // Conflicted with PackageKitGlib.Client.remove_packages_async
        remove_packages_async(...args: never[]): any;
        /**
         * Remove a package (optionally with dependancies) from the system.
         * If `allow_deps` is set to `false`, and other packages would have to be removed,
         * then the transaction would fail.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param allow_deps if other dependent packages are allowed to be removed from the computer
         * @param autoremove if other packages installed at the same time should be tried to remove
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        repair_system_async(
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with PackageKitGlib.Client.repair_system_async
        repair_system_async(...args: never[]): any;
        /**
         * Recover from broken dependencies of installed packages or incomplete
         * installations.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        repair_system_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;
        /**
         * Enable or disable a specific repo.
         * @param repo_id The software repository ID
         * @param enabled `true` or `false`
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param enabled `true` or `false`
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        search_names_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
        /**
         * If package downgrades shall be allowed during transaction.
         * @param allow_downgrade `true` to allow packages to be downgraded.
         */
        set_allow_downgrade(allow_downgrade: boolean): void;
        /**
         * If package reinstallation shall be allowed during transaction.
         * @param allow_reinstall `true` to allow packages to be reinstalled.
         */
        set_allow_reinstall(allow_reinstall: boolean): void;
        /**
         * If the transaction should be prepared (depsolved, packages
         * downloaded, etc) but not committed.
         * @param only_download `false` to actually commit the transaction
         */
        set_only_download(only_download: boolean): void;
        /**
         * If only authenticated packages should be allowed in the
         * transaction.
         * @param only_trusted `true` to allow only authenticated packages
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @param callback_ready the function to run on completion
         */
        update_packages_async(
            package_ids: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
            callback_ready?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with PackageKitGlib.Client.update_packages_async
        update_packages_async(...args: never[]): any;
        /**
         * Update specific packages to the newest available versions.
         *
         * Warning: this function is synchronous, and may block. Do not use it in GUI
         * applications.
         * @param package_ids a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @param upgrade_kind a {@link PackageKitGlib.UpgradeKindEnum} such as {@link PackageKitGlib.UpgradeKindEnum.COMPLETE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
        /**
         * @param args
         */
        // Conflicted with PackageKitGlib.Client.upgrade_system_async
        upgrade_system_async(...args: never[]): any;
        /**
         * This transaction will update the distro to the next version, which may
         * involve just downloading the installer and setting up the boot device,
         * or may involve doing an on-line upgrade.
         *
         * The backend will decide what is best to do.
         * @param distro_id a distro ID such as "fedora-14"
         * @param upgrade_kind a {@link PackageKitGlib.UpgradeKindEnum} such as {@link PackageKitGlib.UpgradeKindEnum.COMPLETE}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
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
         * @returns `true` if `request` is valid.
         */
        user_accepted(request: number): boolean;
        /**
         * Mark a EULA as declined by the user.
         * @param request request ID for EULA.
         * @returns `true` if `request` is valid.
         */
        user_declined(request: number): boolean;
        /**
         * Find the package that provides some resource.
         * @param filters a bitfield of filters that can be used to limit the results
         * @param values values to search for
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param progress_callback the function to run when the progress changes
         * @returns a {@link PackageKitGlib.Results} object, or `null` for error
         */
        what_provides_sync(
            filters: Bitfield,
            values: string[],
            cancellable: Gio.Cancellable | null,
            progress_callback: ProgressCallback,
        ): Results;
    }

    namespace TransactionList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::added signal is emitted when a tid has been added to the transaction list
             * @signal
             */
            added: (arg0: string) => void;
            /**
             * The ::removed signal is emitted when a tid has been removed from the transaction list
             * @signal
             */
            removed: (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TransactionList extends GObject.Object {
        static $gtype: GObject.GType<TransactionList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TransactionList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TransactionList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TransactionList;

        // Signals

        /** @signal */
        connect<K extends keyof TransactionList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransactionList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TransactionList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransactionList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TransactionList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TransactionList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param tid
         * @virtual
         */
        vfunc_added(tid: string): void;
        /**
         * @param tid
         * @virtual
         */
        vfunc_removed(tid: string): void;

        // Methods

        /**
         * Gets the string lists of transaction IDs recognised as pending, running or finished by the daemon.
         * @returns the array of strings, free with `g_strfreev()`
         */
        get_ids(): string[];
    }

    namespace TransactionPast {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::cmdline': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::succeeded': (pspec: GObject.ParamSpec) => void;
            'notify::tid': (pspec: GObject.ParamSpec) => void;
            'notify::timespec': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class TransactionPast extends Source {
        static $gtype: GObject.GType<TransactionPast>;

        // Properties

        /**
         * @since 0.5.4
         */
        get cmdline(): string;
        set cmdline(val: string);
        /**
         * @since 0.5.4
         */
        get data(): string;
        set data(val: string);
        /**
         * @since 0.5.4
         */
        get duration(): number;
        set duration(val: number);
        /**
         * @since 0.5.4
         */
        get role(): RoleEnum;
        set role(val: RoleEnum);
        /**
         * @since 0.5.4
         */
        get succeeded(): boolean;
        set succeeded(val: boolean);
        /**
         * @since 0.5.4
         */
        get tid(): string;
        set tid(val: string);
        /**
         * @since 0.5.4
         */
        get timespec(): string;
        set timespec(val: string);
        /**
         * @since 0.5.4
         */
        get uid(): number;
        set uid(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TransactionPast.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TransactionPast.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TransactionPast;

        // Signals

        /** @signal */
        connect<K extends keyof TransactionPast.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransactionPast.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TransactionPast.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransactionPast.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TransactionPast.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TransactionPast.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Gets the past transaction date & time value;
         * @returns The transaction data, or `null` if it's not available
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
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::bugzilla-urls': (pspec: GObject.ParamSpec) => void;
            'notify::changelog': (pspec: GObject.ParamSpec) => void;
            'notify::cve-urls': (pspec: GObject.ParamSpec) => void;
            'notify::issued': (pspec: GObject.ParamSpec) => void;
            'notify::obsoletes': (pspec: GObject.ParamSpec) => void;
            'notify::package-id': (pspec: GObject.ParamSpec) => void;
            'notify::restart': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::update-text': (pspec: GObject.ParamSpec) => void;
            'notify::updated': (pspec: GObject.ParamSpec) => void;
            'notify::updates': (pspec: GObject.ParamSpec) => void;
            'notify::vendor-urls': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::transaction-id': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class UpdateDetail extends Source {
        static $gtype: GObject.GType<UpdateDetail>;

        // Properties

        /**
         * @since 0.8.1
         */
        get bugzilla_urls(): string[];
        set bugzilla_urls(val: string[]);
        /**
         * @since 0.8.1
         */
        get bugzillaUrls(): string[];
        set bugzillaUrls(val: string[]);
        /**
         * @since 0.5.4
         */
        get changelog(): string;
        set changelog(val: string);
        /**
         * @since 0.8.1
         */
        get cve_urls(): string[];
        set cve_urls(val: string[]);
        /**
         * @since 0.8.1
         */
        get cveUrls(): string[];
        set cveUrls(val: string[]);
        /**
         * @since 0.5.4
         */
        get issued(): string;
        set issued(val: string);
        /**
         * @since 0.8.1
         */
        get obsoletes(): string[];
        set obsoletes(val: string[]);
        /**
         * @since 0.5.4
         */
        get package_id(): string;
        set package_id(val: string);
        /**
         * @since 0.5.4
         */
        get packageId(): string;
        set packageId(val: string);
        /**
         * @since 0.5.4
         */
        get restart(): RestartEnum;
        set restart(val: RestartEnum);
        /**
         * @since 0.5.4
         */
        get state(): UpdateStateEnum;
        set state(val: UpdateStateEnum);
        /**
         * @since 0.5.4
         */
        get update_text(): string;
        set update_text(val: string);
        /**
         * @since 0.5.4
         */
        get updateText(): string;
        set updateText(val: string);
        /**
         * @since 0.5.4
         */
        get updated(): string;
        set updated(val: string);
        /**
         * @since 0.8.1
         */
        get updates(): string[];
        set updates(val: string[]);
        /**
         * @since 0.8.1
         */
        get vendor_urls(): string[];
        set vendor_urls(val: string[]);
        /**
         * @since 0.8.1
         */
        get vendorUrls(): string[];
        set vendorUrls(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateDetail.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UpdateDetail.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UpdateDetail;

        // Signals

        /** @signal */
        connect<K extends keyof UpdateDetail.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateDetail.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UpdateDetail.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateDetail.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UpdateDetail.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UpdateDetail.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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

    /**
     * @gir-type Alias
     */
    type CategoryClass = typeof Category;
    /**
     * Private {@link PackageKitGlib.Category} data
     * @gir-type Struct
     */
    abstract class CategoryPrivate {
        static $gtype: GObject.GType<CategoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Alias
     */
    type ClientHelperClass = typeof ClientHelper;
    /**
     * Private {@link PackageKitGlib.ClientHelper} data
     * @gir-type Struct
     */
    abstract class ClientHelperPrivate {
        static $gtype: GObject.GType<ClientHelperPrivate>;
    }

    /**
     * Private {@link PackageKitGlib.Client} data
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ControlClass = typeof Control;
    /**
     * Private {@link PackageKitGlib.Control} data
     * @gir-type Struct
     */
    abstract class ControlPrivate {
        static $gtype: GObject.GType<ControlPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DesktopClass = typeof Desktop;
    /**
     * Private {@link PackageKitGlib.Desktop} data
     * @gir-type Struct
     */
    abstract class DesktopPrivate {
        static $gtype: GObject.GType<DesktopPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DetailsClass = typeof Details;
    /**
     * Private {@link PackageKitGlib.Details} data
     * @gir-type Struct
     */
    abstract class DetailsPrivate {
        static $gtype: GObject.GType<DetailsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DistroUpgradeClass = typeof DistroUpgrade;
    /**
     * Private {@link PackageKitGlib.DistroUpgrade} data
     * @gir-type Struct
     */
    abstract class DistroUpgradePrivate {
        static $gtype: GObject.GType<DistroUpgradePrivate>;
    }

    /**
     * Matching an enumerated type to a string
     * @gir-type Struct
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
    }

    /**
     * @gir-type Alias
     */
    type ErrorClass = typeof Error;
    /**
     * Private {@link PackageKitGlib.Error} data
     * @gir-type Struct
     */
    abstract class ErrorPrivate {
        static $gtype: GObject.GType<ErrorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EulaRequiredClass = typeof EulaRequired;
    /**
     * Private {@link PackageKitGlib.EulaRequired} data
     * @gir-type Struct
     */
    abstract class EulaRequiredPrivate {
        static $gtype: GObject.GType<EulaRequiredPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FilesClass = typeof Files;
    /**
     * Private {@link PackageKitGlib.Files} data
     * @gir-type Struct
     */
    abstract class FilesPrivate {
        static $gtype: GObject.GType<FilesPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ItemProgressClass = typeof ItemProgress;
    /**
     * Private {@link PackageKitGlib.ItemProgress} data
     * @gir-type Struct
     */
    abstract class ItemProgressPrivate {
        static $gtype: GObject.GType<ItemProgressPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaChangeRequiredClass = typeof MediaChangeRequired;
    /**
     * Private {@link PackageKitGlib.MediaChangeRequired} data
     * @gir-type Struct
     */
    abstract class MediaChangeRequiredPrivate {
        static $gtype: GObject.GType<MediaChangeRequiredPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PackageClass = typeof Package;
    /**
     * Private {@link PackageKitGlib.Package} data
     * @gir-type Struct
     */
    abstract class PackagePrivate {
        static $gtype: GObject.GType<PackagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PackageSackClass = typeof PackageSack;
    /**
     * Private {@link PackageKitGlib.PackageSack} data
     * @gir-type Struct
     */
    abstract class PackageSackPrivate {
        static $gtype: GObject.GType<PackageSackPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class PackageSackResults {
        static $gtype: GObject.GType<PackageSackResults>;
    }

    /**
     * @gir-type Alias
     */
    type ProgressClass = typeof Progress;
    /**
     * Private {@link PackageKitGlib.Progress} data
     * @gir-type Struct
     */
    abstract class ProgressPrivate {
        static $gtype: GObject.GType<ProgressPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RepoDetailClass = typeof RepoDetail;
    /**
     * Private {@link PackageKitGlib.RepoDetail} data
     * @gir-type Struct
     */
    abstract class RepoDetailPrivate {
        static $gtype: GObject.GType<RepoDetailPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RepoSignatureRequiredClass = typeof RepoSignatureRequired;
    /**
     * Private {@link PackageKitGlib.RepoSignatureRequired} data
     * @gir-type Struct
     */
    abstract class RepoSignatureRequiredPrivate {
        static $gtype: GObject.GType<RepoSignatureRequiredPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RequireRestartClass = typeof RequireRestart;
    /**
     * Private {@link PackageKitGlib.RequireRestart} data
     * @gir-type Struct
     */
    abstract class RequireRestartPrivate {
        static $gtype: GObject.GType<RequireRestartPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResultsClass = typeof Results;
    /**
     * Private {@link PackageKitGlib.Results} data
     * @gir-type Struct
     */
    abstract class ResultsPrivate {
        static $gtype: GObject.GType<ResultsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SourceClass = typeof Source;
    /**
     * Private {@link PackageKitGlib.Source} data
     * @gir-type Struct
     */
    abstract class SourcePrivate {
        static $gtype: GObject.GType<SourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TaskClass = typeof Task;
    /**
     * Private {@link PackageKitGlib.Task} data
     * @gir-type Struct
     */
    abstract class TaskPrivate {
        static $gtype: GObject.GType<TaskPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TransactionListClass = typeof TransactionList;
    /**
     * Private {@link PackageKitGlib.TransactionList} data
     * @gir-type Struct
     */
    abstract class TransactionListPrivate {
        static $gtype: GObject.GType<TransactionListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TransactionPastClass = typeof TransactionPast;
    /**
     * Private {@link PackageKitGlib.TransactionPast} data
     * @gir-type Struct
     */
    abstract class TransactionPastPrivate {
        static $gtype: GObject.GType<TransactionPastPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UpdateDetailClass = typeof UpdateDetail;
    /**
     * Private {@link PackageKitGlib.UpdateDetail} data
     * @gir-type Struct
     */
    abstract class UpdateDetailPrivate {
        static $gtype: GObject.GType<UpdateDetailPrivate>;
    }

    /**
     * A bitfield capable of storing enumerations with up to 64 values.
     * @gir-type Alias
     */
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
