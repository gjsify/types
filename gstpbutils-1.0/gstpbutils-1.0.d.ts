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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace GstPbutils {
    /**
     * GstPbutils-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace AudioVisualizerShader {
        export const $gtype: GObject.GType<AudioVisualizerShader>;
    }

    /**
     * Different types of supported background shading functions.
     * @gir-type Enum
     */
    enum AudioVisualizerShader {
        /**
         * no shading
         */
        NONE,
        /**
         * plain fading
         */
        FADE,
        /**
         * fade and move up
         */
        FADE_AND_MOVE_UP,
        /**
         * fade and move down
         */
        FADE_AND_MOVE_DOWN,
        /**
         * fade and move left
         */
        FADE_AND_MOVE_LEFT,
        /**
         * fade and move right
         */
        FADE_AND_MOVE_RIGHT,
        /**
         * fade and move horizontally out
         */
        FADE_AND_MOVE_HORIZ_OUT,
        /**
         * fade and move horizontally in
         */
        FADE_AND_MOVE_HORIZ_IN,
        /**
         * fade and move vertically out
         */
        FADE_AND_MOVE_VERT_OUT,
        /**
         * fade and move vertically in
         */
        FADE_AND_MOVE_VERT_IN,
    }

    /**
     * @gir-type Enum
     */
    export namespace DiscovererResult {
        export const $gtype: GObject.GType<DiscovererResult>;
    }

    /**
     * Result values for the discovery process.
     * @gir-type Enum
     */
    enum DiscovererResult {
        /**
         * The discovery was successful
         */
        OK,
        /**
         * the URI is invalid
         */
        URI_INVALID,
        /**
         * an error happened and the GError is set
         */
        ERROR,
        /**
         * the discovery timed-out
         */
        TIMEOUT,
        /**
         * the discoverer was already discovering a file
         */
        BUSY,
        /**
         * Some plugins are missing for full discovery
         */
        MISSING_PLUGINS,
    }

    /**
     * @gir-type Enum
     */
    export namespace InstallPluginsReturn {
        export const $gtype: GObject.GType<InstallPluginsReturn>;
    }

    /**
     * Result codes returned by `gst_install_plugins_async()` and
     * `gst_install_plugins_sync()`, and also the result code passed to the
     * {@link GstPbutils.InstallPluginsResultFunc} specified with `gst_install_plugins_async()`.
     *
     * These codes indicate success or failure of starting an external installer
     * program and to what extent the requested plugins could be installed.
     * @gir-type Enum
     */
    enum InstallPluginsReturn {
        /**
         * all of the requested plugins could be
         *     installed
         */
        SUCCESS,
        /**
         * no appropriate installation candidate for
         *     any of the requested plugins could be found. Only return this if nothing
         *     has been installed. Return #GST_INSTALL_PLUGINS_PARTIAL_SUCCESS if
         *     some (but not all) of the requested plugins could be installed.
         */
        NOT_FOUND,
        /**
         * an error occurred during the installation. If
         *     this happens, the  user has already seen an error message and another
         *     one should not be displayed
         */
        ERROR,
        /**
         * some of the requested plugins could
         *     be installed, but not all
         */
        PARTIAL_SUCCESS,
        /**
         * the user has aborted the installation
         */
        USER_ABORT,
        /**
         * the installer had an unclean exit code
         *     (ie. death by signal)
         */
        CRASHED,
        /**
         * the helper returned an invalid status code
         */
        INVALID,
        /**
         * returned by `gst_install_plugins_async()` to
         *     indicate that everything went fine so far and the provided callback
         *     will be called with the result of the installation later
         */
        STARTED_OK,
        /**
         * some internal failure has
         *     occurred when trying to start the installer
         */
        INTERNAL_FAILURE,
        /**
         * the helper script to call the
         *     actual installer is not installed
         */
        HELPER_MISSING,
        /**
         * a previously-started plugin
         *     installation is still in progress, try again later
         */
        INSTALL_IN_PROGRESS,
    }

    /**
     * {@link GstPbutils.EncodingTarget} category for recording and capture.
     * Targets within this category are optimized for low latency encoding.
     */
    const ENCODING_CATEGORY_CAPTURE: string;
    /**
     * {@link GstPbutils.EncodingTarget} category for device-specific targets.
     * The name of the target will usually be the constructor and model of the device,
     * and that target will contain `GstEncodingProfiles` suitable for that device.
     */
    const ENCODING_CATEGORY_DEVICE: string;
    /**
     * {@link GstPbutils.EncodingTarget} category for file extensions.
     * The name of the target will be the name of the file extensions possible
     * for a particular target. Those targets are defining like 'default' formats
     * usually used for a particular file extension.
     */
    const ENCODING_CATEGORY_FILE_EXTENSION: string;
    /**
     * {@link GstPbutils.EncodingTarget} category for online-services.
     * The name of the target will usually be the name of the online service
     * and that target will contain `GstEncodingProfiles` suitable for that online
     * service.
     */
    const ENCODING_CATEGORY_ONLINE_SERVICE: string;
    /**
     * {@link GstPbutils.EncodingTarget} category for storage, archiving and editing targets.
     * Those targets can be lossless and/or provide very fast random access content.
     * The name of the target will usually be the container type or editing target,
     * and that target will contain `GstEncodingProfiles` suitable for editing or
     * storage.
     */
    const ENCODING_CATEGORY_STORAGE_EDITING: string;
    /**
     * The major version of GStreamer's gst-plugins-base libraries at compile time.
     */
    const PLUGINS_BASE_VERSION_MAJOR: number;
    /**
     * The micro version of GStreamer's gst-plugins-base libraries at compile time.
     */
    const PLUGINS_BASE_VERSION_MICRO: number;
    /**
     * The minor version of GStreamer's gst-plugins-base libraries at compile time.
     */
    const PLUGINS_BASE_VERSION_MINOR: number;
    /**
     * The nano version of GStreamer's gst-plugins-base libraries at compile time.
     * Actual releases have 0, GIT versions have 1, prerelease versions have 2-...
     */
    const PLUGINS_BASE_VERSION_NANO: number;
    /**
     * Sets the level and profile on `caps` if it can be determined from
     * `audio_config`. See `gst_codec_utils_aac_get_level()` and
     * `gst_codec_utils_aac_get_profile()` for more details on the parameters.
     * `caps` must be audio/mpeg caps with an "mpegversion" field of either 2 or 4.
     * If mpegversion is 4, the "base-profile" field is also set in `caps`.
     * @param caps the {@link Gst.Caps} to which level and profile fields are to be added
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1. (See below for more details)
     * @returns `true` if the level and profile could be set, `false` otherwise.
     */
    function codec_utils_aac_caps_set_level_and_profile(caps: Gst.Caps, audio_config: Uint8Array | string): boolean;
    /**
     * Returns the channels of the given AAC stream.
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The channels or 0 if the channel could not be determined.
     * @since 1.10
     */
    function codec_utils_aac_get_channels(audio_config: Uint8Array | string): number;
    /**
     * Translates the sample rate to the index corresponding to it in AAC spec.
     * @param rate Sample rate
     * @returns The AAC index for this sample rate, -1 if the rate is not a valid AAC sample rate.
     */
    function codec_utils_aac_get_index_from_sample_rate(rate: number): number;
    /**
     * Determines the level of a stream as defined in ISO/IEC 14496-3. For AAC LC
     * streams, the constraints from the AAC audio profile are applied. For AAC
     * Main, LTP, SSR and others, the Main profile is used.
     *
     * The `audio_config` parameter follows the following format, starting from the
     * most significant bit of the first byte:
     *
     *   * Bit 0:4 contains the AudioObjectType (if this is 0x5, then the
     *     real AudioObjectType is carried after the rate and channel data)
     *   * Bit 5:8 contains the sample frequency index (if this is 0xf, then the
     *     next 24 bits define the actual sample frequency, and subsequent
     *     fields are appropriately shifted).
     *   * Bit 9:12 contains the channel configuration
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The level as a const string and `null` if the level could not be determined.
     */
    function codec_utils_aac_get_level(audio_config: Uint8Array | string): string | null;
    /**
     * Returns the profile of the given AAC stream as a string. The profile is
     * normally determined using the AudioObjectType field which is in the first
     * 5 bits of `audio_config`
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The profile as a const string and `null` if the profile could not be determined.
     */
    function codec_utils_aac_get_profile(audio_config: Uint8Array | string): string | null;
    /**
     * Translates the sample rate index found in AAC headers to the actual sample
     * rate.
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The sample rate if sr_idx is valid, 0 otherwise.
     * @since 1.10
     */
    function codec_utils_aac_get_sample_rate(audio_config: Uint8Array | string): number;
    /**
     * Translates the sample rate index found in AAC headers to the actual sample
     * rate.
     * @param sr_idx Sample rate index as from the AudioSpecificConfig (MPEG-4          container) or ADTS frame header
     * @returns The sample rate if `sr_idx` is valid, 0 otherwise.
     */
    function codec_utils_aac_get_sample_rate_from_index(sr_idx: number): number;
    /**
     * Converts a RFC 6381 compatible codec string to {@link Gst.Caps}. More than one codec
     * string can be present (separated by `,`).
     *
     * Registered codecs can be found at http://mp4ra.org/#/codecs
     * @param codecs_field A mime codec string field
     * @returns The corresponding {@link Gst.Caps} or `null`
     * @since 1.22
     */
    function codec_utils_caps_from_mime_codec(codecs_field: string): Gst.Caps | null;
    /**
     * Converts `caps` to a RFC 6381 compatible codec string if possible.
     *
     * Useful for providing the 'codecs' field inside the 'Content-Type' HTTP
     * header for containerized formats, such as mp4 or matroska.
     *
     * Registered codecs can be found at http://mp4ra.org/#/codecs
     * @param caps A {@link Gst.Caps} to convert to mime codec
     * @returns a RFC 6381 compatible codec string or `null`
     * @since 1.20
     */
    function codec_utils_caps_get_mime_codec(caps: Gst.Caps): string | null;
    /**
     * Sets the level and profile in `caps` if it can be determined from `sps`. See
     * `gst_codec_utils_h264_get_level()` and `gst_codec_utils_h264_get_profile()`
     * for more details on the parameters.
     * @param caps the {@link Gst.Caps} to which the level and profile are to be added
     * @param sps Pointer to the sequence parameter set for the stream.
     * @returns `true` if the level and profile could be set, `false` otherwise.
     */
    function codec_utils_h264_caps_set_level_and_profile(caps: Gst.Caps, sps: Uint8Array | string): boolean;
    /**
     * Converts the level indication (level_idc) in the stream's
     * sequence parameter set into a string. The SPS is expected to have the
     * same format as for `gst_codec_utils_h264_get_profile()`.
     * @param sps Pointer to the sequence parameter set for the stream.
     * @returns The level as a const string, or `null` if there is an error.
     */
    function codec_utils_h264_get_level(sps: Uint8Array | string): string | null;
    /**
     * Transform a level string from the caps into the level_idc
     * @param level A level string from caps
     * @returns the level_idc or 0 if the level is unknown
     */
    function codec_utils_h264_get_level_idc(level: string): number;
    /**
     * Converts the profile indication (profile_idc) in the stream's
     * sequence parameter set into a string. The SPS is expected to have the
     * following format, as defined in the H.264 specification. The SPS is viewed
     * as a bitstream here, with bit 0 being the most significant bit of the first
     * byte.
     *
     * * Bit 0:7   - Profile indication
     * * Bit 8     - constraint_set0_flag
     * * Bit 9     - constraint_set1_flag
     * * Bit 10    - constraint_set2_flag
     * * Bit 11    - constraint_set3_flag
     * * Bit 12    - constraint_set3_flag
     * * Bit 13:15 - Reserved
     * * Bit 16:24 - Level indication
     * @param sps Pointer to the sequence parameter set for the stream.
     * @returns The profile as a const string, or `null` if there is an error.
     */
    function codec_utils_h264_get_profile(sps: Uint8Array | string): string | null;
    /**
     * Parses profile, flags, and level from a H264 AVCC extradata/sequence_header.
     * These are most commonly retrieved from a video/x-h264 caps with a codec_data
     * buffer.
     *
     * The format of H264 AVCC extradata/sequence_header is documented in the
     * ITU-T H.264 specification section 7.3.2.1.1 as well as in ISO/IEC 14496-15
     * section 5.3.3.1.2.
     * @param codec_data H264 AVCC extradata
     * @returns `true` on success, `false` on failure
     * @since 1.20
     */
    function codec_utils_h264_get_profile_flags_level(
        codec_data: Uint8Array | string,
    ): [boolean, number, number, number];
    /**
     * Sets the level, tier and profile in `caps` if it can be determined from
     * `profile_tier_level`. See `gst_codec_utils_h265_get_level()`,
     * `gst_codec_utils_h265_get_tier()` and `gst_codec_utils_h265_get_profile()`
     * for more details on the parameters.
     * @param caps the {@link Gst.Caps} to which the level, tier and profile are to be added
     * @param profile_tier_level Pointer to the profile_tier_level   struct
     * @returns `true` if the level, tier, profile could be set, `false` otherwise.
     * @since 1.4
     */
    function codec_utils_h265_caps_set_level_tier_and_profile(
        caps: Gst.Caps,
        profile_tier_level: Uint8Array | string,
    ): boolean;
    /**
     * Converts the level indication (general_level_idc) in the stream's
     * profile_tier_level structure into a string. The profiel_tier_level is
     * expected to have the same format as for `gst_codec_utils_h264_get_profile()`.
     * @param profile_tier_level Pointer to the profile_tier_level   for the stream
     * @returns The level as a const string, or `null` if there is an error.
     * @since 1.4
     */
    function codec_utils_h265_get_level(profile_tier_level: Uint8Array | string): string | null;
    /**
     * Transform a level string from the caps into the level_idc
     * @param level A level string from caps
     * @returns the level_idc or 0 if the level is unknown
     * @since 1.4
     */
    function codec_utils_h265_get_level_idc(level: string): number;
    /**
     * Converts the profile indication (general_profile_idc) in the stream's
     * profile_level_tier structure into a string. The profile_tier_level is
     * expected to have the following format, as defined in the H.265
     * specification. The profile_tier_level is viewed as a bitstream here,
     * with bit 0 being the most significant bit of the first byte.
     *
     * * Bit 0:1   - general_profile_space
     * * Bit 2     - general_tier_flag
     * * Bit 3:7   - general_profile_idc
     * * Bit 8:39  - gernal_profile_compatibility_flags
     * * Bit 40    - general_progressive_source_flag
     * * Bit 41    - general_interlaced_source_flag
     * * Bit 42    - general_non_packed_constraint_flag
     * * Bit 43    - general_frame_only_constraint_flag
     * * Bit 44:87 - See below
     * * Bit 88:95 - general_level_idc
     * @param profile_tier_level Pointer to the profile_tier_level   structure for the stream.
     * @returns The profile as a const string, or `null` if there is an error.
     * @since 1.4
     */
    function codec_utils_h265_get_profile(profile_tier_level: Uint8Array | string): string | null;
    /**
     * Converts the tier indication (general_tier_flag) in the stream's
     * profile_tier_level structure into a string. The profile_tier_level
     * is expected to have the same format as for `gst_codec_utils_h264_get_profile()`.
     * @param profile_tier_level Pointer to the profile_tier_level   for the stream.
     * @returns The tier as a const string, or `null` if there is an error.
     * @since 1.4
     */
    function codec_utils_h265_get_tier(profile_tier_level: Uint8Array | string): string | null;
    /**
     * Sets the level and profile in `caps` if it can be determined from
     * `vis_obj_seq`. See `gst_codec_utils_mpeg4video_get_level()` and
     * `gst_codec_utils_mpeg4video_get_profile()` for more details on the
     * parameters.
     * @param caps the {@link Gst.Caps} to which the level and profile are to be added
     * @param vis_obj_seq Pointer to the visual object   sequence for the stream.
     * @returns `true` if the level and profile could be set, `false` otherwise.
     */
    function codec_utils_mpeg4video_caps_set_level_and_profile(
        caps: Gst.Caps,
        vis_obj_seq: Uint8Array | string,
    ): boolean;
    /**
     * Converts the level indication in the stream's visual object sequence into
     * a string. `vis_obj_seq` is expected to be the data following the visual
     * object sequence start code. Only the first byte
     * (profile_and_level_indication) is used.
     * @param vis_obj_seq Pointer to the visual object   sequence for the stream.
     * @returns The level as a const string, or NULL if there is an error.
     */
    function codec_utils_mpeg4video_get_level(vis_obj_seq: Uint8Array | string): string | null;
    /**
     * Converts the profile indication in the stream's visual object sequence into
     * a string. `vis_obj_seq` is expected to be the data following the visual
     * object sequence start code. Only the first byte
     * (profile_and_level_indication) is used.
     * @param vis_obj_seq Pointer to the visual object   sequence for the stream.
     * @returns The profile as a const string, or NULL if there is an error.
     */
    function codec_utils_mpeg4video_get_profile(vis_obj_seq: Uint8Array | string): string | null;
    /**
     * Creates Opus caps from the given parameters.
     * @param rate the sample rate
     * @param channels the number of channels
     * @param channel_mapping_family the channel mapping family
     * @param stream_count the number of independent streams
     * @param coupled_count the number of stereo streams
     * @param channel_mapping the mapping between the streams
     * @returns The {@link Gst.Caps}, or `null` if the parameters would lead to invalid Opus caps.
     * @since 1.8
     */
    function codec_utils_opus_create_caps(
        rate: number,
        channels: number,
        channel_mapping_family: number,
        stream_count: number,
        coupled_count: number,
        channel_mapping?: Uint8Array | null,
    ): Gst.Caps | null;
    /**
     * Creates Opus caps from the given OpusHead `header` and comment header
     * `comments`.
     * @param header OpusHead header
     * @param comments Comment header or NULL
     * @returns The {@link Gst.Caps}.
     * @since 1.8
     */
    function codec_utils_opus_create_caps_from_header(
        header: Gst.Buffer,
        comments?: Gst.Buffer | null,
    ): Gst.Caps | null;
    /**
     * Creates OpusHead header from the given parameters.
     * @param rate the sample rate
     * @param channels the number of channels
     * @param channel_mapping_family the channel mapping family
     * @param stream_count the number of independent streams
     * @param coupled_count the number of stereo streams
     * @param channel_mapping the mapping between the streams
     * @param pre_skip Pre-skip in 48kHz samples or 0
     * @param output_gain Output gain or 0
     * @returns The {@link Gst.Buffer} containing the OpusHead.
     * @since 1.8
     */
    function codec_utils_opus_create_header(
        rate: number,
        channels: number,
        channel_mapping_family: number,
        stream_count: number,
        coupled_count: number,
        channel_mapping: Uint8Array | null,
        pre_skip: number,
        output_gain: number,
    ): Gst.Buffer | null;
    /**
     * Parses Opus caps and fills the different fields with defaults if possible.
     * @param caps the {@link Gst.Caps} to parse the data from
     * @returns `true` if parsing was successful, `false` otherwise.
     * @since 1.8
     */
    function codec_utils_opus_parse_caps(
        caps: Gst.Caps,
    ): [boolean, number, number, number, number, number, Uint8Array | null];
    /**
     * Parses the OpusHead header.
     * @param header the OpusHead {@link Gst.Buffer}
     * @returns `true` if parsing was successful, `false` otherwise.
     * @since 1.8
     */
    function codec_utils_opus_parse_header(
        header: Gst.Buffer,
    ): [boolean, number, number, number, number, number, Uint8Array | null, number, number];
    /**
     * List all available {@link GstPbutils.EncodingTarget} for the specified category, or all categories
     * if `categoryname` is `null`.
     * @param categoryname The category, for ex: #GST_ENCODING_CATEGORY_DEVICE. Can be `null`.
     * @returns The list of {@link GstPbutils.EncodingTarget}
     */
    function encoding_list_all_targets(categoryname?: string | null): EncodingTarget[];
    /**
     * Lists all {@link GstPbutils.EncodingTarget} categories present on disk.
     * @returns A list of {@link GstPbutils.EncodingTarget} categories.
     */
    function encoding_list_available_categories(): string[];
    /**
     * Requests plugin installation without blocking. Once the plugins have been
     * installed or installation has failed, `func` will be called with the result
     * of the installation and your provided `user_data` pointer.
     *
     * This function requires a running GLib/Gtk main loop. If you are not
     * running a GLib/Gtk main loop, make sure to regularly call
     * g_main_context_iteration(NULL,FALSE).
     *
     * The installer strings that make up `detail` are typically obtained by
     * calling `gst_missing_plugin_message_get_installer_detail()` on missing-plugin
     * messages that have been caught on a pipeline's bus or created by the
     * application via the provided API, such as `gst_missing_element_message_new()`.
     *
     * It is possible to request the installation of multiple missing plugins in
     * one go (as might be required if there is a demuxer for a certain format
     * installed but no suitable video decoder and no suitable audio decoder).
     * @param details NULL-terminated array     of installer string details (see below)
     * @param ctx a {@link GstPbutils.InstallPluginsContext}, or NULL
     * @param func the function to call when the installer program returns
     * @returns result code whether an external installer could be started
     */
    function install_plugins_async(
        details: string[],
        ctx: InstallPluginsContext | null,
        func: InstallPluginsResultFunc,
    ): InstallPluginsReturn;
    /**
     * Checks whether plugin installation (initiated by this application only)
     * is currently in progress.
     * @returns TRUE if plugin installation is in progress, otherwise FALSE
     */
    function install_plugins_installation_in_progress(): boolean;
    /**
     * Convenience function to return the descriptive string associated
     * with a status code.  This function returns English strings and
     * should not be used for user messages. It is here only to assist
     * in debugging.
     * @param ret the return status code
     * @returns a descriptive string for the status code in `ret`
     */
    function install_plugins_return_get_name(ret: InstallPluginsReturn | null): string;
    /**
     * Checks whether plugin installation is likely to be supported by the
     * current environment. This currently only checks whether the helper script
     * that is to be provided by the distribution or operating system vendor
     * exists.
     * @returns TRUE if plugin installation is likely to be supported.
     */
    function install_plugins_supported(): boolean;
    /**
     * Requests plugin installation and block until the plugins have been
     * installed or installation has failed.
     *
     * This function should almost never be used, it only exists for cases where
     * a non-GLib main loop is running and the user wants to run it in a separate
     * thread and marshal the result back asynchronously into the main thread
     * using the other non-GLib main loop. You should almost always use
     * `gst_install_plugins_async()` instead of this function.
     * @param details NULL-terminated array     of installer string details
     * @param ctx a {@link GstPbutils.InstallPluginsContext}, or NULL
     * @returns the result of the installation.
     */
    function install_plugins_sync(details: string[], ctx?: InstallPluginsContext | null): InstallPluginsReturn;
    /**
     * Checks whether `msg` is a missing plugins message.
     * @param msg a {@link Gst.Message}
     * @returns `true` if `msg` is a missing-plugins message, otherwise `false`.
     */
    function is_missing_plugin_message(msg: Gst.Message): boolean;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * `gst_install_plugins_async()` or `gst_install_plugins_sync()`.
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param decode_caps the (fixed) caps for which a decoder element is needed
     * @returns a newly-allocated detail string. Free string          with `g_free()` when not needed any longer.
     */
    function missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a decoder element for a particular set of (fixed) caps is missing.
     * This function is mainly for use in plugins.
     * @param element the {@link Gst.Element} posting the message
     * @param decode_caps the (fixed) caps for which a decoder element is needed
     * @returns a new {@link Gst.Message}
     */
    function missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * `gst_install_plugins_async()` or `gst_install_plugins_sync()`.
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param factory_name the name of the missing element (element factory),            e.g. "videoscale" or "cdparanoiasrc"
     * @returns a newly-allocated detail string. Free string          with `g_free()` when not needed any longer.
     */
    function missing_element_installer_detail_new(factory_name: string): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a certain required element is missing. This function is mainly for
     * use in plugins.
     * @param element the {@link Gst.Element} posting the message
     * @param factory_name the name of the missing element (element factory),            e.g. "videoscale" or "cdparanoiasrc"
     * @returns a new {@link Gst.Message}
     */
    function missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * `gst_install_plugins_async()` or `gst_install_plugins_sync()`.
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param encode_caps the (fixed) caps for which an encoder element is needed
     * @returns a newly-allocated detail string. Free string          with `g_free()` when not needed any longer.
     */
    function missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that an encoder element for a particular set of (fixed) caps is missing.
     * This function is mainly for use in plugins.
     * @param element the {@link Gst.Element} posting the message
     * @param encode_caps the (fixed) caps for which an encoder element is needed
     * @returns a new {@link Gst.Message}
     */
    function missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message;
    /**
     * Returns a localised string describing the missing feature, for use in
     * error dialogs and the like. Should never return NULL unless `msg` is not
     * a valid missing-plugin message.
     *
     * This function is mainly for applications that need a human-readable string
     * describing a missing plugin, given a previously collected missing-plugin
     * message
     * @param msg a missing-plugin {@link Gst.Message} of type #GST_MESSAGE_ELEMENT
     * @returns a newly-allocated description string. Free          string with `g_free()` when not needed any longer.
     */
    function missing_plugin_message_get_description(msg: Gst.Message): string;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * `gst_install_plugins_async()` or `gst_install_plugins_sync()`.
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions.
     * @param msg a missing-plugin {@link Gst.Message} of type #GST_MESSAGE_ELEMENT
     * @returns a newly-allocated detail string, or NULL on error. Free string          with `g_free()` when not needed any longer.
     */
    function missing_plugin_message_get_installer_detail(msg: Gst.Message): string | null;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * `gst_install_plugins_async()` or `gst_install_plugins_sync()`.
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
     * @returns a newly-allocated detail string. Free string          with `g_free()` when not needed any longer.
     */
    function missing_uri_sink_installer_detail_new(protocol: string): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a sink element for a particular URI protocol is missing. This
     * function is mainly for use in plugins.
     * @param element the {@link Gst.Element} posting the message
     * @param protocol the URI protocol the missing sink needs to implement,            e.g. "http" or "smb"
     * @returns a new {@link Gst.Message}
     */
    function missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * `gst_install_plugins_async()` or `gst_install_plugins_sync()`.
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
     * @returns a newly-allocated detail string. Free string          with `g_free()` when not needed any longer.
     */
    function missing_uri_source_installer_detail_new(protocol: string): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a source element for a particular URI protocol is missing. This
     * function is mainly for use in plugins.
     * @param element the {@link Gst.Element} posting the message
     * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
     * @returns a new {@link Gst.Message}
     */
    function missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message;
    /**
     * Adds a codec tag describing the format specified by `caps` to `taglist`.
     * @param taglist a {@link Gst.TagList}
     * @param codec_tag a GStreamer codec tag such as #GST_TAG_AUDIO_CODEC,             #GST_TAG_VIDEO_CODEC or #GST_TAG_CODEC. If none is specified,             the function will attempt to detect the appropriate category.
     * @param caps the (fixed) {@link Gst.Caps} for which a codec tag should be added.
     * @returns TRUE if a codec tag was added, FALSE otherwise.
     */
    function pb_utils_add_codec_description_to_tag_list(
        taglist: Gst.TagList,
        codec_tag: string | null,
        caps: Gst.Caps,
    ): boolean;
    /**
     * Returns flags that describe the format of the caps if known. No flags are
     * set for unknown caps.
     * @param caps the (fixed) {@link Gst.Caps} for which flags are requested
     * @returns {@link GstPbutils.PbUtilsCapsDescriptionFlags} that describe `caps`, or no flags          if the caps are unknown.
     * @since 1.20
     */
    function pb_utils_get_caps_description_flags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags;
    /**
     * Returns a localised (as far as this is possible) string describing the
     * media format specified in `caps`, for use in error dialogs or other messages
     * to be seen by the user. Should never return NULL unless `caps` is invalid.
     *
     * Also see the convenience function
     * `gst_pb_utils_add_codec_description_to_tag_list()`.
     * @param caps the (fixed) {@link Gst.Caps} for which an format description is needed
     * @returns a newly-allocated description string, or NULL on error. Free          string with `g_free()` when not needed any longer.
     */
    function pb_utils_get_codec_description(caps: Gst.Caps): string | null;
    /**
     * Returns a localised string describing an decoder for the format specified
     * in `caps`, for use in error dialogs or other messages to be seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use `gst_missing_plugin_message_get_description()` to get a description of
     * a missing feature from a missing-plugin message.
     * @param caps the (fixed) {@link Gst.Caps} for which an decoder description is needed
     * @returns a newly-allocated description string. Free          string with `g_free()` when not needed any longer.
     */
    function pb_utils_get_decoder_description(caps: Gst.Caps): string;
    /**
     * Returns a localised string describing the given element, for use in
     * error dialogs or other messages to be seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use `gst_missing_plugin_message_get_description()` to get a description of
     * a missing feature from a missing-plugin message.
     * @param factory_name the name of the element, e.g. "giosrc"
     * @returns a newly-allocated description string. Free          string with `g_free()` when not needed any longer.
     */
    function pb_utils_get_element_description(factory_name: string): string;
    /**
     * Returns a localised string describing an encoder for the format specified
     * in `caps`, for use in error dialogs or other messages to be seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use `gst_missing_plugin_message_get_description()` to get a description of
     * a missing feature from a missing-plugin message.
     * @param caps the (fixed) {@link Gst.Caps} for which an encoder description is needed
     * @returns a newly-allocated description string. Free          string with `g_free()` when not needed any longer.
     */
    function pb_utils_get_encoder_description(caps: Gst.Caps): string;
    /**
     * Returns a possible file extension for the given caps, if known.
     * @param caps the (fixed) {@link Gst.Caps} for which a file extension is needed
     * @returns a newly-allocated file extension string, or NULL on error. Free          string with `g_free()` when not needed any longer.
     * @since 1.20
     */
    function pb_utils_get_file_extension_from_caps(caps: Gst.Caps): string | null;
    /**
     * Returns a localised string describing a sink element handling the protocol
     * specified in `protocol`, for use in error dialogs or other messages to be
     * seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use `gst_missing_plugin_message_get_description()` to get a description of
     * a missing feature from a missing-plugin message.
     * @param protocol the protocol the sink element needs to handle, e.g. "http"
     * @returns a newly-allocated description string. Free          string with `g_free()` when not needed any longer.
     */
    function pb_utils_get_sink_description(protocol: string): string;
    /**
     * Returns a localised string describing a source element handling the protocol
     * specified in `protocol`, for use in error dialogs or other messages to be
     * seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use `gst_missing_plugin_message_get_description()` to get a description of
     * a missing feature from a missing-plugin message.
     * @param protocol the protocol the source element needs to handle, e.g. "http"
     * @returns a newly-allocated description string. Free          string with `g_free()` when not needed any longer.
     */
    function pb_utils_get_source_description(protocol: string): string;
    /**
     * Initialises the base utils support library. This function is not
     * thread-safe. Applications should call it after calling `gst_init()`,
     * plugins should call it from their plugin_init function.
     *
     * This function may be called multiple times. It will do nothing if the
     * library has already been initialised.
     */
    function pb_utils_init(): void;
    /**
     * Gets the version number of the GStreamer Plugins Base libraries.
     */
    function plugins_base_version(): [number, number, number, number];
    /**
     * This function returns a string that is useful for describing this version
     * of GStreamer's gst-plugins-base libraries to the outside world: user agent
     * strings, logging, about dialogs ...
     * @returns a newly allocated string describing this version of gst-plugins-base
     */
    function plugins_base_version_string(): string;
    /**
     * @gir-type Callback
     */
    interface AudioVisualizerShaderFunc {
        (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void;
    }
    /**
     * @gir-type Callback
     */
    interface InstallPluginsResultFunc {
        (result: InstallPluginsReturn): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace DiscovererSerializeFlags {
        export const $gtype: GObject.GType<DiscovererSerializeFlags>;
    }

    /**
     * You can use these flags to control what is serialized by
     * `gst_discoverer_info_to_variant()`
     * @gir-type Flags
     * @since 1.6
     */
    enum DiscovererSerializeFlags {
        /**
         * Serialize only basic information, excluding
         * caps, tags and miscellaneous information
         */
        BASIC,
        /**
         * Serialize the caps for each stream
         */
        CAPS,
        /**
         * Serialize the tags for each stream
         */
        TAGS,
        /**
         * Serialize miscellaneous information for each stream
         */
        MISC,
        /**
         * Serialize all the available info, including
         * caps, tags and miscellaneous information
         */
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace PbUtilsCapsDescriptionFlags {
        export const $gtype: GObject.GType<PbUtilsCapsDescriptionFlags>;
    }

    /**
     * Flags that are returned by `gst_pb_utils_get_caps_description_flags()` and
     * describe the format of the caps.
     * @gir-type Flags
     * @since 1.20
     */
    enum PbUtilsCapsDescriptionFlags {
        /**
         * Caps describe a container format.
         */
        CONTAINER,
        /**
         * Caps describe an audio format, or a
         *     container format that can store audio.
         */
        AUDIO,
        /**
         * Caps describe an video format, or a
         *     container format that can store video.
         */
        VIDEO,
        /**
         * Caps describe an image format, or a
         *     container format that can store image.
         */
        IMAGE,
        /**
         * Caps describe an subtitle format, or a
         *     container format that can store subtitles.
         */
        SUBTITLE,
        /**
         * Container format is a tags container.
         */
        TAG,
        /**
         * Container format can store any kind of
         *     stream type.
         */
        GENERIC,
        /**
         * Caps describe a metadata format, or a container format that can store
         * metadata.
         */
        METADATA,
    }

    namespace AudioVisualizer {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::shade-amount': (pspec: GObject.ParamSpec) => void;
            'notify::shader': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            shade_amount: number;
            shadeAmount: number;
            shader: AudioVisualizerShader;
        }
    }

    /**
     * A baseclass for scopes (visualizers). It takes care of re-fitting the
     * audio-rate to video-rate and handles renegotiation (downstream video size
     * changes).
     *
     * It also provides several background shading effects. These effects are
     * applied to a previous picture before the `render()` implementation can draw a
     * new frame.
     * @gir-type Class
     */
    abstract class AudioVisualizer extends Gst.Element {
        static $gtype: GObject.GType<AudioVisualizer>;

        // Properties

        get shade_amount(): number;
        set shade_amount(val: number);
        get shadeAmount(): number;
        set shadeAmount(val: number);
        get shader(): AudioVisualizerShader;
        set shader(val: AudioVisualizerShader);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AudioVisualizer.SignalSignatures;

        // Fields

        req_spf: number;

        // Constructors

        constructor(properties?: Partial<AudioVisualizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AudioVisualizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioVisualizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AudioVisualizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioVisualizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AudioVisualizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AudioVisualizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param query
         * @virtual
         */
        vfunc_decide_allocation(query: Gst.Query): boolean;
        /**
         * @param audio
         * @param video
         * @virtual
         */
        vfunc_render(audio: Gst.Buffer, video: GstVideo.VideoFrame): boolean;
        /**
         * @virtual
         */
        vfunc_setup(): boolean;
    }

    namespace Discoverer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Will be emitted in async mode when all information on a URI could be
             * discovered, or an error occurred.
             *
             * When an error occurs, `info` might still contain some partial information,
             * depending on the circumstances of the error.
             * @signal
             * @run-last
             */
            discovered: (arg0: DiscovererInfo, arg1: GLib.Error | null) => void;
            /**
             * Will be emitted in async mode when all pending URIs have been processed.
             * @signal
             * @run-last
             */
            finished: () => void;
            /**
             * Retrieves information about a URI from and external source of information,
             * like a cache file. This is used by the discoverer to speed up the
             * discovery.
             * @signal
             * @since 1.24
             * @run-last
             */
            'load-serialized-info': (arg0: string) => DiscovererInfo | null;
            /**
             * This signal is emitted after the source element has been created for, so
             * the URI being discovered, so it can be configured by setting additional
             * properties (e.g. set a proxy server for an http source, or set the device
             * and read speed for an audio cd source).
             *
             * This signal is usually emitted from the context of a GStreamer streaming
             * thread.
             * @signal
             * @run-last
             */
            'source-setup': (arg0: Gst.Element) => void;
            /**
             * Will be emitted when the discover starts analyzing the pending URIs
             * @signal
             * @run-last
             */
            starting: () => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::use-cache': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            timeout: number;
            use_cache: boolean;
            useCache: boolean;
        }
    }

    /**
     * The {@link GstPbutils.Discoverer} is a utility object which allows to get as much
     * information as possible from one or many URIs.
     *
     * It provides two APIs, allowing usage in blocking or non-blocking mode.
     *
     * The blocking mode just requires calling `gst_discoverer_discover_uri()`
     * with the URI one wishes to discover.
     *
     * The non-blocking mode requires a running {@link GLib.MainLoop} iterating a
     * {@link GLib.MainContext}, where one connects to the various signals, appends the
     * URIs to be processed (through `gst_discoverer_discover_uri_async()`) and then
     * asks for the discovery to begin (through `gst_discoverer_start()`).
     * By default this will use the GLib default main context unless you have
     * set a custom context using `g_main_context_push_thread_default()`.
     *
     * All the information is returned in a {@link GstPbutils.DiscovererInfo} structure.
     * @gir-type Class
     */
    class Discoverer extends GObject.Object {
        static $gtype: GObject.GType<Discoverer>;

        // Properties

        /**
         * The duration (in nanoseconds) after which the discovery of an individual
         * URI will timeout.
         *
         * If the discovery of a URI times out, the {@link GstPbutils.DiscovererResult.TIMEOUT} will be
         * set on the result flags.
         */
        get timeout(): number;
        set timeout(val: number);
        get use_cache(): boolean;
        set use_cache(val: boolean);
        get useCache(): boolean;
        set useCache(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Discoverer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Discoverer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](timeout: Gst.ClockTime): Discoverer;

        // Signals

        /** @signal */
        connect<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Discoverer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param info
         * @param err
         * @virtual
         */
        vfunc_discovered(info: DiscovererInfo, err: GLib.Error): void;
        /**
         * @virtual
         */
        vfunc_finished(): void;
        /**
         * Loads the serialized info from the given uri.
         * @param uri the uri to load the info from
         * @virtual
         */
        vfunc_load_serialize_info(uri: string): DiscovererInfo;
        /**
         * @param source
         * @virtual
         */
        vfunc_source_setup(source: Gst.Element): void;
        /**
         * @virtual
         */
        vfunc_starting(): void;

        // Methods

        /**
         * Synchronously discovers the given `uri`.
         *
         * A copy of `uri` will be made internally, so the caller can safely `g_free()`
         * afterwards.
         * @param uri The URI to run on.
         * @returns the result of the scanning. Can be `null` if an error occurred.
         */
        discover_uri(uri: string): DiscovererInfo;
        /**
         * Appends the given `uri` to the list of URIs to discoverer. The actual
         * discovery of the `uri` will only take place if `gst_discoverer_start()` has
         * been called.
         *
         * A copy of `uri` will be made internally, so the caller can safely `g_free()`
         * afterwards.
         * @param uri the URI to add.
         * @returns `true` if the `uri` was successfully appended to the list of pending uris, else `false`
         */
        discover_uri_async(uri: string): boolean;
        /**
         * Allow asynchronous discovering of URIs to take place.
         * A {@link GLib.MainLoop} must be available for {@link GstPbutils.Discoverer} to properly work in
         * asynchronous mode.
         */
        start(): void;
        /**
         * Stop the discovery of any pending URIs and clears the list of
         * pending URIS (if any).
         */
        stop(): void;
    }

    namespace DiscovererAudioInfo {
        // Signal signatures
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstPbutils.DiscovererStreamInfo} specific to audio streams.
     * @gir-type Class
     */
    class DiscovererAudioInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererAudioInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscovererAudioInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscovererAudioInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DiscovererAudioInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererAudioInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiscovererAudioInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererAudioInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiscovererAudioInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscovererAudioInfo.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the average or nominal bitrate of the stream in bits/second.
         */
        get_bitrate(): number;
        /**
         * @returns the channel-mask of the stream, refer to `gst_audio_channel_positions_from_mask()` for more information.
         */
        get_channel_mask(): number;
        /**
         * @returns the number of channels in the stream.
         */
        get_channels(): number;
        /**
         * @returns the number of bits used per sample in each channel.
         */
        get_depth(): number;
        /**
         * @returns the language of the stream, or NULL if unknown.
         */
        get_language(): string | null;
        /**
         * @returns the maximum bitrate of the stream in bits/second.
         */
        get_max_bitrate(): number;
        /**
         * @returns the sample rate of the stream in Hertz.
         */
        get_sample_rate(): number;
    }

    namespace DiscovererContainerInfo {
        // Signal signatures
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstPbutils.DiscovererStreamInfo} specific to container streams.
     * @gir-type Class
     */
    class DiscovererContainerInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererContainerInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscovererContainerInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscovererContainerInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DiscovererContainerInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererContainerInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiscovererContainerInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererContainerInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiscovererContainerInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscovererContainerInfo.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the list of {@link GstPbutils.DiscovererStreamInfo} this container stream offers. Free with `gst_discoverer_stream_info_list_free()` after usage.
         */
        get_streams(): DiscovererStreamInfo[];
        /**
         * @returns tags specific to the given container. If you wish to use the tags after the life-time of `info`, you will need to copy them.
         */
        get_tags(): Gst.TagList | null;
    }

    namespace DiscovererInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Structure containing the information of a URI analyzed by {@link GstPbutils.Discoverer}.
     * @gir-type Class
     */
    class DiscovererInfo extends GObject.Object {
        static $gtype: GObject.GType<DiscovererInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscovererInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscovererInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DiscovererInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiscovererInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiscovererInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscovererInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Parses a {@link GLib.Variant} as produced by `gst_discoverer_info_to_variant()`
         * back to a {@link GstPbutils.DiscovererInfo}.
         * @param variant A {@link GLib.Variant} to deserialize into a {@link GstPbutils.DiscovererInfo}.
         */
        static from_variant(variant: GLib.Variant): DiscovererInfo;

        // Methods

        /**
         * @returns A copy of the {@link GstPbutils.DiscovererInfo}
         */
        copy(): DiscovererInfo;
        /**
         * Finds all the {@link GstPbutils.DiscovererAudioInfo} contained in `info`
         * @returns A {@link GLib.List} of matching {@link GstPbutils.DiscovererStreamInfo}. The caller should free it with `gst_discoverer_stream_info_list_free()`.
         */
        get_audio_streams(): DiscovererAudioInfo[];
        /**
         * Finds all the {@link GstPbutils.DiscovererContainerInfo} contained in `info`
         * @returns A {@link GLib.List} of matching {@link GstPbutils.DiscovererStreamInfo}. The caller should free it with `gst_discoverer_stream_info_list_free()`.
         */
        get_container_streams(): DiscovererContainerInfo[];
        /**
         * @returns the duration of the URI in {@link Gst.ClockTime} (nanoseconds).
         */
        get_duration(): Gst.ClockTime;
        /**
         * @returns whether the URI is live.
         */
        get_live(): boolean;
        /**
         * @returns Miscellaneous information stored as a {@link Gst.Structure} (for example: information about missing plugins). If you wish to use the {@link Gst.Structure} after the life-time of `info`, you will need to copy it.
         */
        get_misc(): Gst.Structure | null;
        /**
         * Get the installer details for missing elements
         * @returns An array of strings containing information about how to install the various missing elements for `info` to be usable. If you wish to use the strings after the life-time of `info`, you will need to copy them.
         */
        get_missing_elements_installer_details(): string[];
        /**
         * @returns the result of the discovery as a {@link GstPbutils.DiscovererResult}.
         */
        get_result(): DiscovererResult;
        /**
         * @returns the whether the URI is seekable.
         */
        get_seekable(): boolean;
        /**
         * @returns the structure (or topology) of the URI as a {@link GstPbutils.DiscovererStreamInfo}. This structure can be traversed to see the original hierarchy. Unref with `gst_discoverer_stream_info_unref()` after usage.
         */
        get_stream_info(): DiscovererStreamInfo | null;
        /**
         * @returns the list of all streams contained in the #info. Free after usage with `gst_discoverer_stream_info_list_free()`.
         */
        get_stream_list(): DiscovererStreamInfo[];
        /**
         * Finds the {@link GstPbutils.DiscovererStreamInfo} contained in `info` that match the
         * given `streamtype`.
         * @param streamtype a {@link GObject.GType} derived from {@link GstPbutils.DiscovererStreamInfo}
         * @returns A {@link GLib.List} of matching {@link GstPbutils.DiscovererStreamInfo}. The caller should free it with `gst_discoverer_stream_info_list_free()`.
         */
        get_streams(streamtype: GObject.GType): DiscovererStreamInfo[];
        /**
         * Finds all the {@link GstPbutils.DiscovererSubtitleInfo} contained in `info`
         * @returns A {@link GLib.List} of matching {@link GstPbutils.DiscovererStreamInfo}. The caller should free it with `gst_discoverer_stream_info_list_free()`.
         */
        get_subtitle_streams(): DiscovererSubtitleInfo[];
        /**
         * @returns all tags contained in the URI. If you wish to use the tags after the life-time of `info`, you will need to copy them.
         */
        get_tags(): Gst.TagList | null;
        /**
         * @returns TOC contained in the URI. If you wish to use the TOC after the life-time of `info`, you will need to copy it.
         */
        get_toc(): Gst.Toc | null;
        /**
         * @returns the URI to which this information corresponds to. Copy it if you wish to use it after the life-time of `info`.
         */
        get_uri(): string;
        /**
         * Finds all the {@link GstPbutils.DiscovererVideoInfo} contained in `info`
         * @returns A {@link GLib.List} of matching {@link GstPbutils.DiscovererStreamInfo}. The caller should free it with `gst_discoverer_stream_info_list_free()`.
         */
        get_video_streams(): DiscovererVideoInfo[];
        /**
         * Serializes `info` to a {@link GLib.Variant} that can be parsed again
         * through `gst_discoverer_info_from_variant()`.
         *
         * Note that any {@link Gst.Toc} (s) that might have been discovered will not be serialized
         * for now.
         * @param flags A combination of {@link GstPbutils.DiscovererSerializeFlags} to specify what needs to be serialized.
         * @returns A newly-allocated {@link GLib.Variant} representing `info`.
         */
        to_variant(flags: DiscovererSerializeFlags | null): GLib.Variant;
    }

    namespace DiscovererStreamInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base structure for information concerning a media stream. Depending on the
     * stream type, one can find more media-specific information in
     * {@link GstPbutils.DiscovererAudioInfo}, {@link GstPbutils.DiscovererVideoInfo}, and
     * {@link GstPbutils.DiscovererContainerInfo}.
     *
     * The {@link GstPbutils.DiscovererStreamInfo} represents the topology of the stream. Siblings
     * can be iterated over with `gst_discoverer_stream_info_get_next()` and
     * `gst_discoverer_stream_info_get_previous()`. Children (sub-streams) of a
     * stream can be accessed using the {@link GstPbutils.DiscovererContainerInfo} API.
     *
     * As a simple example, if you run {@link GstPbutils.Discoverer} on an AVI file with one audio
     * and one video stream, you will get a {@link GstPbutils.DiscovererContainerInfo}
     * corresponding to the AVI container, which in turn will have a
     * {@link GstPbutils.DiscovererAudioInfo} sub-stream and a {@link GstPbutils.DiscovererVideoInfo} sub-stream
     * for the audio and video streams respectively.
     * @gir-type Class
     */
    class DiscovererStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<DiscovererStreamInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscovererStreamInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscovererStreamInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DiscovererStreamInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererStreamInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiscovererStreamInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererStreamInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiscovererStreamInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscovererStreamInfo.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Decrements the reference count of all contained {@link GstPbutils.DiscovererStreamInfo}
         * and fress the {@link GLib.List}.
         * @param infos a {@link GLib.List} of {@link GstPbutils.DiscovererStreamInfo}
         */
        static list_free(infos: DiscovererStreamInfo[]): void;

        // Methods

        /**
         * @returns the {@link Gst.Caps} of the stream. Unref with `gst_caps_unref` after usage.
         */
        get_caps(): Gst.Caps | null;
        /**
         * @returns additional information regarding the stream (for example codec version, profile, etc..). If you wish to use the {@link Gst.Structure} after the life-time of `info` you will need to copy it.
         */
        get_misc(): Gst.Structure | null;
        /**
         * @returns the next {@link GstPbutils.DiscovererStreamInfo} in a chain. `null` for final streams. Unref with `gst_discoverer_stream_info_unref` after usage.
         */
        get_next(): DiscovererStreamInfo | null;
        /**
         * @returns the previous {@link GstPbutils.DiscovererStreamInfo} in a chain. `null` for starting points. Unref with `gst_discoverer_stream_info_unref` after usage.
         */
        get_previous(): DiscovererStreamInfo | null;
        /**
         * @returns the stream ID of this stream. If you wish to use the stream ID after the life-time of `info` you will need to copy it.
         */
        get_stream_id(): string | null;
        /**
         * @returns the stream number, -1 if no index could be determined. This property acts as a unique identifier as a 'int' for the stream.
         */
        get_stream_number(): number;
        /**
         * @returns a human readable name for the stream type of the given `info` (ex : "audio", "container",...).
         */
        get_stream_type_nick(): string;
        /**
         * @returns the tags contained in this stream. If you wish to use the tags after the life-time of `info` you will need to copy them.
         */
        get_tags(): Gst.TagList | null;
        /**
         * @returns the TOC contained in this stream. If you wish to use the TOC after the life-time of `info` you will need to copy it.
         */
        get_toc(): Gst.Toc | null;
    }

    namespace DiscovererSubtitleInfo {
        // Signal signatures
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstPbutils.DiscovererStreamInfo} specific to subtitle streams (this includes text and
     * image based ones).
     * @gir-type Class
     */
    class DiscovererSubtitleInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererSubtitleInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscovererSubtitleInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscovererSubtitleInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DiscovererSubtitleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererSubtitleInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiscovererSubtitleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererSubtitleInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiscovererSubtitleInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscovererSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the language of the stream, or NULL if unknown.
         */
        get_language(): string | null;
    }

    namespace DiscovererVideoInfo {
        // Signal signatures
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstPbutils.DiscovererStreamInfo} specific to video streams (this includes images).
     * @gir-type Class
     */
    class DiscovererVideoInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererVideoInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscovererVideoInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscovererVideoInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DiscovererVideoInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererVideoInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiscovererVideoInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscovererVideoInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiscovererVideoInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscovererVideoInfo.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the average or nominal bitrate of the video stream in bits/second.
         */
        get_bitrate(): number;
        /**
         * @returns the depth in bits of the video stream.
         */
        get_depth(): number;
        /**
         * @returns the framerate of the video stream (denominator).
         */
        get_framerate_denom(): number;
        /**
         * @returns the framerate of the video stream (numerator).
         */
        get_framerate_num(): number;
        /**
         * @returns the height of the video stream in pixels.
         */
        get_height(): number;
        /**
         * @returns the maximum bitrate of the video stream in bits/second.
         */
        get_max_bitrate(): number;
        /**
         * @returns the Pixel Aspect Ratio (PAR) of the video stream (denominator).
         */
        get_par_denom(): number;
        /**
         * @returns the Pixel Aspect Ratio (PAR) of the video stream (numerator).
         */
        get_par_num(): number;
        /**
         * @returns the width of the video stream in pixels.
         */
        get_width(): number;
        /**
         * @returns `true` if the video stream corresponds to an image (i.e. only contains one frame).
         */
        is_image(): boolean;
        /**
         * @returns `true` if the stream is interlaced, else `false`.
         */
        is_interlaced(): boolean;
    }

    namespace EncodingAudioProfile {
        // Signal signatures
        interface SignalSignatures extends EncodingProfile.SignalSignatures {
            'notify::element-properties': (pspec: GObject.ParamSpec) => void;
            'notify::restriction-caps': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EncodingProfile.ConstructorProps {}
    }

    /**
     * Variant of {@link GstPbutils.EncodingProfile} for audio streams.
     * @gir-type Class
     */
    class EncodingAudioProfile extends EncodingProfile {
        static $gtype: GObject.GType<EncodingAudioProfile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodingAudioProfile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodingAudioProfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            format: Gst.Caps,
            preset: string | null,
            restriction: Gst.Caps | null,
            presence: number,
        ): EncodingAudioProfile;

        // Signals

        /** @signal */
        connect<K extends keyof EncodingAudioProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingAudioProfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodingAudioProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingAudioProfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodingAudioProfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodingAudioProfile.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace EncodingContainerProfile {
        // Signal signatures
        interface SignalSignatures extends EncodingProfile.SignalSignatures {
            'notify::element-properties': (pspec: GObject.ParamSpec) => void;
            'notify::restriction-caps': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EncodingProfile.ConstructorProps {}
    }

    /**
     * Encoding profiles for containers. Keeps track of a list of {@link GstPbutils.EncodingProfile}
     * @gir-type Class
     */
    class EncodingContainerProfile extends EncodingProfile {
        static $gtype: GObject.GType<EncodingContainerProfile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodingContainerProfile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodingContainerProfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            name: string | null,
            description: string | null,
            format: Gst.Caps,
            preset?: string | null,
        ): EncodingContainerProfile;

        // Signals

        /** @signal */
        connect<K extends keyof EncodingContainerProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingContainerProfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodingContainerProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingContainerProfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodingContainerProfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodingContainerProfile.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a {@link GstPbutils.EncodingProfile} to the list of profiles handled by `container`.
         *
         * No copy of `profile` will be made, if you wish to use it elsewhere after this
         * method you should increment its reference count.
         * @param profile the {@link GstPbutils.EncodingProfile} to add.
         * @returns `true` if the `stream` was properly added, else `false`.
         */
        add_profile(profile: EncodingProfile): boolean;
        /**
         * Checks if `container` contains a {@link GstPbutils.EncodingProfile} identical to
         * `profile`.
         * @param profile a {@link GstPbutils.EncodingProfile}
         * @returns `true` if `container` contains a {@link GstPbutils.EncodingProfile} identical to `profile`, else `false`.
         */
        contains_profile(profile: EncodingProfile): boolean;
        /**
         * @returns the list of contained {@link GstPbutils.EncodingProfile}.
         */
        get_profiles(): EncodingProfile[];
    }

    namespace EncodingProfile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::element-properties': (pspec: GObject.ParamSpec) => void;
            'notify::restriction-caps': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            element_properties: Gst.Structure;
            elementProperties: Gst.Structure;
            restriction_caps: Gst.Caps;
            restrictionCaps: Gst.Caps;
        }
    }

    /**
     * The opaque base class object for all encoding profiles. This contains generic
     * information like name, description, format and preset.
     * @gir-type Class
     */
    class EncodingProfile extends GObject.Object {
        static $gtype: GObject.GType<EncodingProfile>;

        // Properties

        /**
         * A {@link Gst.Structure} defining the properties to be set to the element
         * the profile represents.
         *
         * For example for `av1enc`:
         *
         * ```
         * element-properties,row-mt=true, end-usage=vbr
         * ```
         * @since 1.20
         */
        get element_properties(): Gst.Structure;
        set element_properties(val: Gst.Structure);
        /**
         * A {@link Gst.Structure} defining the properties to be set to the element
         * the profile represents.
         *
         * For example for `av1enc`:
         *
         * ```
         * element-properties,row-mt=true, end-usage=vbr
         * ```
         * @since 1.20
         */
        get elementProperties(): Gst.Structure;
        set elementProperties(val: Gst.Structure);
        get restriction_caps(): Gst.Caps;
        set restriction_caps(val: Gst.Caps);
        get restrictionCaps(): Gst.Caps;
        set restrictionCaps(val: Gst.Caps);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodingProfile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodingProfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EncodingProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingProfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodingProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingProfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodingProfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodingProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Find the {@link GstPbutils.EncodingProfile} with the specified name and category.
         * @param targetname The name of the target
         * @param profilename The name of the profile, if `null` provided, it will default to the encoding profile called `default`.
         * @param category The target category. Can be `null`
         */
        static find(targetname: string, profilename?: string | null, category?: string | null): EncodingProfile | null;
        /**
         * Creates a {@link GstPbutils.EncodingProfile} matching the formats from the given
         * {@link GstPbutils.DiscovererInfo}. Streams other than audio or video (eg,
         * subtitles), are currently ignored.
         * @param info The {@link GstPbutils.DiscovererInfo} to read from
         */
        static from_discoverer(info: DiscovererInfo): EncodingProfile | null;

        // Methods

        /**
         * Makes a deep copy of `self`
         * @returns The copy of `self`
         */
        copy(): EncodingProfile;
        /**
         * Get whether the format that has been negotiated in at some point can be renegotiated
         * later during the encoding.
         */
        get_allow_dynamic_output(): boolean;
        /**
         * @returns the description of the profile, can be `null`.
         */
        get_description(): string | null;
        /**
         * @returns The properties that are going to be set on the underlying element
         */
        get_element_properties(): Gst.Structure | null;
        /**
         * @returns a suitable file extension for `profile`, or NULL.
         */
        get_file_extension(): string | null;
        /**
         * @returns (nullable): the {@link Gst.Caps} corresponding to the media format used in the profile. Unref after usage.
         */
        get_format(): Gst.Caps;
        /**
         * Computes the full output caps that this `profile` will be able to consume.
         * @returns The full caps the given `profile` can consume. Call `gst_caps_unref()` when you are done with the caps.
         */
        get_input_caps(): Gst.Caps;
        /**
         * @returns the name of the profile, can be `null`.
         */
        get_name(): string | null;
        /**
         * @returns The number of times the profile is used in its parent container profile. If 0, it is not a mandatory stream.
         */
        get_presence(): number;
        /**
         * @returns the name of the {@link Gst.Preset} to be used in the profile. This is the name that has been set when saving the preset.
         */
        get_preset(): string | null;
        /**
         * @returns the name of the {@link Gst.Preset} factory to be used in the profile.
         */
        get_preset_name(): string | null;
        /**
         * @returns The restriction {@link Gst.Caps} to apply before the encoder that will be used in the profile. The fields present in restriction caps are properties of the raw stream (that is before encoding), such as height and width for video and depth and sampling rate for audio. Does not apply to {@link GstPbutils.EncodingContainerProfile} (since there is no corresponding raw stream). Can be `null`. Unref after usage.
         */
        get_restriction(): Gst.Caps | null;
        /**
         * @returns `TRUE` if the stream represented by `profile` should use a single segment before the encoder, `FALSE` otherwise. This means that buffers will be retimestamped and segments will be eat so as to appear as one segment.
         */
        get_single_segment(): boolean;
        /**
         * @returns the human-readable name of the type of `profile`.
         */
        get_type_nick(): string;
        is_enabled(): boolean;
        /**
         * Checks whether the two {@link GstPbutils.EncodingProfile} are equal
         * @param b a {@link GstPbutils.EncodingProfile}
         * @returns `true` if `a` and `b` are equal, else `false`.
         */
        is_equal(b: EncodingProfile): boolean;
        /**
         * Sets whether the format that has been negotiated in at some point can be renegotiated
         * later during the encoding.
         * @param allow_dynamic_output Whether the format that has been negotiated first can be renegotiated during the encoding
         */
        set_allow_dynamic_output(allow_dynamic_output: boolean): void;
        /**
         * Set `description` as the given description for the `profile`. A copy of
         * `description` will be made internally.
         * @param description the description to set on the profile
         */
        set_description(description?: string | null): void;
        /**
         * This allows setting the muxing/encoding element properties.
         *
         * **Set properties generically**
         *
         * ``` properties
         *  [element-properties, boolean-prop=true, string-prop="hi"]
         * ```
         *
         * **Mapping properties with well known element factories**
         *
         * ``` properties
         * element-properties-map, map = {
         *      [openh264enc, gop-size=32, ],
         *      [x264enc, key-int-max=32, tune=zerolatency],
         *  }
         * ```
         * @param element_properties A {@link Gst.Structure} defining the properties to be set to the element the profile represents.
         */
        set_element_properties(element_properties: Gst.Structure): void;
        /**
         * Set whether the profile should be used or not.
         * @param enabled `false` to disable `profile`, `true` to enable it
         */
        set_enabled(enabled: boolean): void;
        /**
         * Sets the media format used in the profile.
         * @param format the media format to use in the profile.
         */
        set_format(format: Gst.Caps): void;
        /**
         * Set `name` as the given name for the `profile`. A copy of `name` will be made
         * internally.
         * @param name the name to set on the profile
         */
        set_name(name?: string | null): void;
        /**
         * Set the number of time the profile is used in its parent
         * container profile. If 0, it is not a mandatory stream
         * @param presence the number of time the profile can be used
         */
        set_presence(presence: number): void;
        /**
         * Sets the name of the {@link Gst.Element} that implements the {@link Gst.Preset} interface
         * to use for the profile.
         * This is the name that has been set when saving the preset.
         * @param preset the element preset to use
         */
        set_preset(preset?: string | null): void;
        /**
         * Sets the name of the {@link Gst.Preset}'s factory to be used in the profile.
         * @param preset_name The name of the preset to use in this `profile`.
         */
        set_preset_name(preset_name?: string | null): void;
        /**
         * Set the restriction {@link Gst.Caps} to apply before the encoder
         * that will be used in the profile. See `gst_encoding_profile_get_restriction()`
         * for more about restrictions. Does not apply to {@link GstPbutils.EncodingContainerProfile}.
         * @param restriction the restriction to apply
         */
        set_restriction(restriction?: Gst.Caps | null): void;
        /**
         * If using a single segment, buffers will be retimestamped and segments will be
         * eat so as to appear as one segment.
         *
         * > *NOTE*: Single segment is not property supported when using
         * > #encodebin:avoid-reencoding
         * @param single_segment `TRUE` if the stream represented by `profile` should use a single segment before the encoder, `FALSE` otherwise.
         */
        set_single_segment(single_segment: boolean): void;
    }

    namespace EncodingTarget {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Collection of {@link GstPbutils.EncodingProfile} for a specific target or use-case.
     *
     * When being stored/loaded, targets come from a specific category, like
     * #GST_ENCODING_CATEGORY_DEVICE.
     * @gir-type Class
     */
    class EncodingTarget extends GObject.Object {
        static $gtype: GObject.GType<EncodingTarget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodingTarget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodingTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            name: string,
            category: string,
            description: string,
            profiles: EncodingProfile[],
        ): EncodingTarget;

        // Signals

        /** @signal */
        connect<K extends keyof EncodingTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingTarget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodingTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingTarget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodingTarget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodingTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Searches for the {@link GstPbutils.EncodingTarget} with the given name, loads it
         * and returns it.
         *
         * If the category name is specified only targets from that category will be
         * searched for.
         * @param name the name of the {@link GstPbutils.EncodingTarget} to load (automatically converted to lower case internally as capital letters are not valid for target names).
         * @param category the name of the target category, like #GST_ENCODING_CATEGORY_DEVICE. Can be `null`
         */
        static load(name: string, category?: string | null): EncodingTarget;
        /**
         * Opens the provided file and returns the contained {@link GstPbutils.EncodingTarget}.
         * @param filepath The file location to load the {@link GstPbutils.EncodingTarget} from
         */
        static load_from_file(filepath: string): EncodingTarget;

        // Methods

        /**
         * Adds the given `profile` to the `target`. Each added profile must have
         * a unique name within the profile.
         *
         * The `target` will steal a reference to the `profile`. If you wish to use
         * the profile after calling this method, you should increase its reference
         * count.
         * @param profile the {@link GstPbutils.EncodingProfile} to add
         * @returns `true` if the profile was added, else `false`.
         */
        add_profile(profile: EncodingProfile): boolean;
        /**
         * @returns The category of the `target`. For example: #GST_ENCODING_CATEGORY_DEVICE.
         */
        get_category(): string;
        /**
         * @returns The description of the `target`.
         */
        get_description(): string;
        /**
         * @returns The name of the `target`.
         */
        get_name(): string;
        /**
         * @returns The path to the `target` file.
         */
        get_path(): string | null;
        /**
         * @param name the name of the profile to retrieve
         * @returns The matching {@link GstPbutils.EncodingProfile}, or `null`.
         */
        get_profile(name: string): EncodingProfile | null;
        /**
         * @returns A list of {@link GstPbutils.EncodingProfile}(s) this `target` handles.
         */
        get_profiles(): EncodingProfile[];
        /**
         * Saves the `target` to a default user-local directory.
         * @returns `true` if the target was correctly saved, else `false`.
         */
        save(): boolean;
        /**
         * Saves the `target` to the provided file location.
         * @param filepath the location to store the `target` at.
         * @returns `true` if the target was correctly saved, else `false`.
         */
        save_to_file(filepath: string): boolean;
    }

    namespace EncodingVideoProfile {
        // Signal signatures
        interface SignalSignatures extends EncodingProfile.SignalSignatures {
            'notify::element-properties': (pspec: GObject.ParamSpec) => void;
            'notify::restriction-caps': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EncodingProfile.ConstructorProps {}
    }

    /**
     * Variant of {@link GstPbutils.EncodingProfile} for video streams, allows specifying the `pass`.
     * @gir-type Class
     */
    class EncodingVideoProfile extends EncodingProfile {
        static $gtype: GObject.GType<EncodingVideoProfile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodingVideoProfile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodingVideoProfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            format: Gst.Caps,
            preset: string | null,
            restriction: Gst.Caps | null,
            presence: number,
        ): EncodingVideoProfile;

        // Signals

        /** @signal */
        connect<K extends keyof EncodingVideoProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingVideoProfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodingVideoProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingVideoProfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodingVideoProfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodingVideoProfile.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the pass number if this is part of a multi-pass profile.
         * @returns The pass number. Starts at 1 for multi-pass. 0 if this is not a multi-pass profile
         */
        get_pass(): number;
        /**
         * > *NOTE*: Fixed framerate won't be enforced when #encodebin:avoid-reencoding
         * > is set.
         * @returns Whether non-constant video framerate is allowed for encoding.
         */
        get_variableframerate(): boolean;
        /**
         * Sets the pass number of this video profile. The first pass profile should have
         * this value set to 1. If this video profile isn't part of a multi-pass profile,
         * you may set it to 0 (the default value).
         * @param pass the pass number for this profile
         */
        set_pass(pass: number): void;
        /**
         * If set to `true`, then the incoming stream will be allowed to have non-constant
         * framerate. If set to `false` (default value), then the incoming stream will
         * be normalized by dropping/duplicating frames in order to produce a
         * constance framerate.
         * @param variableframerate a boolean
         */
        set_variableframerate(variableframerate: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type AudioVisualizerClass = typeof AudioVisualizer;
    /**
     * @gir-type Struct
     */
    abstract class AudioVisualizerPrivate {
        static $gtype: GObject.GType<AudioVisualizerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DiscovererClass = typeof Discoverer;
    /**
     * @gir-type Struct
     */
    abstract class DiscovererPrivate {
        static $gtype: GObject.GType<DiscovererPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EncodingAudioProfileClass = typeof EncodingAudioProfile;
    /**
     * @gir-type Alias
     */
    type EncodingContainerProfileClass = typeof EncodingContainerProfile;
    /**
     * @gir-type Alias
     */
    type EncodingProfileClass = typeof EncodingProfile;
    /**
     * @gir-type Alias
     */
    type EncodingVideoProfileClass = typeof EncodingVideoProfile;
    /**
     * Opaque context structure for the plugin installation. Use the provided
     * API to set details on it.
     * @gir-type Struct
     */
    class InstallPluginsContext {
        static $gtype: GObject.GType<InstallPluginsContext>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): InstallPluginsContext;

        // Methods

        /**
         * Copies a {@link GstPbutils.InstallPluginsContext}.
         * @returns A copy of `ctx`
         */
        copy(): InstallPluginsContext;
        /**
         * Frees a {@link GstPbutils.InstallPluginsContext}.
         */
        free(): void;
        /**
         * This function is used to tell the external installer process whether it
         * should ask for confirmation or not before searching for missing plugins.
         *
         * If set, this option will be passed to the installer via a
         * --interaction=[show-confirm-search|hide-confirm-search] command line option.
         * @param confirm_search whether to ask for confirmation before searching for plugins
         */
        set_confirm_search(confirm_search: boolean): void;
        /**
         * This function is used to pass the calling application's desktop file ID to
         * the external installer process.
         *
         * A desktop file ID is the basename of the desktop file, including the
         * .desktop extension.
         *
         * If set, the desktop file ID will be passed to the installer via a
         * --desktop-id= command line option.
         * @param desktop_id the desktop file ID of the calling application
         */
        set_desktop_id(desktop_id: string): void;
        /**
         * Sets the startup notification ID for the launched process.
         *
         * This is typically used to to pass the current X11 event timestamp to the
         * external installer process.
         *
         * Startup notification IDs are defined in the
         * [FreeDesktop.Org Startup Notifications standard](http://standards.freedesktop.org/startup-notification-spec/startup-notification-latest.txt).
         *
         * If set, the ID will be passed to the installer via a
         * --startup-notification-id= command line option.
         *
         * GTK+/GNOME applications should be able to create a startup notification ID
         * like this:
         *
         * ```
         *   timestamp = gtk_get_current_event_time ();
         *   startup_id = g_strdup_printf ("_TIME%u", timestamp);
         * ...
         * ```
         *
         * @param startup_id the startup notification ID
         */
        set_startup_notification_id(startup_id: string): void;
        /**
         * This function is for X11-based applications (such as most Gtk/Qt
         * applications on linux/unix) only. You can use it to tell the external
         * installer the XID of your main application window. That way the installer
         * can make its own window transient to your application window during the
         * installation.
         *
         * If set, the XID will be passed to the installer via a --transient-for=XID
         * command line option.
         *
         * Gtk+/Gnome application should be able to obtain the XID of the top-level
         * window like this:
         *
         * ```
         * ##include <gtk/gtk.h>
         * ##ifdef GDK_WINDOWING_X11
         * ##include <gdk/gdkx.h>
         * ##endif
         * ...
         * ##ifdef GDK_WINDOWING_X11
         *   xid = GDK_WINDOW_XWINDOW (GTK_WIDGET (application_window)->window);
         * ##endif
         * ...
         * ```
         *
         * @param xid the XWindow ID (XID) of the top-level application
         */
        set_xid(xid: number): void;
    }

    /**
     * @gir-type Alias
     */
    type DiscovererAudioInfoClass = GObject.ObjectClass;
    /**
     * @gir-type Alias
     */
    type DiscovererContainerInfoClass = GObject.ObjectClass;
    /**
     * @gir-type Alias
     */
    type DiscovererInfoClass = GObject.ObjectClass;
    /**
     * @gir-type Alias
     */
    type DiscovererStreamInfoClass = GObject.ObjectClass;
    /**
     * @gir-type Alias
     */
    type DiscovererSubtitleInfoClass = GObject.ObjectClass;
    /**
     * @gir-type Alias
     */
    type DiscovererVideoInfoClass = GObject.ObjectClass;
    /**
     * @gir-type Alias
     */
    type EncodingTargetClass = GObject.ObjectClass;
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

export default GstPbutils;

// END
