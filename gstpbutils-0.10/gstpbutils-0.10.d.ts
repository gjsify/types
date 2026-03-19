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
import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstPbutils {
    /**
     * GstPbutils-0.10
     */

    export namespace GstInstallPluginsReturn {
        export const $gtype: GObject.GType<GstInstallPluginsReturn>;
    }

    /**
     * Result codes returned by `gst_install_plugins_async()` and
     * `gst_install_plugins_sync()`, and also the result code passed to the
     * {@link GstPbutils.GstInstallPluginsResultFunc} specified with `gst_install_plugin_async()`.
     * These codes indicate success or failure of starting an external installer
     * program and to what extent the requested plugins could be installed.
     * @gir-type Enum
     * @since 0.10.12
     */
    enum GstInstallPluginsReturn {
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

    /**
     * @param details
     * @param ctx
     * @param func
     */
    function gst_install_plugins_async(
        details: string[],
        ctx: GstInstallPluginsContext,
        func: GstInstallPluginsResultFunc,
    ): GstInstallPluginsReturn;
    function gst_install_plugins_installation_in_progress(): boolean;
    /**
     * @param ret
     */
    function gst_install_plugins_return_get_name(ret: GstInstallPluginsReturn | null): string;
    function gst_install_plugins_supported(): boolean;
    /**
     * @param details
     * @param ctx
     */
    function gst_install_plugins_sync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn;
    /**
     * @param msg
     */
    function gst_is_missing_plugin_message(msg: Gst.Message): boolean;
    /**
     * @param decode_caps
     */
    function gst_missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string;
    /**
     * @param element
     * @param decode_caps
     */
    function gst_missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message;
    /**
     * @param factory_name
     */
    function gst_missing_element_installer_detail_new(factory_name: string): string;
    /**
     * @param element
     * @param factory_name
     */
    function gst_missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message;
    /**
     * @param encode_caps
     */
    function gst_missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string;
    /**
     * @param element
     * @param encode_caps
     */
    function gst_missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message;
    /**
     * @param msg
     */
    function gst_missing_plugin_message_get_description(msg: Gst.Message): string;
    /**
     * @param msg
     */
    function gst_missing_plugin_message_get_installer_detail(msg: Gst.Message): string;
    /**
     * @param protocol
     */
    function gst_missing_uri_sink_installer_detail_new(protocol: string): string;
    /**
     * @param element
     * @param protocol
     */
    function gst_missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message;
    /**
     * @param protocol
     */
    function gst_missing_uri_source_installer_detail_new(protocol: string): string;
    /**
     * @param element
     * @param protocol
     */
    function gst_missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message;
    /**
     * @param taglist
     * @param codec_tag
     * @param caps
     */
    function gst_pb_utils_add_codec_description_to_tag_list(
        taglist: Gst.TagList,
        codec_tag: string,
        caps: Gst.Caps,
    ): boolean;
    /**
     * @param caps
     */
    function gst_pb_utils_get_codec_description(caps: Gst.Caps): string;
    /**
     * @param caps
     */
    function gst_pb_utils_get_decoder_description(caps: Gst.Caps): string;
    /**
     * @param factory_name
     */
    function gst_pb_utils_get_element_description(factory_name: string): string;
    /**
     * @param caps
     */
    function gst_pb_utils_get_encoder_description(caps: Gst.Caps): string;
    /**
     * @param protocol
     */
    function gst_pb_utils_get_sink_description(protocol: string): string;
    /**
     * @param protocol
     */
    function gst_pb_utils_get_source_description(protocol: string): string;
    function gst_pb_utils_init(): void;
    /**
     * @gir-type Callback
     */
    interface GstInstallPluginsResultFunc {
        (result: GstInstallPluginsReturn): void;
    }
    /**
     * Opaque context structure for the plugin installation. Use the provided
     * API to set details on it.
     * @gir-type Struct
     * @since 0.10.12
     */
    class GstInstallPluginsContext {
        static $gtype: GObject.GType<GstInstallPluginsContext>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): GstInstallPluginsContext;

        // Methods

        free(): void;
        /**
         * @param xid
         */
        set_xid(xid: number): void;
    }

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
