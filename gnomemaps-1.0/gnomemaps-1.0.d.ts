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

    /**
     * @gir-type Enum
     */
    export namespace ContactStoreState {
        export const $gtype: GObject.GType<ContactStoreState>;
    }

    /**
     * @gir-type Enum
     */
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
    /**
     * @param content XML data
     * @param length Length of data
     * @returns A MapsOSMObject
     */
    function osm_parse(content: string, length: number): OSMObject;
    /**
     * @gir-type Callback
     */
    interface ContactGeocodeCallback {
        (contact: Contact): void;
    }
    /**
     * @gir-type Callback
     */
    interface ContactStoreLookupCallback {
        (contact: Contact): void;
    }
    namespace Contact {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bounding-box': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Contact extends GObject.Object {
        static $gtype: GObject.GType<Contact>;

        // Properties

        /**
         * The bounding box for the contact.
         * @read-only
         */
        get bounding_box(): Champlain.BoundingBox;
        /**
         * The bounding box for the contact.
         * @read-only
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Contact.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Contact.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Contact;

        // Signals

        /** @signal */
        connect<K extends keyof Contact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Contact.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Contact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Contact.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Contact.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Contact.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param place
         */
        add_place(place: GeocodeGlib.Place): void;
        /**
         * @param callback A {@link GnomeMaps.ContactGeocodeCallback} function
         */
        geocode(callback: ContactGeocodeCallback): void;
        /**
         * @returns a list of {@link GeocodeGlib.Place}
         */
        get_places(): GeocodeGlib.Place[];
    }

    namespace ContactStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: ContactStoreState;
        }
    }

    /**
     * @gir-type Class
     */
    class ContactStore extends GObject.Object {
        static $gtype: GObject.GType<ContactStore>;

        // Properties

        /**
         * The type of the contact.
         * @read-only
         */
        get state(): ContactStoreState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContactStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContactStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContactStore;

        // Signals

        /** @signal */
        connect<K extends keyof ContactStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContactStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContactStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContactStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContactStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContactStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns a list of {@link GnomeMaps.Contact},
         */
        get_contacts(): Contact[];
        /**
         * Load contacts from available backends.
         */
        load(): void;
        /**
         * @param id
         * @param callback A {@link GnomeMaps.ContactStoreLookupCallback} function
         */
        lookup(id: string, callback: ContactStoreLookupCallback): void;
    }

    namespace FileTileSource {
        // Signal signatures
        interface SignalSignatures extends Champlain.TileSource.SignalSignatures {
            'notify::max-zoom': (pspec: GObject.ParamSpec) => void;
            'notify::min-zoom': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::world': (pspec: GObject.ParamSpec) => void;
            'notify::cache': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::license-uri': (pspec: GObject.ParamSpec) => void;
            'notify::max-zoom-level': (pspec: GObject.ParamSpec) => void;
            'notify::min-zoom-level': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::projection': (pspec: GObject.ParamSpec) => void;
            'notify::tile-size': (pspec: GObject.ParamSpec) => void;
            'notify::next-source': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
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
     * The {@link GnomeMaps.FileTileSource} structure contains only private data
     * and should be accessed using the provided API
     * @gir-type Class
     */
    class FileTileSource extends Champlain.TileSource {
        static $gtype: GObject.GType<FileTileSource>;

        // Properties

        /**
         * The maximum zoom level of the tile source.
         * @read-only
         */
        get max_zoom(): number;
        /**
         * The maximum zoom level of the tile source.
         * @read-only
         */
        get maxZoom(): number;
        /**
         * The minimum zoom level of the tile source.
         * @read-only
         */
        get min_zoom(): number;
        /**
         * The minimum zoom level of the tile source.
         * @read-only
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
         * @read-only
         */
        get world(): Champlain.BoundingBox;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileTileSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileTileSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FileTileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileTileSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileTileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileTileSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileTileSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileTileSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        prepare(): boolean;
    }

    namespace OSMChangeset {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::comment': (pspec: GObject.ParamSpec) => void;
            'notify::created-by': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            comment: string;
            created_by: string;
            createdBy: string;
        }
    }

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OSMChangeset.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OSMChangeset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](comment?: string | null, created_by?: string | null): OSMChangeset;

        // Signals

        /** @signal */
        connect<K extends keyof OSMChangeset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMChangeset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OSMChangeset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMChangeset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OSMChangeset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OSMChangeset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        serialize(): string;
    }

    namespace OSMNode {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            'notify::latitude': (pspec: GObject.ParamSpec) => void;
            'notify::longitude': (pspec: GObject.ParamSpec) => void;
            'notify::changeset': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {
            latitude: number;
            longitude: number;
        }
    }

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OSMNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OSMNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode;

        // Signals

        /** @signal */
        connect<K extends keyof OSMNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OSMNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OSMNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OSMNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OSMOAuthProxyCall {
        // Signal signatures
        interface SignalSignatures extends Rest.OAuthProxyCall.SignalSignatures {
            'notify::proxy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Rest.OAuthProxyCall.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class OSMOAuthProxyCall extends Rest.OAuthProxyCall {
        static $gtype: GObject.GType<OSMOAuthProxyCall>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OSMOAuthProxyCall.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OSMOAuthProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall;

        // Signals

        /** @signal */
        connect<K extends keyof OSMOAuthProxyCall.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMOAuthProxyCall.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OSMOAuthProxyCall.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMOAuthProxyCall.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OSMOAuthProxyCall.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OSMOAuthProxyCall.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OSMObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::changeset': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            changeset: number;
            id: number;
            version: number;
        }
    }

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OSMObject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OSMObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof OSMObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OSMObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OSMObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OSMObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param key
         */
        delete_tag(key: string): void;
        /**
         * @param key
         */
        get_tag(key: string): string;
        serialize(): string;
        /**
         * @param key
         * @param value
         */
        set_tag(key: string, value: string): void;
    }

    namespace OSMRelation {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            'notify::changeset': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class OSMRelation extends OSMObject {
        static $gtype: GObject.GType<OSMRelation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OSMRelation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OSMRelation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number): OSMRelation;

        // Signals

        /** @signal */
        connect<K extends keyof OSMRelation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMRelation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OSMRelation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMRelation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OSMRelation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OSMRelation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param role
         * @param type
         * @param ref
         */
        add_member(role: string, type: number, ref: number): void;
    }

    namespace OSMWay {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            'notify::changeset': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OSMObject.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class OSMWay extends OSMObject {
        static $gtype: GObject.GType<OSMWay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OSMWay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OSMWay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, version: number, changeset: number): OSMWay;

        // Signals

        /** @signal */
        connect<K extends keyof OSMWay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMWay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OSMWay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OSMWay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OSMWay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OSMWay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param id
         */
        add_node_id(id: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ContactClass = typeof Contact;
    /**
     * @gir-type Struct
     */
    abstract class ContactPrivate {
        static $gtype: GObject.GType<ContactPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ContactStoreClass = typeof ContactStore;
    /**
     * @gir-type Struct
     */
    abstract class ContactStorePrivate {
        static $gtype: GObject.GType<ContactStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileTileSourceClass = typeof FileTileSource;
    /**
     * @gir-type Struct
     */
    abstract class FileTileSourcePrivate {
        static $gtype: GObject.GType<FileTileSourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OSMChangesetClass = typeof OSMChangeset;
    /**
     * @gir-type Struct
     */
    abstract class OSMChangesetPrivate {
        static $gtype: GObject.GType<OSMChangesetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OSMNodeClass = typeof OSMNode;
    /**
     * @gir-type Struct
     */
    abstract class OSMNodePrivate {
        static $gtype: GObject.GType<OSMNodePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OSMOAuthProxyCallClass = typeof OSMOAuthProxyCall;
    /**
     * @gir-type Struct
     */
    abstract class OSMOAuthProxyCallPrivate {
        static $gtype: GObject.GType<OSMOAuthProxyCallPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OSMObjectClass = typeof OSMObject;
    /**
     * @gir-type Struct
     */
    abstract class OSMObjectPrivate {
        static $gtype: GObject.GType<OSMObjectPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OSMRelationClass = typeof OSMRelation;
    /**
     * @gir-type Struct
     */
    abstract class OSMRelationPrivate {
        static $gtype: GObject.GType<OSMRelationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OSMWayClass = typeof OSMWay;
    /**
     * @gir-type Struct
     */
    abstract class OSMWayPrivate {
        static $gtype: GObject.GType<OSMWayPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _ContactClass {
        static $gtype: GObject.GType<_ContactClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _ContactStoreClass {
        static $gtype: GObject.GType<_ContactStoreClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _OSMChangesetClass {
        static $gtype: GObject.GType<_OSMChangesetClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _OSMNodeClass {
        static $gtype: GObject.GType<_OSMNodeClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _OSMRelationClass {
        static $gtype: GObject.GType<_OSMRelationClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _OSMWayClass {
        static $gtype: GObject.GType<_OSMWayClass>;
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
