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
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Mtk from '@girs/mtk-18';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Meta from '@girs/meta-18';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type Cogl from '@girs/cogl-18';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-18';
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Atk from '@girs/atk-1.0';

export namespace MetaTest {
    /**
     * MetaTest-18
     */

    /**
     * @gir-type Enum
     */
    enum ContextTestType {
        HEADLESS,
        VKMS,
        TEST,
    }

    /**
     * @gir-type Flags
     */
    enum ContextTestFlag {
        NONE,
        TEST_CLIENT,
        NO_X11,
        NO_ANIMATIONS,
    }

    /**
     * @gir-type Flags
     */
    enum TestRunFlags {
        NONE,
        CAN_SKIP,
    }

    namespace ContextTest {
        // Signal signatures
        interface SignalSignatures extends Meta.Context.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'after-tests': () => void;
            /**
             * @signal
             * @run-last
             */
            'before-tests': () => void;
            /**
             * @signal
             * @run-last
             */
            'run-tests': () => number;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::nick': (pspec: GObject.ParamSpec) => void;
            'notify::unsafe-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Meta.Context.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ContextTest extends Meta.Context {
        static $gtype: GObject.GType<ContextTest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextTest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContextTest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ContextTest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextTest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContextTest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextTest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContextTest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContextTest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags
         */
        run_tests(flags: TestRunFlags | null): number;
        /**
         * @param color
         */
        set_background_color(color: Cogl.Color): void;
        wait_for_x11_display(): void;
    }

    namespace TestMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TestMonitor extends GObject.Object {
        static $gtype: GObject.GType<TestMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TestMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TestMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Meta.Context, width: number, height: number, refresh_rate: number): TestMonitor;

        // Signals

        /** @signal */
        connect<K extends keyof TestMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TestMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TestMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TestMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TestMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TestMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        destroy(): void;
    }

    /**
     * @gir-type Alias
     */
    type ContextTestClass = typeof ContextTest;
    /**
     * @gir-type Alias
     */
    type TestMonitorClass = typeof TestMonitor;
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

export default MetaTest;

// END
