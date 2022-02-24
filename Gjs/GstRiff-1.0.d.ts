/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRiff-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstRiff {

const RIFF_IBM_FORMAT_ADPCM: number
const RIFF_IBM_FORMAT_ALAW: number
const RIFF_IBM_FORMAT_MULAW: number
const RIFF_IF_COMPUSE: number
const RIFF_IF_KEYFRAME: number
const RIFF_IF_LIST: number
const RIFF_IF_NO_TIME: number
const RIFF_STRH_DISABLED: number
const RIFF_STRH_VIDEOPALCHANGES: number
const RIFF_WAVE_FORMAT_A52: number
const RIFF_WAVE_FORMAT_AAC: number
const RIFF_WAVE_FORMAT_AAC_AC: number
const RIFF_WAVE_FORMAT_AAC_pm: number
const RIFF_WAVE_FORMAT_ADPCM: number
const RIFF_WAVE_FORMAT_ADPCM_G722: number
const RIFF_WAVE_FORMAT_ADPCM_IMA_DK3: number
const RIFF_WAVE_FORMAT_ADPCM_IMA_DK4: number
const RIFF_WAVE_FORMAT_ADPCM_IMA_WAV: number
const RIFF_WAVE_FORMAT_ALAW: number
const RIFF_WAVE_FORMAT_AMR_NB: number
const RIFF_WAVE_FORMAT_AMR_WB: number
const RIFF_WAVE_FORMAT_ANTEX_ADPCME: number
const RIFF_WAVE_FORMAT_APTX: number
const RIFF_WAVE_FORMAT_AUDIOFILE_AF10: number
const RIFF_WAVE_FORMAT_AUDIOFILE_AF36: number
const RIFF_WAVE_FORMAT_BTV_DIGITAL: number
const RIFF_WAVE_FORMAT_CANOPUS_ATRAC: number
const RIFF_WAVE_FORMAT_CIRRUS: number
const RIFF_WAVE_FORMAT_CONTROL_RES_CR10: number
const RIFF_WAVE_FORMAT_CONTROL_RES_VQLPC: number
const RIFF_WAVE_FORMAT_CREATIVE_ADPCM: number
const RIFF_WAVE_FORMAT_CREATIVE_FASTSPEECH10: number
const RIFF_WAVE_FORMAT_CREATIVE_FASTSPEECH8: number
const RIFF_WAVE_FORMAT_CS2: number
const RIFF_WAVE_FORMAT_CS_IMAADPCM: number
const RIFF_WAVE_FORMAT_CU_CODEC: number
const RIFF_WAVE_FORMAT_DF_G726: number
const RIFF_WAVE_FORMAT_DF_GSM610: number
const RIFF_WAVE_FORMAT_DIALOGIC_OKI_ADPCM: number
const RIFF_WAVE_FORMAT_DIGIADPCM: number
const RIFF_WAVE_FORMAT_DIGIFIX: number
const RIFF_WAVE_FORMAT_DIGIREAL: number
const RIFF_WAVE_FORMAT_DIGISTD: number
const RIFF_WAVE_FORMAT_DIGITAL_G723: number
const RIFF_WAVE_FORMAT_DOLBY_AC2: number
const RIFF_WAVE_FORMAT_DOLBY_AC3_SPDIF: number
const RIFF_WAVE_FORMAT_DSAT_DISPLAY: number
const RIFF_WAVE_FORMAT_DSP_TRUESPEECH: number
const RIFF_WAVE_FORMAT_DTS: number
const RIFF_WAVE_FORMAT_DVI_ADPCM: number
const RIFF_WAVE_FORMAT_ECHOSC1: number
const RIFF_WAVE_FORMAT_ECHOSC3: number
const RIFF_WAVE_FORMAT_ESPCM: number
const RIFF_WAVE_FORMAT_EXTENSIBLE: number
const RIFF_WAVE_FORMAT_FLAC: number
const RIFF_WAVE_FORMAT_FM_TOWNS_SND: number
const RIFF_WAVE_FORMAT_G722_ADPCM: number
const RIFF_WAVE_FORMAT_G723_ADPCM: number
const RIFF_WAVE_FORMAT_G726ADPCM: number
const RIFF_WAVE_FORMAT_G726_ADPCM: number
const RIFF_WAVE_FORMAT_G728_CELP: number
const RIFF_WAVE_FORMAT_G729A: number
const RIFF_WAVE_FORMAT_GSM610: number
const RIFF_WAVE_FORMAT_GSM_AMR_CBR: number
const RIFF_WAVE_FORMAT_GSM_AMR_VBR: number
const RIFF_WAVE_FORMAT_IBM_CVSD: number
const RIFF_WAVE_FORMAT_IEEE_FLOAT: number
const RIFF_WAVE_FORMAT_ILINK_VC: number
const RIFF_WAVE_FORMAT_IMC: number
const RIFF_WAVE_FORMAT_IPI_HSX: number
const RIFF_WAVE_FORMAT_IPI_RPELP: number
const RIFF_WAVE_FORMAT_ISIAUDIO: number
const RIFF_WAVE_FORMAT_ITU_G721_ADPCM: number
const RIFF_WAVE_FORMAT_ITU_G726_ADPCM: number
const RIFF_WAVE_FORMAT_LH_CODEC: number
const RIFF_WAVE_FORMAT_LRC: number
const RIFF_WAVE_FORMAT_LUCENT_G723: number
const RIFF_WAVE_FORMAT_MALDEN_PHONYTALK: number
const RIFF_WAVE_FORMAT_MEDIASONIC_G723: number
const RIFF_WAVE_FORMAT_MEDIASPACE_ADPCM: number
const RIFF_WAVE_FORMAT_MEDIAVISION_ADPCM: number
const RIFF_WAVE_FORMAT_MPEGL12: number
const RIFF_WAVE_FORMAT_MPEGL3: number
const RIFF_WAVE_FORMAT_MSG723: number
const RIFF_WAVE_FORMAT_MSN: number
const RIFF_WAVE_FORMAT_MSRT24: number
const RIFF_WAVE_FORMAT_MULAW: number
const RIFF_WAVE_FORMAT_MVI_MVI2: number
const RIFF_WAVE_FORMAT_NMS_VBXADPCM: number
const RIFF_WAVE_FORMAT_NORRIS: number
const RIFF_WAVE_FORMAT_OKI_ADPCM: number
const RIFF_WAVE_FORMAT_OLIADPCM: number
const RIFF_WAVE_FORMAT_OLICELP: number
const RIFF_WAVE_FORMAT_OLIGSM: number
const RIFF_WAVE_FORMAT_OLIOPR: number
const RIFF_WAVE_FORMAT_OLISBC: number
const RIFF_WAVE_FORMAT_ONLIVE: number
const RIFF_WAVE_FORMAT_PAC: number
const RIFF_WAVE_FORMAT_PACKED: number
const RIFF_WAVE_FORMAT_PCM: number
const RIFF_WAVE_FORMAT_PHILIPS_LPCBB: number
const RIFF_WAVE_FORMAT_PROSODY_1612: number
const RIFF_WAVE_FORMAT_PROSODY_8KBPS: number
const RIFF_WAVE_FORMAT_QDESIGN_MUSIC: number
const RIFF_WAVE_FORMAT_QUALCOMM_HALFRATE: number
const RIFF_WAVE_FORMAT_QUALCOMM_PUREVOICE: number
const RIFF_WAVE_FORMAT_QUARTERDECK: number
const RIFF_WAVE_FORMAT_RAW_SPORT: number
const RIFF_WAVE_FORMAT_RHETOREX_ADPCM: number
const RIFF_WAVE_FORMAT_ROCKWELL_ADPCM: number
const RIFF_WAVE_FORMAT_ROCKWELL_DIGITALK: number
const RIFF_WAVE_FORMAT_RT24: number
const RIFF_WAVE_FORMAT_SANYO_LD_ADPCM: number
const RIFF_WAVE_FORMAT_SBC24: number
const RIFF_WAVE_FORMAT_SIERRA_ADPCM: number
const RIFF_WAVE_FORMAT_SIPROLAB_ACELP4800: number
const RIFF_WAVE_FORMAT_SIPROLAB_ACELP8V3: number
const RIFF_WAVE_FORMAT_SIPROLAB_ACEPLNET: number
const RIFF_WAVE_FORMAT_SIPROLAB_G729: number
const RIFF_WAVE_FORMAT_SIPROLAB_G729A: number
const RIFF_WAVE_FORMAT_SIPROLAB_KELVIN: number
const RIFF_WAVE_FORMAT_SIREN: number
const RIFF_WAVE_FORMAT_SOFTSOUND: number
const RIFF_WAVE_FORMAT_SONARC: number
const RIFF_WAVE_FORMAT_SONIC: number
const RIFF_WAVE_FORMAT_SONIC_LS: number
const RIFF_WAVE_FORMAT_SONY_ATRAC3: number
const RIFF_WAVE_FORMAT_SOUNDSPACE_MUSICOMPRESS: number
const RIFF_WAVE_FORMAT_TPC: number
const RIFF_WAVE_FORMAT_TUBGSM: number
const RIFF_WAVE_FORMAT_UHER_ADPCM: number
const RIFF_WAVE_FORMAT_UNKNOWN: number
const RIFF_WAVE_FORMAT_VIVO_G723: number
const RIFF_WAVE_FORMAT_VIVO_SIREN: number
const RIFF_WAVE_FORMAT_VME_VMPCM: number
const RIFF_WAVE_FORMAT_VORBIS1: number
const RIFF_WAVE_FORMAT_VORBIS1PLUS: number
const RIFF_WAVE_FORMAT_VORBIS2: number
const RIFF_WAVE_FORMAT_VORBIS2PLUS: number
const RIFF_WAVE_FORMAT_VORBIS3: number
const RIFF_WAVE_FORMAT_VORBIS3PLUS: number
const RIFF_WAVE_FORMAT_VOXWARE: number
const RIFF_WAVE_FORMAT_VOXWARE_AC10: number
const RIFF_WAVE_FORMAT_VOXWARE_AC16: number
const RIFF_WAVE_FORMAT_VOXWARE_AC20: number
const RIFF_WAVE_FORMAT_VOXWARE_AC8: number
const RIFF_WAVE_FORMAT_VOXWARE_BYTE_ALIGNED: number
const RIFF_WAVE_FORMAT_VOXWARE_METASOUND: number
const RIFF_WAVE_FORMAT_VOXWARE_METAVOICE: number
const RIFF_WAVE_FORMAT_VOXWARE_RT29HW: number
const RIFF_WAVE_FORMAT_VOXWARE_TQ40: number
const RIFF_WAVE_FORMAT_VOXWARE_TQ60: number
const RIFF_WAVE_FORMAT_VOXWARE_VR12: number
const RIFF_WAVE_FORMAT_VOXWARE_VR18: number
const RIFF_WAVE_FORMAT_VSELP: number
const RIFF_WAVE_FORMAT_WMAV1: number
const RIFF_WAVE_FORMAT_WMAV2: number
const RIFF_WAVE_FORMAT_WMAV3: number
const RIFF_WAVE_FORMAT_WMAV3_L: number
const RIFF_WAVE_FORMAT_WMS: number
const RIFF_WAVE_FORMAT_XEBEC: number
const RIFF_WAVE_FORMAT_YAMAHA_ADPCM: number
const RIFF_WAVE_FORMAT_ZYXEL_ADPCM: number
function riff_create_audio_template_caps(): Gst.Caps
function riff_create_iavs_template_caps(): Gst.Caps
function riff_create_video_template_caps(): Gst.Caps
function riff_init(): void
function riff_parse_chunk(element: Gst.Element, buf: Gst.Buffer, offset: number, fourcc: number, chunk_data: Gst.Buffer): boolean
function riff_parse_file_header(element: Gst.Element, buf: Gst.Buffer, doctype: number): boolean
function riff_parse_info(element: Gst.Element, buf: Gst.Buffer, taglist: Gst.TagList): void
function riff_read_chunk(element: Gst.Element, pad: Gst.Pad, offset: number, tag: number, chunk_data: Gst.Buffer): Gst.FlowReturn
}
export default GstRiff;