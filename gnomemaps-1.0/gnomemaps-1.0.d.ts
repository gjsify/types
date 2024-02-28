/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomemaps-1.0-ambient.d.ts';
import './gnomemaps-1.0-import.d.ts';
/**
 * GnomeMaps-1.0
 */

import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GeocodeGlib from '@girs/geocodeglib-1.0';
import type Json from '@girs/json-1.0';
import type Champlain from '@girs/champlain-0.12';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export namespace GnomeMaps {
    enum ContactStoreState {
        /**
         * Initial state
         */
        INITIAL,
        /**
         * Loading
         */
        LOADING,
        /**
         * Loaded
         */
        LOADED,
    }
    function osm_finalize(): void;
    function osm_init(): void;
    function osm_parse(content: string, length: number): OSMObject;
    interface ContactGeocodeCallback {
        (contact: Contact): void;
    }
    interface ContactStoreLookupCallback {
        (contact: Contact): void;
    }
    module Contact {
        // Constructor properties interface
    }

    class Contact extends GObject.Object {
        // Own properties of GnomeMaps-1.0.Contact

        /**
         * The bounding box for the contact.
         */
        readonly bounding_box: Champlain.BoundingBox;
        /**
         * The bounding box for the contact.
         */
        readonly boundingBox: Champlain.BoundingBox;
        /**
         * The icon of the contact.
         */
        icon: Gio.Icon;
        /**
         * The unique id of the contact.
         */
        id: string;
        /**
         * The name of the contact.
         */
        name: string;

        // Constructors of GnomeMaps-1.0.Contact

        static ['new'](): Contact;

        // Owm methods of GnomeMaps-1.0.Contact

        add_place(place: GeocodeGlib.Place): void;
        geocode(callback: ContactGeocodeCallback): void;
        get_places(): GeocodeGlib.Place[];
    }

    module ContactStore {
        // Constructor properties interface
    }

    class ContactStore extends GObject.Object {
        // Own properties of GnomeMaps-1.0.ContactStore

        /**
         * The type of the contact.
         */
        readonly state: ContactStoreState;

        // Constructors of GnomeMaps-1.0.ContactStore

        static ['new'](): ContactStore;

        // Owm methods of GnomeMaps-1.0.ContactStore

        get_contacts(): Contact[];
        /**
         * Load contacts from available backends.
         */
        load(): void;
        lookup(id: string, callback: ContactStoreLookupCallback): void;
    }

    module FileTileSource {
        // Constructor properties interface
    }

    /**
     * The #MapsFileTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    class FileTileSource extends Champlain.TileSource {
        // Own properties of GnomeMaps-1.0.FileTileSource

        /**
         * The maximum zoom level of the tile source.
         */
        readonly max_zoom: number;
        /**
         * The maximum zoom level of the tile source.
         */
        readonly maxZoom: number;
        /**
         * The minimum zoom level of the tile source.
         */
        readonly min_zoom: number;
        /**
         * The minimum zoom level of the tile source.
         */
        readonly minZoom: number;
        /**
         * The path to the tile source.
         */
        path: string;
        /**
         * Set a bounding box to limit the world to. No tiles will be loaded
         * outside of this bounding box. It will not be possible to scroll outside
         * of this bounding box.
         */
        readonly world: Champlain.BoundingBox;

        // Owm methods of GnomeMaps-1.0.FileTileSource

        prepare(): boolean;
    }

    module OSMChangeset {
        // Constructor properties interface
    }

    class OSMChangeset extends GObject.Object {
        // Own properties of GnomeMaps-1.0.OSMChangeset

        /**
         * The comment of the changes.
         */
        comment: string;
        created_by: string;
        createdBy: string;

        // Constructors of GnomeMaps-1.0.OSMChangeset

        static ['new'](comment?: string | null, created_by?: string | null): OSMChangeset;

        // Owm methods of GnomeMaps-1.0.OSMChangeset

        serialize(): string;
    }

    module OSMNode {
        // Constructor properties interface
    }

    class OSMNode extends OSMObject {
        // Own properties of GnomeMaps-1.0.OSMNode

        /**
         * The latitude of the node.
         */
        latitude: number;
        /**
         * The longitude of the node.
         */
        longitude: number;

        // Constructors of GnomeMaps-1.0.OSMNode

        static ['new'](id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode;
    }

    module OSMOAuthProxyCall {
        // Constructor properties interface
    }

    class OSMOAuthProxyCall extends Rest.OAuthProxyCall {
        // Constructors of GnomeMaps-1.0.OSMOAuthProxyCall

        static ['new'](proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall;
    }

    module OSMObject {
        // Constructor properties interface
    }

    abstract class OSMObject extends GObject.Object {
        // Own properties of GnomeMaps-1.0.OSMObject

        /**
         * The OSM changeset for the current upload of the object.
         */
        changeset: number;
        /**
         * The OSM id of the object.
         */
        id: number;
        /**
         * The latest OSM version of the object.
         */
        version: number;

        // Owm methods of GnomeMaps-1.0.OSMObject

        delete_tag(key: string): void;
        get_tag(key: string): string;
        serialize(): string;
        set_tag(key: string, value: string): void;
    }

    module OSMRelation {
        // Constructor properties interface
    }

    class OSMRelation extends OSMObject {
        // Constructors of GnomeMaps-1.0.OSMRelation

        static ['new'](id: number, version: number, changeset: number): OSMRelation;

        // Owm methods of GnomeMaps-1.0.OSMRelation

        add_member(role: string, type: number, ref: number): void;
    }

    module OSMWay {
        // Constructor properties interface
    }

    class OSMWay extends OSMObject {
        // Constructors of GnomeMaps-1.0.OSMWay

        static ['new'](id: number, version: number, changeset: number): OSMWay;

        // Owm methods of GnomeMaps-1.0.OSMWay

        add_node_id(id: number): void;
    }

    class ContactClass {}

    class ContactPrivate {}

    class ContactStoreClass {}

    class ContactStorePrivate {}

    class FileTileSourceClass {}

    class FileTileSourcePrivate {}

    class OSMChangesetClass {}

    class OSMChangesetPrivate {}

    class OSMNodeClass {}

    class OSMNodePrivate {}

    class OSMOAuthProxyCallClass {}

    class OSMOAuthProxyCallPrivate {}

    class OSMObjectClass {}

    class OSMObjectPrivate {}

    class OSMRelationClass {}

    class OSMRelationPrivate {}

    class OSMWayClass {}

    class OSMWayPrivate {}

    class _ContactClass {}

    class _ContactStoreClass {}

    class _OSMChangesetClass {}

    class _OSMNodeClass {}

    class _OSMRelationClass {}

    class _OSMWayClass {}

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
