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

export namespace AppStream {
    /**
     * AppStream-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace AgreementKind {
        export const $gtype: GObject.GType<AgreementKind>;
    }

    /**
     * The kind of the agreement.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ArtifactKind {
        export const $gtype: GObject.GType<ArtifactKind>;
    }

    /**
     * The artifact type.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace BundleKind {
        export const $gtype: GObject.GType<BundleKind>;
    }

    /**
     * The bundle type.
     * @gir-type Enum
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
        /**
         * A Linglong bundle
         */
        LINGLONG,
        /**
         * A systemd-sysupdate bundle
         */
        SYSUPDATE,
    }

    /**
     * @gir-type Enum
     */
    export namespace ChassisKind {
        export const $gtype: GObject.GType<ChassisKind>;
    }

    /**
     * The type of chassis a computing device is built into.
     * @gir-type Enum
     */
    enum ChassisKind {
        /**
         * Unknown chassis.
         */
        UNKNOWN,
        /**
         * A desktop/workstation
         */
        DESKTOP,
        /**
         * A mobile computer with a bigger screen / laptop
         */
        LAPTOP,
        /**
         * A server, often without GUI
         */
        SERVER,
        /**
         * A tablet with touch as primary input method
         */
        TABLET,
        /**
         * A smaller touch-input device, like a smartphone
         */
        HANDSET,
    }

    /**
     * @gir-type Enum
     */
    export namespace CheckResult {
        export const $gtype: GObject.GType<CheckResult>;
    }

    /**
     * Result of a check operation.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ChecksumKind {
        export const $gtype: GObject.GType<ChecksumKind>;
    }

    /**
     * Checksums supported by {@link AppStream.Release}
     * @gir-type Enum
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
         * SHA512 checksum
         */
        SHA512,
        /**
         * BLAKE2 checksum
         */
        BLAKE2B,
        /**
         * BLAKE3 checksum
         */
        BLAKE3,
    }

    /**
     * @gir-type Enum
     */
    export namespace ColorKind {
        export const $gtype: GObject.GType<ColorKind>;
    }

    /**
     * A branding color type.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ColorSchemeKind {
        export const $gtype: GObject.GType<ColorSchemeKind>;
    }

    /**
     * A color scheme type.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ComponentKind {
        export const $gtype: GObject.GType<ComponentKind>;
    }

    /**
     * The type of an {@link AppStream.Component}.
     * @gir-type Enum
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
         * A system service launched by the init system
         */
        SERVICE,
        /**
         * An extension of existing software, which does not run standalone
         */
        ADDON,
        /**
         * An application runtime platform
         */
        RUNTIME,
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
         * A computer operating system
         */
        OPERATING_SYSTEM,
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
         * A remote software or data source
         */
        REPOSITORY,
        /**
         * An icon theme following the XDG specification
         */
        ICON_THEME,
    }

    /**
     * @gir-type Enum
     */
    export namespace ComponentScope {
        export const $gtype: GObject.GType<ComponentScope>;
    }

    /**
     * Scope of the {@link AppStream.Component} (system-wide or user-scope)
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ContentRatingSystem {
        export const $gtype: GObject.GType<ContentRatingSystem>;
    }

    /**
     * A content rating system for a particular territory.
     * @gir-type Enum
     * @since 0.12.12
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
     * @gir-type Enum
     */
    export namespace ContentRatingValue {
        export const $gtype: GObject.GType<ContentRatingValue>;
    }

    /**
     * The specified level of an content_rating rating ID.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ControlKind {
        export const $gtype: GObject.GType<ControlKind>;
    }

    /**
     * Kind of an input method for users to control software
     * @gir-type Enum
     */
    enum ControlKind {
        /**
         * Unknown kind
         */
        UNKNOWN,
        /**
         * Mouse/cursors/other precision pointing device
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
     * @gir-type Enum
     */
    export namespace DisplaySideKind {
        export const $gtype: GObject.GType<DisplaySideKind>;
    }

    /**
     * Side a display_length requirement is for.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace FormatKind {
        export const $gtype: GObject.GType<FormatKind>;
    }

    /**
     * Format of the AppStream metadata.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace FormatStyle {
        export const $gtype: GObject.GType<FormatStyle>;
    }

    /**
     * There are a few differences between AppStream's metainfo files (shipped by upstream projects)
     * and the catalog metadata (shipped by distributors).
     * The data source kind indicates which style we should process.
     * Usually you do not want to set this explicitly.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace FormatVersion {
        export const $gtype: GObject.GType<FormatVersion>;
    }

    /**
     * Format version / API level of the AppStream metadata.
     * @gir-type Enum
     */
    enum FormatVersion {
        /**
         * Unknown format version
         */
        UNKNOWN,
        /**
         * 1
         */
        V1_0,
    }

    /**
     * @gir-type Enum
     */
    export namespace IconKind {
        export const $gtype: GObject.GType<IconKind>;
    }

    /**
     * The icon type.
     * @gir-type Enum
     */
    enum IconKind {
        /**
         * Unknown icon kind
         */
        UNKNOWN,
        /**
         * Stock icon name
         */
        STOCK,
        /**
         * Icon in the internal caches
         */
        CACHED,
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
     * @gir-type Enum
     */
    export namespace ImageKind {
        export const $gtype: GObject.GType<ImageKind>;
    }

    /**
     * The image type.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace InternetKind {
        export const $gtype: GObject.GType<InternetKind>;
    }

    /**
     * Different internet connectivity requirements or recommendations for an
     * application.
     * @gir-type Enum
     * @since 0.15.5
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
     * @gir-type Enum
     */
    export namespace IssueKind {
        export const $gtype: GObject.GType<IssueKind>;
    }

    /**
     * Checksums supported by {@link AppStream.Release}
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace IssueSeverity {
        export const $gtype: GObject.GType<IssueSeverity>;
    }

    /**
     * The severity of an issue found by {@link AppStream.Validator}
     * @gir-type Enum
     */
    enum IssueSeverity {
        /**
         * The severity is unknown.
         */
        UNKNOWN,
        /**
         * Pedantic information about ways to improve the data, but could also be ignored.
         */
        PEDANTIC,
        /**
         * Non-essential information on how to improve metadata, no immediate action needed.
         */
        INFO,
        /**
         * Something metadata issue which should be fixed as soon as possible.
         */
        WARNING,
        /**
         * There is a serious, fatal error in your metadata
         */
        ERROR,
    }

    /**
     * @gir-type Enum
     */
    export namespace LaunchableKind {
        export const $gtype: GObject.GType<LaunchableKind>;
    }

    /**
     * Type of launch system the entries belong to.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace MarkupKind {
        export const $gtype: GObject.GType<MarkupKind>;
    }

    /**
     * Text markup types.
     * @gir-type Enum
     */
    enum MarkupKind {
        /**
         * Unknown markup.
         */
        UNKNOWN,
        /**
         * XML markup.
         */
        XML,
        /**
         * Simple text with unicode symbols.
         */
        TEXT,
        /**
         * Markdown
         */
        MARKDOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace MergeKind {
        export const $gtype: GObject.GType<MergeKind>;
    }

    /**
     * Defines how {@link AppStream.Component} data should be merged if the component is
     * set for merge.
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class MetadataError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic failure.
         */
        static FAILED: number;
        /**
         * Unable to parse the metadata file.
         */
        static PARSE: number;
        /**
         * Expected catalog metadata but got metainfo metadata, or vice versa.
         */
        static FORMAT_UNEXPECTED: number;
        /**
         * We expected a component in the pool, but couldn't find one.
         */
        static NO_COMPONENT: number;
        /**
         * A essential value is missing in the source document.
         */
        static VALUE_MISSING: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace MetadataLocation {
        export const $gtype: GObject.GType<MetadataLocation>;
    }

    /**
     * The flags used when installing and removing metadata files.
     * @gir-type Enum
     */
    enum MetadataLocation {
        /**
         * An unknown/invalid location.
         */
        UNKNOWN,
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
     * @gir-type Struct
     */
    class PoolError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic failure
         */
        static FAILED: number;
        /**
         * The pool was loaded, but we had to ignore some metadata.
         */
        static INCOMPLETE: number;
        /**
         * An AppStream-ID collision occured (a component with that ID already existed in the pool)
         */
        static COLLISION: number;
        /**
         * Unable to write to *any* cache file (not even tmpfs writes worked)
         */
        static CACHE_WRITE_FAILED: number;
        /**
         * The disk cache was broken and we could not automatically recover.
         */
        static CACHE_DAMAGED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace ProvidedKind {
        export const $gtype: GObject.GType<ProvidedKind>;
    }

    /**
     * Type of the public interface components can provide.
     * @gir-type Enum
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
         * A Python 3 module
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
     * @gir-type Enum
     */
    export namespace ReferenceKind {
        export const $gtype: GObject.GType<ReferenceKind>;
    }

    /**
     * A reference type.
     * @gir-type Enum
     */
    enum ReferenceKind {
        /**
         * Unknown reference kind.
         */
        UNKNOWN,
        /**
         * Digital Object Identifier
         */
        DOI,
        /**
         * Web URL to a Citation File Format file
         */
        CITATION_CFF,
        /**
         * A generic registry.
         */
        REGISTRY,
    }

    /**
     * @gir-type Enum
     */
    export namespace RelationCompare {
        export const $gtype: GObject.GType<RelationCompare>;
    }

    /**
     * The relational comparison type.
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class RelationError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic failure
         */
        static FAILED: number;
        /**
         * A metadata value was bad.
         */
        static BAD_VALUE: number;
        /**
         * Some check was not (yet) implemented.
         */
        static NOT_IMPLEMENTED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace RelationItemKind {
        export const $gtype: GObject.GType<RelationItemKind>;
    }

    /**
     * Type of the item an {@link AppStream.Relation} is for.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace RelationKind {
        export const $gtype: GObject.GType<RelationKind>;
    }

    /**
     * Type of a component's relation to other items.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace RelationStatus {
        export const $gtype: GObject.GType<RelationStatus>;
    }

    /**
     * Status of a relation check result.
     * @gir-type Enum
     */
    enum RelationStatus {
        /**
         * Unknown status.
         */
        UNKNOWN,
        /**
         * An error occured and the status could not be checked.
         */
        ERROR,
        /**
         * The relation is not satisfied.
         */
        NOT_SATISFIED,
        /**
         * The relation is satisfied.
         */
        SATISFIED,
    }

    /**
     * @gir-type Enum
     */
    export namespace ReleaseKind {
        export const $gtype: GObject.GType<ReleaseKind>;
    }

    /**
     * The release kind.
     * @gir-type Enum
     * @since 0.12.0
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
        /**
         * A snapshot of a software being worked on
         */
        SNAPSHOT,
    }

    /**
     * @gir-type Enum
     */
    export namespace ReleaseListKind {
        export const $gtype: GObject.GType<ReleaseListKind>;
    }

    /**
     * The kind of a releases block.
     * @gir-type Enum
     * @since 0.16.0
     */
    enum ReleaseListKind {
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
     * @gir-type Enum
     */
    export namespace ReleaseUrlKind {
        export const $gtype: GObject.GType<ReleaseUrlKind>;
    }

    /**
     * `AS_RELEASE_URL_KIND_UNKNOWN`		Unknown release web URL type
     * The release URL kinds.
     * @gir-type Enum
     * @since 0.12.5
     */
    enum ReleaseUrlKind {
        UNKNOWN,
        /**
         * Weblink to detailed release notes.
         */
        DETAILS,
    }

    /**
     * @gir-type Enum
     */
    export namespace ScreenshotKind {
        export const $gtype: GObject.GType<ScreenshotKind>;
    }

    /**
     * The screenshot type.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ScreenshotMediaKind {
        export const $gtype: GObject.GType<ScreenshotMediaKind>;
    }

    /**
     * The media kind contained in this screenshot.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace SizeKind {
        export const $gtype: GObject.GType<SizeKind>;
    }

    /**
     * The artifact size kind.
     * @gir-type Enum
     * @since 0.8.6
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
     * @gir-type Enum
     */
    export namespace SuggestedKind {
        export const $gtype: GObject.GType<SuggestedKind>;
    }

    /**
     * The suggested type.
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class SystemInfoError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic failure
         */
        static FAILED: number;
        /**
         * Information was not found.
         */
        static NOT_FOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace TranslationKind {
        export const $gtype: GObject.GType<TranslationKind>;
    }

    /**
     * The translation type.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace UrgencyKind {
        export const $gtype: GObject.GType<UrgencyKind>;
    }

    /**
     * The urgency of an {@link AppStream.Release}
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace UrlKind {
        export const $gtype: GObject.GType<UrlKind>;
    }

    /**
     * The URL type.
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class UtilsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic failure
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * The error type.
     * @gir-type Struct
     */
    class ValidatorError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic failure
         */
        static FAILED: number;
        /**
         * The issue override was not accepted.
         */
        static INVALID_OVERRIDE: number;
        /**
         * The filename was invalid.
         */
        static INVALID_FILENAME: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace VideoCodecKind {
        export const $gtype: GObject.GType<VideoCodecKind>;
    }

    /**
     * Supported video codecs.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace VideoContainerKind {
        export const $gtype: GObject.GType<VideoContainerKind>;
    }

    /**
     * Supported video codecs.
     * @gir-type Enum
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

    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    /**
     * Converts the text representation to an enumerated value.
     * @param value the string.
     * @returns a {@link AppStream.AgreementKind} or {@link AppStream.AgreementKind.UNKNOWN} for unknown
     * @since 0.12.1
     */
    function agreement_kind_from_string(value: string): AgreementKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param value the {@link AppStream.AgreementKind}.
     * @returns string version of `value`
     * @since 0.12.1
     */
    function agreement_kind_to_string(value: AgreementKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a {@link AppStream.ArtifactKind}, or {@link AppStream.ArtifactKind.UNKNOWN} for unknown.
     */
    function artifact_kind_from_string(kind: string): ArtifactKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ArtifactKind}.
     * @returns string version of `kind`
     */
    function artifact_kind_to_string(kind: ArtifactKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param bundle_str the string.
     * @returns a {@link AppStream.BundleKind} or {@link AppStream.BundleKind.UNKNOWN} for unknown
     */
    function bundle_kind_from_string(bundle_str: string): BundleKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsBundleKind.
     * @returns string version of `kind`
     * @since 0.8.0
     */
    function bundle_kind_to_string(kind: BundleKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.ChassisKind} or {@link AppStream.ChassisKind.UNKNOWN} for unknown
     * @since 1.0.0
     */
    function chassis_kind_from_string(kind_str: string): ChassisKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.ChassisKind}.
     * @returns string version of `kind`
     * @since 1.0.0
     */
    function chassis_kind_to_string(kind: ChassisKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.ChecksumKind} or {@link AppStream.ChecksumKind.NONE} for unknown
     */
    function checksum_kind_from_string(kind_str: string): ChecksumKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsChecksumKind.
     * @returns string version of `kind`
     */
    function checksum_kind_to_string(kind: ChecksumKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param str the string.
     * @returns a {@link AppStream.ColorKind} or {@link AppStream.ColorKind.UNKNOWN} for unknown.
     * @since 0.15.2
     */
    function color_kind_from_string(str: string): ColorKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsColorKind.
     * @returns string version of `kind`
     * @since 0.15.2
     */
    function color_kind_to_string(kind: ColorKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param str the string.
     * @returns a {@link AppStream.ColorKind} or {@link AppStream.ColorSchemeKind.UNKNOWN} for unknown.
     * @since 0.15.2
     */
    function color_scheme_kind_from_string(str: string): ColorSchemeKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsColorSchemeKind.
     * @returns string version of `kind`
     * @since 0.15.2
     */
    function color_scheme_kind_to_string(kind: ColorSchemeKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.ComponentKind} or {@link AppStream.ComponentKind.UNKNOWN} for unknown
     */
    function component_kind_from_string(kind_str: string): ComponentKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ComponentKind}.
     * @returns string version of `kind`
     */
    function component_kind_to_string(kind: ComponentKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param scope_str the string.
     * @returns a {@link AppStream.ComponentScope} or {@link AppStream.ComponentScope.UNKNOWN} for unknown
     */
    function component_scope_from_string(scope_str: string): ComponentScope;
    /**
     * Converts the enumerated value to an text representation.
     * @param scope the {@link AppStream.ComponentScope}.
     * @returns string version of `scope`
     */
    function component_scope_to_string(scope: ComponentScope | null): string;
    /**
     * Format `age` as a human-readable string in the given rating `system`. This is
     * the way to present system-specific strings in a UI.
     * @param system an {@link AppStream.ContentRatingSystem}
     * @param age a CSM age to format
     * @returns a newly allocated formatted version of    `age`, or `null` if the given `system` has no representation for `age`
     * @since 0.12.12
     */
    function content_rating_system_format_age(system: ContentRatingSystem | null, age: number): string | null;
    /**
     * Determine the most appropriate {@link AppStream.ContentRatingSystem} for the given `locale`.
     * Content rating systems are selected by territory. If no content rating system
     * seems suitable, {@link AppStream.ContentRatingSystem.IARC} is returned.
     * @param locale a locale, in the format described in `man 3 setlocale`
     * @returns the most relevant {@link AppStream.ContentRatingSystem}
     * @since 0.12.12
     */
    function content_rating_system_from_locale(locale: string): ContentRatingSystem;
    /**
     * Get the CSM ages corresponding to the entries returned by
     * `as_content_rating_system_get_formatted_ages()` for this `system`.
     * @param system an {@link AppStream.ContentRatingSystem}
     * @returns an array of CSM ages
     * @since 0.12.12
     */
    function content_rating_system_get_csm_ages(system: ContentRatingSystem | null): number[];
    /**
     * Get an array of all the possible return values of
     * `as_content_rating_system_format_age()` for the given `system`. The array is
     * sorted with youngest CSM age first.
     * @param system an {@link AppStream.ContentRatingSystem}
     * @returns `null`-terminated array of human-readable age strings
     * @since 0.12.12
     */
    function content_rating_system_get_formatted_ages(system: ContentRatingSystem | null): string[];
    /**
     * Get a human-readable string to identify `system`. `null` will be returned for
     * {@link AppStream.ContentRatingSystem.UNKNOWN}.
     * @param system an {@link AppStream.ContentRatingSystem}
     * @returns a human-readable string for `system`, or `null` if unknown
     * @since 0.12.12
     */
    function content_rating_system_to_string(system: ContentRatingSystem | null): string | null;
    /**
     * Converts the text representation to an enumerated value.
     * @param value the string.
     * @returns a {@link AppStream.ContentRatingValue} or {@link AppStream.ContentRatingValue.UNKNOWN} for unknown
     * @since 0.11.0
     */
    function content_rating_value_from_string(value: string): ContentRatingValue;
    /**
     * Converts the enumerated value to an text representation.
     * @param value the {@link AppStream.ContentRatingValue}.
     * @returns string version of `value`
     * @since 0.11.0
     */
    function content_rating_value_to_string(value: ContentRatingValue | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.ControlKind} or {@link AppStream.ControlKind.UNKNOWN} for unknown
     * @since 0.12.11
     */
    function control_kind_from_string(kind_str: string): ControlKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.ControlKind}.
     * @returns string version of `kind`
     * @since 0.12.11
     */
    function control_kind_to_string(kind: ControlKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.DisplaySideKind} or {@link AppStream.DisplaySideKind.UNKNOWN} for unknown
     * @since 0.12.12
     */
    function display_side_kind_from_string(kind_str: string): DisplaySideKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.DisplaySideKind}.
     * @returns string version of `kind`
     * @since 0.12.12
     */
    function display_side_kind_to_string(kind: DisplaySideKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.FormatKind} or {@link AppStream.FormatKind.UNKNOWN} for unknown
     * @since 0.10.0
     */
    function format_kind_from_string(kind_str: string): FormatKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.FormatKind}.
     * @returns string version of `kind`
     * @since 0.10.0
     */
    function format_kind_to_string(kind: FormatKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param version_str the string.
     * @returns a {@link AppStream.FormatVersion}. For unknown, the highest version number is assumed.
     * @since 0.10.0
     */
    function format_version_from_string(version_str: string): FormatVersion;
    /**
     * Converts the enumerated value to an text representation.
     * @param version the {@link AppStream.FormatKind}.
     * @returns string version of `version`
     * @since 0.10.0
     */
    function format_version_to_string(version: FormatVersion | null): string;
    /**
     * Returns the component-ID of the current distribution based on contents
     * of the `/etc/os-release` file.
     * This function is a shorthand for %as_distro_details_get_cid
     */
    function get_current_distro_component_id(): string;
    /**
     * Get a list of the default Freedesktop and AppStream categories
     * that software components (especially GUI applications) can be sorted
     * into in software centers.
     *
     * This function fully transfers ownership of the returned container,
     * to be used in GIR bindings.
     * @param with_special Include special categories (e.g. "addons", and "all"/"featured" in submenus)
     * @returns a list of {@link AppStream.Category}
     */
    function get_default_categories(with_special: boolean): Category[];
    /**
     * Get a translated license name for the given SPDX ID.
     * @param license The SPDX license ID.
     * @returns The license name, or `null` if none found.
     * @since 1.0.0
     */
    function get_license_name(license: string): string | null;
    /**
     * Get a web URL to the license text and more license information for an SPDX
     * license identifier.
     * @param license The SPDX license ID.
     * @returns The license URL, or `null` if none available.
     * @since 0.12.7
     */
    function get_license_url(license: string): string | null;
    /**
     * Replaces the string `find` with the string `replace` in a {@link GLib.String} up to
     * `limit` times. If the number of instances of `find` in the {@link GLib.String} is
     * less than `limit`, all instances are replaced. If `limit` is `0`,
     * all instances of `find` are replaced.
     * @param string a {@link GLib.String}
     * @param find the string to find in `string`
     * @param replace the string to insert in place of `find`
     * @param limit the maximum instances of `find` to replace with `replace`, or `0` for no limit
     * @returns the number of find and replace operations performed.
     */
    function gstring_replace(string: GLib.String, find: string, replace: string, limit: number): number;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.IconKind} or {@link AppStream.IconKind.UNKNOWN} for unknown
     */
    function icon_kind_from_string(kind_str: string): IconKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsIconKind.
     * @returns string version of `kind`
     */
    function icon_kind_to_string(kind: IconKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a {@link AppStream.ImageKind}, or {@link AppStream.ImageKind.UNKNOWN} for unknown.
     */
    function image_kind_from_string(kind: string): ImageKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ImageKind}.
     * @returns string version of `kind`
     */
    function image_kind_to_string(kind: ImageKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.InternetKind} or {@link AppStream.InternetKind.UNKNOWN} for unknown
     * @since 0.15.5
     */
    function internet_kind_from_string(kind_str: string): InternetKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.InternetKind}.
     * @returns string version of `kind`
     * @since 0.15.5
     */
    function internet_kind_to_string(kind: InternetKind | null): string;
    /**
     * Searches the known list of SPDX license exception IDs.
     * @param exception_id a single SPDX license exception ID, e.g. "GCC-exception-3.1"
     * @returns `true` if the string is a valid SPDX license exception ID
     * @since 0.12.10
     */
    function is_spdx_license_exception_id(exception_id: string): boolean;
    /**
     * Checks the licence string to check it being a valid licence.
     * NOTE: SPDX licenses can't typically contain brackets.
     * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
     * @returns `true` if the icon is a valid "SPDX license"
     * @since 0.9.8
     */
    function is_spdx_license_expression(license: string): boolean;
    /**
     * Searches the known list of SPDX license IDs.
     * @param license_id a single SPDX license ID, e.g. "GPL-3.0"
     * @returns `true` if the string is a valid SPDX license ID
     * @since 0.9.8
     */
    function is_spdx_license_id(license_id: string): boolean;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.IssueKind} or {@link AppStream.IssueKind.UNKNOWN} for unknown
     */
    function issue_kind_from_string(kind_str: string): IssueKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsIssueKind.
     * @returns string version of `kind`
     */
    function issue_kind_to_string(kind: IssueKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param str the string.
     * @returns a {@link AppStream.IssueSeverity}, or {@link AppStream.IssueSeverity.UNKNOWN} for unknown.
     */
    function issue_severity_from_string(str: string): IssueSeverity;
    /**
     * Converts the enumerated value to an text representation.
     * @param severity the {@link AppStream.IssueSeverity}.
     * @returns string version of `severity`
     */
    function issue_severity_to_string(severity: IssueSeverity | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.LaunchableKind} or {@link AppStream.LaunchableKind.UNKNOWN} for unknown
     * @since 0.11.0
     */
    function launchable_kind_from_string(kind_str: string): LaunchableKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.LaunchableKind}.
     * @returns string version of `kind`
     * @since 0.11.0
     */
    function launchable_kind_to_string(kind: LaunchableKind | null): string;
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
     * @returns `true` if the license string contains only free-as-in-freedom licenses.
     * @since 0.12.10
     */
    function license_is_free_license(license: string): boolean;
    /**
     * Check if the metadata license is suitable for mixing with other
     * metadata and redistributing the bundled result (this means we
     * prefer permissive licenses here, to not require people shipping
     * catalog metadata to perform a full license review).
     *
     * This method checks against a hardcoded list of permissive licenses
     * commonly used to license metadata under.
     * @param license The SPDX license string to test.
     * @returns `true` if the license contains only permissive licenses suitable as metadata license.
     */
    function license_is_metadata_license(license: string): boolean;
    /**
     * Tests license ID against the vetted list of licenses that
     * can be used for metainfo metadata.
     * This function will not work for license expressions, if you need
     * to test an SPDX license expression for compliance, please
     * use %as_license_is_metadata_license insread.
     * @param license_id a single SPDX license ID, e.g. "FSFAP"
     * @returns `true` if the string is a valid metadata license ID.
     */
    function license_is_metadata_license_id(license_id: string): boolean;
    /**
     * Converts a non-SPDX license into an SPDX format string where possible.
     * @param license a not-quite SPDX license string, e.g. "GPLv3+"
     * @returns the best-effort SPDX license string
     * @since 0.9.8
     */
    function license_to_spdx_id(license: string): string;
    /**
     * Converts XML description markup into other forms of text.
     * @param markup the XML markup to transform.
     * @param to_kind The markup style to convert into.
     * @returns a newly allocated string, or `null` on error.
     */
    function markup_convert(markup: string, to_kind: MarkupKind | null): string;
    /**
     * Splits up a long line into an array of smaller strings, each being no longer
     * than `line_len`. Words are not split.
     * @param text the text to split.
     * @param line_len the maximum length of the output line
     * @returns lines, or `null` in event of an error
     * @since 0.14.0
     */
    function markup_strsplit_words(text: string, line_len: number): string[];
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.MergeKind} or {@link AppStream.MergeKind.NONE} for unknown
     */
    function merge_kind_from_string(kind_str: string): MergeKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.MergeKind}.
     * @returns string version of `kind`
     */
    function merge_kind_to_string(kind: MergeKind | null): string;
    /**
     * @returns An error quark.
     */
    function metadata_error_quark(): GLib.Quark;
    /**
     * @returns An error quark.
     */
    function pool_error_quark(): GLib.Quark;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.ProvidedKind} or {@link AppStream.ProvidedKind.UNKNOWN} for unknown
     */
    function provided_kind_from_string(kind_str: string): ProvidedKind;
    /**
     * Converts the enumerated value to a localized text representation,
     * using the plural forms (e.g. "Libraries" instead of "Library").
     *
     * This can be useful when displaying provided items in GUI dialogs.
     * @param kind the {@link AppStream.ProvidedKind}.
     * @returns Pluralized, l10n string version of `kind`
     */
    function provided_kind_to_l10n_string(kind: ProvidedKind | null): string;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.ProvidedKind}.
     * @returns string version of `kind`
     */
    function provided_kind_to_string(kind: ProvidedKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param str the string.
     * @returns a AsReferenceKind or {@link AppStream.ReferenceKind.UNKNOWN} for unknown
     */
    function reference_kind_from_string(str: string): ReferenceKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsReferenceKind.
     * @returns string version of `kind`
     * @since 1.0.0
     */
    function reference_kind_to_string(kind: ReferenceKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param compare_str the string.
     * @returns a {@link AppStream.RelationCompare}, or {@link AppStream.RelationCompare.UNKNOWN} for unknown.
     * @since 0.12.0
     */
    function relation_compare_from_string(compare_str: string): RelationCompare;
    /**
     * Converts the enumerated value to an text representation.
     * The enum is converted into a two-letter identifier ("eq", "ge", etc.)
     * for use in the XML representation.
     * @param compare the {@link AppStream.RelationCompare}.
     * @returns string version of `compare`
     * @since 0.12.0
     */
    function relation_compare_to_string(compare: RelationCompare | null): string;
    /**
     * Converts the enumerated value to an text representation.
     * The enum is converted into an identifier consisting of two
     * mathematical comparison operators ("==", ">=", etc.)
     * for use in the YAML representation and user interfaces.
     * @param compare the {@link AppStream.RelationCompare}.
     * @returns string version of `compare`
     * @since 0.12.0
     */
    function relation_compare_to_symbols_string(compare: RelationCompare | null): string;
    /**
     * @returns An error quark.
     * @since 0.16.0
     */
    function relation_error_quark(): GLib.Quark;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.RelationItemKind} or {@link AppStream.RelationItemKind.UNKNOWN} for unknown
     * @since 0.12.0
     */
    function relation_item_kind_from_string(kind_str: string): RelationItemKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.RelationKind}.
     * @returns string version of `kind`
     * @since 0.12.0
     */
    function relation_item_kind_to_string(kind: RelationItemKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.RelationKind} or {@link AppStream.RelationKind.UNKNOWN} for unknown
     * @since 0.12.0
     */
    function relation_kind_from_string(kind_str: string): RelationKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.RelationKind}.
     * @returns string version of `kind`
     * @since 0.12.0
     */
    function relation_kind_to_string(kind: RelationKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns an {@link AppStream.ReleaseKind} or {@link AppStream.ReleaseKind.UNKNOWN} for unknown
     * @since 0.12.0
     */
    function release_kind_from_string(kind_str: string): ReleaseKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ReleaseKind}.
     * @returns string version of `kind`
     * @since 0.12.0
     */
    function release_kind_to_string(kind: ReleaseKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns an {@link AppStream.ReleaseKind} or {@link AppStream.ReleaseKind.UNKNOWN} for unknown
     * @since 0.16.0
     */
    function release_list_kind_from_string(kind_str: string): ReleaseListKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ReleaseKind}.
     * @returns string version of `kind`
     * @since 0.16.0
     */
    function release_list_kind_to_string(kind: ReleaseListKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns an {@link AppStream.ReleaseUrlKind} or {@link AppStream.ReleaseUrlKind.UNKNOWN} for unknown
     * @since 0.12.5
     */
    function release_url_kind_from_string(kind_str: string): ReleaseUrlKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ReleaseUrlKind}.
     * @returns string version of `kind`
     * @since 0.12.5
     */
    function release_url_kind_to_string(kind: ReleaseUrlKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind the string.
     * @returns a %AsScreenshotKind, or {@link AppStream.ScreenshotKind.UNKNOWN} if not known.
     */
    function screenshot_kind_from_string(kind: string): ScreenshotKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.ScreenshotKind}.
     * @returns string version of `kind`
     */
    function screenshot_kind_to_string(kind: ScreenshotKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param size_kind the string.
     * @returns an {@link AppStream.SizeKind} or {@link AppStream.SizeKind.UNKNOWN} for unknown
     */
    function size_kind_from_string(size_kind: string): SizeKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param size_kind the {@link AppStream.SizeKind}.
     * @returns string version of `size_kind`
     */
    function size_kind_to_string(size_kind: SizeKind | null): string;
    /**
     * De-tokenizes the SPDX licenses into a string.
     * @param license_tokens license tokens, typically from `as_spdx_license_tokenize()`
     * @returns string, or `null` for invalid
     * @since 0.9.8
     */
    function spdx_license_detokenize(license_tokens: string): string | null;
    /**
     * Tokenizes the SPDX license string (or any simarly formatted string)
     * into parts. Any license parts of the string e.g. "LGPL-2.0+" are prefexed
     * with "@", the conjunctive replaced with "&", the disjunctive replaced
     * with "|" and the WITH operator for license exceptions replaced with "^".
     * Brackets are added as indervidual tokens and other strings are
     * appended into single tokens where possible.
     * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
     * @returns array of strings, or `null` for invalid
     * @since 0.9.8
     */
    function spdx_license_tokenize(license: string): string[] | null;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.SuggestedKind} or {@link AppStream.SuggestedKind.UNKNOWN} for unknown
     */
    function suggested_kind_from_string(kind_str: string): SuggestedKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the %AsSuggestedKind.
     * @returns string version of `kind`
     */
    function suggested_kind_to_string(kind: SuggestedKind | null): string;
    /**
     * @returns An error quark.
     * @since 0.16.0
     */
    function system_info_error_quark(): GLib.Quark;
    /**
     * Converts the text representation to an enumerated value.
     * @param kind_str the string.
     * @returns a {@link AppStream.TranslationKind} or {@link AppStream.TranslationKind.UNKNOWN} for unknown
     */
    function translation_kind_from_string(kind_str: string): TranslationKind;
    /**
     * Converts the enumerated value to a text representation.
     * @param kind the {@link AppStream.TranslationKind}.
     * @returns string version of `kind`
     */
    function translation_kind_to_string(kind: TranslationKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param urgency_kind the string.
     * @returns a %AsUrgencyKind or {@link AppStream.UrgencyKind.UNKNOWN} for unknown
     * @since 0.6.5
     */
    function urgency_kind_from_string(urgency_kind: string): UrgencyKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param urgency_kind the %AsUrgencyKind.
     * @returns string version of `urgency_kind`
     * @since 0.6.5
     */
    function urgency_kind_to_string(urgency_kind: UrgencyKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param url_kind the string.
     * @returns a {@link AppStream.UrlKind} or {@link AppStream.UrlKind.UNKNOWN} for unknown
     */
    function url_kind_from_string(url_kind: string): UrlKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param url_kind the %AsUrlKind.
     * @returns string version of `url_kind`
     */
    function url_kind_to_string(url_kind: UrlKind | null): string;
    /**
     * Builds an identifier string unique to the individual dataset using the supplied information.
     * @param scope Scope of the metadata as {@link AppStream.ComponentScope} e.g. {@link AppStream.ComponentScope.SYSTEM}
     * @param bundle_kind Bundling system providing this data, e.g. 'package' or 'flatpak'
     * @param origin Origin string, e.g. 'os' or 'gnome-apps-nightly'
     * @param cid AppStream component ID, e.g. 'org.freedesktop.appstream.cli'
     * @param branch Branch, e.g. '3-20' or 'master'
     * @since 0.14.0
     */
    function utils_build_data_id(
        scope: ComponentScope | null,
        bundle_kind: BundleKind | null,
        origin: string,
        cid: string,
        branch: string,
    ): string;
    /**
     * Checks two component data IDs for equality allowing globs to match.
     * @param data_id1 a data ID
     * @param data_id2 another data ID
     * @returns `true` if the ID's should be considered equal.
     * @since 0.14.0
     */
    function utils_data_id_equal(data_id1: string, data_id2: string): boolean;
    /**
     * Get the component-id part of the data-id.
     * @param data_id The data-id.
     */
    function utils_data_id_get_cid(data_id: string): string;
    /**
     * Converts a data-id to a hash value.
     *
     * This function implements the widely used DJB hash on the ID subset of the
     * data-id string.
     *
     * It can be passed to `g_hash_table_new()` as the hash_func parameter,
     * when using non-NULL strings or unique_ids as keys in a GHashTable.
     * @param data_id a data ID
     * @returns a hash value corresponding to the key
     * @since 0.14.0
     */
    function utils_data_id_hash(data_id: string): number;
    /**
     * Checks two data IDs for equality allowing globs to match, whilst also
     * allowing clients to whitelist sections that have to match.
     * @param data_id1 a data ID
     * @param data_id2 another data ID
     * @param match_flags a {@link AppStream.DataIdMatchFlags} bitfield, e.g. {@link AppStream.DataIdMatchFlags.ID}
     * @returns `true` if the IDs should be considered equal.
     * @since 0.14.0
     */
    function utils_data_id_match(data_id1: string, data_id2: string, match_flags: DataIdMatchFlags | null): boolean;
    /**
     * Checks if a data ID is valid i.e. has the correct number of
     * sections.
     * @param data_id a component data ID
     * @returns `true` if the ID is valid
     * @since 0.14.0
     */
    function utils_data_id_valid(data_id: string): boolean;
    /**
     * @returns An error quark.
     * @since 0.14.0
     */
    function utils_error_quark(): GLib.Quark;
    /**
     * Get a human-readable, translated name of the desktop environment
     * represented by the given ID.
     * @param de_id a desktop environment id.
     * @returns A localized name of the DE, or `null` if none available.
     * @since 1.0.0
     */
    function utils_get_desktop_environment_name(de_id: string): string;
    /**
     * Get a human-readable, translated name of the combination
     * of GUI environment and style. E.g. "plasma:dark" becomes "Plasma (Dark)".
     * @param env_style a GUI environment style ID, e.g. "pantheon:dark"
     * @returns A localized name of the environment style, or `null` if none available.
     * @since 1.0.0
     */
    function utils_get_gui_environment_style_name(env_style: string): string;
    /**
     * Retrieve the raw search token weight for the given tag name that AppStream uses
     * internally for searching.
     * This can be used to implement separate, but compatible search logic.
     * @param tag_name A tag name in a component element, e.g. "name" or "summary" or "keyword"
     * @returns The tag weight used in (fulltext) searches. 0 for lowest weight/unused.
     */
    function utils_get_tag_search_weight(tag_name: string): number;
    /**
     * Guess the {@link AppStream.ComponentScope} that applies to a given path.
     * @param path The filename to test.
     * @returns the {@link AppStream.ComponentScope}
     * @since 0.15.0
     */
    function utils_guess_scope_from_path(path: string): ComponentScope;
    /**
     * Installs an AppStream MetaInfo, AppStream Metadata Catalog or AppStream Icon tarball file
     * to the right place on the filesystem.
     * Please note that this function does almost no validation and may guess missing values such
     * as icon sizes and origin names.
     * Ensure your metadata is good before installing it.
     * @param location the {@link AppStream.MetadataLocation}, e.g. {@link AppStream.MetadataLocation.CACHE}
     * @param filename the full path of the file to install
     * @param origin the origin to use for the installation, or `null`
     * @param destdir the destdir to use, or `null`
     * @returns `true` for success, `false` if error is set
     * @since 0.14.0
     */
    function utils_install_metadata_file(
        location: MetadataLocation | null,
        filename: string,
        origin: string,
        destdir: string,
    ): boolean;
    /**
     * Searches the known list of registered XDG category names.
     * See https://specifications.freedesktop.org/menu-spec/latest/category-registry.html
     * for a reference.
     * @param category_name a XDG category name, e.g. "ProjectManagement"
     * @returns `true` if the category name is valid
     * @since 0.9.7
     */
    function utils_is_category_name(category_name: string): boolean;
    /**
     * Checks if the submitted desktop environment ID is
     * known and valid.
     * @param de_id a desktop environment id.
     * @returns `true` if the desktop-id is valid
     * @since 0.10.0
     */
    function utils_is_desktop_environment(de_id: string): boolean;
    /**
     * Checks if the given identifier is a valid, known GUI environment style.
     * @param env_style a GUI environment style ID, e.g. "pantheon:dark"
     * @returns `true` if the environment-style ID is is valid
     * @since 1.0.0
     */
    function utils_is_gui_environment_style(env_style: string): boolean;
    /**
     * Test if the given string is a valid platform triplet recognized by
     * AppStream.
     * @param triplet a platform triplet.
     * @returns `true` if triplet is valid.
     * @since 0.14.0
     */
    function utils_is_platform_triplet(triplet: string): boolean;
    /**
     * Searches the known list of TLDs we allow for AppStream IDs.
     * This excludes internationalized names.
     * @param tld a top-level domain without dot, e.g. "de", "org", "name"
     * @returns `true` if the TLD is valid
     * @since 0.9.8
     */
    function utils_is_tld(tld: string): boolean;
    /**
     * Calculates if one locale is compatible with another.
     * When doing the calculation the locale and language code is taken into
     * account if possible.
     * @param locale1 a BCP47 or POSIX locale string, or `null`
     * @param locale2 a BCP47 or POSIX locale string, or `null`
     * @returns `true` if the locale is compatible.
     * @since 0.9.5
     */
    function utils_locale_is_compatible(locale1?: string | null, locale2?: string | null): boolean;
    /**
     * Converts a POSIX locale string to the corresponding IETF BCP47 format.
     * If the given locale is already in BCP47 format, no change will be done.
     * @param locale
     * @returns A locale string, free with `g_free()`
     */
    function utils_posix_locale_to_bcp47(locale: string): string;
    /**
     * Sorts all components in `cpts` into the {@link AppStream.Category} categories listed in `categories`.
     * @param cpts List of components.
     * @param categories List of categories to sort components into.
     * @param check_duplicates Whether to check for duplicates.
     */
    function utils_sort_components_into_categories(
        cpts: Component[],
        categories: Category[],
        check_duplicates: boolean,
    ): void;
    /**
     * @returns An error quark.
     * @since 0.15.4
     */
    function validator_error_quark(): GLib.Quark;
    /**
     * Compare alpha and numeric segments of two software versions,
     * considering `flags`.
     * @param a First version number
     * @param b Second version number
     * @param flags Flags, e.g. {@link AppStream.VercmpFlags.NONE}
     * @returns an integer > 0 if a is newer than b;     0 if a and b are the same version;     < 0 if b is newer than a
     */
    function vercmp(a: string, b: string, flags: VercmpFlags | null): number;
    /**
     * Compare alpha and numeric segments of two software versions.
     * @param a First version number
     * @param b Second version number
     * @returns an integer > 0 if a is newer than b;     0 if a and b are the same version;     < 0 if b is newer than a
     */
    function vercmp_simple(a: string, b: string): number;
    /**
     * Compare two version numbers and check if the given version comparator matches.
     * @param ver1 first version number
     * @param compare the comparison operator
     * @param ver2 second version number
     * @param flags the {@link AppStream.VercmpFlags} to use
     * @returns `true` if the version comparison matches, `false` otherwise.
     * @since 0.16.0
     */
    function vercmp_test_match(
        ver1: string,
        compare: RelationCompare | null,
        ver2: string,
        flags: VercmpFlags | null,
    ): boolean;
    /**
     * Get the version of the AppStream library that is currently used
     * at runtime as a string.
     * @returns a version number, e.g. "0.14.2"
     * @since 0.14.0
     */
    function version_string(): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param str the string.
     * @returns a {@link AppStream.VideoCodecKind}, or {@link AppStream.VideoCodecKind.UNKNOWN} for unknown.
     */
    function video_codec_kind_from_string(str: string): VideoCodecKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.VideoCodecKind}.
     * @returns string version of `codec`
     */
    function video_codec_kind_to_string(kind: VideoCodecKind | null): string;
    /**
     * Converts the text representation to an enumerated value.
     * @param str the string.
     * @returns a {@link AppStream.VideoContainerKind}, or {@link AppStream.VideoContainerKind.UNKNOWN} for unknown.
     */
    function video_container_kind_from_string(str: string): VideoContainerKind;
    /**
     * Converts the enumerated value to an text representation.
     * @param kind the {@link AppStream.VideoContainerKind}.
     * @returns string version of `kind`
     */
    function video_container_kind_to_string(kind: VideoContainerKind | null): string;
    /**
     * @gir-type Flags
     */
    export namespace CacheFlags {
        export const $gtype: GObject.GType<CacheFlags>;
    }

    /**
     * Flags on how caching should be used.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace ComponentBoxFlags {
        export const $gtype: GObject.GType<ComponentBoxFlags>;
    }

    /**
     * Flags controlling the component box behavior.
     * @gir-type Flags
     */
    enum ComponentBoxFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Only perform the most basic verification.
         */
        NO_CHECKS,
    }

    /**
     * @gir-type Flags
     */
    export namespace DataIdMatchFlags {
        export const $gtype: GObject.GType<DataIdMatchFlags>;
    }

    /**
     * The flags used when matching unique IDs.
     * @gir-type Flags
     */
    enum DataIdMatchFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Scope, e.g. a {@link AppStream.ComponentScope}
         */
        SCOPE,
        /**
         * Bundle kind, e.g. a {@link AppStream.BundleKind}
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
     * @gir-type Flags
     */
    export namespace ParseFlags {
        export const $gtype: GObject.GType<ParseFlags>;
    }

    /**
     * Influence certain aspects of how AppStream metadata is parsed.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace PoolFlags {
        export const $gtype: GObject.GType<PoolFlags>;
    }

    /**
     * Flags controlling the metadata pool behavior.
     * @gir-type Flags
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
         * Prefer local metainfo data over the system-provided catalog data. Useful for previewing local data.
         */
        PREFER_OS_METAINFO,
        /**
         * Monitor registered directories for changes, and auto-reload metadata if necessary.
         */
        MONITOR,
    }

    /**
     * @gir-type Flags
     */
    export namespace ReviewFlags {
        export const $gtype: GObject.GType<ReviewFlags>;
    }

    /**
     * The flags for the review.
     * @gir-type Flags
     * @since 0.14.0
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
     * @gir-type Flags
     */
    export namespace ValueFlags {
        export const $gtype: GObject.GType<ValueFlags>;
    }

    /**
     * Set how values assigned to an {@link AppStream.Component} should be treated when
     * they are set or retrieved.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace VercmpFlags {
        export const $gtype: GObject.GType<VercmpFlags>;
    }

    /**
     * The flags used when matching unique IDs.
     * @gir-type Flags
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

        static ['new'](): Agreement;

        // Signals

        /** @signal */
        connect<K extends keyof Agreement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Agreement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Agreement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Agreement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Agreement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Agreement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param agreement_section
         */
        add_section(agreement_section: AgreementSection): void;
        /**
         * Gets the agreement kind.
         * @returns a string, e.g. {@link AppStream.AgreementKind.EULA}
         */
        get_kind(): AgreementKind;
        /**
         * Gets the first section in the agreement.
         * @returns agreement section, or `null`
         */
        get_section_default(): AgreementSection | null;
        /**
         * Gets all the sections in the agreement.
         * @returns array
         */
        get_sections(): AgreementSection[];
        /**
         * Gets the agreement version_id.
         * @returns a string, e.g. "1.4a", or NULL
         */
        get_version_id(): string;
        /**
         * Sets the agreement kind.
         * @param kind the agreement kind, e.g. {@link AppStream.AgreementKind.EULA}
         */
        set_kind(kind: AgreementKind | null): void;
        /**
         * Sets the agreement version identifier.
         * @param version_id the agreement version ID, e.g. "1.4a"
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

        static ['new'](): AgreementSection;

        // Signals

        /** @signal */
        connect<K extends keyof AgreementSection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AgreementSection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AgreementSection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AgreementSection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AgreementSection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AgreementSection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the {@link AppStream.Context} associated with this section.
         * This function may return `null` if no context is set.
         * @returns the {@link AppStream.Context} used by this agreement section.
         */
        get_context(): Context | null;
        /**
         * Gets the agreement section desc.
         * @returns a string, e.g. "GDPR", or NULL
         */
        get_description(): string;
        /**
         * Gets the agreement section kind.
         * @returns a string, e.g. "GDPR", or NULL
         */
        get_kind(): string;
        /**
         * Gets the agreement section name.
         * @returns a string, e.g. "GDPR", or NULL
         */
        get_name(): string;
        /**
         * Sets the document context this release is associated
         * with.
         * @param context the {@link AppStream.Context}.
         */
        set_context(context: Context): void;
        /**
         * Sets the agreement section desc.
         * @param desc the agreement description, e.g. "GDPR"
         * @param locale the locale in BCP47 format. e.g. "en-GB"
         */
        set_description(desc: string, locale?: string | null): void;
        /**
         * Sets the agreement section kind.
         * @param kind the agreement kind, e.g. "GDPR"
         */
        set_kind(kind: string): void;
        /**
         * Sets the agreement section name.
         * @param name the agreement name, e.g. "GDPR"
         * @param locale the locale. e.g. "en_GB"
         */
        set_name(name: string, locale?: string | null): void;
    }

    namespace Artifact {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Artifact extends GObject.Object {
        static $gtype: GObject.GType<Artifact>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Artifact.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Artifact.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Artifact;

        // Signals

        /** @signal */
        connect<K extends keyof Artifact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Artifact.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Artifact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Artifact.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Artifact.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Artifact.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a checksum for the file associated with this artifact.
         * @param cs The {@link AppStream.Checksum}.
         */
        add_checksum(cs: Checksum): void;
        /**
         * Adds a artifact location.
         * @param location An URL of the download location
         */
        add_location(location: string): void;
        /**
         * Gets the bundle kind of this artifact.
         * @returns the {@link AppStream.BundleKind}
         */
        get_bundle_kind(): BundleKind;
        /**
         * Gets the artifact checksum
         * @param kind
         * @returns an {@link AppStream.Checksum}, or `null` for not set or invalid
         */
        get_checksum(kind: ChecksumKind | null): Checksum | null;
        /**
         * Get a list of all checksums we have for this artifact.
         * @returns an array of {@link AppStream.Checksum} objects.
         */
        get_checksums(): Checksum[];
        /**
         * Gets a suggested filename for the downloaded artifact,
         * or `null` if none is suggested.
         * @returns The platform triplet or identifier string.
         */
        get_filename(): string;
        /**
         * Gets the artifact kind.
         * @returns the {@link AppStream.ArtifactKind}
         */
        get_kind(): ArtifactKind;
        /**
         * Gets the artifact locations, typically URLs.
         * @returns list of locations
         */
        get_locations(): string[];
        /**
         * Gets the artifact platform string (e.g. a triplet like "x86_64-linux-gnu").
         * @returns The platform triplet or identifier string.
         */
        get_platform(): string;
        /**
         * Gets the artifact size.
         * @param kind a {@link AppStream.SizeKind}
         * @returns The size of the given kind of this artifact.
         */
        get_size(kind: SizeKind | null): number;
        /**
         * Sets the bundle kind for this release artifact.
         * @param kind the {@link AppStream.BundleKind}, e.g. {@link AppStream.BundleKind.TARBALL}.
         */
        set_bundle_kind(kind: BundleKind | null): void;
        /**
         * Sets a suggested filename for this artifact after it has been downloaded.
         * @param filename the file name suggestion.
         */
        set_filename(filename: string): void;
        /**
         * Sets the artifact kind.
         * @param kind the {@link AppStream.ArtifactKind}, e.g. {@link AppStream.ArtifactKind.SOURCE}.
         */
        set_kind(kind: ArtifactKind | null): void;
        /**
         * Sets the artifact platform triplet or identifier string.
         * @param platform the platform triplet.
         */
        set_platform(platform: string): void;
        /**
         * Sets the artifact size for the given kind.
         * @param size a size in bytes, or 0 for unknown
         * @param kind a {@link AppStream.SizeKind}
         */
        set_size(size: number, kind: SizeKind | null): void;
    }

    namespace Branding {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Branding extends GObject.Object {
        static $gtype: GObject.GType<Branding>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Branding.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Branding.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Branding;

        // Signals

        /** @signal */
        connect<K extends keyof Branding.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Branding.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Branding.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Branding.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Branding.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Branding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieve a color of the given `kind` that matches `scheme_kind`.
         * If a color has no scheme preference defined, it will be returned for either scheme type,
         * unless a more suitable color was found.
         * @param kind the {@link AppStream.ColorKind}, e.g. {@link AppStream.ColorKind.PRIMARY}.
         * @param scheme_kind Color scheme preference for the color, e.g. {@link AppStream.ColorSchemeKind.LIGHT}
         * @returns The HTML color code of the found color, or `null` if no color was found.
         */
        get_color(kind: ColorKind | null, scheme_kind: ColorSchemeKind | null): string | null;
        /**
         * Deletes a color that matches the given type and scheme preference.
         * @param kind the {@link AppStream.ColorKind}, e.g. {@link AppStream.ColorKind.PRIMARY}.
         * @param scheme_preference Type of color scheme preferred for this color, e.g. {@link AppStream.ColorSchemeKind.LIGHT}
         */
        remove_color(kind: ColorKind | null, scheme_preference: ColorSchemeKind | null): void;
        /**
         * Sets a new accent color. If a color of the given kind with the given scheme preference already exists,
         * it will be overriden with the new color code.
         * @param kind the {@link AppStream.ColorKind}, e.g. {@link AppStream.ColorKind.PRIMARY}.
         * @param scheme_preference Type of color scheme preferred for this color, e.g. {@link AppStream.ColorSchemeKind.LIGHT}
         * @param colorcode a HTML color code.
         */
        set_color(kind: ColorKind | null, scheme_preference: ColorSchemeKind | null, colorcode: string): void;
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

        static ['new'](): Bundle;

        // Signals

        /** @signal */
        connect<K extends keyof Bundle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bundle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Bundle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bundle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Bundle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bundle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the ID for this bundle.
         * @returns ID, e.g. "foobar-1.0.2"
         */
        get_id(): string;
        /**
         * Gets the bundle kind.
         * @returns the {@link AppStream.BundleKind}
         */
        get_kind(): BundleKind;
        /**
         * Sets the ID for this bundle.
         * @param id the URL.
         */
        set_id(id: string): void;
        /**
         * Sets the bundle kind.
         * @param kind the {@link AppStream.BundleKind}, e.g. {@link AppStream.BundleKind.LIMBA}.
         */
        set_kind(kind: BundleKind | null): void;
    }

    namespace Category {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::children': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            children: any;
            icon: string;
            id: string;
            name: string;
            summary: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Category extends GObject.Object {
        static $gtype: GObject.GType<Category>;

        // Properties

        /**
         * @read-only
         */
        get children(): any;
        get icon(): string;
        set icon(val: string);
        get id(): string;
        set id(val: string);
        get name(): string;
        set name(val: string);
        /**
         * @read-only
         */
        get summary(): string;

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
         * Add a subcategory to this category.
         * @param subcat A subcategory to add.
         */
        add_child(subcat: Category): void;
        /**
         * Add a component to this category.
         * @param cpt The {@link AppStream.Component} to add.
         */
        add_component(cpt: Component): void;
        /**
         * Add a desktop-file category to this {@link AppStream.Category}.
         * @param group_name A subcategory to add.
         */
        add_desktop_group(group_name: string): void;
        /**
         * @returns A list of subcategories.
         */
        get_children(): Category[];
        /**
         * Get list of components which have been sorted into this category.
         * @returns List of {@link AppStream.Category}
         */
        get_components(): Component[];
        /**
         * @returns A list of desktop-file categories.
         */
        get_desktop_groups(): string[];
        /**
         * Get the stock icon name for this category.
         */
        get_icon(): string;
        /**
         * Get the ID of this category.
         */
        get_id(): string;
        /**
         * Get the name of this category.
         */
        get_name(): string;
        /**
         * Get the summary (short description) of this category.
         */
        get_summary(): string;
        /**
         * Test for sub-categories.
         * @returns `true` if this category has any subcategory
         */
        has_children(): boolean;
        /**
         * Check if the exact {@link AppStream.Component} `cpt` is a member of this
         * category already.
         * @param cpt The {@link AppStream.Component} to look for.
         * @returns `true` if the component is present.
         */
        has_component(cpt: Component): boolean;
        /**
         * Drop a subcategory from this {@link AppStream.Category}.
         * @param subcat A subcategory to remove.
         */
        remove_child(subcat: Category): void;
        /**
         * Set the stock icon name for this category.
         * @param value
         */
        set_icon(value: string): void;
        /**
         * Set the ID of this category.
         * @param id
         */
        set_id(id: string): void;
        /**
         * Set the name of this category.
         * @param value
         */
        set_name(value: string): void;
        /**
         * Get the summary (short description) of this category.
         * @param value A new short summary of this category.
         */
        set_summary(value: string): void;
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

        static ['new'](): Checksum;

        static new_with_value(kind: ChecksumKind, value: string): Checksum;

        // Signals

        /** @signal */
        connect<K extends keyof Checksum.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Checksum.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Checksum.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Checksum.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Checksum.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Checksum.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the checksum type.
         * @returns the {@link AppStream.ChecksumKind}
         */
        get_kind(): ChecksumKind;
        /**
         * Gets the checksum, usually in its hexadecimal form.
         * @returns the checksum.
         */
        get_value(): string;
        /**
         * Sets the checksum type.
         * @param kind the {@link AppStream.ChecksumKind}, e.g. {@link AppStream.ChecksumKind.SHA256}.
         */
        set_kind(kind: ChecksumKind | null): void;
        /**
         * Sets the checksum value filename.
         * @param value the new value.
         */
        set_value(value: string): void;
    }

    namespace Component {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icons': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::keywords': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pkgnames': (pspec: GObject.ParamSpec) => void;
            'notify::project-group': (pspec: GObject.ParamSpec) => void;
            'notify::project-license': (pspec: GObject.ParamSpec) => void;
            'notify::screenshots': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::urls': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            categories: any[];
            description: string;
            icons: Icon[];
            id: string;
            keywords: string[];
            kind: ComponentKind;
            name: string;
            pkgnames: string[];
            project_group: string;
            projectGroup: string;
            project_license: string;
            projectLicense: string;
            screenshots: Screenshot[];
            summary: string;
            urls: GLib.HashTable<UrlKind, string>;
        }
    }

    /**
     * @gir-type Class
     */
    class Component extends GObject.Object {
        static $gtype: GObject.GType<Component>;

        // Properties

        /**
         * string array of categories
         * @read-only
         */
        get categories(): any[];
        /**
         * the description
         */
        get description(): string;
        set description(val: string);
        /**
         * hash map of icon urls and sizes
         * @read-only
         */
        get icons(): Icon[];
        /**
         * the unique identifier
         */
        get id(): string;
        set id(val: string);
        /**
         * string array of keywords
         */
        get keywords(): string[];
        set keywords(val: string[]);
        /**
         * the {@link AppStream.ComponentKind} of this component
         */
        get kind(): ComponentKind;
        set kind(val: ComponentKind);
        /**
         * the name
         */
        get name(): string;
        set name(val: string);
        /**
         * string array of packages name
         */
        get pkgnames(): string[];
        set pkgnames(val: string[]);
        /**
         * the project group
         */
        get project_group(): string;
        set project_group(val: string);
        /**
         * the project group
         */
        get projectGroup(): string;
        set projectGroup(val: string);
        /**
         * the project license
         */
        get project_license(): string;
        set project_license(val: string);
        /**
         * the project license
         */
        get projectLicense(): string;
        set projectLicense(val: string);
        /**
         * An array of {@link AppStream.Screenshot} instances
         * @read-only
         */
        get screenshots(): Screenshot[];
        /**
         * the summary
         */
        get summary(): string;
        set summary(val: string);
        /**
         * the urls associated with this component
         * @read-only
         */
        get urls(): GLib.HashTable<UrlKind, string>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Component.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Component;

        // Signals

        /** @signal */
        connect<K extends keyof Component.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Component.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Component.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a reference to the addon that is enhancing this component.
         * @param addon The {@link AppStream.Component} that extends `cpt`
         */
        add_addon(addon: Component): void;
        /**
         * Adds an agreement to the software component.
         * @param agreement an {@link AppStream.Agreement} instance.
         */
        add_agreement(agreement: Agreement): void;
        /**
         * Adds a bundle to the component.
         * @param bundle The {@link AppStream.Bundle} to add.
         */
        add_bundle(bundle: Bundle): void;
        /**
         * Add a category.
         * @param category the categories name to add.
         */
        add_category(category: string): void;
        /**
         * Adds a content rating to this component.
         * @param content_rating a {@link AppStream.ContentRating} instance.
         */
        add_content_rating(content_rating: ContentRating): void;
        /**
         * Add a reference to the extended component
         * @param cpt_id The id of a component which is extended by this component
         */
        add_extends(cpt_id: string): void;
        /**
         * Add an icon to this component.
         * @param icon the valid {@link AppStream.Icon} instance to add.
         */
        add_icon(icon: Icon): void;
        /**
         * Add a new keyword to the keywords list for the given locale. This function does not
         * check for duplicate keywords.
         * @param keyword The new keyword to add.
         * @param locale BCP47 locale of the values, or `null` to use current locale.
         */
        add_keyword(keyword: string, locale?: string | null): void;
        /**
         * Adds a language to the component.
         * @param locale the BCP47 locale, or `null`. e.g. "en-GB"
         * @param percentage the percentage completion of the translation, 0 for locales with unknown amount of translation
         */
        add_language(locale: string | null, percentage: number): void;
        /**
         * Adds a {@link AppStream.Launchable} containing launchables entries for this component.
         * @param launchable a {@link AppStream.Launchable} instance.
         */
        add_launchable(launchable: Launchable): void;
        /**
         * Add a set of provided items to this component.
         * @param prov a {@link AppStream.Provided} instance.
         */
        add_provided(prov: Provided): void;
        /**
         * Adds a provided item to the component with the given `kind`, creating a new
         * `AsProvided` for this kind internally if necessary.
         * @param kind the kind of the provided item (e.g. {@link AppStream.ProvidedKind.MEDIATYPE})
         * @param item the item to add.
         */
        add_provided_item(kind: ProvidedKind | null, item: string): void;
        /**
         * Adds an external reference to the software component.
         * @param reference an {@link AppStream.Reference} instance.
         */
        add_reference(reference: Reference): void;
        /**
         * Adds a {@link AppStream.Relation} to set a recommends or requires relation of
         * component `cpt` on the item mentioned in the {@link AppStream.Relation}.
         * @param relation a {@link AppStream.Relation} instance.
         */
        add_relation(relation: Relation): void;
        /**
         * Add an {@link AppStream.Release} to this component.
         * @param release The {@link AppStream.Release} to add
         */
        add_release(release: Release): void;
        /**
         * Add the component ID of a component that gets replaced by the current component.
         * @param cid an AppStream component ID
         */
        add_replaces(cid: string): void;
        /**
         * Adds a user review to a software component.
         * @param review a {@link AppStream.Review} instance.
         */
        add_review(review: Review): void;
        /**
         * Add an {@link AppStream.Screenshot} to this component.
         * @param sshot The {@link AppStream.Screenshot} to add
         */
        add_screenshot(sshot: Screenshot): void;
        /**
         * Add an {@link AppStream.Suggested} to this component.
         * @param suggested The {@link AppStream.Suggested}
         */
        add_suggested(suggested: Suggested): void;
        /**
         * Add a tag to this component.
         * @param ns The namespace the tag belongs to
         * @param tag The tag name
         * @returns `true` if the tag was added.
         */
        add_tag(ns: string, tag: string): boolean;
        /**
         * Assign an {@link AppStream.Translation} object describing the translation system used
         * by this component.
         * @param tr an {@link AppStream.Translation} instance.
         */
        add_translation(tr: Translation): void;
        /**
         * Adds some URL data to the component.
         * @param url_kind the URL kind, e.g. {@link AppStream.UrlKind.HOMEPAGE}
         * @param url the full URL.
         */
        add_url(url_kind: UrlKind | null, url: string): void;
        /**
         * Verifies the respective relations and presents whether the system specified
         * in {@link AppStream.SystemInfo} `sysinfo` and data from `pool` supply the requested facilities.
         * @param sysinfo an {@link AppStream.SystemInfo} to use for system information.
         * @param pool an {@link AppStream.Pool} to find component dependencies in.
         * @param rel_kind the kind of relations to check
         * @returns An array of {@link AppStream.RelationCheckResult}
         */
        check_relations(
            sysinfo: SystemInfo | null,
            pool: Pool | null,
            rel_kind: RelationKind | null,
        ): RelationCheckResult[];
        /**
         * Remove all keywords for the given locale.
         * @param locale BCP47 locale of the values, or `null` to use current locale.
         */
        clear_keywords(locale?: string | null): void;
        /**
         * Remove all registered language translation information.
         */
        clear_languages(): void;
        /**
         * Remove all tags associated with this component.
         */
        clear_tags(): void;
        /**
         * Returns a list of {@link AppStream.Component} objects which
         * are addons extending this component in functionality.
         *
         * This is the reverse of %as_component_get_extends()
         * @returns An array of {@link AppStream.Component}.
         */
        get_addons(): Component[];
        /**
         * Gets an agreement the component has specified for the particular kind.
         * @param kind an agreement kind, e.g. {@link AppStream.AgreementKind.EULA}
         * @returns a {@link AppStream.Agreement} or `null` for not found
         */
        get_agreement_by_kind(kind: AgreementKind | null): Agreement | null;
        /**
         * Get a list of all agreements registered with this software component.
         * @returns An array of {@link AppStream.Agreement}.
         */
        get_agreements(): Agreement[];
        /**
         * Gets the branch for the application.
         * @returns string, or `null` if unset
         */
        get_branch(): string;
        /**
         * Get the branding associated with this component, or `null`
         * in case this component has no special branding.
         * @returns An {@link AppStream.Branding}.
         */
        get_branding(): Branding | null;
        /**
         * Gets a bundle identifier string.
         * @param bundle_kind the bundle kind, e.g. {@link AppStream.BundleKind.LIMBA}.
         * @returns An {@link AppStream.Bundle}, or `null` if not set.
         */
        get_bundle(bundle_kind: BundleKind | null): Bundle | null;
        /**
         * Get a list of all software bundles associated with this component.
         * @returns A list of {@link AppStream.Bundle}.
         */
        get_bundles(): Bundle[];
        /**
         * @returns String array of categories
         */
        get_categories(): string[];
        /**
         * @returns A list of desktops where this component is compulsory
         */
        get_compulsory_for_desktops(): string[];
        /**
         * Gets a content ratings of a specific type that are defined for this component.
         * @param kind a ratings kind, e.g. "oars-1.0"
         * @returns a {@link AppStream.ContentRating} or `null` if not found
         */
        get_content_rating(kind: string): ContentRating | null;
        /**
         * Gets all content ratings defined for this software.
         * @returns an array
         */
        get_content_ratings(): ContentRating[];
        /**
         * Get the {@link AppStream.Context} associated with this component.
         * This function may return `null` if no context is set
         * (which will be the case if the component was not loaded from
         * a file or cache but constructed in memory).
         * @returns the associated {@link AppStream.Context} or `null`
         */
        get_context(): Context | null;
        /**
         * @returns Hash table of custom user defined data fields.
         */
        get_custom(): GLib.HashTable<any, any>;
        /**
         * Retrieve value for a custom data entry with the given key.
         * @param key Field name.
         */
        get_custom_value(key: string): string;
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
        get_data_id(): string;
        /**
         * Gets the end-of-life date for the entire component.
         * @returns The EOL date as string in ISO8601 format.
         */
        get_date_eol(): string;
        /**
         * Get the localized long description of this component.
         * @returns the description.
         */
        get_description(): string;
        /**
         * Get information about the component's developer or development team.
         * The returned object may be empty if no developer information was
         * available.
         * @returns the developer as {@link AppStream.Developer}.
         */
        get_developer(): Developer;
        /**
         * Returns a string list of IDs of components which
         * are extended by this addon.
         *
         * See %as_component_get_extends() for the reverse.
         * @returns A {@link GLib.PtrArray} or `null` if not set.
         */
        get_extends(): string[] | null;
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
         * @returns An icon matching the given width/height, or `null` if not found.
         */
        get_icon_by_size(width: number, height: number): Icon | null;
        /**
         * Gets a stock icon for this component if one is associated with it.
         * Will return `null` otherwise.
         * @returns An stock icon, or `null` if none found.
         */
        get_icon_stock(): Icon | null;
        /**
         * @returns A {@link GLib.PtrArray} of all icons for this component.
         */
        get_icons(): Icon[];
        /**
         * Get the unique AppStream identifier for this component.
         * This ID is unique for the described component, but does
         * not uniquely identify the metadata set.
         *
         * For a unique ID for this metadata set in the current
         * session, use %as_component_get_data_id()
         * @returns the unique AppStream identifier.
         */
        get_id(): string;
        /**
         * @returns String array of keywords
         */
        get_keywords(): string[];
        /**
         * Retrieve the internal hash table mapping languages to
         * keword arrays.
         * @returns Hash table locale->keyword arrays
         */
        get_keywords_table(): GLib.HashTable<any, any>;
        /**
         * Returns the {@link AppStream.ComponentKind} of this component.
         * @returns the kind of #this.
         */
        get_kind(): ComponentKind;
        /**
         * Gets the translation coverage in percent for a specific locale
         * @param locale the BCP47 locale, or `null`. e.g. "en-GB"
         * @returns a percentage value, -1 if locale was not found
         */
        get_language(locale?: string | null): number;
        /**
         * Get a list of all languages.
         * @returns list of locales
         */
        get_languages(): string[];
        /**
         * Gets a {@link AppStream.Launchable} of a specific type that contains launchable entries for
         * this component.
         * @param kind a launch kind, e.g. {@link AppStream.LaunchableKind.DESKTOP_ID}
         * @returns a {@link AppStream.Launchable} or `null` if not found
         */
        get_launchable(kind: LaunchableKind | null): Launchable | null;
        /**
         * @returns an array
         */
        get_launchables(): Launchable[];
        /**
         * Get the merge method which should apply to duplicate components
         * with this ID.
         * @returns the {@link AppStream.MergeKind} of this component.
         */
        get_merge_kind(): MergeKind;
        /**
         * The license the metadata iself is subjected to.
         * @returns the license.
         */
        get_metadata_license(): string;
        /**
         * A human-readable name for this component.
         * @returns the name.
         */
        get_name(): string;
        /**
         * Get the internal locale to component name
         * mapping table.
         * @returns locale->names map
         */
        get_name_table(): GLib.HashTable<any, any>;
        /**
         * Get variant suffix for the component name
         * (only to be displayed if two components have the same name).
         * @returns the variant suffix
         */
        get_name_variant_suffix(): string;
        get_origin(): string;
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
        get_pkgname(): string;
        /**
         * Get a list of package names which this component consists of.
         * This usually is just one package name.
         * @returns String array of package names
         */
        get_pkgnames(): string[];
        /**
         * Returns the priority of this component.
         * This method is used internally.
         */
        get_priority(): number;
        /**
         * Get the component's project group.
         * @returns the project group.
         */
        get_project_group(): string;
        /**
         * Get the license of the project this component belongs to.
         * @returns the license.
         */
        get_project_license(): string;
        /**
         * Get a list of {@link AppStream.Provided} objects associated with this component.
         * @returns A list of {@link AppStream.Provided} objects.
         */
        get_provided(): Provided[];
        /**
         * Get an {@link AppStream.Provided} object for the given interface type,
         * containing information about the public interfaces (mimetypes, firmware, DBus services, ...)
         * this component provides.
         * @param kind kind of the provided item, e.g. {@link AppStream.ProvidedKind.MEDIATYPE}
         * @returns {@link AppStream.Provided} containing the items this component provides, or `null`.
         */
        get_provided_for_kind(kind: ProvidedKind | null): Provided | null;
        /**
         * Get an array of items that are recommended by this component.
         * @returns an array
         */
        get_recommends(): Relation[];
        /**
         * Get a list of external references and citation information for this component.
         * @returns An array of {@link AppStream.Reference}.
         */
        get_references(): Reference[];
        /**
         * Get release information for this component,
         * without downloading or loading any data from external sources.
         * @returns Release information as {@link AppStream.ReleaseList}
         */
        get_releases_plain(): ReleaseList;
        /**
         * Get a list of component IDs of components that this software replaces entirely.
         * @returns an array of component-IDs
         */
        get_replaces(): string[];
        /**
         * Get an array of items that are required by this component.
         * @returns an array
         */
        get_requires(): Relation[];
        /**
         * Gets any reviews associated with the component.
         * @returns an array
         */
        get_reviews(): Review[];
        /**
         * @returns the {@link AppStream.ComponentScope} of this component.
         */
        get_scope(): ComponentScope;
        /**
         * Get a list of all associated screenshots, for all environments.
         * @returns an array of {@link AppStream.Screenshot} instances
         */
        get_screenshots_all(): Screenshot[];
        /**
         * Returns all search tokens for this component.
         * @returns The string search tokens
         */
        get_search_tokens(): string[];
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
        get_sort_score(): number;
        /**
         * @returns the source package name.
         */
        get_source_pkgname(): string;
        /**
         * Get a list of associated suggestions.
         * @returns an array of {@link AppStream.Suggested} instances
         */
        get_suggested(): Suggested[];
        /**
         * Get a short description of this component.
         * @returns the summary.
         */
        get_summary(): string;
        /**
         * Get the internal locale to component summary
         * mapping table.
         * @returns locale->summary map
         */
        get_summary_table(): GLib.HashTable<any, any>;
        /**
         * Get an array of items that are supported by this component,
         * e.g. to indicate support for a specific piece of hardware.
         * @returns an array
         */
        get_supports(): Relation[];
        /**
         * Return a score between 0 and 100 determining how compatible the component
         * is with the system configuration provided as parameter.
         *
         * 0 means the componsnt will not work at all, while 100 is best compatibility.
         * @param sysinfo an {@link AppStream.SystemInfo} to use for system information.
         * @param is_template if `true`, treat system info as neutral template, ignoring any peripheral devices or kernel relations.
         * @returns a compatibility score between 0 and 100
         */
        get_system_compatibility_score(
            sysinfo: SystemInfo,
            is_template: boolean,
        ): [number, RelationCheckResult[] | null];
        /**
         * Gets the UNIX timestamp for the date when this component
         * is out of support (end-of-life) and will receive no more
         * updates, not even security fixes.
         * @returns UNIX timestamp, or 0 for unset or invalid.
         */
        get_timestamp_eol(): number;
        /**
         * Get a {@link GLib.PtrArray} of {@link AppStream.Translation} objects describing the
         * translation systems and translation-ids (e.g. Gettext domains) used
         * by this software component.
         *
         * Only set for metainfo files.
         * @returns An array of {@link AppStream.Translation} objects.
         */
        get_translations(): Translation[];
        /**
         * Gets a URL.
         * @param url_kind the URL kind, e.g. {@link AppStream.UrlKind.HOMEPAGE}.
         * @returns string, or `null` if unset
         */
        get_url(url_kind: UrlKind | null): string | null;
        /**
         * @returns `true` if this component has a bundle associated.
         */
        has_bundle(): boolean;
        /**
         * Check if component is in the specified category.
         * @param category the specified category to check
         * @returns `true` if the component is in the specified category.
         */
        has_category(category: string): boolean;
        /**
         * Test if the component is tagged with the selected
         * tag.
         * @param ns The namespace the tag belongs to
         * @param tag The tag name
         * @returns `true` if tag exists.
         */
        has_tag(ns: string, tag: string): boolean;
        /**
         * Add a key and value pair to the custom data table.
         * @param key Key name.
         * @param value A string value.
         * @returns `true` if the key did not exist yet.
         */
        insert_custom_value(key: string, value: string): boolean;
        /**
         * Check if this component is compulsory for the given desktop.
         * @param desktop the desktop-id to test for
         * @returns `true` if compulsory, `false` otherwise.
         */
        is_compulsory_for_desktop(desktop: string): boolean;
        /**
         * Returns `true` if this component is free and open source software.
         * To determine this status, this function will check if it comes
         * from a vetted free-software-only source or whether its licenses
         * are only free software licenses.
         * @returns `true` if this component is free software.
         */
        is_floss(): boolean;
        /**
         * @returns Whether this component's metadata should be ignored.
         */
        is_ignored(): boolean;
        /**
         * Test if the component `cpt` is a member of category `category`.
         * @param category The category to test.
         */
        is_member_of_category(category: Category): boolean;
        /**
         * Check if the essential properties of this Component are
         * populated with useful data.
         * @returns TRUE if the component data was validated successfully.
         */
        is_valid(): boolean;
        /**
         * Load metadata for this component from an XML string.
         * You normally do not want to use this method directly and instead use the more
         * convenient API of {@link AppStream.Metadata} to create and update components.
         *
         * If this function returns `true`, a valid component is returned unless the selected
         * format was {@link AppStream.FormatKind.DESKTOP_ENTRY}, in which case a component ID will have to
         * be set explicitly by the caller in order to make the component valid.
         * @param context an {@link AppStream.Context} instance.
         * @param format the format of the data to load, e.g. {@link AppStream.FormatKind.XML}
         * @param bytes the data to load.
         * @returns `true` on success.
         */
        load_from_bytes(context: Context, format: FormatKind | null, bytes: GLib.Bytes | Uint8Array): boolean;
        /**
         * Get release information for this component, download it
         * if necessary.
         * @param allow_net
         * @returns Release information as {@link AppStream.ReleaseList}, or `null` if loading failed.
         */
        load_releases(allow_net: boolean): ReleaseList | null;
        /**
         * Remove a tag from this component
         * @param ns The namespace the tag belongs to
         * @param tag The tag name
         * @returns `true` if the tag was removed.
         */
        remove_tag(ns: string, tag: string): boolean;
        /**
         * Searches component data for a specific keyword.
         * @param term the search term.
         * @returns a match scrore, where 0 is no match and 100 is the best match.
         */
        search_matches(term: string): number;
        /**
         * Searches component data for all the specific keywords.
         * @param terms the search terms.
         * @returns a match score, where 0 is no match and larger numbers are better matches.
         */
        search_matches_all(terms: string): number;
        /**
         * Set the branch that the component instance was sourced from.
         * @param branch the branch, e.g. "master" or "3-16".
         */
        set_branch(branch: string): void;
        /**
         * Set branding for this component.
         * @param branding an {@link AppStream.Branding} instance.
         */
        set_branding(branding: Branding): void;
        /**
         * Mark this component to be compulsory for the specified desktop environment.
         * @param desktop The name of the desktop.
         */
        set_compulsory_for_desktop(desktop: string): void;
        /**
         * Sets the document context this component is associated
         * with.
         * @param context the {@link AppStream.Context}.
         */
        set_context(context: Context): void;
        /**
         * Set the active locale on the context assoaiacted with this component,
         * creating a new context for the component if none exists yet.
         *
         * Please not that this will flip the locale of all other components and
         * entities that use the same context as well!
         * This function is just a convenience method, and does not replace
         * proper {@link AppStream.Context} management.
         * @param locale the new locale.
         */
        set_context_locale(locale: string): void;
        /**
         * Set the session-specific unique metadata identifier for this
         * component.
         * If two components have a different data_id but the same ID,
         * they will be treated as independent sets of metadata describing
         * the same component type.
         * @param value the unique session-specific identifier.
         */
        set_data_id(value: string): void;
        /**
         * Sets an end-of-life date for this component.
         * @param date the EOL date in ISO8601 format.
         */
        set_date_eol(date: string): void;
        /**
         * Set long description for this component.
         * @param value The long description
         * @param locale The BCP47 locale for this value, or `null` to use the current active one.
         */
        set_description(value: string, locale?: string | null): void;
        /**
         * Set the the component's developer.
         * @param developer the new {@link AppStream.Developer}
         */
        set_developer(developer: Developer): void;
        /**
         * Set the AppStream identifier for this component.
         * @param value the unique identifier.
         */
        set_id(value: string): void;
        /**
         * Set keywords for this component, replacing all existing ones for the selected locale.
         * @param new_keywords Array of keywords
         * @param locale BCP47 locale of the values, or `null` to use current locale.
         * @param deep_copy Set to `true` if the keywords array should be copied, `false` to set by reference.
         */
        set_keywords(new_keywords: string[], locale: string | null, deep_copy: boolean): void;
        /**
         * Sets the {@link AppStream.ComponentKind} of this component.
         * @param value the {@link AppStream.ComponentKind}.
         */
        set_kind(value: ComponentKind | null): void;
        /**
         * Sets the {@link AppStream.MergeKind} for this component.
         * @param kind the {@link AppStream.MergeKind}.
         */
        set_merge_kind(kind: MergeKind | null): void;
        /**
         * Set the license this metadata is licensed under.
         * @param value the metadata license.
         */
        set_metadata_license(value: string): void;
        /**
         * Set a human-readable name for this component.
         * @param value The name
         * @param locale The BCP47 locale for this value, or `null` to use the current active one.
         */
        set_name(value: string, locale?: string | null): void;
        /**
         * Set a variant suffix for the component name
         * (only to be displayed if components have the same name).
         * @param value the developer or developer team name
         * @param locale the BCP47 locale, or `null`. e.g. "en-GB"
         */
        set_name_variant_suffix(value: string, locale?: string | null): void;
        /**
         * @param origin the origin.
         */
        set_origin(origin: string): void;
        /**
         * Set the package name that provides this component.
         * @param pkgname the package name
         */
        set_pkgname(pkgname: string): void;
        /**
         * Set a list of package names this component consists of.
         * (This should usually be just one package name)
         * @param packages
         */
        set_pkgnames(packages: string[]): void;
        /**
         * Sets the priority of this component.
         * This method is used internally.
         * @param priority the given priority
         */
        set_priority(priority: number): void;
        /**
         * Set the component's project group.
         * @param value the project group.
         */
        set_project_group(value: string): void;
        /**
         * Set the project license.
         * @param value the project license.
         */
        set_project_license(value: string): void;
        /**
         * Set a new set of releases for this component.
         * @param releases the {@link AppStream.ReleaseList} to use.
         */
        set_releases(releases: ReleaseList): void;
        /**
         * Sets the {@link AppStream.ComponentScope} of this component.
         * @param scope the {@link AppStream.ComponentKind}.
         */
        set_scope(scope: ComponentScope | null): void;
        /**
         * Sets the sorting score of this component.
         * @param score the given sorting score
         */
        set_sort_score(score: number): void;
        /**
         * @param spkgname the source package name.
         */
        set_source_pkgname(spkgname: string): void;
        /**
         * Set a short description for this component.
         * @param value The summary
         * @param locale The BCP47 locale for this value, or `null` to use the current active one.
         */
        set_summary(value: string, locale?: string | null): void;
        /**
         * Reorder the screenshots to prioritize a certain environment or style, instead of using the default
         * screenshot order.
         *
         * If both "environment" and "style" are `null`, the previous default order is restored.
         * @param environment a GUI environment string, e.g. "plasma" or "gnome"
         * @param style and environment style string, e.g. "light" or "dark"
         * @param prioritize_style if `true`, order screenshots of the given style earlier than ones of the given environment.
         */
        sort_screenshots(environment: string | null, style: string | null, prioritize_style: boolean): void;
        /**
         * Returns a string identifying this component.
         * (useful for debugging)
         * @returns A descriptive string
         */
        to_string(): string;
        /**
         * Serialize this component into an XML string.
         * You normally do not want to use this method directly and instead use the more
         * convenient API of {@link AppStream.Metadata} to serialize components.
         * @param context an {@link AppStream.Context} instance.
         * @returns `true` on success.
         */
        to_xml_data(context: Context): string;
    }

    namespace ComponentBox {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ComponentBox extends GObject.Object {
        static $gtype: GObject.GType<ComponentBox>;

        // Properties

        /**
         * @construct-only
         */
        get flags(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ComponentBox.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ComponentBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: ComponentBoxFlags): ComponentBox;

        static new_simple(): ComponentBox;

        // Signals

        /** @signal */
        connect<K extends keyof ComponentBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ComponentBox.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ComponentBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ComponentBox.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ComponentBox.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ComponentBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a component to the box. Returns an error if we could not add it
         * (most likely due to component box constraints).
         * @param cpt
         * @returns `true` on success.
         */
        add(cpt: Component): boolean;
        /**
         * Get the contents of this component box as {@link GLib.PtrArray}.
         * @returns an array of {@link AppStream.Component} instances.
         */
        as_array(): Component[];
        /**
         * Remove all contents of this component box.
         */
        clear(): void;
        /**
         * Get the flags this component box was constructed with.
         * @returns The {@link AppStream.ComponentBoxFlags} that are in effect.
         */
        get_flags(): ComponentBoxFlags;
        /**
         * Get the amount of components in this box.
         * @returns Amount of components.
         */
        get_size(): number;
        /**
         * Retrieve a component at the respective index from the internal
         * component array.
         * @param index The component index.
         * @returns An {@link AppStream.Component} or `null`
         */
        index_safe(index: number): Component;
        /**
         * Check if there are any components present.
         * @returns `true` if this component box is empty.
         */
        is_empty(): boolean;
        /**
         * Remove a component at the specified index.
         * Please ensure that the index is not larger than
         * %as_component_box_get_size() - 1
         * @param index the index of the component to remove.
         */
        remove_at(index: number): void;
        /**
         * Sort components to bring them into a deterministic order.
         */
        sort(): void;
        /**
         * Sort components by their (search) match score.
         */
        sort_by_score(): void;
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

        static ['new'](): ContentRating;

        // Signals

        /** @signal */
        connect<K extends keyof ContentRating.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentRating.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContentRating.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentRating.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContentRating.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContentRating.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the highest {@link AppStream.ContentRatingValue} which is allowed to be seen by the
         * given Common Sense Media `age` for the given subsection `id`.
         *
         * For example, if the CSM age mappings for `violence-bloodshed` are:
         *  * age ≥ 0 for {@link AppStream.ContentRatingValue.NONE}
         *  * age ≥ 9 for {@link AppStream.ContentRatingValue.MILD}
         *  * age ≥ 11 for {@link AppStream.ContentRatingValue.MODERATE}
         *  * age ≥ 18 for {@link AppStream.ContentRatingValue.INTENSE}
         * then calling this function with `violence-bloodshed` and `age` set to 17 would
         * return {@link AppStream.ContentRatingValue.MODERATE}. Calling it with age 18 would
         * return {@link AppStream.ContentRatingValue.INTENSE}.
         * @param id the subsection ID e.g. `violence-cartoon`
         * @param age the CSM age
         */
        static attribute_from_csm_age(id: string, age: number): ContentRatingValue;
        /**
         * Get a human-readable description of what content would be expected to
         * require the content rating attribute given by `id` and `value`.
         * @param id the subsection ID e.g. `violence-cartoon`
         * @param value the {@link AppStream.ContentRatingValue}, e.g. {@link AppStream.ContentRatingValue.INTENSE}
         */
        static attribute_get_description(id: string, value: ContentRatingValue): string;
        /**
         * Gets the Common Sense Media approved age for a specific rating level.
         * @param id the subsection ID e.g. `violence-cartoon`
         * @param value the {@link AppStream.ContentRatingValue}, e.g. {@link AppStream.ContentRatingValue.INTENSE}
         */
        static attribute_to_csm_age(id: string, value: ContentRatingValue): number;
        /**
         * Returns a list of all the valid OARS content rating attribute IDs as could
         * be passed to `as_content_rating_add_attribute()` or
         * `as_content_rating_attribute_to_csm_age()`.
         */
        static get_all_rating_ids(): string[];

        // Methods

        /**
         * Adds an attribute value to the content rating.
         * @param id a content rating ID, e.g. `money-gambling`.
         * @param value a {@link AppStream.ContentRatingValue}, e.g. {@link AppStream.ContentRatingValue.MODERATE}.
         */
        add_attribute(id: string, value: ContentRatingValue | null): void;
        /**
         * Gets the content_rating kind.
         * @returns a string, e.g. "oars-1.0", or NULL
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
         */
        get_minimum_age(): number;
        /**
         * Gets the set of ratings IDs which are present in this `content_rating`. An
         * example of a ratings ID is `violence-bloodshed`.
         *
         * The IDs are returned in lexicographical order.
         * @returns `null`-terminated    array of ratings IDs; each ratings ID is owned by the {@link AppStream.ContentRating} and    must not be freed, but the container must be freed with `g_free()`
         */
        get_rating_ids(): string[];
        /**
         * Gets the value of a content rating key.
         * @param id A ratings ID, e.g. `violence-bloodshed`.
         * @returns the {@link AppStream.ContentRatingValue}, or {@link AppStream.ContentRatingValue.UNKNOWN}
         */
        get_value(id: string): ContentRatingValue;
        /**
         * Sets the content rating kind.
         * @param kind the rating kind, e.g. "oars-1.0"
         */
        set_kind(kind: string): void;
        /**
         * Sets the value of a content rating key.
         * @param id A ratings ID, e.g. `violence-bloodshed`.
         * @param value A {@link AppStream.ContentRatingValue}, e.g. {@link AppStream.ContentRatingValue.INTENSE}
         */
        set_value(id: string, value: ContentRatingValue | null): void;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Context;

        // Signals

        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The name of the file the data originates from.
         */
        get_filename(): string;
        /**
         * @returns The AppStream format version.
         */
        get_format_version(): FormatVersion;
        /**
         * @returns The active locale in BCP47 format.
         */
        get_locale(): string;
        /**
         * @returns `true` if all locale should be parsed.
         */
        get_locale_use_all(): boolean;
        /**
         * @returns The media base URL.
         */
        get_media_baseurl(): string;
        /**
         * @returns The data origin.
         */
        get_origin(): string;
        /**
         * @returns The data priority.
         */
        get_priority(): number;
        /**
         * @returns The document style.
         */
        get_style(): FormatStyle;
        /**
         * @returns The {@link AppStream.ValueFlags} that are set on `cpt`.
         */
        get_value_flags(): ValueFlags;
        /**
         * @returns `true` if a media base URL is set.
         */
        has_media_baseurl(): boolean;
        /**
         * Sets the file name we are loading data from.
         * @param fname the new file name.
         */
        set_filename(fname: string): void;
        /**
         * Sets the AppStream format version.
         * @param ver the new format version.
         */
        set_format_version(ver: FormatVersion | null): void;
        /**
         * Sets the active locale.
         * If the magic value "ALL" is used, the current system locale will be used
         * for data reading, but when writing data all locale will be written.
         * @param locale a POSIX or BCP47 locale, or `null`. e.g. "en_GB"
         */
        set_locale(locale?: string | null): void;
        /**
         * Sets the media base URL.
         * @param value the new value.
         */
        set_media_baseurl(value: string): void;
        /**
         * Sets the data origin.
         * @param value the new value.
         */
        set_origin(value: string): void;
        /**
         * Sets the data priority.
         * @param priority the new priority.
         */
        set_priority(priority: number): void;
        /**
         * Sets the AppStream document style.
         * @param style the new document style.
         */
        set_style(style: FormatStyle | null): void;
        /**
         * @param flags {@link AppStream.ValueFlags} to set on `cpt`.
         */
        set_value_flags(flags: ValueFlags | null): void;
    }

    namespace Developer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Developer extends GObject.Object {
        static $gtype: GObject.GType<Developer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Developer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Developer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Developer;

        // Signals

        /** @signal */
        connect<K extends keyof Developer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Developer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Developer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Developer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Developer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Developer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets a unique ID for this particular developer, e.g. "gnome" or "mozilla.org"
         * @returns the unique developer ID, or `null` if none was set.
         */
        get_id(): string;
        /**
         * Get a localized developer, or development team name.
         * @returns the developer name.
         */
        get_name(): string;
        /**
         * Sets the unique ID of this developer.
         * @param id a developer ID, e.g. "mozilla.org"
         */
        set_id(id: string): void;
        /**
         * Set the the developer or development team name.
         * @param value the developer or developer team name
         * @param locale the BCP47 locale, or `null`. e.g. "en-GB"
         */
        set_name(value: string, locale?: string | null): void;
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

        static ['new'](): Icon;

        // Signals

        /** @signal */
        connect<K extends keyof Icon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Icon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Icon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Icon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The absolute path for the icon on disk. This is only set for icons of kind {@link AppStream.IconKind.LOCAL} or {@link AppStream.IconKind.CACHED}.
         */
        get_filename(): string;
        /**
         * @returns The icon height in pixels, or 0 if unknown.
         */
        get_height(): number;
        /**
         * Gets the icon kind.
         * @returns the {@link AppStream.IconKind}
         */
        get_kind(): IconKind;
        /**
         * @returns the stock name of the icon. In case the icon is not of kind "stock", the basename of the icon filename or URL is returned.
         */
        get_name(): string;
        /**
         * @returns The icon scaling factor.
         */
        get_scale(): number;
        /**
         * Gets the icon URL, pointing at a remote location. HTTPS and FTP urls are allowed.
         * This property is only set for icons of type {@link AppStream.IconKind.REMOTE}
         * @returns the URL
         */
        get_url(): string;
        /**
         * @returns The icon width in pixels, or 0 if unknown.
         */
        get_width(): number;
        /**
         * Sets the icon absolute filename.
         * @param filename the new icon URL.
         */
        set_filename(filename: string): void;
        /**
         * Sets the icon height.
         * @param height the height in pixels.
         */
        set_height(height: number): void;
        /**
         * Sets the icon kind.
         * @param kind the {@link AppStream.IconKind}, e.g. {@link AppStream.IconKind.CACHED}.
         */
        set_kind(kind: IconKind | null): void;
        /**
         * Sets the stock name or basename to use for the icon.
         * @param name the icon stock name, e.g. "gwenview"
         */
        set_name(name: string): void;
        /**
         * Sets the icon scaling factor used for HiDPI displays.
         * @param scale the icon scaling factor.
         */
        set_scale(scale: number): void;
        /**
         * Sets the icon URL.
         * @param url the new icon URL.
         */
        set_url(url: string): void;
        /**
         * Sets the icon width.
         * @param width the width in pixels.
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

        static ['new'](): Image;

        // Signals

        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the image height.
         * @returns height in pixels
         */
        get_height(): number;
        /**
         * Gets the image kind.
         * @returns the {@link AppStream.ImageKind}
         */
        get_kind(): ImageKind;
        /**
         * Get locale for this image.
         * @returns Locale string
         */
        get_locale(): string;
        /**
         * Gets the image integer scale factor.
         * @returns the scale factor.
         */
        get_scale(): number;
        /**
         * Gets the full qualified URL for the image, usually pointing at some mirror.
         * @returns URL
         */
        get_url(): string;
        /**
         * Gets the image width.
         * @returns width in pixels
         */
        get_width(): number;
        /**
         * Sets the image height.
         * @param height the height in pixels.
         */
        set_height(height: number): void;
        /**
         * Sets the image kind.
         * @param kind the {@link AppStream.ImageKind}, e.g. {@link AppStream.ImageKind.THUMBNAIL}.
         */
        set_kind(kind: ImageKind | null): void;
        /**
         * Sets the locale for this image.
         * @param locale the BCP47 locale string.
         */
        set_locale(locale: string): void;
        /**
         * Sets the image scale factor.
         * @param scale the integer scale factor, e.g. 2
         */
        set_scale(scale: number): void;
        /**
         * Sets the fully-qualified mirror URL to use for the image.
         * @param url the URL.
         */
        set_url(url: string): void;
        /**
         * Sets the image width.
         * @param width the width in pixels.
         */
        set_width(width: number): void;
    }

    namespace Issue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Issue extends GObject.Object {
        static $gtype: GObject.GType<Issue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Issue.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Issue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Issue;

        // Signals

        /** @signal */
        connect<K extends keyof Issue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Issue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Issue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Issue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Issue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Issue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the issue ID (usually a bug number or CVE ID)
         * @returns the ID.
         */
        get_id(): string;
        /**
         * Gets the issue type.
         * @returns the {@link AppStream.IssueKind}
         */
        get_kind(): IssueKind;
        /**
         * Gets the URL associacted with this issue, usually
         * referencing a bug report or issue description.
         * @returns the URL.
         */
        get_url(): string;
        /**
         * Sets the issue ID.
         * @param id the new ID.
         */
        set_id(id: string): void;
        /**
         * Sets the issue type.
         * @param kind the {@link AppStream.IssueKind}, e.g. `AS_ISSUE_KIND_SHA256`.
         */
        set_kind(kind: IssueKind | null): void;
        /**
         * Sets an URL describing this issue.
         * @param url the new URL.
         */
        set_url(url: string): void;
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

        static ['new'](): Launchable;

        // Signals

        /** @signal */
        connect<K extends keyof Launchable.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Launchable.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Launchable.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Launchable.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Launchable.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Launchable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new launchable entry.
         * @param entry
         */
        add_entry(entry: string): void;
        /**
         * Get an array of launchable entries.
         * @returns An string list of launch entries.
         */
        get_entries(): string[];
        /**
         * The launch system for the entries this {@link AppStream.Launchable}
         * object stores.
         * @returns an enum of type {@link AppStream.LaunchableKind}
         */
        get_kind(): LaunchableKind;
        /**
         * Set the launch system for the entries this {@link AppStream.Launchable}
         * object stores.
         * @param kind the new {@link AppStream.LaunchableKind}
         */
        set_kind(kind: LaunchableKind | null): void;
    }

    namespace Metadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Metadata extends GObject.Object {
        static $gtype: GObject.GType<Metadata>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Metadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Metadata;

        // Signals

        /** @signal */
        connect<K extends keyof Metadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Metadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Metadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Metadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Guesses the AppStream metadata style (metainfo or catalog) based on
         * the filename.
         * @param filename a file name
         */
        static file_guess_style(filename: string): FormatStyle;

        // Methods

        /**
         * Add an {@link AppStream.Component} to the list of components.
         * This can be used to add multiple components in order to
         * produce a distro-XML AppStream metadata file.
         * @param cpt
         */
        add_component(cpt: Component): void;
        /**
         * Remove all previously parsed or manually added components.
         */
        clear_components(): void;
        /**
         * Remove all previously parsed releases entries.
         */
        clear_releases(): void;
        /**
         * Convert an {@link AppStream.Component} to metainfo data.
         * This will always be XML, YAML is no valid format for metainfo files.
         *
         * The amount of localization included in the metadata depends on how the {@link AppStream.Component}
         * was initially loaded and whether it contains data for all locale.
         *
         * The first {@link AppStream.Component} added to the internal list will be transformed.
         * In case no component is present, `null` is returned.
         * @param format The format to use (XML or YAML)
         * @returns A string containing the XML metadata. Free with `g_free()`
         */
        component_to_metainfo(format: FormatKind | null): string;
        /**
         * Serialize all {@link AppStream.Component} instances into AppStream
         * catalog metadata.
         * `null` is returned if there is nothing to serialize.
         * @param format The format to serialize the data to (XML or YAML).
         * @returns A string containing the YAML or XML data. Free with `g_free()`
         */
        components_to_catalog(format: FormatKind | null): string;
        /**
         * @returns The architecture of AppStream distro metadata
         */
        get_architecture(): string;
        /**
         * Gets the {@link AppStream.Component} which has been parsed from the XML.
         * If the AppStream XML contained multiple components, return the last
         * component that has been parsed.
         * @returns An {@link AppStream.Component} or `null`
         */
        get_component(): Component | null;
        /**
         * @returns an {@link AppStream.ComponentBox} of all parsed components
         */
        get_components(): ComponentBox;
        /**
         * Get the metadata parsing mode.
         */
        get_format_style(): FormatStyle;
        /**
         * @returns The AppStream metadata format version.
         */
        get_format_version(): FormatVersion;
        /**
         * Gets the current active locale for parsing metadata,
         * or "ALL" if all locales are read.
         * @returns Locale used for metadata parsing.
         */
        get_locale(): string;
        /**
         * @returns The media URL prefix.
         */
        get_media_baseurl(): string;
        /**
         * @returns The origin of AppStream distro metadata
         */
        get_origin(): string;
        /**
         * Get the metadata parse flags.
         */
        get_parse_flags(): ParseFlags;
        /**
         * Gets the recently parsed {@link AppStream.ReleaseList} entry.
         * @returns An {@link AppStream.ReleaseList} or `null`
         */
        get_release_list(): ReleaseList | null;
        /**
         * @returns A {@link GLib.PtrArray} of all parsed release metadata.
         */
        get_release_lists(): ReleaseList[];
        /**
         * @returns Whether existing components should be updates with the parsed data,          instead of creating new ones.
         */
        get_update_existing(): boolean;
        /**
         * @returns Whether we will write a header/root node in catalog metadata.
         */
        get_write_header(): boolean;
        /**
         * Parses any AppStream metadata into one or more {@link AppStream.Component} instances.
         * @param bytes Metadata describing one or more software components.
         * @param format The format of the data (XML or YAML).
         * @returns `true` on success.
         */
        parse_bytes(bytes: GLib.Bytes | Uint8Array, format: FormatKind | null): boolean;
        /**
         * Parses any AppStream metadata into one or more {@link AppStream.Component} instances.
         * @param data Metadata describing one or more software components as string.
         * @param data_len Length of `data`, or -1 if length is unknown and `data` is NULL-terminated.
         * @param format The format of the data (XML or YAML).
         * @returns `true` on success.
         */
        parse_data(data: string, data_len: number, format: FormatKind | null): boolean;
        /**
         * Parses XDG Desktop Entry metadata and adds it to the list of parsed entities.
         *
         * Please note that not every desktop-entry file will result in a valid component
         * being generated, even if parsing succeeds without error (The desktiop-entry file
         * may be valid but not generate a component on purpose).
         * @param cid The component-id the new {@link AppStream.Component} should have.
         * @param data Metadata describing one or more software components.
         * @param data_len The data length, or -1 if unknown and null-terminated.
         * @returns `true` if the file was parsed without error.
         */
        parse_desktop_data(cid: string, data: string, data_len: number): boolean;
        /**
         * Parses an AppStream upstream metadata file.
         *
         * If `file` does not exist, {@link Gio.IOErrorEnum.NOT_FOUND} will be returned. Other
         * `GIOErrors` and `AsMetadataErrors` may be returned as appropriate.
         * @param file {@link Gio.File} for the upstream metadata
         * @param format The format the data is in, or {@link AppStream.FormatKind.UNKNOWN} if not known.
         * @returns `true` if the file was parsed without error.
         */
        parse_file(file: Gio.File, format: FormatKind | null): boolean;
        /**
         * Parses any AppStream release metadata into {@link AppStream.Release} objects.
         * You can retrieve the last parsed {@link AppStream.ReleaseList} using %as_metadata_get_release_list.
         * @param bytes Metadata describing release notes.
         * @returns `true` on success.
         */
        parse_releases_bytes(bytes: GLib.Bytes | Uint8Array): boolean;
        /**
         * Parses any AppStream release metadata into {@link AppStream.Release} objects
         * using the provided file.
         * You can retrieve the last parsed {@link AppStream.ReleaseList} using %as_metadata_get_release_list.
         * @param file {@link Gio.File} for the release metadata
         * @returns `true` on success.
         */
        parse_releases_file(file: Gio.File): boolean;
        /**
         * Convert a releases of an {@link AppStream.ReleaseList} entity into a release metadata XML representation.
         * @param releases the {@link AppStream.ReleaseList} to convert.
         * @returns The XML representation or `null` on error.
         */
        releases_to_data(releases: ReleaseList): string;
        /**
         * Serialize all {@link AppStream.Component} instances to XML or YAML metadata and save
         * the data to a file.
         * An existing file at the same location will be overridden.
         * @param fname The filename for the new metadata file.
         * @param format
         * @returns `true` if the file was written without error.
         */
        save_catalog(fname: string, format: FormatKind | null): boolean;
        /**
         * Serialize {@link AppStream.Component} instance to XML and save it to file.
         * An existing file at the same location will be overridden.
         * @param fname The filename for the new metadata file.
         * @param format The format to save this file in. Only XML is supported at time.
         * @returns `true` if the file was written without error.
         */
        save_metainfo(fname: string, format: FormatKind | null): boolean;
        /**
         * Set the architecture the components in this metadata belong to.
         * @param arch an architecture string.
         */
        set_architecture(arch: string): void;
        /**
         * Sets the current metadata parsing mode.
         * @param mode the {@link AppStream.FormatStyle}.
         */
        set_format_style(mode: FormatStyle | null): void;
        /**
         * Set the current AppStream format version that we should generate data for
         * or be able to read.
         * @param version the AppStream metadata format version as {@link AppStream.FormatVersion}.
         */
        set_format_version(version: FormatVersion | null): void;
        /**
         * Sets the locale which should be read when processing metadata.
         * All other locales are ignored, which increases parsing speed and
         * reduces memory usage.
         * If you set the locale to "ALL", all locales will be read.
         * @param locale the BCP47 locale.
         */
        set_locale(locale: string): void;
        /**
         * Set the base URL for all media links referenced in the metadata,
         * or `null` if every component has absolute URLs.
         * @param url the base URL.
         */
        set_media_baseurl(url: string): void;
        /**
         * Set the origin of AppStream distro metadata
         * @param origin the origin of AppStream distro metadata.
         */
        set_origin(origin: string): void;
        /**
         * Sets the current metadata parse flags.
         * @param flags the {@link AppStream.ParseFlags}.
         */
        set_parse_flags(flags: ParseFlags | null): void;
        /**
         * If set to `true`, the parser will not create new components but
         * instead update existing components in the pool with new metadata.
         *
         * NOTE: Right now, this feature is only implemented for metainfo XML parsing!
         * @param update A boolean value.
         */
        set_update_existing(update: boolean): void;
        /**
         * If set to `true`, tehe metadata writer will omit writing a DEP-11
         * header document when in YAML mode, and will not write a root components node
         * when writing XML data.
         * Please keep in mind that this will create an invalid DEP-11 YAML AppStream
         * catalog metadata file, and an invalid XML file.
         * This parameter should only be changed e.g. by the appstream-generator tool.
         *
         * NOTE: Right now, this feature is only implemented for YAML!
         * @param wheader A boolean value.
         */
        set_write_header(wheader: boolean): void;
    }

    namespace Pool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted when components have been added
             * or removed from the metadata pool.
             * @signal
             * @since 0.15.0
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
    class Pool extends GObject.Object {
        static $gtype: GObject.GType<Pool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Pool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Pool;

        // Signals

        /** @signal */
        connect<K extends keyof Pool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Pool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Pool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Register a set of components with the pool temporarily.
         * Data from components added like this will not be cached.
         * @param cbox Components to add to the pool.
         * @returns `true` if the new components were successfully added to the pool.
         */
        add_components(cbox: ComponentBox): boolean;
        /**
         * Add an additional non-standard location to the metadata pool where metadata will be read from.
         * If `directory` contains a "xml", "xmls", "yaml" or "icons" subdirectory (or all of them),
         * those paths will be added to the search paths instead.
         * @param directory An existing filesystem location.
         * @param format_style The expected format style of the metadata, e.g. {@link AppStream.FormatStyle.CATALOG}
         */
        add_extra_data_location(directory: string, format_style: FormatStyle | null): void;
        /**
         * Convenience function to add one or multiple {@link AppStream.PoolFlags} to
         * the flag set of this data pool.
         * @param flags The {@link AppStream.PoolFlags} to add.
         */
        add_flags(flags: PoolFlags | null): void;
        /**
         * Splits up a string into an array of tokens that are suitable for searching.
         * This includes stripping whitespaces, casefolding the terms and removing greylist words.
         *
         * This function is usually called automatically when needed, you will only need to
         * run it explicitly when you need to check which search tokens the pool will actually
         * use internally for a given phrase.
         * @param search the (user-provided) search phrase.
         * @returns (array zero-terminated=1): Valid tokens to search for, or `null` for error
         */
        build_search_tokens(search: string): string[];
        /**
         * Remove all metadata from the pool, data will be reloaded
         * once %as_pool_load is called again.
         */
        clear(): void;
        /**
         * Get a list of found components.
         * @returns an {@link AppStream.ComponentBox}.
         */
        get_components(): ComponentBox;
        /**
         * Find components that are provided by a bundle with a specific ID by its prefix.
         * For example, given a AS_BUNDLE_KIND_FLATPAK and a bundle_id "org.kde.dolphin/",
         * it will list all the components that bundle dolphin. If the bundle_id is
         * "org.kde.dolphin/x86_64" it will give those with also the architecture.
         * @param kind The kind of the bundle we are looking for
         * @param bundle_id The bundle ID to match, as specified in {@link AppStream.Bundle}
         * @param match_prefix `true` to match the ID by prefix, `false` to perform an absolute match.
         * @returns an {@link AppStream.ComponentBox}.
         */
        get_components_by_bundle_id(kind: BundleKind | null, bundle_id: string, match_prefix: boolean): ComponentBox;
        /**
         * Return a list of components which are in all of the categories.
         * @param categories An array of XDG categories to include.
         * @returns an {@link AppStream.ComponentBox} of found components.
         */
        get_components_by_categories(categories: string[]): ComponentBox;
        /**
         * Find components extending the component with the given ID. They can then be registered to the
         * {@link AppStream.Component} they extend via %as_component_add_addon.
         * If the {@link AppStream.PoolFlags.RESOLVE_ADDONS} pool flag is set, addons are automatically resolved and
         * this explicit function is not needed, but overall query time will be increased (so only use
         * this flag if you will be resolving addon information later anyway).
         * @param extended_id The ID of the component to search extensions for.
         * @returns an {@link AppStream.ComponentBox}.
         */
        get_components_by_extends(extended_id: string): ComponentBox;
        /**
         * Get a specific component by its ID.
         * This function may contain multiple results if we have
         * data describing this component from multiple scopes/origin types.
         * @param cid The AppStream-ID to look for.
         * @returns an {@link AppStream.ComponentBox}.
         */
        get_components_by_id(cid: string): ComponentBox;
        /**
         * Return a list of all components in the pool which are of a certain kind.
         * @param kind An {@link AppStream.ComponentKind}.
         * @returns an {@link AppStream.ComponentBox} of found components.
         */
        get_components_by_kind(kind: ComponentKind | null): ComponentBox;
        /**
         * Find components in the AppStream data pool which provide a specific launchable.
         * See {@link AppStream.Launchable} for details on launchables, or refer to the AppStream specification.
         * @param kind An {@link AppStream.LaunchableKind}
         * @param id The ID of the launchable.
         * @returns an {@link AppStream.ComponentBox} of found components.
         */
        get_components_by_launchable(kind: LaunchableKind | null, id: string): ComponentBox;
        /**
         * Find components in the AppStream data pool which provide a certain item.
         * @param kind An `AsProvidesKind`
         * @param item The value of the provided item.
         * @returns an {@link AppStream.ComponentBox} of found components.
         */
        get_components_by_provided_item(kind: ProvidedKind | null, item: string): ComponentBox;
        /**
         * Get the {@link AppStream.PoolFlags} for this data pool.
         */
        get_flags(): PoolFlags;
        /**
         * Gets the currently used locale.
         * @returns Locale used for metadata parsing.
         */
        get_locale(): string;
        /**
         * Check if this pool contains any data.
         * @returns `true` if the pool is empty.
         */
        is_empty(): boolean;
        /**
         * Builds an index of all found components in the watched locations.
         * The function will try to get as much data into the pool as possible, so even if
         * the update completes with `false`, it might still have added components to the pool.
         *
         * The function will load from all possible data sources, preferring caches if they
         * are up to date.
         * @param cancellable a {@link Gio.Cancellable}.
         * @returns `true` if update completed without error.
         */
        load(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously loads data from all registered locations.
         * Equivalent to `as_pool_load()` (but asynchronous)
         * @param cancellable a {@link Gio.Cancellable}.
         */
        load_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously loads data from all registered locations.
         * Equivalent to `as_pool_load()` (but asynchronous)
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback}
         */
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously loads data from all registered locations.
         * Equivalent to `as_pool_load()` (but asynchronous)
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback A {@link Gio.AsyncReadyCallback}
         */
        load_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Retrieve the result of `as_pool_load_async()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Convenience function to remove one or multiple {@link AppStream.PoolFlags} from
         * the flag set of this data pool.
         * @param flags The {@link AppStream.PoolFlags} to remove.
         */
        remove_flags(flags: PoolFlags | null): void;
        /**
         * Remove all explicitly added metadata locations.
         */
        reset_extra_data_locations(): void;
        /**
         * Search for a list of components matching the search term.
         * The list will be ordered by match score.
         * @param search A search string
         * @returns an {@link AppStream.ComponentBox} of the found components.
         */
        search(search: string): ComponentBox;
        /**
         * Set the {@link AppStream.PoolFlags} for this data pool.
         * @param flags The new {@link AppStream.PoolFlags}.
         */
        set_flags(flags: PoolFlags | null): void;
        /**
         * This is a convenience function that enables or disables loading of metadata
         * from well-known standard locations by configuring the {@link AppStream.PoolFlags} of this
         * {@link AppStream.Pool} accordingly.
         * Data affected by this includes the OS data catalog, metainfo, desktop-entry
         * files and Flatpak data.
         * If you need more fine-grained control, set the {@link AppStream.PoolFlags} explicitly.
         * @param enabled Whether loading of data from standard locations should be enabled.
         */
        set_load_std_data_locations(enabled: boolean): void;
        /**
         * Sets the current locale which should be used when parsing metadata.
         * @param locale the BCP47 or POSIX locale to use for this pool.
         */
        set_locale(locale: string): void;
    }

    namespace Provided {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Provided extends GObject.Object {
        static $gtype: GObject.GType<Provided>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Provided.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Provided.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Provided;

        // Signals

        /** @signal */
        connect<K extends keyof Provided.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Provided.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Provided.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Provided.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Provided.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Provided.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new provided item.
         * @param item
         */
        add_item(item: string): void;
        /**
         * Get an array of provided data.
         * @returns An string list of provided items.
         */
        get_items(): string[];
        /**
         * The kind of items this {@link AppStream.Provided} object stores.
         * @returns an enum of type {@link AppStream.ProvidedKind}
         */
        get_kind(): ProvidedKind;
        /**
         * Check if the current {@link AppStream.Provided} contains an item
         * of the given name.
         * @param item the name of a provided item, e.g. "audio/x-vorbis" (in case the provided kind is a mimetype)
         * @returns `true` if found.
         */
        has_item(item: string): boolean;
        /**
         * Set the kind of items this {@link AppStream.Provided} object stores.
         * @param kind the new {@link AppStream.ProvidedKind}
         */
        set_kind(kind: ProvidedKind | null): void;
    }

    namespace Reference {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Reference extends GObject.Object {
        static $gtype: GObject.GType<Reference>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Reference.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Reference.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Reference;

        // Signals

        /** @signal */
        connect<K extends keyof Reference.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Reference.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Reference.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Reference.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Reference.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Reference.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the reference kind.
         * @returns the {@link AppStream.ReferenceKind}
         */
        get_kind(): ReferenceKind;
        /**
         * Gets the name of the registry this reference is for,
         * if the reference is of type {@link AppStream.ReferenceKind.REGISTRY}.
         * Otherwise return `null`.
         * @returns the registry name.
         */
        get_registry_name(): string | null;
        /**
         * Gets the value of this reference, e.g. a DOI if the
         * reference kind is {@link AppStream.ReferenceKind.DOI} or an URL
         * for {@link AppStream.ReferenceKind.CITATION_CFF}.
         * @returns the value of this reference.
         */
        get_value(): string;
        /**
         * Sets the reference kind.
         * @param kind the {@link AppStream.ReferenceKind}, e.g. {@link AppStream.ReferenceKind.DOI}.
         */
        set_kind(kind: ReferenceKind | null): void;
        /**
         * Sets a name of a registry if this reference is of
         * type {@link AppStream.ReferenceKind.REGISTRY}.
         * @param name name of an external registry.
         */
        set_registry_name(name: string): void;
        /**
         * Sets a value for this reference.
         * @param value a value for this reference, e.g. "10.1000/182"
         */
        set_value(value: string): void;
    }

    namespace Relation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Relation extends GObject.Object {
        static $gtype: GObject.GType<Relation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Relation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Relation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Relation;

        // Signals

        /** @signal */
        connect<K extends keyof Relation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Relation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Relation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Relation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Calculate a compatibility sore between 0 and 100 based on the given set of
         * AsRelationCheckResults.
         *
         * A compatibility of 100 means all requirements are satisfied and the component will
         * run perfectly on the confoguration it was tested agains, while 0 means it will not run at all.
         * @param rc_results an array of {@link AppStream.RelationCheckResult}
         */
        static check_results_get_compatibility_score(rc_results: RelationCheckResult[]): number;

        // Methods

        /**
         * The version comparison type.
         * @returns an enum of type {@link AppStream.RelationCompare}
         */
        get_compare(): RelationCompare;
        /**
         * Gets the display side kind, in case this item is of
         * kind {@link AppStream.RelationItemKind.DISPLAY_LENGTH}
         * @returns a {@link AppStream.DisplaySideKind} or {@link AppStream.DisplaySideKind.UNKNOWN}
         */
        get_display_side_kind(): DisplaySideKind;
        /**
         * The kind of the item of this {@link AppStream.Relation}.
         * @returns an enum of type {@link AppStream.RelationItemKind}
         */
        get_item_kind(): RelationItemKind;
        /**
         * The type (and thereby strength) of this {@link AppStream.Relation}.
         * @returns an enum of type {@link AppStream.RelationKind}
         */
        get_kind(): RelationKind;
        /**
         * Get the value of this {@link AppStream.Relation} item as {@link AppStream.ControlKind} if the
         * type of this relation is {@link AppStream.RelationItemKind.CONTROL}.
         * Otherwise return {@link AppStream.ControlKind.UNKNOWN}
         * @returns a {@link AppStream.ControlKind} or {@link AppStream.ControlKind.UNKNOWN} in case the item is not of the right kind.
         */
        get_value_control_kind(): ControlKind;
        /**
         * @returns The value of this {@link AppStream.Relation} item as an integer. Returns 0 if the value was no integer.
         */
        get_value_int(): number;
        /**
         * If this {@link AppStream.Relation} is of kind {@link AppStream.RelationItemKind.INTERNET}, return the
         * minimum bandwidth requirement of the component, if set.
         *
         * If the relation is of a different kind, or the requirement isn’t set, this
         * returns `0`.
         * @returns The minimum bandwidth requirement, in Mbit/s.
         */
        get_value_internet_bandwidth(): number;
        /**
         * Get the value of this {@link AppStream.Relation} item as {@link AppStream.InternetKind} if the
         * type of this relation is {@link AppStream.RelationItemKind.INTERNET}.
         * Otherwise return {@link AppStream.InternetKind.UNKNOWN}
         * @returns a {@link AppStream.InternetKind} or {@link AppStream.InternetKind.UNKNOWN} in case the item is not of the right kind.
         */
        get_value_internet_kind(): InternetKind;
        /**
         * In case this {@link AppStream.Relation} is of kind {@link AppStream.RelationItemKind.DISPLAY_LENGTH},
         * return the set logical pixel amount.
         * @returns The logical pixel amount for this display length, value <= 0 on error.
         */
        get_value_px(): number;
        /**
         * @returns The value of the item this {@link AppStream.Relation} is about, as a string.
         */
        get_value_str(): string;
        /**
         * @returns The version of the item this {@link AppStream.Relation} is about.
         */
        get_version(): string;
        /**
         * Test if this relation is satisfied on the current system or with the
         * provided {@link AppStream.Pool}. If no {@link AppStream.SystemInfo} is found, a temporary one will be
         * created. If no {@link AppStream.Pool} is provided, any component relationships can not
         * be validated and an error will be thrown.
         * @param system_info an {@link AppStream.SystemInfo} to use for system information.
         * @param pool an {@link AppStream.Pool} to find component dependencies in.
         * @returns an {@link AppStream.RelationCheckResult} with details about the result, or `null` on error.
         */
        is_satisfied(system_info?: SystemInfo | null, pool?: Pool | null): RelationCheckResult | null;
        /**
         * Set the version comparison type of this {@link AppStream.Relation}.
         * @param compare the new {@link AppStream.RelationCompare}
         */
        set_compare(compare: RelationCompare | null): void;
        /**
         * Sets the display side kind, in case this item is of
         * kind {@link AppStream.RelationItemKind.DISPLAY_LENGTH}
         * @param kind the new {@link AppStream.DisplaySideKind}.
         */
        set_display_side_kind(kind: DisplaySideKind | null): void;
        /**
         * Set the kind of the item this {@link AppStream.Relation} is about.
         * @param kind the new {@link AppStream.RelationItemKind}
         */
        set_item_kind(kind: RelationItemKind | null): void;
        /**
         * Set the kind of this {@link AppStream.Relation}.
         * @param kind the new {@link AppStream.RelationKind}
         */
        set_kind(kind: RelationKind | null): void;
        /**
         * Set relation item value from an {@link AppStream.ControlKind}.
         * @param kind an {@link AppStream.ControlKind}
         */
        set_value_control_kind(kind: ControlKind | null): void;
        /**
         * Sets the item value as an integer, if the given item type
         * of this {@link AppStream.Relation} permits integer values.
         * @param value the new value.
         */
        set_value_int(value: number): void;
        /**
         * @param bandwidth_mbitps
         */
        set_value_internet_bandwidth(bandwidth_mbitps: number): void;
        /**
         * Set relation item value from an {@link AppStream.InternetKind}.
         * @param kind an {@link AppStream.InternetKind}
         */
        set_value_internet_kind(kind: InternetKind | null): void;
        /**
         * Sets the item value as logical pixel count. This requires the relation
         * to be of item kind {@link AppStream.RelationItemKind.DISPLAY_LENGTH}.
         * @param logical_px logical pixel count.
         */
        set_value_px(logical_px: number): void;
        /**
         * Sets the item value as a string, if the given item type
         * of this {@link AppStream.Relation} permits string values.
         * @param value the new value.
         */
        set_value_str(value: string): void;
        /**
         * Sets the item version.
         * @param version the new version.
         */
        set_version(version: string): void;
        /**
         * Tests whether the version number of this {@link AppStream.Relation} is fulfilled by
         * `version`. Whether the given version is sufficient to fulfill the version
         * requirement of this {@link AppStream.Relation} is determined by its comparison resraint.
         * @param version a version number, e.g. `1.2.0`
         * @returns `true` if the version from the parameter is sufficient.
         */
        version_compare(version: string): boolean;
    }

    namespace RelationCheckResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class RelationCheckResult extends GObject.Object {
        static $gtype: GObject.GType<RelationCheckResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RelationCheckResult.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RelationCheckResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RelationCheckResult;

        // Signals

        /** @signal */
        connect<K extends keyof RelationCheckResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RelationCheckResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RelationCheckResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RelationCheckResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RelationCheckResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RelationCheckResult.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieve the error code, in case this result represents an error.
         * @returns an {@link AppStream.RelationError}
         */
        get_error_code(): RelationError;
        /**
         * Get a human-readable message about the state of this relation.
         * May be `null` in case the relation is satisfied and there is no further information about it.
         * @returns a human-readable message about this relation's state.
         */
        get_message(): string | null;
        /**
         * Get the relation that this check result was generated for.
         * @returns an {@link AppStream.Relation} or `null`
         */
        get_relation(): Relation | null;
        /**
         * Returns the status of this relation check result.
         * If the status is {@link AppStream.RelationStatus.ERROR}, an error message will
         * have been set as message.
         * @returns an {@link AppStream.RelationStatus}
         */
        get_status(): RelationStatus;
        /**
         * Set the error code in case this result represents an error.
         * @param ecode the {@link AppStream.RelationError}
         */
        set_error_code(ecode: RelationError | null): void;
        /**
         * Set an {@link AppStream.Relation} to associate with this check result.
         * @param relation the {@link AppStream.Relation}
         */
        set_relation(relation: Relation): void;
        /**
         * Set the outcome of this relation check result.
         * @param status the new {@link AppStream.RelationStatus}
         */
        set_status(status: RelationStatus | null): void;
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

        static ['new'](): Release;

        // Signals

        /** @signal */
        connect<K extends keyof Release.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Release.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Release.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Release.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add an artifact (binary / source download) for this release.
         * @param artifact The {@link AppStream.Artifact}.
         */
        add_artifact(artifact: Artifact): void;
        /**
         * Add information about a (resolved) issue to this release.
         * @param issue The {@link AppStream.Issue}.
         */
        add_issue(issue: Issue): void;
        /**
         * Add a tag to this release.
         * @param ns The namespace the tag belongs to
         * @param tag The tag name
         * @returns `true` if the tag was added.
         */
        add_tag(ns: string, tag: string): boolean;
        /**
         * Remove all tags associated with this release.
         */
        clear_tags(): void;
        /**
         * Get a list of all downloadable artifacts that are associated with
         * this release.
         * @returns an array of {@link AppStream.Artifact} objects.
         */
        get_artifacts(): Artifact[];
        /**
         * @returns the {@link AppStream.Context} associated with this release. This function may return `null` if no context is set.
         */
        get_context(): Context | null;
        /**
         * Gets the release date.
         * @returns The date in ISO8601 format.
         */
        get_date(): string | null;
        /**
         * Gets the end-of-life date for this release.
         * @returns The EOL date in ISO8601 format.
         */
        get_date_eol(): string | null;
        /**
         * Gets the release description markup for a given locale.
         * @returns markup, or `null` for not set or invalid
         */
        get_description(): string | null;
        /**
         * Get a list of all issues resolved by this release.
         * @returns an array of {@link AppStream.Issue} objects.
         */
        get_issues(): Issue[];
        /**
         * Gets the type of the release.
         * (development or stable release)
         */
        get_kind(): ReleaseKind;
        /**
         * Gets the release timestamp.
         * @returns timestamp, or 0 for unset
         */
        get_timestamp(): number;
        /**
         * Gets the UNIX timestamp for the date when this
         * release is out of support (end-of-life).
         * @returns UNIX timestamp, or 0 for unset or invalid.
         */
        get_timestamp_eol(): number;
        /**
         * Gets the urgency of the release
         * (showing how important it is to update to a more recent release)
         * @returns {@link AppStream.UrgencyKind}, or {@link AppStream.UrgencyKind.UNKNOWN} for not set
         */
        get_urgency(): UrgencyKind;
        /**
         * Gets an URL.
         * @param url_kind the URL kind, e.g. {@link AppStream.ReleaseUrlKind.DETAILS}.
         * @returns string, or `null` if unset
         */
        get_url(url_kind: ReleaseUrlKind | null): string | null;
        /**
         * Gets the release version.
         * @returns string, or `null` for not set or invalid
         */
        get_version(): string | null;
        /**
         * Test if the release is tagged with the selected tag.
         * @param ns The namespace the tag belongs to
         * @param tag The tag name
         * @returns `true` if tag exists.
         */
        has_tag(ns: string, tag: string): boolean;
        /**
         * Remove a tag from this release
         * @param ns The namespace the tag belongs to
         * @param tag The tag name
         * @returns `true` if the tag was removed.
         */
        remove_tag(ns: string, tag: string): boolean;
        /**
         * Sets the document context this release is associated
         * with.
         * @param context the {@link AppStream.Context}.
         */
        set_context(context: Context): void;
        /**
         * Sets the release date.
         * @param date the date in ISO8601 format.
         */
        set_date(date: string): void;
        /**
         * Sets the end-of-life date for this release.
         * @param date the EOL date in ISO8601 format.
         */
        set_date_eol(date: string): void;
        /**
         * Sets the description release markup.
         * @param description the description markup.
         * @param locale the BCP47 locale, or `null`. e.g. "en-GB".
         */
        set_description(description: string, locale?: string | null): void;
        /**
         * Sets the release kind to distinguish between end-user ready
         * stable releases and development prereleases..
         * @param kind the {@link AppStream.ReleaseKind}
         */
        set_kind(kind: ReleaseKind | null): void;
        /**
         * Sets the release timestamp.
         * @param timestamp the timestamp value.
         */
        set_timestamp(timestamp: number): void;
        /**
         * Sets the UNIX timestamp for the date when this
         * release is out of support (end-of-life).
         * @param timestamp the timestamp value.
         */
        set_timestamp_eol(timestamp: number): void;
        /**
         * Sets the release urgency.
         * @param urgency the urgency of this release/update (as {@link AppStream.UrgencyKind})
         */
        set_urgency(urgency: UrgencyKind | null): void;
        /**
         * Sets an URL for this release.
         * @param url_kind the URL kind, e.g. {@link AppStream.ReleaseUrlKind.DETAILS}
         * @param url the full URL.
         */
        set_url(url_kind: ReleaseUrlKind | null, url: string): void;
        /**
         * Sets the release version.
         * @param version the version string.
         */
        set_version(version: string): void;
        /**
         * Compare the version numbers of two releases.
         * @param rel2 an {@link AppStream.Release}
         * @returns 1 if `rel1` version is higher than `rel2`, 0 if versions are equal, -1 if `rel2` version is higher than `rel1`.
         */
        vercmp(rel2: Release): number;
    }

    namespace ReleaseList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ReleaseList extends GObject.Object {
        static $gtype: GObject.GType<ReleaseList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ReleaseList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ReleaseList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ReleaseList;

        // Signals

        /** @signal */
        connect<K extends keyof ReleaseList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReleaseList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ReleaseList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReleaseList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ReleaseList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ReleaseList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Append a release entry to this {@link AppStream.ReleaseList} container.
         * @param release
         */
        add(release: Release): void;
        /**
         * Remove all release entries from this releases object.
         */
        clear(): void;
        /**
         * Get the {@link AppStream.Context} associated with these releases.
         * This function may return `null` if no context is set
         * @returns the associated {@link AppStream.Context} or `null`
         */
        get_context(): Context | null;
        /**
         * Get the release entries as {@link GLib.PtrArray}.
         * @returns an array of {@link AppStream.Release} instances.
         */
        get_entries(): Release[];
        /**
         * Returns the {@link AppStream.ReleaseListKind} of the release metadata
         * associated with this component.
         * @returns The kind.
         */
        get_kind(): ReleaseListKind;
        /**
         * Get the amount of components in this box.
         * @returns Amount of components.
         */
        get_size(): number;
        /**
         * Get the remote URL to obtain release information from.
         * @returns The URL of external release data, or `null`
         */
        get_url(): string | null;
        /**
         * Retrieve a release entry at the respective index from the
         * release entry list.
         * @param index The release entry index.
         * @returns An {@link AppStream.Release} or `null`
         */
        index_safe(index: number): Release;
        /**
         * Check if there are any components present.
         * @returns `true` if this component box is empty.
         */
        is_empty(): boolean;
        /**
         * Load release information from XML bytes.
         * @param context the attached {@link AppStream.Context} or `null` to use the current context
         * @param bytes the release XML data as {@link GLib.Bytes}
         * @returns `true` on success.
         */
        load_from_bytes(context: Context | null, bytes: GLib.Bytes | Uint8Array): boolean;
        /**
         * Sets the document context these releases are associated with.
         * @param context the {@link AppStream.Context}.
         */
        set_context(context: Context): void;
        /**
         * Sets the {@link AppStream.ReleaseListKind} of the release metadata
         * associated with this component.
         * @param kind the {@link AppStream.ComponentKind}.
         */
        set_kind(kind: ReleaseListKind | null): void;
        /**
         * Set the amount of release entries stored.
         * @param size
         */
        set_size(size: number): void;
        /**
         * Set a remote URL pointing to an AppStream release info file.
         * @param url the web URL where release data is found.
         */
        set_url(url: string): void;
        /**
         * Sort releases by their release version,
         * starting with the most recent release.
         */
        sort(): void;
    }

    namespace Review {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::rating': (pspec: GObject.ParamSpec) => void;
            'notify::reviewer-id': (pspec: GObject.ParamSpec) => void;
            'notify::reviewer-name': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            date: Review;
            description: string;
            flags: number;
            id: string;
            locale: string;
            priority: number;
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
         * @since 0.14.0
         */
        get date(): Review;
        set date(val: Review);
        /**
         * @since 0.14.0
         */
        get description(): string;
        set description(val: string);
        /**
         * @since 0.14.0
         */
        get flags(): number;
        set flags(val: number);
        /**
         * @since 0.14.0
         */
        get id(): string;
        set id(val: string);
        /**
         * @since 0.14.0
         */
        get locale(): string;
        set locale(val: string);
        /**
         * The priority for the review, where positive numbers indicate
         * a better review for the specific user.
         * @since 0.15.6
         */
        get priority(): number;
        set priority(val: number);
        /**
         * @since 0.14.0
         */
        get rating(): number;
        set rating(val: number);
        /**
         * @since 0.14.0
         */
        get reviewer_id(): string;
        set reviewer_id(val: string);
        /**
         * @since 0.14.0
         */
        get reviewerId(): string;
        set reviewerId(val: string);
        /**
         * @since 0.14.0
         */
        get reviewer_name(): string;
        set reviewer_name(val: string);
        /**
         * @since 0.14.0
         */
        get reviewerName(): string;
        set reviewerName(val: string);
        /**
         * @since 0.14.0
         */
        get summary(): string;
        set summary(val: string);
        /**
         * @since 0.14.0
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

        static ['new'](): Review;

        // Signals

        /** @signal */
        connect<K extends keyof Review.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Review.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Review.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Review.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Review.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Review.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds flags to an existing review without replacing the other flags.
         * @param flags a {@link AppStream.ReviewFlags}, e.g. {@link AppStream.ReviewFlags.SELF}
         */
        add_flags(flags: ReviewFlags | null): void;
        /**
         * Adds metadata to the review object.
         * It is left for the the plugin to use this method as required, but a
         * typical use would be to store some secure authentication token.
         * @param key a string
         * @param value a string
         */
        add_metadata(key: string, value: string): void;
        /**
         * Checks if two reviews are the same.
         * @param review2 a {@link AppStream.Review} instance.
         * @returns `true` for success
         */
        equal(review2: Review): boolean;
        /**
         * Gets the date the review was originally submitted.
         * @returns the {@link GLib.DateTime}, or `null` for unset
         */
        get_date(): GLib.DateTime;
        /**
         * Gets the multi-line review text that forms the body of the review.
         * @returns the string, or `null`
         */
        get_description(): string;
        /**
         * Gets any flags set on the review, for example if the user has already
         * voted on the review or if the user wrote the review themselves.
         * @returns a {@link AppStream.ReviewFlags}, e.g. {@link AppStream.ReviewFlags.SELF}
         */
        get_flags(): ReviewFlags;
        /**
         * Gets the review id.
         * @returns the review identifier, e.g. "deadbeef"
         */
        get_id(): string;
        /**
         * Gets the locale for the review.
         * @returns the string, or `null`
         */
        get_locale(): string;
        /**
         * Gets some metadata from a review object.
         * It is left for the the plugin to use this method as required, but a
         * typical use would be to retrieve some secure authentication token.
         * @param key a string
         * @returns A string value, or `null` for not found
         */
        get_metadata_item(key: string): string;
        /**
         * This allows the UI to sort reviews into the correct order.
         * Higher numbers indicate a more important or relevant review.
         * @returns the review priority, or 0 for unset.
         */
        get_priority(): number;
        /**
         * Gets the star rating of the review, where 100 is 5 stars.
         * @returns integer as a percentage, or 0 for unset
         */
        get_rating(): number;
        /**
         * Gets the name of the reviewer.
         * @returns the reviewer ID, e.g. "deadbeef", or `null`
         */
        get_reviewer_id(): string;
        /**
         * Gets the name of the reviewer.
         * @returns the reviewer name, e.g. "David Smith", or `null`
         */
        get_reviewer_name(): string;
        /**
         * Gets the review summary.
         * @returns the one-line summary, e.g. "Awesome application"
         */
        get_summary(): string;
        /**
         * Gets the version string for the application being reviewed..
         * @returns the version string, e.g. "0.1.2", or `null` for unset
         */
        get_version(): string;
        /**
         * Sets the date the review was originally submitted.
         * @param date a {@link GLib.DateTime}, or `null`
         */
        set_date(date: GLib.DateTime): void;
        /**
         * Sets the multi-line review text that forms the body of the review.
         * @param description multi-line description
         */
        set_description(description: string): void;
        /**
         * Gets any flags set on the review, for example if the user has already
         * voted on the review or if the user wrote the review themselves.
         * @param flags a {@link AppStream.ReviewFlags}, e.g. {@link AppStream.ReviewFlags.SELF}
         */
        set_flags(flags: ReviewFlags | null): void;
        /**
         * Sets the review identifier that is unique to each review.
         * @param id review identifier, e.g. "deadbeef"
         */
        set_id(id: string): void;
        /**
         * Sets the locale for the review.
         * @param locale a BCP47 locale, e.g. "en-GB"
         */
        set_locale(locale: string): void;
        /**
         * Sets the priority for the review, where positive numbers indicate
         * a better review for the specific user.
         * @param priority a priority value
         */
        set_priority(priority: number): void;
        /**
         * Sets the star rating of the review, where 100 is 5 stars..
         * @param rating a integer as a percentage, or 0 for unset
         */
        set_rating(rating: number): void;
        /**
         * Sets the name of the reviewer, which can be left unset.
         * @param reviewer_id the reviewer ID, e.g. "deadbeef"
         */
        set_reviewer_id(reviewer_id: string): void;
        /**
         * Sets the name of the reviewer, which can be left unset.
         * @param reviewer_name the reviewer name, e.g. "David Smith"
         */
        set_reviewer_name(reviewer_name: string): void;
        /**
         * Sets the one-line summary that may be displayed in bold.
         * @param summary a one-line summary, e.g. "Awesome application"
         */
        set_summary(summary: string): void;
        /**
         * Sets the version string for the application being reviewed.
         * @param version a version string, e.g. "0.1.2"
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

        static ['new'](): Screenshot;

        // Signals

        /** @signal */
        connect<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Screenshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds an image to the screenshot.
         * @param image a {@link AppStream.Image} instance.
         */
        add_image(image: Image): void;
        /**
         * Adds a video to the screenshot.
         * @param video a {@link AppStream.Video} instance.
         */
        add_video(video: Video): void;
        /**
         * Remove all images associated with this screenshot.
         */
        clear_images(): void;
        /**
         * Gets the image caption
         * @returns the caption
         */
        get_caption(): string;
        /**
         * Returns the {@link AppStream.Context} associated with this screenshot.
         * This function may return `null` if no context is set.
         * @returns the {@link AppStream.Context} used by this screenshot.
         */
        get_context(): Context | null;
        /**
         * Get the GUI environment ID of this screenshot, if any
         * is associated with it. E.g. "plasma-mobile" or "gnome:dark".
         * @returns The GUI environment ID the screenshot was recorded in, or `null` if none set.
         */
        get_environment(): string | null;
        /**
         * Gets the AsImage closest to the target size. The {@link AppStream.Image} may not actually
         * be the requested size, and the application may have to pad / rescale the
         * image to make it fit.
         * Only images for the current active locale (or fallback, if images are not localized)
         * are considered.
         * @param width target width
         * @param height target height
         * @param scale the target scaling factor.
         * @returns an {@link AppStream.Image}, or `null`
         */
        get_image(width: number, height: number, scale: number): Image | null;
        /**
         * Gets the images for this screenshots. Only images valid for the current
         * language are returned. We return all sizes.
         * @returns an array
         */
        get_images(): Image[];
        /**
         * Returns an array of all images we have, regardless of their
         * size and language.
         * @returns an array
         */
        get_images_all(): Image[];
        /**
         * Gets the screenshot kind.
         * @returns a {@link AppStream.ScreenshotKind}
         */
        get_kind(): ScreenshotKind;
        /**
         * Gets the screenshot media kind.
         * @returns a {@link AppStream.ScreenshotMediaKind}
         */
        get_media_kind(): ScreenshotMediaKind;
        /**
         * Gets the videos for this screenshots. Only videos valid for the current
         * language selection are returned. We return all sizes.
         * @returns an array
         */
        get_videos(): Video[];
        /**
         * Returns an array of all screencast videos we have, regardless of their
         * size and locale.
         * @returns an array
         */
        get_videos_all(): Video[];
        /**
         * Performs a quick validation on this screenshot
         * @returns TRUE if the screenshot is a complete {@link AppStream.Screenshot}
         */
        is_valid(): boolean;
        /**
         * Sets a caption on the screenshot
         * @param caption the caption text.
         * @param locale
         */
        set_caption(caption: string, locale: string): void;
        /**
         * Sets the document context this screenshot is associated
         * with.
         * @param context the {@link AppStream.Context}.
         */
        set_context(context: Context): void;
        /**
         * Sets the GUI environment ID of this screenshot.
         * @param env_id the GUI environment ID, e.g. "plasma-mobile" or "gnome:dark"
         */
        set_environment(env_id?: string | null): void;
        /**
         * Sets the screenshot kind.
         * @param kind the {@link AppStream.ScreenshotKind}.
         */
        set_kind(kind: ScreenshotKind | null): void;
    }

    namespace Suggested {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Suggested extends GObject.Object {
        static $gtype: GObject.GType<Suggested>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Suggested.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Suggested.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Suggested;

        // Signals

        /** @signal */
        connect<K extends keyof Suggested.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Suggested.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Suggested.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Suggested.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Suggested.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Suggested.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a component id to this suggested object.
         * @param cid The component id to add
         */
        add_id(cid: string): void;
        /**
         * Get a list of components id that generated the suggestion
         * @returns an array of components id
         */
        get_ids(): string[];
        /**
         * Gets the suggested kind.
         * @returns the {@link AppStream.SuggestedKind}
         */
        get_kind(): SuggestedKind;
        /**
         * Check if the essential properties of this suggestion are
         * populated with useful data.
         * @returns `true` if we have useful data.
         */
        is_valid(): boolean;
        /**
         * Sets the suggested kind.
         * @param kind the {@link AppStream.SuggestedKind}, e.g. {@link AppStream.SuggestedKind.HEURISTIC}.
         */
        set_kind(kind: SuggestedKind | null): void;
    }

    namespace SystemInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SystemInfo extends GObject.Object {
        static $gtype: GObject.GType<SystemInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SystemInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SystemInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SystemInfo;

        static new_template_for_chassis(chassis: ChassisKind): SystemInfo;

        // Signals

        /** @signal */
        connect<K extends keyof SystemInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SystemInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SystemInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SystemInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SystemInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SystemInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return a human readable device name for the given modalias.
         * Will return the modalias again if no device name could be found,
         * and returns `null` on error.
         * If `allow_fallback` is set to `false`, this function will return `null` and error
         * {@link AppStream.SystemInfoError.NOT_FOUND} in case no suitable description could be found.
         * @param modalias the modalias value to resolve (may contain wildcards).
         * @param allow_fallback fall back to low-quality data if no better information is available
         * @returns a human-readable device name, or `null` on error.
         */
        get_device_name_for_modalias(modalias: string, allow_fallback: boolean): string;
        /**
         * Get the current display length for the given side kind.
         * If the display size is unknown, this function will return 0.
         * @param side the {@link AppStream.DisplaySideKind} to select.
         * @returns the display size in logical pixels.
         */
        get_display_length(side: DisplaySideKind | null): number;
        /**
         * Check whether graphical applications can be displayed via X11 or Wayland.
         * @returns `true` if graphical applications can be displayed.
         */
        get_gui_available(): boolean;
        /**
         * Get the name of the current kernel, e.g. "Linux"
         * @returns the current OS kernel name
         */
        get_kernel_name(): string;
        /**
         * Get the version of the current kernel, e.g. "6.2.0-2"
         * @returns the current kernel version
         */
        get_kernel_version(): string;
        /**
         * Get the current total amount of physical memory in MiB.
         * @returns the current total amount of usable memory in MiB
         */
        get_memory_total(): number;
        /**
         * Get a list of modaliases for all the hardware on this system that has them.
         * @returns a list of modaliases on the system.
         */
        get_modaliases(): string[];
        /**
         * Get the AppStream component ID of the current operating system.
         * @returns the component ID of the current OS.
         */
        get_os_cid(): string;
        /**
         * Get the homepage URL of the current operating system.
         * @returns the homepage of the current OS.
         */
        get_os_homepage(): string;
        /**
         * Get the ID of the current operating system.
         * @returns the current OS ID.
         */
        get_os_id(): string;
        /**
         * Get the humen-readable name of the current operating system.
         * @returns the name of the current OS.
         */
        get_os_name(): string;
        /**
         * Get the version string of the current operating system.
         * @returns the version of the current OS.
         */
        get_os_version(): string;
        /**
         * Check if there is a device on this system that matches the given modalias glob.
         * @param modalias_glob the modalias value to to look for, may contain wildcards.
         * @returns `true` if a matching device was found.
         */
        has_device_matching_modalias(modalias_glob: string): boolean;
        /**
         * Test if the current system has a specific user input control method.
         * Returns {@link AppStream.CheckResult.UNKNOWN} if we could not test for an input control method,
         * {@link AppStream.CheckResult.ERROR} on error and {@link AppStream.CheckResult.FALSE} if the control was not found.
         * @param kind the {@link AppStream.ControlKind} to test for.
         * @returns {@link AppStream.CheckResult.TRUE} if control was found
         */
        has_input_control(kind: ControlKind | null): CheckResult;
        /**
         * Receive a path in /sys for the devices with the given modalias.
         * @param modalias the modalias value to resolve.
         * @returns the syspath, or `null` if none was found.
         */
        modalias_to_syspath(modalias: string): string;
        /**
         * Set the current display length for the given side kind.
         * The size needs to be in device-independent pixels, see the
         * AppStream documentation for more information:
         * https://www.freedesktop.org/software/appstream/docs/chap-Metadata.html#tag-relations-display_length
         * @param side the {@link AppStream.DisplaySideKind} to select.
         * @param value_dip the length value in device-independt pixels.
         */
        set_display_length(side: DisplaySideKind | null, value_dip: number): void;
        /**
         * Set whether this system has a GUI / desktop environment available.
         * @param available `true` if GUI is available.
         */
        set_gui_available(available: boolean): void;
        /**
         * Explicitly mark a user input control as present or not present on this system.
         * @param kind the {@link AppStream.ControlKind} to set.
         * @param found `true` if the control should be marked as found.
         */
        set_input_control(kind: ControlKind | null, found: boolean): void;
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

        static ['new'](): Translation;

        // Signals

        /** @signal */
        connect<K extends keyof Translation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Translation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Translation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Translation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * The ID (e.g. Gettext translation domain) of this translation.
         */
        get_id(): string;
        /**
         * The translation system type.
         * @returns an enum of type {@link AppStream.TranslationKind}
         */
        get_kind(): TranslationKind;
        /**
         * The locale of the source strings for this component. If this has not been
         * explicitly specified, `en_US` will be returned.
         * @returns The locale of the source strings for this component.
         */
        get_source_locale(): string;
        /**
         * Set the ID (e.g. Gettext domain) of this translation.
         * @param id The ID of this translation.
         */
        set_id(id: string): void;
        /**
         * Set the translation system type.
         * @param kind the new {@link AppStream.TranslationKind}
         */
        set_kind(kind: TranslationKind | null): void;
        /**
         * Set the locale of the source strings for this component. In gettext, this is
         * referred to as the `C` locale. It’s almost always `en_US`, but for some
         * components it may not be.
         * @param locale The POSIX locale that the source strings are in, or `null` if unknown or default.
         */
        set_source_locale(locale?: string | null): void;
    }

    namespace Validator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Validator extends GObject.Object {
        static $gtype: GObject.GType<Validator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Validator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Validator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Validator;

        // Signals

        /** @signal */
        connect<K extends keyof Validator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Validator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Validator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Validator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Validator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Validator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Override the severity of a selected tag. For most tags, the severity
         * can not be lowered to a value that makes a validation
         * that would otherwise fail pass (so e.g. an ERROR can not become an INFO).
         * Some tags are explicitly allowed to have their severity lowered to enable
         * validation of e.g. incomplete metadata during development.
         * Increasing the severity of any tag is always allowed.
         * @param tag the issue tag to override, e.g. "release-time-missing"
         * @param severity_override the new severity for the tag.
         */
        add_override(tag: string, severity_override: IssueSeverity | null): boolean;
        /**
         * Add release metadata explicitly from bytes.
         * @param release_fname File basename of the release metadata file to add.
         * @param release_metadata Data of the release metadata file.
         */
        add_release_bytes(release_fname: string, release_metadata: GLib.Bytes | Uint8Array): boolean;
        /**
         * Add a release metadata file to the validation process.
         * @param release_file Release metadata file to add.
         */
        add_release_file(release_file: Gio.File): boolean;
        /**
         * Check the current registered values again and return `true`
         * if no issues were found that would make the previously validated
         * files fail validation.
         *
         * Usually you do not need to call this function explicitly, as
         * the as_validator_validate_* functions will already return whether
         * data was valid as return value.
         * @returns `true` if previously validated files were valid.
         */
        check_success(): boolean;
        /**
         * Clear all release information that was explicitly added to the
         * validation process.
         */
        clear_release_data(): void;
        /**
         * @returns `true` in case we allow network access.
         */
        get_allow_net(): boolean;
        /**
         * Get the number of files for which issues have been found.
         * @returns The number of files that have issues.
         */
        get_issue_files_count(): number;
        /**
         * Get a list of found metadata format issues.
         * @returns a list of {@link AppStream.ValidatorIssue} instances, free with `g_list_free()`
         */
        get_issues(): ValidatorIssue[];
        /**
         * Get a hash table of filenames mapped to lists of issues.
         * This is useful if validation was requested for multiple files and
         * a list of issues per-file is desired without prior explicit sorting.
         * @returns a file to issue list mapping
         */
        get_issues_per_file(): GLib.HashTable;
        get_report_yaml(): string;
        /**
         * @returns `true` in case we are in strict mode and consider any issues as fatal.
         */
        get_strict(): boolean;
        /**
         * Get the explanatory text for a given issue tag.
         * @param tag
         * @returns Explanation text.
         */
        get_tag_explanation(tag: string): string;
        /**
         * Get the severity for a given issue tag.
         * @param tag
         * @returns The {@link AppStream.IssueSeverity}
         */
        get_tag_severity(tag: string): IssueSeverity;
        /**
         * Get an array of all tags known to the validator.
         * @returns A string array of tags
         */
        get_tags(): string[];
        /**
         * If set to `true`, the validator will be allowed to connect
         * to the internet to e.g. check URLs for validity.
         * @param value `true` if remote URLs should be checked for availability.
         */
        set_allow_net(value: boolean): void;
        /**
         * Enable or disable strict mode. In strict mode, any found issue will result
         * in a failed validation (except for issues of "pedantic" severity).
         * Otherwise, only a "warning" or "error" will cause the validation to fail.
         * @param is_strict `true` to enable strict mode.
         */
        set_strict(is_strict: boolean): void;
        /**
         * Validate AppStream XML data from a byte array.
         * Remember to run %as_validator_clear_issues if you do not want previous
         * validation runs to affect the outcome of this validation.
         * @param metadata XML metadata as {@link GLib.Bytes}.
         * @returns `true` if bytes validated successfully.
         */
        validate_bytes(metadata: GLib.Bytes | Uint8Array): boolean;
        /**
         * Validate AppStream XML data.
         * @param metadata XML metadata.
         * @returns `true` if data validated successfully.
         */
        validate_data(metadata: string): boolean;
        /**
         * Validate an AppStream XML file.
         * @param metadata_file An AppStream XML file.
         * @returns `true` if file validated successfully.
         */
        validate_file(metadata_file: Gio.File): boolean;
        /**
         * Validate a full directory tree for issues in AppStream metadata.
         * @param root_dir The root directory of the filesystem tree that should be validated.
         * @returns `true` if file validated successfully.
         */
        validate_tree(root_dir: string): boolean;
    }

    namespace ValidatorIssue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ValidatorIssue extends GObject.Object {
        static $gtype: GObject.GType<ValidatorIssue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ValidatorIssue.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ValidatorIssue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ValidatorIssue;

        // Signals

        /** @signal */
        connect<K extends keyof ValidatorIssue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ValidatorIssue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ValidatorIssue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ValidatorIssue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ValidatorIssue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ValidatorIssue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * The component-id this issue is about.
         * @returns a component-id.
         */
        get_cid(): string;
        /**
         * Get an extended explanation on this issue, or return `null`
         * if none is available.
         * @returns the explanation
         */
        get_explanation(): string;
        /**
         * The name of the file this issue was found in.
         * @returns the filename
         */
        get_filename(): string;
        /**
         * Get a short context hint for this issue.
         * @returns the hint
         */
        get_hint(): string;
        /**
         * Gets the line number where this issue was found.
         * @returns the line number where this issue occured, or -1 if unknown.
         */
        get_line(): number;
        /**
         * Builds a string containing all information about the location
         * where this issue occured that we know about.
         * @returns the location hint as string.
         */
        get_location(): string;
        /**
         * Gets the severity of this issue.
         * @returns a {@link AppStream.IssueSeverity}
         */
        get_severity(): IssueSeverity;
        /**
         * Gets the issue tag string for this issue.
         * @returns the tag
         */
        get_tag(): string;
        /**
         * Sets the component-id this issue is about.
         * @param cid a component-id.
         */
        set_cid(cid: string): void;
        /**
         * Set explanatory text for this issue.
         * @param explanation the explanation.
         */
        set_explanation(explanation: string): void;
        /**
         * Sets the name of the file the issue was found in.
         * @param fname the filename.
         */
        set_filename(fname: string): void;
        /**
         * Sets short issue hint.
         * @param hint the hint.
         */
        set_hint(hint: string): void;
        /**
         * Sets the line number where this issue was found.
         * @param line the line number.
         */
        set_line(line: number): void;
        /**
         * Sets the severity for this issue.
         * @param severity the {@link AppStream.IssueSeverity}.
         */
        set_severity(severity: IssueSeverity | null): void;
        /**
         * Sets the issue tag.
         * @param tag the tag.
         */
        set_tag(tag: string): void;
    }

    namespace Video {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Video extends GObject.Object {
        static $gtype: GObject.GType<Video>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Video.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Video.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Video;

        // Signals

        /** @signal */
        connect<K extends keyof Video.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Video.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Video.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Video.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the video codec, if known.
         * @returns the {@link AppStream.VideoCodecKind}
         */
        get_codec_kind(): VideoCodecKind;
        /**
         * Gets the video container format, if known.
         * @returns the {@link AppStream.VideoContainerKind}
         */
        get_container_kind(): VideoContainerKind;
        /**
         * Gets the video height, if known.
         * @returns height in pixels or 0 if unknown
         */
        get_height(): number;
        /**
         * Get locale for this video.
         * @returns Locale string
         */
        get_locale(): string;
        /**
         * Gets the full qualified URL for the video, usually pointing at a mirror or CDN server.
         * @returns a web URL
         */
        get_url(): string;
        /**
         * Gets the video width, if known.
         * @returns width in pixels or 0 if unknown
         */
        get_width(): number;
        /**
         * Sets the video codec.
         * @param kind the {@link AppStream.VideoCodecKind}, e.g. {@link AppStream.VideoCodecKind.AV1}.
         */
        set_codec_kind(kind: VideoCodecKind | null): void;
        /**
         * Sets the video container.
         * @param kind the {@link AppStream.VideoContainerKind}, e.g. {@link AppStream.VideoContainerKind.MKV}.
         */
        set_container_kind(kind: VideoContainerKind | null): void;
        /**
         * Sets the video height.
         * @param height the height in pixels.
         */
        set_height(height: number): void;
        /**
         * Sets the locale for this video.
         * @param locale the BCP47 locale string.
         */
        set_locale(locale: string): void;
        /**
         * Sets the fully-qualified URL to use for the video.
         * @param url the URL.
         */
        set_url(url: string): void;
        /**
         * Sets the video width.
         * @param width the width in pixels.
         */
        set_width(width: number): void;
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
    type ArtifactClass = typeof Artifact;
    /**
     * @gir-type Alias
     */
    type BrandingClass = typeof Branding;
    /**
     * A {@link AppStream.BrandingColorIter} structure represents an iterator that can be used
     * to iterate over the accent colors of an {@link AppStream.Branding} object.
     * {@link AppStream.BrandingColorIter} structures are typically allocated on the stack and
     * then initialized with `as_branding_color_iter_init()`.
     * @gir-type Struct
     */
    class BrandingColorIter {
        static $gtype: GObject.GType<BrandingColorIter>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Initializes a color iterator for the accent color list and associates it
         * it with `branding`.
         * The {@link AppStream.BrandingColorIter} structure is typically allocated on the stack
         * and does not need to be freed explicitly.
         * @param branding an {@link AppStream.Branding}
         */
        init(branding: Branding): void;
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
         * @returns `false` if the last entry has been reached.
         */
        next(): [boolean, ColorKind | null, ColorSchemeKind | null, string];
    }

    /**
     * @gir-type Alias
     */
    type BundleClass = typeof Bundle;
    /**
     * @gir-type Alias
     */
    type CategoryClass = typeof Category;
    /**
     * @gir-type Alias
     */
    type ChecksumClass = typeof Checksum;
    /**
     * @gir-type Alias
     */
    type ComponentBoxClass = typeof ComponentBox;
    /**
     * @gir-type Alias
     */
    type ComponentClass = typeof Component;
    /**
     * @gir-type Alias
     */
    type ContentRatingClass = typeof ContentRating;
    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;
    /**
     * @gir-type Alias
     */
    type DeveloperClass = typeof Developer;
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
    type IssueClass = typeof Issue;
    /**
     * @gir-type Alias
     */
    type LaunchableClass = typeof Launchable;
    /**
     * @gir-type Alias
     */
    type MetadataClass = typeof Metadata;
    /**
     * @gir-type Alias
     */
    type PoolClass = typeof Pool;
    /**
     * @gir-type Alias
     */
    type ProvidedClass = typeof Provided;
    /**
     * @gir-type Alias
     */
    type ReferenceClass = typeof Reference;
    /**
     * @gir-type Alias
     */
    type RelationCheckResultClass = typeof RelationCheckResult;
    /**
     * @gir-type Alias
     */
    type RelationClass = typeof Relation;
    /**
     * @gir-type Alias
     */
    type ReleaseClass = typeof Release;
    /**
     * @gir-type Alias
     */
    type ReleaseListClass = typeof ReleaseList;
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
    type SuggestedClass = typeof Suggested;
    /**
     * @gir-type Alias
     */
    type SystemInfoClass = typeof SystemInfo;
    /**
     * @gir-type Alias
     */
    type TranslationClass = typeof Translation;
    /**
     * @gir-type Alias
     */
    type ValidatorClass = typeof Validator;
    /**
     * @gir-type Alias
     */
    type ValidatorIssueClass = typeof ValidatorIssue;
    /**
     * @gir-type Alias
     */
    type VideoClass = typeof Video;
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

export default AppStream;

// END
