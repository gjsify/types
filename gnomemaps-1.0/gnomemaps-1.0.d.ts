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
import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GeocodeGlib from '@girs/geocodeglib-1.0';
import type Json from '@girs/json-1.0';
import type Champlain from '@girs/champlain-0.12';
import type Clutter from '@girs/clutter-1.0';
import type cairo from 'cairo';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export namespace GnomeMaps {
    /**
     * GnomeMaps-1.0
     */

    export namespace ContactStoreState {
        export const $gtype: GObject.GType<ContactStoreState>;
    }

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
    namespace Contact {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bounding-box': GObject.Object.Notify;
            'notify::icon': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
        }

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Contact.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Contact;

        // Signals

        connect<K extends keyof Contact.SignalSignatures>(signal: K, callback: Contact.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Contact.SignalSignatures>(
            signal: K,
            callback: Contact.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Contact.SignalSignatures>(
            signal: K,
            ...args: Contact.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_place(place: GeocodeGlib.Place): void;
        geocode(callback: ContactGeocodeCallback): void;
        get_places(): GeocodeGlib.Place[];
    }

    namespace ContactStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::state': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: ContactStoreState;
        }
    }

    class ContactStore extends GObject.Object {
        static $gtype: GObject.GType<ContactStore>;

        // Properties

        /**
         * The type of the contact.
         */
        get state(): ContactStoreState;

        // Constructors

        constructor(properties?: Partial<ContactStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContactStore;

        // Signals

        connect<K extends keyof ContactStore.SignalSignatures>(
            signal: K,
            callback: ContactStore.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContactStore.SignalSignatures>(
            signal: K,
            callback: ContactStore.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContactStore.SignalSignatures>(
            signal: K,
            ...args: ContactStore.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_contacts(): Contact[];
        /**
         * Load contacts from available backends.
         */
        load(): void;
        lookup(id: string, callback: ContactStoreLookupCallback): void;
    }

    namespace FileTileSource {
        // Signal signatures
        interface SignalSignatures extends Champlain.TileSource.SignalSignatures {
            'notify::max-zoom': GObject.Object.Notify;
            'notify::min-zoom': GObject.Object.Notify;
            'notify::path': GObject.Object.Notify;
            'notify::world': GObject.Object.Notify;
            'notify::cache': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::license': GObject.Object.Notify;
            'notify::license-uri': GObject.Object.Notify;
            'notify::max-zoom-level': GObject.Object.Notify;
            'notify::min-zoom-level': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::projection': GObject.Object.Notify;
            'notify::tile-size': GObject.Object.Notify;
            'notify::next-source': GObject.Object.Notify;
            'notify::renderer': GObject.Object.Notify;
        }

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FileTileSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileTileSource.SignalSignatures>(
            signal: K,
            callback: FileTileSource.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileTileSource.SignalSignatures>(
            signal: K,
            callback: FileTileSource.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileTileSource.SignalSignatures>(
            signal: K,
            ...args: FileTileSource.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        prepare(): boolean;
    }

    namespace OSMChangeset {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::comment': GObject.Object.Notify;
            'notify::created-by': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            comment: string;
            created_by: string;
            createdBy: string;
        }
    }

    class OSMChangeset extends GObject.Object {
        static $gtype: GObject.GType<OSMChangeset>;

        // Properties

        /**
         * The comment of the changes.
         */
        get comment(): string;
        set comment(val: string);
        get created_by(): string;
        set created_by(val: string);
        get createdBy(): string;
        set createdBy(val: string);

        // Constructors

        constructor(properties?: Partial<OSMChangeset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](comment?: string | null, created_by?: string | null): OSMChangeset;

        // Signals

        connect<K extends keyof OSMChangeset.SignalSignatures>(
            signal: K,
            callback: OSMChangeset.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OSMChangeset.SignalSignatures>(
            signal: K,
            callback: OSMChangeset.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OSMChangeset.SignalSignatures>(
            signal: K,
            ...args: OSMChangeset.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        serialize(): string;
    }

    namespace OSMNode {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            'notify::latitude': GObject.Object.Notify;
            'notify::longitude': GObject.Object.Notify;
            'notify::changeset': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::version': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {
            latitude: number;
            longitude: number;
        }
    }

    class OSMNode extends OSMObject {
        static $gtype: GObject.GType<OSMNode>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<OSMNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode;

        // Signals

        connect<K extends keyof OSMNode.SignalSignatures>(signal: K, callback: OSMNode.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OSMNode.SignalSignatures>(
            signal: K,
            callback: OSMNode.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OSMNode.SignalSignatures>(
            signal: K,
            ...args: OSMNode.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OSMOAuthProxyCall {
        // Signal signatures
        interface SignalSignatures extends Rest.OAuthProxyCall.SignalSignatures {
            'notify::proxy': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Rest.OAuthProxyCall.ConstructorProps {}
    }

    class OSMOAuthProxyCall extends Rest.OAuthProxyCall {
        static $gtype: GObject.GType<OSMOAuthProxyCall>;

        // Constructors

        constructor(properties?: Partial<OSMOAuthProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall;

        // Signals

        connect<K extends keyof OSMOAuthProxyCall.SignalSignatures>(
            signal: K,
            callback: OSMOAuthProxyCall.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OSMOAuthProxyCall.SignalSignatures>(
            signal: K,
            callback: OSMOAuthProxyCall.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OSMOAuthProxyCall.SignalSignatures>(
            signal: K,
            ...args: OSMOAuthProxyCall.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OSMObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::changeset': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::version': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            changeset: number;
            id: number;
            version: number;
        }
    }

    abstract class OSMObject extends GObject.Object {
        static $gtype: GObject.GType<OSMObject>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<OSMObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof OSMObject.SignalSignatures>(signal: K, callback: OSMObject.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OSMObject.SignalSignatures>(
            signal: K,
            callback: OSMObject.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OSMObject.SignalSignatures>(
            signal: K,
            ...args: OSMObject.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        delete_tag(key: string): void;
        get_tag(key: string): string;
        serialize(): string;
        set_tag(key: string, value: string): void;
    }

    namespace OSMRelation {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            'notify::changeset': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::version': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {}
    }

    class OSMRelation extends OSMObject {
        static $gtype: GObject.GType<OSMRelation>;

        // Constructors

        constructor(properties?: Partial<OSMRelation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number): OSMRelation;

        // Signals

        connect<K extends keyof OSMRelation.SignalSignatures>(
            signal: K,
            callback: OSMRelation.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OSMRelation.SignalSignatures>(
            signal: K,
            callback: OSMRelation.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OSMRelation.SignalSignatures>(
            signal: K,
            ...args: OSMRelation.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_member(role: string, type: number, ref: number): void;
    }

    namespace OSMWay {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            'notify::changeset': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::version': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {}
    }

    class OSMWay extends OSMObject {
        static $gtype: GObject.GType<OSMWay>;

        // Constructors

        constructor(properties?: Partial<OSMWay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number): OSMWay;

        // Signals

        connect<K extends keyof OSMWay.SignalSignatures>(signal: K, callback: OSMWay.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OSMWay.SignalSignatures>(signal: K, callback: OSMWay.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OSMWay.SignalSignatures>(
            signal: K,
            ...args: OSMWay.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_node_id(id: number): void;
    }

    type ContactClass = typeof Contact;
    abstract class ContactPrivate {
        static $gtype: GObject.GType<ContactPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContactStoreClass = typeof ContactStore;
    abstract class ContactStorePrivate {
        static $gtype: GObject.GType<ContactStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileTileSourceClass = typeof FileTileSource;
    abstract class FileTileSourcePrivate {
        static $gtype: GObject.GType<FileTileSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OSMChangesetClass = typeof OSMChangeset;
    abstract class OSMChangesetPrivate {
        static $gtype: GObject.GType<OSMChangesetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OSMNodeClass = typeof OSMNode;
    abstract class OSMNodePrivate {
        static $gtype: GObject.GType<OSMNodePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OSMOAuthProxyCallClass = typeof OSMOAuthProxyCall;
    abstract class OSMOAuthProxyCallPrivate {
        static $gtype: GObject.GType<OSMOAuthProxyCallPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OSMObjectClass = typeof OSMObject;
    abstract class OSMObjectPrivate {
        static $gtype: GObject.GType<OSMObjectPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OSMRelationClass = typeof OSMRelation;
    abstract class OSMRelationPrivate {
        static $gtype: GObject.GType<OSMRelationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OSMWayClass = typeof OSMWay;
    abstract class OSMWayPrivate {
        static $gtype: GObject.GType<OSMWayPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _ContactClass {
        static $gtype: GObject.GType<_ContactClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _ContactStoreClass {
        static $gtype: GObject.GType<_ContactStoreClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _OSMChangesetClass {
        static $gtype: GObject.GType<_OSMChangesetClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _OSMNodeClass {
        static $gtype: GObject.GType<_OSMNodeClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _OSMRelationClass {
        static $gtype: GObject.GType<_OSMRelationClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _OSMWayClass {
        static $gtype: GObject.GType<_OSMWayClass>;

        // Constructors

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
