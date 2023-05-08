
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstPbutils-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Result codes returned by gst_install_plugins_async() and
 * gst_install_plugins_sync(), and also the result code passed to the
 * #GstInstallPluginsResultFunc specified with gst_install_plugin_async().
 * These codes indicate success or failure of starting an external installer
 * program and to what extent the requested plugins could be installed.
 */
export enum GstInstallPluginsReturn {
    SUCCESS,
    NOT_FOUND,
    ERROR,
    PARTIAL_SUCCESS,
    USER_ABORT,
    CRASHED,
    INVALID,
    STARTED_OK,
    INTERNAL_FAILURE,
    HELPER_MISSING,
    INSTALL_IN_PROGRESS,
}
export function gst_install_plugins_async(details: string[], ctx: GstInstallPluginsContext, func: GstInstallPluginsResultFunc): GstInstallPluginsReturn
export function gst_install_plugins_installation_in_progress(): boolean
export function gst_install_plugins_return_get_name(ret: GstInstallPluginsReturn): string | null
export function gst_install_plugins_supported(): boolean
export function gst_install_plugins_sync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn
export function gst_is_missing_plugin_message(msg: Gst.Message): boolean
export function gst_missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string | null
export function gst_missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message
export function gst_missing_element_installer_detail_new(factory_name: string | null): string | null
export function gst_missing_element_message_new(element: Gst.Element, factory_name: string | null): Gst.Message
export function gst_missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string | null
export function gst_missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message
export function gst_missing_plugin_message_get_description(msg: Gst.Message): string | null
export function gst_missing_plugin_message_get_installer_detail(msg: Gst.Message): string | null
export function gst_missing_uri_sink_installer_detail_new(protocol: string | null): string | null
export function gst_missing_uri_sink_message_new(element: Gst.Element, protocol: string | null): Gst.Message
export function gst_missing_uri_source_installer_detail_new(protocol: string | null): string | null
export function gst_missing_uri_source_message_new(element: Gst.Element, protocol: string | null): Gst.Message
export function gst_pb_utils_add_codec_description_to_tag_list(taglist: Gst.TagList, codec_tag: string | null, caps: Gst.Caps): boolean
export function gst_pb_utils_get_codec_description(caps: Gst.Caps): string | null
export function gst_pb_utils_get_decoder_description(caps: Gst.Caps): string | null
export function gst_pb_utils_get_element_description(factory_name: string | null): string | null
export function gst_pb_utils_get_encoder_description(caps: Gst.Caps): string | null
export function gst_pb_utils_get_sink_description(protocol: string | null): string | null
export function gst_pb_utils_get_source_description(protocol: string | null): string | null
export function gst_pb_utils_init(): void
/**
 * The prototype of the callback function that will be called once the
 * external plugin installer program has returned. You only need to provide
 * a callback function if you are using the asynchronous interface.
 * @callback 
 * @param result whether the installation of the requested plugins succeeded or not
 */
export interface GstInstallPluginsResultFunc {
    (result: GstInstallPluginsReturn): void
}
export interface GstInstallPluginsContext {

    // Owm methods of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext

    free(): void
    set_xid(xid: number): void
}

/**
 * Opaque context structure for the plugin installation. Use the provided
 * API to set details on it.
 * @record 
 */
export class GstInstallPluginsContext {

    // Own properties of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext

    static name: string

    // Constructors of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext

    constructor() 
    static new(): GstInstallPluginsContext
}

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