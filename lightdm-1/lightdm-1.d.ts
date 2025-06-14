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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace LightDM {
    /**
     * LightDM-1
     */

    /**
     * Error codes returned by greeter operations.
     */
    class GreeterError extends GLib.Error {
        static $gtype: GObject.GType<GreeterError>;

        // Static fields

        /**
         * error communicating with daemon.
         */
        static COMMUNICATION_ERROR: number;
        /**
         * failed to connect to the daemon.
         */
        static CONNECTION_FAILED: number;
        /**
         * requested session failed to start.
         */
        static SESSION_FAILED: number;
        /**
         * autologin not configured.
         */
        static NO_AUTOLOGIN: number;
        /**
         * autologin not configured.
         */
        static INVALID_USER: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace MessageType {
        export const $gtype: GObject.GType<MessageType>;
    }

    enum MessageType {
        /**
         * Informational message.
         */
        INFO,
        /**
         * Error message.
         */
        ERROR,
    }
    /**
     * Prompt types the client is required to display.
     */

    /**
     * Prompt types the client is required to display.
     */
    export namespace PromptType {
        export const $gtype: GObject.GType<PromptType>;
    }

    enum PromptType {
        /**
         * prompt is a question.  The information can be shown as it is entered.
         */
        QUESTION,
        /**
         * prompt is for secret information.  The entered information should be obscured so it can't be publically visible.
         */
        SECRET,
    }
    const GREETER_SIGNAL_AUTHENTICATION_COMPLETE: string;
    const GREETER_SIGNAL_AUTOLOGIN_TIMER_EXPIRED: string;
    const GREETER_SIGNAL_IDLE: string;
    const GREETER_SIGNAL_RESET: string;
    const GREETER_SIGNAL_SHOW_MESSAGE: string;
    const GREETER_SIGNAL_SHOW_PROMPT: string;
    const SIGNAL_USER_CHANGED: string;
    const USER_LIST_SIGNAL_USER_ADDED: string;
    const USER_LIST_SIGNAL_USER_CHANGED: string;
    const USER_LIST_SIGNAL_USER_REMOVED: string;
    /**
     * Checks if is authorized to do a system hibernate.
     * @returns #TRUE if can hibernate the system
     */
    function get_can_hibernate(): boolean;
    /**
     * Checks if is authorized to do a system restart.
     * @returns #TRUE if can restart the system
     */
    function get_can_restart(): boolean;
    /**
     * Checks if is authorized to do a system shutdown.
     * @returns #TRUE if can shutdown the system
     */
    function get_can_shutdown(): boolean;
    /**
     * Checks if authorized to do a system suspend.
     * @returns #TRUE if can suspend the system
     */
    function get_can_suspend(): boolean;
    function get_hostname(): string;
    /**
     * Get the current language.
     * @returns The current language or #NULL if no language.
     */
    function get_language(): Language;
    /**
     * Get a list of languages to present to the user.
     * @returns A list of #LightDMLanguage that should be presented to the user.
     */
    function get_languages(): Language[];
    /**
     * Get the current keyboard layout.
     * @returns The currently active layout for this user.
     */
    function get_layout(): Layout;
    /**
     * Get a list of keyboard layouts to present to the user.
     * @returns A list of #LightDMLayout that should be presented to the user.
     */
    function get_layouts(): Layout[];
    /**
     * Get a system message that should be presented to the user.
     * e.g. "Welcome to Yoyodyne"
     * @returns a string (the contents of /etc/motd) or %NULL if not set.
     */
    function get_motd(): string | null;
    /**
     * Get a word describing the OS, suitable for checking which OS the greeter is running on.
     * e.g. "ubuntu"
     * @returns a string (ID variable from /etc/os-release) or %NULL if not set.
     */
    function get_os_id(): string | null;
    /**
     * Get a line of text describing the OS without version information, suitable for presentation to the user.
     * e.g. "Ubuntu"
     * @returns a string (NAME variable from /etc/os-release) or %NULL if not set.
     */
    function get_os_name(): string | null;
    /**
     * Get a line of text describing the OS, suitable for presentation to the user.
     * e.g. "Ubuntu 16.04.1 LTS"
     * @returns a string (PRETTY_NAME variable from /etc/os-release) or %NULL if not set.
     */
    function get_os_pretty_name(): string | null;
    /**
     * Get a line of text describing the OS version, suitable for presentation to the user.
     * e.g. "16.04.1 LTS (Xenial Xapus)"
     * @returns a string (VERSION variable from /etc/os-release) or %NULL if not set.
     */
    function get_os_version(): string | null;
    /**
     * Get a word descibing the OS version, suitable for checking which version of the OS this greeter is running on.
     * e.g. "16.04"
     * @returns a string (VERSION_ID variable from /etc/os-release) or %NULL if not set.
     */
    function get_os_version_id(): string | null;
    /**
     * Get the available remote sessions.
     * @returns A list of #LightDMSession
     */
    function get_remote_sessions(): Session[];
    /**
     * Get the available sessions.
     * @returns A list of #LightDMSession
     */
    function get_sessions(): Session[];
    function greeter_error_quark(): GLib.Quark;
    /**
     * Triggers a system hibernate.
     * @returns #TRUE if hibernate initiated.
     */
    function hibernate(): boolean;
    /**
     * Triggers a system restart.
     * @returns #TRUE if restart initiated.
     */
    function restart(): boolean;
    /**
     * Set the layout for this session.
     * @param layout The layout to use
     */
    function set_layout(layout: Layout): void;
    /**
     * Triggers a system shutdown.
     * @returns #TRUE if shutdown initiated.
     */
    function shutdown(): boolean;
    /**
     * Triggers a system suspend.
     * @returns #TRUE if suspend initiated.
     */
    function suspend(): boolean;
    namespace Greeter {
        // Signal callback interfaces

        interface AuthenticationComplete {
            (): void;
        }

        interface AutologinTimerExpired {
            (): void;
        }

        interface Idle {
            (): void;
        }

        interface Reset {
            (): void;
        }

        interface ShowMessage {
            (text: string, type: MessageType): void;
        }

        interface ShowPrompt {
            (text: string, type: PromptType): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'authentication-complete': AuthenticationComplete;
            'autologin-timer-expired': AutologinTimerExpired;
            idle: Idle;
            reset: Reset;
            'show-message': ShowMessage;
            'show-prompt': ShowPrompt;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authentication_user: string;
            authenticationUser: string;
            autologin_guest_hint: boolean;
            autologinGuestHint: boolean;
            autologin_session_hint: string;
            autologinSessionHint: string;
            autologin_timeout_hint: number;
            autologinTimeoutHint: number;
            autologin_user_hint: string;
            autologinUserHint: string;
            default_session_hint: string;
            defaultSessionHint: string;
            has_guest_account_hint: boolean;
            hasGuestAccountHint: boolean;
            hide_users_hint: boolean;
            hideUsersHint: boolean;
            in_authentication: boolean;
            inAuthentication: boolean;
            is_authenticated: boolean;
            isAuthenticated: boolean;
            lock_hint: boolean;
            lockHint: boolean;
            select_guest_hint: boolean;
            selectGuestHint: boolean;
            select_user_hint: string;
            selectUserHint: string;
            show_manual_login_hint: boolean;
            showManualLoginHint: boolean;
            show_remote_login_hint: boolean;
            showRemoteLoginHint: boolean;
        }
    }

    /**
     * #LightDMGreeter is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Greeter extends GObject.Object {
        static $gtype: GObject.GType<Greeter>;
        declare static readonly __signalSignatures: Greeter.SignalSignatures;

        // Properties

        get authentication_user(): string;
        get authenticationUser(): string;
        get autologin_guest_hint(): boolean;
        get autologinGuestHint(): boolean;
        get autologin_session_hint(): string;
        get autologinSessionHint(): string;
        get autologin_timeout_hint(): number;
        get autologinTimeoutHint(): number;
        get autologin_user_hint(): string;
        get autologinUserHint(): string;
        get default_session_hint(): string;
        get defaultSessionHint(): string;
        get has_guest_account_hint(): boolean;
        get hasGuestAccountHint(): boolean;
        get hide_users_hint(): boolean;
        get hideUsersHint(): boolean;
        get in_authentication(): boolean;
        get inAuthentication(): boolean;
        get is_authenticated(): boolean;
        get isAuthenticated(): boolean;
        get lock_hint(): boolean;
        get lockHint(): boolean;
        get select_guest_hint(): boolean;
        get selectGuestHint(): boolean;
        get select_user_hint(): string;
        get selectUserHint(): string;
        get show_manual_login_hint(): boolean;
        get showManualLoginHint(): boolean;
        get show_remote_login_hint(): boolean;
        get showRemoteLoginHint(): boolean;

        // Constructors

        constructor(properties?: Partial<Greeter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Greeter;

        // Signals

        connect<K extends keyof Greeter.SignalSignatures>(signal: K, callback: Greeter.SignalSignatures[K]): number;
        connect_after<K extends keyof Greeter.SignalSignatures>(
            signal: K,
            callback: Greeter.SignalSignatures[K],
        ): number;
        emit<K extends keyof Greeter.SignalSignatures>(
            signal: K,
            ...args: Parameters<Greeter.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'authentication-complete', callback: (_source: this) => void): number;
        connect_after(signal: 'authentication-complete', callback: (_source: this) => void): number;
        emit(signal: 'authentication-complete'): void;
        connect(signal: 'autologin-timer-expired', callback: (_source: this) => void): number;
        connect_after(signal: 'autologin-timer-expired', callback: (_source: this) => void): number;
        emit(signal: 'autologin-timer-expired'): void;
        connect(signal: 'idle', callback: (_source: this) => void): number;
        connect_after(signal: 'idle', callback: (_source: this) => void): number;
        emit(signal: 'idle'): void;
        connect(signal: 'reset', callback: (_source: this) => void): number;
        connect_after(signal: 'reset', callback: (_source: this) => void): number;
        emit(signal: 'reset'): void;
        connect(signal: 'show-message', callback: (_source: this, text: string, type: MessageType) => void): number;
        connect_after(
            signal: 'show-message',
            callback: (_source: this, text: string, type: MessageType) => void,
        ): number;
        emit(signal: 'show-message', text: string, type: MessageType): void;
        connect(signal: 'show-prompt', callback: (_source: this, text: string, type: PromptType) => void): number;
        connect_after(signal: 'show-prompt', callback: (_source: this, text: string, type: PromptType) => void): number;
        emit(signal: 'show-prompt', text: string, type: PromptType): void;

        // Virtual methods

        vfunc_authentication_complete(): void;
        vfunc_autologin_timer_expired(): void;
        vfunc_idle(): void;
        vfunc_reset(): void;
        vfunc_show_message(text: string, type: MessageType): void;
        vfunc_show_prompt(text: string, type: PromptType): void;

        // Methods

        /**
         * Starts the authentication procedure for a user.
         * @param username A username or #NULL to prompt for a username.
         * @returns #TRUE if authentication request sent.
         */
        authenticate(username?: string | null): boolean;
        /**
         * Starts the authentication procedure for the guest user.
         * @returns #TRUE if authentication request sent.
         */
        authenticate_as_guest(): boolean;
        /**
         * Starts the authentication procedure for the automatic login user.
         * @returns #TRUE if authentication request sent.
         */
        authenticate_autologin(): boolean;
        /**
         * Start authentication for a remote session type.
         * @param session The name of a remote session
         * @param username A username of #NULL to prompt for a username.
         * @returns #TRUE if authentication request sent.
         */
        authenticate_remote(session: string, username?: string | null): boolean;
        /**
         * Cancel the current user authentication.
         * @returns #TRUE if cancel request sent.
         */
        cancel_authentication(): boolean;
        /**
         * Cancel the automatic login.
         */
        cancel_autologin(): void;
        /**
         * Connects the greeter to the display manager.  Will block until connected.
         * @returns #TRUE if successfully connected
         */
        connect_sync(): boolean;
        /**
         * Asynchronously connects the greeter to the display manager.
         *
         * When the operation is finished, `callback` will be invoked. You can then call lightdm_greeter_connect_to_daemon_finish() to get the result of the operation.
         *
         * See lightdm_greeter_connect_to_daemon_sync() for the synchronous version.
         * @param cancellable A #GCancellable or %NULL.
         */
        connect_to_daemon(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously connects the greeter to the display manager.
         *
         * When the operation is finished, `callback` will be invoked. You can then call lightdm_greeter_connect_to_daemon_finish() to get the result of the operation.
         *
         * See lightdm_greeter_connect_to_daemon_sync() for the synchronous version.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when completed or %NULL.
         */
        connect_to_daemon(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously connects the greeter to the display manager.
         *
         * When the operation is finished, `callback` will be invoked. You can then call lightdm_greeter_connect_to_daemon_finish() to get the result of the operation.
         *
         * See lightdm_greeter_connect_to_daemon_sync() for the synchronous version.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when completed or %NULL.
         */
        connect_to_daemon(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes an operation started with lightdm_greeter_connect_to_daemon().
         * @param result A #GAsyncResult.
         * @returns #TRUE if successfully connected
         */
        connect_to_daemon_finish(result: Gio.AsyncResult): boolean;
        /**
         * Connects the greeter to the display manager.  Will block until connected.
         * @returns #TRUE if successfully connected
         */
        connect_to_daemon_sync(): boolean;
        /**
         * Ensure that a shared data dir for the given user is available.  Both the
         * greeter user and `username` will have write access to that folder.  The
         * intention is that larger pieces of shared data would be stored there (files
         * that the greeter creates but wants to give to a user -- like camera
         * photos -- or files that the user creates but wants the greeter to
         * see -- like contact avatars).
         *
         * LightDM will automatically create these if the user actually logs in, so
         * greeters only need to call this method if they want to store something in
         * the directory themselves.
         * @param username A username
         * @param cancellable A #GCancellable or %NULL.
         */
        ensure_shared_data_dir(username: string, cancellable?: Gio.Cancellable | null): Promise<string>;
        /**
         * Ensure that a shared data dir for the given user is available.  Both the
         * greeter user and `username` will have write access to that folder.  The
         * intention is that larger pieces of shared data would be stored there (files
         * that the greeter creates but wants to give to a user -- like camera
         * photos -- or files that the user creates but wants the greeter to
         * see -- like contact avatars).
         *
         * LightDM will automatically create these if the user actually logs in, so
         * greeters only need to call this method if they want to store something in
         * the directory themselves.
         * @param username A username
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when completed or %NULL.
         */
        ensure_shared_data_dir(
            username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Ensure that a shared data dir for the given user is available.  Both the
         * greeter user and `username` will have write access to that folder.  The
         * intention is that larger pieces of shared data would be stored there (files
         * that the greeter creates but wants to give to a user -- like camera
         * photos -- or files that the user creates but wants the greeter to
         * see -- like contact avatars).
         *
         * LightDM will automatically create these if the user actually logs in, so
         * greeters only need to call this method if they want to store something in
         * the directory themselves.
         * @param username A username
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when completed or %NULL.
         */
        ensure_shared_data_dir(
            username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string> | void;
        /**
         * Function to call from lightdm_greeter_ensure_shared_data_dir callback.
         * @param result A #GAsyncResult.
         * @returns The path to the shared directory, free with g_free.
         */
        ensure_shared_data_dir_finish(result: Gio.AsyncResult): string;
        /**
         * Ensure that a shared data dir for the given user is available.  Both the
         * greeter user and `username` will have write access to that folder.  The
         * intention is that larger pieces of shared data would be stored there (files
         * that the greeter creates but wants to give to a user -- like camera
         * photos -- or files that the user creates but wants the greeter to
         * see -- like contact avatars).
         *
         * LightDM will automatically create these if the user actually logs in, so
         * greeters only need to call this method if they want to store something in
         * the directory themselves.
         * @param username A username
         * @returns The path to the shared directory, free with g_free.
         */
        ensure_shared_data_dir_sync(username: string): string;
        /**
         * Get the user that is being authenticated.
         * @returns The username of the authentication user being authenticated or #NULL if no authentication in progress.
         */
        get_authentication_user(): string | null;
        /**
         * Check if the guest account should be automatically logged into when the timer expires.
         * @returns #TRUE if the guest account should be automatically logged into.
         */
        get_autologin_guest_hint(): boolean;
        /**
         * Get the session used to automatically log into when the timer expires.
         * @returns The session name or %NULL if configured to use the default.
         */
        get_autologin_session_hint(): string | null;
        /**
         * Get the number of seconds to wait before automatically logging in.
         * @returns The number of seconds to wait before automatically logging in or 0 for no timeout.
         */
        get_autologin_timeout_hint(): number;
        /**
         * Get the user account to automatically log into when the timer expires.
         * @returns The user account to automatically log into or %NULL if none configured.
         */
        get_autologin_user_hint(): string | null;
        /**
         * Get the default session to use.
         * @returns The session name
         */
        get_default_session_hint(): string;
        /**
         * Check if guest sessions are supported.
         * @returns #TRUE if guest sessions are supported.
         */
        get_has_guest_account_hint(): boolean;
        /**
         * Check if user accounts should be shown.  If this is TRUE then the list of
         * accounts should be taken from #LightDMUserList and displayed in the greeter
         * for the user to choose from.  Note that this list can be empty and it is
         * recommended you show a method for the user to enter a username manually.
         *
         * If this option is shown the greeter should only allow these users to be
         * chosen for login unless the manual login hint is set.
         * @returns #TRUE if the available users should not be shown.
         */
        get_hide_users_hint(): boolean;
        /**
         * Get a hint.
         * @param name The hint name to query.
         * @returns The value for this hint or #NULL if not set.
         */
        get_hint(name: string): string | null;
        /**
         * Checks if the greeter is in the process of authenticating.
         * @returns #TRUE if the greeter is authenticating a user.
         */
        get_in_authentication(): boolean;
        /**
         * Checks if the greeter has successfully authenticated.
         * @returns #TRUE if the greeter is authenticated for login.
         */
        get_is_authenticated(): boolean;
        /**
         * Check if the greeter is acting as a lock screen.
         * @returns #TRUE if the greeter was triggered by locking the seat.
         */
        get_lock_hint(): boolean;
        /**
         * Check if the guest account should be selected by default.
         * @returns #TRUE if the guest account should be selected by default.
         */
        get_select_guest_hint(): boolean;
        /**
         * Get the user to select by default.
         * @returns A username or %NULL if no particular user should be selected.
         */
        get_select_user_hint(): string | null;
        /**
         * Check if a manual login option should be shown.  If set the GUI
         * should provide a way for a username to be entered manually.
         * Without this hint a greeter which is showing a user list can
         * limit logins to only those users.
         * @returns #TRUE if a manual login option should be shown.
         */
        get_show_manual_login_hint(): boolean;
        /**
         * Check if a remote login option should be shown.  If set the GUI
         * should provide a way for a user to log into a remote desktop server.
         * @returns #TRUE if a remote login option should be shown.
         */
        get_show_remote_login_hint(): boolean;
        /**
         * Provide response to a prompt.  May be one in a series.
         * @param response Response to a prompt
         * @returns #TRUE if response sent.
         */
        respond(response: string): boolean;
        /**
         * Set the language for the currently authenticated user.
         * @param language The language to use for this user in the form of a locale specification (e.g. "de_DE.UTF-8").
         * @returns #TRUE if set language request sent.
         */
        set_language(language: string): boolean;
        /**
         * Set whether the greeter will be reset instead of killed after the user logs in.
         * This must be called before lightdm_greeter_connect is called.
         * @param resettable Whether the greeter wants to be reset instead of killed after the user logs in
         */
        set_resettable(resettable: boolean): void;
        /**
         * Asynchronously start a session for the authenticated user.
         *
         * When the operation is finished, `callback` will be invoked. You can then call lightdm_greeter_start_session_finish() to get the result of the operation.
         *
         * See lightdm_greeter_start_session_sync() for the synchronous version.
         * @param session The session to log into or #NULL to use the default.
         * @param cancellable A #GCancellable or %NULL.
         */
        start_session(session?: string | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously start a session for the authenticated user.
         *
         * When the operation is finished, `callback` will be invoked. You can then call lightdm_greeter_start_session_finish() to get the result of the operation.
         *
         * See lightdm_greeter_start_session_sync() for the synchronous version.
         * @param session The session to log into or #NULL to use the default.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when completed or %NULL.
         */
        start_session(
            session: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously start a session for the authenticated user.
         *
         * When the operation is finished, `callback` will be invoked. You can then call lightdm_greeter_start_session_finish() to get the result of the operation.
         *
         * See lightdm_greeter_start_session_sync() for the synchronous version.
         * @param session The session to log into or #NULL to use the default.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when completed or %NULL.
         */
        start_session(
            session?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Start a session for the authenticated user.
         * @param result A #GAsyncResult.
         * @returns TRUE if the session was started.
         */
        start_session_finish(result: Gio.AsyncResult): boolean;
        /**
         * Start a session for the authenticated user.
         * @param session The session to log into or #NULL to use the default.
         * @returns TRUE if the session was started.
         */
        start_session_sync(session?: string | null): boolean;
    }

    namespace Language {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            code: string;
            name: string;
            territory: string;
        }
    }

    /**
     * #LightDMLanguage is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Language extends GObject.Object {
        static $gtype: GObject.GType<Language>;
        declare static readonly __signalSignatures: Language.SignalSignatures;

        // Properties

        get code(): string;
        get name(): string;
        get territory(): string;

        // Constructors

        constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the code of a language (e.g. "de_DE.UTF-8")
         * @returns The code of the language
         */
        get_code(): string;
        /**
         * Get the name of a language.
         * @returns The name of the language
         */
        get_name(): string;
        /**
         * Get the territory the language is used in.
         * @returns The territory the language is used in.
         */
        get_territory(): string;
        /**
         * Check if a language code matches this language.
         * @param code A language code
         * @returns #TRUE if the code matches this language.
         */
        matches(code: string): boolean;
    }

    namespace Layout {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            name: string;
            short_description: string;
            shortDescription: string;
        }
    }

    /**
     * #LightDMLayout is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Layout extends GObject.Object {
        static $gtype: GObject.GType<Layout>;
        declare static readonly __signalSignatures: Layout.SignalSignatures;

        // Properties

        get description(): string;
        get name(): string;
        get short_description(): string;
        get shortDescription(): string;

        // Constructors

        constructor(properties?: Partial<Layout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the long description of a layout.
         * @returns A long description of the layout
         */
        get_description(): string;
        /**
         * Get the name of a layout.
         * @returns The name of the layout
         */
        get_name(): string;
        /**
         * Get the short description of a layout.
         * @returns A short description of the layout
         */
        get_short_description(): string;
    }

    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            comment: string;
            key: string;
            name: string;
        }
    }

    /**
     * #LightDMSession is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;
        declare static readonly __signalSignatures: Session.SignalSignatures;

        // Properties

        get comment(): string;
        get key(): string;
        get name(): string;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the comment for a session
         * @returns The session comment
         */
        get_comment(): string;
        /**
         * Get the key for a session
         * @returns The session key
         */
        get_key(): string;
        /**
         * Get the name for a session
         * @returns The session name
         */
        get_name(): string;
        /**
         * Get the type a session
         * @returns The session type, e.g. x or mir
         */
        get_session_type(): string;
    }

    namespace User {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: Changed;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: string;
            display_name: string;
            displayName: string;
            has_messages: boolean;
            hasMessages: boolean;
            home_directory: string;
            homeDirectory: string;
            image: string;
            is_locked: boolean;
            isLocked: boolean;
            language: string;
            layout: string;
            layouts: string[];
            logged_in: boolean;
            loggedIn: boolean;
            name: string;
            real_name: string;
            realName: string;
            session: string;
            uid: number;
        }
    }

    /**
     * #LightDMUser is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class User extends GObject.Object {
        static $gtype: GObject.GType<User>;
        declare static readonly __signalSignatures: User.SignalSignatures;

        // Properties

        get background(): string;
        get display_name(): string;
        get displayName(): string;
        get has_messages(): boolean;
        get hasMessages(): boolean;
        get home_directory(): string;
        get homeDirectory(): string;
        get image(): string;
        get is_locked(): boolean;
        get isLocked(): boolean;
        get language(): string;
        get layout(): string;
        get layouts(): string[];
        get logged_in(): boolean;
        get loggedIn(): boolean;
        get name(): string;
        get real_name(): string;
        get realName(): string;
        get session(): string;
        get uid(): number;

        // Constructors

        constructor(properties?: Partial<User.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof User.SignalSignatures>(signal: K, callback: User.SignalSignatures[K]): number;
        connect_after<K extends keyof User.SignalSignatures>(signal: K, callback: User.SignalSignatures[K]): number;
        emit<K extends keyof User.SignalSignatures>(signal: K, ...args: Parameters<User.SignalSignatures[K]>): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Virtual methods

        vfunc_changed(): void;

        // Methods

        /**
         * Get the background file path for a user.
         * @returns The background file path for the given user or #NULL if no path
         */
        get_background(): string | null;
        /**
         * Get the display name of a user.
         * @returns The display name of the given user
         */
        get_display_name(): string;
        /**
         * Check if a user has waiting messages.
         * @returns #TRUE if the user has waiting messages.
         */
        get_has_messages(): boolean;
        /**
         * Get the home directory for a user.
         * @returns The users home directory
         */
        get_home_directory(): string;
        /**
         * Get the image URI for a user.
         * @returns The image URI for the given user or #NULL if no URI
         */
        get_image(): string | null;
        /**
         * Get if the user is locked.
         * @returns %TRUE if the user is locked
         */
        get_is_locked(): boolean;
        /**
         * Get the language for a user.
         * @returns The language in the form of a local specification (e.g. "de_DE.UTF-8") for the given user or #NULL if using the system default locale.
         */
        get_language(): string | null;
        /**
         * Get the keyboard layout for a user.
         * @returns The keyboard layout for the given user or #NULL if using system defaults.  Copy the value if you want to use it long term.
         */
        get_layout(): string | null;
        /**
         * Get the configured keyboard layouts for a user.
         * @returns A NULL-terminated array of keyboard layouts for the given user.  Copy the values if you want to use them long term.
         */
        get_layouts(): string[];
        /**
         * Check if a user is logged in.
         * @returns #TRUE if the user is currently logged in.
         */
        get_logged_in(): boolean;
        /**
         * Get the name of a user.
         * @returns The name of the given user
         */
        get_name(): string;
        /**
         * Get the real name of a user.
         * @returns The real name of the given user
         */
        get_real_name(): string;
        /**
         * Get the session for a user.
         * @returns The session for the given user or #NULL if using system defaults.
         */
        get_session(): string | null;
        /**
         * Get the uid of a user.
         * @returns The uid of the given user
         */
        get_uid(): number;
    }

    namespace UserList {
        // Signal callback interfaces

        interface UserAdded {
            (user: User): void;
        }

        interface UserChanged {
            (user: User): void;
        }

        interface UserRemoved {
            (user: User): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'user-added': UserAdded;
            'user-changed': UserChanged;
            'user-removed': UserRemoved;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            length: number;
            num_users: number;
            numUsers: number;
        }
    }

    /**
     * #LightDMUserList is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class UserList extends GObject.Object {
        static $gtype: GObject.GType<UserList>;
        declare static readonly __signalSignatures: UserList.SignalSignatures;

        // Properties

        get length(): number;
        get num_users(): number;
        get numUsers(): number;

        // Constructors

        constructor(properties?: Partial<UserList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UserList.SignalSignatures>(signal: K, callback: UserList.SignalSignatures[K]): number;
        connect_after<K extends keyof UserList.SignalSignatures>(
            signal: K,
            callback: UserList.SignalSignatures[K],
        ): number;
        emit<K extends keyof UserList.SignalSignatures>(
            signal: K,
            ...args: Parameters<UserList.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'user-added', callback: (_source: this, user: User) => void): number;
        connect_after(signal: 'user-added', callback: (_source: this, user: User) => void): number;
        emit(signal: 'user-added', user: User): void;
        connect(signal: 'user-changed', callback: (_source: this, user: User) => void): number;
        connect_after(signal: 'user-changed', callback: (_source: this, user: User) => void): number;
        emit(signal: 'user-changed', user: User): void;
        connect(signal: 'user-removed', callback: (_source: this, user: User) => void): number;
        connect_after(signal: 'user-removed', callback: (_source: this, user: User) => void): number;
        emit(signal: 'user-removed', user: User): void;

        // Static methods

        /**
         * Get the user list.
         */
        static get_instance(): UserList;

        // Virtual methods

        vfunc_user_added(user: User): void;
        vfunc_user_changed(user: User): void;
        vfunc_user_removed(user: User): void;

        // Methods

        get_length(): number;
        /**
         * Get information about a given user or #NULL if this user doesn't exist.
         * @param username Name of user to get.
         * @returns A #LightDMUser entry for the given user.
         */
        get_user_by_name(username: string): User;
        /**
         * Get a list of users to present to the user.  This list may be a subset of the
         * available users and may be empty depending on the server configuration.
         * @returns A list of #LightDMUser that should be presented to the user.
         */
        get_users(): User[];
    }

    type GreeterClass = typeof Greeter;
    type LanguageClass = typeof Language;
    type LayoutClass = typeof Layout;
    type SessionClass = typeof Session;
    type UserClass = typeof User;
    type UserListClass = typeof UserList;
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

export default LightDM;

// END
