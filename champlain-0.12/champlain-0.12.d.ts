/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './champlain-0.12-ambient.d.ts';
import './champlain-0.12-import.d.ts';
/**
 * Champlain-0.12
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Champlain {
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
     * Selection mode
     */
    enum SelectionMode {
        /**
         * No marker can be selected.
         */
        NONE,
        /**
         * Only one marker can be selected.
         */
        SINGLE,
        /**
         * Multiple marker can be selected.
         */
        MULTIPLE,
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
     * Units used by the scale.
     */
    enum Unit {
        /**
         * kilometers
         */
        KM,
        /**
         * miles
         */
        MILES,
    }
    /**
     * The major version of libchamplain (1, if %CHAMPLAIN_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    const MAP_SOURCE_MEMPHIS_LOCAL: string;
    const MAP_SOURCE_MEMPHIS_NETWORK: string;
    /**
     * Maps for Free Relief
     */
    const MAP_SOURCE_MFF_RELIEF: string;
    /**
     * OpenAerialMap
     */
    const MAP_SOURCE_OAM: string;
    /**
     * Mapquest Open Aerial
     */
    const MAP_SOURCE_OSM_AERIAL_MAP: string;
    /**
     * OpenStreetMap Cycle Map
     */
    const MAP_SOURCE_OSM_CYCLE_MAP: string;
    /**
     * OpenStreetMap Mapnik
     */
    const MAP_SOURCE_OSM_MAPNIK: string;
    const MAP_SOURCE_OSM_MAPQUEST: string;
    /**
     * OpenStreetMap Osmarender
     */
    const MAP_SOURCE_OSM_OSMARENDER: string;
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
    const MAX_LATITUDE: number;
    const MAX_LONGITUDE: number;
    /**
     * The micro version of libchamplain (3, if %CHAMPLAIN_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * The minor version of libchamplain (2, if %CHAMPLAIN_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    const MIN_LATITUDE: number;
    const MIN_LONGITUDE: number;
    /**
     * The full version of libchamplain, like 1.2.3
     */
    const VERSION: number;
    /**
     * Numerically encoded version of libchamplain, like 0x010203
     */
    const VERSION_HEX: number;
    /**
     * The full version of libchamplain, in string form (suited for
     * string concatenation)
     */
    const VERSION_S: string;
    module Adjustment {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Class for handling an interval between to values. The contents of
     * the #ChamplainAdjustment are private and should be accessed using the
     * public API.
     */
    class Adjustment extends GObject.Object {
        // Own properties of Champlain-0.12.Adjustment

        lower: number;
        step_increment: number;
        stepIncrement: number;
        upper: number;
        value: number;

        // Constructors of Champlain-0.12.Adjustment

        static ['new'](value: number, lower: number, upper: number, step_increment: number): Adjustment;

        // Owm methods of Champlain-0.12.Adjustment

        clamp(interpolate: boolean, n_frames: number, fps: number): boolean;
        get_value(): number;
        get_values(value: number, lower: number, upper: number, step_increment: number): void;
        interpolate(value: number, n_frames: number, fps: number): void;
        interpolate_stop(): void;
        set_value(value: number): void;
        set_values(value: number, lower: number, upper: number, step_increment: number): void;
    }

    module Coordinate {
        // Constructor properties interface
    }

    /**
     * The #ChamplainCoordinate structure contains only private data
     * and should be accessed using the provided API
     */
    class Coordinate extends GObject.InitiallyUnowned {
        // Constructors of Champlain-0.12.Coordinate

        static ['new'](): Coordinate;

        static new_full(latitude: number, longitude: number): Coordinate;
    }

    module CustomMarker {
        // Constructor properties interface
    }

    /**
     * The #ChamplainCustomMarker structure contains only private data
     * and should be accessed using the provided API
     */
    class CustomMarker extends Marker {
        // Constructors of Champlain-0.12.CustomMarker

        static ['new'](): CustomMarker;
    }

    module ErrorTileRenderer {
        // Constructor properties interface
    }

    /**
     * The #ChamplainErrorTileRenderer structure contains only private data
     * and should be accessed using the provided API
     */
    class ErrorTileRenderer extends Renderer {
        // Own properties of Champlain-0.12.ErrorTileRenderer

        /**
         * The size of the rendered tile.
         */
        tile_size: number;
        /**
         * The size of the rendered tile.
         */
        tileSize: number;

        // Constructors of Champlain-0.12.ErrorTileRenderer

        static ['new'](tile_size: number): ErrorTileRenderer;

        // Owm methods of Champlain-0.12.ErrorTileRenderer

        /**
         * Gets the size of the rendered error tiles.
         * @returns the size of the rendered error tiles
         */
        get_tile_size(): number;
        /**
         * Sets the size of the rendered error tile.
         * @param size the size of the rendered error tiles
         */
        set_tile_size(size: number): void;
    }

    module FileCache {
        // Constructor properties interface
    }

    /**
     * The #ChamplainFileCache structure contains only private data
     * and should be accessed using the provided API
     */
    class FileCache extends TileCache {
        // Own properties of Champlain-0.12.FileCache

        /**
         * The directory where the tile database is stored.
         */
        cache_dir: string;
        /**
         * The directory where the tile database is stored.
         */
        cacheDir: string;
        /**
         * The cache size limit in bytes.
         *
         * Note: this new value will not be applied until you call champlain_file_cache_purge()
         */
        size_limit: number;
        /**
         * The cache size limit in bytes.
         *
         * Note: this new value will not be applied until you call champlain_file_cache_purge()
         */
        sizeLimit: number;

        // Constructors of Champlain-0.12.FileCache

        static new_full(size_limit: number, cache_dir: string | null, renderer: Renderer): FileCache;

        // Owm methods of Champlain-0.12.FileCache

        /**
         * Gets the directory where the cache database is stored.
         * @returns the directory
         */
        get_cache_dir(): string;
        /**
         * Gets the cache size limit in bytes.
         * @returns size limit
         */
        get_size_limit(): number;
        /**
         * Purge the cache from the less popular tiles until cache's size limit is reached.
         */
        purge(): void;
        /**
         * Purge the cache from the less popular tiles until cache's size limit is reached.
         * This is a non blocking call as the purge will happen when the application is idle
         */
        purge_on_idle(): void;
        /**
         * Sets the cache size limit in bytes.
         * @param size_limit the cache limit in bytes
         */
        set_size_limit(size_limit: number): void;
    }

    module FileTileSource {
        // Constructor properties interface
    }

    /**
     * The #ChamplainFileTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    class FileTileSource extends TileSource {
        // Constructors of Champlain-0.12.FileTileSource

        static new_full(
            id: string,
            name: string,
            license: string,
            license_uri: string,
            min_zoom: number,
            max_zoom: number,
            tile_size: number,
            projection: MapProjection,
            renderer: Renderer,
        ): FileTileSource;

        // Owm methods of Champlain-0.12.FileTileSource

        /**
         * Loads the OpenStreetMap XML file at the given path.
         * @param map_path a path to a map data file
         */
        load_map_data(map_path: string): void;
    }

    module ImageRenderer {
        // Constructor properties interface
    }

    /**
     * The #ChamplainImageRenderer structure contains only private data
     * and should be accessed using the provided API
     */
    class ImageRenderer extends Renderer {
        // Constructors of Champlain-0.12.ImageRenderer

        static ['new'](): ImageRenderer;
    }

    module KineticScrollView {
        // Signal callback interfaces

        interface PanningCompleted {
            (): void;
        }

        // Constructor properties interface
    }

    class KineticScrollView extends Clutter.Actor {
        // Own properties of Champlain-0.12.KineticScrollView

        decel_rate: number;
        decelRate: number;
        mode: boolean;
        motion_buffer: number;
        motionBuffer: number;

        // Constructors of Champlain-0.12.KineticScrollView

        static ['new'](kinetic: boolean, viewport: Viewport): KineticScrollView;

        // Owm methods of Champlain-0.12.KineticScrollView

        stop(): void;
    }

    module Label {
        // Constructor properties interface
    }

    /**
     * The #ChamplainLabel structure contains only private data
     * and should be accessed using the provided API
     */
    class Label extends Marker {
        // Own properties of Champlain-0.12.Label

        /**
         * The label's alignment
         */
        alignment: Pango.Alignment;
        /**
         * The label's color
         */
        color: Clutter.Color;
        /**
         * If the label has a background
         */
        draw_background: boolean;
        /**
         * If the label has a background
         */
        drawBackground: boolean;
        /**
         * If the label background has a shadow
         */
        draw_shadow: boolean;
        /**
         * If the label background has a shadow
         */
        drawShadow: boolean;
        /**
         * The label's ellipsize mode
         */
        ellipsize: Pango.EllipsizeMode;
        /**
         * The label's text font name
         */
        font_name: string;
        /**
         * The label's text font name
         */
        fontName: string;
        /**
         * The image of the label
         */
        image: Clutter.Actor;
        /**
         * If the label is in single line mode
         */
        single_line_mode: boolean;
        /**
         * If the label is in single line mode
         */
        singleLineMode: boolean;
        /**
         * The text of the label
         */
        text: string;
        /**
         * The label's text color
         */
        text_color: Clutter.Color;
        /**
         * The label's text color
         */
        textColor: Clutter.Color;
        /**
         * If the label's text uses markup
         */
        use_markup: boolean;
        /**
         * If the label's text uses markup
         */
        useMarkup: boolean;
        /**
         * If the label's text wrap is set
         */
        wrap: boolean;
        /**
         * The label's text wrap mode
         */
        wrap_mode: Pango.WrapMode;
        /**
         * The label's text wrap mode
         */
        wrapMode: Pango.WrapMode;

        // Constructors of Champlain-0.12.Label

        static ['new'](): Label;

        static new_from_file(filename: string): Label;

        static new_full(text: string, actor: Clutter.Actor): Label;

        static new_with_image(actor: Clutter.Actor): Label;

        static new_with_text(
            text: string,
            font?: string | null,
            text_color?: Clutter.Color | null,
            label_color?: Clutter.Color | null,
        ): Label;

        // Owm methods of Champlain-0.12.Label

        /**
         * Get the label's text alignment.
         * @returns the label's text alignment.
         */
        get_alignment(): Pango.Alignment;
        /**
         * Gets the label's text attributes.
         * @returns the label's text attributes.
         */
        get_attributes(): Pango.AttrList;
        /**
         * Gets the label's background color.
         * @returns the label's background color.
         */
        get_color(): Clutter.Color;
        /**
         * Checks whether the label has a background.
         * @returns if the label has a background.
         */
        get_draw_background(): boolean;
        /**
         * Checks whether the label's background has a shadow.
         * @returns if the label's background has a shadow.
         */
        get_draw_shadow(): boolean;
        /**
         * Gets the label's text ellipsize mode.
         * @returns the label's text ellipsize mode.
         */
        get_ellipsize(): Pango.EllipsizeMode;
        /**
         * Gets the label's font name.
         * @returns the label's font name.
         */
        get_font_name(): string;
        /**
         * Get the label's image.
         * @returns the label's image.
         */
        get_image(): Clutter.Actor;
        /**
         * Checks the label's single line mode.
         * @returns the label's text single line mode.
         */
        get_single_line_mode(): boolean;
        /**
         * Get the label's text.
         * @returns the label's text.
         */
        get_text(): string;
        /**
         * Gets the label's text color.
         * @returns the label's text color.
         */
        get_text_color(): Clutter.Color;
        /**
         * Check whether the label uses markup.
         * @returns if the label's text contains markup.
         */
        get_use_markup(): boolean;
        /**
         * Checks whether the label text wraps.
         * @returns if the label's text wraps.
         */
        get_wrap(): boolean;
        /**
         * Gets the label's text wrap mode.
         * @returns the label's text wrap mode.
         */
        get_wrap_mode(): Pango.WrapMode;
        /**
         * Sets the label's text alignment.
         * @param alignment The label's alignment
         */
        set_alignment(alignment: Pango.Alignment): void;
        /**
         * Sets the label's text attributes.
         * @param list The label's text attributes.
         */
        set_attributes(list: Pango.AttrList): void;
        /**
         * Sets the label's background color.
         * @param color The label's background color or NULL to reset the background to the         default color. The color parameter is copied.
         */
        set_color(color?: Clutter.Color | null): void;
        /**
         * Sets if the label has a background.
         * @param background value.
         */
        set_draw_background(background: boolean): void;
        /**
         * Sets if the label's background has a shadow.
         * @param shadow value.
         */
        set_draw_shadow(shadow: boolean): void;
        /**
         * Sets the label's text ellipsize mode.
         * @param mode The label's ellipsize mode.
         */
        set_ellipsize(mode: Pango.EllipsizeMode): void;
        /**
         * Sets the label's font name such as "Sans 12".
         * @param font_name The label's font name or NULL to reset the font to the default             value.
         */
        set_font_name(font_name?: string | null): void;
        /**
         * Sets the label's image.
         * @param image The image as a @ClutterActor or NULL to remove the current image.
         */
        set_image(image?: Clutter.Actor | null): void;
        /**
         * Sets if the label's text is on a single line.
         * @param mode The label's single line mode
         */
        set_single_line_mode(mode: boolean): void;
        /**
         * Sets the label's text.
         * @param text The new text of the label
         */
        set_text(text: string): void;
        /**
         * Sets the label's text color.
         * @param color The label's text color or NULL to reset the text to the default         color. The color parameter is copied.
         */
        set_text_color(color?: Clutter.Color | null): void;
        /**
         * Sets if the label's text uses markup.
         * @param use_markup The value
         */
        set_use_markup(use_markup: boolean): void;
        /**
         * Sets if the label's text wrap.
         * @param wrap The label's wrap.
         */
        set_wrap(wrap: boolean): void;
        /**
         * Sets the label's text wrap mode.
         * @param wrap_mode The label's wrap mode.
         */
        set_wrap_mode(wrap_mode: Pango.WrapMode): void;
    }

    module Layer {
        // Constructor properties interface
    }

    /**
     * The #ChamplainLayer structure contains only private data
     * and should be accessed using the provided API
     */
    abstract class Layer extends Clutter.Actor {
        // Owm methods of Champlain-0.12.Layer

        /**
         * Gets the bounding box occupied by the elements inside the layer.
         * @returns The bounding box.
         */
        get_bounding_box(): BoundingBox;
        /**
         * #ChamplainView calls this method to pass a reference to itself to the layer
         * when the layer is added to the view. When the layer is removed from the
         * view, it passes %NULL to the layer. Custom layers can implement this method
         * and perform the necessary initialization. This method should not be called
         * by user code.
         * @param view a #ChamplainView
         */
        set_view(view?: View | null): void;
    }

    module License {
        // Constructor properties interface
    }

    /**
     * The #ChamplainLicense structure contains only private data
     * and should be accessed using the provided API
     */
    class License extends Clutter.Actor {
        // Own properties of Champlain-0.12.License

        /**
         * The license's alignment
         */
        alignment: Pango.Alignment;
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

        // Constructors of Champlain-0.12.License

        static ['new'](): License;

        // Owm methods of Champlain-0.12.License

        /**
         * This method connects to the necessary signals of #ChamplainView to make the
         * license change automatically when the map source changes.
         * @param view a #ChamplainView
         */
        connect_view(view: View): void;
        /**
         * This method disconnects from the signals previously connected by champlain_license_connect_view().
         */
        disconnect_view(): void;
        /**
         * Get the license's text alignment.
         * @returns the license's text alignment.
         */
        get_alignment(): Pango.Alignment;
        /**
         * Gets the additional license text.
         * @returns the additional license text
         */
        get_extra_text(): string;
        /**
         * Set the license's text alignment.
         * @param alignment The license's text alignment
         */
        set_alignment(alignment: Pango.Alignment): void;
        /**
         * Show the additional license text on the map view.  The text will preceed the
         * map's licence when displayed. Use "\n" to separate the lines.
         * @param text the additional license text
         */
        set_extra_text(text: string): void;
    }

    module MapSource {
        // Constructor properties interface
    }

    /**
     * The #ChamplainMapSource structure contains only private data
     * and should be accessed using the provided API
     */
    abstract class MapSource extends GObject.InitiallyUnowned {
        // Own properties of Champlain-0.12.MapSource

        /**
         * Next source in the loading chain.
         */
        next_source: MapSource;
        /**
         * Next source in the loading chain.
         */
        nextSource: MapSource;
        /**
         * Renderer used for tiles rendering.
         */
        renderer: Renderer;

        // Owm methods of Champlain-0.12.MapSource

        /**
         * Fills the tile with image data (either from cache, network or rendered
         * locally).
         * @param tile a #ChamplainTile
         */
        fill_tile(tile: Tile): void;
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
         * Get the next source in the chain.
         * @returns the next source in the chain.
         */
        get_next_source(): MapSource;
        /**
         * Gets map source's projection.
         * @returns the map source's projection.
         */
        get_projection(): MapProjection;
        /**
         * Get the renderer used for tiles rendering.
         * @returns the renderer.
         */
        get_renderer(): Renderer;
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
         * Sets the next map source in the chain.
         * @param next_source the next #ChamplainMapSource in the chain
         */
        set_next_source(next_source: MapSource): void;
        /**
         * Sets the renderer used for tiles rendering.
         * @param renderer the renderer
         */
        set_renderer(renderer: Renderer): void;
    }

    module MapSourceChain {
        // Constructor properties interface
    }

    /**
     * The #ChamplainMapSourceChain structure contains only private data
     * and should be accessed using the provided API
     */
    class MapSourceChain extends MapSource {
        // Constructors of Champlain-0.12.MapSourceChain

        static ['new'](): MapSourceChain;

        // Owm methods of Champlain-0.12.MapSourceChain

        /**
         * Pops a map source from the top of the stack from the chain.
         */
        pop(): void;
        /**
         * Pushes a map source into the chain.
         * @param map_source the #ChamplainMapSource to be pushed into the chain
         */
        push(map_source: MapSource): void;
    }

    module MapSourceDesc {
        // Constructor properties interface
    }

    /**
     * The #ChamplainMapSourceDesc structure contains only private data
     * and should be accessed using the provided API
     */
    class MapSourceDesc extends GObject.Object {
        // Own properties of Champlain-0.12.MapSourceDesc

        /**
         * The map source constructor
         */
        'constructor': any;
        /**
         * User data passed to the constructor
         */
        data: any;
        /**
         * The id of the map source
         */
        id: string;
        /**
         * The license of the map source
         */
        license: string;
        /**
         * The license's uri for more information
         */
        license_uri: string;
        /**
         * The license's uri for more information
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
        /**
         * The URI format of a network map source
         */
        uri_format: string;
        /**
         * The URI format of a network map source
         */
        uriFormat: string;

        // Owm methods of Champlain-0.12.MapSourceDesc

        /**
         * Gets user data.
         * @returns the user data.
         */
        get_data(): any | null;
        /**
         * Gets map source's id.
         * @returns the map source's id.
         */
        get_id(): string;
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
         * Gets map source's maximum zoom level.
         * @returns the maximum zoom level this map source supports
         */
        get_max_zoom_level(): number;
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
         * Gets map source's tile size.
         * @returns the tile's size (width and height) in pixels for this map source
         */
        get_tile_size(): number;
        /**
         * Gets network map source's URI format.
         * @returns the URI format.
         */
        get_uri_format(): string;
    }

    module MapSourceFactory {
        // Constructor properties interface
    }

    /**
     * The #ChamplainMapSourceFactory structure contains only private data
     * and should be accessed using the provided API
     */
    class MapSourceFactory extends GObject.Object {
        // Owm methods of Champlain-0.12.MapSourceFactory

        /**
         * A method to obtain the singleton object.
         */
        static dup_default(): MapSourceFactory;

        // Owm methods of Champlain-0.12.MapSourceFactory

        /**
         * Note: The id should not contain any character that can't be in a filename as it
         * will be used as the cache directory name for that map source.
         * @param id the wanted map source id
         * @returns a ready to use #ChamplainMapSource matching the given name; returns NULL if the source with the given name doesn't exist.
         */
        create(id: string): MapSource;
        /**
         * Creates a cached map source.
         * @param id the wanted map source id
         * @returns a ready to use #ChamplainMapSourceChain consisting of #ChamplainMemoryCache, #ChamplainFileCache, #ChamplainMapSource matching the given name, and an error tile source created with champlain_map_source_factory_create_error_source (). Returns NULL if the source with the given name doesn't exist.
         */
        create_cached_source(id: string): MapSource;
        /**
         * Creates a map source generating error tiles.
         * @param tile_size the size of the error tile
         * @returns a ready to use map source generating error tiles.
         */
        create_error_source(tile_size: number): MapSource;
        /**
         * Creates a memory cached map source.
         * @param id the wanted map source id
         * @returns a ready to use #ChamplainMapSourceChain consisting of #ChamplainMemoryCache and #ChamplainMapSource matching the given name. Returns NULL if the source with the given name doesn't exist.
         */
        create_memcached_source(id: string): MapSource;
        /**
         * Get the list of registered map sources.
         * @returns the list of registered map sources, the items should not be freed, the list should be freed with #g_slist_free.
         */
        get_registered(): MapSourceDesc[];
        /**
         * Registers the new map source with the given constructor.  When this map
         * source is requested, the given constructor will be used to build the
         * map source.  #ChamplainMapSourceFactory will take ownership of the passed
         * #ChamplainMapSourceDesc, so don't free it.
         * @param desc the description of the map source
         * @returns TRUE if the registration suceeded.
         */
        register(desc: MapSourceDesc): boolean;
    }

    module Marker {
        // Signal callback interfaces

        interface ButtonPress {
            (event: Clutter.Event): void;
        }

        interface ButtonRelease {
            (event: Clutter.Event): void;
        }

        interface DragFinish {
            (event: Clutter.Event): void;
        }

        interface DragMotion {
            (dx: number, dy: number, event: Clutter.Event): void;
        }

        // Constructor properties interface
    }

    /**
     * The #ChamplainMarker structure contains only private data
     * and should be accessed using the provided API
     */
    class Marker extends Clutter.Actor {
        // Own properties of Champlain-0.12.Marker

        /**
         * The draggable state of the marker
         */
        draggable: boolean;
        /**
         * The selectable state of the marker
         */
        selectable: boolean;
        /**
         * The selected state of the marker
         */
        selected: boolean;

        // Constructors of Champlain-0.12.Marker

        static ['new'](): Marker;

        // Owm methods of Champlain-0.12.Marker

        /**
         * Gets the selection color.
         */
        static get_selection_color(): Clutter.Color;
        /**
         * Gets the selection text color.
         */
        static get_selection_text_color(): Clutter.Color;
        /**
         * Changes the selection color, this is to ensure a better integration with
         * the desktop, this is automatically done by GtkChamplainEmbed.
         * @param color a #ClutterColor
         */
        static set_selection_color(color: Clutter.Color): void;
        /**
         * Changes the selection text color, this is to ensure a better integration with
         * the desktop, this is automatically done by GtkChamplainEmbed.
         * @param color a #ClutterColor
         */
        static set_selection_text_color(color: Clutter.Color): void;

        // Owm methods of Champlain-0.12.Marker

        /**
         * Animates the marker as if it were falling from the sky onto the map.
         */
        animate_in(): void;
        /**
         * Animates the marker as if it were falling from the sky onto the map after
         * delay.
         * @param delay The delay in milliseconds
         */
        animate_in_with_delay(delay: number): void;
        /**
         * Animates the marker as if it were drawn through the sky.
         */
        animate_out(): void;
        /**
         * Animates the marker as if it were drawn through the sky after
         * delay.
         * @param delay The delay in milliseconds
         */
        animate_out_with_delay(delay: number): void;
        /**
         * Checks whether the marker is draggable.
         * @returns the draggable or not state of the marker.
         */
        get_draggable(): boolean;
        /**
         * Checks whether the marker is selectable.
         * @returns the selectable or not state of the marker.
         */
        get_selectable(): boolean;
        /**
         * Checks whether the marker is selected.
         * @returns the selected or not state of the marker.
         */
        get_selected(): boolean;
        /**
         * Sets the marker as draggable or not.
         * @param value the draggable state
         */
        set_draggable(value: boolean): void;
        /**
         * Sets the marker as selectable or not.
         * @param value the selectable state
         */
        set_selectable(value: boolean): void;
        /**
         * Sets the marker as selected or not. This will affect the "Selected" look
         * of the marker.
         * @param value the selected state
         */
        set_selected(value: boolean): void;
    }

    module MarkerLayer {
        // Constructor properties interface
    }

    /**
     * The #ChamplainMarkerLayer structure contains only private data
     * and should be accessed using the provided API
     */
    class MarkerLayer extends Layer {
        // Own properties of Champlain-0.12.MarkerLayer

        /**
         * Determines the type of selection that will be performed.
         */
        selection_mode: SelectionMode;
        /**
         * Determines the type of selection that will be performed.
         */
        selectionMode: SelectionMode;

        // Constructors of Champlain-0.12.MarkerLayer

        static ['new'](): MarkerLayer;

        static new_full(mode: SelectionMode): MarkerLayer;

        // Owm methods of Champlain-0.12.MarkerLayer

        /**
         * Adds the marker to the layer.
         * @param marker a #ChamplainMarker
         */
        add_marker(marker: Marker): void;
        /**
         * Fade in all markers in the layer with an animation
         */
        animate_in_all_markers(): void;
        /**
         * Fade out all markers in the layer with an animation
         */
        animate_out_all_markers(): void;
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
        get_selection_mode(): SelectionMode;
        /**
         * Hides all the markers in the layer
         */
        hide_all_markers(): void;
        /**
         * Removes all markers from the layer.
         */
        remove_all(): void;
        /**
         * Removes the marker from the layer.
         * @param marker a #ChamplainMarker
         */
        remove_marker(marker: Marker): void;
        /**
         * Selects all markers in the layer.
         */
        select_all_markers(): void;
        /**
         * Sets all markers draggable in the layer
         */
        set_all_markers_draggable(): void;
        /**
         * Sets all markers undraggable in the layer
         */
        set_all_markers_undraggable(): void;
        /**
         * Sets the selection mode of the layer.
         *
         * NOTE: changing selection mode to CHAMPLAIN_SELECTION_NONE or
         * CHAMPLAIN_SELECTION_SINGLE will clear all previously selected markers.
         * @param mode a #ChamplainSelectionMode value
         */
        set_selection_mode(mode: SelectionMode): void;
        /**
         * Shows all markers in the layer
         */
        show_all_markers(): void;
        /**
         * Unselects all markers in the layer.
         */
        unselect_all_markers(): void;
    }

    module MemoryCache {
        // Constructor properties interface
    }

    /**
     * The #ChamplainMemoryCache structure contains only private data
     * and should be accessed using the provided API
     */
    class MemoryCache extends TileCache {
        // Own properties of Champlain-0.12.MemoryCache

        /**
         * The maximum number of tiles that are stored in the cache.
         */
        size_limit: number;
        /**
         * The maximum number of tiles that are stored in the cache.
         */
        sizeLimit: number;

        // Constructors of Champlain-0.12.MemoryCache

        static new_full(size_limit: number, renderer: Renderer): MemoryCache;

        // Owm methods of Champlain-0.12.MemoryCache

        /**
         * Cleans the contents of the cache.
         */
        clean(): void;
        /**
         * Gets the maximum number of tiles stored in the cache.
         * @returns maximum number of stored tiles
         */
        get_size_limit(): number;
        /**
         * Sets the maximum number of tiles stored in the cache.
         * @param size_limit maximum number of tiles stored in the cache
         */
        set_size_limit(size_limit: number): void;
    }

    module NetworkBboxTileSource {
        // Constructor properties interface
    }

    /**
     * The #ChamplainNetworkBboxTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    class NetworkBboxTileSource extends TileSource {
        // Own properties of Champlain-0.12.NetworkBboxTileSource

        /**
         * The URI of an OpenStreetMap API server
         */
        api_uri: string;
        /**
         * The URI of an OpenStreetMap API server
         */
        apiUri: string;
        /**
         * Used to override the default proxy for accessing the network.
         */
        proxy_uri: string;
        /**
         * Used to override the default proxy for accessing the network.
         */
        proxyUri: string;
        /**
         * The map source's state. Useful to know if the data source is loading
         * or not.
         */
        state: State;
        /**
         * The HTTP user agent used for requests
         */
        user_agent: string;
        /**
         * The HTTP user agent used for requests
         */
        userAgent: string;

        // Constructors of Champlain-0.12.NetworkBboxTileSource

        static new_full(
            id: string,
            name: string,
            license: string,
            license_uri: string,
            min_zoom: number,
            max_zoom: number,
            tile_size: number,
            projection: MapProjection,
            renderer: Renderer,
        ): NetworkBboxTileSource;

        // Owm methods of Champlain-0.12.NetworkBboxTileSource

        /**
         * Gets the URI of the API server.
         * @returns the URI of the API server.
         */
        get_api_uri(): string;
        /**
         * Asynchronously loads map data within a bounding box from the server.
         * The box must not exceed an edge size of 0.25 degree. There are also
         * limitations on the maximum number of nodes that can be requested.
         *
         * For details, see: &lt;ulink role="online-location"
         * url="https://api.openstreetmap.org/api/capabilities"&gt;
         * https://api.openstreetmap.org/api/capabilities&lt;/ulink&gt;
         * @param bbox bounding box of the requested area
         */
        load_map_data(bbox: BoundingBox): void;
        /**
         * Sets the URI of the API server.
         * @param api_uri an URI of an API server
         */
        set_api_uri(api_uri: string): void;
        /**
         * Sets the User-Agent header used communicating with the server.
         * @param user_agent A User-Agent string
         */
        set_user_agent(user_agent: string): void;
    }

    module NetworkTileSource {
        // Constructor properties interface
    }

    /**
     * The #ChamplainNetworkTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    class NetworkTileSource extends TileSource {
        // Own properties of Champlain-0.12.NetworkTileSource

        /**
         * Specifies the max number of allowed simultaneous connections for this tile
         * source.
         *
         * Before changing this remember to verify how many simultaneous connections
         * your tile provider allows you to make.
         */
        max_conns: number;
        /**
         * Specifies the max number of allowed simultaneous connections for this tile
         * source.
         *
         * Before changing this remember to verify how many simultaneous connections
         * your tile provider allows you to make.
         */
        maxConns: number;
        /**
         * Specifies whether the network tile source can access network
         */
        offline: boolean;
        /**
         * Used to override the default proxy for accessing the network.
         */
        proxy_uri: string;
        /**
         * Used to override the default proxy for accessing the network.
         */
        proxyUri: string;
        /**
         * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
         */
        uri_format: string;
        /**
         * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
         */
        uriFormat: string;
        /**
         * The HTTP user agent used for requests
         */
        user_agent: string;
        /**
         * The HTTP user agent used for requests
         */
        userAgent: string;

        // Constructors of Champlain-0.12.NetworkTileSource

        static new_full(
            id: string,
            name: string,
            license: string,
            license_uri: string,
            min_zoom: number,
            max_zoom: number,
            tile_size: number,
            projection: MapProjection,
            uri_format: string,
            renderer: Renderer,
        ): NetworkTileSource;

        // Owm methods of Champlain-0.12.NetworkTileSource

        /**
         * Gets the max number of allowed simultaneous connections for this tile
         * source.
         * @returns the max number of allowed simultaneous connections for this tile source.
         */
        get_max_conns(): number;
        /**
         * Gets offline status.
         * @returns TRUE when the tile source is set to be offline; FALSE otherwise.
         */
        get_offline(): boolean;
        /**
         * Gets the proxy uri used to access network.
         * @returns the proxy uri
         */
        get_proxy_uri(): string;
        /**
         * Default constructor of #ChamplainNetworkTileSource.
         * @returns A URI format used for URI creation when downloading tiles. See champlain_network_tile_source_set_uri_format() for more information.
         */
        get_uri_format(): string;
        /**
         * Sets the max number of allowed simultaneous connections for this tile source.
         *
         * Before changing this remember to verify how many simultaneous connections
         * your tile provider allows you to make.
         * @param max_conns the number of allowed simultaneous connections
         */
        set_max_conns(max_conns: number): void;
        /**
         * Sets offline status.
         * @param offline TRUE when the tile source should be offline; FALSE otherwise
         */
        set_offline(offline: boolean): void;
        /**
         * Override the default proxy for accessing the network.
         * @param proxy_uri the proxy uri used to access network
         */
        set_proxy_uri(proxy_uri: string): void;
        /**
         * A URI format is a URI where x, y and zoom level information have been
         * marked for parsing and insertion.  There can be an unlimited number of
         * marked items in a URI format.  They are delimited by "#" before and after
         * the variable name. There are 4 defined variable names: X, Y, Z, and TMSY for
         * Y in TMS coordinates.
         *
         * For example, this is the OpenStreetMap URI format:
         * "https://tile.openstreetmap.org/\#Z\#/\#X\#/\#Y\#.png"
         * @param uri_format the URI format
         */
        set_uri_format(uri_format: string): void;
        /**
         * Sets the User-Agent header used communicating with the server.
         * @param user_agent A User-Agent string
         */
        set_user_agent(user_agent: string): void;
    }

    module NullTileSource {
        // Constructor properties interface
    }

    /**
     * The #ChamplainNullTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    class NullTileSource extends TileSource {
        // Constructors of Champlain-0.12.NullTileSource

        static new_full(renderer: Renderer): NullTileSource;
    }

    module PathLayer {
        // Constructor properties interface
    }

    /**
     * The #ChamplainPathLayer structure contains only private data
     * and should be accessed using the provided API
     */
    class PathLayer extends Layer {
        // Own properties of Champlain-0.12.PathLayer

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
        fill_color: Clutter.Color;
        /**
         * The path's fill color
         */
        fillColor: Clutter.Color;
        /**
         * The shape should be stroked
         */
        stroke: boolean;
        /**
         * The path's stroke color
         */
        stroke_color: Clutter.Color;
        /**
         * The path's stroke color
         */
        strokeColor: Clutter.Color;
        /**
         * The path's stroke width (in pixels)
         */
        stroke_width: number;
        /**
         * The path's stroke width (in pixels)
         */
        strokeWidth: number;
        /**
         * Wether the path is visible
         */
        visible: boolean;

        // Constructors of Champlain-0.12.PathLayer

        static ['new'](): PathLayer;

        // Owm methods of Champlain-0.12.PathLayer

        /**
         * Adds a #ChamplainLocation object to the layer.
         * The node is prepended to the list.
         * @param location a #ChamplainLocation
         */
        add_node(location: Location): void;
        /**
         * Gets information whether the path is closed.
         * @returns TRUE when the path is closed, FALSE otherwise
         */
        get_closed(): boolean;
        /**
         * Returns the list of dash segment lengths.
         * @returns the list
         */
        get_dash(): number[];
        /**
         * Checks whether the path is filled.
         * @returns TRUE if the path is filled, FALSE otherwise.
         */
        get_fill(): boolean;
        /**
         * Gets the path's fill color.
         * @returns the path's fill color.
         */
        get_fill_color(): Clutter.Color;
        /**
         * Gets a copy of the list of all #ChamplainLocation objects inserted into the layer. You should
         * free the list but not its contents.
         * @returns the list
         */
        get_nodes(): Location[];
        /**
         * Checks whether the path is stroked.
         * @returns TRUE if the path is stroked, FALSE otherwise.
         */
        get_stroke(): boolean;
        /**
         * Gets the path's stroke color.
         * @returns the path's stroke color.
         */
        get_stroke_color(): Clutter.Color;
        /**
         * Gets the width of the stroke.
         * @returns the width of the stroke
         */
        get_stroke_width(): number;
        /**
         * Gets path visibility.
         * @returns TRUE when the path is visible, FALSE otherwise
         */
        get_visible(): boolean;
        /**
         * Inserts a #ChamplainLocation object to the specified position.
         * @param location a #ChamplainLocation
         * @param position position in the list where the #ChamplainLocation object should be inserted
         */
        insert_node(location: Location, position: number): void;
        /**
         * Removes all #ChamplainLocation objects from the layer.
         */
        remove_all(): void;
        /**
         * Removes the #ChamplainLocation object from the layer.
         * @param location a #ChamplainLocation
         */
        remove_node(location: Location): void;
        /**
         * Makes the path closed.
         * @param value TRUE to make the path closed
         */
        set_closed(value: boolean): void;
        /**
         * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
         * method supports only integer values for segment lengths. The values have to be
         * passed inside the data pointer of the list (using the GUINT_TO_POINTER conversion)
         *
         * Pass NULL to use solid line.
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
         * @param color The path's fill color or NULL to reset to the         default color. The color parameter is copied.
         */
        set_fill_color(color?: Clutter.Color | null): void;
        /**
         * Sets the path to be stroked
         * @param value if the path is stroked
         */
        set_stroke(value: boolean): void;
        /**
         * Set the path's stroke color.
         * @param color The path's stroke color or NULL to reset to the         default color. The color parameter is copied.
         */
        set_stroke_color(color?: Clutter.Color | null): void;
        /**
         * Sets the width of the stroke
         * @param value the width of the stroke (in pixels)
         */
        set_stroke_width(value: number): void;
        /**
         * Sets path visibility.
         * @param value TRUE to make the path visible
         */
        set_visible(value: boolean): void;
    }

    module Point {
        // Constructor properties interface
    }

    /**
     * The #ChamplainPoint structure contains only private data
     * and should be accessed using the provided API
     */
    class Point extends Marker {
        // Own properties of Champlain-0.12.Point

        color: Clutter.Color;
        size: number;

        // Constructors of Champlain-0.12.Point

        static ['new'](): Point;

        static new_full(size: number, color: Clutter.Color): Point;

        // Owm methods of Champlain-0.12.Point

        /**
         * Gets the color of the point.
         * @returns the color.
         */
        get_color(): Clutter.Color;
        /**
         * Gets the size of the point.
         * @returns the size.
         */
        get_size(): number;
        /**
         * Set the color of the point.
         * @param color The color of the point or NULL to reset the background to the         default color. The color parameter is copied.
         */
        set_color(color?: Clutter.Color | null): void;
        /**
         * Set the size of the point.
         * @param size The size of the point.
         */
        set_size(size: number): void;
    }

    module Renderer {
        // Constructor properties interface
    }

    /**
     * The #ChamplainRenderer structure contains only private data
     * and should be accessed using the provided API
     */
    class Renderer extends GObject.InitiallyUnowned {
        // Owm methods of Champlain-0.12.Renderer

        /**
         * Renders the texture for the provided tile and calls champlain_tile_set_content()
         * to set the content of the tile. When the rendering is finished, the renderer
         * emits the #ChamplainTile::render-complete signal. The tile has to be displayed manually by
         * calling champlain_tile_display_content().
         * @param tile the tile to render
         */
        render(tile: Tile): void;
        /**
         * Sets the data which is used to render tiles by the renderer.
         * @param data data used for tile rendering
         */
        set_data(data: Uint8Array): void;
    }

    module Scale {
        // Constructor properties interface
    }

    /**
     * The #ChamplainScale structure contains only private data
     * and should be accessed using the provided API
     */
    class Scale extends Clutter.Actor {
        // Own properties of Champlain-0.12.Scale

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

        // Constructors of Champlain-0.12.Scale

        static ['new'](): Scale;

        // Owm methods of Champlain-0.12.Scale

        /**
         * This method connects to the necessary signals of #ChamplainView to make the
         * scale adapt to the current latitude and longitude.
         * @param view a #ChamplainView
         */
        connect_view(view: View): void;
        /**
         * This method disconnects from the signals previously connected by champlain_scale_connect_view().
         */
        disconnect_view(): void;
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
         * Sets the maximum width of the scale on the screen in pixels
         * @param value the number of pixels
         */
        set_max_width(value: number): void;
        /**
         * Sets the scale unit.
         * @param unit a #ChamplainUnit
         */
        set_unit(unit: Unit): void;
    }

    module Tile {
        // Signal callback interfaces

        interface RenderComplete {
            (data: any | null, size: number, error: boolean): void;
        }

        // Constructor properties interface
    }

    /**
     * The #ChamplainTile structure contains only private data
     * and should be accessed using the provided API
     */
    class Tile extends Clutter.Actor {
        // Own properties of Champlain-0.12.Tile

        /**
         * The #ClutterActor with the specific image content.  When changing this
         * property, the new actor will be faded in.
         */
        content: Clutter.Actor;
        /**
         * The tile's ETag. This information is sent by some web servers as a mean
         * to identify if a tile has changed.  This information is saved in the cache
         * and sent in GET queries.
         */
        etag: string;
        /**
         * Specifies whether the tile should fade in when loading
         */
        fade_in: boolean;
        /**
         * Specifies whether the tile should fade in when loading
         */
        fadeIn: boolean;
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

        // Constructors of Champlain-0.12.Tile

        static ['new'](): Tile;

        static new_full(x: number, y: number, size: number, zoom_level: number): Tile;

        // Owm methods of Champlain-0.12.Tile

        /**
         * Displays the tile's content.
         */
        display_content(): void;
        /**
         * Gets the tile's content actor.
         * @returns the tile's content, this actor will change each time the tile's content changes. You should not unref this content, it is owned by the tile.
         */
        get_content(): Clutter.Actor;
        /**
         * Gets the tile's ETag.
         * @returns the tile's ETag
         */
        get_etag(): string;
        /**
         * Checks whether the tile should fade in.
         * @returns the return value determines whether the tile should fade in when loading.
         */
        get_fade_in(): boolean;
        /**
         * Gets the tile's last modified time.
         * @returns the tile's last modified time
         */
        get_modified_time(): GLib.TimeVal;
        /**
         * Gets the tile's size.
         * @returns the tile's size in pixels
         */
        get_size(): number;
        /**
         * Gets the current state of tile loading.
         * @returns the tile's #ChamplainState
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
        /**
         * Sets the tile's content. To also disppay the tile, you have to call
         * champlain_tile_display_content() in addition.
         * @param actor the new content
         */
        set_content(actor: Clutter.Actor): void;
        /**
         * Sets the tile's ETag
         * @param etag the tile's ETag as sent by the server
         */
        set_etag(etag: string): void;
        /**
         * Sets the flag determining whether the tile should fade in when loading
         * @param fade_in determines whether the tile should fade in when loading
         */
        set_fade_in(fade_in: boolean): void;
        /**
         * Sets the tile's modified time
         * @param time a #GTimeVal, the value will be copied
         */
        set_modified_time(time: GLib.TimeVal): void;
        /**
         * Sets the tile's size
         * @param size the size in pixels
         */
        set_size(size: number): void;
        /**
         * Sets the tile's #ChamplainState
         * @param state a #ChamplainState
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

    module TileCache {
        // Constructor properties interface
    }

    /**
     * The #ChamplainTileCache structure contains only private data
     * and should be accessed using the provided API
     */
    abstract class TileCache extends MapSource {
        // Owm methods of Champlain-0.12.TileCache

        /**
         * When a cache fills a tile and the next source in the chain is a tile cache,
         * it should call this function on the next source. This way all the caches
         * preceding a tile source in the chain get informed that the tile was used and
         * can modify their metadata accordingly in the implementation of this function.
         * In addition, the call of this function should be chained so within the
         * implementation of this function it should be called on the next source
         * in the chain when next source is a tile cache.
         * @param tile a #ChamplainTile
         */
        on_tile_filled(tile: Tile): void;
        /**
         * Refreshes the tile access time in the cache.
         * @param tile a #ChamplainTile
         */
        refresh_tile_time(tile: Tile): void;
        /**
         * Stores the tile including the metadata into the cache.
         * @param tile a #ChamplainTile
         * @param contents the tile contents that should be stored
         * @param size size of the contents in bytes
         */
        store_tile(tile: Tile, contents: string, size: number): void;
    }

    module TileSource {
        // Constructor properties interface
    }

    /**
     * The #ChamplainTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    abstract class TileSource extends MapSource {
        // Own properties of Champlain-0.12.TileSource

        /**
         * The cache used for tile storage
         */
        cache: TileCache;
        /**
         * The id of the tile source
         */
        id: string;
        /**
         * The usage license of the tile source
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
         * The name of the tile source
         */
        name: string;
        /**
         * The map projection of the tile source
         */
        projection: MapProjection;
        /**
         * The tile size of the tile source
         */
        tile_size: number;
        /**
         * The tile size of the tile source
         */
        tileSize: number;

        // Owm methods of Champlain-0.12.TileSource

        /**
         * Gets the cache used for storing tiles by this tile source.
         * @returns the cache
         */
        get_cache(): TileCache;
        /**
         * Sets the map source's cache used for storing tiles.
         * @param cache a #ChamplainTileCache
         */
        set_cache(cache: TileCache): void;
        /**
         * Sets the tile source's id.
         * @param id an id
         */
        set_id(id: string): void;
        /**
         * Sets the tile source's license.
         * @param license the licence
         */
        set_license(license: string): void;
        /**
         * Sets the tile source's license URI.
         * @param license_uri the licence URI
         */
        set_license_uri(license_uri: string): void;
        /**
         * Sets the tile source's maximum zoom level.
         * @param zoom_level the maximum zoom level
         */
        set_max_zoom_level(zoom_level: number): void;
        /**
         * Sets the tile source's minimal zoom level.
         * @param zoom_level the minimal zoom level
         */
        set_min_zoom_level(zoom_level: number): void;
        /**
         * Sets the tile source's name.
         * @param name a name
         */
        set_name(name: string): void;
        /**
         * Sets the tile source's projection.
         * @param projection a #ChamplainMapProjection
         */
        set_projection(projection: MapProjection): void;
        /**
         * Sets the tile source's tile size.
         * @param tile_size the tile size
         */
        set_tile_size(tile_size: number): void;
    }

    module View {
        // Signal callback interfaces

        interface AnimationCompleted {
            (): void;
        }

        interface LayerRelocated {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #ChamplainView structure contains only private data
     * and should be accessed using the provided API
     */
    class View extends Clutter.Actor {
        // Own properties of Champlain-0.12.View

        /**
         * Animate zoom change when zooming in/out.
         */
        animate_zoom: boolean;
        /**
         * Animate zoom change when zooming in/out.
         */
        animateZoom: boolean;
        /**
         * The pattern displayed in the background of the map.
         */
        background_pattern: Clutter.Actor;
        /**
         * The pattern displayed in the background of the map.
         */
        backgroundPattern: Clutter.Actor;
        /**
         * The deceleration rate for the kinetic mode. The default value is 1.1.
         */
        deceleration: number;
        /**
         * The duration of an animation when going to a location.
         * A value of 0 means that the duration is calculated automatically for you.
         *
         * Please note that animation of #champlain_view_ensure_visible also
         * involves a 'goto' animation.
         */
        goto_animation_duration: number;
        /**
         * The duration of an animation when going to a location.
         * A value of 0 means that the duration is calculated automatically for you.
         *
         * Please note that animation of #champlain_view_ensure_visible also
         * involves a 'goto' animation.
         */
        gotoAnimationDuration: number;
        /**
         * The mode of animation when going to a location.
         *
         * Please note that animation of #champlain_view_ensure_visible also
         * involves a 'goto' animation.
         */
        goto_animation_mode: Clutter.AnimationMode;
        /**
         * The mode of animation when going to a location.
         *
         * Please note that animation of #champlain_view_ensure_visible also
         * involves a 'goto' animation.
         */
        gotoAnimationMode: Clutter.AnimationMode;
        /**
         * Determines whether the view should wrap horizontally.
         */
        horizontal_wrap: boolean;
        /**
         * Determines whether the view should wrap horizontally.
         */
        horizontalWrap: boolean;
        /**
         * Keep the current centered position when resizing the view.
         */
        keep_center_on_resize: boolean;
        /**
         * Keep the current centered position when resizing the view.
         */
        keepCenterOnResize: boolean;
        /**
         * Determines whether the view should use kinetic mode.
         */
        kinetic_mode: boolean;
        /**
         * Determines whether the view should use kinetic mode.
         */
        kineticMode: boolean;
        /**
         * The latitude coordonate of the map
         */
        latitude: number;
        /**
         * The longitude coordonate of the map
         */
        longitude: number;
        /**
         * The #ChamplainMapSource being displayed
         */
        map_source: MapSource;
        /**
         * The #ChamplainMapSource being displayed
         */
        mapSource: MapSource;
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
         * The view's global state. Useful to inform using if the view is busy loading
         * tiles or not.
         */
        readonly state: State;
        /**
         * Set a bounding box to limit the world to. No tiles will be loaded
         * outside of this bounding box. It will not be possible to scroll outside
         * of this bounding box.
         *
         * Default world is the actual world.
         */
        world: BoundingBox;
        /**
         * The level of zoom of the content.
         */
        zoom_level: number;
        /**
         * The level of zoom of the content.
         */
        zoomLevel: number;
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoom_on_double_click: boolean;
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoomOnDoubleClick: boolean;

        // Constructors of Champlain-0.12.View

        static ['new'](): View;

        // Owm methods of Champlain-0.12.View

        /**
         * Adds a new layer to the view
         * @param layer a #ChamplainLayer
         */
        add_layer(layer: Layer): void;
        /**
         * Adds a new overlay map source to render tiles with the supplied opacity on top
         * of the ordinary map source. Multiple overlay sources can be added.
         * @param map_source a #ChamplainMapSource
         * @param opacity opacity to use
         */
        add_overlay_source(map_source: MapSource, opacity: number): void;
        /**
         * This function inserts a custom actor to the undrelying #ClutterBinLayout
         * manager. The inserted actors appear on top of the map. See clutter_bin_layout_add()
         * for reference.
         * @param child The child to be inserted
         * @param x_align x alignment
         * @param y_align y alignment
         */
        bin_layout_add(child: Clutter.Actor, x_align: Clutter.BinAlignment, y_align: Clutter.BinAlignment): void;
        /**
         * Centers the map on these coordinates.
         * @param latitude the longitude to center the map at
         * @param longitude the longitude to center the map at
         */
        center_on(latitude: number, longitude: number): void;
        /**
         * Changes the map's zoom level and center to make sure that the bounding
         * boxes of all inserted layers are visible.
         * @param animate TRUE to perform animation, FALSE otherwise
         */
        ensure_layers_visible(animate: boolean): void;
        /**
         * Changes the map's zoom level and center to make sure the given area
         * is visible
         * @param bbox bounding box of the area that should be visible
         * @param animate TRUE to perform animation, FALSE otherwise
         */
        ensure_visible(bbox: BoundingBox, animate: boolean): void;
        /**
         * Checks whether the view animates zoom level changes.
         * @returns TRUE if the view animates zooms, FALSE otherwise.
         */
        get_animate_zoom(): boolean;
        /**
         * Gets the current background texture displayed behind the map.
         * @returns The texture.
         */
        get_background_pattern(): Clutter.Content;
        /**
         * Gets the bounding box for view `view` at current zoom-level.
         * @returns the bounding box
         */
        get_bounding_box(): BoundingBox;
        /**
         * Gets the bounding box for view `view` at `zoom_level`.
         * @param zoom_level the level of zoom, a guint between 1 and 20
         * @returns the bounding box for the view at @zoom_level.
         */
        get_bounding_box_for_zoom_level(zoom_level: number): BoundingBox;
        /**
         * Gets the latitude of the view's center.
         * @returns the latitude.
         */
        get_center_latitude(): number;
        /**
         * Gets the longitude of the view's center.
         * @returns the longitude.
         */
        get_center_longitude(): number;
        /**
         * Gets the view's deceleration rate.
         * @returns the view's deceleration rate.
         */
        get_deceleration(): number;
        /**
         * Returns the value of the #ChamplainView:horizontal-wrap property.
         * @returns %TRUE if #ChamplainView:horizontal-wrap is set.
         */
        get_horizontal_wrap(): boolean;
        /**
         * Checks whether to keep the center on resize
         * @returns TRUE if the view keeps the center on resize, FALSE otherwise.
         */
        get_keep_center_on_resize(): boolean;
        /**
         * Gets the view's scroll mode behaviour.
         * @returns TRUE for kinetic mode, FALSE for push mode.
         */
        get_kinetic_mode(): boolean;
        /**
         * Returns the #ChamplainLicense actor which is inserted by default into the
         * layout manager. It can be manipulated using standard #ClutterActor methods
         * (hidden and so on).
         * @returns the license actor
         */
        get_license_actor(): License;
        /**
         * Gets the view's current map source.
         * @returns the view's current map source. If you need to keep a reference to the map source then you have to call #g_object_ref().
         */
        get_map_source(): MapSource;
        /**
         * Gets the view's maximum allowed zoom level.
         * @returns the view's maximum allowed zoom level.
         */
        get_max_zoom_level(): number;
        /**
         * Gets the view's minimal allowed zoom level.
         * @returns the view's minimal allowed zoom level.
         */
        get_min_zoom_level(): number;
        /**
         * Gets a list of overlay sources.
         * @returns the list
         */
        get_overlay_sources(): MapSource[];
        /**
         * Gets the view's state.
         * @returns the state.
         */
        get_state(): State;
        /**
         * Gets the x and y coordinate of the viewport anchor in respect to the layer origin.
         */
        get_viewport_anchor(): void;
        /**
         * Gets the x and y coordinate of the viewport in respect to the layer origin.
         */
        get_viewport_origin(): void;
        /**
         * Get the bounding box that represents the extent of the world.
         * @returns a #ChamplainBoundingBox that represents the current world
         */
        get_world(): BoundingBox;
        /**
         * Gets the view's current zoom level.
         * @returns the view's current zoom level.
         */
        get_zoom_level(): number;
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
         * Converts the latitude to view's y coordinate.
         * @param latitude the latitude
         * @returns the y coordinate
         */
        latitude_to_y(latitude: number): number;
        /**
         * Converts the longitude to view's x coordinate.
         * @param longitude the longitude
         * @returns the x coordinate
         */
        longitude_to_x(longitude: number): number;
        /**
         * Reloads all visible tiles.
         */
        reload_tiles(): void;
        /**
         * Removes the given layer from the view
         * @param layer a #ChamplainLayer
         */
        remove_layer(layer: Layer): void;
        /**
         * Removes an overlay source from #ChamplainView.
         * @param map_source a #ChamplainMapSource
         */
        remove_overlay_source(map_source: MapSource): void;
        /**
         * Should the view animate zoom level changes.
         * @param value a #gboolean
         */
        set_animate_zoom(value: boolean): void;
        /**
         * Sets the background texture displayed behind the map. Setting the background
         * pattern affects performence slightly - use reasonably large patterns for
         * better performance.
         * @param background The background texture
         */
        set_background_pattern(background: Clutter.Content): void;
        /**
         * The deceleration rate for the kinetic mode.
         * @param rate a #gdouble between 1.001 and 2.0
         */
        set_deceleration(rate: number): void;
        /**
         * Sets the value of the #ChamplainView:horizontal-wrap property.
         * @param wrap %TRUE to enable horizontal wrapping
         */
        set_horizontal_wrap(wrap: boolean): void;
        /**
         * Keep the current centered position when resizing the view.
         * @param value a #gboolean
         */
        set_keep_center_on_resize(value: boolean): void;
        /**
         * Determines the way the view reacts to scroll events.
         * @param kinetic TRUE for kinetic mode, FALSE for push mode
         */
        set_kinetic_mode(kinetic: boolean): void;
        /**
         * Changes the currently used map source. #g_object_unref() will be called on
         * the previous one.
         *
         * As a side effect, changing the primary map source will also clear all
         * secondary map sources.
         * @param map_source a #ChamplainMapSource
         */
        set_map_source(map_source: MapSource): void;
        /**
         * Changes the highest allowed level of zoom
         * @param zoom_level the level of zoom
         */
        set_max_zoom_level(zoom_level: number): void;
        /**
         * Changes the lowest allowed level of zoom
         * @param zoom_level the level of zoom
         */
        set_min_zoom_level(zoom_level: number): void;
        /**
         * Set a bounding box to limit the world to. No tiles will be loaded
         * outside of this bounding box. It will not be possible to scroll outside
         * of this bounding box.
         * @param bbox the #ChamplainBoundingBox of the world
         */
        set_world(bbox: BoundingBox): void;
        /**
         * Changes the current level of zoom
         * @param zoom_level the level of zoom, a guint between 1 and 20
         */
        set_zoom_level(zoom_level: number): void;
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
         * Will generate a #cairo_surface_t that represents the current view
         * of the map. Without any markers or layers. If the current #ChamplainRenderer
         * used does not support this, this function will return %NULL.
         *
         * If `include_layers` is set to %TRUE all layers that implement
         * #ChamplainExportable will be included in the surface.
         *
         * The #ChamplainView also need to be in #CHAMPLAIN_STATE_DONE state.
         * @param include_layers Set to %TRUE if you want to include layers
         * @returns a #cairo_surface_t or %NULL on failure. Free with          cairo_surface_destroy() when done.
         */
        to_surface(include_layers: boolean): cairo.Surface;
        /**
         * Converts the view's x coordinate to longitude.
         * @param x x coordinate of the view
         * @returns the longitude
         */
        x_to_longitude(x: number): number;
        /**
         * Converts the view's y coordinate to latitude.
         * @param y y coordinate of the view
         * @returns the latitude
         */
        y_to_latitude(y: number): number;
        /**
         * Zoom in the map by one level.
         */
        zoom_in(): void;
        /**
         * Zoom out the map by one level.
         */
        zoom_out(): void;
    }

    module Viewport {
        // Signal callback interfaces

        interface Relocated {
            (): void;
        }

        // Constructor properties interface
    }

    class Viewport extends Clutter.Actor {
        // Own properties of Champlain-0.12.Viewport

        hadjustment: Adjustment;
        vadjustment: Adjustment;
        x_origin: number;
        xOrigin: number;
        y_origin: number;
        yOrigin: number;

        // Constructors of Champlain-0.12.Viewport

        static ['new'](): Viewport;

        // Owm methods of Champlain-0.12.Viewport

        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        get_anchor(x: number, y: number): void;
        get_origin(x: number, y: number): void;
        set_actor_position(actor: Clutter.Actor, x: number, y: number): void;
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        set_child(child: Clutter.Actor): void;
        set_origin(x: number, y: number): void;
        stop(): void;
    }

    /**
     * Base class for #ChamplainAdjustment.
     */
    class AdjustmentClass {}

    class AdjustmentPrivate {}

    /**
     * Defines the area of a ChamplainMapDataSource that contains data.
     */
    class BoundingBox {
        // Own fields of Champlain-0.12.BoundingBox

        left: number;
        top: number;
        right: number;
        bottom: number;

        // Constructors of Champlain-0.12.BoundingBox

        constructor(
            properties?: Partial<{
                left: number;
                top: number;
                right: number;
                bottom: number;
            }>,
        );

        static ['new'](): BoundingBox;

        // Owm methods of Champlain-0.12.BoundingBox

        /**
         * Sets bbox equal to the bounding box containing both `bbox` and `other`.
         * @param other a #ChamplainBoundingBox
         */
        compose(other: BoundingBox): void;
        /**
         * Makes a copy of the bounding box structure. The result must be
         * freed using champlain_bounding_box_free().
         * @returns an allocated copy of @bbox.
         */
        copy(): BoundingBox;
        /**
         * Checks whether `bbox` covers the given coordinates.
         * @param latitude the latitude of the point
         * @param longitude the longitude of the point
         * @returns TRUE when the bounding box covers given coordinates, FALSE otherwise.
         */
        covers(latitude: number, longitude: number): boolean;
        /**
         * Extend the bounding box so it contains a point with `latitude` and `longitude`.
         * Do nothing if the point is already inside the bounding box.
         * @param latitude the latitude of the point
         * @param longitude the longitude of the point
         */
        extend(latitude: number, longitude: number): void;
        /**
         * Frees a bounding box structure created with champlain_bounding_box_new() or
         * champlain_bounding_box_copy().
         */
        free(): void;
        /**
         * Gets the center's latitude and longitude of the box to `latitude` and `longitude`.
         */
        get_center(): void;
        /**
         * Checks whether `bbox` represents a valid bounding box on the map.
         * @returns TRUE when the bounding box is valid, FALSE otherwise.
         */
        is_valid(): boolean;
    }

    class CoordinateClass {}

    class CoordinatePrivate {}

    class CustomMarkerClass {}

    class CustomMarkerPrivate {}

    class ErrorTileRendererClass {}

    class ErrorTileRendererPrivate {}

    /**
     * An interface common to objects having a #cairo_surface_t representation.
     */
    class ExportableIface {}

    class FileCacheClass {}

    class FileCachePrivate {}

    class FileTileSourceClass {}

    class FileTileSourcePrivate {}

    class ImageRendererClass {}

    class ImageRendererPrivate {}

    class KineticScrollViewClass {}

    class KineticScrollViewPrivate {}

    class LabelClass {}

    class LabelPrivate {}

    class LayerClass {}

    class LicenseClass {}

    class LicensePrivate {}

    /**
     * An interface common to objects having latitude and longitude.
     */
    class LocationIface {}

    class MapSourceChainClass {}

    class MapSourceChainPrivate {}

    class MapSourceClass {}

    class MapSourceDescClass {}

    class MapSourceDescPrivate {}

    class MapSourceFactoryClass {}

    class MapSourceFactoryPrivate {}

    class MapSourcePrivate {}

    class MarkerClass {}

    class MarkerLayerClass {}

    class MarkerLayerPrivate {}

    class MarkerPrivate {}

    class MemoryCacheClass {}

    class MemoryCachePrivate {}

    class NetworkBboxTileSourceClass {}

    class NetworkBboxTileSourcePrivate {}

    class NetworkTileSourceClass {}

    class NetworkTileSourcePrivate {}

    class NullTileSourceClass {}

    class NullTileSourcePrivate {}

    class PathLayerClass {}

    class PathLayerPrivate {}

    class PointClass {}

    class PointPrivate {}

    class RendererClass {}

    class ScaleClass {}

    class ScalePrivate {}

    class TileCacheClass {}

    class TileCachePrivate {}

    class TileClass {}

    class TilePrivate {}

    class TileSourceClass {}

    class TileSourcePrivate {}

    class ViewClass {}

    class ViewPrivate {}

    class ViewportClass {}

    class ViewportPrivate {}

    interface Exportable {
        // Own properties of Champlain-0.12.Exportable

        /**
         * A #cairo_surface_t representation
         */
        surface: cairo.Surface;

        // Owm methods of Champlain-0.12.Exportable

        /**
         * Gets the surface
         * @returns the #cairo_surface_t of the object
         */
        get_surface(): cairo.Surface;
        /**
         * Set a #cairo_surface_t to be associated with this tile.
         * @param surface the #cairo_surface_t
         */
        set_surface(surface: cairo.Surface): void;

        // Own virtual methods of Champlain-0.12.Exportable

        /**
         * Gets the surface
         */
        vfunc_get_surface(): cairo.Surface;
        /**
         * Set a #cairo_surface_t to be associated with this tile.
         * @param surface the #cairo_surface_t
         */
        vfunc_set_surface(surface: cairo.Surface): void;
    }

    interface Location {
        // Own properties of Champlain-0.12.Location

        /**
         * The latitude coordonate
         */
        latitude: number;
        /**
         * The longitude coordonate
         */
        longitude: number;

        // Owm methods of Champlain-0.12.Location

        /**
         * Gets the latitude coordinate.
         * @returns the latitude coordinate.
         */
        get_latitude(): number;
        /**
         * Gets the longitude coordinate.
         * @returns the longitude coordinate.
         */
        get_longitude(): number;
        /**
         * Sets the coordinates of the location
         * @param latitude the latitude
         * @param longitude the longitude
         */
        set_location(latitude: number, longitude: number): void;

        // Own virtual methods of Champlain-0.12.Location

        /**
         * Gets the latitude coordinate.
         */
        vfunc_get_latitude(): number;
        /**
         * Gets the longitude coordinate.
         */
        vfunc_get_longitude(): number;
        /**
         * Sets the coordinates of the location
         * @param latitude the latitude
         * @param longitude the longitude
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

export default Champlain;
// END
