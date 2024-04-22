/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gamerzilla-0.1-ambient.d.ts';

/**
 * Gamerzilla-0.1
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gamerzilla {
    module GamerzillaGobj {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            password: string;
            url: string;
            username: string;
        }
    }

    class GamerzillaGobj extends GObject.Object {
        static $gtype: GObject.GType<GamerzillaGobj>;

        // Own properties of Gamerzilla.GamerzillaGobj

        get password(): string;
        set password(val: string);
        get url(): string;
        set url(val: string);
        get username(): string;
        set username(val: string);

        // Constructors of Gamerzilla.GamerzillaGobj

        constructor(properties?: Partial<GamerzillaGobj.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GamerzillaGobj;

        // Own methods of Gamerzilla.GamerzillaGobj

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

        // Constructors of Gamerzilla.GamerzillaGobjPrivate

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
