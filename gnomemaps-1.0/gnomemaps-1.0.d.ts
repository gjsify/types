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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bounding_box: Champlain.BoundingBox;
            boundingBox: Champlain.BoundingBox;
            icon: Gio.Icon;
            id: string;
            name: string;
        }
    }

    class Contact extends GObject.Object {
        static $gtype: GObject.GType<Contact>;

        // Own properties of GnomeMaps.Contact

        /**
         * The bounding box for the contact.
         */
        get bounding_box(): Champlain.BoundingBox;
        /**
         * The bounding box for the contact.
         */
        get boundingBox(): Champlain.BoundingBox;
        /**
         * The icon of the contact.
         */
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        /**
         * The unique id of the contact.
         */
        get id(): string;
        set id(val: string);
        /**
         * The name of the contact.
         */
        get name(): string;
        set name(val: string);

        // Constructors of GnomeMaps.Contact

        constructor(properties?: Partial<Contact.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Contact;

        // Own methods of GnomeMaps.Contact

        add_place(place: GeocodeGlib.Place): void;
        geocode(callback: ContactGeocodeCallback): void;
        get_places(): GeocodeGlib.Place[];
    }

    module ContactStore {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: ContactStoreState;
        }
    }

    class ContactStore extends GObject.Object {
        static $gtype: GObject.GType<ContactStore>;

        // Own properties of GnomeMaps.ContactStore

        /**
         * The type of the contact.
         */
        get state(): ContactStoreState;

        // Constructors of GnomeMaps.ContactStore

        constructor(properties?: Partial<ContactStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContactStore;

        // Own methods of GnomeMaps.ContactStore

        get_contacts(): Contact[];
        /**
         * Load contacts from available backends.
         */
        load(): void;
        lookup(id: string, callback: ContactStoreLookupCallback): void;
    }

    module FileTileSource {
        // Constructor properties interface

        interface ConstructorProps extends Champlain.TileSource.ConstructorProps {
            max_zoom: number;
            maxZoom: number;
            min_zoom: number;
            minZoom: number;
            path: string;
            world: Champlain.BoundingBox;
        }
    }

    /**
     * The #MapsFileTileSource structure contains only private data
     * and should be accessed using the provided API
     */
    class FileTileSource extends Champlain.TileSource {
        static $gtype: GObject.GType<FileTileSource>;

        // Own properties of GnomeMaps.FileTileSource

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
        /**
         * Set a bounding box to limit the world to. No tiles will be loaded
         * outside of this bounding box. It will not be possible to scroll outside
         * of this bounding box.
         */
        get world(): Champlain.BoundingBox;

        // Constructors of GnomeMaps.FileTileSource

        constructor(properties?: Partial<FileTileSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GnomeMaps.FileTileSource

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

    module OSMOAuthProxyCall {
        // Constructor properties interface

        interface ConstructorProps extends Rest.OAuthProxyCall.ConstructorProps {}
    }

    class OSMOAuthProxyCall extends Rest.OAuthProxyCall {
        static $gtype: GObject.GType<OSMOAuthProxyCall>;

        // Constructors of GnomeMaps.OSMOAuthProxyCall

        constructor(properties?: Partial<OSMOAuthProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall;
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

    type ContactClass = typeof Contact;
    abstract class ContactPrivate {
        static $gtype: GObject.GType<ContactPrivate>;

        // Constructors of GnomeMaps.ContactPrivate

        _init(...args: any[]): void;
    }

    type ContactStoreClass = typeof ContactStore;
    abstract class ContactStorePrivate {
        static $gtype: GObject.GType<ContactStorePrivate>;

        // Constructors of GnomeMaps.ContactStorePrivate

        _init(...args: any[]): void;
    }

    type FileTileSourceClass = typeof FileTileSource;
    abstract class FileTileSourcePrivate {
        static $gtype: GObject.GType<FileTileSourcePrivate>;

        // Constructors of GnomeMaps.FileTileSourcePrivate

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

    type OSMOAuthProxyCallClass = typeof OSMOAuthProxyCall;
    abstract class OSMOAuthProxyCallPrivate {
        static $gtype: GObject.GType<OSMOAuthProxyCallPrivate>;

        // Constructors of GnomeMaps.OSMOAuthProxyCallPrivate

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

    abstract class _ContactClass {
        static $gtype: GObject.GType<_ContactClass>;

        // Constructors of GnomeMaps._ContactClass

        _init(...args: any[]): void;
    }

    abstract class _ContactStoreClass {
        static $gtype: GObject.GType<_ContactStoreClass>;

        // Constructors of GnomeMaps._ContactStoreClass

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
