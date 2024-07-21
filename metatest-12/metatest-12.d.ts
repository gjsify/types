/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Meta from '@girs/meta-12';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-12';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-12';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-12';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace MetaTest {
    /**
     * MetaTest-12
     */

    export namespace ContextTestType {
        export const $gtype: GObject.GType<ContextTestType>;
    }

    enum ContextTestType {
        HEADLESS,
        VKMS,
        NESTED,
    }
    export namespace ContextTestFlag {
        export const $gtype: GObject.GType<ContextTestFlag>;
    }

    enum ContextTestFlag {
        NONE,
        TEST_CLIENT,
        NO_X11,
    }
    export namespace TestRunFlags {
        export const $gtype: GObject.GType<TestRunFlags>;
    }

    enum TestRunFlags {
        NONE,
        CAN_SKIP,
    }
    module ContextTest {
        // Signal callback interfaces

        interface AfterTests {
            (): void;
        }

        interface BeforeTests {
            (): void;
        }

        interface RunTests {
            (): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Meta.Context.ConstructorProps {}
    }

    class ContextTest extends Meta.Context {
        static $gtype: GObject.GType<ContextTest>;

        // Constructors of MetaTest.ContextTest

        constructor(properties?: Partial<ContextTest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of MetaTest.ContextTest

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'after-tests', callback: (_source: this) => void): number;
        connect_after(signal: 'after-tests', callback: (_source: this) => void): number;
        emit(signal: 'after-tests'): void;
        connect(signal: 'before-tests', callback: (_source: this) => void): number;
        connect_after(signal: 'before-tests', callback: (_source: this) => void): number;
        emit(signal: 'before-tests'): void;
        connect(signal: 'run-tests', callback: (_source: this) => number): number;
        connect_after(signal: 'run-tests', callback: (_source: this) => number): number;
        emit(signal: 'run-tests'): void;

        // Own methods of MetaTest.ContextTest

        run_tests(flags: TestRunFlags): number;
        wait_for_x11_display(): void;
    }

    module TestMonitor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class TestMonitor extends GObject.Object {
        static $gtype: GObject.GType<TestMonitor>;

        // Constructors of MetaTest.TestMonitor

        constructor(properties?: Partial<TestMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Meta.Context, width: number, height: number, refresh_rate: number): TestMonitor;

        // Own methods of MetaTest.TestMonitor

        destroy(): void;
    }

    type ContextTestClass = typeof ContextTest;
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
