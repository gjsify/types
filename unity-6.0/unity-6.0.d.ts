/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unity-6.0-ambient.d.ts';
import './unity-6.0-import.d.ts';
/**
 * Unity-6.0
 */

import type GLib from '@girs/glib-2.0';
import type Dbusmenu from '@girs/dbusmenu-0.4';
import type GObject from '@girs/gobject-2.0';
import type Dee from '@girs/dee-1.0';
import type Gio from '@girs/gio-2.0';

export namespace Unity {
    enum CategoryType {
        NONE,
        APPLICATION,
        BOOK,
        MUSIC,
        MOVIE,
        GAMES,
        ELECTRONICS,
        COMPUTERS,
        OFFICE,
        HOME,
        GARDEN,
        PETS,
        TOYS,
        CHILDREN,
        BABY,
        CLOTHES,
        SHOES,
        WATCHES,
        SPORTS,
        OUTDOORS,
        GROCERY,
        HEALTH,
        BEAUTY,
        DIY,
        TOOLS,
        CAR,
        N_CATEGORIES,
    }
    enum IconSizeHint {
        DEFAULT,
        SMALL,
        LARGE,
    }
    enum HandledType {
        NOT_HANDLED,
        SHOW_DASH,
        HIDE_DASH,
        GOTO_DASH_URI,
        SHOW_PREVIEW,
    }
    enum CategoryRenderer {
        VERTICAL_TILE,
        HORIZONTAL_TILE,
        LIST_TILE,
        FLOW,
    }
    enum FilterRenderer {
        CHECK_OPTIONS,
        RADIO_OPTIONS,
        MULTIRANGE,
        RATINGS,
        CHECK_OPTIONS_COMPACT,
    }
    enum LayoutHint {
        NONE,
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
    }
    enum SearchType {
        DEFAULT,
        GLOBAL,
        N_TYPES,
    }
    enum PlaybackState {
        PLAYING,
        PAUSED,
    }
    enum OptionsFilterSortType {
        MANUAL,
        DISPLAY_NAME,
        ID,
    }
    enum PreferencesManagerRemoteContent {
        ALL,
        NONE,
    }
    enum MusicPreviewTrackState {
        STOPPED,
        PLAYING,
        PAUSED,
    }
    /**
     * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
     * @param input
     * @param io_priority
     * @param cancellable
     * @param _callback_
     */
    function io_read_stream_async(
        input: Gio.InputStream,
        io_priority: number,
        cancellable: Gio.Cancellable,
        _callback_: Gio.AsyncReadyCallback<Gio.InputStream>,
    ): void;
    function io_read_stream_finish(_res_: Gio.AsyncResult): void;
    /**
     * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input
     * stream for it.</para>
     * <para>If the file can not be found this method returns null.</para>
     * @param filename
     * @param dirs
     * @param _callback_
     */
    function io_open_from_dirs(filename: string, dirs: string[], _callback_: Gio.AsyncReadyCallback<string>): void;
    function io_open_from_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;
    /**
     * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment
     * variable.</para>
     * @param filename
     * @param _callback_
     */
    function io_open_from_data_dirs(filename: string, _callback_: Gio.AsyncReadyCallback<string>): void;
    function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;
    function io_get_system_data_dirs(): string[];
    module AppInfoManager {
        // Signal callback interfaces

        interface Changed {
            (id: string, new_appinfo: Gio.AppInfo): void;
        }

        // Constructor properties interface
    }

    /**
     * <para>A singleton class that caches GLib.AppInfo objects. Singletons are evil, yes, but this on slightly less so because the exposed API is immutable.
     * </para>
     * <para>To detect when any of the managed AppInfo objects changes, appears, or goes away listen for the &apos;changed&apos; signal.</para>
     */
    class AppInfoManager extends GObject.Object {
        // Owm methods of Unity-6.0.AppInfoManager

        static get_instance(): AppInfoManager;
        /**
         * <para>Get a ref to the singleton AppInfoManager</para>
         */
        static get_default(): AppInfoManager;

        // Owm methods of Unity-6.0.AppInfoManager

        /**
         * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application
         * including the .desktop extension.</para>
         * <para>If the AppInfo is not already cached this method will do synchronous IO to look it up.</para>
         * @param id
         */
        lookup(id: string): Gio.AppInfo;
        /**
         * <para>Look up XDG categories for for desktop id or file path &commat;id. Returns null if id is not found. This method will do sync IO if the desktop
         * file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar;
         * before calling this method, in which case no sync io will be done.</para>
         * @param id
         */
        get_categories(id: string): string[];
        /**
         * <para>Look up keywords for for desktop id or file path &commat;id. The keywords will be an amalgamation of the X-GNOME-Keywords and X-AppInstall-
         * Keywords fields from the .desktopfile. Returns null if id is not found. This method will do sync IO if the desktop file for &commat;id is not already
         * cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; before calling this method, in which
         * case no sync io will be done.</para>
         * @param id
         */
        get_keywords(id: string): string[];
        /**
         * <para>Look up the full path to the desktop file for desktop id &commat;id. Returns null if &commat;id is not found. This method will do sync IO if
         * the desktop file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id
         * &rpar; before calling this method, in which case no sync io will be done.</para>
         * @param id
         */
        get_path(id: string): string;
        /**
         * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application
         * including the .desktop extension.</para>
         * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
         * @param id
         * @param _callback_
         */
        lookup_async(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo;
        clear(): void;
    }

    module AnnotatedIcon {
        // Constructor properties interface
    }

    class AnnotatedIcon extends GObject.Object {
        // Own properties of Unity-6.0.AnnotatedIcon

        icon: Gio.Icon;
        ribbon: string;
        category: CategoryType;
        size_hint: IconSizeHint;
        sizeHint: IconSizeHint;

        // Constructors of Unity-6.0.AnnotatedIcon

        static ['new'](base_icon: Gio.Icon): AnnotatedIcon;

        // Owm methods of Unity-6.0.AnnotatedIcon

        to_string(): string;
    }

    module Inspector {
        // Constructor properties interface
    }

    /**
     * <para>The Unity.Inspector is a singleton that can be used to inspect the state of Unity.</para>
     * <para>One of the most basic and most useful applications of the inspector is to check if Unity is running or not.</para>
     */
    class Inspector extends GObject.Object {
        // Own properties of Unity-6.0.Inspector

        /**
         * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
         */
        readonly unity_running: boolean;
        /**
         * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
         */
        readonly unityRunning: boolean;
        /**
         * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
         */
        readonly unity_bus_name: string;
        /**
         * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
         */
        readonly unityBusName: string;

        // Owm methods of Unity-6.0.Inspector

        /**
         * <para>Get the default singleton Unity.Inspector instance, creating it dynamically if necessary.</para>
         */
        static get_default(): Inspector;
    }

    module LauncherEntry {
        // Constructor properties interface
    }

    /**
     * <para>This class represents your control point for your application&apos;s icon in the Unity Launcher. You can control properties such as a counter,
     * progress, or emblem that will be overlaid on your application&apos;s launcher icon. You can also set a quicklist on it by setting the &quot;quicklist
     * &quot; property to point at the Dbusmenu.Menuitem which is the root of your quicklist.</para>
     * <para>Create a LauncherEntry by giving your desktop file id to the constructor &lpar;eg. &quot;myapp.desktop&quot;&rpar;.</para>
     */
    class LauncherEntry extends GObject.Object {
        // Own properties of Unity-6.0.LauncherEntry

        app_uri: string;
        appUri: string;
        count: number;
        count_visible: boolean;
        countVisible: boolean;
        progress: number;
        progress_visible: boolean;
        progressVisible: boolean;
        urgent: boolean;
        quicklist: Dbusmenu.Menuitem;

        // Owm methods of Unity-6.0.LauncherEntry

        static get_for_app_uri(app_uri: string): LauncherEntry;
        static get_for_desktop_id(desktop_id: string): LauncherEntry;
        static get_for_desktop_file(desktop_file: string): LauncherEntry;
    }

    module LauncherFavorites {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class LauncherFavorites extends GObject.Object {
        // Owm methods of Unity-6.0.LauncherFavorites

        /**
         * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
         */
        static get_default(): LauncherFavorites;

        // Owm methods of Unity-6.0.LauncherFavorites

        has_app_info(appinfo: Gio.AppInfo): boolean;
        has_app_id(app_id: string): boolean;
        lookup(app_id: string): Gio.AppInfo;
        enumerate_ids(): string[];
        enumerate_app_infos(): Gio.AppInfo[];
    }

    module ActivationResponse {
        // Constructor properties interface
    }

    class ActivationResponse extends GObject.InitiallyUnowned {
        // Own properties of Unity-6.0.ActivationResponse

        handled: HandledType;
        goto_uri: string;
        gotoUri: string;

        // Constructors of Unity-6.0.ActivationResponse

        static ['new'](handled: HandledType, goto_uri: string): ActivationResponse;

        static with_preview(preview: Preview): ActivationResponse;
    }

    module Category {
        // Constructor properties interface
    }

    class Category extends GObject.Object {
        // Own properties of Unity-6.0.Category

        name: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        default_renderer: CategoryRenderer;
        defaultRenderer: CategoryRenderer;

        // Constructors of Unity-6.0.Category

        static ['new'](name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;
    }

    module Filter {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Filter extends GObject.Object {
        // Own properties of Unity-6.0.Filter

        id: string;
        display_name: string;
        displayName: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        renderer: FilterRenderer;
        visible: boolean;
        collapsed: boolean;
        filtering: boolean;
    }

    module FilterOption {
        // Constructor properties interface
    }

    class FilterOption extends GObject.Object {
        // Own properties of Unity-6.0.FilterOption

        id: string;
        display_name: string;
        displayName: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        active: boolean;

        // Constructors of Unity-6.0.FilterOption

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, active: boolean): FilterOption;
    }

    module OptionsFilter {
        // Constructor properties interface
    }

    class OptionsFilter extends Filter {
        // Own properties of Unity-6.0.OptionsFilter

        sort_type: OptionsFilterSortType;
        sortType: OptionsFilterSortType;

        // Own fields of Unity-6.0.OptionsFilter

        options: FilterOption[];

        // Constructors of Unity-6.0.OptionsFilter

        static ['new'](): OptionsFilter;

        // Owm methods of Unity-6.0.OptionsFilter

        add_option(id: string, display_name: string, icon_hint: Gio.Icon): FilterOption;
        get_option(id: string): FilterOption;
        /**
         * <para>Removes a FilterOption from the OptionsFilter.</para>
         * @param id
         * @returns true if a FilterOption was removed, false if FilterOption with given id couldn&apos;t be found.
         */
        remove_option(id: string): boolean;
    }

    module RadioOptionFilter {
        // Constructor properties interface
    }

    class RadioOptionFilter extends OptionsFilter {
        // Constructors of Unity-6.0.RadioOptionFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RadioOptionFilter;

        // Owm methods of Unity-6.0.RadioOptionFilter

        get_active_option(): FilterOption;
    }

    module CheckOptionFilter {
        // Constructor properties interface
    }

    class CheckOptionFilter extends OptionsFilter {
        // Constructors of Unity-6.0.CheckOptionFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): CheckOptionFilter;
    }

    module CheckOptionFilterCompact {
        // Constructor properties interface
    }

    class CheckOptionFilterCompact extends OptionsFilter {
        // Constructors of Unity-6.0.CheckOptionFilterCompact

        static ['new'](
            id: string,
            display_name: string,
            icon_hint: Gio.Icon,
            collapsed: boolean,
        ): CheckOptionFilterCompact;
    }

    module RatingsFilter {
        // Constructor properties interface
    }

    class RatingsFilter extends Filter {
        // Own properties of Unity-6.0.RatingsFilter

        rating: number;

        // Constructors of Unity-6.0.RatingsFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RatingsFilter;
    }

    module MultiRangeFilter {
        // Constructor properties interface
    }

    class MultiRangeFilter extends OptionsFilter {
        // Constructors of Unity-6.0.MultiRangeFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): MultiRangeFilter;

        // Owm methods of Unity-6.0.MultiRangeFilter

        get_first_active(): FilterOption;
        get_last_active(): FilterOption;
    }

    module PreferencesManager {
        // Constructor properties interface
    }

    /**
     * <para>A singleton class that caches different gsettings settings.</para>
     */
    class PreferencesManager extends GObject.Object {
        // Own properties of Unity-6.0.PreferencesManager

        remote_content_search: PreferencesManagerRemoteContent;
        remoteContentSearch: PreferencesManagerRemoteContent;

        // Owm methods of Unity-6.0.PreferencesManager

        /**
         * <para>Get a ref to the singleton PreferencesManager</para>
         */
        static get_default(): PreferencesManager;
    }

    module LensSearch {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        // Constructor properties interface
    }

    class LensSearch extends GObject.InitiallyUnowned {
        // Own properties of Unity-6.0.LensSearch

        search_string: string;
        searchString: string;
        hints: GLib.HashTable<string, GLib.Variant>;
        results_model: Dee.SerializableModel;
        resultsModel: Dee.SerializableModel;

        // Constructors of Unity-6.0.LensSearch

        static ['new'](
            search_string: string,
            hints: GLib.HashTable<string, GLib.Variant>,
            results_model: Dee.SerializableModel,
        ): LensSearch;

        // Owm methods of Unity-6.0.LensSearch

        emit_finished(): void;
        equals(other: LensSearch): boolean;
        set_reply_hint(key: string, variant: GLib.Variant): void;
    }

    module Lens {
        // Constructor properties interface
    }

    class Lens extends GObject.Object {
        // Own properties of Unity-6.0.Lens

        active: boolean;
        visible: boolean;
        searching: boolean;
        exported: boolean;
        search_in_global: boolean;
        searchInGlobal: boolean;
        home_lens_default_name: string;
        homeLensDefaultName: string;
        id: string;
        dbus_path: string;
        dbusPath: string;
        search_hint: string;
        searchHint: string;
        filters: Filter[];
        categories: Category[];
        merge_strategy: MergeStrategy;
        mergeStrategy: MergeStrategy;
        global_merge_strategy: MergeStrategy;
        globalMergeStrategy: MergeStrategy;
        sources_display_name: string;
        sourcesDisplayName: string;

        // Constructors of Unity-6.0.Lens

        static ['new'](dbus_path_: string, id_: string): Lens;

        // Owm methods of Unity-6.0.Lens

        ['export'](): void;
        add_local_scope(scope: Scope): void;
    }

    module Preview {
        // Signal callback interfaces

        interface Closed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Preview extends GObject.Object {
        // Own properties of Unity-6.0.Preview

        title: string;
        subtitle: string;
        description_markup: string;
        descriptionMarkup: string;
        image_source_uri: string;
        imageSourceUri: string;
        image: Gio.Icon;

        // Owm methods of Unity-6.0.Preview

        add_action(action: PreviewAction): void;
        add_info(info_hint: InfoHint): void;
    }

    module PreviewAction {
        // Signal callback interfaces

        interface Activated {
            (uri: string): ActivationResponse;
        }

        // Constructor properties interface
    }

    class PreviewAction extends GObject.Object {
        // Own properties of Unity-6.0.PreviewAction

        id: string;
        display_name: string;
        displayName: string;
        extra_text: string;
        extraText: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        layout_hint: LayoutHint;
        layoutHint: LayoutHint;
        readonly hints: GLib.HashTable<string, GLib.Variant>;

        // Constructors of Unity-6.0.PreviewAction

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        static with_layout_hint(
            id: string,
            display_name: string,
            icon_hint: Gio.Icon,
            layout: LayoutHint,
        ): PreviewAction;
    }

    module InfoHint {
        // Constructor properties interface
    }

    class InfoHint extends GObject.InitiallyUnowned {
        // Own properties of Unity-6.0.InfoHint

        id: string;
        display_name: string;
        displayName: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        data: GLib.Variant;

        // Constructors of Unity-6.0.InfoHint

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, data: string): InfoHint;

        static with_variant(id: string, display_name: string, icon_hint: Gio.Icon, data: GLib.Variant): InfoHint;
    }

    module GenericPreview {
        // Constructor properties interface
    }

    class GenericPreview extends Preview {
        // Constructors of Unity-6.0.GenericPreview

        static ['new'](title: string, description: string, image: Gio.Icon): GenericPreview;
    }

    module ApplicationPreview {
        // Constructor properties interface
    }

    class ApplicationPreview extends Preview {
        // Own properties of Unity-6.0.ApplicationPreview

        app_icon: Gio.Icon;
        appIcon: Gio.Icon;
        license: string;
        copyright: string;
        last_update: string;
        lastUpdate: string;

        // Constructors of Unity-6.0.ApplicationPreview

        static ['new'](
            title: string,
            subtitle: string,
            description: string,
            icon: Gio.Icon,
            screenshot: Gio.Icon,
        ): ApplicationPreview;

        // Owm methods of Unity-6.0.ApplicationPreview

        set_rating(rating: number, num_ratings: number): void;
    }

    module MusicPreview {
        // Signal callback interfaces

        interface Play {
            (uri: string): void;
        }

        interface Pause {
            (uri: string): void;
        }

        // Constructor properties interface
    }

    class MusicPreview extends Preview {
        // Own properties of Unity-6.0.MusicPreview

        current_track_uri: string;
        currentTrackUri: string;
        current_progress: number;
        currentProgress: number;
        current_track_state: MusicPreviewTrackState;
        currentTrackState: MusicPreviewTrackState;

        // Constructors of Unity-6.0.MusicPreview

        static ['new'](title: string, subtitle: string, image: Gio.Icon): MusicPreview;

        // Owm methods of Unity-6.0.MusicPreview

        add_track(track: TrackMetadata): void;
    }

    module MoviePreview {
        // Constructor properties interface
    }

    class MoviePreview extends Preview {
        // Own properties of Unity-6.0.MoviePreview

        year: string;

        // Constructors of Unity-6.0.MoviePreview

        static ['new'](title: string, subtitle: string, description: string, image: Gio.Icon): MoviePreview;

        // Owm methods of Unity-6.0.MoviePreview

        set_rating(rating: number, num_ratings: number): void;
    }

    module SocialPreview {
        // Constructor properties interface
    }

    class SocialPreview extends Preview {
        // Own properties of Unity-6.0.SocialPreview

        avatar: Gio.Icon;
        content: string;
        sender: string;

        // Constructors of Unity-6.0.SocialPreview

        static ['new'](sender: string, subtitle: string, content: string, avatar: Gio.Icon): SocialPreview;

        // Owm methods of Unity-6.0.SocialPreview

        add_comment(comment: SocialPreviewComment): void;
    }

    module SocialPreviewComment {
        // Constructor properties interface
    }

    class SocialPreviewComment extends GObject.InitiallyUnowned {
        // Own properties of Unity-6.0.SocialPreviewComment

        id: string;
        name: string;
        text: string;
        time: string;

        // Constructors of Unity-6.0.SocialPreviewComment

        static ['new'](id: string, name: string, text: string, time: string): SocialPreviewComment;
    }

    module AsyncPreview {
        // Signal callback interfaces

        interface PreviewReady {
            (preview: Preview): void;
        }

        // Constructor properties interface
    }

    class AsyncPreview extends Preview {
        // Own properties of Unity-6.0.AsyncPreview

        cancellable: Gio.Cancellable;

        // Constructors of Unity-6.0.AsyncPreview

        static ['new'](): AsyncPreview;

        static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview;

        // Owm methods of Unity-6.0.AsyncPreview

        emit_preview_ready(preview: Preview): void;
    }

    module Scope {
        // Signal callback interfaces

        interface ActivateUri {
            (uri: string): ActivationResponse;
        }

        interface PreviewUri {
            (uri: string): Preview;
        }

        interface FiltersChanged {
            (): void;
        }

        interface ActiveSourcesChanged {
            (active_ids: string[]): void;
        }

        interface SearchChanged {
            (search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable): void;
        }

        interface GenerateSearchKey {
            (search: LensSearch): string;
        }

        // Constructor properties interface
    }

    class Scope extends GObject.Object {
        // Own properties of Unity-6.0.Scope

        active: boolean;
        exported: boolean;
        search_in_global: boolean;
        searchInGlobal: boolean;
        provides_personal_content: boolean;
        providesPersonalContent: boolean;
        dbus_path: string;
        dbusPath: string;
        sources: OptionsFilter;
        readonly filters: Filter[];
        readonly results_model: Dee.SerializableModel;
        readonly resultsModel: Dee.SerializableModel;
        readonly global_results_model: Dee.SerializableModel;
        readonly globalResultsModel: Dee.SerializableModel;

        // Constructors of Unity-6.0.Scope

        static ['new'](dbus_path_: string): Scope;

        // Owm methods of Unity-6.0.Scope

        ['export'](): void;
        get_filter(id: string): Filter;
        /**
         * <para>Invalidates current search and queues new search.</para>
         * <para>This method will invalidate &lpar;and cancel&rpar; last search and queue a new search &lpar;with the same search_string&rpar;. The #UnityScope::search-changed
         *  signal will be emitted immediately in case the Lens managing this scope is active, or as soon as it becomes active.</para>
         * @param search_type Type of search to queue.
         */
        queue_search_changed(search_type: SearchType): void;
        /**
         * <para>Invalidates last search.</para>
         * <para>Invalidate last search, so that the next search request will trigger the #UnityScope::search-changed signal even if the search would be
         * otherwise discarded because of unchanged search key.</para>
         * <para>See also: #UnityScope::generate-search-key</para>
         * @param search_type Type of search to invalidate.
         */
        invalidate_search(search_type: SearchType): void;
    }

    module TrackMetadata {
        // Constructor properties interface
    }

    class TrackMetadata extends GObject.Object {
        // Own properties of Unity-6.0.TrackMetadata

        uri: string;
        track_no: number;
        trackNo: number;
        artist: string;
        title: string;
        album: string;
        length: number;
        art_location: Gio.File;
        artLocation: Gio.File;
        art_icon: Gio.Icon;
        artIcon: Gio.Icon;

        // Constructors of Unity-6.0.TrackMetadata

        static ['new'](): TrackMetadata;

        static full(
            uri: string,
            track_no: number,
            title: string,
            artist: string,
            album: string,
            length: number,
        ): TrackMetadata;
    }

    module Playlist {
        // Constructor properties interface
    }

    class Playlist extends GObject.Object {
        // Own properties of Unity-6.0.Playlist

        id: string;
        name: string;
        icon: Gio.Icon;
        creation_date: GLib.DateTime;
        creationDate: GLib.DateTime;
        modification_date: GLib.DateTime;
        modificationDate: GLib.DateTime;
        last_play_date: GLib.DateTime;
        lastPlayDate: GLib.DateTime;

        // Constructors of Unity-6.0.Playlist

        static ['new'](id: string): Playlist;
    }

    module MusicPlayer {
        // Signal callback interfaces

        interface Raise {
            (): void;
        }

        interface PlayPause {
            (): void;
        }

        interface Previous {
            (): void;
        }

        interface Next {
            (): void;
        }

        interface ActivatePlaylist {
            (playlist_id: GLib.ObjectPath): void;
        }

        // Constructor properties interface
    }

    class MusicPlayer extends GObject.Object {
        // Own properties of Unity-6.0.MusicPlayer

        app_info: Gio.AppInfo;
        appInfo: Gio.AppInfo;
        desktop_file_name: string;
        desktopFileName: string;
        is_blacklisted: boolean;
        isBlacklisted: boolean;
        title: string;
        can_go_next: boolean;
        canGoNext: boolean;
        can_go_previous: boolean;
        canGoPrevious: boolean;
        can_play: boolean;
        canPlay: boolean;
        can_pause: boolean;
        canPause: boolean;
        current_track: TrackMetadata;
        currentTrack: TrackMetadata;
        playback_state: PlaybackState;
        playbackState: PlaybackState;
        current_playlist: Playlist;
        currentPlaylist: Playlist;
        track_menu: Dbusmenu.Menuitem;
        trackMenu: Dbusmenu.Menuitem;
        player_menu: Dbusmenu.Menuitem;
        playerMenu: Dbusmenu.Menuitem;

        // Constructors of Unity-6.0.MusicPlayer

        static ['new'](desktop: string): MusicPlayer;

        // Owm methods of Unity-6.0.MusicPlayer

        ['export'](): void;
        unexport(): void;
        add_playlist(p: Playlist): boolean;
        remove_playlist(p: Playlist): boolean;
        get_playlists(): Playlist[];
        edit_playlist_name(id: string, name: string): void;
    }

    class AppInfoManagerClass {}

    class AppInfoManagerPrivate {}

    class AnnotatedIconClass {}

    class AnnotatedIconPrivate {}

    class InspectorClass {}

    class InspectorPrivate {}

    class LauncherEntryClass {}

    class LauncherEntryPrivate {}

    class LauncherFavoritesClass {}

    class LauncherFavoritesPrivate {}

    class ActivationResponseClass {}

    class ActivationResponsePrivate {}

    class CategoryClass {}

    class CategoryPrivate {}

    class FilterClass {}

    class FilterPrivate {}

    class FilterOptionClass {}

    class FilterOptionPrivate {}

    class OptionsFilterClass {}

    class OptionsFilterPrivate {}

    class RadioOptionFilterClass {}

    class RadioOptionFilterPrivate {}

    class CheckOptionFilterClass {}

    class CheckOptionFilterPrivate {}

    class CheckOptionFilterCompactClass {}

    class CheckOptionFilterCompactPrivate {}

    class RatingsFilterClass {}

    class RatingsFilterPrivate {}

    class MultiRangeFilterClass {}

    class MultiRangeFilterPrivate {}

    class PreferencesManagerClass {}

    class PreferencesManagerPrivate {}

    class LensSearchClass {}

    class LensSearchPrivate {}

    class LensClass {}

    class LensPrivate {}

    class PreviewClass {}

    class PreviewPrivate {}

    class PreviewActionClass {}

    class PreviewActionPrivate {}

    class InfoHintClass {}

    class InfoHintPrivate {}

    class GenericPreviewClass {}

    class GenericPreviewPrivate {}

    class ApplicationPreviewClass {}

    class ApplicationPreviewPrivate {}

    class MusicPreviewClass {}

    class MusicPreviewPrivate {}

    class MoviePreviewClass {}

    class MoviePreviewPrivate {}

    class SocialPreviewClass {}

    class SocialPreviewPrivate {}

    class CommentClass {}

    class CommentPrivate {}

    class AsyncPreviewClass {}

    class AsyncPreviewPrivate {}

    class ScopeClass {}

    class ScopePrivate {}

    class TrackMetadataClass {}

    class TrackMetadataPrivate {}

    class PlaylistClass {}

    class PlaylistPrivate {}

    class MusicPlayerClass {}

    class MusicPlayerPrivate {}

    class MergeStrategyIface {}

    class PlaylistDetails {
        // Own fields of Unity-6.0.PlaylistDetails

        id: GLib.ObjectPath;
        name: string;
        icon_name: string;
    }

    class ActivePlaylistContainer {
        // Own fields of Unity-6.0.ActivePlaylistContainer

        valid: boolean;
    }

    interface MergeStrategy {
        // Owm methods of Unity-6.0.MergeStrategy

        /**
         * <para>Virtual method to merge row from source model into target model.</para>
         * @param target The target model to merge a row into
         * @param row An array of variants with the row data for the result
         * @returns A model iter pointing to the row in the target model where &commat;row was added. Or null if the result was discarded
         */
        merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;

        // Own virtual methods of Unity-6.0.MergeStrategy

        /**
         * <para>Virtual method to merge row from source model into target model.</para>
         * @param target The target model to merge a row into
         * @param row An array of variants with the row data for the result
         */
        vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;
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

export default Unity;
// END
