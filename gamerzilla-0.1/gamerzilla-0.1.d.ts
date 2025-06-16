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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gamerzilla {
    /**
     * Gamerzilla-0.1
     */

    namespace GamerzillaGobj {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            password: string;
            url: string;
            username: string;
        }
    }

    class GamerzillaGobj extends GObject.Object {
        static $gtype: GObject.GType<GamerzillaGobj>;

        // Properties

        get password(): string;
        set password(val: string);
        get url(): string;
        set url(val: string);
        get username(): string;
        set username(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GamerzillaGobj.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GamerzillaGobj.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GamerzillaGobj;

        // Signals

        connect<K extends keyof GamerzillaGobj.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GamerzillaGobj.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GamerzillaGobj.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GamerzillaGobj.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GamerzillaGobj.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GamerzillaGobj.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        connect(): void;
        connect(...args: never[]): any;
        /**
         * Runs the server.
         */
        serverstart(): void;
        /**
         * Stops the server.
         */
        serverstop(): void;
    }

    type GamerzillaGobjClass = typeof GamerzillaGobj;
    abstract class GamerzillaGobjPrivate {
        static $gtype: GObject.GType<GamerzillaGobjPrivate>;

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

export default Gamerzilla;

// END
