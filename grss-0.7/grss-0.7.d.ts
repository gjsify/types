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
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Grss {
    /**
     * Grss-0.7
     */

    namespace FeedAtomFormatter {
        // Signal signatures
        interface SignalSignatures extends FeedFormatter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FeedFormatter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedAtomFormatter extends FeedFormatter {
        static $gtype: GObject.GType<FeedAtomFormatter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedAtomFormatter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedAtomFormatter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedAtomFormatter;

        // Signals

        /** @signal */
        connect<K extends keyof FeedAtomFormatter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedAtomFormatter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedAtomFormatter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedAtomFormatter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedAtomFormatter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedAtomFormatter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FeedChannel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedChannel extends GObject.Object {
        static $gtype: GObject.GType<FeedChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedChannel;

        static new_from_file(path: string): FeedChannel;

        static new_from_memory(data: string): FeedChannel;

        static new_from_xml(doc: libxml2.DocPtr): FeedChannel;

        static new_with_source(source: string): FeedChannel;

        // Signals

        /** @signal */
        connect<K extends keyof FeedChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedChannel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * To add a contributor to the `channel`.
         * @param contributor a {@link Grss.Person}.
         */
        add_contributor(contributor: Person): void;
        /**
         * To add a cookie related to the `channel`, will be involved in HTTP sessions
         * while fetching it. More cookie can be added to every {@link Grss.FeedChannel}
         * @param cookie HTML cookie to add to the {@link Grss.FeedChannel}'s cookie jar
         */
        add_cookie(cookie: Soup.Cookie): void;
        /**
         * Utility to fetch and populate a {@link Grss.FeedChannel} for the first time, and init
         * all his internal values. Only the source URL has to be set in `channel`
         * (with `grss_feed_channel_set_source()`). Be aware this function is sync, do not
         * returns until the feed isn't downloaded and parsed.
         * @returns `true` if the feed is correctly fetched and parsed, `false` otherwise.
         */
        fetch(): boolean;
        /**
         * Utility to fetch and populate a {@link Grss.FeedChannel}, and retrieve all its
         * items.
         * @returns a GList of {@link Grss.FeedItem}, to be completely unreferenced and freed when no longer in use, or `null` if an error occurs.
         */
        fetch_all(): FeedItem[];
        /**
         * Similar to `grss_feed_channel_fetch_all()`, but asyncronous.
         */
        fetch_all_async(): globalThis.Promise<FeedItem[]>;
        /**
         * Similar to `grss_feed_channel_fetch_all()`, but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_all_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Similar to `grss_feed_channel_fetch_all()`, but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_all_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<FeedItem[]> | void;
        /**
         * Finalizes an asyncronous operation started with
         * `grss_feed_channel_fetch_all_async()`.
         * @param res the {@link Gio.AsyncResult} passed to the callback.
         * @returns list of items fetched from the {@link Grss.FeedChannel}, or `null` if `error` is set. The list (and contained items) is freed at the end of the callback
         */
        fetch_all_finish(res: Gio.AsyncResult): FeedItem[];
        /**
         * Similar to `grss_feed_channel_fetch()`, but asyncronous.
         */
        fetch_async(): globalThis.Promise<boolean>;
        /**
         * Similar to `grss_feed_channel_fetch()`, but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Similar to `grss_feed_channel_fetch()`, but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * If a fetch operation was scheduled with `grss_feed_channel_fetch_async()` or
         * `grss_feed_channel_fetch_all_async()`, cancel it.
         * @returns `true` if a fetch was scheduled (and now cancelled), `false` if this function had nothing to do
         */
        fetch_cancel(): boolean;
        /**
         * Finalizes an asyncronous operation started with
         * `grss_feed_channel_fetch_async()`.
         * @param res the {@link Gio.AsyncResult} passed to the callback.
         * @returns `true` if `channel` informations have been successfully fetched, `false` otherwise.
         */
        fetch_finish(res: Gio.AsyncResult): boolean;
        /**
         * Retrieves category of the `channel`.
         * @returns category of the feed, or `null`.
         */
        get_category(): string;
        /**
         * Retrieves reference to the contributors of the `channel`.
         * @returns list of contributors to the channel, or `null`.
         */
        get_contributors(): Person[];
        /**
         * Retrieves reference to the HTML cookies of the `channel`.
         * The list and the individual cookies should all be freed after use.
         * You can use soup_cookies_free.
         * @returns list of cookies to the channel, or `null`.
         */
        get_cookies(): Soup.Cookie[];
        /**
         * Retrieves indications about the copyright.
         * @returns copyright of the `channel`, or `null`.
         */
        get_copyright(): string;
        /**
         * Retrieves the description of `channel`.
         * @returns description of the feed, or `null`.
         */
        get_description(): string;
        /**
         * Retrieves reference to the editor or the `channel`.
         * @returns {@link Grss.Person}, or `null`.
         */
        get_editor(): Person;
        /**
         * Retrieves the file format of `channel`.
         * @returns file format of channel.
         */
        get_format(): string;
        /**
         * Retrieves information about the feed's software generator.
         * @returns generator of `channel`, or `null`.
         */
        get_generator(): string;
        /**
         * GZIP compression of the channel is either on or off.
         * @returns `true` if `channel` has GZIP compression on.
         */
        get_gzip_compression(): boolean;
        /**
         * Retrieves the homepage of the site for which `channel` is the feed.
         * @returns reference homepage of the feed, or `null`.
         */
        get_homepage(): string;
        /**
         * Retrieves URL of the favicon of the channel (and/or the website for which
         * this is the feed).
         * @returns URL of the favicon, or `null`.
         */
        get_icon(): string;
        /**
         * Retrieves the URL of the image assigned to the channel.
         * @returns URL of the image, or `null`.
         */
        get_image(): string;
        /**
         * Retrieves the language of the `channel`.
         * @returns string rappresenting the language of channel, or `null`.
         */
        get_language(): string;
        /**
         * Retrieves the publishing time of `channel`.
         * @returns time of feed's publish.
         */
        get_publish_time(): number;
        /**
         * Retrieves information about the PubSubHubbub hub of the channel.
         * @param hub location for the hub string, or `null`.
         * @returns `true` if a valid PubSubHubbub hub has been set for the `channel`, `false` otherwise.
         */
        get_pubsubhub(hub: string): boolean;
        /**
         * Retrieves information about the RSSCloud coordinates of the channel.
         * @param path location for the path string, or `null`.
         * @param protocol location for the protocol string, or `null`.
         * @returns `true` if a valid RSSCloud path has been set for the `channel`, `false` otherwise.
         */
        get_rsscloud(path: string, protocol: string): boolean;
        /**
         * Retrieves URL where to fetch the `channel`.
         * @returns URL of the channel.
         */
        get_source(): string;
        /**
         * Retrieves title of the `channel`.
         * @returns title of the feed, or `null`.
         */
        get_title(): string;
        /**
         * Retrieves the update interval for the feed. Pay attention to the fact the
         * value can be unset, and the function returns 0: in this case the caller
         * must manually set a default update interval with
         * `grss_feed_channel_set_update_interval()`.
         * @returns update interval for the `channel`, in minutes.
         */
        get_update_interval(): number;
        /**
         * Retrieves the update time of `channel`.
         * @returns time of the feed's latest update. If this value was not set (with `grss_feed_channel_set_update_time()`) returns `grss_feed_channel_get_publish_time()`.
         */
        get_update_time(): number;
        /**
         * Retrieves reference to the webmaster of the feed.
         * @returns webmaster of `channel`, or `null`.
         */
        get_webmaster(): string;
        /**
         * To set the category of the `channel`.
         * @param category category of the feed.
         */
        set_category(category: string): void;
        /**
         * To set the copyright of the feed.
         * @param copyright copyright of the channel.
         */
        set_copyright(copyright: string): void;
        /**
         * To set the description of `channel`.
         * @param description description of the feed.
         */
        set_description(description: string): void;
        /**
         * To set the editor of the `channel`.
         * @param editor a {@link Grss.Person}.
         */
        set_editor(editor: Person): void;
        /**
         * To assign a file format to the feed.
         * @param format format of the file, such as "application/atom+xml" or "application/rss+xml".
         */
        set_format(format: string): void;
        /**
         * To set information about the software generator of `channel`.
         * @param generator software generator of the feed.
         */
        set_generator(generator: string): void;
        /**
         * Set the GZIP compression for the channel to on or off.
         * @param value `true` to enable GZIP compression when fetching the channel
         */
        set_gzip_compression(value: boolean): void;
        /**
         * To set the homepage of the site the `channel` belongs.
         * @param homepage homepage for the main website.
         * @returns `true` if `homepage` is a valid URL, `false` otherwise
         */
        set_homepage(homepage: string): boolean;
        /**
         * To set the URL of the icon rappresenting `channel`.
         * @param icon URL where to retrieve the favicon.
         * @returns `true` if `icon` is a valid URL, `false` otherwise
         */
        set_icon(icon: string): boolean;
        /**
         * To set a rappresentative image to `channel`.
         * @param image URL of the image.
         * @returns `true` if `image` is a valid URL, `false` otherwise
         */
        set_image(image: string): boolean;
        /**
         * To set the language of `channel`.
         * @param language string holding the language of the feed.
         */
        set_language(language: string): void;
        /**
         * To set the time of publishing for the feed.
         * @param publish timestamp of publishing.
         */
        set_publish_time(publish: number): void;
        /**
         * To set information about PubSubHubbub for the channel. To unset the hub,
         * pass `null` as parameter.
         * @param hub hub for the feed, or `null`.
         * @returns `true` if `hub` is a valid URL, `false` otherwise
         */
        set_pubsubhub(hub: string): boolean;
        /**
         * To set information about RSSCloud notifications for the channel.
         * @param path complete references of the URL where to register subscription, e.g.        http://example.com/rsscloudNotify .
         * @param protocol type of protocol used for notifications.
         */
        set_rsscloud(path: string, protocol: string): void;
        /**
         * To assign the URL where to fetch the feed.
         * @param source URL of the feed.
         * @returns `true` if `source` is a valid URL, `false` otherwise
         */
        set_source(source: string): boolean;
        /**
         * To set a title to the `channel`.
         * @param title title of the feed.
         */
        set_title(title: string): void;
        /**
         * To set the update interval for `channel`.
         * @param minutes update interval, in minutes.
         */
        set_update_interval(minutes: number): void;
        /**
         * To set the latest update time of `channel`.
         * @param update update time of the feed.
         */
        set_update_time(update: number): void;
        /**
         * To assign a webmaster to the `channel`.
         * @param webmaster webmaster of the feed.
         */
        set_webmaster(webmaster: string): void;
    }

    namespace FeedEnclosure {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedEnclosure extends GObject.Object {
        static $gtype: GObject.GType<FeedEnclosure>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedEnclosure.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedEnclosure.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](url: string): FeedEnclosure;

        // Signals

        /** @signal */
        connect<K extends keyof FeedEnclosure.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedEnclosure.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedEnclosure.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedEnclosure.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedEnclosure.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedEnclosure.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Utility to fetch a {@link Grss.FeedEnclosure}. Contents are stored in a temporary
         * {@link Gio.File}, which is suggested to move on a permanent location to keep it over
         * time.
         * @returns temporary file where the contents have been written, or `null` if an error occours.
         */
        fetch(): Gio.File;
        /**
         * Similar to `grss_feed_enclosure_fetch()`, but asyncronous.
         */
        fetch_async(): globalThis.Promise<Gio.File>;
        /**
         * Similar to `grss_feed_enclosure_fetch()`, but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Similar to `grss_feed_enclosure_fetch()`, but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.File> | void;
        /**
         * Finalizes an asyncronous operation started with
         * `grss_feed_enclosure_fetch_async()`.
         * @param res the {@link Gio.AsyncResult} passed to the callback.
         * @returns temporary file where the contents have been written, or `null` if an error occours.
         */
        fetch_finish(res: Gio.AsyncResult): Gio.File;
        /**
         * Retrieves the format of the enclosed file.
         * @returns type of `enclosure`.
         */
        get_format(): string;
        /**
         * Retrieves the size of the embedded file.
         * @returns size of the `enclosure`, in bytes.
         */
        get_length(): number;
        /**
         * Retrieves the URL of the `enclosure`.
         * @returns the URL where the enclosure may be found.
         */
        get_url(): string;
        /**
         * To set the type of the external file.
         * @param type type of content.
         */
        set_format(type: string): void;
        /**
         * To set the size of the embedded `enclosure`.
         * @param length size of the enclosure, in bytes.
         */
        set_length(length: number): void;
    }

    namespace FeedFormatter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class FeedFormatter extends GObject.Object {
        static $gtype: GObject.GType<FeedFormatter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedFormatter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedFormatter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FeedFormatter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedFormatter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedFormatter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedFormatter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedFormatter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedFormatter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Formats the assigned {@link Grss.FeedChannel} and `GrssFeedItems` into a plain text
         * string, accordly to the current {@link Grss.FeedFormatter} instance.
         * @virtual
         */
        vfunc_format(): string;

        // Methods

        /**
         * Adds a single {@link Grss.FeedItem} in the `formatter`.
         * @param item a {@link Grss.FeedItem} to add into the `formatter`.
         */
        add_item(item: FeedItem): void;
        /**
         * Adds a list of `GrssFeedItems` in the `formatter`.
         * @param items a list of `GrssFeedItems` to add into         the `formatter`.
         */
        add_items(items: FeedItem[]): void;
        /**
         * Formats the assigned {@link Grss.FeedChannel} and `GrssFeedItems` into a plain text
         * string, accordly to the current {@link Grss.FeedFormatter} instance.
         * @returns a string containing the plain text rappresentation of the given channel containing the given items.
         */
        format(): string;
        /**
         * Gets the current {@link Grss.FeedChannel} assigned to the `formatter`.
         * @returns a {@link Grss.FeedChannel}, or `null` if none has been assigned.
         */
        get_channel(): FeedChannel;
        /**
         * Gets the current `GrssFeedItems` assigned to the `formatter`.
         * @returns a list of `GrssFeedItems`, or `null` if none has been assigned.
         */
        get_items(): FeedItem[];
        /**
         * Resets the status of the {@link Grss.FeedFormatter}, cleaning up the assigned
         * {@link Grss.FeedChannel} and related `GrssFeedItems`. This way `formatter` is ready to
         * be used again with new data.
         */
        reset(): void;
        /**
         * Inits the {@link Grss.FeedFormatter} with the given `channel`. A {@link Grss.FeedFormatter}
         * can format a single {@link Grss.FeedChannel} each time, but may be reused by calling
         * `grss_feed_formatter_reset()`
         * @param channel the reference {@link Grss.FeedChannel} for the `formatter`.
         */
        set_channel(channel: FeedChannel): void;
    }

    namespace FeedItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedItem extends GObject.Object {
        static $gtype: GObject.GType<FeedItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: FeedChannel): FeedItem;

        // Signals

        /** @signal */
        connect<K extends keyof FeedItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a category to the `item`. The complete list can be obtained with
         * `grss_feed_item_get_categories()`.
         * @param category a new category to assign to the item.
         */
        add_category(category: string): void;
        /**
         * To add a contributor to the `item`.
         * @param contributor a {@link Grss.Person}.
         */
        add_contributor(contributor: Person): void;
        /**
         * Adds an enclosure to the `item`. That external elements may be references
         * to images, videos, or other contents (usually multimedial) embedded in the
         * element.
         * @param enclosure a {@link Grss.FeedEnclosure} to add to the item.
         */
        add_enclosure(enclosure: FeedEnclosure): void;
        /**
         * Retrieves the author of `item`.
         * @returns {@link Grss.Person}, or `null`.
         */
        get_author(): Person;
        /**
         * Retrieves list of categories assigned to the `item`.
         * @returns list of strings, one for assigned category. Do not free or modify this list.
         */
        get_categories(): string[];
        /**
         * Retrieves the URL where to catch comments to the `item`.
         * @returns URL to parse to read comments for `item`, or `null`.
         */
        get_comments_url(): string;
        /**
         * Retrieves contributors for `item`.
         * @returns list of          contributors to the item.
         */
        get_contributors(): Person[];
        /**
         * Retrieves copyright reference for the `item`.
         * @returns copyright mark, or `null`.
         */
        get_copyright(): string;
        /**
         * Retrieves the description of the `item`.
         * @returns description of `item`.
         */
        get_description(): string;
        /**
         * Retrieves the list of enclosures added with `grss_feed_item_add_enclosure()`.
         * @returns a list of {@link Grss.FeedEnclosure}. This is a direct reference to the internal list, do not free or modify it.
         */
        get_enclosures(): FeedEnclosure[];
        /**
         * Retrieves the geo reference of the `item`.
         * @returns `true` if `item` has geographic coordinates assigned and `latitude` and `longitude` have been set, `false` if `item` has not geo reference.
         */
        get_geo_point(): [boolean, number, number];
        /**
         * Retrieves the ID assigned to the `item`. If no ID was set with
         * `grss_feed_item_set_id()` this returns the same of `grss_feed_item_get_source()`.
         * Pay attention to the fact this library do not check uniqueness of assigned
         * IDs.
         * @returns ID of the item.
         */
        get_id(): string;
        /**
         * Retrieves the feed from which the item belongs.
         * @returns the parent feed, as set in `grss_feed_item_new()`.
         */
        get_parent(): FeedChannel;
        /**
         * Retrieves the publish time of the item. By default this value is the
         * current timestamp assigned when creating the {@link Grss.FeedItem}, and may be
         * changed with `grss_feed_item_set_publish_time()`.
         * @returns publish time of `item`.
         */
        get_publish_time(): number;
        /**
         * Retrieves references to the real source of `item`.
         * @param realsource will be assigned to the URL of the real source, or `null`.
         * @param title will be assigned to the title of the real source, or `null`.
         */
        get_real_source(realsource: string, title: string): void;
        /**
         * Retrieves indication about posts related to `item`.
         * @returns related posts, or `null`.
         */
        get_related(): string;
        /**
         * Retrieves the URL where the `item` can be found.
         * @returns URL of the item, or `null`.
         */
        get_source(): string;
        /**
         * Retrieves the title assigned to `item`.
         * @returns title of the element.
         */
        get_title(): string;
        /**
         * To assign an author to the `item`.
         * @param author a {@link Grss.Person}.
         */
        set_author(author: Person): void;
        /**
         * To assign the URL where to fetch comments for the item.
         * @param url URL where to retrieve comments to the item.
         * @returns `true` if `url` is a valid URL, `false` otherwise
         */
        set_comments_url(url: string): boolean;
        /**
         * To set a copyright reference to `item`.
         * @param copyright copyright declaration for the item.
         */
        set_copyright(copyright: string): void;
        /**
         * To set the description of `item`. Usually "description" means his content.
         * @param description content of the item.
         */
        set_description(description: string): void;
        /**
         * To assign geographic context to the `item`.
         * Passing -1 as `latitude` or `longitude`, the relative value is untouched in
         * the object. This is to easy assignment of coordinates in more than a
         * single step. If both are -1, nothing happens.
         * @param latitude latitude of the point, or -1 to leave the previous one.
         * @param longitude longitude of the point, or -1 to leave the previous one.
         */
        set_geo_point(latitude: number, longitude: number): void;
        /**
         * To set the ID of the `item`. This parameter has not a particular format: it
         * is just a string used to identify in unique way the item.
         * @param id the new ID to set.
         */
        set_id(id: string): void;
        /**
         * To set the publish time of the item.
         * @param publish publishing timestamp of the item.
         */
        set_publish_time(publish: number): void;
        /**
         * To set an alternative real source for `item`. This parameter is used by web
         * aggregators to explicit the origin of a content reproduced in them.
         * @param realsource URL of the real source for the item.
         * @param title title of the real source.
         * @returns `true` if `realsource` is a valid URL, `false` otherwise
         */
        set_real_source(realsource: string, title: string): boolean;
        /**
         * To set reference to a post related to `item`.
         * @param related reference to a related post.
         */
        set_related(related: string): void;
        /**
         * To set the source of the `item`.
         * @param source URL of the item.
         * @returns `true` if `source` is a valid URL, `false` otherwise
         */
        set_source(source: string): boolean;
        /**
         * To set a title to the `item`.
         * @param title title of the item.
         */
        set_title(title: string): void;
    }

    namespace FeedParser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedParser extends GObject.Object {
        static $gtype: GObject.GType<FeedParser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedParser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedParser;

        // Signals

        /** @signal */
        connect<K extends keyof FeedParser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedParser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedParser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedParser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedParser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Parses the given XML `doc`, belonging to the given `feed`, to obtain a list
         * of {@link Grss.FeedItem}.
         * @param feed a {@link Grss.FeedChannel} to be parsed.
         * @param doc XML document extracted from the contents of the feed, which must       already been fetched.
         * @returns a list of {@link Grss.FeedItem}, to be freed when no longer in use, or NULL if anerror occours and `error` is set.
         */
        parse(feed: FeedChannel, doc: libxml2.DocPtr): FeedItem[];
        /**
         * Parses the given XML `doc`, belonging to the given `feed`.
         *
         * Similar to `grss_feed_parser_parse()`, but `grss_feed_parser_parse_channel()`
         * skips parsing of items into the document.
         * @param feed a {@link Grss.FeedChannel} to be parsed.
         * @param doc XML document extracted from the contents of the feed, which must       already been fetched.
         */
        parse_channel(feed: FeedChannel, doc: libxml2.DocPtr): void;
    }

    namespace FeedRssFormatter {
        // Signal signatures
        interface SignalSignatures extends FeedFormatter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FeedFormatter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedRssFormatter extends FeedFormatter {
        static $gtype: GObject.GType<FeedRssFormatter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedRssFormatter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedRssFormatter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedRssFormatter;

        // Signals

        /** @signal */
        connect<K extends keyof FeedRssFormatter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedRssFormatter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedRssFormatter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedRssFormatter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedRssFormatter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedRssFormatter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FeedsGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedsGroup extends GObject.Object {
        static $gtype: GObject.GType<FeedsGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedsGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedsGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsGroup;

        // Signals

        /** @signal */
        connect<K extends keyof FeedsGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedsGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedsGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedsGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new file with the list of `channels` represented in the required
         * `format`. If the file already exists at the `uri` location, it is overwritten.
         * @param channels list of `GrssFeedChannels`.
         * @param format string rappresenting the desired export format, as returnes by          `grss_feeds_group_get_formats()`.
         * @param uri URI of the file to write.
         * @returns `true` if the file is created correctly, or `false` if an error occours and `error` is set.
         */
        export_file(channels: FeedChannel[], format: string, uri: string): boolean;
        /**
         * Returns the list of supported file formats.
         * @returns a list of constant strings with names of supported formats. The list must be freed when no longer used
         */
        get_formats(): string[];
        /**
         * Parses the given file to obtain list of listed feeds.
         * @param path path of the file to parse.
         * @returns a list of `GrssFeedChannels`, or NULL if an error occours and `error` is set.
         */
        parse_file(path: string): FeedChannel[];
    }

    namespace FeedsPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when an error raises in fetching or parsing a {@link Grss.FeedChannel}
             * assigned to the `pool`.
             * @signal
             * @run-last
             */
            'feed-fail': (arg0: GObject.Object) => void;
            /**
             * Emitted when the `pool` starts fetching a new {@link Grss.FeedChannel}. To be
             * used to know the internal status of the component.
             * @signal
             * @run-last
             */
            'feed-fetching': (arg0: GObject.Object) => void;
            /**
             * Emitted when a {@link Grss.FeedChannel} assigned to the `pool` has been fetched
             * and parsed. All parsed items are exposed in the array, with no
             * regards about previously existing elements. `items` may be NULL, if
             * an error occurred while fetching and/or parsing. List of `items`
             * is freed, and his elements are unref'd, when signal ends.
             * @signal
             * @run-last
             */
            'feed-ready': (arg0: GObject.Object, arg1: FeedItem[]) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedsPool extends GObject.Object {
        static $gtype: GObject.GType<FeedsPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedsPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedsPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsPool;

        // Signals

        /** @signal */
        connect<K extends keyof FeedsPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedsPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedsPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedsPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param feed
         * @virtual
         */
        vfunc_feed_fetching(feed: FeedChannel): void;

        // Methods

        /**
         * Returns the list of feeds currently managed by the `pool`. Please consider
         * this function has to build the list that returns, and of course this is a
         * time and resources consuming task: if you only need to know how many feeds
         * are currently handled, check `grss_feeds_pool_get_listened_num()`.
         * @returns a list of {@link Grss.FeedChannel}, to be freed with `g_list_free()` when no longer in use. Do not modify elements found in this list.
         */
        get_listened(): FeedChannel[];
        /**
         * Returns number of feeds under the `pool` control, as provided by
         * `grss_feeds_pool_listen()`. To get the complete list of those feeds, check
         * `grss_feeds_pool_get_listened()`.
         * @returns number of feeds currently managed by the {@link Grss.FeedsPool}.
         */
        get_listened_num(): number;
        /**
         * To access the internal {@link Soup.Session} used by the `pool` to fetch items.
         * @returns instance of {@link Soup.Session}. Do not free it.
         */
        get_session(): Soup.Session;
        /**
         * To set the list of feeds to be managed by the pool. The previous list, if
         * any, is invalidated. After invokation to the function, `grss_feeds_pool_switch()`
         * must be call to run the auto-fetching (always, also if previous state was
         * "running").
         * The list in `feeds` can be freed after calling this; linked {@link Grss.FeedChannel}
         * are g_object_ref'd here.
         * @param feeds a list of {@link Grss.FeedChannel}.
         */
        listen(feeds: FeedChannel[]): void;
        /**
         * Permits to pause or resume the `pool` fetching feeds. If `run` is `true`, the
         * `pool` starts immediately.
         * @param run `true` to run the pool, `false` to pause it.
         */
        ['switch'](run: boolean): void;
    }

    namespace FeedsPublisher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'delete-subscription': (arg0: FeedChannel, arg1: string) => void;
            /**
             * @signal
             * @run-last
             */
            'new-subscription': (arg0: FeedChannel, arg1: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedsPublisher extends GObject.Object {
        static $gtype: GObject.GType<FeedsPublisher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedsPublisher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedsPublisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsPublisher;

        // Signals

        /** @signal */
        connect<K extends keyof FeedsPublisher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsPublisher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedsPublisher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsPublisher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedsPublisher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedsPublisher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param topic
         * @param callback
         * @virtual
         */
        vfunc_delete_subscription(topic: FeedChannel, callback: string): void;
        /**
         * @param topic
         * @param callback
         * @virtual
         */
        vfunc_new_subscription(topic: FeedChannel, callback: string): void;

        // Methods

        /**
         * Format a {@link Grss.FeedChannel} in Atom and returns the resulting string.
         * @param channel the {@link Grss.FeedChannel} to dump in the file.
         * @param items list of `GrssFeedItems` to be added in         the feed.
         * @returns a newly allocated string holding the formatted feed, to be freed when no longer in use.
         */
        format_content(channel: FeedChannel, items: FeedItem[]): string;
        /**
         * To customize the port opened by the local server to deliver feeds and
         * catch incoming subscriptions. By default this is 80. Changing the port
         * while the hub is running imply restart the local server.
         * @param port new listening port for the server.
         */
        hub_set_port(port: number): void;
        /**
         * To define a list of valid "topics" for which the {@link Grss.FeedsPublisher} will
         * deliver contents. Sources of those channels, as retrieved by
         * `grss_feed_channel_get_source()`, are accepted as "hub.topic" parameter in
         * PubSubHubbub registration requests from remote subscribers.
         * Pay attention to the fact subscriptions requests for different topic are
         * now rejected.
         * @param topics a list of `GrssFeedChannels`.
         */
        hub_set_topics(topics: FeedChannel[]): void;
        /**
         * Permits to start and stop the webserver implemented by this object.
         * @param run `true` to run the local server, `false` to stop it.
         */
        hub_switch(run: boolean): void;
        /**
         * Dump the given `channel` in an Atom formatted file in `path`. If the local
         * PubSubHubbub hub has been activated (with `grss_feeds_publisher_hub_switch()`)
         * notifies remote subscribers about the new items which has been added since
         * previous invocation of this function for the same {@link Grss.FeedChannel}.
         * @param channel the {@link Grss.FeedChannel} to dump in the file.
         * @param items list of `GrssFeedItems` to be added in         the feed.
         * @param uri URI of the file to write. The full path must exists.
         * @returns `true` if the file is successfully written, `false` otherwise.
         */
        publish_file(channel: FeedChannel, items: FeedItem[], uri: string): boolean;
        /**
         * If the local web server has been executed (with
         * `grss_feeds_publisher_hub_switch()`) this function exposes the given `channel`
         * as an Atom formatted file avalable to http://[LOCAL_IP:DEFINED_PORT]/`id` .
         * @param channel the {@link Grss.FeedChannel} to dump in the file.
         * @param items list of `GrssFeedItems` to be added in         the feed.
         * @param id name used in the external URL of the feed.
         * @returns `true` if the file is successfully written, `false` otherwise.
         */
        publish_web(channel: FeedChannel, items: FeedItem[], id: string): boolean;
    }

    namespace FeedsStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class FeedsStore extends GObject.Object {
        static $gtype: GObject.GType<FeedsStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedsStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedsStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FeedsStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedsStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedsStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedsStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * To save a new {@link Grss.FeedItem} into the `store`. It performs a check to grant
         * `item` is not already saved.
         * @param channel parent feed for the new item.
         * @param item new item to permanently save.
         * @virtual
         */
        vfunc_add_item_in_channel(channel: FeedChannel, item: FeedItem): void;
        /**
         * To retrieve list of feeds permanently saved into the store.
         * @virtual
         */
        vfunc_get_channels(): FeedChannel[];
        /**
         * To retrieve list of items saved into the store, assigned to the given
         * `channel`.
         * @param channel parent feed containing required items.
         * @virtual
         */
        vfunc_get_items_by_channel(channel: FeedChannel): FeedItem[];
        /**
         * To retrieve an item into a feed, given his unique ID.
         * @param channel parent feed containing required item.
         * @param id unique ID to look for.
         * @virtual
         */
        vfunc_has_item(channel: FeedChannel, id: string): boolean;

        // Methods

        /**
         * To save a new {@link Grss.FeedItem} into the `store`. It performs a check to grant
         * `item` is not already saved.
         * @param channel parent feed for the new item.
         * @param item new item to permanently save.
         */
        add_item_in_channel(channel: FeedChannel, item: FeedItem): void;
        /**
         * To retrieve list of feeds permanently saved into the store.
         * @returns list of {@link Grss.FeedChannel} found in the `store`. Do not modify or free it.
         */
        get_channels(): FeedChannel[];
        /**
         * To retrieve list of items saved into the store, assigned to the given
         * `channel`.
         * @param channel parent feed containing required items.
         * @returns list of {@link Grss.FeedItem} found in the `store`. Do not modify or free it.
         */
        get_items_by_channel(channel: FeedChannel): FeedItem[];
        /**
         * To retrieve an item into a feed, given his unique ID.
         * @param channel parent feed containing required item.
         * @param id unique ID to look for.
         * @returns `true` if the specified item exists, `false` otherwise.
         */
        has_item(channel: FeedChannel, id: string): boolean;
        /**
         * This is to permit the `store` to auto-update itself: it creates an internal
         * {@link Grss.FeedsPool} and listens for his signals, so to implement the whole loop
         * fetch-parse-save trasparently.
         * @param run `true` to run the `store`, `false` to stop.
         */
        ['switch'](run: boolean): void;
    }

    namespace FeedsSubscriber {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a notification has been received and parsed. The
             * `item` is cached and unref'd when the {@link Grss.FeedsSubscriber} is
             * destroyed or a new set of feeds is provided.
             * @signal
             * @run-last
             */
            'notification-received': (arg0: GObject.Object, arg1: GObject.Object) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedsSubscriber extends GObject.Object {
        static $gtype: GObject.GType<FeedsSubscriber>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedsSubscriber.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedsSubscriber.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsSubscriber;

        // Signals

        /** @signal */
        connect<K extends keyof FeedsSubscriber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsSubscriber.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedsSubscriber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedsSubscriber.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FeedsSubscriber.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedsSubscriber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param feed
         * @param item
         * @virtual
         */
        vfunc_notification_received(feed: FeedChannel, item: FeedItem): void;

        // Methods

        /**
         * This function returns the Internet address where `sub` is listening for
         * external events. It is often required by `GrssFeedsSubscriberHandlers` while
         * subscribing contents to specify the local endpoint for communications.
         * @returns the {@link Gio.InetAddress} used by `sub`, or `null` if the {@link Grss.FeedsSubscriber} is switched off.
         */
        get_address(): Gio.InetAddress;
        /**
         * Returns the list of feeds currently managed by `sub`.
         * @returns a list of {@link Grss.FeedChannel}, to be freed with `g_list_free()` when no longer in use. Do not modify elements found in this list.
         */
        get_listened(): FeedChannel[];
        /**
         * This function returns the Internet port where `sub` is listening for
         * external events. It is often required by `GrssFeedsSubscriberHandlers` while
         * subscribing contents to specify the local endpoint for communications.
         * @returns the port of the socket locally opened by `sub`.
         */
        get_port(): number;
        /**
         * To obtain the internal {@link Soup.Session} of a {@link Grss.FeedsSubscriber}, so to re-use
         * it in `GrssFeedsSubscriberHandlers` or similar tasks.
         * @returns the {@link Soup.Session} used by the provided {@link Grss.FeedsSubscriber}.
         */
        get_session(): Soup.Session;
        /**
         * To set the list of feeds to be managed by `sub`. The previous list, if any,
         * is invalidated. After invokation to the function, `grss_feeds_subscriber_switch()`
         * must be call to run the subscription.
         * The list in `feeds` can be freed after calling this; linked {@link Grss.FeedChannel}
         * are g_object_ref'd here.
         * @param feeds a list of {@link Grss.FeedChannel}.
         * @returns `true` if all `GrssFeedChannels` involved in `feeds` are valid and can be listened with one of the implemented procotols, `false` otherwise.
         */
        listen(feeds: FeedChannel[]): boolean;
        /**
         * To customize the port opened by the local server to catch incoming
         * publishers' events. By default this is 8444. Changing the port while the
         * subscriber is running imply restart the local server.
         * Pay attention to the fact many publishers' implementations accept only
         * certain ports.
         * @param port new listening port for the server.
         */
        set_port(port: number): void;
        /**
         * Permits to pause or resume `sub` listening for events.
         * @param run `true` to run the subscriber, `false` to pause it.
         */
        ['switch'](run: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type FeedAtomFormatterClass = typeof FeedAtomFormatter;
    /**
     * @gir-type Struct
     */
    abstract class FeedAtomFormatterPrivate {
        static $gtype: GObject.GType<FeedAtomFormatterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedChannelClass = typeof FeedChannel;
    /**
     * @gir-type Struct
     */
    abstract class FeedChannelPrivate {
        static $gtype: GObject.GType<FeedChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedEnclosureClass = typeof FeedEnclosure;
    /**
     * @gir-type Struct
     */
    abstract class FeedEnclosurePrivate {
        static $gtype: GObject.GType<FeedEnclosurePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedFormatterClass = typeof FeedFormatter;
    /**
     * @gir-type Struct
     */
    abstract class FeedFormatterPrivate {
        static $gtype: GObject.GType<FeedFormatterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedItemClass = typeof FeedItem;
    /**
     * @gir-type Struct
     */
    abstract class FeedItemPrivate {
        static $gtype: GObject.GType<FeedItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedParserClass = typeof FeedParser;
    /**
     * @gir-type Struct
     */
    abstract class FeedParserPrivate {
        static $gtype: GObject.GType<FeedParserPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedRssFormatterClass = typeof FeedRssFormatter;
    /**
     * @gir-type Struct
     */
    abstract class FeedRssFormatterPrivate {
        static $gtype: GObject.GType<FeedRssFormatterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedsGroupClass = typeof FeedsGroup;
    /**
     * @gir-type Struct
     */
    abstract class FeedsGroupPrivate {
        static $gtype: GObject.GType<FeedsGroupPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedsPoolClass = typeof FeedsPool;
    /**
     * @gir-type Struct
     */
    abstract class FeedsPoolPrivate {
        static $gtype: GObject.GType<FeedsPoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedsPublisherClass = typeof FeedsPublisher;
    /**
     * @gir-type Struct
     */
    abstract class FeedsPublisherPrivate {
        static $gtype: GObject.GType<FeedsPublisherPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedsStoreClass = typeof FeedsStore;
    /**
     * @gir-type Struct
     */
    abstract class FeedsStorePrivate {
        static $gtype: GObject.GType<FeedsStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FeedsSubscriberClass = typeof FeedsSubscriber;
    /**
     * @gir-type Struct
     */
    abstract class FeedsSubscriberPrivate {
        static $gtype: GObject.GType<FeedsSubscriberPrivate>;
    }

    /**
     * {@link Grss.Person} is an opaque structure whose members
     * cannot be accessed directly.
     * @gir-type Struct
     * @since 0.7
     */
    class Person {
        static $gtype: GObject.GType<Person>;

        // Constructors

        constructor(name: string, email?: string | null, uri?: string | null);

        static ['new'](name: string, email?: string | null, uri?: string | null): Person;

        // Methods

        /**
         * @returns the email of person. The returned          string is owned by {@link Grss.Person} and it should          not be modified or freed.
         */
        get_email(): string;
        /**
         * @returns the name of person. The returned          string is owned by {@link Grss.Person} and it should          not be modified or freed.
         */
        get_name(): string;
        /**
         * @returns the website (uri) of person. The returned          string is owned by {@link Grss.Person} and it should          not be modified or freed.
         */
        get_uri(): string;
        /**
         * Atomically increments the reference count of `person` by one.
         * @returns the {@link Grss.Person} with the reference count increased
         */
        ref(): Person;
        /**
         * Atomically decrements the reference count of `person` by one.
         *
         * When the reference count reaches zero, the resources allocated by
         * `person` are freed
         */
        unref(): void;
    }

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

export default Grss;

// END
