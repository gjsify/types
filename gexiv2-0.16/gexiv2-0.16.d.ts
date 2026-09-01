
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

export namespace GExiv2 {

    /**
     * GExiv2-0.16
     */


    /**
     * @gir-type Enum
     */
    export namespace ByteOrder {
        export const $gtype: GObject.GType<ByteOrder>;
    }

    /**
     * Options to control the byte order of binary EXIF data exports, in {@link Metadata.get_exif_data}.
     * @gir-type Enum
     */
    enum ByteOrder {
        /**
         * Use little-endian byte order
         */
        LITTLE = 0,
        /**
         * Use big-endian byte order
         */
        BIG = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace LogLevel {
        export const $gtype: GObject.GType<LogLevel>;
    }

    /**
     * Used in
     * 
     * GExiv2 log levels
     * @gir-type Enum
     */
    enum LogLevel {
        /**
         * Log level for debugging
         */
        DEBUG = 0,
        /**
         * Log level for informational messages
         */
        INFO = 1,
        /**
         * Log level for warning messages
         */
        WARN = 2,
        /**
         * Log level for error messages
         */
        ERROR = 3,
        /**
         * Suppress all log messages
         */
        MUTE = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }

    /**
     * The orientation of an image is defined as the location of it's x,y origin.  More than rotation,
     * orientation allows for every variation of rotation, flips, and mirroring to be described in
     * 3 bits of data.
     * 
     * A handy primer to orientation can be found at
     * <http://jpegclub.org/exif_orientation.html>
     * @gir-type Enum
     */
    enum Orientation {
        /**
         * The orientation of the image is unknown
         */
        UNSPECIFIED = 0,
        /**
         * The orientation of the image is without any rotation.
         */
        NORMAL = 1,
        /**
         * The image is flipped on its horizontal axis
         */
        HFLIP = 2,
        /**
         * The image is rotated by 180 degrees
         */
        ROT_180 = 3,
        /**
         * The Image is flipped on its vertical axis
         */
        VFLIP = 4,
        /**
         * The image is rotated by 90 degrees clockwise and flipped on its horizontal axis
         */
        ROT_90_HFLIP = 5,
        /**
         * The image is rotated by 90 degrees clockwise
         */
        ROT_90 = 6,
        /**
         * The image is rotated by 90 degrees clockwise and flipped on its vertical axis
         */
        ROT_90_VFLIP = 7,
        /**
         * The image is rotated 270 degrees clockwise
         */
        ROT_270 = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureType {
        export const $gtype: GObject.GType<StructureType>;
    }

    /**
     * Used in {@link Metadata.set_xmp_tag_struct} to determine the array type
     * @gir-type Enum
     */
    enum StructureType {
        /**
         * Structure is not an array
         */
        NONE = 0,
        /**
         * A list of alternative values
         */
        ALT = 20,
        /**
         * An unordered list of values
         */
        BAG = 21,
        /**
         * An ordered list of values
         */
        SEQ = 22,
        /**
         * Not supported. For completeness only
         */
        LANG = 23,
    }


    /**
     * @default 0
     */
    const MAJOR_VERSION: number;

    /**
     * @default 2
     */
    const MICRO_VERSION: number;

    /**
     * @default 16
     */
    const MINOR_VERSION: number;

    /**
     * The gexiv2 library's version number as a formatted decimal XXYYZZ.
     * 
     * XX is the major version, YY is the minor version, and ZZ is the micro version
     * 
     * For example, version 0.6.1 will be returned as 000601.
     * @returns Integer representing the current version.
     */
    function get_version(): number;

    /**
     * Initializes GExiv2.
     * 
     * GExiv2 requires initialization before its methods are used.  In particular, this call must be
     * made in a thread-safe fashion.  Best practice is to call from the application's main thread and
     * not to use any Gexiv2 code until it has returned.
     * @returns `true` if initialized.  If `false`, GExiv2 should not be used (unable to initialize properly).
     */
    function initialize(): boolean;

    /**
     * Get the current {@link GExiv2.LogLevel}.
     * 
     * Messages below this level will not be logged.
     * @returns The current level.
     */
    function log_get_level(): LogLevel;

    /**
     * Set the current {@link GExiv2.LogLevel}.
     * 
     * 
     * Messages below this level will not be logged.
     * @param level The {@link GExiv2.LogLevel} gexiv2 should respect.
     */
    function log_set_level(level: LogLevel): void;

    /**
     * Make GExiv2 use GLib's logging mechanism.
     * 
     * When called, gexiv2 will install it's own {@link GExiv2.LogHandler} which
     * redirects all Exiv2 and gexiv2 log messages to GLib's logging calls
     * ({@link GLib.debug}, {@link GLib.message}, {@link GLib.warning}, and
     * {@link GLib.critical} for the respective {@link GExiv2.LogLevel} value).
     * {@link GExiv2.LogLevel.MUTE} log messages are dropped.
     * 
     * One advantage to using this is that GLib's logging control and handlers can be used rather than
     * GExiv2's ad hoc scheme.  It also means an application can use GLib logging and have all its
     * messages routed through the same calls.
     */
    function log_use_glib_logging(): void;

    /**
     * Shutdown GExiv2.
     * 
     * Shutdown GExiv2. Should be called in the same thread as `gexiv2_initialize()`.
     * @since 0.16.0
     */
    function shutdown(): void;

    /**
     * @gir-type Callback
     */
    interface LogHandler {
        (level: LogLevel, msg: string): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace XmpFormatFlags {
        export const $gtype: GObject.GType<XmpFormatFlags>;
    }

    /**
     * Options to control the format of the serialized XMP packet
     * Taken from: exiv2/src/xmp.hpp
     * @gir-type Flags
     */
    enum XmpFormatFlags {
        /**
         * Omit the XML packet wrapper.
         */
        OMIT_PACKET_WRAPPER = 16,
        /**
         * Default is a writeable packet.
         */
        READ_ONLY_PACKET = 32,
        /**
         * Use a compact form of RDF.
         */
        USE_COMPACT_FORMAT = 64,
        /**
         * Include a padding allowance for a thumbnail image.
         */
        INCLUDE_THUMBNAIL_PAD = 256,
        /**
         * The padding parameter is the overall packet length.
         */
        EXACT_PACKET_LENGTH = 512,
        /**
         * Show aliases as XML comments.
         */
        WRITE_ALIAS_COMMENTS = 1024,
        /**
         * Omit all formatting whitespace.
         */
        OMIT_ALL_FORMATTING = 2048,
    }


    namespace Metadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object holding all the Exiv2 metadata. Previews, if present, are also available.
     * 
     * It is a generic object that provides everything from simple aggregated accessors
     * to common data such as image comments up to fine-grained access to specific tags of a
     * specfic format, be it EXIF, IPTC or XMP.
     * 
     * As gexiv2 is only a wrapper around Exiv2, it's better to read its documentation to understand
     * the full scope of what it offers: <http://www.exiv2.org/>
     * 
     * In particular, rather than providing a getter/setter method pair for every metadata value
     * available for images (of which there are thousands), Exiv2 uses a dotted addressing scheme.
     * For example, to access a photo's EXIF Orientation field, the caller passes to Exiv2
     * "Exif.Photo.Orientation".  These *tags* (in Exiv2 parlance) are key to using Exiv2 (and
     * therefore gexiv2) to its fullest.
     * 
     * A full reference for all supported Exiv2 tags can be found at <http://www.exiv2.org/metadata.html>
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

        static ["new"](): Metadata;

        // Signals
        /** @signal */
        connect<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Metadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Metadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get Exiv2's description for a tag.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @since 0.16.0
         */
        static get_tag_description(tag: string): string | null;

        /**
         * Get Exiv2's label for this tag.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         */
        static get_tag_label(tag: string): string | null;

        /**
         * Get Exiv2's type name of a tag.
         * 
         * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
         * <http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c>
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @since 0.16.0
         */
        static get_tag_type(tag: string): string | null;

        /**
         * Look up the URI for the namespace for `tag`
         * @param tag Full tag name (e.g. "Xmp.dc.subject") or XMP namespace identifier (e.g. "dc")
         * @since 0.16.0
         */
        static get_xmp_namespace_for_tag(tag: string): string;

        /**
         * Check whether `tag` is from the EXIF domain of tags.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         */
        static is_exif_tag(tag: string): boolean;

        /**
         * Check whether `tag` is from the IPTC domain of tags.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         */
        static is_iptc_tag(tag: string): boolean;

        /**
         * Check whether `tag` is from the XMP domain of tags.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         */
        static is_xmp_tag(tag: string): boolean;

        /**
         * Register an additional XMP namespace.
         * @param name XMP URI name (should end in /)
         * @param prefix XMP namespace prefix
         * @since 0.16.0
         */
        static register_xmp_namespace(name: string, prefix: string): boolean;

        /**
         * Get Exiv2's description for a tag.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_description} instead.
         */
        static try_get_tag_description(tag: string): string | null;

        /**
         * Get Exiv2's label for this tag.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_label} instead.
         */
        static try_get_tag_label(tag: string): string | null;

        /**
         * Get Exiv2's type name of a tag.
         * 
         * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
         * <http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c>
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_type} instead.
         */
        static try_get_tag_type(tag: string): string | null;

        /**
         * Look up the URI for the namespace for `tag`
         * @param tag Full tag name (e.g. "Xmp.dc.subject") or XMP namespace identifier (e.g. "dc")
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.try_get_xmp_namespace_for_tag} instead.
         */
        static try_get_xmp_namespace_for_tag(tag: string): string;

        /**
         * Register an additional XMP namespace.
         * @param name XMP URI name (should end in /)
         * @param prefix XMP namespace prefix
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.register_xmp_namespace} instead.
         */
        static try_register_xmp_namespace(name: string, prefix: string): boolean;

        /**
         * Unregister all XMP namespaces that have been previously registered with
         * {@link Metadata.try_register_xmp_namespace}.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.register_xmp_namespace} instead
         */
        static try_unregister_all_xmp_namespaces(): void;

        /**
         * Unregister a namespace previously registered with
         * {@link Metadata.try_register_xmp_namespace}.
         * @param name XMP URI name (should end in /)
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.try_unregister_xmp_namespace} instead.
         */
        static try_unregister_xmp_namespace(name: string): boolean;

        /**
         * Unregister all XMP namespaces that have been previously registered with
         * {@link Metadata.try_register_xmp_namespace}.
         * @since 0.16.0
         */
        static unregister_all_xmp_namespaces(): void;

        /**
         * Unregister a namespace previously registered with
         * {@link Metadata.try_register_xmp_namespace}.
         * @param name XMP URI name (should end in /)
         * @since 0.16.0
         */
        static unregister_xmp_namespace(name: string): boolean;

        // Methods
        /**
         * Saves the metadata to the stream by reading the stream into memory, copying this object's
         * metadata into the image, then writing the image as a stream back out.
         * 
         * if `bytes` is `null`, a copy of the internal image with updated metadata will be returned.
         * @param bytes An image buffer to update the metadata on, nor `null`
         * @returns A newly allocated GBytes object containing the image with new metadata
         * @since 0.16.0
         * @throws GLib.Error
         */
        as_bytes(bytes: GLib.Bytes | Uint8Array | null): GLib.Bytes;

        /**
         * Removes all tags for all domains (EXIF, IPTC, and XMP).
         */
        clear(): void;

        /**
         * This is a composite clear method that will clear a number of fields.  See
         * {@link Metadata.get_comment}  for more information.
         */
        clear_comment(): void;

        /**
         * Clears all EXIF metadata from the loaded image.
         */
        clear_exif(): void;

        /**
         * Clears all IPTC metadata from the loaded image.
         */
        clear_iptc(): void;

        /**
         * Removes the Exiv2 tag from the metadata object.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag
         * @returns `true` if the tag was present.
         * @since 0.16.0
         * @throws GLib.Error
         */
        clear_tag(tag: string): boolean;

        /**
         * Clears all XMP metadata from the loaded image.
         */
        clear_xmp(): void;

        /**
         * Removes all GPS metadata from the loaded image
         * @since 0.16.0
         * @throws GLib.Error
         */
        delete_gps_info(): void;

        /**
         * Removes the EXIF thumbnail from the loaded image.
         * @throws GLib.Error
         */
        erase_exif_thumbnail(): void;

        /**
         * Load only an EXIF buffer, typically stored in a JPEG's APP1 segment.
         * @param data A buffer containing the data to be read
         * @returns Boolean success indicator.
         * @throws GLib.Error
         */
        from_app1_segment(data: Uint8Array | string): boolean;

        /**
         * Read metadata from a {@link Gio.InputStream}. This function is not very
         * efficient in places since it needs to copy memory to fullfil underlying
         * requirements by exiv2, which expects everything to be memory-mappable.
         * @param stream 
         * @throws GLib.Error
         */
        from_stream(stream: Gio.InputStream): boolean;

        /**
         * Encode the XMP packet as a `null`-terminated string.
         * @param xmp_format_flags One of {@link GExiv2.XmpFormatFlags}
         * @param padding The padding before the closing `<?xpacket>` tag
         * @returns Encode the XMP packet and return as a `null`-terminated string.
         * @since 0.16.0
         * @throws GLib.Error
         */
        generate_xmp_packet(xmp_format_flags: XmpFormatFlags, padding: number): string | null;

        /**
         * A composite accessor that uses the first available metadata field from a list of well-known
         * locations to find the photo's comment (or description).
         * 
         * MWG guidelines refer to these as *Description*: a textual description of a resource's content.
         * 
         * These fields are:
         * 
         * - Exif.Image.ImageDescription  (MWG Guidelines)
         * - Exif.Photo.UserComment
         * - Exif.Image.XPComment
         * - Iptc.Application2.Caption    (MWG Guidelines)
         * - Xmp.dc.description           (MWG Guidelines)
         * - Xmp.acdsee.notes             (Commonly requested, read only)
         * 
         * <note>Note that in the EXIF specification Exif.Image.ImageDescription is
         * described  as "the title of the image".  Also, it does not support
         * two-byte character codes for encoding.  However, it's still used here for legacy reasons.
         * </note>
         * 
         * For fine-grained control, it's recommended to use Exiv2 tags directly rather than this method,
         * which is more useful for quick or casual use.
         * @returns The photo's comment field.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_comment(): string | null;

        /**
         * Returns a binary blob of the contained EXIF data, if the image contains any.
         * @param byte_order Whether to export the data in little or big endian format
         * @returns The content of the EXIF data or `null` on error
         * @since 0.12.2
         * @throws GLib.Error
         */
        get_exif_data(byte_order: ByteOrder): GLib.Bytes | null;

        /**
         * Fetch EXIF `tag` represented by a fraction. `nom` will contain the numerator,
         * `den` the denominator of the fraction on successful return.
         * @param tag The tag you want the rational value for
         * @returns Boolean success value
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_exif_tag_rational(tag: string): [boolean, number, number];

        /**
         * Query `self` for a list of available EXIF tags
         * @returns A unique list of the available EXIF tags in the loaded image
         */
        get_exif_tags(): string[];

        /**
         * Get the thumbnail stored in the EXIF data of `self`
         * @returns Boolean success value
         */
        get_exif_thumbnail(): [boolean, Uint8Array];

        /**
         * Returns the exposure time in seconds (shutter speed, *not* date-time of exposure) as a
         * rational.  See <https://en.wikipedia.org/wiki/Shutter_speed> for more information.
         * @returns Boolean success value
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_exposure_time(): [boolean, number, number];

        /**
         * See <https://en.wikipedia.org/wiki/F-number> for more information.
         * If Exif.Photo.FNumber does not exist, it will fall back to calculating the FNumber from
         * Exif.Photo.ApertureValue (if available)
         * @returns The exposure Fnumber as a gdouble, or -1.0 if tag is not present or invalid.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_fnumber(): number;

        /**
         * See <https://en.wikipedia.org/wiki/Flange_focal_distance> for more information.
         * @returns The focal length as a gdouble, or -1.0 if tag is not present or invalid.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_focal_length(): number;

        /**
         * Convenience function to query the altitude stored in the GPS tags of the
         * image
         * @returns The altitude value, or -inf on error, or nan if no altitude value.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_gps_altitude(): number;

        /**
         * Convenience function to query all available GPS information at once. See the
         * {@link GExiv2.Metadata.get_gps_longitude}, {@link GExiv2.Metadata.get_gps_latitude}
         * and {@link GExiv2.Metadata.get_gps_altitude} for possible values of the out
         * parameters.
         * @returns Boolean success value. Indicates if any of the queries failed.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_gps_info(): [boolean, number, number, number];

        /**
         * Query the latitude stored in the GPS tags of `self`
         * @returns The latitude or -inf on error, nan if no altitude value is found.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_gps_latitude(): number;

        /**
         * Query the longitude stored in the GPS tags of `self`
         * @returns The longitude value, or -inf on error, or nan if no altitude value.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_gps_longitude(): number;

        /**
         * Query `self` for a list of available IPTC tags
         * @returns A unique list of the available IPTC tags
         */
        get_iptc_tags(): string[];

        /**
         * See <https://en.wikipedia.org/wiki/Iso_speed> for more information.
         * @returns The ISO speed rating as a gint, or 0 if tag is not present or invalid.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_iso_speed(): number;

        /**
         * Composite accessor to query the pixel with stored in the metadata. This
         * might differ from the height of image that is available through
         * {@link Metadata.get_pixel_height}
         * @returns Height of images in pixels as stored in the metadata
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_metadata_pixel_height(): number;

        /**
         * Composite accessor to query the pixel with stored in the metadata. This
         * might differ from the width of image that is available through
         * {@link Metadata.get_pixel_width}
         * @returns Width of images in pixels as stored in the metadata
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_metadata_pixel_width(): number;

        /**
         * Query mime type of currently loaded image.
         * @returns The MIME type of the loaded image, `null` if not loaded or unknown.
         */
        get_mime_type(): string;

        /**
         * The EXIF Orientation field
         * @returns A {@link GExiv2.Orientation} value representing the EXIF orientation value.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_orientation(): Orientation;

        /**
         * Get the *actual* unoriented display height in pixels of the loaded image.  This may
         * be different than the height reported by various metadata tags, i.e. `Exif.Photo.PixelYDimension`.
         * @returns Pixel height of current image
         */
        get_pixel_height(): number;

        /**
         * Get the *actual* unoriented display width in pixels of the loaded
         * image. May be different than the width reported by various metadata tags,
         * i.e. `Exif.Photo.PixelXDimension`.
         * @returns Pixel width of current image
         */
        get_pixel_width(): number;

        /**
         * Get a preview image from the metadata.
         * @param props A {@link GExiv2.PreviewProperties} instance
         * @returns A {@link GExiv2.PreviewImage} instance for the particular {@link GExiv2.PreviewProperties}.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_preview_image(props: PreviewProperties): PreviewImage;

        /**
         * An image may have stored one or more previews, often of different qualities, sometimes of
         * different image formats than the containing image.  This call returns the properties of all
         * previews Exiv2 finds within the loaded image.  Use {@link Metadata.get_preview_image} to
         * load a particular preview into memory.
         * @returns An array of {@link GExiv2.PreviewProperties} instances, one for each preview present in the loaded image.
         */
        get_preview_properties(): PreviewProperties[] | null;

        /**
         * Query whether the currently loaded image supports writing of EXIF metadata.
         * @returns `true` if the loaded image type supports writing EXIF metadata.
         */
        get_supports_exif(): boolean;

        /**
         * Query whether the currently loaded image supports writing of IPTC metadata.
         * @returns `true` if the loaded image type supports writing IPTC metadata.
         */
        get_supports_iptc(): boolean;

        /**
         * Query whether the currently loaded image supports writing of XMP metadata.
         * @returns `true` if the loaded image type supports writing XMP metadata.
         */
        get_supports_xmp(): boolean;

        /**
         * An interpreted string is one fit for user display.  It may display units or use formatting
         * appropriate to the type of data the tag holds.
         * 
         * Tags that support multiple values are returned as a single string, with elements separated by ", ".
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @returns The tag's interpreted value as a string
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_tag_interpreted_string(tag: string): string | null;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @returns The tag's value as a glong
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_tag_long(tag: string): number;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * In case of error, a GLib warning will be logged. Use instead
         * {@link Metadata.try_get_tag_multiple} if you want to avoid this and
         * control if and how the error is outputted.
         * @param tag Exiv2 tag name
         * @returns The multiple string values of the tag.  Returns `null` if parameters are `null` or `tag` does not begin with recognised type of metadata ("Exif.", "Xmp." or "Iptc.").  For a well formed `tag`, returns array[0] = `null` if `tag` is undefined or is not set in the current metadata.
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_tag_multiple(tag: string): string[] | null;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * Tags that support multiple values may bereturned as a single byte array, with records separated
         * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
         * @param tag Exiv2 tag name
         * @returns The tag's raw value as a byte array
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_tag_raw(tag: string): GLib.Bytes | null;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * Tags that support multiple values are returned as a single string, with elements separated by ", ".
         * 
         * In case of error, a GLib warning will be logged. Use instead
         * {@link Metadata.try_get_tag_string} if you want to avoid this and
         * control if and how the error is outputted.
         * @param tag Exiv2 tag name
         * @returns The tag's value as a string
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_tag_string(tag: string): string | null;

        /**
         * Get the currently encoded XMP packet (after having called {@link GExiv2.Metadata.try_get_xmp_packet})
         * @returns The currently-encoded XMP packet (see {@link Metadata.generate_xmp_packet}).
         * @since 0.16.0
         * @throws GLib.Error
         */
        get_xmp_packet(): string | null;

        /**
         * Get the XMP data from the image.
         * 
         * This could contain multiple XML snippets.
         * @returns A unique list of the available XMP tags
         */
        get_xmp_tags(): string[];

        /**
         * Whether the metadata contains EXIF data.
         * @returns TRUE if EXIF metadata is present in the loaded image
         */
        has_exif(): boolean;

        /**
         * Whether the image has IPTC metadata
         * @returns TRUE if IPTC metadata is present in the loaded image
         */
        has_iptc(): boolean;

        /**
         * Check for presence of a tag.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag
         * @returns `true` if the tag is present.
         * @since 0.16.0
         * @throws GLib.Error
         */
        has_tag(tag: string): boolean;

        /**
         * Whether the metadata contains XMP data.
         * @returns TRUE if XMP metadata is present in the loaded image
         */
        has_xmp(): boolean;

        /**
         * Populate metadata from a memory buffer.
         * 
         * The buffer must be an image format supported by Exiv2. If called multiple times,
         * current metadata will be replaced by the content of the last file opened.
         * 
         * When called on an already filled meta-data object (i.e. one that has already
         * been filled by a previous call of {@link GExiv2.Metadata.open_path}) and the
         * opening of the new path fails, the object will not revert to its previous
         * state but be in a similar state after calling {@link GExiv2.Metadata.new}.
         * @param data A buffer containing the data to be read
         * @returns Boolean success indicator
         * @throws GLib.Error
         */
        open_buf(data: Uint8Array | string): boolean;

        /**
         * Populate metadata from `path`.
         * 
         * The file must be an image format supported by Exiv2. If called multiple times,
         * current metadata will be replaced by the content of the last file opened.
         * @param path Path to the file you want to open
         * @returns Boolean success indicator
         * @throws GLib.Error
         */
        open_path(path: string): boolean;

        /**
         * Saves the metadata to the specified using an XMP sidecar file.
         * @param path Path to the file you want to save to.
         * @returns Boolean success indicator.
         * @since 0.10.6
         * @throws GLib.Error
         */
        save_external(path: string): boolean;

        /**
         * Saves the metadata to the specified file by reading the file into memory, copying this object's
         * metadata into the image, then writing the image back out.
         * @param path Path to the file you want to save to.
         * @returns Boolean success indicator.
         * @throws GLib.Error
         */
        save_file(path: string): boolean;

        /**
         * This is a composite setter that will set a number of fields to the supplied value.  See
         * {@link Metadata.get_comment} for more information.
         * @param comment Comment string to set. Must not be `null`
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_comment(comment: string): void;

        /**
         * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
         * `den` the denominator of the fraction.
         * @param tag The Exiv2 tag
         * @param nom Rational numerator
         * @param den Rational denominator
         * @returns Boolean success value
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_exif_tag_rational(tag: string, nom: number, den: number): boolean;

        /**
         * Sets or replaces the EXIF thumbnail with the data in `buffer`.
         * @param buffer A buffer containing thumbnail data
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_exif_thumbnail_from_buffer(buffer: Uint8Array | string): void;

        /**
         * Sets or replaces the EXIF thumbnail with the image in the file
         * @param path Path of image file
         * @returns Boolean success value
         * @throws GLib.Error
         */
        set_exif_thumbnail_from_file(path: string): boolean;

        /**
         * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
         * GPS information that is currently set. See {@link Metadata.update_gps_info} for
         * just modifying the GPS data.
         * @param longitude Longitude value to set or replace current value
         * @param latitude Latitude value to set or replace current value
         * @param altitude Altitude value to set or replace current value
         * @returns Boolean success value.
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_gps_info(longitude: number, latitude: number, altitude: number): boolean;

        /**
         * Update the image's metadata with `height`
         * @param height The width of the image as it should be put into the metadata.
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_metadata_pixel_height(height: number): void;

        /**
         * Composite setter to update the image's metadata with `width`
         * @param width The width of the image as it should be put into the metadata
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_metadata_pixel_width(width: number): void;

        /**
         * The orientation must be valid and cannot be {@link GExiv2.Orientation.UNSPECIFIED}.
         * @param orientation The new {@link GExiv2.Orientation} for the image.
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_orientation(orientation: Orientation): void;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @param value The value to set or replace the existing value
         * @returns TRUE on success
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_tag_long(tag: string, value: bigint | number): boolean;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * All previous `tag` values are erased. For multiple value tags, each of the non `null`
         * entries in `values` is stored. For single value tags, only the last non `null` value
         * is assigned.
         * @param tag Exiv2 tag name
         * @param values An array of values to set or replace the existing value(s)
         * @returns Boolean success value
         * @throws GLib.Error
         */
        set_tag_multiple(tag: string, values: string[]): boolean;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * If a tag supports multiple values, then `value` is added to any existing values. For single
         * value tags, `value` replaces the value.
         * 
         * In case of error, a GLib warning will be logged. Use instead
         * {@link Metadata.try_set_tag_string} if you want to avoid this and
         * control if and how the error is outputted.
         * @param tag Exiv2 tag name
         * @param value The value to set or replace the existing value
         * @returns TRUE on success
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_tag_string(tag: string, value: string): boolean;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @param type The GExiv2StructureType specifying the type of structure
         * @returns TRUE on success
         * @since 0.16.0
         * @throws GLib.Error
         */
        set_xmp_tag_struct(tag: string, type: StructureType): boolean;

        /**
         * Check whether a tag supports multiple values.
         * 
         * Multiple value tags are Xmp tags of type "XmpAlt", "XmpBag", "XmpSeq" or "LangAlt", or Iptc
         * tags marked as Repeatable (which can be of any Iptc type). There are no multiple value Exif
         * tags.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @returns Whether `tag` is capable of storing multiple values or not. If `tag` is undefined (i.e. not built-in and not added to `self`), then `error` is set and `false` is returned.
         * @since 0.16.0
         * @throws GLib.Error
         */
        tag_supports_multiple_values(tag: string): boolean;

        /**
         * Removes the Exiv2 tag from the metadata object.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag
         * @returns TRUE if the tag was present.
         * @since 0.14.0
         * @deprecated since 0.14.0: Use {@link Metadata.clear_tag} instead.
         * @throws GLib.Error
         */
        try_clear_tag(tag: string): boolean;

        /**
         * Removes all GPS metadata from the loaded image
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.delete_gps_info} instead.
         * @throws GLib.Error
         */
        try_delete_gps_info(): void;

        /**
         * Removes the EXIF thumbnail from the loaded image.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.erase_exif_thumbnail} instead.
         * @throws GLib.Error
         */
        try_erase_exif_thumbnail(): void;

        /**
         * Encode the XMP packet as a `null`-terminated string.
         * @param xmp_format_flags One of {@link GExiv2.XmpFormatFlags}
         * @param padding The padding before the closing `<?xpacket>` tag
         * @returns Encode the XMP packet and return as a `null`-terminated string.
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.try_generate_xmp_packet} instead.
         * @throws GLib.Error
         */
        try_generate_xmp_packet(xmp_format_flags: XmpFormatFlags, padding: number): string | null;

        /**
         * A composite accessor that uses the first available metadata field from a list of well-known
         * locations to find the photo's comment (or description).
         * 
         * MWG guidelines refer to these as *Description*: a textual description of a resource's content.
         * 
         * These fields are:
         * 
         * - Exif.Image.ImageDescription  (MWG Guidelines)
         * - Exif.Photo.UserComment
         * - Exif.Image.XPComment
         * - Iptc.Application2.Caption    (MWG Guidelines)
         * - Xmp.dc.description           (MWG Guidelines)
         * - Xmp.acdsee.notes             (Commonly requested, read only)
         * 
         * <note>Note that in the EXIF specification Exif.Image.ImageDescription is
         * described  as "the title of the image".  Also, it does not support
         * two-byte character codes for encoding.  However, it's still used here for legacy reasons.
         * </note>
         * 
         * For fine-grained control, it's recommended to use Exiv2 tags directly rather than this method,
         * which is more useful for quick or casual use.
         * @returns The photo's comment field.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_comment} instead.
         * @throws GLib.Error
         */
        try_get_comment(): string | null;

        /**
         * Fetch EXIF `tag` represented by a fraction. `nom` will contain the numerator,
         * `den` the denominator of the fraction on successful return.
         * @param tag The tag you want the rational value for
         * @returns Boolean success value
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_exif_tag_rational} instead.
         * @throws GLib.Error
         */
        try_get_exif_tag_rational(tag: string): [boolean, number, number];

        /**
         * Returns the exposure time in seconds (shutter speed, *not* date-time of exposure) as a
         * rational.  See <https://en.wikipedia.org/wiki/Shutter_speed> for more information.
         * @returns Boolean success value
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_exposure_time} instead.
         * @throws GLib.Error
         */
        try_get_exposure_time(): [boolean, number, number];

        /**
         * See <https://en.wikipedia.org/wiki/F-number> for more information.
         * If Exif.Photo.FNumber does not exist, it will fall back to calculating the FNumber from
         * Exif.Photo.ApertureValue (if available);
         * @returns The exposure Fnumber as a gdouble, or -1.0 if tag is not present or invalid.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_fnumber} instead.
         * @throws GLib.Error
         */
        try_get_fnumber(): number;

        /**
         * See <https://en.wikipedia.org/wiki/Flange_focal_distance> for more information.
         * @returns The focal length as a gdouble, or -1.0 if tag is not present or invalid.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_focal_length} instead.
         * @throws GLib.Error
         */
        try_get_focal_length(): number;

        /**
         * Convenience function to query the altitude stored in the GPS tags of the
         * image
         * @returns Boolean success value
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_gps_latitude} instead.
         * @throws GLib.Error
         */
        try_get_gps_altitude(): [boolean, number];

        /**
         * Convenience function to query all available GPS information at once.
         * @returns Boolean success value.
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_gps_info} instead.
         * @throws GLib.Error
         */
        try_get_gps_info(): [boolean, number, number, number];

        /**
         * Query the latitude stored in the GPS tags of `self`
         * @returns Boolean success value
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_gps_altitude} instead.
         * @throws GLib.Error
         */
        try_get_gps_latitude(): [boolean, number];

        /**
         * Query the longitude stored in the GPS tags of `self`
         * @returns Boolean success value
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_gps_longitude} instead.
         * @throws GLib.Error
         */
        try_get_gps_longitude(): [boolean, number];

        /**
         * See <https://en.wikipedia.org/wiki/Iso_speed> for more information.
         * @returns The ISO speed rating as a gint, or 0 if tag is not present or invalid.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_iso_speed} instead.
         * @throws GLib.Error
         */
        try_get_iso_speed(): number;

        /**
         * Composite accessor to query the pixel with stored in the metadata. This
         * might differ from the height of image that is available through
         * {@link Metadata.get_pixel_height}
         * @returns Height of images in pixels as stored in the metadata
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_metadata_pixel_height} instead.
         * @throws GLib.Error
         */
        try_get_metadata_pixel_height(): number;

        /**
         * Composite accessor to query the pixel with stored in the metadata. This
         * might differ from the width of image that is available through
         * {@link Metadata.get_pixel_width}
         * @returns Width of images in pixels as stored in the metadata
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_metadata_pixel_width} instead.
         * @throws GLib.Error
         */
        try_get_metadata_pixel_width(): number;

        /**
         * The EXIF Orientation field
         * @returns A {@link GExiv2.Orientation} value representing the EXIF orientation value.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_orientation} instead.
         * @throws GLib.Error
         */
        try_get_orientation(): Orientation;

        /**
         * Get a preview image from the metadata.
         * @param props A {@link GExiv2.PreviewProperties} instance
         * @returns A {@link GExiv2.PreviewImage} instance for the particular {@link GExiv2.PreviewProperties}.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.get_preview_image} instead.
         * @throws GLib.Error
         */
        try_get_preview_image(props: PreviewProperties): PreviewImage;

        /**
         * An interpreted string is one fit for user display.  It may display units or use formatting
         * appropriate to the type of data the tag holds.
         * 
         * Tags that support multiple values are returned as a single string, with elements separated by ", ".
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @returns The tag's interpreted value as a string
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_interpreted_string} instead.
         * @throws GLib.Error
         */
        try_get_tag_interpreted_string(tag: string): string | null;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @returns The tag's value as a glong
         * @since 0.12.2
         * @deprecated since 0.12.2: Use {@link Metadata.get_tag_long} instead.
         * @throws GLib.Error
         */
        try_get_tag_long(tag: string): number;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @returns The multiple string values of `tag`.  Returns `null` if parameters are `null` or `tag` does not begin with recognised type of metadata ("Exif.", "Xmp." or "Iptc.").  For a well formed `tag`, returns array[0] = `null` if `tag` is undefined or is not set in the current metadata.
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_multiple} instead.
         * @throws GLib.Error
         */
        try_get_tag_multiple(tag: string): string[] | null;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * Tags that support multiple values may be returned as a single byte array, with records separated
         * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
         * @param tag Exiv2 tag name
         * @returns The tag's raw value as a byte array
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_raw} instead.
         * @throws GLib.Error
         */
        try_get_tag_raw(tag: string): GLib.Bytes | null;

        /**
         * Get a string representationf a tag.
         * 
         * Tags that support multiple values are returned as a single string, with elements separated by ", ".
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @returns The tag's value as a string
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.get_tag_string} instead.
         * @throws GLib.Error
         */
        try_get_tag_string(tag: string): string | null;

        /**
         * Get the currently encoded XMP packet (after having called {@link GExiv2.Metadata.try_generate_xmp_packet})
         * @returns `null` if no packet was generated previously, the XMP packet contents otherwise
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.try_get_xmp_packet} instead.
         * @throws GLib.Error
         */
        try_get_xmp_packet(): string | null;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag
         * @returns TRUE if the tag is present.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.has_tag} instead.
         * @throws GLib.Error
         */
        try_has_tag(tag: string): boolean;

        /**
         * This is a composite setter that will set a number of fields to the supplied value.  See
         * {@link Metadata.get_comment} for more information.
         * @param comment Comment string to set. Must not be `null`
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.set_comment} instead.
         * @throws GLib.Error
         */
        try_set_comment(comment: string): void;

        /**
         * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
         * `den` the denominator of the fraction.
         * @param tag The Exiv2 tag
         * @param nom Rational numerator
         * @param den Rational denominator
         * @returns Boolean success value
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.set_exif_tag_rational} instead.
         * @throws GLib.Error
         */
        try_set_exif_tag_rational(tag: string, nom: number, den: number): boolean;

        /**
         * Sets or replaces the EXIF thumbnail with the data in `buffer`.
         * @param buffer A buffer containing thumbnail data
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.set_exif_thumbnail_from_buffer} instead.
         * @throws GLib.Error
         */
        try_set_exif_thumbnail_from_buffer(buffer: Uint8Array | string): void;

        /**
         * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
         * GPS information that is currently set. See {@link Metadata.update_gps_info} for
         * just modifying the GPS data.
         * @param longitude Longitude value to set or replace current value.
         * @param latitude Latitude value to set or replace current value
         * @param altitude Altitude value to set or replace current value
         * @returns Boolean success value.
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.set_gps_info} instead.
         * @throws GLib.Error
         */
        try_set_gps_info(longitude: number, latitude: number, altitude: number): boolean;

        /**
         * Update the image's metadata with `height`
         * @param height The width of the image as it should be put into the metadata.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.set_metadata_pixel_height} instead.
         * @throws GLib.Error
         */
        try_set_metadata_pixel_height(height: number): void;

        /**
         * Composite setter to update the image's metadata with `width`
         * @param width The width of the image as it should be put into the metadata
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.set_metadata_pixel_width} instead.
         * @throws GLib.Error
         */
        try_set_metadata_pixel_width(width: number): void;

        /**
         * The orientation must be valid and cannot be [enum@GExiv2.Orientation.UNSPECIFIED.
         * @param orientation The new {@link GExiv2.Orientation} for the image.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link Metadata.set_orientation} instead.
         * @throws GLib.Error
         */
        try_set_orientation(orientation: Orientation): void;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @param value The value to set or replace the existing value
         * @returns TRUE on success
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.set_tag_long} instead.
         * @throws GLib.Error
         */
        try_set_tag_long(tag: string, value: bigint | number): boolean;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * 
         * All previous `tag` values are erased. For multiple value tags, each of the non `null`
         * entries in `values` is stored. For single value tags, only the last non `null` value
         * is assigned.
         * @param tag Exiv2 tag name
         * @param values An array of values to set or replace the existing value(s)
         * @returns Boolean success value
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.set_tag_multiple} instead.
         * @throws GLib.Error
         */
        try_set_tag_multiple(tag: string, values: string[]): boolean;

        /**
         * Set the value of a tag using a string.
         * 
         * If a tag supports multiple values, then `value` is added to any existing values. For single
         * tags, `value` replaces the value.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @param value The value to set or replace the existing value
         * @returns TRUE on success
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.set_tag_string} instead.
         * @throws GLib.Error
         */
        try_set_tag_string(tag: string, value: string): boolean;

        /**
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag Exiv2 tag name
         * @param type The GExiv2StructureType specifying the type of structure
         * @returns TRUE on success
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.set_xmp_tag_struct} instead.
         * @throws GLib.Error
         */
        try_set_xmp_tag_struct(tag: string, type: StructureType): boolean;

        /**
         * Check whether a tag supports multiple values.
         * 
         * Multiple value tags are Xmp tags of type "XmpAlt", "XmpBag", "XmpSeq" or "LangAlt", or Iptc
         * tags marked as Repeatable (which can be of any Iptc type). There are no multiple value Exif
         * tags.
         * 
         * The Exiv2 Tag Reference can be found at <http://exiv2.org/metadata.html>
         * @param tag An Exiv2 tag
         * @returns Whether `tag` is capable of storing multiple values or not. If `tag` is undefined (i.e. not built-in and not added to `self`), then `error` is set and `false` is returned.
         * @since 0.14.0
         * @deprecated since 0.16.0.: Use {@link GExiv2.Metadata.tag_supports_multiple_values} instead.
         * @throws GLib.Error
         */
        try_tag_supports_multiple_values(tag: string): boolean;

        /**
         * Convenience function to update longitude, latitude and altitude at once.
         * @param longitude Longitude value to set or replace current value
         * @param latitude Latitude value to set or replace current value
         * @param altitude Altitude value to set or replace current value
         * @returns Boolean success value.
         * @since 0.12.2
         * @deprecated since 0.16.0: Use {@link Metadata.update_gps_info} instead.
         * @throws GLib.Error
         */
        try_update_gps_info(longitude: number, latitude: number, altitude: number): boolean;

        /**
         * Convenience function to update longitude, latitude and altitude at once.
         * @param longitude Longitude value to set or replace current value
         * @param latitude Latitude value to set or replace current value
         * @param altitude Altitude value to set or replace current value
         * @returns Boolean success value.
         * @since 0.16.0
         * @throws GLib.Error
         */
        update_gps_info(longitude: number, latitude: number, altitude: number): boolean;
    }


    namespace PreviewImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An accessor to the preview images contained in the image's metadata.
     * 
     * This could be anything from a thumbnail to a full-sized camera development
     * of a RAW image.
     * 
     * The {@link GExiv2.PreviewImage} is obtained by calling `gexiv2_metadata_get_preview_image()`
     * with an instance of {@link GExiv2.PreviewProperties} that are describing the image
     * to be fetched.
     * 
     * ```c
     * GExiv2PreviewProperties **properties, **it;
     * properties = it = gexiv2_metadata_get_preview_properties(metadata);
     * 
     * while (*it) {
     *   preview_image = gexiv2_metadata_get_preview_image(metadata, *it);
     *   it++;
     * }
     * ```
     * @gir-type Class
     */
    class PreviewImage extends GObject.Object {
        static $gtype: GObject.GType<PreviewImage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewImage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreviewImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PreviewImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewImage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreviewImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewImage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreviewImage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreviewImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get a pointer to the image data of the preview image. The returned data is
         * owned by the preview image and must not be freed.
         * @returns The raw image data
         */
        get_data(): Uint8Array;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;

        /**
         * Get the file extension commonly associated with the preview image
         * @returns The preview image's recommended file extension.
         */
        get_extension(): string;

        /**
         * Get the height in pixels
         * @returns The preview image's display height in pixels.
         */
        get_height(): number;

        /**
         * Get the MIME type associated with the preview image.
         * @returns The preview image's MIME type.
         */
        get_mime_type(): string;

        /**
         * Get the width in pixels
         * @returns The preview image's display width in pixels.
         */
        get_width(): number;

        /**
         * Write the preview image to a file in `path`
         * @param path The file path to write the preview image to.
         * @returns The number of bytes written to the file.
         * @since 0.14.0
         * @deprecated since 0.16.0: Use {@link GExiv2.PreviewImage.write_file} instead.
         * @throws GLib.Error
         */
        try_write_file(path: string): number;

        /**
         * Write the preview image to a file in `path`
         * @param path The file path to write the preview image to.
         * @returns The number of bytes written to the file.
         * @since 0.16.0
         * @throws GLib.Error
         */
        write_file(path: string): number;
    }


    namespace PreviewProperties {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Properties of a preview image.
     * 
     * Metadata can contain multiple preview images. {@link GExiv2.PreviewProperties} are
     * used to describe the available image without the need of fetching the whole
     * image from the metadata.
     * @gir-type Class
     */
    class PreviewProperties extends GObject.Object {
        static $gtype: GObject.GType<PreviewProperties>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewProperties.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreviewProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PreviewProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreviewProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreviewProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreviewProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the recommended file extension for the preview image.
         * @returns The recommended file extension for the preview image.
         */
        get_extension(): string;

        /**
         * Get the preview image's display height in pixels.
         * @returns The preview image's display height in pixels.
         */
        get_height(): number;

        /**
         * Get the preview image's content-type.
         * @returns The preview image's MIME type.
         */
        get_mime_type(): string;

        /**
         * Returns the size of the preview image in bytes.
         * @returns The preview image size in bytes.
         */
        get_size(): number;

        /**
         * Get the preview image's display width in pixels
         * @returns The preview image's display width in pixels.
         */
        get_width(): number;
    }


    /**
     * @gir-type Alias
     */
    type MetadataClass = typeof Metadata;

    /**
     * @gir-type Alias
     */
    type PreviewImageClass = typeof PreviewImage;

    /**
     * @gir-type Alias
     */
    type PreviewPropertiesClass = typeof PreviewProperties;

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

export default GExiv2;

// END
