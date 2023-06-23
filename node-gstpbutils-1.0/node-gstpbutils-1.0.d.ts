
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstpbutils-1.0-import.d.ts';
    
/**
 * GstPbutils-1.0
 */

import type GstVideo from '@girs/node-gstvideo-1.0';
import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GstAudio from '@girs/node-gstaudio-1.0';

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
 * You can use these flags to control what is serialized by
 * gst_discoverer_info_to_variant()
 * @bitfield 
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
 * @bitfield 
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
/**
 * #GstEncodingTarget category for recording and capture.
 * Targets within this category are optimized for low latency encoding.
 */
const ENCODING_CATEGORY_CAPTURE: string | null
/**
 * #GstEncodingTarget category for device-specific targets.
 * The name of the target will usually be the constructor and model of the device,
 * and that target will contain #GstEncodingProfiles suitable for that device.
 */
const ENCODING_CATEGORY_DEVICE: string | null
/**
 * #GstEncodingTarget category for file extensions.
 * The name of the target will be the name of the file extensions possible
 * for a particular target. Those targets are defining like 'default' formats
 * usually used for a particular file extension.
 */
const ENCODING_CATEGORY_FILE_EXTENSION: string | null
/**
 * #GstEncodingTarget category for online-services.
 * The name of the target will usually be the name of the online service
 * and that target will contain #GstEncodingProfiles suitable for that online
 * service.
 */
const ENCODING_CATEGORY_ONLINE_SERVICE: string | null
/**
 * #GstEncodingTarget category for storage, archiving and editing targets.
 * Those targets can be lossless and/or provide very fast random access content.
 * The name of the target will usually be the container type or editing target,
 * and that target will contain #GstEncodingProfiles suitable for editing or
 * storage.
 */
const ENCODING_CATEGORY_STORAGE_EDITING: string | null
/**
 * The major version of GStreamer's gst-plugins-base libraries at compile time.
 */
const PLUGINS_BASE_VERSION_MAJOR: number
/**
 * The micro version of GStreamer's gst-plugins-base libraries at compile time.
 */
const PLUGINS_BASE_VERSION_MICRO: number
/**
 * The minor version of GStreamer's gst-plugins-base libraries at compile time.
 */
const PLUGINS_BASE_VERSION_MINOR: number
/**
 * The nano version of GStreamer's gst-plugins-base libraries at compile time.
 * Actual releases have 0, GIT versions have 1, prerelease versions have 2-...
 */
const PLUGINS_BASE_VERSION_NANO: number
/**
 * Sets the level and profile on `caps` if it can be determined from
 * `audio_config`. See gst_codec_utils_aac_get_level() and
 * gst_codec_utils_aac_get_profile() for more details on the parameters.
 * `caps` must be audio/mpeg caps with an "mpegversion" field of either 2 or 4.
 * If mpegversion is 4, the "base-profile" field is also set in `caps`.
 * @param caps the #GstCaps to which level and profile fields are to be added
 * @param audioConfig a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1. (See below for more details)
 * @returns %TRUE if the level and profile could be set, %FALSE otherwise.
 */
function codecUtilsAacCapsSetLevelAndProfile(caps: Gst.Caps, audioConfig: Uint8Array): boolean
/**
 * Returns the channels of the given AAC stream.
 * @param audioConfig a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
 * @returns The channels or 0 if the channel could not be determined.
 */
function codecUtilsAacGetChannels(audioConfig: Uint8Array): number
/**
 * Translates the sample rate to the index corresponding to it in AAC spec.
 * @param rate Sample rate
 * @returns The AAC index for this sample rate, -1 if the rate is not a valid AAC sample rate.
 */
function codecUtilsAacGetIndexFromSampleRate(rate: number): number
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
 * @param audioConfig a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
 * @returns The level as a const string and %NULL if the level could not be determined.
 */
function codecUtilsAacGetLevel(audioConfig: Uint8Array): string | null
/**
 * Returns the profile of the given AAC stream as a string. The profile is
 * normally determined using the AudioObjectType field which is in the first
 * 5 bits of `audio_config`
 * @param audioConfig a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
 * @returns The profile as a const string and %NULL if the profile could not be determined.
 */
function codecUtilsAacGetProfile(audioConfig: Uint8Array): string | null
/**
 * Translates the sample rate index found in AAC headers to the actual sample
 * rate.
 * @param audioConfig a pointer to the AudioSpecificConfig                as specified in the Elementary Stream Descriptor (esds)                in ISO/IEC 14496-1.
 * @returns The sample rate if sr_idx is valid, 0 otherwise.
 */
function codecUtilsAacGetSampleRate(audioConfig: Uint8Array): number
/**
 * Translates the sample rate index found in AAC headers to the actual sample
 * rate.
 * @param srIdx Sample rate index as from the AudioSpecificConfig (MPEG-4          container) or ADTS frame header
 * @returns The sample rate if @sr_idx is valid, 0 otherwise.
 */
function codecUtilsAacGetSampleRateFromIndex(srIdx: number): number
/**
 * Converts a RFC 6381 compatible codec string to #GstCaps. More than one codec
 * string can be present (separated by `,`).
 * 
 * Registered codecs can be found at http://mp4ra.org/#/codecs
 * @param codecsField A mime codec string field
 * @returns The corresponding #GstCaps or %NULL
 */
function codecUtilsCapsFromMimeCodec(codecsField: string | null): Gst.Caps | null
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
function codecUtilsCapsGetMimeCodec(caps: Gst.Caps): string | null
/**
 * Sets the level and profile in `caps` if it can be determined from `sps`. See
 * gst_codec_utils_h264_get_level() and gst_codec_utils_h264_get_profile()
 * for more details on the parameters.
 * @param caps the #GstCaps to which the level and profile are to be added
 * @param sps Pointer to the sequence parameter set for the stream.
 * @returns %TRUE if the level and profile could be set, %FALSE otherwise.
 */
function codecUtilsH264CapsSetLevelAndProfile(caps: Gst.Caps, sps: Uint8Array): boolean
/**
 * Converts the level indication (level_idc) in the stream's
 * sequence parameter set into a string. The SPS is expected to have the
 * same format as for gst_codec_utils_h264_get_profile().
 * @param sps Pointer to the sequence parameter set for the stream.
 * @returns The level as a const string, or %NULL if there is an error.
 */
function codecUtilsH264GetLevel(sps: Uint8Array): string | null
/**
 * Transform a level string from the caps into the level_idc
 * @param level A level string from caps
 * @returns the level_idc or 0 if the level is unknown
 */
function codecUtilsH264GetLevelIdc(level: string | null): number
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
function codecUtilsH264GetProfile(sps: Uint8Array): string | null
/**
 * Parses profile, flags, and level from a H264 AVCC extradata/sequence_header.
 * These are most commonly retrieved from a video/x-h264 caps with a codec_data
 * buffer.
 * 
 * The format of H264 AVCC extradata/sequence_header is documented in the
 * ITU-T H.264 specification section 7.3.2.1.1 as well as in ISO/IEC 14496-15
 * section 5.3.3.1.2.
 * @param codecData H264 AVCC extradata
 * @returns %TRUE on success, %FALSE on failure
 */
function codecUtilsH264GetProfileFlagsLevel(codecData: Uint8Array): [ /* returnType */ boolean, /* profile */ number, /* flags */ number, /* level */ number ]
/**
 * Sets the level, tier and profile in `caps` if it can be determined from
 * `profile_tier_level`. See gst_codec_utils_h265_get_level(),
 * gst_codec_utils_h265_get_tier() and gst_codec_utils_h265_get_profile()
 * for more details on the parameters.
 * @param caps the #GstCaps to which the level, tier and profile are to be added
 * @param profileTierLevel Pointer to the profile_tier_level   struct
 * @returns %TRUE if the level, tier, profile could be set, %FALSE otherwise.
 */
function codecUtilsH265CapsSetLevelTierAndProfile(caps: Gst.Caps, profileTierLevel: Uint8Array): boolean
/**
 * Converts the level indication (general_level_idc) in the stream's
 * profile_tier_level structure into a string. The profiel_tier_level is
 * expected to have the same format as for gst_codec_utils_h264_get_profile().
 * @param profileTierLevel Pointer to the profile_tier_level   for the stream
 * @returns The level as a const string, or %NULL if there is an error.
 */
function codecUtilsH265GetLevel(profileTierLevel: Uint8Array): string | null
/**
 * Transform a level string from the caps into the level_idc
 * @param level A level string from caps
 * @returns the level_idc or 0 if the level is unknown
 */
function codecUtilsH265GetLevelIdc(level: string | null): number
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
 * @param profileTierLevel Pointer to the profile_tier_level   structure for the stream.
 * @returns The profile as a const string, or %NULL if there is an error.
 */
function codecUtilsH265GetProfile(profileTierLevel: Uint8Array): string | null
/**
 * Converts the tier indication (general_tier_flag) in the stream's
 * profile_tier_level structure into a string. The profile_tier_level
 * is expected to have the same format as for gst_codec_utils_h264_get_profile().
 * @param profileTierLevel Pointer to the profile_tier_level   for the stream.
 * @returns The tier as a const string, or %NULL if there is an error.
 */
function codecUtilsH265GetTier(profileTierLevel: Uint8Array): string | null
/**
 * Sets the level and profile in `caps` if it can be determined from
 * `vis_obj_seq`. See gst_codec_utils_mpeg4video_get_level() and
 * gst_codec_utils_mpeg4video_get_profile() for more details on the
 * parameters.
 * @param caps the #GstCaps to which the level and profile are to be added
 * @param visObjSeq Pointer to the visual object   sequence for the stream.
 * @returns %TRUE if the level and profile could be set, %FALSE otherwise.
 */
function codecUtilsMpeg4videoCapsSetLevelAndProfile(caps: Gst.Caps, visObjSeq: Uint8Array): boolean
/**
 * Converts the level indication in the stream's visual object sequence into
 * a string. `vis_obj_seq` is expected to be the data following the visual
 * object sequence start code. Only the first byte
 * (profile_and_level_indication) is used.
 * @param visObjSeq Pointer to the visual object   sequence for the stream.
 * @returns The level as a const string, or NULL if there is an error.
 */
function codecUtilsMpeg4videoGetLevel(visObjSeq: Uint8Array): string | null
/**
 * Converts the profile indication in the stream's visual object sequence into
 * a string. `vis_obj_seq` is expected to be the data following the visual
 * object sequence start code. Only the first byte
 * (profile_and_level_indication) is used.
 * @param visObjSeq Pointer to the visual object   sequence for the stream.
 * @returns The profile as a const string, or NULL if there is an error.
 */
function codecUtilsMpeg4videoGetProfile(visObjSeq: Uint8Array): string | null
/**
 * Creates Opus caps from the given parameters.
 * @param rate the sample rate
 * @param channels the number of channels
 * @param channelMappingFamily the channel mapping family
 * @param streamCount the number of independent streams
 * @param coupledCount the number of stereo streams
 * @param channelMapping the mapping between the streams
 * @returns The #GstCaps, or %NULL if the parameters would lead to invalid Opus caps.
 */
function codecUtilsOpusCreateCaps(rate: number, channels: number, channelMappingFamily: number, streamCount: number, coupledCount: number, channelMapping: Uint8Array | null): Gst.Caps | null
/**
 * Creates Opus caps from the given OpusHead `header` and comment header
 * `comments`.
 * @param header OpusHead header
 * @param comments Comment header or NULL
 * @returns The #GstCaps.
 */
function codecUtilsOpusCreateCapsFromHeader(header: Gst.Buffer, comments: Gst.Buffer | null): Gst.Caps | null
/**
 * Creates OpusHead header from the given parameters.
 * @param rate the sample rate
 * @param channels the number of channels
 * @param channelMappingFamily the channel mapping family
 * @param streamCount the number of independent streams
 * @param coupledCount the number of stereo streams
 * @param channelMapping the mapping between the streams
 * @param preSkip Pre-skip in 48kHz samples or 0
 * @param outputGain Output gain or 0
 * @returns The #GstBuffer containing the OpusHead.
 */
function codecUtilsOpusCreateHeader(rate: number, channels: number, channelMappingFamily: number, streamCount: number, coupledCount: number, channelMapping: Uint8Array | null, preSkip: number, outputGain: number): Gst.Buffer | null
/**
 * Parses Opus caps and fills the different fields with defaults if possible.
 * @param caps the #GstCaps to parse the data from
 * @returns %TRUE if parsing was successful, %FALSE otherwise.
 */
function codecUtilsOpusParseCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* rate */ number, /* channels */ number, /* channelMappingFamily */ number, /* streamCount */ number, /* coupledCount */ number, /* channelMapping */ Uint8Array ]
/**
 * Parses the OpusHead header.
 * @param header the OpusHead #GstBuffer
 * @returns %TRUE if parsing was successful, %FALSE otherwise.
 */
function codecUtilsOpusParseHeader(header: Gst.Buffer): [ /* returnType */ boolean, /* rate */ number, /* channels */ number, /* channelMappingFamily */ number, /* streamCount */ number, /* coupledCount */ number, /* channelMapping */ Uint8Array, /* preSkip */ number, /* outputGain */ number ]
/**
 * List all available #GstEncodingTarget for the specified category, or all categories
 * if `categoryname` is %NULL.
 * @param categoryname The category, for ex: #GST_ENCODING_CATEGORY_DEVICE. Can be %NULL.
 * @returns The list of #GstEncodingTarget
 */
function encodingListAllTargets(categoryname: string | null): EncodingTarget[]
/**
 * Lists all #GstEncodingTarget categories present on disk.
 * @returns A list of #GstEncodingTarget categories.
 */
function encodingListAvailableCategories(): string[]
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
function installPluginsAsync(details: string[], ctx: InstallPluginsContext | null, func: InstallPluginsResultFunc): InstallPluginsReturn
/**
 * Checks whether plugin installation (initiated by this application only)
 * is currently in progress.
 * @returns TRUE if plugin installation is in progress, otherwise FALSE
 */
function installPluginsInstallationInProgress(): boolean
/**
 * Convenience function to return the descriptive string associated
 * with a status code.  This function returns English strings and
 * should not be used for user messages. It is here only to assist
 * in debugging.
 * @param ret the return status code
 * @returns a descriptive string for the status code in @ret
 */
function installPluginsReturnGetName(ret: InstallPluginsReturn): string | null
/**
 * Checks whether plugin installation is likely to be supported by the
 * current environment. This currently only checks whether the helper script
 * that is to be provided by the distribution or operating system vendor
 * exists.
 * @returns TRUE if plugin installation is likely to be supported.
 */
function installPluginsSupported(): boolean
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
function installPluginsSync(details: string[], ctx: InstallPluginsContext | null): InstallPluginsReturn
/**
 * Checks whether `msg` is a missing plugins message.
 * @param msg a #GstMessage
 * @returns %TRUE if @msg is a missing-plugins message, otherwise %FALSE.
 */
function isMissingPluginMessage(msg: Gst.Message): boolean
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * 
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 * @param decodeCaps the (fixed) caps for which a decoder element is needed
 * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
 */
function missingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string | null
/**
 * Creates a missing-plugin message for `element` to notify the application
 * that a decoder element for a particular set of (fixed) caps is missing.
 * This function is mainly for use in plugins.
 * @param element the #GstElement posting the message
 * @param decodeCaps the (fixed) caps for which a decoder element is needed
 * @returns a new #GstMessage
 */
function missingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * 
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 * @param factoryName the name of the missing element (element factory),            e.g. "videoscale" or "cdparanoiasrc"
 * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
 */
function missingElementInstallerDetailNew(factoryName: string | null): string | null
/**
 * Creates a missing-plugin message for `element` to notify the application
 * that a certain required element is missing. This function is mainly for
 * use in plugins.
 * @param element the #GstElement posting the message
 * @param factoryName the name of the missing element (element factory),            e.g. "videoscale" or "cdparanoiasrc"
 * @returns a new #GstMessage
 */
function missingElementMessageNew(element: Gst.Element, factoryName: string | null): Gst.Message
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * 
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 * @param encodeCaps the (fixed) caps for which an encoder element is needed
 * @returns a newly-allocated detail string. Free string          with g_free() when not needed any longer.
 */
function missingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string | null
/**
 * Creates a missing-plugin message for `element` to notify the application
 * that an encoder element for a particular set of (fixed) caps is missing.
 * This function is mainly for use in plugins.
 * @param element the #GstElement posting the message
 * @param encodeCaps the (fixed) caps for which an encoder element is needed
 * @returns a new #GstMessage
 */
function missingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
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
function missingPluginMessageGetDescription(msg: Gst.Message): string | null
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
function missingPluginMessageGetInstallerDetail(msg: Gst.Message): string | null
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
function missingUriSinkInstallerDetailNew(protocol: string | null): string | null
/**
 * Creates a missing-plugin message for `element` to notify the application
 * that a sink element for a particular URI protocol is missing. This
 * function is mainly for use in plugins.
 * @param element the #GstElement posting the message
 * @param protocol the URI protocol the missing sink needs to implement,            e.g. "http" or "smb"
 * @returns a new #GstMessage
 */
function missingUriSinkMessageNew(element: Gst.Element, protocol: string | null): Gst.Message
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
function missingUriSourceInstallerDetailNew(protocol: string | null): string | null
/**
 * Creates a missing-plugin message for `element` to notify the application
 * that a source element for a particular URI protocol is missing. This
 * function is mainly for use in plugins.
 * @param element the #GstElement posting the message
 * @param protocol the URI protocol the missing source needs to implement,            e.g. "http" or "mms"
 * @returns a new #GstMessage
 */
function missingUriSourceMessageNew(element: Gst.Element, protocol: string | null): Gst.Message
/**
 * Adds a codec tag describing the format specified by `caps` to `taglist`.
 * @param taglist a #GstTagList
 * @param codecTag a GStreamer codec tag such as #GST_TAG_AUDIO_CODEC,             #GST_TAG_VIDEO_CODEC or #GST_TAG_CODEC. If none is specified,             the function will attempt to detect the appropriate category.
 * @param caps the (fixed) #GstCaps for which a codec tag should be added.
 * @returns TRUE if a codec tag was added, FALSE otherwise.
 */
function pbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string | null, caps: Gst.Caps): boolean
/**
 * Returns flags that describe the format of the caps if known. No flags are
 * set for unknown caps.
 * @param caps the (fixed) #GstCaps for which flags are requested
 * @returns #GstPbUtilsCapsDescriptionFlags that describe @caps, or no flags          if the caps are unknown.
 */
function pbUtilsGetCapsDescriptionFlags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags
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
function pbUtilsGetCodecDescription(caps: Gst.Caps): string | null
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
function pbUtilsGetDecoderDescription(caps: Gst.Caps): string | null
/**
 * Returns a localised string describing the given element, for use in
 * error dialogs or other messages to be seen by the user.
 * 
 * This function is mainly for internal use, applications would typically
 * use gst_missing_plugin_message_get_description() to get a description of
 * a missing feature from a missing-plugin message.
 * @param factoryName the name of the element, e.g. "giosrc"
 * @returns a newly-allocated description string. Free          string with g_free() when not needed any longer.
 */
function pbUtilsGetElementDescription(factoryName: string | null): string | null
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
function pbUtilsGetEncoderDescription(caps: Gst.Caps): string | null
/**
 * Returns a possible file extension for the given caps, if known.
 * @param caps the (fixed) #GstCaps for which a file extension is needed
 * @returns a newly-allocated file extension string, or NULL on error. Free          string with g_free() when not needed any longer.
 */
function pbUtilsGetFileExtensionFromCaps(caps: Gst.Caps): string | null
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
function pbUtilsGetSinkDescription(protocol: string | null): string | null
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
function pbUtilsGetSourceDescription(protocol: string | null): string | null
/**
 * Initialises the base utils support library. This function is not
 * thread-safe. Applications should call it after calling gst_init(),
 * plugins should call it from their plugin_init function.
 * 
 * This function may be called multiple times. It will do nothing if the
 * library has already been initialised.
 */
function pbUtilsInit(): void
/**
 * Gets the version number of the GStreamer Plugins Base libraries.
 */
function pluginsBaseVersion(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
/**
 * This function returns a string that is useful for describing this version
 * of GStreamer's gst-plugins-base libraries to the outside world: user agent
 * strings, logging, about dialogs ...
 * @returns a newly allocated string describing this version of gst-plugins-base
 */
function pluginsBaseVersionString(): string | null
interface AudioVisualizerShaderFunc {
    (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void
}
/**
 * The prototype of the callback function that will be called once the
 * external plugin installer program has returned. You only need to provide
 * a callback function if you are using the asynchronous interface.
 * @callback 
 * @param result whether the installation of the requested plugins succeeded or not
 */
interface InstallPluginsResultFunc {
    (result: InstallPluginsReturn): void
}
module AudioVisualizer {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstPbutils-1.0.GstPbutils.AudioVisualizer

        shadeAmount?: number | null
        shader?: AudioVisualizerShader | null
    }

}

interface AudioVisualizer {

    // Own properties of GstPbutils-1.0.GstPbutils.AudioVisualizer

    shadeAmount: number
    shader: AudioVisualizerShader
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstPbutils-1.0.GstPbutils.AudioVisualizer

    parent: Gst.Element & Gst.Object
    reqSpf: number
    vinfo: GstVideo.VideoInfo
    ainfo: GstAudio.AudioInfo

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstPbutils-1.0.GstPbutils.AudioVisualizer

    decideAllocation(query: Gst.Query): boolean
    render(audio: Gst.Buffer, video: GstVideo.VideoFrame): boolean
    setup(): boolean

    // Class property signals of GstPbutils-1.0.GstPbutils.AudioVisualizer

    connect(sigName: "notify::shade-amount", callback: (...args: any[]) => void): number
    on(sigName: "notify::shade-amount", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shade-amount", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shade-amount", ...args: any[]): void
    connect(sigName: "notify::shader", callback: (...args: any[]) => void): number
    on(sigName: "notify::shader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shader", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A baseclass for scopes (visualizers). It takes care of re-fitting the
 * audio-rate to video-rate and handles renegotiation (downstream video size
 * changes).
 * 
 * It also provides several background shading effects. These effects are
 * applied to a previous picture before the `render()` implementation can draw a
 * new frame.
 * @class 
 */
class AudioVisualizer extends Gst.Element {

    // Own properties of GstPbutils-1.0.GstPbutils.AudioVisualizer

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.AudioVisualizer

    constructor(config?: AudioVisualizer.ConstructorProperties) 
    _init(config?: AudioVisualizer.ConstructorProperties): void
}

module Discoverer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `discovered`
     */
    interface DiscoveredSignalCallback {
        (info: DiscovererInfo, error: GLib.Error | null): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `load-serialized-info`
     */
    interface LoadSerializedInfoSignalCallback {
        (uri: string | null): DiscovererInfo | null
    }

    /**
     * Signal callback interface for `source-setup`
     */
    interface SourceSetupSignalCallback {
        (source: Gst.Element): void
    }

    /**
     * Signal callback interface for `starting`
     */
    interface StartingSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPbutils-1.0.GstPbutils.Discoverer

        /**
         * The duration (in nanoseconds) after which the discovery of an individual
         * URI will timeout.
         * 
         * If the discovery of a URI times out, the %GST_DISCOVERER_TIMEOUT will be
         * set on the result flags.
         */
        timeout?: number | null
        useCache?: boolean | null
    }

}

interface Discoverer {

    // Own properties of GstPbutils-1.0.GstPbutils.Discoverer

    /**
     * The duration (in nanoseconds) after which the discovery of an individual
     * URI will timeout.
     * 
     * If the discovery of a URI times out, the %GST_DISCOVERER_TIMEOUT will be
     * set on the result flags.
     */
    timeout: number
    useCache: boolean
    __gtype__: number

    // Own fields of GstPbutils-1.0.GstPbutils.Discoverer

    parent: GObject.Object

    // Owm methods of GstPbutils-1.0.GstPbutils.Discoverer

    /**
     * Synchronously discovers the given `uri`.
     * 
     * A copy of `uri` will be made internally, so the caller can safely g_free()
     * afterwards.
     * @param uri The URI to run on.
     * @returns the result of the scanning. Can be %NULL if an error occurred.
     */
    discoverUri(uri: string | null): DiscovererInfo
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
    discoverUriAsync(uri: string | null): boolean
    /**
     * Allow asynchronous discovering of URIs to take place.
     * A #GMainLoop must be available for #GstDiscoverer to properly work in
     * asynchronous mode.
     */
    start(): void
    /**
     * Stop the discovery of any pending URIs and clears the list of
     * pending URIS (if any).
     */
    stop(): void

    // Own virtual methods of GstPbutils-1.0.GstPbutils.Discoverer

    discovered(info: DiscovererInfo, err: GLib.Error): void
    finished(): void
    /**
     * Loads the serialized info from the given uri.
     * @virtual 
     * @param uri the uri to load the info from
     * @returns the #GstDiscovererInfo or %NULL if it could not be loaded
     */
    loadSerializeInfo(uri: string | null): DiscovererInfo
    sourceSetup(source: Gst.Element): void
    starting(): void

    // Own signals of GstPbutils-1.0.GstPbutils.Discoverer

    connect(sigName: "discovered", callback: Discoverer.DiscoveredSignalCallback): number
    on(sigName: "discovered", callback: Discoverer.DiscoveredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "discovered", callback: Discoverer.DiscoveredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "discovered", callback: Discoverer.DiscoveredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "discovered", error: GLib.Error | null, ...args: any[]): void
    connect(sigName: "finished", callback: Discoverer.FinishedSignalCallback): number
    on(sigName: "finished", callback: Discoverer.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Discoverer.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Discoverer.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "load-serialized-info", callback: Discoverer.LoadSerializedInfoSignalCallback): number
    on(sigName: "load-serialized-info", callback: Discoverer.LoadSerializedInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-serialized-info", callback: Discoverer.LoadSerializedInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-serialized-info", callback: Discoverer.LoadSerializedInfoSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-serialized-info", ...args: any[]): void
    connect(sigName: "source-setup", callback: Discoverer.SourceSetupSignalCallback): number
    on(sigName: "source-setup", callback: Discoverer.SourceSetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-setup", callback: Discoverer.SourceSetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-setup", callback: Discoverer.SourceSetupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-setup", ...args: any[]): void
    connect(sigName: "starting", callback: Discoverer.StartingSignalCallback): number
    on(sigName: "starting", callback: Discoverer.StartingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting", callback: Discoverer.StartingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting", callback: Discoverer.StartingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "starting", ...args: any[]): void

    // Class property signals of GstPbutils-1.0.GstPbutils.Discoverer

    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::use-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-cache", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class Discoverer extends GObject.Object {

    // Own properties of GstPbutils-1.0.GstPbutils.Discoverer

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.Discoverer

    constructor(config?: Discoverer.ConstructorProperties) 
    /**
     * Creates a new #GstDiscoverer with the provided timeout.
     * @constructor 
     * @param timeout timeout per file, in nanoseconds. Allowed are values between     one second (#GST_SECOND) and one hour (3600 * #GST_SECOND)
     * @returns The new #GstDiscoverer. If an error occurred when creating the discoverer, @err will be set accordingly and %NULL will be returned. If @err is set, the caller must free it when no longer needed using g_error_free().
     */
    constructor(timeout: Gst.ClockTime) 
    /**
     * Creates a new #GstDiscoverer with the provided timeout.
     * @constructor 
     * @param timeout timeout per file, in nanoseconds. Allowed are values between     one second (#GST_SECOND) and one hour (3600 * #GST_SECOND)
     * @returns The new #GstDiscoverer. If an error occurred when creating the discoverer, @err will be set accordingly and %NULL will be returned. If @err is set, the caller must free it when no longer needed using g_error_free().
     */
    static new(timeout: Gst.ClockTime): Discoverer
    _init(config?: Discoverer.ConstructorProperties): void
}

module DiscovererAudioInfo {

    // Constructor properties interface

    interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
    }

}

interface DiscovererAudioInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo

    getBitrate(): number
    getChannelMask(): number
    getChannels(): number
    getDepth(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number

    // Class property signals of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDiscovererStreamInfo specific to audio streams.
 * @class 
 */
class DiscovererAudioInfo extends DiscovererStreamInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo

    constructor(config?: DiscovererAudioInfo.ConstructorProperties) 
    _init(config?: DiscovererAudioInfo.ConstructorProperties): void
}

module DiscovererContainerInfo {

    // Constructor properties interface

    interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
    }

}

interface DiscovererContainerInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo

    getStreams(): DiscovererStreamInfo[]
    getTags(): Gst.TagList | null

    // Class property signals of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDiscovererStreamInfo specific to container streams.
 * @class 
 */
class DiscovererContainerInfo extends DiscovererStreamInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo

    constructor(config?: DiscovererContainerInfo.ConstructorProperties) 
    _init(config?: DiscovererContainerInfo.ConstructorProperties): void
}

module DiscovererInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DiscovererInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererInfo

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.DiscovererInfo

    copy(): DiscovererInfo
    /**
     * Finds all the #GstDiscovererAudioInfo contained in `info`
     * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
     */
    getAudioStreams(): DiscovererAudioInfo[]
    /**
     * Finds all the #GstDiscovererContainerInfo contained in `info`
     * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
     */
    getContainerStreams(): DiscovererContainerInfo[]
    getDuration(): Gst.ClockTime
    getLive(): boolean
    getMisc(): Gst.Structure | null
    /**
     * Get the installer details for missing elements
     * @returns An array of strings containing information about how to install the various missing elements for @info to be usable. If you wish to use the strings after the life-time of @info, you will need to copy them.
     */
    getMissingElementsInstallerDetails(): string[]
    getResult(): DiscovererResult
    getSeekable(): boolean
    getStreamInfo(): DiscovererStreamInfo | null
    getStreamList(): DiscovererStreamInfo[]
    /**
     * Finds the #GstDiscovererStreamInfo contained in `info` that match the
     * given `streamtype`.
     * @param streamtype a #GType derived from #GstDiscovererStreamInfo
     * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
     */
    getStreams(streamtype: GObject.GType): DiscovererStreamInfo[]
    /**
     * Finds all the #GstDiscovererSubtitleInfo contained in `info`
     * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
     */
    getSubtitleStreams(): DiscovererSubtitleInfo[]
    getTags(): Gst.TagList | null
    getToc(): Gst.Toc | null
    getUri(): string | null
    /**
     * Finds all the #GstDiscovererVideoInfo contained in `info`
     * @returns A #GList of matching #GstDiscovererStreamInfo. The caller should free it with gst_discoverer_stream_info_list_free().
     */
    getVideoStreams(): DiscovererVideoInfo[]
    /**
     * Serializes `info` to a #GVariant that can be parsed again
     * through gst_discoverer_info_from_variant().
     * 
     * Note that any #GstToc (s) that might have been discovered will not be serialized
     * for now.
     * @param flags A combination of #GstDiscovererSerializeFlags to specify what needs to be serialized.
     * @returns A newly-allocated #GVariant representing @info.
     */
    toVariant(flags: DiscovererSerializeFlags): GLib.Variant

    // Class property signals of GstPbutils-1.0.GstPbutils.DiscovererInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Structure containing the information of a URI analyzed by #GstDiscoverer.
 * @class 
 */
class DiscovererInfo extends GObject.Object {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererInfo

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.DiscovererInfo

    constructor(config?: DiscovererInfo.ConstructorProperties) 
    _init(config?: DiscovererInfo.ConstructorProperties): void
    /**
     * Parses a #GVariant as produced by gst_discoverer_info_to_variant()
     * back to a #GstDiscovererInfo.
     * @param variant A #GVariant to deserialize into a #GstDiscovererInfo.
     * @returns A newly-allocated #GstDiscovererInfo.
     */
    static fromVariant(variant: GLib.Variant): DiscovererInfo
}

module DiscovererStreamInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DiscovererStreamInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo

    getCaps(): Gst.Caps | null
    getMisc(): Gst.Structure | null
    getNext(): DiscovererStreamInfo | null
    getPrevious(): DiscovererStreamInfo | null
    getStreamId(): string | null
    getStreamNumber(): number
    getStreamTypeNick(): string | null
    getTags(): Gst.TagList | null
    getToc(): Gst.Toc | null

    // Class property signals of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class DiscovererStreamInfo extends GObject.Object {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo

    constructor(config?: DiscovererStreamInfo.ConstructorProperties) 
    _init(config?: DiscovererStreamInfo.ConstructorProperties): void
    /**
     * Decrements the reference count of all contained #GstDiscovererStreamInfo
     * and fress the #GList.
     * @param infos a #GList of #GstDiscovererStreamInfo
     */
    static listFree(infos: DiscovererStreamInfo[]): void
}

module DiscovererSubtitleInfo {

    // Constructor properties interface

    interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
    }

}

interface DiscovererSubtitleInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo

    getLanguage(): string | null

    // Class property signals of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDiscovererStreamInfo specific to subtitle streams (this includes text and
 * image based ones).
 * @class 
 */
class DiscovererSubtitleInfo extends DiscovererStreamInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo

    constructor(config?: DiscovererSubtitleInfo.ConstructorProperties) 
    _init(config?: DiscovererSubtitleInfo.ConstructorProperties): void
}

module DiscovererVideoInfo {

    // Constructor properties interface

    interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
    }

}

interface DiscovererVideoInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo

    getBitrate(): number
    getDepth(): number
    getFramerateDenom(): number
    getFramerateNum(): number
    getHeight(): number
    getMaxBitrate(): number
    getParDenom(): number
    getParNum(): number
    getWidth(): number
    isImage(): boolean
    isInterlaced(): boolean

    // Class property signals of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDiscovererStreamInfo specific to video streams (this includes images).
 * @class 
 */
class DiscovererVideoInfo extends DiscovererStreamInfo {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo

    constructor(config?: DiscovererVideoInfo.ConstructorProperties) 
    _init(config?: DiscovererVideoInfo.ConstructorProperties): void
}

module EncodingAudioProfile {

    // Constructor properties interface

    interface ConstructorProperties extends EncodingProfile.ConstructorProperties {
    }

}

interface EncodingAudioProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingAudioProfile

    __gtype__: number

    // Class property signals of GstPbutils-1.0.GstPbutils.EncodingAudioProfile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-properties", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Variant of #GstEncodingProfile for audio streams.
 * @class 
 */
class EncodingAudioProfile extends EncodingProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingAudioProfile

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.EncodingAudioProfile

    constructor(config?: EncodingAudioProfile.ConstructorProperties) 
    /**
     * Creates a new #GstEncodingAudioProfile
     * 
     * All provided allocatable arguments will be internally copied, so can be
     * safely freed/unreferenced after calling this method.
     * @constructor 
     * @param format the #GstCaps
     * @param preset the preset(s) to use on the encoder, can be %NULL
     * @param restriction the #GstCaps used to restrict the input to the encoder, can be NULL. See gst_encoding_profile_get_restriction() for more details.
     * @param presence the number of time this stream must be used. 0 means any number of  times (including never)
     * @returns the newly created #GstEncodingAudioProfile.
     */
    constructor(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number) 
    /**
     * Creates a new #GstEncodingAudioProfile
     * 
     * All provided allocatable arguments will be internally copied, so can be
     * safely freed/unreferenced after calling this method.
     * @constructor 
     * @param format the #GstCaps
     * @param preset the preset(s) to use on the encoder, can be %NULL
     * @param restriction the #GstCaps used to restrict the input to the encoder, can be NULL. See gst_encoding_profile_get_restriction() for more details.
     * @param presence the number of time this stream must be used. 0 means any number of  times (including never)
     * @returns the newly created #GstEncodingAudioProfile.
     */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingAudioProfile
    _init(config?: EncodingAudioProfile.ConstructorProperties): void
}

module EncodingContainerProfile {

    // Constructor properties interface

    interface ConstructorProperties extends EncodingProfile.ConstructorProperties {
    }

}

interface EncodingContainerProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingContainerProfile

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.EncodingContainerProfile

    /**
     * Add a #GstEncodingProfile to the list of profiles handled by `container`.
     * 
     * No copy of `profile` will be made, if you wish to use it elsewhere after this
     * method you should increment its reference count.
     * @param profile the #GstEncodingProfile to add.
     * @returns %TRUE if the @stream was properly added, else %FALSE.
     */
    addProfile(profile: EncodingProfile): boolean
    /**
     * Checks if `container` contains a #GstEncodingProfile identical to
     * `profile`.
     * @param profile a #GstEncodingProfile
     * @returns %TRUE if @container contains a #GstEncodingProfile identical to @profile, else %FALSE.
     */
    containsProfile(profile: EncodingProfile): boolean
    getProfiles(): EncodingProfile[]

    // Class property signals of GstPbutils-1.0.GstPbutils.EncodingContainerProfile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-properties", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Encoding profiles for containers. Keeps track of a list of #GstEncodingProfile
 * @class 
 */
class EncodingContainerProfile extends EncodingProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingContainerProfile

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.EncodingContainerProfile

    constructor(config?: EncodingContainerProfile.ConstructorProperties) 
    /**
     * Creates a new #GstEncodingContainerProfile.
     * @constructor 
     * @param name The name of the container profile, can be %NULL
     * @param description The description of the container profile,     can be %NULL
     * @param format The format to use for this profile
     * @param preset The preset to use for this profile.
     * @returns The newly created #GstEncodingContainerProfile.
     */
    constructor(name: string | null, description: string | null, format: Gst.Caps, preset: string | null) 
    /**
     * Creates a new #GstEncodingContainerProfile.
     * @constructor 
     * @param name The name of the container profile, can be %NULL
     * @param description The description of the container profile,     can be %NULL
     * @param format The format to use for this profile
     * @param preset The preset to use for this profile.
     * @returns The newly created #GstEncodingContainerProfile.
     */
    static new(name: string | null, description: string | null, format: Gst.Caps, preset: string | null): EncodingContainerProfile
    _init(config?: EncodingContainerProfile.ConstructorProperties): void
}

module EncodingProfile {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPbutils-1.0.GstPbutils.EncodingProfile

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
        elementProperties?: Gst.Structure | null
        restrictionCaps?: Gst.Caps | null
    }

}

interface EncodingProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingProfile

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
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.EncodingProfile

    /**
     * Makes a deep copy of `self`
     * @returns The copy of @self
     */
    copy(): EncodingProfile
    /**
     * Get whether the format that has been negotiated in at some point can be renegotiated
     * later during the encoding.
     */
    getAllowDynamicOutput(): boolean
    getDescription(): string | null
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string | null
    getFormat(): Gst.Caps
    /**
     * Computes the full output caps that this `profile` will be able to consume.
     * @returns The full caps the given @profile can consume. Call gst_caps_unref() when you are done with the caps.
     */
    getInputCaps(): Gst.Caps
    getName(): string | null
    getPresence(): number
    getPreset(): string | null
    getPresetName(): string | null
    getRestriction(): Gst.Caps | null
    getSingleSegment(): boolean
    getTypeNick(): string | null
    isEnabled(): boolean
    /**
     * Checks whether the two #GstEncodingProfile are equal
     * @param b a #GstEncodingProfile
     * @returns %TRUE if @a and @b are equal, else %FALSE.
     */
    isEqual(b: EncodingProfile): boolean
    /**
     * Sets whether the format that has been negotiated in at some point can be renegotiated
     * later during the encoding.
     * @param allowDynamicOutput Whether the format that has been negotiated first can be renegotiated during the encoding
     */
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    /**
     * Set `description` as the given description for the `profile`. A copy of
     * `description` will be made internally.
     * @param description the description to set on the profile
     */
    setDescription(description: string | null): void
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
     * @param elementProperties A #GstStructure defining the properties to be set to the element the profile represents.
     */
    setElementProperties(elementProperties: Gst.Structure): void
    /**
     * Set whether the profile should be used or not.
     * @param enabled %FALSE to disable `profile,` %TRUE to enable it
     */
    setEnabled(enabled: boolean): void
    /**
     * Sets the media format used in the profile.
     * @param format the media format to use in the profile.
     */
    setFormat(format: Gst.Caps): void
    /**
     * Set `name` as the given name for the `profile`. A copy of `name` will be made
     * internally.
     * @param name the name to set on the profile
     */
    setName(name: string | null): void
    /**
     * Set the number of time the profile is used in its parent
     * container profile. If 0, it is not a mandatory stream
     * @param presence the number of time the profile can be used
     */
    setPresence(presence: number): void
    /**
     * Sets the name of the #GstElement that implements the #GstPreset interface
     * to use for the profile.
     * This is the name that has been set when saving the preset.
     * @param preset the element preset to use
     */
    setPreset(preset: string | null): void
    /**
     * Sets the name of the #GstPreset's factory to be used in the profile.
     * @param presetName The name of the preset to use in this `profile`.
     */
    setPresetName(presetName: string | null): void
    /**
     * Set the restriction #GstCaps to apply before the encoder
     * that will be used in the profile. See gst_encoding_profile_get_restriction()
     * for more about restrictions. Does not apply to #GstEncodingContainerProfile.
     * @param restriction the restriction to apply
     */
    setRestriction(restriction: Gst.Caps | null): void
    /**
     * If using a single segment, buffers will be retimestamped and segments will be
     * eat so as to appear as one segment.
     * 
     * > *NOTE*: Single segment is not property supported when using
     * > #encodebin:avoid-reencoding
     * @param singleSegment #TRUE if the stream represented by `profile` should use a single segment before the encoder, #FALSE otherwise.
     */
    setSingleSegment(singleSegment: boolean): void

    // Class property signals of GstPbutils-1.0.GstPbutils.EncodingProfile

    connect(sigName: "notify::element-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-properties", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque base class object for all encoding profiles. This contains generic
 * information like name, description, format and preset.
 * @class 
 */
class EncodingProfile extends GObject.Object {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingProfile

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.EncodingProfile

    constructor(config?: EncodingProfile.ConstructorProperties) 
    _init(config?: EncodingProfile.ConstructorProperties): void
    /**
     * Find the #GstEncodingProfile with the specified name and category.
     * @param targetname The name of the target
     * @param profilename The name of the profile, if %NULL provided, it will default to the encoding profile called `default`.
     * @param category The target category. Can be %NULL
     * @returns The matching #GstEncodingProfile or %NULL.
     */
    static find(targetname: string | null, profilename: string | null, category: string | null): EncodingProfile | null
    /**
     * Creates a #GstEncodingProfile matching the formats from the given
     * #GstDiscovererInfo. Streams other than audio or video (eg,
     * subtitles), are currently ignored.
     * @param info The #GstDiscovererInfo to read from
     * @returns The new #GstEncodingProfile or %NULL.
     */
    static fromDiscoverer(info: DiscovererInfo): EncodingProfile | null
}

module EncodingTarget {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface EncodingTarget {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingTarget

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.EncodingTarget

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
    addProfile(profile: EncodingProfile): boolean
    getCategory(): string | null
    getDescription(): string | null
    getName(): string | null
    getPath(): string | null
    getProfile(name: string | null): EncodingProfile | null
    getProfiles(): EncodingProfile[]
    /**
     * Saves the `target` to a default user-local directory.
     * @returns %TRUE if the target was correctly saved, else %FALSE.
     */
    save(): boolean
    /**
     * Saves the `target` to the provided file location.
     * @param filepath the location to store the `target` at.
     * @returns %TRUE if the target was correctly saved, else %FALSE.
     */
    saveToFile(filepath: string): boolean

    // Class property signals of GstPbutils-1.0.GstPbutils.EncodingTarget

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Collection of #GstEncodingProfile for a specific target or use-case.
 * 
 * When being stored/loaded, targets come from a specific category, like
 * #GST_ENCODING_CATEGORY_DEVICE.
 * @class 
 */
class EncodingTarget extends GObject.Object {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingTarget

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.EncodingTarget

    constructor(config?: EncodingTarget.ConstructorProperties) 
    /**
     * Creates a new #GstEncodingTarget.
     * 
     * The name and category can only consist of lowercase ASCII letters for the
     * first character, followed by either lowercase ASCII letters, digits or
     * hyphens ('-').
     * 
     * The `category` *should* be one of the existing
     * well-defined categories, like #GST_ENCODING_CATEGORY_DEVICE, but it
     * *can* be a application or user specific category if
     * needed.
     * @constructor 
     * @param name The name of the target.
     * @param category The name of the category to which this `target` belongs. For example: #GST_ENCODING_CATEGORY_DEVICE.
     * @param description A description of #GstEncodingTarget in the current locale.
     * @param profiles A #GList of #GstEncodingProfile.
     * @returns The newly created #GstEncodingTarget or %NULL if there was an error.
     */
    constructor(name: string | null, category: string | null, description: string | null, profiles: EncodingProfile[]) 
    /**
     * Creates a new #GstEncodingTarget.
     * 
     * The name and category can only consist of lowercase ASCII letters for the
     * first character, followed by either lowercase ASCII letters, digits or
     * hyphens ('-').
     * 
     * The `category` *should* be one of the existing
     * well-defined categories, like #GST_ENCODING_CATEGORY_DEVICE, but it
     * *can* be a application or user specific category if
     * needed.
     * @constructor 
     * @param name The name of the target.
     * @param category The name of the category to which this `target` belongs. For example: #GST_ENCODING_CATEGORY_DEVICE.
     * @param description A description of #GstEncodingTarget in the current locale.
     * @param profiles A #GList of #GstEncodingProfile.
     * @returns The newly created #GstEncodingTarget or %NULL if there was an error.
     */
    static new(name: string | null, category: string | null, description: string | null, profiles: EncodingProfile[]): EncodingTarget
    _init(config?: EncodingTarget.ConstructorProperties): void
    /**
     * Searches for the #GstEncodingTarget with the given name, loads it
     * and returns it.
     * 
     * If the category name is specified only targets from that category will be
     * searched for.
     * @param name the name of the #GstEncodingTarget to load (automatically converted to lower case internally as capital letters are not valid for target names).
     * @param category the name of the target category, like #GST_ENCODING_CATEGORY_DEVICE. Can be %NULL
     * @returns The #GstEncodingTarget if available, else %NULL.
     */
    static load(name: string | null, category: string | null): EncodingTarget
    /**
     * Opens the provided file and returns the contained #GstEncodingTarget.
     * @param filepath The file location to load the #GstEncodingTarget from
     * @returns The #GstEncodingTarget contained in the file, else %NULL
     */
    static loadFromFile(filepath: string): EncodingTarget
}

module EncodingVideoProfile {

    // Constructor properties interface

    interface ConstructorProperties extends EncodingProfile.ConstructorProperties {
    }

}

interface EncodingVideoProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingVideoProfile

    __gtype__: number

    // Owm methods of GstPbutils-1.0.GstPbutils.EncodingVideoProfile

    /**
     * Get the pass number if this is part of a multi-pass profile.
     * @returns The pass number. Starts at 1 for multi-pass. 0 if this is not a multi-pass profile
     */
    getPass(): number
    /**
     * > *NOTE*: Fixed framerate won't be enforced when #encodebin:avoid-reencoding
     * > is set.
     * @returns Whether non-constant video framerate is allowed for encoding.
     */
    getVariableframerate(): boolean
    /**
     * Sets the pass number of this video profile. The first pass profile should have
     * this value set to 1. If this video profile isn't part of a multi-pass profile,
     * you may set it to 0 (the default value).
     * @param pass the pass number for this profile
     */
    setPass(pass: number): void
    /**
     * If set to %TRUE, then the incoming stream will be allowed to have non-constant
     * framerate. If set to %FALSE (default value), then the incoming stream will
     * be normalized by dropping/duplicating frames in order to produce a
     * constance framerate.
     * @param variableframerate a boolean
     */
    setVariableframerate(variableframerate: boolean): void

    // Class property signals of GstPbutils-1.0.GstPbutils.EncodingVideoProfile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-properties", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Variant of #GstEncodingProfile for video streams, allows specifying the `pass`.
 * @class 
 */
class EncodingVideoProfile extends EncodingProfile {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingVideoProfile

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.EncodingVideoProfile

    constructor(config?: EncodingVideoProfile.ConstructorProperties) 
    /**
     * Creates a new #GstEncodingVideoProfile
     * 
     * All provided allocatable arguments will be internally copied, so can be
     * safely freed/unreferenced after calling this method.
     * 
     * If you wish to control the pass number (in case of multi-pass scenarios),
     * please refer to the gst_encoding_video_profile_set_pass() documentation.
     * 
     * If you wish to use/force a constant framerate please refer to the
     * gst_encoding_video_profile_set_variableframerate() documentation.
     * @constructor 
     * @param format the #GstCaps
     * @param preset the preset(s) to use on the encoder, can be %NULL
     * @param restriction the #GstCaps used to restrict the input to the encoder, can be NULL. See gst_encoding_profile_get_restriction() for more details.
     * @param presence the number of time this stream must be used. 0 means any number of  times (including never)
     * @returns the newly created #GstEncodingVideoProfile.
     */
    constructor(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number) 
    /**
     * Creates a new #GstEncodingVideoProfile
     * 
     * All provided allocatable arguments will be internally copied, so can be
     * safely freed/unreferenced after calling this method.
     * 
     * If you wish to control the pass number (in case of multi-pass scenarios),
     * please refer to the gst_encoding_video_profile_set_pass() documentation.
     * 
     * If you wish to use/force a constant framerate please refer to the
     * gst_encoding_video_profile_set_variableframerate() documentation.
     * @constructor 
     * @param format the #GstCaps
     * @param preset the preset(s) to use on the encoder, can be %NULL
     * @param restriction the #GstCaps used to restrict the input to the encoder, can be NULL. See gst_encoding_profile_get_restriction() for more details.
     * @param presence the number of time this stream must be used. 0 means any number of  times (including never)
     * @returns the newly created #GstEncodingVideoProfile.
     */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingVideoProfile
    _init(config?: EncodingVideoProfile.ConstructorProperties): void
}

interface AudioVisualizerClass {

    // Own fields of GstPbutils-1.0.GstPbutils.AudioVisualizerClass

    setup: (scope: AudioVisualizer) => boolean
    render: (scope: AudioVisualizer, audio: Gst.Buffer, video: GstVideo.VideoFrame) => boolean
    decideAllocation: (scope: AudioVisualizer, query: Gst.Query) => boolean
}

abstract class AudioVisualizerClass {

    // Own properties of GstPbutils-1.0.GstPbutils.AudioVisualizerClass

    static name: string
}

interface AudioVisualizerPrivate {
}

class AudioVisualizerPrivate {

    // Own properties of GstPbutils-1.0.GstPbutils.AudioVisualizerPrivate

    static name: string
}

interface DiscovererClass {

    // Own fields of GstPbutils-1.0.GstPbutils.DiscovererClass

    parentclass: GObject.ObjectClass
    finished: (discoverer: Discoverer) => void
    starting: (discoverer: Discoverer) => void
    discovered: (discoverer: Discoverer, info: DiscovererInfo, err: GLib.Error) => void
    sourceSetup: (discoverer: Discoverer, source: Gst.Element) => void
    loadSerializeInfo: (dc: Discoverer, uri: string | null) => DiscovererInfo
    reserved: any[]
}

abstract class DiscovererClass {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererClass

    static name: string
}

interface DiscovererPrivate {
}

class DiscovererPrivate {

    // Own properties of GstPbutils-1.0.GstPbutils.DiscovererPrivate

    static name: string
}

interface EncodingAudioProfileClass {
}

abstract class EncodingAudioProfileClass {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingAudioProfileClass

    static name: string
}

interface EncodingContainerProfileClass {
}

abstract class EncodingContainerProfileClass {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingContainerProfileClass

    static name: string
}

interface EncodingProfileClass {
}

abstract class EncodingProfileClass {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingProfileClass

    static name: string
}

interface EncodingVideoProfileClass {
}

abstract class EncodingVideoProfileClass {

    // Own properties of GstPbutils-1.0.GstPbutils.EncodingVideoProfileClass

    static name: string
}

interface InstallPluginsContext {

    // Owm methods of GstPbutils-1.0.GstPbutils.InstallPluginsContext

    /**
     * Copies a #GstInstallPluginsContext.
     * @returns A copy of @ctx
     */
    copy(): InstallPluginsContext
    /**
     * Frees a #GstInstallPluginsContext.
     */
    free(): void
    /**
     * This function is used to tell the external installer process whether it
     * should ask for confirmation or not before searching for missing plugins.
     * 
     * If set, this option will be passed to the installer via a
     * --interaction=[show-confirm-search|hide-confirm-search] command line option.
     * @param confirmSearch whether to ask for confirmation before searching for plugins
     */
    setConfirmSearch(confirmSearch: boolean): void
    /**
     * This function is used to pass the calling application's desktop file ID to
     * the external installer process.
     * 
     * A desktop file ID is the basename of the desktop file, including the
     * .desktop extension.
     * 
     * If set, the desktop file ID will be passed to the installer via a
     * --desktop-id= command line option.
     * @param desktopId the desktop file ID of the calling application
     */
    setDesktopId(desktopId: string | null): void
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
     * @param startupId the startup notification ID
     */
    setStartupNotificationId(startupId: string | null): void
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
    setXid(xid: number): void
}

/**
 * Opaque context structure for the plugin installation. Use the provided
 * API to set details on it.
 * @record 
 */
class InstallPluginsContext {

    // Own properties of GstPbutils-1.0.GstPbutils.InstallPluginsContext

    static name: string

    // Constructors of GstPbutils-1.0.GstPbutils.InstallPluginsContext

    /**
     * Creates a new #GstInstallPluginsContext.
     * @constructor 
     * @returns a new #GstInstallPluginsContext. Free with gst_install_plugins_context_free() when no longer needed
     */
    constructor() 
    /**
     * Creates a new #GstInstallPluginsContext.
     * @constructor 
     * @returns a new #GstInstallPluginsContext. Free with gst_install_plugins_context_free() when no longer needed
     */
    static new(): InstallPluginsContext
}

    type DiscovererAudioInfoClass = GObject.ObjectClass
    type DiscovererContainerInfoClass = GObject.ObjectClass
    type DiscovererInfoClass = GObject.ObjectClass
    type DiscovererStreamInfoClass = GObject.ObjectClass
    type DiscovererSubtitleInfoClass = GObject.ObjectClass
    type DiscovererVideoInfoClass = GObject.ObjectClass
    type EncodingTargetClass = GObject.ObjectClass
}

export default GstPbutils;
// END