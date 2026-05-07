
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace OsmGpsMap {

    /**
     * OsmGpsMap-1.0
     */


    /**
     * @gir-type Enum
     */
    enum MapKey_t {
        FULLSCREEN,
        ZOOMIN,
        ZOOMOUT,
        UP,
        DOWN,
        LEFT,
        RIGHT,
        MAX,
    }


    /**
     * @gir-type Enum
     */
    enum MapSource_t {
        NULL,
        OPENSTREETMAP,
        OPENSTREETMAP_RENDERER,
        OPENAERIALMAP,
        MAPS_FOR_FREE,
        OPENCYCLEMAP,
        OSM_PUBLIC_TRANSPORT,
        GOOGLE_STREET,
        GOOGLE_SATELLITE,
        GOOGLE_HYBRID,
        VIRTUAL_EARTH_STREET,
        VIRTUAL_EARTH_SATELLITE,
        VIRTUAL_EARTH_HYBRID,
        OSMC_TRAILS,
        LAST,
    }


    const MAP_CACHE_AUTO: string;

    const MAP_CACHE_DISABLED: string;

    const MAP_CACHE_FRIENDLY: string;

    const MAP_INVALID: number;

    namespace Map {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * The {@link OsmGpsMap.Map.SignalSignatures.changed | OsmGpsMap.Map::changed} signal is emitted any time the map zoom or map center
             * is chaged (such as by dragging or zooming).
             * 
             * <note>
             * <para>
             * If you are only interested in the map zoom, then you can simply connect
             * to ::notify::zoom
             * </para>
             * </note>
             * @signal
             * @run-first
             */
            changed: () => void;
            "notify::auto-center": (pspec: GObject.ParamSpec) => void;
            "notify::auto-center-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::auto-download": (pspec: GObject.ParamSpec) => void;
            "notify::drag-limit": (pspec: GObject.ParamSpec) => void;
            "notify::gps-track-highlight-radius": (pspec: GObject.ParamSpec) => void;
            "notify::gps-track-point-radius": (pspec: GObject.ParamSpec) => void;
            "notify::gps-track-width": (pspec: GObject.ParamSpec) => void;
            "notify::image-format": (pspec: GObject.ParamSpec) => void;
            "notify::latitude": (pspec: GObject.ParamSpec) => void;
            "notify::longitude": (pspec: GObject.ParamSpec) => void;
            "notify::map-source": (pspec: GObject.ParamSpec) => void;
            "notify::map-x": (pspec: GObject.ParamSpec) => void;
            "notify::map-y": (pspec: GObject.ParamSpec) => void;
            "notify::max-zoom": (pspec: GObject.ParamSpec) => void;
            "notify::min-zoom": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-uri": (pspec: GObject.ParamSpec) => void;
            "notify::record-trip-history": (pspec: GObject.ParamSpec) => void;
            "notify::repo-uri": (pspec: GObject.ParamSpec) => void;
            "notify::show-gps-point": (pspec: GObject.ParamSpec) => void;
            "notify::show-trip-history": (pspec: GObject.ParamSpec) => void;
            "notify::tile-cache": (pspec: GObject.ParamSpec) => void;
            "notify::tile-cache-base": (pspec: GObject.ParamSpec) => void;
            "notify::tile-zoom-offset": (pspec: GObject.ParamSpec) => void;
            "notify::tiles-queued": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
            "notify::zoom": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            auto_center: boolean;
            autoCenter: boolean;
            auto_center_threshold: number;
            autoCenterThreshold: number;
            auto_download: boolean;
            autoDownload: boolean;
            drag_limit: number;
            dragLimit: number;
            gps_track_highlight_radius: number;
            gpsTrackHighlightRadius: number;
            gps_track_point_radius: number;
            gpsTrackPointRadius: number;
            gps_track_width: number;
            gpsTrackWidth: number;
            image_format: string;
            imageFormat: string;
            latitude: number;
            longitude: number;
            map_source: number;
            mapSource: number;
            map_x: number;
            mapX: number;
            map_y: number;
            mapY: number;
            max_zoom: number;
            maxZoom: number;
            min_zoom: number;
            minZoom: number;
            proxy_uri: string;
            proxyUri: string;
            record_trip_history: boolean;
            recordTripHistory: boolean;
            repo_uri: string;
            repoUri: string;
            show_gps_point: boolean;
            showGpsPoint: boolean;
            show_trip_history: boolean;
            showTripHistory: boolean;
            tile_cache: string;
            tileCache: string;
            tile_cache_base: string;
            tileCacheBase: string;
            tile_zoom_offset: number;
            tileZoomOffset: number;
            tiles_queued: number;
            tilesQueued: number;
            user_agent: string;
            userAgent: string;
            zoom: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Map extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Map>;

        // Properties
        /**
         * @default true
         */
        get auto_center(): boolean;
        set auto_center(val: boolean);

        /**
         * @default true
         */
        get autoCenter(): boolean;
        set autoCenter(val: boolean);

        /**
         * @default 0.25
         */
        get auto_center_threshold(): number;
        set auto_center_threshold(val: number);

        /**
         * @default 0.25
         */
        get autoCenterThreshold(): number;
        set autoCenterThreshold(val: number);

        /**
         * @default true
         */
        get auto_download(): boolean;
        set auto_download(val: boolean);

        /**
         * @default true
         */
        get autoDownload(): boolean;
        set autoDownload(val: boolean);

        /**
         * @construct-only
         * @default 10
         */
        get drag_limit(): number;

        /**
         * @construct-only
         * @default 10
         */
        get dragLimit(): number;

        /**
         * @default 20
         */
        get gps_track_highlight_radius(): number;
        set gps_track_highlight_radius(val: number);

        /**
         * @default 20
         */
        get gpsTrackHighlightRadius(): number;
        set gpsTrackHighlightRadius(val: number);

        /**
         * @default 5
         */
        get gps_track_point_radius(): number;
        set gps_track_point_radius(val: number);

        /**
         * @default 5
         */
        get gpsTrackPointRadius(): number;
        set gpsTrackPointRadius(val: number);

        /**
         * @default 4
         */
        get gps_track_width(): number;
        set gps_track_width(val: number);

        /**
         * @default 4
         */
        get gpsTrackWidth(): number;
        set gpsTrackWidth(val: number);

        /**
         * @construct-only
         * @default png
         */
        get image_format(): string;

        /**
         * @construct-only
         * @default png
         */
        get imageFormat(): string;

        /**
         * @read-only
         * @default 0
         */
        get latitude(): number;

        /**
         * @read-only
         * @default 0
         */
        get longitude(): number;

        /**
         * A #OsmGpsMapSource_t representing the tile repository to use
         * 
         * <note>
         * <para>
         * If you do not wish to use the default map tiles (provided by OpenStreeMap)
         * it is recommened that you set this property at construction, instead
         * of setting {@link OsmGpsMap.Map.repo_uri}.
         * </para>
         * </note>
         * @default 0
         */
        get map_source(): number;
        set map_source(val: number);

        /**
         * A #OsmGpsMapSource_t representing the tile repository to use
         * 
         * <note>
         * <para>
         * If you do not wish to use the default map tiles (provided by OpenStreeMap)
         * it is recommened that you set this property at construction, instead
         * of setting {@link OsmGpsMap.Map.repo_uri}.
         * </para>
         * </note>
         * @default 0
         */
        get mapSource(): number;
        set mapSource(val: number);

        /**
         * @construct-only
         * @default 890
         */
        get map_x(): number;

        /**
         * @construct-only
         * @default 890
         */
        get mapX(): number;

        /**
         * @construct-only
         * @default 515
         */
        get map_y(): number;

        /**
         * @construct-only
         * @default 515
         */
        get mapY(): number;

        /**
         * @construct-only
         * @default 20
         */
        get max_zoom(): number;

        /**
         * @construct-only
         * @default 20
         */
        get maxZoom(): number;

        /**
         * @construct-only
         * @default 1
         */
        get min_zoom(): number;

        /**
         * @construct-only
         * @default 1
         */
        get minZoom(): number;

        /**
         * @construct-only
         * @default null
         */
        get proxy_uri(): string;

        /**
         * @construct-only
         * @default null
         */
        get proxyUri(): string;

        /**
         * @default true
         */
        get record_trip_history(): boolean;
        set record_trip_history(val: boolean);

        /**
         * @default true
         */
        get recordTripHistory(): boolean;
        set recordTripHistory(val: boolean);

        /**
         * A URI string which defines the location and format to fetch tiles
         * for the map. The string is of the format
         * "http://tile.openstreetmap.org/&num;Z/&num;X/&num;Y.png". Characters
         * that begin with &num; are treated as tokens and replaced according to
         * the following rules;
         * 
         * <itemizedlist>
         * <listitem>
         * <para>
         * \#X - X-tile, slippy map format
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#Y - Y-tile, slippy map format, mercator projection
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#Z - Zoom level, where min_zoom &gt;= zoom &lt;= max_zoom
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#S - Zoom level, where -max_zoom &gt;= (zoom-max_zoom) &lt;= min_zoom
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#Q - Quad tree format, set of "qrts"
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \`Q0` - Quad tree format, set of "0123"
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \`YS` - Not Implemented
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#R - Random integer in range [0,4]
         * </para>
         * </listitem>
         * </itemizedlist>
         * 
         * <note>
         * <para>
         * If you do not wish to use the default map tiles (provided by OpenStreeMap)
         * it is recommened that you use one of the predefined map sources, and thus
         * you should construct the map by setting {@link OsmGpsMap.Map.map_source} and not
         * {@link OsmGpsMap.Map.repo_uri}. The {@link OsmGpsMap.Map.repo_uri} property is primarily
         * designed for applications that wish complete control of tile repository
         * management, or wish to use {@link OsmGpsMap.Map} with a tile repository it does not
         * explicitly support.
         * </para>
         * </note>
         * @construct-only
         * @default https://tile.openstreetmap.org/#Z/#X/#Y.png
         */
        get repo_uri(): string;

        /**
         * A URI string which defines the location and format to fetch tiles
         * for the map. The string is of the format
         * "http://tile.openstreetmap.org/&num;Z/&num;X/&num;Y.png". Characters
         * that begin with &num; are treated as tokens and replaced according to
         * the following rules;
         * 
         * <itemizedlist>
         * <listitem>
         * <para>
         * \#X - X-tile, slippy map format
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#Y - Y-tile, slippy map format, mercator projection
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#Z - Zoom level, where min_zoom &gt;= zoom &lt;= max_zoom
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#S - Zoom level, where -max_zoom &gt;= (zoom-max_zoom) &lt;= min_zoom
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#Q - Quad tree format, set of "qrts"
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \`Q0` - Quad tree format, set of "0123"
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \`YS` - Not Implemented
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#R - Random integer in range [0,4]
         * </para>
         * </listitem>
         * </itemizedlist>
         * 
         * <note>
         * <para>
         * If you do not wish to use the default map tiles (provided by OpenStreeMap)
         * it is recommened that you use one of the predefined map sources, and thus
         * you should construct the map by setting {@link OsmGpsMap.Map.map_source} and not
         * {@link OsmGpsMap.Map.repo_uri}. The {@link OsmGpsMap.Map.repo_uri} property is primarily
         * designed for applications that wish complete control of tile repository
         * management, or wish to use {@link OsmGpsMap.Map} with a tile repository it does not
         * explicitly support.
         * </para>
         * </note>
         * @construct-only
         * @default https://tile.openstreetmap.org/#Z/#X/#Y.png
         */
        get repoUri(): string;

        /**
         * Controls whether the current gps point is shown on the map. Note that
         * for derived classes that implement the draw_gps_point vfunc, if this
         * property is `false`
         * @default true
         */
        get show_gps_point(): boolean;
        set show_gps_point(val: boolean);

        /**
         * Controls whether the current gps point is shown on the map. Note that
         * for derived classes that implement the draw_gps_point vfunc, if this
         * property is `false`
         * @default true
         */
        get showGpsPoint(): boolean;
        set showGpsPoint(val: boolean);

        /**
         * @default true
         */
        get show_trip_history(): boolean;
        set show_trip_history(val: boolean);

        /**
         * @default true
         */
        get showTripHistory(): boolean;
        set showTripHistory(val: boolean);

        /**
         * Either a full path or one of the special format URIs
         * #OSM_GPS_MAP_CACHE_DISABLED, #OSM_GPS_MAP_CACHE_AUTO,
         * #OSM_GPS_MAP_CACHE_FRIENDLY. Also see {@link OsmGpsMap.Map.tile_cache_base} for a
         * full understanding.
         * 
         * #OSM_GPS_MAP_CACHE_DISABLED disables the on disk tile cache (so all tiles
         * are fetched from the network. #OSM_GPS_MAP_CACHE_AUTO causes the tile
         * cache to be /tile-cache-base/md5(repo-uri), where md5 is the md5sum
         * of {@link OsmGpsMap.Map.repo_uri}. #OSM_GPS_MAP_CACHE_FRIENDLY
         * causes the tile cache to be /tile-cache-base/friendlyname(repo-uri).
         * 
         * Any other string is interpreted as a local path, i.e. /path/to/cache
         * @default auto://
         */
        get tile_cache(): string;
        set tile_cache(val: string);

        /**
         * Either a full path or one of the special format URIs
         * #OSM_GPS_MAP_CACHE_DISABLED, #OSM_GPS_MAP_CACHE_AUTO,
         * #OSM_GPS_MAP_CACHE_FRIENDLY. Also see {@link OsmGpsMap.Map.tile_cache_base} for a
         * full understanding.
         * 
         * #OSM_GPS_MAP_CACHE_DISABLED disables the on disk tile cache (so all tiles
         * are fetched from the network. #OSM_GPS_MAP_CACHE_AUTO causes the tile
         * cache to be /tile-cache-base/md5(repo-uri), where md5 is the md5sum
         * of {@link OsmGpsMap.Map.repo_uri}. #OSM_GPS_MAP_CACHE_FRIENDLY
         * causes the tile cache to be /tile-cache-base/friendlyname(repo-uri).
         * 
         * Any other string is interpreted as a local path, i.e. /path/to/cache
         * @default auto://
         */
        get tileCache(): string;
        set tileCache(val: string);

        /**
         * The base directory of the tile cache when you have constructed
         * the map with {@link OsmGpsMap.Map.tile_cache} set to #OSM_GPS_MAP_CACHE_AUTO or
         * #OSM_GPS_MAP_CACHE_FRIENDLY
         * 
         * The string is interpreted as a local path, i.e. /path/to/cache. If NULL
         * is supplied, map tiles are cached starting in the users cache directory,
         * (as outlined in the
         * <ulink url="http://www.freedesktop.org/wiki/Specifications/basedir-spec">
         * <citetitle>XDG Base Directory Specification</citetitle></ulink>). To get the
         * base directory where map tiles will be cached call
         * `osm_gps_map_get_default_cache_directory()`
         * @construct-only
         * @default null
         */
        get tile_cache_base(): string;

        /**
         * The base directory of the tile cache when you have constructed
         * the map with {@link OsmGpsMap.Map.tile_cache} set to #OSM_GPS_MAP_CACHE_AUTO or
         * #OSM_GPS_MAP_CACHE_FRIENDLY
         * 
         * The string is interpreted as a local path, i.e. /path/to/cache. If NULL
         * is supplied, map tiles are cached starting in the users cache directory,
         * (as outlined in the
         * <ulink url="http://www.freedesktop.org/wiki/Specifications/basedir-spec">
         * <citetitle>XDG Base Directory Specification</citetitle></ulink>). To get the
         * base directory where map tiles will be cached call
         * `osm_gps_map_get_default_cache_directory()`
         * @construct-only
         * @default null
         */
        get tileCacheBase(): string;

        /**
         * @construct-only
         * @default 0
         */
        get tile_zoom_offset(): number;

        /**
         * @construct-only
         * @default 0
         */
        get tileZoomOffset(): number;

        /**
         * The number of tiles currently waiting to download. Connect to
         * ::notify::tiles-queued if you want to be informed when this changes
         * @read-only
         * @default 0
         */
        get tiles_queued(): number;

        /**
         * The number of tiles currently waiting to download. Connect to
         * ::notify::tiles-queued if you want to be informed when this changes
         * @read-only
         * @default 0
         */
        get tilesQueued(): number;

        /**
         * The default user-agent for downloading tiles from the {@link OsmGpsMap.Map.map_source}
         * is "libosmgpsmap/VERSION". The value of {@link OsmGpsMap.Map.user_agent} will be
         * appended to it.
         * @since 1.2.0
         * @default null
         */
        get user_agent(): string;
        set user_agent(val: string);

        /**
         * The default user-agent for downloading tiles from the {@link OsmGpsMap.Map.map_source}
         * is "libosmgpsmap/VERSION". The value of {@link OsmGpsMap.Map.user_agent} will be
         * appended to it.
         * @since 1.2.0
         * @default null
         */
        get userAgent(): string;
        set userAgent(val: string);

        /**
         * The map zoom level. Connect to ::notify::zoom if you want to be informed
         * when this changes.
         * @construct-only
         * @default 3
         */
        get zoom(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Map.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Map;

        // Signals
        /** @signal */
        connect<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Map.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Map.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns (transfer full): the default cache directory for the library, that is the base
         * directory to which the full cache path is appended. If
         * {@link OsmGpsMap.Map.tile_cache_base} is omitted from the constructor then this value
         * is used.
         */
        static get_default_cache_directory(): string;

        /**
         * Get copyright information for the source
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_get_copyright(source: MapSource_t): string;

        /**
         * Get friendly name for source
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_get_friendly_name(source: MapSource_t): string;

        /**
         * Get tile image format for the source
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_get_image_format(source: MapSource_t): string;

        /**
         * Get maximum zoom level for the source
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_get_max_zoom(source: MapSource_t): number;

        /**
         * Get minimum zoom level for the source
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_get_min_zoom(source: MapSource_t): number;

        /**
         * Get repository URI address for the source
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_get_repo_uri(source: MapSource_t): string;

        /**
         * Check whether source is considered valid
         * @param source a #OsmGpsMapSource_t source id
         */
        static source_is_valid(source: MapSource_t): boolean;

        // Virtual methods
        /**
         * @param cr 
         * @virtual
         */
        vfunc_draw_gps_point(cr: cairo.Context): void;

        // Methods
        /**
         * Convert the given location on the globe to the corresponding
         * pixel locations on the map.
         * @param pt location
         */
        convert_geographic_to_screen(pt: MapPoint): [number, number];

        /**
         * Convert the given pixel location on the map into corresponding
         * location on the globe
         * @param pixel_x pixel location on map, x axis
         * @param pixel_y pixel location on map, y axis
         */
        convert_screen_to_geographic(pixel_x: number, pixel_y: number): MapPoint;

        /**
         * Cancels all tiles currently being downloaded. Typically used if you wish to
         * cacel a large number of tiles queued using `osm_gps_map_download_maps()`
         */
        download_cancel_all(): void;

        /**
         * Downloads all tiles over the supplied zoom range in the rectangular
         * region specified by pt1 (north west corner) to pt2 (south east corner)
         * @param pt1 nort west corner
         * @param pt2 south east corner
         * @param zoom_start start of zoom range
         * @param zoom_end end of zoom range
         */
        download_maps(pt1: MapPoint, pt2: MapPoint, zoom_start: number, zoom_end: number): void;

        /**
         * Returns the geographic locations of the bounding box describing the contents
         * of the current window, i.e the top left and bottom right corners.
         */
        get_bbox(): [MapPoint, MapPoint];

        /**
         * A convenience function for getting the geographic location of events,
         * such as mouse clicks, on the map
         * 
         * Free returned point with g_free
         * @param event A `GtkEventButton` that occured on the map
         * @returns The point on the globe corresponding to the click
         */
        get_event_location(event: Gdk.EventButton): MapPoint;

        /**
         * Get the scale of the map at the center, in meters/pixel.
         * @returns the scale of the map at the center, in meters/pixel.
         */
        get_scale(): number;

        /**
         * Set current GPS point to given lat/lon point with given heading.
         * If record-trip-history is set, add point to trip history
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         * @param heading GPS degrees or #OSM_GPS_MAP_INVALID to disable showing heading
         */
        gps_add(latitude: number, longitude: number, heading: number): void;

        /**
         * Clear GPS track history
         */
        gps_clear(): void;

        /**
         * Get internal GPS track history
         * @returns The {@link OsmGpsMap.MapTrack} of the internal GPS track, i.e. that which is modified when calling `osm_gps_map_gps_add()`. You must not free this.
         */
        gps_get_track(): MapTrack;

        /**
         * Creates `OsmGpsMapImage` with given params and adds it to map images
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         * @param image Image pixbuf
         * @returns A {@link OsmGpsMap.MapImage} representing the added pixbuf
         */
        image_add(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf): MapImage;

        /**
         * Creates `OsmGpsMapImage` with given params and adds it to map images
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         * @param image Image pixbuf
         * @param xalign x-align of image
         * @param yalign y-align of image
         * @returns A {@link OsmGpsMap.MapImage} representing the added pixbuf
         */
        image_add_with_alignment(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, xalign: number, yalign: number): MapImage;

        /**
         * Creates `OsmGpsMapImage` with given params and adds it to map images
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         * @param image Image pixbuf
         * @param xalign x-align of image
         * @param yalign y-align of image
         * @param zorder z-order of image
         * @returns A {@link OsmGpsMap.MapImage} representing the added pixbuf
         */
        image_add_with_alignment_z(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, xalign: number, yalign: number, zorder: number): MapImage;

        /**
         * Creates `OsmGpsMapImage` with given params and adds it to map images
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         * @param image Image pixbuf
         * @param zorder z-order of image
         * @returns A {@link OsmGpsMap.MapImage} representing the added pixbuf
         */
        image_add_z(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, zorder: number): MapImage;

        /**
         * Remove image from list of images
         * @param image a `OsmGpsMapImage` to remove
         * @returns true if image was on list of images
         */
        image_remove(image: MapImage): boolean;

        /**
         * Remove all images from map
         */
        image_remove_all(): void;

        /**
         * Add layer to map
         * @param layer a {@link OsmGpsMap.MapLayer} object
         */
        layer_add(layer: MapLayer): void;

        /**
         * Remove layer from map
         * @param layer a {@link OsmGpsMap.MapLayer} object
         * @returns whether layer was found and removed
         */
        layer_remove(layer: MapLayer): boolean;

        /**
         * Remove all layers from map
         */
        layer_remove_all(): void;

        map_redraw(): boolean;

        map_redraw_idle(): void;

        /**
         * @param poly 
         */
        polygon_add(poly: MapPolygon): void;

        /**
         * @param poly 
         */
        polygon_remove(poly: MapPolygon): boolean;

        polygon_remove_all(): void;

        /**
         * Scrolls the map by `dx`, `dy` pixels (positive north, east)
         * @param dx pixels to scroll in NS (positive: scroll nort, negative: scroll south)
         * @param dy pixels to scroll in EW (positive: scroll east, negative: scroll west)
         */
        scroll(dx: number, dy: number): void;

        /**
         * Set map center, does not change zoom level
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         */
        set_center(latitude: number, longitude: number): void;

        /**
         * Set map center and desired zoom level
         * @param latitude latitude in degrees
         * @param longitude longitude in degrees
         * @param zoom desired zoom level
         */
        set_center_and_zoom(latitude: number, longitude: number, zoom: number): void;

        /**
         * Associates a keyboard shortcut with the supplied `keyval`
         * (as returned by `gdk_keyval_from_name` or simiar). The action given in `key`
         * will be triggered when the corresponding `keyval` is pressed. By default
         * no keyboard shortcuts are associated.
         * @param key a #OsmGpsMapKey_t
         * @param keyval a keyval to bind
         */
        set_keyboard_shortcut(key: MapKey_t, keyval: number): void;

        /**
         * Set map zoom to the desired zoom level
         * @param zoom Desired zoom level
         * @returns zoom level
         */
        set_zoom(zoom: number): number;

        /**
         * Set tile zoom offset
         * @param zoom_offset tile zoom offset
         */
        set_zoom_offset(zoom_offset: number): void;

        /**
         * Add a track to map
         * @param track a `OsmGpsMapTrack` object
         */
        track_add(track: MapTrack): void;

        /**
         * Remove given track from map
         * @param track a {@link OsmGpsMap.MapTrack} object
         */
        track_remove(track: MapTrack): boolean;

        /**
         * Remove all tracks
         */
        track_remove_all(): void;

        /**
         * Zoom and center the map so that both points fit inside the window.
         * @param latitude1 latitude of 1st point in degrees
         * @param latitude2 latitude of 2nd point in degrees
         * @param longitude1 longtitude of 1st point in degrees
         * @param longitude2 longtitude of 2nd point in degrees
         */
        zoom_fit_bbox(latitude1: number, latitude2: number, longitude1: number, longitude2: number): void;

        /**
         * Zoom in by 1 step
         * @returns zoom level
         */
        zoom_in(): number;

        /**
         * Zoom out by 1 step
         * @returns zoom level
         */
        zoom_out(): number;
    }


    namespace MapImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::point": (pspec: GObject.ParamSpec) => void;
            "notify::rotation": (pspec: GObject.ParamSpec) => void;
            "notify::x-align": (pspec: GObject.ParamSpec) => void;
            "notify::y-align": (pspec: GObject.ParamSpec) => void;
            "notify::z-order": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
            point: MapPoint;
            rotation: number;
            x_align: number;
            xAlign: number;
            y_align: number;
            yAlign: number;
            z_order: number;
            zOrder: number;
        }
    }

    /**
     * @gir-type Class
     */
    class MapImage extends GObject.Object {
        static $gtype: GObject.GType<MapImage>;

        // Properties
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        get point(): MapPoint;
        set point(val: MapPoint);

        /**
         * @default 0
         */
        get rotation(): number;
        set rotation(val: number);

        /**
         * @default 0.5
         */
        get x_align(): number;
        set x_align(val: number);

        /**
         * @default 0.5
         */
        get xAlign(): number;
        set xAlign(val: number);

        /**
         * @default 0.5
         */
        get y_align(): number;
        set y_align(val: number);

        /**
         * @default 0.5
         */
        get yAlign(): number;
        set yAlign(val: number);

        /**
         * @default 0
         */
        get z_order(): number;
        set z_order(val: number);

        /**
         * @default 0
         */
        get zOrder(): number;
        set zOrder(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MapImage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MapImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MapImage;

        // Signals
        /** @signal */
        connect<K extends keyof MapImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapImage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MapImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapImage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MapImage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Draw image to given cairo context
         * @param cr cairo context
         * @param rect bounding rectangle
         */
        draw(cr: cairo.Context, rect: Gdk.Rectangle): Gdk.Rectangle;

        /**
         * Get image location point
         * @returns location point
         */
        get_point(): MapPoint;

        /**
         * Get image rotation
         * @returns rotation
         */
        get_rotation(): number;

        /**
         * Get image z-order
         * @returns z-order
         */
        get_zorder(): number;

        /**
         * Set image rotation
         * @param rot image rotation in degrees
         */
        set_rotation(rot: number): void;
    }


    namespace MapOsd {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::dpad-radius": (pspec: GObject.ParamSpec) => void;
            "notify::osd-x": (pspec: GObject.ParamSpec) => void;
            "notify::osd-y": (pspec: GObject.ParamSpec) => void;
            "notify::show-coordinates": (pspec: GObject.ParamSpec) => void;
            "notify::show-copyright": (pspec: GObject.ParamSpec) => void;
            "notify::show-crosshair": (pspec: GObject.ParamSpec) => void;
            "notify::show-dpad": (pspec: GObject.ParamSpec) => void;
            "notify::show-gps-in-dpad": (pspec: GObject.ParamSpec) => void;
            "notify::show-gps-in-zoom": (pspec: GObject.ParamSpec) => void;
            "notify::show-scale": (pspec: GObject.ParamSpec) => void;
            "notify::show-zoom": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MapLayer.ConstructorProps {
            dpad_radius: number;
            dpadRadius: number;
            osd_x: number;
            osdX: number;
            osd_y: number;
            osdY: number;
            show_coordinates: boolean;
            showCoordinates: boolean;
            show_copyright: boolean;
            showCopyright: boolean;
            show_crosshair: boolean;
            showCrosshair: boolean;
            show_dpad: boolean;
            showDpad: boolean;
            show_gps_in_dpad: boolean;
            showGpsInDpad: boolean;
            show_gps_in_zoom: boolean;
            showGpsInZoom: boolean;
            show_scale: boolean;
            showScale: boolean;
            show_zoom: boolean;
            showZoom: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MapOsd extends GObject.Object implements MapLayer {
        static $gtype: GObject.GType<MapOsd>;

        // Properties
        /**
         * The dpad radius property.
         * @default 30
         */
        get dpad_radius(): number;
        set dpad_radius(val: number);

        /**
         * The dpad radius property.
         * @default 30
         */
        get dpadRadius(): number;
        set dpadRadius(val: number);

        /**
         * The osd x property.
         * @default 10
         */
        get osd_x(): number;
        set osd_x(val: number);

        /**
         * The osd x property.
         * @default 10
         */
        get osdX(): number;
        set osdX(val: number);

        /**
         * The osd y property.
         * @default 10
         */
        get osd_y(): number;
        set osd_y(val: number);

        /**
         * The osd y property.
         * @default 10
         */
        get osdY(): number;
        set osdY(val: number);

        /**
         * The show coordinates of map centre property.
         * @default true
         */
        get show_coordinates(): boolean;
        set show_coordinates(val: boolean);

        /**
         * The show coordinates of map centre property.
         * @default true
         */
        get showCoordinates(): boolean;
        set showCoordinates(val: boolean);

        /**
         * The show copyright property.
         * @since 1.2.0
         * @default true
         */
        get show_copyright(): boolean;
        set show_copyright(val: boolean);

        /**
         * The show copyright property.
         * @since 1.2.0
         * @default true
         */
        get showCopyright(): boolean;
        set showCopyright(val: boolean);

        /**
         * The show crosshair at map centre property.
         * @default false
         */
        get show_crosshair(): boolean;
        set show_crosshair(val: boolean);

        /**
         * The show crosshair at map centre property.
         * @default false
         */
        get showCrosshair(): boolean;
        set showCrosshair(val: boolean);

        /**
         * The show dpad for map navigation property.
         * @default false
         */
        get show_dpad(): boolean;
        set show_dpad(val: boolean);

        /**
         * The show dpad for map navigation property.
         * @default false
         */
        get showDpad(): boolean;
        set showDpad(val: boolean);

        /**
         * The show gps indicator in middle of dpad property.
         * @default false
         */
        get show_gps_in_dpad(): boolean;
        set show_gps_in_dpad(val: boolean);

        /**
         * The show gps indicator in middle of dpad property.
         * @default false
         */
        get showGpsInDpad(): boolean;
        set showGpsInDpad(val: boolean);

        /**
         * The show gps indicator in middle of zoom control property.
         * @default false
         */
        get show_gps_in_zoom(): boolean;
        set show_gps_in_zoom(val: boolean);

        /**
         * The show gps indicator in middle of zoom control property.
         * @default false
         */
        get showGpsInZoom(): boolean;
        set showGpsInZoom(val: boolean);

        /**
         * The show scale on the map property.
         * @default true
         */
        get show_scale(): boolean;
        set show_scale(val: boolean);

        /**
         * The show scale on the map property.
         * @default true
         */
        get showScale(): boolean;
        set showScale(val: boolean);

        /**
         * The show zoom control for map navigation property.
         * @default false
         */
        get show_zoom(): boolean;
        set show_zoom(val: boolean);

        /**
         * The show zoom control for map navigation property.
         * @default false
         */
        get showZoom(): boolean;
        set showZoom(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MapOsd.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MapOsd.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MapOsd;

        // Signals
        /** @signal */
        connect<K extends keyof MapOsd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapOsd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MapOsd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapOsd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MapOsd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapOsd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Check whether layer is busy (eg drawing an animation)
         * @returns layer busy state
         */
        busy(): boolean;

        /**
         * Handle button event
         * @param map a {@link OsmGpsMap.Map} widget
         * @param event a {@link Gdk.EventButton} event
         * @returns whether even had been handled
         */
        button_press(map: Map, event: Gdk.EventButton): boolean;

        /**
         * Draw layer on map
         * @param map a {@link OsmGpsMap.Map} widget
         * @param cr a cairo context to draw to
         */
        draw(map: Map, cr: cairo.Context): void;

        /**
         * Render layer on map
         * @param map a {@link OsmGpsMap.Map} widget
         */
        render(map: Map): void;

        /**
         * Check whether layer is busy (eg drawing an animation)
         * @virtual
         */
        vfunc_busy(): boolean;

        /**
         * Handle button event
         * @param map a {@link OsmGpsMap.Map} widget
         * @param event a {@link Gdk.EventButton} event
         * @virtual
         */
        vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;

        /**
         * Draw layer on map
         * @param map a {@link OsmGpsMap.Map} widget
         * @param cr a cairo context to draw to
         * @virtual
         */
        vfunc_draw(map: Map, cr: cairo.Context): void;

        /**
         * Render layer on map
         * @param map a {@link OsmGpsMap.Map} widget
         * @virtual
         */
        vfunc_render(map: Map): void;
    }


    namespace MapPolygon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::breakable": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::shade-alpha": (pspec: GObject.ParamSpec) => void;
            "notify::shaded": (pspec: GObject.ParamSpec) => void;
            "notify::track": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            breakable: boolean;
            editable: boolean;
            shade_alpha: number;
            shadeAlpha: number;
            shaded: boolean;
            track: never;
            visible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MapPolygon extends GObject.Object {
        static $gtype: GObject.GType<MapPolygon>;

        // Properties
        /**
         * @default true
         */
        get breakable(): boolean;
        set breakable(val: boolean);

        /**
         * @default false
         */
        get editable(): boolean;
        set editable(val: boolean);

        /**
         * @default 0.5
         */
        get shade_alpha(): number;
        set shade_alpha(val: number);

        /**
         * @default 0.5
         */
        get shadeAlpha(): number;
        set shadeAlpha(val: number);

        /**
         * @default true
         */
        get shaded(): boolean;
        set shaded(val: boolean);

        get track(): null;
        set track(val: never);

        /**
         * @default true
         */
        get visible(): boolean;
        set visible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MapPolygon.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MapPolygon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MapPolygon;

        // Signals
        /** @signal */
        connect<K extends keyof MapPolygon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapPolygon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MapPolygon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapPolygon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MapPolygon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapPolygon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get track from the polygon
         * @returns The {@link OsmGpsMap.MapTrack} of the polygon
         */
        get_track(): MapTrack;
    }


    namespace MapTrack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link OsmGpsMap.MapTrack.SignalSignatures.point_added | OsmGpsMap.MapTrack::point-added} signal is emitted whenever a {@link OsmGpsMap.MapPoint}
             * is added to the {@link OsmGpsMap.MapTrack}.
             * @signal
             * @run-first
             */
            "point-added": (arg0: MapPoint) => void;
            /**
             * @signal
             * @run-first
             */
            "point-changed": (arg0: number) => void;
            /**
             * @signal
             * @run-first
             */
            "point-inserted": (arg0: number) => void;
            /**
             * @signal
             * @run-first
             */
            "point-removed": (arg0: number) => void;
            "notify::alpha": (pspec: GObject.ParamSpec) => void;
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::line-width": (pspec: GObject.ParamSpec) => void;
            "notify::track": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alpha: number;
            color: Gdk.RGBA;
            editable: boolean;
            line_width: number;
            lineWidth: number;
            track: never;
            visible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MapTrack extends GObject.Object {
        static $gtype: GObject.GType<MapTrack>;

        // Properties
        /**
         * @default 0.6
         */
        get alpha(): number;
        set alpha(val: number);

        get color(): Gdk.RGBA;
        set color(val: Gdk.RGBA);

        /**
         * @default false
         */
        get editable(): boolean;
        set editable(val: boolean);

        /**
         * @default 4
         */
        get line_width(): number;
        set line_width(val: number);

        /**
         * @default 4
         */
        get lineWidth(): number;
        set lineWidth(val: number);

        /**
         * @construct-only
         */
        get track(): null;

        /**
         * @default true
         */
        get visible(): boolean;
        set visible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MapTrack.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MapTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MapTrack;

        // Signals
        /** @signal */
        connect<K extends keyof MapTrack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapTrack.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MapTrack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapTrack.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MapTrack.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapTrack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Add a point to track
         * @param track a {@link OsmGpsMap.MapTrack}
         * @param point a {@link OsmGpsMap.MapPoint} point to add
         */
        static add_point(track: MapTrack, point: MapPoint): MapTrack;

        // Methods
        /**
         * Get track color
         */
        get_color(): Gdk.RGBA;

        /**
         * Get track length in meters
         * @returns the length of the track in meters.
         */
        get_length(): number;

        /**
         * Get a {@link OsmGpsMap.MapPoint} point at `pos` of given track
         * @param pos Position of the point to get
         * @returns a {@link OsmGpsMap.MapPoint}
         */
        get_point(pos: number): MapPoint;

        /**
         * Get list of points in the track
         * @returns list of {@link OsmGpsMap.MapPoint}
         */
        get_points(): MapPoint[];

        /**
         * Instert point `np` at given postition `pos`
         * @param np a {@link OsmGpsMap.MapPoint}
         * @param pos Position for the point
         */
        insert_point(np: MapPoint, pos: number): void;

        /**
         * Get number of points in the track
         * @returns the number of points in the track.
         */
        n_points(): number;

        /**
         * Remove track point at `pos` position in point list
         * @param pos Position of the point to remove
         */
        remove_point(pos: number): void;

        /**
         * Set track color
         * @param color new track color
         */
        set_color(color: Gdk.RGBA): void;
    }


    /**
     * @gir-type Alias
     */
    type MapClass = typeof Map;

    /**
     * @gir-type Alias
     */
    type MapImageClass = typeof MapImage;

    /**
     * @gir-type Struct
     */
    abstract class MapImagePrivate {
        static $gtype: GObject.GType<MapImagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MapLayerIface = typeof MapLayer;

    /**
     * @gir-type Alias
     */
    type MapOsdClass = typeof MapOsd;

    /**
     * @gir-type Struct
     */
    abstract class MapOsdPrivate {
        static $gtype: GObject.GType<MapOsdPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class MapPoint {
        static $gtype: GObject.GType<MapPoint>;

        // Fields
        rlat: number;

        rlon: number;

        user_data: null;

        // Constructors

        constructor(properties?: Partial<{
            rlat: number;
            rlon: number;
            user_data: null;
        }>);

        static new_degrees(lat: number, lon: number): MapPoint;

        static new_degrees_with_user_data(lat: number, lon: number, user_data: null): MapPoint;

        static new_radians(rlat: number, rlon: number): MapPoint;

        static new_radians_with_user_data(rlat: number, rlon: number, user_data: null): MapPoint;

        // Methods
        /**
         * Create a copy of a point
         * @returns Copied point
         */
        copy(): MapPoint;

        /**
         * Free point object
         */
        free(): void;

        /**
         * Returns the lagitude and longitude in degrees.
         */
        get_degrees(): [number, number];

        /**
         * Returns the lagitude and longitude in radians.
         */
        get_radians(): [number, number];

        /**
         * Get user data stored in point
         * @returns The {@link OsmGpsMap.MapPoint} user data
         */
        get_user_data(): null;

        /**
         * Sets the lagitude and longitude in degrees.
         * @param lat latitude in degrees
         * @param lon longitude in degrees
         */
        set_degrees(lat: number, lon: number): void;

        /**
         * Sets the lagitude and longitude in radians.
         * @param rlat latitude in radians
         * @param rlon longitude in radians
         */
        set_radians(rlat: number, rlon: number): void;

        /**
         * Store user data in point
         * @param user_data user data
         */
        set_user_data(user_data: null): void;
    }


    /**
     * @gir-type Alias
     */
    type MapPolygonClass = typeof MapPolygon;

    /**
     * @gir-type Struct
     */
    abstract class MapPolygonPrivate {
        static $gtype: GObject.GType<MapPolygonPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class MapPrivate {
        static $gtype: GObject.GType<MapPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MapTrackClass = typeof MapTrack;

    /**
     * @gir-type Struct
     */
    abstract class MapTrackPrivate {
        static $gtype: GObject.GType<MapTrackPrivate>;
    }


    namespace MapLayer {
        /**
         * Interface for implementing MapLayer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Check whether layer is busy (eg drawing an animation)
             * @virtual
             */
            vfunc_busy(): boolean;

            /**
             * Handle button event
             * @param map a {@link OsmGpsMap.Map} widget
             * @param event a {@link Gdk.EventButton} event
             * @virtual
             */
            vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;

            /**
             * Draw layer on map
             * @param map a {@link OsmGpsMap.Map} widget
             * @param cr a cairo context to draw to
             * @virtual
             */
            vfunc_draw(map: Map, cr: cairo.Context): void;

            /**
             * Render layer on map
             * @param map a {@link OsmGpsMap.Map} widget
             * @virtual
             */
            vfunc_render(map: Map): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface MapLayerNamespace {
        $gtype: GObject.GType<MapLayer>;
        prototype: MapLayer;
    }
    /**
     * @gir-type Interface
     */
    interface MapLayer extends GObject.Object, MapLayer.Interface {

        // Methods
        /**
         * Check whether layer is busy (eg drawing an animation)
         * @returns layer busy state
         */
        busy(): boolean;

        /**
         * Handle button event
         * @param map a {@link OsmGpsMap.Map} widget
         * @param event a {@link Gdk.EventButton} event
         * @returns whether even had been handled
         */
        button_press(map: Map, event: Gdk.EventButton): boolean;

        /**
         * Draw layer on map
         * @param map a {@link OsmGpsMap.Map} widget
         * @param cr a cairo context to draw to
         */
        draw(map: Map, cr: cairo.Context): void;

        /**
         * Render layer on map
         * @param map a {@link OsmGpsMap.Map} widget
         */
        render(map: Map): void;
    }


    export const MapLayer: MapLayerNamespace & {
        new (): MapLayer; // This allows `obj instanceof MapLayer`
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

export default OsmGpsMap;

// END
