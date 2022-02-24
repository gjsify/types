/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPbutils-0.10
 */

import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstPbutils {

/**
 * Result codes returned by gst_install_plugins_async() and
 * gst_install_plugins_sync(), and also the result code passed to the
 * #GstInstallPluginsResultFunc specified with gst_install_plugin_async().
 * These codes indicate success or failure of starting an external installer
 * program and to what extent the requested plugins could be installed.
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
function gstInstallPluginsAsync(details: string[], ctx: GstInstallPluginsContext, func: GstInstallPluginsResultFunc): GstInstallPluginsReturn
function gstInstallPluginsInstallationInProgress(): boolean
function gstInstallPluginsReturnGetName(ret: GstInstallPluginsReturn): string
function gstInstallPluginsSupported(): boolean
function gstInstallPluginsSync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn
function gstIsMissingPluginMessage(msg: Gst.Message): boolean
function gstMissingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string
function gstMissingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
function gstMissingElementInstallerDetailNew(factoryName: string): string
function gstMissingElementMessageNew(element: Gst.Element, factoryName: string): Gst.Message
function gstMissingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string
function gstMissingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
function gstMissingPluginMessageGetDescription(msg: Gst.Message): string
function gstMissingPluginMessageGetInstallerDetail(msg: Gst.Message): string
function gstMissingUriSinkInstallerDetailNew(protocol: string): string
function gstMissingUriSinkMessageNew(element: Gst.Element, protocol: string): Gst.Message
function gstMissingUriSourceInstallerDetailNew(protocol: string): string
function gstMissingUriSourceMessageNew(element: Gst.Element, protocol: string): Gst.Message
function gstPbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string, caps: Gst.Caps): boolean
function gstPbUtilsGetCodecDescription(caps: Gst.Caps): string
function gstPbUtilsGetDecoderDescription(caps: Gst.Caps): string
function gstPbUtilsGetElementDescription(factoryName: string): string
function gstPbUtilsGetEncoderDescription(caps: Gst.Caps): string
function gstPbUtilsGetSinkDescription(protocol: string): string
function gstPbUtilsGetSourceDescription(protocol: string): string
function gstPbUtilsInit(): void
/**
 * The prototype of the callback function that will be called once the
 * external plugin installer program has returned. You only need to provide
 * a callback function if you are using the asynchronous interface.
 */
interface GstInstallPluginsResultFunc {
    (result: GstInstallPluginsReturn): void
}
class GstInstallPluginsContext {
    /* Methods of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext */
    free(): void
    setXid(xid: number): void
    static name: string
    static new(): GstInstallPluginsContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GstInstallPluginsContext
}
}
export default GstPbutils;