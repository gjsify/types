
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gupnpdlnagst-2.0-import.d.ts';
    
/**
 * GUPnPDLNAGst-2.0
 */

import type GstPbutils from '@girs/node-gstpbutils-1.0';
import type GstVideo from '@girs/node-gstvideo-1.0';
import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GstAudio from '@girs/node-gstaudio-1.0';
import type GUPnPDLNA from '@girs/node-gupnpdlna-2.0';

/**
 * This utility function creates a #GUPnPDLNAInformation from
 * #GstDiscovererInfo. Its purpose is mainly to pass its result to
 * gupnp_dlna_profile_guesser_guess_profile_from_info() to avoid
 * rediscovering of a URI. Created #GUPnPDLNAInformation takes a
 * reference on `info`.
 * @param info A #GstDiscovererInfo object.
 * @returns A #GUPnPDLNAInformation. Unref it when done with it.
 */
export function utilsInformationFromDiscovererInfo(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information
// END