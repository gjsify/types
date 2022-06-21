// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNAGst-2.0
 */

import type * as Gjs from './Gjs';
import type GstPbutils from './GstPbutils-1.0';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';
import type GUPnPDLNA from './GUPnPDLNA-2.0';

export namespace GUPnPDLNAGst {

/**
 * This utility function creates a #GUPnPDLNAInformation from
 * #GstDiscovererInfo. Its purpose is mainly to pass its result to
 * gupnp_dlna_profile_guesser_guess_profile_from_info() to avoid
 * rediscovering of a URI. Created #GUPnPDLNAInformation takes a
 * reference on `info`.
 * @param info A #GstDiscovererInfo object.
 */
function utils_information_from_discoverer_info(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information
}
export default GUPnPDLNAGst;