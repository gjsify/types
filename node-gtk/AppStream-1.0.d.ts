// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppStream-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
 * and the collection metadata (shipped by distributors).
 * The data source kind indicates which style we should process.
 * Usually you do not want to set this explicitly.
 */
enum FormatStyle {
    UNKNOWN,
    /**
     * Parse AppStream upstream metadata (metainfo files)
     */
    METAINFO,
    /**
     * Parse AppStream metadata collections (shipped by software distributors)
     */
    COLLECTION,
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
     * Expected collection metadata but got metainfo metadata, or vice versa.
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
 * The release size kind.
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
     * Load AppStream collection metadata from OS locations.
     */
    LOAD_OS_COLLECTION,
    /**
     * Load MetaInfo data from OS locations.
     */
    LOAD_OS_METAINFO,
    /**
     * Load components from desktop-entry files in OS locations.
     */
    LOAD_OS_DESKTOP_FILES,
    /**
     * Load AppStream collection metadata from Flatpak.
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
     * Prefer local metainfo data over the system-provided collection data. Useful for debugging.
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
 */
function agreementKindFromString(value: string): AgreementKind
/**
 * Converts the enumerated value to an text representation.
 * @param value the #AsAgreementKind.
 */
function agreementKindToString(value: AgreementKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 */
function artifactKindFromString(kind: string): ArtifactKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsArtifactKind.
 */
function artifactKindToString(kind: ArtifactKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param bundleStr the string.
 */
function bundleKindFromString(bundleStr: string): BundleKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsBundleKind.
 */
function bundleKindToString(kind: BundleKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function checksumKindFromString(kindStr: string): ChecksumKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsChecksumKind.
 */
function checksumKindToString(kind: ChecksumKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function colorKindFromString(str: string): ColorKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsColorKind.
 */
function colorKindToString(kind: ColorKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function colorSchemeKindFromString(str: string): ColorSchemeKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsColorSchemeKind.
 */
function colorSchemeKindToString(kind: ColorSchemeKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function componentKindFromString(kindStr: string): ComponentKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsComponentKind.
 */
function componentKindToString(kind: ComponentKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param scopeStr the string.
 */
function componentScopeFromString(scopeStr: string): ComponentScope
/**
 * Converts the enumerated value to an text representation.
 * @param scope the #AsComponentScope.
 */
function componentScopeToString(scope: ComponentScope): string
/**
 * Format `age` as a human-readable string in the given rating `system`. This is
 * the way to present system-specific strings in a UI.
 * @param system an #AsContentRatingSystem
 * @param age a CSM age to format
 */
function contentRatingSystemFormatAge(system: ContentRatingSystem, age: number): string | null
/**
 * Determine the most appropriate #AsContentRatingSystem for the given `locale`.
 * Content rating systems are selected by territory. If no content rating system
 * seems suitable, %AS_CONTENT_RATING_SYSTEM_IARC is returned.
 * @param locale a locale, in the format described in `man 3 setlocale`
 */
function contentRatingSystemFromLocale(locale: string): ContentRatingSystem
/**
 * Get the CSM ages corresponding to the entries returned by
 * as_content_rating_system_get_formatted_ages() for this `system`.
 * @param system an #AsContentRatingSystem
 */
function contentRatingSystemGetCsmAges(system: ContentRatingSystem): number[]
/**
 * Get an array of all the possible return values of
 * as_content_rating_system_format_age() for the given `system`. The array is
 * sorted with youngest CSM age first.
 * @param system an #AsContentRatingSystem
 */
function contentRatingSystemGetFormattedAges(system: ContentRatingSystem): string[]
/**
 * Get a human-readable string to identify `system`. %NULL will be returned for
 * %AS_CONTENT_RATING_SYSTEM_UNKNOWN.
 * @param system an #AsContentRatingSystem
 */
function contentRatingSystemToString(system: ContentRatingSystem): string | null
/**
 * Converts the text representation to an enumerated value.
 * @param value the string.
 */
function contentRatingValueFromString(value: string): ContentRatingValue
/**
 * Converts the enumerated value to an text representation.
 * @param value the #AsContentRatingValue.
 */
function contentRatingValueToString(value: ContentRatingValue): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function controlKindFromString(kindStr: string): ControlKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsControlKind.
 */
function controlKindToString(kind: ControlKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function displayLengthKindFromString(kindStr: string): DisplayLengthKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsDisplayLengthKind.
 */
function displayLengthKindToString(kind: DisplayLengthKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function displaySideKindFromString(kindStr: string): DisplaySideKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsDisplaySideKind.
 */
function displaySideKindToString(kind: DisplaySideKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function formatKindFromString(kindStr: string): FormatKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsFormatKind.
 */
function formatKindToString(kind: FormatKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param versionStr the string.
 */
function formatVersionFromString(versionStr: string): FormatVersion
/**
 * Converts the enumerated value to an text representation.
 * @param version the #AsFormatKind.
 */
function formatVersionToString(version: FormatVersion): string
/**
 * Get the version of the AppStream library that is currently used
 * as a string.
 */
function getAppstreamVersion(): string
/**
 * Returns the component-ID of the current distribution based on contents
 * of the `/etc/os-release` file.
 * This function is a shorthand for %as_distro_details_get_cid
 */
function getCurrentDistroComponentId(): string
/**
 * Get a list of the default Freedesktop and AppStream categories
 * that software components (especially GUI applications) can be sorted
 * into in software centers.
 * @param withSpecial Include special categories (e.g. "addons", and "all"/"featured" in submenus)
 */
function getDefaultCategories(withSpecial: boolean): Category[]
/**
 * Get a web URL to the license text and more license information for an SPDX
 * license identifier.
 * @param license The SPDX license ID.
 */
function getLicenseUrl(license: string): string
/**
 * Replaces all occurences of `find` with the string `replace` in a #GString.
 * @param string a #GString
 * @param find the string to find in `string`
 * @param replace the string to insert in place of `find`
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
 */
function gstringReplace2(string: GLib.String, find: string, replace: string, limit: number): number
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function iconKindFromString(kindStr: string): IconKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsIconKind.
 */
function iconKindToString(kind: IconKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 */
function imageKindFromString(kind: string): ImageKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsImageKind.
 */
function imageKindToString(kind: ImageKind): string
/**
 * Searches the known list of SPDX license exception IDs.
 * @param exceptionId a single SPDX license exception ID, e.g. "GCC-exception-3.1"
 */
function isSpdxLicenseExceptionId(exceptionId: string): boolean
/**
 * Checks the licence string to check it being a valid licence.
 * NOTE: SPDX licenses can't typically contain brackets.
 * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
 */
function isSpdxLicenseExpression(license: string): boolean
/**
 * Searches the known list of SPDX license IDs.
 * @param licenseId a single SPDX license ID, e.g. "GPL-3.0"
 */
function isSpdxLicenseId(licenseId: string): boolean
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function issueKindFromString(kindStr: string): IssueKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsIssueKind.
 */
function issueKindToString(kind: IssueKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function issueSeverityFromString(str: string): IssueSeverity
/**
 * Converts the enumerated value to an text representation.
 * @param severity the #AsIssueSeverity.
 */
function issueSeverityToString(severity: IssueSeverity): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function launchableKindFromString(kindStr: string): LaunchableKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsLaunchableKind.
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
 */
function licenseIsMetadataLicense(license: string): boolean
/**
 * Tests license ID against the vetted list of licenses that
 * can be used for metainfo metadata.
 * This function will not work for license expressions, if you need
 * to test an SPDX license expression for compliance, please
 * use %as_license_is_metadata_license insread.
 * @param licenseId a single SPDX license ID, e.g. "FSFAP"
 */
function licenseIsMetadataLicenseId(licenseId: string): boolean
/**
 * Converts a non-SPDX license into an SPDX format string where possible.
 * @param license a not-quite SPDX license string, e.g. "GPLv3+"
 */
function licenseToSpdxId(license: string): string
function markupConvertSimple(markup: string): string
/**
 * Splits up a long line into an array of smaller strings, each being no longer
 * than `line_len`. Words are not split.
 * @param text the text to split.
 * @param lineLen the maximum length of the output line
 */
function markupStrsplitWords(text: string, lineLen: number): string[]
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function mergeKindFromString(kindStr: string): MergeKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsMergeKind.
 */
function mergeKindToString(kind: MergeKind): string
function metadataErrorQuark(): GLib.Quark
function poolErrorQuark(): GLib.Quark
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function providedKindFromString(kindStr: string): ProvidedKind
/**
 * Converts the enumerated value to a localized text representation,
 * using the plural forms (e.g. "Libraries" instead of "Library").
 * 
 * This can be useful when displaying provided items in GUI dialogs.
 * @param kind the #AsProvidedKind.
 */
function providedKindToL10nString(kind: ProvidedKind): string
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsProvidedKind.
 */
function providedKindToString(kind: ProvidedKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param compareStr the string.
 */
function relationCompareFromString(compareStr: string): RelationCompare
/**
 * Converts the enumerated value to an text representation.
 * The enum is converted into a two-letter identifier ("eq", "ge", etc.)
 * for use in the XML representation.
 * @param compare the #AsRelationCompare.
 */
function relationCompareToString(compare: RelationCompare): string
/**
 * Converts the enumerated value to an text representation.
 * The enum is converted into an identifier consisting of two
 * mathematical comparison operators ("==", ">=", etc.)
 * for use in the YAML representation and user interfaces.
 * @param compare the #AsRelationCompare.
 */
function relationCompareToSymbolsString(compare: RelationCompare): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function relationItemKindFromString(kindStr: string): RelationItemKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsRelationKind.
 */
function relationItemKindToString(kind: RelationItemKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function relationKindFromString(kindStr: string): RelationKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsRelationKind.
 */
function relationKindToString(kind: RelationKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function releaseKindFromString(kindStr: string): ReleaseKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseKind.
 */
function releaseKindToString(kind: ReleaseKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function releaseUrlKindFromString(kindStr: string): ReleaseUrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseUrlKind.
 */
function releaseUrlKindToString(kind: ReleaseUrlKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 */
function screenshotKindFromString(kind: string): ScreenshotKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsScreenshotKind.
 */
function screenshotKindToString(kind: ScreenshotKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param sizeKind the string.
 */
function sizeKindFromString(sizeKind: string): SizeKind
/**
 * Converts the enumerated value to an text representation.
 * @param sizeKind the #AsSizeKind.
 */
function sizeKindToString(sizeKind: SizeKind): string
/**
 * De-tokenizes the SPDX licenses into a string.
 * @param licenseTokens license tokens, typically from as_spdx_license_tokenize()
 */
function spdxLicenseDetokenize(licenseTokens: string): string | null
/**
 * Tokenizes the SPDX license string (or any simarly formatted string)
 * into parts. Any license parts of the string e.g. "LGPL-2.0+" are prefexed
 * with "`"`, the conjunctive replaced with "&", the disjunctive replaced
 * with "|" and the WITH operator for license exceptions replaced with "^".
 * Brackets are added as indervidual tokens and other strings are
 * appended into single tokens where possible.
 * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
 */
function spdxLicenseTokenize(license: string): string[] | null
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function suggestedKindFromString(kindStr: string): SuggestedKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsSuggestedKind.
 */
function suggestedKindToString(kind: SuggestedKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kindStr the string.
 */
function translationKindFromString(kindStr: string): TranslationKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsTranslationKind.
 */
function translationKindToString(kind: TranslationKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param urgencyKind the string.
 */
function urgencyKindFromString(urgencyKind: string): UrgencyKind
/**
 * Converts the enumerated value to an text representation.
 * @param urgencyKind the %AsUrgencyKind.
 */
function urgencyKindToString(urgencyKind: UrgencyKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param urlKind the string.
 */
function urlKindFromString(urlKind: string): UrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param urlKind the %AsUrlKind.
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
function utilsBuildDataId(scope: ComponentScope, bundleKind: BundleKind, origin: string, cid: string, branch: string): string
/**
 * Compare alpha and numeric segments of two versions.
 * The version compare algorithm is also used by RPM.
 * @param a 
 * @param b 
 */
function utilsCompareVersions(a: string, b: string): number
/**
 * Checks two component data IDs for equality allowing globs to match.
 * @param dataId1 a data ID
 * @param dataId2 another data ID
 */
function utilsDataIdEqual(dataId1: string, dataId2: string): boolean
/**
 * Get the component-id part of the data-id.
 * @param dataId The data-id.
 */
function utilsDataIdGetCid(dataId: string): string
/**
 * Converts a data-id to a hash value.
 * 
 * This function implements the widely used DJB hash on the ID subset of the
 * data-id string.
 * 
 * It can be passed to g_hash_table_new() as the hash_func parameter,
 * when using non-NULL strings or unique_ids as keys in a GHashTable.
 * @param dataId a data ID
 */
function utilsDataIdHash(dataId: string): number
/**
 * Checks two data IDs for equality allowing globs to match, whilst also
 * allowing clients to whitelist sections that have to match.
 * @param dataId1 a data ID
 * @param dataId2 another data ID
 * @param matchFlags a #AsDataIdMatchFlags bitfield, e.g. %AS_DATA_ID_MATCH_FLAG_ID
 */
function utilsDataIdMatch(dataId1: string, dataId2: string, matchFlags: DataIdMatchFlags): boolean
/**
 * Checks if a data ID is valid i.e. has the correct number of
 * sections.
 * @param dataId a component data ID
 */
function utilsDataIdValid(dataId: string): boolean
function utilsErrorQuark(): GLib.Quark
/**
 * Guess the #AsComponentScope that applies to a given path.
 * @param path The filename to test.
 */
function utilsGuessScopeFromPath(path: string): ComponentScope
/**
 * Installs an AppStream MetaInfo, AppStream Metadata Collection or AppStream Icon tarball file
 * to the right place on the filesystem.
 * Please note that this function does almost no validation and may guess missing values such
 * as icon sizes and origin names.
 * Ensure your metadata is good before installing it.
 * @param location the #AsMetadataLocation, e.g. %AS_METADATA_LOCATION_CACHE
 * @param filename the full path of the file to install
 * @param origin the origin to use for the installation, or %NULL
 * @param destdir the destdir to use, or %NULL
 */
function utilsInstallMetadataFile(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean
function utilsIsCategoryName(categoryName: string): boolean
/**
 * Searches the known list of desktop environments AppStream
 * knows about.
 * @param desktop a desktop environment id.
 */
function utilsIsDesktopEnvironment(desktop: string): boolean
/**
 * Test if the given string is a valid platform triplet recognized by
 * AppStream.
 * @param triplet a platform triplet.
 */
function utilsIsPlatformTriplet(triplet: string): boolean
/**
 * Searches the known list of TLDs we allow for AppStream IDs.
 * This excludes internationalized names.
 * @param tld a top-level domain without dot, e.g. "de", "org", "name"
 */
function utilsIsTld(tld: string): boolean
/**
 * Calculates if one locale is compatible with another.
 * When doing the calculation the locale and language code is taken into
 * account if possible.
 * @param locale1 a locale string, or %NULL
 * @param locale2 a locale string, or %NULL
 */
function utilsLocaleIsCompatible(locale1: string, locale2: string): boolean
/**
 * Sorts all components in `cpts` into the #AsCategory categories listed in `categories`.
 * @param cpts List of components.
 * @param categories List of categories to sort components into.
 * @param checkDuplicates Whether to check for duplicates.
 */
function utilsSortComponentsIntoCategories(cpts: Component[], categories: Category[], checkDuplicates: boolean): void
/**
 * Compare alpha and numeric segments of two software versions,
 * considering `flags`.
 * @param a First version number
 * @param b Second version number
 * @param flags Flags, e.g. %AS_VERCMP_FLAG_NONE
 */
function vercmp(a: string, b: string, flags: VercmpFlags): number
/**
 * Compare alpha and numeric segments of two software versions.
 * @param a First version number
 * @param b Second version number
 */
function vercmpSimple(a: string, b: string): number
/**
 * Get the version of the AppStream library that is currently used
 * at runtime as a string.
 */
function versionString(): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function videoCodecKindFromString(str: string): VideoCodecKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsVideoCodecKind.
 */
function videoCodecKindToString(kind: VideoCodecKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function videoContainerKindFromString(str: string): VideoContainerKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsVideoContainerKind.
 */
function videoContainerKindToString(kind: VideoContainerKind): string
interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}

interface Agreement {

    // Own fields of AppStream-1.0.AppStream.Agreement

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Agreement

    addSection(agreementSection: AgreementSection): void
    /**
     * Gets the agreement kind.
     */
    getKind(): AgreementKind
    /**
     * Gets the first section in the agreement.
     */
    getSectionDefault(): AgreementSection | null
    /**
     * Gets all the sections in the agreement.
     */
    getSections(): AgreementSection[]
    /**
     * Gets the agreement version_id.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Agreement extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Agreement

    static name: string
    static $gtype: GObject.GType<Agreement>

    // Constructors of AppStream-1.0.AppStream.Agreement

    constructor(config?: Agreement_ConstructProps) 
    /**
     * Creates a new #AsAgreement.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsAgreement.
     * @constructor 
     */
    static new(): Agreement
    _init(config?: Agreement_ConstructProps): void
}

interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}

interface AgreementSection {

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
     */
    getDescription(): string
    /**
     * Gets the agreement section kind.
     */
    getKind(): string
    /**
     * Gets the agreement section name.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AgreementSection extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.AgreementSection

    static name: string
    static $gtype: GObject.GType<AgreementSection>

    // Constructors of AppStream-1.0.AppStream.AgreementSection

    constructor(config?: AgreementSection_ConstructProps) 
    /**
     * Creates a new #AsAgreementSection.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsAgreementSection.
     * @constructor 
     */
    static new(): AgreementSection
    _init(config?: AgreementSection_ConstructProps): void
}

interface Artifact_ConstructProps extends GObject.Object_ConstructProps {
}

interface Artifact {

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
     */
    getBundleKind(): BundleKind
    /**
     * Gets the artifact checksum
     * @param kind 
     */
    getChecksum(kind: ChecksumKind): Checksum | null
    /**
     * Get a list of all checksums we have for this artifact.
     */
    getChecksums(): Checksum[]
    /**
     * Gets a suggested filename for the downloaded artifact,
     * or %NULL if none is suggested.
     */
    getFilename(): string
    /**
     * Gets the artifact kind.
     */
    getKind(): ArtifactKind
    /**
     * Gets the artifact locations, typically URLs.
     */
    getLocations(): string[]
    /**
     * Gets the artifact platform string (e.g. a triplet like "x86_64-linux-gnu").
     */
    getPlatform(): string
    /**
     * Gets the artifact size.
     * @param kind a #AsSizeKind
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Artifact extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Artifact

    static name: string
    static $gtype: GObject.GType<Artifact>

    // Constructors of AppStream-1.0.AppStream.Artifact

    constructor(config?: Artifact_ConstructProps) 
    /**
     * Creates a new #AsArtifact.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsArtifact.
     * @constructor 
     */
    static new(): Artifact
    _init(config?: Artifact_ConstructProps): void
}

interface Branding_ConstructProps extends GObject.Object_ConstructProps {
}

interface Branding {

    // Own fields of AppStream-1.0.AppStream.Branding

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Branding

    /**
     * Retrieve a color of the given `kind` that matches `scheme_kind`.
     * If a color has no scheme preference defined, it will be returned for either scheme type,
     * unless a more suitable color was found.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param schemeKind Color scheme preference for the color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Branding extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Branding

    static name: string
    static $gtype: GObject.GType<Branding>

    // Constructors of AppStream-1.0.AppStream.Branding

    constructor(config?: Branding_ConstructProps) 
    /**
     * Creates a new #AsBranding.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsBranding.
     * @constructor 
     */
    static new(): Branding
    _init(config?: Branding_ConstructProps): void
}

interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}

interface Bundle {

    // Own fields of AppStream-1.0.AppStream.Bundle

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Bundle

    /**
     * Gets the ID for this bundle.
     */
    getId(): string
    /**
     * Gets the bundle kind.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Bundle extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Bundle

    static name: string
    static $gtype: GObject.GType<Bundle>

    // Constructors of AppStream-1.0.AppStream.Bundle

    constructor(config?: Bundle_ConstructProps) 
    /**
     * Creates a new #AsBundle.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsBundle.
     * @constructor 
     */
    static new(): Bundle
    _init(config?: Bundle_ConstructProps): void
}

interface Category_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of AppStream-1.0.AppStream.Category

    icon?: string | null
    id?: string | null
    name?: string | null
}

interface Category {

    // Own properties of AppStream-1.0.AppStream.Category

    readonly children: object
    icon: string
    id: string
    name: string
    readonly summary: string

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
     */
    hasChildren(): boolean
    /**
     * Check if the exact #AsComponent `cpt` is a member of this
     * category already.
     * @param cpt The #AsComponent to look for.
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Category extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of AppStream-1.0.AppStream.Category

    constructor(config?: Category_ConstructProps) 
    /**
     * Creates a new #AsCategory.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsCategory.
     * @constructor 
     */
    static new(): Category
    _init(config?: Category_ConstructProps): void
}

interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}

interface Checksum {

    // Own fields of AppStream-1.0.AppStream.Checksum

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Checksum

    /**
     * Gets the checksum type.
     */
    getKind(): ChecksumKind
    /**
     * Gets the checksum, usually in its hexadecimal form.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Checksum extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Checksum

    static name: string
    static $gtype: GObject.GType<Checksum>

    // Constructors of AppStream-1.0.AppStream.Checksum

    constructor(config?: Checksum_ConstructProps) 
    /**
     * Creates a new #AsChecksum.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsChecksum.
     * @constructor 
     */
    static new(): Checksum
    /**
     * Creates a new #AsChecksum with the given hash
     * function and hash value.
     * @constructor 
     * @param kind 
     * @param value 
     */
    static newForKindValue(kind: ChecksumKind, value: string): Checksum
    _init(config?: Checksum_ConstructProps): void
}

interface Component_ConstructProps extends GObject.Object_ConstructProps {

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

interface Component {

    // Own properties of AppStream-1.0.AppStream.Component

    /**
     * string array of categories
     */
    readonly categories: object[]
    /**
     * the description
     */
    description: string
    /**
     * the developer name
     */
    developerName: string
    /**
     * hash map of icon urls and sizes
     */
    readonly icons: Icon[]
    /**
     * the unique identifier
     */
    id: string
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
    name: string
    /**
     * string array of packages name
     */
    pkgnames: string[]
    /**
     * the project group
     */
    projectGroup: string
    /**
     * the project license
     */
    projectLicense: string
    /**
     * An array of #AsScreenshot instances
     */
    readonly screenshots: Screenshot[]
    /**
     * the summary
     */
    summary: string
    /**
     * the urls associated with this component
     */
    readonly urls: GLib.HashTable

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
     */
    getActiveLocale(): string
    /**
     * Returns a list of #AsComponent objects which
     * are addons extending this component in functionality.
     * 
     * This is the reverse of %as_component_get_extends()
     */
    getAddons(): Component[]
    /**
     * Gets an agreement the component has specified for the particular kind.
     * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     */
    getAgreementByKind(kind: AgreementKind): Agreement | null
    /**
     * Get a list of all agreements registered with this software component.
     */
    getAgreements(): Agreement[]
    /**
     * Gets the branch for the application.
     */
    getBranch(): string
    /**
     * Get the branding associated with this component, or %NULL
     * in case this component has no special branding.
     */
    getBranding(): Branding | null
    /**
     * Gets a bundle identifier string.
     * @param bundleKind the bundle kind, e.g. %AS_BUNDLE_KIND_LIMBA.
     */
    getBundle(bundleKind: BundleKind): Bundle | null
    /**
     * Get a list of all software bundles associated with this component.
     */
    getBundles(): Bundle[]
    getCategories(): string[]
    getCompulsoryForDesktops(): string[]
    /**
     * Gets a content ratings of a specific type that are defined for this component.
     * @param kind a ratings kind, e.g. "oars-1.0"
     */
    getContentRating(kind: string): ContentRating | null
    /**
     * Gets all content ratings defined for this software.
     */
    getContentRatings(): ContentRating[]
    /**
     * Get the #AsContext associated with this component.
     * This function may return %NULL if no context is set
     * (which will be the case if the component was not loaded from
     * a file or cache but constructed in memory).
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
     */
    getDataId(): string
    /**
     * Gets the end-of-life date for the entire component.
     */
    getDateEol(): string
    /**
     * Get the localized long description of this component.
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
     */
    getDesktopId(): string
    /**
     * Get the component's developer or development team name.
     */
    getDeveloperName(): string
    /**
     * Returns a string list of IDs of components which
     * are extended by this addon.
     * 
     * See %as_component_get_extends() for the reverse.
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
     */
    getIconBySize(width: number, height: number): Icon | null
    /**
     * Gets a stock icon for this component if one is associated with it.
     * Will return %NULL otherwise.
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
     */
    getId(): string
    getKeywords(): string[]
    /**
     * Retrieve the internal hash table mapping languages to
     * keword arrays.
     */
    getKeywordsTable(): GLib.HashTable
    /**
     * Returns the #AsComponentKind of this component.
     */
    getKind(): ComponentKind
    /**
     * Gets the translation coverage in percent for a specific locale
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    getLanguage(locale: string | null): number
    /**
     * Get a list of all languages.
     */
    getLanguages(): string[]
    /**
     * Gets a #AsLaunchable of a specific type that contains launchable entries for
     * this component.
     * @param kind a launch kind, e.g. %AS_LAUNCHABLE_KIND_DESKTOP_ID
     */
    getLaunchable(kind: LaunchableKind): Launchable | null
    getLaunchables(): Launchable[]
    /**
     * Get the merge method which should apply to duplicate components
     * with this ID.
     */
    getMergeKind(): MergeKind
    /**
     * The license the metadata iself is subjected to.
     */
    getMetadataLicense(): string
    /**
     * A human-readable name for this component.
     */
    getName(): string
    /**
     * Get the internal locale to component name
     * mapping table.
     */
    getNameTable(): GLib.HashTable
    /**
     * Get variant suffix for the component name
     * (only to be displayed if two components have the same name).
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
     */
    getPkgname(): string
    /**
     * Get a list of package names which this component consists of.
     * This usually is just one package name.
     */
    getPkgnames(): string[]
    /**
     * Returns the priority of this component.
     * This method is used internally.
     */
    getPriority(): number
    /**
     * Get the component's project group.
     */
    getProjectGroup(): string
    /**
     * Get the license of the project this component belongs to.
     */
    getProjectLicense(): string
    /**
     * Get a list of #AsProvided objects associated with this component.
     */
    getProvided(): Provided[]
    /**
     * Get an #AsProvided object for the given interface type,
     * containing information about the public interfaces (mimetypes, firmware, DBus services, ...)
     * this component provides.
     * @param kind kind of the provided item, e.g. %AS_PROVIDED_KIND_MIMETYPE
     */
    getProvidedForKind(kind: ProvidedKind): Provided | null
    /**
     * Get an array of items that are recommended by this component.
     */
    getRecommends(): Relation[]
    /**
     * Get an array of the #AsRelease items this component
     * provides.
     */
    getReleases(): Release[]
    /**
     * Get an array of items that are required by this component.
     */
    getRequires(): Relation[]
    /**
     * Gets any reviews associated with the component.
     */
    getReviews(): Review[]
    getScope(): ComponentScope
    /**
     * Get a list of associated screenshots.
     */
    getScreenshots(): Screenshot[]
    /**
     * Returns all search tokens for this component.
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
     */
    getSuggested(): Suggested[]
    /**
     * Get a short description of this component.
     */
    getSummary(): string
    /**
     * Get the internal locale to component summary
     * mapping table.
     */
    getSummaryTable(): GLib.HashTable
    /**
     * Get an array of items that are supported by this component,
     * e.g. to indicate support for a specific piece of hardware.
     */
    getSupports(): Relation[]
    /**
     * Gets the UNIX timestamp for the date when this component
     * is out of support (end-of-life) and will receive no more
     * updates, not even security fixes.
     */
    getTimestampEol(): number
    /**
     * Get a #GPtrArray of #AsTranslation objects describing the
     * translation systems and translation-ids (e.g. Gettext domains) used
     * by this software component.
     * 
     * Only set for metainfo files.
     */
    getTranslations(): Translation[]
    /**
     * Gets a URL.
     * @param urlKind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     */
    getUrl(urlKind: UrlKind): string | null
    getValueFlags(): ValueFlags
    hasBundle(): boolean
    /**
     * Check if component is in the specified category.
     * @param category the specified category to check
     */
    hasCategory(category: string): boolean
    /**
     * Test if the component is tagged with the selected
     * tag.
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     */
    hasTag(ns: string, tag: string): boolean
    /**
     * Add a key and value pair to the custom data table.
     * @param key Key name.
     * @param value A string value.
     */
    insertCustomValue(key: string, value: string): boolean
    /**
     * Check if this component is compulsory for the given desktop.
     * @param desktop the desktop-id to test for
     */
    isCompulsoryForDesktop(desktop: string): boolean
    isIgnored(): boolean
    /**
     * Test if the component `cpt` is a member of category `category`.
     * @param category The category to test.
     */
    isMemberOfCategory(category: Category): boolean
    /**
     * Check if the essential properties of this Component are
     * populated with useful data.
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
     */
    loadFromBytes(context: Context, format: FormatKind, bytes: any): boolean
    /**
     * Load metadata for this component from an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to create and update components.
     * @param context an #AsContext instance.
     * @param data The XML data to load.
     */
    loadFromXmlData(context: Context, data: string): boolean
    /**
     * Remove a tag from this component
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     */
    removeTag(ns: string, tag: string): boolean
    /**
     * Searches component data for a specific keyword.
     * @param term the search term.
     */
    searchMatches(term: string): number
    /**
     * Searches component data for all the specific keywords.
     * @param terms the search terms.
     */
    searchMatchesAll(terms: string): number
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
     */
    toString(): string
    /**
     * Serialize this component into an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to serialize components.
     * @param context an #AsContext instance.
     */
    toXmlData(context: Context): string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Component extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Component

    static name: string
    static $gtype: GObject.GType<Component>

    // Constructors of AppStream-1.0.AppStream.Component

    constructor(config?: Component_ConstructProps) 
    /**
     * Creates a new #AsComponent.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsComponent.
     * @constructor 
     */
    static new(): Component
    _init(config?: Component_ConstructProps): void
}

interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}

interface ContentRating {

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
     */
    getMinimumAge(): number
    /**
     * Gets the set of ratings IDs which are present in this `content_rating`. An
     * example of a ratings ID is `violence-bloodshed`.
     * 
     * The IDs are returned in lexicographical order.
     */
    getRatingIds(): string[]
    /**
     * Gets the value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContentRating extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.ContentRating

    static name: string
    static $gtype: GObject.GType<ContentRating>

    // Constructors of AppStream-1.0.AppStream.ContentRating

    constructor(config?: ContentRating_ConstructProps) 
    /**
     * Creates a new #AsContentRating.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsContentRating.
     * @constructor 
     */
    static new(): ContentRating
    _init(config?: ContentRating_ConstructProps): void
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
     */
    static attributeFromCsmAge(id: string, age: number): ContentRatingValue
    /**
     * Get a human-readable description of what content would be expected to
     * require the content rating attribute given by `id` and `value`.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     */
    static attributeGetDescription(id: string, value: ContentRatingValue): string
    /**
     * Gets the Common Sense Media approved age for a specific rating level.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     */
    static attributeToCsmAge(id: string, value: ContentRatingValue): number
    /**
     * Returns a list of all the valid OARS content rating attribute IDs as could
     * be passed to as_content_rating_add_attribute() or
     * as_content_rating_attribute_to_csm_age().
     */
    static getAllRatingIds(): string[]
}

interface Context_ConstructProps extends GObject.Object_ConstructProps {
}

interface Context {

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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Context extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of AppStream-1.0.AppStream.Context

    constructor(config?: Context_ConstructProps) 
    /**
     * Creates a new #AsContext.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsContext.
     * @constructor 
     */
    static new(): Context
    _init(config?: Context_ConstructProps): void
}

interface DistroDetails_ConstructProps extends GObject.Object_ConstructProps {
}

interface DistroDetails {

    // Own properties of AppStream-1.0.AppStream.DistroDetails

    readonly homepage: string
    readonly id: string
    readonly name: string
    readonly version: string

    // Own fields of AppStream-1.0.AppStream.DistroDetails

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.DistroDetails

    getBool(key: string, defaultVal: boolean): boolean
    getCid(): string
    getHomepage(): string
    getId(): string
    getName(): string
    getStr(key: string): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DistroDetails extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.DistroDetails

    static name: string
    static $gtype: GObject.GType<DistroDetails>

    // Constructors of AppStream-1.0.AppStream.DistroDetails

    constructor(config?: DistroDetails_ConstructProps) 
    /**
     * Creates a new instance of #AsDistroDetails.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #AsDistroDetails.
     * @constructor 
     */
    static new(): DistroDetails
    _init(config?: DistroDetails_ConstructProps): void
}

interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}

interface Icon {

    // Own fields of AppStream-1.0.AppStream.Icon

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Icon

    getFilename(): string
    getHeight(): number
    /**
     * Gets the icon kind.
     */
    getKind(): IconKind
    getName(): string
    getScale(): number
    /**
     * Gets the icon URL, pointing at a remote location. HTTPS and FTP urls are allowed.
     * This property is only set for icons of type %AS_ICON_KIND_REMOTE
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Icon extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Icon

    static name: string
    static $gtype: GObject.GType<Icon>

    // Constructors of AppStream-1.0.AppStream.Icon

    constructor(config?: Icon_ConstructProps) 
    /**
     * Creates a new #AsIcon.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsIcon.
     * @constructor 
     */
    static new(): Icon
    _init(config?: Icon_ConstructProps): void
}

interface Image_ConstructProps extends GObject.Object_ConstructProps {
}

interface Image {

    // Own fields of AppStream-1.0.AppStream.Image

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Image

    /**
     * Gets the image height.
     */
    getHeight(): number
    /**
     * Gets the image kind.
     */
    getKind(): ImageKind
    /**
     * Get locale for this image.
     */
    getLocale(): string
    /**
     * Gets the full qualified URL for the image, usually pointing at some mirror.
     */
    getUrl(): string
    /**
     * Gets the image width.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Image extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of AppStream-1.0.AppStream.Image

    constructor(config?: Image_ConstructProps) 
    /**
     * Creates a new #AsImage.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsImage.
     * @constructor 
     */
    static new(): Image
    _init(config?: Image_ConstructProps): void
}

interface Issue_ConstructProps extends GObject.Object_ConstructProps {
}

interface Issue {

    // Own fields of AppStream-1.0.AppStream.Issue

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Issue

    /**
     * Gets the issue ID (usually a bug number or CVE ID)
     */
    getId(): string
    /**
     * Gets the issue type.
     */
    getKind(): IssueKind
    /**
     * Gets the URL associacted with this issue, usually
     * referencing a bug report or issue description.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Issue extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Issue

    static name: string
    static $gtype: GObject.GType<Issue>

    // Constructors of AppStream-1.0.AppStream.Issue

    constructor(config?: Issue_ConstructProps) 
    /**
     * Creates a new #AsIssue.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsIssue.
     * @constructor 
     */
    static new(): Issue
    _init(config?: Issue_ConstructProps): void
}

interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Launchable {

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
     */
    getEntries(): string[]
    /**
     * The launch system for the entries this #AsLaunchable
     * object stores.
     */
    getKind(): LaunchableKind
    /**
     * Set the launch system for the entries this #AsLaunchable
     * object stores.
     * @param kind the new #AsLaunchableKind
     */
    setKind(kind: LaunchableKind): void

    // Class property signals of AppStream-1.0.AppStream.Launchable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Launchable extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Launchable

    static name: string
    static $gtype: GObject.GType<Launchable>

    // Constructors of AppStream-1.0.AppStream.Launchable

    constructor(config?: Launchable_ConstructProps) 
    /**
     * Creates a new #AsLaunchable.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsLaunchable.
     * @constructor 
     */
    static new(): Launchable
    _init(config?: Launchable_ConstructProps): void
}

interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}

interface Metadata {

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
     */
    componentToMetainfo(format: FormatKind): string
    /**
     * Serialize all #AsComponent instances into AppStream
     * collection metadata.
     * %NULL is returned if there is nothing to serialize.
     * @param format The format to serialize the data to (XML or YAML).
     */
    componentsToCollection(format: FormatKind): string
    getArchitecture(): string
    /**
     * Gets the #AsComponent which has been parsed from the XML.
     * If the AppStream XML contained multiple components, return the first
     * component that has been parsed.
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
     */
    parse(data: string, format: FormatKind): boolean
    /**
     * Parses any AppStream metadata into one or more #AsComponent instances.
     * @param bytes Metadata describing one or more software components.
     * @param format The format of the data (XML or YAML).
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
     */
    parseDesktopData(data: string, cid: string): boolean
    /**
     * Parses an AppStream upstream metadata file.
     * 
     * If `file` does not exist, %G_IO_ERROR_NOT_FOUND will be returned. Other
     * #GIOErrors and #AsMetadataErrors may be returned as appropriate.
     * @param file #GFile for the upstream metadata
     * @param format The format the data is in, or %AS_FORMAT_KIND_UNKNOWN if not known.
     */
    parseFile(file: Gio.File, format: FormatKind): boolean
    saveCollection(fname: string, format: FormatKind): boolean
    /**
     * Serialize #AsComponent instance to XML and save it to file.
     * An existing file at the same location will be overridden.
     * @param fname The filename for the new metadata file.
     * @param format The format to save this file in. Only XML is supported at time.
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
     * collection metadata file, and an invalid XML file.
     * This parameter should only be changed e.g. by the appstream-generator tool.
     * 
     * NOTE: Right now, this feature is only implemented for YAML!
     * @param wheader A boolean value.
     */
    setWriteHeader(wheader: boolean): void

    // Class property signals of AppStream-1.0.AppStream.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Metadata extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Metadata

    static name: string
    static $gtype: GObject.GType<Metadata>

    // Constructors of AppStream-1.0.AppStream.Metadata

    constructor(config?: Metadata_ConstructProps) 
    /**
     * Creates a new #AsMetadata.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsMetadata.
     * @constructor 
     */
    static new(): Metadata
    _init(config?: Metadata_ConstructProps): void
    /**
     * Guesses the AppStream metadata style (metainfo or collection) based on
     * the filename.
     * @param filename a file name
     */
    static fileGuessStyle(filename: string): FormatStyle
}

interface Pool_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Pool_ChangedSignalCallback {
    (): void
}

interface Pool {

    // Own fields of AppStream-1.0.AppStream.Pool

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Pool

    /**
     * Register a new component in the AppStream metadata pool.
     * @param cpt The #AsComponent to add to the pool.
     */
    addComponent(cpt: Component): boolean
    /**
     * Register a set of components with the pool temporarily.
     * Data from components added like this will not be cached.
     * @param cpts Array of components to add to the pool.
     */
    addComponents(cpts: Component[]): boolean
    /**
     * Add an additional non-standard location to the metadata pool where metadata will be read from.
     * If `directory` contains a "xml", "xmls", "yaml" or "icons" subdirectory (or all of them),
     * those paths will be added to the search paths instead.
     * @param directory An existing filesystem location.
     * @param formatStyle The expected format style of the metadata, e.g. %AS_FORMAT_STYLE_COLLECTION
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
     */
    getCacheLocation(): string
    /**
     * Get a list of found components.
     */
    getComponents(): Component[]
    /**
     * Return a list of components which are in one of the categories.
     * @param categories An array of XDG categories to include.
     */
    getComponentsByCategories(categories: string): Component[]
    /**
     * Find components extending the component with the given ID. They can then be registered to the
     * #AsComponent they extend via %as_component_add_addon.
     * If the %AS_POOL_FLAG_RESOLVE_ADDONS pool flag is set, addons are automatically resolved and
     * this explicit function is not needed, but overall query time will be increased (so only use
     * this flag if you will be resolving addon information later anyway).
     * @param extendedId The ID of the component to search extensions for.
     */
    getComponentsByExtends(extendedId: string): Component[]
    /**
     * Get a specific component by its ID.
     * This function may contain multiple results if we have
     * data describing this component from multiple scopes/origin types.
     * @param cid The AppStream-ID to look for.
     */
    getComponentsById(cid: string): Component[]
    /**
     * Return a list of all components in the pool which are of a certain kind.
     * @param kind An #AsComponentKind.
     */
    getComponentsByKind(kind: ComponentKind): Component[]
    /**
     * Find components in the AppStream data pool which provide a specific launchable.
     * See #AsLaunchable for details on launchables, or refer to the AppStream specification.
     * @param kind An #AsLaunchableKind
     * @param id The ID of the launchable.
     */
    getComponentsByLaunchable(kind: LaunchableKind, id: string): Component[]
    /**
     * Find components in the AppStream data pool which provide a certain item.
     * @param kind An #AsProvidesKind
     * @param item The value of the provided item.
     */
    getComponentsByProvidedItem(kind: ProvidedKind, item: string): Component[]
    /**
     * Get the #AsPoolFlags for this data pool.
     */
    getFlags(): PoolFlags
    /**
     * Gets the currently used locale.
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
     */
    loadFinish(result: Gio.AsyncResult): boolean
    /**
     * Update the AppStream cache. There is normally no need to call this function manually, because cache updates are handled
     * transparently in the background.
     * @param force Enforce refresh, even if source data has not changed.
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
     * @param search A search string
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

    // Own signals of AppStream-1.0.AppStream.Pool

    connect(sigName: "changed", callback: Pool_ChangedSignalCallback): number
    on(sigName: "changed", callback: Pool_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Pool_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Pool_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of AppStream-1.0.AppStream.Pool

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Pool extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Pool

    static name: string
    static $gtype: GObject.GType<Pool>

    // Constructors of AppStream-1.0.AppStream.Pool

    constructor(config?: Pool_ConstructProps) 
    /**
     * Creates a new #AsPool.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsPool.
     * @constructor 
     */
    static new(): Pool
    _init(config?: Pool_ConstructProps): void
}

interface Provided_ConstructProps extends GObject.Object_ConstructProps {
}

interface Provided {

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
     */
    getItems(): string[]
    /**
     * The kind of items this #AsProvided object stores.
     */
    getKind(): ProvidedKind
    /**
     * Check if the current #AsProvided contains an item
     * of the given name.
     * @param item the name of a provided item, e.g. "audio/x-vorbis" (in case the provided kind is a mimetype)
     */
    hasItem(item: string): boolean
    /**
     * Set the kind of items this #AsProvided object stores.
     * @param kind the new #AsProvidedKind
     */
    setKind(kind: ProvidedKind): void

    // Class property signals of AppStream-1.0.AppStream.Provided

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Provided extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Provided

    static name: string
    static $gtype: GObject.GType<Provided>

    // Constructors of AppStream-1.0.AppStream.Provided

    constructor(config?: Provided_ConstructProps) 
    /**
     * Creates a new #AsProvided.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsProvided.
     * @constructor 
     */
    static new(): Provided
    _init(config?: Provided_ConstructProps): void
}

interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}

interface Relation {

    // Own fields of AppStream-1.0.AppStream.Relation

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Relation

    /**
     * The version comparison type.
     */
    getCompare(): RelationCompare
    /**
     * Gets the display side kind, in case this item is of
     * kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH
     */
    getDisplaySideKind(): DisplaySideKind
    /**
     * The kind of the item of this #AsRelation.
     */
    getItemKind(): RelationItemKind
    /**
     * The type (and thereby strength) of this #AsRelation.
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
     */
    getValueControlKind(): ControlKind
    /**
     * In case this #AsRelation is of kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH,
     * return the #AsDisplayLengthKind.
     */
    getValueDisplayLengthKind(): DisplayLengthKind
    getValueInt(): number
    /**
     * In case this #AsRelation is of kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH,
     * return the set logical pixel amount.
     */
    getValuePx(): number
    getValueStr(): string
    getVersion(): string
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
     */
    versionCompare(version: string): boolean

    // Class property signals of AppStream-1.0.AppStream.Relation

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Relation extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Relation

    static name: string
    static $gtype: GObject.GType<Relation>

    // Constructors of AppStream-1.0.AppStream.Relation

    constructor(config?: Relation_ConstructProps) 
    /**
     * Creates a new #AsRelation.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsRelation.
     * @constructor 
     */
    static new(): Relation
    _init(config?: Relation_ConstructProps): void
}

interface Release_ConstructProps extends GObject.Object_ConstructProps {
}

interface Release {

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
     */
    getActiveLocale(): string
    /**
     * Get a list of all downloadable artifacts that are associated with
     * this release.
     */
    getArtifacts(): Artifact[]
    /**
     * Gets the release checksum
     * @param kind 
     */
    getChecksum(kind: ChecksumKind): Checksum | null
    /**
     * Get a list of all checksums we have for this release.
     */
    getChecksums(): Checksum[]
    /**
     * Gets the release date.
     */
    getDate(): string
    /**
     * Gets the end-of-life date for this release.
     */
    getDateEol(): string
    /**
     * Gets the release description markup for a given locale.
     */
    getDescription(): string | null
    /**
     * Get a list of all issues resolved by this release.
     */
    getIssues(): Issue[]
    /**
     * Gets the type of the release.
     * (development or stable release)
     */
    getKind(): ReleaseKind
    /**
     * Gets the release locations, typically URLs.
     */
    getLocations(): string[]
    /**
     * Gets the release size.
     * @param kind a #AsSizeKind
     */
    getSize(kind: SizeKind): number
    /**
     * Gets the release timestamp.
     */
    getTimestamp(): number
    /**
     * Gets the UNIX timestamp for the date when this
     * release is out of support (end-of-life).
     */
    getTimestampEol(): number
    /**
     * Gets the urgency of the release
     * (showing how important it is to update to a more recent release)
     */
    getUrgency(): UrgencyKind
    /**
     * Gets an URL.
     * @param urlKind the URL kind, e.g. %AS_RELEASE_URL_KIND_DETAILS.
     */
    getUrl(urlKind: ReleaseUrlKind): string | null
    /**
     * Gets the release version.
     */
    getVersion(): string | null
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * If the #AsComponent linking this #AsRelease was fetched
     * from a localized database, usually only
     * one locale is available.
     * @param locale 
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
     * @param locale 
     */
    setDescription(description: string, locale: string): void
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
     */
    vercmp(rel2: Release): number

    // Class property signals of AppStream-1.0.AppStream.Release

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Release extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Release

    static name: string
    static $gtype: GObject.GType<Release>

    // Constructors of AppStream-1.0.AppStream.Release

    constructor(config?: Release_ConstructProps) 
    /**
     * Creates a new #AsRelease.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsRelease.
     * @constructor 
     */
    static new(): Release
    _init(config?: Release_ConstructProps): void
}

interface Review_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of AppStream-1.0.AppStream.Review

    date?: Review | null
    description?: string | null
    flags?: number | null
    id?: string | null
    locale?: string | null
    rating?: number | null
    reviewerId?: string | null
    reviewerName?: string | null
    summary?: string | null
    version?: string | null
}

interface Review {

    // Own properties of AppStream-1.0.AppStream.Review

    date: Review
    description: string
    flags: number
    id: string
    locale: string
    rating: number
    reviewerId: string
    reviewerName: string
    summary: string
    version: string

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
     */
    equal(review2: Review): boolean
    /**
     * Gets the date the review was originally submitted.
     */
    getDate(): GLib.DateTime
    /**
     * Gets the multi-line review text that forms the body of the review.
     */
    getDescription(): string
    /**
     * Gets any flags set on the review, for example if the user has already
     * voted on the review or if the user wrote the review themselves.
     */
    getFlags(): ReviewFlags
    /**
     * Gets the review id.
     */
    getId(): string
    /**
     * Gets the locale for the review.
     */
    getLocale(): string
    /**
     * Gets some metadata from a review object.
     * It is left for the the plugin to use this method as required, but a
     * typical use would be to retrieve some secure authentication token.
     * @param key a string
     */
    getMetadataItem(key: string): string
    /**
     * This allows the UI to sort reviews into the correct order.
     * Higher numbers indicate a more important or relevant review.
     */
    getPriority(): number
    /**
     * Gets the star rating of the review, where 100 is 5 stars.
     */
    getRating(): number
    /**
     * Gets the name of the reviewer.
     */
    getReviewerId(): string
    /**
     * Gets the name of the reviewer.
     */
    getReviewerName(): string
    /**
     * Gets the review summary.
     */
    getSummary(): string
    /**
     * Gets the version string for the application being reviewed..
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Review extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Review

    static name: string
    static $gtype: GObject.GType<Review>

    // Constructors of AppStream-1.0.AppStream.Review

    constructor(config?: Review_ConstructProps) 
    /**
     * Creates a new #AsReview.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsReview.
     * @constructor 
     */
    static new(): Review
    _init(config?: Review_ConstructProps): void
}

interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}

interface Screenshot {

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
     * Get the current active locale, which
     * is used to get localized messages.
     */
    getActiveLocale(): string
    /**
     * Gets the image caption
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
     */
    getImage(width: number, height: number): Image
    /**
     * Gets the images for this screenshots. Only images valid for the current
     * language are returned. We return all sizes.
     */
    getImages(): Image[]
    /**
     * Returns an array of all images we have, regardless of their
     * size and language.
     */
    getImagesAll(): Image[]
    /**
     * Gets the screenshot kind.
     */
    getKind(): ScreenshotKind
    /**
     * Gets the screenshot media kind.
     */
    getMediaKind(): ScreenshotMediaKind
    /**
     * Gets the videos for this screenshots. Only videos valid for the current
     * language selection are returned. We return all sizes.
     */
    getVideos(): Video[]
    /**
     * Performs a quick validation on this screenshot
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Screenshot extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Screenshot

    static name: string
    static $gtype: GObject.GType<Screenshot>

    // Constructors of AppStream-1.0.AppStream.Screenshot

    constructor(config?: Screenshot_ConstructProps) 
    /**
     * Creates a new #AsScreenshot.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsScreenshot.
     * @constructor 
     */
    static new(): Screenshot
    _init(config?: Screenshot_ConstructProps): void
}

interface Suggested_ConstructProps extends GObject.Object_ConstructProps {
}

interface Suggested {

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
     */
    getIds(): string[]
    /**
     * Gets the suggested kind.
     */
    getKind(): SuggestedKind
    /**
     * Check if the essential properties of this suggestion are
     * populated with useful data.
     */
    isValid(): boolean
    /**
     * Sets the suggested kind.
     * @param kind the #AsSuggestedKind, e.g. %AS_SUGGESTED_KIND_HEURISTIC.
     */
    setKind(kind: SuggestedKind): void

    // Class property signals of AppStream-1.0.AppStream.Suggested

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Suggested extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Suggested

    static name: string
    static $gtype: GObject.GType<Suggested>

    // Constructors of AppStream-1.0.AppStream.Suggested

    constructor(config?: Suggested_ConstructProps) 
    /**
     * Creates a new #AsSuggested.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsSuggested.
     * @constructor 
     */
    static new(): Suggested
    _init(config?: Suggested_ConstructProps): void
}

interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}

interface Translation {

    // Own fields of AppStream-1.0.AppStream.Translation

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Translation

    /**
     * The ID (e.g. Gettext translation domain) of this translation.
     */
    getId(): string
    /**
     * The translation system type.
     */
    getKind(): TranslationKind
    /**
     * The locale of the source strings for this component. If this has not been
     * explicitly specified, `en_US` will be returned.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Translation extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Translation

    static name: string
    static $gtype: GObject.GType<Translation>

    // Constructors of AppStream-1.0.AppStream.Translation

    constructor(config?: Translation_ConstructProps) 
    /**
     * Creates a new #AsTranslation.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsTranslation.
     * @constructor 
     */
    static new(): Translation
    _init(config?: Translation_ConstructProps): void
}

interface Validator_ConstructProps extends GObject.Object_ConstructProps {
}

interface Validator {

    // Own fields of AppStream-1.0.AppStream.Validator

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Validator

    /**
     * Clears the list of issues
     */
    clearIssues(): void
    getCheckUrls(): boolean
    /**
     * Get a list of found metadata format issues.
     */
    getIssues(): ValidatorIssue[]
    /**
     * Get a hash table of filenames mapped to lists of issues.
     * This is useful if validation was requested for multiple files and
     * a list of issues per-file is desired without prior explicit sorting.
     */
    getIssuesPerFile(): GLib.HashTable
    getReportYaml(yamlReport: string): boolean
    /**
     * Get the explanatory text for a given issue tag.
     * @param tag 
     */
    getTagExplanation(tag: string): string
    /**
     * Get the severity for a given issue tag.
     * @param tag 
     */
    getTagSeverity(tag: string): IssueSeverity
    /**
     * Get an array of all tags known to the validator.
     */
    getTags(): string[]
    /**
     * Set this value to make the #AsValidator check whether remote URLs
     * actually exist.
     * @param value 
     */
    setCheckUrls(value: boolean): void
    /**
     * Validate AppStream XML data from a byte array.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata XML metadata as #GBytes.
     */
    validateBytes(metadata: any): boolean
    /**
     * Validate AppStream XML data.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata XML metadata.
     */
    validateData(metadata: string): boolean
    /**
     * Validate an AppStream XML file.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadataFile An AppStream XML file.
     */
    validateFile(metadataFile: Gio.File): boolean
    /**
     * Validate a full directory tree for issues in AppStream metadata.
     * @param rootDir The root directory of the filesystem tree that should be validated.
     */
    validateTree(rootDir: string): boolean

    // Class property signals of AppStream-1.0.AppStream.Validator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Validator extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Validator

    static name: string
    static $gtype: GObject.GType<Validator>

    // Constructors of AppStream-1.0.AppStream.Validator

    constructor(config?: Validator_ConstructProps) 
    /**
     * Creates a new #AsValidator.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsValidator.
     * @constructor 
     */
    static new(): Validator
    _init(config?: Validator_ConstructProps): void
}

interface ValidatorIssue_ConstructProps extends GObject.Object_ConstructProps {
}

interface ValidatorIssue {

    // Own fields of AppStream-1.0.AppStream.ValidatorIssue

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.ValidatorIssue

    /**
     * The component-id this issue is about.
     */
    getCid(): string
    /**
     * Get an extended explanation on this issue, or return %NULL
     * if none is available.
     */
    getExplanation(): string
    /**
     * The name of the file this issue was found in.
     */
    getFilename(): string
    /**
     * Get a short context hint for this issue.
     */
    getHint(): string
    /**
     * This function is deprecated and should not be used in new code.
     */
    getImportance(): IssueSeverity
    /**
     * Gets the line number where this issue was found.
     */
    getLine(): number
    /**
     * Builds a string containing all information about the location
     * where this issue occured that we know about.
     */
    getLocation(): string
    /**
     * This function is deprecated.
     */
    getMessage(): string
    /**
     * Gets the severity of this issue.
     */
    getSeverity(): IssueSeverity
    /**
     * Gets the issue tag string for this issue.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ValidatorIssue extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.ValidatorIssue

    static name: string
    static $gtype: GObject.GType<ValidatorIssue>

    // Constructors of AppStream-1.0.AppStream.ValidatorIssue

    constructor(config?: ValidatorIssue_ConstructProps) 
    /**
     * Creates a new #AsValidatorIssue.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsValidatorIssue.
     * @constructor 
     */
    static new(): ValidatorIssue
    _init(config?: ValidatorIssue_ConstructProps): void
}

interface Video_ConstructProps extends GObject.Object_ConstructProps {
}

interface Video {

    // Own fields of AppStream-1.0.AppStream.Video

    parentInstance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Video

    /**
     * Gets the video codec, if known.
     */
    getCodecKind(): VideoCodecKind
    /**
     * Gets the video container format, if known.
     */
    getContainerKind(): VideoContainerKind
    /**
     * Gets the video height, if known.
     */
    getHeight(): number
    /**
     * Get locale for this video.
     */
    getLocale(): string
    /**
     * Gets the full qualified URL for the video, usually pointing at a mirror or CDN server.
     */
    getUrl(): string
    /**
     * Gets the video width, if known.
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Video extends GObject.Object {

    // Own properties of AppStream-1.0.AppStream.Video

    static name: string
    static $gtype: GObject.GType<Video>

    // Constructors of AppStream-1.0.AppStream.Video

    constructor(config?: Video_ConstructProps) 
    /**
     * Creates a new #AsVideo.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AsVideo.
     * @constructor 
     */
    static new(): Video
    _init(config?: Video_ConstructProps): void
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