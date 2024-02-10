/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './polkitagent-1.0-ambient.d.ts';
import './polkitagent-1.0-import.d.ts';
/**
 * PolkitAgent-1.0
 */

import type Polkit from '@girs/polkit-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace PolkitAgent {
    /**
     * (deprecated)
     * @param listener A #PolkitAgentListener.
     * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
     * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
     */
    function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;
    /**
     * Flags used in polkit_agent_listener_register().
     */
    enum RegisterFlags {
        /**
         * No flags are set.
         */
        NONE,
        /**
         * Run the listener in a dedicated thread.
         */
        RUN_IN_THREAD,
    }
    module Listener {
        // Constructor properties interface
    }

    /**
     * #PolkitAgentListener is an abstract base class used for implementing authentication
     * agents. To implement an authentication agent, simply subclass #PolkitAgentListener and
     * implement the `initiate_authentication` and `initiate_authentication_finish` methods.
     *
     * Typically authentication agents use #PolkitAgentSession to
     * authenticate users (via passwords) and communicate back the
     * authentication result to the PolicyKit daemon.
     *
     * To register a #PolkitAgentListener with the PolicyKit daemon, use
     * polkit_agent_listener_register() or
     * polkit_agent_listener_register_with_options().
     */
    abstract class Listener extends GObject.Object {
        // Owm methods of PolkitAgent-1.0.Listener

        /**
         * Unregisters `listener`.
         * @param registration_handle A handle obtained from polkit_agent_listener_register().
         */
        static unregister(registration_handle?: any | null): void;

        // Owm methods of PolkitAgent-1.0.Listener

        /**
         * Called on a registered authentication agent (see
         * polkit_agent_listener_register()) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         *
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities)`, `callback` will be invoked. The caller then calls
         * polkit_agent_listener_initiate_authentication_finish() to get the
         * result.
         *
         * #PolkitAgentListener derived subclasses imlementing this method
         * &lt;emphasis&gt;MUST&lt;/emphasis&gt; not ignore `cancellable;` callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the &lt;link
         * linkend="g-main-context-push-thread-default"&gt;thread-default main
         * loop&lt;/link&gt; of the thread that this method is called from.
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or %NULL.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
         * @param cancellable A #GCancellable.
         * @param callback Function to call when the user is done authenticating.
         */
        initiate_authentication(
            action_id: string,
            message: string,
            icon_name: string,
            details: Polkit.Details,
            cookie: string,
            identities: Polkit.Identity[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an authentication request from the PolicyKit daemon, see
         * polkit_agent_listener_initiate_authentication() for details.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to polkit_agent_listener_initiate_authentication().
         * @returns %TRUE if @error is set.
         */
        initiate_authentication_finish(res: Gio.AsyncResult): boolean;
        /**
         * Registers `listener` with the PolicyKit daemon as an authentication
         * agent for `subject`. This is implemented by registering a D-Bus
         * object at `object_path` on the unique name assigned by the system
         * message bus.
         *
         * Whenever the PolicyKit daemon needs to authenticate a processes
         * that is related to `subject,` the methods
         * polkit_agent_listener_initiate_authentication() and
         * polkit_agent_listener_initiate_authentication_finish() will be
         * invoked on `listener`.
         *
         * Note that registration of an authentication agent can fail; for
         * example another authentication agent may already be registered for
         * `subject`.
         *
         * Note that the calling thread is blocked until a reply is received.
         * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
         * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
         * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
         */
        register(
            flags: RegisterFlags,
            subject: Polkit.Subject,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): any | null;
        /**
         * Like polkit_agent_listener_register() but takes options to influence registration. See the
         * &lt;link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.RegisterAuthenticationAgentWithOptions"&gt;RegisterAuthenticationAgentWithOptions()&lt;/link&gt; D-Bus method for details.
         * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
         * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
         * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
         * @param options A #GVariant with options or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
         */
        register_with_options(
            flags: RegisterFlags,
            subject: Polkit.Subject,
            object_path: string,
            options?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): any | null;
    }

    module Session {
        // Signal callback interfaces

        interface Completed {
            (gained_authorization: boolean): void;
        }

        interface Request {
            (request: string, echo_on: boolean): void;
        }

        interface ShowError {
            (text: string): void;
        }

        interface ShowInfo {
            (text: string): void;
        }

        // Constructor properties interface
    }

    /**
     * The #PolkitAgentSession class is an abstraction used for interacting with the
     * native authentication system (for example PAM) for obtaining authorizations.
     * This class is typically used together with instances that are derived from
     * the #PolkitAgentListener abstract base class.
     *
     * To perform the actual authentication, #PolkitAgentSession uses a trusted suid helper.
     * The authentication conversation is done through a pipe. This is transparent; the user
     * only need to handle the
     * #PolkitAgentSession::request,
     * #PolkitAgentSession::show-info,
     * #PolkitAgentSession::show-error and
     * #PolkitAgentSession::completed
     * signals and invoke polkit_agent_session_response() in response to requests.
     *
     * If the user successfully authenticates, the authentication helper will invoke
     * a method on the PolicyKit daemon (see polkit_authority_authentication_agent_response_sync())
     * with the given `cookie`. Upon receiving a positive response from the PolicyKit daemon (via
     * the authentication helper), the #PolkitAgentSession::completed signal will be emitted
     * with the `gained_authorization` paramter set to %TRUE.
     *
     * If the user is unable to authenticate, the #PolkitAgentSession::completed signal will
     * be emitted with the `gained_authorization` paramter set to %FALSE.
     */
    class Session extends GObject.Object {
        // Own properties of PolkitAgent-1.0.Session

        /**
         * The cookie obtained from the PolicyKit daemon
         */
        cookie: string;
        /**
         * The identity to authenticate.
         */
        identity: Polkit.Identity;

        // Constructors of PolkitAgent-1.0.Session

        static ['new'](identity: Polkit.Identity, cookie: string): Session;

        // Owm methods of PolkitAgent-1.0.Session

        /**
         * Cancels an authentication session. This will make `session` emit the #PolkitAgentSession::completed
         * signal.
         */
        cancel(): void;
        /**
         * Initiates the authentication session. Before calling this method,
         * make sure to connect to the various signals. The signals will be
         * emitted in the &lt;link
         * linkend="g-main-context-push-thread-default"&gt;thread-default main
         * loop&lt;/link&gt; that this method is invoked from.
         *
         * Use polkit_agent_session_cancel() to cancel the session.
         */
        initiate(): void;
        /**
         * Function for providing response to requests received
         * via the #PolkitAgentSession::request signal.
         * @param response Response from the user, typically a password.
         */
        response(response: string): void;
    }

    module TextListener {
        // Signal callback interfaces

        interface TtyAttrsChanged {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    /**
     * #PolkitAgentTextListener is an #PolkitAgentListener implementation
     * that interacts with the user using a textual interface.
     */
    class TextListener extends Listener {
        // Own properties of PolkitAgent-1.0.TextListener

        delay: number;
        use_alternate_buffer: boolean;
        useAlternateBuffer: boolean;
        use_color: boolean;
        useColor: boolean;

        // Constructors of PolkitAgent-1.0.TextListener

        static ['new'](cancellable?: Gio.Cancellable | null): TextListener;
    }

    /**
     * VFuncs that authentication agents needs to implement.
     */
    class ListenerClass {}

    class SessionClass {}

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

export default PolkitAgent;
// END
