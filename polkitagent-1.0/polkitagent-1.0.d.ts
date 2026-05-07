
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
import type Polkit from '@girs/polkit-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace PolkitAgent {

    /**
     * PolkitAgent-1.0
     */


    /**
     * (deprecated)
     * @param listener A {@link PolkitAgent.Listener}.
     * @param subject The subject to become an authentication agent for, typically a {@link Polkit.UnixSession} object.
     * @param object_path The D-Bus object path to use for the authentication agent or `null` for the default object path.
     */
    function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;

    /**
     * @gir-type Flags
     */
    export namespace RegisterFlags {
        export const $gtype: GObject.GType<RegisterFlags>;
    }

    /**
     * Flags used in `polkit_agent_listener_register()`.
     * @gir-type Flags
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


    namespace Listener {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * {@link PolkitAgent.Listener} is an abstract base class used for implementing authentication
     * agents. To implement an authentication agent, simply subclass {@link PolkitAgent.Listener} and
     * implement the `initiate_authentication` and `initiate_authentication_finish` methods.
     * 
     * Typically authentication agents use {@link PolkitAgent.Session} to
     * authenticate users (via passwords) and communicate back the
     * authentication result to the PolicyKit daemon.
     * 
     * To register a {@link PolkitAgent.Listener} with the PolicyKit daemon, use
     * `polkit_agent_listener_register()` or
     * `polkit_agent_listener_register_with_options()`.
     * @gir-type Class
     */
    abstract class Listener extends GObject.Object {
        static $gtype: GObject.GType<Listener>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Listener.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Listener.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Listener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Listener.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Listener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Listener.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Listener.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Listener.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Unregisters `listener`.
         * @param registration_handle A handle obtained from `polkit_agent_listener_register()`.
         */
        static unregister(registration_handle: null): void;

        // Virtual methods
        /**
         * Called on a registered authentication agent (see
         * `polkit_agent_listener_register()`) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         * 
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities`), `callback` will be invoked. The caller then calls
         * `polkit_agent_listener_initiate_authentication_finish()` to get the
         * result.
         * 
         * {@link PolkitAgent.Listener} derived subclasses imlementing this method
         * <emphasis>MUST</emphasis> not ignore `cancellable`; callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread that this method is called from.
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or `null`.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of {@link Polkit.Identity} objects that the user can choose to authenticate as.
         * @param cancellable A {@link Gio.Cancellable}.
         * @param callback Function to call when the user is done authenticating.
         * @virtual
         */
        vfunc_initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes an authentication request from the PolicyKit daemon, see
         * `polkit_agent_listener_initiate_authentication()` for details.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} function passed to `polkit_agent_listener_initiate_authentication()`.
         * @virtual
         */
        vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean;

        // Methods
        /**
         * Called on a registered authentication agent (see
         * `polkit_agent_listener_register()`) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         * 
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities`), `callback` will be invoked. The caller then calls
         * `polkit_agent_listener_initiate_authentication_finish()` to get the
         * result.
         * 
         * {@link PolkitAgent.Listener} derived subclasses imlementing this method
         * <emphasis>MUST</emphasis> not ignore `cancellable`; callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread that this method is called from.
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or `null`.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of {@link Polkit.Identity} objects that the user can choose to authenticate as.
         * @param cancellable A {@link Gio.Cancellable}.
         */
        initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Called on a registered authentication agent (see
         * `polkit_agent_listener_register()`) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         * 
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities`), `callback` will be invoked. The caller then calls
         * `polkit_agent_listener_initiate_authentication_finish()` to get the
         * result.
         * 
         * {@link PolkitAgent.Listener} derived subclasses imlementing this method
         * <emphasis>MUST</emphasis> not ignore `cancellable`; callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread that this method is called from.
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or `null`.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of {@link Polkit.Identity} objects that the user can choose to authenticate as.
         * @param cancellable A {@link Gio.Cancellable}.
         * @param callback Function to call when the user is done authenticating.
         */
        initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Called on a registered authentication agent (see
         * `polkit_agent_listener_register()`) when the user owning the session
         * needs to prove he is one of the identities listed in `identities`.
         * 
         * When the user is done authenticating (for example by dismissing an
         * authentication dialog or by successfully entering a password or
         * otherwise proving the user is one of the identities in
         * `identities`), `callback` will be invoked. The caller then calls
         * `polkit_agent_listener_initiate_authentication_finish()` to get the
         * result.
         * 
         * {@link PolkitAgent.Listener} derived subclasses imlementing this method
         * <emphasis>MUST</emphasis> not ignore `cancellable`; callers of this
         * function can and will use it. Additionally, `callback` must be
         * invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread that this method is called from.
         * @param action_id The action to authenticate for.
         * @param message The message to present to the user.
         * @param icon_name A themed icon name representing the action or `null`.
         * @param details Details describing the action.
         * @param cookie The cookie for the authentication request.
         * @param identities A list of {@link Polkit.Identity} objects that the user can choose to authenticate as.
         * @param cancellable A {@link Gio.Cancellable}.
         * @param callback Function to call when the user is done authenticating.
         */
        initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes an authentication request from the PolicyKit daemon, see
         * `polkit_agent_listener_initiate_authentication()` for details.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} function passed to `polkit_agent_listener_initiate_authentication()`.
         * @returns `true` if `error` is set.
         */
        initiate_authentication_finish(res: Gio.AsyncResult): boolean;

        /**
         * Registers `listener` with the PolicyKit daemon as an authentication
         * agent for `subject`. This is implemented by registering a D-Bus
         * object at `object_path` on the unique name assigned by the system
         * message bus.
         * 
         * Whenever the PolicyKit daemon needs to authenticate a processes
         * that is related to `subject`, the methods
         * `polkit_agent_listener_initiate_authentication()` and
         * `polkit_agent_listener_initiate_authentication_finish()` will be
         * invoked on `listener`.
         * 
         * Note that registration of an authentication agent can fail; for
         * example another authentication agent may already be registered for
         * `subject`.
         * 
         * Note that the calling thread is blocked until a reply is received.
         * @param flags A set of flags from the {@link PolkitAgent.RegisterFlags} enumeration.
         * @param subject The subject to become an authentication agent for, typically a {@link Polkit.UnixSession} object.
         * @param object_path The D-Bus object path to use for the authentication agent or `null` for the default object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `null` if `error` is set, otherwise a registration handle that can be used with `polkit_agent_listener_unregister()`.
         */
        register(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, cancellable: (Gio.Cancellable | null)): null;

        /**
         * Like `polkit_agent_listener_register()` but takes options to influence registration. See the
         * <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.RegisterAuthenticationAgentWithOptions">RegisterAuthenticationAgentWithOptions()</link> D-Bus method for details.
         * @param flags A set of flags from the {@link PolkitAgent.RegisterFlags} enumeration.
         * @param subject The subject to become an authentication agent for, typically a {@link Polkit.UnixSession} object.
         * @param object_path The D-Bus object path to use for the authentication agent or `null` for the default object path.
         * @param options A {@link GLib.Variant} with options or `null`.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `null` if `error` is set, otherwise a registration handle that can be used with `polkit_agent_listener_unregister()`.
         */
        register_with_options(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, options: (GLib.Variant | null), cancellable: (Gio.Cancellable | null)): null;
    }


    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the authentication session has been completed or
             * cancelled. The `gained_authorization` parameter is `true` only if
             * the user successfully authenticated.
             * 
             * Upon receiving this signal, the user should free `session` using `g_object_unref()`.
             * @signal
             * @run-last
             */
            completed: (arg0: boolean) => void;
            /**
             * Emitted when the user is requested to answer a question.
             * 
             * When the response has been collected from the user, call `polkit_agent_session_response()`.
             * @signal
             * @run-last
             */
            request: (arg0: string, arg1: boolean) => void;
            /**
             * Emitted when there is information related to an error condition to be displayed to the user.
             * @signal
             * @run-last
             */
            "show-error": (arg0: string) => void;
            /**
             * Emitted when there is information to be displayed to the user.
             * @signal
             * @run-last
             */
            "show-info": (arg0: string) => void;
            "notify::cookie": (pspec: GObject.ParamSpec) => void;
            "notify::identity": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cookie: string;
            identity: Polkit.Identity;
        }
    }

    /**
     * The {@link PolkitAgent.Session} class is an abstraction used for interacting with the
     * native authentication system (for example PAM) for obtaining authorizations.
     * This class is typically used together with instances that are derived from
     * the {@link PolkitAgent.Listener} abstract base class.
     * 
     * To perform the actual authentication, {@link PolkitAgent.Session} uses a trusted suid helper.
     * The authentication conversation is done through a pipe. This is transparent; the user
     * only need to handle the
     * {@link PolkitAgent.Session.SignalSignatures.request | PolkitAgent.Session::request},
     * {@link PolkitAgent.Session.SignalSignatures.show_info | PolkitAgent.Session::show-info},
     * {@link PolkitAgent.Session.SignalSignatures.show_error | PolkitAgent.Session::show-error} and
     * {@link PolkitAgent.Session.SignalSignatures.completed | PolkitAgent.Session::completed}
     * signals and invoke `polkit_agent_session_response()` in response to requests.
     * 
     * If the user successfully authenticates, the authentication helper will invoke
     * a method on the PolicyKit daemon (see `polkit_authority_authentication_agent_response_sync()`)
     * with the given `cookie`. Upon receiving a positive response from the PolicyKit daemon (via
     * the authentication helper), the {@link PolkitAgent.Session.SignalSignatures.completed | PolkitAgent.Session::completed} signal will be emitted
     * with the `gained_authorization` paramter set to `true`.
     * 
     * If the user is unable to authenticate, the {@link PolkitAgent.Session.SignalSignatures.completed | PolkitAgent.Session::completed} signal will
     * be emitted with the `gained_authorization` paramter set to `false`.
     * @gir-type Class
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Properties
        /**
         * The cookie obtained from the PolicyKit daemon
         * @construct-only
         */
        get cookie(): string;

        /**
         * The identity to authenticate.
         * @construct-only
         */
        get identity(): Polkit.Identity;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](identity: Polkit.Identity, cookie: string): Session;

        // Signals
        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Cancels an authentication session. This will make `session` emit the {@link PolkitAgent.Session.SignalSignatures.completed | PolkitAgent.Session::completed}
         * signal.
         */
        cancel(): void;

        /**
         * Initiates the authentication session. Before calling this method,
         * make sure to connect to the various signals. The signals will be
         * emitted in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> that this method is invoked from.
         * 
         * Use `polkit_agent_session_cancel()` to cancel the session.
         */
        initiate(): void;

        /**
         * Function for providing response to requests received
         * via the {@link PolkitAgent.Session.SignalSignatures.request | PolkitAgent.Session::request} signal.
         * @param response Response from the user, typically a password.
         */
        response(response: string): void;
    }


    namespace TextListener {
        // Signal signatures
        interface SignalSignatures extends Listener.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Listener.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * {@link PolkitAgent.TextListener} is an {@link PolkitAgent.Listener} implementation
     * that interacts with the user using a textual interface.
     * @gir-type Class
     */
    class TextListener extends Listener implements Gio.Initable {
        static $gtype: GObject.GType<TextListener>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextListener.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TextListener.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](cancellable: (Gio.Cancellable | null)): TextListener;

        // Signals
        /** @signal */
        connect<K extends keyof TextListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextListener.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TextListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextListener.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TextListener.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextListener.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
    type ListenerClass = typeof Listener;

    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;

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
