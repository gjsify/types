
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GUPnPDLNAGst-2.0
 */

import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type GUPnPDLNA from '@girs/gupnpdlna-2.0';

/**
 * This utility function creates a #GUPnPDLNAInformation from
 * #GstDiscovererInfo. Its purpose is mainly to pass its result to
 * gupnp_dlna_profile_guesser_guess_profile_from_info() to avoid
 * rediscovering of a URI. Created #GUPnPDLNAInformation takes a
 * reference on `info`.
 * @param info A #GstDiscovererInfo object.
 * @returns A #GUPnPDLNAInformation. Unref it when done with it.
 */
export function utils_information_from_discoverer_info(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END