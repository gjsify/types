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
import type Json from '@girs/json-1.0';
import type Gee from '@girs/gee-0.8';

export namespace Libsitra {
    /**
     * Libsitra-0.1
     */

    namespace Font {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::family': (pspec: GObject.ParamSpec) => void;
            'notify::category': (pspec: GObject.ParamSpec) => void;
            'notify::variable': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::weights': (pspec: GObject.ParamSpec) => void;
            'notify::subsets': (pspec: GObject.ParamSpec) => void;
            'notify::files': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            family: string;
            category: string;
            variable: boolean;
            license: string;
            weights: Gee.List;
            subsets: Gee.List;
            files: Gee.Map;
            styles: Gee.List;
        }
    }

    class Font extends GObject.Object {
        static $gtype: GObject.GType<Font>;

        // Properties

        get id(): string;
        set id(val: string);
        get family(): string;
        set family(val: string);
        get category(): string;
        set category(val: string);
        get variable(): boolean;
        set variable(val: boolean);
        get license(): string;
        set license(val: string);
        get weights(): Gee.List;
        set weights(val: Gee.List);
        get subsets(): Gee.List;
        set subsets(val: Gee.List);
        get files(): Gee.Map;
        set files(val: Gee.Map);
        get styles(): Gee.List;
        set styles(val: Gee.List);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Font.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Font.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            id: string,
            family: string,
            category: string,
            variable: boolean,
            license: string,
            weights: Gee.List,
            subsets: Gee.List,
            styles: Gee.List,
            files?: Gee.Map | null,
            links?: Gee.Map | null,
        ): Font;

        // Signals

        connect<K extends keyof Font.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Font.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Font.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Font.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static from_json(obj: Json.Object): Font;

        // Methods

        get_id(): string;
        set_id(value: string): void;
        get_family(): string;
        set_family(value: string): void;
        get_category(): string;
        set_category(value: string): void;
        get_variable(): boolean;
        set_variable(value: boolean): void;
        get_license(): string;
        set_license(value: string): void;
        get_weights(): Gee.List;
        set_weights(value: Gee.List): void;
        get_subsets(): Gee.List;
        set_subsets(value: Gee.List): void;
        get_files(): Gee.Map;
        set_files(value: Gee.Map): void;
        get_styles(): Gee.List;
        set_styles(value: Gee.List): void;
    }

    namespace Fonts {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Fonts extends GObject.Object {
        static $gtype: GObject.GType<Fonts>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Fonts.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Fonts.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Fonts;

        // Signals

        connect<K extends keyof Fonts.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fonts.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fonts.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fonts.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fonts.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Fonts.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        font(id: string): Font | null;
        collection(): Gee.Collection;
    }

    namespace Library {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'installation-started': (arg0: string) => void;
            'installation-progress': (arg0: string, arg1: number) => void;
            'installation-completed': (arg0: string, arg1: boolean, arg2: string | null) => void;
            'uninstallation-completed': (arg0: string, arg1: boolean, arg2: string | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Library extends GObject.Object {
        static $gtype: GObject.GType<Library>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Library.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Library.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Library;

        // Signals

        connect<K extends keyof Library.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Library.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Library.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Library.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Library.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Library.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        is_installed(font: Font): boolean;
        list_installed(): Gee.List;
        install(font: Font): globalThis.Promise<void>;
        install(font: Font, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        install(font: Font, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        install_finish(_res_: Gio.AsyncResult): void;
        cancel(): void;
        uninstall(font: Font): globalThis.Promise<void>;
        uninstall(font: Font, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        uninstall(font: Font, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        uninstall_finish(_res_: Gio.AsyncResult): void;
    }

    type FontClass = typeof Font;
    abstract class FontPrivate {
        static $gtype: GObject.GType<FontPrivate>;
    }

    type FontsClass = typeof Fonts;
    abstract class FontsPrivate {
        static $gtype: GObject.GType<FontsPrivate>;
    }

    type LibraryClass = typeof Library;
    abstract class LibraryPrivate {
        static $gtype: GObject.GType<LibraryPrivate>;
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

export default Libsitra;

// END
