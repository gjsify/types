
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-appstream-1.0-import.d.ts';
    
/**
 * AppStream-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace AppStream {

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
 * The artifact type.
 */
enum ArtifactKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * The artifact describes software sources.
     */
    SOURCE,
    /**
     * The artifact describes a binary distribution of the component.
     */
    BINARY,
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
     * A native package (currently not used)
     */
    PACKAGE,
    /**
     * A Limba bundle
     */
    LIMBA,
    /**
     * A Flatpak bundle
     */
    FLATPAK,
    /**
     * An AppImageKit bundle
     */
    APPIMAGE,
    /**
     * A Snap/Snappy bundle
     */
    SNAP,
    /**
     * A (maybe compressed) tarball.
     */
    TARBALL,
    /**
     * Cabinet firmware deployment
     */
    CABINET,
}
/**
 * Result of a check operation.
 */
enum CheckResult {
    /**
     * The check failed.
     */
    ERROR,
    /**
     * The outcome could not be determined.
     */
    UNKNOWN,
    /**
     * False/No
     */
    FALSE,
    /**
     * True/Yes
     */
    TRUE,
}
/**
 * Checksums supported by #AsRelease
 */
enum ChecksumKind {
    /**
     * No checksum
     */
    NONE,
    /**
     * SHA1 checksum
     */
    SHA1,
    /**
     * SHA256 checksum
     */
    SHA256,
    /**
     * BLAKE2b checksum
     */
    BLAKE2B,
    /**
     * BLAKE2s checksum
     */
    BLAKE2S,
}
/**
 * A branding color type.
 */
enum ColorKind {
    /**
     * Color type invalid or not known
     */
    UNKNOWN,
    /**
     * Primary accent color
     */
    PRIMARY,
}
/**
 * A color scheme type.
 */
enum ColorSchemeKind {
    /**
     * Color scheme invalid or not known
     */
    UNKNOWN,
    /**
     * A light color scheme
     */
    LIGHT,
    /**
     * A dark color scheme
     */
    DARK,
}
/**
 * The type of an #AsComponent.
 */
enum ComponentKind {
    /**
     * Type invalid or not known
     */
    UNKNOWN,
    /**
     * A generic (= without specialized type) component
     */
    GENERIC,
    /**
     * An application with a .desktop-file
     */
    DESKTOP_APP,
    /**
     * A console application
     */
    CONSOLE_APP,
    /**
     * A web application
     */
    WEB_APP,
    /**
     * An extension of existing software, which does not run standalone
     */
    ADDON,
    /**
     * A font
     */
    FONT,
    /**
     * A multimedia codec
     */
    CODEC,
    /**
     * An input-method provider
     */
    INPUT_METHOD,
    /**
     * Firmware
     */
    FIRMWARE,
    /**
     * A driver
     */
    DRIVER,
    /**
     * Software localization (usually l10n resources)
     */
    LOCALIZATION,
    /**
     * A system service launched by the init system
     */
    SERVICE,
    /**
     * A remote software or data source
     */
    REPOSITORY,
    /**
     * A computer operating system
     */
    OPERATING_SYSTEM,
    /**
     * An icon theme following the XDG specification
     */
    ICON_THEME,
    /**
     * An application runtime platform
     */
    RUNTIME,
}
/**
 * Scope of the #AsComponent (system-wide or user-scope)
 */
enum ComponentScope {
    /**
     * Unknown scope
     */
    UNKNOWN,
    /**
     * System scope
     */
    SYSTEM,
    /**
     * User scope
     */
    USER,
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
 * Kind of an input method for users to control software
 */
enum ControlKind {
    /**
     * Unknown kind
     */
    UNKNOWN,
    /**
     * Mouse/cursors/other pointing device
     */
    POINTING,
    /**
     * Keyboard input
     */
    KEYBOARD,
    /**
     * Console / command-line interface
     */
    CONSOLE,
    /**
     * Touch input
     */
    TOUCH,
    /**
     * Gamepad input (any game controller with wheels/buttons/joysticks)
     */
    GAMEPAD,
    /**
     * Control via voice recognition/activation
     */
    VOICE,
    /**
     * Computer vision / visual object and sign detection
     */
    VISION,
    /**
     * Input via a television remote
     */
    TV_REMOTE,
    /**
     * Graphics tablet input
     */
    TABLET,
}
/**
 * A rough estimate of how large a given display length is.
 */
enum DisplayLengthKind {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * Very small display
     */
    XSMALL,
    /**
     * Small display
     */
    SMALL,
    /**
     * Medium display
     */
    MEDIUM,
    /**
     * Large display
     */
    LARGE,
    /**
     * Very large display
     */
    XLARGE,
}
/**
 * Side a display_length requirement is for.
 */
enum DisplaySideKind {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * Shortest side of the display rectangle.
     */
    SHORTEST,
    /**
     * Longest side of the display rectangle.
     */
    LONGEST,
}
/**
 * Format of the AppStream metadata.
 */
enum FormatKind {
    /**
     * Unknown metadata format.
     */
    UNKNOWN,
    /**
     * AppStream XML metadata.
     */
    XML,
    /**
     * AppStream YAML (DEP-11) metadata.
     */
    YAML,
    /**
     * XDG Desktop Entry data.
     */
    DESKTOP_ENTRY,
}
/**
 * There are a few differences between AppStream's metainfo files (shipped by upstream projects)
 * and the catalog metadata (shipped by distributors).
 * The data source kind indicates which style we should process.
 * Usually you do not want to set this explicitly.
 */
enum FormatStyle {
    /**
     * The format style is unknown.
     */
    UNKNOWN,
    /**
     * Parse AppStream upstream metadata (metainfo files)
     */
    METAINFO,
    /**
     * Parse AppStream metadata catalog (shipped by software distributors)
     */
    CATALOG,
}
/**
 * Format version / API level of the AppStream metadata.
 */
enum FormatVersion {
    /**
     * 0.6
     */
    V0_6,
    /**
     * 0.7
     */
    V0_7,
    /**
     * 0.8
     */
    V0_8,
    /**
     * 0.9
     */
    V0_9,
    /**
     * 0.10
     */
    V0_10,
    /**
     * 0.11
     */
    V0_11,
    /**
     * 0.12
     */
    V0_12,
    /**
     * 0.13
     */
    V0_13,
    /**
     * 0.14
     */
    V0_14,
    /**
     * 0.15
     */
    V0_15,
    /**
     * 0.16
     */
    V0_16,
    /**
     * Unknown
     */
    UNKNOWN,
}
/**
 * The icon type.
 */
enum IconKind {
    /**
     * Unknown icon kind
     */
    UNKNOWN,
    /**
     * Icon in the internal caches
     */
    CACHED,
    /**
     * Stock icon name
     */
    STOCK,
    /**
     * Local icon name
     */
    LOCAL,
    /**
     * Remote icon URL
     */
    REMOTE,
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
 * Different internet connectivity requirements or recommendations for an
 * application.
 */
enum InternetKind {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * Always requires/recommends internet
     */
    ALWAYS,
    /**
     * Application is offline-only
     */
    OFFLINE_ONLY,
    /**
     * Requires/Recommends internet on first run only
     */
    FIRST_RUN,
}
/**
 * Checksums supported by #AsRelease
 */
enum IssueKind {
    /**
     * Unknown issue type
     */
    UNKNOWN,
    /**
     * Generic issue type
     */
    GENERIC,
    /**
     * Common Vulnerabilities and Exposures issue
     */
    CVE,
}
/**
 * The severity of an issue found by #AsValidator
 */
enum IssueSeverity {
    UNKNOWN,
    /**
     * There is a serious, fatal error in your metadata
     */
    ERROR,
    /**
     * Something metadata issue which should be fixed as soon as possible.
     */
    WARNING,
    /**
     * Non-essential information on how to improve metadata, no immediate action needed.
     */
    INFO,
    /**
     * Pedantic information about ways to improve the data, but could also be ignored.
     */
    PEDANTIC,
}
/**
 * Type of launch system the entries belong to.
 */
enum LaunchableKind {
    /**
     * Unknown kind
     */
    UNKNOWN,
    /**
     * Launch by desktop-id
     */
    DESKTOP_ID,
    /**
     * A systemd/SysV-init service name
     */
    SERVICE,
    /**
     * A Cockpit manifest / package name
     */
    COCKPIT_MANIFEST,
    /**
     * A web HTTPS URL to launch a web application from
     */
    URL,
}
/**
 * Defines how #AsComponent data should be merged if the component is
 * set for merge.
 */
enum MergeKind {
    /**
     * No merge is happening.
     */
    NONE,
    /**
     * Merge replacing data of target.
     */
    REPLACE,
    /**
     * Merge appending data to target.
     */
    APPEND,
    /**
     * Remove the entire component if it matches.
     */
    REMOVE_COMPONENT,
}
/**
 * A metadata processing error.
 */
enum MetadataError {
    /**
     * Generic failure.
     */
    FAILED,
    /**
     * Unable to parse the metadata file.
     */
    PARSE,
    /**
     * Expected catalog metadata but got metainfo metadata, or vice versa.
     */
    FORMAT_UNEXPECTED,
    /**
     * We expected a component in the pool, but couldn't find one.
     */
    NO_COMPONENT,
    /**
     * A essential value is missing in the source document.
     */
    VALUE_MISSING,
}
/**
 * The flags used when installing and removing metadata files.
 */
enum MetadataLocation {
    /**
     * Installed by the vendor, shared
     */
    SHARED,
    /**
     * Installed as metadata into /var/lib, shared
     */
    STATE,
    /**
     * Installed as metadata into /var/cache, shared
     */
    CACHE,
    /**
     * Installed for the current user
     */
    USER,
}
/**
 * A metadata pool error.
 */
enum PoolError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * We do not have write-access to the cache target location.
     */
    TARGET_NOT_WRITABLE,
    /**
     * The pool was loaded, but we had to ignore some metadata.
     */
    INCOMPLETE,
    /**
     * An AppStream-ID collision occured (a component with that ID already existed in the pool)
     */
    COLLISION,
    /**
     * Some issue with an old on-disk cache occured.
     */
    OLD_CACHE,
}
/**
 * Type of the public interface components can provide.
 */
enum ProvidedKind {
    /**
     * Unknown kind
     */
    UNKNOWN,
    /**
     * A shared library
     */
    LIBRARY,
    /**
     * A binary installed into a directory in PATH
     */
    BINARY,
    /**
     * Provides a handler for a mimetype
     */
    MEDIATYPE,
    /**
     * A font
     */
    FONT,
    /**
     * A modalias
     */
    MODALIAS,
    /**
     * A Python2 module
     */
    PYTHON_2,
    /**
     * A Python3 module
     */
    PYTHON,
    /**
     * A DBus service name on the system bus.
     */
    DBUS_SYSTEM,
    /**
     * A DBus service name on the user/session bus.
     */
    DBUS_USER,
    /**
     * Firmware flashed at runtime.
     */
    FIRMWARE_RUNTIME,
    /**
     * Firmware flashed permanently to the device.
     */
    FIRMWARE_FLASHED,
    /**
     * An AppStream component
     */
    ID,
}
/**
 * The relational comparison type.
 */
enum RelationCompare {
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
}
/**
 * The error type.
 */
enum RelationError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * A metadata value was bad.
     */
    BAD_VALUE,
    /**
     * Some check was not (yet) implemented.
     */
    NOT_IMPLEMENTED,
}
/**
 * Type of the item an #AsRelation is for.
 */
enum RelationItemKind {
    /**
     * Unknown kind
     */
    UNKNOWN,
    /**
     * A component ID
     */
    ID,
    /**
     * A hardware modalias
     */
    MODALIAS,
    /**
     * An operating system kernel (like Linux)
     */
    KERNEL,
    /**
     * A system RAM requirement
     */
    MEMORY,
    /**
     * A device firmware requirement (used by fwupd)
     */
    FIRMWARE,
    /**
     * An input method for users to control software
     */
    CONTROL,
    /**
     * Display edge length
     */
    DISPLAY_LENGTH,
    /**
     * A Computer Hardware ID (CHID) to depend on system hardware
     */
    HARDWARE,
    /**
     * Internet connectivity (Since: 0.15.5)
     */
    INTERNET,
}
/**
 * Type of a component's relation to other items.
 */
enum RelationKind {
    /**
     * Unknown kind
     */
    UNKNOWN,
    /**
     * The referenced item is required by the component
     */
    REQUIRES,
    /**
     * The referenced item is recommended
     */
    RECOMMENDS,
    /**
     * The referenced item is supported
     */
    SUPPORTS,
}
/**
 * The release kind.
 */
enum ReleaseKind {
    /**
     * Unknown release type
     */
    UNKNOWN,
    /**
     * A stable release for end-users
     */
    STABLE,
    /**
     * A development release or pre-release for testing
     */
    DEVELOPMENT,
}
/**
 * `AS_RELEASE_URL_KIND_UNKNOWN`		Unknown release web URL type
 * The release URL kinds.
 */
enum ReleaseUrlKind {
    UNKNOWN,
    /**
     * Weblink to detailed release notes.
     */
    DETAILS,
}
/**
 * The kind of a releases block.
 */
enum ReleasesKind {
    /**
     * Unknown releases type
     */
    UNKNOWN,
    /**
     * Release info is embedded in metainfo file
     */
    EMBEDDED,
    /**
     * Release info is split to a separate file
     */
    EXTERNAL,
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
     * The primary screenshot to show by default
     */
    DEFAULT,
    /**
     * Optional screenshot
     */
    EXTRA,
}
/**
 * The media kind contained in this screenshot.
 */
enum ScreenshotMediaKind {
    /**
     * Media kind is unknown
     */
    UNKNOWN,
    /**
     * The screenshot contains images
     */
    IMAGE,
    /**
     * The screenshot contains videos
     */
    VIDEO,
}
/**
 * The artifact size kind.
 */
enum SizeKind {
    /**
     * Unknown size
     */
    UNKNOWN,
    /**
     * Size of download of component
     */
    DOWNLOAD,
    /**
     * Size of installed component
     */
    INSTALLED,
}
/**
 * The suggested type.
 */
enum SuggestedKind {
    /**
     * Unknown suggested kind
     */
    UNKNOWN,
    /**
     * Suggestions provided by the upstream project.
     */
    UPSTREAM,
    /**
     * Suggestions provided by automatic heuristics.
     */
    HEURISTIC,
}
/**
 * The error type.
 */
enum SystemInfoError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * Information was not found.
     */
    NOT_FOUND,
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
     * Gettext translation domain
     */
    GETTEXT,
    /**
     * Qt translation domain
     */
    QT,
}
/**
 * The urgency of an #AsRelease
 */
enum UrgencyKind {
    /**
     * Urgency is unknown or not set
     */
    UNKNOWN,
    /**
     * Low urgency
     */
    LOW,
    /**
     * Medium urgency
     */
    MEDIUM,
    /**
     * High urgency
     */
    HIGH,
    /**
     * Critical urgency
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
     * Project homepage
     */
    HOMEPAGE,
    /**
     * Bugtracker
     */
    BUGTRACKER,
    /**
     * FAQ page
     */
    FAQ,
    /**
     * Help manual
     */
    HELP,
    /**
     * Page with information about how to donate to the project
     */
    DONATION,
    /**
     * Page with instructions on how to translate the project / submit translations.
     */
    TRANSLATE,
    /**
     * Contact the developers
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
}
/**
 * The error type.
 */
enum ValidatorError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * The issue override was not accepted.
     */
    OVERRIDE_INVALID,
    /**
     * The filename was invalid.
     */
    INVALID_FILENAME,
}
/**
 * Supported video codecs.
 */
enum VideoCodecKind {
    /**
     * Unknown video codec
     */
    UNKNOWN,
    /**
     * The VP9 video codec
     */
    VP9,
    /**
     * The AV1 video codec
     */
    AV1,
}
/**
 * Supported video codecs.
 */
enum VideoContainerKind {
    /**
     * Unknown video container
     */
    UNKNOWN,
    /**
     * The Matroska video (MKV) container
     */
    MKV,
    /**
     * The WebM video container
     */
    WEBM,
}
/**
 * Flags on how caching should be used.
 * @bitfield 
 */
enum CacheFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Create an user-specific metadata cache.
     */
    USE_USER,
    /**
     * Use and - if possible - update the system metadata cache.
     */
    USE_SYSTEM,
    /**
     * Don't clear the cache when opening it.
     */
    NO_CLEAR,
    /**
     * Refresh the system cache that is shared between applications.
     */
    REFRESH_SYSTEM,
}
/**
 * The flags used when matching unique IDs.
 * @bitfield 
 */
enum DataIdMatchFlags {
    /**
     * No flags set
     */
    NONE,
    /**
     * Scope, e.g. a #AsComponentScope
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
     * Component AppStream ID
     */
    ID,
    /**
     * Branch
     */
    BRANCH,
}
/**
 * Influence certain aspects of how AppStream metadata is parsed.
 * @bitfield 
 */
enum ParseFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Do not process the media_baseurl document property.
     */
    IGNORE_MEDIABASEURL,
}
/**
 * Flags controlling the metadata pool behavior.
 * @bitfield 
 */
enum PoolFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Load AppStream catalog metadata from OS locations.
     */
    LOAD_OS_CATALOG,
    /**
     * Load MetaInfo data from OS locations.
     */
    LOAD_OS_METAINFO,
    /**
     * Load components from desktop-entry files in OS locations.
     */
    LOAD_OS_DESKTOP_FILES,
    /**
     * Load AppStream catalog metadata from Flatpak.
     */
    LOAD_FLATPAK,
    /**
     * Load fresh data even if an up-o-date cache is available.
     */
    IGNORE_CACHE_AGE,
    /**
     * Always resolve addons for returned components.
     */
    RESOLVE_ADDONS,
    /**
     * Prefer local metainfo data over the system-provided catalog data. Useful for debugging.
     */
    PREFER_OS_METAINFO,
    /**
     * Monitor registered directories for changes, and auto-reload metadata if necessary.
     */
    MONITOR,
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
 * The token match kind, which we want to be exactly 16 bits for storage
 * reasons.
 * @bitfield 
 */
enum SearchTokenMatch {
    /**
     * No token matching
     */
    NONE,
    /**
     * Use the component mediatypes
     */
    MEDIATYPE,
    /**
     * Use the component package name
     */
    PKGNAME,
    /**
     * Use the app origin
     */
    ORIGIN,
    /**
     * Use the component description
     */
    DESCRIPTION,
    SUMMARY,
    /**
     * Use the component keyword
     */
    KEYWORD,
    /**
     * Use the component name
     */
    NAME,
    /**
     * Use the component ID
     */
    ID,
}
/**
 * Set how values assigned to an #AsComponent should be treated when
 * they are set or retrieved.
 * @bitfield 
 */
enum ValueFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Check for duplicates when adding items to list values.
     */
    DUPLICATE_CHECK,
    /**
     * Don't fall back to C when retrieving translated values.
     */
    NO_TRANSLATION_FALLBACK,
}
/**
 * The flags used when matching unique IDs.
 * @bitfield 
 */
enum VercmpFlags {
    /**
     * No flags set
     */
    NONE,
    /**
     * Ignore epoch part of a version string.
     */
    IGNORE_EPOCH,
}
const IMAGE_LARGE_HEIGHT: number
const IMAGE_LARGE_WIDTH: number
const IMAGE_NORMAL_HEIGHT: number
const IMAGE_NORMAL_WIDTH: number
const IMAGE_THUMBNAIL_HEIGHT: number
const IMAGE_THUMBNAIL_WIDTH: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
/**
 * Converts the text representation to an enumerated value.
 * @param value the string.
 * @returns a #AsAgreementKind or %AS_AGREEMENT_KIND_UNKNOWN for unknown
 */
function agreementKindFromString(value: string): AgreementKind
/**
 * Converts the enumerated value to an text representation.
 * @param value the #AsAgreementKind.
 * @returns string version of @value
 */
function agreementKindToString(value: AgreementKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 * @returns a #AsArtifactKind, or %AS_ARTIFACT_KIND_UNKNOWN for unknown.
 */
function artifactKindFromString(kind: string): ArtifactKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsArtifactKind.
 * @returns string version of @kind
 */
function artifactKindToString(kind: ArtifactKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param bundleStr the string.
 * @returns a #AsBundleKind or %AS_BUNDLE_KIND_UNKNOWN for unknown
 */
function bundleKindFromString(bundleStr: string): BundleKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsBundleKind.
 * @returns string version of @kind
 */
function bundleKindToString(kind: BundleKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsChecksumKind or %AS_CHECKSUM_KIND_NONE for unknown
 */
function checksumKindFromString(kindStr: string): ChecksumKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsChecksumKind.
 * @returns string version of @kind
 */
function checksumKindToString(kind: ChecksumKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 * @returns a #AsColorKind or %AS_COLOR_KIND_UNKNOWN for unknown.
 */
function colorKindFromString(str: string): ColorKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsColorKind.
 * @returns string version of @kind
 */
function colorKindToString(kind: ColorKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 * @returns a #AsColorKind or %AS_COLOR_SCHEME_KIND_UNKNOWN for unknown.
 */
function colorSchemeKindFromString(str: string): ColorSchemeKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsColorSchemeKind.
 * @returns string version of @kind
 */
function colorSchemeKindToString(kind: ColorSchemeKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsComponentKind or %AS_COMPONENT_KIND_UNKNOWN for unknown
 */
function componentKindFromString(kindStr: string): ComponentKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsComponentKind.
 * @returns string version of @kind
 */
function componentKindToString(kind: ComponentKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param scopeStr the string.
 * @returns a #AsComponentScope or %AS_COMPONENT_SCOPE_UNKNOWN for unknown
 */
function componentScopeFromString(scopeStr: string): ComponentScope
/**
 * Converts the enumerated value to an text representation.
 * @param scope the #AsComponentScope.
 * @returns string version of @scope
 */
function componentScopeToString(scope: ComponentScope): string
/**
 * Format `age` as a human-readable string in the given rating `system`. This is
 * the way to present system-specific strings in a UI.
 * @param system an #AsContentRatingSystem
 * @param age a CSM age to format
 * @returns a newly allocated formatted version of    @age, or %NULL if the given @system has no representation for @age
 */
function contentRatingSystemFormatAge(system: ContentRatingSystem, age: number): string | null
/**
 * Determine the most appropriate #AsContentRatingSystem for the given `locale`.
 * Content rating systems are selected by territory. If no content rating system
 * seems suitable, %AS_CONTENT_RATING_SYSTEM_IARC is returned.
 * @param locale a locale, in the format described in `man 3 setlocale`
 * @returns the most relevant #AsContentRatingSystem
 */
function contentRatingSystemFromLocale(locale: string): ContentRatingSystem
/**
 * Get the CSM ages corresponding to the entries returned by
 * as_content_rating_system_get_formatted_ages() for this `system`.
 * @param system an #AsContentRatingSystem
 * @returns an array of CSM ages
 */
function contentRatingSystemGetCsmAges(system: ContentRatingSystem): number[]
/**
 * Get an array of all the possible return values of
 * as_content_rating_system_format_age() for the given `system`. The array is
 * sorted with youngest CSM age first.
 * @param system an #AsContentRatingSystem
 * @returns %NULL-terminated array of human-readable age strings
 */
function contentRatingSystemGetFormattedAges(system: ContentRatingSystem): string[]
/**
 * Get a human-readable string to identify `system`. %NULL will be returned for
 * %AS_CONTENT_RATING_SYSTEM_UNKNOWN.
 * @param system an #AsContentRatingSystem
 * @returns a human-readable string for @system, or %NULL if unknown
 */
function contentRatingSystemToString(system: ContentRatingSystem): string | null
/**
 * Converts the text representation to an enumerated value.
 * @param value the string.
 * @returns a #AsContentRatingValue or %AS_CONTENT_RATING_VALUE_UNKNOWN for unknown
 */
function contentRatingValueFromString(value: string): ContentRatingValue
/**
 * Converts the enumerated value to an text representation.
 * @param value the #AsContentRatingValue.
 * @returns string version of @value
 */
function contentRatingValueToString(value: ContentRatingValue): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsControlKind or %AS_CONTROL_KIND_UNKNOWN for unknown
 */
function controlKindFromString(kindStr: string): ControlKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsControlKind.
 * @returns string version of @kind
 */
function controlKindToString(kind: ControlKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsDisplayLengthKind or %AS_DISPLAY_LENGTH_KIND_UNKNOWN for unknown
 */
function displayLengthKindFromString(kindStr: string): DisplayLengthKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsDisplayLengthKind.
 * @returns string version of @kind
 */
function displayLengthKindToString(kind: DisplayLengthKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsDisplaySideKind or %AS_DISPLAY_SIDE_KIND_UNKNOWN for unknown
 */
function displaySideKindFromString(kindStr: string): DisplaySideKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsDisplaySideKind.
 * @returns string version of @kind
 */
function displaySideKindToString(kind: DisplaySideKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsFormatKind or %AS_FORMAT_KIND_UNKNOWN for unknown
 */
function formatKindFromString(kindStr: string): FormatKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsFormatKind.
 * @returns string version of @kind
 */
function formatKindToString(kind: FormatKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param versionStr the string.
 * @returns a #AsFormatVersion. For unknown, the highest version number is assumed.
 */
function formatVersionFromString(versionStr: string): FormatVersion
/**
 * Converts the enumerated value to an text representation.
 * @param version the #AsFormatKind.
 * @returns string version of @version
 */
function formatVersionToString(version: FormatVersion): string
/**
 * Get the version of the AppStream library that is currently used
 * as a string.
 * @returns The AppStream version.
 */
function getAppstreamVersion(): string
/**
 * Returns the component-ID of the current distribution based on contents
 * of the `/etc/os-release` file.
 * This function is a shorthand for %as_distro_details_get_cid
 */
function getCurrentDistroComponentId(): string | null
/**
 * Get a list of the default Freedesktop and AppStream categories
 * that software components (especially GUI applications) can be sorted
 * into in software centers.
 * 
 * This function fully transfers ownership of the returned container,
 * to be used in GIR bindings.
 * @param withSpecial Include special categories (e.g. "addons", and "all"/"featured" in submenus)
 * @returns a list of #AsCategory
 */
function getDefaultCategories(withSpecial: boolean): Category[]
/**
 * Get a web URL to the license text and more license information for an SPDX
 * license identifier.
 * @param license The SPDX license ID.
 * @returns The license URL.
 */
function getLicenseUrl(license: string): string | null
/**
 * Replaces all occurences of `find` with the string `replace` in a #GString.
 * @param string a #GString
 * @param find the string to find in `string`
 * @param replace the string to insert in place of `find`
 * @returns the number of find and replace operations performed.
 */
function gstringReplace(string: GLib.String, find: string, replace: string): number
/**
 * Replaces the string `find` with the string `replace` in a #GString up to
 * `limit` times. If the number of instances of `find` in the #GString is
 * less than `limit,` all instances are replaced. If `limit` is `0`,
 * all instances of `find` are replaced.
 * @param string a #GString
 * @param find the string to find in `string`
 * @param replace the string to insert in place of `find`
 * @param limit the maximum instances of `find` to replace with `replace,` or `0` for no limit
 * @returns the number of find and replace operations performed.
 */
function gstringReplace2(string: GLib.String, find: string, replace: string, limit: number): number
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsIconKind or %AS_ICON_KIND_UNKNOWN for unknown
 */
function iconKindFromString(kindStr: string): IconKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsIconKind.
 * @returns string version of @kind
 */
function iconKindToString(kind: IconKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 * @returns a #AsImageKind, or %AS_IMAGE_KIND_UNKNOWN for unknown.
 */
function imageKindFromString(kind: string): ImageKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsImageKind.
 * @returns string version of @kind
 */
function imageKindToString(kind: ImageKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsInternetKind or %AS_INTERNET_KIND_UNKNOWN for unknown
 */
function internetKindFromString(kindStr: string): InternetKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsInternetKind.
 * @returns string version of @kind
 */
function internetKindToString(kind: InternetKind): string
/**
 * Searches the known list of SPDX license exception IDs.
 * @param exceptionId a single SPDX license exception ID, e.g. "GCC-exception-3.1"
 * @returns %TRUE if the string is a valid SPDX license exception ID
 */
function isSpdxLicenseExceptionId(exceptionId: string): boolean
/**
 * Checks the licence string to check it being a valid licence.
 * NOTE: SPDX licenses can't typically contain brackets.
 * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
 * @returns %TRUE if the icon is a valid "SPDX license"
 */
function isSpdxLicenseExpression(license: string): boolean
/**
 * Searches the known list of SPDX license IDs.
 * @param licenseId a single SPDX license ID, e.g. "GPL-3.0"
 * @returns %TRUE if the string is a valid SPDX license ID
 */
function isSpdxLicenseId(licenseId: string): boolean
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsIssueKind or %AS_ISSUE_KIND_UNKNOWN for unknown
 */
function issueKindFromString(kindStr: string): IssueKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsIssueKind.
 * @returns string version of @kind
 */
function issueKindToString(kind: IssueKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 * @returns a #AsIssueSeverity, or %AS_ISSUE_SEVERITY_UNKNOWN for unknown.
 */
function issueSeverityFromString(str: string): IssueSeverity
/**
 * Converts the enumerated value to an text representation.
 * @param severity the #AsIssueSeverity.
 * @returns string version of @severity
 */
function issueSeverityToString(severity: IssueSeverity): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsLaunchableKind or %AS_LAUNCHABLE_KIND_UNKNOWN for unknown
 */
function launchableKindFromString(kindStr: string): LaunchableKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsLaunchableKind.
 * @returns string version of @kind
 */
function launchableKindToString(kind: LaunchableKind): string
/**
 * Check if the given license is for free-as-in-freedom software.
 * A free software license is either approved by the Free Software Foundation
 * or the Open Source Initiative.
 * 
 * This function does *not* yet handle complex license expressions with AND and OR.
 * If the expression contains any of these, it will still simply check if all mentioned
 * licenses are Free licenses.
 * Currently, any license exception recognized by SPDX is assumed to not impact the free-ness
 * status of a software component.
 * 
 * Please note that this function does not give any legal advice. Please read the license texts
 * to learn more about the individual licenses and their conditions.
 * @param license The SPDX license string to test.
 * @returns %TRUE if the license string contains only free-as-in-freedom licenses.
 */
function licenseIsFreeLicense(license: string): boolean
/**
 * Check if the metadata license is suitable for mixing with other
 * metadata and redistributing the bundled result (this means we
 * prefer permissive licenses here, to not require people shipping
 * catalog metadata to perform a full license review).
 * 
 * This method checks against a hardcoded list of permissive licenses
 * commonly used to license metadata under.
 * @param license The SPDX license string to test.
 * @returns %TRUE if the license contains only permissive licenses suitable as metadata license.
 */
function licenseIsMetadataLicense(license: string): boolean
/**
 * Tests license ID against the vetted list of licenses that
 * can be used for metainfo metadata.
 * This function will not work for license expressions, if you need
 * to test an SPDX license expression for compliance, please
 * use %as_license_is_metadata_license insread.
 * @param licenseId a single SPDX license ID, e.g. "FSFAP"
 * @returns %TRUE if the string is a valid metadata license ID.
 */
function licenseIsMetadataLicenseId(licenseId: string): boolean
/**
 * Converts a non-SPDX license into an SPDX format string where possible.
 * @param license a not-quite SPDX license string, e.g. "GPLv3+"
 * @returns the best-effort SPDX license string
 */
function licenseToSpdxId(license: string): string | null
function markupConvertSimple(markup: string): string | null
/**
 * Splits up a long line into an array of smaller strings, each being no longer
 * than `line_len`. Words are not split.
 * @param text the text to split.
 * @param lineLen the maximum length of the output line
 * @returns lines, or %NULL in event of an error
 */
function markupStrsplitWords(text: string, lineLen: number): string[]
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsMergeKind or %AS_MERGE_KIND_NONE for unknown
 */
function mergeKindFromString(kindStr: string): MergeKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsMergeKind.
 * @returns string version of @kind
 */
function mergeKindToString(kind: MergeKind): string
function metadataErrorQuark(): GLib.Quark
function poolErrorQuark(): GLib.Quark
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsProvidedKind or %AS_PROVIDED_KIND_UNKNOWN for unknown
 */
function providedKindFromString(kindStr: string): ProvidedKind
/**
 * Converts the enumerated value to a localized text representation,
 * using the plural forms (e.g. "Libraries" instead of "Library").
 * 
 * This can be useful when displaying provided items in GUI dialogs.
 * @param kind the #AsProvidedKind.
 * @returns Pluralized, l10n string version of @kind
 */
function providedKindToL10nString(kind: ProvidedKind): string
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsProvidedKind.
 * @returns string version of @kind
 */
function providedKindToString(kind: ProvidedKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param compareStr the string.
 * @returns a #AsRelationCompare, or %AS_RELATION_COMPARE_UNKNOWN for unknown.
 */
function relationCompareFromString(compareStr: string): RelationCompare
/**
 * Converts the enumerated value to an text representation.
 * The enum is converted into a two-letter identifier ("eq", "ge", etc.)
 * for use in the XML representation.
 * @param compare the #AsRelationCompare.
 * @returns string version of @compare
 */
function relationCompareToString(compare: RelationCompare): string
/**
 * Converts the enumerated value to an text representation.
 * The enum is converted into an identifier consisting of two
 * mathematical comparison operators ("==", ">=", etc.)
 * for use in the YAML representation and user interfaces.
 * @param compare the #AsRelationCompare.
 * @returns string version of @compare
 */
function relationCompareToSymbolsString(compare: RelationCompare): string
function relationErrorQuark(): GLib.Quark
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsRelationItemKind or %AS_RELATION_ITEM_KIND_UNKNOWN for unknown
 */
function relationItemKindFromString(kindStr: string): RelationItemKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsRelationKind.
 * @returns string version of @kind
 */
function relationItemKindToString(kind: RelationItemKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsRelationKind or %AS_RELATION_KIND_UNKNOWN for unknown
 */
function relationKindFromString(kindStr: string): RelationKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsRelationKind.
 * @returns string version of @kind
 */
function relationKindToString(kind: RelationKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns an #AsReleaseKind or %AS_RELEASE_KIND_UNKNOWN for unknown
 */
function releaseKindFromString(kindStr: string): ReleaseKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseKind.
 * @returns string version of @kind
 */
function releaseKindToString(kind: ReleaseKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns an #AsReleaseUrlKind or %AS_RELEASE_URL_KIND_UNKNOWN for unknown
 */
function releaseUrlKindFromString(kindStr: string): ReleaseUrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseUrlKind.
 * @returns string version of @kind
 */
function releaseUrlKindToString(kind: ReleaseUrlKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns an #AsReleaseKind or %AS_RELEASE_KIND_UNKNOWN for unknown
 */
function releasesKindFromString(kindStr: string): ReleasesKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseKind.
 * @returns string version of @kind
 */
function releasesKindToString(kind: ReleasesKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 * @returns a %AsScreenshotKind, or %AS_SCREENSHOT_KIND_UNKNOWN if not known.
 */
function screenshotKindFromString(kind: string): ScreenshotKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsScreenshotKind.
 * @returns string version of @kind
 */
function screenshotKindToString(kind: ScreenshotKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param sizeKind the string.
 * @returns an #AsSizeKind or %AS_SIZE_KIND_UNKNOWN for unknown
 */
function sizeKindFromString(sizeKind: string): SizeKind
/**
 * Converts the enumerated value to an text representation.
 * @param sizeKind the #AsSizeKind.
 * @returns string version of @size_kind
 */
function sizeKindToString(sizeKind: SizeKind): string
/**
 * De-tokenizes the SPDX licenses into a string.
 * @param licenseTokens license tokens, typically from as_spdx_license_tokenize()
 * @returns string, or %NULL for invalid
 */
function spdxLicenseDetokenize(licenseTokens: string | null): string | null
/**
 * Tokenizes the SPDX license string (or any simarly formatted string)
 * into parts. Any license parts of the string e.g. "LGPL-2.0+" are prefexed
 * with "`"`, the conjunctive replaced with "&", the disjunctive replaced
 * with "|" and the WITH operator for license exceptions replaced with "^".
 * Brackets are added as indervidual tokens and other strings are
 * appended into single tokens where possible.
 * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
 * @returns array of strings, or %NULL for invalid
 */
function spdxLicenseTokenize(license: string): string[] | null
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsSuggestedKind or %AS_SUGGESTED_KIND_UNKNOWN for unknown
 */
function suggestedKindFromString(kindStr: string): SuggestedKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsSuggestedKind.
 * @returns string version of @kind
 */
function suggestedKindToString(kind: SuggestedKind): string
function systemInfoErrorQuark(): GLib.Quark
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 * @returns a #AsTranslationKind or %AS_TRANSLATION_KIND_UNKNOWN for unknown
 */
function translationKindFromString(kindStr: string): TranslationKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsTranslationKind.
 * @returns string version of @kind
 */
function translationKindToString(kind: TranslationKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param urgencyKind the string.
 * @returns a %AsUrgencyKind or %AS_URGENCY_KIND_UNKNOWN for unknown
 */
function urgencyKindFromString(urgencyKind: string): UrgencyKind
/**
 * Converts the enumerated value to an text representation.
 * @param urgencyKind the %AsUrgencyKind.
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
 * @param urlKind the %AsUrlKind.
 * @returns string version of @url_kind
 */
function urlKindToString(urlKind: UrlKind): string
/**
 * Builds an identifier string unique to the individual dataset using the supplied information.
 * @param scope Scope of the metadata as #AsComponentScope e.g. %AS_COMPONENT_SCOPE_SYSTEM
 * @param bundleKind Bundling system providing this data, e.g. 'package' or 'flatpak'
 * @param origin Origin string, e.g. 'os' or 'gnome-apps-nightly'
 * @param cid AppStream component ID, e.g. 'org.freedesktop.appstream.cli'
 * @param branch Branch, e.g. '3-20' or 'master'
 */
function utilsBuildDataId(scope: ComponentScope, bundleKind: BundleKind, origin: string, cid: string, branch: string): string | null
/**
 * Compare alpha and numeric segments of two versions.
 * The version compare algorithm is also used by RPM.
 * @param a 
 * @param b 
 * @returns 1: a is newer than b     0: a and b are the same version    -1: b is newer than a
 */
function utilsCompareVersions(a: string, b: string): number
/**
 * Checks two component data IDs for equality allowing globs to match.
 * @param dataId1 a data ID
 * @param dataId2 another data ID
 * @returns %TRUE if the ID's should be considered equal.
 */
function utilsDataIdEqual(dataId1: string, dataId2: string): boolean
/**
 * Get the component-id part of the data-id.
 * @param dataId The data-id.
 */
function utilsDataIdGetCid(dataId: string): string | null
/**
 * Converts a data-id to a hash value.
 * 
 * This function implements the widely used DJB hash on the ID subset of the
 * data-id string.
 * 
 * It can be passed to g_hash_table_new() as the hash_func parameter,
 * when using non-NULL strings or unique_ids as keys in a GHashTable.
 * @param dataId a data ID
 * @returns a hash value corresponding to the key
 */
function utilsDataIdHash(dataId: string): number
/**
 * Checks two data IDs for equality allowing globs to match, whilst also
 * allowing clients to whitelist sections that have to match.
 * @param dataId1 a data ID
 * @param dataId2 another data ID
 * @param matchFlags a #AsDataIdMatchFlags bitfield, e.g. %AS_DATA_ID_MATCH_FLAG_ID
 * @returns %TRUE if the IDs should be considered equal.
 */
function utilsDataIdMatch(dataId1: string, dataId2: string, matchFlags: DataIdMatchFlags): boolean
/**
 * Checks if a data ID is valid i.e. has the correct number of
 * sections.
 * @param dataId a component data ID
 * @returns %TRUE if the ID is valid
 */
function utilsDataIdValid(dataId: string): boolean
function utilsErrorQuark(): GLib.Quark
/**
 * Guess the #AsComponentScope that applies to a given path.
 * @param path The filename to test.
 * @returns the #AsComponentScope
 */
function utilsGuessScopeFromPath(path: string): ComponentScope
/**
 * Installs an AppStream MetaInfo, AppStream Metadata Catalog or AppStream Icon tarball file
 * to the right place on the filesystem.
 * Please note that this function does almost no validation and may guess missing values such
 * as icon sizes and origin names.
 * Ensure your metadata is good before installing it.
 * @param location the #AsMetadataLocation, e.g. %AS_METADATA_LOCATION_CACHE
 * @param filename the full path of the file to install
 * @param origin the origin to use for the installation, or %NULL
 * @param destdir the destdir to use, or %NULL
 * @returns %TRUE for success, %FALSE if error is set
 */
function utilsInstallMetadataFile(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean
function utilsIsCategoryName(categoryName: string): boolean
/**
 * Searches the known list of desktop environments AppStream
 * knows about.
 * @param desktop a desktop environment id.
 * @returns %TRUE if the desktop-id is valid
 */
function utilsIsDesktopEnvironment(desktop: string): boolean
/**
 * Test if the given string is a valid platform triplet recognized by
 * AppStream.
 * @param triplet a platform triplet.
 * @returns %TRUE if triplet is valid.
 */
function utilsIsPlatformTriplet(triplet: string): boolean
/**
 * Searches the known list of TLDs we allow for AppStream IDs.
 * This excludes internationalized names.
 * @param tld a top-level domain without dot, e.g. "de", "org", "name"
 * @returns %TRUE if the TLD is valid
 */
function utilsIsTld(tld: string): boolean
/**
 * Calculates if one locale is compatible with another.
 * When doing the calculation the locale and language code is taken into
 * account if possible.
 * @param locale1 a locale string, or %NULL
 * @param locale2 a locale string, or %NULL
 * @returns %TRUE if the locale is compatible.
 */
function utilsLocaleIsCompatible(locale1: string, locale2: string): boolean
/**
 * Sorts all components in `cpts` into the #AsCategory categories listed in `categories`.
 * @param cpts List of components.
 * @param categories List of categories to sort components into.
 * @param checkDuplicates Whether to check for duplicates.
 */
function utilsSortComponentsIntoCategories(cpts: Component[], categories: Category[], checkDuplicates: boolean): void
function validatorErrorQuark(): GLib.Quark
/**
 * Compare alpha and numeric segments of two software versions,
 * considering `flags`.
 * @param a First version number
 * @param b Second version number
 * @param flags Flags, e.g. %AS_VERCMP_FLAG_NONE
 * @returns >>0 if a is newer than b;     0 if a and b are the same version;     <<0 if b is newer than a
 */
function vercmp(a: string, b: string, flags: VercmpFlags): number
/**
 * Compare alpha and numeric segments of two software versions.
 * @param a First version number
 * @param b Second version number
 * @returns >>0 if a is newer than b;     0 if a and b are the same version;     <<0 if b is newer than a
 */
function vercmpSimple(a: string, b: string): number
/**
 * Compare two version numbers and check if the given version comparator matches.
 * @param ver1 first version number
 * @param compare the comparison operator
 * @param ver2 second version number
 * @param flags the #AsVercmpFlags to use
 * @returns %TRUE if the version comparison matches, %FALSE otherwise.
 */
function vercmpTestMatch(ver1: string, compare: RelationCompare, ver2: string, flags: VercmpFlags): boolean
/**
 * Get the version of the AppStream library that is currently used
 * at runtime as a string.
 * @returns a version number, e.g. "0.14.2"
 */
function versionString(): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 * @returns a #AsVideoCodecKind, or %AS_VIDEO_CODEC_KIND_UNKNOWN for unknown.
 */
function videoCodecKindFromString(str: string): VideoCodecKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsVideoCodecKind.
 * @returns string version of @codec
 */
function videoCodecKindToString(kind: VideoCodecKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 * @returns a #AsVideoContainerKind, or %AS_VIDEO_CONTAINER_KIND_UNKNOWN for unknown.
 */
function videoContainerKindFromString(str: string): VideoContainerKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsVideoContainerKind.
 * @returns string version of @kind
 */
function videoContainerKindToString(kind: VideoContainerKind): string
module Agreement {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Agreement {

    // Own properties of AppStream-1.0.AppStream.Agreement

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Agreement

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Agreement

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
    getSectionDefault(): AgreementSection | null
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

    // Class property signals of AppStream-1.0.AppStream.Agreement

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

    // Own properties of AppStream-1.0.AppStream.Agreement

    static name: string

    // Constructors of AppStream-1.0.AppStream.Agreement

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
}

module AgreementSection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AgreementSection {

    // Own properties of AppStream-1.0.AppStream.AgreementSection

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.AgreementSection

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.AgreementSection

    /**
     * Get the current active locale, which
     * is used to get localized messages.
     */
    getActiveLocale(): string
    /**
     * Gets the agreement section desc.
     * @returns a string, e.g. "GDPR", or NULL
     */
    getDescription(): string
    /**
     * Gets the agreement section kind.
     * @returns a string, e.g. "GDPR", or NULL
     */
    getKind(): string
    /**
     * Gets the agreement section name.
     * @returns a string, e.g. "GDPR", or NULL
     */
    getName(): string
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * @param locale 
     */
    setActiveLocale(locale: string): void
    /**
     * Sets the agreement section desc.
     * @param desc the agreement description, e.g. "GDPR"
     * @param locale the locale. e.g. "en_GB"
     */
    setDescription(desc: string, locale: string | null): void
    /**
     * Sets the agreement section kind.
     * @param kind the agreement kind, e.g. "GDPR"
     */
    setKind(kind: string): void
    /**
     * Sets the agreement section name.
     * @param name the agreement name, e.g. "GDPR"
     * @param locale the locale. e.g. "en_GB"
     */
    setName(name: string, locale: string | null): void

    // Class property signals of AppStream-1.0.AppStream.AgreementSection

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

    // Own properties of AppStream-1.0.AppStream.AgreementSection

    static name: string

    // Constructors of AppStream-1.0.AppStream.AgreementSection

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

module Artifact {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Artifact {

    // Own properties of AppStream-1.0.AppStream.Artifact

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Artifact

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Artifact

    /**
     * Add a checksum for the file associated with this artifact.
     * @param cs The #AsChecksum.
     */
    addChecksum(cs: Checksum): void
    /**
     * Adds a artifact location.
     * @param location An URL of the download location
     */
    addLocation(location: string): void
    /**
     * Gets the bundle kind of this artifact.
     * @returns the #AsBundleKind
     */
    getBundleKind(): BundleKind
    /**
     * Gets the artifact checksum
     * @param kind 
     * @returns an #AsChecksum, or %NULL for not set or invalid
     */
    getChecksum(kind: ChecksumKind): Checksum | null
    /**
     * Get a list of all checksums we have for this artifact.
     * @returns an array of #AsChecksum objects.
     */
    getChecksums(): Checksum[]
    /**
     * Gets a suggested filename for the downloaded artifact,
     * or %NULL if none is suggested.
     * @returns The platform triplet or identifier string.
     */
    getFilename(): string
    /**
     * Gets the artifact kind.
     * @returns the #AsArtifactKind
     */
    getKind(): ArtifactKind
    /**
     * Gets the artifact locations, typically URLs.
     * @returns list of locations
     */
    getLocations(): string[]
    /**
     * Gets the artifact platform string (e.g. a triplet like "x86_64-linux-gnu").
     * @returns The platform triplet or identifier string.
     */
    getPlatform(): string
    /**
     * Gets the artifact size.
     * @param kind a #AsSizeKind
     * @returns The size of the given kind of this artifact.
     */
    getSize(kind: SizeKind): number
    /**
     * Sets the bundle kind for this release artifact.
     * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_TARBALL.
     */
    setBundleKind(kind: BundleKind): void
    /**
     * Sets a suggested filename for this artifact after it has been downloaded.
     * @param filename the file name suggestion.
     */
    setFilename(filename: string): void
    /**
     * Sets the artifact kind.
     * @param kind the #AsArtifactKind, e.g. %AS_ARTIFACT_KIND_SOURCE.
     */
    setKind(kind: ArtifactKind): void
    /**
     * Sets the artifact platform triplet or identifier string.
     * @param platform the platform triplet.
     */
    setPlatform(platform: string): void
    /**
     * Sets the artifact size for the given kind.
     * @param size a size in bytes, or 0 for unknown
     * @param kind a #AsSizeKind
     */
    setSize(size: number, kind: SizeKind): void

    // Class property signals of AppStream-1.0.AppStream.Artifact

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

class Artifact extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Artifact

    static name: string

    // Constructors of AppStream-1.0.AppStream.Artifact

    constructor(config?: Artifact.ConstructorProperties) 
    /**
     * Creates a new #AsArtifact.
     * @constructor 
     * @returns a #AsArtifact
     */
    constructor() 
    /**
     * Creates a new #AsArtifact.
     * @constructor 
     * @returns a #AsArtifact
     */
    static new(): Artifact
    _init(config?: Artifact.ConstructorProperties): void
}

module Branding {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Branding {

    // Own properties of AppStream-1.0.AppStream.Branding

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Branding

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Branding

    /**
     * Retrieve a color of the given `kind` that matches `scheme_kind`.
     * If a color has no scheme preference defined, it will be returned for either scheme type,
     * unless a more suitable color was found.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param schemeKind Color scheme preference for the color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
     * @returns The HTML color code of the found color, or %NULL if no color was found.
     */
    getColor(kind: ColorKind, schemeKind: ColorSchemeKind): string | null
    /**
     * Deletes a color that matches the given type and scheme preference.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param schemePreference Type of color scheme preferred for this color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
     */
    removeColor(kind: ColorKind, schemePreference: ColorSchemeKind): void
    /**
     * Sets a new accent color. If a color of the given kind with the given scheme preference already exists,
     * it will be overriden with the new color code.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param schemePreference Type of color scheme preferred for this color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
     * @param colorcode a HTML color code.
     */
    setColor(kind: ColorKind, schemePreference: ColorSchemeKind, colorcode: string): void

    // Class property signals of AppStream-1.0.AppStream.Branding

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

class Branding extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Branding

    static name: string

    // Constructors of AppStream-1.0.AppStream.Branding

    constructor(config?: Branding.ConstructorProperties) 
    /**
     * Creates a new #AsBranding.
     * @constructor 
     * @returns a #AsBranding
     */
    constructor() 
    /**
     * Creates a new #AsBranding.
     * @constructor 
     * @returns a #AsBranding
     */
    static new(): Branding
    _init(config?: Branding.ConstructorProperties): void
}

module Bundle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Bundle {

    // Own properties of AppStream-1.0.AppStream.Bundle

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Bundle

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Bundle

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
     * Sets the ID for this bundle.
     * @param id the URL.
     */
    setId(id: string): void
    /**
     * Sets the bundle kind.
     * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_LIMBA.
     */
    setKind(kind: BundleKind): void

    // Class property signals of AppStream-1.0.AppStream.Bundle

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

    // Own properties of AppStream-1.0.AppStream.Bundle

    static name: string

    // Constructors of AppStream-1.0.AppStream.Bundle

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
}

module Category {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of AppStream-1.0.AppStream.Category

        icon?: string | null
        id?: string | null
        name?: string | null
    }

}

interface Category {

    // Own properties of AppStream-1.0.AppStream.Category

    readonly children: any
    icon: string | null
    id: string | null
    name: string | null
    readonly summary: string | null
    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Category

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Category

    /**
     * Add a subcategory to this category.
     * @param subcat A subcategory to add.
     */
    addChild(subcat: Category): void
    /**
     * Add a component to this category.
     * @param cpt The #AsComponent to add.
     */
    addComponent(cpt: Component): void
    /**
     * Add a desktop-file category to this #AsCategory.
     * @param groupName A subcategory to add.
     */
    addDesktopGroup(groupName: string): void
    getChildren(): Category[]
    /**
     * Get list of components which have been sorted into this category.
     * @returns List of #AsCategory
     */
    getComponents(): Component[]
    getDesktopGroups(): string[]
    /**
     * Get the stock icon name for this category.
     */
    getIcon(): string
    /**
     * Get the ID of this category.
     */
    getId(): string
    /**
     * Get the name of this category.
     */
    getName(): string
    /**
     * Get the summary (short description) of this category.
     */
    getSummary(): string
    /**
     * Test for sub-categories.
     * @returns %TRUE if this category has any subcategory
     */
    hasChildren(): boolean
    /**
     * Check if the exact #AsComponent `cpt` is a member of this
     * category already.
     * @param cpt The #AsComponent to look for.
     * @returns %TRUE if the component is present.
     */
    hasComponent(cpt: Component): boolean
    /**
     * Drop a subcategory from this #AsCategory.
     * @param subcat A subcategory to remove.
     */
    removeChild(subcat: Category): void
    /**
     * Set the stock icon name for this category.
     * @param value 
     */
    setIcon(value: string): void
    /**
     * Set the ID of this category.
     * @param id 
     */
    setId(id: string): void
    /**
     * Set the name of this category.
     * @param value 
     */
    setName(value: string): void
    /**
     * Get the summary (short description) of this category.
     * @param value A new short summary of this category.
     */
    setSummary(value: string): void

    // Class property signals of AppStream-1.0.AppStream.Category

    connect(sigName: "notify::children", callback: (...args: any[]) => void): number
    on(sigName: "notify::children", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Category extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Category

    static name: string

    // Constructors of AppStream-1.0.AppStream.Category

    constructor(config?: Category.ConstructorProperties) 
    /**
     * Creates a new #AsCategory.
     * @constructor 
     * @returns a new #AsCategory
     */
    constructor() 
    /**
     * Creates a new #AsCategory.
     * @constructor 
     * @returns a new #AsCategory
     */
    static new(): Category
    _init(config?: Category.ConstructorProperties): void
}

module Checksum {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Checksum {

    // Own properties of AppStream-1.0.AppStream.Checksum

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Checksum

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Checksum

    /**
     * Gets the checksum type.
     * @returns the #AsChecksumKind
     */
    getKind(): ChecksumKind
    /**
     * Gets the checksum, usually in its hexadecimal form.
     * @returns the checksum.
     */
    getValue(): string
    /**
     * Sets the checksum type.
     * @param kind the #AsChecksumKind, e.g. %AS_CHECKSUM_KIND_SHA256.
     */
    setKind(kind: ChecksumKind): void
    /**
     * Sets the checksum value filename.
     * @param value the new value.
     */
    setValue(value: string): void

    // Class property signals of AppStream-1.0.AppStream.Checksum

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

    // Own properties of AppStream-1.0.AppStream.Checksum

    static name: string

    // Constructors of AppStream-1.0.AppStream.Checksum

    constructor(config?: Checksum.ConstructorProperties) 
    /**
     * Creates a new #AsChecksum.
     * @constructor 
     * @returns an #AsChecksum
     */
    constructor() 
    /**
     * Creates a new #AsChecksum.
     * @constructor 
     * @returns an #AsChecksum
     */
    static new(): Checksum
    /**
     * Creates a new #AsChecksum with the given hash
     * function and hash value.
     * @constructor 
     * @param kind 
     * @param value 
     * @returns an #AsChecksum
     */
    static newForKindValue(kind: ChecksumKind, value: string): Checksum
    _init(config?: Checksum.ConstructorProperties): void
}

module Component {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of AppStream-1.0.AppStream.Component

        /**
         * the description
         */
        description?: string | null
        /**
         * the developer name
         */
        developerName?: string | null
        /**
         * the unique identifier
         */
        id?: string | null
        /**
         * string array of keywords
         */
        keywords?: string[] | null
        /**
         * the #AsComponentKind of this component
         */
        kind?: ComponentKind | null
        /**
         * the name
         */
        name?: string | null
        /**
         * string array of packages name
         */
        pkgnames?: string[] | null
        /**
         * the project group
         */
        projectGroup?: string | null
        /**
         * the project license
         */
        projectLicense?: string | null
        /**
         * the summary
         */
        summary?: string | null
    }

}

interface Component {

    // Own properties of AppStream-1.0.AppStream.Component

    /**
     * string array of categories
     */
    readonly categories: any[]
    /**
     * the description
     */
    description: string | null
    /**
     * the developer name
     */
    developerName: string | null
    /**
     * hash map of icon urls and sizes
     */
    readonly icons: Icon[]
    /**
     * the unique identifier
     */
    id: string | null
    /**
     * string array of keywords
     */
    keywords: string[]
    /**
     * the #AsComponentKind of this component
     */
    kind: ComponentKind
    /**
     * the name
     */
    name: string | null
    /**
     * string array of packages name
     */
    pkgnames: string[]
    /**
     * the project group
     */
    projectGroup: string | null
    /**
     * the project license
     */
    projectLicense: string | null
    /**
     * An array of #AsScreenshot instances
     */
    readonly screenshots: Screenshot[]
    /**
     * the summary
     */
    summary: string | null
    /**
     * the urls associated with this component
     */
    readonly urls: GLib.HashTable
    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Component

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Component

    /**
     * Add a reference to the addon that is enhancing this component.
     * @param addon The #AsComponent that extends `cpt`
     */
    addAddon(addon: Component): void
    /**
     * Adds an agreement to the software component.
     * @param agreement an #AsAgreement instance.
     */
    addAgreement(agreement: Agreement): void
    /**
     * Adds a bundle to the component.
     * @param bundle The #AsBundle to add.
     */
    addBundle(bundle: Bundle): void
    /**
     * Add a category.
     * @param category the categories name to add.
     */
    addCategory(category: string): void
    /**
     * Adds a content rating to this component.
     * @param contentRating a #AsContentRating instance.
     */
    addContentRating(contentRating: ContentRating): void
    /**
     * Add a reference to the extended component
     * @param cptId The id of a component which is extended by this component
     */
    addExtends(cptId: string): void
    /**
     * Add an icon to this component.
     * @param icon the valid #AsIcon instance to add.
     */
    addIcon(icon: Icon): void
    /**
     * Adds a language to the component.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     * @param percentage the percentage completion of the translation, 0 for locales with unknown amount of translation
     */
    addLanguage(locale: string | null, percentage: number): void
    /**
     * Adds a #AsLaunchable containing launchables entries for this component.
     * @param launchable a #AsLaunchable instance.
     */
    addLaunchable(launchable: Launchable): void
    /**
     * Add a set of provided items to this component.
     * @param prov a #AsProvided instance.
     */
    addProvided(prov: Provided): void
    /**
     * Adds a provided item to the component with the given `kind,` creating a new
     * `AsProvided` for this kind internally if necessary.
     * @param kind the kind of the provided item (e.g. %AS_PROVIDED_KIND_MEDIATYPE)
     * @param item the item to add.
     */
    addProvidedItem(kind: ProvidedKind, item: string): void
    /**
     * Adds a #AsRelation to set a recommends or requires relation of
     * component `cpt` on the item mentioned in the #AsRelation.
     * @param relation a #AsRelation instance.
     */
    addRelation(relation: Relation): void
    /**
     * Add an #AsRelease to this component.
     * @param release The #AsRelease to add
     */
    addRelease(release: Release): void
    /**
     * Add the component ID of a component that gets replaced by the current component.
     * @param cid an AppStream component ID
     */
    addReplaces(cid: string): void
    /**
     * Adds a user review to a software component.
     * @param review a #AsReview instance.
     */
    addReview(review: Review): void
    /**
     * Add an #AsScreenshot to this component.
     * @param sshot The #AsScreenshot to add
     */
    addScreenshot(sshot: Screenshot): void
    /**
     * Add an #AsSuggested to this component.
     * @param suggested The #AsSuggested
     */
    addSuggested(suggested: Suggested): void
    /**
     * Add a tag to this component.
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     * @returns %TRUE if the tag was added.
     */
    addTag(ns: string, tag: string): boolean
    /**
     * Assign an #AsTranslation object describing the translation system used
     * by this component.
     * @param tr an #AsTranslation instance.
     */
    addTranslation(tr: Translation): void
    /**
     * Adds some URL data to the component.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE
     * @param url the full URL.
     */
    addUrl(urlKind: UrlKind, url: string): void
    /**
     * Remove all registered language translation information.
     */
    clearLanguages(): void
    /**
     * Remove all tags associated with this component.
     */
    clearTags(): void
    /**
     * Get the current active locale for this component, which
     * is used to get localized messages.
     * @returns the current active locale.
     */
    getActiveLocale(): string
    /**
     * Returns a list of #AsComponent objects which
     * are addons extending this component in functionality.
     * 
     * This is the reverse of %as_component_get_extends()
     * @returns An array of #AsComponent.
     */
    getAddons(): Component[]
    /**
     * Gets an agreement the component has specified for the particular kind.
     * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     * @returns a #AsAgreement or %NULL for not found
     */
    getAgreementByKind(kind: AgreementKind): Agreement | null
    /**
     * Get a list of all agreements registered with this software component.
     * @returns An array of #AsAgreement.
     */
    getAgreements(): Agreement[]
    /**
     * Gets the branch for the application.
     * @returns string, or %NULL if unset
     */
    getBranch(): string
    /**
     * Get the branding associated with this component, or %NULL
     * in case this component has no special branding.
     * @returns An #AsBranding.
     */
    getBranding(): Branding | null
    /**
     * Gets a bundle identifier string.
     * @param bundleKind the bundle kind, e.g. %AS_BUNDLE_KIND_LIMBA.
     * @returns An #AsBundle, or %NULL if not set.
     */
    getBundle(bundleKind: BundleKind): Bundle | null
    /**
     * Get a list of all software bundles associated with this component.
     * @returns A list of #AsBundle.
     */
    getBundles(): Bundle[]
    getCategories(): string[]
    getCompulsoryForDesktops(): string[]
    /**
     * Gets a content ratings of a specific type that are defined for this component.
     * @param kind a ratings kind, e.g. "oars-1.0"
     * @returns a #AsContentRating or %NULL if not found
     */
    getContentRating(kind: string): ContentRating | null
    /**
     * Gets all content ratings defined for this software.
     * @returns an array
     */
    getContentRatings(): ContentRating[]
    /**
     * Get the #AsContext associated with this component.
     * This function may return %NULL if no context is set
     * (which will be the case if the component was not loaded from
     * a file or cache but constructed in memory).
     * @returns the associated #AsContext or %NULL
     */
    getContext(): Context | null
    getCustom(): GLib.HashTable
    /**
     * Retrieve value for a custom data entry with the given key.
     * @param key Field name.
     */
    getCustomValue(key: string): string
    /**
     * Get a unique identifier for this metadata set.
     * This unique ID is only valid for the current session,
     * as opposed to the AppStream ID which uniquely identifies
     * a software component.
     * 
     * The format of the unique id usually is:
     * %{scope}/%{origin}/%{distribution_system}/%{appstream_id}
     * 
     * For example:
     * system/os/package/org.example.FooBar
     * @returns the unique session-specific identifier.
     */
    getDataId(): string
    /**
     * Gets the end-of-life date for the entire component.
     * @returns The EOL date as string in ISO8601 format.
     */
    getDateEol(): string
    /**
     * Get the localized long description of this component.
     * @returns the description.
     */
    getDescription(): string
    /**
     * Get the Desktop Entry ID for this component, if it is
     * of type "desktop-application".
     * For most desktop-application components, this is the name
     * of the .desktop file.
     * 
     * Refer to https://specifications.freedesktop.org/desktop-entry-spec/latest/ape.html for more
     * information.
     * @returns The desktop file id.
     */
    getDesktopId(): string
    /**
     * Get the component's developer or development team name.
     * @returns the developer name.
     */
    getDeveloperName(): string
    /**
     * Returns a string list of IDs of components which
     * are extended by this addon.
     * 
     * See %as_component_get_extends() for the reverse.
     * @returns A #GPtrArray or %NULL if not set.
     */
    getExtends(): string[] | null
    /**
     * Gets an icon matching the size constraints.
     * The icons are not filtered by type, and the first icon
     * which matches the size is returned.
     * If you want more control over which icons you use for displaying,
     * use the %as_component_get_icons() function to get a list of all icons.
     * 
     * Note that this function is not HiDPI aware! It will never return an icon with
     * a scaling factor > 1.
     * @param width The icon width in pixels.
     * @param height the icon height in pixels.
     * @returns An icon matching the given width/height, or %NULL if not found.
     */
    getIconBySize(width: number, height: number): Icon | null
    /**
     * Gets a stock icon for this component if one is associated with it.
     * Will return %NULL otherwise.
     * @returns An stock icon, or %NULL if none found.
     */
    getIconStock(): Icon | null
    getIcons(): Icon[]
    /**
     * Get the unique AppStream identifier for this component.
     * This ID is unique for the described component, but does
     * not uniquely identify the metadata set.
     * 
     * For a unique ID for this metadata set in the current
     * session, use %as_component_get_data_id()
     * @returns the unique AppStream identifier.
     */
    getId(): string
    getKeywords(): string[]
    /**
     * Retrieve the internal hash table mapping languages to
     * keword arrays.
     * @returns Hash table locale->keyword arrays
     */
    getKeywordsTable(): GLib.HashTable
    /**
     * Returns the #AsComponentKind of this component.
     * @returns the kind of #this.
     */
    getKind(): ComponentKind
    /**
     * Gets the translation coverage in percent for a specific locale
     * @param locale the locale, or %NULL. e.g. "en_GB"
     * @returns a percentage value, -1 if locale was not found
     */
    getLanguage(locale: string | null): number
    /**
     * Get a list of all languages.
     * @returns list of locales
     */
    getLanguages(): string[]
    /**
     * Gets a #AsLaunchable of a specific type that contains launchable entries for
     * this component.
     * @param kind a launch kind, e.g. %AS_LAUNCHABLE_KIND_DESKTOP_ID
     * @returns a #AsLaunchable or %NULL if not found
     */
    getLaunchable(kind: LaunchableKind): Launchable | null
    getLaunchables(): Launchable[]
    /**
     * Get the merge method which should apply to duplicate components
     * with this ID.
     * @returns the #AsMergeKind of this component.
     */
    getMergeKind(): MergeKind
    /**
     * The license the metadata iself is subjected to.
     * @returns the license.
     */
    getMetadataLicense(): string
    /**
     * A human-readable name for this component.
     * @returns the name.
     */
    getName(): string
    /**
     * Get the internal locale to component name
     * mapping table.
     * @returns locale->names map
     */
    getNameTable(): GLib.HashTable
    /**
     * Get variant suffix for the component name
     * (only to be displayed if two components have the same name).
     * @returns the variant suffix
     */
    getNameVariantSuffix(): string
    getOrigin(): string
    /**
     * Get the first package name of the list of packages that need to be installed
     * for this component to be present on the system.
     * Since most components consist of only one package, this is safe to use for
     * about 90% of all cases.
     * 
     * However, to support a component fully, please use %as_component_get_pkgnames() for
     * getting all packages that need to be installed, and use this method only to
     * e.g. get the main package to perform a quick "is it installed?" check.
     * @returns String array of package names
     */
    getPkgname(): string | null
    /**
     * Get a list of package names which this component consists of.
     * This usually is just one package name.
     * @returns String array of package names
     */
    getPkgnames(): string[]
    /**
     * Returns the priority of this component.
     * This method is used internally.
     */
    getPriority(): number
    /**
     * Get the component's project group.
     * @returns the project group.
     */
    getProjectGroup(): string
    /**
     * Get the license of the project this component belongs to.
     * @returns the license.
     */
    getProjectLicense(): string
    /**
     * Get a list of #AsProvided objects associated with this component.
     * @returns A list of #AsProvided objects.
     */
    getProvided(): Provided[]
    /**
     * Get an #AsProvided object for the given interface type,
     * containing information about the public interfaces (mimetypes, firmware, DBus services, ...)
     * this component provides.
     * @param kind kind of the provided item, e.g. %AS_PROVIDED_KIND_MIMETYPE
     * @returns #AsProvided containing the items this component provides, or %NULL.
     */
    getProvidedForKind(kind: ProvidedKind): Provided | null
    /**
     * Get an array of items that are recommended by this component.
     * @returns an array
     */
    getRecommends(): Relation[]
    /**
     * Get an array of the #AsRelease items this component
     * provides.
     * @returns A list of releases
     */
    getReleases(): Release[]
    /**
     * Returns the #AsReleasesKind of the release metadata
     * associated with this component.
     * @returns The kind.
     */
    getReleasesKind(): ReleasesKind
    /**
     * Get a remote URL to obtain release information for the component.
     * @returns The URL of external release data.
     */
    getReleasesUrl(): string
    /**
     * Get a list of component IDs of components that this software replaces entirely.
     * @returns an array of component-IDs
     */
    getReplaces(): string[]
    /**
     * Get an array of items that are required by this component.
     * @returns an array
     */
    getRequires(): Relation[]
    /**
     * Gets any reviews associated with the component.
     * @returns an array
     */
    getReviews(): Review[]
    getScope(): ComponentScope
    /**
     * Get a list of associated screenshots.
     * @returns an array of #AsScreenshot instances
     */
    getScreenshots(): Screenshot[]
    /**
     * Returns all search tokens for this component.
     * @returns The string search tokens
     */
    getSearchTokens(): string[]
    /**
     * Returns the sorting priority of this component.
     * 
     * This will only return a valid value if this component
     * was the result of or involved in a search operation which
     * returned sorted results.
     * In most cases you will not need to access this value explicitly,
     * as all results of search operations in AppStream are already sorted
     * from best match to worst.
     * 
     * The returned value is an arbitrary integer value, valid only for
     * the search terms involved in the search operation that yielded
     * this component as a result.
     */
    getSortScore(): number
    getSourcePkgname(): string
    /**
     * Get a list of associated suggestions.
     * @returns an array of #AsSuggested instances
     */
    getSuggested(): Suggested[]
    /**
     * Get a short description of this component.
     * @returns the summary.
     */
    getSummary(): string
    /**
     * Get the internal locale to component summary
     * mapping table.
     * @returns locale->summary map
     */
    getSummaryTable(): GLib.HashTable
    /**
     * Get an array of items that are supported by this component,
     * e.g. to indicate support for a specific piece of hardware.
     * @returns an array
     */
    getSupports(): Relation[]
    /**
     * Gets the UNIX timestamp for the date when this component
     * is out of support (end-of-life) and will receive no more
     * updates, not even security fixes.
     * @returns UNIX timestamp, or 0 for unset or invalid.
     */
    getTimestampEol(): number
    /**
     * Get a #GPtrArray of #AsTranslation objects describing the
     * translation systems and translation-ids (e.g. Gettext domains) used
     * by this software component.
     * 
     * Only set for metainfo files.
     * @returns An array of #AsTranslation objects.
     */
    getTranslations(): Translation[]
    /**
     * Gets a URL.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     * @returns string, or %NULL if unset
     */
    getUrl(urlKind: UrlKind): string | null
    getValueFlags(): ValueFlags
    hasBundle(): boolean
    /**
     * Check if component is in the specified category.
     * @param category the specified category to check
     * @returns %TRUE if the component is in the specified category.
     */
    hasCategory(category: string): boolean
    /**
     * Test if the component is tagged with the selected
     * tag.
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     * @returns %TRUE if tag exists.
     */
    hasTag(ns: string, tag: string): boolean
    /**
     * Add a key and value pair to the custom data table.
     * @param key Key name.
     * @param value A string value.
     * @returns %TRUE if the key did not exist yet.
     */
    insertCustomValue(key: string, value: string): boolean
    /**
     * Check if this component is compulsory for the given desktop.
     * @param desktop the desktop-id to test for
     * @returns %TRUE if compulsory, %FALSE otherwise.
     */
    isCompulsoryForDesktop(desktop: string): boolean
    /**
     * Returns %TRUE if this component is free and open source software.
     * To determine this status, this function will check if it comes
     * from a vetted free-software-only source or whether its licenses
     * are only free software licenses.
     * @returns %TRUE if this component is free software.
     */
    isFree(): boolean
    isIgnored(): boolean
    /**
     * Test if the component `cpt` is a member of category `category`.
     * @param category The category to test.
     */
    isMemberOfCategory(category: Category): boolean
    /**
     * Check if the essential properties of this Component are
     * populated with useful data.
     * @returns TRUE if the component data was validated successfully.
     */
    isValid(): boolean
    /**
     * Load metadata for this component from an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to create and update components.
     * 
     * If this function returns %TRUE, a valid component is returned unless the selected
     * format was %AS_FORMAT_KIND_DESKTOP_ENTRY, in which case a component ID will have to
     * be set explicitly by the caller in order to make the component valid.
     * @param context an #AsContext instance.
     * @param format the format of the data to load, e.g. %AS_FORMAT_KIND_XML
     * @param bytes the data to load.
     * @returns %TRUE on success.
     */
    loadFromBytes(context: Context, format: FormatKind, bytes: any): boolean
    /**
     * Load metadata for this component from an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to create and update components.
     * @param context an #AsContext instance.
     * @param data The XML data to load.
     * @returns %TRUE on success.
     */
    loadFromXmlData(context: Context, data: string): boolean
    /**
     * Load data from an external source, possibly a local file
     * or a network resource.
     * @param reload set to %TRUE to discard existing data and reload.
     * @param allowNet allow fetching release data from the internet.
     * @returns %TRUE on success.
     */
    loadReleases(reload: boolean, allowNet: boolean): boolean
    /**
     * Load release information from XML bytes.
     * @param bytes the release XML data as #GBytes
     * @returns %TRUE on success.
     */
    loadReleasesFromBytes(bytes: any): boolean
    /**
     * Remove a tag from this component
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     * @returns %TRUE if the tag was removed.
     */
    removeTag(ns: string, tag: string): boolean
    /**
     * Searches component data for a specific keyword.
     * @param term the search term.
     * @returns a match scrore, where 0 is no match and 100 is the best match.
     */
    searchMatches(term: string): number
    /**
     * Searches component data for all the specific keywords.
     * @param terms the search terms.
     * @returns a match score, where 0 is no match and larger numbers are better matches.
     */
    searchMatchesAll(terms: string | null): number
    /**
     * Set the current active locale for this component, which
     * is used to get localized messages.
     * If the #AsComponent was fetched from a localized database, usually only
     * one locale is available.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    setActiveLocale(locale: string | null): void
    /**
     * Set the branch that the component instance was sourced from.
     * @param branch the branch, e.g. "master" or "3-16".
     */
    setBranch(branch: string): void
    /**
     * Set branding for this component.
     * @param branding an #AsBranding instance.
     */
    setBranding(branding: Branding): void
    /**
     * Mark this component to be compulsory for the specified desktop environment.
     * @param desktop The name of the desktop.
     */
    setCompulsoryForDesktop(desktop: string): void
    /**
     * Set the session-specific unique metadata identifier for this
     * component.
     * If two components have a different data_id but the same ID,
     * they will be treated as independent sets of metadata describing
     * the same component type.
     * @param value the unique session-specific identifier.
     */
    setDataId(value: string): void
    /**
     * Sets an end-of-life date for this component.
     * @param date the EOL date in ISO8601 format.
     */
    setDateEol(date: string): void
    /**
     * Set long description for this component.
     * @param value The long description
     * @param locale The locale the used for this value, or %NULL to use the current active one.
     */
    setDescription(value: string, locale: string | null): void
    /**
     * Set the the component's developer or development team name.
     * @param value the developer or developer team name
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    setDeveloperName(value: string, locale: string | null): void
    /**
     * Set the AppStream identifier for this component.
     * @param value the unique identifier.
     */
    setId(value: string): void
    /**
     * Set keywords for this component.
     * @param value String-array of keywords
     * @param locale Locale of the values, or %NULL to use current locale.
     */
    setKeywords(value: string[], locale: string | null): void
    /**
     * Sets the #AsComponentKind of this component.
     * @param value the #AsComponentKind.
     */
    setKind(value: ComponentKind): void
    /**
     * Sets the #AsMergeKind for this component.
     * @param kind the #AsMergeKind.
     */
    setMergeKind(kind: MergeKind): void
    /**
     * Set the license this metadata is licensed under.
     * @param value the metadata license.
     */
    setMetadataLicense(value: string): void
    /**
     * Set a human-readable name for this component.
     * @param value The name
     * @param locale The locale the used for this value, or %NULL to use the current active one.
     */
    setName(value: string, locale: string | null): void
    /**
     * Set a variant suffix for the component name
     * (only to be displayed if components have the same name).
     * @param value the developer or developer team name
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    setNameVariantSuffix(value: string, locale: string | null): void
    setOrigin(origin: string): void
    /**
     * Set the package name that provides this component.
     * @param pkgname the package name
     */
    setPkgname(pkgname: string): void
    /**
     * Set a list of package names this component consists of.
     * (This should usually be just one package name)
     * @param packages 
     */
    setPkgnames(packages: string[]): void
    /**
     * Sets the priority of this component.
     * This method is used internally.
     * @param priority the given priority
     */
    setPriority(priority: number): void
    /**
     * Set the component's project group.
     * @param value the project group.
     */
    setProjectGroup(value: string): void
    /**
     * Set the project license.
     * @param value the project license.
     */
    setProjectLicense(value: string): void
    /**
     * Sets the #AsReleasesKind of the release metadata
     * associated with this component.
     * @param kind the #AsComponentKind.
     */
    setReleasesKind(kind: ReleasesKind): void
    /**
     * Set a remote URL pointing to an AppStream release info file.
     * @param url the web URL where release data is found.
     */
    setReleasesUrl(url: string): void
    /**
     * Sets the #AsComponentScope of this component.
     * @param scope the #AsComponentKind.
     */
    setScope(scope: ComponentScope): void
    /**
     * Sets the sorting score of this component.
     * @param score the given sorting score
     */
    setSortScore(score: number): void
    setSourcePkgname(spkgname: string): void
    /**
     * Set a short description for this component.
     * @param value The summary
     * @param locale The locale the used for this value, or %NULL to use the current active one.
     */
    setSummary(value: string, locale: string | null): void
    setValueFlags(flags: ValueFlags): void
    /**
     * Returns a string identifying this component.
     * (useful for debugging)
     * @returns A descriptive string
     */
    toString(): string | null
    /**
     * Serialize this component into an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to serialize components.
     * @param context an #AsContext instance.
     * @returns %TRUE on success.
     */
    toXmlData(context: Context): string | null

    // Class property signals of AppStream-1.0.AppStream.Component

    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::developer-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::developer-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::developer-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::developer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::developer-name", ...args: any[]): void
    connect(sigName: "notify::icons", callback: (...args: any[]) => void): number
    on(sigName: "notify::icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icons", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::keywords", callback: (...args: any[]) => void): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keywords", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pkgnames", callback: (...args: any[]) => void): number
    on(sigName: "notify::pkgnames", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pkgnames", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pkgnames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pkgnames", ...args: any[]): void
    connect(sigName: "notify::project-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::project-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::project-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::project-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::project-group", ...args: any[]): void
    connect(sigName: "notify::project-license", callback: (...args: any[]) => void): number
    on(sigName: "notify::project-license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::project-license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::project-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::project-license", ...args: any[]): void
    connect(sigName: "notify::screenshots", callback: (...args: any[]) => void): number
    on(sigName: "notify::screenshots", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screenshots", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screenshots", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urls", ...args: any[]): void
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

class Component extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Component

    static name: string

    // Constructors of AppStream-1.0.AppStream.Component

    constructor(config?: Component.ConstructorProperties) 
    /**
     * Creates a new #AsComponent.
     * @constructor 
     * @returns a new #AsComponent
     */
    constructor() 
    /**
     * Creates a new #AsComponent.
     * @constructor 
     * @returns a new #AsComponent
     */
    static new(): Component
    _init(config?: Component.ConstructorProperties): void
}

module ContentRating {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ContentRating {

    // Own properties of AppStream-1.0.AppStream.ContentRating

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.ContentRating

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.ContentRating

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
     * Gets the value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
     * @returns the #AsContentRatingValue, or %AS_CONTENT_RATING_VALUE_UNKNOWN
     */
    getValue(id: string): ContentRatingValue
    /**
     * Sets the content rating kind.
     * @param kind the rating kind, e.g. "oars-1.0"
     */
    setKind(kind: string): void
    /**
     * Sets the value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
     * @param value A #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     */
    setValue(id: string, value: ContentRatingValue): void

    // Class property signals of AppStream-1.0.AppStream.ContentRating

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

    // Own properties of AppStream-1.0.AppStream.ContentRating

    static name: string

    // Constructors of AppStream-1.0.AppStream.ContentRating

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
     * @returns a %NULL-terminated    array of IDs, to be freed with g_free() (the element values are owned by    libappstream and must not be freed)
     */
    static getAllRatingIds(): string[]
}

module Context {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Context {

    // Own properties of AppStream-1.0.AppStream.Context

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Context

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Context

    getFilename(): string
    getFormatVersion(): FormatVersion
    getLocale(): string
    getLocaleAllEnabled(): boolean
    getMediaBaseurl(): string
    getOrigin(): string
    getPriority(): number
    getStyle(): FormatStyle
    hasMediaBaseurl(): boolean
    /**
     * Sets the file name we are loading data from.
     * @param fname the new file name.
     */
    setFilename(fname: string): void
    /**
     * Sets the AppStream format version.
     * @param ver the new format version.
     */
    setFormatVersion(ver: FormatVersion): void
    /**
     * Sets the active locale.
     * @param value the new value.
     */
    setLocale(value: string): void
    /**
     * Sets the media base URL.
     * @param value the new value.
     */
    setMediaBaseurl(value: string): void
    /**
     * Sets the data origin.
     * @param value the new value.
     */
    setOrigin(value: string): void
    /**
     * Sets the data priority.
     * @param priority the new priority.
     */
    setPriority(priority: number): void
    /**
     * Sets the AppStream document style.
     * @param style the new document style.
     */
    setStyle(style: FormatStyle): void

    // Class property signals of AppStream-1.0.AppStream.Context

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

class Context extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Context

    static name: string

    // Constructors of AppStream-1.0.AppStream.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Creates a new #AsContext.
     * @constructor 
     * @returns an #AsContext
     */
    constructor() 
    /**
     * Creates a new #AsContext.
     * @constructor 
     * @returns an #AsContext
     */
    static new(): Context
    _init(config?: Context.ConstructorProperties): void
}

module DistroDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DistroDetails {

    // Own properties of AppStream-1.0.AppStream.DistroDetails

    readonly homepage: string | null
    readonly id: string | null
    readonly name: string | null
    readonly version: string | null
    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.DistroDetails

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.DistroDetails

    getBool(key: string, defaultVal: boolean): boolean
    getCid(): string
    getHomepage(): string
    getId(): string
    getName(): string
    getStr(key: string): string | null
    getVersion(): string

    // Class property signals of AppStream-1.0.AppStream.DistroDetails

    connect(sigName: "notify::homepage", callback: (...args: any[]) => void): number
    on(sigName: "notify::homepage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homepage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homepage", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

class DistroDetails extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.DistroDetails

    static name: string

    // Constructors of AppStream-1.0.AppStream.DistroDetails

    constructor(config?: DistroDetails.ConstructorProperties) 
    /**
     * Creates a new instance of #AsDistroDetails.
     * @constructor 
     * @returns a #AsDistroDetails.
     */
    constructor() 
    /**
     * Creates a new instance of #AsDistroDetails.
     * @constructor 
     * @returns a #AsDistroDetails.
     */
    static new(): DistroDetails
    _init(config?: DistroDetails.ConstructorProperties): void
}

module Icon {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Icon {

    // Own properties of AppStream-1.0.AppStream.Icon

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Icon

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Icon

    getFilename(): string
    getHeight(): number
    /**
     * Gets the icon kind.
     * @returns the #AsIconKind
     */
    getKind(): IconKind
    getName(): string
    getScale(): number
    /**
     * Gets the icon URL, pointing at a remote location. HTTPS and FTP urls are allowed.
     * This property is only set for icons of type %AS_ICON_KIND_REMOTE
     * @returns the URL
     */
    getUrl(): string
    getWidth(): number
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
     * @param kind the #AsIconKind, e.g. %AS_ICON_KIND_CACHED.
     */
    setKind(kind: IconKind): void
    /**
     * Sets the stock name or basename to use for the icon.
     * @param name the icon stock name, e.g. "gwenview"
     */
    setName(name: string): void
    /**
     * Sets the icon scaling factor used for HiDPI displays.
     * @param scale the icon scaling factor.
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

    // Class property signals of AppStream-1.0.AppStream.Icon

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

    // Own properties of AppStream-1.0.AppStream.Icon

    static name: string

    // Constructors of AppStream-1.0.AppStream.Icon

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
}

module Image {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Image {

    // Own properties of AppStream-1.0.AppStream.Image

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Image

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Image

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
     * Get locale for this image.
     * @returns Locale string
     */
    getLocale(): string
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
     * Sets the locale for this image.
     * @param locale the locale string.
     */
    setLocale(locale: string): void
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

    // Class property signals of AppStream-1.0.AppStream.Image

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

    // Own properties of AppStream-1.0.AppStream.Image

    static name: string

    // Constructors of AppStream-1.0.AppStream.Image

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
}

module Issue {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Issue {

    // Own properties of AppStream-1.0.AppStream.Issue

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Issue

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Issue

    /**
     * Gets the issue ID (usually a bug number or CVE ID)
     * @returns the ID.
     */
    getId(): string
    /**
     * Gets the issue type.
     * @returns the #AsIssueKind
     */
    getKind(): IssueKind
    /**
     * Gets the URL associacted with this issue, usually
     * referencing a bug report or issue description.
     * @returns the URL.
     */
    getUrl(): string
    /**
     * Sets the issue ID.
     * @param id the new ID.
     */
    setId(id: string): void
    /**
     * Sets the issue type.
     * @param kind the #AsIssueKind, e.g. %AS_ISSUE_KIND_SHA256.
     */
    setKind(kind: IssueKind): void
    /**
     * Sets an URL describing this issue.
     * @param url the new URL.
     */
    setUrl(url: string): void

    // Class property signals of AppStream-1.0.AppStream.Issue

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

class Issue extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Issue

    static name: string

    // Constructors of AppStream-1.0.AppStream.Issue

    constructor(config?: Issue.ConstructorProperties) 
    /**
     * Creates a new #AsIssue.
     * @constructor 
     * @returns an #AsIssue
     */
    constructor() 
    /**
     * Creates a new #AsIssue.
     * @constructor 
     * @returns an #AsIssue
     */
    static new(): Issue
    _init(config?: Issue.ConstructorProperties): void
}

module Launchable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Launchable {

    // Own properties of AppStream-1.0.AppStream.Launchable

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Launchable

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Launchable

    /**
     * Add a new launchable entry.
     * @param entry 
     */
    addEntry(entry: string): void
    /**
     * Get an array of launchable entries.
     * @returns An string list of launch entries.
     */
    getEntries(): string[]
    /**
     * The launch system for the entries this #AsLaunchable
     * object stores.
     * @returns an enum of type #AsLaunchableKind
     */
    getKind(): LaunchableKind
    /**
     * Set the launch system for the entries this #AsLaunchable
     * object stores.
     * @param kind the new #AsLaunchableKind
     */
    setKind(kind: LaunchableKind): void

    // Class property signals of AppStream-1.0.AppStream.Launchable

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

    // Own properties of AppStream-1.0.AppStream.Launchable

    static name: string

    // Constructors of AppStream-1.0.AppStream.Launchable

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
}

module Metadata {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Metadata {

    // Own properties of AppStream-1.0.AppStream.Metadata

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Metadata

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Metadata

    /**
     * Add an #AsComponent to the list of components.
     * This can be used to add multiple components in order to
     * produce a distro-XML AppStream metadata file.
     * @param cpt 
     */
    addComponent(cpt: Component): void
    clearComponents(): void
    /**
     * Convert an #AsComponent to metainfo data.
     * This will always be XML, YAML is no valid format for metainfo files.
     * 
     * The amount of localization included in the metadata depends on how the #AsComponent
     * was initially loaded and whether it contains data for all locale.
     * 
     * The first #AsComponent added to the internal list will be transformed.
     * In case no component is present, %NULL is returned.
     * @param format The format to use (XML or YAML)
     * @returns A string containing the XML metadata. Free with g_free()
     */
    componentToMetainfo(format: FormatKind): string | null
    /**
     * Serialize all #AsComponent instances into AppStream
     * catalog metadata.
     * %NULL is returned if there is nothing to serialize.
     * @param format The format to serialize the data to (XML or YAML).
     * @returns A string containing the YAML or XML data. Free with g_free()
     */
    componentsToCatalog(format: FormatKind): string | null
    /**
     * Deprecated, use %as_metadata_components_to_catalog instead.
     * @param format The format to serialize the data to (XML or YAML).
     * @returns A string containing the YAML or XML data. Free with g_free()
     */
    componentsToCollection(format: FormatKind): string | null
    getArchitecture(): string
    /**
     * Gets the #AsComponent which has been parsed from the XML.
     * If the AppStream XML contained multiple components, return the first
     * component that has been parsed.
     * @returns An #AsComponent or %NULL
     */
    getComponent(): Component | null
    getComponents(): Component[]
    /**
     * Get the metadata parsing mode.
     */
    getFormatStyle(): FormatStyle
    getFormatVersion(): FormatVersion
    /**
     * Gets the current active locale for parsing metadata,
     * or "ALL" if all locales are read.
     * @returns Locale used for metadata parsing.
     */
    getLocale(): string
    getMediaBaseurl(): string
    getOrigin(): string
    /**
     * Get the metadata parse flags.
     */
    getParseFlags(): ParseFlags
    getUpdateExisting(): boolean
    getWriteHeader(): boolean
    /**
     * Parses any AppStream metadata into one or more #AsComponent instances.
     * @param data Metadata describing one or more software components as null-terminated string.
     * @param format The format of the data (XML or YAML).
     * @returns %TRUE on success.
     */
    parse(data: string, format: FormatKind): boolean
    /**
     * Parses any AppStream metadata into one or more #AsComponent instances.
     * @param bytes Metadata describing one or more software components.
     * @param format The format of the data (XML or YAML).
     * @returns %TRUE on success.
     */
    parseBytes(bytes: any, format: FormatKind): boolean
    /**
     * Parses XDG Desktop Entry metadata and adds it to the list of parsed entities.
     * 
     * Please note that not every desktop-entry file will result in a valid component
     * being generated, even if parsing succeeds without error (The desktiop-entry file
     * may be valid but not generate a component on purpose).
     * @param data Metadata describing one or more software components.
     * @param cid The component-id the new #AsComponent should have.
     * @returns %TRUE if the file was parsed without error.
     */
    parseDesktopData(data: string, cid: string): boolean
    /**
     * Parses an AppStream upstream metadata file.
     * 
     * If `file` does not exist, %G_IO_ERROR_NOT_FOUND will be returned. Other
     * #GIOErrors and #AsMetadataErrors may be returned as appropriate.
     * @param file #GFile for the upstream metadata
     * @param format The format the data is in, or %AS_FORMAT_KIND_UNKNOWN if not known.
     * @returns %TRUE if the file was parsed without error.
     */
    parseFile(file: Gio.File, format: FormatKind): boolean
    /**
     * Parses any AppStream release metadata into #AsRelease objects.
     * @param bytes Metadata describing release notes.
     * @returns A list of releases or %NULL on error.
     */
    parseReleasesBytes(bytes: any): Release[] | null
    /**
     * Parses any AppStream release metadata into #AsRelease objects
     * using the provided file.
     * @param file #GFile for the release metadata
     * @returns A list of releases or %NULL on error.
     */
    parseReleasesFile(file: Gio.File): Release[] | null
    /**
     * Convert a list of #Asrelease entities into a release metadata XML representation.
     * @param releases the list of #Asrelease to convert.
     * @returns The XML representation or %NULL on error.
     */
    releasesToData(releases: Release[]): string | null
    /**
     * Serialize all #AsComponent instances to XML or YAML metadata and save
     * the data to a file.
     * An existing file at the same location will be overridden.
     * @param fname The filename for the new metadata file.
     * @param format 
     * @returns %TRUE if the file was written without error.
     */
    saveCatalog(fname: string, format: FormatKind): boolean
    /**
     * Deprecated, use %as_metadata_save_catalog instead.
     * @param fname The filename for the new metadata file.
     * @param format 
     * @returns %TRUE if the file was written without error.
     */
    saveCollection(fname: string, format: FormatKind): boolean
    /**
     * Serialize #AsComponent instance to XML and save it to file.
     * An existing file at the same location will be overridden.
     * @param fname The filename for the new metadata file.
     * @param format The format to save this file in. Only XML is supported at time.
     * @returns %TRUE if the file was written without error.
     */
    saveMetainfo(fname: string, format: FormatKind): boolean
    /**
     * Set the architecture the components in this metadata belong to.
     * @param arch an architecture string.
     */
    setArchitecture(arch: string): void
    /**
     * Sets the current metadata parsing mode.
     * @param mode the #AsFormatStyle.
     */
    setFormatStyle(mode: FormatStyle): void
    /**
     * Set the current AppStream format version that we should generate data for
     * or be able to read.
     * @param version the AppStream metadata format version as #AsFormatVersion.
     */
    setFormatVersion(version: FormatVersion): void
    /**
     * Sets the locale which should be read when processing metadata.
     * All other locales are ignored, which increases parsing speed and
     * reduces memory usage.
     * If you set the locale to "ALL", all locales will be read.
     * @param locale the locale.
     */
    setLocale(locale: string): void
    /**
     * Set the base URL for all media links referenced in the metadata,
     * or %NULL if every component has absolute URLs.
     * @param url the base URL.
     */
    setMediaBaseurl(url: string): void
    /**
     * Set the origin of AppStream distro metadata
     * @param origin the origin of AppStream distro metadata.
     */
    setOrigin(origin: string): void
    /**
     * Sets the current metadata parse flags.
     * @param flags the #AsParseFlags.
     */
    setParseFlags(flags: ParseFlags): void
    /**
     * If set to %TRUE, the parser will not create new components but
     * instead update existing components in the pool with new metadata.
     * 
     * NOTE: Right now, this feature is only implemented for metainfo XML parsing!
     * @param update A boolean value.
     */
    setUpdateExisting(update: boolean): void
    /**
     * If set to %TRUE, tehe metadata writer will omit writing a DEP-11
     * header document when in YAML mode, and will not write a root components node
     * when writing XML data.
     * Please keep in mind that this will create an invalid DEP-11 YAML AppStream
     * catalog metadata file, and an invalid XML file.
     * This parameter should only be changed e.g. by the appstream-generator tool.
     * 
     * NOTE: Right now, this feature is only implemented for YAML!
     * @param wheader A boolean value.
     */
    setWriteHeader(wheader: boolean): void

    // Class property signals of AppStream-1.0.AppStream.Metadata

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

class Metadata extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Metadata

    static name: string

    // Constructors of AppStream-1.0.AppStream.Metadata

    constructor(config?: Metadata.ConstructorProperties) 
    /**
     * Creates a new #AsMetadata.
     * @constructor 
     * @returns a #AsMetadata
     */
    constructor() 
    /**
     * Creates a new #AsMetadata.
     * @constructor 
     * @returns a #AsMetadata
     */
    static new(): Metadata
    _init(config?: Metadata.ConstructorProperties): void
    /**
     * Guesses the AppStream metadata style (metainfo or catalog) based on
     * the filename.
     * @param filename a file name
     * @returns An #AsFormatStyle, e.g. %AS_FORMAT_STYLE_METAINFO.
     */
    static fileGuessStyle(filename: string): FormatStyle
}

module Pool {

    // Signal callback interfaces

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

interface Pool {

    // Own properties of AppStream-1.0.AppStream.Pool

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Pool

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Pool

    /**
     * Register a new component in the AppStream metadata pool.
     * @param cpt The #AsComponent to add to the pool.
     * @returns %TRUE if the new component was successfully added to the pool.
     */
    addComponent(cpt: Component): boolean
    /**
     * Register a set of components with the pool temporarily.
     * Data from components added like this will not be cached.
     * @param cpts Array of components to add to the pool.
     * @returns %TRUE if the new components were successfully added to the pool.
     */
    addComponents(cpts: Component[]): boolean
    /**
     * Add an additional non-standard location to the metadata pool where metadata will be read from.
     * If `directory` contains a "xml", "xmls", "yaml" or "icons" subdirectory (or all of them),
     * those paths will be added to the search paths instead.
     * @param directory An existing filesystem location.
     * @param formatStyle The expected format style of the metadata, e.g. %AS_FORMAT_STYLE_CATALOG
     */
    addExtraDataLocation(directory: string, formatStyle: FormatStyle): void
    /**
     * Convenience function to add one or multiple #AsPoolFlags to
     * the flag set of this data pool.
     * @param flags The #AsPoolFlags to add.
     */
    addFlags(flags: PoolFlags): void
    /**
     * Add a location for the data pool to read data from.
     * If `directory` contains a "xml", "xmls", "yaml" or "icons" subdirectory (or all of them),
     * those paths will be added to the search paths instead.
     * @param directory An existing filesystem location.
     */
    addMetadataLocation(directory: string): void
    /**
     * Splits up a string into an array of tokens that are suitable for searching.
     * This includes stripping whitespaces, casefolding the terms and removing greylist words.
     * 
     * This function is usually called automatically when needed, you will only need to
     * run it explicitly when you need to check which search tokens the pool will actually
     * use internally for a given phrase.
     * @param search the (user-provided) search phrase.
     * @returns (array zero-terminated=1): Valid tokens to search for, or %NULL for error
     */
    buildSearchTokens(search: string): string[]
    /**
     * Remove all metadata from the pool, data will be reloaded
     * once %as_pool_load is called again.
     */
    clear(): void
    /**
     * Remove all metadata from the pool.
     */
    clear2(): boolean
    /**
     * Remove all metadata locations from the list of watched locations.
     */
    clearMetadataLocations(): void
    /**
     * Get the #AsCacheFlags for this data pool.
     */
    getCacheFlags(): CacheFlags
    /**
     * Gets the location of the session cache.
     * @returns Location of the cache, or %NULL if unknown.
     */
    getCacheLocation(): string
    /**
     * Find components that are provided by a bundle with a specific ID by its prefix.
     * For example, given a AS_BUNDLE_KIND_FLATPAK and a bundle_id "org.kde.dolphin/",
     * it will list all the components that bundle dolphin. If the bundle_id is
     * "org.kde.dolphin/x86_64" it will give those with also the architecture.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param kind The kind of the bundle we are looking for
     * @param bundleId The bundle ID to match, as specified in #AsBundle
     * @param matchPrefix %TRUE to match the ID by prefix, %FALSE to perform an absolute match.
     * @returns an array of #AsComponent objects.
     */
    getComponentsByBundleId(kind: BundleKind, bundleId: string, matchPrefix: boolean): Component[]
    /**
     * Return a list of components which are in one of the categories.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param categories An array of XDG categories to include.
     * @returns an array of #AsComponent objects which have been found.
     */
    getComponentsByCategories(categories: string[]): Component[]
    /**
     * Find components extending the component with the given ID. They can then be registered to the
     * #AsComponent they extend via %as_component_add_addon.
     * If the %AS_POOL_FLAG_RESOLVE_ADDONS pool flag is set, addons are automatically resolved and
     * this explicit function is not needed, but overall query time will be increased (so only use
     * this flag if you will be resolving addon information later anyway).
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param extendedId The ID of the component to search extensions for.
     * @returns an array of #AsComponent objects.
     */
    getComponentsByExtends(extendedId: string): Component[]
    /**
     * Get a specific component by its ID.
     * This function may contain multiple results if we have
     * data describing this component from multiple scopes/origin types.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param cid The AppStream-ID to look for.
     * @returns An #AsComponent
     */
    getComponentsById(cid: string): Component[]
    /**
     * Return a list of all components in the pool which are of a certain kind.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param kind An #AsComponentKind.
     * @returns an array of #AsComponent objects which have been found.
     */
    getComponentsByKind(kind: ComponentKind): Component[]
    /**
     * Find components in the AppStream data pool which provide a specific launchable.
     * See #AsLaunchable for details on launchables, or refer to the AppStream specification.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param kind An #AsLaunchableKind
     * @param id The ID of the launchable.
     * @returns an array of #AsComponent objects which have been found.
     */
    getComponentsByLaunchable(kind: LaunchableKind, id: string): Component[]
    /**
     * Find components in the AppStream data pool which provide a certain item.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param kind An #AsProvidesKind
     * @param item The value of the provided item.
     * @returns an array of #AsComponent objects which have been found.
     */
    getComponentsByProvidedItem(kind: ProvidedKind, item: string): Component[]
    /**
     * Get a list of found components.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @returns an array of #AsComponent instances.
     */
    getComponents(): Component[]
    /**
     * Get the #AsPoolFlags for this data pool.
     */
    getFlags(): PoolFlags
    /**
     * Gets the currently used locale.
     * @returns Locale used for metadata parsing.
     */
    getLocale(): string
    /**
     * Builds an index of all found components in the watched locations.
     * The function will try to get as much data into the pool as possible, so even if
     * the update completes with %FALSE, it might still have added components to the pool.
     * 
     * The function will load from all possible data sources, preferring caches if they
     * are up to date.
     * @param cancellable a #GCancellable.
     * @returns %TRUE if update completed without error.
     */
    load(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously loads data from all registered locations.
     * Equivalent to as_pool_load() (but asynchronous)
     * @param cancellable a #GCancellable.
     * @param callback A #GAsyncReadyCallback
     */
    loadAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Load AppStream metadata from a cache file.
     * @param fname Filename of the cache file to load into the pool.
     */
    loadCacheFile(fname: string): boolean
    /**
     * Retrieve the result of as_pool_load_async().
     * @param result A #GAsyncResult
     * @returns %TRUE for success
     */
    loadFinish(result: Gio.AsyncResult): boolean
    /**
     * Update the AppStream cache. There is normally no need to call this function manually, because cache updates are handled
     * transparently in the background.
     * @param force Enforce refresh, even if source data has not changed.
     * @returns %TRUE on success, %FALSE on error.
     */
    refreshCache(force: boolean): boolean
    /**
     * Convenience function to remove one or multiple #AsPoolFlags from
     * the flag set of this data pool.
     * @param flags The #AsPoolFlags to remove.
     */
    removeFlags(flags: PoolFlags): void
    /**
     * Remove all explicitly added metadata locations.
     */
    resetExtraDataLocations(): void
    /**
     * Serialize AppStream metadata to a cache file.
     * @param fname Filename of the cache file the pool contents should be dumped to.
     */
    saveCacheFile(fname: string): boolean
    /**
     * Search for a list of components matching the search term.
     * The list will be ordered by match score.
     * 
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param search A search string
     * @returns an array of the found #AsComponent objects.
     */
    search(search: string): Component[]
    /**
     * Set the #AsCacheFlags for this data pool.
     * @param flags The new #AsCacheFlags.
     */
    setCacheFlags(flags: CacheFlags): void
    /**
     * Sets the name of the cache file. If `fname` is ":memory", the cache will be
     * kept in memory, if it is set to ":temporary", the cache will be stored in
     * a temporary directory. In any other case, the given filename is used.
     * @param fname Filename of the cache file, or special identifier.
     */
    setCacheLocation(fname: string): void
    /**
     * Set the #AsPoolFlags for this data pool.
     * @param flags The new #AsPoolFlags.
     */
    setFlags(flags: PoolFlags): void
    /**
     * This is a convenience function that enables or disables loading of metadata
     * from well-known standard locations by configuring the #AsPoolFlags of this
     * #AsPool accordingly.
     * Data affected by this includes the OS data catalog, metainfo, desktop-entry
     * files and Flatpak data.
     * If you need more fine-grained control, set the #AsPoolFlags explicitly.
     * @param enabled Whether loading of data from standard locations should be enabled.
     */
    setLoadStdDataLocations(enabled: boolean): void
    /**
     * Sets the current locale which should be used when parsing metadata.
     * @param locale the locale.
     */
    setLocale(locale: string): void

    // Own virtual methods of AppStream-1.0.AppStream.Pool

    changed(): void

    // Own signals of AppStream-1.0.AppStream.Pool

    connect(sigName: "changed", callback: Pool.ChangedSignalCallback): number
    on(sigName: "changed", callback: Pool.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Pool.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Pool.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of AppStream-1.0.AppStream.Pool

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

class Pool extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Pool

    static name: string

    // Constructors of AppStream-1.0.AppStream.Pool

    constructor(config?: Pool.ConstructorProperties) 
    /**
     * Creates a new #AsPool.
     * @constructor 
     * @returns a #AsPool
     */
    constructor() 
    /**
     * Creates a new #AsPool.
     * @constructor 
     * @returns a #AsPool
     */
    static new(): Pool
    _init(config?: Pool.ConstructorProperties): void
}

module Provided {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Provided {

    // Own properties of AppStream-1.0.AppStream.Provided

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Provided

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Provided

    /**
     * Add a new provided item.
     * @param item 
     */
    addItem(item: string): void
    /**
     * Get an array of provided data.
     * @returns An string list of provided items.
     */
    getItems(): string[]
    /**
     * The kind of items this #AsProvided object stores.
     * @returns an enum of type #AsProvidedKind
     */
    getKind(): ProvidedKind
    /**
     * Check if the current #AsProvided contains an item
     * of the given name.
     * @param item the name of a provided item, e.g. "audio/x-vorbis" (in case the provided kind is a mimetype)
     * @returns %TRUE if found.
     */
    hasItem(item: string): boolean
    /**
     * Set the kind of items this #AsProvided object stores.
     * @param kind the new #AsProvidedKind
     */
    setKind(kind: ProvidedKind): void

    // Class property signals of AppStream-1.0.AppStream.Provided

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

class Provided extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Provided

    static name: string

    // Constructors of AppStream-1.0.AppStream.Provided

    constructor(config?: Provided.ConstructorProperties) 
    /**
     * Creates a new #AsProvided.
     * @constructor 
     * @returns a #AsProvided
     */
    constructor() 
    /**
     * Creates a new #AsProvided.
     * @constructor 
     * @returns a #AsProvided
     */
    static new(): Provided
    _init(config?: Provided.ConstructorProperties): void
}

module Relation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Relation {

    // Own properties of AppStream-1.0.AppStream.Relation

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Relation

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Relation

    /**
     * The version comparison type.
     * @returns an enum of type #AsRelationCompare
     */
    getCompare(): RelationCompare
    /**
     * Gets the display side kind, in case this item is of
     * kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH
     * @returns a #AsDisplaySideKind or %AS_DISPLAY_SIDE_KIND_UNKNOWN
     */
    getDisplaySideKind(): DisplaySideKind
    /**
     * The kind of the item of this #AsRelation.
     * @returns an enum of type #AsRelationItemKind
     */
    getItemKind(): RelationItemKind
    /**
     * The type (and thereby strength) of this #AsRelation.
     * @returns an enum of type #AsRelationKind
     */
    getKind(): RelationKind
    /**
     * Deprecated method. Use %as_relation_get_value_str instead.
     */
    getValue(): string
    /**
     * Get the value of this #AsRelation item as #AsControlKind if the
     * type of this relation is %AS_RELATION_ITEM_KIND_CONTROL.
     * Otherwise return %AS_CONTROL_KIND_UNKNOWN
     * @returns a #AsControlKind or %AS_CONTROL_KIND_UNKNOWN in case the item is not of the right kind.
     */
    getValueControlKind(): ControlKind
    /**
     * In case this #AsRelation is of kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH,
     * return the #AsDisplayLengthKind.
     * @returns The #AsDisplayLengthKind classification of the current pixel value, or %AS_DISPLAY_LENGTH_KIND_UNKNOWN on error.
     */
    getValueDisplayLengthKind(): DisplayLengthKind
    getValueInt(): number
    /**
     * If this #AsRelation is of kind %AS_RELATION_ITEM_KIND_INTERNET, return the
     * minimum bandwidth requirement of the component, if set.
     * 
     * If the relation is of a different kind, or the requirement isn’t set, this
     * returns `0`.
     * @returns The minimum bandwidth requirement, in Mbit/s.
     */
    getValueInternetBandwidth(): number
    /**
     * Get the value of this #AsRelation item as #AsInternetKind if the
     * type of this relation is %AS_RELATION_ITEM_KIND_INTERNET.
     * Otherwise return %AS_INTERNET_KIND_UNKNOWN
     * @returns a #AsInternetKind or %AS_INTERNET_KIND_UNKNOWN in case the item is not of the right kind.
     */
    getValueInternetKind(): InternetKind
    /**
     * In case this #AsRelation is of kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH,
     * return the set logical pixel amount.
     * @returns The logical pixel amount for this display length, value <= 0 on error.
     */
    getValuePx(): number
    getValueStr(): string
    getVersion(): string
    /**
     * Test if this relation is satisfied on the current system or with the
     * provided #AsPool. If no #AsSystemInfo is found, a temporary one will be
     * created. If no #AsPool is provided, any component relationships can not
     * be validated and an error will be thrown.
     * @param systemInfo an #AsSystemInfo to use for system information.
     * @param pool an #AsPool to find component dependencies in.
     * @returns %AS_CHECK_RESULT_TRUE if the system satisfies the relation, %AS_CHECK_RESULT_ERROR on error
     */
    isSatisfied(systemInfo: SystemInfo | null, pool: Pool | null): [ /* returnType */ CheckResult, /* message */ string ]
    /**
     * Set the version comparison type of this #AsRelation.
     * @param compare the new #AsRelationCompare
     */
    setCompare(compare: RelationCompare): void
    /**
     * Sets the display side kind, in case this item is of
     * kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH
     * @param kind the new #AsDisplaySideKind.
     */
    setDisplaySideKind(kind: DisplaySideKind): void
    /**
     * Set the kind of the item this #AsRelation is about.
     * @param kind the new #AsRelationItemKind
     */
    setItemKind(kind: RelationItemKind): void
    /**
     * Set the kind of this #AsRelation.
     * @param kind the new #AsRelationKind
     */
    setKind(kind: RelationKind): void
    /**
     * Deprecated method. Use %as_relation_set_value_str instead.
     * @param value the new value.
     */
    setValue(value: string): void
    /**
     * Set relation item value from an #AsControlKind.
     * @param kind an #AsControlKind
     */
    setValueControlKind(kind: ControlKind): void
    /**
     * Sets the item value as display length placeholder value. This requires the relation
     * to be of item kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH.
     * @param kind the #AsDisplayLengthKind
     */
    setValueDisplayLengthKind(kind: DisplayLengthKind): void
    /**
     * Sets the item value as an integer, if the given item type
     * of this #AsRelation permits integer values.
     * @param value the new value.
     */
    setValueInt(value: number): void
    setValueInternetBandwidth(bandwidthMbitps: number): void
    /**
     * Set relation item value from an #AsInternetKind.
     * @param kind an #AsInternetKind
     */
    setValueInternetKind(kind: InternetKind): void
    /**
     * Sets the item value as logical pixel count. This requires the relation
     * to be of item kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH.
     * @param logicalPx logical pixel count.
     */
    setValuePx(logicalPx: number): void
    /**
     * Sets the item value as a string, if the given item type
     * of this #AsRelation permits string values.
     * @param value the new value.
     */
    setValueStr(value: string): void
    /**
     * Sets the item version.
     * @param version the new version.
     */
    setVersion(version: string): void
    /**
     * Tests whether the version number of this #AsRelation is fulfilled by
     * `version`. Whether the given version is sufficient to fulfill the version
     * requirement of this #AsRelation is determined by its comparison resraint.
     * @param version a version number, e.g. `1.2.0`
     * @returns %TRUE if the version from the parameter is sufficient.
     */
    versionCompare(version: string): boolean

    // Class property signals of AppStream-1.0.AppStream.Relation

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

class Relation extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Relation

    static name: string

    // Constructors of AppStream-1.0.AppStream.Relation

    constructor(config?: Relation.ConstructorProperties) 
    /**
     * Creates a new #AsRelation.
     * @constructor 
     * @returns a #AsRelation
     */
    constructor() 
    /**
     * Creates a new #AsRelation.
     * @constructor 
     * @returns a #AsRelation
     */
    static new(): Relation
    _init(config?: Relation.ConstructorProperties): void
}

module Release {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Release {

    // Own properties of AppStream-1.0.AppStream.Release

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Release

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Release

    /**
     * Add an artifact (binary / source download) for this release.
     * @param artifact The #AsArtifact.
     */
    addArtifact(artifact: Artifact): void
    /**
     * Add a checksum for the file associated with this release.
     * @param cs The #AsChecksum.
     */
    addChecksum(cs: Checksum): void
    /**
     * Add information about a (resolved) issue to this release.
     * @param issue The #AsIssue.
     */
    addIssue(issue: Issue): void
    /**
     * Adds a release location.
     * @param location An URL of the download location
     */
    addLocation(location: string): void
    /**
     * Get the current active locale, which
     * is used to get localized messages.
     * @returns the current active locale
     */
    getActiveLocale(): string
    /**
     * Get a list of all downloadable artifacts that are associated with
     * this release.
     * @returns an array of #AsArtifact objects.
     */
    getArtifacts(): Artifact[]
    /**
     * Gets the release checksum
     * @param kind 
     * @returns an #AsChecksum, or %NULL for not set or invalid
     */
    getChecksum(kind: ChecksumKind): Checksum | null
    /**
     * Get a list of all checksums we have for this release.
     * @returns an array of #AsChecksum objects.
     */
    getChecksums(): Checksum[]
    /**
     * Gets the release date.
     * @returns The date in ISO8601 format.
     */
    getDate(): string | null
    /**
     * Gets the end-of-life date for this release.
     * @returns The EOL date in ISO8601 format.
     */
    getDateEol(): string | null
    /**
     * Gets the release description markup for a given locale.
     * @returns markup, or %NULL for not set or invalid
     */
    getDescription(): string | null
    /**
     * Get a list of all issues resolved by this release.
     * @returns an array of #AsIssue objects.
     */
    getIssues(): Issue[]
    /**
     * Gets the type of the release.
     * (development or stable release)
     */
    getKind(): ReleaseKind
    /**
     * Gets the release locations, typically URLs.
     * @returns list of locations
     */
    getLocations(): string[]
    /**
     * Gets the release size.
     * @param kind a #AsSizeKind
     * @returns The size of the given kind of this release.
     */
    getSize(kind: SizeKind): number
    /**
     * Gets the release timestamp.
     * @returns timestamp, or 0 for unset
     */
    getTimestamp(): number
    /**
     * Gets the UNIX timestamp for the date when this
     * release is out of support (end-of-life).
     * @returns UNIX timestamp, or 0 for unset or invalid.
     */
    getTimestampEol(): number
    /**
     * Gets the urgency of the release
     * (showing how important it is to update to a more recent release)
     * @returns #AsUrgencyKind, or %AS_URGENCY_KIND_UNKNOWN for not set
     */
    getUrgency(): UrgencyKind
    /**
     * Gets an URL.
     * @param urlKind the URL kind, e.g. %AS_RELEASE_URL_KIND_DETAILS.
     * @returns string, or %NULL if unset
     */
    getUrl(urlKind: ReleaseUrlKind): string | null
    /**
     * Gets the release version.
     * @returns string, or %NULL for not set or invalid
     */
    getVersion(): string | null
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * If the #AsComponent linking this #AsRelease was fetched
     * from a localized database, usually only
     * one locale is available.
     * @param locale the locale. e.g. "en_GB".
     */
    setActiveLocale(locale: string): void
    /**
     * Sets the release date.
     * @param date the date in ISO8601 format.
     */
    setDate(date: string): void
    /**
     * Sets the end-of-life date for this release.
     * @param date the EOL date in ISO8601 format.
     */
    setDateEol(date: string): void
    /**
     * Sets the description release markup.
     * @param description the description markup.
     * @param locale the locale, or %NULL. e.g. "en_GB".
     */
    setDescription(description: string, locale: string | null): void
    /**
     * Sets the release kind to distinguish between end-user ready
     * stable releases and development prereleases..
     * @param kind the #AsReleaseKind
     */
    setKind(kind: ReleaseKind): void
    /**
     * Sets the release size for the given kind.
     * @param size a size in bytes, or 0 for unknown
     * @param kind a #AsSizeKind
     */
    setSize(size: number, kind: SizeKind): void
    /**
     * Sets the release timestamp.
     * @param timestamp the timestamp value.
     */
    setTimestamp(timestamp: number): void
    /**
     * Sets the UNIX timestamp for the date when this
     * release is out of support (end-of-life).
     * @param timestamp the timestamp value.
     */
    setTimestampEol(timestamp: number): void
    /**
     * Sets the release urgency.
     * @param urgency the urgency of this release/update (as #AsUrgencyKind)
     */
    setUrgency(urgency: UrgencyKind): void
    /**
     * Sets an URL for this release.
     * @param urlKind the URL kind, e.g. %AS_RELEASE_URL_KIND_DETAILS
     * @param url the full URL.
     */
    setUrl(urlKind: ReleaseUrlKind, url: string): void
    /**
     * Sets the release version.
     * @param version the version string.
     */
    setVersion(version: string): void
    /**
     * Compare the version numbers of two releases.
     * @param rel2 an #AsRelease
     * @returns 1 if @rel1 version is higher than @rel2, 0 if versions are equal, -1 if @rel2 version is higher than @rel1.
     */
    vercmp(rel2: Release): number

    // Class property signals of AppStream-1.0.AppStream.Release

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

    // Own properties of AppStream-1.0.AppStream.Release

    static name: string

    // Constructors of AppStream-1.0.AppStream.Release

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
}

module Review {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of AppStream-1.0.AppStream.Review

        date?: Review | null
        description?: string | null
        flags?: number | null
        id?: string | null
        locale?: string | null
        /**
         * The priority for the review, where positive numbers indicate
         * a better review for the specific user.
         */
        priority?: number | null
        rating?: number | null
        reviewerId?: string | null
        reviewerName?: string | null
        summary?: string | null
        version?: string | null
    }

}

interface Review {

    // Own properties of AppStream-1.0.AppStream.Review

    date: Review
    description: string | null
    flags: number
    id: string | null
    locale: string | null
    /**
     * The priority for the review, where positive numbers indicate
     * a better review for the specific user.
     */
    priority: number
    rating: number
    reviewerId: string | null
    reviewerName: string | null
    summary: string | null
    version: string | null
    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Review

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Review

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

    // Class property signals of AppStream-1.0.AppStream.Review

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
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
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

    // Own properties of AppStream-1.0.AppStream.Review

    static name: string

    // Constructors of AppStream-1.0.AppStream.Review

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

    // Own properties of AppStream-1.0.AppStream.Screenshot

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Screenshot

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Screenshot

    /**
     * Adds an image to the screenshot.
     * @param image a #AsImage instance.
     */
    addImage(image: Image): void
    /**
     * Adds a video to the screenshot.
     * @param video a #AsVideo instance.
     */
    addVideo(video: Video): void
    /**
     * Remove all images associated with this screenshot.
     */
    clearImages(): void
    /**
     * Get the current active locale, which
     * is used to get localized messages.
     */
    getActiveLocale(): string
    /**
     * Gets the image caption
     * @returns the caption
     */
    getCaption(): string
    /**
     * Gets the AsImage closest to the target size. The #AsImage may not actually
     * be the requested size, and the application may have to pad / rescale the
     * image to make it fit.
     * Only images for the current active locale (or fallback, if images are not localized)
     * are considered.
     * @param width target width
     * @param height target height
     * @returns an #AsImage, or %NULL
     */
    getImage(width: number, height: number): Image
    /**
     * Gets the images for this screenshots. Only images valid for the current
     * language are returned. We return all sizes.
     * @returns an array
     */
    getImages(): Image[]
    /**
     * Returns an array of all images we have, regardless of their
     * size and language.
     * @returns an array
     */
    getImagesAll(): Image[]
    /**
     * Gets the screenshot kind.
     * @returns a #AsScreenshotKind
     */
    getKind(): ScreenshotKind
    /**
     * Gets the screenshot media kind.
     * @returns a #AsScreenshotMediaKind
     */
    getMediaKind(): ScreenshotMediaKind
    /**
     * Gets the videos for this screenshots. Only videos valid for the current
     * language selection are returned. We return all sizes.
     * @returns an array
     */
    getVideos(): Video[]
    /**
     * Returns an array of all screencast videos we have, regardless of their
     * size and locale.
     * @returns an array
     */
    getVideosAll(): Video[]
    /**
     * Performs a quick validation on this screenshot
     * @returns TRUE if the screenshot is a complete #AsScreenshot
     */
    isValid(): boolean
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * If the #AsComponent linking this #AsScreenshot was fetched
     * from a localized database, usually only
     * one locale is available.
     * @param locale 
     */
    setActiveLocale(locale: string): void
    /**
     * Sets a caption on the screenshot
     * @param caption the caption text.
     * @param locale 
     */
    setCaption(caption: string, locale: string): void
    /**
     * Sets the screenshot kind.
     * @param kind the #AsScreenshotKind.
     */
    setKind(kind: ScreenshotKind): void

    // Class property signals of AppStream-1.0.AppStream.Screenshot

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

    // Own properties of AppStream-1.0.AppStream.Screenshot

    static name: string

    // Constructors of AppStream-1.0.AppStream.Screenshot

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
}

module Suggested {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Suggested {

    // Own properties of AppStream-1.0.AppStream.Suggested

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Suggested

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Suggested

    /**
     * Add a component id to this suggested object.
     * @param cid The component id to add
     */
    addId(cid: string): void
    /**
     * Get a list of components id that generated the suggestion
     * @returns an array of components id
     */
    getIds(): string[]
    /**
     * Gets the suggested kind.
     * @returns the #AsSuggestedKind
     */
    getKind(): SuggestedKind
    /**
     * Check if the essential properties of this suggestion are
     * populated with useful data.
     * @returns %TRUE if we have useful data.
     */
    isValid(): boolean
    /**
     * Sets the suggested kind.
     * @param kind the #AsSuggestedKind, e.g. %AS_SUGGESTED_KIND_HEURISTIC.
     */
    setKind(kind: SuggestedKind): void

    // Class property signals of AppStream-1.0.AppStream.Suggested

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

class Suggested extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Suggested

    static name: string

    // Constructors of AppStream-1.0.AppStream.Suggested

    constructor(config?: Suggested.ConstructorProperties) 
    /**
     * Creates a new #AsSuggested.
     * @constructor 
     * @returns a new #AsSuggested
     */
    constructor() 
    /**
     * Creates a new #AsSuggested.
     * @constructor 
     * @returns a new #AsSuggested
     */
    static new(): Suggested
    _init(config?: Suggested.ConstructorProperties): void
}

module SystemInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SystemInfo {

    // Own properties of AppStream-1.0.AppStream.SystemInfo

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.SystemInfo

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.SystemInfo

    /**
     * Return a human readable device name for the given modalias.
     * Will return the modalias again if no device name could be found,
     * and returns %NULL on error.
     * If `allow_fallback` is set to %FALSE, this function will return %NULL and error
     * %AS_SYSTEM_INFO_ERROR_NOT_FOUND in case no suitable description could be found.
     * @param modalias the modalias value to resolve (may contain wildcards).
     * @param allowFallback fall back to low-quality data if no better information is available
     * @returns a human-readable device name, or %NULL on error.
     */
    getDeviceNameForModalias(modalias: string, allowFallback: boolean): string | null
    /**
     * Get the current display length for the given side kind.
     * If the display size is unknown, this function will return 0.
     * @param side the #AsDisplaySideKind to select.
     * @returns the display size in logical pixels.
     */
    getDisplayLength(side: DisplaySideKind): number
    /**
     * Get the name of the current kernel, e.g. "Linux"
     * @returns the current OS kernel name
     */
    getKernelName(): string
    /**
     * Get the version of the current kernel, e.g. "6.2.0-2"
     * @returns the current kernel version
     */
    getKernelVersion(): string
    /**
     * Get the current total amount of physical memory in MiB.
     * @returns the current total amount of usable memory in MiB
     */
    getMemoryTotal(): number
    /**
     * Get a list of modaliases for all the hardware on this system that has them.
     * @returns a list of modaliases on the system.
     */
    getModaliases(): string[]
    /**
     * Get the AppStream component ID of the current operating system.
     * @returns the component ID of the current OS.
     */
    getOsCid(): string
    /**
     * Get the homepage URL of the current operating system.
     * @returns the homepage of the current OS.
     */
    getOsHomepage(): string
    /**
     * Get the ID of the current operating system.
     * @returns the current OS ID.
     */
    getOsId(): string
    /**
     * Get the humen-readable name of the current operating system.
     * @returns the name of the current OS.
     */
    getOsName(): string
    /**
     * Get the version string of the current operating system.
     * @returns the version of the current OS.
     */
    getOsVersion(): string
    /**
     * Check if there is a device on this system that matches the given modalias glob.
     * @param modaliasGlob the modalias value to to look for, may contain wildcards.
     * @returns %TRUE if a matching device was found.
     */
    hasDeviceMatchingModalias(modaliasGlob: string): boolean
    /**
     * Test if the current system has a specific user input control method.
     * Returns %AS_CHECK_RESULT_UNKNOWN if we could not test for an input control method,
     * %AS_CHECK_RESULT_ERROR on error and %AS_CHECK_RESULT_FALSE if the control was not found.
     * @param kind the #AsControlKind to test for.
     * @returns %AS_CHECK_RESULT_TRUE if control was found
     */
    hasInputControl(kind: ControlKind): CheckResult
    /**
     * Receive a path in /sys for the devices with the given modalias.
     * @param modalias the modalias value to resolve.
     * @returns the syspath, or %NULL if none was found.
     */
    modaliasToSyspath(modalias: string): string
    /**
     * Set the current display length for the given side kind.
     * The size needs to be in device-independent pixels, see the
     * AppStream documentation for more information:
     * https://freedesktop.org/software/appstream/docs/chap-Metadata.html#tag-relations-display_length
     * @param side the #AsDisplaySideKind to select.
     * @param valueDip the length value in device-independt pixels.
     */
    setDisplayLength(side: DisplaySideKind, valueDip: number): void
    /**
     * Explicitly mark a user input control as present or not present on this system.
     * @param kind the #AsControlKind to set.
     * @param found %TRUE if the control should be marked as found.
     */
    setInputControl(kind: ControlKind, found: boolean): void

    // Class property signals of AppStream-1.0.AppStream.SystemInfo

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

class SystemInfo extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.SystemInfo

    static name: string

    // Constructors of AppStream-1.0.AppStream.SystemInfo

    constructor(config?: SystemInfo.ConstructorProperties) 
    /**
     * Creates a new #AsSystemInfo.
     * @constructor 
     * @returns a #AsSystemInfo
     */
    constructor() 
    /**
     * Creates a new #AsSystemInfo.
     * @constructor 
     * @returns a #AsSystemInfo
     */
    static new(): SystemInfo
    _init(config?: SystemInfo.ConstructorProperties): void
}

module Translation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Translation {

    // Own properties of AppStream-1.0.AppStream.Translation

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Translation

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Translation

    /**
     * The ID (e.g. Gettext translation domain) of this translation.
     */
    getId(): string
    /**
     * The translation system type.
     * @returns an enum of type #AsTranslationKind
     */
    getKind(): TranslationKind
    /**
     * The locale of the source strings for this component. If this has not been
     * explicitly specified, `en_US` will be returned.
     * @returns The locale of the source strings for this component.
     */
    getSourceLocale(): string
    /**
     * Set the ID (e.g. Gettext domain) of this translation.
     * @param id The ID of this translation.
     */
    setId(id: string): void
    /**
     * Set the translation system type.
     * @param kind the new #AsTranslationKind
     */
    setKind(kind: TranslationKind): void
    /**
     * Set the locale of the source strings for this component. In gettext, this is
     * referred to as the `C` locale. It’s almost always `en_US`, but for some
     * components it may not be.
     * @param locale The locale that the source strings are in, or %NULL if    unknown or default.
     */
    setSourceLocale(locale: string | null): void

    // Class property signals of AppStream-1.0.AppStream.Translation

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

    // Own properties of AppStream-1.0.AppStream.Translation

    static name: string

    // Constructors of AppStream-1.0.AppStream.Translation

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
}

module Validator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Validator {

    // Own properties of AppStream-1.0.AppStream.Validator

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Validator

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Validator

    /**
     * Override the severity of a selected tag. For most tags, the severity
     * can not be lowered to a value that makes a validation
     * that would otherwise fail pass (so e.g. an ERROR can not become an INFO).
     * Some tags are explicitly allowed to have their severity lowered to enable
     * validation of e.g. incomplete metadata during development.
     * Increasing the severity of any tag is always allowed.
     * @param tag the issue tag to override, e.g. "release-time-missing"
     * @param severityOverride the new severity for the tag.
     */
    addOverride(tag: string, severityOverride: IssueSeverity): boolean
    /**
     * Add release metadata explicitly from bytes.
     * @param releaseFname File basename of the release metadata file to add.
     * @param releaseMetadata Data of the release metadata file.
     */
    addReleaseBytes(releaseFname: string, releaseMetadata: any): boolean
    /**
     * Add a release metadata file to the validation process.
     * @param releaseFile Release metadata file to add.
     */
    addReleaseFile(releaseFile: Gio.File): boolean
    /**
     * Clears the list of issues
     */
    clearIssues(): void
    /**
     * Clear all release information that was explicitly added to the
     * validation process.
     */
    clearReleaseData(): void
    getCheckUrls(): boolean
    /**
     * Get the number of files for which issues have been found.
     * @returns The number of files that have issues.
     */
    getIssueFilesCount(): number
    /**
     * Get a list of found metadata format issues.
     * @returns a list of #AsValidatorIssue instances, free with g_list_free()
     */
    getIssues(): ValidatorIssue[]
    /**
     * Get a hash table of filenames mapped to lists of issues.
     * This is useful if validation was requested for multiple files and
     * a list of issues per-file is desired without prior explicit sorting.
     * @returns a file to issue list mapping
     */
    getIssuesPerFile(): GLib.HashTable
    getReportYaml(yamlReport: string | null): boolean
    getStrict(): boolean
    /**
     * Get the explanatory text for a given issue tag.
     * @param tag 
     * @returns Explanation text.
     */
    getTagExplanation(tag: string): string
    /**
     * Get the severity for a given issue tag.
     * @param tag 
     * @returns The #AsIssueSeverity
     */
    getTagSeverity(tag: string): IssueSeverity
    /**
     * Get an array of all tags known to the validator.
     * @returns A string array of tags
     */
    getTags(): string[]
    /**
     * Set this value to make the #AsValidator check whether remote URLs
     * actually exist.
     * @param value %TRUE if remote URLs should be checked for availability.
     */
    setCheckUrls(value: boolean): void
    /**
     * Enable or disable strict mode. In strict mode, any found issue will result
     * in a failed validation (except for issues of "pedantic" severity).
     * Otherwise, only a "warning" or "error" will cause the validation to fail.
     * @param isStrict %TRUE to enable strict mode.
     */
    setStrict(isStrict: boolean): void
    /**
     * Validate AppStream XML data from a byte array.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata XML metadata as #GBytes.
     * @returns %TRUE if bytes validated successfully.
     */
    validateBytes(metadata: any): boolean
    /**
     * Validate AppStream XML data.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata XML metadata.
     * @returns %TRUE if data validated successfully.
     */
    validateData(metadata: string): boolean
    /**
     * Validate an AppStream XML file.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadataFile An AppStream XML file.
     * @returns %TRUE if file validated successfully.
     */
    validateFile(metadataFile: Gio.File): boolean
    /**
     * Validate a full directory tree for issues in AppStream metadata.
     * @param rootDir The root directory of the filesystem tree that should be validated.
     * @returns %TRUE if file validated successfully.
     */
    validateTree(rootDir: string): boolean

    // Class property signals of AppStream-1.0.AppStream.Validator

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

class Validator extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Validator

    static name: string

    // Constructors of AppStream-1.0.AppStream.Validator

    constructor(config?: Validator.ConstructorProperties) 
    /**
     * Creates a new #AsValidator.
     * @constructor 
     * @returns an #AsValidator
     */
    constructor() 
    /**
     * Creates a new #AsValidator.
     * @constructor 
     * @returns an #AsValidator
     */
    static new(): Validator
    _init(config?: Validator.ConstructorProperties): void
}

module ValidatorIssue {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ValidatorIssue {

    // Own properties of AppStream-1.0.AppStream.ValidatorIssue

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.ValidatorIssue

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.ValidatorIssue

    /**
     * The component-id this issue is about.
     * @returns a component-id.
     */
    getCid(): string
    /**
     * Get an extended explanation on this issue, or return %NULL
     * if none is available.
     * @returns the explanation
     */
    getExplanation(): string
    /**
     * The name of the file this issue was found in.
     * @returns the filename
     */
    getFilename(): string
    /**
     * Get a short context hint for this issue.
     * @returns the hint
     */
    getHint(): string
    /**
     * This function is deprecated and should not be used in new code.
     * @returns a #AsIssueSeverity
     */
    getImportance(): IssueSeverity
    /**
     * Gets the line number where this issue was found.
     * @returns the line number where this issue occured, or -1 if unknown.
     */
    getLine(): number
    /**
     * Builds a string containing all information about the location
     * where this issue occured that we know about.
     * @returns the location hint as string.
     */
    getLocation(): string | null
    /**
     * This function is deprecated.
     * @returns the message
     */
    getMessage(): string
    /**
     * Gets the severity of this issue.
     * @returns a #AsIssueSeverity
     */
    getSeverity(): IssueSeverity
    /**
     * Gets the issue tag string for this issue.
     * @returns the tag
     */
    getTag(): string
    /**
     * Sets the component-id this issue is about.
     * @param cid a component-id.
     */
    setCid(cid: string): void
    /**
     * Set explanatory text for this issue.
     * @param explanation the explanation.
     */
    setExplanation(explanation: string): void
    /**
     * Sets the name of the file the issue was found in.
     * @param fname the filename.
     */
    setFilename(fname: string): void
    /**
     * Sets short issue hint.
     * @param hint the hint.
     */
    setHint(hint: string): void
    /**
     * This function is deprecated and should not be used in new code.
     * @param importance the #AsIssueSeverity.
     */
    setImportance(importance: IssueSeverity): void
    /**
     * Sets the line number where this issue was found.
     * @param line the line number.
     */
    setLine(line: number): void
    /**
     * This function is deprecated.
     * @param message the message text.
     */
    setMessage(message: string): void
    /**
     * Sets the severity for this issue.
     * @param severity the #AsIssueSeverity.
     */
    setSeverity(severity: IssueSeverity): void
    /**
     * Sets the issue tag.
     * @param tag the tag.
     */
    setTag(tag: string): void

    // Class property signals of AppStream-1.0.AppStream.ValidatorIssue

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

class ValidatorIssue extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.ValidatorIssue

    static name: string

    // Constructors of AppStream-1.0.AppStream.ValidatorIssue

    constructor(config?: ValidatorIssue.ConstructorProperties) 
    /**
     * Creates a new #AsValidatorIssue.
     * @constructor 
     * @returns a #AsValidatorIssue
     */
    constructor() 
    /**
     * Creates a new #AsValidatorIssue.
     * @constructor 
     * @returns a #AsValidatorIssue
     */
    static new(): ValidatorIssue
    _init(config?: ValidatorIssue.ConstructorProperties): void
}

module Video {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Video {

    // Own properties of AppStream-1.0.AppStream.Video

    __gtype__: number

    // Own fields of AppStream-1.0.AppStream.Video

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Video

    /**
     * Gets the video codec, if known.
     * @returns the #AsVideoCodecKind
     */
    getCodecKind(): VideoCodecKind
    /**
     * Gets the video container format, if known.
     * @returns the #AsVideoContainerKind
     */
    getContainerKind(): VideoContainerKind
    /**
     * Gets the video height, if known.
     * @returns height in pixels or 0 if unknown
     */
    getHeight(): number
    /**
     * Get locale for this video.
     * @returns Locale string
     */
    getLocale(): string
    /**
     * Gets the full qualified URL for the video, usually pointing at a mirror or CDN server.
     * @returns a web URL
     */
    getUrl(): string
    /**
     * Gets the video width, if known.
     * @returns width in pixels or 0 if unknown
     */
    getWidth(): number
    /**
     * Sets the video codec.
     * @param kind the #AsVideoCodecKind, e.g. %AS_VIDEO_CODEC_KIND_AV1.
     */
    setCodecKind(kind: VideoCodecKind): void
    /**
     * Sets the video container.
     * @param kind the #AsVideoContainerKind, e.g. %AS_VIDEO_CONTAINER_KIND_MKV.
     */
    setContainerKind(kind: VideoContainerKind): void
    /**
     * Sets the video height.
     * @param height the height in pixels.
     */
    setHeight(height: number): void
    /**
     * Sets the locale for this video.
     * @param locale the locale string.
     */
    setLocale(locale: string): void
    /**
     * Sets the fully-qualified URL to use for the video.
     * @param url the URL.
     */
    setUrl(url: string): void
    /**
     * Sets the video width.
     * @param width the width in pixels.
     */
    setWidth(width: number): void

    // Class property signals of AppStream-1.0.AppStream.Video

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

class Video extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Video

    static name: string

    // Constructors of AppStream-1.0.AppStream.Video

    constructor(config?: Video.ConstructorProperties) 
    /**
     * Creates a new #AsVideo.
     * @constructor 
     * @returns a #AsVideo
     */
    constructor() 
    /**
     * Creates a new #AsVideo.
     * @constructor 
     * @returns a #AsVideo
     */
    static new(): Video
    _init(config?: Video.ConstructorProperties): void
}

interface AgreementClass {

    // Own fields of AppStream-1.0.AppStream.AgreementClass

    parentClass: GObject.ObjectClass
}

abstract class AgreementClass {

    // Own properties of AppStream-1.0.AppStream.AgreementClass

    static name: string
}

interface AgreementSectionClass {

    // Own fields of AppStream-1.0.AppStream.AgreementSectionClass

    parentClass: GObject.ObjectClass
}

abstract class AgreementSectionClass {

    // Own properties of AppStream-1.0.AppStream.AgreementSectionClass

    static name: string
}

interface ArtifactClass {

    // Own fields of AppStream-1.0.AppStream.ArtifactClass

    parentClass: GObject.ObjectClass
}

abstract class ArtifactClass {

    // Own properties of AppStream-1.0.AppStream.ArtifactClass

    static name: string
}

interface BrandingClass {

    // Own fields of AppStream-1.0.AppStream.BrandingClass

    parentClass: GObject.ObjectClass
}

abstract class BrandingClass {

    // Own properties of AppStream-1.0.AppStream.BrandingClass

    static name: string
}

interface BrandingColorIter {

    // Owm methods of AppStream-1.0.AppStream.BrandingColorIter

    /**
     * Initializes a color iterator for the accent color list and associates it
     * it with `branding`.
     * The #AsBrandingColorIter structure is typically allocated on the stack
     * and does not need to be freed explicitly.
     * @param branding an #AsBranding
     */
    init(branding: Branding): void
    /**
     * Returns the current color entry and advances the iterator.
     * Example:
     * 
     * ```c
     * AsBrandingColorIter iter;
     * AsColorKind ckind;
     * AsColorSchemeKind scheme_preference;
     * const gchar *color_value;
     * 
     * as_branding_color_iter_init (&iter, branding);
     * while (as_branding_color_iter_next (&iter, &ckind, &scheme_preference, &color_value)) {
     *     // do something with the color data
     * }
     * ```
     * 
     * @returns %FALSE if the last entry has been reached.
     */
    next(): [ /* returnType */ boolean, /* kind */ ColorKind, /* schemePreference */ ColorSchemeKind, /* value */ string ]
}

/**
 * A #AsBrandingColorIter structure represents an iterator that can be used
 * to iterate over the accent colors of an #AsBranding object.
 * #AsBrandingColorIter structures are typically allocated on the stack and
 * then initialized with as_branding_color_iter_init().
 * @record 
 */
class BrandingColorIter {

    // Own properties of AppStream-1.0.AppStream.BrandingColorIter

    static name: string
}

interface BundleClass {

    // Own fields of AppStream-1.0.AppStream.BundleClass

    parentClass: GObject.ObjectClass
}

abstract class BundleClass {

    // Own properties of AppStream-1.0.AppStream.BundleClass

    static name: string
}

interface CategoryClass {

    // Own fields of AppStream-1.0.AppStream.CategoryClass

    parentClass: GObject.ObjectClass
}

abstract class CategoryClass {

    // Own properties of AppStream-1.0.AppStream.CategoryClass

    static name: string
}

interface ChecksumClass {

    // Own fields of AppStream-1.0.AppStream.ChecksumClass

    parentClass: GObject.ObjectClass
}

abstract class ChecksumClass {

    // Own properties of AppStream-1.0.AppStream.ChecksumClass

    static name: string
}

interface ComponentClass {

    // Own fields of AppStream-1.0.AppStream.ComponentClass

    parentClass: GObject.ObjectClass
}

abstract class ComponentClass {

    // Own properties of AppStream-1.0.AppStream.ComponentClass

    static name: string
}

interface ContentRatingClass {

    // Own fields of AppStream-1.0.AppStream.ContentRatingClass

    parentClass: GObject.ObjectClass
}

abstract class ContentRatingClass {

    // Own properties of AppStream-1.0.AppStream.ContentRatingClass

    static name: string
}

interface ContextClass {

    // Own fields of AppStream-1.0.AppStream.ContextClass

    parentClass: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of AppStream-1.0.AppStream.ContextClass

    static name: string
}

interface DistroDetailsClass {

    // Own fields of AppStream-1.0.AppStream.DistroDetailsClass

    parentClass: GObject.ObjectClass
}

abstract class DistroDetailsClass {

    // Own properties of AppStream-1.0.AppStream.DistroDetailsClass

    static name: string
}

interface IconClass {

    // Own fields of AppStream-1.0.AppStream.IconClass

    parentClass: GObject.ObjectClass
}

abstract class IconClass {

    // Own properties of AppStream-1.0.AppStream.IconClass

    static name: string
}

interface ImageClass {

    // Own fields of AppStream-1.0.AppStream.ImageClass

    parentClass: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of AppStream-1.0.AppStream.ImageClass

    static name: string
}

interface IssueClass {

    // Own fields of AppStream-1.0.AppStream.IssueClass

    parentClass: GObject.ObjectClass
}

abstract class IssueClass {

    // Own properties of AppStream-1.0.AppStream.IssueClass

    static name: string
}

interface LaunchableClass {

    // Own fields of AppStream-1.0.AppStream.LaunchableClass

    parentClass: GObject.ObjectClass
}

abstract class LaunchableClass {

    // Own properties of AppStream-1.0.AppStream.LaunchableClass

    static name: string
}

interface MetadataClass {

    // Own fields of AppStream-1.0.AppStream.MetadataClass

    parentClass: GObject.ObjectClass
}

abstract class MetadataClass {

    // Own properties of AppStream-1.0.AppStream.MetadataClass

    static name: string
}

interface PoolClass {

    // Own fields of AppStream-1.0.AppStream.PoolClass

    parentClass: GObject.ObjectClass
    changed: (pool: Pool) => void
}

abstract class PoolClass {

    // Own properties of AppStream-1.0.AppStream.PoolClass

    static name: string
}

interface ProvidedClass {

    // Own fields of AppStream-1.0.AppStream.ProvidedClass

    parentClass: GObject.ObjectClass
}

abstract class ProvidedClass {

    // Own properties of AppStream-1.0.AppStream.ProvidedClass

    static name: string
}

interface RelationClass {

    // Own fields of AppStream-1.0.AppStream.RelationClass

    parentClass: GObject.ObjectClass
}

abstract class RelationClass {

    // Own properties of AppStream-1.0.AppStream.RelationClass

    static name: string
}

interface ReleaseClass {

    // Own fields of AppStream-1.0.AppStream.ReleaseClass

    parentClass: GObject.ObjectClass
}

abstract class ReleaseClass {

    // Own properties of AppStream-1.0.AppStream.ReleaseClass

    static name: string
}

interface ReviewClass {

    // Own fields of AppStream-1.0.AppStream.ReviewClass

    parentClass: GObject.ObjectClass
}

abstract class ReviewClass {

    // Own properties of AppStream-1.0.AppStream.ReviewClass

    static name: string
}

interface ScreenshotClass {

    // Own fields of AppStream-1.0.AppStream.ScreenshotClass

    parentClass: GObject.ObjectClass
}

abstract class ScreenshotClass {

    // Own properties of AppStream-1.0.AppStream.ScreenshotClass

    static name: string
}

interface SuggestedClass {

    // Own fields of AppStream-1.0.AppStream.SuggestedClass

    parentClass: GObject.ObjectClass
}

abstract class SuggestedClass {

    // Own properties of AppStream-1.0.AppStream.SuggestedClass

    static name: string
}

interface SystemInfoClass {

    // Own fields of AppStream-1.0.AppStream.SystemInfoClass

    parentClass: GObject.ObjectClass
}

abstract class SystemInfoClass {

    // Own properties of AppStream-1.0.AppStream.SystemInfoClass

    static name: string
}

interface TranslationClass {

    // Own fields of AppStream-1.0.AppStream.TranslationClass

    parentClass: GObject.ObjectClass
}

abstract class TranslationClass {

    // Own properties of AppStream-1.0.AppStream.TranslationClass

    static name: string
}

interface ValidatorClass {

    // Own fields of AppStream-1.0.AppStream.ValidatorClass

    parentClass: GObject.ObjectClass
}

abstract class ValidatorClass {

    // Own properties of AppStream-1.0.AppStream.ValidatorClass

    static name: string
}

interface ValidatorIssueClass {

    // Own fields of AppStream-1.0.AppStream.ValidatorIssueClass

    parentClass: GObject.ObjectClass
}

abstract class ValidatorIssueClass {

    // Own properties of AppStream-1.0.AppStream.ValidatorIssueClass

    static name: string
}

interface VideoClass {

    // Own fields of AppStream-1.0.AppStream.VideoClass

    parentClass: GObject.ObjectClass
}

abstract class VideoClass {

    // Own properties of AppStream-1.0.AppStream.VideoClass

    static name: string
}

}

export default AppStream;
// END