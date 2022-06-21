// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GExiv2-0.10
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GExiv2 {

/**
 * Options to control the byte order of binary EXIF data exports
 */
enum ByteOrder {
    /**
     * Use little-endian byte order
     */
    LITTLE,
    /**
     * Use big-endian byte order
     */
    BIG,
}
/**
 * GExiv2 log levels
 */
enum LogLevel {
    /**
     * Log level for debugging
     */
    DEBUG,
    /**
     * Log level for informational messages
     */
    INFO,
    /**
     * Log level for warning messages
     */
    WARN,
    /**
     * Log level for error messages
     */
    ERROR,
    /**
     * Suppress all log messages
     */
    MUTE,
}
/**
 * The orientation of an image is defined as the location of it's x,y origin.  More than rotation,
 * orientation allows for every variation of rotation, flips, and mirroring to be described in
 * 3 bits of data.
 * 
 * A handy primer to orientation can be found at
 * <ulink url="http://jpegclub.org/exif_orientation.html"></ulink>
 */
enum Orientation {
    /**
     * The orientation of the image is unknown
     */
    UNSPECIFIED,
    /**
     * The orientation of the image is without any rotation.
     */
    NORMAL,
    /**
     * The image is flipped on its horizontal axis
     */
    HFLIP,
    /**
     * The image is rotated by 180 degrees
     */
    ROT_180,
    /**
     * The Image is flipped on its vertical axis
     */
    VFLIP,
    /**
     * The image is rotated by 90 degrees clockwise and flipped on its horizontal axis
     */
    ROT_90_HFLIP,
    /**
     * The image is rotated by 90 degrees clockwise
     */
    ROT_90,
    /**
     * The image is rotated by 90 degrees clockwise and flipped on its vertical axis
     */
    ROT_90_VFLIP,
    /**
     * The image is rotated 270 degrees clockwise
     */
    ROT_270,
}
/**
 * Used in gexiv2_metadata_set_xmp_tag_struct() to determine the array type
 */
enum StructureType {
    /**
     * Structure is not an array
     */
    NONE,
    /**
     * A list of alternative values
     */
    ALT,
    /**
     * An unordered list of values
     */
    BAG,
    /**
     * An ordered list of values
     */
    SEQ,
    /**
     * Not supported. For completeness only
     */
    LANG,
}
/**
 * Options to control the format of the serialized XMP packet
 * Taken from: exiv2/src/xmp.hpp
 * @bitfield 
 */
enum XmpFormatFlags {
    /**
     * Omit the XML packet wrapper.
     */
    OMIT_PACKET_WRAPPER,
    /**
     * Default is a writeable packet.
     */
    READ_ONLY_PACKET,
    /**
     * Use a compact form of RDF.
     */
    USE_COMPACT_FORMAT,
    /**
     * Include a padding allowance for a thumbnail image.
     */
    INCLUDE_THUMBNAIL_PAD,
    /**
     * The padding parameter is the overall packet length.
     */
    EXACT_PACKET_LENGTH,
    /**
     * Show aliases as XML comments.
     */
    WRITE_ALIAS_COMMENTS,
    /**
     * Omit all formatting whitespace.
     */
    OMIT_ALL_FORMATTING,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function get_version(): number
/**
 * gexiv2 requires initialization before its methods are used.  In particular, this call must be
 * made in a thread-safe fashion.  Best practice is to call from the application's main thread and
 * not to use any Gexiv2 code until it has returned.
 */
function initialize(): boolean
function log_get_level(): LogLevel
/**
 * Log messages below this level will not be logged.
 * @param level The #GExiv2LogLevel gexiv2 should respect.
 */
function log_set_level(level: LogLevel): void
/**
 * When called, gexiv2 will install it's own #GExiv2LogHandler which redirects all Exiv2 and gexiv2
 * log messages to GLib's logging calls (g_debug(), g_message(), g_warning(), and g_critical() for the
 * respective #GExiv2LogLevel value).  #GEXIV2_LOG_LEVEL_MUTE logs are dropped.
 * 
 * One advantage to using this is that GLib's logging control and handlers can be used rather than
 * GExiv2's ad hoc scheme.  It also means an application can use GLib logging and have all its
 * messages routed through the same calls.
 */
function log_use_glib_logging(): void
/**
 * The log handler can be set by gexiv2_log_set_handler().  When set, the log handler will receive
 * all log messages emitted by Exiv2 and gexiv2.  It's up to the handler to decide where (and if)
 * the images are displayed or stored.
 * @callback 
 * @param level The #GExiv2LogLevel for the particular message
 * @param msg The log message
 */
interface LogHandler {
    (level: LogLevel, msg: string): void
}
interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}

interface Metadata {

    // Own fields of GExiv2-0.10.GExiv2.Metadata

    parent_instance: GObject.Object

    // Owm methods of GExiv2-0.10.GExiv2.Metadata

    /**
     * Removes all tags for all domains (EXIF, IPTC, and XMP).
     */
    clear(): void
    /**
     * This is a composite clear method that will clear a number of fields.  See
     * #gexiv2_metadata_get_comment for more information.
     */
    clear_comment(): void
    /**
     * Clears all EXIF metadata from the loaded image.
     */
    clear_exif(): void
    /**
     * Clears all IPTC metadata from the loaded image.
     */
    clear_iptc(): void
    /**
     * Removes the Exiv2 tag from the metadata object.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     */
    clear_tag(tag: string): boolean
    /**
     * Clears all XMP metadata from the loaded image.
     */
    clear_xmp(): void
    /**
     * Removes all GPS metadata from the loaded image
     */
    delete_gps_info(): void
    /**
     * Removes the EXIF thumbnail from the loaded image.
     */
    erase_exif_thumbnail(): void
    /**
     * Destroys the #GExiv2Metadata object and frees all associated memory.
     */
    free(): void
    /**
     * Load only an EXIF buffer, typically stored in a JPEG's APP1 segment.
     * @param data A buffer containing the data to be read
     */
    from_app1_segment(data: Uint8Array): boolean
    /**
     * This function does not work and will be removed in a future release.
     * @param stream 
     */
    from_stream(stream: Gio.InputStream): boolean
    /**
     * Encode the XMP packet as a %NULL-terminated string.
     * @param xmp_format_flags One of #GExiv2XmpFormatFlags
     * @param padding The padding (FIXME: Add documentation)
     */
    generate_xmp_packet(xmp_format_flags: XmpFormatFlags, padding: number): string | null
    /**
     * A composite accessor that uses the first available metadata field from a list of well-known
     * locations to find the photo's comment (or description).
     * 
     * MWG guidelines refer to these as <emphasis>Description</emphasis>: a textual description of a resource's content.
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
     */
    get_comment(): string | null
    get_exif_data(byte_order: ByteOrder): GLib.Bytes | null
    /**
     * Fetch EXIF `tag` represented by a fraction. `nom` will contain the numerator,
     * `den` the denominator of the fraction on successful return.
     * @param tag The tag you want the rational value for
     */
    get_exif_tag_rational(tag: string): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * Query `self` for a list of available EXIF tags
     */
    get_exif_tags(): string[]
    /**
     * Get the thumbnail stored in the EXIF data of `self`
     */
    get_exif_thumbnail(): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    /**
     * Returns the exposure time in seconds (shutter speed, <emphasis>not</emphasis> date-time of exposure) as a
     * rational.  See <ulink url="https://en.wikipedia.org/wiki/Shutter_speed"></ulink> for more information.
     */
    get_exposure_time(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/F-number"></ulink> for more information.
     * If Exif.Photo.FNumber does not exist, it will fall back to calculating the FNumber from
     * Exif.Photo.ApertureValue (if available);
     */
    get_fnumber(): number
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Flange_focal_distance"></ulink> for more information.
     */
    get_focal_length(): number
    /**
     * Convenience function to query the altitude stored in the GPS tags of the
     * image
     */
    get_gps_altitude(): [ /* returnType */ boolean, /* altitude */ number ]
    /**
     * Convenience function to query all available GPS information at once.
     */
    get_gps_info(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    /**
     * Query the latitude stored in the GPS tags of `self`
     */
    get_gps_latitude(): [ /* returnType */ boolean, /* latitude */ number ]
    /**
     * Query the longitude stored in the GPS tags of `self`
     */
    get_gps_longitude(): [ /* returnType */ boolean, /* longitude */ number ]
    /**
     * Query `self` for a list of available IPTC tags
     */
    get_iptc_tags(): string[]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Iso_speed"></ulink> for more information.
     */
    get_iso_speed(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the height of image that is available through
     * gexiv2_metadata_get_pixel_height()
     */
    get_metadata_pixel_height(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the width of image that is available through
     * gexiv2_metadata_get_pixel_width()
     */
    get_metadata_pixel_width(): number
    /**
     * Query mime type of currently loaded image.
     */
    get_mime_type(): string
    /**
     * The EXIF Orientation field
     */
    get_orientation(): Orientation
    /**
     * Get the <emphasis>actual</emphasis> unoriented display height in pixels of the loaded image.  This may
     * be different than the height reported by various metadata tags, i.e. "Exif.Photo.PixelYDimension".
     */
    get_pixel_height(): number
    /**
     * Get the <emphasis>actual</emphasis> unoriented display width in pixels of the loaded
     * image. May be different than the width reported by various metadata tags,
     * i.e. "Exif.Photo.PixelXDimension".
     */
    get_pixel_width(): number
    get_preview_image(props: PreviewProperties): PreviewImage
    /**
     * An image may have stored one or more previews, often of different qualities, sometimes of
     * different image formats than the containing image.  This call returns the properties of all
     * previews Exiv2 finds within the loaded image.  Use #gexiv2_metadata_get_preview_image to
     * load a particular preview into memory.
     */
    get_preview_properties(): PreviewProperties[] | null
    /**
     * Query `self` whether it supports writing EXIF metadata.
     */
    get_supports_exif(): boolean
    /**
     * Query `self` whether it supports writing IPTC metadata.
     */
    get_supports_iptc(): boolean
    /**
     * Query `self` whether it supports writing XMP metadata.
     */
    get_supports_xmp(): boolean
    /**
     * An interpreted string is one fit for user display.  It may display units or use formatting
     * appropriate to the type of data the tag holds.
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     */
    get_tag_interpreted_string(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     */
    get_tag_long(tag: string): number
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_get_tag_multiple() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     */
    get_tag_multiple(tag: string): string[] | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values may bereturned as a single byte array, with records separated
     * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
     * @param tag Exiv2 tag name
     */
    get_tag_raw(tag: string): GLib.Bytes | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_get_tag_string() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     */
    get_tag_string(tag: string): string | null
    get_xmp_packet(): string | null
    get_xmp_tags(): string[]
    has_exif(): boolean
    has_iptc(): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     */
    has_tag(tag: string): boolean
    has_xmp(): boolean
    /**
     * The buffer must be an image format supported by Exiv2.
     * @param data A buffer containing the data to be read
     */
    open_buf(data: Uint8Array): boolean
    /**
     * The file must be an image format supported by Exiv2.
     * @param path Path to the file you want to open
     */
    open_path(path: string): boolean
    /**
     * Saves the metadata to the specified using an XMP sidecar file.
     * @param path Path to the file you want to save to.
     */
    save_external(path: string): boolean
    /**
     * Saves the metadata to the specified file by reading the file into memory,copying this object's
     * metadata into the image, then writing the image back out.
     * @param path Path to the file you want to save to.
     */
    save_file(path: string): boolean
    /**
     * This is a composite setter that will set a number of fields to the supplied value.  See
     * #gexiv2_metadata_get_comment for more information.
     * @param comment Comment string to set. Must not be %NULL
     */
    set_comment(comment: string): void
    /**
     * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
     * `den` the denominator of the fraction.
     * @param tag The Exiv2 tag
     * @param nom Rational numerator
     * @param den Rational denominator
     */
    set_exif_tag_rational(tag: string, nom: number, den: number): boolean
    set_exif_thumbnail_from_buffer(buffer: Uint8Array): void
    /**
     * Sets or replaces the EXIF thumbnail with the image in the file
     * @param path Path of image file
     */
    set_exif_thumbnail_from_file(path: string): boolean
    /**
     * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
     * GPS information that is currently set. See gexiv2_metadata_update_gps_info() for
     * just modifying the GPS data.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     */
    set_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Update the image's metadata with `height`
     * @param height The width of the image as it should be put into the metadata.
     */
    set_metadata_pixel_height(height: number): void
    /**
     * Composite setter to update the image's metadata with `width`
     * @param width The width of the image as it should be put into the metadata
     */
    set_metadata_pixel_width(width: number): void
    /**
     * The orientation must be valid and cannot be #GEXIV2_ORIENTATION_UNSPECIFIED.
     * @param orientation The new #GExiv2Orientation for the image.
     */
    set_orientation(orientation: Orientation): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     */
    set_tag_long(tag: string, value: number): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * All previous `tag` values are erased. For multiple value tags, each of the non %NULL
     * entries in `values` is stored. For single value tags, only the last non %NULL value
     * is assigned.
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_set_tag_multiple() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     * @param values An array of values to set or replace the existing value(s)
     */
    set_tag_multiple(tag: string, values: string[]): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * If a tag supports multiple values, then `value` is added to any existing values. For single
     * value tags, `value` replaces the value.
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_set_tag_string() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     */
    set_tag_string(tag: string, value: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param type The GExiv2StructureType specifying the type of structure
     */
    set_xmp_tag_struct(tag: string, type: StructureType): boolean
    /**
     * Removes the Exiv2 tag from the metadata object.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     */
    try_clear_tag(tag: string): boolean
    /**
     * Removes all GPS metadata from the loaded image
     */
    try_delete_gps_info(): void
    /**
     * Removes the EXIF thumbnail from the loaded image.
     */
    try_erase_exif_thumbnail(): void
    /**
     * Encode the XMP packet as a %NULL-terminated string.
     * @param xmp_format_flags One of #GExiv2XmpFormatFlags
     * @param padding The padding (FIXME: Add documentation)
     */
    try_generate_xmp_packet(xmp_format_flags: XmpFormatFlags, padding: number): string | null
    /**
     * A composite accessor that uses the first available metadata field from a list of well-known
     * locations to find the photo's comment (or description).
     * 
     * MWG guidelines refer to these as <emphasis>Description</emphasis>: a textual description of a resource's content.
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
     */
    try_get_comment(): string | null
    /**
     * Fetch EXIF `tag` represented by a fraction. `nom` will contain the numerator,
     * `den` the denominator of the fraction on successful return.
     * @param tag The tag you want the rational value for
     */
    try_get_exif_tag_rational(tag: string): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * Returns the exposure time in seconds (shutter speed, <emphasis>not</emphasis> date-time of exposure) as a
     * rational.  See <ulink url="https://en.wikipedia.org/wiki/Shutter_speed"></ulink> for more information.
     */
    try_get_exposure_time(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/F-number"></ulink> for more information.
     * If Exif.Photo.FNumber does not exist, it will fall back to calculating the FNumber from
     * Exif.Photo.ApertureValue (if available);
     */
    try_get_fnumber(): number
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Flange_focal_distance"></ulink> for more information.
     */
    try_get_focal_length(): number
    /**
     * Convenience function to query the altitude stored in the GPS tags of the
     * image
     */
    try_get_gps_altitude(): [ /* returnType */ boolean, /* altitude */ number ]
    /**
     * Convenience function to query all available GPS information at once.
     */
    try_get_gps_info(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    /**
     * Query the latitude stored in the GPS tags of `self`
     */
    try_get_gps_latitude(): [ /* returnType */ boolean, /* latitude */ number ]
    /**
     * Query the longitude stored in the GPS tags of `self`
     */
    try_get_gps_longitude(): [ /* returnType */ boolean, /* longitude */ number ]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Iso_speed"></ulink> for more information.
     */
    try_get_iso_speed(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the height of image that is available through
     * gexiv2_metadata_get_pixel_height()
     */
    try_get_metadata_pixel_height(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the width of image that is available through
     * gexiv2_metadata_get_pixel_width()
     */
    try_get_metadata_pixel_width(): number
    /**
     * The EXIF Orientation field
     */
    try_get_orientation(): Orientation
    try_get_preview_image(props: PreviewProperties): PreviewImage
    /**
     * An interpreted string is one fit for user display.  It may display units or use formatting
     * appropriate to the type of data the tag holds.
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     */
    try_get_tag_interpreted_string(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     */
    try_get_tag_long(tag: string): number
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     */
    try_get_tag_multiple(tag: string): string[] | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values may be returned as a single byte array, with records separated
     * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
     * @param tag Exiv2 tag name
     */
    try_get_tag_raw(tag: string): GLib.Bytes | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * @param tag Exiv2 tag name
     */
    try_get_tag_string(tag: string): string | null
    try_get_xmp_packet(): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     */
    try_has_tag(tag: string): boolean
    /**
     * This is a composite setter that will set a number of fields to the supplied value.  See
     * #gexiv2_metadata_get_comment for more information.
     * @param comment Comment string to set. Must not be %NULL
     */
    try_set_comment(comment: string): void
    /**
     * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
     * `den` the denominator of the fraction.
     * @param tag The Exiv2 tag
     * @param nom Rational numerator
     * @param den Rational denominator
     */
    try_set_exif_tag_rational(tag: string, nom: number, den: number): boolean
    try_set_exif_thumbnail_from_buffer(buffer: Uint8Array): void
    /**
     * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
     * GPS information that is currently set. See gexiv2_metadata_update_gps_info() for
     * just modifying the GPS data.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     */
    try_set_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Update the image's metadata with `height`
     * @param height The width of the image as it should be put into the metadata.
     */
    try_set_metadata_pixel_height(height: number): void
    /**
     * Composite setter to update the image's metadata with `width`
     * @param width The width of the image as it should be put into the metadata
     */
    try_set_metadata_pixel_width(width: number): void
    /**
     * The orientation must be valid and cannot be #GEXIV2_ORIENTATION_UNSPECIFIED.
     * @param orientation The new #GExiv2Orientation for the image.
     */
    try_set_orientation(orientation: Orientation): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     */
    try_set_tag_long(tag: string, value: number): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * All previous `tag` values are erased. For multiple value tags, each of the non %NULL
     * entries in `values` is stored. For single value tags, only the last non %NULL value
     * is assigned.
     * @param tag Exiv2 tag name
     * @param values An array of values to set or replace the existing value(s)
     */
    try_set_tag_multiple(tag: string, values: string[]): boolean
    /**
     * If a tag supports multiple values, then `value` is added to any existing values. For single
     * tags, `value` replaces the value.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     */
    try_set_tag_string(tag: string, value: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param type The GExiv2StructureType specifying the type of structure
     */
    try_set_xmp_tag_struct(tag: string, type: StructureType): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="https://www.exiv2.org/metadata.html"></ulink>
     * 
     * Multiple value tags are Xmp tags of type "XmpAlt", "XmpBag", "XmpSeq" or "LangAlt", or Iptc
     * tags marked as Repeatable (which can be of any Iptc type). There are no multiple value Exif
     * tags.
     * @param tag An Exiv2 tag
     */
    try_tag_supports_multiple_values(tag: string): boolean
    /**
     * Convenience function to update longitude, latitude and altitude at once.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     */
    try_update_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Convenience function to update longitude, latitude and altitude at once.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     */
    update_gps_info(longitude: number, latitude: number, altitude: number): boolean

    // Class property signals of GExiv2-0.10.GExiv2.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object holding all the Exiv2 metadata.  Previews, if present, are also available.
 * 
 * As gexiv2 is only a wrapper around Exiv2, it's better to read its documentation to understand
 * the full scope of what it offers: <ulink url="http://www.exiv2.org/"></ulink>
 * 
 * In particular, rather than providing a getter/setter method pair for every metadata value
 * available for images (of which there are thousands), Exiv2 uses a dotted addressing scheme.
 * For example, to access a photo's EXIF Orientation field, the caller passes to Exiv2
 * "Exif.Photo.Orientation".  These <emphasis>tags</emphasis> (in Exiv2 parlance) are key to using Exiv2 (and
 * therefore gexiv2) to its fullest.
 * 
 * A full reference for all supported Exiv2 tags can be found at
 * <ulink url="http://www.exiv2.org/metadata.html"></ulink>
 * @class 
 */
class Metadata extends GObject.Object {

    // Own properties of GExiv2-0.10.GExiv2.Metadata

    static name: string
    static $gtype: GObject.GType<Metadata>

    // Constructors of GExiv2-0.10.GExiv2.Metadata

    constructor(config?: Metadata_ConstructProps) 
    constructor() 
    static new(): Metadata
    _init(config?: Metadata_ConstructProps): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static get_tag_description(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static get_tag_label(tag: string): string | null
    /**
     * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
     * <ulink url="http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c"></ulink>
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static get_tag_type(tag: string): string | null
    static get_xmp_namespace_for_tag(tag: string): string
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static is_exif_tag(tag: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static is_iptc_tag(tag: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static is_xmp_tag(tag: string): boolean
    static register_xmp_namespace(name: string, prefix: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static try_get_tag_description(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static try_get_tag_label(tag: string): string | null
    /**
     * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
     * <ulink url="http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c"></ulink>
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     */
    static try_get_tag_type(tag: string): string | null
    static try_get_xmp_namespace_for_tag(tag: string): string
    static try_register_xmp_namespace(name: string, prefix: string): boolean
    static try_unregister_all_xmp_namespaces(): void
    static try_unregister_xmp_namespace(name: string): boolean
    static unregister_all_xmp_namespaces(): void
    static unregister_xmp_namespace(name: string): boolean
}

interface PreviewImage_ConstructProps extends GObject.Object_ConstructProps {
}

interface PreviewImage {

    // Own fields of GExiv2-0.10.GExiv2.PreviewImage

    parent_instance: GObject.Object

    // Owm methods of GExiv2-0.10.GExiv2.PreviewImage

    /**
     * Releases the preview image and all associated memory.
     */
    free(): void
    get_data(): Uint8Array

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): Uint8Array | object | null | any
    get_extension(): string
    get_height(): number
    get_mime_type(): string
    get_width(): number
    try_write_file(path: string): number
    write_file(path: string): number

    // Class property signals of GExiv2-0.10.GExiv2.PreviewImage

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreviewImage extends GObject.Object {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImage

    static name: string
    static $gtype: GObject.GType<PreviewImage>

    // Constructors of GExiv2-0.10.GExiv2.PreviewImage

    constructor(config?: PreviewImage_ConstructProps) 
    _init(config?: PreviewImage_ConstructProps): void
}

interface PreviewProperties_ConstructProps extends GObject.Object_ConstructProps {
}

interface PreviewProperties {

    // Own fields of GExiv2-0.10.GExiv2.PreviewProperties

    parent_instance: GObject.Object

    // Owm methods of GExiv2-0.10.GExiv2.PreviewProperties

    get_extension(): string
    get_height(): number
    get_mime_type(): string
    get_size(): number
    get_width(): number

    // Class property signals of GExiv2-0.10.GExiv2.PreviewProperties

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreviewProperties extends GObject.Object {

    // Own properties of GExiv2-0.10.GExiv2.PreviewProperties

    static name: string
    static $gtype: GObject.GType<PreviewProperties>

    // Constructors of GExiv2-0.10.GExiv2.PreviewProperties

    constructor(config?: PreviewProperties_ConstructProps) 
    _init(config?: PreviewProperties_ConstructProps): void
}

interface MetadataClass {

    // Own fields of GExiv2-0.10.GExiv2.MetadataClass

    parent_class: GObject.ObjectClass
}

abstract class MetadataClass {

    // Own properties of GExiv2-0.10.GExiv2.MetadataClass

    static name: string
}

interface MetadataPrivate {
}

class MetadataPrivate {

    // Own properties of GExiv2-0.10.GExiv2.MetadataPrivate

    static name: string
}

interface PreviewImageClass {

    // Own fields of GExiv2-0.10.GExiv2.PreviewImageClass

    parent_class: GObject.ObjectClass
}

abstract class PreviewImageClass {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImageClass

    static name: string
}

interface PreviewImagePrivate {
}

class PreviewImagePrivate {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImagePrivate

    static name: string
}

interface PreviewPropertiesClass {

    // Own fields of GExiv2-0.10.GExiv2.PreviewPropertiesClass

    parent_class: GObject.ObjectClass
}

abstract class PreviewPropertiesClass {

    // Own properties of GExiv2-0.10.GExiv2.PreviewPropertiesClass

    static name: string
}

interface PreviewPropertiesPrivate {
}

class PreviewPropertiesPrivate {

    // Own properties of GExiv2-0.10.GExiv2.PreviewPropertiesPrivate

    static name: string
}

}
export default GExiv2;