
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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstRiff {

    /**
     * GstRiff-1.0
     */


    /**
     * @default 259
     */
    const RIFF_IBM_FORMAT_ADPCM: number;

    /**
     * @default 258
     */
    const RIFF_IBM_FORMAT_ALAW: number;

    /**
     * @default 257
     */
    const RIFF_IBM_FORMAT_MULAW: number;

    /**
     * @default 268369920
     */
    const RIFF_IF_COMPUSE: number;

    /**
     * @default 16
     */
    const RIFF_IF_KEYFRAME: number;

    /**
     * @default 1
     */
    const RIFF_IF_LIST: number;

    /**
     * @default 256
     */
    const RIFF_IF_NO_TIME: number;

    /**
     * @default 1
     */
    const RIFF_STRH_DISABLED: number;

    /**
     * @default 65536
     */
    const RIFF_STRH_VIDEOPALCHANGES: number;

    /**
     * @default 8192
     */
    const RIFF_WAVE_FORMAT_A52: number;

    /**
     * @default 255
     */
    const RIFF_WAVE_FORMAT_AAC: number;

    /**
     * @default 16707
     */
    const RIFF_WAVE_FORMAT_AAC_AC: number;

    /**
     * @default 28781
     */
    const RIFF_WAVE_FORMAT_AAC_pm: number;

    /**
     * @default 2
     */
    const RIFF_WAVE_FORMAT_ADPCM: number;

    /**
     * @default 655
     */
    const RIFF_WAVE_FORMAT_ADPCM_G722: number;

    /**
     * @default 98
     */
    const RIFF_WAVE_FORMAT_ADPCM_IMA_DK3: number;

    /**
     * @default 97
     */
    const RIFF_WAVE_FORMAT_ADPCM_IMA_DK4: number;

    /**
     * @default 105
     */
    const RIFF_WAVE_FORMAT_ADPCM_IMA_WAV: number;

    /**
     * @default 6
     */
    const RIFF_WAVE_FORMAT_ALAW: number;

    /**
     * @default 87
     */
    const RIFF_WAVE_FORMAT_AMR_NB: number;

    /**
     * @default 88
     */
    const RIFF_WAVE_FORMAT_AMR_WB: number;

    /**
     * @default 51
     */
    const RIFF_WAVE_FORMAT_ANTEX_ADPCME: number;

    /**
     * @default 37
     */
    const RIFF_WAVE_FORMAT_APTX: number;

    /**
     * @default 38
     */
    const RIFF_WAVE_FORMAT_AUDIOFILE_AF10: number;

    /**
     * @default 36
     */
    const RIFF_WAVE_FORMAT_AUDIOFILE_AF36: number;

    /**
     * @default 1024
     */
    const RIFF_WAVE_FORMAT_BTV_DIGITAL: number;

    /**
     * @default 99
     */
    const RIFF_WAVE_FORMAT_CANOPUS_ATRAC: number;

    /**
     * @default 96
     */
    const RIFF_WAVE_FORMAT_CIRRUS: number;

    /**
     * @default 55
     */
    const RIFF_WAVE_FORMAT_CONTROL_RES_CR10: number;

    /**
     * @default 52
     */
    const RIFF_WAVE_FORMAT_CONTROL_RES_VQLPC: number;

    /**
     * @default 512
     */
    const RIFF_WAVE_FORMAT_CREATIVE_ADPCM: number;

    /**
     * @default 515
     */
    const RIFF_WAVE_FORMAT_CREATIVE_FASTSPEECH10: number;

    /**
     * @default 514
     */
    const RIFF_WAVE_FORMAT_CREATIVE_FASTSPEECH8: number;

    /**
     * @default 608
     */
    const RIFF_WAVE_FORMAT_CS2: number;

    /**
     * @default 57
     */
    const RIFF_WAVE_FORMAT_CS_IMAADPCM: number;

    /**
     * @default 25
     */
    const RIFF_WAVE_FORMAT_CU_CODEC: number;

    /**
     * @default 133
     */
    const RIFF_WAVE_FORMAT_DF_G726: number;

    /**
     * @default 134
     */
    const RIFF_WAVE_FORMAT_DF_GSM610: number;

    /**
     * @default 23
     */
    const RIFF_WAVE_FORMAT_DIALOGIC_OKI_ADPCM: number;

    /**
     * @default 54
     */
    const RIFF_WAVE_FORMAT_DIGIADPCM: number;

    /**
     * @default 22
     */
    const RIFF_WAVE_FORMAT_DIGIFIX: number;

    /**
     * @default 53
     */
    const RIFF_WAVE_FORMAT_DIGIREAL: number;

    /**
     * @default 21
     */
    const RIFF_WAVE_FORMAT_DIGISTD: number;

    /**
     * @default 291
     */
    const RIFF_WAVE_FORMAT_DIGITAL_G723: number;

    /**
     * @default 48
     */
    const RIFF_WAVE_FORMAT_DOLBY_AC2: number;

    /**
     * @default 146
     */
    const RIFF_WAVE_FORMAT_DOLBY_AC3_SPDIF: number;

    /**
     * @default 103
     */
    const RIFF_WAVE_FORMAT_DSAT_DISPLAY: number;

    /**
     * @default 34
     */
    const RIFF_WAVE_FORMAT_DSP_TRUESPEECH: number;

    /**
     * @default 8193
     */
    const RIFF_WAVE_FORMAT_DTS: number;

    /**
     * @default 17
     */
    const RIFF_WAVE_FORMAT_DVI_ADPCM: number;

    /**
     * @default 35
     */
    const RIFF_WAVE_FORMAT_ECHOSC1: number;

    /**
     * @default 58
     */
    const RIFF_WAVE_FORMAT_ECHOSC3: number;

    /**
     * @default 97
     */
    const RIFF_WAVE_FORMAT_ESPCM: number;

    /**
     * @default 65534
     */
    const RIFF_WAVE_FORMAT_EXTENSIBLE: number;

    /**
     * @default 61868
     */
    const RIFF_WAVE_FORMAT_FLAC: number;

    /**
     * @default 768
     */
    const RIFF_WAVE_FORMAT_FM_TOWNS_SND: number;

    /**
     * @default 101
     */
    const RIFF_WAVE_FORMAT_G722_ADPCM: number;

    /**
     * @default 20
     */
    const RIFF_WAVE_FORMAT_G723_ADPCM: number;

    /**
     * @default 320
     */
    const RIFF_WAVE_FORMAT_G726ADPCM: number;

    /**
     * @default 100
     */
    const RIFF_WAVE_FORMAT_G726_ADPCM: number;

    /**
     * @default 65
     */
    const RIFF_WAVE_FORMAT_G728_CELP: number;

    /**
     * @default 131
     */
    const RIFF_WAVE_FORMAT_G729A: number;

    /**
     * @default 49
     */
    const RIFF_WAVE_FORMAT_GSM610: number;

    /**
     * @default 31265
     */
    const RIFF_WAVE_FORMAT_GSM_AMR_CBR: number;

    /**
     * @default 31266
     */
    const RIFF_WAVE_FORMAT_GSM_AMR_VBR: number;

    /**
     * @default 5
     */
    const RIFF_WAVE_FORMAT_IBM_CVSD: number;

    /**
     * @default 3
     */
    const RIFF_WAVE_FORMAT_IEEE_FLOAT: number;

    /**
     * @default 560
     */
    const RIFF_WAVE_FORMAT_ILINK_VC: number;

    /**
     * @default 1025
     */
    const RIFF_WAVE_FORMAT_IMC: number;

    /**
     * @default 592
     */
    const RIFF_WAVE_FORMAT_IPI_HSX: number;

    /**
     * @default 593
     */
    const RIFF_WAVE_FORMAT_IPI_RPELP: number;

    /**
     * @default 136
     */
    const RIFF_WAVE_FORMAT_ISIAUDIO: number;

    /**
     * @default 64
     */
    const RIFF_WAVE_FORMAT_ITU_G721_ADPCM: number;

    /**
     * @default 69
     */
    const RIFF_WAVE_FORMAT_ITU_G726_ADPCM: number;

    /**
     * @default 4352
     */
    const RIFF_WAVE_FORMAT_LH_CODEC: number;

    /**
     * @default 40
     */
    const RIFF_WAVE_FORMAT_LRC: number;

    /**
     * @default 89
     */
    const RIFF_WAVE_FORMAT_LUCENT_G723: number;

    /**
     * @default 160
     */
    const RIFF_WAVE_FORMAT_MALDEN_PHONYTALK: number;

    /**
     * @default 147
     */
    const RIFF_WAVE_FORMAT_MEDIASONIC_G723: number;

    /**
     * @default 18
     */
    const RIFF_WAVE_FORMAT_MEDIASPACE_ADPCM: number;

    /**
     * @default 24
     */
    const RIFF_WAVE_FORMAT_MEDIAVISION_ADPCM: number;

    /**
     * @default 80
     */
    const RIFF_WAVE_FORMAT_MPEGL12: number;

    /**
     * @default 85
     */
    const RIFF_WAVE_FORMAT_MPEGL3: number;

    /**
     * @default 66
     */
    const RIFF_WAVE_FORMAT_MSG723: number;

    /**
     * @default 50
     */
    const RIFF_WAVE_FORMAT_MSN: number;

    /**
     * @default 130
     */
    const RIFF_WAVE_FORMAT_MSRT24: number;

    /**
     * @default 7
     */
    const RIFF_WAVE_FORMAT_MULAW: number;

    /**
     * @default 132
     */
    const RIFF_WAVE_FORMAT_MVI_MVI2: number;

    /**
     * @default 56
     */
    const RIFF_WAVE_FORMAT_NMS_VBXADPCM: number;

    /**
     * @default 5120
     */
    const RIFF_WAVE_FORMAT_NORRIS: number;

    /**
     * @default 16
     */
    const RIFF_WAVE_FORMAT_OKI_ADPCM: number;

    /**
     * @default 4097
     */
    const RIFF_WAVE_FORMAT_OLIADPCM: number;

    /**
     * @default 4098
     */
    const RIFF_WAVE_FORMAT_OLICELP: number;

    /**
     * @default 4096
     */
    const RIFF_WAVE_FORMAT_OLIGSM: number;

    /**
     * @default 4100
     */
    const RIFF_WAVE_FORMAT_OLIOPR: number;

    /**
     * @default 4099
     */
    const RIFF_WAVE_FORMAT_OLISBC: number;

    /**
     * @default 137
     */
    const RIFF_WAVE_FORMAT_ONLIVE: number;

    /**
     * @default 83
     */
    const RIFF_WAVE_FORMAT_PAC: number;

    /**
     * @default 153
     */
    const RIFF_WAVE_FORMAT_PACKED: number;

    /**
     * @default 1
     */
    const RIFF_WAVE_FORMAT_PCM: number;

    /**
     * @default 152
     */
    const RIFF_WAVE_FORMAT_PHILIPS_LPCBB: number;

    /**
     * @default 39
     */
    const RIFF_WAVE_FORMAT_PROSODY_1612: number;

    /**
     * @default 148
     */
    const RIFF_WAVE_FORMAT_PROSODY_8KBPS: number;

    /**
     * @default 1104
     */
    const RIFF_WAVE_FORMAT_QDESIGN_MUSIC: number;

    /**
     * @default 337
     */
    const RIFF_WAVE_FORMAT_QUALCOMM_HALFRATE: number;

    /**
     * @default 336
     */
    const RIFF_WAVE_FORMAT_QUALCOMM_PUREVOICE: number;

    /**
     * @default 544
     */
    const RIFF_WAVE_FORMAT_QUARTERDECK: number;

    /**
     * @default 576
     */
    const RIFF_WAVE_FORMAT_RAW_SPORT: number;

    /**
     * @default 256
     */
    const RIFF_WAVE_FORMAT_RHETOREX_ADPCM: number;

    /**
     * @default 59
     */
    const RIFF_WAVE_FORMAT_ROCKWELL_ADPCM: number;

    /**
     * @default 60
     */
    const RIFF_WAVE_FORMAT_ROCKWELL_DIGITALK: number;

    /**
     * @default 82
     */
    const RIFF_WAVE_FORMAT_RT24: number;

    /**
     * @default 293
     */
    const RIFF_WAVE_FORMAT_SANYO_LD_ADPCM: number;

    /**
     * @default 145
     */
    const RIFF_WAVE_FORMAT_SBC24: number;

    /**
     * @default 19
     */
    const RIFF_WAVE_FORMAT_SIERRA_ADPCM: number;

    /**
     * @default 305
     */
    const RIFF_WAVE_FORMAT_SIPROLAB_ACELP4800: number;

    /**
     * @default 306
     */
    const RIFF_WAVE_FORMAT_SIPROLAB_ACELP8V3: number;

    /**
     * @default 304
     */
    const RIFF_WAVE_FORMAT_SIPROLAB_ACEPLNET: number;

    /**
     * @default 307
     */
    const RIFF_WAVE_FORMAT_SIPROLAB_G729: number;

    /**
     * @default 308
     */
    const RIFF_WAVE_FORMAT_SIPROLAB_G729A: number;

    /**
     * @default 309
     */
    const RIFF_WAVE_FORMAT_SIPROLAB_KELVIN: number;

    /**
     * @default 654
     */
    const RIFF_WAVE_FORMAT_SIREN: number;

    /**
     * @default 128
     */
    const RIFF_WAVE_FORMAT_SOFTSOUND: number;

    /**
     * @default 33
     */
    const RIFF_WAVE_FORMAT_SONARC: number;

    /**
     * @default 8264
     */
    const RIFF_WAVE_FORMAT_SONIC: number;

    /**
     * @default 8264
     */
    const RIFF_WAVE_FORMAT_SONIC_LS: number;

    /**
     * @default 624
     */
    const RIFF_WAVE_FORMAT_SONY_ATRAC3: number;

    /**
     * @default 5376
     */
    const RIFF_WAVE_FORMAT_SOUNDSPACE_MUSICOMPRESS: number;

    /**
     * @default 1665
     */
    const RIFF_WAVE_FORMAT_TPC: number;

    /**
     * @default 341
     */
    const RIFF_WAVE_FORMAT_TUBGSM: number;

    /**
     * @default 528
     */
    const RIFF_WAVE_FORMAT_UHER_ADPCM: number;

    /**
     * @default 0
     */
    const RIFF_WAVE_FORMAT_UNKNOWN: number;

    /**
     * @default 273
     */
    const RIFF_WAVE_FORMAT_VIVO_G723: number;

    /**
     * @default 274
     */
    const RIFF_WAVE_FORMAT_VIVO_SIREN: number;

    /**
     * @default 1664
     */
    const RIFF_WAVE_FORMAT_VME_VMPCM: number;

    /**
     * @default 26447
     */
    const RIFF_WAVE_FORMAT_VORBIS1: number;

    /**
     * @default 26479
     */
    const RIFF_WAVE_FORMAT_VORBIS1PLUS: number;

    /**
     * @default 26448
     */
    const RIFF_WAVE_FORMAT_VORBIS2: number;

    /**
     * @default 26480
     */
    const RIFF_WAVE_FORMAT_VORBIS2PLUS: number;

    /**
     * @default 26449
     */
    const RIFF_WAVE_FORMAT_VORBIS3: number;

    /**
     * @default 26481
     */
    const RIFF_WAVE_FORMAT_VORBIS3PLUS: number;

    /**
     * @default 98
     */
    const RIFF_WAVE_FORMAT_VOXWARE: number;

    /**
     * @default 113
     */
    const RIFF_WAVE_FORMAT_VOXWARE_AC10: number;

    /**
     * @default 114
     */
    const RIFF_WAVE_FORMAT_VOXWARE_AC16: number;

    /**
     * @default 115
     */
    const RIFF_WAVE_FORMAT_VOXWARE_AC20: number;

    /**
     * @default 112
     */
    const RIFF_WAVE_FORMAT_VOXWARE_AC8: number;

    /**
     * @default 105
     */
    const RIFF_WAVE_FORMAT_VOXWARE_BYTE_ALIGNED: number;

    /**
     * @default 117
     */
    const RIFF_WAVE_FORMAT_VOXWARE_METASOUND: number;

    /**
     * @default 116
     */
    const RIFF_WAVE_FORMAT_VOXWARE_METAVOICE: number;

    /**
     * @default 118
     */
    const RIFF_WAVE_FORMAT_VOXWARE_RT29HW: number;

    /**
     * @default 121
     */
    const RIFF_WAVE_FORMAT_VOXWARE_TQ40: number;

    /**
     * @default 129
     */
    const RIFF_WAVE_FORMAT_VOXWARE_TQ60: number;

    /**
     * @default 119
     */
    const RIFF_WAVE_FORMAT_VOXWARE_VR12: number;

    /**
     * @default 120
     */
    const RIFF_WAVE_FORMAT_VOXWARE_VR18: number;

    /**
     * @default 4
     */
    const RIFF_WAVE_FORMAT_VSELP: number;

    /**
     * @default 352
     */
    const RIFF_WAVE_FORMAT_WMAV1: number;

    /**
     * @default 353
     */
    const RIFF_WAVE_FORMAT_WMAV2: number;

    /**
     * @default 354
     */
    const RIFF_WAVE_FORMAT_WMAV3: number;

    /**
     * @default 355
     */
    const RIFF_WAVE_FORMAT_WMAV3_L: number;

    /**
     * @default 10
     */
    const RIFF_WAVE_FORMAT_WMS: number;

    /**
     * @default 61
     */
    const RIFF_WAVE_FORMAT_XEBEC: number;

    /**
     * @default 32
     */
    const RIFF_WAVE_FORMAT_YAMAHA_ADPCM: number;

    /**
     * @default 151
     */
    const RIFF_WAVE_FORMAT_ZYXEL_ADPCM: number;

    function riff_create_audio_template_caps(): Gst.Caps;

    function riff_create_iavs_template_caps(): Gst.Caps;

    function riff_create_video_template_caps(): Gst.Caps;

    /**
     * Initialize riff library.
     */
    function riff_init(): void;

    /**
     * Reads a single chunk.
     * @param element caller element (used for debugging).
     * @param buf input buffer.
     * @param offset offset in the buffer in the caller. Is incremented          by the read size by this function.
     * @param fourcc fourcc (returned by this function0 of the chunk.
     * @param chunk_data buffer (returned by the function) containing the              chunk data, which may be NULL if chunksize == 0
     * @returns FALSE on error, TRUE otherwise
     */
    function riff_parse_chunk(element: Gst.Element, buf: Gst.Buffer, offset: number, fourcc: number, chunk_data: Gst.Buffer): boolean;

    /**
     * Reads the first few bytes from the provided buffer, checks
     * if this stream is a RIFF stream, and determines document type.
     * This function takes ownership of `buf` so it should not be used anymore
     * after calling this function.
     * @param element caller element (used for debugging/error).
     * @param buf input buffer from which the file header will be parsed,       should be at least 12 bytes long.
     * @param doctype a fourcc (returned by this function) to indicate the           type of document (according to the header).
     * @returns FALSE if this is not a RIFF stream (in which case the caller should error out; we already throw an error), or TRUE if it is.
     */
    function riff_parse_file_header(element: Gst.Element, buf: Gst.Buffer, doctype: number): boolean;

    /**
     * Parses stream metadata from input data.
     * @param element caller element (used for debugging/error).
     * @param buf input data to be used for parsing, stripped from header.
     * @param taglist a pointer to a taglist (returned by this function)           containing information about this stream. May be           NULL if no supported tags were found.
     */
    function riff_parse_info(element: Gst.Element, buf: Gst.Buffer, taglist: Gst.TagList): void;

    /**
     * Reads a single chunk of data. 'JUNK' chunks are skipped
     * automatically.
     * @param element caller element (used for debugging).
     * @param pad pad to pull data from.
     * @param offset offset to pull from, incremented by this function.
     * @param tag fourcc of the chunk (returned by this function).
     * @param chunk_data buffer (returned by this function).
     * @returns flow status.
     */
    function riff_read_chunk(element: Gst.Element, pad: Gst.Pad, offset: bigint | number, tag: number, chunk_data: Gst.Buffer): Gst.FlowReturn;

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

export default GstRiff;

// END
