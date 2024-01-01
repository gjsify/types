
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './edataserverui-1.2-ambient.d.ts';
import './edataserverui-1.2-import.d.ts';
/**
 * EDataServerUI-1.2
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type EDataServer from '@girs/edataserver-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type ECal from '@girs/ecal-2.0';
import type ICalGLib from '@girs/icalglib-3.0';

export namespace EDataServerUI {

/**
 * An #ECredentialsPrompter prompt flags, influencing behaviour
 * of the e_credentials_prompter_prompt().
 * @bitfield 
 */
enum CredentialsPrompterPromptFlags {
    /**
     * No flag is set.
     */
    NONE,
    /**
     * If set, any source changes during the credentials prompts, like
     *   the "remember-password" or user name changes, will be automatically
     *   stored in the source (written on the disk).
     */
    ALLOW_SOURCE_SAVE,
    /**
     * If set, the stored credentials will be returned first. If there are no
     *   credentials saved, then the user will be asked. Any credentials
     *   reprompt should not have set this flag.
     */
    ALLOW_STORED_CREDENTIALS,
}
function buffer_tagger_connect(textview: Gtk.TextView): void
function buffer_tagger_disconnect(textview: Gtk.TextView): void
function buffer_tagger_update_tags(textview: Gtk.TextView): void
/**
 * Converts `flags` into a localized text description of the set bits, one
 * bit description per line. If no bit is set, then an empty string is
 * returned.
 * @param flags a #GTlsCertificateFlags to describe
 * @returns A newly allocated string with text description  of @flags. Free the returned pointer with g_free() when no longer needed.
 */
function trust_prompt_describe_certificate_errors(flags: Gio.TlsCertificateFlags): string | null
/**
 * Similar to e_trust_prompt_run_modal(), except it also manages all the necessary things
 * around the `source<`!-- -->'s SSL/TLS trust properties when it also contains %E_SOURCE_EXTENSION_WEBDAV,
 * thus the SSL/TLS trust on the WebDAV `source` is properly updated based on the user's choice.
 * The call is finished with e_trust_prompt_run_for_source_finish(),
 * which also returns the user's choice. The finish happens in the `callback`.
 * This is necessary, because the `source` can be also saved.
 * 
 * The function fails, if the `source` doesn't contain the %E_SOURCE_EXTENSION_AUTHENTICATION.
 * 
 * Note: The dialog is not shown when the stored certificate trust in the WebDAV `source`
 *    matches the `certificate_pem` and the stored result is #E_TRUST_PROMPT_RESPONSE_REJECT.
 * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
 * @param source an #ESource, with %E_SOURCE_EXTENSION_AUTHENTICATION
 * @param certificate_pem a PEM-encoded certificate for which to show the trust prompt
 * @param certificate_errors errors of the `certificate_pem`
 * @param error_text an optional error text to show in the dialog; can be %NULL
 * @param allow_source_save whether can also save any `source` changes
 * @param cancellable a #GCancellable, or %NULL
 * @param callback a callback to call, when the prompt (an `source` save) is done
 */
function trust_prompt_run_for_source<Z = unknown>(parent: Gtk.Window, source: EDataServer.Source, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error_text: string | null, allow_source_save: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
/**
 * Finishes the operation started with e_trust_prompt_run_for_source().
 * The `response` will contain a code of the user's choice.
 * The #E_TRUST_PROMPT_RESPONSE_UNKNOWN is used, when the user cancelled the trust
 * prompt dialog and no changes are made with the `source`.
 * 
 * If an error occurs, the function sets `error` and returns %FALSE.
 * @param source an #ESource which was used with e_trust_prompt_run_for_source()
 * @param result a #GAsyncResult
 * @param response an output argument, user's response to the trust prompt
 * @returns %TRUE on success, %FALSE on error
 */
function trust_prompt_run_for_source_finish(source: EDataServer.Source, result: Gio.AsyncResult, response: EDataServer.TrustPromptResponse): boolean
/**
 * Runs modal (doesn't return until the dialog is closed) a trust prompt dialog,
 * it is a prompt whether a user wants to accept or reject the `certificate_pem`
 * for the `host` due to the `certificate_errors` errors.
 * 
 * The pair `source_extension` and `source_display_name` influences the trust prompt message.
 * If both are set, then the message also contains which source failed to connect according
 * to these two arguments.
 * 
 * The dialog can contain a custom error text, passed in as `error_text`.
 * The error might be a detailed error string returned by the server. If set,
 * it is prefixed with "Detailed error:" string.
 * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
 * @param source_extension an #ESource extension, to identify a kind of the source; or %NULL
 * @param source_display_name an #ESource display name, to identify what prompts; or %NULL
 * @param host a host name to which the certificate belongs
 * @param certificate_pem a PEM-encoded certificate for which to show the trust prompt
 * @param certificate_errors errors of the `certificate_pem`
 * @param error_text an optional error text to show in the dialog; can be %NULL
 * @returns A code of the user's choice. The #E_TRUST_PROMPT_RESPONSE_UNKNOWN    is returned, when the user cancelled the trust prompt dialog.
 */
function trust_prompt_run_modal(parent: Gtk.Window, source_extension: string | null, source_display_name: string | null, host: string, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error_text: string | null): EDataServer.TrustPromptResponse
interface CredentialsPrompterLoopPromptFunc {
    (prompter: CredentialsPrompter, source: EDataServer.Source, credentials: EDataServer.NamedParameters, cancellable: Gio.Cancellable | null): boolean
}
module CellRendererColor {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor

        rgba?: Gdk.RGBA | null
    }

}

interface CellRendererColor {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    rgba: Gdk.RGBA

    // Own fields of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    parent: Gtk.CellRenderer
    priv: CellRendererColorPrivate

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    connect(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CellRendererColor extends Gtk.CellRenderer {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    static name: string
    static $gtype: GObject.GType<CellRendererColor>

    // Constructors of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    constructor(config?: CellRendererColor.ConstructorProperties) 
    constructor() 
    static new(): CellRendererColor
    _init(config?: CellRendererColor.ConstructorProperties): void
}

module CertificateWidget {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ScrolledWindow.ConstructorProperties {
    }

}

interface CertificateWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    container: any

    // Own fields of EDataServerUI-1.2.EDataServerUI.CertificateWidget

    parent: Gtk.ScrolledWindow & Gtk.Container
    priv: any

    // Owm methods of EDataServerUI-1.2.EDataServerUI.CertificateWidget

    /**
     * Updates the content of the `self` with the certificate information
     * described by the `der_data` of the length `der_data_len` in the DER
     * format.
     * 
     * The content of the `self` is cleared when the `der_data` is %NULL.
     * @param der_data certificate data in DER format, or %NULL
     * @param der_data_len length of the `der_data`
     */
    set_der(der_data: any | null, der_data_len: number): void
    /**
     * Updates the content of the `self` with the certificate information
     * described by the `pem_data` in the PEM format.
     * 
     * The content of the `self` is cleared when the `pem_data` is %NULL.
     * @param pem_data certificate data in PEM format, or %NULL
     */
    set_pem(pem_data: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CertificateWidget

    connect(sigName: "notify::hadjustment", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscrollbar-policy", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscrollbar-policy", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::kinetic-scrolling", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-scrolling", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-scrolling", ...args: any[]): void
    connect(sigName: "notify::max-content-height", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-height", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-height", ...args: any[]): void
    connect(sigName: "notify::max-content-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-width", ...args: any[]): void
    connect(sigName: "notify::min-content-height", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-height", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-height", ...args: any[]): void
    connect(sigName: "notify::min-content-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-width", ...args: any[]): void
    connect(sigName: "notify::overlay-scrolling", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay-scrolling", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay-scrolling", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-height", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-height", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-height", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-width", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscrollbar-policy", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscrollbar-policy", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::window-placement", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement", ...args: any[]): void
    connect(sigName: "notify::window-placement-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement-set", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CertificateWidget extends Gtk.ScrolledWindow {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CertificateWidget

    static name: string
    static $gtype: GObject.GType<CertificateWidget>

    // Constructors of EDataServerUI-1.2.EDataServerUI.CertificateWidget

    constructor(config?: CertificateWidget.ConstructorProperties) 
    /**
     * Creates a new #ECertificateWidget
     * @constructor 
     * @returns a new #ECertificateWidget
     */
    constructor() 
    /**
     * Creates a new #ECertificateWidget
     * @constructor 
     * @returns a new #ECertificateWidget
     */
    static new(): CertificateWidget

    // Overloads of new

    /**
     * Creates a new scrolled window.
     * 
     * The two arguments are the scrolled window’s adjustments; these will be
     * shared with the scrollbars and the child widget to keep the bars in sync
     * with the child. Usually you want to pass %NULL for the adjustments, which
     * will cause the scrolled window to create them for you.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     * @returns a new scrolled window
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.ScrolledWindow
    _init(config?: CertificateWidget.ConstructorProperties): void
}

module CredentialsPrompter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `get-dialog-parent`
     */
    interface GetDialogParentSignalCallback {
        ($obj: CredentialsPrompter): Gtk.Window | null
    }

    /**
     * Signal callback interface for `get-dialog-parent-full`
     */
    interface GetDialogParentFullSignalCallback {
        ($obj: CredentialsPrompter, auth_source: EDataServer.Source | null): Gtk.Window | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

        /**
         * Whether the #ECredentialsPrompter can response to credential
         * requests automatically.
         */
        auto_prompt?: boolean | null
        /**
         * The #ESourceRegistry object, to whose credential requests the prompter listens.
         */
        registry?: EDataServer.SourceRegistry | null
        /**
         * Whether the #ECredentialsPrompter can response to credential
         * requests automatically.
         */
        autoPrompt?: boolean | null
    }

}

interface CredentialsPrompter extends EDataServer.Extensible {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    /**
     * Whether the #ECredentialsPrompter can response to credential
     * requests automatically.
     */
    auto_prompt: boolean
    /**
     * Whether the #ECredentialsPrompter can response to credential
     * requests automatically.
     */
    autoPrompt: boolean
    /**
     * The #ESourceCredentialsProvider object, which the prompter uses.
     */
    readonly provider: EDataServer.SourceCredentialsProvider
    /**
     * The #ESourceRegistry object, to whose credential requests the prompter listens.
     */
    readonly registry: EDataServer.SourceRegistry

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    parent: GObject.Object
    priv: CredentialsPrompterPrivate

    // Owm methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    /**
     * Completes an ongoing credentials prompt on idle, by finishing the `async_result`.
     * This function is meant to be used by an #ECredentialsPrompterImpl implementation.
     * To actually finish the credentials prompt previously started with
     * e_credentials_prompter_prompt(), the e_credentials_prompter_prompt_finish() should
     * be called from the provided callback.
     * 
     * Using %NULL `credentials` will result in a G_IO_ERROR_CANCELLED error, if
     * no other `error` is provided.
     * @param async_result a #GSimpleAsyncResult
     * @param source an #ESource, on which the prompt was started
     * @param credentials credentials, as provided by a user, on %NULL, when the prompt was cancelled
     * @param error a resulting #GError, or %NULL
     */
    complete_prompt_call(async_result: Gio.SimpleAsyncResult, source: EDataServer.Source, credentials: EDataServer.NamedParameters | null, error: GLib.Error): void
    /**
     * Returns, whether can respond to credential prompts automatically.
     * Default value is %TRUE.
     * 
     * This property does not influence direct calls of e_credentials_prompter_prompt().
     * @returns Whether can respond to credential prompts automatically.
     */
    get_auto_prompt(): boolean
    /**
     * Returns whether the auto-prompt is disabled for the given `source`.
     * All sources can be auto-prompted by default. This is a complementary
     * value for the ECredentialsPrompter::auto-prompt property.
     * 
     * This value does not influence direct calls of e_credentials_prompter_prompt().
     * @param source an #ESource
     * @returns Whether the auto-prompt is disabled for the given @source
     */
    get_auto_prompt_disabled_for(source: EDataServer.Source): boolean
    /**
     * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
     * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
     * registered or the current callbacks don't have any suitable window, then there's
     * chosen the last active window from the default GApplication, if any available.
     * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
     */
    get_dialog_parent(): Gtk.Window | null
    /**
     * Returns a #GtkWindow, which should be used as a dialog parent for the `auth_source`.
     * 
     * This is determined by an ECredentialsPrompter::get-dialog-parent-full signal emission
     * and an ECredentialsPrompter::get-dialog-parent when the first doesn't return anything.
     * If there is no callback registered or the current callbacks don't have any suitable
     * window, then there's chosen the last active window from the default GApplication,
     * if any available.
     * @param auth_source an #ESource
     * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
     */
    get_dialog_parent_full(auth_source: EDataServer.Source | null): Gtk.Window | null
    /**
     * Returns an #ESourceCredentialsProvider, which the `prompter` uses.
     * @returns an #ESourceCredentialsProvider, which the @prompter uses.
     */
    get_provider(): EDataServer.SourceCredentialsProvider
    /**
     * Returns an #ESourceRegistry, to which the `prompter` listens.
     * @returns an #ESourceRegistry, to which the @prompter listens.
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Runs a credentials prompt loop for `source,` as long as the `func` doesn't
     * indicate that the provided credentials can be used to successfully
     * authenticate against `source<`!-- -->'s server, or that the `func`
     * returns %FALSE. The loop is also teminated when a used cancels
     * the credentials prompt or the `cancellable` is cancelled, though
     * not sooner than the credentials prompt dialog is closed.
     * 
     * Note: The function doesn't return until the loop is terminated, either
     *    successfully or unsuccessfully. The function can be called from any
     *    thread, though a dedicated thread is preferred.
     * @param source an #ESource to be prompted credentials for
     * @param flags a bit-or of #ECredentialsPrompterPromptFlags initial flags
     * @param func an #ECredentialsPrompterLoopPromptFunc user function to call to check provided credentials
     * @param cancellable an optional #GCancellable, or %NULL
     * @returns %TRUE, when the credentials were provided successfully and they   can be used to authenticate the @source; %FALSE otherwise.
     */
    loop_prompt_sync(source: EDataServer.Source, flags: CredentialsPrompterPromptFlags, func: CredentialsPrompterLoopPromptFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Process all enabled sources with connection state #E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS,
     * like if they just asked for its credentials for the first time.
     */
    process_awaiting_credentials(): void
    /**
     * Continues a credential prompt for `source`. Returns, whether anything will be done.
     * The %FALSE either means that the `source<`!-- -->'s connection status is not
     * the %E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS or it is disabled.
     * @param source an #ESource
     * @returns Whether continues with the credentials prompt.
     */
    process_source(source: EDataServer.Source): boolean
    /**
     * Asks the `prompter` to prompt for credentials, which are returned
     * to the caller through `callback,` when available.The `flags` are ignored,
     * when the `callback` is %NULL; the credentials are passed to the `source`
     * with e_source_invoke_authenticate() directly, in this case.
     * Call e_credentials_prompter_prompt_finish() in `callback` to get to
     * the provided credentials.
     * @param source an #ESource, which prompt the credentials for
     * @param error_text Additional error text to show to a user, or %NULL
     * @param flags a bit-or of #ECredentialsPrompterPromptFlags
     * @param callback a callback to call when the credentials are ready, or %NULL
     */
    prompt(source: EDataServer.Source, error_text: string | null, flags: CredentialsPrompterPromptFlags, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes a credentials prompt previously started with e_credentials_prompter_prompt().
     * The `out_source` will have set a referenced #ESource, for which the prompt
     * was started. Unref it, when  no longer needed. Similarly the `out_credentials`
     * will have set a newly allocated #ENamedParameters structure with provided credentials,
     * which should be freed with e_named_credentials_free() when no longer needed.
     * Both output arguments will be set to %NULL on error and %FALSE will be returned.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE otherwise.
     */
    prompt_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_source */ EDataServer.Source | null, /* out_credentials */ EDataServer.NamedParameters | null ]
    /**
     * Registers a prompter implementation for a given authentication method. If there is
     * registered a prompter for the same `authentication_method,` then the function does
     * nothing, otherwise it adds its own reference on the `prompter_impl,` and uses it
     * for that authentication method. One `prompter_impl` can be registered for multiple
     * authentication methods.
     * 
     * A special value %NULL can be used for the `authentication_method,` which means
     * a default credentials prompter, that is to be used when there is no prompter
     * registered for the exact authentication method.
     * @param authentication_method an authentication method to registr `prompter_impl` for; or %NULL
     * @param prompter_impl an #ECredentialsPrompterImpl
     * @returns %TRUE on success, %FALSE on failure or when there was another prompter implementation registered for the given authentication method.
     */
    register_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): boolean
    /**
     * Sets whether can respond to credential prompts automatically. That means that
     * whenever any ESource will ask for credentials, it'll try to provide them.
     * 
     * Use e_credentials_prompter_set_auto_prompt_disabled_for() to influence
     * auto-prompt per an #ESource.
     * 
     * This property does not influence direct calls of e_credentials_prompter_prompt().
     * @param auto_prompt new value of the auto-prompt property
     */
    set_auto_prompt(auto_prompt: boolean): void
    /**
     * Sets whether the auto-prompt should be disabled for the given `source`.
     * All sources can be auto-prompted by default. This is a complementary
     * value for the ECredentialsPrompter::auto-prompt property.
     * 
     * This value does not influence direct calls of e_credentials_prompter_prompt().
     * @param source an #ESource
     * @param is_disabled whether the auto-prompt should be disabled for this `source`
     */
    set_auto_prompt_disabled_for(source: EDataServer.Source, is_disabled: boolean): void
    /**
     * Unregisters previously registered `prompter_impl` for the given `autnetication_method` with
     * e_credentials_prompter_register_impl(). Function does nothing, if no such authentication
     * method is registered or if it has set a different prompter implementation.
     * @param authentication_method an authentication method to registr `prompter_impl` for; or %NULL
     * @param prompter_impl an #ECredentialsPrompterImpl
     */
    unregister_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): void

    // Own virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    /**
     * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
     * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
     * registered or the current callbacks don't have any suitable window, then there's
     * chosen the last active window from the default GApplication, if any available.
     * @virtual 
     * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
     */
    vfunc_get_dialog_parent(): Gtk.Window | null

    // Own signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    connect(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): number
    connect_after(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): number
    emit(sigName: "get-dialog-parent", ...args: any[]): void
    connect(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): number
    connect_after(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): number
    emit(sigName: "get-dialog-parent-full", auth_source: EDataServer.Source | null, ...args: any[]): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    connect(sigName: "notify::auto-prompt", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-prompt", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-prompt", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CredentialsPrompter extends GObject.Object {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    static name: string
    static $gtype: GObject.GType<CredentialsPrompter>

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    constructor(config?: CredentialsPrompter.ConstructorProperties) 
    /**
     * Creates a new #ECredentialsPrompter, which listens for credential requests
     * from `registry`.
     * @constructor 
     * @param registry an #ESourceRegistry to have the prompter listen to
     * @returns a new #ECredentialsPrompter
     */
    constructor(registry: EDataServer.SourceRegistry) 
    /**
     * Creates a new #ECredentialsPrompter, which listens for credential requests
     * from `registry`.
     * @constructor 
     * @param registry an #ESourceRegistry to have the prompter listen to
     * @returns a new #ECredentialsPrompter
     */
    static new(registry: EDataServer.SourceRegistry): CredentialsPrompter
    _init(config?: CredentialsPrompter.ConstructorProperties): void
}

module CredentialsPrompterImpl {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prompt-finished`
     */
    interface PromptFinishedSignalCallback {
        ($obj: CredentialsPrompterImpl, prompt_id: any | null, credentials: EDataServer.NamedParameters | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
    }

}

interface CredentialsPrompterImpl {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    parent: EDataServer.Extension
    priv: CredentialsPrompterImplPrivate

    // Owm methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    /**
     * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
     * @param prompt_id a prompt ID to cancel
     */
    cancel_prompt(prompt_id: any | null): void
    /**
     * Returns an #ECredentialsPrompter with which the `prompter_impl` is associated.
     * @returns an #ECredentialsPrompter
     */
    get_credentials_prompter(): any | null
    /**
     * Runs a credentials prompt for the `prompter_impl`. The actual prompter implementation
     * receives the prompt through ECredentialsPrompterImplClass::process_prompt(), where the given
     * `prompt_id` is used for an identification. The prompt is left 'active' as long as it is
     * not finished with a call of e_credentials_prompter_impl_prompt_finish(). This should be
     * called even for cancelled prompts. The prompt can be cancelled before it's processed,
     * using the e_credentials_prompter_impl_cancel_prompt().
     * 
     * The `auth_source` can be the same as `cred_source,` in case the credentials
     * are stored only for that particular source. If the sources share credentials,
     * which can be a case when the `auth_source` is part of a collection, then
     * the `cred_stource` can be that collection source.
     * @param prompt_id a prompt ID to be passed to e_credentials_prompter_impl_prompt_finish()
     * @param auth_source an #ESource, to prompt the credentials for (the source which asked for credentials)
     * @param cred_source a parent #ESource, from which credentials were taken, or should be stored to
     * @param error_text an optional error text from the previous credentials prompt; can be %NULL
     * @param credentials credentials, as saved in keyring; can be empty, but not %NULL
     */
    prompt(prompt_id: any | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    /**
     * The actual credentials prompt implementation finishes a previously started
     * credentials prompt `prompt_id` with ECredentialsPrompterImplClass::process_prompt()
     * by a call to this function. This function should be called regardless the prompt
     * was or was not cancelled with e_credentials_prompter_impl_cancel_prompt().
     * Once the prompt is finished another queued is started, if any pending exists.
     * Use %NULL `credentials` for cancelled prompts, otherwise the credentials are used
     * for authentication of the associated #ESource.
     * @param prompt_id a prompt ID
     * @param credentials credentials to use; can be %NULL for cancelled prompts
     */
    prompt_finish(prompt_id: any | null, credentials: EDataServer.NamedParameters | null): void

    // Own virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    /**
     * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
     * @virtual 
     * @param prompt_id a prompt ID to cancel
     */
    vfunc_cancel_prompt(prompt_id: any | null): void
    vfunc_process_prompt(prompt_id: any | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: any | null, credentials: EDataServer.NamedParameters): void

    // Own signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    connect(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): number
    connect_after(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): number
    emit(sigName: "prompt-finished", prompt_id: any | null, credentials: EDataServer.NamedParameters | null, ...args: any[]): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    connect(sigName: "notify::extensible", callback: (($obj: CredentialsPrompterImpl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: (($obj: CredentialsPrompterImpl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Credentials prompter implementation base structure. The descendants
 * implement ECredentialsPrompterImpl::prompt(), which is used to
 * prompt for credentials. The descendants are automatically registered
 * into an #ECredentialsPrompter.
 * @class 
 */
class CredentialsPrompterImpl extends EDataServer.Extension {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    static name: string
    static $gtype: GObject.GType<CredentialsPrompterImpl>

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    constructor(config?: CredentialsPrompterImpl.ConstructorProperties) 
    _init(config?: CredentialsPrompterImpl.ConstructorProperties): void
}

module CredentialsPrompterImplOAuth2 {

    // Constructor properties interface

    interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
    }

}

interface CredentialsPrompterImplOAuth2 {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    parent: CredentialsPrompterImpl & EDataServer.Extension
    priv: any

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    connect(sigName: "notify::extensible", callback: (($obj: CredentialsPrompterImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: (($obj: CredentialsPrompterImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CredentialsPrompterImplOAuth2 extends CredentialsPrompterImpl {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    static name: string
    static $gtype: GObject.GType<CredentialsPrompterImplOAuth2>

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    constructor(config?: CredentialsPrompterImplOAuth2.ConstructorProperties) 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplOAuth2.
     * @constructor 
     * @returns a newly created #ECredentialsPrompterImplOAuth2,    which should be freed with g_object_unref() when no longer needed.
     */
    constructor() 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplOAuth2.
     * @constructor 
     * @returns a newly created #ECredentialsPrompterImplOAuth2,    which should be freed with g_object_unref() when no longer needed.
     */
    static new(): CredentialsPrompterImplOAuth2
    _init(config?: CredentialsPrompterImplOAuth2.ConstructorProperties): void
}

module CredentialsPrompterImplPassword {

    // Constructor properties interface

    interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
    }

}

interface CredentialsPrompterImplPassword {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    parent: CredentialsPrompterImpl & EDataServer.Extension
    priv: any

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    connect(sigName: "notify::extensible", callback: (($obj: CredentialsPrompterImplPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: (($obj: CredentialsPrompterImplPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CredentialsPrompterImplPassword extends CredentialsPrompterImpl {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    static name: string
    static $gtype: GObject.GType<CredentialsPrompterImplPassword>

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    constructor(config?: CredentialsPrompterImplPassword.ConstructorProperties) 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplPassword.
     * @constructor 
     * @returns a newly created #ECredentialsPrompterImplPassword,    which should be freed with g_object_unref() when no longer needed.
     */
    constructor() 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplPassword.
     * @constructor 
     * @returns a newly created #ECredentialsPrompterImplPassword,    which should be freed with g_object_unref() when no longer needed.
     */
    static new(): CredentialsPrompterImplPassword
    _init(config?: CredentialsPrompterImplPassword.ConstructorProperties): void
}

module RemindersWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        ($obj: RemindersWidget, object: ECal.ReminderData): boolean
    }

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: RemindersWidget): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, EDataServer.Extensible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget

        watcher?: ECal.ReminderWatcher | null
    }

}

interface RemindersWidget extends Atk.ImplementorIface, EDataServer.Extensible, Gtk.Buildable, Gtk.Orientable {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    readonly empty: boolean
    readonly watcher: ECal.ReminderWatcher

    // Owm methods of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    get_paned(): Gtk.Paned
    get_settings(): Gio.Settings

    // Overloads of get_settings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     * @returns the relevant #GtkSettings object
     */
    get_settings(): Gtk.Settings
    get_tree_view(): Gtk.TreeView
    get_watcher(): ECal.ReminderWatcher
    is_empty(): boolean
    /**
     * Shows a warning in the GUI with the `error` message, optionally prefixed
     * with `prefix`. When `error` is %NULL, an "Unknown error" message is shown
     * instead.
     * @param prefix an optional prefix to show before the error message, or %NULL for none
     * @param error a #GError to show the message from in the UI, or %NULL for unknown error
     */
    report_error(prefix: string | null, error: GLib.Error | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    vfunc_activated(rd: ECal.ReminderData): boolean
    vfunc_changed(): void

    // Own signals of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    connect(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): number
    emit(sigName: "activated", object: ECal.ReminderData, ...args: any[]): void
    connect(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    connect(sigName: "notify::empty", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty", ...args: any[]): void
    connect(sigName: "notify::watcher", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::watcher", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::watcher", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
class RemindersWidget extends Gtk.Grid {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    static name: string
    static $gtype: GObject.GType<RemindersWidget>

    // Constructors of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    constructor(config?: RemindersWidget.ConstructorProperties) 
    /**
     * Creates a new instance of #ERemindersWidget. It adds its own reference
     * on the `watcher`.
     * @constructor 
     * @param watcher an #EReminderWatcher
     * @returns a new instance of #ERemindersWidget.
     */
    constructor(watcher: ECal.ReminderWatcher) 
    /**
     * Creates a new instance of #ERemindersWidget. It adds its own reference
     * on the `watcher`.
     * @constructor 
     * @param watcher an #EReminderWatcher
     * @returns a new instance of #ERemindersWidget.
     */
    static new(watcher: ECal.ReminderWatcher): RemindersWidget

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: RemindersWidget.ConstructorProperties): void
}

module WebDAVDiscoverContent {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

interface WebDAVDiscoverContent extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Owm methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    /**
     * Returns currently set base URL for the `content`. This is used to overwrite the one
     * set on the #ESource from the creation time. The URL can be either a full URL, a path
     * or even a %NULL.
     * @returns currently set base URL for the @content.
     */
    get_base_url(): string
    get_multiselect(): boolean
    /**
     * Returns information about selected source at index `index`. The function can be called
     * multiple times, with the index starting at zero and as long as it doesn't return %FALSE.
     * If the `content` doesn't have allowed multiselection, then the only valid `index` is 0.
     * 
     * All the `out_href,` `out_display_name` and `out_color` are newly allocated strings, which should
     * be freed with g_free(), when no longer needed.
     * @param index an index of the selected source; counts from 0
     * @returns %TRUE, when a selected source of index @index exists, %FALSE otherwise.
     */
    get_selected(index: number): [ /* returnType */ boolean, /* out_href */ string | null, /* out_supports */ number, /* out_display_name */ string | null, /* out_color */ string | null, /* out_order */ number ]
    /**
     * Returns inner #GtkTreeViewSelection. This is meant to be able to connect
     * to its "changed" signal and update other parts of the parent widgets accordingly.
     * @returns inner #GtkTreeViewSelection
     */
    get_tree_selection(): Gtk.TreeSelection
    /**
     * Get currently selected user address in the `content,` if the server returned any.
     * This value has meaning only with calendar sources.
     * @returns currently selected user address. The   returned string is newly allocated and should be freed with g_free() when   no longer needed. If there are none addresses provided by the server, or   no calendar sources were found, then %NULL is returned instead.
     */
    get_user_address(): string | null
    /**
     * Asynchronously starts refresh of the `content`. This means to access the server
     * and search it for available sources. The `content` shows a feedback and a Cancel
     * button during the operation.
     * 
     * The `display_name` is used only if the `content` wasn't created with an #ESource and
     * it's shown in the password prompts, if there are required any.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_webdav_discover_content_refresh_finish() to get the result of the operation.
     * @param display_name optional display name to use for scratch sources
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(display_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_webdav_discover_content_refresh(). If an
     * error occurred, the function will set `error` and return %FALSE. There is
     * available e_webdav_discover_content_show_error() for convenience, which
     * shows the error within `content` and takes care of it when refreshing
     * the content.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets base URL for the `content`. This is used to overwrite the one set on
     * the #ESource from the creation time. The URL can be either a full URL, a path
     * or even a %NULL.
     * @param base_url a base URL
     */
    set_base_url(base_url: string): void
    /**
     * Sets whether the WebDAV discovery content allows multiselect.
     * @param multiselect whether multiselect is allowed
     */
    set_multiselect(multiselect: boolean): void
    /**
     * Shows the `error` within `content,` unless it's a #G_IO_ERROR_CANCELLED, or %NULL,
     * which are safely ignored. The advantage of this function is that the error
     * message is removed when the refresh operation is started.
     * @param error a #GError to show in the UI, or %NULL
     */
    show_error(error: GLib.Error): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    connect(sigName: "notify::baseline-row", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebDAVDiscoverContent extends Gtk.Grid {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    static name: string
    static $gtype: GObject.GType<WebDAVDiscoverContent>

    // Constructors of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    constructor(config?: WebDAVDiscoverContent.ConstructorProperties) 
    /**
     * Creates a new WebDAV discovery content, which is a #GtkGrid containing necessary
     * widgets to provide a UI interface for a user to search and select for available
     * WebDAV (CalDAV or CardDAV) sources provided by the given server. Do not pack
     * anything into this content, its content can be changed dynamically.
     * @constructor 
     * @param credentials_prompter an #ECredentialsPrompter to use to ask for credentials
     * @param source optional #ESource to use for authentication, or %NULL
     * @param base_url optional base URL to use for discovery, or %NULL
     * @param supports_filter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a new #EWebDAVDiscoverContent.
     */
    constructor(credentials_prompter: CredentialsPrompter, source: EDataServer.Source | null, base_url: string | null, supports_filter: number) 
    /**
     * Creates a new WebDAV discovery content, which is a #GtkGrid containing necessary
     * widgets to provide a UI interface for a user to search and select for available
     * WebDAV (CalDAV or CardDAV) sources provided by the given server. Do not pack
     * anything into this content, its content can be changed dynamically.
     * @constructor 
     * @param credentials_prompter an #ECredentialsPrompter to use to ask for credentials
     * @param source optional #ESource to use for authentication, or %NULL
     * @param base_url optional base URL to use for discovery, or %NULL
     * @param supports_filter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a new #EWebDAVDiscoverContent.
     */
    static new(credentials_prompter: CredentialsPrompter, source: EDataServer.Source | null, base_url: string | null, supports_filter: number): WebDAVDiscoverContent

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: WebDAVDiscoverContent.ConstructorProperties): void
}

module WebDAVDiscoverDialog {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

interface WebDAVDiscoverDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Owm methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    /**
     * Returns inner WebDAV discovery content, which can be further manipulated.
     * @returns inner WebDAV discovery content
     */
    get_content(): WebDAVDiscoverContent
    /**
     * Invokes refresh of the inner content of the WebDAV discovery dialog.
     */
    refresh(): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebDAVDiscoverDialog extends Gtk.Dialog {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    static name: string
    static $gtype: GObject.GType<WebDAVDiscoverDialog>

    // Constructors of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    constructor(config?: WebDAVDiscoverDialog.ConstructorProperties) 
    /**
     * Creates a new #GtkDialog which has as its content a WebDAV discovery widget,
     * created with e_webdav_discover_content_new(). This dialog can be shown to a user
     * and when its final response is %GTK_RESPONSE_ACCEPT, then the inner content
     * can be asked for currently selected source(s).
     * @constructor 
     * @param parent a #GtkWindow parent for the dialog
     * @param title title of the window
     * @param credentials_prompter an #ECredentialsPrompter to use to ask for credentials
     * @param source an #ESource to use for authentication
     * @param base_url optional base URL to use for discovery, or %NULL
     * @param supports_filter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a newly created #GtkDialog, which should be freed with g_object_unref(), when no longer needed.
     */
    constructor(parent: Gtk.Window, title: string, credentials_prompter: CredentialsPrompter, source: EDataServer.Source, base_url: string | null, supports_filter: number) 
    /**
     * Creates a new #GtkDialog which has as its content a WebDAV discovery widget,
     * created with e_webdav_discover_content_new(). This dialog can be shown to a user
     * and when its final response is %GTK_RESPONSE_ACCEPT, then the inner content
     * can be asked for currently selected source(s).
     * @constructor 
     * @param parent a #GtkWindow parent for the dialog
     * @param title title of the window
     * @param credentials_prompter an #ECredentialsPrompter to use to ask for credentials
     * @param source an #ESource to use for authentication
     * @param base_url optional base URL to use for discovery, or %NULL
     * @param supports_filter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a newly created #GtkDialog, which should be freed with g_object_unref(), when no longer needed.
     */
    static new(parent: Gtk.Window, title: string, credentials_prompter: CredentialsPrompter, source: EDataServer.Source, base_url: string | null, supports_filter: number): WebDAVDiscoverDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: WebDAVDiscoverDialog.ConstructorProperties): void
}

interface CellRendererColorClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CellRendererColorClass

    parent_class: Gtk.CellRendererClass
}

abstract class CellRendererColorClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColorClass

    static name: string
}

interface CellRendererColorPrivate {
}

class CellRendererColorPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColorPrivate

    static name: string
}

interface CertificateWidgetClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CertificateWidgetClass

    parent_class: Gtk.ScrolledWindowClass
}

abstract class CertificateWidgetClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CertificateWidgetClass

    static name: string
}

interface CertificateWidgetPrivate {
}

class CertificateWidgetPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CertificateWidgetPrivate

    static name: string
}

interface CredentialsPrompterClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterClass

    parent_class: GObject.ObjectClass
    get_dialog_parent: (prompter: CredentialsPrompter) => Gtk.Window | null
}

abstract class CredentialsPrompterClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterClass

    static name: string
}

interface CredentialsPrompterImplClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplClass

    parent_class: EDataServer.ExtensionClass
    authentication_methods: string
    process_prompt: (prompter_impl: CredentialsPrompterImpl, prompt_id: any | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters) => void
    cancel_prompt: (prompter_impl: CredentialsPrompterImpl, prompt_id: any | null) => void
    prompt_finished: (prompter_impl: CredentialsPrompterImpl, prompt_id: any | null, credentials: EDataServer.NamedParameters) => void
}

abstract class CredentialsPrompterImplClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplClass

    static name: string
}

interface CredentialsPrompterImplOAuth2Class {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Class

    parent_class: CredentialsPrompterImplClass
}

abstract class CredentialsPrompterImplOAuth2Class {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Class

    static name: string
}

interface CredentialsPrompterImplOAuth2Private {
}

class CredentialsPrompterImplOAuth2Private {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Private

    static name: string
}

interface CredentialsPrompterImplPasswordClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordClass

    parent_class: CredentialsPrompterImplClass
}

abstract class CredentialsPrompterImplPasswordClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordClass

    static name: string
}

interface CredentialsPrompterImplPasswordPrivate {
}

class CredentialsPrompterImplPasswordPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordPrivate

    static name: string
}

interface CredentialsPrompterImplPrivate {
}

class CredentialsPrompterImplPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPrivate

    static name: string
}

interface CredentialsPrompterPrivate {
}

class CredentialsPrompterPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterPrivate

    static name: string
}

interface RemindersWidgetClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.RemindersWidgetClass

    changed: (reminders: RemindersWidget) => void
    activated: (reminders: RemindersWidget, rd: ECal.ReminderData) => boolean
}

/**
 * Class structure for the #ERemindersWidget class.
 * @record 
 */
abstract class RemindersWidgetClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidgetClass

    static name: string
}

interface RemindersWidgetPrivate {
}

class RemindersWidgetPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidgetPrivate

    static name: string
}

interface WebDAVDiscoverContentClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContentClass

    parent_class: Gtk.GridClass
}

abstract class WebDAVDiscoverContentClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContentClass

    static name: string
}

interface WebDAVDiscoverDialogClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialogClass

    parent_class: Gtk.DialogClass
}

abstract class WebDAVDiscoverDialogClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialogClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default EDataServerUI;
// END