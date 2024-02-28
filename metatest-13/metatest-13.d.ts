/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './metatest-13-ambient.d.ts';
import './metatest-13-import.d.ts';
/**
 * MetaTest-13
 */

import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Mtk from '@girs/mtk-13';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';
import type Meta from '@girs/meta-13';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-13';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-13';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-13';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace MetaTest {
    enum ContextTestType {
        HEADLESS,
        VKMS,
        NESTED,
    }
    enum ContextTestFlag {
        NONE,
        TEST_CLIENT,
        NO_X11,
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
    }

    class ContextTest extends Meta.Context {
        // Owm methods of MetaTest-13.ContextTest

        run_tests(flags: TestRunFlags): number;
        wait_for_x11_display(): void;
    }

    module TestMonitor {
        // Constructor properties interface
    }

    class TestMonitor extends GObject.Object {
        // Constructors of MetaTest-13.TestMonitor

        static ['new'](context: Meta.Context, width: number, height: number, refresh_rate: number): TestMonitor;

        // Owm methods of MetaTest-13.TestMonitor

        destroy(): void;
    }

    class ContextTestClass {}

    class TestMonitorClass {}

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
