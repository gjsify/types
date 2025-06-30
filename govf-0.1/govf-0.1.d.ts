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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Govf {
    /**
     * Govf-0.1
     */

    export namespace PackageError {
        export const $gtype: GObject.GType<PackageError>;
    }

    enum PackageError {
        FAILED,
        NOT_FOUND,
        XML,
        LAST,
    }
    namespace Disk {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Disk extends GObject.Object {
        static $gtype: GObject.GType<Disk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Disk.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Disk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Disk;

        // Signals

        connect<K extends keyof Disk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Disk.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Disk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Disk.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Disk.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Disk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the disk's capacity.
         * @returns the capacity
         */
        get_capacity(): string;
        /**
         * Returns the disk id.
         * @returns the disk id
         */
        get_disk_id(): string;
        /**
         * Returns the disk's file reference.
         * @returns the file ref
         */
        get_file_ref(): string;
        /**
         * Returns the disk's format.
         * @returns the format
         */
        get_format(): string;
        /**
         * Sets a new capacity for the disk.
         * @param capacity capacity for the disk
         */
        set_capacity(capacity: string): void;
        /**
         * Sets a new disk id for the disk.
         * @param disk_id disk id for the disk
         */
        set_disk_id(disk_id: string): void;
        /**
         * Sets a new file reference for the disk.
         * @param file_ref file ref for the disk
         */
        set_file_ref(file_ref: string): void;
        /**
         * Sets a new format for the disk.
         * @param format format for the disk
         */
        set_format(format: string): void;
    }

    namespace Package {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Package extends GObject.Object {
        static $gtype: GObject.GType<Package>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Package.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Package.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Package;

        // Signals

        connect<K extends keyof Package.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Package.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Package.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Package.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Package.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Package.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Extracts a disk...
         * @param disk a #GovfDisk
         * @param save_path a file path
         * @param cancellable a #GCancellable or %NULL
         */
        extract_disk(disk: Disk, save_path: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Extracts a disk...
         * @param disk a #GovfDisk
         * @param save_path a file path
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call      when the request is satisfied
         */
        extract_disk(
            disk: Disk,
            save_path: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Extracts a disk...
         * @param disk a #GovfDisk
         * @param save_path a file path
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call      when the request is satisfied
         */
        extract_disk(
            disk: Disk,
            save_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        extract_disk_finish(result: Gio.AsyncResult): boolean;
        /**
         * Returns an array with all the disks associated with the OVF package.
         * @returns an array
         */
        get_disks(): Disk[];
        /**
         * Loads an OVF package from a memory buffer that holds an .ovf file.
         * @param data OVF data
         * @param length size of the OVF data
         * @returns %TRUE if the operation succeeded
         */
        load_from_data(data: string, length: number): boolean;
        /**
         * Loads an OVF package from an uncompressed .ovf file.
         * @param filename an .ovf file name
         * @returns %TRUE if the operation succeeded
         */
        load_from_file(filename: string): boolean;
        /**
         * Loads an OVF package from a compressed .ova file.
         *
         * `callback` should call govf_package_load_from_ova_file_finish()
         * to get the result of this asynchronous operation.
         * @param filename an .ova file name
         * @param cancellable a #GCancellable or %NULL
         */
        load_from_ova_file(filename: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Loads an OVF package from a compressed .ova file.
         *
         * `callback` should call govf_package_load_from_ova_file_finish()
         * to get the result of this asynchronous operation.
         * @param filename an .ova file name
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call when      the request is satisfied
         */
        load_from_ova_file(
            filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an OVF package from a compressed .ova file.
         *
         * `callback` should call govf_package_load_from_ova_file_finish()
         * to get the result of this asynchronous operation.
         * @param filename an .ova file name
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call when      the request is satisfied
         */
        load_from_ova_file(
            filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        load_from_ova_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves the OVF package to an uncompressed .ovf file.
         * @param filename an .ovf file name
         * @returns %TRUE if the operation succeeded
         */
        save_file(filename: string): boolean;
    }

    type DiskClass = typeof Disk;
    type PackageClass = typeof Package;
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

export default Govf;

// END
