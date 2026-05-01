
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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace SoupGNOME {

    /**
     * SoupGNOME-2.4
     */


    const COOKIE_JAR_SQLITE_FILENAME: string;

    function gnome_features_2_26_get_type(): GObject.GType;

    namespace CookieJarSqlite {
        // Signal signatures
        interface SignalSignatures extends Soup.CookieJarDB.SignalSignatures {
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::accept-policy": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Soup.CookieJarDB.ConstructorProps, Soup.SessionFeature.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CookieJarSqlite extends Soup.CookieJarDB implements Soup.SessionFeature {
        static $gtype: GObject.GType<CookieJarSqlite>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CookieJarSqlite.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CookieJarSqlite.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](filename: string, read_only: boolean): CookieJarSqlite;

        // Conflicted with Soup.CookieJar.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof CookieJarSqlite.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarSqlite.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CookieJarSqlite.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarSqlite.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CookieJarSqlite.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CookieJarSqlite.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace PasswordManagerGNOME {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Soup.SessionFeature.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PasswordManagerGNOME extends GObject.Object implements Soup.SessionFeature {
        static $gtype: GObject.GType<PasswordManagerGNOME>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PasswordManagerGNOME.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PasswordManagerGNOME.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PasswordManagerGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PasswordManagerGNOME.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PasswordManagerGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PasswordManagerGNOME.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PasswordManagerGNOME.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PasswordManagerGNOME.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Adds a "sub-feature" of type `type` to the base feature `feature`.
         * This is used for features that can be extended with multiple
         * different types. Eg, the authentication manager can be extended
         * with subtypes of {@link Soup.Auth}.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @returns `true` if `feature` accepted `type` as a subfeature.
         */
        add_feature(type: GObject.GType): boolean;

        /**
         * @param session 
         */
        attach(session: Soup.Session): void;

        /**
         * @param session 
         */
        detach(session: Soup.Session): void;

        /**
         * Tests if `feature` has a "sub-feature" of type `type`. See
         * `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @returns `true` if `feature` has a subfeature of type `type`
         */
        has_feature(type: GObject.GType): boolean;

        /**
         * Removes the "sub-feature" of type `type` from the base feature
         * `feature`. See `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @returns `true` if `type` was removed from `feature`
         */
        remove_feature(type: GObject.GType): boolean;

        /**
         * Adds a "sub-feature" of type `type` to the base feature `feature`.
         * This is used for features that can be extended with multiple
         * different types. Eg, the authentication manager can be extended
         * with subtypes of {@link Soup.Auth}.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @virtual
         */
        vfunc_add_feature(type: GObject.GType): boolean;

        /**
         * Perform setup when a feature is added to a session
         * @param session 
         * @virtual
         */
        vfunc_attach(session: Soup.Session): void;

        /**
         * Perform cleanup when a feature is removed from a session
         * @param session 
         * @virtual
         */
        vfunc_detach(session: Soup.Session): void;

        /**
         * Tests if `feature` has a "sub-feature" of type `type`. See
         * `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @virtual
         */
        vfunc_has_feature(type: GObject.GType): boolean;

        /**
         * Removes the "sub-feature" of type `type` from the base feature
         * `feature`. See `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @virtual
         */
        vfunc_remove_feature(type: GObject.GType): boolean;

        /**
         * Proxies the session's {@link Soup.Session.SignalSignatures.request_queued | Soup.Session::request_queued} signal
         * @param session 
         * @param msg 
         * @virtual
         */
        vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void;

        /**
         * Proxies the session's {@link Soup.Session.SignalSignatures.request_started | Soup.Session::request_started} signal. Deprecated 2.50. Use {@link Soup.Message.SignalSignatures.starting | Soup.Message::starting} instead.
         * @param session 
         * @param msg 
         * @param socket 
         * @virtual
         */
        vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void;

        /**
         * Proxies the session's {@link Soup.Session.SignalSignatures.request_unqueued | Soup.Session::request_unqueued} signal
         * @param session 
         * @param msg 
         * @virtual
         */
        vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void;
    }


    namespace ProxyResolverGNOME {
        // Signal signatures
        interface SignalSignatures extends Soup.ProxyResolverDefault.SignalSignatures {
            "notify::gproxy-resolver": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Soup.ProxyResolverDefault.ConstructorProps, Soup.ProxyURIResolver.ConstructorProps, Soup.SessionFeature.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ProxyResolverGNOME extends Soup.ProxyResolverDefault implements Soup.ProxyURIResolver, Soup.SessionFeature {
        static $gtype: GObject.GType<ProxyResolverGNOME>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProxyResolverGNOME.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProxyResolverGNOME.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ProxyResolverGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyResolverGNOME.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProxyResolverGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyResolverGNOME.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProxyResolverGNOME.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProxyResolverGNOME.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Asynchronously determines a proxy URI to use for `msg` and calls
         * `callback`.
         * @param uri the {@link Soup.URI} you want a proxy for
         * @param async_context the {@link GLib.MainContext} to invoke `callback` in
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to invoke with the proxy address
         */
        get_proxy_uri_async(uri: Soup.URI, async_context: (GLib.MainContext | null), cancellable: (Gio.Cancellable | null), callback: Soup.ProxyURIResolverCallback): void;

        /**
         * Synchronously determines a proxy URI to use for `uri`. If `uri`
         * should be sent via proxy, *`proxy_uri` will be set to the URI of the
         * proxy, else it will be set to `null`.
         * @param uri the {@link Soup.URI} you want a proxy for
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns {@link Soup.Status.OK} if successful, or a transport-level error.
         */
        get_proxy_uri_sync(uri: Soup.URI, cancellable: (Gio.Cancellable | null)): [number, Soup.URI];

        /**
         * Asynchronously determines a proxy URI to use for `msg` and calls
         * `callback`.
         * @param uri the {@link Soup.URI} you want a proxy for
         * @param async_context the {@link GLib.MainContext} to invoke `callback` in
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to invoke with the proxy address
         * @virtual
         */
        vfunc_get_proxy_uri_async(uri: Soup.URI, async_context: (GLib.MainContext | null), cancellable: (Gio.Cancellable | null), callback: Soup.ProxyURIResolverCallback): void;

        /**
         * Synchronously determines a proxy URI to use for `uri`. If `uri`
         * should be sent via proxy, *`proxy_uri` will be set to the URI of the
         * proxy, else it will be set to `null`.
         * @param uri the {@link Soup.URI} you want a proxy for
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_get_proxy_uri_sync(uri: Soup.URI, cancellable: (Gio.Cancellable | null)): [number, Soup.URI];

        /**
         * Adds a "sub-feature" of type `type` to the base feature `feature`.
         * This is used for features that can be extended with multiple
         * different types. Eg, the authentication manager can be extended
         * with subtypes of {@link Soup.Auth}.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @returns `true` if `feature` accepted `type` as a subfeature.
         */
        add_feature(type: GObject.GType): boolean;

        /**
         * @param session 
         */
        attach(session: Soup.Session): void;

        /**
         * @param session 
         */
        detach(session: Soup.Session): void;

        /**
         * Tests if `feature` has a "sub-feature" of type `type`. See
         * `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @returns `true` if `feature` has a subfeature of type `type`
         */
        has_feature(type: GObject.GType): boolean;

        /**
         * Removes the "sub-feature" of type `type` from the base feature
         * `feature`. See `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @returns `true` if `type` was removed from `feature`
         */
        remove_feature(type: GObject.GType): boolean;

        /**
         * Adds a "sub-feature" of type `type` to the base feature `feature`.
         * This is used for features that can be extended with multiple
         * different types. Eg, the authentication manager can be extended
         * with subtypes of {@link Soup.Auth}.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @virtual
         */
        vfunc_add_feature(type: GObject.GType): boolean;

        /**
         * Perform setup when a feature is added to a session
         * @param session 
         * @virtual
         */
        vfunc_attach(session: Soup.Session): void;

        /**
         * Perform cleanup when a feature is removed from a session
         * @param session 
         * @virtual
         */
        vfunc_detach(session: Soup.Session): void;

        /**
         * Tests if `feature` has a "sub-feature" of type `type`. See
         * `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @virtual
         */
        vfunc_has_feature(type: GObject.GType): boolean;

        /**
         * Removes the "sub-feature" of type `type` from the base feature
         * `feature`. See `soup_session_feature_add_feature()`.
         * @param type the {@link GObject.GType} of a "sub-feature"
         * @virtual
         */
        vfunc_remove_feature(type: GObject.GType): boolean;

        /**
         * Proxies the session's {@link Soup.Session.SignalSignatures.request_queued | Soup.Session::request_queued} signal
         * @param session 
         * @param msg 
         * @virtual
         */
        vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void;

        /**
         * Proxies the session's {@link Soup.Session.SignalSignatures.request_started | Soup.Session::request_started} signal. Deprecated 2.50. Use {@link Soup.Message.SignalSignatures.starting | Soup.Message::starting} instead.
         * @param session 
         * @param msg 
         * @param socket 
         * @virtual
         */
        vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void;

        /**
         * Proxies the session's {@link Soup.Session.SignalSignatures.request_unqueued | Soup.Session::request_unqueued} signal
         * @param session 
         * @param msg 
         * @virtual
         */
        vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void;
    }


    /**
     * @gir-type Alias
     */
    type CookieJarSqliteClass = typeof CookieJarSqlite;

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

export default SoupGNOME;

// END
