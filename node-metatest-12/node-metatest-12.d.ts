
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-metatest-12-import.d.ts';
    
/**
 * MetaTest-12
 */

import type xlib from '@girs/node-xlib-2.0';
import type xfixes from '@girs/node-xfixes-4.0';
import type Meta from '@girs/node-meta-12';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GDesktopEnums from '@girs/node-gdesktopenums-3.0';
import type CoglPango from '@girs/node-coglpango-12';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type cairo from '@girs/node-cairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type Cogl from '@girs/node-cogl-12';
import type Graphene from '@girs/node-graphene-1.0';
import type GL from '@girs/node-gl-1.0';
import type Clutter from '@girs/node-clutter-12';
import type Json from '@girs/node-json-1.0';
import type Atk from '@girs/node-atk-1.0';

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
        (): void
    }

    /**
     * Signal callback interface for `before-tests`
     */
    interface BeforeTestsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `run-tests`
     */
    interface RunTestsSignalCallback {
        (): number
    }


    // Constructor properties interface

    interface ConstructorProperties extends Meta.Context.ConstructorProperties {
    }

}

interface ContextTest {

    // Own properties of MetaTest-12.MetaTest.ContextTest

    __gtype__: number

    // Own fields of MetaTest-12.MetaTest.ContextTest

    parentInstance: any

    // Owm methods of MetaTest-12.MetaTest.ContextTest

    runTests(flags: TestRunFlags): number
    waitForX11Display(): void

    // Own signals of MetaTest-12.MetaTest.ContextTest

    connect(sigName: "after-tests", callback: ContextTest.AfterTestsSignalCallback): number
    on(sigName: "after-tests", callback: ContextTest.AfterTestsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "after-tests", callback: ContextTest.AfterTestsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "after-tests", callback: ContextTest.AfterTestsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "after-tests", ...args: any[]): void
    connect(sigName: "before-tests", callback: ContextTest.BeforeTestsSignalCallback): number
    on(sigName: "before-tests", callback: ContextTest.BeforeTestsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-tests", callback: ContextTest.BeforeTestsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-tests", callback: ContextTest.BeforeTestsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-tests", ...args: any[]): void
    connect(sigName: "run-tests", callback: ContextTest.RunTestsSignalCallback): number
    on(sigName: "run-tests", callback: ContextTest.RunTestsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-tests", callback: ContextTest.RunTestsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-tests", callback: ContextTest.RunTestsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-tests", ...args: any[]): void

    // Class property signals of MetaTest-12.MetaTest.ContextTest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unsafe-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContextTest extends Meta.Context {

    // Own properties of MetaTest-12.MetaTest.ContextTest

    static name: string

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

    // Own properties of MetaTest-12.MetaTest.TestMonitor

    __gtype__: number

    // Owm methods of MetaTest-12.MetaTest.TestMonitor

    destroy(): void

    // Class property signals of MetaTest-12.MetaTest.TestMonitor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TestMonitor extends GObject.Object {

    // Own properties of MetaTest-12.MetaTest.TestMonitor

    static name: string

    // Constructors of MetaTest-12.MetaTest.TestMonitor

    constructor(config?: TestMonitor.ConstructorProperties) 
    constructor(context: Meta.Context, width: number, height: number, refreshRate: number) 
    static new(context: Meta.Context, width: number, height: number, refreshRate: number): TestMonitor
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

    parentClass: GObject.ObjectClass
}

abstract class TestMonitorClass {

    // Own properties of MetaTest-12.MetaTest.TestMonitorClass

    static name: string
}

}

export default MetaTest;
// END