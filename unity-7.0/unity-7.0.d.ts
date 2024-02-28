/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unity-7.0-ambient.d.ts';
import './unity-7.0-import.d.ts';
/**
 * Unity-7.0
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
    enum CategoryRenderer {
        DEFAULT,
        GRID,
        CAROUSEL,
        LIST,
        DYNAMIC,
        SPECIAL,
        VERTICAL_TILE,
        HORIZONTAL_TILE,
    }
    enum CategoryContentType {
        DEFAULT,
        APPLICATIONS,
        MUSIC,
        VIDEO,
        PLACES,
        SOCIAL,
        WEATHER,
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
    enum HandledType {
        NOT_HANDLED,
        SHOW_DASH,
        HIDE_DASH,
        GOTO_DASH_URI,
        SHOW_PREVIEW,
        PERFORM_SEARCH,
    }
    enum SearchType {
        DEFAULT,
        GLOBAL,
        N_TYPES,
    }
    enum ResultType {
        DEFAULT,
        PERSONAL,
        SEMI_PERSONAL,
    }
    enum SerializationType {
        BINARY,
        JSON,
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
    enum PaymentPreviewType {
        APPLICATION,
        MUSIC,
        ERROR,
    }
    enum SchemaFieldType {
        OPTIONAL,
        REQUIRED,
    }
    enum AggregatorScopeSortFlags {
        ASCENDING,
        DESCENDING,
        CASE_INSENSITIVE,
    }
    enum AggregatorScopeMergeMode {
        CATEGORY_ID,
        OWNER_SCOPE,
    }
    const SCOPE_API_VERSION: number;
    function category_renderer_from_string(renderer_name: string): CategoryRenderer;
    function category_renderer_to_string(val: CategoryRenderer): string;
    function category_content_type_from_string(content_type: string): CategoryContentType;
    function category_content_type_to_string(val: CategoryContentType): string;
    function filter_renderer_to_string(renderer: FilterRenderer): string;
    function filter_renderer_from_string(renderer_name: string): FilterRenderer;
    function scope_module_get_version(): number;
    function scope_module_load_scopes(): AbstractScope[];
    function object_unref(object: any): void;
    interface ScopeSearchBaseCallback {
        (instance: ScopeSearchBase): void;
    }
    interface AbstractPreviewCallback {
        (previewer: ResultPreviewer, preview: AbstractPreview): void;
    }
    module AppInfoManager {
        // Signal callback interfaces

        interface Changed {
            (id: string, new_appinfo: Gio.AppInfo): void;
        }

        // Constructor properties interface
    }

    class AppInfoManager extends GObject.Object {
        // Owm methods of Unity-7.0.AppInfoManager

        static get_instance(): AppInfoManager;
        static get_default(): AppInfoManager;

        // Owm methods of Unity-7.0.AppInfoManager

        lookup(id: string): Gio.AppInfo;
        get_categories(id: string): string[];
        get_keywords(id: string): string[];
        get_path(id: string): string;
        lookup_async(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo;
        clear(): void;
    }

    module AnnotatedIcon {
        // Constructor properties interface
    }

    class AnnotatedIcon extends GObject.Object {
        // Own properties of Unity-7.0.AnnotatedIcon

        icon: Gio.Icon;
        ribbon: string;
        category: CategoryType;
        size_hint: IconSizeHint;
        sizeHint: IconSizeHint;

        // Constructors of Unity-7.0.AnnotatedIcon

        static ['new'](base_icon: Gio.Icon): AnnotatedIcon;

        // Owm methods of Unity-7.0.AnnotatedIcon

        set_colorize_rgba(r: number, g: number, b: number, a: number): void;
        to_string(): string;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        get_ribbon(): string;
        set_ribbon(value: string): void;
        get_category(): CategoryType;
        set_category(value: CategoryType): void;
        get_size_hint(): IconSizeHint;
        set_size_hint(value: IconSizeHint): void;
    }

    module Inspector {
        // Constructor properties interface
    }

    class Inspector extends GObject.Object {
        // Own properties of Unity-7.0.Inspector

        readonly unity_running: boolean;
        readonly unityRunning: boolean;
        readonly unity_bus_name: string;
        readonly unityBusName: string;

        // Owm methods of Unity-7.0.Inspector

        static get_default(): Inspector;

        // Owm methods of Unity-7.0.Inspector

        get_unity_running(): boolean;
        get_unity_bus_name(): string;
    }

    module LauncherEntry {
        // Constructor properties interface
    }

    class LauncherEntry extends GObject.Object {
        // Own properties of Unity-7.0.LauncherEntry

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

        // Owm methods of Unity-7.0.LauncherEntry

        static get_for_app_uri(app_uri: string): LauncherEntry;
        static get_for_desktop_id(desktop_id: string): LauncherEntry;
        static get_for_desktop_file(desktop_file: string): LauncherEntry;

        // Owm methods of Unity-7.0.LauncherEntry

        get_app_uri(): string;
        set_app_uri(value: string): void;
        get_count(): number;
        set_count(value: number): void;
        get_count_visible(): boolean;
        set_count_visible(value: boolean): void;
        get_progress(): number;
        set_progress(value: number): void;
        get_progress_visible(): boolean;
        set_progress_visible(value: boolean): void;
        get_urgent(): boolean;
        set_urgent(value: boolean): void;
        get_quicklist(): Dbusmenu.Menuitem;
        set_quicklist(value: Dbusmenu.Menuitem): void;
    }

    module LauncherFavorites {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class LauncherFavorites extends GObject.Object {
        // Owm methods of Unity-7.0.LauncherFavorites

        static get_default(): LauncherFavorites;

        // Owm methods of Unity-7.0.LauncherFavorites

        has_app_info(appinfo: Gio.AppInfo): boolean;
        has_app_id(app_id: string): boolean;
        lookup(app_id: string): Gio.AppInfo;
        enumerate_ids(): string[];
        enumerate_app_infos(): Gio.AppInfo[];
    }

    module MetadataProvider {
        // Constructor properties interface
    }

    abstract class MetadataProvider extends GObject.Object {}

    module ProgressSourceProvider {
        // Constructor properties interface
    }

    class ProgressSourceProvider extends MetadataProvider {
        // Own properties of Unity-7.0.ProgressSourceProvider

        dbus_name: string;
        dbusName: string;
        dbus_path: string;
        dbusPath: string;

        // Constructors of Unity-7.0.ProgressSourceProvider

        static ['new'](dbus_name: string, dbus_path: string): ProgressSourceProvider;

        // Owm methods of Unity-7.0.ProgressSourceProvider

        get_dbus_name(): string;
        get_dbus_path(): string;
    }

    module Category {
        // Constructor properties interface
    }

    class Category extends GObject.Object {
        // Own properties of Unity-7.0.Category

        id: string;
        name: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        default_renderer: CategoryRenderer;
        defaultRenderer: CategoryRenderer;
        content_type: CategoryContentType;
        contentType: CategoryContentType;
        renderer_hint: string;
        rendererHint: string;
        readonly renderer: string;

        // Constructors of Unity-7.0.Category

        static ['new'](id: string, name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;

        // Owm methods of Unity-7.0.Category

        add_metadata_provider(provider: MetadataProvider): void;
        get_id(): string;
        get_name(): string;
        get_icon_hint(): Gio.Icon;
        get_default_renderer(): CategoryRenderer;
        get_content_type(): CategoryContentType;
        set_content_type(value: CategoryContentType): void;
        get_renderer_hint(): string;
        set_renderer_hint(value: string): void;
        get_renderer(): string;
    }

    module Filter {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Filter extends GObject.Object {
        // Own properties of Unity-7.0.Filter

        id: string;
        display_name: string;
        displayName: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        renderer: FilterRenderer;
        visible: boolean;
        collapsed: boolean;
        filtering: boolean;

        // Owm methods of Unity-7.0.Filter

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_renderer(): FilterRenderer;
        get_visible(): boolean;
        set_visible(value: boolean): void;
        get_collapsed(): boolean;
        get_filtering(): boolean;
    }

    module FilterOption {
        // Constructor properties interface
    }

    class FilterOption extends GObject.Object {
        // Own properties of Unity-7.0.FilterOption

        id: string;
        display_name: string;
        displayName: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        active: boolean;

        // Constructors of Unity-7.0.FilterOption

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, active: boolean): FilterOption;

        // Owm methods of Unity-7.0.FilterOption

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    module OptionsFilter {
        // Constructor properties interface
    }

    class OptionsFilter extends Filter {
        // Own properties of Unity-7.0.OptionsFilter

        sort_type: OptionsFilterSortType;
        sortType: OptionsFilterSortType;
        show_all_button: boolean;
        showAllButton: boolean;

        // Own fields of Unity-7.0.OptionsFilter

        options: FilterOption[];

        // Constructors of Unity-7.0.OptionsFilter

        static ['new'](): OptionsFilter;

        // Owm methods of Unity-7.0.OptionsFilter

        add_option(id: string, display_name: string, icon_hint: Gio.Icon): FilterOption;
        get_option(id: string): FilterOption;
        remove_option(id: string): boolean;
        get_sort_type(): OptionsFilterSortType;
        set_sort_type(value: OptionsFilterSortType): void;
        get_show_all_button(): boolean;
        set_show_all_button(value: boolean): void;
    }

    module RadioOptionFilter {
        // Constructor properties interface
    }

    class RadioOptionFilter extends OptionsFilter {
        // Constructors of Unity-7.0.RadioOptionFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RadioOptionFilter;

        // Owm methods of Unity-7.0.RadioOptionFilter

        get_active_option(): FilterOption;
    }

    module CheckOptionFilter {
        // Constructor properties interface
    }

    class CheckOptionFilter extends OptionsFilter {
        // Constructors of Unity-7.0.CheckOptionFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): CheckOptionFilter;
    }

    module CheckOptionFilterCompact {
        // Constructor properties interface
    }

    class CheckOptionFilterCompact extends OptionsFilter {
        // Constructors of Unity-7.0.CheckOptionFilterCompact

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
        // Own properties of Unity-7.0.RatingsFilter

        rating: number;

        // Constructors of Unity-7.0.RatingsFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RatingsFilter;

        // Owm methods of Unity-7.0.RatingsFilter

        get_rating(): number;
    }

    module MultiRangeFilter {
        // Constructor properties interface
    }

    class MultiRangeFilter extends OptionsFilter {
        // Constructors of Unity-7.0.MultiRangeFilter

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): MultiRangeFilter;

        // Owm methods of Unity-7.0.MultiRangeFilter

        get_first_active(): FilterOption;
        get_last_active(): FilterOption;
    }

    module PreferencesManager {
        // Constructor properties interface
    }

    class PreferencesManager extends GObject.Object {
        // Own properties of Unity-7.0.PreferencesManager

        remote_content_search: PreferencesManagerRemoteContent;
        remoteContentSearch: PreferencesManagerRemoteContent;
        always_search: string[];
        alwaysSearch: string[];
        home_lens_priority: string[];
        homeLensPriority: string[];
        home_lens_default_view: string[];
        homeLensDefaultView: string[];
        disabled_scopes: string[];
        disabledScopes: string[];

        // Owm methods of Unity-7.0.PreferencesManager

        static get_default(): PreferencesManager;

        // Owm methods of Unity-7.0.PreferencesManager

        get_remote_content_search(): PreferencesManagerRemoteContent;
        set_remote_content_search(value: PreferencesManagerRemoteContent): void;
        get_always_search(): string[];
        set_always_search(value: string[]): void;
        get_home_lens_priority(): string[];
        set_home_lens_priority(value: string[]): void;
        get_home_lens_default_view(): string[];
        set_home_lens_default_view(value: string[]): void;
        get_disabled_scopes(): string[];
        set_disabled_scopes(value: string[]): void;
    }

    module DeprecatedScopeSearch {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        // Constructor properties interface
    }

    class DeprecatedScopeSearch extends ScopeSearchBase {
        // Own properties of Unity-7.0.DeprecatedScopeSearch

        channel_id: string;
        channelId: string;
        readonly search_string: string;
        readonly searchString: string;
        readonly search_type: SearchType;
        readonly searchType: SearchType;
        hints: GLib.HashTable<string, GLib.Variant>;
        results_model: Dee.SerializableModel;
        resultsModel: Dee.SerializableModel;
        owner: DeprecatedScopeBase;

        // Owm methods of Unity-7.0.DeprecatedScopeSearch

        set_reply_hint(key: string, variant: GLib.Variant): void;
        get_filter(filter_id: string): Filter;
        equals(other: DeprecatedScopeSearch): boolean;
        get_channel_id(): string;
        get_search_string(): string;
        get_search_type(): SearchType;
        get_hints(): GLib.HashTable<string, GLib.Variant>;
        get_results_model(): Dee.SerializableModel;
        get_owner(): DeprecatedScopeBase;
    }

    module AggregatedScopeSearch {
        // Signal callback interfaces

        interface TransactionComplete {
            (origin_scope_id: string): void;
        }

        interface CategoryOrderChanged {
            (category_indices: number[]): void;
        }

        // Constructor properties interface
    }

    class AggregatedScopeSearch extends DeprecatedScopeSearch {
        // Constructors of Unity-7.0.AggregatedScopeSearch

        static ['new'](
            owner: AggregatorScope,
            channel_id: string,
            hints: GLib.HashTable<string, GLib.Variant>,
            results_model: Dee.SerializableModel,
        ): AggregatedScopeSearch;

        // Owm methods of Unity-7.0.AggregatedScopeSearch

        search_scope(
            scope_id: string,
            search_string: string,
            search_type: SearchType,
            hints: GLib.HashTable<string, GLib.Variant>,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        search_scope_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
        push_results(
            scope_id: string,
            results_model: Dee.SerializableModel,
            category_ids: string[],
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        push_results_finish(_res_: Gio.AsyncResult): void;
        push_filter_settings(filters: FilterSet): void;
    }

    module Preview {
        // Constructor properties interface
    }

    abstract class Preview extends AbstractPreview {
        // Own properties of Unity-7.0.Preview

        title: string;
        subtitle: string;
        description_markup: string;
        descriptionMarkup: string;
        image_source_uri: string;
        imageSourceUri: string;
        image: Gio.Icon;

        // Owm methods of Unity-7.0.Preview

        add_action(action: PreviewAction): void;
        add_info(info_hint: InfoHint): void;
        get_title(): string;
        set_title(value: string): void;
        get_subtitle(): string;
        set_subtitle(value: string): void;
        get_description_markup(): string;
        set_description_markup(value: string): void;
        get_image_source_uri(): string;
        set_image_source_uri(value: string): void;
        get_image(): Gio.Icon;
        set_image(value: Gio.Icon): void;
    }

    module PreviewAction {
        // Signal callback interfaces

        interface Activated {
            (uri: string): ActivationResponse;
        }

        // Constructor properties interface
    }

    class PreviewAction extends GObject.Object {
        // Own properties of Unity-7.0.PreviewAction

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

        // Constructors of Unity-7.0.PreviewAction

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        static with_layout_hint(
            id: string,
            display_name: string,
            icon_hint: Gio.Icon,
            layout: LayoutHint,
        ): PreviewAction;

        static with_uri(uri: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        // Owm methods of Unity-7.0.PreviewAction

        get_id(): string;
        get_display_name(): string;
        get_extra_text(): string;
        set_extra_text(value: string): void;
        get_icon_hint(): Gio.Icon;
        get_layout_hint(): LayoutHint;
        get_hints(): GLib.HashTable<string, GLib.Variant>;
    }

    module InfoHint {
        // Constructor properties interface
    }

    class InfoHint extends GObject.InitiallyUnowned {
        // Own properties of Unity-7.0.InfoHint

        id: string;
        display_name: string;
        displayName: string;
        icon_hint: Gio.Icon;
        iconHint: Gio.Icon;
        data: GLib.Variant;

        // Constructors of Unity-7.0.InfoHint

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, data: string): InfoHint;

        static with_variant(id: string, display_name: string, icon_hint: Gio.Icon, data: GLib.Variant): InfoHint;

        // Owm methods of Unity-7.0.InfoHint

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_data(): GLib.Variant;
    }

    module GenericPreview {
        // Constructor properties interface
    }

    class GenericPreview extends Preview {
        // Constructors of Unity-7.0.GenericPreview

        static ['new'](title: string, description: string, image: Gio.Icon): GenericPreview;
    }

    module ApplicationPreview {
        // Constructor properties interface
    }

    class ApplicationPreview extends Preview {
        // Own properties of Unity-7.0.ApplicationPreview

        app_icon: Gio.Icon;
        appIcon: Gio.Icon;
        license: string;
        copyright: string;
        last_update: string;
        lastUpdate: string;

        // Constructors of Unity-7.0.ApplicationPreview

        static ['new'](
            title: string,
            subtitle: string,
            description: string,
            icon: Gio.Icon,
            screenshot: Gio.Icon,
        ): ApplicationPreview;

        // Owm methods of Unity-7.0.ApplicationPreview

        set_rating(rating: number, num_ratings: number): void;
        get_app_icon(): Gio.Icon;
        set_app_icon(value: Gio.Icon): void;
        get_license(): string;
        set_license(value: string): void;
        get_copyright(): string;
        set_copyright(value: string): void;
        get_last_update(): string;
        set_last_update(value: string): void;
    }

    module MusicPreview {
        // Constructor properties interface
    }

    class MusicPreview extends Preview {
        // Constructors of Unity-7.0.MusicPreview

        static ['new'](title: string, subtitle: string, image: Gio.Icon): MusicPreview;

        // Owm methods of Unity-7.0.MusicPreview

        add_track(track: TrackMetadata): void;
    }

    module PaymentPreview {
        // Constructor properties interface
    }

    class PaymentPreview extends Preview {
        // Own properties of Unity-7.0.PaymentPreview

        header: string;
        email: string;
        payment_method: string;
        paymentMethod: string;
        purchase_prize: string;
        purchasePrize: string;
        purchase_type: string;
        purchaseType: string;
        preview_type: PaymentPreviewType;
        previewType: PaymentPreviewType;

        // Constructors of Unity-7.0.PaymentPreview

        static ['new'](title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_type(title: string, subtitle: string, image: Gio.Icon, type: PaymentPreviewType): PaymentPreview;

        static for_application(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_music(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_error(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        // Owm methods of Unity-7.0.PaymentPreview

        get_header(): string;
        set_header(value: string): void;
        get_email(): string;
        set_email(value: string): void;
        get_payment_method(): string;
        set_payment_method(value: string): void;
        get_purchase_prize(): string;
        set_purchase_prize(value: string): void;
        get_purchase_type(): string;
        set_purchase_type(value: string): void;
        get_preview_type(): PaymentPreviewType;
        set_preview_type(value: PaymentPreviewType): void;
    }

    module MoviePreview {
        // Constructor properties interface
    }

    class MoviePreview extends Preview {
        // Own properties of Unity-7.0.MoviePreview

        year: string;

        // Constructors of Unity-7.0.MoviePreview

        static ['new'](title: string, subtitle: string, description: string, image: Gio.Icon): MoviePreview;

        // Owm methods of Unity-7.0.MoviePreview

        set_rating(rating: number, num_ratings: number): void;
        get_year(): string;
        set_year(value: string): void;
    }

    module SocialPreview {
        // Constructor properties interface
    }

    class SocialPreview extends Preview {
        // Own properties of Unity-7.0.SocialPreview

        avatar: Gio.Icon;
        content: string;
        sender: string;

        // Constructors of Unity-7.0.SocialPreview

        static ['new'](sender: string, subtitle: string, content: string, avatar: Gio.Icon): SocialPreview;

        // Owm methods of Unity-7.0.SocialPreview

        add_comment(comment: SocialPreviewComment): void;
        get_avatar(): Gio.Icon;
        set_avatar(value: Gio.Icon): void;
        get_content(): string;
        set_content(value: string): void;
        get_sender(): string;
        set_sender(value: string): void;
    }

    module SocialPreviewComment {
        // Constructor properties interface
    }

    class SocialPreviewComment extends GObject.InitiallyUnowned {
        // Own properties of Unity-7.0.SocialPreviewComment

        id: string;
        name: string;
        text: string;
        time: string;

        // Constructors of Unity-7.0.SocialPreviewComment

        static ['new'](id: string, name: string, text: string, time: string): SocialPreviewComment;

        // Owm methods of Unity-7.0.SocialPreviewComment

        get_id(): string;
        get_name(): string;
        get_text(): string;
        get_time(): string;
    }

    module ActivationResponse {
        // Constructor properties interface
    }

    class ActivationResponse extends GObject.Object {
        // Own properties of Unity-7.0.ActivationResponse

        handled: HandledType;
        goto_uri: string;
        gotoUri: string;

        // Constructors of Unity-7.0.ActivationResponse

        static ['new'](handled: HandledType, goto_uri: string): ActivationResponse;

        static with_search(
            search_string: string,
            filter_set: FilterSet,
            search_metadata: SearchMetadata,
        ): ActivationResponse;

        static with_preview(preview: Preview): ActivationResponse;

        // Owm methods of Unity-7.0.ActivationResponse

        get_handled(): HandledType;
        get_goto_uri(): string;
        set_goto_uri(value: string): void;
    }

    module AggregatorActivation {
        // Constructor properties interface
    }

    class AggregatorActivation extends GObject.Object {
        // Own properties of Unity-7.0.AggregatorActivation

        channel_id: string;
        channelId: string;
        scope_id: string;
        scopeId: string;
        action_type: number;
        actionType: number;
        scope_result: ScopeResult;
        scopeResult: ScopeResult;
        hints: GLib.HashTable<string, GLib.Variant>;

        // Constructors of Unity-7.0.AggregatorActivation

        static ['new'](
            channel_id: string,
            scope_id: string,
            action_type: number,
            result: ScopeResult,
        ): AggregatorActivation;

        // Owm methods of Unity-7.0.AggregatorActivation

        get_channel_id(): string;
        set_channel_id(value: string): void;
        get_scope_id(): string;
        set_scope_id(value: string): void;
        get_action_type(): number;
        set_action_type(value: number): void;
        get_scope_result(): ScopeResult;
        set_scope_result(value: ScopeResult): void;
        get_hints(): GLib.HashTable<string, GLib.Variant>;
    }

    module FilterSet {
        // Constructor properties interface
    }

    class FilterSet extends GObject.Object {
        // Constructors of Unity-7.0.FilterSet

        static ['new'](): FilterSet;

        // Owm methods of Unity-7.0.FilterSet

        add(filter: Filter): void;
        get_filter_by_id(filter_id: string): Filter;
        get_filters(): Filter[];
    }

    module CategorySet {
        // Constructor properties interface
    }

    class CategorySet extends GObject.Object {
        // Constructors of Unity-7.0.CategorySet

        static ['new'](): CategorySet;

        // Owm methods of Unity-7.0.CategorySet

        add(category: Category): void;
        get_categories(): Category[];
    }

    module Schema {
        // Constructor properties interface
    }

    class Schema extends GObject.Object {
        // Constructors of Unity-7.0.Schema

        static ['new'](): Schema;

        // Owm methods of Unity-7.0.Schema

        add_field(name: string, schema: string, type: SchemaFieldType): void;
        get_fields(): SchemaFieldInfo[];
    }

    module Cancellable {
        // Constructor properties interface
    }

    abstract class Cancellable extends GObject.Object {
        // Owm methods of Unity-7.0.Cancellable

        static create(): Cancellable;

        // Owm methods of Unity-7.0.Cancellable

        cancel(): void;
        is_cancelled(): boolean;
        get_gcancellable(): Gio.Cancellable;
    }

    module ScopeSearchBase {
        // Constructor properties interface
    }

    abstract class ScopeSearchBase extends GObject.Object {
        // Owm methods of Unity-7.0.ScopeSearchBase

        run(): void;
        run_async(async_callback: ScopeSearchBaseCallback): void;
        set_search_context(ctx: SearchContext): void;
    }

    module ResultSet {
        // Constructor properties interface
    }

    abstract class ResultSet extends GObject.Object {
        // Own fields of Unity-7.0.ResultSet

        ttl: number;

        // Owm methods of Unity-7.0.ResultSet

        add_result(result: ScopeResult): void;
        add_result_from_variant(variant: GLib.Variant): void;
        flush(): void;
    }

    module AbstractPreview {
        // Constructor properties interface
    }

    abstract class AbstractPreview extends GObject.Object {
        // Owm methods of Unity-7.0.AbstractPreview

        serialize_as(serialization_type: SerializationType): Uint8Array;
    }

    module ResultPreviewer {
        // Constructor properties interface
    }

    abstract class ResultPreviewer extends GObject.Object {
        // Own fields of Unity-7.0.ResultPreviewer

        metadata: SearchMetadata;
        cancellable: Cancellable;

        // Owm methods of Unity-7.0.ResultPreviewer

        run(): AbstractPreview;
        run_async(async_callback: AbstractPreviewCallback): void;
        set_scope_result(scope_result: ScopeResult): void;
        set_search_metadata(search_metadata: SearchMetadata): void;
    }

    module SearchMetadata {
        // Constructor properties interface
    }

    class SearchMetadata extends GObject.Object {
        // Own properties of Unity-7.0.SearchMetadata

        readonly locale: string;
        readonly form_factor: string;
        readonly formFactor: string;
        readonly location: GeoCoordinate;

        // Constructors of Unity-7.0.SearchMetadata

        static ['new'](): SearchMetadata;

        // Owm methods of Unity-7.0.SearchMetadata

        static create(metadata: GLib.HashTable<string, GLib.Variant>): SearchMetadata;
        static create_from_variant(metadata: GLib.Variant): SearchMetadata;

        // Owm methods of Unity-7.0.SearchMetadata

        get_locale(): string;
        get_form_factor(): string;
        get_location(): GeoCoordinate;
    }

    module GeoCoordinate {
        // Constructor properties interface
    }

    class GeoCoordinate extends GObject.Object {
        // Own fields of Unity-7.0.GeoCoordinate

        latitude: number;
        longitude: number;
        altitude: number;

        // Constructors of Unity-7.0.GeoCoordinate

        static ['new'](latitude_: number, longitude_: number): GeoCoordinate;

        static with_altitude(latitude_: number, longitude_: number, altitude_: number): GeoCoordinate;

        // Owm methods of Unity-7.0.GeoCoordinate

        has_valid_altitude(): boolean;
    }

    module AbstractScope {
        // Signal callback interfaces

        interface ResultsInvalidatedInternal {
            (search_type: SearchType): void;
        }

        // Constructor properties interface
    }

    abstract class AbstractScope extends GObject.Object {
        // Owm methods of Unity-7.0.AbstractScope

        create_search_for_query(search_context: SearchContext): ScopeSearchBase;
        create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer;
        get_categories(): CategorySet;
        get_filters(): FilterSet;
        get_schema(): Schema;
        get_search_hint(): string;
        get_group_name(): string;
        get_unique_name(): string;
        activate(result: ScopeResult, metadata: SearchMetadata, action_id: string): ActivationResponse;
        normalize_search_query(search_query: string): string;
        results_invalidated(search_type: SearchType): void;
    }

    module ScopeDBusConnector {
        // Constructor properties interface
    }

    class ScopeDBusConnector extends GObject.Object {
        // Own properties of Unity-7.0.ScopeDBusConnector

        scope: AbstractScope;

        // Constructors of Unity-7.0.ScopeDBusConnector

        static ['new'](scope: AbstractScope): ScopeDBusConnector;

        // Owm methods of Unity-7.0.ScopeDBusConnector

        static run(): void;
        static quit(): void;

        // Owm methods of Unity-7.0.ScopeDBusConnector

        ['export'](): void;
        unexport(): void;
        get_scope(): AbstractScope;
    }

    module DeprecatedScopeBase {
        // Signal callback interfaces

        interface ActiveSourcesChanged {
            (active_ids: string[]): void;
        }

        // Constructor properties interface
    }

    abstract class DeprecatedScopeBase extends GObject.Object {
        // Own properties of Unity-7.0.DeprecatedScopeBase

        id: string;
        dbus_path: string;
        dbusPath: string;
        search_in_global: boolean;
        searchInGlobal: boolean;
        visible: boolean;
        is_master: boolean;
        isMaster: boolean;
        search_hint: string;
        searchHint: string;
        sources: OptionsFilter;
        categories: CategorySet;
        filters: FilterSet;
        schema: Schema;

        // Owm methods of Unity-7.0.DeprecatedScopeBase

        ['export'](): void;
        unexport(): void;
        get_id(): string;
        get_dbus_path(): string;
        get_search_in_global(): boolean;
        set_search_in_global(value: boolean): void;
        get_visible(): boolean;
        set_visible(value: boolean): void;
        get_is_master(): boolean;
        get_search_hint(): string;
        set_search_hint(value: string): void;
        get_sources(): OptionsFilter;
        get_categories(): CategorySet;
        set_categories(value: CategorySet): void;
        get_filters(): FilterSet;
        set_filters(value: FilterSet): void;
        get_schema(): Schema;
        set_schema(value: Schema): void;
    }

    module DeprecatedScope {
        // Signal callback interfaces

        interface ActivateUri {
            (uri: string): ActivationResponse;
        }

        interface PreviewUri {
            (uri: string): Preview;
        }

        interface GenerateSearchKey {
            (search: DeprecatedScopeSearch): string;
        }

        interface SearchChanged {
            (search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable): void;
        }

        // Constructor properties interface
    }

    class DeprecatedScope extends DeprecatedScopeBase {
        // Constructors of Unity-7.0.DeprecatedScope

        static ['new'](dbus_path_: string, id_: string): DeprecatedScope;

        // Owm methods of Unity-7.0.DeprecatedScope

        preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        preview_result_finish(_res_: Gio.AsyncResult): Preview;
        activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;
        queue_search_changed(search_type: SearchType): void;
    }

    module AggregatorScope {
        // Constructor properties interface
    }

    abstract class AggregatorScope extends DeprecatedScopeBase {
        // Own properties of Unity-7.0.AggregatorScope

        merge_mode: AggregatorScopeMergeMode;
        mergeMode: AggregatorScopeMergeMode;
        proxy_filter_hints: boolean;
        proxyFilterHints: boolean;
        automatic_flushing: boolean;
        automaticFlushing: boolean;

        // Owm methods of Unity-7.0.AggregatorScope

        category_index_for_scope_id(scope_id: string): number;
        add_sorter(category_index: number, field: string, flags: AggregatorScopeSortFlags): void;
        add_constraint(category_index: number, field: string): void;
        search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;
        search_finish(_res_: Gio.AsyncResult): void;
        activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;
        activate_finish(_res_: Gio.AsyncResult): ActivationResponse;
        get_merge_mode(): AggregatorScopeMergeMode;
        set_merge_mode(value: AggregatorScopeMergeMode): void;
        get_proxy_filter_hints(): boolean;
        set_proxy_filter_hints(value: boolean): void;
        get_automatic_flushing(): boolean;
        set_automatic_flushing(value: boolean): void;
    }

    module MasterScope {
        // Constructor properties interface
    }

    class MasterScope extends AggregatorScope {
        // Own properties of Unity-7.0.MasterScope

        no_content_hint: string;
        noContentHint: string;

        // Constructors of Unity-7.0.MasterScope

        static ['new'](dbus_path_: string, id_: string): MasterScope;

        // Owm methods of Unity-7.0.MasterScope

        get_no_content_hint(): string;
        set_no_content_hint(value: string): void;
    }

    module SimpleScope {
        // Constructor properties interface
    }

    class SimpleScope extends AbstractScope {
        // Own properties of Unity-7.0.SimpleScope

        filter_set: FilterSet;
        filterSet: FilterSet;
        category_set: CategorySet;
        categorySet: CategorySet;
        schema: Schema;
        search_hint: string;
        searchHint: string;
        group_name: string;
        groupName: string;
        unique_name: string;
        uniqueName: string;

        // Constructors of Unity-7.0.SimpleScope

        static ['new'](): SimpleScope;

        // Owm methods of Unity-7.0.SimpleScope

        set_search_func(func: SimpleScopeSearchRunFunc): void;
        set_search_async_func(func: SimpleScopeSearchRunAsyncFunc): void;
        set_activate_func(func: SimpleScopeActivateFunc): void;
        set_preview_func(func: SimpleScopePreviewRunFunc): void;
        set_preview_async_func(func: SimpleScopePreviewRunAsyncFunc): void;
        get_filter_set(): FilterSet;
        set_filter_set(value: FilterSet): void;
        get_category_set(): CategorySet;
        set_category_set(value: CategorySet): void;
        get_schema(): Schema;
        set_schema(value: Schema): void;
        get_search_hint(): string;
        set_search_hint(value: string): void;
        get_group_name(): string;
        set_group_name(value: string): void;
        get_unique_name(): string;
        set_unique_name(value: string): void;
    }

    module ScopeLoader {
        // Constructor properties interface
    }

    class ScopeLoader extends GObject.Object {
        // Constructors of Unity-7.0.ScopeLoader

        static ['new'](): ScopeLoader;

        // Owm methods of Unity-7.0.ScopeLoader

        get_scopes(module_name: string, module_type: string): AbstractScope[];
        export_scopes(scopes: AbstractScope[]): void;
        load_group(group_name: string): void;
        load_scope(scope_id: string): void;
        load_module(module: string, module_type: string): void;
    }

    module TrackMetadata {
        // Constructor properties interface
    }

    class TrackMetadata extends GObject.Object {
        // Own properties of Unity-7.0.TrackMetadata

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

        // Constructors of Unity-7.0.TrackMetadata

        static ['new'](): TrackMetadata;

        static full(
            uri: string,
            track_no: number,
            title: string,
            artist: string,
            album: string,
            length: number,
        ): TrackMetadata;

        // Owm methods of Unity-7.0.TrackMetadata

        get_uri(): string;
        set_uri(value: string): void;
        get_track_no(): number;
        set_track_no(value: number): void;
        get_artist(): string;
        set_artist(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_album(): string;
        set_album(value: string): void;
        get_length(): number;
        set_length(value: number): void;
        get_art_location(): Gio.File;
        set_art_location(value: Gio.File): void;
        get_art_icon(): Gio.Icon;
        set_art_icon(value: Gio.Icon): void;
    }

    module Playlist {
        // Constructor properties interface
    }

    class Playlist extends GObject.Object {
        // Own properties of Unity-7.0.Playlist

        id: string;
        name: string;
        icon: Gio.Icon;
        creation_date: GLib.DateTime;
        creationDate: GLib.DateTime;
        modification_date: GLib.DateTime;
        modificationDate: GLib.DateTime;
        last_play_date: GLib.DateTime;
        lastPlayDate: GLib.DateTime;

        // Constructors of Unity-7.0.Playlist

        static ['new'](id: string): Playlist;

        // Owm methods of Unity-7.0.Playlist

        get_id(): string;
        get_name(): string;
        set_name(value: string): void;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        get_creation_date(): GLib.DateTime;
        set_creation_date(value: GLib.DateTime): void;
        get_modification_date(): GLib.DateTime;
        set_modification_date(value: GLib.DateTime): void;
        get_last_play_date(): GLib.DateTime;
        set_last_play_date(value: GLib.DateTime): void;
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
        // Own properties of Unity-7.0.MusicPlayer

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

        // Constructors of Unity-7.0.MusicPlayer

        static ['new'](desktop: string): MusicPlayer;

        // Owm methods of Unity-7.0.MusicPlayer

        ['export'](): void;
        unexport(): void;
        add_playlist(p: Playlist): boolean;
        remove_playlist(p: Playlist): boolean;
        get_playlists(): Playlist[];
        edit_playlist_name(id: string, name: string): void;
        get_app_info(): Gio.AppInfo;
        get_desktop_file_name(): string;
        get_is_blacklisted(): boolean;
        set_is_blacklisted(value: boolean): void;
        get_title(): string;
        set_title(value: string): void;
        get_can_go_next(): boolean;
        set_can_go_next(value: boolean): void;
        get_can_go_previous(): boolean;
        set_can_go_previous(value: boolean): void;
        get_can_play(): boolean;
        set_can_play(value: boolean): void;
        get_can_pause(): boolean;
        set_can_pause(value: boolean): void;
        get_current_track(): TrackMetadata;
        set_current_track(value: TrackMetadata): void;
        get_playback_state(): PlaybackState;
        set_playback_state(value: PlaybackState): void;
        get_current_playlist(): Playlist;
        set_current_playlist(value: Playlist): void;
        get_track_menu(): Dbusmenu.Menuitem;
        set_track_menu(value: Dbusmenu.Menuitem): void;
        get_player_menu(): Dbusmenu.Menuitem;
        set_player_menu(value: Dbusmenu.Menuitem): void;
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

    class MetadataProviderClass {}

    class MetadataProviderPrivate {}

    class ProgressSourceProviderClass {}

    class ProgressSourceProviderPrivate {}

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

    class DeprecatedScopeSearchClass {}

    class DeprecatedScopeSearchPrivate {}

    class AggregatedScopeSearchClass {}

    class AggregatedScopeSearchPrivate {}

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

    class PaymentPreviewClass {}

    class PaymentPreviewPrivate {}

    class MoviePreviewClass {}

    class MoviePreviewPrivate {}

    class SocialPreviewClass {}

    class SocialPreviewPrivate {}

    class SocialPreviewCommentClass {}

    class SocialPreviewCommentPrivate {}

    class ActivationResponseClass {}

    class ActivationResponsePrivate {}

    class AggregatorActivationClass {}

    class AggregatorActivationPrivate {}

    class FilterSetClass {}

    class FilterSetPrivate {}

    class CategorySetClass {}

    class CategorySetPrivate {}

    class SchemaClass {}

    class SchemaPrivate {}

    class SchemaFieldInfo {
        // Own fields of Unity-7.0.SchemaFieldInfo

        name: string;
        schema: string;
        type: SchemaFieldType;
    }

    class CancellableClass {}

    class CancellablePrivate {}

    class ScopeSearchBaseClass {}

    class ScopeSearchBasePrivate {}

    class ResultSetClass {}

    class ResultSetPrivate {}

    class AbstractPreviewClass {}

    class AbstractPreviewPrivate {}

    class ResultPreviewerClass {}

    class ResultPreviewerPrivate {}

    class SearchMetadataClass {}

    class SearchMetadataPrivate {}

    class GeoCoordinateClass {}

    class GeoCoordinatePrivate {}

    class AbstractScopeClass {}

    class AbstractScopePrivate {}

    class ScopeDBusConnectorClass {}

    class ScopeDBusConnectorPrivate {}

    class DeprecatedScopeBaseClass {}

    class DeprecatedScopeBasePrivate {}

    class DeprecatedScopeClass {}

    class DeprecatedScopePrivate {}

    class AggregatorScopeClass {}

    class AggregatorScopePrivate {}

    class MasterScopeClass {}

    class MasterScopePrivate {}

    class SimpleScopeClass {}

    class SimpleScopePrivate {}

    class ScopeLoaderClass {}

    class ScopeLoaderPrivate {}

    class TrackMetadataClass {}

    class TrackMetadataPrivate {}

    class PlaylistClass {}

    class PlaylistPrivate {}

    class MusicPlayerClass {}

    class MusicPlayerPrivate {}

    class ScopeResult {
        // Own fields of Unity-7.0.ScopeResult

        uri: string;
        icon_hint: string;
        category: number;
        result_type: ResultType;
        mimetype: string;
        title: string;
        comment: string;
        dnd_uri: string;

        // Owm methods of Unity-7.0.ScopeResult

        static create(
            uri: string,
            icon_hint: string,
            category: number,
            result_type: ResultType,
            mimetype: string,
            title: string,
            comment: string,
            dnd_uri: string,
            metadata: GLib.HashTable<string, GLib.Variant>,
        ): ScopeResult;
        static create_from_variant(variant: GLib.Variant): ScopeResult;
    }

    class SearchContext {
        // Own fields of Unity-7.0.SearchContext

        search_query: string;
        search_type: SearchType;
        filter_state: FilterSet;
        search_metadata: SearchMetadata;
        result_set: ResultSet;
        cancellable: Cancellable;

        // Owm methods of Unity-7.0.SearchContext

        static create(
            search_query: string,
            search_type: SearchType,
            filter_state: FilterSet,
            metadata: GLib.HashTable<string, GLib.Variant>,
            result_set: ResultSet,
            cancellable: Cancellable,
        ): SearchContext;

        // Owm methods of Unity-7.0.SearchContext

        set_search_metadata(metadata: SearchMetadata): void;
    }

    class PlaylistDetails {
        // Own fields of Unity-7.0.PlaylistDetails

        id: GLib.ObjectPath;
        name: string;
        icon_name: string;
    }

    class ActivePlaylistContainer {
        // Own fields of Unity-7.0.ActivePlaylistContainer

        valid: boolean;
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
