// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Colord-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Colord {

/**
 * Errors that can be thrown
 */
enum ClientError {
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The profile already exists
     */
    ALREADY_EXISTS,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * Feature not supported
     */
    NOT_SUPPORTED,
    /**
     * Profile or device not found
     */
    NOT_FOUND,
    /**
     * One or more of the parameters is invalid
     */
    INPUT_INVALID,
    /**
     * The file if invalid
     */
    FILE_INVALID,
}
/**
 * Flags used when returning an RGB color from a temperature.
 */
enum ColorBlackbodyFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Use Planckian below 5000K
     */
    USE_PLANCKIAN,
}
/**
 * The known colorspace.
 */
enum Colorspace {
    UNKNOWN,
    XYZ,
    LAB,
    LUV,
    YCBCR,
    YXY,
    RGB,
    GRAY,
    HSV,
    CMYK,
    CMY,
}
/**
 * Errors that can be thrown
 */
enum DeviceError {
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The profile does not exist
     */
    PROFILE_DOES_NOT_EXIST,
    /**
     * The profile has already been added
     */
    PROFILE_ALREADY_ADDED,
    /**
     * The device is being profiled
     */
    PROFILING,
    /**
     * Nothing matched the search term
     */
    NOTHING_MATCHED,
    /**
     * Cound not inhibit device
     */
    FAILED_TO_INHIBIT,
    /**
     * Cound not uninhibit device
     */
    FAILED_TO_UNINHIBIT,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * The device has been disabled
     */
    NOT_ENABLED,
}
/**
 * The device type.
 */
enum DeviceKind {
    UNKNOWN,
    DISPLAY,
    SCANNER,
    PRINTER,
    CAMERA,
    WEBCAM,
}
/**
 * The device mode.
 */
enum DeviceMode {
    UNKNOWN,
    PHYSICAL,
    VIRTUAL,
}
/**
 * The device to profile relationship.
 */
enum DeviceRelation {
    UNKNOWN,
    SOFT,
    HARD,
}
/**
 * The ICC error code.
 */
enum IccError {
    /**
     * Failed to open file
     */
    FAILED_TO_OPEN,
    /**
     * Failed to parse data
     */
    FAILED_TO_PARSE,
    /**
     * Locale was invalid
     */
    INVALID_LOCALE,
    /**
     * No data to read
     */
    NO_DATA,
    /**
     * Failed to save file
     */
    FAILED_TO_SAVE,
    /**
     * Failed to create file
     */
    FAILED_TO_CREATE,
    /**
     * Invalid colorspace
     */
    INVALID_COLORSPACE,
    /**
     * Corruption has been detected
     */
    CORRUPTION_DETECTED,
    /**
     * Something inside LCMS broke
     */
    INTERNAL,
}
/**
 * Flags used when saving an ICC profile.
 */
enum IccSaveFlags {
    /**
     * No flags set.
     */
    NONE,
}
/**
 * Errors that can be thrown
 */
enum It8Error {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    INVALID_FORMAT,
    UNKNOWN_KIND,
}
/**
 * The kind of IT8 file.
 */
enum It8Kind {
    UNKNOWN,
    TI1,
    TI3,
    CCMX,
    CAL,
    CCSS,
    SPECT,
    CMF,
}
/**
 * The options type.
 */
enum ObjectScope {
    UNKNOWN,
    NORMAL,
    TEMP,
    DISK,
}
/**
 * Errors that can be thrown
 */
enum ProfileError {
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The profile is already installed
     */
    ALREADY_INSTALLED,
    /**
     * The profile could not be written
     */
    FAILED_TO_WRITE,
    /**
     * The profile could not be parsed
     */
    FAILED_TO_PARSE,
    /**
     * The profile could not be read
     */
    FAILED_TO_READ,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * One or more of the properties was invalid
     */
    PROPERTY_INVALID,
    /**
     * Failed to get UID for sender
     */
    FAILED_TO_GET_UID,
}
/**
 * The profile type.
 */
enum ProfileKind {
    UNKNOWN,
    INPUT_DEVICE,
    DISPLAY_DEVICE,
    OUTPUT_DEVICE,
    DEVICELINK,
    COLORSPACE_CONVERSION,
    ABSTRACT,
    NAMED_COLOR,
}
/**
 * The quality of the profile produced through calibration.
 */
enum ProfileQuality {
    /**
     * Low quality profile, fast
     */
    LOW,
    /**
     * Medium quality profile
     */
    MEDIUM,
    /**
     * High quality profile, slow
     */
    HIGH,
}
/**
 * The warning about the profile. Profiles with warnings can still be
 * used, but may be of limited use.
 */
enum ProfileWarning {
    /**
     * No error is found
     */
    NONE,
    /**
     * The description is missing or of zero length
     */
    DESCRIPTION_MISSING,
    /**
     * The copyright is missing or of zero length
     */
    COPYRIGHT_MISSING,
    /**
     * The video card gamma table is not monotonic
     */
    VCGT_NON_MONOTONIC,
    /**
     * Lab 100, 0, 0 does not map to RGB 255,255,255
     */
    SCUM_DOT,
    /**
     * There is significant a/b for gray
     */
    GRAY_AXIS_INVALID,
    /**
     * The gray ramp is not monotonic
     */
    GRAY_AXIS_NON_MONOTONIC,
    /**
     * One or more of the primaries are invalid
     */
    PRIMARIES_INVALID,
    /**
     * The primaries to not add to give D50 white
     */
    PRIMARIES_NON_ADDITIVE,
    /**
     * One or more of the primaries are outside of ROMM RGB
     */
    PRIMARIES_UNLIKELY,
    /**
     * RGB 255,255,255 does not return D50
     */
    WHITEPOINT_INVALID,
    /**
     * Whitepoint is outside of usual range
     */
    WHITEPOINT_UNLIKELY,
}
/**
 * The rendering intent.
 */
enum RenderingIntent {
    /**
     * Unknown rendering intent
     */
    UNKNOWN,
    /**
     * Used for photos as it maintains contrast
     */
    PERCEPTUAL,
    /**
     * Used for graphic design and named colors
     */
    RELATIVE_COLORIMETRIC,
    /**
     * Used for business charts as it maintains saturation without dithering
     */
    SATURATION,
    /**
     * Used when a specific color is required
     */
    ABSOLUTE_COLORIMETRIC,
}
/**
 * The sensor capabilities, i.e. things the sensor can do.
 */
enum SensorCap {
    UNKNOWN,
    LCD,
    CRT,
    PRINTER,
    SPOT,
    PROJECTOR,
    AMBIENT,
    CALIBRATION,
    LED,
    PLASMA,
    LCD_CCFL,
    LCD_RGB_LED,
    LCD_WHITE_LED,
    WIDE_GAMUT_LCD_CCFL,
    WIDE_GAMUT_LCD_RGB_LED,
    SPECTRAL,
    CALIBRATION_DARK,
    CALIBRATION_IRRADIANCE,
}
/**
 * The sensor error code.
 */
enum SensorError {
    /**
     * This action is unsupported on this hardware
     */
    NO_SUPPORT,
    /**
     * The sensor provided no data
     */
    NO_DATA,
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The sensor is already locked
     */
    ALREADY_LOCKED,
    /**
     * The sensor is not locked
     */
    NOT_LOCKED,
    /**
     * The sensor is already in use
     */
    IN_USE,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * The sensor needs to be in the calibrate position
     */
    REQUIRED_POSITION_CALIBRATE,
    /**
     * The sensor needs to be in the surface position
     */
    REQUIRED_POSITION_SURFACE,
    /**
     * The sensor needs dark calibration
     */
    REQUIRED_DARK_CALIBRATION,
    /**
     * The sensor needs irradiance calibration
     */
    REQUIRED_IRRADIANCE_CALIBRATION,
}
/**
 * The sensor type.
 */
enum SensorKind {
    UNKNOWN,
    DUMMY,
    HUEY,
    COLOR_MUNKI_PHOTO,
    SPYDER,
    DTP20,
    DTP22,
    DTP41,
    DTP51,
    DTP94,
    SPECTRO_SCAN,
    I1_PRO,
    COLORIMTRE_HCFR,
    I1_DISPLAY3,
    COLORHUG,
    SPYDER2,
    SPYDER3,
    COLORHUG_PLUS,
    I1_DISPLAY1,
    I1_DISPLAY2,
    DTP92,
    I1_MONITOR,
    SPYDER4,
    COLOR_MUNKI_SMILE,
    COLORHUG2,
    SPYDER5,
    SPARK,
    SPYDERX,
}
/**
 * The state of the sensor.
 */
enum SensorState {
    UNKNOWN,
    STARTING,
    IDLE,
    MEASURING,
    BUSY,
}
/**
 * A standard colorspace
 */
enum StandardSpace {
    UNKNOWN,
    SRGB,
    ADOBE_RGB,
    PROPHOTO_RGB,
}
/**
 * Flags used when loading an ICC profile.
 * @bitfield 
 */
enum IccLoadFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Parse any named colors in the profile.
     */
    NAMED_COLORS,
    /**
     * Parse all translations in the profile.
     */
    TRANSLATIONS,
    /**
     * Parse the metadata in the profile.
     */
    METADATA,
    /**
     * Calculate the profile MD5 if a profile
     * 					ID was not supplied in the profile.
     */
    FALLBACK_MD5,
    /**
     * Parse the primaries in the profile.
     */
    PRIMARIES,
    /**
     * Load the characterization data from the profile
     */
    CHARACTERIZATION,
    ALL,
}
const CLIENT_PROPERTY_DAEMON_VERSION: string
const CLIENT_PROPERTY_SYSTEM_MODEL: string
const CLIENT_PROPERTY_SYSTEM_VENDOR: string
const DEVICE_METADATA_OUTPUT_EDID_MD5: string
const DEVICE_METADATA_OUTPUT_PRIORITY: string
const DEVICE_METADATA_OUTPUT_PRIORITY_PRIMARY: string
const DEVICE_METADATA_OUTPUT_PRIORITY_SECONDARY: string
const DEVICE_METADATA_OWNER_CMDLINE: string
const DEVICE_METADATA_XRANDR_NAME: string
const DEVICE_PROPERTY_COLORSPACE: string
const DEVICE_PROPERTY_CREATED: string
const DEVICE_PROPERTY_EMBEDDED: string
const DEVICE_PROPERTY_ENABLED: string
const DEVICE_PROPERTY_FORMAT: string
const DEVICE_PROPERTY_ID: string
const DEVICE_PROPERTY_KIND: string
const DEVICE_PROPERTY_METADATA: string
const DEVICE_PROPERTY_MODE: string
const DEVICE_PROPERTY_MODEL: string
const DEVICE_PROPERTY_MODIFIED: string
const DEVICE_PROPERTY_OWNER: string
const DEVICE_PROPERTY_PROFILES: string
const DEVICE_PROPERTY_PROFILING_INHIBITORS: string
const DEVICE_PROPERTY_SCOPE: string
const DEVICE_PROPERTY_SEAT: string
const DEVICE_PROPERTY_SERIAL: string
const DEVICE_PROPERTY_VENDOR: string
const PIXEL_FORMAT_ARGB32: number
const PIXEL_FORMAT_BGRA32: number
const PIXEL_FORMAT_CMYK32: number
const PIXEL_FORMAT_RGB24: number
const PIXEL_FORMAT_RGBA32: number
const PIXEL_FORMAT_UNKNOWN: number
const PROFILE_METADATA_ACCURACY_DE76_AVG: string
const PROFILE_METADATA_ACCURACY_DE76_MAX: string
const PROFILE_METADATA_ACCURACY_DE76_RMS: string
const PROFILE_METADATA_CMF_BINARY: string
const PROFILE_METADATA_CMF_PRODUCT: string
const PROFILE_METADATA_CMF_VERSION: string
const PROFILE_METADATA_CONNECTION_TYPE: string
const PROFILE_METADATA_CONNECTION_TYPE_DISPLAYPORT: string
const PROFILE_METADATA_CONNECTION_TYPE_DVI: string
const PROFILE_METADATA_CONNECTION_TYPE_HDMI: string
const PROFILE_METADATA_CONNECTION_TYPE_INTERNAL: string
const PROFILE_METADATA_CONNECTION_TYPE_VGA: string
const PROFILE_METADATA_DATA_SOURCE: string
const PROFILE_METADATA_DATA_SOURCE_CALIB: string
const PROFILE_METADATA_DATA_SOURCE_EDID: string
const PROFILE_METADATA_DATA_SOURCE_STANDARD: string
const PROFILE_METADATA_DATA_SOURCE_TEST: string
const PROFILE_METADATA_EDID_MD5: string
const PROFILE_METADATA_EDID_MNFT: string
const PROFILE_METADATA_EDID_MODEL: string
const PROFILE_METADATA_EDID_SERIAL: string
const PROFILE_METADATA_EDID_VENDOR: string
const PROFILE_METADATA_FILE_CHECKSUM: string
const PROFILE_METADATA_LICENSE: string
const PROFILE_METADATA_MAPPING_DEVICE_ID: string
const PROFILE_METADATA_MAPPING_FORMAT: string
const PROFILE_METADATA_MAPPING_QUALIFIER: string
const PROFILE_METADATA_MEASUREMENT_DEVICE: string
const PROFILE_METADATA_QUALITY: string
const PROFILE_METADATA_QUALITY_HIGH: string
const PROFILE_METADATA_QUALITY_LOW: string
const PROFILE_METADATA_QUALITY_MEDIUM: string
const PROFILE_METADATA_SCREEN_BRIGHTNESS: string
const PROFILE_METADATA_SCREEN_SURFACE: string
const PROFILE_METADATA_SCREEN_SURFACE_GLOSSY: string
const PROFILE_METADATA_SCREEN_SURFACE_MATTE: string
const PROFILE_METADATA_STANDARD_SPACE: string
const PROFILE_PROPERTY_COLORSPACE: string
const PROFILE_PROPERTY_CREATED: string
const PROFILE_PROPERTY_FILENAME: string
const PROFILE_PROPERTY_FORMAT: string
const PROFILE_PROPERTY_HAS_VCGT: string
const PROFILE_PROPERTY_ID: string
const PROFILE_PROPERTY_IS_SYSTEM_WIDE: string
const PROFILE_PROPERTY_KIND: string
const PROFILE_PROPERTY_METADATA: string
const PROFILE_PROPERTY_OWNER: string
const PROFILE_PROPERTY_QUALIFIER: string
const PROFILE_PROPERTY_SCOPE: string
const PROFILE_PROPERTY_TITLE: string
const PROFILE_PROPERTY_WARNINGS: string
const SENSOR_METADATA_IMAGE_ATTACH: string
const SENSOR_METADATA_IMAGE_CALIBRATE: string
const SENSOR_METADATA_IMAGE_SCREEN: string
const SENSOR_PROPERTY_CAPABILITIES: string
const SENSOR_PROPERTY_EMBEDDED: string
const SENSOR_PROPERTY_ID: string
const SENSOR_PROPERTY_KIND: string
const SENSOR_PROPERTY_LOCKED: string
const SENSOR_PROPERTY_METADATA: string
const SENSOR_PROPERTY_MODE: string
const SENSOR_PROPERTY_MODEL: string
const SENSOR_PROPERTY_NATIVE: string
const SENSOR_PROPERTY_OPTIONS: string
const SENSOR_PROPERTY_SERIAL: string
const SENSOR_PROPERTY_STATE: string
const SENSOR_PROPERTY_VENDOR: string
/**
 * Get the blackbody color for a specific temperature. If the temperature
 * range is outside 1000K to 10000K then the result is clipped.
 * @param temp the temperature in Kelvin
 * @param result the destination color
 */
function color_get_blackbody_rgb(temp: number, result: ColorRGB): boolean
/**
 * Get the blackbody color for a specific temperature. If the temperature
 * range is outside 1000K to 10000K then the result is clipped.
 * @param temp the temperature in Kelvin
 * @param result the destination color
 * @param flags some #CdColorBlackbodyFlags, e.g. %CD_COLOR_BLACKBODY_FLAG_USE_PLANCKIAN
 */
function color_get_blackbody_rgb_full(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags): boolean
/**
 * Convert from one color format to another.
 * @param src the source color
 * @param dest the destination color
 */
function color_rgb8_to_rgb(src: ColorRGB8, dest: ColorRGB): void
/**
 * Interpolate the RGB array to a different size.
 * This uses the Akima interpolation algorithm unless the array would become
 * non-monotonic, in which case it falls back to linear interpolation.
 * @param array Input array
 * @param new_length the target length of the return array
 */
function color_rgb_array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[]
/**
 * Checks the array for monotonicity.
 * @param array Input array
 */
function color_rgb_array_is_monotonic(array: ColorRGB[]): boolean
/**
 * Creates a new RGB array.
 */
function color_rgb_array_new(): ColorRGB[]
function colorspace_from_string(colorspace: string): Colorspace
function colorspace_to_string(colorspace: Colorspace): string
/**
 * Clears a matrix value, setting all it's values to zero.
 * @param src the source
 */
function mat33_clear(src: Mat3x3): void
/**
 * Copies the matrix.
 * The arguments `src` and `dest` cannot be the same value.
 * @param src the source
 * @param dest the destination
 */
function mat33_copy(src: Mat3x3, dest: Mat3x3): void
/**
 * Gets the determinant of the matrix.
 * @param src the source
 */
function mat33_determinant(src: Mat3x3): number
/**
 * Gets the raw data for the matrix.
 * @param src the matrix source
 */
function mat33_get_data(src: Mat3x3): number
/**
 * Initialises a matrix.
 * @param dest the destination matrix
 * @param m00 component value
 * @param m01 component value
 * @param m02 component value
 * @param m10 component value
 * @param m11 component value
 * @param m12 component value
 * @param m20 component value
 * @param m21 component value
 * @param m22 component value
 */
function mat33_init(dest: Mat3x3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void
/**
 * Determine whether all entries in the specified matrix are finite and not
 * NaNs.
 * @param mat the matrix to test
 */
function mat33_is_finite(mat: Mat3x3): boolean
/**
 * Multiply (convolve) one matrix with another.
 * The arguments `mat_src1` cannot be the same as `mat_dest,` and
 * `mat_src2` cannot be the same as `mat_dest`.
 * @param mat_src1 the matrix source
 * @param mat_src2 the other matrix source
 * @param mat_dest the destination
 */
function mat33_matrix_multiply(mat_src1: Mat3x3, mat_src2: Mat3x3, mat_dest: Mat3x3): void
/**
 * Normalizes a matrix
 * 
 * The arguments `src` and `dest` can be the same value.
 * @param src the source matrix
 * @param dest the destination matrix
 */
function mat33_normalize(src: Mat3x3, dest: Mat3x3): void
/**
 * Inverts the matrix.
 * The arguments `src` and `dest` cannot be the same value.
 * @param src the source
 * @param dest the destination
 */
function mat33_reciprocal(src: Mat3x3, dest: Mat3x3): boolean
/**
 * Multiplies a matrix with a scalar.
 * The arguments `vec_src` and `vec_dest` can be the same value.
 * @param mat_src the source
 * @param value the scalar
 * @param mat_dest the destination
 */
function mat33_scalar_multiply(mat_src: Mat3x3, value: number, mat_dest: Mat3x3): void
/**
 * Sets the matrix to an identity value.
 * @param src the source
 */
function mat33_set_identity(src: Mat3x3): void
/**
 * Obtains a string representaton of a matrix.
 * @param src the source
 */
function mat33_to_string(src: Mat3x3): string
/**
 * Multiplies a matrix with a vector.
 * The arguments `vec_src` and `vec_dest` cannot be the same value.
 * @param mat_src the matrix source
 * @param vec_src the vector source
 * @param vec_dest the destination vector
 */
function mat33_vector_multiply(mat_src: Mat3x3, vec_src: Vec3, vec_dest: Vec3): void
function object_scope_from_string(object_scope: string): ObjectScope
function object_scope_to_string(object_scope: ObjectScope): string
function pixel_format_from_string(pixel_format: string): PixelFormat
function pixel_format_to_string(pixel_format: PixelFormat): string
function rendering_intent_from_string(rendering_intent: string): RenderingIntent
function rendering_intent_to_string(rendering_intent: RenderingIntent): string
/**
 * Gets the standard colorspace as a enumerated value.
 * @param standard_space the standard colorspace, e.g. 'srgb'.
 */
function standard_space_from_string(standard_space: string): StandardSpace
/**
 * Gets the standard colorspace as a string.
 * @param standard_space a #CdStandardSpace
 */
function standard_space_to_string(standard_space: StandardSpace): string
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Client_ChangedSignalCallback {
    ($obj: Client): void
}

/**
 * Signal callback interface for `device-added`
 */
interface Client_DeviceAddedSignalCallback {
    ($obj: Client, device: Device): void
}

/**
 * Signal callback interface for `device-changed`
 */
interface Client_DeviceChangedSignalCallback {
    ($obj: Client, device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface Client_DeviceRemovedSignalCallback {
    ($obj: Client, device: Device): void
}

/**
 * Signal callback interface for `profile-added`
 */
interface Client_ProfileAddedSignalCallback {
    ($obj: Client, profile: Profile): void
}

/**
 * Signal callback interface for `profile-changed`
 */
interface Client_ProfileChangedSignalCallback {
    ($obj: Client, profile: Profile): void
}

/**
 * Signal callback interface for `profile-removed`
 */
interface Client_ProfileRemovedSignalCallback {
    ($obj: Client, profile: Profile): void
}

/**
 * Signal callback interface for `sensor-added`
 */
interface Client_SensorAddedSignalCallback {
    ($obj: Client, sensor: Sensor): void
}

/**
 * Signal callback interface for `sensor-changed`
 */
interface Client_SensorChangedSignalCallback {
    ($obj: Client, sensor: Sensor): void
}

/**
 * Signal callback interface for `sensor-removed`
 */
interface Client_SensorRemovedSignalCallback {
    ($obj: Client, sensor: Sensor): void
}

interface Client {

    // Own properties of Colord-1.0.Colord.Client

    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * The daemon version.
     */
    readonly daemon_version: string
    /**
     * The system model.
     */
    readonly system_model: string
    /**
     * The system vendor.
     */
    readonly system_vendor: string

    // Own fields of Colord-1.0.Colord.Client

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Client

    /**
     * Connects to the colord daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    // TODO fix conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connect_finish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the colord daemon.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Creates a color device.
     * @param id identifier for the device
     * @param scope the scope of the device
     * @param properties properties to   set on the device, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    create_device(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    create_device_finish(res: Gio.AsyncResult): Device
    /**
     * Creates a color device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id identifier for the device
     * @param scope the scope of the device
     * @param properties properties to   set on the device, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    create_device_sync(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null): Device
    /**
     * Creates a color profile.
     * @param id identifier for the profile
     * @param scope the scope of the profile
     * @param properties properties to   set on the profile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    create_profile(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    create_profile_finish(res: Gio.AsyncResult): Profile
    /**
     * Creates a color profile for an #CdIcc Object.
     * @param icc #CdIcc object
     * @param scope the scope of the profile
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    create_profile_for_icc(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    create_profile_for_icc_finish(res: Gio.AsyncResult): Profile
    /**
     * Creates a color profile from a #CdIcc object.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param icc A #CdIcc
     * @param scope the scope of the profile
     * @param cancellable a #GCancellable, or %NULL
     */
    create_profile_for_icc_sync(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null): Profile
    /**
     * Creates a color profile.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id identifier for the device
     * @param scope the scope of the profile
     * @param properties properties to   set on the profile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    create_profile_sync(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null): Profile
    /**
     * Deletes a device.
     * @param device a #CdDevice
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    delete_device(device: Device, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    delete_device_finish(res: Gio.AsyncResult): boolean
    /**
     * Deletes a color device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param device a #CdDevice.
     * @param cancellable a #GCancellable, or %NULL
     */
    delete_device_sync(device: Device, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes a profile.
     * @param profile a #CdProfile
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    delete_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    delete_profile_finish(res: Gio.AsyncResult): boolean
    /**
     * Deletes a color profile.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile.
     * @param cancellable a #GCancellable, or %NULL
     */
    delete_profile_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Finds a device by an ID.
     * @param id a device id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    find_device(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finds a color device that has a property value.
     * @param key the device property key
     * @param value the device property value
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    find_device_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    find_device_by_property_finish(res: Gio.AsyncResult): Device
    /**
     * Finds a color device that has a property value.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The device property key.
     * @param value The device property value.
     * @param cancellable a #GCancellable or %NULL
     */
    find_device_by_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): Device
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    find_device_finish(res: Gio.AsyncResult): Device
    /**
     * Finds a color device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id The device ID.
     * @param cancellable a #GCancellable or %NULL
     */
    find_device_sync(id: string, cancellable: Gio.Cancellable | null): Device
    /**
     * Finds a profile by an ID.
     * @param id a profile id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    find_profile(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finds a profile by a filename.
     * @param filename a profile filename
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    find_profile_by_filename(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    find_profile_by_filename_finish(res: Gio.AsyncResult): Profile
    /**
     * Finds a color profile from its filename.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param filename filename for the profile
     * @param cancellable a #GCancellable, or %NULL
     */
    find_profile_by_filename_sync(filename: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Finds a color profile that has a property value.
     * @param key the profile property key
     * @param value the profile property value
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    find_profile_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    find_profile_by_property_finish(res: Gio.AsyncResult): Profile
    /**
     * Finds a color profile that has a property value.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The profile property key.
     * @param value The profile property value.
     * @param cancellable a #GCancellable or %NULL
     */
    find_profile_by_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    find_profile_finish(res: Gio.AsyncResult): Profile
    /**
     * Finds a color profile from its id.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id id for the profile
     * @param cancellable a #GCancellable, or %NULL
     */
    find_profile_sync(id: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Finds a sensor by an ID.
     * @param id a sensor id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    find_sensor(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    find_sensor_finish(res: Gio.AsyncResult): Sensor
    /**
     * Finds a color sensor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id The sensor ID.
     * @param cancellable a #GCancellable or %NULL
     */
    find_sensor_sync(id: string, cancellable: Gio.Cancellable | null): Sensor
    /**
     * Gets if the client has been connected.
     */
    get_connected(): boolean
    /**
     * Get colord daemon version.
     */
    get_daemon_version(): string
    /**
     * Gets an array of color devices.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets an array of color devices.
     * @param kind the type of device.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_devices_by_kind(kind: DeviceKind, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_devices_by_kind_finish(res: Gio.AsyncResult): Device[]
    /**
     * Get an array of the device objects of a specified kind.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param kind a #CdDeviceKind, e.g. %CD_DEVICE_KIND_DISPLAY
     * @param cancellable a #GCancellable or %NULL
     */
    get_devices_by_kind_sync(kind: DeviceKind, cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_devices_finish(res: Gio.AsyncResult): Device[]
    /**
     * Get an array of the device objects.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable, or %NULL
     */
    get_devices_sync(cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets if the colord server is currently running.
     * WARNING: This function may block for up to 5 seconds waiting for the daemon
     * to start if it is not already running.
     */
    get_has_server(): boolean
    /**
     * Gets an array of color profiles.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_profiles(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_profiles_finish(res: Gio.AsyncResult): Profile[]
    /**
     * Get an array of the profile objects.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable, or %NULL
     */
    get_profiles_sync(cancellable: Gio.Cancellable | null): Profile[]
    /**
     * Gets an array of color sensors.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_sensors(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_sensors_finish(res: Gio.AsyncResult): Sensor[]
    /**
     * Get an array of the sensor objects.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable, or %NULL
     */
    get_sensors_sync(cancellable: Gio.Cancellable | null): Sensor[]
    /**
     * Finds a standard profile space.
     * @param standard_space a profile id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_standard_space(standard_space: StandardSpace, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_standard_space_finish(res: Gio.AsyncResult): Profile
    /**
     * Finds a standard colorspace.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param standard_space standard colorspace value
     * @param cancellable a #GCancellable, or %NULL
     */
    get_standard_space_sync(standard_space: StandardSpace, cancellable: Gio.Cancellable | null): Profile
    /**
     * Get system model.
     */
    get_system_model(): string
    /**
     * Get system vendor.
     */
    get_system_vendor(): string
    /**
     * Imports a color profile into the users home directory.
     * 
     * If the profile should be accessible for all users, then call
     * cd_profile_install_system_wide() on the result.
     * @param file a #GFile
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    import_profile(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    import_profile_finish(res: Gio.AsyncResult): Profile
    /**
     * Imports a color profile into the users home directory.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param file A #GFile
     * @param cancellable a #GCancellable, or %NULL
     */
    import_profile_sync(file: Gio.File, cancellable: Gio.Cancellable | null): Profile

    // Own virtual methods of Colord-1.0.Colord.Client

    vfunc_changed(): void
    vfunc_device_added(device: Device): void
    vfunc_device_changed(device: Device): void
    vfunc_device_removed(device: Device): void
    vfunc_profile_added(profile: Profile): void
    vfunc_profile_changed(profile: Profile): void
    vfunc_profile_removed(profile: Profile): void
    vfunc_sensor_added(sensor: Sensor): void
    vfunc_sensor_changed(sensor: Sensor): void
    vfunc_sensor_removed(sensor: Sensor): void

    // Own signals of Colord-1.0.Colord.Client

    connect(sigName: "changed", callback: Client_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Client_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "device-added", callback: Client_DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: Client_DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: Device, ...args: any[]): void
    connect(sigName: "device-changed", callback: Client_DeviceChangedSignalCallback): number
    connect_after(sigName: "device-changed", callback: Client_DeviceChangedSignalCallback): number
    emit(sigName: "device-changed", device: Device, ...args: any[]): void
    connect(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", device: Device, ...args: any[]): void
    connect(sigName: "profile-added", callback: Client_ProfileAddedSignalCallback): number
    connect_after(sigName: "profile-added", callback: Client_ProfileAddedSignalCallback): number
    emit(sigName: "profile-added", profile: Profile, ...args: any[]): void
    connect(sigName: "profile-changed", callback: Client_ProfileChangedSignalCallback): number
    connect_after(sigName: "profile-changed", callback: Client_ProfileChangedSignalCallback): number
    emit(sigName: "profile-changed", profile: Profile, ...args: any[]): void
    connect(sigName: "profile-removed", callback: Client_ProfileRemovedSignalCallback): number
    connect_after(sigName: "profile-removed", callback: Client_ProfileRemovedSignalCallback): number
    emit(sigName: "profile-removed", profile: Profile, ...args: any[]): void
    connect(sigName: "sensor-added", callback: Client_SensorAddedSignalCallback): number
    connect_after(sigName: "sensor-added", callback: Client_SensorAddedSignalCallback): number
    emit(sigName: "sensor-added", sensor: Sensor, ...args: any[]): void
    connect(sigName: "sensor-changed", callback: Client_SensorChangedSignalCallback): number
    connect_after(sigName: "sensor-changed", callback: Client_SensorChangedSignalCallback): number
    emit(sigName: "sensor-changed", sensor: Sensor, ...args: any[]): void
    connect(sigName: "sensor-removed", callback: Client_SensorRemovedSignalCallback): number
    connect_after(sigName: "sensor-removed", callback: Client_SensorRemovedSignalCallback): number
    emit(sigName: "sensor-removed", sensor: Sensor, ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Client

    connect(sigName: "notify::connected", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::system-model", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-model", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-model", ...args: any[]): void
    connect(sigName: "notify::system-vendor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-vendor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-vendor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Colord-1.0.Colord.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Creates a new #CdClient object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdClient object.
     * @constructor 
     */
    static new(): Client
    _init(config?: Client_ConstructProps): void
    /**
     * Converts a string to a #CdClientError.
     * @param error_desc 
     */
    static error_from_string(error_desc: string): ClientError
    static error_quark(): GLib.Quark
    /**
     * Converts a #CdClientError to a string.
     * @param error_enum 
     */
    static error_to_string(error_enum: ClientError): string
}

interface Device_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Colord-1.0.Colord.Device

    /**
     * The object path of the remote object
     */
    object_path?: string | null
}

/**
 * Signal callback interface for `changed`
 */
interface Device_ChangedSignalCallback {
    ($obj: Device): void
}

interface Device {

    // Own properties of Colord-1.0.Colord.Device

    /**
     * The device colorspace, e.g. %CD_COLORSPACE_RGB.
     */
    readonly colorspace: number
    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * The time the device was created.
     */
    readonly created: number
    /**
     * If the device is embedded in the device and cannot be removed.
     */
    readonly embedded: string
    /**
     * The device enabled state.
     */
    readonly enabled: boolean
    /**
     * The device format.
     */
    readonly format: string
    /**
     * The device ID.
     */
    readonly id: string
    /**
     * The device kind, e.g. %CD_DEVICE_KIND_DISPLAY.
     */
    readonly kind: number
    /**
     * The device colorspace, e.g. %CD_DEVICE_MODE_VIRTUAL.
     */
    readonly mode: number
    /**
     * The device model.
     */
    readonly model: string
    /**
     * The last time the device was modified.
     */
    readonly modified: number
    /**
     * The object path of the remote object
     */
    object_path: string
    /**
     * The device owner, e.g. 500.
     */
    readonly owner: number
    readonly profiling_inhibitors: string[]
    /**
     * The device scope, e.g. %CD_OBJECT_SCOPE_TEMP.
     */
    readonly scope: number
    /**
     * The device seat identifier.
     */
    readonly seat: string
    /**
     * The device serial number.
     */
    readonly serial: string
    /**
     * The device vendor.
     */
    readonly vendor: string

    // Own fields of Colord-1.0.Colord.Device

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Device

    /**
     * Adds a profile to a device.
     * @param relation a #CdDeviceRelation, e.g. #CD_DEVICE_RELATION_HARD
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    add_profile(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    add_profile_finish(res: Gio.AsyncResult): boolean
    /**
     * Adds a profile to a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param relation a #CdDeviceRelation, e.g. #CD_DEVICE_RELATION_HARD
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable or %NULL
     */
    add_profile_sync(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Connects to the object and fills up initial properties.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    // TODO fix conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connect_finish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the object and fills up initial properties.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Tests two devices for equality.
     * @param device2 another #CdDevice instance.
     */
    equal(device2: Device): boolean
    /**
     * Gets the device colorspace.
     */
    get_colorspace(): Colorspace
    /**
     * Gets if the device has been connected.
     */
    get_connected(): boolean
    /**
     * Gets the device creation date.
     */
    get_created(): number
    /**
     * Gets the default device profile. A profile will not be returned
     * if the device is being profiled or is disabled.
     */
    get_default_profile(): Profile
    /**
     * Returns if the device is embedded in the computer and cannot be
     * removed.
     */
    get_embedded(): boolean
    /**
     * Gets the device enabled state.
     */
    get_enabled(): boolean
    /**
     * Gets the device format.
     */
    get_format(): string
    /**
     * Gets the device ID.
     */
    get_id(): string
    /**
     * Gets the device kind.
     */
    get_kind(): DeviceKind
    /**
     * Returns the device metadata.
     */
    get_metadata(): GLib.HashTable
    /**
     * Returns the device metadata for a specific key.
     * @param key a key for the metadata dictionary
     */
    get_metadata_item(key: string): string
    /**
     * Gets the device mode.
     */
    get_mode(): DeviceMode
    /**
     * Gets the device model.
     */
    get_model(): string
    /**
     * Gets the device modified date.
     */
    get_modified(): number
    /**
     * Gets the object path for the device.
     */
    get_object_path(): string
    /**
     * Gets the device owner.
     */
    get_owner(): number
    /**
     * Gets the preferred profile for some qualifiers.
     * @param qualifiers a set of qualifiers that can included wildcards
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_profile_for_qualifiers(qualifiers: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_profile_for_qualifiers_finish(res: Gio.AsyncResult): Profile
    /**
     * Gets the preferred profile for some qualifiers.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param qualifiers a set of qualifiers that can included wildcards
     * @param cancellable a #GCancellable or %NULL
     */
    get_profile_for_qualifiers_sync(qualifiers: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Gets the property relationship to the device.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_profile_relation(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_profile_relation_finish(res: Gio.AsyncResult): DeviceRelation
    /**
     * Gets the property relationship to the device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile instance.
     * @param cancellable a #GCancellable or %NULL
     */
    get_profile_relation_sync(profile: Profile, cancellable: Gio.Cancellable | null): DeviceRelation
    /**
     * Gets the device profiles.
     */
    get_profiles(): Profile[]
    /**
     * Gets any profiling inhibitors for the device.
     */
    get_profiling_inhibitors(): string[]
    /**
     * Gets the device scope.
     */
    get_scope(): ObjectScope
    /**
     * Gets the device seat identifier.
     */
    get_seat(): string
    /**
     * Gets the device serial number.
     */
    get_serial(): string
    /**
     * Gets the device vendor.
     */
    get_vendor(): string
    /**
     * Makes an already added profile default for a device.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    make_profile_default(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    make_profile_default_finish(res: Gio.AsyncResult): boolean
    /**
     * Makes an already added profile default for a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable or %NULL
     */
    make_profile_default_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets up the device for profiling and causes no profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    profiling_inhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    profiling_inhibit_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets up the device for profiling and causes no profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    profiling_inhibit_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Restores the device after profiling and causes normal profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    profiling_uninhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    profiling_uninhibit_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets up the device for profiling and causes no profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    profiling_uninhibit_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a profile from a device.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    remove_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    remove_profile_finish(res: Gio.AsyncResult): boolean
    /**
     * Removes a profile from a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable or %NULL
     */
    remove_profile_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device kind.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param colorspace The device colorspace, e.g. #CD_COLORSPACE_RGB
     * @param cancellable a #GCancellable or %NULL
     */
    set_colorspace_sync(colorspace: Colorspace, cancellable: Gio.Cancellable | null): boolean
    /**
     * Enables or disables a device.
     * @param enabled the enabled state
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_enabled(enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    set_enabled_finish(res: Gio.AsyncResult): boolean
    /**
     * Enables or disables a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param enabled the enabled state
     * @param cancellable a #GCancellable or %NULL
     */
    set_enabled_sync(enabled: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device kind.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param kind The device kind, e.g. #CD_DEVICE_KIND_DISPLAY
     * @param cancellable a #GCancellable or %NULL
     */
    set_kind_sync(kind: DeviceKind, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device mode.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param mode The device kind, e.g. #CD_DEVICE_MODE_VIRTUAL
     * @param cancellable a #GCancellable or %NULL
     */
    set_mode_sync(mode: DeviceMode, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device model.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param value The model.
     * @param cancellable a #GCancellable or %NULL
     */
    set_model_sync(value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the device.
     * @param object_path The colord object path.
     */
    set_object_path(object_path: string): void
    /**
     * Sets a property on the device.
     * @param key a property key
     * @param value a property key
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_property(key: string, value?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value?: any): void
    set_property(...args: any[]): any
    set_property(args_or_property_name: any[] | string, value?: any): void | any
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    set_property_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets an object property.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The property key
     * @param value The property value
     * @param cancellable a #GCancellable or %NULL
     */
    set_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device serial number.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param value The string value.
     * @param cancellable a #GCancellable or %NULL
     */
    set_serial_sync(value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device vendor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param value The string value.
     * @param cancellable a #GCancellable or %NULL
     */
    set_vendor_sync(value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts the device to a string description.
     */
    to_string(): string

    // Own virtual methods of Colord-1.0.Colord.Device

    vfunc_changed(): void

    // Own signals of Colord-1.0.Colord.Device

    connect(sigName: "changed", callback: Device_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Device_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Device

    connect(sigName: "notify::colorspace", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::colorspace", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::created", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::embedded", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::embedded", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: "notify::profiling-inhibitors", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiling-inhibitors", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profiling-inhibitors", ...args: any[]): void
    connect(sigName: "notify::scope", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Device extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Colord-1.0.Colord.Device

    constructor(config?: Device_ConstructProps) 
    /**
     * Creates a new #CdDevice object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdDevice object.
     * @constructor 
     */
    static new(): Device
    /**
     * Creates a new #CdDevice object with a known object path.
     * @constructor 
     * @param object_path The colord object path.
     */
    static new_with_object_path(object_path: string): Device
    _init(config?: Device_ConstructProps): void
    /**
     * Converts a string to a #CdDeviceError.
     * @param error_desc 
     */
    static error_from_string(error_desc: string): DeviceError
    static error_quark(): GLib.Quark
    /**
     * Converts a #CdDeviceError to a string.
     * @param error_enum 
     */
    static error_to_string(error_enum: DeviceError): string
    /**
     * Converts a string to a #CdDeviceKind.
     * @param kind 
     */
    static kind_from_string(kind: string): DeviceKind
    /**
     * Gets the most suitable profile kind for a device kind.
     * @param device_kind A #CdDeviceKind
     */
    static kind_to_profile_kind(device_kind: DeviceKind): ProfileKind
    /**
     * Converts a #CdDeviceKind to a string.
     * @param kind_enum 
     */
    static kind_to_string(kind_enum: DeviceKind): string
    static mode_from_string(device_mode: string): DeviceMode
    static mode_to_string(device_mode: DeviceMode): string
    static relation_from_string(device_relation: string): DeviceRelation
    static relation_to_string(device_relation: DeviceRelation): string
}

interface Edid_ConstructProps extends GObject.Object_ConstructProps {
}

interface Edid {

    // Own fields of Colord-1.0.Colord.Edid

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Edid

    /**
     * Gets the blue primary.
     */
    get_blue(): ColorYxy
    /**
     * Gets the EDID MD5 checksum.
     */
    get_checksum(): string
    /**
     * Gets the EDID EISA ID.
     */
    get_eisa_id(): string
    /**
     * Gets the native panel gamma.
     */
    get_gamma(): number
    /**
     * Gets the green primary.
     */
    get_green(): ColorYxy
    /**
     * Gets the panel height in inches.
     */
    get_height(): number
    /**
     * Gets the EDID monitor name.
     */
    get_monitor_name(): string
    /**
     * Gets the EDID PNP ID.
     */
    get_pnp_id(): string
    /**
     * Gets the red primary.
     */
    get_red(): ColorYxy
    /**
     * Gets the EDID serial number.
     */
    get_serial_number(): string
    /**
     * Gets the EDID vendor name.
     */
    get_vendor_name(): string
    /**
     * Gets the whitepoint.
     */
    get_white(): ColorYxy
    /**
     * Gets the panel width in inches.
     */
    get_width(): number
    /**
     * Parses the EDID.
     * @param edid_data data to parse
     */
    parse(edid_data: GLib.Bytes): boolean
    /**
     * Resets all cached data.
     */
    reset(): void

    // Class property signals of Colord-1.0.Colord.Edid

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Edid extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Edid

    static name: string
    static $gtype: GObject.GType<Edid>

    // Constructors of Colord-1.0.Colord.Edid

    constructor(config?: Edid_ConstructProps) 
    /**
     * Creates an object suitable for parsing an EDID.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an object suitable for parsing an EDID.
     * @constructor 
     */
    static new(): Edid
    _init(config?: Edid_ConstructProps): void
    /**
     * Gets the #CdEdid error quark.
     */
    static error_quark(): GLib.Quark
}

interface Icc_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Colord-1.0.Colord.Icc

    colorspace?: number | null
    kind?: number | null
    version?: number | null
}

interface Icc {

    // Own properties of Colord-1.0.Colord.Icc

    readonly blue: ColorXYZ
    readonly can_delete: boolean
    readonly checksum: string
    colorspace: number
    readonly filename: string
    readonly green: ColorXYZ
    kind: number
    readonly red: ColorXYZ
    readonly size: number
    readonly temperature: number
    version: number
    readonly white: ColorXYZ

    // Own fields of Colord-1.0.Colord.Icc

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Icc

    /**
     * Sets an item of data to the profile metadata, overwriting it if
     * it already exists.
     * @param key the metadata key
     * @param value the UTF-8 metadata value
     */
    add_metadata(key: string, value: string): void
    /**
     * Creates a default sRGB ICC profile.
     */
    create_default(): boolean
    /**
     * Creates a default sRGB ICC profile.
     * @param flags a set of #CdIccLoadFlags
     */
    create_default_full(flags: IccLoadFlags): boolean
    /**
     * Creates an ICC profile from EDID data.
     * @param gamma_value approximate device gamma
     * @param red primary color value
     * @param green primary color value
     * @param blue primary color value
     * @param white whitepoint value
     */
    create_from_edid(gamma_value: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean
    /**
     * Creates an ICC profile from EDID data.
     * @param edid EDID data
     */
    create_from_edid_data(edid: Edid): boolean
    /**
     * Gets the profile red chromaticity value.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    get_blue(): ColorXYZ
    /**
     * Finds out if the profile could be deleted.
     * This is only applicable for profiles loaded with cd_icc_load_file() as
     * obviously data and fd's cannot be sanely unlinked.
     */
    get_can_delete(): boolean
    /**
     * Gets any characterization data used to build the profile.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_CHARACTERIZATION flag.
     */
    get_characterization_data(): string
    /**
     * Gets the profile checksum if one exists.
     * This will either be the embedded profile ID, or the file checksum if
     * the #CdIcc object was loaded using cd_icc_load_data() or cd_icc_load_file()
     * and the %CD_ICC_LOAD_FLAGS_FALLBACK_MD5 flag is used.
     */
    get_checksum(): string
    /**
     * Gets the profile colorspace
     */
    get_colorspace(): Colorspace
    /**
     * Return the cmsContext instance used locally. This may be required if you
     * are using native LCMS calls and then cd_icc_load_handle().
     */
    get_context(): object | null
    /**
     * Gets the profile copyright.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    get_copyright(locale: string): string
    /**
     * Gets the ICC creation date and time.
     */
    get_created(): GLib.DateTime
    /**
     * Gets the profile description.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    get_description(locale: string): string
    /**
     * Gets the filename of the ICC data, if one exists.
     */
    get_filename(): string
    /**
     * Gets the profile green chromaticity value.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    get_green(): ColorXYZ
    /**
     * Return the cmsHPROFILE instance used locally. This may be required if you
     * are using the profile in a transform.
     */
    get_handle(): object | null
    /**
     * Gets the profile kind.
     */
    get_kind(): ProfileKind
    /**
     * Gets the profile manufacturer.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    get_manufacturer(locale: string): string
    /**
     * Gets all the metadata from the ICC profile.
     */
    get_metadata(): GLib.HashTable
    /**
     * Gets an item of data from the ICC metadata store.
     * @param key the dictionary key
     */
    get_metadata_item(key: string): string
    /**
     * Gets the profile model.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    get_model(locale: string): string
    /**
     * Gets any named colors in the profile.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_NAMED_COLORS flag.
     */
    get_named_colors(): ColorSwatch[]
    /**
     * Gets the profile red chromaticity value.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    get_red(): ColorXYZ
    /**
     * Generates a response curve of a specified size.
     * @param size the size of the curve to generate
     */
    get_response(size: number): ColorRGB[]
    /**
     * Gets the ICC profile file size
     */
    get_size(): number
    /**
     * Returns the raw data for the specific tag.
     * Most users do not need to do this.
     * @param tag a 4 bytes tag description, e.g. "cprt" or "vcgt"
     */
    get_tag_data(tag: string): GLib.Bytes
    /**
     * Returns the internal tag table. Most users do not need to do this.
     */
    get_tags(): string[]
    /**
     * Gets the ICC color temperature, rounded to the nearest 100K.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    get_temperature(): number
    /**
     * Gets the video card calibration data from the profile.
     * @param size the desired size of the table data
     */
    get_vcgt(size: number): ColorRGB[]
    /**
     * Gets the ICC profile version, typically 2.1 or 4.2
     */
    get_version(): number
    /**
     * Returns any warnings with profiles
     */
    get_warnings(): ProfileWarning[]
    /**
     * Gets the profile white point.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    get_white(): ColorXYZ
    /**
     * Loads an ICC profile from raw byte data.
     * @param data binary data
     * @param flags a set of #CdIccLoadFlags
     */
    load_data(data: Uint8Array, flags: IccLoadFlags): boolean
    /**
     * Loads an ICC profile from an open file descriptor.
     * @param fd a file descriptor
     * @param flags a set of #CdIccLoadFlags
     */
    load_fd(fd: number, flags: IccLoadFlags): boolean
    /**
     * Loads an ICC profile from a local or remote file.
     * @param file a #GFile
     * @param flags a set of #CdIccLoadFlags
     * @param cancellable A #GCancellable or %NULL
     */
    load_file(file: Gio.File, flags: IccLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the internal cmsHPROFILE instance. This may be required if you create
     * the profile using cmsCreateRGBProfileTHR() and then want to use the
     * functionality in #CdIcc.
     * 
     * Do not call cmsCloseProfile() on `handle` in the caller, this will be done
     * when the `icc` object is finalized. Treat the profile like it's been adopted
     * by this module.
     * 
     * To handle the internal error callback, you should use the thread-safe
     * creation function, e.g. cmsCreateNULLProfileTHR(). The `context_id` should be
     * set as the value of cd_icc_get_context() for this object.
     * 
     * Additionally, this function cannot be called more than once, and also can't
     * be called if cd_icc_load_file() has previously been used on the `icc` object.
     * @param handle a cmsHPROFILE instance
     * @param flags a set of #CdIccLoadFlags
     */
    load_handle(handle: object | null, flags: IccLoadFlags): boolean
    /**
     * Removes an item of metadata.
     * @param key the metadata key
     */
    remove_metadata(key: string): void
    /**
     * Saves an ICC profile to an allocated memory location.
     * 
     * Return vale: A #GBytes structure, or %NULL for error
     * @param flags a set of #CdIccSaveFlags
     */
    save_data(flags: IccSaveFlags): GLib.Bytes
    /**
     * Saves an ICC profile to the default per-user location.
     * 
     * Return vale: %TRUE for success.
     * @param flags a set of #CdIccSaveFlags
     * @param cancellable A #GCancellable or %NULL
     */
    save_default(flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Saves an ICC profile to a local or remote file.
     * 
     * Return vale: %TRUE for success.
     * @param file a #GFile
     * @param flags a set of #CdIccSaveFlags
     * @param cancellable A #GCancellable or %NULL
     */
    save_file(file: Gio.File, flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the characterization data used to build the profile.
     * @param data TI3 string data, or %NULL
     */
    set_characterization_data(data: string): void
    /**
     * Sets the colorspace kind.
     * @param colorspace the profile colorspace, e.g. %CD_COLORSPACE_RGB
     */
    set_colorspace(colorspace: Colorspace): void
    /**
     * Sets the profile _copyright for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    set_copyright(locale: string, value: string | null): void
    /**
     * Sets the profile copyrights for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    set_copyright_items(values: GLib.HashTable): void
    /**
     * Sets the ICC creation date and time.
     * @param creation_time 
     */
    set_created(creation_time: GLib.DateTime): void
    /**
     * Sets the profile description for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    set_description(locale: string, value: string | null): void
    /**
     * Sets the profile descriptions for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    set_description_items(values: GLib.HashTable): void
    /**
     * Sets the filename, which may be required if the ICC profile has been loaded
     * using cd_icc_load_fd() from a disk cache.
     * @param filename a filename, or %NULL
     */
    set_filename(filename: string): void
    /**
     * Sets the profile kind.
     * @param kind the profile kind, e.g. %CD_PROFILE_KIND_DISPLAY_DEVICE
     */
    set_kind(kind: ProfileKind): void
    /**
     * Sets the profile manufacturer for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    set_manufacturer(locale: string, value: string | null): void
    /**
     * Sets the profile manufacturers for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    set_manufacturer_items(values: GLib.HashTable): void
    /**
     * Sets the profile model for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    set_model(locale: string, value: string | null): void
    /**
     * Sets the profile models for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    set_model_items(values: GLib.HashTable): void
    /**
     * Sets the raw data for the specific tag.
     * Most users do not need to do this.
     * @param tag a 4 bytes tag description, e.g. "cprt" or "vcgt"
     * @param data a variable sized data entry
     */
    set_tag_data(tag: string, data: GLib.Bytes): boolean
    /**
     * Sets the Video Card Gamma Table from the profile.
     * 
     * Return vale: %TRUE for success.
     * @param vcgt video card calibration data
     */
    set_vcgt(vcgt: ColorRGB[]): boolean
    /**
     * Sets the profile version.
     * @param version the profile version, e.g. 2.1 or 4.0
     */
    set_version(version: number): void
    /**
     * Returns a string representation of the ICC profile.
     */
    to_string(): string

    // Class property signals of Colord-1.0.Colord.Icc

    connect(sigName: "notify::blue", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blue", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blue", ...args: any[]): void
    connect(sigName: "notify::can-delete", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-delete", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-delete", ...args: any[]): void
    connect(sigName: "notify::checksum", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checksum", ...args: any[]): void
    connect(sigName: "notify::colorspace", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::colorspace", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::green", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::green", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::green", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::red", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::red", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::red", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::white", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::white", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Icc extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Icc

    static name: string
    static $gtype: GObject.GType<Icc>

    // Constructors of Colord-1.0.Colord.Icc

    constructor(config?: Icc_ConstructProps) 
    /**
     * Creates a new #CdIcc object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdIcc object.
     * @constructor 
     */
    static new(): Icc
    _init(config?: Icc_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface It8_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Colord-1.0.Colord.It8

    /**
     * The kind of IT8 file.
     */
    kind?: number | null
}

interface It8 {

    // Own properties of Colord-1.0.Colord.It8

    /**
     * The instrument that created the results, e.g. "huey"
     */
    readonly instrument: string
    /**
     * The kind of IT8 file.
     */
    kind: number
    /**
     * If the results file is normalized.
     */
    readonly normalized: boolean
    /**
     * The framework that created the results, e.g. "cd-self-test"
     */
    readonly originator: string
    /**
     * The reference that created the results, e.g. "colormunki"
     */
    readonly reference: string
    /**
     * If the results file is spectral.
     */
    readonly spectral: boolean
    /**
     * The file title, e.g. "Factor calibration".
     */
    readonly title: string

    // Own fields of Colord-1.0.Colord.It8

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.It8

    /**
     * Adds a reading to this object. If either of `rgb` or `xyz` is NULL then
     * a black reading (0.0, 0.0, 0.0) is added instead.
     * @param rgb a #CdColorRGB, or %NULL
     * @param xyz a #CdColorXYZ, or %NULL
     */
    add_data(rgb: ColorRGB, xyz: ColorXYZ): void
    /**
     * Sets any extra options that have to be set in the CCMX file
     * @param option A IT8 option, e.g. "TYPE_LCD"
     */
    add_option(option: string): void
    /**
     * Adds a spectrum to the spectral array.
     * @param spectrum the spectral data
     */
    add_spectrum(spectrum: Spectrum): void
    /**
     * Gets a specific bit of data from this object.
     * The returned data are absolute readings and are not normalised.
     * @param idx the item index
     * @param rgb the returned RGB value
     * @param xyz the returned XYZ value
     */
    get_data_item(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean
    /**
     * Gets the data size.
     */
    get_data_size(): number
    /**
     * Gets if the 'CREATED' attribute will be written. This is typically only
     * set in the self test programs.
     */
    get_enable_created(): boolean
    /**
     * Gets the instrument the file was created by.
     */
    get_instrument(): string
    /**
     * Gets the kind of IT8 file.
     */
    get_kind(): It8Kind
    /**
     * Gets the calibration matrix in the it8 file.
     */
    get_matrix(): Mat3x3
    /**
     * Gets if the data should be written normlaised to y=100.
     */
    get_normalized(): boolean
    /**
     * Gets the file orginator.
     */
    get_originator(): string
    /**
     * Gets the reference the file was created against.
     */
    get_reference(): string
    /**
     * Gets if the data is spectral or XYZ.
     */
    get_spectral(): boolean
    /**
     * Gets the spectral data of IT8 file.
     */
    get_spectrum_array(): Spectrum[]
    /**
     * Gets a specific spectrum in an IT8 file.
     * @param id the spectrum ID value
     */
    get_spectrum_by_id(id: string): Spectrum
    /**
     * Gets the file title.
     */
    get_title(): string
    /**
     * Gets the XYZ value for a specific RGB value.
     * @param R the red value
     * @param G the green value
     * @param B the blue value
     * @param delta the smallest difference between colors, e.g. 0.01f
     */
    get_xyz_for_rgb(R: number, G: number, B: number, delta: number): ColorXYZ
    /**
     * Finds an option in the file.
     * @param option a option, e.g. "TYPE_CRT"
     */
    has_option(option: string): boolean
    /**
     * Loads a it8 file from data.
     * @param data text data
     */
    load_from_data(data: string[]): boolean
    /**
     * Loads a it8 file from disk.
     * @param file a #GFile
     */
    load_from_file(file: Gio.File): boolean
    /**
     * Saves a it8 file to an area of memory.
     * @param data a pointer to returned data
     */
    save_to_data(data: string[]): boolean
    /**
     * Saves a it8 file to disk
     * @param file a #GFile
     */
    save_to_file(file: Gio.File): boolean
    /**
     * Sets if the 'CREATED' attribute should be written. This is mainly useful
     * in the self test programs where we want to string compare the output data
     * with a known reference.
     * @param enable_created Is 'CREATED' should be written
     */
    set_enable_created(enable_created: boolean): void
    /**
     * Sets the measuring instrument that created the .it8 file
     * @param instrument the instruemnt name, e.g. "huey"
     */
    set_instrument(instrument: string): void
    /**
     * Set the kind of IT8 file.
     * @param kind a #CdIt8Kind, e.g %CD_IT8_KIND_TI3.
     */
    set_kind(kind: It8Kind): void
    /**
     * Set the calibration matrix in the it8 file.
     * @param matrix a #CdMat3x3.
     */
    set_matrix(matrix: Mat3x3): void
    /**
     * Sets if normalized data should be written to the .it8 file.
     * @param normalized If the data is normalized
     */
    set_normalized(normalized: boolean): void
    /**
     * Sets the program name that created the .it8 file
     * @param originator the program name, e.g. "gcm-calibrate"
     */
    set_originator(originator: string): void
    /**
     * Sets the reference that as used to create the .it8 reference
     * @param reference the instruemnt name, e.g. "colormunki"
     */
    set_reference(reference: string): void
    /**
     * Sets if spectral data should be written to the .it8 file.
     * @param spectral If the data is spectral
     */
    set_spectral(spectral: boolean): void
    /**
     * Set the spectral data
     * @param data the spectral data
     */
    set_spectrum_array(data: Spectrum[]): void
    /**
     * Sets the display name for the file.
     * @param title the title name, e.g. "Factory calibration"
     */
    set_title(title: string): void

    // Class property signals of Colord-1.0.Colord.It8

    connect(sigName: "notify::instrument", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::instrument", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::instrument", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::normalized", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::normalized", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::normalized", ...args: any[]): void
    connect(sigName: "notify::originator", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::originator", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::originator", ...args: any[]): void
    connect(sigName: "notify::reference", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference", ...args: any[]): void
    connect(sigName: "notify::spectral", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spectral", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spectral", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class It8 extends GObject.Object {

    // Own properties of Colord-1.0.Colord.It8

    static name: string
    static $gtype: GObject.GType<It8>

    // Constructors of Colord-1.0.Colord.It8

    constructor(config?: It8_ConstructProps) 
    /**
     * Creates a new #CdIt8 object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdIt8 object.
     * @constructor 
     */
    static new(): It8
    /**
     * Creates a new #CdIt8 object.
     * @constructor 
     * @param kind a #CdIt8Kind, e.g %CD_IT8_KIND_TI3.
     */
    static new_with_kind(kind: It8Kind): It8
    _init(config?: It8_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Profile_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Colord-1.0.Colord.Profile

    /**
     * The object path of the remote object
     */
    object_path?: string | null
}

/**
 * Signal callback interface for `changed`
 */
interface Profile_ChangedSignalCallback {
    ($obj: Profile): void
}

interface Profile {

    // Own properties of Colord-1.0.Colord.Profile

    /**
     * The profile colorspace.
     */
    readonly colorspace: string
    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * When the profile was created.
     */
    readonly created: number
    /**
     * The profile filename.
     */
    readonly filename: string
    /**
     * The profile format.
     */
    readonly format: string
    /**
     * If the profile has a VCGT table.
     */
    readonly has_vcgt: string
    /**
     * The profile ID.
     */
    readonly id: string
    /**
     * If the profile is installed system wide for all users.
     */
    readonly is_system_wide: string
    /**
     * The profile kind.
     */
    readonly kind: string
    /**
     * The object path of the remote object
     */
    object_path: string
    /**
     * The profile owner, e.g. %500.
     */
    readonly owner: number
    /**
     * The profile qualifier.
     */
    readonly qualifier: string
    /**
     * The profile scope, e.g. %CD_OBJECT_SCOPE_TEMP.
     */
    readonly scope: number
    /**
     * The profile title.
     */
    readonly title: string
    /**
     * The profile warnings, e.g. "vcgt-non-monotonic".
     */
    readonly warnings: string[]

    // Own fields of Colord-1.0.Colord.Profile

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Profile

    /**
     * Connects to the object and fills up initial properties.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    // TODO fix conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connect_finish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the object and fills up initial properties.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Tests two profiles for equality.
     * @param profile2 another #CdProfile instance.
     */
    equal(profile2: Profile): boolean
    /**
     * Gets the profile age in seconds relative to the current time.
     */
    get_age(): number
    /**
     * Gets the profile colorspace.
     */
    get_colorspace(): Colorspace
    /**
     * Gets if the profile has been connected.
     */
    get_connected(): boolean
    /**
     * Gets the profile created date and time.
     */
    get_created(): number
    /**
     * Gets the profile filename.
     */
    get_filename(): string
    /**
     * Gets the profile format.
     */
    get_format(): string
    /**
     * Returns if the profile has a VCGT table.
     */
    get_has_vcgt(): boolean
    /**
     * Gets the profile ID.
     */
    get_id(): string
    /**
     * Returns if the profile is installed system wide and available for all
     * users.
     */
    get_is_system_wide(): boolean
    /**
     * Gets the profile kind.
     */
    get_kind(): ProfileKind
    /**
     * Returns the profile metadata.
     */
    get_metadata(): GLib.HashTable
    /**
     * Returns the profile metadata for a specific key.
     * @param key a key for the metadata dictionary
     */
    get_metadata_item(key: string): string
    /**
     * Gets the object path for the profile.
     */
    get_object_path(): string
    /**
     * Gets the profile owner.
     */
    get_owner(): number
    /**
     * Gets the profile qualifier.
     */
    get_qualifier(): string
    /**
     * Gets the profile scope.
     */
    get_scope(): ObjectScope
    /**
     * Gets the profile title.
     */
    get_title(): string
    /**
     * Gets the profile warnings as a string array.
     */
    get_warnings(): string[]
    /**
     * Gets if the current user has access permissions to the profile.
     */
    has_access(): boolean
    /**
     * Sets the profile system wide.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    install_system_wide(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    install_system_wide_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets the profile system wide.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    install_system_wide_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Loads a local ICC object from the abstract profile.
     * @param flags options for loading the profile
     * @param cancellable A #GCancellable, or %NULL
     */
    load_icc(flags: IccLoadFlags, cancellable: Gio.Cancellable | null): Icc
    /**
     * Sets the object path of the profile.
     * @param object_path The colord object path.
     */
    set_object_path(object_path: string): void
    /**
     * Deletes a color device.
     * @param key a key name
     * @param value a key value
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_property(key: string, value?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value?: any): void
    set_property(...args: any[]): any
    set_property(args_or_property_name: any[] | string, value?: any): void | any
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    set_property_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets properties on an object
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The key
     * @param value The value
     * @param cancellable a #GCancellable or %NULL
     */
    set_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts the profile to a string description.
     */
    to_string(): string

    // Own virtual methods of Colord-1.0.Colord.Profile

    vfunc_changed(): void

    // Own signals of Colord-1.0.Colord.Profile

    connect(sigName: "changed", callback: Profile_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Profile_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Profile

    connect(sigName: "notify::colorspace", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::colorspace", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::created", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::has-vcgt", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-vcgt", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-vcgt", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-system-wide", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-system-wide", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-system-wide", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: "notify::qualifier", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qualifier", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qualifier", ...args: any[]): void
    connect(sigName: "notify::scope", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warnings", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warnings", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warnings", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Profile extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Profile

    static name: string
    static $gtype: GObject.GType<Profile>

    // Constructors of Colord-1.0.Colord.Profile

    constructor(config?: Profile_ConstructProps) 
    /**
     * Creates a new #CdProfile object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdProfile object.
     * @constructor 
     */
    static new(): Profile
    /**
     * Creates a new #CdProfile object with a known object path.
     * @constructor 
     * @param object_path The colord object path.
     */
    static new_with_object_path(object_path: string): Profile
    _init(config?: Profile_ConstructProps): void
    /**
     * Converts a string to a #CdProfileError.
     * @param error_desc 
     */
    static error_from_string(error_desc: string): ProfileError
    static error_quark(): GLib.Quark
    /**
     * Converts a #CdProfileError to a string.
     * @param error_enum 
     */
    static error_to_string(error_enum: ProfileError): string
    static kind_from_string(profile_kind: string): ProfileKind
    static kind_to_string(profile_kind: ProfileKind): string
    /**
     * Converts a string to a #CdProfileQuality.
     * @param quality 
     */
    static quality_from_string(quality: string): ProfileQuality
    /**
     * Converts a #CdProfileQuality to a string.
     * @param quality_enum 
     */
    static quality_to_string(quality_enum: ProfileQuality): string
    /**
     * Converts a string to a #CdProfileWarning.
     * @param type 
     */
    static warning_from_string(type: string): ProfileWarning
    /**
     * Converts a #CdProfileWarning to a string.
     * @param kind_enum 
     */
    static warning_to_string(kind_enum: ProfileWarning): string
}

interface Sensor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Colord-1.0.Colord.Sensor

    /**
     * The object path of the remote object
     */
    object_path?: string | null
}

/**
 * Signal callback interface for `button-pressed`
 */
interface Sensor_ButtonPressedSignalCallback {
    ($obj: Sensor): void
}

interface Sensor {

    // Own properties of Colord-1.0.Colord.Sensor

    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * If the sensor has a native driver.
     */
    readonly embedded: string
    /**
     * The object ID of the remote object
     */
    readonly id: string
    /**
     * The sensor kind.
     */
    readonly kind: string
    /**
     * If the sensor is locked.
     */
    readonly locked: string
    /**
     * The sensor mode.
     */
    readonly mode: string
    /**
     * The sensor model.
     */
    readonly model: string
    /**
     * If the sensor has a native driver.
     */
    readonly native: string
    /**
     * The object path of the remote object
     */
    object_path: string
    /**
     * The sensor ID.
     */
    readonly serial: string
    /**
     * The sensor state.
     */
    readonly state: string
    /**
     * The sensor vendor.
     */
    readonly vendor: string

    // Own fields of Colord-1.0.Colord.Sensor

    parent_instance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Sensor

    /**
     * Connects to the sensor.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    // TODO fix conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connect_finish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the object and fills up initial properties.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Tests two sensors for equality.
     * @param sensor2 another #CdSensor instance.
     */
    equal(sensor2: Sensor): boolean
    /**
     * Returns the sensor metadata.
     */
    get_caps(): number
    /**
     * Gets if the sensor has been connected.
     */
    get_connected(): boolean
    /**
     * Returns if the sensor is embedded into the computer.
     */
    get_embedded(): boolean
    /**
     * Gets the object ID for the sensor.
     */
    get_id(): string
    /**
     * Gets the sensor kind.
     */
    get_kind(): SensorKind
    /**
     * Returns if the sensor is locked.
     */
    get_locked(): boolean
    /**
     * Returns the sensor metadata.
     */
    get_metadata(): GLib.HashTable
    /**
     * Returns the sensor metadata for a specific key.
     * @param key a key for the metadata dictionary
     */
    get_metadata_item(key: string): string
    /**
     * Gets the sensor operating mode.
     */
    get_mode(): SensorCap
    /**
     * Gets the sensor model.
     */
    get_model(): string
    /**
     * Returns if the sensor has a native driver.
     */
    get_native(): boolean
    /**
     * Gets the object path for the sensor.
     */
    get_object_path(): string
    /**
     * Gets a specific sensor option.
     * @param key a key to search for.
     */
    get_option(key: string): string
    /**
     * Gets any sensor options.
     */
    get_options(): GLib.HashTable
    /**
     * Gets a color sample from a sensor
     * @param cap a #CdSensorCap
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_sample(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_sample_finish(res: Gio.AsyncResult): ColorXYZ
    /**
     * Gets a sample from the sensor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cap The device capability, e.g. %CD_SENSOR_CAP_AMBIENT.
     * @param cancellable a #GCancellable or %NULL
     */
    get_sample_sync(cap: SensorCap, cancellable: Gio.Cancellable | null): ColorXYZ
    /**
     * Gets the sensor serial number.
     */
    get_serial(): string
    /**
     * Gets a color spectrum from a sensor
     * @param cap a #CdSensorCap
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_spectrum(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    get_spectrum_finish(res: Gio.AsyncResult): Spectrum
    /**
     * Gets a spectrum from the sensor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cap The device capability, e.g. %CD_SENSOR_CAP_AMBIENT.
     * @param cancellable a #GCancellable or %NULL
     */
    get_spectrum_sync(cap: SensorCap, cancellable: Gio.Cancellable | null): Spectrum
    /**
     * Gets the sensor state.
     */
    get_state(): SensorState
    /**
     * Gets the sensor vendor.
     */
    get_vendor(): string
    /**
     * Returns the sensor metadata for a specific key.
     * @param cap a specified capability, e.g. %CD_SENSOR_CAP_LCD
     */
    has_cap(cap: SensorCap): boolean
    /**
     * Locks the device so we can use it.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    lock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    lock_finish(res: Gio.AsyncResult): boolean
    /**
     * Locks the device so we can use it.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    lock_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the sensor.
     * @param object_path The colord object path.
     */
    set_object_path(object_path: string): void
    /**
     * Sets options on the sensor device.
     * @param values the options
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_options(values: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    set_options_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets options on the sensor device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param values the options
     * @param cancellable a #GCancellable or %NULL
     */
    set_options_sync(values: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    to_string(): string
    /**
     * Unlocks the sensor for use by other programs.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    unlock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    unlock_finish(res: Gio.AsyncResult): boolean
    /**
     * Unlocks the device for use by other programs.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    unlock_sync(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Colord-1.0.Colord.Sensor

    vfunc_button_pressed(): void

    // Own signals of Colord-1.0.Colord.Sensor

    connect(sigName: "button-pressed", callback: Sensor_ButtonPressedSignalCallback): number
    connect_after(sigName: "button-pressed", callback: Sensor_ButtonPressedSignalCallback): number
    emit(sigName: "button-pressed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Sensor

    connect(sigName: "notify::connected", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::embedded", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::embedded", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Sensor extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Sensor

    static name: string
    static $gtype: GObject.GType<Sensor>

    // Constructors of Colord-1.0.Colord.Sensor

    constructor(config?: Sensor_ConstructProps) 
    /**
     * Creates a new #CdSensor object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdSensor object.
     * @constructor 
     */
    static new(): Sensor
    /**
     * Creates a new #CdSensor object with a known object path.
     * @constructor 
     * @param object_path The colord object path.
     */
    static new_with_object_path(object_path: string): Sensor
    _init(config?: Sensor_ConstructProps): void
    /**
     * Gets the sensor capability as a enumerated value.
     * @param sensor_cap the sensor capability, e.g. 'projector'.
     */
    static cap_from_string(sensor_cap: string): SensorCap
    /**
     * Gets the sensor capability as a string.
     * @param sensor_cap a #CdSensorCap
     */
    static cap_to_string(sensor_cap: SensorCap): string
    /**
     * Converts a string to a #CdSensorError.
     * @param error_desc 
     */
    static error_from_string(error_desc: string): SensorError
    static error_quark(): GLib.Quark
    /**
     * Converts a #CdSensorError to a string.
     * @param error_enum 
     */
    static error_to_string(error_enum: SensorError): string
    /**
     * Gets the sensor kind as a enumerated value.
     * @param sensor_kind the sensor kind, e.g. 'huey'.
     */
    static kind_from_string(sensor_kind: string): SensorKind
    /**
     * Gets the sensor kind as a string.
     * @param sensor_kind a #CdSensorKind
     */
    static kind_to_string(sensor_kind: SensorKind): string
    /**
     * Gets the sensor stateability as a enumerated value.
     * @param sensor_state the sensor stateability, e.g. 'measuring'.
     */
    static state_from_string(sensor_state: string): SensorState
    /**
     * Gets the sensor stateability as a string.
     * @param sensor_state a #CdSensorState
     */
    static state_to_string(sensor_state: SensorState): string
}

interface ClientClass {

    // Own fields of Colord-1.0.Colord.ClientClass

    parent_class: GObject.ObjectClass
    device_added: (client: Client, device: Device) => void
    device_removed: (client: Client, device: Device) => void
    device_changed: (client: Client, device: Device) => void
    profile_added: (client: Client, profile: Profile) => void
    profile_removed: (client: Client, profile: Profile) => void
    profile_changed: (client: Client, profile: Profile) => void
    sensor_added: (client: Client, sensor: Sensor) => void
    sensor_removed: (client: Client, sensor: Sensor) => void
    sensor_changed: (client: Client, sensor: Sensor) => void
    changed: (client: Client) => void
}

abstract class ClientClass {

    // Own properties of Colord-1.0.Colord.ClientClass

    static name: string
}

interface ColorLab {

    // Own fields of Colord-1.0.Colord.ColorLab

    L: number
    a: number
    b: number

    // Owm methods of Colord-1.0.Colord.ColorLab

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorLab): void
    /**
     * Calculates the ΔE of two colors using the 1976 formula.
     * @param p2 Lab value 2
     */
    delta_e76(p2: ColorLab): number
    dup(): ColorLab
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Initialises a color value.
     * @param L component value
     * @param a component value
     * @param b component value
     */
    set(L: number, a: number, b: number): void
}

class ColorLab {

    // Own properties of Colord-1.0.Colord.ColorLab

    static name: string

    // Constructors of Colord-1.0.Colord.ColorLab

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorLab
}

interface ColorRGB {

    // Own fields of Colord-1.0.Colord.ColorRGB

    R: number
    G: number
    B: number

    // Owm methods of Colord-1.0.Colord.ColorRGB

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorRGB): void
    dup(): ColorRGB
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Set an RGB color which is roughly representative to the wavelength.
     * @param wavelength the wavelength roughly between 380nm and 780nm
     */
    from_wavelength(wavelength: number): void
    interpolate(p2: ColorRGB, index: number, result: ColorRGB): void
    /**
     * Initialises a color value.
     * @param R component value
     * @param G component value
     * @param B component value
     */
    set(R: number, G: number, B: number): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    to_rgb8(dest: ColorRGB8): void
}

class ColorRGB {

    // Own properties of Colord-1.0.Colord.ColorRGB

    static name: string

    // Constructors of Colord-1.0.Colord.ColorRGB

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorRGB
    /**
     * Interpolate the RGB array to a different size.
     * This uses the Akima interpolation algorithm unless the array would become
     * non-monotonic, in which case it falls back to linear interpolation.
     * @param array Input array
     * @param new_length the target length of the return array
     */
    static array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[]
    /**
     * Checks the array for monotonicity.
     * @param array Input array
     */
    static array_is_monotonic(array: ColorRGB[]): boolean
    /**
     * Creates a new RGB array.
     */
    static array_new(): ColorRGB[]
}

interface ColorRGB8 {

    // Own fields of Colord-1.0.Colord.ColorRGB8

    R: number
    G: number
    B: number
}

class ColorRGB8 {

    // Own properties of Colord-1.0.Colord.ColorRGB8

    static name: string
}

interface ColorSwatch {

    // Owm methods of Colord-1.0.Colord.ColorSwatch

    dup(): ColorSwatch
    /**
     * Deallocates a color swatch.
     */
    free(): void
    get_name(): string
    get_value(): ColorLab
    /**
     * Initialises a swatch name.
     * @param name component name
     */
    set_name(name: string): void
    /**
     * Initialises a swatch value.
     * @param value component value
     */
    set_value(value: ColorLab): void
}

class ColorSwatch {

    // Own properties of Colord-1.0.Colord.ColorSwatch

    static name: string

    // Constructors of Colord-1.0.Colord.ColorSwatch

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorSwatch
}

interface ColorUVW {

    // Own fields of Colord-1.0.Colord.ColorUVW

    U: number
    V: number
    W: number

    // Owm methods of Colord-1.0.Colord.ColorUVW

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorUVW): void
    dup(): ColorUVW
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Gets the chromaticity distance in the CIE 1960 UCS.
     * @param p2 color
     */
    get_chroma_difference(p2: ColorUVW): number
    /**
     * Initialises a color value.
     * @param U component value
     * @param V component value
     * @param W component value
     */
    set(U: number, V: number, W: number): void
    /**
     * Sets the CIEUVW color from a Planckian locus of specific temperature.
     * @param temp temperature in Kelvin
     */
    set_planckian_locus(temp: number): void
}

class ColorUVW {

    // Own properties of Colord-1.0.Colord.ColorUVW

    static name: string

    // Constructors of Colord-1.0.Colord.ColorUVW

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorUVW
}

interface ColorXYZ {

    // Own fields of Colord-1.0.Colord.ColorXYZ

    X: number
    Y: number
    Z: number

    // Owm methods of Colord-1.0.Colord.ColorXYZ

    /**
     * Initialises a color value.
     */
    clear(): void
    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorXYZ): void
    dup(): ColorXYZ
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Normalizes `src` to y=1.0
     * @param max 
     * @param dest the destination color
     */
    normalize(max: number, dest: ColorXYZ): void
    /**
     * Initialises a color value.
     * @param X component value
     * @param Y component value
     * @param Z component value
     */
    set(X: number, Y: number, Z: number): void
    /**
     * Gets the correlated color temperature for the XYZ value.
     */
    to_cct(): number
    /**
     * Convert from one color format to another.
     * @param whitepoint the whitepoint
     * @param dest the destination color
     */
    to_uvw(whitepoint: ColorXYZ, dest: ColorUVW): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    to_yxy(dest: ColorYxy): void
}

class ColorXYZ {

    // Own properties of Colord-1.0.Colord.ColorXYZ

    static name: string

    // Constructors of Colord-1.0.Colord.ColorXYZ

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorXYZ
}

interface ColorYxy {

    // Own fields of Colord-1.0.Colord.ColorYxy

    Y: number
    x: number
    y: number

    // Owm methods of Colord-1.0.Colord.ColorYxy

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorYxy): void
    dup(): ColorYxy
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Initialises a color value.
     * @param Y component value
     * @param x component value
     * @param y component value
     */
    set(Y: number, x: number, y: number): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    to_uvw(dest: ColorUVW): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    to_xyz(dest: ColorXYZ): void
}

class ColorYxy {

    // Own properties of Colord-1.0.Colord.ColorYxy

    static name: string

    // Constructors of Colord-1.0.Colord.ColorYxy

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorYxy
}

interface DeviceClass {

    // Own fields of Colord-1.0.Colord.DeviceClass

    parent_class: GObject.ObjectClass
    changed: (device: Device) => void
}

abstract class DeviceClass {

    // Own properties of Colord-1.0.Colord.DeviceClass

    static name: string
}

interface EdidClass {

    // Own fields of Colord-1.0.Colord.EdidClass

    parent_class: GObject.ObjectClass
}

abstract class EdidClass {

    // Own properties of Colord-1.0.Colord.EdidClass

    static name: string
}

interface IccClass {

    // Own fields of Colord-1.0.Colord.IccClass

    parent_class: GObject.ObjectClass
}

abstract class IccClass {

    // Own properties of Colord-1.0.Colord.IccClass

    static name: string
}

interface It8Class {

    // Own fields of Colord-1.0.Colord.It8Class

    parent_class: GObject.ObjectClass
}

abstract class It8Class {

    // Own properties of Colord-1.0.Colord.It8Class

    static name: string
}

interface Mat3x3 {

    // Own fields of Colord-1.0.Colord.Mat3x3

    m00: number
    m01: number
    m02: number
    m10: number
    m11: number
    m12: number
    m20: number
    m21: number
    m22: number
}

class Mat3x3 {

    // Own properties of Colord-1.0.Colord.Mat3x3

    static name: string
}

interface ProfileClass {

    // Own fields of Colord-1.0.Colord.ProfileClass

    parent_class: GObject.ObjectClass
    changed: (profile: Profile) => void
}

abstract class ProfileClass {

    // Own properties of Colord-1.0.Colord.ProfileClass

    static name: string
}

interface SensorClass {

    // Own fields of Colord-1.0.Colord.SensorClass

    parent_class: GObject.ObjectClass
    button_pressed: (sensor: Sensor) => void
}

abstract class SensorClass {

    // Own properties of Colord-1.0.Colord.SensorClass

    static name: string
}

interface Spectrum {

    // Owm methods of Colord-1.0.Colord.Spectrum

    /**
     * Adds a value in nm to the spectrum.
     * @param data 
     */
    add_value(data: number): void
    dup(): Spectrum
    /**
     * Deallocates a color spectrum.
     */
    free(): void
    /**
     * Gets the spectral data.
     * NOTE: This is not normalized
     */
    get_data(): number[]
    /**
     * Gets the end value of the spectral data.
     */
    get_end(): number
    /**
     * Gets the spectral data.
     */
    get_id(): string
    /**
     * Gets the normalization value of the spectral data.
     * NOTE: This affects every value in the spectrum.
     */
    get_norm(): number
    /**
     * Gets the divisor of the spectra, for instance a .
     */
    get_resolution(): number
    /**
     * Gets the size of the spectrum data.
     */
    get_size(): number
    /**
     * Gets the start value of the spectral data.
     */
    get_start(): number
    /**
     * Gets the spectrum data at a specified index.
     * @param idx an index into the data
     */
    get_value(idx: number): number
    /**
     * Gets the value from the spectral data for a given wavelength.
     * @param wavelength the wavelength in nm
     */
    get_value_for_nm(wavelength: number): number
    /**
     * Gets the largest normalised value in the spectrum.
     */
    get_value_max(): number
    /**
     * Gets the smallest normalised value in the spectrum.
     */
    get_value_min(): number
    /**
     * Gets the spectrum data at a specified index, without any normalization
     * applied. Most people should use cd_spectrum_get_value() instead.
     * @param idx an index into the data
     */
    get_value_raw(idx: number): number
    /**
     * Gets the wavelenth that corresponds to the specified index.
     * @param idx an index into the data
     */
    get_wavelength(idx: number): number
    /**
     * Gets the calibration coefficients used to map pixel indexes to
     * wavelengths.
     * @param c1 the 1st coefficient
     * @param c2 the 2nd coefficient
     * @param c3 the 3rd coefficient
     */
    get_wavelength_cal(c1: number, c2: number, c3: number): void
    /**
     * Ensures no values in the spectrum fall above a set limit. If they
     * are found, set them to `value`.
     * @param value the threshold value to limit the spectrum
     */
    limit_max(value: number): void
    /**
     * Ensures no values in the spectrum fall below a set limit. If they
     * are found, set them to `value`.
     * @param value the threshold value to limit the spectrum
     */
    limit_min(value: number): void
    /**
     * Multiplies two spectra together.
     * @param s2 a #CdSpectrum instance, possibly an absorption spectrum.
     * @param resolution the step size in nm
     */
    multiply(s2: Spectrum, resolution: number): Spectrum
    /**
     * Multiplies a spectra with a scalar value.
     * @param value a scalar value
     */
    multiply_scalar(value: number): Spectrum
    /**
     * Normalizes a spectrum to a specific value at a specific wavelength.
     * @param wavelength the wavelength in nm
     * @param value the value to normalize to
     */
    normalize(wavelength: number, value: number): void
    /**
     * Normalizes a spectrum to a specific value at its maximum value.
     * @param value the value to normalize to
     */
    normalize_max(value: number): void
    /**
     * Resample a new spectrum with linear index to wavelength coefficients.
     * @param start the new spectrum start
     * @param end the new spectrum end
     * @param resolution the resolution to use when resampling
     */
    resample(start: number, end: number, resolution: number): Spectrum
    /**
     * Resample a new spectrum with the desired number of points.
     * @param size the output spectrum size
     */
    resample_to_size(size: number): Spectrum
    /**
     * Sets the spectrum data.
     * @param value component value
     */
    set_data(value: number[]): void
    /**
     * Set the end value of the spectal data in nm.
     * 
     * If there is already spectral data, the wavelength calibration will
     * also be set automatically.
     * @param end the end value of the spectral data
     */
    set_end(end: number): void
    /**
     * Sets a spectrum id.
     * @param id component id
     */
    set_id(id: string): void
    /**
     * Set the normalization value of the spectrum.
     * NOTE: This affects every value in the spectrum.
     * @param norm the end value of the spectral data
     */
    set_norm(norm: number): void
    /**
     * Set the start value of the spectal data in nm.
     * @param start the start value of the spectral data
     */
    set_start(start: number): void
    /**
     * Overwrites the spectrum data at a specified index.
     * @param idx an index into the data
     * @param data a data value
     */
    set_value(idx: number, data: number): void
    /**
     * Sets the calibration coefficients used to map pixel indexes to
     * wavelengths.
     * 
     * This function will set the 'end' wavelength automatically,
     * potentially overwriting the value set by cd_spectrum_set_end().
     * @param c1 the 1st coefficient
     * @param c2 the 2nd coefficient
     * @param c3 the 3rd coefficient
     */
    set_wavelength_cal(c1: number, c2: number, c3: number): void
    /**
     * Subtracts one spectral plot from another. If the spectra have the same start,
     * end and the same number of data points they are not resampled.
     * @param s2 a #CdSpectrum instance, e.g. a dark calibration
     * @param resolution the resolution to use when resampling
     */
    subtract(s2: Spectrum, resolution: number): Spectrum
    /**
     * Returns a graphical representation of the spectrum.
     * @param max_width the terminal width
     * @param max_height the terminal height
     */
    to_string(max_width: number, max_height: number): string
}

class Spectrum {

    // Own properties of Colord-1.0.Colord.Spectrum

    static name: string

    // Constructors of Colord-1.0.Colord.Spectrum

    /**
     * Allocates a spectrum.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a spectrum.
     * @constructor 
     */
    static new(): Spectrum
    /**
     * Allocates a Planckian spectrum at a specific temperature.
     * @constructor 
     * @param temperature the temperature in Kelvin
     */
    static planckian_new(temperature: number): Spectrum
    /**
     * Allocates a Planckian spectrum at a specific temperature.
     * @constructor 
     * @param temperature the temperature in Kelvin
     * @param start the new spectrum start
     * @param end the new spectrum end
     * @param resolution the resolution to use when resampling
     */
    static planckian_new_full(temperature: number, start: number, end: number, resolution: number): Spectrum
    /**
     * Allocates a spectrum with a preallocated size.
     * @constructor 
     * @param reserved_size the future size of the spectrum
     */
    static sized_new(reserved_size: number): Spectrum
}

interface Vec3 {

    // Own fields of Colord-1.0.Colord.Vec3

    v0: number
    v1: number
    v2: number

    // Owm methods of Colord-1.0.Colord.Vec3

    /**
     * Adds two vector quantaties
     * The arguments `src` and `dest` can be the same value.
     * @param src2 the other source
     * @param dest the destination
     */
    add(src2: Vec3, dest: Vec3): void
    /**
     * Clears a vector, setting all it's values to zero.
     */
    clear(): void
    /**
     * Copies the vector into another vector.
     * The arguments `src` and `dest` cannot be the same value.
     * @param dest the destination
     */
    copy(dest: Vec3): void
    /**
     * Gets the raw data for the vector.
     */
    get_data(): number
    /**
     * Initialises a vector.
     * @param v0 component value
     * @param v1 component value
     * @param v2 component value
     */
    init(v0: number, v1: number, v2: number): void
    /**
     * Multiplies a vector with a scalar.
     * The arguments `src` and `dest` can be the same value.
     * @param value the scalar multiplier
     * @param dest the destination
     */
    scalar_multiply(value: number, dest: Vec3): void
    /**
     * Gets the mean squared error for a pair of vectors
     * @param src2 another vector source
     */
    squared_error(src2: Vec3): number
    /**
     * Subtracts one vector quantity from another
     * The arguments `src` and `dest` can be the same value.
     * @param src2 the other source
     * @param dest the destination
     */
    subtract(src2: Vec3, dest: Vec3): void
    /**
     * Obtains a string representaton of a vector.
     */
    to_string(): string
}

class Vec3 {

    // Own properties of Colord-1.0.Colord.Vec3

    static name: string
}

    type PixelFormat = number
}
export default Colord;