
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
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Liferea {

    /**
     * Liferea-3.0
     */


    /**
     * @gir-type Enum
     */
    enum feedListFindType {
        ODE_BY_URL = 0,
        ODE_BY_ID = 1,
        OLDER_BY_TITLE = 2,
    }


    /**
     * @gir-type Enum
     */
    enum lifereaIcon {
        CON_UNREAD = 0,
        CON_FLAG = 1,
        CON_UNAVAILABLE = 2,
        CON_DEFAULT = 3,
        CON_FOLDER = 4,
        CON_VFOLDER = 5,
        CON_NEWSBIN = 6,
        AX_ICONS = 7,
    }


    /**
     * @gir-type Enum
     */
    enum nodeSourceState {
        NONE = 0,
        IN_PROGRESS = 1,
        ACTIVE = 2,
        AUTH_FAILED = 3,
        AUTH_CHALLENGE = 4,
        MIGRATE = 5,
    }


    /**
     * @gir-type Enum
     */
    enum nodeViewSortType {
        TIME = 0,
        TITLE = 1,
        PARENT = 2,
        STATE = 3,
    }


    /**
     * @gir-type Enum
     */
    enum nodeViewType {
        NORMAL = 0,
        WIDE = 1,
        AUTO = 2,
    }


    /**
     * @gir-type Enum
     */
    enum request_state {
        PENDING = 0,
        PROCESSING = 1,
        FILTERING = 2,
        FAILED = 3,
        FINISHED = 4,
    }


    /**
     * @default 3
     */
    const NODE_SOURCE_MAX_AUTH_FAILURES: number;

    /**
     * @default fl_dummy
     */
    const NODE_SOURCE_TYPE_DUMMY_ID: string;

    /**
     * Method to query whether there is an active password store.
     * 
     * `returns` TRUE if there is a password store
     */
    function auth_has_active_store(): boolean;

    /**
     * `param` authId		a node id
     * `param` username
     * `param` password
     * 
     * Allow plugins to provide authentication infos
     * @param authId 
     * @param username 
     * @param password 
     */
    function auth_info_from_store(authId: string, username: string, password: string): void;

    /**
     * Return auth information for a given node. Each extension able to
     * supply a user name and password for the given id is to synchronously call
     * `liferea_auth_info_from_store()` to set them.
     * 
     * `param` authId		a node id
     * `param` username		reference to return username
     * `param` password		reference to return password
     * @param authId 
     */
    function auth_info_query(authId: string): void;

    /**
     * `param` subscription		pointer to a subscription
     * 
     * Save given authentication info of a given subscription into password store (if available).
     * @param subscription 
     */
    function auth_info_store(subscription: null): void;

    /**
     * Get URL from enclosure string
     * @param str enclosure string to parse
     * @returns URL string, free after use
     */
    function enclosure_get_url(str: string): string;

    /**
     * Serializes the enclosure to JSON using a JsonBuilder.
     * @param enclosure the enclosure
     * @param b the JSON builder
     */
    function enclosure_to_json(enclosure: enclosurePtr, b: Json.Builder): void;

    /**
     * Takes a file name relative to "pixmaps" directory and tries to load the
     * image into a GdkPixbuf. Can be used to load icons not in lifereaIcon
     * on demand.
     * @param filename the name of the file
     * @returns a new pixbuf or NULL
     */
    function icon_create_from_file(filename: string): GdkPixbuf.Pixbuf;

    /**
     * Takes a file name relative to "pixmaps" directory and returns it's path.
     * @param filename the name of the file
     * @returns file path or NULL
     */
    function icon_find_pixmap_file(filename: string): string;

    /**
     * Returns a GIcon for the requested item.
     * @param icon the icon
     * @returns GIcon
     */
    function icon_get(icon: lifereaIcon): Gio.Icon;

    /**
     * Interactive node adding (e.g. feed menu->new subscription),
     * launches some dialog that upon success adds a feed of the
     * given type.
     * @param provider the node provider
     * @returns TRUE on success
     */
    function node_provider_request_add(provider: nodeProviderPtr): boolean;

    /**
     * @returns the name of the currently configured social bookmarking site.
     */
    function social_get_bookmark_site(): string;

    /**
     * Returns a social bookmarking link for the configured site
     * @param link the link to encode (mandatory)
     * @param title the title to encode (mandatory)
     * @returns new URL string
     */
    function social_get_bookmark_url(link: string, title: string): string;

    /**
     * Add a new site to the social bookmarking site list. Note that
     * the URL needs to have at least one '{url}' placeholder and optionally
     * a '{title}' placeholder.
     * @param name descriptive name
     * @param url valid HTTP GET URL with one or two %s format codes
     */
    function social_register_bookmark_site(name: string, url: string): void;

    /**
     * Change the site used for bookmarking.
     * @param name name of the site
     */
    function social_set_bookmark_site(name: string): void;

    /**
     * Removes a site from the social bookmarking site list. Does nothing
     * if the given name is not in the list
     * @param name descriptive name
     */
    function social_unregister_bookmark_site(name: string): void;

    /**
     * Frees the given update state.
     * @param updateState the update state
     */
    function update_state_free(updateState: updateStatePtr): void;

    /**
     * @param state 
     */
    function update_state_get_cache_maxage(state: updateStatePtr): number;

    /**
     * @param state 
     */
    function update_state_get_cookies(state: updateStatePtr): string;

    /**
     * @param state 
     */
    function update_state_get_etag(state: updateStatePtr): string;

    /**
     * @param state 
     */
    function update_state_get_lastmodified(state: updateStatePtr): string;

    /**
     * @param state 
     * @param maxage 
     */
    function update_state_set_cache_maxage(state: updateStatePtr, maxage: number): void;

    /**
     * @param state 
     * @param cookies 
     */
    function update_state_set_cookies(state: updateStatePtr, cookies: string): void;

    /**
     * @param state 
     * @param etag 
     */
    function update_state_set_etag(state: updateStatePtr, etag: string): void;

    /**
     * @param state 
     * @param lastmodified 
     */
    function update_state_set_lastmodified(state: updateStatePtr, lastmodified: string): void;

    /**
     * @gir-type Callback
     */
    interface itemActionFunc {
        (item: itemPtr, userdata: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface nodeActionDataFunc {
        (node: Node): void;
    }

    /**
     * @gir-type Callback
     */
    interface nodeActionFunc {
        (node: Node): void;
    }

    /**
     * @gir-type Callback
     */
    interface update_flow_cb {
        (job: UpdateJob): boolean;
    }

    /**
     * @gir-type Flags
     */
    enum nodeSourceCapability {
        IS_ROOT = 1,
        DYNAMIC_CREATION = 2,
        WRITABLE_FEEDLIST = 4,
        ADD_FEED = 8,
        ADD_FOLDER = 16,
        HIERARCHIC_FEEDLIST = 32,
        ITEM_STATE_SYNC = 64,
        CONVERT_TO_LOCAL = 128,
        GOOGLE_READER_API = 256,
        CAN_LOGIN = 512,
        REPARENT_NODE = 1024,
    }


    /**
     * @gir-type Flags
     */
    enum nodeSourceUpdate {
        NODE_SOURCE_UPDATE_ONLY_LIST = 65536,
    }


    /**
     * @gir-type Flags
     */
    enum nodeSyncState {
        IN_SYNC = 0,
        DIRTY_FEED = 1,
        DIRTY_ITEMS = 2,
        INITIAL_IMPORT = 4,
    }


    /**
     * @gir-type Flags
     */
    enum updateFlags {
        RESET_TITLE = 1,
        PRIORITY_HIGH = 2,
        NO_FEED = 4,
    }


    namespace Application {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            "notify::active-window": (pspec: GObject.ParamSpec) => void;
            "notify::menubar": (pspec: GObject.ParamSpec) => void;
            "notify::register-session": (pspec: GObject.ParamSpec) => void;
            "notify::screensaver-active": (pspec: GObject.ParamSpec) => void;
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::inactivity-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::is-busy": (pspec: GObject.ParamSpec) => void;
            "notify::is-registered": (pspec: GObject.ParamSpec) => void;
            "notify::is-remote": (pspec: GObject.ParamSpec) => void;
            "notify::resource-base-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Application.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Application>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get the LifereaApplication instance
         */
        static get_instance(): Application;

        /**
         * Shutdown GApplication
         */
        static shutdown(): void;
    }


    namespace Browser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "location-changed": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "statusbar-changed": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "title-changed": (object: string) => void;
            "notify::hidden-urlbar": (pspec: GObject.ParamSpec) => void;
            "notify::renderwidget": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hidden_urlbar: boolean;
            hiddenUrlbar: boolean;
            renderwidget: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class Browser extends GObject.Object {
        static $gtype: GObject.GType<Browser>;

        // Properties
        /**
         * @default false
         */
        get hidden_urlbar(): boolean;
        set hidden_urlbar(val: boolean);

        /**
         * @default false
         */
        get hiddenUrlbar(): boolean;
        set hiddenUrlbar(val: boolean);

        /**
         * @read-only
         */
        get renderwidget(): Gtk.Widget;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Browser.SignalSignatures;

        // Fields
        renderWidget: Gtk.Widget;

        container: Gtk.Widget;

        toolbar: Gtk.Widget;

        forward: Gtk.Widget;

        back: Gtk.Widget;

        urlentry: Gtk.Widget;

        overlay: Gtk.Widget;

        urlHoverLabel: Gtk.Widget;

        urlHoverTimeout: number;

        forceInternalBrowsing: boolean;

        name: string;

        url: string;

        content: string;

        // Constructors
        constructor(properties?: Partial<Browser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Browser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Browser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Browser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Browser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * To be called when HTML view needs to change the text size
         * of the rendering widget implementation.
         * @param zoom 1 for zoom in, -1 for zoom out, 0 for reset
         */
        do_zoom(zoom: number): void;

        /**
         * Allows to query the currently active reader mode setting
         * @returns TRUE if reader mode is on
         */
        get_reader_mode(): boolean;

        /**
         * Returns the rendering widget for a HTML view. Only
         * to be used by liferea_shell.c for widget reparenting.
         * @returns the rendering widget
         */
        get_widget(): Gtk.Widget;

        /**
         * Function to determine the current zoom level.
         * @returns the currently set zoom level
         */
        get_zoom(): number;

        /**
         * @param location 
         */
        location_changed(location: string): void;

        /**
         * @param url 
         */
        on_url(url: string): void;

        /**
         * @param progress 
         */
        progress_changed(progress: number): void;

        /**
         * Function scrolls down the given HTML view if possible.
         */
        scroll(): void;

        /**
         * Make this LifereaBrowser instance a headline view. This causes
         * an additional "go back" step for the history tab allowing to go back
         * from Web content to the headline when browsing inline.
         */
        set_headline_view(): void;

        /**
         * Allows to temporarily change the reader mode of the browser, will be
         * reset when navigating to another URL
         * @param readerMode new mode
         */
        set_reader_mode(readerMode: boolean): void;

        /**
         * Function to change the zoom level of the HTML widget.
         * 1.0 is a 1:1 zoom.
         * @param zoom New zoom
         */
        set_zoom(zoom: number): void;

        /**
         * Associates the tab with an name to be used with
         * browser_tabs_get/raise_tab()
         * @param name the name
         */
        tabs_set_tab_name(name: string): void;

        /**
         * @param title 
         */
        title_changed(title: string): void;
    }


    namespace BrowserTabs {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BrowserTabs extends GObject.Object {
        static $gtype: GObject.GType<BrowserTabs>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BrowserTabs.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BrowserTabs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static add_new(url: string, title: string, activate: boolean): BrowserTabs;

        // Signals
        /** @signal */
        connect<K extends keyof BrowserTabs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BrowserTabs.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BrowserTabs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BrowserTabs.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BrowserTabs.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BrowserTabs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * If you have set a "name" on a htmlview with `g_object_set_data()`
         * you can raise the tab for it using this function. It also returns
         * the browser widget.
         * @param name the name
         */
        static focus_tab(name: string): Browser | null;

        /**
         * Used to determine which HTML view (a tab or the headlines view)
         * is currently visible and can be used to display HTML that
         * is to be loaded
         */
        static get_active_htmlview(): Browser | null;

        /**
         * If you have set a "name" on a htmlview with `g_object_set_data()`
         * you can search for it using this function.
         * @param name the name
         */
        static get_tab(name: string): Browser | null;

        /**
         * makes the headline tab visible
         */
        static show_headlines(): void;
    }


    namespace ContentView {
        // Signal signatures
        interface SignalSignatures extends Browser.SignalSignatures {
            "notify::hidden-urlbar": (pspec: GObject.ParamSpec) => void;
            "notify::renderwidget": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Browser.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ContentView extends Browser {
        static $gtype: GObject.GType<ContentView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContentView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ContentView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContentView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContentView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace FeedList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "items-updated": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "new-items": (object: null) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "node-added": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "node-moved": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "node-removed": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "node-selected": (object: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "node-updated": (object: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FeedList extends GObject.Object {
        static $gtype: GObject.GType<FeedList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedList.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FeedList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FeedList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FeedList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FeedList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FeedList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FeedList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FeedList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Adds a folder to the feed list without any user interaction.
         * @param title the title of the new folder.
         */
        static add_folder(title: string): Node;

        /**
         * Adds a new subscription to the feed list. Does not check for duplicates.
         * Is interactive.
         * @param url the subscription URL to add
         */
        static add_subscription_by_url(url: string): void;

        /**
         * Search trough list of subscriptions for a node matching exactly
         * to an criteria defined by the find type and comparison string.
         * Searches recursively from a given parent node or the root node.
         * Always returns just the first occurence in traversal order.
         * @param parent parent node to traverse from (or NULL)
         * @param type NODE_BY_(URL|FOLDER_TITLE|ID)
         * @param str string to compare to
         */
        static find_node(parent: Node | null, type: feedListFindType, str: string): Node | null;

        /**
         * Query overall number of new items.
         * 
         * Note: result might be slightly off, but error
         * won't aggregate over time.
         */
        static get_new_item_count(): number;

        /**
         * Helper function to query the feed list root node.
         */
        static get_root(): Node;

        /**
         * Get currently selected feed list node
         */
        static get_selected(): Node | null;

        /**
         * Query overall number of unread items.
         */
        static get_unread_item_count(): number;

        /**
         * Triggers a recursive mark-all-read on the given node
         * and updates the feed list afterwards.
         * @param node the node to start with
         */
        static mark_all_read(node: Node): void;

        /**
         * Marks `node` and its parents dirty so unread/item counters are
         * recomputed lazily in a coalesced flush.
         * @param node the node whose counters need to be refreshed
         */
        static mark_node_recount(node: Node): void;

        /**
         * To be called when node subscription update gained new items.
         * @param newCount number of new and unread items
         */
        static new_items(newCount: number): void;

        /**
         * Notifies the feed list controller that a new node
         * was added to the feed list. This method will insert
         * the new node into the feed list view and select
         * the new node.
         * 
         * This method is used for all node types (feeds, folders...).
         * 
         * Before calling this method the node must be given
         * a parent node using `node_set_parent()`.
         * @param node the new node
         */
        static node_added(node: Node): void;

        /**
         * Notifies the feed list controller that a new node
         * was added to the feed list. Similar to `feedlist_node_added()`
         * the new node will be added to the feed list but the
         * selection won't be changed.
         * 
         * This method is used for all node types (feeds, folders...).
         * 
         * Before calling this method the node must be given
         * a parent node using `node_set_parent()`.
         * @param node the new node
         */
        static node_imported(node: Node): void;

        /**
         * Notifies the feed list controller that an existing
         * node was removed from it's source (feed list subtree)
         * and is to be destroyed and to be removed from the
         * feed list view.
         * @param node the removed node
         */
        static node_removed(node: Node): void;

        /**
         * To be called when a feed is moved in the feed list. Will trigger
         * relocation of the node in the feedlist. If "interactive" is TRUE
         * will also sync to remote if needed.
         * @param node the moved node
         * @param newParent the new parent node
         * @param insertPos insert position in new parent children list
         * @param interactive TRUE if move was caused by user in UI
         */
        static node_was_moved(node: Node, newParent: Node, insertPos: number, interactive: boolean): void;

        /**
         * To be called when a feed is updated and has
         * new or dropped items forcing a node unread count
         * update for all affected nodes in the feed list.
         * @param node the updated node
         */
        static node_was_updated(node: Node): void;

        /**
         * Removes the given node from the feed list.
         * @param node the node to remove
         */
        static remove_node(node: Node): void;

        /**
         * Reset the global feed list new item counter.
         * 
         * TODO: use signal instead
         */
        static reset_new_item_count(): void;

        /**
         * `param` node: the node to select
         * @param node 
         */
        static set_selected(node: Node): void;

        /**
         * Serialize feedlist to JSON with infos on feed updates and node
         * source sync states. Primarily used by update monitor.
         */
        static to_json(): string;
    }


    namespace Item {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Item extends GObject.Object {
        static $gtype: GObject.GType<Item>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Item.SignalSignatures;

        // Fields
        id: number;

        readStatus: boolean;

        flagStatus: boolean;

        hasEnclosure: boolean;

        isHidden: boolean;

        title: string;

        source: string;

        sourceId: string;

        validGuid: boolean;

        validTime: boolean;

        description: string;

        metadata: null[];

        time: number;

        commentFeedId: string;

        parentItemId: number;

        isComment: boolean;

        nodeId: string;

        parentNodeId: string;

        sourceNr: number;

        remoteReadStatus: boolean;

        remoteFlagStatus: boolean;

        // Constructors
        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Item;

        // Signals
        /** @signal */
        connect<K extends keyof Item.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Item.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Item.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Item.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the item structure for the given item id or
         * NULL if no such item does exist. The caller has to free
         * the item with `item_unload()` once it is not used anymore.
         * @param id item id to load
         */
        static load(id: bigint | number): Item | null;

        // Methods
        /**
         * Adds the given enclosure to the item. Takes ownership of the enclosure.
         * @param enclosure the enclosure to add
         */
        add_enclosure(enclosure: enclosurePtr): void;

        /**
         * Method to create a copy of an item. The copy will be
         * linked to the original item to allow state update
         * propagation (to be used with vfolders).
         * @returns copy of the item.
         */
        copy(): Item;

        /**
         * Returns the resolved author for the item
         * @returns pointer to string in GSList meta data
         */
        get_author(): string;

        /**
         * Returns the base URL for the given item.
         * @returns base URL
         */
        get_base_url(): string;

        /**
         * Returns the description of the item.
         */
        get_description(): string;

        /**
         * @returns the id of the item.
         */
        get_id(): string;

        /**
         * Returns the source of the item.
         */
        get_source(): string;

        /**
         * Create a plain text teaser from the item description
         * @returns newly allocated string to be free'd using `g_free()` (or NULL)
         */
        get_teaser(): string;

        /**
         * Returns the text direction of the item based on title or description.
         */
        get_text_direction(): string;

        /**
         * Returns the title of the item.
         */
        get_title(): string;

        /**
         * Returns the resolved link for the item.
         * @returns newly allocated URI to be free'd using `g_free()`
         */
        make_link(): string;

        /**
         * Sets the item description. If called more than once it
         * will merge the new description against the old one deciding
         * on the best to keep.
         * @param description the content
         */
        set_description(description: string): void;

        /**
         * Sets the item id
         * @param id the id
         */
        set_id(id: string): void;

        /**
         * Sets the item source
         * @param source the source
         */
        set_source(source: string): void;

        /**
         * Sets the item time. Always use this when a valid date was
         * supplied for the item!
         * @param time the time
         */
        set_time(time: bigint | number): void;

        /**
         * Sets the item title
         * @param title the title
         */
        set_title(title: string): void;
    }


    namespace ItemList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "all-items-removed": () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "item-added": (object: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "item-batch-end": (object: null) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "item-batch-start": () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "item-removed": (object: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "item-selected": (object: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "item-updated": (object: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ItemList extends GObject.Object {
        static $gtype: GObject.GType<ItemList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemList.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ItemList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ItemList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ItemList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ItemList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ItemList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ItemList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ItemList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the currently displayed node.
         */
        static get_displayed_node(): Node | null;

        /**
         * Returns the id of the currently selected item.
         */
        static get_selected_id(): number;

        /**
         * Loads the passed nodes items into the item list.
         * @param node the node
         */
        static load(node: Node): void;

        /**
         * Tries to select the next unread item that is currently in the
         * item list. Or does nothing if there are no unread items left.
         */
        static select_next_unread(): void;

        /**
         * Clears the item list.
         */
        static unload(): void;

        /**
         * @param item 
         */
        static update_item(item: itemPtr): void;
    }


    namespace ItemListView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "selection-changed": (object: number) => void;
            "notify::wide-view": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            wide_view: boolean;
            wideView: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ItemListView extends GObject.Object {
        static $gtype: GObject.GType<ItemListView>;

        // Properties
        /**
         * @default false
         */
        get wide_view(): boolean;
        set wide_view(val: boolean);

        /**
         * @default false
         */
        get wideView(): boolean;
        set wideView(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemListView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ItemListView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ItemListView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ItemListView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ItemListView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ItemListView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ItemListView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ItemListView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks whether the given id is in the ItemListView.
         * @param id the item id
         * @returns TRUE if the item is in the ItemListView
         */
        contains_id(id: bigint | number): boolean;

        /**
         * Returns the GtkWidget used by the ItemListView instance.
         * @returns a GtkWidget
         */
        get_widget(): Gtk.Widget;

        /**
         * Moves the cursor in the item list step times.
         * Negative value means moving backwards.
         * @param step move distance
         */
        move_cursor(step: number): void;

        /**
         * Moves the cursor to the first element.
         */
        move_cursor_to_first(): void;

        /**
         * Changes the sorting type (and direction).
         * @param sortType new sort type
         * @param sortReversed TRUE for ascending order
         */
        set_sort_column(sortType: nodeViewSortType, sortReversed: boolean): void;
    }


    namespace NetworkMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "online-status-changed": (object: boolean) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "proxy-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class NetworkMonitor extends GObject.Object {
        static $gtype: GObject.GType<NetworkMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<NetworkMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof NetworkMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NetworkMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NetworkMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetworkMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Queries the online status.
         * 
         * `return` TRUE if online
         */
        static is_online(): boolean;

        /**
         * Sets the online status according to mode.
         * 
         * `param` mode	TRUE for online, FALSE for offline
         * @param mode 
         */
        static set_online(mode: boolean): void;
    }


    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Node.SignalSignatures;

        // Fields
        data: null;

        subscription: null;

        provider: null;

        source: null;

        iconFile: string;

        children: null[];

        id: string;

        itemCount: number;

        unreadCount: number;

        popupCount: number;

        newCount: number;

        title: string;

        icon: null;

        available: boolean;

        expanded: boolean;

        sortColumn: nodeViewSortType;

        sortReversed: boolean;

        syncState: nodeSyncState;

        needsUpdate: boolean;

        needsRecount: boolean;

        // Constructors
        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string): Node;

        // Signals
        /** @signal */
        connect<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Node.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Node *lookup by node id. Will report an error if the queried
         * id does not exist.
         * @param id the node id to look up
         */
        static from_id(id: string): Node | null;

        /**
         * Can be used to check whether an id is used or not.
         * @param id the node id to check
         */
        static is_used_id(id: string): Node | null;

        /**
         * Returns a new unused unique node id.
         */
        static new_id(): string;

        // Methods
        /**
         * Helper function to be used with `node_foreach_child_data()`
         * to mass-auto-update subscriptions.
         * @param user_data update flags
         */
        auto_update_subscription(user_data: null): void;

        /**
         * Query whether a feed be added to the given node.
         * @returns TRUE if a feed can be added
         */
        can_add_child_feed(): boolean;

        /**
         * Query whether a folder be added to the given node.
         * @returns TRUE if a folder can be added
         */
        can_add_child_folder(): boolean;

        /**
         * Do not call this method directly! Do use
         * `node_foreach_child()` or `node_foreach_child_data()`!
         * @param func the function to process all found elements
         * @param params 0 if func should be called without user_data, 1 if func should be called with user_data
         * @param user_data specifies the second argument that func should be passed
         */
        foreach_child_full(func: null, params: number, user_data: null): void;

        /**
         * Returns the base URL for the given node.
         * If it is a mixed item set NULL will be returned.
         * @returns base URL
         */
        get_base_url(): string;

        /**
         * Returns the name of the favicon cache file for the given node.
         * If there is no favicon a default icon file name will be returned.
         * @returns a file name
         */
        get_favicon_file(): string;

        /**
         * Query the unique id string of the node.
         * @returns id string
         */
        get_id(): string;

        /**
         * Query the node's title for the feed list.
         * @returns the title
         */
        get_title(): string;

        /**
         * Determines whether node1 is an ancestor of node2
         * @param node2 the possible child
         * @returns TRUE if node1 is ancestor of node2
         */
        is_ancestor(node2: Node): boolean;

        /**
         * Load node icon in memory. Should be called only once on startup
         * and when the node icon has changed.
         */
        load_icon(): void;

        /**
         * Maps node type to string. For feed nodes
         * it maps to the feed type string.
         * @returns type string (or NULL if unknown)
         */
        provider_get_name(): string;

        /**
         * Test whether a node belongs to of a given provider type name
         * @param name the node provider name to test for
         * @returns TRUE if node is of the given type
         */
        provider_is(name: string): boolean;

        /**
         * Removes all data associated with the given node.
         */
        remove(): void;

        /**
         * Exports all items in this node as a RSS2 feed.
         * @param filename the destination file name
         * @throws GLib.Error
         */
        save_items_to_file(filename: string): void;

        /**
         * Attaches a data structure to the given node.
         * @param data the structure
         */
        set_data(data: null): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;

        /**
         * Set the unique id string of the node.
         * @param id the id string
         */
        set_id(id: string): void;

        /**
         * Sets a nodes parent. If no parent node is given the
         * parent node of the currently selected feed or the
         * selected folder will be used.
         * 
         * To be used before calling `feedlist_node_added()`.
         * 
         * Do not use to move nodes, only for new nodes!
         * @param parent the parent node (optional can be NULL)
         * @param position insert position (optional can be 0)
         */
        set_parent(parent: Node | null, position: number): void;

        /**
         * Change/Set the sort column of a given node.
         * @param sortColumn sort column id
         * @param reversed TRUE if order should be reversed
         * @returns TRUE if the passed settings were different from the previous ones
         */
        set_sort_column(sortColumn: nodeViewSortType, reversed: boolean): boolean;

        /**
         * Attaches the subscription to the given node.
         * @param subscription the subscription
         */
        set_subscription(subscription: null): void;

        /**
         * Sets the node's title for the feed list.
         * @param title the title
         */
        set_title(title: string): void;

        /**
         * @param item 
         * @param newState 
         */
        source_item_set_flag(item: itemPtr, newState: boolean): void;

        /**
         * Returns a JSON representation of the node to be free'd with `g_free()`
         */
        to_json(): string;

        /**
         * Update the number of items and unread items of a node from
         * the DB. This method ensures propagation to parent folders.
         */
        update_counters(): void;

        /**
         * Called when updating favicons is requested.
         */
        update_favicon(): void;

        /**
         * Helper function to be used with `node_foreach_child_data()`
         * to mass-update subscriptions.
         * @param user_data update flags
         */
        update_subscription(user_data: null): void;
    }


    namespace Shell {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::browser-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::builder": (pspec: GObject.ParamSpec) => void;
            "notify::feedlist": (pspec: GObject.ParamSpec) => void;
            "notify::htmlview": (pspec: GObject.ParamSpec) => void;
            "notify::itemlist": (pspec: GObject.ParamSpec) => void;
            "notify::layout-disabled": (pspec: GObject.ParamSpec) => void;
            "notify::layout-mode": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            browser_tabs: BrowserTabs;
            browserTabs: BrowserTabs;
            builder: Gtk.Builder;
            feedlist: FeedList;
            htmlview: Browser;
            itemlist: ItemList;
            layout_disabled: boolean;
            layoutDisabled: boolean;
            layout_mode: number;
            layoutMode: number;
            visibility: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Shell extends GObject.Object {
        static $gtype: GObject.GType<Shell>;

        // Properties
        /**
         * @read-only
         */
        get browser_tabs(): BrowserTabs;

        /**
         * @read-only
         */
        get browserTabs(): BrowserTabs;

        /**
         * @read-only
         */
        get builder(): Gtk.Builder;

        /**
         * @read-only
         */
        get feedlist(): FeedList;

        /**
         * @read-only
         */
        get htmlview(): Browser;

        /**
         * @read-only
         */
        get itemlist(): ItemList;

        /**
         * @default false
         */
        get layout_disabled(): boolean;
        set layout_disabled(val: boolean);

        /**
         * @default false
         */
        get layoutDisabled(): boolean;
        set layoutDisabled(val: boolean);

        /**
         * @default 2
         */
        get layout_mode(): number;
        set layout_mode(val: number);

        /**
         * @default 2
         */
        get layoutMode(): number;
        set layoutMode(val: number);

        /**
         * @default true
         */
        get visibility(): boolean;
        set visibility(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Shell.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Shell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Shell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Shell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Shell.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Shell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param name 
         * @param enable 
         */
        static action_enable(name: string, enable: boolean): void;

        /**
         * Copy a text to clipboard
         * @param str the string to copy to the clipboard
         */
        static copy_to_clipboard(str: string): void;

        /**
         * Finds the next unread item.
         * @param startId the item id to start at (or NULL for starting at the top)
         */
        static find_next_unread(startId: bigint | number): null;

        /**
         * Returns the Liferea main window.
         */
        static get_window(): Gtk.Widget;

        /**
         * Searches the glade XML UI tree for the given widget
         * name and returns the found widget.
         * @param name the widget name
         */
        static lookup(name: string): Gtk.Widget | null;

        /**
         * Show the main window.
         */
        static show_window(): void;
    }


    namespace UpdateJob {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateJob extends GObject.Object {
        static $gtype: GObject.GType<UpdateJob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateJob.SignalSignatures;

        // Fields
        request: UpdateRequest;

        result: UpdateResult;

        owner: null;

        callback: update_flow_cb;

        user_data: null;

        destroy: GLib.DestroyNotify;

        flags: updateFlags;

        state: number;

        // Constructors
        constructor(properties?: Partial<UpdateJob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](owner: null, request: UpdateRequest, callback: update_flow_cb, flags: updateFlags): UpdateJob;

        static new_flow(owner: null, callback: update_flow_cb, flags: updateFlags): UpdateJob;

        // Signals
        /** @signal */
        connect<K extends keyof UpdateJob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateJob.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UpdateJob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateJob.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UpdateJob.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UpdateJob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Called by job queue to processes the result of an update job.
         * @param user_data user data passed to the result processing callback
         */
        static process_result(user_data: null): void;

        // Methods
        /**
         * To be called when an update job has failed. Triggers
         * the job queue and specific result processing callback.
         * Takes ownership of `error` string.
         * @param error error message
         */
        failed(error: string): void;

        /**
         * To be called when an update job has been executed. Triggers
         * the job queue and specific result processing callback.
         */
        finished(): void;

        /**
         * `returns` update job state (see enum request_state)
         * Method to query the update state of currently processed jobs.
         * @returns enum state
         */
        get_state(): number;
    }


    namespace UpdateJobQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "update-running": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateJobQueue extends GObject.Object {
        static $gtype: GObject.GType<UpdateJobQueue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateJobQueue.SignalSignatures;

        // Fields
        jobs: null[];

        currentJobCount: number;

        maxCount: number;

        // Constructors
        constructor(properties?: Partial<UpdateJobQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UpdateJobQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateJobQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UpdateJobQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateJobQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UpdateJobQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UpdateJobQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Queues the given job. The job might be delayed if other requests are pending.
         * @param job the job to queue
         * @param flags request/result processing flags
         */
        static add(job: null, flags: updateFlags): void;

        /**
         * Queues the given job for result processing. The job might be delayed if other requests are pending.
         * @param job the job to finish
         */
        static finish(job: null): void;

        /**
         * @param b a JsonBuilder to append to
         */
        static to_json(b: null): void;
    }


    namespace UpdateRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateRequest extends GObject.Object {
        static $gtype: GObject.GType<UpdateRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateRequest.SignalSignatures;

        // Fields
        source: string;

        method: string;

        postdata: string;

        contentType: string;

        authValue: string;

        filtercmd: string;

        allowCommands: boolean;

        // Constructors
        constructor(properties?: Partial<UpdateRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](method: string, source: string, state: updateStatePtr, options: updateOptionsPtr): UpdateRequest;

        // Signals
        /** @signal */
        connect<K extends keyof UpdateRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UpdateRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UpdateRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UpdateRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Allows *this* request to run local commands.
         * 
         * At first it may look this flag should be in updateOptions, but we can
         * take a safer path: feed commands are restricted to a few use cases while
         * options are propagated to downstream requests (feed enrichment, comments,
         * etc.), so it is a good idea to prevent these from running commands in the
         * local system via tricky URLs without needing to validate these options
         * everywhere (which is error-prone).
         * @param allowCommands TRUE if the request can run commands, FALSE otherwise.
         */
        allow_commands(allowCommands: boolean): void;

        /**
         * Sets a custom authorization header value.
         * @param authValue the authorization header value
         */
        set_auth_value(authValue: string): void;

        /**
         * Sets the method for an updateRequest to a new value.
         * @param method the new method
         */
        set_method(method: string): void;

        /**
         * Sets the data and optional content type for a HTTP POST request.
         * @param postdata the data to be sent in an HTTP POST request
         * @param contentType the content type of the request (e.g. "application/json")
         */
        set_postdata(postdata: string, contentType: string): void;

        /**
         * Sets the source for an updateRequest. Only use this when the source
         * is not known at `update_request_new()` calling time.
         * @param source the new source URL
         */
        set_source(source: string): void;
    }


    namespace UpdateResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateResult extends GObject.Object {
        static $gtype: GObject.GType<UpdateResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateResult.SignalSignatures;

        // Fields
        source: string;

        httpstatus: number;

        data: string;

        size: number;

        contentType: string;

        filterErrors: string;

        updateError: string;

        // Constructors
        constructor(properties?: Partial<UpdateResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UpdateResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UpdateResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdateResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UpdateResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UpdateResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    /**
     * @gir-type Alias
     */
    type ActivatableInterface = typeof Activatable;

    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;

    /**
     * @gir-type Alias
     */
    type AuthActivatableInterface = typeof AuthActivatable;

    /**
     * @gir-type Alias
     */
    type BrowserClass = typeof Browser;

    /**
     * @gir-type Alias
     */
    type BrowserTabsClass = typeof BrowserTabs;

    /**
     * @gir-type Alias
     */
    type ContentViewClass = typeof ContentView;

    /**
     * @gir-type Alias
     */
    type DownloadActivatableInterface = typeof DownloadActivatable;

    /**
     * @gir-type Alias
     */
    type FeedListClass = typeof FeedList;

    /**
     * @gir-type Alias
     */
    type ItemClass = typeof Item;

    /**
     * @gir-type Alias
     */
    type ItemListClass = typeof ItemList;

    /**
     * @gir-type Struct
     */
    abstract class ItemListPrivate {
        static $gtype: GObject.GType<ItemListPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ItemListViewClass = typeof ItemListView;

    /**
     * @gir-type Alias
     */
    type NetworkMonitorClass = typeof NetworkMonitor;

    /**
     * @gir-type Struct
     */
    abstract class NetworkMonitorPrivate {
        static $gtype: GObject.GType<NetworkMonitorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NodeClass = typeof Node;

    /**
     * @gir-type Alias
     */
    type NodeSourceActivatableInterface = typeof NodeSourceActivatable;

    /**
     * @gir-type Alias
     */
    type ShellActivatableInterface = typeof ShellActivatable;

    /**
     * @gir-type Alias
     */
    type ShellClass = typeof Shell;

    /**
     * @gir-type Alias
     */
    type UpdateJobClass = typeof UpdateJob;

    /**
     * @gir-type Alias
     */
    type UpdateJobQueueClass = typeof UpdateJobQueue;

    /**
     * @gir-type Alias
     */
    type UpdateRequestClass = typeof UpdateRequest;

    /**
     * @gir-type Alias
     */
    type UpdateResultClass = typeof UpdateResult;

    /**
     * @gir-type Struct
     */
    class enclosure {
        static $gtype: GObject.GType<enclosure>;

        // Fields
        url: string;

        mime: string;

        size: number;

        width: number;

        height: number;

        downloaded: boolean;

        // Static methods
        /**
         * Free all memory associated with the enclosure.
         * @param enclosure the enclosure
         */
        static free(enclosure: enclosurePtr): void;

        /**
         * Get URL from enclosure string
         * @param str enclosure string to parse
         */
        static get_url(str: string): string;

        /**
         * Serializes the enclosure to JSON using a JsonBuilder.
         * @param enclosure the enclosure
         * @param b the JSON builder
         */
        static to_json(enclosure: enclosurePtr, b: Json.Builder): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class enclosurePtr {
        static $gtype: GObject.GType<enclosurePtr>;
    }


    /**
     * @gir-type Struct
     */
    abstract class itemPtr {
        static $gtype: GObject.GType<itemPtr>;
    }


    /**
     * @gir-type Struct
     */
    class itemSet {
        static $gtype: GObject.GType<itemSet>;

        // Fields
        rules: null[];

        anyMatch: boolean;

        ids: null[];

        nodeId: string;

        // Constructors

        constructor(properties?: Partial<{
            anyMatch: boolean;
            nodeId: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    abstract class itemSetPtr {
        static $gtype: GObject.GType<itemSetPtr>;
    }


    /**
     * @gir-type Struct
     */
    class nodeProvider {
        static $gtype: GObject.GType<nodeProvider>;

        // Fields
        capabilities: number;

        id: string;

        icon: number;

        // Static methods
        /**
         * Interactive node adding (e.g. feed menu->new subscription),
         * launches some dialog that upon success adds a feed of the
         * given type.
         * @param provider the node provider
         */
        static request_add(provider: nodeProviderPtr): boolean;
    }


    /**
     * @gir-type Struct
     */
    abstract class nodeProviderPtr {
        static $gtype: GObject.GType<nodeProviderPtr>;
    }


    /**
     * @gir-type Struct
     */
    class nodeSource {
        static $gtype: GObject.GType<nodeSource>;

        // Fields
        root: Node;

        actionQueue: GLib.Queue;

        loginState: nodeSourceState;

        authToken: string;
    }


    /**
     * @gir-type Struct
     */
    abstract class nodeSourcePtr {
        static $gtype: GObject.GType<nodeSourcePtr>;
    }


    /**
     * @gir-type Struct
     */
    class nodeSourceType {
        static $gtype: GObject.GType<nodeSourceType>;

        // Fields
        id: string;

        name: string;

        addInfo: string;

        url: string;

        capabilities: number;
    }


    /**
     * @gir-type Struct
     */
    abstract class nodeSourceTypePtr {
        static $gtype: GObject.GType<nodeSourceTypePtr>;
    }


    /**
     * @gir-type Struct
     */
    class socialSite {
        static $gtype: GObject.GType<socialSite>;

        // Fields
        name: string;

        url: string;

        title: boolean;

        titleFirst: boolean;

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            url: string;
            title: boolean;
            titleFirst: boolean;
        }>);
    }


    /**
     * @gir-type Struct
     */
    abstract class socialSitePtr {
        static $gtype: GObject.GType<socialSitePtr>;
    }


    /**
     * @gir-type Struct
     */
    class subscriptionType {
        static $gtype: GObject.GType<subscriptionType>;
    }


    /**
     * @gir-type Struct
     */
    abstract class subscriptionTypePtr {
        static $gtype: GObject.GType<subscriptionTypePtr>;
    }


    /**
     * @gir-type Struct
     */
    class updateCommandState {
        static $gtype: GObject.GType<updateCommandState>;

        // Fields
        pid: GLib.Pid;

        timeout_id: number;

        io_watch_id: number;

        child_watch_id: number;

        fd: number;
    }


    /**
     * @gir-type Struct
     */
    class updateOptions {
        static $gtype: GObject.GType<updateOptions>;

        // Fields
        username: string;

        password: string;

        dontUseProxy: boolean;

        // Constructors

        constructor(properties?: Partial<{
            username: string;
            password: string;
            dontUseProxy: boolean;
        }>);

        // Static methods
        /**
         * Copies the given update options.
         * @param options the options to copy
         */
        static copy(options: updateOptionsPtr): updateOptionsPtr;

        /**
         * Frees the given update options
         * @param options the update options
         */
        static free(options: updateOptionsPtr): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class updateOptionsPtr {
        static $gtype: GObject.GType<updateOptionsPtr>;
    }


    /**
     * @gir-type Struct
     */
    class updateState {
        static $gtype: GObject.GType<updateState>;

        // Fields
        lastModified: string;

        lastPoll: number;

        lastFaviconPoll: number;

        cookies: string;

        etag: string;

        maxAgeMinutes: number;

        synFrequency: number;

        synPeriod: number;

        timeToLive: number;

        // Static methods
        /**
         * Copy update state
         * @param state 
         */
        static copy(state: updateStatePtr): updateStatePtr;

        /**
         * Frees the given update state.
         * @param updateState the update state
         */
        static free(updateState: updateStatePtr): void;

        /**
         * @param state 
         */
        static get_cache_maxage(state: updateStatePtr): number;

        /**
         * @param state 
         */
        static get_cookies(state: updateStatePtr): string;

        /**
         * @param state 
         */
        static get_etag(state: updateStatePtr): string;

        /**
         * @param state 
         */
        static get_lastmodified(state: updateStatePtr): string;

        /**
         * @param state 
         * @param maxage 
         */
        static set_cache_maxage(state: updateStatePtr, maxage: number): void;

        /**
         * @param state 
         * @param cookies 
         */
        static set_cookies(state: updateStatePtr, cookies: string): void;

        /**
         * @param state 
         * @param etag 
         */
        static set_etag(state: updateStatePtr, etag: string): void;

        /**
         * @param state 
         * @param lastmodified 
         */
        static set_lastmodified(state: updateStatePtr, lastmodified: string): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class updateStatePtr {
        static $gtype: GObject.GType<updateStatePtr>;
    }


    namespace Activatable {
        /**
         * Interface for implementing Activatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Activates the extension.
             * @virtual
             */
            vfunc_activate(): void;

            /**
             * Creates the configure widget for the extension.
             * This interface method is optional.
             * @virtual
             */
            vfunc_create_configure_widget(): void;

            /**
             * Deactivates the extension.
             * @virtual
             */
            vfunc_deactivate(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ActivatableNamespace {
        $gtype: GObject.GType<Activatable>;
        prototype: Activatable;
    }
    /**
     * @gir-type Interface
     */
    interface Activatable extends GObject.Object, Activatable.Interface {

        // Methods
        /**
         * Activates the extension.
         */
        activate(): void;

        /**
         * Creates the configure widget for the extension.
         * This interface method is optional.
         */
        create_configure_widget(): void;

        /**
         * Deactivates the extension.
         */
        deactivate(): void;
    }


    export const Activatable: ActivatableNamespace & {
        new (): Activatable; // This allows `obj instanceof Activatable`
    };

    namespace AuthActivatable {
        /**
         * Interface for implementing AuthActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Activatable.Interface {

            // Virtual methods
            /**
             * Triggers a query for authentication infos for a given subscription.
             * Expects triggered plugins to use `liferea_auth_info_add()` to provide
             * any matches.
             * @param authId a unique auth info id
             * @virtual
             */
            vfunc_query(authId: string): void;

            /**
             * Triggers a query for authentication infos for a given subscription.
             * Expects triggered plugins to use `liferea_auth_info_add()` to provide
             * any matches.
             * @param authId a unique auth info id
             * @param username the username to store
             * @param password the password to store
             * @virtual
             */
            vfunc_store(authId: string, username: string, password: string): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Activatable.ConstructorProps {}
    }

    export interface AuthActivatableNamespace {
        $gtype: GObject.GType<AuthActivatable>;
        prototype: AuthActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface AuthActivatable extends Activatable, AuthActivatable.Interface {

        // Methods
        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use `liferea_auth_info_add()` to provide
         * any matches.
         * @param authId a unique auth info id
         */
        query(authId: string): void;

        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use `liferea_auth_info_add()` to provide
         * any matches.
         * @param authId a unique auth info id
         * @param username the username to store
         * @param password the password to store
         */
        store(authId: string, username: string, password: string): void;
    }


    export const AuthActivatable: AuthActivatableNamespace & {
        new (): AuthActivatable; // This allows `obj instanceof AuthActivatable`
    };

    namespace DownloadActivatable {
        /**
         * Interface for implementing DownloadActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Activatable.Interface {

            // Virtual methods
            /**
             * Triggers a download.
             * @param url an URL to download
             * @virtual
             */
            vfunc_download(url: string): void;

            /**
             * Show the download GUI
             * @virtual
             */
            vfunc_show(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Activatable.ConstructorProps {
            shell: Shell;
        }
    }

    export interface DownloadActivatableNamespace {
        $gtype: GObject.GType<DownloadActivatable>;
        prototype: DownloadActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface DownloadActivatable extends Activatable, DownloadActivatable.Interface {

        // Properties
        /**
         * @construct-only
         */
        get shell(): Shell;

        // Methods
        /**
         * Triggers a download.
         * @param url an URL to download
         */
        download(url: string): void;

        /**
         * Show the download GUI
         */
        show(): void;
    }


    export const DownloadActivatable: DownloadActivatableNamespace & {
        new (): DownloadActivatable; // This allows `obj instanceof DownloadActivatable`
    };

    namespace NodeSourceActivatable {

        // Constructor properties interface
        interface ConstructorProps extends Activatable.ConstructorProps {}
    }

    export interface NodeSourceActivatableNamespace {
        $gtype: GObject.GType<NodeSourceActivatable>;
        prototype: NodeSourceActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface NodeSourceActivatable extends Activatable {
    }


    export const NodeSourceActivatable: NodeSourceActivatableNamespace & {
        new (): NodeSourceActivatable; // This allows `obj instanceof NodeSourceActivatable`
    };

    namespace ShellActivatable {
        /**
         * Interface for implementing ShellActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Activatable.Interface {

            // Virtual methods
            /**
             * Triggers an update of the extension internal state to take into account
             * state changes in the window, due to some event or user action.
             * @virtual
             */
            vfunc_update_state(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Activatable.ConstructorProps {
            shell: Shell;
        }
    }

    export interface ShellActivatableNamespace {
        $gtype: GObject.GType<ShellActivatable>;
        prototype: ShellActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface ShellActivatable extends Activatable, ShellActivatable.Interface {

        // Properties
        /**
         * @construct-only
         */
        get shell(): Shell;

        // Methods
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the window, due to some event or user action.
         */
        update_state(): void;
    }


    export const ShellActivatable: ShellActivatableNamespace & {
        new (): ShellActivatable; // This allows `obj instanceof ShellActivatable`
    };

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

export default Liferea;

// END
