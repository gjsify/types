/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstpbutils-1.0-ambient.d.ts';
import './gstpbutils-1.0-import.d.ts';
/**
 * GstPbutils-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace GstPbutils {
    /**
     * Different types of supported background shading functions.
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
     * Result values for the discovery process.
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
     * Result codes returned by gst_install_plugins_async() and
     * gst_install_plugins_sync(), and also the result code passed to the
     * #GstInstallPluginsResultFunc specified with gst_install_plugins_async().
     *
     * These codes indicate success or failure of starting an external installer
     * program and to what extent the requested plugins could be installed.
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
         * returned by gst_install_plugins_async() to
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
     * #GstEncodingTarget category for recording and capture.
     * Targets within this category are optimized for low latency encoding.
     */
    const ENCODING_CATEGORY_CAPTURE: string;
    /**
     * #GstEncodingTarget category for device-specific targets.
     * The name of the target will usually be the constructor and model of the device,
     * and that target will contain #GstEncodingProfiles suitable for that device.
     */
    const ENCODING_CATEGORY_DEVICE: string;
    /**
     * #GstEncodingTarget category for file extensions.
     * The name of the target will be the name of the file extensions possible
     * for a particular target. Those targets are defining like 'default' formats
     * usually used for a particular file extension.
     */
    const ENCODING_CATEGORY_FILE_EXTENSION: string;
    /**
     * #GstEncodingTarget category for online-services.
     * The name of the target will usually be the name of the online service
     * and that target will contain #GstEncodingProfiles suitable for that online
     * service.
     */
    const ENCODING_CATEGORY_ONLINE_SERVICE: string;
    /**
     * #GstEncodingTarget category for storage, archiving and editing targets.
     * Those targets can be lossless and/or provide very fast random access content.
     * The name of the target will usually be the container type or editing target,
     * and that target will contain #GstEncodingProfiles suitable for editing or
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
     * `audio_config`. See gst_codec_utils_aac_get_level() and
     * gst_codec_utils_aac_get_profile() for more details on the parameters.
     * `caps` must be audio/mpeg caps with an "mpegversion" field of either 2 or 4.
     * If mpegversion is 4, the "base-profile" field is also set in `caps`.
     * @param caps the #GstCaps to which level and profile fields are to be added
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1. (See below for more details)
     * @returns %TRUE if the level and profile could be set, %FALSE otherwise.
     */
    function codec_utils_aac_caps_set_level_and_profile(caps: Gst.Caps, audio_config: Uint8Array): boolean;
    /**
     * Returns the channels of the given AAC stream.
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The channels or 0 if the channel could not be determined.
     */
    function codec_utils_aac_get_channels(audio_config: Uint8Array): number;
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
     * @returns The level as a const string and %NULL if the level could not be determined.
     */
    function codec_utils_aac_get_level(audio_config: Uint8Array): string | null;
    /**
     * Returns the profile of the given AAC stream as a string. The profile is
     * normally determined using the AudioObjectType field which is in the first
     * 5 bits of `audio_config`
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The profile as a const string and %NULL if the profile could not be determined.
     */
    function codec_utils_aac_get_profile(audio_config: Uint8Array): string | null;
    /**
     * Translates the sample rate index found in AAC headers to the actual sample
     * rate.
     * @param audio_config a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
     * @returns The sample rate if sr_idx is valid, 0 otherwise.
     */
    function codec_utils_aac_get_sample_rate(audio_config: Uint8Array): number;
    /**
     * Translates the sample rate index found in AAC headers to the actual sample
     * rate.
     * @param sr_idx Sample rate index as from the AudioSpecificConfig (MPEG-4          container) or ADTS frame header
     * @returns The sample rate if @sr_idx is valid, 0 otherwise.
     */
    function codec_utils_aac_get_sample_rate_from_index(sr_idx: number): number;
    /**
     * Converts a RFC 6381 compatible codec string to #GstCaps. More than one codec
     * string can be present (separated by `,`).
     *
     * Registered codecs can be found at http://mp4ra.org/#/codecs
     * @param codecs_field A mime codec string field
     * @returns The corresponding #GstCaps or %NULL
     */
    function codec_utils_caps_from_mime_codec(codecs_field: string): Gst.Caps | null;
    /**
     * Converts `caps` to a RFC 6381 compatible codec string if possible.
     *
     * Useful for providing the 'codecs' field inside the 'Content-Type' HTTP
     * header for containerized formats, such as mp4 or matroska.
     *
     * Registered codecs can be found at http://mp4ra.org/#/codecs
     * @param caps A #GstCaps to convert to mime codec
     * @returns a RFC 6381 compatible codec string or %NULL
     */
    function codec_utils_caps_get_mime_codec(caps: Gst.Caps): string | null;
    /**
     * Sets the level and profile in `caps` if it can be determined from `sps`. See
     * gst_codec_utils_h264_get_level() and gst_codec_utils_h264_get_profile()
     * for more details on the parameters.
     * @param caps the #GstCaps to which the level and profile are to be added
     * @param sps Pointer to the sequence parameter set for the stream.
     * @returns %TRUE if the level and profile could be set, %FALSE otherwise.
     */
    function codec_utils_h264_caps_set_level_and_profile(caps: Gst.Caps, sps: Uint8Array): boolean;
    /**
     * Converts the level indication (level_idc) in the stream's
     * sequence parameter set into a string. The SPS is expected to have the
     * same format as for gst_codec_utils_h264_get_profile().
     * @param sps Pointer to the sequence parameter set for the stream.
     * @returns The level as a const string, or %NULL if there is an error.
     */
    function codec_utils_h264_get_level(sps: Uint8Array): string | null;
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
     * @returns The profile as a const string, or %NULL if there is an error.
     */
    function codec_utils_h264_get_profile(sps: Uint8Array): string | null;
    /**
     * Parses profile, flags, and level from a H264 AVCC extradata/sequence_header.
     * These are most commonly retrieved from a video/x-h264 caps with a codec_data
     * buffer.
     *
     * The format of H264 AVCC extradata/sequence_header is documented in the
     * ITU-T H.264 specification section 7.3.2.1.1 as well as in ISO/IEC 14496-15
     * section 5.3.3.1.2.
     * @param codec_data H264 AVCC extradata
     * @returns %TRUE on success, %FALSE on failure
     */
    function codec_utils_h264_get_profile_flags_level(codec_data: Uint8Array): boolean;
    /**
     * Sets the level, tier and profile in `caps` if it can be determined from
     * `profile_tier_level`. See gst_codec_utils_h265_get_level(),
     * gst_codec_utils_h265_get_tier() and gst_codec_utils_h265_get_profile()
     * for more details on the parameters.
     * @param caps the #GstCaps to which the level, tier and profile are to be added
     * @param profile_tier_level Pointer to the profile_tier_level   struct
     * @returns %TRUE if the level, tier, profile could be set, %FALSE otherwise.
     */
    function codec_utils_h265_caps_set_level_tier_and_profile(caps: Gst.Caps, profile_tier_level: Uint8Array): boolean;
    /**
     * Converts the level indication (general_level_idc) in the stream's
     * profile_tier_level structure into a string. The profiel_tier_level is
     * expected to have the same format as for gst_codec_utils_h264_get_profile().
     * @param profile_tier_level Pointer to the profile_tier_level   for the stream
     * @returns The level as a const string, or %NULL if there is an error.
     */
    function codec_utils_h265_get_level(profile_tier_level: Uint8Array): string | null;
    /**
     * Transform a level string from the caps into the level_idc
     * @param level A level string from caps
     * @returns the level_idc or 0 if the level is unknown
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
     * @returns The profile as a const string, or %NULL if there is an error.
     */
    function codec_utils_h265_get_profile(profile_tier_level: Uint8Array): string | null;
    /**
     * Converts the tier indication (general_tier_flag) in the stream's
     * profile_tier_level structure into a string. The profile_tier_level
     * is expected to have the same format as for gst_codec_utils_h264_get_profile().
     * @param profile_tier_level Pointer to the profile_tier_level   for the stream.
     * @returns The tier as a const string, or %NULL if there is an error.
     */
    function codec_utils_h265_get_tier(profile_tier_level: Uint8Array): string | null;
    /**
     * Sets the level and profile in `caps` if it can be determined from
     * `vis_obj_seq`. See gst_codec_utils_mpeg4video_get_level() and
     * gst_codec_utils_mpeg4video_get_profile() for more details on the
     * parameters.
     * @param caps the #GstCaps to which the level and profile are to be added
     * @param vis_obj_seq Pointer to the visual object   sequence for the stream.
     * @returns %TRUE if the level and profile could be set, %FALSE otherwise.
     */
    function codec_utils_mpeg4video_caps_set_level_and_profile(caps: Gst.Caps, vis_obj_seq: Uint8Array): boolean;
    /**
     * Converts the level indication in the stream's visual object sequence into
     * a string. `vis_obj_seq` is expected to be the data following the visual
     * object sequence start code. Only the first byte
     * (profile_and_level_indication) is used.
     * @param vis_obj_seq Pointer to the visual object   sequence for the stream.
     * @returns The level as a const string, or NULL if there is an error.
     */
    function codec_utils_mpeg4video_get_level(vis_obj_seq: Uint8Array): string | null;
    /**
     * Converts the profile indication in the stream's visual object sequence into
     * a string. `vis_obj_seq` is expected to be the data following the visual
     * object sequence start code. Only the first byte
     * (profile_and_level_indication) is used.
     * @param vis_obj_seq Pointer to the visual object   sequence for the stream.
     * @returns The profile as a const string, or NULL if there is an error.
     */
    function codec_utils_mpeg4video_get_profile(vis_obj_seq: Uint8Array): string | null;
    /**
     * Creates Opus caps from the given parameters.
     * @param rate the sample rate
     * @param channels the number of channels
     * @param channel_mapping_family the channel mapping family
     * @param stream_count the number of independent streams
     * @param coupled_count the number of stereo streams
     * @param channel_mapping the mapping between the streams
     * @returns The #GstCaps, or %NULL if the parameters would lead to invalid Opus caps.
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
     * @returns The #GstCaps.
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
     * @returns The #GstBuffer containing the OpusHead.
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
     * @param caps the #GstCaps to parse the data from
     * @returns %TRUE if parsing was successful, %FALSE otherwise.
     */
    function codec_utils_opus_parse_caps(caps: Gst.Caps): boolean;
    /**
     * Parses the OpusHead header.
     * @param header the OpusHead #GstBuffer
     * @returns %TRUE if parsing was successful, %FALSE otherwise.
     */
    function codec_utils_opus_parse_header(header: Gst.Buffer): boolean;
    /**
     * List all available #GstEncodingTarget for the specified category, or all categories
     * if `categoryname` is %NULL.
     * @param categoryname The category, for ex: #GST_ENCODING_CATEGORY_DEVICE. Can be %NULL.
     * @returns The list of #GstEncodingTarget
     */
    function encoding_list_all_targets(categoryname?: string | null): EncodingTarget[];
    /**
     * Lists all #GstEncodingTarget categories present on disk.
     * @returns A list of #GstEncodingTarget categories.
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
     * calling gst_missing_plugin_message_get_installer_detail() on missing-plugin
     * messages that have been caught on a pipeline's bus or created by the
     * application via the provided API, such as gst_missing_element_message_new().
     *
     * It is possible to request the installation of multiple missing plugins in
     * one go (as might be required if there is a demuxer for a certain format
     * installed but no suitable video decoder and no suitable audio decoder).
     * @param details NULL-terminated array     of installer string details (see below)
     * @param ctx a #GstInstallPluginsContext, or NULL
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
     * @returns a descriptive string for the status code in @ret
     */
    function install_plugins_return_get_name(ret: InstallPluginsReturn): string;
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
     * gst_install_plugins_async() instead of this function.
     * @param details NULL-terminated array     of installer string details
     * @param ctx a #GstInstallPluginsContext, or NULL
     * @returns the result of the installation.
     */
    function install_plugins_sync(details: string[], ctx?: InstallPluginsContext | null): InstallPluginsReturn;
    /**
     * Checks whether `msg` is a missing plugins message.
     * @param msg a #GstMessage
     * @returns %TRUE if @msg is a missing-plugins message, otherwise %FALSE.
     */
    function is_missing_plugin_message(msg: Gst.Message): boolean;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * gst_install_plugins_async() or gst_install_plugins_sync().
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param decode_caps the (fixed) caps for which a decoder element is needed
     * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
     */
    function missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a decoder element for a particular set of (fixed) caps is missing.
     * This function is mainly for use in plugins.
     * @param element the #GstElement posting the message
     * @param decode_caps the (fixed) caps for which a decoder element is needed
     * @returns a new #GstMessage
     */
    function missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * gst_install_plugins_async() or gst_install_plugins_sync().
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param factory_name the name of the missing element (element factory),            e.g. "videoscale" or "cdparanoiasrc"
     * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
     */
    function missing_element_installer_detail_new(factory_name: string): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a certain required element is missing. This function is mainly for
     * use in plugins.
     * @param element the #GstElement posting the message
     * @param factory_name the name of the missing element (element factory),            e.g. "videoscale" or "cdparanoiasrc"
     * @returns a new #GstMessage
     */
    function missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * gst_install_plugins_async() or gst_install_plugins_sync().
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param encode_caps the (fixed) caps for which an encoder element is needed
     * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
     */
    function missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that an encoder element for a particular set of (fixed) caps is missing.
     * This function is mainly for use in plugins.
     * @param element the #GstElement posting the message
     * @param encode_caps the (fixed) caps for which an encoder element is needed
     * @returns a new #GstMessage
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
     * @param msg a missing-plugin #GstMessage of type #GST_MESSAGE_ELEMENT
     * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
     */
    function missing_plugin_message_get_description(msg: Gst.Message): string;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * gst_install_plugins_async() or gst_install_plugins_sync().
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions.
     * @param msg a missing-plugin #GstMessage of type #GST_MESSAGE_ELEMENT
     * @returns a newly-allocated detail string, or NULL on error. Free string          with g_free() when not needed any longer.
     */
    function missing_plugin_message_get_installer_detail(msg: Gst.Message): string | null;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * gst_install_plugins_async() or gst_install_plugins_sync().
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
     * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
     */
    function missing_uri_sink_installer_detail_new(protocol: string): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a sink element for a particular URI protocol is missing. This
     * function is mainly for use in plugins.
     * @param element the #GstElement posting the message
     * @param protocol the URI protocol the missing sink needs to implement,            e.g. "http" or "smb"
     * @returns a new #GstMessage
     */
    function missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message;
    /**
     * Returns an opaque string containing all the details about the missing
     * element to be passed to an external installer called via
     * gst_install_plugins_async() or gst_install_plugins_sync().
     *
     * This function is mainly for applications that call external plugin
     * installation mechanisms using one of the two above-mentioned functions in
     * the case where the application knows exactly what kind of plugin it is
     * missing.
     * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
     * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
     */
    function missing_uri_source_installer_detail_new(protocol: string): string;
    /**
     * Creates a missing-plugin message for `element` to notify the application
     * that a source element for a particular URI protocol is missing. This
     * function is mainly for use in plugins.
     * @param element the #GstElement posting the message
     * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
     * @returns a new #GstMessage
     */
    function missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message;
    /**
     * Adds a codec tag describing the format specified by `caps` to `taglist`.
     * @param taglist a #GstTagList
     * @param codec_tag a GStreamer codec tag such as #GST_TAG_AUDIO_CODEC,             #GST_TAG_VIDEO_CODEC or #GST_TAG_CODEC. If none is specified,             the function will attempt to detect the appropriate category.
     * @param caps the (fixed) #GstCaps for which a codec tag should be added.
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
     * @param caps the (fixed) #GstCaps for which flags are requested
     * @returns #GstPbUtilsCapsDescriptionFlags that describe @caps, or no flags          if the caps are unknown.
     */
    function pb_utils_get_caps_description_flags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags;
    /**
     * Returns a localised (as far as this is possible) string describing the
     * media format specified in `caps,` for use in error dialogs or other messages
     * to be seen by the user. Should never return NULL unless `caps` is invalid.
     *
     * Also see the convenience function
     * gst_pb_utils_add_codec_description_to_tag_list().
     * @param caps the (fixed) #GstCaps for which an format description is needed
     * @returns a newly-allocated description string, or NULL on error. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_codec_description(caps: Gst.Caps): string | null;
    /**
     * Returns a localised string describing an decoder for the format specified
     * in `caps,` for use in error dialogs or other messages to be seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use gst_missing_plugin_message_get_description() to get a description of
     * a missing feature from a missing-plugin message.
     * @param caps the (fixed) #GstCaps for which an decoder description is needed
     * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_decoder_description(caps: Gst.Caps): string;
    /**
     * Returns a localised string describing the given element, for use in
     * error dialogs or other messages to be seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use gst_missing_plugin_message_get_description() to get a description of
     * a missing feature from a missing-plugin message.
     * @param factory_name the name of the element, e.g. "giosrc"
     * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_element_description(factory_name: string): string;
    /**
     * Returns a localised string describing an encoder for the format specified
     * in `caps,` for use in error dialogs or other messages to be seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use gst_missing_plugin_message_get_description() to get a description of
     * a missing feature from a missing-plugin message.
     * @param caps the (fixed) #GstCaps for which an encoder description is needed
     * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_encoder_description(caps: Gst.Caps): string;
    /**
     * Returns a possible file extension for the given caps, if known.
     * @param caps the (fixed) #GstCaps for which a file extension is needed
     * @returns a newly-allocated file extension string, or NULL on error. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_file_extension_from_caps(caps: Gst.Caps): string | null;
    /**
     * Returns a localised string describing a sink element handling the protocol
     * specified in `protocol,` for use in error dialogs or other messages to be
     * seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use gst_missing_plugin_message_get_description() to get a description of
     * a missing feature from a missing-plugin message.
     * @param protocol the protocol the sink element needs to handle, e.g. "http"
     * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_sink_description(protocol: string): string;
    /**
     * Returns a localised string describing a source element handling the protocol
     * specified in `protocol,` for use in error dialogs or other messages to be
     * seen by the user.
     *
     * This function is mainly for internal use, applications would typically
     * use gst_missing_plugin_message_get_description() to get a description of
     * a missing feature from a missing-plugin message.
     * @param protocol the protocol the source element needs to handle, e.g. "http"
     * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
     */
    function pb_utils_get_source_description(protocol: string): string;
    /**
     * Initialises the base utils support library. This function is not
     * thread-safe. Applications should call it after calling gst_init(),
     * plugins should call it from their plugin_init function.
     *
     * This function may be called multiple times. It will do nothing if the
     * library has already been initialised.
     */
    function pb_utils_init(): void;
    /**
     * Gets the version number of the GStreamer Plugins Base libraries.
     */
    function plugins_base_version(): void;
    /**
     * This function returns a string that is useful for describing this version
     * of GStreamer's gst-plugins-base libraries to the outside world: user agent
     * strings, logging, about dialogs ...
     * @returns a newly allocated string describing this version of gst-plugins-base
     */
    function plugins_base_version_string(): string;
    interface AudioVisualizerShaderFunc {
        (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void;
    }
    interface InstallPluginsResultFunc {
        (result: InstallPluginsReturn): void;
    }
    /**
     * You can use these flags to control what is serialized by
     * gst_discoverer_info_to_variant()
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
     * Flags that are returned by gst_pb_utils_get_caps_description_flags() and
     * describe the format of the caps.
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
    module AudioVisualizer {
        // Constructor properties interface
    }

    /**
     * A baseclass for scopes (visualizers). It takes care of re-fitting the
     * audio-rate to video-rate and handles renegotiation (downstream video size
     * changes).
     *
     * It also provides several background shading effects. These effects are
     * applied to a previous picture before the `render()` implementation can draw a
     * new frame.
     */
    abstract class AudioVisualizer extends Gst.Element {
        // Own properties of GstPbutils-1.0.AudioVisualizer

        shade_amount: number;
        shadeAmount: number;
        shader: AudioVisualizerShader;

        // Own fields of GstPbutils-1.0.AudioVisualizer

        req_spf: number;
    }

    module Discoverer {
        // Signal callback interfaces

        interface Discovered {
            (info: DiscovererInfo, error?: GLib.Error | null): void;
        }

        interface Finished {
            (): void;
        }

        interface SourceSetup {
            (source: Gst.Element): void;
        }

        interface Starting {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #GstDiscoverer is a utility object which allows to get as much
     * information as possible from one or many URIs.
     *
     * It provides two APIs, allowing usage in blocking or non-blocking mode.
     *
     * The blocking mode just requires calling gst_discoverer_discover_uri()
     * with the URI one wishes to discover.
     *
     * The non-blocking mode requires a running #GMainLoop iterating a
     * #GMainContext, where one connects to the various signals, appends the
     * URIs to be processed (through gst_discoverer_discover_uri_async()) and then
     * asks for the discovery to begin (through gst_discoverer_start()).
     * By default this will use the GLib default main context unless you have
     * set a custom context using g_main_context_push_thread_default().
     *
     * All the information is returned in a #GstDiscovererInfo structure.
     */
    class Discoverer extends GObject.Object {
        // Own properties of GstPbutils-1.0.Discoverer

        /**
         * The duration (in nanoseconds) after which the discovery of an individual
         * URI will timeout.
         *
         * If the discovery of a URI times out, the %GST_DISCOVERER_TIMEOUT will be
         * set on the result flags.
         */
        timeout: number;
        use_cache: boolean;
        useCache: boolean;

        // Constructors of GstPbutils-1.0.Discoverer

        static ['new'](timeout: Gst.ClockTime): Discoverer;

        // Owm methods of GstPbutils-1.0.Discoverer

        /**
         * Synchronously discovers the given `uri`.
         *
         * A copy of `uri` will be made internally, so the caller can safely g_free()
         * afterwards.
         * @param uri The URI to run on.
         * @returns the result of the scanning. Can be %NULL if an error occurred.
         */
        discover_uri(uri: string): DiscovererInfo;
        /**
         * Appends the given `uri` to the list of URIs to discoverer. The actual
         * discovery of the `uri` will only take place if gst_discoverer_start() has
         * been called.
         *
         * A copy of `uri` will be made internally, so the caller can safely g_free()
         * afterwards.
         * @param uri the URI to add.
         * @returns %TRUE if the @uri was successfully appended to the list of pending uris, else %FALSE
         */
        discover_uri_async(uri: string): boolean;
        /**
         * Allow asynchronous discovering of URIs to take place.
         * A #GMainLoop must be available for #GstDiscoverer to properly work in
         * asynchronous mode.
         */
        start(): void;
        /**
         * Stop the discovery of any pending URIs and clears the list of
         * pending URIS (if any).
         */
        stop(): void;
    }

    module DiscovererAudioInfo {
        // Constructor properties interface
    }

    /**
     * #GstDiscovererStreamInfo specific to audio streams.
     */
    class DiscovererAudioInfo extends DiscovererStreamInfo {
        // Owm methods of GstPbutils-1.0.DiscovererAudioInfo

        get_bitrate(): number;
        get_channel_mask(): number;
        get_channels(): number;
        get_depth(): number;
        get_language(): string | null;
        get_max_bitrate(): number;
        get_sample_rate(): number;
    }

    module DiscovererContainerInfo {
        // Constructor properties interface
    }

    /**
     * #GstDiscovererStreamInfo specific to container streams.
     */
    class DiscovererContainerInfo extends DiscovererStreamInfo {
        // Owm methods of GstPbutils-1.0.DiscovererContainerInfo

        get_streams(): DiscovererStreamInfo[];
        get_tags(): Gst.TagList | null;
    }

    module DiscovererInfo {
        // Constructor properties interface
    }

    /**
     * Structure containing the information of a URI analyzed by #GstDiscoverer.
     */
    class DiscovererInfo extends GObject.Object {
        // Owm methods of GstPbutils-1.0.DiscovererInfo

        /**
         * Parses a #GVariant as produced by gst_discoverer_info_to_variant()
         * back to a #GstDiscovererInfo.
         * @param variant A #GVariant to deserialize into a #GstDiscovererInfo.
         */
        static from_variant(variant: GLib.Variant): DiscovererInfo;

        // Owm methods of GstPbutils-1.0.DiscovererInfo

        copy(): DiscovererInfo;
        /**
         * Finds all the #GstDiscovererAudioInfo contained in `info`
         * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
         */
        get_audio_streams(): DiscovererAudioInfo[];
        /**
         * Finds all the #GstDiscovererContainerInfo contained in `info`
         * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
         */
        get_container_streams(): DiscovererContainerInfo[];
        get_duration(): Gst.ClockTime;
        get_live(): boolean;
        get_misc(): Gst.Structure | null;
        /**
         * Get the installer details for missing elements
         * @returns An array of strings containing information about how to install the various missing elements for @info to be usable. If you wish to use the strings after the life-time of @info, you will need to copy them.
         */
        get_missing_elements_installer_details(): string[];
        get_result(): DiscovererResult;
        get_seekable(): boolean;
        get_stream_info(): DiscovererStreamInfo | null;
        get_stream_list(): DiscovererStreamInfo[];
        /**
         * Finds the #GstDiscovererStreamInfo contained in `info` that match the
         * given `streamtype`.
         * @param streamtype a #GType derived from #GstDiscovererStreamInfo
         * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
         */
        get_streams(streamtype: GObject.GType): DiscovererStreamInfo[];
        /**
         * Finds all the #GstDiscovererSubtitleInfo contained in `info`
         * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
         */
        get_subtitle_streams(): DiscovererSubtitleInfo[];
        get_tags(): Gst.TagList | null;
        get_toc(): Gst.Toc | null;
        get_uri(): string;
        /**
         * Finds all the #GstDiscovererVideoInfo contained in `info`
         * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
         */
        get_video_streams(): DiscovererVideoInfo[];
        /**
         * Serializes `info` to a #GVariant that can be parsed again
         * through gst_discoverer_info_from_variant().
         *
         * Note that any #GstToc (s) that might have been discovered will not be serialized
         * for now.
         * @param flags A combination of #GstDiscovererSerializeFlags to specify what needs to be serialized.
         * @returns A newly-allocated #GVariant representing @info.
         */
        to_variant(flags: DiscovererSerializeFlags): GLib.Variant;
    }

    module DiscovererStreamInfo {
        // Constructor properties interface
    }

    /**
     * Base structure for information concerning a media stream. Depending on the
     * stream type, one can find more media-specific information in
     * #GstDiscovererAudioInfo, #GstDiscovererVideoInfo, and
     * #GstDiscovererContainerInfo.
     *
     * The #GstDiscovererStreamInfo represents the topology of the stream. Siblings
     * can be iterated over with gst_discoverer_stream_info_get_next() and
     * gst_discoverer_stream_info_get_previous(). Children (sub-streams) of a
     * stream can be accessed using the #GstDiscovererContainerInfo API.
     *
     * As a simple example, if you run #GstDiscoverer on an AVI file with one audio
     * and one video stream, you will get a #GstDiscovererContainerInfo
     * corresponding to the AVI container, which in turn will have a
     * #GstDiscovererAudioInfo sub-stream and a #GstDiscovererVideoInfo sub-stream
     * for the audio and video streams respectively.
     */
    class DiscovererStreamInfo extends GObject.Object {
        // Owm methods of GstPbutils-1.0.DiscovererStreamInfo

        /**
         * Decrements the reference count of all contained #GstDiscovererStreamInfo
         * and fress the #GList.
         * @param infos a #GList of #GstDiscovererStreamInfo
         */
        static list_free(infos: DiscovererStreamInfo[]): void;

        // Owm methods of GstPbutils-1.0.DiscovererStreamInfo

        get_caps(): Gst.Caps | null;
        get_misc(): Gst.Structure | null;
        get_next(): DiscovererStreamInfo | null;
        get_previous(): DiscovererStreamInfo | null;
        get_stream_id(): string;
        get_stream_number(): number;
        get_stream_type_nick(): string;
        get_tags(): Gst.TagList | null;
        get_toc(): Gst.Toc | null;
    }

    module DiscovererSubtitleInfo {
        // Constructor properties interface
    }

    /**
     * #GstDiscovererStreamInfo specific to subtitle streams (this includes text and
     * image based ones).
     */
    class DiscovererSubtitleInfo extends DiscovererStreamInfo {
        // Owm methods of GstPbutils-1.0.DiscovererSubtitleInfo

        get_language(): string | null;
    }

    module DiscovererVideoInfo {
        // Constructor properties interface
    }

    /**
     * #GstDiscovererStreamInfo specific to video streams (this includes images).
     */
    class DiscovererVideoInfo extends DiscovererStreamInfo {
        // Owm methods of GstPbutils-1.0.DiscovererVideoInfo

        get_bitrate(): number;
        get_depth(): number;
        get_framerate_denom(): number;
        get_framerate_num(): number;
        get_height(): number;
        get_max_bitrate(): number;
        get_par_denom(): number;
        get_par_num(): number;
        get_width(): number;
        is_image(): boolean;
        is_interlaced(): boolean;
    }

    module EncodingAudioProfile {
        // Constructor properties interface
    }

    /**
     * Variant of #GstEncodingProfile for audio streams.
     */
    class EncodingAudioProfile extends EncodingProfile {
        // Constructors of GstPbutils-1.0.EncodingAudioProfile

        static ['new'](
            format: Gst.Caps,
            preset: string | null,
            restriction: Gst.Caps | null,
            presence: number,
        ): EncodingAudioProfile;
    }

    module EncodingContainerProfile {
        // Constructor properties interface
    }

    /**
     * Encoding profiles for containers. Keeps track of a list of #GstEncodingProfile
     */
    class EncodingContainerProfile extends EncodingProfile {
        // Constructors of GstPbutils-1.0.EncodingContainerProfile

        static ['new'](
            name: string | null,
            description: string | null,
            format: Gst.Caps,
            preset?: string | null,
        ): EncodingContainerProfile;

        // Owm methods of GstPbutils-1.0.EncodingContainerProfile

        /**
         * Add a #GstEncodingProfile to the list of profiles handled by `container`.
         *
         * No copy of `profile` will be made, if you wish to use it elsewhere after this
         * method you should increment its reference count.
         * @param profile the #GstEncodingProfile to add.
         * @returns %TRUE if the @stream was properly added, else %FALSE.
         */
        add_profile(profile: EncodingProfile): boolean;
        /**
         * Checks if `container` contains a #GstEncodingProfile identical to
         * `profile`.
         * @param profile a #GstEncodingProfile
         * @returns %TRUE if @container contains a #GstEncodingProfile identical to @profile, else %FALSE.
         */
        contains_profile(profile: EncodingProfile): boolean;
        get_profiles(): EncodingProfile[];
    }

    module EncodingProfile {
        // Constructor properties interface
    }

    /**
     * The opaque base class object for all encoding profiles. This contains generic
     * information like name, description, format and preset.
     */
    class EncodingProfile extends GObject.Object {
        // Own properties of GstPbutils-1.0.EncodingProfile

        /**
         * A #GstStructure defining the properties to be set to the element
         * the profile represents.
         *
         * For example for `av1enc`:
         *
         * ```
         * element-properties,row-mt=true, end-usage=vbr
         * ```
         */
        element_properties: Gst.Structure;
        /**
         * A #GstStructure defining the properties to be set to the element
         * the profile represents.
         *
         * For example for `av1enc`:
         *
         * ```
         * element-properties,row-mt=true, end-usage=vbr
         * ```
         */
        elementProperties: Gst.Structure;
        restriction_caps: Gst.Caps;
        restrictionCaps: Gst.Caps;

        // Owm methods of GstPbutils-1.0.EncodingProfile

        /**
         * Find the #GstEncodingProfile with the specified name and category.
         * @param targetname The name of the target
         * @param profilename The name of the profile, if %NULL provided, it will default to the encoding profile called `default`.
         * @param category The target category. Can be %NULL
         */
        static find(targetname: string, profilename?: string | null, category?: string | null): EncodingProfile | null;
        /**
         * Creates a #GstEncodingProfile matching the formats from the given
         * #GstDiscovererInfo. Streams other than audio or video (eg,
         * subtitles), are currently ignored.
         * @param info The #GstDiscovererInfo to read from
         */
        static from_discoverer(info: DiscovererInfo): EncodingProfile | null;

        // Owm methods of GstPbutils-1.0.EncodingProfile

        /**
         * Makes a deep copy of `self`
         * @returns The copy of @self
         */
        copy(): EncodingProfile;
        /**
         * Get whether the format that has been negotiated in at some point can be renegotiated
         * later during the encoding.
         */
        get_allow_dynamic_output(): boolean;
        get_description(): string | null;
        get_element_properties(): Gst.Structure | null;
        get_file_extension(): string | null;
        get_format(): Gst.Caps;
        /**
         * Computes the full output caps that this `profile` will be able to consume.
         * @returns The full caps the given @profile can consume. Call gst_caps_unref() when you are done with the caps.
         */
        get_input_caps(): Gst.Caps;
        get_name(): string | null;
        get_presence(): number;
        get_preset(): string | null;
        get_preset_name(): string | null;
        get_restriction(): Gst.Caps | null;
        get_single_segment(): boolean;
        get_type_nick(): string;
        is_enabled(): boolean;
        /**
         * Checks whether the two #GstEncodingProfile are equal
         * @param b a #GstEncodingProfile
         * @returns %TRUE if @a and @b are equal, else %FALSE.
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
         * @param element_properties A #GstStructure defining the properties to be set to the element the profile represents.
         */
        set_element_properties(element_properties: Gst.Structure): void;
        /**
         * Set whether the profile should be used or not.
         * @param enabled %FALSE to disable @profile, %TRUE to enable it
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
         * Sets the name of the #GstElement that implements the #GstPreset interface
         * to use for the profile.
         * This is the name that has been set when saving the preset.
         * @param preset the element preset to use
         */
        set_preset(preset?: string | null): void;
        /**
         * Sets the name of the #GstPreset's factory to be used in the profile.
         * @param preset_name The name of the preset to use in this @profile.
         */
        set_preset_name(preset_name?: string | null): void;
        /**
         * Set the restriction #GstCaps to apply before the encoder
         * that will be used in the profile. See gst_encoding_profile_get_restriction()
         * for more about restrictions. Does not apply to #GstEncodingContainerProfile.
         * @param restriction the restriction to apply
         */
        set_restriction(restriction?: Gst.Caps | null): void;
        /**
         * If using a single segment, buffers will be retimestamped and segments will be
         * eat so as to appear as one segment.
         *
         * &gt; *NOTE*: Single segment is not property supported when using
         * &gt; #encodebin:avoid-reencoding
         * @param single_segment #TRUE if the stream represented by @profile should use a single segment before the encoder, #FALSE otherwise.
         */
        set_single_segment(single_segment: boolean): void;
    }

    module EncodingTarget {
        // Constructor properties interface
    }

    /**
     * Collection of #GstEncodingProfile for a specific target or use-case.
     *
     * When being stored/loaded, targets come from a specific category, like
     * #GST_ENCODING_CATEGORY_DEVICE.
     */
    class EncodingTarget extends GObject.Object {
        // Constructors of GstPbutils-1.0.EncodingTarget

        static ['new'](
            name: string,
            category: string,
            description: string,
            profiles: EncodingProfile[],
        ): EncodingTarget;

        // Owm methods of GstPbutils-1.0.EncodingTarget

        /**
         * Searches for the #GstEncodingTarget with the given name, loads it
         * and returns it.
         *
         * If the category name is specified only targets from that category will be
         * searched for.
         * @param name the name of the #GstEncodingTarget to load (automatically converted to lower case internally as capital letters are not valid for target names).
         * @param category the name of the target category, like #GST_ENCODING_CATEGORY_DEVICE. Can be %NULL
         */
        static load(name: string, category?: string | null): EncodingTarget;
        /**
         * Opens the provided file and returns the contained #GstEncodingTarget.
         * @param filepath The file location to load the #GstEncodingTarget from
         */
        static load_from_file(filepath: string): EncodingTarget;

        // Owm methods of GstPbutils-1.0.EncodingTarget

        /**
         * Adds the given `profile` to the `target`. Each added profile must have
         * a unique name within the profile.
         *
         * The `target` will steal a reference to the `profile`. If you wish to use
         * the profile after calling this method, you should increase its reference
         * count.
         * @param profile the #GstEncodingProfile to add
         * @returns %TRUE if the profile was added, else %FALSE.
         */
        add_profile(profile: EncodingProfile): boolean;
        get_category(): string;
        get_description(): string;
        get_name(): string;
        get_path(): string | null;
        get_profile(name: string): EncodingProfile | null;
        get_profiles(): EncodingProfile[];
        /**
         * Saves the `target` to a default user-local directory.
         * @returns %TRUE if the target was correctly saved, else %FALSE.
         */
        save(): boolean;
        /**
         * Saves the `target` to the provided file location.
         * @param filepath the location to store the @target at.
         * @returns %TRUE if the target was correctly saved, else %FALSE.
         */
        save_to_file(filepath: string): boolean;
    }

    module EncodingVideoProfile {
        // Constructor properties interface
    }

    /**
     * Variant of #GstEncodingProfile for video streams, allows specifying the `pass`.
     */
    class EncodingVideoProfile extends EncodingProfile {
        // Constructors of GstPbutils-1.0.EncodingVideoProfile

        static ['new'](
            format: Gst.Caps,
            preset: string | null,
            restriction: Gst.Caps | null,
            presence: number,
        ): EncodingVideoProfile;

        // Owm methods of GstPbutils-1.0.EncodingVideoProfile

        /**
         * Get the pass number if this is part of a multi-pass profile.
         * @returns The pass number. Starts at 1 for multi-pass. 0 if this is not a multi-pass profile
         */
        get_pass(): number;
        /**
         * &gt; *NOTE*: Fixed framerate won't be enforced when #encodebin:avoid-reencoding
         * &gt; is set.
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
         * If set to %TRUE, then the incoming stream will be allowed to have non-constant
         * framerate. If set to %FALSE (default value), then the incoming stream will
         * be normalized by dropping/duplicating frames in order to produce a
         * constance framerate.
         * @param variableframerate a boolean
         */
        set_variableframerate(variableframerate: boolean): void;
    }

    class AudioVisualizerClass {}

    class AudioVisualizerPrivate {}

    class DiscovererClass {}

    class DiscovererPrivate {}

    class EncodingAudioProfileClass {}

    class EncodingContainerProfileClass {}

    class EncodingProfileClass {}

    class EncodingVideoProfileClass {}

    /**
     * Opaque context structure for the plugin installation. Use the provided
     * API to set details on it.
     */
    class InstallPluginsContext {
        // Constructors of GstPbutils-1.0.InstallPluginsContext

        constructor(properties?: Partial<{}>);

        static ['new'](): InstallPluginsContext;

        // Owm methods of GstPbutils-1.0.InstallPluginsContext

        /**
         * Copies a #GstInstallPluginsContext.
         * @returns A copy of @ctx
         */
        copy(): InstallPluginsContext;
        /**
         * Frees a #GstInstallPluginsContext.
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
         * ##include &lt;gtk/gtk.h&gt;
         * ##ifdef GDK_WINDOWING_X11
         * ##include &lt;gdk/gdkx.h&gt;
         * ##endif
         * ...
         * ##ifdef GDK_WINDOWING_X11
         *   xid = GDK_WINDOW_XWINDOW (GTK_WIDGET (application_window)-&gt;window);
         * ##endif
         * ...
         * ```
         *
         * @param xid the XWindow ID (XID) of the top-level application
         */
        set_xid(xid: number): void;
    }

    type DiscovererAudioInfoClass = GObject.ObjectClass;
    type DiscovererContainerInfoClass = GObject.ObjectClass;
    type DiscovererInfoClass = GObject.ObjectClass;
    type DiscovererStreamInfoClass = GObject.ObjectClass;
    type DiscovererSubtitleInfoClass = GObject.ObjectClass;
    type DiscovererVideoInfoClass = GObject.ObjectClass;
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
