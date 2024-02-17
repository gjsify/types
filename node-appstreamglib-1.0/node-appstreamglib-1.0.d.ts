
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-appstreamglib-1.0-import.d.ts';
    
/**
 * AppStreamGlib-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';

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
 * @param idKind the string.
 * @returns a #AsIdKind or %AS_ID_KIND_UNKNOWN for unknown
 */
function idKindFromString(idKind: string): IdKind
/**
 * Converts the enumerated value to an text representation.
 * @param idKind the #AsIdKind.
 * @returns string version of @id_kind
 */
function idKindToString(idKind: IdKind): string
function infErrorQuark(): GLib.Quark
/**
 * Parses the DriverVer string into a recognisable version and timestamp;
 * @param keyfile a #GKeyFile
 * @param timestamp the returned driverver timestamp, or %NULL
 * @returns the version string, or %NULL for error.
 */
function infGetDriverVersion(keyfile: GLib.KeyFile, timestamp: number): string | null
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
function infLoadData(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags): boolean
/**
 * Repairs an .inf file and opens it as a keyfile.
 * @param keyfile a #GKeyFile
 * @param filename the .inf file to open
 * @param flags #AsInfLoadFlags, e.g. %AS_INF_LOAD_FLAG_NONE
 * @returns %TRUE for success
 */
function infLoadFile(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags): boolean
/**
 * Converts the text representation to an enumerated value.
 * @param kudoKind the string.
 * @returns a #AsKudoKind or %AS_KUDO_KIND_UNKNOWN for unknown
 */
function kudoKindFromString(kudoKind: string): KudoKind
/**
 * Converts the enumerated value to an text representation.
 * @param kudoKind the `AsKudoKind`.
 * @returns string version of @kudo_kind
 */
function kudoKindToString(kudoKind: KudoKind): string
/**
 * Converts an XML description into a printable form.
 * @param markup the text to copy.
 * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_MARKDOWN
 * @returns a newly allocated %NULL terminated string
 */
function markupConvert(markup: string, format: MarkupConvertFormat): string | null
/**
 * Converts an XML description into a printable form.
 * @param markup the text to copy.
 * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_MARKDOWN
 * @param flags the #AsMarkupConvertFlag, e.g. %AS_MARKUP_CONVERT_FLAG_IGNORE_ERRORS
 * @returns a newly allocated %NULL terminated string
 */
function markupConvertFull(markup: string, format: MarkupConvertFormat, flags: MarkupConvertFlag): string | null
/**
 * Converts an XML description into a printable form.
 * @param markup the text to copy.
 * @returns a newly allocated %NULL terminated string
 */
function markupConvertSimple(markup: string): string | null
/**
 * Imports text and converts to AppStream markup.
 * @param text the text to import.
 * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_SIMPLE
 * @returns appstream markup, or %NULL in event of an error
 */
function markupImport(text: string, format: MarkupConvertFormat): string | null
/**
 * Splits up a long line into an array of smaller strings, each being no longer
 * than `line_len`. Words are not split.
 * @param text the text to split.
 * @param lineLen the maximum length of the output line
 * @returns lines, or %NULL in event of an error
 */
function markupStrsplitWords(text: string, lineLen: number): string[]
/**
 * Validates some markup.
 * @param markup the text to validate
 * @returns %TRUE if the appstream description was valid
 */
function markupValidate(markup: string): boolean
function nodeErrorQuark(): GLib.Quark
/**
 * Gets a node attribute, e.g. "false"
 * @param node a #AsNode
 * @param key the attribute key
 * @returns string value
 */
function nodeGetAttribute(node: GLib.Node, key: string): string
/**
 * Gets a node attribute, e.g. 34
 * @param node a #AsNode
 * @param key the attribute key
 * @returns integer value, or %G_MAXINT for error
 */
function nodeGetAttributeAsInt(node: GLib.Node, key: string): number
/**
 * Gets a node attribute, e.g. 34
 * @param node a #AsNode
 * @param key the attribute key
 * @returns integer value, or %G_MAXINT for error
 */
function nodeGetAttributeAsUint(node: GLib.Node, key: string): number
/**
 * Gets the node data, e.g. "Copyright 2014 Richard Hughes"
 * @param node a #AsNode
 * @returns string value, or %NULL
 */
function nodeGetComment(node: GLib.Node): string
/**
 * Gets the node data, e.g. "paragraph text"
 * @param node a #AsNode
 * @returns string value
 */
function nodeGetData(node: GLib.Node): string
/**
 * Extracts localized values from the DOM tree
 * @param node a #AsNode
 * @param key the key to use, e.g. "copyright"
 * @returns A hash table with the locale (e.g. en_GB) as the key
 */
function nodeGetLocalized(node: GLib.Node, key: string): GLib.HashTable
/**
 * Gets the 'best' locale version of a specific data value.
 * @param node a #AsNode.
 * @param key the tag name.
 * @returns the string value, or %NULL if there was no data
 */
function nodeGetLocalizedBest(node: GLib.Node, key: string): string
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
function nodeGetLocalizedUnwrap(node: GLib.Node): GLib.HashTable
/**
 * Gets the node name, e.g. "body"
 * @param node a #AsNode
 * @returns string value
 */
function nodeGetName(node: GLib.Node): string
/**
 * Gets the node tag enum.
 * @param node a #AsNode
 * @returns #AsTag, e.g. %AS_TAG_PKGNAME
 */
function nodeGetTag(node: GLib.Node): Tag
/**
 * Inserts a hash table of data into the DOM.
 * @param parent a parent #AsNode.
 * @param name the tag name, e.g. "id".
 * @param attrKey the key to use as the attribute in the XML, e.g. "key".
 * @param hash the hash table with the key as the key to use in the XML.
 * @param insertFlags any %AsNodeInsertFlags.
 */
function nodeInsertHash(parent: GLib.Node, name: string, attrKey: string, hash: GLib.HashTable, insertFlags: NodeInsertFlags): void
/**
 * Inserts a localized key into the DOM.
 * @param parent a parent #AsNode.
 * @param name the tag name, e.g. "id".
 * @param localized the hash table of data, with the locale as the key.
 * @param insertFlags any %AsNodeInsertFlags.
 */
function nodeInsertLocalized(parent: GLib.Node, name: string, localized: GLib.HashTable, insertFlags: NodeInsertFlags): void
/**
 * Converts a node and it's children to XML.
 * @param node a #AsNode.
 * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
 * @returns a #GString
 */
function nodeToXml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String
/**
 * Deallocates all notes in the tree.
 * @param node a #AsNode.
 */
function nodeUnref(node: GLib.Node): void
/**
 * Converts the text representation to an enumerated value.
 * @param sizeKind the string.
 * @returns a #AsSizeKind or %AS_SIZE_KIND_UNKNOWN for unknown
 */
function sizeKindFromString(sizeKind: string): SizeKind
/**
 * Converts the enumerated value to an text representation.
 * @param sizeKind the #AsSizeKind.
 * @returns string version of @size_kind
 */
function sizeKindToString(sizeKind: SizeKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param tag the string.
 * @returns a %AsTag, or %AS_TAG_UNKNOWN if not known.
 */
function tagFromString(tag: string): Tag
/**
 * Converts the text representation to an enumerated value also converting
 * legacy key names.
 * @param tag the string.
 * @param flags the #AsTagFlags e.g. %AS_TAG_FLAG_USE_FALLBACKS
 * @returns a %AsTag, or %AS_TAG_UNKNOWN if not known.
 */
function tagFromStringFull(tag: string, flags: TagFlags): Tag
/**
 * Converts the enumerated value to an text representation.
 * @param tag the %AsTag value.
 * @returns string version of @tag
 */
function tagToString(tag: Tag): string
/**
 * Converts the text representation to an enumerated value.
 * @param urgencyKind the string.
 * @returns a #AsUrgencyKind or %AS_URGENCY_KIND_UNKNOWN for unknown
 */
function urgencyKindFromString(urgencyKind: string): UrgencyKind
/**
 * Converts the enumerated value to an text representation.
 * @param urgencyKind the #AsUrgencyKind.
 * @returns string version of @urgency_kind
 */
function urgencyKindToString(urgencyKind: UrgencyKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param urlKind the string.
 * @returns a #AsUrlKind or %AS_URL_KIND_UNKNOWN for unknown
 */
function urlKindFromString(urlKind: string): UrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param urlKind the `AsUrlKind`.
 * @returns string version of @url_kind
 */
function urlKindToString(urlKind: UrlKind): string
/**
 * Fixes a string to be a valid AppStream ID.
 * 
 * This function replaces any invalid chars with an underscore.
 * @param str a string to build the AppStream ID from
 * @returns a valid AppStream ID, or %NULL if @str is invalid
 */
function utilsAppstreamIdBuild(str: string): string | null
/**
 * Checks to see if a string is a valid AppStream ID. A valid AppStream ID only
 * contains alphanumeric chars, dots and dashes.
 * @param str a string
 * @returns %TRUE if the string is a valid AppStream ID
 */
function utilsAppstreamIdValid(str: string): boolean
function utilsErrorQuark(): GLib.Quark
/**
 * Finds an icon filename from a filesystem root.
 * @param destdir the destdir.
 * @param search the icon search name, e.g. "microphone.svg"
 * @returns a newly allocated %NULL terminated string
 */
function utilsFindIconFilename(destdir: string, search: string): string | null
/**
 * Finds an icon filename from a filesystem root.
 * @param destdir the destdir.
 * @param search the icon search name, e.g. "microphone.svg"
 * @param flags A #AsUtilsFindIconFlag bitfield
 * @returns a newly allocated %NULL terminated string
 */
function utilsFindIconFilenameFull(destdir: string, search: string, flags: UtilsFindIconFlag): string | null
/**
 * Returns a GUID for some data. This uses a hash and so even small
 * differences in the `data` will produce radically different return values.
 * 
 * The implementation is taken from RFC4122, Section 4.1.3; specifically
 * using a type-5 SHA-1 hash.
 * @param namespaceId A namespace ID, e.g. "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
 * @param data data to hash
 * @param dataLen length of `data`
 * @returns A new GUID, or %NULL if the namespace_id was invalid
 */
function utilsGuidFromData(namespaceId: string, data: number, dataLen: number): string | null
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
function utilsGuidFromString(str: string): string | null
/**
 * Checks the source string is a valid string GUID descriptor.
 * @param guid string to check
 * @returns %TRUE if @guid was a valid GUID, %FALSE otherwise
 */
function utilsGuidIsValid(guid: string): boolean
/**
 * Installs an AppData, MetaInfo, AppStream XML or AppStream Icon metadata file.
 * @param location the #AsUtilsLocation, e.g. %AS_UTILS_LOCATION_CACHE
 * @param filename the full path of the file to install
 * @param origin the origin to use for the installation, or %NULL
 * @param destdir the destdir to use, or %NULL
 * @returns %TRUE for success, %FALSE if error is set
 */
function utilsInstallFilename(location: UtilsLocation, filename: string, origin: string, destdir: string): boolean
/**
 * Searches the known list of blacklisted desktop IDs.
 * @param desktopId a desktop ID, e.g. "gimp.desktop"
 * @returns %TRUE if the desktop ID is blacklisted
 */
function utilsIsBlacklistedId(desktopId: string): boolean
/**
 * Searches the known list of registered category IDs.
 * @param categoryId a desktop ID, e.g. "AudioVideoEditing"
 * @returns %TRUE if the category ID is valid
 */
function utilsIsCategoryId(categoryId: string): boolean
/**
 * Searches the known list of registered environment IDs.
 * @param environmentId a desktop ID, e.g. "GNOME"
 * @returns %TRUE if the environment ID is valid
 */
function utilsIsEnvironmentId(environmentId: string): boolean
/**
 * Checks the licence string to check it being a valid licence.
 * NOTE: SPDX licences can't typically contain brackets.
 * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
 * @returns %TRUE if the license is a valid "SPDX license"
 */
function utilsIsSpdxLicense(license: string): boolean
/**
 * Searches the known list of SPDX license IDs.
 * @param licenseId a single SPDX license ID, e.g. "CC-BY-3.0"
 * @returns %TRUE if the license ID is a valid "SPDX license ID"
 */
function utilsIsSpdxLicenseId(licenseId: string): boolean
/**
 * Searches the known list of stock icons.
 * @param name an icon name
 * @returns %TRUE if the icon is a "stock icon name" and does not need to be          included in the AppStream icon tarball
 */
function utilsIsStockIconName(name: string): boolean
/**
 * Converts a non-SPDX license into an SPDX format string where possible.
 * @param license a not-quite SPDX license string, e.g. "GPLv3+"
 * @returns the best-effort SPDX license string
 */
function utilsLicenseToSpdx(license: string): string | null
/**
 * Checks the search token if it is valid. Valid tokens are at least 3 chars in
 * length, not common words like "and", and do not contain markup.
 * @param token the search token
 * @returns %TRUE is the search token was valid
 */
function utilsSearchTokenValid(token: string): boolean
/**
 * Splits up a string into tokens and returns tokens that are suitable for
 * searching. This includes taking out common words and casefolding the
 * returned search tokens.
 * @param search the search string
 * @returns Valid tokens to search for, or %NULL for error
 */
function utilsSearchTokenize(search: string): string[]
/**
 * De-tokenizes the SPDX licenses into a string.
 * @param licenseTokens license tokens, typically from as_utils_spdx_license_tokenize()
 * @returns string, or %NULL for invalid
 */
function utilsSpdxLicenseDetokenize(licenseTokens: string | null): string | null
/**
 * Tokenizes the SPDX license string (or any simarly formatted string)
 * into parts. Any licence parts of the string e.g. "LGPL-2.0+" are prefexed
 * with "`"`, the conjunctive replaced with "&" and the disjunctive replaced
 * with "|". Brackets are added as indervidual tokens and other strings are
 * appended into single tokens where possible.
 * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
 * @returns array of strings, or %NULL for invalid
 */
function utilsSpdxLicenseTokenize(license: string): string[]
/**
 * Performs multiple search and replace operations on the given string.
 * @param string The #GString to operate on
 * @param search The text to search for
 * @param replace The text to use for substitutions
 * @returns the number of replacements done, or 0 if @search is not found.
 */
function utilsStringReplace(string: GLib.String, search: string, replace: string): number
/**
 * Builds a valid unique ID using available data.
 * @param scope a #AsAppScope e.g. %AS_APP_SCOPE_SYSTEM
 * @param bundleKind System, e.g. 'package' or 'flatpak'
 * @param origin Origin, e.g. 'fedora' or 'gnome-apps-nightly'
 * @param kind #AsAppKind, e.g. %AS_APP_KIND_DESKTOP
 * @param id AppStream ID, e.g. 'gimp.desktop'
 * @param branch Branch, e.g. '3-20' or 'master'
 * @returns a unique name, or %NULL for error;
 */
function utilsUniqueIdBuild(scope: AppScope, bundleKind: BundleKind, origin: string, kind: AppKind, id: string, branch: string): string | null
/**
 * Checks two unique IDs for equality allowing globs to match.
 * @param uniqueId1 a unique ID
 * @param uniqueId2 another unique ID
 * @returns %TRUE if the ID's should be considered equal.
 */
function utilsUniqueIdEqual(uniqueId1: string, uniqueId2: string): boolean
/**
 * Converts a unique-id to a hash value.
 * 
 * This function implements the widely used DJB hash on the ID subset of the
 * unique-id string.
 * 
 * It can be passed to g_hash_table_new() as the hash_func parameter,
 * when using non-NULL strings or unique_ids as keys in a GHashTable.
 * @param uniqueId a unique ID
 * @returns a hash value corresponding to the key
 */
function utilsUniqueIdHash(uniqueId: string): number
/**
 * Checks two unique IDs for equality allowing globs to match, whilst also
 * allowing clients to whitelist sections that have to match.
 * @param uniqueId1 a unique ID
 * @param uniqueId2 another unique ID
 * @param matchFlags a #AsUniqueIdMatchFlags bitfield, e.g. %AS_UNIQUE_ID_MATCH_FLAG_ID
 * @returns %TRUE if the ID's should be considered equal.
 */
function utilsUniqueIdMatch(uniqueId1: string, uniqueId2: string, matchFlags: UniqueIdMatchFlags): boolean
/**
 * Checks if a unique ID is valid i.e. has the correct number of
 * sections.
 * @param uniqueId a unique ID
 * @returns %TRUE if the ID is valid
 */
function utilsUniqueIdValid(uniqueId: string): boolean
/**
 * Compares version numbers for sorting.
 * @param versionA the release version, e.g. 1.2.3
 * @param versionB the release version, e.g. 1.2.3.1
 * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and %G_MAXINT on error
 */
function utilsVercmp(versionA: string, versionB: string): number
/**
 * Compares version numbers for sorting.
 * @param versionA the release version, e.g. 1.2.3
 * @param versionB the release version, e.g. 1.2.3.1
 * @param flags some #AsVersionCompareFlag
 * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and %G_MAXINT on error
 */
function utilsVercmpFull(versionA: string, versionB: string, flags: VersionCompareFlag): number
/**
 * Returns a dotted decimal version string from a 16 bit number.
 * @param val A uint16le version number
 * @param flags flags used for formatting, e.g. %AS_VERSION_PARSE_FLAG_USE_TRIPLET
 * @returns A version number, e.g. "1.3"
 */
function utilsVersionFromUint16(val: number, flags: VersionParseFlag): string | null
/**
 * Returns a dotted decimal version string from a 32 bit number.
 * @param val A uint32le version number
 * @param flags flags used for formatting, e.g. %AS_VERSION_PARSE_FLAG_USE_TRIPLET
 * @returns A version number, e.g. "1.0.3"
 */
function utilsVersionFromUint32(val: number, flags: VersionParseFlag): string | null
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
function utilsVersionParse(version: string): string | null
module Agreement {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Agreement {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Agreement

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Agreement

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Agreement

    addSection(agreementSection: AgreementSection): void
    /**
     * Gets the agreement kind.
     * @returns a string, e.g. %AS_AGREEMENT_KIND_EULA
     */
    getKind(): AgreementKind
    /**
     * Gets the first section in the agreement.
     * @returns agreement section, or %NULL
     */
    getSectionDefault(): AgreementSection
    /**
     * Gets all the sections in the agreement.
     * @returns array
     */
    getSections(): AgreementSection[]
    /**
     * Gets the agreement version_id.
     * @returns a string, e.g. "1.4a", or NULL
     */
    getVersionId(): string
    /**
     * Sets the agreement kind.
     * @param kind the agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     */
    setKind(kind: AgreementKind): void
    /**
     * Sets the agreement version identifier.
     * @param versionId the agreement version ID, e.g. "1.4a"
     */
    setVersionId(versionId: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Agreement

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

class Agreement extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Agreement

    static name: string

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
    static kindFromString(value: string): AgreementKind
    /**
     * Converts the enumerated value to an text representation.
     * @param value the #AsAgreementKind.
     * @returns string version of @value
     */
    static kindToString(value: AgreementKind): string
}

module AgreementSection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AgreementSection {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    /**
     * Gets the agreement section desc.
     * @param locale the locale. e.g. "en_GB"
     * @returns a string, e.g. "GDPR", or NULL
     */
    getDescription(locale: string | null): string
    /**
     * Gets the agreement section kind.
     * @returns a string, e.g. "GDPR", or NULL
     */
    getKind(): string
    /**
     * Gets the agreement section name.
     * @param locale the locale. e.g. "en_GB"
     * @returns a string, e.g. "GDPR", or NULL
     */
    getName(locale: string | null): string
    /**
     * Sets the agreement section description.
     * @param locale the locale. e.g. "en_GB"
     * @param desc the rating desc, e.g. "GDPR"
     */
    setDescription(locale: string | null, desc: string): void
    /**
     * Sets the agreement section kind.
     * @param kind the rating kind, e.g. "GDPR"
     */
    setKind(kind: string): void
    /**
     * Sets the agreement section name.
     * @param locale the locale. e.g. "en_GB"
     * @param name the rating name, e.g. "GDPR"
     */
    setName(locale: string | null, name: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

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

class AgreementSection extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementSection

    static name: string

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

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.App

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.App

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.App

    /**
     * Adds a addon to an application.
     * @param addon a #AsApp instance.
     */
    addAddon(addon: App): void
    /**
     * Adds a agreement to an application.
     * @param agreement a #AsAgreement instance.
     */
    addAgreement(agreement: Agreement): void
    /**
     * Adds a package name to an application.
     * @param arch the package name.
     */
    addArch(arch: string): void
    /**
     * Adds a bundle to an application.
     * @param bundle a #AsBundle instance.
     */
    addBundle(bundle: Bundle): void
    /**
     * Adds a menu category to the application.
     * @param category the category.
     */
    addCategory(category: string): void
    /**
     * Adds a desktop that requires this application to be installed.
     * @param compulsoryForDesktop the desktop string, e.g. "GNOME".
     */
    addCompulsoryForDesktop(compulsoryForDesktop: string): void
    /**
     * Adds a content_rating to an application.
     * @param contentRating a #AsContentRating instance.
     */
    addContentRating(contentRating: ContentRating): void
    /**
     * Adds a parent ID to the application.
     * @param extends_ the full ID, e.g. "eclipse.desktop".
     */
    addExtends(extends_: string): void
    /**
     * Add a format the application has been built from.
     * @param format the #AsFormat.
     */
    addFormat(format: Format): void
    /**
     * Adds a icon to an application.
     * @param icon a #AsIcon instance.
     */
    addIcon(icon: Icon): void
    /**
     * Add a keyword the application should match against.
     * @param locale the locale. e.g. "en_GB"
     * @param keyword the keyword.
     */
    addKeyword(locale: string | null, keyword: string): void
    /**
     * Add a kudo the application has obtained.
     * @param kudo the kudo.
     */
    addKudo(kudo: string): void
    /**
     * Add a kudo the application has obtained.
     * @param kudoKind the #AsKudoKind.
     */
    addKudoKind(kudoKind: KudoKind): void
    /**
     * Adds a language to the application.
     * @param percentage the percentage completion of the translation, or 0 for unknown
     * @param locale the locale. e.g. "en_GB"
     */
    addLanguage(percentage: number, locale: string | null): void
    /**
     * Adds a launchable to an application.
     * @param launchable a #AsLaunchable instance.
     */
    addLaunchable(launchable: Launchable): void
    /**
     * Adds a metadata entry to the application.
     * @param key the metadata key.
     * @param value the value to store.
     */
    addMetadata(key: string, value: string | null): void
    /**
     * Adds a mimetype the application can process.
     * @param mimetype the mimetype.
     */
    addMimetype(mimetype: string): void
    /**
     * Add a permission the application has obtained.
     * @param permission the permission.
     */
    addPermission(permission: string): void
    /**
     * Adds a package name to an application.
     * @param pkgname the package name.
     */
    addPkgname(pkgname: string): void
    /**
     * Adds a provide to an application.
     * @param provide a #AsProvide instance.
     */
    addProvide(provide: Provide): void
    /**
     * Adds a specific attribute to an application.
     * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
     */
    addQuirk(quirk: AppQuirk): void
    /**
     * Adds a release to an application.
     * @param release a #AsRelease instance.
     */
    addRelease(release: Release): void
    /**
     * Adds a require to an application.
     * @param require a #AsRequire instance.
     */
    addRequire(require: Require): void
    /**
     * Adds a review to an application.
     * @param review a #AsReview instance.
     */
    addReview(review: Review): void
    /**
     * Adds a screenshot to an application.
     * @param screenshot a #AsScreenshot instance.
     */
    addScreenshot(screenshot: Screenshot): void
    /**
     * Adds a suggest to an application.
     * @param suggest a #AsSuggest instance.
     */
    addSuggest(suggest: Suggest): void
    /**
     * Adds a translation to an application.
     * @param translation a #AsTranslation instance.
     */
    addTranslation(translation: Translation): void
    /**
     * Adds some URL data to the application.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE
     * @param url the full URL.
     */
    addUrl(urlKind: UrlKind, url: string): void
    /**
     * Converts all the icons in the application to a specific kind.
     * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
     * @returns %TRUE for success
     */
    convertIcons(kind: IconKind): boolean
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
    getAddons(): App[]
    /**
     * Gets a agreement the application has defined of a specific type.
     * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     * @returns a #AsAgreement or NULL for not found
     */
    getAgreementByKind(kind: AgreementKind): Agreement
    /**
     * Gets a privacy policys the application has defined of a specific type.
     * @returns a #AsAgreement or NULL for not found
     */
    getAgreementDefault(): Agreement
    /**
     * Gets the supported architectures for the application, or an empty list
     * if all architectures are supported.
     * @returns an array
     */
    getArchitectures(): string[]
    /**
     * Gets the branch for the application.
     * @returns string, or %NULL if unset
     */
    getBranch(): string
    /**
     * Finds the default bundle.
     * @returns a #AsBundle, or %NULL
     */
    getBundleDefault(): Bundle
    /**
     * Gets any bundles the application has defined.
     * @returns an array
     */
    getBundles(): Bundle[]
    /**
     * Get the application categories.
     * @returns an array
     */
    getCategories(): string[]
    /**
     * Gets the application summary for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    getComment(locale: string | null): string
    /**
     * Gets the comments set for the application.
     * @returns hash table of comments
     */
    getComments(): GLib.HashTable
    /**
     * Returns the desktops where this application is compulsory.
     * @returns an array
     */
    getCompulsoryForDesktops(): string[]
    /**
     * Gets a content ratings the application has defined of a specific type.
     * @param kind a ratings kind, e.g. "oars-1.0"
     * @returns a #AsContentRating or NULL for not found
     */
    getContentRating(kind: string): ContentRating
    /**
     * Gets any content_ratings the application has defined.
     * @returns an array
     */
    getContentRatings(): ContentRating[]
    /**
     * Gets the application description markup for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    getDescription(locale: string | null): string
    /**
     * Gets the descriptions set for the application.
     * @returns hash table of descriptions
     */
    getDescriptions(): GLib.HashTable
    /**
     * Gets the application developer name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    getDeveloperName(locale: string | null): string
    /**
     * Gets the developer_names set for the application.
     * @returns hash table of developer_names
     */
    getDeveloperNames(): GLib.HashTable
    /**
     * Gets the IDs that are extended from the addon.
     * @returns an array
     */
    getExtends(): string[]
    /**
     * Searches the list of formats for a specific filename.
     * @param filename a filename, e.g. "/home/hughsie/dave.desktop"
     * @returns A #AsFormat, or %NULL if not found
     */
    getFormatByFilename(filename: string): Format
    /**
     * Searches the list of formats for a specific format kind.
     * @param kind a #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA
     * @returns A #AsFormat, or %NULL if not found
     */
    getFormatByKind(kind: FormatKind): Format
    /**
     * Returns the default format.
     * @returns A #AsFormat, or %NULL if not found
     */
    getFormatDefault(): Format
    /**
     * Gets any formats that make up the application.
     * @returns an array
     */
    getFormats(): string[]
    /**
     * Finds the default icon.
     * @returns a #AsIcon, or %NULL
     */
    getIconDefault(): Icon
    /**
     * Finds an icon of a specific size.
     * @param width Size in pixels
     * @param height Size in pixels
     * @returns a #AsIcon, or %NULL
     */
    getIconForSize(width: number, height: number): Icon
    /**
     * Gets the application icon path.
     * @returns string, or %NULL if unset
     */
    getIconPath(): string
    /**
     * Gets any icons the application has defined.
     * @returns an array
     */
    getIcons(): Icon[]
    /**
     * Gets the full ID value.
     * @returns the ID, e.g. "org.gnome.Software.desktop"
     */
    getId(): string
    /**
     * Returns a filename which represents the applications ID, e.g. "gimp.desktop"
     * becomes "gimp" and is used for cache directories.
     * @returns A utf8 filename
     */
    getIdFilename(): string
    /**
     * Gets the ID kind.
     * @returns enumerated value
     */
    getIdKind(): IdKind
    /**
     * Gets the full ID value, stripping any prefix.
     * @returns the ID, e.g. "org.gnome.Software.desktop"
     */
    getIdNoPrefix(): string
    /**
     * Gets any keywords the application should match against.
     * @param locale the locale. e.g. "en_GB"
     * @returns an array, or %NULL
     */
    getKeywords(locale: string | null): string[]
    /**
     * Gets the ID kind.
     * @returns enumerated value
     */
    getKind(): AppKind
    /**
     * Gets any kudos the application has obtained.
     * @returns an array
     */
    getKudos(): string[]
    /**
     * Gets the language coverage for the specific language.
     * @param locale the locale. e.g. "en_GB"
     * @returns a percentage value where 0 is unspecified, or -1 for not found
     */
    getLanguage(locale: string | null): number
    /**
     * Get a list of all languages.
     * @returns list of language values
     */
    getLanguages(): string[]
    /**
     * Searches the list of launchables for a specific launchable kind.
     * @param kind a #AsLaunchableKind, e.g. %AS_FORMAT_KIND_APPDATA
     * @returns A #AsLaunchable, or %NULL if not found
     */
    getLaunchableByKind(kind: LaunchableKind): Launchable
    /**
     * Returns the default launchable.
     * @returns A #AsLaunchable, or %NULL if not found
     */
    getLaunchableDefault(): Launchable
    /**
     * Gets all the launchables the application has.
     * @returns an array
     */
    getLaunchables(): Launchable[]
    /**
     * Gets the merge_kind of the application.
     * @returns enumerated value
     */
    getMergeKind(): AppMergeKind
    /**
     * Gets the metadata set for the application.
     * @returns hash table of metadata
     */
    getMetadata(): GLib.HashTable
    /**
     * Gets some metadata item.
     * @param key the metadata key.
     * @returns string, or %NULL if unset
     */
    getMetadataItem(key: string): string
    /**
     * Gets the application project license.
     * @returns string, or %NULL if unset
     */
    getMetadataLicense(): string
    /**
     * Gets any mimetypes the application will register.
     * @returns an array
     */
    getMimetypes(): string[]
    /**
     * Gets the application name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns string, or %NULL if unset
     */
    getName(locale: string | null): string
    /**
     * Gets the names set for the application.
     * @returns hash table of names
     */
    getNames(): GLib.HashTable
    /**
     * Gets the application origin.
     * @returns the origin string, or %NULL if unset
     */
    getOrigin(): string
    /**
     * Gets any permissions the application has obtained.
     * @returns an array
     */
    getPermissions(): string[]
    /**
     * Gets the default package name.
     * @returns string, or %NULL if unset
     */
    getPkgnameDefault(): string
    /**
     * Gets the package names (if any) for the application.
     * @returns an array
     */
    getPkgnames(): string[]
    /**
     * Gets the application priority. Larger values trump smaller values.
     * @returns priority value
     */
    getPriority(): number
    /**
     * Gets an application project group.
     * @returns string, or %NULL if unset
     */
    getProjectGroup(): string
    /**
     * Gets the application project license.
     * @returns string, or %NULL if unset
     */
    getProjectLicense(): string
    /**
     * Gets all the provides the application has.
     * @returns an array
     */
    getProvides(): Provide[]
    /**
     * Gets a specific release from the application.
     * @param version a version string
     * @returns a release, or %NULL
     */
    getRelease(version: string): Release
    /**
     * Gets a specific release from the application.
     * @param version a release version number, e.g. "1.2.3"
     * @returns a release, or %NULL
     */
    getReleaseByVersion(version: string): Release
    /**
     * Gets the default (newest) release from the application.
     * @returns a release, or %NULL
     */
    getReleaseDefault(): Release
    /**
     * Gets all the releases the application has had.
     * @returns an array
     */
    getReleases(): Release[]
    /**
     * Gets a specific requirement for the application.
     * @param kind a #AsRequireKind, e.g. %AS_REQUIRE_KIND_FIRMWARE
     * @param value a string, or NULL, e.g. `bootloader`
     * @returns A #AsRequire, or %NULL for not found
     */
    getRequireByValue(kind: RequireKind, value: string): Require
    /**
     * Gets any requires the application has defined. A requirement could be that
     * a firmware version has to be below a defined version or that another
     * application is required to be installed.
     * @returns an array
     */
    getRequires(): Require[]
    /**
     * Gets any reviews the application has defined.
     * @returns an array
     */
    getReviews(): Screenshot[]
    /**
     * Gets the scope of the application.
     * @returns enumerated value
     */
    getScope(): AppScope
    /**
     * Gets the default screenshot for the component.
     * @returns a screenshot or %NULL
     */
    getScreenshotDefault(): Screenshot
    /**
     * Gets any screenshots the application has defined.
     * @returns an array
     */
    getScreenshots(): Screenshot[]
    /**
     * Gets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @returns a #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    getSearchMatch(): number
    /**
     * Gets the default source filename the instance was populated from.
     * @returns string, or %NULL if unset
     */
    getSourceFile(): string
    /**
     * Gets the source kind, i.e. where the AsApp came from.
     * @returns enumerated value
     */
    getSourceKind(): FormatKind
    /**
     * Gets the source package name that produced the binary package.
     * Only source packages producing more than one binary package will have this
     * entry set.
     * @returns string, or %NULL if unset
     */
    getSourcePkgname(): string
    /**
     * Gets the application state.
     * @returns enumerated value
     */
    getState(): AppState
    /**
     * Gets any suggests the application has defined.
     * @returns an array
     */
    getSuggests(): Suggest[]
    /**
     * Gets any translations the application has defined.
     * @returns an array
     */
    getTranslations(): Translation[]
    /**
     * Gets the trust flags, i.e. how trusted the incoming data is.
     * @returns bitfield
     */
    getTrustFlags(): number
    /**
     * Gets the unique ID value to represent the component.
     * @returns the unique ID, e.g. `system/package/fedora/desktop/gimp.desktop/master`
     */
    getUniqueId(): string
    /**
     * Gets the application upstream update contact email.
     * @returns string, or %NULL if unset
     */
    getUpdateContact(): string
    /**
     * Gets a URL.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     * @returns string, or %NULL if unset
     */
    getUrlItem(urlKind: UrlKind): string
    /**
     * Gets the URLs set for the application.
     * @returns hash table of URLs
     */
    getUrls(): GLib.HashTable
    /**
     * Gets the list of vetos.
     * @returns A list of vetos
     */
    getVetos(): string[]
    /**
     * Searches the category list for a specific item.
     * @param category a category string, e.g. "DesktopSettings"
     * @returns %TRUE if the application has got the specified category
     */
    hasCategory(category: string): boolean
    /**
     * Searches the compulsory for desktop list for a specific item.
     * @param desktop a desktop string, e.g. "GNOME"
     * @returns %TRUE if the application is compulsory for a specific desktop
     */
    hasCompulsoryForDesktop(desktop: string): boolean
    /**
     * Searches the kudo list for a specific item.
     * @param kudo a kudo string, e.g. "SearchProvider"
     * @returns %TRUE if the application has got the specified kudo
     */
    hasKudo(kudo: string): boolean
    /**
     * Searches the kudo list for a specific item.
     * @param kudo a #AsKudoKind, e.g. %AS_KUDO_KIND_SEARCH_PROVIDER
     * @returns %TRUE if the application has got the specified kudo
     */
    hasKudoKind(kudo: KudoKind): boolean
    /**
     * Searches the permission list for a specific item.
     * @param permission a permission string, e.g. "Network"
     * @returns %TRUE if the application has got the specified permission
     */
    hasPermission(permission: string): boolean
    /**
     * Queries to see if an application has a specific attribute.
     * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
     * @returns %TRUE if the application has the attribute
     */
    hasQuirk(quirk: AppQuirk): boolean
    /**
     * Parses an AppData file and populates the application state.
     * @param data data to parse.
     * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
     * @returns %TRUE for success
     */
    parseData(data: any, flags: number): boolean
    /**
     * Parses a desktop or AppData file and populates the application state.
     * 
     * Applications that are not suitable for the store will have vetos added.
     * @param filename file to load.
     * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
     * @returns %TRUE for success
     */
    parseFile(filename: string, flags: number): boolean
    /**
     * Removed a menu category from the application.
     * @param category the category.
     */
    removeCategory(category: string): void
    /**
     * Removes a format the application has been built from.
     * @param format the #AsFormat.
     */
    removeFormat(format: Format): void
    /**
     * Remove a kudo the application has obtained.
     * @param kudo the kudo.
     */
    removeKudo(kudo: string): void
    /**
     * Removes a metadata item from the application.
     * @param key the metadata key.
     */
    removeMetadata(key: string): void
    /**
     * Removes a reason to not include the application in the metadata.
     * @param description veto string
     */
    removeVeto(description: string): void
    /**
     * Searches application data for a specific keyword.
     * @param search the search term.
     * @returns a match scrore, where 0 is no match and 100 is the best match.
     */
    searchMatches(search: string): number
    /**
     * Searches application data for all the specific keywords.
     * @param search the search terms.
     * @returns a match scrore, where 0 is no match and larger numbers are better matches. It's probably a good idea to use as_utils_search_tokenize() to populate search as very short or common keywords will return a lot of matches.
     */
    searchMatchesAll(search: string | null): number
    /**
     * Set the branch that the instance was sourced from.
     * @param branch the branch, e.g. "master" or "3-16".
     */
    setBranch(branch: string): void
    /**
     * Sets the application summary for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param comment the application summary.
     */
    setComment(locale: string | null, comment: string): void
    /**
     * Sets the application description markup for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param description the application description.
     */
    setDescription(locale: string | null, description: string): void
    /**
     * Sets the application developer name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param developerName the application developer name.
     */
    setDeveloperName(locale: string | null, developerName: string): void
    /**
     * Sets the icon path, where local icons would be found.
     * @param iconPath the local path.
     */
    setIconPath(iconPath: string): void
    /**
     * Sets a new application ID. Any invalid characters will be automatically replaced.
     * @param id the new _full_ application ID, e.g. "org.gnome.Software.desktop".
     */
    setId(id: string): void
    /**
     * Sets the application kind.
     * @param idKind the #AsAppKind.
     */
    setIdKind(idKind: IdKind): void
    /**
     * Sets the application kind.
     * @param kind the #AsAppKind.
     */
    setKind(kind: AppKind): void
    /**
     * Sets the merge kind of the application.
     * @param mergeKind the #AsAppMergeKind.
     */
    setMergeKind(mergeKind: AppMergeKind): void
    /**
     * Set the project license.
     * @param metadataLicense the project license string.
     */
    setMetadataLicense(metadataLicense: string): void
    /**
     * Sets the application name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param name the application name.
     */
    setName(locale: string | null, name: string): void
    /**
     * Sets the application origin.
     * @param origin the origin, e.g. "fedora-21"
     */
    setOrigin(origin: string): void
    /**
     * Sets the application priority, where 0 is default and positive numbers
     * are better than negative numbers.
     * @param priority the priority.
     */
    setPriority(priority: number): void
    /**
     * Set any project affiliation.
     * @param projectGroup the project group, e.g. "GNOME".
     */
    setProjectGroup(projectGroup: string): void
    /**
     * Set the project license.
     * @param projectLicense the project license string.
     */
    setProjectLicense(projectLicense: string): void
    /**
     * Sets the scope of the application.
     * @param scope the #AsAppScope.
     */
    setScope(scope: AppScope): void
    /**
     * Sets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @param searchMatch the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    setSearchMatch(searchMatch: number): void
    /**
     * Set the file that the instance was sourced from.
     * @param sourceFile the filename.
     */
    setSourceFile(sourceFile: string): void
    /**
     * Sets the source kind.
     * @param sourceKind the #AsFormatKind.
     */
    setSourceKind(sourceKind: FormatKind): void
    /**
     * Set the project license.
     * @param sourcePkgname the project license string.
     */
    setSourcePkgname(sourcePkgname: string): void
    /**
     * Sets the application state.
     * @param state the #AsAppState.
     */
    setState(state: AppState): void
    /**
     * Sets the check flags, where %AS_APP_TRUST_FLAG_COMPLETE is completely
     * trusted input.
     * @param trustFlags the #AsAppTrustFlags.
     */
    setTrustFlags(trustFlags: number): void
    /**
     * Set the project license.
     * @param updateContact the project license string.
     */
    setUpdateContact(updateContact: string): void
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
    subsumeFull(donor: App, flags: number): void
    /**
     * Exports a DOM tree to an XML file.
     * @param file a #GFile
     * @param cancellable A #GCancellable
     * @returns %TRUE for success
     */
    toFile(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    /**
     * Exports a DOM tree to an XML string.
     * @returns an XML string, or %NULL
     */
    toXml(): GLib.String
    /**
     * Validates data in the instance for style and consistency.
     * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
     * @returns A list of problems, or %NULL
     */
    validate(flags: number): Problem[]

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.App

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

class App extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.App

    static name: string

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
    static errorQuark(): GLib.Quark
    /**
     * Guesses the source kind based from the filename.
     * @param filename a file name
     * @returns A #AsFormatKind, e.g. %AS_FORMAT_KIND_APPSTREAM.
     */
    static guessSourceKind(filename: string): FormatKind
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsAppKind or %AS_APP_KIND_UNKNOWN for unknown
     */
    static kindFromString(kind: string): AppKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsAppKind.
     * @returns string version of @kind
     */
    static kindToString(kind: AppKind): string
    /**
     * Converts the text representation to an enumerated value.
     * @param mergeKind a source kind string
     * @returns A #AsAppMergeKind, e.g. %AS_APP_MERGE_KIND_REPLACE.
     */
    static mergeKindFromString(mergeKind: string): AppMergeKind
    /**
     * Converts the enumerated value to an text representation.
     * @param mergeKind the #AsAppMergeKind, e.g. %AS_APP_MERGE_KIND_REPLACE
     * @returns string version of @merge_kind, or %NULL for unknown
     */
    static mergeKindToString(mergeKind: AppMergeKind): string
    /**
     * Converts the text representation to an enumerated value.
     * @param scope a source kind string
     * @returns A #AsAppScope, e.g. %AS_APP_SCOPE_SYSTEM.
     */
    static scopeFromString(scope: string): AppScope
    /**
     * Converts the enumerated value to an text representation.
     * @param scope the #AsAppScope, e.g. %AS_APP_SCOPE_SYSTEM
     * @returns string version of @scope, or %NULL for unknown
     */
    static scopeToString(scope: AppScope): string
    /**
     * Converts the text representation to an enumerated value.
     * @param sourceKind a source kind string
     * @returns A #AsFormatKind, e.g. %AS_FORMAT_KIND_APPSTREAM.
     */
    static sourceKindFromString(sourceKind: string): FormatKind
    /**
     * Converts the enumerated value to an text representation.
     * @param sourceKind the #AsFormatKind.
     * @returns string version of @source_kind, or %NULL for unknown
     */
    static sourceKindToString(sourceKind: FormatKind): string
    /**
     * Converts the enumerated value to an text representation.
     * @param state the #AsAppState.
     * @returns string version of @state, or %NULL for unknown
     */
    static stateToString(state: AppState): string
}

module Bundle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Bundle {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Bundle

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Bundle

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Bundle

    /**
     * Gets the ID for this bundle.
     * @returns ID, e.g. "foobar-1.0.2"
     */
    getId(): string
    /**
     * Gets the bundle kind.
     * @returns the #AsBundleKind
     */
    getKind(): BundleKind
    /**
     * Gets the runtime required for this bundle.
     * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
     */
    getRuntime(): string
    /**
     * Gets the SDK for this bundle.
     * @returns SDK identifier, e.g. "org.gnome.Sdk/i386/master"
     */
    getSdk(): string
    /**
     * Sets the ID for this bundle.
     * @param id the URL.
     */
    setId(id: string): void
    /**
     * Sets the bundle kind.
     * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_FLATPAK.
     */
    setKind(kind: BundleKind): void
    /**
     * Sets the runtime required for this bundle.
     * @param runtime the URL.
     */
    setRuntime(runtime: string): void
    /**
     * Sets the SDK for this bundle.
     * @param sdk the URL.
     */
    setSdk(sdk: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Bundle

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

class Bundle extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Bundle

    static name: string

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
    static kindFromString(kind: string): BundleKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsBundleKind.
     * @returns string version of @kind
     */
    static kindToString(kind: BundleKind): string
}

module Checksum {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Checksum {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Checksum

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Checksum

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Checksum

    /**
     * Gets the full qualified URL for the checksum, usually pointing at some mirror.
     * @returns URL
     */
    getFilename(): string
    /**
     * Gets the checksum kind.
     * @returns the #GChecksumType
     */
    getKind(): GLib.ChecksumType
    /**
     * Gets the checksum target.
     * @returns the #GChecksumType
     */
    getTarget(): ChecksumTarget
    /**
     * Gets the suggested value the checksum, including file extension.
     * @returns filename
     */
    getValue(): string
    /**
     * Sets the filename used to generate the checksum.
     * @param filename the URL.
     */
    setFilename(filename: string): void
    /**
     * Sets the checksum kind.
     * @param kind the #GChecksumType, e.g. %G_CHECKSUM_SHA1.
     */
    setKind(kind: GLib.ChecksumType): void
    /**
     * Sets the checksum target.
     * @param target the #GChecksumType, e.g. %AS_CHECKSUM_TARGET_CONTAINER.
     */
    setTarget(target: ChecksumTarget): void
    /**
     * Sets the checksum value filename.
     * @param value the new filename value.
     */
    setValue(value: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Checksum

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

class Checksum extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Checksum

    static name: string

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
    static targetFromString(target: string): ChecksumTarget
    /**
     * Converts the enumerated value to an text representation.
     * @param target the #AsChecksumTarget.
     * @returns string version of @target, or %NULL for unknown
     */
    static targetToString(target: ChecksumTarget): string
}

module ContentRating {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ContentRating {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    /**
     * Adds an attribute value to the content rating.
     * @param id a content rating ID, e.g. `money-gambling`.
     * @param value a #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_MODERATE.
     */
    addAttribute(id: string, value: ContentRatingValue): void
    /**
     * Gets the content_rating kind.
     * @returns a string, e.g. "oars-1.0", or NULL
     */
    getKind(): string
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
    getMinimumAge(): number
    /**
     * Gets the set of ratings IDs which are present in this `content_rating`. An
     * example of a ratings ID is `violence-bloodshed`.
     * 
     * The IDs are returned in lexicographical order.
     * @returns %NULL-terminated    array of ratings IDs; each ratings ID is owned by the #AsContentRating and    must not be freed, but the container must be freed with g_free()
     */
    getRatingIds(): string[]
    /**
     * Gets the set value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
     * @returns the #AsContentRatingValue, or %AS_CONTENT_RATING_VALUE_UNKNOWN
     */
    getValue(id: string): ContentRatingValue
    /**
     * Sets the content rating kind.
     * @param kind the rating kind, e.g. "oars-1.0"
     */
    setKind(kind: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.ContentRating

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

class ContentRating extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ContentRating

    static name: string

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
    static attributeFromCsmAge(id: string, age: number): ContentRatingValue
    /**
     * Get a human-readable description of what content would be expected to
     * require the content rating attribute given by `id` and `value`.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     * @returns a human-readable description of @id and @value
     */
    static attributeGetDescription(id: string, value: ContentRatingValue): string
    /**
     * Gets the Common Sense Media approved age for a specific rating level.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     * @returns The age in years, or 0 for no details.
     */
    static attributeToCsmAge(id: string, value: ContentRatingValue): number
    /**
     * Returns a list of all the valid OARS content rating attribute IDs as could
     * be passed to as_content_rating_add_attribute() or
     * as_content_rating_attribute_to_csm_age().
     * @returns a %NULL-terminated    array of IDs, to be freed with g_free() (the element values are owned by    libappstream-glib and must not be freed)
     */
    static getAllRatingIds(): string[]
    /**
     * Format `age` as a human-readable string in the given rating `system`. This is
     * the way to present system-specific strings in a UI.
     * @param system an #AsContentRatingSystem
     * @param age a CSM age to format
     * @returns a newly allocated formatted version of    @age, or %NULL if the given @system has no representation for @age
     */
    static systemFormatAge(system: ContentRatingSystem, age: number): string | null
    /**
     * Determine the most appropriate #AsContentRatingSystem for the given `locale`.
     * Content rating systems are selected by territory. If no content rating system
     * seems suitable, %AS_CONTENT_RATING_SYSTEM_IARC is returned.
     * @param locale a locale, in the format described in `man 3 setlocale`
     * @returns the most relevant #AsContentRatingSystem
     */
    static systemFromLocale(locale: string): ContentRatingSystem
    /**
     * Get the CSM ages corresponding to the entries returned by
     * as_content_rating_system_get_formatted_ages() for this `system`.
     * @param system an #AsContentRatingSystem
     * @returns an array of CSM ages
     */
    static systemGetCsmAges(system: ContentRatingSystem): number[]
    /**
     * Get an array of all the possible return values of
     * as_content_rating_system_format_age() for the given `system`. The array is
     * sorted with youngest CSM age first.
     * @param system an #AsContentRatingSystem
     * @returns %NULL-terminated array of human-readable age strings
     */
    static systemGetFormattedAges(system: ContentRatingSystem): string[]
    /**
     * Get a human-readable string to identify `system`. %NULL will be returned for
     * %AS_CONTENT_RATING_SYSTEM_UNKNOWN.
     * @param system an #AsContentRatingSystem
     * @returns a human-readable string for @system, or %NULL if unknown
     */
    static systemToString(system: ContentRatingSystem): string | null
    /**
     * Converts the text representation to an enumerated value.
     * @param value the string.
     * @returns a #AsContentRatingValue or %AS_CONTENT_RATING_VALUE_UNKNOWN for unknown
     */
    static valueFromString(value: string): ContentRatingValue
    /**
     * Converts the enumerated value to an text representation.
     * @param value the #AsContentRatingValue.
     * @returns string version of @value
     */
    static valueToString(value: ContentRatingValue): string
}

module Format {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Format {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Format

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Format

    parentInstance: GObject.Object

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
    getFilename(): string
    /**
     * Gets the format kind.
     * @returns the #AsFormatKind
     */
    getKind(): FormatKind
    /**
     * Sets the filename required for this format.
     * @param filename the URL.
     */
    setFilename(filename: string): void
    /**
     * Sets the format kind.
     * @param kind the #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA.
     */
    setKind(kind: FormatKind): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Format

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

class Format extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Format

    static name: string

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
    static guessKind(filename: string): FormatKind
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsFormatKind, or %AS_FORMAT_KIND_UNKNOWN for unknown.
     */
    static kindFromString(kind: string): FormatKind
    static kindToString(kind: FormatKind): string
}

module Icon {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Icon {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Icon

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Icon

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Icon

    /**
     * Converts the icon from one kind to another.
     * @param kind a %AsIconKind, e.g. #AS_ICON_KIND_EMBEDDED
     * @returns %TRUE for success
     */
    convertToKind(kind: IconKind): boolean
    /**
     * Gets the absolute path on disk of the icon.
     * NOTE: This is only set for icons of type %AS_ICON_KIND_LOCAL
     * @returns the absolute filename on disk
     */
    getFilename(): string
    /**
     * Gets the icon height.
     * @returns height in pixels
     */
    getHeight(): number
    /**
     * Gets the icon kind.
     * @returns the #AsIconKind
     */
    getKind(): IconKind
    /**
     * Gets the name of the icon, e.g. "epiphany.png"
     * @returns the basename of the icon
     */
    getName(): string
    /**
     * Gets the icon pixbuf if set.
     * @returns the #GdkPixbuf, or %NULL
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets the suggested prefix of the icon.
     * @returns filename
     */
    getPrefix(): string
    /**
     * Gets the icon scale.
     * @returns scale factor
     */
    getScale(): number
    /**
     * Gets the full qualified URL for the icon, usually pointing at some mirror.
     * NOTE: This is only set for icons of type %AS_ICON_KIND_REMOTE
     * @returns the fully qualified URL
     */
    getUrl(): string
    /**
     * Gets the icon width.
     * @returns width in pixels
     */
    getWidth(): number
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
    setFilename(filename: string): void
    /**
     * Sets the icon height.
     * @param height the height in pixels.
     */
    setHeight(height: number): void
    /**
     * Sets the icon kind.
     * @param kind the #AsIconKind, e.g. %AS_ICON_KIND_STOCK.
     */
    setKind(kind: IconKind): void
    /**
     * Sets the basename to use for the icon.
     * @param name the icon name, e.g. "gimp.png"
     */
    setName(name: string): void
    /**
     * Sets the icon pixbuf.
     * @param pixbuf the #GdkPixbuf, or %NULL
     */
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the icon prefix filename.
     * @param prefix the new filename prefix.
     */
    setPrefix(prefix: string): void
    /**
     * Sets the icon scale.
     * @param scale the scale as a factor.
     */
    setScale(scale: number): void
    /**
     * Sets the icon URL.
     * @param url the new icon URL.
     */
    setUrl(url: string): void
    /**
     * Sets the icon width.
     * @param width the width in pixels.
     */
    setWidth(width: number): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Icon

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

class Icon extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Icon

    static name: string

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
    static errorQuark(): GLib.Quark
    /**
     * Converts the text representation to an enumerated value.
     * @param iconKind the string.
     * @returns a #AsIconKind or %AS_ICON_KIND_UNKNOWN for unknown
     */
    static kindFromString(iconKind: string): IconKind
    /**
     * Converts the enumerated value to an text representation.
     * @param iconKind the `AsIconKind`.
     * @returns string version of @icon_kind
     */
    static kindToString(iconKind: IconKind): string
}

module Image {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Image {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Image

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Image

    parentInstance: GObject.Object

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
    getBasename(): string
    /**
     * Gets the image height.
     * @returns height in pixels
     */
    getHeight(): number
    /**
     * Gets the image kind.
     * @returns the #AsImageKind
     */
    getKind(): ImageKind
    /**
     * Gets the locale of the image.
     * @returns locale, or %NULL
     */
    getLocale(): string
    /**
     * Gets the string representation of the pixbuf hash value.
     * @returns string representing the MD5 sum, or %NULL if unset
     */
    getMd5(): string
    /**
     * Gets the image pixbuf if set.
     * @returns the #GdkPixbuf, or %NULL
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets the full qualified URL for the image, usually pointing at some mirror.
     * @returns URL
     */
    getUrl(): string
    /**
     * Gets the image width.
     * @returns width in pixels
     */
    getWidth(): number
    /**
     * Reads a pixbuf from a file.
     * 
     * NOTE: This function also sets the suggested filename which can be retrieved
     * using as_image_get_basename(). This can be overridden if required.
     * @param filename filename to read from
     * @returns %TRUE for success
     */
    loadFilename(filename: string): boolean
    /**
     * Reads an image from a file.
     * @param filename filename to read from
     * @param destSize The size of the constructed pixbuf, or 0 for the native size
     * @param srcSizeMin The smallest source size allowed, or 0 for none
     * @param flags a #AsImageLoadFlags, e.g. %AS_IMAGE_LOAD_FLAG_NONE
     * @returns %TRUE for success
     */
    loadFilenameFull(filename: string, destSize: number, srcSizeMin: number, flags: ImageLoadFlags): boolean
    /**
     * Saves a pixbuf to a file.
     * @param filename filename to write to
     * @param width target width, or 0 for default
     * @param height target height, or 0 for default
     * @param flags some #AsImageSaveFlags values, e.g. %AS_IMAGE_SAVE_FLAG_PAD_16_9
     * @returns %TRUE for success
     */
    saveFilename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean
    /**
     * Resamples a pixbuf to a specific size.
     * @param width target width, or 0 for default
     * @param height target height, or 0 for default
     * @param flags some #AsImageSaveFlags values, e.g. %AS_IMAGE_SAVE_FLAG_PAD_16_9
     * @returns A #GdkPixbuf of the specified size
     */
    savePixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf
    /**
     * Sets the image basename filename.
     * @param basename the new filename basename.
     */
    setBasename(basename: string): void
    /**
     * Sets the image height.
     * @param height the height in pixels.
     */
    setHeight(height: number): void
    /**
     * Sets the image kind.
     * @param kind the #AsImageKind, e.g. %AS_IMAGE_KIND_THUMBNAIL.
     */
    setKind(kind: ImageKind): void
    /**
     * Sets the image locale.
     * @param locale the new image locale, e.g. "en_GB" or %NULL.
     */
    setLocale(locale: string): void
    /**
     * Sets the image pixbuf.
     * @param pixbuf the #GdkPixbuf, or %NULL
     */
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the fully-qualified mirror URL to use for the image.
     * @param url the URL.
     */
    setUrl(url: string): void
    /**
     * Sets the image width.
     * @param width the width in pixels.
     */
    setWidth(width: number): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Image

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

class Image extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Image

    static name: string

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
    static kindFromString(kind: string): ImageKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsImageKind.
     * @returns string version of @kind
     */
    static kindToString(kind: ImageKind): string
}

module Launchable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Launchable {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Launchable

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Launchable

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Launchable

    /**
     * Gets the launchable kind.
     * @returns the #AsLaunchableKind
     */
    getKind(): LaunchableKind
    /**
     * Gets the value to use for the launchable.
     * @returns usually a desktop ID, e.g. "gimp.desktop"
     */
    getValue(): string
    /**
     * Sets the launchable kind.
     * @param kind the #AsLaunchableKind, e.g. %AS_LAUNCHABLE_KIND_DESKTOP_ID.
     */
    setKind(kind: LaunchableKind): void
    /**
     * Sets the fully-qualified mirror URL to use for the launchable.
     * @param value the URL.
     */
    setValue(value: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Launchable

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

class Launchable extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Launchable

    static name: string

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
    static kindFromString(kind: string): LaunchableKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsLaunchableKind.
     * @returns string version of @kind
     */
    static kindToString(kind: LaunchableKind): string
}

module Problem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Problem {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Problem

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Problem

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Problem

    /**
     * Gets the problem kind.
     * @returns a #AsProblemKind, e.g. %AS_PROBLEM_KIND_TAG_MISSING
     */
    getKind(): ProblemKind
    /**
     * Gets the line number of the problem if known.
     * @returns a line number, where 0 is unknown
     */
    getLineNumber(): number
    /**
     * Gets the specific message for the problem.
     * @returns the message
     */
    getMessage(): string
    /**
     * Sets the problem kind.
     * @param kind the #AsProblemKind.
     */
    setKind(kind: ProblemKind): void
    /**
     * Adds an line_number to the problem.
     * @param lineNumber a #guint instance.
     */
    setLineNumber(lineNumber: number): void
    /**
     * Sets a message on the problem.
     * @param message the message text.
     */
    setMessage(message: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Problem

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

class Problem extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Problem

    static name: string

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
    static kindToString(kind: ProblemKind): string
}

module Provide {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Provide {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Provide

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Provide

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Provide

    /**
     * Gets the provide kind.
     * @returns the #AsProvideKind
     */
    getKind(): ProvideKind
    /**
     * Gets the full qualified URL for the provide, usually pointing at some mirror.
     * @returns URL
     */
    getValue(): string
    /**
     * Sets the provide kind.
     * @param kind the #AsProvideKind, e.g. %AS_PROVIDE_KIND_LIBRARY.
     */
    setKind(kind: ProvideKind): void
    /**
     * Sets the fully-qualified mirror URL to use for the provide.
     * @param value the URL.
     */
    setValue(value: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Provide

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

class Provide extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Provide

    static name: string

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
    static kindFromString(kind: string): ProvideKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsProvideKind.
     * @returns string version of @kind
     */
    static kindToString(kind: ProvideKind): string
}

module Release {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Release {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Release

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Release

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Release

    /**
     * Adds a release checksum.
     * @param checksum a #AsChecksum instance.
     */
    addChecksum(checksum: Checksum): void
    /**
     * Adds a release location.
     * @param location the location string.
     */
    addLocation(location: string): void
    /**
     * Gets the release blob, which is typically firmware file data.
     * @param filename a filename
     * @returns a #GBytes, or %NULL for not set
     */
    getBlob(filename: string): any
    /**
     * Gets the checksum for a release.
     * @param fn a file basename
     * @returns an #AsChecksum, or %NULL for not found
     */
    getChecksumByFn(fn: string): Checksum
    /**
     * Gets the checksum for a release.
     * @param target a #AsChecksumTarget, e.g. %AS_CHECKSUM_TARGET_CONTAINER
     * @returns an #AsChecksum, or %NULL for not found
     */
    getChecksumByTarget(target: ChecksumTarget): Checksum
    /**
     * Gets the release checksums.
     * @returns list of checksums
     */
    getChecksums(): Checksum[]
    /**
     * Gets the release description markup for a given locale.
     * @param locale the locale. e.g. "en_GB"
     * @returns markup, or %NULL for not set or invalid
     */
    getDescription(locale: string | null): string
    /**
     * Gets the typical install duration.
     * @returns install duration in seconds, or 0 for unset
     */
    getInstallDuration(): number
    /**
     * Gets the type of the release.
     * @returns enumerated value, e.g. %AS_RELEASE_KIND_STABLE
     */
    getKind(): ReleaseKind
    /**
     * Gets the default release location, typically a URL.
     * @returns string, or %NULL for not set or invalid
     */
    getLocationDefault(): string
    /**
     * Gets the release locations, typically URLs.
     * @returns list of locations
     */
    getLocations(): string[]
    /**
     * Gets the release size.
     * @param kind a #AsSizeKind, e.g. #AS_SIZE_KIND_DOWNLOAD
     * @returns The size in bytes, or 0 for unknown.
     */
    getSize(kind: SizeKind): number
    /**
     * Gets the release state.
     * @returns enumberated value, or %AS_RELEASE_STATE_UNKNOWN for not set or invalid
     */
    getState(): ReleaseState
    /**
     * Gets the release timestamp.
     * @returns timestamp, or 0 for unset
     */
    getTimestamp(): number
    /**
     * Gets the release urgency.
     * @returns enumberated value, or %AS_URGENCY_KIND_UNKNOWN for not set or invalid
     */
    getUrgency(): UrgencyKind
    /**
     * Gets a URL.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     * @returns string, or %NULL if unset
     */
    getUrl(urlKind: UrlKind): string
    /**
     * Gets the release version.
     * @returns string, or %NULL for not set or invalid
     */
    getVersion(): string
    /**
     * Sets a release blob, which is typically firmware data or a detached signature.
     * 
     * NOTE: This is not stored in the XML file, and is only available in-memory.
     * @param filename a filename
     * @param blob the #GBytes data blob
     */
    setBlob(filename: string, blob: any): void
    /**
     * Sets the description release markup.
     * @param locale the locale. e.g. "en_GB"
     * @param description the description markup.
     */
    setDescription(locale: string | null, description: string): void
    /**
     * Sets the typical duration of the install.
     * @param installDuration the install duration in seconds
     */
    setInstallDuration(installDuration: number): void
    /**
     * Sets the release kind.
     * @param kind the #AsReleaseKind
     */
    setKind(kind: ReleaseKind): void
    /**
     * Sets the release size.
     * @param kind a #AsSizeKind, e.g. #AS_SIZE_KIND_DOWNLOAD
     * @param size a size in bytes, or 0 for unknown
     */
    setSize(kind: SizeKind, size: number): void
    /**
     * Sets the release state.
     * @param state the release state, e.g. %AS_RELEASE_STATE_INSTALLED
     */
    setState(state: ReleaseState): void
    /**
     * Sets the release timestamp.
     * @param timestamp the timestamp value.
     */
    setTimestamp(timestamp: number): void
    /**
     * Sets the release urgency.
     * @param urgency the release urgency, e.g. %AS_URGENCY_KIND_CRITICAL
     */
    setUrgency(urgency: UrgencyKind): void
    /**
     * Adds some URL data to the application.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_DETAILS
     * @param url the full URL.
     */
    setUrl(urlKind: UrlKind, url: string): void
    /**
     * Sets the release version.
     * @param version the version string.
     */
    setVersion(version: string): void
    /**
     * Compares two release.
     * @param rel2 a #AsRelease instance.
     * @returns -1 if rel1 > rel2, +1 if rel1 < rel2, 0 otherwise
     */
    vercmp(rel2: Release): number

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Release

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

class Release extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Release

    static name: string

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
     * @param kindStr the string.
     * @returns an #AsReleaseKind or %AS_RELEASE_KIND_UNKNOWN for unknown
     */
    static kindFromString(kindStr: string): ReleaseKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsReleaseKind.
     * @returns string version of @kind
     */
    static kindToString(kind: ReleaseKind): string
    /**
     * Converts the text representation to an enumerated value.
     * @param state a string
     * @returns A #AsReleaseState, e.g. %AS_RELEASE_STATE_INSTALLED.
     */
    static stateFromString(state: string): ReleaseState
    /**
     * Converts the enumerated value to an text representation.
     * @param state the #AsReleaseState, e.g. %AS_RELEASE_STATE_INSTALLED
     * @returns string version of @state, or %NULL for unknown
     */
    static stateToString(state: ReleaseState): string
}

module Require {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Require {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Require

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Require

    parentInstance: GObject.Object

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
    getCompare(): RequireCompare
    /**
     * Gets the require kind.
     * @returns the #AsRequireKind
     */
    getKind(): RequireKind
    /**
     * Gets the require value if set.
     * @returns the value, e.g. "bootloader"
     */
    getValue(): string
    /**
     * Gets the require version if set.
     * @returns the version, e.g. "0.1.2"
     */
    getVersion(): string
    /**
     * Sets the require version comparison type.
     * @param compare the #AsRequireKind, e.g. %AS_REQUIRE_KIND_ID.
     */
    setCompare(compare: RequireCompare): void
    /**
     * Sets the require kind.
     * @param kind the #AsRequireKind, e.g. %AS_REQUIRE_KIND_ID.
     */
    setKind(kind: RequireKind): void
    /**
     * Sets the require value.
     * @param value an require version, e.g. `firmware`
     */
    setValue(value: string): void
    /**
     * Sets the require version.
     * @param version an version number, e.g. `0.1.2`
     */
    setVersion(version: string): void
    /**
     * Compares the version number of the requirement with a predicate.
     * @param version a version number, e.g. `0.1.3`
     * @returns %TRUE if the predicate was true
     */
    versionCompare(version: string): boolean

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Require

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

class Require extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Require

    static name: string

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
    static compareFromString(compare: string): RequireCompare
    /**
     * Converts the enumerated value to an text representation.
     * @param compare the #AsRequireCompare.
     * @returns string version of @compare
     */
    static compareToString(compare: RequireCompare): string
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a #AsRequireKind, or %AS_REQUIRE_KIND_UNKNOWN for unknown.
     */
    static kindFromString(kind: string): RequireKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsRequireKind.
     * @returns string version of @kind
     */
    static kindToString(kind: RequireKind): string
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
    reviewerId: string | null
    reviewerName: string | null
    summary: string | null
    version: string | null
    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Review

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Review

    /**
     * Adds flags to an existing review without replacing the other flags.
     * @param flags a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
     */
    addFlags(flags: ReviewFlags): void
    /**
     * Adds metadata to the review object.
     * It is left for the the plugin to use this method as required, but a
     * typical use would be to store some secure authentication token.
     * @param key a string
     * @param value a string
     */
    addMetadata(key: string, value: string): void
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
    getDate(): GLib.DateTime
    /**
     * Gets the multi-line review text that forms the body of the review.
     * @returns the string, or %NULL
     */
    getDescription(): string
    /**
     * Gets any flags set on the review, for example if the user has already
     * voted on the review or if the user wrote the review themselves.
     * @returns a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
     */
    getFlags(): ReviewFlags
    /**
     * Gets the review id.
     * @returns the review identifier, e.g. "deadbeef"
     */
    getId(): string
    /**
     * Gets the locale for the review.
     * @returns the string, or %NULL
     */
    getLocale(): string
    /**
     * Gets some metadata from a review object.
     * It is left for the the plugin to use this method as required, but a
     * typical use would be to retrieve some secure authentication token.
     * @param key a string
     * @returns A string value, or %NULL for not found
     */
    getMetadataItem(key: string): string
    /**
     * This allows the UI to sort reviews into the correct order.
     * Higher numbers indicate a more important or relevant review.
     * @returns the review priority, or 0 for unset.
     */
    getPriority(): number
    /**
     * Gets the star rating of the review, where 100 is 5 stars.
     * @returns integer as a percentage, or 0 for unset
     */
    getRating(): number
    /**
     * Gets the name of the reviewer.
     * @returns the reviewer ID, e.g. "deadbeef", or %NULL
     */
    getReviewerId(): string
    /**
     * Gets the name of the reviewer.
     * @returns the reviewer name, e.g. "David Smith", or %NULL
     */
    getReviewerName(): string
    /**
     * Gets the review summary.
     * @returns the one-line summary, e.g. "Awesome application"
     */
    getSummary(): string
    /**
     * Gets the version string for the application being reviewed..
     * @returns the version string, e.g. "0.1.2", or %NULL for unset
     */
    getVersion(): string
    /**
     * Sets the date the review was originally submitted.
     * @param date a #GDateTime, or %NULL
     */
    setDate(date: GLib.DateTime): void
    /**
     * Sets the multi-line review text that forms the body of the review.
     * @param description multi-line description
     */
    setDescription(description: string): void
    /**
     * Gets any flags set on the review, for example if the user has already
     * voted on the review or if the user wrote the review themselves.
     * @param flags a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
     */
    setFlags(flags: ReviewFlags): void
    /**
     * Sets the review identifier that is unique to each review.
     * @param id review identifier, e.g. "deadbeef"
     */
    setId(id: string): void
    /**
     * Sets the locale for the review.
     * @param locale locale, e.g. "en_GB"
     */
    setLocale(locale: string): void
    /**
     * Sets the priority for the review, where positive numbers indicate
     * a better review for the specific user.
     * @param priority a priority value
     */
    setPriority(priority: number): void
    /**
     * Sets the star rating of the review, where 100 is 5 stars..
     * @param rating a integer as a percentage, or 0 for unset
     */
    setRating(rating: number): void
    /**
     * Sets the name of the reviewer, which can be left unset.
     * @param reviewerId the reviewer ID, e.g. "deadbeef"
     */
    setReviewerId(reviewerId: string): void
    /**
     * Sets the name of the reviewer, which can be left unset.
     * @param reviewerName the reviewer name, e.g. "David Smith"
     */
    setReviewerName(reviewerName: string): void
    /**
     * Sets the one-line summary that may be displayed in bold.
     * @param summary a one-line summary, e.g. "Awesome application"
     */
    setSummary(summary: string): void
    /**
     * Sets the version string for the application being reviewed.
     * @param version a version string, e.g. "0.1.2"
     */
    setVersion(version: string): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Review

    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::rating", callback: (...args: any[]) => void): number
    on(sigName: "notify::rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rating", ...args: any[]): void
    connect(sigName: "notify::reviewer-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::reviewer-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reviewer-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reviewer-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reviewer-id", ...args: any[]): void
    connect(sigName: "notify::reviewer-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::reviewer-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reviewer-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reviewer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reviewer-name", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
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

class Review extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Review

    static name: string

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

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    /**
     * Adds an image to the screenshot.
     * @param image a #AsImage instance.
     */
    addImage(image: Image): void
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
    getCaption(locale: string | null): string
    /**
     * Gets the AsImage closest to the target size. The #AsImage may not actually
     * be the requested size, and the application may have to pad / rescale the
     * image to make it fit.
     * @param width target width
     * @param height target height
     * @returns an #AsImage, or %NULL
     */
    getImage(width: number, height: number): Image
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
    getImageForLocale(locale: string | null, width: number, height: number): Image
    /**
     * Gets the images included in the screenshot of all sizes and locales.
     * @returns an array
     */
    getImages(): Image[]
    /**
     * Returns all images of all sizes that are compatible with a specific locale.
     * @param locale a locale, e.g. `en_GB`
     * @returns an array
     */
    getImagesForLocale(locale: string): Image[]
    /**
     * Gets the screenshot kind.
     * @returns a #AsScreenshotKind
     */
    getKind(): ScreenshotKind
    /**
     * Gets the screenshot priority.
     * @returns a priority value
     */
    getPriority(): number
    /**
     * Gets the source image (the unscaled version) for the screenshot
     * @returns an #AsImage, or %NULL
     */
    getSource(): Image
    /**
     * Sets a caption on the screenshot for a specific locale.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     * @param caption the caption text.
     */
    setCaption(locale: string | null, caption: string): void
    /**
     * Sets the screenshot kind.
     * @param kind the #AsScreenshotKind.
     */
    setKind(kind: ScreenshotKind): void
    /**
     * Sets the screenshot priority. Higher numbers are better.
     * @param priority the priority value.
     */
    setPriority(priority: number): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Screenshot

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

class Screenshot extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Screenshot

    static name: string

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
    static kindFromString(kind: string): ScreenshotKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsScreenshotKind.
     * @returns string version of @kind
     */
    static kindToString(kind: ScreenshotKind): string
}

module Store {

    // Signal callback interfaces

    /**
     * Signal callback interface for `app-added`
     */
    interface AppAddedSignalCallback {
        (app: App): void
    }

    /**
     * Signal callback interface for `app-changed`
     */
    interface AppChangedSignalCallback {
        (app: App): void
    }

    /**
     * Signal callback interface for `app-removed`
     */
    interface AppRemovedSignalCallback {
        (app: App): void
    }

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Store {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Store

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Store

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Store

    /**
     * Adds an application to the store. If a lower priority application has already
     * been added then this new application will replace it.
     * 
     * Additionally only applications where the kind is known will be added.
     * @param app a #AsApp instance.
     */
    addApp(app: App): void
    /**
     * Adds several applications to the store.
     * 
     * Additionally only applications where the kind is known will be added.
     * @param apps an array of apps
     */
    addApps(apps: App[]): void
    /**
     * Adds a filter to the store so that only components of this type are
     * loaded into the store. This may be useful if the client is only interested
     * in certain types of component, or not interested in loading components
     * it cannot process.
     * 
     * If no filter is set then all types of components are loaded.
     * @param kind a #AsAppKind, e.g. %AS_APP_KIND_FIRMWARE
     */
    addFilter(kind: AppKind): void
    /**
     * Adds a metadata index key.
     * 
     * NOTE: if applications are removed *all* the indexes will be invalid and
     * will have to be re-added.
     * @param key the metadata key.
     */
    addMetadataIndex(key: string): void
    /**
     * Converts all the icons in the store to a specific kind.
     * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
     * @returns %TRUE for success
     */
    convertIcons(kind: IconKind): boolean
    /**
     * Gets an array of all the valid applications in the store.
     * @returns an array
     */
    dupApps(): App[]
    /**
     * Gets an array of all the merge applications that match a specific ID.
     * @param id the application full ID.
     * @returns an array
     */
    dupAppsByIdMerge(id: string): App[]
    /**
     * Parses an appstream store presented as an archive. This is typically
     * a .cab file containing firmware files.
     * @param bytes a #GBytes.
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    fromBytes(bytes: any, cancellable: Gio.Cancellable | null): boolean
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
     * @param iconRoot the icon path, or %NULL for the default (unused)
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    fromFile(file: Gio.File, iconRoot: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Parses AppStream XML file and adds any valid applications to the store.
     * 
     * If the root node does not have a 'origin' attribute, then the method
     * as_store_set_origin() should be called *before* this function if cached
     * icons are required.
     * @param data XML data
     * @param iconRoot the icon path, or %NULL for the default.
     * @returns %TRUE for success
     */
    fromXml(data: string, iconRoot: string | null): boolean
    /**
     * Gets the flags used for adding applications to the store.
     * @returns the #AsStoreAddFlags, or 0 if unset
     */
    getAddFlags(): number
    /**
     * Gets the AppStream API version.
     * @returns the API version
     */
    getApiVersion(): number
    /**
     * Finds an application in the store by ID.
     * If more than one application exists matching the specific ID,
     * (for instance when using %AS_STORE_ADD_FLAG_USE_UNIQUE_ID) then the
     * first item that was added is returned.
     * @param id the application full ID.
     * @returns a #AsApp or %NULL
     */
    getAppById(id: string): App
    /**
     * Finds an application in the store ignoring the prefix type.
     * @param id the application full ID.
     * @returns a #AsApp or %NULL
     */
    getAppByIdIgnorePrefix(id: string): App
    /**
     * Finds an application in the store by either by the current desktop ID
     * or a desktop ID that it has used previously. This allows upstream software
     * to change their ID (e.g. from cheese.desktop to org.gnome.Cheese.desktop)
     * without us duplicating entries in the software center.
     * @param id the application full ID.
     * @returns a #AsApp or %NULL
     */
    getAppByIdWithFallbacks(id: string): App
    /**
     * Finds an application in the store that provides a specific launchable.
     * @param kind the #AsLaunchableKind
     * @param value the provide value, e.g. "gimp.desktop"
     * @returns a #AsApp or %NULL
     */
    getAppByLaunchable(kind: LaunchableKind, value: string): App
    /**
     * Finds an application in the store by package name.
     * @param pkgname the package name.
     * @returns a #AsApp or %NULL
     */
    getAppByPkgname(pkgname: string): App
    /**
     * Finds an application in the store by any of the possible package names.
     * @param pkgnames the package names to find.
     * @returns a #AsApp or %NULL
     */
    getAppByPkgnames(pkgnames: string | null): App
    /**
     * Finds an application in the store by something that it provides.
     * @param kind the #AsProvideKind
     * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
     * @returns a #AsApp or %NULL
     */
    getAppByProvide(kind: ProvideKind, value: string): App
    /**
     * Finds an application in the store by matching the unique ID.
     * @param uniqueId the application unique ID, e.g.      `user/flatpak/gnome-apps-nightly/app/gimp.desktop/master`
     * @param searchFlags the search flags, e.g. %AS_STORE_SEARCH_FLAG_USE_WILDCARDS
     * @returns a #AsApp or %NULL
     */
    getAppByUniqueId(uniqueId: string, searchFlags: number): App
    /**
     * Gets an array of all the valid applications in the store.
     * @returns an array
     */
    getApps(): App[]
    /**
     * Gets an array of all the applications that match a specific ID,
     * ignoring the prefix type.
     * @param id the application full ID.
     * @returns an array
     */
    getAppsById(id: string): App[]
    /**
     * Gets an array of all the merge applications that match a specific ID.
     * @param id the application full ID.
     * @returns an array
     */
    getAppsByIdMerge(id: string): App[]
    /**
     * Gets an array of all the applications that match a specific metadata element.
     * @param key metadata key
     * @param value metadata value
     * @returns an array
     */
    getAppsByMetadata(key: string, value: string): App[]
    /**
     * Finds any applications in the store by something that they provides.
     * @param kind the #AsProvideKind
     * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
     * @returns an array of applications
     */
    getAppsByProvide(kind: ProvideKind, value: string): App[]
    /**
     * Gets the metadata builder identifier, which is used to work out if old
     * metadata is compatible with this builder.
     * @returns the builder_id string, or %NULL if unset
     */
    getBuilderId(): string
    /**
     * Gets the destdir, which is used to prefix usr.
     * @returns the destdir path, or %NULL if unset
     */
    getDestdir(): string
    /**
     * Gets the metadata origin, which is used to locate icons.
     * @returns the origin string, or %NULL if unset
     */
    getOrigin(): string
    /**
     * Gets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @returns a #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    getSearchMatch(): number
    /**
     * Gets the size of the store after deduplication and prioritization has
     * taken place.
     * @returns the number of usable applications in the store
     */
    getSize(): number
    /**
     * Gets the AppStream API version.
     * @returns the API version
     */
    getVersion(): string
    /**
     * Gets the flags used for adding files to the store.
     * @returns the #AsStoreWatchFlags, or 0 if unset
     */
    getWatchFlags(): number
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
    loadAsync(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieve the result of as_store_load_async().
     * @param result A #GAsyncResult
     * @returns %TRUE for success
     */
    loadFinish(result: Gio.AsyncResult): boolean
    /**
     * Loads the store from a specific path.
     * @param path A path to load
     * @param cancellable a #GCancellable.
     * @returns %TRUE for success
     */
    loadPath(path: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously loads the store from a specific path.
     * @param path A path to load
     * @param cancellable a #GCancellable.
     * @param callback A #GAsyncReadyCallback
     */
    loadPathAsync(path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieve the result of as_store_load_path_async().
     * @param result A #GAsyncResult
     * @returns %TRUE for success
     */
    loadPathFinish(result: Gio.AsyncResult): boolean
    /**
     * Populates the token cache for all applications in the store. This allows
     * all the search keywords for all applications in the store to be
     * pre-processed at one time in multiple threads rather than on demand.
     * 
     * Note: Calling as_app_search_matches() automatically generates the search
     * cache for the #AsApp object if it has not already been generated.
     */
    loadSearchCache(): void
    /**
     * Removes all applications from the store.
     */
    removeAll(): void
    /**
     * Removes an application from the store if it exists.
     * @param app a #AsApp instance.
     */
    removeApp(app: App): void
    /**
     * Removes an application from the store if it exists.
     * @param id an application id
     */
    removeAppById(id: string): void
    /**
     * Removes any applications from the store if they have any vetos.
     */
    removeAppsWithVeto(): void
    /**
     * Removed a filter from the store so that components of this type are no longer
     * loaded into the store. This may be useful if the client is only interested
     * in certain types of component.
     * 
     * If all filters are removed then all types of components are loaded.
     * @param kind a #AsAppKind, e.g. %AS_APP_KIND_FIRMWARE
     */
    removeFilter(kind: AppKind): void
    /**
     * Sets the flags used when adding applications to the store.
     * 
     * NOTE: Using %AS_STORE_ADD_FLAG_PREFER_LOCAL may be a privacy risk depending on
     * your level of paranoia, and should not be used by default.
     * @param addFlags the #AsStoreAddFlags, e.g. %AS_STORE_ADD_FLAG_NONE
     */
    setAddFlags(addFlags: number): void
    /**
     * Sets the AppStream API version.
     * @param apiVersion the API version
     */
    setApiVersion(apiVersion: number): void
    /**
     * Sets the metadata builder identifier, which is used to work out if old
     * metadata can be used.
     * @param builderId the builder_id, e.g. "appstream-glib:1"
     */
    setBuilderId(builderId: string): void
    /**
     * Sets the destdir, which is used to prefix usr.
     * @param destdir the destdir, e.g. "/tmp"
     */
    setDestdir(destdir: string): void
    /**
     * Sets the metadata origin, which is used to locate icons.
     * @param origin the origin, e.g. "fedora-21"
     */
    setOrigin(origin: string): void
    /**
     * Sets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @param searchMatch the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    setSearchMatch(searchMatch: number): void
    /**
     * Sets the AppStream API version.
     * @param apiVersion the API version
     */
    setVersion(apiVersion: string): void
    /**
     * Sets the flags used when adding files to the store.
     * @param watchFlags the #AsStoreWatchFlags, e.g. %AS_STORE_WATCH_FLAG_NONE
     */
    setWatchFlags(watchFlags: number): void
    /**
     * Outputs an optionally compressed XML file of all the applications in the store.
     * @param file file
     * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
     * @param cancellable A #GCancellable, or %NULL
     * @returns A #GString
     */
    toFile(file: Gio.File, flags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Outputs an XML representation of all the applications in the store.
     * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
     * @returns A #GString
     */
    toXml(flags: number): GLib.String
    /**
     * Validates information in the store for data applicable to the defined
     * metadata version.
     * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
     * @returns A list of problems, or %NULL
     */
    validate(flags: number): Problem[]

    // Own virtual methods of AppStreamGlib-1.0.AppStreamGlib.Store

    appAdded(app: App): void
    appChanged(app: App): void
    appRemoved(app: App): void
    changed(): void

    // Own signals of AppStreamGlib-1.0.AppStreamGlib.Store

    connect(sigName: "app-added", callback: Store.AppAddedSignalCallback): number
    on(sigName: "app-added", callback: Store.AppAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-added", callback: Store.AppAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-added", callback: Store.AppAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "app-added", ...args: any[]): void
    connect(sigName: "app-changed", callback: Store.AppChangedSignalCallback): number
    on(sigName: "app-changed", callback: Store.AppChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-changed", callback: Store.AppChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-changed", callback: Store.AppChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "app-changed", ...args: any[]): void
    connect(sigName: "app-removed", callback: Store.AppRemovedSignalCallback): number
    on(sigName: "app-removed", callback: Store.AppRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-removed", callback: Store.AppRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-removed", callback: Store.AppRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "app-removed", ...args: any[]): void
    connect(sigName: "changed", callback: Store.ChangedSignalCallback): number
    on(sigName: "changed", callback: Store.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Store.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Store.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Store

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

class Store extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Store

    static name: string

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
    static errorQuark(): GLib.Quark
}

module Suggest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Suggest {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Suggest

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Suggest

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Suggest

    /**
     * Add a the suggest application ID.
     * @param id an application ID, e.g. `gimp.desktop`
     */
    addId(id: string): void
    /**
     * Gets the suggest ids if set.
     * @returns the #GPtrArray, or %NULL
     */
    getIds(): string[]
    /**
     * Gets the suggest kind.
     * @returns the #AsSuggestKind
     */
    getKind(): SuggestKind
    /**
     * Sets the suggest kind.
     * @param kind the #AsSuggestKind, e.g. %AS_SUGGEST_KIND_UPSTREAM.
     */
    setKind(kind: SuggestKind): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Suggest

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

class Suggest extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Suggest

    static name: string

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
    static kindFromString(kind: string): SuggestKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsSuggestKind.
     * @returns string version of @kind
     */
    static kindToString(kind: SuggestKind): string
}

module Translation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Translation {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Translation

    __gtype__: number

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.Translation

    parentInstance: GObject.Object

    // Owm methods of AppStreamGlib-1.0.AppStreamGlib.Translation

    /**
     * Gets the ID for this translation.
     * @returns ID, e.g. "foobar-1.0.2"
     */
    getId(): string
    /**
     * Gets the translation kind.
     * @returns the #AsTranslationKind
     */
    getKind(): TranslationKind
    /**
     * Sets the ID for this translation.
     * @param id the URL.
     */
    setId(id: string): void
    /**
     * Sets the translation kind.
     * @param kind the #AsTranslationKind, e.g. %AS_TRANSLATION_KIND_THUMBNAIL.
     */
    setKind(kind: TranslationKind): void

    // Class property signals of AppStreamGlib-1.0.AppStreamGlib.Translation

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

class Translation extends GObject.Object {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.Translation

    static name: string

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
    static kindFromString(kind: string): TranslationKind
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the #AsTranslationKind.
     * @returns string version of @kind
     */
    static kindToString(kind: TranslationKind): string
}

interface AgreementClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AgreementClass

    parentClass: GObject.ObjectClass
}

abstract class AgreementClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementClass

    static name: string
}

interface AgreementSectionClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AgreementSectionClass

    parentClass: GObject.ObjectClass
}

abstract class AgreementSectionClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AgreementSectionClass

    static name: string
}

interface AppClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.AppClass

    parentClass: GObject.ObjectClass
}

abstract class AppClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.AppClass

    static name: string
}

interface BundleClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.BundleClass

    parentClass: GObject.ObjectClass
}

abstract class BundleClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.BundleClass

    static name: string
}

interface ChecksumClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ChecksumClass

    parentClass: GObject.ObjectClass
}

abstract class ChecksumClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ChecksumClass

    static name: string
}

interface ContentRatingClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ContentRatingClass

    parentClass: GObject.ObjectClass
}

abstract class ContentRatingClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ContentRatingClass

    static name: string
}

interface FormatClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.FormatClass

    parentClass: GObject.ObjectClass
}

abstract class FormatClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.FormatClass

    static name: string
}

interface IconClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.IconClass

    parentClass: GObject.ObjectClass
}

abstract class IconClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.IconClass

    static name: string
}

interface ImageClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ImageClass

    parentClass: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ImageClass

    static name: string
}

interface LaunchableClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.LaunchableClass

    parentClass: GObject.ObjectClass
}

abstract class LaunchableClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.LaunchableClass

    static name: string
}

interface ProblemClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ProblemClass

    parentClass: GObject.ObjectClass
}

abstract class ProblemClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ProblemClass

    static name: string
}

interface ProvideClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ProvideClass

    parentClass: GObject.ObjectClass
}

abstract class ProvideClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ProvideClass

    static name: string
}

interface ReleaseClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ReleaseClass

    parentClass: GObject.ObjectClass
}

abstract class ReleaseClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ReleaseClass

    static name: string
}

interface RequireClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.RequireClass

    parentClass: GObject.ObjectClass
}

abstract class RequireClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.RequireClass

    static name: string
}

interface ReviewClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ReviewClass

    parentClass: GObject.ObjectClass
}

abstract class ReviewClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ReviewClass

    static name: string
}

interface ScreenshotClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.ScreenshotClass

    parentClass: GObject.ObjectClass
}

abstract class ScreenshotClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.ScreenshotClass

    static name: string
}

interface StoreClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.StoreClass

    parentClass: GObject.ObjectClass
    changed: (store: Store) => void
    appAdded: (store: Store, app: App) => void
    appRemoved: (store: Store, app: App) => void
    appChanged: (store: Store, app: App) => void
}

abstract class StoreClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.StoreClass

    static name: string
}

interface SuggestClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.SuggestClass

    parentClass: GObject.ObjectClass
}

abstract class SuggestClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.SuggestClass

    static name: string
}

interface TranslationClass {

    // Own fields of AppStreamGlib-1.0.AppStreamGlib.TranslationClass

    parentClass: GObject.ObjectClass
}

abstract class TranslationClass {

    // Own properties of AppStreamGlib-1.0.AppStreamGlib.TranslationClass

    static name: string
}

    type AppSourceKind = FormatKind
    type ImageAlphaFlags = number
    type Node = GLib.Node
}

export default AppStreamGlib;
// END