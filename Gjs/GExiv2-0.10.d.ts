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
function initialize(): boolean
function log_get_level(): LogLevel
function log_set_level(level: LogLevel): void
function log_use_glib_logging(): void
/**
 * The log handler can be set by gexiv2_log_set_handler().  When set, the log handler will receive
 * all log messages emitted by Exiv2 and gexiv2.  It's up to the handler to decide where (and if)
 * the images are displayed or stored.
 */
interface LogHandler {
    (level: LogLevel, msg: string): void
}
interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
class Metadata {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.Metadata */
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
     */
    from_app1_segment(data: Uint8Array): boolean
    /**
     * This function does not work and will be removed in a future release.
     */
    from_stream(stream: Gio.InputStream): boolean
    /**
     * Encode the XMP packet as a %NULL-terminated string.
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
     */
    get_tag_interpreted_string(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    get_tag_long(tag: string): number
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_get_tag_multiple() if you want to avoid this and
     * control if and how the error is outputted.
     */
    get_tag_multiple(tag: string): string[] | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values may bereturned as a single byte array, with records separated
     * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
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
     */
    get_tag_string(tag: string): string | null
    get_xmp_packet(): string | null
    get_xmp_tags(): string[]
    has_exif(): boolean
    has_iptc(): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    has_tag(tag: string): boolean
    has_xmp(): boolean
    /**
     * The buffer must be an image format supported by Exiv2.
     */
    open_buf(data: Uint8Array): boolean
    /**
     * The file must be an image format supported by Exiv2.
     */
    open_path(path: string): boolean
    /**
     * Saves the metadata to the specified using an XMP sidecar file.
     */
    save_external(path: string): boolean
    /**
     * Saves the metadata to the specified file by reading the file into memory,copying this object's
     * metadata into the image, then writing the image back out.
     */
    save_file(path: string): boolean
    /**
     * This is a composite setter that will set a number of fields to the supplied value.  See
     * #gexiv2_metadata_get_comment for more information.
     */
    set_comment(comment: string): void
    /**
     * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
     * `den` the denominator of the fraction.
     */
    set_exif_tag_rational(tag: string, nom: number, den: number): boolean
    set_exif_thumbnail_from_buffer(buffer: Uint8Array): void
    /**
     * Sets or replaces the EXIF thumbnail with the image in the file
     */
    set_exif_thumbnail_from_file(path: string): boolean
    /**
     * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
     * GPS information that is currently set. See gexiv2_metadata_update_gps_info() for
     * just modifying the GPS data.
     */
    set_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Update the image's metadata with `height`
     */
    set_metadata_pixel_height(height: number): void
    /**
     * Composite setter to update the image's metadata with `width`
     */
    set_metadata_pixel_width(width: number): void
    /**
     * The orientation must be valid and cannot be #GEXIV2_ORIENTATION_UNSPECIFIED.
     */
    set_orientation(orientation: Orientation): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
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
     */
    set_tag_string(tag: string, value: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    set_xmp_tag_struct(tag: string, type: StructureType): boolean
    /**
     * Removes the Exiv2 tag from the metadata object.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
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
     */
    try_get_tag_interpreted_string(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    try_get_tag_long(tag: string): number
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    try_get_tag_multiple(tag: string): string[] | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values may be returned as a single byte array, with records separated
     * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
     */
    try_get_tag_raw(tag: string): GLib.Bytes | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     */
    try_get_tag_string(tag: string): string | null
    try_get_xmp_packet(): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    try_has_tag(tag: string): boolean
    /**
     * This is a composite setter that will set a number of fields to the supplied value.  See
     * #gexiv2_metadata_get_comment for more information.
     */
    try_set_comment(comment: string): void
    /**
     * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
     * `den` the denominator of the fraction.
     */
    try_set_exif_tag_rational(tag: string, nom: number, den: number): boolean
    try_set_exif_thumbnail_from_buffer(buffer: Uint8Array): void
    /**
     * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
     * GPS information that is currently set. See gexiv2_metadata_update_gps_info() for
     * just modifying the GPS data.
     */
    try_set_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Update the image's metadata with `height`
     */
    try_set_metadata_pixel_height(height: number): void
    /**
     * Composite setter to update the image's metadata with `width`
     */
    try_set_metadata_pixel_width(width: number): void
    /**
     * The orientation must be valid and cannot be #GEXIV2_ORIENTATION_UNSPECIFIED.
     */
    try_set_orientation(orientation: Orientation): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    try_set_tag_long(tag: string, value: number): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * All previous `tag` values are erased. For multiple value tags, each of the non %NULL
     * entries in `values` is stored. For single value tags, only the last non %NULL value
     * is assigned.
     */
    try_set_tag_multiple(tag: string, values: string[]): boolean
    /**
     * If a tag supports multiple values, then `value` is added to any existing values. For single
     * tags, `value` replaces the value.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    try_set_tag_string(tag: string, value: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    try_set_xmp_tag_struct(tag: string, type: StructureType): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="https://www.exiv2.org/metadata.html"></ulink>
     * 
     * Multiple value tags are Xmp tags of type "XmpAlt", "XmpBag", "XmpSeq" or "LangAlt", or Iptc
     * tags marked as Repeatable (which can be of any Iptc type). There are no multiple value Exif
     * tags.
     */
    try_tag_supports_multiple_values(tag: string): boolean
    /**
     * Convenience function to update longitude, latitude and altitude at once.
     */
    try_update_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Convenience function to update longitude, latitude and altitude at once.
     */
    update_gps_info(longitude: number, latitude: number, altitude: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Metadata
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static get_tag_description(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static get_tag_label(tag: string): string | null
    /**
     * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
     * <ulink url="http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c"></ulink>
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static get_tag_type(tag: string): string | null
    static get_xmp_namespace_for_tag(tag: string): string
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static is_exif_tag(tag: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static is_iptc_tag(tag: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static is_xmp_tag(tag: string): boolean
    static register_xmp_namespace(name: string, prefix: string): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static try_get_tag_description(tag: string): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static try_get_tag_label(tag: string): string | null
    /**
     * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
     * <ulink url="http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c"></ulink>
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     */
    static try_get_tag_type(tag: string): string | null
    static try_get_xmp_namespace_for_tag(tag: string): string
    static try_register_xmp_namespace(name: string, prefix: string): boolean
    static try_unregister_all_xmp_namespaces(): void
    static try_unregister_xmp_namespace(name: string): boolean
    static unregister_all_xmp_namespaces(): void
    static unregister_xmp_namespace(name: string): boolean
    static $gtype: GObject.Type
}
interface PreviewImage_ConstructProps extends GObject.Object_ConstructProps {
}
class PreviewImage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.PreviewImage */
    /**
     * Releases the preview image and all associated memory.
     */
    free(): void
    get_data(): Uint8Array
    get_extension(): string
    get_height(): number
    get_mime_type(): string
    get_width(): number
    try_write_file(path: string): number
    write_file(path: string): number
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: PreviewImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewImage_ConstructProps)
    _init (config?: PreviewImage_ConstructProps): void
    static $gtype: GObject.Type
}
interface PreviewProperties_ConstructProps extends GObject.Object_ConstructProps {
}
class PreviewProperties {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.PreviewProperties */
    get_extension(): string
    get_height(): number
    get_mime_type(): string
    get_size(): number
    get_width(): number
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: PreviewProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewProperties_ConstructProps)
    _init (config?: PreviewProperties_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class MetadataClass {
    /* Fields of GExiv2-0.10.GExiv2.MetadataClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MetadataPrivate {
    static name: string
}
abstract class PreviewImageClass {
    /* Fields of GExiv2-0.10.GExiv2.PreviewImageClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class PreviewImagePrivate {
    static name: string
}
abstract class PreviewPropertiesClass {
    /* Fields of GExiv2-0.10.GExiv2.PreviewPropertiesClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class PreviewPropertiesPrivate {
    static name: string
}
}
export default GExiv2;