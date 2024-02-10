/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './restextras-0.7-ambient.d.ts';
import './restextras-0.7-import.d.ts';
/**
 * RestExtras-0.7
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
    }

    /**
     * #FlickrProxy has no publicly available members.
     */
    class FlickrProxy extends Rest.Proxy {
        // Own properties of RestExtras-0.7.FlickrProxy

        api_key: string;
        apiKey: string;
        shared_secret: string;
        sharedSecret: string;
        token: string;

        // Constructors of RestExtras-0.7.FlickrProxy

        static ['new'](api_key: string, shared_secret: string): FlickrProxy;

        static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy;

        // Owm methods of RestExtras-0.7.FlickrProxy

        /**
         * Examines the Flickr response and if it not a successful reply, set `error` and
         * return FALSE.
         * @param root The root node of a parsed Flickr response
         */
        static is_successful(root: Rest.XmlNode): boolean;

        // Owm methods of RestExtras-0.7.FlickrProxy

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
        sign(params: GLib.HashTable<any, any>): string;
    }

    module FlickrProxyCall {
        // Constructor properties interface
    }

    /**
     * #FlickrProxyCall has no publicly available members.
     */
    class FlickrProxyCall extends Rest.ProxyCall {
        // Own properties of RestExtras-0.7.FlickrProxyCall

        /**
         * Set if the call should be sent to the photo upload endpoint and not the
         * general-purpose endpoint.
         */
        upload: boolean;
    }

    module LastfmProxy {
        // Constructor properties interface
    }

    /**
     * #LastfmProxy has no publicly available members.
     */
    class LastfmProxy extends Rest.Proxy {
        // Own properties of RestExtras-0.7.LastfmProxy

        api_key: string;
        apiKey: string;
        secret: string;
        session_key: string;
        sessionKey: string;

        // Constructors of RestExtras-0.7.LastfmProxy

        static ['new'](api_key: string, secret: string): LastfmProxy;

        static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy;

        // Owm methods of RestExtras-0.7.LastfmProxy

        /**
         * Examines the Lastfm response and if it not a successful reply, set `error` and
         * return FALSE.
         * @param root The root node of a parsed Lastfm response
         */
        static is_successful(root: Rest.XmlNode): boolean;

        // Owm methods of RestExtras-0.7.LastfmProxy

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
        sign(params: GLib.HashTable<any, any>): string;
    }

    module LastfmProxyCall {
        // Constructor properties interface
    }

    /**
     * #LastfmProxyCall has no publicly available members.
     */
    class LastfmProxyCall extends Rest.ProxyCall {}

    module YoutubeProxy {
        // Constructor properties interface
    }

    /**
     * #YoutubeProxy has no publicly available members.
     */
    class YoutubeProxy extends Rest.Proxy {
        // Own properties of RestExtras-0.7.YoutubeProxy

        developer_key: string;
        developerKey: string;
        user_auth: string;
        userAuth: string;

        // Constructors of RestExtras-0.7.YoutubeProxy

        static ['new'](developer_key: string): YoutubeProxy;

        static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy;

        // Owm methods of RestExtras-0.7.YoutubeProxy

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
            fields: GLib.HashTable<any, any>,
            incomplete: boolean,
            callback: YoutubeProxyUploadCallback,
            weak_object: GObject.Object,
        ): boolean;
    }

    class FlickrProxyCallClass {}

    class FlickrProxyClass {}

    class FlickrProxyPrivate {}

    class LastfmProxyCallClass {}

    class LastfmProxyClass {}

    class LastfmProxyPrivate {}

    class YoutubeProxyClass {}

    class YoutubeProxyPrivate {}

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
