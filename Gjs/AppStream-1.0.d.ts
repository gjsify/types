// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppStream-1.0
 */

import type * as Gjs from './Gjs';
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
function agreement_kind_from_string(value: string): AgreementKind
/**
 * Converts the enumerated value to an text representation.
 * @param value the #AsAgreementKind.
 */
function agreement_kind_to_string(value: AgreementKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 */
function artifact_kind_from_string(kind: string): ArtifactKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsArtifactKind.
 */
function artifact_kind_to_string(kind: ArtifactKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param bundle_str the string.
 */
function bundle_kind_from_string(bundle_str: string): BundleKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsBundleKind.
 */
function bundle_kind_to_string(kind: BundleKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function checksum_kind_from_string(kind_str: string): ChecksumKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsChecksumKind.
 */
function checksum_kind_to_string(kind: ChecksumKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function color_kind_from_string(str: string): ColorKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsColorKind.
 */
function color_kind_to_string(kind: ColorKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function color_scheme_kind_from_string(str: string): ColorSchemeKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsColorSchemeKind.
 */
function color_scheme_kind_to_string(kind: ColorSchemeKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function component_kind_from_string(kind_str: string): ComponentKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsComponentKind.
 */
function component_kind_to_string(kind: ComponentKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param scope_str the string.
 */
function component_scope_from_string(scope_str: string): ComponentScope
/**
 * Converts the enumerated value to an text representation.
 * @param scope the #AsComponentScope.
 */
function component_scope_to_string(scope: ComponentScope): string
/**
 * Format `age` as a human-readable string in the given rating `system`. This is
 * the way to present system-specific strings in a UI.
 * @param system an #AsContentRatingSystem
 * @param age a CSM age to format
 */
function content_rating_system_format_age(system: ContentRatingSystem, age: number): string | null
/**
 * Determine the most appropriate #AsContentRatingSystem for the given `locale`.
 * Content rating systems are selected by territory. If no content rating system
 * seems suitable, %AS_CONTENT_RATING_SYSTEM_IARC is returned.
 * @param locale a locale, in the format described in `man 3 setlocale`
 */
function content_rating_system_from_locale(locale: string): ContentRatingSystem
/**
 * Get the CSM ages corresponding to the entries returned by
 * as_content_rating_system_get_formatted_ages() for this `system`.
 * @param system an #AsContentRatingSystem
 */
function content_rating_system_get_csm_ages(system: ContentRatingSystem): number[]
/**
 * Get an array of all the possible return values of
 * as_content_rating_system_format_age() for the given `system`. The array is
 * sorted with youngest CSM age first.
 * @param system an #AsContentRatingSystem
 */
function content_rating_system_get_formatted_ages(system: ContentRatingSystem): string[]
/**
 * Get a human-readable string to identify `system`. %NULL will be returned for
 * %AS_CONTENT_RATING_SYSTEM_UNKNOWN.
 * @param system an #AsContentRatingSystem
 */
function content_rating_system_to_string(system: ContentRatingSystem): string | null
/**
 * Converts the text representation to an enumerated value.
 * @param value the string.
 */
function content_rating_value_from_string(value: string): ContentRatingValue
/**
 * Converts the enumerated value to an text representation.
 * @param value the #AsContentRatingValue.
 */
function content_rating_value_to_string(value: ContentRatingValue): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function control_kind_from_string(kind_str: string): ControlKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsControlKind.
 */
function control_kind_to_string(kind: ControlKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function display_length_kind_from_string(kind_str: string): DisplayLengthKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsDisplayLengthKind.
 */
function display_length_kind_to_string(kind: DisplayLengthKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function display_side_kind_from_string(kind_str: string): DisplaySideKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsDisplaySideKind.
 */
function display_side_kind_to_string(kind: DisplaySideKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function format_kind_from_string(kind_str: string): FormatKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsFormatKind.
 */
function format_kind_to_string(kind: FormatKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param version_str the string.
 */
function format_version_from_string(version_str: string): FormatVersion
/**
 * Converts the enumerated value to an text representation.
 * @param version the #AsFormatKind.
 */
function format_version_to_string(version: FormatVersion): string
/**
 * Get the version of the AppStream library that is currently used
 * as a string.
 */
function get_appstream_version(): string
/**
 * Returns the component-ID of the current distribution based on contents
 * of the `/etc/os-release` file.
 * This function is a shorthand for %as_distro_details_get_cid
 */
function get_current_distro_component_id(): string
/**
 * Get a list of the default Freedesktop and AppStream categories
 * that software components (especially GUI applications) can be sorted
 * into in software centers.
 * @param with_special Include special categories (e.g. "addons", and "all"/"featured" in submenus)
 */
function get_default_categories(with_special: boolean): Category[]
/**
 * Get a web URL to the license text and more license information for an SPDX
 * license identifier.
 * @param license The SPDX license ID.
 */
function get_license_url(license: string): string
/**
 * Replaces all occurences of `find` with the string `replace` in a #GString.
 * @param string a #GString
 * @param find the string to find in `string`
 * @param replace the string to insert in place of `find`
 */
function gstring_replace(string: GLib.String, find: string, replace: string): number
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
function gstring_replace2(string: GLib.String, find: string, replace: string, limit: number): number
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function icon_kind_from_string(kind_str: string): IconKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsIconKind.
 */
function icon_kind_to_string(kind: IconKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 */
function image_kind_from_string(kind: string): ImageKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsImageKind.
 */
function image_kind_to_string(kind: ImageKind): string
/**
 * Searches the known list of SPDX license exception IDs.
 * @param exception_id a single SPDX license exception ID, e.g. "GCC-exception-3.1"
 */
function is_spdx_license_exception_id(exception_id: string): boolean
/**
 * Checks the licence string to check it being a valid licence.
 * NOTE: SPDX licenses can't typically contain brackets.
 * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
 */
function is_spdx_license_expression(license: string): boolean
/**
 * Searches the known list of SPDX license IDs.
 * @param license_id a single SPDX license ID, e.g. "GPL-3.0"
 */
function is_spdx_license_id(license_id: string): boolean
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function issue_kind_from_string(kind_str: string): IssueKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsIssueKind.
 */
function issue_kind_to_string(kind: IssueKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function issue_severity_from_string(str: string): IssueSeverity
/**
 * Converts the enumerated value to an text representation.
 * @param severity the #AsIssueSeverity.
 */
function issue_severity_to_string(severity: IssueSeverity): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function launchable_kind_from_string(kind_str: string): LaunchableKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsLaunchableKind.
 */
function launchable_kind_to_string(kind: LaunchableKind): string
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
function license_is_free_license(license: string): boolean
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
function license_is_metadata_license(license: string): boolean
/**
 * Tests license ID against the vetted list of licenses that
 * can be used for metainfo metadata.
 * This function will not work for license expressions, if you need
 * to test an SPDX license expression for compliance, please
 * use %as_license_is_metadata_license insread.
 * @param license_id a single SPDX license ID, e.g. "FSFAP"
 */
function license_is_metadata_license_id(license_id: string): boolean
/**
 * Converts a non-SPDX license into an SPDX format string where possible.
 * @param license a not-quite SPDX license string, e.g. "GPLv3+"
 */
function license_to_spdx_id(license: string): string
function markup_convert_simple(markup: string): string
/**
 * Splits up a long line into an array of smaller strings, each being no longer
 * than `line_len`. Words are not split.
 * @param text the text to split.
 * @param line_len the maximum length of the output line
 */
function markup_strsplit_words(text: string, line_len: number): string[]
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function merge_kind_from_string(kind_str: string): MergeKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsMergeKind.
 */
function merge_kind_to_string(kind: MergeKind): string
function metadata_error_quark(): GLib.Quark
function pool_error_quark(): GLib.Quark
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function provided_kind_from_string(kind_str: string): ProvidedKind
/**
 * Converts the enumerated value to a localized text representation,
 * using the plural forms (e.g. "Libraries" instead of "Library").
 * 
 * This can be useful when displaying provided items in GUI dialogs.
 * @param kind the #AsProvidedKind.
 */
function provided_kind_to_l10n_string(kind: ProvidedKind): string
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsProvidedKind.
 */
function provided_kind_to_string(kind: ProvidedKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param compare_str the string.
 */
function relation_compare_from_string(compare_str: string): RelationCompare
/**
 * Converts the enumerated value to an text representation.
 * The enum is converted into a two-letter identifier ("eq", "ge", etc.)
 * for use in the XML representation.
 * @param compare the #AsRelationCompare.
 */
function relation_compare_to_string(compare: RelationCompare): string
/**
 * Converts the enumerated value to an text representation.
 * The enum is converted into an identifier consisting of two
 * mathematical comparison operators ("==", ">=", etc.)
 * for use in the YAML representation and user interfaces.
 * @param compare the #AsRelationCompare.
 */
function relation_compare_to_symbols_string(compare: RelationCompare): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function relation_item_kind_from_string(kind_str: string): RelationItemKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsRelationKind.
 */
function relation_item_kind_to_string(kind: RelationItemKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function relation_kind_from_string(kind_str: string): RelationKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsRelationKind.
 */
function relation_kind_to_string(kind: RelationKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function release_kind_from_string(kind_str: string): ReleaseKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseKind.
 */
function release_kind_to_string(kind: ReleaseKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function release_url_kind_from_string(kind_str: string): ReleaseUrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsReleaseUrlKind.
 */
function release_url_kind_to_string(kind: ReleaseUrlKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind the string.
 */
function screenshot_kind_from_string(kind: string): ScreenshotKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsScreenshotKind.
 */
function screenshot_kind_to_string(kind: ScreenshotKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param size_kind the string.
 */
function size_kind_from_string(size_kind: string): SizeKind
/**
 * Converts the enumerated value to an text representation.
 * @param size_kind the #AsSizeKind.
 */
function size_kind_to_string(size_kind: SizeKind): string
/**
 * De-tokenizes the SPDX licenses into a string.
 * @param license_tokens license tokens, typically from as_spdx_license_tokenize()
 */
function spdx_license_detokenize(license_tokens: string): string | null
/**
 * Tokenizes the SPDX license string (or any simarly formatted string)
 * into parts. Any license parts of the string e.g. "LGPL-2.0+" are prefexed
 * with "`"`, the conjunctive replaced with "&", the disjunctive replaced
 * with "|" and the WITH operator for license exceptions replaced with "^".
 * Brackets are added as indervidual tokens and other strings are
 * appended into single tokens where possible.
 * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
 */
function spdx_license_tokenize(license: string): string[] | null
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function suggested_kind_from_string(kind_str: string): SuggestedKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the %AsSuggestedKind.
 */
function suggested_kind_to_string(kind: SuggestedKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param kind_str the string.
 */
function translation_kind_from_string(kind_str: string): TranslationKind
/**
 * Converts the enumerated value to a text representation.
 * @param kind the #AsTranslationKind.
 */
function translation_kind_to_string(kind: TranslationKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param urgency_kind the string.
 */
function urgency_kind_from_string(urgency_kind: string): UrgencyKind
/**
 * Converts the enumerated value to an text representation.
 * @param urgency_kind the %AsUrgencyKind.
 */
function urgency_kind_to_string(urgency_kind: UrgencyKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param url_kind the string.
 */
function url_kind_from_string(url_kind: string): UrlKind
/**
 * Converts the enumerated value to an text representation.
 * @param url_kind the %AsUrlKind.
 */
function url_kind_to_string(url_kind: UrlKind): string
/**
 * Builds an identifier string unique to the individual dataset using the supplied information.
 * @param scope Scope of the metadata as #AsComponentScope e.g. %AS_COMPONENT_SCOPE_SYSTEM
 * @param bundle_kind Bundling system providing this data, e.g. 'package' or 'flatpak'
 * @param origin Origin string, e.g. 'os' or 'gnome-apps-nightly'
 * @param cid AppStream component ID, e.g. 'org.freedesktop.appstream.cli'
 * @param branch Branch, e.g. '3-20' or 'master'
 */
function utils_build_data_id(scope: ComponentScope, bundle_kind: BundleKind, origin: string, cid: string, branch: string): string
/**
 * Compare alpha and numeric segments of two versions.
 * The version compare algorithm is also used by RPM.
 * @param a 
 * @param b 
 */
function utils_compare_versions(a: string, b: string): number
/**
 * Checks two component data IDs for equality allowing globs to match.
 * @param data_id1 a data ID
 * @param data_id2 another data ID
 */
function utils_data_id_equal(data_id1: string, data_id2: string): boolean
/**
 * Get the component-id part of the data-id.
 * @param data_id The data-id.
 */
function utils_data_id_get_cid(data_id: string): string
/**
 * Converts a data-id to a hash value.
 * 
 * This function implements the widely used DJB hash on the ID subset of the
 * data-id string.
 * 
 * It can be passed to g_hash_table_new() as the hash_func parameter,
 * when using non-NULL strings or unique_ids as keys in a GHashTable.
 * @param data_id a data ID
 */
function utils_data_id_hash(data_id: string): number
/**
 * Checks two data IDs for equality allowing globs to match, whilst also
 * allowing clients to whitelist sections that have to match.
 * @param data_id1 a data ID
 * @param data_id2 another data ID
 * @param match_flags a #AsDataIdMatchFlags bitfield, e.g. %AS_DATA_ID_MATCH_FLAG_ID
 */
function utils_data_id_match(data_id1: string, data_id2: string, match_flags: DataIdMatchFlags): boolean
/**
 * Checks if a data ID is valid i.e. has the correct number of
 * sections.
 * @param data_id a component data ID
 */
function utils_data_id_valid(data_id: string): boolean
function utils_error_quark(): GLib.Quark
/**
 * Guess the #AsComponentScope that applies to a given path.
 * @param path The filename to test.
 */
function utils_guess_scope_from_path(path: string): ComponentScope
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
function utils_install_metadata_file(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean
function utils_is_category_name(category_name: string): boolean
/**
 * Searches the known list of desktop environments AppStream
 * knows about.
 * @param desktop a desktop environment id.
 */
function utils_is_desktop_environment(desktop: string): boolean
/**
 * Test if the given string is a valid platform triplet recognized by
 * AppStream.
 * @param triplet a platform triplet.
 */
function utils_is_platform_triplet(triplet: string): boolean
/**
 * Searches the known list of TLDs we allow for AppStream IDs.
 * This excludes internationalized names.
 * @param tld a top-level domain without dot, e.g. "de", "org", "name"
 */
function utils_is_tld(tld: string): boolean
/**
 * Calculates if one locale is compatible with another.
 * When doing the calculation the locale and language code is taken into
 * account if possible.
 * @param locale1 a locale string, or %NULL
 * @param locale2 a locale string, or %NULL
 */
function utils_locale_is_compatible(locale1: string, locale2: string): boolean
/**
 * Sorts all components in `cpts` into the #AsCategory categories listed in `categories`.
 * @param cpts List of components.
 * @param categories List of categories to sort components into.
 * @param check_duplicates Whether to check for duplicates.
 */
function utils_sort_components_into_categories(cpts: Component[], categories: Category[], check_duplicates: boolean): void
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
function vercmp_simple(a: string, b: string): number
/**
 * Get the version of the AppStream library that is currently used
 * at runtime as a string.
 */
function version_string(): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function video_codec_kind_from_string(str: string): VideoCodecKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsVideoCodecKind.
 */
function video_codec_kind_to_string(kind: VideoCodecKind): string
/**
 * Converts the text representation to an enumerated value.
 * @param str the string.
 */
function video_container_kind_from_string(str: string): VideoContainerKind
/**
 * Converts the enumerated value to an text representation.
 * @param kind the #AsVideoContainerKind.
 */
function video_container_kind_to_string(kind: VideoContainerKind): string
interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}

interface Agreement {

    // Own fields of AppStream-1.0.AppStream.Agreement

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Agreement

    add_section(agreement_section: AgreementSection): void
    /**
     * Gets the agreement kind.
     */
    get_kind(): AgreementKind
    /**
     * Gets the first section in the agreement.
     */
    get_section_default(): AgreementSection | null
    /**
     * Gets all the sections in the agreement.
     */
    get_sections(): AgreementSection[]
    /**
     * Gets the agreement version_id.
     */
    get_version_id(): string
    /**
     * Sets the agreement kind.
     * @param kind the agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     */
    set_kind(kind: AgreementKind): void
    /**
     * Sets the agreement version identifier.
     * @param version_id the agreement version ID, e.g. "1.4a"
     */
    set_version_id(version_id: string): void

    // Class property signals of AppStream-1.0.AppStream.Agreement

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.AgreementSection

    /**
     * Get the current active locale, which
     * is used to get localized messages.
     */
    get_active_locale(): string
    /**
     * Gets the agreement section desc.
     */
    get_description(): string
    /**
     * Gets the agreement section kind.
     */
    get_kind(): string
    /**
     * Gets the agreement section name.
     */
    get_name(): string
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * @param locale 
     */
    set_active_locale(locale: string): void
    /**
     * Sets the agreement section desc.
     * @param desc the agreement description, e.g. "GDPR"
     * @param locale the locale. e.g. "en_GB"
     */
    set_description(desc: string, locale: string | null): void
    /**
     * Sets the agreement section kind.
     * @param kind the agreement kind, e.g. "GDPR"
     */
    set_kind(kind: string): void
    /**
     * Sets the agreement section name.
     * @param name the agreement name, e.g. "GDPR"
     * @param locale the locale. e.g. "en_GB"
     */
    set_name(name: string, locale: string | null): void

    // Class property signals of AppStream-1.0.AppStream.AgreementSection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Artifact

    /**
     * Add a checksum for the file associated with this artifact.
     * @param cs The #AsChecksum.
     */
    add_checksum(cs: Checksum): void
    /**
     * Adds a artifact location.
     * @param location An URL of the download location
     */
    add_location(location: string): void
    /**
     * Gets the bundle kind of this artifact.
     */
    get_bundle_kind(): BundleKind
    /**
     * Gets the artifact checksum
     * @param kind 
     */
    get_checksum(kind: ChecksumKind): Checksum | null
    /**
     * Get a list of all checksums we have for this artifact.
     */
    get_checksums(): Checksum[]
    /**
     * Gets a suggested filename for the downloaded artifact,
     * or %NULL if none is suggested.
     */
    get_filename(): string
    /**
     * Gets the artifact kind.
     */
    get_kind(): ArtifactKind
    /**
     * Gets the artifact locations, typically URLs.
     */
    get_locations(): string[]
    /**
     * Gets the artifact platform string (e.g. a triplet like "x86_64-linux-gnu").
     */
    get_platform(): string
    /**
     * Gets the artifact size.
     * @param kind a #AsSizeKind
     */
    get_size(kind: SizeKind): number
    /**
     * Sets the bundle kind for this release artifact.
     * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_TARBALL.
     */
    set_bundle_kind(kind: BundleKind): void
    /**
     * Sets a suggested filename for this artifact after it has been downloaded.
     * @param filename the file name suggestion.
     */
    set_filename(filename: string): void
    /**
     * Sets the artifact kind.
     * @param kind the #AsArtifactKind, e.g. %AS_ARTIFACT_KIND_SOURCE.
     */
    set_kind(kind: ArtifactKind): void
    /**
     * Sets the artifact platform triplet or identifier string.
     * @param platform the platform triplet.
     */
    set_platform(platform: string): void
    /**
     * Sets the artifact size for the given kind.
     * @param size a size in bytes, or 0 for unknown
     * @param kind a #AsSizeKind
     */
    set_size(size: number, kind: SizeKind): void

    // Class property signals of AppStream-1.0.AppStream.Artifact

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Branding

    /**
     * Retrieve a color of the given `kind` that matches `scheme_kind`.
     * If a color has no scheme preference defined, it will be returned for either scheme type,
     * unless a more suitable color was found.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param scheme_kind Color scheme preference for the color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
     */
    get_color(kind: ColorKind, scheme_kind: ColorSchemeKind): string | null
    /**
     * Deletes a color that matches the given type and scheme preference.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param scheme_preference Type of color scheme preferred for this color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
     */
    remove_color(kind: ColorKind, scheme_preference: ColorSchemeKind): void
    /**
     * Sets a new accent color. If a color of the given kind with the given scheme preference already exists,
     * it will be overriden with the new color code.
     * @param kind the #AsColorKind, e.g. %AS_COLOR_KIND_PRIMARY.
     * @param scheme_preference Type of color scheme preferred for this color, e.g. %AS_COLOR_SCHEME_KIND_LIGHT
     * @param colorcode a HTML color code.
     */
    set_color(kind: ColorKind, scheme_preference: ColorSchemeKind, colorcode: string): void

    // Class property signals of AppStream-1.0.AppStream.Branding

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Bundle

    /**
     * Gets the ID for this bundle.
     */
    get_id(): string
    /**
     * Gets the bundle kind.
     */
    get_kind(): BundleKind
    /**
     * Sets the ID for this bundle.
     * @param id the URL.
     */
    set_id(id: string): void
    /**
     * Sets the bundle kind.
     * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_LIMBA.
     */
    set_kind(kind: BundleKind): void

    // Class property signals of AppStream-1.0.AppStream.Bundle

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Category

    /**
     * Add a subcategory to this category.
     * @param subcat A subcategory to add.
     */
    add_child(subcat: Category): void
    /**
     * Add a component to this category.
     * @param cpt The #AsComponent to add.
     */
    add_component(cpt: Component): void
    /**
     * Add a desktop-file category to this #AsCategory.
     * @param group_name A subcategory to add.
     */
    add_desktop_group(group_name: string): void
    get_children(): Category[]
    /**
     * Get list of components which have been sorted into this category.
     */
    get_components(): Component[]
    get_desktop_groups(): string[]
    /**
     * Get the stock icon name for this category.
     */
    get_icon(): string
    /**
     * Get the ID of this category.
     */
    get_id(): string
    /**
     * Get the name of this category.
     */
    get_name(): string
    /**
     * Get the summary (short description) of this category.
     */
    get_summary(): string
    /**
     * Test for sub-categories.
     */
    has_children(): boolean
    /**
     * Check if the exact #AsComponent `cpt` is a member of this
     * category already.
     * @param cpt The #AsComponent to look for.
     */
    has_component(cpt: Component): boolean
    /**
     * Drop a subcategory from this #AsCategory.
     * @param subcat A subcategory to remove.
     */
    remove_child(subcat: Category): void
    /**
     * Set the stock icon name for this category.
     * @param value 
     */
    set_icon(value: string): void
    /**
     * Set the ID of this category.
     * @param id 
     */
    set_id(id: string): void
    /**
     * Set the name of this category.
     * @param value 
     */
    set_name(value: string): void
    /**
     * Get the summary (short description) of this category.
     * @param value A new short summary of this category.
     */
    set_summary(value: string): void

    // Class property signals of AppStream-1.0.AppStream.Category

    connect(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Checksum

    /**
     * Gets the checksum type.
     */
    get_kind(): ChecksumKind
    /**
     * Gets the checksum, usually in its hexadecimal form.
     */
    get_value(): string
    /**
     * Sets the checksum type.
     * @param kind the #AsChecksumKind, e.g. %AS_CHECKSUM_KIND_SHA256.
     */
    set_kind(kind: ChecksumKind): void
    /**
     * Sets the checksum value filename.
     * @param value the new value.
     */
    set_value(value: string): void

    // Class property signals of AppStream-1.0.AppStream.Checksum

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static new_for_kind_value(kind: ChecksumKind, value: string): Checksum
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
    developer_name?: string | null
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
    project_group?: string | null
    /**
     * the project license
     */
    project_license?: string | null
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
    developer_name: string
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
    project_group: string
    /**
     * the project license
     */
    project_license: string
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Component

    /**
     * Add a reference to the addon that is enhancing this component.
     * @param addon The #AsComponent that extends `cpt`
     */
    add_addon(addon: Component): void
    /**
     * Adds an agreement to the software component.
     * @param agreement an #AsAgreement instance.
     */
    add_agreement(agreement: Agreement): void
    /**
     * Adds a bundle to the component.
     * @param bundle The #AsBundle to add.
     */
    add_bundle(bundle: Bundle): void
    /**
     * Add a category.
     * @param category the categories name to add.
     */
    add_category(category: string): void
    /**
     * Adds a content rating to this component.
     * @param content_rating a #AsContentRating instance.
     */
    add_content_rating(content_rating: ContentRating): void
    /**
     * Add a reference to the extended component
     * @param cpt_id The id of a component which is extended by this component
     */
    add_extends(cpt_id: string): void
    /**
     * Add an icon to this component.
     * @param icon the valid #AsIcon instance to add.
     */
    add_icon(icon: Icon): void
    /**
     * Adds a language to the component.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     * @param percentage the percentage completion of the translation, 0 for locales with unknown amount of translation
     */
    add_language(locale: string | null, percentage: number): void
    /**
     * Adds a #AsLaunchable containing launchables entries for this component.
     * @param launchable a #AsLaunchable instance.
     */
    add_launchable(launchable: Launchable): void
    /**
     * Add a set of provided items to this component.
     * @param prov a #AsProvided instance.
     */
    add_provided(prov: Provided): void
    /**
     * Adds a provided item to the component with the given `kind,` creating a new
     * `AsProvided` for this kind internally if necessary.
     * @param kind the kind of the provided item (e.g. %AS_PROVIDED_KIND_MEDIATYPE)
     * @param item the item to add.
     */
    add_provided_item(kind: ProvidedKind, item: string): void
    /**
     * Adds a #AsRelation to set a recommends or requires relation of
     * component `cpt` on the item mentioned in the #AsRelation.
     * @param relation a #AsRelation instance.
     */
    add_relation(relation: Relation): void
    /**
     * Add an #AsRelease to this component.
     * @param release The #AsRelease to add
     */
    add_release(release: Release): void
    /**
     * Adds a user review to a software component.
     * @param review a #AsReview instance.
     */
    add_review(review: Review): void
    /**
     * Add an #AsScreenshot to this component.
     * @param sshot The #AsScreenshot to add
     */
    add_screenshot(sshot: Screenshot): void
    /**
     * Add an #AsSuggested to this component.
     * @param suggested The #AsSuggested
     */
    add_suggested(suggested: Suggested): void
    /**
     * Add a tag to this component.
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     */
    add_tag(ns: string, tag: string): boolean
    /**
     * Assign an #AsTranslation object describing the translation system used
     * by this component.
     * @param tr an #AsTranslation instance.
     */
    add_translation(tr: Translation): void
    /**
     * Adds some URL data to the component.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE
     * @param url the full URL.
     */
    add_url(url_kind: UrlKind, url: string): void
    /**
     * Remove all registered language translation information.
     */
    clear_languages(): void
    /**
     * Remove all tags associated with this component.
     */
    clear_tags(): void
    /**
     * Get the current active locale for this component, which
     * is used to get localized messages.
     */
    get_active_locale(): string
    /**
     * Returns a list of #AsComponent objects which
     * are addons extending this component in functionality.
     * 
     * This is the reverse of %as_component_get_extends()
     */
    get_addons(): Component[]
    /**
     * Gets an agreement the component has specified for the particular kind.
     * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     */
    get_agreement_by_kind(kind: AgreementKind): Agreement | null
    /**
     * Get a list of all agreements registered with this software component.
     */
    get_agreements(): Agreement[]
    /**
     * Gets the branch for the application.
     */
    get_branch(): string
    /**
     * Get the branding associated with this component, or %NULL
     * in case this component has no special branding.
     */
    get_branding(): Branding | null
    /**
     * Gets a bundle identifier string.
     * @param bundle_kind the bundle kind, e.g. %AS_BUNDLE_KIND_LIMBA.
     */
    get_bundle(bundle_kind: BundleKind): Bundle | null
    /**
     * Get a list of all software bundles associated with this component.
     */
    get_bundles(): Bundle[]
    get_categories(): string[]
    get_compulsory_for_desktops(): string[]
    /**
     * Gets a content ratings of a specific type that are defined for this component.
     * @param kind a ratings kind, e.g. "oars-1.0"
     */
    get_content_rating(kind: string): ContentRating | null
    /**
     * Gets all content ratings defined for this software.
     */
    get_content_ratings(): ContentRating[]
    /**
     * Get the #AsContext associated with this component.
     * This function may return %NULL if no context is set
     * (which will be the case if the component was not loaded from
     * a file or cache but constructed in memory).
     */
    get_context(): Context | null
    get_custom(): GLib.HashTable
    /**
     * Retrieve value for a custom data entry with the given key.
     * @param key Field name.
     */
    get_custom_value(key: string): string
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
    get_data_id(): string
    /**
     * Gets the end-of-life date for the entire component.
     */
    get_date_eol(): string
    /**
     * Get the localized long description of this component.
     */
    get_description(): string
    /**
     * Get the Desktop Entry ID for this component, if it is
     * of type "desktop-application".
     * For most desktop-application components, this is the name
     * of the .desktop file.
     * 
     * Refer to https://specifications.freedesktop.org/desktop-entry-spec/latest/ape.html for more
     * information.
     */
    get_desktop_id(): string
    /**
     * Get the component's developer or development team name.
     */
    get_developer_name(): string
    /**
     * Returns a string list of IDs of components which
     * are extended by this addon.
     * 
     * See %as_component_get_extends() for the reverse.
     */
    get_extends(): string[] | null
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
    get_icon_by_size(width: number, height: number): Icon | null
    /**
     * Gets a stock icon for this component if one is associated with it.
     * Will return %NULL otherwise.
     */
    get_icon_stock(): Icon | null
    get_icons(): Icon[]
    /**
     * Get the unique AppStream identifier for this component.
     * This ID is unique for the described component, but does
     * not uniquely identify the metadata set.
     * 
     * For a unique ID for this metadata set in the current
     * session, use %as_component_get_data_id()
     */
    get_id(): string
    get_keywords(): string[]
    /**
     * Retrieve the internal hash table mapping languages to
     * keword arrays.
     */
    get_keywords_table(): GLib.HashTable
    /**
     * Returns the #AsComponentKind of this component.
     */
    get_kind(): ComponentKind
    /**
     * Gets the translation coverage in percent for a specific locale
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    get_language(locale: string | null): number
    /**
     * Get a list of all languages.
     */
    get_languages(): string[]
    /**
     * Gets a #AsLaunchable of a specific type that contains launchable entries for
     * this component.
     * @param kind a launch kind, e.g. %AS_LAUNCHABLE_KIND_DESKTOP_ID
     */
    get_launchable(kind: LaunchableKind): Launchable | null
    get_launchables(): Launchable[]
    /**
     * Get the merge method which should apply to duplicate components
     * with this ID.
     */
    get_merge_kind(): MergeKind
    /**
     * The license the metadata iself is subjected to.
     */
    get_metadata_license(): string
    /**
     * A human-readable name for this component.
     */
    get_name(): string
    /**
     * Get the internal locale to component name
     * mapping table.
     */
    get_name_table(): GLib.HashTable
    /**
     * Get variant suffix for the component name
     * (only to be displayed if two components have the same name).
     */
    get_name_variant_suffix(): string
    get_origin(): string
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
    get_pkgname(): string
    /**
     * Get a list of package names which this component consists of.
     * This usually is just one package name.
     */
    get_pkgnames(): string[]
    /**
     * Returns the priority of this component.
     * This method is used internally.
     */
    get_priority(): number
    /**
     * Get the component's project group.
     */
    get_project_group(): string
    /**
     * Get the license of the project this component belongs to.
     */
    get_project_license(): string
    /**
     * Get a list of #AsProvided objects associated with this component.
     */
    get_provided(): Provided[]
    /**
     * Get an #AsProvided object for the given interface type,
     * containing information about the public interfaces (mimetypes, firmware, DBus services, ...)
     * this component provides.
     * @param kind kind of the provided item, e.g. %AS_PROVIDED_KIND_MIMETYPE
     */
    get_provided_for_kind(kind: ProvidedKind): Provided | null
    /**
     * Get an array of items that are recommended by this component.
     */
    get_recommends(): Relation[]
    /**
     * Get an array of the #AsRelease items this component
     * provides.
     */
    get_releases(): Release[]
    /**
     * Get an array of items that are required by this component.
     */
    get_requires(): Relation[]
    /**
     * Gets any reviews associated with the component.
     */
    get_reviews(): Review[]
    get_scope(): ComponentScope
    /**
     * Get a list of associated screenshots.
     */
    get_screenshots(): Screenshot[]
    /**
     * Returns all search tokens for this component.
     */
    get_search_tokens(): string[]
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
    get_sort_score(): number
    get_source_pkgname(): string
    /**
     * Get a list of associated suggestions.
     */
    get_suggested(): Suggested[]
    /**
     * Get a short description of this component.
     */
    get_summary(): string
    /**
     * Get the internal locale to component summary
     * mapping table.
     */
    get_summary_table(): GLib.HashTable
    /**
     * Get an array of items that are supported by this component,
     * e.g. to indicate support for a specific piece of hardware.
     */
    get_supports(): Relation[]
    /**
     * Gets the UNIX timestamp for the date when this component
     * is out of support (end-of-life) and will receive no more
     * updates, not even security fixes.
     */
    get_timestamp_eol(): number
    /**
     * Get a #GPtrArray of #AsTranslation objects describing the
     * translation systems and translation-ids (e.g. Gettext domains) used
     * by this software component.
     * 
     * Only set for metainfo files.
     */
    get_translations(): Translation[]
    /**
     * Gets a URL.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     */
    get_url(url_kind: UrlKind): string | null
    get_value_flags(): ValueFlags
    has_bundle(): boolean
    /**
     * Check if component is in the specified category.
     * @param category the specified category to check
     */
    has_category(category: string): boolean
    /**
     * Test if the component is tagged with the selected
     * tag.
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     */
    has_tag(ns: string, tag: string): boolean
    /**
     * Add a key and value pair to the custom data table.
     * @param key Key name.
     * @param value A string value.
     */
    insert_custom_value(key: string, value: string): boolean
    /**
     * Check if this component is compulsory for the given desktop.
     * @param desktop the desktop-id to test for
     */
    is_compulsory_for_desktop(desktop: string): boolean
    is_ignored(): boolean
    /**
     * Test if the component `cpt` is a member of category `category`.
     * @param category The category to test.
     */
    is_member_of_category(category: Category): boolean
    /**
     * Check if the essential properties of this Component are
     * populated with useful data.
     */
    is_valid(): boolean
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
    load_from_bytes(context: Context, format: FormatKind, bytes: GLib.Bytes): boolean
    /**
     * Load metadata for this component from an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to create and update components.
     * @param context an #AsContext instance.
     * @param data The XML data to load.
     */
    load_from_xml_data(context: Context, data: string): boolean
    /**
     * Remove a tag from this component
     * @param ns The namespace the tag belongs to
     * @param tag The tag name
     */
    remove_tag(ns: string, tag: string): boolean
    /**
     * Searches component data for a specific keyword.
     * @param term the search term.
     */
    search_matches(term: string): number
    /**
     * Searches component data for all the specific keywords.
     * @param terms the search terms.
     */
    search_matches_all(terms: string): number
    /**
     * Set the current active locale for this component, which
     * is used to get localized messages.
     * If the #AsComponent was fetched from a localized database, usually only
     * one locale is available.
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    set_active_locale(locale: string | null): void
    /**
     * Set the branch that the component instance was sourced from.
     * @param branch the branch, e.g. "master" or "3-16".
     */
    set_branch(branch: string): void
    /**
     * Set branding for this component.
     * @param branding an #AsBranding instance.
     */
    set_branding(branding: Branding): void
    /**
     * Mark this component to be compulsory for the specified desktop environment.
     * @param desktop The name of the desktop.
     */
    set_compulsory_for_desktop(desktop: string): void
    /**
     * Set the session-specific unique metadata identifier for this
     * component.
     * If two components have a different data_id but the same ID,
     * they will be treated as independent sets of metadata describing
     * the same component type.
     * @param value the unique session-specific identifier.
     */
    set_data_id(value: string): void
    /**
     * Sets an end-of-life date for this component.
     * @param date the EOL date in ISO8601 format.
     */
    set_date_eol(date: string): void
    /**
     * Set long description for this component.
     * @param value The long description
     * @param locale The locale the used for this value, or %NULL to use the current active one.
     */
    set_description(value: string, locale: string | null): void
    /**
     * Set the the component's developer or development team name.
     * @param value the developer or developer team name
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    set_developer_name(value: string, locale: string | null): void
    /**
     * Set the AppStream identifier for this component.
     * @param value the unique identifier.
     */
    set_id(value: string): void
    /**
     * Set keywords for this component.
     * @param value String-array of keywords
     * @param locale Locale of the values, or %NULL to use current locale.
     */
    set_keywords(value: string[], locale: string | null): void
    /**
     * Sets the #AsComponentKind of this component.
     * @param value the #AsComponentKind.
     */
    set_kind(value: ComponentKind): void
    /**
     * Sets the #AsMergeKind for this component.
     * @param kind the #AsMergeKind.
     */
    set_merge_kind(kind: MergeKind): void
    /**
     * Set the license this metadata is licensed under.
     * @param value the metadata license.
     */
    set_metadata_license(value: string): void
    /**
     * Set a human-readable name for this component.
     * @param value The name
     * @param locale The locale the used for this value, or %NULL to use the current active one.
     */
    set_name(value: string, locale: string | null): void
    /**
     * Set a variant suffix for the component name
     * (only to be displayed if components have the same name).
     * @param value the developer or developer team name
     * @param locale the locale, or %NULL. e.g. "en_GB"
     */
    set_name_variant_suffix(value: string, locale: string | null): void
    set_origin(origin: string): void
    /**
     * Set the package name that provides this component.
     * @param pkgname the package name
     */
    set_pkgname(pkgname: string): void
    /**
     * Set a list of package names this component consists of.
     * (This should usually be just one package name)
     * @param packages 
     */
    set_pkgnames(packages: string[]): void
    /**
     * Sets the priority of this component.
     * This method is used internally.
     * @param priority the given priority
     */
    set_priority(priority: number): void
    /**
     * Set the component's project group.
     * @param value the project group.
     */
    set_project_group(value: string): void
    /**
     * Set the project license.
     * @param value the project license.
     */
    set_project_license(value: string): void
    /**
     * Sets the #AsComponentScope of this component.
     * @param scope the #AsComponentKind.
     */
    set_scope(scope: ComponentScope): void
    /**
     * Sets the sorting score of this component.
     * @param score the given sorting score
     */
    set_sort_score(score: number): void
    set_source_pkgname(spkgname: string): void
    /**
     * Set a short description for this component.
     * @param value The summary
     * @param locale The locale the used for this value, or %NULL to use the current active one.
     */
    set_summary(value: string, locale: string | null): void
    set_value_flags(flags: ValueFlags): void
    /**
     * Returns a string identifying this component.
     * (useful for debugging)
     */
    to_string(): string
    /**
     * Serialize this component into an XML string.
     * You normally do not want to use this method directly and instead use the more
     * convenient API of #AsMetadata to serialize components.
     * @param context an #AsContext instance.
     */
    to_xml_data(context: Context): string

    // Class property signals of AppStream-1.0.AppStream.Component

    connect(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::developer-name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer-name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::developer-name", ...args: any[]): void
    connect(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icons", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keywords", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pkgnames", ...args: any[]): void
    connect(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project-group", ...args: any[]): void
    connect(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project-license", ...args: any[]): void
    connect(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screenshots", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.ContentRating

    /**
     * Adds an attribute value to the content rating.
     * @param id a content rating ID, e.g. `money-gambling`.
     * @param value a #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_MODERATE.
     */
    add_attribute(id: string, value: ContentRatingValue): void
    /**
     * Gets the content_rating kind.
     */
    get_kind(): string
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
    get_minimum_age(): number
    /**
     * Gets the set of ratings IDs which are present in this `content_rating`. An
     * example of a ratings ID is `violence-bloodshed`.
     * 
     * The IDs are returned in lexicographical order.
     */
    get_rating_ids(): string[]
    /**
     * Gets the value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
     */
    get_value(id: string): ContentRatingValue
    /**
     * Sets the content rating kind.
     * @param kind the rating kind, e.g. "oars-1.0"
     */
    set_kind(kind: string): void
    /**
     * Sets the value of a content rating key.
     * @param id A ratings ID, e.g. `violence-bloodshed`.
     * @param value A #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     */
    set_value(id: string, value: ContentRatingValue): void

    // Class property signals of AppStream-1.0.AppStream.ContentRating

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static attribute_from_csm_age(id: string, age: number): ContentRatingValue
    /**
     * Get a human-readable description of what content would be expected to
     * require the content rating attribute given by `id` and `value`.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     */
    static attribute_get_description(id: string, value: ContentRatingValue): string
    /**
     * Gets the Common Sense Media approved age for a specific rating level.
     * @param id the subsection ID e.g. `violence-cartoon`
     * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
     */
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number
    /**
     * Returns a list of all the valid OARS content rating attribute IDs as could
     * be passed to as_content_rating_add_attribute() or
     * as_content_rating_attribute_to_csm_age().
     */
    static get_all_rating_ids(): string[]
}

interface Context_ConstructProps extends GObject.Object_ConstructProps {
}

interface Context {

    // Own fields of AppStream-1.0.AppStream.Context

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Context

    get_filename(): string
    get_format_version(): FormatVersion
    get_locale(): string
    get_locale_all_enabled(): boolean
    get_media_baseurl(): string
    get_origin(): string
    get_priority(): number
    get_style(): FormatStyle
    has_media_baseurl(): boolean
    /**
     * Sets the file name we are loading data from.
     * @param fname the new file name.
     */
    set_filename(fname: string): void
    /**
     * Sets the AppStream format version.
     * @param ver the new format version.
     */
    set_format_version(ver: FormatVersion): void
    /**
     * Sets the active locale.
     * @param value the new value.
     */
    set_locale(value: string): void
    /**
     * Sets the media base URL.
     * @param value the new value.
     */
    set_media_baseurl(value: string): void
    /**
     * Sets the data origin.
     * @param value the new value.
     */
    set_origin(value: string): void
    /**
     * Sets the data priority.
     * @param priority the new priority.
     */
    set_priority(priority: number): void
    /**
     * Sets the AppStream document style.
     * @param style the new document style.
     */
    set_style(style: FormatStyle): void

    // Class property signals of AppStream-1.0.AppStream.Context

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.DistroDetails

    get_bool(key: string, default_val: boolean): boolean
    get_cid(): string
    get_homepage(): string
    get_id(): string
    get_name(): string
    get_str(key: string): string
    get_version(): string

    // Class property signals of AppStream-1.0.AppStream.DistroDetails

    connect(sigName: "notify::homepage", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homepage", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Icon

    get_filename(): string
    get_height(): number
    /**
     * Gets the icon kind.
     */
    get_kind(): IconKind
    get_name(): string
    get_scale(): number
    /**
     * Gets the icon URL, pointing at a remote location. HTTPS and FTP urls are allowed.
     * This property is only set for icons of type %AS_ICON_KIND_REMOTE
     */
    get_url(): string
    get_width(): number
    /**
     * Sets the icon absolute filename.
     * @param filename the new icon URL.
     */
    set_filename(filename: string): void
    /**
     * Sets the icon height.
     * @param height the height in pixels.
     */
    set_height(height: number): void
    /**
     * Sets the icon kind.
     * @param kind the #AsIconKind, e.g. %AS_ICON_KIND_CACHED.
     */
    set_kind(kind: IconKind): void
    /**
     * Sets the stock name or basename to use for the icon.
     * @param name the icon stock name, e.g. "gwenview"
     */
    set_name(name: string): void
    /**
     * Sets the icon scaling factor used for HiDPI displays.
     * @param scale the icon scaling factor.
     */
    set_scale(scale: number): void
    /**
     * Sets the icon URL.
     * @param url the new icon URL.
     */
    set_url(url: string): void
    /**
     * Sets the icon width.
     * @param width the width in pixels.
     */
    set_width(width: number): void

    // Class property signals of AppStream-1.0.AppStream.Icon

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Image

    /**
     * Gets the image height.
     */
    get_height(): number
    /**
     * Gets the image kind.
     */
    get_kind(): ImageKind
    /**
     * Get locale for this image.
     */
    get_locale(): string
    /**
     * Gets the full qualified URL for the image, usually pointing at some mirror.
     */
    get_url(): string
    /**
     * Gets the image width.
     */
    get_width(): number
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
     * Sets the locale for this image.
     * @param locale the locale string.
     */
    set_locale(locale: string): void
    /**
     * Sets the fully-qualified mirror URL to use for the image.
     * @param url the URL.
     */
    set_url(url: string): void
    /**
     * Sets the image width.
     * @param width the width in pixels.
     */
    set_width(width: number): void

    // Class property signals of AppStream-1.0.AppStream.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Issue

    /**
     * Gets the issue ID (usually a bug number or CVE ID)
     */
    get_id(): string
    /**
     * Gets the issue type.
     */
    get_kind(): IssueKind
    /**
     * Gets the URL associacted with this issue, usually
     * referencing a bug report or issue description.
     */
    get_url(): string
    /**
     * Sets the issue ID.
     * @param id the new ID.
     */
    set_id(id: string): void
    /**
     * Sets the issue type.
     * @param kind the #AsIssueKind, e.g. %AS_ISSUE_KIND_SHA256.
     */
    set_kind(kind: IssueKind): void
    /**
     * Sets an URL describing this issue.
     * @param url the new URL.
     */
    set_url(url: string): void

    // Class property signals of AppStream-1.0.AppStream.Issue

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Launchable

    /**
     * Add a new launchable entry.
     * @param entry 
     */
    add_entry(entry: string): void
    /**
     * Get an array of launchable entries.
     */
    get_entries(): string[]
    /**
     * The launch system for the entries this #AsLaunchable
     * object stores.
     */
    get_kind(): LaunchableKind
    /**
     * Set the launch system for the entries this #AsLaunchable
     * object stores.
     * @param kind the new #AsLaunchableKind
     */
    set_kind(kind: LaunchableKind): void

    // Class property signals of AppStream-1.0.AppStream.Launchable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Metadata

    /**
     * Add an #AsComponent to the list of components.
     * This can be used to add multiple components in order to
     * produce a distro-XML AppStream metadata file.
     * @param cpt 
     */
    add_component(cpt: Component): void
    clear_components(): void
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
    component_to_metainfo(format: FormatKind): string
    /**
     * Serialize all #AsComponent instances into AppStream
     * collection metadata.
     * %NULL is returned if there is nothing to serialize.
     * @param format The format to serialize the data to (XML or YAML).
     */
    components_to_collection(format: FormatKind): string
    get_architecture(): string
    /**
     * Gets the #AsComponent which has been parsed from the XML.
     * If the AppStream XML contained multiple components, return the first
     * component that has been parsed.
     */
    get_component(): Component | null
    get_components(): Component[]
    /**
     * Get the metadata parsing mode.
     */
    get_format_style(): FormatStyle
    get_format_version(): FormatVersion
    /**
     * Gets the current active locale for parsing metadata,
     * or "ALL" if all locales are read.
     */
    get_locale(): string
    get_media_baseurl(): string
    get_origin(): string
    /**
     * Get the metadata parse flags.
     */
    get_parse_flags(): ParseFlags
    get_update_existing(): boolean
    get_write_header(): boolean
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
    parse_bytes(bytes: GLib.Bytes, format: FormatKind): boolean
    /**
     * Parses XDG Desktop Entry metadata and adds it to the list of parsed entities.
     * 
     * Please note that not every desktop-entry file will result in a valid component
     * being generated, even if parsing succeeds without error (The desktiop-entry file
     * may be valid but not generate a component on purpose).
     * @param data Metadata describing one or more software components.
     * @param cid The component-id the new #AsComponent should have.
     */
    parse_desktop_data(data: string, cid: string): boolean
    /**
     * Parses an AppStream upstream metadata file.
     * 
     * If `file` does not exist, %G_IO_ERROR_NOT_FOUND will be returned. Other
     * #GIOErrors and #AsMetadataErrors may be returned as appropriate.
     * @param file #GFile for the upstream metadata
     * @param format The format the data is in, or %AS_FORMAT_KIND_UNKNOWN if not known.
     */
    parse_file(file: Gio.File, format: FormatKind): boolean
    save_collection(fname: string, format: FormatKind): boolean
    /**
     * Serialize #AsComponent instance to XML and save it to file.
     * An existing file at the same location will be overridden.
     * @param fname The filename for the new metadata file.
     * @param format The format to save this file in. Only XML is supported at time.
     */
    save_metainfo(fname: string, format: FormatKind): boolean
    /**
     * Set the architecture the components in this metadata belong to.
     * @param arch an architecture string.
     */
    set_architecture(arch: string): void
    /**
     * Sets the current metadata parsing mode.
     * @param mode the #AsFormatStyle.
     */
    set_format_style(mode: FormatStyle): void
    /**
     * Set the current AppStream format version that we should generate data for
     * or be able to read.
     * @param version the AppStream metadata format version as #AsFormatVersion.
     */
    set_format_version(version: FormatVersion): void
    /**
     * Sets the locale which should be read when processing metadata.
     * All other locales are ignored, which increases parsing speed and
     * reduces memory usage.
     * If you set the locale to "ALL", all locales will be read.
     * @param locale the locale.
     */
    set_locale(locale: string): void
    /**
     * Set the base URL for all media links referenced in the metadata,
     * or %NULL if every component has absolute URLs.
     * @param url the base URL.
     */
    set_media_baseurl(url: string): void
    /**
     * Set the origin of AppStream distro metadata
     * @param origin the origin of AppStream distro metadata.
     */
    set_origin(origin: string): void
    /**
     * Sets the current metadata parse flags.
     * @param flags the #AsParseFlags.
     */
    set_parse_flags(flags: ParseFlags): void
    /**
     * If set to %TRUE, the parser will not create new components but
     * instead update existing components in the pool with new metadata.
     * 
     * NOTE: Right now, this feature is only implemented for metainfo XML parsing!
     * @param update A boolean value.
     */
    set_update_existing(update: boolean): void
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
    set_write_header(wheader: boolean): void

    // Class property signals of AppStream-1.0.AppStream.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static file_guess_style(filename: string): FormatStyle
}

interface Pool_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Pool_ChangedSignalCallback {
    ($obj: Pool): void
}

interface Pool {

    // Own fields of AppStream-1.0.AppStream.Pool

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Pool

    /**
     * Register a new component in the AppStream metadata pool.
     * @param cpt The #AsComponent to add to the pool.
     */
    add_component(cpt: Component): boolean
    /**
     * Register a set of components with the pool temporarily.
     * Data from components added like this will not be cached.
     * @param cpts Array of components to add to the pool.
     */
    add_components(cpts: Component[]): boolean
    /**
     * Add an additional non-standard location to the metadata pool where metadata will be read from.
     * If `directory` contains a "xml", "xmls", "yaml" or "icons" subdirectory (or all of them),
     * those paths will be added to the search paths instead.
     * @param directory An existing filesystem location.
     * @param format_style The expected format style of the metadata, e.g. %AS_FORMAT_STYLE_COLLECTION
     */
    add_extra_data_location(directory: string, format_style: FormatStyle): void
    /**
     * Convenience function to add one or multiple #AsPoolFlags to
     * the flag set of this data pool.
     * @param flags The #AsPoolFlags to add.
     */
    add_flags(flags: PoolFlags): void
    /**
     * Add a location for the data pool to read data from.
     * If `directory` contains a "xml", "xmls", "yaml" or "icons" subdirectory (or all of them),
     * those paths will be added to the search paths instead.
     * @param directory An existing filesystem location.
     */
    add_metadata_location(directory: string): void
    /**
     * Splits up a string into an array of tokens that are suitable for searching.
     * This includes stripping whitespaces, casefolding the terms and removing greylist words.
     * 
     * This function is usually called automatically when needed, you will only need to
     * run it explicitly when you need to check which search tokens the pool will actually
     * use internally for a given phrase.
     * @param search the (user-provided) search phrase.
     */
    build_search_tokens(search: string): string[]
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
    clear_metadata_locations(): void
    /**
     * Get the #AsCacheFlags for this data pool.
     */
    get_cache_flags(): CacheFlags
    /**
     * Gets the location of the session cache.
     */
    get_cache_location(): string
    /**
     * Get a list of found components.
     */
    get_components(): Component[]
    /**
     * Return a list of components which are in one of the categories.
     * @param categories An array of XDG categories to include.
     */
    get_components_by_categories(categories: string): Component[]
    /**
     * Find components extending the component with the given ID. They can then be registered to the
     * #AsComponent they extend via %as_component_add_addon.
     * If the %AS_POOL_FLAG_RESOLVE_ADDONS pool flag is set, addons are automatically resolved and
     * this explicit function is not needed, but overall query time will be increased (so only use
     * this flag if you will be resolving addon information later anyway).
     * @param extended_id The ID of the component to search extensions for.
     */
    get_components_by_extends(extended_id: string): Component[]
    /**
     * Get a specific component by its ID.
     * This function may contain multiple results if we have
     * data describing this component from multiple scopes/origin types.
     * @param cid The AppStream-ID to look for.
     */
    get_components_by_id(cid: string): Component[]
    /**
     * Return a list of all components in the pool which are of a certain kind.
     * @param kind An #AsComponentKind.
     */
    get_components_by_kind(kind: ComponentKind): Component[]
    /**
     * Find components in the AppStream data pool which provide a specific launchable.
     * See #AsLaunchable for details on launchables, or refer to the AppStream specification.
     * @param kind An #AsLaunchableKind
     * @param id The ID of the launchable.
     */
    get_components_by_launchable(kind: LaunchableKind, id: string): Component[]
    /**
     * Find components in the AppStream data pool which provide a certain item.
     * @param kind An #AsProvidesKind
     * @param item The value of the provided item.
     */
    get_components_by_provided_item(kind: ProvidedKind, item: string): Component[]
    /**
     * Get the #AsPoolFlags for this data pool.
     */
    get_flags(): PoolFlags
    /**
     * Gets the currently used locale.
     */
    get_locale(): string
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
    load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Load AppStream metadata from a cache file.
     * @param fname Filename of the cache file to load into the pool.
     */
    load_cache_file(fname: string): boolean
    /**
     * Retrieve the result of as_pool_load_async().
     * @param result A #GAsyncResult
     */
    load_finish(result: Gio.AsyncResult): boolean
    /**
     * Update the AppStream cache. There is normally no need to call this function manually, because cache updates are handled
     * transparently in the background.
     * @param force Enforce refresh, even if source data has not changed.
     */
    refresh_cache(force: boolean): boolean
    /**
     * Convenience function to remove one or multiple #AsPoolFlags from
     * the flag set of this data pool.
     * @param flags The #AsPoolFlags to remove.
     */
    remove_flags(flags: PoolFlags): void
    /**
     * Remove all explicitly added metadata locations.
     */
    reset_extra_data_locations(): void
    /**
     * Serialize AppStream metadata to a cache file.
     * @param fname Filename of the cache file the pool contents should be dumped to.
     */
    save_cache_file(fname: string): boolean
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
    set_cache_flags(flags: CacheFlags): void
    /**
     * Sets the name of the cache file. If `fname` is ":memory", the cache will be
     * kept in memory, if it is set to ":temporary", the cache will be stored in
     * a temporary directory. In any other case, the given filename is used.
     * @param fname Filename of the cache file, or special identifier.
     */
    set_cache_location(fname: string): void
    /**
     * Set the #AsPoolFlags for this data pool.
     * @param flags The new #AsPoolFlags.
     */
    set_flags(flags: PoolFlags): void
    /**
     * This is a convenience function that enables or disables loading of metadata
     * from well-known standard locations by configuring the #AsPoolFlags of this
     * #AsPool accordingly.
     * Data affected by this includes the OS data catalog, metainfo, desktop-entry
     * files and Flatpak data.
     * If you need more fine-grained control, set the #AsPoolFlags explicitly.
     * @param enabled Whether loading of data from standard locations should be enabled.
     */
    set_load_std_data_locations(enabled: boolean): void
    /**
     * Sets the current locale which should be used when parsing metadata.
     * @param locale the locale.
     */
    set_locale(locale: string): void

    // Own virtual methods of AppStream-1.0.AppStream.Pool

    vfunc_changed(): void

    // Own signals of AppStream-1.0.AppStream.Pool

    connect(sigName: "changed", callback: Pool_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Pool_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of AppStream-1.0.AppStream.Pool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Provided

    /**
     * Add a new provided item.
     * @param item 
     */
    add_item(item: string): void
    /**
     * Get an array of provided data.
     */
    get_items(): string[]
    /**
     * The kind of items this #AsProvided object stores.
     */
    get_kind(): ProvidedKind
    /**
     * Check if the current #AsProvided contains an item
     * of the given name.
     * @param item the name of a provided item, e.g. "audio/x-vorbis" (in case the provided kind is a mimetype)
     */
    has_item(item: string): boolean
    /**
     * Set the kind of items this #AsProvided object stores.
     * @param kind the new #AsProvidedKind
     */
    set_kind(kind: ProvidedKind): void

    // Class property signals of AppStream-1.0.AppStream.Provided

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Relation

    /**
     * The version comparison type.
     */
    get_compare(): RelationCompare
    /**
     * Gets the display side kind, in case this item is of
     * kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH
     */
    get_display_side_kind(): DisplaySideKind
    /**
     * The kind of the item of this #AsRelation.
     */
    get_item_kind(): RelationItemKind
    /**
     * The type (and thereby strength) of this #AsRelation.
     */
    get_kind(): RelationKind
    /**
     * Deprecated method. Use %as_relation_get_value_str instead.
     */
    get_value(): string
    /**
     * Get the value of this #AsRelation item as #AsControlKind if the
     * type of this relation is %AS_RELATION_ITEM_KIND_CONTROL.
     * Otherwise return %AS_CONTROL_KIND_UNKNOWN
     */
    get_value_control_kind(): ControlKind
    /**
     * In case this #AsRelation is of kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH,
     * return the #AsDisplayLengthKind.
     */
    get_value_display_length_kind(): DisplayLengthKind
    get_value_int(): number
    /**
     * In case this #AsRelation is of kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH,
     * return the set logical pixel amount.
     */
    get_value_px(): number
    get_value_str(): string
    get_version(): string
    /**
     * Set the version comparison type of this #AsRelation.
     * @param compare the new #AsRelationCompare
     */
    set_compare(compare: RelationCompare): void
    /**
     * Sets the display side kind, in case this item is of
     * kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH
     * @param kind the new #AsDisplaySideKind.
     */
    set_display_side_kind(kind: DisplaySideKind): void
    /**
     * Set the kind of the item this #AsRelation is about.
     * @param kind the new #AsRelationItemKind
     */
    set_item_kind(kind: RelationItemKind): void
    /**
     * Set the kind of this #AsRelation.
     * @param kind the new #AsRelationKind
     */
    set_kind(kind: RelationKind): void
    /**
     * Deprecated method. Use %as_relation_set_value_str instead.
     * @param value the new value.
     */
    set_value(value: string): void
    /**
     * Set relation item value from an #AsControlKind.
     * @param kind an #AsControlKind
     */
    set_value_control_kind(kind: ControlKind): void
    /**
     * Sets the item value as display length placeholder value. This requires the relation
     * to be of item kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH.
     * @param kind the #AsDisplayLengthKind
     */
    set_value_display_length_kind(kind: DisplayLengthKind): void
    /**
     * Sets the item value as an integer, if the given item type
     * of this #AsRelation permits integer values.
     * @param value the new value.
     */
    set_value_int(value: number): void
    /**
     * Sets the item value as logical pixel count. This requires the relation
     * to be of item kind %AS_RELATION_ITEM_KIND_DISPLAY_LENGTH.
     * @param logical_px logical pixel count.
     */
    set_value_px(logical_px: number): void
    /**
     * Sets the item value as a string, if the given item type
     * of this #AsRelation permits string values.
     * @param value the new value.
     */
    set_value_str(value: string): void
    /**
     * Sets the item version.
     * @param version the new version.
     */
    set_version(version: string): void
    /**
     * Tests whether the version number of this #AsRelation is fulfilled by
     * `version`. Whether the given version is sufficient to fulfill the version
     * requirement of this #AsRelation is determined by its comparison resraint.
     * @param version a version number, e.g. `1.2.0`
     */
    version_compare(version: string): boolean

    // Class property signals of AppStream-1.0.AppStream.Relation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Release

    /**
     * Add an artifact (binary / source download) for this release.
     * @param artifact The #AsArtifact.
     */
    add_artifact(artifact: Artifact): void
    /**
     * Add a checksum for the file associated with this release.
     * @param cs The #AsChecksum.
     */
    add_checksum(cs: Checksum): void
    /**
     * Add information about a (resolved) issue to this release.
     * @param issue The #AsIssue.
     */
    add_issue(issue: Issue): void
    /**
     * Adds a release location.
     * @param location An URL of the download location
     */
    add_location(location: string): void
    /**
     * Get the current active locale, which
     * is used to get localized messages.
     */
    get_active_locale(): string
    /**
     * Get a list of all downloadable artifacts that are associated with
     * this release.
     */
    get_artifacts(): Artifact[]
    /**
     * Gets the release checksum
     * @param kind 
     */
    get_checksum(kind: ChecksumKind): Checksum | null
    /**
     * Get a list of all checksums we have for this release.
     */
    get_checksums(): Checksum[]
    /**
     * Gets the release date.
     */
    get_date(): string
    /**
     * Gets the end-of-life date for this release.
     */
    get_date_eol(): string
    /**
     * Gets the release description markup for a given locale.
     */
    get_description(): string | null
    /**
     * Get a list of all issues resolved by this release.
     */
    get_issues(): Issue[]
    /**
     * Gets the type of the release.
     * (development or stable release)
     */
    get_kind(): ReleaseKind
    /**
     * Gets the release locations, typically URLs.
     */
    get_locations(): string[]
    /**
     * Gets the release size.
     * @param kind a #AsSizeKind
     */
    get_size(kind: SizeKind): number
    /**
     * Gets the release timestamp.
     */
    get_timestamp(): number
    /**
     * Gets the UNIX timestamp for the date when this
     * release is out of support (end-of-life).
     */
    get_timestamp_eol(): number
    /**
     * Gets the urgency of the release
     * (showing how important it is to update to a more recent release)
     */
    get_urgency(): UrgencyKind
    /**
     * Gets an URL.
     * @param url_kind the URL kind, e.g. %AS_RELEASE_URL_KIND_DETAILS.
     */
    get_url(url_kind: ReleaseUrlKind): string | null
    /**
     * Gets the release version.
     */
    get_version(): string | null
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * If the #AsComponent linking this #AsRelease was fetched
     * from a localized database, usually only
     * one locale is available.
     * @param locale 
     */
    set_active_locale(locale: string): void
    /**
     * Sets the release date.
     * @param date the date in ISO8601 format.
     */
    set_date(date: string): void
    /**
     * Sets the end-of-life date for this release.
     * @param date the EOL date in ISO8601 format.
     */
    set_date_eol(date: string): void
    /**
     * Sets the description release markup.
     * @param description the description markup.
     * @param locale 
     */
    set_description(description: string, locale: string): void
    /**
     * Sets the release kind to distinguish between end-user ready
     * stable releases and development prereleases..
     * @param kind the #AsReleaseKind
     */
    set_kind(kind: ReleaseKind): void
    /**
     * Sets the release size for the given kind.
     * @param size a size in bytes, or 0 for unknown
     * @param kind a #AsSizeKind
     */
    set_size(size: number, kind: SizeKind): void
    /**
     * Sets the release timestamp.
     * @param timestamp the timestamp value.
     */
    set_timestamp(timestamp: number): void
    /**
     * Sets the UNIX timestamp for the date when this
     * release is out of support (end-of-life).
     * @param timestamp the timestamp value.
     */
    set_timestamp_eol(timestamp: number): void
    /**
     * Sets the release urgency.
     * @param urgency the urgency of this release/update (as #AsUrgencyKind)
     */
    set_urgency(urgency: UrgencyKind): void
    /**
     * Sets an URL for this release.
     * @param url_kind the URL kind, e.g. %AS_RELEASE_URL_KIND_DETAILS
     * @param url the full URL.
     */
    set_url(url_kind: ReleaseUrlKind, url: string): void
    /**
     * Sets the release version.
     * @param version the version string.
     */
    set_version(version: string): void
    /**
     * Compare the version numbers of two releases.
     * @param rel2 an #AsRelease
     */
    vercmp(rel2: Release): number

    // Class property signals of AppStream-1.0.AppStream.Release

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    reviewer_id?: string | null
    reviewer_name?: string | null
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
    reviewer_id: string
    reviewer_name: string
    summary: string
    version: string

    // Own fields of AppStream-1.0.AppStream.Review

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Review

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
    add_metadata(key: string, value: string): void
    /**
     * Checks if two reviews are the same.
     * @param review2 a #AsReview instance.
     */
    equal(review2: Review): boolean
    /**
     * Gets the date the review was originally submitted.
     */
    get_date(): GLib.DateTime
    /**
     * Gets the multi-line review text that forms the body of the review.
     */
    get_description(): string
    /**
     * Gets any flags set on the review, for example if the user has already
     * voted on the review or if the user wrote the review themselves.
     */
    get_flags(): ReviewFlags
    /**
     * Gets the review id.
     */
    get_id(): string
    /**
     * Gets the locale for the review.
     */
    get_locale(): string
    /**
     * Gets some metadata from a review object.
     * It is left for the the plugin to use this method as required, but a
     * typical use would be to retrieve some secure authentication token.
     * @param key a string
     */
    get_metadata_item(key: string): string
    /**
     * This allows the UI to sort reviews into the correct order.
     * Higher numbers indicate a more important or relevant review.
     */
    get_priority(): number
    /**
     * Gets the star rating of the review, where 100 is 5 stars.
     */
    get_rating(): number
    /**
     * Gets the name of the reviewer.
     */
    get_reviewer_id(): string
    /**
     * Gets the name of the reviewer.
     */
    get_reviewer_name(): string
    /**
     * Gets the review summary.
     */
    get_summary(): string
    /**
     * Gets the version string for the application being reviewed..
     */
    get_version(): string
    /**
     * Sets the date the review was originally submitted.
     * @param date a #GDateTime, or %NULL
     */
    set_date(date: GLib.DateTime): void
    /**
     * Sets the multi-line review text that forms the body of the review.
     * @param description multi-line description
     */
    set_description(description: string): void
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
    set_id(id: string): void
    /**
     * Sets the locale for the review.
     * @param locale locale, e.g. "en_GB"
     */
    set_locale(locale: string): void
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
    set_reviewer_id(reviewer_id: string): void
    /**
     * Sets the name of the reviewer, which can be left unset.
     * @param reviewer_name the reviewer name, e.g. "David Smith"
     */
    set_reviewer_name(reviewer_name: string): void
    /**
     * Sets the one-line summary that may be displayed in bold.
     * @param summary a one-line summary, e.g. "Awesome application"
     */
    set_summary(summary: string): void
    /**
     * Sets the version string for the application being reviewed.
     * @param version a version string, e.g. "0.1.2"
     */
    set_version(version: string): void

    // Class property signals of AppStream-1.0.AppStream.Review

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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Screenshot

    /**
     * Adds an image to the screenshot.
     * @param image a #AsImage instance.
     */
    add_image(image: Image): void
    /**
     * Adds a video to the screenshot.
     * @param video a #AsVideo instance.
     */
    add_video(video: Video): void
    /**
     * Get the current active locale, which
     * is used to get localized messages.
     */
    get_active_locale(): string
    /**
     * Gets the image caption
     */
    get_caption(): string
    /**
     * Gets the AsImage closest to the target size. The #AsImage may not actually
     * be the requested size, and the application may have to pad / rescale the
     * image to make it fit.
     * Only images for the current active locale (or fallback, if images are not localized)
     * are considered.
     * @param width target width
     * @param height target height
     */
    get_image(width: number, height: number): Image
    /**
     * Gets the images for this screenshots. Only images valid for the current
     * language are returned. We return all sizes.
     */
    get_images(): Image[]
    /**
     * Returns an array of all images we have, regardless of their
     * size and language.
     */
    get_images_all(): Image[]
    /**
     * Gets the screenshot kind.
     */
    get_kind(): ScreenshotKind
    /**
     * Gets the screenshot media kind.
     */
    get_media_kind(): ScreenshotMediaKind
    /**
     * Gets the videos for this screenshots. Only videos valid for the current
     * language selection are returned. We return all sizes.
     */
    get_videos(): Video[]
    /**
     * Performs a quick validation on this screenshot
     */
    is_valid(): boolean
    /**
     * Set the current active locale, which
     * is used to get localized messages.
     * If the #AsComponent linking this #AsScreenshot was fetched
     * from a localized database, usually only
     * one locale is available.
     * @param locale 
     */
    set_active_locale(locale: string): void
    /**
     * Sets a caption on the screenshot
     * @param caption the caption text.
     * @param locale 
     */
    set_caption(caption: string, locale: string): void
    /**
     * Sets the screenshot kind.
     * @param kind the #AsScreenshotKind.
     */
    set_kind(kind: ScreenshotKind): void

    // Class property signals of AppStream-1.0.AppStream.Screenshot

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Suggested

    /**
     * Add a component id to this suggested object.
     * @param cid The component id to add
     */
    add_id(cid: string): void
    /**
     * Get a list of components id that generated the suggestion
     */
    get_ids(): string[]
    /**
     * Gets the suggested kind.
     */
    get_kind(): SuggestedKind
    /**
     * Check if the essential properties of this suggestion are
     * populated with useful data.
     */
    is_valid(): boolean
    /**
     * Sets the suggested kind.
     * @param kind the #AsSuggestedKind, e.g. %AS_SUGGESTED_KIND_HEURISTIC.
     */
    set_kind(kind: SuggestedKind): void

    // Class property signals of AppStream-1.0.AppStream.Suggested

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Translation

    /**
     * The ID (e.g. Gettext translation domain) of this translation.
     */
    get_id(): string
    /**
     * The translation system type.
     */
    get_kind(): TranslationKind
    /**
     * The locale of the source strings for this component. If this has not been
     * explicitly specified, `en_US` will be returned.
     */
    get_source_locale(): string
    /**
     * Set the ID (e.g. Gettext domain) of this translation.
     * @param id The ID of this translation.
     */
    set_id(id: string): void
    /**
     * Set the translation system type.
     * @param kind the new #AsTranslationKind
     */
    set_kind(kind: TranslationKind): void
    /**
     * Set the locale of the source strings for this component. In gettext, this is
     * referred to as the `C` locale. It’s almost always `en_US`, but for some
     * components it may not be.
     * @param locale The locale that the source strings are in, or %NULL if    unknown or default.
     */
    set_source_locale(locale: string | null): void

    // Class property signals of AppStream-1.0.AppStream.Translation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Validator

    /**
     * Clears the list of issues
     */
    clear_issues(): void
    get_check_urls(): boolean
    /**
     * Get a list of found metadata format issues.
     */
    get_issues(): ValidatorIssue[]
    /**
     * Get a hash table of filenames mapped to lists of issues.
     * This is useful if validation was requested for multiple files and
     * a list of issues per-file is desired without prior explicit sorting.
     */
    get_issues_per_file(): GLib.HashTable
    get_report_yaml(yaml_report: string): boolean
    /**
     * Get the explanatory text for a given issue tag.
     * @param tag 
     */
    get_tag_explanation(tag: string): string
    /**
     * Get the severity for a given issue tag.
     * @param tag 
     */
    get_tag_severity(tag: string): IssueSeverity
    /**
     * Get an array of all tags known to the validator.
     */
    get_tags(): string[]
    /**
     * Set this value to make the #AsValidator check whether remote URLs
     * actually exist.
     * @param value 
     */
    set_check_urls(value: boolean): void
    /**
     * Validate AppStream XML data from a byte array.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata XML metadata as #GBytes.
     */
    validate_bytes(metadata: GLib.Bytes): boolean
    /**
     * Validate AppStream XML data.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata XML metadata.
     */
    validate_data(metadata: string): boolean
    /**
     * Validate an AppStream XML file.
     * Remember to run %as_validator_clear_issues if you do not want previous
     * validation runs to affect the outcome of this validation.
     * @param metadata_file An AppStream XML file.
     */
    validate_file(metadata_file: Gio.File): boolean
    /**
     * Validate a full directory tree for issues in AppStream metadata.
     * @param root_dir The root directory of the filesystem tree that should be validated.
     */
    validate_tree(root_dir: string): boolean

    // Class property signals of AppStream-1.0.AppStream.Validator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.ValidatorIssue

    /**
     * The component-id this issue is about.
     */
    get_cid(): string
    /**
     * Get an extended explanation on this issue, or return %NULL
     * if none is available.
     */
    get_explanation(): string
    /**
     * The name of the file this issue was found in.
     */
    get_filename(): string
    /**
     * Get a short context hint for this issue.
     */
    get_hint(): string
    /**
     * This function is deprecated and should not be used in new code.
     */
    get_importance(): IssueSeverity
    /**
     * Gets the line number where this issue was found.
     */
    get_line(): number
    /**
     * Builds a string containing all information about the location
     * where this issue occured that we know about.
     */
    get_location(): string
    /**
     * This function is deprecated.
     */
    get_message(): string
    /**
     * Gets the severity of this issue.
     */
    get_severity(): IssueSeverity
    /**
     * Gets the issue tag string for this issue.
     */
    get_tag(): string
    /**
     * Sets the component-id this issue is about.
     * @param cid a component-id.
     */
    set_cid(cid: string): void
    /**
     * Set explanatory text for this issue.
     * @param explanation the explanation.
     */
    set_explanation(explanation: string): void
    /**
     * Sets the name of the file the issue was found in.
     * @param fname the filename.
     */
    set_filename(fname: string): void
    /**
     * Sets short issue hint.
     * @param hint the hint.
     */
    set_hint(hint: string): void
    /**
     * This function is deprecated and should not be used in new code.
     * @param importance the #AsIssueSeverity.
     */
    set_importance(importance: IssueSeverity): void
    /**
     * Sets the line number where this issue was found.
     * @param line the line number.
     */
    set_line(line: number): void
    /**
     * This function is deprecated.
     * @param message the message text.
     */
    set_message(message: string): void
    /**
     * Sets the severity for this issue.
     * @param severity the #AsIssueSeverity.
     */
    set_severity(severity: IssueSeverity): void
    /**
     * Sets the issue tag.
     * @param tag the tag.
     */
    set_tag(tag: string): void

    // Class property signals of AppStream-1.0.AppStream.ValidatorIssue

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of AppStream-1.0.AppStream.Video

    /**
     * Gets the video codec, if known.
     */
    get_codec_kind(): VideoCodecKind
    /**
     * Gets the video container format, if known.
     */
    get_container_kind(): VideoContainerKind
    /**
     * Gets the video height, if known.
     */
    get_height(): number
    /**
     * Get locale for this video.
     */
    get_locale(): string
    /**
     * Gets the full qualified URL for the video, usually pointing at a mirror or CDN server.
     */
    get_url(): string
    /**
     * Gets the video width, if known.
     */
    get_width(): number
    /**
     * Sets the video codec.
     * @param kind the #AsVideoCodecKind, e.g. %AS_VIDEO_CODEC_KIND_AV1.
     */
    set_codec_kind(kind: VideoCodecKind): void
    /**
     * Sets the video container.
     * @param kind the #AsVideoContainerKind, e.g. %AS_VIDEO_CONTAINER_KIND_MKV.
     */
    set_container_kind(kind: VideoContainerKind): void
    /**
     * Sets the video height.
     * @param height the height in pixels.
     */
    set_height(height: number): void
    /**
     * Sets the locale for this video.
     * @param locale the locale string.
     */
    set_locale(locale: string): void
    /**
     * Sets the fully-qualified URL to use for the video.
     * @param url the URL.
     */
    set_url(url: string): void
    /**
     * Sets the video width.
     * @param width the width in pixels.
     */
    set_width(width: number): void

    // Class property signals of AppStream-1.0.AppStream.Video

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_class: GObject.ObjectClass
}

abstract class AgreementClass {

    // Own properties of AppStream-1.0.AppStream.AgreementClass

    static name: string
}

interface AgreementSectionClass {

    // Own fields of AppStream-1.0.AppStream.AgreementSectionClass

    parent_class: GObject.ObjectClass
}

abstract class AgreementSectionClass {

    // Own properties of AppStream-1.0.AppStream.AgreementSectionClass

    static name: string
}

interface ArtifactClass {

    // Own fields of AppStream-1.0.AppStream.ArtifactClass

    parent_class: GObject.ObjectClass
}

abstract class ArtifactClass {

    // Own properties of AppStream-1.0.AppStream.ArtifactClass

    static name: string
}

interface BrandingClass {

    // Own fields of AppStream-1.0.AppStream.BrandingClass

    parent_class: GObject.ObjectClass
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
    next(): [ /* returnType */ boolean, /* kind */ ColorKind, /* scheme_preference */ ColorSchemeKind, /* value */ string ]
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

    parent_class: GObject.ObjectClass
}

abstract class BundleClass {

    // Own properties of AppStream-1.0.AppStream.BundleClass

    static name: string
}

interface CategoryClass {

    // Own fields of AppStream-1.0.AppStream.CategoryClass

    parent_class: GObject.ObjectClass
}

abstract class CategoryClass {

    // Own properties of AppStream-1.0.AppStream.CategoryClass

    static name: string
}

interface ChecksumClass {

    // Own fields of AppStream-1.0.AppStream.ChecksumClass

    parent_class: GObject.ObjectClass
}

abstract class ChecksumClass {

    // Own properties of AppStream-1.0.AppStream.ChecksumClass

    static name: string
}

interface ComponentClass {

    // Own fields of AppStream-1.0.AppStream.ComponentClass

    parent_class: GObject.ObjectClass
}

abstract class ComponentClass {

    // Own properties of AppStream-1.0.AppStream.ComponentClass

    static name: string
}

interface ContentRatingClass {

    // Own fields of AppStream-1.0.AppStream.ContentRatingClass

    parent_class: GObject.ObjectClass
}

abstract class ContentRatingClass {

    // Own properties of AppStream-1.0.AppStream.ContentRatingClass

    static name: string
}

interface ContextClass {

    // Own fields of AppStream-1.0.AppStream.ContextClass

    parent_class: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of AppStream-1.0.AppStream.ContextClass

    static name: string
}

interface DistroDetailsClass {

    // Own fields of AppStream-1.0.AppStream.DistroDetailsClass

    parent_class: GObject.ObjectClass
}

abstract class DistroDetailsClass {

    // Own properties of AppStream-1.0.AppStream.DistroDetailsClass

    static name: string
}

interface IconClass {

    // Own fields of AppStream-1.0.AppStream.IconClass

    parent_class: GObject.ObjectClass
}

abstract class IconClass {

    // Own properties of AppStream-1.0.AppStream.IconClass

    static name: string
}

interface ImageClass {

    // Own fields of AppStream-1.0.AppStream.ImageClass

    parent_class: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of AppStream-1.0.AppStream.ImageClass

    static name: string
}

interface IssueClass {

    // Own fields of AppStream-1.0.AppStream.IssueClass

    parent_class: GObject.ObjectClass
}

abstract class IssueClass {

    // Own properties of AppStream-1.0.AppStream.IssueClass

    static name: string
}

interface LaunchableClass {

    // Own fields of AppStream-1.0.AppStream.LaunchableClass

    parent_class: GObject.ObjectClass
}

abstract class LaunchableClass {

    // Own properties of AppStream-1.0.AppStream.LaunchableClass

    static name: string
}

interface MetadataClass {

    // Own fields of AppStream-1.0.AppStream.MetadataClass

    parent_class: GObject.ObjectClass
}

abstract class MetadataClass {

    // Own properties of AppStream-1.0.AppStream.MetadataClass

    static name: string
}

interface PoolClass {

    // Own fields of AppStream-1.0.AppStream.PoolClass

    parent_class: GObject.ObjectClass
    changed: (pool: Pool) => void
}

abstract class PoolClass {

    // Own properties of AppStream-1.0.AppStream.PoolClass

    static name: string
}

interface ProvidedClass {

    // Own fields of AppStream-1.0.AppStream.ProvidedClass

    parent_class: GObject.ObjectClass
}

abstract class ProvidedClass {

    // Own properties of AppStream-1.0.AppStream.ProvidedClass

    static name: string
}

interface RelationClass {

    // Own fields of AppStream-1.0.AppStream.RelationClass

    parent_class: GObject.ObjectClass
}

abstract class RelationClass {

    // Own properties of AppStream-1.0.AppStream.RelationClass

    static name: string
}

interface ReleaseClass {

    // Own fields of AppStream-1.0.AppStream.ReleaseClass

    parent_class: GObject.ObjectClass
}

abstract class ReleaseClass {

    // Own properties of AppStream-1.0.AppStream.ReleaseClass

    static name: string
}

interface ReviewClass {

    // Own fields of AppStream-1.0.AppStream.ReviewClass

    parent_class: GObject.ObjectClass
}

abstract class ReviewClass {

    // Own properties of AppStream-1.0.AppStream.ReviewClass

    static name: string
}

interface ScreenshotClass {

    // Own fields of AppStream-1.0.AppStream.ScreenshotClass

    parent_class: GObject.ObjectClass
}

abstract class ScreenshotClass {

    // Own properties of AppStream-1.0.AppStream.ScreenshotClass

    static name: string
}

interface SuggestedClass {

    // Own fields of AppStream-1.0.AppStream.SuggestedClass

    parent_class: GObject.ObjectClass
}

abstract class SuggestedClass {

    // Own properties of AppStream-1.0.AppStream.SuggestedClass

    static name: string
}

interface TranslationClass {

    // Own fields of AppStream-1.0.AppStream.TranslationClass

    parent_class: GObject.ObjectClass
}

abstract class TranslationClass {

    // Own properties of AppStream-1.0.AppStream.TranslationClass

    static name: string
}

interface ValidatorClass {

    // Own fields of AppStream-1.0.AppStream.ValidatorClass

    parent_class: GObject.ObjectClass
}

abstract class ValidatorClass {

    // Own properties of AppStream-1.0.AppStream.ValidatorClass

    static name: string
}

interface ValidatorIssueClass {

    // Own fields of AppStream-1.0.AppStream.ValidatorIssueClass

    parent_class: GObject.ObjectClass
}

abstract class ValidatorIssueClass {

    // Own properties of AppStream-1.0.AppStream.ValidatorIssueClass

    static name: string
}

interface VideoClass {

    // Own fields of AppStream-1.0.AppStream.VideoClass

    parent_class: GObject.ObjectClass
}

abstract class VideoClass {

    // Own properties of AppStream-1.0.AppStream.VideoClass

    static name: string
}

}
export default AppStream;