
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './appstreamglib-1.0-ambient.d.ts';
import './appstreamglib-1.0-import.d.ts';
/**
 * AppStreamGlib-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace AppStreamGlib {

/**
 * The kind of the agreement.
 */
enum AgreementKind {
    /**
     * Unknown value
     */
    UNKNOWN,
    /**
     * A generic agreement without a specific type
     */
    GENERIC,
    /**
     * An End User License Agreement
     */
    EULA,
    /**
     * A privacy agreement, typically a GDPR statement
     */
    PRIVACY,
}
/**
 * The error type.
 */
enum AppError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * Invalid type
     */
    INVALID_TYPE,
}
/**
 * The component type.
 */
enum AppKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * A desktop application
     */
    DESKTOP,
    /**
     * A font add-on
     */
    FONT,
    /**
     * A codec add-on
     */
    CODEC,
    /**
     * A input method add-on
     */
    INPUT_METHOD,
    /**
     * A web appication
     */
    WEB_APP,
    /**
     * A software source
     */
    SOURCE,
    /**
     * An addon, e.g. a plugin
     */
    ADDON,
    /**
     * A firmware update
     */
    FIRMWARE,
    /**
     * Runtime platform
     */
    RUNTIME,
    /**
     * Generic component
     */
    GENERIC,
    /**
     * Operating system update
     */
    OS_UPDATE,
    /**
     * Operating system upgrade
     */
    OS_UPGRADE,
    /**
     * GNOME Shell extension
     */
    SHELL_EXTENSION,
    /**
     * Localization data
     */
    LOCALIZATION,
    /**
     * Console program
     */
    CONSOLE,
    /**
     * Driver for hardware support
     */
    DRIVER,
    /**
     * An icon theme
     */
    ICON_THEME,
}
/**
 * The component merge kind.
 */
enum AppMergeKind {
    /**
     * Unknown merge type
     */
    UNKNOWN,
    /**
     * No merge to be done
     */
    NONE,
    /**
     * Merge components, replacing
     */
    REPLACE,
    /**
     * Merge components, appending
     */
    APPEND,
}
/**
 * The application scope.
 */
enum AppScope {
    /**
     * Unknown scope
     */
    UNKNOWN,
    /**
     * User scope
     */
    USER,
    /**
     * System scope
     */
    SYSTEM,
}
/**
 * The application state.
 */
enum AppState {
    /**
     * Unknown state
     */
    UNKNOWN,
    /**
     * Application is installed
     */
    INSTALLED,
    /**
     * Application is available
     */
    AVAILABLE,
    /**
     * Application is locally available as a file
     */
    AVAILABLE_LOCAL,
    /**
     * Application is installed and updatable
     */
    UPDATABLE,
    /**
     * Application is referenced, but not available
     */
    UNAVAILABLE,
    /**
     * Application is queued for install
     */
    QUEUED_FOR_INSTALL,
    /**
     * Application is being installed
     */
    INSTALLING,
    /**
     * Application is being removed
     */
    REMOVING,
    /**
     * Application is installed and updatable live
     */
    UPDATABLE_LIVE,
    /**
     * Application is available for purchasing
     */
    PURCHASABLE,
    /**
     * Application is being purchased
     */
    PURCHASING,
}
/**
 * The flags to use when checking input.
 */
enum AppTrustFlags {
    /**
     * Trusted data with no validation
     */
    COMPLETE,
    /**
     * Check for duplicates
     */
    CHECK_DUPLICATES,
    /**
     * Check for valid UTF-8
     */
    CHECK_VALID_UTF8,
}
/**
 * The flags to use when validating.
 */
enum AppValidateFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Relax the checks
     */
    RELAX,
    /**
     * Make the checks more strict
     */
    STRICT,
    /**
     * Do not use the network
     */
    NO_NETWORK,
    /**
     * Check all applications in a store
     */
    ALL_APPS,
}
/**
 * The bundle type.
 */
enum BundleKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Limba application bundle
     */
    LIMBA,
    /**
     * Flatpak application deployment
     */
    FLATPAK,
    /**
     * Snap application deployment
     */
    SNAP,
    /**
     * Package-based application deployment
     */
    PACKAGE,
    /**
     * Cabinet firmware deployment
     */
    CABINET,
    /**
     * AppImage application bundle
     */
    APPIMAGE,
}
/**
 * The checksum target type.
 */
enum ChecksumTarget {
    /**
     * Unknown state
     */
    UNKNOWN,
    /**
     * Container file, e.g. `.cab`
     */
    CONTAINER,
    /**
     * Extracted file, e.g. `.bin`
     */
    CONTENT,
    /**
     * Signature, e.g. `.asc` or `.cat`
     */
    SIGNATURE,
    /**
     * Device-reported value
     */
    DEVICE,
}
/**
 * A content rating system for a particular territory.
 */
enum ContentRatingSystem {
    /**
     * Unknown ratings system
     */
    UNKNOWN,
    /**
     * INCAA
     */
    INCAA,
    /**
     * ACB
     */
    ACB,
    /**
     * DJCTQ
     */
    DJCTQ,
    /**
     * GSRR
     */
    GSRR,
    /**
     * PEGI
     */
    PEGI,
    /**
     * KAVI
     */
    KAVI,
    /**
     * USK
     */
    USK,
    /**
     * ESRA
     */
    ESRA,
    /**
     * CERO
     */
    CERO,
    /**
     * OFLCNZ
     */
    OFLCNZ,
    /**
     * Russia
     */
    RUSSIA,
    /**
     * MDA
     */
    MDA,
    /**
     * GRAC
     */
    GRAC,
    /**
     * ESRB
     */
    ESRB,
    /**
     * IARC
     */
    IARC,
}
/**
 * The specified level of an content_rating rating ID.
 */
enum ContentRatingValue {
    /**
     * Unknown value
     */
    UNKNOWN,
    /**
     * None
     */
    NONE,
    /**
     * A small amount
     */
    MILD,
    /**
     * A moderate amount
     */
    MODERATE,
    /**
     * An intense amount
     */
    INTENSE,
}
/**
 * The format kind.
 */
enum FormatKind {
    /**
     * Not formatd from a file
     */
    UNKNOWN,
    /**
     * AppStream file
     */
    APPSTREAM,
    /**
     * Desktop file
     */
    DESKTOP,
    /**
     * AppData file
     */
    APPDATA,
    /**
     * MetaInfo file
     */
    METAINFO,
}
/**
 * The error type.
 */
enum IconError {
    /**
     * Generic failure
     */
    FAILED,
}
/**
 * The icon type.
 */
enum IconKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Stock icon or present in the generic icon theme
     */
    STOCK,
    /**
     * An icon shipped with the AppStream metadata
     */
    CACHED,
    /**
     * An icon referenced by a remote URL
     */
    REMOTE,
    /**
     * An embedded Base64 icon
     */
    EMBEDDED,
    /**
     * An icon with absolute path and filename
     */
    LOCAL,
}
/**
 * The flags to use when loading icons.
 */
enum IconLoadFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Search first in a size-specific directory
     */
    SEARCH_SIZE,
}
/**
 * The component type.
 */
enum IdKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * A desktop application
     */
    DESKTOP,
    /**
     * A font add-on
     */
    FONT,
    /**
     * A codec add-on
     */
    CODEC,
    /**
     * A input method add-on
     */
    INPUT_METHOD,
    /**
     * A web appication
     */
    WEB_APP,
    /**
     * A software source
     */
    SOURCE,
    /**
     * An addon, e.g. a plugin
     */
    ADDON,
    /**
     * A firmware update
     */
    FIRMWARE,
    /**
     * Runtime platform
     */
    RUNTIME,
    /**
     * Generic component
     */
    GENERIC,
}
/**
 * The image type.
 */
enum ImageKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * The source image at full resolution
     */
    SOURCE,
    /**
     * A thumbnail at reduced resolution
     */
    THUMBNAIL,
}
/**
 * The flags used for loading images.
 */
enum ImageLoadFlags {
    /**
     * No special flags set
     */
    NONE,
    /**
     * Sharpen the resulting image
     */
    SHARPEN,
    /**
     * Set the image basename
     */
    SET_BASENAME,
    /**
     * Set the image checksum
     */
    SET_CHECKSUM,
    /**
     * Only load supported formats like PNG and JPG
     */
    ONLY_SUPPORTED,
    /**
     * Always resize the source icon to the perfect size
     */
    ALWAYS_RESIZE,
}
/**
 * The flags used for saving images.
 */
enum ImageSaveFlags {
    /**
     * No special flags set
     */
    NONE,
    /**
     * Pad with alpha to 16:9 aspect
     */
    PAD_16_9,
    /**
     * Sharpen the image to clarify detail
     */
    SHARPEN,
    /**
     * Blur the image to clear detail
     */
    BLUR,
}
/**
 * The error type.
 */
enum InfError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * Invalid type
     */
    INVALID_TYPE,
    /**
     * Data not found
     */
    NOT_FOUND,
}
/**
 * The kudo type.
 */
enum KudoKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Installs a search provider
     */
    SEARCH_PROVIDER,
    /**
     * Installs user documentation
     */
    USER_DOCS,
    /**
     * Uses the GNOME application menu
     */
    APP_MENU,
    /**
     * Uses a modern toolkit like GTK3 or QT5
     */
    MODERN_TOOLKIT,
    /**
     * Registers notifications with KDE or GNOME
     */
    NOTIFICATIONS,
    /**
     * Installs a high contrast icon
     */
    HIGH_CONTRAST,
    /**
     * Installs a high DPI icon
     */
    HI_DPI_ICON,
}
/**
 * The launchable type.
 */
enum LaunchableKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * A desktop ID
     */
    DESKTOP_ID,
    /**
     * A system service
     */
    SERVICE,
    /**
     * A manifest run by the cockpit project
     */
    COCKPIT_MANIFEST,
    /**
     * A web-app
     */
    URL,
}
/**
 * The format used when converting to or from AppStream descriptions.
 */
enum MarkupConvertFormat {
    /**
     * UTF-8 text
     */
    SIMPLE,
    /**
     * Markdown format
     */
    MARKDOWN,
    /**
     * No output
     */
    NULL,
    /**
     * AppStream (passthrough)
     */
    APPSTREAM,
    /**
     * HyperText Markup Language
     */
    HTML,
}
/**
 * The error type.
 */
enum NodeError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * XML markup was invalid
     */
    INVALID_MARKUP,
    /**
     * No support for parsing
     */
    NO_SUPPORT,
}
/**
 * The flags to use when inserting a node.
 */
enum NodeInsertFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * The data is already XML escaped
     */
    PRE_ESCAPED,
    /**
     * The name and key should be swapped
     */
    SWAPPED,
    /**
     * Preformat the 'description' markup
     */
    NO_MARKUP,
    /**
     * No xml:lang keys where text matches 'C'
     */
    DEDUPE_LANG,
    /**
     * Mark the tag name as translatable
     */
    MARK_TRANSLATABLE,
    /**
     * The data is Base64 enoded
     */
    BASE64_ENCODED,
}
/**
 * The flags for converting to XML.
 */
enum NodeToXmlFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Add an XML header to the data
     */
    ADD_HEADER,
    /**
     * Split up children with a newline
     */
    FORMAT_MULTILINE,
    /**
     * Indent the XML by child depth
     */
    FORMAT_INDENT,
    /**
     * Include the siblings when converting
     */
    INCLUDE_SIBLINGS,
    /**
     * Sort the tags by alphabetical order
     */
    SORT_CHILDREN,
}
/**
 * The problem type.
 */
enum ProblemKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * A tag is duplicated
     */
    TAG_DUPLICATED,
    /**
     * A required tag is missing
     */
    TAG_MISSING,
    /**
     * A tag value is invalid
     */
    TAG_INVALID,
    /**
     * A required attribute is missing
     */
    ATTRIBUTE_MISSING,
    /**
     * An attribute is invalid
     */
    ATTRIBUTE_INVALID,
    /**
     * The XML markup is invalid
     */
    MARKUP_INVALID,
    /**
     * Style guidelines are incorrect
     */
    STYLE_INCORRECT,
    /**
     * Translations are required
     */
    TRANSLATIONS_REQUIRED,
    /**
     * Some data is duplicated
     */
    DUPLICATE_DATA,
    /**
     * A value is required
     */
    VALUE_MISSING,
    /**
     * The URL is not found
     */
    URL_NOT_FOUND,
    /**
     * The file is invalid
     */
    FILE_INVALID,
    /**
     * The image aspect ratio is wrong
     */
    ASPECT_RATIO_INCORRECT,
    /**
     * The image resolution is wrong
     */
    RESOLUTION_INCORRECT,
}
/**
 * The provide type.
 */
enum ProvideKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * A library file
     */
    LIBRARY,
    /**
     * A binary file
     */
    BINARY,
    /**
     * A font file
     */
    FONT,
    /**
     * A hardware modalias
     */
    MODALIAS,
    /**
     * A runtime-loadable firmware file
     */
    FIRMWARE_RUNTIME,
    /**
     * A Python 2 module
     */
    PYTHON2,
    /**
     * A Python 3 module
     */
    PYTHON3,
    /**
     * A D-Bus session service
     */
    DBUS_SESSION,
    /**
     * A D-Bus system service
     */
    DBUS_SYSTEM,
    /**
     * A flashed firmware GUID
     */
    FIRMWARE_FLASHED,
    /**
     * An AppStream component ID
     */
    ID,
}
/**
 * The release size kind.
 */
enum ReleaseKind {
    /**
     * Unknown release type
     */
    UNKNOWN,
    /**
     * A stable release
     */
    STABLE,
    /**
     * A development release
     */
    DEVELOPMENT,
}
/**
 * The release state.
 */
enum ReleaseState {
    /**
     * Unknown state
     */
    UNKNOWN,
    /**
     * Release is installed
     */
    INSTALLED,
    /**
     * Release is available
     */
    AVAILABLE,
}
/**
 * The relational comparison type.
 */
enum RequireCompare {
    /**
     * Comparison predicate invalid or not known
     */
    UNKNOWN,
    /**
     * Equal to
     */
    EQ,
    /**
     * Not equal to
     */
    NE,
    /**
     * Less than
     */
    LT,
    /**
     * Greater than
     */
    GT,
    /**
     * Less than or equal to
     */
    LE,
    /**
     * Greater than or equal to
     */
    GE,
    /**
     * Filename glob, e.g. `test*`
     */
    GLOB,
    /**
     * A regular expression, e.g. `fw[0-255]`
     */
    REGEX,
}
/**
 * The require type.
 */
enum RequireKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Component ID
     */
    ID,
    /**
     * Device firmware version
     */
    FIRMWARE,
    /**
     * Hardware device, typically a GUID
     */
    HARDWARE,
    /**
     * Modalias string
     */
    MODALIAS,
    /**
     * Kernel version
     */
    KERNEL,
    /**
     * Amount of installed memory in MiB
     */
    MEMORY,
}
/**
 * The screenshot type.
 */
enum ScreenshotKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Optional screenshot
     */
    NORMAL,
    /**
     * Screenshot to show by default
     */
    DEFAULT,
}
/**
 * The release size kind.
 */
enum SizeKind {
    /**
     * Not known
     */
    UNKNOWN,
    /**
     * Installed size
     */
    INSTALLED,
    /**
     * Download size
     */
    DOWNLOAD,
}
/**
 * The error type.
 */
enum StoreError {
    /**
     * Generic failure
     */
    FAILED,
}
/**
 * The flags to use when searching in the store.
 */
enum StoreSearchFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Process the globs
     */
    USE_WILDCARDS,
}
/**
 * The flags to use when local files are added or removed from the store.
 */
enum StoreWatchFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Add applications if files change or are added
     */
    ADDED,
    /**
     * Remove applications if files are changed or deleted
     */
    REMOVED,
}
/**
 * The suggest type.
 */
enum SuggestKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Upstream-specified suggestion
     */
    UPSTREAM,
    /**
     * Suggestion from a heuristic
     */
    HEURISTIC,
}
/**
 * The tag type.
 */
enum Tag {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * `components`
     */
    COMPONENTS,
    /**
     * `component`
     */
    COMPONENT,
    /**
     * `id`
     */
    ID,
    /**
     * `pkgname`
     */
    PKGNAME,
    /**
     * `name`
     */
    NAME,
    /**
     * `summary`
     */
    SUMMARY,
    /**
     * `description`
     */
    DESCRIPTION,
    /**
     * `url`
     */
    URL,
    /**
     * `icon`
     */
    ICON,
    /**
     * `categories`
     */
    CATEGORIES,
    /**
     * `category`
     */
    CATEGORY,
    /**
     * `keywords`
     */
    KEYWORDS,
    /**
     * `keyword`
     */
    KEYWORD,
    /**
     * `mimetypes`
     */
    MIMETYPES,
    /**
     * `mimetype`
     */
    MIMETYPE,
    /**
     * `project_group`
     */
    PROJECT_GROUP,
    /**
     * `project_license`
     */
    PROJECT_LICENSE,
    /**
     * `screenshot`
     */
    SCREENSHOT,
    /**
     * `screenshots`
     */
    SCREENSHOTS,
    /**
     * `update_contact`
     */
    UPDATE_CONTACT,
    /**
     * `image`
     */
    IMAGE,
    /**
     * `compulsory_for_desktop`
     */
    COMPULSORY_FOR_DESKTOP,
    /**
     * `priority`
     */
    PRIORITY,
    /**
     * `caption`
     */
    CAPTION,
    /**
     * `languages`
     */
    LANGUAGES,
    /**
     * `lang`
     */
    LANG,
    /**
     * `metadata`
     */
    METADATA,
    /**
     * `value`
     */
    VALUE,
    /**
     * `releases`
     */
    RELEASES,
    /**
     * `release`
     */
    RELEASE,
    /**
     * `architectures`
     */
    ARCHITECTURES,
    /**
     * `arch`
     */
    ARCH,
    /**
     * `metadata_license`
     */
    METADATA_LICENSE,
    /**
     * `provides`
     */
    PROVIDES,
    /**
     * `extends`
     */
    EXTENDS,
    /**
     * `developer_name`
     */
    DEVELOPER_NAME,
    /**
     * `kudos`
     */
    KUDOS,
    /**
     * `kudo`
     */
    KUDO,
    /**
     * `source_pkgname`
     */
    SOURCE_PKGNAME,
    /**
     * `vetos`
     */
    VETOS,
    /**
     * `veto`
     */
    VETO,
    /**
     * `bundle`
     */
    BUNDLE,
    /**
     * `permissions`
     */
    PERMISSIONS,
    /**
     * `permission`
     */
    PERMISSION,
    /**
     * `location`
     */
    LOCATION,
    /**
     * `checksum`
     */
    CHECKSUM,
    /**
     * `size`
     */
    SIZE,
    /**
     * `translation`
     */
    TRANSLATION,
    /**
     * `content_rating`
     */
    CONTENT_RATING,
    /**
     * `content_attribute`
     */
    CONTENT_ATTRIBUTE,
    /**
     * `version`
     */
    VERSION,
    /**
     * `reviews`
     */
    REVIEWS,
    /**
     * `review`
     */
    REVIEW,
    /**
     * `reviewer_name`
     */
    REVIEWER_NAME,
    /**
     * `reviewer_id`
     */
    REVIEWER_ID,
    /**
     * `suggests`
     */
    SUGGESTS,
    /**
     * `requires`
     */
    REQUIRES,
    /**
     * `custom`
     */
    CUSTOM,
    /**
     * `launchable`
     */
    LAUNCHABLE,
    /**
     * `agreement`
     */
    AGREEMENT,
    /**
     * `agreement_section`
     */
    AGREEMENT_SECTION,
    P,
    LI,
    UL,
    OL,
    BINARY,
    FONT,
    DBUS,
    MODALIAS,
    LIBRARY,
}
/**
 * The flags to use when matching %AsTag's.
 */
enum TagFlags {
    /**
     * No special actions to use
     */
    NONE,
    /**
     * Use fallback tag names
     */
    USE_FALLBACKS,
    /**
     * Use translated tag names
     */
    USE_TRANSLATED,
}
/**
 * The translation type.
 */
enum TranslationKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Gettext translation system
     */
    GETTEXT,
    /**
     * QT translation system
     */
    QT,
}
/**
 * The urgency of a release.
 */
enum UrgencyKind {
    /**
     * Urgency invalid or not known
     */
    UNKNOWN,
    /**
     * Low urgency release
     */
    LOW,
    /**
     * Medium urgency release
     */
    MEDIUM,
    /**
     * High urgency release
     */
    HIGH,
    /**
     * Critically urgent release
     */
    CRITICAL,
}
/**
 * The URL type.
 */
enum UrlKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * Application project homepage
     */
    HOMEPAGE,
    /**
     * Application bugtracker
     */
    BUGTRACKER,
    /**
     * Application FAQ page
     */
    FAQ,
    /**
     * Application donation page
     */
    DONATION,
    /**
     * Application help manual
     */
    HELP,
    /**
     * The package is available, but missing
     */
    MISSING,
    /**
     * Application translation page
     */
    TRANSLATE,
    /**
     * Release details
     */
    DETAILS,
    /**
     * Link to source code
     */
    SOURCE,
    /**
     * URL to contact developer on
     */
    CONTACT,
    /**
     * Browse the source code
     */
    VCS_BROWSER,
    /**
     * Help developing
     */
    CONTRIBUTE,
}
/**
 * The error type.
 */
enum UtilsError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * Invalid type
     */
    INVALID_TYPE,
}
/**
 * The flags used when installing and removing metadata files.
 */
enum UtilsLocation {
    /**
     * Installed by the vendor, shared
     */
    SHARED,
    /**
     * Installed as metadata, shared
     */
    CACHE,
    /**
     * Installed by the user
     */
    USER,
}
/**
 * The flags to use when parsing resources.
 * @bitfield 
 */
enum AppParseFlags {
    /**
     * No special actions to use
     */
    NONE,
    /**
     * Use heuristic to infer properties
     */
    USE_HEURISTICS,
    /**
     * Save comments from the file
     */
    KEEP_COMMENTS,
    /**
     * Allow translatable flags like <_p>
     */
    CONVERT_TRANSLATABLE,
    /**
     * Append new data rather than replacing
     */
    APPEND_DATA,
    /**
     * Do not return errors for vetoed apps
     */
    ALLOW_VETO,
    /**
     * Fall back to suboptimal data where required
     */
    USE_FALLBACKS,
    /**
     * Add all extra metadata from the source file
     */
    ADD_ALL_METADATA,
    /**
     * Only load native languages
     */
    ONLY_NATIVE_LANGS,
}
/**
 * The component attributes.
 * @bitfield 
 */
enum AppQuirk {
    /**
     * No special attributes
     */
    NONE,
    /**
     * Installed by OS vendor
     */
    PROVENANCE,
    /**
     * Cannot be removed
     */
    COMPULSORY,
    /**
     * Has a source to allow staying up-to-date
     */
    HAS_SOURCE,
    /**
     * Matches applications with any prefix
     */
    MATCH_ANY_PREFIX,
    /**
     * A reboot is required after the action
     */
    NEEDS_REBOOT,
    /**
     * The app is not reviewable
     */
    NOT_REVIEWABLE,
    /**
     * The app has a shortcut in the system
     */
    HAS_SHORTCUT,
    /**
     * The app is not launchable (run-able)
     */
    NOT_LAUNCHABLE,
    /**
     * The component requires some kind of user action
     */
    NEEDS_USER_ACTION,
    /**
     * Is a proxy app that operates on other applications
     */
    IS_PROXY,
    /**
     * The device is unusable whilst the action is performed
     */
    REMOVABLE_HARDWARE,
    /**
     * The app developer has been verified
     */
    DEVELOPER_VERIFIED,
}
/**
 * The token match kind, which we want to be exactly 16 bits for storage
 * reasons.
 * @bitfield 
 */
enum AppSearchMatch {
    /**
     * No token matching
     */
    NONE,
    /**
     * Use the app mimetypes
     */
    MIMETYPE,
    /**
     * Use the app package name
     */
    PKGNAME,
    /**
     * Use the app description
     */
    DESCRIPTION,
    /**
     * Use the app comment
     */
    COMMENT,
    /**
     * Use the app name
     */
    NAME,
    /**
     * Use the app keyword
     */
    KEYWORD,
    /**
     * Use the app application ID
     */
    ID,
    /**
     * Use the app origin
     */
    ORIGIN,
}
/**
 * The flags to use when subsuming applications.
 * @bitfield 
 */
enum AppSubsumeFlags {
    /**
     * No special actions to use
     */
    NONE,
    /**
     * Do not overwrite already set properties
     */
    NO_OVERWRITE,
    /**
     * Copy unset properties both ways
     */
    BOTH_WAYS,
    REPLACE,
    /**
     * Copy the kind
     */
    KIND,
    /**
     * Copy the state
     */
    STATE,
    /**
     * Copy the bundles
     */
    BUNDLES,
    /**
     * Copy the translations
     */
    TRANSLATIONS,
    /**
     * Copy the releases
     */
    RELEASES,
    /**
     * Copy the kudos
     */
    KUDOS,
    /**
     * Copy the categories
     */
    CATEGORIES,
    /**
     * Copy the permissions
     */
    PERMISSIONS,
    /**
     * Copy the extends
     */
    EXTENDS,
    /**
     * Copy the compulsory-for-desktop
     */
    COMPULSORY,
    /**
     * Copy the screenshots
     */
    SCREENSHOTS,
    /**
     * Copy the reviews
     */
    REVIEWS,
    /**
     * Copy the content ratings
     */
    CONTENT_RATINGS,
    /**
     * Copy the provides
     */
    PROVIDES,
    /**
     * Copy the icons
     */
    ICONS,
    /**
     * Copy the mimetypes
     */
    MIMETYPES,
    /**
     * Copy the vetos
     */
    VETOS,
    /**
     * Copy the languages
     */
    LANGUAGES,
    /**
     * Copy the name
     */
    NAME,
    /**
     * Copy the comment
     */
    COMMENT,
    /**
     * Copy the developer name
     */
    DEVELOPER_NAME,
    /**
     * Copy the description
     */
    DESCRIPTION,
    /**
     * Copy the metadata
     */
    METADATA,
    /**
     * Copy the urls
     */
    URL,
    /**
     * Copy the keywords
     */
    KEYWORDS,
    /**
     * Copy the source file
     */
    FORMATS,
    /**
     * Copy the branch
     */
    BRANCH,
    /**
     * Copy the origin
     */
    ORIGIN,
    /**
     * Copy the metadata license
     */
    METADATA_LICENSE,
    /**
     * Copy the project license
     */
    PROJECT_LICENSE,
    /**
     * Copy the project group
     */
    PROJECT_GROUP,
    /**
     * Copy the source kind
     */
    SOURCE_KIND,
    SUGGESTS,
    /**
     * Copy the launchables
     */
    LAUNCHABLES,
    /**
     * Copy the agreements
     */
    AGREEMENTS,
}
/**
 * The flags used when loading INF files.
 * @bitfield 
 */
enum InfLoadFlags {
    /**
     * No flags set
     */
    NONE,
    /**
     * Be strict when loading the file
     */
    STRICT,
    /**
     * Load keys and groups case insensitive
     */
    CASE_INSENSITIVE,
}
/**
 * The flags used when converting descriptions from AppStream-style.
 * @bitfield 
 */
enum MarkupConvertFlag {
    /**
     * No flags set
     */
    NONE,
    /**
     * Ignore errors where possible
     */
    IGNORE_ERRORS,
}
/**
 * The flags for converting from XML.
 * @bitfield 
 */
enum NodeFromXmlFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Treat the text as an exact string
     */
    LITERAL_TEXT,
    /**
     * Retain comments in the XML file
     */
    KEEP_COMMENTS,
    /**
     * Only load native languages
     */
    ONLY_NATIVE_LANGS,
}
/**
 * The flags for the review.
 * @bitfield 
 */
enum ReviewFlags {
    /**
     * No special flags set
     */
    NONE,
    /**
     * The user wrote the review themselves
     */
    SELF,
    /**
     * The user voted on the review
     */
    VOTED,
}
/**
 * The flags to use when adding applications to the store.
 * @bitfield 
 */
enum StoreAddFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * Local files will be used by default
     */
    PREFER_LOCAL,
    /**
     * Allow multiple apps with the same AppStream ID
     */
    USE_UNIQUE_ID,
    /**
     * Use a heuristic when adding merge components
     */
    USE_MERGE_HEURISTIC,
    /**
     * Only load native languages
     */
    ONLY_NATIVE_LANGS,
}
/**
 * The flags to use when loading the store.
 * @bitfield 
 */
enum StoreLoadFlags {
    /**
     * No extra flags to use
     */
    NONE,
    /**
     * The system app-info AppStream data
     */
    APP_INFO_SYSTEM,
    /**
     * The per-user app-info AppStream data
     */
    APP_INFO_USER,
    /**
     * The ubuntu-specific app-install data (obsolete)
     */
    APP_INSTALL,
    /**
     * The installed AppData files
     */
    APPDATA,
    /**
     * The installed desktop files
     */
    DESKTOP,
    /**
     * Add vetoed applications
     */
    ALLOW_VETO,
    /**
     * Add flatpak user applications (obsolete)
     */
    FLATPAK_USER,
    /**
     * Add flatpak system applications (obsolete)
     */
    FLATPAK_SYSTEM,
    /**
     * Ignore invalid files
     */
    IGNORE_INVALID,
    /**
     * Ignore compressed files
     */
    ONLY_UNCOMPRESSED,
    /**
     * Ignore non-wildcard matches
     */
    ONLY_MERGE_APPS,
}
/**
 * The flags used when matching unique IDs.
 * @bitfield 
 */
enum UniqueIdMatchFlags {
    /**
     * No flags set
     */
    NONE,
    /**
     * Scope, e.g. a #AsAppScope
     */
    SCOPE,
    /**
     * Bundle kind, e.g. a #AsBundleKind
     */
    BUNDLE_KIND,
    /**
     * Origin
     */
    ORIGIN,
    /**
     * Component kind, e.g. a #AsAppKind
     */
    KIND,
    /**
     * Component AppStream ID
     */
    ID,
    /**
     * Branch
     */
    BRANCH,
}
/**
 * The flags used when finding icons.
 * @bitfield 
 */
enum UtilsFindIconFlag {
    /**
     * No flags set
     */
    NONE,
    /**
     * Prefer a HiDPI icon
     */
    HI_DPI,
}
/**
 * The flags used when comparing version numbers.
 * @bitfield 
 */
enum VersionCompareFlag {
    /**
     * No flags set
     */
    NONE,
    /**
     * Use a heuristic to parse version numbers
     */
    USE_HEURISTICS,
}
/**
 * The flags used when parsing version numbers.
 * @bitfield 
 */
enum VersionParseFlag {
    /**
     * No flags set
     */
    NONE,
    /**
     * Use Microsoft-style version numbers
     */
    USE_TRIPLET,
    /**
     * Use binary coded decimal notation
     */
    USE_BCD,
}
const APP_SUBSUME_FLAG_DEDUPE: number
const APP_SUBSUME_FLAG_MERGE: number
const IMAGE_ALPHA_FLAG_BOTTOM: number
const IMAGE_ALPHA_FLAG_INTERNAL: number
const IMAGE_ALPHA_FLAG_LEFT: number
const IMAGE_ALPHA_FLAG_NONE: number
const IMAGE_ALPHA_FLAG_RIGHT: number
const IMAGE_ALPHA_FLAG_TOP: number
const IMAGE_LARGE_HEIGHT: number
const IMAGE_LARGE_WIDTH: number
const IMAGE_NORMAL_HEIGHT: number
const IMAGE_NORMAL_WIDTH: number
const IMAGE_THUMBNAIL_HEIGHT: number
const IMAGE_THUMBNAIL_WIDTH: number
/**
 * Converts the text representation to an enumerated value.
 * @param id_kind the string.
 * @returns a #AsIdKind or %AS_ID_KIND_UNKNOWN for unknown
 */
function id_kind_from_string(id_kind: string | null): IdKind
/**
 * Converts the enumerated value to an text representation.
 * @param id_kind the #AsIdKind.
 * @returns string version of @id_kind
 */
function id_kind_to_string(id_kind: IdKind): string | null
function inf_error_quark(): GLib.Quark
/**
 * Parses the DriverVer string into a recognisable version and timestamp;
 * @param keyfile a #GKeyFile
 * @param timestamp the returned driverver timestamp, or %NULL
 * @returns the version string, or %NULL for error.
 */
function inf_get_driver_version(keyfile: GLib.KeyFile, timestamp: number): string | null
/**
 * Repairs .inf file data and opens it as a keyfile.
 * 
 * Important: The group and keynames are all forced to lower case as INF files
 * are specified as case insensitive and GKeyFile *is* case sensitive.
 * Any backslashes or spaces in the key name are also converted to '_'.
 * @param keyfile a #GKeyFile
 * @param data the .inf file date to parse
 * @param flags #AsInfLoadFlags, e.g. %AS_INF_LOAD_FLAG_NONE
 * @returns %TRUE for success
 */
function inf_load_data(keyfile: GLib.KeyFile, data: string | null, flags: InfLoadFlags): boolean
/**
 * Repairs an .inf file and opens it as a keyfile.
 * @param keyfile a #GKeyFile
 * @param filename the .inf file to open
 * @param flags #AsInfLoadFlags, e.g. %AS_INF_LOAD_FLAG_NONE
 * @returns %TRUE for success
 */
function inf_load_file(keyfile: GLib.KeyFile, filename: string | null, flags: InfLoadFlags): boolean
/**
 * Converts the text representation to an enumerated value.
 * @param kudo_kind the string.
 * @returns a #AsKudoKind or %AS_KUDO_KIND_UNKNOWN for unknown
 */
function kudo_kind_from_string(kudo_kind: string | null): KudoKind
/**
 * Converts the enumerated value to an text representation.
 * @param kudo_kind the `AsKudoKind`.
 * @returns string version of @kudo_kind
 */
function kudo_kind_to_string(kudo_kind: KudoKind): string | null
/**
 * Converts an XML description into a printable form.
 * @param markup the text to copy.
 * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_MARKDOWN
 * @returns a newly allocated %NULL terminated string
 */
function markup_convert(markup: string | null, format: MarkupConvertFormat): string | null
/**
 * Converts an XML description into a printable form.
 * @param markup the text to copy.
 * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_MARKDOWN
 * @param flags the #AsMarkupConvertFlag, e.g. %AS_MARKUP_CONVERT_FLAG_IGNORE_ERRORS
 * @returns a newly allocated %NULL terminated string
 */
function markup_convert_full(markup: string | null, format: MarkupConvertFormat, flags: MarkupConvertFlag): string | null
/**
 * Converts an XML description into a printable form.
 * @param markup the text to copy.
 * @returns a newly allocated %NULL terminated string
 */
function markup_convert_simple(markup: string | null): string | null
/**
 * Imports text and converts to AppStream markup.
 * @param text the text to import.
 * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_SIMPLE
 * @returns appstream markup, or %NULL in event of an error
 */
function markup_import(text: string | null, format: MarkupConvertFormat): string | null
/**
 * Splits up a long line into an array of smaller strings, each being no longer
 * than `line_len`. Words are not split.
 * @param text the text to split.
 * @param line_len the maximum length of the output line
 * @returns lines, or %NULL in event of an error
 */
function markup_strsplit_words(text: string | null, line_len: number): string[]
/**
 * Validates some markup.
 * @param markup the text to validate
 * @returns %TRUE if the appstream description was valid
 */
function markup_validate(markup: string | null): boolean
function node_error_quark(): GLib.Quark
/**
 * Gets a node attribute, e.g. "false"
 * @param node a #AsNode
 * @param key the attribute key
 * @returns string value
 */
function node_get_attribute(node: GLib.Node, key: string | null): string | null
/**
 * Gets a node attribute, e.g. 34
 * @param node a #AsNode
 * @param key the attribute key
 * @returns integer value, or %G_MAXINT for error
 */
function node_get_attribute_as_int(node: GLib.Node, key: string | null): number
/**
 * Gets a node attribute, e.g. 34
 * @param node a #AsNode
 * @param key the attribute key
 * @returns integer value, or %G_MAXINT for error
 */
function node_get_attribute_as_uint(node: GLib.Node, key: string | null): number
/**
 * Gets the node data, e.g. "Copyright 2014 Richard Hughes"
 * @param node a #AsNode
 * @returns string value, or %NULL
 */
function node_get_comment(node: GLib.Node): string | null
/**
 * Gets the node data, e.g. "paragraph text"
 * @param node a #AsNode
 * @returns string value
 */
function node_get_data(node: GLib.Node): string | null
/**
 * Extracts localized values from the DOM tree
 * @param node a #AsNode
 * @param key the key to use, e.g. "copyright"
 * @returns A hash table with the locale (e.g. en_GB) as the key
 */
function node_get_localized(node: GLib.Node, key: string | null): GLib.HashTable
/**
 * Gets the 'best' locale version of a specific data value.
 * @param node a #AsNode.
 * @param key the tag name.
 * @returns the string value, or %NULL if there was no data
 */
function node_get_localized_best(node: GLib.Node, key: string | null): string | null
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
 * @param node a #AsNode.
 * @returns a hash table of data
 */
function node_get_localized_unwrap(node: GLib.Node): GLib.HashTable
/**
 * Gets the node name, e.g. "body"
 * @param node a #AsNode
 * @returns string value
 */
function node_get_name(node: GLib.Node): string | null
/**
 * Gets the node tag enum.
 * @param node a #AsNode
 * @returns #AsTag, e.g. %AS_TAG_PKGNAME
 */
function node_get_tag(node: GLib.Node): Tag
/**
 * Inserts a hash table of data into the DOM.
 * @param parent a parent #AsNode.
 * @param name the tag name, e.g. "id".
 * @param attr_key the key to use as the attribute in the XML, e.g. "key".
 * @param hash the hash table with the key as the key to use in the XML.
 * @param insert_flags any %AsNodeInsertFlags.
 */
function node_insert_hash(parent: GLib.Node, name: string | null, attr_key: string | null, hash: GLib.HashTable, insert_flags: NodeInsertFlags): void
/**
 * Inserts a localized key into the DOM.
 * @param parent a parent #AsNode.
 * @param name the tag name, e.g. "id".
 * @param localized the hash table of data, with the locale as the key.
 * @param insert_flags any %AsNodeInsertFlags.
 */
function node_insert_localized(parent: GLib.Node, name: string | null, localized: GLib.HashTable, insert_flags: NodeInsertFlags): void
/**
 * Converts a node and it's children to XML.
 * @param node a #AsNode.
 * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
 * @returns a #GString
 */
function node_to_xml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String
/**
 * Deallocates all notes in the tree.
 * @param node a #AsNode.
 */
function node_unref(node: GLib.Node): void
/**
 * Converts the text representation to an enumerated value.
 * @param size_kind the string.
 * @returns a #AsSizeKind or %AS_SIZE_KIND_UNKNOWN for unknown
 */
function size_kind_from_string(size_kind: string | null): SizeKind
/**
 * Converts the enumerated value to an text representation.
 * @param size_kind the #AsSizeKind.
 * @returns string version of @size_kind
 */
function size_kind_to_string(size_kind: SizeKind): string | null
/**
 * Converts the text representation to an enumerated value.
 * @param tag the string.
 * @returns a %AsTag, or %AS_TAG_UNKNOWN if not known.
 */
function tag_from_string(tag: string | null): Tag
/**
 * Converts the text representation to an enumerated value also converting
 * legacy key names.
 * @param tag the string.
 * @param flags the #AsTagFlags e.g. %AS_TAG_FLAG_USE_FALLBACKS
 * @returns a %AsTag, or %AS_TAG_UNKNOWN if not known.
 */
function tag_from_string_full(tag: string | null, flags: TagFlags): Tag
/**
 * Converts the enumerated value to an text representation.
 * @param tag the %AsTag value.
 * @returns string version of @tag
 */
function tag_to_string(tag: Tag): string | null
/**
 * Converts the text representation to an enumerated value.
 * @param urgency_kind the string.
 * @returns a #AsUrgencyKind or %AS_URGENCY_KIND_UNKNOWN for unknown
 */
function urgency_kind_from_string(urgency_kind: string | null): UrgencyKind
/**
 * Converts the enumerated value to an text representation.
 * @param urgency_kind the #AsUrgencyKind.
 * @returns string version of @urgency_kind
 */
function urgency_kind_to_string(urgency_kind: UrgencyKind): string | null
/**
 * Converts the text representation to an enumerated value.
 * @param url_kind the string.
 * @returns a #AsUrlKind or %AS_URL_KIND_UNKNOWN for unknown
 */
function url_kind_from_string(url_kind: string | null): UrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param url_kind the `AsUrlKind`.
 * @returns string version of @url_kind
 */
function url_kind_to_string(url_kind: UrlKind): string | null
/**
 * Fixes a string to be a valid AppStream ID.
 * 
 * This function replaces any invalid chars with an underscore.
 * @param str a string to build the AppStream ID from
 * @returns a valid AppStream ID, or %NULL if @str is invalid
 */
function utils_appstream_id_build(str: string | null): string | null
/**
 * Checks to see if a string is a valid AppStream ID. A valid AppStream ID only
 * contains alphanumeric chars, dots and dashes.
 * @param str a string
 * @returns %TRUE if the string is a valid AppStream ID
 */
function utils_appstream_id_valid(str: string | null): boolean
function utils_error_quark(): GLib.Quark
/**
 * Finds an icon filename from a filesystem root.
 * @param destdir the destdir.
 * @param search the icon search name, e.g. "microphone.svg"
 * @returns a newly allocated %NULL terminated string
 */
function utils_find_icon_filename(destdir: string | null, search: string | null): string | null
/**
 * Finds an icon filename from a filesystem root.
 * @param destdir the destdir.
 * @param search the icon search name, e.g. "microphone.svg"
 * @param flags A #AsUtilsFindIconFlag bitfield
 * @returns a newly allocated %NULL terminated string
 */
function utils_find_icon_filename_full(destdir: string | null, search: string | null, flags: UtilsFindIconFlag): string | null
/**
 * Returns a GUID for some data. This uses a hash and so even small
 * differences in the `data` will produce radically different return values.
 * 
 * The implementation is taken from RFC4122, Section 4.1.3; specifically
 * using a type-5 SHA-1 hash.
 * @param namespace_id A namespace ID, e.g. "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
 * @param data data to hash
 * @param data_len length of `data`
 * @returns A new GUID, or %NULL if the namespace_id was invalid
 */
function utils_guid_from_data(namespace_id: string | null, data: number, data_len: number): string | null
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
 * @returns A new GUID, or %NULL if the string was invalid
 */
function utils_guid_from_string(str: string | null): string | null
/**
 * Checks the source string is a valid string GUID descriptor.
 * @param guid string to check
 * @returns %TRUE if @guid was a valid GUID, %FALSE otherwise
 */
function utils_guid_is_valid(guid: string | null): boolean
/**
 * Installs an AppData, MetaInfo, AppStream XML or AppStream Icon metadata file.
 * @param location the #AsUtilsLocation, e.g. %AS_UTILS_LOCATION_CACHE
 * @param filename the full path of the file to install
 * @param origin the origin to use for the installation, or %NULL
 * @param destdir the destdir to use, or %NULL
 * @returns %TRUE for success, %FALSE if error is set
 */
function utils_install_filename(location: UtilsLocation, filename: string | null, origin: string | null, destdir: string | null): boolean
/**
 * Searches the known list of blacklisted desktop IDs.
 * @param desktop_id a desktop ID, e.g. "gimp.desktop"
 * @returns %TRUE if the desktop ID is blacklisted
 */
function utils_is_blacklisted_id(desktop_id: string | null): boolean
/**
 * Searches the known list of registered category IDs.
 * @param category_id a desktop ID, e.g. "AudioVideoEditing"
 * @returns %TRUE if the category ID is valid
 */
function utils_is_category_id(category_id: string | null): boolean
/**
 * Searches the known list of registered environment IDs.
 * @param environment_id a desktop ID, e.g. "GNOME"
 * @returns %TRUE if the environment ID is valid
 */
function utils_is_environment_id(environment_id: string | null): boolean
/**
 * Checks the licence string to check it being a valid licence.
 * NOTE: SPDX licences can't typically contain brackets.
 * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
 * @returns %TRUE if the license is a valid "SPDX license"
 */
function utils_is_spdx_license(license: string | null): boolean
/**
 * Searches the known list of SPDX license IDs.
 * @param license_id a single SPDX license ID, e.g. "CC-BY-3.0"
 * @returns %TRUE if the license ID is a valid "SPDX license ID"
 */
function utils_is_spdx_license_id(license_id: string | null): boolean
/**
 * Searches the known list of stock icons.
 * @param name an icon name
 * @returns %TRUE if the icon is a "stock icon name" and does not need to be          included in the AppStream icon tarball
 */
function utils_is_stock_icon_name(name: string | null): boolean
/**
 * Converts a non-SPDX license into an SPDX format string where possible.
 * @param license a not-quite SPDX license string, e.g. "GPLv3+"
 * @returns the best-effort SPDX license string
 */
function utils_license_to_spdx(license: string | null): string | null
/**
 * Checks the search token if it is valid. Valid tokens are at least 3 chars in
 * length, not common words like "and", and do not contain markup.
 * @param token the search token
 * @returns %TRUE is the search token was valid
 */
function utils_search_token_valid(token: string | null): boolean
/**
 * Splits up a string into tokens and returns tokens that are suitable for
 * searching. This includes taking out common words and casefolding the
 * returned search tokens.
 * @param search the search string
 * @returns Valid tokens to search for, or %NULL for error
 */
function utils_search_tokenize(search: string | null): string[]
/**
 * De-tokenizes the SPDX licenses into a string.
 * @param license_tokens license tokens, typically from as_utils_spdx_license_tokenize()
 * @returns string, or %NULL for invalid
 */
function utils_spdx_license_detokenize(license_tokens: string | null): string | null
/**
 * Tokenizes the SPDX license string (or any simarly formatted string)
 * into parts. Any licence parts of the string e.g. "LGPL-2.0+" are prefexed
 * with "`"`, the conjunctive replaced with "&" and the disjunctive replaced
 * with "|". Brackets are added as indervidual tokens and other strings are
 * appended into single tokens where possible.
 * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
 * @returns array of strings, or %NULL for invalid
 */
function utils_spdx_license_tokenize(license: string | null): string[]
/**
 * Performs multiple search and replace operations on the given string.
 * @param string The #GString to operate on
 * @param search The text to search for
 * @param replace The text to use for substitutions
 * @returns the number of replacements done, or 0 if @search is not found.
 */
function utils_string_replace(string: GLib.String, search: string | null, replace: string | null): number
/**
 * Builds a valid unique ID using available data.
 * @param scope a #AsAppScope e.g. %AS_APP_SCOPE_SYSTEM
 * @param bundle_kind System, e.g. 'package' or 'flatpak'
 * @param origin Origin, e.g. 'fedora' or 'gnome-apps-nightly'
 * @param kind #AsAppKind, e.g. %AS_APP_KIND_DESKTOP
 * @param id AppStream ID, e.g. 'gimp.desktop'
 * @param branch Branch, e.g. '3-20' or 'master'
 * @returns a unique name, or %NULL for error;
 */
function utils_unique_id_build(scope: AppScope, bundle_kind: BundleKind, origin: string | null, kind: AppKind, id: string | null, branch: string | null): string | null
/**
 * Checks two unique IDs for equality allowing globs to match.
 * @param unique_id1 a unique ID
 * @param unique_id2 another unique ID
 * @returns %TRUE if the ID's should be considered equal.
 */
function utils_unique_id_equal(unique_id1: string | null, unique_id2: string | null): boolean
/**
 * Converts a unique-id to a hash value.
 * 
 * This function implements the widely used DJB hash on the ID subset of the
 * unique-id string.
 * 
 * It can be passed to g_hash_table_new() as the hash_func parameter,
 * when using non-NULL strings or unique_ids as keys in a GHashTable.
 * @param unique_id a unique ID
 * @returns a hash value corresponding to the key
 */
function utils_unique_id_hash(unique_id: string | null): number
/**
 * Checks two unique IDs for equality allowing globs to match, whilst also
 * allowing clients to whitelist sections that have to match.
 * @param unique_id1 a unique ID
 * @param unique_id2 another unique ID
 * @param match_flags a #AsUniqueIdMatchFlags bitfield, e.g. %AS_UNIQUE_ID_MATCH_FLAG_ID
 * @returns %TRUE if the ID's should be considered equal.
 */
function utils_unique_id_match(unique_id1: string | null, unique_id2: string | null, match_flags: UniqueIdMatchFlags): boolean
/**
 * Checks if a unique ID is valid i.e. has the correct number of
 * sections.
 * @param unique_id a unique ID
 * @returns %TRUE if the ID is valid
 */
function utils_unique_id_valid(unique_id: string | null): boolean
/**
 * Compares version numbers for sorting.
 * @param version_a the release version, e.g. 1.2.3
 * @param version_b the release version, e.g. 1.2.3.1
 * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and %G_MAXINT on error
 */
function utils_vercmp(version_a: string | null, version_b: string | null): number
/**
 * Compares version numbers for sorting.
 * @param version_a the release version, e.g. 1.2.3
 * @param version_b the release version, e.g. 1.2.3.1
 * @param flags some #AsVersionCompareFlag
 * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and %G_MAXINT on error
 */
function utils_vercmp_full(version_a: string | null, version_b: string | null, flags: VersionCompareFlag): number
/**
 * Returns a dotted decimal version string from a 16 bit number.
 * @param val A uint16le version number
 * @param flags flags used for formatting, e.g. %AS_VERSION_PARSE_FLAG_USE_TRIPLET
 * @returns A version number, e.g. "1.3"
 */
function utils_version_from_uint16(val: number, flags: VersionParseFlag): string | null
/**
 * Returns a dotted decimal version string from a 32 bit number.
 * @param val A uint32le version number
 * @param flags flags used for formatting, e.g. %AS_VERSION_PARSE_FLAG_USE_TRIPLET
 * @returns A version number, e.g. "1.0.3"
 */
function utils_version_from_uint32(val: number, flags: VersionParseFlag): string | null
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
 */
function utils_version_parse(version: string | null): string | null
module Agreement {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Agreement {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Agreement

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Agreement

    add_section(agreement_section: AgreementSection): void
    /**
     * Gets the agreement kind.
     * @returns a string, e.g. %AS_AGREEMENT_KIND_EULA
     */
    get_kind(): AgreementKind
    /**
     * Gets the first section in the agreement.
     * @returns agreement section, or %NULL
     */
    get_section_default(): AgreementSection
    /**
     * Gets all the sections in the agreement.
     * @returns array
     */
    get_sections(): AgreementSection[]
    /**
     * Gets the agreement version_id.
     * @returns a string, e.g. "1.4a", or NULL
     */
    get_version_id(): string | null
    /**
     * Sets the agreement kind.
     * @param kind the agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     */
    set_kind(kind: AgreementKind): void
    /**
     * Sets the agreement version identifier.
     * @param version_id the agreement version ID, e.g. "1.4a"
     */
    set_version_id(version_id: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Agreement

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Agreement extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Agreement

    static name: string
    static $gtype: GObject.GType<Agreement>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Agreement

    constructor(config?: Agreement.ConstructorProperties) 
    /**
     * Creates a new #AsAgreement.
     * @constructor 
     * @returns a #AsAgreement
     */
    constructor() 
    /**
     * Creates a new #AsAgreement.
     * @constructor 
     * @returns a #AsAgreement
     */
    static new(): Agreement
    _init(config?: Agreement.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param value the string.
     * @returns a #AsAgreementKind or %AS_AGREEMENT_KIND_UNKNOWN for unknown
     */
    static kind_from_string(value: string | null): AgreementKind
    /**
     * Converts the enumerated value to an text representation.
     * @param value the #AsAgreementKind.
     * @returns string version of @value
     */
    static kind_to_string(value: AgreementKind): string | null
}

module AgreementSection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AgreementSection {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    /**
     * Gets the agreement section desc.
     * @param locale the locale. e.g. "en_GB"
     * @returns a string, e.g. "GDPR", or NULL
     */
    get_description(locale: string | null): string | null
    /**
     * Gets the agreement section kind.
     * @returns a string, e.g. "GDPR", or NULL
     */
    get_kind(): string | null
    /**
     * Gets the agreement section name.
     * @param locale the locale. e.g. "en_GB"
     * @returns a string, e.g. "GDPR", or NULL
     */
    get_name(locale: string | null): string | null
    /**
     * Sets the agreement section description.
     * @param locale the locale. e.g. "en_GB"
     * @param desc the rating desc, e.g. "GDPR"
     */
    set_description(locale: string | null, desc: string | null): void
    /**
     * Sets the agreement section kind.
     * @param kind the rating kind, e.g. "GDPR"
     */
    set_kind(kind: string | null): void
    /**
     * Sets the agreement section name.
     * @param locale the locale. e.g. "en_GB"
     * @param name the rating name, e.g. "GDPR"
     */
    set_name(locale: string | null, name: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AgreementSection extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    static name: string
    static $gtype: GObject.GType<AgreementSection>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    constructor(config?: AgreementSection.ConstructorProperties) 
    /**
     * Creates a new #AsAgreementSection.
     * @constructor 
     * @returns a #AsAgreementSection
     */
    constructor() 
    /**
     * Creates a new #AsAgreementSection.
     * @constructor 
     * @returns a #AsAgreementSection
     */
    static new(): AgreementSection
    _init(config?: AgreementSection.ConstructorProperties): void
}

module App {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface App {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.App

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.App

    /**
     * Adds a addon to an application.
     * @param addon a #AsApp instance.
     */
    add_addon(addon: App): void
    /**
     * Adds a agreement to an application.
     * @param agreement a #AsAgreement instance.
     */
    add_agreement(agreement: Agreement): void
    /**
     * Adds a package name to an application.
     * @param arch the package name.
     */
    add_arch(arch: string | null): void
    /**
     * Adds a bundle to an application.
     * @param bundle a #AsBundle instance.
     */
    add_bundle(bundle: Bundle): void
    /**
     * Adds a menu category to the application.
     * @param category the category.
     */
    add_category(category: string | null): void
    /**
     * Adds a desktop that requires this application to be installed.
     * @param compulsory_for_desktop the desktop string, e.g. "GNOME".
     */
    add_compulsory_for_desktop(compulsory_for_desktop: string | null): void
    /**
     * Adds a content_rating to an application.
     * @param content_rating a #AsContentRating instance.
     */
    add_content_rating(content_rating: ContentRating): void
    /**
     * Adds a parent ID to the application.
     * @param extends_ the full ID, e.g. "eclipse.desktop".
     */
    add_extends(extends_: string | null): void
    /**
     * Add a format the application has been built from.
     * @param format the #AsFormat.
     */
    add_format(format: Format): void
    /**
     * Adds a icon to an application.
     * @param icon a #AsIcon instance.
     */
    add_icon(icon: Icon): void
    /**
     * Add a keyword the application should match against.
     * @param locale the locale. e.g. "en_GB"
     * @param keyword the keyword.
     */
    add_keyword(locale: string | null, keyword: string | null): void
    /**
     * Add a kudo the application has obtained.
     * @param kudo the kudo.
     */
    add_kudo(kudo: string | null): void
    /**
     * Add a kudo the application has obtained.
     * @param kudo_kind the #AsKudoKind.
     */
    add_kudo_kind(kudo_kind: KudoKind): void
    /**
     * Adds a language to the application.
     * @param percentage the percentage completion of the translation, or 0 for unknown
     * @param locale the locale. e.g. "en_GB"
     */
    add_language(percentage: number, locale: string | null): void
    /**
     * Adds a launchable to an application.
     * @param launchable a #AsLaunchable instance.
     */
    add_launchable(launchable: Launchable): void
    /**
     * Adds a metadata entry to the application.
     * @param key the metadata key.
     * @param value the value to store.
     */
    add_metadata(key: string | null, value: string | null): void
    /**
     * Adds a mimetype the application can process.
     * @param mimetype the mimetype.
     */
    add_mimetype(mimetype: string | null): void
    /**
     * Add a permission the application has obtained.
     * @param permission the permission.
     */
    add_permission(permission: string | null): void
    /**
     * Adds a package name to an application.
     * @param pkgname the package name.
     */
    add_pkgname(pkgname: string | null): void
    /**
     * Adds a provide to an application.
     * @param provide a #AsProvide instance.
     */
    add_provide(provide: Provide): void
    /**
     * Adds a specific attribute to an application.
     * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
     */
    add_quirk(quirk: AppQuirk): void
    /**
     * Adds a release to an application.
     * @param release a #AsRelease instance.
     */
    add_release(release: Release): void
    /**
     * Adds a require to an application.
     * @param require a #AsRequire instance.
     */
    add_require(require: Require): void
    /**
     * Adds a review to an application.
     * @param review a #AsReview instance.
     */
    add_review(review: Review): void
    /**
     * Adds a screenshot to an application.
     * @param screenshot a #AsScreenshot instance.
     */
    add_screenshot(screenshot: Screenshot): void
    /**
     * Adds a suggest to an application.
     * @param suggest a #AsSuggest instance.
     */
    add_suggest(suggest: Suggest): void
    /**
     * Adds a translation to an application.
     * @param translation a #AsTranslation instance.
     */
    add_translation(translation: Translation): void
    /**
     * Adds some URL data to the application.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE
     * @param url the full URL.
     */
    add_url(url_kind: UrlKind, url: string | null): void
    /**
     * Converts all the icons in the application to a specific kind.
     * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
     * @returns %TRUE for success
     */
    convert_icons(kind: IconKind): boolean
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
     * @param app2 another #AsApp instance.
     * @returns %TRUE if the applications are equal
     */
    equal(app2: App): boolean
    /**
     * Gets all the addons the application has.
     * @returns an array
     */
    get_addons(): App[]
    /**
     * Gets a agreement the application has defined of a specific type.
     * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     * @returns a #AsAgreement or NULL for not found
     */
    get_agreement_by_kind(kind: AgreementKind): Agreement
    /**
     * Gets a privacy policys the application has defined of a specific type.
     * @returns a #AsAgreement or NULL for not found
     */
    get_agreement_default(): Agreement
    /**
     * Gets the supported architectures for the application, or an empty list
     * if all architectures are supported.
     * @returns an array
     */
    get_architectures(): string[]
    /**
     * Gets the branch for the application.
     * @returns string, or %NULL if unset
     */
    get_branch(): string | null
    /**
     * Finds the default bundle.
     * @returns a #AsBundle, or %NULL
     */
    get_bundle_default(): Bundle
    /**
     * Gets any bundles the application has defined.
     * @returns an array
     */
    get_bundles(): Bundle[]
    /**
     * Get the application categories.
     * @returns an array
     */
    get_categories(): string[]
    /**
     * Gets the application summary for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    get_comment(locale: string | null): string | null
    /**
     * Gets the comments set for the application.
     * @returns hash table of comments
     */
    get_comments(): GLib.HashTable
    /**
     * Returns the desktops where this application is compulsory.
     * @returns an array
     */
    get_compulsory_for_desktops(): string[]
    /**
     * Gets a content ratings the application has defined of a specific type.
     * @param kind a ratings kind, e.g. "oars-1.0"
     * @returns a #AsContentRating or NULL for not found
     */
    get_content_rating(kind: string | null): ContentRating
    /**
     * Gets any content_ratings the application has defined.
     * @returns an array
     */
    get_content_ratings(): ContentRating[]
    /**
     * Gets the application description markup for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    get_description(locale: string | null): string | null
    /**
     * Gets the descriptions set for the application.
     * @returns hash table of descriptions
     */
    get_descriptions(): GLib.HashTable
    /**
     * Gets the application developer name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    get_developer_name(locale: string | null): string | null
    /**
     * Gets the developer_names set for the application.
     * @returns hash table of developer_names
     */
    get_developer_names(): GLib.HashTable
    /**
     * Gets the IDs that are extended from the addon.
     * @returns an array
     */
    get_extends(): string[]
    /**
     * Searches the list of formats for a specific filename.
     * @param filename a filename, e.g. "/home/hughsie/dave.desktop"
     * @returns A #AsFormat, or %NULL if not found
     */
    get_format_by_filename(filename: string | null): Format
    /**
     * Searches the list of formats for a specific format kind.
     * @param kind a #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA
     * @returns A #AsFormat, or %NULL if not found
     */
    get_format_by_kind(kind: FormatKind): Format
    /**
     * Returns the default format.
     * @returns A #AsFormat, or %NULL if not found
     */
    get_format_default(): Format
    /**
     * Gets any formats that make up the application.
     * @returns an array
     */
    get_formats(): string[]
    /**
     * Finds the default icon.
     * @returns a #AsIcon, or %NULL
     */
    get_icon_default(): Icon
    /**
     * Finds an icon of a specific size.
     * @param width Size in pixels
     * @param height Size in pixels
     * @returns a #AsIcon, or %NULL
     */
    get_icon_for_size(width: number, height: number): Icon
    /**
     * Gets the application icon path.
     * @returns string, or %NULL if unset
     */
    get_icon_path(): string | null
    /**
     * Gets any icons the application has defined.
     * @returns an array
     */
    get_icons(): Icon[]
    /**
     * Gets the full ID value.
     * @returns the ID, e.g. "org.gnome.Software.desktop"
     */
    get_id(): string | null
    /**
     * Returns a filename which represents the applications ID, e.g. "gimp.desktop"
     * becomes "gimp" and is used for cache directories.
     * @returns A utf8 filename
     */
    get_id_filename(): string | null
    /**
     * Gets the ID kind.
     * @returns enumerated value
     */
    get_id_kind(): IdKind
    /**
     * Gets the full ID value, stripping any prefix.
     * @returns the ID, e.g. "org.gnome.Software.desktop"
     */
    get_id_no_prefix(): string | null
    /**
     * Gets any keywords the application should match against.
     * @param locale the locale. e.g. "en_GB"
     * @returns an array, or %NULL
     */
    get_keywords(locale: string | null): string[]
    /**
     * Gets the ID kind.
     * @returns enumerated value
     */
    get_kind(): AppKind
    /**
     * Gets any kudos the application has obtained.
     * @returns an array
     */
    get_kudos(): string[]
    /**
     * Gets the language coverage for the specific language.
     * @param locale the locale. e.g. "en_GB"
     * @returns a percentage value where 0 is unspecified, or -1 for not found
     */
    get_language(locale: string | null): number
    /**
     * Get a list of all languages.
     * @returns list of language values
     */
    get_languages(): string[]
    /**
     * Searches the list of launchables for a specific launchable kind.
     * @param kind a #AsLaunchableKind, e.g. %AS_FORMAT_KIND_APPDATA
     * @returns A #AsLaunchable, or %NULL if not found
     */
    get_launchable_by_kind(kind: LaunchableKind): Launchable
    /**
     * Returns the default launchable.
     * @returns A #AsLaunchable, or %NULL if not found
     */
    get_launchable_default(): Launchable
    /**
     * Gets all the launchables the application has.
     * @returns an array
     */
    get_launchables(): Launchable[]
    /**
     * Gets the merge_kind of the application.
     * @returns enumerated value
     */
    get_merge_kind(): AppMergeKind
    /**
     * Gets the metadata set for the application.
     * @returns hash table of metadata
     */
    get_metadata(): GLib.HashTable
    /**
     * Gets some metadata item.
     * @param key the metadata key.
     * @returns string, or %NULL if unset
     */
    get_metadata_item(key: string | null): string | null
    /**
     * Gets the application project license.
     * @returns string, or %NULL if unset
     */
    get_metadata_license(): string | null
    /**
     * Gets any mimetypes the application will register.
     * @returns an array
     */
    get_mimetypes(): string[]
    /**
     * Gets the application name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    get_name(locale: string | null): string | null
    /**
     * Gets the names set for the application.
     * @returns hash table of names
     */
    get_names(): GLib.HashTable
    /**
     * Gets the application origin.
     * @returns the origin string, or %NULL if unset
     */
    get_origin(): string | null
    /**
     * Gets any permissions the application has obtained.
     * @returns an array
     */
    get_permissions(): string[]
    /**
     * Gets the default package name.
     * @returns string, or %NULL if unset
     */
    get_pkgname_default(): string | null
    /**
     * Gets the package names (if any) for the application.
     * @returns an array
     */
    get_pkgnames(): string[]
    /**
     * Gets the application priority. Larger values trump smaller values.
     * @returns priority value
     */
    get_priority(): number
    /**
     * Gets an application project group.
     * @returns string, or %NULL if unset
     */
    get_project_group(): string | null
    /**
     * Gets the application project license.
     * @returns string, or %NULL if unset
     */
    get_project_license(): string | null
    /**
     * Gets all the provides the application has.
     * @returns an array
     */
    get_provides(): Provide[]
    /**
     * Gets a specific release from the application.
     * @param version a version string
     * @returns a release, or %NULL
     */
    get_release(version: string | null): Release
    /**
     * Gets a specific release from the application.
     * @param version a release version number, e.g. "1.2.3"
     * @returns a release, or %NULL
     */
    get_release_by_version(version: string | null): Release
    /**
     * Gets the default (newest) release from the application.
     * @returns a release, or %NULL
     */
    get_release_default(): Release
    /**
     * Gets all the releases the application has had.
     * @returns an array
     */
    get_releases(): Release[]
    /**
     * Gets a specific requirement for the application.
     * @param kind a #AsRequireKind, e.g. %AS_REQUIRE_KIND_FIRMWARE
     * @param value a string, or NULL, e.g. `bootloader`
     * @returns A #AsRequire, or %NULL for not found
     */
    get_require_by_value(kind: RequireKind, value: string | null): Require
    /**
     * Gets any requires the application has defined. A requirement could be that
     * a firmware version has to be below a defined version or that another
     * application is required to be installed.
     * @returns an array
     */
    get_requires(): Require[]
    /**
     * Gets any reviews the application has defined.
     * @returns an array
     */
    get_reviews(): Screenshot[]
    /**
     * Gets the scope of the application.
     * @returns enumerated value
     */
    get_scope(): AppScope
    /**
     * Gets the default screenshot for the component.
     * @returns a screenshot or %NULL
     */
    get_screenshot_default(): Screenshot
    /**
     * Gets any screenshots the application has defined.
     * @returns an array
     */
    get_screenshots(): Screenshot[]
    /**
     * Gets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @returns a #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    get_search_match(): number
    /**
     * Gets the default source filename the instance was populated from.
     * @returns string, or %NULL if unset
     */
    get_source_file(): string | null
    /**
     * Gets the source kind, i.e. where the AsApp came from.
     * @returns enumerated value
     */
    get_source_kind(): FormatKind
    /**
     * Gets the source package name that produced the binary package.
     * Only source packages producing more than one binary package will have this
     * entry set.
     * @returns string, or %NULL if unset
     */
    get_source_pkgname(): string | null
    /**
     * Gets the application state.
     * @returns enumerated value
     */
    get_state(): AppState
    /**
     * Gets any suggests the application has defined.
     * @returns an array
     */
    get_suggests(): Suggest[]
    /**
     * Gets any translations the application has defined.
     * @returns an array
     */
    get_translations(): Translation[]
    /**
     * Gets the trust flags, i.e. how trusted the incoming data is.
     * @returns bitfield
     */
    get_trust_flags(): number
    /**
     * Gets the unique ID value to represent the component.
     * @returns the unique ID, e.g. `system/package/fedora/desktop/gimp.desktop/master`
     */
    get_unique_id(): string | null
    /**
     * Gets the application upstream update contact email.
     * @returns string, or %NULL if unset
     */
    get_update_contact(): string | null
    /**
     * Gets a URL.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     * @returns string, or %NULL if unset
     */
    get_url_item(url_kind: UrlKind): string | null
    /**
     * Gets the URLs set for the application.
     * @returns hash table of URLs
     */
    get_urls(): GLib.HashTable
    /**
     * Gets the list of vetos.
     * @returns A list of vetos
     */
    get_vetos(): string[]
    /**
     * Searches the category list for a specific item.
     * @param category a category string, e.g. "DesktopSettings"
     * @returns %TRUE if the application has got the specified category
     */
    has_category(category: string | null): boolean
    /**
     * Searches the compulsory for desktop list for a specific item.
     * @param desktop a desktop string, e.g. "GNOME"
     * @returns %TRUE if the application is compulsory for a specific desktop
     */
    has_compulsory_for_desktop(desktop: string | null): boolean
    /**
     * Searches the kudo list for a specific item.
     * @param kudo a kudo string, e.g. "SearchProvider"
     * @returns %TRUE if the application has got the specified kudo
     */
    has_kudo(kudo: string | null): boolean
    /**
     * Searches the kudo list for a specific item.
     * @param kudo a #AsKudoKind, e.g. %AS_KUDO_KIND_SEARCH_PROVIDER
     * @returns %TRUE if the application has got the specified kudo
     */
    has_kudo_kind(kudo: KudoKind): boolean
    /**
     * Searches the permission list for a specific item.
     * @param permission a permission string, e.g. "Network"
     * @returns %TRUE if the application has got the specified permission
     */
    has_permission(permission: string | null): boolean
    /**
     * Queries to see if an application has a specific attribute.
     * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
     * @returns %TRUE if the application has the attribute
     */
    has_quirk(quirk: AppQuirk): boolean
    /**
     * Parses an AppData file and populates the application state.
     * @param data data to parse.
     * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
     * @returns %TRUE for success
     */
    parse_data(data: GLib.Bytes, flags: number): boolean
    /**
     * Parses a desktop or AppData file and populates the application state.
     * 
     * Applications that are not suitable for the store will have vetos added.
     * @param filename file to load.
     * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
     * @returns %TRUE for success
     */
    parse_file(filename: string | null, flags: number): boolean
    /**
     * Removed a menu category from the application.
     * @param category the category.
     */
    remove_category(category: string | null): void
    /**
     * Removes a format the application has been built from.
     * @param format the #AsFormat.
     */
    remove_format(format: Format): void
    /**
     * Remove a kudo the application has obtained.
     * @param kudo the kudo.
     */
    remove_kudo(kudo: string | null): void
    /**
     * Removes a metadata item from the application.
     * @param key the metadata key.
     */
    remove_metadata(key: string | null): void
    /**
     * Removes a reason to not include the application in the metadata.
     * @param description veto string
     */
    remove_veto(description: string | null): void
    /**
     * Searches application data for a specific keyword.
     * @param search the search term.
     * @returns a match scrore, where 0 is no match and 100 is the best match.
     */
    search_matches(search: string | null): number
    /**
     * Searches application data for all the specific keywords.
     * @param search the search terms.
     * @returns a match scrore, where 0 is no match and larger numbers are better matches. It's probably a good idea to use as_utils_search_tokenize() to populate search as very short or common keywords will return a lot of matches.
     */
    search_matches_all(search: string | null): number
    /**
     * Set the branch that the instance was sourced from.
     * @param branch the branch, e.g. "master" or "3-16".
     */
    set_branch(branch: string | null): void
    /**
     * Sets the application summary for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param comment the application summary.
     */
    set_comment(locale: string | null, comment: string | null): void
    /**
     * Sets the application description markup for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param description the application description.
     */
    set_description(locale: string | null, description: string | null): void
    /**
     * Sets the application developer name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param developer_name the application developer name.
     */
    set_developer_name(locale: string | null, developer_name: string | null): void
    /**
     * Sets the icon path, where local icons would be found.
     * @param icon_path the local path.
     */
    set_icon_path(icon_path: string | null): void
    /**
     * Sets a new application ID. Any invalid characters will be automatically replaced.
     * @param id the new _full_ application ID, e.g. "org.gnome.Software.desktop".
     */
    set_id(id: string | null): void
    /**
     * Sets the application kind.
     * @param id_kind the #AsAppKind.
     */
    set_id_kind(id_kind: IdKind): void
    /**
     * Sets the application kind.
     * @param kind the #AsAppKind.
     */
    set_kind(kind: AppKind): void
    /**
     * Sets the merge kind of the application.
     * @param merge_kind the #AsAppMergeKind.
     */
    set_merge_kind(merge_kind: AppMergeKind): void
    /**
     * Set the project license.
     * @param metadata_license the project license string.
     */
    set_metadata_license(metadata_license: string | null): void
    /**
     * Sets the application name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param name the application name.
     */
    set_name(locale: string | null, name: string | null): void
    /**
     * Sets the application origin.
     * @param origin the origin, e.g. "fedora-21"
     */
    set_origin(origin: string | null): void
    /**
     * Sets the application priority, where 0 is default and positive numbers
     * are better than negative numbers.
     * @param priority the priority.
     */
    set_priority(priority: number): void
    /**
     * Set any project affiliation.
     * @param project_group the project group, e.g. "GNOME".
     */
    set_project_group(project_group: string | null): void
    /**
     * Set the project license.
     * @param project_license the project license string.
     */
    set_project_license(project_license: string | null): void
    /**
     * Sets the scope of the application.
     * @param scope the #AsAppScope.
     */
    set_scope(scope: AppScope): void
    /**
     * Sets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @param search_match the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    set_search_match(search_match: number): void
    /**
     * Set the file that the instance was sourced from.
     * @param source_file the filename.
     */
    set_source_file(source_file: string | null): void
    /**
     * Sets the source kind.
     * @param source_kind the #AsFormatKind.
     */
    set_source_kind(source_kind: FormatKind): void
    /**
     * Set the project license.
     * @param source_pkgname the project license string.
     */
    set_source_pkgname(source_pkgname: string | null): void
    /**
     * Sets the application state.
     * @param state the #AsAppState.
     */
    set_state(state: AppState): void
    /**
     * Sets the check flags, where %AS_APP_TRUST_FLAG_COMPLETE is completely
     * trusted input.
     * @param trust_flags the #AsAppTrustFlags.
     */
    set_trust_flags(trust_flags: number): void
    /**
     * Set the project license.
     * @param update_contact the project license string.
     */
    set_update_contact(update_contact: string | null): void
    /**
     * Copies information from the donor to the application object.
     * @param donor the donor.
     */
    subsume(donor: App): void
    /**
     * Copies information from the donor to the application object.
     * @param donor the donor.
     * @param flags any optional #AsAppSubsumeFlags, e.g. %AS_APP_SUBSUME_FLAG_NO_OVERWRITE
     */
    subsume_full(donor: App, flags: number): void
    /**
     * Exports a DOM tree to an XML file.
     * @param file a #GFile
     * @param cancellable A #GCancellable
     * @returns %TRUE for success
     */
    to_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    /**
     * Exports a DOM tree to an XML string.
     * @returns an XML string, or %NULL
     */
    to_xml(): GLib.String
    /**
     * Validates data in the instance for style and consistency.
     * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
     * @returns A list of problems, or %NULL
     */
    validate(flags: number): Problem[]

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.App

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class App extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.App

    constructor(config?: App.ConstructorProperties) 
    /**
     * Creates a new #AsApp.
     * @constructor 
     * @returns a #AsApp
     */
    constructor() 
    /**
     * Creates a new #AsApp.
     * @constructor 
     * @returns a #AsApp
     */
    static new(): App
    _init(config?: App.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Guesses the source kind based from the filename.
     * @param filename a file name
     * @returns A #AsFormatKind, e.g. %AS_FORMAT_KIND_APPSTREAM.
     */
    static guess_source_kind(filename: string | null): FormatKind
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsAppKind or %AS_APP_KIND_UNKNOWN for unknown
     */
    static kind_from_string(kind: string | null): AppKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsAppKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: AppKind): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param merge_kind a source kind string
     * @returns A #AsAppMergeKind, e.g. %AS_APP_MERGE_KIND_REPLACE.
     */
    static merge_kind_from_string(merge_kind: string | null): AppMergeKind
    /**
     * Converts the enumerated value to an text representation.
     * @param merge_kind the #AsAppMergeKind, e.g. %AS_APP_MERGE_KIND_REPLACE
     * @returns string version of @merge_kind, or %NULL for unknown
     */
    static merge_kind_to_string(merge_kind: AppMergeKind): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param scope a source kind string
     * @returns A #AsAppScope, e.g. %AS_APP_SCOPE_SYSTEM.
     */
    static scope_from_string(scope: string | null): AppScope
    /**
     * Converts the enumerated value to an text representation.
     * @param scope the #AsAppScope, e.g. %AS_APP_SCOPE_SYSTEM
     * @returns string version of @scope, or %NULL for unknown
     */
    static scope_to_string(scope: AppScope): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param source_kind a source kind string
     * @returns A #AsFormatKind, e.g. %AS_FORMAT_KIND_APPSTREAM.
     */
    static source_kind_from_string(source_kind: string | null): FormatKind
    /**
     * Converts the enumerated value to an text representation.
     * @param source_kind the #AsFormatKind.
     * @returns string version of @source_kind, or %NULL for unknown
     */
    static source_kind_to_string(source_kind: FormatKind): string | null
    /**
     * Converts the enumerated value to an text representation.
     * @param state the #AsAppState.
     * @returns string version of @state, or %NULL for unknown
     */
    static state_to_string(state: AppState): string | null
}

module Bundle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Bundle {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Bundle

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Bundle

    /**
     * Gets the ID for this bundle.
     * @returns ID, e.g. "foobar-1.0.2"
     */
    get_id(): string | null
    /**
     * Gets the bundle kind.
     * @returns the #AsBundleKind
     */
    get_kind(): BundleKind
    /**
     * Gets the runtime required for this bundle.
     * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
     */
    get_runtime(): string | null
    /**
     * Gets the SDK for this bundle.
     * @returns SDK identifier, e.g. "org.gnome.Sdk/i386/master"
     */
    get_sdk(): string | null
    /**
     * Sets the ID for this bundle.
     * @param id the URL.
     */
    set_id(id: string | null): void
    /**
     * Sets the bundle kind.
     * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_FLATPAK.
     */
    set_kind(kind: BundleKind): void
    /**
     * Sets the runtime required for this bundle.
     * @param runtime the URL.
     */
    set_runtime(runtime: string | null): void
    /**
     * Sets the SDK for this bundle.
     * @param sdk the URL.
     */
    set_sdk(sdk: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Bundle

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Bundle extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Bundle

    static name: string
    static $gtype: GObject.GType<Bundle>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Bundle

    constructor(config?: Bundle.ConstructorProperties) 
    /**
     * Creates a new #AsBundle.
     * @constructor 
     * @returns a #AsBundle
     */
    constructor() 
    /**
     * Creates a new #AsBundle.
     * @constructor 
     * @returns a #AsBundle
     */
    static new(): Bundle
    _init(config?: Bundle.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsBundleKind, or %AS_BUNDLE_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): BundleKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsBundleKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: BundleKind): string | null
}

module Checksum {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Checksum {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Checksum

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Checksum

    /**
     * Gets the full qualified URL for the checksum, usually pointing at some mirror.
     * @returns URL
     */
    get_filename(): string | null
    /**
     * Gets the checksum kind.
     * @returns the #GChecksumType
     */
    get_kind(): GLib.ChecksumType
    /**
     * Gets the checksum target.
     * @returns the #GChecksumType
     */
    get_target(): ChecksumTarget
    /**
     * Gets the suggested value the checksum, including file extension.
     * @returns filename
     */
    get_value(): string | null
    /**
     * Sets the filename used to generate the checksum.
     * @param filename the URL.
     */
    set_filename(filename: string | null): void
    /**
     * Sets the checksum kind.
     * @param kind the #GChecksumType, e.g. %G_CHECKSUM_SHA1.
     */
    set_kind(kind: GLib.ChecksumType): void
    /**
     * Sets the checksum target.
     * @param target the #GChecksumType, e.g. %AS_CHECKSUM_TARGET_CONTAINER.
     */
    set_target(target: ChecksumTarget): void
    /**
     * Sets the checksum value filename.
     * @param value the new filename value.
     */
    set_value(value: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Checksum

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Checksum extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Checksum

    static name: string
    static $gtype: GObject.GType<Checksum>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Checksum

    constructor(config?: Checksum.ConstructorProperties) 
    /**
     * Creates a new #AsChecksum.
     * @constructor 
     * @returns a #AsChecksum
     */
    constructor() 
    /**
     * Creates a new #AsChecksum.
     * @constructor 
     * @returns a #AsChecksum
     */
    static new(): Checksum
    _init(config?: Checksum.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param target a source kind string
     * @returns A #AsChecksumTarget, e.g. %AS_CHECKSUM_TARGET_CONTAINER.
     */
    static target_from_string(target: string | null): ChecksumTarget
    /**
     * Converts the enumerated value to an text representation.
     * @param target the #AsChecksumTarget.
     * @returns string version of @target, or %NULL for unknown
     */
    static target_to_string(target: ChecksumTarget): string | null
}

module ContentRating {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ContentRating {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    /**
     * Adds an attribute value to the content rating.
     * @param id a content rating ID, e.g. `money-gambling`.
     * @param value a #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_MODERATE.
     */
    add_attribute(id: string | null, value: ContentRatingValue): void
    /**
     * Gets the content_rating kind.
     * @returns a string, e.g. "oars-1.0", or NULL
     */
    get_kind(): string | null
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
     */
    get_minimum_age(): number
    /**
     * Gets the set of ratings IDs which are present in this `content_rating`. An
     * example of a ratings ID is `violence-bloodshed`.
     * 
     * The IDs are returned in lexicographical order.
     * @returns %NULL-terminated    array of ratings IDs; each ratings ID is owned by the #AsContentRating and    must not be freed, but the container must be freed with g_free()
     */
    get_rating_ids(): string[]
    /**
     * Gets the set value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
     * @returns the #AsContentRatingValue, or %AS_CONTENT_RATING_VALUE_UNKNOWN
     */
    get_value(id: string | null): ContentRatingValue
    /**
     * Sets the content rating kind.
     * @param kind the rating kind, e.g. "oars-1.0"
     */
    set_kind(kind: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContentRating extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    static name: string
    static $gtype: GObject.GType<ContentRating>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    constructor(config?: ContentRating.ConstructorProperties) 
    /**
     * Creates a new #AsContentRating.
     * @constructor 
     * @returns a #AsContentRating
     */
    constructor() 
    /**
     * Creates a new #AsContentRating.
     * @constructor 
     * @returns a #AsContentRating
     */
    static new(): ContentRating
    _init(config?: ContentRating.ConstructorProperties): void
    /**
     * Gets the highest #AsContentRatingValue which is allowed to be seen by the
     * given Common Sense Media `age` for the given subsection `id`.
     * 
     * For example, if the CSM age mappings for `violence-bloodshed` are:
     *  * age ≥ 0 for %AS_CONTENT_RATING_VALUE_NONE
     *  * age ≥ 9 for %AS_CONTENT_RATING_VALUE_MILD
     *  * age ≥ 11 for %AS_CONTENT_RATING_VALUE_MODERATE
     *  * age ≥ 18 for %AS_CONTENT_RATING_VALUE_INTENSE
     * then calling this function with `violence-bloodshed` and `age` set to 17 would
     * return %AS_CONTENT_RATING_VALUE_MODERATE. Calling it with age 18 would
     * return %AS_CONTENT_RATING_VALUE_INTENSE.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param age the CSM age
     * @returns the #AsContentRatingValue, or %AS_CONTENT_RATING_VALUE_UNKNOWN if    unknown
     */
    static attribute_from_csm_age(id: string | null, age: number): ContentRatingValue
    /**
     * Get a human-readable description of what content would be expected to
     * require the content rating attribute given by `id` and `value`.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     * @returns a human-readable description of @id and @value
     */
    static attribute_get_description(id: string | null, value: ContentRatingValue): string | null
    /**
     * Gets the Common Sense Media approved age for a specific rating level.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     * @returns The age in years, or 0 for no details.
     */
    static attribute_to_csm_age(id: string | null, value: ContentRatingValue): number
    /**
     * Returns a list of all the valid OARS content rating attribute IDs as could
     * be passed to as_content_rating_add_attribute() or
     * as_content_rating_attribute_to_csm_age().
     * @returns a %NULL-terminated    array of IDs, to be freed with g_free() (the element values are owned by    libappstream-glib and must not be freed)
     */
    static get_all_rating_ids(): string[]
    /**
     * Format `age` as a human-readable string in the given rating `system`. This is
     * the way to present system-specific strings in a UI.
     * @param system an #AsContentRatingSystem
     * @param age a CSM age to format
     * @returns a newly allocated formatted version of    @age, or %NULL if the given @system has no representation for @age
     */
    static system_format_age(system: ContentRatingSystem, age: number): string | null
    /**
     * Determine the most appropriate #AsContentRatingSystem for the given `locale`.
     * Content rating systems are selected by territory. If no content rating system
     * seems suitable, %AS_CONTENT_RATING_SYSTEM_IARC is returned.
     * @param locale a locale, in the format described in `man 3 setlocale`
     * @returns the most relevant #AsContentRatingSystem
     */
    static system_from_locale(locale: string | null): ContentRatingSystem
    /**
     * Get the CSM ages corresponding to the entries returned by
     * as_content_rating_system_get_formatted_ages() for this `system`.
     * @param system an #AsContentRatingSystem
     * @returns an array of CSM ages
     */
    static system_get_csm_ages(system: ContentRatingSystem): number[]
    /**
     * Get an array of all the possible return values of
     * as_content_rating_system_format_age() for the given `system`. The array is
     * sorted with youngest CSM age first.
     * @param system an #AsContentRatingSystem
     * @returns %NULL-terminated array of human-readable age strings
     */
    static system_get_formatted_ages(system: ContentRatingSystem): string[]
    /**
     * Get a human-readable string to identify `system`. %NULL will be returned for
     * %AS_CONTENT_RATING_SYSTEM_UNKNOWN.
     * @param system an #AsContentRatingSystem
     * @returns a human-readable string for @system, or %NULL if unknown
     */
    static system_to_string(system: ContentRatingSystem): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param value the string.
     * @returns a #AsContentRatingValue or %AS_CONTENT_RATING_VALUE_UNKNOWN for unknown
     */
    static value_from_string(value: string | null): ContentRatingValue
    /**
     * Converts the enumerated value to an text representation.
     * @param value the #AsContentRatingValue.
     * @returns string version of @value
     */
    static value_to_string(value: ContentRatingValue): string | null
}

module Format {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Format {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Format

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Format

    /**
     * Checks if two formats are the same.
     * @param format2 a #AsFormat instance.
     * @returns %TRUE for success
     */
    equal(format2: Format): boolean
    /**
     * Gets the filename required for this format.
     * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
     */
    get_filename(): string | null
    /**
     * Gets the format kind.
     * @returns the #AsFormatKind
     */
    get_kind(): FormatKind
    /**
     * Sets the filename required for this format.
     * @param filename the URL.
     */
    set_filename(filename: string | null): void
    /**
     * Sets the format kind.
     * @param kind the #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA.
     */
    set_kind(kind: FormatKind): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Format

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Format extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Format

    static name: string
    static $gtype: GObject.GType<Format>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Format

    constructor(config?: Format.ConstructorProperties) 
    /**
     * Creates a new #AsFormat.
     * @constructor 
     * @returns a #AsFormat
     */
    constructor() 
    /**
     * Creates a new #AsFormat.
     * @constructor 
     * @returns a #AsFormat
     */
    static new(): Format
    _init(config?: Format.ConstructorProperties): void
    /**
     * Guesses the source kind based from the filename.
     * @param filename a file name
     * @returns A #AsFormatKind, e.g. %AS_FORMAT_KIND_APPSTREAM.
     */
    static guess_kind(filename: string | null): FormatKind
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsFormatKind, or %AS_FORMAT_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): FormatKind
    static kind_to_string(kind: FormatKind): string | null
}

module Icon {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Icon {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Icon

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Icon

    /**
     * Converts the icon from one kind to another.
     * @param kind a %AsIconKind, e.g. #AS_ICON_KIND_EMBEDDED
     * @returns %TRUE for success
     */
    convert_to_kind(kind: IconKind): boolean
    /**
     * Gets the absolute path on disk of the icon.
     * NOTE: This is only set for icons of type %AS_ICON_KIND_LOCAL
     * @returns the absolute filename on disk
     */
    get_filename(): string | null
    /**
     * Gets the icon height.
     * @returns height in pixels
     */
    get_height(): number
    /**
     * Gets the icon kind.
     * @returns the #AsIconKind
     */
    get_kind(): IconKind
    /**
     * Gets the name of the icon, e.g. "epiphany.png"
     * @returns the basename of the icon
     */
    get_name(): string | null
    /**
     * Gets the icon pixbuf if set.
     * @returns the #GdkPixbuf, or %NULL
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets the suggested prefix of the icon.
     * @returns filename
     */
    get_prefix(): string | null
    /**
     * Gets the icon scale.
     * @returns scale factor
     */
    get_scale(): number
    /**
     * Gets the full qualified URL for the icon, usually pointing at some mirror.
     * NOTE: This is only set for icons of type %AS_ICON_KIND_REMOTE
     * @returns the fully qualified URL
     */
    get_url(): string | null
    /**
     * Gets the icon width.
     * @returns width in pixels
     */
    get_width(): number
    /**
     * Loads the icon into a local pixbuf.
     * @param flags a #AsIconLoadFlags, e.g. %AS_ICON_LOAD_FLAG_SEARCH_SIZE
     * @returns %TRUE for success
     */
    load(flags: IconLoadFlags): boolean
    /**
     * Sets the icon absolute filename.
     * @param filename the new icon URL.
     */
    set_filename(filename: string | null): void
    /**
     * Sets the icon height.
     * @param height the height in pixels.
     */
    set_height(height: number): void
    /**
     * Sets the icon kind.
     * @param kind the #AsIconKind, e.g. %AS_ICON_KIND_STOCK.
     */
    set_kind(kind: IconKind): void
    /**
     * Sets the basename to use for the icon.
     * @param name the icon name, e.g. "gimp.png"
     */
    set_name(name: string | null): void
    /**
     * Sets the icon pixbuf.
     * @param pixbuf the #GdkPixbuf, or %NULL
     */
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the icon prefix filename.
     * @param prefix the new filename prefix.
     */
    set_prefix(prefix: string | null): void
    /**
     * Sets the icon scale.
     * @param scale the scale as a factor.
     */
    set_scale(scale: number): void
    /**
     * Sets the icon URL.
     * @param url the new icon URL.
     */
    set_url(url: string | null): void
    /**
     * Sets the icon width.
     * @param width the width in pixels.
     */
    set_width(width: number): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Icon

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Icon extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Icon

    static name: string
    static $gtype: GObject.GType<Icon>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Icon

    constructor(config?: Icon.ConstructorProperties) 
    /**
     * Creates a new #AsIcon.
     * @constructor 
     * @returns a #AsIcon
     */
    constructor() 
    /**
     * Creates a new #AsIcon.
     * @constructor 
     * @returns a #AsIcon
     */
    static new(): Icon
    _init(config?: Icon.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Converts the text representation to an enumerated value.
     * @param icon_kind the string.
     * @returns a #AsIconKind or %AS_ICON_KIND_UNKNOWN for unknown
     */
    static kind_from_string(icon_kind: string | null): IconKind
    /**
     * Converts the enumerated value to an text representation.
     * @param icon_kind the `AsIconKind`.
     * @returns string version of @icon_kind
     */
    static kind_to_string(icon_kind: IconKind): string | null
}

module Image {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Image {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Image

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Image

    /**
     * Checks if two images are the same.
     * @param image2 a #AsImage instance.
     * @returns %TRUE for success
     */
    equal(image2: Image): boolean
    /**
     * Gets the suggested basename the image, including file extension.
     * @returns filename
     */
    get_basename(): string | null
    /**
     * Gets the image height.
     * @returns height in pixels
     */
    get_height(): number
    /**
     * Gets the image kind.
     * @returns the #AsImageKind
     */
    get_kind(): ImageKind
    /**
     * Gets the locale of the image.
     * @returns locale, or %NULL
     */
    get_locale(): string | null
    /**
     * Gets the string representation of the pixbuf hash value.
     * @returns string representing the MD5 sum, or %NULL if unset
     */
    get_md5(): string | null
    /**
     * Gets the image pixbuf if set.
     * @returns the #GdkPixbuf, or %NULL
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets the full qualified URL for the image, usually pointing at some mirror.
     * @returns URL
     */
    get_url(): string | null
    /**
     * Gets the image width.
     * @returns width in pixels
     */
    get_width(): number
    /**
     * Reads a pixbuf from a file.
     * 
     * NOTE: This function also sets the suggested filename which can be retrieved
     * using as_image_get_basename(). This can be overridden if required.
     * @param filename filename to read from
     * @returns %TRUE for success
     */
    load_filename(filename: string | null): boolean
    /**
     * Reads an image from a file.
     * @param filename filename to read from
     * @param dest_size The size of the constructed pixbuf, or 0 for the native size
     * @param src_size_min The smallest source size allowed, or 0 for none
     * @param flags a #AsImageLoadFlags, e.g. %AS_IMAGE_LOAD_FLAG_NONE
     * @returns %TRUE for success
     */
    load_filename_full(filename: string | null, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean
    /**
     * Saves a pixbuf to a file.
     * @param filename filename to write to
     * @param width target width, or 0 for default
     * @param height target height, or 0 for default
     * @param flags some #AsImageSaveFlags values, e.g. %AS_IMAGE_SAVE_FLAG_PAD_16_9
     * @returns %TRUE for success
     */
    save_filename(filename: string | null, width: number, height: number, flags: ImageSaveFlags): boolean
    /**
     * Resamples a pixbuf to a specific size.
     * @param width target width, or 0 for default
     * @param height target height, or 0 for default
     * @param flags some #AsImageSaveFlags values, e.g. %AS_IMAGE_SAVE_FLAG_PAD_16_9
     * @returns A #GdkPixbuf of the specified size
     */
    save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf
    /**
     * Sets the image basename filename.
     * @param basename the new filename basename.
     */
    set_basename(basename: string | null): void
    /**
     * Sets the image height.
     * @param height the height in pixels.
     */
    set_height(height: number): void
    /**
     * Sets the image kind.
     * @param kind the #AsImageKind, e.g. %AS_IMAGE_KIND_THUMBNAIL.
     */
    set_kind(kind: ImageKind): void
    /**
     * Sets the image locale.
     * @param locale the new image locale, e.g. "en_GB" or %NULL.
     */
    set_locale(locale: string | null): void
    /**
     * Sets the image pixbuf.
     * @param pixbuf the #GdkPixbuf, or %NULL
     */
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the fully-qualified mirror URL to use for the image.
     * @param url the URL.
     */
    set_url(url: string | null): void
    /**
     * Sets the image width.
     * @param width the width in pixels.
     */
    set_width(width: number): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Image extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Image

    constructor(config?: Image.ConstructorProperties) 
    /**
     * Creates a new #AsImage.
     * @constructor 
     * @returns a #AsImage
     */
    constructor() 
    /**
     * Creates a new #AsImage.
     * @constructor 
     * @returns a #AsImage
     */
    static new(): Image
    _init(config?: Image.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsImageKind, or %AS_IMAGE_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): ImageKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsImageKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: ImageKind): string | null
}

module Launchable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Launchable {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Launchable

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Launchable

    /**
     * Gets the launchable kind.
     * @returns the #AsLaunchableKind
     */
    get_kind(): LaunchableKind
    /**
     * Gets the value to use for the launchable.
     * @returns usually a desktop ID, e.g. "gimp.desktop"
     */
    get_value(): string | null
    /**
     * Sets the launchable kind.
     * @param kind the #AsLaunchableKind, e.g. %AS_LAUNCHABLE_KIND_DESKTOP_ID.
     */
    set_kind(kind: LaunchableKind): void
    /**
     * Sets the fully-qualified mirror URL to use for the launchable.
     * @param value the URL.
     */
    set_value(value: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Launchable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Launchable extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Launchable

    static name: string
    static $gtype: GObject.GType<Launchable>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Launchable

    constructor(config?: Launchable.ConstructorProperties) 
    /**
     * Creates a new #AsLaunchable.
     * @constructor 
     * @returns a #AsLaunchable
     */
    constructor() 
    /**
     * Creates a new #AsLaunchable.
     * @constructor 
     * @returns a #AsLaunchable
     */
    static new(): Launchable
    _init(config?: Launchable.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsLaunchableKind, or %AS_LAUNCHABLE_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): LaunchableKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsLaunchableKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: LaunchableKind): string | null
}

module Problem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Problem {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Problem

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Problem

    /**
     * Gets the problem kind.
     * @returns a #AsProblemKind, e.g. %AS_PROBLEM_KIND_TAG_MISSING
     */
    get_kind(): ProblemKind
    /**
     * Gets the line number of the problem if known.
     * @returns a line number, where 0 is unknown
     */
    get_line_number(): number
    /**
     * Gets the specific message for the problem.
     * @returns the message
     */
    get_message(): string | null
    /**
     * Sets the problem kind.
     * @param kind the #AsProblemKind.
     */
    set_kind(kind: ProblemKind): void
    /**
     * Adds an line_number to the problem.
     * @param line_number a #guint instance.
     */
    set_line_number(line_number: number): void
    /**
     * Sets a message on the problem.
     * @param message the message text.
     */
    set_message(message: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Problem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Problem extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Problem

    static name: string
    static $gtype: GObject.GType<Problem>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Problem

    constructor(config?: Problem.ConstructorProperties) 
    /**
     * Creates a new #AsProblem.
     * @constructor 
     * @returns a #AsProblem
     */
    constructor() 
    /**
     * Creates a new #AsProblem.
     * @constructor 
     * @returns a #AsProblem
     */
    static new(): Problem
    _init(config?: Problem.ConstructorProperties): void
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsProblemKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: ProblemKind): string | null
}

module Provide {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Provide {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Provide

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Provide

    /**
     * Gets the provide kind.
     * @returns the #AsProvideKind
     */
    get_kind(): ProvideKind
    /**
     * Gets the full qualified URL for the provide, usually pointing at some mirror.
     * @returns URL
     */
    get_value(): string | null
    /**
     * Sets the provide kind.
     * @param kind the #AsProvideKind, e.g. %AS_PROVIDE_KIND_LIBRARY.
     */
    set_kind(kind: ProvideKind): void
    /**
     * Sets the fully-qualified mirror URL to use for the provide.
     * @param value the URL.
     */
    set_value(value: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Provide

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Provide extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Provide

    static name: string
    static $gtype: GObject.GType<Provide>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Provide

    constructor(config?: Provide.ConstructorProperties) 
    /**
     * Creates a new #AsProvide.
     * @constructor 
     * @returns a #AsProvide
     */
    constructor() 
    /**
     * Creates a new #AsProvide.
     * @constructor 
     * @returns a #AsProvide
     */
    static new(): Provide
    _init(config?: Provide.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsProvideKind, or %AS_PROVIDE_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): ProvideKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsProvideKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: ProvideKind): string | null
}

module Release {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Release {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Release

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Release

    /**
     * Adds a release checksum.
     * @param checksum a #AsChecksum instance.
     */
    add_checksum(checksum: Checksum): void
    /**
     * Adds a release location.
     * @param location the location string.
     */
    add_location(location: string | null): void
    /**
     * Gets the release blob, which is typically firmware file data.
     * @param filename a filename
     * @returns a #GBytes, or %NULL for not set
     */
    get_blob(filename: string | null): GLib.Bytes
    /**
     * Gets the checksum for a release.
     * @param fn a file basename
     * @returns an #AsChecksum, or %NULL for not found
     */
    get_checksum_by_fn(fn: string | null): Checksum
    /**
     * Gets the checksum for a release.
     * @param target a #AsChecksumTarget, e.g. %AS_CHECKSUM_TARGET_CONTAINER
     * @returns an #AsChecksum, or %NULL for not found
     */
    get_checksum_by_target(target: ChecksumTarget): Checksum
    /**
     * Gets the release checksums.
     * @returns list of checksums
     */
    get_checksums(): Checksum[]
    /**
     * Gets the release description markup for a given locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns markup, or %NULL for not set or invalid
     */
    get_description(locale: string | null): string | null
    /**
     * Gets the typical install duration.
     * @returns install duration in seconds, or 0 for unset
     */
    get_install_duration(): number
    /**
     * Gets the type of the release.
     * @returns enumerated value, e.g. %AS_RELEASE_KIND_STABLE
     */
    get_kind(): ReleaseKind
    /**
     * Gets the default release location, typically a URL.
     * @returns string, or %NULL for not set or invalid
     */
    get_location_default(): string | null
    /**
     * Gets the release locations, typically URLs.
     * @returns list of locations
     */
    get_locations(): string[]
    /**
     * Gets the release size.
     * @param kind a #AsSizeKind, e.g. #AS_SIZE_KIND_DOWNLOAD
     * @returns The size in bytes, or 0 for unknown.
     */
    get_size(kind: SizeKind): number
    /**
     * Gets the release state.
     * @returns enumberated value, or %AS_RELEASE_STATE_UNKNOWN for not set or invalid
     */
    get_state(): ReleaseState
    /**
     * Gets the release timestamp.
     * @returns timestamp, or 0 for unset
     */
    get_timestamp(): number
    /**
     * Gets the release urgency.
     * @returns enumberated value, or %AS_URGENCY_KIND_UNKNOWN for not set or invalid
     */
    get_urgency(): UrgencyKind
    /**
     * Gets a URL.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     * @returns string, or %NULL if unset
     */
    get_url(url_kind: UrlKind): string | null
    /**
     * Gets the release version.
     * @returns string, or %NULL for not set or invalid
     */
    get_version(): string | null
    /**
     * Sets a release blob, which is typically firmware data or a detached signature.
     * 
     * NOTE: This is not stored in the XML file, and is only available in-memory.
     * @param filename a filename
     * @param blob the #GBytes data blob
     */
    set_blob(filename: string | null, blob: GLib.Bytes): void
    /**
     * Sets the description release markup.
     * @param locale the locale. e.g. "en_GB"
     * @param description the description markup.
     */
    set_description(locale: string | null, description: string | null): void
    /**
     * Sets the typical duration of the install.
     * @param install_duration the install duration in seconds
     */
    set_install_duration(install_duration: number): void
    /**
     * Sets the release kind.
     * @param kind the #AsReleaseKind
     */
    set_kind(kind: ReleaseKind): void
    /**
     * Sets the release size.
     * @param kind a #AsSizeKind, e.g. #AS_SIZE_KIND_DOWNLOAD
     * @param size a size in bytes, or 0 for unknown
     */
    set_size(kind: SizeKind, size: number): void
    /**
     * Sets the release state.
     * @param state the release state, e.g. %AS_RELEASE_STATE_INSTALLED
     */
    set_state(state: ReleaseState): void
    /**
     * Sets the release timestamp.
     * @param timestamp the timestamp value.
     */
    set_timestamp(timestamp: number): void
    /**
     * Sets the release urgency.
     * @param urgency the release urgency, e.g. %AS_URGENCY_KIND_CRITICAL
     */
    set_urgency(urgency: UrgencyKind): void
    /**
     * Adds some URL data to the application.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_DETAILS
     * @param url the full URL.
     */
    set_url(url_kind: UrlKind, url: string | null): void
    /**
     * Sets the release version.
     * @param version the version string.
     */
    set_version(version: string | null): void
    /**
     * Compares two release.
     * @param rel2 a #AsRelease instance.
     * @returns -1 if rel1 > rel2, +1 if rel1 < rel2, 0 otherwise
     */
    vercmp(rel2: Release): number

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Release

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Release extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Release

    static name: string
    static $gtype: GObject.GType<Release>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Release

    constructor(config?: Release.ConstructorProperties) 
    /**
     * Creates a new #AsRelease.
     * @constructor 
     * @returns a #AsRelease
     */
    constructor() 
    /**
     * Creates a new #AsRelease.
     * @constructor 
     * @returns a #AsRelease
     */
    static new(): Release
    _init(config?: Release.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns an #AsReleaseKind or %AS_RELEASE_KIND_UNKNOWN for unknown
     */
    static kind_from_string(kind_str: string | null): ReleaseKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsReleaseKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: ReleaseKind): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param state a string
     * @returns A #AsReleaseState, e.g. %AS_RELEASE_STATE_INSTALLED.
     */
    static state_from_string(state: string | null): ReleaseState
    /**
     * Converts the enumerated value to an text representation.
     * @param state the #AsReleaseState, e.g. %AS_RELEASE_STATE_INSTALLED
     * @returns string version of @state, or %NULL for unknown
     */
    static state_to_string(state: ReleaseState): string | null
}

module Require {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Require {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Require

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Require

    /**
     * Checks if two requires are the same.
     * @param require2 a #AsRequire instance.
     * @returns %TRUE for success
     */
    equal(require2: Require): boolean
    /**
     * Gets the require version comparison type.
     * @returns the #AsRequireKind
     */
    get_compare(): RequireCompare
    /**
     * Gets the require kind.
     * @returns the #AsRequireKind
     */
    get_kind(): RequireKind
    /**
     * Gets the require value if set.
     * @returns the value, e.g. "bootloader"
     */
    get_value(): string | null
    /**
     * Gets the require version if set.
     * @returns the version, e.g. "0.1.2"
     */
    get_version(): string | null
    /**
     * Sets the require version comparison type.
     * @param compare the #AsRequireKind, e.g. %AS_REQUIRE_KIND_ID.
     */
    set_compare(compare: RequireCompare): void
    /**
     * Sets the require kind.
     * @param kind the #AsRequireKind, e.g. %AS_REQUIRE_KIND_ID.
     */
    set_kind(kind: RequireKind): void
    /**
     * Sets the require value.
     * @param value an require version, e.g. `firmware`
     */
    set_value(value: string | null): void
    /**
     * Sets the require version.
     * @param version an version number, e.g. `0.1.2`
     */
    set_version(version: string | null): void
    /**
     * Compares the version number of the requirement with a predicate.
     * @param version a version number, e.g. `0.1.3`
     * @returns %TRUE if the predicate was true
     */
    version_compare(version: string | null): boolean

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Require

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Require extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Require

    static name: string
    static $gtype: GObject.GType<Require>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Require

    constructor(config?: Require.ConstructorProperties) 
    /**
     * Creates a new #AsRequire.
     * @constructor 
     * @returns a #AsRequire
     */
    constructor() 
    /**
     * Creates a new #AsRequire.
     * @constructor 
     * @returns a #AsRequire
     */
    static new(): Require
    _init(config?: Require.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param compare the string.
     * @returns a #AsRequireCompare, or 		     %AS_REQUIRE_COMPARE_UNKNOWN for unknown.
     */
    static compare_from_string(compare: string | null): RequireCompare
    /**
     * Converts the enumerated value to an text representation.
     * @param compare the #AsRequireCompare.
     * @returns string version of @compare
     */
    static compare_to_string(compare: RequireCompare): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsRequireKind, or %AS_REQUIRE_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): RequireKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsRequireKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: RequireKind): string | null
}

module Review {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of AppStreamGlib-1.0.AppStreamGlib.Review

        date?: Review | null
        description?: string | null
        flags?: number | null
        id?: string | null
        locale?: string | null
        rating?: number | null
        reviewer_id?: string | null
        reviewer_name?: string | null
        summary?: string | null
        version?: string | null
    }

}

interface Review {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Review

    date: Review
    description: string | null
    flags: number
    id: string | null
    locale: string | null
    rating: number
    reviewer_id: string | null
    reviewer_name: string | null
    summary: string | null
    version: string | null

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Review

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Review

    /**
     * Adds flags to an existing review without replacing the other flags.
     * @param flags a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
     */
    add_flags(flags: ReviewFlags): void
    /**
     * Adds metadata to the review object.
     * It is left for the the plugin to use this method as required, but a
     * typical use would be to store some secure authentication token.
     * @param key a string
     * @param value a string
     */
    add_metadata(key: string | null, value: string | null): void
    /**
     * Checks if two reviews are the same.
     * @param review2 a #AsReview instance.
     * @returns %TRUE for success
     */
    equal(review2: Review): boolean
    /**
     * Gets the date the review was originally submitted.
     * @returns the #GDateTime, or %NULL for unset
     */
    get_date(): GLib.DateTime
    /**
     * Gets the multi-line review text that forms the body of the review.
     * @returns the string, or %NULL
     */
    get_description(): string | null
    /**
     * Gets any flags set on the review, for example if the user has already
     * voted on the review or if the user wrote the review themselves.
     * @returns a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
     */
    get_flags(): ReviewFlags
    /**
     * Gets the review id.
     * @returns the review identifier, e.g. "deadbeef"
     */
    get_id(): string | null
    /**
     * Gets the locale for the review.
     * @returns the string, or %NULL
     */
    get_locale(): string | null
    /**
     * Gets some metadata from a review object.
     * It is left for the the plugin to use this method as required, but a
     * typical use would be to retrieve some secure authentication token.
     * @param key a string
     * @returns A string value, or %NULL for not found
     */
    get_metadata_item(key: string | null): string | null
    /**
     * This allows the UI to sort reviews into the correct order.
     * Higher numbers indicate a more important or relevant review.
     * @returns the review priority, or 0 for unset.
     */
    get_priority(): number
    /**
     * Gets the star rating of the review, where 100 is 5 stars.
     * @returns integer as a percentage, or 0 for unset
     */
    get_rating(): number
    /**
     * Gets the name of the reviewer.
     * @returns the reviewer ID, e.g. "deadbeef", or %NULL
     */
    get_reviewer_id(): string | null
    /**
     * Gets the name of the reviewer.
     * @returns the reviewer name, e.g. "David Smith", or %NULL
     */
    get_reviewer_name(): string | null
    /**
     * Gets the review summary.
     * @returns the one-line summary, e.g. "Awesome application"
     */
    get_summary(): string | null
    /**
     * Gets the version string for the application being reviewed..
     * @returns the version string, e.g. "0.1.2", or %NULL for unset
     */
    get_version(): string | null
    /**
     * Sets the date the review was originally submitted.
     * @param date a #GDateTime, or %NULL
     */
    set_date(date: GLib.DateTime): void
    /**
     * Sets the multi-line review text that forms the body of the review.
     * @param description multi-line description
     */
    set_description(description: string | null): void
    /**
     * Gets any flags set on the review, for example if the user has already
     * voted on the review or if the user wrote the review themselves.
     * @param flags a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
     */
    set_flags(flags: ReviewFlags): void
    /**
     * Sets the review identifier that is unique to each review.
     * @param id review identifier, e.g. "deadbeef"
     */
    set_id(id: string | null): void
    /**
     * Sets the locale for the review.
     * @param locale locale, e.g. "en_GB"
     */
    set_locale(locale: string | null): void
    /**
     * Sets the priority for the review, where positive numbers indicate
     * a better review for the specific user.
     * @param priority a priority value
     */
    set_priority(priority: number): void
    /**
     * Sets the star rating of the review, where 100 is 5 stars..
     * @param rating a integer as a percentage, or 0 for unset
     */
    set_rating(rating: number): void
    /**
     * Sets the name of the reviewer, which can be left unset.
     * @param reviewer_id the reviewer ID, e.g. "deadbeef"
     */
    set_reviewer_id(reviewer_id: string | null): void
    /**
     * Sets the name of the reviewer, which can be left unset.
     * @param reviewer_name the reviewer name, e.g. "David Smith"
     */
    set_reviewer_name(reviewer_name: string | null): void
    /**
     * Sets the one-line summary that may be displayed in bold.
     * @param summary a one-line summary, e.g. "Awesome application"
     */
    set_summary(summary: string | null): void
    /**
     * Sets the version string for the application being reviewed.
     * @param version a version string, e.g. "0.1.2"
     */
    set_version(version: string | null): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Review

    connect(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rating", ...args: any[]): void
    connect(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reviewer-id", ...args: any[]): void
    connect(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reviewer-name", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Review extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Review

    static name: string
    static $gtype: GObject.GType<Review>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Review

    constructor(config?: Review.ConstructorProperties) 
    /**
     * Creates a new #AsReview.
     * @constructor 
     * @returns a #AsReview
     */
    constructor() 
    /**
     * Creates a new #AsReview.
     * @constructor 
     * @returns a #AsReview
     */
    static new(): Review
    _init(config?: Review.ConstructorProperties): void
}

module Screenshot {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Screenshot {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    /**
     * Adds an image to the screenshot.
     * @param image a #AsImage instance.
     */
    add_image(image: Image): void
    /**
     * Checks if two screenshots are the same.
     * @param screenshot2 a #AsScreenshot instance.
     * @returns %TRUE for success
     */
    equal(screenshot2: Screenshot): boolean
    /**
     * Gets the image caption for a specific locale.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     * @returns the caption
     */
    get_caption(locale: string | null): string | null
    /**
     * Gets the AsImage closest to the target size. The #AsImage may not actually
     * be the requested size, and the application may have to pad / rescale the
     * image to make it fit.
     * @param width target width
     * @param height target height
     * @returns an #AsImage, or %NULL
     */
    get_image(width: number, height: number): Image
    /**
     * Gets the AsImage closest to the target size with the specified locale.
     * The #AsImage may not actually be the requested size, and the application may
     * have to pad / rescale the image to make it fit.
     * 
     * FIXME: This function assumes the images are ordered in preference order, e.g.
     * "en_GB -> en -> NULL"
     * @param locale locale, e.g. "en_GB"
     * @param width target width
     * @param height target height
     * @returns an #AsImage, or %NULL
     */
    get_image_for_locale(locale: string | null, width: number, height: number): Image
    /**
     * Gets the images included in the screenshot of all sizes and locales.
     * @returns an array
     */
    get_images(): Image[]
    /**
     * Returns all images of all sizes that are compatible with a specific locale.
     * @param locale a locale, e.g. `en_GB`
     * @returns an array
     */
    get_images_for_locale(locale: string | null): Image[]
    /**
     * Gets the screenshot kind.
     * @returns a #AsScreenshotKind
     */
    get_kind(): ScreenshotKind
    /**
     * Gets the screenshot priority.
     * @returns a priority value
     */
    get_priority(): number
    /**
     * Gets the source image (the unscaled version) for the screenshot
     * @returns an #AsImage, or %NULL
     */
    get_source(): Image
    /**
     * Sets a caption on the screenshot for a specific locale.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     * @param caption the caption text.
     */
    set_caption(locale: string | null, caption: string | null): void
    /**
     * Sets the screenshot kind.
     * @param kind the #AsScreenshotKind.
     */
    set_kind(kind: ScreenshotKind): void
    /**
     * Sets the screenshot priority. Higher numbers are better.
     * @param priority the priority value.
     */
    set_priority(priority: number): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Screenshot extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    static name: string
    static $gtype: GObject.GType<Screenshot>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    constructor(config?: Screenshot.ConstructorProperties) 
    /**
     * Creates a new #AsScreenshot.
     * @constructor 
     * @returns a #AsScreenshot
     */
    constructor() 
    /**
     * Creates a new #AsScreenshot.
     * @constructor 
     * @returns a #AsScreenshot
     */
    static new(): Screenshot
    _init(config?: Screenshot.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a %AsScreenshotKind, or                           %AS_SCREENSHOT_KIND_UNKNOWN if not known.
     */
    static kind_from_string(kind: string | null): ScreenshotKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsScreenshotKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: ScreenshotKind): string | null
}

module Store {

    // Signal callback interfaces

    /**
     * Signal callback interface for `app-added`
     */
    interface AppAddedSignalCallback {
        ($obj: Store, app: App): void
    }

    /**
     * Signal callback interface for `app-changed`
     */
    interface AppChangedSignalCallback {
        ($obj: Store, app: App): void
    }

    /**
     * Signal callback interface for `app-removed`
     */
    interface AppRemovedSignalCallback {
        ($obj: Store, app: App): void
    }

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: Store): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Store {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Store

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Store

    /**
     * Adds an application to the store. If a lower priority application has already
     * been added then this new application will replace it.
     * 
     * Additionally only applications where the kind is known will be added.
     * @param app a #AsApp instance.
     */
    add_app(app: App): void
    /**
     * Adds several applications to the store.
     * 
     * Additionally only applications where the kind is known will be added.
     * @param apps an array of apps
     */
    add_apps(apps: App[]): void
    /**
     * Adds a filter to the store so that only components of this type are
     * loaded into the store. This may be useful if the client is only interested
     * in certain types of component, or not interested in loading components
     * it cannot process.
     * 
     * If no filter is set then all types of components are loaded.
     * @param kind a #AsAppKind, e.g. %AS_APP_KIND_FIRMWARE
     */
    add_filter(kind: AppKind): void
    /**
     * Adds a metadata index key.
     * 
     * NOTE: if applications are removed *all* the indexes will be invalid and
     * will have to be re-added.
     * @param key the metadata key.
     */
    add_metadata_index(key: string | null): void
    /**
     * Converts all the icons in the store to a specific kind.
     * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
     * @returns %TRUE for success
     */
    convert_icons(kind: IconKind): boolean
    /**
     * Gets an array of all the valid applications in the store.
     * @returns an array
     */
    dup_apps(): App[]
    /**
     * Gets an array of all the merge applications that match a specific ID.
     * @param id the application full ID.
     * @returns an array
     */
    dup_apps_by_id_merge(id: string | null): App[]
    /**
     * Parses an appstream store presented as an archive. This is typically
     * a .cab file containing firmware files.
     * @param bytes a #GBytes.
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    from_bytes(bytes: GLib.Bytes, cancellable: Gio.Cancellable | null): boolean
    /**
     * Parses an AppStream XML or DEP-11 YAML file and adds any valid applications
     * to the store.
     * 
     * If the root node does not have a 'origin' attribute, then the method
     * as_store_set_origin() should be called *before* this function if cached
     * icons are required.
     * 
     * If `file` does not exist, %G_IO_ERROR_NOT_FOUND will be returned. Other
     * #GIOErrors and #AsStoreErrors may be returned as appropriate.
     * @param file a #GFile.
     * @param icon_root the icon path, or %NULL for the default (unused)
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    from_file(file: Gio.File, icon_root: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Parses AppStream XML file and adds any valid applications to the store.
     * 
     * If the root node does not have a 'origin' attribute, then the method
     * as_store_set_origin() should be called *before* this function if cached
     * icons are required.
     * @param data XML data
     * @param icon_root the icon path, or %NULL for the default.
     * @returns %TRUE for success
     */
    from_xml(data: string | null, icon_root: string | null): boolean
    /**
     * Gets the flags used for adding applications to the store.
     * @returns the #AsStoreAddFlags, or 0 if unset
     */
    get_add_flags(): number
    /**
     * Gets the AppStream API version.
     * @returns the API version
     */
    get_api_version(): number
    /**
     * Finds an application in the store by ID.
     * If more than one application exists matching the specific ID,
     * (for instance when using %AS_STORE_ADD_FLAG_USE_UNIQUE_ID) then the
     * first item that was added is returned.
     * @param id the application full ID.
     * @returns a #AsApp or %NULL
     */
    get_app_by_id(id: string | null): App
    /**
     * Finds an application in the store ignoring the prefix type.
     * @param id the application full ID.
     * @returns a #AsApp or %NULL
     */
    get_app_by_id_ignore_prefix(id: string | null): App
    /**
     * Finds an application in the store by either by the current desktop ID
     * or a desktop ID that it has used previously. This allows upstream software
     * to change their ID (e.g. from cheese.desktop to org.gnome.Cheese.desktop)
     * without us duplicating entries in the software center.
     * @param id the application full ID.
     * @returns a #AsApp or %NULL
     */
    get_app_by_id_with_fallbacks(id: string | null): App
    /**
     * Finds an application in the store that provides a specific launchable.
     * @param kind the #AsLaunchableKind
     * @param value the provide value, e.g. "gimp.desktop"
     * @returns a #AsApp or %NULL
     */
    get_app_by_launchable(kind: LaunchableKind, value: string | null): App
    /**
     * Finds an application in the store by package name.
     * @param pkgname the package name.
     * @returns a #AsApp or %NULL
     */
    get_app_by_pkgname(pkgname: string | null): App
    /**
     * Finds an application in the store by any of the possible package names.
     * @param pkgnames the package names to find.
     * @returns a #AsApp or %NULL
     */
    get_app_by_pkgnames(pkgnames: string | null): App
    /**
     * Finds an application in the store by something that it provides.
     * @param kind the #AsProvideKind
     * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
     * @returns a #AsApp or %NULL
     */
    get_app_by_provide(kind: ProvideKind, value: string | null): App
    /**
     * Finds an application in the store by matching the unique ID.
     * @param unique_id the application unique ID, e.g.      `user/flatpak/gnome-apps-nightly/app/gimp.desktop/master`
     * @param search_flags the search flags, e.g. %AS_STORE_SEARCH_FLAG_USE_WILDCARDS
     * @returns a #AsApp or %NULL
     */
    get_app_by_unique_id(unique_id: string | null, search_flags: number): App
    /**
     * Gets an array of all the valid applications in the store.
     * @returns an array
     */
    get_apps(): App[]
    /**
     * Gets an array of all the applications that match a specific ID,
     * ignoring the prefix type.
     * @param id the application full ID.
     * @returns an array
     */
    get_apps_by_id(id: string | null): App[]
    /**
     * Gets an array of all the merge applications that match a specific ID.
     * @param id the application full ID.
     * @returns an array
     */
    get_apps_by_id_merge(id: string | null): App[]
    /**
     * Gets an array of all the applications that match a specific metadata element.
     * @param key metadata key
     * @param value metadata value
     * @returns an array
     */
    get_apps_by_metadata(key: string | null, value: string | null): App[]
    /**
     * Finds any applications in the store by something that they provides.
     * @param kind the #AsProvideKind
     * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
     * @returns an array of applications
     */
    get_apps_by_provide(kind: ProvideKind, value: string | null): App[]
    /**
     * Gets the metadata builder identifier, which is used to work out if old
     * metadata is compatible with this builder.
     * @returns the builder_id string, or %NULL if unset
     */
    get_builder_id(): string | null
    /**
     * Gets the destdir, which is used to prefix usr.
     * @returns the destdir path, or %NULL if unset
     */
    get_destdir(): string | null
    /**
     * Gets the metadata origin, which is used to locate icons.
     * @returns the origin string, or %NULL if unset
     */
    get_origin(): string | null
    /**
     * Gets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @returns a #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    get_search_match(): number
    /**
     * Gets the size of the store after deduplication and prioritization has
     * taken place.
     * @returns the number of usable applications in the store
     */
    get_size(): number
    /**
     * Gets the AppStream API version.
     * @returns the API version
     */
    get_version(): string | null
    /**
     * Gets the flags used for adding files to the store.
     * @returns the #AsStoreWatchFlags, or 0 if unset
     */
    get_watch_flags(): number
    /**
     * Loads the store from the default locations.
     * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    load(flags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously loads the store from the default locations.
     * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
     * @param cancellable a #GCancellable.
     * @param callback A #GAsyncReadyCallback
     */
    load_async(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_async

    /**
     * Promisified version of {@link load_async}
     * 
     * Asynchronously loads the store from the default locations.
     * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
     * @param cancellable a #GCancellable.
     * @returns A Promise of: %TRUE for success
     */
    load_async(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Retrieve the result of as_store_load_async().
     * @param result A #GAsyncResult
     * @returns %TRUE for success
     */
    load_finish(result: Gio.AsyncResult): boolean
    /**
     * Loads the store from a specific path.
     * @param path A path to load
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    load_path(path: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously loads the store from a specific path.
     * @param path A path to load
     * @param cancellable a #GCancellable.
     * @param callback A #GAsyncReadyCallback
     */
    load_path_async(path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_path_async

    /**
     * Promisified version of {@link load_path_async}
     * 
     * Asynchronously loads the store from a specific path.
     * @param path A path to load
     * @param cancellable a #GCancellable.
     * @returns A Promise of: %TRUE for success
     */
    load_path_async(path: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Retrieve the result of as_store_load_path_async().
     * @param result A #GAsyncResult
     * @returns %TRUE for success
     */
    load_path_finish(result: Gio.AsyncResult): boolean
    /**
     * Populates the token cache for all applications in the store. This allows
     * all the search keywords for all applications in the store to be
     * pre-processed at one time in multiple threads rather than on demand.
     * 
     * Note: Calling as_app_search_matches() automatically generates the search
     * cache for the #AsApp object if it has not already been generated.
     */
    load_search_cache(): void
    /**
     * Removes all applications from the store.
     */
    remove_all(): void
    /**
     * Removes an application from the store if it exists.
     * @param app a #AsApp instance.
     */
    remove_app(app: App): void
    /**
     * Removes an application from the store if it exists.
     * @param id an application id
     */
    remove_app_by_id(id: string | null): void
    /**
     * Removes any applications from the store if they have any vetos.
     */
    remove_apps_with_veto(): void
    /**
     * Removed a filter from the store so that components of this type are no longer
     * loaded into the store. This may be useful if the client is only interested
     * in certain types of component.
     * 
     * If all filters are removed then all types of components are loaded.
     * @param kind a #AsAppKind, e.g. %AS_APP_KIND_FIRMWARE
     */
    remove_filter(kind: AppKind): void
    /**
     * Sets the flags used when adding applications to the store.
     * 
     * NOTE: Using %AS_STORE_ADD_FLAG_PREFER_LOCAL may be a privacy risk depending on
     * your level of paranoia, and should not be used by default.
     * @param add_flags the #AsStoreAddFlags, e.g. %AS_STORE_ADD_FLAG_NONE
     */
    set_add_flags(add_flags: number): void
    /**
     * Sets the AppStream API version.
     * @param api_version the API version
     */
    set_api_version(api_version: number): void
    /**
     * Sets the metadata builder identifier, which is used to work out if old
     * metadata can be used.
     * @param builder_id the builder_id, e.g. "appstream-glib:1"
     */
    set_builder_id(builder_id: string | null): void
    /**
     * Sets the destdir, which is used to prefix usr.
     * @param destdir the destdir, e.g. "/tmp"
     */
    set_destdir(destdir: string | null): void
    /**
     * Sets the metadata origin, which is used to locate icons.
     * @param origin the origin, e.g. "fedora-21"
     */
    set_origin(origin: string | null): void
    /**
     * Sets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @param search_match the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    set_search_match(search_match: number): void
    /**
     * Sets the AppStream API version.
     * @param api_version the API version
     */
    set_version(api_version: string | null): void
    /**
     * Sets the flags used when adding files to the store.
     * @param watch_flags the #AsStoreWatchFlags, e.g. %AS_STORE_WATCH_FLAG_NONE
     */
    set_watch_flags(watch_flags: number): void
    /**
     * Outputs an optionally compressed XML file of all the applications in the store.
     * @param file file
     * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
     * @param cancellable A #GCancellable, or %NULL
     * @returns A #GString
     */
    to_file(file: Gio.File, flags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Outputs an XML representation of all the applications in the store.
     * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
     * @returns A #GString
     */
    to_xml(flags: number): GLib.String
    /**
     * Validates information in the store for data applicable to the defined
     * metadata version.
     * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
     * @returns A list of problems, or %NULL
     */
    validate(flags: number): Problem[]

    // Own virtual methods of AppStreamGlib-1.0.AppStreamGlib.Store

    vfunc_app_added(app: App): void
    vfunc_app_changed(app: App): void
    vfunc_app_removed(app: App): void
    vfunc_changed(): void

    // Own signals of AppStreamGlib-1.0.AppStreamGlib.Store

    connect(sigName: "app-added", callback: Store.AppAddedSignalCallback): number
    connect_after(sigName: "app-added", callback: Store.AppAddedSignalCallback): number
    emit(sigName: "app-added", app: App, ...args: any[]): void
    connect(sigName: "app-changed", callback: Store.AppChangedSignalCallback): number
    connect_after(sigName: "app-changed", callback: Store.AppChangedSignalCallback): number
    emit(sigName: "app-changed", app: App, ...args: any[]): void
    connect(sigName: "app-removed", callback: Store.AppRemovedSignalCallback): number
    connect_after(sigName: "app-removed", callback: Store.AppRemovedSignalCallback): number
    emit(sigName: "app-removed", app: App, ...args: any[]): void
    connect(sigName: "changed", callback: Store.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Store.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Store

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Store extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Store

    static name: string
    static $gtype: GObject.GType<Store>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Store

    constructor(config?: Store.ConstructorProperties) 
    /**
     * Creates a new #AsStore.
     * @constructor 
     * @returns a #AsStore
     */
    constructor() 
    /**
     * Creates a new #AsStore.
     * @constructor 
     * @returns a #AsStore
     */
    static new(): Store
    _init(config?: Store.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

module Suggest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Suggest {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Suggest

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Suggest

    /**
     * Add a the suggest application ID.
     * @param id an application ID, e.g. `gimp.desktop`
     */
    add_id(id: string | null): void
    /**
     * Gets the suggest ids if set.
     * @returns the #GPtrArray, or %NULL
     */
    get_ids(): string[]
    /**
     * Gets the suggest kind.
     * @returns the #AsSuggestKind
     */
    get_kind(): SuggestKind
    /**
     * Sets the suggest kind.
     * @param kind the #AsSuggestKind, e.g. %AS_SUGGEST_KIND_UPSTREAM.
     */
    set_kind(kind: SuggestKind): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Suggest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Suggest extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Suggest

    static name: string
    static $gtype: GObject.GType<Suggest>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Suggest

    constructor(config?: Suggest.ConstructorProperties) 
    /**
     * Creates a new #AsSuggest.
     * @constructor 
     * @returns a #AsSuggest
     */
    constructor() 
    /**
     * Creates a new #AsSuggest.
     * @constructor 
     * @returns a #AsSuggest
     */
    static new(): Suggest
    _init(config?: Suggest.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsSuggestKind, or %AS_SUGGEST_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): SuggestKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsSuggestKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: SuggestKind): string | null
}

module Translation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Translation {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Translation

    parent_instance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Translation

    /**
     * Gets the ID for this translation.
     * @returns ID, e.g. "foobar-1.0.2"
     */
    get_id(): string | null
    /**
     * Gets the translation kind.
     * @returns the #AsTranslationKind
     */
    get_kind(): TranslationKind
    /**
     * Sets the ID for this translation.
     * @param id the URL.
     */
    set_id(id: string | null): void
    /**
     * Sets the translation kind.
     * @param kind the #AsTranslationKind, e.g. %AS_TRANSLATION_KIND_THUMBNAIL.
     */
    set_kind(kind: TranslationKind): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Translation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Translation extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Translation

    static name: string
    static $gtype: GObject.GType<Translation>

    // Constructors of AppStreamGlib-1.0.AppStreamGlib.Translation

    constructor(config?: Translation.ConstructorProperties) 
    /**
     * Creates a new #AsTranslation.
     * @constructor 
     * @returns a #AsTranslation
     */
    constructor() 
    /**
     * Creates a new #AsTranslation.
     * @constructor 
     * @returns a #AsTranslation
     */
    static new(): Translation
    _init(config?: Translation.ConstructorProperties): void
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsTranslationKind, or %AS_TRANSLATION_KIND_UNKNOWN for unknown.
     */
    static kind_from_string(kind: string | null): TranslationKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsTranslationKind.
     * @returns string version of @kind
     */
    static kind_to_string(kind: TranslationKind): string | null
}

interface AgreementClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AgreementClass

    parent_class: GObject.ObjectClass
}

abstract class AgreementClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementClass

    static name: string
}

interface AgreementSectionClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AgreementSectionClass

    parent_class: GObject.ObjectClass
}

abstract class AgreementSectionClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementSectionClass

    static name: string
}

interface AppClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AppClass

    parent_class: GObject.ObjectClass
}

abstract class AppClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AppClass

    static name: string
}

interface BundleClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.BundleClass

    parent_class: GObject.ObjectClass
}

abstract class BundleClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.BundleClass

    static name: string
}

interface ChecksumClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ChecksumClass

    parent_class: GObject.ObjectClass
}

abstract class ChecksumClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ChecksumClass

    static name: string
}

interface ContentRatingClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ContentRatingClass

    parent_class: GObject.ObjectClass
}

abstract class ContentRatingClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ContentRatingClass

    static name: string
}

interface FormatClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.FormatClass

    parent_class: GObject.ObjectClass
}

abstract class FormatClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.FormatClass

    static name: string
}

interface IconClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.IconClass

    parent_class: GObject.ObjectClass
}

abstract class IconClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.IconClass

    static name: string
}

interface ImageClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ImageClass

    parent_class: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ImageClass

    static name: string
}

interface LaunchableClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.LaunchableClass

    parent_class: GObject.ObjectClass
}

abstract class LaunchableClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.LaunchableClass

    static name: string
}

interface ProblemClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ProblemClass

    parent_class: GObject.ObjectClass
}

abstract class ProblemClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ProblemClass

    static name: string
}

interface ProvideClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ProvideClass

    parent_class: GObject.ObjectClass
}

abstract class ProvideClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ProvideClass

    static name: string
}

interface ReleaseClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ReleaseClass

    parent_class: GObject.ObjectClass
}

abstract class ReleaseClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ReleaseClass

    static name: string
}

interface RequireClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.RequireClass

    parent_class: GObject.ObjectClass
}

abstract class RequireClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.RequireClass

    static name: string
}

interface ReviewClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ReviewClass

    parent_class: GObject.ObjectClass
}

abstract class ReviewClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ReviewClass

    static name: string
}

interface ScreenshotClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ScreenshotClass

    parent_class: GObject.ObjectClass
}

abstract class ScreenshotClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ScreenshotClass

    static name: string
}

interface StoreClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.StoreClass

    parent_class: GObject.ObjectClass
    changed: (store: Store) => void
    app_added: (store: Store, app: App) => void
    app_removed: (store: Store, app: App) => void
    app_changed: (store: Store, app: App) => void
}

abstract class StoreClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.StoreClass

    static name: string
}

interface SuggestClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.SuggestClass

    parent_class: GObject.ObjectClass
}

abstract class SuggestClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.SuggestClass

    static name: string
}

interface TranslationClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.TranslationClass

    parent_class: GObject.ObjectClass
}

abstract class TranslationClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.TranslationClass

    static name: string
}

    type AppSourceKind = FormatKind
    type ImageAlphaFlags = number
    type Node = GLib.Node
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

export default AppStreamGlib;
// END