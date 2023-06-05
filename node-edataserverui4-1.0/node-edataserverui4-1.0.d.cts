
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-edataserverui4-1.0-import.d.ts';
    
/**
 * EDataServerUI4-1.0
 */

import type Soup from '@girs/node-soup-3.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gtk from '@girs/node-gtk-4.0';
import type Gsk from '@girs/node-gsk-4.0';
import type Graphene from '@girs/node-graphene-1.0';
import type Gdk from '@girs/node-gdk-4.0';
import type cairo from '@girs/node-cairo-1.0';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type EDataServer from '@girs/node-edataserver-1.2';
import type libxml2 from '@girs/node-libxml2-2.0';
import type Json from '@girs/node-json-1.0';
import type Camel from '@girs/node-camel-1.2';
import type ECal from '@girs/node-ecal-2.0';
import type ICalGLib from '@girs/node-icalglib-3.0';

/**
 * An #ECredentialsPrompter prompt flags, influencing behaviour
 * of the e_credentials_prompter_prompt().
 * @bitfield 
 */
export enum CredentialsPrompterPromptFlags {
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
export function bufferTaggerConnect(textview: Gtk.TextView): void
export function bufferTaggerDisconnect(textview: Gtk.TextView): void
export function bufferTaggerUpdateTags(textview: Gtk.TextView): void
/**
 * Converts `flags` into a localized text description of the set bits, one
 * bit description per line. If no bit is set, then an empty string is
 * returned.
 * @param flags a #GTlsCertificateFlags to describe
 * @returns A newly allocated string with text description  of @flags. Free the returned pointer with g_free() when no longer needed.
 */
export function trustPromptDescribeCertificateErrors(flags: Gio.TlsCertificateFlags): string | null
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
 * @param certificatePem a PEM-encoded certificate for which to show the trust prompt
 * @param certificateErrors errors of the `certificate_pem`
 * @param errorText an optional error text to show in the dialog; can be %NULL
 * @param allowSourceSave whether can also save any `source` changes
 * @param cancellable a #GCancellable, or %NULL
 * @param callback a callback to call, when the prompt (an `source` save) is done
 */
export function trustPromptRunForSource(parent: Gtk.Window, source: EDataServer.Source, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, errorText: string | null, allowSourceSave: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
export function trustPromptRunForSourceFinish(source: EDataServer.Source, result: Gio.AsyncResult, response: EDataServer.TrustPromptResponse): boolean
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
 * @param sourceExtension an #ESource extension, to identify a kind of the source; or %NULL
 * @param sourceDisplayName an #ESource display name, to identify what prompts; or %NULL
 * @param host a host name to which the certificate belongs
 * @param certificatePem a PEM-encoded certificate for which to show the trust prompt
 * @param certificateErrors errors of the `certificate_pem`
 * @param errorText an optional error text to show in the dialog; can be %NULL
 * @returns A code of the user's choice. The #E_TRUST_PROMPT_RESPONSE_UNKNOWN    is returned, when the user cancelled the trust prompt dialog.
 */
export function trustPromptRunModal(parent: Gtk.Window, sourceExtension: string | null, sourceDisplayName: string | null, host: string | null, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, errorText: string | null): EDataServer.TrustPromptResponse
export interface CredentialsPrompterLoopPromptFunc {
    (prompter: CredentialsPrompter, source: EDataServer.Source, credentials: EDataServer.NamedParameters, cancellable: Gio.Cancellable | null): boolean
}
export module CellRendererColor {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of EDataServerUI4-1.0.EDataServerUI4.CellRendererColor

        rgba?: Gdk.RGBA | null
    }

}

export interface CellRendererColor {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CellRendererColor

    rgba: Gdk.RGBA
    __gtype__: number

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CellRendererColor

    parent: Gtk.CellRenderer
    priv: CellRendererColorPrivate

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.CellRendererColor

    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (...args: any[]) => void): number
    on(sigName: "notify::editing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::editing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::editing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-expanded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-expanded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-expanded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-expander", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-expander", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-expander", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (...args: any[]) => void): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (...args: any[]) => void): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (...args: any[]) => void): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (...args: any[]) => void): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CellRendererColor extends Gtk.CellRenderer {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CellRendererColor

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.CellRendererColor

    constructor(config?: CellRendererColor.ConstructorProperties) 
    constructor() 
    static new(): CellRendererColor
    _init(config?: CellRendererColor.ConstructorProperties): void
}

export module CertificateWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

export interface CertificateWidget extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CertificateWidget

    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CertificateWidget

    readonly parent: Gtk.Box & Gtk.Widget
    priv: CertificateWidgetPrivate

    // Owm methods of EDataServerUI4-1.0.EDataServerUI4.CertificateWidget

    /**
     * Updates the content of the `self` with the certificate information
     * described by the `der_data` of the length `der_data_len` in the DER
     * format.
     * 
     * The content of the `self` is cleared when the `der_data` is %NULL.
     * @param derData certificate data in DER format, or %NULL
     * @param derDataLen length of the `der_data`
     */
    setDer(derData: any | null, derDataLen: number): void
    /**
     * Updates the content of the `self` with the certificate information
     * described by the `pem_data` in the PEM format.
     * 
     * The content of the `self` is cleared when the `pem_data` is %NULL.
     * @param pemData certificate data in PEM format, or %NULL
     */
    setPem(pemData: string | null): void

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.CertificateWidget

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::baseline-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baseline-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baseline-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (...args: any[]) => void): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CertificateWidget extends Gtk.Box {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CertificateWidget

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.CertificateWidget

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
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     * @returns a new `GtkBox`.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: CertificateWidget.ConstructorProperties): void
}

export module CredentialsPrompter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `get-dialog-parent`
     */
    export interface GetDialogParentSignalCallback {
        (): Gtk.Window | null
    }

    /**
     * Signal callback interface for `get-dialog-parent-full`
     */
    export interface GetDialogParentFullSignalCallback {
        (authSource: EDataServer.Source | null): Gtk.Window | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

        /**
         * Whether the #ECredentialsPrompter can response to credential
         * requests automatically.
         */
        autoPrompt?: boolean | null
        /**
         * The #ESourceRegistry object, to whose credential requests the prompter listens.
         */
        registry?: EDataServer.SourceRegistry | null
    }

}

export interface CredentialsPrompter extends EDataServer.Extensible {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

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
    __gtype__: number

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

    parent: GObject.Object
    priv: CredentialsPrompterPrivate

    // Owm methods of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

    /**
     * Completes an ongoing credentials prompt on idle, by finishing the `async_result`.
     * This function is meant to be used by an #ECredentialsPrompterImpl implementation.
     * To actually finish the credentials prompt previously started with
     * e_credentials_prompter_prompt(), the e_credentials_prompter_prompt_finish() should
     * be called from the provided callback.
     * 
     * Using %NULL `credentials` will result in a G_IO_ERROR_CANCELLED error, if
     * no other `error` is provided.
     * @param asyncResult a #GSimpleAsyncResult
     * @param source an #ESource, on which the prompt was started
     * @param credentials credentials, as provided by a user, on %NULL, when the prompt was cancelled
     * @param error a resulting #GError, or %NULL
     */
    completePromptCall(asyncResult: Gio.SimpleAsyncResult, source: EDataServer.Source, credentials: EDataServer.NamedParameters | null, error: GLib.Error): void
    /**
     * Returns, whether can respond to credential prompts automatically.
     * Default value is %TRUE.
     * 
     * This property does not influence direct calls of e_credentials_prompter_prompt().
     * @returns Whether can respond to credential prompts automatically.
     */
    getAutoPrompt(): boolean
    /**
     * Returns whether the auto-prompt is disabled for the given `source`.
     * All sources can be auto-prompted by default. This is a complementary
     * value for the ECredentialsPrompter::auto-prompt property.
     * 
     * This value does not influence direct calls of e_credentials_prompter_prompt().
     * @param source an #ESource
     * @returns Whether the auto-prompt is disabled for the given @source
     */
    getAutoPromptDisabledFor(source: EDataServer.Source): boolean
    // Has conflict: getDialogParent(): Gtk.Window | null
    /**
     * Returns a #GtkWindow, which should be used as a dialog parent for the `auth_source`.
     * 
     * This is determined by an ECredentialsPrompter::get-dialog-parent-full signal emission
     * and an ECredentialsPrompter::get-dialog-parent when the first doesn't return anything.
     * If there is no callback registered or the current callbacks don't have any suitable
     * window, then there's chosen the last active window from the default GApplication,
     * if any available.
     * @param authSource an #ESource
     * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
     */
    getDialogParentFull(authSource: EDataServer.Source | null): Gtk.Window | null
    /**
     * Returns an #ESourceCredentialsProvider, which the `prompter` uses.
     * @returns an #ESourceCredentialsProvider, which the @prompter uses.
     */
    getProvider(): EDataServer.SourceCredentialsProvider
    /**
     * Returns an #ESourceRegistry, to which the `prompter` listens.
     * @returns an #ESourceRegistry, to which the @prompter listens.
     */
    getRegistry(): EDataServer.SourceRegistry
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
    loopPromptSync(source: EDataServer.Source, flags: CredentialsPrompterPromptFlags, func: CredentialsPrompterLoopPromptFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Process all enabled sources with connection state #E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS,
     * like if they just asked for its credentials for the first time.
     */
    processAwaitingCredentials(): void
    /**
     * Continues a credential prompt for `source`. Returns, whether anything will be done.
     * The %FALSE either means that the `source<`!-- -->'s connection status is not
     * the %E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS or it is disabled.
     * @param source an #ESource
     * @returns Whether continues with the credentials prompt.
     */
    processSource(source: EDataServer.Source): boolean
    /**
     * Asks the `prompter` to prompt for credentials, which are returned
     * to the caller through `callback,` when available.The `flags` are ignored,
     * when the `callback` is %NULL; the credentials are passed to the `source`
     * with e_source_invoke_authenticate() directly, in this case.
     * Call e_credentials_prompter_prompt_finish() in `callback` to get to
     * the provided credentials.
     * @param source an #ESource, which prompt the credentials for
     * @param errorText Additional error text to show to a user, or %NULL
     * @param flags a bit-or of #ECredentialsPrompterPromptFlags
     * @param callback a callback to call when the credentials are ready, or %NULL
     */
    prompt(source: EDataServer.Source, errorText: string | null, flags: CredentialsPrompterPromptFlags, callback: Gio.AsyncReadyCallback | null): void
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
    promptFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSource */ EDataServer.Source | null, /* outCredentials */ EDataServer.NamedParameters | null ]
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
     * @param authenticationMethod an authentication method to registr `prompter_impl` for; or %NULL
     * @param prompterImpl an #ECredentialsPrompterImpl
     * @returns %TRUE on success, %FALSE on failure or when there was another prompter implementation registered for the given authentication method.
     */
    registerImpl(authenticationMethod: string | null, prompterImpl: CredentialsPrompterImpl): boolean
    /**
     * Sets whether can respond to credential prompts automatically. That means that
     * whenever any ESource will ask for credentials, it'll try to provide them.
     * 
     * Use e_credentials_prompter_set_auto_prompt_disabled_for() to influence
     * auto-prompt per an #ESource.
     * 
     * This property does not influence direct calls of e_credentials_prompter_prompt().
     * @param autoPrompt new value of the auto-prompt property
     */
    setAutoPrompt(autoPrompt: boolean): void
    /**
     * Sets whether the auto-prompt should be disabled for the given `source`.
     * All sources can be auto-prompted by default. This is a complementary
     * value for the ECredentialsPrompter::auto-prompt property.
     * 
     * This value does not influence direct calls of e_credentials_prompter_prompt().
     * @param source an #ESource
     * @param isDisabled whether the auto-prompt should be disabled for this `source`
     */
    setAutoPromptDisabledFor(source: EDataServer.Source, isDisabled: boolean): void
    /**
     * Unregisters previously registered `prompter_impl` for the given `autnetication_method` with
     * e_credentials_prompter_register_impl(). Function does nothing, if no such authentication
     * method is registered or if it has set a different prompter implementation.
     * @param authenticationMethod an authentication method to registr `prompter_impl` for; or %NULL
     * @param prompterImpl an #ECredentialsPrompterImpl
     */
    unregisterImpl(authenticationMethod: string | null, prompterImpl: CredentialsPrompterImpl): void

    // Own virtual methods of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

    /**
     * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
     * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
     * registered or the current callbacks don't have any suitable window, then there's
     * chosen the last active window from the default GApplication, if any available.
     * @virtual 
     * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
     */
    getDialogParent(): Gtk.Window | null

    // Own signals of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

    connect(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): number
    on(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-dialog-parent", ...args: any[]): void
    connect(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): number
    on(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-dialog-parent-full", ...args: any[]): void

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

    connect(sigName: "notify::auto-prompt", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-prompt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-prompt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-prompt", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
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
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CredentialsPrompter extends GObject.Object {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompter

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

export module CredentialsPrompterImpl {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prompt-finished`
     */
    export interface PromptFinishedSignalCallback {
        (promptId: any | null, credentials: EDataServer.NamedParameters | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
    }

}

export interface CredentialsPrompterImpl {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    __gtype__: number

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    parent: EDataServer.Extension
    priv: CredentialsPrompterImplPrivate

    // Owm methods of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    // Has conflict: cancelPrompt(promptId: any | null): void
    /**
     * Returns an #ECredentialsPrompter with which the `prompter_impl` is associated.
     * @returns an #ECredentialsPrompter
     */
    getCredentialsPrompter(): any | null
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
     * @param promptId a prompt ID to be passed to e_credentials_prompter_impl_prompt_finish()
     * @param authSource an #ESource, to prompt the credentials for (the source which asked for credentials)
     * @param credSource a parent #ESource, from which credentials were taken, or should be stored to
     * @param errorText an optional error text from the previous credentials prompt; can be %NULL
     * @param credentials credentials, as saved in keyring; can be empty, but not %NULL
     */
    prompt(promptId: any | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters): void
    /**
     * The actual credentials prompt implementation finishes a previously started
     * credentials prompt `prompt_id` with ECredentialsPrompterImplClass::process_prompt()
     * by a call to this function. This function should be called regardless the prompt
     * was or was not cancelled with e_credentials_prompter_impl_cancel_prompt().
     * Once the prompt is finished another queued is started, if any pending exists.
     * Use %NULL `credentials` for cancelled prompts, otherwise the credentials are used
     * for authentication of the associated #ESource.
     * @param promptId a prompt ID
     * @param credentials credentials to use; can be %NULL for cancelled prompts
     */
    promptFinish(promptId: any | null, credentials: EDataServer.NamedParameters | null): void

    // Own virtual methods of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    /**
     * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
     * @virtual 
     * @param promptId a prompt ID to cancel
     */
    cancelPrompt(promptId: any | null): void
    processPrompt(promptId: any | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters): void
    promptFinished(promptId: any | null, credentials: EDataServer.NamedParameters): void

    // Own signals of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    connect(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): number
    on(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "prompt-finished", credentials: EDataServer.NamedParameters | null, ...args: any[]): void

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class CredentialsPrompterImpl extends EDataServer.Extension {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImpl

    constructor(config?: CredentialsPrompterImpl.ConstructorProperties) 
    _init(config?: CredentialsPrompterImpl.ConstructorProperties): void
}

export module CredentialsPrompterImplOAuth2 {

    // Constructor properties interface

    export interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
    }

}

export interface CredentialsPrompterImplOAuth2 {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2

    __gtype__: number

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2

    parent: CredentialsPrompterImpl & EDataServer.Extension
    priv: any

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CredentialsPrompterImplOAuth2 extends CredentialsPrompterImpl {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2

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

export module CredentialsPrompterImplPassword {

    // Constructor properties interface

    export interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
    }

}

export interface CredentialsPrompterImplPassword {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPassword

    __gtype__: number

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPassword

    parent: CredentialsPrompterImpl & EDataServer.Extension
    priv: any

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPassword

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CredentialsPrompterImplPassword extends CredentialsPrompterImpl {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPassword

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPassword

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

export module RemindersWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (object: ECal.ReminderData): boolean
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

        watcher?: ECal.ReminderWatcher | null
    }

}

export interface RemindersWidget extends EDataServer.Extensible, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

    readonly empty: boolean
    readonly watcher: ECal.ReminderWatcher
    __gtype__: number

    // Owm methods of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

    getPaned(): Gtk.Paned
    getSettings(): Gio.Settings

    // Overloads of getSettings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the `GtkWidget`
     * is attached to a toplevel, since the settings object is specific
     * to a particular `GdkDisplay`. If you want to monitor the widget for
     * changes in its settings, connect to the `notify::display` signal.
     * @returns the relevant `GtkSettings` object
     */
    getSettings(): Gtk.Settings
    getTreeView(): Gtk.TreeView
    getWatcher(): ECal.ReminderWatcher
    isEmpty(): boolean
    /**
     * Shows a warning in the GUI with the `error` message, optionally prefixed
     * with `prefix`. When `error` is %NULL, an "Unknown error" message is shown
     * instead.
     * @param prefix an optional prefix to show before the error message, or %NULL for none
     * @param error a #GError to show the message from in the UI, or %NULL for unknown error
     */
    reportError(prefix: string | null, error: GLib.Error | null): void

    // Own virtual methods of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

    activated(rd: ECal.ReminderData): boolean
    changed(): void

    // Own signals of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

    connect(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): number
    on(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): number
    on(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

    connect(sigName: "notify::empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty", ...args: any[]): void
    connect(sigName: "notify::watcher", callback: (...args: any[]) => void): number
    on(sigName: "notify::watcher", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::watcher", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::watcher", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::watcher", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::baseline-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baseline-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (...args: any[]) => void): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
export class RemindersWidget extends Gtk.Grid {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.RemindersWidget

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
     * @returns the new `GtkGrid`
     */
    static new(): Gtk.Grid
    _init(config?: RemindersWidget.ConstructorProperties): void
}

export module WebDAVDiscoverContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface WebDAVDiscoverContent extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContent

    __gtype__: number

    // Owm methods of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContent

    /**
     * Returns currently set base URL for the `content`. This is used to overwrite the one
     * set on the #ESource from the creation time. The URL can be either a full URL, a path
     * or even a %NULL.
     * @returns currently set base URL for the @content.
     */
    getBaseUrl(): string | null
    getMultiselect(): boolean
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
    getSelected(index: number): [ /* returnType */ boolean, /* outHref */ string | null, /* outSupports */ number, /* outDisplayName */ string | null, /* outColor */ string | null, /* outOrder */ number ]
    /**
     * Returns inner #GtkTreeViewSelection. This is meant to be able to connect
     * to its "changed" signal and update other parts of the parent widgets accordingly.
     * @returns inner #GtkTreeViewSelection
     */
    getTreeSelection(): Gtk.TreeSelection
    /**
     * Get currently selected user address in the `content,` if the server returned any.
     * This value has meaning only with calendar sources.
     * @returns currently selected user address. The   returned string is newly allocated and should be freed with g_free() when   no longer needed. If there are none addresses provided by the server, or   no calendar sources were found, then %NULL is returned instead.
     */
    getUserAddress(): string | null
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
     * @param displayName optional display name to use for scratch sources
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(displayName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_webdav_discover_content_refresh(). If an
     * error occurred, the function will set `error` and return %FALSE. There is
     * available e_webdav_discover_content_show_error() for convenience, which
     * shows the error within `content` and takes care of it when refreshing
     * the content.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets base URL for the `content`. This is used to overwrite the one set on
     * the #ESource from the creation time. The URL can be either a full URL, a path
     * or even a %NULL.
     * @param baseUrl a base URL
     */
    setBaseUrl(baseUrl: string | null): void
    /**
     * Sets whether the WebDAV discovery content allows multiselect.
     * @param multiselect whether multiselect is allowed
     */
    setMultiselect(multiselect: boolean): void
    /**
     * Shows the `error` within `content,` unless it's a #G_IO_ERROR_CANCELLED, or %NULL,
     * which are safely ignored. The advantage of this function is that the error
     * message is removed when the refresh operation is started.
     * @param error a #GError to show in the UI, or %NULL
     */
    showError(error: GLib.Error): void

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContent

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::baseline-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baseline-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (...args: any[]) => void): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WebDAVDiscoverContent extends Gtk.Grid {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContent

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContent

    constructor(config?: WebDAVDiscoverContent.ConstructorProperties) 
    /**
     * Creates a new WebDAV discovery content, which is a #GtkGrid containing necessary
     * widgets to provide a UI interface for a user to search and select for available
     * WebDAV (CalDAV or CardDAV) sources provided by the given server. Do not pack
     * anything into this content, its content can be changed dynamically.
     * @constructor 
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source optional #ESource to use for authentication, or %NULL
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a new #EWebDAVDiscoverContent.
     */
    constructor(credentialsPrompter: CredentialsPrompter, source: EDataServer.Source | null, baseUrl: string | null, supportsFilter: number) 
    /**
     * Creates a new WebDAV discovery content, which is a #GtkGrid containing necessary
     * widgets to provide a UI interface for a user to search and select for available
     * WebDAV (CalDAV or CardDAV) sources provided by the given server. Do not pack
     * anything into this content, its content can be changed dynamically.
     * @constructor 
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source optional #ESource to use for authentication, or %NULL
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a new #EWebDAVDiscoverContent.
     */
    static new(credentialsPrompter: CredentialsPrompter, source: EDataServer.Source | null, baseUrl: string | null, supportsFilter: number): WebDAVDiscoverContent

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new `GtkGrid`
     */
    static new(): Gtk.Grid
    _init(config?: WebDAVDiscoverContent.ConstructorProperties): void
}

export module WebDAVDiscoverDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface WebDAVDiscoverDialog extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialog

    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Owm methods of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialog

    /**
     * Returns inner WebDAV discovery content, which can be further manipulated.
     * @returns inner WebDAV discovery content
     */
    getContent(): WebDAVDiscoverContent
    /**
     * Invokes refresh of the inner content of the WebDAV discovery dialog.
     */
    refresh(): void

    // Conflicting methods

    /**
     * Realizes a `GtkNative`.
     * 
     * This should only be used by subclasses.
     */
    realize(): void

    // Overloads of realize

    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     * @virtual 
     */
    realize(): void
    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     * @virtual 
     */
    realize(): void
    /**
     * Unrealizes a `GtkNative`.
     * 
     * This should only be used by subclasses.
     */
    unrealize(): void

    // Overloads of unrealize

    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     * @virtual 
     */
    unrealize(): void
    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     * @virtual 
     */
    unrealize(): void
    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    activateDefault(): void

    // Overloads of activateDefault

    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    addController(controller: Gtk.ShortcutController): void
    /**
     * Adds `controller` to `widget` so that it will receive events.
     * 
     * You will usually want to call this function right after
     * creating any kind of [class`Gtk`.EventController].
     * @param controller a `GtkEventController` that hasn't been   added to a widget yet
     */
    addController(controller: Gtk.EventController): void
    removeController(controller: Gtk.ShortcutController): void
    /**
     * Removes `controller` from `widget,` so that it doesn't process
     * events anymore.
     * 
     * It should not be used again.
     * 
     * Widgets will remove all event controllers automatically when they
     * are destroyed, there is normally no need to call this function.
     * @param controller a `GtkEventController`
     */
    removeController(controller: Gtk.EventController): void
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed.
     * 
     * This is similar to what happens when a window manager
     * close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed.
     * 
     * This is similar to what happens when a window manager
     * close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void

    // Class property signals of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialog

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-header-bar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-header-bar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-header-bar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (...args: any[]) => void): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (...args: any[]) => void): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: (...args: any[]) => void): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle-menubar-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: (...args: any[]) => void): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (...args: any[]) => void): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (...args: any[]) => void): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: (...args: any[]) => void): number
    on(sigName: "notify::titlebar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::titlebar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::titlebar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (...args: any[]) => void): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WebDAVDiscoverDialog extends Gtk.Dialog {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialog

    static name: string

    // Constructors of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialog

    constructor(config?: WebDAVDiscoverDialog.ConstructorProperties) 
    /**
     * Creates a new #GtkDialog which has as its content a WebDAV discovery widget,
     * created with e_webdav_discover_content_new(). This dialog can be shown to a user
     * and when its final response is %GTK_RESPONSE_ACCEPT, then the inner content
     * can be asked for currently selected source(s).
     * @constructor 
     * @param parent a #GtkWindow parent for the dialog
     * @param title title of the window
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source an #ESource to use for authentication
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a newly created #GtkDialog, which should be freed with g_object_unref(), when no longer needed.
     */
    constructor(parent: Gtk.Window, title: string | null, credentialsPrompter: CredentialsPrompter, source: EDataServer.Source, baseUrl: string | null, supportsFilter: number) 
    /**
     * Creates a new #GtkDialog which has as its content a WebDAV discovery widget,
     * created with e_webdav_discover_content_new(). This dialog can be shown to a user
     * and when its final response is %GTK_RESPONSE_ACCEPT, then the inner content
     * can be asked for currently selected source(s).
     * @constructor 
     * @param parent a #GtkWindow parent for the dialog
     * @param title title of the window
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source an #ESource to use for authentication
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     * @returns a newly created #GtkDialog, which should be freed with g_object_unref(), when no longer needed.
     */
    static new(parent: Gtk.Window, title: string | null, credentialsPrompter: CredentialsPrompter, source: EDataServer.Source, baseUrl: string | null, supportsFilter: number): WebDAVDiscoverDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into the `GtkWindow`
     * directly, but into the `content_area` and `action_area,`
     * as described above.
     * @constructor 
     * @returns the new dialog as a `GtkWidget`
     */
    static new(): Gtk.Dialog
    _init(config?: WebDAVDiscoverDialog.ConstructorProperties): void
}

export interface CellRendererColorClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CellRendererColorClass

    parentClass: Gtk.CellRendererClass
}

export abstract class CellRendererColorClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CellRendererColorClass

    static name: string
}

export interface CellRendererColorPrivate {
}

export class CellRendererColorPrivate {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CellRendererColorPrivate

    static name: string
}

export interface CertificateWidgetClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CertificateWidgetClass

    parentClass: Gtk.BoxClass
}

export abstract class CertificateWidgetClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CertificateWidgetClass

    static name: string
}

export interface CertificateWidgetPrivate {
}

export class CertificateWidgetPrivate {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CertificateWidgetPrivate

    static name: string
}

export interface CredentialsPrompterClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterClass

    parentClass: GObject.ObjectClass
    getDialogParent: (prompter: CredentialsPrompter) => Gtk.Window | null
}

export abstract class CredentialsPrompterClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterClass

    static name: string
}

export interface CredentialsPrompterImplClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplClass

    parentClass: EDataServer.ExtensionClass
    authenticationMethods: string | null
    processPrompt: (prompterImpl: CredentialsPrompterImpl, promptId: any | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters) => void
    cancelPrompt: (prompterImpl: CredentialsPrompterImpl, promptId: any | null) => void
    promptFinished: (prompterImpl: CredentialsPrompterImpl, promptId: any | null, credentials: EDataServer.NamedParameters) => void
}

export abstract class CredentialsPrompterImplClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplClass

    static name: string
}

export interface CredentialsPrompterImplOAuth2Class {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2Class

    parentClass: CredentialsPrompterImplClass
}

export abstract class CredentialsPrompterImplOAuth2Class {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2Class

    static name: string
}

export interface CredentialsPrompterImplOAuth2Private {
}

export class CredentialsPrompterImplOAuth2Private {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplOAuth2Private

    static name: string
}

export interface CredentialsPrompterImplPasswordClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPasswordClass

    parentClass: CredentialsPrompterImplClass
}

export abstract class CredentialsPrompterImplPasswordClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPasswordClass

    static name: string
}

export interface CredentialsPrompterImplPasswordPrivate {
}

export class CredentialsPrompterImplPasswordPrivate {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPasswordPrivate

    static name: string
}

export interface CredentialsPrompterImplPrivate {
}

export class CredentialsPrompterImplPrivate {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterImplPrivate

    static name: string
}

export interface CredentialsPrompterPrivate {
}

export class CredentialsPrompterPrivate {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.CredentialsPrompterPrivate

    static name: string
}

export interface RemindersWidgetClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.RemindersWidgetClass

    changed: (reminders: RemindersWidget) => void
    activated: (reminders: RemindersWidget, rd: ECal.ReminderData) => boolean
}

/**
 * Class structure for the #ERemindersWidget class.
 * @record 
 */
export abstract class RemindersWidgetClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.RemindersWidgetClass

    static name: string
}

export interface RemindersWidgetPrivate {
}

export class RemindersWidgetPrivate {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.RemindersWidgetPrivate

    static name: string
}

export interface WebDAVDiscoverContentClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContentClass

    parentClass: Gtk.GridClass
}

export abstract class WebDAVDiscoverContentClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverContentClass

    static name: string
}

export interface WebDAVDiscoverDialogClass {

    // Own fields of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialogClass

    parentClass: Gtk.DialogClass
}

export abstract class WebDAVDiscoverDialogClass {

    // Own properties of EDataServerUI4-1.0.EDataServerUI4.WebDAVDiscoverDialogClass

    static name: string
}

// END