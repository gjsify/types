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

    export namespace MapKey_t {
        export const $gtype: GObject.GType<MapKey_t>;
    }

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

    export namespace MapSource_t {
        export const $gtype: GObject.GType<MapSource_t>;
    }

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
            changed: () => void;
            'notify::auto-center': (pspec: GObject.ParamSpec) => void;
            'notify::auto-center-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::auto-download': (pspec: GObject.ParamSpec) => void;
            'notify::drag-limit': (pspec: GObject.ParamSpec) => void;
            'notify::gps-track-highlight-radius': (pspec: GObject.ParamSpec) => void;
            'notify::gps-track-point-radius': (pspec: GObject.ParamSpec) => void;
            'notify::gps-track-width': (pspec: GObject.ParamSpec) => void;
            'notify::image-format': (pspec: GObject.ParamSpec) => void;
            'notify::latitude': (pspec: GObject.ParamSpec) => void;
            'notify::longitude': (pspec: GObject.ParamSpec) => void;
            'notify::map-source': (pspec: GObject.ParamSpec) => void;
            'notify::map-x': (pspec: GObject.ParamSpec) => void;
            'notify::map-y': (pspec: GObject.ParamSpec) => void;
            'notify::max-zoom': (pspec: GObject.ParamSpec) => void;
            'notify::min-zoom': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-uri': (pspec: GObject.ParamSpec) => void;
            'notify::record-trip-history': (pspec: GObject.ParamSpec) => void;
            'notify::repo-uri': (pspec: GObject.ParamSpec) => void;
            'notify::show-gps-point': (pspec: GObject.ParamSpec) => void;
            'notify::show-trip-history': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-base': (pspec: GObject.ParamSpec) => void;
            'notify::tile-zoom-offset': (pspec: GObject.ParamSpec) => void;
            'notify::tiles-queued': (pspec: GObject.ParamSpec) => void;
            'notify::zoom': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
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
            zoom: number;
        }
    }

    class Map extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Map>;

        // Properties

        get auto_center(): boolean;
        set auto_center(val: boolean);
        get autoCenter(): boolean;
        set autoCenter(val: boolean);
        get auto_center_threshold(): number;
        set auto_center_threshold(val: number);
        get autoCenterThreshold(): number;
        set autoCenterThreshold(val: number);
        get auto_download(): boolean;
        set auto_download(val: boolean);
        get autoDownload(): boolean;
        set autoDownload(val: boolean);
        get drag_limit(): number;
        get dragLimit(): number;
        get gps_track_highlight_radius(): number;
        set gps_track_highlight_radius(val: number);
        get gpsTrackHighlightRadius(): number;
        set gpsTrackHighlightRadius(val: number);
        get gps_track_point_radius(): number;
        set gps_track_point_radius(val: number);
        get gpsTrackPointRadius(): number;
        set gpsTrackPointRadius(val: number);
        get gps_track_width(): number;
        set gps_track_width(val: number);
        get gpsTrackWidth(): number;
        set gpsTrackWidth(val: number);
        get image_format(): string;
        get imageFormat(): string;
        get latitude(): number;
        get longitude(): number;
        /**
         * A #OsmGpsMapSource_t representing the tile repository to use
         *
         * <note>
         * <para>
         * If you do not wish to use the default map tiles (provided by OpenStreeMap)
         * it is recommened that you set this property at construction, instead
         * of setting #OsmGpsMap:repo-uri.
         * </para>
         * </note>
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
         * of setting #OsmGpsMap:repo-uri.
         * </para>
         * </note>
         */
        get mapSource(): number;
        set mapSource(val: number);
        get map_x(): number;
        get mapX(): number;
        get map_y(): number;
        get mapY(): number;
        get max_zoom(): number;
        get maxZoom(): number;
        get min_zoom(): number;
        get minZoom(): number;
        get proxy_uri(): string;
        get proxyUri(): string;
        get record_trip_history(): boolean;
        set record_trip_history(val: boolean);
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
         * \#Q0 - Quad tree format, set of "0123"
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#YS - Not Implemented
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
         * you should construct the map by setting #OsmGpsMap:map-source and not
         * #OsmGpsMap:repo-uri. The #OsmGpsMap:repo-uri property is primarily
         * designed for applications that wish complete control of tile repository
         * management, or wish to use #OsmGpsMap with a tile repository it does not
         * explicitly support.
         * </para>
         * </note>
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
         * \#Q0 - Quad tree format, set of "0123"
         * </para>
         * </listitem>
         * <listitem>
         * <para>
         * \#YS - Not Implemented
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
         * you should construct the map by setting #OsmGpsMap:map-source and not
         * #OsmGpsMap:repo-uri. The #OsmGpsMap:repo-uri property is primarily
         * designed for applications that wish complete control of tile repository
         * management, or wish to use #OsmGpsMap with a tile repository it does not
         * explicitly support.
         * </para>
         * </note>
         */
        get repoUri(): string;
        /**
         * Controls whether the current gps point is shown on the map. Note that
         * for derived classes that implement the draw_gps_point vfunc, if this
         * property is %FALSE
         */
        get show_gps_point(): boolean;
        set show_gps_point(val: boolean);
        /**
         * Controls whether the current gps point is shown on the map. Note that
         * for derived classes that implement the draw_gps_point vfunc, if this
         * property is %FALSE
         */
        get showGpsPoint(): boolean;
        set showGpsPoint(val: boolean);
        get show_trip_history(): boolean;
        set show_trip_history(val: boolean);
        get showTripHistory(): boolean;
        set showTripHistory(val: boolean);
        /**
         * Either a full path or one of the special format URIs
         * #OSM_GPS_MAP_CACHE_DISABLED, #OSM_GPS_MAP_CACHE_AUTO,
         * #OSM_GPS_MAP_CACHE_FRIENDLY. Also see #OsmGpsMap:tile-cache-base for a
         * full understanding.
         *
         * #OSM_GPS_MAP_CACHE_DISABLED disables the on disk tile cache (so all tiles
         * are fetched from the network. #OSM_GPS_MAP_CACHE_AUTO causes the tile
         * cache to be /tile-cache-base/md5(repo-uri), where md5 is the md5sum
         * of #OsmGpsMap:repo-uri. #OSM_GPS_MAP_CACHE_FRIENDLY
         * causes the tile cache to be /tile-cache-base/friendlyname(repo-uri).
         *
         * Any other string is interpreted as a local path, i.e. /path/to/cache
         */
        get tile_cache(): string;
        set tile_cache(val: string);
        /**
         * Either a full path or one of the special format URIs
         * #OSM_GPS_MAP_CACHE_DISABLED, #OSM_GPS_MAP_CACHE_AUTO,
         * #OSM_GPS_MAP_CACHE_FRIENDLY. Also see #OsmGpsMap:tile-cache-base for a
         * full understanding.
         *
         * #OSM_GPS_MAP_CACHE_DISABLED disables the on disk tile cache (so all tiles
         * are fetched from the network. #OSM_GPS_MAP_CACHE_AUTO causes the tile
         * cache to be /tile-cache-base/md5(repo-uri), where md5 is the md5sum
         * of #OsmGpsMap:repo-uri. #OSM_GPS_MAP_CACHE_FRIENDLY
         * causes the tile cache to be /tile-cache-base/friendlyname(repo-uri).
         *
         * Any other string is interpreted as a local path, i.e. /path/to/cache
         */
        get tileCache(): string;
        set tileCache(val: string);
        /**
         * The base directory of the tile cache when you have constructed
         * the map with #OsmGpsMap:tile-cache set to #OSM_GPS_MAP_CACHE_AUTO or
         * #OSM_GPS_MAP_CACHE_FRIENDLY
         *
         * The string is interpreted as a local path, i.e. /path/to/cache. If NULL
         * is supplied, map tiles are cached starting in the users cache directory,
         * (as outlined in the
         * <ulink url="http://www.freedesktop.org/wiki/Specifications/basedir-spec">
         * <citetitle>XDG Base Directory Specification</citetitle></ulink>). To get the
         * base directory where map tiles will be cached call
         * osm_gps_map_get_default_cache_directory()
         */
        get tile_cache_base(): string;
        /**
         * The base directory of the tile cache when you have constructed
         * the map with #OsmGpsMap:tile-cache set to #OSM_GPS_MAP_CACHE_AUTO or
         * #OSM_GPS_MAP_CACHE_FRIENDLY
         *
         * The string is interpreted as a local path, i.e. /path/to/cache. If NULL
         * is supplied, map tiles are cached starting in the users cache directory,
         * (as outlined in the
         * <ulink url="http://www.freedesktop.org/wiki/Specifications/basedir-spec">
         * <citetitle>XDG Base Directory Specification</citetitle></ulink>). To get the
         * base directory where map tiles will be cached call
         * osm_gps_map_get_default_cache_directory()
         */
        get tileCacheBase(): string;
        get tile_zoom_offset(): number;
        get tileZoomOffset(): number;
        /**
         * The number of tiles currently waiting to download. Connect to
         * ::notify::tiles-queued if you want to be informed when this changes
         */
        get tiles_queued(): number;
        /**
         * The number of tiles currently waiting to download. Connect to
         * ::notify::tiles-queued if you want to be informed when this changes
         */
        get tilesQueued(): number;
        /**
         * The map zoom level. Connect to ::notify::zoom if you want to be informed
         * when this changes.
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

        static ['new'](): Map;

        // Signals

        connect<K extends keyof Map.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Map.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Map.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Map.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default_cache_directory(): string;
        static source_get_friendly_name(source: MapSource_t): string;
        static source_get_image_format(source: MapSource_t): string;
        static source_get_max_zoom(source: MapSource_t): number;
        static source_get_min_zoom(source: MapSource_t): number;
        static source_get_repo_uri(source: MapSource_t): string;
        static source_is_valid(source: MapSource_t): boolean;

        // Virtual methods

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
         * cacel a large number of tiles queued using osm_gps_map_download_maps()
         */
        download_cancel_all(): void;
        /**
         * Downloads all tiles over the supplied zoom range in the rectangular
         * region specified by pt1 (north west corner) to pt2 (south east corner)
         * @param pt1
         * @param pt2
         * @param zoom_start
         * @param zoom_end
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
         * @param event A #GtkEventButton that occured on the map
         * @returns The point on the globe corresponding to the click
         */
        get_event_location(event: Gdk.EventButton): MapPoint;
        get_scale(): number;
        gps_add(latitude: number, longitude: number, heading: number): void;
        gps_clear(): void;
        gps_get_track(): MapTrack;
        image_add(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf): MapImage;
        image_add_with_alignment(
            latitude: number,
            longitude: number,
            image: GdkPixbuf.Pixbuf,
            xalign: number,
            yalign: number,
        ): MapImage;
        image_add_with_alignment_z(
            latitude: number,
            longitude: number,
            image: GdkPixbuf.Pixbuf,
            xalign: number,
            yalign: number,
            zorder: number,
        ): MapImage;
        image_add_z(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, zorder: number): MapImage;
        image_remove(image: MapImage): boolean;
        image_remove_all(): void;
        layer_add(layer: MapLayer): void;
        layer_remove(layer: MapLayer): boolean;
        layer_remove_all(): void;
        map_redraw(): boolean;
        map_redraw_idle(): void;
        polygon_add(poly: MapPolygon): void;
        polygon_remove(poly: MapPolygon): boolean;
        polygon_remove_all(): void;
        /**
         * Scrolls the map by `dx,` `dy` pixels (positive north, east)
         * @param dx
         * @param dy
         */
        scroll(dx: number, dy: number): void;
        set_center(latitude: number, longitude: number): void;
        set_center_and_zoom(latitude: number, longitude: number, zoom: number): void;
        /**
         * Associates a keyboard shortcut with the supplied `keyval`
         * (as returned by #gdk_keyval_from_name or simiar). The action given in `key`
         * will be triggered when the corresponding `keyval` is pressed. By default
         * no keyboard shortcuts are associated.
         * @param key a #OsmGpsMapKey_t
         * @param keyval
         */
        set_keyboard_shortcut(key: MapKey_t | null, keyval: number): void;
        set_zoom(zoom: number): number;
        set_zoom_offset(zoom_offset: number): void;
        track_add(track: MapTrack): void;
        track_remove(track: MapTrack): boolean;
        track_remove_all(): void;
        /**
         * Zoom and center the map so that both points fit inside the window.
         * @param latitude1
         * @param latitude2
         * @param longitude1
         * @param longitude2
         */
        zoom_fit_bbox(latitude1: number, latitude2: number, longitude1: number, longitude2: number): void;
        zoom_in(): number;
        zoom_out(): number;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MapImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::point': (pspec: GObject.ParamSpec) => void;
            'notify::rotation': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::z-order': (pspec: GObject.ParamSpec) => void;
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

    class MapImage extends GObject.Object {
        static $gtype: GObject.GType<MapImage>;

        // Properties

        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);
        get point(): MapPoint;
        set point(val: MapPoint);
        get rotation(): number;
        set rotation(val: number);
        get x_align(): number;
        set x_align(val: number);
        get xAlign(): number;
        set xAlign(val: number);
        get y_align(): number;
        set y_align(val: number);
        get yAlign(): number;
        set yAlign(val: number);
        get z_order(): number;
        set z_order(val: number);
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

        static ['new'](): MapImage;

        // Signals

        connect<K extends keyof MapImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MapImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        draw(cr: cairo.Context, rect: Gdk.Rectangle): void;
        get_point(): MapPoint;
        get_rotation(): number;
        get_zorder(): number;
        set_rotation(rot: number): void;
    }

    namespace MapOsd {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dpad-radius': (pspec: GObject.ParamSpec) => void;
            'notify::osd-x': (pspec: GObject.ParamSpec) => void;
            'notify::osd-y': (pspec: GObject.ParamSpec) => void;
            'notify::show-coordinates': (pspec: GObject.ParamSpec) => void;
            'notify::show-crosshair': (pspec: GObject.ParamSpec) => void;
            'notify::show-dpad': (pspec: GObject.ParamSpec) => void;
            'notify::show-gps-in-dpad': (pspec: GObject.ParamSpec) => void;
            'notify::show-gps-in-zoom': (pspec: GObject.ParamSpec) => void;
            'notify::show-scale': (pspec: GObject.ParamSpec) => void;
            'notify::show-zoom': (pspec: GObject.ParamSpec) => void;
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

    class MapOsd extends GObject.Object implements MapLayer {
        static $gtype: GObject.GType<MapOsd>;

        // Properties

        /**
         * The dpad radius property.
         */
        get dpad_radius(): number;
        set dpad_radius(val: number);
        /**
         * The dpad radius property.
         */
        get dpadRadius(): number;
        set dpadRadius(val: number);
        /**
         * The osd x property.
         */
        get osd_x(): number;
        set osd_x(val: number);
        /**
         * The osd x property.
         */
        get osdX(): number;
        set osdX(val: number);
        /**
         * The osd y property.
         */
        get osd_y(): number;
        set osd_y(val: number);
        /**
         * The osd y property.
         */
        get osdY(): number;
        set osdY(val: number);
        /**
         * The show coordinates of map centre property.
         */
        get show_coordinates(): boolean;
        set show_coordinates(val: boolean);
        /**
         * The show coordinates of map centre property.
         */
        get showCoordinates(): boolean;
        set showCoordinates(val: boolean);
        /**
         * The show crosshair at map centre property.
         */
        get show_crosshair(): boolean;
        set show_crosshair(val: boolean);
        /**
         * The show crosshair at map centre property.
         */
        get showCrosshair(): boolean;
        set showCrosshair(val: boolean);
        /**
         * The show dpad for map navigation property.
         */
        get show_dpad(): boolean;
        set show_dpad(val: boolean);
        /**
         * The show dpad for map navigation property.
         */
        get showDpad(): boolean;
        set showDpad(val: boolean);
        /**
         * The show gps indicator in middle of dpad property.
         */
        get show_gps_in_dpad(): boolean;
        set show_gps_in_dpad(val: boolean);
        /**
         * The show gps indicator in middle of dpad property.
         */
        get showGpsInDpad(): boolean;
        set showGpsInDpad(val: boolean);
        /**
         * The show gps indicator in middle of zoom control property.
         */
        get show_gps_in_zoom(): boolean;
        set show_gps_in_zoom(val: boolean);
        /**
         * The show gps indicator in middle of zoom control property.
         */
        get showGpsInZoom(): boolean;
        set showGpsInZoom(val: boolean);
        /**
         * The show scale on the map property.
         */
        get show_scale(): boolean;
        set show_scale(val: boolean);
        /**
         * The show scale on the map property.
         */
        get showScale(): boolean;
        set showScale(val: boolean);
        /**
         * The show zoom control for map navigation property.
         */
        get show_zoom(): boolean;
        set show_zoom(val: boolean);
        /**
         * The show zoom control for map navigation property.
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

        static ['new'](): MapOsd;

        // Signals

        connect<K extends keyof MapOsd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapOsd.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapOsd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapOsd.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapOsd.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MapOsd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        busy(): boolean;
        button_press(map: Map, event: Gdk.EventButton): boolean;
        draw(map: Map, cr: cairo.Context): void;
        render(map: Map): void;
        vfunc_busy(): boolean;
        vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;
        vfunc_draw(map: Map, cr: cairo.Context): void;
        vfunc_render(map: Map): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MapPolygon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::shaded': (pspec: GObject.ParamSpec) => void;
            'notify::track': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            editable: boolean;
            shaded: boolean;
            track: any;
            visible: boolean;
        }
    }

    class MapPolygon extends GObject.Object {
        static $gtype: GObject.GType<MapPolygon>;

        // Properties

        get editable(): boolean;
        set editable(val: boolean);
        get shaded(): boolean;
        set shaded(val: boolean);
        get track(): any;
        set track(val: any);
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

        static ['new'](): MapPolygon;

        // Signals

        connect<K extends keyof MapPolygon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapPolygon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapPolygon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapPolygon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapPolygon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MapPolygon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MapTrack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'point-added': (arg0: MapPoint) => void;
            'point-changed': (arg0: number) => void;
            'point-inserted': (arg0: number) => void;
            'point-removed': (arg0: number) => void;
            'notify::alpha': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::line-width': (pspec: GObject.ParamSpec) => void;
            'notify::track': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alpha: number;
            color: Gdk.RGBA;
            editable: boolean;
            line_width: number;
            lineWidth: number;
            track: any;
            visible: boolean;
        }
    }

    class MapTrack extends GObject.Object {
        static $gtype: GObject.GType<MapTrack>;

        // Properties

        get alpha(): number;
        set alpha(val: number);
        get color(): Gdk.RGBA;
        set color(val: Gdk.RGBA);
        get editable(): boolean;
        set editable(val: boolean);
        get line_width(): number;
        set line_width(val: number);
        get lineWidth(): number;
        set lineWidth(val: number);
        get track(): any;
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

        static ['new'](): MapTrack;

        // Signals

        connect<K extends keyof MapTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MapTrack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * track (in,out): a #OsmGpsMapTrack
         * `point` (in): point to add
         * @param point
         */
        add_point(point: MapPoint): void;
        get_color(color: Gdk.RGBA): void;
        /**
         * `track` (in): a #OsmGpsMapTrack
         * @returns the length of the track in meters.
         */
        get_length(): number;
        get_point(pos: number): MapPoint;
        /**
         * `track` (in): a #OsmGpsMapTrack
         * @returns list of #OsmGpsMapPoint
         */
        get_points(): MapPoint[];
        insert_point(np: MapPoint, pos: number): void;
        n_points(): number;
        /**
         * `track` (in): a #OsmGpsMapTrack
         * @param pos Position of the point to remove
         */
        remove_point(pos: number): void;
        set_color(color: Gdk.RGBA): void;
    }

    type MapClass = typeof Map;
    type MapImageClass = typeof MapImage;
    abstract class MapImagePrivate {
        static $gtype: GObject.GType<MapImagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MapLayerIface = typeof MapLayer;
    type MapOsdClass = typeof MapOsd;
    abstract class MapOsdPrivate {
        static $gtype: GObject.GType<MapOsdPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class MapPoint {
        static $gtype: GObject.GType<MapPoint>;

        // Fields

        rlat: number;
        rlon: number;

        // Constructors

        constructor(
            properties?: Partial<{
                rlat: number;
                rlon: number;
            }>,
        );
        _init(...args: any[]): void;

        static new_degrees(lat: number, lon: number): MapPoint;

        static new_radians(rlat: number, rlon: number): MapPoint;

        // Methods

        copy(): MapPoint;
        free(): void;
        /**
         * Returns the lagitude and longitude in degrees.
         * of the current window, i.e the top left and bottom right corners.
         */
        get_degrees(): [number, number];
        get_radians(rlat: number, rlon: number): void;
        set_degrees(lat: number, lon: number): void;
        set_radians(rlat: number, rlon: number): void;
    }

    type MapPolygonClass = typeof MapPolygon;
    abstract class MapPolygonPrivate {
        static $gtype: GObject.GType<MapPolygonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class MapPrivate {
        static $gtype: GObject.GType<MapPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MapTrackClass = typeof MapTrack;
    abstract class MapTrackPrivate {
        static $gtype: GObject.GType<MapTrackPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace MapLayer {
        /**
         * Interface for implementing MapLayer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_busy(): boolean;
            vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;
            vfunc_draw(map: Map, cr: cairo.Context): void;
            vfunc_render(map: Map): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MapLayerNamespace {
        $gtype: GObject.GType<MapLayer>;
        prototype: MapLayer;
    }
    interface MapLayer extends GObject.Object, MapLayer.Interface {
        // Methods

        busy(): boolean;
        button_press(map: Map, event: Gdk.EventButton): boolean;
        draw(map: Map, cr: cairo.Context): void;
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
