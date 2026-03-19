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

export namespace Colord {
    /**
     * Colord-1.0
     */

    /**
     * Errors that can be thrown
     * @gir-type Enum
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
     * @gir-type Enum
     * @since 1.3.5
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    enum DeviceMode {
        UNKNOWN,
        PHYSICAL,
        VIRTUAL,
    }

    /**
     * The device to profile relationship.
     * @gir-type Enum
     */
    enum DeviceRelation {
        UNKNOWN,
        SOFT,
        HARD,
    }

    /**
     * The ICC error code.
     * @gir-type Enum
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
     * @gir-type Enum
     * @since 0.1.32
     */
    enum IccSaveFlags {
        /**
         * No flags set.
         */
        NONE,
    }

    /**
     * Errors that can be thrown
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    enum ObjectScope {
        UNKNOWN,
        NORMAL,
        TEMP,
        DISK,
    }

    /**
     * Errors that can be thrown
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
     * @since 0.1.26
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
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    enum StandardSpace {
        UNKNOWN,
        SRGB,
        ADOBE_RGB,
        PROPHOTO_RGB,
    }

    const CLIENT_PROPERTY_DAEMON_VERSION: string;
    const CLIENT_PROPERTY_SYSTEM_MODEL: string;
    const CLIENT_PROPERTY_SYSTEM_VENDOR: string;
    const DEVICE_METADATA_OUTPUT_EDID_MD5: string;
    const DEVICE_METADATA_OUTPUT_PRIORITY: string;
    const DEVICE_METADATA_OUTPUT_PRIORITY_PRIMARY: string;
    const DEVICE_METADATA_OUTPUT_PRIORITY_SECONDARY: string;
    const DEVICE_METADATA_OWNER_CMDLINE: string;
    const DEVICE_METADATA_XRANDR_NAME: string;
    const DEVICE_PROPERTY_COLORSPACE: string;
    const DEVICE_PROPERTY_CREATED: string;
    const DEVICE_PROPERTY_EMBEDDED: string;
    const DEVICE_PROPERTY_ENABLED: string;
    const DEVICE_PROPERTY_FORMAT: string;
    const DEVICE_PROPERTY_ID: string;
    const DEVICE_PROPERTY_KIND: string;
    const DEVICE_PROPERTY_METADATA: string;
    const DEVICE_PROPERTY_MODE: string;
    const DEVICE_PROPERTY_MODEL: string;
    const DEVICE_PROPERTY_MODIFIED: string;
    const DEVICE_PROPERTY_OWNER: string;
    const DEVICE_PROPERTY_PROFILES: string;
    const DEVICE_PROPERTY_PROFILING_INHIBITORS: string;
    const DEVICE_PROPERTY_SCOPE: string;
    const DEVICE_PROPERTY_SEAT: string;
    const DEVICE_PROPERTY_SERIAL: string;
    const DEVICE_PROPERTY_VENDOR: string;
    const PIXEL_FORMAT_ARGB32: number;
    const PIXEL_FORMAT_BGRA32: number;
    const PIXEL_FORMAT_CMYK32: number;
    const PIXEL_FORMAT_RGB24: number;
    const PIXEL_FORMAT_RGBA32: number;
    const PIXEL_FORMAT_UNKNOWN: number;
    const PROFILE_METADATA_ACCURACY_DE76_AVG: string;
    const PROFILE_METADATA_ACCURACY_DE76_MAX: string;
    const PROFILE_METADATA_ACCURACY_DE76_RMS: string;
    const PROFILE_METADATA_CMF_BINARY: string;
    const PROFILE_METADATA_CMF_PRODUCT: string;
    const PROFILE_METADATA_CMF_VERSION: string;
    const PROFILE_METADATA_CONNECTION_TYPE: string;
    const PROFILE_METADATA_CONNECTION_TYPE_DISPLAYPORT: string;
    const PROFILE_METADATA_CONNECTION_TYPE_DVI: string;
    const PROFILE_METADATA_CONNECTION_TYPE_HDMI: string;
    const PROFILE_METADATA_CONNECTION_TYPE_INTERNAL: string;
    const PROFILE_METADATA_CONNECTION_TYPE_VGA: string;
    const PROFILE_METADATA_DATA_SOURCE: string;
    const PROFILE_METADATA_DATA_SOURCE_CALIB: string;
    const PROFILE_METADATA_DATA_SOURCE_EDID: string;
    const PROFILE_METADATA_DATA_SOURCE_STANDARD: string;
    const PROFILE_METADATA_DATA_SOURCE_TEST: string;
    const PROFILE_METADATA_EDID_MD5: string;
    const PROFILE_METADATA_EDID_MNFT: string;
    const PROFILE_METADATA_EDID_MODEL: string;
    const PROFILE_METADATA_EDID_SERIAL: string;
    const PROFILE_METADATA_EDID_VENDOR: string;
    const PROFILE_METADATA_FILE_CHECKSUM: string;
    const PROFILE_METADATA_LICENSE: string;
    const PROFILE_METADATA_MAPPING_DEVICE_ID: string;
    const PROFILE_METADATA_MAPPING_FORMAT: string;
    const PROFILE_METADATA_MAPPING_QUALIFIER: string;
    const PROFILE_METADATA_MEASUREMENT_DEVICE: string;
    const PROFILE_METADATA_QUALITY: string;
    const PROFILE_METADATA_QUALITY_HIGH: string;
    const PROFILE_METADATA_QUALITY_LOW: string;
    const PROFILE_METADATA_QUALITY_MEDIUM: string;
    const PROFILE_METADATA_SCREEN_BRIGHTNESS: string;
    const PROFILE_METADATA_SCREEN_SURFACE: string;
    const PROFILE_METADATA_SCREEN_SURFACE_GLOSSY: string;
    const PROFILE_METADATA_SCREEN_SURFACE_MATTE: string;
    const PROFILE_METADATA_STANDARD_SPACE: string;
    const PROFILE_PROPERTY_COLORSPACE: string;
    const PROFILE_PROPERTY_CREATED: string;
    const PROFILE_PROPERTY_FILENAME: string;
    const PROFILE_PROPERTY_FORMAT: string;
    const PROFILE_PROPERTY_HAS_VCGT: string;
    const PROFILE_PROPERTY_ID: string;
    const PROFILE_PROPERTY_IS_SYSTEM_WIDE: string;
    const PROFILE_PROPERTY_KIND: string;
    const PROFILE_PROPERTY_METADATA: string;
    const PROFILE_PROPERTY_OWNER: string;
    const PROFILE_PROPERTY_QUALIFIER: string;
    const PROFILE_PROPERTY_SCOPE: string;
    const PROFILE_PROPERTY_TITLE: string;
    const PROFILE_PROPERTY_WARNINGS: string;
    const SENSOR_METADATA_IMAGE_ATTACH: string;
    const SENSOR_METADATA_IMAGE_CALIBRATE: string;
    const SENSOR_METADATA_IMAGE_SCREEN: string;
    const SENSOR_PROPERTY_CAPABILITIES: string;
    const SENSOR_PROPERTY_EMBEDDED: string;
    const SENSOR_PROPERTY_ID: string;
    const SENSOR_PROPERTY_KIND: string;
    const SENSOR_PROPERTY_LOCKED: string;
    const SENSOR_PROPERTY_METADATA: string;
    const SENSOR_PROPERTY_MODE: string;
    const SENSOR_PROPERTY_MODEL: string;
    const SENSOR_PROPERTY_NATIVE: string;
    const SENSOR_PROPERTY_OPTIONS: string;
    const SENSOR_PROPERTY_SERIAL: string;
    const SENSOR_PROPERTY_STATE: string;
    const SENSOR_PROPERTY_VENDOR: string;
    /**
     * Get the blackbody color for a specific temperature. If the temperature
     * range is outside 1000K to 10000K then the result is clipped.
     * @param temp the temperature in Kelvin
     * @param result the destination color
     * @returns TRUE if `temp` was in range and the result accurate
     * @since 0.1.26
     */
    function color_get_blackbody_rgb(temp: number, result: ColorRGB): boolean;
    /**
     * Get the blackbody color for a specific temperature. If the temperature
     * range is outside 1000K to 10000K then the result is clipped.
     * @param temp the temperature in Kelvin
     * @param result the destination color
     * @param flags some {@link Colord.ColorBlackbodyFlags}, e.g. {@link Colord.ColorBlackbodyFlags.USE_PLANCKIAN}
     * @returns TRUE if `temp` was in range and the result accurate
     * @since 1.3.5
     */
    function color_get_blackbody_rgb_full(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags | null): boolean;
    /**
     * Convert from one color format to another.
     * @param src the source color
     * @param dest the destination color
     * @since 0.1.27
     */
    function color_rgb8_to_rgb(src: ColorRGB8, dest: ColorRGB): void;
    /**
     * Interpolate the RGB array to a different size.
     * This uses the Akima interpolation algorithm unless the array would become
     * non-monotonic, in which case it falls back to linear interpolation.
     * @param array Input array
     * @param new_length the target length of the return array
     * @returns An array of size `new_length` or `null`
     * @since 0.1.31
     */
    function color_rgb_array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[];
    /**
     * Checks the array for monotonicity.
     * @param array Input array
     * @returns `true` if the array is monotonic
     * @since 0.1.31
     */
    function color_rgb_array_is_monotonic(array: ColorRGB[]): boolean;
    /**
     * Creates a new RGB array.
     * @returns New array
     * @since 0.1.31
     */
    function color_rgb_array_new(): ColorRGB[];
    /**
     * @param colorspace
     */
    function colorspace_from_string(colorspace: string): Colorspace;
    /**
     * @param colorspace
     */
    function colorspace_to_string(colorspace: Colorspace | null): string;
    /**
     * Clears a matrix value, setting all it's values to zero.
     * @param src the source
     */
    function mat33_clear(src: Mat3x3): void;
    /**
     * Copies the matrix.
     * The arguments `src` and `dest` cannot be the same value.
     * @param src the source
     * @param dest the destination
     */
    function mat33_copy(src: Mat3x3, dest: Mat3x3): void;
    /**
     * Gets the determinant of the matrix.
     * @param src the source
     */
    function mat33_determinant(src: Mat3x3): number;
    /**
     * Gets the raw data for the matrix.
     * @param src the matrix source
     * @returns the pointer to the data segment.
     */
    function mat33_get_data(src: Mat3x3): number;
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
    function mat33_init(
        dest: Mat3x3,
        m00: number,
        m01: number,
        m02: number,
        m10: number,
        m11: number,
        m12: number,
        m20: number,
        m21: number,
        m22: number,
    ): void;
    /**
     * Determine whether all entries in the specified matrix are finite and not
     * NaNs.
     * @param mat the matrix to test
     * @returns `true` if `isfinite()` returns `true` for all values.
     */
    function mat33_is_finite(mat: Mat3x3): boolean;
    /**
     * Multiply (convolve) one matrix with another.
     * The arguments `mat_src1` cannot be the same as `mat_dest`, and
     * `mat_src2` cannot be the same as `mat_dest`.
     * @param mat_src1 the matrix source
     * @param mat_src2 the other matrix source
     * @param mat_dest the destination
     */
    function mat33_matrix_multiply(mat_src1: Mat3x3, mat_src2: Mat3x3, mat_dest: Mat3x3): void;
    /**
     * Normalizes a matrix
     *
     * The arguments `src` and `dest` can be the same value.
     * @param src the source matrix
     * @param dest the destination matrix
     */
    function mat33_normalize(src: Mat3x3, dest: Mat3x3): void;
    /**
     * Inverts the matrix.
     * The arguments `src` and `dest` cannot be the same value.
     * @param src the source
     * @param dest the destination
     * @returns `false` if det is zero (singular).
     */
    function mat33_reciprocal(src: Mat3x3, dest: Mat3x3): boolean;
    /**
     * Multiplies a matrix with a scalar.
     * The arguments `vec_src` and `vec_dest` can be the same value.
     * @param mat_src the source
     * @param value the scalar
     * @param mat_dest the destination
     */
    function mat33_scalar_multiply(mat_src: Mat3x3, value: number, mat_dest: Mat3x3): void;
    /**
     * Sets the matrix to an identity value.
     * @param src the source
     */
    function mat33_set_identity(src: Mat3x3): void;
    /**
     * Obtains a string representaton of a matrix.
     * @param src the source
     * @returns the string. Free with `g_free()`
     */
    function mat33_to_string(src: Mat3x3): string;
    /**
     * Multiplies a matrix with a vector.
     * The arguments `vec_src` and `vec_dest` cannot be the same value.
     * @param mat_src the matrix source
     * @param vec_src the vector source
     * @param vec_dest the destination vector
     */
    function mat33_vector_multiply(mat_src: Mat3x3, vec_src: Vec3, vec_dest: Vec3): void;
    /**
     * @param object_scope
     */
    function object_scope_from_string(object_scope: string): ObjectScope;
    /**
     * @param object_scope
     */
    function object_scope_to_string(object_scope: ObjectScope | null): string;
    /**
     * @param pixel_format
     */
    function pixel_format_from_string(pixel_format: string): PixelFormat;
    /**
     * @param pixel_format
     */
    function pixel_format_to_string(pixel_format: PixelFormat): string;
    /**
     * @param rendering_intent
     */
    function rendering_intent_from_string(rendering_intent: string): RenderingIntent;
    /**
     * @param rendering_intent
     */
    function rendering_intent_to_string(rendering_intent: RenderingIntent | null): string;
    /**
     * Gets the standard colorspace as a enumerated value.
     * @param standard_space the standard colorspace, e.g. 'srgb'.
     * @returns a {@link Colord.StandardSpace}
     */
    function standard_space_from_string(standard_space: string): StandardSpace;
    /**
     * Gets the standard colorspace as a string.
     * @param standard_space a {@link Colord.StandardSpace}
     * @returns the standard colorspace, e.g. 'srgb'.
     */
    function standard_space_to_string(standard_space: StandardSpace | null): string;
    /**
     * Flags used when loading an ICC profile.
     * @gir-type Flags
     * @since 0.1.32
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

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted when properties may have changed.
             * @signal
             * @since 0.1.0
             */
            changed: () => void;
            /**
             * The ::device-added signal is emitted when a device is added.
             * @signal
             * @since 0.1.0
             */
            'device-added': (arg0: Device) => void;
            /**
             * The ::device-changed signal is emitted when a device is changed.
             * @signal
             * @since 0.1.2
             */
            'device-changed': (arg0: Device) => void;
            /**
             * The ::device-removed signal is emitted when a device is removed.
             * @signal
             * @since 0.1.0
             */
            'device-removed': (arg0: Device) => void;
            /**
             * The ::profile-added signal is emitted when a profile is added.
             * @signal
             * @since 0.1.2
             */
            'profile-added': (arg0: Profile) => void;
            /**
             * The ::profile-changed signal is emitted when a profile is changed.
             * @signal
             * @since 0.1.2
             */
            'profile-changed': (arg0: Profile) => void;
            /**
             * The ::profile-added signal is emitted when a profile is removed.
             * @signal
             * @since 0.1.2
             */
            'profile-removed': (arg0: Profile) => void;
            /**
             * The ::sensor-added signal is emitted when a sensor is added.
             * @signal
             * @since 0.1.6
             */
            'sensor-added': (arg0: Sensor) => void;
            /**
             * The ::sensor-changed signal is emitted when a sensor is changed.
             * @signal
             * @since 0.1.6
             */
            'sensor-changed': (arg0: Sensor) => void;
            /**
             * The ::sensor-added signal is emitted when a sensor is removed.
             * @signal
             * @since 0.1.6
             */
            'sensor-removed': (arg0: Sensor) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::daemon-version': (pspec: GObject.ParamSpec) => void;
            'notify::system-model': (pspec: GObject.ParamSpec) => void;
            'notify::system-vendor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connected: string;
            daemon_version: string;
            daemonVersion: string;
            system_model: string;
            systemModel: string;
            system_vendor: string;
            systemVendor: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * The if the object path has been connected as is valid for use.
         * @since 0.1.9
         */
        get connected(): string;
        /**
         * The daemon version.
         * @since 0.1.0
         */
        get daemon_version(): string;
        /**
         * The daemon version.
         * @since 0.1.0
         */
        get daemonVersion(): string;
        /**
         * The system model.
         * @since 1.0.2
         */
        get system_model(): string;
        /**
         * The system model.
         * @since 1.0.2
         */
        get systemModel(): string;
        /**
         * The system vendor.
         * @since 1.0.2
         */
        get system_vendor(): string;
        /**
         * The system vendor.
         * @since 1.0.2
         */
        get systemVendor(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts a string to a {@link Colord.ClientError}.
         * @param error_desc
         */
        static error_from_string(error_desc: string): ClientError;
        static error_quark(): GLib.Quark;
        /**
         * Converts a {@link Colord.ClientError} to a string.
         * @param error_enum
         */
        static error_to_string(error_enum: ClientError): string;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_device_added(device: Device): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_device_changed(device: Device): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_device_removed(device: Device): void;
        /**
         * @param profile
         * @virtual
         */
        vfunc_profile_added(profile: Profile): void;
        /**
         * @param profile
         * @virtual
         */
        vfunc_profile_changed(profile: Profile): void;
        /**
         * @param profile
         * @virtual
         */
        vfunc_profile_removed(profile: Profile): void;
        /**
         * @param sensor
         * @virtual
         */
        vfunc_sensor_added(sensor: Sensor): void;
        /**
         * @param sensor
         * @virtual
         */
        vfunc_sensor_changed(sensor: Sensor): void;
        /**
         * @param sensor
         * @virtual
         */
        vfunc_sensor_removed(sensor: Sensor): void;

        // Methods

        /**
         * Connects to the colord daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        connect(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Connects to the colord daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Connects to the colord daemon.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        connect(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Connects to the colord daemon.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a color device.
         * @param id identifier for the device
         * @param scope the scope of the device
         * @param properties properties to   set on the device, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        create_device(
            id: string,
            scope: ObjectScope | null,
            properties?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Device>;
        /**
         * Creates a color device.
         * @param id identifier for the device
         * @param scope the scope of the device
         * @param properties properties to   set on the device, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        create_device(
            id: string,
            scope: ObjectScope | null,
            properties: GLib.HashTable<string, string> | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Creates a color device.
         * @param id identifier for the device
         * @param scope the scope of the device
         * @param properties properties to   set on the device, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        create_device(
            id: string,
            scope: ObjectScope | null,
            properties?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Device} or `null`
         */
        create_device_finish(res: Gio.AsyncResult): Device;
        /**
         * Creates a color device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param id identifier for the device
         * @param scope the scope of the device
         * @param properties properties to   set on the device, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Device} object, or `null` for error
         */
        create_device_sync(
            id: string,
            scope: ObjectScope | null,
            properties?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
        ): Device;
        /**
         * Creates a color profile.
         * @param id identifier for the profile
         * @param scope the scope of the profile
         * @param properties properties to   set on the profile, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        create_profile(
            id: string,
            scope: ObjectScope | null,
            properties?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Profile>;
        /**
         * Creates a color profile.
         * @param id identifier for the profile
         * @param scope the scope of the profile
         * @param properties properties to   set on the profile, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        create_profile(
            id: string,
            scope: ObjectScope | null,
            properties: GLib.HashTable<string, string> | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Creates a color profile.
         * @param id identifier for the profile
         * @param scope the scope of the profile
         * @param properties properties to   set on the profile, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        create_profile(
            id: string,
            scope: ObjectScope | null,
            properties?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        create_profile_finish(res: Gio.AsyncResult): Profile;
        /**
         * Creates a color profile for an {@link Colord.Icc} Object.
         * @param icc {@link Colord.Icc} object
         * @param scope the scope of the profile
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        create_profile_for_icc(
            icc: Icc,
            scope: ObjectScope | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Profile>;
        /**
         * Creates a color profile for an {@link Colord.Icc} Object.
         * @param icc {@link Colord.Icc} object
         * @param scope the scope of the profile
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        create_profile_for_icc(
            icc: Icc,
            scope: ObjectScope | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Creates a color profile for an {@link Colord.Icc} Object.
         * @param icc {@link Colord.Icc} object
         * @param scope the scope of the profile
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        create_profile_for_icc(
            icc: Icc,
            scope: ObjectScope | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        create_profile_for_icc_finish(res: Gio.AsyncResult): Profile;
        /**
         * Creates a color profile from a {@link Colord.Icc} object.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param icc A {@link Colord.Icc}
         * @param scope the scope of the profile
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        create_profile_for_icc_sync(icc: Icc, scope: ObjectScope | null, cancellable?: Gio.Cancellable | null): Profile;
        /**
         * Creates a color profile.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param id identifier for the device
         * @param scope the scope of the profile
         * @param properties properties to   set on the profile, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        create_profile_sync(
            id: string,
            scope: ObjectScope | null,
            properties?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
        ): Profile;
        /**
         * Deletes a device.
         * @param device a {@link Colord.Device}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        delete_device(device: Device, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Deletes a device.
         * @param device a {@link Colord.Device}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        delete_device(
            device: Device,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Deletes a device.
         * @param device a {@link Colord.Device}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        delete_device(
            device: Device,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        delete_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Deletes a color device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param device a {@link Colord.Device}.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` is the device was deleted
         */
        delete_device_sync(device: Device, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Deletes a profile.
         * @param profile a {@link Colord.Profile}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        delete_profile(profile: Profile, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Deletes a profile.
         * @param profile a {@link Colord.Profile}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        delete_profile(
            profile: Profile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Deletes a profile.
         * @param profile a {@link Colord.Profile}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        delete_profile(
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        delete_profile_finish(res: Gio.AsyncResult): boolean;
        /**
         * Deletes a color profile.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param profile a {@link Colord.Profile}.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` is the profile was deleted
         */
        delete_profile_sync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Finds a device by an ID.
         * @param id a device id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        find_device(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Device>;
        /**
         * Finds a device by an ID.
         * @param id a device id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_device(
            id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a device by an ID.
         * @param id a device id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_device(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device> | void;
        /**
         * Finds a color device that has a property value.
         * @param key the device property key
         * @param value the device property value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        find_device_by_property(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Device>;
        /**
         * Finds a color device that has a property value.
         * @param key the device property key
         * @param value the device property value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_device_by_property(
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a color device that has a property value.
         * @param key the device property key
         * @param value the device property value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_device_by_property(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Device} or `null`
         */
        find_device_by_property_finish(res: Gio.AsyncResult): Device;
        /**
         * Finds a color device that has a property value.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param key The device property key.
         * @param value The device property value.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns A {@link Colord.Device} object, or `null` for error
         */
        find_device_by_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): Device;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Device} or `null`
         */
        find_device_finish(res: Gio.AsyncResult): Device;
        /**
         * Finds a color device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param id The device ID.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns A {@link Colord.Device} object, or `null` for error
         */
        find_device_sync(id: string, cancellable?: Gio.Cancellable | null): Device;
        /**
         * Finds a profile by an ID.
         * @param id a profile id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        find_profile(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Profile>;
        /**
         * Finds a profile by an ID.
         * @param id a profile id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_profile(
            id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a profile by an ID.
         * @param id a profile id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_profile(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Finds a profile by a filename.
         * @param filename a profile filename
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        find_profile_by_filename(filename: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Profile>;
        /**
         * Finds a profile by a filename.
         * @param filename a profile filename
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_profile_by_filename(
            filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a profile by a filename.
         * @param filename a profile filename
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_profile_by_filename(
            filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        find_profile_by_filename_finish(res: Gio.AsyncResult): Profile;
        /**
         * Finds a color profile from its filename.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param filename filename for the profile
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        find_profile_by_filename_sync(filename: string, cancellable?: Gio.Cancellable | null): Profile;
        /**
         * Finds a color profile that has a property value.
         * @param key the profile property key
         * @param value the profile property value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        find_profile_by_property(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Profile>;
        /**
         * Finds a color profile that has a property value.
         * @param key the profile property key
         * @param value the profile property value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_profile_by_property(
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a color profile that has a property value.
         * @param key the profile property key
         * @param value the profile property value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_profile_by_property(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        find_profile_by_property_finish(res: Gio.AsyncResult): Profile;
        /**
         * Finds a color profile that has a property value.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param key The profile property key.
         * @param value The profile property value.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        find_profile_by_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): Profile;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        find_profile_finish(res: Gio.AsyncResult): Profile;
        /**
         * Finds a color profile from its id.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param id id for the profile
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        find_profile_sync(id: string, cancellable?: Gio.Cancellable | null): Profile;
        /**
         * Finds a sensor by an ID.
         * @param id a sensor id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        find_sensor(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Sensor>;
        /**
         * Finds a sensor by an ID.
         * @param id a sensor id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_sensor(
            id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a sensor by an ID.
         * @param id a sensor id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        find_sensor(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Sensor> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Sensor} or `null`
         */
        find_sensor_finish(res: Gio.AsyncResult): Sensor;
        /**
         * Finds a color sensor.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param id The sensor ID.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns A {@link Colord.Sensor} object, or `null` for error
         */
        find_sensor_sync(id: string, cancellable?: Gio.Cancellable | null): Sensor;
        /**
         * Gets if the client has been connected.
         * @returns `true` if properties are valid
         */
        get_connected(): boolean;
        /**
         * Get colord daemon version.
         * @returns string containing the daemon version, e.g. "0.1.0"
         */
        get_daemon_version(): string;
        /**
         * Gets an array of color devices.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_devices(cancellable?: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        /**
         * Gets an array of color devices.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets an array of color devices.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
        /**
         * Gets an array of color devices.
         * @param kind the type of device.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_devices_by_kind(
            kind: DeviceKind | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Device[]>;
        /**
         * Gets an array of color devices.
         * @param kind the type of device.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices_by_kind(
            kind: DeviceKind | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets an array of color devices.
         * @param kind the type of device.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices_by_kind(
            kind: DeviceKind | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the devices
         */
        get_devices_by_kind_finish(res: Gio.AsyncResult): Device[];
        /**
         * Get an array of the device objects of a specified kind.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param kind a {@link Colord.DeviceKind}, e.g. {@link Colord.DeviceKind.DISPLAY}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns an array of 	 {@link Colord.Device} objects.
         */
        get_devices_by_kind_sync(kind: DeviceKind | null, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the devices
         */
        get_devices_finish(res: Gio.AsyncResult): Device[];
        /**
         * Get an array of the device objects.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns an array of 	 {@link Colord.Device} objects.
         */
        get_devices_sync(cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets if the colord server is currently running.
         * WARNING: This function may block for up to 5 seconds waiting for the daemon
         * to start if it is not already running.
         * @returns `true` if the colord process is running
         */
        get_has_server(): boolean;
        /**
         * Gets an array of color profiles.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_profiles(cancellable?: Gio.Cancellable | null): globalThis.Promise<Profile[]>;
        /**
         * Gets an array of color profiles.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_profiles(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets an array of color profiles.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_profiles(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile[]> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the profiles
         */
        get_profiles_finish(res: Gio.AsyncResult): Profile[];
        /**
         * Get an array of the profile objects.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns an array of 	 {@link Colord.Profile} objects.
         */
        get_profiles_sync(cancellable?: Gio.Cancellable | null): Profile[];
        /**
         * Gets an array of color sensors.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_sensors(cancellable?: Gio.Cancellable | null): globalThis.Promise<Sensor[]>;
        /**
         * Gets an array of color sensors.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_sensors(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets an array of color sensors.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_sensors(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Sensor[]> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the sensors
         */
        get_sensors_finish(res: Gio.AsyncResult): Sensor[];
        /**
         * Get an array of the sensor objects.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns an array of 	 {@link Colord.Sensor} objects.
         */
        get_sensors_sync(cancellable?: Gio.Cancellable | null): Sensor[];
        /**
         * Finds a standard profile space.
         * @param standard_space a profile id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_standard_space(
            standard_space: StandardSpace | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Profile>;
        /**
         * Finds a standard profile space.
         * @param standard_space a profile id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_standard_space(
            standard_space: StandardSpace | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finds a standard profile space.
         * @param standard_space a profile id
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_standard_space(
            standard_space: StandardSpace | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        get_standard_space_finish(res: Gio.AsyncResult): Profile;
        /**
         * Finds a standard colorspace.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param standard_space standard colorspace value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        get_standard_space_sync(standard_space: StandardSpace | null, cancellable?: Gio.Cancellable | null): Profile;
        /**
         * Get system model.
         * @returns string containing the system model, e.g. "T61"
         */
        get_system_model(): string;
        /**
         * Get system vendor.
         * @returns string containing the system vendor, e.g. "Lenovo"
         */
        get_system_vendor(): string;
        /**
         * Imports a color profile into the users home directory.
         *
         * If the profile should be accessible for all users, then call
         * `cd_profile_install_system_wide()` on the result.
         * @param file a {@link Gio.File}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        import_profile(file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<Profile>;
        /**
         * Imports a color profile into the users home directory.
         *
         * If the profile should be accessible for all users, then call
         * `cd_profile_install_system_wide()` on the result.
         * @param file a {@link Gio.File}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        import_profile(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Imports a color profile into the users home directory.
         *
         * If the profile should be accessible for all users, then call
         * `cd_profile_install_system_wide()` on the result.
         * @param file a {@link Gio.File}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        import_profile(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        import_profile_finish(res: Gio.AsyncResult): Profile;
        /**
         * Imports a color profile into the users home directory.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param file A {@link Gio.File}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A {@link Colord.Profile} object, or `null` for error
         */
        import_profile_sync(file: Gio.File, cancellable?: Gio.Cancellable | null): Profile;
    }

    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted when the device data has changed.
             * @signal
             * @since 0.1.0
             */
            changed: () => void;
            'notify::colorspace': (pspec: GObject.ParamSpec) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::created': (pspec: GObject.ParamSpec) => void;
            'notify::embedded': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
            'notify::profiling-inhibitors': (pspec: GObject.ParamSpec) => void;
            'notify::scope': (pspec: GObject.ParamSpec) => void;
            'notify::seat': (pspec: GObject.ParamSpec) => void;
            'notify::serial': (pspec: GObject.ParamSpec) => void;
            'notify::vendor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colorspace: number;
            connected: string;
            created: number;
            embedded: string;
            enabled: boolean;
            format: string;
            id: string;
            kind: number;
            mode: number;
            model: string;
            modified: number;
            object_path: string;
            objectPath: string;
            owner: number;
            profiling_inhibitors: string[];
            profilingInhibitors: string[];
            scope: number;
            seat: string;
            serial: string;
            vendor: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        /**
         * The device colorspace, e.g. {@link Colord.Colorspace.RGB}.
         * @since 0.1.1
         */
        get colorspace(): number;
        /**
         * The if the object path has been connected as is valid for use.
         * @since 0.1.9
         */
        get connected(): string;
        /**
         * The time the device was created.
         * @since 0.1.0
         */
        get created(): number;
        /**
         * If the device is embedded in the device and cannot be removed.
         * @since 0.1.27
         */
        get embedded(): string;
        /**
         * The device enabled state.
         * @since 0.1.26
         */
        get enabled(): boolean;
        /**
         * The device format.
         * @since 0.1.9
         */
        get format(): string;
        /**
         * The device ID.
         * @since 0.1.0
         */
        get id(): string;
        /**
         * The device kind, e.g. {@link Colord.DeviceKind.DISPLAY}.
         * @since 0.1.0
         */
        get kind(): number;
        /**
         * The device colorspace, e.g. {@link Colord.DeviceMode.VIRTUAL}.
         * @since 0.1.2
         */
        get mode(): number;
        /**
         * The device model.
         * @since 0.1.0
         */
        get model(): string;
        /**
         * The last time the device was modified.
         * @since 0.1.1
         */
        get modified(): number;
        /**
         * The object path of the remote object
         * @since 0.1.8
         */
        get object_path(): string;
        set object_path(val: string);
        /**
         * The object path of the remote object
         * @since 0.1.8
         */
        get objectPath(): string;
        set objectPath(val: string);
        /**
         * The device owner, e.g. 500.
         * @since 0.1.13
         */
        get owner(): number;
        get profiling_inhibitors(): string[];
        get profilingInhibitors(): string[];
        /**
         * The device scope, e.g. {@link Colord.ObjectScope.TEMP}.
         * @since 0.1.10
         */
        get scope(): number;
        /**
         * The device seat identifier.
         * @since 0.1.24
         */
        get seat(): string;
        /**
         * The device serial number.
         * @since 0.1.1
         */
        get serial(): string;
        /**
         * The device vendor.
         * @since 0.1.1
         */
        get vendor(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Device;

        static new_with_object_path(object_path: string): Device;

        // Signals

        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts a string to a {@link Colord.DeviceError}.
         * @param error_desc
         */
        static error_from_string(error_desc: string): DeviceError;
        static error_quark(): GLib.Quark;
        /**
         * Converts a {@link Colord.DeviceError} to a string.
         * @param error_enum
         */
        static error_to_string(error_enum: DeviceError): string;
        /**
         * Converts a string to a {@link Colord.DeviceKind}.
         * @param kind
         */
        static kind_from_string(kind: string): DeviceKind;
        /**
         * Gets the most suitable profile kind for a device kind.
         * @param device_kind A {@link Colord.DeviceKind}
         */
        static kind_to_profile_kind(device_kind: DeviceKind): ProfileKind;
        /**
         * Converts a {@link Colord.DeviceKind} to a string.
         * @param kind_enum
         */
        static kind_to_string(kind_enum: DeviceKind): string;
        /**
         * @param device_mode
         */
        static mode_from_string(device_mode: string): DeviceMode;
        /**
         * @param device_mode
         */
        static mode_to_string(device_mode: DeviceMode): string;
        /**
         * @param device_relation
         */
        static relation_from_string(device_relation: string): DeviceRelation;
        /**
         * @param device_relation
         */
        static relation_to_string(device_relation: DeviceRelation): string;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Adds a profile to a device.
         * @param relation a {@link Colord.DeviceRelation}, e.g. #CD_DEVICE_RELATION_HARD
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        add_profile(
            relation: DeviceRelation | null,
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Adds a profile to a device.
         * @param relation a {@link Colord.DeviceRelation}, e.g. #CD_DEVICE_RELATION_HARD
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        add_profile(
            relation: DeviceRelation | null,
            profile: Profile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Adds a profile to a device.
         * @param relation a {@link Colord.DeviceRelation}, e.g. #CD_DEVICE_RELATION_HARD
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        add_profile(
            relation: DeviceRelation | null,
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        add_profile_finish(res: Gio.AsyncResult): boolean;
        /**
         * Adds a profile to a device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param relation a {@link Colord.DeviceRelation}, e.g. #CD_DEVICE_RELATION_HARD
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        add_profile_sync(
            relation: DeviceRelation | null,
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Connects to the object and fills up initial properties.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        connect(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Connects to the object and fills up initial properties.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Connects to the object and fills up initial properties.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        connect(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Connects to the object and fills up initial properties.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests two devices for equality.
         * @param device2 another {@link Colord.Device} instance.
         * @returns `true` if the devices are the same device
         */
        equal(device2: Device): boolean;
        /**
         * Gets the device colorspace.
         * @returns A colorspace, e.g. {@link Colord.Colorspace.RGB}
         */
        get_colorspace(): Colorspace;
        /**
         * Gets if the device has been connected.
         * @returns `true` if properties are valid
         */
        get_connected(): boolean;
        /**
         * Gets the device creation date.
         * @returns A value in microseconds, or 0 for invalid
         */
        get_created(): number;
        /**
         * Gets the default device profile. A profile will not be returned
         * if the device is being profiled or is disabled.
         * @returns A {@link Colord.Profile}'s or NULL
         */
        get_default_profile(): Profile;
        /**
         * Returns if the device is embedded in the computer and cannot be
         * removed.
         * @returns `true` if embedded.
         */
        get_embedded(): boolean;
        /**
         * Gets the device enabled state.
         * @returns `true` if the device is enabled
         */
        get_enabled(): boolean;
        /**
         * Gets the device format.
         * @returns A string, or `null` for invalid
         */
        get_format(): string;
        /**
         * Gets the device ID.
         * @returns A string, or `null` for invalid
         */
        get_id(): string;
        /**
         * Gets the device kind.
         * @returns A device kind, e.g. {@link Colord.DeviceKind.DISPLAY}
         */
        get_kind(): DeviceKind;
        /**
         * Returns the device metadata.
         * @returns a               {@link GLib.HashTable}.
         */
        get_metadata(): GLib.HashTable<string, string>;
        /**
         * Returns the device metadata for a specific key.
         * @param key a key for the metadata dictionary
         * @returns the metadata value, or `null` if not set.
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the device mode.
         * @returns A colorspace, e.g. {@link Colord.DeviceMode.VIRTUAL}
         */
        get_mode(): DeviceMode;
        /**
         * Gets the device model.
         * @returns A string, or `null` for invalid
         */
        get_model(): string;
        /**
         * Gets the device modified date.
         * @returns A value in microseconds, or 0 for invalid
         */
        get_modified(): number;
        /**
         * Gets the object path for the device.
         * @returns the object path, or `null`
         */
        get_object_path(): string;
        /**
         * Gets the device owner.
         * @returns The UID of the user that created the device
         */
        get_owner(): number;
        /**
         * Gets the preferred profile for some qualifiers.
         * @param qualifiers a set of qualifiers that can included wildcards
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_profile_for_qualifiers(
            qualifiers: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Profile>;
        /**
         * Gets the preferred profile for some qualifiers.
         * @param qualifiers a set of qualifiers that can included wildcards
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_profile_for_qualifiers(
            qualifiers: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the preferred profile for some qualifiers.
         * @param qualifiers a set of qualifiers that can included wildcards
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_profile_for_qualifiers(
            qualifiers: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Profile> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Colord.Profile} or `null`
         */
        get_profile_for_qualifiers_finish(res: Gio.AsyncResult): Profile;
        /**
         * Gets the preferred profile for some qualifiers.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param qualifiers a set of qualifiers that can included wildcards
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns a {@link Colord.Profile} or `null`
         */
        get_profile_for_qualifiers_sync(qualifiers: string, cancellable?: Gio.Cancellable | null): Profile;
        /**
         * Gets the property relationship to the device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_profile_relation(
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<DeviceRelation>;
        /**
         * Gets the property relationship to the device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_profile_relation(
            profile: Profile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the property relationship to the device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_profile_relation(
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DeviceRelation> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        get_profile_relation_finish(res: Gio.AsyncResult): DeviceRelation;
        /**
         * Gets the property relationship to the device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param profile a {@link Colord.Profile} instance.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        get_profile_relation_sync(profile: Profile, cancellable?: Gio.Cancellable | null): DeviceRelation;
        /**
         * Gets the device profiles.
         * @returns An array of {@link Colord.Profile}'s
         */
        get_profiles(): Profile[];
        /**
         * Gets any profiling inhibitors for the device.
         * @returns A strv, or `null` for invalid
         */
        get_profiling_inhibitors(): string[];
        /**
         * Gets the device scope.
         * @returns An object scope, e.g. {@link Colord.ObjectScope.TEMP}
         */
        get_scope(): ObjectScope;
        /**
         * Gets the device seat identifier.
         * @returns A string, or `null` for invalid
         */
        get_seat(): string;
        /**
         * Gets the device serial number.
         * @returns A string, or `null` for invalid
         */
        get_serial(): string;
        /**
         * Gets the device vendor.
         * @returns A string, or `null` for invalid
         */
        get_vendor(): string;
        /**
         * Makes an already added profile default for a device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        make_profile_default(profile: Profile, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Makes an already added profile default for a device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        make_profile_default(
            profile: Profile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Makes an already added profile default for a device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        make_profile_default(
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        make_profile_default_finish(res: Gio.AsyncResult): boolean;
        /**
         * Makes an already added profile default for a device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        make_profile_default_sync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets up the device for profiling and causes no profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        profiling_inhibit(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Sets up the device for profiling and causes no profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        profiling_inhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Sets up the device for profiling and causes no profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        profiling_inhibit(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        profiling_inhibit_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets up the device for profiling and causes no profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        profiling_inhibit_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Restores the device after profiling and causes normal profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        profiling_uninhibit(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Restores the device after profiling and causes normal profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        profiling_uninhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Restores the device after profiling and causes normal profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        profiling_uninhibit(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        profiling_uninhibit_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets up the device for profiling and causes no profiles to be
         * returned if `cd_device_get_profile_for_qualifiers_sync()` is used.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        profiling_uninhibit_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes a profile from a device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        remove_profile(profile: Profile, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Removes a profile from a device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        remove_profile(
            profile: Profile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Removes a profile from a device.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        remove_profile(
            profile: Profile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        remove_profile_finish(res: Gio.AsyncResult): boolean;
        /**
         * Removes a profile from a device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param profile a {@link Colord.Profile} instance
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        remove_profile_sync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the device kind.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param colorspace The device colorspace, e.g. #CD_COLORSPACE_RGB
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_colorspace_sync(colorspace: Colorspace | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Enables or disables a device.
         * @param enabled the enabled state
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        set_enabled(enabled: boolean, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Enables or disables a device.
         * @param enabled the enabled state
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_enabled(
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Enables or disables a device.
         * @param enabled the enabled state
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_enabled(
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        set_enabled_finish(res: Gio.AsyncResult): boolean;
        /**
         * Enables or disables a device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param enabled the enabled state
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        set_enabled_sync(enabled: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the device kind.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param kind The device kind, e.g. #CD_DEVICE_KIND_DISPLAY
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_kind_sync(kind: DeviceKind | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the device mode.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param mode The device kind, e.g. #CD_DEVICE_MODE_VIRTUAL
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_mode_sync(mode: DeviceMode | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the device model.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param value The model.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_model_sync(value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the object path of the device.
         * @param object_path The colord object path.
         */
        set_object_path(object_path: string): void;
        /**
         * Sets a property on the device.
         * @param key a property key
         * @param value a property key
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        set_property(key: string, value: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Sets a property on the device.
         * @param key a property key
         * @param value a property key
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_property(
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets a property on the device.
         * @param key a property key
         * @param value a property key
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_property(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        set_property_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets an object property.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param key The property key
         * @param value The property value
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        set_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the device serial number.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param value The string value.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_serial_sync(value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the device vendor.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param value The string value.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_vendor_sync(value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Converts the device to a string description.
         * @returns text representation of {@link Colord.Device}
         */
        to_string(): string;
    }

    namespace Edid {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Edid extends GObject.Object {
        static $gtype: GObject.GType<Edid>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Edid.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Edid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Edid;

        // Signals

        /** @signal */
        connect<K extends keyof Edid.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Edid.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Edid.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Edid.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Edid.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Edid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link Colord.Edid} error quark.
         */
        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Gets the blue primary.
         * @returns {@link Colord.ColorYxy} chromaticity
         */
        get_blue(): ColorYxy;
        /**
         * Gets the EDID MD5 checksum.
         * @returns string value
         */
        get_checksum(): string;
        /**
         * Gets the EDID EISA ID.
         * @returns string value
         */
        get_eisa_id(): string;
        /**
         * Gets the native panel gamma.
         * @returns floating point value
         */
        get_gamma(): number;
        /**
         * Gets the green primary.
         * @returns {@link Colord.ColorYxy} chromaticity
         */
        get_green(): ColorYxy;
        /**
         * Gets the panel height in inches.
         * @returns integer value
         */
        get_height(): number;
        /**
         * Gets the EDID monitor name.
         * @returns string value
         */
        get_monitor_name(): string;
        /**
         * Gets the EDID PNP ID.
         * @returns string value
         */
        get_pnp_id(): string;
        /**
         * Gets the red primary.
         * @returns `true` for success
         */
        get_red(): ColorYxy;
        /**
         * Gets the EDID serial number.
         * @returns string value
         */
        get_serial_number(): string;
        /**
         * Gets the EDID vendor name.
         * @returns string value
         */
        get_vendor_name(): string;
        /**
         * Gets the whitepoint.
         * @returns {@link Colord.ColorYxy} chromaticity
         */
        get_white(): ColorYxy;
        /**
         * Gets the panel width in inches.
         * @returns integer value
         */
        get_width(): number;
        /**
         * Parses the EDID.
         * @param edid_data data to parse
         * @returns `true` for success
         */
        parse(edid_data: GLib.Bytes | Uint8Array): boolean;
        /**
         * Resets all cached data.
         */
        reset(): void;
    }

    namespace Icc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::blue': (pspec: GObject.ParamSpec) => void;
            'notify::can-delete': (pspec: GObject.ParamSpec) => void;
            'notify::checksum': (pspec: GObject.ParamSpec) => void;
            'notify::colorspace': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::green': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::red': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::temperature': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
            'notify::white': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            blue: ColorXYZ;
            can_delete: boolean;
            canDelete: boolean;
            checksum: string;
            colorspace: number;
            filename: string;
            green: ColorXYZ;
            kind: number;
            red: ColorXYZ;
            size: number;
            temperature: number;
            version: number;
            white: ColorXYZ;
        }
    }

    /**
     * @gir-type Class
     */
    class Icc extends GObject.Object {
        static $gtype: GObject.GType<Icc>;

        // Properties

        get blue(): ColorXYZ;
        get can_delete(): boolean;
        get canDelete(): boolean;
        get checksum(): string;
        get colorspace(): number;
        set colorspace(val: number);
        get filename(): string;
        get green(): ColorXYZ;
        get kind(): number;
        set kind(val: number);
        get red(): ColorXYZ;
        get size(): number;
        get temperature(): number;
        get version(): number;
        set version(val: number);
        get white(): ColorXYZ;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Icc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Icc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Icc;

        // Signals

        /** @signal */
        connect<K extends keyof Icc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Icc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Icc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Icc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Sets an item of data to the profile metadata, overwriting it if
         * it already exists.
         * @param key the metadata key
         * @param value the UTF-8 metadata value
         */
        add_metadata(key: string, value: string): void;
        /**
         * Creates a default sRGB ICC profile.
         * @returns `true` for success
         */
        create_default(): boolean;
        /**
         * Creates a default sRGB ICC profile.
         * @param flags a set of {@link Colord.IccLoadFlags}
         * @returns `true` for success
         */
        create_default_full(flags: IccLoadFlags | null): boolean;
        /**
         * Creates an ICC profile from EDID data.
         * @param gamma_value approximate device gamma
         * @param red primary color value
         * @param green primary color value
         * @param blue primary color value
         * @param white whitepoint value
         * @returns `true` for success
         */
        create_from_edid(gamma_value: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean;
        /**
         * Creates an ICC profile from EDID data.
         * @param edid EDID data
         * @returns `true` for success
         */
        create_from_edid_data(edid: Edid): boolean;
        /**
         * Gets the profile red chromaticity value.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.PRIMARIES} flag.
         * @returns the {@link Colord.ColorXYZ} value
         */
        get_blue(): ColorXYZ;
        /**
         * Finds out if the profile could be deleted.
         * This is only applicable for profiles loaded with `cd_icc_load_file()` as
         * obviously data and fd's cannot be sanely unlinked.
         * @returns `true` if `g_file_delete()` would likely work
         */
        get_can_delete(): boolean;
        /**
         * Gets any characterization data used to build the profile.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.CHARACTERIZATION} flag.
         * @returns TI3 string data
         */
        get_characterization_data(): string;
        /**
         * Gets the profile checksum if one exists.
         * This will either be the embedded profile ID, or the file checksum if
         * the {@link Colord.Icc} object was loaded using `cd_icc_load_data()` or `cd_icc_load_file()`
         * and the {@link Colord.IccLoadFlags.FALLBACK_MD5} flag is used.
         * @returns An embedded MD5 checksum, or `null` for not set
         */
        get_checksum(): string;
        /**
         * Gets the profile colorspace
         * @returns The profile colorspace, e.g. {@link Colord.Colorspace.RGB}
         */
        get_colorspace(): Colorspace;
        /**
         * Return the cmsContext instance used locally. This may be required if you
         * are using native LCMS calls and then `cd_icc_load_handle()`.
         * @returns Do not call cmsDeleteContext() on this value!
         */
        get_context(): any | null;
        /**
         * Gets the profile copyright.
         * If the translated text is not available in the selected locale then the
         * default untranslated (en_US) text is returned.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @returns The text as a UTF-8 string, or `null` of the locale is invalid               or the tag does not exist.
         */
        get_copyright(locale: string): string;
        /**
         * Gets the ICC creation date and time.
         * @returns A {@link GLib.DateTime} object, or `null` for not set
         */
        get_created(): GLib.DateTime;
        /**
         * Gets the profile description.
         * If the translated text is not available in the selected locale then the
         * default untranslated (en_US) text is returned.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @returns The text as a UTF-8 string, or `null` of the locale is invalid               or the tag does not exist.
         */
        get_description(locale: string): string;
        /**
         * Gets the filename of the ICC data, if one exists.
         * @returns A filename, or `null`
         */
        get_filename(): string;
        /**
         * Gets the profile green chromaticity value.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.PRIMARIES} flag.
         * @returns the {@link Colord.ColorXYZ} value
         */
        get_green(): ColorXYZ;
        /**
         * Return the cmsHPROFILE instance used locally. This may be required if you
         * are using the profile in a transform.
         * @returns Do not call cmsCloseProfile() on this value!
         */
        get_handle(): any | null;
        /**
         * Gets the profile kind.
         * @returns The kind, e.g. `CD_PROFILE_KIND_INPUT`
         */
        get_kind(): ProfileKind;
        /**
         * Gets the profile manufacturer.
         * If the translated text is not available in the selected locale then the
         * default untranslated (en_US) text is returned.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @returns The text as a UTF-8 string, or `null` of the locale is invalid               or the tag does not exist.
         */
        get_manufacturer(locale: string): string;
        /**
         * Gets all the metadata from the ICC profile.
         * @returns The profile metadata
         */
        get_metadata(): GLib.HashTable<any, any>;
        /**
         * Gets an item of data from the ICC metadata store.
         * @param key the dictionary key
         * @returns The dictionary data, or `null` if the key does not exist.
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the profile model.
         * If the translated text is not available in the selected locale then the
         * default untranslated (en_US) text is returned.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @returns The text as a UTF-8 string, or `null` of the locale is invalid               or the tag does not exist.
         */
        get_model(locale: string): string;
        /**
         * Gets any named colors in the profile.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.NAMED_COLORS} flag.
         * @returns An array of color swatches
         */
        get_named_colors(): ColorSwatch[];
        /**
         * Gets the profile red chromaticity value.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.PRIMARIES} flag.
         * @returns the {@link Colord.ColorXYZ} value
         */
        get_red(): ColorXYZ;
        /**
         * Generates a response curve of a specified size.
         * @param size the size of the curve to generate
         * @returns response data, or `null` for error
         */
        get_response(size: number): ColorRGB[];
        /**
         * Gets the ICC profile file size
         * @returns The size in bytes, or 0 for unknown.
         */
        get_size(): number;
        /**
         * Returns the raw data for the specific tag.
         * Most users do not need to do this.
         * @param tag a 4 bytes tag description, e.g. "cprt" or "vcgt"
         * @returns the data for the tag
         */
        get_tag_data(tag: string): GLib.Bytes;
        /**
         * Returns the internal tag table. Most users do not need to do this.
         * @returns the tag tables as an array of strings
         */
        get_tags(): string[];
        /**
         * Gets the ICC color temperature, rounded to the nearest 100K.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.PRIMARIES} flag.
         * @returns The color temperature in Kelvin, or 0 for error.
         */
        get_temperature(): number;
        /**
         * Gets the video card calibration data from the profile.
         * @param size the desired size of the table data
         * @returns VCGT data, or `null` for error
         */
        get_vcgt(size: number): ColorRGB[];
        /**
         * Gets the ICC profile version, typically 2.1 or 4.2
         * @returns A floating point version number, or 0.0 for unknown
         */
        get_version(): number;
        /**
         * Returns any warnings with profiles
         * @returns An array of warning values
         */
        get_warnings(): ProfileWarning[];
        /**
         * Gets the profile white point.
         * This function will only return results if the profile was loaded with the
         * {@link Colord.IccLoadFlags.PRIMARIES} flag.
         * @returns the {@link Colord.ColorXYZ} value
         */
        get_white(): ColorXYZ;
        /**
         * Loads an ICC profile from raw byte data.
         * @param data binary data
         * @param flags a set of {@link Colord.IccLoadFlags}
         */
        load_data(data: Uint8Array | string, flags: IccLoadFlags | null): boolean;
        /**
         * Loads an ICC profile from an open file descriptor.
         * @param fd a file descriptor
         * @param flags a set of {@link Colord.IccLoadFlags}
         */
        load_fd(fd: number, flags: IccLoadFlags | null): boolean;
        /**
         * Loads an ICC profile from a local or remote file.
         * @param file a {@link Gio.File}
         * @param flags a set of {@link Colord.IccLoadFlags}
         * @param cancellable A {@link Gio.Cancellable} or `null`
         */
        load_file(file: Gio.File, flags: IccLoadFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Set the internal cmsHPROFILE instance. This may be required if you create
         * the profile using cmsCreateRGBProfileTHR() and then want to use the
         * functionality in {@link Colord.Icc}.
         *
         * Do not call cmsCloseProfile() on `handle` in the caller, this will be done
         * when the `icc` object is finalized. Treat the profile like it's been adopted
         * by this module.
         *
         * To handle the internal error callback, you should use the thread-safe
         * creation function, e.g. cmsCreateNULLProfileTHR(). The `context_id` should be
         * set as the value of `cd_icc_get_context()` for this object.
         *
         * Additionally, this function cannot be called more than once, and also can't
         * be called if `cd_icc_load_file()` has previously been used on the `icc` object.
         * @param handle a cmsHPROFILE instance
         * @param flags a set of {@link Colord.IccLoadFlags}
         */
        load_handle(handle: any | null, flags: IccLoadFlags | null): boolean;
        /**
         * Removes an item of metadata.
         * @param key the metadata key
         */
        remove_metadata(key: string): void;
        /**
         * Saves an ICC profile to an allocated memory location.
         *
         * Return vale: A {@link GLib.Bytes} structure, or `null` for error
         * @param flags a set of {@link Colord.IccSaveFlags}
         */
        save_data(flags: IccSaveFlags | null): GLib.Bytes;
        /**
         * Saves an ICC profile to the default per-user location.
         *
         * Return vale: `true` for success.
         * @param flags a set of {@link Colord.IccSaveFlags}
         * @param cancellable A {@link Gio.Cancellable} or `null`
         */
        save_default(flags: IccSaveFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Saves an ICC profile to a local or remote file.
         *
         * Return vale: `true` for success.
         * @param file a {@link Gio.File}
         * @param flags a set of {@link Colord.IccSaveFlags}
         * @param cancellable A {@link Gio.Cancellable} or `null`
         */
        save_file(file: Gio.File, flags: IccSaveFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the characterization data used to build the profile.
         * @param data TI3 string data, or `null`
         */
        set_characterization_data(data: string): void;
        /**
         * Sets the colorspace kind.
         * @param colorspace the profile colorspace, e.g. {@link Colord.Colorspace.RGB}
         */
        set_colorspace(colorspace: Colorspace | null): void;
        /**
         * Sets the profile _copyright for a specific locale.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @param value New UTF-8 string value
         */
        set_copyright(locale: string, value?: string | null): void;
        /**
         * Sets the profile copyrights for specific locales.
         * @param values New translated values, with the key being the locale.
         */
        set_copyright_items(values: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Sets the ICC creation date and time.
         * @param creation_time
         */
        set_created(creation_time: GLib.DateTime): void;
        /**
         * Sets the profile description for a specific locale.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @param value New UTF-8 string value
         */
        set_description(locale: string, value?: string | null): void;
        /**
         * Sets the profile descriptions for specific locales.
         * @param values New translated values, with the key being the locale.
         */
        set_description_items(values: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Sets the filename, which may be required if the ICC profile has been loaded
         * using `cd_icc_load_fd()` from a disk cache.
         * @param filename a filename, or `null`
         */
        set_filename(filename: string): void;
        /**
         * Sets the profile kind.
         * @param kind the profile kind, e.g. {@link Colord.ProfileKind.DISPLAY_DEVICE}
         */
        set_kind(kind: ProfileKind | null): void;
        /**
         * Sets the profile manufacturer for a specific locale.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @param value New UTF-8 string value
         */
        set_manufacturer(locale: string, value?: string | null): void;
        /**
         * Sets the profile manufacturers for specific locales.
         * @param values New translated values, with the key being the locale.
         */
        set_manufacturer_items(values: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Sets the profile model for a specific locale.
         * @param locale A locale, e.g. "en_GB.UTF-8" or `null` for the profile default
         * @param value New UTF-8 string value
         */
        set_model(locale: string, value?: string | null): void;
        /**
         * Sets the profile models for specific locales.
         * @param values New translated values, with the key being the locale.
         */
        set_model_items(values: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Sets the raw data for the specific tag.
         * Most users do not need to do this.
         * @param tag a 4 bytes tag description, e.g. "cprt" or "vcgt"
         * @param data a variable sized data entry
         */
        set_tag_data(tag: string, data: GLib.Bytes | Uint8Array): boolean;
        /**
         * Sets the Video Card Gamma Table from the profile.
         *
         * Return vale: `true` for success.
         * @param vcgt video card calibration data
         */
        set_vcgt(vcgt: ColorRGB[]): boolean;
        /**
         * Sets the profile version.
         * @param version the profile version, e.g. 2.1 or 4.0
         */
        set_version(version: number): void;
        /**
         * Returns a string representation of the ICC profile.
         * @returns an allocated string
         */
        to_string(): string;
    }

    namespace It8 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::instrument': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::normalized': (pspec: GObject.ParamSpec) => void;
            'notify::originator': (pspec: GObject.ParamSpec) => void;
            'notify::reference': (pspec: GObject.ParamSpec) => void;
            'notify::spectral': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            instrument: string;
            kind: number;
            normalized: boolean;
            originator: string;
            reference: string;
            spectral: boolean;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class It8 extends GObject.Object {
        static $gtype: GObject.GType<It8>;

        // Properties

        /**
         * The instrument that created the results, e.g. "huey"
         * @since 0.1.20
         */
        get instrument(): string;
        /**
         * The kind of IT8 file.
         * @since 0.1.20
         */
        get kind(): number;
        set kind(val: number);
        /**
         * If the results file is normalized.
         * @since 0.1.20
         */
        get normalized(): boolean;
        /**
         * The framework that created the results, e.g. "cd-self-test"
         * @since 0.1.20
         */
        get originator(): string;
        /**
         * The reference that created the results, e.g. "colormunki"
         * @since 0.1.20
         */
        get reference(): string;
        /**
         * If the results file is spectral.
         * @since 0.1.20
         */
        get spectral(): boolean;
        /**
         * The file title, e.g. "Factor calibration".
         * @since 0.1.20
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: It8.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<It8.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): It8;

        static new_with_kind(kind: It8Kind): It8;

        // Signals

        /** @signal */
        connect<K extends keyof It8.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, It8.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof It8.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, It8.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof It8.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<It8.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Adds a reading to this object. If either of `rgb` or `xyz` is NULL then
         * a black reading (0.0, 0.0, 0.0) is added instead.
         * @param rgb a {@link Colord.ColorRGB}, or `null`
         * @param xyz a {@link Colord.ColorXYZ}, or `null`
         */
        add_data(rgb: ColorRGB, xyz: ColorXYZ): void;
        /**
         * Sets any extra options that have to be set in the CCMX file
         * @param option A IT8 option, e.g. "TYPE_LCD"
         */
        add_option(option: string): void;
        /**
         * Adds a spectrum to the spectral array.
         * @param spectrum the spectral data
         */
        add_spectrum(spectrum: Spectrum): void;
        /**
         * Gets a specific bit of data from this object.
         * The returned data are absolute readings and are not normalised.
         * @param idx the item index
         * @param rgb the returned RGB value
         * @param xyz the returned XYZ value
         * @returns `true` if the index existed.
         */
        get_data_item(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean;
        /**
         * Gets the data size.
         * @returns The number of RGB-XYZ readings in this object.
         */
        get_data_size(): number;
        /**
         * Gets if the 'CREATED' attribute will be written. This is typically only
         * set in the self test programs.
         * @returns The reference, or `null` if unset
         */
        get_enable_created(): boolean;
        /**
         * Gets the instrument the file was created by.
         * @returns The instrument, or `null` if unset
         */
        get_instrument(): string;
        /**
         * Gets the kind of IT8 file.
         * @returns a {@link Colord.It8Kind}, e.g {@link Colord.It8Kind.TI3}.
         */
        get_kind(): It8Kind;
        /**
         * Gets the calibration matrix in the it8 file.
         * @returns a {@link Colord.Mat3x3}.
         */
        get_matrix(): Mat3x3;
        /**
         * Gets if the data should be written normlaised to y=100.
         * @returns `true` if the data should be normalised.
         */
        get_normalized(): boolean;
        /**
         * Gets the file orginator.
         * @returns The originator, or `null` if unset
         */
        get_originator(): string;
        /**
         * Gets the reference the file was created against.
         * @returns The reference, or `null` if unset
         */
        get_reference(): string;
        /**
         * Gets if the data is spectral or XYZ.
         * @returns `true` if the data is in spectral bands.
         */
        get_spectral(): boolean;
        /**
         * Gets the spectral data of IT8 file.
         * @returns spectral data
         */
        get_spectrum_array(): Spectrum[];
        /**
         * Gets a specific spectrum in an IT8 file.
         * @param id the spectrum ID value
         * @returns spectrum, or `null`
         */
        get_spectrum_by_id(id: string): Spectrum;
        /**
         * Gets the file title.
         * @returns The title, or `null` if unset
         */
        get_title(): string;
        /**
         * Gets the XYZ value for a specific RGB value.
         * @param R the red value
         * @param G the green value
         * @param B the blue value
         * @param delta the smallest difference between colors, e.g. 0.01f
         * @returns A CdColorXYZ, or `null` if the sample does not exist.
         */
        get_xyz_for_rgb(R: number, G: number, B: number, delta: number): ColorXYZ;
        /**
         * Finds an option in the file.
         * @param option a option, e.g. "TYPE_CRT"
         * @returns `true` if the option is set
         */
        has_option(option: string): boolean;
        /**
         * Loads a it8 file from data.
         * @param data text data
         * @returns `true` if a valid it8 file was read.
         */
        load_from_data(data: string[]): boolean;
        /**
         * Loads a it8 file from disk.
         * @param file a {@link Gio.File}
         * @returns `true` if a valid it8 file was read.
         */
        load_from_file(file: Gio.File): boolean;
        /**
         * Saves a it8 file to an area of memory.
         * @param data a pointer to returned data
         * @returns `true` if it8 file was saved.
         */
        save_to_data(data: string[]): boolean;
        /**
         * Saves a it8 file to disk
         * @param file a {@link Gio.File}
         * @returns `true` if it8 file was saved.
         */
        save_to_file(file: Gio.File): boolean;
        /**
         * Sets if the 'CREATED' attribute should be written. This is mainly useful
         * in the self test programs where we want to string compare the output data
         * with a known reference.
         * @param enable_created Is 'CREATED' should be written
         */
        set_enable_created(enable_created: boolean): void;
        /**
         * Sets the measuring instrument that created the .it8 file
         * @param instrument the instruemnt name, e.g. "huey"
         */
        set_instrument(instrument: string): void;
        /**
         * Set the kind of IT8 file.
         * @param kind a {@link Colord.It8Kind}, e.g {@link Colord.It8Kind.TI3}.
         */
        set_kind(kind: It8Kind | null): void;
        /**
         * Set the calibration matrix in the it8 file.
         * @param matrix a {@link Colord.Mat3x3}.
         */
        set_matrix(matrix: Mat3x3): void;
        /**
         * Sets if normalized data should be written to the .it8 file.
         * @param normalized If the data is normalized
         */
        set_normalized(normalized: boolean): void;
        /**
         * Sets the program name that created the .it8 file
         * @param originator the program name, e.g. "gcm-calibrate"
         */
        set_originator(originator: string): void;
        /**
         * Sets the reference that as used to create the .it8 reference
         * @param reference the instruemnt name, e.g. "colormunki"
         */
        set_reference(reference: string): void;
        /**
         * Sets if spectral data should be written to the .it8 file.
         * @param spectral If the data is spectral
         */
        set_spectral(spectral: boolean): void;
        /**
         * Set the spectral data
         * @param data the spectral data
         */
        set_spectrum_array(data: Spectrum[]): void;
        /**
         * Sets the display name for the file.
         * @param title the title name, e.g. "Factory calibration"
         */
        set_title(title: string): void;
    }

    namespace Profile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted when the profile data has changed.
             * @signal
             * @since 0.1.0
             */
            changed: () => void;
            'notify::colorspace': (pspec: GObject.ParamSpec) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::created': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::has-vcgt': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::is-system-wide': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
            'notify::qualifier': (pspec: GObject.ParamSpec) => void;
            'notify::scope': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::warnings': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colorspace: string;
            connected: string;
            created: number;
            filename: string;
            format: string;
            has_vcgt: string;
            hasVcgt: string;
            id: string;
            is_system_wide: string;
            isSystemWide: string;
            kind: string;
            object_path: string;
            objectPath: string;
            owner: number;
            qualifier: string;
            scope: number;
            title: string;
            warnings: string[];
        }
    }

    /**
     * @gir-type Class
     */
    class Profile extends GObject.Object {
        static $gtype: GObject.GType<Profile>;

        // Properties

        /**
         * The profile colorspace.
         * @since 0.1.2
         */
        get colorspace(): string;
        /**
         * The if the object path has been connected as is valid for use.
         * @since 0.1.9
         */
        get connected(): string;
        /**
         * When the profile was created.
         * @since 0.1.8
         */
        get created(): number;
        /**
         * The profile filename.
         * @since 0.1.0
         */
        get filename(): string;
        /**
         * The profile format.
         * @since 0.1.4
         */
        get format(): string;
        /**
         * If the profile has a VCGT table.
         * @since 0.1.2
         */
        get has_vcgt(): string;
        /**
         * If the profile has a VCGT table.
         * @since 0.1.2
         */
        get hasVcgt(): string;
        /**
         * The profile ID.
         * @since 0.1.0
         */
        get id(): string;
        /**
         * If the profile is installed system wide for all users.
         * @since 0.1.2
         */
        get is_system_wide(): string;
        /**
         * If the profile is installed system wide for all users.
         * @since 0.1.2
         */
        get isSystemWide(): string;
        /**
         * The profile kind.
         * @since 0.1.1
         */
        get kind(): string;
        /**
         * The object path of the remote object
         * @since 0.1.8
         */
        get object_path(): string;
        set object_path(val: string);
        /**
         * The object path of the remote object
         * @since 0.1.8
         */
        get objectPath(): string;
        set objectPath(val: string);
        /**
         * The profile owner, e.g. %500.
         * @since 0.1.13
         */
        get owner(): number;
        /**
         * The profile qualifier.
         * @since 0.1.0
         */
        get qualifier(): string;
        /**
         * The profile scope, e.g. {@link Colord.ObjectScope.TEMP}.
         * @since 0.1.10
         */
        get scope(): number;
        /**
         * The profile title.
         * @since 0.1.0
         */
        get title(): string;
        /**
         * The profile warnings, e.g. "vcgt-non-monotonic".
         * @since 0.1.25
         */
        get warnings(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Profile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Profile;

        static new_with_object_path(object_path: string): Profile;

        // Signals

        /** @signal */
        connect<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Profile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Profile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts a string to a {@link Colord.ProfileError}.
         * @param error_desc
         */
        static error_from_string(error_desc: string): ProfileError;
        static error_quark(): GLib.Quark;
        /**
         * Converts a {@link Colord.ProfileError} to a string.
         * @param error_enum
         */
        static error_to_string(error_enum: ProfileError): string;
        /**
         * @param profile_kind
         */
        static kind_from_string(profile_kind: string): ProfileKind;
        /**
         * @param profile_kind
         */
        static kind_to_string(profile_kind: ProfileKind): string;
        /**
         * Converts a string to a {@link Colord.ProfileQuality}.
         * @param quality
         */
        static quality_from_string(quality: string): ProfileQuality;
        /**
         * Converts a {@link Colord.ProfileQuality} to a string.
         * @param quality_enum
         */
        static quality_to_string(quality_enum: ProfileQuality): string;
        /**
         * Converts a string to a {@link Colord.ProfileWarning}.
         * @param type
         */
        static warning_from_string(type: string): ProfileWarning;
        /**
         * Converts a {@link Colord.ProfileWarning} to a string.
         * @param kind_enum
         */
        static warning_to_string(kind_enum: ProfileWarning): string;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Connects to the object and fills up initial properties.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        connect(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Connects to the object and fills up initial properties.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Connects to the object and fills up initial properties.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        connect(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Connects to the object and fills up initial properties.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests two profiles for equality.
         * @param profile2 another {@link Colord.Profile} instance.
         * @returns `true` if the profiles are the same device
         */
        equal(profile2: Profile): boolean;
        /**
         * Gets the profile age in seconds relative to the current time.
         * @returns A UNIX time, or 0 if the profile has no creation date
         */
        get_age(): number;
        /**
         * Gets the profile colorspace.
         * @returns A {@link Colord.Colorspace}, e.g. {@link Colord.Colorspace.RGB}
         */
        get_colorspace(): Colorspace;
        /**
         * Gets if the profile has been connected.
         * @returns `true` if properties are valid
         */
        get_connected(): boolean;
        /**
         * Gets the profile created date and time.
         * @returns A UNIX time, or 0 if the profile has no creation date
         */
        get_created(): number;
        /**
         * Gets the profile filename.
         * @returns A string, or `null` for invalid
         */
        get_filename(): string;
        /**
         * Gets the profile format.
         * @returns A string, or `null` for invalid
         */
        get_format(): string;
        /**
         * Returns if the profile has a VCGT table.
         * @returns `true` if VCGT is valid.
         */
        get_has_vcgt(): boolean;
        /**
         * Gets the profile ID.
         * @returns A string, or `null` for invalid
         */
        get_id(): string;
        /**
         * Returns if the profile is installed system wide and available for all
         * users.
         * @returns `true` if system wide.
         */
        get_is_system_wide(): boolean;
        /**
         * Gets the profile kind.
         * @returns A {@link Colord.ProfileKind}, e.g. {@link Colord.ProfileKind.DISPLAY_DEVICE}
         */
        get_kind(): ProfileKind;
        /**
         * Returns the profile metadata.
         * @returns a               {@link GLib.HashTable}.
         */
        get_metadata(): GLib.HashTable<string, string>;
        /**
         * Returns the profile metadata for a specific key.
         * @param key a key for the metadata dictionary
         * @returns the metadata value, or `null` if not set.
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the object path for the profile.
         * @returns the object path, or `null`
         */
        get_object_path(): string;
        /**
         * Gets the profile owner.
         * @returns The UID of the user that created the device
         */
        get_owner(): number;
        /**
         * Gets the profile qualifier.
         * @returns A string, or `null` for invalid
         */
        get_qualifier(): string;
        /**
         * Gets the profile scope.
         * @returns A {@link Colord.ObjectScope}, e.g. {@link Colord.ObjectScope.UNKNOWN}
         */
        get_scope(): ObjectScope;
        /**
         * Gets the profile title.
         * @returns A string, or `null` for invalid
         */
        get_title(): string;
        /**
         * Gets the profile warnings as a string array.
         * @returns Any profile warnings, e.g. "vcgt-non-monotonic"
         */
        get_warnings(): string[];
        /**
         * Gets if the current user has access permissions to the profile.
         * @returns A string, or `null` for invalid
         */
        has_access(): boolean;
        /**
         * Sets the profile system wide.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        install_system_wide(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Sets the profile system wide.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_system_wide(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Sets the profile system wide.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_system_wide(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        install_system_wide_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the profile system wide.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        install_system_wide_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Loads a local ICC object from the abstract profile.
         * @param flags options for loading the profile
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @returns A new {@link Colord.Icc} object, or `null` for error
         */
        load_icc(flags: IccLoadFlags | null, cancellable?: Gio.Cancellable | null): Icc;
        /**
         * Sets the object path of the profile.
         * @param object_path The colord object path.
         */
        set_object_path(object_path: string): void;
        /**
         * Deletes a color device.
         * @param key a key name
         * @param value a key value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        set_property(key: string, value: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Deletes a color device.
         * @param key a key name
         * @param value a key value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_property(
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Deletes a color device.
         * @param key a key name
         * @param value a key value
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_property(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        set_property_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets properties on an object
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param key The key
         * @param value The value
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        set_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Converts the profile to a string description.
         * @returns text representation of {@link Colord.Profile}
         */
        to_string(): string;
    }

    namespace Sensor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::button-pressed signal is emitted when the button has been pressed.
             * @signal
             * @since 0.1.6
             */
            'button-pressed': () => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::embedded': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::serial': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::vendor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connected: string;
            embedded: string;
            id: string;
            kind: string;
            locked: string;
            mode: string;
            model: string;
            native: string;
            object_path: string;
            objectPath: string;
            serial: string;
            state: string;
            vendor: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Sensor extends GObject.Object {
        static $gtype: GObject.GType<Sensor>;

        // Properties

        /**
         * The if the object path has been connected as is valid for use.
         * @since 0.1.9
         */
        get connected(): string;
        /**
         * If the sensor has a native driver.
         * @since 0.1.26
         */
        get embedded(): string;
        /**
         * The object ID of the remote object
         * @since 0.1.26
         */
        get id(): string;
        /**
         * The sensor kind.
         * @since 0.1.6
         */
        get kind(): string;
        /**
         * If the sensor is locked.
         * @since 0.1.6
         */
        get locked(): string;
        /**
         * The sensor mode.
         * @since 0.1.6
         */
        get mode(): string;
        /**
         * The sensor model.
         * @since 0.1.6
         */
        get model(): string;
        /**
         * If the sensor has a native driver.
         * @since 0.1.6
         */
        get native(): string;
        /**
         * The object path of the remote object
         * @since 0.1.8
         */
        get object_path(): string;
        set object_path(val: string);
        /**
         * The object path of the remote object
         * @since 0.1.8
         */
        get objectPath(): string;
        set objectPath(val: string);
        /**
         * The sensor ID.
         * @since 0.1.6
         */
        get serial(): string;
        /**
         * The sensor state.
         * @since 0.1.6
         */
        get state(): string;
        /**
         * The sensor vendor.
         * @since 0.1.6
         */
        get vendor(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Sensor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Sensor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Sensor;

        static new_with_object_path(object_path: string): Sensor;

        // Signals

        /** @signal */
        connect<K extends keyof Sensor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sensor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Sensor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sensor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Sensor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sensor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the sensor capability as a enumerated value.
         * @param sensor_cap the sensor capability, e.g. 'projector'.
         */
        static cap_from_string(sensor_cap: string): SensorCap;
        /**
         * Gets the sensor capability as a string.
         * @param sensor_cap a {@link Colord.SensorCap}
         */
        static cap_to_string(sensor_cap: SensorCap): string;
        /**
         * Converts a string to a {@link Colord.SensorError}.
         * @param error_desc
         */
        static error_from_string(error_desc: string): SensorError;
        static error_quark(): GLib.Quark;
        /**
         * Converts a {@link Colord.SensorError} to a string.
         * @param error_enum
         */
        static error_to_string(error_enum: SensorError): string;
        /**
         * Gets the sensor kind as a enumerated value.
         * @param sensor_kind the sensor kind, e.g. 'huey'.
         */
        static kind_from_string(sensor_kind: string): SensorKind;
        /**
         * Gets the sensor kind as a string.
         * @param sensor_kind a {@link Colord.SensorKind}
         */
        static kind_to_string(sensor_kind: SensorKind): string;
        /**
         * Gets the sensor stateability as a enumerated value.
         * @param sensor_state the sensor stateability, e.g. 'measuring'.
         */
        static state_from_string(sensor_state: string): SensorState;
        /**
         * Gets the sensor stateability as a string.
         * @param sensor_state a {@link Colord.SensorState}
         */
        static state_to_string(sensor_state: SensorState): string;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_button_pressed(): void;

        // Methods

        /**
         * Connects to the sensor.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        connect(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Connects to the sensor.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Connects to the sensor.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback the function to run on completion
         */
        connect(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` if we could connect to to the sensor
         */
        connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Connects to the object and fills up initial properties.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests two sensors for equality.
         * @param sensor2 another {@link Colord.Sensor} instance.
         * @returns `true` if the sensors are the same device
         */
        equal(sensor2: Sensor): boolean;
        /**
         * Returns the sensor metadata.
         * @returns The sensor capability bitfield.
         */
        get_caps(): number;
        /**
         * Gets if the sensor has been connected.
         * @returns `true` if properties are valid
         */
        get_connected(): boolean;
        /**
         * Returns if the sensor is embedded into the computer.
         * @returns `true` if embedded.
         */
        get_embedded(): boolean;
        /**
         * Gets the object ID for the sensor.
         * @returns the object ID, or `null`
         */
        get_id(): string;
        /**
         * Gets the sensor kind.
         * @returns A {@link Colord.SensorKind}, e.g. {@link Colord.SensorKind.HUEY}
         */
        get_kind(): SensorKind;
        /**
         * Returns if the sensor is locked.
         * @returns `true` if VCGT is valid.
         */
        get_locked(): boolean;
        /**
         * Returns the sensor metadata.
         * @returns a               {@link GLib.HashTable}.
         */
        get_metadata(): GLib.HashTable<string, string>;
        /**
         * Returns the sensor metadata for a specific key.
         * @param key a key for the metadata dictionary
         * @returns the metadata value, or `null` if not set.
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the sensor operating mode.
         * @returns A {@link Colord.SensorCap}, e.g. {@link Colord.SensorCap.AMBIENT}
         */
        get_mode(): SensorCap;
        /**
         * Gets the sensor model.
         * @returns A string, or `null` for invalid
         */
        get_model(): string;
        /**
         * Returns if the sensor has a native driver.
         * @returns `true` if VCGT is valid.
         */
        get_native(): boolean;
        /**
         * Gets the object path for the sensor.
         * @returns the object path, or `null`
         */
        get_object_path(): string;
        /**
         * Gets a specific sensor option.
         * @param key a key to search for.
         * @returns A const string, or `null` of not found.
         */
        get_option(key: string): string;
        /**
         * Gets any sensor options.
         * @returns A               refcounted {@link GLib.HashTable} of (string, GVariant).
         */
        get_options(): GLib.HashTable<string, GLib.Variant>;
        /**
         * Gets a color sample from a sensor
         * @param cap a {@link Colord.SensorCap}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_sample(cap: SensorCap | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<ColorXYZ>;
        /**
         * Gets a color sample from a sensor
         * @param cap a {@link Colord.SensorCap}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_sample(
            cap: SensorCap | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets a color sample from a sensor
         * @param cap a {@link Colord.SensorCap}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_sample(
            cap: SensorCap | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ColorXYZ> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the XYZ reading, or `null`
         */
        get_sample_finish(res: Gio.AsyncResult): ColorXYZ;
        /**
         * Gets a sample from the sensor.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cap The device capability, e.g. {@link Colord.SensorCap.AMBIENT}.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns the XYZ reading, with ambient levels in Lux encoded in X, or `null` for error.
         */
        get_sample_sync(cap: SensorCap | null, cancellable?: Gio.Cancellable | null): ColorXYZ;
        /**
         * Gets the sensor serial number.
         * @returns A string, or `null` for invalid
         */
        get_serial(): string;
        /**
         * Gets a color spectrum from a sensor
         * @param cap a {@link Colord.SensorCap}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_spectrum(cap: SensorCap | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<Spectrum>;
        /**
         * Gets a color spectrum from a sensor
         * @param cap a {@link Colord.SensorCap}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_spectrum(
            cap: SensorCap | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets a color spectrum from a sensor
         * @param cap a {@link Colord.SensorCap}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_spectrum(
            cap: SensorCap | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Spectrum> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns the XYZ reading, or `null`
         */
        get_spectrum_finish(res: Gio.AsyncResult): Spectrum;
        /**
         * Gets a spectrum from the sensor.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cap The device capability, e.g. {@link Colord.SensorCap.AMBIENT}.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns the XYZ reading, with ambient levels in Lux encoded in X, or `null` for error.
         */
        get_spectrum_sync(cap: SensorCap | null, cancellable?: Gio.Cancellable | null): Spectrum;
        /**
         * Gets the sensor state.
         * @returns A {@link Colord.SensorState}, e.g. {@link Colord.SensorState.IDLE}
         */
        get_state(): SensorState;
        /**
         * Gets the sensor vendor.
         * @returns A string, or `null` for invalid
         */
        get_vendor(): string;
        /**
         * Returns the sensor metadata for a specific key.
         * @param cap a specified capability, e.g. {@link Colord.SensorCap.LCD}
         * @returns `true` if the sensor has the specified capability
         */
        has_cap(cap: SensorCap | null): boolean;
        /**
         * Locks the device so we can use it.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        lock(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Locks the device so we can use it.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        lock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Locks the device so we can use it.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        lock(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        lock_finish(res: Gio.AsyncResult): boolean;
        /**
         * Locks the device so we can use it.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        lock_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the object path of the sensor.
         * @param object_path The colord object path.
         */
        set_object_path(object_path: string): void;
        /**
         * Sets options on the sensor device.
         * @param values the options
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        set_options(
            values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Sets options on the sensor device.
         * @param values the options
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_options(
            values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets options on the sensor device.
         * @param values the options
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_options(
            values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        set_options_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets options on the sensor device.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param values the options
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        set_options_sync(
            values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        to_string(): string;
        /**
         * Unlocks the sensor for use by other programs.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        unlock(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Unlocks the sensor for use by other programs.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        unlock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Unlocks the sensor for use by other programs.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        unlock(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the {@link Gio.AsyncResult}
         * @returns success
         */
        unlock_finish(res: Gio.AsyncResult): boolean;
        /**
         * Unlocks the device for use by other programs.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `true` for success, else `false`.
         */
        unlock_sync(cancellable?: Gio.Cancellable | null): boolean;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Struct
     */
    class ColorLab {
        static $gtype: GObject.GType<ColorLab>;

        // Fields

        L: number;
        a: number;
        b: number;

        // Constructors

        constructor(
            properties?: Partial<{
                L: number;
                a: number;
                b: number;
            }>,
        );

        static ['new'](): ColorLab;

        // Methods

        /**
         * Deep copies a color value.
         * @param dest the destination color
         */
        copy(dest: ColorLab): void;
        /**
         * Calculates the ΔE of two colors using the 1976 formula.
         * @param p2 Lab value 2
         * @returns distance metric, where JND ΔE ≈ 2.3
         */
        delta_e76(p2: ColorLab): number;
        dup(): ColorLab;
        /**
         * Deallocates a color value.
         */
        free(): void;
        /**
         * Initialises a color value.
         * @param L component value
         * @param a component value
         * @param b component value
         */
        set(L: number, a: number, b: number): void;
    }

    /**
     * @gir-type Struct
     */
    class ColorRGB {
        static $gtype: GObject.GType<ColorRGB>;

        // Fields

        R: number;
        G: number;
        B: number;

        // Constructors

        constructor(
            properties?: Partial<{
                R: number;
                G: number;
                B: number;
            }>,
        );

        static ['new'](): ColorRGB;

        // Static methods

        /**
         * Interpolate the RGB array to a different size.
         * This uses the Akima interpolation algorithm unless the array would become
         * non-monotonic, in which case it falls back to linear interpolation.
         * @param array Input array
         * @param new_length the target length of the return array
         */
        static array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[];
        /**
         * Checks the array for monotonicity.
         * @param array Input array
         */
        static array_is_monotonic(array: ColorRGB[]): boolean;
        /**
         * Creates a new RGB array.
         */
        static array_new(): ColorRGB[];

        // Methods

        /**
         * Deep copies a color value.
         * @param dest the destination color
         */
        copy(dest: ColorRGB): void;
        dup(): ColorRGB;
        /**
         * Deallocates a color value.
         */
        free(): void;
        /**
         * Set an RGB color which is roughly representative to the wavelength.
         * @param wavelength the wavelength roughly between 380nm and 780nm
         */
        from_wavelength(wavelength: number): void;
        /**
         * @param p2
         * @param index
         * @param result
         */
        interpolate(p2: ColorRGB, index: number, result: ColorRGB): void;
        /**
         * Initialises a color value.
         * @param R component value
         * @param G component value
         * @param B component value
         */
        set(R: number, G: number, B: number): void;
        /**
         * Convert from one color format to another.
         * @param dest the destination color
         */
        to_rgb8(dest: ColorRGB8): void;
    }

    /**
     * @gir-type Struct
     */
    class ColorRGB8 {
        static $gtype: GObject.GType<ColorRGB8>;

        // Fields

        R: number;
        G: number;
        B: number;

        // Constructors

        constructor(
            properties?: Partial<{
                R: number;
                G: number;
                B: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class ColorSwatch {
        static $gtype: GObject.GType<ColorSwatch>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ColorSwatch;

        // Methods

        dup(): ColorSwatch;
        /**
         * Deallocates a color swatch.
         */
        free(): void;
        get_name(): string;
        get_value(): ColorLab;
        /**
         * Initialises a swatch name.
         * @param name component name
         */
        set_name(name: string): void;
        /**
         * Initialises a swatch value.
         * @param value component value
         */
        set_value(value: ColorLab): void;
    }

    /**
     * @gir-type Struct
     */
    class ColorUVW {
        static $gtype: GObject.GType<ColorUVW>;

        // Fields

        U: number;
        V: number;
        W: number;

        // Constructors

        constructor(
            properties?: Partial<{
                U: number;
                V: number;
                W: number;
            }>,
        );

        static ['new'](): ColorUVW;

        // Methods

        /**
         * Deep copies a color value.
         * @param dest the destination color
         */
        copy(dest: ColorUVW): void;
        dup(): ColorUVW;
        /**
         * Deallocates a color value.
         */
        free(): void;
        /**
         * Gets the chromaticity distance in the CIE 1960 UCS.
         * @param p2 color
         * @returns The Euclidean distance
         */
        get_chroma_difference(p2: ColorUVW): number;
        /**
         * Initialises a color value.
         * @param U component value
         * @param V component value
         * @param W component value
         */
        set(U: number, V: number, W: number): void;
        /**
         * Sets the CIEUVW color from a Planckian locus of specific temperature.
         * @param temp temperature in Kelvin
         */
        set_planckian_locus(temp: number): void;
    }

    /**
     * @gir-type Struct
     */
    class ColorXYZ {
        static $gtype: GObject.GType<ColorXYZ>;

        // Fields

        X: number;
        Y: number;
        Z: number;

        // Constructors

        constructor(
            properties?: Partial<{
                X: number;
                Y: number;
                Z: number;
            }>,
        );

        static ['new'](): ColorXYZ;

        // Methods

        /**
         * Initialises a color value.
         */
        clear(): void;
        /**
         * Deep copies a color value.
         * @param dest the destination color
         */
        copy(dest: ColorXYZ): void;
        dup(): ColorXYZ;
        /**
         * Deallocates a color value.
         */
        free(): void;
        /**
         * Normalizes `src` to y=1.0
         * @param max
         * @param dest the destination color
         */
        normalize(max: number, dest: ColorXYZ): void;
        /**
         * Initialises a color value.
         * @param X component value
         * @param Y component value
         * @param Z component value
         */
        set(X: number, Y: number, Z: number): void;
        /**
         * Gets the correlated color temperature for the XYZ value.
         */
        to_cct(): number;
        /**
         * Convert from one color format to another.
         * @param whitepoint the whitepoint
         * @param dest the destination color
         */
        to_uvw(whitepoint: ColorXYZ, dest: ColorUVW): void;
        /**
         * Convert from one color format to another.
         * @param dest the destination color
         */
        to_yxy(dest: ColorYxy): void;
    }

    /**
     * @gir-type Struct
     */
    class ColorYxy {
        static $gtype: GObject.GType<ColorYxy>;

        // Fields

        Y: number;
        x: number;
        y: number;

        // Constructors

        constructor(
            properties?: Partial<{
                Y: number;
                x: number;
                y: number;
            }>,
        );

        static ['new'](): ColorYxy;

        // Methods

        /**
         * Deep copies a color value.
         * @param dest the destination color
         */
        copy(dest: ColorYxy): void;
        dup(): ColorYxy;
        /**
         * Deallocates a color value.
         */
        free(): void;
        /**
         * Initialises a color value.
         * @param Y component value
         * @param x component value
         * @param y component value
         */
        set(Y: number, x: number, y: number): void;
        /**
         * Convert from one color format to another.
         * @param dest the destination color
         */
        to_uvw(dest: ColorUVW): void;
        /**
         * Convert from one color format to another.
         * @param dest the destination color
         */
        to_xyz(dest: ColorXYZ): void;
    }

    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;
    /**
     * @gir-type Alias
     */
    type EdidClass = typeof Edid;
    /**
     * @gir-type Alias
     */
    type IccClass = typeof Icc;
    /**
     * @gir-type Alias
     */
    type It8Class = typeof It8;
    /**
     * @gir-type Struct
     */
    class Mat3x3 {
        static $gtype: GObject.GType<Mat3x3>;

        // Fields

        m00: number;
        m01: number;
        m02: number;
        m10: number;
        m11: number;
        m12: number;
        m20: number;
        m21: number;
        m22: number;

        // Constructors

        constructor(
            properties?: Partial<{
                m00: number;
                m01: number;
                m02: number;
                m10: number;
                m11: number;
                m12: number;
                m20: number;
                m21: number;
                m22: number;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type ProfileClass = typeof Profile;
    /**
     * @gir-type Alias
     */
    type SensorClass = typeof Sensor;
    /**
     * @gir-type Struct
     */
    class Spectrum {
        static $gtype: GObject.GType<Spectrum>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Spectrum;

        static planckian_new(temperature: number): Spectrum;

        static planckian_new_full(temperature: number, start: number, end: number, resolution: number): Spectrum;

        static sized_new(reserved_size: number): Spectrum;

        // Methods

        /**
         * Adds a value in nm to the spectrum.
         * @param data
         */
        add_value(data: number): void;
        dup(): Spectrum;
        /**
         * Deallocates a color spectrum.
         */
        free(): void;
        /**
         * Gets the spectral data.
         * NOTE: This is not normalized
         * @returns spectral data
         */
        get_data(): number[];
        /**
         * Gets the end value of the spectral data.
         * @returns the value in nm
         */
        get_end(): number;
        /**
         * Gets the spectral data.
         * @returns the textual ID of the sample
         */
        get_id(): string;
        /**
         * Gets the normalization value of the spectral data.
         * NOTE: This affects every value in the spectrum.
         * @returns the value
         */
        get_norm(): number;
        /**
         * Gets the divisor of the spectra, for instance a .
         * @returns the value
         */
        get_resolution(): number;
        /**
         * Gets the size of the spectrum data.
         * @returns number of data items in this spectrum
         */
        get_size(): number;
        /**
         * Gets the start value of the spectral data.
         * @returns the value in nm
         */
        get_start(): number;
        /**
         * Gets the spectrum data at a specified index.
         * @param idx an index into the data
         * @returns spectral data value, or -1 for invalid
         */
        get_value(idx: number): number;
        /**
         * Gets the value from the spectral data for a given wavelength.
         * @param wavelength the wavelength in nm
         * @returns the value for the wavelength
         */
        get_value_for_nm(wavelength: number): number;
        /**
         * Gets the largest normalised value in the spectrum.
         */
        get_value_max(): number;
        /**
         * Gets the smallest normalised value in the spectrum.
         */
        get_value_min(): number;
        /**
         * Gets the spectrum data at a specified index, without any normalization
         * applied. Most people should use `cd_spectrum_get_value()` instead.
         * @param idx an index into the data
         * @returns spectral data value, or -1 for invalid
         */
        get_value_raw(idx: number): number;
        /**
         * Gets the wavelenth that corresponds to the specified index.
         * @param idx an index into the data
         * @returns wavelenth value in nm, or -1 for invalid
         */
        get_wavelength(idx: number): number;
        /**
         * Gets the calibration coefficients used to map pixel indexes to
         * wavelengths.
         * @param c1 the 1st coefficient
         * @param c2 the 2nd coefficient
         * @param c3 the 3rd coefficient
         */
        get_wavelength_cal(c1: number, c2: number, c3: number): void;
        /**
         * Ensures no values in the spectrum fall above a set limit. If they
         * are found, set them to `value`.
         * @param value the threshold value to limit the spectrum
         */
        limit_max(value: number): void;
        /**
         * Ensures no values in the spectrum fall below a set limit. If they
         * are found, set them to `value`.
         * @param value the threshold value to limit the spectrum
         */
        limit_min(value: number): void;
        /**
         * Multiplies two spectra together.
         * @param s2 a {@link Colord.Spectrum} instance, possibly an absorption spectrum.
         * @param resolution the step size in nm
         * @returns a {@link Colord.Spectrum} instance
         */
        multiply(s2: Spectrum, resolution: number): Spectrum;
        /**
         * Multiplies a spectra with a scalar value.
         * @param value a scalar value
         * @returns a {@link Colord.Spectrum} instance
         */
        multiply_scalar(value: number): Spectrum;
        /**
         * Normalizes a spectrum to a specific value at a specific wavelength.
         * @param wavelength the wavelength in nm
         * @param value the value to normalize to
         */
        normalize(wavelength: number, value: number): void;
        /**
         * Normalizes a spectrum to a specific value at its maximum value.
         * @param value the value to normalize to
         */
        normalize_max(value: number): void;
        /**
         * Resample a new spectrum with linear index to wavelength coefficients.
         * @param start the new spectrum start
         * @param end the new spectrum end
         * @param resolution the resolution to use when resampling
         * @returns a {@link Colord.Spectrum} instance
         */
        resample(start: number, end: number, resolution: number): Spectrum;
        /**
         * Resample a new spectrum with the desired number of points.
         * @param size the output spectrum size
         * @returns a {@link Colord.Spectrum} instance
         */
        resample_to_size(size: number): Spectrum;
        /**
         * Sets the spectrum data.
         * @param value component value
         */
        set_data(value: number[]): void;
        /**
         * Set the end value of the spectal data in nm.
         *
         * If there is already spectral data, the wavelength calibration will
         * also be set automatically.
         * @param end the end value of the spectral data
         */
        set_end(end: number): void;
        /**
         * Sets a spectrum id.
         * @param id component id
         */
        set_id(id: string): void;
        /**
         * Set the normalization value of the spectrum.
         * NOTE: This affects every value in the spectrum.
         * @param norm the end value of the spectral data
         */
        set_norm(norm: number): void;
        /**
         * Set the start value of the spectal data in nm.
         * @param start the start value of the spectral data
         */
        set_start(start: number): void;
        /**
         * Overwrites the spectrum data at a specified index.
         * @param idx an index into the data
         * @param data a data value
         */
        set_value(idx: number, data: number): void;
        /**
         * Sets the calibration coefficients used to map pixel indexes to
         * wavelengths.
         *
         * This function will set the 'end' wavelength automatically,
         * potentially overwriting the value set by `cd_spectrum_set_end()`.
         * @param c1 the 1st coefficient
         * @param c2 the 2nd coefficient
         * @param c3 the 3rd coefficient
         */
        set_wavelength_cal(c1: number, c2: number, c3: number): void;
        /**
         * Subtracts one spectral plot from another. If the spectra have the same start,
         * end and the same number of data points they are not resampled.
         * @param s2 a {@link Colord.Spectrum} instance, e.g. a dark calibration
         * @param resolution the resolution to use when resampling
         * @returns a {@link Colord.Spectrum} instance
         */
        subtract(s2: Spectrum, resolution: number): Spectrum;
        /**
         * Returns a graphical representation of the spectrum.
         * @param max_width the terminal width
         * @param max_height the terminal height
         * @returns a printable ASCII string
         */
        to_string(max_width: number, max_height: number): string;
    }

    /**
     * @gir-type Struct
     */
    class Vec3 {
        static $gtype: GObject.GType<Vec3>;

        // Fields

        v0: number;
        v1: number;
        v2: number;

        // Constructors

        constructor(
            properties?: Partial<{
                v0: number;
                v1: number;
                v2: number;
            }>,
        );

        // Methods

        /**
         * Adds two vector quantaties
         * The arguments `src` and `dest` can be the same value.
         * @param src2 the other source
         * @param dest the destination
         */
        add(src2: Vec3, dest: Vec3): void;
        /**
         * Clears a vector, setting all it's values to zero.
         */
        clear(): void;
        /**
         * Copies the vector into another vector.
         * The arguments `src` and `dest` cannot be the same value.
         * @param dest the destination
         */
        copy(dest: Vec3): void;
        /**
         * Gets the raw data for the vector.
         * @returns the pointer to the data segment.
         */
        get_data(): number;
        /**
         * Initialises a vector.
         * @param v0 component value
         * @param v1 component value
         * @param v2 component value
         */
        init(v0: number, v1: number, v2: number): void;
        /**
         * Multiplies a vector with a scalar.
         * The arguments `src` and `dest` can be the same value.
         * @param value the scalar multiplier
         * @param dest the destination
         */
        scalar_multiply(value: number, dest: Vec3): void;
        /**
         * Gets the mean squared error for a pair of vectors
         * @param src2 another vector source
         * @returns the floating point MSE.
         */
        squared_error(src2: Vec3): number;
        /**
         * Subtracts one vector quantity from another
         * The arguments `src` and `dest` can be the same value.
         * @param src2 the other source
         * @param dest the destination
         */
        subtract(src2: Vec3, dest: Vec3): void;
        /**
         * Obtains a string representaton of a vector.
         * @returns the string. Free with `g_free()`
         */
        to_string(): string;
    }

    /**
     * The pixel format of an image.
     * NOTE: these values are the same as the lcms2 AOTTTTTUYFPXSEEECCCCBBB type.
     * @gir-type Alias
     */
    type PixelFormat = number;
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

export default Colord;

// END
