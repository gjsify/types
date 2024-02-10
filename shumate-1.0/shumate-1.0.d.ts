/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shumate-1.0-ambient.d.ts';
import './shumate-1.0-import.d.ts';
/**
 * Shumate-1.0
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Shumate {
    /**
     * Error codes in the #SHUMATE_FILE_CACHE_ERROR domain.
     */
    class FileCacheError extends GLib.Error {
        // Own fields of Shumate-1.0.FileCacheError

        /**
         * An unspecified error occurred during the operation.
         */
        FAILED: number;

        // Constructors of Shumate-1.0.FileCacheError

        constructor(options: { message: string; code: number });

        // Owm methods of Shumate-1.0.FileCacheError

        /**
         * Gets the #ShumateFileCache error quark.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Projections supported by the library.
     */
    enum MapProjection {
        /**
         * Currently the only supported projection
         */
        MERCATOR,
    }
    /**
     * Tile loading state.
     */
    enum State {
        /**
         * Initial or undefined state
         */
        NONE,
        /**
         * Tile is loading
         */
        LOADING,
        /**
         * Tile is loaded but not yet displayed
         */
        LOADED,
        /**
         * Tile loading finished. Also used to inform map sources
         *     that tile loading has been cancelled.
         */
        DONE,
    }
    /**
     * Error codes that occurs while parsing the style in [class`VectorRenderer]`.
     */
    class StyleError extends GLib.Error {
        // Own fields of Shumate-1.0.StyleError

        /**
         * An unspecified error occurred during the operation.
         */
        FAILED: number;
        /**
         * A JSON node in the style has the wrong type (e.g. an object where there should be an array).
         */
        MALFORMED_STYLE: number;
        /**
         * An unsupported layer type was encountered.
         */
        UNSUPPORTED_LAYER: number;
        /**
         * An invalid or unrecognized expression was encountered.
         */
        INVALID_EXPRESSION: number;
        /**
         * Libshumate was compiled without vector tile support.
         */
        SUPPORT_OMITTED: number;
        /**
         * An unsupported style spec feature was encountered.
         */
        UNSUPPORTED: number;

        // Constructors of Shumate-1.0.StyleError

        constructor(options: { message: string; code: number });

        // Owm methods of Shumate-1.0.StyleError

        static quark(): GLib.Quark;
    }

    /**
     * Error codes in the #SHUMATE_TILE_DOWNLOADER_ERROR domain.
     */
    class TileDownloaderError extends GLib.Error {
        // Own fields of Shumate-1.0.TileDownloaderError

        /**
         * An unspecified error occurred during the operation.
         */
        FAILED: number;
        /**
         * An unsuccessful HTTP response was received from the server.
         */
        BAD_RESPONSE: number;
        /**
         * The server could not be reached.
         */
        COULD_NOT_CONNECT: number;
        /**
         * The provided URL isn't valid
         */
        MALFORMED_URL: number;
        /**
         * The tile source has been marked as offline.
         */
        OFFLINE: number;

        // Constructors of Shumate-1.0.TileDownloaderError

        constructor(options: { message: string; code: number });

        // Owm methods of Shumate-1.0.TileDownloaderError

        /**
         * Gets the #ShumateTileDownloader error quark.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Units used by the scale.
     */
    enum Unit {
        /**
         * Both metric and imperial units
         */
        BOTH,
        /**
         * Metric units (meters)
         */
        METRIC,
        /**
         * Imperial units (miles)
         */
        IMPERIAL,
    }
    /**
     * The major version of libshumate (1, if %SHUMATE_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * Maps for Free Relief
     */
    const MAP_SOURCE_MFF_RELIEF: string;
    /**
     * OpenStreetMap Cycle Map
     */
    const MAP_SOURCE_OSM_CYCLE_MAP: string;
    /**
     * OpenStreetMap Mapnik
     */
    const MAP_SOURCE_OSM_MAPNIK: string;
    /**
     * OpenStreetMap Transport Map
     */
    const MAP_SOURCE_OSM_TRANSPORT_MAP: string;
    /**
     * OpenWeatherMap clouds layer
     */
    const MAP_SOURCE_OWM_CLOUDS: string;
    /**
     * OpenWeatherMap precipitation
     */
    const MAP_SOURCE_OWM_PRECIPITATION: string;
    /**
     * OpenWeatherMap sea level pressure
     */
    const MAP_SOURCE_OWM_PRESSURE: string;
    /**
     * OpenWeatherMap temperature
     */
    const MAP_SOURCE_OWM_TEMPERATURE: string;
    /**
     * OpenWeatherMap wind
     */
    const MAP_SOURCE_OWM_WIND: string;
    /**
     * The maximal possible latitude value.
     */
    const MAX_LATITUDE: number;
    /**
     * The maximal possible longitude value.
     */
    const MAX_LONGITUDE: number;
    /**
     * The micro version of libshumate (3, if %SHUMATE_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * The minor version of libshumate (2, if %SHUMATE_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * The minimal possible latitude value.
     */
    const MIN_LATITUDE: number;
    /**
     * The minimal possible longitude value.
     */
    const MIN_LONGITUDE: number;
    /**
     * Gets the #ShumateFileCache error quark.
     * @returns a #GQuark
     */
    function file_cache_error_quark(): GLib.Quark;
    /**
     * Gets the user agent libshumate will use for all requests.
     *
     * This API is not thread-safe and should only be called from the main thread.
     * @returns the user agent
     */
    function get_user_agent(): string;
    /**
     * Sets the user agent that libshumate uses for all requests.
     *
     * This API is not thread-safe and should only be called from the main thread.
     * @param new_user_agent the new user agent, or %NULL to reset to the default
     */
    function set_user_agent(new_user_agent?: string | null): void;
    function style_error_quark(): GLib.Quark;
    /**
     * Gets the #ShumateTileDownloader error quark.
     * @returns a #GQuark
     */
    function tile_downloader_error_quark(): GLib.Quark;
    interface VectorSpriteFallbackFunc {
        (sprite_sheet: VectorSpriteSheet, name: string, scale: number): VectorSprite | null;
    }
    module Compass {
        // Constructor properties interface
    }

    /**
     * A widget displaying a compass.
     *
     * # CSS nodes
     *
     * ```
     * map-compass
     * ├── revealer
     * ├──── image
     * ```
     *
     * `ShumateCompass` uses a single CSS node with name map-compass. It also uses an
     * image named "map-compass".
     */
    class Compass extends Gtk.Widget {
        // Own properties of Shumate-1.0.Compass

        /**
         * The viewport to use.
         */
        viewport: Viewport;

        // Constructors of Shumate-1.0.Compass

        static ['new'](viewport?: Viewport | null): Compass;

        // Owm methods of Shumate-1.0.Compass

        /**
         * Gets the viewport used by the compass.
         * @returns The #ShumateViewport used by the compass
         */
        get_viewport(): Viewport | null;
        /**
         * Sets the compass viewport.
         * @param viewport a [class@Viewport]
         */
        set_viewport(viewport?: Viewport | null): void;
    }

    module Coordinate {
        // Constructor properties interface
    }

    /**
     * A simple object implementing [iface`Location]`.
     */
    class Coordinate extends GObject.InitiallyUnowned {
        // Constructors of Shumate-1.0.Coordinate

        static ['new'](): Coordinate;

        static new_full(latitude: number, longitude: number): Coordinate;
    }

    module DataSource {
        // Signal callback interfaces

        interface ReceivedData {
            (x: number, y: number, zoom_level: number, bytes: GLib.Bytes): void;
        }

        // Constructor properties interface
    }

    /**
     * The base class used to retrieve tiles as [struct`GLib`.Bytes].
     */
    abstract class DataSource extends GObject.Object {
        // Own properties of Shumate-1.0.DataSource

        /**
         * The maximum zoom level
         */
        max_zoom_level: number;
        /**
         * The maximum zoom level
         */
        maxZoomLevel: number;
        /**
         * The minimum zoom level
         */
        min_zoom_level: number;
        /**
         * The minimum zoom level
         */
        minZoomLevel: number;

        // Owm methods of Shumate-1.0.DataSource

        /**
         * Gets the data source's maximum zoom level.
         * @returns the maximum zoom level this data source supports
         */
        get_max_zoom_level(): number;
        /**
         * Gets the data source's minimum zoom level.
         * @returns the minimum zoom level this data source supports
         */
        get_min_zoom_level(): number;
        /**
         * Gets the data for the tile at the given coordinates.
         *
         * Some data sources may return data multiple times. For example,
         * [class`TileDownloader]` may return data from a cache, then return updated
         * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
         * each time data is received, then `callback` is called after the last update.
         * @param x the X coordinate to fetch
         * @param y the Y coordinate to fetch
         * @param zoom_level the Z coordinate to fetch
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        get_tile_data_async(
            x: number,
            y: number,
            zoom_level: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the final result of a request started with
         * shumate_data_source_get_tile_data_async().
         * @param result a #GAsyncResult provided to callback
         * @returns The requested data, or %NULL if an error occurred
         */
        get_tile_data_finish(result: Gio.AsyncResult): GLib.Bytes | null;
        /**
         * Sets the data source's maximum zoom level.
         * @param zoom_level the maximum zoom level
         */
        set_max_zoom_level(zoom_level: number): void;
        /**
         * Sets the data source's minimum zoom level.
         * @param zoom_level the minimum zoom level
         */
        set_min_zoom_level(zoom_level: number): void;
        /**
         * Begins a request for a tile.
         * @param x X coordinate to request
         * @param y Y coordinate to request
         * @param zoom_level zoom level to request
         * @param cancellable for cancelling the request
         * @returns a [class@DataSourceRequest] object for tracking the request.
         */
        start_request(
            x: number,
            y: number,
            zoom_level: number,
            cancellable?: Gio.Cancellable | null,
        ): DataSourceRequest;
    }

    module DataSourceRequest {
        // Constructor properties interface
    }

    /**
     * Represents a request to a [class`DataSource]` for a tile.
     *
     * Data sources can return a tile multiple times. For example, a
     * [class`TileDownloader]` may return cached data first, then later return data
     * from a network service when it arrives. This allows the map to be rendered
     * as quickly as possible without waiting for the network unnecessarily.
     *
     * Conventional async/finish method pairs don't support multiple returns.
     * Instead, [method`DataSource`.start_request] is available, which returns a
     * [class`DataSourceRequest]` whose properties, [property`DataSourceRequest:`data]
     * and [property`DataSourceRequest:`error], update as data becomes available.
     * The [signal`GObject`.Object::notify] signal can be used to watch for these
     * changes. When the request is done and no more data will be returned,
     * [property`DataSourceRequest:`completed] is set to %TRUE.
     *
     * [class`DataSource]` implementations can use a subclass of
     * [class`DataSourceRequest]`, but the base class should be sufficient in most
     * cases.
     */
    class DataSourceRequest extends GObject.Object {
        // Own properties of Shumate-1.0.DataSourceRequest

        /**
         * %TRUE if the request has been completed, otherwise %FALSE. A completed
         * request will not receive further updates to either
         * [property`DataSourceRequest:`data] or [property`DataSourceRequest:`error].
         */
        readonly completed: boolean;
        /**
         * The most recent data for the tile, if available. If an error is emitted,
         * this will be set to %NULL.
         */
        readonly data: GLib.Bytes;
        /**
         * The error that occurred during the request, if any.
         */
        readonly error: GLib.Error;
        /**
         * The X coordinate of the requested tile.
         */
        x: number;
        /**
         * The Y coordinate of the requested tile.
         */
        y: number;
        /**
         * The zoom level of the requested tile.
         */
        zoom_level: number;
        /**
         * The zoom level of the requested tile.
         */
        zoomLevel: number;

        // Constructors of Shumate-1.0.DataSourceRequest

        static ['new'](x: number, y: number, zoom_level: number): DataSourceRequest;

        // Owm methods of Shumate-1.0.DataSourceRequest

        /**
         * Marks the request as complete. No more data or errors may be emitted.
         *
         * This can only be called if data has been emitted. If there is no data,
         * use [method`DataSourceRequest`.emit_error] instead, which will automatically
         * complete the request.
         */
        complete(): void;
        /**
         * Emits tile data as a response to the request. This sets the
         * [property`DataSourceRequest:`data] property.
         *
         * If `complete` is %TRUE, then [property`DataSourceRequest:`completed] is set to
         * %TRUE as well.
         * @param data the data to emit
         * @param complete %TRUE to also complete the request, %FALSE otherwise
         */
        emit_data(data: GLib.Bytes, complete: boolean): void;
        /**
         * Emits a fatal error in response to the request. This completes the request,
         * so no more data or errors can be emitted after this. Non-fatal errors should
         * not be reported.
         *
         * If [property`DataSourceRequest:`data] was previously set, it will be cleared.
         * @param error an error
         */
        emit_error(error: GLib.Error): void;
        /**
         * Gets the latest data from the request.
         * @returns The latest data, if any.
         */
        get_data(): GLib.Bytes | null;
        /**
         * Gets the latest error from the request.
         * @returns The latest error, if any.
         */
        get_error(): GLib.Error | null;
        /**
         * Gets the X coordinate of the requested tile.
         * @returns the X coordinate
         */
        get_x(): number;
        /**
         * Gets the Y coordinate of the requested tile.
         * @returns the Y coordinate
         */
        get_y(): number;
        /**
         * Gets the zoom level of the requested tile.
         * @returns the zoom level
         */
        get_zoom_level(): number;
        /**
         * Gets whether the request has been completed. Completed requests will not
         * receive new data or errors.
         * @returns %TRUE if the request is completed, otherwise %FALSE
         */
        is_completed(): boolean;
    }

    module FileCache {
        // Constructor properties interface
    }

    /**
     * A cache that stores and retrieves tiles from the file system. It is mainly
     * used by [class`TileDownloader]`, but can also be used by custom data
     * sources.
     *
     * The cache will be filled up to a certain size limit. When this limit is
     * reached, the cache can be purged, and the tiles that are accessed least are
     * deleted.
     *
     * ## ETags
     *
     * The cache can optionally store an ETag string with each tile. This is
     * useful to avoid redownloading old tiles that haven't changed (for example,
     * using the HTTP If-None-Match header).
     */
    class FileCache extends GObject.Object {
        // Own properties of Shumate-1.0.FileCache

        /**
         * The directory where the tile database is stored.
         */
        cache_dir: string;
        /**
         * The directory where the tile database is stored.
         */
        cacheDir: string;
        /**
         * The key used to store and retrieve tiles from the cache. Different keys
         * can be used to store multiple tilesets in the same cache directory.
         */
        cache_key: string;
        /**
         * The key used to store and retrieve tiles from the cache. Different keys
         * can be used to store multiple tilesets in the same cache directory.
         */
        cacheKey: string;
        /**
         * The cache size limit in bytes.
         *
         * Note: this new value will not be applied until you call shumate_file_cache_purge()
         */
        size_limit: number;
        /**
         * The cache size limit in bytes.
         *
         * Note: this new value will not be applied until you call shumate_file_cache_purge()
         */
        sizeLimit: number;

        // Constructors of Shumate-1.0.FileCache

        static new_full(size_limit: number, cache_key: string, cache_dir?: string | null): FileCache;

        // Owm methods of Shumate-1.0.FileCache

        /**
         * Gets the directory where the cache database is stored.
         * @returns the directory
         */
        get_cache_dir(): string;
        /**
         * Gets the key used to store and retrieve tiles from the cache. Different keys
         * can be used to store multiple tilesets in the same cache directory.
         * @returns the cache key
         */
        get_cache_key(): string;
        /**
         * Gets the cache size limit in bytes.
         * @returns size limit
         */
        get_size_limit(): number;
        /**
         * Gets tile data from the cache, if it is available.
         * @param x the X coordinate of the tile
         * @param y the Y coordinate of the tile
         * @param zoom_level the zoom level of the tile
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        get_tile_async(
            x: number,
            y: number,
            zoom_level: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the tile data from a completed shumate_file_cache_get_tile_async()
         * operation.
         *
         * `modtime` will be set to the time the tile was added to the cache, or the
         * latest time it was confirmed to be up to date.
         *
         * `etag` will be set to the data's ETag, if present.
         * @param result a #GAsyncResult provided to callback
         * @returns a #GBytes containing the tile data, or %NULL if the tile was not in the cache or an error occurred
         */
        get_tile_finish(result: Gio.AsyncResult): GLib.Bytes;
        /**
         * Marks a tile in the cache as being up to date, without changing its data.
         *
         * For example, a network source might call this function when it gets an HTTP
         * 304 Not Modified response.
         * @param x the X coordinate of the tile
         * @param y the Y coordinate of the tile
         * @param zoom_level the zoom level of the tile
         */
        mark_up_to_date(x: number, y: number, zoom_level: number): void;
        /**
         * Removes less used tiles from the cache, if necessary, until it fits in
         * the size limit.
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        purge_cache_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the result of an async operation started using
         * shumate_file_cache_purge_cache_async().
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if any tiles were removed, otherwise %FALSE
         */
        purge_cache_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the cache size limit in bytes.
         * @param size_limit the cache limit in bytes
         */
        set_size_limit(size_limit: number): void;
        /**
         * Stores a tile in the cache.
         * @param x the X coordinate of the tile
         * @param y the Y coordinate of the tile
         * @param zoom_level the zoom level of the tile
         * @param bytes a #GBytes
         * @param etag an ETag string, or %NULL
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        store_tile_async(
            x: number,
            y: number,
            zoom_level: number,
            bytes: GLib.Bytes,
            etag?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the success value of a completed shumate_file_cache_store_tile_async()
         * operation.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        store_tile_finish(result: Gio.AsyncResult): boolean;
    }

    module Layer {
        // Constructor properties interface
    }

    /**
     * Every layer (overlay that moves together with the map) has to inherit this
     * class and implement its virtual methods.
     *
     * You can use the same layer to display many types of maps.  In Shumate they
     * are called map sources.  You can change the [property`MapLayer:`map-source]
     * property at any time to replace the current displayed map.
     */
    abstract class Layer extends Gtk.Widget {
        // Own properties of Shumate-1.0.Layer

        viewport: Viewport;

        // Owm methods of Shumate-1.0.Layer

        /**
         * Gets the #ShumateViewport used by this layer.
         * @returns The #ShumateViewport.
         */
        get_viewport(): Viewport;
    }

    module License {
        // Constructor properties interface
    }

    /**
     * A widget that displays license text.
     */
    class License extends Gtk.Widget {
        // Own properties of Shumate-1.0.License

        /**
         * Sets additional text to be displayed in the license area.  The map's
         * license will be added below it. Your text can have multiple lines, just use
         * "\n" in between.
         */
        extra_text: string;
        /**
         * Sets additional text to be displayed in the license area.  The map's
         * license will be added below it. Your text can have multiple lines, just use
         * "\n" in between.
         */
        extraText: string;
        /**
         * The license's horizontal alignment
         */
        xalign: number;

        // Constructors of Shumate-1.0.License

        static ['new'](): License;

        // Owm methods of Shumate-1.0.License

        append_map_source(map_source: MapSource): void;
        /**
         * Gets the additional license text.
         * @returns the additional license text
         */
        get_extra_text(): string;
        /**
         * Get the license's text horizontal alignment.
         * @returns the license's text horizontal alignment.
         */
        get_xalign(): number;
        prepend_map_source(map_source: MapSource): void;
        remove_map_source(map_source: MapSource): void;
        /**
         * Show the additional license text on the map view.  The text will preceed the
         * map's licence when displayed. Use "\n" to separate the lines.
         * @param text the additional license text
         */
        set_extra_text(text: string): void;
        /**
         * Set the license's text horizontal alignment.
         * @param xalign The license's text horizontal alignment
         */
        set_xalign(xalign: number): void;
    }

    module Map {
        // Signal callback interfaces

        interface AnimationCompleted {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The Map widget is a [class`Gtk`.Widget] that show and allows interaction with
     * the user.
     *
     * This is the base widget and doesn't have advanced features. You can check the
     * [class`Shumate`.SimpleMap] for a ready-to-use widget.
     *
     * By default, a [class`Shumate`.Viewport] is created and can be accessed with
     * [method`Shumate`.Map.get_viewport].
     *
     * Unless created with [ctor`Shumate`.Map.new_simple], the widget doesn't hold any
     * layer and won't show anything. A [class`Shumate`.Layer] can be added or removed
     * using the [method`Shumate`.Map.add_layer] or [method`Shumate`.Map.remove_layer]
     * methods.
     */
    class Map extends Gtk.Widget {
        // Own properties of Shumate-1.0.Map

        /**
         * Animate zoom change when zooming in/out.
         */
        animate_zoom: boolean;
        /**
         * Animate zoom change when zooming in/out.
         */
        animateZoom: boolean;
        /**
         * The duration of an animation when going to a location, in milliseconds.
         * A value of 0 means that the duration is calculated automatically for you.
         *
         * Please note that animation of #shumate_map_ensure_visible also
         * involves a 'go-to' animation.
         */
        go_to_duration: number;
        /**
         * The duration of an animation when going to a location, in milliseconds.
         * A value of 0 means that the duration is calculated automatically for you.
         *
         * Please note that animation of #shumate_map_ensure_visible also
         * involves a 'go-to' animation.
         */
        goToDuration: number;
        /**
         * The view's global state. Useful to inform using if the view is busy loading
         * tiles or not.
         */
        readonly state: State;
        /**
         * The viewport, which contains information about the center, rotation, zoom,
         * etc. of the map.
         */
        readonly viewport: Viewport;
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoom_on_double_click: boolean;
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoomOnDoubleClick: boolean;

        // Constructors of Shumate-1.0.Map

        static ['new'](): Map;

        static new_simple(): Map;

        // Owm methods of Shumate-1.0.Map

        /**
         * Adds a new layer to the view
         * @param layer a #ShumateLayer
         */
        add_layer(layer: Layer): void;
        /**
         * Centers the map on these coordinates.
         * @param latitude the longitude to center the map at
         * @param longitude the longitude to center the map at
         */
        center_on(latitude: number, longitude: number): void;
        /**
         * Checks whether the view animates zoom level changes.
         * @returns TRUE if the view animates zooms, FALSE otherwise.
         */
        get_animate_zoom(): boolean;
        /**
         * Get the 'go-to-duration' property.
         * @returns the animation duration when calling [method@Map.go_to],   in milliseconds.
         */
        get_go_to_duration(): number;
        /**
         * Gets the view's state.
         * @returns the state.
         */
        get_state(): State;
        /**
         * Get the #ShumateViewport used by this view.
         * @returns the #ShumateViewport
         */
        get_viewport(): Viewport;
        /**
         * Checks whether the view zooms on double click.
         * @returns TRUE if the view zooms on double click, FALSE otherwise.
         */
        get_zoom_on_double_click(): boolean;
        /**
         * Move from the current position to these coordinates. All tiles in the
         * intermediate view WILL be loaded!
         * @param latitude the longitude to center the map at
         * @param longitude the longitude to center the map at
         */
        go_to(latitude: number, longitude: number): void;
        /**
         * Move from the current position to these coordinates and zoom to the given
         * zoom level. All tiles in the intermediate view WILL be loaded!
         * @param latitude the longitude to center the map at
         * @param longitude the longitude to center the map at
         * @param zoom_level the zoom level to end at
         */
        go_to_full(latitude: number, longitude: number, zoom_level: number): void;
        /**
         * Move from the current position to these coordinates and zoom to the given
         * zoom level. The given duration is used instead of the map's default [property`Map:`go-to-duration].
         * All tiles in the intermediate view WILL be loaded!
         * @param latitude the longitude to center the map at
         * @param longitude the longitude to center the map at
         * @param zoom_level the zoom level to end at
         * @param duration_ms animation duration in milliseconds
         */
        go_to_full_with_duration(latitude: number, longitude: number, zoom_level: number, duration_ms: number): void;
        /**
         * Adds `layer` to `self` above `next_sibling` or, if `next_sibling` is %NULL, at
         * the bottom of the layer list.
         * @param layer a #ShumateLayer
         * @param next_sibling a #ShumateLayer that is a child of @self, or %NULL
         */
        insert_layer_above(layer: Layer, next_sibling?: Layer | null): void;
        /**
         * Adds `layer` to `self` behind `next_sibling` or, if `next_sibling` is %NULL, at
         * the top of the layer list.
         * @param layer a #ShumateLayer
         * @param next_sibling a #ShumateLayer that is a child of @self, or %NULL
         */
        insert_layer_behind(layer: Layer, next_sibling?: Layer | null): void;
        /**
         * Removes the given layer from the view
         * @param layer a #ShumateLayer
         */
        remove_layer(layer: Layer): void;
        /**
         * Should the view animate zoom level changes.
         * @param value a #gboolean
         */
        set_animate_zoom(value: boolean): void;
        /**
         * Set the duration of the transition of [method`Map`.go_to].
         * @param duration the animation duration, in milliseconds
         */
        set_go_to_duration(duration: number): void;
        /**
         * Changes the currently used map source. #g_object_unref() will be called on
         * the previous one.
         *
         * As a side effect, changing the primary map source will also clear all
         * secondary map sources.
         * @param map_source a #ShumateMapSource
         */
        set_map_source(map_source: MapSource): void;
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         * @param value a #gboolean
         */
        set_zoom_on_double_click(value: boolean): void;
        /**
         * Stop the go to animation.  The view will stay where it was when the
         * animation was stopped.
         */
        stop_go_to(): void;
        /**
         * Zooms the map in. If [property`Map:`animate-zoom] is `TRUE`, the change will be animated.
         */
        zoom_in(): void;
        /**
         * Zooms the map out. If [property`Map:`animate-zoom] is `TRUE`, the change will be animated.
         */
        zoom_out(): void;
    }

    module MapLayer {
        // Signal callback interfaces

        interface SymbolClicked {
            (event: SymbolEvent): void;
        }

        // Constructor properties interface
    }

    /**
     * A [class`Shumate`.Layer] implementation that fetches tiles from a [class`Shumate`.MapSource]
     * and draws them as a grid.
     */
    class MapLayer extends Layer {
        // Own properties of Shumate-1.0.MapLayer

        map_source: MapSource;
        mapSource: MapSource;

        // Constructors of Shumate-1.0.MapLayer

        static ['new'](map_source: MapSource, viewport: Viewport): MapLayer;
    }

    module MapSource {
        // Constructor properties interface
    }

    /**
     * The base class for all map sources. Map sources fill [class`Tile]` objects
     * with images from various sources: a web API, for example, or a test pattern
     * generated on demand.
     *
     * The most common map source is [class`RasterRenderer]`, which fetches tiles
     * using a [class`TileDownloader]`.
     */
    abstract class MapSource extends GObject.Object {
        // Own properties of Shumate-1.0.MapSource

        /**
         * The id of the map source
         */
        id: string;
        /**
         * The usage license of the map source
         */
        license: string;
        /**
         * The usage license's uri for more information
         */
        license_uri: string;
        /**
         * The usage license's uri for more information
         */
        licenseUri: string;
        /**
         * The maximum zoom level
         */
        max_zoom_level: number;
        /**
         * The maximum zoom level
         */
        maxZoomLevel: number;
        /**
         * The minimum zoom level
         */
        min_zoom_level: number;
        /**
         * The minimum zoom level
         */
        minZoomLevel: number;
        /**
         * The name of the map source
         */
        name: string;
        /**
         * The map projection of the map source
         */
        projection: MapProjection;
        /**
         * The tile size of the map source
         */
        tile_size: number;
        /**
         * The tile size of the map source
         */
        tileSize: number;

        // Owm methods of Shumate-1.0.MapSource

        /**
         * Asynchronous version of shumate_map_source_fill_tile().
         * @param tile a #ShumateTile
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to execute upon completion
         */
        fill_tile_async(
            tile: Tile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the success value of a completed shumate_map_source_fill_tile_async()
         * operation.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if the tile was filled with valid data, otherwise %FALSE
         */
        fill_tile_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets the number of tiles in a column at this zoom level for this map
         * source.
         * @param zoom_level the zoom level
         * @returns the number of tiles in a column
         */
        get_column_count(zoom_level: number): number;
        /**
         * Gets map source's id.
         * @returns the map source's id.
         */
        get_id(): string;
        /**
         * Gets the latitude corresponding to this y position in the map source's
         * projection.
         * @param zoom_level the zoom level
         * @param y a y position
         * @returns the latitude
         */
        get_latitude(zoom_level: number, y: number): number;
        /**
         * Gets map source's license.
         * @returns the map source's license.
         */
        get_license(): string;
        /**
         * Gets map source's license URI.
         * @returns the map source's license URI.
         */
        get_license_uri(): string;
        /**
         * Gets the longitude corresponding to this x position in the map source's
         * projection.
         * @param zoom_level the zoom level
         * @param x a x position
         * @returns the longitude
         */
        get_longitude(zoom_level: number, x: number): number;
        /**
         * Gets map source's maximum zoom level.
         * @returns the maximum zoom level this map source supports
         */
        get_max_zoom_level(): number;
        /**
         * Gets meters per pixel at the position on the map using this map source's projection.
         * @param zoom_level the zoom level
         * @param latitude a latitude
         * @param longitude a longitude
         * @returns the meters per pixel
         */
        get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number;
        /**
         * Gets map source's minimum zoom level.
         * @returns the miminum zoom level this map source supports
         */
        get_min_zoom_level(): number;
        /**
         * Gets map source's name.
         * @returns the map source's name.
         */
        get_name(): string;
        /**
         * Gets map source's projection.
         * @returns the map source's projection.
         */
        get_projection(): MapProjection;
        /**
         * Gets the number of tiles in a row at this zoom level for this map source.
         * @param zoom_level the zoom level
         * @returns the number of tiles in a row
         */
        get_row_count(zoom_level: number): number;
        /**
         * Gets map source's tile size.
         * @returns the tile's size (width and height) in pixels for this map source
         */
        get_tile_size(): number;
        /**
         * Gets the apparent size of the map tiles at the given fractional zoom level.
         *
         * As the map is zoomed in, a tile gets bigger and bigger until, at the next
         * integer zoom level, it "splits" into four tiles at the next zoom level.
         * Thus, the size increase follows an exponential curve, base 2.
         * @param zoom_level a zoom level
         * @returns the tile's size (width and height) in pixels for this map source at this zoom level
         */
        get_tile_size_at_zoom(zoom_level: number): number;
        /**
         * Gets the x position on the map using this map source's projection.
         * (0, 0) is located at the top left.
         * @param zoom_level the zoom level
         * @param longitude a longitude
         * @returns the x position
         */
        get_x(zoom_level: number, longitude: number): number;
        /**
         * Gets the y position on the map using this map source's projection.
         * (0, 0) is located at the top left.
         * @param zoom_level the zoom level
         * @param latitude a latitude
         * @returns the y position
         */
        get_y(zoom_level: number, latitude: number): number;
        /**
         * Sets the map source's id.
         * @param id an id
         */
        set_id(id: string): void;
        /**
         * Sets the map source's license.
         * @param license the licence
         */
        set_license(license: string): void;
        /**
         * Sets the map source's license URI.
         * @param license_uri the licence URI
         */
        set_license_uri(license_uri: string): void;
        /**
         * Sets the map source's maximum zoom level.
         * @param zoom_level the maximum zoom level
         */
        set_max_zoom_level(zoom_level: number): void;
        /**
         * Sets the map source's minimal zoom level.
         * @param zoom_level the minimal zoom level
         */
        set_min_zoom_level(zoom_level: number): void;
        /**
         * Sets the map source's name.
         * @param name a name
         */
        set_name(name: string): void;
        /**
         * Sets the map source's projection.
         * @param projection a #ShumateMapProjection
         */
        set_projection(projection: MapProjection): void;
        /**
         * Sets the map source's tile size.
         * @param tile_size the tile size
         */
        set_tile_size(tile_size: number): void;
    }

    module MapSourceRegistry {
        // Constructor properties interface
    }

    /**
     * This object allows you to hold [class`MapSource]` instances, you can access a
     * default set of sources with [method`MapSourceRegistry`.populate_defaults].
     *
     * It conveniently implements [iface`Gio`.ListModel] to easily integrate with it.
     */
    class MapSourceRegistry<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Constructors of Shumate-1.0.MapSourceRegistry

        static ['new'](): MapSourceRegistry;

        static new_with_defaults(): MapSourceRegistry;

        // Owm methods of Shumate-1.0.MapSourceRegistry

        /**
         * Adds the #ShumateMapSource to the #ShumateMapSourceRegistry
         * @param map_source a #ShumateMapSource
         */
        add(map_source: MapSource): void;
        /**
         * Find the #ShumateMapSource with the corresponding id
         * @param id the id of the #ShumateMapSource
         * @returns the #ShumateMapSource or %NULL if no map source has been found
         */
        get_by_id(id: string): MapSource | null;
        /**
         * Populates the #ShumateMapSourceRegistry with a default set of sources.
         */
        populate_defaults(): void;
        /**
         * Removes the corresponding #ShumateMapSource from the registry.
         * If the source doesn't exist in the registry, this function does nothing.
         * @param id a #ShumateMapSource id
         */
        remove(id: string): void;
    }

    module Marker {
        // Constructor properties interface
    }

    /**
     * Markers represent points of interest on a map. Markers need to be
     * placed on a layer (a [class`MarkerLayer]`). Layers have to be added to a
     * [class`Map]` for the markers to show on the map.
     *
     * A marker is nothing more than a regular [class`Gtk`.Widget]. You can draw on
     * it what ever you want. Set the marker's position on the map using
     * [method`Location`.set_location].
     *
     * This is a base class of all markers. A typical usage of a marker is for
     * instance to add a [class`Gtk`.Image] with a pin image and add the
     * [class`Gtk`.GestureClick] controller to listen to click events and show
     * a [class`Gtk`.Popover] with the description of the marker.
     */
    class Marker extends Gtk.Widget {
        // Own properties of Shumate-1.0.Marker

        /**
         * The child widget of the marker
         */
        child: Gtk.Widget;
        /**
         * The selectable state of the marker
         */
        selectable: boolean;

        // Constructors of Shumate-1.0.Marker

        static ['new'](): Marker;

        // Owm methods of Shumate-1.0.Marker

        animate_in(): void;
        animate_in_with_delay(delay: number): void;
        animate_out(): void;
        animate_out_with_delay(delay: number): void;
        /**
         * Retrieves the current child of `marker`.
         * @returns a #GtkWidget.
         */
        get_child(): Gtk.Widget | null;
        get_draggable(): boolean;
        /**
         * Checks whether the marker is selectable.
         * @returns the selectable or not state of the marker.
         */
        get_selectable(): boolean;
        /**
         * Checks whether the marker is selected.
         * @returns %TRUE if the marker is selected, otherwise %FALSE
         */
        is_selected(): boolean;
        /**
         * Sets the child widget of `marker`.
         * @param child a #GtkWidget
         */
        set_child(child?: Gtk.Widget | null): void;
        set_draggable(value: boolean): void;
        /**
         * Sets the marker as selectable or not.
         * @param value the selectable state
         */
        set_selectable(value: boolean): void;
    }

    module MarkerLayer {
        // Signal callback interfaces

        interface MarkerSelected {
            (marker: Marker): void;
        }

        interface MarkerUnselected {
            (marker: Marker): void;
        }

        // Constructor properties interface
    }

    /**
     * Displays markers on the map. It is responsible for positioning markers
     * correctly, marker selections and group marker operations.
     */
    class MarkerLayer extends Layer {
        // Own properties of Shumate-1.0.MarkerLayer

        /**
         * Determines the type of selection that will be performed.
         */
        selection_mode: Gtk.SelectionMode;
        /**
         * Determines the type of selection that will be performed.
         */
        selectionMode: Gtk.SelectionMode;

        // Constructors of Shumate-1.0.MarkerLayer

        static ['new'](viewport: Viewport): MarkerLayer;

        static new_full(viewport: Viewport, mode: Gtk.SelectionMode): MarkerLayer;

        // Owm methods of Shumate-1.0.MarkerLayer

        /**
         * Adds the marker to the layer.
         * @param marker a [class@Marker]
         */
        add_marker(marker: Marker): void;
        /**
         * Gets a copy of the list of all markers inserted into the layer. You should
         * free the list but not its contents.
         * @returns the list
         */
        get_markers(): Marker[];
        /**
         * Gets a list of selected markers in the layer.
         * @returns the list
         */
        get_selected(): Marker[];
        /**
         * Gets the selection mode of the layer.
         * @returns the selection mode of the layer.
         */
        get_selection_mode(): Gtk.SelectionMode;
        /**
         * Removes all markers from the layer.
         */
        remove_all(): void;
        /**
         * Removes the marker from the layer.
         * @param marker a [class@Marker]
         */
        remove_marker(marker: Marker): void;
        /**
         * Selects all selectable markers in the layer.
         */
        select_all_markers(): void;
        /**
         * Selects a marker in this layer.
         *
         * If [class`MarkerLayer]`:selection-mode is %GTK_SELECTION_SINGLE or
         * %GTK_SELECTION_BROWSE, all other markers will be unselected. If the mode is
         * %GTK_SELECTION_NONE or `marker` is not selectable, nothing will happen.
         * @param marker a [class@Marker] that is a child of @self
         * @returns %TRUE if the marker is now selected, otherwise %FALSE
         */
        select_marker(marker: Marker): boolean;
        /**
         * Sets the selection mode of the layer.
         *
         * NOTE: changing selection mode to %GTK_SELECTION_NONE, %GTK_SELECTION_SINGLE
         * or %GTK_SELECTION_BROWSE will clear all previously selected markers.
         * @param mode a [enum@Gtk.SelectionMode] value
         */
        set_selection_mode(mode: Gtk.SelectionMode): void;
        /**
         * Unselects all markers in the layer.
         */
        unselect_all_markers(): void;
        /**
         * Unselects a marker in this layer.
         *
         * This works even if [class`MarkerLayer]`:selection-mode is
         * %GTK_SELECTION_BROWSE. Browse mode only prevents user interaction, not the
         * program, from unselecting a marker.
         * @param marker a [class@Marker] that is a child of @self
         */
        unselect_marker(marker: Marker): void;
    }

    module PathLayer {
        // Constructor properties interface
    }

    /**
     * A layer displaying line path between inserted [iface`Location]` objects
     *
     * This layer shows a connection between inserted objects implementing the
     * [iface`Location]` interface. This means that both [class`Marker]`
     * objects and [class`Coordinate]` objects can be inserted into the layer.
     * Of course, custom objects implementing the [iface`Location]` interface
     * can be used as well.
     */
    class PathLayer extends Layer {
        // Own properties of Shumate-1.0.PathLayer

        /**
         * The shape is a closed path
         */
        closed: boolean;
        /**
         * The shape should be filled
         */
        fill: boolean;
        /**
         * The path's fill color
         */
        fill_color: Gdk.RGBA;
        /**
         * The path's fill color
         */
        fillColor: Gdk.RGBA;
        /**
         * The path's outline color
         */
        outline_color: Gdk.RGBA;
        /**
         * The path's outline color
         */
        outlineColor: Gdk.RGBA;
        /**
         * The path's outline width (in pixels)
         */
        outline_width: number;
        /**
         * The path's outline width (in pixels)
         */
        outlineWidth: number;
        /**
         * The shape should be stroked
         */
        stroke: boolean;
        /**
         * The path's stroke color
         */
        stroke_color: Gdk.RGBA;
        /**
         * The path's stroke color
         */
        strokeColor: Gdk.RGBA;
        /**
         * The path's stroke width (in pixels)
         */
        stroke_width: number;
        /**
         * The path's stroke width (in pixels)
         */
        strokeWidth: number;

        // Constructors of Shumate-1.0.PathLayer

        static ['new'](viewport: Viewport): PathLayer;

        // Owm methods of Shumate-1.0.PathLayer

        /**
         * Adds a [iface`Location]` object to the layer.
         * The node is prepended to the list.
         * @param location a [iface@Location]
         */
        add_node(location: Location): void;
        /**
         * Gets information whether the path is closed.
         * @returns %TRUE when the path is closed, %FALSE otherwise
         */
        get_closed(): boolean;
        /**
         * Returns the list of dash segment lengths.
         * @returns the list
         */
        get_dash(): number[];
        /**
         * Checks whether the path is filled.
         * @returns %TRUE if the path is filled, %FALSE otherwise.
         */
        get_fill(): boolean;
        /**
         * Gets the path's fill color.
         * @returns the path's fill color.
         */
        get_fill_color(): Gdk.RGBA;
        /**
         * Gets a copy of the list of all [iface`Location]` objects inserted into the layer. You should
         * free the list but not its contents.
         * @returns the list
         */
        get_nodes(): Location[];
        /**
         * Gets the path's outline color.
         * @returns the path's outline color.
         */
        get_outline_color(): Gdk.RGBA;
        /**
         * Gets the width of the outline.
         * @returns the width of the outline
         */
        get_outline_width(): number;
        /**
         * Checks whether the path is stroked.
         * @returns %TRUE if the path is stroked, %FALSE otherwise.
         */
        get_stroke(): boolean;
        /**
         * Gets the path's stroke color.
         * @returns the path's stroke color.
         */
        get_stroke_color(): Gdk.RGBA;
        /**
         * Gets the width of the stroke.
         * @returns the width of the stroke
         */
        get_stroke_width(): number;
        /**
         * Inserts a [iface`Location]` object to the specified position.
         * @param location a [iface@Location]
         * @param position position in the list where the [iface@Location] object should be inserted
         */
        insert_node(location: Location, position: number): void;
        /**
         * Removes all [iface`Location]` objects from the layer.
         */
        remove_all(): void;
        /**
         * Removes the [iface`Location]` object from the layer.
         * @param location a [iface@Location]
         */
        remove_node(location: Location): void;
        /**
         * Makes the path closed.
         * @param value %TRUE to make the path closed
         */
        set_closed(value: boolean): void;
        /**
         * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
         * method supports only integer values for segment lengths. The values have to be
         * passed inside the data pointer of the list (using the %GUINT_TO_POINTER conversion)
         *
         * Pass %NULL to use solid line.
         * @param dash_pattern list of integer values representing lengths     of dashes/spaces (see cairo documentation of cairo_set_dash())
         */
        set_dash(dash_pattern: number[]): void;
        /**
         * Sets the path to be filled
         * @param value if the path is filled
         */
        set_fill(value: boolean): void;
        /**
         * Set the path's fill color.
         * @param color The path's fill color or %NULL to reset to the         default color. The color parameter is copied.
         */
        set_fill_color(color?: Gdk.RGBA | null): void;
        /**
         * Set the path's outline color.
         * @param color The path's outline color or %NULL to reset to the         default color. The color parameter is copied.
         */
        set_outline_color(color?: Gdk.RGBA | null): void;
        /**
         * Sets the width of the outline
         * @param value the width of the outline (in pixels)
         */
        set_outline_width(value: number): void;
        /**
         * Sets the path to be stroked
         * @param value if the path is stroked
         */
        set_stroke(value: boolean): void;
        /**
         * Set the path's stroke color.
         * @param color The path's stroke color or %NULL to reset to the         default color. The color parameter is copied.
         */
        set_stroke_color(color?: Gdk.RGBA | null): void;
        /**
         * Sets the width of the stroke
         * @param value the width of the stroke (in pixels)
         */
        set_stroke_width(value: number): void;
    }

    module Point {
        // Constructor properties interface
    }

    /**
     * A simple variant of [class`Marker]` showing the location of the point as a
     * circle on the map.
     */
    class Point extends Marker {
        // Constructors of Shumate-1.0.Point

        static ['new'](): Point;
    }

    module RasterRenderer {
        // Constructor properties interface
    }

    class RasterRenderer extends MapSource {
        // Own properties of Shumate-1.0.RasterRenderer

        /**
         * The data source that provides image tiles to display. In most cases,
         * a [class`TileDownloader]` is sufficient.
         */
        data_source: DataSource;
        /**
         * The data source that provides image tiles to display. In most cases,
         * a [class`TileDownloader]` is sufficient.
         */
        dataSource: DataSource;

        // Constructors of Shumate-1.0.RasterRenderer

        static ['new'](data_source: DataSource): RasterRenderer;

        static new_from_url(url_template: string): RasterRenderer;

        static new_full(
            id: string,
            name: string,
            license: string,
            license_uri: string,
            min_zoom: number,
            max_zoom: number,
            tile_size: number,
            projection: MapProjection,
            data_source: DataSource,
        ): RasterRenderer;

        static new_full_from_url(
            id: string,
            name: string,
            license: string,
            license_uri: string,
            min_zoom: number,
            max_zoom: number,
            tile_size: number,
            projection: MapProjection,
            url_template: string,
        ): RasterRenderer;
    }

    module Scale {
        // Constructor properties interface
    }

    /**
     * A widget displaying a scale.
     *
     * # CSS nodes
     *
     * ```
     * map-scale
     * ├── label[.metric][.imperial]
     * ```
     *
     * `ShumateScale` uses a single CSS node with name map-scale, it has up to two
     * childs different labels.
     */
    class Scale extends Gtk.Widget {
        // Own properties of Shumate-1.0.Scale

        /**
         * The size of the map scale on screen in pixels.
         */
        max_width: number;
        /**
         * The size of the map scale on screen in pixels.
         */
        maxWidth: number;
        /**
         * The scale's units.
         */
        unit: Unit;
        /**
         * The viewport to use.
         */
        viewport: Viewport;

        // Constructors of Shumate-1.0.Scale

        static ['new'](viewport?: Viewport | null): Scale;

        // Owm methods of Shumate-1.0.Scale

        /**
         * Gets the maximum scale width.
         * @returns The maximum scale width in pixels.
         */
        get_max_width(): number;
        /**
         * Gets the unit used by the scale.
         * @returns The unit used by the scale
         */
        get_unit(): Unit;
        /**
         * Gets the viewport used by the scale.
         * @returns The #ShumateViewport used by the scale
         */
        get_viewport(): Viewport | null;
        /**
         * Sets the maximum width of the scale on the screen in pixels
         * @param value the number of pixels
         */
        set_max_width(value: number): void;
        /**
         * Sets the scale unit.
         * @param unit a #ShumateUnit
         */
        set_unit(unit: Unit): void;
        /**
         * Sets the scale viewport.
         * @param viewport a #ShumateViewport
         */
        set_viewport(viewport?: Viewport | null): void;
    }

    module SimpleMap {
        // Signal callback interfaces

        interface SymbolClicked {
            (event: SymbolEvent): void;
        }

        // Constructor properties interface
    }

    /**
     * A ready-to-use map [class`Gtk`.Widget].If you want to use your own implementation,
     * you can look at the [class`Shumate`.Map] widget.
     *
     * The simple map contains a zoom widget, a [class`Shumate`.License] at the bottom,
     * a [class`Shumate`.Scale] and a [class`Shumate`.Compass].
     */
    class SimpleMap extends Gtk.Widget {
        // Own properties of Shumate-1.0.SimpleMap

        readonly compass: Compass;
        readonly license: License;
        readonly map: Map;
        map_source: MapSource;
        mapSource: MapSource;
        readonly scale: Scale;
        show_zoom_buttons: boolean;
        showZoomButtons: boolean;
        readonly viewport: Viewport;

        // Constructors of Shumate-1.0.SimpleMap

        static ['new'](): SimpleMap;

        // Owm methods of Shumate-1.0.SimpleMap

        /**
         * Adds a map layer as an overlay on top of the base map.
         * @param layer a [class@Layer] to add
         */
        add_overlay_layer(layer: Layer): void;
        /**
         * Gets the compass widget for the map.
         * @returns a [class@Compass]
         */
        get_compass(): Compass;
        /**
         * Gets the license widget for the map.
         * @returns a [class@License]
         */
        get_license(): License;
        /**
         * Gets the [class`SimpleMap]`'s underlying [class`Map]`.
         * @returns a [class@Map]
         */
        get_map(): Map;
        /**
         * Gets the map source for the current base layer.
         * @returns a [class@MapSource]
         */
        get_map_source(): MapSource;
        /**
         * Gets the scale widget for the map.
         * @returns a [class@Scale]
         */
        get_scale(): Scale;
        /**
         * Gets whether or not the zoom buttons are shown.
         * @returns %TRUE if the zoom buttons are visible, otherwise %FALSE
         */
        get_show_zoom_buttons(): boolean;
        /**
         * Gets the map's viewport, needed for constructing map layers that will be added
         * to it.
         * @returns a [class@Viewport]
         */
        get_viewport(): Viewport;
        insert_overlay_layer(layer: Layer, idx: number): void;
        /**
         * Removes a layer from the map.
         * @param layer a [class@Layer] that was added to the map previously
         */
        remove_overlay_layer(layer: Layer): void;
        /**
         * Sets the source for the base map.
         * @param map_source a [class@MapSource]
         */
        set_map_source(map_source?: MapSource | null): void;
        /**
         * Sets whether or not the zoom buttons are shown.
         * @param show_zoom_buttons %TRUE to show the zoom buttons, %FALSE to hide them
         */
        set_show_zoom_buttons(show_zoom_buttons: boolean): void;
    }

    module SymbolEvent {
        // Constructor properties interface
    }

    /**
     * An object containing the details of a map feature that has been clicked.
     * It is the argument of the [signal`MapLayer:`:symbol-clicked] and
     * [signal`SimpleMap:`:symbol-clicked] signals.
     *
     * When vector maps are rendered, they may contain labels and icons. When one
     * of these symbols is clicked, these signals are emitted to give the
     * application access to the original location and details of the map feature.
     *
     * [class`SymbolEvent]` implements [iface`Location]` so you can get the latitude
     * and longitude of the feature that was clicked.
     */
    class SymbolEvent extends GObject.Object {
        // Own properties of Shumate-1.0.SymbolEvent

        /**
         * The ID of the feature that this event pertains to, as it was given in the
         * data source.
         */
        readonly feature_id: string;
        /**
         * The ID of the feature that this event pertains to, as it was given in the
         * data source.
         */
        readonly featureId: string;
        /**
         * The ID of the style layer of the symbol that this event pertains to.
         */
        readonly layer: string;
        /**
         * The ID of the source layer of the symbol that this event pertains to.
         */
        readonly source_layer: string;
        /**
         * The ID of the source layer of the symbol that this event pertains to.
         */
        readonly sourceLayer: string;

        // Owm methods of Shumate-1.0.SymbolEvent

        /**
         * Gets the feature ID as specified in the data source. The meaning of the
         * ID, if any, is up to the source.
         *
         * Feature IDs in Mapbox Vector Tile format are integers, but they are
         * formatted as a string here for futureproofing.
         * @returns the feature ID
         */
        get_feature_id(): string;
        /**
         * Gets a list of the keys of the source feature's tags.
         * @returns a list of the tag keys
         */
        get_keys(): string[];
        /**
         * Gets the name of the layer the clicked symbol is in, as named in the vector
         * stylesheet.
         *
         * Note that this is distinct from the name of the layer in the vector tile
         * schema. Some styles have multiple symbol layers derived from the same
         * data source layer.
         * @returns the layer name
         */
        get_layer(): string;
        /**
         * Gets the name of the source layer the clicked feature is in,
         * as named in the vector tile schema.
         * @returns the layer name
         */
        get_source_layer(): string;
        /**
         * Gets a tag from the source feature.
         *
         * The available tags depend on the vector tile schema and the source layer.
         * Check the documentation for the tiles you're using to see what information
         * is available.
         * @param tag_name the tag to get
         * @returns the tag value, formatted as a string
         */
        get_tag(tag_name: string): string;
    }

    module Tile {
        // Constructor properties interface
    }

    /**
     * An object that represents map tiles. Tiles are loaded by a [class`MapSource]`.
     */
    class Tile extends GObject.Object {
        // Own properties of Shumate-1.0.Tile

        /**
         * Specifies whether the tile should fade in when loading
         */
        fade_in: boolean;
        /**
         * Specifies whether the tile should fade in when loading
         */
        fadeIn: boolean;
        /**
         * The [iface`Gdk`.Paintable] backing the tile
         */
        paintable: Gdk.Paintable;
        /**
         * The scale factor of the widget the tile will be displayed in.
         */
        scale_factor: number;
        /**
         * The scale factor of the widget the tile will be displayed in.
         */
        scaleFactor: number;
        /**
         * The size of the tile in pixels
         */
        size: number;
        /**
         * The state of the tile
         */
        state: State;
        /**
         * The x position of the tile
         */
        x: number;
        /**
         * The y position of the tile
         */
        y: number;
        /**
         * The zoom level of the tile
         */
        zoom_level: number;
        /**
         * The zoom level of the tile
         */
        zoomLevel: number;

        // Constructors of Shumate-1.0.Tile

        static ['new'](): Tile;

        static new_full(x: number, y: number, size: number, zoom_level: number): Tile;

        // Owm methods of Shumate-1.0.Tile

        get_etag(): string;
        /**
         * Checks whether the tile should fade in.
         * @returns the return value determines whether the tile should fade in when loading.
         */
        get_fade_in(): boolean;
        get_modified_time(): GLib.DateTime;
        /**
         * Get the [iface`Gdk`.Paintable] representing this tile.
         * @returns A [iface@Gdk.Paintable]
         */
        get_paintable(): Gdk.Paintable | null;
        /**
         * Gets the scale factor of the tile.
         * @returns the scale factor
         */
        get_scale_factor(): number;
        /**
         * Gets the tile's size.
         * @returns the tile's size in pixels
         */
        get_size(): number;
        /**
         * Gets the current state of tile loading.
         * @returns the tile's #ShumateState
         */
        get_state(): State;
        /**
         * Gets the tile's x position.
         * @returns the tile's x position
         */
        get_x(): number;
        /**
         * Gets the tile's y position.
         * @returns the tile's y position
         */
        get_y(): number;
        /**
         * Gets the tile's zoom level.
         * @returns the tile's zoom level
         */
        get_zoom_level(): number;
        set_etag(etag: string): void;
        /**
         * Sets the flag determining whether the tile should fade in when loading
         * @param fade_in determines whether the tile should fade in when loading
         */
        set_fade_in(fade_in: boolean): void;
        set_modified_time(modified_time: GLib.DateTime): void;
        /**
         * Sets the [iface`Gdk`.Paintable] representing this tile.
         * @param paintable a [iface@Gdk.Paintable]
         */
        set_paintable(paintable: Gdk.Paintable): void;
        /**
         * Sets the scale factor of the tile.
         * @param scale_factor the scale factor
         */
        set_scale_factor(scale_factor: number): void;
        /**
         * Sets the tile's size
         * @param size the size in pixels
         */
        set_size(size: number): void;
        /**
         * Sets the tile's #ShumateState
         * @param state a #ShumateState
         */
        set_state(state: State): void;
        /**
         * Sets the tile's x position
         * @param x the position
         */
        set_x(x: number): void;
        /**
         * Sets the tile's y position
         * @param y the position
         */
        set_y(y: number): void;
        /**
         * Sets the tile's zoom level
         * @param zoom_level the zoom level
         */
        set_zoom_level(zoom_level: number): void;
    }

    module TileDownloader {
        // Constructor properties interface
    }

    /**
     * A [class`DataSource]` that asynchronously downloads tiles from an online
     * service using a given template.
     *
     * It contains an internal [class`FileCache]` to cache the tiles on the system.
     */
    class TileDownloader extends DataSource {
        // Own properties of Shumate-1.0.TileDownloader

        /**
         * A template for construting the URL to download a tile from.
         *
         * The template has the following replacements:
         * - "{x}": The X coordinate of the tile
         * - "{y}": The Y coordinate of the tile
         * - "{z}": The zoom level of the tile
         * - "{tmsy}": The inverted Y coordinate (i.e. tile numbering starts with 0 at
         * the bottom, rather than top, of the map)
         */
        url_template: string;
        /**
         * A template for construting the URL to download a tile from.
         *
         * The template has the following replacements:
         * - "{x}": The X coordinate of the tile
         * - "{y}": The Y coordinate of the tile
         * - "{z}": The zoom level of the tile
         * - "{tmsy}": The inverted Y coordinate (i.e. tile numbering starts with 0 at
         * the bottom, rather than top, of the map)
         */
        urlTemplate: string;

        // Constructors of Shumate-1.0.TileDownloader

        static ['new'](url_template: string): TileDownloader;
    }

    module VectorRenderer {
        // Constructor properties interface
    }

    /**
     * A [class`MapSource]` that renders tiles from a given vector data source.
     */
    class VectorRenderer extends MapSource {
        // Own properties of Shumate-1.0.VectorRenderer

        /**
         * The sprite sheet used to render icons and textures.
         */
        sprite_sheet: VectorSpriteSheet;
        /**
         * The sprite sheet used to render icons and textures.
         */
        spriteSheet: VectorSpriteSheet;
        /**
         * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
         * format.
         *
         * Note that not all features of the specification are supported.
         */
        style_json: string;
        /**
         * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
         * format.
         *
         * Note that not all features of the specification are supported.
         */
        styleJson: string;

        // Constructors of Shumate-1.0.VectorRenderer

        static ['new'](id: string, style_json: string): VectorRenderer;

        // Owm methods of Shumate-1.0.VectorRenderer

        /**
         * Checks whether libshumate was compiled with vector tile support. If it was
         * not, vector renderers cannot be created or used.
         */
        static is_supported(): boolean;

        // Owm methods of Shumate-1.0.VectorRenderer

        /**
         * Gets the sprite sheet used to render icons and textures.
         * @returns the [class@VectorSpriteSheet]
         */
        get_sprite_sheet(): VectorSpriteSheet;
        /**
         * Sets the sprite sheet used to render icons and textures.
         * @param sprites a [class@VectorSpriteSheet]
         */
        set_sprite_sheet(sprites: VectorSpriteSheet): void;
        /**
         * Sets the sprite sheet used by the style JSON to render icons and textures.
         *
         * The existing [property`VectorRenderer:`sprite-sheet] property will be replaced
         * with a new instance of [class`VectorSpriteSheet]`.
         * @param sprites_pixbuf a [class@GdkPixbuf.Pixbuf]
         * @param sprites_json a JSON string
         * @returns whether the sprite sheet was loaded successfully
         */
        set_sprite_sheet_data(sprites_pixbuf: GdkPixbuf.Pixbuf, sprites_json: string): boolean;
    }

    module VectorSprite {
        // Constructor properties interface
    }

    /**
     * A sprite used to draw textures or icons.
     *
     * ## Symbolic icons
     *
     * If a sprite is created from a [iface`Gtk`.SymbolicPaintable] source, such
     * as a symbolic icon, then when the sprite is part of a symbol layer it
     * will be drawn using the icon-color property (or the text color, if the
     * sprite is part of a formatted string).
     */
    class VectorSprite extends GObject.Object {
        // Own properties of Shumate-1.0.VectorSprite

        /**
         * The height at which the sprite should be drawn, in pixels.
         */
        height: number;
        /**
         * The intended scale factor of the sprite.
         */
        scale_factor: number;
        /**
         * The intended scale factor of the sprite.
         */
        scaleFactor: number;
        /**
         * The [iface`Gdk`.Paintable] used to draw the sprite.
         */
        source_paintable: Gdk.Paintable;
        /**
         * The [iface`Gdk`.Paintable] used to draw the sprite.
         */
        sourcePaintable: Gdk.Paintable;
        /**
         * The area of the source rectangle to draw, or %NULL to use the entire paintable.
         */
        source_rect: Gdk.Rectangle;
        /**
         * The area of the source rectangle to draw, or %NULL to use the entire paintable.
         */
        sourceRect: Gdk.Rectangle;
        /**
         * The width at which the sprite should be drawn, in pixels.
         */
        width: number;

        // Constructors of Shumate-1.0.VectorSprite

        static ['new'](source_paintable: Gdk.Paintable): VectorSprite;

        static new_full(
            source_paintable: Gdk.Paintable,
            width: number,
            height: number,
            scale_factor: number,
            source_rect?: Gdk.Rectangle | null,
        ): VectorSprite;

        // Owm methods of Shumate-1.0.VectorSprite

        /**
         * Gets the height at which the sprite should be drawn.
         * @returns the sprite's height in pixels
         */
        get_height(): number;
        /**
         * Gets the intended scale factor of the sprite.
         * @returns the sprite's scale factor
         */
        get_scale_factor(): number;
        /**
         * Gets the source [iface`Gdk`.Paintable] used to draw the sprite.
         *
         * Note that [class`VectorSprite]` also implements [iface`Gdk`.Paintable].
         * In most cases, you should draw the sprite rather than the original paintable.
         * @returns the source paintable
         */
        get_source_paintable(): Gdk.Paintable;
        /**
         * Gets the source rectangle of the sprite.
         * @returns the sprite's source rectangle, or %NULL if the entire paintable is used
         */
        get_source_rect(): Gdk.Rectangle | null;
        /**
         * Gets the width at which the sprite should be drawn.
         * @returns the sprite's width in pixels
         */
        get_width(): number;
    }

    module VectorSpriteSheet {
        // Constructor properties interface
    }

    /**
     * A collection of [class`VectorSprite]`s.
     *
     * Sprites are used as icons in symbols or as the pattern for a fill layer.
     *
     * Most MapLibre stylesheets provide their spritesheet as a PNG image and a JSON
     * description of the sprites. This spritesheet can be added using
     * [method`VectorSpriteSheet`.add_page]. Sprites can also be added individually
     * using [method`VectorSpriteSheet`.add_sprite].
     *
     * Some map styles rely on application code to provide some or all of their
     * sprites. This is supported using a fallback function, which can be set using
     * [method`VectorSpriteSheet`.set_fallback]. This function can generate sprites
     * on demand. For example, it could load a symbolic icon from the [class`Gtk`.IconTheme]
     * or render a custom highway shield.
     *
     * ## HiDPI support
     *
     * Map styles should provide a double resolution spritesheet for high DPI
     * displays. That spritesheet can be added as a separate page.
     * The [class`VectorSpriteSheet]` will pick the best sprites for the display's
     * scale factor.
     *
     * If a fallback function is set, it receives the requested scale factor
     * as an argument. It should use this to generate the sprite at the correct size.
     * For example, if the scale factor is 2, the image should be twice as large
     * (but the *sprite's* width and height should be the same).
     *
     * ## Thread Safety
     *
     * [class`VectorSpriteSheet]` is thread safe.
     */
    class VectorSpriteSheet extends GObject.Object {
        // Constructors of Shumate-1.0.VectorSpriteSheet

        static ['new'](): VectorSpriteSheet;

        // Owm methods of Shumate-1.0.VectorSpriteSheet

        /**
         * Adds a page to the spritesheet.
         *
         * See &lt;https://maplibre.org/maplibre-gl-js-docs/style-spec/sprite/&gt; for
         * details about the spritesheet format. Most stylesheets provide these files
         * along with the main style JSON.
         *
         * Map styles should provide a double resolution spritesheet for high DPI
         * displays. That spritesheet should be added as its own page, with a
         * `default_scale` of 2.
         * @param texture a [class@Gdk.Texture]
         * @param json a JSON string
         * @param default_scale the default scale factor of the page
         * @returns %TRUE if the page was added successfully, %FALSE otherwise
         */
        add_page(texture: Gdk.Texture, json: string, default_scale: number): boolean;
        /**
         * Adds a sprite to the spritesheet.
         * @param name the name of the sprite
         * @param sprite a [class@VectorSprite]
         */
        add_sprite(name: string, sprite: VectorSprite): void;
        /**
         * Gets a sprite from the spritesheet.
         *
         * The returned sprite might not be at the requested scale factor if an exact
         * match is not found.
         * @param name an icon name
         * @param scale the scale factor of the icon
         * @returns a [class@VectorSprite], or %NULL if the icon does not exist.
         */
        get_sprite(name: string, scale: number): VectorSprite | null;
        /**
         * Sets a fallback function to generate sprites.
         *
         * The fallback function is called when a texture is not found in the sprite
         * sheet. It receives the icon name and scale factor, and should return a
         * [class`VectorSprite]`, or %NULL if the icon could not be generated.
         * It may be called in a different thread, and it may be called multiple times
         * for the same icon name.
         *
         * If a previous fallback function was set, it will be replaced and any sprites
         * it generated will be cleared.
         *
         * `fallback` may be %NULL to clear the fallback function.
         * @param fallback a [callback@ShumateVectorSpriteFallbackFunc] or %NULL
         */
        set_fallback(fallback?: VectorSpriteFallbackFunc | null): void;
    }

    module Viewport {
        // Constructor properties interface
    }

    /**
     * The object holding the coordinate, zoom-level, and rotation state of the current view.
     *
     * As the object implements [iface`Shumate`.Location], the latitude and longitude are
     * accessible via the interface methods.
     */
    class Viewport extends GObject.Object {
        // Own properties of Shumate-1.0.Viewport

        /**
         * The highest allowed level of zoom of the content.
         */
        max_zoom_level: number;
        /**
         * The highest allowed level of zoom of the content.
         */
        maxZoomLevel: number;
        /**
         * The lowest allowed level of zoom of the content.
         */
        min_zoom_level: number;
        /**
         * The lowest allowed level of zoom of the content.
         */
        minZoomLevel: number;
        /**
         * The reference #ShumateMapSource being displayed
         */
        reference_map_source: MapSource;
        /**
         * The reference #ShumateMapSource being displayed
         */
        referenceMapSource: MapSource;
        /**
         * The rotation of the map view, in radians clockwise from up being due north
         */
        rotation: number;
        /**
         * The level of zoom of the content.
         */
        zoom_level: number;
        /**
         * The level of zoom of the content.
         */
        zoomLevel: number;

        // Constructors of Shumate-1.0.Viewport

        static ['new'](): Viewport;

        // Owm methods of Shumate-1.0.Viewport

        /**
         * Get the maximal zoom level
         * @returns the maximal zoom level
         */
        get_max_zoom_level(): number;
        /**
         * Get the minimal zoom level
         * @returns the minimal zoom level
         */
        get_min_zoom_level(): number;
        /**
         * Get the reference map source
         * @returns the reference #ShumateMapSource or %NULL when none has been set.
         */
        get_reference_map_source(): MapSource | null;
        /**
         * Gets the current rotation
         * @returns the current rotation
         */
        get_rotation(): number;
        /**
         * Get the current zoom level
         * @returns the current zoom level
         */
        get_zoom_level(): number;
        /**
         * Gets the position on `widget` that correspond to the given latitude and
         * longitude.
         * @param widget a #GtkWidget that uses @self as viewport
         * @param latitude the latitude
         * @param longitude the longitude
         */
        location_to_widget_coords(widget: Gtk.Widget, latitude: number, longitude: number): void;
        /**
         * Set the maximal zoom level
         * @param max_zoom_level the maximal zoom level
         */
        set_max_zoom_level(max_zoom_level: number): void;
        /**
         * Set the minimal zoom level
         * @param min_zoom_level the minimal zoom level
         */
        set_min_zoom_level(min_zoom_level: number): void;
        /**
         * Set the reference map source
         * @param map_source a #ShumateMapSource or %NULL to set none.
         */
        set_reference_map_source(map_source?: MapSource | null): void;
        /**
         * Sets the rotation
         * @param rotation the rotation
         */
        set_rotation(rotation: number): void;
        /**
         * Set the zoom level
         * @param zoom_level the zoom level
         */
        set_zoom_level(zoom_level: number): void;
        /**
         * Gets the latitude and longitude corresponding to a position on `widget`.
         * @param widget a #GtkWidget that uses @self as viewport
         * @param x the x coordinate
         * @param y the y coordinate
         */
        widget_coords_to_location(widget: Gtk.Widget, x: number, y: number): void;
    }

    class CompassClass {}

    class CoordinateClass {}

    class DataSourceClass {}

    class DataSourceRequestClass {}

    class FileCacheClass {}

    class LayerClass {}

    class LicenseClass {}

    /**
     * An interface common to objects having latitude and longitude.
     */
    class LocationInterface {}

    class MapClass {}

    class MapLayerClass {}

    class MapSourceClass {}

    class MapSourceRegistryClass {}

    class MarkerClass {}

    class MarkerLayerClass {}

    class PathLayerClass {}

    class PointClass {}

    class RasterRendererClass {}

    class ScaleClass {}

    class SimpleMapClass {}

    class SymbolEventClass {}

    class TileClass {}

    class TileDownloaderClass {}

    class VectorRendererClass {}

    class VectorSpriteClass {}

    class VectorSpriteSheetClass {}

    class ViewportClass {}

    interface Location {
        // Own properties of Shumate-1.0.Location

        /**
         * The latitude coordonate in degrees
         */
        latitude: number;
        /**
         * The longitude coordonate in degrees
         */
        longitude: number;

        // Owm methods of Shumate-1.0.Location

        /**
         * Gets the latitude coordinate in degrees.
         * @returns the latitude coordinate in degrees.
         */
        get_latitude(): number;
        /**
         * Gets the longitude coordinate in degrees.
         * @returns the longitude coordinate in degrees.
         */
        get_longitude(): number;
        /**
         * Sets the coordinates of the location
         * @param latitude the latitude in degrees
         * @param longitude the longitude in degrees
         */
        set_location(latitude: number, longitude: number): void;

        // Own virtual methods of Shumate-1.0.Location

        /**
         * Gets the latitude coordinate in degrees.
         */
        vfunc_get_latitude(): number;
        /**
         * Gets the longitude coordinate in degrees.
         */
        vfunc_get_longitude(): number;
        /**
         * Sets the coordinates of the location
         * @param latitude the latitude in degrees
         * @param longitude the longitude in degrees
         */
        vfunc_set_location(latitude: number, longitude: number): void;
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

export default Shumate;
// END
