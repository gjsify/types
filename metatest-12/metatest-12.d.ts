
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './metatest-12-ambient.d.ts';
import './metatest-12-import.d.ts';
/**
 * MetaTest-12
 */

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
import type Cogl from '@girs/cogl-12';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-12';
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

    /**
     * Signal callback interface for `after-tests`
     */
    interface AfterTestsSignalCallback {
        ($obj: ContextTest): void
    }

    /**
     * Signal callback interface for `before-tests`
     */
    interface BeforeTestsSignalCallback {
        ($obj: ContextTest): void
    }

    /**
     * Signal callback interface for `run-tests`
     */
    interface RunTestsSignalCallback {
        ($obj: ContextTest): number
    }


    // Constructor properties interface

    interface ConstructorProperties extends Meta.Context.ConstructorProperties {
    }

}

interface ContextTest {

    // Own fields of MetaTest-12.MetaTest.ContextTest

    parent_instance: Meta.Context & GObject.Object

    // Owm methods of MetaTest-12.MetaTest.ContextTest

    run_tests(flags: TestRunFlags): number
    wait_for_x11_display(): void

    // Own signals of MetaTest-12.MetaTest.ContextTest

    connect(sigName: "after-tests", callback: ContextTest.AfterTestsSignalCallback): number
    connect_after(sigName: "after-tests", callback: ContextTest.AfterTestsSignalCallback): number
    emit(sigName: "after-tests", ...args: any[]): void
    connect(sigName: "before-tests", callback: ContextTest.BeforeTestsSignalCallback): number
    connect_after(sigName: "before-tests", callback: ContextTest.BeforeTestsSignalCallback): number
    emit(sigName: "before-tests", ...args: any[]): void
    connect(sigName: "run-tests", callback: ContextTest.RunTestsSignalCallback): number
    connect_after(sigName: "run-tests", callback: ContextTest.RunTestsSignalCallback): number
    emit(sigName: "run-tests", ...args: any[]): void

    // Class property signals of MetaTest-12.MetaTest.ContextTest

    connect(sigName: "notify::name", callback: (($obj: ContextTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ContextTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::unsafe-mode", callback: (($obj: ContextTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsafe-mode", callback: (($obj: ContextTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unsafe-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContextTest extends Meta.Context {

    // Own properties of MetaTest-12.MetaTest.ContextTest

    static name: string
    static $gtype: GObject.GType<ContextTest>

    // Constructors of MetaTest-12.MetaTest.ContextTest

    constructor(config?: ContextTest.ConstructorProperties) 
    _init(config?: ContextTest.ConstructorProperties): void
}

module TestMonitor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface TestMonitor {

    // Owm methods of MetaTest-12.MetaTest.TestMonitor

    destroy(): void

    // Class property signals of MetaTest-12.MetaTest.TestMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TestMonitor extends GObject.Object {

    // Own properties of MetaTest-12.MetaTest.TestMonitor

    static name: string
    static $gtype: GObject.GType<TestMonitor>

    // Constructors of MetaTest-12.MetaTest.TestMonitor

    constructor(config?: TestMonitor.ConstructorProperties) 
    constructor(context: Meta.Context, width: number, height: number, refresh_rate: number) 
    static new(context: Meta.Context, width: number, height: number, refresh_rate: number): TestMonitor
    _init(config?: TestMonitor.ConstructorProperties): void
}

interface ContextTestClass {
}

abstract class ContextTestClass {

    // Own properties of MetaTest-12.MetaTest.ContextTestClass

    static name: string
}

interface TestMonitorClass {

    // Own fields of MetaTest-12.MetaTest.TestMonitorClass

    parent_class: GObject.ObjectClass
}

abstract class TestMonitorClass {

    // Own properties of MetaTest-12.MetaTest.TestMonitorClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default MetaTest;
// END