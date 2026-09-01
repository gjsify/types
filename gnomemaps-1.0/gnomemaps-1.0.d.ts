
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
import type Shumate from '@girs/shumate-1.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Json from '@girs/json-1.0';

export namespace GnomeMaps {

    /**
     * GnomeMaps-1.0
     */


    function osm_finalize(): void;

    function osm_init(): void;

    /**
     * @param content XML data
     * @param length Length of data
     * @returns A MapsOSMObject
     * @throws GLib.Error
     */
    function osm_parse(content: string, length: number): OSMObject;

    namespace DownloadStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DownloadStore extends GObject.Object {
        static $gtype: GObject.GType<DownloadStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DownloadStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DownloadStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DownloadStore;

        // Signals
        /** @signal */
        connect<K extends keyof DownloadStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DownloadStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DownloadStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DownloadStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DownloadStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DownloadStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param tileset 
         * @param tile_ids 
         */
        compute_size_async(tileset: string, tile_ids: string[]): globalThis.Promise<number>;

        /**
         * @param tileset 
         * @param tile_ids 
         * @param callback 
         */
        compute_size_async(tileset: string, tile_ids: string[], callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param tileset 
         * @param tile_ids 
         * @param callback 
         */
        compute_size_async(tileset: string, tile_ids: string[], callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;

        /**
         * @param result 
         * @throws GLib.Error
         */
        compute_size_finish(result: Gio.AsyncResult): number;

        /**
         * Asynchronously executes a SQL statement.
         * @param sql SQL statement to execute
         */
        exec_async(sql: string): globalThis.Promise<boolean>;

        /**
         * Asynchronously executes a SQL statement.
         * @param sql SQL statement to execute
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        exec_async(sql: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously executes a SQL statement.
         * @param sql SQL statement to execute
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        exec_async(sql: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an `exec_async()` operation.
         * @param result 
         * @returns `true` if the operation succeeded, `false` otherwise
         * @throws GLib.Error
         */
        exec_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param tileset 
         * @param tile_ids 
         * @param mtime 
         */
        filter_by_mtime_async(tileset: string, tile_ids: string[], mtime: bigint | number): globalThis.Promise<string[]>;

        /**
         * @param tileset 
         * @param tile_ids 
         * @param mtime 
         * @param callback 
         */
        filter_by_mtime_async(tileset: string, tile_ids: string[], mtime: bigint | number, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param tileset 
         * @param tile_ids 
         * @param mtime 
         * @param callback 
         */
        filter_by_mtime_async(tileset: string, tile_ids: string[], mtime: bigint | number, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * @param result 
         * @throws GLib.Error
         */
        filter_by_mtime_finish(result: Gio.AsyncResult): string[];

        /**
         * @param tileset 
         * @param id 
         */
        get_async(tileset: string, id: string): globalThis.Promise<GLib.Bytes | null>;

        /**
         * @param tileset 
         * @param id 
         * @param callback 
         */
        get_async(tileset: string, id: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param tileset 
         * @param id 
         * @param callback 
         */
        get_async(tileset: string, id: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Bytes | null> | void;

        /**
         * Finishes a `get_async()` operation.
         * @param result a {@link Gio.AsyncResult}
         * @returns the data, or `null` if the data was not found or an error occurred
         * @throws GLib.Error
         */
        get_finish(result: Gio.AsyncResult): GLib.Bytes | null;

        /**
         * @param tileset 
         * @param ids 
         * @param data 
         * @param precompressed 
         * @param mtime 
         */
        insert_async(tileset: string, ids: string[], data: GLib.Bytes | Uint8Array, precompressed: boolean, mtime: bigint | number): globalThis.Promise<boolean>;

        /**
         * @param tileset 
         * @param ids 
         * @param data 
         * @param precompressed 
         * @param mtime 
         * @param callback 
         */
        insert_async(tileset: string, ids: string[], data: GLib.Bytes | Uint8Array, precompressed: boolean, mtime: bigint | number, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param tileset 
         * @param ids 
         * @param data 
         * @param precompressed 
         * @param mtime 
         * @param callback 
         */
        insert_async(tileset: string, ids: string[], data: GLib.Bytes | Uint8Array, precompressed: boolean, mtime: bigint | number, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param result 
         * @throws GLib.Error
         */
        insert_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param tileset 
         */
        list_tiles_async(tileset: string): globalThis.Promise<string[]>;

        /**
         * @param tileset 
         * @param callback 
         */
        list_tiles_async(tileset: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param tileset 
         * @param callback 
         */
        list_tiles_async(tileset: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * @param result 
         * @throws GLib.Error
         */
        list_tiles_finish(result: Gio.AsyncResult): string[];

        list_tilesets_async(): globalThis.Promise<string[]>;

        /**
         * @param callback 
         */
        list_tilesets_async(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param callback 
         */
        list_tilesets_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * @param result 
         * @throws GLib.Error
         */
        list_tilesets_finish(result: Gio.AsyncResult): string[];

        /**
         * @param path 
         * @throws GLib.Error
         */
        open(path: string): boolean;

        /**
         * @param tileset 
         * @param ids 
         */
        remove_async(tileset: string, ids: string[]): globalThis.Promise<boolean>;

        /**
         * @param tileset 
         * @param ids 
         * @param callback 
         */
        remove_async(tileset: string, ids: string[], callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param tileset 
         * @param ids 
         * @param callback 
         */
        remove_async(tileset: string, ids: string[], callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param result 
         * @throws GLib.Error
         */
        remove_finish(result: Gio.AsyncResult): boolean;
    }


    namespace OSMChangeset {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::comment": (pspec: GObject.ParamSpec) => void;
            "notify::created-by": (pspec: GObject.ParamSpec) => void;
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
         * @default null
         */
        get comment(): string;
        set comment(val: string);

        /**
         * @default null
         */
        get created_by(): string;
        set created_by(val: string);

        /**
         * @default null
         */
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

        static ["new"](comment: string | null, created_by: string | null): OSMChangeset;

        // Signals
        /** @signal */
        connect<K extends keyof OSMChangeset.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMChangeset.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OSMChangeset.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMChangeset.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OSMChangeset.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OSMChangeset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        serialize(): string;
    }


    namespace OSMNode {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            "notify::latitude": (pspec: GObject.ParamSpec) => void;
            "notify::longitude": (pspec: GObject.ParamSpec) => void;
            "notify::changeset": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
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
         * @default 0
         */
        get latitude(): number;
        set latitude(val: number);

        /**
         * The longitude of the node.
         * @default 0
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

        static ["new"](id: bigint | number, version: number, changeset: bigint | number, longitude: number, latitude: number): OSMNode;

        // Signals
        /** @signal */
        connect<K extends keyof OSMNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OSMNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OSMNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OSMNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace OSMObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::changeset": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            changeset: bigint | number;
            id: bigint | number;
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
         * @default 0
         */
        get changeset(): number;
        set changeset(val: bigint | number);

        /**
         * The OSM id of the object.
         * @default 0
         */
        get id(): number;
        set id(val: bigint | number);

        /**
         * The latest OSM version of the object.
         * @default 0
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
        connect<K extends keyof OSMObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMObject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OSMObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMObject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OSMObject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OSMObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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

        /**
         * @returns a hash table with key/values
         */
        get_tags(): { [key: string]: string };

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
            "notify::changeset": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
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

        static ["new"](id: bigint | number, version: number, changeset: bigint | number): OSMRelation;

        // Signals
        /** @signal */
        connect<K extends keyof OSMRelation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMRelation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OSMRelation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMRelation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OSMRelation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OSMRelation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param role 
         * @param type 
         * @param ref 
         */
        add_member(role: string, type: number, ref: bigint | number): void;
    }


    namespace OSMWay {
        // Signal signatures
        interface SignalSignatures extends OSMObject.SignalSignatures {
            "notify::changeset": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
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

        static ["new"](id: bigint | number, version: number, changeset: bigint | number): OSMWay;

        // Signals
        /** @signal */
        connect<K extends keyof OSMWay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMWay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OSMWay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OSMWay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OSMWay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OSMWay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param id 
         */
        add_node_id(id: bigint | number): void;
    }


    namespace Shield {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Shield extends GObject.Object {
        static $gtype: GObject.GType<Shield>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Shield.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Shield.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](node: Json.Node): Shield;

        static new_with_banners(node: Json.Node, banners: Json.Array): Shield;

        // Signals
        /** @signal */
        connect<K extends keyof Shield.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Shield.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Shield.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Shield.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Shield.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Shield.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param ref the highway reference
         * @param name the highway name
         * @param color the route color
         * @param scale the scale factor
         * @returns a {@link Shumate.VectorSprite}
         */
        draw(ref: string, name: string, color: string, scale: number): Shumate.VectorSprite;

        /**
         * @param prefix 
         */
        set_skip_prefix(prefix: string): void;
    }


    namespace SpriteSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::color-scheme": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_scheme: string;
            colorScheme: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SpriteSource extends GObject.Object {
        static $gtype: GObject.GType<SpriteSource>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get color_scheme(): string;

        /**
         * @construct-only
         * @default null
         */
        get colorScheme(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpriteSource.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpriteSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](color_scheme: string): SpriteSource;

        // Signals
        /** @signal */
        connect<K extends keyof SpriteSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpriteSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpriteSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpriteSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpriteSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpriteSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param network_name network name
         * @returns a {@link MapsShield}
         */
        get_shield_for_network(network_name: string): Shield;

        /**
         * Loads shield definitions from a JSON string.
         * @param json a JSON string
         */
        load_shield_defs(json: string): void;

        /**
         * Sets the sprite sheet's fallback function.
         * @param sprite_sheet a {@link Shumate.VectorSpriteSheet}
         */
        set_fallback(sprite_sheet: Shumate.VectorSpriteSheet): void;
    }


    namespace SyncMapSource {
        // Signal signatures
        interface SignalSignatures extends Shumate.MapSource.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::license-uri": (pspec: GObject.ParamSpec) => void;
            "notify::max-zoom-level": (pspec: GObject.ParamSpec) => void;
            "notify::min-zoom-level": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::projection": (pspec: GObject.ParamSpec) => void;
            "notify::tile-size": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Shumate.MapSource.ConstructorProps {}
    }

    /**
     * Wrapper of ShumateMapSource that creates a GTask for fill_tile_async
     * as a work-around for https://gitlab.gnome.org/GNOME/gjs/-/issues/72
     * 
     * The {@link GnomeMaps.SyncMapSource} structure contains only private data
     * and should be accessed using the provided API
     * @gir-type Class
     */
    abstract class SyncMapSource extends Shumate.MapSource {
        static $gtype: GObject.GType<SyncMapSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SyncMapSource.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SyncMapSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SyncMapSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SyncMapSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SyncMapSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SyncMapSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SyncMapSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SyncMapSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param tile 
         * @param task 
         * @virtual
         */
        vfunc_fill_tile(tile: Shumate.Tile, task: Gio.Task): void;
    }


    /**
     * @gir-type Alias
     */
    type DownloadStoreClass = typeof DownloadStore;

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
     * @gir-type Alias
     */
    type ShieldClass = typeof Shield;

    /**
     * @gir-type Alias
     */
    type SpriteSourceClass = typeof SpriteSource;

    /**
     * @gir-type Alias
     */
    type SyncMapSourceClass = typeof SyncMapSource;

    /**
     * @gir-type Struct
     */
    abstract class SyncMapSourcePrivate {
        static $gtype: GObject.GType<SyncMapSourcePrivate>;
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
