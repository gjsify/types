/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomemaps-1.0-ambient.d.ts';

/**
 * GnomeMaps-1.0
 */

import type Shumate from '@girs/shumate-1.0';
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

export namespace GnomeMaps {
    function osm_finalize(): void;
    function osm_init(): void;
    function osm_parse(content: string, length: number): OSMObject;
    function osm_parse_user_details(content: string): string;
    module FileDataSource {
        // Constructor properties interface

        interface ConstructorProps extends Shumate.DataSource.ConstructorProps {
            max_zoom: number;
            maxZoom: number;
            min_zoom: number;
            minZoom: number;
            path: string;
        }
    }

    /**
     * The #MapsFileDataSource structure contains only private data
     * and should be accessed using the provided API
     */
    class FileDataSource extends Shumate.DataSource {
        static $gtype: GObject.GType<FileDataSource>;

        // Own properties of GnomeMaps.FileDataSource

        /**
         * The maximum zoom level of the tile source.
         */
        get max_zoom(): number;
        /**
         * The maximum zoom level of the tile source.
         */
        get maxZoom(): number;
        /**
         * The minimum zoom level of the tile source.
         */
        get min_zoom(): number;
        /**
         * The minimum zoom level of the tile source.
         */
        get minZoom(): number;
        /**
         * The path to the tile source.
         */
        get path(): string;
        set path(val: string);

        // Constructors of GnomeMaps.FileDataSource

        constructor(properties?: Partial<FileDataSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GnomeMaps.FileDataSource

        prepare(): boolean;
    }

    module OSMChangeset {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            comment: string;
            created_by: string;
            createdBy: string;
        }
    }

    class OSMChangeset extends GObject.Object {
        static $gtype: GObject.GType<OSMChangeset>;

        // Own properties of GnomeMaps.OSMChangeset

        /**
         * The comment of the changes.
         */
        get comment(): string;
        set comment(val: string);
        get created_by(): string;
        set created_by(val: string);
        get createdBy(): string;
        set createdBy(val: string);

        // Constructors of GnomeMaps.OSMChangeset

        constructor(properties?: Partial<OSMChangeset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](comment?: string | null, created_by?: string | null): OSMChangeset;

        // Own methods of GnomeMaps.OSMChangeset

        serialize(): string;
    }

    module OSMNode {
        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {
            latitude: number;
            longitude: number;
        }
    }

    class OSMNode extends OSMObject {
        static $gtype: GObject.GType<OSMNode>;

        // Own properties of GnomeMaps.OSMNode

        /**
         * The latitude of the node.
         */
        get latitude(): number;
        set latitude(val: number);
        /**
         * The longitude of the node.
         */
        get longitude(): number;
        set longitude(val: number);

        // Constructors of GnomeMaps.OSMNode

        constructor(properties?: Partial<OSMNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode;
    }

    module OSMObject {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            changeset: number;
            id: number;
            version: number;
        }
    }

    abstract class OSMObject extends GObject.Object {
        static $gtype: GObject.GType<OSMObject>;

        // Own properties of GnomeMaps.OSMObject

        /**
         * The OSM changeset for the current upload of the object.
         */
        get changeset(): number;
        set changeset(val: number);
        /**
         * The OSM id of the object.
         */
        get id(): number;
        set id(val: number);
        /**
         * The latest OSM version of the object.
         */
        get version(): number;
        set version(val: number);

        // Constructors of GnomeMaps.OSMObject

        constructor(properties?: Partial<OSMObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GnomeMaps.OSMObject

        delete_tag(key: string): void;
        get_tag(key: string): string;
        get_tags(): GLib.HashTable<string, string>;
        serialize(): string;
        set_tag(key: string, value: string): void;
    }

    module OSMRelation {
        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {}
    }

    class OSMRelation extends OSMObject {
        static $gtype: GObject.GType<OSMRelation>;

        // Constructors of GnomeMaps.OSMRelation

        constructor(properties?: Partial<OSMRelation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number): OSMRelation;

        // Own methods of GnomeMaps.OSMRelation

        add_member(role: string, type: number, ref: number): void;
    }

    module OSMWay {
        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {}
    }

    class OSMWay extends OSMObject {
        static $gtype: GObject.GType<OSMWay>;

        // Constructors of GnomeMaps.OSMWay

        constructor(properties?: Partial<OSMWay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number): OSMWay;

        // Own methods of GnomeMaps.OSMWay

        add_node_id(id: number): void;
    }

    module Shield {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Shield extends GObject.Object {
        static $gtype: GObject.GType<Shield>;

        // Constructors of GnomeMaps.Shield

        constructor(properties?: Partial<Shield.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GnomeMaps.Shield

        draw(ref: string, name: string, color: string, scale: number): Shumate.VectorSprite;
    }

    module SpriteSource {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_scheme: string;
            colorScheme: string;
        }
    }

    class SpriteSource extends GObject.Object {
        static $gtype: GObject.GType<SpriteSource>;

        // Own properties of GnomeMaps.SpriteSource

        get color_scheme(): string;
        get colorScheme(): string;

        // Constructors of GnomeMaps.SpriteSource

        constructor(properties?: Partial<SpriteSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color_scheme: string): SpriteSource;

        // Own methods of GnomeMaps.SpriteSource

        /**
         * Loads shield definitions from a JSON string.
         * @param json a JSON string
         */
        load_shield_defs(json: string): void;
        /**
         * Sets the sprite sheet's fallback function.
         * @param sprite_sheet a [class@Shumate.VectorSpriteSheet]
         */
        set_fallback(sprite_sheet: Shumate.VectorSpriteSheet): void;
    }

    module SyncMapSource {
        // Constructor properties interface

        interface ConstructorProps extends Shumate.MapSource.ConstructorProps {}
    }

    /**
     * Wrapper of ShumateMapSource encapsulating fill_tile_async and
     * fill_tile_finish into a synchronous file_tile vfunc as work-around for
     * https://gitlab.gnome.org/GNOME/gjs/-/issues/72
     *
     * The #MapsSyncMapSource structure contains only private data
     * and should be accessed using the provided API
     */
    abstract class SyncMapSource extends Shumate.MapSource {
        static $gtype: GObject.GType<SyncMapSource>;

        // Constructors of GnomeMaps.SyncMapSource

        constructor(properties?: Partial<SyncMapSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of GnomeMaps.SyncMapSource

        vfunc_fill_tile(tile: Shumate.Tile): void;
    }

    type FileDataSourceClass = typeof FileDataSource;
    abstract class FileDataSourcePrivate {
        static $gtype: GObject.GType<FileDataSourcePrivate>;

        // Constructors of GnomeMaps.FileDataSourcePrivate

        _init(...args: any[]): void;
    }

    type OSMChangesetClass = typeof OSMChangeset;
    abstract class OSMChangesetPrivate {
        static $gtype: GObject.GType<OSMChangesetPrivate>;

        // Constructors of GnomeMaps.OSMChangesetPrivate

        _init(...args: any[]): void;
    }

    type OSMNodeClass = typeof OSMNode;
    abstract class OSMNodePrivate {
        static $gtype: GObject.GType<OSMNodePrivate>;

        // Constructors of GnomeMaps.OSMNodePrivate

        _init(...args: any[]): void;
    }

    type OSMObjectClass = typeof OSMObject;
    abstract class OSMObjectPrivate {
        static $gtype: GObject.GType<OSMObjectPrivate>;

        // Constructors of GnomeMaps.OSMObjectPrivate

        _init(...args: any[]): void;
    }

    type OSMRelationClass = typeof OSMRelation;
    abstract class OSMRelationPrivate {
        static $gtype: GObject.GType<OSMRelationPrivate>;

        // Constructors of GnomeMaps.OSMRelationPrivate

        _init(...args: any[]): void;
    }

    type OSMWayClass = typeof OSMWay;
    abstract class OSMWayPrivate {
        static $gtype: GObject.GType<OSMWayPrivate>;

        // Constructors of GnomeMaps.OSMWayPrivate

        _init(...args: any[]): void;
    }

    type ShieldClass = typeof Shield;
    type SpriteSourceClass = typeof SpriteSource;
    type SyncMapSourceClass = typeof SyncMapSource;
    abstract class SyncMapSourcePrivate {
        static $gtype: GObject.GType<SyncMapSourcePrivate>;

        // Constructors of GnomeMaps.SyncMapSourcePrivate

        _init(...args: any[]): void;
    }

    abstract class _OSMChangesetClass {
        static $gtype: GObject.GType<_OSMChangesetClass>;

        // Constructors of GnomeMaps._OSMChangesetClass

        _init(...args: any[]): void;
    }

    abstract class _OSMNodeClass {
        static $gtype: GObject.GType<_OSMNodeClass>;

        // Constructors of GnomeMaps._OSMNodeClass

        _init(...args: any[]): void;
    }

    abstract class _OSMRelationClass {
        static $gtype: GObject.GType<_OSMRelationClass>;

        // Constructors of GnomeMaps._OSMRelationClass

        _init(...args: any[]): void;
    }

    abstract class _OSMWayClass {
        static $gtype: GObject.GType<_OSMWayClass>;

        // Constructors of GnomeMaps._OSMWayClass

        _init(...args: any[]): void;
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

export default GnomeMaps;
// END
