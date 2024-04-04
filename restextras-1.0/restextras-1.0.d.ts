/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './restextras-1.0-ambient.d.ts';

/**
 * RestExtras-1.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Rest from '@girs/rest-1.0';

export namespace RestExtras {
    interface YoutubeProxyUploadCallback<A = GObject.Object> {
        (
            proxy: YoutubeProxy,
            payload: string,
            total: number,
            uploaded: number,
            error: GLib.Error,
            weak_object: A,
        ): void;
    }
    module FlickrProxy {
        // Constructor properties interface

        interface ConstructorProps extends Rest.Proxy.ConstructorProps {
            api_key: string;
            apiKey: string;
            shared_secret: string;
            sharedSecret: string;
            token: string;
        }
    }

    class FlickrProxy extends Rest.Proxy {
        static $gtype: GObject.GType<FlickrProxy>;

        // Own properties of RestExtras.FlickrProxy

        get api_key(): string;
        get apiKey(): string;
        get shared_secret(): string;
        get sharedSecret(): string;
        get token(): string;
        set token(val: string);

        // Constructors of RestExtras.FlickrProxy

        constructor(properties?: Partial<FlickrProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](api_key: string, shared_secret: string): FlickrProxy;
        // Conflicted with Rest.Proxy.new

        static ['new'](...args: never[]): any;

        static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy;

        // Own static methods of RestExtras.FlickrProxy

        /**
         * Examines the Flickr response and if it not a successful reply, set `error` and
         * return FALSE.
         * @param root The root node of a parsed Flickr response
         */
        static is_successful(root: Rest.XmlNode): boolean;

        // Own methods of RestExtras.FlickrProxy

        build_login_url(frob: string, perms: string): string;
        /**
         * Get the API key.
         * @returns the API key. This string is owned by #FlickrProxy and should not be freed.
         */
        get_api_key(): string;
        /**
         * Get the shared secret for authentication.
         * @returns the shared secret. This string is owned by #FlickrProxy and should not be freed.
         */
        get_shared_secret(): string;
        /**
         * Get the current token.
         * @returns the token, or %NULL if there is no token yet.  This string is owned by #FlickrProxy and should not be freed.
         */
        get_token(): string;
        /**
         * Create a new #RestProxyCall that can be used for uploading.
         *
         * See http://www.flickr.com/services/api/upload.api.html for details on
         * uploading to Flickr.
         * @returns a new #FlickrProxyCall
         */
        new_upload(): FlickrProxyCall;
        /**
         * Create a new #RestProxyCall that can be used for uploading.  `filename` will
         * be set as the "photo" parameter for you, avoiding you from having to open the
         * file and determine the MIME type.
         *
         * Note that this function can in theory block.
         *
         * See http://www.flickr.com/services/api/upload.api.html for details on
         * uploading to Flickr.
         * @param filename the file to upload
         * @returns a new #FlickrProxyCall
         */
        new_upload_for_file(filename: string): FlickrProxyCall;
        /**
         * Set the token.
         * @param token the access token
         */
        set_token(token: string): void;
        sign(params: { [key: string]: any } | GLib.HashTable<any, any>): string;
    }

    module FlickrProxyCall {
        // Constructor properties interface

        interface ConstructorProps extends Rest.ProxyCall.ConstructorProps {
            upload: boolean | any;
        }
    }

    class FlickrProxyCall extends Rest.ProxyCall {
        static $gtype: GObject.GType<FlickrProxyCall>;

        // Own properties of RestExtras.FlickrProxyCall

        /**
         * Set if the call should be sent to the photo upload endpoint and not the
         * general-purpose endpoint.
         */
        // This accessor conflicts with a property or field in a parent class or interface.
        upload: boolean | any;

        // Constructors of RestExtras.FlickrProxyCall

        constructor(properties?: Partial<FlickrProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module LastfmProxy {
        // Constructor properties interface

        interface ConstructorProps extends Rest.Proxy.ConstructorProps {
            api_key: string;
            apiKey: string;
            secret: string;
            session_key: string;
            sessionKey: string;
        }
    }

    class LastfmProxy extends Rest.Proxy {
        static $gtype: GObject.GType<LastfmProxy>;

        // Own properties of RestExtras.LastfmProxy

        get api_key(): string;
        get apiKey(): string;
        get secret(): string;
        get session_key(): string;
        set session_key(val: string);
        get sessionKey(): string;
        set sessionKey(val: string);

        // Constructors of RestExtras.LastfmProxy

        constructor(properties?: Partial<LastfmProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](api_key: string, secret: string): LastfmProxy;
        // Conflicted with Rest.Proxy.new

        static ['new'](...args: never[]): any;

        static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy;

        // Own static methods of RestExtras.LastfmProxy

        /**
         * Examines the Lastfm response and if it not a successful reply, set `error` and
         * return FALSE.
         * @param root The root node of a parsed Lastfm response
         */
        static is_successful(root: Rest.XmlNode): boolean;

        // Own methods of RestExtras.LastfmProxy

        build_login_url(token: string): string;
        /**
         * Get the API key.
         * @returns the API key. This string is owned by #LastfmProxy and should not be freed.
         */
        get_api_key(): string;
        /**
         * Get the secret for authentication.
         * @returns the secret. This string is owned by #LastfmProxy and should not be freed.
         */
        get_secret(): string;
        /**
         * Get the current session key.
         * @returns the session key, or %NULL if there is no session key yet.  This string is owned by #LastfmProxy and should not be freed.
         */
        get_session_key(): string;
        /**
         * Set the session key.
         * @param session_key the access session_key
         */
        set_session_key(session_key: string): void;
        sign(params: { [key: string]: any } | GLib.HashTable<any, any>): string;
    }

    module LastfmProxyCall {
        // Constructor properties interface

        interface ConstructorProps extends Rest.ProxyCall.ConstructorProps {}
    }

    /**
     * #LastfmProxyCall has no publicly available members.
     */
    class LastfmProxyCall extends Rest.ProxyCall {
        static $gtype: GObject.GType<LastfmProxyCall>;

        // Constructors of RestExtras.LastfmProxyCall

        constructor(properties?: Partial<LastfmProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module YoutubeProxy {
        // Constructor properties interface

        interface ConstructorProps extends Rest.Proxy.ConstructorProps {
            developer_key: string;
            developerKey: string;
            user_auth: string;
            userAuth: string;
        }
    }

    class YoutubeProxy extends Rest.Proxy {
        static $gtype: GObject.GType<YoutubeProxy>;

        // Own properties of RestExtras.YoutubeProxy

        get developer_key(): string;
        get developerKey(): string;
        get user_auth(): string;
        set user_auth(val: string);
        get userAuth(): string;
        set userAuth(val: string);

        // Constructors of RestExtras.YoutubeProxy

        constructor(properties?: Partial<YoutubeProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](developer_key: string): YoutubeProxy;

        static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy;

        // Own methods of RestExtras.YoutubeProxy

        set_user_auth(user_auth: string): void;
        /**
         * Upload a file.
         * @param filename filename
         * @param fields fields
         * @param incomplete incomplete
         * @param callback callback to invoke upon completion
         * @param weak_object an object instance used to tie the life cycle of the proxy to
         * @returns %TRUE, or %FALSE if the file could not be opened
         */
        upload_async(
            filename: string,
            fields: { [key: string]: any } | GLib.HashTable<any, any>,
            incomplete: boolean,
            callback: YoutubeProxyUploadCallback,
            weak_object: GObject.Object,
        ): boolean;
    }

    type FlickrProxyCallClass = typeof FlickrProxyCall;
    type FlickrProxyClass = typeof FlickrProxy;
    type LastfmProxyCallClass = typeof LastfmProxyCall;
    type LastfmProxyClass = typeof LastfmProxy;
    type YoutubeProxyClass = typeof YoutubeProxy;
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

export default RestExtras;
// END
