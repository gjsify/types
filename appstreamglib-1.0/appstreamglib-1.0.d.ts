
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace AppStreamGlib {

    /**
     * AppStreamGlib-1.0
     */


    /**
     * The kind of the agreement.
     * @gir-type Enum
     */
    enum AgreementKind {
        /**
         * Unknown value
         */
        UNKNOWN = 0,
        /**
         * A generic agreement without a specific type
         */
        GENERIC = 1,
        /**
         * An End User License Agreement
         */
        EULA = 2,
        /**
         * A privacy agreement, typically a GDPR statement
         */
        PRIVACY = 3,
    }


    /**
     * The error type.
     * @gir-type Enum
     */
    enum AppError {
        /**
         * Generic failure
         */
        FAILED = 0,
        /**
         * Invalid type
         */
        INVALID_TYPE = 1,
    }


    /**
     * The component type.
     * @gir-type Enum
     */
    enum AppKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * A desktop application
         */
        DESKTOP = 1,
        /**
         * A font add-on
         */
        FONT = 2,
        /**
         * A codec add-on
         */
        CODEC = 3,
        /**
         * An input method add-on
         */
        INPUT_METHOD = 4,
        /**
         * A web application
         */
        WEB_APP = 5,
        /**
         * A software source
         */
        SOURCE = 6,
        /**
         * An addon, e.g. a plugin
         */
        ADDON = 7,
        /**
         * A firmware update
         */
        FIRMWARE = 8,
        /**
         * Runtime platform
         */
        RUNTIME = 9,
        /**
         * Generic component
         */
        GENERIC = 10,
        /**
         * Operating system update
         */
        OS_UPDATE = 11,
        /**
         * Operating system upgrade
         */
        OS_UPGRADE = 12,
        /**
         * GNOME Shell extension
         */
        SHELL_EXTENSION = 13,
        /**
         * Localization data
         */
        LOCALIZATION = 14,
        /**
         * Console program
         */
        CONSOLE = 15,
        /**
         * Driver for hardware support
         */
        DRIVER = 16,
        /**
         * An icon theme
         */
        ICON_THEME = 17,
    }


    /**
     * The component merge kind.
     * @gir-type Enum
     */
    enum AppMergeKind {
        /**
         * Unknown merge type
         */
        UNKNOWN = 0,
        /**
         * No merge to be done
         */
        NONE = 1,
        /**
         * Merge components, replacing
         */
        REPLACE = 2,
        /**
         * Merge components, appending
         */
        APPEND = 3,
    }


    /**
     * The application scope.
     * @gir-type Enum
     */
    enum AppScope {
        /**
         * Unknown scope
         */
        UNKNOWN = 0,
        /**
         * User scope
         */
        USER = 1,
        /**
         * System scope
         */
        SYSTEM = 2,
    }


    /**
     * The application state.
     * @gir-type Enum
     */
    enum AppState {
        /**
         * Unknown state
         */
        UNKNOWN = 0,
        /**
         * Application is installed
         */
        INSTALLED = 1,
        /**
         * Application is available
         */
        AVAILABLE = 2,
        /**
         * Application is locally available as a file
         */
        AVAILABLE_LOCAL = 3,
        /**
         * Application is installed and updatable
         */
        UPDATABLE = 4,
        /**
         * Application is referenced, but not available
         */
        UNAVAILABLE = 5,
        /**
         * Application is queued for install
         */
        QUEUED_FOR_INSTALL = 6,
        /**
         * Application is being installed
         */
        INSTALLING = 7,
        /**
         * Application is being removed
         */
        REMOVING = 8,
        /**
         * Application is installed and updatable live
         */
        UPDATABLE_LIVE = 9,
        /**
         * Application is available for purchasing
         */
        PURCHASABLE = 10,
        /**
         * Application is being purchased
         */
        PURCHASING = 11,
    }


    /**
     * The flags to use when checking input.
     * @gir-type Enum
     */
    enum AppTrustFlags {
        /**
         * Trusted data with no validation
         */
        COMPLETE = 0,
        /**
         * Check for duplicates
         */
        CHECK_DUPLICATES = 1,
        /**
         * Check for valid UTF-8
         */
        CHECK_VALID_UTF8 = 2,
    }


    /**
     * The flags to use when validating.
     * @gir-type Enum
     */
    enum AppValidateFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Relax the checks
         */
        RELAX = 1,
        /**
         * Make the checks more strict
         */
        STRICT = 2,
        /**
         * Do not use the network
         */
        NO_NETWORK = 4,
        /**
         * Check all applications in a store
         */
        ALL_APPS = 8,
    }


    /**
     * The bundle type.
     * @gir-type Enum
     */
    enum BundleKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Limba application bundle
         */
        LIMBA = 1,
        /**
         * Flatpak application deployment
         */
        FLATPAK = 2,
        /**
         * Snap application deployment
         */
        SNAP = 3,
        /**
         * Package-based application deployment
         */
        PACKAGE = 4,
        /**
         * Cabinet firmware deployment
         */
        CABINET = 5,
        /**
         * AppImage application bundle
         */
        APPIMAGE = 6,
    }


    /**
     * The checksum target type.
     * @gir-type Enum
     */
    enum ChecksumTarget {
        /**
         * Unknown state
         */
        UNKNOWN = 0,
        /**
         * Container file, e.g. `.cab`
         */
        CONTAINER = 1,
        /**
         * Extracted file, e.g. `.bin`
         */
        CONTENT = 2,
        /**
         * Signature, e.g. `.asc` or `.cat`
         */
        SIGNATURE = 3,
        /**
         * Device-reported value
         */
        DEVICE = 4,
    }


    /**
     * A content rating system for a particular territory.
     * @gir-type Enum
     * @since 0.7.18
     */
    enum ContentRatingSystem {
        /**
         * Unknown ratings system
         */
        UNKNOWN = 0,
        /**
         * INCAA
         */
        INCAA = 1,
        /**
         * ACB
         */
        ACB = 2,
        /**
         * DJCTQ
         */
        DJCTQ = 3,
        /**
         * GSRR
         */
        GSRR = 4,
        /**
         * PEGI
         */
        PEGI = 5,
        /**
         * KAVI
         */
        KAVI = 6,
        /**
         * USK
         */
        USK = 7,
        /**
         * ESRA
         */
        ESRA = 8,
        /**
         * CERO
         */
        CERO = 9,
        /**
         * OFLCNZ
         */
        OFLCNZ = 10,
        /**
         * Russia
         */
        RUSSIA = 11,
        /**
         * MDA
         */
        MDA = 12,
        /**
         * GRAC
         */
        GRAC = 13,
        /**
         * ESRB
         */
        ESRB = 14,
        /**
         * IARC
         */
        IARC = 15,
    }


    /**
     * The specified level of an content_rating rating ID.
     * @gir-type Enum
     */
    enum ContentRatingValue {
        /**
         * Unknown value
         */
        UNKNOWN = 0,
        /**
         * None
         */
        NONE = 1,
        /**
         * A small amount
         */
        MILD = 2,
        /**
         * A moderate amount
         */
        MODERATE = 3,
        /**
         * An intense amount
         */
        INTENSE = 4,
    }


    /**
     * The format kind.
     * @gir-type Enum
     */
    enum FormatKind {
        /**
         * Not formatd from a file
         */
        UNKNOWN = 0,
        /**
         * AppStream file
         */
        APPSTREAM = 1,
        /**
         * Desktop file
         */
        DESKTOP = 2,
        /**
         * AppData file
         */
        APPDATA = 3,
        /**
         * MetaInfo file
         */
        METAINFO = 4,
    }


    /**
     * The error type.
     * @gir-type Enum
     */
    enum IconError {
        /**
         * Generic failure
         */
        FAILED = 0,
    }


    /**
     * The icon type.
     * @gir-type Enum
     */
    enum IconKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Stock icon or present in the generic icon theme
         */
        STOCK = 1,
        /**
         * An icon shipped with the AppStream metadata
         */
        CACHED = 2,
        /**
         * An icon referenced by a remote URL
         */
        REMOTE = 3,
        /**
         * An embedded Base64 icon
         */
        EMBEDDED = 4,
        /**
         * An icon with absolute path and filename
         */
        LOCAL = 5,
    }


    /**
     * The flags to use when loading icons.
     * @gir-type Enum
     */
    enum IconLoadFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Search first in a size-specific directory
         */
        SEARCH_SIZE = 1,
    }


    /**
     * The component type.
     * @gir-type Enum
     */
    enum IdKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * A desktop application
         */
        DESKTOP = 1,
        /**
         * A font add-on
         */
        FONT = 2,
        /**
         * A codec add-on
         */
        CODEC = 3,
        /**
         * An input method add-on
         */
        INPUT_METHOD = 4,
        /**
         * A web application
         */
        WEB_APP = 5,
        /**
         * A software source
         */
        SOURCE = 6,
        /**
         * An addon, e.g. a plugin
         */
        ADDON = 7,
        /**
         * A firmware update
         */
        FIRMWARE = 8,
        /**
         * Runtime platform
         */
        RUNTIME = 9,
        /**
         * Generic component
         */
        GENERIC = 10,
    }


    /**
     * The image type.
     * @gir-type Enum
     */
    enum ImageKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * The source image at full resolution
         */
        SOURCE = 1,
        /**
         * A thumbnail at reduced resolution
         */
        THUMBNAIL = 2,
    }


    /**
     * The flags used for loading images.
     * @gir-type Enum
     */
    enum ImageLoadFlags {
        /**
         * No special flags set
         */
        NONE = 0,
        /**
         * Sharpen the resulting image
         */
        SHARPEN = 1,
        /**
         * Set the image basename
         */
        SET_BASENAME = 2,
        /**
         * Set the image checksum
         */
        SET_CHECKSUM = 4,
        /**
         * Only load supported formats like PNG and JPG
         */
        ONLY_SUPPORTED = 8,
        /**
         * Always resize the source icon to the perfect size
         */
        ALWAYS_RESIZE = 16,
    }


    /**
     * The flags used for saving images.
     * @gir-type Enum
     */
    enum ImageSaveFlags {
        /**
         * No special flags set
         */
        NONE = 0,
        /**
         * Pad with alpha to 16:9 aspect
         */
        PAD_16_9 = 1,
        /**
         * Sharpen the image to clarify detail
         */
        SHARPEN = 2,
        /**
         * Blur the image to clear detail
         */
        BLUR = 4,
    }


    /**
     * The error type.
     * @gir-type Struct
     */
    class InfError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Generic failure
         */
        static FAILED: number;

        /**
         * Invalid type
         */
        static INVALID_TYPE: number;

        /**
         * Data not found
         */
        static NOT_FOUND: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * The kudo type.
     * @gir-type Enum
     */
    enum KudoKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Installs a search provider
         */
        SEARCH_PROVIDER = 1,
        /**
         * Installs user documentation
         */
        USER_DOCS = 2,
        /**
         * Uses the GNOME application menu
         */
        APP_MENU = 3,
        /**
         * Uses a modern toolkit like GTK3 or QT5
         */
        MODERN_TOOLKIT = 4,
        /**
         * Registers notifications with KDE or GNOME
         */
        NOTIFICATIONS = 5,
        /**
         * Installs a high contrast icon
         */
        HIGH_CONTRAST = 6,
        /**
         * Installs a high DPI icon
         */
        HI_DPI_ICON = 7,
    }


    /**
     * The launchable type.
     * @gir-type Enum
     */
    enum LaunchableKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * A desktop ID
         */
        DESKTOP_ID = 1,
        /**
         * A system service
         */
        SERVICE = 2,
        /**
         * A manifest run by the cockpit project
         */
        COCKPIT_MANIFEST = 3,
        /**
         * A web-app
         */
        URL = 4,
    }


    /**
     * The format used when converting to or from AppStream descriptions.
     * @gir-type Enum
     */
    enum MarkupConvertFormat {
        /**
         * UTF-8 text
         */
        SIMPLE = 0,
        /**
         * Markdown format
         */
        MARKDOWN = 1,
        /**
         * No output
         */
        NULL = 2,
        /**
         * AppStream (passthrough)
         */
        APPSTREAM = 3,
        /**
         * HyperText Markup Language
         */
        HTML = 4,
    }


    /**
     * The error type.
     * @gir-type Struct
     */
    class NodeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Generic failure
         */
        static FAILED: number;

        /**
         * XML markup was invalid
         */
        static INVALID_MARKUP: number;

        /**
         * No support for parsing
         */
        static NO_SUPPORT: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * The flags to use when inserting a node.
     * @gir-type Enum
     */
    enum NodeInsertFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * The data is already XML escaped
         */
        PRE_ESCAPED = 1,
        /**
         * The name and key should be swapped
         */
        SWAPPED = 2,
        /**
         * Preformat the 'description' markup
         */
        NO_MARKUP = 4,
        /**
         * No xml:lang keys where text matches 'C'
         */
        DEDUPE_LANG = 8,
        /**
         * Mark the tag name as translatable
         */
        MARK_TRANSLATABLE = 16,
        /**
         * The data is Base64 encoded
         */
        BASE64_ENCODED = 32,
    }


    /**
     * The flags for converting to XML.
     * @gir-type Enum
     */
    enum NodeToXmlFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Add an XML header to the data
         */
        ADD_HEADER = 1,
        /**
         * Split up children with a newline
         */
        FORMAT_MULTILINE = 2,
        /**
         * Indent the XML by child depth
         */
        FORMAT_INDENT = 4,
        /**
         * Include the siblings when converting
         */
        INCLUDE_SIBLINGS = 8,
        /**
         * Sort the tags by alphabetical order
         */
        SORT_CHILDREN = 16,
    }


    /**
     * The problem type.
     * @gir-type Enum
     */
    enum ProblemKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * A tag is duplicated
         */
        TAG_DUPLICATED = 1,
        /**
         * A required tag is missing
         */
        TAG_MISSING = 2,
        /**
         * A tag value is invalid
         */
        TAG_INVALID = 3,
        /**
         * A required attribute is missing
         */
        ATTRIBUTE_MISSING = 4,
        /**
         * An attribute is invalid
         */
        ATTRIBUTE_INVALID = 5,
        /**
         * The XML markup is invalid
         */
        MARKUP_INVALID = 6,
        /**
         * Style guidelines are incorrect
         */
        STYLE_INCORRECT = 7,
        /**
         * Translations are required
         */
        TRANSLATIONS_REQUIRED = 8,
        /**
         * Some data is duplicated
         */
        DUPLICATE_DATA = 9,
        /**
         * A value is required
         */
        VALUE_MISSING = 10,
        /**
         * The URL is not found
         */
        URL_NOT_FOUND = 11,
        /**
         * The file is invalid
         */
        FILE_INVALID = 12,
        /**
         * The image aspect ratio is wrong
         */
        ASPECT_RATIO_INCORRECT = 13,
        /**
         * The image resolution is wrong
         */
        RESOLUTION_INCORRECT = 14,
    }


    /**
     * The provide type.
     * @gir-type Enum
     */
    enum ProvideKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * A library file
         */
        LIBRARY = 1,
        /**
         * A binary file
         */
        BINARY = 2,
        /**
         * A font file
         */
        FONT = 3,
        /**
         * A hardware modalias
         */
        MODALIAS = 4,
        /**
         * A runtime-loadable firmware file
         */
        FIRMWARE_RUNTIME = 5,
        /**
         * A Python 2 module
         */
        PYTHON2 = 6,
        /**
         * A Python 3 module
         */
        PYTHON3 = 7,
        /**
         * A D-Bus session service
         */
        DBUS_SESSION = 8,
        /**
         * A D-Bus system service
         */
        DBUS_SYSTEM = 9,
        /**
         * A flashed firmware GUID
         */
        FIRMWARE_FLASHED = 10,
        /**
         * An AppStream component ID
         */
        ID = 11,
    }


    /**
     * The release size kind.
     * @gir-type Enum
     * @since 0.7.6
     */
    enum ReleaseKind {
        /**
         * Unknown release type
         */
        UNKNOWN = 0,
        /**
         * A stable release
         */
        STABLE = 1,
        /**
         * A development release
         */
        DEVELOPMENT = 2,
    }


    /**
     * The release state.
     * @gir-type Enum
     */
    enum ReleaseState {
        /**
         * Unknown state
         */
        UNKNOWN = 0,
        /**
         * Release is installed
         */
        INSTALLED = 1,
        /**
         * Release is available
         */
        AVAILABLE = 2,
    }


    /**
     * The relational comparison type.
     * @gir-type Enum
     */
    enum RequireCompare {
        /**
         * Comparison predicate invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Equal to
         */
        EQ = 1,
        /**
         * Not equal to
         */
        NE = 2,
        /**
         * Less than
         */
        LT = 3,
        /**
         * Greater than
         */
        GT = 4,
        /**
         * Less than or equal to
         */
        LE = 5,
        /**
         * Greater than or equal to
         */
        GE = 6,
        /**
         * Filename glob, e.g. `test*`
         */
        GLOB = 7,
        /**
         * A regular expression, e.g. `fw[0-255]`
         */
        REGEX = 8,
    }


    /**
     * The require type.
     * @gir-type Enum
     */
    enum RequireKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Component ID
         */
        ID = 1,
        /**
         * Device firmware version
         */
        FIRMWARE = 2,
        /**
         * Hardware device, typically a GUID
         */
        HARDWARE = 3,
        /**
         * Modalias string
         */
        MODALIAS = 4,
        /**
         * Kernel version
         */
        KERNEL = 5,
        /**
         * Amount of installed memory in MiB
         */
        MEMORY = 6,
    }


    /**
     * The screenshot type.
     * @gir-type Enum
     */
    enum ScreenshotKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Optional screenshot
         */
        NORMAL = 1,
        /**
         * Screenshot to show by default
         */
        DEFAULT = 2,
    }


    /**
     * The release size kind.
     * @gir-type Enum
     */
    enum SizeKind {
        /**
         * Not known
         */
        UNKNOWN = 0,
        /**
         * Installed size
         */
        INSTALLED = 1,
        /**
         * Download size
         */
        DOWNLOAD = 2,
    }


    /**
     * The error type.
     * @gir-type Enum
     */
    enum StoreError {
        /**
         * Generic failure
         */
        FAILED = 0,
    }


    /**
     * The flags to use when searching in the store.
     * @gir-type Enum
     */
    enum StoreSearchFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Process the globs
         */
        USE_WILDCARDS = 1,
    }


    /**
     * The flags to use when local files are added or removed from the store.
     * @gir-type Enum
     */
    enum StoreWatchFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Add applications if files change or are added
         */
        ADDED = 1,
        /**
         * Remove applications if files are changed or deleted
         */
        REMOVED = 2,
    }


    /**
     * The suggest type.
     * @gir-type Enum
     */
    enum SuggestKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Upstream-specified suggestion
         */
        UPSTREAM = 1,
        /**
         * Suggestion from a heuristic
         */
        HEURISTIC = 2,
    }


    /**
     * The tag type.
     * @gir-type Enum
     */
    enum Tag {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * `components`
         */
        COMPONENTS = 1,
        /**
         * `component`
         */
        COMPONENT = 2,
        /**
         * `id`
         */
        ID = 3,
        /**
         * `pkgname`
         */
        PKGNAME = 4,
        /**
         * `name`
         */
        NAME = 5,
        /**
         * `summary`
         */
        SUMMARY = 6,
        /**
         * `description`
         */
        DESCRIPTION = 7,
        /**
         * `url`
         */
        URL = 8,
        /**
         * `icon`
         */
        ICON = 9,
        /**
         * `categories`
         */
        CATEGORIES = 10,
        /**
         * `category`
         */
        CATEGORY = 11,
        /**
         * `keywords`
         */
        KEYWORDS = 12,
        /**
         * `keyword`
         */
        KEYWORD = 13,
        /**
         * `mimetypes`
         */
        MIMETYPES = 14,
        /**
         * `mimetype`
         */
        MIMETYPE = 15,
        /**
         * `project_group`
         */
        PROJECT_GROUP = 16,
        /**
         * `project_license`
         */
        PROJECT_LICENSE = 17,
        /**
         * `screenshot`
         */
        SCREENSHOT = 18,
        /**
         * `screenshots`
         */
        SCREENSHOTS = 19,
        /**
         * `update_contact`
         */
        UPDATE_CONTACT = 20,
        /**
         * `image`
         */
        IMAGE = 21,
        /**
         * `compulsory_for_desktop`
         */
        COMPULSORY_FOR_DESKTOP = 22,
        /**
         * `priority`
         */
        PRIORITY = 23,
        /**
         * `caption`
         */
        CAPTION = 24,
        /**
         * `languages`
         */
        LANGUAGES = 25,
        /**
         * `lang`
         */
        LANG = 26,
        /**
         * `metadata`
         */
        METADATA = 27,
        /**
         * `value`
         */
        VALUE = 28,
        /**
         * `releases`
         */
        RELEASES = 29,
        /**
         * `release`
         */
        RELEASE = 30,
        /**
         * `architectures`
         */
        ARCHITECTURES = 31,
        /**
         * `arch`
         */
        ARCH = 32,
        /**
         * `metadata_license`
         */
        METADATA_LICENSE = 33,
        /**
         * `provides`
         */
        PROVIDES = 34,
        /**
         * `extends`
         */
        EXTENDS = 35,
        /**
         * `developer_name`
         */
        DEVELOPER_NAME = 36,
        /**
         * `kudos`
         */
        KUDOS = 37,
        /**
         * `kudo`
         */
        KUDO = 38,
        /**
         * `source_pkgname`
         */
        SOURCE_PKGNAME = 39,
        /**
         * `vetos`
         */
        VETOS = 40,
        /**
         * `veto`
         */
        VETO = 41,
        /**
         * `bundle`
         */
        BUNDLE = 42,
        /**
         * `permissions`
         */
        PERMISSIONS = 43,
        /**
         * `permission`
         */
        PERMISSION = 44,
        /**
         * `location`
         */
        LOCATION = 45,
        /**
         * `checksum`
         */
        CHECKSUM = 46,
        /**
         * `size`
         */
        SIZE = 47,
        /**
         * `translation`
         */
        TRANSLATION = 48,
        /**
         * `content_rating`
         */
        CONTENT_RATING = 49,
        /**
         * `content_attribute`
         */
        CONTENT_ATTRIBUTE = 50,
        /**
         * `version`
         */
        VERSION = 51,
        /**
         * `reviews`
         */
        REVIEWS = 52,
        /**
         * `review`
         */
        REVIEW = 53,
        /**
         * `reviewer_name`
         */
        REVIEWER_NAME = 54,
        /**
         * `reviewer_id`
         */
        REVIEWER_ID = 55,
        /**
         * `suggests`
         */
        SUGGESTS = 56,
        /**
         * `requires`
         */
        REQUIRES = 57,
        /**
         * `custom`
         */
        CUSTOM = 58,
        /**
         * `launchable`
         */
        LAUNCHABLE = 59,
        /**
         * `agreement`
         */
        AGREEMENT = 60,
        /**
         * `agreement_section`
         */
        AGREEMENT_SECTION = 61,
        P = 62,
        LI = 63,
        UL = 64,
        OL = 65,
        BINARY = 66,
        FONT = 67,
        DBUS = 68,
        MODALIAS = 69,
        LIBRARY = 70,
    }


    /**
     * The flags to use when matching %AsTag's.
     * @gir-type Enum
     */
    enum TagFlags {
        /**
         * No special actions to use
         */
        NONE = 0,
        /**
         * Use fallback tag names
         */
        USE_FALLBACKS = 1,
        /**
         * Use translated tag names
         */
        USE_TRANSLATED = 2,
    }


    /**
     * The translation type.
     * @gir-type Enum
     */
    enum TranslationKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Gettext translation system
         */
        GETTEXT = 1,
        /**
         * QT translation system
         */
        QT = 2,
    }


    /**
     * The urgency of a release.
     * @gir-type Enum
     */
    enum UrgencyKind {
        /**
         * Urgency invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Low urgency release
         */
        LOW = 1,
        /**
         * Medium urgency release
         */
        MEDIUM = 2,
        /**
         * High urgency release
         */
        HIGH = 3,
        /**
         * Critically urgent release
         */
        CRITICAL = 4,
    }


    /**
     * The URL type.
     * @gir-type Enum
     */
    enum UrlKind {
        /**
         * Type invalid or not known
         */
        UNKNOWN = 0,
        /**
         * Application project homepage
         */
        HOMEPAGE = 1,
        /**
         * Application bugtracker
         */
        BUGTRACKER = 2,
        /**
         * Application FAQ page
         */
        FAQ = 3,
        /**
         * Application donation page
         */
        DONATION = 4,
        /**
         * Application help manual
         */
        HELP = 5,
        /**
         * The package is available, but missing
         */
        MISSING = 6,
        /**
         * Application translation page
         */
        TRANSLATE = 7,
        /**
         * Release details
         */
        DETAILS = 8,
        /**
         * Link to source code
         */
        SOURCE = 9,
        /**
         * URL to contact developer on
         */
        CONTACT = 10,
        /**
         * Browse the source code
         */
        VCS_BROWSER = 11,
        /**
         * Help developing
         */
        CONTRIBUTE = 12,
    }


    /**
     * The error type.
     * @gir-type Struct
     */
    class UtilsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Generic failure
         */
        static FAILED: number;

        /**
         * Invalid type
         */
        static INVALID_TYPE: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * The flags used when installing and removing metadata files.
     * @gir-type Enum
     */
    enum UtilsLocation {
        /**
         * Installed by the vendor, shared
         */
        SHARED = 0,
        /**
         * Installed as metadata, shared
         */
        CACHE = 1,
        /**
         * Installed by the user
         */
        USER = 2,
    }


    /**
     * @default 6208094264
     */
    const APP_SUBSUME_FLAG_DEDUPE: number;

    /**
     * @default 266555883456
     */
    const APP_SUBSUME_FLAG_MERGE: number;

    /**
     * @default 2
     */
    const IMAGE_ALPHA_FLAG_BOTTOM: number;

    /**
     * @default 16
     */
    const IMAGE_ALPHA_FLAG_INTERNAL: number;

    /**
     * @default 4
     */
    const IMAGE_ALPHA_FLAG_LEFT: number;

    /**
     * @default 0
     */
    const IMAGE_ALPHA_FLAG_NONE: number;

    /**
     * @default 8
     */
    const IMAGE_ALPHA_FLAG_RIGHT: number;

    /**
     * @default 1
     */
    const IMAGE_ALPHA_FLAG_TOP: number;

    /**
     * @default 423
     */
    const IMAGE_LARGE_HEIGHT: number;

    /**
     * @default 752
     */
    const IMAGE_LARGE_WIDTH: number;

    /**
     * @default 351
     */
    const IMAGE_NORMAL_HEIGHT: number;

    /**
     * @default 624
     */
    const IMAGE_NORMAL_WIDTH: number;

    /**
     * @default 63
     */
    const IMAGE_THUMBNAIL_HEIGHT: number;

    /**
     * @default 112
     */
    const IMAGE_THUMBNAIL_WIDTH: number;

    /**
     * Converts the text representation to an enumerated value.
     * @param id_kind the string.
     * @returns a {@link AppStreamGlib.IdKind} or {@link AppStreamGlib.IdKind.UNKNOWN} for unknown
     * @since 0.1.0
     */
    function id_kind_from_string(id_kind: string): IdKind;

    /**
     * Converts the enumerated value to an text representation.
     * @param id_kind the {@link AppStreamGlib.IdKind}.
     * @returns string version of `id_kind`
     * @since 0.1.0
     */
    function id_kind_to_string(id_kind: IdKind): string;

    /**
     * @returns An error quark.
     * @since 0.3.7
     */
    function inf_error_quark(): GLib.Quark;

    /**
     * Parses the DriverVer string into a recognisable version and timestamp;
     * @param keyfile a {@link GLib.KeyFile}
     * @param timestamp the returned driverver timestamp, or `null`
     * @returns the version string, or `null` for error.
     * @since 0.3.5
     * @throws GLib.Error
     */
    function inf_get_driver_version(keyfile: GLib.KeyFile, timestamp: bigint | number): string;

    /**
     * Repairs .inf file data and opens it as a keyfile.
     * 
     * Important: The group and keynames are all forced to lower case as INF files
     * are specified as case insensitive and GKeyFile *is* case sensitive.
     * Any backslashes or spaces in the key name are also converted to '_'.
     * @param keyfile a {@link GLib.KeyFile}
     * @param data the .inf file date to parse
     * @param flags {@link AppStreamGlib.InfLoadFlags}, e.g. {@link AppStreamGlib.InfLoadFlags.NONE}
     * @returns `true` for success
     * @since 0.3.5
     * @throws GLib.Error
     */
    function inf_load_data(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags): boolean;

    /**
     * Repairs an .inf file and opens it as a keyfile.
     * @param keyfile a {@link GLib.KeyFile}
     * @param filename the .inf file to open
     * @param flags {@link AppStreamGlib.InfLoadFlags}, e.g. {@link AppStreamGlib.InfLoadFlags.NONE}
     * @returns `true` for success
     * @since 0.3.5
     * @throws GLib.Error
     */
    function inf_load_file(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags): boolean;

    /**
     * Converts the text representation to an enumerated value.
     * @param kudo_kind the string.
     * @returns a {@link AppStreamGlib.KudoKind} or {@link AppStreamGlib.KudoKind.UNKNOWN} for unknown
     * @since 0.2.2
     */
    function kudo_kind_from_string(kudo_kind: string): KudoKind;

    /**
     * Converts the enumerated value to an text representation.
     * @param kudo_kind the `AsKudoKind`.
     * @returns string version of `kudo_kind`
     * @since 0.2.2
     */
    function kudo_kind_to_string(kudo_kind: KudoKind): string;

    /**
     * Converts an XML description into a printable form.
     * @param markup the text to copy.
     * @param format the {@link AppStreamGlib.MarkupConvertFormat}, e.g. {@link AppStreamGlib.MarkupConvertFormat.MARKDOWN}
     * @returns a newly allocated `null` terminated string
     * @since 0.3.5
     * @throws GLib.Error
     */
    function markup_convert(markup: string, format: MarkupConvertFormat): string;

    /**
     * Converts an XML description into a printable form.
     * @param markup the text to copy.
     * @param format the {@link AppStreamGlib.MarkupConvertFormat}, e.g. {@link AppStreamGlib.MarkupConvertFormat.MARKDOWN}
     * @param flags the {@link AppStreamGlib.MarkupConvertFlag}, e.g. {@link AppStreamGlib.MarkupConvertFlag.IGNORE_ERRORS}
     * @returns a newly allocated `null` terminated string
     * @since 0.3.5
     * @throws GLib.Error
     */
    function markup_convert_full(markup: string, format: MarkupConvertFormat, flags: MarkupConvertFlag): string;

    /**
     * Converts an XML description into a printable form.
     * @param markup the text to copy.
     * @returns a newly allocated `null` terminated string
     * @since 0.1.0
     * @throws GLib.Error
     */
    function markup_convert_simple(markup: string): string;

    /**
     * Imports text and converts to AppStream markup.
     * @param text the text to import.
     * @param format the {@link AppStreamGlib.MarkupConvertFormat}, e.g. {@link AppStreamGlib.MarkupConvertFormat.SIMPLE}
     * @returns appstream markup, or `null` in event of an error
     * @since 0.5.11
     * @throws GLib.Error
     */
    function markup_import(text: string, format: MarkupConvertFormat): string;

    /**
     * Splits up a long line into an array of smaller strings, each being no longer
     * than `line_len`. Words are not split.
     * @param text the text to split.
     * @param line_len the maximum length of the output line
     * @returns lines, or `null` in event of an error
     * @since 0.3.5
     */
    function markup_strsplit_words(text: string, line_len: number): string[];

    /**
     * Validates some markup.
     * @param markup the text to validate
     * @returns `true` if the appstream description was valid
     * @since 0.5.1
     * @throws GLib.Error
     */
    function markup_validate(markup: string): boolean;

    /**
     * @returns An error quark.
     * @since 0.1.0
     */
    function node_error_quark(): GLib.Quark;

    /**
     * Gets a node attribute, e.g. "false"
     * @param node a {@link AppStreamGlib.Node}
     * @param key the attribute key
     * @returns string value
     * @since 0.1.0
     */
    function node_get_attribute(node: GLib.Node, key: string): string;

    /**
     * Gets a node attribute, e.g. 34
     * @param node a {@link AppStreamGlib.Node}
     * @param key the attribute key
     * @returns integer value, or `G_MAXINT` for error
     * @since 0.1.0
     */
    function node_get_attribute_as_int(node: GLib.Node, key: string): number;

    /**
     * Gets a node attribute, e.g. 34
     * @param node a {@link AppStreamGlib.Node}
     * @param key the attribute key
     * @returns integer value, or `G_MAXINT` for error
     * @since 0.6.1
     */
    function node_get_attribute_as_uint(node: GLib.Node, key: string): number;

    /**
     * Gets the node data, e.g. "Copyright 2014 Richard Hughes"
     * @param node a {@link AppStreamGlib.Node}
     * @returns string value, or `null`
     * @since 0.1.6
     */
    function node_get_comment(node: GLib.Node): string;

    /**
     * Gets the node data, e.g. "paragraph text"
     * @param node a {@link AppStreamGlib.Node}
     * @returns string value
     * @since 0.1.0
     */
    function node_get_data(node: GLib.Node): string;

    /**
     * Extracts localized values from the DOM tree
     * @param node a {@link AppStreamGlib.Node}
     * @param key the key to use, e.g. "copyright"
     * @returns A hash table with the locale (e.g. en_GB) as the key
     * @since 0.1.0
     */
    function node_get_localized(node: GLib.Node, key: string): never;

    /**
     * Gets the 'best' locale version of a specific data value.
     * @param node a {@link AppStreamGlib.Node}.
     * @param key the tag name.
     * @returns the string value, or `null` if there was no data
     * @since 0.1.0
     */
    function node_get_localized_best(node: GLib.Node, key: string): string;

    /**
     * Denormalize AppData data like this:
     * 
     * 
     * ```
     * <description>
     *  <p>Hi</p>
     *  <p xml:lang="pl">Czesc</p>
     *  <ul>
     *   <li>First</li>
     *   <li xml:lang="pl">Pierwszy</li>
     *  </ul>
     * </description>
     * ```
     * 
     * 
     * into a hash that contains:
     * 
     * 
     * ```
     * "C"  ->  "<p>Hi</p><ul><li>First</li></ul>"
     * "pl" ->  "<p>Czesc</p><ul><li>Pierwszy</li></ul>"
     * ```
     * 
     * @param node a {@link AppStreamGlib.Node}.
     * @returns a hash table of data
     * @since 0.1.0
     * @throws GLib.Error
     */
    function node_get_localized_unwrap(node: GLib.Node): never;

    /**
     * Gets the node name, e.g. "body"
     * @param node a {@link AppStreamGlib.Node}
     * @returns string value
     * @since 0.1.0
     */
    function node_get_name(node: GLib.Node): string;

    /**
     * Gets the node tag enum.
     * @param node a {@link AppStreamGlib.Node}
     * @returns {@link AppStreamGlib.Tag}, e.g. {@link AppStreamGlib.Tag.PKGNAME}
     * @since 0.1.2
     */
    function node_get_tag(node: GLib.Node): Tag;

    /**
     * Inserts a hash table of data into the DOM.
     * @param parent a parent {@link AppStreamGlib.Node}.
     * @param name the tag name, e.g. "id".
     * @param attr_key the key to use as the attribute in the XML, e.g. "key".
     * @param hash the hash table with the key as the key to use in the XML.
     * @param insert_flags any %AsNodeInsertFlags.
     * @since 0.1.0
     */
    function node_insert_hash(parent: GLib.Node, name: string, attr_key: string, hash: never, insert_flags: NodeInsertFlags): void;

    /**
     * Inserts a localized key into the DOM.
     * @param parent a parent {@link AppStreamGlib.Node}.
     * @param name the tag name, e.g. "id".
     * @param localized the hash table of data, with the locale as the key.
     * @param insert_flags any %AsNodeInsertFlags.
     * @since 0.1.0
     */
    function node_insert_localized(parent: GLib.Node, name: string, localized: never, insert_flags: NodeInsertFlags): void;

    /**
     * Converts a node and its children to XML.
     * @param node a {@link AppStreamGlib.Node}.
     * @param flags the AsNodeToXmlFlags, e.g. {@link AppStreamGlib.NodeToXmlFlags.NONE}.
     * @returns a {@link GLib.String}
     * @since 0.1.0
     */
    function node_to_xml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String;

    /**
     * Deallocates all notes in the tree.
     * @param node a {@link AppStreamGlib.Node}.
     * @since 0.1.0
     */
    function node_unref(node: GLib.Node): void;

    /**
     * Converts the text representation to an enumerated value.
     * @param size_kind the string.
     * @returns a {@link AppStreamGlib.SizeKind} or {@link AppStreamGlib.SizeKind.UNKNOWN} for unknown
     * @since 0.5.2
     */
    function size_kind_from_string(size_kind: string): SizeKind;

    /**
     * Converts the enumerated value to an text representation.
     * @param size_kind the {@link AppStreamGlib.SizeKind}.
     * @returns string version of `size_kind`
     * @since 0.5.2
     */
    function size_kind_to_string(size_kind: SizeKind): string;

    /**
     * Converts the text representation to an enumerated value.
     * @param tag the string.
     * @returns a %AsTag, or {@link AppStreamGlib.Tag.UNKNOWN} if not known.
     * @since 0.1.0
     */
    function tag_from_string(tag: string): Tag;

    /**
     * Converts the text representation to an enumerated value also converting
     * legacy key names.
     * @param tag the string.
     * @param flags the {@link AppStreamGlib.TagFlags} e.g. {@link AppStreamGlib.TagFlags.USE_FALLBACKS}
     * @returns a %AsTag, or {@link AppStreamGlib.Tag.UNKNOWN} if not known.
     * @since 0.1.2
     */
    function tag_from_string_full(tag: string, flags: TagFlags): Tag;

    /**
     * Converts the enumerated value to an text representation.
     * @param tag the %AsTag value.
     * @returns string version of `tag`
     * @since 0.1.0
     */
    function tag_to_string(tag: Tag): string;

    /**
     * Converts the text representation to an enumerated value.
     * @param urgency_kind the string.
     * @returns a {@link AppStreamGlib.UrgencyKind} or {@link AppStreamGlib.UrgencyKind.UNKNOWN} for unknown
     * @since 0.5.1
     */
    function urgency_kind_from_string(urgency_kind: string): UrgencyKind;

    /**
     * Converts the enumerated value to an text representation.
     * @param urgency_kind the {@link AppStreamGlib.UrgencyKind}.
     * @returns string version of `urgency_kind`
     * @since 0.5.1
     */
    function urgency_kind_to_string(urgency_kind: UrgencyKind): string;

    /**
     * Converts the text representation to an enumerated value.
     * @param url_kind the string.
     * @returns a {@link AppStreamGlib.UrlKind} or {@link AppStreamGlib.UrlKind.UNKNOWN} for unknown
     * @since 0.1.0
     */
    function url_kind_from_string(url_kind: string): UrlKind;

    /**
     * Converts the enumerated value to an text representation.
     * @param url_kind the `AsUrlKind`.
     * @returns string version of `url_kind`
     * @since 0.1.0
     */
    function url_kind_to_string(url_kind: UrlKind): string;

    /**
     * Fixes a string to be a valid AppStream ID.
     * 
     * This function replaces any invalid chars with an underscore.
     * @param str a string to build the AppStream ID from
     * @returns a valid AppStream ID, or `null` if `str` is invalid
     * @since 0.6.4
     */
    function utils_appstream_id_build(str: string): string;

    /**
     * Checks to see if a string is a valid AppStream ID. A valid AppStream ID only
     * contains alphanumeric chars, dots and dashes.
     * @param str a string
     * @returns `true` if the string is a valid AppStream ID
     * @since 0.6.4
     */
    function utils_appstream_id_valid(str: string): boolean;

    /**
     * @returns An error quark.
     * @since 0.3.7
     */
    function utils_error_quark(): GLib.Quark;

    /**
     * Finds an icon filename from a filesystem root.
     * @param destdir the destdir.
     * @param search the icon search name, e.g. "microphone.svg"
     * @returns a newly allocated `null` terminated string
     * @since 0.2.5
     * @throws GLib.Error
     */
    function utils_find_icon_filename(destdir: string, search: string): string;

    /**
     * Finds an icon filename from a filesystem root.
     * @param destdir the destdir.
     * @param search the icon search name, e.g. "microphone.svg"
     * @param flags A {@link AppStreamGlib.UtilsFindIconFlag} bitfield
     * @returns a newly allocated `null` terminated string
     * @since 0.3.1
     * @throws GLib.Error
     */
    function utils_find_icon_filename_full(destdir: string, search: string, flags: UtilsFindIconFlag): string;

    /**
     * Returns a GUID for some data. This uses a hash and so even small
     * differences in the `data` will produce radically different return values.
     * 
     * The implementation is taken from RFC4122, Section 4.1.3; specifically
     * using a type-5 SHA-1 hash.
     * @param namespace_id A namespace ID, e.g. "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
     * @param data data to hash
     * @param data_len length of `data`
     * @returns A new GUID, or `null` if the namespace_id was invalid
     * @since 0.6.13
     * @throws GLib.Error
     */
    function utils_guid_from_data(namespace_id: string, data: number, data_len: bigint | number): string;

    /**
     * Returns a GUID for a given string. This uses a hash and so even small
     * differences in the `str` will produce radically different return values.
     * 
     * The implementation is taken from RFC4122, Section 4.1.3; specifically
     * using a type-5 SHA-1 hash with a DNS namespace.
     * The same result can be obtained with this simple python program:
     * 
     *    #!/usr/bin/python
     *    import uuid
     *    print uuid.uuid5(uuid.NAMESPACE_DNS, 'python.org')
     * @param str A source string to use as a key
     * @returns A new GUID, or `null` if the string was invalid
     * @since 0.5.0
     */
    function utils_guid_from_string(str: string): string;

    /**
     * Checks the source string is a valid string GUID descriptor.
     * @param guid string to check
     * @returns `true` if `guid` was a valid GUID, `false` otherwise
     * @since 0.5.0
     */
    function utils_guid_is_valid(guid: string): boolean;

    /**
     * Installs an AppData, MetaInfo, AppStream XML or AppStream Icon metadata file.
     * @param location the {@link AppStreamGlib.UtilsLocation}, e.g. {@link AppStreamGlib.UtilsLocation.CACHE}
     * @param filename the full path of the file to install
     * @param origin the origin to use for the installation, or `null`
     * @param destdir the destdir to use, or `null`
     * @returns `true` for success, `false` if error is set
     * @since 0.3.4
     * @throws GLib.Error
     */
    function utils_install_filename(location: UtilsLocation, filename: string, origin: string, destdir: string): boolean;

    /**
     * Searches the known list of blacklisted desktop IDs.
     * @param desktop_id a desktop ID, e.g. "gimp.desktop"
     * @returns `true` if the desktop ID is blacklisted
     * @since 0.2.2
     */
    function utils_is_blacklisted_id(desktop_id: string): boolean;

    /**
     * Searches the known list of registered category IDs.
     * @param category_id a desktop ID, e.g. "AudioVideoEditing"
     * @returns `true` if the category ID is valid
     * @since 0.2.4
     */
    function utils_is_category_id(category_id: string): boolean;

    /**
     * Searches the known list of registered environment IDs.
     * @param environment_id a desktop ID, e.g. "GNOME"
     * @returns `true` if the environment ID is valid
     * @since 0.2.4
     */
    function utils_is_environment_id(environment_id: string): boolean;

    /**
     * Checks the licence string to check it being a valid licence.
     * NOTE: SPDX licences can't typically contain brackets.
     * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
     * @returns `true` if the license is a valid "SPDX license"
     * @since 0.2.5
     */
    function utils_is_spdx_license(license: string): boolean;

    /**
     * Searches the known list of SPDX license IDs.
     * @param license_id a single SPDX license ID, e.g. "CC-BY-3.0"
     * @returns `true` if the license ID is a valid "SPDX license ID"
     * @since 0.1.5
     */
    function utils_is_spdx_license_id(license_id: string): boolean;

    /**
     * Searches the known list of stock icons.
     * @param name an icon name
     * @returns `true` if the icon is a "stock icon name" and does not need to be          included in the AppStream icon tarball
     * @since 0.1.3
     */
    function utils_is_stock_icon_name(name: string): boolean;

    /**
     * Converts a non-SPDX license into an SPDX format string where possible.
     * @param license a not-quite SPDX license string, e.g. "GPLv3+"
     * @returns the best-effort SPDX license string
     * @since 0.5.5
     */
    function utils_license_to_spdx(license: string): string;

    /**
     * Checks the search token if it is valid. Valid tokens are at least 3 chars in
     * length, not common words like "and", and do not contain markup.
     * @param token the search token
     * @returns `true` is the search token was valid
     * @since 0.3.4
     */
    function utils_search_token_valid(token: string): boolean;

    /**
     * Splits up a string into tokens and returns tokens that are suitable for
     * searching. This includes taking out common words and casefolding the
     * returned search tokens.
     * @param search the search string
     * @returns Valid tokens to search for, or `null` for error
     * @since 0.3.4
     */
    function utils_search_tokenize(search: string): string[];

    /**
     * De-tokenizes the SPDX licenses into a string.
     * @param license_tokens license tokens, typically from `as_utils_spdx_license_tokenize()`
     * @returns string, or `null` for invalid
     * @since 0.2.5
     */
    function utils_spdx_license_detokenize(license_tokens: string): string;

    /**
     * Tokenizes the SPDX license string (or any similarly formatted string)
     * into parts. Any licence parts of the string e.g. "LGPL-2.0+" are prefixed
     * with "@", the conjunctive replaced with "&" and the disjunctive replaced
     * with "|". Brackets are added as individual tokens and other strings are
     * appended into single tokens where possible.
     * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
     * @returns array of strings, or `null` for invalid
     * @since 0.1.5
     */
    function utils_spdx_license_tokenize(license: string): string[];

    /**
     * Performs multiple search and replace operations on the given string.
     * @param string The {@link GLib.String} to operate on
     * @param search The text to search for
     * @param replace The text to use for substitutions
     * @returns the number of replacements done, or 0 if `search` is not found.
     * @since 0.5.11
     */
    function utils_string_replace(string: GLib.String, search: string, replace: string): number;

    /**
     * Builds a valid unique ID using available data.
     * @param scope a {@link AppStreamGlib.AppScope} e.g. {@link AppStreamGlib.AppScope.SYSTEM}
     * @param bundle_kind System, e.g. 'package' or 'flatpak'
     * @param origin Origin, e.g. 'fedora' or 'gnome-apps-nightly'
     * @param kind {@link AppStreamGlib.AppKind}, e.g. {@link AppStreamGlib.AppKind.DESKTOP}
     * @param id AppStream ID, e.g. 'gimp.desktop'
     * @param branch Branch, e.g. '3-20' or 'master'
     * @returns a unique name, or `null` for error;
     * @since 0.6.1
     */
    function utils_unique_id_build(scope: AppScope, bundle_kind: BundleKind, origin: string, kind: AppKind, id: string, branch: string): string;

    /**
     * Checks two unique IDs for equality allowing globs to match.
     * @param unique_id1 a unique ID
     * @param unique_id2 another unique ID
     * @returns `true` if the ID's should be considered equal.
     * @since 0.6.1
     */
    function utils_unique_id_equal(unique_id1: string, unique_id2: string): boolean;

    /**
     * Converts a unique-id to a hash value.
     * 
     * This function implements the widely used DJB hash on the ID subset of the
     * unique-id string.
     * 
     * It can be passed to `g_hash_table_new()` as the hash_func parameter,
     * when using non-NULL strings or unique_ids as keys in a GHashTable.
     * @param unique_id a unique ID
     * @returns a hash value corresponding to the key
     * @since 0.6.2
     */
    function utils_unique_id_hash(unique_id: string): number;

    /**
     * Checks two unique IDs for equality allowing globs to match, whilst also
     * allowing clients to whitelist sections that have to match.
     * @param unique_id1 a unique ID
     * @param unique_id2 another unique ID
     * @param match_flags a {@link AppStreamGlib.UniqueIdMatchFlags} bitfield, e.g. {@link AppStreamGlib.UniqueIdMatchFlags.ID}
     * @returns `true` if the ID's should be considered equal.
     * @since 0.7.8
     */
    function utils_unique_id_match(unique_id1: string, unique_id2: string, match_flags: UniqueIdMatchFlags): boolean;

    /**
     * Checks if a unique ID is valid i.e. has the correct number of
     * sections.
     * @param unique_id a unique ID
     * @returns `true` if the ID is valid
     * @since 0.6.1
     */
    function utils_unique_id_valid(unique_id: string): boolean;

    /**
     * Compares version numbers for sorting.
     * @param version_a the release version, e.g. 1.2.3
     * @param version_b the release version, e.g. 1.2.3.1
     * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and `G_MAXINT` on error
     * @since 0.3.5
     */
    function utils_vercmp(version_a: string, version_b: string): number;

    /**
     * Compares version numbers for sorting.
     * @param version_a the release version, e.g. 1.2.3
     * @param version_b the release version, e.g. 1.2.3.1
     * @param flags some {@link AppStreamGlib.VersionCompareFlag}
     * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and `G_MAXINT` on error
     * @since 0.7.15
     */
    function utils_vercmp_full(version_a: string, version_b: string, flags: VersionCompareFlag): number;

    /**
     * Returns a dotted decimal version string from a 16 bit number.
     * @param val A uint16le version number
     * @param flags flags used for formatting, e.g. {@link AppStreamGlib.VersionParseFlag.USE_TRIPLET}
     * @returns A version number, e.g. "1.3"
     * @since 0.5.2
     */
    function utils_version_from_uint16(val: number, flags: VersionParseFlag): string;

    /**
     * Returns a dotted decimal version string from a 32 bit number.
     * @param val A uint32le version number
     * @param flags flags used for formatting, e.g. {@link AppStreamGlib.VersionParseFlag.USE_TRIPLET}
     * @returns A version number, e.g. "1.0.3"
     * @since 0.5.2
     */
    function utils_version_from_uint32(val: number, flags: VersionParseFlag): string;

    /**
     * Returns a dotted decimal version string from a version string. The supported
     * formats are:
     * 
     * - Dotted decimal, e.g. "1.2.3"
     * - Base 16, a hex number *with* a 0x prefix, e.g. "0x10203"
     * - Base 10, a string containing just [0-9], e.g. "66051"
     * - Date in YYYYMMDD format, e.g. 20150915
     * 
     * Anything with a '.' or that doesn't match [0-9] or 0x[a-f,0-9] is considered
     * a string and returned without modification.
     * @param version A version number
     * @returns A version number, e.g. "1.0.3"
     * @since 0.5.2
     */
    function utils_version_parse(version: string): string;

    /**
     * The flags to use when parsing resources.
     * @gir-type Flags
     */
    enum AppParseFlags {
        /**
         * No special actions to use
         */
        NONE = 0,
        /**
         * Use heuristic to infer properties
         */
        USE_HEURISTICS = 1,
        /**
         * Save comments from the file
         */
        KEEP_COMMENTS = 2,
        /**
         * Allow translatable flags like <_p>
         */
        CONVERT_TRANSLATABLE = 4,
        /**
         * Append new data rather than replacing
         */
        APPEND_DATA = 8,
        /**
         * Do not return errors for vetoed apps
         */
        ALLOW_VETO = 16,
        /**
         * Fall back to suboptimal data where required
         */
        USE_FALLBACKS = 32,
        /**
         * Add all extra metadata from the source file
         */
        ADD_ALL_METADATA = 64,
        /**
         * Only load native languages
         */
        ONLY_NATIVE_LANGS = 128,
    }


    /**
     * The component attributes.
     * @gir-type Flags
     */
    enum AppQuirk {
        /**
         * No special attributes
         */
        NONE = 0,
        /**
         * Installed by OS vendor
         */
        PROVENANCE = 1,
        /**
         * Cannot be removed
         */
        COMPULSORY = 2,
        /**
         * Has a source to allow staying up-to-date
         */
        HAS_SOURCE = 4,
        /**
         * Matches applications with any prefix
         */
        MATCH_ANY_PREFIX = 8,
        /**
         * A reboot is required after the action
         */
        NEEDS_REBOOT = 16,
        /**
         * The app is not reviewable
         */
        NOT_REVIEWABLE = 32,
        /**
         * The app has a shortcut in the system
         */
        HAS_SHORTCUT = 64,
        /**
         * The app is not launchable (run-able)
         */
        NOT_LAUNCHABLE = 128,
        /**
         * The component requires some kind of user action
         */
        NEEDS_USER_ACTION = 256,
        /**
         * Is a proxy app that operates on other applications
         */
        IS_PROXY = 512,
        /**
         * The device is unusable whilst the action is performed
         */
        REMOVABLE_HARDWARE = 1024,
        /**
         * The app developer has been verified
         */
        DEVELOPER_VERIFIED = 2048,
    }


    /**
     * The token match kind, which we want to be exactly 16 bits for storage
     * reasons.
     * @gir-type Flags
     */
    enum AppSearchMatch {
        /**
         * No token matching
         */
        NONE = 0,
        /**
         * Use the app mimetypes
         */
        MIMETYPE = 1,
        /**
         * Use the app package name
         */
        PKGNAME = 2,
        /**
         * Use the app description
         */
        DESCRIPTION = 4,
        /**
         * Use the app comment
         */
        COMMENT = 8,
        /**
         * Use the app name
         */
        NAME = 16,
        /**
         * Use the app keyword
         */
        KEYWORD = 32,
        /**
         * Use the app application ID
         */
        ID = 64,
        /**
         * Use the app origin
         */
        ORIGIN = 128,
    }


    /**
     * The flags to use when subsuming applications.
     * @gir-type Flags
     */
    enum AppSubsumeFlags {
        /**
         * No special actions to use
         */
        NONE = 0,
        /**
         * Do not overwrite already set properties
         */
        NO_OVERWRITE = 1,
        /**
         * Copy unset properties both ways
         */
        BOTH_WAYS = 2,
        REPLACE = 4,
        /**
         * Copy the kind
         */
        KIND = 8,
        /**
         * Copy the state
         */
        STATE = 16,
        /**
         * Copy the bundles
         */
        BUNDLES = 32,
        /**
         * Copy the translations
         */
        TRANSLATIONS = 64,
        /**
         * Copy the releases
         */
        RELEASES = 128,
        /**
         * Copy the kudos
         */
        KUDOS = 256,
        /**
         * Copy the categories
         */
        CATEGORIES = 512,
        /**
         * Copy the permissions
         */
        PERMISSIONS = 1024,
        /**
         * Copy the extends
         */
        EXTENDS = 2048,
        /**
         * Copy the compulsory-for-desktop
         */
        COMPULSORY = 4096,
        /**
         * Copy the screenshots
         */
        SCREENSHOTS = 8192,
        /**
         * Copy the reviews
         */
        REVIEWS = 16384,
        /**
         * Copy the content ratings
         */
        CONTENT_RATINGS = 32768,
        /**
         * Copy the provides
         */
        PROVIDES = 65536,
        /**
         * Copy the icons
         */
        ICONS = 131072,
        /**
         * Copy the mimetypes
         */
        MIMETYPES = 262144,
        /**
         * Copy the vetos
         */
        VETOS = 524288,
        /**
         * Copy the languages
         */
        LANGUAGES = 1048576,
        /**
         * Copy the name
         */
        NAME = 2097152,
        /**
         * Copy the comment
         */
        COMMENT = 4194304,
        /**
         * Copy the developer name
         */
        DEVELOPER_NAME = 8388608,
        /**
         * Copy the description
         */
        DESCRIPTION = 16777216,
        /**
         * Copy the metadata
         */
        METADATA = 33554432,
        /**
         * Copy the urls
         */
        URL = 67108864,
        /**
         * Copy the keywords
         */
        KEYWORDS = 134217728,
        /**
         * Copy the source file
         */
        FORMATS = 268435456,
        /**
         * Copy the branch
         */
        BRANCH = 536870912,
        /**
         * Copy the origin
         */
        ORIGIN = 1073741824,
        /**
         * Copy the metadata license
         */
        METADATA_LICENSE = 2147483648,
        /**
         * Copy the project license
         */
        PROJECT_LICENSE = 4294967296,
        /**
         * Copy the project group
         */
        PROJECT_GROUP = 8589934592,
        /**
         * Copy the source kind
         */
        SOURCE_KIND = 17179869184,
        SUGGESTS = 34359738368,
        /**
         * Copy the launchables
         */
        LAUNCHABLES = 68719476736,
        /**
         * Copy the agreements
         */
        AGREEMENTS = 137438953472,
    }


    /**
     * The flags used when loading INF files.
     * @gir-type Flags
     */
    enum InfLoadFlags {
        /**
         * No flags set
         */
        NONE = 0,
        /**
         * Be strict when loading the file
         */
        STRICT = 1,
        /**
         * Load keys and groups case insensitive
         */
        CASE_INSENSITIVE = 2,
    }


    /**
     * The flags used when converting descriptions from AppStream-style.
     * @gir-type Flags
     */
    enum MarkupConvertFlag {
        /**
         * No flags set
         */
        NONE = 0,
        /**
         * Ignore errors where possible
         */
        IGNORE_ERRORS = 1,
    }


    /**
     * The flags for converting from XML.
     * @gir-type Flags
     */
    enum NodeFromXmlFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Treat the text as an exact string
         */
        LITERAL_TEXT = 1,
        /**
         * Retain comments in the XML file
         */
        KEEP_COMMENTS = 2,
        /**
         * Only load native languages
         */
        ONLY_NATIVE_LANGS = 4,
    }


    /**
     * The flags for the review.
     * @gir-type Flags
     * @since 0.6.1
     */
    enum ReviewFlags {
        /**
         * No special flags set
         */
        NONE = 0,
        /**
         * The user wrote the review themselves
         */
        SELF = 1,
        /**
         * The user voted on the review
         */
        VOTED = 2,
    }


    /**
     * The flags to use when adding applications to the store.
     * @gir-type Flags
     */
    enum StoreAddFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * Local files will be used by default
         */
        PREFER_LOCAL = 1,
        /**
         * Allow multiple apps with the same AppStream ID
         */
        USE_UNIQUE_ID = 2,
        /**
         * Use a heuristic when adding merge components
         */
        USE_MERGE_HEURISTIC = 4,
        /**
         * Only load native languages
         */
        ONLY_NATIVE_LANGS = 8,
    }


    /**
     * The flags to use when loading the store.
     * @gir-type Flags
     */
    enum StoreLoadFlags {
        /**
         * No extra flags to use
         */
        NONE = 0,
        /**
         * The system app-info AppStream data
         */
        APP_INFO_SYSTEM = 1,
        /**
         * The per-user app-info AppStream data
         */
        APP_INFO_USER = 2,
        /**
         * The ubuntu-specific app-install data (obsolete)
         */
        APP_INSTALL = 4,
        /**
         * The installed AppData files
         */
        APPDATA = 8,
        /**
         * The installed desktop files
         */
        DESKTOP = 16,
        /**
         * Add vetoed applications
         */
        ALLOW_VETO = 32,
        /**
         * Add flatpak user applications (obsolete)
         */
        FLATPAK_USER = 64,
        /**
         * Add flatpak system applications (obsolete)
         */
        FLATPAK_SYSTEM = 128,
        /**
         * Ignore invalid files
         */
        IGNORE_INVALID = 256,
        /**
         * Ignore compressed files
         */
        ONLY_UNCOMPRESSED = 512,
        /**
         * Ignore non-wildcard matches
         */
        ONLY_MERGE_APPS = 1024,
    }


    /**
     * The flags used when matching unique IDs.
     * @gir-type Flags
     */
    enum UniqueIdMatchFlags {
        /**
         * No flags set
         */
        NONE = 0,
        /**
         * Scope, e.g. a {@link AppStreamGlib.AppScope}
         */
        SCOPE = 1,
        /**
         * Bundle kind, e.g. a {@link AppStreamGlib.BundleKind}
         */
        BUNDLE_KIND = 2,
        /**
         * Origin
         */
        ORIGIN = 4,
        /**
         * Component kind, e.g. a {@link AppStreamGlib.AppKind}
         */
        KIND = 8,
        /**
         * Component AppStream ID
         */
        ID = 16,
        /**
         * Branch
         */
        BRANCH = 32,
    }


    /**
     * The flags used when finding icons.
     * @gir-type Flags
     */
    enum UtilsFindIconFlag {
        /**
         * No flags set
         */
        NONE = 0,
        /**
         * Prefer a HiDPI icon
         */
        HI_DPI = 1,
    }


    /**
     * The flags used when comparing version numbers.
     * @gir-type Flags
     */
    enum VersionCompareFlag {
        /**
         * No flags set
         */
        NONE = 0,
        /**
         * Use a heuristic to parse version numbers
         */
        USE_HEURISTICS = 1,
    }


    /**
     * The flags used when parsing version numbers.
     * @gir-type Flags
     */
    enum VersionParseFlag {
        /**
         * No flags set
         */
        NONE = 0,
        /**
         * Use Microsoft-style version numbers
         */
        USE_TRIPLET = 1,
        /**
         * Use binary coded decimal notation
         */
        USE_BCD = 2,
    }


    namespace Agreement {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Agreement extends GObject.Object {
        static $gtype: GObject.GType<Agreement>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Agreement.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Agreement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Agreement;

        // Signals
        /** @signal */
        connect<K extends keyof Agreement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Agreement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Agreement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Agreement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Agreement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Agreement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param value the string.
         * @since 0.7.8
         */
        static kind_from_string(value: string): AgreementKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param value the {@link AppStreamGlib.AgreementKind}.
         * @since 0.7.8
         */
        static kind_to_string(value: AgreementKind): string;

        // Methods
        /**
         * @param agreement_section 
         */
        add_section(agreement_section: AgreementSection): void;

        /**
         * Gets the agreement kind.
         * @returns a string, e.g. {@link AppStreamGlib.AgreementKind.EULA}
         * @since 0.7.8
         */
        get_kind(): AgreementKind;

        /**
         * Gets the first section in the agreement.
         * @returns agreement section, or `null`
         * @since 0.7.8
         */
        get_section_default(): AgreementSection;

        /**
         * Gets all the sections in the agreement.
         * @returns array
         * @since 0.7.8
         */
        get_sections(): AgreementSection[];

        /**
         * Gets the agreement version_id.
         * @returns a string, e.g. "1.4a", or NULL
         * @since 0.7.8
         */
        get_version_id(): string;

        /**
         * Sets the agreement kind.
         * @param kind the agreement kind, e.g. {@link AppStreamGlib.AgreementKind.EULA}
         * @since 0.7.8
         */
        set_kind(kind: AgreementKind): void;

        /**
         * Sets the agreement version identifier.
         * @param version_id the agreement version ID, e.g. "1.4a"
         * @since 0.7.8
         */
        set_version_id(version_id: string): void;
    }


    namespace AgreementSection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AgreementSection extends GObject.Object {
        static $gtype: GObject.GType<AgreementSection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AgreementSection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AgreementSection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AgreementSection;

        // Signals
        /** @signal */
        connect<K extends keyof AgreementSection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AgreementSection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AgreementSection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AgreementSection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AgreementSection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AgreementSection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the agreement section desc.
         * @param locale the locale. e.g. "en_GB"
         * @returns a string, e.g. "GDPR", or NULL
         * @since 0.7.8
         */
        get_description(locale: string | null): string;

        /**
         * Gets the agreement section kind.
         * @returns a string, e.g. "GDPR", or NULL
         * @since 0.7.8
         */
        get_kind(): string;

        /**
         * Gets the agreement section name.
         * @param locale the locale. e.g. "en_GB"
         * @returns a string, e.g. "GDPR", or NULL
         * @since 0.7.8
         */
        get_name(locale: string | null): string;

        /**
         * Sets the agreement section description.
         * @param locale the locale. e.g. "en_GB"
         * @param desc the rating desc, e.g. "GDPR"
         * @since 0.7.8
         */
        set_description(locale: string | null, desc: string): void;

        /**
         * Sets the agreement section kind.
         * @param kind the rating kind, e.g. "GDPR"
         * @since 0.7.8
         */
        set_kind(kind: string): void;

        /**
         * Sets the agreement section name.
         * @param locale the locale. e.g. "en_GB"
         * @param name the rating name, e.g. "GDPR"
         * @since 0.7.8
         */
        set_name(locale: string | null, name: string): void;
    }


    namespace App {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): App;

        // Signals
        /** @signal */
        connect<K extends keyof App.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, App.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof App.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, App.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof App.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @since 0.1.2
         */
        static error_quark(): GLib.Quark;

        /**
         * Guesses the source kind based from the filename.
         * @param filename a file name
         * @since 0.1.8
         */
        static guess_source_kind(filename: string): FormatKind;

        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.5.10
         */
        static kind_from_string(kind: string): AppKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.AppKind}.
         * @since 0.5.10
         */
        static kind_to_string(kind: AppKind): string;

        /**
         * Converts the text representation to an enumerated value.
         * @param merge_kind a source kind string
         * @since 0.6.1
         */
        static merge_kind_from_string(merge_kind: string): AppMergeKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param merge_kind the {@link AppStreamGlib.AppMergeKind}, e.g. {@link AppStreamGlib.AppMergeKind.REPLACE}
         * @since 0.6.1
         */
        static merge_kind_to_string(merge_kind: AppMergeKind): string;

        /**
         * Converts the text representation to an enumerated value.
         * @param scope a source kind string
         * @since 0.6.1
         */
        static scope_from_string(scope: string): AppScope;

        /**
         * Converts the enumerated value to an text representation.
         * @param scope the {@link AppStreamGlib.AppScope}, e.g. {@link AppStreamGlib.AppScope.SYSTEM}
         * @since 0.6.1
         */
        static scope_to_string(scope: AppScope): string;

        /**
         * Converts the text representation to an enumerated value.
         * @param source_kind a source kind string
         * @since 0.2.2
         */
        static source_kind_from_string(source_kind: string): FormatKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param source_kind the {@link AppStreamGlib.FormatKind}.
         * @since 0.2.2
         */
        static source_kind_to_string(source_kind: FormatKind): string;

        /**
         * Converts the enumerated value to an text representation.
         * @param state the {@link AppStreamGlib.AppState}.
         * @since 0.2.2
         */
        static state_to_string(state: AppState): string;

        // Methods
        /**
         * Adds an addon to an application.
         * @param addon a {@link AppStreamGlib.App} instance.
         * @since 0.1.7
         */
        add_addon(addon: App): void;

        /**
         * Adds an agreement to an application.
         * @param agreement a {@link AppStreamGlib.Agreement} instance.
         * @since 0.7.8
         */
        add_agreement(agreement: Agreement): void;

        /**
         * Adds a package name to an application.
         * @param arch the package name.
         * @since 0.1.1
         */
        add_arch(arch: string): void;

        /**
         * Adds a bundle to an application.
         * @param bundle a {@link AppStreamGlib.Bundle} instance.
         * @since 0.3.5
         */
        add_bundle(bundle: Bundle): void;

        /**
         * Adds a menu category to the application.
         * @param category the category.
         * @since 0.1.0
         */
        add_category(category: string): void;

        /**
         * Adds a desktop that requires this application to be installed.
         * @param compulsory_for_desktop the desktop string, e.g. "GNOME".
         * @since 0.1.0
         */
        add_compulsory_for_desktop(compulsory_for_desktop: string): void;

        /**
         * Adds a content_rating to an application.
         * @param content_rating a {@link AppStreamGlib.ContentRating} instance.
         * @since 0.5.12
         */
        add_content_rating(content_rating: ContentRating): void;

        /**
         * Adds a parent ID to the application.
         * @param _extends the full ID, e.g. "eclipse.desktop".
         * @since 0.1.7
         */
        add_extends(_extends: string): void;

        /**
         * Add a format the application has been built from.
         * @param format the {@link AppStreamGlib.Format}.
         * @since 0.6.9
         */
        add_format(format: Format): void;

        /**
         * Adds an icon to an application.
         * @param icon a {@link AppStreamGlib.Icon} instance.
         * @since 0.3.1
         */
        add_icon(icon: Icon): void;

        /**
         * Add a keyword the application should match against.
         * @param locale the locale. e.g. "en_GB"
         * @param keyword the keyword.
         * @since 0.3.0
         */
        add_keyword(locale: string | null, keyword: string): void;

        /**
         * Add a kudo the application has obtained.
         * @param kudo the kudo.
         * @since 0.2.2
         */
        add_kudo(kudo: string): void;

        /**
         * Add a kudo the application has obtained.
         * @param kudo_kind the {@link AppStreamGlib.KudoKind}.
         * @since 0.2.2
         */
        add_kudo_kind(kudo_kind: KudoKind): void;

        /**
         * Adds a language to the application.
         * @param percentage the percentage completion of the translation, or 0 for unknown
         * @param locale the locale. e.g. "en_GB"
         * @since 0.1.0
         */
        add_language(percentage: number, locale: string | null): void;

        /**
         * Adds a launchable to an application.
         * @param launchable a {@link AppStreamGlib.Launchable} instance.
         * @since 0.6.13
         */
        add_launchable(launchable: Launchable): void;

        /**
         * Adds a metadata entry to the application.
         * @param key the metadata key.
         * @param value the value to store.
         * @since 0.1.0
         */
        add_metadata(key: string, value: string | null): void;

        /**
         * Adds a mimetype the application can process.
         * @param mimetype the mimetype.
         * @since 0.1.0
         */
        add_mimetype(mimetype: string): void;

        /**
         * Add a permission the application has obtained.
         * @param permission the permission.
         * @since 0.3.5
         */
        add_permission(permission: string): void;

        /**
         * Adds a package name to an application.
         * @param pkgname the package name.
         * @since 0.1.0
         */
        add_pkgname(pkgname: string): void;

        /**
         * Adds a provide to an application.
         * @param provide a {@link AppStreamGlib.Provide} instance.
         * @since 0.1.6
         */
        add_provide(provide: Provide): void;

        /**
         * Adds a specific attribute to an application.
         * @param quirk the {@link AppStreamGlib.AppQuirk}, e.g. {@link AppStreamGlib.AppQuirk.PROVENANCE}
         * @since 0.5.10
         */
        add_quirk(quirk: AppQuirk): void;

        /**
         * Adds a release to an application.
         * @param release a {@link AppStreamGlib.Release} instance.
         * @since 0.1.0
         */
        add_release(release: Release): void;

        /**
         * Adds a require to an application.
         * @param require a {@link AppStreamGlib.Require} instance.
         * @since 0.6.7
         */
        add_require(require: Require): void;

        /**
         * Adds a review to an application.
         * @param review a {@link AppStreamGlib.Review} instance.
         * @since 0.6.1
         */
        add_review(review: Review): void;

        /**
         * Adds a screenshot to an application.
         * @param screenshot a {@link AppStreamGlib.Screenshot} instance.
         * @since 0.1.0
         */
        add_screenshot(screenshot: Screenshot): void;

        /**
         * Adds a suggest to an application.
         * @param suggest a {@link AppStreamGlib.Suggest} instance.
         * @since 0.6.1
         */
        add_suggest(suggest: Suggest): void;

        /**
         * Adds a translation to an application.
         * @param translation a {@link AppStreamGlib.Translation} instance.
         * @since 0.5.8
         */
        add_translation(translation: Translation): void;

        /**
         * Adds some URL data to the application.
         * @param url_kind the URL kind, e.g. {@link AppStreamGlib.UrlKind.HOMEPAGE}
         * @param url the full URL.
         * @since 0.1.0
         */
        add_url(url_kind: UrlKind, url: string): void;

        /**
         * Converts all the icons in the application to a specific kind.
         * @param kind the AsIconKind, e.g. {@link AppStreamGlib.IconKind.EMBEDDED}.
         * @returns `true` for success
         * @since 0.3.1
         * @throws GLib.Error
         */
        convert_icons(kind: IconKind): boolean;

        /**
         * Compare one application with another for equality using the following
         * properties:
         * 
         *  1. scope, e.g. `system` or `user`
         *  2. bundle kind, e.g. `package` or `flatpak`
         *  3. origin, e.g. `fedora` or `gnome-apps-nightly`
         *  4. kind, e.g. `app` or `runtime`
         *  5. AppStream ID, e.g. `gimp.desktop`
         *  6. branch, e.g. `stable` or `master`
         * @param app2 another {@link AppStreamGlib.App} instance.
         * @returns `true` if the applications are equal
         * @since 0.6.1
         */
        equal(app2: App): boolean;

        /**
         * Gets all the addons the application has.
         * @returns an array
         * @since 0.1.7
         */
        get_addons(): App[];

        /**
         * Gets an agreement the application has defined of a specific type.
         * @param kind an agreement kind, e.g. {@link AppStreamGlib.AgreementKind.EULA}
         * @returns a {@link AppStreamGlib.Agreement} or NULL for not found
         * @since 0.7.8
         */
        get_agreement_by_kind(kind: AgreementKind): Agreement;

        /**
         * Gets a privacy policys the application has defined of a specific type.
         * @returns a {@link AppStreamGlib.Agreement} or NULL for not found
         * @since 0.7.8
         */
        get_agreement_default(): Agreement;

        /**
         * Gets the supported architectures for the application, or an empty list
         * if all architectures are supported.
         * @returns an array
         * @since 0.1.1
         */
        get_architectures(): string[];

        /**
         * Gets the branch for the application.
         * @returns string, or `null` if unset
         * @since 0.6.1
         */
        get_branch(): string;

        /**
         * Finds the default bundle.
         * @returns a {@link AppStreamGlib.Bundle}, or `null`
         * @since 0.3.5
         */
        get_bundle_default(): Bundle;

        /**
         * Gets any bundles the application has defined.
         * @returns an array
         * @since 0.3.5
         */
        get_bundles(): Bundle[];

        /**
         * Get the application categories.
         * @returns an array
         * @since 0.1.0
         */
        get_categories(): string[];

        /**
         * Gets the application summary for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_comment(locale: string | null): string;

        /**
         * Gets the comments set for the application.
         * @returns hash table of comments
         * @since 0.1.6
         */
        get_comments(): never;

        /**
         * Returns the desktops where this application is compulsory.
         * @returns an array
         * @since 0.1.0
         */
        get_compulsory_for_desktops(): string[];

        /**
         * Gets a content ratings the application has defined of a specific type.
         * @param kind a ratings kind, e.g. "oars-1.0"
         * @returns a {@link AppStreamGlib.ContentRating} or NULL for not found
         * @since 0.5.12
         */
        get_content_rating(kind: string): ContentRating;

        /**
         * Gets any content_ratings the application has defined.
         * @returns an array
         * @since 0.5.12
         */
        get_content_ratings(): ContentRating[];

        /**
         * Gets the application description markup for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_description(locale: string | null): string;

        /**
         * Gets the descriptions set for the application.
         * @returns hash table of descriptions
         * @since 0.1.6
         */
        get_descriptions(): never;

        /**
         * Gets the application developer name for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @returns string, or `null` if unset
         * @since 0.1.8
         */
        get_developer_name(locale: string | null): string;

        /**
         * Gets the developer_names set for the application.
         * @returns hash table of developer_names
         * @since 0.1.8
         */
        get_developer_names(): never;

        /**
         * Gets the IDs that are extended from the addon.
         * @returns an array
         * @since 0.1.7
         */
        get_extends(): string[];

        /**
         * Searches the list of formats for a specific filename.
         * @param filename a filename, e.g. "/home/hughsie/dave.desktop"
         * @returns A {@link AppStreamGlib.Format}, or `null` if not found
         * @since 0.6.9
         */
        get_format_by_filename(filename: string): Format;

        /**
         * Searches the list of formats for a specific format kind.
         * @param kind a {@link AppStreamGlib.FormatKind}, e.g. {@link AppStreamGlib.FormatKind.APPDATA}
         * @returns A {@link AppStreamGlib.Format}, or `null` if not found
         * @since 0.6.9
         */
        get_format_by_kind(kind: FormatKind): Format;

        /**
         * Returns the default format.
         * @returns A {@link AppStreamGlib.Format}, or `null` if not found
         * @since 0.6.9
         */
        get_format_default(): Format;

        /**
         * Gets any formats that make up the application.
         * @returns an array
         * @since 0.6.9
         */
        get_formats(): string[];

        /**
         * Finds the default icon.
         * @returns a {@link AppStreamGlib.Icon}, or `null`
         * @since 0.3.1
         */
        get_icon_default(): Icon;

        /**
         * Finds an icon of a specific size.
         * @param width Size in pixels
         * @param height Size in pixels
         * @returns a {@link AppStreamGlib.Icon}, or `null`
         * @since 0.3.1
         */
        get_icon_for_size(width: number, height: number): Icon;

        /**
         * Gets the application icon path.
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_icon_path(): string;

        /**
         * Gets any icons the application has defined.
         * @returns an array
         * @since 0.3.1
         */
        get_icons(): Icon[];

        /**
         * Gets the full ID value.
         * @returns the ID, e.g. "org.gnome.Software.desktop"
         * @since 0.1.0
         */
        get_id(): string;

        /**
         * Returns a filename which represents the applications ID, e.g. "gimp.desktop"
         * becomes "gimp" and is used for cache directories.
         * @returns A utf8 filename
         * @since 0.3.0
         */
        get_id_filename(): string;

        /**
         * Gets the ID kind.
         * @returns enumerated value
         * @since 0.1.0
         */
        get_id_kind(): IdKind;

        /**
         * Gets the full ID value, stripping any prefix.
         * @returns the ID, e.g. "org.gnome.Software.desktop"
         * @since 0.5.12
         */
        get_id_no_prefix(): string;

        /**
         * Gets any keywords the application should match against.
         * @param locale the locale. e.g. "en_GB"
         * @returns an array, or `null`
         * @since 0.3.0
         */
        get_keywords(locale: string | null): string[];

        /**
         * Gets the ID kind.
         * @returns enumerated value
         * @since 0.5.10
         */
        get_kind(): AppKind;

        /**
         * Gets any kudos the application has obtained.
         * @returns an array
         * @since 0.2.2
         */
        get_kudos(): string[];

        /**
         * Gets the language coverage for the specific language.
         * @param locale the locale. e.g. "en_GB"
         * @returns a percentage value where 0 is unspecified, or -1 for not found
         * @since 0.1.0
         */
        get_language(locale: string | null): number;

        /**
         * Get a list of all languages.
         * @returns list of language values
         * @since 0.1.0
         */
        get_languages(): string[];

        /**
         * Searches the list of launchables for a specific launchable kind.
         * @param kind a {@link AppStreamGlib.LaunchableKind}, e.g. {@link AppStreamGlib.FormatKind.APPDATA}
         * @returns A {@link AppStreamGlib.Launchable}, or `null` if not found
         * @since 0.6.13
         */
        get_launchable_by_kind(kind: LaunchableKind): Launchable;

        /**
         * Returns the default launchable.
         * @returns A {@link AppStreamGlib.Launchable}, or `null` if not found
         * @since 0.6.13
         */
        get_launchable_default(): Launchable;

        /**
         * Gets all the launchables the application has.
         * @returns an array
         * @since 0.6.13
         */
        get_launchables(): Launchable[];

        /**
         * Gets the merge_kind of the application.
         * @returns enumerated value
         * @since 0.6.1
         */
        get_merge_kind(): AppMergeKind;

        /**
         * Gets the metadata set for the application.
         * @returns hash table of metadata
         * @since 0.1.6
         */
        get_metadata(): { [key: string]: string };

        /**
         * Gets some metadata item.
         * @param key the metadata key.
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_metadata_item(key: string): string;

        /**
         * Gets the application project license.
         * @returns string, or `null` if unset
         * @since 0.1.4
         */
        get_metadata_license(): string;

        /**
         * Gets any mimetypes the application will register.
         * @returns an array
         * @since 0.2.0
         */
        get_mimetypes(): string[];

        /**
         * Gets the application name for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_name(locale: string | null): string;

        /**
         * Gets the names set for the application.
         * @returns hash table of names
         * @since 0.1.6
         */
        get_names(): never;

        /**
         * Gets the application origin.
         * @returns the origin string, or `null` if unset
         * @since 0.3.2
         */
        get_origin(): string;

        /**
         * Gets any permissions the application has obtained.
         * @returns an array
         * @since 0.3.5
         */
        get_permissions(): string[];

        /**
         * Gets the default package name.
         * @returns string, or `null` if unset
         * @since 0.2.0
         */
        get_pkgname_default(): string;

        /**
         * Gets the package names (if any) for the application.
         * @returns an array
         * @since 0.1.0
         */
        get_pkgnames(): string[];

        /**
         * Gets the application priority. Larger values trump smaller values.
         * @returns priority value
         * @since 0.1.0
         */
        get_priority(): number;

        /**
         * Gets an application project group.
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_project_group(): string;

        /**
         * Gets the application project license.
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_project_license(): string;

        /**
         * Gets all the provides the application has.
         * @returns an array
         * @since 0.1.6
         */
        get_provides(): Provide[];

        /**
         * Gets a specific release from the application.
         * @param version a version string
         * @returns a release, or `null`
         * @since 0.3.5
         */
        get_release(version: string): Release;

        /**
         * Gets a specific release from the application.
         * @param version a release version number, e.g. "1.2.3"
         * @returns a release, or `null`
         * @since 0.7.3
         */
        get_release_by_version(version: string): Release;

        /**
         * Gets the default (newest) release from the application.
         * @returns a release, or `null`
         * @since 0.3.5
         */
        get_release_default(): Release;

        /**
         * Gets all the releases the application has had.
         * @returns an array
         * @since 0.1.0
         */
        get_releases(): Release[];

        /**
         * Gets a specific requirement for the application.
         * @param kind a {@link AppStreamGlib.RequireKind}, e.g. {@link AppStreamGlib.RequireKind.FIRMWARE}
         * @param value a string, or NULL, e.g. `bootloader`
         * @returns A {@link AppStreamGlib.Require}, or `null` for not found
         * @since 0.6.7
         */
        get_require_by_value(kind: RequireKind, value: string): Require;

        /**
         * Gets any requires the application has defined. A requirement could be that
         * a firmware version has to be below a defined version or that another
         * application is required to be installed.
         * @returns an array
         * @since 0.6.7
         */
        get_requires(): Require[];

        /**
         * Gets any reviews the application has defined.
         * @returns an array
         * @since 0.6.1
         */
        get_reviews(): Screenshot[];

        /**
         * Gets the scope of the application.
         * @returns enumerated value
         * @since 0.6.1
         */
        get_scope(): AppScope;

        /**
         * Gets the default screenshot for the component.
         * @returns a screenshot or `null`
         * @since 0.7.3
         */
        get_screenshot_default(): Screenshot;

        /**
         * Gets any screenshots the application has defined.
         * @returns an array
         * @since 0.1.0
         */
        get_screenshots(): Screenshot[];

        /**
         * Gets the token match fields. The bitfield given here is used to choose what
         * is included in the token cache.
         * @returns a {@link AppStreamGlib.AppSearchMatch}, e.g. {@link AppStreamGlib.AppSearchMatch.PKGNAME}
         * @since 0.6.13
         */
        get_search_match(): number;

        /**
         * Gets the default source filename the instance was populated from.
         * @returns string, or `null` if unset
         * @since 0.2.2
         */
        get_source_file(): string;

        /**
         * Gets the source kind, i.e. where the AsApp came from.
         * @returns enumerated value
         * @since 0.1.4
         */
        get_source_kind(): FormatKind;

        /**
         * Gets the source package name that produced the binary package.
         * Only source packages producing more than one binary package will have this
         * entry set.
         * @returns string, or `null` if unset
         * @since 0.2.4
         */
        get_source_pkgname(): string;

        /**
         * Gets the application state.
         * @returns enumerated value
         * @since 0.2.2
         */
        get_state(): AppState;

        /**
         * Gets any suggests the application has defined.
         * @returns an array
         * @since 0.6.1
         */
        get_suggests(): Suggest[];

        /**
         * Gets any translations the application has defined.
         * @returns an array
         * @since 0.5.8
         */
        get_translations(): Translation[];

        /**
         * Gets the trust flags, i.e. how trusted the incoming data is.
         * @returns bitfield
         * @since 0.2.2
         */
        get_trust_flags(): number;

        /**
         * Gets the unique ID value to represent the component.
         * @returns the unique ID, e.g. `system/package/fedora/desktop/gimp.desktop/master`
         * @since 0.6.1
         */
        get_unique_id(): string;

        /**
         * Gets the application upstream update contact email.
         * @returns string, or `null` if unset
         * @since 0.1.4
         */
        get_update_contact(): string;

        /**
         * Gets a URL.
         * @param url_kind the URL kind, e.g. {@link AppStreamGlib.UrlKind.HOMEPAGE}.
         * @returns string, or `null` if unset
         * @since 0.1.0
         */
        get_url_item(url_kind: UrlKind): string;

        /**
         * Gets the URLs set for the application.
         * @returns hash table of URLs
         * @since 0.1.0
         */
        get_urls(): never;

        /**
         * Gets the list of vetos.
         * @returns A list of vetos
         * @since 0.2.5
         */
        get_vetos(): string[];

        /**
         * Searches the category list for a specific item.
         * @param category a category string, e.g. "DesktopSettings"
         * @returns `true` if the application has got the specified category
         * @since 0.1.5
         */
        has_category(category: string): boolean;

        /**
         * Searches the compulsory for desktop list for a specific item.
         * @param desktop a desktop string, e.g. "GNOME"
         * @returns `true` if the application is compulsory for a specific desktop
         * @since 0.5.12
         */
        has_compulsory_for_desktop(desktop: string): boolean;

        /**
         * Searches the kudo list for a specific item.
         * @param kudo a kudo string, e.g. "SearchProvider"
         * @returns `true` if the application has got the specified kudo
         * @since 0.2.2
         */
        has_kudo(kudo: string): boolean;

        /**
         * Searches the kudo list for a specific item.
         * @param kudo a {@link AppStreamGlib.KudoKind}, e.g. {@link AppStreamGlib.KudoKind.SEARCH_PROVIDER}
         * @returns `true` if the application has got the specified kudo
         * @since 0.2.2
         */
        has_kudo_kind(kudo: KudoKind): boolean;

        /**
         * Searches the permission list for a specific item.
         * @param permission a permission string, e.g. "Network"
         * @returns `true` if the application has got the specified permission
         * @since 0.3.5
         */
        has_permission(permission: string): boolean;

        /**
         * Queries to see if an application has a specific attribute.
         * @param quirk the {@link AppStreamGlib.AppQuirk}, e.g. {@link AppStreamGlib.AppQuirk.PROVENANCE}
         * @returns `true` if the application has the attribute
         * @since 0.5.10
         */
        has_quirk(quirk: AppQuirk): boolean;

        /**
         * Parses an AppData file and populates the application state.
         * @param data data to parse.
         * @param flags {@link AppStreamGlib.AppParseFlags}, e.g. {@link AppStreamGlib.AppParseFlags.USE_HEURISTICS}
         * @returns `true` for success
         * @since 0.7.5
         * @throws GLib.Error
         */
        parse_data(data: GLib.Bytes | Uint8Array, flags: number): boolean;

        /**
         * Parses a desktop or AppData file and populates the application state.
         * 
         * Applications that are not suitable for the store will have vetos added.
         * @param filename file to load.
         * @param flags {@link AppStreamGlib.AppParseFlags}, e.g. {@link AppStreamGlib.AppParseFlags.USE_HEURISTICS}
         * @returns `true` for success
         * @since 0.1.2
         * @throws GLib.Error
         */
        parse_file(filename: string, flags: number): boolean;

        /**
         * Removed a menu category from the application.
         * @param category the category.
         * @since 0.6.13
         */
        remove_category(category: string): void;

        /**
         * Removes a format the application has been built from.
         * @param format the {@link AppStreamGlib.Format}.
         * @since 0.6.9
         */
        remove_format(format: Format): void;

        /**
         * Remove a kudo the application has obtained.
         * @param kudo the kudo.
         * @since 0.6.13
         */
        remove_kudo(kudo: string): void;

        /**
         * Removes a metadata item from the application.
         * @param key the metadata key.
         * @since 0.1.0
         */
        remove_metadata(key: string): void;

        /**
         * Removes a reason to not include the application in the metadata.
         * @param description veto string
         * @since 0.4.1
         */
        remove_veto(description: string): void;

        /**
         * Searches application data for a specific keyword.
         * @param search the search term.
         * @returns a match scrore, where 0 is no match and 100 is the best match.
         * @since 0.1.0
         */
        search_matches(search: string): number;

        /**
         * Searches application data for all the specific keywords.
         * @param search the search terms.
         * @returns a match scrore, where 0 is no match and larger numbers are better matches. It's probably a good idea to use `as_utils_search_tokenize()` to populate search as very short or common keywords will return a lot of matches.
         * @since 0.1.3
         */
        search_matches_all(search: string): number;

        /**
         * Set the branch that the instance was sourced from.
         * @param branch the branch, e.g. "master" or "3-16".
         * @since 0.6.1
         */
        set_branch(branch: string): void;

        /**
         * Sets the application summary for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @param comment the application summary.
         * @since 0.1.0
         */
        set_comment(locale: string | null, comment: string): void;

        /**
         * Sets the application description markup for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @param description the application description.
         * @since 0.1.0
         */
        set_description(locale: string | null, description: string): void;

        /**
         * Sets the application developer name for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @param developer_name the application developer name.
         * @since 0.1.0
         */
        set_developer_name(locale: string | null, developer_name: string): void;

        /**
         * Sets the icon path, where local icons would be found.
         * @param icon_path the local path.
         * @since 0.1.0
         */
        set_icon_path(icon_path: string): void;

        /**
         * Sets a new application ID. Any invalid characters will be automatically replaced.
         * @param id the new _full_ application ID, e.g. "org.gnome.Software.desktop".
         * @since 0.1.0
         */
        set_id(id: string): void;

        /**
         * Sets the application kind.
         * @param id_kind the {@link AppStreamGlib.AppKind}.
         * @since 0.1.0
         */
        set_id_kind(id_kind: IdKind): void;

        /**
         * Sets the application kind.
         * @param kind the {@link AppStreamGlib.AppKind}.
         * @since 0.5.10
         */
        set_kind(kind: AppKind): void;

        /**
         * Sets the merge kind of the application.
         * @param merge_kind the {@link AppStreamGlib.AppMergeKind}.
         * @since 0.6.1
         */
        set_merge_kind(merge_kind: AppMergeKind): void;

        /**
         * Set the project license.
         * @param metadata_license the project license string.
         * @since 0.1.4
         */
        set_metadata_license(metadata_license: string): void;

        /**
         * Sets the application name for a specific locale.
         * @param locale the locale. e.g. "en_GB"
         * @param name the application name.
         * @since 0.1.0
         */
        set_name(locale: string | null, name: string): void;

        /**
         * Sets the application origin.
         * @param origin the origin, e.g. "fedora-21"
         * @since 0.3.2
         */
        set_origin(origin: string): void;

        /**
         * Sets the application priority, where 0 is default and positive numbers
         * are better than negative numbers.
         * @param priority the priority.
         * @since 0.1.0
         */
        set_priority(priority: number): void;

        /**
         * Set any project affiliation.
         * @param project_group the project group, e.g. "GNOME".
         * @since 0.1.0
         */
        set_project_group(project_group: string): void;

        /**
         * Set the project license.
         * @param project_license the project license string.
         * @since 0.1.0
         */
        set_project_license(project_license: string): void;

        /**
         * Sets the scope of the application.
         * @param scope the {@link AppStreamGlib.AppScope}.
         * @since 0.6.1
         */
        set_scope(scope: AppScope): void;

        /**
         * Sets the token match fields. The bitfield given here is used to choose what
         * is included in the token cache.
         * @param search_match the {@link AppStreamGlib.AppSearchMatch}, e.g. {@link AppStreamGlib.AppSearchMatch.PKGNAME}
         * @since 0.6.13
         */
        set_search_match(search_match: number): void;

        /**
         * Set the file that the instance was sourced from.
         * @param source_file the filename.
         * @since 0.2.2
         */
        set_source_file(source_file: string): void;

        /**
         * Sets the source kind.
         * @param source_kind the {@link AppStreamGlib.FormatKind}.
         * @since 0.1.4
         */
        set_source_kind(source_kind: FormatKind): void;

        /**
         * Set the project license.
         * @param source_pkgname the project license string.
         * @since 0.2.4
         */
        set_source_pkgname(source_pkgname: string): void;

        /**
         * Sets the application state.
         * @param state the {@link AppStreamGlib.AppState}.
         * @since 0.2.2
         */
        set_state(state: AppState): void;

        /**
         * Sets the check flags, where {@link AppStreamGlib.AppTrustFlags.COMPLETE} is completely
         * trusted input.
         * @param trust_flags the {@link AppStreamGlib.AppTrustFlags}.
         * @since 0.2.2
         */
        set_trust_flags(trust_flags: number): void;

        /**
         * Set the project license.
         * @param update_contact the project license string.
         * @since 0.1.4
         */
        set_update_contact(update_contact: string): void;

        /**
         * Copies information from the donor to the application object.
         * @param donor the donor.
         * @since 0.1.0
         */
        subsume(donor: App): void;

        /**
         * Copies information from the donor to the application object.
         * @param donor the donor.
         * @param flags any optional {@link AppStreamGlib.AppSubsumeFlags}, e.g. {@link AppStreamGlib.AppSubsumeFlags.NO_OVERWRITE}
         * @since 0.1.4
         */
        subsume_full(donor: App, flags: bigint | number): void;

        /**
         * Exports a DOM tree to an XML file.
         * @param file a {@link Gio.File}
         * @param cancellable A {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 0.2.0
         * @throws GLib.Error
         */
        to_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Exports a DOM tree to an XML string.
         * @returns an XML string, or `null`
         * @since 0.7.14
         * @throws GLib.Error
         */
        to_xml(): GLib.String;

        /**
         * Validates data in the instance for style and consistency.
         * @param flags the {@link AppStreamGlib.AppValidateFlags} to use, e.g. {@link AppStreamGlib.AppValidateFlags.NONE}
         * @returns A list of problems, or `null`
         * @since 0.1.4
         * @throws GLib.Error
         */
        validate(flags: number): Problem[];
    }


    namespace Bundle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Bundle extends GObject.Object {
        static $gtype: GObject.GType<Bundle>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bundle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Bundle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Bundle;

        // Signals
        /** @signal */
        connect<K extends keyof Bundle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bundle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Bundle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bundle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Bundle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bundle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.3.5
         */
        static kind_from_string(kind: string): BundleKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.BundleKind}.
         * @since 0.3.5
         */
        static kind_to_string(kind: BundleKind): string;

        // Methods
        /**
         * Gets the ID for this bundle.
         * @returns ID, e.g. "foobar-1.0.2"
         * @since 0.3.5
         */
        get_id(): string;

        /**
         * Gets the bundle kind.
         * @returns the {@link AppStreamGlib.BundleKind}
         * @since 0.3.5
         */
        get_kind(): BundleKind;

        /**
         * Gets the runtime required for this bundle.
         * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
         * @since 0.5.10
         */
        get_runtime(): string;

        /**
         * Gets the SDK for this bundle.
         * @returns SDK identifier, e.g. "org.gnome.Sdk/i386/master"
         * @since 0.5.10
         */
        get_sdk(): string;

        /**
         * Sets the ID for this bundle.
         * @param id the URL.
         * @since 0.3.5
         */
        set_id(id: string): void;

        /**
         * Sets the bundle kind.
         * @param kind the {@link AppStreamGlib.BundleKind}, e.g. {@link AppStreamGlib.BundleKind.FLATPAK}.
         * @since 0.3.5
         */
        set_kind(kind: BundleKind): void;

        /**
         * Sets the runtime required for this bundle.
         * @param runtime the URL.
         * @since 0.5.10
         */
        set_runtime(runtime: string): void;

        /**
         * Sets the SDK for this bundle.
         * @param sdk the URL.
         * @since 0.5.10
         */
        set_sdk(sdk: string): void;
    }


    namespace Checksum {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Checksum extends GObject.Object {
        static $gtype: GObject.GType<Checksum>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Checksum.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Checksum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Checksum;

        // Signals
        /** @signal */
        connect<K extends keyof Checksum.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Checksum.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Checksum.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Checksum.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Checksum.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Checksum.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param target a source kind string
         * @since 0.4.2
         */
        static target_from_string(target: string): ChecksumTarget;

        /**
         * Converts the enumerated value to an text representation.
         * @param target the {@link AppStreamGlib.ChecksumTarget}.
         * @since 0.4.2
         */
        static target_to_string(target: ChecksumTarget): string;

        // Methods
        /**
         * Gets the full qualified URL for the checksum, usually pointing at some mirror.
         * @returns URL
         * @since 0.4.2
         */
        get_filename(): string;

        /**
         * Gets the checksum kind.
         * @returns the {@link GLib.ChecksumType}
         * @since 0.4.2
         */
        get_kind(): GLib.ChecksumType;

        /**
         * Gets the checksum target.
         * @returns the {@link GLib.ChecksumType}
         * @since 0.4.2
         */
        get_target(): ChecksumTarget;

        /**
         * Gets the suggested value the checksum, including file extension.
         * @returns filename
         * @since 0.4.2
         */
        get_value(): string;

        /**
         * Sets the filename used to generate the checksum.
         * @param filename the URL.
         * @since 0.4.2
         */
        set_filename(filename: string): void;

        /**
         * Sets the checksum kind.
         * @param kind the {@link GLib.ChecksumType}, e.g. {@link GLib.ChecksumType.SHA1}.
         * @since 0.4.2
         */
        set_kind(kind: GLib.ChecksumType): void;

        /**
         * Sets the checksum target.
         * @param target the {@link GLib.ChecksumType}, e.g. {@link AppStreamGlib.ChecksumTarget.CONTAINER}.
         * @since 0.4.2
         */
        set_target(target: ChecksumTarget): void;

        /**
         * Sets the checksum value filename.
         * @param value the new filename value.
         * @since 0.4.2
         */
        set_value(value: string): void;
    }


    namespace ContentRating {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ContentRating extends GObject.Object {
        static $gtype: GObject.GType<ContentRating>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentRating.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContentRating.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ContentRating;

        // Signals
        /** @signal */
        connect<K extends keyof ContentRating.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentRating.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContentRating.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentRating.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContentRating.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentRating.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the highest {@link AppStreamGlib.ContentRatingValue} which is allowed to be seen by the
         * given Common Sense Media `age` for the given subsection `id`.
         * 
         * For example, if the CSM age mappings for `violence-bloodshed` are:
         *  * age ≥ 0 for {@link AppStreamGlib.ContentRatingValue.NONE}
         *  * age ≥ 9 for {@link AppStreamGlib.ContentRatingValue.MILD}
         *  * age ≥ 11 for {@link AppStreamGlib.ContentRatingValue.MODERATE}
         *  * age ≥ 18 for {@link AppStreamGlib.ContentRatingValue.INTENSE}
         * then calling this function with `violence-bloodshed` and `age` set to 17 would
         * return {@link AppStreamGlib.ContentRatingValue.MODERATE}. Calling it with age 18 would
         * return {@link AppStreamGlib.ContentRatingValue.INTENSE}.
         * @param id the subsection ID e.g. `violence-cartoon`
         * @param age the CSM age
         * @since 0.7.18
         */
        static attribute_from_csm_age(id: string, age: number): ContentRatingValue;

        /**
         * Get a human-readable description of what content would be expected to
         * require the content rating attribute given by `id` and `value`.
         * @param id the subsection ID e.g. `violence-cartoon`
         * @param value the {@link AppStreamGlib.ContentRatingValue}, e.g. {@link AppStreamGlib.ContentRatingValue.INTENSE}
         * @since 0.7.18
         */
        static attribute_get_description(id: string, value: ContentRatingValue): string;

        /**
         * Gets the Common Sense Media approved age for a specific rating level.
         * @param id the subsection ID e.g. `violence-cartoon`
         * @param value the {@link AppStreamGlib.ContentRatingValue}, e.g. {@link AppStreamGlib.ContentRatingValue.INTENSE}
         * @since 0.7.15
         */
        static attribute_to_csm_age(id: string, value: ContentRatingValue): number;

        /**
         * Returns a list of all the valid OARS content rating attribute IDs as could
         * be passed to `as_content_rating_add_attribute()` or
         * `as_content_rating_attribute_to_csm_age()`.
         * @since 0.7.15
         */
        static get_all_rating_ids(): string[];

        /**
         * Format `age` as a human-readable string in the given rating `system`. This is
         * the way to present system-specific strings in a UI.
         * @param system an {@link AppStreamGlib.ContentRatingSystem}
         * @param age a CSM age to format
         * @since 0.7.18
         */
        static system_format_age(system: ContentRatingSystem, age: number): string | null;

        /**
         * Determine the most appropriate {@link AppStreamGlib.ContentRatingSystem} for the given `locale`.
         * Content rating systems are selected by territory. If no content rating system
         * seems suitable, {@link AppStreamGlib.ContentRatingSystem.IARC} is returned.
         * @param locale a locale, in the format described in `man 3 setlocale`
         * @since 0.7.18
         */
        static system_from_locale(locale: string): ContentRatingSystem;

        /**
         * Get the CSM ages corresponding to the entries returned by
         * `as_content_rating_system_get_formatted_ages()` for this `system`.
         * @param system an {@link AppStreamGlib.ContentRatingSystem}
         * @since 0.7.18
         */
        static system_get_csm_ages(system: ContentRatingSystem): number[];

        /**
         * Get an array of all the possible return values of
         * `as_content_rating_system_format_age()` for the given `system`. The array is
         * sorted with youngest CSM age first.
         * @param system an {@link AppStreamGlib.ContentRatingSystem}
         * @since 0.7.18
         */
        static system_get_formatted_ages(system: ContentRatingSystem): string[];

        /**
         * Get a human-readable string to identify `system`. `null` will be returned for
         * {@link AppStreamGlib.ContentRatingSystem.UNKNOWN}.
         * @param system an {@link AppStreamGlib.ContentRatingSystem}
         * @since 0.7.18
         */
        static system_to_string(system: ContentRatingSystem): string | null;

        /**
         * Converts the text representation to an enumerated value.
         * @param value the string.
         * @since 0.5.12
         */
        static value_from_string(value: string): ContentRatingValue;

        /**
         * Converts the enumerated value to an text representation.
         * @param value the {@link AppStreamGlib.ContentRatingValue}.
         * @since 0.5.12
         */
        static value_to_string(value: ContentRatingValue): string;

        // Methods
        /**
         * Adds an attribute value to the content rating.
         * @param id a content rating ID, e.g. `money-gambling`.
         * @param value a {@link AppStreamGlib.ContentRatingValue}, e.g. {@link AppStreamGlib.ContentRatingValue.MODERATE}.
         * @since 0.7.14
         */
        add_attribute(id: string, value: ContentRatingValue): void;

        /**
         * Gets the content_rating kind.
         * @returns a string, e.g. "oars-1.0", or NULL
         * @since 0.5.12
         */
        get_kind(): string;

        /**
         * Gets the lowest Common Sense Media approved age for the content_rating block.
         * NOTE: these numbers are based on the data and descriptions available from
         * https://www.commonsensemedia.org/about-us/our-mission/about-our-ratings and
         * you may disagree with them.
         * 
         * You're free to disagree with these, and of course you should use your own
         * brain to work our if your child is able to cope with the concepts enumerated
         * here. Some 13 year olds may be fine with the concept of mutilation of body
         * parts; others may get nightmares.
         * @returns The age in years, 0 for no rating, or G_MAXUINT for no details.
         * @since 0.5.12
         */
        get_minimum_age(): number;

        /**
         * Gets the set of ratings IDs which are present in this `content_rating`. An
         * example of a ratings ID is `violence-bloodshed`.
         * 
         * The IDs are returned in lexicographical order.
         * @returns `null`-terminated    array of ratings IDs; each ratings ID is owned by the {@link AppStreamGlib.ContentRating} and    must not be freed, but the container must be freed with `g_free()`
         * @since 0.7.15
         */
        get_rating_ids(): string[];

        /**
         * Gets the set value of a content rating key.
         * @param id A ratings ID, e.g. `violence-bloodshed`.
         * @returns the {@link AppStreamGlib.ContentRatingValue}, or {@link AppStreamGlib.ContentRatingValue.UNKNOWN}
         * @since 0.6.4
         */
        get_value(id: string): ContentRatingValue;

        /**
         * Sets the content rating kind.
         * @param kind the rating kind, e.g. "oars-1.0"
         * @since 0.5.12
         */
        set_kind(kind: string): void;
    }


    namespace Format {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Format extends GObject.Object {
        static $gtype: GObject.GType<Format>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Format.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Format.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Format;

        // Signals
        /** @signal */
        connect<K extends keyof Format.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Format.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Format.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Format.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Format.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Format.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Guesses the source kind based from the filename.
         * @param filename a file name
         * @since 0.6.9
         */
        static guess_kind(filename: string): FormatKind;

        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.6.9
         */
        static kind_from_string(kind: string): FormatKind;

        /**
         * @param kind 
         */
        static kind_to_string(kind: FormatKind): string;

        // Methods
        /**
         * Checks if two formats are the same.
         * @param format2 a {@link AppStreamGlib.Format} instance.
         * @returns `true` for success
         * @since 0.6.9
         */
        equal(format2: Format): boolean;

        /**
         * Gets the filename required for this format.
         * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
         * @since 0.6.9
         */
        get_filename(): string;

        /**
         * Gets the format kind.
         * @returns the {@link AppStreamGlib.FormatKind}
         * @since 0.6.9
         */
        get_kind(): FormatKind;

        /**
         * Sets the filename required for this format.
         * @param filename the URL.
         * @since 0.6.9
         */
        set_filename(filename: string): void;

        /**
         * Sets the format kind.
         * @param kind the {@link AppStreamGlib.FormatKind}, e.g. {@link AppStreamGlib.FormatKind.APPDATA}.
         * @since 0.6.9
         */
        set_kind(kind: FormatKind): void;
    }


    namespace Icon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Icon extends GObject.Object {
        static $gtype: GObject.GType<Icon>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Icon.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Icon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Icon;

        // Signals
        /** @signal */
        connect<K extends keyof Icon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Icon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Icon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Icon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @since 0.3.1
         */
        static error_quark(): GLib.Quark;

        /**
         * Converts the text representation to an enumerated value.
         * @param icon_kind the string.
         * @since 0.1.0
         */
        static kind_from_string(icon_kind: string): IconKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param icon_kind the `AsIconKind`.
         * @since 0.1.0
         */
        static kind_to_string(icon_kind: IconKind): string;

        // Methods
        /**
         * Converts the icon from one kind to another.
         * @param kind a %AsIconKind, e.g. #AS_ICON_KIND_EMBEDDED
         * @returns `true` for success
         * @since 0.3.1
         * @throws GLib.Error
         */
        convert_to_kind(kind: IconKind): boolean;

        /**
         * Gets the absolute path on disk of the icon.
         * NOTE: This is only set for icons of type {@link AppStreamGlib.IconKind.LOCAL}
         * @returns the absolute filename on disk
         * @since 0.3.2
         */
        get_filename(): string;

        /**
         * Gets the icon height.
         * @returns height in pixels
         * @since 0.3.1
         */
        get_height(): number;

        /**
         * Gets the icon kind.
         * @returns the {@link AppStreamGlib.IconKind}
         * @since 0.3.1
         */
        get_kind(): IconKind;

        /**
         * Gets the name of the icon, e.g. "epiphany.png"
         * @returns the basename of the icon
         * @since 0.3.1
         */
        get_name(): string;

        /**
         * Gets the icon pixbuf if set.
         * @returns the {@link GdkPixbuf.Pixbuf}, or `null`
         * @since 0.3.1
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;

        /**
         * Gets the suggested prefix of the icon.
         * @returns filename
         * @since 0.1.6
         */
        get_prefix(): string;

        /**
         * Gets the icon scale.
         * @returns scale factor
         * @since 0.6.13
         */
        get_scale(): number;

        /**
         * Gets the full qualified URL for the icon, usually pointing at some mirror.
         * NOTE: This is only set for icons of type {@link AppStreamGlib.IconKind.REMOTE}
         * @returns the fully qualified URL
         * @since 0.3.2
         */
        get_url(): string;

        /**
         * Gets the icon width.
         * @returns width in pixels
         * @since 0.3.1
         */
        get_width(): number;

        /**
         * Loads the icon into a local pixbuf.
         * @param flags a {@link AppStreamGlib.IconLoadFlags}, e.g. {@link AppStreamGlib.IconLoadFlags.SEARCH_SIZE}
         * @returns `true` for success
         * @since 0.3.1
         * @throws GLib.Error
         */
        load(flags: IconLoadFlags): boolean;

        /**
         * Sets the icon absolute filename.
         * @param filename the new icon URL.
         * @since 0.3.2
         */
        set_filename(filename: string): void;

        /**
         * Sets the icon height.
         * @param height the height in pixels.
         * @since 0.3.1
         */
        set_height(height: number): void;

        /**
         * Sets the icon kind.
         * @param kind the {@link AppStreamGlib.IconKind}, e.g. {@link AppStreamGlib.IconKind.STOCK}.
         * @since 0.3.1
         */
        set_kind(kind: IconKind): void;

        /**
         * Sets the basename to use for the icon.
         * @param name the icon name, e.g. "gimp.png"
         * @since 0.3.1
         */
        set_name(name: string): void;

        /**
         * Sets the icon pixbuf.
         * @param pixbuf the {@link GdkPixbuf.Pixbuf}, or `null`
         * @since 0.3.1
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;

        /**
         * Sets the icon prefix filename.
         * @param prefix the new filename prefix.
         * @since 0.1.6
         */
        set_prefix(prefix: string): void;

        /**
         * Sets the icon scale.
         * @param scale the scale as a factor.
         * @since 0.6.13
         */
        set_scale(scale: number): void;

        /**
         * Sets the icon URL.
         * @param url the new icon URL.
         * @since 0.3.2
         */
        set_url(url: string): void;

        /**
         * Sets the icon width.
         * @param width the width in pixels.
         * @since 0.3.1
         */
        set_width(width: number): void;
    }


    namespace Image {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Image;

        // Signals
        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.1.0
         */
        static kind_from_string(kind: string): ImageKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.ImageKind}.
         * @since 0.1.0
         */
        static kind_to_string(kind: ImageKind): string;

        // Methods
        /**
         * Checks if two images are the same.
         * @param image2 a {@link AppStreamGlib.Image} instance.
         * @returns `true` for success
         * @since 0.5.7
         */
        equal(image2: Image): boolean;

        /**
         * Gets the suggested basename the image, including file extension.
         * @returns filename
         * @since 0.1.6
         */
        get_basename(): string;

        /**
         * Gets the image height.
         * @returns height in pixels
         * @since 0.1.0
         */
        get_height(): number;

        /**
         * Gets the image kind.
         * @returns the {@link AppStreamGlib.ImageKind}
         * @since 0.1.0
         */
        get_kind(): ImageKind;

        /**
         * Gets the locale of the image.
         * @returns locale, or `null`
         * @since 0.5.14
         */
        get_locale(): string;

        /**
         * Gets the string representation of the pixbuf hash value.
         * @returns string representing the MD5 sum, or `null` if unset
         * @since 0.1.6
         */
        get_md5(): string;

        /**
         * Gets the image pixbuf if set.
         * @returns the {@link GdkPixbuf.Pixbuf}, or `null`
         * @since 0.1.6
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;

        /**
         * Gets the full qualified URL for the image, usually pointing at some mirror.
         * @returns URL
         * @since 0.1.0
         */
        get_url(): string;

        /**
         * Gets the image width.
         * @returns width in pixels
         * @since 0.1.0
         */
        get_width(): number;

        /**
         * Reads a pixbuf from a file.
         * 
         * NOTE: This function also sets the suggested filename which can be retrieved
         * using `as_image_get_basename()`. This can be overridden if required.
         * @param filename filename to read from
         * @returns `true` for success
         * @since 0.1.6
         * @throws GLib.Error
         */
        load_filename(filename: string): boolean;

        /**
         * Reads an image from a file.
         * @param filename filename to read from
         * @param dest_size The size of the constructed pixbuf, or 0 for the native size
         * @param src_size_min The smallest source size allowed, or 0 for none
         * @param flags a {@link AppStreamGlib.ImageLoadFlags}, e.g. {@link AppStreamGlib.ImageLoadFlags.NONE}
         * @returns `true` for success
         * @since 0.5.6
         * @throws GLib.Error
         */
        load_filename_full(filename: string, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean;

        /**
         * Saves a pixbuf to a file.
         * @param filename filename to write to
         * @param width target width, or 0 for default
         * @param height target height, or 0 for default
         * @param flags some {@link AppStreamGlib.ImageSaveFlags} values, e.g. {@link AppStreamGlib.ImageSaveFlags.PAD_16_9}
         * @returns `true` for success
         * @since 0.1.6
         * @throws GLib.Error
         */
        save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean;

        /**
         * Resamples a pixbuf to a specific size.
         * @param width target width, or 0 for default
         * @param height target height, or 0 for default
         * @param flags some {@link AppStreamGlib.ImageSaveFlags} values, e.g. {@link AppStreamGlib.ImageSaveFlags.PAD_16_9}
         * @returns A {@link GdkPixbuf.Pixbuf} of the specified size
         * @since 0.1.6
         */
        save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf;

        /**
         * Sets the image basename filename.
         * @param basename the new filename basename.
         * @since 0.1.6
         */
        set_basename(basename: string): void;

        /**
         * Sets the image height.
         * @param height the height in pixels.
         * @since 0.1.0
         */
        set_height(height: number): void;

        /**
         * Sets the image kind.
         * @param kind the {@link AppStreamGlib.ImageKind}, e.g. {@link AppStreamGlib.ImageKind.THUMBNAIL}.
         * @since 0.1.0
         */
        set_kind(kind: ImageKind): void;

        /**
         * Sets the image locale.
         * @param locale the new image locale, e.g. "en_GB" or `null`.
         * @since 0.5.14
         */
        set_locale(locale: string): void;

        /**
         * Sets the image pixbuf.
         * @param pixbuf the {@link GdkPixbuf.Pixbuf}, or `null`
         * @since 0.1.6
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;

        /**
         * Sets the fully-qualified mirror URL to use for the image.
         * @param url the URL.
         * @since 0.1.0
         */
        set_url(url: string): void;

        /**
         * Sets the image width.
         * @param width the width in pixels.
         * @since 0.1.0
         */
        set_width(width: number): void;
    }


    namespace Launchable {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Launchable extends GObject.Object {
        static $gtype: GObject.GType<Launchable>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Launchable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Launchable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Launchable;

        // Signals
        /** @signal */
        connect<K extends keyof Launchable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Launchable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Launchable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Launchable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Launchable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Launchable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.6.13
         */
        static kind_from_string(kind: string): LaunchableKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.LaunchableKind}.
         * @since 0.6.13
         */
        static kind_to_string(kind: LaunchableKind): string;

        // Methods
        /**
         * Gets the launchable kind.
         * @returns the {@link AppStreamGlib.LaunchableKind}
         * @since 0.6.13
         */
        get_kind(): LaunchableKind;

        /**
         * Gets the value to use for the launchable.
         * @returns usually a desktop ID, e.g. "gimp.desktop"
         * @since 0.6.13
         */
        get_value(): string;

        /**
         * Sets the launchable kind.
         * @param kind the {@link AppStreamGlib.LaunchableKind}, e.g. {@link AppStreamGlib.LaunchableKind.DESKTOP_ID}.
         * @since 0.6.13
         */
        set_kind(kind: LaunchableKind): void;

        /**
         * Sets the fully-qualified mirror URL to use for the launchable.
         * @param value the URL.
         * @since 0.6.13
         */
        set_value(value: string): void;
    }


    namespace Problem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Problem extends GObject.Object {
        static $gtype: GObject.GType<Problem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Problem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Problem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Problem;

        // Signals
        /** @signal */
        connect<K extends keyof Problem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Problem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Problem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Problem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Problem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Problem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.ProblemKind}.
         * @since 0.1.4
         */
        static kind_to_string(kind: ProblemKind): string;

        // Methods
        /**
         * Gets the problem kind.
         * @returns a {@link AppStreamGlib.ProblemKind}, e.g. {@link AppStreamGlib.ProblemKind.TAG_MISSING}
         * @since 0.1.4
         */
        get_kind(): ProblemKind;

        /**
         * Gets the line number of the problem if known.
         * @returns a line number, where 0 is unknown
         * @since 0.1.4
         */
        get_line_number(): number;

        /**
         * Gets the specific message for the problem.
         * @returns the message
         * @since 0.1.4
         */
        get_message(): string;

        /**
         * Sets the problem kind.
         * @param kind the {@link AppStreamGlib.ProblemKind}.
         * @since 0.1.4
         */
        set_kind(kind: ProblemKind): void;

        /**
         * Adds an line_number to the problem.
         * @param line_number a `guint` instance.
         * @since 0.1.4
         */
        set_line_number(line_number: number): void;

        /**
         * Sets a message on the problem.
         * @param message the message text.
         * @since 0.1.4
         */
        set_message(message: string): void;
    }


    namespace Provide {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Provide extends GObject.Object {
        static $gtype: GObject.GType<Provide>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Provide.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Provide.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Provide;

        // Signals
        /** @signal */
        connect<K extends keyof Provide.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provide.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Provide.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provide.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Provide.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Provide.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.1.6
         */
        static kind_from_string(kind: string): ProvideKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.ProvideKind}.
         * @since 0.1.6
         */
        static kind_to_string(kind: ProvideKind): string;

        // Methods
        /**
         * Gets the provide kind.
         * @returns the {@link AppStreamGlib.ProvideKind}
         * @since 0.1.6
         */
        get_kind(): ProvideKind;

        /**
         * Gets the full qualified URL for the provide, usually pointing at some mirror.
         * @returns URL
         * @since 0.1.6
         */
        get_value(): string;

        /**
         * Sets the provide kind.
         * @param kind the {@link AppStreamGlib.ProvideKind}, e.g. {@link AppStreamGlib.ProvideKind.LIBRARY}.
         * @since 0.1.6
         */
        set_kind(kind: ProvideKind): void;

        /**
         * Sets the fully-qualified mirror URL to use for the provide.
         * @param value the URL.
         * @since 0.1.6
         */
        set_value(value: string): void;
    }


    namespace Release {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Release extends GObject.Object {
        static $gtype: GObject.GType<Release>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Release.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Release.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Release;

        // Signals
        /** @signal */
        connect<K extends keyof Release.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Release.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Release.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Release.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind_str the string.
         * @since 0.7.6
         */
        static kind_from_string(kind_str: string): ReleaseKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.ReleaseKind}.
         * @since 0.7.6
         */
        static kind_to_string(kind: ReleaseKind): string;

        /**
         * Converts the text representation to an enumerated value.
         * @param state a string
         * @since 0.6.6
         */
        static state_from_string(state: string): ReleaseState;

        /**
         * Converts the enumerated value to an text representation.
         * @param state the {@link AppStreamGlib.ReleaseState}, e.g. {@link AppStreamGlib.ReleaseState.INSTALLED}
         * @since 0.6.6
         */
        static state_to_string(state: ReleaseState): string;

        // Methods
        /**
         * Adds a release checksum.
         * @param checksum a {@link AppStreamGlib.Checksum} instance.
         * @since 0.4.2
         */
        add_checksum(checksum: Checksum): void;

        /**
         * Adds a release location.
         * @param location the location string.
         * @since 0.3.5
         */
        add_location(location: string): void;

        /**
         * Gets the release blob, which is typically firmware file data.
         * @param filename a filename
         * @returns a {@link GLib.Bytes}, or `null` for not set
         * @since 0.5.2
         */
        get_blob(filename: string): GLib.Bytes;

        /**
         * Gets the checksum for a release.
         * @param fn a file basename
         * @returns an {@link AppStreamGlib.Checksum}, or `null` for not found
         * @since 0.4.2
         */
        get_checksum_by_fn(fn: string): Checksum;

        /**
         * Gets the checksum for a release.
         * @param target a {@link AppStreamGlib.ChecksumTarget}, e.g. {@link AppStreamGlib.ChecksumTarget.CONTAINER}
         * @returns an {@link AppStreamGlib.Checksum}, or `null` for not found
         * @since 0.4.2
         */
        get_checksum_by_target(target: ChecksumTarget): Checksum;

        /**
         * Gets the release checksums.
         * @returns list of checksums
         * @since 0.4.2
         */
        get_checksums(): Checksum[];

        /**
         * Gets the release description markup for a given locale.
         * @param locale the locale. e.g. "en_GB"
         * @returns markup, or `null` for not set or invalid
         * @since 0.1.0
         */
        get_description(locale: string | null): string;

        /**
         * Gets the typical install duration.
         * @returns install duration in seconds, or 0 for unset
         * @since 0.7.15
         */
        get_install_duration(): number;

        /**
         * Gets the type of the release.
         * @returns enumerated value, e.g. {@link AppStreamGlib.ReleaseKind.STABLE}
         * @since 0.7.6
         */
        get_kind(): ReleaseKind;

        /**
         * Gets the default release location, typically a URL.
         * @returns string, or `null` for not set or invalid
         * @since 0.3.5
         */
        get_location_default(): string;

        /**
         * Gets the release locations, typically URLs.
         * @returns list of locations
         * @since 0.3.5
         */
        get_locations(): string[];

        /**
         * Gets the release size.
         * @param kind a {@link AppStreamGlib.SizeKind}, e.g. #AS_SIZE_KIND_DOWNLOAD
         * @returns The size in bytes, or 0 for unknown.
         * @since 0.5.2
         */
        get_size(kind: SizeKind): number;

        /**
         * Gets the release state.
         * @returns enumberated value, or {@link AppStreamGlib.ReleaseState.UNKNOWN} for not set or invalid
         * @since 0.5.8
         */
        get_state(): ReleaseState;

        /**
         * Gets the release timestamp.
         * @returns timestamp, or 0 for unset
         * @since 0.1.0
         */
        get_timestamp(): number;

        /**
         * Gets the release urgency.
         * @returns enumberated value, or {@link AppStreamGlib.UrgencyKind.UNKNOWN} for not set or invalid
         * @since 0.5.1
         */
        get_urgency(): UrgencyKind;

        /**
         * Gets a URL.
         * @param url_kind the URL kind, e.g. {@link AppStreamGlib.UrlKind.HOMEPAGE}.
         * @returns string, or `null` if unset
         * @since 0.7.15
         */
        get_url(url_kind: UrlKind): string;

        /**
         * Gets the release version.
         * @returns string, or `null` for not set or invalid
         * @since 0.1.0
         */
        get_version(): string;

        /**
         * Sets a release blob, which is typically firmware data or a detached signature.
         * 
         * NOTE: This is not stored in the XML file, and is only available in-memory.
         * @param filename a filename
         * @param blob the {@link GLib.Bytes} data blob
         * @since 0.5.2
         */
        set_blob(filename: string, blob: GLib.Bytes | Uint8Array): void;

        /**
         * Sets the description release markup.
         * @param locale the locale. e.g. "en_GB"
         * @param description the description markup.
         * @since 0.1.0
         */
        set_description(locale: string | null, description: string): void;

        /**
         * Sets the typical duration of the install.
         * @param install_duration the install duration in seconds
         * @since 0.7.15
         */
        set_install_duration(install_duration: bigint | number): void;

        /**
         * Sets the release kind.
         * @param kind the {@link AppStreamGlib.ReleaseKind}
         * @since 0.7.6
         */
        set_kind(kind: ReleaseKind): void;

        /**
         * Sets the release size.
         * @param kind a {@link AppStreamGlib.SizeKind}, e.g. #AS_SIZE_KIND_DOWNLOAD
         * @param size a size in bytes, or 0 for unknown
         * @since 0.5.2
         */
        set_size(kind: SizeKind, size: bigint | number): void;

        /**
         * Sets the release state.
         * @param state the release state, e.g. {@link AppStreamGlib.ReleaseState.INSTALLED}
         * @since 0.5.8
         */
        set_state(state: ReleaseState): void;

        /**
         * Sets the release timestamp.
         * @param timestamp the timestamp value.
         * @since 0.1.0
         */
        set_timestamp(timestamp: bigint | number): void;

        /**
         * Sets the release urgency.
         * @param urgency the release urgency, e.g. {@link AppStreamGlib.UrgencyKind.CRITICAL}
         * @since 0.5.1
         */
        set_urgency(urgency: UrgencyKind): void;

        /**
         * Adds some URL data to the application.
         * @param url_kind the URL kind, e.g. {@link AppStreamGlib.UrlKind.DETAILS}
         * @param url the full URL.
         * @since 0.7.15
         */
        set_url(url_kind: UrlKind, url: string): void;

        /**
         * Sets the release version.
         * @param version the version string.
         * @since 0.1.0
         */
        set_version(version: string): void;

        /**
         * Compares two release.
         * @param rel2 a {@link AppStreamGlib.Release} instance.
         * @returns -1 if rel1 > rel2, +1 if rel1 < rel2, 0 otherwise
         * @since 0.4.2
         */
        vercmp(rel2: Release): number;
    }


    namespace Require {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Require extends GObject.Object {
        static $gtype: GObject.GType<Require>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Require.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Require.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Require;

        // Signals
        /** @signal */
        connect<K extends keyof Require.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Require.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Require.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Require.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Require.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Require.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param compare the string.
         * @since 0.6.7
         */
        static compare_from_string(compare: string): RequireCompare;

        /**
         * Converts the enumerated value to an text representation.
         * @param compare the {@link AppStreamGlib.RequireCompare}.
         * @since 0.6.7
         */
        static compare_to_string(compare: RequireCompare): string;

        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.6.7
         */
        static kind_from_string(kind: string): RequireKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.RequireKind}.
         * @since 0.6.7
         */
        static kind_to_string(kind: RequireKind): string;

        // Methods
        /**
         * Checks if two requires are the same.
         * @param require2 a {@link AppStreamGlib.Require} instance.
         * @returns `true` for success
         * @since 0.7.7
         */
        equal(require2: Require): boolean;

        /**
         * Gets the require version comparison type.
         * @returns the {@link AppStreamGlib.RequireKind}
         * @since 0.6.7
         */
        get_compare(): RequireCompare;

        /**
         * Gets the require kind.
         * @returns the {@link AppStreamGlib.RequireKind}
         * @since 0.6.7
         */
        get_kind(): RequireKind;

        /**
         * Gets the require value if set.
         * @returns the value, e.g. "bootloader"
         * @since 0.6.7
         */
        get_value(): string;

        /**
         * Gets the require version if set.
         * @returns the version, e.g. "0.1.2"
         * @since 0.6.7
         */
        get_version(): string;

        /**
         * Sets the require version comparison type.
         * @param compare the {@link AppStreamGlib.RequireKind}, e.g. {@link AppStreamGlib.RequireKind.ID}.
         * @since 0.6.7
         */
        set_compare(compare: RequireCompare): void;

        /**
         * Sets the require kind.
         * @param kind the {@link AppStreamGlib.RequireKind}, e.g. {@link AppStreamGlib.RequireKind.ID}.
         * @since 0.6.7
         */
        set_kind(kind: RequireKind): void;

        /**
         * Sets the require value.
         * @param value an require version, e.g. `firmware`
         * @since 0.6.7
         */
        set_value(value: string): void;

        /**
         * Sets the require version.
         * @param version an version number, e.g. `0.1.2`
         * @since 0.6.7
         */
        set_version(version: string): void;

        /**
         * Compares the version number of the requirement with a predicate.
         * @param version a version number, e.g. `0.1.3`
         * @returns `true` if the predicate was true
         * @since 0.6.7
         * @throws GLib.Error
         */
        version_compare(version: string): boolean;
    }


    namespace Review {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::date": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::locale": (pspec: GObject.ParamSpec) => void;
            "notify::rating": (pspec: GObject.ParamSpec) => void;
            "notify::reviewer-id": (pspec: GObject.ParamSpec) => void;
            "notify::reviewer-name": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            date: Review;
            description: string;
            flags: bigint | number;
            id: string;
            locale: string;
            rating: number;
            reviewer_id: string;
            reviewerId: string;
            reviewer_name: string;
            reviewerName: string;
            summary: string;
            version: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Review extends GObject.Object {
        static $gtype: GObject.GType<Review>;

        // Properties
        /**
         * @since 0.6.1
         */
        get date(): Review;
        set date(val: Review);

        /**
         * @since 0.6.1
         * @default null
         */
        get description(): string;
        set description(val: string);

        /**
         * @since 0.6.1
         * @default 0
         */
        get flags(): number;
        set flags(val: bigint | number);

        /**
         * @since 0.6.1
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * @since 0.6.1
         * @default null
         */
        get locale(): string;
        set locale(val: string);

        /**
         * @since 0.6.1
         * @default 0
         */
        get rating(): number;
        set rating(val: number);

        /**
         * @since 0.6.1
         * @default null
         */
        get reviewer_id(): string;
        set reviewer_id(val: string);

        /**
         * @since 0.6.1
         * @default null
         */
        get reviewerId(): string;
        set reviewerId(val: string);

        /**
         * @since 0.6.1
         * @default null
         */
        get reviewer_name(): string;
        set reviewer_name(val: string);

        /**
         * @since 0.6.1
         * @default null
         */
        get reviewerName(): string;
        set reviewerName(val: string);

        /**
         * @since 0.6.1
         * @default null
         */
        get summary(): string;
        set summary(val: string);

        /**
         * @since 0.6.1
         * @default null
         */
        get version(): string;
        set version(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Review.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Review.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Review;

        // Signals
        /** @signal */
        connect<K extends keyof Review.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Review.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Review.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Review.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Review.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Review.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds flags to an existing review without replacing the other flags.
         * @param flags a {@link AppStreamGlib.ReviewFlags}, e.g. {@link AppStreamGlib.ReviewFlags.SELF}
         * @since 0.6.1
         */
        add_flags(flags: ReviewFlags): void;

        /**
         * Adds metadata to the review object.
         * It is left for the plugin to use this method as required, but a
         * typical use would be to store some secure authentication token.
         * @param key a string
         * @param value a string
         * @since 0.6.1
         */
        add_metadata(key: string, value: string): void;

        /**
         * Checks if two reviews are the same.
         * @param review2 a {@link AppStreamGlib.Review} instance.
         * @returns `true` for success
         * @since 0.6.1
         */
        equal(review2: Review): boolean;

        /**
         * Gets the date the review was originally submitted.
         * @returns the {@link GLib.DateTime}, or `null` for unset
         * @since 0.6.1
         */
        get_date(): GLib.DateTime;

        /**
         * Gets the multi-line review text that forms the body of the review.
         * @returns the string, or `null`
         * @since 0.6.1
         */
        get_description(): string;

        /**
         * Gets any flags set on the review, for example if the user has already
         * voted on the review or if the user wrote the review themselves.
         * @returns a {@link AppStreamGlib.ReviewFlags}, e.g. {@link AppStreamGlib.ReviewFlags.SELF}
         * @since 0.6.1
         */
        get_flags(): ReviewFlags;

        /**
         * Gets the review id.
         * @returns the review identifier, e.g. "deadbeef"
         * @since 0.6.1
         */
        get_id(): string;

        /**
         * Gets the locale for the review.
         * @returns the string, or `null`
         * @since 0.6.1
         */
        get_locale(): string;

        /**
         * Gets some metadata from a review object.
         * It is left for the plugin to use this method as required, but a
         * typical use would be to retrieve some secure authentication token.
         * @param key a string
         * @returns A string value, or `null` for not found
         * @since 0.6.1
         */
        get_metadata_item(key: string): string;

        /**
         * This allows the UI to sort reviews into the correct order.
         * Higher numbers indicate a more important or relevant review.
         * @returns the review priority, or 0 for unset.
         * @since 0.6.1
         */
        get_priority(): number;

        /**
         * Gets the star rating of the review, where 100 is 5 stars.
         * @returns integer as a percentage, or 0 for unset
         * @since 0.6.1
         */
        get_rating(): number;

        /**
         * Gets the name of the reviewer.
         * @returns the reviewer ID, e.g. "deadbeef", or `null`
         * @since 0.6.1
         */
        get_reviewer_id(): string;

        /**
         * Gets the name of the reviewer.
         * @returns the reviewer name, e.g. "David Smith", or `null`
         * @since 0.6.1
         */
        get_reviewer_name(): string;

        /**
         * Gets the review summary.
         * @returns the one-line summary, e.g. "Awesome application"
         * @since 0.6.1
         */
        get_summary(): string;

        /**
         * Gets the version string for the application being reviewed.
         * @returns the version string, e.g. "0.1.2", or `null` for unset
         * @since 0.6.1
         */
        get_version(): string;

        /**
         * Sets the date the review was originally submitted.
         * @param date a {@link GLib.DateTime}, or `null`
         * @since 0.6.1
         */
        set_date(date: GLib.DateTime): void;

        /**
         * Sets the multi-line review text that forms the body of the review.
         * @param description multi-line description
         * @since 0.6.1
         */
        set_description(description: string): void;

        /**
         * Gets any flags set on the review, for example if the user has already
         * voted on the review or if the user wrote the review themselves.
         * @param flags a {@link AppStreamGlib.ReviewFlags}, e.g. {@link AppStreamGlib.ReviewFlags.SELF}
         * @since 0.6.1
         */
        set_flags(flags: ReviewFlags): void;

        /**
         * Sets the review identifier that is unique to each review.
         * @param id review identifier, e.g. "deadbeef"
         * @since 0.6.1
         */
        set_id(id: string): void;

        /**
         * Sets the locale for the review.
         * @param locale locale, e.g. "en_GB"
         * @since 0.6.1
         */
        set_locale(locale: string): void;

        /**
         * Sets the priority for the review, where positive numbers indicate
         * a better review for the specific user.
         * @param priority a priority value
         * @since 0.6.1
         */
        set_priority(priority: number): void;

        /**
         * Sets the star rating of the review, where 100 is 5 stars.
         * @param rating an integer as a percentage, or 0 for unset
         * @since 0.6.1
         */
        set_rating(rating: number): void;

        /**
         * Sets the name of the reviewer, which can be left unset.
         * @param reviewer_id the reviewer ID, e.g. "deadbeef"
         * @since 0.6.1
         */
        set_reviewer_id(reviewer_id: string): void;

        /**
         * Sets the name of the reviewer, which can be left unset.
         * @param reviewer_name the reviewer name, e.g. "David Smith"
         * @since 0.6.1
         */
        set_reviewer_name(reviewer_name: string): void;

        /**
         * Sets the one-line summary that may be displayed in bold.
         * @param summary a one-line summary, e.g. "Awesome application"
         * @since 0.6.1
         */
        set_summary(summary: string): void;

        /**
         * Sets the version string for the application being reviewed.
         * @param version a version string, e.g. "0.1.2"
         * @since 0.6.1
         */
        set_version(version: string): void;
    }


    namespace Screenshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Screenshot extends GObject.Object {
        static $gtype: GObject.GType<Screenshot>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screenshot.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Screenshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Screenshot;

        // Signals
        /** @signal */
        connect<K extends keyof Screenshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Screenshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Screenshot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screenshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.1.0
         */
        static kind_from_string(kind: string): ScreenshotKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.ScreenshotKind}.
         * @since 0.1.0
         */
        static kind_to_string(kind: ScreenshotKind): string;

        // Methods
        /**
         * Adds an image to the screenshot.
         * @param image a {@link AppStreamGlib.Image} instance.
         * @since 0.1.0
         */
        add_image(image: Image): void;

        /**
         * Checks if two screenshots are the same.
         * @param screenshot2 a {@link AppStreamGlib.Screenshot} instance.
         * @returns `true` for success
         * @since 0.5.7
         */
        equal(screenshot2: Screenshot): boolean;

        /**
         * Gets the image caption for a specific locale.
         * @param locale the locale, or `null`. e.g. "en_GB"
         * @returns the caption
         * @since 0.1.0
         */
        get_caption(locale: string | null): string;

        /**
         * Gets the AsImage closest to the target size. The {@link AppStreamGlib.Image} may not actually
         * be the requested size, and the application may have to pad / rescale the
         * image to make it fit.
         * @param width target width
         * @param height target height
         * @returns an {@link AppStreamGlib.Image}, or `null`
         * @since 0.2.2
         */
        get_image(width: number, height: number): Image;

        /**
         * Gets the AsImage closest to the target size with the specified locale.
         * The {@link AppStreamGlib.Image} may not actually be the requested size, and the application may
         * have to pad / rescale the image to make it fit.
         * 
         * FIXME: This function assumes the images are ordered in preference order, e.g.
         * "en_GB -> en -> NULL"
         * @param locale locale, e.g. "en_GB"
         * @param width target width
         * @param height target height
         * @returns an {@link AppStreamGlib.Image}, or `null`
         * @since 0.5.14
         */
        get_image_for_locale(locale: string | null, width: number, height: number): Image;

        /**
         * Gets the images included in the screenshot of all sizes and locales.
         * @returns an array
         * @since 0.1.0
         */
        get_images(): Image[];

        /**
         * Returns all images of all sizes that are compatible with a specific locale.
         * @param locale a locale, e.g. `en_GB`
         * @returns an array
         * @since 0.5.14
         */
        get_images_for_locale(locale: string): Image[];

        /**
         * Gets the screenshot kind.
         * @returns a {@link AppStreamGlib.ScreenshotKind}
         * @since 0.1.0
         */
        get_kind(): ScreenshotKind;

        /**
         * Gets the screenshot priority.
         * @returns a priority value
         * @since 0.3.1
         */
        get_priority(): number;

        /**
         * Gets the source image (the unscaled version) for the screenshot
         * @returns an {@link AppStreamGlib.Image}, or `null`
         * @since 0.1.6
         */
        get_source(): Image;

        /**
         * Sets a caption on the screenshot for a specific locale.
         * @param locale the locale, or `null`. e.g. "en_GB"
         * @param caption the caption text.
         * @since 0.1.0
         */
        set_caption(locale: string | null, caption: string): void;

        /**
         * Sets the screenshot kind.
         * @param kind the {@link AppStreamGlib.ScreenshotKind}.
         * @since 0.1.0
         */
        set_kind(kind: ScreenshotKind): void;

        /**
         * Sets the screenshot priority. Higher numbers are better.
         * @param priority the priority value.
         * @since 0.3.1
         */
        set_priority(priority: number): void;
    }


    namespace Store {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::app-added signal is emitted when a component has been added to
             * the store.
             * @signal
             * @since 0.6.5
             * @run-last
             */
            "app-added": (app: App) => void;
            /**
             * The ::app-changed signal is emitted when a component has been changed
             * in the store.
             * @signal
             * @since 0.6.5
             * @run-last
             */
            "app-changed": (app: App) => void;
            /**
             * The ::app-removed signal is emitted when a component has been removed
             * from the store.
             * @signal
             * @since 0.6.5
             * @run-last
             */
            "app-removed": (app: App) => void;
            /**
             * The ::changed signal is emitted when components have been added
             * or removed from the store.
             * @signal
             * @since 0.1.2
             * @run-last
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Store extends GObject.Object {
        static $gtype: GObject.GType<Store>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Store.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Store.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Store;

        // Signals
        /** @signal */
        connect<K extends keyof Store.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Store.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Store.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Store.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Store.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Store.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @since 0.1.2
         */
        static error_quark(): GLib.Quark;

        // Virtual methods
        /**
         * @param app 
         * @virtual
         */
        vfunc_app_added(app: App): void;

        /**
         * @param app 
         * @virtual
         */
        vfunc_app_changed(app: App): void;

        /**
         * @param app 
         * @virtual
         */
        vfunc_app_removed(app: App): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        /**
         * Adds an application to the store. If a lower priority application has already
         * been added then this new application will replace it.
         * 
         * Additionally only applications where the kind is known will be added.
         * @param app a {@link AppStreamGlib.App} instance.
         * @since 0.1.0
         */
        add_app(app: App): void;

        /**
         * Adds several applications to the store.
         * 
         * Additionally only applications where the kind is known will be added.
         * @param apps an array of apps
         * @since 0.6.4
         */
        add_apps(apps: App[]): void;

        /**
         * Adds a filter to the store so that only components of this type are
         * loaded into the store. This may be useful if the client is only interested
         * in certain types of component, or not interested in loading components
         * it cannot process.
         * 
         * If no filter is set then all types of components are loaded.
         * @param kind a {@link AppStreamGlib.AppKind}, e.g. {@link AppStreamGlib.AppKind.FIRMWARE}
         * @since 0.3.5
         */
        add_filter(kind: AppKind): void;

        /**
         * Adds a metadata index key.
         * 
         * NOTE: if applications are removed *all* the indexes will be invalid and
         * will have to be re-added.
         * @param key the metadata key.
         * @since 0.3.0
         */
        add_metadata_index(key: string): void;

        /**
         * Converts all the icons in the store to a specific kind.
         * @param kind the AsIconKind, e.g. {@link AppStreamGlib.IconKind.EMBEDDED}.
         * @returns `true` for success
         * @since 0.3.1
         * @throws GLib.Error
         */
        convert_icons(kind: IconKind): boolean;

        /**
         * Gets an array of all the valid applications in the store.
         * @returns an array
         * @since 0.7.15
         */
        dup_apps(): App[];

        /**
         * Gets an array of all the merge applications that match a specific ID.
         * @param id the application full ID.
         * @returns an array
         * @since 0.7.15
         */
        dup_apps_by_id_merge(id: string): App[];

        /**
         * Parses an appstream store presented as an archive. This is typically
         * a .cab file containing firmware files.
         * @param bytes a {@link GLib.Bytes}.
         * @param cancellable a {@link Gio.Cancellable}.
         * @returns `true` for success
         * @since 0.5.2
         * @throws GLib.Error
         */
        from_bytes(bytes: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Parses an AppStream XML or DEP-11 YAML file and adds any valid applications
         * to the store.
         * 
         * If the root node does not have a 'origin' attribute, then the method
         * `as_store_set_origin()` should be called *before* this function if cached
         * icons are required.
         * 
         * If `file` does not exist, {@link Gio.IOErrorEnum.NOT_FOUND} will be returned. Other
         * `GIOErrors` and `AsStoreErrors` may be returned as appropriate.
         * @param file a {@link Gio.File}.
         * @param icon_root the icon path, or `null` for the default (unused)
         * @param cancellable a {@link Gio.Cancellable}.
         * @returns `true` for success
         * @since 0.1.0
         * @throws GLib.Error
         */
        from_file(file: Gio.File, icon_root: string | null, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Parses AppStream XML file and adds any valid applications to the store.
         * 
         * If the root node does not have a 'origin' attribute, then the method
         * `as_store_set_origin()` should be called *before* this function if cached
         * icons are required.
         * @param data XML data
         * @param icon_root the icon path, or `null` for the default.
         * @returns `true` for success
         * @since 0.1.1
         * @throws GLib.Error
         */
        from_xml(data: string, icon_root: string | null): boolean;

        /**
         * Gets the flags used for adding applications to the store.
         * @returns the {@link AppStreamGlib.StoreAddFlags}, or 0 if unset
         * @since 0.2.2
         */
        get_add_flags(): number;

        /**
         * Gets the AppStream API version.
         * @returns the API version
         * @since 0.1.1
         * @deprecated since 0.7.19: Use `as_store_get_version()` instead.
         */
        get_api_version(): number;

        /**
         * Finds an application in the store by ID.
         * If more than one application exists matching the specific ID,
         * (for instance when using {@link AppStreamGlib.StoreAddFlags.USE_UNIQUE_ID}) then the
         * first item that was added is returned.
         * @param id the application full ID.
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.1.0
         */
        get_app_by_id(id: string): App;

        /**
         * Finds an application in the store ignoring the prefix type.
         * @param id the application full ID.
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.5.12
         */
        get_app_by_id_ignore_prefix(id: string): App;

        /**
         * Finds an application in the store by either by the current desktop ID
         * or a desktop ID that it has used previously. This allows upstream software
         * to change their ID (e.g. from cheese.desktop to org.gnome.Cheese.desktop)
         * without us duplicating entries in the software center.
         * @param id the application full ID.
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.4.1
         */
        get_app_by_id_with_fallbacks(id: string): App;

        /**
         * Finds an application in the store that provides a specific launchable.
         * @param kind the {@link AppStreamGlib.LaunchableKind}
         * @param value the provide value, e.g. "gimp.desktop"
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.7.8
         */
        get_app_by_launchable(kind: LaunchableKind, value: string): App;

        /**
         * Finds an application in the store by package name.
         * @param pkgname the package name.
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.1.0
         */
        get_app_by_pkgname(pkgname: string): App;

        /**
         * Finds an application in the store by any of the possible package names.
         * @param pkgnames the package names to find.
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.4.1
         */
        get_app_by_pkgnames(pkgnames: string): App;

        /**
         * Finds an application in the store by something that it provides.
         * @param kind the {@link AppStreamGlib.ProvideKind}
         * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.5.0
         */
        get_app_by_provide(kind: ProvideKind, value: string): App;

        /**
         * Finds an application in the store by matching the unique ID.
         * @param unique_id the application unique ID, e.g.      `user/flatpak/gnome-apps-nightly/app/gimp.desktop/master`
         * @param search_flags the search flags, e.g. {@link AppStreamGlib.StoreSearchFlags.USE_WILDCARDS}
         * @returns a {@link AppStreamGlib.App} or `null`
         * @since 0.6.1
         */
        get_app_by_unique_id(unique_id: string, search_flags: number): App;

        /**
         * Gets an array of all the valid applications in the store.
         * @returns an array
         * @since 0.1.0
         */
        get_apps(): App[];

        /**
         * Gets an array of all the applications that match a specific ID,
         * ignoring the prefix type.
         * @param id the application full ID.
         * @returns an array
         * @since 0.5.12
         */
        get_apps_by_id(id: string): App[];

        /**
         * Gets an array of all the merge applications that match a specific ID.
         * @param id the application full ID.
         * @returns an array
         * @since 0.7.0
         */
        get_apps_by_id_merge(id: string): App[];

        /**
         * Gets an array of all the applications that match a specific metadata element.
         * @param key metadata key
         * @param value metadata value
         * @returns an array
         * @since 0.1.4
         */
        get_apps_by_metadata(key: string, value: string): App[];

        /**
         * Finds any applications in the store by something that they provides.
         * @param kind the {@link AppStreamGlib.ProvideKind}
         * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
         * @returns an array of applications
         * @since 0.7.5
         */
        get_apps_by_provide(kind: ProvideKind, value: string): App[];

        /**
         * Gets the metadata builder identifier, which is used to work out if old
         * metadata is compatible with this builder.
         * @returns the builder_id string, or `null` if unset
         * @since 0.2.5
         */
        get_builder_id(): string;

        /**
         * Gets the destdir, which is used to prefix usr.
         * @returns the destdir path, or `null` if unset
         * @since 0.2.4
         */
        get_destdir(): string;

        /**
         * Gets the metadata origin, which is used to locate icons.
         * @returns the origin string, or `null` if unset
         * @since 0.1.1
         */
        get_origin(): string;

        /**
         * Gets the token match fields. The bitfield given here is used to choose what
         * is included in the token cache.
         * @returns a {@link AppStreamGlib.AppSearchMatch}, e.g. {@link AppStreamGlib.AppSearchMatch.PKGNAME}
         * @since 0.6.13
         */
        get_search_match(): number;

        /**
         * Gets the size of the store after deduplication and prioritization has
         * taken place.
         * @returns the number of usable applications in the store
         * @since 0.1.0
         */
        get_size(): number;

        /**
         * Gets the AppStream API version.
         * @returns the API version
         * @since 0.7.19
         */
        get_version(): string;

        /**
         * Gets the flags used for adding files to the store.
         * @returns the {@link AppStreamGlib.StoreWatchFlags}, or 0 if unset
         * @since 0.4.2
         */
        get_watch_flags(): number;

        /**
         * Loads the store from the default locations.
         * @param flags {@link AppStreamGlib.StoreLoadFlags}, e.g. {@link AppStreamGlib.StoreLoadFlags.APP_INFO_SYSTEM}
         * @param cancellable a {@link Gio.Cancellable}.
         * @returns `true` for success
         * @since 0.1.2
         * @throws GLib.Error
         */
        load(flags: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously loads the store from the default locations.
         * @param flags {@link AppStreamGlib.StoreLoadFlags}, e.g. {@link AppStreamGlib.StoreLoadFlags.APP_INFO_SYSTEM}
         * @param cancellable a {@link Gio.Cancellable}.
         * @since 0.7.11
         */
        load_async(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously loads the store from the default locations.
         * @param flags {@link AppStreamGlib.StoreLoadFlags}, e.g. {@link AppStreamGlib.StoreLoadFlags.APP_INFO_SYSTEM}
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback}
         * @since 0.7.11
         */
        load_async(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously loads the store from the default locations.
         * @param flags {@link AppStreamGlib.StoreLoadFlags}, e.g. {@link AppStreamGlib.StoreLoadFlags.APP_INFO_SYSTEM}
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback}
         * @since 0.7.11
         */
        load_async(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Retrieve the result of `as_store_load_async()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `true` for success
         * @since 0.7.11
         * @throws GLib.Error
         */
        load_finish(result: Gio.AsyncResult): boolean;

        /**
         * Loads the store from a specific path.
         * @param path A path to load
         * @param cancellable a {@link Gio.Cancellable}.
         * @returns `true` for success
         * @since 0.2.2
         * @throws GLib.Error
         */
        load_path(path: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously loads the store from a specific path.
         * @param path A path to load
         * @param cancellable a {@link Gio.Cancellable}.
         * @since 0.7.11
         */
        load_path_async(path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously loads the store from a specific path.
         * @param path A path to load
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback}
         * @since 0.7.11
         */
        load_path_async(path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously loads the store from a specific path.
         * @param path A path to load
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback}
         * @since 0.7.11
         */
        load_path_async(path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Retrieve the result of `as_store_load_path_async()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `true` for success
         * @since 0.7.11
         * @throws GLib.Error
         */
        load_path_finish(result: Gio.AsyncResult): boolean;

        /**
         * Populates the token cache for all applications in the store. This allows
         * all the search keywords for all applications in the store to be
         * pre-processed at one time in multiple threads rather than on demand.
         * 
         * Note: Calling `as_app_search_matches()` automatically generates the search
         * cache for the {@link AppStreamGlib.App} object if it has not already been generated.
         * @since 0.6.5
         */
        load_search_cache(): void;

        /**
         * Removes all applications from the store.
         * @since 0.2.5
         */
        remove_all(): void;

        /**
         * Removes an application from the store if it exists.
         * @param app a {@link AppStreamGlib.App} instance.
         * @since 0.1.0
         */
        remove_app(app: App): void;

        /**
         * Removes an application from the store if it exists.
         * @param id an application id
         * @since 0.3.0
         */
        remove_app_by_id(id: string): void;

        /**
         * Removes any applications from the store if they have any vetos.
         * @since 0.5.13
         */
        remove_apps_with_veto(): void;

        /**
         * Removed a filter from the store so that components of this type are no longer
         * loaded into the store. This may be useful if the client is only interested
         * in certain types of component.
         * 
         * If all filters are removed then all types of components are loaded.
         * @param kind a {@link AppStreamGlib.AppKind}, e.g. {@link AppStreamGlib.AppKind.FIRMWARE}
         * @since 0.3.5
         */
        remove_filter(kind: AppKind): void;

        /**
         * Sets the flags used when adding applications to the store.
         * 
         * NOTE: Using {@link AppStreamGlib.StoreAddFlags.PREFER_LOCAL} may be a privacy risk depending on
         * your level of paranoia, and should not be used by default.
         * @param add_flags the {@link AppStreamGlib.StoreAddFlags}, e.g. {@link AppStreamGlib.StoreAddFlags.NONE}
         * @since 0.2.2
         */
        set_add_flags(add_flags: number): void;

        /**
         * Sets the AppStream API version.
         * @param api_version the API version
         * @since 0.1.1
         * @deprecated since 0.7.19: Use `as_store_set_version()` instead.
         */
        set_api_version(api_version: number): void;

        /**
         * Sets the metadata builder identifier, which is used to work out if old
         * metadata can be used.
         * @param builder_id the builder_id, e.g. "appstream-glib:1"
         * @since 0.2.5
         */
        set_builder_id(builder_id: string): void;

        /**
         * Sets the destdir, which is used to prefix usr.
         * @param destdir the destdir, e.g. "/tmp"
         * @since 0.2.4
         */
        set_destdir(destdir: string): void;

        /**
         * Sets the metadata origin, which is used to locate icons.
         * @param origin the origin, e.g. "fedora-21"
         * @since 0.1.1
         */
        set_origin(origin: string): void;

        /**
         * Sets the token match fields. The bitfield given here is used to choose what
         * is included in the token cache.
         * @param search_match the {@link AppStreamGlib.AppSearchMatch}, e.g. {@link AppStreamGlib.AppSearchMatch.PKGNAME}
         * @since 0.6.5
         */
        set_search_match(search_match: number): void;

        /**
         * Sets the AppStream API version.
         * @param api_version the API version
         * @since 0.7.19
         */
        set_version(api_version: string): void;

        /**
         * Sets the flags used when adding files to the store.
         * @param watch_flags the {@link AppStreamGlib.StoreWatchFlags}, e.g. {@link AppStreamGlib.StoreWatchFlags.NONE}
         * @since 0.4.2
         */
        set_watch_flags(watch_flags: number): void;

        /**
         * Outputs an optionally compressed XML file of all the applications in the store.
         * @param file file
         * @param flags the AsNodeToXmlFlags, e.g. {@link AppStreamGlib.NodeToXmlFlags.NONE}.
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @returns A {@link GLib.String}
         * @since 0.1.0
         * @throws GLib.Error
         */
        to_file(file: Gio.File, flags: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Outputs an XML representation of all the applications in the store.
         * @param flags the AsNodeToXmlFlags, e.g. {@link AppStreamGlib.NodeToXmlFlags.NONE}.
         * @returns A {@link GLib.String}
         * @since 0.1.0
         */
        to_xml(flags: number): GLib.String;

        /**
         * Validates information in the store for data applicable to the defined
         * metadata version.
         * @param flags the {@link AppStreamGlib.AppValidateFlags} to use, e.g. {@link AppStreamGlib.AppValidateFlags.NONE}
         * @returns A list of problems, or `null`
         * @since 0.2.4
         * @throws GLib.Error
         */
        validate(flags: number): Problem[];
    }


    namespace Suggest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Suggest extends GObject.Object {
        static $gtype: GObject.GType<Suggest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Suggest.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Suggest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Suggest;

        // Signals
        /** @signal */
        connect<K extends keyof Suggest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Suggest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Suggest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Suggest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Suggest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Suggest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.6.1
         */
        static kind_from_string(kind: string): SuggestKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.SuggestKind}.
         * @since 0.6.1
         */
        static kind_to_string(kind: SuggestKind): string;

        // Methods
        /**
         * Add the suggest application ID.
         * @param id an application ID, e.g. `gimp.desktop`
         * @since 0.6.1
         */
        add_id(id: string): void;

        /**
         * Gets the suggest ids if set.
         * @returns the {@link GLib.PtrArray}, or `null`
         * @since 0.6.1
         */
        get_ids(): string[];

        /**
         * Gets the suggest kind.
         * @returns the {@link AppStreamGlib.SuggestKind}
         * @since 0.6.1
         */
        get_kind(): SuggestKind;

        /**
         * Sets the suggest kind.
         * @param kind the {@link AppStreamGlib.SuggestKind}, e.g. {@link AppStreamGlib.SuggestKind.UPSTREAM}.
         * @since 0.6.1
         */
        set_kind(kind: SuggestKind): void;
    }


    namespace Translation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Translation extends GObject.Object {
        static $gtype: GObject.GType<Translation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Translation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Translation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Translation;

        // Signals
        /** @signal */
        connect<K extends keyof Translation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Translation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Translation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Translation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the text representation to an enumerated value.
         * @param kind the string.
         * @since 0.5.8
         */
        static kind_from_string(kind: string): TranslationKind;

        /**
         * Converts the enumerated value to an text representation.
         * @param kind the {@link AppStreamGlib.TranslationKind}.
         * @since 0.5.8
         */
        static kind_to_string(kind: TranslationKind): string;

        // Methods
        /**
         * Gets the ID for this translation.
         * @returns ID, e.g. "foobar-1.0.2"
         * @since 0.5.8
         */
        get_id(): string;

        /**
         * Gets the translation kind.
         * @returns the {@link AppStreamGlib.TranslationKind}
         * @since 0.5.8
         */
        get_kind(): TranslationKind;

        /**
         * Sets the ID for this translation.
         * @param id the URL.
         * @since 0.5.8
         */
        set_id(id: string): void;

        /**
         * Sets the translation kind.
         * @param kind the {@link AppStreamGlib.TranslationKind}, e.g. `AS_TRANSLATION_KIND_THUMBNAIL`.
         * @since 0.5.8
         */
        set_kind(kind: TranslationKind): void;
    }


    /**
     * @gir-type Alias
     */
    type AgreementClass = typeof Agreement;

    /**
     * @gir-type Alias
     */
    type AgreementSectionClass = typeof AgreementSection;

    /**
     * @gir-type Alias
     */
    type AppClass = typeof App;

    /**
     * @gir-type Alias
     */
    type BundleClass = typeof Bundle;

    /**
     * @gir-type Alias
     */
    type ChecksumClass = typeof Checksum;

    /**
     * @gir-type Alias
     */
    type ContentRatingClass = typeof ContentRating;

    /**
     * @gir-type Alias
     */
    type FormatClass = typeof Format;

    /**
     * @gir-type Alias
     */
    type IconClass = typeof Icon;

    /**
     * @gir-type Alias
     */
    type ImageClass = typeof Image;

    /**
     * @gir-type Alias
     */
    type LaunchableClass = typeof Launchable;

    /**
     * @gir-type Alias
     */
    type ProblemClass = typeof Problem;

    /**
     * @gir-type Alias
     */
    type ProvideClass = typeof Provide;

    /**
     * @gir-type Alias
     */
    type ReleaseClass = typeof Release;

    /**
     * @gir-type Alias
     */
    type RequireClass = typeof Require;

    /**
     * @gir-type Alias
     */
    type ReviewClass = typeof Review;

    /**
     * @gir-type Alias
     */
    type ScreenshotClass = typeof Screenshot;

    /**
     * @gir-type Alias
     */
    type StoreClass = typeof Store;

    /**
     * @gir-type Alias
     */
    type SuggestClass = typeof Suggest;

    /**
     * @gir-type Alias
     */
    type TranslationClass = typeof Translation;

    /**
     * The source kind.
     * 
     * This has been deprecated since 0.6.9 in favour of using AsFormatKind.
     * @gir-type Alias
     */
    type AppSourceKind = FormatKind;

    /**
     * The flags used for reporting the alpha cutouts in the image.
     * @gir-type Alias
     */
    type ImageAlphaFlags = number;

    /**
     * @gir-type Alias
     */
    type Node = GLib.Node;

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

export default AppStreamGlib;

// END
