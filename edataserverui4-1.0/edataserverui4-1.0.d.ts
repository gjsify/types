/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './edataserverui4-1.0-ambient.d.ts';
import './edataserverui4-1.0-import.d.ts';
/**
 * EDataServerUI4-1.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type ECal from '@girs/ecal-2.0';
import type ICalGLib from '@girs/icalglib-3.0';

export namespace EDataServerUI4 {
    function buffer_tagger_connect(textview: Gtk.TextView): void;
    function buffer_tagger_disconnect(textview: Gtk.TextView): void;
    function buffer_tagger_update_tags(textview: Gtk.TextView): void;
    /**
     * Converts `flags` into a localized text description of the set bits, one
     * bit description per line. If no bit is set, then an empty string is
     * returned.
     * @param flags a #GTlsCertificateFlags to describe
     * @returns A newly allocated string with text description  of @flags. Free the returned pointer with g_free() when no longer needed.
     */
    function trust_prompt_describe_certificate_errors(flags: Gio.TlsCertificateFlags): string;
    /**
     * Similar to e_trust_prompt_run_modal(), except it also manages all the necessary things
     * around the `source&`lt;!-- --&gt;'s SSL/TLS trust properties when it also contains %E_SOURCE_EXTENSION_WEBDAV,
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
     * @param certificate_errors errors of the @certificate_pem
     * @param error_text an optional error text to show in the dialog; can be %NULL
     * @param allow_source_save whether can also save any @source changes
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a callback to call, when the prompt (an @source save) is done
     */
    function trust_prompt_run_for_source(
        parent: Gtk.Window,
        source: EDataServer.Source,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        error_text: string | null,
        allow_source_save: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gtk.Window> | null,
    ): void;
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
    function trust_prompt_run_for_source_finish(
        source: EDataServer.Source,
        result: Gio.AsyncResult,
        response: EDataServer.TrustPromptResponse,
    ): boolean;
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
     * @param certificate_errors errors of the @certificate_pem
     * @param error_text an optional error text to show in the dialog; can be %NULL
     * @returns A code of the user's choice. The #E_TRUST_PROMPT_RESPONSE_UNKNOWN    is returned, when the user cancelled the trust prompt dialog.
     */
    function trust_prompt_run_modal(
        parent: Gtk.Window,
        source_extension: string | null,
        source_display_name: string | null,
        host: string,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        error_text?: string | null,
    ): EDataServer.TrustPromptResponse;
    interface CredentialsPrompterLoopPromptFunc {
        (
            prompter: CredentialsPrompter,
            source: EDataServer.Source,
            credentials: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
    }
    /**
     * An #ECredentialsPrompter prompt flags, influencing behaviour
     * of the e_credentials_prompter_prompt().
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
    module CellRendererColor {
        // Constructor properties interface
    }

    class CellRendererColor extends Gtk.CellRenderer {
        // Own properties of EDataServerUI4-1.0.CellRendererColor

        rgba: Gdk.RGBA;

        // Constructors of EDataServerUI4-1.0.CellRendererColor

        static ['new'](): CellRendererColor;
    }

    module CertificateWidget {
        // Constructor properties interface
    }

    class CertificateWidget extends Gtk.Box {
        // Constructors of EDataServerUI4-1.0.CertificateWidget

        static ['new'](): CertificateWidget;

        // Owm methods of EDataServerUI4-1.0.CertificateWidget

        /**
         * Updates the content of the `self` with the certificate information
         * described by the `der_data` of the length `der_data_len` in the DER
         * format.
         *
         * The content of the `self` is cleared when the `der_data` is %NULL.
         * @param der_data certificate data in DER format, or %NULL
         * @param der_data_len length of the @der_data
         */
        set_der(der_data: any | null, der_data_len: number): void;
        /**
         * Updates the content of the `self` with the certificate information
         * described by the `pem_data` in the PEM format.
         *
         * The content of the `self` is cleared when the `pem_data` is %NULL.
         * @param pem_data certificate data in PEM format, or %NULL
         */
        set_pem(pem_data?: string | null): void;
    }

    module CredentialsPrompter {
        // Signal callback interfaces

        interface GetDialogParent {
            (): Gtk.Window | null;
        }

        interface GetDialogParentFull {
            (auth_source?: EDataServer.Source | null): Gtk.Window | null;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CredentialsPrompter extends GObject.Object {
        // Own properties of EDataServerUI4-1.0.CredentialsPrompter

        /**
         * Whether the #ECredentialsPrompter can response to credential
         * requests automatically.
         */
        auto_prompt: boolean;
        /**
         * Whether the #ECredentialsPrompter can response to credential
         * requests automatically.
         */
        autoPrompt: boolean;
        /**
         * The #ESourceCredentialsProvider object, which the prompter uses.
         */
        readonly provider: EDataServer.SourceCredentialsProvider;
        /**
         * The #ESourceRegistry object, to whose credential requests the prompter listens.
         */
        registry: EDataServer.SourceRegistry;

        // Constructors of EDataServerUI4-1.0.CredentialsPrompter

        static ['new'](registry: EDataServer.SourceRegistry): CredentialsPrompter;

        // Owm methods of EDataServerUI4-1.0.CredentialsPrompter

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
        complete_prompt_call(
            async_result: Gio.SimpleAsyncResult,
            source: EDataServer.Source,
            credentials: EDataServer.NamedParameters | null,
            error: GLib.Error,
        ): void;
        /**
         * Returns, whether can respond to credential prompts automatically.
         * Default value is %TRUE.
         *
         * This property does not influence direct calls of e_credentials_prompter_prompt().
         * @returns Whether can respond to credential prompts automatically.
         */
        get_auto_prompt(): boolean;
        /**
         * Returns whether the auto-prompt is disabled for the given `source`.
         * All sources can be auto-prompted by default. This is a complementary
         * value for the ECredentialsPrompter::auto-prompt property.
         *
         * This value does not influence direct calls of e_credentials_prompter_prompt().
         * @param source an #ESource
         * @returns Whether the auto-prompt is disabled for the given @source
         */
        get_auto_prompt_disabled_for(source: EDataServer.Source): boolean;
        /**
         * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
         * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
         * registered or the current callbacks don't have any suitable window, then there's
         * chosen the last active window from the default GApplication, if any available.
         * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
         */
        get_dialog_parent(): Gtk.Window | null;
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
        get_dialog_parent_full(auth_source?: EDataServer.Source | null): Gtk.Window | null;
        /**
         * Returns an #ESourceCredentialsProvider, which the `prompter` uses.
         * @returns an #ESourceCredentialsProvider, which the @prompter uses.
         */
        get_provider(): EDataServer.SourceCredentialsProvider;
        /**
         * Returns an #ESourceRegistry, to which the `prompter` listens.
         * @returns an #ESourceRegistry, to which the @prompter listens.
         */
        get_registry(): EDataServer.SourceRegistry;
        /**
         * Runs a credentials prompt loop for `source,` as long as the `func` doesn't
         * indicate that the provided credentials can be used to successfully
         * authenticate against `source&`lt;!-- --&gt;'s server, or that the `func`
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
        loop_prompt_sync(
            source: EDataServer.Source,
            flags: CredentialsPrompterPromptFlags,
            func: CredentialsPrompterLoopPromptFunc,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Process all enabled sources with connection state #E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS,
         * like if they just asked for its credentials for the first time.
         */
        process_awaiting_credentials(): void;
        /**
         * Continues a credential prompt for `source`. Returns, whether anything will be done.
         * The %FALSE either means that the `source&`lt;!-- --&gt;'s connection status is not
         * the %E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS or it is disabled.
         * @param source an #ESource
         * @returns Whether continues with the credentials prompt.
         */
        process_source(source: EDataServer.Source): boolean;
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
        prompt(
            source: EDataServer.Source,
            error_text: string | null,
            flags: CredentialsPrompterPromptFlags,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        prompt_finish(result: Gio.AsyncResult): boolean;
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
         * @param authentication_method an authentication method to registr @prompter_impl for; or %NULL
         * @param prompter_impl an #ECredentialsPrompterImpl
         * @returns %TRUE on success, %FALSE on failure or when there was another prompter implementation registered for the given authentication method.
         */
        register_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): boolean;
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
        set_auto_prompt(auto_prompt: boolean): void;
        /**
         * Sets whether the auto-prompt should be disabled for the given `source`.
         * All sources can be auto-prompted by default. This is a complementary
         * value for the ECredentialsPrompter::auto-prompt property.
         *
         * This value does not influence direct calls of e_credentials_prompter_prompt().
         * @param source an #ESource
         * @param is_disabled whether the auto-prompt should be disabled for this @source
         */
        set_auto_prompt_disabled_for(source: EDataServer.Source, is_disabled: boolean): void;
        /**
         * Unregisters previously registered `prompter_impl` for the given `autnetication_method` with
         * e_credentials_prompter_register_impl(). Function does nothing, if no such authentication
         * method is registered or if it has set a different prompter implementation.
         * @param authentication_method an authentication method to registr @prompter_impl for; or %NULL
         * @param prompter_impl an #ECredentialsPrompterImpl
         */
        unregister_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): void;
    }

    module CredentialsPrompterImpl {
        // Signal callback interfaces

        interface PromptFinished {
            (prompt_id?: any | null, credentials?: EDataServer.NamedParameters | null): void;
        }

        // Constructor properties interface
    }

    /**
     * Credentials prompter implementation base structure. The descendants
     * implement ECredentialsPrompterImpl::prompt(), which is used to
     * prompt for credentials. The descendants are automatically registered
     * into an #ECredentialsPrompter.
     */
    abstract class CredentialsPrompterImpl extends EDataServer.Extension {
        // Owm methods of EDataServerUI4-1.0.CredentialsPrompterImpl

        /**
         * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
         * @param prompt_id a prompt ID to cancel
         */
        cancel_prompt(prompt_id?: any | null): void;
        /**
         * Returns an #ECredentialsPrompter with which the `prompter_impl` is associated.
         * @returns an #ECredentialsPrompter
         */
        get_credentials_prompter(): any | null;
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
        prompt(
            prompt_id: any | null,
            auth_source: EDataServer.Source,
            cred_source: EDataServer.Source,
            error_text: string | null,
            credentials: EDataServer.NamedParameters,
        ): void;
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
        prompt_finish(prompt_id?: any | null, credentials?: EDataServer.NamedParameters | null): void;
    }

    module CredentialsPrompterImplOAuth2 {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CredentialsPrompterImplOAuth2 extends CredentialsPrompterImpl {
        // Constructors of EDataServerUI4-1.0.CredentialsPrompterImplOAuth2

        static ['new'](): CredentialsPrompterImplOAuth2;
    }

    module CredentialsPrompterImplPassword {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CredentialsPrompterImplPassword extends CredentialsPrompterImpl {
        // Constructors of EDataServerUI4-1.0.CredentialsPrompterImplPassword

        static ['new'](): CredentialsPrompterImplPassword;
    }

    module RemindersWidget {
        // Signal callback interfaces

        interface Activated {
            (object: ECal.ReminderData): boolean;
        }

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using
     * the functions below.
     */
    class RemindersWidget extends Gtk.Grid {
        // Own properties of EDataServerUI4-1.0.RemindersWidget

        readonly empty: boolean;
        watcher: ECal.ReminderWatcher;

        // Constructors of EDataServerUI4-1.0.RemindersWidget

        static ['new'](watcher: ECal.ReminderWatcher): RemindersWidget;

        // Owm methods of EDataServerUI4-1.0.RemindersWidget

        get_paned(): Gtk.Paned;
        get_settings(): Gio.Settings;
        get_tree_view(): Gtk.TreeView;
        get_watcher(): ECal.ReminderWatcher;
        is_empty(): boolean;
        /**
         * Shows a warning in the GUI with the `error` message, optionally prefixed
         * with `prefix`. When `error` is %NULL, an "Unknown error" message is shown
         * instead.
         * @param prefix an optional prefix to show before the error message, or %NULL for none
         * @param error a #GError to show the message from in the UI, or %NULL for unknown error
         */
        report_error(prefix?: string | null, error?: GLib.Error | null): void;
    }

    module WebDAVDiscoverContent {
        // Constructor properties interface
    }

    class WebDAVDiscoverContent extends Gtk.Grid {
        // Constructors of EDataServerUI4-1.0.WebDAVDiscoverContent

        static ['new'](
            credentials_prompter: CredentialsPrompter,
            source: EDataServer.Source | null,
            base_url: string | null,
            supports_filter: number,
        ): WebDAVDiscoverContent;

        // Owm methods of EDataServerUI4-1.0.WebDAVDiscoverContent

        /**
         * Returns currently set base URL for the `content`. This is used to overwrite the one
         * set on the #ESource from the creation time. The URL can be either a full URL, a path
         * or even a %NULL.
         * @returns currently set base URL for the @content.
         */
        get_base_url(): string;
        get_multiselect(): boolean;
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
        get_selected(index: number): boolean;
        /**
         * Returns inner #GtkTreeViewSelection. This is meant to be able to connect
         * to its "changed" signal and update other parts of the parent widgets accordingly.
         * @returns inner #GtkTreeViewSelection
         */
        get_tree_selection(): Gtk.TreeSelection;
        /**
         * Get currently selected user address in the `content,` if the server returned any.
         * This value has meaning only with calendar sources.
         * @returns currently selected user address. The   returned string is newly allocated and should be freed with g_free() when   no longer needed. If there are none addresses provided by the server, or   no calendar sources were found, then %NULL is returned instead.
         */
        get_user_address(): string | null;
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
        refresh(
            display_name?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_webdav_discover_content_refresh(). If an
         * error occurred, the function will set `error` and return %FALSE. There is
         * available e_webdav_discover_content_show_error() for convenience, which
         * shows the error within `content` and takes care of it when refreshing
         * the content.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        refresh_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets base URL for the `content`. This is used to overwrite the one set on
         * the #ESource from the creation time. The URL can be either a full URL, a path
         * or even a %NULL.
         * @param base_url a base URL
         */
        set_base_url(base_url: string): void;
        /**
         * Sets whether the WebDAV discovery content allows multiselect.
         * @param multiselect whether multiselect is allowed
         */
        set_multiselect(multiselect: boolean): void;
        /**
         * Shows the `error` within `content,` unless it's a #G_IO_ERROR_CANCELLED, or %NULL,
         * which are safely ignored. The advantage of this function is that the error
         * message is removed when the refresh operation is started.
         * @param error a #GError to show in the UI, or %NULL
         */
        show_error(error: GLib.Error): void;
    }

    module WebDAVDiscoverDialog {
        // Constructor properties interface
    }

    class WebDAVDiscoverDialog extends Gtk.Dialog {
        // Constructors of EDataServerUI4-1.0.WebDAVDiscoverDialog

        static ['new'](
            parent: Gtk.Window,
            title: string,
            credentials_prompter: CredentialsPrompter,
            source: EDataServer.Source,
            base_url: string | null,
            supports_filter: number,
        ): WebDAVDiscoverDialog;

        // Owm methods of EDataServerUI4-1.0.WebDAVDiscoverDialog

        /**
         * Returns inner WebDAV discovery content, which can be further manipulated.
         * @returns inner WebDAV discovery content
         */
        get_content(): WebDAVDiscoverContent;
        /**
         * Invokes refresh of the inner content of the WebDAV discovery dialog.
         */
        refresh(): void;
    }

    class CellRendererColorClass {}

    class CellRendererColorPrivate {}

    class CertificateWidgetClass {}

    class CertificateWidgetPrivate {}

    class CredentialsPrompterClass {}

    class CredentialsPrompterImplClass {
        // Own fields of EDataServerUI4-1.0.CredentialsPrompterImplClass

        authentication_methods: string;
    }

    class CredentialsPrompterImplOAuth2Class {}

    class CredentialsPrompterImplOAuth2Private {}

    class CredentialsPrompterImplPasswordClass {}

    class CredentialsPrompterImplPasswordPrivate {}

    class CredentialsPrompterImplPrivate {}

    class CredentialsPrompterPrivate {}

    /**
     * Class structure for the #ERemindersWidget class.
     */
    class RemindersWidgetClass {}

    class RemindersWidgetPrivate {}

    class WebDAVDiscoverContentClass {}

    class WebDAVDiscoverDialogClass {}

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

export default EDataServerUI4;
// END
